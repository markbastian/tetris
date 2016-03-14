// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19356__auto__ = [];
var len__19349__auto___27735 = arguments.length;
var i__19350__auto___27736 = (0);
while(true){
if((i__19350__auto___27736 < len__19349__auto___27735)){
args__19356__auto__.push((arguments[i__19350__auto___27736]));

var G__27737 = (i__19350__auto___27736 + (1));
i__19350__auto___27736 = G__27737;
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
var seq__27727_27738 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27728_27739 = null;
var count__27729_27740 = (0);
var i__27730_27741 = (0);
while(true){
if((i__27730_27741 < count__27729_27740)){
var k_27742 = cljs.core._nth.call(null,chunk__27728_27739,i__27730_27741);
e.setAttribute(cljs.core.name.call(null,k_27742),cljs.core.get.call(null,attrs,k_27742));

var G__27743 = seq__27727_27738;
var G__27744 = chunk__27728_27739;
var G__27745 = count__27729_27740;
var G__27746 = (i__27730_27741 + (1));
seq__27727_27738 = G__27743;
chunk__27728_27739 = G__27744;
count__27729_27740 = G__27745;
i__27730_27741 = G__27746;
continue;
} else {
var temp__4425__auto___27747 = cljs.core.seq.call(null,seq__27727_27738);
if(temp__4425__auto___27747){
var seq__27727_27748__$1 = temp__4425__auto___27747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27727_27748__$1)){
var c__19094__auto___27749 = cljs.core.chunk_first.call(null,seq__27727_27748__$1);
var G__27750 = cljs.core.chunk_rest.call(null,seq__27727_27748__$1);
var G__27751 = c__19094__auto___27749;
var G__27752 = cljs.core.count.call(null,c__19094__auto___27749);
var G__27753 = (0);
seq__27727_27738 = G__27750;
chunk__27728_27739 = G__27751;
count__27729_27740 = G__27752;
i__27730_27741 = G__27753;
continue;
} else {
var k_27754 = cljs.core.first.call(null,seq__27727_27748__$1);
e.setAttribute(cljs.core.name.call(null,k_27754),cljs.core.get.call(null,attrs,k_27754));

var G__27755 = cljs.core.next.call(null,seq__27727_27748__$1);
var G__27756 = null;
var G__27757 = (0);
var G__27758 = (0);
seq__27727_27738 = G__27755;
chunk__27728_27739 = G__27756;
count__27729_27740 = G__27757;
i__27730_27741 = G__27758;
continue;
}
} else {
}
}
break;
}

