(ns lander.quil-lander
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [lander.input :as in]
            [lander.simulation :as sim]
            [lander.game-state :as gs]
            [lander.quil-renderer :as qr]))

(defn setup []
  (q/smooth)
  (q/frame-rate 100)
  { :game-state :before })

(q/defsketch
  lander
  :title "Lunar Lander"
  :setup setup
  :draw #(qr/render %)
  :update #(-> % sim/sim gs/game-state)
  :middleware [m/fun-mode]
  :size [800 600]
  :key-pressed (fn [s { :keys [key-code] }] (in/handle-keydown s key-code))
  :key-released (fn [s] (assoc-in s [:lander :thrust] 0)))
