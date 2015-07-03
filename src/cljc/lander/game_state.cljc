(ns lander.game-state
  (:require [lander.terrain :as terrain]))

(defmulti game-state :game-state)

(defmethod game-state :live [{ :keys [state theta terrain landing-zones] :as st}]
  (let [[_ x y vx vy] state
        h (terrain/terrain-height x terrain)
        max-vel 10]
    (cond
      (and (< (- y 5) h)
           (some #(-> % (- x) Math/abs (<= 2.0)) landing-zones)
           (zero? theta)
           (<= (- max-vel) vy max-vel)
           (<= (- max-vel) vx max-vel))
      (assoc st :game-state :win)
      (not (and (<= -100 x 100) (<= (+ h 5) y 200)))
      (assoc st :game-state :lose)
      :else st)))

(defmethod game-state :default [state] state)