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
var pred__27969 = cljs.core._EQ_;
var expr__27970 = (function (){var or__18291__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e27973){if((e27973 instanceof Error)){
var e = e27973;
return false;
} else {
throw e27973;

}
}})();
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27969.call(null,"true",expr__27970))){
return true;
} else {
if(cljs.core.truth_(pred__27969.call(null,"false",expr__27970))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27970)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e27975){if((e27975 instanceof Error)){
var e = e27975;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e27975;

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
var len__19349__auto___27977 = arguments.length;
var i__19350__auto___27978 = (0);
while(true){
if((i__19350__auto___27978 < len__19349__auto___27977)){
args__19356__auto__.push((arguments[i__19350__auto___27978]));

var G__27979 = (i__19350__auto___27978 + (1));
i__19350__auto___27978 = G__27979;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq27976){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27976));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27980){
var map__27983 = p__27980;
var map__27983__$1 = ((((!((map__27983 == null)))?((((map__27983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27983):map__27983);
var message = cljs.core.get.call(null,map__27983__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27983__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20410__auto___28145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___28145,ch){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___28145,ch){
return (function (state_28114){
var state_val_28115 = (state_28114[(1)]);
if((state_val_28115 === (7))){
var inst_28110 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28116_28146 = state_28114__$1;
(statearr_28116_28146[(2)] = inst_28110);

(statearr_28116_28146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (1))){
var state_28114__$1 = state_28114;
var statearr_28117_28147 = state_28114__$1;
(statearr_28117_28147[(2)] = null);

(statearr_28117_28147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (4))){
var inst_28067 = (state_28114[(7)]);
var inst_28067__$1 = (state_28114[(2)]);
var state_28114__$1 = (function (){var statearr_28118 = state_28114;
(statearr_28118[(7)] = inst_28067__$1);

return statearr_28118;
})();
if(cljs.core.truth_(inst_28067__$1)){
var statearr_28119_28148 = state_28114__$1;
(statearr_28119_28148[(1)] = (5));

} else {
var statearr_28120_28149 = state_28114__$1;
(statearr_28120_28149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (15))){
var inst_28074 = (state_28114[(8)]);
var inst_28089 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28074);
var inst_28090 = cljs.core.first.call(null,inst_28089);
var inst_28091 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28090);
var inst_28092 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28091)].join('');
var inst_28093 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28092);
var state_28114__$1 = state_28114;
var statearr_28121_28150 = state_28114__$1;
(statearr_28121_28150[(2)] = inst_28093);

(statearr_28121_28150[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (13))){
var inst_28098 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28122_28151 = state_28114__$1;
(statearr_28122_28151[(2)] = inst_28098);

(statearr_28122_28151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (6))){
var state_28114__$1 = state_28114;
var statearr_28123_28152 = state_28114__$1;
(statearr_28123_28152[(2)] = null);

(statearr_28123_28152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (17))){
var inst_28096 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28124_28153 = state_28114__$1;
(statearr_28124_28153[(2)] = inst_28096);

(statearr_28124_28153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (3))){
var inst_28112 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28114__$1,inst_28112);
} else {
if((state_val_28115 === (12))){
var inst_28073 = (state_28114[(9)]);
var inst_28087 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28073,opts);
var state_28114__$1 = state_28114;
if(cljs.core.truth_(inst_28087)){
var statearr_28125_28154 = state_28114__$1;
(statearr_28125_28154[(1)] = (15));

} else {
var statearr_28126_28155 = state_28114__$1;
(statearr_28126_28155[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (2))){
var state_28114__$1 = state_28114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28114__$1,(4),ch);
} else {
if((state_val_28115 === (11))){
var inst_28074 = (state_28114[(8)]);
var inst_28079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28080 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28074);
var inst_28081 = cljs.core.async.timeout.call(null,(1000));
var inst_28082 = [inst_28080,inst_28081];
var inst_28083 = (new cljs.core.PersistentVector(null,2,(5),inst_28079,inst_28082,null));
var state_28114__$1 = state_28114;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28114__$1,(14),inst_28083);
} else {
if((state_val_28115 === (9))){
var inst_28074 = (state_28114[(8)]);
var inst_28100 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28101 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28074);
var inst_28102 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28101);
var inst_28103 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28102)].join('');
var inst_28104 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28103);
var state_28114__$1 = (function (){var statearr_28127 = state_28114;
(statearr_28127[(10)] = inst_28100);

return statearr_28127;
})();
var statearr_28128_28156 = state_28114__$1;
(statearr_28128_28156[(2)] = inst_28104);

(statearr_28128_28156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (5))){
var inst_28067 = (state_28114[(7)]);
var inst_28069 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28070 = (new cljs.core.PersistentArrayMap(null,2,inst_28069,null));
var inst_28071 = (new cljs.core.PersistentHashSet(null,inst_28070,null));
var inst_28072 = figwheel.client.focus_msgs.call(null,inst_28071,inst_28067);
var inst_28073 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28072);
var inst_28074 = cljs.core.first.call(null,inst_28072);
var inst_28075 = figwheel.client.autoload_QMARK_.call(null);
var state_28114__$1 = (function (){var statearr_28129 = state_28114;
(statearr_28129[(8)] = inst_28074);

(statearr_28129[(9)] = inst_28073);

return statearr_28129;
})();
if(cljs.core.truth_(inst_28075)){
var statearr_28130_28157 = state_28114__$1;
(statearr_28130_28157[(1)] = (8));

} else {
var statearr_28131_28158 = state_28114__$1;
(statearr_28131_28158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (14))){
var inst_28085 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28132_28159 = state_28114__$1;
(statearr_28132_28159[(2)] = inst_28085);

(statearr_28132_28159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (16))){
var state_28114__$1 = state_28114;
var statearr_28133_28160 = state_28114__$1;
(statearr_28133_28160[(2)] = null);

(statearr_28133_28160[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (10))){
var inst_28106 = (state_28114[(2)]);
var state_28114__$1 = (function (){var statearr_28134 = state_28114;
(statearr_28134[(11)] = inst_28106);

return statearr_28134;
})();
var statearr_28135_28161 = state_28114__$1;
(statearr_28135_28161[(2)] = null);

(statearr_28135_28161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (8))){
var inst_28073 = (state_28114[(9)]);
var inst_28077 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28073,opts);
var state_28114__$1 = state_28114;
if(cljs.core.truth_(inst_28077)){
var statearr_28136_28162 = state_28114__$1;
(statearr_28136_28162[(1)] = (11));

} else {
var statearr_28137_28163 = state_28114__$1;
(statearr_28137_28163[(1)] = (12));

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
});})(c__20410__auto___28145,ch))
;
return ((function (switch__20389__auto__,c__20410__auto___28145,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____0 = (function (){
var statearr_28141 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28141[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__);

(statearr_28141[(1)] = (1));

return statearr_28141;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____1 = (function (state_28114){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_28114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e28142){if((e28142 instanceof Object)){
var ex__20393__auto__ = e28142;
var statearr_28143_28164 = state_28114;
(statearr_28143_28164[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28165 = state_28114;
state_28114 = G__28165;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__ = function(state_28114){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____1.call(this,state_28114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20390__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___28145,ch))
})();
var state__20412__auto__ = (function (){var statearr_28144 = f__20411__auto__.call(null);
(statearr_28144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___28145);

return statearr_28144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___28145,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28166_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28166_SHARP_));
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
var base_path_28173 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28173){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28171 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28172 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28172;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28171;
}}catch (e28170){if((e28170 instanceof Error)){
var e = e28170;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28173], null));
} else {
var e = e28170;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28173))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28174){
var map__28181 = p__28174;
var map__28181__$1 = ((((!((map__28181 == null)))?((((map__28181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28181):map__28181);
var opts = map__28181__$1;
var build_id = cljs.core.get.call(null,map__28181__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28181,map__28181__$1,opts,build_id){
return (function (p__28183){
var vec__28184 = p__28183;
var map__28185 = cljs.core.nth.call(null,vec__28184,(0),null);
var map__28185__$1 = ((((!((map__28185 == null)))?((((map__28185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28185):map__28185);
var msg = map__28185__$1;
var msg_name = cljs.core.get.call(null,map__28185__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28184,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28184,map__28185,map__28185__$1,msg,msg_name,_,map__28181,map__28181__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28184,map__28185,map__28185__$1,msg,msg_name,_,map__28181,map__28181__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28181,map__28181__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28191){
var vec__28192 = p__28191;
var map__28193 = cljs.core.nth.call(null,vec__28192,(0),null);
var map__28193__$1 = ((((!((map__28193 == null)))?((((map__28193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28193):map__28193);
var msg = map__28193__$1;
var msg_name = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28192,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28195){
var map__28205 = p__28195;
var map__28205__$1 = ((((!((map__28205 == null)))?((((map__28205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28205):map__28205);
var on_compile_warning = cljs.core.get.call(null,map__28205__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28205__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28205,map__28205__$1,on_compile_warning,on_compile_fail){
return (function (p__28207){
var vec__28208 = p__28207;
var map__28209 = cljs.core.nth.call(null,vec__28208,(0),null);
var map__28209__$1 = ((((!((map__28209 == null)))?((((map__28209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28209):map__28209);
var msg = map__28209__$1;
var msg_name = cljs.core.get.call(null,map__28209__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28208,(1));
var pred__28211 = cljs.core._EQ_;
var expr__28212 = msg_name;
if(cljs.core.truth_(pred__28211.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28212))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28211.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28212))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28205,map__28205__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__,msg_hist,msg_names,msg){
return (function (state_28428){
var state_val_28429 = (state_28428[(1)]);
if((state_val_28429 === (7))){
var inst_28352 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28352)){
var statearr_28430_28476 = state_28428__$1;
(statearr_28430_28476[(1)] = (8));

} else {
var statearr_28431_28477 = state_28428__$1;
(statearr_28431_28477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (20))){
var inst_28422 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28432_28478 = state_28428__$1;
(statearr_28432_28478[(2)] = inst_28422);

(statearr_28432_28478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (27))){
var inst_28418 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28433_28479 = state_28428__$1;
(statearr_28433_28479[(2)] = inst_28418);

(statearr_28433_28479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (1))){
var inst_28345 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28345)){
var statearr_28434_28480 = state_28428__$1;
(statearr_28434_28480[(1)] = (2));

} else {
var statearr_28435_28481 = state_28428__$1;
(statearr_28435_28481[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (24))){
var inst_28420 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28436_28482 = state_28428__$1;
(statearr_28436_28482[(2)] = inst_28420);

(statearr_28436_28482[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (4))){
var inst_28426 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28428__$1,inst_28426);
} else {
if((state_val_28429 === (15))){
var inst_28424 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28437_28483 = state_28428__$1;
(statearr_28437_28483[(2)] = inst_28424);

(statearr_28437_28483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (21))){
var inst_28383 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28438_28484 = state_28428__$1;
(statearr_28438_28484[(2)] = inst_28383);

(statearr_28438_28484[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (31))){
var inst_28407 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28407)){
var statearr_28439_28485 = state_28428__$1;
(statearr_28439_28485[(1)] = (34));

} else {
var statearr_28440_28486 = state_28428__$1;
(statearr_28440_28486[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (32))){
var inst_28416 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28441_28487 = state_28428__$1;
(statearr_28441_28487[(2)] = inst_28416);

(statearr_28441_28487[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (33))){
var inst_28405 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28442_28488 = state_28428__$1;
(statearr_28442_28488[(2)] = inst_28405);

(statearr_28442_28488[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (13))){
var inst_28366 = figwheel.client.heads_up.clear.call(null);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(16),inst_28366);
} else {
if((state_val_28429 === (22))){
var inst_28387 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28388 = figwheel.client.heads_up.append_message.call(null,inst_28387);
var state_28428__$1 = state_28428;
var statearr_28443_28489 = state_28428__$1;
(statearr_28443_28489[(2)] = inst_28388);

(statearr_28443_28489[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (36))){
var inst_28414 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28444_28490 = state_28428__$1;
(statearr_28444_28490[(2)] = inst_28414);

(statearr_28444_28490[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (29))){
var inst_28398 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28445_28491 = state_28428__$1;
(statearr_28445_28491[(2)] = inst_28398);

(statearr_28445_28491[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (6))){
var inst_28347 = (state_28428[(7)]);
var state_28428__$1 = state_28428;
var statearr_28446_28492 = state_28428__$1;
(statearr_28446_28492[(2)] = inst_28347);

(statearr_28446_28492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (28))){
var inst_28394 = (state_28428[(2)]);
var inst_28395 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28396 = figwheel.client.heads_up.display_warning.call(null,inst_28395);
var state_28428__$1 = (function (){var statearr_28447 = state_28428;
(statearr_28447[(8)] = inst_28394);

return statearr_28447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(29),inst_28396);
} else {
if((state_val_28429 === (25))){
var inst_28392 = figwheel.client.heads_up.clear.call(null);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(28),inst_28392);
} else {
if((state_val_28429 === (34))){
var inst_28409 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(37),inst_28409);
} else {
if((state_val_28429 === (17))){
var inst_28374 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28448_28493 = state_28428__$1;
(statearr_28448_28493[(2)] = inst_28374);

(statearr_28448_28493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (3))){
var inst_28364 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28364)){
var statearr_28449_28494 = state_28428__$1;
(statearr_28449_28494[(1)] = (13));

} else {
var statearr_28450_28495 = state_28428__$1;
(statearr_28450_28495[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (12))){
var inst_28360 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28451_28496 = state_28428__$1;
(statearr_28451_28496[(2)] = inst_28360);

(statearr_28451_28496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (2))){
var inst_28347 = (state_28428[(7)]);
var inst_28347__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28428__$1 = (function (){var statearr_28452 = state_28428;
(statearr_28452[(7)] = inst_28347__$1);

return statearr_28452;
})();
if(cljs.core.truth_(inst_28347__$1)){
var statearr_28453_28497 = state_28428__$1;
(statearr_28453_28497[(1)] = (5));

} else {
var statearr_28454_28498 = state_28428__$1;
(statearr_28454_28498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (23))){
var inst_28390 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28390)){
var statearr_28455_28499 = state_28428__$1;
(statearr_28455_28499[(1)] = (25));

} else {
var statearr_28456_28500 = state_28428__$1;
(statearr_28456_28500[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (35))){
var state_28428__$1 = state_28428;
var statearr_28457_28501 = state_28428__$1;
(statearr_28457_28501[(2)] = null);

(statearr_28457_28501[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (19))){
var inst_28385 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28385)){
var statearr_28458_28502 = state_28428__$1;
(statearr_28458_28502[(1)] = (22));

} else {
var statearr_28459_28503 = state_28428__$1;
(statearr_28459_28503[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (11))){
var inst_28356 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28460_28504 = state_28428__$1;
(statearr_28460_28504[(2)] = inst_28356);

(statearr_28460_28504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (9))){
var inst_28358 = figwheel.client.heads_up.clear.call(null);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(12),inst_28358);
} else {
if((state_val_28429 === (5))){
var inst_28349 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28428__$1 = state_28428;
var statearr_28461_28505 = state_28428__$1;
(statearr_28461_28505[(2)] = inst_28349);

(statearr_28461_28505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (14))){
var inst_28376 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28376)){
var statearr_28462_28506 = state_28428__$1;
(statearr_28462_28506[(1)] = (18));

} else {
var statearr_28463_28507 = state_28428__$1;
(statearr_28463_28507[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (26))){
var inst_28400 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28400)){
var statearr_28464_28508 = state_28428__$1;
(statearr_28464_28508[(1)] = (30));

} else {
var statearr_28465_28509 = state_28428__$1;
(statearr_28465_28509[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (16))){
var inst_28368 = (state_28428[(2)]);
var inst_28369 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28370 = figwheel.client.format_messages.call(null,inst_28369);
var inst_28371 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28372 = figwheel.client.heads_up.display_error.call(null,inst_28370,inst_28371);
var state_28428__$1 = (function (){var statearr_28466 = state_28428;
(statearr_28466[(9)] = inst_28368);

return statearr_28466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(17),inst_28372);
} else {
if((state_val_28429 === (30))){
var inst_28402 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28403 = figwheel.client.heads_up.display_warning.call(null,inst_28402);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(33),inst_28403);
} else {
if((state_val_28429 === (10))){
var inst_28362 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28467_28510 = state_28428__$1;
(statearr_28467_28510[(2)] = inst_28362);

(statearr_28467_28510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (18))){
var inst_28378 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28379 = figwheel.client.format_messages.call(null,inst_28378);
var inst_28380 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28381 = figwheel.client.heads_up.display_error.call(null,inst_28379,inst_28380);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(21),inst_28381);
} else {
if((state_val_28429 === (37))){
var inst_28411 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28468_28511 = state_28428__$1;
(statearr_28468_28511[(2)] = inst_28411);

(statearr_28468_28511[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (8))){
var inst_28354 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28428__$1,(11),inst_28354);
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
var statearr_28472 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28472[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__);

(statearr_28472[(1)] = (1));

return statearr_28472;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____1 = (function (state_28428){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_28428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e28473){if((e28473 instanceof Object)){
var ex__20393__auto__ = e28473;
var statearr_28474_28512 = state_28428;
(statearr_28474_28512[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28513 = state_28428;
state_28428 = G__28513;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__ = function(state_28428){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____1.call(this,state_28428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__,msg_hist,msg_names,msg))
})();
var state__20412__auto__ = (function (){var statearr_28475 = f__20411__auto__.call(null);
(statearr_28475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_28475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__,msg_hist,msg_names,msg))
);

return c__20410__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20410__auto___28576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___28576,ch){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___28576,ch){
return (function (state_28559){
var state_val_28560 = (state_28559[(1)]);
if((state_val_28560 === (1))){
var state_28559__$1 = state_28559;
var statearr_28561_28577 = state_28559__$1;
(statearr_28561_28577[(2)] = null);

(statearr_28561_28577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (2))){
var state_28559__$1 = state_28559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28559__$1,(4),ch);
} else {
if((state_val_28560 === (3))){
var inst_28557 = (state_28559[(2)]);
var state_28559__$1 = state_28559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28559__$1,inst_28557);
} else {
if((state_val_28560 === (4))){
var inst_28547 = (state_28559[(7)]);
var inst_28547__$1 = (state_28559[(2)]);
var state_28559__$1 = (function (){var statearr_28562 = state_28559;
(statearr_28562[(7)] = inst_28547__$1);

return statearr_28562;
})();
if(cljs.core.truth_(inst_28547__$1)){
var statearr_28563_28578 = state_28559__$1;
(statearr_28563_28578[(1)] = (5));

} else {
var statearr_28564_28579 = state_28559__$1;
(statearr_28564_28579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (5))){
var inst_28547 = (state_28559[(7)]);
var inst_28549 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28547);
var state_28559__$1 = state_28559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28559__$1,(8),inst_28549);
} else {
if((state_val_28560 === (6))){
var state_28559__$1 = state_28559;
var statearr_28565_28580 = state_28559__$1;
(statearr_28565_28580[(2)] = null);

(statearr_28565_28580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (7))){
var inst_28555 = (state_28559[(2)]);
var state_28559__$1 = state_28559;
var statearr_28566_28581 = state_28559__$1;
(statearr_28566_28581[(2)] = inst_28555);

(statearr_28566_28581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (8))){
var inst_28551 = (state_28559[(2)]);
var state_28559__$1 = (function (){var statearr_28567 = state_28559;
(statearr_28567[(8)] = inst_28551);

return statearr_28567;
})();
var statearr_28568_28582 = state_28559__$1;
(statearr_28568_28582[(2)] = null);

(statearr_28568_28582[(1)] = (2));


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
});})(c__20410__auto___28576,ch))
;
return ((function (switch__20389__auto__,c__20410__auto___28576,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20390__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20390__auto____0 = (function (){
var statearr_28572 = [null,null,null,null,null,null,null,null,null];
(statearr_28572[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20390__auto__);

(statearr_28572[(1)] = (1));

return statearr_28572;
});
var figwheel$client$heads_up_plugin_$_state_machine__20390__auto____1 = (function (state_28559){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_28559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e28573){if((e28573 instanceof Object)){
var ex__20393__auto__ = e28573;
var statearr_28574_28583 = state_28559;
(statearr_28574_28583[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28584 = state_28559;
state_28559 = G__28584;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20390__auto__ = function(state_28559){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20390__auto____1.call(this,state_28559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20390__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20390__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___28576,ch))
})();
var state__20412__auto__ = (function (){var statearr_28575 = f__20411__auto__.call(null);
(statearr_28575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___28576);

return statearr_28575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___28576,ch))
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
return (function (state_28605){
var state_val_28606 = (state_28605[(1)]);
if((state_val_28606 === (1))){
var inst_28600 = cljs.core.async.timeout.call(null,(3000));
var state_28605__$1 = state_28605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28605__$1,(2),inst_28600);
} else {
if((state_val_28606 === (2))){
var inst_28602 = (state_28605[(2)]);
var inst_28603 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28605__$1 = (function (){var statearr_28607 = state_28605;
(statearr_28607[(7)] = inst_28602);

return statearr_28607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28605__$1,inst_28603);
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
var statearr_28611 = [null,null,null,null,null,null,null,null];
(statearr_28611[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__);

(statearr_28611[(1)] = (1));

return statearr_28611;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____1 = (function (state_28605){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_28605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e28612){if((e28612 instanceof Object)){
var ex__20393__auto__ = e28612;
var statearr_28613_28615 = state_28605;
(statearr_28613_28615[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28616 = state_28605;
state_28605 = G__28616;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__ = function(state_28605){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____1.call(this,state_28605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20390__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_28614 = f__20411__auto__.call(null);
(statearr_28614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_28614;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28617){
var map__28624 = p__28617;
var map__28624__$1 = ((((!((map__28624 == null)))?((((map__28624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28624):map__28624);
var ed = map__28624__$1;
var formatted_exception = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28626_28630 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28627_28631 = null;
var count__28628_28632 = (0);
var i__28629_28633 = (0);
while(true){
if((i__28629_28633 < count__28628_28632)){
var msg_28634 = cljs.core._nth.call(null,chunk__28627_28631,i__28629_28633);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28634);

var G__28635 = seq__28626_28630;
var G__28636 = chunk__28627_28631;
var G__28637 = count__28628_28632;
var G__28638 = (i__28629_28633 + (1));
seq__28626_28630 = G__28635;
chunk__28627_28631 = G__28636;
count__28628_28632 = G__28637;
i__28629_28633 = G__28638;
continue;
} else {
var temp__4425__auto___28639 = cljs.core.seq.call(null,seq__28626_28630);
if(temp__4425__auto___28639){
var seq__28626_28640__$1 = temp__4425__auto___28639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28626_28640__$1)){
var c__19094__auto___28641 = cljs.core.chunk_first.call(null,seq__28626_28640__$1);
var G__28642 = cljs.core.chunk_rest.call(null,seq__28626_28640__$1);
var G__28643 = c__19094__auto___28641;
var G__28644 = cljs.core.count.call(null,c__19094__auto___28641);
var G__28645 = (0);
seq__28626_28630 = G__28642;
chunk__28627_28631 = G__28643;
count__28628_28632 = G__28644;
i__28629_28633 = G__28645;
continue;
} else {
var msg_28646 = cljs.core.first.call(null,seq__28626_28640__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28646);

var G__28647 = cljs.core.next.call(null,seq__28626_28640__$1);
var G__28648 = null;
var G__28649 = (0);
var G__28650 = (0);
seq__28626_28630 = G__28647;
chunk__28627_28631 = G__28648;
count__28628_28632 = G__28649;
i__28629_28633 = G__28650;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28651){
var map__28654 = p__28651;
var map__28654__$1 = ((((!((map__28654 == null)))?((((map__28654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28654):map__28654);
var w = map__28654__$1;
var message = cljs.core.get.call(null,map__28654__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28662 = cljs.core.seq.call(null,plugins);
var chunk__28663 = null;
var count__28664 = (0);
var i__28665 = (0);
while(true){
if((i__28665 < count__28664)){
var vec__28666 = cljs.core._nth.call(null,chunk__28663,i__28665);
var k = cljs.core.nth.call(null,vec__28666,(0),null);
var plugin = cljs.core.nth.call(null,vec__28666,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28668 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28662,chunk__28663,count__28664,i__28665,pl_28668,vec__28666,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28668.call(null,msg_hist);
});})(seq__28662,chunk__28663,count__28664,i__28665,pl_28668,vec__28666,k,plugin))
);
} else {
}

var G__28669 = seq__28662;
var G__28670 = chunk__28663;
var G__28671 = count__28664;
var G__28672 = (i__28665 + (1));
seq__28662 = G__28669;
chunk__28663 = G__28670;
count__28664 = G__28671;
i__28665 = G__28672;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28662);
if(temp__4425__auto__){
var seq__28662__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28662__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__28662__$1);
var G__28673 = cljs.core.chunk_rest.call(null,seq__28662__$1);
var G__28674 = c__19094__auto__;
var G__28675 = cljs.core.count.call(null,c__19094__auto__);
var G__28676 = (0);
seq__28662 = G__28673;
chunk__28663 = G__28674;
count__28664 = G__28675;
i__28665 = G__28676;
continue;
} else {
var vec__28667 = cljs.core.first.call(null,seq__28662__$1);
var k = cljs.core.nth.call(null,vec__28667,(0),null);
var plugin = cljs.core.nth.call(null,vec__28667,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28677 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28662,chunk__28663,count__28664,i__28665,pl_28677,vec__28667,k,plugin,seq__28662__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28677.call(null,msg_hist);
});})(seq__28662,chunk__28663,count__28664,i__28665,pl_28677,vec__28667,k,plugin,seq__28662__$1,temp__4425__auto__))
);
} else {
}

var G__28678 = cljs.core.next.call(null,seq__28662__$1);
var G__28679 = null;
var G__28680 = (0);
var G__28681 = (0);
seq__28662 = G__28678;
chunk__28663 = G__28679;
count__28664 = G__28680;
i__28665 = G__28681;
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
var args28682 = [];
var len__19349__auto___28685 = arguments.length;
var i__19350__auto___28686 = (0);
while(true){
if((i__19350__auto___28686 < len__19349__auto___28685)){
args28682.push((arguments[i__19350__auto___28686]));

var G__28687 = (i__19350__auto___28686 + (1));
i__19350__auto___28686 = G__28687;
continue;
} else {
}
break;
}

var G__28684 = args28682.length;
switch (G__28684) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28682.length)].join('')));

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
var len__19349__auto___28693 = arguments.length;
var i__19350__auto___28694 = (0);
while(true){
if((i__19350__auto___28694 < len__19349__auto___28693)){
args__19356__auto__.push((arguments[i__19350__auto___28694]));

var G__28695 = (i__19350__auto___28694 + (1));
i__19350__auto___28694 = G__28695;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((0) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28690){
var map__28691 = p__28690;
var map__28691__$1 = ((((!((map__28691 == null)))?((((map__28691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28691):map__28691);
var opts = map__28691__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28689){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28689));
});

//# sourceMappingURL=client.js.map?rel=1457675249328