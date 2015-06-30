(ns lander.quil-test
  (:require [quil.core :as q]))

(defn setup []
  (q/smooth)
  (q/frame-rate 100)
  (q/background 200))

(defn draw []
  (let [pts (for [degs (range 0 360 10)
                  :let [rads (Math/toRadians degs)]]
              [(+ 50 (* 50 (Math/cos rads))) (+ 50 (* 50 (Math/sin rads)))])]
    (doseq [[[x0 y0] [x1 y1]] (take 36 (partition 2 1 (cycle pts)))] (q/line x0 y0 x1 y1)))
  ;(q/line 0 0 323 200)
  ;(q/triangle 0 0 161 200 323 0)
  ;(q/stroke (q/random 255))             ;; Set the stroke colour to a random grey
  ;(q/stroke-weight (q/random 10))       ;; Set the stroke thickness randomly
  ;(q/fill (q/random 255))               ;; Set the fill colour to a random grey
  ;
  ;(let [diam (q/random 100)             ;; Set the diameter to a value between 0 and 100
  ;      x    (q/random (q/width))       ;; Set the x coord randomly within the sketch
  ;      y    (q/random (q/height))]     ;; Set the y coord randomly within the sketch
  ;  (q/ellipse x y diam diam))
  )         ;; Draw a circle at x y with the correct diameter


(q/defsketch example                  ;; Define a new sketch named example
             :title "Oh so many grey circles"    ;; Set the title of the sketch
             :setup setup                        ;; Specify the setup fn
             :draw draw                          ;; Specify the draw fn
             :size [323 200])                    ;; You struggle to beat the golden ratio
