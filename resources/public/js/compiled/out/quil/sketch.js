// Compiled by ClojureScript 1.7.228 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args23272 = [];
var len__19349__auto___23275 = arguments.length;
var i__19350__auto___23276 = (0);
while(true){
if((i__19350__auto___23276 < len__19349__auto___23275)){
args23272.push((arguments[i__19350__auto___23276]));

var G__23277 = (i__19350__auto___23276 + (1));
i__19350__auto___23276 = G__23277;
continue;
} else {
}
break;
}

var G__23274 = args23272.length;
switch (G__23274) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23272.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;
quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__23287 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__23288 = null;
var count__23289 = (0);
var i__23290 = (0);
while(true){
if((i__23290 < count__23289)){
var vec__23291 = cljs.core._nth.call(null,chunk__23288,i__23290);
var processing_name = cljs.core.nth.call(null,vec__23291,(0),null);
var quil_name = cljs.core.nth.call(null,vec__23291,(1),null);
var temp__4425__auto___23295 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4425__auto___23295)){
var handler_23296 = temp__4425__auto___23295;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__23287,chunk__23288,count__23289,i__23290,handler_23296,temp__4425__auto___23295,vec__23291,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_23292 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_23296.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_23292;
}});})(seq__23287,chunk__23288,count__23289,i__23290,handler_23296,temp__4425__auto___23295,vec__23291,processing_name,quil_name))
);
} else {
}

var G__23297 = seq__23287;
var G__23298 = chunk__23288;
var G__23299 = count__23289;
var G__23300 = (i__23290 + (1));
seq__23287 = G__23297;
chunk__23288 = G__23298;
count__23289 = G__23299;
i__23290 = G__23300;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23287);
if(temp__4425__auto__){
var seq__23287__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23287__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__23287__$1);
var G__23301 = cljs.core.chunk_rest.call(null,seq__23287__$1);
var G__23302 = c__19094__auto__;
var G__23303 = cljs.core.count.call(null,c__19094__auto__);
var G__23304 = (0);
seq__23287 = G__23301;
chunk__23288 = G__23302;
count__23289 = G__23303;
i__23290 = G__23304;
continue;
} else {
var vec__23293 = cljs.core.first.call(null,seq__23287__$1);
var processing_name = cljs.core.nth.call(null,vec__23293,(0),null);
var quil_name = cljs.core.nth.call(null,vec__23293,(1),null);
var temp__4425__auto___23305__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__4425__auto___23305__$1)){
var handler_23306 = temp__4425__auto___23305__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__23287,chunk__23288,count__23289,i__23290,handler_23306,temp__4425__auto___23305__$1,vec__23293,processing_name,quil_name,seq__23287__$1,temp__4425__auto__){
return (function (){
var _STAR_applet_STAR_23294 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_23306.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_23294;
}});})(seq__23287,chunk__23288,count__23289,i__23290,handler_23306,temp__4425__auto___23305__$1,vec__23293,processing_name,quil_name,seq__23287__$1,temp__4425__auto__))
);
} else {
}

var G__23307 = cljs.core.next.call(null,seq__23287__$1);
var G__23308 = null;
var G__23309 = (0);
var G__23310 = (0);
seq__23287 = G__23307;
chunk__23288 = G__23308;
count__23289 = G__23309;
i__23290 = G__23310;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__23311_SHARP_){
return p1__23311_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__18291__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var opts__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"setup","setup",1987730512)], null),((function (opts,sketch_size,renderer,features){
return (function (p1__23312_SHARP_){
return ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(p1__23312_SHARP_)){
return p1__23312_SHARP_.call(null);
} else {
return null;
}
});
;})(opts,sketch_size,renderer,features))
});})(opts,sketch_size,renderer,features))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439)], null),((function (opts,sketch_size,renderer,features){
return (function (p1__23313_SHARP_){
if(cljs.core.truth_(p1__23313_SHARP_)){
return ((function (opts,sketch_size,renderer,features){
return (function (){
return p1__23313_SHARP_.call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});
;})(opts,sketch_size,renderer,features))
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
);
var attach_function = ((function (opts,sketch_size,renderer,features,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__19356__auto__ = [];
var len__19349__auto___23315 = arguments.length;
var i__19350__auto___23316 = (0);
while(true){
if((i__19350__auto___23316 < len__19349__auto___23315)){
args__19356__auto__.push((arguments[i__19350__auto___23316]));

var G__23317 = (i__19350__auto___23316 + (1));
i__19350__auto___23316 = G__23317;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((0) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((0)),(0))):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__19357__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__18291__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

return (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
} else {
return console.warn("WARNING: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq23314){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23314));
});
quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK_ = quil.sketch.empty_body_QMARK_.call(null);
var seq__23322 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__23323 = null;
var count__23324 = (0);
var i__23325 = (0);
while(true){
if((i__23325 < count__23324)){
var sk = cljs.core._nth.call(null,chunk__23323,i__23325);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__23326 = seq__23322;
var G__23327 = chunk__23323;
var G__23328 = count__23324;
var G__23329 = (i__23325 + (1));
seq__23322 = G__23326;
chunk__23323 = G__23327;
count__23324 = G__23328;
i__23325 = G__23329;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23322);
if(temp__4425__auto__){
var seq__23322__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23322__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__23322__$1);
var G__23330 = cljs.core.chunk_rest.call(null,seq__23322__$1);
var G__23331 = c__19094__auto__;
var G__23332 = cljs.core.count.call(null,c__19094__auto__);
var G__23333 = (0);
seq__23322 = G__23330;
chunk__23323 = G__23331;
count__23324 = G__23332;
i__23325 = G__23333;
continue;
} else {
var sk = cljs.core.first.call(null,seq__23322__$1);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__23334 = cljs.core.next.call(null,seq__23322__$1);
var G__23335 = null;
var G__23336 = (0);
var G__23337 = (0);
seq__23322 = G__23334;
chunk__23323 = G__23335;
count__23324 = G__23336;
i__23325 = G__23337;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
return cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map?rel=1456984142129