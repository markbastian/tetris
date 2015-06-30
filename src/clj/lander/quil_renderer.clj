(ns lander.quil-renderer
  (:require [quil.core :as q]
            [lander.terrain :as terrain]))

(defn draw-terrain [terrain]
  (let [terrain-points (partition 2 1 terrain)]
    (doseq [[[x0 y0] [x1 y1]] terrain-points]
      (q/line x0 y0 x1 y1))))

(defn intro-screen []
  (do
    (q/push-matrix)
    (q/reset-matrix)
    (q/background 0 0 0)
    (q/text "Welcome to Lunar Lander!" 30 40)
    (q/text "Press Enter/Return key to play!" 30 50)
    (q/text "Press left and right arrow keys to rotate." 30 60)
    (q/text "Press 'f' or space to engage rocket." 30 70)
    (q/text "Win by making a gentle landing (<= 10 m/s) with 0 rotation." 30 80)
    (q/text "Leaving the screen to the left, right, or top will cause you to lose." 30 90)
    (q/pop-matrix)))

(defn win-screen []
  (q/push-matrix)
  (q/reset-matrix)
  (q/text "Good Job!" 100 200)
  (q/text "You Won!" 100 210)
  (q/text "Press Enter/Return key to play again!" 100 220)
  (q/pop-matrix))

(defn lose-screen []
  (q/push-matrix)
  (q/reset-matrix)
  (q/text "Sorry, You Lost!" 100 200)
  (q/text "Press Enter/Return key to play again!" 100 210)
  (q/pop-matrix))

(defn draw [{ :keys [state theta thrust terrain]}]
  (let [w (q/width)
        h (q/height)
        min-dim (min w h)
        dim 200
        [_ px py _ vy] state]
    (do
      (q/background 0 0 0)
      ;(q/stroke 0 255 0)
      ;(q/fill 255 0 0)

      (q/text (str "Elevation: " (- py (terrain/terrain-height px terrain))) 0 15)
      (q/text (str "Rotation: " theta) 0 30)
      (q/text (str "Y Velocity: " vy) 0 45)

      (q/translate (* 0.5 w) h)
      (q/scale 1 -1)

      (q/scale (/ min-dim dim))
      (q/stroke-weight (/ dim min-dim))

      (q/push-matrix)
      (q/translate px py)
      (q/rotate (q/radians theta))
      (when (not= 0 thrust)
        (do (q/fill 255 0 0)
            (q/stroke 255 0 0)
            (q/push-matrix)
            (q/translate 0 -5)
            (q/triangle -3 -5 0 5 3 -5)
            (q/pop-matrix)))
      (q/fill 255)
      (q/stroke 255)
      (q/triangle -3 -5 0 5 3 -5)
      (q/pop-matrix)
      (q/stroke 0 255 0)
      (draw-terrain terrain))))

(defmulti render (fn [state] (@state :game-state)))

(defmethod render :win [state]
  (do
    (draw @state)
    (win-screen)))

(defmethod render :lose [state]
  (do
    (draw @state)
    (lose-screen)))

(defmethod render :live [state] (draw @state))

(defmethod render :default [_] (intro-screen))
