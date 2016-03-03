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
        {:keys [board]} @state
        sc (set (rules/shape-coords @state))]
    [:div
     [:h1
      (str "Tetris(" (count sc) ")")]
     [:svg {:width 480 :height 480}
      (doall (for [i (range 10) j (range 22)]
        [:rect { :key (str i ":" j) :x (* i cell-dim) :y (* j cell-dim)
                :width cell-dim :height cell-dim
                :stroke :red :fill (cond
                                     (board [i j]) :blue
                                     (sc [i j]) :green
                                     :default :black) }]))]
     [:div
      [:button #_{:on-click #(swap! app-state update :robot forward)} "Move 1"]
      [:button {:on-click #(swap! state rules/rotate rules/rotate-ccw)} "Rotate right"]
      [:button {:on-click #(swap! state rules/rotate rules/rotate-cw)} "Rotate left"]]]))

(reagent/render-component
  [hello-world state]
  (do
    (go-loop
      []
      (when-let [k (<! c)]
        (case k
          65 (swap! state rules/x-shift dec)
          68 (swap! state rules/x-shift inc)
          87 (swap! state rules/rotate rules/rotate-ccw)
          83 (swap! state rules/rotate rules/rotate-cw)
          88 (swap! state rules/fast-drop)
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
