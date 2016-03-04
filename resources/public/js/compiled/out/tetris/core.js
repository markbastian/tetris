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
var map__27485 = cljs.core.deref.call(null,state);
var map__27485__$1 = ((((!((map__27485 == null)))?((((map__27485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27485):map__27485);
var board = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var score = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var high_score = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
var sc = cljs.core.set.call(null,tetris.rules.shape_coords.call(null,cljs.core.deref.call(null,state)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tetris"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(cell_dim * (10)),new cljs.core.Keyword(null,"height","height",1025178622),(cell_dim * (22))], null),cljs.core.doall.call(null,(function (){var iter__19063__auto__ = ((function (cell_dim,map__27485,map__27485__$1,board,score,high_score,sc){
return (function tetris$core$hello_world_$_iter__27487(s__27488){
return (new cljs.core.LazySeq(null,((function (cell_dim,map__27485,map__27485__$1,board,score,high_score,sc){
return (function (){
var s__27488__$1 = s__27488;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27488__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var i = cljs.core.first.call(null,xs__4977__auto__);
var iterys__19059__auto__ = ((function (s__27488__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__27485,map__27485__$1,board,score,high_score,sc){
return (function tetris$core$hello_world_$_iter__27487_$_iter__27489(s__27490){
return (new cljs.core.LazySeq(null,((function (s__27488__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__27485,map__27485__$1,board,score,high_score,sc){
return (function (){
var s__27490__$1 = s__27490;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__27490__$1);
if(temp__4425__auto____$1){
var s__27490__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27490__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__27490__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__27492 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__27491 = (0);
while(true){
if((i__27491 < size__19062__auto__)){
var j = cljs.core._nth.call(null,c__19061__auto__,i__27491);
cljs.core.chunk_append.call(null,b__27492,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(":"),cljs.core.str(j)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(i * cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(j * cell_dim),new cljs.core.Keyword(null,"width","width",-384071477),cell_dim,new cljs.core.Keyword(null,"height","height",1025178622),cell_dim,new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"blue","blue",-622100620):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"green","green",-945526839):new cljs.core.Keyword(null,"black","black",1294279647)
))], null)], null));

var G__27493 = (i__27491 + (1));
i__27491 = G__27493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27492),tetris$core$hello_world_$_iter__27487_$_iter__27489.call(null,cljs.core.chunk_rest.call(null,s__27490__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27492),null);
}
} else {
var j = cljs.core.first.call(null,s__27490__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(":"),cljs.core.str(j)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(i * cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(j * cell_dim),new cljs.core.Keyword(null,"width","width",-384071477),cell_dim,new cljs.core.Keyword(null,"height","height",1025178622),cell_dim,new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"blue","blue",-622100620):(cljs.core.truth_(sc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"green","green",-945526839):new cljs.core.Keyword(null,"black","black",1294279647)
))], null)], null),tetris$core$hello_world_$_iter__27487_$_iter__27489.call(null,cljs.core.rest.call(null,s__27490__$2)));
}
} else {
return null;
}
break;
}
});})(s__27488__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__27485,map__27485__$1,board,score,high_score,sc))
,null,null));
});})(s__27488__$1,i,xs__4977__auto__,temp__4425__auto__,cell_dim,map__27485,map__27485__$1,board,score,high_score,sc))
;
var fs__19060__auto__ = cljs.core.seq.call(null,iterys__19059__auto__.call(null,cljs.core.range.call(null,(22))));
if(fs__19060__auto__){
return cljs.core.concat.call(null,fs__19060__auto__,tetris$core$hello_world_$_iter__27487.call(null,cljs.core.rest.call(null,s__27488__$1)));
} else {
var G__27494 = cljs.core.rest.call(null,s__27488__$1);
s__27488__$1 = G__27494;
continue;
}
} else {
return null;
}
break;
}
});})(cell_dim,map__27485,map__27485__$1,board,score,high_score,sc))
,null,null));
});})(cell_dim,map__27485,map__27485__$1,board,score,high_score,sc))
;
return iter__19063__auto__.call(null,cljs.core.range.call(null,(10)));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str("Score: "),cljs.core.str(score)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str("High Score: "),cljs.core.str(high_score)].join('')], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.hello_world,tetris.core.state], null),(function (){
window.onkeydown = (function (e){
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
});

var c__20410__auto___27564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___27564){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___27564){
return (function (state_27521){
var state_val_27522 = (state_27521[(1)]);
if((state_val_27522 === (7))){
var inst_27517 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
var statearr_27523_27565 = state_27521__$1;
(statearr_27523_27565[(2)] = inst_27517);

(statearr_27523_27565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (1))){
var state_27521__$1 = state_27521;
var statearr_27524_27566 = state_27521__$1;
(statearr_27524_27566[(2)] = null);

(statearr_27524_27566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (4))){
var inst_27498 = (state_27521[(7)]);
var inst_27498__$1 = (state_27521[(2)]);
var state_27521__$1 = (function (){var statearr_27525 = state_27521;
(statearr_27525[(7)] = inst_27498__$1);

return statearr_27525;
})();
if(cljs.core.truth_(inst_27498__$1)){
var statearr_27526_27567 = state_27521__$1;
(statearr_27526_27567[(1)] = (5));

} else {
var statearr_27527_27568 = state_27521__$1;
(statearr_27527_27568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (13))){
var inst_27508 = cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.fast_drop);
var state_27521__$1 = state_27521;
var statearr_27528_27569 = state_27521__$1;
(statearr_27528_27569[(2)] = inst_27508);

(statearr_27528_27569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (6))){
var state_27521__$1 = state_27521;
var statearr_27529_27570 = state_27521__$1;
(statearr_27529_27570[(2)] = null);

(statearr_27529_27570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (3))){
var inst_27519 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27521__$1,inst_27519);
} else {
if((state_val_27522 === (12))){
var inst_27506 = cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.rotate,tetris.rules.rotate_cw);
var state_27521__$1 = state_27521;
var statearr_27530_27571 = state_27521__$1;
(statearr_27530_27571[(2)] = inst_27506);

(statearr_27530_27571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (2))){
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27521__$1,(4),tetris.core.c);
} else {
if((state_val_27522 === (11))){
var inst_27504 = cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.rotate,tetris.rules.rotate_ccw);
var state_27521__$1 = state_27521;
var statearr_27531_27572 = state_27521__$1;
(statearr_27531_27572[(2)] = inst_27504);

(statearr_27531_27572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (9))){
var inst_27500 = cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.x_shift,cljs.core.dec);
var state_27521__$1 = state_27521;
var statearr_27532_27573 = state_27521__$1;
(statearr_27532_27573[(2)] = inst_27500);

(statearr_27532_27573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (5))){
var inst_27498 = (state_27521[(7)]);
var state_27521__$1 = state_27521;
var G__27533_27574 = inst_27498;
switch (G__27533_27574) {
case (37):
var statearr_27534_27576 = state_27521__$1;
(statearr_27534_27576[(1)] = (9));


break;
case (39):
var statearr_27535_27577 = state_27521__$1;
(statearr_27535_27577[(1)] = (10));


break;
case (38):
var statearr_27536_27578 = state_27521__$1;
(statearr_27536_27578[(1)] = (11));


break;
case (40):
var statearr_27537_27579 = state_27521__$1;
(statearr_27537_27579[(1)] = (12));


break;
case (32):
var statearr_27538_27580 = state_27521__$1;
(statearr_27538_27580[(1)] = (13));


break;
default:
var statearr_27539_27581 = state_27521__$1;
(statearr_27539_27581[(1)] = (14));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (14))){
var inst_27498 = (state_27521[(7)]);
var inst_27510 = cljs.core.prn.call(null,inst_27498);
var state_27521__$1 = state_27521;
var statearr_27540_27582 = state_27521__$1;
(statearr_27540_27582[(2)] = inst_27510);

(statearr_27540_27582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (10))){
var inst_27502 = cljs.core.swap_BANG_.call(null,tetris.core.state,tetris.rules.x_shift,cljs.core.inc);
var state_27521__$1 = state_27521;
var statearr_27541_27583 = state_27521__$1;
(statearr_27541_27583[(2)] = inst_27502);

(statearr_27541_27583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (8))){
var inst_27513 = (state_27521[(2)]);
var state_27521__$1 = (function (){var statearr_27542 = state_27521;
(statearr_27542[(8)] = inst_27513);

return statearr_27542;
})();
var statearr_27543_27584 = state_27521__$1;
(statearr_27543_27584[(2)] = null);

(statearr_27543_27584[(1)] = (2));


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
});})(c__20410__auto___27564))
;
return ((function (switch__20389__auto__,c__20410__auto___27564){
return (function() {
var tetris$core$state_machine__20390__auto__ = null;
var tetris$core$state_machine__20390__auto____0 = (function (){
var statearr_27547 = [null,null,null,null,null,null,null,null,null];
(statearr_27547[(0)] = tetris$core$state_machine__20390__auto__);

(statearr_27547[(1)] = (1));

return statearr_27547;
});
var tetris$core$state_machine__20390__auto____1 = (function (state_27521){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27548){if((e27548 instanceof Object)){
var ex__20393__auto__ = e27548;
var statearr_27549_27585 = state_27521;
(statearr_27549_27585[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27586 = state_27521;
state_27521 = G__27586;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
tetris$core$state_machine__20390__auto__ = function(state_27521){
switch(arguments.length){
case 0:
return tetris$core$state_machine__20390__auto____0.call(this);
case 1:
return tetris$core$state_machine__20390__auto____1.call(this,state_27521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = tetris$core$state_machine__20390__auto____0;
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = tetris$core$state_machine__20390__auto____1;
return tetris$core$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___27564))
})();
var state__20412__auto__ = (function (){var statearr_27550 = f__20411__auto__.call(null);
(statearr_27550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___27564);

return statearr_27550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___27564))
);


document.onkeydown = (function (p1__27495_SHARP_){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_27555){
var state_val_27556 = (state_27555[(1)]);
if((state_val_27556 === (1))){
var inst_27551 = p1__27495_SHARP_.keyCode;
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27555__$1,(2),tetris.core.c,inst_27551);
} else {
if((state_val_27556 === (2))){
var inst_27553 = (state_27555[(2)]);
var state_27555__$1 = state_27555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27555__$1,inst_27553);
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
var statearr_27560 = [null,null,null,null,null,null,null];
(statearr_27560[(0)] = tetris$core$state_machine__20390__auto__);

(statearr_27560[(1)] = (1));

return statearr_27560;
});
var tetris$core$state_machine__20390__auto____1 = (function (state_27555){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27561){if((e27561 instanceof Object)){
var ex__20393__auto__ = e27561;
var statearr_27562_27587 = state_27555;
(statearr_27562_27587[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27588 = state_27555;
state_27555 = G__27588;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
tetris$core$state_machine__20390__auto__ = function(state_27555){
switch(arguments.length){
case 0:
return tetris$core$state_machine__20390__auto____0.call(this);
case 1:
return tetris$core$state_machine__20390__auto____1.call(this,state_27555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = tetris$core$state_machine__20390__auto____0;
tetris$core$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = tetris$core$state_machine__20390__auto____1;
return tetris$core$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_27563 = f__20411__auto__.call(null);
(statearr_27563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_27563;
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

//# sourceMappingURL=core.js.map?rel=1457074176243