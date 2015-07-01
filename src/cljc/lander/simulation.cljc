(ns lander.simulation
  (:require [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]
            [lander.terrain :as terrain]))

(defn reset-game []
  { :game-state :live
   :state [0 0 190 0 0]
   :time (.getTime #?(:clj (java.util.Date.) :cljs (js/Date.)))
   :theta 0
   :thrust 0
   :terrain (terrain/gen-real {:roughness 100 :cells { 0 0 1 0 } } 10 -100 100) })

(defmulti sim :game-state)

(defmethod sim :live [{:keys [theta thrust time state] :as s}]
  (let [t (.getTime #?(:clj (java.util.Date.) :cljs (js/Date.)))
        dt (* (- t time) 1E-3)
        dvx (fn [_] (-> theta (* Math/PI) (/ -180) Math/sin (* thrust)))
        dvy (fn [_] (+ -9.81 (-> theta (* Math/PI) (/ -180) Math/cos (* thrust))))
        new-states (rk/rk-step [#(% 3) #(% 4) dvx dvy] state dt tableaus/classic-fourth-order)]
    (into s { :state new-states :time t })))

(defmethod sim :default [state] state)
