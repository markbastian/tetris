(ns lander.quil-lander
  (:require [quil.core :as q]
            [lander.input :as in]
            [lander.simulation :as sim]
            [lander.game-state :as gs]
            [lander.quil-renderer :as qr]))

(def state-ref (atom { :game-state :before }))

(defn setup []
  (q/smooth)
  (q/frame-rate 100))

(defn draw [] (qr/render (swap! state-ref (comp gs/game-state sim/sim))))

(q/defsketch
  lander
  :title "Lunar Lander"
  :setup setup
  :draw draw
  :size [800 600]
  :key-pressed #(swap! state-ref (fn [s] (in/handle-keydown s (q/key-code))))
  :key-released #(swap! state-ref (fn [s] (in/handle-keyup s (q/key-code)))))
