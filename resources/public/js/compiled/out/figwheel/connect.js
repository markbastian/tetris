// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('tetris.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27591__delegate = function (x){
if(cljs.core.truth_(tetris.core.on_js_reload)){
return cljs.core.apply.call(null,tetris.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tetris.core/on-js-reload' is missing");
}
};
var G__27591 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27592__i = 0, G__27592__a = new Array(arguments.length -  0);
while (G__27592__i < G__27592__a.length) {G__27592__a[G__27592__i] = arguments[G__27592__i + 0]; ++G__27592__i;}
  x = new cljs.core.IndexedSeq(G__27592__a,0);
} 
return G__27591__delegate.call(this,x);};
G__27591.cljs$lang$maxFixedArity = 0;
G__27591.cljs$lang$applyTo = (function (arglist__27593){
var x = cljs.core.seq(arglist__27593);
return G__27591__delegate(x);
});
G__27591.cljs$core$IFn$_invoke$arity$variadic = G__27591__delegate;
return G__27591;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1457074176264