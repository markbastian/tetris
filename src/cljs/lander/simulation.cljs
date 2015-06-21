(ns lander.simulation
  (:require [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]))

(defmulti sim (fn [state] (@state :game-state)))

(defmethod sim :live [state-ref]
  (let [{:keys [theta thrust time state]} @state-ref
        t (.getTime (js/Date.))
        dt (* (- t time) 1E-3)
        dvx #(-> theta (* Math/PI) (/ -180) Math/sin (* thrust))
        dvy #(+ -9.81 (-> theta (* Math/PI) (/ -180) Math/cos (* thrust)))
        new-states (rk/rk-step [#(% 3) #(% 4) dvx dvy] state dt tableaus/classic-fourth-order)]
    (swap! state-ref into { :state new-states :time t })))

(defmethod sim :default [state-ref] ())
