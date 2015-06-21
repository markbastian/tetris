(ns lander.lunarlander
  (:require [lander.input :as in]
            [numerics.tableaus :as tableaus]
            [numerics.runge-kutta :as rk]))

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
      (.fillText "Press any key to play!" 0 50)
      (.fillText "Press left and right to rotate" 0 60)
      (.fillText "Press space to engage rocket" 0 70)
      (.fillText "Win by making a gentle landing" 0 80)
      (.fillText "Leaving the screen to the left, right, or top will cause you to lose." 0 90))))

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
  (let [xmin -100 xmax 100 ymin 0 ymax 200 w (.-width canvas) h (.-height canvas)]
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
        (.translate (state 1) (state 2))
        (draw-lander s)
        (.save)
        (.scale 1 -1)
        (.fillText (str theta) 0 0)
        (.restore)
        (.restore)))))

(defn initial-state [] { :game-state :before :state [0 0 190 0 0] :time (.getTime (js/Date.)) :theta 0 :thrust 0 })

(defn sim [state-ref]
  (let [{:keys [theta thrust time state]} @state-ref
        t (.getTime (js/Date.))
        dt (* (- t time) 1E-3)
        dvx #(-> theta (* Math/PI) (/ -180) Math/sin (* thrust))
        dvy #(+ -9.81 (-> theta (* Math/PI) (/ -180) Math/cos (* thrust)))
        new-states (rk/rk-step [#(% 3) #(% 4) dvx dvy] state dt tableaus/classic-fourth-order)]
    (swap! state-ref into { :state new-states :time t })))

(defmulti check-game-cond (fn [state] (@state :game-state)))

(defmethod check-game-cond :live [state-ref]
  (let [{[_ x y] :state } @state-ref]
    (when-not (and (< -100 x 100) (< 0 y 200))
      (reset! state-ref (initial-state)))))

(defmethod check-game-cond :default [] ())

(defmulti drawaction (fn [state _] (@state :game-state)))

(defmethod drawaction :before [_ canvas] (intro-screen canvas))

(defmethod drawaction :live [state canvas] (draw canvas @state))

(defn ^:export init[canvas]
  (set!
    (.-onload js/window)
    (let [state (atom (initial-state))]
      (do
        (drawaction state canvas)
        (js/setInterval #(do
                          (check-game-cond state)
                          (when (= :live (@state :game-state)) (sim state))
                          (drawaction state canvas)
                          ) 1)
        (set! (.-onkeydown js/document) (fn [e] (in/handle-input state e)))
        (set! (.-onkeyup js/document)
              (fn [e] (case (.-keyCode e)
                        32 (swap! state assoc :thrust 0)
                        :else nil)))))))