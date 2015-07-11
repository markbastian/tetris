(ns lander.game-launcher
  (:require
    [quil.core :as q #?@(:cljs [:include-macros true])]
    [quil.middleware :as m]
    [lander.input :as in]
    [lander.simulation :as sim]
    [lander.game-state :as gs]
    [lander.quil-renderer :as qr]))

(defn setup []
  (q/smooth)
  (q/frame-rate 100)
  { :game-state :before })

(defn launch-sketch [{:keys[width height host]}]
  (q/sketch
    :title "Lunar Lander"
    #?@(:cljs [:host host])
    :setup setup
    :draw #(qr/render %)
    :update #(-> % sim/sim gs/game-state)
    :middleware [m/fun-mode]
    :size [width height]
    :key-pressed (fn [s { :keys [key-code] }] (in/handle-keydown s key-code))
    :key-released (fn [s] (assoc-in s [:lander :thrust] 0))))

#?(:cljs (defn ^:export launch-app[host width height]
           (launch-sketch { :width width :height height :host host})))