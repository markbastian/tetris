(ns lander.lunarlander
  (:require [lander.input :as in]
            [lander.multitouch :as mt]
            [lander.game-loop :as gl]))

;;http://www.html5rocks.com/en/mobile/touch/
;;https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
;;https://developer.mozilla.org/en-US/docs/Web/API/Touch
(defn ^:export init[canvas]
  (set!
    (.-onload js/window)
    (let [state (atom { :game-state :before })]
      (do
        (js/setInterval #(gl/game-loop state canvas) 1)
        (set! (.-onkeydown js/document) (fn [e] (swap! state #(in/handle-keydown % (.-keyCode e)))))
        (set! (.-onkeyup js/document) (fn [e] (swap! state #(in/handle-keyup % (.-keyCode e)))))
        (set! (.-ontouchstart js/document) (fn [e] (swap! state #(mt/handle-touchstart % (.-keyCode e)))))
        ;(set! (.-ontouchmove js/document) (fn [e] (swap! state #(in/handle-touchmove % e))))
        (set! (.-ontouchend js/document) (fn [e] (swap! state #(mt/handle-touchend % (.-keyCode e)))))))))