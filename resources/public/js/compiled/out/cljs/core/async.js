// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args25060 = [];
var len__19349__auto___25066 = arguments.length;
var i__19350__auto___25067 = (0);
while(true){
if((i__19350__auto___25067 < len__19349__auto___25066)){
args25060.push((arguments[i__19350__auto___25067]));

var G__25068 = (i__19350__auto___25067 + (1));
i__19350__auto___25067 = G__25068;
continue;
} else {
}
break;
}

var G__25062 = args25060.length;
switch (G__25062) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25060.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25063 = (function (f,blockable,meta25064){
this.f = f;
this.blockable = blockable;
this.meta25064 = meta25064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25065,meta25064__$1){
var self__ = this;
var _25065__$1 = this;
return (new cljs.core.async.t_cljs$core$async25063(self__.f,self__.blockable,meta25064__$1));
});

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25065){
var self__ = this;
var _25065__$1 = this;
return self__.meta25064;
});

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25064","meta25064",1650142104,null)], null);
});

cljs.core.async.t_cljs$core$async25063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25063";

cljs.core.async.t_cljs$core$async25063.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async25063");
});

cljs.core.async.__GT_t_cljs$core$async25063 = (function cljs$core$async$__GT_t_cljs$core$async25063(f__$1,blockable__$1,meta25064){
return (new cljs.core.async.t_cljs$core$async25063(f__$1,blockable__$1,meta25064));
});

}

return (new cljs.core.async.t_cljs$core$async25063(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args25072 = [];
var len__19349__auto___25075 = arguments.length;
var i__19350__auto___25076 = (0);
while(true){
if((i__19350__auto___25076 < len__19349__auto___25075)){
args25072.push((arguments[i__19350__auto___25076]));

var G__25077 = (i__19350__auto___25076 + (1));
i__19350__auto___25076 = G__25077;
continue;
} else {
}
break;
}

var G__25074 = args25072.length;
switch (G__25074) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25072.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args25079 = [];
var len__19349__auto___25082 = arguments.length;
var i__19350__auto___25083 = (0);
while(true){
if((i__19350__auto___25083 < len__19349__auto___25082)){
args25079.push((arguments[i__19350__auto___25083]));

var G__25084 = (i__19350__auto___25083 + (1));
i__19350__auto___25083 = G__25084;
continue;
} else {
}
break;
}

var G__25081 = args25079.length;
switch (G__25081) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25079.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args25086 = [];
var len__19349__auto___25089 = arguments.length;
var i__19350__auto___25090 = (0);
while(true){
if((i__19350__auto___25090 < len__19349__auto___25089)){
args25086.push((arguments[i__19350__auto___25090]));

var G__25091 = (i__19350__auto___25090 + (1));
i__19350__auto___25090 = G__25091;
continue;
} else {
}
break;
}

var G__25088 = args25086.length;
switch (G__25088) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25086.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25093 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25093);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25093,ret){
return (function (){
return fn1.call(null,val_25093);
});})(val_25093,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25094 = [];
var len__19349__auto___25097 = arguments.length;
var i__19350__auto___25098 = (0);
while(true){
if((i__19350__auto___25098 < len__19349__auto___25097)){
args25094.push((arguments[i__19350__auto___25098]));

var G__25099 = (i__19350__auto___25098 + (1));
i__19350__auto___25098 = G__25099;
continue;
} else {
}
break;
}

var G__25096 = args25094.length;
switch (G__25096) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25094.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19194__auto___25101 = n;
var x_25102 = (0);
while(true){
if((x_25102 < n__19194__auto___25101)){
(a[x_25102] = (0));

var G__25103 = (x_25102 + (1));
x_25102 = G__25103;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25104 = (i + (1));
i = G__25104;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25108 = (function (alt_flag,flag,meta25109){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25109 = meta25109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25110,meta25109__$1){
var self__ = this;
var _25110__$1 = this;
return (new cljs.core.async.t_cljs$core$async25108(self__.alt_flag,self__.flag,meta25109__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25110){
var self__ = this;
var _25110__$1 = this;
return self__.meta25109;
});})(flag))
;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25108.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25108.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25109","meta25109",1027740073,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25108";

cljs.core.async.t_cljs$core$async25108.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async25108");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25108 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25108(alt_flag__$1,flag__$1,meta25109){
return (new cljs.core.async.t_cljs$core$async25108(alt_flag__$1,flag__$1,meta25109));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25108(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25114 = (function (alt_handler,flag,cb,meta25115){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25115 = meta25115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25116,meta25115__$1){
var self__ = this;
var _25116__$1 = this;
return (new cljs.core.async.t_cljs$core$async25114(self__.alt_handler,self__.flag,self__.cb,meta25115__$1));
});

cljs.core.async.t_cljs$core$async25114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25116){
var self__ = this;
var _25116__$1 = this;
return self__.meta25115;
});

cljs.core.async.t_cljs$core$async25114.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25114.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25115","meta25115",1973461601,null)], null);
});

cljs.core.async.t_cljs$core$async25114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25114";

cljs.core.async.t_cljs$core$async25114.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async25114");
});

cljs.core.async.__GT_t_cljs$core$async25114 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25114(alt_handler__$1,flag__$1,cb__$1,meta25115){
return (new cljs.core.async.t_cljs$core$async25114(alt_handler__$1,flag__$1,cb__$1,meta25115));
});

}

