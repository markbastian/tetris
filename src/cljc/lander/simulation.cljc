(ns lander.simulation
  (:require [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]
            [lander.terrain :as terrain]))

(defn reset-game [state]
  (reset! state
          { :game-state :live
           :state [0 0 190 0 0]
           :time (.getTime #?(:clj (java.util.Date.) :cljs (js/Date.)))
           :theta 0
           :thrust 0
           :terrain (terrain/gen-real {:roughness 100 :cells { 0 0 1 0 } } 10 -100 100) }))

(defmulti sim (fn [state] (@state :game-state)))

(defmethod sim :live [state-ref]
  (let [{:keys [theta thrust time state]} @state-ref
        t (.getTime #?(:clj (java.util.Date.) :cljs (js/Date.)))
        dt (* (- t time) 1E-3)
        dvx (fn [_] (-> theta (* Math/PI) (/ -180) Math/sin (* thrust)))
        dvy (fn [_] (+ -9.81 (-> theta (* Math/PI) (/ -180) Math/cos (* thrust))))
        new-states (rk/rk-step [#(% 3) #(% 4) dvx dvy] state dt tableaus/classic-fourth-order)]
    (swap! state-ref into { :state new-states :time t })))

(defmethod sim :default [state-ref] ())
