(ns tetris.rules
  (:require [tetris.shapes :refer [shapes]]))

(defn initial-state []
  {:shape-pos [(rand-int 7) 0]
   :frame 0
   :speed 50
   :board #{}
   :shape ((rand-nth (keys shapes)) shapes)})

(defn rotate-cw [shape] (apply mapv vector (map rseq shape)))

(defn rotate-ccw [shape] (apply mapv (comp vec rseq vector) shape))

(defn shape-coords [{:keys [shape-pos shape]}]
  (let [d (count shape)]
    (for [i (range d) j (range d) :when (= 1 (get-in shape [i j]))]
      (mapv + [i j] shape-pos))))

(defn valid? [{:keys [board] :as state}]
  (every? (fn [[x y :as c]]
            (and ((complement board) c) (<= 0 x 9) (< y 22)))
          (shape-coords state)))

(defn x-shift [state f]
  (let [shifted (update-in state [:shape-pos 0] f)]
    (if (valid? shifted) shifted state)))

(defn rotate [state f]
  (let [shifted (update state :shape f)]
    (if (valid? shifted) shifted state)))

(defn clear-row [{:keys [board] :as state} row]
  (if (every? board (for [i (range 10)] [i row]))
    (-> state
        (update :speed dec)
        (assoc :board
               (set (for [[i j] board :when (not= j row)]
                      (if (< j row) [i (inc j)] [i j])))))
    state))

(defn fall [state]
  (let [shifted (update-in state [:shape-pos 1] inc)]
    (if (valid? shifted)
      shifted
      (let [locked-coords (shape-coords state)]
        (-> state
            (update :board into locked-coords)
            (#(reduce clear-row % (map second locked-coords)))
            (assoc :shape ((rand-nth (keys shapes)) shapes))
            (assoc :shape-pos [(rand-int 7) 0]))))))

(defn fast-drop [{:keys [board] :as state}]
  (some #(when (not= board (:board %)) %) (iterate fall state)))

(defn game-step [{:keys [frame board speed] :as state}]
  (cond-> (update state :frame inc)
          (zero? (mod frame (max speed 1))) fall
          (some zero? (map second board)) (into {:board #{} :speed 50 })))