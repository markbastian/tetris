(ns lander.lunarlander
  (:require [lander.input :as in]
            [lander.render :as render]
            [lander.simulation :as sim]
            [lander.game-state :as gs]))

(defn ^:export init[canvas]
  (set!
    (.-onload js/window)
    (let [state (atom { :game-state :before })]
      (do
        (js/setInterval #(do
                          (gs/game-state state)
                          (sim/sim state)
                          (render/render state canvas)) 1)
        (set! (.-onkeydown js/document) (fn [e] (in/handle-keydown state e)))
        (set! (.-onkeyup js/document) (fn [e] (in/handle-keyup state e)))))))