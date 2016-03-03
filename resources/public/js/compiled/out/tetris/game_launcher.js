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
tetris.game_launcher.render = (function tetris$game_launcher$render(p__30435){
var map__30450 = p__30435;
var map__30450__$1 = ((((!((map__30450 == null)))?((((map__30450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30450):map__30450);
var state = map__30450__$1;
var board = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var dim = (20);
var sc = cljs.core.set.call(null,tetris.rules.shape_coords.call(null,state));
quil.core.background.call(null,(0),(0),(0));

var seq__30452 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__30457 = null;
var count__30458 = (0);
var i__30459 = (0);
while(true){
if((i__30459 < count__30458)){
var i = cljs.core._nth.call(null,chunk__30457,i__30459);
var seq__30460_30464 = cljs.core.seq.call(null,cljs.core.range.call(null,(22)));
var chunk__30461_30465 = null;
var count__30462_30466 = (0);
var i__30463_30467 = (0);
while(true){
if((i__30463_30467 < count__30462_30466)){
var j_30468 = cljs.core._nth.call(null,chunk__30461_30465,i__30463_30467);
var old_fill__24466__auto___30469 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_30468], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_30468], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_30468 * dim),dim,dim);

quil.core.fill.call(null,old_fill__24466__auto___30469);

var G__30470 = seq__30460_30464;
var G__30471 = chunk__30461_30465;
var G__30472 = count__30462_30466;
var G__30473 = (i__30463_30467 + (1));
seq__30460_30464 = G__30470;
chunk__30461_30465 = G__30471;
count__30462_30466 = G__30472;
i__30463_30467 = G__30473;
continue;
} else {
var temp__4425__auto___30474 = cljs.core.seq.call(null,seq__30460_30464);
if(temp__4425__auto___30474){
var seq__30460_30475__$1 = temp__4425__auto___30474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30460_30475__$1)){
var c__19094__auto___30476 = cljs.core.chunk_first.call(null,seq__30460_30475__$1);
var G__30477 = cljs.core.chunk_rest.call(null,seq__30460_30475__$1);
var G__30478 = c__19094__auto___30476;
var G__30479 = cljs.core.count.call(null,c__19094__auto___30476);
var G__30480 = (0);
seq__30460_30464 = G__30477;
chunk__30461_30465 = G__30478;
count__30462_30466 = G__30479;
i__30463_30467 = G__30480;
continue;
} else {
var j_30481 = cljs.core.first.call(null,seq__30460_30475__$1);
var old_fill__24466__auto___30482 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_30481], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_30481], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_30481 * dim),dim,dim);

quil.core.fill.call(null,old_fill__24466__auto___30482);

var G__30483 = cljs.core.next.call(null,seq__30460_30475__$1);
var G__30484 = null;
var G__30485 = (0);
var G__30486 = (0);
seq__30460_30464 = G__30483;
chunk__30461_30465 = G__30484;
count__30462_30466 = G__30485;
i__30463_30467 = G__30486;
continue;
}
} else {
}
}
break;
}

var G__30487 = seq__30452;
var G__30488 = chunk__30457;
var G__30489 = count__30458;
var G__30490 = (i__30459 + (1));
seq__30452 = G__30487;
chunk__30457 = G__30488;
count__30458 = G__30489;
i__30459 = G__30490;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30452);
if(temp__4425__auto__){
var seq__30452__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30452__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__30452__$1);
var G__30491 = cljs.core.chunk_rest.call(null,seq__30452__$1);
var G__30492 = c__19094__auto__;
var G__30493 = cljs.core.count.call(null,c__19094__auto__);
var G__30494 = (0);
seq__30452 = G__30491;
chunk__30457 = G__30492;
count__30458 = G__30493;
i__30459 = G__30494;
continue;
} else {
var i = cljs.core.first.call(null,seq__30452__$1);
var seq__30453_30495 = cljs.core.seq.call(null,cljs.core.range.call(null,(22)));
var chunk__30454_30496 = null;
var count__30455_30497 = (0);
var i__30456_30498 = (0);
while(true){
if((i__30456_30498 < count__30455_30497)){
var j_30499 = cljs.core._nth.call(null,chunk__30454_30496,i__30456_30498);
var old_fill__24466__auto___30500 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_30499], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_30499], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_30499 * dim),dim,dim);

