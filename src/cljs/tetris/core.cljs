(ns tetris.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent :refer [atom]]
            [tetris.rules :as rules]
            [cljs.core.async :refer [put! chan <! >! timeout close!]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(defonce c (chan))
(defonce state (atom (rules/initial-state)))

(defn hello-world [state]
  (let [cell-dim 20
        {:keys [board score high-score]} @state
        sc (set (rules/shape-coords @state))]
    [:div
     [:h1 "Tetris"]
     [:svg {:width (* cell-dim 10) :height (* cell-dim 22)}
      (doall (for [i (range 10) j (range 22)]
        [:rect { :key (str i ":" j) :x (* i cell-dim) :y (* j cell-dim)
                :width cell-dim :height cell-dim
                :stroke :red :fill (cond
                                     (board [i j]) :blue
                                     (sc [i j]) :green
                                     :default :black) }]))]
     [:h4 (str "Score: " score)]
     [:h4 (str "High Score: " high-score)]]))

(reagent/render-component
  [hello-world state]
  (do
    (set! (.-onkeydown js/window)
                 (fn [e] (when (and (#{32 37 38 39 40} (.-keyCode e))
                                    (= (.-target e) (.-body js/document)))
                           (.preventDefault e))))
    (go-loop
      []
      (when-let [k (<! c)]
        (case k
          37 (swap! state rules/x-shift dec)
          39 (swap! state rules/x-shift inc)
          38 (swap! state rules/rotate rules/rotate-ccw)
          40 (swap! state rules/rotate rules/rotate-cw)
          32 (swap! state rules/fast-drop)
          (prn k))
        (recur)))
    (set! (.-onkeydown js/document) #(go (>! c (-> % .-keyCode))))
    (js/setInterval #(swap! state rules/game-step) 10)
    (. js/document (getElementById "app"))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
