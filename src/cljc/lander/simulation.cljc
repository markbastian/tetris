(ns lander.simulation
  (:require [lander.terrain :as terrain]))

(def default-state
  { :game-state :live
   :world { :minx -200 :maxx 200 :miny 0 :maxy 400 }
   :gravity -9.81
   :landing-zones { :locations [-50 50] :width 10 }
   :lander {:width 6
            :height 10
            :state [0 0 400 0 0]
            :theta 0
            :thrust 0
            :fuel-mass 1
            :max-landing-velocity 10 }})

(defn flatten-landing-zones [terrain lzs]
  (reduce
    (fn [t lz]
      (let [h (terrain/terrain-height lz t)
            hw (* 0.5 (lzs :width))]
        (terrain/make-flat ((juxt #(- % hw) #(+ % hw)) lz) h t)))
    terrain (lzs :locations)))

(defn reset-game []
  (let [{ { :keys [minx maxx] } :world lzs :landing-zones } default-state
        t (terrain/gen-real {:roughness 100 :cells { 0 0 1 0 } } 8 minx maxx)]
    (into default-state
          {:time (.getTime #?(:clj (java.util.Date.) :cljs (js/Date.)))
           :terrain (flatten-landing-zones t lzs)})))

(defmulti sim :game-state)

(defmethod sim :live [{:keys [time lander gravity] :as s}]
  (let [{:keys [theta thrust state fuel-mass] } lander
        t (.getTime #?(:clj (java.util.Date.) :cljs (js/Date.)))
        dt (* (- t time) 1E-3)
        remaining-fuel (max 0.0 (if (pos? thrust) (- fuel-mass dt) fuel-mass))
        effective-thrust (if (pos? remaining-fuel) thrust 0.0)
        f [(-> theta (* Math/PI) (/ -180) Math/sin (* effective-thrust))
           (+ gravity (-> theta (* Math/PI) (/ -180) Math/cos (* effective-thrust)))]
        v-new (mapv + [(state 3) (state 4)] (map #(* % dt) f))
        p-new (mapv + [(state 1) (state 2)] (map #(* % dt) v-new))
        new-states (reduce into [dt] [p-new v-new])]
    (-> s
        (into { :time t })
        (update :lander into { :fuel-mass remaining-fuel
                              :state new-states
                              :thrust effective-thrust}))))

(defmethod sim :default [state] state)
