// Compiled by ClojureScript 1.7.228 {}
goog.provide('tetris.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('tetris.rules');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof tetris.core.c !== 'undefined'){
} else {
tetris.core.c = cljs.core.async.chan.call(null);
}
if(typeof tetris.core.state !== 'undefined'){
} else {
tetris.core.state = reagent.core.atom.call(null,tetris.rules.initial_state.call(null));
}
tetris.core.hello_world = (function tetris$core$hello_world(state){
var cell_dim = (20);
var map__22903 = cljs.core.deref.call(null,state);
var map__22903__$1 = ((((!((map__22903 == null)))?((((map__22903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22903):map__22903);
var board = cljs.core.get.call(null,map__22903__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var sc = cljs.core.set.call(null,tetris.rules.shape_coords.call(null,cljs.core.deref.call(null,state)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str("Tetris("),cljs.core.str(cljs.core.count.call(null,sc)),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(480),new cljs.core.Keyword(null,"height","height",1025178622),(480)], null),cljs.core.doall.call(null,(function (){var iter__19063__auto__ = ((function (cell_dim,map__22903,map__22903__$1,board,sc){
return (function tetris$core$hello_world_$_iter__22905(s__22906){
return (new cljs.core.LazySeq(null,((function (cell_dim,map__22903,map__22903__$1,board,sc){
return (function (){
var s__22906__$1 = s__22906;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22906__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var i = cljs.core.first.call(null,xs__4977__auto__);
var iterys__19059__auto__ = ((function (s__22906__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__22903,map__22903__$1,board,sc){
return (function tetris$core$hello_world_$_iter__22905_$_iter__22907(s__22908){
return (new cljs.core.LazySeq(null,((function (s__22906__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__22903,map__22903__$1,board,sc){
return (function (){
var s__22908__$1 = s__22908;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__22908__$1);
if(temp__4425__auto____$1){
var s__22908__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22908__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__22908__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__22910 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__22909 = (0);
while(true){
if((i__22909 < size__19062__auto__)){
var j = cljs.core._nth.call(null,c__19061__auto__,i__22909);
cljs.core.chunk_append.call(null,b__22910,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(":"),cljs.core.str(j)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(i * cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(j * cell_dim),new cljs.core.Keyword(null,"width","width",-384071477),cell_dim,new cljs.core.Keyword(null,"height","height",1025178622),cell_dim,new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"blue","blue",-622100620):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"green","green",-945526839):new cljs.core.Keyword(null,"black","black",1294279647)
))], null)], null));

var G__22911 = (i__22909 + (1));
i__22909 = G__22911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22910),tetris$core$hello_world_$_iter__22905_$_iter__22907.call(null,cljs.core.chunk_rest.call(null,s__22908__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22910),null);
}
} else {
var j = cljs.core.first.call(null,s__22908__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(":"),cljs.core.str(j)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(i * cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(j * cell_dim),new cljs.core.Keyword(null,"width","width",-384071477),cell_dim,new cljs.core.Keyword(null,"height","height",1025178622),cell_dim,new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"blue","blue",-622100620):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"green","green",-945526839):new cljs.core.Keyword(null,"black","black",1294279647)
))], null)], null),tetris$core$hello_world_$_iter__22905_$_iter__22907.call(null,cljs.core.rest.call(null,s__22908__$2)));
}
} else {
return null;
}
break;
}
});})(s__22906__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__22903,map__22903__$1,board,sc))
,null,null));
});})(s__22906__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__22903,map__22903__$1,board,sc))
;
var fs__19060__auto__ = cljs.core.seq.call(null,iterys__19059__auto__.call(null,cljs.core.range.call(null,(22))));
if(fs__19060__auto__){
return cljs.core.concat.call(null,fs__19060__auto__,tetris$core$hello_world_$_iter__22905.call(null,cljs.core.rest.call(null,s__22906__$1)));
} else {
var G__22912 = cljs.core.rest.call(null,s__22906__$1);
s__22906__$1 = G__22912;
continue;
}
} else {
return null;
}
break;
}
});})(cell_dim,map__22903,map__22903__$1,board,sc))
,null,null));
});})(cell_dim,map__22903,map__22903__$1,board,sc))
;
return iter__19063__auto__.call(null,cljs.core.range.call(null,(10)));
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Move 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell_dim,map__22903,map__22903__$1,board,sc){
return (function (){
return cljs.core.swap_BANG_.call(null,state,tetris.rules.rotate,tetris.rules.rotate_ccw);
});})(cell_dim,map__22903,map__22903__$1,board,sc))
], null),"Rotate right"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell_dim,map__22903,map__22903__$1,board,sc){
return (function (){
return cljs.core.swap_BANG_.call(null,state,tetris.rules.rotate,tetris.rules.rotate_cw);
});})(cell_dim,map__22903,map__22903__$1,board,sc))
], null),"Rotate left"], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.hello_world,tetris.core.state], null),(function (){
var c__20410__auto___22982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___22982){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___22982){
return (function (state_22939){
var state_val_22940 = (state_22939[(1)]);
if((state_val_22940 === (7))){
var inst_22935 = (state_22939[(2)]);
var state_22939__$1 = state_22939;
var statearr_22941_22983 = state_22939__$1;
(statearr_22941_22983[(2)] = inst_22935);

(statearr_22941_22983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (1))){
var state_22939__$1 = state_22939;
var statearr_22942_22984 = state_22939__$1;
(statearr_22942_22984[(2)] = null);

(statearr_22942_22984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (4))){
var inst_22916 = (state_22939[(7)]);
var inst_22916__$1 = (state_22939[(2)]);
var state_22939__$1 = (function (){var statearr_22943 = state_22939;
(statearr_22943[(7)] = inst_22916__$1);

return statearr_22943;
})();
if(cljs.core.truth_(inst_22916__$1)){
var statearr_22944_22985 = state_22939__$1;
(statearr_22944_22985[(1)] = (5));

} else {
var statearr_22945_22986 = state_22939__$1;
(statearr_22945_22986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (13))){
var inst_22926 = cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.fast_drop);
var state_22939__$1 = state_22939;
var statearr_22946_22987 = state_22939__$1;
(statearr_22946_22987[(2)] = inst_22926);

(statearr_22946_22987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (6))){
var state_22939__$1 = state_22939;
var statearr_22947_22988 = state_22939__$1;
(statearr_22947_22988[(2)] = null);

(statearr_22947_22988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (3))){
var inst_22937 = (state_22939[(2)]);
var state_22939__$1 = state_22939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22939__$1,inst_22937);
} else {
if((state_val_22940 === (12))){
var inst_22924 = cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.rotate,tetris.rules.rotate_cw);
var state_22939__$1 = state_22939;
var statearr_22948_22989 = state_22939__$1;
(statearr_22948_22989[(2)] = inst_22924);

(statearr_22948_22989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (2))){
var state_22939__$1 = state_22939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22939__$1,(4),tetris.core.c);
} else {
if((state_val_22940 === (11))){
var inst_22922 = cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.rotate,tetris.rules.rotate_ccw);
var state_22939__$1 = state_22939;
var statearr_22949_22990 = state_22939__$1;
(statearr_22949_22990[(2)] = inst_22922);

(statearr_22949_22990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (9))){
var inst_22918 = cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.x_shift,cljs.core.dec);
var state_22939__$1 = state_22939;
var statearr_22950_22991 = state_22939__$1;
(statearr_22950_22991[(2)] = inst_22918);

(statearr_22950_22991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (5))){
var inst_22916 = (state_22939[(7)]);
var state_22939__$1 = state_22939;
var G__22951_22992 = inst_22916;
switch (G__22951_22992) {
case (65):
var statearr_22952_22994 = state_22939__$1;
(statearr_22952_22994[(1)] = (9));


break;
case (68):
var statearr_22953_22995 = state_22939__$1;
(statearr_22953_22995[(1)] = (10));


break;
case (87):
var statearr_22954_22996 = state_22939__$1;
(statearr_22954_22996[(1)] = (11));


break;
case (83):
var statearr_22955_22997 = state_22939__$1;
(statearr_22955_22997[(1)] = (12));


break;
case (88):
var statearr_22956_22998 = state_22939__$1;
(statearr_22956_22998[(1)] = (13));


break;
default:
var statearr_22957_22999 = state_22939__$1;
(statearr_22957_22999[(1)] = (14));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (14))){
var inst_22916 = (state_22939[(7)]);
var inst_22928 = cljs.core.prn.call(null,inst_22916);
var state_22939__$1 = state_22939;
var statearr_22958_23000 = state_22939__$1;
(statearr_22958_23000[(2)] = inst_22928);

(statearr_22958_23000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (10))){
var inst_22920 = cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.x_shift,cljs.core.inc);
var state_22939__$1 = state_22939;
var statearr_22959_23001 = state_22939__$1;
(statearr_22959_23001[(2)] = inst_22920);

(statearr_22959_23001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22940 === (8))){
var inst_22931 = (state_22939[(2)]);
var state_22939__$1 = (function (){var statearr_22960 = state_22939;
(statearr_22960[(8)] = inst_22931);

return statearr_22960;
})();
var statearr_22961_23002 = state_22939__$1;
(statearr_22961_23002[(2)] = null);

(statearr_22961_23002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20410__auto___22982))
;
return ((function (switch__20389__auto__,c__20410__auto___22982){
return (function() {
var tetris$core$state_machine__20390__auto__ = null;
var tetris$core$state_machine__20390__auto____0 = (function (){
var statearr_22965 = [null,null,null,null,null,null,null,null,null];
(statearr_22965[(0)] = tetris$core$state_machine__20390__auto__);

(statearr_22965[(1)] = (1));

return statearr_22965;
});
var tetris$core$state_machine__20390__auto____1 = (function (state_22939){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_22939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e22966){if((e22966 instanceof Object)){
var ex__20393__auto__ = e22966;
var statearr_22967_23003 = state_22939;
(statearr_22967_23003[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23004 = state_22939;
state_22939 = G__23004;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
tetris$core$state_machine__20390__auto__ = function(state_22939){
switch(arguments.length){
case 0:
return tetris$core$state_machine__20390__auto____0.call(this);
case 1:
return tetris$core$state_machine__20390__auto____1.call(this,state_22939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = tetris$core$state_machine__20390__auto____0;
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = tetris$core$state_machine__20390__auto____1;
return tetris$core$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___22982))
})();
var state__20412__auto__ = (function (){var statearr_22968 = f__20411__auto__.call(null);
(statearr_22968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___22982);

return statearr_22968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___22982))
);


document.onkeydown = (function (p1__22913_SHARP_){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_22973){
var state_val_22974 = (state_22973[(1)]);
if((state_val_22974 === (1))){
var inst_22969 = p1__22913_SHARP_.keyCode;
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22973__$1,(2),tetris.core.c,inst_22969);
} else {
if((state_val_22974 === (2))){
var inst_22971 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22973__$1,inst_22971);
} else {
return null;
}
}
});})(c__20410__auto__))
;
return ((function (switch__20389__auto__,c__20410__auto__){
return (function() {
var tetris$core$state_machine__20390__auto__ = null;
var tetris$core$state_machine__20390__auto____0 = (function (){
var statearr_22978 = [null,null,null,null,null,null,null];
(statearr_22978[(0)] = tetris$core$state_machine__20390__auto__);

(statearr_22978[(1)] = (1));

return statearr_22978;
});
var tetris$core$state_machine__20390__auto____1 = (function (state_22973){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_22973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e22979){if((e22979 instanceof Object)){
var ex__20393__auto__ = e22979;
var statearr_22980_23005 = state_22973;
(statearr_22980_23005[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23006 = state_22973;
state_22973 = G__23006;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
tetris$core$state_machine__20390__auto__ = function(state_22973){
switch(arguments.length){
case 0:
return tetris$core$state_machine__20390__auto____0.call(this);
case 1:
return tetris$core$state_machine__20390__auto____1.call(this,state_22973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = tetris$core$state_machine__20390__auto____0;
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = tetris$core$state_machine__20390__auto____1;
return tetris$core$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_22981 = f__20411__auto__.call(null);
(statearr_22981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_22981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__))
);

return c__20410__auto__;
});

setInterval((function (){
return cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.game_step);
}),(10));

return document.getElementById("app");
})()
);
tetris.core.on_js_reload = (function tetris$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1457014855982