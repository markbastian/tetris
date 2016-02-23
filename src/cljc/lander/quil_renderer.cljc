(ns lander.quil-renderer
  (:require [quil.core :as q]
            [lander.terrain :as terrain]))

(defn draw-terrain [{ :keys [terrain]}]
  (q/stroke 0 255 0)
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
    (q/text "Win by making a gentle landing (<= 10 m/s)" 30 80)
    (q/text "with 0 rotation on one of the platforms." 30 90)
    (q/text "Leaving the screen to the left, right, or top will cause you to lose." 30 100)
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

(defn draw-stats [{:keys [terrain lander]}]
  (let [{:keys [state theta fuel-mass] } lander
        [_ px py _ vy] state]
    (q/stroke 255)
    (q/fill 255)
    (q/text (str "Elevation: " (- py (terrain/terrain-height px terrain))) 0 15)
    (q/text (str "Rotation: " theta) 0 30)
    (q/text (str "Fuel: " fuel-mass) 0 45)
    (q/text (str "Y Velocity: " vy) 0 60)))

(defn draw-lander [{{[_ px py] :state :keys [theta thrust width height]} :lander }]
  (let [tw (* 0.5 width) th (* 0.5 height)]
    (q/push-matrix)
    (q/translate px py)
    (q/rotate (q/radians theta))
    (when (pos? thrust)
      (do (q/fill 255 0 0)
          (q/stroke 255 0 0)
          (q/push-matrix)
          (let []
            (q/translate 0 (- th))
            (q/triangle (- tw) (- th) 0 th tw (- th)))
          (q/pop-matrix)))
    (q/fill 255)
    (q/stroke 255)
    (q/triangle (- tw) (- th) 0 th tw (- th))
    (q/pop-matrix)))

(defn draw-landing-zones [{{ :keys [locations width] } :landing-zones terrain :terrain }]
  (q/stroke 255 0 0)
  (q/fill 255 0 0)
  (doseq [zone locations
          :let [h (terrain/terrain-height zone terrain)]]
    (q/rect (- zone (* 0.5 width)) (dec h) width 2)))

(defn draw-bounds [{{ :keys [minx maxx miny maxy] } :world }]
  (q/stroke 255)
  (q/no-fill)
  (q/rect minx miny (- maxx minx) (- maxy miny)))

(defn draw [state]
  (let [{{ :keys [minx maxx miny maxy] } :world } state
        dx (- maxx minx) dy (- maxy miny)
        max-world-dim (max dx dy)
        w (q/width) h (q/height)
        min-screen-dim (min w h)]
    (do
      (q/background 0 0 0)
      (draw-stats state)

      (q/translate (* 0.5 w) h)
      (q/scale 1 -1)
      (q/scale (/ min-screen-dim max-world-dim))
      (q/stroke-weight (/ max-world-dim min-screen-dim))

      (doto state
        draw-bounds
        draw-terrain
        draw-landing-zones
        draw-lander))))

(defmulti render :game-state)

(defmethod render :win [state]
  (do
    (draw state)
    (win-screen)))

(defmethod render :lose [state]
  (do
    (draw state)
    (lose-screen)))

(defmethod render :live [state] (draw state))

(defmethod render :default [_] (intro-screen))
