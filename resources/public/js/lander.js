if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
var k;
function v(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function fa(a) {
  return Array.prototype.join.call(arguments, "");
}
Math.random();
function ha(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ka(a, b) {
  null != a && this.append.apply(this, arguments);
}
k = ka.prototype;
k.Ha = "";
k.set = function(a) {
  this.Ha = "" + a;
};
k.append = function(a, b, c) {
  this.Ha += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ha += arguments[d];
    }
  }
  return this;
};
k.clear = function() {
  this.Ha = "";
};
k.toString = function() {
  return this.Ha;
};
function ma(a, b) {
  a.sort(b || na);
}
function oa(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || na;
  ma(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function na(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;if ("undefined" === typeof pa) {
  var pa = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var qa = null;
if ("undefined" === typeof ra) {
  var ra = null
}
function sa() {
  return new ua(null, 5, [va, !0, wa, !0, xa, !1, Aa, !1, Ba, null], null);
}
function x(a) {
  return null != a && !1 !== a;
}
function Da(a) {
  return a instanceof Array;
}
function Ea(a) {
  return x(a) ? !1 : !0;
}
function A(a, b) {
  return a[v(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function Fa(a) {
  return null == a ? null : a.constructor;
}
function B(a, b) {
  var c = Fa(b), c = x(x(c) ? c.Nb : c) ? c.Mb : v(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ga(a) {
  var b = a.Mb;
  return x(b) ? b : "" + D(a);
}
var Ha = "undefined" !== typeof Symbol && "function" === v(Symbol) ? Symbol.iterator : "@@iterator";
function Ia(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ja = {}, Ka = {}, La = function La(b) {
  if (b ? b.ka : b) {
    return b.ka(b);
  }
  var c;
  c = La[v(null == b ? null : b)];
  if (!c && (c = La._, !c)) {
    throw B("ICounted.-count", b);
  }
  return c.call(null, b);
}, Ma = function Ma(b, c) {
  if (b ? b.N : b) {
    return b.N(b, c);
  }
  var d;
  d = Ma[v(null == b ? null : b)];
  if (!d && (d = Ma._, !d)) {
    throw B("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Na = {}, E = function E() {
  switch(arguments.length) {
    case 2:
      return E.a(arguments[0], arguments[1]);
    case 3:
      return E.h(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
E.a = function(a, b) {
  if (a ? a.O : a) {
    return a.O(a, b);
  }
  var c;
  c = E[v(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw B("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
E.h = function(a, b, c) {
  if (a ? a.ra : a) {
    return a.ra(a, b, c);
  }
  var d;
  d = E[v(null == a ? null : a)];
  if (!d && (d = E._, !d)) {
    throw B("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
E.B = 3;
var Oa = {}, Pa = function Pa(b) {
  if (b ? b.ia : b) {
    return b.ia(b);
  }
  var c;
  c = Pa[v(null == b ? null : b)];
  if (!c && (c = Pa._, !c)) {
    throw B("ISeq.-first", b);
  }
  return c.call(null, b);
}, Ra = function Ra(b) {
  if (b ? b.pa : b) {
    return b.pa(b);
  }
  var c;
  c = Ra[v(null == b ? null : b)];
  if (!c && (c = Ra._, !c)) {
    throw B("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Sa = {}, Ta = {}, Ua = function Ua() {
  switch(arguments.length) {
    case 2:
      return Ua.a(arguments[0], arguments[1]);
    case 3:
      return Ua.h(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Ua.a = function(a, b) {
  if (a ? a.la : a) {
    return a.la(a, b);
  }
  var c;
  c = Ua[v(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw B("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Ua.h = function(a, b, c) {
  if (a ? a.K : a) {
    return a.K(a, b, c);
  }
  var d;
  d = Ua[v(null == a ? null : a)];
  if (!d && (d = Ua._, !d)) {
    throw B("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Ua.B = 3;
var Va = function Va(b, c, d) {
  if (b ? b.Pa : b) {
    return b.Pa(b, c, d);
  }
  var e;
  e = Va[v(null == b ? null : b)];
  if (!e && (e = Va._, !e)) {
    throw B("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Wa = {}, Xa = {}, Za = function Za(b) {
  if (b ? b.pb : b) {
    return b.pb();
  }
  var c;
  c = Za[v(null == b ? null : b)];
  if (!c && (c = Za._, !c)) {
    throw B("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, $a = function $a(b) {
  if (b ? b.qb : b) {
    return b.qb();
  }
  var c;
  c = $a[v(null == b ? null : b)];
  if (!c && (c = $a._, !c)) {
    throw B("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, ab = {}, bb = function bb(b, c, d) {
  if (b ? b.rb : b) {
    return b.rb(b, c, d);
  }
  var e;
  e = bb[v(null == b ? null : b)];
  if (!e && (e = bb._, !e)) {
    throw B("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, cb = function cb(b) {
  if (b ? b.Bb : b) {
    return b.state;
  }
  var c;
  c = cb[v(null == b ? null : b)];
  if (!c && (c = cb._, !c)) {
    throw B("IDeref.-deref", b);
  }
  return c.call(null, b);
}, db = {}, eb = function eb(b) {
  if (b ? b.L : b) {
    return b.L(b);
  }
  var c;
  c = eb[v(null == b ? null : b)];
  if (!c && (c = eb._, !c)) {
    throw B("IMeta.-meta", b);
  }
  return c.call(null, b);
}, fb = {}, gb = function gb(b, c) {
  if (b ? b.S : b) {
    return b.S(b, c);
  }
  var d;
  d = gb[v(null == b ? null : b)];
  if (!d && (d = gb._, !d)) {
    throw B("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, hb = {}, ib = function ib() {
  switch(arguments.length) {
    case 2:
      return ib.a(arguments[0], arguments[1]);
    case 3:
      return ib.h(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
ib.a = function(a, b) {
  if (a ? a.ga : a) {
    return a.ga(a, b);
  }
  var c;
  c = ib[v(null == a ? null : a)];
  if (!c && (c = ib._, !c)) {
    throw B("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
ib.h = function(a, b, c) {
  if (a ? a.ha : a) {
    return a.ha(a, b, c);
  }
  var d;
  d = ib[v(null == a ? null : a)];
  if (!d && (d = ib._, !d)) {
    throw B("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
ib.B = 3;
var jb = function jb(b, c) {
  if (b ? b.v : b) {
    return b.v(b, c);
  }
  var d;
  d = jb[v(null == b ? null : b)];
  if (!d && (d = jb._, !d)) {
    throw B("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, kb = function kb(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = kb[v(null == b ? null : b)];
  if (!c && (c = kb._, !c)) {
    throw B("IHash.-hash", b);
  }
  return c.call(null, b);
}, lb = {}, nb = function nb(b) {
  if (b ? b.R : b) {
    return b.R(b);
  }
  var c;
  c = nb[v(null == b ? null : b)];
  if (!c && (c = nb._, !c)) {
    throw B("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, ob = {}, pb = {}, qb = function qb(b) {
  if (b ? b.cb : b) {
    return b.cb(b);
  }
  var c;
  c = qb[v(null == b ? null : b)];
  if (!c && (c = qb._, !c)) {
    throw B("IReversible.-rseq", b);
  }
  return c.call(null, b);
}, rb = function rb(b, c) {
  if (b ? b.xb : b) {
    return b.xb(0, c);
  }
  var d;
  d = rb[v(null == b ? null : b)];
  if (!d && (d = rb._, !d)) {
    throw B("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, sb = {}, tb = function tb(b, c, d) {
  if (b ? b.I : b) {
    return b.I(b, c, d);
  }
  var e;
  e = tb[v(null == b ? null : b)];
  if (!e && (e = tb._, !e)) {
    throw B("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, ub = function ub(b, c, d) {
  if (b ? b.wb : b) {
    return b.wb(0, c, d);
  }
  var e;
  e = ub[v(null == b ? null : b)];
  if (!e && (e = ub._, !e)) {
    throw B("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, vb = function vb(b) {
  if (b ? b.Ra : b) {
    return b.Ra(b);
  }
  var c;
  c = vb[v(null == b ? null : b)];
  if (!c && (c = vb._, !c)) {
    throw B("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, wb = function wb(b, c) {
  if (b ? b.eb : b) {
    return b.eb(b, c);
  }
  var d;
  d = wb[v(null == b ? null : b)];
  if (!d && (d = wb._, !d)) {
    throw B("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, xb = function xb(b) {
  if (b ? b.fb : b) {
    return b.fb(b);
  }
  var c;
  c = xb[v(null == b ? null : b)];
  if (!c && (c = xb._, !c)) {
    throw B("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, yb = function yb(b, c, d) {
  if (b ? b.Xa : b) {
    return b.Xa(b, c, d);
  }
  var e;
  e = yb[v(null == b ? null : b)];
  if (!e && (e = yb._, !e)) {
    throw B("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, zb = function zb(b, c, d) {
  if (b ? b.vb : b) {
    return b.vb(0, c, d);
  }
  var e;
  e = zb[v(null == b ? null : b)];
  if (!e && (e = zb._, !e)) {
    throw B("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Ab = {}, Bb = function Bb(b, c) {
  if (b ? b.La : b) {
    return b.La(b, c);
  }
  var d;
  d = Bb[v(null == b ? null : b)];
  if (!d && (d = Bb._, !d)) {
    throw B("IComparable.-compare", b);
  }
  return d.call(null, b, c);
}, Cb = function Cb(b) {
  if (b ? b.sb : b) {
    return b.sb();
  }
  var c;
  c = Cb[v(null == b ? null : b)];
  if (!c && (c = Cb._, !c)) {
    throw B("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Db = function Db(b) {
  if (b ? b.mb : b) {
    return b.mb(b);
  }
  var c;
  c = Db[v(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw B("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Fb = function Fb(b) {
  if (b ? b.nb : b) {
    return b.nb(b);
  }
  var c;
  c = Fb[v(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw B("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Gb = function Gb(b) {
  if (b ? b.lb : b) {
    return b.lb(b);
  }
  var c;
  c = Gb[v(null == b ? null : b)];
  if (!c && (c = Gb._, !c)) {
    throw B("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Hb = function Hb(b) {
  if (b ? b.Ua : b) {
    return b.Ua(b);
  }
  var c;
  c = Hb[v(null == b ? null : b)];
  if (!c && (c = Hb._, !c)) {
    throw B("INamed.-name", b);
  }
  return c.call(null, b);
}, Ib = function Ib(b) {
  if (b ? b.Va : b) {
    return b.Va(b);
  }
  var c;
  c = Ib[v(null == b ? null : b)];
  if (!c && (c = Ib._, !c)) {
    throw B("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Jb = function Jb(b, c) {
  if (b ? b.Hb : b) {
    return b.Hb(b, c);
  }
  var d;
  d = Jb[v(null == b ? null : b)];
  if (!d && (d = Jb._, !d)) {
    throw B("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Kb = function Kb() {
  switch(arguments.length) {
    case 2:
      return Kb.a(arguments[0], arguments[1]);
    case 3:
      return Kb.h(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Kb.A(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Kb.F(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Kb.a = function(a, b) {
  if (a ? a.Ib : a) {
    return a.Ib(a, b);
  }
  var c;
  c = Kb[v(null == a ? null : a)];
  if (!c && (c = Kb._, !c)) {
    throw B("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Kb.h = function(a, b, c) {
  if (a ? a.Jb : a) {
    return a.Jb(a, b, c);
  }
  var d;
  d = Kb[v(null == a ? null : a)];
  if (!d && (d = Kb._, !d)) {
    throw B("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Kb.A = function(a, b, c, d) {
  if (a ? a.Kb : a) {
    return a.Kb(a, b, c, d);
  }
  var e;
  e = Kb[v(null == a ? null : a)];
  if (!e && (e = Kb._, !e)) {
    throw B("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Kb.F = function(a, b, c, d, e) {
  if (a ? a.Lb : a) {
    return a.Lb(a, b, c, d, e);
  }
  var f;
  f = Kb[v(null == a ? null : a)];
  if (!f && (f = Kb._, !f)) {
    throw B("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Kb.B = 5;
var Lb = function Lb(b) {
  if (b ? b.Ta : b) {
    return b.Ta(b);
  }
  var c;
  c = Lb[v(null == b ? null : b)];
  if (!c && (c = Lb._, !c)) {
    throw B("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Mb(a) {
  this.Qb = a;
  this.i = 1073741824;
  this.C = 0;
}
Mb.prototype.xb = function(a, b) {
  return this.Qb.append(b);
};
function Nb(a) {
  var b = new ka;
  a.I(null, new Mb(b), sa());
  return "" + D(b);
}
var Pb = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Qb(a) {
  a = Pb(a | 0, -862048943);
  return Pb(a << 15 | a >>> -15, 461845907);
}
function Rb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Pb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Sb(a, b) {
  var c = (a | 0) ^ b, c = Pb(c ^ c >>> 16, -2048144789), c = Pb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Tb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Rb(c, Qb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Qb(a.charCodeAt(a.length - 1)) : b;
  return Sb(b, Pb(2, a.length));
}
var Ub = {}, Vb = 0;
function Wb(a) {
  255 < Vb && (Ub = {}, Vb = 0);
  var b = Ub[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Pb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Ub[a] = b;
    Vb += 1;
  }
  return a = b;
}
function Xb(a) {
  a && (a.i & 4194304 || a.Ub) ? a = a.H(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Wb(a), 0 !== a && (a = Qb(a), a = Rb(0, a), a = Sb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : kb(a);
  return a;
}
function Yb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Zb(a, b) {
  if (a.Ba === b.Ba) {
    return 0;
  }
  var c = Ea(a.ma);
  if (x(c ? b.ma : c)) {
    return -1;
  }
  if (x(a.ma)) {
    if (Ea(b.ma)) {
      return 1;
    }
    c = na(a.ma, b.ma);
    return 0 === c ? na(a.name, b.name) : c;
  }
  return na(a.name, b.name);
}
function $b(a, b, c, d, e) {
  this.ma = a;
  this.name = b;
  this.Ba = c;
  this.Ka = d;
  this.sa = e;
  this.i = 2154168321;
  this.C = 4096;
}
k = $b.prototype;
k.toString = function() {
  return this.Ba;
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.v = function(a, b) {
  return b instanceof $b ? this.Ba === b.Ba : !1;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ua.h(c, this, null);
      case 3:
        return Ua.h(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Ua.h(c, this, null);
  };
  a.h = function(a, c, d) {
    return Ua.h(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
k.b = function(a) {
  return Ua.h(a, this, null);
};
k.a = function(a, b) {
  return Ua.h(a, this, b);
};
k.L = function() {
  return this.sa;
};
k.S = function(a, b) {
  return new $b(this.ma, this.name, this.Ba, this.Ka, b);
};
k.H = function() {
  var a = this.Ka;
  return null != a ? a : this.Ka = a = Yb(Tb(this.name), Wb(this.ma));
};
k.Ua = function() {
  return this.name;
};
k.Va = function() {
  return this.ma;
};
k.I = function(a, b) {
  return rb(b, this.Ba);
};
function ac(a, b) {
  var c = null != a ? [D(a), D("/"), D(b)].join("") : b;
  return new $b(a, b, c, null, null);
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.Wb)) {
    return a.R(null);
  }
  if (Da(a) || "string" === typeof a) {
    return 0 === a.length ? null : new H(a, 0);
  }
  if (A(lb, a)) {
    return nb(a);
  }
  throw Error([D(a), D(" is not ISeqable")].join(""));
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.Wa)) {
    return a.ia(null);
  }
  a = F(a);
  return null == a ? null : Pa(a);
}
function bc(a) {
  return null != a ? a && (a.i & 64 || a.Wa) ? a.pa(null) : (a = F(a)) ? Ra(a) : cc : cc;
}
function J(a) {
  return null == a ? null : a && (a.i & 128 || a.bb) ? a.na(null) : F(bc(a));
}
var dc = function dc() {
  switch(arguments.length) {
    case 1:
      return dc.b(arguments[0]);
    case 2:
      return dc.a(arguments[0], arguments[1]);
    default:
      return dc.l(arguments[0], arguments[1], new H(Array.prototype.slice.call(arguments, 2), 0));
  }
};
dc.b = function() {
  return !0;
};
dc.a = function(a, b) {
  return null == a ? null == b : a === b || jb(a, b);
};
dc.l = function(a, b, c) {
  for (;;) {
    if (dc.a(a, b)) {
      if (J(c)) {
        a = b, b = I(c), c = J(c);
      } else {
        return dc.a(b, I(c));
      }
    } else {
      return !1;
    }
  }
};
dc.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  c = J(c);
  return dc.l(b, a, c);
};
dc.B = 2;
function ec(a) {
  this.D = a;
}
ec.prototype.next = function() {
  if (null != this.D) {
    var a = I(this.D);
    this.D = J(this.D);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
function gc(a) {
  return new ec(F(a));
}
function hc(a, b) {
  var c = Qb(a), c = Rb(0, c);
  return Sb(c, b);
}
function ic(a) {
  var b = 0, c = 1;
  for (a = F(a);;) {
    if (null != a) {
      b += 1, c = Pb(31, c) + Xb(I(a)) | 0, a = J(a);
    } else {
      return hc(c, b);
    }
  }
}
var jc = hc(1, 0);
function kc(a) {
  var b = 0, c = 0;
  for (a = F(a);;) {
    if (null != a) {
      b += 1, c = c + Xb(I(a)) | 0, a = J(a);
    } else {
      return hc(c, b);
    }
  }
}
var lc = hc(0, 0);
Ka["null"] = !0;
La["null"] = function() {
  return 0;
};
Date.prototype.v = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.Qa = !0;
Date.prototype.La = function(a, b) {
  if (b instanceof Date) {
    return na(this.valueOf(), b.valueOf());
  }
  throw Error([D("Cannot compare "), D(this), D(" to "), D(b)].join(""));
};
jb.number = function(a, b) {
  return a === b;
};
Ja["function"] = !0;
db["function"] = !0;
eb["function"] = function() {
  return null;
};
kb._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
function mc(a) {
  return a + 1;
}
function K(a) {
  return cb(a);
}
function nc(a, b) {
  var c = La(a);
  if (0 === c) {
    return b.o ? b.o() : b.call(null);
  }
  for (var d = E.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = E.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function oc(a, b, c) {
  var d = La(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = E.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function pc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.o ? b.o() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function qc(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function rc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      d += 1;
    } else {
      return c;
    }
  }
}
function sc(a) {
  return a ? a.i & 2 || a.Ab ? !0 : a.i ? !1 : A(Ka, a) : A(Ka, a);
}
function tc(a) {
  return a ? a.i & 16 || a.tb ? !0 : a.i ? !1 : A(Na, a) : A(Na, a);
}
function uc(a, b) {
  this.c = a;
  this.m = b;
}
uc.prototype.gb = function() {
  return this.m < this.c.length;
};
uc.prototype.next = function() {
  var a = this.c[this.m];
  this.m += 1;
  return a;
};
function H(a, b) {
  this.c = a;
  this.m = b;
  this.i = 166199550;
  this.C = 8192;
}
k = H.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.O = function(a, b) {
  var c = b + this.m;
  return c < this.c.length ? this.c[c] : null;
};
k.ra = function(a, b, c) {
  a = b + this.m;
  return a < this.c.length ? this.c[a] : c;
};
k.Ta = function() {
  return new uc(this.c, this.m);
};
k.na = function() {
  return this.m + 1 < this.c.length ? new H(this.c, this.m + 1) : null;
};
k.ka = function() {
  var a = this.c.length - this.m;
  return 0 > a ? 0 : a;
};
k.cb = function() {
  var a = La(this);
  return 0 < a ? new vc(this, a - 1, null) : null;
};
k.H = function() {
  return ic(this);
};
k.v = function(a, b) {
  return wc.a ? wc.a(this, b) : wc.call(null, this, b);
};
k.ga = function(a, b) {
  return rc(this.c, b, this.c[this.m], this.m + 1);
};
k.ha = function(a, b, c) {
  return rc(this.c, b, c, this.m);
};
k.ia = function() {
  return this.c[this.m];
};
k.pa = function() {
  return this.m + 1 < this.c.length ? new H(this.c, this.m + 1) : cc;
};
k.R = function() {
  return this.m < this.c.length ? this : null;
};
k.N = function(a, b) {
  return L.a ? L.a(b, this) : L.call(null, b, this);
};
H.prototype[Ha] = function() {
  return gc(this);
};
function xc(a, b) {
  return b < a.length ? new H(a, b) : null;
}
function yc() {
  switch(arguments.length) {
    case 1:
      return xc(arguments[0], 0);
    case 2:
      return xc(arguments[0], arguments[1]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function vc(a, b, c) {
  this.ab = a;
  this.m = b;
  this.s = c;
  this.i = 32374990;
  this.C = 8192;
}
k = vc.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.s;
};
k.na = function() {
  return 0 < this.m ? new vc(this.ab, this.m - 1, null) : null;
};
k.ka = function() {
  return this.m + 1;
};
k.H = function() {
  return ic(this);
};
k.v = function(a, b) {
  return wc.a ? wc.a(this, b) : wc.call(null, this, b);
};
k.ga = function(a, b) {
  return zc ? zc(b, this) : Ac.call(null, b, this);
};
k.ha = function(a, b, c) {
  return Bc ? Bc(b, c, this) : Ac.call(null, b, c, this);
};
k.ia = function() {
  return E.a(this.ab, this.m);
};
k.pa = function() {
  return 0 < this.m ? new vc(this.ab, this.m - 1, null) : cc;
};
k.R = function() {
  return this;
};
k.S = function(a, b) {
  return new vc(this.ab, this.m, b);
};
k.N = function(a, b) {
  return L.a ? L.a(b, this) : L.call(null, b, this);
};
vc.prototype[Ha] = function() {
  return gc(this);
};
jb._ = function(a, b) {
  return a === b;
};
var Cc = function Cc() {
  switch(arguments.length) {
    case 0:
      return Cc.o();
    case 1:
      return Cc.b(arguments[0]);
    case 2:
      return Cc.a(arguments[0], arguments[1]);
    default:
      return Cc.l(arguments[0], arguments[1], new H(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Cc.o = function() {
  return Dc;
};
Cc.b = function(a) {
  return a;
};
Cc.a = function(a, b) {
  return null != a ? Ma(a, b) : Ma(cc, b);
};
Cc.l = function(a, b, c) {
  for (;;) {
    if (x(c)) {
      a = Cc.a(a, b), b = I(c), c = J(c);
    } else {
      return Cc.a(a, b);
    }
  }
};
Cc.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  c = J(c);
  return Cc.l(b, a, c);
};
Cc.B = 2;
function Ec(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.Ab)) {
      a = a.ka(null);
    } else {
      if (Da(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (A(Ka, a)) {
            a = La(a);
          } else {
            a: {
              a = F(a);
              for (var b = 0;;) {
                if (sc(a)) {
                  a = b + La(a);
                  break a;
                }
                a = J(a);
                b += 1;
              }
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function Fc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return F(a) ? I(a) : c;
    }
    if (tc(a)) {
      return E.h(a, b, c);
    }
    if (F(a)) {
      var d = J(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function Gc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.i & 16 || a.tb)) {
    return a.O(null, b);
  }
  if (Da(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (A(Na, a)) {
    return E.a(a, b);
  }
  if (a ? a.i & 64 || a.Wa || (a.i ? 0 : A(Oa, a)) : A(Oa, a)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (F(c)) {
            c = I(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (tc(c)) {
          c = E.a(c, d);
          break a;
        }
        if (F(c)) {
          c = J(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  throw Error([D("nth not supported on this type "), D(Ga(Fa(a)))].join(""));
}
function M(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.i & 16 || a.tb)) {
    return a.ra(null, b, null);
  }
  if (Da(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (A(Na, a)) {
    return E.a(a, b);
  }
  if (a ? a.i & 64 || a.Wa || (a.i ? 0 : A(Oa, a)) : A(Oa, a)) {
    return Fc(a, b);
  }
  throw Error([D("nth not supported on this type "), D(Ga(Fa(a)))].join(""));
}
function Hc(a, b) {
  return null == a ? null : a && (a.i & 256 || a.ub) ? a.la(null, b) : Da(a) ? b < a.length ? a[b | 0] : null : "string" === typeof a ? b < a.length ? a[b | 0] : null : A(Ta, a) ? Ua.a(a, b) : null;
}
function Ic(a, b, c) {
  return null != a ? a && (a.i & 256 || a.ub) ? a.K(null, b, c) : Da(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : A(Ta, a) ? Ua.h(a, b, c) : c : c;
}
var Jc = function Jc() {
  switch(arguments.length) {
    case 3:
      return Jc.h(arguments[0], arguments[1], arguments[2]);
    default:
      return Jc.l(arguments[0], arguments[1], arguments[2], new H(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Jc.h = function(a, b, c) {
  if (null != a) {
    a = Va(a, b, c);
  } else {
    a: {
      a = [b];
      c = [c];
      b = a.length;
      var d = 0, e;
      for (e = vb(Kc);;) {
        if (d < b) {
          var f = d + 1;
          e = e.Xa(null, a[d], c[d]);
          d = f;
        } else {
          a = xb(e);
          break a;
        }
      }
    }
  }
  return a;
};
Jc.l = function(a, b, c, d) {
  for (;;) {
    if (a = Jc.h(a, b, c), x(d)) {
      b = I(d), c = I(J(d)), d = J(J(d));
    } else {
      return a;
    }
  }
};
Jc.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  var d = J(c), c = I(d), d = J(d);
  return Jc.l(b, a, c, d);
};
Jc.B = 3;
function Lc(a) {
  var b = "function" == v(a);
  return x(b) ? b : a ? x(x(null) ? null : a.zb) ? !0 : a.ac ? !1 : A(Ja, a) : A(Ja, a);
}
function Mc(a, b) {
  this.f = a;
  this.s = b;
  this.i = 393217;
  this.C = 0;
}
k = Mc.prototype;
k.L = function() {
  return this.s;
};
k.S = function(a, b) {
  return new Mc(this.f, b);
};
k.zb = !0;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C, y, G, Q) {
    a = this.f;
    return Nc.Sa ? Nc.Sa(a, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C, y, G, Q) : Nc.call(null, a, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C, y, G, Q);
  }
  function b(a, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C, y, G) {
    a = this;
    return a.f.ca ? a.f.ca(b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C, y, G) : a.f.call(null, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C, y, G);
  }
  function c(a, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C, y) {
    a = this;
    return a.f.ba ? a.f.ba(b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C, y) : a.f.call(null, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C, y);
  }
  function d(a, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C) {
    a = this;
    return a.f.aa ? a.f.aa(b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C) : a.f.call(null, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z, C);
  }
  function e(a, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z) {
    a = this;
    return a.f.$ ? a.f.$(b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z) : a.f.call(null, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w, z);
  }
  function f(a, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w) {
    a = this;
    return a.f.Z ? a.f.Z(b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w) : a.f.call(null, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u, w);
  }
  function g(a, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u) {
    a = this;
    return a.f.Y ? a.f.Y(b, c, d, e, f, g, h, m, l, n, p, q, r, t, u) : a.f.call(null, b, c, d, e, f, g, h, m, l, n, p, q, r, t, u);
  }
  function h(a, b, c, d, e, f, g, h, m, l, n, p, q, r, t) {
    a = this;
    return a.f.X ? a.f.X(b, c, d, e, f, g, h, m, l, n, p, q, r, t) : a.f.call(null, b, c, d, e, f, g, h, m, l, n, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, h, m, l, n, p, q, r) {
    a = this;
    return a.f.W ? a.f.W(b, c, d, e, f, g, h, m, l, n, p, q, r) : a.f.call(null, b, c, d, e, f, g, h, m, l, n, p, q, r);
  }
  function m(a, b, c, d, e, f, g, h, m, l, n, p, q) {
    a = this;
    return a.f.V ? a.f.V(b, c, d, e, f, g, h, m, l, n, p, q) : a.f.call(null, b, c, d, e, f, g, h, m, l, n, p, q);
  }
  function n(a, b, c, d, e, f, g, h, m, l, n, p) {
    a = this;
    return a.f.U ? a.f.U(b, c, d, e, f, g, h, m, l, n, p) : a.f.call(null, b, c, d, e, f, g, h, m, l, n, p);
  }
  function p(a, b, c, d, e, f, g, h, m, l, n) {
    a = this;
    return a.f.T ? a.f.T(b, c, d, e, f, g, h, m, l, n) : a.f.call(null, b, c, d, e, f, g, h, m, l, n);
  }
  function q(a, b, c, d, e, f, g, h, m, l) {
    a = this;
    return a.f.fa ? a.f.fa(b, c, d, e, f, g, h, m, l) : a.f.call(null, b, c, d, e, f, g, h, m, l);
  }
  function r(a, b, c, d, e, f, g, h, m) {
    a = this;
    return a.f.ea ? a.f.ea(b, c, d, e, f, g, h, m) : a.f.call(null, b, c, d, e, f, g, h, m);
  }
  function t(a, b, c, d, e, f, g, h) {
    a = this;
    return a.f.da ? a.f.da(b, c, d, e, f, g, h) : a.f.call(null, b, c, d, e, f, g, h);
  }
  function u(a, b, c, d, e, f, g) {
    a = this;
    return a.f.J ? a.f.J(b, c, d, e, f, g) : a.f.call(null, b, c, d, e, f, g);
  }
  function w(a, b, c, d, e, f) {
    a = this;
    return a.f.F ? a.f.F(b, c, d, e, f) : a.f.call(null, b, c, d, e, f);
  }
  function z(a, b, c, d, e) {
    a = this;
    return a.f.A ? a.f.A(b, c, d, e) : a.f.call(null, b, c, d, e);
  }
  function C(a, b, c, d) {
    a = this;
    return a.f.h ? a.f.h(b, c, d) : a.f.call(null, b, c, d);
  }
  function G(a, b, c) {
    a = this;
    return a.f.a ? a.f.a(b, c) : a.f.call(null, b, c);
  }
  function Q(a, b) {
    a = this;
    return a.f.b ? a.f.b(b) : a.f.call(null, b);
  }
  function ga(a) {
    a = this;
    return a.f.o ? a.f.o() : a.f.call(null);
  }
  var y = null, y = function(ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, y, Qa, Ya, mb, Eb, fc, Qc, Zd) {
    switch(arguments.length) {
      case 1:
        return ga.call(this, ya);
      case 2:
        return Q.call(this, ya, P);
      case 3:
        return G.call(this, ya, P, T);
      case 4:
        return C.call(this, ya, P, T, U);
      case 5:
        return z.call(this, ya, P, T, U, Y);
      case 6:
        return w.call(this, ya, P, T, U, Y, aa);
      case 7:
        return u.call(this, ya, P, T, U, Y, aa, da);
      case 8:
        return t.call(this, ya, P, T, U, Y, aa, da, ea);
      case 9:
        return r.call(this, ya, P, T, U, Y, aa, da, ea, ia);
      case 10:
        return q.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja);
      case 11:
        return p.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la);
      case 12:
        return n.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta);
      case 13:
        return m.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za);
      case 14:
        return l.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca);
      case 15:
        return h.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, y);
      case 16:
        return g.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, y, Qa);
      case 17:
        return f.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, y, Qa, Ya);
      case 18:
        return e.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, y, Qa, Ya, mb);
      case 19:
        return d.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, y, Qa, Ya, mb, Eb);
      case 20:
        return c.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, y, Qa, Ya, mb, Eb, fc);
      case 21:
        return b.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, y, Qa, Ya, mb, Eb, fc, Qc);
      case 22:
        return a.call(this, ya, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, y, Qa, Ya, mb, Eb, fc, Qc, Zd);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  y.b = ga;
  y.a = Q;
  y.h = G;
  y.A = C;
  y.F = z;
  y.J = w;
  y.da = u;
  y.ea = t;
  y.fa = r;
  y.T = q;
  y.U = p;
  y.V = n;
  y.W = m;
  y.X = l;
  y.Y = h;
  y.Z = g;
  y.$ = f;
  y.aa = e;
  y.ba = d;
  y.ca = c;
  y.ob = b;
  y.Sa = a;
  return y;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
k.o = function() {
  return this.f.o ? this.f.o() : this.f.call(null);
};
k.b = function(a) {
  return this.f.b ? this.f.b(a) : this.f.call(null, a);
};
k.a = function(a, b) {
  return this.f.a ? this.f.a(a, b) : this.f.call(null, a, b);
};
k.h = function(a, b, c) {
  return this.f.h ? this.f.h(a, b, c) : this.f.call(null, a, b, c);
};
k.A = function(a, b, c, d) {
  return this.f.A ? this.f.A(a, b, c, d) : this.f.call(null, a, b, c, d);
};
k.F = function(a, b, c, d, e) {
  return this.f.F ? this.f.F(a, b, c, d, e) : this.f.call(null, a, b, c, d, e);
};
k.J = function(a, b, c, d, e, f) {
  return this.f.J ? this.f.J(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f);
};
k.da = function(a, b, c, d, e, f, g) {
  return this.f.da ? this.f.da(a, b, c, d, e, f, g) : this.f.call(null, a, b, c, d, e, f, g);
};
k.ea = function(a, b, c, d, e, f, g, h) {
  return this.f.ea ? this.f.ea(a, b, c, d, e, f, g, h) : this.f.call(null, a, b, c, d, e, f, g, h);
};
k.fa = function(a, b, c, d, e, f, g, h, l) {
  return this.f.fa ? this.f.fa(a, b, c, d, e, f, g, h, l) : this.f.call(null, a, b, c, d, e, f, g, h, l);
};
k.T = function(a, b, c, d, e, f, g, h, l, m) {
  return this.f.T ? this.f.T(a, b, c, d, e, f, g, h, l, m) : this.f.call(null, a, b, c, d, e, f, g, h, l, m);
};
k.U = function(a, b, c, d, e, f, g, h, l, m, n) {
  return this.f.U ? this.f.U(a, b, c, d, e, f, g, h, l, m, n) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n);
};
k.V = function(a, b, c, d, e, f, g, h, l, m, n, p) {
  return this.f.V ? this.f.V(a, b, c, d, e, f, g, h, l, m, n, p) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p);
};
k.W = function(a, b, c, d, e, f, g, h, l, m, n, p, q) {
  return this.f.W ? this.f.W(a, b, c, d, e, f, g, h, l, m, n, p, q) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q);
};
k.X = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r) {
  return this.f.X ? this.f.X(a, b, c, d, e, f, g, h, l, m, n, p, q, r) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r);
};
k.Y = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) {
  return this.f.Y ? this.f.Y(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t);
};
k.Z = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) {
  return this.f.Z ? this.f.Z(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u);
};
k.$ = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w) {
  return this.f.$ ? this.f.$(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w);
};
k.aa = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z) {
  return this.f.aa ? this.f.aa(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z);
};
k.ba = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C) {
  return this.f.ba ? this.f.ba(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C);
};
k.ca = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G) {
  return this.f.ca ? this.f.ca(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G);
};
k.ob = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q) {
  var ga = this.f;
  return Nc.Sa ? Nc.Sa(ga, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q) : Nc.call(null, ga, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q);
};
function Oc(a) {
  var b = null != a;
  return (b ? a ? a.i & 131072 || a.Eb || (a.i ? 0 : A(db, a)) : A(db, a) : b) ? eb(a) : null;
}
function Pc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.Cb ? !0 : a.i ? !1 : A(Wa, a) : A(Wa, a);
}
function Rc(a) {
  return a ? a.i & 16384 || a.Yb ? !0 : a.i ? !1 : A(ab, a) : A(ab, a);
}
function Sc(a) {
  return a ? a.C & 512 || a.Sb ? !0 : !1 : !1;
}
function Tc(a) {
  var b = [];
  ha(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Uc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Vc = {};
function Wc(a) {
  return null == a ? !1 : a ? a.i & 64 || a.Wa ? !0 : a.i ? !1 : A(Oa, a) : A(Oa, a);
}
function Xc(a) {
  return x(a) ? !0 : !1;
}
function Yc(a, b) {
  return Ic(a, b, Vc) === Vc ? !1 : !0;
}
function Zc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return -1;
  }
  if (null == b) {
    return 1;
  }
  if ("number" === typeof a) {
    if ("number" === typeof b) {
      return na(a, b);
    }
    throw Error([D("Cannot compare "), D(a), D(" to "), D(b)].join(""));
  }
  if (a ? a.C & 2048 || a.Qa || (a.C ? 0 : A(Ab, a)) : A(Ab, a)) {
    return Bb(a, b);
  }
  if ("string" !== typeof a && !Da(a) && !0 !== a && !1 !== a || Fa(a) !== Fa(b)) {
    throw Error([D("Cannot compare "), D(a), D(" to "), D(b)].join(""));
  }
  return na(a, b);
}
function $c(a, b) {
  var c = Ec(a), d = Ec(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      if (0 === c) {
        c = 0;
      } else {
        a: {
          for (d = 0;;) {
            var e = Zc(Gc(a, d), Gc(b, d));
            if (0 === e && d + 1 < c) {
              d += 1;
            } else {
              c = e;
              break a;
            }
          }
        }
      }
    }
  }
  return c;
}
function ad() {
  return dc.a(Zc, Zc) ? Zc : function(a, b) {
    var c = Zc.a ? Zc.a(a, b) : Zc.call(null, a, b);
    return "number" === typeof c ? c : x(c) ? -1 : x(Zc.a ? Zc.a(b, a) : Zc.call(null, b, a)) ? 1 : 0;
  };
}
function bd(a) {
  if (F(a)) {
    a = cd.b ? cd.b(a) : cd.call(null, a);
    var b = ad();
    oa(a, b);
    a = F(a);
  } else {
    a = cc;
  }
  return a;
}
function Ac() {
  switch(arguments.length) {
    case 2:
      return zc(arguments[0], arguments[1]);
    case 3:
      return Bc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function zc(a, b) {
  var c = F(b);
  if (c) {
    var d = I(c), c = J(c);
    return dd ? dd(a, d, c) : ed.call(null, a, d, c);
  }
  return a.o ? a.o() : a.call(null);
}
function Bc(a, b, c) {
  for (c = F(c);;) {
    if (c) {
      var d = I(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      c = J(c);
    } else {
      return b;
    }
  }
}
function ed() {
  switch(arguments.length) {
    case 2:
      return fd(arguments[0], arguments[1]);
    case 3:
      return dd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function fd(a, b) {
  return b && (b.i & 524288 || b.Gb) ? b.ga(null, a) : Da(b) ? pc(b, a) : "string" === typeof b ? pc(b, a) : A(hb, b) ? ib.a(b, a) : zc(a, b);
}
function dd(a, b, c) {
  return c && (c.i & 524288 || c.Gb) ? c.ha(null, a, b) : Da(c) ? qc(c, a, b) : "string" === typeof c ? qc(c, a, b) : A(hb, c) ? ib.h(c, a, b) : Bc(a, b, c);
}
function gd(a) {
  return a;
}
var hd = function hd() {
  switch(arguments.length) {
    case 0:
      return hd.o();
    case 1:
      return hd.b(arguments[0]);
    case 2:
      return hd.a(arguments[0], arguments[1]);
    default:
      return hd.l(arguments[0], arguments[1], new H(Array.prototype.slice.call(arguments, 2), 0));
  }
};
hd.o = function() {
  return 0;
};
hd.b = function(a) {
  return a;
};
hd.a = function(a, b) {
  return a + b;
};
hd.l = function(a, b, c) {
  return dd(hd, a + b, c);
};
hd.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  c = J(c);
  return hd.l(b, a, c);
};
hd.B = 2;
var id = function id() {
  switch(arguments.length) {
    case 1:
      return id.b(arguments[0]);
    case 2:
      return id.a(arguments[0], arguments[1]);
    default:
      return id.l(arguments[0], arguments[1], new H(Array.prototype.slice.call(arguments, 2), 0));
  }
};
id.b = function(a) {
  return -a;
};
id.a = function(a, b) {
  return a - b;
};
id.l = function(a, b, c) {
  return dd(id, a - b, c);
};
id.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  c = J(c);
  return id.l(b, a, c);
};
id.B = 2;
var jd = function jd() {
  switch(arguments.length) {
    case 0:
      return jd.o();
    case 1:
      return jd.b(arguments[0]);
    case 2:
      return jd.a(arguments[0], arguments[1]);
    default:
      return jd.l(arguments[0], arguments[1], new H(Array.prototype.slice.call(arguments, 2), 0));
  }
};
jd.o = function() {
  return 1;
};
jd.b = function(a) {
  return a;
};
jd.a = function(a, b) {
  return a * b;
};
jd.l = function(a, b, c) {
  return dd(jd, a * b, c);
};
jd.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  c = J(c);
  return jd.l(b, a, c);
};
jd.B = 2;
function kd(a) {
  return a - 1;
}
var ld = function ld() {
  switch(arguments.length) {
    case 1:
      return ld.b(arguments[0]);
    case 2:
      return ld.a(arguments[0], arguments[1]);
    default:
      return ld.l(arguments[0], arguments[1], new H(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ld.b = function(a) {
  return a;
};
ld.a = function(a, b) {
  return a < b ? a : b;
};
ld.l = function(a, b, c) {
  return dd(ld, a < b ? a : b, c);
};
ld.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  c = J(c);
  return ld.l(b, a, c);
};
ld.B = 2;
function md(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor(a) : Math.ceil(a);
}
function nd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function od(a) {
  var b = 1;
  for (a = F(a);;) {
    if (a && 0 < b) {
      --b, a = J(a);
    } else {
      return a;
    }
  }
}
var D = function D() {
  switch(arguments.length) {
    case 0:
      return D.o();
    case 1:
      return D.b(arguments[0]);
    default:
      return D.l(arguments[0], new H(Array.prototype.slice.call(arguments, 1), 0));
  }
};
D.o = function() {
  return "";
};
D.b = function(a) {
  return null == a ? "" : fa(a);
};
D.l = function(a, b) {
  for (var c = new ka("" + D(a)), d = b;;) {
    if (x(d)) {
      c = c.append("" + D(I(d))), d = J(d);
    } else {
      return c.toString();
    }
  }
};
D.w = function(a) {
  var b = I(a);
  a = J(a);
  return D.l(b, a);
};
D.B = 1;
function wc(a, b) {
  var c;
  if (b ? b.i & 16777216 || b.Xb || (b.i ? 0 : A(ob, b)) : A(ob, b)) {
    if (sc(a) && sc(b) && Ec(a) !== Ec(b)) {
      c = !1;
    } else {
      a: {
        c = F(a);
        for (var d = F(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && dc.a(I(c), I(d))) {
            c = J(c), d = J(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return Xc(c);
}
function pd(a, b, c, d, e) {
  this.s = a;
  this.first = b;
  this.Da = c;
  this.count = d;
  this.u = e;
  this.i = 65937646;
  this.C = 8192;
}
k = pd.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.s;
};
k.na = function() {
  return 1 === this.count ? null : this.Da;
};
k.ka = function() {
  return this.count;
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return zc(b, this);
};
k.ha = function(a, b, c) {
  return Bc(b, c, this);
};
k.ia = function() {
  return this.first;
};
k.pa = function() {
  return 1 === this.count ? cc : this.Da;
};
k.R = function() {
  return this;
};
k.S = function(a, b) {
  return new pd(b, this.first, this.Da, this.count, this.u);
};
k.N = function(a, b) {
  return new pd(this.s, b, this, this.count + 1, null);
};
pd.prototype[Ha] = function() {
  return gc(this);
};
function qd(a) {
  this.s = a;
  this.i = 65937614;
  this.C = 8192;
}
k = qd.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.s;
};
k.na = function() {
  return null;
};
k.ka = function() {
  return 0;
};
k.H = function() {
  return jc;
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return zc(b, this);
};
k.ha = function(a, b, c) {
  return Bc(b, c, this);
};
k.ia = function() {
  return null;
};
k.pa = function() {
  return cc;
};
k.R = function() {
  return null;
};
k.S = function(a, b) {
  return new qd(b);
};
k.N = function(a, b) {
  return new pd(this.s, b, null, 1, null);
};
var cc = new qd(null);
qd.prototype[Ha] = function() {
  return gc(this);
};
function rd(a) {
  return (a ? a.i & 134217728 || a.Vb || (a.i ? 0 : A(pb, a)) : A(pb, a)) ? qb(a) : dd(Cc, cc, a);
}
function sd() {
  a: {
    var a = 0 < arguments.length ? new H(Array.prototype.slice.call(arguments, 0), 0) : null, b;
    if (a instanceof H && 0 === a.m) {
      b = a.c;
    } else {
      b: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.ia(null)), a = a.na(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var a = b.length, c = cc;;) {
      if (0 < a) {
        var d = a - 1, c = c.N(null, b[a - 1]), a = d
      } else {
        break a;
      }
    }
  }
  return c;
}
function td(a, b, c, d) {
  this.s = a;
  this.first = b;
  this.Da = c;
  this.u = d;
  this.i = 65929452;
  this.C = 8192;
}
k = td.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.s;
};
k.na = function() {
  return null == this.Da ? null : F(this.Da);
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return zc(b, this);
};
k.ha = function(a, b, c) {
  return Bc(b, c, this);
};
k.ia = function() {
  return this.first;
};
k.pa = function() {
  return null == this.Da ? cc : this.Da;
};
k.R = function() {
  return this;
};
k.S = function(a, b) {
  return new td(b, this.first, this.Da, this.u);
};
k.N = function(a, b) {
  return new td(null, b, this, this.u);
};
td.prototype[Ha] = function() {
  return gc(this);
};
function L(a, b) {
  var c = null == b;
  return (c ? c : b && (b.i & 64 || b.Wa)) ? new td(null, a, b, null) : new td(null, a, F(b), null);
}
function ud(a, b) {
  if (a.za === b.za) {
    return 0;
  }
  var c = Ea(a.ma);
  if (x(c ? b.ma : c)) {
    return -1;
  }
  if (x(a.ma)) {
    if (Ea(b.ma)) {
      return 1;
    }
    c = na(a.ma, b.ma);
    return 0 === c ? na(a.name, b.name) : c;
  }
  return na(a.name, b.name);
}
function N(a, b, c, d) {
  this.ma = a;
  this.name = b;
  this.za = c;
  this.Ka = d;
  this.i = 2153775105;
  this.C = 4096;
}
k = N.prototype;
k.toString = function() {
  return [D(":"), D(this.za)].join("");
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.v = function(a, b) {
  return b instanceof N ? this.za === b.za : !1;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Hc(c, this);
      case 3:
        return Ic(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Hc(c, this);
  };
  a.h = function(a, c, d) {
    return Ic(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
k.b = function(a) {
  return Hc(a, this);
};
k.a = function(a, b) {
  return Ic(a, this, b);
};
k.H = function() {
  var a = this.Ka;
  return null != a ? a : this.Ka = a = Yb(Tb(this.name), Wb(this.ma)) + 2654435769 | 0;
};
k.Ua = function() {
  return this.name;
};
k.Va = function() {
  return this.ma;
};
k.I = function(a, b) {
  return rb(b, [D(":"), D(this.za)].join(""));
};
var vd = function vd() {
  switch(arguments.length) {
    case 1:
      return vd.b(arguments[0]);
    case 2:
      return vd.a(arguments[0], arguments[1]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
vd.b = function(a) {
  if (a instanceof N) {
    return a;
  }
  if (a instanceof $b) {
    var b;
    if (a && (a.C & 4096 || a.Fb)) {
      b = a.Va(null);
    } else {
      throw Error([D("Doesn't support namespace: "), D(a)].join(""));
    }
    return new N(b, wd.b ? wd.b(a) : wd.call(null, a), a.Ba, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new N(b[0], b[1], a, null) : new N(null, b[0], a, null)) : null;
};
vd.a = function(a, b) {
  return new N(a, b, [D(x(a) ? [D(a), D("/")].join("") : null), D(b)].join(""), null);
};
vd.B = 2;
function xd(a, b, c, d) {
  this.s = a;
  this.Na = b;
  this.D = c;
  this.u = d;
  this.i = 32374988;
  this.C = 0;
}
k = xd.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
function yd(a) {
  null != a.Na && (a.D = a.Na.o ? a.Na.o() : a.Na.call(null), a.Na = null);
  return a.D;
}
k.L = function() {
  return this.s;
};
k.na = function() {
  nb(this);
  return null == this.D ? null : J(this.D);
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return zc(b, this);
};
k.ha = function(a, b, c) {
  return Bc(b, c, this);
};
k.ia = function() {
  nb(this);
  return null == this.D ? null : I(this.D);
};
k.pa = function() {
  nb(this);
  return null != this.D ? bc(this.D) : cc;
};
k.R = function() {
  yd(this);
  if (null == this.D) {
    return null;
  }
  for (var a = this.D;;) {
    if (a instanceof xd) {
      a = yd(a);
    } else {
      return this.D = a, F(this.D);
    }
  }
};
k.S = function(a, b) {
  return new xd(b, this.Na, this.D, this.u);
};
k.N = function(a, b) {
  return L(b, this);
};
xd.prototype[Ha] = function() {
  return gc(this);
};
function zd(a, b) {
  this.kb = a;
  this.end = b;
  this.i = 2;
  this.C = 0;
}
zd.prototype.add = function(a) {
  this.kb[this.end] = a;
  return this.end += 1;
};
zd.prototype.wa = function() {
  var a = new Ad(this.kb, 0, this.end);
  this.kb = null;
  return a;
};
zd.prototype.ka = function() {
  return this.end;
};
function Ad(a, b, c) {
  this.c = a;
  this.ja = b;
  this.end = c;
  this.i = 524306;
  this.C = 0;
}
k = Ad.prototype;
k.ka = function() {
  return this.end - this.ja;
};
k.O = function(a, b) {
  return this.c[this.ja + b];
};
k.ra = function(a, b, c) {
  return 0 <= b && b < this.end - this.ja ? this.c[this.ja + b] : c;
};
k.sb = function() {
  if (this.ja === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Ad(this.c, this.ja + 1, this.end);
};
k.ga = function(a, b) {
  return rc(this.c, b, this.c[this.ja], this.ja + 1);
};
k.ha = function(a, b, c) {
  return rc(this.c, b, c, this.ja);
};
function Bd(a, b, c, d) {
  this.wa = a;
  this.Aa = b;
  this.s = c;
  this.u = d;
  this.i = 31850732;
  this.C = 1536;
}
k = Bd.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.s;
};
k.na = function() {
  if (1 < La(this.wa)) {
    return new Bd(Cb(this.wa), this.Aa, this.s, null);
  }
  var a = nb(this.Aa);
  return null == a ? null : a;
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ia = function() {
  return E.a(this.wa, 0);
};
k.pa = function() {
  return 1 < La(this.wa) ? new Bd(Cb(this.wa), this.Aa, this.s, null) : null == this.Aa ? cc : this.Aa;
};
k.R = function() {
  return this;
};
k.mb = function() {
  return this.wa;
};
k.nb = function() {
  return null == this.Aa ? cc : this.Aa;
};
k.S = function(a, b) {
  return new Bd(this.wa, this.Aa, b, this.u);
};
k.N = function(a, b) {
  return L(b, this);
};
k.lb = function() {
  return null == this.Aa ? null : this.Aa;
};
Bd.prototype[Ha] = function() {
  return gc(this);
};
function Cd(a, b) {
  return 0 === La(a) ? b : new Bd(a, b, null, null);
}
function Dd(a, b) {
  a.add(b);
}
function cd(a) {
  for (var b = [];;) {
    if (F(a)) {
      b.push(I(a)), a = J(a);
    } else {
      return b;
    }
  }
}
function Ed(a, b) {
  if (sc(a)) {
    return Ec(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && F(c)) {
      c = J(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Fd = function Fd(b) {
  return null == b ? null : null == J(b) ? F(I(b)) : L(I(b), Fd(J(b)));
}, Gd = function Gd() {
  switch(arguments.length) {
    case 0:
      return Gd.o();
    case 1:
      return Gd.b(arguments[0]);
    case 2:
      return Gd.a(arguments[0], arguments[1]);
    default:
      return Gd.l(arguments[0], arguments[1], new H(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Gd.o = function() {
  return vb(Dc);
};
Gd.b = function(a) {
  return a;
};
Gd.a = function(a, b) {
  return wb(a, b);
};
Gd.l = function(a, b, c) {
  for (;;) {
    if (a = wb(a, b), x(c)) {
      b = I(c), c = J(c);
    } else {
      return a;
    }
  }
};
Gd.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  c = J(c);
  return Gd.l(b, a, c);
};
Gd.B = 2;
function Hd(a, b, c) {
  var d = F(c);
  if (0 === b) {
    return a.o ? a.o() : a.call(null);
  }
  c = Pa(d);
  var e = Ra(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Pa(e), f = Ra(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Pa(f), g = Ra(f);
  if (3 === b) {
    return a.h ? a.h(c, d, e) : a.h ? a.h(c, d, e) : a.call(null, c, d, e);
  }
  var f = Pa(g), h = Ra(g);
  if (4 === b) {
    return a.A ? a.A(c, d, e, f) : a.A ? a.A(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Pa(h), l = Ra(h);
  if (5 === b) {
    return a.F ? a.F(c, d, e, f, g) : a.F ? a.F(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = Pa(l), m = Ra(l);
  if (6 === b) {
    return a.J ? a.J(c, d, e, f, g, h) : a.J ? a.J(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = Pa(m), n = Ra(m);
  if (7 === b) {
    return a.da ? a.da(c, d, e, f, g, h, l) : a.da ? a.da(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var m = Pa(n), p = Ra(n);
  if (8 === b) {
    return a.ea ? a.ea(c, d, e, f, g, h, l, m) : a.ea ? a.ea(c, d, e, f, g, h, l, m) : a.call(null, c, d, e, f, g, h, l, m);
  }
  var n = Pa(p), q = Ra(p);
  if (9 === b) {
    return a.fa ? a.fa(c, d, e, f, g, h, l, m, n) : a.fa ? a.fa(c, d, e, f, g, h, l, m, n) : a.call(null, c, d, e, f, g, h, l, m, n);
  }
  var p = Pa(q), r = Ra(q);
  if (10 === b) {
    return a.T ? a.T(c, d, e, f, g, h, l, m, n, p) : a.T ? a.T(c, d, e, f, g, h, l, m, n, p) : a.call(null, c, d, e, f, g, h, l, m, n, p);
  }
  var q = Pa(r), t = Ra(r);
  if (11 === b) {
    return a.U ? a.U(c, d, e, f, g, h, l, m, n, p, q) : a.U ? a.U(c, d, e, f, g, h, l, m, n, p, q) : a.call(null, c, d, e, f, g, h, l, m, n, p, q);
  }
  var r = Pa(t), u = Ra(t);
  if (12 === b) {
    return a.V ? a.V(c, d, e, f, g, h, l, m, n, p, q, r) : a.V ? a.V(c, d, e, f, g, h, l, m, n, p, q, r) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r);
  }
  var t = Pa(u), w = Ra(u);
  if (13 === b) {
    return a.W ? a.W(c, d, e, f, g, h, l, m, n, p, q, r, t) : a.W ? a.W(c, d, e, f, g, h, l, m, n, p, q, r, t) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t);
  }
  var u = Pa(w), z = Ra(w);
  if (14 === b) {
    return a.X ? a.X(c, d, e, f, g, h, l, m, n, p, q, r, t, u) : a.X ? a.X(c, d, e, f, g, h, l, m, n, p, q, r, t, u) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u);
  }
  var w = Pa(z), C = Ra(z);
  if (15 === b) {
    return a.Y ? a.Y(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w) : a.Y ? a.Y(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w);
  }
  var z = Pa(C), G = Ra(C);
  if (16 === b) {
    return a.Z ? a.Z(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z) : a.Z ? a.Z(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z);
  }
  var C = Pa(G), Q = Ra(G);
  if (17 === b) {
    return a.$ ? a.$(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C) : a.$ ? a.$(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C);
  }
  var G = Pa(Q), ga = Ra(Q);
  if (18 === b) {
    return a.aa ? a.aa(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G) : a.aa ? a.aa(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G);
  }
  Q = Pa(ga);
  ga = Ra(ga);
  if (19 === b) {
    return a.ba ? a.ba(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q) : a.ba ? a.ba(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q);
  }
  var y = Pa(ga);
  Ra(ga);
  if (20 === b) {
    return a.ca ? a.ca(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q, y) : a.ca ? a.ca(c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q, y) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q, y);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Nc() {
  switch(arguments.length) {
    case 2:
      return Id(arguments[0], arguments[1]);
    case 3:
      return Jd(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = L(arguments[1], L(arguments[2], arguments[3])), c = a.B;
      if (a.w) {
        var d = Ed(b, c + 1);
        a = d <= c ? Hd(a, d, b) : a.w(b);
      } else {
        a = a.apply(a, cd(b));
      }
      return a;
    case 5:
      return Kd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Ld(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new H(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Id(a, b) {
  var c = a.B;
  if (a.w) {
    var d = Ed(b, c + 1);
    return d <= c ? Hd(a, d, b) : a.w(b);
  }
  return a.apply(a, cd(b));
}
function Jd(a, b, c) {
  b = L(b, c);
  c = a.B;
  if (a.w) {
    var d = Ed(b, c + 1);
    return d <= c ? Hd(a, d, b) : a.w(b);
  }
  return a.apply(a, cd(b));
}
function Kd(a, b, c, d, e) {
  b = L(b, L(c, L(d, e)));
  c = a.B;
  return a.w ? (d = Ed(b, c + 1), d <= c ? Hd(a, d, b) : a.w(b)) : a.apply(a, cd(b));
}
function Ld(a, b, c, d, e, f) {
  b = L(b, L(c, L(d, L(e, Fd(f)))));
  c = a.B;
  return a.w ? (d = Ed(b, c + 1), d <= c ? Hd(a, d, b) : a.w(b)) : a.apply(a, cd(b));
}
function Md(a, b) {
  for (;;) {
    if (null == F(b)) {
      return !0;
    }
    var c;
    c = I(b);
    c = a.b ? a.b(c) : a.call(null, c);
    if (x(c)) {
      c = a;
      var d = J(b);
      a = c;
      b = d;
    } else {
      return !1;
    }
  }
}
var Nd = function Nd() {
  switch(arguments.length) {
    case 0:
      return Nd.o();
    case 1:
      return Nd.b(arguments[0]);
    case 2:
      return Nd.a(arguments[0], arguments[1]);
    case 3:
      return Nd.h(arguments[0], arguments[1], arguments[2]);
    default:
      return Nd.l(arguments[0], arguments[1], arguments[2], new H(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Nd.o = function() {
  return gd;
};
Nd.b = function(a) {
  return a;
};
Nd.a = function(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.h ? b.h(c, d, e) : b.call(null, c, d, e);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.a ? b.a(c, d) : b.call(null, c, d);
      return a.b ? a.b(e) : a.call(null, e);
    }
    function e(c) {
      c = b.b ? b.b(c) : b.call(null, c);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function f() {
      var c = b.o ? b.o() : b.call(null);
      return a.b ? a.b(c) : a.call(null, c);
    }
    var g = null, h = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
            h[g] = arguments[g + 3], ++g;
          }
          g = new H(h, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        c = Kd(b, c, e, f, g);
        return a.b ? a.b(c) : a.call(null, c);
      }
      c.B = 3;
      c.w = function(a) {
        var b = I(a);
        a = J(a);
        var c = I(a);
        a = J(a);
        var e = I(a);
        a = bc(a);
        return d(b, c, e, a);
      };
      c.l = d;
      return c;
    }(), g = function(a, b, g, p) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, g);
        default:
          var q = null;
          if (3 < arguments.length) {
            for (var q = 0, r = Array(arguments.length - 3);q < r.length;) {
              r[q] = arguments[q + 3], ++q;
            }
            q = new H(r, 0);
          }
          return h.l(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.B = 3;
    g.w = h.w;
    g.o = f;
    g.b = e;
    g.a = d;
    g.h = c;
    g.l = h.l;
    return g;
  }();
};
Nd.h = function(a, b, c) {
  return function() {
    function d(d, e, f) {
      d = c.h ? c.h(d, e, f) : c.call(null, d, e, f);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    function e(d, e) {
      var f;
      f = c.a ? c.a(d, e) : c.call(null, d, e);
      f = b.b ? b.b(f) : b.call(null, f);
      return a.b ? a.b(f) : a.call(null, f);
    }
    function f(d) {
      d = c.b ? c.b(d) : c.call(null, d);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    function g() {
      var d;
      d = c.o ? c.o() : c.call(null);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    var h = null, l = function() {
      function d(a, b, c, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
            h[g] = arguments[g + 3], ++g;
          }
          g = new H(h, 0);
        }
        return e.call(this, a, b, c, g);
      }
      function e(d, f, g, h) {
        d = Kd(c, d, f, g, h);
        d = b.b ? b.b(d) : b.call(null, d);
        return a.b ? a.b(d) : a.call(null, d);
      }
      d.B = 3;
      d.w = function(a) {
        var b = I(a);
        a = J(a);
        var c = I(a);
        a = J(a);
        var d = I(a);
        a = bc(a);
        return e(b, c, d, a);
      };
      d.l = e;
      return d;
    }(), h = function(a, b, c, h) {
      switch(arguments.length) {
        case 0:
          return g.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var r = null;
          if (3 < arguments.length) {
            for (var r = 0, t = Array(arguments.length - 3);r < t.length;) {
              t[r] = arguments[r + 3], ++r;
            }
            r = new H(t, 0);
          }
          return l.l(a, b, c, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.B = 3;
    h.w = l.w;
    h.o = g;
    h.b = f;
    h.a = e;
    h.h = d;
    h.l = l.l;
    return h;
  }();
};
Nd.l = function(a, b, c, d) {
  return function(a) {
    return function() {
      function b(a) {
        var d = null;
        if (0 < arguments.length) {
          for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
            e[d] = arguments[d + 0], ++d;
          }
          d = new H(e, 0);
        }
        return c.call(this, d);
      }
      function c(b) {
        b = Id(I(a), b);
        for (var d = J(a);;) {
          if (d) {
            b = I(d).call(null, b), d = J(d);
          } else {
            return b;
          }
        }
      }
      b.B = 0;
      b.w = function(a) {
        a = F(a);
        return c(a);
      };
      b.l = c;
      return b;
    }();
  }(rd(L(a, L(b, L(c, d)))));
};
Nd.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  var d = J(c), c = I(d), d = J(d);
  return Nd.l(b, a, c, d);
};
Nd.B = 3;
function Od(a, b, c, d) {
  this.state = a;
  this.s = b;
  this.Rb = c;
  this.yb = d;
  this.C = 16386;
  this.i = 6455296;
}
k = Od.prototype;
k.equiv = function(a) {
  return this.v(null, a);
};
k.v = function(a, b) {
  return this === b;
};
k.Bb = function() {
  return this.state;
};
k.L = function() {
  return this.s;
};
k.wb = function(a, b, c) {
  for (var d = F(this.yb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.O(null, g);
      var h = M(a, 0);
      a = M(a, 1);
      var l = b, m = c;
      a.A ? a.A(h, this, l, m) : a.call(null, h, this, l, m);
      g += 1;
    } else {
      if (a = F(d)) {
        d = a, Sc(d) ? (e = Db(d), d = Fb(d), a = e, f = Ec(e), e = a) : (a = I(d), h = M(a, 0), a = M(a, 1), e = h, f = b, g = c, a.A ? a.A(e, this, f, g) : a.call(null, e, this, f, g), d = J(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
k.H = function() {
  return this[ba] || (this[ba] = ++ca);
};
function Pd() {
  switch(arguments.length) {
    case 1:
      return O(arguments[0]);
    default:
      var a = arguments[0], b = new H(Array.prototype.slice.call(arguments, 1), 0), c = Wc(b) ? Id(Qd, b) : b, b = Hc(c, xa), c = Hc(c, Rd);
      return new Od(a, b, c, null);
  }
}
function O(a) {
  return new Od(a, null, null, null);
}
function Sd(a, b) {
  if (a instanceof Od) {
    var c = a.Rb;
    if (null != c && !x(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([D("Assert failed: "), D("Validator rejected reference state"), D("\n"), D(function() {
        var a = sd(new $b(null, "validate", "validate", 1439230700, null), new $b(null, "new-value", "new-value", -1567397401, null));
        return Td.b ? Td.b(a) : Td.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.yb && ub(a, c, b);
    return b;
  }
  return Jb(a, b);
}
var Ud = function Ud() {
  switch(arguments.length) {
    case 2:
      return Ud.a(arguments[0], arguments[1]);
    case 3:
      return Ud.h(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ud.A(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Ud.l(arguments[0], arguments[1], arguments[2], arguments[3], new H(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Ud.a = function(a, b) {
  var c;
  a instanceof Od ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = Sd(a, c)) : c = Kb.a(a, b);
  return c;
};
Ud.h = function(a, b, c) {
  if (a instanceof Od) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = Sd(a, b);
  } else {
    a = Kb.h(a, b, c);
  }
  return a;
};
Ud.A = function(a, b, c, d) {
  if (a instanceof Od) {
    var e = a.state;
    b = b.h ? b.h(e, c, d) : b.call(null, e, c, d);
    a = Sd(a, b);
  } else {
    a = Kb.A(a, b, c, d);
  }
  return a;
};
Ud.l = function(a, b, c, d, e) {
  return a instanceof Od ? Sd(a, Kd(b, a.state, c, d, e)) : Kb.F(a, b, c, d, e);
};
Ud.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  var d = J(c), c = I(d), e = J(d), d = I(e), e = J(e);
  return Ud.l(b, a, c, d, e);
};
Ud.B = 4;
var R = function R() {
  switch(arguments.length) {
    case 1:
      return R.b(arguments[0]);
    case 2:
      return R.a(arguments[0], arguments[1]);
    case 3:
      return R.h(arguments[0], arguments[1], arguments[2]);
    case 4:
      return R.A(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return R.l(arguments[0], arguments[1], arguments[2], arguments[3], new H(Array.prototype.slice.call(arguments, 4), 0));
  }
};
R.b = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.b ? a.b(d) : a.call(null, d);
        return b.a ? b.a(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.b ? b.b(a) : b.call(null, a);
      }
      function e() {
        return b.o ? b.o() : b.call(null);
      }
      var f = null, g = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
              g[f] = arguments[f + 2], ++f;
            }
            f = new H(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = Jd(a, e, f);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.B = 2;
        c.w = function(a) {
          var b = I(a);
          a = J(a);
          var c = I(a);
          a = bc(a);
          return d(b, c, a);
        };
        c.l = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var n = null;
            if (2 < arguments.length) {
              for (var n = 0, p = Array(arguments.length - 2);n < p.length;) {
                p[n] = arguments[n + 2], ++n;
              }
              n = new H(p, 0);
            }
            return g.l(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.B = 2;
      f.w = g.w;
      f.o = e;
      f.b = d;
      f.a = c;
      f.l = g.l;
      return f;
    }();
  };
};
R.a = function(a, b) {
  return new xd(null, function() {
    var c = F(b);
    if (c) {
      if (Sc(c)) {
        for (var d = Db(c), e = Ec(d), f = new zd(Array(e), 0), g = 0;;) {
          if (g < e) {
            Dd(f, function() {
              var b = E.a(d, g);
              return a.b ? a.b(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return Cd(f.wa(), R.a(a, Fb(c)));
      }
      return L(function() {
        var b = I(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), R.a(a, bc(c)));
    }
    return null;
  }, null, null);
};
R.h = function(a, b, c) {
  return new xd(null, function() {
    var d = F(b), e = F(c);
    if (d && e) {
      var f = L, g;
      g = I(d);
      var h = I(e);
      g = a.a ? a.a(g, h) : a.call(null, g, h);
      d = f(g, R.h(a, bc(d), bc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
R.A = function(a, b, c, d) {
  return new xd(null, function() {
    var e = F(b), f = F(c), g = F(d);
    if (e && f && g) {
      var h = L, l;
      l = I(e);
      var m = I(f), n = I(g);
      l = a.h ? a.h(l, m, n) : a.call(null, l, m, n);
      e = h(l, R.A(a, bc(e), bc(f), bc(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
R.l = function(a, b, c, d, e) {
  var f = function h(a) {
    return new xd(null, function() {
      var b = R.a(F, a);
      return Md(gd, b) ? L(R.a(I, b), h(R.a(bc, b))) : null;
    }, null, null);
  };
  return R.a(function() {
    return function(b) {
      return Id(a, b);
    };
  }(f), f(Cc.l(e, d, yc([c, b], 0))));
};
R.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  var d = J(c), c = I(d), e = J(d), d = I(e), e = J(e);
  return R.l(b, a, c, d, e);
};
R.B = 4;
function Vd(a, b) {
  return new xd(null, function() {
    if (0 < a) {
      var c = F(b);
      return c ? L(I(c), Vd(a - 1, bc(c))) : null;
    }
    return null;
  }, null, null);
}
function Wd(a) {
  return new xd(null, function() {
    return L(a, Wd(a));
  }, null, null);
}
var Xd = function Xd(b, c) {
  return L(c, new xd(null, function() {
    return Xd(b, b.b ? b.b(c) : b.call(null, c));
  }, null, null));
};
function Yd(a, b) {
  var c;
  if (null != a) {
    if (a && (a.C & 4 || a.Tb)) {
      c = dd(wb, vb(a), b);
      c = xb(c);
      var d = Oc(a);
      c = Lc(c) && !(c ? c.i & 262144 || c.Zb || (c.i ? 0 : A(fb, c)) : A(fb, c)) ? new Mc(c, d) : null == c ? null : gb(c, d);
    } else {
      c = dd(Ma, a, b);
    }
  } else {
    c = dd(Cc, cc, b);
  }
  return c;
}
function $d(a, b) {
  var c;
  a: {
    c = Vc;
    for (var d = a, e = F(b);;) {
      if (e) {
        var f = d;
        if (f ? f.i & 256 || f.ub || (f.i ? 0 : A(Ta, f)) : A(Ta, f)) {
          d = Ic(d, I(e), c);
          if (c === d) {
            c = null;
            break a;
          }
          e = J(e);
        } else {
          c = null;
          break a;
        }
      } else {
        c = d;
        break a;
      }
    }
  }
  return c;
}
var ae = function ae() {
  switch(arguments.length) {
    case 3:
      return ae.h(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ae.A(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ae.F(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return ae.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return ae.l(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new H(Array.prototype.slice.call(arguments, 6), 0));
  }
};
ae.h = function(a, b, c) {
  return Jc.h(a, b, function() {
    var d = Hc(a, b);
    return c.b ? c.b(d) : c.call(null, d);
  }());
};
ae.A = function(a, b, c, d) {
  return Jc.h(a, b, function() {
    var e = Hc(a, b);
    return c.a ? c.a(e, d) : c.call(null, e, d);
  }());
};
ae.F = function(a, b, c, d, e) {
  return Jc.h(a, b, function() {
    var f = Hc(a, b);
    return c.h ? c.h(f, d, e) : c.call(null, f, d, e);
  }());
};
ae.J = function(a, b, c, d, e, f) {
  return Jc.h(a, b, function() {
    var g = Hc(a, b);
    return c.A ? c.A(g, d, e, f) : c.call(null, g, d, e, f);
  }());
};
ae.l = function(a, b, c, d, e, f, g) {
  return Jc.h(a, b, Ld(c, Hc(a, b), d, e, f, yc([g], 0)));
};
ae.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  var d = J(c), c = I(d), e = J(d), d = I(e), f = J(e), e = I(f), g = J(f), f = I(g), g = J(g);
  return ae.l(b, a, c, d, e, f, g);
};
ae.B = 6;
function be(a, b) {
  this.G = a;
  this.c = b;
}
function ce(a) {
  return new be(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function de(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function ee(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = ce(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var fe = function fe(b, c, d, e) {
  var f = new be(d.G, Ia(d.c)), g = b.j - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? fe(b, c - 5, d, e) : ee(null, c - 5, e), f.c[g] = b);
  return f;
};
function ge(a, b) {
  throw Error([D("No item "), D(a), D(" in vector of length "), D(b)].join(""));
}
function he(a, b) {
  if (b >= de(a)) {
    return a.qa;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function ie(a, b) {
  return 0 <= b && b < a.j ? he(a, b) : ge(b, a.j);
}
var je = function je(b, c, d, e, f) {
  var g = new be(d.G, Ia(d.c));
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = je(b, c - 5, d.c[h], e, f);
    g.c[h] = b;
  }
  return g;
};
function ke(a, b, c, d, e, f) {
  this.m = a;
  this.jb = b;
  this.c = c;
  this.Ea = d;
  this.start = e;
  this.end = f;
}
ke.prototype.gb = function() {
  return this.m < this.end;
};
ke.prototype.next = function() {
  32 === this.m - this.jb && (this.c = he(this.Ea, this.m), this.jb += 32);
  var a = this.c[this.m & 31];
  this.m += 1;
  return a;
};
function S(a, b, c, d, e, f) {
  this.s = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.qa = e;
  this.u = f;
  this.i = 167668511;
  this.C = 8196;
}
k = S.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.la = function(a, b) {
  return Ua.h(this, b, null);
};
k.K = function(a, b, c) {
  return "number" === typeof b ? E.h(this, b, c) : c;
};
k.O = function(a, b) {
  return ie(this, b)[b & 31];
};
k.ra = function(a, b, c) {
  return 0 <= b && b < this.j ? he(this, b)[b & 31] : c;
};
k.rb = function(a, b, c) {
  if (0 <= b && b < this.j) {
    return de(this) <= b ? (a = Ia(this.qa), a[b & 31] = c, new S(this.s, this.j, this.shift, this.root, a, null)) : new S(this.s, this.j, this.shift, je(this, this.shift, this.root, b, c), this.qa, null);
  }
  if (b === this.j) {
    return Ma(this, c);
  }
  throw Error([D("Index "), D(b), D(" out of bounds  [0,"), D(this.j), D("]")].join(""));
};
k.Ta = function() {
  var a = this.j;
  return new ke(0, 0, 0 < Ec(this) ? he(this, 0) : null, this, 0, a);
};
k.L = function() {
  return this.s;
};
k.ka = function() {
  return this.j;
};
k.pb = function() {
  return E.a(this, 0);
};
k.qb = function() {
  return E.a(this, 1);
};
k.cb = function() {
  return 0 < this.j ? new vc(this, this.j - 1, null) : null;
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = ic(this);
};
k.v = function(a, b) {
  if (b instanceof S) {
    if (this.j === Ec(b)) {
      for (var c = Lb(this), d = Lb(b);;) {
        if (x(c.gb())) {
          var e = c.next(), f = d.next();
          if (!dc.a(e, f)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return wc(this, b);
  }
};
k.Ra = function() {
  var a = this;
  return new le(a.j, a.shift, function() {
    var b = a.root;
    return me.b ? me.b(b) : me.call(null, b);
  }(), function() {
    var b = a.qa;
    return ne.b ? ne.b(b) : ne.call(null, b);
  }());
};
k.ga = function(a, b) {
  return nc(this, b);
};
k.ha = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.j) {
      var e = he(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.a ? b.a(d, g) : b.call(null, d, g), f = f + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
k.Pa = function(a, b, c) {
  if ("number" === typeof b) {
    return bb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.R = function() {
  if (0 === this.j) {
    return null;
  }
  if (32 >= this.j) {
    return new H(this.qa, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.c[0];
      } else {
        a = a.c;
        break a;
      }
    }
  }
  return oe ? oe(this, a, 0, 0) : pe.call(null, this, a, 0, 0);
};
k.S = function(a, b) {
  return new S(b, this.j, this.shift, this.root, this.qa, this.u);
};
k.N = function(a, b) {
  if (32 > this.j - de(this)) {
    for (var c = this.qa.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.qa[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new S(this.s, this.j + 1, this.shift, this.root, d, null);
  }
  c = (d = this.j >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = ce(null), d.c[0] = this.root, e = ee(null, this.shift, new be(null, this.qa)), d.c[1] = e) : d = fe(this, this.shift, this.root, new be(null, this.qa));
  return new S(this.s, this.j + 1, c, d, [b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.ra(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.O(null, c);
  };
  a.h = function(a, c, d) {
    return this.ra(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
k.b = function(a) {
  return this.O(null, a);
};
k.a = function(a, b) {
  return this.ra(null, a, b);
};
var V = new be(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Dc = new S(null, 0, 5, V, [], jc);
S.prototype[Ha] = function() {
  return gc(this);
};
function qe(a) {
  if (Da(a)) {
    a: {
      var b = a.length;
      if (32 > b) {
        a = new S(null, b, 5, V, a, null);
      } else {
        for (var c = 32, d = (new S(null, 32, 5, V, a.slice(0, 32), null)).Ra(null);;) {
          if (c < b) {
            var e = c + 1, d = Gd.a(d, a[c]), c = e
          } else {
            a = xb(d);
            break a;
          }
        }
      }
    }
  } else {
    a = xb(dd(wb, vb(Dc), a));
  }
  return a;
}
function re(a, b, c, d, e, f) {
  this.ua = a;
  this.node = b;
  this.m = c;
  this.ja = d;
  this.s = e;
  this.u = f;
  this.i = 32375020;
  this.C = 1536;
}
k = re.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.s;
};
k.na = function() {
  if (this.ja + 1 < this.node.length) {
    var a;
    a = this.ua;
    var b = this.node, c = this.m, d = this.ja + 1;
    a = oe ? oe(a, b, c, d) : pe.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Gb(this);
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  var c;
  c = this.ua;
  var d = this.m + this.ja, e = Ec(this.ua);
  c = se ? se(c, d, e) : te.call(null, c, d, e);
  return nc(c, b);
};
k.ha = function(a, b, c) {
  a = this.ua;
  var d = this.m + this.ja, e = Ec(this.ua);
  a = se ? se(a, d, e) : te.call(null, a, d, e);
  return oc(a, b, c);
};
k.ia = function() {
  return this.node[this.ja];
};
k.pa = function() {
  if (this.ja + 1 < this.node.length) {
    var a;
    a = this.ua;
    var b = this.node, c = this.m, d = this.ja + 1;
    a = oe ? oe(a, b, c, d) : pe.call(null, a, b, c, d);
    return null == a ? cc : a;
  }
  return Fb(this);
};
k.R = function() {
  return this;
};
k.mb = function() {
  var a = this.node;
  return new Ad(a, this.ja, a.length);
};
k.nb = function() {
  var a = this.m + this.node.length;
  if (a < La(this.ua)) {
    var b = this.ua, c = he(this.ua, a);
    return oe ? oe(b, c, a, 0) : pe.call(null, b, c, a, 0);
  }
  return cc;
};
k.S = function(a, b) {
  var c = this.ua, d = this.node, e = this.m, f = this.ja;
  return ue ? ue(c, d, e, f, b) : pe.call(null, c, d, e, f, b);
};
k.N = function(a, b) {
  return L(b, this);
};
k.lb = function() {
  var a = this.m + this.node.length;
  if (a < La(this.ua)) {
    var b = this.ua, c = he(this.ua, a);
    return oe ? oe(b, c, a, 0) : pe.call(null, b, c, a, 0);
  }
  return null;
};
re.prototype[Ha] = function() {
  return gc(this);
};
function pe() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new re(a, ie(a, b), b, c, null, null);
    case 4:
      return oe(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ue(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function oe(a, b, c, d) {
  return new re(a, b, c, d, null, null);
}
function ue(a, b, c, d, e) {
  return new re(a, b, c, d, e, null);
}
function ve(a, b, c, d, e) {
  this.s = a;
  this.Ea = b;
  this.start = c;
  this.end = d;
  this.u = e;
  this.i = 167666463;
  this.C = 8192;
}
k = ve.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.la = function(a, b) {
  return Ua.h(this, b, null);
};
k.K = function(a, b, c) {
  return "number" === typeof b ? E.h(this, b, c) : c;
};
k.O = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ge(b, this.end - this.start) : E.a(this.Ea, this.start + b);
};
k.ra = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : E.h(this.Ea, this.start + b, c);
};
k.rb = function(a, b, c) {
  var d = this.start + b;
  a = this.s;
  c = Jc.h(this.Ea, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return we.F ? we.F(a, c, b, d, null) : we.call(null, a, c, b, d, null);
};
k.L = function() {
  return this.s;
};
k.ka = function() {
  return this.end - this.start;
};
k.cb = function() {
  return this.start !== this.end ? new vc(this, this.end - this.start - 1, null) : null;
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return nc(this, b);
};
k.ha = function(a, b, c) {
  return oc(this, b, c);
};
k.Pa = function(a, b, c) {
  if ("number" === typeof b) {
    return bb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.R = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : L(E.a(a.Ea, e), new xd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.S = function(a, b) {
  var c = this.Ea, d = this.start, e = this.end, f = this.u;
  return we.F ? we.F(b, c, d, e, f) : we.call(null, b, c, d, e, f);
};
k.N = function(a, b) {
  var c = this.s, d = bb(this.Ea, this.end, b), e = this.start, f = this.end + 1;
  return we.F ? we.F(c, d, e, f, null) : we.call(null, c, d, e, f, null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.ra(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.O(null, c);
  };
  a.h = function(a, c, d) {
    return this.ra(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
k.b = function(a) {
  return this.O(null, a);
};
k.a = function(a, b) {
  return this.ra(null, a, b);
};
ve.prototype[Ha] = function() {
  return gc(this);
};
function we(a, b, c, d, e) {
  for (;;) {
    if (b instanceof ve) {
      c = b.start + c, d = b.start + d, b = b.Ea;
    } else {
      var f = Ec(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new ve(a, b, c, d, e);
    }
  }
}
function te() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return se(a, arguments[1], Ec(a));
    case 3:
      return se(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function se(a, b, c) {
  return we(null, a, b, c, null);
}
function xe(a, b) {
  return a === b.G ? b : new be(a, Ia(b.c));
}
function me(a) {
  return new be({}, Ia(a.c));
}
function ne(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Uc(a, 0, b, 0, a.length);
  return b;
}
var ye = function ye(b, c, d, e) {
  d = xe(b.root.G, d);
  var f = b.j - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? ye(b, c - 5, g, e) : ee(b.root.G, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function le(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.qa = d;
  this.C = 88;
  this.i = 275;
}
k = le.prototype;
k.eb = function(a, b) {
  if (this.root.G) {
    if (32 > this.j - de(this)) {
      this.qa[this.j & 31] = b;
    } else {
      var c = new be(this.root.G, this.qa), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.qa = d;
      if (this.j >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = ee(this.root.G, this.shift, c);
        this.root = new be(this.root.G, d);
        this.shift = e;
      } else {
        this.root = ye(this, this.shift, this.root, c);
      }
    }
    this.j += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.fb = function() {
  if (this.root.G) {
    this.root.G = null;
    var a = this.j - de(this), b = Array(a);
    Uc(this.qa, 0, b, 0, a);
    return new S(null, this.j, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
k.Xa = function(a, b, c) {
  if ("number" === typeof b) {
    return zb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.vb = function(a, b, c) {
  var d = this;
  if (d.root.G) {
    if (0 <= b && b < d.j) {
      return de(this) <= b ? d.qa[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = xe(d.root.G, h);
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.c[m]);
            l.c[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.j) {
      return wb(this, c);
    }
    throw Error([D("Index "), D(b), D(" out of bounds for TransientVector of length"), D(d.j)].join(""));
  }
  throw Error("assoc! after persistent!");
};
k.ka = function() {
  if (this.root.G) {
    return this.j;
  }
  throw Error("count after persistent!");
};
k.O = function(a, b) {
  if (this.root.G) {
    return ie(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.ra = function(a, b, c) {
  return 0 <= b && b < this.j ? E.a(this, b) : c;
};
k.la = function(a, b) {
  return Ua.h(this, b, null);
};
k.K = function(a, b, c) {
  return "number" === typeof b ? E.h(this, b, c) : c;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.la(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.la(null, c);
  };
  a.h = function(a, c, d) {
    return this.K(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
k.b = function(a) {
  return this.la(null, a);
};
k.a = function(a, b) {
  return this.K(null, a, b);
};
function ze() {
  this.i = 2097152;
  this.C = 0;
}
ze.prototype.equiv = function(a) {
  return this.v(null, a);
};
ze.prototype.v = function() {
  return !1;
};
var Ae = new ze;
function Be(a, b) {
  return Xc(Pc(b) ? Ec(a) === Ec(b) ? Md(gd, R.a(function(a) {
    return dc.a(Ic(b, I(a), Ae), I(J(a)));
  }, a)) : null : null);
}
function Ce(a) {
  this.D = a;
}
Ce.prototype.next = function() {
  if (null != this.D) {
    var a = I(this.D), b = M(a, 0), a = M(a, 1);
    this.D = J(this.D);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
function De(a) {
  return new Ce(F(a));
}
function Ee(a, b) {
  var c;
  if (b instanceof N) {
    a: {
      c = a.length;
      for (var d = b.za, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof N && d === f.za) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = "string" == typeof b, x(x(c) ? c : "number" === typeof b)) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof $b) {
        a: {
          for (c = a.length, d = b.Ba, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof $b && d === f.Ba) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (dc.a(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function Fe(a, b, c) {
  this.c = a;
  this.m = b;
  this.sa = c;
  this.i = 32374990;
  this.C = 0;
}
k = Fe.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.sa;
};
k.na = function() {
  return this.m < this.c.length - 2 ? new Fe(this.c, this.m + 2, this.sa) : null;
};
k.ka = function() {
  return (this.c.length - this.m) / 2;
};
k.H = function() {
  return ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return zc(b, this);
};
k.ha = function(a, b, c) {
  return Bc(b, c, this);
};
k.ia = function() {
  return new S(null, 2, 5, V, [this.c[this.m], this.c[this.m + 1]], null);
};
k.pa = function() {
  return this.m < this.c.length - 2 ? new Fe(this.c, this.m + 2, this.sa) : cc;
};
k.R = function() {
  return this;
};
k.S = function(a, b) {
  return new Fe(this.c, this.m, b);
};
k.N = function(a, b) {
  return L(b, this);
};
Fe.prototype[Ha] = function() {
  return gc(this);
};
function Ge(a, b, c) {
  this.c = a;
  this.m = b;
  this.j = c;
}
Ge.prototype.gb = function() {
  return this.m < this.j;
};
Ge.prototype.next = function() {
  var a = new S(null, 2, 5, V, [this.c[this.m], this.c[this.m + 1]], null);
  this.m += 2;
  return a;
};
function ua(a, b, c, d) {
  this.s = a;
  this.j = b;
  this.c = c;
  this.u = d;
  this.i = 16647951;
  this.C = 8196;
}
k = ua.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.keys = function() {
  return gc(He.b ? He.b(this) : He.call(null, this));
};
k.entries = function() {
  return De(F(this));
};
k.values = function() {
  return gc(Ie.b ? Ie.b(this) : Ie.call(null, this));
};
k.has = function(a) {
  return Yc(this, a);
};
k.get = function(a, b) {
  return this.K(null, a, b);
};
k.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), g = M(f, 0), f = M(f, 1);
      a.a ? a.a(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        Sc(b) ? (c = Db(b), b = Fb(b), g = c, d = Ec(c), c = g) : (c = I(b), g = M(c, 0), c = f = M(c, 1), a.a ? a.a(c, g) : a.call(null, c, g), b = J(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.la = function(a, b) {
  return Ua.h(this, b, null);
};
k.K = function(a, b, c) {
  a = Ee(this.c, b);
  return -1 === a ? c : this.c[a + 1];
};
k.Ta = function() {
  return new Ge(this.c, 0, 2 * this.j);
};
k.L = function() {
  return this.s;
};
k.ka = function() {
  return this.j;
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = kc(this);
};
k.v = function(a, b) {
  if (b && (b.i & 1024 || b.Cb)) {
    var c = this.c.length;
    if (this.j === b.ka(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.K(null, this.c[d], Vc);
          if (e !== Vc) {
            if (dc.a(this.c[d + 1], e)) {
              d += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return Be(this, b);
  }
};
k.Ra = function() {
  return new Je({}, this.c.length, Ia(this.c));
};
k.ga = function(a, b) {
  return zc(b, this);
};
k.ha = function(a, b, c) {
  return Bc(b, c, this);
};
k.Pa = function(a, b, c) {
  a = Ee(this.c, b);
  if (-1 === a) {
    if (this.j < Ke) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new ua(this.s, this.j + 1, e, null);
    }
    return gb(Va(Yd(Kc, this), b, c), this.s);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = Ia(this.c);
  b[a + 1] = c;
  return new ua(this.s, this.j, b, null);
};
k.R = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Fe(a, 0, null) : null;
};
k.S = function(a, b) {
  return new ua(b, this.j, this.c, this.u);
};
k.N = function(a, b) {
  if (Rc(b)) {
    return Va(this, E.a(b, 0), E.a(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (Rc(e)) {
      c = Va(c, E.a(e, 0), E.a(e, 1)), d = J(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.la(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.la(null, c);
  };
  a.h = function(a, c, d) {
    return this.K(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
k.b = function(a) {
  return this.la(null, a);
};
k.a = function(a, b) {
  return this.K(null, a, b);
};
var W = new ua(null, 0, [], lc), Ke = 8;
ua.prototype[Ha] = function() {
  return gc(this);
};
function Je(a, b, c) {
  this.Ma = a;
  this.Oa = b;
  this.c = c;
  this.i = 258;
  this.C = 56;
}
k = Je.prototype;
k.ka = function() {
  if (x(this.Ma)) {
    return md(this.Oa);
  }
  throw Error("count after persistent!");
};
k.la = function(a, b) {
  return Ua.h(this, b, null);
};
k.K = function(a, b, c) {
  if (x(this.Ma)) {
    return a = Ee(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.eb = function(a, b) {
  if (x(this.Ma)) {
    if (b ? b.i & 2048 || b.Db || (b.i ? 0 : A(Xa, b)) : A(Xa, b)) {
      return yb(this, Le.b ? Le.b(b) : Le.call(null, b), Me.b ? Me.b(b) : Me.call(null, b));
    }
    for (var c = F(b), d = this;;) {
      var e = I(c);
      if (x(e)) {
        var f = e, c = J(c), d = yb(d, function() {
          var a = f;
          return Le.b ? Le.b(a) : Le.call(null, a);
        }(), function() {
          var a = f;
          return Me.b ? Me.b(a) : Me.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.fb = function() {
  if (x(this.Ma)) {
    return this.Ma = !1, new ua(null, md(this.Oa), this.c, null);
  }
  throw Error("persistent! called twice");
};
k.Xa = function(a, b, c) {
  if (x(this.Ma)) {
    a = Ee(this.c, b);
    if (-1 === a) {
      if (this.Oa + 2 <= 2 * Ke) {
        return this.Oa += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Oa;
      var d = this.c;
      a = Ne.a ? Ne.a(a, d) : Ne.call(null, a, d);
      return yb(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Ne(a, b) {
  for (var c = vb(Kc), d = 0;;) {
    if (d < a) {
      c = yb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Oe() {
  this.Ca = !1;
}
function Pe(a, b) {
  return a === b ? !0 : a === b || a instanceof N && b instanceof N && a.za === b.za ? !0 : dc.a(a, b);
}
function Qe(a, b, c) {
  a = Ia(a);
  a[b] = c;
  return a;
}
function Re(a, b, c, d) {
  a = a.Ia(b);
  a.c[c] = d;
  return a;
}
function Se(a, b, c) {
  this.G = a;
  this.M = b;
  this.c = c;
}
k = Se.prototype;
k.Ia = function(a) {
  if (a === this.G) {
    return this;
  }
  var b = nd(this.M), c = Array(0 > b ? 4 : 2 * (b + 1));
  Uc(this.c, 0, c, 0, 2 * b);
  return new Se(a, this.M, c);
};
k.Ya = function() {
  var a = this.c;
  return Te ? Te(a) : Ue.call(null, a);
};
k.Ja = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.M & e)) {
    return d;
  }
  var f = nd(this.M & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Ja(a + 5, b, c, d) : Pe(c, e) ? f : d;
};
k.ya = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = nd(this.M & g - 1);
  if (0 === (this.M & g)) {
    var l = nd(this.M);
    if (2 * l < this.c.length) {
      a = this.Ia(a);
      b = a.c;
      f.Ca = !0;
      a: {
        for (c = 2 * (l - h), f = 2 * h + (c - 1), l = 2 * (h + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * h] = d;
      b[2 * h + 1] = e;
      a.M |= g;
      return a;
    }
    if (16 <= l) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[c >>> b & 31] = Ve.ya(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.M >>> d & 1) && (h[d] = null != this.c[e] ? Ve.ya(a, b + 5, Xb(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new We(a, l + 1, h);
    }
    b = Array(2 * (l + 4));
    Uc(this.c, 0, b, 0, 2 * h);
    b[2 * h] = d;
    b[2 * h + 1] = e;
    Uc(this.c, 2 * h, b, 2 * (h + 1), 2 * (l - h));
    f.Ca = !0;
    a = this.Ia(a);
    a.c = b;
    a.M |= g;
    return a;
  }
  l = this.c[2 * h];
  g = this.c[2 * h + 1];
  if (null == l) {
    return l = g.ya(a, b + 5, c, d, e, f), l === g ? this : Re(this, a, 2 * h + 1, l);
  }
  if (Pe(d, l)) {
    return e === g ? this : Re(this, a, 2 * h + 1, e);
  }
  f.Ca = !0;
  f = b + 5;
  d = Xe ? Xe(a, f, l, g, c, d, e) : Ye.call(null, a, f, l, g, c, d, e);
  e = 2 * h;
  h = 2 * h + 1;
  a = this.Ia(a);
  a.c[e] = null;
  a.c[h] = d;
  return a;
};
k.xa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = nd(this.M & f - 1);
  if (0 === (this.M & f)) {
    var h = nd(this.M);
    if (16 <= h) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Ve.xa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.M >>> c & 1) && (g[c] = null != this.c[d] ? Ve.xa(a + 5, Xb(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new We(null, h + 1, g);
    }
    a = Array(2 * (h + 1));
    Uc(this.c, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Uc(this.c, 2 * g, a, 2 * (g + 1), 2 * (h - g));
    e.Ca = !0;
    return new Se(null, this.M | f, a);
  }
  var l = this.c[2 * g], f = this.c[2 * g + 1];
  if (null == l) {
    return h = f.xa(a + 5, b, c, d, e), h === f ? this : new Se(null, this.M, Qe(this.c, 2 * g + 1, h));
  }
  if (Pe(c, l)) {
    return d === f ? this : new Se(null, this.M, Qe(this.c, 2 * g + 1, d));
  }
  e.Ca = !0;
  e = this.M;
  h = this.c;
  a += 5;
  a = Ze ? Ze(a, l, f, b, c, d) : Ye.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Ia(h);
  d[c] = null;
  d[g] = a;
  return new Se(null, e, d);
};
var Ve = new Se(null, 0, []);
function We(a, b, c) {
  this.G = a;
  this.j = b;
  this.c = c;
}
k = We.prototype;
k.Ia = function(a) {
  return a === this.G ? this : new We(a, this.j, Ia(this.c));
};
k.Ya = function() {
  var a = this.c;
  return $e ? $e(a) : af.call(null, a);
};
k.Ja = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Ja(a + 5, b, c, d) : d;
};
k.ya = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.c[g];
  if (null == h) {
    return a = Re(this, a, g, Ve.ya(a, b + 5, c, d, e, f)), a.j += 1, a;
  }
  b = h.ya(a, b + 5, c, d, e, f);
  return b === h ? this : Re(this, a, g, b);
};
k.xa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new We(null, this.j + 1, Qe(this.c, f, Ve.xa(a + 5, b, c, d, e)));
  }
  a = g.xa(a + 5, b, c, d, e);
  return a === g ? this : new We(null, this.j, Qe(this.c, f, a));
};
function bf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Pe(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
}
function cf(a, b, c, d) {
  this.G = a;
  this.Fa = b;
  this.j = c;
  this.c = d;
}
k = cf.prototype;
k.Ia = function(a) {
  if (a === this.G) {
    return this;
  }
  var b = Array(2 * (this.j + 1));
  Uc(this.c, 0, b, 0, 2 * this.j);
  return new cf(a, this.Fa, this.j, b);
};
k.Ya = function() {
  var a = this.c;
  return Te ? Te(a) : Ue.call(null, a);
};
k.Ja = function(a, b, c, d) {
  a = bf(this.c, this.j, c);
  return 0 > a ? d : Pe(c, this.c[a]) ? this.c[a + 1] : d;
};
k.ya = function(a, b, c, d, e, f) {
  if (c === this.Fa) {
    b = bf(this.c, this.j, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.j) {
        return b = 2 * this.j, c = 2 * this.j + 1, a = this.Ia(a), a.c[b] = d, a.c[c] = e, f.Ca = !0, a.j += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Uc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.Ca = !0;
      d = this.j + 1;
      a === this.G ? (this.c = b, this.j = d, a = this) : a = new cf(this.G, this.Fa, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Re(this, a, b + 1, e);
  }
  return (new Se(a, 1 << (this.Fa >>> b & 31), [null, this, null, null])).ya(a, b, c, d, e, f);
};
k.xa = function(a, b, c, d, e) {
  return b === this.Fa ? (a = bf(this.c, this.j, c), -1 === a ? (a = 2 * this.j, b = Array(a + 2), Uc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.Ca = !0, new cf(null, this.Fa, this.j + 1, b)) : dc.a(this.c[a], d) ? this : new cf(null, this.Fa, this.j, Qe(this.c, a + 1, d))) : (new Se(null, 1 << (this.Fa >>> a & 31), [null, this])).xa(a, b, c, d, e);
};
function Ye() {
  switch(arguments.length) {
    case 6:
      return Ze(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Xe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Ze(a, b, c, d, e, f) {
  var g = Xb(b);
  if (g === d) {
    return new cf(null, g, 2, [b, c, e, f]);
  }
  var h = new Oe;
  return Ve.xa(a, g, b, c, h).xa(a, d, e, f, h);
}
function Xe(a, b, c, d, e, f, g) {
  var h = Xb(c);
  if (h === e) {
    return new cf(null, h, 2, [c, d, f, g]);
  }
  var l = new Oe;
  return Ve.ya(a, b, h, c, d, l).ya(a, b, e, f, g, l);
}
function df(a, b, c, d, e) {
  this.s = a;
  this.Ga = b;
  this.m = c;
  this.D = d;
  this.u = e;
  this.i = 32374860;
  this.C = 0;
}
k = df.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.s;
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return zc(b, this);
};
k.ha = function(a, b, c) {
  return Bc(b, c, this);
};
k.ia = function() {
  return null == this.D ? new S(null, 2, 5, V, [this.Ga[this.m], this.Ga[this.m + 1]], null) : I(this.D);
};
k.pa = function() {
  if (null == this.D) {
    var a = this.Ga, b = this.m + 2;
    return ef ? ef(a, b, null) : Ue.call(null, a, b, null);
  }
  var a = this.Ga, b = this.m, c = J(this.D);
  return ef ? ef(a, b, c) : Ue.call(null, a, b, c);
};
k.R = function() {
  return this;
};
k.S = function(a, b) {
  return new df(b, this.Ga, this.m, this.D, this.u);
};
k.N = function(a, b) {
  return L(b, this);
};
df.prototype[Ha] = function() {
  return gc(this);
};
function Ue() {
  switch(arguments.length) {
    case 1:
      return Te(arguments[0]);
    case 3:
      return ef(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Te(a) {
  return ef(a, 0, null);
}
function ef(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new df(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (x(d) && (d = d.Ya(), x(d))) {
          return new df(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new df(null, a, b, c, null);
  }
}
function ff(a, b, c, d, e) {
  this.s = a;
  this.Ga = b;
  this.m = c;
  this.D = d;
  this.u = e;
  this.i = 32374860;
  this.C = 0;
}
k = ff.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.s;
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return zc(b, this);
};
k.ha = function(a, b, c) {
  return Bc(b, c, this);
};
k.ia = function() {
  return I(this.D);
};
k.pa = function() {
  var a = this.Ga, b = this.m, c = J(this.D);
  return gf ? gf(null, a, b, c) : af.call(null, null, a, b, c);
};
k.R = function() {
  return this;
};
k.S = function(a, b) {
  return new ff(b, this.Ga, this.m, this.D, this.u);
};
k.N = function(a, b) {
  return L(b, this);
};
ff.prototype[Ha] = function() {
  return gc(this);
};
function af() {
  switch(arguments.length) {
    case 1:
      return $e(arguments[0]);
    case 4:
      return gf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function $e(a) {
  return gf(null, a, 0, null);
}
function gf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (x(e) && (e = e.Ya(), x(e))) {
          return new ff(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new ff(a, b, c, d, null);
  }
}
function hf(a, b, c, d, e, f) {
  this.s = a;
  this.j = b;
  this.root = c;
  this.ta = d;
  this.va = e;
  this.u = f;
  this.i = 16123663;
  this.C = 8196;
}
k = hf.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.keys = function() {
  return gc(He.b ? He.b(this) : He.call(null, this));
};
k.entries = function() {
  return De(F(this));
};
k.values = function() {
  return gc(Ie.b ? Ie.b(this) : Ie.call(null, this));
};
k.has = function(a) {
  return Yc(this, a);
};
k.get = function(a, b) {
  return this.K(null, a, b);
};
k.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), g = M(f, 0), f = M(f, 1);
      a.a ? a.a(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        Sc(b) ? (c = Db(b), b = Fb(b), g = c, d = Ec(c), c = g) : (c = I(b), g = M(c, 0), c = f = M(c, 1), a.a ? a.a(c, g) : a.call(null, c, g), b = J(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.la = function(a, b) {
  return Ua.h(this, b, null);
};
k.K = function(a, b, c) {
  return null == b ? this.ta ? this.va : c : null == this.root ? c : this.root.Ja(0, Xb(b), b, c);
};
k.L = function() {
  return this.s;
};
k.ka = function() {
  return this.j;
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = kc(this);
};
k.v = function(a, b) {
  return Be(this, b);
};
k.Ra = function() {
  return new jf({}, this.root, this.j, this.ta, this.va);
};
k.Pa = function(a, b, c) {
  if (null == b) {
    return this.ta && c === this.va ? this : new hf(this.s, this.ta ? this.j : this.j + 1, this.root, !0, c, null);
  }
  a = new Oe;
  b = (null == this.root ? Ve : this.root).xa(0, Xb(b), b, c, a);
  return b === this.root ? this : new hf(this.s, a.Ca ? this.j + 1 : this.j, b, this.ta, this.va, null);
};
k.R = function() {
  if (0 < this.j) {
    var a = null != this.root ? this.root.Ya() : null;
    return this.ta ? L(new S(null, 2, 5, V, [null, this.va], null), a) : a;
  }
  return null;
};
k.S = function(a, b) {
  return new hf(b, this.j, this.root, this.ta, this.va, this.u);
};
k.N = function(a, b) {
  if (Rc(b)) {
    return Va(this, E.a(b, 0), E.a(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (Rc(e)) {
      c = Va(c, E.a(e, 0), E.a(e, 1)), d = J(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.la(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.la(null, c);
  };
  a.h = function(a, c, d) {
    return this.K(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
k.b = function(a) {
  return this.la(null, a);
};
k.a = function(a, b) {
  return this.K(null, a, b);
};
var Kc = new hf(null, 0, null, !1, null, lc);
hf.prototype[Ha] = function() {
  return gc(this);
};
function jf(a, b, c, d, e) {
  this.G = a;
  this.root = b;
  this.count = c;
  this.ta = d;
  this.va = e;
  this.i = 258;
  this.C = 56;
}
function kf(a, b) {
  if (a.G) {
    if (b ? b.i & 2048 || b.Db || (b.i ? 0 : A(Xa, b)) : A(Xa, b)) {
      return lf(a, Le.b ? Le.b(b) : Le.call(null, b), Me.b ? Me.b(b) : Me.call(null, b));
    }
    for (var c = F(b), d = a;;) {
      var e = I(c);
      if (x(e)) {
        var f = e, c = J(c), d = lf(d, function() {
          var a = f;
          return Le.b ? Le.b(a) : Le.call(null, a);
        }(), function() {
          var a = f;
          return Me.b ? Me.b(a) : Me.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function lf(a, b, c) {
  if (a.G) {
    if (null == b) {
      a.va !== c && (a.va = c), a.ta || (a.count += 1, a.ta = !0);
    } else {
      var d = new Oe;
      b = (null == a.root ? Ve : a.root).ya(a.G, 0, Xb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Ca && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
k = jf.prototype;
k.ka = function() {
  if (this.G) {
    return this.count;
  }
  throw Error("count after persistent!");
};
k.la = function(a, b) {
  return null == b ? this.ta ? this.va : null : null == this.root ? null : this.root.Ja(0, Xb(b), b);
};
k.K = function(a, b, c) {
  return null == b ? this.ta ? this.va : c : null == this.root ? c : this.root.Ja(0, Xb(b), b, c);
};
k.eb = function(a, b) {
  return kf(this, b);
};
k.fb = function() {
  var a;
  if (this.G) {
    this.G = null, a = new hf(null, this.count, this.root, this.ta, this.va, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.Xa = function(a, b, c) {
  return lf(this, b, c);
};
var Qd = function Qd() {
  return Qd.l(0 < arguments.length ? new H(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Qd.l = function(a) {
  for (var b = F(a), c = vb(Kc);;) {
    if (b) {
      a = J(J(b));
      var d = I(b), b = I(J(b)), c = yb(c, d, b), b = a;
    } else {
      return xb(c);
    }
  }
};
Qd.B = 0;
Qd.w = function(a) {
  return Qd.l(F(a));
};
function mf(a, b) {
  this.oa = a;
  this.sa = b;
  this.i = 32374988;
  this.C = 0;
}
k = mf.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.sa;
};
k.na = function() {
  var a = this.oa, a = (a ? a.i & 128 || a.bb || (a.i ? 0 : A(Sa, a)) : A(Sa, a)) ? this.oa.na(null) : J(this.oa);
  return null == a ? null : new mf(a, this.sa);
};
k.H = function() {
  return ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return zc(b, this);
};
k.ha = function(a, b, c) {
  return Bc(b, c, this);
};
k.ia = function() {
  return this.oa.ia(null).pb();
};
k.pa = function() {
  var a = this.oa, a = (a ? a.i & 128 || a.bb || (a.i ? 0 : A(Sa, a)) : A(Sa, a)) ? this.oa.na(null) : J(this.oa);
  return null != a ? new mf(a, this.sa) : cc;
};
k.R = function() {
  return this;
};
k.S = function(a, b) {
  return new mf(this.oa, b);
};
k.N = function(a, b) {
  return L(b, this);
};
mf.prototype[Ha] = function() {
  return gc(this);
};
function He(a) {
  return (a = F(a)) ? new mf(a, null) : null;
}
function Le(a) {
  return Za(a);
}
function nf(a, b) {
  this.oa = a;
  this.sa = b;
  this.i = 32374988;
  this.C = 0;
}
k = nf.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.L = function() {
  return this.sa;
};
k.na = function() {
  var a = this.oa, a = (a ? a.i & 128 || a.bb || (a.i ? 0 : A(Sa, a)) : A(Sa, a)) ? this.oa.na(null) : J(this.oa);
  return null == a ? null : new nf(a, this.sa);
};
k.H = function() {
  return ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return zc(b, this);
};
k.ha = function(a, b, c) {
  return Bc(b, c, this);
};
k.ia = function() {
  return this.oa.ia(null).qb();
};
k.pa = function() {
  var a = this.oa, a = (a ? a.i & 128 || a.bb || (a.i ? 0 : A(Sa, a)) : A(Sa, a)) ? this.oa.na(null) : J(this.oa);
  return null != a ? new nf(a, this.sa) : cc;
};
k.R = function() {
  return this;
};
k.S = function(a, b) {
  return new nf(this.oa, b);
};
k.N = function(a, b) {
  return L(b, this);
};
nf.prototype[Ha] = function() {
  return gc(this);
};
function Ie(a) {
  return (a = F(a)) ? new nf(a, null) : null;
}
function Me(a) {
  return $a(a);
}
function wd(a) {
  if (a && (a.C & 4096 || a.Fb)) {
    return a.Ua(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([D("Doesn't support name: "), D(a)].join(""));
}
function of(a, b) {
  for (var c = vb(W), d = F(a), e = F(b);;) {
    if (d && e) {
      var f = I(d), g = I(e), c = yb(c, f, g), d = J(d), e = J(e)
    } else {
      return xb(c);
    }
  }
}
function pf(a, b, c) {
  this.m = a;
  this.end = b;
  this.step = c;
}
pf.prototype.gb = function() {
  return 0 < this.step ? this.m < this.end : this.m > this.end;
};
pf.prototype.next = function() {
  var a = this.m;
  this.m += this.step;
  return a;
};
function qf(a, b, c, d, e) {
  this.s = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.u = e;
  this.i = 32375006;
  this.C = 8192;
}
k = qf.prototype;
k.toString = function() {
  return Nb(this);
};
k.equiv = function(a) {
  return this.v(null, a);
};
k.O = function(a, b) {
  if (b < La(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.ra = function(a, b, c) {
  return b < La(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
k.Ta = function() {
  return new pf(this.start, this.end, this.step);
};
k.L = function() {
  return this.s;
};
k.na = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new qf(this.s, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new qf(this.s, this.start + this.step, this.end, this.step, null) : null;
};
k.ka = function() {
  return Ea(nb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
k.H = function() {
  var a = this.u;
  return null != a ? a : this.u = a = ic(this);
};
k.v = function(a, b) {
  return wc(this, b);
};
k.ga = function(a, b) {
  return nc(this, b);
};
k.ha = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
      a += this.step;
    } else {
      return c;
    }
  }
};
k.ia = function() {
  return null == nb(this) ? null : this.start;
};
k.pa = function() {
  return null != nb(this) ? new qf(this.s, this.start + this.step, this.end, this.step, null) : cc;
};
k.R = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
k.S = function(a, b) {
  return new qf(b, this.start, this.end, this.step, this.u);
};
k.N = function(a, b) {
  return L(b, this);
};
qf.prototype[Ha] = function() {
  return gc(this);
};
function rf(a) {
  return new qf(null, 1, a, 2, null);
}
var sf = function sf() {
  switch(arguments.length) {
    case 1:
      return sf.b(arguments[0]);
    case 2:
      return sf.a(arguments[0], arguments[1]);
    case 3:
      return sf.h(arguments[0], arguments[1], arguments[2]);
    default:
      return sf.l(arguments[0], arguments[1], arguments[2], new H(Array.prototype.slice.call(arguments, 3), 0));
  }
};
sf.b = function(a) {
  return function() {
    function b(b, c, d) {
      return new S(null, 1, 5, V, [a.h ? a.h(b, c, d) : a.call(null, b, c, d)], null);
    }
    function c(b, c) {
      return new S(null, 1, 5, V, [a.a ? a.a(b, c) : a.call(null, b, c)], null);
    }
    function d(b) {
      return new S(null, 1, 5, V, [a.b ? a.b(b) : a.call(null, b)], null);
    }
    function e() {
      return new S(null, 1, 5, V, [a.o ? a.o() : a.call(null)], null);
    }
    var f = null, g = function() {
      function b(a, d, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
            h[g] = arguments[g + 3], ++g;
          }
          g = new H(h, 0);
        }
        return c.call(this, a, d, e, g);
      }
      function c(b, d, e, f) {
        return new S(null, 1, 5, V, [Kd(a, b, d, e, f)], null);
      }
      b.B = 3;
      b.w = function(a) {
        var b = I(a);
        a = J(a);
        var d = I(a);
        a = J(a);
        var e = I(a);
        a = bc(a);
        return c(b, d, e, a);
      };
      b.l = c;
      return b;
    }(), f = function(a, f, m, n) {
      switch(arguments.length) {
        case 0:
          return e.call(this);
        case 1:
          return d.call(this, a);
        case 2:
          return c.call(this, a, f);
        case 3:
          return b.call(this, a, f, m);
        default:
          var p = null;
          if (3 < arguments.length) {
            for (var p = 0, q = Array(arguments.length - 3);p < q.length;) {
              q[p] = arguments[p + 3], ++p;
            }
            p = new H(q, 0);
          }
          return g.l(a, f, m, p);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    f.B = 3;
    f.w = g.w;
    f.o = e;
    f.b = d;
    f.a = c;
    f.h = b;
    f.l = g.l;
    return f;
  }();
};
sf.a = function(a, b) {
  return function() {
    function c(c, d, e) {
      return new S(null, 2, 5, V, [a.h ? a.h(c, d, e) : a.call(null, c, d, e), b.h ? b.h(c, d, e) : b.call(null, c, d, e)], null);
    }
    function d(c, d) {
      return new S(null, 2, 5, V, [a.a ? a.a(c, d) : a.call(null, c, d), b.a ? b.a(c, d) : b.call(null, c, d)], null);
    }
    function e(c) {
      return new S(null, 2, 5, V, [a.b ? a.b(c) : a.call(null, c), b.b ? b.b(c) : b.call(null, c)], null);
    }
    function f() {
      return new S(null, 2, 5, V, [a.o ? a.o() : a.call(null), b.o ? b.o() : b.call(null)], null);
    }
    var g = null, h = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
            h[g] = arguments[g + 3], ++g;
          }
          g = new H(h, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return new S(null, 2, 5, V, [Kd(a, c, e, f, g), Kd(b, c, e, f, g)], null);
      }
      c.B = 3;
      c.w = function(a) {
        var b = I(a);
        a = J(a);
        var c = I(a);
        a = J(a);
        var e = I(a);
        a = bc(a);
        return d(b, c, e, a);
      };
      c.l = d;
      return c;
    }(), g = function(a, b, g, p) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, g);
        default:
          var q = null;
          if (3 < arguments.length) {
            for (var q = 0, r = Array(arguments.length - 3);q < r.length;) {
              r[q] = arguments[q + 3], ++q;
            }
            q = new H(r, 0);
          }
          return h.l(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.B = 3;
    g.w = h.w;
    g.o = f;
    g.b = e;
    g.a = d;
    g.h = c;
    g.l = h.l;
    return g;
  }();
};
sf.h = function(a, b, c) {
  return function() {
    function d(d, e, f) {
      return new S(null, 3, 5, V, [a.h ? a.h(d, e, f) : a.call(null, d, e, f), b.h ? b.h(d, e, f) : b.call(null, d, e, f), c.h ? c.h(d, e, f) : c.call(null, d, e, f)], null);
    }
    function e(d, e) {
      return new S(null, 3, 5, V, [a.a ? a.a(d, e) : a.call(null, d, e), b.a ? b.a(d, e) : b.call(null, d, e), c.a ? c.a(d, e) : c.call(null, d, e)], null);
    }
    function f(d) {
      return new S(null, 3, 5, V, [a.b ? a.b(d) : a.call(null, d), b.b ? b.b(d) : b.call(null, d), c.b ? c.b(d) : c.call(null, d)], null);
    }
    function g() {
      return new S(null, 3, 5, V, [a.o ? a.o() : a.call(null), b.o ? b.o() : b.call(null), c.o ? c.o() : c.call(null)], null);
    }
    var h = null, l = function() {
      function d(a, b, c, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
            h[g] = arguments[g + 3], ++g;
          }
          g = new H(h, 0);
        }
        return e.call(this, a, b, c, g);
      }
      function e(d, f, g, h) {
        return new S(null, 3, 5, V, [Kd(a, d, f, g, h), Kd(b, d, f, g, h), Kd(c, d, f, g, h)], null);
      }
      d.B = 3;
      d.w = function(a) {
        var b = I(a);
        a = J(a);
        var c = I(a);
        a = J(a);
        var d = I(a);
        a = bc(a);
        return e(b, c, d, a);
      };
      d.l = e;
      return d;
    }(), h = function(a, b, c, h) {
      switch(arguments.length) {
        case 0:
          return g.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var r = null;
          if (3 < arguments.length) {
            for (var r = 0, t = Array(arguments.length - 3);r < t.length;) {
              t[r] = arguments[r + 3], ++r;
            }
            r = new H(t, 0);
          }
          return l.l(a, b, c, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.B = 3;
    h.w = l.w;
    h.o = g;
    h.b = f;
    h.a = e;
    h.h = d;
    h.l = l.l;
    return h;
  }();
};
sf.l = function(a, b, c, d) {
  return function(a) {
    return function() {
      function b(c, d, f) {
        return dd(function() {
          return function(a, b) {
            return Cc.a(a, b.h ? b.h(c, d, f) : b.call(null, c, d, f));
          };
        }(a), Dc, a);
      }
      function c(b, d) {
        return dd(function() {
          return function(a, c) {
            return Cc.a(a, c.a ? c.a(b, d) : c.call(null, b, d));
          };
        }(a), Dc, a);
      }
      function d(b) {
        return dd(function() {
          return function(a, c) {
            return Cc.a(a, c.b ? c.b(b) : c.call(null, b));
          };
        }(a), Dc, a);
      }
      function l() {
        return dd(function() {
          return function(a, b) {
            return Cc.a(a, b.o ? b.o() : b.call(null));
          };
        }(a), Dc, a);
      }
      var m = null, n = function() {
        function b(a, d, e, f) {
          var g = null;
          if (3 < arguments.length) {
            for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
              h[g] = arguments[g + 3], ++g;
            }
            g = new H(h, 0);
          }
          return c.call(this, a, d, e, g);
        }
        function c(b, d, f, g) {
          return dd(function() {
            return function(a, c) {
              return Cc.a(a, Kd(c, b, d, f, g));
            };
          }(a), Dc, a);
        }
        b.B = 3;
        b.w = function(a) {
          var b = I(a);
          a = J(a);
          var d = I(a);
          a = J(a);
          var e = I(a);
          a = bc(a);
          return c(b, d, e, a);
        };
        b.l = c;
        return b;
      }(), m = function(a, e, m, t) {
        switch(arguments.length) {
          case 0:
            return l.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, e);
          case 3:
            return b.call(this, a, e, m);
          default:
            var u = null;
            if (3 < arguments.length) {
              for (var u = 0, w = Array(arguments.length - 3);u < w.length;) {
                w[u] = arguments[u + 3], ++u;
              }
              u = new H(w, 0);
            }
            return n.l(a, e, m, u);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      m.B = 3;
      m.w = n.w;
      m.o = l;
      m.b = d;
      m.a = c;
      m.h = b;
      m.l = n.l;
      return m;
    }();
  }(L(a, L(b, L(c, d))));
};
sf.w = function(a) {
  var b = I(a), c = J(a);
  a = I(c);
  var d = J(c), c = I(d), d = J(d);
  return sf.l(b, a, c, d);
};
sf.B = 3;
function tf(a, b, c, d, e, f, g) {
  var h = qa;
  qa = null == qa ? null : qa - 1;
  try {
    if (null != qa && 0 > qa) {
      return rb(a, "#");
    }
    rb(a, c);
    if (0 === Ba.b(f)) {
      F(g) && rb(a, function() {
        var a = uf.b(f);
        return x(a) ? a : "...";
      }());
    } else {
      if (F(g)) {
        var l = I(g);
        b.h ? b.h(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = J(g), n = Ba.b(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          F(m) && 0 === n && (rb(a, d), rb(a, function() {
            var a = uf.b(f);
            return x(a) ? a : "...";
          }()));
          break;
        } else {
          rb(a, d);
          var p = I(m);
          c = a;
          g = f;
          b.h ? b.h(p, c, g) : b.call(null, p, c, g);
          var q = J(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
    }
    return rb(a, e);
  } finally {
    qa = h;
  }
}
function vf(a, b) {
  for (var c = F(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.O(null, f);
      rb(a, g);
      f += 1;
    } else {
      if (c = F(c)) {
        d = c, Sc(d) ? (c = Db(d), e = Fb(d), d = c, g = Ec(c), c = e, e = g) : (g = I(d), rb(a, g), c = J(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var wf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function xf(a) {
  return [D('"'), D(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return wf[a];
  })), D('"')].join("");
}
function yf(a, b, c) {
  if (null == a) {
    return rb(b, "nil");
  }
  if (void 0 === a) {
    return rb(b, "#\x3cundefined\x3e");
  }
  if (x(function() {
    var b = Hc(c, xa);
    return x(b) ? (b = a ? a.i & 131072 || a.Eb ? !0 : a.i ? !1 : A(db, a) : A(db, a)) ? Oc(a) : b : b;
  }())) {
    rb(b, "^");
    var d = Oc(a);
    zf.h ? zf.h(d, b, c) : zf.call(null, d, b, c);
    rb(b, " ");
  }
  return null == a ? rb(b, "nil") : a.Nb ? a.$b(a, b, c) : a && (a.i & 2147483648 || a.P) ? a.I(null, b, c) : Fa(a) === Boolean || "number" === typeof a ? rb(b, "" + D(a)) : null != a && a.constructor === Object ? (rb(b, "#js "), d = R.a(function(b) {
    return new S(null, 2, 5, V, [vd.b(b), a[b]], null);
  }, Tc(a)), Af.A ? Af.A(d, zf, b, c) : Af.call(null, d, zf, b, c)) : Da(a) ? tf(b, zf, "#js [", " ", "]", c, a) : x("string" == typeof a) ? x(wa.b(c)) ? rb(b, xf(a)) : rb(b, a) : Lc(a) ? vf(b, yc(["#\x3c", "" + D(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + D(a);;) {
      if (Ec(c) < b) {
        c = [D("0"), D(c)].join("");
      } else {
        return c;
      }
    }
  }, vf(b, yc(['#inst "', "" + D(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : x(a instanceof RegExp) ? vf(b, yc(['#"', a.source, '"'], 0)) : (a ? a.i & 2147483648 || a.P || (a.i ? 0 : A(sb, a)) : A(sb, a)) ? tb(a, b, c) : vf(b, yc(["#\x3c", "" + D(a), "\x3e"], 0));
}
function zf(a, b, c) {
  var d = Bf.b(c);
  return x(d) ? (c = Jc.h(c, Cf, yf), d.h ? d.h(a, b, c) : d.call(null, a, b, c)) : yf(a, b, c);
}
function Td() {
  var a = 0 < arguments.length ? new H(Array.prototype.slice.call(arguments, 0), 0) : null, b = sa(), c;
  if (null == a || Ea(F(a))) {
    c = "";
  } else {
    c = D;
    var d = b, b = new ka;
    a: {
      var e = a, a = new Mb(b);
      zf(I(e), a, d);
      for (var e = F(J(e)), f = null, g = 0, h = 0;;) {
        if (h < g) {
          var l = f.O(null, h);
          rb(a, " ");
          zf(l, a, d);
          h += 1;
        } else {
          if (e = F(e)) {
            f = e, Sc(f) ? (e = Db(f), g = Fb(f), f = e, l = Ec(e), e = g, g = l) : (l = I(f), rb(a, " "), zf(l, a, d), e = J(f), f = null, g = 0), h = 0;
          } else {
            break a;
          }
        }
      }
    }
    c = "" + c(b);
  }
  return c;
}
function Af(a, b, c, d) {
  return tf(c, function(a, c, d) {
    var h = Za(a);
    b.h ? b.h(h, c, d) : b.call(null, h, c, d);
    rb(c, " ");
    a = $a(a);
    return b.h ? b.h(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, F(a));
}
H.prototype.P = !0;
H.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
xd.prototype.P = !0;
xd.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
df.prototype.P = !0;
df.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
Fe.prototype.P = !0;
Fe.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
re.prototype.P = !0;
re.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
td.prototype.P = !0;
td.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
vc.prototype.P = !0;
vc.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
hf.prototype.P = !0;
hf.prototype.I = function(a, b, c) {
  return Af(this, zf, b, c);
};
ff.prototype.P = !0;
ff.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
ve.prototype.P = !0;
ve.prototype.I = function(a, b, c) {
  return tf(b, zf, "[", " ", "]", c, this);
};
Bd.prototype.P = !0;
Bd.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
Od.prototype.P = !0;
Od.prototype.I = function(a, b, c) {
  rb(b, "#\x3cAtom: ");
  zf(this.state, b, c);
  return rb(b, "\x3e");
};
nf.prototype.P = !0;
nf.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
S.prototype.P = !0;
S.prototype.I = function(a, b, c) {
  return tf(b, zf, "[", " ", "]", c, this);
};
qd.prototype.P = !0;
qd.prototype.I = function(a, b) {
  return rb(b, "()");
};
ua.prototype.P = !0;
ua.prototype.I = function(a, b, c) {
  return Af(this, zf, b, c);
};
qf.prototype.P = !0;
qf.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
mf.prototype.P = !0;
mf.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
pd.prototype.P = !0;
pd.prototype.I = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
$b.prototype.Qa = !0;
$b.prototype.La = function(a, b) {
  if (b instanceof $b) {
    return Zb(this, b);
  }
  throw Error([D("Cannot compare "), D(this), D(" to "), D(b)].join(""));
};
N.prototype.Qa = !0;
N.prototype.La = function(a, b) {
  if (b instanceof N) {
    return ud(this, b);
  }
  throw Error([D("Cannot compare "), D(this), D(" to "), D(b)].join(""));
};
ve.prototype.Qa = !0;
ve.prototype.La = function(a, b) {
  if (Rc(b)) {
    return $c(this, b);
  }
  throw Error([D("Cannot compare "), D(this), D(" to "), D(b)].join(""));
};
S.prototype.Qa = !0;
S.prototype.La = function(a, b) {
  if (Rc(b)) {
    return $c(this, b);
  }
  throw Error([D("Cannot compare "), D(this), D(" to "), D(b)].join(""));
};
var Df = null;
function Ef() {
  if (null == Df) {
    var a = new ua(null, 3, [Ff, W, Gf, W, Hf, W], null);
    Df = O ? O(a) : Pd.call(null, a);
  }
  return Df;
}
function If(a, b, c) {
  var d = dc.a(b, c);
  if (!d && !(d = Yc(Hf.b(a).call(null, b), c)) && (d = Rc(c)) && (d = Rc(b))) {
    if (d = Ec(c) === Ec(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== Ec(c)) {
          e = If(a, function() {
            var a = f;
            return b.b ? b.b(a) : b.call(null, a);
          }(), function() {
            var a = f;
            return c.b ? c.b(a) : c.call(null, a);
          }()), f = d = f + 1;
        } else {
          return e;
        }
      }
    } else {
      return d;
    }
  } else {
    return d;
  }
}
function Jf(a) {
  var b;
  b = Ef();
  b = K.b ? K.b(b) : K.call(null, b);
  a = Hc(Ff.b(b), a);
  return F(a) ? a : null;
}
function Lf(a, b, c, d) {
  Ud.a(a, function() {
    return K.b ? K.b(b) : K.call(null, b);
  });
  Ud.a(c, function() {
    return K.b ? K.b(d) : K.call(null, d);
  });
}
var Mf = function Mf(b, c, d) {
  var e = (K.b ? K.b(d) : K.call(null, d)).call(null, b), e = x(x(e) ? e.b ? e.b(c) : e.call(null, c) : e) ? !0 : null;
  if (x(e)) {
    return e;
  }
  e = function() {
    for (var e = Jf(c);;) {
      if (0 < Ec(e)) {
        Mf(b, I(e), d), e = bc(e);
      } else {
        return null;
      }
    }
  }();
  if (x(e)) {
    return e;
  }
  e = function() {
    for (var e = Jf(b);;) {
      if (0 < Ec(e)) {
        Mf(I(e), c, d), e = bc(e);
      } else {
        return null;
      }
    }
  }();
  return x(e) ? e : !1;
};
function Nf(a, b, c) {
  c = Mf(a, b, c);
  if (x(c)) {
    a = c;
  } else {
    c = If;
    var d;
    d = Ef();
    d = K.b ? K.b(d) : K.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var Of = function Of(b, c, d, e, f, g, h) {
  var l = dd(function(e, g) {
    var h = M(g, 0);
    M(g, 1);
    if (If(K.b ? K.b(d) : K.call(null, d), c, h)) {
      var l;
      l = (l = null == e) ? l : Nf(h, I(e), f);
      l = x(l) ? g : e;
      if (!x(Nf(I(l), h, f))) {
        throw Error([D("Multiple methods in multimethod '"), D(b), D("' match dispatch value: "), D(c), D(" -\x3e "), D(h), D(" and "), D(I(l)), D(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, K.b ? K.b(e) : K.call(null, e));
  if (x(l)) {
    if (dc.a(K.b ? K.b(h) : K.call(null, h), K.b ? K.b(d) : K.call(null, d))) {
      return Ud.A(g, Jc, c, I(J(l))), I(J(l));
    }
    Lf(g, e, h, d);
    return Of(b, c, d, e, f, g, h);
  }
  return null;
};
function X(a, b) {
  throw Error([D("No method in multimethod '"), D(a), D("' for dispatch value: "), D(b)].join(""));
}
function Pf(a, b, c, d, e, f, g, h) {
  this.name = a;
  this.g = b;
  this.Ob = c;
  this.hb = d;
  this.Za = e;
  this.Pb = f;
  this.ib = g;
  this.$a = h;
  this.i = 4194305;
  this.C = 4352;
}
k = Pf.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C, G, Q) {
    a = this;
    var ga = Ld(a.g, b, c, d, e, yc([f, g, h, l, m, n, p, q, r, t, u, w, z, y, C, G, Q], 0)), Kf = Z(this, ga);
    x(Kf) || X(a.name, ga);
    return Ld(Kf, b, c, d, e, yc([f, g, h, l, m, n, p, q, r, t, u, w, z, y, C, G, Q], 0));
  }
  function b(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C, G) {
    a = this;
    var Q = a.g.ca ? a.g.ca(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C, G) : a.g.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C, G), ga = Z(this, Q);
    x(ga) || X(a.name, Q);
    return ga.ca ? ga.ca(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C, G) : ga.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C, G);
  }
  function c(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C) {
    a = this;
    var G = a.g.ba ? a.g.ba(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C) : a.g.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C), Q = Z(this, G);
    x(Q) || X(a.name, G);
    return Q.ba ? Q.ba(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C) : Q.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y, C);
  }
  function d(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y) {
    a = this;
    var C = a.g.aa ? a.g.aa(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y) : a.g.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y), G = Z(this, C);
    x(G) || X(a.name, C);
    return G.aa ? G.aa(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y) : G.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, y);
  }
  function e(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z) {
    a = this;
    var y = a.g.$ ? a.g.$(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z) : a.g.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z), C = Z(this, y);
    x(C) || X(a.name, y);
    return C.$ ? C.$(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z) : C.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z);
  }
  function f(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w) {
    a = this;
    var z = a.g.Z ? a.g.Z(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w) : a.g.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w), y = Z(this, z);
    x(y) || X(a.name, z);
    return y.Z ? y.Z(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w) : y.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w);
  }
  function g(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) {
    a = this;
    var w = a.g.Y ? a.g.Y(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) : a.g.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u), z = Z(this, w);
    x(z) || X(a.name, w);
    return z.Y ? z.Y(b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) : z.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u);
  }
  function h(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) {
    a = this;
    var u = a.g.X ? a.g.X(b, c, d, e, f, g, h, l, m, n, p, q, r, t) : a.g.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t), w = Z(this, u);
    x(w) || X(a.name, u);
    return w.X ? w.X(b, c, d, e, f, g, h, l, m, n, p, q, r, t) : w.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, h, l, m, n, p, q, r) {
    a = this;
    var t = a.g.W ? a.g.W(b, c, d, e, f, g, h, l, m, n, p, q, r) : a.g.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r), u = Z(this, t);
    x(u) || X(a.name, t);
    return u.W ? u.W(b, c, d, e, f, g, h, l, m, n, p, q, r) : u.call(null, b, c, d, e, f, g, h, l, m, n, p, q, r);
  }
  function m(a, b, c, d, e, f, g, h, l, m, n, p, q) {
    a = this;
    var r = a.g.V ? a.g.V(b, c, d, e, f, g, h, l, m, n, p, q) : a.g.call(null, b, c, d, e, f, g, h, l, m, n, p, q), t = Z(this, r);
    x(t) || X(a.name, r);
    return t.V ? t.V(b, c, d, e, f, g, h, l, m, n, p, q) : t.call(null, b, c, d, e, f, g, h, l, m, n, p, q);
  }
  function n(a, b, c, d, e, f, g, h, l, m, n, p) {
    a = this;
    var q = a.g.U ? a.g.U(b, c, d, e, f, g, h, l, m, n, p) : a.g.call(null, b, c, d, e, f, g, h, l, m, n, p), r = Z(this, q);
    x(r) || X(a.name, q);
    return r.U ? r.U(b, c, d, e, f, g, h, l, m, n, p) : r.call(null, b, c, d, e, f, g, h, l, m, n, p);
  }
  function p(a, b, c, d, e, f, g, h, l, m, n) {
    a = this;
    var p = a.g.T ? a.g.T(b, c, d, e, f, g, h, l, m, n) : a.g.call(null, b, c, d, e, f, g, h, l, m, n), q = Z(this, p);
    x(q) || X(a.name, p);
    return q.T ? q.T(b, c, d, e, f, g, h, l, m, n) : q.call(null, b, c, d, e, f, g, h, l, m, n);
  }
  function q(a, b, c, d, e, f, g, h, l, m) {
    a = this;
    var n = a.g.fa ? a.g.fa(b, c, d, e, f, g, h, l, m) : a.g.call(null, b, c, d, e, f, g, h, l, m), p = Z(this, n);
    x(p) || X(a.name, n);
    return p.fa ? p.fa(b, c, d, e, f, g, h, l, m) : p.call(null, b, c, d, e, f, g, h, l, m);
  }
  function r(a, b, c, d, e, f, g, h, l) {
    a = this;
    var m = a.g.ea ? a.g.ea(b, c, d, e, f, g, h, l) : a.g.call(null, b, c, d, e, f, g, h, l), n = Z(this, m);
    x(n) || X(a.name, m);
    return n.ea ? n.ea(b, c, d, e, f, g, h, l) : n.call(null, b, c, d, e, f, g, h, l);
  }
  function t(a, b, c, d, e, f, g, h) {
    a = this;
    var l = a.g.da ? a.g.da(b, c, d, e, f, g, h) : a.g.call(null, b, c, d, e, f, g, h), m = Z(this, l);
    x(m) || X(a.name, l);
    return m.da ? m.da(b, c, d, e, f, g, h) : m.call(null, b, c, d, e, f, g, h);
  }
  function u(a, b, c, d, e, f, g) {
    a = this;
    var h = a.g.J ? a.g.J(b, c, d, e, f, g) : a.g.call(null, b, c, d, e, f, g), l = Z(this, h);
    x(l) || X(a.name, h);
    return l.J ? l.J(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function w(a, b, c, d, e, f) {
    a = this;
    var g = a.g.F ? a.g.F(b, c, d, e, f) : a.g.call(null, b, c, d, e, f), h = Z(this, g);
    x(h) || X(a.name, g);
    return h.F ? h.F(b, c, d, e, f) : h.call(null, b, c, d, e, f);
  }
  function z(a, b, c, d, e) {
    a = this;
    var f = a.g.A ? a.g.A(b, c, d, e) : a.g.call(null, b, c, d, e), g = Z(this, f);
    x(g) || X(a.name, f);
    return g.A ? g.A(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function C(a, b, c, d) {
    a = this;
    var e = a.g.h ? a.g.h(b, c, d) : a.g.call(null, b, c, d), f = Z(this, e);
    x(f) || X(a.name, e);
    return f.h ? f.h(b, c, d) : f.call(null, b, c, d);
  }
  function G(a, b, c) {
    a = this;
    var d = a.g.a ? a.g.a(b, c) : a.g.call(null, b, c), e = Z(this, d);
    x(e) || X(a.name, d);
    return e.a ? e.a(b, c) : e.call(null, b, c);
  }
  function Q(a, b) {
    a = this;
    var c = a.g.b ? a.g.b(b) : a.g.call(null, b), d = Z(this, c);
    x(d) || X(a.name, c);
    return d.b ? d.b(b) : d.call(null, b);
  }
  function ga(a) {
    a = this;
    var b = a.g.o ? a.g.o() : a.g.call(null), c = Z(this, b);
    x(c) || X(a.name, b);
    return c.o ? c.o() : c.call(null);
  }
  var y = null, y = function(y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, Ob, Qa, Ya, mb, Eb, fc, Qc, Zd) {
    switch(arguments.length) {
      case 1:
        return ga.call(this, y);
      case 2:
        return Q.call(this, y, P);
      case 3:
        return G.call(this, y, P, T);
      case 4:
        return C.call(this, y, P, T, U);
      case 5:
        return z.call(this, y, P, T, U, Y);
      case 6:
        return w.call(this, y, P, T, U, Y, aa);
      case 7:
        return u.call(this, y, P, T, U, Y, aa, da);
      case 8:
        return t.call(this, y, P, T, U, Y, aa, da, ea);
      case 9:
        return r.call(this, y, P, T, U, Y, aa, da, ea, ia);
      case 10:
        return q.call(this, y, P, T, U, Y, aa, da, ea, ia, ja);
      case 11:
        return p.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la);
      case 12:
        return n.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta);
      case 13:
        return m.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za);
      case 14:
        return l.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca);
      case 15:
        return h.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, Ob);
      case 16:
        return g.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, Ob, Qa);
      case 17:
        return f.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, Ob, Qa, Ya);
      case 18:
        return e.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, Ob, Qa, Ya, mb);
      case 19:
        return d.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, Ob, Qa, Ya, mb, Eb);
      case 20:
        return c.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, Ob, Qa, Ya, mb, Eb, fc);
      case 21:
        return b.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, Ob, Qa, Ya, mb, Eb, fc, Qc);
      case 22:
        return a.call(this, y, P, T, U, Y, aa, da, ea, ia, ja, la, ta, za, Ca, Ob, Qa, Ya, mb, Eb, fc, Qc, Zd);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  y.b = ga;
  y.a = Q;
  y.h = G;
  y.A = C;
  y.F = z;
  y.J = w;
  y.da = u;
  y.ea = t;
  y.fa = r;
  y.T = q;
  y.U = p;
  y.V = n;
  y.W = m;
  y.X = l;
  y.Y = h;
  y.Z = g;
  y.$ = f;
  y.aa = e;
  y.ba = d;
  y.ca = c;
  y.ob = b;
  y.Sa = a;
  return y;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ia(b)));
};
k.o = function() {
  var a = this.g.o ? this.g.o() : this.g.call(null), b = Z(this, a);
  x(b) || X(this.name, a);
  return b.o ? b.o() : b.call(null);
};
k.b = function(a) {
  var b = this.g.b ? this.g.b(a) : this.g.call(null, a), c = Z(this, b);
  x(c) || X(this.name, b);
  return c.b ? c.b(a) : c.call(null, a);
};
k.a = function(a, b) {
  var c = this.g.a ? this.g.a(a, b) : this.g.call(null, a, b), d = Z(this, c);
  x(d) || X(this.name, c);
  return d.a ? d.a(a, b) : d.call(null, a, b);
};
k.h = function(a, b, c) {
  var d = this.g.h ? this.g.h(a, b, c) : this.g.call(null, a, b, c), e = Z(this, d);
  x(e) || X(this.name, d);
  return e.h ? e.h(a, b, c) : e.call(null, a, b, c);
};
k.A = function(a, b, c, d) {
  var e = this.g.A ? this.g.A(a, b, c, d) : this.g.call(null, a, b, c, d), f = Z(this, e);
  x(f) || X(this.name, e);
  return f.A ? f.A(a, b, c, d) : f.call(null, a, b, c, d);
};
k.F = function(a, b, c, d, e) {
  var f = this.g.F ? this.g.F(a, b, c, d, e) : this.g.call(null, a, b, c, d, e), g = Z(this, f);
  x(g) || X(this.name, f);
  return g.F ? g.F(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
k.J = function(a, b, c, d, e, f) {
  var g = this.g.J ? this.g.J(a, b, c, d, e, f) : this.g.call(null, a, b, c, d, e, f), h = Z(this, g);
  x(h) || X(this.name, g);
  return h.J ? h.J(a, b, c, d, e, f) : h.call(null, a, b, c, d, e, f);
};
k.da = function(a, b, c, d, e, f, g) {
  var h = this.g.da ? this.g.da(a, b, c, d, e, f, g) : this.g.call(null, a, b, c, d, e, f, g), l = Z(this, h);
  x(l) || X(this.name, h);
  return l.da ? l.da(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
k.ea = function(a, b, c, d, e, f, g, h) {
  var l = this.g.ea ? this.g.ea(a, b, c, d, e, f, g, h) : this.g.call(null, a, b, c, d, e, f, g, h), m = Z(this, l);
  x(m) || X(this.name, l);
  return m.ea ? m.ea(a, b, c, d, e, f, g, h) : m.call(null, a, b, c, d, e, f, g, h);
};
k.fa = function(a, b, c, d, e, f, g, h, l) {
  var m = this.g.fa ? this.g.fa(a, b, c, d, e, f, g, h, l) : this.g.call(null, a, b, c, d, e, f, g, h, l), n = Z(this, m);
  x(n) || X(this.name, m);
  return n.fa ? n.fa(a, b, c, d, e, f, g, h, l) : n.call(null, a, b, c, d, e, f, g, h, l);
};
k.T = function(a, b, c, d, e, f, g, h, l, m) {
  var n = this.g.T ? this.g.T(a, b, c, d, e, f, g, h, l, m) : this.g.call(null, a, b, c, d, e, f, g, h, l, m), p = Z(this, n);
  x(p) || X(this.name, n);
  return p.T ? p.T(a, b, c, d, e, f, g, h, l, m) : p.call(null, a, b, c, d, e, f, g, h, l, m);
};
k.U = function(a, b, c, d, e, f, g, h, l, m, n) {
  var p = this.g.U ? this.g.U(a, b, c, d, e, f, g, h, l, m, n) : this.g.call(null, a, b, c, d, e, f, g, h, l, m, n), q = Z(this, p);
  x(q) || X(this.name, p);
  return q.U ? q.U(a, b, c, d, e, f, g, h, l, m, n) : q.call(null, a, b, c, d, e, f, g, h, l, m, n);
};
k.V = function(a, b, c, d, e, f, g, h, l, m, n, p) {
  var q = this.g.V ? this.g.V(a, b, c, d, e, f, g, h, l, m, n, p) : this.g.call(null, a, b, c, d, e, f, g, h, l, m, n, p), r = Z(this, q);
  x(r) || X(this.name, q);
  return r.V ? r.V(a, b, c, d, e, f, g, h, l, m, n, p) : r.call(null, a, b, c, d, e, f, g, h, l, m, n, p);
};
k.W = function(a, b, c, d, e, f, g, h, l, m, n, p, q) {
  var r = this.g.W ? this.g.W(a, b, c, d, e, f, g, h, l, m, n, p, q) : this.g.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q), t = Z(this, r);
  x(t) || X(this.name, r);
  return t.W ? t.W(a, b, c, d, e, f, g, h, l, m, n, p, q) : t.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q);
};
k.X = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r) {
  var t = this.g.X ? this.g.X(a, b, c, d, e, f, g, h, l, m, n, p, q, r) : this.g.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r), u = Z(this, t);
  x(u) || X(this.name, t);
  return u.X ? u.X(a, b, c, d, e, f, g, h, l, m, n, p, q, r) : u.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r);
};
k.Y = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) {
  var u = this.g.Y ? this.g.Y(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) : this.g.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t), w = Z(this, u);
  x(w) || X(this.name, u);
  return w.Y ? w.Y(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) : w.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t);
};
k.Z = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) {
  var w = this.g.Z ? this.g.Z(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) : this.g.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u), z = Z(this, w);
  x(z) || X(this.name, w);
  return z.Z ? z.Z(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) : z.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u);
};
k.$ = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w) {
  var z = this.g.$ ? this.g.$(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w) : this.g.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w), C = Z(this, z);
  x(C) || X(this.name, z);
  return C.$ ? C.$(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w) : C.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w);
};
k.aa = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z) {
  var C = this.g.aa ? this.g.aa(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z) : this.g.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z), G = Z(this, C);
  x(G) || X(this.name, C);
  return G.aa ? G.aa(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z) : G.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z);
};
k.ba = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C) {
  var G = this.g.ba ? this.g.ba(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C) : this.g.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C), Q = Z(this, G);
  x(Q) || X(this.name, G);
  return Q.ba ? Q.ba(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C) : Q.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C);
};
k.ca = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G) {
  var Q = this.g.ca ? this.g.ca(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G) : this.g.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G), ga = Z(this, Q);
  x(ga) || X(this.name, Q);
  return ga.ca ? ga.ca(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G) : ga.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G);
};
k.ob = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q) {
  var ga = Ld(this.g, a, b, c, d, yc([e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q], 0)), y = Z(this, ga);
  x(y) || X(this.name, ga);
  return Ld(y, a, b, c, d, yc([e, f, g, h, l, m, n, p, q, r, t, u, w, z, C, G, Q], 0));
};
function Qf(a, b, c) {
  Ud.A(a.Za, Jc, b, c);
  Lf(a.ib, a.Za, a.$a, a.hb);
}
function Z(a, b) {
  dc.a(function() {
    var b = a.$a;
    return K.b ? K.b(b) : K.call(null, b);
  }(), function() {
    var b = a.hb;
    return K.b ? K.b(b) : K.call(null, b);
  }()) || Lf(a.ib, a.Za, a.$a, a.hb);
  var c = function() {
    var b = a.ib;
    return K.b ? K.b(b) : K.call(null, b);
  }().call(null, b);
  if (x(c)) {
    return c;
  }
  c = Of(a.name, b, a.hb, a.Za, a.Pb, a.ib, a.$a);
  return x(c) ? c : function() {
    var b = a.Za;
    return K.b ? K.b(b) : K.call(null, b);
  }().call(null, a.Ob);
}
k.Ua = function() {
  return Hb(this.name);
};
k.Va = function() {
  return Ib(this.name);
};
k.H = function() {
  return this[ba] || (this[ba] = ++ca);
};
var xa = new N(null, "meta", "meta", 1499536964), Aa = new N(null, "dup", "dup", 556298533), Rf = new N(null, "_", "_", 1453416199), Rd = new N(null, "validator", "validator", -1966190681), Sf = new N(null, "default", "default", -1987822328), Tf = new N(null, "time", "time", 1385887882), Uf = new N(null, "roughness", "roughness", 1590413194), Vf = new N(null, "lose", "lose", -1493527476), Wf = new N(null, "state", "state", -1988618099), Cf = new N(null, "fallback-impl", "fallback-impl", -1501286995), 
va = new N(null, "flush-on-newline", "flush-on-newline", -151457939), Xf = new N(null, "theta", "theta", -427510258), Gf = new N(null, "descendants", "descendants", 1824886031), Yf = new N(null, "game-state", "game-state", 935682735), Hf = new N(null, "ancestors", "ancestors", -776045424), wa = new N(null, "readably", "readably", 1129599760), uf = new N(null, "more-marker", "more-marker", -14717935), Zf = new N(null, "c", "c", -1763192079), Ba = new N(null, "print-length", "print-length", 1931866356), 
$f = new N(null, "terrain", "terrain", 704966005), Ff = new N(null, "parents", "parents", -2027538891), ag = new N(null, "touch", "touch", 1496272469), bg = new N(null, "b", "b", 1482224470), cg = new N(null, "thrust", "thrust", 651754168), dg = new N(null, "live", "live", -1610148039), eg = new N(null, "cells", "cells", -985166822), fg = new N(null, "hierarchy", "hierarchy", -1053470341), Bf = new N(null, "alt-impl", "alt-impl", 670969595), gg = new N(null, "before", "before", -1633692388), hg = 
new N(null, "a", "a", -2123407586), ig = new N(null, "win", "win", -1624642689);
function jg(a, b, c, d, e, f) {
  var g = M(b, 0), h = od(b);
  b = R.a(function() {
    return function(a) {
      return c * fd(hd, R.h(jd, d, a));
    };
  }(b, g, h), f);
  return Id(sf, a).call(null, Yd(new S(null, 1, 5, V, [g + c * e], null), R.h(hd, h, b)));
}
function kg(a, b, c, d) {
  var e = M(b, 0), f = od(b);
  a = R.a(function() {
    return function(a) {
      return fd(hd, R.h(jd, d, a));
    };
  }(b, e, f), a);
  return Yd(new S(null, 1, 5, V, [e + c], null), R.h(function() {
    return function(a, b) {
      return a * c + b;
    };
  }(a, b, e, f), a, f));
}
function lg(a, b, c) {
  var d = mg, e = Wc(d) ? Id(Qd, d) : d, d = Hc(e, bg);
  a: {
    for (var e = Wc(e) ? Id(Qd, e) : e, f = Hc(e, hg), g = Hc(e, Zf), e = Ec(a), e = Vd(e, Wd(Dc));;) {
      if (Ea(I(g))) {
        break a;
      }
      e = R.h(Cc, e, jg(a, b, c, I(f), I(g), e));
      f = bc(f);
      g = bc(g);
    }
  }
  return kg(e, b, c, d);
}
;function ng(a, b) {
  var c = I(I(b)), d;
  d = Id(id, R.a(I, Vd(2, b)));
  d = Math.abs(d);
  var e = (a - c) / d | 0, c = $d(b, new S(null, 2, 5, V, [e, 0], null));
  d = $d(b, new S(null, 2, 5, V, [e, 1], null));
  var f = $d(b, new S(null, 2, 5, V, [e + 1, 0], null)), e = $d(b, new S(null, 2, 5, V, [e + 1, 1], null));
  return x(f) ? d + (a - c) / (f - c) * (e - d) : d;
}
function og(a) {
  return of(R.a(function(a) {
    return 2 * a;
  }, He(a)), Ie(a));
}
function pg(a, b) {
  return function d(e) {
    return new xd(null, function() {
      for (;;) {
        var f = F(e);
        if (f) {
          if (Sc(f)) {
            var g = Db(f), h = Ec(g), l = new zd(Array(h), 0);
            a: {
              for (var m = 0;;) {
                if (m < h) {
                  var n = E.a(g, m), p = .5 * fd(hd, R.a(a, sf.a(mc, kd).call(null, n))), n = new S(null, 2, 5, V, [n, p + b * (2 * Math.random() - 1)], null);
                  l.add(n);
                  m += 1;
                } else {
                  g = !0;
                  break a;
                }
              }
            }
            return g ? Cd(l.wa(), d(Fb(f))) : Cd(l.wa(), null);
          }
          l = I(f);
          g = .5 * fd(hd, R.a(a, sf.a(mc, kd).call(null, l)));
          return L(new S(null, 2, 5, V, [l, g + b * (2 * Math.random() - 1)], null), d(bc(f)));
        }
        return null;
      }
    }, null, null);
  }(rf(2 * Ec(a) - 1));
}
function qg(a) {
  var b = Wc(a) ? Id(Qd, a) : a;
  a = Hc(b, Uf);
  var b = Hc(b, eg), b = og(b), c = pg(b, a);
  return new ua(null, 2, [Uf, .5 * a, eg, Yd(b, c)], null);
}
function rg() {
  var a = new ua(null, 2, [Uf, 100, eg, new ua(null, 2, [0, 0, 1, 0], null)], null);
  return qe(function() {
    var b = Gc(Xd(qg, a), 10), c = Wc(b) ? Id(Qd, b) : b, d = Hc(c, eg), e = Id(ld, Ie(d));
    return bd(of(R.a(function(a, b, c) {
      return function(a) {
        return -100 + 200 * (a / (Ec(c) - 1));
      };
    }(b, c, d, e), He(d)), R.a(function(a, b, c, d) {
      return function(a) {
        return a - d;
      };
    }(b, c, d, e), Ie(d))));
  }());
}
;var mg = new ua(null, 3, [Zf, new S(null, 4, 5, V, [0, .5, .5, 1], null), hg, new S(null, 4, 5, V, [Dc, new S(null, 1, 5, V, [.5], null), new S(null, 2, 5, V, [0, .5], null), new S(null, 3, 5, V, [0, 0, 1], null)], null), bg, new S(null, 4, 5, V, [1 / 6, 1 / 3, 1 / 3, 1 / 6], null)], null);
function sg(a) {
  var b = new ua(null, 6, [Yf, dg, Wf, new S(null, 5, 5, V, [0, 0, 190, 0, 0], null), Tf, (new Date).getTime(), Xf, 0, cg, 0, $f, rg()], null);
  return Sd.a ? Sd.a(a, b) : Sd.call(null, a, b);
}
if ("undefined" === typeof tg) {
  var tg, ug = O ? O(W) : Pd.call(null, W), vg = O ? O(W) : Pd.call(null, W), wg = O ? O(W) : Pd.call(null, W), xg = O ? O(W) : Pd.call(null, W), yg = Ic(W, fg, Ef());
  tg = new Pf(ac("lander.simulation", "sim"), Yf, Sf, yg, ug, vg, wg, xg);
}
Qf(tg, dg, function(a) {
  var b = Wc(a) ? Id(Qd, a) : a, c = Hc(b, Xf), d = Hc(b, cg), e = Hc(b, Tf), f = Hc(b, Wf), g = (new Date).getTime(), h = .001 * (g - e), l = function(a, b, c, d, e, f, g) {
    return function() {
      return Math.sin(f * Math.PI / -180) * g;
    };
  }(g, h, a, b, b, c, d, e, f), m = function(a, b, c, d, e, f, g, h) {
    return function() {
      return -9.81 + Math.cos(g * Math.PI / -180) * h;
    };
  }(g, h, l, a, b, b, c, d, e, f);
  a = lg(new S(null, 4, 5, V, [function() {
    return function(a) {
      return a.b ? a.b(3) : a.call(null, 3);
    };
  }(g, h, l, m, a, b, b, c, d, e, f), function() {
    return function(a) {
      return a.b ? a.b(4) : a.call(null, 4);
    };
  }(g, h, l, m, a, b, b, c, d, e, f), l, m], null), f, h);
  return Yd(b, new ua(null, 2, [Wf, a, Tf, g], null));
});
Qf(tg, Sf, function(a) {
  return a;
});
if ("undefined" === typeof zg) {
  var zg, Ag = O ? O(W) : Pd.call(null, W), Bg = O ? O(W) : Pd.call(null, W), Cg = O ? O(W) : Pd.call(null, W), Dg = O ? O(W) : Pd.call(null, W), Eg = Ic(W, fg, Ef());
  zg = new Pf(ac("lander.game-state", "game-state"), Yf, Sf, Eg, Ag, Bg, Cg, Dg);
}
Qf(zg, dg, function(a) {
  a = Wc(a) ? Id(Qd, a) : a;
  var b = Hc(a, Wf);
  M(b, 0);
  var c = M(b, 1), d = M(b, 2), e = M(b, 3), b = M(b, 4), f = Hc(a, Xf), g = Hc(a, $f), g = ng(c, g);
  return d - 5 < g && 0 === f && -10 <= b && 10 >= b && -10 <= e && 10 >= e ? Jc.h(a, Yf, ig) : -100 <= c && 100 >= c && g + 5 <= d && 200 >= d ? a : Jc.h(a, Yf, Vf);
});
Qf(zg, Sf, function(a) {
  return a;
});
if ("undefined" === typeof Fg) {
  var Fg = function() {
    var a = O ? O(W) : Pd.call(null, W), b = O ? O(W) : Pd.call(null, W), c = O ? O(W) : Pd.call(null, W), d = O ? O(W) : Pd.call(null, W), e = Ic(W, fg, Ef());
    return new Pf(ac("lander.render", "render"), function() {
      return function(a) {
        return a.b ? a.b(Yf) : a.call(null, Yf);
      };
    }(a, b, c, d, e), Sf, e, a, b, c, d);
  }()
}
;if ("undefined" === typeof Gg) {
  var Gg = function() {
    var a = O ? O(W) : Pd.call(null, W), b = O ? O(W) : Pd.call(null, W), c = O ? O(W) : Pd.call(null, W), d = O ? O(W) : Pd.call(null, W), e = Ic(W, fg, Ef());
    return new Pf(ac("lander.input", "handle-keydown"), function() {
      return function(a) {
        return (K.b ? K.b(a) : K.call(null, a)).call(null, Yf);
      };
    }(a, b, c, d, e), Sf, e, a, b, c, d);
  }()
}
Qf(Gg, Sf, function(a, b) {
  switch(b.keyCode) {
    case 13:
      return sg(a);
    default:
      return null;
  }
});
Qf(Gg, dg, function(a, b) {
  var c = b.keyCode;
  switch(c) {
    case 37:
    ;
    case 97:
      return Ud.A(a, ae, Xf, function() {
        return function(a) {
          return ((a + 10) % 360 + 360) % 360;
        };
      }(c));
    case 39:
    ;
    case 100:
      return Ud.A(a, ae, Xf, function() {
        return function(a) {
          return ((a - 10) % 360 + 360) % 360;
        };
      }(c));
    case 32:
    ;
    case 70:
      return Ud.A(a, Jc, cg, 100);
    default:
      return null;
  }
});
if ("undefined" === typeof Hg) {
  var Hg = function() {
    var a = O ? O(W) : Pd.call(null, W), b = O ? O(W) : Pd.call(null, W), c = O ? O(W) : Pd.call(null, W), d = O ? O(W) : Pd.call(null, W), e = Ic(W, fg, Ef());
    return new Pf(ac("lander.input", "handle-keyup"), function() {
      return function(a) {
        return (K.b ? K.b(a) : K.call(null, a)).call(null, Yf);
      };
    }(a, b, c, d, e), Sf, e, a, b, c, d);
  }()
}
Qf(Hg, Sf, function(a, b) {
  switch(b.keyCode) {
    case 32:
    ;
    case 70:
      return Ud.A(a, Jc, cg, 0);
    default:
      return null;
  }
});
if ("undefined" === typeof Ig) {
  var Ig = function() {
    var a = O ? O(W) : Pd.call(null, W), b = O ? O(W) : Pd.call(null, W), c = O ? O(W) : Pd.call(null, W), d = O ? O(W) : Pd.call(null, W), e = Ic(W, fg, Ef());
    return new Pf(ac("lander.input", "handle-touchstart"), function() {
      return function(a) {
        return (K.b ? K.b(a) : K.call(null, a)).call(null, Yf);
      };
    }(a, b, c, d, e), Sf, e, a, b, c, d);
  }()
}
Qf(Ig, Sf, function(a) {
  return sg(a);
});
Qf(Ig, dg, function(a) {
  return Ud.A(a, Jc, cg, 100);
});
if ("undefined" === typeof Jg) {
  var Jg = function() {
    var a = O ? O(W) : Pd.call(null, W), b = O ? O(W) : Pd.call(null, W), c = O ? O(W) : Pd.call(null, W), d = O ? O(W) : Pd.call(null, W), e = Ic(W, fg, Ef());
    return new Pf(ac("lander.input", "handle-touchmove"), function() {
      return function(a) {
        return (K.b ? K.b(a) : K.call(null, a)).call(null, Yf);
      };
    }(a, b, c, d, e), Sf, e, a, b, c, d);
  }()
}
Qf(Jg, Sf, function() {
  return cc;
});
if ("undefined" === typeof Kg) {
  var Kg = function() {
    var a = O ? O(W) : Pd.call(null, W), b = O ? O(W) : Pd.call(null, W), c = O ? O(W) : Pd.call(null, W), d = O ? O(W) : Pd.call(null, W), e = Ic(W, fg, Ef());
    return new Pf(ac("lander.input", "handle-touchend"), function() {
      return function(a) {
        return (K.b ? K.b(a) : K.call(null, a)).call(null, Yf);
      };
    }(a, b, c, d, e), Sf, e, a, b, c, d);
  }()
}
Qf(Kg, Sf, function() {
  return cc;
});
Qf(Kg, dg, function(a) {
  return Ud.A(a, Jc, cg, 0);
});
function Lg(a) {
  return window.onload = function() {
    var b = function() {
      var a = new ua(null, 1, [Yf, gg], null);
      return O ? O(a) : Pd.call(null, a);
    }();
    setInterval(function(b) {
      return function() {
        var d = Ud.a(b, Nd.a(zg, tg));
        return Fg.a ? Fg.a(d, a) : Fg.call(null, d, a);
      };
    }(b), 1);
    document.onkeydown = function(a) {
      return function(b) {
        return Gg.a ? Gg.a(a, b) : Gg.call(null, a, b);
      };
    }(b);
    document.onkeyup = function(a) {
      return function(b) {
        return Hg.a ? Hg.a(a, b) : Hg.call(null, a, b);
      };
    }(b);
    document.ontouchstart = function(a) {
      return function(b) {
        return Ig.a ? Ig.a(a, b) : Ig.call(null, a, b);
      };
    }(b);
    document.ontouchmove = function(a) {
      return function(b) {
        return Jg.a ? Jg.a(a, b) : Jg.call(null, a, b);
      };
    }(b);
    return document.ontouchend = function(a) {
      return function(b) {
        return Kg.a ? Kg.a(a, b) : Kg.call(null, a, b);
      };
    }(b);
  }();
}
var Mg = ["lander", "lunarlander", "init"], Ng = this;
Mg[0] in Ng || !Ng.execScript || Ng.execScript("var " + Mg[0]);
for (var Og;Mg.length && (Og = Mg.shift());) {
  var Pg;
  if (Pg = !Mg.length) {
    Pg = void 0 !== Lg;
  }
  Pg ? Ng[Og] = Lg : Ng = Ng[Og] ? Ng[Og] : Ng[Og] = {};
}
;function Qg(a) {
  var b = a.getContext("2d");
  b.fillStyle = "#000000";
  b.fillRect(0, 0, a.width, a.height);
}
function Rg(a) {
  a.beginPath();
  a.moveTo(-3, -5);
  a.lineTo(0, 5);
  a.lineTo(3, -5);
  a.lineTo(-3, -5);
  a.fill();
}
function Sg(a, b) {
  var c = Wc(b) ? Id(Qd, b) : b, d = Hc(c, Wf), e = Hc(c, Xf), f = Hc(c, $f);
  Hc(c, ag);
  var g = a.width, h = a.height;
  M(d, 0);
  var l = M(d, 1), m = M(d, 2);
  M(d, 3);
  var n = M(d, 4);
  Qg(a);
  d = a.getContext("2d");
  d.fillStyle = "#00FF00";
  d.strokeStyle = "#FFFFFF";
  d.fillText([D("Elevation: "), D(m - ng(l, f))].join(""), 0, 10);
  d.fillText([D("Rotation: "), D(e)].join(""), 0, 20);
  d.fillText([D("Y Velocity: "), D(n)].join(""), 0, 30);
  d.save();
  d.translate(0, h);
  d.scale(1, -1);
  d.scale(g / 200, h / 200);
  d.translate(100, -0);
  g = M(f, 0);
  e = M(g, 0);
  g = M(g, 1);
  f = od(f);
  d.beginPath();
  d.moveTo(e, g);
  f = F(f);
  e = null;
  for (h = g = 0;;) {
    if (h < g) {
      m = e.O(null, h), l = M(m, 0), m = M(m, 1), d.lineTo(l, m), h += 1;
    } else {
      if (f = F(f)) {
        Sc(f) ? (g = Db(f), f = Fb(f), e = g, g = Ec(g)) : (g = I(f), e = M(g, 0), g = M(g, 1), d.lineTo(e, g), f = J(f), e = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
  d.stroke();
  c = Wc(c) ? Id(Qd, c) : c;
  g = Hc(c, Wf);
  f = Hc(c, Xf);
  M(g, 0);
  e = M(g, 1);
  g = M(g, 2);
  d.save();
  d.translate(e, g);
  d.rotate(f * Math.PI / 180);
  c = Wc(c) ? Id(Qd, c) : c;
  Hc(c, Rf);
  0 < Hc(c, cg) && (d.save(), d.translate(0, -5), d.fillStyle = "#FF0000", Rg(d), d.restore());
  d.fillStyle = "#FFFFFF";
  Rg(d);
  d.restore();
  d.restore();
  return d;
}
Qf(Fg, ig, function(a, b) {
  Sg(b, a);
  var c = b.getContext("2d");
  c.fillStyle = "#00FF00";
  c.strokeStyle = "#FFFFFF";
  c.fillText("Good Job!", 100, 200);
  c.fillText("You Won!", 100, 210);
  c.fillText("Press Enter/Return key to play again!", 100, 220);
  return c;
});
Qf(Fg, Vf, function(a, b) {
  Sg(b, a);
  var c = b.getContext("2d");
  c.fillStyle = "#00FF00";
  c.strokeStyle = "#FFFFFF";
  c.fillText("Sorry, You Lost!", 100, 200);
  c.fillText("Press Enter/Return key to play again!", 100, 210);
  return c;
});
Qf(Fg, dg, function(a, b) {
  return Sg(b, a);
});
Qf(Fg, Sf, function(a, b) {
  Qg(b);
  var c = b.getContext("2d");
  c.fillStyle = "#00FF00";
  c.strokeStyle = "#FFFFFF";
  c.fillText("Welcome to Lunar Lander!", 30, 40);
  c.fillText("Press Enter/Return key to play!", 30, 50);
  c.fillText("Press left and right arrow keys to rotate.", 30, 60);
  c.fillText("Press 'f' or space to engage rocket.", 30, 70);
  c.fillText("Win by making a gentle landing (\x3c\x3d 10 m/s) with 0 rotation.", 30, 80);
  c.fillText("Leaving the screen to the left, right, or top will cause you to lose.", 30, 90);
  return c;
});

})();
