(ns tetris.launcher
  (:gen-class)
  (:require [tetris.game-launcher :as gl]))

(defn -main [& _] (gl/launch-sketch { :width 800 :height 600 }))
