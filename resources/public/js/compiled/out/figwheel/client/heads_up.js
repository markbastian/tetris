// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19356__auto__ = [];
var len__19349__auto___29086 = arguments.length;
var i__19350__auto___29087 = (0);
while(true){
if((i__19350__auto___29087 < len__19349__auto___29086)){
args__19356__auto__.push((arguments[i__19350__auto___29087]));

var G__29088 = (i__19350__auto___29087 + (1));
i__19350__auto___29087 = G__29088;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((2) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19357__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29078_29089 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29079_29090 = null;
var count__29080_29091 = (0);
var i__29081_29092 = (0);
while(true){
if((i__29081_29092 < count__29080_29091)){
var k_29093 = cljs.core._nth.call(null,chunk__29079_29090,i__29081_29092);
e.setAttribute(cljs.core.name.call(null,k_29093),cljs.core.get.call(null,attrs,k_29093));

var G__29094 = seq__29078_29089;
var G__29095 = chunk__29079_29090;
var G__29096 = count__29080_29091;
var G__29097 = (i__29081_29092 + (1));
seq__29078_29089 = G__29094;
chunk__29079_29090 = G__29095;
count__29080_29091 = G__29096;
i__29081_29092 = G__29097;
continue;
} else {
var temp__4425__auto___29098 = cljs.core.seq.call(null,seq__29078_29089);
if(temp__4425__auto___29098){
var seq__29078_29099__$1 = temp__4425__auto___29098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29078_29099__$1)){
var c__19094__auto___29100 = cljs.core.chunk_first.call(null,seq__29078_29099__$1);
var G__29101 = cljs.core.chunk_rest.call(null,seq__29078_29099__$1);
var G__29102 = c__19094__auto___29100;
var G__29103 = cljs.core.count.call(null,c__19094__auto___29100);
var G__29104 = (0);
seq__29078_29089 = G__29101;
chunk__29079_29090 = G__29102;
count__29080_29091 = G__29103;
i__29081_29092 = G__29104;
continue;
} else {
var k_29105 = cljs.core.first.call(null,seq__29078_29099__$1);
e.setAttribute(cljs.core.name.call(null,k_29105),cljs.core.get.call(null,attrs,k_29105));

var G__29106 = cljs.core.next.call(null,seq__29078_29099__$1);
var G__29107 = null;
var G__29108 = (0);
var G__29109 = (0);
seq__29078_29089 = G__29106;
chunk__29079_29090 = G__29107;
count__29080_29091 = G__29108;
i__29081_29092 = G__29109;
continue;
}
} else {
}
}
break;
}

var seq__29082_29110 = cljs.core.seq.call(null,children);
var chunk__29083_29111 = null;
var count__29084_29112 = (0);
var i__29085_29113 = (0);
while(true){
if((i__29085_29113 < count__29084_29112)){
var ch_29114 = cljs.core._nth.call(null,chunk__29083_29111,i__29085_29113);
e.appendChild(ch_29114);

var G__29115 = seq__29082_29110;
var G__29116 = chunk__29083_29111;
var G__29117 = count__29084_29112;
var G__29118 = (i__29085_29113 + (1));
seq__29082_29110 = G__29115;
chunk__29083_29111 = G__29116;
count__29084_29112 = G__29117;
i__29085_29113 = G__29118;
continue;
} else {
var temp__4425__auto___29119 = cljs.core.seq.call(null,seq__29082_29110);
if(temp__4425__auto___29119){
var seq__29082_29120__$1 = temp__4425__auto___29119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29082_29120__$1)){
var c__19094__auto___29121 = cljs.core.chunk_first.call(null,seq__29082_29120__$1);
var G__29122 = cljs.core.chunk_rest.call(null,seq__29082_29120__$1);
var G__29123 = c__19094__auto___29121;
var G__29124 = cljs.core.count.call(null,c__19094__auto___29121);
var G__29125 = (0);
seq__29082_29110 = G__29122;
chunk__29083_29111 = G__29123;
count__29084_29112 = G__29124;
i__29085_29113 = G__29125;
continue;
} else {
var ch_29126 = cljs.core.first.call(null,seq__29082_29120__$1);
e.appendChild(ch_29126);

var G__29127 = cljs.core.next.call(null,seq__29082_29120__$1);
var G__29128 = null;
var G__29129 = (0);
var G__29130 = (0);
seq__29082_29110 = G__29127;
chunk__29083_29111 = G__29128;
count__29084_29112 = G__29129;
i__29085_29113 = G__29130;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29075){
var G__29076 = cljs.core.first.call(null,seq29075);
var seq29075__$1 = cljs.core.next.call(null,seq29075);
var G__29077 = cljs.core.first.call(null,seq29075__$1);
var seq29075__$2 = cljs.core.next.call(null,seq29075__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29076,G__29077,seq29075__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19204__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19206__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19207__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19208__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19204__auto__,prefer_table__19205__auto__,method_cache__19206__auto__,cached_hierarchy__19207__auto__,hierarchy__19208__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19204__auto__,prefer_table__19205__auto__,method_cache__19206__auto__,cached_hierarchy__19207__auto__,hierarchy__19208__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19208__auto__,method_table__19204__auto__,prefer_table__19205__auto__,method_cache__19206__auto__,cached_hierarchy__19207__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29131 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29131.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29131.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_29131.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29131);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29132,st_map){
var map__29137 = p__29132;
var map__29137__$1 = ((((!((map__29137 == null)))?((((map__29137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29137):map__29137);
var container_el = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29137,map__29137__$1,container_el){
return (function (p__29139){
var vec__29140 = p__29139;
var k = cljs.core.nth.call(null,vec__29140,(0),null);
var v = cljs.core.nth.call(null,vec__29140,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29137,map__29137__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29141,dom_str){
var map__29144 = p__29141;
var map__29144__$1 = ((((!((map__29144 == null)))?((((map__29144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29144):map__29144);
var c = map__29144__$1;
var content_area_el = cljs.core.get.call(null,map__29144__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29146){
var map__29149 = p__29146;
var map__29149__$1 = ((((!((map__29149 == null)))?((((map__29149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29149):map__29149);
var content_area_el = cljs.core.get.call(null,map__29149__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_29192){
var state_val_29193 = (state_29192[(1)]);
if((state_val_29193 === (1))){
var inst_29177 = (state_29192[(7)]);
var inst_29177__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29178 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29179 = ["10px","10px","100%","68px","1.0"];
var inst_29180 = cljs.core.PersistentHashMap.fromArrays(inst_29178,inst_29179);
var inst_29181 = cljs.core.merge.call(null,inst_29180,style);
var inst_29182 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29177__$1,inst_29181);
var inst_29183 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29177__$1,msg);
var inst_29184 = cljs.core.async.timeout.call(null,(300));
var state_29192__$1 = (function (){var statearr_29194 = state_29192;
(statearr_29194[(8)] = inst_29183);

(statearr_29194[(7)] = inst_29177__$1);

(statearr_29194[(9)] = inst_29182);

return statearr_29194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29192__$1,(2),inst_29184);
} else {
if((state_val_29193 === (2))){
var inst_29177 = (state_29192[(7)]);
var inst_29186 = (state_29192[(2)]);
var inst_29187 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29188 = ["auto"];
var inst_29189 = cljs.core.PersistentHashMap.fromArrays(inst_29187,inst_29188);
var inst_29190 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29177,inst_29189);
var state_29192__$1 = (function (){var statearr_29195 = state_29192;
(statearr_29195[(10)] = inst_29186);

return statearr_29195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29192__$1,inst_29190);
} else {
return null;
}
}
});})(c__20410__auto__))
;
return ((function (switch__20389__auto__,c__20410__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____0 = (function (){
var statearr_29199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29199[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__);

(statearr_29199[(1)] = (1));

return statearr_29199;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____1 = (function (state_29192){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_29192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e29200){if((e29200 instanceof Object)){
var ex__20393__auto__ = e29200;
var statearr_29201_29203 = state_29192;
(statearr_29201_29203[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29204 = state_29192;
state_29192 = G__29204;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__ = function(state_29192){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____1.call(this,state_29192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_29202 = f__20411__auto__.call(null);
(statearr_29202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_29202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__))
);

return c__20410__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__29206 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__29206,(0),null);
var ln = cljs.core.nth.call(null,vec__29206,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29209 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29209,(0),null);
var file_line = cljs.core.nth.call(null,vec__29209,(1),null);
var file_column = cljs.core.nth.call(null,vec__29209,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29209,file_name,file_line,file_column){
return (function (p1__29207_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29207_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29209,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18291__auto__ = file_line;
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
var and__18279__auto__ = cause;
if(cljs.core.truth_(and__18279__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18279__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29212 = figwheel.client.heads_up.ensure_container.call(null);
var map__29212__$1 = ((((!((map__29212 == null)))?((((map__29212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29212):map__29212);
var content_area_el = cljs.core.get.call(null,map__29212__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_29260){
var state_val_29261 = (state_29260[(1)]);
if((state_val_29261 === (1))){
var inst_29243 = (state_29260[(7)]);
var inst_29243__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29244 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29245 = ["0.0"];
var inst_29246 = cljs.core.PersistentHashMap.fromArrays(inst_29244,inst_29245);
var inst_29247 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29243__$1,inst_29246);
var inst_29248 = cljs.core.async.timeout.call(null,(300));
var state_29260__$1 = (function (){var statearr_29262 = state_29260;
(statearr_29262[(7)] = inst_29243__$1);

(statearr_29262[(8)] = inst_29247);

return statearr_29262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(2),inst_29248);
} else {
if((state_val_29261 === (2))){
var inst_29243 = (state_29260[(7)]);
var inst_29250 = (state_29260[(2)]);
var inst_29251 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29252 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29253 = cljs.core.PersistentHashMap.fromArrays(inst_29251,inst_29252);
var inst_29254 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29243,inst_29253);
var inst_29255 = cljs.core.async.timeout.call(null,(200));
var state_29260__$1 = (function (){var statearr_29263 = state_29260;
(statearr_29263[(9)] = inst_29250);

(statearr_29263[(10)] = inst_29254);

return statearr_29263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29260__$1,(3),inst_29255);
} else {
if((state_val_29261 === (3))){
var inst_29243 = (state_29260[(7)]);
var inst_29257 = (state_29260[(2)]);
var inst_29258 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29243,"");
var state_29260__$1 = (function (){var statearr_29264 = state_29260;
(statearr_29264[(11)] = inst_29257);

return statearr_29264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29260__$1,inst_29258);
} else {
return null;
}
}
}
});})(c__20410__auto__))
;
return ((function (switch__20389__auto__,c__20410__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20390__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20390__auto____0 = (function (){
var statearr_29268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29268[(0)] = figwheel$client$heads_up$clear_$_state_machine__20390__auto__);

(statearr_29268[(1)] = (1));

return statearr_29268;
});
var figwheel$client$heads_up$clear_$_state_machine__20390__auto____1 = (function (state_29260){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_29260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e29269){if((e29269 instanceof Object)){
var ex__20393__auto__ = e29269;
var statearr_29270_29272 = state_29260;
(statearr_29270_29272[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29273 = state_29260;
state_29260 = G__29273;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20390__auto__ = function(state_29260){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20390__auto____1.call(this,state_29260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20390__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20390__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_29271 = f__20411__auto__.call(null);
(statearr_29271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_29271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__))
);

return c__20410__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_29305){
var state_val_29306 = (state_29305[(1)]);
if((state_val_29306 === (1))){
var inst_29295 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29305__$1 = state_29305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29305__$1,(2),inst_29295);
} else {
if((state_val_29306 === (2))){
var inst_29297 = (state_29305[(2)]);
var inst_29298 = cljs.core.async.timeout.call(null,(400));
var state_29305__$1 = (function (){var statearr_29307 = state_29305;
(statearr_29307[(7)] = inst_29297);

return statearr_29307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29305__$1,(3),inst_29298);
} else {
if((state_val_29306 === (3))){
var inst_29300 = (state_29305[(2)]);
var inst_29301 = figwheel.client.heads_up.clear.call(null);
var state_29305__$1 = (function (){var statearr_29308 = state_29305;
(statearr_29308[(8)] = inst_29300);

return statearr_29308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29305__$1,(4),inst_29301);
} else {
if((state_val_29306 === (4))){
var inst_29303 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29305__$1,inst_29303);
} else {
return null;
}
}
}
}
});})(c__20410__auto__))
;
return ((function (switch__20389__auto__,c__20410__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____0 = (function (){
var statearr_29312 = [null,null,null,null,null,null,null,null,null];
(statearr_29312[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__);

(statearr_29312[(1)] = (1));

return statearr_29312;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____1 = (function (state_29305){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_29305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e29313){if((e29313 instanceof Object)){
var ex__20393__auto__ = e29313;
var statearr_29314_29316 = state_29305;
(statearr_29314_29316[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29317 = state_29305;
state_29305 = G__29317;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__ = function(state_29305){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____1.call(this,state_29305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_29315 = f__20411__auto__.call(null);
(statearr_29315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_29315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__))
);

return c__20410__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1456984147245