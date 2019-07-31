(defproject
  tetris "0.1.0-SNAPSHOT"
  :description "A Tetris Game in Clojure"
  :url "https://github.com/markbastian/tetris"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [quil "3.0.0"]
                 [reagent "0.8.1"]
                 [org.clojure/core.async "0.4.500"
                  :exclusions [org.clojure/tools.reader]]
                 [cljsjs/hammer "2.0.8-0"]]

  :plugins [[lein-figwheel "0.5.19"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :main tetris.launcher

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-cljsbuild "1.1.7"]
                             [org.clojure/clojurescript "1.10.520"]]
                   :dependencies [[cider/piggieback "0.4.1"]
                                  [figwheel-sidecar "0.5.19"]]
                   :repl-options {:nrepl-middleware
                                  [cider.piggieback/wrap-cljs-repl]}}
             :cljs {:plugins [[lein-cljsbuild "1.1.7"]] }}

  :source-paths ["src/clj" "src/cljc"]

  :clj {:builds [{ :source-paths ["src/clj" "src/cljc" "test"] }]}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs" "src/cljc"]

                        ;; If no code is to be run, set :figwheel true for continued automagical reloading
                        :figwheel {:on-jsload "tetris.core/on-js-reload"}

                        :compiler {:main tetris.core
                                   :asset-path "js/compiled/out"
                                   :output-to "resources/public/js/compiled/tetris.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true}}
                       ;; This next build is an compressed minified build for
                       ;; production. You can build this with:
                       ;; lein cljsbuild once min
                       {:id "min"
                        :source-paths ["src/cljs" "src/cljc"]
                        :compiler {:output-to "resources/public/js/compiled/tetris.js"
                                   :main tetris.core
                                   :optimizations :advanced
                                   :pretty-print false}}]}
  
  :figwheel { :css-dirs ["resources/public/css"] })
