(ns lander.input
  (:require [lander.terrain :as terrain]))

;this should go somewhere common
(defn reset-game [state]
  (reset! state
          { :game-state :live
           :state [0 0 190 0 0]
           :time (.getTime (js/Date.))
           :theta 0
           :thrust 0
           :terrain (terrain/gen-real {:roughness 100 :cells { 0 0 1 0 } } 10 -100 100) }))

(defmulti handle-keydown (fn [state _] (@state :game-state)))

(defmethod handle-keydown :default [state e]
  (case (.-keyCode e)
    13 (reset-game state)
    nil))

(defmethod handle-keydown :live [state e]
  (case (.-keyCode e)
    (37 97) (swap! state update :theta (fn [theta] (mod (+ theta 10) 360)))
    (39 100) (swap! state update :theta (fn [theta] (mod (- theta 10) 360)))
    (32 70) (swap! state assoc :thrust 100)
    nil))

(defmulti handle-keyup (fn [state _] (@state :game-state)))

(defmethod handle-keyup :default [state e]
  (case (.-keyCode e)
    (32 70) (swap! state assoc :thrust 0)
    nil))

(defmulti handle-touchstart (fn [state _] (@state :game-state)))
(defmethod handle-touchstart :default [state _](reset-game state))
(defmethod handle-touchstart :live [state _](swap! state assoc :thrust 100))

(defmulti handle-touchend (fn [state _] (@state :game-state)))
(defmethod handle-touchend :default [_ _] ())
(defmethod handle-touchend :live [state _](swap! state assoc :thrust 0))

