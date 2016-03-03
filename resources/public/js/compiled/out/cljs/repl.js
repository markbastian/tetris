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
var seq__28901_28915 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28902_28916 = null;
var count__28903_28917 = (0);
var i__28904_28918 = (0);
while(true){
if((i__28904_28918 < count__28903_28917)){
var f_28919 = cljs.core._nth.call(null,chunk__28902_28916,i__28904_28918);
cljs.core.println.call(null,"  ",f_28919);

var G__28920 = seq__28901_28915;
var G__28921 = chunk__28902_28916;
var G__28922 = count__28903_28917;
var G__28923 = (i__28904_28918 + (1));
seq__28901_28915 = G__28920;
chunk__28902_28916 = G__28921;
count__28903_28917 = G__28922;
i__28904_28918 = G__28923;
continue;
} else {
var temp__4425__auto___28924 = cljs.core.seq.call(null,seq__28901_28915);
if(temp__4425__auto___28924){
var seq__28901_28925__$1 = temp__4425__auto___28924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28901_28925__$1)){
var c__19094__auto___28926 = cljs.core.chunk_first.call(null,seq__28901_28925__$1);
var G__28927 = cljs.core.chunk_rest.call(null,seq__28901_28925__$1);
var G__28928 = c__19094__auto___28926;
var G__28929 = cljs.core.count.call(null,c__19094__auto___28926);
var G__28930 = (0);
seq__28901_28915 = G__28927;
chunk__28902_28916 = G__28928;
count__28903_28917 = G__28929;
i__28904_28918 = G__28930;
continue;
} else {
var f_28931 = cljs.core.first.call(null,seq__28901_28925__$1);
cljs.core.println.call(null,"  ",f_28931);

var G__28932 = cljs.core.next.call(null,seq__28901_28925__$1);
var G__28933 = null;
var G__28934 = (0);
var G__28935 = (0);
seq__28901_28915 = G__28932;
chunk__28902_28916 = G__28933;
count__28903_28917 = G__28934;
i__28904_28918 = G__28935;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28936 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18291__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28936);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28936)))?cljs.core.second.call(null,arglists_28936):arglists_28936));
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
var seq__28905 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28906 = null;
var count__28907 = (0);
var i__28908 = (0);
while(true){
if((i__28908 < count__28907)){
var vec__28909 = cljs.core._nth.call(null,chunk__28906,i__28908);
var name = cljs.core.nth.call(null,vec__28909,(0),null);
var map__28910 = cljs.core.nth.call(null,vec__28909,(1),null);
var map__28910__$1 = ((((!((map__28910 == null)))?((((map__28910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28910):map__28910);
var doc = cljs.core.get.call(null,map__28910__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28910__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28937 = seq__28905;
var G__28938 = chunk__28906;
var G__28939 = count__28907;
var G__28940 = (i__28908 + (1));
seq__28905 = G__28937;
chunk__28906 = G__28938;
count__28907 = G__28939;
i__28908 = G__28940;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28905);
if(temp__4425__auto__){
var seq__28905__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28905__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__28905__$1);
var G__28941 = cljs.core.chunk_rest.call(null,seq__28905__$1);
var G__28942 = c__19094__auto__;
var G__28943 = cljs.core.count.call(null,c__19094__auto__);
var G__28944 = (0);
seq__28905 = G__28941;
chunk__28906 = G__28942;
count__28907 = G__28943;
i__28908 = G__28944;
continue;
} else {
var vec__28912 = cljs.core.first.call(null,seq__28905__$1);
var name = cljs.core.nth.call(null,vec__28912,(0),null);
var map__28913 = cljs.core.nth.call(null,vec__28912,(1),null);
var map__28913__$1 = ((((!((map__28913 == null)))?((((map__28913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28913):map__28913);
var doc = cljs.core.get.call(null,map__28913__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28913__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28945 = cljs.core.next.call(null,seq__28905__$1);
var G__28946 = null;
var G__28947 = (0);
var G__28948 = (0);
seq__28905 = G__28945;
chunk__28906 = G__28946;
count__28907 = G__28947;
i__28908 = G__28948;
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

//# sourceMappingURL=repl.js.map?rel=1456984146821