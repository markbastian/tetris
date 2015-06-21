(ns lander.render)

(defn fill-background [canvas color]
  (doto (.getContext canvas "2d")
    (-> .-fillStyle (set! color))
    (.fillRect 0 0 (.-width canvas) (.-height canvas))))

(defn intro-screen [canvas]
  (do
    (fill-background canvas "000000")
    (doto (.getContext canvas "2d")
      (-> .-fillStyle (set! "00FF00"))
      (-> .-strokeStyle (set! "FFFFFF"))
      (.fillText "Welcome to Lunar Lander!" 0 40)
      (.fillText "Press Enter/Return key to play!" 0 50)
      (.fillText "Press left and right to rotate" 0 60)
      (.fillText "Press space to engage rocket" 0 70)
      (.fillText "Win by making a gentle landing" 0 80)
      (.fillText "Leaving the screen to the left, right, or top will cause you to lose." 0 90))))

(defn win-screen [canvas]
  (do
    (fill-background canvas "000000")
    (doto (.getContext canvas "2d")
      (-> .-fillStyle (set! "00FF00"))
      (-> .-strokeStyle (set! "FFFFFF"))
      (.fillText "Good Job!" 50 30)
      (.fillText "You Won!" 50 40)
      (.fillText "Press Enter/Return key to play again!" 20 50))))


(defn draw-triangle [ctx]
  (doto ctx
    (.beginPath)
    (.moveTo -3 -5)
    (.lineTo 0 5)
    (.lineTo 3 -5)
    (.lineTo -3 -5)
    (.stroke)))

(defn draw-thrust [ctx { :keys [state thrust]}]
  (when (pos? thrust)
    (doto ctx
      (.save)
      (.translate 0 -5)
      (-> .-strokeStyle (set! "FF0000"))
      draw-triangle
      (.restore))))

(defn draw-lander [ctx { :keys [state theta] :as s}]
  (doto ctx
    (.save)
    (.rotate (-> theta (* Math/PI) (/ 180)))
    (-> .-strokeStyle (set! "FFFFFF"))
    draw-triangle
    (draw-thrust s)
    (.restore)))

(defn draw [canvas { :keys [state theta] :as s}]
  (let [xmin -100 xmax 100 ymin 0 ymax 200
        w (.-width canvas) h (.-height canvas)
        [_ px py vx vy] state]
    (do
      (fill-background canvas "000000")
      (doto (.getContext canvas "2d")
        (-> .-fillStyle (set! "00FF00"))
        (-> .-strokeStyle (set! "FFFFFF"))
        (.save)
        (.translate 0 h)
        (.scale 1 -1)
        (.scale (/ w (- xmax xmin)) (/ h (- ymax ymin)))
        (.translate (- xmin) (- ymin))
        (.translate px py)
        (draw-lander s)
        (.save)
        (.scale 1 -1)
        (.fillText vy 0 0)
        (.restore)
        (.restore)))))

(defmulti render (fn [state _] (@state :game-state)))

(defmethod render :before [_ canvas] (intro-screen canvas))

(defmethod render :win [_ canvas] (win-screen canvas))

(defmethod render :live [state canvas] (draw canvas @state))