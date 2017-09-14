(defproject
  tetris "0.1.0-SNAPSHOT"
  :description "A Tetris Game in Clojure"
  :url "https://github.com/markbastian/tetris"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [quil "2.4.0"]
                 [reagent "0.5.1"]
                 [org.clojure/core.async "0.2.374"
                  :exclusions [org.clojure/tools.reader]]
                 [cljsjs/hammer "2.0.4-5"]]

  :plugins [[lein-figwheel "0.5.2"]
            [lein-cljsbuild "1.1.3" :exclusions [[org.clojure/clojure]]]]

  :main tetris.launcher

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :jar-exclusions [#"\.swp|\.swo|\.DS_Store"]
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-cljsbuild "1.1.3"]
                             [org.clojure/clojurescript "1.8.51"]]
                   :dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.2"]]
                   :repl-options {:nrepl-middleware
                                  [cemerick.piggieback/wrap-cljs-repl]}}
             :cljs {:plugins [[lein-cljsbuild "1.1.2"]] }}

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
  
  :figwheel { ;; :dependencies {}
             ;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
