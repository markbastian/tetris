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

(defn draw [] (qr/render (swap! state-ref (comp gs/game-state sim/sim))))

(q/defsketch
  lander
  :title "Lunar Lander"
  :setup setup
  :draw draw
  :size [800 600]
  :key-pressed #(swap! state-ref qi/handle-keydown)
  :key-released #(swap! state-ref qi/handle-keyup))
