(ns lander.game-state
  (:require [lander.terrain :as terrain]))

(defmulti game-state :game-state)

(defmethod game-state :live [state]
  (let [{[_ x y vx vy] :state theta :theta terrain :terrain } state
        h (terrain/terrain-height x terrain)
        max-vel 10]
    (cond
      (and (< (- y 5) h)
           (zero? theta)
           (<= (- max-vel) vy max-vel)
           (<= (- max-vel) vx max-vel))
      (assoc state :game-state :win)
      (not (and (<= -100 x 100) (<= (+ h 5) y 200)))
      (assoc state :game-state :lose)
      :else state)))

(defmethod game-state :default [state] state)