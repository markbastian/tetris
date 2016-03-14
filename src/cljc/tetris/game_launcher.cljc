(ns tetris.game-launcher
  (:require
    [quil.core :as q #?@(:cljs [:include-macros true])]
    [quil.middleware :as m]
    [tetris.shapes :refer [shapes]]
    [tetris.rules :as rules]))

(defn setup []
  (q/smooth)
  (q/frame-rate 100)
  (rules/initial-state))

(defn render [{:keys [board] :as state}]
  (let [dim 20 sc (set (rules/shape-coords state))]
    (do
      (q/background 0 0 0)
      (doseq [i (range 10) j (range 22)]
        (q/with-fill
          (cond
            (board [i j]) [0 255 0]
            (sc [i j]) [255 0 0]
            :default [255 255 255])
          (q/rect (* i dim) (* j dim) dim dim))))))

(defn launch-sketch [{:keys[width height host]}]
  (q/sketch
    :title "lander"
    #?@(:cljs [:host host])
    :setup setup
    :draw render
    :update rules/game-step
    :middleware [m/fun-mode]
    :size [width height]
    :key-pressed (fn [state { :keys [key-code] }]
                   (case key-code
                     38 (rules/rotate state rules/rotate-ccw)
                     40 (rules/rotate state rules/rotate-cw)
                     37 (rules/x-shift state dec)
                     39 (rules/x-shift state inc)
                     32 (rules/fast-drop state)
                     state))))

#?(:clj (launch-sketch { :width 220 :height 440 }))

#?(:cljs (defn ^:export launch-app[host width height]
           (launch-sketch { :width width :height height :host host})))