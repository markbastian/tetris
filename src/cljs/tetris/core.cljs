(ns tetris.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent :refer [atom]]
            [tetris.rules :as rules]
            [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [cljs.pprint :refer [pprint]]
            [cljsjs.hammer]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(defn render [state]
  (let [cell-dim 20
        {:keys [locked score high-score]} @state
        sc (set (rules/shape-coords @state))]
    [:div
     [:h1 "Tetris Clone"]
     [:svg {:width (* cell-dim 10) :height (* cell-dim 22)}
      (doall (for [i (range 10) j (range 22)]
        [:rect { :key (str i ":" j) :x (* i cell-dim) :y (* j cell-dim)
                :width cell-dim :height cell-dim
                :stroke :red :fill (cond
                                     (locked [i j]) :blue
                                     (sc [i j]) :orange
                                     :default :black) }]))]
     [:h4 (str "Score: " score)]
     [:h4 (str "High Score: " high-score)]

     ;[:button #(prn (with-out-str (pprint state))) "dump state"]
     ]))

(defn setup-keys [k state]
  (case k
    37 (swap! state rules/x-shift dec)
    39 (swap! state rules/x-shift inc)
    38 (swap! state rules/rotate rules/rotate-cw)
    40 (swap! state rules/rotate rules/rotate-ccw)
    32 (swap! state rules/fast-drop)
    (pprint state)))

(when-let [app-context (. js/document (getElementById "app"))]
  (let [                                                    ;h (js/Hammer. app-context)
        c (chan) state (atom (rules/initial-state))]
  (reagent/render-component
    [render state]
    (do
      #_(.on h "panleft panright swipeleft swiperight tap press"
           (fn [e]
             (case (.-type e)
               "panleft" (swap! state rules/x-shift dec)
               "panright" (swap! state rules/x-shift inc)
               "tap" (when (== 2 (.-tapCount e)) (swap! state rules/fast-drop))
               (pprint e))))
      (set! (.-onkeydown js/window)
            (fn [e] (when (and (#{32 37 38 39 40} (.-keyCode e))
                               (= (.-target e) (.-body js/document)))
                      (.preventDefault e))))
      (go-loop
        []
        (when-let [k (<! c)]
          (setup-keys k state)
          (recur)))
      (set! (.-onkeydown js/document) #(go (>! c (-> % .-keyCode))))
      (js/setInterval #(swap! state rules/game-step) 10)
      app-context))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
