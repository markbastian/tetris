(ns lander.input
  (:require [lander.simulation :as sim]))

(defmulti handle-keydown (fn [state _] (state :game-state)))

(defmethod handle-keydown :default [state keycode]
  (case keycode
    (10 13) (sim/reset-game)
    state))

(defmethod handle-keydown :live [state keycode]
  (case keycode
    (37 97) (update-in state [:lander :theta] (fn [theta] (mod (+ theta 10) 360)))
    (39 100) (update-in state [:lander :theta] (fn [theta] (mod (- theta 10) 360)))
    (32 70) (assoc-in state [:lander :thrust]
                      (if (pos? (get-in state [:lander :fuel-mass])) 100 0))
    state))

(defmulti handle-keyup (fn [state _] (state :game-state)))

(defmethod handle-keyup :default [state keycode]
  (case keycode
    (32 70) (assoc-in state [:lander :thrust] 0)
    state))
