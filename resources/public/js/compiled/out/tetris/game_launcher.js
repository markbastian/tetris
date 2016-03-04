// Compiled by ClojureScript 1.7.228 {}
goog.provide('tetris.game_launcher');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('tetris.shapes');
goog.require('tetris.rules');
tetris.game_launcher.setup = (function tetris$game_launcher$setup(){
quil.core.smooth.call(null);

quil.core.frame_rate.call(null,(100));

return tetris.rules.initial_state.call(null);
});
tetris.game_launcher.render = (function tetris$game_launcher$render(p__27374){
var map__27389 = p__27374;
var map__27389__$1 = ((((!((map__27389 == null)))?((((map__27389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27389):map__27389);
var state = map__27389__$1;
var board = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var dim = (20);
var sc = cljs.core.set.call(null,tetris.rules.shape_coords.call(null,state));
quil.core.background.call(null,(0),(0),(0));

var seq__27391 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__27396 = null;
var count__27397 = (0);
var i__27398 = (0);
while(true){
if((i__27398 < count__27397)){
var i = cljs.core._nth.call(null,chunk__27396,i__27398);
var seq__27399_27403 = cljs.core.seq.call(null,cljs.core.range.call(null,(22)));
var chunk__27400_27404 = null;
var count__27401_27405 = (0);
var i__27402_27406 = (0);
while(true){
if((i__27402_27406 < count__27401_27405)){
var j_27407 = cljs.core._nth.call(null,chunk__27400_27404,i__27402_27406);
var old_fill__22657__auto___27408 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_27407], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_27407], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_27407 * dim),dim,dim);

quil.core.fill.call(null,old_fill__22657__auto___27408);

var G__27409 = seq__27399_27403;
var G__27410 = chunk__27400_27404;
var G__27411 = count__27401_27405;
var G__27412 = (i__27402_27406 + (1));
seq__27399_27403 = G__27409;
chunk__27400_27404 = G__27410;
count__27401_27405 = G__27411;
i__27402_27406 = G__27412;
continue;
} else {
var temp__4425__auto___27413 = cljs.core.seq.call(null,seq__27399_27403);
if(temp__4425__auto___27413){
var seq__27399_27414__$1 = temp__4425__auto___27413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27399_27414__$1)){
var c__19094__auto___27415 = cljs.core.chunk_first.call(null,seq__27399_27414__$1);
var G__27416 = cljs.core.chunk_rest.call(null,seq__27399_27414__$1);
var G__27417 = c__19094__auto___27415;
var G__27418 = cljs.core.count.call(null,c__19094__auto___27415);
var G__27419 = (0);
seq__27399_27403 = G__27416;
chunk__27400_27404 = G__27417;
count__27401_27405 = G__27418;
i__27402_27406 = G__27419;
continue;
} else {
var j_27420 = cljs.core.first.call(null,seq__27399_27414__$1);
var old_fill__22657__auto___27421 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_27420], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_27420], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_27420 * dim),dim,dim);

quil.core.fill.call(null,old_fill__22657__auto___27421);

var G__27422 = cljs.core.next.call(null,seq__27399_27414__$1);
var G__27423 = null;
var G__27424 = (0);
var G__27425 = (0);
seq__27399_27403 = G__27422;
chunk__27400_27404 = G__27423;
count__27401_27405 = G__27424;
i__27402_27406 = G__27425;
continue;
}
} else {
}
}
break;
}

var G__27426 = seq__27391;
var G__27427 = chunk__27396;
var G__27428 = count__27397;
var G__27429 = (i__27398 + (1));
seq__27391 = G__27426;
chunk__27396 = G__27427;
count__27397 = G__27428;
i__27398 = G__27429;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27391);
if(temp__4425__auto__){
var seq__27391__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27391__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__27391__$1);
var G__27430 = cljs.core.chunk_rest.call(null,seq__27391__$1);
var G__27431 = c__19094__auto__;
var G__27432 = cljs.core.count.call(null,c__19094__auto__);
var G__27433 = (0);
seq__27391 = G__27430;
chunk__27396 = G__27431;
count__27397 = G__27432;
i__27398 = G__27433;
continue;
} else {
var i = cljs.core.first.call(null,seq__27391__$1);
var seq__27392_27434 = cljs.core.seq.call(null,cljs.core.range.call(null,(22)));
var chunk__27393_27435 = null;
var count__27394_27436 = (0);
var i__27395_27437 = (0);
while(true){
if((i__27395_27437 < count__27394_27436)){
var j_27438 = cljs.core._nth.call(null,chunk__27393_27435,i__27395_27437);
var old_fill__22657__auto___27439 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_27438], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_27438], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_27438 * dim),dim,dim);

