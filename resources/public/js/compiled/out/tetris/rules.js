// Compiled by ClojureScript 1.7.228 {}
goog.provide('tetris.rules');
goog.require('cljs.core');
goog.require('tetris.shapes');
tetris.rules.initial_state = (function tetris$rules$initial_state(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"speed","speed",1257663751),(50),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"high-score","high-score",-1220549879),(0),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(7)),(0)], null),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.rand_nth.call(null,cljs.core.keys.call(null,tetris.shapes.shapes)).call(null,tetris.shapes.shapes)], null);
});
tetris.rules.rotate_cw = (function tetris$rules$rotate_cw(shape){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,cljs.core.map.call(null,cljs.core.rseq,shape));
});
tetris.rules.rotate_ccw = (function tetris$rules$rotate_ccw(shape){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rseq,cljs.core.vector),shape);
});
tetris.rules.shape_coords = (function tetris$rules$shape_coords(p__23917){
var map__23926 = p__23917;
var map__23926__$1 = ((((!((map__23926 == null)))?((((map__23926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23926):map__23926);
var shape_pos = cljs.core.get.call(null,map__23926__$1,new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929));
var shape = cljs.core.get.call(null,map__23926__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var d = cljs.core.count.call(null,shape);
var iter__19063__auto__ = ((function (d,map__23926,map__23926__$1,shape_pos,shape){
return (function tetris$rules$shape_coords_$_iter__23928(s__23929){
return (new cljs.core.LazySeq(null,((function (d,map__23926,map__23926__$1,shape_pos,shape){
return (function (){
var s__23929__$1 = s__23929;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23929__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var i = cljs.core.first.call(null,xs__4977__auto__);
var iterys__19059__auto__ = ((function (s__23929__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__23926,map__23926__$1,shape_pos,shape){
return (function tetris$rules$shape_coords_$_iter__23928_$_iter__23930(s__23931){
return (new cljs.core.LazySeq(null,((function (s__23929__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__23926,map__23926__$1,shape_pos,shape){
return (function (){
var s__23931__$1 = s__23931;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__23931__$1);
if(temp__4425__auto____$1){
var s__23931__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23931__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__23931__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__23933 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__23932 = (0);
while(true){
if((i__23932 < size__19062__auto__)){
var j = cljs.core._nth.call(null,c__19061__auto__,i__23932);
if(cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
cljs.core.chunk_append.call(null,b__23933,cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),shape_pos));

var G__23934 = (i__23932 + (1));
i__23932 = G__23934;
continue;
} else {
var G__23935 = (i__23932 + (1));
i__23932 = G__23935;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23933),tetris$rules$shape_coords_$_iter__23928_$_iter__23930.call(null,cljs.core.chunk_rest.call(null,s__23931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23933),null);
}
} else {
var j = cljs.core.first.call(null,s__23931__$2);
if(cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
return cljs.core.cons.call(null,cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),shape_pos),tetris$rules$shape_coords_$_iter__23928_$_iter__23930.call(null,cljs.core.rest.call(null,s__23931__$2)));
} else {
var G__23936 = cljs.core.rest.call(null,s__23931__$2);
s__23931__$1 = G__23936;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__23929__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__23926,map__23926__$1,shape_pos,shape))
,null,null));
});})(s__23929__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__23926,map__23926__$1,shape_pos,shape))
;
var fs__19060__auto__ = cljs.core.seq.call(null,iterys__19059__auto__.call(null,cljs.core.range.call(null,d)));
if(fs__19060__auto__){
return cljs.core.concat.call(null,fs__19060__auto__,tetris$rules$shape_coords_$_iter__23928.call(null,cljs.core.rest.call(null,s__23929__$1)));
} else {
var G__23937 = cljs.core.rest.call(null,s__23929__$1);
s__23929__$1 = G__23937;
continue;
}
} else {
return null;
}
break;
}
});})(d,map__23926,map__23926__$1,shape_pos,shape))
,null,null));
});})(d,map__23926,map__23926__$1,shape_pos,shape))
;
return iter__19063__auto__.call(null,cljs.core.range.call(null,d));
});
tetris.rules.score = (function tetris$rules$score(p__23938,amt){
var map__23942 = p__23938;
var map__23942__$1 = ((((!((map__23942 == null)))?((((map__23942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23942):map__23942);
var state = map__23942__$1;
var score__$1 = cljs.core.get.call(null,map__23942__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var high_score = cljs.core.get.call(null,map__23942__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
var new_score = (score__$1 + amt);
var G__23944 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"score","score",-1963588780),new_score);
var G__23944__$1 = (((new_score > high_score))?cljs.core.assoc.call(null,G__23944,new cljs.core.Keyword(null,"high-score","high-score",-1220549879),new_score):G__23944);
return G__23944__$1;
});
tetris.rules.valid_QMARK_ = (function tetris$rules$valid_QMARK_(p__23945){
var map__23950 = p__23945;
var map__23950__$1 = ((((!((map__23950 == null)))?((((map__23950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23950):map__23950);
var state = map__23950__$1;
var board = cljs.core.get.call(null,map__23950__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return cljs.core.every_QMARK_.call(null,((function (map__23950,map__23950__$1,state,board){
return (function (p__23952){
var vec__23953 = p__23952;
var x = cljs.core.nth.call(null,vec__23953,(0),null);
var y = cljs.core.nth.call(null,vec__23953,(1),null);
var c = vec__23953;
var and__18279__auto__ = cljs.core.complement.call(null,board).call(null,c);
if(cljs.core.truth_(and__18279__auto__)){
return ((((0) <= x)) && ((x <= (9)))) && ((y < (22)));
} else {
return and__18279__auto__;
}
});})(map__23950,map__23950__$1,state,board))
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
tetris.rules.clear_row = (function tetris$rules$clear_row(p__23954,row){
var map__23969 = p__23954;
var map__23969__$1 = ((((!((map__23969 == null)))?((((map__23969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23969):map__23969);
var state = map__23969__$1;
var board = cljs.core.get.call(null,map__23969__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
if(cljs.core.every_QMARK_.call(null,board,(function (){var iter__19063__auto__ = ((function (map__23969,map__23969__$1,state,board){
return (function tetris$rules$clear_row_$_iter__23971(s__23972){
return (new cljs.core.LazySeq(null,((function (map__23969,map__23969__$1,state,board){
return (function (){
var s__23972__$1 = s__23972;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23972__$1);
if(temp__4425__auto__){
var s__23972__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23972__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__23972__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__23974 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__23973 = (0);
while(true){
if((i__23973 < size__19062__auto__)){
var i = cljs.core._nth.call(null,c__19061__auto__,i__23973);
cljs.core.chunk_append.call(null,b__23974,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null));

var G__23983 = (i__23973 + (1));
i__23973 = G__23983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23974),tetris$rules$clear_row_$_iter__23971.call(null,cljs.core.chunk_rest.call(null,s__23972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23974),null);
}
} else {
var i = cljs.core.first.call(null,s__23972__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null),tetris$rules$clear_row_$_iter__23971.call(null,cljs.core.rest.call(null,s__23972__$2)));
}
} else {
return null;
}
break;
}
});})(map__23969,map__23969__$1,state,board))
,null,null));
});})(map__23969,map__23969__$1,state,board))
;
return iter__19063__auto__.call(null,cljs.core.range.call(null,(10)));
})())){
return cljs.core.assoc.call(null,cljs.core.update.call(null,tetris.rules.score.call(null,state,(10)),new cljs.core.Keyword(null,"speed","speed",1257663751),cljs.core.dec),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.set.call(null,(function (){var iter__19063__auto__ = ((function (map__23969,map__23969__$1,state,board){
return (function tetris$rules$clear_row_$_iter__23975(s__23976){
return (new cljs.core.LazySeq(null,((function (map__23969,map__23969__$1,state,board){
return (function (){
var s__23976__$1 = s__23976;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23976__$1);
if(temp__4425__auto__){
var s__23976__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23976__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__23976__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__23978 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__23977 = (0);
while(true){
if((i__23977 < size__19062__auto__)){
var vec__23981 = cljs.core._nth.call(null,c__19061__auto__,i__23977);
var i = cljs.core.nth.call(null,vec__23981,(0),null);
var j = cljs.core.nth.call(null,vec__23981,(1),null);
if(cljs.core.not_EQ_.call(null,j,row)){
cljs.core.chunk_append.call(null,b__23978,(((j < row))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)));

var G__23984 = (i__23977 + (1));
i__23977 = G__23984;
continue;
} else {
var G__23985 = (i__23977 + (1));
i__23977 = G__23985;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23978),tetris$rules$clear_row_$_iter__23975.call(null,cljs.core.chunk_rest.call(null,s__23976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23978),null);
}
} else {
var vec__23982 = cljs.core.first.call(null,s__23976__$2);
var i = cljs.core.nth.call(null,vec__23982,(0),null);
var j = cljs.core.nth.call(null,vec__23982,(1),null);
if(cljs.core.not_EQ_.call(null,j,row)){
return cljs.core.cons.call(null,(((j < row))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),tetris$rules$clear_row_$_iter__23975.call(null,cljs.core.rest.call(null,s__23976__$2)));
} else {
var G__23986 = cljs.core.rest.call(null,s__23976__$2);
s__23976__$1 = G__23986;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__23969,map__23969__$1,state,board))
,null,null));
});})(map__23969,map__23969__$1,state,board))
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
return cljs.core.into.call(null,((function (locked_coords,shifted){
return (function (p1__23987_SHARP_){
return cljs.core.reduce.call(null,tetris.rules.clear_row,p1__23987_SHARP_,cljs.core.map.call(null,cljs.core.second,locked_coords));
});})(locked_coords,shifted))
.call(null,tetris.rules.score.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.into,locked_coords),(1))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.rand_nth.call(null,cljs.core.keys.call(null,tetris.shapes.shapes)).call(null,tetris.shapes.shapes),new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(7)),(0)], null)], null));
}
});
tetris.rules.fast_drop = (function tetris$rules$fast_drop(p__23989){
var map__23992 = p__23989;
var map__23992__$1 = ((((!((map__23992 == null)))?((((map__23992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23992):map__23992);
var state = map__23992__$1;
var board = cljs.core.get.call(null,map__23992__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return cljs.core.some.call(null,((function (map__23992,map__23992__$1,state,board){
return (function (p1__23988_SHARP_){
if(cljs.core.not_EQ_.call(null,board,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(p1__23988_SHARP_))){
return p1__23988_SHARP_;
} else {
return null;
}
});})(map__23992,map__23992__$1,state,board))
,cljs.core.iterate.call(null,tetris.rules.fall,state));
});
tetris.rules.game_step = (function tetris$rules$game_step(p__23994){
var map__23998 = p__23994;
var map__23998__$1 = ((((!((map__23998 == null)))?((((map__23998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23998):map__23998);
var state = map__23998__$1;
var frame = cljs.core.get.call(null,map__23998__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var board = cljs.core.get.call(null,map__23998__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var speed = cljs.core.get.call(null,map__23998__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var G__24000 = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
var G__24000__$1 = (((cljs.core.mod.call(null,frame,(function (){var x__18622__auto__ = speed;
var y__18623__auto__ = (1);
return ((x__18622__auto__ > y__18623__auto__) ? x__18622__auto__ : y__18623__auto__);
})()) === (0)))?tetris.rules.fall.call(null,G__24000):G__24000);
var G__24000__$2 = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.zero_QMARK_,cljs.core.map.call(null,cljs.core.second,board)))?cljs.core.into.call(null,G__24000__$1,cljs.core.dissoc.call(null,tetris.rules.initial_state.call(null),new cljs.core.Keyword(null,"high-score","high-score",-1220549879))):G__24000__$1);
return G__24000__$2;
});

//# sourceMappingURL=rules.js.map?rel=1457675244462