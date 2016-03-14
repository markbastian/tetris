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
tetris.game_launcher.render = (function tetris$game_launcher$render(p__26335){
var map__26350 = p__26335;
var map__26350__$1 = ((((!((map__26350 == null)))?((((map__26350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26350):map__26350);
var state = map__26350__$1;
var board = cljs.core.get.call(null,map__26350__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var dim = (20);
var sc = cljs.core.set.call(null,tetris.rules.shape_coords.call(null,state));
quil.core.background.call(null,(0),(0),(0));

var seq__26352 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__26357 = null;
var count__26358 = (0);
var i__26359 = (0);
while(true){
if((i__26359 < count__26358)){
var i = cljs.core._nth.call(null,chunk__26357,i__26359);
var seq__26360_26364 = cljs.core.seq.call(null,cljs.core.range.call(null,(22)));
var chunk__26361_26365 = null;
var count__26362_26366 = (0);
var i__26363_26367 = (0);
while(true){
if((i__26363_26367 < count__26362_26366)){
var j_26368 = cljs.core._nth.call(null,chunk__26361_26365,i__26363_26367);
var old_fill__26224__auto___26369 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_26368], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_26368], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_26368 * dim),dim,dim);

quil.core.fill.call(null,old_fill__26224__auto___26369);

var G__26370 = seq__26360_26364;
var G__26371 = chunk__26361_26365;
var G__26372 = count__26362_26366;
var G__26373 = (i__26363_26367 + (1));
seq__26360_26364 = G__26370;
chunk__26361_26365 = G__26371;
count__26362_26366 = G__26372;
i__26363_26367 = G__26373;
continue;
} else {
var temp__4425__auto___26374 = cljs.core.seq.call(null,seq__26360_26364);
if(temp__4425__auto___26374){
var seq__26360_26375__$1 = temp__4425__auto___26374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26360_26375__$1)){
var c__19094__auto___26376 = cljs.core.chunk_first.call(null,seq__26360_26375__$1);
var G__26377 = cljs.core.chunk_rest.call(null,seq__26360_26375__$1);
var G__26378 = c__19094__auto___26376;
var G__26379 = cljs.core.count.call(null,c__19094__auto___26376);
var G__26380 = (0);
seq__26360_26364 = G__26377;
chunk__26361_26365 = G__26378;
count__26362_26366 = G__26379;
i__26363_26367 = G__26380;
continue;
} else {
var j_26381 = cljs.core.first.call(null,seq__26360_26375__$1);
var old_fill__26224__auto___26382 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_26381], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_26381], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_26381 * dim),dim,dim);

quil.core.fill.call(null,old_fill__26224__auto___26382);

var G__26383 = cljs.core.next.call(null,seq__26360_26375__$1);
var G__26384 = null;
var G__26385 = (0);
var G__26386 = (0);
seq__26360_26364 = G__26383;
chunk__26361_26365 = G__26384;
count__26362_26366 = G__26385;
i__26363_26367 = G__26386;
continue;
}
} else {
}
}
break;
}

var G__26387 = seq__26352;
var G__26388 = chunk__26357;
var G__26389 = count__26358;
var G__26390 = (i__26359 + (1));
seq__26352 = G__26387;
chunk__26357 = G__26388;
count__26358 = G__26389;
i__26359 = G__26390;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26352);
if(temp__4425__auto__){
var seq__26352__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26352__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__26352__$1);
var G__26391 = cljs.core.chunk_rest.call(null,seq__26352__$1);
var G__26392 = c__19094__auto__;
var G__26393 = cljs.core.count.call(null,c__19094__auto__);
var G__26394 = (0);
seq__26352 = G__26391;
chunk__26357 = G__26392;
count__26358 = G__26393;
i__26359 = G__26394;
continue;
} else {
var i = cljs.core.first.call(null,seq__26352__$1);
var seq__26353_26395 = cljs.core.seq.call(null,cljs.core.range.call(null,(22)));
var chunk__26354_26396 = null;
var count__26355_26397 = (0);
var i__26356_26398 = (0);
while(true){
if((i__26356_26398 < count__26355_26397)){
var j_26399 = cljs.core._nth.call(null,chunk__26354_26396,i__26356_26398);
var old_fill__26224__auto___26400 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_26399], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_26399], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_26399 * dim),dim,dim);

quil.core.fill.call(null,old_fill__26224__auto___26400);

var G__26401 = seq__26353_26395;
var G__26402 = chunk__26354_26396;
var G__26403 = count__26355_26397;
var G__26404 = (i__26356_26398 + (1));
seq__26353_26395 = G__26401;
chunk__26354_26396 = G__26402;
count__26355_26397 = G__26403;
i__26356_26398 = G__26404;
continue;
} else {
var temp__4425__auto___26405__$1 = cljs.core.seq.call(null,seq__26353_26395);
if(temp__4425__auto___26405__$1){
var seq__26353_26406__$1 = temp__4425__auto___26405__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26353_26406__$1)){
var c__19094__auto___26407 = cljs.core.chunk_first.call(null,seq__26353_26406__$1);
var G__26408 = cljs.core.chunk_rest.call(null,seq__26353_26406__$1);
var G__26409 = c__19094__auto___26407;
var G__26410 = cljs.core.count.call(null,c__19094__auto___26407);
var G__26411 = (0);
seq__26353_26395 = G__26408;
chunk__26354_26396 = G__26409;
count__26355_26397 = G__26410;
i__26356_26398 = G__26411;
continue;
} else {
var j_26412 = cljs.core.first.call(null,seq__26353_26406__$1);
var old_fill__26224__auto___26413 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_26412], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_26412], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_26412 * dim),dim,dim);

quil.core.fill.call(null,old_fill__26224__auto___26413);

var G__26414 = cljs.core.next.call(null,seq__26353_26406__$1);
var G__26415 = null;
var G__26416 = (0);
var G__26417 = (0);
seq__26353_26395 = G__26414;
chunk__26354_26396 = G__26415;
count__26355_26397 = G__26416;
i__26356_26398 = G__26417;
continue;
}
} else {
}
}
break;
}

var G__26418 = cljs.core.next.call(null,seq__26352__$1);
var G__26419 = null;
var G__26420 = (0);
var G__26421 = (0);
seq__26352 = G__26418;
chunk__26357 = G__26419;
count__26358 = G__26420;
i__26359 = G__26421;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.game_launcher.launch_sketch = (function tetris$game_launcher$launch_sketch(p__26422){
var map__26429 = p__26422;
var map__26429__$1 = ((((!((map__26429 == null)))?((((map__26429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26429):map__26429);
var width = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var host = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"title","title",636505583),"lander",new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"setup","setup",1987730512),tetris.game_launcher.setup,new cljs.core.Keyword(null,"draw","draw",1358331674),tetris.game_launcher.render,new cljs.core.Keyword(null,"update","update",1045576396),tetris.rules.game_step,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((function (map__26429,map__26429__$1,width,height,host){
return (function (state,p__26431){
var map__26432 = p__26431;
var map__26432__$1 = ((((!((map__26432 == null)))?((((map__26432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26432):map__26432);
var key_code = cljs.core.get.call(null,map__26432__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var G__26434 = key_code;
switch (G__26434) {
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
});})(map__26429,map__26429__$1,width,height,host))
);
});
tetris.game_launcher.launch_app = (function tetris$game_launcher$launch_app(host,width,height){
return tetris.game_launcher.launch_sketch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"host","host",-1558485167),host], null));
});
goog.exportSymbol('tetris.game_launcher.launch_app', tetris.game_launcher.launch_app);

//# sourceMappingURL=game_launcher.js.map?rel=1457675247955