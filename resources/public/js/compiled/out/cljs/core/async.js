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
var args21186 = [];
var len__19349__auto___21192 = arguments.length;
var i__19350__auto___21193 = (0);
while(true){
if((i__19350__auto___21193 < len__19349__auto___21192)){
args21186.push((arguments[i__19350__auto___21193]));

var G__21194 = (i__19350__auto___21193 + (1));
i__19350__auto___21193 = G__21194;
continue;
} else {
}
break;
}

var G__21188 = args21186.length;
switch (G__21188) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21186.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21189 = (function (f,blockable,meta21190){
this.f = f;
this.blockable = blockable;
this.meta21190 = meta21190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21191,meta21190__$1){
var self__ = this;
var _21191__$1 = this;
return (new cljs.core.async.t_cljs$core$async21189(self__.f,self__.blockable,meta21190__$1));
});

cljs.core.async.t_cljs$core$async21189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21191){
var self__ = this;
var _21191__$1 = this;
return self__.meta21190;
});

cljs.core.async.t_cljs$core$async21189.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21189.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21190","meta21190",-743065855,null)], null);
});

cljs.core.async.t_cljs$core$async21189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21189";

cljs.core.async.t_cljs$core$async21189.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async21189");
});

cljs.core.async.__GT_t_cljs$core$async21189 = (function cljs$core$async$__GT_t_cljs$core$async21189(f__$1,blockable__$1,meta21190){
return (new cljs.core.async.t_cljs$core$async21189(f__$1,blockable__$1,meta21190));
});

}

return (new cljs.core.async.t_cljs$core$async21189(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21198 = [];
var len__19349__auto___21201 = arguments.length;
var i__19350__auto___21202 = (0);
while(true){
if((i__19350__auto___21202 < len__19349__auto___21201)){
args21198.push((arguments[i__19350__auto___21202]));

var G__21203 = (i__19350__auto___21202 + (1));
i__19350__auto___21202 = G__21203;
continue;
} else {
}
break;
}

var G__21200 = args21198.length;
switch (G__21200) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21198.length)].join('')));

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
var args21205 = [];
var len__19349__auto___21208 = arguments.length;
var i__19350__auto___21209 = (0);
while(true){
if((i__19350__auto___21209 < len__19349__auto___21208)){
args21205.push((arguments[i__19350__auto___21209]));

var G__21210 = (i__19350__auto___21209 + (1));
i__19350__auto___21209 = G__21210;
continue;
} else {
}
break;
}

var G__21207 = args21205.length;
switch (G__21207) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21205.length)].join('')));

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
var args21212 = [];
var len__19349__auto___21215 = arguments.length;
var i__19350__auto___21216 = (0);
while(true){
if((i__19350__auto___21216 < len__19349__auto___21215)){
args21212.push((arguments[i__19350__auto___21216]));

var G__21217 = (i__19350__auto___21216 + (1));
i__19350__auto___21216 = G__21217;
continue;
} else {
}
break;
}

var G__21214 = args21212.length;
switch (G__21214) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21212.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21219 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21219);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21219,ret){
return (function (){
return fn1.call(null,val_21219);
});})(val_21219,ret))
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
var args21220 = [];
var len__19349__auto___21223 = arguments.length;
var i__19350__auto___21224 = (0);
while(true){
if((i__19350__auto___21224 < len__19349__auto___21223)){
args21220.push((arguments[i__19350__auto___21224]));

var G__21225 = (i__19350__auto___21224 + (1));
i__19350__auto___21224 = G__21225;
continue;
} else {
}
break;
}

var G__21222 = args21220.length;
switch (G__21222) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21220.length)].join('')));

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
var n__19194__auto___21227 = n;
var x_21228 = (0);
while(true){
if((x_21228 < n__19194__auto___21227)){
(a[x_21228] = (0));

var G__21229 = (x_21228 + (1));
x_21228 = G__21229;
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

var G__21230 = (i + (1));
i = G__21230;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21234 = (function (alt_flag,flag,meta21235){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21235 = meta21235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21236,meta21235__$1){
var self__ = this;
var _21236__$1 = this;
return (new cljs.core.async.t_cljs$core$async21234(self__.alt_flag,self__.flag,meta21235__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21236){
var self__ = this;
var _21236__$1 = this;
return self__.meta21235;
});})(flag))
;

cljs.core.async.t_cljs$core$async21234.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21234.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21234.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21234.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21234.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21235","meta21235",-100744067,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21234";

cljs.core.async.t_cljs$core$async21234.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async21234");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21234 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21234(alt_flag__$1,flag__$1,meta21235){
return (new cljs.core.async.t_cljs$core$async21234(alt_flag__$1,flag__$1,meta21235));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21234(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21240 = (function (alt_handler,flag,cb,meta21241){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21241 = meta21241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21242,meta21241__$1){
var self__ = this;
var _21242__$1 = this;
return (new cljs.core.async.t_cljs$core$async21240(self__.alt_handler,self__.flag,self__.cb,meta21241__$1));
});

cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21242){
var self__ = this;
var _21242__$1 = this;
return self__.meta21241;
});

cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21241","meta21241",1420654872,null)], null);
});

cljs.core.async.t_cljs$core$async21240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21240";

cljs.core.async.t_cljs$core$async21240.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async21240");
});

cljs.core.async.__GT_t_cljs$core$async21240 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21240(alt_handler__$1,flag__$1,cb__$1,meta21241){
return (new cljs.core.async.t_cljs$core$async21240(alt_handler__$1,flag__$1,cb__$1,meta21241));
});

}

