import {
  __toESM,
  require_react
} from "./chunk-3A6WRQ5K.js";

// node_modules/use-count-up/lib/index.module.js
var import_react = __toESM(require_react());
var import_react2 = __toESM(require_react());
var D = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty;
var G = Object.prototype.propertyIsEnumerable;
var T = (e, t) => {
  var r = {};
  for (var n in e) z.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && D) for (var n of D(e)) t.indexOf(n) < 0 && G.call(e, n) && (r[n] = e[n]);
  return r;
};
var J = Object.defineProperty;
var H = Object.defineProperties;
var K = Object.getOwnPropertyDescriptors;
var j = Object.getOwnPropertySymbols;
var Q = Object.prototype.hasOwnProperty;
var W = Object.prototype.propertyIsEnumerable;
var I = (e, t, r) => t in e ? J(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
var x = (e, t) => {
  for (var r in t || (t = {})) Q.call(t, r) && I(e, r, t[r]);
  if (j) for (var r of j(t)) W.call(t, r) && I(e, r, t[r]);
  return e;
};
var U = (e, t) => H(e, K(t));
var S = typeof window == "undefined" ? import_react2.useEffect : import_react2.useLayoutEffect;
var h = ({ isPlaying: e, duration: t, startAt: r = 0, updateInterval: n = 0, onComplete: i, onUpdate: y }) => {
  let [p, g] = (0, import_react.useState)(r), v = (0, import_react.useRef)(r * -1e3), s = (0, import_react.useRef)(null), m = (0, import_react.useRef)(null), f = (0, import_react.useRef)(null), o = (0, import_react.useRef)({ elapsedTimeRef: 0, startAtRef: r, durationRef: t, updateIntervalRef: n });
  o.current = U(x({}, o.current), { durationRef: t, updateIntervalRef: n });
  let c = (a) => {
    let u = a / 1e3;
    if (m.current === null) {
      m.current = u, s.current = requestAnimationFrame(c);
      return;
    }
    let { durationRef: l, elapsedTimeRef: F, updateIntervalRef: C, startAtRef: b } = o.current, O = u - m.current, E = F + O;
    m.current = u, o.current = U(x({}, o.current), { elapsedTimeRef: E });
    let M = b + (C === 0 ? E : (E / C | 0) * C), N = b + E, A = typeof l == "number" && N >= l;
    g(A ? l : M), A || (s.current = requestAnimationFrame(c));
  }, R = () => {
    s.current && cancelAnimationFrame(s.current), f.current && clearTimeout(f.current), m.current = null;
  }, P = (0, import_react.useCallback)((a) => {
    let u = typeof a == "number" ? a : r;
    R(), o.current = U(x({}, o.current), { elapsedTimeRef: 0, startAtRef: u }), g(u), e && (s.current = requestAnimationFrame(c));
  }, [e, r]);
  return S(() => {
    if (y == null || y(p), t && p >= t) {
      v.current += t * 1e3;
      let { shouldRepeat: a = false, delay: u = 0, newStartAt: l } = (i == null ? void 0 : i(v.current / 1e3)) || {};
      a && (f.current = setTimeout(() => P(l), u * 1e3));
    }
  }, [p, t]), S(() => (e && (s.current = requestAnimationFrame(c)), R), [e]), { elapsedTime: p, reset: P };
};
var q = { easeInCubic: (e, t, r, n) => (e /= n, r * e * e * e + t), easeOutCubic: (e, t, r, n) => (e /= n, e--, r * (e * e * e + 1) + t), linear: (e, t, r, n) => r * e / n + t };
var V = q.easeOutCubic;
var L = (e) => typeof e == "function" ? e : q[e];
var ee = (e, t) => {
  if (typeof e == "number") return typeof t == "number" ? t : 2;
};
var $ = (e, t) => e.replace(/\B(?=(\d{3})+(?!\d))/g, t);
var k = (e) => (e.toString().split(".")[1] || "").length;
var te = (e, t) => {
  let r = k(e), n = k(t || 1);
  return r >= n ? r : n;
};
var w = ({ isCounting: e = false, start: t = 0, end: r, duration: n, decimalPlaces: i = te(t, r), decimalSeparator: y = ".", thousandsSeparator: p = "", onComplete: g, easing: v = V, formatter: s, updateInterval: m, onUpdate: f }) => {
  let o = ee(r, n), c = (a) => {
    let u;
    if (o === 0 && typeof r == "number") u = r;
    else if (typeof r == "number" && typeof o == "number") {
      let b = L(v), O = a < o ? a : o;
      u = b(O, t, r - t, o);
    } else u = t + a;
    if (typeof s == "function") return s(u);
    if (i === 0) {
      let b = Math.round(u).toString();
      return $(b, p);
    }
    let [l, F] = u.toFixed(i).split(".");
    return `${$(l, p)}${y}${F}`;
  }, { elapsedTime: R, reset: P } = h({ isPlaying: e, duration: o, onComplete: g, updateInterval: m, onUpdate: typeof f == "function" ? (a) => f(c(a)) : void 0 });
  return { value: c(R), reset: P };
};
var B = (r) => {
  var n = r, { children: e } = n, t = T(n, ["children"]);
  let i = w(t);
  return typeof e == "function" ? e(i) : i.value;
};
B.displayName = "CountUp";
export {
  B as CountUp,
  w as useCountUp
};
//# sourceMappingURL=use-count-up.js.map
