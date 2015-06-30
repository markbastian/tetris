(ns lander.input
  (:require [lander.simulation :as sim]))

(defmulti handle-keydown (fn [state _] (@state :game-state)))

(defmethod handle-keydown :default [state e]
  (case (.-keyCode e)
    13 (sim/reset-game state)
    nil))

(defmethod handle-keydown :live [state e]
  (case (.-keyCode e)
    (37 97) (swap! state update :theta (fn [theta] (mod (+ theta 10) 360)))
    (39 100) (swap! state update :theta (fn [theta] (mod (- theta 10) 360)))
    (32 70) (swap! state assoc :thrust 100)
    nil))

(defmulti handle-keyup (fn [state _] (@state :game-state)))

(defmethod handle-keyup :default [state e]
  (case (.-keyCode e)
    (32 70) (swap! state assoc :thrust 0)
    nil))

(defmulti handle-touchstart (fn [state _] (@state :game-state)))
(defmethod handle-touchstart :default [state _](sim/reset-game state))
(defmethod handle-touchstart :live [state _](swap! state assoc :thrust 100))

(defmulti handle-touchmove (fn [state _] (@state :game-state)))
(defmethod handle-touchmove :default [_ _] ())
;(defmethod handle-touchmove :live [state e]
;  (let [touch (-> e .changedTouches (.get 0))
;        x (-> touch .screenX)
;        y (-> touch .screenY)
;        ox (get-in @state [:touch 0])
;        oy (get-in @state [:touch 1])]
;    (swap! state into :touch [x y])))

(defmulti handle-touchend (fn [state _] (@state :game-state)))
(defmethod handle-touchend :default [_ _] ())
(defmethod handle-touchend :live [state _](swap! state assoc :thrust 0))