var seq__27731_27759 = cljs.core.seq.call(null,children);
var chunk__27732_27760 = null;
var count__27733_27761 = (0);
var i__27734_27762 = (0);
while(true){
if((i__27734_27762 < count__27733_27761)){
var ch_27763 = cljs.core._nth.call(null,chunk__27732_27760,i__27734_27762);
e.appendChild(ch_27763);

var G__27764 = seq__27731_27759;
var G__27765 = chunk__27732_27760;
var G__27766 = count__27733_27761;
var G__27767 = (i__27734_27762 + (1));
seq__27731_27759 = G__27764;
chunk__27732_27760 = G__27765;
count__27733_27761 = G__27766;
i__27734_27762 = G__27767;
continue;
} else {
var temp__4425__auto___27768 = cljs.core.seq.call(null,seq__27731_27759);
if(temp__4425__auto___27768){
var seq__27731_27769__$1 = temp__4425__auto___27768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27731_27769__$1)){
var c__19094__auto___27770 = cljs.core.chunk_first.call(null,seq__27731_27769__$1);
var G__27771 = cljs.core.chunk_rest.call(null,seq__27731_27769__$1);
var G__27772 = c__19094__auto___27770;
var G__27773 = cljs.core.count.call(null,c__19094__auto___27770);
var G__27774 = (0);
seq__27731_27759 = G__27771;
chunk__27732_27760 = G__27772;
count__27733_27761 = G__27773;
i__27734_27762 = G__27774;
continue;
} else {
var ch_27775 = cljs.core.first.call(null,seq__27731_27769__$1);
e.appendChild(ch_27775);

var G__27776 = cljs.core.next.call(null,seq__27731_27769__$1);
var G__27777 = null;
var G__27778 = (0);
var G__27779 = (0);
seq__27731_27759 = G__27776;
chunk__27732_27760 = G__27777;
count__27733_27761 = G__27778;
i__27734_27762 = G__27779;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27724){
var G__27725 = cljs.core.first.call(null,seq27724);
var seq27724__$1 = cljs.core.next.call(null,seq27724);
var G__27726 = cljs.core.first.call(null,seq27724__$1);
var seq27724__$2 = cljs.core.next.call(null,seq27724__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27725,G__27726,seq27724__$2);
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
var el_27780 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27780.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27780.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27780.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27780);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27781,st_map){
var map__27786 = p__27781;
var map__27786__$1 = ((((!((map__27786 == null)))?((((map__27786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27786):map__27786);
var container_el = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27786,map__27786__$1,container_el){
return (function (p__27788){
var vec__27789 = p__27788;
var k = cljs.core.nth.call(null,vec__27789,(0),null);
var v = cljs.core.nth.call(null,vec__27789,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27786,map__27786__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27790,dom_str){
var map__27793 = p__27790;
var map__27793__$1 = ((((!((map__27793 == null)))?((((map__27793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27793):map__27793);
var c = map__27793__$1;
var content_area_el = cljs.core.get.call(null,map__27793__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27795){
var map__27798 = p__27795;
var map__27798__$1 = ((((!((map__27798 == null)))?((((map__27798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27798):map__27798);
var content_area_el = cljs.core.get.call(null,map__27798__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_27841){
var state_val_27842 = (state_27841[(1)]);
if((state_val_27842 === (1))){
var inst_27826 = (state_27841[(7)]);
var inst_27826__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27827 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27828 = ["10px","10px","100%","68px","1.0"];
var inst_27829 = cljs.core.PersistentHashMap.fromArrays(inst_27827,inst_27828);
var inst_27830 = cljs.core.merge.call(null,inst_27829,style);
var inst_27831 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27826__$1,inst_27830);
var inst_27832 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27826__$1,msg);
var inst_27833 = cljs.core.async.timeout.call(null,(300));
var state_27841__$1 = (function (){var statearr_27843 = state_27841;
(statearr_27843[(7)] = inst_27826__$1);

(statearr_27843[(8)] = inst_27831);

(statearr_27843[(9)] = inst_27832);

return statearr_27843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27841__$1,(2),inst_27833);
} else {
if((state_val_27842 === (2))){
var inst_27826 = (state_27841[(7)]);
var inst_27835 = (state_27841[(2)]);
var inst_27836 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27837 = ["auto"];
var inst_27838 = cljs.core.PersistentHashMap.fromArrays(inst_27836,inst_27837);
var inst_27839 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27826,inst_27838);
var state_27841__$1 = (function (){var statearr_27844 = state_27841;
(statearr_27844[(10)] = inst_27835);

return statearr_27844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27841__$1,inst_27839);
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
var statearr_27848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27848[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__);

(statearr_27848[(1)] = (1));

return statearr_27848;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____1 = (function (state_27841){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27849){if((e27849 instanceof Object)){
var ex__20393__auto__ = e27849;
var statearr_27850_27852 = state_27841;
(statearr_27850_27852[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27853 = state_27841;
state_27841 = G__27853;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__ = function(state_27841){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____1.call(this,state_27841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_27851 = f__20411__auto__.call(null);
(statearr_27851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_27851;
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
var vec__27855 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__27855,(0),null);
var ln = cljs.core.nth.call(null,vec__27855,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27858 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27858,(0),null);
var file_line = cljs.core.nth.call(null,vec__27858,(1),null);
var file_column = cljs.core.nth.call(null,vec__27858,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27858,file_name,file_line,file_column){
return (function (p1__27856_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27856_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27858,file_name,file_line,file_column))
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
var map__27861 = figwheel.client.heads_up.ensure_container.call(null);
var map__27861__$1 = ((((!((map__27861 == null)))?((((map__27861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27861):map__27861);
var content_area_el = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_27909){
var state_val_27910 = (state_27909[(1)]);
if((state_val_27910 === (1))){
var inst_27892 = (state_27909[(7)]);
var inst_27892__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27893 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27894 = ["0.0"];
var inst_27895 = cljs.core.PersistentHashMap.fromArrays(inst_27893,inst_27894);
var inst_27896 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27892__$1,inst_27895);
var inst_27897 = cljs.core.async.timeout.call(null,(300));
var state_27909__$1 = (function (){var statearr_27911 = state_27909;
(statearr_27911[(8)] = inst_27896);

(statearr_27911[(7)] = inst_27892__$1);

return statearr_27911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27909__$1,(2),inst_27897);
} else {
if((state_val_27910 === (2))){
var inst_27892 = (state_27909[(7)]);
var inst_27899 = (state_27909[(2)]);
var inst_27900 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27901 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27902 = cljs.core.PersistentHashMap.fromArrays(inst_27900,inst_27901);
var inst_27903 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27892,inst_27902);
var inst_27904 = cljs.core.async.timeout.call(null,(200));
var state_27909__$1 = (function (){var statearr_27912 = state_27909;
(statearr_27912[(9)] = inst_27903);

(statearr_27912[(10)] = inst_27899);

return statearr_27912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27909__$1,(3),inst_27904);
} else {
if((state_val_27910 === (3))){
var inst_27892 = (state_27909[(7)]);
var inst_27906 = (state_27909[(2)]);
var inst_27907 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27892,"");
var state_27909__$1 = (function (){var statearr_27913 = state_27909;
(statearr_27913[(11)] = inst_27906);

return statearr_27913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27909__$1,inst_27907);
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
var statearr_27917 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27917[(0)] = figwheel$client$heads_up$clear_$_state_machine__20390__auto__);

(statearr_27917[(1)] = (1));

return statearr_27917;
});
var figwheel$client$heads_up$clear_$_state_machine__20390__auto____1 = (function (state_27909){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27918){if((e27918 instanceof Object)){
var ex__20393__auto__ = e27918;
var statearr_27919_27921 = state_27909;
(statearr_27919_27921[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27922 = state_27909;
state_27909 = G__27922;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20390__auto__ = function(state_27909){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20390__auto____1.call(this,state_27909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20390__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20390__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_27920 = f__20411__auto__.call(null);
(statearr_27920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_27920;
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
return (function (state_27954){
var state_val_27955 = (state_27954[(1)]);
if((state_val_27955 === (1))){
var inst_27944 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27954__$1 = state_27954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27954__$1,(2),inst_27944);
} else {
if((state_val_27955 === (2))){
var inst_27946 = (state_27954[(2)]);
var inst_27947 = cljs.core.async.timeout.call(null,(400));
var state_27954__$1 = (function (){var statearr_27956 = state_27954;
(statearr_27956[(7)] = inst_27946);

return statearr_27956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27954__$1,(3),inst_27947);
} else {
if((state_val_27955 === (3))){
var inst_27949 = (state_27954[(2)]);
var inst_27950 = figwheel.client.heads_up.clear.call(null);
var state_27954__$1 = (function (){var statearr_27957 = state_27954;
(statearr_27957[(8)] = inst_27949);

return statearr_27957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27954__$1,(4),inst_27950);
} else {
if((state_val_27955 === (4))){
var inst_27952 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27954__$1,inst_27952);
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
var statearr_27961 = [null,null,null,null,null,null,null,null,null];
(statearr_27961[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__);

(statearr_27961[(1)] = (1));

return statearr_27961;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____1 = (function (state_27954){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27962){if((e27962 instanceof Object)){
var ex__20393__auto__ = e27962;
var statearr_27963_27965 = state_27954;
(statearr_27963_27965[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27966 = state_27954;
state_27954 = G__27966;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__ = function(state_27954){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____1.call(this,state_27954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_27964 = f__20411__auto__.call(null);
(statearr_27964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_27964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__))
);

return c__20410__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1457675249015