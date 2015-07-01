(ns lander.render)

(defmulti render (fn [state _] (state :game-state)))
