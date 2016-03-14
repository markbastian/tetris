// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18291__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18291__auto__){
return or__18291__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18291__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26526_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26526_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26531 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26532 = null;
var count__26533 = (0);
var i__26534 = (0);
while(true){
if((i__26534 < count__26533)){
var n = cljs.core._nth.call(null,chunk__26532,i__26534);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26535 = seq__26531;
var G__26536 = chunk__26532;
var G__26537 = count__26533;
var G__26538 = (i__26534 + (1));
seq__26531 = G__26535;
chunk__26532 = G__26536;
count__26533 = G__26537;
i__26534 = G__26538;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26531);
if(temp__4425__auto__){
var seq__26531__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26531__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__26531__$1);
var G__26539 = cljs.core.chunk_rest.call(null,seq__26531__$1);
var G__26540 = c__19094__auto__;
var G__26541 = cljs.core.count.call(null,c__19094__auto__);
var G__26542 = (0);
seq__26531 = G__26539;
chunk__26532 = G__26540;
count__26533 = G__26541;
i__26534 = G__26542;
continue;
} else {
var n = cljs.core.first.call(null,seq__26531__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26543 = cljs.core.next.call(null,seq__26531__$1);
var G__26544 = null;
var G__26545 = (0);
var G__26546 = (0);
seq__26531 = G__26543;
chunk__26532 = G__26544;
count__26533 = G__26545;
i__26534 = G__26546;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26585_26592 = cljs.core.seq.call(null,deps);
var chunk__26586_26593 = null;
var count__26587_26594 = (0);
var i__26588_26595 = (0);
while(true){
if((i__26588_26595 < count__26587_26594)){
var dep_26596 = cljs.core._nth.call(null,chunk__26586_26593,i__26588_26595);
topo_sort_helper_STAR_.call(null,dep_26596,(depth + (1)),state);

var G__26597 = seq__26585_26592;
var G__26598 = chunk__26586_26593;
var G__26599 = count__26587_26594;
var G__26600 = (i__26588_26595 + (1));
seq__26585_26592 = G__26597;
chunk__26586_26593 = G__26598;
count__26587_26594 = G__26599;
i__26588_26595 = G__26600;
continue;
} else {
var temp__4425__auto___26601 = cljs.core.seq.call(null,seq__26585_26592);
if(temp__4425__auto___26601){
var seq__26585_26602__$1 = temp__4425__auto___26601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26585_26602__$1)){
var c__19094__auto___26603 = cljs.core.chunk_first.call(null,seq__26585_26602__$1);
var G__26604 = cljs.core.chunk_rest.call(null,seq__26585_26602__$1);
var G__26605 = c__19094__auto___26603;
var G__26606 = cljs.core.count.call(null,c__19094__auto___26603);
var G__26607 = (0);
seq__26585_26592 = G__26604;
chunk__26586_26593 = G__26605;
count__26587_26594 = G__26606;
i__26588_26595 = G__26607;
continue;
} else {
var dep_26608 = cljs.core.first.call(null,seq__26585_26602__$1);
topo_sort_helper_STAR_.call(null,dep_26608,(depth + (1)),state);

var G__26609 = cljs.core.next.call(null,seq__26585_26602__$1);
var G__26610 = null;
var G__26611 = (0);
var G__26612 = (0);
seq__26585_26592 = G__26609;
chunk__26586_26593 = G__26610;
count__26587_26594 = G__26611;
i__26588_26595 = G__26612;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26589){
var vec__26591 = p__26589;
var x = cljs.core.nth.call(null,vec__26591,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26591,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26591,x,xs,get_deps__$1){
return (function (p1__26547_SHARP_){
return clojure.set.difference.call(null,p1__26547_SHARP_,x);
});})(vec__26591,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26625 = cljs.core.seq.call(null,provides);
var chunk__26626 = null;
var count__26627 = (0);
var i__26628 = (0);
while(true){
if((i__26628 < count__26627)){
var prov = cljs.core._nth.call(null,chunk__26626,i__26628);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26629_26637 = cljs.core.seq.call(null,requires);
var chunk__26630_26638 = null;
var count__26631_26639 = (0);
var i__26632_26640 = (0);
while(true){
if((i__26632_26640 < count__26631_26639)){
var req_26641 = cljs.core._nth.call(null,chunk__26630_26638,i__26632_26640);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26641,prov);

var G__26642 = seq__26629_26637;
var G__26643 = chunk__26630_26638;
var G__26644 = count__26631_26639;
var G__26645 = (i__26632_26640 + (1));
seq__26629_26637 = G__26642;
chunk__26630_26638 = G__26643;
count__26631_26639 = G__26644;
i__26632_26640 = G__26645;
continue;
} else {
var temp__4425__auto___26646 = cljs.core.seq.call(null,seq__26629_26637);
if(temp__4425__auto___26646){
var seq__26629_26647__$1 = temp__4425__auto___26646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26629_26647__$1)){
var c__19094__auto___26648 = cljs.core.chunk_first.call(null,seq__26629_26647__$1);
var G__26649 = cljs.core.chunk_rest.call(null,seq__26629_26647__$1);
var G__26650 = c__19094__auto___26648;
var G__26651 = cljs.core.count.call(null,c__19094__auto___26648);
var G__26652 = (0);
seq__26629_26637 = G__26649;
chunk__26630_26638 = G__26650;
count__26631_26639 = G__26651;
i__26632_26640 = G__26652;
continue;
} else {
var req_26653 = cljs.core.first.call(null,seq__26629_26647__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26653,prov);

var G__26654 = cljs.core.next.call(null,seq__26629_26647__$1);
var G__26655 = null;
var G__26656 = (0);
var G__26657 = (0);
seq__26629_26637 = G__26654;
chunk__26630_26638 = G__26655;
count__26631_26639 = G__26656;
i__26632_26640 = G__26657;
continue;
}
} else {
}
}
break;
}

var G__26658 = seq__26625;
var G__26659 = chunk__26626;
var G__26660 = count__26627;
var G__26661 = (i__26628 + (1));
seq__26625 = G__26658;
chunk__26626 = G__26659;
count__26627 = G__26660;
i__26628 = G__26661;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26625);
if(temp__4425__auto__){
var seq__26625__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26625__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__26625__$1);
var G__26662 = cljs.core.chunk_rest.call(null,seq__26625__$1);
var G__26663 = c__19094__auto__;
var G__26664 = cljs.core.count.call(null,c__19094__auto__);
var G__26665 = (0);
seq__26625 = G__26662;
chunk__26626 = G__26663;
count__26627 = G__26664;
i__26628 = G__26665;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26625__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26633_26666 = cljs.core.seq.call(null,requires);
var chunk__26634_26667 = null;
var count__26635_26668 = (0);
var i__26636_26669 = (0);
while(true){
if((i__26636_26669 < count__26635_26668)){
var req_26670 = cljs.core._nth.call(null,chunk__26634_26667,i__26636_26669);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26670,prov);

var G__26671 = seq__26633_26666;
var G__26672 = chunk__26634_26667;
var G__26673 = count__26635_26668;
var G__26674 = (i__26636_26669 + (1));
seq__26633_26666 = G__26671;
chunk__26634_26667 = G__26672;
count__26635_26668 = G__26673;
i__26636_26669 = G__26674;
continue;
} else {
var temp__4425__auto___26675__$1 = cljs.core.seq.call(null,seq__26633_26666);
if(temp__4425__auto___26675__$1){
var seq__26633_26676__$1 = temp__4425__auto___26675__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26633_26676__$1)){
var c__19094__auto___26677 = cljs.core.chunk_first.call(null,seq__26633_26676__$1);
var G__26678 = cljs.core.chunk_rest.call(null,seq__26633_26676__$1);
var G__26679 = c__19094__auto___26677;
var G__26680 = cljs.core.count.call(null,c__19094__auto___26677);
var G__26681 = (0);
seq__26633_26666 = G__26678;
chunk__26634_26667 = G__26679;
count__26635_26668 = G__26680;
i__26636_26669 = G__26681;
continue;
} else {
var req_26682 = cljs.core.first.call(null,seq__26633_26676__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26682,prov);

var G__26683 = cljs.core.next.call(null,seq__26633_26676__$1);
var G__26684 = null;
var G__26685 = (0);
var G__26686 = (0);
seq__26633_26666 = G__26683;
chunk__26634_26667 = G__26684;
count__26635_26668 = G__26685;
i__26636_26669 = G__26686;
continue;
}
} else {
}
}
break;
}

