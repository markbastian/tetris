// Compiled by ClojureScript 1.7.228 {}
goog.provide('tetris.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('tetris.rules');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
tetris.core.render = (function tetris$core$render(state){
var cell_dim = (20);
var map__25063 = cljs.core.deref.call(null,state);
var map__25063__$1 = ((((!((map__25063 == null)))?((((map__25063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25063):map__25063);
var board = cljs.core.get.call(null,map__25063__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var score = cljs.core.get.call(null,map__25063__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var high_score = cljs.core.get.call(null,map__25063__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
var sc = cljs.core.set.call(null,tetris.rules.shape_coords.call(null,cljs.core.deref.call(null,state)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tetris"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(cell_dim * (10)),new cljs.core.Keyword(null,"height","height",1025178622),(cell_dim * (22))], null),cljs.core.doall.call(null,(function (){var iter__19063__auto__ = ((function (cell_dim,map__25063,map__25063__$1,board,score,high_score,sc){
return (function tetris$core$render_$_iter__25065(s__25066){
return (new cljs.core.LazySeq(null,((function (cell_dim,map__25063,map__25063__$1,board,score,high_score,sc){
return (function (){
var s__25066__$1 = s__25066;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25066__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var i = cljs.core.first.call(null,xs__4977__auto__);
var iterys__19059__auto__ = ((function (s__25066__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__25063,map__25063__$1,board,score,high_score,sc){
return (function tetris$core$render_$_iter__25065_$_iter__25067(s__25068){
return (new cljs.core.LazySeq(null,((function (s__25066__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__25063,map__25063__$1,board,score,high_score,sc){
return (function (){
var s__25068__$1 = s__25068;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__25068__$1);
if(temp__4425__auto____$1){
var s__25068__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25068__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__25068__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__25070 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__25069 = (0);
while(true){
if((i__25069 < size__19062__auto__)){
var j = cljs.core._nth.call(null,c__19061__auto__,i__25069);
cljs.core.chunk_append.call(null,b__25070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(":"),cljs.core.str(j)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(i * cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(j * cell_dim),new cljs.core.Keyword(null,"width","width",-384071477),cell_dim,new cljs.core.Keyword(null,"height","height",1025178622),cell_dim,new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"blue","blue",-622100620):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"green","green",-945526839):new cljs.core.Keyword(null,"black","black",1294279647)
))], null)], null));

var G__25071 = (i__25069 + (1));
i__25069 = G__25071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25070),tetris$core$render_$_iter__25065_$_iter__25067.call(null,cljs.core.chunk_rest.call(null,s__25068__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25070),null);
}
} else {
var j = cljs.core.first.call(null,s__25068__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(":"),cljs.core.str(j)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(i * cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(j * cell_dim),new cljs.core.Keyword(null,"width","width",-384071477),cell_dim,new cljs.core.Keyword(null,"height","height",1025178622),cell_dim,new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"blue","blue",-622100620):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"green","green",-945526839):new cljs.core.Keyword(null,"black","black",1294279647)
))], null)], null),tetris$core$render_$_iter__25065_$_iter__25067.call(null,cljs.core.rest.call(null,s__25068__$2)));
}
} else {
return null;
}
break;
}
});})(s__25066__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__25063,map__25063__$1,board,score,high_score,sc))
,null,null));
});})(s__25066__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__25063,map__25063__$1,board,score,high_score,sc))
;
var fs__19060__auto__ = cljs.core.seq.call(null,iterys__19059__auto__.call(null,cljs.core.range.call(null,(22))));
if(fs__19060__auto__){
return cljs.core.concat.call(null,fs__19060__auto__,tetris$core$render_$_iter__25065.call(null,cljs.core.rest.call(null,s__25066__$1)));
} else {
var G__25072 = cljs.core.rest.call(null,s__25066__$1);
s__25066__$1 = G__25072;
continue;
}
} else {
return null;
}
break;
}
});})(cell_dim,map__25063,map__25063__$1,board,score,high_score,sc))
,null,null));
});})(cell_dim,map__25063,map__25063__$1,board,score,high_score,sc))
;
return iter__19063__auto__.call(null,cljs.core.range.call(null,(10)));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str("Score: "),cljs.core.str(score)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str("High Score: "),cljs.core.str(high_score)].join('')], null)], null);
});
tetris.core.setup_keys = (function tetris$core$setup_keys(k,state){
var G__25074 = k;
switch (G__25074) {
case (37):
return cljs.core.swap_BANG_.call(null,state,tetris.rules.x_shift,cljs.core.dec);

break;
case (39):
return cljs.core.swap_BANG_.call(null,state,tetris.rules.x_shift,cljs.core.inc);

break;
case (38):
return cljs.core.swap_BANG_.call(null,state,tetris.rules.rotate,tetris.rules.rotate_ccw);

break;
case (40):
return cljs.core.swap_BANG_.call(null,state,tetris.rules.rotate,tetris.rules.rotate_cw);

break;
case (32):
return cljs.core.swap_BANG_.call(null,state,tetris.rules.fast_drop);

break;
default:
return cljs.pprint.pprint.call(null,state);

}
});
var temp__4425__auto___25119 = document.getElementById("app");
if(cljs.core.truth_(temp__4425__auto___25119)){
var app_context_25120 = temp__4425__auto___25119;
var c_25121 = cljs.core.async.chan.call(null);
var state_25122 = reagent.core.atom.call(null,tetris.rules.initial_state.call(null));
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.render,state_25122], null),(function (){
window.onkeydown = ((function (c_25121,state_25122,app_context_25120,temp__4425__auto___25119){
return (function (e){
if(cljs.core.truth_((function (){var and__18279__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(39),null,(32),null,(40),null,(38),null,(37),null], null), null).call(null,e.keyCode);
if(cljs.core.truth_(and__18279__auto__)){
return cljs.core._EQ_.call(null,e.target,document.body);
} else {
return and__18279__auto__;
}
})())){
return e.preventDefault();
} else {
return null;
}
});})(c_25121,state_25122,app_context_25120,temp__4425__auto___25119))
;

