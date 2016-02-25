(ns lander.game-launcher
  (:require
    [quil.core :as q #?@(:cljs [:include-macros true])]
    [quil.middleware :as m]
    [lander.shapes :refer [shapes]]))

(defn setup []
  (q/smooth)
  (q/frame-rate 100)
  {:shape-pos [0 0]
   :frame 0
   :board #{}
   :shape ((rand-nth (keys shapes)) shapes)})

(defn rotate-cw [shape]
  (apply mapv vector (map rseq shape)))

(defn rotate-ccw [shape]
  (apply mapv (comp vec rseq vector) shape))

(defn shape-coords [{:keys [shape-pos shape]}]
  (let [d (count shape)]
    (for [i (range d) j (range d) :when (= 1 (get-in shape [i j]))]
      (mapv + [i j] shape-pos))))

(defn valid? [{:keys [board] :as state}]
  (every? (fn [[x y :as c]] (and ((complement board) c) (<= 0 x 9) (< y 22))) (shape-coords state)))

(defn x-shift [state f]
  (let [shifted (update-in state [:shape-pos 0] f)]
    (if (valid? shifted) shifted state)))

(defn rotate [state f]
  (let [shifted (update state :shape f)]
    (if (valid? shifted) shifted state)))

(defn clear-row [{:keys [board] :as state} row]
  (if (every? board (for [i (range 10)] [i row]))
    (assoc state :board
                 (into #{} (for [[i j] board :when (not= j row)]
                             (if (< j row) [i (inc j)] [i j]))))
    state))

(defn fall [{:keys [board] :as state}]
  (let [shifted (update-in state [:shape-pos 1] inc)
        coords (shape-coords shifted)]
    (if (or (some board coords) (some (fn [[_ y]] (>= y 22)) coords))
      (let [locked-coords (shape-coords state)]
        (-> state
            (update :board into locked-coords)
            (#(reduce clear-row % (map second locked-coords)))
            (assoc :shape-pos [0 0])
            (assoc :shape ((rand-nth (keys shapes)) shapes))))
      shifted)))

(defn render [{:keys [board] :as state}]
  (let [dim 20]
    (do
      (q/background 0 0 0)
      (q/fill 255 255 255)
      (doseq [i (range 10)
              j (range 22)]
        (q/rect (* i dim) (* j dim) dim dim))
      (q/fill 0 255 0)
      (doseq [[i j] board]
        (q/rect (* i dim) (* j dim) dim dim))
      (q/fill 255 0 0)
      (doseq [[i j] (shape-coords state)]
        (q/rect (* i dim) (* j dim) dim dim)))))

(defn sim [{:keys [frame] :as state}]
  (cond-> (update state :frame inc) (zero? (mod frame 50)) fall))

(defn launch-sketch [{:keys[width height host]}]
  (q/sketch
    :title "Tetris"
    #?@(:cljs [:host host])
    :setup setup
    :draw render
    :update sim
    :middleware [m/fun-mode]
    :size [width height]
    :key-pressed (fn [state { :keys [key-code] }]
                   (case key-code
                     38 (rotate state rotate-ccw)
                     40 (rotate state rotate-cw)
                     37 (x-shift state dec)
                     39 (x-shift state inc)
                     32 (do (prn "space") state)
                     state))))

#?(:clj (launch-sketch { :width 220 :height 440 }))

#?(:cljs (defn ^:export launch-app[host width height]
           (launch-sketch { :width width :height height :host host})))