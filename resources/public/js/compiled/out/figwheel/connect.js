// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('tetris.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__23009__delegate = function (x){
if(cljs.core.truth_(tetris.core.on_js_reload)){
return cljs.core.apply.call(null,tetris.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tetris.core/on-js-reload' is missing");
}
};
var G__23009 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__23010__i = 0, G__23010__a = new Array(arguments.length -  0);
while (G__23010__i < G__23010__a.length) {G__23010__a[G__23010__i] = arguments[G__23010__i + 0]; ++G__23010__i;}
  x = new cljs.core.IndexedSeq(G__23010__a,0);
} 
return G__23009__delegate.call(this,x);};
G__23009.cljs$lang$maxFixedArity = 0;
G__23009.cljs$lang$applyTo = (function (arglist__23011){
var x = cljs.core.seq(arglist__23011);
return G__23009__delegate(x);
});
G__23009.cljs$core$IFn$_invoke$arity$variadic = G__23009__delegate;
return G__23009;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1457014856004