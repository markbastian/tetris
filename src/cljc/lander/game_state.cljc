(ns lander.game-state
  (:require [lander.terrain :as terrain]))

(defmulti game-state :game-state)

(defmethod game-state :live [{ :keys [terrain landing-zones lander world] :as st}]
  (let [{ :keys [state theta]} lander
        { :keys [minx maxx maxy]} world
        [_ x y vx vy] state
        {:keys [locations _] } landing-zones
        h (terrain/terrain-height x terrain)
        max-vel (lander :max-landing-velocity)]
    (cond
      (and
        (< (- y (* 0.5 (lander :height))) h)
        (some #(-> % (- x) Math/abs (<= (* 0.5 (lander :width)))) locations)
        (zero? theta)
        (<= (- max-vel) vy max-vel)
        (<= (- max-vel) vx max-vel))
      (assoc st :game-state :win)
      (not (and (<= minx x maxx) (<= (+ h (* 0.5 (lander :height))) y maxy)))
      (assoc st :game-state :lose)
      :else st)))

(defmethod game-state :default [state] state)