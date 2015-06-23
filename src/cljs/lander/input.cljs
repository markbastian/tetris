(ns lander.input
  (:require [lander.terrain :as terrain]))

(defmulti handle-keydown (fn [state _] (@state :game-state)))

(defmethod handle-keydown :default [state e]
  (case (.-keyCode e)
    13 (reset! state { :game-state :live
                      :state [0 0 190 0 0]
                      :time (.getTime (js/Date.))
                      :theta 0
                      :thrust 0
                      :terrain (terrain/gen-real {:roughness 100 :cells { 0 0 1 0 } } 10 -100 100) })
    :else nil))

(defmethod handle-keydown :live [state e]
  (case (.-keyCode e)
    (37 97) (swap! state update :theta (fn [theta] (mod (+ theta 10) 360)))
    (39 100) (swap! state update :theta (fn [theta] (mod (- theta 10) 360)))
    (32 70) (swap! state assoc :thrust 100)
    :else nil))

(defmulti handle-keyup (fn [state _] (@state :game-state)))

(defmethod handle-keyup :default [state e]
  (case (.-keyCode e)
    (32 70) (swap! state assoc :thrust 0)
    :else nil))

