(ns lander.game-state
  (:require [lander.terrain :as terrain]))

(defmulti game-state (fn [state] (@state :game-state)))

(defmethod game-state :live [state-ref]
  (let [{[_ x y vx vy] :state theta :theta terrain :terrain } @state-ref
        h (terrain/terrain-height x terrain)
        max-vel 10]
    (cond
      (and (< (- y 5) h)
           (zero? theta)
           (<= (- max-vel) vy max-vel)
           (<= (- max-vel) vx max-vel))
      (swap! state-ref assoc :game-state :win)
      (not (and (<= -100 x 100) (<= (+ h 5) y 200)))
      (swap! state-ref assoc :game-state :lose)
      :else nil)))

(defmethod game-state :default [_] ())