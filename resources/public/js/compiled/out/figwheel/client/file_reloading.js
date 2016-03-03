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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27877_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27877_SHARP_));
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
var seq__27882 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27883 = null;
var count__27884 = (0);
var i__27885 = (0);
while(true){
if((i__27885 < count__27884)){
var n = cljs.core._nth.call(null,chunk__27883,i__27885);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27886 = seq__27882;
var G__27887 = chunk__27883;
var G__27888 = count__27884;
var G__27889 = (i__27885 + (1));
seq__27882 = G__27886;
chunk__27883 = G__27887;
count__27884 = G__27888;
i__27885 = G__27889;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27882);
if(temp__4425__auto__){
var seq__27882__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27882__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__27882__$1);
var G__27890 = cljs.core.chunk_rest.call(null,seq__27882__$1);
var G__27891 = c__19094__auto__;
var G__27892 = cljs.core.count.call(null,c__19094__auto__);
var G__27893 = (0);
seq__27882 = G__27890;
chunk__27883 = G__27891;
count__27884 = G__27892;
i__27885 = G__27893;
continue;
} else {
var n = cljs.core.first.call(null,seq__27882__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27894 = cljs.core.next.call(null,seq__27882__$1);
var G__27895 = null;
var G__27896 = (0);
var G__27897 = (0);
seq__27882 = G__27894;
chunk__27883 = G__27895;
count__27884 = G__27896;
i__27885 = G__27897;
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

var seq__27936_27943 = cljs.core.seq.call(null,deps);
var chunk__27937_27944 = null;
var count__27938_27945 = (0);
var i__27939_27946 = (0);
while(true){
if((i__27939_27946 < count__27938_27945)){
var dep_27947 = cljs.core._nth.call(null,chunk__27937_27944,i__27939_27946);
topo_sort_helper_STAR_.call(null,dep_27947,(depth + (1)),state);

var G__27948 = seq__27936_27943;
var G__27949 = chunk__27937_27944;
var G__27950 = count__27938_27945;
var G__27951 = (i__27939_27946 + (1));
seq__27936_27943 = G__27948;
chunk__27937_27944 = G__27949;
count__27938_27945 = G__27950;
i__27939_27946 = G__27951;
continue;
} else {
var temp__4425__auto___27952 = cljs.core.seq.call(null,seq__27936_27943);
if(temp__4425__auto___27952){
var seq__27936_27953__$1 = temp__4425__auto___27952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27936_27953__$1)){
var c__19094__auto___27954 = cljs.core.chunk_first.call(null,seq__27936_27953__$1);
var G__27955 = cljs.core.chunk_rest.call(null,seq__27936_27953__$1);
var G__27956 = c__19094__auto___27954;
var G__27957 = cljs.core.count.call(null,c__19094__auto___27954);
var G__27958 = (0);
seq__27936_27943 = G__27955;
chunk__27937_27944 = G__27956;
count__27938_27945 = G__27957;
i__27939_27946 = G__27958;
continue;
} else {
var dep_27959 = cljs.core.first.call(null,seq__27936_27953__$1);
topo_sort_helper_STAR_.call(null,dep_27959,(depth + (1)),state);

var G__27960 = cljs.core.next.call(null,seq__27936_27953__$1);
var G__27961 = null;
var G__27962 = (0);
var G__27963 = (0);
seq__27936_27943 = G__27960;
chunk__27937_27944 = G__27961;
count__27938_27945 = G__27962;
i__27939_27946 = G__27963;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27940){
var vec__27942 = p__27940;
var x = cljs.core.nth.call(null,vec__27942,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27942,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27942,x,xs,get_deps__$1){
return (function (p1__27898_SHARP_){
return clojure.set.difference.call(null,p1__27898_SHARP_,x);
});})(vec__27942,x,xs,get_deps__$1))
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
var seq__27976 = cljs.core.seq.call(null,provides);
var chunk__27977 = null;
var count__27978 = (0);
var i__27979 = (0);
while(true){
if((i__27979 < count__27978)){
var prov = cljs.core._nth.call(null,chunk__27977,i__27979);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27980_27988 = cljs.core.seq.call(null,requires);
var chunk__27981_27989 = null;
var count__27982_27990 = (0);
var i__27983_27991 = (0);
while(true){
if((i__27983_27991 < count__27982_27990)){
var req_27992 = cljs.core._nth.call(null,chunk__27981_27989,i__27983_27991);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27992,prov);

var G__27993 = seq__27980_27988;
var G__27994 = chunk__27981_27989;
var G__27995 = count__27982_27990;
var G__27996 = (i__27983_27991 + (1));
seq__27980_27988 = G__27993;
chunk__27981_27989 = G__27994;
count__27982_27990 = G__27995;
i__27983_27991 = G__27996;
continue;
} else {
var temp__4425__auto___27997 = cljs.core.seq.call(null,seq__27980_27988);
if(temp__4425__auto___27997){
var seq__27980_27998__$1 = temp__4425__auto___27997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27980_27998__$1)){
var c__19094__auto___27999 = cljs.core.chunk_first.call(null,seq__27980_27998__$1);
var G__28000 = cljs.core.chunk_rest.call(null,seq__27980_27998__$1);
var G__28001 = c__19094__auto___27999;
var G__28002 = cljs.core.count.call(null,c__19094__auto___27999);
var G__28003 = (0);
seq__27980_27988 = G__28000;
chunk__27981_27989 = G__28001;
count__27982_27990 = G__28002;
i__27983_27991 = G__28003;
continue;
} else {
var req_28004 = cljs.core.first.call(null,seq__27980_27998__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28004,prov);

var G__28005 = cljs.core.next.call(null,seq__27980_27998__$1);
var G__28006 = null;
var G__28007 = (0);
var G__28008 = (0);
seq__27980_27988 = G__28005;
chunk__27981_27989 = G__28006;
count__27982_27990 = G__28007;
i__27983_27991 = G__28008;
continue;
}
} else {
}
}
break;
}

var G__28009 = seq__27976;
var G__28010 = chunk__27977;
var G__28011 = count__27978;
var G__28012 = (i__27979 + (1));
seq__27976 = G__28009;
chunk__27977 = G__28010;
count__27978 = G__28011;
i__27979 = G__28012;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27976);
if(temp__4425__auto__){
var seq__27976__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27976__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__27976__$1);
var G__28013 = cljs.core.chunk_rest.call(null,seq__27976__$1);
var G__28014 = c__19094__auto__;
var G__28015 = cljs.core.count.call(null,c__19094__auto__);
var G__28016 = (0);
seq__27976 = G__28013;
chunk__27977 = G__28014;
count__27978 = G__28015;
i__27979 = G__28016;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27976__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27984_28017 = cljs.core.seq.call(null,requires);
var chunk__27985_28018 = null;
var count__27986_28019 = (0);
var i__27987_28020 = (0);
while(true){
if((i__27987_28020 < count__27986_28019)){
var req_28021 = cljs.core._nth.call(null,chunk__27985_28018,i__27987_28020);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28021,prov);

var G__28022 = seq__27984_28017;
var G__28023 = chunk__27985_28018;
var G__28024 = count__27986_28019;
var G__28025 = (i__27987_28020 + (1));
seq__27984_28017 = G__28022;
chunk__27985_28018 = G__28023;
count__27986_28019 = G__28024;
i__27987_28020 = G__28025;
continue;
} else {
var temp__4425__auto___28026__$1 = cljs.core.seq.call(null,seq__27984_28017);
if(temp__4425__auto___28026__$1){
var seq__27984_28027__$1 = temp__4425__auto___28026__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27984_28027__$1)){
var c__19094__auto___28028 = cljs.core.chunk_first.call(null,seq__27984_28027__$1);
var G__28029 = cljs.core.chunk_rest.call(null,seq__27984_28027__$1);
var G__28030 = c__19094__auto___28028;
var G__28031 = cljs.core.count.call(null,c__19094__auto___28028);
var G__28032 = (0);
seq__27984_28017 = G__28029;
chunk__27985_28018 = G__28030;
count__27986_28019 = G__28031;
i__27987_28020 = G__28032;
continue;
} else {
var req_28033 = cljs.core.first.call(null,seq__27984_28027__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28033,prov);

var G__28034 = cljs.core.next.call(null,seq__27984_28027__$1);
var G__28035 = null;
var G__28036 = (0);
var G__28037 = (0);
seq__27984_28017 = G__28034;
chunk__27985_28018 = G__28035;
count__27986_28019 = G__28036;
i__27987_28020 = G__28037;
continue;
}
} else {
}
}
break;
}

