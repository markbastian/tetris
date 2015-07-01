(ns lander.quil-input
  (:require [lander.simulation :as sim]
            [quil.core :as q]))

(defmulti handle-keydown :game-state)

(defmethod handle-keydown :default [state]
  (case (q/key-code)
    10 (sim/reset-game)
    state))

(defmethod handle-keydown :live [state]
  (cond
    (= (q/key-code) 37) (update state :theta (fn [theta] (mod (+ theta 10) 360)))
    (= (q/key-code) 39) (update state :theta (fn [theta] (mod (- theta 10) 360)))
    (= (q/key-code) 32) (assoc state :thrust 100)
    :else state))

(defmulti handle-keyup :game-state)

(defmethod handle-keyup :default [state]
  (case (q/key-code)
    32 (assoc state :thrust 0)
    state))

