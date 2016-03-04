// Compiled by ClojureScript 1.7.228 {}
goog.provide('tetris.rules');
goog.require('cljs.core');
goog.require('tetris.shapes');
tetris.rules.initial_state = (function tetris$rules$initial_state(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(7)),(0)], null),new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"high-score","high-score",-1220549879),(0),new cljs.core.Keyword(null,"speed","speed",1257663751),(50),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.rand_nth.call(null,cljs.core.keys.call(null,tetris.shapes.shapes)).call(null,tetris.shapes.shapes)], null);
});
tetris.rules.rotate_cw = (function tetris$rules$rotate_cw(shape){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,cljs.core.map.call(null,cljs.core.rseq,shape));
});
tetris.rules.rotate_ccw = (function tetris$rules$rotate_ccw(shape){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rseq,cljs.core.vector),shape);
});
tetris.rules.shape_coords = (function tetris$rules$shape_coords(p__27288){
var map__27297 = p__27288;
var map__27297__$1 = ((((!((map__27297 == null)))?((((map__27297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27297):map__27297);
var shape_pos = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929));
var shape = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var d = cljs.core.count.call(null,shape);
var iter__19063__auto__ = ((function (d,map__27297,map__27297__$1,shape_pos,shape){
return (function tetris$rules$shape_coords_$_iter__27299(s__27300){
return (new cljs.core.LazySeq(null,((function (d,map__27297,map__27297__$1,shape_pos,shape){
return (function (){
var s__27300__$1 = s__27300;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27300__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var i = cljs.core.first.call(null,xs__4977__auto__);
var iterys__19059__auto__ = ((function (s__27300__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__27297,map__27297__$1,shape_pos,shape){
return (function tetris$rules$shape_coords_$_iter__27299_$_iter__27301(s__27302){
return (new cljs.core.LazySeq(null,((function (s__27300__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__27297,map__27297__$1,shape_pos,shape){
return (function (){
var s__27302__$1 = s__27302;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27302__$1);
if(temp__4425__auto____$1){
var s__27302__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27302__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__27302__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__27304 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__27303 = (0);
while(true){
if((i__27303 < size__19062__auto__)){
var j = cljs.core._nth.call(null,c__19061__auto__,i__27303);
if(cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
cljs.core.chunk_append.call(null,b__27304,cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),shape_pos));

var G__27305 = (i__27303 + (1));
i__27303 = G__27305;
continue;
} else {
var G__27306 = (i__27303 + (1));
i__27303 = G__27306;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27304),tetris$rules$shape_coords_$_iter__27299_$_iter__27301.call(null,cljs.core.chunk_rest.call(null,s__27302__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27304),null);
}
} else {
var j = cljs.core.first.call(null,s__27302__$2);
if(cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
return cljs.core.cons.call(null,cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),shape_pos),tetris$rules$shape_coords_$_iter__27299_$_iter__27301.call(null,cljs.core.rest.call(null,s__27302__$2)));
} else {
var G__27307 = cljs.core.rest.call(null,s__27302__$2);
s__27302__$1 = G__27307;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__27300__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__27297,map__27297__$1,shape_pos,shape))
,null,null));
});})(s__27300__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__27297,map__27297__$1,shape_pos,shape))
;
var fs__19060__auto__ = cljs.core.seq.call(null,iterys__19059__auto__.call(null,cljs.core.range.call(null,d)));
if(fs__19060__auto__){
return cljs.core.concat.call(null,fs__19060__auto__,tetris$rules$shape_coords_$_iter__27299.call(null,cljs.core.rest.call(null,s__27300__$1)));
} else {
var G__27308 = cljs.core.rest.call(null,s__27300__$1);
s__27300__$1 = G__27308;
continue;
}
} else {
return null;
}
break;
}
});})(d,map__27297,map__27297__$1,shape_pos,shape))
,null,null));
});})(d,map__27297,map__27297__$1,shape_pos,shape))
;
return iter__19063__auto__.call(null,cljs.core.range.call(null,d));
});
tetris.rules.score = (function tetris$rules$score(p__27309,amt){
var map__27313 = p__27309;
var map__27313__$1 = ((((!((map__27313 == null)))?((((map__27313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27313):map__27313);
var state = map__27313__$1;
var score__$1 = cljs.core.get.call(null,map__27313__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var high_score = cljs.core.get.call(null,map__27313__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
var new_score = (score__$1 + amt);
var G__27315 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"score","score",-1963588780),new_score);
var G__27315__$1 = (((new_score > high_score))?cljs.core.assoc.call(null,G__27315,new cljs.core.Keyword(null,"high-score","high-score",-1220549879),new_score):G__27315);
return G__27315__$1;
});
tetris.rules.valid_QMARK_ = (function tetris$rules$valid_QMARK_(p__27316){
var map__27321 = p__27316;
var map__27321__$1 = ((((!((map__27321 == null)))?((((map__27321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27321):map__27321);
var state = map__27321__$1;
var board = cljs.core.get.call(null,map__27321__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return cljs.core.every_QMARK_.call(null,((function (map__27321,map__27321__$1,state,board){
return (function (p__27323){
var vec__27324 = p__27323;
var x = cljs.core.nth.call(null,vec__27324,(0),null);
var y = cljs.core.nth.call(null,vec__27324,(1),null);
var c = vec__27324;
var and__18279__auto__ = cljs.core.complement.call(null,board).call(null,c);
if(cljs.core.truth_(and__18279__auto__)){
return ((((0) <= x)) && ((x <= (9)))) && ((y < (22)));
} else {
return and__18279__auto__;
}
});})(map__27321,map__27321__$1,state,board))
,tetris.rules.shape_coords.call(null,state));
});
tetris.rules.x_shift = (function tetris$rules$x_shift(state,f){
var shifted = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929),(0)], null),f);
if(cljs.core.truth_(tetris.rules.valid_QMARK_.call(null,shifted))){
return shifted;
} else {
return state;
}
});
tetris.rules.rotate = (function tetris$rules$rotate(state,f){
var shifted = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"shape","shape",1190694006),f);
if(cljs.core.truth_(tetris.rules.valid_QMARK_.call(null,shifted))){
return shifted;
} else {
return state;
}
});
tetris.rules.clear_row = (function tetris$rules$clear_row(p__27325,row){
var map__27340 = p__27325;
var map__27340__$1 = ((((!((map__27340 == null)))?((((map__27340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27340):map__27340);
var state = map__27340__$1;
var board = cljs.core.get.call(null,map__27340__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
if(cljs.core.every_QMARK_.call(null,board,(function (){var iter__19063__auto__ = ((function (map__27340,map__27340__$1,state,board){
return (function tetris$rules$clear_row_$_iter__27342(s__27343){
return (new cljs.core.LazySeq(null,((function (map__27340,map__27340__$1,state,board){
return (function (){
var s__27343__$1 = s__27343;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27343__$1);
if(temp__4425__auto__){
var s__27343__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27343__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__27343__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__27345 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__27344 = (0);
while(true){
if((i__27344 < size__19062__auto__)){
var i = cljs.core._nth.call(null,c__19061__auto__,i__27344);
cljs.core.chunk_append.call(null,b__27345,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null));

var G__27354 = (i__27344 + (1));
i__27344 = G__27354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27345),tetris$rules$clear_row_$_iter__27342.call(null,cljs.core.chunk_rest.call(null,s__27343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27345),null);
}
} else {
var i = cljs.core.first.call(null,s__27343__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null),tetris$rules$clear_row_$_iter__27342.call(null,cljs.core.rest.call(null,s__27343__$2)));
}
} else {
return null;
}
break;
}
});})(map__27340,map__27340__$1,state,board))
,null,null));
});})(map__27340,map__27340__$1,state,board))
;
return iter__19063__auto__.call(null,cljs.core.range.call(null,(10)));
})())){
return cljs.core.assoc.call(null,cljs.core.update.call(null,tetris.rules.score.call(null,state,(10)),new cljs.core.Keyword(null,"speed","speed",1257663751),cljs.core.dec),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.set.call(null,(function (){var iter__19063__auto__ = ((function (map__27340,map__27340__$1,state,board){
return (function tetris$rules$clear_row_$_iter__27346(s__27347){
return (new cljs.core.LazySeq(null,((function (map__27340,map__27340__$1,state,board){
return (function (){
var s__27347__$1 = s__27347;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27347__$1);
if(temp__4425__auto__){
var s__27347__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27347__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__27347__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__27349 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__27348 = (0);
while(true){
if((i__27348 < size__19062__auto__)){
var vec__27352 = cljs.core._nth.call(null,c__19061__auto__,i__27348);
var i = cljs.core.nth.call(null,vec__27352,(0),null);
var j = cljs.core.nth.call(null,vec__27352,(1),null);
if(cljs.core.not_EQ_.call(null,j,row)){
cljs.core.chunk_append.call(null,b__27349,(((j < row))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)));

var G__27355 = (i__27348 + (1));
i__27348 = G__27355;
continue;
} else {
var G__27356 = (i__27348 + (1));
i__27348 = G__27356;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27349),tetris$rules$clear_row_$_iter__27346.call(null,cljs.core.chunk_rest.call(null,s__27347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27349),null);
}
} else {
var vec__27353 = cljs.core.first.call(null,s__27347__$2);
var i = cljs.core.nth.call(null,vec__27353,(0),null);
var j = cljs.core.nth.call(null,vec__27353,(1),null);
if(cljs.core.not_EQ_.call(null,j,row)){
return cljs.core.cons.call(null,(((j < row))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),tetris$rules$clear_row_$_iter__27346.call(null,cljs.core.rest.call(null,s__27347__$2)));
} else {
var G__27357 = cljs.core.rest.call(null,s__27347__$2);
s__27347__$1 = G__27357;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__27340,map__27340__$1,state,board))
,null,null));
});})(map__27340,map__27340__$1,state,board))
;
return iter__19063__auto__.call(null,board);
})()));
} else {
return state;
}
});
tetris.rules.fall = (function tetris$rules$fall(state){
var shifted = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929),(1)], null),cljs.core.inc);
if(cljs.core.truth_(tetris.rules.valid_QMARK_.call(null,shifted))){
return shifted;
} else {
var locked_coords = tetris.rules.shape_coords.call(null,state);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,((function (locked_coords,shifted){
return (function (p1__27358_SHARP_){
return cljs.core.reduce.call(null,tetris.rules.clear_row,p1__27358_SHARP_,cljs.core.map.call(null,cljs.core.second,locked_coords));
});})(locked_coords,shifted))
.call(null,tetris.rules.score.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.into,locked_coords),(1))),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.rand_nth.call(null,cljs.core.keys.call(null,tetris.shapes.shapes)).call(null,tetris.shapes.shapes)),new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(7)),(0)], null));
}
});
tetris.rules.fast_drop = (function tetris$rules$fast_drop(p__27360){
var map__27363 = p__27360;
var map__27363__$1 = ((((!((map__27363 == null)))?((((map__27363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27363):map__27363);
var state = map__27363__$1;
var board = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return cljs.core.some.call(null,((function (map__27363,map__27363__$1,state,board){
return (function (p1__27359_SHARP_){
if(cljs.core.not_EQ_.call(null,board,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(p1__27359_SHARP_))){
return p1__27359_SHARP_;
} else {
return null;
}
});})(map__27363,map__27363__$1,state,board))
,cljs.core.iterate.call(null,tetris.rules.fall,state));
});
tetris.rules.game_step = (function tetris$rules$game_step(p__27365){
var map__27369 = p__27365;
var map__27369__$1 = ((((!((map__27369 == null)))?((((map__27369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27369):map__27369);
var state = map__27369__$1;
var frame = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var board = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var speed = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var G__27371 = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
var G__27371__$1 = (((cljs.core.mod.call(null,frame,(function (){var x__18622__auto__ = speed;
var y__18623__auto__ = (1);
return ((x__18622__auto__ > y__18623__auto__) ? x__18622__auto__ : y__18623__auto__);
})()) === (0)))?tetris.rules.fall.call(null,G__27371):G__27371);
var G__27371__$2 = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.zero_QMARK_,cljs.core.map.call(null,cljs.core.second,board)))?cljs.core.into.call(null,G__27371__$1,cljs.core.dissoc.call(null,tetris.rules.initial_state.call(null),new cljs.core.Keyword(null,"high-score","high-score",-1220549879))):G__27371__$1);
return G__27371__$2;
});

//# sourceMappingURL=rules.js.map?rel=1457074176069