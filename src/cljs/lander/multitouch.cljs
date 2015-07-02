(ns lander.multitouch
  (:require [lander.simulation :as sim]))

(defmulti handle-touchstart (fn [state _] (state :game-state)))
(defmethod handle-touchstart :default [_ _](sim/reset-game))
(defmethod handle-touchstart :live [state _](assoc state :thrust 100))

;(defmulti handle-touchmove (fn [state _] (state :game-state)))
;(defmethod handle-touchmove :default [state _] state)
;(defmethod handle-touchmove :live [state e]
;  (let [touch (-> e .changedTouches (.get 0))
;        x (-> touch .screenX)
;        y (-> touch .screenY)
;        ox (get-in @state [:touch 0])
;        oy (get-in @state [:touch 1])]
;    (swap! state into :touch [x y])))

(defmulti handle-touchend (fn [state _] (state :game-state)))
(defmethod handle-touchend :default [state _] state)
(defmethod handle-touchend :live [state _](assoc state :thrust 0))

