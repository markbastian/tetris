(ns lander.simulation
  (:require [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]
            [lander.terrain :as terrain]))

(defn gen-landing [terrain-cells]
  (let [i (rand-int (count terrain-cells))
        a (nth terrain-cells (dec i))
        b (nth terrain-cells i)
        c (nth terrain-cells (inc i))
        h (second b)]
    (update-in terrain-cells [(first a) h] [(first c) h])))

(defn reset-game []
  { :game-state :live
   :state [0 0 190 0 0]
   :time (.getTime #?(:clj (java.util.Date.) :cljs (js/Date.)))
   :theta 0
   :thrust 0
   :landing-zones [-50 50]
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
