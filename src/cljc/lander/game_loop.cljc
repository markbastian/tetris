(ns lander.game-loop
  (:require [lander.render :as render]
            [lander.simulation :as sim]
            [lander.game-state :as gs]))

(defn game-loop [state canvas]
  (render/render(swap! state (comp gs/game-state sim/sim)) canvas))