(ns lander.launcher
  (:gen-class)
  (:require [lander.game-launcher :as gl]))

(defn -main [& _] (gl/launch-sketch { :width 800 :height 600 }))