var c__20410__auto___25123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___25123,c_25121,state_25122,app_context_25120,temp__4425__auto___25119){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___25123,c_25121,state_25122,app_context_25120,temp__4425__auto___25119){
return (function (state_25089){
var state_val_25090 = (state_25089[(1)]);
if((state_val_25090 === (1))){
var state_25089__$1 = state_25089;
var statearr_25091_25124 = state_25089__$1;
(statearr_25091_25124[(2)] = null);

(statearr_25091_25124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (2))){
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25089__$1,(4),c_25121);
} else {
if((state_val_25090 === (3))){
var inst_25087 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25089__$1,inst_25087);
} else {
if((state_val_25090 === (4))){
var inst_25079 = (state_25089[(7)]);
var inst_25079__$1 = (state_25089[(2)]);
var state_25089__$1 = (function (){var statearr_25092 = state_25089;
(statearr_25092[(7)] = inst_25079__$1);

return statearr_25092;
})();
if(cljs.core.truth_(inst_25079__$1)){
var statearr_25093_25125 = state_25089__$1;
(statearr_25093_25125[(1)] = (5));

} else {
var statearr_25094_25126 = state_25089__$1;
(statearr_25094_25126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (5))){
var inst_25079 = (state_25089[(7)]);
var inst_25081 = tetris.core.setup_keys.call(null,inst_25079,state_25122);
var state_25089__$1 = (function (){var statearr_25095 = state_25089;
(statearr_25095[(8)] = inst_25081);

return statearr_25095;
})();
var statearr_25096_25127 = state_25089__$1;
(statearr_25096_25127[(2)] = null);

(statearr_25096_25127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (6))){
var state_25089__$1 = state_25089;
var statearr_25097_25128 = state_25089__$1;
(statearr_25097_25128[(2)] = null);

(statearr_25097_25128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25090 === (7))){
var inst_25085 = (state_25089[(2)]);
var state_25089__$1 = state_25089;
var statearr_25098_25129 = state_25089__$1;
(statearr_25098_25129[(2)] = inst_25085);

(statearr_25098_25129[(1)] = (3));


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
});})(c__20410__auto___25123,c_25121,state_25122,app_context_25120,temp__4425__auto___25119))
;
return ((function (switch__20389__auto__,c__20410__auto___25123,c_25121,state_25122,app_context_25120,temp__4425__auto___25119){
return (function() {
var tetris$core$state_machine__20390__auto__ = null;
var tetris$core$state_machine__20390__auto____0 = (function (){
var statearr_25102 = [null,null,null,null,null,null,null,null,null];
(statearr_25102[(0)] = tetris$core$state_machine__20390__auto__);

(statearr_25102[(1)] = (1));

return statearr_25102;
});
var tetris$core$state_machine__20390__auto____1 = (function (state_25089){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25103){if((e25103 instanceof Object)){
var ex__20393__auto__ = e25103;
var statearr_25104_25130 = state_25089;
(statearr_25104_25130[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25131 = state_25089;
state_25089 = G__25131;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
tetris$core$state_machine__20390__auto__ = function(state_25089){
switch(arguments.length){
case 0:
return tetris$core$state_machine__20390__auto____0.call(this);
case 1:
return tetris$core$state_machine__20390__auto____1.call(this,state_25089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = tetris$core$state_machine__20390__auto____0;
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = tetris$core$state_machine__20390__auto____1;
return tetris$core$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___25123,c_25121,state_25122,app_context_25120,temp__4425__auto___25119))
})();
var state__20412__auto__ = (function (){var statearr_25105 = f__20411__auto__.call(null);
(statearr_25105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___25123);

return statearr_25105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___25123,c_25121,state_25122,app_context_25120,temp__4425__auto___25119))
);


document.onkeydown = ((function (c_25121,state_25122,app_context_25120,temp__4425__auto___25119){
return (function (p1__25076_SHARP_){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__,c_25121,state_25122,app_context_25120,temp__4425__auto___25119){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__,c_25121,state_25122,app_context_25120,temp__4425__auto___25119){
return (function (state_25110){
var state_val_25111 = (state_25110[(1)]);
if((state_val_25111 === (1))){
var inst_25106 = p1__25076_SHARP_.keyCode;
var state_25110__$1 = state_25110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25110__$1,(2),c_25121,inst_25106);
} else {
if((state_val_25111 === (2))){
var inst_25108 = (state_25110[(2)]);
var state_25110__$1 = state_25110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25110__$1,inst_25108);
} else {
return null;
}
}
});})(c__20410__auto__,c_25121,state_25122,app_context_25120,temp__4425__auto___25119))
;
return ((function (switch__20389__auto__,c__20410__auto__,c_25121,state_25122,app_context_25120,temp__4425__auto___25119){
return (function() {
var tetris$core$state_machine__20390__auto__ = null;
var tetris$core$state_machine__20390__auto____0 = (function (){
var statearr_25115 = [null,null,null,null,null,null,null];
(statearr_25115[(0)] = tetris$core$state_machine__20390__auto__);

(statearr_25115[(1)] = (1));

return statearr_25115;
});
var tetris$core$state_machine__20390__auto____1 = (function (state_25110){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25116){if((e25116 instanceof Object)){
var ex__20393__auto__ = e25116;
var statearr_25117_25132 = state_25110;
(statearr_25117_25132[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25133 = state_25110;
state_25110 = G__25133;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
tetris$core$state_machine__20390__auto__ = function(state_25110){
switch(arguments.length){
case 0:
return tetris$core$state_machine__20390__auto____0.call(this);
case 1:
return tetris$core$state_machine__20390__auto____1.call(this,state_25110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = tetris$core$state_machine__20390__auto____0;
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = tetris$core$state_machine__20390__auto____1;
return tetris$core$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__,c_25121,state_25122,app_context_25120,temp__4425__auto___25119))
})();
var state__20412__auto__ = (function (){var statearr_25118 = f__20411__auto__.call(null);
(statearr_25118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_25118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__,c_25121,state_25122,app_context_25120,temp__4425__auto___25119))
);

return c__20410__auto__;
});})(c_25121,state_25122,app_context_25120,temp__4425__auto___25119))
;

setInterval(((function (c_25121,state_25122,app_context_25120,temp__4425__auto___25119){
return (function (){
return cljs.core.swap_BANG_.call(null,state_25122,tetris.rules.game_step);
});})(c_25121,state_25122,app_context_25120,temp__4425__auto___25119))
,(10));

return app_context_25120;
})()
);
} else {
}
tetris.core.on_js_reload = (function tetris$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1457675246336