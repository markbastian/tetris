(defproject
  tetris "0.1.0-SNAPSHOT"
  :description "A Tetris Game in Clojure"
  :url "https://github.com/markbastian/lander"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [quil "2.3.0"]]

  :plugins [[lein-ancient "0.6.8"]]

  :main tetris.launcher

  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-cljsbuild "1.1.2"]
                             [org.clojure/clojurescript "1.7.228"]]}
             :cljs {:plugins [[lein-cljsbuild "1.1.2"]] }}

  :source-paths ["src/clj" "src/cljc"]

  :clj {:builds [{ :source-paths ["src/clj" "src/cljc" "test"] }]}

  :cljsbuild {:builds [{ :source-paths ["src/cljs" "src/cljc"]
                        :compiler { :output-to "resources/public/js/tetris.js"
                                   :optimizations :advanced
                                   :pretty-print true}}]})
