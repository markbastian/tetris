# Tetris

A simple Tetris-like game written in Clojure.

## Tips

* Ensure that the `shadow-cljs` alias is active.
* `clj -A:shadow-cljs compile frontend` will compile the app.
* `clj -A:shadow-cljs watch frontend` will launch the build system.
* Once the watch is running:
    * Jack in to localhost:7888
    * Open public/index.html in your browser
    * Execute `(shadow.cljs.devtools.api/nrepl-select :frontend)` in your ns.
* `clj -A:shadow-cljs release frontend` will create a minified js file.
* Refresher on [gh-pages](https://jiafulow.github.io/blog/2020/07/09/create-gh-pages-branch-in-existing-repo/) creation.

## License

Copyright © 2015 Mark Bastian

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