var G__28038 = cljs.core.next.call(null,seq__27976__$1);
var G__28039 = null;
var G__28040 = (0);
var G__28041 = (0);
seq__27976 = G__28038;
chunk__27977 = G__28039;
count__27978 = G__28040;
i__27979 = G__28041;
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
var seq__28046_28050 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28047_28051 = null;
var count__28048_28052 = (0);
var i__28049_28053 = (0);
while(true){
if((i__28049_28053 < count__28048_28052)){
var ns_28054 = cljs.core._nth.call(null,chunk__28047_28051,i__28049_28053);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28054);

var G__28055 = seq__28046_28050;
var G__28056 = chunk__28047_28051;
var G__28057 = count__28048_28052;
var G__28058 = (i__28049_28053 + (1));
seq__28046_28050 = G__28055;
chunk__28047_28051 = G__28056;
count__28048_28052 = G__28057;
i__28049_28053 = G__28058;
continue;
} else {
var temp__4425__auto___28059 = cljs.core.seq.call(null,seq__28046_28050);
if(temp__4425__auto___28059){
var seq__28046_28060__$1 = temp__4425__auto___28059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28046_28060__$1)){
var c__19094__auto___28061 = cljs.core.chunk_first.call(null,seq__28046_28060__$1);
var G__28062 = cljs.core.chunk_rest.call(null,seq__28046_28060__$1);
var G__28063 = c__19094__auto___28061;
var G__28064 = cljs.core.count.call(null,c__19094__auto___28061);
var G__28065 = (0);
seq__28046_28050 = G__28062;
chunk__28047_28051 = G__28063;
count__28048_28052 = G__28064;
i__28049_28053 = G__28065;
continue;
} else {
var ns_28066 = cljs.core.first.call(null,seq__28046_28060__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28066);

var G__28067 = cljs.core.next.call(null,seq__28046_28060__$1);
var G__28068 = null;
var G__28069 = (0);
var G__28070 = (0);
seq__28046_28050 = G__28067;
chunk__28047_28051 = G__28068;
count__28048_28052 = G__28069;
i__28049_28053 = G__28070;
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
var G__28071__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28072__i = 0, G__28072__a = new Array(arguments.length -  0);
while (G__28072__i < G__28072__a.length) {G__28072__a[G__28072__i] = arguments[G__28072__i + 0]; ++G__28072__i;}
  args = new cljs.core.IndexedSeq(G__28072__a,0);
} 
return G__28071__delegate.call(this,args);};
G__28071.cljs$lang$maxFixedArity = 0;
G__28071.cljs$lang$applyTo = (function (arglist__28073){
var args = cljs.core.seq(arglist__28073);
return G__28071__delegate(args);
});
G__28071.cljs$core$IFn$_invoke$arity$variadic = G__28071__delegate;
return G__28071;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28075 = cljs.core._EQ_;
var expr__28076 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28075.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28076))){
var path_parts = ((function (pred__28075,expr__28076){
return (function (p1__28074_SHARP_){
return clojure.string.split.call(null,p1__28074_SHARP_,/[\/\\]/);
});})(pred__28075,expr__28076))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28075,expr__28076){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28078){if((e28078 instanceof Error)){
var e = e28078;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28078;

}
}})());
});
;})(path_parts,sep,root,pred__28075,expr__28076))
} else {
if(cljs.core.truth_(pred__28075.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28076))){
return ((function (pred__28075,expr__28076){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28075,expr__28076){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28075,expr__28076))
);

return deferred.addErrback(((function (deferred,pred__28075,expr__28076){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28075,expr__28076))
);
});
;})(pred__28075,expr__28076))
} else {
return ((function (pred__28075,expr__28076){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28075,expr__28076))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28079,callback){
var map__28082 = p__28079;
var map__28082__$1 = ((((!((map__28082 == null)))?((((map__28082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28082):map__28082);
var file_msg = map__28082__$1;
var request_url = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28082,map__28082__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28082,map__28082__$1,file_msg,request_url))
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
return (function (state_28106){
var state_val_28107 = (state_28106[(1)]);
if((state_val_28107 === (7))){
var inst_28102 = (state_28106[(2)]);
var state_28106__$1 = state_28106;
var statearr_28108_28128 = state_28106__$1;
(statearr_28108_28128[(2)] = inst_28102);

(statearr_28108_28128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28107 === (1))){
var state_28106__$1 = state_28106;
var statearr_28109_28129 = state_28106__$1;
(statearr_28109_28129[(2)] = null);

(statearr_28109_28129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28107 === (4))){
var inst_28086 = (state_28106[(7)]);
var inst_28086__$1 = (state_28106[(2)]);
var state_28106__$1 = (function (){var statearr_28110 = state_28106;
(statearr_28110[(7)] = inst_28086__$1);

return statearr_28110;
})();
if(cljs.core.truth_(inst_28086__$1)){
var statearr_28111_28130 = state_28106__$1;
(statearr_28111_28130[(1)] = (5));

} else {
var statearr_28112_28131 = state_28106__$1;
(statearr_28112_28131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28107 === (6))){
var state_28106__$1 = state_28106;
var statearr_28113_28132 = state_28106__$1;
(statearr_28113_28132[(2)] = null);

(statearr_28113_28132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28107 === (3))){
var inst_28104 = (state_28106[(2)]);
var state_28106__$1 = state_28106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28106__$1,inst_28104);
} else {
if((state_val_28107 === (2))){
var state_28106__$1 = state_28106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28106__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28107 === (11))){
var inst_28098 = (state_28106[(2)]);
var state_28106__$1 = (function (){var statearr_28114 = state_28106;
(statearr_28114[(8)] = inst_28098);

return statearr_28114;
})();
var statearr_28115_28133 = state_28106__$1;
(statearr_28115_28133[(2)] = null);

(statearr_28115_28133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28107 === (9))){
var inst_28090 = (state_28106[(9)]);
var inst_28092 = (state_28106[(10)]);
var inst_28094 = inst_28092.call(null,inst_28090);
var state_28106__$1 = state_28106;
var statearr_28116_28134 = state_28106__$1;
(statearr_28116_28134[(2)] = inst_28094);

(statearr_28116_28134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28107 === (5))){
var inst_28086 = (state_28106[(7)]);
var inst_28088 = figwheel.client.file_reloading.blocking_load.call(null,inst_28086);
var state_28106__$1 = state_28106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28106__$1,(8),inst_28088);
} else {
if((state_val_28107 === (10))){
var inst_28090 = (state_28106[(9)]);
var inst_28096 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28090);
var state_28106__$1 = state_28106;
var statearr_28117_28135 = state_28106__$1;
(statearr_28117_28135[(2)] = inst_28096);

(statearr_28117_28135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28107 === (8))){
var inst_28092 = (state_28106[(10)]);
var inst_28086 = (state_28106[(7)]);
var inst_28090 = (state_28106[(2)]);
var inst_28091 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28092__$1 = cljs.core.get.call(null,inst_28091,inst_28086);
var state_28106__$1 = (function (){var statearr_28118 = state_28106;
(statearr_28118[(9)] = inst_28090);

(statearr_28118[(10)] = inst_28092__$1);

return statearr_28118;
})();
if(cljs.core.truth_(inst_28092__$1)){
var statearr_28119_28136 = state_28106__$1;
(statearr_28119_28136[(1)] = (9));

} else {
var statearr_28120_28137 = state_28106__$1;
(statearr_28120_28137[(1)] = (10));

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
var statearr_28124 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28124[(0)] = figwheel$client$file_reloading$state_machine__20390__auto__);

(statearr_28124[(1)] = (1));

return statearr_28124;
});
var figwheel$client$file_reloading$state_machine__20390__auto____1 = (function (state_28106){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_28106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e28125){if((e28125 instanceof Object)){
var ex__20393__auto__ = e28125;
var statearr_28126_28138 = state_28106;
(statearr_28126_28138[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28139 = state_28106;
state_28106 = G__28139;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20390__auto__ = function(state_28106){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20390__auto____1.call(this,state_28106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20390__auto____0;
figwheel$client$file_reloading$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20390__auto____1;
return figwheel$client$file_reloading$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_28127 = f__20411__auto__.call(null);
(statearr_28127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_28127;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28140,callback){
var map__28143 = p__28140;
var map__28143__$1 = ((((!((map__28143 == null)))?((((map__28143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28143):map__28143);
var file_msg = map__28143__$1;
var namespace = cljs.core.get.call(null,map__28143__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28143,map__28143__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28143,map__28143__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28145){
var map__28148 = p__28145;
var map__28148__$1 = ((((!((map__28148 == null)))?((((map__28148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28148):map__28148);
var file_msg = map__28148__$1;
var namespace = cljs.core.get.call(null,map__28148__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28150,callback){
var map__28153 = p__28150;
var map__28153__$1 = ((((!((map__28153 == null)))?((((map__28153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28153):map__28153);
var file_msg = map__28153__$1;
var request_url = cljs.core.get.call(null,map__28153__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28153__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20410__auto___28241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___28241,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___28241,out){
return (function (state_28223){
var state_val_28224 = (state_28223[(1)]);
if((state_val_28224 === (1))){
var inst_28201 = cljs.core.nth.call(null,files,(0),null);
var inst_28202 = cljs.core.nthnext.call(null,files,(1));
var inst_28203 = files;
var state_28223__$1 = (function (){var statearr_28225 = state_28223;
(statearr_28225[(7)] = inst_28202);

(statearr_28225[(8)] = inst_28203);

(statearr_28225[(9)] = inst_28201);

return statearr_28225;
})();
var statearr_28226_28242 = state_28223__$1;
(statearr_28226_28242[(2)] = null);

(statearr_28226_28242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (2))){
var inst_28206 = (state_28223[(10)]);
var inst_28203 = (state_28223[(8)]);
var inst_28206__$1 = cljs.core.nth.call(null,inst_28203,(0),null);
var inst_28207 = cljs.core.nthnext.call(null,inst_28203,(1));
var inst_28208 = (inst_28206__$1 == null);
var inst_28209 = cljs.core.not.call(null,inst_28208);
var state_28223__$1 = (function (){var statearr_28227 = state_28223;
(statearr_28227[(10)] = inst_28206__$1);

(statearr_28227[(11)] = inst_28207);

return statearr_28227;
})();
if(inst_28209){
var statearr_28228_28243 = state_28223__$1;
(statearr_28228_28243[(1)] = (4));

} else {
var statearr_28229_28244 = state_28223__$1;
(statearr_28229_28244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (3))){
var inst_28221 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28223__$1,inst_28221);
} else {
if((state_val_28224 === (4))){
var inst_28206 = (state_28223[(10)]);
var inst_28211 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28206);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(7),inst_28211);
} else {
if((state_val_28224 === (5))){
var inst_28217 = cljs.core.async.close_BANG_.call(null,out);
var state_28223__$1 = state_28223;
var statearr_28230_28245 = state_28223__$1;
(statearr_28230_28245[(2)] = inst_28217);

(statearr_28230_28245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (6))){
var inst_28219 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28231_28246 = state_28223__$1;
(statearr_28231_28246[(2)] = inst_28219);

(statearr_28231_28246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (7))){
var inst_28207 = (state_28223[(11)]);
var inst_28213 = (state_28223[(2)]);
var inst_28214 = cljs.core.async.put_BANG_.call(null,out,inst_28213);
var inst_28203 = inst_28207;
var state_28223__$1 = (function (){var statearr_28232 = state_28223;
(statearr_28232[(12)] = inst_28214);

(statearr_28232[(8)] = inst_28203);

return statearr_28232;
})();
var statearr_28233_28247 = state_28223__$1;
(statearr_28233_28247[(2)] = null);

(statearr_28233_28247[(1)] = (2));


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
});})(c__20410__auto___28241,out))
;
return ((function (switch__20389__auto__,c__20410__auto___28241,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____0 = (function (){
var statearr_28237 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28237[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__);

(statearr_28237[(1)] = (1));

return statearr_28237;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____1 = (function (state_28223){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_28223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e28238){if((e28238 instanceof Object)){
var ex__20393__auto__ = e28238;
var statearr_28239_28248 = state_28223;
(statearr_28239_28248[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28249 = state_28223;
state_28223 = G__28249;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__ = function(state_28223){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____1.call(this,state_28223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___28241,out))
})();
var state__20412__auto__ = (function (){var statearr_28240 = f__20411__auto__.call(null);
(statearr_28240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___28241);

return statearr_28240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___28241,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28250,opts){
var map__28254 = p__28250;
var map__28254__$1 = ((((!((map__28254 == null)))?((((map__28254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28254):map__28254);
var eval_body__$1 = cljs.core.get.call(null,map__28254__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28254__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28256){var e = e28256;
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
return (function (p1__28257_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28257_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28262){
var vec__28263 = p__28262;
var k = cljs.core.nth.call(null,vec__28263,(0),null);
var v = cljs.core.nth.call(null,vec__28263,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28264){
var vec__28265 = p__28264;
var k = cljs.core.nth.call(null,vec__28265,(0),null);
var v = cljs.core.nth.call(null,vec__28265,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28269,p__28270){
var map__28517 = p__28269;
var map__28517__$1 = ((((!((map__28517 == null)))?((((map__28517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28517):map__28517);
var opts = map__28517__$1;
var before_jsload = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28518 = p__28270;
var map__28518__$1 = ((((!((map__28518 == null)))?((((map__28518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28518):map__28518);
var msg = map__28518__$1;
var files = cljs.core.get.call(null,map__28518__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28518__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28518__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28671){
var state_val_28672 = (state_28671[(1)]);
if((state_val_28672 === (7))){
var inst_28532 = (state_28671[(7)]);
var inst_28535 = (state_28671[(8)]);
var inst_28534 = (state_28671[(9)]);
var inst_28533 = (state_28671[(10)]);
var inst_28540 = cljs.core._nth.call(null,inst_28533,inst_28535);
var inst_28541 = figwheel.client.file_reloading.eval_body.call(null,inst_28540,opts);
var inst_28542 = (inst_28535 + (1));
var tmp28673 = inst_28532;
var tmp28674 = inst_28534;
var tmp28675 = inst_28533;
var inst_28532__$1 = tmp28673;
var inst_28533__$1 = tmp28675;
var inst_28534__$1 = tmp28674;
var inst_28535__$1 = inst_28542;
var state_28671__$1 = (function (){var statearr_28676 = state_28671;
(statearr_28676[(7)] = inst_28532__$1);

(statearr_28676[(8)] = inst_28535__$1);

(statearr_28676[(9)] = inst_28534__$1);

(statearr_28676[(11)] = inst_28541);

(statearr_28676[(10)] = inst_28533__$1);

return statearr_28676;
})();
var statearr_28677_28763 = state_28671__$1;
(statearr_28677_28763[(2)] = null);

(statearr_28677_28763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (20))){
var inst_28575 = (state_28671[(12)]);
var inst_28583 = figwheel.client.file_reloading.sort_files.call(null,inst_28575);
var state_28671__$1 = state_28671;
var statearr_28678_28764 = state_28671__$1;
(statearr_28678_28764[(2)] = inst_28583);

(statearr_28678_28764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (27))){
var state_28671__$1 = state_28671;
var statearr_28679_28765 = state_28671__$1;
(statearr_28679_28765[(2)] = null);

(statearr_28679_28765[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (1))){
var inst_28524 = (state_28671[(13)]);
var inst_28521 = before_jsload.call(null,files);
var inst_28522 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28523 = (function (){return ((function (inst_28524,inst_28521,inst_28522,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28266_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28266_SHARP_);
});
;})(inst_28524,inst_28521,inst_28522,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28524__$1 = cljs.core.filter.call(null,inst_28523,files);
var inst_28525 = cljs.core.not_empty.call(null,inst_28524__$1);
var state_28671__$1 = (function (){var statearr_28680 = state_28671;
(statearr_28680[(14)] = inst_28521);

(statearr_28680[(15)] = inst_28522);

(statearr_28680[(13)] = inst_28524__$1);

return statearr_28680;
})();
if(cljs.core.truth_(inst_28525)){
var statearr_28681_28766 = state_28671__$1;
(statearr_28681_28766[(1)] = (2));

} else {
var statearr_28682_28767 = state_28671__$1;
(statearr_28682_28767[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (24))){
var state_28671__$1 = state_28671;
var statearr_28683_28768 = state_28671__$1;
(statearr_28683_28768[(2)] = null);

(statearr_28683_28768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (39))){
var inst_28625 = (state_28671[(16)]);
var state_28671__$1 = state_28671;
var statearr_28684_28769 = state_28671__$1;
(statearr_28684_28769[(2)] = inst_28625);

(statearr_28684_28769[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (46))){
var inst_28666 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28685_28770 = state_28671__$1;
(statearr_28685_28770[(2)] = inst_28666);

(statearr_28685_28770[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (4))){
var inst_28569 = (state_28671[(2)]);
var inst_28570 = cljs.core.List.EMPTY;
var inst_28571 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28570);
var inst_28572 = (function (){return ((function (inst_28569,inst_28570,inst_28571,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28267_SHARP_){
var and__18279__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28267_SHARP_);
if(cljs.core.truth_(and__18279__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28267_SHARP_));
} else {
return and__18279__auto__;
}
});
;})(inst_28569,inst_28570,inst_28571,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28573 = cljs.core.filter.call(null,inst_28572,files);
var inst_28574 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28575 = cljs.core.concat.call(null,inst_28573,inst_28574);
var state_28671__$1 = (function (){var statearr_28686 = state_28671;
(statearr_28686[(17)] = inst_28569);

(statearr_28686[(18)] = inst_28571);

(statearr_28686[(12)] = inst_28575);

return statearr_28686;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28687_28771 = state_28671__$1;
(statearr_28687_28771[(1)] = (16));

} else {
var statearr_28688_28772 = state_28671__$1;
(statearr_28688_28772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (15))){
var inst_28559 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28689_28773 = state_28671__$1;
(statearr_28689_28773[(2)] = inst_28559);

(statearr_28689_28773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (21))){
var inst_28585 = (state_28671[(19)]);
var inst_28585__$1 = (state_28671[(2)]);
var inst_28586 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28585__$1);
var state_28671__$1 = (function (){var statearr_28690 = state_28671;
(statearr_28690[(19)] = inst_28585__$1);

return statearr_28690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28671__$1,(22),inst_28586);
} else {
if((state_val_28672 === (31))){
var inst_28669 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28671__$1,inst_28669);
} else {
if((state_val_28672 === (32))){
var inst_28625 = (state_28671[(16)]);
var inst_28630 = inst_28625.cljs$lang$protocol_mask$partition0$;
var inst_28631 = (inst_28630 & (64));
var inst_28632 = inst_28625.cljs$core$ISeq$;
var inst_28633 = (inst_28631) || (inst_28632);
var state_28671__$1 = state_28671;
if(cljs.core.truth_(inst_28633)){
var statearr_28691_28774 = state_28671__$1;
(statearr_28691_28774[(1)] = (35));

} else {
var statearr_28692_28775 = state_28671__$1;
(statearr_28692_28775[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (40))){
var inst_28646 = (state_28671[(20)]);
var inst_28645 = (state_28671[(2)]);
var inst_28646__$1 = cljs.core.get.call(null,inst_28645,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28647 = cljs.core.get.call(null,inst_28645,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28648 = cljs.core.not_empty.call(null,inst_28646__$1);
var state_28671__$1 = (function (){var statearr_28693 = state_28671;
(statearr_28693[(20)] = inst_28646__$1);

(statearr_28693[(21)] = inst_28647);

return statearr_28693;
})();
if(cljs.core.truth_(inst_28648)){
var statearr_28694_28776 = state_28671__$1;
(statearr_28694_28776[(1)] = (41));

} else {
var statearr_28695_28777 = state_28671__$1;
(statearr_28695_28777[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (33))){
var state_28671__$1 = state_28671;
var statearr_28696_28778 = state_28671__$1;
(statearr_28696_28778[(2)] = false);

(statearr_28696_28778[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (13))){
var inst_28545 = (state_28671[(22)]);
var inst_28549 = cljs.core.chunk_first.call(null,inst_28545);
var inst_28550 = cljs.core.chunk_rest.call(null,inst_28545);
var inst_28551 = cljs.core.count.call(null,inst_28549);
var inst_28532 = inst_28550;
var inst_28533 = inst_28549;
var inst_28534 = inst_28551;
var inst_28535 = (0);
var state_28671__$1 = (function (){var statearr_28697 = state_28671;
(statearr_28697[(7)] = inst_28532);

(statearr_28697[(8)] = inst_28535);

(statearr_28697[(9)] = inst_28534);

(statearr_28697[(10)] = inst_28533);

return statearr_28697;
})();
var statearr_28698_28779 = state_28671__$1;
(statearr_28698_28779[(2)] = null);

(statearr_28698_28779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (22))){
var inst_28588 = (state_28671[(23)]);
var inst_28589 = (state_28671[(24)]);
var inst_28585 = (state_28671[(19)]);
var inst_28593 = (state_28671[(25)]);
var inst_28588__$1 = (state_28671[(2)]);
var inst_28589__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28588__$1);
var inst_28590 = (function (){var all_files = inst_28585;
var res_SINGLEQUOTE_ = inst_28588__$1;
var res = inst_28589__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28588,inst_28589,inst_28585,inst_28593,inst_28588__$1,inst_28589__$1,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28268_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28268_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28588,inst_28589,inst_28585,inst_28593,inst_28588__$1,inst_28589__$1,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28591 = cljs.core.filter.call(null,inst_28590,inst_28588__$1);
var inst_28592 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28593__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28592);
var inst_28594 = cljs.core.not_empty.call(null,inst_28593__$1);
var state_28671__$1 = (function (){var statearr_28699 = state_28671;
(statearr_28699[(23)] = inst_28588__$1);

(statearr_28699[(26)] = inst_28591);

(statearr_28699[(24)] = inst_28589__$1);

(statearr_28699[(25)] = inst_28593__$1);

return statearr_28699;
})();
if(cljs.core.truth_(inst_28594)){
var statearr_28700_28780 = state_28671__$1;
(statearr_28700_28780[(1)] = (23));

} else {
var statearr_28701_28781 = state_28671__$1;
(statearr_28701_28781[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (36))){
var state_28671__$1 = state_28671;
var statearr_28702_28782 = state_28671__$1;
(statearr_28702_28782[(2)] = false);

(statearr_28702_28782[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (41))){
var inst_28646 = (state_28671[(20)]);
var inst_28650 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28651 = cljs.core.map.call(null,inst_28650,inst_28646);
var inst_28652 = cljs.core.pr_str.call(null,inst_28651);
var inst_28653 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28652)].join('');
var inst_28654 = figwheel.client.utils.log.call(null,inst_28653);
var state_28671__$1 = state_28671;
var statearr_28703_28783 = state_28671__$1;
(statearr_28703_28783[(2)] = inst_28654);

(statearr_28703_28783[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (43))){
var inst_28647 = (state_28671[(21)]);
var inst_28657 = (state_28671[(2)]);
var inst_28658 = cljs.core.not_empty.call(null,inst_28647);
var state_28671__$1 = (function (){var statearr_28704 = state_28671;
(statearr_28704[(27)] = inst_28657);

return statearr_28704;
})();
if(cljs.core.truth_(inst_28658)){
var statearr_28705_28784 = state_28671__$1;
(statearr_28705_28784[(1)] = (44));

} else {
var statearr_28706_28785 = state_28671__$1;
(statearr_28706_28785[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (29))){
var inst_28588 = (state_28671[(23)]);
var inst_28625 = (state_28671[(16)]);
var inst_28591 = (state_28671[(26)]);
var inst_28589 = (state_28671[(24)]);
var inst_28585 = (state_28671[(19)]);
var inst_28593 = (state_28671[(25)]);
var inst_28621 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28624 = (function (){var all_files = inst_28585;
var res_SINGLEQUOTE_ = inst_28588;
var res = inst_28589;
var files_not_loaded = inst_28591;
var dependencies_that_loaded = inst_28593;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28588,inst_28625,inst_28591,inst_28589,inst_28585,inst_28593,inst_28621,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28623){
var map__28707 = p__28623;
var map__28707__$1 = ((((!((map__28707 == null)))?((((map__28707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28707):map__28707);
var namespace = cljs.core.get.call(null,map__28707__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28588,inst_28625,inst_28591,inst_28589,inst_28585,inst_28593,inst_28621,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28625__$1 = cljs.core.group_by.call(null,inst_28624,inst_28591);
var inst_28627 = (inst_28625__$1 == null);
var inst_28628 = cljs.core.not.call(null,inst_28627);
var state_28671__$1 = (function (){var statearr_28709 = state_28671;
(statearr_28709[(16)] = inst_28625__$1);

(statearr_28709[(28)] = inst_28621);

return statearr_28709;
})();
if(inst_28628){
var statearr_28710_28786 = state_28671__$1;
(statearr_28710_28786[(1)] = (32));

} else {
var statearr_28711_28787 = state_28671__$1;
(statearr_28711_28787[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (44))){
var inst_28647 = (state_28671[(21)]);
var inst_28660 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28647);
var inst_28661 = cljs.core.pr_str.call(null,inst_28660);
var inst_28662 = [cljs.core.str("not required: "),cljs.core.str(inst_28661)].join('');
var inst_28663 = figwheel.client.utils.log.call(null,inst_28662);
var state_28671__$1 = state_28671;
var statearr_28712_28788 = state_28671__$1;
(statearr_28712_28788[(2)] = inst_28663);

(statearr_28712_28788[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (6))){
var inst_28566 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28713_28789 = state_28671__$1;
(statearr_28713_28789[(2)] = inst_28566);

(statearr_28713_28789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (28))){
var inst_28591 = (state_28671[(26)]);
var inst_28618 = (state_28671[(2)]);
var inst_28619 = cljs.core.not_empty.call(null,inst_28591);
var state_28671__$1 = (function (){var statearr_28714 = state_28671;
(statearr_28714[(29)] = inst_28618);

return statearr_28714;
})();
if(cljs.core.truth_(inst_28619)){
var statearr_28715_28790 = state_28671__$1;
(statearr_28715_28790[(1)] = (29));

} else {
var statearr_28716_28791 = state_28671__$1;
(statearr_28716_28791[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (25))){
var inst_28589 = (state_28671[(24)]);
var inst_28605 = (state_28671[(2)]);
var inst_28606 = cljs.core.not_empty.call(null,inst_28589);
var state_28671__$1 = (function (){var statearr_28717 = state_28671;
(statearr_28717[(30)] = inst_28605);

return statearr_28717;
})();
if(cljs.core.truth_(inst_28606)){
var statearr_28718_28792 = state_28671__$1;
(statearr_28718_28792[(1)] = (26));

} else {
var statearr_28719_28793 = state_28671__$1;
(statearr_28719_28793[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (34))){
var inst_28640 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
if(cljs.core.truth_(inst_28640)){
var statearr_28720_28794 = state_28671__$1;
(statearr_28720_28794[(1)] = (38));

} else {
var statearr_28721_28795 = state_28671__$1;
(statearr_28721_28795[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (17))){
var state_28671__$1 = state_28671;
var statearr_28722_28796 = state_28671__$1;
(statearr_28722_28796[(2)] = recompile_dependents);

(statearr_28722_28796[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (3))){
var state_28671__$1 = state_28671;
var statearr_28723_28797 = state_28671__$1;
(statearr_28723_28797[(2)] = null);

(statearr_28723_28797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (12))){
var inst_28562 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28724_28798 = state_28671__$1;
(statearr_28724_28798[(2)] = inst_28562);

(statearr_28724_28798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (2))){
var inst_28524 = (state_28671[(13)]);
var inst_28531 = cljs.core.seq.call(null,inst_28524);
var inst_28532 = inst_28531;
var inst_28533 = null;
var inst_28534 = (0);
var inst_28535 = (0);
var state_28671__$1 = (function (){var statearr_28725 = state_28671;
(statearr_28725[(7)] = inst_28532);

(statearr_28725[(8)] = inst_28535);

(statearr_28725[(9)] = inst_28534);

(statearr_28725[(10)] = inst_28533);

return statearr_28725;
})();
var statearr_28726_28799 = state_28671__$1;
(statearr_28726_28799[(2)] = null);

(statearr_28726_28799[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (23))){
var inst_28588 = (state_28671[(23)]);
var inst_28591 = (state_28671[(26)]);
var inst_28589 = (state_28671[(24)]);
var inst_28585 = (state_28671[(19)]);
var inst_28593 = (state_28671[(25)]);
var inst_28596 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28598 = (function (){var all_files = inst_28585;
var res_SINGLEQUOTE_ = inst_28588;
var res = inst_28589;
var files_not_loaded = inst_28591;
var dependencies_that_loaded = inst_28593;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28588,inst_28591,inst_28589,inst_28585,inst_28593,inst_28596,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28597){
var map__28727 = p__28597;
var map__28727__$1 = ((((!((map__28727 == null)))?((((map__28727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28727):map__28727);
var request_url = cljs.core.get.call(null,map__28727__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28588,inst_28591,inst_28589,inst_28585,inst_28593,inst_28596,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28599 = cljs.core.reverse.call(null,inst_28593);
var inst_28600 = cljs.core.map.call(null,inst_28598,inst_28599);
var inst_28601 = cljs.core.pr_str.call(null,inst_28600);
var inst_28602 = figwheel.client.utils.log.call(null,inst_28601);
var state_28671__$1 = (function (){var statearr_28729 = state_28671;
(statearr_28729[(31)] = inst_28596);

return statearr_28729;
})();
var statearr_28730_28800 = state_28671__$1;
(statearr_28730_28800[(2)] = inst_28602);

(statearr_28730_28800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (35))){
var state_28671__$1 = state_28671;
var statearr_28731_28801 = state_28671__$1;
(statearr_28731_28801[(2)] = true);

(statearr_28731_28801[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (19))){
var inst_28575 = (state_28671[(12)]);
var inst_28581 = figwheel.client.file_reloading.expand_files.call(null,inst_28575);
var state_28671__$1 = state_28671;
var statearr_28732_28802 = state_28671__$1;
(statearr_28732_28802[(2)] = inst_28581);

(statearr_28732_28802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (11))){
var state_28671__$1 = state_28671;
var statearr_28733_28803 = state_28671__$1;
(statearr_28733_28803[(2)] = null);

(statearr_28733_28803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (9))){
var inst_28564 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28734_28804 = state_28671__$1;
(statearr_28734_28804[(2)] = inst_28564);

(statearr_28734_28804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (5))){
var inst_28535 = (state_28671[(8)]);
var inst_28534 = (state_28671[(9)]);
var inst_28537 = (inst_28535 < inst_28534);
var inst_28538 = inst_28537;
var state_28671__$1 = state_28671;
if(cljs.core.truth_(inst_28538)){
var statearr_28735_28805 = state_28671__$1;
(statearr_28735_28805[(1)] = (7));

} else {
var statearr_28736_28806 = state_28671__$1;
(statearr_28736_28806[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (14))){
var inst_28545 = (state_28671[(22)]);
var inst_28554 = cljs.core.first.call(null,inst_28545);
var inst_28555 = figwheel.client.file_reloading.eval_body.call(null,inst_28554,opts);
var inst_28556 = cljs.core.next.call(null,inst_28545);
var inst_28532 = inst_28556;
var inst_28533 = null;
var inst_28534 = (0);
var inst_28535 = (0);
var state_28671__$1 = (function (){var statearr_28737 = state_28671;
(statearr_28737[(7)] = inst_28532);

(statearr_28737[(32)] = inst_28555);

(statearr_28737[(8)] = inst_28535);

(statearr_28737[(9)] = inst_28534);

(statearr_28737[(10)] = inst_28533);

return statearr_28737;
})();
var statearr_28738_28807 = state_28671__$1;
(statearr_28738_28807[(2)] = null);

(statearr_28738_28807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (45))){
var state_28671__$1 = state_28671;
var statearr_28739_28808 = state_28671__$1;
(statearr_28739_28808[(2)] = null);

(statearr_28739_28808[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (26))){
var inst_28588 = (state_28671[(23)]);
var inst_28591 = (state_28671[(26)]);
var inst_28589 = (state_28671[(24)]);
var inst_28585 = (state_28671[(19)]);
var inst_28593 = (state_28671[(25)]);
var inst_28608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28610 = (function (){var all_files = inst_28585;
var res_SINGLEQUOTE_ = inst_28588;
var res = inst_28589;
var files_not_loaded = inst_28591;
var dependencies_that_loaded = inst_28593;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28588,inst_28591,inst_28589,inst_28585,inst_28593,inst_28608,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28609){
var map__28740 = p__28609;
var map__28740__$1 = ((((!((map__28740 == null)))?((((map__28740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28740):map__28740);
var namespace = cljs.core.get.call(null,map__28740__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28740__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28588,inst_28591,inst_28589,inst_28585,inst_28593,inst_28608,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28611 = cljs.core.map.call(null,inst_28610,inst_28589);
var inst_28612 = cljs.core.pr_str.call(null,inst_28611);
var inst_28613 = figwheel.client.utils.log.call(null,inst_28612);
var inst_28614 = (function (){var all_files = inst_28585;
var res_SINGLEQUOTE_ = inst_28588;
var res = inst_28589;
var files_not_loaded = inst_28591;
var dependencies_that_loaded = inst_28593;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28588,inst_28591,inst_28589,inst_28585,inst_28593,inst_28608,inst_28610,inst_28611,inst_28612,inst_28613,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28588,inst_28591,inst_28589,inst_28585,inst_28593,inst_28608,inst_28610,inst_28611,inst_28612,inst_28613,state_val_28672,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28615 = setTimeout(inst_28614,(10));
var state_28671__$1 = (function (){var statearr_28742 = state_28671;
(statearr_28742[(33)] = inst_28608);

(statearr_28742[(34)] = inst_28613);

return statearr_28742;
})();
var statearr_28743_28809 = state_28671__$1;
(statearr_28743_28809[(2)] = inst_28615);

(statearr_28743_28809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (16))){
var state_28671__$1 = state_28671;
var statearr_28744_28810 = state_28671__$1;
(statearr_28744_28810[(2)] = reload_dependents);

(statearr_28744_28810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (38))){
var inst_28625 = (state_28671[(16)]);
var inst_28642 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28625);
var state_28671__$1 = state_28671;
var statearr_28745_28811 = state_28671__$1;
(statearr_28745_28811[(2)] = inst_28642);

(statearr_28745_28811[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (30))){
var state_28671__$1 = state_28671;
var statearr_28746_28812 = state_28671__$1;
(statearr_28746_28812[(2)] = null);

(statearr_28746_28812[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (10))){
var inst_28545 = (state_28671[(22)]);
var inst_28547 = cljs.core.chunked_seq_QMARK_.call(null,inst_28545);
var state_28671__$1 = state_28671;
if(inst_28547){
var statearr_28747_28813 = state_28671__$1;
(statearr_28747_28813[(1)] = (13));

} else {
var statearr_28748_28814 = state_28671__$1;
(statearr_28748_28814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (18))){
var inst_28579 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
if(cljs.core.truth_(inst_28579)){
var statearr_28749_28815 = state_28671__$1;
(statearr_28749_28815[(1)] = (19));

} else {
var statearr_28750_28816 = state_28671__$1;
(statearr_28750_28816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (42))){
var state_28671__$1 = state_28671;
var statearr_28751_28817 = state_28671__$1;
(statearr_28751_28817[(2)] = null);

(statearr_28751_28817[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (37))){
var inst_28637 = (state_28671[(2)]);
var state_28671__$1 = state_28671;
var statearr_28752_28818 = state_28671__$1;
(statearr_28752_28818[(2)] = inst_28637);

(statearr_28752_28818[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28672 === (8))){
var inst_28545 = (state_28671[(22)]);
var inst_28532 = (state_28671[(7)]);
var inst_28545__$1 = cljs.core.seq.call(null,inst_28532);
var state_28671__$1 = (function (){var statearr_28753 = state_28671;
(statearr_28753[(22)] = inst_28545__$1);

return statearr_28753;
})();
if(inst_28545__$1){
var statearr_28754_28819 = state_28671__$1;
(statearr_28754_28819[(1)] = (10));

} else {
var statearr_28755_28820 = state_28671__$1;
(statearr_28755_28820[(1)] = (11));

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
});})(c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20389__auto__,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____0 = (function (){
var statearr_28759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28759[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__);

(statearr_28759[(1)] = (1));

return statearr_28759;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____1 = (function (state_28671){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_28671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e28760){if((e28760 instanceof Object)){
var ex__20393__auto__ = e28760;
var statearr_28761_28821 = state_28671;
(statearr_28761_28821[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28822 = state_28671;
state_28671 = G__28822;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__ = function(state_28671){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____1.call(this,state_28671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20412__auto__ = (function (){var statearr_28762 = f__20411__auto__.call(null);
(statearr_28762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_28762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__,map__28517,map__28517__$1,opts,before_jsload,on_jsload,reload_dependents,map__28518,map__28518__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20410__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28825,link){
var map__28828 = p__28825;
var map__28828__$1 = ((((!((map__28828 == null)))?((((map__28828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28828):map__28828);
var file = cljs.core.get.call(null,map__28828__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28828,map__28828__$1,file){
return (function (p1__28823_SHARP_,p2__28824_SHARP_){
if(cljs.core._EQ_.call(null,p1__28823_SHARP_,p2__28824_SHARP_)){
return p1__28823_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28828,map__28828__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28834){
var map__28835 = p__28834;
var map__28835__$1 = ((((!((map__28835 == null)))?((((map__28835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28835):map__28835);
var match_length = cljs.core.get.call(null,map__28835__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28835__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28830_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28830_SHARP_);
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
var args28837 = [];
var len__19349__auto___28840 = arguments.length;
var i__19350__auto___28841 = (0);
while(true){
if((i__19350__auto___28841 < len__19349__auto___28840)){
args28837.push((arguments[i__19350__auto___28841]));

var G__28842 = (i__19350__auto___28841 + (1));
i__19350__auto___28841 = G__28842;
continue;
} else {
}
break;
}

var G__28839 = args28837.length;
switch (G__28839) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28837.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28844_SHARP_,p2__28845_SHARP_){
return cljs.core.assoc.call(null,p1__28844_SHARP_,cljs.core.get.call(null,p2__28845_SHARP_,key),p2__28845_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28846){
var map__28849 = p__28846;
var map__28849__$1 = ((((!((map__28849 == null)))?((((map__28849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28849):map__28849);
var f_data = map__28849__$1;
var file = cljs.core.get.call(null,map__28849__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28851,files_msg){
var map__28858 = p__28851;
var map__28858__$1 = ((((!((map__28858 == null)))?((((map__28858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28858):map__28858);
var opts = map__28858__$1;
var on_cssload = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28860_28864 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28861_28865 = null;
var count__28862_28866 = (0);
var i__28863_28867 = (0);
while(true){
if((i__28863_28867 < count__28862_28866)){
var f_28868 = cljs.core._nth.call(null,chunk__28861_28865,i__28863_28867);
figwheel.client.file_reloading.reload_css_file.call(null,f_28868);

var G__28869 = seq__28860_28864;
var G__28870 = chunk__28861_28865;
var G__28871 = count__28862_28866;
var G__28872 = (i__28863_28867 + (1));
seq__28860_28864 = G__28869;
chunk__28861_28865 = G__28870;
count__28862_28866 = G__28871;
i__28863_28867 = G__28872;
continue;
} else {
var temp__4425__auto___28873 = cljs.core.seq.call(null,seq__28860_28864);
if(temp__4425__auto___28873){
var seq__28860_28874__$1 = temp__4425__auto___28873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28860_28874__$1)){
var c__19094__auto___28875 = cljs.core.chunk_first.call(null,seq__28860_28874__$1);
var G__28876 = cljs.core.chunk_rest.call(null,seq__28860_28874__$1);
var G__28877 = c__19094__auto___28875;
var G__28878 = cljs.core.count.call(null,c__19094__auto___28875);
var G__28879 = (0);
seq__28860_28864 = G__28876;
chunk__28861_28865 = G__28877;
count__28862_28866 = G__28878;
i__28863_28867 = G__28879;
continue;
} else {
var f_28880 = cljs.core.first.call(null,seq__28860_28874__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28880);

var G__28881 = cljs.core.next.call(null,seq__28860_28874__$1);
var G__28882 = null;
var G__28883 = (0);
var G__28884 = (0);
seq__28860_28864 = G__28881;
chunk__28861_28865 = G__28882;
count__28862_28866 = G__28883;
i__28863_28867 = G__28884;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28858,map__28858__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28858,map__28858__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1456984146743