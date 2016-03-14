// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('tetris.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__28698__delegate = function (x){
if(cljs.core.truth_(tetris.core.on_js_reload)){
return cljs.core.apply.call(null,tetris.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tetris.core/on-js-reload' is missing");
}
};
var G__28698 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__28699__i = 0, G__28699__a = new Array(arguments.length -  0);
while (G__28699__i < G__28699__a.length) {G__28699__a[G__28699__i] = arguments[G__28699__i + 0]; ++G__28699__i;}
  x = new cljs.core.IndexedSeq(G__28699__a,0);
} 
return G__28698__delegate.call(this,x);};
G__28698.cljs$lang$maxFixedArity = 0;
G__28698.cljs$lang$applyTo = (function (arglist__28700){
var x = cljs.core.seq(arglist__28700);
return G__28698__delegate(x);
});
G__28698.cljs$core$IFn$_invoke$arity$variadic = G__28698__delegate;
return G__28698;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1457675249359