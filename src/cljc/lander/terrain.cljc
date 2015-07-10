(ns lander.terrain)

(defn terrain-height
  ([x t xmin xmax]
   (let [dt (/ (- xmax xmin) (-> t count dec))
         i (int (/ (- x xmin) dt))
         xi (get-in t [i 0])
         yi (get-in t [i 1])
         xf (get-in t [(inc i) 0])
         yf (get-in t [(inc i) 1])]
     (if xf
       (+ yi (* (- yf yi) (/ (- x xi) (- xf xi))))
       yi)))
  ([x t]
   (let [xmin (-> t first first)
         xmax (-> t last first)]
     (cond
       (< x xmin) (-> t first second)
       (> x xmax) (-> t last second)
       :else (terrain-height x t xmin xmax)))))

(defn double-indices-1d [cells]
  (zipmap (map #(* 2 %) (keys cells)) (vals cells)))

(defn gap-fill [cells roughness]
  (for [i (range 1 (dec (* 2 (count cells))) 2)
        :let [x (* 0.5 (reduce + (map cells ((juxt inc dec) i))))]]
    [i (+ x (* roughness (dec (* 2.0 (rand)))))]))

(defn subdivide [{ :keys [roughness cells]}]
  (let [c (double-indices-1d cells)
        gaps (gap-fill c roughness)]
    { :roughness (* 0.5 roughness) :cells (into c gaps)}))

(defn generate [ic steps] (nth (iterate subdivide ic) steps))

(defn terrain-array [ic steps] (->> (generate ic steps) :cells (sort-by first) vals vec))

(defn make-flat [[lo hi] flat-height terrain]
  (vec (sort-by first (for [[x h] terrain] (if (<= lo x hi) [x flat-height] [x h])))))

(defn gen-real [ic steps minx maxx]
  (vec (let [heights (terrain-array ic steps)
             dx (/ (- maxx minx) (dec (count heights)))
             m (apply min heights)]
         (sort
           (zipmap
             (for [i (range (count heights))] (double (+ minx (* i dx))))
             (map #(- % m) heights))))))