quil.core.fill.call(null,old_fill__24466__auto___30500);

var G__30501 = seq__30453_30495;
var G__30502 = chunk__30454_30496;
var G__30503 = count__30455_30497;
var G__30504 = (i__30456_30498 + (1));
seq__30453_30495 = G__30501;
chunk__30454_30496 = G__30502;
count__30455_30497 = G__30503;
i__30456_30498 = G__30504;
continue;
} else {
var temp__4425__auto___30505__$1 = cljs.core.seq.call(null,seq__30453_30495);
if(temp__4425__auto___30505__$1){
var seq__30453_30506__$1 = temp__4425__auto___30505__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30453_30506__$1)){
var c__19094__auto___30507 = cljs.core.chunk_first.call(null,seq__30453_30506__$1);
var G__30508 = cljs.core.chunk_rest.call(null,seq__30453_30506__$1);
var G__30509 = c__19094__auto___30507;
var G__30510 = cljs.core.count.call(null,c__19094__auto___30507);
var G__30511 = (0);
seq__30453_30495 = G__30508;
chunk__30454_30496 = G__30509;
count__30455_30497 = G__30510;
i__30456_30498 = G__30511;
continue;
} else {
var j_30512 = cljs.core.first.call(null,seq__30453_30506__$1);
var old_fill__24466__auto___30513 = quil.core.current_fill.call(null);
cljs.core.apply.call(null,quil.core.fill,(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_30512], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_30512], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)
)));

quil.core.rect.call(null,(i * dim),(j_30512 * dim),dim,dim);

quil.core.fill.call(null,old_fill__24466__auto___30513);

var G__30514 = cljs.core.next.call(null,seq__30453_30506__$1);
var G__30515 = null;
var G__30516 = (0);
var G__30517 = (0);
seq__30453_30495 = G__30514;
chunk__30454_30496 = G__30515;
count__30455_30497 = G__30516;
i__30456_30498 = G__30517;
continue;
}
} else {
}
}
break;
}

var G__30518 = cljs.core.next.call(null,seq__30452__$1);
var G__30519 = null;
var G__30520 = (0);
var G__30521 = (0);
seq__30452 = G__30518;
chunk__30457 = G__30519;
count__30458 = G__30520;
i__30459 = G__30521;
continue;
}
} else {
return null;
}
}
break;
}
});
tetris.game_launcher.launch_sketch = (function tetris$game_launcher$launch_sketch(p__30522){
var map__30529 = p__30522;
var map__30529__$1 = ((((!((map__30529 == null)))?((((map__30529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30529):map__30529);
var width = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var host = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"title","title",636505583),"lander",new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"setup","setup",1987730512),tetris.game_launcher.setup,new cljs.core.Keyword(null,"draw","draw",1358331674),tetris.game_launcher.render,new cljs.core.Keyword(null,"update","update",1045576396),tetris.rules.game_step,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((function (map__30529,map__30529__$1,width,height,host){
return (function (state,p__30531){
var map__30532 = p__30531;
var map__30532__$1 = ((((!((map__30532 == null)))?((((map__30532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30532):map__30532);
var key_code = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var G__30534 = key_code;
switch (G__30534) {
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
});})(map__30529,map__30529__$1,width,height,host))
);
});
tetris.game_launcher.launch_app = (function tetris$game_launcher$launch_app(host,width,height){
return tetris.game_launcher.launch_sketch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"host","host",-1558485167),host], null));
});
goog.exportSymbol('tetris.game_launcher.launch_app', tetris.game_launcher.launch_app);

//# sourceMappingURL=game_launcher.js.map?rel=1456984247492