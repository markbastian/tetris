(ns lander.quil-input
  (:require [lander.simulation :as sim]
            [quil.core :as q]))

(defmulti handle-keydown (fn [state] (@state :game-state)))

(defmethod handle-keydown :default [state]
  (case (q/key-code)
    10 (sim/reset-game state)
    nil))

(defmethod handle-keydown :live [state]
  (cond
    (= (q/key-code) 37) (swap! state update :theta (fn [theta] (mod (+ theta 10) 360)))
    (= (q/key-code) 39) (swap! state update :theta (fn [theta] (mod (- theta 10) 360)))
    (= (q/key-code) 32) (swap! state assoc :thrust 100)
    :else (prn (q/key-code))))

(defmulti handle-keyup (fn [state] (@state :game-state)))

(defmethod handle-keyup :default [state]
  (case (q/key-code)
    32 (swap! state assoc :thrust 0)
    nil))

