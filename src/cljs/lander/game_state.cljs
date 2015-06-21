(ns lander.game-state)

(defmulti game-state (fn [state] (@state :game-state)))

(defmethod game-state :live [state-ref]
  (let [{[_ x y vx vy] :state theta :theta } @state-ref
        max-vel 10]
    (cond
      (and (< y 5)
           (zero? theta)
           (<= (- max-vel) vy max-vel)
           (<= (- max-vel) vx max-vel))
      (swap! state-ref assoc :game-state :win)
      (not (and (<= -100 x 100) (<= 0 y 200)))
      (swap! state-ref assoc :game-state :before))))

(defmethod game-state :default [] ())