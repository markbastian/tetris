(ns lander.canvas-renderer
  (:require [lander.terrain :as terrain]
            [lander.render :as r]))

(defn fill-background [canvas color]
  (doto (.getContext canvas "2d")
    (-> .-fillStyle (set! color))
    (.fillRect 0 0 (.-width canvas) (.-height canvas))))

(defn intro-screen [canvas]
  (do
    (fill-background canvas "#000000")
    (doto (.getContext canvas "2d")
      (-> .-fillStyle (set! "#00FF00"))
      (-> .-strokeStyle (set! "#FFFFFF"))
      (.fillText "Welcome to Lunar Lander!" 30 40)
      (.fillText "Press Enter/Return key to play!" 30 50)
      (.fillText "Press left and right arrow keys to rotate." 30 60)
      (.fillText "Press 'f' or space to engage rocket." 30 70)
      (.fillText "Win by making a gentle landing (<= 10 m/s) with 0 rotation." 30 80)
      (.fillText "Leaving the screen to the left, right, or top will cause you to lose." 30 90))))

(defn win-screen [canvas]
  (doto (.getContext canvas "2d")
    (-> .-fillStyle (set! "#00FF00"))
    (-> .-strokeStyle (set! "#FFFFFF"))
    (.fillText "Good Job!" 100 200)
    (.fillText "You Won!" 100 210)
    (.fillText "Press Enter/Return key to play again!" 100 220)))

(defn lose-screen [canvas]
  (doto (.getContext canvas "2d")
    (-> .-fillStyle (set! "#00FF00"))
    (-> .-strokeStyle (set! "#FFFFFF"))
    (.fillText "Sorry, You Lost!" 100 200)
    (.fillText "Press Enter/Return key to play again!" 100 210)))

(defn draw-terrain [ctx terrain]
  (let [[[xi yi] & rest] terrain]
    (do
      (.beginPath ctx)
      (.moveTo ctx xi yi)
      (doseq [[xj yj] rest] (.lineTo ctx xj yj))
      (.stroke ctx))))

(defn draw-triangle [ctx]
  (doto ctx
    (.beginPath)
    (.moveTo -3 -5)
    (.lineTo 0 5)
    (.lineTo 3 -5)
    (.lineTo -3 -5)
    (.fill)))

(defn draw-thrust [ctx { :keys [_ thrust]}]
  (when (pos? thrust)
    (doto ctx
      (.save)
      (.translate 0 -5)
      (-> .-fillStyle (set! "#FF0000"))
      draw-triangle
      (.restore))))

(defn draw-lander [ctx { :keys [state theta] :as s}]
  (let [[_ px py] state]
    (doto ctx
      (.save)
      (.translate px py)
      (.rotate (-> theta (* Math/PI) (/ 180)))
      (draw-thrust s)
      (-> .-fillStyle (set! "#FFFFFF"))
      draw-triangle
      (.restore))))

(defn draw [canvas { :keys [state theta terrain] :as s}]
  (let [xmin -100 xmax 100 ymin 0 ymax 200
        w (.-width canvas) h (.-height canvas)
        [_ px py vx vy] state]
    (do
      (fill-background canvas "#000000")
      (doto (.getContext canvas "2d")
        (-> .-fillStyle (set! "#00FF00"))
        (-> .-strokeStyle (set! "#FFFFFF"))
        (.fillText (str "Elevation: " (- py (terrain/terrain-height px terrain))) 0 10)
        (.fillText (str "Rotation: " theta) 0 20)
        (.fillText (str "Y Velocity: " vy) 0 30)
        (.save)
        (.translate 0 h)
        (.scale 1 -1)
        (.scale (/ w (- xmax xmin)) (/ h (- ymax ymin)))
        (.translate (- xmin) (- ymin))
        (draw-terrain terrain)
        (draw-lander s)
        (.restore)))))

(defmethod r/render :win [state canvas]
  (do
    (draw canvas @state)
    (win-screen canvas)))

(defmethod r/render :lose [state canvas]
  (do
    (draw canvas @state)
    (lose-screen canvas)))

(defmethod r/render :live [state canvas] (draw canvas @state))

(defmethod r/render :default [_ canvas] (intro-screen canvas))