quil.core.fill.call(null,old_fill__22657__auto___27439);

var G__27440 = seq__27392_27434;
var G__27441 = chunk__27393_27435;
var G__27442 = count__27394_27436;
var G__27443 = (i__27395_27437 + (1));
seq__27392_27434 = G__27440;
chunk__27393_27435 = G__27441;
count__27394_27436 = G__27442;
i__27395_27437 = G__27443;
continue;
} else {
var temp__4425__auto___27444__$1 = cljs.core.seq.call(null,seq__27392_27434);
if(temp__4425__auto___27444__$1){
var seq__27392_27445__$1 = temp__4425__auto___27444__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27392_27445__$1)){
var c__19094__auto___27446 = cljs.core.chunk_first.call(null,seq__27392_27445__$1);
var G__27447 = cljs.core.chunk_rest.call(null,seq__27392_27445__$1);
var G__27448 = c__19094__auto___27446;
var G__27449 = cljs.core.count.call(null,c__19094__auto___27446);
var G__27450 = (0);
seq__27392_27434 = G__27447;
chunk__27393_27435 = G__27448;
count__27394_27436 = G__27449;
i__27395_27437 = G__27450;
continue;
} else {
var j_27451 = cljs.core.first.call(null,seq__27392_27445__$1);
var old_fill__22657__auto___27452 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_27451], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_27451], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_27451 * dim),dim,dim);

quil.core.fill.call(null,old_fill__22657__auto___27452);

var G__27453 = cljs.core.next.call(null,seq__27392_27445__$1);
var G__27454 = null;
var G__27455 = (0);
var G__27456 = (0);
seq__27392_27434 = G__27453;
chunk__27393_27435 = G__27454;
count__27394_27436 = G__27455;
i__27395_27437 = G__27456;
continue;
}
} else {
}
}
break;
}

var G__27457 = cljs.core.next.call(null,seq__27391__$1);
var G__27458 = null;
var G__27459 = (0);
var G__27460 = (0);
seq__27391 = G__27457;
chunk__27396 = G__27458;
count__27397 = G__27459;
i__27398 = G__27460;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.game_launcher.launch_sketch = (function tetris$game_launcher$launch_sketch(p__27461){
var map__27468 = p__27461;
var map__27468__$1 = ((((!((map__27468 == null)))?((((map__27468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27468):map__27468);
var width = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var host = cljs.core.get.call(null,map__27468__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"title","title",636505583),"lander",new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"setup","setup",1987730512),tetris.game_launcher.setup,new cljs.core.Keyword(null,"draw","draw",1358331674),tetris.game_launcher.render,new cljs.core.Keyword(null,"update","update",1045576396),tetris.rules.game_step,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((function (map__27468,map__27468__$1,width,height,host){
return (function (state,p__27470){
var map__27471 = p__27470;
var map__27471__$1 = ((((!((map__27471 == null)))?((((map__27471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27471):map__27471);
var key_code = cljs.core.get.call(null,map__27471__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var G__27473 = key_code;
switch (G__27473) {
case (38):
return tetris.rules.rotate.call(null,state,tetris.rules.rotate_ccw);

break;
case (40):
return tetris.rules.rotate.call(null,state,tetris.rules.rotate_cw);

break;
case (37):
return tetris.rules.x_shift.call(null,state,cljs.core.dec);

break;
case (39):
return tetris.rules.x_shift.call(null,state,cljs.core.inc);

break;
case (32):
return tetris.rules.fast_drop.call(null,state);

break;
default:
return state;

}
});})(map__27468,map__27468__$1,width,height,host))
);
});
tetris.game_launcher.launch_app = (function tetris$game_launcher$launch_app(host,width,height){
return tetris.game_launcher.launch_sketch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"host","host",-1558485167),host], null));
});
goog.exportSymbol('tetris.game_launcher.launch_app', tetris.game_launcher.launch_app);

//# sourceMappingURL=game_launcher.js.map?rel=1457074176138