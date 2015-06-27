(ns lander.lunarlander
  (:require [lander.input :as in]
            [lander.game-loop :as gl]))

(defn ^:export init[canvas]
  (set!
    (.-onload js/window)
    (let [state (atom { :game-state :before })]
      (do
        (js/setInterval #(gl/game-loop state canvas) 1)
        (set! (.-onkeydown js/document) (fn [e] (in/handle-keydown state e)))
        (set! (.-onkeyup js/document) (fn [e] (in/handle-keyup state e)))
        (set! (.-ontouchstart js/document) (fn [e] (in/handle-touchstart state e)))
        ;(set! (.-ontouchmove js/document) (fn [e] (in/handle-keyup state e)))
        (set! (.-ontouchend js/document) (fn [e] (in/handle-touchend state e)))))))