return (new cljs.core.async.t_cljs$core$async25114(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25117_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25117_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25118_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25118_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18291__auto__ = wport;
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25119 = (i + (1));
i = G__25119;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18291__auto__ = ret;
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18279__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18279__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19356__auto__ = [];
var len__19349__auto___25125 = arguments.length;
var i__19350__auto___25126 = (0);
while(true){
if((i__19350__auto___25126 < len__19349__auto___25125)){
args__19356__auto__.push((arguments[i__19350__auto___25126]));

var G__25127 = (i__19350__auto___25126 + (1));
i__19350__auto___25126 = G__25127;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((1) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25122){
var map__25123 = p__25122;
var map__25123__$1 = ((((!((map__25123 == null)))?((((map__25123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25123):map__25123);
var opts = map__25123__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25120){
var G__25121 = cljs.core.first.call(null,seq25120);
var seq25120__$1 = cljs.core.next.call(null,seq25120);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25121,seq25120__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25128 = [];
var len__19349__auto___25178 = arguments.length;
var i__19350__auto___25179 = (0);
while(true){
if((i__19350__auto___25179 < len__19349__auto___25178)){
args25128.push((arguments[i__19350__auto___25179]));

var G__25180 = (i__19350__auto___25179 + (1));
i__19350__auto___25179 = G__25180;
continue;
} else {
}
break;
}

var G__25130 = args25128.length;
switch (G__25130) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25128.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20410__auto___25182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___25182){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___25182){
return (function (state_25154){
var state_val_25155 = (state_25154[(1)]);
if((state_val_25155 === (7))){
var inst_25150 = (state_25154[(2)]);
var state_25154__$1 = state_25154;
var statearr_25156_25183 = state_25154__$1;
(statearr_25156_25183[(2)] = inst_25150);

(statearr_25156_25183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (1))){
var state_25154__$1 = state_25154;
var statearr_25157_25184 = state_25154__$1;
(statearr_25157_25184[(2)] = null);

(statearr_25157_25184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (4))){
var inst_25133 = (state_25154[(7)]);
var inst_25133__$1 = (state_25154[(2)]);
var inst_25134 = (inst_25133__$1 == null);
var state_25154__$1 = (function (){var statearr_25158 = state_25154;
(statearr_25158[(7)] = inst_25133__$1);

return statearr_25158;
})();
if(cljs.core.truth_(inst_25134)){
var statearr_25159_25185 = state_25154__$1;
(statearr_25159_25185[(1)] = (5));

} else {
var statearr_25160_25186 = state_25154__$1;
(statearr_25160_25186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (13))){
var state_25154__$1 = state_25154;
var statearr_25161_25187 = state_25154__$1;
(statearr_25161_25187[(2)] = null);

(statearr_25161_25187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (6))){
var inst_25133 = (state_25154[(7)]);
var state_25154__$1 = state_25154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25154__$1,(11),to,inst_25133);
} else {
if((state_val_25155 === (3))){
var inst_25152 = (state_25154[(2)]);
var state_25154__$1 = state_25154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25154__$1,inst_25152);
} else {
if((state_val_25155 === (12))){
var state_25154__$1 = state_25154;
var statearr_25162_25188 = state_25154__$1;
(statearr_25162_25188[(2)] = null);

(statearr_25162_25188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (2))){
var state_25154__$1 = state_25154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25154__$1,(4),from);
} else {
if((state_val_25155 === (11))){
var inst_25143 = (state_25154[(2)]);
var state_25154__$1 = state_25154;
if(cljs.core.truth_(inst_25143)){
var statearr_25163_25189 = state_25154__$1;
(statearr_25163_25189[(1)] = (12));

} else {
var statearr_25164_25190 = state_25154__$1;
(statearr_25164_25190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (9))){
var state_25154__$1 = state_25154;
var statearr_25165_25191 = state_25154__$1;
(statearr_25165_25191[(2)] = null);

(statearr_25165_25191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (5))){
var state_25154__$1 = state_25154;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25166_25192 = state_25154__$1;
(statearr_25166_25192[(1)] = (8));

} else {
var statearr_25167_25193 = state_25154__$1;
(statearr_25167_25193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (14))){
var inst_25148 = (state_25154[(2)]);
var state_25154__$1 = state_25154;
var statearr_25168_25194 = state_25154__$1;
(statearr_25168_25194[(2)] = inst_25148);

(statearr_25168_25194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (10))){
var inst_25140 = (state_25154[(2)]);
var state_25154__$1 = state_25154;
var statearr_25169_25195 = state_25154__$1;
(statearr_25169_25195[(2)] = inst_25140);

(statearr_25169_25195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25155 === (8))){
var inst_25137 = cljs.core.async.close_BANG_.call(null,to);
var state_25154__$1 = state_25154;
var statearr_25170_25196 = state_25154__$1;
(statearr_25170_25196[(2)] = inst_25137);

(statearr_25170_25196[(1)] = (10));


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
});})(c__20410__auto___25182))
;
return ((function (switch__20389__auto__,c__20410__auto___25182){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_25174 = [null,null,null,null,null,null,null,null];
(statearr_25174[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_25174[(1)] = (1));

return statearr_25174;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_25154){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25175){if((e25175 instanceof Object)){
var ex__20393__auto__ = e25175;
var statearr_25176_25197 = state_25154;
(statearr_25176_25197[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25198 = state_25154;
state_25154 = G__25198;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_25154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_25154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___25182))
})();
var state__20412__auto__ = (function (){var statearr_25177 = f__20411__auto__.call(null);
(statearr_25177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___25182);

return statearr_25177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___25182))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25382){
var vec__25383 = p__25382;
var v = cljs.core.nth.call(null,vec__25383,(0),null);
var p = cljs.core.nth.call(null,vec__25383,(1),null);
var job = vec__25383;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20410__auto___25565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___25565,res,vec__25383,v,p,job,jobs,results){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___25565,res,vec__25383,v,p,job,jobs,results){
return (function (state_25388){
var state_val_25389 = (state_25388[(1)]);
if((state_val_25389 === (1))){
var state_25388__$1 = state_25388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25388__$1,(2),res,v);
} else {
if((state_val_25389 === (2))){
var inst_25385 = (state_25388[(2)]);
var inst_25386 = cljs.core.async.close_BANG_.call(null,res);
var state_25388__$1 = (function (){var statearr_25390 = state_25388;
(statearr_25390[(7)] = inst_25385);

return statearr_25390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25388__$1,inst_25386);
} else {
return null;
}
}
});})(c__20410__auto___25565,res,vec__25383,v,p,job,jobs,results))
;
return ((function (switch__20389__auto__,c__20410__auto___25565,res,vec__25383,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0 = (function (){
var statearr_25394 = [null,null,null,null,null,null,null,null];
(statearr_25394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__);

(statearr_25394[(1)] = (1));

return statearr_25394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1 = (function (state_25388){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25395){if((e25395 instanceof Object)){
var ex__20393__auto__ = e25395;
var statearr_25396_25566 = state_25388;
(statearr_25396_25566[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25567 = state_25388;
state_25388 = G__25567;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = function(state_25388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1.call(this,state_25388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___25565,res,vec__25383,v,p,job,jobs,results))
})();
var state__20412__auto__ = (function (){var statearr_25397 = f__20411__auto__.call(null);
(statearr_25397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___25565);

return statearr_25397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___25565,res,vec__25383,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25398){
var vec__25399 = p__25398;
var v = cljs.core.nth.call(null,vec__25399,(0),null);
var p = cljs.core.nth.call(null,vec__25399,(1),null);
var job = vec__25399;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19194__auto___25568 = n;
var __25569 = (0);
while(true){
if((__25569 < n__19194__auto___25568)){
var G__25400_25570 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25400_25570) {
case "compute":
var c__20410__auto___25572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25569,c__20410__auto___25572,G__25400_25570,n__19194__auto___25568,jobs,results,process,async){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (__25569,c__20410__auto___25572,G__25400_25570,n__19194__auto___25568,jobs,results,process,async){
return (function (state_25413){
var state_val_25414 = (state_25413[(1)]);
if((state_val_25414 === (1))){
var state_25413__$1 = state_25413;
var statearr_25415_25573 = state_25413__$1;
(statearr_25415_25573[(2)] = null);

(statearr_25415_25573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25414 === (2))){
var state_25413__$1 = state_25413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25413__$1,(4),jobs);
} else {
if((state_val_25414 === (3))){
var inst_25411 = (state_25413[(2)]);
var state_25413__$1 = state_25413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25413__$1,inst_25411);
} else {
if((state_val_25414 === (4))){
var inst_25403 = (state_25413[(2)]);
var inst_25404 = process.call(null,inst_25403);
var state_25413__$1 = state_25413;
if(cljs.core.truth_(inst_25404)){
var statearr_25416_25574 = state_25413__$1;
(statearr_25416_25574[(1)] = (5));

} else {
var statearr_25417_25575 = state_25413__$1;
(statearr_25417_25575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25414 === (5))){
var state_25413__$1 = state_25413;
var statearr_25418_25576 = state_25413__$1;
(statearr_25418_25576[(2)] = null);

(statearr_25418_25576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25414 === (6))){
var state_25413__$1 = state_25413;
var statearr_25419_25577 = state_25413__$1;
(statearr_25419_25577[(2)] = null);

(statearr_25419_25577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25414 === (7))){
var inst_25409 = (state_25413[(2)]);
var state_25413__$1 = state_25413;
var statearr_25420_25578 = state_25413__$1;
(statearr_25420_25578[(2)] = inst_25409);

(statearr_25420_25578[(1)] = (3));


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
});})(__25569,c__20410__auto___25572,G__25400_25570,n__19194__auto___25568,jobs,results,process,async))
;
return ((function (__25569,switch__20389__auto__,c__20410__auto___25572,G__25400_25570,n__19194__auto___25568,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0 = (function (){
var statearr_25424 = [null,null,null,null,null,null,null];
(statearr_25424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__);

(statearr_25424[(1)] = (1));

return statearr_25424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1 = (function (state_25413){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25425){if((e25425 instanceof Object)){
var ex__20393__auto__ = e25425;
var statearr_25426_25579 = state_25413;
(statearr_25426_25579[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25580 = state_25413;
state_25413 = G__25580;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = function(state_25413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1.call(this,state_25413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__;
})()
;})(__25569,switch__20389__auto__,c__20410__auto___25572,G__25400_25570,n__19194__auto___25568,jobs,results,process,async))
})();
var state__20412__auto__ = (function (){var statearr_25427 = f__20411__auto__.call(null);
(statearr_25427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___25572);

return statearr_25427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(__25569,c__20410__auto___25572,G__25400_25570,n__19194__auto___25568,jobs,results,process,async))
);


break;
case "async":
var c__20410__auto___25581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25569,c__20410__auto___25581,G__25400_25570,n__19194__auto___25568,jobs,results,process,async){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (__25569,c__20410__auto___25581,G__25400_25570,n__19194__auto___25568,jobs,results,process,async){
return (function (state_25440){
var state_val_25441 = (state_25440[(1)]);
if((state_val_25441 === (1))){
var state_25440__$1 = state_25440;
var statearr_25442_25582 = state_25440__$1;
(statearr_25442_25582[(2)] = null);

(statearr_25442_25582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (2))){
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25440__$1,(4),jobs);
} else {
if((state_val_25441 === (3))){
var inst_25438 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25440__$1,inst_25438);
} else {
if((state_val_25441 === (4))){
var inst_25430 = (state_25440[(2)]);
var inst_25431 = async.call(null,inst_25430);
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25431)){
var statearr_25443_25583 = state_25440__$1;
(statearr_25443_25583[(1)] = (5));

} else {
var statearr_25444_25584 = state_25440__$1;
(statearr_25444_25584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (5))){
var state_25440__$1 = state_25440;
var statearr_25445_25585 = state_25440__$1;
(statearr_25445_25585[(2)] = null);

(statearr_25445_25585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (6))){
var state_25440__$1 = state_25440;
var statearr_25446_25586 = state_25440__$1;
(statearr_25446_25586[(2)] = null);

(statearr_25446_25586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (7))){
var inst_25436 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25447_25587 = state_25440__$1;
(statearr_25447_25587[(2)] = inst_25436);

(statearr_25447_25587[(1)] = (3));


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
});})(__25569,c__20410__auto___25581,G__25400_25570,n__19194__auto___25568,jobs,results,process,async))
;
return ((function (__25569,switch__20389__auto__,c__20410__auto___25581,G__25400_25570,n__19194__auto___25568,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0 = (function (){
var statearr_25451 = [null,null,null,null,null,null,null];
(statearr_25451[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__);

(statearr_25451[(1)] = (1));

return statearr_25451;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1 = (function (state_25440){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25452){if((e25452 instanceof Object)){
var ex__20393__auto__ = e25452;
var statearr_25453_25588 = state_25440;
(statearr_25453_25588[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25589 = state_25440;
state_25440 = G__25589;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = function(state_25440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1.call(this,state_25440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__;
})()
;})(__25569,switch__20389__auto__,c__20410__auto___25581,G__25400_25570,n__19194__auto___25568,jobs,results,process,async))
})();
var state__20412__auto__ = (function (){var statearr_25454 = f__20411__auto__.call(null);
(statearr_25454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___25581);

return statearr_25454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(__25569,c__20410__auto___25581,G__25400_25570,n__19194__auto___25568,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25590 = (__25569 + (1));
__25569 = G__25590;
continue;
} else {
}
break;
}

var c__20410__auto___25591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___25591,jobs,results,process,async){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___25591,jobs,results,process,async){
return (function (state_25476){
var state_val_25477 = (state_25476[(1)]);
if((state_val_25477 === (1))){
var state_25476__$1 = state_25476;
var statearr_25478_25592 = state_25476__$1;
(statearr_25478_25592[(2)] = null);

(statearr_25478_25592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (2))){
var state_25476__$1 = state_25476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25476__$1,(4),from);
} else {
if((state_val_25477 === (3))){
var inst_25474 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25476__$1,inst_25474);
} else {
if((state_val_25477 === (4))){
var inst_25457 = (state_25476[(7)]);
var inst_25457__$1 = (state_25476[(2)]);
var inst_25458 = (inst_25457__$1 == null);
var state_25476__$1 = (function (){var statearr_25479 = state_25476;
(statearr_25479[(7)] = inst_25457__$1);

return statearr_25479;
})();
if(cljs.core.truth_(inst_25458)){
var statearr_25480_25593 = state_25476__$1;
(statearr_25480_25593[(1)] = (5));

} else {
var statearr_25481_25594 = state_25476__$1;
(statearr_25481_25594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (5))){
var inst_25460 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25476__$1 = state_25476;
var statearr_25482_25595 = state_25476__$1;
(statearr_25482_25595[(2)] = inst_25460);

(statearr_25482_25595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (6))){
var inst_25462 = (state_25476[(8)]);
var inst_25457 = (state_25476[(7)]);
var inst_25462__$1 = cljs.core.async.chan.call(null,(1));
var inst_25463 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25464 = [inst_25457,inst_25462__$1];
var inst_25465 = (new cljs.core.PersistentVector(null,2,(5),inst_25463,inst_25464,null));
var state_25476__$1 = (function (){var statearr_25483 = state_25476;
(statearr_25483[(8)] = inst_25462__$1);

return statearr_25483;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25476__$1,(8),jobs,inst_25465);
} else {
if((state_val_25477 === (7))){
var inst_25472 = (state_25476[(2)]);
var state_25476__$1 = state_25476;
var statearr_25484_25596 = state_25476__$1;
(statearr_25484_25596[(2)] = inst_25472);

(statearr_25484_25596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25477 === (8))){
var inst_25462 = (state_25476[(8)]);
var inst_25467 = (state_25476[(2)]);
var state_25476__$1 = (function (){var statearr_25485 = state_25476;
(statearr_25485[(9)] = inst_25467);

return statearr_25485;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25476__$1,(9),results,inst_25462);
} else {
if((state_val_25477 === (9))){
var inst_25469 = (state_25476[(2)]);
var state_25476__$1 = (function (){var statearr_25486 = state_25476;
(statearr_25486[(10)] = inst_25469);

return statearr_25486;
})();
var statearr_25487_25597 = state_25476__$1;
(statearr_25487_25597[(2)] = null);

(statearr_25487_25597[(1)] = (2));


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
});})(c__20410__auto___25591,jobs,results,process,async))
;
return ((function (switch__20389__auto__,c__20410__auto___25591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0 = (function (){
var statearr_25491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__);

(statearr_25491[(1)] = (1));

return statearr_25491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1 = (function (state_25476){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25492){if((e25492 instanceof Object)){
var ex__20393__auto__ = e25492;
var statearr_25493_25598 = state_25476;
(statearr_25493_25598[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25599 = state_25476;
state_25476 = G__25599;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = function(state_25476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1.call(this,state_25476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___25591,jobs,results,process,async))
})();
var state__20412__auto__ = (function (){var statearr_25494 = f__20411__auto__.call(null);
(statearr_25494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___25591);

return statearr_25494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___25591,jobs,results,process,async))
);


var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__,jobs,results,process,async){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__,jobs,results,process,async){
return (function (state_25532){
var state_val_25533 = (state_25532[(1)]);
if((state_val_25533 === (7))){
var inst_25528 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
var statearr_25534_25600 = state_25532__$1;
(statearr_25534_25600[(2)] = inst_25528);

(statearr_25534_25600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (20))){
var state_25532__$1 = state_25532;
var statearr_25535_25601 = state_25532__$1;
(statearr_25535_25601[(2)] = null);

(statearr_25535_25601[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (1))){
var state_25532__$1 = state_25532;
var statearr_25536_25602 = state_25532__$1;
(statearr_25536_25602[(2)] = null);

(statearr_25536_25602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (4))){
var inst_25497 = (state_25532[(7)]);
var inst_25497__$1 = (state_25532[(2)]);
var inst_25498 = (inst_25497__$1 == null);
var state_25532__$1 = (function (){var statearr_25537 = state_25532;
(statearr_25537[(7)] = inst_25497__$1);

return statearr_25537;
})();
if(cljs.core.truth_(inst_25498)){
var statearr_25538_25603 = state_25532__$1;
(statearr_25538_25603[(1)] = (5));

} else {
var statearr_25539_25604 = state_25532__$1;
(statearr_25539_25604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (15))){
var inst_25510 = (state_25532[(8)]);
var state_25532__$1 = state_25532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25532__$1,(18),to,inst_25510);
} else {
if((state_val_25533 === (21))){
var inst_25523 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
var statearr_25540_25605 = state_25532__$1;
(statearr_25540_25605[(2)] = inst_25523);

(statearr_25540_25605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (13))){
var inst_25525 = (state_25532[(2)]);
var state_25532__$1 = (function (){var statearr_25541 = state_25532;
(statearr_25541[(9)] = inst_25525);

return statearr_25541;
})();
var statearr_25542_25606 = state_25532__$1;
(statearr_25542_25606[(2)] = null);

(statearr_25542_25606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (6))){
var inst_25497 = (state_25532[(7)]);
var state_25532__$1 = state_25532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25532__$1,(11),inst_25497);
} else {
if((state_val_25533 === (17))){
var inst_25518 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
if(cljs.core.truth_(inst_25518)){
var statearr_25543_25607 = state_25532__$1;
(statearr_25543_25607[(1)] = (19));

} else {
var statearr_25544_25608 = state_25532__$1;
(statearr_25544_25608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (3))){
var inst_25530 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25532__$1,inst_25530);
} else {
if((state_val_25533 === (12))){
var inst_25507 = (state_25532[(10)]);
var state_25532__$1 = state_25532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25532__$1,(14),inst_25507);
} else {
if((state_val_25533 === (2))){
var state_25532__$1 = state_25532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25532__$1,(4),results);
} else {
if((state_val_25533 === (19))){
var state_25532__$1 = state_25532;
var statearr_25545_25609 = state_25532__$1;
(statearr_25545_25609[(2)] = null);

(statearr_25545_25609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (11))){
var inst_25507 = (state_25532[(2)]);
var state_25532__$1 = (function (){var statearr_25546 = state_25532;
(statearr_25546[(10)] = inst_25507);

return statearr_25546;
})();
var statearr_25547_25610 = state_25532__$1;
(statearr_25547_25610[(2)] = null);

(statearr_25547_25610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (9))){
var state_25532__$1 = state_25532;
var statearr_25548_25611 = state_25532__$1;
(statearr_25548_25611[(2)] = null);

(statearr_25548_25611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (5))){
var state_25532__$1 = state_25532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25549_25612 = state_25532__$1;
(statearr_25549_25612[(1)] = (8));

} else {
var statearr_25550_25613 = state_25532__$1;
(statearr_25550_25613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (14))){
var inst_25512 = (state_25532[(11)]);
var inst_25510 = (state_25532[(8)]);
var inst_25510__$1 = (state_25532[(2)]);
var inst_25511 = (inst_25510__$1 == null);
var inst_25512__$1 = cljs.core.not.call(null,inst_25511);
var state_25532__$1 = (function (){var statearr_25551 = state_25532;
(statearr_25551[(11)] = inst_25512__$1);

(statearr_25551[(8)] = inst_25510__$1);

return statearr_25551;
})();
if(inst_25512__$1){
var statearr_25552_25614 = state_25532__$1;
(statearr_25552_25614[(1)] = (15));

} else {
var statearr_25553_25615 = state_25532__$1;
(statearr_25553_25615[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (16))){
var inst_25512 = (state_25532[(11)]);
var state_25532__$1 = state_25532;
var statearr_25554_25616 = state_25532__$1;
(statearr_25554_25616[(2)] = inst_25512);

(statearr_25554_25616[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (10))){
var inst_25504 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
var statearr_25555_25617 = state_25532__$1;
(statearr_25555_25617[(2)] = inst_25504);

(statearr_25555_25617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (18))){
var inst_25515 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
var statearr_25556_25618 = state_25532__$1;
(statearr_25556_25618[(2)] = inst_25515);

(statearr_25556_25618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (8))){
var inst_25501 = cljs.core.async.close_BANG_.call(null,to);
var state_25532__$1 = state_25532;
var statearr_25557_25619 = state_25532__$1;
(statearr_25557_25619[(2)] = inst_25501);

(statearr_25557_25619[(1)] = (10));


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
});})(c__20410__auto__,jobs,results,process,async))
;
return ((function (switch__20389__auto__,c__20410__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0 = (function (){
var statearr_25561 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__);

(statearr_25561[(1)] = (1));

return statearr_25561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1 = (function (state_25532){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25562){if((e25562 instanceof Object)){
var ex__20393__auto__ = e25562;
var statearr_25563_25620 = state_25532;
(statearr_25563_25620[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25621 = state_25532;
state_25532 = G__25621;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = function(state_25532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1.call(this,state_25532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__,jobs,results,process,async))
})();
var state__20412__auto__ = (function (){var statearr_25564 = f__20411__auto__.call(null);
(statearr_25564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_25564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__,jobs,results,process,async))
);

return c__20410__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25622 = [];
var len__19349__auto___25625 = arguments.length;
var i__19350__auto___25626 = (0);
while(true){
if((i__19350__auto___25626 < len__19349__auto___25625)){
args25622.push((arguments[i__19350__auto___25626]));

var G__25627 = (i__19350__auto___25626 + (1));
i__19350__auto___25626 = G__25627;
continue;
} else {
}
break;
}

var G__25624 = args25622.length;
switch (G__25624) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25622.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25629 = [];
var len__19349__auto___25632 = arguments.length;
var i__19350__auto___25633 = (0);
while(true){
if((i__19350__auto___25633 < len__19349__auto___25632)){
args25629.push((arguments[i__19350__auto___25633]));

var G__25634 = (i__19350__auto___25633 + (1));
i__19350__auto___25633 = G__25634;
continue;
} else {
}
break;
}

var G__25631 = args25629.length;
switch (G__25631) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25629.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25636 = [];
var len__19349__auto___25689 = arguments.length;
var i__19350__auto___25690 = (0);
while(true){
if((i__19350__auto___25690 < len__19349__auto___25689)){
args25636.push((arguments[i__19350__auto___25690]));

var G__25691 = (i__19350__auto___25690 + (1));
i__19350__auto___25690 = G__25691;
continue;
} else {
}
break;
}

var G__25638 = args25636.length;
switch (G__25638) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25636.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20410__auto___25693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___25693,tc,fc){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___25693,tc,fc){
return (function (state_25664){
var state_val_25665 = (state_25664[(1)]);
if((state_val_25665 === (7))){
var inst_25660 = (state_25664[(2)]);
var state_25664__$1 = state_25664;
var statearr_25666_25694 = state_25664__$1;
(statearr_25666_25694[(2)] = inst_25660);

(statearr_25666_25694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (1))){
var state_25664__$1 = state_25664;
var statearr_25667_25695 = state_25664__$1;
(statearr_25667_25695[(2)] = null);

(statearr_25667_25695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (4))){
var inst_25641 = (state_25664[(7)]);
var inst_25641__$1 = (state_25664[(2)]);
var inst_25642 = (inst_25641__$1 == null);
var state_25664__$1 = (function (){var statearr_25668 = state_25664;
(statearr_25668[(7)] = inst_25641__$1);

return statearr_25668;
})();
if(cljs.core.truth_(inst_25642)){
var statearr_25669_25696 = state_25664__$1;
(statearr_25669_25696[(1)] = (5));

} else {
var statearr_25670_25697 = state_25664__$1;
(statearr_25670_25697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (13))){
var state_25664__$1 = state_25664;
var statearr_25671_25698 = state_25664__$1;
(statearr_25671_25698[(2)] = null);

(statearr_25671_25698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (6))){
var inst_25641 = (state_25664[(7)]);
var inst_25647 = p.call(null,inst_25641);
var state_25664__$1 = state_25664;
if(cljs.core.truth_(inst_25647)){
var statearr_25672_25699 = state_25664__$1;
(statearr_25672_25699[(1)] = (9));

} else {
var statearr_25673_25700 = state_25664__$1;
(statearr_25673_25700[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (3))){
var inst_25662 = (state_25664[(2)]);
var state_25664__$1 = state_25664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25664__$1,inst_25662);
} else {
if((state_val_25665 === (12))){
var state_25664__$1 = state_25664;
var statearr_25674_25701 = state_25664__$1;
(statearr_25674_25701[(2)] = null);

(statearr_25674_25701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (2))){
var state_25664__$1 = state_25664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25664__$1,(4),ch);
} else {
if((state_val_25665 === (11))){
var inst_25641 = (state_25664[(7)]);
var inst_25651 = (state_25664[(2)]);
var state_25664__$1 = state_25664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25664__$1,(8),inst_25651,inst_25641);
} else {
if((state_val_25665 === (9))){
var state_25664__$1 = state_25664;
var statearr_25675_25702 = state_25664__$1;
(statearr_25675_25702[(2)] = tc);

(statearr_25675_25702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (5))){
var inst_25644 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25645 = cljs.core.async.close_BANG_.call(null,fc);
var state_25664__$1 = (function (){var statearr_25676 = state_25664;
(statearr_25676[(8)] = inst_25644);

return statearr_25676;
})();
var statearr_25677_25703 = state_25664__$1;
(statearr_25677_25703[(2)] = inst_25645);

(statearr_25677_25703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (14))){
var inst_25658 = (state_25664[(2)]);
var state_25664__$1 = state_25664;
var statearr_25678_25704 = state_25664__$1;
(statearr_25678_25704[(2)] = inst_25658);

(statearr_25678_25704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (10))){
var state_25664__$1 = state_25664;
var statearr_25679_25705 = state_25664__$1;
(statearr_25679_25705[(2)] = fc);

(statearr_25679_25705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25665 === (8))){
var inst_25653 = (state_25664[(2)]);
var state_25664__$1 = state_25664;
if(cljs.core.truth_(inst_25653)){
var statearr_25680_25706 = state_25664__$1;
(statearr_25680_25706[(1)] = (12));

} else {
var statearr_25681_25707 = state_25664__$1;
(statearr_25681_25707[(1)] = (13));

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
});})(c__20410__auto___25693,tc,fc))
;
return ((function (switch__20389__auto__,c__20410__auto___25693,tc,fc){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_25685 = [null,null,null,null,null,null,null,null,null];
(statearr_25685[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_25685[(1)] = (1));

return statearr_25685;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_25664){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25686){if((e25686 instanceof Object)){
var ex__20393__auto__ = e25686;
var statearr_25687_25708 = state_25664;
(statearr_25687_25708[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25709 = state_25664;
state_25664 = G__25709;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_25664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_25664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___25693,tc,fc))
})();
var state__20412__auto__ = (function (){var statearr_25688 = f__20411__auto__.call(null);
(statearr_25688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___25693);

return statearr_25688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___25693,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_25773){
var state_val_25774 = (state_25773[(1)]);
if((state_val_25774 === (7))){
var inst_25769 = (state_25773[(2)]);
var state_25773__$1 = state_25773;
var statearr_25775_25796 = state_25773__$1;
(statearr_25775_25796[(2)] = inst_25769);

(statearr_25775_25796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (1))){
var inst_25753 = init;
var state_25773__$1 = (function (){var statearr_25776 = state_25773;
(statearr_25776[(7)] = inst_25753);

return statearr_25776;
})();
var statearr_25777_25797 = state_25773__$1;
(statearr_25777_25797[(2)] = null);

(statearr_25777_25797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (4))){
var inst_25756 = (state_25773[(8)]);
var inst_25756__$1 = (state_25773[(2)]);
var inst_25757 = (inst_25756__$1 == null);
var state_25773__$1 = (function (){var statearr_25778 = state_25773;
(statearr_25778[(8)] = inst_25756__$1);

return statearr_25778;
})();
if(cljs.core.truth_(inst_25757)){
var statearr_25779_25798 = state_25773__$1;
(statearr_25779_25798[(1)] = (5));

} else {
var statearr_25780_25799 = state_25773__$1;
(statearr_25780_25799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (6))){
var inst_25756 = (state_25773[(8)]);
var inst_25753 = (state_25773[(7)]);
var inst_25760 = (state_25773[(9)]);
var inst_25760__$1 = f.call(null,inst_25753,inst_25756);
var inst_25761 = cljs.core.reduced_QMARK_.call(null,inst_25760__$1);
var state_25773__$1 = (function (){var statearr_25781 = state_25773;
(statearr_25781[(9)] = inst_25760__$1);

return statearr_25781;
})();
if(inst_25761){
var statearr_25782_25800 = state_25773__$1;
(statearr_25782_25800[(1)] = (8));

} else {
var statearr_25783_25801 = state_25773__$1;
(statearr_25783_25801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (3))){
var inst_25771 = (state_25773[(2)]);
var state_25773__$1 = state_25773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25773__$1,inst_25771);
} else {
if((state_val_25774 === (2))){
var state_25773__$1 = state_25773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25773__$1,(4),ch);
} else {
if((state_val_25774 === (9))){
var inst_25760 = (state_25773[(9)]);
var inst_25753 = inst_25760;
var state_25773__$1 = (function (){var statearr_25784 = state_25773;
(statearr_25784[(7)] = inst_25753);

return statearr_25784;
})();
var statearr_25785_25802 = state_25773__$1;
(statearr_25785_25802[(2)] = null);

(statearr_25785_25802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (5))){
var inst_25753 = (state_25773[(7)]);
var state_25773__$1 = state_25773;
var statearr_25786_25803 = state_25773__$1;
(statearr_25786_25803[(2)] = inst_25753);

(statearr_25786_25803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (10))){
var inst_25767 = (state_25773[(2)]);
var state_25773__$1 = state_25773;
var statearr_25787_25804 = state_25773__$1;
(statearr_25787_25804[(2)] = inst_25767);

(statearr_25787_25804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (8))){
var inst_25760 = (state_25773[(9)]);
var inst_25763 = cljs.core.deref.call(null,inst_25760);
var state_25773__$1 = state_25773;
var statearr_25788_25805 = state_25773__$1;
(statearr_25788_25805[(2)] = inst_25763);

(statearr_25788_25805[(1)] = (10));


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
});})(c__20410__auto__))
;
return ((function (switch__20389__auto__,c__20410__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20390__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20390__auto____0 = (function (){
var statearr_25792 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25792[(0)] = cljs$core$async$reduce_$_state_machine__20390__auto__);

(statearr_25792[(1)] = (1));

return statearr_25792;
});
var cljs$core$async$reduce_$_state_machine__20390__auto____1 = (function (state_25773){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25793){if((e25793 instanceof Object)){
var ex__20393__auto__ = e25793;
var statearr_25794_25806 = state_25773;
(statearr_25794_25806[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25807 = state_25773;
state_25773 = G__25807;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20390__auto__ = function(state_25773){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20390__auto____1.call(this,state_25773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20390__auto____0;
cljs$core$async$reduce_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20390__auto____1;
return cljs$core$async$reduce_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_25795 = f__20411__auto__.call(null);
(statearr_25795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_25795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__))
);

return c__20410__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25808 = [];
var len__19349__auto___25860 = arguments.length;
var i__19350__auto___25861 = (0);
while(true){
if((i__19350__auto___25861 < len__19349__auto___25860)){
args25808.push((arguments[i__19350__auto___25861]));

var G__25862 = (i__19350__auto___25861 + (1));
i__19350__auto___25861 = G__25862;
continue;
} else {
}
break;
}

var G__25810 = args25808.length;
switch (G__25810) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25808.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_25835){
var state_val_25836 = (state_25835[(1)]);
if((state_val_25836 === (7))){
var inst_25817 = (state_25835[(2)]);
var state_25835__$1 = state_25835;
var statearr_25837_25864 = state_25835__$1;
(statearr_25837_25864[(2)] = inst_25817);

(statearr_25837_25864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (1))){
var inst_25811 = cljs.core.seq.call(null,coll);
var inst_25812 = inst_25811;
var state_25835__$1 = (function (){var statearr_25838 = state_25835;
(statearr_25838[(7)] = inst_25812);

return statearr_25838;
})();
var statearr_25839_25865 = state_25835__$1;
(statearr_25839_25865[(2)] = null);

(statearr_25839_25865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (4))){
var inst_25812 = (state_25835[(7)]);
var inst_25815 = cljs.core.first.call(null,inst_25812);
var state_25835__$1 = state_25835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25835__$1,(7),ch,inst_25815);
} else {
if((state_val_25836 === (13))){
var inst_25829 = (state_25835[(2)]);
var state_25835__$1 = state_25835;
var statearr_25840_25866 = state_25835__$1;
(statearr_25840_25866[(2)] = inst_25829);

(statearr_25840_25866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (6))){
var inst_25820 = (state_25835[(2)]);
var state_25835__$1 = state_25835;
if(cljs.core.truth_(inst_25820)){
var statearr_25841_25867 = state_25835__$1;
(statearr_25841_25867[(1)] = (8));

} else {
var statearr_25842_25868 = state_25835__$1;
(statearr_25842_25868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (3))){
var inst_25833 = (state_25835[(2)]);
var state_25835__$1 = state_25835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25835__$1,inst_25833);
} else {
if((state_val_25836 === (12))){
var state_25835__$1 = state_25835;
var statearr_25843_25869 = state_25835__$1;
(statearr_25843_25869[(2)] = null);

(statearr_25843_25869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (2))){
var inst_25812 = (state_25835[(7)]);
var state_25835__$1 = state_25835;
if(cljs.core.truth_(inst_25812)){
var statearr_25844_25870 = state_25835__$1;
(statearr_25844_25870[(1)] = (4));

} else {
var statearr_25845_25871 = state_25835__$1;
(statearr_25845_25871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (11))){
var inst_25826 = cljs.core.async.close_BANG_.call(null,ch);
var state_25835__$1 = state_25835;
var statearr_25846_25872 = state_25835__$1;
(statearr_25846_25872[(2)] = inst_25826);

(statearr_25846_25872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (9))){
var state_25835__$1 = state_25835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25847_25873 = state_25835__$1;
(statearr_25847_25873[(1)] = (11));

} else {
var statearr_25848_25874 = state_25835__$1;
(statearr_25848_25874[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (5))){
var inst_25812 = (state_25835[(7)]);
var state_25835__$1 = state_25835;
var statearr_25849_25875 = state_25835__$1;
(statearr_25849_25875[(2)] = inst_25812);

(statearr_25849_25875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (10))){
var inst_25831 = (state_25835[(2)]);
var state_25835__$1 = state_25835;
var statearr_25850_25876 = state_25835__$1;
(statearr_25850_25876[(2)] = inst_25831);

(statearr_25850_25876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (8))){
var inst_25812 = (state_25835[(7)]);
var inst_25822 = cljs.core.next.call(null,inst_25812);
var inst_25812__$1 = inst_25822;
var state_25835__$1 = (function (){var statearr_25851 = state_25835;
(statearr_25851[(7)] = inst_25812__$1);

return statearr_25851;
})();
var statearr_25852_25877 = state_25835__$1;
(statearr_25852_25877[(2)] = null);

(statearr_25852_25877[(1)] = (2));


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
});})(c__20410__auto__))
;
return ((function (switch__20389__auto__,c__20410__auto__){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_25856 = [null,null,null,null,null,null,null,null];
(statearr_25856[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_25856[(1)] = (1));

return statearr_25856;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_25835){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_25835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e25857){if((e25857 instanceof Object)){
var ex__20393__auto__ = e25857;
var statearr_25858_25878 = state_25835;
(statearr_25858_25878[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25879 = state_25835;
state_25835 = G__25879;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_25835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_25835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_25859 = f__20411__auto__.call(null);
(statearr_25859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_25859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__))
);

return c__20410__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18946__auto__ = (((_ == null))?null:_);
var m__18947__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,_);
} else {
var m__18947__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18947__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m);
} else {
var m__18947__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26101 = (function (mult,ch,cs,meta26102){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26102 = meta26102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26103,meta26102__$1){
var self__ = this;
var _26103__$1 = this;
return (new cljs.core.async.t_cljs$core$async26101(self__.mult,self__.ch,self__.cs,meta26102__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26103){
var self__ = this;
var _26103__$1 = this;
return self__.meta26102;
});})(cs))
;

cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26101.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26102","meta26102",-473363152,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26101";

cljs.core.async.t_cljs$core$async26101.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async26101");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26101 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26101(mult__$1,ch__$1,cs__$1,meta26102){
return (new cljs.core.async.t_cljs$core$async26101(mult__$1,ch__$1,cs__$1,meta26102));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26101(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20410__auto___26322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___26322,cs,m,dchan,dctr,done){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___26322,cs,m,dchan,dctr,done){
return (function (state_26234){
var state_val_26235 = (state_26234[(1)]);
if((state_val_26235 === (7))){
var inst_26230 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26236_26323 = state_26234__$1;
(statearr_26236_26323[(2)] = inst_26230);

(statearr_26236_26323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (20))){
var inst_26135 = (state_26234[(7)]);
var inst_26145 = cljs.core.first.call(null,inst_26135);
var inst_26146 = cljs.core.nth.call(null,inst_26145,(0),null);
var inst_26147 = cljs.core.nth.call(null,inst_26145,(1),null);
var state_26234__$1 = (function (){var statearr_26237 = state_26234;
(statearr_26237[(8)] = inst_26146);

return statearr_26237;
})();
if(cljs.core.truth_(inst_26147)){
var statearr_26238_26324 = state_26234__$1;
(statearr_26238_26324[(1)] = (22));

} else {
var statearr_26239_26325 = state_26234__$1;
(statearr_26239_26325[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (27))){
var inst_26177 = (state_26234[(9)]);
var inst_26106 = (state_26234[(10)]);
var inst_26182 = (state_26234[(11)]);
var inst_26175 = (state_26234[(12)]);
var inst_26182__$1 = cljs.core._nth.call(null,inst_26175,inst_26177);
var inst_26183 = cljs.core.async.put_BANG_.call(null,inst_26182__$1,inst_26106,done);
var state_26234__$1 = (function (){var statearr_26240 = state_26234;
(statearr_26240[(11)] = inst_26182__$1);

return statearr_26240;
})();
if(cljs.core.truth_(inst_26183)){
var statearr_26241_26326 = state_26234__$1;
(statearr_26241_26326[(1)] = (30));

} else {
var statearr_26242_26327 = state_26234__$1;
(statearr_26242_26327[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (1))){
var state_26234__$1 = state_26234;
var statearr_26243_26328 = state_26234__$1;
(statearr_26243_26328[(2)] = null);

(statearr_26243_26328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (24))){
var inst_26135 = (state_26234[(7)]);
var inst_26152 = (state_26234[(2)]);
var inst_26153 = cljs.core.next.call(null,inst_26135);
var inst_26115 = inst_26153;
var inst_26116 = null;
var inst_26117 = (0);
var inst_26118 = (0);
var state_26234__$1 = (function (){var statearr_26244 = state_26234;
(statearr_26244[(13)] = inst_26115);

(statearr_26244[(14)] = inst_26152);

(statearr_26244[(15)] = inst_26118);

(statearr_26244[(16)] = inst_26116);

(statearr_26244[(17)] = inst_26117);

return statearr_26244;
})();
var statearr_26245_26329 = state_26234__$1;
(statearr_26245_26329[(2)] = null);

(statearr_26245_26329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (39))){
var state_26234__$1 = state_26234;
var statearr_26249_26330 = state_26234__$1;
(statearr_26249_26330[(2)] = null);

(statearr_26249_26330[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (4))){
var inst_26106 = (state_26234[(10)]);
var inst_26106__$1 = (state_26234[(2)]);
var inst_26107 = (inst_26106__$1 == null);
var state_26234__$1 = (function (){var statearr_26250 = state_26234;
(statearr_26250[(10)] = inst_26106__$1);

return statearr_26250;
})();
if(cljs.core.truth_(inst_26107)){
var statearr_26251_26331 = state_26234__$1;
(statearr_26251_26331[(1)] = (5));

} else {
var statearr_26252_26332 = state_26234__$1;
(statearr_26252_26332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (15))){
var inst_26115 = (state_26234[(13)]);
var inst_26118 = (state_26234[(15)]);
var inst_26116 = (state_26234[(16)]);
var inst_26117 = (state_26234[(17)]);
var inst_26131 = (state_26234[(2)]);
var inst_26132 = (inst_26118 + (1));
var tmp26246 = inst_26115;
var tmp26247 = inst_26116;
var tmp26248 = inst_26117;
var inst_26115__$1 = tmp26246;
var inst_26116__$1 = tmp26247;
var inst_26117__$1 = tmp26248;
var inst_26118__$1 = inst_26132;
var state_26234__$1 = (function (){var statearr_26253 = state_26234;
(statearr_26253[(13)] = inst_26115__$1);

(statearr_26253[(18)] = inst_26131);

(statearr_26253[(15)] = inst_26118__$1);

(statearr_26253[(16)] = inst_26116__$1);

(statearr_26253[(17)] = inst_26117__$1);

return statearr_26253;
})();
var statearr_26254_26333 = state_26234__$1;
(statearr_26254_26333[(2)] = null);

(statearr_26254_26333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (21))){
var inst_26156 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26258_26334 = state_26234__$1;
(statearr_26258_26334[(2)] = inst_26156);

(statearr_26258_26334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (31))){
var inst_26182 = (state_26234[(11)]);
var inst_26186 = done.call(null,null);
var inst_26187 = cljs.core.async.untap_STAR_.call(null,m,inst_26182);
var state_26234__$1 = (function (){var statearr_26259 = state_26234;
(statearr_26259[(19)] = inst_26186);

return statearr_26259;
})();
var statearr_26260_26335 = state_26234__$1;
(statearr_26260_26335[(2)] = inst_26187);

(statearr_26260_26335[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (32))){
var inst_26174 = (state_26234[(20)]);
var inst_26177 = (state_26234[(9)]);
var inst_26176 = (state_26234[(21)]);
var inst_26175 = (state_26234[(12)]);
var inst_26189 = (state_26234[(2)]);
var inst_26190 = (inst_26177 + (1));
var tmp26255 = inst_26174;
var tmp26256 = inst_26176;
var tmp26257 = inst_26175;
var inst_26174__$1 = tmp26255;
var inst_26175__$1 = tmp26257;
var inst_26176__$1 = tmp26256;
var inst_26177__$1 = inst_26190;
var state_26234__$1 = (function (){var statearr_26261 = state_26234;
(statearr_26261[(20)] = inst_26174__$1);

(statearr_26261[(9)] = inst_26177__$1);

(statearr_26261[(22)] = inst_26189);

(statearr_26261[(21)] = inst_26176__$1);

(statearr_26261[(12)] = inst_26175__$1);

return statearr_26261;
})();
var statearr_26262_26336 = state_26234__$1;
(statearr_26262_26336[(2)] = null);

(statearr_26262_26336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (40))){
var inst_26202 = (state_26234[(23)]);
var inst_26206 = done.call(null,null);
var inst_26207 = cljs.core.async.untap_STAR_.call(null,m,inst_26202);
var state_26234__$1 = (function (){var statearr_26263 = state_26234;
(statearr_26263[(24)] = inst_26206);

return statearr_26263;
})();
var statearr_26264_26337 = state_26234__$1;
(statearr_26264_26337[(2)] = inst_26207);

(statearr_26264_26337[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (33))){
var inst_26193 = (state_26234[(25)]);
var inst_26195 = cljs.core.chunked_seq_QMARK_.call(null,inst_26193);
var state_26234__$1 = state_26234;
if(inst_26195){
var statearr_26265_26338 = state_26234__$1;
(statearr_26265_26338[(1)] = (36));

} else {
var statearr_26266_26339 = state_26234__$1;
(statearr_26266_26339[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (13))){
var inst_26125 = (state_26234[(26)]);
var inst_26128 = cljs.core.async.close_BANG_.call(null,inst_26125);
var state_26234__$1 = state_26234;
var statearr_26267_26340 = state_26234__$1;
(statearr_26267_26340[(2)] = inst_26128);

(statearr_26267_26340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (22))){
var inst_26146 = (state_26234[(8)]);
var inst_26149 = cljs.core.async.close_BANG_.call(null,inst_26146);
var state_26234__$1 = state_26234;
var statearr_26268_26341 = state_26234__$1;
(statearr_26268_26341[(2)] = inst_26149);

(statearr_26268_26341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (36))){
var inst_26193 = (state_26234[(25)]);
var inst_26197 = cljs.core.chunk_first.call(null,inst_26193);
var inst_26198 = cljs.core.chunk_rest.call(null,inst_26193);
var inst_26199 = cljs.core.count.call(null,inst_26197);
var inst_26174 = inst_26198;
var inst_26175 = inst_26197;
var inst_26176 = inst_26199;
var inst_26177 = (0);
var state_26234__$1 = (function (){var statearr_26269 = state_26234;
(statearr_26269[(20)] = inst_26174);

(statearr_26269[(9)] = inst_26177);

(statearr_26269[(21)] = inst_26176);

(statearr_26269[(12)] = inst_26175);

return statearr_26269;
})();
var statearr_26270_26342 = state_26234__$1;
(statearr_26270_26342[(2)] = null);

(statearr_26270_26342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (41))){
var inst_26193 = (state_26234[(25)]);
var inst_26209 = (state_26234[(2)]);
var inst_26210 = cljs.core.next.call(null,inst_26193);
var inst_26174 = inst_26210;
var inst_26175 = null;
var inst_26176 = (0);
var inst_26177 = (0);
var state_26234__$1 = (function (){var statearr_26271 = state_26234;
(statearr_26271[(20)] = inst_26174);

(statearr_26271[(9)] = inst_26177);

(statearr_26271[(27)] = inst_26209);

(statearr_26271[(21)] = inst_26176);

(statearr_26271[(12)] = inst_26175);

return statearr_26271;
})();
var statearr_26272_26343 = state_26234__$1;
(statearr_26272_26343[(2)] = null);

(statearr_26272_26343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (43))){
var state_26234__$1 = state_26234;
var statearr_26273_26344 = state_26234__$1;
(statearr_26273_26344[(2)] = null);

(statearr_26273_26344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (29))){
var inst_26218 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26274_26345 = state_26234__$1;
(statearr_26274_26345[(2)] = inst_26218);

(statearr_26274_26345[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (44))){
var inst_26227 = (state_26234[(2)]);
var state_26234__$1 = (function (){var statearr_26275 = state_26234;
(statearr_26275[(28)] = inst_26227);

return statearr_26275;
})();
var statearr_26276_26346 = state_26234__$1;
(statearr_26276_26346[(2)] = null);

(statearr_26276_26346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (6))){
var inst_26166 = (state_26234[(29)]);
var inst_26165 = cljs.core.deref.call(null,cs);
var inst_26166__$1 = cljs.core.keys.call(null,inst_26165);
var inst_26167 = cljs.core.count.call(null,inst_26166__$1);
var inst_26168 = cljs.core.reset_BANG_.call(null,dctr,inst_26167);
var inst_26173 = cljs.core.seq.call(null,inst_26166__$1);
var inst_26174 = inst_26173;
var inst_26175 = null;
var inst_26176 = (0);
var inst_26177 = (0);
var state_26234__$1 = (function (){var statearr_26277 = state_26234;
(statearr_26277[(30)] = inst_26168);

(statearr_26277[(29)] = inst_26166__$1);

(statearr_26277[(20)] = inst_26174);

(statearr_26277[(9)] = inst_26177);

(statearr_26277[(21)] = inst_26176);

(statearr_26277[(12)] = inst_26175);

return statearr_26277;
})();
var statearr_26278_26347 = state_26234__$1;
(statearr_26278_26347[(2)] = null);

(statearr_26278_26347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (28))){
var inst_26174 = (state_26234[(20)]);
var inst_26193 = (state_26234[(25)]);
var inst_26193__$1 = cljs.core.seq.call(null,inst_26174);
var state_26234__$1 = (function (){var statearr_26279 = state_26234;
(statearr_26279[(25)] = inst_26193__$1);

return statearr_26279;
})();
if(inst_26193__$1){
var statearr_26280_26348 = state_26234__$1;
(statearr_26280_26348[(1)] = (33));

} else {
var statearr_26281_26349 = state_26234__$1;
(statearr_26281_26349[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (25))){
var inst_26177 = (state_26234[(9)]);
var inst_26176 = (state_26234[(21)]);
var inst_26179 = (inst_26177 < inst_26176);
var inst_26180 = inst_26179;
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26180)){
var statearr_26282_26350 = state_26234__$1;
(statearr_26282_26350[(1)] = (27));

} else {
var statearr_26283_26351 = state_26234__$1;
(statearr_26283_26351[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (34))){
var state_26234__$1 = state_26234;
var statearr_26284_26352 = state_26234__$1;
(statearr_26284_26352[(2)] = null);

(statearr_26284_26352[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (17))){
var state_26234__$1 = state_26234;
var statearr_26285_26353 = state_26234__$1;
(statearr_26285_26353[(2)] = null);

(statearr_26285_26353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (3))){
var inst_26232 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26234__$1,inst_26232);
} else {
if((state_val_26235 === (12))){
var inst_26161 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26286_26354 = state_26234__$1;
(statearr_26286_26354[(2)] = inst_26161);

(statearr_26286_26354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (2))){
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26234__$1,(4),ch);
} else {
if((state_val_26235 === (23))){
var state_26234__$1 = state_26234;
var statearr_26287_26355 = state_26234__$1;
(statearr_26287_26355[(2)] = null);

(statearr_26287_26355[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (35))){
var inst_26216 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26288_26356 = state_26234__$1;
(statearr_26288_26356[(2)] = inst_26216);

(statearr_26288_26356[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (19))){
var inst_26135 = (state_26234[(7)]);
var inst_26139 = cljs.core.chunk_first.call(null,inst_26135);
var inst_26140 = cljs.core.chunk_rest.call(null,inst_26135);
var inst_26141 = cljs.core.count.call(null,inst_26139);
var inst_26115 = inst_26140;
var inst_26116 = inst_26139;
var inst_26117 = inst_26141;
var inst_26118 = (0);
var state_26234__$1 = (function (){var statearr_26289 = state_26234;
(statearr_26289[(13)] = inst_26115);

(statearr_26289[(15)] = inst_26118);

(statearr_26289[(16)] = inst_26116);

(statearr_26289[(17)] = inst_26117);

return statearr_26289;
})();
var statearr_26290_26357 = state_26234__$1;
(statearr_26290_26357[(2)] = null);

(statearr_26290_26357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (11))){
var inst_26115 = (state_26234[(13)]);
var inst_26135 = (state_26234[(7)]);
var inst_26135__$1 = cljs.core.seq.call(null,inst_26115);
var state_26234__$1 = (function (){var statearr_26291 = state_26234;
(statearr_26291[(7)] = inst_26135__$1);

return statearr_26291;
})();
if(inst_26135__$1){
var statearr_26292_26358 = state_26234__$1;
(statearr_26292_26358[(1)] = (16));

} else {
var statearr_26293_26359 = state_26234__$1;
(statearr_26293_26359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (9))){
var inst_26163 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26294_26360 = state_26234__$1;
(statearr_26294_26360[(2)] = inst_26163);

(statearr_26294_26360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (5))){
var inst_26113 = cljs.core.deref.call(null,cs);
var inst_26114 = cljs.core.seq.call(null,inst_26113);
var inst_26115 = inst_26114;
var inst_26116 = null;
var inst_26117 = (0);
var inst_26118 = (0);
var state_26234__$1 = (function (){var statearr_26295 = state_26234;
(statearr_26295[(13)] = inst_26115);

(statearr_26295[(15)] = inst_26118);

(statearr_26295[(16)] = inst_26116);

(statearr_26295[(17)] = inst_26117);

return statearr_26295;
})();
var statearr_26296_26361 = state_26234__$1;
(statearr_26296_26361[(2)] = null);

(statearr_26296_26361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (14))){
var state_26234__$1 = state_26234;
var statearr_26297_26362 = state_26234__$1;
(statearr_26297_26362[(2)] = null);

(statearr_26297_26362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (45))){
var inst_26224 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26298_26363 = state_26234__$1;
(statearr_26298_26363[(2)] = inst_26224);

(statearr_26298_26363[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (26))){
var inst_26166 = (state_26234[(29)]);
var inst_26220 = (state_26234[(2)]);
var inst_26221 = cljs.core.seq.call(null,inst_26166);
var state_26234__$1 = (function (){var statearr_26299 = state_26234;
(statearr_26299[(31)] = inst_26220);

return statearr_26299;
})();
if(inst_26221){
var statearr_26300_26364 = state_26234__$1;
(statearr_26300_26364[(1)] = (42));

} else {
var statearr_26301_26365 = state_26234__$1;
(statearr_26301_26365[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (16))){
var inst_26135 = (state_26234[(7)]);
var inst_26137 = cljs.core.chunked_seq_QMARK_.call(null,inst_26135);
var state_26234__$1 = state_26234;
if(inst_26137){
var statearr_26302_26366 = state_26234__$1;
(statearr_26302_26366[(1)] = (19));

} else {
var statearr_26303_26367 = state_26234__$1;
(statearr_26303_26367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (38))){
var inst_26213 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26304_26368 = state_26234__$1;
(statearr_26304_26368[(2)] = inst_26213);

(statearr_26304_26368[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (30))){
var state_26234__$1 = state_26234;
var statearr_26305_26369 = state_26234__$1;
(statearr_26305_26369[(2)] = null);

(statearr_26305_26369[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (10))){
var inst_26118 = (state_26234[(15)]);
var inst_26116 = (state_26234[(16)]);
var inst_26124 = cljs.core._nth.call(null,inst_26116,inst_26118);
var inst_26125 = cljs.core.nth.call(null,inst_26124,(0),null);
var inst_26126 = cljs.core.nth.call(null,inst_26124,(1),null);
var state_26234__$1 = (function (){var statearr_26306 = state_26234;
(statearr_26306[(26)] = inst_26125);

return statearr_26306;
})();
if(cljs.core.truth_(inst_26126)){
var statearr_26307_26370 = state_26234__$1;
(statearr_26307_26370[(1)] = (13));

} else {
var statearr_26308_26371 = state_26234__$1;
(statearr_26308_26371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (18))){
var inst_26159 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26309_26372 = state_26234__$1;
(statearr_26309_26372[(2)] = inst_26159);

(statearr_26309_26372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (42))){
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26234__$1,(45),dchan);
} else {
if((state_val_26235 === (37))){
var inst_26202 = (state_26234[(23)]);
var inst_26106 = (state_26234[(10)]);
var inst_26193 = (state_26234[(25)]);
var inst_26202__$1 = cljs.core.first.call(null,inst_26193);
var inst_26203 = cljs.core.async.put_BANG_.call(null,inst_26202__$1,inst_26106,done);
var state_26234__$1 = (function (){var statearr_26310 = state_26234;
(statearr_26310[(23)] = inst_26202__$1);

return statearr_26310;
})();
if(cljs.core.truth_(inst_26203)){
var statearr_26311_26373 = state_26234__$1;
(statearr_26311_26373[(1)] = (39));

} else {
var statearr_26312_26374 = state_26234__$1;
(statearr_26312_26374[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (8))){
var inst_26118 = (state_26234[(15)]);
var inst_26117 = (state_26234[(17)]);
var inst_26120 = (inst_26118 < inst_26117);
var inst_26121 = inst_26120;
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26121)){
var statearr_26313_26375 = state_26234__$1;
(statearr_26313_26375[(1)] = (10));

} else {
var statearr_26314_26376 = state_26234__$1;
(statearr_26314_26376[(1)] = (11));

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
});})(c__20410__auto___26322,cs,m,dchan,dctr,done))
;
return ((function (switch__20389__auto__,c__20410__auto___26322,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20390__auto__ = null;
var cljs$core$async$mult_$_state_machine__20390__auto____0 = (function (){
var statearr_26318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26318[(0)] = cljs$core$async$mult_$_state_machine__20390__auto__);

(statearr_26318[(1)] = (1));

return statearr_26318;
});
var cljs$core$async$mult_$_state_machine__20390__auto____1 = (function (state_26234){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_26234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e26319){if((e26319 instanceof Object)){
var ex__20393__auto__ = e26319;
var statearr_26320_26377 = state_26234;
(statearr_26320_26377[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26378 = state_26234;
state_26234 = G__26378;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20390__auto__ = function(state_26234){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20390__auto____1.call(this,state_26234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20390__auto____0;
cljs$core$async$mult_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20390__auto____1;
return cljs$core$async$mult_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___26322,cs,m,dchan,dctr,done))
})();
var state__20412__auto__ = (function (){var statearr_26321 = f__20411__auto__.call(null);
(statearr_26321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___26322);

return statearr_26321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___26322,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26379 = [];
var len__19349__auto___26382 = arguments.length;
var i__19350__auto___26383 = (0);
while(true){
if((i__19350__auto___26383 < len__19349__auto___26382)){
args26379.push((arguments[i__19350__auto___26383]));

var G__26384 = (i__19350__auto___26383 + (1));
i__19350__auto___26383 = G__26384;
continue;
} else {
}
break;
}

var G__26381 = args26379.length;
switch (G__26381) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26379.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m);
} else {
var m__18947__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,state_map);
} else {
var m__18947__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,mode);
} else {
var m__18947__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19356__auto__ = [];
var len__19349__auto___26396 = arguments.length;
var i__19350__auto___26397 = (0);
while(true){
if((i__19350__auto___26397 < len__19349__auto___26396)){
args__19356__auto__.push((arguments[i__19350__auto___26397]));

var G__26398 = (i__19350__auto___26397 + (1));
i__19350__auto___26397 = G__26398;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((3) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26390){
var map__26391 = p__26390;
var map__26391__$1 = ((((!((map__26391 == null)))?((((map__26391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26391):map__26391);
var opts = map__26391__$1;
var statearr_26393_26399 = state;
(statearr_26393_26399[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26391,map__26391__$1,opts){
return (function (val){
var statearr_26394_26400 = state;
(statearr_26394_26400[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26391,map__26391__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26395_26401 = state;
(statearr_26395_26401[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26386){
var G__26387 = cljs.core.first.call(null,seq26386);
var seq26386__$1 = cljs.core.next.call(null,seq26386);
var G__26388 = cljs.core.first.call(null,seq26386__$1);
var seq26386__$2 = cljs.core.next.call(null,seq26386__$1);
var G__26389 = cljs.core.first.call(null,seq26386__$2);
var seq26386__$3 = cljs.core.next.call(null,seq26386__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26387,G__26388,G__26389,seq26386__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26565 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26566){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26566 = meta26566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26567,meta26566__$1){
var self__ = this;
var _26567__$1 = this;
return (new cljs.core.async.t_cljs$core$async26565(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26566__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26567){
var self__ = this;
var _26567__$1 = this;
return self__.meta26566;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26565.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26565.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26566","meta26566",1238251353,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26565";

cljs.core.async.t_cljs$core$async26565.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async26565");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26565 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26565(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26566){
return (new cljs.core.async.t_cljs$core$async26565(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26566));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26565(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20410__auto___26728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___26728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___26728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26665){
var state_val_26666 = (state_26665[(1)]);
if((state_val_26666 === (7))){
var inst_26583 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
var statearr_26667_26729 = state_26665__$1;
(statearr_26667_26729[(2)] = inst_26583);

(statearr_26667_26729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (20))){
var inst_26595 = (state_26665[(7)]);
var state_26665__$1 = state_26665;
var statearr_26668_26730 = state_26665__$1;
(statearr_26668_26730[(2)] = inst_26595);

(statearr_26668_26730[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (27))){
var state_26665__$1 = state_26665;
var statearr_26669_26731 = state_26665__$1;
(statearr_26669_26731[(2)] = null);

(statearr_26669_26731[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (1))){
var inst_26571 = (state_26665[(8)]);
var inst_26571__$1 = calc_state.call(null);
var inst_26573 = (inst_26571__$1 == null);
var inst_26574 = cljs.core.not.call(null,inst_26573);
var state_26665__$1 = (function (){var statearr_26670 = state_26665;
(statearr_26670[(8)] = inst_26571__$1);

return statearr_26670;
})();
if(inst_26574){
var statearr_26671_26732 = state_26665__$1;
(statearr_26671_26732[(1)] = (2));

} else {
var statearr_26672_26733 = state_26665__$1;
(statearr_26672_26733[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (24))){
var inst_26639 = (state_26665[(9)]);
var inst_26618 = (state_26665[(10)]);
var inst_26625 = (state_26665[(11)]);
var inst_26639__$1 = inst_26618.call(null,inst_26625);
var state_26665__$1 = (function (){var statearr_26673 = state_26665;
(statearr_26673[(9)] = inst_26639__$1);

return statearr_26673;
})();
if(cljs.core.truth_(inst_26639__$1)){
var statearr_26674_26734 = state_26665__$1;
(statearr_26674_26734[(1)] = (29));

} else {
var statearr_26675_26735 = state_26665__$1;
(statearr_26675_26735[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (4))){
var inst_26586 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
if(cljs.core.truth_(inst_26586)){
var statearr_26676_26736 = state_26665__$1;
(statearr_26676_26736[(1)] = (8));

} else {
var statearr_26677_26737 = state_26665__$1;
(statearr_26677_26737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (15))){
var inst_26612 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
if(cljs.core.truth_(inst_26612)){
var statearr_26678_26738 = state_26665__$1;
(statearr_26678_26738[(1)] = (19));

} else {
var statearr_26679_26739 = state_26665__$1;
(statearr_26679_26739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (21))){
var inst_26617 = (state_26665[(12)]);
var inst_26617__$1 = (state_26665[(2)]);
var inst_26618 = cljs.core.get.call(null,inst_26617__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26619 = cljs.core.get.call(null,inst_26617__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26620 = cljs.core.get.call(null,inst_26617__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26665__$1 = (function (){var statearr_26680 = state_26665;
(statearr_26680[(13)] = inst_26619);

(statearr_26680[(10)] = inst_26618);

(statearr_26680[(12)] = inst_26617__$1);

return statearr_26680;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26665__$1,(22),inst_26620);
} else {
if((state_val_26666 === (31))){
var inst_26647 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
if(cljs.core.truth_(inst_26647)){
var statearr_26681_26740 = state_26665__$1;
(statearr_26681_26740[(1)] = (32));

} else {
var statearr_26682_26741 = state_26665__$1;
(statearr_26682_26741[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (32))){
var inst_26624 = (state_26665[(14)]);
var state_26665__$1 = state_26665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26665__$1,(35),out,inst_26624);
} else {
if((state_val_26666 === (33))){
var inst_26617 = (state_26665[(12)]);
var inst_26595 = inst_26617;
var state_26665__$1 = (function (){var statearr_26683 = state_26665;
(statearr_26683[(7)] = inst_26595);

return statearr_26683;
})();
var statearr_26684_26742 = state_26665__$1;
(statearr_26684_26742[(2)] = null);

(statearr_26684_26742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (13))){
var inst_26595 = (state_26665[(7)]);
var inst_26602 = inst_26595.cljs$lang$protocol_mask$partition0$;
var inst_26603 = (inst_26602 & (64));
var inst_26604 = inst_26595.cljs$core$ISeq$;
var inst_26605 = (inst_26603) || (inst_26604);
var state_26665__$1 = state_26665;
if(cljs.core.truth_(inst_26605)){
var statearr_26685_26743 = state_26665__$1;
(statearr_26685_26743[(1)] = (16));

} else {
var statearr_26686_26744 = state_26665__$1;
(statearr_26686_26744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (22))){
var inst_26624 = (state_26665[(14)]);
var inst_26625 = (state_26665[(11)]);
var inst_26623 = (state_26665[(2)]);
var inst_26624__$1 = cljs.core.nth.call(null,inst_26623,(0),null);
var inst_26625__$1 = cljs.core.nth.call(null,inst_26623,(1),null);
var inst_26626 = (inst_26624__$1 == null);
var inst_26627 = cljs.core._EQ_.call(null,inst_26625__$1,change);
var inst_26628 = (inst_26626) || (inst_26627);
var state_26665__$1 = (function (){var statearr_26687 = state_26665;
(statearr_26687[(14)] = inst_26624__$1);

(statearr_26687[(11)] = inst_26625__$1);

return statearr_26687;
})();
if(cljs.core.truth_(inst_26628)){
var statearr_26688_26745 = state_26665__$1;
(statearr_26688_26745[(1)] = (23));

} else {
var statearr_26689_26746 = state_26665__$1;
(statearr_26689_26746[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (36))){
var inst_26617 = (state_26665[(12)]);
var inst_26595 = inst_26617;
var state_26665__$1 = (function (){var statearr_26690 = state_26665;
(statearr_26690[(7)] = inst_26595);

return statearr_26690;
})();
var statearr_26691_26747 = state_26665__$1;
(statearr_26691_26747[(2)] = null);

(statearr_26691_26747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (29))){
var inst_26639 = (state_26665[(9)]);
var state_26665__$1 = state_26665;
var statearr_26692_26748 = state_26665__$1;
(statearr_26692_26748[(2)] = inst_26639);

(statearr_26692_26748[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (6))){
var state_26665__$1 = state_26665;
var statearr_26693_26749 = state_26665__$1;
(statearr_26693_26749[(2)] = false);

(statearr_26693_26749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (28))){
var inst_26635 = (state_26665[(2)]);
var inst_26636 = calc_state.call(null);
var inst_26595 = inst_26636;
var state_26665__$1 = (function (){var statearr_26694 = state_26665;
(statearr_26694[(7)] = inst_26595);

(statearr_26694[(15)] = inst_26635);

return statearr_26694;
})();
var statearr_26695_26750 = state_26665__$1;
(statearr_26695_26750[(2)] = null);

(statearr_26695_26750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (25))){
var inst_26661 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
var statearr_26696_26751 = state_26665__$1;
(statearr_26696_26751[(2)] = inst_26661);

(statearr_26696_26751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (34))){
var inst_26659 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
var statearr_26697_26752 = state_26665__$1;
(statearr_26697_26752[(2)] = inst_26659);

(statearr_26697_26752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (17))){
var state_26665__$1 = state_26665;
var statearr_26698_26753 = state_26665__$1;
(statearr_26698_26753[(2)] = false);

(statearr_26698_26753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (3))){
var state_26665__$1 = state_26665;
var statearr_26699_26754 = state_26665__$1;
(statearr_26699_26754[(2)] = false);

(statearr_26699_26754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (12))){
var inst_26663 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26665__$1,inst_26663);
} else {
if((state_val_26666 === (2))){
var inst_26571 = (state_26665[(8)]);
var inst_26576 = inst_26571.cljs$lang$protocol_mask$partition0$;
var inst_26577 = (inst_26576 & (64));
var inst_26578 = inst_26571.cljs$core$ISeq$;
var inst_26579 = (inst_26577) || (inst_26578);
var state_26665__$1 = state_26665;
if(cljs.core.truth_(inst_26579)){
var statearr_26700_26755 = state_26665__$1;
(statearr_26700_26755[(1)] = (5));

} else {
var statearr_26701_26756 = state_26665__$1;
(statearr_26701_26756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (23))){
var inst_26624 = (state_26665[(14)]);
var inst_26630 = (inst_26624 == null);
var state_26665__$1 = state_26665;
if(cljs.core.truth_(inst_26630)){
var statearr_26702_26757 = state_26665__$1;
(statearr_26702_26757[(1)] = (26));

} else {
var statearr_26703_26758 = state_26665__$1;
(statearr_26703_26758[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (35))){
var inst_26650 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
if(cljs.core.truth_(inst_26650)){
var statearr_26704_26759 = state_26665__$1;
(statearr_26704_26759[(1)] = (36));

} else {
var statearr_26705_26760 = state_26665__$1;
(statearr_26705_26760[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (19))){
var inst_26595 = (state_26665[(7)]);
var inst_26614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26595);
var state_26665__$1 = state_26665;
var statearr_26706_26761 = state_26665__$1;
(statearr_26706_26761[(2)] = inst_26614);

(statearr_26706_26761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (11))){
var inst_26595 = (state_26665[(7)]);
var inst_26599 = (inst_26595 == null);
var inst_26600 = cljs.core.not.call(null,inst_26599);
var state_26665__$1 = state_26665;
if(inst_26600){
var statearr_26707_26762 = state_26665__$1;
(statearr_26707_26762[(1)] = (13));

} else {
var statearr_26708_26763 = state_26665__$1;
(statearr_26708_26763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (9))){
var inst_26571 = (state_26665[(8)]);
var state_26665__$1 = state_26665;
var statearr_26709_26764 = state_26665__$1;
(statearr_26709_26764[(2)] = inst_26571);

(statearr_26709_26764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (5))){
var state_26665__$1 = state_26665;
var statearr_26710_26765 = state_26665__$1;
(statearr_26710_26765[(2)] = true);

(statearr_26710_26765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (14))){
var state_26665__$1 = state_26665;
var statearr_26711_26766 = state_26665__$1;
(statearr_26711_26766[(2)] = false);

(statearr_26711_26766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (26))){
var inst_26625 = (state_26665[(11)]);
var inst_26632 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26625);
var state_26665__$1 = state_26665;
var statearr_26712_26767 = state_26665__$1;
(statearr_26712_26767[(2)] = inst_26632);

(statearr_26712_26767[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (16))){
var state_26665__$1 = state_26665;
var statearr_26713_26768 = state_26665__$1;
(statearr_26713_26768[(2)] = true);

(statearr_26713_26768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (38))){
var inst_26655 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
var statearr_26714_26769 = state_26665__$1;
(statearr_26714_26769[(2)] = inst_26655);

(statearr_26714_26769[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (30))){
var inst_26619 = (state_26665[(13)]);
var inst_26618 = (state_26665[(10)]);
var inst_26625 = (state_26665[(11)]);
var inst_26642 = cljs.core.empty_QMARK_.call(null,inst_26618);
var inst_26643 = inst_26619.call(null,inst_26625);
var inst_26644 = cljs.core.not.call(null,inst_26643);
var inst_26645 = (inst_26642) && (inst_26644);
var state_26665__$1 = state_26665;
var statearr_26715_26770 = state_26665__$1;
(statearr_26715_26770[(2)] = inst_26645);

(statearr_26715_26770[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (10))){
var inst_26571 = (state_26665[(8)]);
var inst_26591 = (state_26665[(2)]);
var inst_26592 = cljs.core.get.call(null,inst_26591,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26593 = cljs.core.get.call(null,inst_26591,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26594 = cljs.core.get.call(null,inst_26591,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26595 = inst_26571;
var state_26665__$1 = (function (){var statearr_26716 = state_26665;
(statearr_26716[(16)] = inst_26593);

(statearr_26716[(17)] = inst_26592);

(statearr_26716[(7)] = inst_26595);

(statearr_26716[(18)] = inst_26594);

return statearr_26716;
})();
var statearr_26717_26771 = state_26665__$1;
(statearr_26717_26771[(2)] = null);

(statearr_26717_26771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (18))){
var inst_26609 = (state_26665[(2)]);
var state_26665__$1 = state_26665;
var statearr_26718_26772 = state_26665__$1;
(statearr_26718_26772[(2)] = inst_26609);

(statearr_26718_26772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (37))){
var state_26665__$1 = state_26665;
var statearr_26719_26773 = state_26665__$1;
(statearr_26719_26773[(2)] = null);

(statearr_26719_26773[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26666 === (8))){
var inst_26571 = (state_26665[(8)]);
var inst_26588 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26571);
var state_26665__$1 = state_26665;
var statearr_26720_26774 = state_26665__$1;
(statearr_26720_26774[(2)] = inst_26588);

(statearr_26720_26774[(1)] = (10));


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
});})(c__20410__auto___26728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20389__auto__,c__20410__auto___26728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20390__auto__ = null;
var cljs$core$async$mix_$_state_machine__20390__auto____0 = (function (){
var statearr_26724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26724[(0)] = cljs$core$async$mix_$_state_machine__20390__auto__);

(statearr_26724[(1)] = (1));

return statearr_26724;
});
var cljs$core$async$mix_$_state_machine__20390__auto____1 = (function (state_26665){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_26665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e26725){if((e26725 instanceof Object)){
var ex__20393__auto__ = e26725;
var statearr_26726_26775 = state_26665;
(statearr_26726_26775[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26776 = state_26665;
state_26665 = G__26776;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20390__auto__ = function(state_26665){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20390__auto____1.call(this,state_26665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20390__auto____0;
cljs$core$async$mix_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20390__auto____1;
return cljs$core$async$mix_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___26728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20412__auto__ = (function (){var statearr_26727 = f__20411__auto__.call(null);
(statearr_26727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___26728);

return statearr_26727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___26728,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18947__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p,v,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26777 = [];
var len__19349__auto___26780 = arguments.length;
var i__19350__auto___26781 = (0);
while(true){
if((i__19350__auto___26781 < len__19349__auto___26780)){
args26777.push((arguments[i__19350__auto___26781]));

var G__26782 = (i__19350__auto___26781 + (1));
i__19350__auto___26781 = G__26782;
continue;
} else {
}
break;
}

var G__26779 = args26777.length;
switch (G__26779) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26777.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p);
} else {
var m__18947__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p,v);
} else {
var m__18947__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26785 = [];
var len__19349__auto___26910 = arguments.length;
var i__19350__auto___26911 = (0);
while(true){
if((i__19350__auto___26911 < len__19349__auto___26910)){
args26785.push((arguments[i__19350__auto___26911]));

var G__26912 = (i__19350__auto___26911 + (1));
i__19350__auto___26911 = G__26912;
continue;
} else {
}
break;
}

var G__26787 = args26785.length;
switch (G__26787) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26785.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18291__auto__,mults){
return (function (p1__26784_SHARP_){
if(cljs.core.truth_(p1__26784_SHARP_.call(null,topic))){
return p1__26784_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26784_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18291__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26788 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26789){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26789 = meta26789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26790,meta26789__$1){
var self__ = this;
var _26790__$1 = this;
return (new cljs.core.async.t_cljs$core$async26788(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26789__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26790){
var self__ = this;
var _26790__$1 = this;
return self__.meta26789;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26788.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26788.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26788.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26788.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26788.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26788.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26788.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26789","meta26789",-1536765882,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26788";

cljs.core.async.t_cljs$core$async26788.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async26788");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26788 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26788(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26789){
return (new cljs.core.async.t_cljs$core$async26788(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26789));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26788(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20410__auto___26914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___26914,mults,ensure_mult,p){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___26914,mults,ensure_mult,p){
return (function (state_26862){
var state_val_26863 = (state_26862[(1)]);
if((state_val_26863 === (7))){
var inst_26858 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26864_26915 = state_26862__$1;
(statearr_26864_26915[(2)] = inst_26858);

(statearr_26864_26915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (20))){
var state_26862__$1 = state_26862;
var statearr_26865_26916 = state_26862__$1;
(statearr_26865_26916[(2)] = null);

(statearr_26865_26916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (1))){
var state_26862__$1 = state_26862;
var statearr_26866_26917 = state_26862__$1;
(statearr_26866_26917[(2)] = null);

(statearr_26866_26917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (24))){
var inst_26841 = (state_26862[(7)]);
var inst_26850 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26841);
var state_26862__$1 = state_26862;
var statearr_26867_26918 = state_26862__$1;
(statearr_26867_26918[(2)] = inst_26850);

(statearr_26867_26918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (4))){
var inst_26793 = (state_26862[(8)]);
var inst_26793__$1 = (state_26862[(2)]);
var inst_26794 = (inst_26793__$1 == null);
var state_26862__$1 = (function (){var statearr_26868 = state_26862;
(statearr_26868[(8)] = inst_26793__$1);

return statearr_26868;
})();
if(cljs.core.truth_(inst_26794)){
var statearr_26869_26919 = state_26862__$1;
(statearr_26869_26919[(1)] = (5));

} else {
var statearr_26870_26920 = state_26862__$1;
(statearr_26870_26920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (15))){
var inst_26835 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26871_26921 = state_26862__$1;
(statearr_26871_26921[(2)] = inst_26835);

(statearr_26871_26921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (21))){
var inst_26855 = (state_26862[(2)]);
var state_26862__$1 = (function (){var statearr_26872 = state_26862;
(statearr_26872[(9)] = inst_26855);

return statearr_26872;
})();
var statearr_26873_26922 = state_26862__$1;
(statearr_26873_26922[(2)] = null);

(statearr_26873_26922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (13))){
var inst_26817 = (state_26862[(10)]);
var inst_26819 = cljs.core.chunked_seq_QMARK_.call(null,inst_26817);
var state_26862__$1 = state_26862;
if(inst_26819){
var statearr_26874_26923 = state_26862__$1;
(statearr_26874_26923[(1)] = (16));

} else {
var statearr_26875_26924 = state_26862__$1;
(statearr_26875_26924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (22))){
var inst_26847 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
if(cljs.core.truth_(inst_26847)){
var statearr_26876_26925 = state_26862__$1;
(statearr_26876_26925[(1)] = (23));

} else {
var statearr_26877_26926 = state_26862__$1;
(statearr_26877_26926[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (6))){
var inst_26843 = (state_26862[(11)]);
var inst_26841 = (state_26862[(7)]);
var inst_26793 = (state_26862[(8)]);
var inst_26841__$1 = topic_fn.call(null,inst_26793);
var inst_26842 = cljs.core.deref.call(null,mults);
var inst_26843__$1 = cljs.core.get.call(null,inst_26842,inst_26841__$1);
var state_26862__$1 = (function (){var statearr_26878 = state_26862;
(statearr_26878[(11)] = inst_26843__$1);

(statearr_26878[(7)] = inst_26841__$1);

return statearr_26878;
})();
if(cljs.core.truth_(inst_26843__$1)){
var statearr_26879_26927 = state_26862__$1;
(statearr_26879_26927[(1)] = (19));

} else {
var statearr_26880_26928 = state_26862__$1;
(statearr_26880_26928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (25))){
var inst_26852 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26881_26929 = state_26862__$1;
(statearr_26881_26929[(2)] = inst_26852);

(statearr_26881_26929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (17))){
var inst_26817 = (state_26862[(10)]);
var inst_26826 = cljs.core.first.call(null,inst_26817);
var inst_26827 = cljs.core.async.muxch_STAR_.call(null,inst_26826);
var inst_26828 = cljs.core.async.close_BANG_.call(null,inst_26827);
var inst_26829 = cljs.core.next.call(null,inst_26817);
var inst_26803 = inst_26829;
var inst_26804 = null;
var inst_26805 = (0);
var inst_26806 = (0);
var state_26862__$1 = (function (){var statearr_26882 = state_26862;
(statearr_26882[(12)] = inst_26804);

(statearr_26882[(13)] = inst_26828);

(statearr_26882[(14)] = inst_26805);

(statearr_26882[(15)] = inst_26806);

(statearr_26882[(16)] = inst_26803);

return statearr_26882;
})();
var statearr_26883_26930 = state_26862__$1;
(statearr_26883_26930[(2)] = null);

(statearr_26883_26930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (3))){
var inst_26860 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26862__$1,inst_26860);
} else {
if((state_val_26863 === (12))){
var inst_26837 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26884_26931 = state_26862__$1;
(statearr_26884_26931[(2)] = inst_26837);

(statearr_26884_26931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (2))){
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26862__$1,(4),ch);
} else {
if((state_val_26863 === (23))){
var state_26862__$1 = state_26862;
var statearr_26885_26932 = state_26862__$1;
(statearr_26885_26932[(2)] = null);

(statearr_26885_26932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (19))){
var inst_26843 = (state_26862[(11)]);
var inst_26793 = (state_26862[(8)]);
var inst_26845 = cljs.core.async.muxch_STAR_.call(null,inst_26843);
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26862__$1,(22),inst_26845,inst_26793);
} else {
if((state_val_26863 === (11))){
var inst_26817 = (state_26862[(10)]);
var inst_26803 = (state_26862[(16)]);
var inst_26817__$1 = cljs.core.seq.call(null,inst_26803);
var state_26862__$1 = (function (){var statearr_26886 = state_26862;
(statearr_26886[(10)] = inst_26817__$1);

return statearr_26886;
})();
if(inst_26817__$1){
var statearr_26887_26933 = state_26862__$1;
(statearr_26887_26933[(1)] = (13));

} else {
var statearr_26888_26934 = state_26862__$1;
(statearr_26888_26934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (9))){
var inst_26839 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26889_26935 = state_26862__$1;
(statearr_26889_26935[(2)] = inst_26839);

(statearr_26889_26935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (5))){
var inst_26800 = cljs.core.deref.call(null,mults);
var inst_26801 = cljs.core.vals.call(null,inst_26800);
var inst_26802 = cljs.core.seq.call(null,inst_26801);
var inst_26803 = inst_26802;
var inst_26804 = null;
var inst_26805 = (0);
var inst_26806 = (0);
var state_26862__$1 = (function (){var statearr_26890 = state_26862;
(statearr_26890[(12)] = inst_26804);

(statearr_26890[(14)] = inst_26805);

(statearr_26890[(15)] = inst_26806);

(statearr_26890[(16)] = inst_26803);

return statearr_26890;
})();
var statearr_26891_26936 = state_26862__$1;
(statearr_26891_26936[(2)] = null);

(statearr_26891_26936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (14))){
var state_26862__$1 = state_26862;
var statearr_26895_26937 = state_26862__$1;
(statearr_26895_26937[(2)] = null);

(statearr_26895_26937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (16))){
var inst_26817 = (state_26862[(10)]);
var inst_26821 = cljs.core.chunk_first.call(null,inst_26817);
var inst_26822 = cljs.core.chunk_rest.call(null,inst_26817);
var inst_26823 = cljs.core.count.call(null,inst_26821);
var inst_26803 = inst_26822;
var inst_26804 = inst_26821;
var inst_26805 = inst_26823;
var inst_26806 = (0);
var state_26862__$1 = (function (){var statearr_26896 = state_26862;
(statearr_26896[(12)] = inst_26804);

(statearr_26896[(14)] = inst_26805);

(statearr_26896[(15)] = inst_26806);

(statearr_26896[(16)] = inst_26803);

return statearr_26896;
})();
var statearr_26897_26938 = state_26862__$1;
(statearr_26897_26938[(2)] = null);

(statearr_26897_26938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (10))){
var inst_26804 = (state_26862[(12)]);
var inst_26805 = (state_26862[(14)]);
var inst_26806 = (state_26862[(15)]);
var inst_26803 = (state_26862[(16)]);
var inst_26811 = cljs.core._nth.call(null,inst_26804,inst_26806);
var inst_26812 = cljs.core.async.muxch_STAR_.call(null,inst_26811);
var inst_26813 = cljs.core.async.close_BANG_.call(null,inst_26812);
var inst_26814 = (inst_26806 + (1));
var tmp26892 = inst_26804;
var tmp26893 = inst_26805;
var tmp26894 = inst_26803;
var inst_26803__$1 = tmp26894;
var inst_26804__$1 = tmp26892;
var inst_26805__$1 = tmp26893;
var inst_26806__$1 = inst_26814;
var state_26862__$1 = (function (){var statearr_26898 = state_26862;
(statearr_26898[(12)] = inst_26804__$1);

(statearr_26898[(14)] = inst_26805__$1);

(statearr_26898[(17)] = inst_26813);

(statearr_26898[(15)] = inst_26806__$1);

(statearr_26898[(16)] = inst_26803__$1);

return statearr_26898;
})();
var statearr_26899_26939 = state_26862__$1;
(statearr_26899_26939[(2)] = null);

(statearr_26899_26939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (18))){
var inst_26832 = (state_26862[(2)]);
var state_26862__$1 = state_26862;
var statearr_26900_26940 = state_26862__$1;
(statearr_26900_26940[(2)] = inst_26832);

(statearr_26900_26940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26863 === (8))){
var inst_26805 = (state_26862[(14)]);
var inst_26806 = (state_26862[(15)]);
var inst_26808 = (inst_26806 < inst_26805);
var inst_26809 = inst_26808;
var state_26862__$1 = state_26862;
if(cljs.core.truth_(inst_26809)){
var statearr_26901_26941 = state_26862__$1;
(statearr_26901_26941[(1)] = (10));

} else {
var statearr_26902_26942 = state_26862__$1;
(statearr_26902_26942[(1)] = (11));

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
});})(c__20410__auto___26914,mults,ensure_mult,p))
;
return ((function (switch__20389__auto__,c__20410__auto___26914,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_26906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26906[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_26906[(1)] = (1));

return statearr_26906;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_26862){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_26862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e26907){if((e26907 instanceof Object)){
var ex__20393__auto__ = e26907;
var statearr_26908_26943 = state_26862;
(statearr_26908_26943[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26944 = state_26862;
state_26862 = G__26944;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_26862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_26862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___26914,mults,ensure_mult,p))
})();
var state__20412__auto__ = (function (){var statearr_26909 = f__20411__auto__.call(null);
(statearr_26909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___26914);

return statearr_26909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___26914,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26945 = [];
var len__19349__auto___26948 = arguments.length;
var i__19350__auto___26949 = (0);
while(true){
if((i__19350__auto___26949 < len__19349__auto___26948)){
args26945.push((arguments[i__19350__auto___26949]));

var G__26950 = (i__19350__auto___26949 + (1));
i__19350__auto___26949 = G__26950;
continue;
} else {
}
break;
}

var G__26947 = args26945.length;
switch (G__26947) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26945.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26952 = [];
var len__19349__auto___26955 = arguments.length;
var i__19350__auto___26956 = (0);
while(true){
if((i__19350__auto___26956 < len__19349__auto___26955)){
args26952.push((arguments[i__19350__auto___26956]));

var G__26957 = (i__19350__auto___26956 + (1));
i__19350__auto___26956 = G__26957;
continue;
} else {
}
break;
}

var G__26954 = args26952.length;
switch (G__26954) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26952.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26959 = [];
var len__19349__auto___27030 = arguments.length;
var i__19350__auto___27031 = (0);
while(true){
if((i__19350__auto___27031 < len__19349__auto___27030)){
args26959.push((arguments[i__19350__auto___27031]));

var G__27032 = (i__19350__auto___27031 + (1));
i__19350__auto___27031 = G__27032;
continue;
} else {
}
break;
}

var G__26961 = args26959.length;
switch (G__26961) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26959.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20410__auto___27034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___27034,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___27034,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27000){
var state_val_27001 = (state_27000[(1)]);
if((state_val_27001 === (7))){
var state_27000__$1 = state_27000;
var statearr_27002_27035 = state_27000__$1;
(statearr_27002_27035[(2)] = null);

(statearr_27002_27035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (1))){
var state_27000__$1 = state_27000;
var statearr_27003_27036 = state_27000__$1;
(statearr_27003_27036[(2)] = null);

(statearr_27003_27036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (4))){
var inst_26964 = (state_27000[(7)]);
var inst_26966 = (inst_26964 < cnt);
var state_27000__$1 = state_27000;
if(cljs.core.truth_(inst_26966)){
var statearr_27004_27037 = state_27000__$1;
(statearr_27004_27037[(1)] = (6));

} else {
var statearr_27005_27038 = state_27000__$1;
(statearr_27005_27038[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (15))){
var inst_26996 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27006_27039 = state_27000__$1;
(statearr_27006_27039[(2)] = inst_26996);

(statearr_27006_27039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (13))){
var inst_26989 = cljs.core.async.close_BANG_.call(null,out);
var state_27000__$1 = state_27000;
var statearr_27007_27040 = state_27000__$1;
(statearr_27007_27040[(2)] = inst_26989);

(statearr_27007_27040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (6))){
var state_27000__$1 = state_27000;
var statearr_27008_27041 = state_27000__$1;
(statearr_27008_27041[(2)] = null);

(statearr_27008_27041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (3))){
var inst_26998 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27000__$1,inst_26998);
} else {
if((state_val_27001 === (12))){
var inst_26986 = (state_27000[(8)]);
var inst_26986__$1 = (state_27000[(2)]);
var inst_26987 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26986__$1);
var state_27000__$1 = (function (){var statearr_27009 = state_27000;
(statearr_27009[(8)] = inst_26986__$1);

return statearr_27009;
})();
if(cljs.core.truth_(inst_26987)){
var statearr_27010_27042 = state_27000__$1;
(statearr_27010_27042[(1)] = (13));

} else {
var statearr_27011_27043 = state_27000__$1;
(statearr_27011_27043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (2))){
var inst_26963 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26964 = (0);
var state_27000__$1 = (function (){var statearr_27012 = state_27000;
(statearr_27012[(7)] = inst_26964);

(statearr_27012[(9)] = inst_26963);

return statearr_27012;
})();
var statearr_27013_27044 = state_27000__$1;
(statearr_27013_27044[(2)] = null);

(statearr_27013_27044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (11))){
var inst_26964 = (state_27000[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27000,(10),Object,null,(9));
var inst_26973 = chs__$1.call(null,inst_26964);
var inst_26974 = done.call(null,inst_26964);
var inst_26975 = cljs.core.async.take_BANG_.call(null,inst_26973,inst_26974);
var state_27000__$1 = state_27000;
var statearr_27014_27045 = state_27000__$1;
(statearr_27014_27045[(2)] = inst_26975);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27000__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (9))){
var inst_26964 = (state_27000[(7)]);
var inst_26977 = (state_27000[(2)]);
var inst_26978 = (inst_26964 + (1));
var inst_26964__$1 = inst_26978;
var state_27000__$1 = (function (){var statearr_27015 = state_27000;
(statearr_27015[(7)] = inst_26964__$1);

(statearr_27015[(10)] = inst_26977);

return statearr_27015;
})();
var statearr_27016_27046 = state_27000__$1;
(statearr_27016_27046[(2)] = null);

(statearr_27016_27046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (5))){
var inst_26984 = (state_27000[(2)]);
var state_27000__$1 = (function (){var statearr_27017 = state_27000;
(statearr_27017[(11)] = inst_26984);

return statearr_27017;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27000__$1,(12),dchan);
} else {
if((state_val_27001 === (14))){
var inst_26986 = (state_27000[(8)]);
var inst_26991 = cljs.core.apply.call(null,f,inst_26986);
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27000__$1,(16),out,inst_26991);
} else {
if((state_val_27001 === (16))){
var inst_26993 = (state_27000[(2)]);
var state_27000__$1 = (function (){var statearr_27018 = state_27000;
(statearr_27018[(12)] = inst_26993);

return statearr_27018;
})();
var statearr_27019_27047 = state_27000__$1;
(statearr_27019_27047[(2)] = null);

(statearr_27019_27047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (10))){
var inst_26968 = (state_27000[(2)]);
var inst_26969 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27000__$1 = (function (){var statearr_27020 = state_27000;
(statearr_27020[(13)] = inst_26968);

return statearr_27020;
})();
var statearr_27021_27048 = state_27000__$1;
(statearr_27021_27048[(2)] = inst_26969);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27000__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (8))){
var inst_26982 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27022_27049 = state_27000__$1;
(statearr_27022_27049[(2)] = inst_26982);

(statearr_27022_27049[(1)] = (5));


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
});})(c__20410__auto___27034,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20389__auto__,c__20410__auto___27034,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_27026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27026[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_27026[(1)] = (1));

return statearr_27026;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_27000){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27027){if((e27027 instanceof Object)){
var ex__20393__auto__ = e27027;
var statearr_27028_27050 = state_27000;
(statearr_27028_27050[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27051 = state_27000;
state_27000 = G__27051;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_27000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_27000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___27034,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20412__auto__ = (function (){var statearr_27029 = f__20411__auto__.call(null);
(statearr_27029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___27034);

return statearr_27029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___27034,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args27053 = [];
var len__19349__auto___27109 = arguments.length;
var i__19350__auto___27110 = (0);
while(true){
if((i__19350__auto___27110 < len__19349__auto___27109)){
args27053.push((arguments[i__19350__auto___27110]));

var G__27111 = (i__19350__auto___27110 + (1));
i__19350__auto___27110 = G__27111;
continue;
} else {
}
break;
}

var G__27055 = args27053.length;
switch (G__27055) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27053.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___27113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___27113,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___27113,out){
return (function (state_27085){
var state_val_27086 = (state_27085[(1)]);
if((state_val_27086 === (7))){
var inst_27065 = (state_27085[(7)]);
var inst_27064 = (state_27085[(8)]);
var inst_27064__$1 = (state_27085[(2)]);
var inst_27065__$1 = cljs.core.nth.call(null,inst_27064__$1,(0),null);
var inst_27066 = cljs.core.nth.call(null,inst_27064__$1,(1),null);
var inst_27067 = (inst_27065__$1 == null);
var state_27085__$1 = (function (){var statearr_27087 = state_27085;
(statearr_27087[(9)] = inst_27066);

(statearr_27087[(7)] = inst_27065__$1);

(statearr_27087[(8)] = inst_27064__$1);

return statearr_27087;
})();
if(cljs.core.truth_(inst_27067)){
var statearr_27088_27114 = state_27085__$1;
(statearr_27088_27114[(1)] = (8));

} else {
var statearr_27089_27115 = state_27085__$1;
(statearr_27089_27115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (1))){
var inst_27056 = cljs.core.vec.call(null,chs);
var inst_27057 = inst_27056;
var state_27085__$1 = (function (){var statearr_27090 = state_27085;
(statearr_27090[(10)] = inst_27057);

return statearr_27090;
})();
var statearr_27091_27116 = state_27085__$1;
(statearr_27091_27116[(2)] = null);

(statearr_27091_27116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (4))){
var inst_27057 = (state_27085[(10)]);
var state_27085__$1 = state_27085;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27085__$1,(7),inst_27057);
} else {
if((state_val_27086 === (6))){
var inst_27081 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27092_27117 = state_27085__$1;
(statearr_27092_27117[(2)] = inst_27081);

(statearr_27092_27117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (3))){
var inst_27083 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27085__$1,inst_27083);
} else {
if((state_val_27086 === (2))){
var inst_27057 = (state_27085[(10)]);
var inst_27059 = cljs.core.count.call(null,inst_27057);
var inst_27060 = (inst_27059 > (0));
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27060)){
var statearr_27094_27118 = state_27085__$1;
(statearr_27094_27118[(1)] = (4));

} else {
var statearr_27095_27119 = state_27085__$1;
(statearr_27095_27119[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (11))){
var inst_27057 = (state_27085[(10)]);
var inst_27074 = (state_27085[(2)]);
var tmp27093 = inst_27057;
var inst_27057__$1 = tmp27093;
var state_27085__$1 = (function (){var statearr_27096 = state_27085;
(statearr_27096[(11)] = inst_27074);

(statearr_27096[(10)] = inst_27057__$1);

return statearr_27096;
})();
var statearr_27097_27120 = state_27085__$1;
(statearr_27097_27120[(2)] = null);

(statearr_27097_27120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (9))){
var inst_27065 = (state_27085[(7)]);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27085__$1,(11),out,inst_27065);
} else {
if((state_val_27086 === (5))){
var inst_27079 = cljs.core.async.close_BANG_.call(null,out);
var state_27085__$1 = state_27085;
var statearr_27098_27121 = state_27085__$1;
(statearr_27098_27121[(2)] = inst_27079);

(statearr_27098_27121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (10))){
var inst_27077 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27099_27122 = state_27085__$1;
(statearr_27099_27122[(2)] = inst_27077);

(statearr_27099_27122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (8))){
var inst_27066 = (state_27085[(9)]);
var inst_27065 = (state_27085[(7)]);
var inst_27064 = (state_27085[(8)]);
var inst_27057 = (state_27085[(10)]);
var inst_27069 = (function (){var cs = inst_27057;
var vec__27062 = inst_27064;
var v = inst_27065;
var c = inst_27066;
return ((function (cs,vec__27062,v,c,inst_27066,inst_27065,inst_27064,inst_27057,state_val_27086,c__20410__auto___27113,out){
return (function (p1__27052_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27052_SHARP_);
});
;})(cs,vec__27062,v,c,inst_27066,inst_27065,inst_27064,inst_27057,state_val_27086,c__20410__auto___27113,out))
})();
var inst_27070 = cljs.core.filterv.call(null,inst_27069,inst_27057);
var inst_27057__$1 = inst_27070;
var state_27085__$1 = (function (){var statearr_27100 = state_27085;
(statearr_27100[(10)] = inst_27057__$1);

return statearr_27100;
})();
var statearr_27101_27123 = state_27085__$1;
(statearr_27101_27123[(2)] = null);

(statearr_27101_27123[(1)] = (2));


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
});})(c__20410__auto___27113,out))
;
return ((function (switch__20389__auto__,c__20410__auto___27113,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_27105 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27105[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_27105[(1)] = (1));

return statearr_27105;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_27085){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27106){if((e27106 instanceof Object)){
var ex__20393__auto__ = e27106;
var statearr_27107_27124 = state_27085;
(statearr_27107_27124[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27125 = state_27085;
state_27085 = G__27125;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_27085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_27085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___27113,out))
})();
var state__20412__auto__ = (function (){var statearr_27108 = f__20411__auto__.call(null);
(statearr_27108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___27113);

return statearr_27108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___27113,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27126 = [];
var len__19349__auto___27175 = arguments.length;
var i__19350__auto___27176 = (0);
while(true){
if((i__19350__auto___27176 < len__19349__auto___27175)){
args27126.push((arguments[i__19350__auto___27176]));

var G__27177 = (i__19350__auto___27176 + (1));
i__19350__auto___27176 = G__27177;
continue;
} else {
}
break;
}

var G__27128 = args27126.length;
switch (G__27128) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27126.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___27179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___27179,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___27179,out){
return (function (state_27152){
var state_val_27153 = (state_27152[(1)]);
if((state_val_27153 === (7))){
var inst_27134 = (state_27152[(7)]);
var inst_27134__$1 = (state_27152[(2)]);
var inst_27135 = (inst_27134__$1 == null);
var inst_27136 = cljs.core.not.call(null,inst_27135);
var state_27152__$1 = (function (){var statearr_27154 = state_27152;
(statearr_27154[(7)] = inst_27134__$1);

return statearr_27154;
})();
if(inst_27136){
var statearr_27155_27180 = state_27152__$1;
(statearr_27155_27180[(1)] = (8));

} else {
var statearr_27156_27181 = state_27152__$1;
(statearr_27156_27181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (1))){
var inst_27129 = (0);
var state_27152__$1 = (function (){var statearr_27157 = state_27152;
(statearr_27157[(8)] = inst_27129);

return statearr_27157;
})();
var statearr_27158_27182 = state_27152__$1;
(statearr_27158_27182[(2)] = null);

(statearr_27158_27182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (4))){
var state_27152__$1 = state_27152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27152__$1,(7),ch);
} else {
if((state_val_27153 === (6))){
var inst_27147 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
var statearr_27159_27183 = state_27152__$1;
(statearr_27159_27183[(2)] = inst_27147);

(statearr_27159_27183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (3))){
var inst_27149 = (state_27152[(2)]);
var inst_27150 = cljs.core.async.close_BANG_.call(null,out);
var state_27152__$1 = (function (){var statearr_27160 = state_27152;
(statearr_27160[(9)] = inst_27149);

return statearr_27160;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27152__$1,inst_27150);
} else {
if((state_val_27153 === (2))){
var inst_27129 = (state_27152[(8)]);
var inst_27131 = (inst_27129 < n);
var state_27152__$1 = state_27152;
if(cljs.core.truth_(inst_27131)){
var statearr_27161_27184 = state_27152__$1;
(statearr_27161_27184[(1)] = (4));

} else {
var statearr_27162_27185 = state_27152__$1;
(statearr_27162_27185[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (11))){
var inst_27129 = (state_27152[(8)]);
var inst_27139 = (state_27152[(2)]);
var inst_27140 = (inst_27129 + (1));
var inst_27129__$1 = inst_27140;
var state_27152__$1 = (function (){var statearr_27163 = state_27152;
(statearr_27163[(8)] = inst_27129__$1);

(statearr_27163[(10)] = inst_27139);

return statearr_27163;
})();
var statearr_27164_27186 = state_27152__$1;
(statearr_27164_27186[(2)] = null);

(statearr_27164_27186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (9))){
var state_27152__$1 = state_27152;
var statearr_27165_27187 = state_27152__$1;
(statearr_27165_27187[(2)] = null);

(statearr_27165_27187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (5))){
var state_27152__$1 = state_27152;
var statearr_27166_27188 = state_27152__$1;
(statearr_27166_27188[(2)] = null);

(statearr_27166_27188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (10))){
var inst_27144 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
var statearr_27167_27189 = state_27152__$1;
(statearr_27167_27189[(2)] = inst_27144);

(statearr_27167_27189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (8))){
var inst_27134 = (state_27152[(7)]);
var state_27152__$1 = state_27152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27152__$1,(11),out,inst_27134);
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
});})(c__20410__auto___27179,out))
;
return ((function (switch__20389__auto__,c__20410__auto___27179,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_27171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27171[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_27171[(1)] = (1));

return statearr_27171;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_27152){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27172){if((e27172 instanceof Object)){
var ex__20393__auto__ = e27172;
var statearr_27173_27190 = state_27152;
(statearr_27173_27190[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27191 = state_27152;
state_27152 = G__27191;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_27152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_27152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___27179,out))
})();
var state__20412__auto__ = (function (){var statearr_27174 = f__20411__auto__.call(null);
(statearr_27174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___27179);

return statearr_27174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___27179,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27199 = (function (map_LT_,f,ch,meta27200){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27200 = meta27200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27201,meta27200__$1){
var self__ = this;
var _27201__$1 = this;
return (new cljs.core.async.t_cljs$core$async27199(self__.map_LT_,self__.f,self__.ch,meta27200__$1));
});

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27201){
var self__ = this;
var _27201__$1 = this;
return self__.meta27200;
});

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27202 = (function (map_LT_,f,ch,meta27200,_,fn1,meta27203){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27200 = meta27200;
this._ = _;
this.fn1 = fn1;
this.meta27203 = meta27203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27204,meta27203__$1){
var self__ = this;
var _27204__$1 = this;
return (new cljs.core.async.t_cljs$core$async27202(self__.map_LT_,self__.f,self__.ch,self__.meta27200,self__._,self__.fn1,meta27203__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27204){
var self__ = this;
var _27204__$1 = this;
return self__.meta27203;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27192_SHARP_){
return f1.call(null,(((p1__27192_SHARP_ == null))?null:self__.f.call(null,p1__27192_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27202.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27200","meta27200",600386470,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27199","cljs.core.async/t_cljs$core$async27199",-628035275,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27203","meta27203",-1519982275,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27202";

cljs.core.async.t_cljs$core$async27202.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async27202");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27202 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27202(map_LT___$1,f__$1,ch__$1,meta27200__$1,___$2,fn1__$1,meta27203){
return (new cljs.core.async.t_cljs$core$async27202(map_LT___$1,f__$1,ch__$1,meta27200__$1,___$2,fn1__$1,meta27203));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27202(self__.map_LT_,self__.f,self__.ch,self__.meta27200,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18279__auto__ = ret;
if(cljs.core.truth_(and__18279__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18279__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27200","meta27200",600386470,null)], null);
});

cljs.core.async.t_cljs$core$async27199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27199";

cljs.core.async.t_cljs$core$async27199.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async27199");
});

cljs.core.async.__GT_t_cljs$core$async27199 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27199(map_LT___$1,f__$1,ch__$1,meta27200){
return (new cljs.core.async.t_cljs$core$async27199(map_LT___$1,f__$1,ch__$1,meta27200));
});

}

return (new cljs.core.async.t_cljs$core$async27199(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27208 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27208 = (function (map_GT_,f,ch,meta27209){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27209 = meta27209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27210,meta27209__$1){
var self__ = this;
var _27210__$1 = this;
return (new cljs.core.async.t_cljs$core$async27208(self__.map_GT_,self__.f,self__.ch,meta27209__$1));
});

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27210){
var self__ = this;
var _27210__$1 = this;
return self__.meta27209;
});

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27208.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27209","meta27209",-672512466,null)], null);
});

cljs.core.async.t_cljs$core$async27208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27208";

cljs.core.async.t_cljs$core$async27208.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async27208");
});

cljs.core.async.__GT_t_cljs$core$async27208 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27208(map_GT___$1,f__$1,ch__$1,meta27209){
return (new cljs.core.async.t_cljs$core$async27208(map_GT___$1,f__$1,ch__$1,meta27209));
});

}

return (new cljs.core.async.t_cljs$core$async27208(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27214 = (function (filter_GT_,p,ch,meta27215){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27215 = meta27215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27216,meta27215__$1){
var self__ = this;
var _27216__$1 = this;
return (new cljs.core.async.t_cljs$core$async27214(self__.filter_GT_,self__.p,self__.ch,meta27215__$1));
});

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27216){
var self__ = this;
var _27216__$1 = this;
return self__.meta27215;
});

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27215","meta27215",608153883,null)], null);
});

cljs.core.async.t_cljs$core$async27214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27214";

cljs.core.async.t_cljs$core$async27214.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async27214");
});

cljs.core.async.__GT_t_cljs$core$async27214 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27214(filter_GT___$1,p__$1,ch__$1,meta27215){
return (new cljs.core.async.t_cljs$core$async27214(filter_GT___$1,p__$1,ch__$1,meta27215));
});

}

return (new cljs.core.async.t_cljs$core$async27214(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27217 = [];
var len__19349__auto___27261 = arguments.length;
var i__19350__auto___27262 = (0);
while(true){
if((i__19350__auto___27262 < len__19349__auto___27261)){
args27217.push((arguments[i__19350__auto___27262]));

var G__27263 = (i__19350__auto___27262 + (1));
i__19350__auto___27262 = G__27263;
continue;
} else {
}
break;
}

var G__27219 = args27217.length;
switch (G__27219) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27217.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___27265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___27265,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___27265,out){
return (function (state_27240){
var state_val_27241 = (state_27240[(1)]);
if((state_val_27241 === (7))){
var inst_27236 = (state_27240[(2)]);
var state_27240__$1 = state_27240;
var statearr_27242_27266 = state_27240__$1;
(statearr_27242_27266[(2)] = inst_27236);

(statearr_27242_27266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (1))){
var state_27240__$1 = state_27240;
var statearr_27243_27267 = state_27240__$1;
(statearr_27243_27267[(2)] = null);

(statearr_27243_27267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (4))){
var inst_27222 = (state_27240[(7)]);
var inst_27222__$1 = (state_27240[(2)]);
var inst_27223 = (inst_27222__$1 == null);
var state_27240__$1 = (function (){var statearr_27244 = state_27240;
(statearr_27244[(7)] = inst_27222__$1);

return statearr_27244;
})();
if(cljs.core.truth_(inst_27223)){
var statearr_27245_27268 = state_27240__$1;
(statearr_27245_27268[(1)] = (5));

} else {
var statearr_27246_27269 = state_27240__$1;
(statearr_27246_27269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (6))){
var inst_27222 = (state_27240[(7)]);
var inst_27227 = p.call(null,inst_27222);
var state_27240__$1 = state_27240;
if(cljs.core.truth_(inst_27227)){
var statearr_27247_27270 = state_27240__$1;
(statearr_27247_27270[(1)] = (8));

} else {
var statearr_27248_27271 = state_27240__$1;
(statearr_27248_27271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (3))){
var inst_27238 = (state_27240[(2)]);
var state_27240__$1 = state_27240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27240__$1,inst_27238);
} else {
if((state_val_27241 === (2))){
var state_27240__$1 = state_27240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27240__$1,(4),ch);
} else {
if((state_val_27241 === (11))){
var inst_27230 = (state_27240[(2)]);
var state_27240__$1 = state_27240;
var statearr_27249_27272 = state_27240__$1;
(statearr_27249_27272[(2)] = inst_27230);

(statearr_27249_27272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (9))){
var state_27240__$1 = state_27240;
var statearr_27250_27273 = state_27240__$1;
(statearr_27250_27273[(2)] = null);

(statearr_27250_27273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (5))){
var inst_27225 = cljs.core.async.close_BANG_.call(null,out);
var state_27240__$1 = state_27240;
var statearr_27251_27274 = state_27240__$1;
(statearr_27251_27274[(2)] = inst_27225);

(statearr_27251_27274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (10))){
var inst_27233 = (state_27240[(2)]);
var state_27240__$1 = (function (){var statearr_27252 = state_27240;
(statearr_27252[(8)] = inst_27233);

return statearr_27252;
})();
var statearr_27253_27275 = state_27240__$1;
(statearr_27253_27275[(2)] = null);

(statearr_27253_27275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27241 === (8))){
var inst_27222 = (state_27240[(7)]);
var state_27240__$1 = state_27240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27240__$1,(11),out,inst_27222);
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
});})(c__20410__auto___27265,out))
;
return ((function (switch__20389__auto__,c__20410__auto___27265,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_27257 = [null,null,null,null,null,null,null,null,null];
(statearr_27257[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_27257[(1)] = (1));

return statearr_27257;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_27240){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27258){if((e27258 instanceof Object)){
var ex__20393__auto__ = e27258;
var statearr_27259_27276 = state_27240;
(statearr_27259_27276[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27277 = state_27240;
state_27240 = G__27277;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_27240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_27240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___27265,out))
})();
var state__20412__auto__ = (function (){var statearr_27260 = f__20411__auto__.call(null);
(statearr_27260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___27265);

return statearr_27260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___27265,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27278 = [];
var len__19349__auto___27281 = arguments.length;
var i__19350__auto___27282 = (0);
while(true){
if((i__19350__auto___27282 < len__19349__auto___27281)){
args27278.push((arguments[i__19350__auto___27282]));

var G__27283 = (i__19350__auto___27282 + (1));
i__19350__auto___27282 = G__27283;
continue;
} else {
}
break;
}

var G__27280 = args27278.length;
switch (G__27280) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27278.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__){
return (function (state_27450){
var state_val_27451 = (state_27450[(1)]);
if((state_val_27451 === (7))){
var inst_27446 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27452_27493 = state_27450__$1;
(statearr_27452_27493[(2)] = inst_27446);

(statearr_27452_27493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (20))){
var inst_27416 = (state_27450[(7)]);
var inst_27427 = (state_27450[(2)]);
var inst_27428 = cljs.core.next.call(null,inst_27416);
var inst_27402 = inst_27428;
var inst_27403 = null;
var inst_27404 = (0);
var inst_27405 = (0);
var state_27450__$1 = (function (){var statearr_27453 = state_27450;
(statearr_27453[(8)] = inst_27402);

(statearr_27453[(9)] = inst_27427);

(statearr_27453[(10)] = inst_27403);

(statearr_27453[(11)] = inst_27404);

(statearr_27453[(12)] = inst_27405);

return statearr_27453;
})();
var statearr_27454_27494 = state_27450__$1;
(statearr_27454_27494[(2)] = null);

(statearr_27454_27494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (1))){
var state_27450__$1 = state_27450;
var statearr_27455_27495 = state_27450__$1;
(statearr_27455_27495[(2)] = null);

(statearr_27455_27495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (4))){
var inst_27391 = (state_27450[(13)]);
var inst_27391__$1 = (state_27450[(2)]);
var inst_27392 = (inst_27391__$1 == null);
var state_27450__$1 = (function (){var statearr_27456 = state_27450;
(statearr_27456[(13)] = inst_27391__$1);

return statearr_27456;
})();
if(cljs.core.truth_(inst_27392)){
var statearr_27457_27496 = state_27450__$1;
(statearr_27457_27496[(1)] = (5));

} else {
var statearr_27458_27497 = state_27450__$1;
(statearr_27458_27497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (15))){
var state_27450__$1 = state_27450;
var statearr_27462_27498 = state_27450__$1;
(statearr_27462_27498[(2)] = null);

(statearr_27462_27498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (21))){
var state_27450__$1 = state_27450;
var statearr_27463_27499 = state_27450__$1;
(statearr_27463_27499[(2)] = null);

(statearr_27463_27499[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (13))){
var inst_27402 = (state_27450[(8)]);
var inst_27403 = (state_27450[(10)]);
var inst_27404 = (state_27450[(11)]);
var inst_27405 = (state_27450[(12)]);
var inst_27412 = (state_27450[(2)]);
var inst_27413 = (inst_27405 + (1));
var tmp27459 = inst_27402;
var tmp27460 = inst_27403;
var tmp27461 = inst_27404;
var inst_27402__$1 = tmp27459;
var inst_27403__$1 = tmp27460;
var inst_27404__$1 = tmp27461;
var inst_27405__$1 = inst_27413;
var state_27450__$1 = (function (){var statearr_27464 = state_27450;
(statearr_27464[(8)] = inst_27402__$1);

(statearr_27464[(10)] = inst_27403__$1);

(statearr_27464[(11)] = inst_27404__$1);

(statearr_27464[(14)] = inst_27412);

(statearr_27464[(12)] = inst_27405__$1);

return statearr_27464;
})();
var statearr_27465_27500 = state_27450__$1;
(statearr_27465_27500[(2)] = null);

(statearr_27465_27500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (22))){
var state_27450__$1 = state_27450;
var statearr_27466_27501 = state_27450__$1;
(statearr_27466_27501[(2)] = null);

(statearr_27466_27501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (6))){
var inst_27391 = (state_27450[(13)]);
var inst_27400 = f.call(null,inst_27391);
var inst_27401 = cljs.core.seq.call(null,inst_27400);
var inst_27402 = inst_27401;
var inst_27403 = null;
var inst_27404 = (0);
var inst_27405 = (0);
var state_27450__$1 = (function (){var statearr_27467 = state_27450;
(statearr_27467[(8)] = inst_27402);

(statearr_27467[(10)] = inst_27403);

(statearr_27467[(11)] = inst_27404);

(statearr_27467[(12)] = inst_27405);

return statearr_27467;
})();
var statearr_27468_27502 = state_27450__$1;
(statearr_27468_27502[(2)] = null);

(statearr_27468_27502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (17))){
var inst_27416 = (state_27450[(7)]);
var inst_27420 = cljs.core.chunk_first.call(null,inst_27416);
var inst_27421 = cljs.core.chunk_rest.call(null,inst_27416);
var inst_27422 = cljs.core.count.call(null,inst_27420);
var inst_27402 = inst_27421;
var inst_27403 = inst_27420;
var inst_27404 = inst_27422;
var inst_27405 = (0);
var state_27450__$1 = (function (){var statearr_27469 = state_27450;
(statearr_27469[(8)] = inst_27402);

(statearr_27469[(10)] = inst_27403);

(statearr_27469[(11)] = inst_27404);

(statearr_27469[(12)] = inst_27405);

return statearr_27469;
})();
var statearr_27470_27503 = state_27450__$1;
(statearr_27470_27503[(2)] = null);

(statearr_27470_27503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (3))){
var inst_27448 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27450__$1,inst_27448);
} else {
if((state_val_27451 === (12))){
var inst_27436 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27471_27504 = state_27450__$1;
(statearr_27471_27504[(2)] = inst_27436);

(statearr_27471_27504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (2))){
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27450__$1,(4),in$);
} else {
if((state_val_27451 === (23))){
var inst_27444 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27472_27505 = state_27450__$1;
(statearr_27472_27505[(2)] = inst_27444);

(statearr_27472_27505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (19))){
var inst_27431 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27473_27506 = state_27450__$1;
(statearr_27473_27506[(2)] = inst_27431);

(statearr_27473_27506[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (11))){
var inst_27402 = (state_27450[(8)]);
var inst_27416 = (state_27450[(7)]);
var inst_27416__$1 = cljs.core.seq.call(null,inst_27402);
var state_27450__$1 = (function (){var statearr_27474 = state_27450;
(statearr_27474[(7)] = inst_27416__$1);

return statearr_27474;
})();
if(inst_27416__$1){
var statearr_27475_27507 = state_27450__$1;
(statearr_27475_27507[(1)] = (14));

} else {
var statearr_27476_27508 = state_27450__$1;
(statearr_27476_27508[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (9))){
var inst_27438 = (state_27450[(2)]);
var inst_27439 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27450__$1 = (function (){var statearr_27477 = state_27450;
(statearr_27477[(15)] = inst_27438);

return statearr_27477;
})();
if(cljs.core.truth_(inst_27439)){
var statearr_27478_27509 = state_27450__$1;
(statearr_27478_27509[(1)] = (21));

} else {
var statearr_27479_27510 = state_27450__$1;
(statearr_27479_27510[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (5))){
var inst_27394 = cljs.core.async.close_BANG_.call(null,out);
var state_27450__$1 = state_27450;
var statearr_27480_27511 = state_27450__$1;
(statearr_27480_27511[(2)] = inst_27394);

(statearr_27480_27511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (14))){
var inst_27416 = (state_27450[(7)]);
var inst_27418 = cljs.core.chunked_seq_QMARK_.call(null,inst_27416);
var state_27450__$1 = state_27450;
if(inst_27418){
var statearr_27481_27512 = state_27450__$1;
(statearr_27481_27512[(1)] = (17));

} else {
var statearr_27482_27513 = state_27450__$1;
(statearr_27482_27513[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (16))){
var inst_27434 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27483_27514 = state_27450__$1;
(statearr_27483_27514[(2)] = inst_27434);

(statearr_27483_27514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (10))){
var inst_27403 = (state_27450[(10)]);
var inst_27405 = (state_27450[(12)]);
var inst_27410 = cljs.core._nth.call(null,inst_27403,inst_27405);
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27450__$1,(13),out,inst_27410);
} else {
if((state_val_27451 === (18))){
var inst_27416 = (state_27450[(7)]);
var inst_27425 = cljs.core.first.call(null,inst_27416);
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27450__$1,(20),out,inst_27425);
} else {
if((state_val_27451 === (8))){
var inst_27404 = (state_27450[(11)]);
var inst_27405 = (state_27450[(12)]);
var inst_27407 = (inst_27405 < inst_27404);
var inst_27408 = inst_27407;
var state_27450__$1 = state_27450;
if(cljs.core.truth_(inst_27408)){
var statearr_27484_27515 = state_27450__$1;
(statearr_27484_27515[(1)] = (10));

} else {
var statearr_27485_27516 = state_27450__$1;
(statearr_27485_27516[(1)] = (11));

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
});})(c__20410__auto__))
;
return ((function (switch__20389__auto__,c__20410__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____0 = (function (){
var statearr_27489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27489[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__);

(statearr_27489[(1)] = (1));

return statearr_27489;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____1 = (function (state_27450){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27490){if((e27490 instanceof Object)){
var ex__20393__auto__ = e27490;
var statearr_27491_27517 = state_27450;
(statearr_27491_27517[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27518 = state_27450;
state_27450 = G__27518;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__ = function(state_27450){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____1.call(this,state_27450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_27492 = f__20411__auto__.call(null);
(statearr_27492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_27492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto__))
);

return c__20410__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27519 = [];
var len__19349__auto___27522 = arguments.length;
var i__19350__auto___27523 = (0);
while(true){
if((i__19350__auto___27523 < len__19349__auto___27522)){
args27519.push((arguments[i__19350__auto___27523]));

var G__27524 = (i__19350__auto___27523 + (1));
i__19350__auto___27523 = G__27524;
continue;
} else {
}
break;
}

var G__27521 = args27519.length;
switch (G__27521) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27519.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27526 = [];
var len__19349__auto___27529 = arguments.length;
var i__19350__auto___27530 = (0);
while(true){
if((i__19350__auto___27530 < len__19349__auto___27529)){
args27526.push((arguments[i__19350__auto___27530]));

var G__27531 = (i__19350__auto___27530 + (1));
i__19350__auto___27530 = G__27531;
continue;
} else {
}
break;
}

var G__27528 = args27526.length;
switch (G__27528) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27526.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27533 = [];
var len__19349__auto___27584 = arguments.length;
var i__19350__auto___27585 = (0);
while(true){
if((i__19350__auto___27585 < len__19349__auto___27584)){
args27533.push((arguments[i__19350__auto___27585]));

var G__27586 = (i__19350__auto___27585 + (1));
i__19350__auto___27585 = G__27586;
continue;
} else {
}
break;
}

var G__27535 = args27533.length;
switch (G__27535) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27533.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___27588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___27588,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___27588,out){
return (function (state_27559){
var state_val_27560 = (state_27559[(1)]);
if((state_val_27560 === (7))){
var inst_27554 = (state_27559[(2)]);
var state_27559__$1 = state_27559;
var statearr_27561_27589 = state_27559__$1;
(statearr_27561_27589[(2)] = inst_27554);

(statearr_27561_27589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (1))){
var inst_27536 = null;
var state_27559__$1 = (function (){var statearr_27562 = state_27559;
(statearr_27562[(7)] = inst_27536);

return statearr_27562;
})();
var statearr_27563_27590 = state_27559__$1;
(statearr_27563_27590[(2)] = null);

(statearr_27563_27590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (4))){
var inst_27539 = (state_27559[(8)]);
var inst_27539__$1 = (state_27559[(2)]);
var inst_27540 = (inst_27539__$1 == null);
var inst_27541 = cljs.core.not.call(null,inst_27540);
var state_27559__$1 = (function (){var statearr_27564 = state_27559;
(statearr_27564[(8)] = inst_27539__$1);

return statearr_27564;
})();
if(inst_27541){
var statearr_27565_27591 = state_27559__$1;
(statearr_27565_27591[(1)] = (5));

} else {
var statearr_27566_27592 = state_27559__$1;
(statearr_27566_27592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (6))){
var state_27559__$1 = state_27559;
var statearr_27567_27593 = state_27559__$1;
(statearr_27567_27593[(2)] = null);

(statearr_27567_27593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (3))){
var inst_27556 = (state_27559[(2)]);
var inst_27557 = cljs.core.async.close_BANG_.call(null,out);
var state_27559__$1 = (function (){var statearr_27568 = state_27559;
(statearr_27568[(9)] = inst_27556);

return statearr_27568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27559__$1,inst_27557);
} else {
if((state_val_27560 === (2))){
var state_27559__$1 = state_27559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27559__$1,(4),ch);
} else {
if((state_val_27560 === (11))){
var inst_27539 = (state_27559[(8)]);
var inst_27548 = (state_27559[(2)]);
var inst_27536 = inst_27539;
var state_27559__$1 = (function (){var statearr_27569 = state_27559;
(statearr_27569[(10)] = inst_27548);

(statearr_27569[(7)] = inst_27536);

return statearr_27569;
})();
var statearr_27570_27594 = state_27559__$1;
(statearr_27570_27594[(2)] = null);

(statearr_27570_27594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (9))){
var inst_27539 = (state_27559[(8)]);
var state_27559__$1 = state_27559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27559__$1,(11),out,inst_27539);
} else {
if((state_val_27560 === (5))){
var inst_27539 = (state_27559[(8)]);
var inst_27536 = (state_27559[(7)]);
var inst_27543 = cljs.core._EQ_.call(null,inst_27539,inst_27536);
var state_27559__$1 = state_27559;
if(inst_27543){
var statearr_27572_27595 = state_27559__$1;
(statearr_27572_27595[(1)] = (8));

} else {
var statearr_27573_27596 = state_27559__$1;
(statearr_27573_27596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (10))){
var inst_27551 = (state_27559[(2)]);
var state_27559__$1 = state_27559;
var statearr_27574_27597 = state_27559__$1;
(statearr_27574_27597[(2)] = inst_27551);

(statearr_27574_27597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27560 === (8))){
var inst_27536 = (state_27559[(7)]);
var tmp27571 = inst_27536;
var inst_27536__$1 = tmp27571;
var state_27559__$1 = (function (){var statearr_27575 = state_27559;
(statearr_27575[(7)] = inst_27536__$1);

return statearr_27575;
})();
var statearr_27576_27598 = state_27559__$1;
(statearr_27576_27598[(2)] = null);

(statearr_27576_27598[(1)] = (2));


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
});})(c__20410__auto___27588,out))
;
return ((function (switch__20389__auto__,c__20410__auto___27588,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_27580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27580[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_27580[(1)] = (1));

return statearr_27580;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_27559){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27581){if((e27581 instanceof Object)){
var ex__20393__auto__ = e27581;
var statearr_27582_27599 = state_27559;
(statearr_27582_27599[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27600 = state_27559;
state_27559 = G__27600;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_27559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_27559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___27588,out))
})();
var state__20412__auto__ = (function (){var statearr_27583 = f__20411__auto__.call(null);
(statearr_27583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___27588);

return statearr_27583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___27588,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27601 = [];
var len__19349__auto___27671 = arguments.length;
var i__19350__auto___27672 = (0);
while(true){
if((i__19350__auto___27672 < len__19349__auto___27671)){
args27601.push((arguments[i__19350__auto___27672]));

var G__27673 = (i__19350__auto___27672 + (1));
i__19350__auto___27672 = G__27673;
continue;
} else {
}
break;
}

var G__27603 = args27601.length;
switch (G__27603) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27601.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___27675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___27675,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___27675,out){
return (function (state_27641){
var state_val_27642 = (state_27641[(1)]);
if((state_val_27642 === (7))){
var inst_27637 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27643_27676 = state_27641__$1;
(statearr_27643_27676[(2)] = inst_27637);

(statearr_27643_27676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (1))){
var inst_27604 = (new Array(n));
var inst_27605 = inst_27604;
var inst_27606 = (0);
var state_27641__$1 = (function (){var statearr_27644 = state_27641;
(statearr_27644[(7)] = inst_27605);

(statearr_27644[(8)] = inst_27606);

return statearr_27644;
})();
var statearr_27645_27677 = state_27641__$1;
(statearr_27645_27677[(2)] = null);

(statearr_27645_27677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (4))){
var inst_27609 = (state_27641[(9)]);
var inst_27609__$1 = (state_27641[(2)]);
var inst_27610 = (inst_27609__$1 == null);
var inst_27611 = cljs.core.not.call(null,inst_27610);
var state_27641__$1 = (function (){var statearr_27646 = state_27641;
(statearr_27646[(9)] = inst_27609__$1);

return statearr_27646;
})();
if(inst_27611){
var statearr_27647_27678 = state_27641__$1;
(statearr_27647_27678[(1)] = (5));

} else {
var statearr_27648_27679 = state_27641__$1;
(statearr_27648_27679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (15))){
var inst_27631 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27649_27680 = state_27641__$1;
(statearr_27649_27680[(2)] = inst_27631);

(statearr_27649_27680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (13))){
var state_27641__$1 = state_27641;
var statearr_27650_27681 = state_27641__$1;
(statearr_27650_27681[(2)] = null);

(statearr_27650_27681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (6))){
var inst_27606 = (state_27641[(8)]);
var inst_27627 = (inst_27606 > (0));
var state_27641__$1 = state_27641;
if(cljs.core.truth_(inst_27627)){
var statearr_27651_27682 = state_27641__$1;
(statearr_27651_27682[(1)] = (12));

} else {
var statearr_27652_27683 = state_27641__$1;
(statearr_27652_27683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (3))){
var inst_27639 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27641__$1,inst_27639);
} else {
if((state_val_27642 === (12))){
var inst_27605 = (state_27641[(7)]);
var inst_27629 = cljs.core.vec.call(null,inst_27605);
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27641__$1,(15),out,inst_27629);
} else {
if((state_val_27642 === (2))){
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27641__$1,(4),ch);
} else {
if((state_val_27642 === (11))){
var inst_27621 = (state_27641[(2)]);
var inst_27622 = (new Array(n));
var inst_27605 = inst_27622;
var inst_27606 = (0);
var state_27641__$1 = (function (){var statearr_27653 = state_27641;
(statearr_27653[(7)] = inst_27605);

(statearr_27653[(8)] = inst_27606);

(statearr_27653[(10)] = inst_27621);

return statearr_27653;
})();
var statearr_27654_27684 = state_27641__$1;
(statearr_27654_27684[(2)] = null);

(statearr_27654_27684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (9))){
var inst_27605 = (state_27641[(7)]);
var inst_27619 = cljs.core.vec.call(null,inst_27605);
var state_27641__$1 = state_27641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27641__$1,(11),out,inst_27619);
} else {
if((state_val_27642 === (5))){
var inst_27609 = (state_27641[(9)]);
var inst_27605 = (state_27641[(7)]);
var inst_27606 = (state_27641[(8)]);
var inst_27614 = (state_27641[(11)]);
var inst_27613 = (inst_27605[inst_27606] = inst_27609);
var inst_27614__$1 = (inst_27606 + (1));
var inst_27615 = (inst_27614__$1 < n);
var state_27641__$1 = (function (){var statearr_27655 = state_27641;
(statearr_27655[(12)] = inst_27613);

(statearr_27655[(11)] = inst_27614__$1);

return statearr_27655;
})();
if(cljs.core.truth_(inst_27615)){
var statearr_27656_27685 = state_27641__$1;
(statearr_27656_27685[(1)] = (8));

} else {
var statearr_27657_27686 = state_27641__$1;
(statearr_27657_27686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (14))){
var inst_27634 = (state_27641[(2)]);
var inst_27635 = cljs.core.async.close_BANG_.call(null,out);
var state_27641__$1 = (function (){var statearr_27659 = state_27641;
(statearr_27659[(13)] = inst_27634);

return statearr_27659;
})();
var statearr_27660_27687 = state_27641__$1;
(statearr_27660_27687[(2)] = inst_27635);

(statearr_27660_27687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (10))){
var inst_27625 = (state_27641[(2)]);
var state_27641__$1 = state_27641;
var statearr_27661_27688 = state_27641__$1;
(statearr_27661_27688[(2)] = inst_27625);

(statearr_27661_27688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27642 === (8))){
var inst_27605 = (state_27641[(7)]);
var inst_27614 = (state_27641[(11)]);
var tmp27658 = inst_27605;
var inst_27605__$1 = tmp27658;
var inst_27606 = inst_27614;
var state_27641__$1 = (function (){var statearr_27662 = state_27641;
(statearr_27662[(7)] = inst_27605__$1);

(statearr_27662[(8)] = inst_27606);

return statearr_27662;
})();
var statearr_27663_27689 = state_27641__$1;
(statearr_27663_27689[(2)] = null);

(statearr_27663_27689[(1)] = (2));


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
});})(c__20410__auto___27675,out))
;
return ((function (switch__20389__auto__,c__20410__auto___27675,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_27667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27667[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_27667[(1)] = (1));

return statearr_27667;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_27641){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27668){if((e27668 instanceof Object)){
var ex__20393__auto__ = e27668;
var statearr_27669_27690 = state_27641;
(statearr_27669_27690[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27691 = state_27641;
state_27641 = G__27691;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_27641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_27641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___27675,out))
})();
var state__20412__auto__ = (function (){var statearr_27670 = f__20411__auto__.call(null);
(statearr_27670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___27675);

return statearr_27670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___27675,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27692 = [];
var len__19349__auto___27766 = arguments.length;
var i__19350__auto___27767 = (0);
while(true){
if((i__19350__auto___27767 < len__19349__auto___27766)){
args27692.push((arguments[i__19350__auto___27767]));

var G__27768 = (i__19350__auto___27767 + (1));
i__19350__auto___27767 = G__27768;
continue;
} else {
}
break;
}

var G__27694 = args27692.length;
switch (G__27694) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27692.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___27770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___27770,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___27770,out){
return (function (state_27736){
var state_val_27737 = (state_27736[(1)]);
if((state_val_27737 === (7))){
var inst_27732 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
var statearr_27738_27771 = state_27736__$1;
(statearr_27738_27771[(2)] = inst_27732);

(statearr_27738_27771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (1))){
var inst_27695 = [];
var inst_27696 = inst_27695;
var inst_27697 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27736__$1 = (function (){var statearr_27739 = state_27736;
(statearr_27739[(7)] = inst_27696);

(statearr_27739[(8)] = inst_27697);

return statearr_27739;
})();
var statearr_27740_27772 = state_27736__$1;
(statearr_27740_27772[(2)] = null);

(statearr_27740_27772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (4))){
var inst_27700 = (state_27736[(9)]);
var inst_27700__$1 = (state_27736[(2)]);
var inst_27701 = (inst_27700__$1 == null);
var inst_27702 = cljs.core.not.call(null,inst_27701);
var state_27736__$1 = (function (){var statearr_27741 = state_27736;
(statearr_27741[(9)] = inst_27700__$1);

return statearr_27741;
})();
if(inst_27702){
var statearr_27742_27773 = state_27736__$1;
(statearr_27742_27773[(1)] = (5));

} else {
var statearr_27743_27774 = state_27736__$1;
(statearr_27743_27774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (15))){
var inst_27726 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
var statearr_27744_27775 = state_27736__$1;
(statearr_27744_27775[(2)] = inst_27726);

(statearr_27744_27775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (13))){
var state_27736__$1 = state_27736;
var statearr_27745_27776 = state_27736__$1;
(statearr_27745_27776[(2)] = null);

(statearr_27745_27776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (6))){
var inst_27696 = (state_27736[(7)]);
var inst_27721 = inst_27696.length;
var inst_27722 = (inst_27721 > (0));
var state_27736__$1 = state_27736;
if(cljs.core.truth_(inst_27722)){
var statearr_27746_27777 = state_27736__$1;
(statearr_27746_27777[(1)] = (12));

} else {
var statearr_27747_27778 = state_27736__$1;
(statearr_27747_27778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (3))){
var inst_27734 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27736__$1,inst_27734);
} else {
if((state_val_27737 === (12))){
var inst_27696 = (state_27736[(7)]);
var inst_27724 = cljs.core.vec.call(null,inst_27696);
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27736__$1,(15),out,inst_27724);
} else {
if((state_val_27737 === (2))){
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27736__$1,(4),ch);
} else {
if((state_val_27737 === (11))){
var inst_27704 = (state_27736[(10)]);
var inst_27700 = (state_27736[(9)]);
var inst_27714 = (state_27736[(2)]);
var inst_27715 = [];
var inst_27716 = inst_27715.push(inst_27700);
var inst_27696 = inst_27715;
var inst_27697 = inst_27704;
var state_27736__$1 = (function (){var statearr_27748 = state_27736;
(statearr_27748[(11)] = inst_27714);

(statearr_27748[(7)] = inst_27696);

(statearr_27748[(12)] = inst_27716);

(statearr_27748[(8)] = inst_27697);

return statearr_27748;
})();
var statearr_27749_27779 = state_27736__$1;
(statearr_27749_27779[(2)] = null);

(statearr_27749_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (9))){
var inst_27696 = (state_27736[(7)]);
var inst_27712 = cljs.core.vec.call(null,inst_27696);
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27736__$1,(11),out,inst_27712);
} else {
if((state_val_27737 === (5))){
var inst_27704 = (state_27736[(10)]);
var inst_27700 = (state_27736[(9)]);
var inst_27697 = (state_27736[(8)]);
var inst_27704__$1 = f.call(null,inst_27700);
var inst_27705 = cljs.core._EQ_.call(null,inst_27704__$1,inst_27697);
var inst_27706 = cljs.core.keyword_identical_QMARK_.call(null,inst_27697,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27707 = (inst_27705) || (inst_27706);
var state_27736__$1 = (function (){var statearr_27750 = state_27736;
(statearr_27750[(10)] = inst_27704__$1);

return statearr_27750;
})();
if(cljs.core.truth_(inst_27707)){
var statearr_27751_27780 = state_27736__$1;
(statearr_27751_27780[(1)] = (8));

} else {
var statearr_27752_27781 = state_27736__$1;
(statearr_27752_27781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (14))){
var inst_27729 = (state_27736[(2)]);
var inst_27730 = cljs.core.async.close_BANG_.call(null,out);
var state_27736__$1 = (function (){var statearr_27754 = state_27736;
(statearr_27754[(13)] = inst_27729);

return statearr_27754;
})();
var statearr_27755_27782 = state_27736__$1;
(statearr_27755_27782[(2)] = inst_27730);

(statearr_27755_27782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (10))){
var inst_27719 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
var statearr_27756_27783 = state_27736__$1;
(statearr_27756_27783[(2)] = inst_27719);

(statearr_27756_27783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (8))){
var inst_27704 = (state_27736[(10)]);
var inst_27700 = (state_27736[(9)]);
var inst_27696 = (state_27736[(7)]);
var inst_27709 = inst_27696.push(inst_27700);
var tmp27753 = inst_27696;
var inst_27696__$1 = tmp27753;
var inst_27697 = inst_27704;
var state_27736__$1 = (function (){var statearr_27757 = state_27736;
(statearr_27757[(7)] = inst_27696__$1);

(statearr_27757[(8)] = inst_27697);

(statearr_27757[(14)] = inst_27709);

return statearr_27757;
})();
var statearr_27758_27784 = state_27736__$1;
(statearr_27758_27784[(2)] = null);

(statearr_27758_27784[(1)] = (2));


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
});})(c__20410__auto___27770,out))
;
return ((function (switch__20389__auto__,c__20410__auto___27770,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_27762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27762[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_27762[(1)] = (1));

return statearr_27762;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_27736){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_27736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e27763){if((e27763 instanceof Object)){
var ex__20393__auto__ = e27763;
var statearr_27764_27785 = state_27736;
(statearr_27764_27785[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27786 = state_27736;
state_27736 = G__27786;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_27736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_27736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___27770,out))
})();
var state__20412__auto__ = (function (){var statearr_27765 = f__20411__auto__.call(null);
(statearr_27765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___27770);

return statearr_27765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___27770,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1456984146070