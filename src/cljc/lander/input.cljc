(ns lander.input
  (:require [lander.simulation :as sim]))

(defmulti handle-keydown (fn [state _] (state :game-state)))

(defmethod handle-keydown :default [state keycode]
  (case keycode
    (10 13) (sim/reset-game)
    state))

(defmethod handle-keydown :live [state keycode]
  (case keycode
    (37 97) (update state :theta (fn [theta] (mod (+ theta 10) 360)))
    (39 100) (update state :theta (fn [theta] (mod (- theta 10) 360)))
    (32 70) (assoc state :thrust 100)
    state))

(defmulti handle-keyup (fn [state _] (state :game-state)))

(defmethod handle-keyup :default [state keycode]
  (case keycode
    (32 70) (assoc state :thrust 0)
    state))
