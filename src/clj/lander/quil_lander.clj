(ns lander.quil-lander
  (:require [quil.core :as q]
            [lander.quil-input :as qi]
             [lander.simulation :as sim]
            [lander.game-state :as gs]
            [lander.quil-renderer :as qr]))

(def state-ref (atom { :game-state :before }))

(defn setup []
  (q/smooth)
  (q/frame-rate 100)
  (q/background 200))

(defn draw []
  (do
    (gs/game-state state-ref)
    (sim/sim state-ref)
    (qr/render state-ref)))

(q/defsketch
  lander
  :title "Lunar Lander"
  :setup setup
  :draw draw
  :size [800 600]
  :key-pressed (partial qi/handle-keydown state-ref)
  :key-released (partial qi/handle-keyup state-ref))
