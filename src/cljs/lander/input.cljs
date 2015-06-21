(ns lander.input)

(defmulti handle-input (fn [state e] (@state :game-state)))

(defmethod handle-input :before [state _]
  (swap! state assoc :game-state :live))

(defmethod handle-input :live [state e]
  (case (.-keyCode e)
    (37 97) (swap! state update :theta (fn [theta] (mod (+ theta 10) 360)))
    (39 100) (swap! state update :theta (fn [theta] (mod (- theta 10) 360)))
    32 (swap! state assoc :thrust 100)
    :else nil))
