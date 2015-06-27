(ns lander.game-loop
  (:require [lander.render :as render]
            [lander.simulation :as sim]
            [lander.game-state :as gs]))

(defn game-loop [state canvas]
  (do
    (gs/game-state state)
    (sim/sim state)
    (render/render state canvas)))