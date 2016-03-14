// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27550_27564 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27551_27565 = null;
var count__27552_27566 = (0);
var i__27553_27567 = (0);
while(true){
if((i__27553_27567 < count__27552_27566)){
var f_27568 = cljs.core._nth.call(null,chunk__27551_27565,i__27553_27567);
cljs.core.println.call(null,"  ",f_27568);

var G__27569 = seq__27550_27564;
var G__27570 = chunk__27551_27565;
var G__27571 = count__27552_27566;
var G__27572 = (i__27553_27567 + (1));
seq__27550_27564 = G__27569;
chunk__27551_27565 = G__27570;
count__27552_27566 = G__27571;
i__27553_27567 = G__27572;
continue;
} else {
var temp__4425__auto___27573 = cljs.core.seq.call(null,seq__27550_27564);
if(temp__4425__auto___27573){
var seq__27550_27574__$1 = temp__4425__auto___27573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27550_27574__$1)){
var c__19094__auto___27575 = cljs.core.chunk_first.call(null,seq__27550_27574__$1);
var G__27576 = cljs.core.chunk_rest.call(null,seq__27550_27574__$1);
var G__27577 = c__19094__auto___27575;
var G__27578 = cljs.core.count.call(null,c__19094__auto___27575);
var G__27579 = (0);
seq__27550_27564 = G__27576;
chunk__27551_27565 = G__27577;
count__27552_27566 = G__27578;
i__27553_27567 = G__27579;
continue;
} else {
var f_27580 = cljs.core.first.call(null,seq__27550_27574__$1);
cljs.core.println.call(null,"  ",f_27580);

var G__27581 = cljs.core.next.call(null,seq__27550_27574__$1);
var G__27582 = null;
var G__27583 = (0);
var G__27584 = (0);
seq__27550_27564 = G__27581;
chunk__27551_27565 = G__27582;
count__27552_27566 = G__27583;
i__27553_27567 = G__27584;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27585 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18291__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27585);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27585)))?cljs.core.second.call(null,arglists_27585):arglists_27585));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27554 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27555 = null;
var count__27556 = (0);
var i__27557 = (0);
while(true){
if((i__27557 < count__27556)){
var vec__27558 = cljs.core._nth.call(null,chunk__27555,i__27557);
var name = cljs.core.nth.call(null,vec__27558,(0),null);
var map__27559 = cljs.core.nth.call(null,vec__27558,(1),null);
var map__27559__$1 = ((((!((map__27559 == null)))?((((map__27559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27559):map__27559);
var doc = cljs.core.get.call(null,map__27559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27559__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27586 = seq__27554;
var G__27587 = chunk__27555;
var G__27588 = count__27556;
var G__27589 = (i__27557 + (1));
seq__27554 = G__27586;
chunk__27555 = G__27587;
count__27556 = G__27588;
i__27557 = G__27589;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27554);
if(temp__4425__auto__){
var seq__27554__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27554__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__27554__$1);
var G__27590 = cljs.core.chunk_rest.call(null,seq__27554__$1);
var G__27591 = c__19094__auto__;
var G__27592 = cljs.core.count.call(null,c__19094__auto__);
var G__27593 = (0);
seq__27554 = G__27590;
chunk__27555 = G__27591;
count__27556 = G__27592;
i__27557 = G__27593;
continue;
} else {
var vec__27561 = cljs.core.first.call(null,seq__27554__$1);
var name = cljs.core.nth.call(null,vec__27561,(0),null);
var map__27562 = cljs.core.nth.call(null,vec__27561,(1),null);
var map__27562__$1 = ((((!((map__27562 == null)))?((((map__27562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27562):map__27562);
var doc = cljs.core.get.call(null,map__27562__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27562__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27594 = cljs.core.next.call(null,seq__27554__$1);
var G__27595 = null;
var G__27596 = (0);
var G__27597 = (0);
seq__27554 = G__27594;
chunk__27555 = G__27595;
count__27556 = G__27596;
i__27557 = G__27597;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1457675248601