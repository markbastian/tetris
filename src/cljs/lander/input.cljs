(ns lander.input
  (:require [lander.simulation :as sim]))

(defmulti handle-keydown (fn [state _] (state :game-state)))

(defmethod handle-keydown :default [state e]
  (case (.-keyCode e)
    13 (sim/reset-game)
    state))

(defmethod handle-keydown :live [state e]
  (case (.-keyCode e)
    (37 97) (update state :theta (fn [theta] (mod (+ theta 10) 360)))
    (39 100) (update state :theta (fn [theta] (mod (- theta 10) 360)))
    (32 70) (assoc state :thrust 100)
    state))

(defmulti handle-keyup (fn [state _] (state :game-state)))

(defmethod handle-keyup :default [state e]
  (case (.-keyCode e)
    (32 70) (assoc state :thrust 0)
    state))

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

