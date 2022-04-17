(ns tetris.rules
  (:require [tetris.shapes :refer [shapes]]))

;; Initialization function
(defn initial-state []
  {:frame 0
   :speed 50
   :score 0
   :high-score 0
   :locked #{}
   :shape-pos [(rand-int 7) 0]
   :shape ((rand-nth (keys shapes)) shapes)})

;; Utility functions
(defn rotate-ccw [shape]
  (apply mapv vector (map rseq shape)))

(defn rotate-cw [shape]
  (apply mapv (comp vec rseq vector) shape))

(defn shape-coords [{:keys [shape-pos shape]}]
  (let [d (count shape)]
    (for [i (range d) j (range d) :when (= 1 (get-in shape [i j]))]
      (mapv + [i j] shape-pos))))

;; State functions
(defn score [{:keys [score high-score] :as state} amt]
  (let [new-score (+ score amt)]
    (cond-> (assoc state :score new-score)
            (> new-score high-score)
            (assoc :high-score new-score))))

(defn valid? [{:keys [locked] :as state}]
  (every? (fn [[x y :as c]]
            (and ((complement locked) c) (<= 0 x 9) (< y 22)))
          (shape-coords state)))

(defn x-shift [state f]
  (let [shifted (update-in state [:shape-pos 0] f)]
    (if (valid? shifted) shifted state)))

(defn rotate [state f]
  (let [shifted (update state :shape f)]
    (if (valid? shifted) shifted state)))

(defn clear-row [{:keys [locked] :as state} row]
  (if (every? locked (for [i (range 10)] [i row]))
    (-> state
        (score 10)
        (update :speed dec)
        (assoc :locked
               (set (for [[i j] locked :when (not= j row)]
                      (if (< j row) [i (inc j)] [i j])))))
    state))

(defn fall [state]
  (let [shifted (update-in state [:shape-pos 1] inc)]
    (if (valid? shifted)
      shifted
      (let [locked-coords (shape-coords state)]
        (-> state
            (update :locked into locked-coords)
            (score 1)
            (#(reduce clear-row % (map second locked-coords)))
            (into { :shape ((rand-nth (keys shapes)) shapes)
                   :shape-pos [(rand-int 7) 0]}))))))

(defn fast-drop [{:keys [locked] :as state}]
  (some #(when (not= locked (:locked %)) %)
        (iterate fall state)))

(defn game-step [{:keys [frame locked speed] :as state}]
  (cond-> (update state :frame inc)
          (zero? (mod frame (max speed 1)))
          fall
          (some zero? (map second locked))
          (into (dissoc (initial-state) :high-score))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(comment
  (doseq [r (-> shapes
                :T
                rotate-ccw
                rotate-ccw
                )]
  (println r)))
