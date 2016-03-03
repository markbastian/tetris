// Compiled by ClojureScript 1.7.228 {}
goog.provide('tetris.rules');
goog.require('cljs.core');
goog.require('tetris.shapes');
tetris.rules.initial_state = (function tetris$rules$initial_state(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(7)),(0)], null),new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"speed","speed",1257663751),(50),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.rand_nth.call(null,cljs.core.keys.call(null,tetris.shapes.shapes)).call(null,tetris.shapes.shapes)], null);
});
tetris.rules.rotate_cw = (function tetris$rules$rotate_cw(shape){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,cljs.core.map.call(null,cljs.core.rseq,shape));
});
tetris.rules.rotate_ccw = (function tetris$rules$rotate_ccw(shape){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rseq,cljs.core.vector),shape);
});
tetris.rules.shape_coords = (function tetris$rules$shape_coords(p__23447){
var map__23456 = p__23447;
var map__23456__$1 = ((((!((map__23456 == null)))?((((map__23456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23456):map__23456);
var shape_pos = cljs.core.get.call(null,map__23456__$1,new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929));
var shape = cljs.core.get.call(null,map__23456__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var d = cljs.core.count.call(null,shape);
var iter__19063__auto__ = ((function (d,map__23456,map__23456__$1,shape_pos,shape){
return (function tetris$rules$shape_coords_$_iter__23458(s__23459){
return (new cljs.core.LazySeq(null,((function (d,map__23456,map__23456__$1,shape_pos,shape){
return (function (){
var s__23459__$1 = s__23459;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23459__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var i = cljs.core.first.call(null,xs__4977__auto__);
var iterys__19059__auto__ = ((function (s__23459__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__23456,map__23456__$1,shape_pos,shape){
return (function tetris$rules$shape_coords_$_iter__23458_$_iter__23460(s__23461){
return (new cljs.core.LazySeq(null,((function (s__23459__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__23456,map__23456__$1,shape_pos,shape){
return (function (){
var s__23461__$1 = s__23461;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__23461__$1);
if(temp__4425__auto____$1){
var s__23461__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23461__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__23461__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__23463 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__23462 = (0);
while(true){
if((i__23462 < size__19062__auto__)){
var j = cljs.core._nth.call(null,c__19061__auto__,i__23462);
if(cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
cljs.core.chunk_append.call(null,b__23463,cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),shape_pos));

var G__23464 = (i__23462 + (1));
i__23462 = G__23464;
continue;
} else {
var G__23465 = (i__23462 + (1));
i__23462 = G__23465;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23463),tetris$rules$shape_coords_$_iter__23458_$_iter__23460.call(null,cljs.core.chunk_rest.call(null,s__23461__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23463),null);
}
} else {
var j = cljs.core.first.call(null,s__23461__$2);
if(cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
return cljs.core.cons.call(null,cljs.core.mapv.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),shape_pos),tetris$rules$shape_coords_$_iter__23458_$_iter__23460.call(null,cljs.core.rest.call(null,s__23461__$2)));
} else {
var G__23466 = cljs.core.rest.call(null,s__23461__$2);
s__23461__$1 = G__23466;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__23459__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__23456,map__23456__$1,shape_pos,shape))
,null,null));
});})(s__23459__$1,i,xs__4977__auto__,temp__4425__auto__,d,map__23456,map__23456__$1,shape_pos,shape))
;
var fs__19060__auto__ = cljs.core.seq.call(null,iterys__19059__auto__.call(null,cljs.core.range.call(null,d)));
if(fs__19060__auto__){
return cljs.core.concat.call(null,fs__19060__auto__,tetris$rules$shape_coords_$_iter__23458.call(null,cljs.core.rest.call(null,s__23459__$1)));
} else {
var G__23467 = cljs.core.rest.call(null,s__23459__$1);
s__23459__$1 = G__23467;
continue;
}
} else {
return null;
}
break;
}
});})(d,map__23456,map__23456__$1,shape_pos,shape))
,null,null));
});})(d,map__23456,map__23456__$1,shape_pos,shape))
;
return iter__19063__auto__.call(null,cljs.core.range.call(null,d));
});
tetris.rules.valid_QMARK_ = (function tetris$rules$valid_QMARK_(p__23468){
var map__23473 = p__23468;
var map__23473__$1 = ((((!((map__23473 == null)))?((((map__23473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23473):map__23473);
var state = map__23473__$1;
var board = cljs.core.get.call(null,map__23473__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return cljs.core.every_QMARK_.call(null,((function (map__23473,map__23473__$1,state,board){
return (function (p__23475){
var vec__23476 = p__23475;
var x = cljs.core.nth.call(null,vec__23476,(0),null);
var y = cljs.core.nth.call(null,vec__23476,(1),null);
var c = vec__23476;
var and__18279__auto__ = cljs.core.complement.call(null,board).call(null,c);
if(cljs.core.truth_(and__18279__auto__)){
return ((((0) <= x)) && ((x <= (9)))) && ((y < (22)));
} else {
return and__18279__auto__;
}
});})(map__23473,map__23473__$1,state,board))
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
tetris.rules.clear_row = (function tetris$rules$clear_row(p__23477,row){
var map__23492 = p__23477;
var map__23492__$1 = ((((!((map__23492 == null)))?((((map__23492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23492):map__23492);
var state = map__23492__$1;
var board = cljs.core.get.call(null,map__23492__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
if(cljs.core.every_QMARK_.call(null,board,(function (){var iter__19063__auto__ = ((function (map__23492,map__23492__$1,state,board){
return (function tetris$rules$clear_row_$_iter__23494(s__23495){
return (new cljs.core.LazySeq(null,((function (map__23492,map__23492__$1,state,board){
return (function (){
var s__23495__$1 = s__23495;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23495__$1);
if(temp__4425__auto__){
var s__23495__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23495__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__23495__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__23497 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__23496 = (0);
while(true){
if((i__23496 < size__19062__auto__)){
var i = cljs.core._nth.call(null,c__19061__auto__,i__23496);
cljs.core.chunk_append.call(null,b__23497,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null));

var G__23506 = (i__23496 + (1));
i__23496 = G__23506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23497),tetris$rules$clear_row_$_iter__23494.call(null,cljs.core.chunk_rest.call(null,s__23495__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23497),null);
}
} else {
var i = cljs.core.first.call(null,s__23495__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null),tetris$rules$clear_row_$_iter__23494.call(null,cljs.core.rest.call(null,s__23495__$2)));
}
} else {
return null;
}
break;
}
});})(map__23492,map__23492__$1,state,board))
,null,null));
});})(map__23492,map__23492__$1,state,board))
;
return iter__19063__auto__.call(null,cljs.core.range.call(null,(10)));
})())){
return cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"speed","speed",1257663751),cljs.core.dec),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.set.call(null,(function (){var iter__19063__auto__ = ((function (map__23492,map__23492__$1,state,board){
return (function tetris$rules$clear_row_$_iter__23498(s__23499){
return (new cljs.core.LazySeq(null,((function (map__23492,map__23492__$1,state,board){
return (function (){
var s__23499__$1 = s__23499;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23499__$1);
if(temp__4425__auto__){
var s__23499__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23499__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__23499__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__23501 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__23500 = (0);
while(true){
if((i__23500 < size__19062__auto__)){
var vec__23504 = cljs.core._nth.call(null,c__19061__auto__,i__23500);
var i = cljs.core.nth.call(null,vec__23504,(0),null);
var j = cljs.core.nth.call(null,vec__23504,(1),null);
if(cljs.core.not_EQ_.call(null,j,row)){
cljs.core.chunk_append.call(null,b__23501,(((j < row))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)));

var G__23507 = (i__23500 + (1));
i__23500 = G__23507;
continue;
} else {
var G__23508 = (i__23500 + (1));
i__23500 = G__23508;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23501),tetris$rules$clear_row_$_iter__23498.call(null,cljs.core.chunk_rest.call(null,s__23499__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23501),null);
}
} else {
var vec__23505 = cljs.core.first.call(null,s__23499__$2);
var i = cljs.core.nth.call(null,vec__23505,(0),null);
var j = cljs.core.nth.call(null,vec__23505,(1),null);
if(cljs.core.not_EQ_.call(null,j,row)){
return cljs.core.cons.call(null,(((j < row))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),tetris$rules$clear_row_$_iter__23498.call(null,cljs.core.rest.call(null,s__23499__$2)));
} else {
var G__23509 = cljs.core.rest.call(null,s__23499__$2);
s__23499__$1 = G__23509;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__23492,map__23492__$1,state,board))
,null,null));
});})(map__23492,map__23492__$1,state,board))
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
return (function (p1__23510_SHARP_){
return cljs.core.reduce.call(null,tetris.rules.clear_row,p1__23510_SHARP_,cljs.core.map.call(null,cljs.core.second,locked_coords));
});})(locked_coords,shifted))
.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.into,locked_coords)),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.rand_nth.call(null,cljs.core.keys.call(null,tetris.shapes.shapes)).call(null,tetris.shapes.shapes)),new cljs.core.Keyword(null,"shape-pos","shape-pos",54386929),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(7)),(0)], null));
}
});
tetris.rules.fast_drop = (function tetris$rules$fast_drop(p__23512){
var map__23515 = p__23512;
var map__23515__$1 = ((((!((map__23515 == null)))?((((map__23515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23515):map__23515);
var state = map__23515__$1;
var board = cljs.core.get.call(null,map__23515__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return cljs.core.some.call(null,((function (map__23515,map__23515__$1,state,board){
return (function (p1__23511_SHARP_){
if(cljs.core.not_EQ_.call(null,board,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(p1__23511_SHARP_))){
return p1__23511_SHARP_;
} else {
return null;
}
});})(map__23515,map__23515__$1,state,board))
,cljs.core.iterate.call(null,tetris.rules.fall,state));
});
tetris.rules.game_step = (function tetris$rules$game_step(p__23517){
var map__23521 = p__23517;
var map__23521__$1 = ((((!((map__23521 == null)))?((((map__23521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23521):map__23521);
var state = map__23521__$1;
var frame = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var board = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var speed = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var G__23523 = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
var G__23523__$1 = (((cljs.core.mod.call(null,frame,(function (){var x__18622__auto__ = speed;
var y__18623__auto__ = (1);
return ((x__18622__auto__ > y__18623__auto__) ? x__18622__auto__ : y__18623__auto__);
})()) === (0)))?tetris.rules.fall.call(null,G__23523):G__23523);
var G__23523__$2 = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.zero_QMARK_,cljs.core.map.call(null,cljs.core.second,board)))?cljs.core.into.call(null,G__23523__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"speed","speed",1257663751),(50)], null)):G__23523__$1);
return G__23523__$2;
});

//# sourceMappingURL=rules.js.map?rel=1456984142511