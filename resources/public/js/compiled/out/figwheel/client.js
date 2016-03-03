// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__29320 = cljs.core._EQ_;
var expr__29321 = (function (){var or__18291__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e29324){if((e29324 instanceof Error)){
var e = e29324;
return false;
} else {
throw e29324;

}
}})();
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29320.call(null,"true",expr__29321))){
return true;
} else {
if(cljs.core.truth_(pred__29320.call(null,"false",expr__29321))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29321)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e29326){if((e29326 instanceof Error)){
var e = e29326;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e29326;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19356__auto__ = [];
var len__19349__auto___29328 = arguments.length;
var i__19350__auto___29329 = (0);
while(true){
if((i__19350__auto___29329 < len__19349__auto___29328)){
args__19356__auto__.push((arguments[i__19350__auto___29329]));

var G__29330 = (i__19350__auto___29329 + (1));
i__19350__auto___29329 = G__29330;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((0) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19357__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq29327){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29327));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29331){
var map__29334 = p__29331;
var map__29334__$1 = ((((!((map__29334 == null)))?((((map__29334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29334):map__29334);
var message = cljs.core.get.call(null,map__29334__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29334__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18291__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18279__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18279__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18279__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20410__auto___29496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___29496,ch){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___29496,ch){
return (function (state_29465){
var state_val_29466 = (state_29465[(1)]);
if((state_val_29466 === (7))){
var inst_29461 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29467_29497 = state_29465__$1;
(statearr_29467_29497[(2)] = inst_29461);

(statearr_29467_29497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (1))){
var state_29465__$1 = state_29465;
var statearr_29468_29498 = state_29465__$1;
(statearr_29468_29498[(2)] = null);

(statearr_29468_29498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (4))){
var inst_29418 = (state_29465[(7)]);
var inst_29418__$1 = (state_29465[(2)]);
var state_29465__$1 = (function (){var statearr_29469 = state_29465;
(statearr_29469[(7)] = inst_29418__$1);

return statearr_29469;
})();
if(cljs.core.truth_(inst_29418__$1)){
var statearr_29470_29499 = state_29465__$1;
(statearr_29470_29499[(1)] = (5));

} else {
var statearr_29471_29500 = state_29465__$1;
(statearr_29471_29500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (15))){
var inst_29425 = (state_29465[(8)]);
var inst_29440 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29425);
var inst_29441 = cljs.core.first.call(null,inst_29440);
var inst_29442 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29441);
var inst_29443 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29442)].join('');
var inst_29444 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29443);
var state_29465__$1 = state_29465;
var statearr_29472_29501 = state_29465__$1;
(statearr_29472_29501[(2)] = inst_29444);

(statearr_29472_29501[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (13))){
var inst_29449 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29473_29502 = state_29465__$1;
(statearr_29473_29502[(2)] = inst_29449);

(statearr_29473_29502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (6))){
var state_29465__$1 = state_29465;
var statearr_29474_29503 = state_29465__$1;
(statearr_29474_29503[(2)] = null);

(statearr_29474_29503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (17))){
var inst_29447 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29475_29504 = state_29465__$1;
(statearr_29475_29504[(2)] = inst_29447);

(statearr_29475_29504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (3))){
var inst_29463 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29465__$1,inst_29463);
} else {
if((state_val_29466 === (12))){
var inst_29424 = (state_29465[(9)]);
var inst_29438 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29424,opts);
var state_29465__$1 = state_29465;
if(cljs.core.truth_(inst_29438)){
var statearr_29476_29505 = state_29465__$1;
(statearr_29476_29505[(1)] = (15));

} else {
var statearr_29477_29506 = state_29465__$1;
(statearr_29477_29506[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (2))){
var state_29465__$1 = state_29465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29465__$1,(4),ch);
} else {
if((state_val_29466 === (11))){
var inst_29425 = (state_29465[(8)]);
var inst_29430 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29431 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29425);
var inst_29432 = cljs.core.async.timeout.call(null,(1000));
var inst_29433 = [inst_29431,inst_29432];
var inst_29434 = (new cljs.core.PersistentVector(null,2,(5),inst_29430,inst_29433,null));
var state_29465__$1 = state_29465;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29465__$1,(14),inst_29434);
} else {
if((state_val_29466 === (9))){
var inst_29425 = (state_29465[(8)]);
var inst_29451 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29452 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29425);
var inst_29453 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29452);
var inst_29454 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29453)].join('');
var inst_29455 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29454);
var state_29465__$1 = (function (){var statearr_29478 = state_29465;
(statearr_29478[(10)] = inst_29451);

return statearr_29478;
})();
var statearr_29479_29507 = state_29465__$1;
(statearr_29479_29507[(2)] = inst_29455);

(statearr_29479_29507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (5))){
var inst_29418 = (state_29465[(7)]);
var inst_29420 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29421 = (new cljs.core.PersistentArrayMap(null,2,inst_29420,null));
var inst_29422 = (new cljs.core.PersistentHashSet(null,inst_29421,null));
var inst_29423 = figwheel.client.focus_msgs.call(null,inst_29422,inst_29418);
var inst_29424 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29423);
var inst_29425 = cljs.core.first.call(null,inst_29423);
var inst_29426 = figwheel.client.autoload_QMARK_.call(null);
var state_29465__$1 = (function (){var statearr_29480 = state_29465;
(statearr_29480[(9)] = inst_29424);

(statearr_29480[(8)] = inst_29425);

return statearr_29480;
})();
if(cljs.core.truth_(inst_29426)){
var statearr_29481_29508 = state_29465__$1;
(statearr_29481_29508[(1)] = (8));

} else {
var statearr_29482_29509 = state_29465__$1;
(statearr_29482_29509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (14))){
var inst_29436 = (state_29465[(2)]);
var state_29465__$1 = state_29465;
var statearr_29483_29510 = state_29465__$1;
(statearr_29483_29510[(2)] = inst_29436);

(statearr_29483_29510[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (16))){
var state_29465__$1 = state_29465;
var statearr_29484_29511 = state_29465__$1;
(statearr_29484_29511[(2)] = null);

(statearr_29484_29511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (10))){
var inst_29457 = (state_29465[(2)]);
var state_29465__$1 = (function (){var statearr_29485 = state_29465;
(statearr_29485[(11)] = inst_29457);

return statearr_29485;
})();
var statearr_29486_29512 = state_29465__$1;
(statearr_29486_29512[(2)] = null);

(statearr_29486_29512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29466 === (8))){
var inst_29424 = (state_29465[(9)]);
var inst_29428 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29424,opts);
var state_29465__$1 = state_29465;
if(cljs.core.truth_(inst_29428)){
var statearr_29487_29513 = state_29465__$1;
(statearr_29487_29513[(1)] = (11));

} else {
var statearr_29488_29514 = state_29465__$1;
(statearr_29488_29514[(1)] = (12));

}

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
}
}
}
});})(c__20410__auto___29496,ch))
;
return ((function (switch__20389__auto__,c__20410__auto___29496,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____0 = (function (){
var statearr_29492 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29492[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__);

(statearr_29492[(1)] = (1));

return statearr_29492;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____1 = (function (state_29465){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_29465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e29493){if((e29493 instanceof Object)){
var ex__20393__auto__ = e29493;
var statearr_29494_29515 = state_29465;
(statearr_29494_29515[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29516 = state_29465;
state_29465 = G__29516;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__ = function(state_29465){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____1.call(this,state_29465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___29496,ch))
})();
var state__20412__auto__ = (function (){var statearr_29495 = f__20411__auto__.call(null);
(statearr_29495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___29496);

return statearr_29495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___29496,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29517_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29517_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29524 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29524){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29522 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29523 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29523;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29522;
}}catch (e29521){if((e29521 instanceof Error)){
var e = e29521;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29524], null));
} else {
var e = e29521;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29524))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29525){
var map__29532 = p__29525;
var map__29532__$1 = ((((!((map__29532 == null)))?((((map__29532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29532):map__29532);
var opts = map__29532__$1;
var build_id = cljs.core.get.call(null,map__29532__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29532,map__29532__$1,opts,build_id){
return (function (p__29534){
var vec__29535 = p__29534;
var map__29536 = cljs.core.nth.call(null,vec__29535,(0),null);
var map__29536__$1 = ((((!((map__29536 == null)))?((((map__29536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29536):map__29536);
var msg = map__29536__$1;
var msg_name = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29535,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29535,map__29536,map__29536__$1,msg,msg_name,_,map__29532,map__29532__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29535,map__29536,map__29536__$1,msg,msg_name,_,map__29532,map__29532__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29532,map__29532__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29542){
var vec__29543 = p__29542;
var map__29544 = cljs.core.nth.call(null,vec__29543,(0),null);
var map__29544__$1 = ((((!((map__29544 == null)))?((((map__29544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29544):map__29544);
var msg = map__29544__$1;
var msg_name = cljs.core.get.call(null,map__29544__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29543,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29546){
var map__29556 = p__29546;
var map__29556__$1 = ((((!((map__29556 == null)))?((((map__29556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29556):map__29556);
var on_compile_warning = cljs.core.get.call(null,map__29556__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29556__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29556,map__29556__$1,on_compile_warning,on_compile_fail){
return (function (p__29558){
var vec__29559 = p__29558;
var map__29560 = cljs.core.nth.call(null,vec__29559,(0),null);
var map__29560__$1 = ((((!((map__29560 == null)))?((((map__29560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29560):map__29560);
var msg = map__29560__$1;
var msg_name = cljs.core.get.call(null,map__29560__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29559,(1));
var pred__29562 = cljs.core._EQ_;
var expr__29563 = msg_name;
if(cljs.core.truth_(pred__29562.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29563))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29562.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29563))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29556,map__29556__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__,msg_hist,msg_names,msg){
return (function (state_29779){
var state_val_29780 = (state_29779[(1)]);
if((state_val_29780 === (7))){
var inst_29703 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
if(cljs.core.truth_(inst_29703)){
var statearr_29781_29827 = state_29779__$1;
(statearr_29781_29827[(1)] = (8));

} else {
var statearr_29782_29828 = state_29779__$1;
(statearr_29782_29828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (20))){
var inst_29773 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29783_29829 = state_29779__$1;
(statearr_29783_29829[(2)] = inst_29773);

(statearr_29783_29829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (27))){
var inst_29769 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29784_29830 = state_29779__$1;
(statearr_29784_29830[(2)] = inst_29769);

(statearr_29784_29830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (1))){
var inst_29696 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29779__$1 = state_29779;
if(cljs.core.truth_(inst_29696)){
var statearr_29785_29831 = state_29779__$1;
(statearr_29785_29831[(1)] = (2));

} else {
var statearr_29786_29832 = state_29779__$1;
(statearr_29786_29832[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (24))){
var inst_29771 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29787_29833 = state_29779__$1;
(statearr_29787_29833[(2)] = inst_29771);

(statearr_29787_29833[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (4))){
var inst_29777 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29779__$1,inst_29777);
} else {
if((state_val_29780 === (15))){
var inst_29775 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29788_29834 = state_29779__$1;
(statearr_29788_29834[(2)] = inst_29775);

(statearr_29788_29834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (21))){
var inst_29734 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29789_29835 = state_29779__$1;
(statearr_29789_29835[(2)] = inst_29734);

(statearr_29789_29835[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (31))){
var inst_29758 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29779__$1 = state_29779;
if(cljs.core.truth_(inst_29758)){
var statearr_29790_29836 = state_29779__$1;
(statearr_29790_29836[(1)] = (34));

} else {
var statearr_29791_29837 = state_29779__$1;
(statearr_29791_29837[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (32))){
var inst_29767 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29792_29838 = state_29779__$1;
(statearr_29792_29838[(2)] = inst_29767);

(statearr_29792_29838[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (33))){
var inst_29756 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29793_29839 = state_29779__$1;
(statearr_29793_29839[(2)] = inst_29756);

(statearr_29793_29839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (13))){
var inst_29717 = figwheel.client.heads_up.clear.call(null);
var state_29779__$1 = state_29779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29779__$1,(16),inst_29717);
} else {
if((state_val_29780 === (22))){
var inst_29738 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29739 = figwheel.client.heads_up.append_message.call(null,inst_29738);
var state_29779__$1 = state_29779;
var statearr_29794_29840 = state_29779__$1;
(statearr_29794_29840[(2)] = inst_29739);

(statearr_29794_29840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (36))){
var inst_29765 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29795_29841 = state_29779__$1;
(statearr_29795_29841[(2)] = inst_29765);

(statearr_29795_29841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (29))){
var inst_29749 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29796_29842 = state_29779__$1;
(statearr_29796_29842[(2)] = inst_29749);

(statearr_29796_29842[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (6))){
var inst_29698 = (state_29779[(7)]);
var state_29779__$1 = state_29779;
var statearr_29797_29843 = state_29779__$1;
(statearr_29797_29843[(2)] = inst_29698);

(statearr_29797_29843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (28))){
var inst_29745 = (state_29779[(2)]);
var inst_29746 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29747 = figwheel.client.heads_up.display_warning.call(null,inst_29746);
var state_29779__$1 = (function (){var statearr_29798 = state_29779;
(statearr_29798[(8)] = inst_29745);

return statearr_29798;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29779__$1,(29),inst_29747);
} else {
if((state_val_29780 === (25))){
var inst_29743 = figwheel.client.heads_up.clear.call(null);
var state_29779__$1 = state_29779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29779__$1,(28),inst_29743);
} else {
if((state_val_29780 === (34))){
var inst_29760 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29779__$1 = state_29779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29779__$1,(37),inst_29760);
} else {
if((state_val_29780 === (17))){
var inst_29725 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29799_29844 = state_29779__$1;
(statearr_29799_29844[(2)] = inst_29725);

(statearr_29799_29844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (3))){
var inst_29715 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29779__$1 = state_29779;
if(cljs.core.truth_(inst_29715)){
var statearr_29800_29845 = state_29779__$1;
(statearr_29800_29845[(1)] = (13));

} else {
var statearr_29801_29846 = state_29779__$1;
(statearr_29801_29846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (12))){
var inst_29711 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29802_29847 = state_29779__$1;
(statearr_29802_29847[(2)] = inst_29711);

(statearr_29802_29847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (2))){
var inst_29698 = (state_29779[(7)]);
var inst_29698__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29779__$1 = (function (){var statearr_29803 = state_29779;
(statearr_29803[(7)] = inst_29698__$1);

return statearr_29803;
})();
if(cljs.core.truth_(inst_29698__$1)){
var statearr_29804_29848 = state_29779__$1;
(statearr_29804_29848[(1)] = (5));

} else {
var statearr_29805_29849 = state_29779__$1;
(statearr_29805_29849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (23))){
var inst_29741 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29779__$1 = state_29779;
if(cljs.core.truth_(inst_29741)){
var statearr_29806_29850 = state_29779__$1;
(statearr_29806_29850[(1)] = (25));

} else {
var statearr_29807_29851 = state_29779__$1;
(statearr_29807_29851[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (35))){
var state_29779__$1 = state_29779;
var statearr_29808_29852 = state_29779__$1;
(statearr_29808_29852[(2)] = null);

(statearr_29808_29852[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (19))){
var inst_29736 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29779__$1 = state_29779;
if(cljs.core.truth_(inst_29736)){
var statearr_29809_29853 = state_29779__$1;
(statearr_29809_29853[(1)] = (22));

} else {
var statearr_29810_29854 = state_29779__$1;
(statearr_29810_29854[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (11))){
var inst_29707 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29811_29855 = state_29779__$1;
(statearr_29811_29855[(2)] = inst_29707);

(statearr_29811_29855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (9))){
var inst_29709 = figwheel.client.heads_up.clear.call(null);
var state_29779__$1 = state_29779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29779__$1,(12),inst_29709);
} else {
if((state_val_29780 === (5))){
var inst_29700 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29779__$1 = state_29779;
var statearr_29812_29856 = state_29779__$1;
(statearr_29812_29856[(2)] = inst_29700);

(statearr_29812_29856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (14))){
var inst_29727 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29779__$1 = state_29779;
if(cljs.core.truth_(inst_29727)){
var statearr_29813_29857 = state_29779__$1;
(statearr_29813_29857[(1)] = (18));

} else {
var statearr_29814_29858 = state_29779__$1;
(statearr_29814_29858[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (26))){
var inst_29751 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29779__$1 = state_29779;
if(cljs.core.truth_(inst_29751)){
var statearr_29815_29859 = state_29779__$1;
(statearr_29815_29859[(1)] = (30));

} else {
var statearr_29816_29860 = state_29779__$1;
(statearr_29816_29860[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (16))){
var inst_29719 = (state_29779[(2)]);
var inst_29720 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29721 = figwheel.client.format_messages.call(null,inst_29720);
var inst_29722 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29723 = figwheel.client.heads_up.display_error.call(null,inst_29721,inst_29722);
var state_29779__$1 = (function (){var statearr_29817 = state_29779;
(statearr_29817[(9)] = inst_29719);

return statearr_29817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29779__$1,(17),inst_29723);
} else {
if((state_val_29780 === (30))){
var inst_29753 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29754 = figwheel.client.heads_up.display_warning.call(null,inst_29753);
var state_29779__$1 = state_29779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29779__$1,(33),inst_29754);
} else {
if((state_val_29780 === (10))){
var inst_29713 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29818_29861 = state_29779__$1;
(statearr_29818_29861[(2)] = inst_29713);

(statearr_29818_29861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (18))){
var inst_29729 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29730 = figwheel.client.format_messages.call(null,inst_29729);
var inst_29731 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29732 = figwheel.client.heads_up.display_error.call(null,inst_29730,inst_29731);
var state_29779__$1 = state_29779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29779__$1,(21),inst_29732);
} else {
if((state_val_29780 === (37))){
var inst_29762 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29819_29862 = state_29779__$1;
(statearr_29819_29862[(2)] = inst_29762);

(statearr_29819_29862[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (8))){
var inst_29705 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29779__$1 = state_29779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29779__$1,(11),inst_29705);
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
}
}
}
}
}
}
}
}
}
});})(c__20410__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20389__auto__,c__20410__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____0 = (function (){
var statearr_29823 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29823[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__);

(statearr_29823[(1)] = (1));

return statearr_29823;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____1 = (function (state_29779){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_29779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e29824){if((e29824 instanceof Object)){
var ex__20393__auto__ = e29824;
var statearr_29825_29863 = state_29779;
(statearr_29825_29863[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29864 = state_29779;
state_29779 = G__29864;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__ = function(state_29779){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____1.call(this,state_29779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__,msg_hist,msg_names,msg))
})();
var state__20412__auto__ = (function (){var statearr_29826 = f__20411__auto__.call(null);
(statearr_29826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_29826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__,msg_hist,msg_names,msg))
);

return c__20410__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20410__auto___29927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___29927,ch){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___29927,ch){
return (function (state_29910){
var state_val_29911 = (state_29910[(1)]);
if((state_val_29911 === (1))){
var state_29910__$1 = state_29910;
var statearr_29912_29928 = state_29910__$1;
(statearr_29912_29928[(2)] = null);

(statearr_29912_29928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (2))){
var state_29910__$1 = state_29910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29910__$1,(4),ch);
} else {
if((state_val_29911 === (3))){
var inst_29908 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29910__$1,inst_29908);
} else {
if((state_val_29911 === (4))){
var inst_29898 = (state_29910[(7)]);
var inst_29898__$1 = (state_29910[(2)]);
var state_29910__$1 = (function (){var statearr_29913 = state_29910;
(statearr_29913[(7)] = inst_29898__$1);

return statearr_29913;
})();
if(cljs.core.truth_(inst_29898__$1)){
var statearr_29914_29929 = state_29910__$1;
(statearr_29914_29929[(1)] = (5));

} else {
var statearr_29915_29930 = state_29910__$1;
(statearr_29915_29930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (5))){
var inst_29898 = (state_29910[(7)]);
var inst_29900 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29898);
var state_29910__$1 = state_29910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29910__$1,(8),inst_29900);
} else {
if((state_val_29911 === (6))){
var state_29910__$1 = state_29910;
var statearr_29916_29931 = state_29910__$1;
(statearr_29916_29931[(2)] = null);

(statearr_29916_29931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (7))){
var inst_29906 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29917_29932 = state_29910__$1;
(statearr_29917_29932[(2)] = inst_29906);

(statearr_29917_29932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (8))){
var inst_29902 = (state_29910[(2)]);
var state_29910__$1 = (function (){var statearr_29918 = state_29910;
(statearr_29918[(8)] = inst_29902);

return statearr_29918;
})();
var statearr_29919_29933 = state_29910__$1;
(statearr_29919_29933[(2)] = null);

(statearr_29919_29933[(1)] = (2));


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
});})(c__20410__auto___29927,ch))
;
return ((function (switch__20389__auto__,c__20410__auto___29927,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20390__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20390__auto____0 = (function (){
var statearr_29923 = [null,null,null,null,null,null,null,null,null];
(statearr_29923[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20390__auto__);

(statearr_29923[(1)] = (1));

return statearr_29923;
});
var figwheel$client$heads_up_plugin_$_state_machine__20390__auto____1 = (function (state_29910){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_29910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e29924){if((e29924 instanceof Object)){
var ex__20393__auto__ = e29924;
var statearr_29925_29934 = state_29910;
(statearr_29925_29934[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29935 = state_29910;
state_29910 = G__29935;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20390__auto__ = function(state_29910){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20390__auto____1.call(this,state_29910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20390__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20390__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___29927,ch))
})();
var state__20412__auto__ = (function (){var statearr_29926 = f__20411__auto__.call(null);
(statearr_29926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___29927);

return statearr_29926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___29927,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_29956){
var state_val_29957 = (state_29956[(1)]);
if((state_val_29957 === (1))){
var inst_29951 = cljs.core.async.timeout.call(null,(3000));
var state_29956__$1 = state_29956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29956__$1,(2),inst_29951);
} else {
if((state_val_29957 === (2))){
var inst_29953 = (state_29956[(2)]);
var inst_29954 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29956__$1 = (function (){var statearr_29958 = state_29956;
(statearr_29958[(7)] = inst_29953);

return statearr_29958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29956__$1,inst_29954);
} else {
return null;
}
}
});})(c__20410__auto__))
;
return ((function (switch__20389__auto__,c__20410__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____0 = (function (){
var statearr_29962 = [null,null,null,null,null,null,null,null];
(statearr_29962[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__);

(statearr_29962[(1)] = (1));

return statearr_29962;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____1 = (function (state_29956){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_29956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e29963){if((e29963 instanceof Object)){
var ex__20393__auto__ = e29963;
var statearr_29964_29966 = state_29956;
(statearr_29964_29966[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29967 = state_29956;
state_29956 = G__29967;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__ = function(state_29956){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____1.call(this,state_29956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_29965 = f__20411__auto__.call(null);
(statearr_29965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_29965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__))
);

return c__20410__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29968){
var map__29975 = p__29968;
var map__29975__$1 = ((((!((map__29975 == null)))?((((map__29975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29975):map__29975);
var ed = map__29975__$1;
var formatted_exception = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29977_29981 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29978_29982 = null;
var count__29979_29983 = (0);
var i__29980_29984 = (0);
while(true){
if((i__29980_29984 < count__29979_29983)){
var msg_29985 = cljs.core._nth.call(null,chunk__29978_29982,i__29980_29984);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29985);

var G__29986 = seq__29977_29981;
var G__29987 = chunk__29978_29982;
var G__29988 = count__29979_29983;
var G__29989 = (i__29980_29984 + (1));
seq__29977_29981 = G__29986;
chunk__29978_29982 = G__29987;
count__29979_29983 = G__29988;
i__29980_29984 = G__29989;
continue;
} else {
var temp__4425__auto___29990 = cljs.core.seq.call(null,seq__29977_29981);
if(temp__4425__auto___29990){
var seq__29977_29991__$1 = temp__4425__auto___29990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29977_29991__$1)){
var c__19094__auto___29992 = cljs.core.chunk_first.call(null,seq__29977_29991__$1);
var G__29993 = cljs.core.chunk_rest.call(null,seq__29977_29991__$1);
var G__29994 = c__19094__auto___29992;
var G__29995 = cljs.core.count.call(null,c__19094__auto___29992);
var G__29996 = (0);
seq__29977_29981 = G__29993;
chunk__29978_29982 = G__29994;
count__29979_29983 = G__29995;
i__29980_29984 = G__29996;
continue;
} else {
var msg_29997 = cljs.core.first.call(null,seq__29977_29991__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29997);

var G__29998 = cljs.core.next.call(null,seq__29977_29991__$1);
var G__29999 = null;
var G__30000 = (0);
var G__30001 = (0);
seq__29977_29981 = G__29998;
chunk__29978_29982 = G__29999;
count__29979_29983 = G__30000;
i__29980_29984 = G__30001;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30002){
var map__30005 = p__30002;
var map__30005__$1 = ((((!((map__30005 == null)))?((((map__30005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30005):map__30005);
var w = map__30005__$1;
var message = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18279__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18279__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18279__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30013 = cljs.core.seq.call(null,plugins);
var chunk__30014 = null;
var count__30015 = (0);
var i__30016 = (0);
while(true){
if((i__30016 < count__30015)){
var vec__30017 = cljs.core._nth.call(null,chunk__30014,i__30016);
var k = cljs.core.nth.call(null,vec__30017,(0),null);
var plugin = cljs.core.nth.call(null,vec__30017,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30019 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30013,chunk__30014,count__30015,i__30016,pl_30019,vec__30017,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30019.call(null,msg_hist);
});})(seq__30013,chunk__30014,count__30015,i__30016,pl_30019,vec__30017,k,plugin))
);
} else {
}

var G__30020 = seq__30013;
var G__30021 = chunk__30014;
var G__30022 = count__30015;
var G__30023 = (i__30016 + (1));
seq__30013 = G__30020;
chunk__30014 = G__30021;
count__30015 = G__30022;
i__30016 = G__30023;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30013);
if(temp__4425__auto__){
var seq__30013__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30013__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__30013__$1);
var G__30024 = cljs.core.chunk_rest.call(null,seq__30013__$1);
var G__30025 = c__19094__auto__;
var G__30026 = cljs.core.count.call(null,c__19094__auto__);
var G__30027 = (0);
seq__30013 = G__30024;
chunk__30014 = G__30025;
count__30015 = G__30026;
i__30016 = G__30027;
continue;
} else {
var vec__30018 = cljs.core.first.call(null,seq__30013__$1);
var k = cljs.core.nth.call(null,vec__30018,(0),null);
var plugin = cljs.core.nth.call(null,vec__30018,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30028 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30013,chunk__30014,count__30015,i__30016,pl_30028,vec__30018,k,plugin,seq__30013__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30028.call(null,msg_hist);
});})(seq__30013,chunk__30014,count__30015,i__30016,pl_30028,vec__30018,k,plugin,seq__30013__$1,temp__4425__auto__))
);
} else {
}

var G__30029 = cljs.core.next.call(null,seq__30013__$1);
var G__30030 = null;
var G__30031 = (0);
var G__30032 = (0);
seq__30013 = G__30029;
chunk__30014 = G__30030;
count__30015 = G__30031;
i__30016 = G__30032;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30033 = [];
var len__19349__auto___30036 = arguments.length;
var i__19350__auto___30037 = (0);
while(true){
if((i__19350__auto___30037 < len__19349__auto___30036)){
args30033.push((arguments[i__19350__auto___30037]));

var G__30038 = (i__19350__auto___30037 + (1));
i__19350__auto___30037 = G__30038;
continue;
} else {
}
break;
}

var G__30035 = args30033.length;
switch (G__30035) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30033.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19356__auto__ = [];
var len__19349__auto___30044 = arguments.length;
var i__19350__auto___30045 = (0);
while(true){
if((i__19350__auto___30045 < len__19349__auto___30044)){
args__19356__auto__.push((arguments[i__19350__auto___30045]));

var G__30046 = (i__19350__auto___30045 + (1));
i__19350__auto___30045 = G__30046;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((0) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30041){
var map__30042 = p__30041;
var map__30042__$1 = ((((!((map__30042 == null)))?((((map__30042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30042):map__30042);
var opts = map__30042__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30040){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30040));
});

//# sourceMappingURL=client.js.map?rel=1456984147573