var G__26687 = cljs.core.next.call(null,seq__26625__$1);
var G__26688 = null;
var G__26689 = (0);
var G__26690 = (0);
seq__26625 = G__26687;
chunk__26626 = G__26688;
count__26627 = G__26689;
i__26628 = G__26690;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26695_26699 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26696_26700 = null;
var count__26697_26701 = (0);
var i__26698_26702 = (0);
while(true){
if((i__26698_26702 < count__26697_26701)){
var ns_26703 = cljs.core._nth.call(null,chunk__26696_26700,i__26698_26702);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26703);

var G__26704 = seq__26695_26699;
var G__26705 = chunk__26696_26700;
var G__26706 = count__26697_26701;
var G__26707 = (i__26698_26702 + (1));
seq__26695_26699 = G__26704;
chunk__26696_26700 = G__26705;
count__26697_26701 = G__26706;
i__26698_26702 = G__26707;
continue;
} else {
var temp__4425__auto___26708 = cljs.core.seq.call(null,seq__26695_26699);
if(temp__4425__auto___26708){
var seq__26695_26709__$1 = temp__4425__auto___26708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26695_26709__$1)){
var c__19094__auto___26710 = cljs.core.chunk_first.call(null,seq__26695_26709__$1);
var G__26711 = cljs.core.chunk_rest.call(null,seq__26695_26709__$1);
var G__26712 = c__19094__auto___26710;
var G__26713 = cljs.core.count.call(null,c__19094__auto___26710);
var G__26714 = (0);
seq__26695_26699 = G__26711;
chunk__26696_26700 = G__26712;
count__26697_26701 = G__26713;
i__26698_26702 = G__26714;
continue;
} else {
var ns_26715 = cljs.core.first.call(null,seq__26695_26709__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26715);

var G__26716 = cljs.core.next.call(null,seq__26695_26709__$1);
var G__26717 = null;
var G__26718 = (0);
var G__26719 = (0);
seq__26695_26699 = G__26716;
chunk__26696_26700 = G__26717;
count__26697_26701 = G__26718;
i__26698_26702 = G__26719;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18291__auto__ = goog.require__;
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26720__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26721__i = 0, G__26721__a = new Array(arguments.length -  0);
while (G__26721__i < G__26721__a.length) {G__26721__a[G__26721__i] = arguments[G__26721__i + 0]; ++G__26721__i;}
  args = new cljs.core.IndexedSeq(G__26721__a,0);
} 
return G__26720__delegate.call(this,args);};
G__26720.cljs$lang$maxFixedArity = 0;
G__26720.cljs$lang$applyTo = (function (arglist__26722){
var args = cljs.core.seq(arglist__26722);
return G__26720__delegate(args);
});
G__26720.cljs$core$IFn$_invoke$arity$variadic = G__26720__delegate;
return G__26720;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26724 = cljs.core._EQ_;
var expr__26725 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26724.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26725))){
var path_parts = ((function (pred__26724,expr__26725){
return (function (p1__26723_SHARP_){
return clojure.string.split.call(null,p1__26723_SHARP_,/[\/\\]/);
});})(pred__26724,expr__26725))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26724,expr__26725){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26727){if((e26727 instanceof Error)){
var e = e26727;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26727;

}
}})());
});
;})(path_parts,sep,root,pred__26724,expr__26725))
} else {
if(cljs.core.truth_(pred__26724.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26725))){
return ((function (pred__26724,expr__26725){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26724,expr__26725){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26724,expr__26725))
);

return deferred.addErrback(((function (deferred,pred__26724,expr__26725){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26724,expr__26725))
);
});
;})(pred__26724,expr__26725))
} else {
return ((function (pred__26724,expr__26725){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26724,expr__26725))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26728,callback){
var map__26731 = p__26728;
var map__26731__$1 = ((((!((map__26731 == null)))?((((map__26731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26731):map__26731);
var file_msg = map__26731__$1;
var request_url = cljs.core.get.call(null,map__26731__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26731,map__26731__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26731,map__26731__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_26755){
var state_val_26756 = (state_26755[(1)]);
if((state_val_26756 === (7))){
var inst_26751 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
var statearr_26757_26777 = state_26755__$1;
(statearr_26757_26777[(2)] = inst_26751);

(statearr_26757_26777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (1))){
var state_26755__$1 = state_26755;
var statearr_26758_26778 = state_26755__$1;
(statearr_26758_26778[(2)] = null);

(statearr_26758_26778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (4))){
var inst_26735 = (state_26755[(7)]);
var inst_26735__$1 = (state_26755[(2)]);
var state_26755__$1 = (function (){var statearr_26759 = state_26755;
(statearr_26759[(7)] = inst_26735__$1);

return statearr_26759;
})();
if(cljs.core.truth_(inst_26735__$1)){
var statearr_26760_26779 = state_26755__$1;
(statearr_26760_26779[(1)] = (5));

} else {
var statearr_26761_26780 = state_26755__$1;
(statearr_26761_26780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (6))){
var state_26755__$1 = state_26755;
var statearr_26762_26781 = state_26755__$1;
(statearr_26762_26781[(2)] = null);

(statearr_26762_26781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (3))){
var inst_26753 = (state_26755[(2)]);
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26755__$1,inst_26753);
} else {
if((state_val_26756 === (2))){
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26755__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26756 === (11))){
var inst_26747 = (state_26755[(2)]);
var state_26755__$1 = (function (){var statearr_26763 = state_26755;
(statearr_26763[(8)] = inst_26747);

return statearr_26763;
})();
var statearr_26764_26782 = state_26755__$1;
(statearr_26764_26782[(2)] = null);

(statearr_26764_26782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (9))){
var inst_26741 = (state_26755[(9)]);
var inst_26739 = (state_26755[(10)]);
var inst_26743 = inst_26741.call(null,inst_26739);
var state_26755__$1 = state_26755;
var statearr_26765_26783 = state_26755__$1;
(statearr_26765_26783[(2)] = inst_26743);

(statearr_26765_26783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (5))){
var inst_26735 = (state_26755[(7)]);
var inst_26737 = figwheel.client.file_reloading.blocking_load.call(null,inst_26735);
var state_26755__$1 = state_26755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26755__$1,(8),inst_26737);
} else {
if((state_val_26756 === (10))){
var inst_26739 = (state_26755[(10)]);
var inst_26745 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26739);
var state_26755__$1 = state_26755;
var statearr_26766_26784 = state_26755__$1;
(statearr_26766_26784[(2)] = inst_26745);

(statearr_26766_26784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26756 === (8))){
var inst_26735 = (state_26755[(7)]);
var inst_26741 = (state_26755[(9)]);
var inst_26739 = (state_26755[(2)]);
var inst_26740 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26741__$1 = cljs.core.get.call(null,inst_26740,inst_26735);
var state_26755__$1 = (function (){var statearr_26767 = state_26755;
(statearr_26767[(9)] = inst_26741__$1);

(statearr_26767[(10)] = inst_26739);

return statearr_26767;
})();
if(cljs.core.truth_(inst_26741__$1)){
var statearr_26768_26785 = state_26755__$1;
(statearr_26768_26785[(1)] = (9));

} else {
var statearr_26769_26786 = state_26755__$1;
(statearr_26769_26786[(1)] = (10));

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
});})(c__20410__auto__))
;
return ((function (switch__20389__auto__,c__20410__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20390__auto__ = null;
var figwheel$client$file_reloading$state_machine__20390__auto____0 = (function (){
var statearr_26773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26773[(0)] = figwheel$client$file_reloading$state_machine__20390__auto__);

(statearr_26773[(1)] = (1));

return statearr_26773;
});
var figwheel$client$file_reloading$state_machine__20390__auto____1 = (function (state_26755){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_26755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e26774){if((e26774 instanceof Object)){
var ex__20393__auto__ = e26774;
var statearr_26775_26787 = state_26755;
(statearr_26775_26787[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26788 = state_26755;
state_26755 = G__26788;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20390__auto__ = function(state_26755){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20390__auto____1.call(this,state_26755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20390__auto____0;
figwheel$client$file_reloading$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20390__auto____1;
return figwheel$client$file_reloading$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_26776 = f__20411__auto__.call(null);
(statearr_26776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_26776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__))
);

return c__20410__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26789,callback){
var map__26792 = p__26789;
var map__26792__$1 = ((((!((map__26792 == null)))?((((map__26792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26792):map__26792);
var file_msg = map__26792__$1;
var namespace = cljs.core.get.call(null,map__26792__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26792,map__26792__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26792,map__26792__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26794){
var map__26797 = p__26794;
var map__26797__$1 = ((((!((map__26797 == null)))?((((map__26797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26797):map__26797);
var file_msg = map__26797__$1;
var namespace = cljs.core.get.call(null,map__26797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18279__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18279__auto__){
var or__18291__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
var or__18291__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18291__auto____$1)){
return or__18291__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18279__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26799,callback){
var map__26802 = p__26799;
var map__26802__$1 = ((((!((map__26802 == null)))?((((map__26802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26802):map__26802);
var file_msg = map__26802__$1;
var request_url = cljs.core.get.call(null,map__26802__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26802__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20410__auto___26890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___26890,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___26890,out){
return (function (state_26872){
var state_val_26873 = (state_26872[(1)]);
if((state_val_26873 === (1))){
var inst_26850 = cljs.core.nth.call(null,files,(0),null);
var inst_26851 = cljs.core.nthnext.call(null,files,(1));
var inst_26852 = files;
var state_26872__$1 = (function (){var statearr_26874 = state_26872;
(statearr_26874[(7)] = inst_26850);

(statearr_26874[(8)] = inst_26851);

(statearr_26874[(9)] = inst_26852);

return statearr_26874;
})();
var statearr_26875_26891 = state_26872__$1;
(statearr_26875_26891[(2)] = null);

(statearr_26875_26891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (2))){
var inst_26855 = (state_26872[(10)]);
var inst_26852 = (state_26872[(9)]);
var inst_26855__$1 = cljs.core.nth.call(null,inst_26852,(0),null);
var inst_26856 = cljs.core.nthnext.call(null,inst_26852,(1));
var inst_26857 = (inst_26855__$1 == null);
var inst_26858 = cljs.core.not.call(null,inst_26857);
var state_26872__$1 = (function (){var statearr_26876 = state_26872;
(statearr_26876[(10)] = inst_26855__$1);

(statearr_26876[(11)] = inst_26856);

return statearr_26876;
})();
if(inst_26858){
var statearr_26877_26892 = state_26872__$1;
(statearr_26877_26892[(1)] = (4));

} else {
var statearr_26878_26893 = state_26872__$1;
(statearr_26878_26893[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (3))){
var inst_26870 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26872__$1,inst_26870);
} else {
if((state_val_26873 === (4))){
var inst_26855 = (state_26872[(10)]);
var inst_26860 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26855);
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26872__$1,(7),inst_26860);
} else {
if((state_val_26873 === (5))){
var inst_26866 = cljs.core.async.close_BANG_.call(null,out);
var state_26872__$1 = state_26872;
var statearr_26879_26894 = state_26872__$1;
(statearr_26879_26894[(2)] = inst_26866);

(statearr_26879_26894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (6))){
var inst_26868 = (state_26872[(2)]);
var state_26872__$1 = state_26872;
var statearr_26880_26895 = state_26872__$1;
(statearr_26880_26895[(2)] = inst_26868);

(statearr_26880_26895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26873 === (7))){
var inst_26856 = (state_26872[(11)]);
var inst_26862 = (state_26872[(2)]);
var inst_26863 = cljs.core.async.put_BANG_.call(null,out,inst_26862);
var inst_26852 = inst_26856;
var state_26872__$1 = (function (){var statearr_26881 = state_26872;
(statearr_26881[(12)] = inst_26863);

(statearr_26881[(9)] = inst_26852);

return statearr_26881;
})();
var statearr_26882_26896 = state_26872__$1;
(statearr_26882_26896[(2)] = null);

(statearr_26882_26896[(1)] = (2));


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
});})(c__20410__auto___26890,out))
;
return ((function (switch__20389__auto__,c__20410__auto___26890,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____0 = (function (){
var statearr_26886 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26886[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__);

(statearr_26886[(1)] = (1));

return statearr_26886;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____1 = (function (state_26872){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_26872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e26887){if((e26887 instanceof Object)){
var ex__20393__auto__ = e26887;
var statearr_26888_26897 = state_26872;
(statearr_26888_26897[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26898 = state_26872;
state_26872 = G__26898;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__ = function(state_26872){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____1.call(this,state_26872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___26890,out))
})();
var state__20412__auto__ = (function (){var statearr_26889 = f__20411__auto__.call(null);
(statearr_26889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___26890);

return statearr_26889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___26890,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26899,opts){
var map__26903 = p__26899;
var map__26903__$1 = ((((!((map__26903 == null)))?((((map__26903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26903):map__26903);
var eval_body__$1 = cljs.core.get.call(null,map__26903__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26903__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18279__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18279__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18279__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26905){var e = e26905;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26906_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26906_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26911){
var vec__26912 = p__26911;
var k = cljs.core.nth.call(null,vec__26912,(0),null);
var v = cljs.core.nth.call(null,vec__26912,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26913){
var vec__26914 = p__26913;
var k = cljs.core.nth.call(null,vec__26914,(0),null);
var v = cljs.core.nth.call(null,vec__26914,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26918,p__26919){
var map__27166 = p__26918;
var map__27166__$1 = ((((!((map__27166 == null)))?((((map__27166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27166):map__27166);
var opts = map__27166__$1;
var before_jsload = cljs.core.get.call(null,map__27166__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27166__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27166__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27167 = p__26919;
var map__27167__$1 = ((((!((map__27167 == null)))?((((map__27167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27167):map__27167);
var msg = map__27167__$1;
var files = cljs.core.get.call(null,map__27167__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27167__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27167__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27320){
var state_val_27321 = (state_27320[(1)]);
if((state_val_27321 === (7))){
var inst_27182 = (state_27320[(7)]);
var inst_27184 = (state_27320[(8)]);
var inst_27181 = (state_27320[(9)]);
var inst_27183 = (state_27320[(10)]);
var inst_27189 = cljs.core._nth.call(null,inst_27182,inst_27184);
var inst_27190 = figwheel.client.file_reloading.eval_body.call(null,inst_27189,opts);
var inst_27191 = (inst_27184 + (1));
var tmp27322 = inst_27182;
var tmp27323 = inst_27181;
var tmp27324 = inst_27183;
var inst_27181__$1 = tmp27323;
var inst_27182__$1 = tmp27322;
var inst_27183__$1 = tmp27324;
var inst_27184__$1 = inst_27191;
var state_27320__$1 = (function (){var statearr_27325 = state_27320;
(statearr_27325[(7)] = inst_27182__$1);

(statearr_27325[(11)] = inst_27190);

(statearr_27325[(8)] = inst_27184__$1);

(statearr_27325[(9)] = inst_27181__$1);

(statearr_27325[(10)] = inst_27183__$1);

return statearr_27325;
})();
var statearr_27326_27412 = state_27320__$1;
(statearr_27326_27412[(2)] = null);

(statearr_27326_27412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (20))){
var inst_27224 = (state_27320[(12)]);
var inst_27232 = figwheel.client.file_reloading.sort_files.call(null,inst_27224);
var state_27320__$1 = state_27320;
var statearr_27327_27413 = state_27320__$1;
(statearr_27327_27413[(2)] = inst_27232);

(statearr_27327_27413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (27))){
var state_27320__$1 = state_27320;
var statearr_27328_27414 = state_27320__$1;
(statearr_27328_27414[(2)] = null);

(statearr_27328_27414[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (1))){
var inst_27173 = (state_27320[(13)]);
var inst_27170 = before_jsload.call(null,files);
var inst_27171 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27172 = (function (){return ((function (inst_27173,inst_27170,inst_27171,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26915_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26915_SHARP_);
});
;})(inst_27173,inst_27170,inst_27171,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27173__$1 = cljs.core.filter.call(null,inst_27172,files);
var inst_27174 = cljs.core.not_empty.call(null,inst_27173__$1);
var state_27320__$1 = (function (){var statearr_27329 = state_27320;
(statearr_27329[(13)] = inst_27173__$1);

(statearr_27329[(14)] = inst_27171);

(statearr_27329[(15)] = inst_27170);

return statearr_27329;
})();
if(cljs.core.truth_(inst_27174)){
var statearr_27330_27415 = state_27320__$1;
(statearr_27330_27415[(1)] = (2));

} else {
var statearr_27331_27416 = state_27320__$1;
(statearr_27331_27416[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (24))){
var state_27320__$1 = state_27320;
var statearr_27332_27417 = state_27320__$1;
(statearr_27332_27417[(2)] = null);

(statearr_27332_27417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (39))){
var inst_27274 = (state_27320[(16)]);
var state_27320__$1 = state_27320;
var statearr_27333_27418 = state_27320__$1;
(statearr_27333_27418[(2)] = inst_27274);

(statearr_27333_27418[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (46))){
var inst_27315 = (state_27320[(2)]);
var state_27320__$1 = state_27320;
var statearr_27334_27419 = state_27320__$1;
(statearr_27334_27419[(2)] = inst_27315);

(statearr_27334_27419[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (4))){
var inst_27218 = (state_27320[(2)]);
var inst_27219 = cljs.core.List.EMPTY;
var inst_27220 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27219);
var inst_27221 = (function (){return ((function (inst_27218,inst_27219,inst_27220,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26916_SHARP_){
var and__18279__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26916_SHARP_);
if(cljs.core.truth_(and__18279__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26916_SHARP_));
} else {
return and__18279__auto__;
}
});
;})(inst_27218,inst_27219,inst_27220,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27222 = cljs.core.filter.call(null,inst_27221,files);
var inst_27223 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27224 = cljs.core.concat.call(null,inst_27222,inst_27223);
var state_27320__$1 = (function (){var statearr_27335 = state_27320;
(statearr_27335[(12)] = inst_27224);

(statearr_27335[(17)] = inst_27218);

(statearr_27335[(18)] = inst_27220);

return statearr_27335;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27336_27420 = state_27320__$1;
(statearr_27336_27420[(1)] = (16));

} else {
var statearr_27337_27421 = state_27320__$1;
(statearr_27337_27421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (15))){
var inst_27208 = (state_27320[(2)]);
var state_27320__$1 = state_27320;
var statearr_27338_27422 = state_27320__$1;
(statearr_27338_27422[(2)] = inst_27208);

(statearr_27338_27422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (21))){
var inst_27234 = (state_27320[(19)]);
var inst_27234__$1 = (state_27320[(2)]);
var inst_27235 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27234__$1);
var state_27320__$1 = (function (){var statearr_27339 = state_27320;
(statearr_27339[(19)] = inst_27234__$1);

return statearr_27339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27320__$1,(22),inst_27235);
} else {
if((state_val_27321 === (31))){
var inst_27318 = (state_27320[(2)]);
var state_27320__$1 = state_27320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27320__$1,inst_27318);
} else {
if((state_val_27321 === (32))){
var inst_27274 = (state_27320[(16)]);
var inst_27279 = inst_27274.cljs$lang$protocol_mask$partition0$;
var inst_27280 = (inst_27279 & (64));
var inst_27281 = inst_27274.cljs$core$ISeq$;
var inst_27282 = (inst_27280) || (inst_27281);
var state_27320__$1 = state_27320;
if(cljs.core.truth_(inst_27282)){
var statearr_27340_27423 = state_27320__$1;
(statearr_27340_27423[(1)] = (35));

} else {
var statearr_27341_27424 = state_27320__$1;
(statearr_27341_27424[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (40))){
var inst_27295 = (state_27320[(20)]);
var inst_27294 = (state_27320[(2)]);
var inst_27295__$1 = cljs.core.get.call(null,inst_27294,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27296 = cljs.core.get.call(null,inst_27294,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27297 = cljs.core.not_empty.call(null,inst_27295__$1);
var state_27320__$1 = (function (){var statearr_27342 = state_27320;
(statearr_27342[(20)] = inst_27295__$1);

(statearr_27342[(21)] = inst_27296);

return statearr_27342;
})();
if(cljs.core.truth_(inst_27297)){
var statearr_27343_27425 = state_27320__$1;
(statearr_27343_27425[(1)] = (41));

} else {
var statearr_27344_27426 = state_27320__$1;
(statearr_27344_27426[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (33))){
var state_27320__$1 = state_27320;
var statearr_27345_27427 = state_27320__$1;
(statearr_27345_27427[(2)] = false);

(statearr_27345_27427[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (13))){
var inst_27194 = (state_27320[(22)]);
var inst_27198 = cljs.core.chunk_first.call(null,inst_27194);
var inst_27199 = cljs.core.chunk_rest.call(null,inst_27194);
var inst_27200 = cljs.core.count.call(null,inst_27198);
var inst_27181 = inst_27199;
var inst_27182 = inst_27198;
var inst_27183 = inst_27200;
var inst_27184 = (0);
var state_27320__$1 = (function (){var statearr_27346 = state_27320;
(statearr_27346[(7)] = inst_27182);

(statearr_27346[(8)] = inst_27184);

(statearr_27346[(9)] = inst_27181);

(statearr_27346[(10)] = inst_27183);

return statearr_27346;
})();
var statearr_27347_27428 = state_27320__$1;
(statearr_27347_27428[(2)] = null);

(statearr_27347_27428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (22))){
var inst_27237 = (state_27320[(23)]);
var inst_27238 = (state_27320[(24)]);
var inst_27234 = (state_27320[(19)]);
var inst_27242 = (state_27320[(25)]);
var inst_27237__$1 = (state_27320[(2)]);
var inst_27238__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27237__$1);
var inst_27239 = (function (){var all_files = inst_27234;
var res_SINGLEQUOTE_ = inst_27237__$1;
var res = inst_27238__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27237,inst_27238,inst_27234,inst_27242,inst_27237__$1,inst_27238__$1,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26917_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26917_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27237,inst_27238,inst_27234,inst_27242,inst_27237__$1,inst_27238__$1,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27240 = cljs.core.filter.call(null,inst_27239,inst_27237__$1);
var inst_27241 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27242__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27241);
var inst_27243 = cljs.core.not_empty.call(null,inst_27242__$1);
var state_27320__$1 = (function (){var statearr_27348 = state_27320;
(statearr_27348[(23)] = inst_27237__$1);

(statearr_27348[(24)] = inst_27238__$1);

(statearr_27348[(25)] = inst_27242__$1);

(statearr_27348[(26)] = inst_27240);

return statearr_27348;
})();
if(cljs.core.truth_(inst_27243)){
var statearr_27349_27429 = state_27320__$1;
(statearr_27349_27429[(1)] = (23));

} else {
var statearr_27350_27430 = state_27320__$1;
(statearr_27350_27430[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (36))){
var state_27320__$1 = state_27320;
var statearr_27351_27431 = state_27320__$1;
(statearr_27351_27431[(2)] = false);

(statearr_27351_27431[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (41))){
var inst_27295 = (state_27320[(20)]);
var inst_27299 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27300 = cljs.core.map.call(null,inst_27299,inst_27295);
var inst_27301 = cljs.core.pr_str.call(null,inst_27300);
var inst_27302 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27301)].join('');
var inst_27303 = figwheel.client.utils.log.call(null,inst_27302);
var state_27320__$1 = state_27320;
var statearr_27352_27432 = state_27320__$1;
(statearr_27352_27432[(2)] = inst_27303);

(statearr_27352_27432[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (43))){
var inst_27296 = (state_27320[(21)]);
var inst_27306 = (state_27320[(2)]);
var inst_27307 = cljs.core.not_empty.call(null,inst_27296);
var state_27320__$1 = (function (){var statearr_27353 = state_27320;
(statearr_27353[(27)] = inst_27306);

return statearr_27353;
})();
if(cljs.core.truth_(inst_27307)){
var statearr_27354_27433 = state_27320__$1;
(statearr_27354_27433[(1)] = (44));

} else {
var statearr_27355_27434 = state_27320__$1;
(statearr_27355_27434[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (29))){
var inst_27237 = (state_27320[(23)]);
var inst_27274 = (state_27320[(16)]);
var inst_27238 = (state_27320[(24)]);
var inst_27234 = (state_27320[(19)]);
var inst_27242 = (state_27320[(25)]);
var inst_27240 = (state_27320[(26)]);
var inst_27270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27273 = (function (){var all_files = inst_27234;
var res_SINGLEQUOTE_ = inst_27237;
var res = inst_27238;
var files_not_loaded = inst_27240;
var dependencies_that_loaded = inst_27242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27274,inst_27238,inst_27234,inst_27242,inst_27240,inst_27270,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27272){
var map__27356 = p__27272;
var map__27356__$1 = ((((!((map__27356 == null)))?((((map__27356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27356):map__27356);
var namespace = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27274,inst_27238,inst_27234,inst_27242,inst_27240,inst_27270,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27274__$1 = cljs.core.group_by.call(null,inst_27273,inst_27240);
var inst_27276 = (inst_27274__$1 == null);
var inst_27277 = cljs.core.not.call(null,inst_27276);
var state_27320__$1 = (function (){var statearr_27358 = state_27320;
(statearr_27358[(28)] = inst_27270);

(statearr_27358[(16)] = inst_27274__$1);

return statearr_27358;
})();
if(inst_27277){
var statearr_27359_27435 = state_27320__$1;
(statearr_27359_27435[(1)] = (32));

} else {
var statearr_27360_27436 = state_27320__$1;
(statearr_27360_27436[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (44))){
var inst_27296 = (state_27320[(21)]);
var inst_27309 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27296);
var inst_27310 = cljs.core.pr_str.call(null,inst_27309);
var inst_27311 = [cljs.core.str("not required: "),cljs.core.str(inst_27310)].join('');
var inst_27312 = figwheel.client.utils.log.call(null,inst_27311);
var state_27320__$1 = state_27320;
var statearr_27361_27437 = state_27320__$1;
(statearr_27361_27437[(2)] = inst_27312);

(statearr_27361_27437[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (6))){
var inst_27215 = (state_27320[(2)]);
var state_27320__$1 = state_27320;
var statearr_27362_27438 = state_27320__$1;
(statearr_27362_27438[(2)] = inst_27215);

(statearr_27362_27438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (28))){
var inst_27240 = (state_27320[(26)]);
var inst_27267 = (state_27320[(2)]);
var inst_27268 = cljs.core.not_empty.call(null,inst_27240);
var state_27320__$1 = (function (){var statearr_27363 = state_27320;
(statearr_27363[(29)] = inst_27267);

return statearr_27363;
})();
if(cljs.core.truth_(inst_27268)){
var statearr_27364_27439 = state_27320__$1;
(statearr_27364_27439[(1)] = (29));

} else {
var statearr_27365_27440 = state_27320__$1;
(statearr_27365_27440[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (25))){
var inst_27238 = (state_27320[(24)]);
var inst_27254 = (state_27320[(2)]);
var inst_27255 = cljs.core.not_empty.call(null,inst_27238);
var state_27320__$1 = (function (){var statearr_27366 = state_27320;
(statearr_27366[(30)] = inst_27254);

return statearr_27366;
})();
if(cljs.core.truth_(inst_27255)){
var statearr_27367_27441 = state_27320__$1;
(statearr_27367_27441[(1)] = (26));

} else {
var statearr_27368_27442 = state_27320__$1;
(statearr_27368_27442[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (34))){
var inst_27289 = (state_27320[(2)]);
var state_27320__$1 = state_27320;
if(cljs.core.truth_(inst_27289)){
var statearr_27369_27443 = state_27320__$1;
(statearr_27369_27443[(1)] = (38));

} else {
var statearr_27370_27444 = state_27320__$1;
(statearr_27370_27444[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (17))){
var state_27320__$1 = state_27320;
var statearr_27371_27445 = state_27320__$1;
(statearr_27371_27445[(2)] = recompile_dependents);

(statearr_27371_27445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (3))){
var state_27320__$1 = state_27320;
var statearr_27372_27446 = state_27320__$1;
(statearr_27372_27446[(2)] = null);

(statearr_27372_27446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (12))){
var inst_27211 = (state_27320[(2)]);
var state_27320__$1 = state_27320;
var statearr_27373_27447 = state_27320__$1;
(statearr_27373_27447[(2)] = inst_27211);

(statearr_27373_27447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (2))){
var inst_27173 = (state_27320[(13)]);
var inst_27180 = cljs.core.seq.call(null,inst_27173);
var inst_27181 = inst_27180;
var inst_27182 = null;
var inst_27183 = (0);
var inst_27184 = (0);
var state_27320__$1 = (function (){var statearr_27374 = state_27320;
(statearr_27374[(7)] = inst_27182);

(statearr_27374[(8)] = inst_27184);

(statearr_27374[(9)] = inst_27181);

(statearr_27374[(10)] = inst_27183);

return statearr_27374;
})();
var statearr_27375_27448 = state_27320__$1;
(statearr_27375_27448[(2)] = null);

(statearr_27375_27448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (23))){
var inst_27237 = (state_27320[(23)]);
var inst_27238 = (state_27320[(24)]);
var inst_27234 = (state_27320[(19)]);
var inst_27242 = (state_27320[(25)]);
var inst_27240 = (state_27320[(26)]);
var inst_27245 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27247 = (function (){var all_files = inst_27234;
var res_SINGLEQUOTE_ = inst_27237;
var res = inst_27238;
var files_not_loaded = inst_27240;
var dependencies_that_loaded = inst_27242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27238,inst_27234,inst_27242,inst_27240,inst_27245,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27246){
var map__27376 = p__27246;
var map__27376__$1 = ((((!((map__27376 == null)))?((((map__27376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27376):map__27376);
var request_url = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27238,inst_27234,inst_27242,inst_27240,inst_27245,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27248 = cljs.core.reverse.call(null,inst_27242);
var inst_27249 = cljs.core.map.call(null,inst_27247,inst_27248);
var inst_27250 = cljs.core.pr_str.call(null,inst_27249);
var inst_27251 = figwheel.client.utils.log.call(null,inst_27250);
var state_27320__$1 = (function (){var statearr_27378 = state_27320;
(statearr_27378[(31)] = inst_27245);

return statearr_27378;
})();
var statearr_27379_27449 = state_27320__$1;
(statearr_27379_27449[(2)] = inst_27251);

(statearr_27379_27449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (35))){
var state_27320__$1 = state_27320;
var statearr_27380_27450 = state_27320__$1;
(statearr_27380_27450[(2)] = true);

(statearr_27380_27450[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (19))){
var inst_27224 = (state_27320[(12)]);
var inst_27230 = figwheel.client.file_reloading.expand_files.call(null,inst_27224);
var state_27320__$1 = state_27320;
var statearr_27381_27451 = state_27320__$1;
(statearr_27381_27451[(2)] = inst_27230);

(statearr_27381_27451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (11))){
var state_27320__$1 = state_27320;
var statearr_27382_27452 = state_27320__$1;
(statearr_27382_27452[(2)] = null);

(statearr_27382_27452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (9))){
var inst_27213 = (state_27320[(2)]);
var state_27320__$1 = state_27320;
var statearr_27383_27453 = state_27320__$1;
(statearr_27383_27453[(2)] = inst_27213);

(statearr_27383_27453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (5))){
var inst_27184 = (state_27320[(8)]);
var inst_27183 = (state_27320[(10)]);
var inst_27186 = (inst_27184 < inst_27183);
var inst_27187 = inst_27186;
var state_27320__$1 = state_27320;
if(cljs.core.truth_(inst_27187)){
var statearr_27384_27454 = state_27320__$1;
(statearr_27384_27454[(1)] = (7));

} else {
var statearr_27385_27455 = state_27320__$1;
(statearr_27385_27455[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (14))){
var inst_27194 = (state_27320[(22)]);
var inst_27203 = cljs.core.first.call(null,inst_27194);
var inst_27204 = figwheel.client.file_reloading.eval_body.call(null,inst_27203,opts);
var inst_27205 = cljs.core.next.call(null,inst_27194);
var inst_27181 = inst_27205;
var inst_27182 = null;
var inst_27183 = (0);
var inst_27184 = (0);
var state_27320__$1 = (function (){var statearr_27386 = state_27320;
(statearr_27386[(7)] = inst_27182);

(statearr_27386[(8)] = inst_27184);

(statearr_27386[(32)] = inst_27204);

(statearr_27386[(9)] = inst_27181);

(statearr_27386[(10)] = inst_27183);

return statearr_27386;
})();
var statearr_27387_27456 = state_27320__$1;
(statearr_27387_27456[(2)] = null);

(statearr_27387_27456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (45))){
var state_27320__$1 = state_27320;
var statearr_27388_27457 = state_27320__$1;
(statearr_27388_27457[(2)] = null);

(statearr_27388_27457[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (26))){
var inst_27237 = (state_27320[(23)]);
var inst_27238 = (state_27320[(24)]);
var inst_27234 = (state_27320[(19)]);
var inst_27242 = (state_27320[(25)]);
var inst_27240 = (state_27320[(26)]);
var inst_27257 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27259 = (function (){var all_files = inst_27234;
var res_SINGLEQUOTE_ = inst_27237;
var res = inst_27238;
var files_not_loaded = inst_27240;
var dependencies_that_loaded = inst_27242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27238,inst_27234,inst_27242,inst_27240,inst_27257,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27258){
var map__27389 = p__27258;
var map__27389__$1 = ((((!((map__27389 == null)))?((((map__27389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27389):map__27389);
var namespace = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27238,inst_27234,inst_27242,inst_27240,inst_27257,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27260 = cljs.core.map.call(null,inst_27259,inst_27238);
var inst_27261 = cljs.core.pr_str.call(null,inst_27260);
var inst_27262 = figwheel.client.utils.log.call(null,inst_27261);
var inst_27263 = (function (){var all_files = inst_27234;
var res_SINGLEQUOTE_ = inst_27237;
var res = inst_27238;
var files_not_loaded = inst_27240;
var dependencies_that_loaded = inst_27242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27238,inst_27234,inst_27242,inst_27240,inst_27257,inst_27259,inst_27260,inst_27261,inst_27262,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27237,inst_27238,inst_27234,inst_27242,inst_27240,inst_27257,inst_27259,inst_27260,inst_27261,inst_27262,state_val_27321,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27264 = setTimeout(inst_27263,(10));
var state_27320__$1 = (function (){var statearr_27391 = state_27320;
(statearr_27391[(33)] = inst_27257);

(statearr_27391[(34)] = inst_27262);

return statearr_27391;
})();
var statearr_27392_27458 = state_27320__$1;
(statearr_27392_27458[(2)] = inst_27264);

(statearr_27392_27458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (16))){
var state_27320__$1 = state_27320;
var statearr_27393_27459 = state_27320__$1;
(statearr_27393_27459[(2)] = reload_dependents);

(statearr_27393_27459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (38))){
var inst_27274 = (state_27320[(16)]);
var inst_27291 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27274);
var state_27320__$1 = state_27320;
var statearr_27394_27460 = state_27320__$1;
(statearr_27394_27460[(2)] = inst_27291);

(statearr_27394_27460[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (30))){
var state_27320__$1 = state_27320;
var statearr_27395_27461 = state_27320__$1;
(statearr_27395_27461[(2)] = null);

(statearr_27395_27461[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (10))){
var inst_27194 = (state_27320[(22)]);
var inst_27196 = cljs.core.chunked_seq_QMARK_.call(null,inst_27194);
var state_27320__$1 = state_27320;
if(inst_27196){
var statearr_27396_27462 = state_27320__$1;
(statearr_27396_27462[(1)] = (13));

} else {
var statearr_27397_27463 = state_27320__$1;
(statearr_27397_27463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (18))){
var inst_27228 = (state_27320[(2)]);
var state_27320__$1 = state_27320;
if(cljs.core.truth_(inst_27228)){
var statearr_27398_27464 = state_27320__$1;
(statearr_27398_27464[(1)] = (19));

} else {
var statearr_27399_27465 = state_27320__$1;
(statearr_27399_27465[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (42))){
var state_27320__$1 = state_27320;
var statearr_27400_27466 = state_27320__$1;
(statearr_27400_27466[(2)] = null);

(statearr_27400_27466[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (37))){
var inst_27286 = (state_27320[(2)]);
var state_27320__$1 = state_27320;
var statearr_27401_27467 = state_27320__$1;
(statearr_27401_27467[(2)] = inst_27286);

(statearr_27401_27467[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27321 === (8))){
var inst_27194 = (state_27320[(22)]);
var inst_27181 = (state_27320[(9)]);
var inst_27194__$1 = cljs.core.seq.call(null,inst_27181);
var state_27320__$1 = (function (){var statearr_27402 = state_27320;
(statearr_27402[(22)] = inst_27194__$1);

return statearr_27402;
})();
if(inst_27194__$1){
var statearr_27403_27468 = state_27320__$1;
(statearr_27403_27468[(1)] = (10));

} else {
var statearr_27404_27469 = state_27320__$1;
(statearr_27404_27469[(1)] = (11));

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
});})(c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20389__auto__,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____0 = (function (){
var statearr_27408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27408[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__);

(statearr_27408[(1)] = (1));

return statearr_27408;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____1 = (function (state_27320){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27409){if((e27409 instanceof Object)){
var ex__20393__auto__ = e27409;
var statearr_27410_27470 = state_27320;
(statearr_27410_27470[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27471 = state_27320;
state_27320 = G__27471;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__ = function(state_27320){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____1.call(this,state_27320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20412__auto__ = (function (){var statearr_27411 = f__20411__auto__.call(null);
(statearr_27411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__,map__27166,map__27166__$1,opts,before_jsload,on_jsload,reload_dependents,map__27167,map__27167__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20410__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27474,link){
var map__27477 = p__27474;
var map__27477__$1 = ((((!((map__27477 == null)))?((((map__27477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27477):map__27477);
var file = cljs.core.get.call(null,map__27477__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27477,map__27477__$1,file){
return (function (p1__27472_SHARP_,p2__27473_SHARP_){
if(cljs.core._EQ_.call(null,p1__27472_SHARP_,p2__27473_SHARP_)){
return p1__27472_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27477,map__27477__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27483){
var map__27484 = p__27483;
var map__27484__$1 = ((((!((map__27484 == null)))?((((map__27484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27484):map__27484);
var match_length = cljs.core.get.call(null,map__27484__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27484__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27479_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27479_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27486 = [];
var len__19349__auto___27489 = arguments.length;
var i__19350__auto___27490 = (0);
while(true){
if((i__19350__auto___27490 < len__19349__auto___27489)){
args27486.push((arguments[i__19350__auto___27490]));

var G__27491 = (i__19350__auto___27490 + (1));
i__19350__auto___27490 = G__27491;
continue;
} else {
}
break;
}

var G__27488 = args27486.length;
switch (G__27488) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27486.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27493_SHARP_,p2__27494_SHARP_){
return cljs.core.assoc.call(null,p1__27493_SHARP_,cljs.core.get.call(null,p2__27494_SHARP_,key),p2__27494_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27495){
var map__27498 = p__27495;
var map__27498__$1 = ((((!((map__27498 == null)))?((((map__27498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27498):map__27498);
var f_data = map__27498__$1;
var file = cljs.core.get.call(null,map__27498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27500,files_msg){
var map__27507 = p__27500;
var map__27507__$1 = ((((!((map__27507 == null)))?((((map__27507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27507):map__27507);
var opts = map__27507__$1;
var on_cssload = cljs.core.get.call(null,map__27507__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27509_27513 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27510_27514 = null;
var count__27511_27515 = (0);
var i__27512_27516 = (0);
while(true){
if((i__27512_27516 < count__27511_27515)){
var f_27517 = cljs.core._nth.call(null,chunk__27510_27514,i__27512_27516);
figwheel.client.file_reloading.reload_css_file.call(null,f_27517);

var G__27518 = seq__27509_27513;
var G__27519 = chunk__27510_27514;
var G__27520 = count__27511_27515;
var G__27521 = (i__27512_27516 + (1));
seq__27509_27513 = G__27518;
chunk__27510_27514 = G__27519;
count__27511_27515 = G__27520;
i__27512_27516 = G__27521;
continue;
} else {
var temp__4425__auto___27522 = cljs.core.seq.call(null,seq__27509_27513);
if(temp__4425__auto___27522){
var seq__27509_27523__$1 = temp__4425__auto___27522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27509_27523__$1)){
var c__19094__auto___27524 = cljs.core.chunk_first.call(null,seq__27509_27523__$1);
var G__27525 = cljs.core.chunk_rest.call(null,seq__27509_27523__$1);
var G__27526 = c__19094__auto___27524;
var G__27527 = cljs.core.count.call(null,c__19094__auto___27524);
var G__27528 = (0);
seq__27509_27513 = G__27525;
chunk__27510_27514 = G__27526;
count__27511_27515 = G__27527;
i__27512_27516 = G__27528;
continue;
} else {
var f_27529 = cljs.core.first.call(null,seq__27509_27523__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27529);

var G__27530 = cljs.core.next.call(null,seq__27509_27523__$1);
var G__27531 = null;
var G__27532 = (0);
var G__27533 = (0);
seq__27509_27513 = G__27530;
chunk__27510_27514 = G__27531;
count__27511_27515 = G__27532;
i__27512_27516 = G__27533;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27507,map__27507__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27507,map__27507__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1457675248526