return (new cljs.core.async.t_cljs$core$async21240(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21243_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21243_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21244_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21244_SHARP_,port], null));
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
var G__21245 = (i + (1));
i = G__21245;
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
var len__19349__auto___21251 = arguments.length;
var i__19350__auto___21252 = (0);
while(true){
if((i__19350__auto___21252 < len__19349__auto___21251)){
args__19356__auto__.push((arguments[i__19350__auto___21252]));

var G__21253 = (i__19350__auto___21252 + (1));
i__19350__auto___21252 = G__21253;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((1) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21248){
var map__21249 = p__21248;
var map__21249__$1 = ((((!((map__21249 == null)))?((((map__21249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21249):map__21249);
var opts = map__21249__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21246){
var G__21247 = cljs.core.first.call(null,seq21246);
var seq21246__$1 = cljs.core.next.call(null,seq21246);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21247,seq21246__$1);
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
var args21254 = [];
var len__19349__auto___21304 = arguments.length;
var i__19350__auto___21305 = (0);
while(true){
if((i__19350__auto___21305 < len__19349__auto___21304)){
args21254.push((arguments[i__19350__auto___21305]));

var G__21306 = (i__19350__auto___21305 + (1));
i__19350__auto___21305 = G__21306;
continue;
} else {
}
break;
}

var G__21256 = args21254.length;
switch (G__21256) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21254.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20410__auto___21308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___21308){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___21308){
return (function (state_21280){
var state_val_21281 = (state_21280[(1)]);
if((state_val_21281 === (7))){
var inst_21276 = (state_21280[(2)]);
var state_21280__$1 = state_21280;
var statearr_21282_21309 = state_21280__$1;
(statearr_21282_21309[(2)] = inst_21276);

(statearr_21282_21309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21281 === (1))){
var state_21280__$1 = state_21280;
var statearr_21283_21310 = state_21280__$1;
(statearr_21283_21310[(2)] = null);

(statearr_21283_21310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21281 === (4))){
var inst_21259 = (state_21280[(7)]);
var inst_21259__$1 = (state_21280[(2)]);
var inst_21260 = (inst_21259__$1 == null);
var state_21280__$1 = (function (){var statearr_21284 = state_21280;
(statearr_21284[(7)] = inst_21259__$1);

return statearr_21284;
})();
if(cljs.core.truth_(inst_21260)){
var statearr_21285_21311 = state_21280__$1;
(statearr_21285_21311[(1)] = (5));

} else {
var statearr_21286_21312 = state_21280__$1;
(statearr_21286_21312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21281 === (13))){
var state_21280__$1 = state_21280;
var statearr_21287_21313 = state_21280__$1;
(statearr_21287_21313[(2)] = null);

(statearr_21287_21313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21281 === (6))){
var inst_21259 = (state_21280[(7)]);
var state_21280__$1 = state_21280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21280__$1,(11),to,inst_21259);
} else {
if((state_val_21281 === (3))){
var inst_21278 = (state_21280[(2)]);
var state_21280__$1 = state_21280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21280__$1,inst_21278);
} else {
if((state_val_21281 === (12))){
var state_21280__$1 = state_21280;
var statearr_21288_21314 = state_21280__$1;
(statearr_21288_21314[(2)] = null);

(statearr_21288_21314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21281 === (2))){
var state_21280__$1 = state_21280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21280__$1,(4),from);
} else {
if((state_val_21281 === (11))){
var inst_21269 = (state_21280[(2)]);
var state_21280__$1 = state_21280;
if(cljs.core.truth_(inst_21269)){
var statearr_21289_21315 = state_21280__$1;
(statearr_21289_21315[(1)] = (12));

} else {
var statearr_21290_21316 = state_21280__$1;
(statearr_21290_21316[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21281 === (9))){
var state_21280__$1 = state_21280;
var statearr_21291_21317 = state_21280__$1;
(statearr_21291_21317[(2)] = null);

(statearr_21291_21317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21281 === (5))){
var state_21280__$1 = state_21280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21292_21318 = state_21280__$1;
(statearr_21292_21318[(1)] = (8));

} else {
var statearr_21293_21319 = state_21280__$1;
(statearr_21293_21319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21281 === (14))){
var inst_21274 = (state_21280[(2)]);
var state_21280__$1 = state_21280;
var statearr_21294_21320 = state_21280__$1;
(statearr_21294_21320[(2)] = inst_21274);

(statearr_21294_21320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21281 === (10))){
var inst_21266 = (state_21280[(2)]);
var state_21280__$1 = state_21280;
var statearr_21295_21321 = state_21280__$1;
(statearr_21295_21321[(2)] = inst_21266);

(statearr_21295_21321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21281 === (8))){
var inst_21263 = cljs.core.async.close_BANG_.call(null,to);
var state_21280__$1 = state_21280;
var statearr_21296_21322 = state_21280__$1;
(statearr_21296_21322[(2)] = inst_21263);

(statearr_21296_21322[(1)] = (10));


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
});})(c__20410__auto___21308))
;
return ((function (switch__20389__auto__,c__20410__auto___21308){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_21300 = [null,null,null,null,null,null,null,null];
(statearr_21300[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_21300[(1)] = (1));

return statearr_21300;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_21280){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_21280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e21301){if((e21301 instanceof Object)){
var ex__20393__auto__ = e21301;
var statearr_21302_21323 = state_21280;
(statearr_21302_21323[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21324 = state_21280;
state_21280 = G__21324;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_21280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_21280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___21308))
})();
var state__20412__auto__ = (function (){var statearr_21303 = f__20411__auto__.call(null);
(statearr_21303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___21308);

return statearr_21303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___21308))
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
return (function (p__21508){
var vec__21509 = p__21508;
var v = cljs.core.nth.call(null,vec__21509,(0),null);
var p = cljs.core.nth.call(null,vec__21509,(1),null);
var job = vec__21509;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20410__auto___21691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___21691,res,vec__21509,v,p,job,jobs,results){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___21691,res,vec__21509,v,p,job,jobs,results){
return (function (state_21514){
var state_val_21515 = (state_21514[(1)]);
if((state_val_21515 === (1))){
var state_21514__$1 = state_21514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21514__$1,(2),res,v);
} else {
if((state_val_21515 === (2))){
var inst_21511 = (state_21514[(2)]);
var inst_21512 = cljs.core.async.close_BANG_.call(null,res);
var state_21514__$1 = (function (){var statearr_21516 = state_21514;
(statearr_21516[(7)] = inst_21511);

return statearr_21516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21514__$1,inst_21512);
} else {
return null;
}
}
});})(c__20410__auto___21691,res,vec__21509,v,p,job,jobs,results))
;
return ((function (switch__20389__auto__,c__20410__auto___21691,res,vec__21509,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0 = (function (){
var statearr_21520 = [null,null,null,null,null,null,null,null];
(statearr_21520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__);

(statearr_21520[(1)] = (1));

return statearr_21520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1 = (function (state_21514){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_21514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e21521){if((e21521 instanceof Object)){
var ex__20393__auto__ = e21521;
var statearr_21522_21692 = state_21514;
(statearr_21522_21692[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21693 = state_21514;
state_21514 = G__21693;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = function(state_21514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1.call(this,state_21514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___21691,res,vec__21509,v,p,job,jobs,results))
})();
var state__20412__auto__ = (function (){var statearr_21523 = f__20411__auto__.call(null);
(statearr_21523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___21691);

return statearr_21523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___21691,res,vec__21509,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21524){
var vec__21525 = p__21524;
var v = cljs.core.nth.call(null,vec__21525,(0),null);
var p = cljs.core.nth.call(null,vec__21525,(1),null);
var job = vec__21525;
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
var n__19194__auto___21694 = n;
var __21695 = (0);
while(true){
if((__21695 < n__19194__auto___21694)){
var G__21526_21696 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21526_21696) {
case "compute":
var c__20410__auto___21698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21695,c__20410__auto___21698,G__21526_21696,n__19194__auto___21694,jobs,results,process,async){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (__21695,c__20410__auto___21698,G__21526_21696,n__19194__auto___21694,jobs,results,process,async){
return (function (state_21539){
var state_val_21540 = (state_21539[(1)]);
if((state_val_21540 === (1))){
var state_21539__$1 = state_21539;
var statearr_21541_21699 = state_21539__$1;
(statearr_21541_21699[(2)] = null);

(statearr_21541_21699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (2))){
var state_21539__$1 = state_21539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21539__$1,(4),jobs);
} else {
if((state_val_21540 === (3))){
var inst_21537 = (state_21539[(2)]);
var state_21539__$1 = state_21539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21539__$1,inst_21537);
} else {
if((state_val_21540 === (4))){
var inst_21529 = (state_21539[(2)]);
var inst_21530 = process.call(null,inst_21529);
var state_21539__$1 = state_21539;
if(cljs.core.truth_(inst_21530)){
var statearr_21542_21700 = state_21539__$1;
(statearr_21542_21700[(1)] = (5));

} else {
var statearr_21543_21701 = state_21539__$1;
(statearr_21543_21701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (5))){
var state_21539__$1 = state_21539;
var statearr_21544_21702 = state_21539__$1;
(statearr_21544_21702[(2)] = null);

(statearr_21544_21702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (6))){
var state_21539__$1 = state_21539;
var statearr_21545_21703 = state_21539__$1;
(statearr_21545_21703[(2)] = null);

(statearr_21545_21703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (7))){
var inst_21535 = (state_21539[(2)]);
var state_21539__$1 = state_21539;
var statearr_21546_21704 = state_21539__$1;
(statearr_21546_21704[(2)] = inst_21535);

(statearr_21546_21704[(1)] = (3));


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
});})(__21695,c__20410__auto___21698,G__21526_21696,n__19194__auto___21694,jobs,results,process,async))
;
return ((function (__21695,switch__20389__auto__,c__20410__auto___21698,G__21526_21696,n__19194__auto___21694,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0 = (function (){
var statearr_21550 = [null,null,null,null,null,null,null];
(statearr_21550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__);

(statearr_21550[(1)] = (1));

return statearr_21550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1 = (function (state_21539){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_21539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e21551){if((e21551 instanceof Object)){
var ex__20393__auto__ = e21551;
var statearr_21552_21705 = state_21539;
(statearr_21552_21705[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21706 = state_21539;
state_21539 = G__21706;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = function(state_21539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1.call(this,state_21539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__;
})()
;})(__21695,switch__20389__auto__,c__20410__auto___21698,G__21526_21696,n__19194__auto___21694,jobs,results,process,async))
})();
var state__20412__auto__ = (function (){var statearr_21553 = f__20411__auto__.call(null);
(statearr_21553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___21698);

return statearr_21553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(__21695,c__20410__auto___21698,G__21526_21696,n__19194__auto___21694,jobs,results,process,async))
);


break;
case "async":
var c__20410__auto___21707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21695,c__20410__auto___21707,G__21526_21696,n__19194__auto___21694,jobs,results,process,async){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (__21695,c__20410__auto___21707,G__21526_21696,n__19194__auto___21694,jobs,results,process,async){
return (function (state_21566){
var state_val_21567 = (state_21566[(1)]);
if((state_val_21567 === (1))){
var state_21566__$1 = state_21566;
var statearr_21568_21708 = state_21566__$1;
(statearr_21568_21708[(2)] = null);

(statearr_21568_21708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21567 === (2))){
var state_21566__$1 = state_21566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21566__$1,(4),jobs);
} else {
if((state_val_21567 === (3))){
var inst_21564 = (state_21566[(2)]);
var state_21566__$1 = state_21566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21566__$1,inst_21564);
} else {
if((state_val_21567 === (4))){
var inst_21556 = (state_21566[(2)]);
var inst_21557 = async.call(null,inst_21556);
var state_21566__$1 = state_21566;
if(cljs.core.truth_(inst_21557)){
var statearr_21569_21709 = state_21566__$1;
(statearr_21569_21709[(1)] = (5));

} else {
var statearr_21570_21710 = state_21566__$1;
(statearr_21570_21710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21567 === (5))){
var state_21566__$1 = state_21566;
var statearr_21571_21711 = state_21566__$1;
(statearr_21571_21711[(2)] = null);

(statearr_21571_21711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21567 === (6))){
var state_21566__$1 = state_21566;
var statearr_21572_21712 = state_21566__$1;
(statearr_21572_21712[(2)] = null);

(statearr_21572_21712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21567 === (7))){
var inst_21562 = (state_21566[(2)]);
var state_21566__$1 = state_21566;
var statearr_21573_21713 = state_21566__$1;
(statearr_21573_21713[(2)] = inst_21562);

(statearr_21573_21713[(1)] = (3));


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
});})(__21695,c__20410__auto___21707,G__21526_21696,n__19194__auto___21694,jobs,results,process,async))
;
return ((function (__21695,switch__20389__auto__,c__20410__auto___21707,G__21526_21696,n__19194__auto___21694,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0 = (function (){
var statearr_21577 = [null,null,null,null,null,null,null];
(statearr_21577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__);

(statearr_21577[(1)] = (1));

return statearr_21577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1 = (function (state_21566){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_21566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e21578){if((e21578 instanceof Object)){
var ex__20393__auto__ = e21578;
var statearr_21579_21714 = state_21566;
(statearr_21579_21714[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21715 = state_21566;
state_21566 = G__21715;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = function(state_21566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1.call(this,state_21566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__;
})()
;})(__21695,switch__20389__auto__,c__20410__auto___21707,G__21526_21696,n__19194__auto___21694,jobs,results,process,async))
})();
var state__20412__auto__ = (function (){var statearr_21580 = f__20411__auto__.call(null);
(statearr_21580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___21707);

return statearr_21580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(__21695,c__20410__auto___21707,G__21526_21696,n__19194__auto___21694,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21716 = (__21695 + (1));
__21695 = G__21716;
continue;
} else {
}
break;
}

var c__20410__auto___21717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___21717,jobs,results,process,async){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___21717,jobs,results,process,async){
return (function (state_21602){
var state_val_21603 = (state_21602[(1)]);
if((state_val_21603 === (1))){
var state_21602__$1 = state_21602;
var statearr_21604_21718 = state_21602__$1;
(statearr_21604_21718[(2)] = null);

(statearr_21604_21718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (2))){
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21602__$1,(4),from);
} else {
if((state_val_21603 === (3))){
var inst_21600 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21602__$1,inst_21600);
} else {
if((state_val_21603 === (4))){
var inst_21583 = (state_21602[(7)]);
var inst_21583__$1 = (state_21602[(2)]);
var inst_21584 = (inst_21583__$1 == null);
var state_21602__$1 = (function (){var statearr_21605 = state_21602;
(statearr_21605[(7)] = inst_21583__$1);

return statearr_21605;
})();
if(cljs.core.truth_(inst_21584)){
var statearr_21606_21719 = state_21602__$1;
(statearr_21606_21719[(1)] = (5));

} else {
var statearr_21607_21720 = state_21602__$1;
(statearr_21607_21720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (5))){
var inst_21586 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21602__$1 = state_21602;
var statearr_21608_21721 = state_21602__$1;
(statearr_21608_21721[(2)] = inst_21586);

(statearr_21608_21721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (6))){
var inst_21583 = (state_21602[(7)]);
var inst_21588 = (state_21602[(8)]);
var inst_21588__$1 = cljs.core.async.chan.call(null,(1));
var inst_21589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21590 = [inst_21583,inst_21588__$1];
var inst_21591 = (new cljs.core.PersistentVector(null,2,(5),inst_21589,inst_21590,null));
var state_21602__$1 = (function (){var statearr_21609 = state_21602;
(statearr_21609[(8)] = inst_21588__$1);

return statearr_21609;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21602__$1,(8),jobs,inst_21591);
} else {
if((state_val_21603 === (7))){
var inst_21598 = (state_21602[(2)]);
var state_21602__$1 = state_21602;
var statearr_21610_21722 = state_21602__$1;
(statearr_21610_21722[(2)] = inst_21598);

(statearr_21610_21722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21603 === (8))){
var inst_21588 = (state_21602[(8)]);
var inst_21593 = (state_21602[(2)]);
var state_21602__$1 = (function (){var statearr_21611 = state_21602;
(statearr_21611[(9)] = inst_21593);

return statearr_21611;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21602__$1,(9),results,inst_21588);
} else {
if((state_val_21603 === (9))){
var inst_21595 = (state_21602[(2)]);
var state_21602__$1 = (function (){var statearr_21612 = state_21602;
(statearr_21612[(10)] = inst_21595);

return statearr_21612;
})();
var statearr_21613_21723 = state_21602__$1;
(statearr_21613_21723[(2)] = null);

(statearr_21613_21723[(1)] = (2));


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
});})(c__20410__auto___21717,jobs,results,process,async))
;
return ((function (switch__20389__auto__,c__20410__auto___21717,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0 = (function (){
var statearr_21617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__);

(statearr_21617[(1)] = (1));

return statearr_21617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1 = (function (state_21602){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_21602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e21618){if((e21618 instanceof Object)){
var ex__20393__auto__ = e21618;
var statearr_21619_21724 = state_21602;
(statearr_21619_21724[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21725 = state_21602;
state_21602 = G__21725;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = function(state_21602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1.call(this,state_21602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___21717,jobs,results,process,async))
})();
var state__20412__auto__ = (function (){var statearr_21620 = f__20411__auto__.call(null);
(statearr_21620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___21717);

return statearr_21620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___21717,jobs,results,process,async))
);


var c__20410__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto__,jobs,results,process,async){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto__,jobs,results,process,async){
return (function (state_21658){
var state_val_21659 = (state_21658[(1)]);
if((state_val_21659 === (7))){
var inst_21654 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21660_21726 = state_21658__$1;
(statearr_21660_21726[(2)] = inst_21654);

(statearr_21660_21726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (20))){
var state_21658__$1 = state_21658;
var statearr_21661_21727 = state_21658__$1;
(statearr_21661_21727[(2)] = null);

(statearr_21661_21727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (1))){
var state_21658__$1 = state_21658;
var statearr_21662_21728 = state_21658__$1;
(statearr_21662_21728[(2)] = null);

(statearr_21662_21728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (4))){
var inst_21623 = (state_21658[(7)]);
var inst_21623__$1 = (state_21658[(2)]);
var inst_21624 = (inst_21623__$1 == null);
var state_21658__$1 = (function (){var statearr_21663 = state_21658;
(statearr_21663[(7)] = inst_21623__$1);

return statearr_21663;
})();
if(cljs.core.truth_(inst_21624)){
var statearr_21664_21729 = state_21658__$1;
(statearr_21664_21729[(1)] = (5));

} else {
var statearr_21665_21730 = state_21658__$1;
(statearr_21665_21730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (15))){
var inst_21636 = (state_21658[(8)]);
var state_21658__$1 = state_21658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21658__$1,(18),to,inst_21636);
} else {
if((state_val_21659 === (21))){
var inst_21649 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21666_21731 = state_21658__$1;
(statearr_21666_21731[(2)] = inst_21649);

(statearr_21666_21731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (13))){
var inst_21651 = (state_21658[(2)]);
var state_21658__$1 = (function (){var statearr_21667 = state_21658;
(statearr_21667[(9)] = inst_21651);

return statearr_21667;
})();
var statearr_21668_21732 = state_21658__$1;
(statearr_21668_21732[(2)] = null);

(statearr_21668_21732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (6))){
var inst_21623 = (state_21658[(7)]);
var state_21658__$1 = state_21658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21658__$1,(11),inst_21623);
} else {
if((state_val_21659 === (17))){
var inst_21644 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
if(cljs.core.truth_(inst_21644)){
var statearr_21669_21733 = state_21658__$1;
(statearr_21669_21733[(1)] = (19));

} else {
var statearr_21670_21734 = state_21658__$1;
(statearr_21670_21734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (3))){
var inst_21656 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21658__$1,inst_21656);
} else {
if((state_val_21659 === (12))){
var inst_21633 = (state_21658[(10)]);
var state_21658__$1 = state_21658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21658__$1,(14),inst_21633);
} else {
if((state_val_21659 === (2))){
var state_21658__$1 = state_21658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21658__$1,(4),results);
} else {
if((state_val_21659 === (19))){
var state_21658__$1 = state_21658;
var statearr_21671_21735 = state_21658__$1;
(statearr_21671_21735[(2)] = null);

(statearr_21671_21735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (11))){
var inst_21633 = (state_21658[(2)]);
var state_21658__$1 = (function (){var statearr_21672 = state_21658;
(statearr_21672[(10)] = inst_21633);

return statearr_21672;
})();
var statearr_21673_21736 = state_21658__$1;
(statearr_21673_21736[(2)] = null);

(statearr_21673_21736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (9))){
var state_21658__$1 = state_21658;
var statearr_21674_21737 = state_21658__$1;
(statearr_21674_21737[(2)] = null);

(statearr_21674_21737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (5))){
var state_21658__$1 = state_21658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21675_21738 = state_21658__$1;
(statearr_21675_21738[(1)] = (8));

} else {
var statearr_21676_21739 = state_21658__$1;
(statearr_21676_21739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (14))){
var inst_21636 = (state_21658[(8)]);
var inst_21638 = (state_21658[(11)]);
var inst_21636__$1 = (state_21658[(2)]);
var inst_21637 = (inst_21636__$1 == null);
var inst_21638__$1 = cljs.core.not.call(null,inst_21637);
var state_21658__$1 = (function (){var statearr_21677 = state_21658;
(statearr_21677[(8)] = inst_21636__$1);

(statearr_21677[(11)] = inst_21638__$1);

return statearr_21677;
})();
if(inst_21638__$1){
var statearr_21678_21740 = state_21658__$1;
(statearr_21678_21740[(1)] = (15));

} else {
var statearr_21679_21741 = state_21658__$1;
(statearr_21679_21741[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (16))){
var inst_21638 = (state_21658[(11)]);
var state_21658__$1 = state_21658;
var statearr_21680_21742 = state_21658__$1;
(statearr_21680_21742[(2)] = inst_21638);

(statearr_21680_21742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (10))){
var inst_21630 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21681_21743 = state_21658__$1;
(statearr_21681_21743[(2)] = inst_21630);

(statearr_21681_21743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (18))){
var inst_21641 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21682_21744 = state_21658__$1;
(statearr_21682_21744[(2)] = inst_21641);

(statearr_21682_21744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (8))){
var inst_21627 = cljs.core.async.close_BANG_.call(null,to);
var state_21658__$1 = state_21658;
var statearr_21683_21745 = state_21658__$1;
(statearr_21683_21745[(2)] = inst_21627);

(statearr_21683_21745[(1)] = (10));


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
var statearr_21687 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__);

(statearr_21687[(1)] = (1));

return statearr_21687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1 = (function (state_21658){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_21658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e21688){if((e21688 instanceof Object)){
var ex__20393__auto__ = e21688;
var statearr_21689_21746 = state_21658;
(statearr_21689_21746[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21747 = state_21658;
state_21658 = G__21747;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__ = function(state_21658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1.call(this,state_21658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__,jobs,results,process,async))
})();
var state__20412__auto__ = (function (){var statearr_21690 = f__20411__auto__.call(null);
(statearr_21690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_21690;
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
var args21748 = [];
var len__19349__auto___21751 = arguments.length;
var i__19350__auto___21752 = (0);
while(true){
if((i__19350__auto___21752 < len__19349__auto___21751)){
args21748.push((arguments[i__19350__auto___21752]));

var G__21753 = (i__19350__auto___21752 + (1));
i__19350__auto___21752 = G__21753;
continue;
} else {
}
break;
}

var G__21750 = args21748.length;
switch (G__21750) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21748.length)].join('')));

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
var args21755 = [];
var len__19349__auto___21758 = arguments.length;
var i__19350__auto___21759 = (0);
while(true){
if((i__19350__auto___21759 < len__19349__auto___21758)){
args21755.push((arguments[i__19350__auto___21759]));

var G__21760 = (i__19350__auto___21759 + (1));
i__19350__auto___21759 = G__21760;
continue;
} else {
}
break;
}

var G__21757 = args21755.length;
switch (G__21757) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21755.length)].join('')));

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
var args21762 = [];
var len__19349__auto___21815 = arguments.length;
var i__19350__auto___21816 = (0);
while(true){
if((i__19350__auto___21816 < len__19349__auto___21815)){
args21762.push((arguments[i__19350__auto___21816]));

var G__21817 = (i__19350__auto___21816 + (1));
i__19350__auto___21816 = G__21817;
continue;
} else {
}
break;
}

var G__21764 = args21762.length;
switch (G__21764) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21762.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20410__auto___21819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___21819,tc,fc){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___21819,tc,fc){
return (function (state_21790){
var state_val_21791 = (state_21790[(1)]);
if((state_val_21791 === (7))){
var inst_21786 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
var statearr_21792_21820 = state_21790__$1;
(statearr_21792_21820[(2)] = inst_21786);

(statearr_21792_21820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (1))){
var state_21790__$1 = state_21790;
var statearr_21793_21821 = state_21790__$1;
(statearr_21793_21821[(2)] = null);

(statearr_21793_21821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (4))){
var inst_21767 = (state_21790[(7)]);
var inst_21767__$1 = (state_21790[(2)]);
var inst_21768 = (inst_21767__$1 == null);
var state_21790__$1 = (function (){var statearr_21794 = state_21790;
(statearr_21794[(7)] = inst_21767__$1);

return statearr_21794;
})();
if(cljs.core.truth_(inst_21768)){
var statearr_21795_21822 = state_21790__$1;
(statearr_21795_21822[(1)] = (5));

} else {
var statearr_21796_21823 = state_21790__$1;
(statearr_21796_21823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (13))){
var state_21790__$1 = state_21790;
var statearr_21797_21824 = state_21790__$1;
(statearr_21797_21824[(2)] = null);

(statearr_21797_21824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (6))){
var inst_21767 = (state_21790[(7)]);
var inst_21773 = p.call(null,inst_21767);
var state_21790__$1 = state_21790;
if(cljs.core.truth_(inst_21773)){
var statearr_21798_21825 = state_21790__$1;
(statearr_21798_21825[(1)] = (9));

} else {
var statearr_21799_21826 = state_21790__$1;
(statearr_21799_21826[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (3))){
var inst_21788 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21790__$1,inst_21788);
} else {
if((state_val_21791 === (12))){
var state_21790__$1 = state_21790;
var statearr_21800_21827 = state_21790__$1;
(statearr_21800_21827[(2)] = null);

(statearr_21800_21827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (2))){
var state_21790__$1 = state_21790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21790__$1,(4),ch);
} else {
if((state_val_21791 === (11))){
var inst_21767 = (state_21790[(7)]);
var inst_21777 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21790__$1,(8),inst_21777,inst_21767);
} else {
if((state_val_21791 === (9))){
var state_21790__$1 = state_21790;
var statearr_21801_21828 = state_21790__$1;
(statearr_21801_21828[(2)] = tc);

(statearr_21801_21828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (5))){
var inst_21770 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21771 = cljs.core.async.close_BANG_.call(null,fc);
var state_21790__$1 = (function (){var statearr_21802 = state_21790;
(statearr_21802[(8)] = inst_21770);

return statearr_21802;
})();
var statearr_21803_21829 = state_21790__$1;
(statearr_21803_21829[(2)] = inst_21771);

(statearr_21803_21829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (14))){
var inst_21784 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
var statearr_21804_21830 = state_21790__$1;
(statearr_21804_21830[(2)] = inst_21784);

(statearr_21804_21830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (10))){
var state_21790__$1 = state_21790;
var statearr_21805_21831 = state_21790__$1;
(statearr_21805_21831[(2)] = fc);

(statearr_21805_21831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21791 === (8))){
var inst_21779 = (state_21790[(2)]);
var state_21790__$1 = state_21790;
if(cljs.core.truth_(inst_21779)){
var statearr_21806_21832 = state_21790__$1;
(statearr_21806_21832[(1)] = (12));

} else {
var statearr_21807_21833 = state_21790__$1;
(statearr_21807_21833[(1)] = (13));

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
});})(c__20410__auto___21819,tc,fc))
;
return ((function (switch__20389__auto__,c__20410__auto___21819,tc,fc){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_21811 = [null,null,null,null,null,null,null,null,null];
(statearr_21811[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_21811[(1)] = (1));

return statearr_21811;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_21790){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_21790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e21812){if((e21812 instanceof Object)){
var ex__20393__auto__ = e21812;
var statearr_21813_21834 = state_21790;
(statearr_21813_21834[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21835 = state_21790;
state_21790 = G__21835;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_21790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_21790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___21819,tc,fc))
})();
var state__20412__auto__ = (function (){var statearr_21814 = f__20411__auto__.call(null);
(statearr_21814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___21819);

return statearr_21814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___21819,tc,fc))
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
return (function (state_21899){
var state_val_21900 = (state_21899[(1)]);
if((state_val_21900 === (7))){
var inst_21895 = (state_21899[(2)]);
var state_21899__$1 = state_21899;
var statearr_21901_21922 = state_21899__$1;
(statearr_21901_21922[(2)] = inst_21895);

(statearr_21901_21922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21900 === (1))){
var inst_21879 = init;
var state_21899__$1 = (function (){var statearr_21902 = state_21899;
(statearr_21902[(7)] = inst_21879);

return statearr_21902;
})();
var statearr_21903_21923 = state_21899__$1;
(statearr_21903_21923[(2)] = null);

(statearr_21903_21923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21900 === (4))){
var inst_21882 = (state_21899[(8)]);
var inst_21882__$1 = (state_21899[(2)]);
var inst_21883 = (inst_21882__$1 == null);
var state_21899__$1 = (function (){var statearr_21904 = state_21899;
(statearr_21904[(8)] = inst_21882__$1);

return statearr_21904;
})();
if(cljs.core.truth_(inst_21883)){
var statearr_21905_21924 = state_21899__$1;
(statearr_21905_21924[(1)] = (5));

} else {
var statearr_21906_21925 = state_21899__$1;
(statearr_21906_21925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21900 === (6))){
var inst_21886 = (state_21899[(9)]);
var inst_21879 = (state_21899[(7)]);
var inst_21882 = (state_21899[(8)]);
var inst_21886__$1 = f.call(null,inst_21879,inst_21882);
var inst_21887 = cljs.core.reduced_QMARK_.call(null,inst_21886__$1);
var state_21899__$1 = (function (){var statearr_21907 = state_21899;
(statearr_21907[(9)] = inst_21886__$1);

return statearr_21907;
})();
if(inst_21887){
var statearr_21908_21926 = state_21899__$1;
(statearr_21908_21926[(1)] = (8));

} else {
var statearr_21909_21927 = state_21899__$1;
(statearr_21909_21927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21900 === (3))){
var inst_21897 = (state_21899[(2)]);
var state_21899__$1 = state_21899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21899__$1,inst_21897);
} else {
if((state_val_21900 === (2))){
var state_21899__$1 = state_21899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21899__$1,(4),ch);
} else {
if((state_val_21900 === (9))){
var inst_21886 = (state_21899[(9)]);
var inst_21879 = inst_21886;
var state_21899__$1 = (function (){var statearr_21910 = state_21899;
(statearr_21910[(7)] = inst_21879);

return statearr_21910;
})();
var statearr_21911_21928 = state_21899__$1;
(statearr_21911_21928[(2)] = null);

(statearr_21911_21928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21900 === (5))){
var inst_21879 = (state_21899[(7)]);
var state_21899__$1 = state_21899;
var statearr_21912_21929 = state_21899__$1;
(statearr_21912_21929[(2)] = inst_21879);

(statearr_21912_21929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21900 === (10))){
var inst_21893 = (state_21899[(2)]);
var state_21899__$1 = state_21899;
var statearr_21913_21930 = state_21899__$1;
(statearr_21913_21930[(2)] = inst_21893);

(statearr_21913_21930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21900 === (8))){
var inst_21886 = (state_21899[(9)]);
var inst_21889 = cljs.core.deref.call(null,inst_21886);
var state_21899__$1 = state_21899;
var statearr_21914_21931 = state_21899__$1;
(statearr_21914_21931[(2)] = inst_21889);

(statearr_21914_21931[(1)] = (10));


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
var statearr_21918 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21918[(0)] = cljs$core$async$reduce_$_state_machine__20390__auto__);

(statearr_21918[(1)] = (1));

return statearr_21918;
});
var cljs$core$async$reduce_$_state_machine__20390__auto____1 = (function (state_21899){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_21899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e21919){if((e21919 instanceof Object)){
var ex__20393__auto__ = e21919;
var statearr_21920_21932 = state_21899;
(statearr_21920_21932[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21933 = state_21899;
state_21899 = G__21933;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20390__auto__ = function(state_21899){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20390__auto____1.call(this,state_21899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20390__auto____0;
cljs$core$async$reduce_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20390__auto____1;
return cljs$core$async$reduce_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_21921 = f__20411__auto__.call(null);
(statearr_21921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_21921;
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
var args21934 = [];
var len__19349__auto___21986 = arguments.length;
var i__19350__auto___21987 = (0);
while(true){
if((i__19350__auto___21987 < len__19349__auto___21986)){
args21934.push((arguments[i__19350__auto___21987]));

var G__21988 = (i__19350__auto___21987 + (1));
i__19350__auto___21987 = G__21988;
continue;
} else {
}
break;
}

var G__21936 = args21934.length;
switch (G__21936) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21934.length)].join('')));

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
return (function (state_21961){
var state_val_21962 = (state_21961[(1)]);
if((state_val_21962 === (7))){
var inst_21943 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21963_21990 = state_21961__$1;
(statearr_21963_21990[(2)] = inst_21943);

(statearr_21963_21990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (1))){
var inst_21937 = cljs.core.seq.call(null,coll);
var inst_21938 = inst_21937;
var state_21961__$1 = (function (){var statearr_21964 = state_21961;
(statearr_21964[(7)] = inst_21938);

return statearr_21964;
})();
var statearr_21965_21991 = state_21961__$1;
(statearr_21965_21991[(2)] = null);

(statearr_21965_21991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (4))){
var inst_21938 = (state_21961[(7)]);
var inst_21941 = cljs.core.first.call(null,inst_21938);
var state_21961__$1 = state_21961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21961__$1,(7),ch,inst_21941);
} else {
if((state_val_21962 === (13))){
var inst_21955 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21966_21992 = state_21961__$1;
(statearr_21966_21992[(2)] = inst_21955);

(statearr_21966_21992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (6))){
var inst_21946 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
if(cljs.core.truth_(inst_21946)){
var statearr_21967_21993 = state_21961__$1;
(statearr_21967_21993[(1)] = (8));

} else {
var statearr_21968_21994 = state_21961__$1;
(statearr_21968_21994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (3))){
var inst_21959 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21961__$1,inst_21959);
} else {
if((state_val_21962 === (12))){
var state_21961__$1 = state_21961;
var statearr_21969_21995 = state_21961__$1;
(statearr_21969_21995[(2)] = null);

(statearr_21969_21995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (2))){
var inst_21938 = (state_21961[(7)]);
var state_21961__$1 = state_21961;
if(cljs.core.truth_(inst_21938)){
var statearr_21970_21996 = state_21961__$1;
(statearr_21970_21996[(1)] = (4));

} else {
var statearr_21971_21997 = state_21961__$1;
(statearr_21971_21997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (11))){
var inst_21952 = cljs.core.async.close_BANG_.call(null,ch);
var state_21961__$1 = state_21961;
var statearr_21972_21998 = state_21961__$1;
(statearr_21972_21998[(2)] = inst_21952);

(statearr_21972_21998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (9))){
var state_21961__$1 = state_21961;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21973_21999 = state_21961__$1;
(statearr_21973_21999[(1)] = (11));

} else {
var statearr_21974_22000 = state_21961__$1;
(statearr_21974_22000[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (5))){
var inst_21938 = (state_21961[(7)]);
var state_21961__$1 = state_21961;
var statearr_21975_22001 = state_21961__$1;
(statearr_21975_22001[(2)] = inst_21938);

(statearr_21975_22001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (10))){
var inst_21957 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21976_22002 = state_21961__$1;
(statearr_21976_22002[(2)] = inst_21957);

(statearr_21976_22002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (8))){
var inst_21938 = (state_21961[(7)]);
var inst_21948 = cljs.core.next.call(null,inst_21938);
var inst_21938__$1 = inst_21948;
var state_21961__$1 = (function (){var statearr_21977 = state_21961;
(statearr_21977[(7)] = inst_21938__$1);

return statearr_21977;
})();
var statearr_21978_22003 = state_21961__$1;
(statearr_21978_22003[(2)] = null);

(statearr_21978_22003[(1)] = (2));


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
var statearr_21982 = [null,null,null,null,null,null,null,null];
(statearr_21982[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_21982[(1)] = (1));

return statearr_21982;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_21961){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_21961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e21983){if((e21983 instanceof Object)){
var ex__20393__auto__ = e21983;
var statearr_21984_22004 = state_21961;
(statearr_21984_22004[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22005 = state_21961;
state_21961 = G__22005;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_21961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_21961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_21985 = f__20411__auto__.call(null);
(statearr_21985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_21985;
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
if(typeof cljs.core.async.t_cljs$core$async22227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22227 = (function (mult,ch,cs,meta22228){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22228 = meta22228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22229,meta22228__$1){
var self__ = this;
var _22229__$1 = this;
return (new cljs.core.async.t_cljs$core$async22227(self__.mult,self__.ch,self__.cs,meta22228__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22229){
var self__ = this;
var _22229__$1 = this;
return self__.meta22228;
});})(cs))
;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22227.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22228","meta22228",482949462,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22227";

cljs.core.async.t_cljs$core$async22227.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async22227");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22227 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22227(mult__$1,ch__$1,cs__$1,meta22228){
return (new cljs.core.async.t_cljs$core$async22227(mult__$1,ch__$1,cs__$1,meta22228));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22227(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20410__auto___22448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___22448,cs,m,dchan,dctr,done){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___22448,cs,m,dchan,dctr,done){
return (function (state_22360){
var state_val_22361 = (state_22360[(1)]);
if((state_val_22361 === (7))){
var inst_22356 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22362_22449 = state_22360__$1;
(statearr_22362_22449[(2)] = inst_22356);

(statearr_22362_22449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (20))){
var inst_22261 = (state_22360[(7)]);
var inst_22271 = cljs.core.first.call(null,inst_22261);
var inst_22272 = cljs.core.nth.call(null,inst_22271,(0),null);
var inst_22273 = cljs.core.nth.call(null,inst_22271,(1),null);
var state_22360__$1 = (function (){var statearr_22363 = state_22360;
(statearr_22363[(8)] = inst_22272);

return statearr_22363;
})();
if(cljs.core.truth_(inst_22273)){
var statearr_22364_22450 = state_22360__$1;
(statearr_22364_22450[(1)] = (22));

} else {
var statearr_22365_22451 = state_22360__$1;
(statearr_22365_22451[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (27))){
var inst_22303 = (state_22360[(9)]);
var inst_22232 = (state_22360[(10)]);
var inst_22308 = (state_22360[(11)]);
var inst_22301 = (state_22360[(12)]);
var inst_22308__$1 = cljs.core._nth.call(null,inst_22301,inst_22303);
var inst_22309 = cljs.core.async.put_BANG_.call(null,inst_22308__$1,inst_22232,done);
var state_22360__$1 = (function (){var statearr_22366 = state_22360;
(statearr_22366[(11)] = inst_22308__$1);

return statearr_22366;
})();
if(cljs.core.truth_(inst_22309)){
var statearr_22367_22452 = state_22360__$1;
(statearr_22367_22452[(1)] = (30));

} else {
var statearr_22368_22453 = state_22360__$1;
(statearr_22368_22453[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (1))){
var state_22360__$1 = state_22360;
var statearr_22369_22454 = state_22360__$1;
(statearr_22369_22454[(2)] = null);

(statearr_22369_22454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (24))){
var inst_22261 = (state_22360[(7)]);
var inst_22278 = (state_22360[(2)]);
var inst_22279 = cljs.core.next.call(null,inst_22261);
var inst_22241 = inst_22279;
var inst_22242 = null;
var inst_22243 = (0);
var inst_22244 = (0);
var state_22360__$1 = (function (){var statearr_22370 = state_22360;
(statearr_22370[(13)] = inst_22244);

(statearr_22370[(14)] = inst_22278);

(statearr_22370[(15)] = inst_22243);

(statearr_22370[(16)] = inst_22241);

(statearr_22370[(17)] = inst_22242);

return statearr_22370;
})();
var statearr_22371_22455 = state_22360__$1;
(statearr_22371_22455[(2)] = null);

(statearr_22371_22455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (39))){
var state_22360__$1 = state_22360;
var statearr_22375_22456 = state_22360__$1;
(statearr_22375_22456[(2)] = null);

(statearr_22375_22456[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (4))){
var inst_22232 = (state_22360[(10)]);
var inst_22232__$1 = (state_22360[(2)]);
var inst_22233 = (inst_22232__$1 == null);
var state_22360__$1 = (function (){var statearr_22376 = state_22360;
(statearr_22376[(10)] = inst_22232__$1);

return statearr_22376;
})();
if(cljs.core.truth_(inst_22233)){
var statearr_22377_22457 = state_22360__$1;
(statearr_22377_22457[(1)] = (5));

} else {
var statearr_22378_22458 = state_22360__$1;
(statearr_22378_22458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (15))){
var inst_22244 = (state_22360[(13)]);
var inst_22243 = (state_22360[(15)]);
var inst_22241 = (state_22360[(16)]);
var inst_22242 = (state_22360[(17)]);
var inst_22257 = (state_22360[(2)]);
var inst_22258 = (inst_22244 + (1));
var tmp22372 = inst_22243;
var tmp22373 = inst_22241;
var tmp22374 = inst_22242;
var inst_22241__$1 = tmp22373;
var inst_22242__$1 = tmp22374;
var inst_22243__$1 = tmp22372;
var inst_22244__$1 = inst_22258;
var state_22360__$1 = (function (){var statearr_22379 = state_22360;
(statearr_22379[(13)] = inst_22244__$1);

(statearr_22379[(15)] = inst_22243__$1);

(statearr_22379[(18)] = inst_22257);

(statearr_22379[(16)] = inst_22241__$1);

(statearr_22379[(17)] = inst_22242__$1);

return statearr_22379;
})();
var statearr_22380_22459 = state_22360__$1;
(statearr_22380_22459[(2)] = null);

(statearr_22380_22459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (21))){
var inst_22282 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22384_22460 = state_22360__$1;
(statearr_22384_22460[(2)] = inst_22282);

(statearr_22384_22460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (31))){
var inst_22308 = (state_22360[(11)]);
var inst_22312 = done.call(null,null);
var inst_22313 = cljs.core.async.untap_STAR_.call(null,m,inst_22308);
var state_22360__$1 = (function (){var statearr_22385 = state_22360;
(statearr_22385[(19)] = inst_22312);

return statearr_22385;
})();
var statearr_22386_22461 = state_22360__$1;
(statearr_22386_22461[(2)] = inst_22313);

(statearr_22386_22461[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (32))){
var inst_22302 = (state_22360[(20)]);
var inst_22303 = (state_22360[(9)]);
var inst_22300 = (state_22360[(21)]);
var inst_22301 = (state_22360[(12)]);
var inst_22315 = (state_22360[(2)]);
var inst_22316 = (inst_22303 + (1));
var tmp22381 = inst_22302;
var tmp22382 = inst_22300;
var tmp22383 = inst_22301;
var inst_22300__$1 = tmp22382;
var inst_22301__$1 = tmp22383;
var inst_22302__$1 = tmp22381;
var inst_22303__$1 = inst_22316;
var state_22360__$1 = (function (){var statearr_22387 = state_22360;
(statearr_22387[(20)] = inst_22302__$1);

(statearr_22387[(9)] = inst_22303__$1);

(statearr_22387[(21)] = inst_22300__$1);

(statearr_22387[(12)] = inst_22301__$1);

(statearr_22387[(22)] = inst_22315);

return statearr_22387;
})();
var statearr_22388_22462 = state_22360__$1;
(statearr_22388_22462[(2)] = null);

(statearr_22388_22462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (40))){
var inst_22328 = (state_22360[(23)]);
var inst_22332 = done.call(null,null);
var inst_22333 = cljs.core.async.untap_STAR_.call(null,m,inst_22328);
var state_22360__$1 = (function (){var statearr_22389 = state_22360;
(statearr_22389[(24)] = inst_22332);

return statearr_22389;
})();
var statearr_22390_22463 = state_22360__$1;
(statearr_22390_22463[(2)] = inst_22333);

(statearr_22390_22463[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (33))){
var inst_22319 = (state_22360[(25)]);
var inst_22321 = cljs.core.chunked_seq_QMARK_.call(null,inst_22319);
var state_22360__$1 = state_22360;
if(inst_22321){
var statearr_22391_22464 = state_22360__$1;
(statearr_22391_22464[(1)] = (36));

} else {
var statearr_22392_22465 = state_22360__$1;
(statearr_22392_22465[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (13))){
var inst_22251 = (state_22360[(26)]);
var inst_22254 = cljs.core.async.close_BANG_.call(null,inst_22251);
var state_22360__$1 = state_22360;
var statearr_22393_22466 = state_22360__$1;
(statearr_22393_22466[(2)] = inst_22254);

(statearr_22393_22466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (22))){
var inst_22272 = (state_22360[(8)]);
var inst_22275 = cljs.core.async.close_BANG_.call(null,inst_22272);
var state_22360__$1 = state_22360;
var statearr_22394_22467 = state_22360__$1;
(statearr_22394_22467[(2)] = inst_22275);

(statearr_22394_22467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (36))){
var inst_22319 = (state_22360[(25)]);
var inst_22323 = cljs.core.chunk_first.call(null,inst_22319);
var inst_22324 = cljs.core.chunk_rest.call(null,inst_22319);
var inst_22325 = cljs.core.count.call(null,inst_22323);
var inst_22300 = inst_22324;
var inst_22301 = inst_22323;
var inst_22302 = inst_22325;
var inst_22303 = (0);
var state_22360__$1 = (function (){var statearr_22395 = state_22360;
(statearr_22395[(20)] = inst_22302);

(statearr_22395[(9)] = inst_22303);

(statearr_22395[(21)] = inst_22300);

(statearr_22395[(12)] = inst_22301);

return statearr_22395;
})();
var statearr_22396_22468 = state_22360__$1;
(statearr_22396_22468[(2)] = null);

(statearr_22396_22468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (41))){
var inst_22319 = (state_22360[(25)]);
var inst_22335 = (state_22360[(2)]);
var inst_22336 = cljs.core.next.call(null,inst_22319);
var inst_22300 = inst_22336;
var inst_22301 = null;
var inst_22302 = (0);
var inst_22303 = (0);
var state_22360__$1 = (function (){var statearr_22397 = state_22360;
(statearr_22397[(20)] = inst_22302);

(statearr_22397[(9)] = inst_22303);

(statearr_22397[(27)] = inst_22335);

(statearr_22397[(21)] = inst_22300);

(statearr_22397[(12)] = inst_22301);

return statearr_22397;
})();
var statearr_22398_22469 = state_22360__$1;
(statearr_22398_22469[(2)] = null);

(statearr_22398_22469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (43))){
var state_22360__$1 = state_22360;
var statearr_22399_22470 = state_22360__$1;
(statearr_22399_22470[(2)] = null);

(statearr_22399_22470[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (29))){
var inst_22344 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22400_22471 = state_22360__$1;
(statearr_22400_22471[(2)] = inst_22344);

(statearr_22400_22471[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (44))){
var inst_22353 = (state_22360[(2)]);
var state_22360__$1 = (function (){var statearr_22401 = state_22360;
(statearr_22401[(28)] = inst_22353);

return statearr_22401;
})();
var statearr_22402_22472 = state_22360__$1;
(statearr_22402_22472[(2)] = null);

(statearr_22402_22472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (6))){
var inst_22292 = (state_22360[(29)]);
var inst_22291 = cljs.core.deref.call(null,cs);
var inst_22292__$1 = cljs.core.keys.call(null,inst_22291);
var inst_22293 = cljs.core.count.call(null,inst_22292__$1);
var inst_22294 = cljs.core.reset_BANG_.call(null,dctr,inst_22293);
var inst_22299 = cljs.core.seq.call(null,inst_22292__$1);
var inst_22300 = inst_22299;
var inst_22301 = null;
var inst_22302 = (0);
var inst_22303 = (0);
var state_22360__$1 = (function (){var statearr_22403 = state_22360;
(statearr_22403[(20)] = inst_22302);

(statearr_22403[(9)] = inst_22303);

(statearr_22403[(21)] = inst_22300);

(statearr_22403[(12)] = inst_22301);

(statearr_22403[(30)] = inst_22294);

(statearr_22403[(29)] = inst_22292__$1);

return statearr_22403;
})();
var statearr_22404_22473 = state_22360__$1;
(statearr_22404_22473[(2)] = null);

(statearr_22404_22473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (28))){
var inst_22319 = (state_22360[(25)]);
var inst_22300 = (state_22360[(21)]);
var inst_22319__$1 = cljs.core.seq.call(null,inst_22300);
var state_22360__$1 = (function (){var statearr_22405 = state_22360;
(statearr_22405[(25)] = inst_22319__$1);

return statearr_22405;
})();
if(inst_22319__$1){
var statearr_22406_22474 = state_22360__$1;
(statearr_22406_22474[(1)] = (33));

} else {
var statearr_22407_22475 = state_22360__$1;
(statearr_22407_22475[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (25))){
var inst_22302 = (state_22360[(20)]);
var inst_22303 = (state_22360[(9)]);
var inst_22305 = (inst_22303 < inst_22302);
var inst_22306 = inst_22305;
var state_22360__$1 = state_22360;
if(cljs.core.truth_(inst_22306)){
var statearr_22408_22476 = state_22360__$1;
(statearr_22408_22476[(1)] = (27));

} else {
var statearr_22409_22477 = state_22360__$1;
(statearr_22409_22477[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (34))){
var state_22360__$1 = state_22360;
var statearr_22410_22478 = state_22360__$1;
(statearr_22410_22478[(2)] = null);

(statearr_22410_22478[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (17))){
var state_22360__$1 = state_22360;
var statearr_22411_22479 = state_22360__$1;
(statearr_22411_22479[(2)] = null);

(statearr_22411_22479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (3))){
var inst_22358 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22360__$1,inst_22358);
} else {
if((state_val_22361 === (12))){
var inst_22287 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22412_22480 = state_22360__$1;
(statearr_22412_22480[(2)] = inst_22287);

(statearr_22412_22480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (2))){
var state_22360__$1 = state_22360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22360__$1,(4),ch);
} else {
if((state_val_22361 === (23))){
var state_22360__$1 = state_22360;
var statearr_22413_22481 = state_22360__$1;
(statearr_22413_22481[(2)] = null);

(statearr_22413_22481[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (35))){
var inst_22342 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22414_22482 = state_22360__$1;
(statearr_22414_22482[(2)] = inst_22342);

(statearr_22414_22482[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (19))){
var inst_22261 = (state_22360[(7)]);
var inst_22265 = cljs.core.chunk_first.call(null,inst_22261);
var inst_22266 = cljs.core.chunk_rest.call(null,inst_22261);
var inst_22267 = cljs.core.count.call(null,inst_22265);
var inst_22241 = inst_22266;
var inst_22242 = inst_22265;
var inst_22243 = inst_22267;
var inst_22244 = (0);
var state_22360__$1 = (function (){var statearr_22415 = state_22360;
(statearr_22415[(13)] = inst_22244);

(statearr_22415[(15)] = inst_22243);

(statearr_22415[(16)] = inst_22241);

(statearr_22415[(17)] = inst_22242);

return statearr_22415;
})();
var statearr_22416_22483 = state_22360__$1;
(statearr_22416_22483[(2)] = null);

(statearr_22416_22483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (11))){
var inst_22261 = (state_22360[(7)]);
var inst_22241 = (state_22360[(16)]);
var inst_22261__$1 = cljs.core.seq.call(null,inst_22241);
var state_22360__$1 = (function (){var statearr_22417 = state_22360;
(statearr_22417[(7)] = inst_22261__$1);

return statearr_22417;
})();
if(inst_22261__$1){
var statearr_22418_22484 = state_22360__$1;
(statearr_22418_22484[(1)] = (16));

} else {
var statearr_22419_22485 = state_22360__$1;
(statearr_22419_22485[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (9))){
var inst_22289 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22420_22486 = state_22360__$1;
(statearr_22420_22486[(2)] = inst_22289);

(statearr_22420_22486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (5))){
var inst_22239 = cljs.core.deref.call(null,cs);
var inst_22240 = cljs.core.seq.call(null,inst_22239);
var inst_22241 = inst_22240;
var inst_22242 = null;
var inst_22243 = (0);
var inst_22244 = (0);
var state_22360__$1 = (function (){var statearr_22421 = state_22360;
(statearr_22421[(13)] = inst_22244);

(statearr_22421[(15)] = inst_22243);

(statearr_22421[(16)] = inst_22241);

(statearr_22421[(17)] = inst_22242);

return statearr_22421;
})();
var statearr_22422_22487 = state_22360__$1;
(statearr_22422_22487[(2)] = null);

(statearr_22422_22487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (14))){
var state_22360__$1 = state_22360;
var statearr_22423_22488 = state_22360__$1;
(statearr_22423_22488[(2)] = null);

(statearr_22423_22488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (45))){
var inst_22350 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22424_22489 = state_22360__$1;
(statearr_22424_22489[(2)] = inst_22350);

(statearr_22424_22489[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (26))){
var inst_22292 = (state_22360[(29)]);
var inst_22346 = (state_22360[(2)]);
var inst_22347 = cljs.core.seq.call(null,inst_22292);
var state_22360__$1 = (function (){var statearr_22425 = state_22360;
(statearr_22425[(31)] = inst_22346);

return statearr_22425;
})();
if(inst_22347){
var statearr_22426_22490 = state_22360__$1;
(statearr_22426_22490[(1)] = (42));

} else {
var statearr_22427_22491 = state_22360__$1;
(statearr_22427_22491[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (16))){
var inst_22261 = (state_22360[(7)]);
var inst_22263 = cljs.core.chunked_seq_QMARK_.call(null,inst_22261);
var state_22360__$1 = state_22360;
if(inst_22263){
var statearr_22428_22492 = state_22360__$1;
(statearr_22428_22492[(1)] = (19));

} else {
var statearr_22429_22493 = state_22360__$1;
(statearr_22429_22493[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (38))){
var inst_22339 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22430_22494 = state_22360__$1;
(statearr_22430_22494[(2)] = inst_22339);

(statearr_22430_22494[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (30))){
var state_22360__$1 = state_22360;
var statearr_22431_22495 = state_22360__$1;
(statearr_22431_22495[(2)] = null);

(statearr_22431_22495[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (10))){
var inst_22244 = (state_22360[(13)]);
var inst_22242 = (state_22360[(17)]);
var inst_22250 = cljs.core._nth.call(null,inst_22242,inst_22244);
var inst_22251 = cljs.core.nth.call(null,inst_22250,(0),null);
var inst_22252 = cljs.core.nth.call(null,inst_22250,(1),null);
var state_22360__$1 = (function (){var statearr_22432 = state_22360;
(statearr_22432[(26)] = inst_22251);

return statearr_22432;
})();
if(cljs.core.truth_(inst_22252)){
var statearr_22433_22496 = state_22360__$1;
(statearr_22433_22496[(1)] = (13));

} else {
var statearr_22434_22497 = state_22360__$1;
(statearr_22434_22497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (18))){
var inst_22285 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22435_22498 = state_22360__$1;
(statearr_22435_22498[(2)] = inst_22285);

(statearr_22435_22498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (42))){
var state_22360__$1 = state_22360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22360__$1,(45),dchan);
} else {
if((state_val_22361 === (37))){
var inst_22232 = (state_22360[(10)]);
var inst_22319 = (state_22360[(25)]);
var inst_22328 = (state_22360[(23)]);
var inst_22328__$1 = cljs.core.first.call(null,inst_22319);
var inst_22329 = cljs.core.async.put_BANG_.call(null,inst_22328__$1,inst_22232,done);
var state_22360__$1 = (function (){var statearr_22436 = state_22360;
(statearr_22436[(23)] = inst_22328__$1);

return statearr_22436;
})();
if(cljs.core.truth_(inst_22329)){
var statearr_22437_22499 = state_22360__$1;
(statearr_22437_22499[(1)] = (39));

} else {
var statearr_22438_22500 = state_22360__$1;
(statearr_22438_22500[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (8))){
var inst_22244 = (state_22360[(13)]);
var inst_22243 = (state_22360[(15)]);
var inst_22246 = (inst_22244 < inst_22243);
var inst_22247 = inst_22246;
var state_22360__$1 = state_22360;
if(cljs.core.truth_(inst_22247)){
var statearr_22439_22501 = state_22360__$1;
(statearr_22439_22501[(1)] = (10));

} else {
var statearr_22440_22502 = state_22360__$1;
(statearr_22440_22502[(1)] = (11));

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
});})(c__20410__auto___22448,cs,m,dchan,dctr,done))
;
return ((function (switch__20389__auto__,c__20410__auto___22448,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20390__auto__ = null;
var cljs$core$async$mult_$_state_machine__20390__auto____0 = (function (){
var statearr_22444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22444[(0)] = cljs$core$async$mult_$_state_machine__20390__auto__);

(statearr_22444[(1)] = (1));

return statearr_22444;
});
var cljs$core$async$mult_$_state_machine__20390__auto____1 = (function (state_22360){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_22360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e22445){if((e22445 instanceof Object)){
var ex__20393__auto__ = e22445;
var statearr_22446_22503 = state_22360;
(statearr_22446_22503[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22504 = state_22360;
state_22360 = G__22504;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20390__auto__ = function(state_22360){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20390__auto____1.call(this,state_22360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20390__auto____0;
cljs$core$async$mult_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20390__auto____1;
return cljs$core$async$mult_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___22448,cs,m,dchan,dctr,done))
})();
var state__20412__auto__ = (function (){var statearr_22447 = f__20411__auto__.call(null);
(statearr_22447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___22448);

return statearr_22447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___22448,cs,m,dchan,dctr,done))
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
var args22505 = [];
var len__19349__auto___22508 = arguments.length;
var i__19350__auto___22509 = (0);
while(true){
if((i__19350__auto___22509 < len__19349__auto___22508)){
args22505.push((arguments[i__19350__auto___22509]));

var G__22510 = (i__19350__auto___22509 + (1));
i__19350__auto___22509 = G__22510;
continue;
} else {
}
break;
}

var G__22507 = args22505.length;
switch (G__22507) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22505.length)].join('')));

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
var len__19349__auto___22522 = arguments.length;
var i__19350__auto___22523 = (0);
while(true){
if((i__19350__auto___22523 < len__19349__auto___22522)){
args__19356__auto__.push((arguments[i__19350__auto___22523]));

var G__22524 = (i__19350__auto___22523 + (1));
i__19350__auto___22523 = G__22524;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((3) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22516){
var map__22517 = p__22516;
var map__22517__$1 = ((((!((map__22517 == null)))?((((map__22517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22517):map__22517);
var opts = map__22517__$1;
var statearr_22519_22525 = state;
(statearr_22519_22525[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22517,map__22517__$1,opts){
return (function (val){
var statearr_22520_22526 = state;
(statearr_22520_22526[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22517,map__22517__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22521_22527 = state;
(statearr_22521_22527[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22512){
var G__22513 = cljs.core.first.call(null,seq22512);
var seq22512__$1 = cljs.core.next.call(null,seq22512);
var G__22514 = cljs.core.first.call(null,seq22512__$1);
var seq22512__$2 = cljs.core.next.call(null,seq22512__$1);
var G__22515 = cljs.core.first.call(null,seq22512__$2);
var seq22512__$3 = cljs.core.next.call(null,seq22512__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22513,G__22514,G__22515,seq22512__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22691 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22691 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22692){
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
this.meta22692 = meta22692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22693,meta22692__$1){
var self__ = this;
var _22693__$1 = this;
return (new cljs.core.async.t_cljs$core$async22691(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22692__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22693){
var self__ = this;
var _22693__$1 = this;
return self__.meta22692;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22691.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22691.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22691.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22691.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22691.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22691.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22691.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22691.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22691.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22692","meta22692",1040492066,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22691";

cljs.core.async.t_cljs$core$async22691.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async22691");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22691 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22691(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22692){
return (new cljs.core.async.t_cljs$core$async22691(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22692));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22691(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20410__auto___22854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___22854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___22854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22791){
var state_val_22792 = (state_22791[(1)]);
if((state_val_22792 === (7))){
var inst_22709 = (state_22791[(2)]);
var state_22791__$1 = state_22791;
var statearr_22793_22855 = state_22791__$1;
(statearr_22793_22855[(2)] = inst_22709);

(statearr_22793_22855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (20))){
var inst_22721 = (state_22791[(7)]);
var state_22791__$1 = state_22791;
var statearr_22794_22856 = state_22791__$1;
(statearr_22794_22856[(2)] = inst_22721);

(statearr_22794_22856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (27))){
var state_22791__$1 = state_22791;
var statearr_22795_22857 = state_22791__$1;
(statearr_22795_22857[(2)] = null);

(statearr_22795_22857[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (1))){
var inst_22697 = (state_22791[(8)]);
var inst_22697__$1 = calc_state.call(null);
var inst_22699 = (inst_22697__$1 == null);
var inst_22700 = cljs.core.not.call(null,inst_22699);
var state_22791__$1 = (function (){var statearr_22796 = state_22791;
(statearr_22796[(8)] = inst_22697__$1);

return statearr_22796;
})();
if(inst_22700){
var statearr_22797_22858 = state_22791__$1;
(statearr_22797_22858[(1)] = (2));

} else {
var statearr_22798_22859 = state_22791__$1;
(statearr_22798_22859[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (24))){
var inst_22744 = (state_22791[(9)]);
var inst_22751 = (state_22791[(10)]);
var inst_22765 = (state_22791[(11)]);
var inst_22765__$1 = inst_22744.call(null,inst_22751);
var state_22791__$1 = (function (){var statearr_22799 = state_22791;
(statearr_22799[(11)] = inst_22765__$1);

return statearr_22799;
})();
if(cljs.core.truth_(inst_22765__$1)){
var statearr_22800_22860 = state_22791__$1;
(statearr_22800_22860[(1)] = (29));

} else {
var statearr_22801_22861 = state_22791__$1;
(statearr_22801_22861[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (4))){
var inst_22712 = (state_22791[(2)]);
var state_22791__$1 = state_22791;
if(cljs.core.truth_(inst_22712)){
var statearr_22802_22862 = state_22791__$1;
(statearr_22802_22862[(1)] = (8));

} else {
var statearr_22803_22863 = state_22791__$1;
(statearr_22803_22863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (15))){
var inst_22738 = (state_22791[(2)]);
var state_22791__$1 = state_22791;
if(cljs.core.truth_(inst_22738)){
var statearr_22804_22864 = state_22791__$1;
(statearr_22804_22864[(1)] = (19));

} else {
var statearr_22805_22865 = state_22791__$1;
(statearr_22805_22865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (21))){
var inst_22743 = (state_22791[(12)]);
var inst_22743__$1 = (state_22791[(2)]);
var inst_22744 = cljs.core.get.call(null,inst_22743__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22745 = cljs.core.get.call(null,inst_22743__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22746 = cljs.core.get.call(null,inst_22743__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22791__$1 = (function (){var statearr_22806 = state_22791;
(statearr_22806[(9)] = inst_22744);

(statearr_22806[(13)] = inst_22745);

(statearr_22806[(12)] = inst_22743__$1);

return statearr_22806;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22791__$1,(22),inst_22746);
} else {
if((state_val_22792 === (31))){
var inst_22773 = (state_22791[(2)]);
var state_22791__$1 = state_22791;
if(cljs.core.truth_(inst_22773)){
var statearr_22807_22866 = state_22791__$1;
(statearr_22807_22866[(1)] = (32));

} else {
var statearr_22808_22867 = state_22791__$1;
(statearr_22808_22867[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (32))){
var inst_22750 = (state_22791[(14)]);
var state_22791__$1 = state_22791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22791__$1,(35),out,inst_22750);
} else {
if((state_val_22792 === (33))){
var inst_22743 = (state_22791[(12)]);
var inst_22721 = inst_22743;
var state_22791__$1 = (function (){var statearr_22809 = state_22791;
(statearr_22809[(7)] = inst_22721);

return statearr_22809;
})();
var statearr_22810_22868 = state_22791__$1;
(statearr_22810_22868[(2)] = null);

(statearr_22810_22868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (13))){
var inst_22721 = (state_22791[(7)]);
var inst_22728 = inst_22721.cljs$lang$protocol_mask$partition0$;
var inst_22729 = (inst_22728 & (64));
var inst_22730 = inst_22721.cljs$core$ISeq$;
var inst_22731 = (inst_22729) || (inst_22730);
var state_22791__$1 = state_22791;
if(cljs.core.truth_(inst_22731)){
var statearr_22811_22869 = state_22791__$1;
(statearr_22811_22869[(1)] = (16));

} else {
var statearr_22812_22870 = state_22791__$1;
(statearr_22812_22870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (22))){
var inst_22750 = (state_22791[(14)]);
var inst_22751 = (state_22791[(10)]);
var inst_22749 = (state_22791[(2)]);
var inst_22750__$1 = cljs.core.nth.call(null,inst_22749,(0),null);
var inst_22751__$1 = cljs.core.nth.call(null,inst_22749,(1),null);
var inst_22752 = (inst_22750__$1 == null);
var inst_22753 = cljs.core._EQ_.call(null,inst_22751__$1,change);
var inst_22754 = (inst_22752) || (inst_22753);
var state_22791__$1 = (function (){var statearr_22813 = state_22791;
(statearr_22813[(14)] = inst_22750__$1);

(statearr_22813[(10)] = inst_22751__$1);

return statearr_22813;
})();
if(cljs.core.truth_(inst_22754)){
var statearr_22814_22871 = state_22791__$1;
(statearr_22814_22871[(1)] = (23));

} else {
var statearr_22815_22872 = state_22791__$1;
(statearr_22815_22872[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (36))){
var inst_22743 = (state_22791[(12)]);
var inst_22721 = inst_22743;
var state_22791__$1 = (function (){var statearr_22816 = state_22791;
(statearr_22816[(7)] = inst_22721);

return statearr_22816;
})();
var statearr_22817_22873 = state_22791__$1;
(statearr_22817_22873[(2)] = null);

(statearr_22817_22873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (29))){
var inst_22765 = (state_22791[(11)]);
var state_22791__$1 = state_22791;
var statearr_22818_22874 = state_22791__$1;
(statearr_22818_22874[(2)] = inst_22765);

(statearr_22818_22874[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (6))){
var state_22791__$1 = state_22791;
var statearr_22819_22875 = state_22791__$1;
(statearr_22819_22875[(2)] = false);

(statearr_22819_22875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (28))){
var inst_22761 = (state_22791[(2)]);
var inst_22762 = calc_state.call(null);
var inst_22721 = inst_22762;
var state_22791__$1 = (function (){var statearr_22820 = state_22791;
(statearr_22820[(15)] = inst_22761);

(statearr_22820[(7)] = inst_22721);

return statearr_22820;
})();
var statearr_22821_22876 = state_22791__$1;
(statearr_22821_22876[(2)] = null);

(statearr_22821_22876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (25))){
var inst_22787 = (state_22791[(2)]);
var state_22791__$1 = state_22791;
var statearr_22822_22877 = state_22791__$1;
(statearr_22822_22877[(2)] = inst_22787);

(statearr_22822_22877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (34))){
var inst_22785 = (state_22791[(2)]);
var state_22791__$1 = state_22791;
var statearr_22823_22878 = state_22791__$1;
(statearr_22823_22878[(2)] = inst_22785);

(statearr_22823_22878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (17))){
var state_22791__$1 = state_22791;
var statearr_22824_22879 = state_22791__$1;
(statearr_22824_22879[(2)] = false);

(statearr_22824_22879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (3))){
var state_22791__$1 = state_22791;
var statearr_22825_22880 = state_22791__$1;
(statearr_22825_22880[(2)] = false);

(statearr_22825_22880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (12))){
var inst_22789 = (state_22791[(2)]);
var state_22791__$1 = state_22791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22791__$1,inst_22789);
} else {
if((state_val_22792 === (2))){
var inst_22697 = (state_22791[(8)]);
var inst_22702 = inst_22697.cljs$lang$protocol_mask$partition0$;
var inst_22703 = (inst_22702 & (64));
var inst_22704 = inst_22697.cljs$core$ISeq$;
var inst_22705 = (inst_22703) || (inst_22704);
var state_22791__$1 = state_22791;
if(cljs.core.truth_(inst_22705)){
var statearr_22826_22881 = state_22791__$1;
(statearr_22826_22881[(1)] = (5));

} else {
var statearr_22827_22882 = state_22791__$1;
(statearr_22827_22882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (23))){
var inst_22750 = (state_22791[(14)]);
var inst_22756 = (inst_22750 == null);
var state_22791__$1 = state_22791;
if(cljs.core.truth_(inst_22756)){
var statearr_22828_22883 = state_22791__$1;
(statearr_22828_22883[(1)] = (26));

} else {
var statearr_22829_22884 = state_22791__$1;
(statearr_22829_22884[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (35))){
var inst_22776 = (state_22791[(2)]);
var state_22791__$1 = state_22791;
if(cljs.core.truth_(inst_22776)){
var statearr_22830_22885 = state_22791__$1;
(statearr_22830_22885[(1)] = (36));

} else {
var statearr_22831_22886 = state_22791__$1;
(statearr_22831_22886[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (19))){
var inst_22721 = (state_22791[(7)]);
var inst_22740 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22721);
var state_22791__$1 = state_22791;
var statearr_22832_22887 = state_22791__$1;
(statearr_22832_22887[(2)] = inst_22740);

(statearr_22832_22887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (11))){
var inst_22721 = (state_22791[(7)]);
var inst_22725 = (inst_22721 == null);
var inst_22726 = cljs.core.not.call(null,inst_22725);
var state_22791__$1 = state_22791;
if(inst_22726){
var statearr_22833_22888 = state_22791__$1;
(statearr_22833_22888[(1)] = (13));

} else {
var statearr_22834_22889 = state_22791__$1;
(statearr_22834_22889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (9))){
var inst_22697 = (state_22791[(8)]);
var state_22791__$1 = state_22791;
var statearr_22835_22890 = state_22791__$1;
(statearr_22835_22890[(2)] = inst_22697);

(statearr_22835_22890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (5))){
var state_22791__$1 = state_22791;
var statearr_22836_22891 = state_22791__$1;
(statearr_22836_22891[(2)] = true);

(statearr_22836_22891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (14))){
var state_22791__$1 = state_22791;
var statearr_22837_22892 = state_22791__$1;
(statearr_22837_22892[(2)] = false);

(statearr_22837_22892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (26))){
var inst_22751 = (state_22791[(10)]);
var inst_22758 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22751);
var state_22791__$1 = state_22791;
var statearr_22838_22893 = state_22791__$1;
(statearr_22838_22893[(2)] = inst_22758);

(statearr_22838_22893[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (16))){
var state_22791__$1 = state_22791;
var statearr_22839_22894 = state_22791__$1;
(statearr_22839_22894[(2)] = true);

(statearr_22839_22894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (38))){
var inst_22781 = (state_22791[(2)]);
var state_22791__$1 = state_22791;
var statearr_22840_22895 = state_22791__$1;
(statearr_22840_22895[(2)] = inst_22781);

(statearr_22840_22895[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (30))){
var inst_22744 = (state_22791[(9)]);
var inst_22745 = (state_22791[(13)]);
var inst_22751 = (state_22791[(10)]);
var inst_22768 = cljs.core.empty_QMARK_.call(null,inst_22744);
var inst_22769 = inst_22745.call(null,inst_22751);
var inst_22770 = cljs.core.not.call(null,inst_22769);
var inst_22771 = (inst_22768) && (inst_22770);
var state_22791__$1 = state_22791;
var statearr_22841_22896 = state_22791__$1;
(statearr_22841_22896[(2)] = inst_22771);

(statearr_22841_22896[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (10))){
var inst_22697 = (state_22791[(8)]);
var inst_22717 = (state_22791[(2)]);
var inst_22718 = cljs.core.get.call(null,inst_22717,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22719 = cljs.core.get.call(null,inst_22717,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22720 = cljs.core.get.call(null,inst_22717,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22721 = inst_22697;
var state_22791__$1 = (function (){var statearr_22842 = state_22791;
(statearr_22842[(16)] = inst_22718);

(statearr_22842[(17)] = inst_22720);

(statearr_22842[(7)] = inst_22721);

(statearr_22842[(18)] = inst_22719);

return statearr_22842;
})();
var statearr_22843_22897 = state_22791__$1;
(statearr_22843_22897[(2)] = null);

(statearr_22843_22897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (18))){
var inst_22735 = (state_22791[(2)]);
var state_22791__$1 = state_22791;
var statearr_22844_22898 = state_22791__$1;
(statearr_22844_22898[(2)] = inst_22735);

(statearr_22844_22898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (37))){
var state_22791__$1 = state_22791;
var statearr_22845_22899 = state_22791__$1;
(statearr_22845_22899[(2)] = null);

(statearr_22845_22899[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22792 === (8))){
var inst_22697 = (state_22791[(8)]);
var inst_22714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22697);
var state_22791__$1 = state_22791;
var statearr_22846_22900 = state_22791__$1;
(statearr_22846_22900[(2)] = inst_22714);

(statearr_22846_22900[(1)] = (10));


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
});})(c__20410__auto___22854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20389__auto__,c__20410__auto___22854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20390__auto__ = null;
var cljs$core$async$mix_$_state_machine__20390__auto____0 = (function (){
var statearr_22850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22850[(0)] = cljs$core$async$mix_$_state_machine__20390__auto__);

(statearr_22850[(1)] = (1));

return statearr_22850;
});
var cljs$core$async$mix_$_state_machine__20390__auto____1 = (function (state_22791){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_22791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e22851){if((e22851 instanceof Object)){
var ex__20393__auto__ = e22851;
var statearr_22852_22901 = state_22791;
(statearr_22852_22901[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22902 = state_22791;
state_22791 = G__22902;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20390__auto__ = function(state_22791){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20390__auto____1.call(this,state_22791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20390__auto____0;
cljs$core$async$mix_$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20390__auto____1;
return cljs$core$async$mix_$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___22854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20412__auto__ = (function (){var statearr_22853 = f__20411__auto__.call(null);
(statearr_22853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___22854);

return statearr_22853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___22854,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args22903 = [];
var len__19349__auto___22906 = arguments.length;
var i__19350__auto___22907 = (0);
while(true){
if((i__19350__auto___22907 < len__19349__auto___22906)){
args22903.push((arguments[i__19350__auto___22907]));

var G__22908 = (i__19350__auto___22907 + (1));
i__19350__auto___22907 = G__22908;
continue;
} else {
}
break;
}

var G__22905 = args22903.length;
switch (G__22905) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22903.length)].join('')));

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
var args22911 = [];
var len__19349__auto___23036 = arguments.length;
var i__19350__auto___23037 = (0);
while(true){
if((i__19350__auto___23037 < len__19349__auto___23036)){
args22911.push((arguments[i__19350__auto___23037]));

var G__23038 = (i__19350__auto___23037 + (1));
i__19350__auto___23037 = G__23038;
continue;
} else {
}
break;
}

var G__22913 = args22911.length;
switch (G__22913) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22911.length)].join('')));

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
return (function (p1__22910_SHARP_){
if(cljs.core.truth_(p1__22910_SHARP_.call(null,topic))){
return p1__22910_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22910_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18291__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22914 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22915){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22915 = meta22915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22916,meta22915__$1){
var self__ = this;
var _22916__$1 = this;
return (new cljs.core.async.t_cljs$core$async22914(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22915__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22916){
var self__ = this;
var _22916__$1 = this;
return self__.meta22915;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22914.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22914.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22914.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22914.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22914.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22915","meta22915",1318750003,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22914";

cljs.core.async.t_cljs$core$async22914.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async22914");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22914 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22914(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22915){
return (new cljs.core.async.t_cljs$core$async22914(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22915));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22914(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20410__auto___23040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___23040,mults,ensure_mult,p){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___23040,mults,ensure_mult,p){
return (function (state_22988){
var state_val_22989 = (state_22988[(1)]);
if((state_val_22989 === (7))){
var inst_22984 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_22990_23041 = state_22988__$1;
(statearr_22990_23041[(2)] = inst_22984);

(statearr_22990_23041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (20))){
var state_22988__$1 = state_22988;
var statearr_22991_23042 = state_22988__$1;
(statearr_22991_23042[(2)] = null);

(statearr_22991_23042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (1))){
var state_22988__$1 = state_22988;
var statearr_22992_23043 = state_22988__$1;
(statearr_22992_23043[(2)] = null);

(statearr_22992_23043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (24))){
var inst_22967 = (state_22988[(7)]);
var inst_22976 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22967);
var state_22988__$1 = state_22988;
var statearr_22993_23044 = state_22988__$1;
(statearr_22993_23044[(2)] = inst_22976);

(statearr_22993_23044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (4))){
var inst_22919 = (state_22988[(8)]);
var inst_22919__$1 = (state_22988[(2)]);
var inst_22920 = (inst_22919__$1 == null);
var state_22988__$1 = (function (){var statearr_22994 = state_22988;
(statearr_22994[(8)] = inst_22919__$1);

return statearr_22994;
})();
if(cljs.core.truth_(inst_22920)){
var statearr_22995_23045 = state_22988__$1;
(statearr_22995_23045[(1)] = (5));

} else {
var statearr_22996_23046 = state_22988__$1;
(statearr_22996_23046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (15))){
var inst_22961 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_22997_23047 = state_22988__$1;
(statearr_22997_23047[(2)] = inst_22961);

(statearr_22997_23047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (21))){
var inst_22981 = (state_22988[(2)]);
var state_22988__$1 = (function (){var statearr_22998 = state_22988;
(statearr_22998[(9)] = inst_22981);

return statearr_22998;
})();
var statearr_22999_23048 = state_22988__$1;
(statearr_22999_23048[(2)] = null);

(statearr_22999_23048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (13))){
var inst_22943 = (state_22988[(10)]);
var inst_22945 = cljs.core.chunked_seq_QMARK_.call(null,inst_22943);
var state_22988__$1 = state_22988;
if(inst_22945){
var statearr_23000_23049 = state_22988__$1;
(statearr_23000_23049[(1)] = (16));

} else {
var statearr_23001_23050 = state_22988__$1;
(statearr_23001_23050[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (22))){
var inst_22973 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
if(cljs.core.truth_(inst_22973)){
var statearr_23002_23051 = state_22988__$1;
(statearr_23002_23051[(1)] = (23));

} else {
var statearr_23003_23052 = state_22988__$1;
(statearr_23003_23052[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (6))){
var inst_22919 = (state_22988[(8)]);
var inst_22969 = (state_22988[(11)]);
var inst_22967 = (state_22988[(7)]);
var inst_22967__$1 = topic_fn.call(null,inst_22919);
var inst_22968 = cljs.core.deref.call(null,mults);
var inst_22969__$1 = cljs.core.get.call(null,inst_22968,inst_22967__$1);
var state_22988__$1 = (function (){var statearr_23004 = state_22988;
(statearr_23004[(11)] = inst_22969__$1);

(statearr_23004[(7)] = inst_22967__$1);

return statearr_23004;
})();
if(cljs.core.truth_(inst_22969__$1)){
var statearr_23005_23053 = state_22988__$1;
(statearr_23005_23053[(1)] = (19));

} else {
var statearr_23006_23054 = state_22988__$1;
(statearr_23006_23054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (25))){
var inst_22978 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_23007_23055 = state_22988__$1;
(statearr_23007_23055[(2)] = inst_22978);

(statearr_23007_23055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (17))){
var inst_22943 = (state_22988[(10)]);
var inst_22952 = cljs.core.first.call(null,inst_22943);
var inst_22953 = cljs.core.async.muxch_STAR_.call(null,inst_22952);
var inst_22954 = cljs.core.async.close_BANG_.call(null,inst_22953);
var inst_22955 = cljs.core.next.call(null,inst_22943);
var inst_22929 = inst_22955;
var inst_22930 = null;
var inst_22931 = (0);
var inst_22932 = (0);
var state_22988__$1 = (function (){var statearr_23008 = state_22988;
(statearr_23008[(12)] = inst_22929);

(statearr_23008[(13)] = inst_22931);

(statearr_23008[(14)] = inst_22930);

(statearr_23008[(15)] = inst_22954);

(statearr_23008[(16)] = inst_22932);

return statearr_23008;
})();
var statearr_23009_23056 = state_22988__$1;
(statearr_23009_23056[(2)] = null);

(statearr_23009_23056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (3))){
var inst_22986 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22988__$1,inst_22986);
} else {
if((state_val_22989 === (12))){
var inst_22963 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_23010_23057 = state_22988__$1;
(statearr_23010_23057[(2)] = inst_22963);

(statearr_23010_23057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (2))){
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22988__$1,(4),ch);
} else {
if((state_val_22989 === (23))){
var state_22988__$1 = state_22988;
var statearr_23011_23058 = state_22988__$1;
(statearr_23011_23058[(2)] = null);

(statearr_23011_23058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (19))){
var inst_22919 = (state_22988[(8)]);
var inst_22969 = (state_22988[(11)]);
var inst_22971 = cljs.core.async.muxch_STAR_.call(null,inst_22969);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22988__$1,(22),inst_22971,inst_22919);
} else {
if((state_val_22989 === (11))){
var inst_22929 = (state_22988[(12)]);
var inst_22943 = (state_22988[(10)]);
var inst_22943__$1 = cljs.core.seq.call(null,inst_22929);
var state_22988__$1 = (function (){var statearr_23012 = state_22988;
(statearr_23012[(10)] = inst_22943__$1);

return statearr_23012;
})();
if(inst_22943__$1){
var statearr_23013_23059 = state_22988__$1;
(statearr_23013_23059[(1)] = (13));

} else {
var statearr_23014_23060 = state_22988__$1;
(statearr_23014_23060[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (9))){
var inst_22965 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_23015_23061 = state_22988__$1;
(statearr_23015_23061[(2)] = inst_22965);

(statearr_23015_23061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (5))){
var inst_22926 = cljs.core.deref.call(null,mults);
var inst_22927 = cljs.core.vals.call(null,inst_22926);
var inst_22928 = cljs.core.seq.call(null,inst_22927);
var inst_22929 = inst_22928;
var inst_22930 = null;
var inst_22931 = (0);
var inst_22932 = (0);
var state_22988__$1 = (function (){var statearr_23016 = state_22988;
(statearr_23016[(12)] = inst_22929);

(statearr_23016[(13)] = inst_22931);

(statearr_23016[(14)] = inst_22930);

(statearr_23016[(16)] = inst_22932);

return statearr_23016;
})();
var statearr_23017_23062 = state_22988__$1;
(statearr_23017_23062[(2)] = null);

(statearr_23017_23062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (14))){
var state_22988__$1 = state_22988;
var statearr_23021_23063 = state_22988__$1;
(statearr_23021_23063[(2)] = null);

(statearr_23021_23063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (16))){
var inst_22943 = (state_22988[(10)]);
var inst_22947 = cljs.core.chunk_first.call(null,inst_22943);
var inst_22948 = cljs.core.chunk_rest.call(null,inst_22943);
var inst_22949 = cljs.core.count.call(null,inst_22947);
var inst_22929 = inst_22948;
var inst_22930 = inst_22947;
var inst_22931 = inst_22949;
var inst_22932 = (0);
var state_22988__$1 = (function (){var statearr_23022 = state_22988;
(statearr_23022[(12)] = inst_22929);

(statearr_23022[(13)] = inst_22931);

(statearr_23022[(14)] = inst_22930);

(statearr_23022[(16)] = inst_22932);

return statearr_23022;
})();
var statearr_23023_23064 = state_22988__$1;
(statearr_23023_23064[(2)] = null);

(statearr_23023_23064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (10))){
var inst_22929 = (state_22988[(12)]);
var inst_22931 = (state_22988[(13)]);
var inst_22930 = (state_22988[(14)]);
var inst_22932 = (state_22988[(16)]);
var inst_22937 = cljs.core._nth.call(null,inst_22930,inst_22932);
var inst_22938 = cljs.core.async.muxch_STAR_.call(null,inst_22937);
var inst_22939 = cljs.core.async.close_BANG_.call(null,inst_22938);
var inst_22940 = (inst_22932 + (1));
var tmp23018 = inst_22929;
var tmp23019 = inst_22931;
var tmp23020 = inst_22930;
var inst_22929__$1 = tmp23018;
var inst_22930__$1 = tmp23020;
var inst_22931__$1 = tmp23019;
var inst_22932__$1 = inst_22940;
var state_22988__$1 = (function (){var statearr_23024 = state_22988;
(statearr_23024[(12)] = inst_22929__$1);

(statearr_23024[(17)] = inst_22939);

(statearr_23024[(13)] = inst_22931__$1);

(statearr_23024[(14)] = inst_22930__$1);

(statearr_23024[(16)] = inst_22932__$1);

return statearr_23024;
})();
var statearr_23025_23065 = state_22988__$1;
(statearr_23025_23065[(2)] = null);

(statearr_23025_23065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (18))){
var inst_22958 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_23026_23066 = state_22988__$1;
(statearr_23026_23066[(2)] = inst_22958);

(statearr_23026_23066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (8))){
var inst_22931 = (state_22988[(13)]);
var inst_22932 = (state_22988[(16)]);
var inst_22934 = (inst_22932 < inst_22931);
var inst_22935 = inst_22934;
var state_22988__$1 = state_22988;
if(cljs.core.truth_(inst_22935)){
var statearr_23027_23067 = state_22988__$1;
(statearr_23027_23067[(1)] = (10));

} else {
var statearr_23028_23068 = state_22988__$1;
(statearr_23028_23068[(1)] = (11));

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
});})(c__20410__auto___23040,mults,ensure_mult,p))
;
return ((function (switch__20389__auto__,c__20410__auto___23040,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_23032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23032[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_23032[(1)] = (1));

return statearr_23032;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_22988){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_22988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e23033){if((e23033 instanceof Object)){
var ex__20393__auto__ = e23033;
var statearr_23034_23069 = state_22988;
(statearr_23034_23069[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23070 = state_22988;
state_22988 = G__23070;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_22988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_22988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___23040,mults,ensure_mult,p))
})();
var state__20412__auto__ = (function (){var statearr_23035 = f__20411__auto__.call(null);
(statearr_23035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___23040);

return statearr_23035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___23040,mults,ensure_mult,p))
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
var args23071 = [];
var len__19349__auto___23074 = arguments.length;
var i__19350__auto___23075 = (0);
while(true){
if((i__19350__auto___23075 < len__19349__auto___23074)){
args23071.push((arguments[i__19350__auto___23075]));

var G__23076 = (i__19350__auto___23075 + (1));
i__19350__auto___23075 = G__23076;
continue;
} else {
}
break;
}

var G__23073 = args23071.length;
switch (G__23073) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23071.length)].join('')));

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
var args23078 = [];
var len__19349__auto___23081 = arguments.length;
var i__19350__auto___23082 = (0);
while(true){
if((i__19350__auto___23082 < len__19349__auto___23081)){
args23078.push((arguments[i__19350__auto___23082]));

var G__23083 = (i__19350__auto___23082 + (1));
i__19350__auto___23082 = G__23083;
continue;
} else {
}
break;
}

var G__23080 = args23078.length;
switch (G__23080) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23078.length)].join('')));

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
var args23085 = [];
var len__19349__auto___23156 = arguments.length;
var i__19350__auto___23157 = (0);
while(true){
if((i__19350__auto___23157 < len__19349__auto___23156)){
args23085.push((arguments[i__19350__auto___23157]));

var G__23158 = (i__19350__auto___23157 + (1));
i__19350__auto___23157 = G__23158;
continue;
} else {
}
break;
}

var G__23087 = args23085.length;
switch (G__23087) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23085.length)].join('')));

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
var c__20410__auto___23160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___23160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___23160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23126){
var state_val_23127 = (state_23126[(1)]);
if((state_val_23127 === (7))){
var state_23126__$1 = state_23126;
var statearr_23128_23161 = state_23126__$1;
(statearr_23128_23161[(2)] = null);

(statearr_23128_23161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (1))){
var state_23126__$1 = state_23126;
var statearr_23129_23162 = state_23126__$1;
(statearr_23129_23162[(2)] = null);

(statearr_23129_23162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (4))){
var inst_23090 = (state_23126[(7)]);
var inst_23092 = (inst_23090 < cnt);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23092)){
var statearr_23130_23163 = state_23126__$1;
(statearr_23130_23163[(1)] = (6));

} else {
var statearr_23131_23164 = state_23126__$1;
(statearr_23131_23164[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (15))){
var inst_23122 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23132_23165 = state_23126__$1;
(statearr_23132_23165[(2)] = inst_23122);

(statearr_23132_23165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (13))){
var inst_23115 = cljs.core.async.close_BANG_.call(null,out);
var state_23126__$1 = state_23126;
var statearr_23133_23166 = state_23126__$1;
(statearr_23133_23166[(2)] = inst_23115);

(statearr_23133_23166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (6))){
var state_23126__$1 = state_23126;
var statearr_23134_23167 = state_23126__$1;
(statearr_23134_23167[(2)] = null);

(statearr_23134_23167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (3))){
var inst_23124 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23126__$1,inst_23124);
} else {
if((state_val_23127 === (12))){
var inst_23112 = (state_23126[(8)]);
var inst_23112__$1 = (state_23126[(2)]);
var inst_23113 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23112__$1);
var state_23126__$1 = (function (){var statearr_23135 = state_23126;
(statearr_23135[(8)] = inst_23112__$1);

return statearr_23135;
})();
if(cljs.core.truth_(inst_23113)){
var statearr_23136_23168 = state_23126__$1;
(statearr_23136_23168[(1)] = (13));

} else {
var statearr_23137_23169 = state_23126__$1;
(statearr_23137_23169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (2))){
var inst_23089 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23090 = (0);
var state_23126__$1 = (function (){var statearr_23138 = state_23126;
(statearr_23138[(9)] = inst_23089);

(statearr_23138[(7)] = inst_23090);

return statearr_23138;
})();
var statearr_23139_23170 = state_23126__$1;
(statearr_23139_23170[(2)] = null);

(statearr_23139_23170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (11))){
var inst_23090 = (state_23126[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23126,(10),Object,null,(9));
var inst_23099 = chs__$1.call(null,inst_23090);
var inst_23100 = done.call(null,inst_23090);
var inst_23101 = cljs.core.async.take_BANG_.call(null,inst_23099,inst_23100);
var state_23126__$1 = state_23126;
var statearr_23140_23171 = state_23126__$1;
(statearr_23140_23171[(2)] = inst_23101);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23126__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (9))){
var inst_23090 = (state_23126[(7)]);
var inst_23103 = (state_23126[(2)]);
var inst_23104 = (inst_23090 + (1));
var inst_23090__$1 = inst_23104;
var state_23126__$1 = (function (){var statearr_23141 = state_23126;
(statearr_23141[(7)] = inst_23090__$1);

(statearr_23141[(10)] = inst_23103);

return statearr_23141;
})();
var statearr_23142_23172 = state_23126__$1;
(statearr_23142_23172[(2)] = null);

(statearr_23142_23172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (5))){
var inst_23110 = (state_23126[(2)]);
var state_23126__$1 = (function (){var statearr_23143 = state_23126;
(statearr_23143[(11)] = inst_23110);

return statearr_23143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(12),dchan);
} else {
if((state_val_23127 === (14))){
var inst_23112 = (state_23126[(8)]);
var inst_23117 = cljs.core.apply.call(null,f,inst_23112);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23126__$1,(16),out,inst_23117);
} else {
if((state_val_23127 === (16))){
var inst_23119 = (state_23126[(2)]);
var state_23126__$1 = (function (){var statearr_23144 = state_23126;
(statearr_23144[(12)] = inst_23119);

return statearr_23144;
})();
var statearr_23145_23173 = state_23126__$1;
(statearr_23145_23173[(2)] = null);

(statearr_23145_23173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (10))){
var inst_23094 = (state_23126[(2)]);
var inst_23095 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23126__$1 = (function (){var statearr_23146 = state_23126;
(statearr_23146[(13)] = inst_23094);

return statearr_23146;
})();
var statearr_23147_23174 = state_23126__$1;
(statearr_23147_23174[(2)] = inst_23095);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23126__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (8))){
var inst_23108 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23148_23175 = state_23126__$1;
(statearr_23148_23175[(2)] = inst_23108);

(statearr_23148_23175[(1)] = (5));


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
});})(c__20410__auto___23160,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20389__auto__,c__20410__auto___23160,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_23152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23152[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_23152[(1)] = (1));

return statearr_23152;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_23126){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_23126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e23153){if((e23153 instanceof Object)){
var ex__20393__auto__ = e23153;
var statearr_23154_23176 = state_23126;
(statearr_23154_23176[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23177 = state_23126;
state_23126 = G__23177;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_23126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_23126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___23160,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20412__auto__ = (function (){var statearr_23155 = f__20411__auto__.call(null);
(statearr_23155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___23160);

return statearr_23155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___23160,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23179 = [];
var len__19349__auto___23235 = arguments.length;
var i__19350__auto___23236 = (0);
while(true){
if((i__19350__auto___23236 < len__19349__auto___23235)){
args23179.push((arguments[i__19350__auto___23236]));

var G__23237 = (i__19350__auto___23236 + (1));
i__19350__auto___23236 = G__23237;
continue;
} else {
}
break;
}

var G__23181 = args23179.length;
switch (G__23181) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23179.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___23239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___23239,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___23239,out){
return (function (state_23211){
var state_val_23212 = (state_23211[(1)]);
if((state_val_23212 === (7))){
var inst_23191 = (state_23211[(7)]);
var inst_23190 = (state_23211[(8)]);
var inst_23190__$1 = (state_23211[(2)]);
var inst_23191__$1 = cljs.core.nth.call(null,inst_23190__$1,(0),null);
var inst_23192 = cljs.core.nth.call(null,inst_23190__$1,(1),null);
var inst_23193 = (inst_23191__$1 == null);
var state_23211__$1 = (function (){var statearr_23213 = state_23211;
(statearr_23213[(9)] = inst_23192);

(statearr_23213[(7)] = inst_23191__$1);

(statearr_23213[(8)] = inst_23190__$1);

return statearr_23213;
})();
if(cljs.core.truth_(inst_23193)){
var statearr_23214_23240 = state_23211__$1;
(statearr_23214_23240[(1)] = (8));

} else {
var statearr_23215_23241 = state_23211__$1;
(statearr_23215_23241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23212 === (1))){
var inst_23182 = cljs.core.vec.call(null,chs);
var inst_23183 = inst_23182;
var state_23211__$1 = (function (){var statearr_23216 = state_23211;
(statearr_23216[(10)] = inst_23183);

return statearr_23216;
})();
var statearr_23217_23242 = state_23211__$1;
(statearr_23217_23242[(2)] = null);

(statearr_23217_23242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23212 === (4))){
var inst_23183 = (state_23211[(10)]);
var state_23211__$1 = state_23211;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23211__$1,(7),inst_23183);
} else {
if((state_val_23212 === (6))){
var inst_23207 = (state_23211[(2)]);
var state_23211__$1 = state_23211;
var statearr_23218_23243 = state_23211__$1;
(statearr_23218_23243[(2)] = inst_23207);

(statearr_23218_23243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23212 === (3))){
var inst_23209 = (state_23211[(2)]);
var state_23211__$1 = state_23211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23211__$1,inst_23209);
} else {
if((state_val_23212 === (2))){
var inst_23183 = (state_23211[(10)]);
var inst_23185 = cljs.core.count.call(null,inst_23183);
var inst_23186 = (inst_23185 > (0));
var state_23211__$1 = state_23211;
if(cljs.core.truth_(inst_23186)){
var statearr_23220_23244 = state_23211__$1;
(statearr_23220_23244[(1)] = (4));

} else {
var statearr_23221_23245 = state_23211__$1;
(statearr_23221_23245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23212 === (11))){
var inst_23183 = (state_23211[(10)]);
var inst_23200 = (state_23211[(2)]);
var tmp23219 = inst_23183;
var inst_23183__$1 = tmp23219;
var state_23211__$1 = (function (){var statearr_23222 = state_23211;
(statearr_23222[(11)] = inst_23200);

(statearr_23222[(10)] = inst_23183__$1);

return statearr_23222;
})();
var statearr_23223_23246 = state_23211__$1;
(statearr_23223_23246[(2)] = null);

(statearr_23223_23246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23212 === (9))){
var inst_23191 = (state_23211[(7)]);
var state_23211__$1 = state_23211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23211__$1,(11),out,inst_23191);
} else {
if((state_val_23212 === (5))){
var inst_23205 = cljs.core.async.close_BANG_.call(null,out);
var state_23211__$1 = state_23211;
var statearr_23224_23247 = state_23211__$1;
(statearr_23224_23247[(2)] = inst_23205);

(statearr_23224_23247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23212 === (10))){
var inst_23203 = (state_23211[(2)]);
var state_23211__$1 = state_23211;
var statearr_23225_23248 = state_23211__$1;
(statearr_23225_23248[(2)] = inst_23203);

(statearr_23225_23248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23212 === (8))){
var inst_23183 = (state_23211[(10)]);
var inst_23192 = (state_23211[(9)]);
var inst_23191 = (state_23211[(7)]);
var inst_23190 = (state_23211[(8)]);
var inst_23195 = (function (){var cs = inst_23183;
var vec__23188 = inst_23190;
var v = inst_23191;
var c = inst_23192;
return ((function (cs,vec__23188,v,c,inst_23183,inst_23192,inst_23191,inst_23190,state_val_23212,c__20410__auto___23239,out){
return (function (p1__23178_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23178_SHARP_);
});
;})(cs,vec__23188,v,c,inst_23183,inst_23192,inst_23191,inst_23190,state_val_23212,c__20410__auto___23239,out))
})();
var inst_23196 = cljs.core.filterv.call(null,inst_23195,inst_23183);
var inst_23183__$1 = inst_23196;
var state_23211__$1 = (function (){var statearr_23226 = state_23211;
(statearr_23226[(10)] = inst_23183__$1);

return statearr_23226;
})();
var statearr_23227_23249 = state_23211__$1;
(statearr_23227_23249[(2)] = null);

(statearr_23227_23249[(1)] = (2));


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
});})(c__20410__auto___23239,out))
;
return ((function (switch__20389__auto__,c__20410__auto___23239,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_23231 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23231[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_23231[(1)] = (1));

return statearr_23231;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_23211){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_23211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e23232){if((e23232 instanceof Object)){
var ex__20393__auto__ = e23232;
var statearr_23233_23250 = state_23211;
(statearr_23233_23250[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23251 = state_23211;
state_23211 = G__23251;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_23211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_23211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___23239,out))
})();
var state__20412__auto__ = (function (){var statearr_23234 = f__20411__auto__.call(null);
(statearr_23234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___23239);

return statearr_23234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___23239,out))
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
var args23252 = [];
var len__19349__auto___23301 = arguments.length;
var i__19350__auto___23302 = (0);
while(true){
if((i__19350__auto___23302 < len__19349__auto___23301)){
args23252.push((arguments[i__19350__auto___23302]));

var G__23303 = (i__19350__auto___23302 + (1));
i__19350__auto___23302 = G__23303;
continue;
} else {
}
break;
}

var G__23254 = args23252.length;
switch (G__23254) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23252.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___23305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___23305,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___23305,out){
return (function (state_23278){
var state_val_23279 = (state_23278[(1)]);
if((state_val_23279 === (7))){
var inst_23260 = (state_23278[(7)]);
var inst_23260__$1 = (state_23278[(2)]);
var inst_23261 = (inst_23260__$1 == null);
var inst_23262 = cljs.core.not.call(null,inst_23261);
var state_23278__$1 = (function (){var statearr_23280 = state_23278;
(statearr_23280[(7)] = inst_23260__$1);

return statearr_23280;
})();
if(inst_23262){
var statearr_23281_23306 = state_23278__$1;
(statearr_23281_23306[(1)] = (8));

} else {
var statearr_23282_23307 = state_23278__$1;
(statearr_23282_23307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (1))){
var inst_23255 = (0);
var state_23278__$1 = (function (){var statearr_23283 = state_23278;
(statearr_23283[(8)] = inst_23255);

return statearr_23283;
})();
var statearr_23284_23308 = state_23278__$1;
(statearr_23284_23308[(2)] = null);

(statearr_23284_23308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (4))){
var state_23278__$1 = state_23278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23278__$1,(7),ch);
} else {
if((state_val_23279 === (6))){
var inst_23273 = (state_23278[(2)]);
var state_23278__$1 = state_23278;
var statearr_23285_23309 = state_23278__$1;
(statearr_23285_23309[(2)] = inst_23273);

(statearr_23285_23309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (3))){
var inst_23275 = (state_23278[(2)]);
var inst_23276 = cljs.core.async.close_BANG_.call(null,out);
var state_23278__$1 = (function (){var statearr_23286 = state_23278;
(statearr_23286[(9)] = inst_23275);

return statearr_23286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23278__$1,inst_23276);
} else {
if((state_val_23279 === (2))){
var inst_23255 = (state_23278[(8)]);
var inst_23257 = (inst_23255 < n);
var state_23278__$1 = state_23278;
if(cljs.core.truth_(inst_23257)){
var statearr_23287_23310 = state_23278__$1;
(statearr_23287_23310[(1)] = (4));

} else {
var statearr_23288_23311 = state_23278__$1;
(statearr_23288_23311[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (11))){
var inst_23255 = (state_23278[(8)]);
var inst_23265 = (state_23278[(2)]);
var inst_23266 = (inst_23255 + (1));
var inst_23255__$1 = inst_23266;
var state_23278__$1 = (function (){var statearr_23289 = state_23278;
(statearr_23289[(8)] = inst_23255__$1);

(statearr_23289[(10)] = inst_23265);

return statearr_23289;
})();
var statearr_23290_23312 = state_23278__$1;
(statearr_23290_23312[(2)] = null);

(statearr_23290_23312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (9))){
var state_23278__$1 = state_23278;
var statearr_23291_23313 = state_23278__$1;
(statearr_23291_23313[(2)] = null);

(statearr_23291_23313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (5))){
var state_23278__$1 = state_23278;
var statearr_23292_23314 = state_23278__$1;
(statearr_23292_23314[(2)] = null);

(statearr_23292_23314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (10))){
var inst_23270 = (state_23278[(2)]);
var state_23278__$1 = state_23278;
var statearr_23293_23315 = state_23278__$1;
(statearr_23293_23315[(2)] = inst_23270);

(statearr_23293_23315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23279 === (8))){
var inst_23260 = (state_23278[(7)]);
var state_23278__$1 = state_23278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23278__$1,(11),out,inst_23260);
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
});})(c__20410__auto___23305,out))
;
return ((function (switch__20389__auto__,c__20410__auto___23305,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_23297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23297[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_23297[(1)] = (1));

return statearr_23297;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_23278){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_23278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e23298){if((e23298 instanceof Object)){
var ex__20393__auto__ = e23298;
var statearr_23299_23316 = state_23278;
(statearr_23299_23316[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23317 = state_23278;
state_23278 = G__23317;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_23278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_23278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___23305,out))
})();
var state__20412__auto__ = (function (){var statearr_23300 = f__20411__auto__.call(null);
(statearr_23300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___23305);

return statearr_23300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___23305,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23325 = (function (map_LT_,f,ch,meta23326){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23326 = meta23326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23327,meta23326__$1){
var self__ = this;
var _23327__$1 = this;
return (new cljs.core.async.t_cljs$core$async23325(self__.map_LT_,self__.f,self__.ch,meta23326__$1));
});

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23327){
var self__ = this;
var _23327__$1 = this;
return self__.meta23326;
});

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23328 = (function (map_LT_,f,ch,meta23326,_,fn1,meta23329){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23326 = meta23326;
this._ = _;
this.fn1 = fn1;
this.meta23329 = meta23329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23330,meta23329__$1){
var self__ = this;
var _23330__$1 = this;
return (new cljs.core.async.t_cljs$core$async23328(self__.map_LT_,self__.f,self__.ch,self__.meta23326,self__._,self__.fn1,meta23329__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23330){
var self__ = this;
var _23330__$1 = this;
return self__.meta23329;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23318_SHARP_){
return f1.call(null,(((p1__23318_SHARP_ == null))?null:self__.f.call(null,p1__23318_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23328.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23326","meta23326",-151848378,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23325","cljs.core.async/t_cljs$core$async23325",-127620781,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23329","meta23329",540536448,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23328";

cljs.core.async.t_cljs$core$async23328.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async23328");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23328 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23328(map_LT___$1,f__$1,ch__$1,meta23326__$1,___$2,fn1__$1,meta23329){
return (new cljs.core.async.t_cljs$core$async23328(map_LT___$1,f__$1,ch__$1,meta23326__$1,___$2,fn1__$1,meta23329));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23328(self__.map_LT_,self__.f,self__.ch,self__.meta23326,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23325.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23326","meta23326",-151848378,null)], null);
});

cljs.core.async.t_cljs$core$async23325.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23325";

cljs.core.async.t_cljs$core$async23325.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async23325");
});

cljs.core.async.__GT_t_cljs$core$async23325 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23325(map_LT___$1,f__$1,ch__$1,meta23326){
return (new cljs.core.async.t_cljs$core$async23325(map_LT___$1,f__$1,ch__$1,meta23326));
});

}

return (new cljs.core.async.t_cljs$core$async23325(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23334 = (function (map_GT_,f,ch,meta23335){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23335 = meta23335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23336,meta23335__$1){
var self__ = this;
var _23336__$1 = this;
return (new cljs.core.async.t_cljs$core$async23334(self__.map_GT_,self__.f,self__.ch,meta23335__$1));
});

cljs.core.async.t_cljs$core$async23334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23336){
var self__ = this;
var _23336__$1 = this;
return self__.meta23335;
});

cljs.core.async.t_cljs$core$async23334.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23334.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23334.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23335","meta23335",-1729603322,null)], null);
});

cljs.core.async.t_cljs$core$async23334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23334";

cljs.core.async.t_cljs$core$async23334.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async23334");
});

cljs.core.async.__GT_t_cljs$core$async23334 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23334(map_GT___$1,f__$1,ch__$1,meta23335){
return (new cljs.core.async.t_cljs$core$async23334(map_GT___$1,f__$1,ch__$1,meta23335));
});

}

return (new cljs.core.async.t_cljs$core$async23334(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23340 = (function (filter_GT_,p,ch,meta23341){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23341 = meta23341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23342,meta23341__$1){
var self__ = this;
var _23342__$1 = this;
return (new cljs.core.async.t_cljs$core$async23340(self__.filter_GT_,self__.p,self__.ch,meta23341__$1));
});

cljs.core.async.t_cljs$core$async23340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23342){
var self__ = this;
var _23342__$1 = this;
return self__.meta23341;
});

cljs.core.async.t_cljs$core$async23340.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23340.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23340.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23340.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23340.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23340.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23340.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23341","meta23341",-776351958,null)], null);
});

cljs.core.async.t_cljs$core$async23340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23340";

cljs.core.async.t_cljs$core$async23340.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async23340");
});

cljs.core.async.__GT_t_cljs$core$async23340 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23340(filter_GT___$1,p__$1,ch__$1,meta23341){
return (new cljs.core.async.t_cljs$core$async23340(filter_GT___$1,p__$1,ch__$1,meta23341));
});

}

return (new cljs.core.async.t_cljs$core$async23340(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23343 = [];
var len__19349__auto___23387 = arguments.length;
var i__19350__auto___23388 = (0);
while(true){
if((i__19350__auto___23388 < len__19349__auto___23387)){
args23343.push((arguments[i__19350__auto___23388]));

var G__23389 = (i__19350__auto___23388 + (1));
i__19350__auto___23388 = G__23389;
continue;
} else {
}
break;
}

var G__23345 = args23343.length;
switch (G__23345) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23343.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___23391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___23391,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___23391,out){
return (function (state_23366){
var state_val_23367 = (state_23366[(1)]);
if((state_val_23367 === (7))){
var inst_23362 = (state_23366[(2)]);
var state_23366__$1 = state_23366;
var statearr_23368_23392 = state_23366__$1;
(statearr_23368_23392[(2)] = inst_23362);

(statearr_23368_23392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (1))){
var state_23366__$1 = state_23366;
var statearr_23369_23393 = state_23366__$1;
(statearr_23369_23393[(2)] = null);

(statearr_23369_23393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (4))){
var inst_23348 = (state_23366[(7)]);
var inst_23348__$1 = (state_23366[(2)]);
var inst_23349 = (inst_23348__$1 == null);
var state_23366__$1 = (function (){var statearr_23370 = state_23366;
(statearr_23370[(7)] = inst_23348__$1);

return statearr_23370;
})();
if(cljs.core.truth_(inst_23349)){
var statearr_23371_23394 = state_23366__$1;
(statearr_23371_23394[(1)] = (5));

} else {
var statearr_23372_23395 = state_23366__$1;
(statearr_23372_23395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (6))){
var inst_23348 = (state_23366[(7)]);
var inst_23353 = p.call(null,inst_23348);
var state_23366__$1 = state_23366;
if(cljs.core.truth_(inst_23353)){
var statearr_23373_23396 = state_23366__$1;
(statearr_23373_23396[(1)] = (8));

} else {
var statearr_23374_23397 = state_23366__$1;
(statearr_23374_23397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (3))){
var inst_23364 = (state_23366[(2)]);
var state_23366__$1 = state_23366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23366__$1,inst_23364);
} else {
if((state_val_23367 === (2))){
var state_23366__$1 = state_23366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23366__$1,(4),ch);
} else {
if((state_val_23367 === (11))){
var inst_23356 = (state_23366[(2)]);
var state_23366__$1 = state_23366;
var statearr_23375_23398 = state_23366__$1;
(statearr_23375_23398[(2)] = inst_23356);

(statearr_23375_23398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (9))){
var state_23366__$1 = state_23366;
var statearr_23376_23399 = state_23366__$1;
(statearr_23376_23399[(2)] = null);

(statearr_23376_23399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (5))){
var inst_23351 = cljs.core.async.close_BANG_.call(null,out);
var state_23366__$1 = state_23366;
var statearr_23377_23400 = state_23366__$1;
(statearr_23377_23400[(2)] = inst_23351);

(statearr_23377_23400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (10))){
var inst_23359 = (state_23366[(2)]);
var state_23366__$1 = (function (){var statearr_23378 = state_23366;
(statearr_23378[(8)] = inst_23359);

return statearr_23378;
})();
var statearr_23379_23401 = state_23366__$1;
(statearr_23379_23401[(2)] = null);

(statearr_23379_23401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23367 === (8))){
var inst_23348 = (state_23366[(7)]);
var state_23366__$1 = state_23366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23366__$1,(11),out,inst_23348);
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
});})(c__20410__auto___23391,out))
;
return ((function (switch__20389__auto__,c__20410__auto___23391,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_23383 = [null,null,null,null,null,null,null,null,null];
(statearr_23383[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_23383[(1)] = (1));

return statearr_23383;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_23366){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_23366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e23384){if((e23384 instanceof Object)){
var ex__20393__auto__ = e23384;
var statearr_23385_23402 = state_23366;
(statearr_23385_23402[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23403 = state_23366;
state_23366 = G__23403;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_23366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_23366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___23391,out))
})();
var state__20412__auto__ = (function (){var statearr_23386 = f__20411__auto__.call(null);
(statearr_23386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___23391);

return statearr_23386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___23391,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23404 = [];
var len__19349__auto___23407 = arguments.length;
var i__19350__auto___23408 = (0);
while(true){
if((i__19350__auto___23408 < len__19349__auto___23407)){
args23404.push((arguments[i__19350__auto___23408]));

var G__23409 = (i__19350__auto___23408 + (1));
i__19350__auto___23408 = G__23409;
continue;
} else {
}
break;
}

var G__23406 = args23404.length;
switch (G__23406) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23404.length)].join('')));

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
return (function (state_23576){
var state_val_23577 = (state_23576[(1)]);
if((state_val_23577 === (7))){
var inst_23572 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23578_23619 = state_23576__$1;
(statearr_23578_23619[(2)] = inst_23572);

(statearr_23578_23619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (20))){
var inst_23542 = (state_23576[(7)]);
var inst_23553 = (state_23576[(2)]);
var inst_23554 = cljs.core.next.call(null,inst_23542);
var inst_23528 = inst_23554;
var inst_23529 = null;
var inst_23530 = (0);
var inst_23531 = (0);
var state_23576__$1 = (function (){var statearr_23579 = state_23576;
(statearr_23579[(8)] = inst_23530);

(statearr_23579[(9)] = inst_23553);

(statearr_23579[(10)] = inst_23529);

(statearr_23579[(11)] = inst_23531);

(statearr_23579[(12)] = inst_23528);

return statearr_23579;
})();
var statearr_23580_23620 = state_23576__$1;
(statearr_23580_23620[(2)] = null);

(statearr_23580_23620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (1))){
var state_23576__$1 = state_23576;
var statearr_23581_23621 = state_23576__$1;
(statearr_23581_23621[(2)] = null);

(statearr_23581_23621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (4))){
var inst_23517 = (state_23576[(13)]);
var inst_23517__$1 = (state_23576[(2)]);
var inst_23518 = (inst_23517__$1 == null);
var state_23576__$1 = (function (){var statearr_23582 = state_23576;
(statearr_23582[(13)] = inst_23517__$1);

return statearr_23582;
})();
if(cljs.core.truth_(inst_23518)){
var statearr_23583_23622 = state_23576__$1;
(statearr_23583_23622[(1)] = (5));

} else {
var statearr_23584_23623 = state_23576__$1;
(statearr_23584_23623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (15))){
var state_23576__$1 = state_23576;
var statearr_23588_23624 = state_23576__$1;
(statearr_23588_23624[(2)] = null);

(statearr_23588_23624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (21))){
var state_23576__$1 = state_23576;
var statearr_23589_23625 = state_23576__$1;
(statearr_23589_23625[(2)] = null);

(statearr_23589_23625[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (13))){
var inst_23530 = (state_23576[(8)]);
var inst_23529 = (state_23576[(10)]);
var inst_23531 = (state_23576[(11)]);
var inst_23528 = (state_23576[(12)]);
var inst_23538 = (state_23576[(2)]);
var inst_23539 = (inst_23531 + (1));
var tmp23585 = inst_23530;
var tmp23586 = inst_23529;
var tmp23587 = inst_23528;
var inst_23528__$1 = tmp23587;
var inst_23529__$1 = tmp23586;
var inst_23530__$1 = tmp23585;
var inst_23531__$1 = inst_23539;
var state_23576__$1 = (function (){var statearr_23590 = state_23576;
(statearr_23590[(8)] = inst_23530__$1);

(statearr_23590[(14)] = inst_23538);

(statearr_23590[(10)] = inst_23529__$1);

(statearr_23590[(11)] = inst_23531__$1);

(statearr_23590[(12)] = inst_23528__$1);

return statearr_23590;
})();
var statearr_23591_23626 = state_23576__$1;
(statearr_23591_23626[(2)] = null);

(statearr_23591_23626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (22))){
var state_23576__$1 = state_23576;
var statearr_23592_23627 = state_23576__$1;
(statearr_23592_23627[(2)] = null);

(statearr_23592_23627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (6))){
var inst_23517 = (state_23576[(13)]);
var inst_23526 = f.call(null,inst_23517);
var inst_23527 = cljs.core.seq.call(null,inst_23526);
var inst_23528 = inst_23527;
var inst_23529 = null;
var inst_23530 = (0);
var inst_23531 = (0);
var state_23576__$1 = (function (){var statearr_23593 = state_23576;
(statearr_23593[(8)] = inst_23530);

(statearr_23593[(10)] = inst_23529);

(statearr_23593[(11)] = inst_23531);

(statearr_23593[(12)] = inst_23528);

return statearr_23593;
})();
var statearr_23594_23628 = state_23576__$1;
(statearr_23594_23628[(2)] = null);

(statearr_23594_23628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (17))){
var inst_23542 = (state_23576[(7)]);
var inst_23546 = cljs.core.chunk_first.call(null,inst_23542);
var inst_23547 = cljs.core.chunk_rest.call(null,inst_23542);
var inst_23548 = cljs.core.count.call(null,inst_23546);
var inst_23528 = inst_23547;
var inst_23529 = inst_23546;
var inst_23530 = inst_23548;
var inst_23531 = (0);
var state_23576__$1 = (function (){var statearr_23595 = state_23576;
(statearr_23595[(8)] = inst_23530);

(statearr_23595[(10)] = inst_23529);

(statearr_23595[(11)] = inst_23531);

(statearr_23595[(12)] = inst_23528);

return statearr_23595;
})();
var statearr_23596_23629 = state_23576__$1;
(statearr_23596_23629[(2)] = null);

(statearr_23596_23629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (3))){
var inst_23574 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23576__$1,inst_23574);
} else {
if((state_val_23577 === (12))){
var inst_23562 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23597_23630 = state_23576__$1;
(statearr_23597_23630[(2)] = inst_23562);

(statearr_23597_23630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (2))){
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23576__$1,(4),in$);
} else {
if((state_val_23577 === (23))){
var inst_23570 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23598_23631 = state_23576__$1;
(statearr_23598_23631[(2)] = inst_23570);

(statearr_23598_23631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (19))){
var inst_23557 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23599_23632 = state_23576__$1;
(statearr_23599_23632[(2)] = inst_23557);

(statearr_23599_23632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (11))){
var inst_23542 = (state_23576[(7)]);
var inst_23528 = (state_23576[(12)]);
var inst_23542__$1 = cljs.core.seq.call(null,inst_23528);
var state_23576__$1 = (function (){var statearr_23600 = state_23576;
(statearr_23600[(7)] = inst_23542__$1);

return statearr_23600;
})();
if(inst_23542__$1){
var statearr_23601_23633 = state_23576__$1;
(statearr_23601_23633[(1)] = (14));

} else {
var statearr_23602_23634 = state_23576__$1;
(statearr_23602_23634[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (9))){
var inst_23564 = (state_23576[(2)]);
var inst_23565 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23576__$1 = (function (){var statearr_23603 = state_23576;
(statearr_23603[(15)] = inst_23564);

return statearr_23603;
})();
if(cljs.core.truth_(inst_23565)){
var statearr_23604_23635 = state_23576__$1;
(statearr_23604_23635[(1)] = (21));

} else {
var statearr_23605_23636 = state_23576__$1;
(statearr_23605_23636[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (5))){
var inst_23520 = cljs.core.async.close_BANG_.call(null,out);
var state_23576__$1 = state_23576;
var statearr_23606_23637 = state_23576__$1;
(statearr_23606_23637[(2)] = inst_23520);

(statearr_23606_23637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (14))){
var inst_23542 = (state_23576[(7)]);
var inst_23544 = cljs.core.chunked_seq_QMARK_.call(null,inst_23542);
var state_23576__$1 = state_23576;
if(inst_23544){
var statearr_23607_23638 = state_23576__$1;
(statearr_23607_23638[(1)] = (17));

} else {
var statearr_23608_23639 = state_23576__$1;
(statearr_23608_23639[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (16))){
var inst_23560 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23609_23640 = state_23576__$1;
(statearr_23609_23640[(2)] = inst_23560);

(statearr_23609_23640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (10))){
var inst_23529 = (state_23576[(10)]);
var inst_23531 = (state_23576[(11)]);
var inst_23536 = cljs.core._nth.call(null,inst_23529,inst_23531);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23576__$1,(13),out,inst_23536);
} else {
if((state_val_23577 === (18))){
var inst_23542 = (state_23576[(7)]);
var inst_23551 = cljs.core.first.call(null,inst_23542);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23576__$1,(20),out,inst_23551);
} else {
if((state_val_23577 === (8))){
var inst_23530 = (state_23576[(8)]);
var inst_23531 = (state_23576[(11)]);
var inst_23533 = (inst_23531 < inst_23530);
var inst_23534 = inst_23533;
var state_23576__$1 = state_23576;
if(cljs.core.truth_(inst_23534)){
var statearr_23610_23641 = state_23576__$1;
(statearr_23610_23641[(1)] = (10));

} else {
var statearr_23611_23642 = state_23576__$1;
(statearr_23611_23642[(1)] = (11));

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
var statearr_23615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23615[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__);

(statearr_23615[(1)] = (1));

return statearr_23615;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____1 = (function (state_23576){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_23576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e23616){if((e23616 instanceof Object)){
var ex__20393__auto__ = e23616;
var statearr_23617_23643 = state_23576;
(statearr_23617_23643[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23644 = state_23576;
state_23576 = G__23644;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__ = function(state_23576){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____1.call(this,state_23576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20390__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto__))
})();
var state__20412__auto__ = (function (){var statearr_23618 = f__20411__auto__.call(null);
(statearr_23618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto__);

return statearr_23618;
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
var args23645 = [];
var len__19349__auto___23648 = arguments.length;
var i__19350__auto___23649 = (0);
while(true){
if((i__19350__auto___23649 < len__19349__auto___23648)){
args23645.push((arguments[i__19350__auto___23649]));

var G__23650 = (i__19350__auto___23649 + (1));
i__19350__auto___23649 = G__23650;
continue;
} else {
}
break;
}

var G__23647 = args23645.length;
switch (G__23647) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23645.length)].join('')));

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
var args23652 = [];
var len__19349__auto___23655 = arguments.length;
var i__19350__auto___23656 = (0);
while(true){
if((i__19350__auto___23656 < len__19349__auto___23655)){
args23652.push((arguments[i__19350__auto___23656]));

var G__23657 = (i__19350__auto___23656 + (1));
i__19350__auto___23656 = G__23657;
continue;
} else {
}
break;
}

var G__23654 = args23652.length;
switch (G__23654) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23652.length)].join('')));

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
var args23659 = [];
var len__19349__auto___23710 = arguments.length;
var i__19350__auto___23711 = (0);
while(true){
if((i__19350__auto___23711 < len__19349__auto___23710)){
args23659.push((arguments[i__19350__auto___23711]));

var G__23712 = (i__19350__auto___23711 + (1));
i__19350__auto___23711 = G__23712;
continue;
} else {
}
break;
}

var G__23661 = args23659.length;
switch (G__23661) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23659.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___23714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___23714,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___23714,out){
return (function (state_23685){
var state_val_23686 = (state_23685[(1)]);
if((state_val_23686 === (7))){
var inst_23680 = (state_23685[(2)]);
var state_23685__$1 = state_23685;
var statearr_23687_23715 = state_23685__$1;
(statearr_23687_23715[(2)] = inst_23680);

(statearr_23687_23715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (1))){
var inst_23662 = null;
var state_23685__$1 = (function (){var statearr_23688 = state_23685;
(statearr_23688[(7)] = inst_23662);

return statearr_23688;
})();
var statearr_23689_23716 = state_23685__$1;
(statearr_23689_23716[(2)] = null);

(statearr_23689_23716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (4))){
var inst_23665 = (state_23685[(8)]);
var inst_23665__$1 = (state_23685[(2)]);
var inst_23666 = (inst_23665__$1 == null);
var inst_23667 = cljs.core.not.call(null,inst_23666);
var state_23685__$1 = (function (){var statearr_23690 = state_23685;
(statearr_23690[(8)] = inst_23665__$1);

return statearr_23690;
})();
if(inst_23667){
var statearr_23691_23717 = state_23685__$1;
(statearr_23691_23717[(1)] = (5));

} else {
var statearr_23692_23718 = state_23685__$1;
(statearr_23692_23718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (6))){
var state_23685__$1 = state_23685;
var statearr_23693_23719 = state_23685__$1;
(statearr_23693_23719[(2)] = null);

(statearr_23693_23719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (3))){
var inst_23682 = (state_23685[(2)]);
var inst_23683 = cljs.core.async.close_BANG_.call(null,out);
var state_23685__$1 = (function (){var statearr_23694 = state_23685;
(statearr_23694[(9)] = inst_23682);

return statearr_23694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23685__$1,inst_23683);
} else {
if((state_val_23686 === (2))){
var state_23685__$1 = state_23685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23685__$1,(4),ch);
} else {
if((state_val_23686 === (11))){
var inst_23665 = (state_23685[(8)]);
var inst_23674 = (state_23685[(2)]);
var inst_23662 = inst_23665;
var state_23685__$1 = (function (){var statearr_23695 = state_23685;
(statearr_23695[(7)] = inst_23662);

(statearr_23695[(10)] = inst_23674);

return statearr_23695;
})();
var statearr_23696_23720 = state_23685__$1;
(statearr_23696_23720[(2)] = null);

(statearr_23696_23720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (9))){
var inst_23665 = (state_23685[(8)]);
var state_23685__$1 = state_23685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23685__$1,(11),out,inst_23665);
} else {
if((state_val_23686 === (5))){
var inst_23662 = (state_23685[(7)]);
var inst_23665 = (state_23685[(8)]);
var inst_23669 = cljs.core._EQ_.call(null,inst_23665,inst_23662);
var state_23685__$1 = state_23685;
if(inst_23669){
var statearr_23698_23721 = state_23685__$1;
(statearr_23698_23721[(1)] = (8));

} else {
var statearr_23699_23722 = state_23685__$1;
(statearr_23699_23722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (10))){
var inst_23677 = (state_23685[(2)]);
var state_23685__$1 = state_23685;
var statearr_23700_23723 = state_23685__$1;
(statearr_23700_23723[(2)] = inst_23677);

(statearr_23700_23723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23686 === (8))){
var inst_23662 = (state_23685[(7)]);
var tmp23697 = inst_23662;
var inst_23662__$1 = tmp23697;
var state_23685__$1 = (function (){var statearr_23701 = state_23685;
(statearr_23701[(7)] = inst_23662__$1);

return statearr_23701;
})();
var statearr_23702_23724 = state_23685__$1;
(statearr_23702_23724[(2)] = null);

(statearr_23702_23724[(1)] = (2));


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
});})(c__20410__auto___23714,out))
;
return ((function (switch__20389__auto__,c__20410__auto___23714,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_23706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23706[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_23706[(1)] = (1));

return statearr_23706;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_23685){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_23685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e23707){if((e23707 instanceof Object)){
var ex__20393__auto__ = e23707;
var statearr_23708_23725 = state_23685;
(statearr_23708_23725[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23726 = state_23685;
state_23685 = G__23726;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_23685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_23685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___23714,out))
})();
var state__20412__auto__ = (function (){var statearr_23709 = f__20411__auto__.call(null);
(statearr_23709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___23714);

return statearr_23709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___23714,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23727 = [];
var len__19349__auto___23797 = arguments.length;
var i__19350__auto___23798 = (0);
while(true){
if((i__19350__auto___23798 < len__19349__auto___23797)){
args23727.push((arguments[i__19350__auto___23798]));

var G__23799 = (i__19350__auto___23798 + (1));
i__19350__auto___23798 = G__23799;
continue;
} else {
}
break;
}

var G__23729 = args23727.length;
switch (G__23729) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23727.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___23801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___23801,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___23801,out){
return (function (state_23767){
var state_val_23768 = (state_23767[(1)]);
if((state_val_23768 === (7))){
var inst_23763 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23769_23802 = state_23767__$1;
(statearr_23769_23802[(2)] = inst_23763);

(statearr_23769_23802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (1))){
var inst_23730 = (new Array(n));
var inst_23731 = inst_23730;
var inst_23732 = (0);
var state_23767__$1 = (function (){var statearr_23770 = state_23767;
(statearr_23770[(7)] = inst_23732);

(statearr_23770[(8)] = inst_23731);

return statearr_23770;
})();
var statearr_23771_23803 = state_23767__$1;
(statearr_23771_23803[(2)] = null);

(statearr_23771_23803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (4))){
var inst_23735 = (state_23767[(9)]);
var inst_23735__$1 = (state_23767[(2)]);
var inst_23736 = (inst_23735__$1 == null);
var inst_23737 = cljs.core.not.call(null,inst_23736);
var state_23767__$1 = (function (){var statearr_23772 = state_23767;
(statearr_23772[(9)] = inst_23735__$1);

return statearr_23772;
})();
if(inst_23737){
var statearr_23773_23804 = state_23767__$1;
(statearr_23773_23804[(1)] = (5));

} else {
var statearr_23774_23805 = state_23767__$1;
(statearr_23774_23805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (15))){
var inst_23757 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23775_23806 = state_23767__$1;
(statearr_23775_23806[(2)] = inst_23757);

(statearr_23775_23806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (13))){
var state_23767__$1 = state_23767;
var statearr_23776_23807 = state_23767__$1;
(statearr_23776_23807[(2)] = null);

(statearr_23776_23807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (6))){
var inst_23732 = (state_23767[(7)]);
var inst_23753 = (inst_23732 > (0));
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23753)){
var statearr_23777_23808 = state_23767__$1;
(statearr_23777_23808[(1)] = (12));

} else {
var statearr_23778_23809 = state_23767__$1;
(statearr_23778_23809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (3))){
var inst_23765 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23767__$1,inst_23765);
} else {
if((state_val_23768 === (12))){
var inst_23731 = (state_23767[(8)]);
var inst_23755 = cljs.core.vec.call(null,inst_23731);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23767__$1,(15),out,inst_23755);
} else {
if((state_val_23768 === (2))){
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(4),ch);
} else {
if((state_val_23768 === (11))){
var inst_23747 = (state_23767[(2)]);
var inst_23748 = (new Array(n));
var inst_23731 = inst_23748;
var inst_23732 = (0);
var state_23767__$1 = (function (){var statearr_23779 = state_23767;
(statearr_23779[(10)] = inst_23747);

(statearr_23779[(7)] = inst_23732);

(statearr_23779[(8)] = inst_23731);

return statearr_23779;
})();
var statearr_23780_23810 = state_23767__$1;
(statearr_23780_23810[(2)] = null);

(statearr_23780_23810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (9))){
var inst_23731 = (state_23767[(8)]);
var inst_23745 = cljs.core.vec.call(null,inst_23731);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23767__$1,(11),out,inst_23745);
} else {
if((state_val_23768 === (5))){
var inst_23735 = (state_23767[(9)]);
var inst_23732 = (state_23767[(7)]);
var inst_23740 = (state_23767[(11)]);
var inst_23731 = (state_23767[(8)]);
var inst_23739 = (inst_23731[inst_23732] = inst_23735);
var inst_23740__$1 = (inst_23732 + (1));
var inst_23741 = (inst_23740__$1 < n);
var state_23767__$1 = (function (){var statearr_23781 = state_23767;
(statearr_23781[(12)] = inst_23739);

(statearr_23781[(11)] = inst_23740__$1);

return statearr_23781;
})();
if(cljs.core.truth_(inst_23741)){
var statearr_23782_23811 = state_23767__$1;
(statearr_23782_23811[(1)] = (8));

} else {
var statearr_23783_23812 = state_23767__$1;
(statearr_23783_23812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (14))){
var inst_23760 = (state_23767[(2)]);
var inst_23761 = cljs.core.async.close_BANG_.call(null,out);
var state_23767__$1 = (function (){var statearr_23785 = state_23767;
(statearr_23785[(13)] = inst_23760);

return statearr_23785;
})();
var statearr_23786_23813 = state_23767__$1;
(statearr_23786_23813[(2)] = inst_23761);

(statearr_23786_23813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (10))){
var inst_23751 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23787_23814 = state_23767__$1;
(statearr_23787_23814[(2)] = inst_23751);

(statearr_23787_23814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (8))){
var inst_23740 = (state_23767[(11)]);
var inst_23731 = (state_23767[(8)]);
var tmp23784 = inst_23731;
var inst_23731__$1 = tmp23784;
var inst_23732 = inst_23740;
var state_23767__$1 = (function (){var statearr_23788 = state_23767;
(statearr_23788[(7)] = inst_23732);

(statearr_23788[(8)] = inst_23731__$1);

return statearr_23788;
})();
var statearr_23789_23815 = state_23767__$1;
(statearr_23789_23815[(2)] = null);

(statearr_23789_23815[(1)] = (2));


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
});})(c__20410__auto___23801,out))
;
return ((function (switch__20389__auto__,c__20410__auto___23801,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_23793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23793[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_23793[(1)] = (1));

return statearr_23793;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_23767){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_23767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e23794){if((e23794 instanceof Object)){
var ex__20393__auto__ = e23794;
var statearr_23795_23816 = state_23767;
(statearr_23795_23816[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23817 = state_23767;
state_23767 = G__23817;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_23767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_23767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___23801,out))
})();
var state__20412__auto__ = (function (){var statearr_23796 = f__20411__auto__.call(null);
(statearr_23796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___23801);

return statearr_23796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___23801,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23818 = [];
var len__19349__auto___23892 = arguments.length;
var i__19350__auto___23893 = (0);
while(true){
if((i__19350__auto___23893 < len__19349__auto___23892)){
args23818.push((arguments[i__19350__auto___23893]));

var G__23894 = (i__19350__auto___23893 + (1));
i__19350__auto___23893 = G__23894;
continue;
} else {
}
break;
}

var G__23820 = args23818.length;
switch (G__23820) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23818.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20410__auto___23896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20410__auto___23896,out){
return (function (){
var f__20411__auto__ = (function (){var switch__20389__auto__ = ((function (c__20410__auto___23896,out){
return (function (state_23862){
var state_val_23863 = (state_23862[(1)]);
if((state_val_23863 === (7))){
var inst_23858 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
var statearr_23864_23897 = state_23862__$1;
(statearr_23864_23897[(2)] = inst_23858);

(statearr_23864_23897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (1))){
var inst_23821 = [];
var inst_23822 = inst_23821;
var inst_23823 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23862__$1 = (function (){var statearr_23865 = state_23862;
(statearr_23865[(7)] = inst_23822);

(statearr_23865[(8)] = inst_23823);

return statearr_23865;
})();
var statearr_23866_23898 = state_23862__$1;
(statearr_23866_23898[(2)] = null);

(statearr_23866_23898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (4))){
var inst_23826 = (state_23862[(9)]);
var inst_23826__$1 = (state_23862[(2)]);
var inst_23827 = (inst_23826__$1 == null);
var inst_23828 = cljs.core.not.call(null,inst_23827);
var state_23862__$1 = (function (){var statearr_23867 = state_23862;
(statearr_23867[(9)] = inst_23826__$1);

return statearr_23867;
})();
if(inst_23828){
var statearr_23868_23899 = state_23862__$1;
(statearr_23868_23899[(1)] = (5));

} else {
var statearr_23869_23900 = state_23862__$1;
(statearr_23869_23900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (15))){
var inst_23852 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
var statearr_23870_23901 = state_23862__$1;
(statearr_23870_23901[(2)] = inst_23852);

(statearr_23870_23901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (13))){
var state_23862__$1 = state_23862;
var statearr_23871_23902 = state_23862__$1;
(statearr_23871_23902[(2)] = null);

(statearr_23871_23902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (6))){
var inst_23822 = (state_23862[(7)]);
var inst_23847 = inst_23822.length;
var inst_23848 = (inst_23847 > (0));
var state_23862__$1 = state_23862;
if(cljs.core.truth_(inst_23848)){
var statearr_23872_23903 = state_23862__$1;
(statearr_23872_23903[(1)] = (12));

} else {
var statearr_23873_23904 = state_23862__$1;
(statearr_23873_23904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (3))){
var inst_23860 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23862__$1,inst_23860);
} else {
if((state_val_23863 === (12))){
var inst_23822 = (state_23862[(7)]);
var inst_23850 = cljs.core.vec.call(null,inst_23822);
var state_23862__$1 = state_23862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23862__$1,(15),out,inst_23850);
} else {
if((state_val_23863 === (2))){
var state_23862__$1 = state_23862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23862__$1,(4),ch);
} else {
if((state_val_23863 === (11))){
var inst_23826 = (state_23862[(9)]);
var inst_23830 = (state_23862[(10)]);
var inst_23840 = (state_23862[(2)]);
var inst_23841 = [];
var inst_23842 = inst_23841.push(inst_23826);
var inst_23822 = inst_23841;
var inst_23823 = inst_23830;
var state_23862__$1 = (function (){var statearr_23874 = state_23862;
(statearr_23874[(11)] = inst_23840);

(statearr_23874[(7)] = inst_23822);

(statearr_23874[(12)] = inst_23842);

(statearr_23874[(8)] = inst_23823);

return statearr_23874;
})();
var statearr_23875_23905 = state_23862__$1;
(statearr_23875_23905[(2)] = null);

(statearr_23875_23905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (9))){
var inst_23822 = (state_23862[(7)]);
var inst_23838 = cljs.core.vec.call(null,inst_23822);
var state_23862__$1 = state_23862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23862__$1,(11),out,inst_23838);
} else {
if((state_val_23863 === (5))){
var inst_23826 = (state_23862[(9)]);
var inst_23830 = (state_23862[(10)]);
var inst_23823 = (state_23862[(8)]);
var inst_23830__$1 = f.call(null,inst_23826);
var inst_23831 = cljs.core._EQ_.call(null,inst_23830__$1,inst_23823);
var inst_23832 = cljs.core.keyword_identical_QMARK_.call(null,inst_23823,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23833 = (inst_23831) || (inst_23832);
var state_23862__$1 = (function (){var statearr_23876 = state_23862;
(statearr_23876[(10)] = inst_23830__$1);

return statearr_23876;
})();
if(cljs.core.truth_(inst_23833)){
var statearr_23877_23906 = state_23862__$1;
(statearr_23877_23906[(1)] = (8));

} else {
var statearr_23878_23907 = state_23862__$1;
(statearr_23878_23907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (14))){
var inst_23855 = (state_23862[(2)]);
var inst_23856 = cljs.core.async.close_BANG_.call(null,out);
var state_23862__$1 = (function (){var statearr_23880 = state_23862;
(statearr_23880[(13)] = inst_23855);

return statearr_23880;
})();
var statearr_23881_23908 = state_23862__$1;
(statearr_23881_23908[(2)] = inst_23856);

(statearr_23881_23908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (10))){
var inst_23845 = (state_23862[(2)]);
var state_23862__$1 = state_23862;
var statearr_23882_23909 = state_23862__$1;
(statearr_23882_23909[(2)] = inst_23845);

(statearr_23882_23909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23863 === (8))){
var inst_23822 = (state_23862[(7)]);
var inst_23826 = (state_23862[(9)]);
var inst_23830 = (state_23862[(10)]);
var inst_23835 = inst_23822.push(inst_23826);
var tmp23879 = inst_23822;
var inst_23822__$1 = tmp23879;
var inst_23823 = inst_23830;
var state_23862__$1 = (function (){var statearr_23883 = state_23862;
(statearr_23883[(7)] = inst_23822__$1);

(statearr_23883[(14)] = inst_23835);

(statearr_23883[(8)] = inst_23823);

return statearr_23883;
})();
var statearr_23884_23910 = state_23862__$1;
(statearr_23884_23910[(2)] = null);

(statearr_23884_23910[(1)] = (2));


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
});})(c__20410__auto___23896,out))
;
return ((function (switch__20389__auto__,c__20410__auto___23896,out){
return (function() {
var cljs$core$async$state_machine__20390__auto__ = null;
var cljs$core$async$state_machine__20390__auto____0 = (function (){
var statearr_23888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23888[(0)] = cljs$core$async$state_machine__20390__auto__);

(statearr_23888[(1)] = (1));

return statearr_23888;
});
var cljs$core$async$state_machine__20390__auto____1 = (function (state_23862){
while(true){
var ret_value__20391__auto__ = (function (){try{while(true){
var result__20392__auto__ = switch__20389__auto__.call(null,state_23862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20392__auto__;
}
break;
}
}catch (e23889){if((e23889 instanceof Object)){
var ex__20393__auto__ = e23889;
var statearr_23890_23911 = state_23862;
(statearr_23890_23911[(5)] = ex__20393__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23912 = state_23862;
state_23862 = G__23912;
continue;
} else {
return ret_value__20391__auto__;
}
break;
}
});
cljs$core$async$state_machine__20390__auto__ = function(state_23862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20390__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20390__auto____1.call(this,state_23862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20390__auto____0;
cljs$core$async$state_machine__20390__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20390__auto____1;
return cljs$core$async$state_machine__20390__auto__;
})()
;})(switch__20389__auto__,c__20410__auto___23896,out))
})();
var state__20412__auto__ = (function (){var statearr_23891 = f__20411__auto__.call(null);
(statearr_23891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20410__auto___23896);

return statearr_23891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20412__auto__);
});})(c__20410__auto___23896,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1457675244248