const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/why-choose-us-BBDhUE3o.js", "assets/Animations-BG4611__.js", "assets/shield-CLJFp9NC.js", "assets/droplets-OV74fR_7.js", "assets/award-CizxQVDO.js", "assets/truck-CU-_gN3k.js", "assets/users-D9I6g6sz.js", "assets/solutions-DySUiK0k.js", "assets/sprout-DLbV3SnK.js", "assets/quote-xKRYDtW6.js", "assets/products-Bqo_J_p1.js", "assets/quality-C_mrhP_g.js", "assets/circle-check-big-BUh_Aa88.js", "assets/products-CBU9Do_k.js?v=3", "assets/ProductCard-D2P1SyxT.js", "assets/tank-product-hAiUylBt.js", "assets/pricing-rfu24AHZ.js", "assets/gallery-BT6WejGK.js", "assets/tank-hero-nqMAYr-a.js", "assets/tank-range-hY3DHWse.js", "assets/faq-hWRhsX-J.js", "assets/delivery-ZburUZaB.js", "assets/contact-Kgl5pQjk.js", "assets/about-CzKdivLO.js", "assets/index-CB4FrW2e.js?v=3"]))) => i.map(i => d[i]);

function uE(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Rf = {
        exports: {}
    },
    gr = {};
var Rg;

function cE() {
    if (Rg) return gr;
    Rg = 1;
    var e = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.fragment");

    function a(r, l, c) {
        var f = null;
        if (c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), "key" in l) {
            c = {};
            for (var h in l) h !== "key" && (c[h] = l[h])
        } else c = l;
        return l = c.ref, {
            $$typeof: e,
            type: r,
            key: f,
            ref: l !== void 0 ? l : null,
            props: c
        }
    }
    return gr.Fragment = i, gr.jsx = a, gr.jsxs = a, gr
}
var _g;

function fE() {
    return _g || (_g = 1, Rf.exports = cE()), Rf.exports
}
var j = fE(),
    _f = {
        exports: {}
    },
    dt = {};
var Mg;

function dE() {
    if (Mg) return dt;
    Mg = 1;
    var e = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        a = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        c = Symbol.for("react.consumer"),
        f = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        g = Symbol.for("react.activity"),
        S = Symbol.iterator;

    function b(C) {
        return C === null || typeof C != "object" ? null : (C = S && C[S] || C["@@iterator"], typeof C == "function" ? C : null)
    }
    var E = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        _ = Object.assign,
        A = {};

    function R(C, X, tt) {
        this.props = C, this.context = X, this.refs = A, this.updater = tt || E
    }
    R.prototype.isReactComponent = {}, R.prototype.setState = function(C, X) {
        if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, X, "setState")
    }, R.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate")
    };

    function N() {}
    N.prototype = R.prototype;

    function L(C, X, tt) {
        this.props = C, this.context = X, this.refs = A, this.updater = tt || E
    }
    var O = L.prototype = new N;
    O.constructor = L, _(O, R.prototype), O.isPureReactComponent = !0;
    var F = Array.isArray;

    function J() {}
    var q = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        K = Object.prototype.hasOwnProperty;

    function Z(C, X, tt) {
        var nt = tt.ref;
        return {
            $$typeof: e,
            type: C,
            key: X,
            ref: nt !== void 0 ? nt : null,
            props: tt
        }
    }

    function I(C, X) {
        return Z(C.type, X, C.props)
    }

    function $(C) {
        return typeof C == "object" && C !== null && C.$$typeof === e
    }

    function ot(C) {
        var X = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + C.replace(/[=:]/g, function(tt) {
            return X[tt]
        })
    }
    var ct = /\/+/g;

    function Et(C, X) {
        return typeof C == "object" && C !== null && C.key != null ? ot("" + C.key) : X.toString(36)
    }

    function yt(C) {
        switch (C.status) {
            case "fulfilled":
                return C.value;
            case "rejected":
                throw C.reason;
            default:
                switch (typeof C.status == "string" ? C.then(J, J) : (C.status = "pending", C.then(function(X) {
                    C.status === "pending" && (C.status = "fulfilled", C.value = X)
                }, function(X) {
                    C.status === "pending" && (C.status = "rejected", C.reason = X)
                })), C.status) {
                    case "fulfilled":
                        return C.value;
                    case "rejected":
                        throw C.reason
                }
        }
        throw C
    }

    function P(C, X, tt, nt, rt) {
        var pt = typeof C;
        (pt === "undefined" || pt === "boolean") && (C = null);
        var At = !1;
        if (C === null) At = !0;
        else switch (pt) {
            case "bigint":
            case "string":
            case "number":
                At = !0;
                break;
            case "object":
                switch (C.$$typeof) {
                    case e:
                    case i:
                        At = !0;
                        break;
                    case y:
                        return At = C._init, P(At(C._payload), X, tt, nt, rt)
                }
        }
        if (At) return rt = rt(C), At = nt === "" ? "." + Et(C, 0) : nt, F(rt) ? (tt = "", At != null && (tt = At.replace(ct, "$&/") + "/"), P(rt, X, tt, "", function(Rn) {
            return Rn
        })) : rt != null && ($(rt) && (rt = I(rt, tt + (rt.key == null || C && C.key === rt.key ? "" : ("" + rt.key).replace(ct, "$&/") + "/") + At)), X.push(rt)), 1;
        At = 0;
        var Ft = nt === "" ? "." : nt + ":";
        if (F(C))
            for (var zt = 0; zt < C.length; zt++) nt = C[zt], pt = Ft + Et(nt, zt), At += P(nt, X, tt, pt, rt);
        else if (zt = b(C), typeof zt == "function")
            for (C = zt.call(C), zt = 0; !(nt = C.next()).done;) nt = nt.value, pt = Ft + Et(nt, zt++), At += P(nt, X, tt, pt, rt);
        else if (pt === "object") {
            if (typeof C.then == "function") return P(yt(C), X, tt, nt, rt);
            throw X = String(C), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.")
        }
        return At
    }

    function W(C, X, tt) {
        if (C == null) return C;
        var nt = [],
            rt = 0;
        return P(C, nt, "", "", function(pt) {
            return X.call(tt, pt, rt++)
        }), nt
    }

    function et(C) {
        if (C._status === -1) {
            var X = C._result;
            X = X(), X.then(function(tt) {
                (C._status === 0 || C._status === -1) && (C._status = 1, C._result = tt)
            }, function(tt) {
                (C._status === 0 || C._status === -1) && (C._status = 2, C._result = tt)
            }), C._status === -1 && (C._status = 0, C._result = X)
        }
        if (C._status === 1) return C._result.default;
        throw C._result
    }
    var ft = typeof reportError == "function" ? reportError : function(C) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var X = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
                    error: C
                });
                if (!window.dispatchEvent(X)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", C);
                return
            }
            console.error(C)
        },
        gt = {
            map: W,
            forEach: function(C, X, tt) {
                W(C, function() {
                    X.apply(this, arguments)
                }, tt)
            },
            count: function(C) {
                var X = 0;
                return W(C, function() {
                    X++
                }), X
            },
            toArray: function(C) {
                return W(C, function(X) {
                    return X
                }) || []
            },
            only: function(C) {
                if (!$(C)) throw Error("React.Children.only expected to receive a single React element child.");
                return C
            }
        };
    return dt.Activity = g, dt.Children = gt, dt.Component = R, dt.Fragment = a, dt.Profiler = l, dt.PureComponent = L, dt.StrictMode = r, dt.Suspense = p, dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, dt.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(C) {
            return q.H.useMemoCache(C)
        }
    }, dt.cache = function(C) {
        return function() {
            return C.apply(null, arguments)
        }
    }, dt.cacheSignal = function() {
        return null
    }, dt.cloneElement = function(C, X, tt) {
        if (C == null) throw Error("The argument must be a React element, but you passed " + C + ".");
        var nt = _({}, C.props),
            rt = C.key;
        if (X != null)
            for (pt in X.key !== void 0 && (rt = "" + X.key), X) !K.call(X, pt) || pt === "key" || pt === "__self" || pt === "__source" || pt === "ref" && X.ref === void 0 || (nt[pt] = X[pt]);
        var pt = arguments.length - 2;
        if (pt === 1) nt.children = tt;
        else if (1 < pt) {
            for (var At = Array(pt), Ft = 0; Ft < pt; Ft++) At[Ft] = arguments[Ft + 2];
            nt.children = At
        }
        return Z(C.type, rt, nt)
    }, dt.createContext = function(C) {
        return C = {
            $$typeof: f,
            _currentValue: C,
            _currentValue2: C,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, C.Provider = C, C.Consumer = {
            $$typeof: c,
            _context: C
        }, C
    }, dt.createElement = function(C, X, tt) {
        var nt, rt = {},
            pt = null;
        if (X != null)
            for (nt in X.key !== void 0 && (pt = "" + X.key), X) K.call(X, nt) && nt !== "key" && nt !== "__self" && nt !== "__source" && (rt[nt] = X[nt]);
        var At = arguments.length - 2;
        if (At === 1) rt.children = tt;
        else if (1 < At) {
            for (var Ft = Array(At), zt = 0; zt < At; zt++) Ft[zt] = arguments[zt + 2];
            rt.children = Ft
        }
        if (C && C.defaultProps)
            for (nt in At = C.defaultProps, At) rt[nt] === void 0 && (rt[nt] = At[nt]);
        return Z(C, pt, rt)
    }, dt.createRef = function() {
        return {
            current: null
        }
    }, dt.forwardRef = function(C) {
        return {
            $$typeof: h,
            render: C
        }
    }, dt.isValidElement = $, dt.lazy = function(C) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: C
            },
            _init: et
        }
    }, dt.memo = function(C, X) {
        return {
            $$typeof: m,
            type: C,
            compare: X === void 0 ? null : X
        }
    }, dt.startTransition = function(C) {
        var X = q.T,
            tt = {};
        q.T = tt;
        try {
            var nt = C(),
                rt = q.S;
            rt !== null && rt(tt, nt), typeof nt == "object" && nt !== null && typeof nt.then == "function" && nt.then(J, ft)
        } catch (pt) {
            ft(pt)
        } finally {
            X !== null && tt.types !== null && (X.types = tt.types), q.T = X
        }
    }, dt.unstable_useCacheRefresh = function() {
        return q.H.useCacheRefresh()
    }, dt.use = function(C) {
        return q.H.use(C)
    }, dt.useActionState = function(C, X, tt) {
        return q.H.useActionState(C, X, tt)
    }, dt.useCallback = function(C, X) {
        return q.H.useCallback(C, X)
    }, dt.useContext = function(C) {
        return q.H.useContext(C)
    }, dt.useDebugValue = function() {}, dt.useDeferredValue = function(C, X) {
        return q.H.useDeferredValue(C, X)
    }, dt.useEffect = function(C, X) {
        return q.H.useEffect(C, X)
    }, dt.useEffectEvent = function(C) {
        return q.H.useEffectEvent(C)
    }, dt.useId = function() {
        return q.H.useId()
    }, dt.useImperativeHandle = function(C, X, tt) {
        return q.H.useImperativeHandle(C, X, tt)
    }, dt.useInsertionEffect = function(C, X) {
        return q.H.useInsertionEffect(C, X)
    }, dt.useLayoutEffect = function(C, X) {
        return q.H.useLayoutEffect(C, X)
    }, dt.useMemo = function(C, X) {
        return q.H.useMemo(C, X)
    }, dt.useOptimistic = function(C, X) {
        return q.H.useOptimistic(C, X)
    }, dt.useReducer = function(C, X, tt) {
        return q.H.useReducer(C, X, tt)
    }, dt.useRef = function(C) {
        return q.H.useRef(C)
    }, dt.useState = function(C) {
        return q.H.useState(C)
    }, dt.useSyncExternalStore = function(C, X, tt) {
        return q.H.useSyncExternalStore(C, X, tt)
    }, dt.useTransition = function() {
        return q.H.useTransition()
    }, dt.version = "19.2.5", dt
}
var Cg;

function Kr() {
    return Cg || (Cg = 1, _f.exports = dE()), _f.exports
}
var k = Kr();
const Nr = uE(k);
var Mf = {
        exports: {}
    },
    vr = {},
    Cf = {
        exports: {}
    },
    Df = {};
var Dg;

function hE() {
    return Dg || (Dg = 1, (function(e) {
        function i(P, W) {
            var et = P.length;
            P.push(W);
            t: for (; 0 < et;) {
                var ft = et - 1 >>> 1,
                    gt = P[ft];
                if (0 < l(gt, W)) P[ft] = W, P[et] = gt, et = ft;
                else break t
            }
        }

        function a(P) {
            return P.length === 0 ? null : P[0]
        }

        function r(P) {
            if (P.length === 0) return null;
            var W = P[0],
                et = P.pop();
            if (et !== W) {
                P[0] = et;
                t: for (var ft = 0, gt = P.length, C = gt >>> 1; ft < C;) {
                    var X = 2 * (ft + 1) - 1,
                        tt = P[X],
                        nt = X + 1,
                        rt = P[nt];
                    if (0 > l(tt, et)) nt < gt && 0 > l(rt, tt) ? (P[ft] = rt, P[nt] = et, ft = nt) : (P[ft] = tt, P[X] = et, ft = X);
                    else if (nt < gt && 0 > l(rt, et)) P[ft] = rt, P[nt] = et, ft = nt;
                    else break t
                }
            }
            return W
        }

        function l(P, W) {
            var et = P.sortIndex - W.sortIndex;
            return et !== 0 ? et : P.id - W.id
        }
        if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            e.unstable_now = function() {
                return c.now()
            }
        } else {
            var f = Date,
                h = f.now();
            e.unstable_now = function() {
                return f.now() - h
            }
        }
        var p = [],
            m = [],
            y = 1,
            g = null,
            S = 3,
            b = !1,
            E = !1,
            _ = !1,
            A = !1,
            R = typeof setTimeout == "function" ? setTimeout : null,
            N = typeof clearTimeout == "function" ? clearTimeout : null,
            L = typeof setImmediate < "u" ? setImmediate : null;

        function O(P) {
            for (var W = a(m); W !== null;) {
                if (W.callback === null) r(m);
                else if (W.startTime <= P) r(m), W.sortIndex = W.expirationTime, i(p, W);
                else break;
                W = a(m)
            }
        }

        function F(P) {
            if (_ = !1, O(P), !E)
                if (a(p) !== null) E = !0, J || (J = !0, ot());
                else {
                    var W = a(m);
                    W !== null && yt(F, W.startTime - P)
                }
        }
        var J = !1,
            q = -1,
            K = 5,
            Z = -1;

        function I() {
            return A ? !0 : !(e.unstable_now() - Z < K)
        }

        function $() {
            if (A = !1, J) {
                var P = e.unstable_now();
                Z = P;
                var W = !0;
                try {
                    t: {
                        E = !1,
                        _ && (_ = !1, N(q), q = -1),
                        b = !0;
                        var et = S;
                        try {
                            e: {
                                for (O(P), g = a(p); g !== null && !(g.expirationTime > P && I());) {
                                    var ft = g.callback;
                                    if (typeof ft == "function") {
                                        g.callback = null, S = g.priorityLevel;
                                        var gt = ft(g.expirationTime <= P);
                                        if (P = e.unstable_now(), typeof gt == "function") {
                                            g.callback = gt, O(P), W = !0;
                                            break e
                                        }
                                        g === a(p) && r(p), O(P)
                                    } else r(p);
                                    g = a(p)
                                }
                                if (g !== null) W = !0;
                                else {
                                    var C = a(m);
                                    C !== null && yt(F, C.startTime - P), W = !1
                                }
                            }
                            break t
                        }
                        finally {
                            g = null, S = et, b = !1
                        }
                        W = void 0
                    }
                }
                finally {
                    W ? ot() : J = !1
                }
            }
        }
        var ot;
        if (typeof L == "function") ot = function() {
            L($)
        };
        else if (typeof MessageChannel < "u") {
            var ct = new MessageChannel,
                Et = ct.port2;
            ct.port1.onmessage = $, ot = function() {
                Et.postMessage(null)
            }
        } else ot = function() {
            R($, 0)
        };

        function yt(P, W) {
            q = R(function() {
                P(e.unstable_now())
            }, W)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
            P.callback = null
        }, e.unstable_forceFrameRate = function(P) {
            0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < P ? Math.floor(1e3 / P) : 5
        }, e.unstable_getCurrentPriorityLevel = function() {
            return S
        }, e.unstable_next = function(P) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                    var W = 3;
                    break;
                default:
                    W = S
            }
            var et = S;
            S = W;
            try {
                return P()
            } finally {
                S = et
            }
        }, e.unstable_requestPaint = function() {
            A = !0
        }, e.unstable_runWithPriority = function(P, W) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    P = 3
            }
            var et = S;
            S = P;
            try {
                return W()
            } finally {
                S = et
            }
        }, e.unstable_scheduleCallback = function(P, W, et) {
            var ft = e.unstable_now();
            switch (typeof et == "object" && et !== null ? (et = et.delay, et = typeof et == "number" && 0 < et ? ft + et : ft) : et = ft, P) {
                case 1:
                    var gt = -1;
                    break;
                case 2:
                    gt = 250;
                    break;
                case 5:
                    gt = 1073741823;
                    break;
                case 4:
                    gt = 1e4;
                    break;
                default:
                    gt = 5e3
            }
            return gt = et + gt, P = {
                id: y++,
                callback: W,
                priorityLevel: P,
                startTime: et,
                expirationTime: gt,
                sortIndex: -1
            }, et > ft ? (P.sortIndex = et, i(m, P), a(p) === null && P === a(m) && (_ ? (N(q), q = -1) : _ = !0, yt(F, et - ft))) : (P.sortIndex = gt, i(p, P), E || b || (E = !0, J || (J = !0, ot()))), P
        }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(P) {
            var W = S;
            return function() {
                var et = S;
                S = W;
                try {
                    return P.apply(this, arguments)
                } finally {
                    S = et
                }
            }
        }
    })(Df)), Df
}
var Og;

function mE() {
    return Og || (Og = 1, Cf.exports = hE()), Cf.exports
}
var Of = {
        exports: {}
    },
    Se = {};
var Lg;

function pE() {
    if (Lg) return Se;
    Lg = 1;
    var e = Kr();

    function i(p) {
        var m = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++) m += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function a() {}
    var r = {
            d: {
                f: a,
                r: function() {
                    throw Error(i(522))
                },
                D: a,
                C: a,
                L: a,
                m: a,
                X: a,
                S: a,
                M: a
            },
            p: 0,
            findDOMNode: null
        },
        l = Symbol.for("react.portal");

    function c(p, m, y) {
        var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: l,
            key: g == null ? null : "" + g,
            children: p,
            containerInfo: m,
            implementation: y
        }
    }
    var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function h(p, m) {
        if (p === "font") return "";
        if (typeof m == "string") return m === "use-credentials" ? m : ""
    }
    return Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Se.createPortal = function(p, m) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(i(299));
        return c(p, m, null, y)
    }, Se.flushSync = function(p) {
        var m = f.T,
            y = r.p;
        try {
            if (f.T = null, r.p = 2, p) return p()
        } finally {
            f.T = m, r.p = y, r.d.f()
        }
    }, Se.preconnect = function(p, m) {
        typeof p == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, r.d.C(p, m))
    }, Se.prefetchDNS = function(p) {
        typeof p == "string" && r.d.D(p)
    }, Se.preinit = function(p, m) {
        if (typeof p == "string" && m && typeof m.as == "string") {
            var y = m.as,
                g = h(y, m.crossOrigin),
                S = typeof m.integrity == "string" ? m.integrity : void 0,
                b = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            y === "style" ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: g,
                integrity: S,
                fetchPriority: b
            }) : y === "script" && r.d.X(p, {
                crossOrigin: g,
                integrity: S,
                fetchPriority: b,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }, Se.preinitModule = function(p, m) {
        if (typeof p == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var y = h(m.as, m.crossOrigin);
                    r.d.M(p, {
                        crossOrigin: y,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else m == null && r.d.M(p)
    }, Se.preload = function(p, m) {
        if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var y = m.as,
                g = h(y, m.crossOrigin);
            r.d.L(p, y, {
                crossOrigin: g,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }, Se.preloadModule = function(p, m) {
        if (typeof p == "string")
            if (m) {
                var y = h(m.as, m.crossOrigin);
                r.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: y,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else r.d.m(p)
    }, Se.requestFormReset = function(p) {
        r.d.r(p)
    }, Se.unstable_batchedUpdates = function(p, m) {
        return p(m)
    }, Se.useFormState = function(p, m, y) {
        return f.H.useFormState(p, m, y)
    }, Se.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }, Se.version = "19.2.5", Se
}
var Ng;

function q0() {
    if (Ng) return Of.exports;
    Ng = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (i) {
            console.error(i)
        }
    }
    return e(), Of.exports = pE(), Of.exports
}
var zg;

function yE() {
    if (zg) return vr;
    zg = 1;
    var e = mE(),
        i = Kr(),
        a = q0();

    function r(t) {
        var n = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var s = 2; s < arguments.length; s++) n += "&args[]=" + encodeURIComponent(arguments[s])
        }
        return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function l(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function c(t) {
        var n = t,
            s = t;
        if (t.alternate)
            for (; n.return;) n = n.return;
        else {
            t = n;
            do n = t, (n.flags & 4098) !== 0 && (s = n.return), t = n.return; while (t)
        }
        return n.tag === 3 ? s : null
    }

    function f(t) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated
        }
        return null
    }

    function h(t) {
        if (t.tag === 31) {
            var n = t.memoizedState;
            if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated
        }
        return null
    }

    function p(t) {
        if (c(t) !== t) throw Error(r(188))
    }

    function m(t) {
        var n = t.alternate;
        if (!n) {
            if (n = c(t), n === null) throw Error(r(188));
            return n !== t ? null : t
        }
        for (var s = t, o = n;;) {
            var u = s.return;
            if (u === null) break;
            var d = u.alternate;
            if (d === null) {
                if (o = u.return, o !== null) {
                    s = o;
                    continue
                }
                break
            }
            if (u.child === d.child) {
                for (d = u.child; d;) {
                    if (d === s) return p(u), t;
                    if (d === o) return p(u), n;
                    d = d.sibling
                }
                throw Error(r(188))
            }
            if (s.return !== o.return) s = u, o = d;
            else {
                for (var v = !1, x = u.child; x;) {
                    if (x === s) {
                        v = !0, s = u, o = d;
                        break
                    }
                    if (x === o) {
                        v = !0, o = u, s = d;
                        break
                    }
                    x = x.sibling
                }
                if (!v) {
                    for (x = d.child; x;) {
                        if (x === s) {
                            v = !0, s = d, o = u;
                            break
                        }
                        if (x === o) {
                            v = !0, o = d, s = u;
                            break
                        }
                        x = x.sibling
                    }
                    if (!v) throw Error(r(189))
                }
            }
            if (s.alternate !== o) throw Error(r(190))
        }
        if (s.tag !== 3) throw Error(r(188));
        return s.stateNode.current === s ? t : n
    }

    function y(t) {
        var n = t.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return t;
        for (t = t.child; t !== null;) {
            if (n = y(t), n !== null) return n;
            t = t.sibling
        }
        return null
    }
    var g = Object.assign,
        S = Symbol.for("react.element"),
        b = Symbol.for("react.transitional.element"),
        E = Symbol.for("react.portal"),
        _ = Symbol.for("react.fragment"),
        A = Symbol.for("react.strict_mode"),
        R = Symbol.for("react.profiler"),
        N = Symbol.for("react.consumer"),
        L = Symbol.for("react.context"),
        O = Symbol.for("react.forward_ref"),
        F = Symbol.for("react.suspense"),
        J = Symbol.for("react.suspense_list"),
        q = Symbol.for("react.memo"),
        K = Symbol.for("react.lazy"),
        Z = Symbol.for("react.activity"),
        I = Symbol.for("react.memo_cache_sentinel"),
        $ = Symbol.iterator;

    function ot(t) {
        return t === null || typeof t != "object" ? null : (t = $ && t[$] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var ct = Symbol.for("react.client.reference");

    function Et(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === ct ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case _:
                return "Fragment";
            case R:
                return "Profiler";
            case A:
                return "StrictMode";
            case F:
                return "Suspense";
            case J:
                return "SuspenseList";
            case Z:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case E:
                return "Portal";
            case L:
                return t.displayName || "Context";
            case N:
                return (t._context.displayName || "Context") + ".Consumer";
            case O:
                var n = t.render;
                return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case q:
                return n = t.displayName || null, n !== null ? n : Et(t.type) || "Memo";
            case K:
                n = t._payload, t = t._init;
                try {
                    return Et(t(n))
                } catch {}
        }
        return null
    }
    var yt = Array.isArray,
        P = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        W = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        et = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        ft = [],
        gt = -1;

    function C(t) {
        return {
            current: t
        }
    }

    function X(t) {
        0 > gt || (t.current = ft[gt], ft[gt] = null, gt--)
    }

    function tt(t, n) {
        gt++, ft[gt] = t.current, t.current = n
    }
    var nt = C(null),
        rt = C(null),
        pt = C(null),
        At = C(null);

    function Ft(t, n) {
        switch (tt(pt, n), tt(rt, t), tt(nt, null), n.nodeType) {
            case 9:
            case 11:
                t = (t = n.documentElement) && (t = t.namespaceURI) ? Zy(t) : 0;
                break;
            default:
                if (t = n.tagName, n = n.namespaceURI) n = Zy(n), t = Iy(n, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        X(nt), tt(nt, t)
    }

    function zt() {
        X(nt), X(rt), X(pt)
    }

    function Rn(t) {
        t.memoizedState !== null && tt(At, t);
        var n = nt.current,
            s = Iy(n, t.type);
        n !== s && (tt(rt, t), tt(nt, s))
    }

    function _n(t) {
        rt.current === t && (X(nt), X(rt)), At.current === t && (X(At), hr._currentValue = et)
    }
    var Jn, Ts;

    function mn(t) {
        if (Jn === void 0) try {
            throw Error()
        } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            Jn = n && n[1] || "", Ts = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Jn + t + Ts
    }
    var Es = !1;

    function Sa(t, n) {
        if (!t || Es) return "";
        Es = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var o = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (n) {
                            var Q = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(Q.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Q, [])
                                } catch (H) {
                                    var U = H
                                }
                                Reflect.construct(t, [], Q)
                            } else {
                                try {
                                    Q.call()
                                } catch (H) {
                                    U = H
                                }
                                t.call(Q.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (H) {
                                U = H
                            }(Q = t()) && typeof Q.catch == "function" && Q.catch(function() {})
                        }
                    } catch (H) {
                        if (H && U && typeof H.stack == "string") return [H.stack, U.stack]
                    }
                    return [null, null]
                }
            };
            o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var d = o.DetermineComponentFrameRoot(),
                v = d[0],
                x = d[1];
            if (v && x) {
                var M = v.split(`
`),
                    V = x.split(`
`);
                for (u = o = 0; o < M.length && !M[o].includes("DetermineComponentFrameRoot");) o++;
                for (; u < V.length && !V[u].includes("DetermineComponentFrameRoot");) u++;
                if (o === M.length || u === V.length)
                    for (o = M.length - 1, u = V.length - 1; 1 <= o && 0 <= u && M[o] !== V[u];) u--;
                for (; 1 <= o && 0 <= u; o--, u--)
                    if (M[o] !== V[u]) {
                        if (o !== 1 || u !== 1)
                            do
                                if (o--, u--, 0 > u || M[o] !== V[u]) {
                                    var Y = `
` + M[o].replace(" at new ", " at ");
                                    return t.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", t.displayName)), Y
                                }
                        while (1 <= o && 0 <= u);
                        break
                    }
            }
        } finally {
            Es = !1, Error.prepareStackTrace = s
        }
        return (s = t ? t.displayName || t.name : "") ? mn(s) : ""
    }

    function Zr(t, n) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return mn(t.type);
            case 16:
                return mn("Lazy");
            case 13:
                return t.child !== n && n !== null ? mn("Suspense Fallback") : mn("Suspense");
            case 19:
                return mn("SuspenseList");
            case 0:
            case 15:
                return Sa(t.type, !1);
            case 11:
                return Sa(t.type.render, !1);
            case 1:
                return Sa(t.type, !0);
            case 31:
                return mn("Activity");
            default:
                return ""
        }
    }

    function Mn(t) {
        try {
            var n = "",
                s = null;
            do n += Zr(t, s), s = t, t = t.return; while (t);
            return n
        } catch (o) {
            return `
Error generating stack: ` + o.message + `
` + o.stack
        }
    }
    var Pi = Object.prototype.hasOwnProperty,
        on = e.unstable_scheduleCallback,
        As = e.unstable_cancelCallback,
        Ir = e.unstable_shouldYield,
        du = e.unstable_requestPaint,
        ve = e.unstable_now,
        Ut = e.unstable_getCurrentPriorityLevel,
        ue = e.unstable_ImmediatePriority,
        pn = e.unstable_UserBlockingPriority,
        ba = e.unstable_NormalPriority,
        Y1 = e.unstable_LowPriority,
        Ch = e.unstable_IdlePriority,
        G1 = e.log,
        X1 = e.unstable_setDisableYieldValue,
        ws = null,
        ze = null;

    function Wn(t) {
        if (typeof G1 == "function" && X1(t), ze && typeof ze.setStrictMode == "function") try {
            ze.setStrictMode(ws, t)
        } catch {}
    }
    var je = Math.clz32 ? Math.clz32 : Z1,
        F1 = Math.log,
        Q1 = Math.LN2;

    function Z1(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (F1(t) / Q1 | 0) | 0
    }
    var Jr = 256,
        Wr = 262144,
        $r = 4194304;

    function Hi(t) {
        var n = t & 42;
        if (n !== 0) return n;
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return t & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t
        }
    }

    function to(t, n, s) {
        var o = t.pendingLanes;
        if (o === 0) return 0;
        var u = 0,
            d = t.suspendedLanes,
            v = t.pingedLanes;
        t = t.warmLanes;
        var x = o & 134217727;
        return x !== 0 ? (o = x & ~d, o !== 0 ? u = Hi(o) : (v &= x, v !== 0 ? u = Hi(v) : s || (s = x & ~t, s !== 0 && (u = Hi(s))))) : (x = o & ~d, x !== 0 ? u = Hi(x) : v !== 0 ? u = Hi(v) : s || (s = o & ~t, s !== 0 && (u = Hi(s)))), u === 0 ? 0 : n !== 0 && n !== u && (n & d) === 0 && (d = u & -u, s = n & -n, d >= s || d === 32 && (s & 4194048) !== 0) ? n : u
    }

    function Rs(t, n) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0
    }

    function I1(t, n) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return n + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Dh() {
        var t = $r;
        return $r <<= 1, ($r & 62914560) === 0 && ($r = 4194304), t
    }

    function hu(t) {
        for (var n = [], s = 0; 31 > s; s++) n.push(t);
        return n
    }

    function _s(t, n) {
        t.pendingLanes |= n, n !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function J1(t, n, s, o, u, d) {
        var v = t.pendingLanes;
        t.pendingLanes = s, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= s, t.entangledLanes &= s, t.errorRecoveryDisabledLanes &= s, t.shellSuspendCounter = 0;
        var x = t.entanglements,
            M = t.expirationTimes,
            V = t.hiddenUpdates;
        for (s = v & ~s; 0 < s;) {
            var Y = 31 - je(s),
                Q = 1 << Y;
            x[Y] = 0, M[Y] = -1;
            var U = V[Y];
            if (U !== null)
                for (V[Y] = null, Y = 0; Y < U.length; Y++) {
                    var H = U[Y];
                    H !== null && (H.lane &= -536870913)
                }
            s &= ~Q
        }
        o !== 0 && Oh(t, o, 0), d !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(v & ~n))
    }

    function Oh(t, n, s) {
        t.pendingLanes |= n, t.suspendedLanes &= ~n;
        var o = 31 - je(n);
        t.entangledLanes |= n, t.entanglements[o] = t.entanglements[o] | 1073741824 | s & 261930
    }

    function Lh(t, n) {
        var s = t.entangledLanes |= n;
        for (t = t.entanglements; s;) {
            var o = 31 - je(s),
                u = 1 << o;
            u & n | t[o] & n && (t[o] |= n), s &= ~u
        }
    }

    function Nh(t, n) {
        var s = n & -n;
        return s = (s & 42) !== 0 ? 1 : mu(s), (s & (t.suspendedLanes | n)) !== 0 ? 0 : s
    }

    function mu(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function pu(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function zh() {
        var t = W.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Sg(t.type))
    }

    function jh(t, n) {
        var s = W.p;
        try {
            return W.p = t, n()
        } finally {
            W.p = s
        }
    }
    var $n = Math.random().toString(36).slice(2),
        ce = "__reactFiber$" + $n,
        Ae = "__reactProps$" + $n,
        xa = "__reactContainer$" + $n,
        yu = "__reactEvents$" + $n,
        W1 = "__reactListeners$" + $n,
        $1 = "__reactHandles$" + $n,
        Bh = "__reactResources$" + $n,
        Ms = "__reactMarker$" + $n;

    function gu(t) {
        delete t[ce], delete t[Ae], delete t[yu], delete t[W1], delete t[$1]
    }

    function Ta(t) {
        var n = t[ce];
        if (n) return n;
        for (var s = t.parentNode; s;) {
            if (n = s[xa] || s[ce]) {
                if (s = n.alternate, n.child !== null || s !== null && s.child !== null)
                    for (t = ig(t); t !== null;) {
                        if (s = t[ce]) return s;
                        t = ig(t)
                    }
                return n
            }
            t = s, s = t.parentNode
        }
        return null
    }

    function Ea(t) {
        if (t = t[ce] || t[xa]) {
            var n = t.tag;
            if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return t
        }
        return null
    }

    function Cs(t) {
        var n = t.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
        throw Error(r(33))
    }

    function Aa(t) {
        var n = t[Bh];
        return n || (n = t[Bh] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), n
    }

    function re(t) {
        t[Ms] = !0
    }
    var Vh = new Set,
        Uh = {};

    function ki(t, n) {
        wa(t, n), wa(t + "Capture", n)
    }

    function wa(t, n) {
        for (Uh[t] = n, t = 0; t < n.length; t++) Vh.add(n[t])
    }
    var tx = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Ph = {},
        Hh = {};

    function ex(t) {
        return Pi.call(Hh, t) ? !0 : Pi.call(Ph, t) ? !1 : tx.test(t) ? Hh[t] = !0 : (Ph[t] = !0, !1)
    }

    function eo(t, n, s) {
        if (ex(n))
            if (s === null) t.removeAttribute(n);
            else {
                switch (typeof s) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(n);
                        return;
                    case "boolean":
                        var o = n.toLowerCase().slice(0, 5);
                        if (o !== "data-" && o !== "aria-") {
                            t.removeAttribute(n);
                            return
                        }
                }
                t.setAttribute(n, "" + s)
            }
    }

    function no(t, n, s) {
        if (s === null) t.removeAttribute(n);
        else {
            switch (typeof s) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(n);
                    return
            }
            t.setAttribute(n, "" + s)
        }
    }

    function Cn(t, n, s, o) {
        if (o === null) t.removeAttribute(s);
        else {
            switch (typeof o) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(s);
                    return
            }
            t.setAttributeNS(n, s, "" + o)
        }
    }

    function Ge(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function kh(t) {
        var n = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
    }

    function nx(t, n, s) {
        var o = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
        if (!t.hasOwnProperty(n) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var u = o.get,
                d = o.set;
            return Object.defineProperty(t, n, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(v) {
                    s = "" + v, d.call(this, v)
                }
            }), Object.defineProperty(t, n, {
                enumerable: o.enumerable
            }), {
                getValue: function() {
                    return s
                },
                setValue: function(v) {
                    s = "" + v
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[n]
                }
            }
        }
    }

    function vu(t) {
        if (!t._valueTracker) {
            var n = kh(t) ? "checked" : "value";
            t._valueTracker = nx(t, n, "" + t[n])
        }
    }

    function qh(t) {
        if (!t) return !1;
        var n = t._valueTracker;
        if (!n) return !0;
        var s = n.getValue(),
            o = "";
        return t && (o = kh(t) ? t.checked ? "true" : "false" : t.value), t = o, t !== s ? (n.setValue(t), !0) : !1
    }

    function io(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var ix = /[\n"\\]/g;

    function Xe(t) {
        return t.replace(ix, function(n) {
            return "\\" + n.charCodeAt(0).toString(16) + " "
        })
    }

    function Su(t, n, s, o, u, d, v, x) {
        t.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.type = v : t.removeAttribute("type"), n != null ? v === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + Ge(n)) : t.value !== "" + Ge(n) && (t.value = "" + Ge(n)) : v !== "submit" && v !== "reset" || t.removeAttribute("value"), n != null ? bu(t, v, Ge(n)) : s != null ? bu(t, v, Ge(s)) : o != null && t.removeAttribute("value"), u == null && d != null && (t.defaultChecked = !!d), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? t.name = "" + Ge(x) : t.removeAttribute("name")
    }

    function Kh(t, n, s, o, u, d, v, x) {
        if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.type = d), n != null || s != null) {
            if (!(d !== "submit" && d !== "reset" || n != null)) {
                vu(t);
                return
            }
            s = s != null ? "" + Ge(s) : "", n = n != null ? "" + Ge(n) : s, x || n === t.value || (t.value = n), t.defaultValue = n
        }
        o = o ? ? u, o = typeof o != "function" && typeof o != "symbol" && !!o, t.checked = x ? t.checked : !!o, t.defaultChecked = !!o, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (t.name = v), vu(t)
    }

    function bu(t, n, s) {
        n === "number" && io(t.ownerDocument) === t || t.defaultValue === "" + s || (t.defaultValue = "" + s)
    }

    function Ra(t, n, s, o) {
        if (t = t.options, n) {
            n = {};
            for (var u = 0; u < s.length; u++) n["$" + s[u]] = !0;
            for (s = 0; s < t.length; s++) u = n.hasOwnProperty("$" + t[s].value), t[s].selected !== u && (t[s].selected = u), u && o && (t[s].defaultSelected = !0)
        } else {
            for (s = "" + Ge(s), n = null, u = 0; u < t.length; u++) {
                if (t[u].value === s) {
                    t[u].selected = !0, o && (t[u].defaultSelected = !0);
                    return
                }
                n !== null || t[u].disabled || (n = t[u])
            }
            n !== null && (n.selected = !0)
        }
    }

    function Yh(t, n, s) {
        if (n != null && (n = "" + Ge(n), n !== t.value && (t.value = n), s == null)) {
            t.defaultValue !== n && (t.defaultValue = n);
            return
        }
        t.defaultValue = s != null ? "" + Ge(s) : ""
    }

    function Gh(t, n, s, o) {
        if (n == null) {
            if (o != null) {
                if (s != null) throw Error(r(92));
                if (yt(o)) {
                    if (1 < o.length) throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""), n = s
        }
        s = Ge(n), t.defaultValue = s, o = t.textContent, o === s && o !== "" && o !== null && (t.value = o), vu(t)
    }

    function _a(t, n) {
        if (n) {
            var s = t.firstChild;
            if (s && s === t.lastChild && s.nodeType === 3) {
                s.nodeValue = n;
                return
            }
        }
        t.textContent = n
    }
    var ax = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Xh(t, n, s) {
        var o = n.indexOf("--") === 0;
        s == null || typeof s == "boolean" || s === "" ? o ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : o ? t.setProperty(n, s) : typeof s != "number" || s === 0 || ax.has(n) ? n === "float" ? t.cssFloat = s : t[n] = ("" + s).trim() : t[n] = s + "px"
    }

    function Fh(t, n, s) {
        if (n != null && typeof n != "object") throw Error(r(62));
        if (t = t.style, s != null) {
            for (var o in s) !s.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? t.setProperty(o, "") : o === "float" ? t.cssFloat = "" : t[o] = "");
            for (var u in n) o = n[u], n.hasOwnProperty(u) && s[u] !== o && Xh(t, u, o)
        } else
            for (var d in n) n.hasOwnProperty(d) && Xh(t, d, n[d])
    }

    function xu(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var sx = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        rx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function ao(t) {
        return rx.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }

    function Dn() {}
    var Tu = null;

    function Eu(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var Ma = null,
        Ca = null;

    function Qh(t) {
        var n = Ea(t);
        if (n && (t = n.stateNode)) {
            var s = t[Ae] || null;
            t: switch (t = n.stateNode, n.type) {
                case "input":
                    if (Su(t, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name), n = s.name, s.type === "radio" && n != null) {
                        for (s = t; s.parentNode;) s = s.parentNode;
                        for (s = s.querySelectorAll('input[name="' + Xe("" + n) + '"][type="radio"]'), n = 0; n < s.length; n++) {
                            var o = s[n];
                            if (o !== t && o.form === t.form) {
                                var u = o[Ae] || null;
                                if (!u) throw Error(r(90));
                                Su(o, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                            }
                        }
                        for (n = 0; n < s.length; n++) o = s[n], o.form === t.form && qh(o)
                    }
                    break t;
                case "textarea":
                    Yh(t, s.value, s.defaultValue);
                    break t;
                case "select":
                    n = s.value, n != null && Ra(t, !!s.multiple, n, !1)
            }
        }
    }
    var Au = !1;

    function Zh(t, n, s) {
        if (Au) return t(n, s);
        Au = !0;
        try {
            var o = t(n);
            return o
        } finally {
            if (Au = !1, (Ma !== null || Ca !== null) && (Xo(), Ma && (n = Ma, t = Ca, Ca = Ma = null, Qh(n), t)))
                for (n = 0; n < t.length; n++) Qh(t[n])
        }
    }

    function Ds(t, n) {
        var s = t.stateNode;
        if (s === null) return null;
        var o = s[Ae] || null;
        if (o === null) return null;
        s = o[n];
        t: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (o = !o.disabled) || (t = t.type, o = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !o;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (s && typeof s != "function") throw Error(r(231, n, typeof s));
        return s
    }
    var On = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        wu = !1;
    if (On) try {
        var Os = {};
        Object.defineProperty(Os, "passive", {
            get: function() {
                wu = !0
            }
        }), window.addEventListener("test", Os, Os), window.removeEventListener("test", Os, Os)
    } catch {
        wu = !1
    }
    var ti = null,
        Ru = null,
        so = null;

    function Ih() {
        if (so) return so;
        var t, n = Ru,
            s = n.length,
            o, u = "value" in ti ? ti.value : ti.textContent,
            d = u.length;
        for (t = 0; t < s && n[t] === u[t]; t++);
        var v = s - t;
        for (o = 1; o <= v && n[s - o] === u[d - o]; o++);
        return so = u.slice(t, 1 < o ? 1 - o : void 0)
    }

    function ro(t) {
        var n = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function oo() {
        return !0
    }

    function Jh() {
        return !1
    }

    function we(t) {
        function n(s, o, u, d, v) {
            this._reactName = s, this._targetInst = u, this.type = o, this.nativeEvent = d, this.target = v, this.currentTarget = null;
            for (var x in t) t.hasOwnProperty(x) && (s = t[x], this[x] = s ? s(d) : d[x]);
            return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? oo : Jh, this.isPropagationStopped = Jh, this
        }
        return g(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var s = this.nativeEvent;
                s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = oo)
            },
            stopPropagation: function() {
                var s = this.nativeEvent;
                s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = oo)
            },
            persist: function() {},
            isPersistent: oo
        }), n
    }
    var qi = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        lo = we(qi),
        Ls = g({}, qi, {
            view: 0,
            detail: 0
        }),
        ox = we(Ls),
        _u, Mu, Ns, uo = g({}, Ls, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Du,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Ns && (Ns && t.type === "mousemove" ? (_u = t.screenX - Ns.screenX, Mu = t.screenY - Ns.screenY) : Mu = _u = 0, Ns = t), _u)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : Mu
            }
        }),
        Wh = we(uo),
        lx = g({}, uo, {
            dataTransfer: 0
        }),
        ux = we(lx),
        cx = g({}, Ls, {
            relatedTarget: 0
        }),
        Cu = we(cx),
        fx = g({}, qi, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        dx = we(fx),
        hx = g({}, qi, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        mx = we(hx),
        px = g({}, qi, {
            data: 0
        }),
        $h = we(px),
        yx = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        gx = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        vx = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Sx(t) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(t) : (t = vx[t]) ? !!n[t] : !1
    }

    function Du() {
        return Sx
    }
    var bx = g({}, Ls, {
            key: function(t) {
                if (t.key) {
                    var n = yx[t.key] || t.key;
                    if (n !== "Unidentified") return n
                }
                return t.type === "keypress" ? (t = ro(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? gx[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Du,
            charCode: function(t) {
                return t.type === "keypress" ? ro(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? ro(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        xx = we(bx),
        Tx = g({}, uo, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        tm = we(Tx),
        Ex = g({}, Ls, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Du
        }),
        Ax = we(Ex),
        wx = g({}, qi, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Rx = we(wx),
        _x = g({}, uo, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Mx = we(_x),
        Cx = g({}, qi, {
            newState: 0,
            oldState: 0
        }),
        Dx = we(Cx),
        Ox = [9, 13, 27, 32],
        Ou = On && "CompositionEvent" in window,
        zs = null;
    On && "documentMode" in document && (zs = document.documentMode);
    var Lx = On && "TextEvent" in window && !zs,
        em = On && (!Ou || zs && 8 < zs && 11 >= zs),
        nm = " ",
        im = !1;

    function am(t, n) {
        switch (t) {
            case "keyup":
                return Ox.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function sm(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var Da = !1;

    function Nx(t, n) {
        switch (t) {
            case "compositionend":
                return sm(n);
            case "keypress":
                return n.which !== 32 ? null : (im = !0, nm);
            case "textInput":
                return t = n.data, t === nm && im ? null : t;
            default:
                return null
        }
    }

    function zx(t, n) {
        if (Da) return t === "compositionend" || !Ou && am(t, n) ? (t = Ih(), so = Ru = ti = null, Da = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which)
                }
                return null;
            case "compositionend":
                return em && n.locale !== "ko" ? null : n.data;
            default:
                return null
        }
    }
    var jx = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function rm(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n === "input" ? !!jx[t.type] : n === "textarea"
    }

    function om(t, n, s, o) {
        Ma ? Ca ? Ca.push(o) : Ca = [o] : Ma = o, n = $o(n, "onChange"), 0 < n.length && (s = new lo("onChange", "change", null, s, o), t.push({
            event: s,
            listeners: n
        }))
    }
    var js = null,
        Bs = null;

    function Bx(t) {
        Ky(t, 0)
    }

    function co(t) {
        var n = Cs(t);
        if (qh(n)) return t
    }

    function lm(t, n) {
        if (t === "change") return n
    }
    var um = !1;
    if (On) {
        var Lu;
        if (On) {
            var Nu = "oninput" in document;
            if (!Nu) {
                var cm = document.createElement("div");
                cm.setAttribute("oninput", "return;"), Nu = typeof cm.oninput == "function"
            }
            Lu = Nu
        } else Lu = !1;
        um = Lu && (!document.documentMode || 9 < document.documentMode)
    }

    function fm() {
        js && (js.detachEvent("onpropertychange", dm), Bs = js = null)
    }

    function dm(t) {
        if (t.propertyName === "value" && co(Bs)) {
            var n = [];
            om(n, Bs, t, Eu(t)), Zh(Bx, n)
        }
    }

    function Vx(t, n, s) {
        t === "focusin" ? (fm(), js = n, Bs = s, js.attachEvent("onpropertychange", dm)) : t === "focusout" && fm()
    }

    function Ux(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return co(Bs)
    }

    function Px(t, n) {
        if (t === "click") return co(n)
    }

    function Hx(t, n) {
        if (t === "input" || t === "change") return co(n)
    }

    function kx(t, n) {
        return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n
    }
    var Be = typeof Object.is == "function" ? Object.is : kx;

    function Vs(t, n) {
        if (Be(t, n)) return !0;
        if (typeof t != "object" || t === null || typeof n != "object" || n === null) return !1;
        var s = Object.keys(t),
            o = Object.keys(n);
        if (s.length !== o.length) return !1;
        for (o = 0; o < s.length; o++) {
            var u = s[o];
            if (!Pi.call(n, u) || !Be(t[u], n[u])) return !1
        }
        return !0
    }

    function hm(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function mm(t, n) {
        var s = hm(t);
        t = 0;
        for (var o; s;) {
            if (s.nodeType === 3) {
                if (o = t + s.textContent.length, t <= n && o >= n) return {
                    node: s,
                    offset: n - t
                };
                t = o
            }
            t: {
                for (; s;) {
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        break t
                    }
                    s = s.parentNode
                }
                s = void 0
            }
            s = hm(s)
        }
    }

    function pm(t, n) {
        return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? pm(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1
    }

    function ym(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var n = io(t.document); n instanceof t.HTMLIFrameElement;) {
            try {
                var s = typeof n.contentWindow.location.href == "string"
            } catch {
                s = !1
            }
            if (s) t = n.contentWindow;
            else break;
            n = io(t.document)
        }
        return n
    }

    function zu(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true")
    }
    var qx = On && "documentMode" in document && 11 >= document.documentMode,
        Oa = null,
        ju = null,
        Us = null,
        Bu = !1;

    function gm(t, n, s) {
        var o = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
        Bu || Oa == null || Oa !== io(o) || (o = Oa, "selectionStart" in o && zu(o) ? o = {
            start: o.selectionStart,
            end: o.selectionEnd
        } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset
        }), Us && Vs(Us, o) || (Us = o, o = $o(ju, "onSelect"), 0 < o.length && (n = new lo("onSelect", "select", null, n, s), t.push({
            event: n,
            listeners: o
        }), n.target = Oa)))
    }

    function Ki(t, n) {
        var s = {};
        return s[t.toLowerCase()] = n.toLowerCase(), s["Webkit" + t] = "webkit" + n, s["Moz" + t] = "moz" + n, s
    }
    var La = {
            animationend: Ki("Animation", "AnimationEnd"),
            animationiteration: Ki("Animation", "AnimationIteration"),
            animationstart: Ki("Animation", "AnimationStart"),
            transitionrun: Ki("Transition", "TransitionRun"),
            transitionstart: Ki("Transition", "TransitionStart"),
            transitioncancel: Ki("Transition", "TransitionCancel"),
            transitionend: Ki("Transition", "TransitionEnd")
        },
        Vu = {},
        vm = {};
    On && (vm = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);

    function Yi(t) {
        if (Vu[t]) return Vu[t];
        if (!La[t]) return t;
        var n = La[t],
            s;
        for (s in n)
            if (n.hasOwnProperty(s) && s in vm) return Vu[t] = n[s];
        return t
    }
    var Sm = Yi("animationend"),
        bm = Yi("animationiteration"),
        xm = Yi("animationstart"),
        Kx = Yi("transitionrun"),
        Yx = Yi("transitionstart"),
        Gx = Yi("transitioncancel"),
        Tm = Yi("transitionend"),
        Em = new Map,
        Uu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Uu.push("scrollEnd");

    function ln(t, n) {
        Em.set(t, n), ki(n, [t])
    }
    var fo = typeof reportError == "function" ? reportError : function(t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var n = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                    error: t
                });
                if (!window.dispatchEvent(n)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", t);
                return
            }
            console.error(t)
        },
        Fe = [],
        Na = 0,
        Pu = 0;

    function ho() {
        for (var t = Na, n = Pu = Na = 0; n < t;) {
            var s = Fe[n];
            Fe[n++] = null;
            var o = Fe[n];
            Fe[n++] = null;
            var u = Fe[n];
            Fe[n++] = null;
            var d = Fe[n];
            if (Fe[n++] = null, o !== null && u !== null) {
                var v = o.pending;
                v === null ? u.next = u : (u.next = v.next, v.next = u), o.pending = u
            }
            d !== 0 && Am(s, u, d)
        }
    }

    function mo(t, n, s, o) {
        Fe[Na++] = t, Fe[Na++] = n, Fe[Na++] = s, Fe[Na++] = o, Pu |= o, t.lanes |= o, t = t.alternate, t !== null && (t.lanes |= o)
    }

    function Hu(t, n, s, o) {
        return mo(t, n, s, o), po(t)
    }

    function Gi(t, n) {
        return mo(t, null, null, n), po(t)
    }

    function Am(t, n, s) {
        t.lanes |= s;
        var o = t.alternate;
        o !== null && (o.lanes |= s);
        for (var u = !1, d = t.return; d !== null;) d.childLanes |= s, o = d.alternate, o !== null && (o.childLanes |= s), d.tag === 22 && (t = d.stateNode, t === null || t._visibility & 1 || (u = !0)), t = d, d = d.return;
        return t.tag === 3 ? (d = t.stateNode, u && n !== null && (u = 31 - je(s), t = d.hiddenUpdates, o = t[u], o === null ? t[u] = [n] : o.push(n), n.lane = s | 536870912), d) : null
    }

    function po(t) {
        if (50 < rr) throw rr = 0, Zc = null, Error(r(185));
        for (var n = t.return; n !== null;) t = n, n = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var za = {};

    function Xx(t, n, s, o) {
        this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Ve(t, n, s, o) {
        return new Xx(t, n, s, o)
    }

    function ku(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function Ln(t, n) {
        var s = t.alternate;
        return s === null ? (s = Ve(t.tag, n, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = n, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 65011712, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, n = t.dependencies, s.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s.refCleanup = t.refCleanup, s
    }

    function wm(t, n) {
        t.flags &= 65011714;
        var s = t.alternate;
        return s === null ? (t.childLanes = 0, t.lanes = n, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = s.childLanes, t.lanes = s.lanes, t.child = s.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = s.memoizedProps, t.memoizedState = s.memoizedState, t.updateQueue = s.updateQueue, t.type = s.type, n = s.dependencies, t.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }), t
    }

    function yo(t, n, s, o, u, d) {
        var v = 0;
        if (o = t, typeof t == "function") ku(t) && (v = 1);
        else if (typeof t == "string") v = JT(t, s, nt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else t: switch (t) {
            case Z:
                return t = Ve(31, s, n, u), t.elementType = Z, t.lanes = d, t;
            case _:
                return Xi(s.children, u, d, n);
            case A:
                v = 8, u |= 24;
                break;
            case R:
                return t = Ve(12, s, n, u | 2), t.elementType = R, t.lanes = d, t;
            case F:
                return t = Ve(13, s, n, u), t.elementType = F, t.lanes = d, t;
            case J:
                return t = Ve(19, s, n, u), t.elementType = J, t.lanes = d, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case L:
                        v = 10;
                        break t;
                    case N:
                        v = 9;
                        break t;
                    case O:
                        v = 11;
                        break t;
                    case q:
                        v = 14;
                        break t;
                    case K:
                        v = 16, o = null;
                        break t
                }
                v = 29, s = Error(r(130, t === null ? "null" : typeof t, "")), o = null
        }
        return n = Ve(v, s, n, u), n.elementType = t, n.type = o, n.lanes = d, n
    }

    function Xi(t, n, s, o) {
        return t = Ve(7, t, o, n), t.lanes = s, t
    }

    function qu(t, n, s) {
        return t = Ve(6, t, null, n), t.lanes = s, t
    }

    function Rm(t) {
        var n = Ve(18, null, null, 0);
        return n.stateNode = t, n
    }

    function Ku(t, n, s) {
        return n = Ve(4, t.children !== null ? t.children : [], t.key, n), n.lanes = s, n.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, n
    }
    var _m = new WeakMap;

    function Qe(t, n) {
        if (typeof t == "object" && t !== null) {
            var s = _m.get(t);
            return s !== void 0 ? s : (n = {
                value: t,
                source: n,
                stack: Mn(n)
            }, _m.set(t, n), n)
        }
        return {
            value: t,
            source: n,
            stack: Mn(n)
        }
    }
    var ja = [],
        Ba = 0,
        go = null,
        Ps = 0,
        Ze = [],
        Ie = 0,
        ei = null,
        yn = 1,
        gn = "";

    function Nn(t, n) {
        ja[Ba++] = Ps, ja[Ba++] = go, go = t, Ps = n
    }

    function Mm(t, n, s) {
        Ze[Ie++] = yn, Ze[Ie++] = gn, Ze[Ie++] = ei, ei = t;
        var o = yn;
        t = gn;
        var u = 32 - je(o) - 1;
        o &= ~(1 << u), s += 1;
        var d = 32 - je(n) + u;
        if (30 < d) {
            var v = u - u % 5;
            d = (o & (1 << v) - 1).toString(32), o >>= v, u -= v, yn = 1 << 32 - je(n) + u | s << u | o, gn = d + t
        } else yn = 1 << d | s << u | o, gn = t
    }

    function Yu(t) {
        t.return !== null && (Nn(t, 1), Mm(t, 1, 0))
    }

    function Gu(t) {
        for (; t === go;) go = ja[--Ba], ja[Ba] = null, Ps = ja[--Ba], ja[Ba] = null;
        for (; t === ei;) ei = Ze[--Ie], Ze[Ie] = null, gn = Ze[--Ie], Ze[Ie] = null, yn = Ze[--Ie], Ze[Ie] = null
    }

    function Cm(t, n) {
        Ze[Ie++] = yn, Ze[Ie++] = gn, Ze[Ie++] = ei, yn = n.id, gn = n.overflow, ei = t
    }
    var fe = null,
        Pt = null,
        Tt = !1,
        ni = null,
        Je = !1,
        Xu = Error(r(519));

    function ii(t) {
        var n = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Hs(Qe(n, t)), Xu
    }

    function Dm(t) {
        var n = t.stateNode,
            s = t.type,
            o = t.memoizedProps;
        switch (n[ce] = t, n[Ae] = o, s) {
            case "dialog":
                St("cancel", n), St("close", n);
                break;
            case "iframe":
            case "object":
            case "embed":
                St("load", n);
                break;
            case "video":
            case "audio":
                for (s = 0; s < lr.length; s++) St(lr[s], n);
                break;
            case "source":
                St("error", n);
                break;
            case "img":
            case "image":
            case "link":
                St("error", n), St("load", n);
                break;
            case "details":
                St("toggle", n);
                break;
            case "input":
                St("invalid", n), Kh(n, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0);
                break;
            case "select":
                St("invalid", n);
                break;
            case "textarea":
                St("invalid", n), Gh(n, o.value, o.defaultValue, o.children)
        }
        s = o.children, typeof s != "string" && typeof s != "number" && typeof s != "bigint" || n.textContent === "" + s || o.suppressHydrationWarning === !0 || Fy(n.textContent, s) ? (o.popover != null && (St("beforetoggle", n), St("toggle", n)), o.onScroll != null && St("scroll", n), o.onScrollEnd != null && St("scrollend", n), o.onClick != null && (n.onclick = Dn), n = !0) : n = !1, n || ii(t, !0)
    }

    function Om(t) {
        for (fe = t.return; fe;) switch (fe.tag) {
            case 5:
            case 31:
            case 13:
                Je = !1;
                return;
            case 27:
            case 3:
                Je = !0;
                return;
            default:
                fe = fe.return
        }
    }

    function Va(t) {
        if (t !== fe) return !1;
        if (!Tt) return Om(t), Tt = !0, !1;
        var n = t.tag,
            s;
        if ((s = n !== 3 && n !== 27) && ((s = n === 5) && (s = t.type, s = !(s !== "form" && s !== "button") || ff(t.type, t.memoizedProps)), s = !s), s && Pt && ii(t), Om(t), n === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
            Pt = ng(t)
        } else if (n === 31) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
            Pt = ng(t)
        } else n === 27 ? (n = Pt, gi(t.type) ? (t = yf, yf = null, Pt = t) : Pt = n) : Pt = fe ? $e(t.stateNode.nextSibling) : null;
        return !0
    }

    function Fi() {
        Pt = fe = null, Tt = !1
    }

    function Fu() {
        var t = ni;
        return t !== null && (Ce === null ? Ce = t : Ce.push.apply(Ce, t), ni = null), t
    }

    function Hs(t) {
        ni === null ? ni = [t] : ni.push(t)
    }
    var Qu = C(null),
        Qi = null,
        zn = null;

    function ai(t, n, s) {
        tt(Qu, n._currentValue), n._currentValue = s
    }

    function jn(t) {
        t._currentValue = Qu.current, X(Qu)
    }

    function Zu(t, n, s) {
        for (; t !== null;) {
            var o = t.alternate;
            if ((t.childLanes & n) !== n ? (t.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), t === s) break;
            t = t.return
        }
    }

    function Iu(t, n, s, o) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null;) {
            var d = u.dependencies;
            if (d !== null) {
                var v = u.child;
                d = d.firstContext;
                t: for (; d !== null;) {
                    var x = d;
                    d = u;
                    for (var M = 0; M < n.length; M++)
                        if (x.context === n[M]) {
                            d.lanes |= s, x = d.alternate, x !== null && (x.lanes |= s), Zu(d.return, s, t), o || (v = null);
                            break t
                        }
                    d = x.next
                }
            } else if (u.tag === 18) {
                if (v = u.return, v === null) throw Error(r(341));
                v.lanes |= s, d = v.alternate, d !== null && (d.lanes |= s), Zu(v, s, t), v = null
            } else v = u.child;
            if (v !== null) v.return = u;
            else
                for (v = u; v !== null;) {
                    if (v === t) {
                        v = null;
                        break
                    }
                    if (u = v.sibling, u !== null) {
                        u.return = v.return, v = u;
                        break
                    }
                    v = v.return
                }
            u = v
        }
    }

    function Ua(t, n, s, o) {
        t = null;
        for (var u = n, d = !1; u !== null;) {
            if (!d) {
                if ((u.flags & 524288) !== 0) d = !0;
                else if ((u.flags & 262144) !== 0) break
            }
            if (u.tag === 10) {
                var v = u.alternate;
                if (v === null) throw Error(r(387));
                if (v = v.memoizedProps, v !== null) {
                    var x = u.type;
                    Be(u.pendingProps.value, v.value) || (t !== null ? t.push(x) : t = [x])
                }
            } else if (u === At.current) {
                if (v = u.alternate, v === null) throw Error(r(387));
                v.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(hr) : t = [hr])
            }
            u = u.return
        }
        t !== null && Iu(n, t, s, o), n.flags |= 262144
    }

    function vo(t) {
        for (t = t.firstContext; t !== null;) {
            if (!Be(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function Zi(t) {
        Qi = t, zn = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function de(t) {
        return Lm(Qi, t)
    }

    function So(t, n) {
        return Qi === null && Zi(t), Lm(t, n)
    }

    function Lm(t, n) {
        var s = n._currentValue;
        if (n = {
                context: n,
                memoizedValue: s,
                next: null
            }, zn === null) {
            if (t === null) throw Error(r(308));
            zn = n, t.dependencies = {
                lanes: 0,
                firstContext: n
            }, t.flags |= 524288
        } else zn = zn.next = n;
        return s
    }
    var Fx = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                n = this.signal = {
                    aborted: !1,
                    addEventListener: function(s, o) {
                        t.push(o)
                    }
                };
            this.abort = function() {
                n.aborted = !0, t.forEach(function(s) {
                    return s()
                })
            }
        },
        Qx = e.unstable_scheduleCallback,
        Zx = e.unstable_NormalPriority,
        Jt = {
            $$typeof: L,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Ju() {
        return {
            controller: new Fx,
            data: new Map,
            refCount: 0
        }
    }

    function ks(t) {
        t.refCount--, t.refCount === 0 && Qx(Zx, function() {
            t.controller.abort()
        })
    }
    var qs = null,
        Wu = 0,
        Pa = 0,
        Ha = null;

    function Ix(t, n) {
        if (qs === null) {
            var s = qs = [];
            Wu = 0, Pa = ef(), Ha = {
                status: "pending",
                value: void 0,
                then: function(o) {
                    s.push(o)
                }
            }
        }
        return Wu++, n.then(Nm, Nm), n
    }

    function Nm() {
        if (--Wu === 0 && qs !== null) {
            Ha !== null && (Ha.status = "fulfilled");
            var t = qs;
            qs = null, Pa = 0, Ha = null;
            for (var n = 0; n < t.length; n++)(0, t[n])()
        }
    }

    function Jx(t, n) {
        var s = [],
            o = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    s.push(u)
                }
            };
        return t.then(function() {
            o.status = "fulfilled", o.value = n;
            for (var u = 0; u < s.length; u++)(0, s[u])(n)
        }, function(u) {
            for (o.status = "rejected", o.reason = u, u = 0; u < s.length; u++)(0, s[u])(void 0)
        }), o
    }
    var zm = P.S;
    P.S = function(t, n) {
        gy = ve(), typeof n == "object" && n !== null && typeof n.then == "function" && Ix(t, n), zm !== null && zm(t, n)
    };
    var Ii = C(null);

    function $u() {
        var t = Ii.current;
        return t !== null ? t : jt.pooledCache
    }

    function bo(t, n) {
        n === null ? tt(Ii, Ii.current) : tt(Ii, n.pool)
    }

    function jm() {
        var t = $u();
        return t === null ? null : {
            parent: Jt._currentValue,
            pool: t
        }
    }
    var ka = Error(r(460)),
        tc = Error(r(474)),
        xo = Error(r(542)),
        To = {
            then: function() {}
        };

    function Bm(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function Vm(t, n, s) {
        switch (s = t[s], s === void 0 ? t.push(n) : s !== n && (n.then(Dn, Dn), n = s), n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw t = n.reason, Pm(t), t;
            default:
                if (typeof n.status == "string") n.then(Dn, Dn);
                else {
                    if (t = jt, t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
                    t = n, t.status = "pending", t.then(function(o) {
                        if (n.status === "pending") {
                            var u = n;
                            u.status = "fulfilled", u.value = o
                        }
                    }, function(o) {
                        if (n.status === "pending") {
                            var u = n;
                            u.status = "rejected", u.reason = o
                        }
                    })
                }
                switch (n.status) {
                    case "fulfilled":
                        return n.value;
                    case "rejected":
                        throw t = n.reason, Pm(t), t
                }
                throw Wi = n, ka
        }
    }

    function Ji(t) {
        try {
            var n = t._init;
            return n(t._payload)
        } catch (s) {
            throw s !== null && typeof s == "object" && typeof s.then == "function" ? (Wi = s, ka) : s
        }
    }
    var Wi = null;

    function Um() {
        if (Wi === null) throw Error(r(459));
        var t = Wi;
        return Wi = null, t
    }

    function Pm(t) {
        if (t === ka || t === xo) throw Error(r(483))
    }
    var qa = null,
        Ks = 0;

    function Eo(t) {
        var n = Ks;
        return Ks += 1, qa === null && (qa = []), Vm(qa, t, n)
    }

    function Ys(t, n) {
        n = n.props.ref, t.ref = n !== void 0 ? n : null
    }

    function Ao(t, n) {
        throw n.$$typeof === S ? Error(r(525)) : (t = Object.prototype.toString.call(n), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)))
    }

    function Hm(t) {
        function n(z, D) {
            if (t) {
                var B = z.deletions;
                B === null ? (z.deletions = [D], z.flags |= 16) : B.push(D)
            }
        }

        function s(z, D) {
            if (!t) return null;
            for (; D !== null;) n(z, D), D = D.sibling;
            return null
        }

        function o(z) {
            for (var D = new Map; z !== null;) z.key !== null ? D.set(z.key, z) : D.set(z.index, z), z = z.sibling;
            return D
        }

        function u(z, D) {
            return z = Ln(z, D), z.index = 0, z.sibling = null, z
        }

        function d(z, D, B) {
            return z.index = B, t ? (B = z.alternate, B !== null ? (B = B.index, B < D ? (z.flags |= 67108866, D) : B) : (z.flags |= 67108866, D)) : (z.flags |= 1048576, D)
        }

        function v(z) {
            return t && z.alternate === null && (z.flags |= 67108866), z
        }

        function x(z, D, B, G) {
            return D === null || D.tag !== 6 ? (D = qu(B, z.mode, G), D.return = z, D) : (D = u(D, B), D.return = z, D)
        }

        function M(z, D, B, G) {
            var lt = B.type;
            return lt === _ ? Y(z, D, B.props.children, G, B.key) : D !== null && (D.elementType === lt || typeof lt == "object" && lt !== null && lt.$$typeof === K && Ji(lt) === D.type) ? (D = u(D, B.props), Ys(D, B), D.return = z, D) : (D = yo(B.type, B.key, B.props, null, z.mode, G), Ys(D, B), D.return = z, D)
        }

        function V(z, D, B, G) {
            return D === null || D.tag !== 4 || D.stateNode.containerInfo !== B.containerInfo || D.stateNode.implementation !== B.implementation ? (D = Ku(B, z.mode, G), D.return = z, D) : (D = u(D, B.children || []), D.return = z, D)
        }

        function Y(z, D, B, G, lt) {
            return D === null || D.tag !== 7 ? (D = Xi(B, z.mode, G, lt), D.return = z, D) : (D = u(D, B), D.return = z, D)
        }

        function Q(z, D, B) {
            if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return D = qu("" + D, z.mode, B), D.return = z, D;
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                    case b:
                        return B = yo(D.type, D.key, D.props, null, z.mode, B), Ys(B, D), B.return = z, B;
                    case E:
                        return D = Ku(D, z.mode, B), D.return = z, D;
                    case K:
                        return D = Ji(D), Q(z, D, B)
                }
                if (yt(D) || ot(D)) return D = Xi(D, z.mode, B, null), D.return = z, D;
                if (typeof D.then == "function") return Q(z, Eo(D), B);
                if (D.$$typeof === L) return Q(z, So(z, D), B);
                Ao(z, D)
            }
            return null
        }

        function U(z, D, B, G) {
            var lt = D !== null ? D.key : null;
            if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint") return lt !== null ? null : x(z, D, "" + B, G);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                    case b:
                        return B.key === lt ? M(z, D, B, G) : null;
                    case E:
                        return B.key === lt ? V(z, D, B, G) : null;
                    case K:
                        return B = Ji(B), U(z, D, B, G)
                }
                if (yt(B) || ot(B)) return lt !== null ? null : Y(z, D, B, G, null);
                if (typeof B.then == "function") return U(z, D, Eo(B), G);
                if (B.$$typeof === L) return U(z, D, So(z, B), G);
                Ao(z, B)
            }
            return null
        }

        function H(z, D, B, G, lt) {
            if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint") return z = z.get(B) || null, x(D, z, "" + G, lt);
            if (typeof G == "object" && G !== null) {
                switch (G.$$typeof) {
                    case b:
                        return z = z.get(G.key === null ? B : G.key) || null, M(D, z, G, lt);
                    case E:
                        return z = z.get(G.key === null ? B : G.key) || null, V(D, z, G, lt);
                    case K:
                        return G = Ji(G), H(z, D, B, G, lt)
                }
                if (yt(G) || ot(G)) return z = z.get(B) || null, Y(D, z, G, lt, null);
                if (typeof G.then == "function") return H(z, D, B, Eo(G), lt);
                if (G.$$typeof === L) return H(z, D, B, So(D, G), lt);
                Ao(D, G)
            }
            return null
        }

        function it(z, D, B, G) {
            for (var lt = null, wt = null, st = D, mt = D = 0, xt = null; st !== null && mt < B.length; mt++) {
                st.index > mt ? (xt = st, st = null) : xt = st.sibling;
                var Rt = U(z, st, B[mt], G);
                if (Rt === null) {
                    st === null && (st = xt);
                    break
                }
                t && st && Rt.alternate === null && n(z, st), D = d(Rt, D, mt), wt === null ? lt = Rt : wt.sibling = Rt, wt = Rt, st = xt
            }
            if (mt === B.length) return s(z, st), Tt && Nn(z, mt), lt;
            if (st === null) {
                for (; mt < B.length; mt++) st = Q(z, B[mt], G), st !== null && (D = d(st, D, mt), wt === null ? lt = st : wt.sibling = st, wt = st);
                return Tt && Nn(z, mt), lt
            }
            for (st = o(st); mt < B.length; mt++) xt = H(st, z, mt, B[mt], G), xt !== null && (t && xt.alternate !== null && st.delete(xt.key === null ? mt : xt.key), D = d(xt, D, mt), wt === null ? lt = xt : wt.sibling = xt, wt = xt);
            return t && st.forEach(function(Ti) {
                return n(z, Ti)
            }), Tt && Nn(z, mt), lt
        }

        function ut(z, D, B, G) {
            if (B == null) throw Error(r(151));
            for (var lt = null, wt = null, st = D, mt = D = 0, xt = null, Rt = B.next(); st !== null && !Rt.done; mt++, Rt = B.next()) {
                st.index > mt ? (xt = st, st = null) : xt = st.sibling;
                var Ti = U(z, st, Rt.value, G);
                if (Ti === null) {
                    st === null && (st = xt);
                    break
                }
                t && st && Ti.alternate === null && n(z, st), D = d(Ti, D, mt), wt === null ? lt = Ti : wt.sibling = Ti, wt = Ti, st = xt
            }
            if (Rt.done) return s(z, st), Tt && Nn(z, mt), lt;
            if (st === null) {
                for (; !Rt.done; mt++, Rt = B.next()) Rt = Q(z, Rt.value, G), Rt !== null && (D = d(Rt, D, mt), wt === null ? lt = Rt : wt.sibling = Rt, wt = Rt);
                return Tt && Nn(z, mt), lt
            }
            for (st = o(st); !Rt.done; mt++, Rt = B.next()) Rt = H(st, z, mt, Rt.value, G), Rt !== null && (t && Rt.alternate !== null && st.delete(Rt.key === null ? mt : Rt.key), D = d(Rt, D, mt), wt === null ? lt = Rt : wt.sibling = Rt, wt = Rt);
            return t && st.forEach(function(lE) {
                return n(z, lE)
            }), Tt && Nn(z, mt), lt
        }

        function Nt(z, D, B, G) {
            if (typeof B == "object" && B !== null && B.type === _ && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                    case b:
                        t: {
                            for (var lt = B.key; D !== null;) {
                                if (D.key === lt) {
                                    if (lt = B.type, lt === _) {
                                        if (D.tag === 7) {
                                            s(z, D.sibling), G = u(D, B.props.children), G.return = z, z = G;
                                            break t
                                        }
                                    } else if (D.elementType === lt || typeof lt == "object" && lt !== null && lt.$$typeof === K && Ji(lt) === D.type) {
                                        s(z, D.sibling), G = u(D, B.props), Ys(G, B), G.return = z, z = G;
                                        break t
                                    }
                                    s(z, D);
                                    break
                                } else n(z, D);
                                D = D.sibling
                            }
                            B.type === _ ? (G = Xi(B.props.children, z.mode, G, B.key), G.return = z, z = G) : (G = yo(B.type, B.key, B.props, null, z.mode, G), Ys(G, B), G.return = z, z = G)
                        }
                        return v(z);
                    case E:
                        t: {
                            for (lt = B.key; D !== null;) {
                                if (D.key === lt)
                                    if (D.tag === 4 && D.stateNode.containerInfo === B.containerInfo && D.stateNode.implementation === B.implementation) {
                                        s(z, D.sibling), G = u(D, B.children || []), G.return = z, z = G;
                                        break t
                                    } else {
                                        s(z, D);
                                        break
                                    }
                                else n(z, D);
                                D = D.sibling
                            }
                            G = Ku(B, z.mode, G),
                            G.return = z,
                            z = G
                        }
                        return v(z);
                    case K:
                        return B = Ji(B), Nt(z, D, B, G)
                }
                if (yt(B)) return it(z, D, B, G);
                if (ot(B)) {
                    if (lt = ot(B), typeof lt != "function") throw Error(r(150));
                    return B = lt.call(B), ut(z, D, B, G)
                }
                if (typeof B.then == "function") return Nt(z, D, Eo(B), G);
                if (B.$$typeof === L) return Nt(z, D, So(z, B), G);
                Ao(z, B)
            }
            return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, D !== null && D.tag === 6 ? (s(z, D.sibling), G = u(D, B), G.return = z, z = G) : (s(z, D), G = qu(B, z.mode, G), G.return = z, z = G), v(z)) : s(z, D)
        }
        return function(z, D, B, G) {
            try {
                Ks = 0;
                var lt = Nt(z, D, B, G);
                return qa = null, lt
            } catch (st) {
                if (st === ka || st === xo) throw st;
                var wt = Ve(29, st, null, z.mode);
                return wt.lanes = G, wt.return = z, wt
            }
        }
    }
    var $i = Hm(!0),
        km = Hm(!1),
        si = !1;

    function ec(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function nc(t, n) {
        t = t.updateQueue, n.updateQueue === t && (n.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function ri(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function oi(t, n, s) {
        var o = t.updateQueue;
        if (o === null) return null;
        if (o = o.shared, (Mt & 2) !== 0) {
            var u = o.pending;
            return u === null ? n.next = n : (n.next = u.next, u.next = n), o.pending = n, n = po(t), Am(t, null, s), n
        }
        return mo(t, o, n, s), po(t)
    }

    function Gs(t, n, s) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (s & 4194048) !== 0)) {
            var o = n.lanes;
            o &= t.pendingLanes, s |= o, n.lanes = s, Lh(t, s)
        }
    }

    function ic(t, n) {
        var s = t.updateQueue,
            o = t.alternate;
        if (o !== null && (o = o.updateQueue, s === o)) {
            var u = null,
                d = null;
            if (s = s.firstBaseUpdate, s !== null) {
                do {
                    var v = {
                        lane: s.lane,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null
                    };
                    d === null ? u = d = v : d = d.next = v, s = s.next
                } while (s !== null);
                d === null ? u = d = n : d = d.next = n
            } else u = d = n;
            s = {
                baseState: o.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: d,
                shared: o.shared,
                callbacks: o.callbacks
            }, t.updateQueue = s;
            return
        }
        t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = n : t.next = n, s.lastBaseUpdate = n
    }
    var ac = !1;

    function Xs() {
        if (ac) {
            var t = Ha;
            if (t !== null) throw t
        }
    }

    function Fs(t, n, s, o) {
        ac = !1;
        var u = t.updateQueue;
        si = !1;
        var d = u.firstBaseUpdate,
            v = u.lastBaseUpdate,
            x = u.shared.pending;
        if (x !== null) {
            u.shared.pending = null;
            var M = x,
                V = M.next;
            M.next = null, v === null ? d = V : v.next = V, v = M;
            var Y = t.alternate;
            Y !== null && (Y = Y.updateQueue, x = Y.lastBaseUpdate, x !== v && (x === null ? Y.firstBaseUpdate = V : x.next = V, Y.lastBaseUpdate = M))
        }
        if (d !== null) {
            var Q = u.baseState;
            v = 0, Y = V = M = null, x = d;
            do {
                var U = x.lane & -536870913,
                    H = U !== x.lane;
                if (H ? (bt & U) === U : (o & U) === U) {
                    U !== 0 && U === Pa && (ac = !0), Y !== null && (Y = Y.next = {
                        lane: 0,
                        tag: x.tag,
                        payload: x.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var it = t,
                            ut = x;U = n;
                        var Nt = s;
                        switch (ut.tag) {
                            case 1:
                                if (it = ut.payload, typeof it == "function") {
                                    Q = it.call(Nt, Q, U);
                                    break t
                                }
                                Q = it;
                                break t;
                            case 3:
                                it.flags = it.flags & -65537 | 128;
                            case 0:
                                if (it = ut.payload, U = typeof it == "function" ? it.call(Nt, Q, U) : it, U == null) break t;
                                Q = g({}, Q, U);
                                break t;
                            case 2:
                                si = !0
                        }
                    }
                    U = x.callback, U !== null && (t.flags |= 64, H && (t.flags |= 8192), H = u.callbacks, H === null ? u.callbacks = [U] : H.push(U))
                } else H = {
                    lane: U,
                    tag: x.tag,
                    payload: x.payload,
                    callback: x.callback,
                    next: null
                }, Y === null ? (V = Y = H, M = Q) : Y = Y.next = H, v |= U;
                if (x = x.next, x === null) {
                    if (x = u.shared.pending, x === null) break;
                    H = x, x = H.next, H.next = null, u.lastBaseUpdate = H, u.shared.pending = null
                }
            } while (!0);
            Y === null && (M = Q), u.baseState = M, u.firstBaseUpdate = V, u.lastBaseUpdate = Y, d === null && (u.shared.lanes = 0), di |= v, t.lanes = v, t.memoizedState = Q
        }
    }

    function qm(t, n) {
        if (typeof t != "function") throw Error(r(191, t));
        t.call(n)
    }

    function Km(t, n) {
        var s = t.callbacks;
        if (s !== null)
            for (t.callbacks = null, t = 0; t < s.length; t++) qm(s[t], n)
    }
    var Ka = C(null),
        wo = C(0);

    function Ym(t, n) {
        t = Yn, tt(wo, t), tt(Ka, n), Yn = t | n.baseLanes
    }

    function sc() {
        tt(wo, Yn), tt(Ka, Ka.current)
    }

    function rc() {
        Yn = wo.current, X(Ka), X(wo)
    }
    var Ue = C(null),
        We = null;

    function li(t) {
        var n = t.alternate;
        tt(Qt, Qt.current & 1), tt(Ue, t), We === null && (n === null || Ka.current !== null || n.memoizedState !== null) && (We = t)
    }

    function oc(t) {
        tt(Qt, Qt.current), tt(Ue, t), We === null && (We = t)
    }

    function Gm(t) {
        t.tag === 22 ? (tt(Qt, Qt.current), tt(Ue, t), We === null && (We = t)) : ui()
    }

    function ui() {
        tt(Qt, Qt.current), tt(Ue, Ue.current)
    }

    function Pe(t) {
        X(Ue), We === t && (We = null), X(Qt)
    }
    var Qt = C(0);

    function Ro(t) {
        for (var n = t; n !== null;) {
            if (n.tag === 13) {
                var s = n.memoizedState;
                if (s !== null && (s = s.dehydrated, s === null || mf(s) || pf(s))) return n
            } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
                if ((n.flags & 128) !== 0) return n
            } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return null;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
        return null
    }
    var Bn = 0,
        ht = null,
        Ot = null,
        Wt = null,
        _o = !1,
        Ya = !1,
        ta = !1,
        Mo = 0,
        Qs = 0,
        Ga = null,
        Wx = 0;

    function Yt() {
        throw Error(r(321))
    }

    function lc(t, n) {
        if (n === null) return !1;
        for (var s = 0; s < n.length && s < t.length; s++)
            if (!Be(t[s], n[s])) return !1;
        return !0
    }

    function uc(t, n, s, o, u, d) {
        return Bn = d, ht = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, P.H = t === null || t.memoizedState === null ? Mp : Ac, ta = !1, d = s(o, u), ta = !1, Ya && (d = Fm(n, s, o, u)), Xm(t), d
    }

    function Xm(t) {
        P.H = Js;
        var n = Ot !== null && Ot.next !== null;
        if (Bn = 0, Wt = Ot = ht = null, _o = !1, Qs = 0, Ga = null, n) throw Error(r(300));
        t === null || $t || (t = t.dependencies, t !== null && vo(t) && ($t = !0))
    }

    function Fm(t, n, s, o) {
        ht = t;
        var u = 0;
        do {
            if (Ya && (Ga = null), Qs = 0, Ya = !1, 25 <= u) throw Error(r(301));
            if (u += 1, Wt = Ot = null, t.updateQueue != null) {
                var d = t.updateQueue;
                d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0)
            }
            P.H = Cp, d = n(s, o)
        } while (Ya);
        return d
    }

    function $x() {
        var t = P.H,
            n = t.useState()[0];
        return n = typeof n.then == "function" ? Zs(n) : n, t = t.useState()[0], (Ot !== null ? Ot.memoizedState : null) !== t && (ht.flags |= 1024), n
    }

    function cc() {
        var t = Mo !== 0;
        return Mo = 0, t
    }

    function fc(t, n, s) {
        n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~s
    }

    function dc(t) {
        if (_o) {
            for (t = t.memoizedState; t !== null;) {
                var n = t.queue;
                n !== null && (n.pending = null), t = t.next
            }
            _o = !1
        }
        Bn = 0, Wt = Ot = ht = null, Ya = !1, Qs = Mo = 0, Ga = null
    }

    function xe() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Wt === null ? ht.memoizedState = Wt = t : Wt = Wt.next = t, Wt
    }

    function Zt() {
        if (Ot === null) {
            var t = ht.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = Ot.next;
        var n = Wt === null ? ht.memoizedState : Wt.next;
        if (n !== null) Wt = n, Ot = t;
        else {
            if (t === null) throw ht.alternate === null ? Error(r(467)) : Error(r(310));
            Ot = t, t = {
                memoizedState: Ot.memoizedState,
                baseState: Ot.baseState,
                baseQueue: Ot.baseQueue,
                queue: Ot.queue,
                next: null
            }, Wt === null ? ht.memoizedState = Wt = t : Wt = Wt.next = t
        }
        return Wt
    }

    function Co() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Zs(t) {
        var n = Qs;
        return Qs += 1, Ga === null && (Ga = []), t = Vm(Ga, t, n), n = ht, (Wt === null ? n.memoizedState : Wt.next) === null && (n = n.alternate, P.H = n === null || n.memoizedState === null ? Mp : Ac), t
    }

    function Do(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return Zs(t);
            if (t.$$typeof === L) return de(t)
        }
        throw Error(r(438, String(t)))
    }

    function hc(t) {
        var n = null,
            s = ht.updateQueue;
        if (s !== null && (n = s.memoCache), n == null) {
            var o = ht.alternate;
            o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
                data: o.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (n == null && (n = {
                data: [],
                index: 0
            }), s === null && (s = Co(), ht.updateQueue = s), s.memoCache = n, s = n.data[n.index], s === void 0)
            for (s = n.data[n.index] = Array(t), o = 0; o < t; o++) s[o] = I;
        return n.index++, s
    }

    function Vn(t, n) {
        return typeof n == "function" ? n(t) : n
    }

    function Oo(t) {
        var n = Zt();
        return mc(n, Ot, t)
    }

    function mc(t, n, s) {
        var o = t.queue;
        if (o === null) throw Error(r(311));
        o.lastRenderedReducer = s;
        var u = t.baseQueue,
            d = o.pending;
        if (d !== null) {
            if (u !== null) {
                var v = u.next;
                u.next = d.next, d.next = v
            }
            n.baseQueue = u = d, o.pending = null
        }
        if (d = t.baseState, u === null) t.memoizedState = d;
        else {
            n = u.next;
            var x = v = null,
                M = null,
                V = n,
                Y = !1;
            do {
                var Q = V.lane & -536870913;
                if (Q !== V.lane ? (bt & Q) === Q : (Bn & Q) === Q) {
                    var U = V.revertLane;
                    if (U === 0) M !== null && (M = M.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: V.action,
                        hasEagerState: V.hasEagerState,
                        eagerState: V.eagerState,
                        next: null
                    }), Q === Pa && (Y = !0);
                    else if ((Bn & U) === U) {
                        V = V.next, U === Pa && (Y = !0);
                        continue
                    } else Q = {
                        lane: 0,
                        revertLane: V.revertLane,
                        gesture: null,
                        action: V.action,
                        hasEagerState: V.hasEagerState,
                        eagerState: V.eagerState,
                        next: null
                    }, M === null ? (x = M = Q, v = d) : M = M.next = Q, ht.lanes |= U, di |= U;
                    Q = V.action, ta && s(d, Q), d = V.hasEagerState ? V.eagerState : s(d, Q)
                } else U = {
                    lane: Q,
                    revertLane: V.revertLane,
                    gesture: V.gesture,
                    action: V.action,
                    hasEagerState: V.hasEagerState,
                    eagerState: V.eagerState,
                    next: null
                }, M === null ? (x = M = U, v = d) : M = M.next = U, ht.lanes |= Q, di |= Q;
                V = V.next
            } while (V !== null && V !== n);
            if (M === null ? v = d : M.next = x, !Be(d, t.memoizedState) && ($t = !0, Y && (s = Ha, s !== null))) throw s;
            t.memoizedState = d, t.baseState = v, t.baseQueue = M, o.lastRenderedState = d
        }
        return u === null && (o.lanes = 0), [t.memoizedState, o.dispatch]
    }

    function pc(t) {
        var n = Zt(),
            s = n.queue;
        if (s === null) throw Error(r(311));
        s.lastRenderedReducer = t;
        var o = s.dispatch,
            u = s.pending,
            d = n.memoizedState;
        if (u !== null) {
            s.pending = null;
            var v = u = u.next;
            do d = t(d, v.action), v = v.next; while (v !== u);
            Be(d, n.memoizedState) || ($t = !0), n.memoizedState = d, n.baseQueue === null && (n.baseState = d), s.lastRenderedState = d
        }
        return [d, o]
    }

    function Qm(t, n, s) {
        var o = ht,
            u = Zt(),
            d = Tt;
        if (d) {
            if (s === void 0) throw Error(r(407));
            s = s()
        } else s = n();
        var v = !Be((Ot || u).memoizedState, s);
        if (v && (u.memoizedState = s, $t = !0), u = u.queue, vc(Jm.bind(null, o, u, t), [t]), u.getSnapshot !== n || v || Wt !== null && Wt.memoizedState.tag & 1) {
            if (o.flags |= 2048, Xa(9, {
                    destroy: void 0
                }, Im.bind(null, o, u, s, n), null), jt === null) throw Error(r(349));
            d || (Bn & 127) !== 0 || Zm(o, n, s)
        }
        return s
    }

    function Zm(t, n, s) {
        t.flags |= 16384, t = {
            getSnapshot: n,
            value: s
        }, n = ht.updateQueue, n === null ? (n = Co(), ht.updateQueue = n, n.stores = [t]) : (s = n.stores, s === null ? n.stores = [t] : s.push(t))
    }

    function Im(t, n, s, o) {
        n.value = s, n.getSnapshot = o, Wm(n) && $m(t)
    }

    function Jm(t, n, s) {
        return s(function() {
            Wm(n) && $m(t)
        })
    }

    function Wm(t) {
        var n = t.getSnapshot;
        t = t.value;
        try {
            var s = n();
            return !Be(t, s)
        } catch {
            return !0
        }
    }

    function $m(t) {
        var n = Gi(t, 2);
        n !== null && De(n, t, 2)
    }

    function yc(t) {
        var n = xe();
        if (typeof t == "function") {
            var s = t;
            if (t = s(), ta) {
                Wn(!0);
                try {
                    s()
                } finally {
                    Wn(!1)
                }
            }
        }
        return n.memoizedState = n.baseState = t, n.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vn,
            lastRenderedState: t
        }, n
    }

    function tp(t, n, s, o) {
        return t.baseState = s, mc(t, Ot, typeof o == "function" ? o : Vn)
    }

    function tT(t, n, s, o, u) {
        if (zo(t)) throw Error(r(485));
        if (t = n.action, t !== null) {
            var d = {
                payload: u,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(v) {
                    d.listeners.push(v)
                }
            };
            P.T !== null ? s(!0) : d.isTransition = !1, o(d), s = n.pending, s === null ? (d.next = n.pending = d, ep(n, d)) : (d.next = s.next, n.pending = s.next = d)
        }
    }

    function ep(t, n) {
        var s = n.action,
            o = n.payload,
            u = t.state;
        if (n.isTransition) {
            var d = P.T,
                v = {};
            P.T = v;
            try {
                var x = s(u, o),
                    M = P.S;
                M !== null && M(v, x), np(t, n, x)
            } catch (V) {
                gc(t, n, V)
            } finally {
                d !== null && v.types !== null && (d.types = v.types), P.T = d
            }
        } else try {
            d = s(u, o), np(t, n, d)
        } catch (V) {
            gc(t, n, V)
        }
    }

    function np(t, n, s) {
        s !== null && typeof s == "object" && typeof s.then == "function" ? s.then(function(o) {
            ip(t, n, o)
        }, function(o) {
            return gc(t, n, o)
        }) : ip(t, n, s)
    }

    function ip(t, n, s) {
        n.status = "fulfilled", n.value = s, ap(n), t.state = s, n = t.pending, n !== null && (s = n.next, s === n ? t.pending = null : (s = s.next, n.next = s, ep(t, s)))
    }

    function gc(t, n, s) {
        var o = t.pending;
        if (t.pending = null, o !== null) {
            o = o.next;
            do n.status = "rejected", n.reason = s, ap(n), n = n.next; while (n !== o)
        }
        t.action = null
    }

    function ap(t) {
        t = t.listeners;
        for (var n = 0; n < t.length; n++)(0, t[n])()
    }

    function sp(t, n) {
        return n
    }

    function rp(t, n) {
        if (Tt) {
            var s = jt.formState;
            if (s !== null) {
                t: {
                    var o = ht;
                    if (Tt) {
                        if (Pt) {
                            e: {
                                for (var u = Pt, d = Je; u.nodeType !== 8;) {
                                    if (!d) {
                                        u = null;
                                        break e
                                    }
                                    if (u = $e(u.nextSibling), u === null) {
                                        u = null;
                                        break e
                                    }
                                }
                                d = u.data,
                                u = d === "F!" || d === "F" ? u : null
                            }
                            if (u) {
                                Pt = $e(u.nextSibling), o = u.data === "F!";
                                break t
                            }
                        }
                        ii(o)
                    }
                    o = !1
                }
                o && (n = s[0])
            }
        }
        return s = xe(), s.memoizedState = s.baseState = n, o = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: sp,
            lastRenderedState: n
        }, s.queue = o, s = wp.bind(null, ht, o), o.dispatch = s, o = yc(!1), d = Ec.bind(null, ht, !1, o.queue), o = xe(), u = {
            state: n,
            dispatch: null,
            action: t,
            pending: null
        }, o.queue = u, s = tT.bind(null, ht, u, d, s), u.dispatch = s, o.memoizedState = t, [n, s, !1]
    }

    function op(t) {
        var n = Zt();
        return lp(n, Ot, t)
    }

    function lp(t, n, s) {
        if (n = mc(t, n, sp)[0], t = Oo(Vn)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
            var o = Zs(n)
        } catch (v) {
            throw v === ka ? xo : v
        } else o = n;
        n = Zt();
        var u = n.queue,
            d = u.dispatch;
        return s !== n.memoizedState && (ht.flags |= 2048, Xa(9, {
            destroy: void 0
        }, eT.bind(null, u, s), null)), [o, d, t]
    }

    function eT(t, n) {
        t.action = n
    }

    function up(t) {
        var n = Zt(),
            s = Ot;
        if (s !== null) return lp(n, s, t);
        Zt(), n = n.memoizedState, s = Zt();
        var o = s.queue.dispatch;
        return s.memoizedState = t, [n, o, !1]
    }

    function Xa(t, n, s, o) {
        return t = {
            tag: t,
            create: s,
            deps: o,
            inst: n,
            next: null
        }, n = ht.updateQueue, n === null && (n = Co(), ht.updateQueue = n), s = n.lastEffect, s === null ? n.lastEffect = t.next = t : (o = s.next, s.next = t, t.next = o, n.lastEffect = t), t
    }

    function cp() {
        return Zt().memoizedState
    }

    function Lo(t, n, s, o) {
        var u = xe();
        ht.flags |= t, u.memoizedState = Xa(1 | n, {
            destroy: void 0
        }, s, o === void 0 ? null : o)
    }

    function No(t, n, s, o) {
        var u = Zt();
        o = o === void 0 ? null : o;
        var d = u.memoizedState.inst;
        Ot !== null && o !== null && lc(o, Ot.memoizedState.deps) ? u.memoizedState = Xa(n, d, s, o) : (ht.flags |= t, u.memoizedState = Xa(1 | n, d, s, o))
    }

    function fp(t, n) {
        Lo(8390656, 8, t, n)
    }

    function vc(t, n) {
        No(2048, 8, t, n)
    }

    function nT(t) {
        ht.flags |= 4;
        var n = ht.updateQueue;
        if (n === null) n = Co(), ht.updateQueue = n, n.events = [t];
        else {
            var s = n.events;
            s === null ? n.events = [t] : s.push(t)
        }
    }

    function dp(t) {
        var n = Zt().memoizedState;
        return nT({
                ref: n,
                nextImpl: t
            }),
            function() {
                if ((Mt & 2) !== 0) throw Error(r(440));
                return n.impl.apply(void 0, arguments)
            }
    }

    function hp(t, n) {
        return No(4, 2, t, n)
    }

    function mp(t, n) {
        return No(4, 4, t, n)
    }

    function pp(t, n) {
        if (typeof n == "function") {
            t = t();
            var s = n(t);
            return function() {
                typeof s == "function" ? s() : n(null)
            }
        }
        if (n != null) return t = t(), n.current = t,
            function() {
                n.current = null
            }
    }

    function yp(t, n, s) {
        s = s != null ? s.concat([t]) : null, No(4, 4, pp.bind(null, n, t), s)
    }

    function Sc() {}

    function gp(t, n) {
        var s = Zt();
        n = n === void 0 ? null : n;
        var o = s.memoizedState;
        return n !== null && lc(n, o[1]) ? o[0] : (s.memoizedState = [t, n], t)
    }

    function vp(t, n) {
        var s = Zt();
        n = n === void 0 ? null : n;
        var o = s.memoizedState;
        if (n !== null && lc(n, o[1])) return o[0];
        if (o = t(), ta) {
            Wn(!0);
            try {
                t()
            } finally {
                Wn(!1)
            }
        }
        return s.memoizedState = [o, n], o
    }

    function bc(t, n, s) {
        return s === void 0 || (Bn & 1073741824) !== 0 && (bt & 261930) === 0 ? t.memoizedState = n : (t.memoizedState = s, t = Sy(), ht.lanes |= t, di |= t, s)
    }

    function Sp(t, n, s, o) {
        return Be(s, n) ? s : Ka.current !== null ? (t = bc(t, s, o), Be(t, n) || ($t = !0), t) : (Bn & 42) === 0 || (Bn & 1073741824) !== 0 && (bt & 261930) === 0 ? ($t = !0, t.memoizedState = s) : (t = Sy(), ht.lanes |= t, di |= t, n)
    }

    function bp(t, n, s, o, u) {
        var d = W.p;
        W.p = d !== 0 && 8 > d ? d : 8;
        var v = P.T,
            x = {};
        P.T = x, Ec(t, !1, n, s);
        try {
            var M = u(),
                V = P.S;
            if (V !== null && V(x, M), M !== null && typeof M == "object" && typeof M.then == "function") {
                var Y = Jx(M, o);
                Is(t, n, Y, qe(t))
            } else Is(t, n, o, qe(t))
        } catch (Q) {
            Is(t, n, {
                then: function() {},
                status: "rejected",
                reason: Q
            }, qe())
        } finally {
            W.p = d, v !== null && x.types !== null && (v.types = x.types), P.T = v
        }
    }

    function iT() {}

    function xc(t, n, s, o) {
        if (t.tag !== 5) throw Error(r(476));
        var u = xp(t).queue;
        bp(t, u, n, et, s === null ? iT : function() {
            return Tp(t), s(o)
        })
    }

    function xp(t) {
        var n = t.memoizedState;
        if (n !== null) return n;
        n = {
            memoizedState: et,
            baseState: et,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vn,
                lastRenderedState: et
            },
            next: null
        };
        var s = {};
        return n.next = {
            memoizedState: s,
            baseState: s,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vn,
                lastRenderedState: s
            },
            next: null
        }, t.memoizedState = n, t = t.alternate, t !== null && (t.memoizedState = n), n
    }

    function Tp(t) {
        var n = xp(t);
        n.next === null && (n = t.alternate.memoizedState), Is(t, n.next.queue, {}, qe())
    }

    function Tc() {
        return de(hr)
    }

    function Ep() {
        return Zt().memoizedState
    }

    function Ap() {
        return Zt().memoizedState
    }

    function aT(t) {
        for (var n = t.return; n !== null;) {
            switch (n.tag) {
                case 24:
                case 3:
                    var s = qe();
                    t = ri(s);
                    var o = oi(n, t, s);
                    o !== null && (De(o, n, s), Gs(o, n, s)), n = {
                        cache: Ju()
                    }, t.payload = n;
                    return
            }
            n = n.return
        }
    }

    function sT(t, n, s) {
        var o = qe();
        s = {
            lane: o,
            revertLane: 0,
            gesture: null,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, zo(t) ? Rp(n, s) : (s = Hu(t, n, s, o), s !== null && (De(s, t, o), _p(s, n, o)))
    }

    function wp(t, n, s) {
        var o = qe();
        Is(t, n, s, o)
    }

    function Is(t, n, s, o) {
        var u = {
            lane: o,
            revertLane: 0,
            gesture: null,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (zo(t)) Rp(n, u);
        else {
            var d = t.alternate;
            if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer, d !== null)) try {
                var v = n.lastRenderedState,
                    x = d(v, s);
                if (u.hasEagerState = !0, u.eagerState = x, Be(x, v)) return mo(t, n, u, 0), jt === null && ho(), !1
            } catch {}
            if (s = Hu(t, n, u, o), s !== null) return De(s, t, o), _p(s, n, o), !0
        }
        return !1
    }

    function Ec(t, n, s, o) {
        if (o = {
                lane: 2,
                revertLane: ef(),
                gesture: null,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, zo(t)) {
            if (n) throw Error(r(479))
        } else n = Hu(t, s, o, 2), n !== null && De(n, t, 2)
    }

    function zo(t) {
        var n = t.alternate;
        return t === ht || n !== null && n === ht
    }

    function Rp(t, n) {
        Ya = _o = !0;
        var s = t.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), t.pending = n
    }

    function _p(t, n, s) {
        if ((s & 4194048) !== 0) {
            var o = n.lanes;
            o &= t.pendingLanes, s |= o, n.lanes = s, Lh(t, s)
        }
    }
    var Js = {
        readContext: de,
        use: Do,
        useCallback: Yt,
        useContext: Yt,
        useEffect: Yt,
        useImperativeHandle: Yt,
        useLayoutEffect: Yt,
        useInsertionEffect: Yt,
        useMemo: Yt,
        useReducer: Yt,
        useRef: Yt,
        useState: Yt,
        useDebugValue: Yt,
        useDeferredValue: Yt,
        useTransition: Yt,
        useSyncExternalStore: Yt,
        useId: Yt,
        useHostTransitionStatus: Yt,
        useFormState: Yt,
        useActionState: Yt,
        useOptimistic: Yt,
        useMemoCache: Yt,
        useCacheRefresh: Yt
    };
    Js.useEffectEvent = Yt;
    var Mp = {
            readContext: de,
            use: Do,
            useCallback: function(t, n) {
                return xe().memoizedState = [t, n === void 0 ? null : n], t
            },
            useContext: de,
            useEffect: fp,
            useImperativeHandle: function(t, n, s) {
                s = s != null ? s.concat([t]) : null, Lo(4194308, 4, pp.bind(null, n, t), s)
            },
            useLayoutEffect: function(t, n) {
                return Lo(4194308, 4, t, n)
            },
            useInsertionEffect: function(t, n) {
                Lo(4, 2, t, n)
            },
            useMemo: function(t, n) {
                var s = xe();
                n = n === void 0 ? null : n;
                var o = t();
                if (ta) {
                    Wn(!0);
                    try {
                        t()
                    } finally {
                        Wn(!1)
                    }
                }
                return s.memoizedState = [o, n], o
            },
            useReducer: function(t, n, s) {
                var o = xe();
                if (s !== void 0) {
                    var u = s(n);
                    if (ta) {
                        Wn(!0);
                        try {
                            s(n)
                        } finally {
                            Wn(!1)
                        }
                    }
                } else u = n;
                return o.memoizedState = o.baseState = u, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: u
                }, o.queue = t, t = t.dispatch = sT.bind(null, ht, t), [o.memoizedState, t]
            },
            useRef: function(t) {
                var n = xe();
                return t = {
                    current: t
                }, n.memoizedState = t
            },
            useState: function(t) {
                t = yc(t);
                var n = t.queue,
                    s = wp.bind(null, ht, n);
                return n.dispatch = s, [t.memoizedState, s]
            },
            useDebugValue: Sc,
            useDeferredValue: function(t, n) {
                var s = xe();
                return bc(s, t, n)
            },
            useTransition: function() {
                var t = yc(!1);
                return t = bp.bind(null, ht, t.queue, !0, !1), xe().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, n, s) {
                var o = ht,
                    u = xe();
                if (Tt) {
                    if (s === void 0) throw Error(r(407));
                    s = s()
                } else {
                    if (s = n(), jt === null) throw Error(r(349));
                    (bt & 127) !== 0 || Zm(o, n, s)
                }
                u.memoizedState = s;
                var d = {
                    value: s,
                    getSnapshot: n
                };
                return u.queue = d, fp(Jm.bind(null, o, d, t), [t]), o.flags |= 2048, Xa(9, {
                    destroy: void 0
                }, Im.bind(null, o, d, s, n), null), s
            },
            useId: function() {
                var t = xe(),
                    n = jt.identifierPrefix;
                if (Tt) {
                    var s = gn,
                        o = yn;
                    s = (o & ~(1 << 32 - je(o) - 1)).toString(32) + s, n = "_" + n + "R_" + s, s = Mo++, 0 < s && (n += "H" + s.toString(32)), n += "_"
                } else s = Wx++, n = "_" + n + "r_" + s.toString(32) + "_";
                return t.memoizedState = n
            },
            useHostTransitionStatus: Tc,
            useFormState: rp,
            useActionState: rp,
            useOptimistic: function(t) {
                var n = xe();
                n.memoizedState = n.baseState = t;
                var s = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return n.queue = s, n = Ec.bind(null, ht, !0, s), s.dispatch = n, [t, n]
            },
            useMemoCache: hc,
            useCacheRefresh: function() {
                return xe().memoizedState = aT.bind(null, ht)
            },
            useEffectEvent: function(t) {
                var n = xe(),
                    s = {
                        impl: t
                    };
                return n.memoizedState = s,
                    function() {
                        if ((Mt & 2) !== 0) throw Error(r(440));
                        return s.impl.apply(void 0, arguments)
                    }
            }
        },
        Ac = {
            readContext: de,
            use: Do,
            useCallback: gp,
            useContext: de,
            useEffect: vc,
            useImperativeHandle: yp,
            useInsertionEffect: hp,
            useLayoutEffect: mp,
            useMemo: vp,
            useReducer: Oo,
            useRef: cp,
            useState: function() {
                return Oo(Vn)
            },
            useDebugValue: Sc,
            useDeferredValue: function(t, n) {
                var s = Zt();
                return Sp(s, Ot.memoizedState, t, n)
            },
            useTransition: function() {
                var t = Oo(Vn)[0],
                    n = Zt().memoizedState;
                return [typeof t == "boolean" ? t : Zs(t), n]
            },
            useSyncExternalStore: Qm,
            useId: Ep,
            useHostTransitionStatus: Tc,
            useFormState: op,
            useActionState: op,
            useOptimistic: function(t, n) {
                var s = Zt();
                return tp(s, Ot, t, n)
            },
            useMemoCache: hc,
            useCacheRefresh: Ap
        };
    Ac.useEffectEvent = dp;
    var Cp = {
        readContext: de,
        use: Do,
        useCallback: gp,
        useContext: de,
        useEffect: vc,
        useImperativeHandle: yp,
        useInsertionEffect: hp,
        useLayoutEffect: mp,
        useMemo: vp,
        useReducer: pc,
        useRef: cp,
        useState: function() {
            return pc(Vn)
        },
        useDebugValue: Sc,
        useDeferredValue: function(t, n) {
            var s = Zt();
            return Ot === null ? bc(s, t, n) : Sp(s, Ot.memoizedState, t, n)
        },
        useTransition: function() {
            var t = pc(Vn)[0],
                n = Zt().memoizedState;
            return [typeof t == "boolean" ? t : Zs(t), n]
        },
        useSyncExternalStore: Qm,
        useId: Ep,
        useHostTransitionStatus: Tc,
        useFormState: up,
        useActionState: up,
        useOptimistic: function(t, n) {
            var s = Zt();
            return Ot !== null ? tp(s, Ot, t, n) : (s.baseState = t, [t, s.queue.dispatch])
        },
        useMemoCache: hc,
        useCacheRefresh: Ap
    };
    Cp.useEffectEvent = dp;

    function wc(t, n, s, o) {
        n = t.memoizedState, s = s(o, n), s = s == null ? n : g({}, n, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s)
    }
    var Rc = {
        enqueueSetState: function(t, n, s) {
            t = t._reactInternals;
            var o = qe(),
                u = ri(o);
            u.payload = n, s != null && (u.callback = s), n = oi(t, u, o), n !== null && (De(n, t, o), Gs(n, t, o))
        },
        enqueueReplaceState: function(t, n, s) {
            t = t._reactInternals;
            var o = qe(),
                u = ri(o);
            u.tag = 1, u.payload = n, s != null && (u.callback = s), n = oi(t, u, o), n !== null && (De(n, t, o), Gs(n, t, o))
        },
        enqueueForceUpdate: function(t, n) {
            t = t._reactInternals;
            var s = qe(),
                o = ri(s);
            o.tag = 2, n != null && (o.callback = n), n = oi(t, o, s), n !== null && (De(n, t, s), Gs(n, t, s))
        }
    };

    function Dp(t, n, s, o, u, d, v) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(o, d, v) : n.prototype && n.prototype.isPureReactComponent ? !Vs(s, o) || !Vs(u, d) : !0
    }

    function Op(t, n, s, o) {
        t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, o), n.state !== t && Rc.enqueueReplaceState(n, n.state, null)
    }

    function ea(t, n) {
        var s = n;
        if ("ref" in n) {
            s = {};
            for (var o in n) o !== "ref" && (s[o] = n[o])
        }
        if (t = t.defaultProps) {
            s === n && (s = g({}, s));
            for (var u in t) s[u] === void 0 && (s[u] = t[u])
        }
        return s
    }

    function Lp(t) {
        fo(t)
    }

    function Np(t) {
        console.error(t)
    }

    function zp(t) {
        fo(t)
    }

    function jo(t, n) {
        try {
            var s = t.onUncaughtError;
            s(n.value, {
                componentStack: n.stack
            })
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }

    function jp(t, n, s) {
        try {
            var o = t.onCaughtError;
            o(s.value, {
                componentStack: s.stack,
                errorBoundary: n.tag === 1 ? n.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }

    function _c(t, n, s) {
        return s = ri(s), s.tag = 3, s.payload = {
            element: null
        }, s.callback = function() {
            jo(t, n)
        }, s
    }

    function Bp(t) {
        return t = ri(t), t.tag = 3, t
    }

    function Vp(t, n, s, o) {
        var u = s.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var d = o.value;
            t.payload = function() {
                return u(d)
            }, t.callback = function() {
                jp(n, s, o)
            }
        }
        var v = s.stateNode;
        v !== null && typeof v.componentDidCatch == "function" && (t.callback = function() {
            jp(n, s, o), typeof u != "function" && (hi === null ? hi = new Set([this]) : hi.add(this));
            var x = o.stack;
            this.componentDidCatch(o.value, {
                componentStack: x !== null ? x : ""
            })
        })
    }

    function rT(t, n, s, o, u) {
        if (s.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
            if (n = s.alternate, n !== null && Ua(n, s, u, !0), s = Ue.current, s !== null) {
                switch (s.tag) {
                    case 31:
                    case 13:
                        return We === null ? Fo() : s.alternate === null && Gt === 0 && (Gt = 3), s.flags &= -257, s.flags |= 65536, s.lanes = u, o === To ? s.flags |= 16384 : (n = s.updateQueue, n === null ? s.updateQueue = new Set([o]) : n.add(o), Wc(t, o, u)), !1;
                    case 22:
                        return s.flags |= 65536, o === To ? s.flags |= 16384 : (n = s.updateQueue, n === null ? (n = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([o])
                        }, s.updateQueue = n) : (s = n.retryQueue, s === null ? n.retryQueue = new Set([o]) : s.add(o)), Wc(t, o, u)), !1
                }
                throw Error(r(435, s.tag))
            }
            return Wc(t, o, u), Fo(), !1
        }
        if (Tt) return n = Ue.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = u, o !== Xu && (t = Error(r(422), {
            cause: o
        }), Hs(Qe(t, s)))) : (o !== Xu && (n = Error(r(423), {
            cause: o
        }), Hs(Qe(n, s))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, o = Qe(o, s), u = _c(t.stateNode, o, u), ic(t, u), Gt !== 4 && (Gt = 2)), !1;
        var d = Error(r(520), {
            cause: o
        });
        if (d = Qe(d, s), sr === null ? sr = [d] : sr.push(d), Gt !== 4 && (Gt = 2), n === null) return !0;
        o = Qe(o, s), s = n;
        do {
            switch (s.tag) {
                case 3:
                    return s.flags |= 65536, t = u & -u, s.lanes |= t, t = _c(s.stateNode, o, t), ic(s, t), !1;
                case 1:
                    if (n = s.type, d = s.stateNode, (s.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (hi === null || !hi.has(d)))) return s.flags |= 65536, u &= -u, s.lanes |= u, u = Bp(u), Vp(u, t, s, o), ic(s, u), !1
            }
            s = s.return
        } while (s !== null);
        return !1
    }
    var Mc = Error(r(461)),
        $t = !1;

    function he(t, n, s, o) {
        n.child = t === null ? km(n, null, s, o) : $i(n, t.child, s, o)
    }

    function Up(t, n, s, o, u) {
        s = s.render;
        var d = n.ref;
        if ("ref" in o) {
            var v = {};
            for (var x in o) x !== "ref" && (v[x] = o[x])
        } else v = o;
        return Zi(n), o = uc(t, n, s, v, d, u), x = cc(), t !== null && !$t ? (fc(t, n, u), Un(t, n, u)) : (Tt && x && Yu(n), n.flags |= 1, he(t, n, o, u), n.child)
    }

    function Pp(t, n, s, o, u) {
        if (t === null) {
            var d = s.type;
            return typeof d == "function" && !ku(d) && d.defaultProps === void 0 && s.compare === null ? (n.tag = 15, n.type = d, Hp(t, n, d, o, u)) : (t = yo(s.type, null, o, n, n.mode, u), t.ref = n.ref, t.return = n, n.child = t)
        }
        if (d = t.child, !Bc(t, u)) {
            var v = d.memoizedProps;
            if (s = s.compare, s = s !== null ? s : Vs, s(v, o) && t.ref === n.ref) return Un(t, n, u)
        }
        return n.flags |= 1, t = Ln(d, o), t.ref = n.ref, t.return = n, n.child = t
    }

    function Hp(t, n, s, o, u) {
        if (t !== null) {
            var d = t.memoizedProps;
            if (Vs(d, o) && t.ref === n.ref)
                if ($t = !1, n.pendingProps = o = d, Bc(t, u))(t.flags & 131072) !== 0 && ($t = !0);
                else return n.lanes = t.lanes, Un(t, n, u)
        }
        return Cc(t, n, s, o, u)
    }

    function kp(t, n, s, o) {
        var u = o.children,
            d = t !== null ? t.memoizedState : null;
        if (t === null && n.stateNode === null && (n.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), o.mode === "hidden") {
            if ((n.flags & 128) !== 0) {
                if (d = d !== null ? d.baseLanes | s : s, t !== null) {
                    for (o = n.child = t.child, u = 0; o !== null;) u = u | o.lanes | o.childLanes, o = o.sibling;
                    o = u & ~d
                } else o = 0, n.child = null;
                return qp(t, n, d, s, o)
            }
            if ((s & 536870912) !== 0) n.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && bo(n, d !== null ? d.cachePool : null), d !== null ? Ym(n, d) : sc(), Gm(n);
            else return o = n.lanes = 536870912, qp(t, n, d !== null ? d.baseLanes | s : s, s, o)
        } else d !== null ? (bo(n, d.cachePool), Ym(n, d), ui(), n.memoizedState = null) : (t !== null && bo(n, null), sc(), ui());
        return he(t, n, u, s), n.child
    }

    function Ws(t, n) {
        return t !== null && t.tag === 22 || n.stateNode !== null || (n.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), n.sibling
    }

    function qp(t, n, s, o, u) {
        var d = $u();
        return d = d === null ? null : {
            parent: Jt._currentValue,
            pool: d
        }, n.memoizedState = {
            baseLanes: s,
            cachePool: d
        }, t !== null && bo(n, null), sc(), Gm(n), t !== null && Ua(t, n, o, !0), n.childLanes = u, null
    }

    function Bo(t, n) {
        return n = Uo({
            mode: n.mode,
            children: n.children
        }, t.mode), n.ref = t.ref, t.child = n, n.return = t, n
    }

    function Kp(t, n, s) {
        return $i(n, t.child, null, s), t = Bo(n, n.pendingProps), t.flags |= 2, Pe(n), n.memoizedState = null, t
    }

    function oT(t, n, s) {
        var o = n.pendingProps,
            u = (n.flags & 128) !== 0;
        if (n.flags &= -129, t === null) {
            if (Tt) {
                if (o.mode === "hidden") return t = Bo(n, o), n.lanes = 536870912, Ws(null, t);
                if (oc(n), (t = Pt) ? (t = eg(t, Je), t = t !== null && t.data === "&" ? t : null, t !== null && (n.memoizedState = {
                        dehydrated: t,
                        treeContext: ei !== null ? {
                            id: yn,
                            overflow: gn
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, s = Rm(t), s.return = n, n.child = s, fe = n, Pt = null)) : t = null, t === null) throw ii(n);
                return n.lanes = 536870912, null
            }
            return Bo(n, o)
        }
        var d = t.memoizedState;
        if (d !== null) {
            var v = d.dehydrated;
            if (oc(n), u)
                if (n.flags & 256) n.flags &= -257, n = Kp(t, n, s);
                else if (n.memoizedState !== null) n.child = t.child, n.flags |= 128, n = null;
            else throw Error(r(558));
            else if ($t || Ua(t, n, s, !1), u = (s & t.childLanes) !== 0, $t || u) {
                if (o = jt, o !== null && (v = Nh(o, s), v !== 0 && v !== d.retryLane)) throw d.retryLane = v, Gi(t, v), De(o, t, v), Mc;
                Fo(), n = Kp(t, n, s)
            } else t = d.treeContext, Pt = $e(v.nextSibling), fe = n, Tt = !0, ni = null, Je = !1, t !== null && Cm(n, t), n = Bo(n, o), n.flags |= 4096;
            return n
        }
        return t = Ln(t.child, {
            mode: o.mode,
            children: o.children
        }), t.ref = n.ref, n.child = t, t.return = n, t
    }

    function Vo(t, n) {
        var s = n.ref;
        if (s === null) t !== null && t.ref !== null && (n.flags |= 4194816);
        else {
            if (typeof s != "function" && typeof s != "object") throw Error(r(284));
            (t === null || t.ref !== s) && (n.flags |= 4194816)
        }
    }

    function Cc(t, n, s, o, u) {
        return Zi(n), s = uc(t, n, s, o, void 0, u), o = cc(), t !== null && !$t ? (fc(t, n, u), Un(t, n, u)) : (Tt && o && Yu(n), n.flags |= 1, he(t, n, s, u), n.child)
    }

    function Yp(t, n, s, o, u, d) {
        return Zi(n), n.updateQueue = null, s = Fm(n, o, s, u), Xm(t), o = cc(), t !== null && !$t ? (fc(t, n, d), Un(t, n, d)) : (Tt && o && Yu(n), n.flags |= 1, he(t, n, s, d), n.child)
    }

    function Gp(t, n, s, o, u) {
        if (Zi(n), n.stateNode === null) {
            var d = za,
                v = s.contextType;
            typeof v == "object" && v !== null && (d = de(v)), d = new s(o, d), n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Rc, n.stateNode = d, d._reactInternals = n, d = n.stateNode, d.props = o, d.state = n.memoizedState, d.refs = {}, ec(n), v = s.contextType, d.context = typeof v == "object" && v !== null ? de(v) : za, d.state = n.memoizedState, v = s.getDerivedStateFromProps, typeof v == "function" && (wc(n, s, v, o), d.state = n.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (v = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), v !== d.state && Rc.enqueueReplaceState(d, d.state, null), Fs(n, o, d, u), Xs(), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308), o = !0
        } else if (t === null) {
            d = n.stateNode;
            var x = n.memoizedProps,
                M = ea(s, x);
            d.props = M;
            var V = d.context,
                Y = s.contextType;
            v = za, typeof Y == "object" && Y !== null && (v = de(Y));
            var Q = s.getDerivedStateFromProps;
            Y = typeof Q == "function" || typeof d.getSnapshotBeforeUpdate == "function", x = n.pendingProps !== x, Y || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (x || V !== v) && Op(n, d, o, v), si = !1;
            var U = n.memoizedState;
            d.state = U, Fs(n, o, d, u), Xs(), V = n.memoizedState, x || U !== V || si ? (typeof Q == "function" && (wc(n, s, Q, o), V = n.memoizedState), (M = si || Dp(n, s, M, o, U, V, v)) ? (Y || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = V), d.props = o, d.state = V, d.context = v, o = M) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), o = !1)
        } else {
            d = n.stateNode, nc(t, n), v = n.memoizedProps, Y = ea(s, v), d.props = Y, Q = n.pendingProps, U = d.context, V = s.contextType, M = za, typeof V == "object" && V !== null && (M = de(V)), x = s.getDerivedStateFromProps, (V = typeof x == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== Q || U !== M) && Op(n, d, o, M), si = !1, U = n.memoizedState, d.state = U, Fs(n, o, d, u), Xs();
            var H = n.memoizedState;
            v !== Q || U !== H || si || t !== null && t.dependencies !== null && vo(t.dependencies) ? (typeof x == "function" && (wc(n, s, x, o), H = n.memoizedState), (Y = si || Dp(n, s, Y, o, U, H, M) || t !== null && t.dependencies !== null && vo(t.dependencies)) ? (V || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(o, H, M), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(o, H, M)), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === t.memoizedProps && U === t.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && U === t.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = H), d.props = o, d.state = H, d.context = M, o = Y) : (typeof d.componentDidUpdate != "function" || v === t.memoizedProps && U === t.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && U === t.memoizedState || (n.flags |= 1024), o = !1)
        }
        return d = o, Vo(t, n), o = (n.flags & 128) !== 0, d || o ? (d = n.stateNode, s = o && typeof s.getDerivedStateFromError != "function" ? null : d.render(), n.flags |= 1, t !== null && o ? (n.child = $i(n, t.child, null, u), n.child = $i(n, null, s, u)) : he(t, n, s, u), n.memoizedState = d.state, t = n.child) : t = Un(t, n, u), t
    }

    function Xp(t, n, s, o) {
        return Fi(), n.flags |= 256, he(t, n, s, o), n.child
    }
    var Dc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Oc(t) {
        return {
            baseLanes: t,
            cachePool: jm()
        }
    }

    function Lc(t, n, s) {
        return t = t !== null ? t.childLanes & ~s : 0, n && (t |= ke), t
    }

    function Fp(t, n, s) {
        var o = n.pendingProps,
            u = !1,
            d = (n.flags & 128) !== 0,
            v;
        if ((v = d) || (v = t !== null && t.memoizedState === null ? !1 : (Qt.current & 2) !== 0), v && (u = !0, n.flags &= -129), v = (n.flags & 32) !== 0, n.flags &= -33, t === null) {
            if (Tt) {
                if (u ? li(n) : ui(), (t = Pt) ? (t = eg(t, Je), t = t !== null && t.data !== "&" ? t : null, t !== null && (n.memoizedState = {
                        dehydrated: t,
                        treeContext: ei !== null ? {
                            id: yn,
                            overflow: gn
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, s = Rm(t), s.return = n, n.child = s, fe = n, Pt = null)) : t = null, t === null) throw ii(n);
                return pf(t) ? n.lanes = 32 : n.lanes = 536870912, null
            }
            var x = o.children;
            return o = o.fallback, u ? (ui(), u = n.mode, x = Uo({
                mode: "hidden",
                children: x
            }, u), o = Xi(o, u, s, null), x.return = n, o.return = n, x.sibling = o, n.child = x, o = n.child, o.memoizedState = Oc(s), o.childLanes = Lc(t, v, s), n.memoizedState = Dc, Ws(null, o)) : (li(n), Nc(n, x))
        }
        var M = t.memoizedState;
        if (M !== null && (x = M.dehydrated, x !== null)) {
            if (d) n.flags & 256 ? (li(n), n.flags &= -257, n = zc(t, n, s)) : n.memoizedState !== null ? (ui(), n.child = t.child, n.flags |= 128, n = null) : (ui(), x = o.fallback, u = n.mode, o = Uo({
                mode: "visible",
                children: o.children
            }, u), x = Xi(x, u, s, null), x.flags |= 2, o.return = n, x.return = n, o.sibling = x, n.child = o, $i(n, t.child, null, s), o = n.child, o.memoizedState = Oc(s), o.childLanes = Lc(t, v, s), n.memoizedState = Dc, n = Ws(null, o));
            else if (li(n), pf(x)) {
                if (v = x.nextSibling && x.nextSibling.dataset, v) var V = v.dgst;
                v = V, o = Error(r(419)), o.stack = "", o.digest = v, Hs({
                    value: o,
                    source: null,
                    stack: null
                }), n = zc(t, n, s)
            } else if ($t || Ua(t, n, s, !1), v = (s & t.childLanes) !== 0, $t || v) {
                if (v = jt, v !== null && (o = Nh(v, s), o !== 0 && o !== M.retryLane)) throw M.retryLane = o, Gi(t, o), De(v, t, o), Mc;
                mf(x) || Fo(), n = zc(t, n, s)
            } else mf(x) ? (n.flags |= 192, n.child = t.child, n = null) : (t = M.treeContext, Pt = $e(x.nextSibling), fe = n, Tt = !0, ni = null, Je = !1, t !== null && Cm(n, t), n = Nc(n, o.children), n.flags |= 4096);
            return n
        }
        return u ? (ui(), x = o.fallback, u = n.mode, M = t.child, V = M.sibling, o = Ln(M, {
            mode: "hidden",
            children: o.children
        }), o.subtreeFlags = M.subtreeFlags & 65011712, V !== null ? x = Ln(V, x) : (x = Xi(x, u, s, null), x.flags |= 2), x.return = n, o.return = n, o.sibling = x, n.child = o, Ws(null, o), o = n.child, x = t.child.memoizedState, x === null ? x = Oc(s) : (u = x.cachePool, u !== null ? (M = Jt._currentValue, u = u.parent !== M ? {
            parent: M,
            pool: M
        } : u) : u = jm(), x = {
            baseLanes: x.baseLanes | s,
            cachePool: u
        }), o.memoizedState = x, o.childLanes = Lc(t, v, s), n.memoizedState = Dc, Ws(t.child, o)) : (li(n), s = t.child, t = s.sibling, s = Ln(s, {
            mode: "visible",
            children: o.children
        }), s.return = n, s.sibling = null, t !== null && (v = n.deletions, v === null ? (n.deletions = [t], n.flags |= 16) : v.push(t)), n.child = s, n.memoizedState = null, s)
    }

    function Nc(t, n) {
        return n = Uo({
            mode: "visible",
            children: n
        }, t.mode), n.return = t, t.child = n
    }

    function Uo(t, n) {
        return t = Ve(22, t, null, n), t.lanes = 0, t
    }

    function zc(t, n, s) {
        return $i(n, t.child, null, s), t = Nc(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t
    }

    function Qp(t, n, s) {
        t.lanes |= n;
        var o = t.alternate;
        o !== null && (o.lanes |= n), Zu(t.return, n, s)
    }

    function jc(t, n, s, o, u, d) {
        var v = t.memoizedState;
        v === null ? t.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: s,
            tailMode: u,
            treeForkCount: d
        } : (v.isBackwards = n, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = s, v.tailMode = u, v.treeForkCount = d)
    }

    function Zp(t, n, s) {
        var o = n.pendingProps,
            u = o.revealOrder,
            d = o.tail;
        o = o.children;
        var v = Qt.current,
            x = (v & 2) !== 0;
        if (x ? (v = v & 1 | 2, n.flags |= 128) : v &= 1, tt(Qt, v), he(t, n, o, s), o = Tt ? Ps : 0, !x && t !== null && (t.flags & 128) !== 0) t: for (t = n.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && Qp(t, s, n);
            else if (t.tag === 19) Qp(t, s, n);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === n) break t;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === n) break t;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        switch (u) {
            case "forwards":
                for (s = n.child, u = null; s !== null;) t = s.alternate, t !== null && Ro(t) === null && (u = s), s = s.sibling;
                s = u, s === null ? (u = n.child, n.child = null) : (u = s.sibling, s.sibling = null), jc(n, !1, u, s, d, o);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (s = null, u = n.child, n.child = null; u !== null;) {
                    if (t = u.alternate, t !== null && Ro(t) === null) {
                        n.child = u;
                        break
                    }
                    t = u.sibling, u.sibling = s, s = u, u = t
                }
                jc(n, !0, s, null, d, o);
                break;
            case "together":
                jc(n, !1, null, null, void 0, o);
                break;
            default:
                n.memoizedState = null
        }
        return n.child
    }

    function Un(t, n, s) {
        if (t !== null && (n.dependencies = t.dependencies), di |= n.lanes, (s & n.childLanes) === 0)
            if (t !== null) {
                if (Ua(t, n, s, !1), (s & n.childLanes) === 0) return null
            } else return null;
        if (t !== null && n.child !== t.child) throw Error(r(153));
        if (n.child !== null) {
            for (t = n.child, s = Ln(t, t.pendingProps), n.child = s, s.return = n; t.sibling !== null;) t = t.sibling, s = s.sibling = Ln(t, t.pendingProps), s.return = n;
            s.sibling = null
        }
        return n.child
    }

    function Bc(t, n) {
        return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && vo(t)))
    }

    function lT(t, n, s) {
        switch (n.tag) {
            case 3:
                Ft(n, n.stateNode.containerInfo), ai(n, Jt, t.memoizedState.cache), Fi();
                break;
            case 27:
            case 5:
                Rn(n);
                break;
            case 4:
                Ft(n, n.stateNode.containerInfo);
                break;
            case 10:
                ai(n, n.type, n.memoizedProps.value);
                break;
            case 31:
                if (n.memoizedState !== null) return n.flags |= 128, oc(n), null;
                break;
            case 13:
                var o = n.memoizedState;
                if (o !== null) return o.dehydrated !== null ? (li(n), n.flags |= 128, null) : (s & n.child.childLanes) !== 0 ? Fp(t, n, s) : (li(n), t = Un(t, n, s), t !== null ? t.sibling : null);
                li(n);
                break;
            case 19:
                var u = (t.flags & 128) !== 0;
                if (o = (s & n.childLanes) !== 0, o || (Ua(t, n, s, !1), o = (s & n.childLanes) !== 0), u) {
                    if (o) return Zp(t, n, s);
                    n.flags |= 128
                }
                if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), tt(Qt, Qt.current), o) break;
                return null;
            case 22:
                return n.lanes = 0, kp(t, n, s, n.pendingProps);
            case 24:
                ai(n, Jt, t.memoizedState.cache)
        }
        return Un(t, n, s)
    }

    function Ip(t, n, s) {
        if (t !== null)
            if (t.memoizedProps !== n.pendingProps) $t = !0;
            else {
                if (!Bc(t, s) && (n.flags & 128) === 0) return $t = !1, lT(t, n, s);
                $t = (t.flags & 131072) !== 0
            }
        else $t = !1, Tt && (n.flags & 1048576) !== 0 && Mm(n, Ps, n.index);
        switch (n.lanes = 0, n.tag) {
            case 16:
                t: {
                    var o = n.pendingProps;
                    if (t = Ji(n.elementType), n.type = t, typeof t == "function") ku(t) ? (o = ea(t, o), n.tag = 1, n = Gp(null, n, t, o, s)) : (n.tag = 0, n = Cc(null, n, t, o, s));
                    else {
                        if (t != null) {
                            var u = t.$$typeof;
                            if (u === O) {
                                n.tag = 11, n = Up(null, n, t, o, s);
                                break t
                            } else if (u === q) {
                                n.tag = 14, n = Pp(null, n, t, o, s);
                                break t
                            }
                        }
                        throw n = Et(t) || t, Error(r(306, n, ""))
                    }
                }
                return n;
            case 0:
                return Cc(t, n, n.type, n.pendingProps, s);
            case 1:
                return o = n.type, u = ea(o, n.pendingProps), Gp(t, n, o, u, s);
            case 3:
                t: {
                    if (Ft(n, n.stateNode.containerInfo), t === null) throw Error(r(387));o = n.pendingProps;
                    var d = n.memoizedState;u = d.element,
                    nc(t, n),
                    Fs(n, o, null, s);
                    var v = n.memoizedState;
                    if (o = v.cache, ai(n, Jt, o), o !== d.cache && Iu(n, [Jt], s, !0), Xs(), o = v.element, d.isDehydrated)
                        if (d = {
                                element: o,
                                isDehydrated: !1,
                                cache: v.cache
                            }, n.updateQueue.baseState = d, n.memoizedState = d, n.flags & 256) {
                            n = Xp(t, n, o, s);
                            break t
                        } else if (o !== u) {
                        u = Qe(Error(r(424)), n), Hs(u), n = Xp(t, n, o, s);
                        break t
                    } else
                        for (t = n.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Pt = $e(t.firstChild), fe = n, Tt = !0, ni = null, Je = !0, s = km(n, null, o, s), n.child = s; s;) s.flags = s.flags & -3 | 4096, s = s.sibling;
                    else {
                        if (Fi(), o === u) {
                            n = Un(t, n, s);
                            break t
                        }
                        he(t, n, o, s)
                    }
                    n = n.child
                }
                return n;
            case 26:
                return Vo(t, n), t === null ? (s = og(n.type, null, n.pendingProps, null)) ? n.memoizedState = s : Tt || (s = n.type, t = n.pendingProps, o = tl(pt.current).createElement(s), o[ce] = n, o[Ae] = t, me(o, s, t), re(o), n.stateNode = o) : n.memoizedState = og(n.type, t.memoizedProps, n.pendingProps, t.memoizedState), null;
            case 27:
                return Rn(n), t === null && Tt && (o = n.stateNode = ag(n.type, n.pendingProps, pt.current), fe = n, Je = !0, u = Pt, gi(n.type) ? (yf = u, Pt = $e(o.firstChild)) : Pt = u), he(t, n, n.pendingProps.children, s), Vo(t, n), t === null && (n.flags |= 4194304), n.child;
            case 5:
                return t === null && Tt && ((u = o = Pt) && (o = UT(o, n.type, n.pendingProps, Je), o !== null ? (n.stateNode = o, fe = n, Pt = $e(o.firstChild), Je = !1, u = !0) : u = !1), u || ii(n)), Rn(n), u = n.type, d = n.pendingProps, v = t !== null ? t.memoizedProps : null, o = d.children, ff(u, d) ? o = null : v !== null && ff(u, v) && (n.flags |= 32), n.memoizedState !== null && (u = uc(t, n, $x, null, null, s), hr._currentValue = u), Vo(t, n), he(t, n, o, s), n.child;
            case 6:
                return t === null && Tt && ((t = s = Pt) && (s = PT(s, n.pendingProps, Je), s !== null ? (n.stateNode = s, fe = n, Pt = null, t = !0) : t = !1), t || ii(n)), null;
            case 13:
                return Fp(t, n, s);
            case 4:
                return Ft(n, n.stateNode.containerInfo), o = n.pendingProps, t === null ? n.child = $i(n, null, o, s) : he(t, n, o, s), n.child;
            case 11:
                return Up(t, n, n.type, n.pendingProps, s);
            case 7:
                return he(t, n, n.pendingProps, s), n.child;
            case 8:
                return he(t, n, n.pendingProps.children, s), n.child;
            case 12:
                return he(t, n, n.pendingProps.children, s), n.child;
            case 10:
                return o = n.pendingProps, ai(n, n.type, o.value), he(t, n, o.children, s), n.child;
            case 9:
                return u = n.type._context, o = n.pendingProps.children, Zi(n), u = de(u), o = o(u), n.flags |= 1, he(t, n, o, s), n.child;
            case 14:
                return Pp(t, n, n.type, n.pendingProps, s);
            case 15:
                return Hp(t, n, n.type, n.pendingProps, s);
            case 19:
                return Zp(t, n, s);
            case 31:
                return oT(t, n, s);
            case 22:
                return kp(t, n, s, n.pendingProps);
            case 24:
                return Zi(n), o = de(Jt), t === null ? (u = $u(), u === null && (u = jt, d = Ju(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= s), u = d), n.memoizedState = {
                    parent: o,
                    cache: u
                }, ec(n), ai(n, Jt, u)) : ((t.lanes & s) !== 0 && (nc(t, n), Fs(n, null, null, s), Xs()), u = t.memoizedState, d = n.memoizedState, u.parent !== o ? (u = {
                    parent: o,
                    cache: o
                }, n.memoizedState = u, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u), ai(n, Jt, o)) : (o = d.cache, ai(n, Jt, o), o !== u.cache && Iu(n, [Jt], s, !0))), he(t, n, n.pendingProps.children, s), n.child;
            case 29:
                throw n.pendingProps
        }
        throw Error(r(156, n.tag))
    }

    function Pn(t) {
        t.flags |= 4
    }

    function Vc(t, n, s, o, u) {
        if ((n = (t.mode & 32) !== 0) && (n = !1), n) {
            if (t.flags |= 16777216, (u & 335544128) === u)
                if (t.stateNode.complete) t.flags |= 8192;
                else if (Ey()) t.flags |= 8192;
            else throw Wi = To, tc
        } else t.flags &= -16777217
    }

    function Jp(t, n) {
        if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !dg(n))
            if (Ey()) t.flags |= 8192;
            else throw Wi = To, tc
    }

    function Po(t, n) {
        n !== null && (t.flags |= 4), t.flags & 16384 && (n = t.tag !== 22 ? Dh() : 536870912, t.lanes |= n, Ia |= n)
    }

    function $s(t, n) {
        if (!Tt) switch (t.tailMode) {
            case "hidden":
                n = t.tail;
                for (var s = null; n !== null;) n.alternate !== null && (s = n), n = n.sibling;
                s === null ? t.tail = null : s.sibling = null;
                break;
            case "collapsed":
                s = t.tail;
                for (var o = null; s !== null;) s.alternate !== null && (o = s), s = s.sibling;
                o === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : o.sibling = null
        }
    }

    function Ht(t) {
        var n = t.alternate !== null && t.alternate.child === t.child,
            s = 0,
            o = 0;
        if (n)
            for (var u = t.child; u !== null;) s |= u.lanes | u.childLanes, o |= u.subtreeFlags & 65011712, o |= u.flags & 65011712, u.return = t, u = u.sibling;
        else
            for (u = t.child; u !== null;) s |= u.lanes | u.childLanes, o |= u.subtreeFlags, o |= u.flags, u.return = t, u = u.sibling;
        return t.subtreeFlags |= o, t.childLanes = s, n
    }

    function uT(t, n, s) {
        var o = n.pendingProps;
        switch (Gu(n), n.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ht(n), null;
            case 1:
                return Ht(n), null;
            case 3:
                return s = n.stateNode, o = null, t !== null && (o = t.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), jn(Jt), zt(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (t === null || t.child === null) && (Va(n) ? Pn(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Fu())), Ht(n), null;
            case 26:
                var u = n.type,
                    d = n.memoizedState;
                return t === null ? (Pn(n), d !== null ? (Ht(n), Jp(n, d)) : (Ht(n), Vc(n, u, null, o, s))) : d ? d !== t.memoizedState ? (Pn(n), Ht(n), Jp(n, d)) : (Ht(n), n.flags &= -16777217) : (t = t.memoizedProps, t !== o && Pn(n), Ht(n), Vc(n, u, t, o, s)), null;
            case 27:
                if (_n(n), s = pt.current, u = n.type, t !== null && n.stateNode != null) t.memoizedProps !== o && Pn(n);
                else {
                    if (!o) {
                        if (n.stateNode === null) throw Error(r(166));
                        return Ht(n), null
                    }
                    t = nt.current, Va(n) ? Dm(n) : (t = ag(u, o, s), n.stateNode = t, Pn(n))
                }
                return Ht(n), null;
            case 5:
                if (_n(n), u = n.type, t !== null && n.stateNode != null) t.memoizedProps !== o && Pn(n);
                else {
                    if (!o) {
                        if (n.stateNode === null) throw Error(r(166));
                        return Ht(n), null
                    }
                    if (d = nt.current, Va(n)) Dm(n);
                    else {
                        var v = tl(pt.current);
                        switch (d) {
                            case 1:
                                d = v.createElementNS("http://www.w3.org/2000/svg", u);
                                break;
                            case 2:
                                d = v.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                break;
                            default:
                                switch (u) {
                                    case "svg":
                                        d = v.createElementNS("http://www.w3.org/2000/svg", u);
                                        break;
                                    case "math":
                                        d = v.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                        break;
                                    case "script":
                                        d = v.createElement("div"), d.innerHTML = "<script><\/script>", d = d.removeChild(d.firstChild);
                                        break;
                                    case "select":
                                        d = typeof o.is == "string" ? v.createElement("select", {
                                            is: o.is
                                        }) : v.createElement("select"), o.multiple ? d.multiple = !0 : o.size && (d.size = o.size);
                                        break;
                                    default:
                                        d = typeof o.is == "string" ? v.createElement(u, {
                                            is: o.is
                                        }) : v.createElement(u)
                                }
                        }
                        d[ce] = n, d[Ae] = o;
                        t: for (v = n.child; v !== null;) {
                            if (v.tag === 5 || v.tag === 6) d.appendChild(v.stateNode);
                            else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                                v.child.return = v, v = v.child;
                                continue
                            }
                            if (v === n) break t;
                            for (; v.sibling === null;) {
                                if (v.return === null || v.return === n) break t;
                                v = v.return
                            }
                            v.sibling.return = v.return, v = v.sibling
                        }
                        n.stateNode = d;
                        t: switch (me(d, u, o), u) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                o = !!o.autoFocus;
                                break t;
                            case "img":
                                o = !0;
                                break t;
                            default:
                                o = !1
                        }
                        o && Pn(n)
                    }
                }
                return Ht(n), Vc(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, s), null;
            case 6:
                if (t && n.stateNode != null) t.memoizedProps !== o && Pn(n);
                else {
                    if (typeof o != "string" && n.stateNode === null) throw Error(r(166));
                    if (t = pt.current, Va(n)) {
                        if (t = n.stateNode, s = n.memoizedProps, o = null, u = fe, u !== null) switch (u.tag) {
                            case 27:
                            case 5:
                                o = u.memoizedProps
                        }
                        t[ce] = n, t = !!(t.nodeValue === s || o !== null && o.suppressHydrationWarning === !0 || Fy(t.nodeValue, s)), t || ii(n, !0)
                    } else t = tl(t).createTextNode(o), t[ce] = n, n.stateNode = t
                }
                return Ht(n), null;
            case 31:
                if (s = n.memoizedState, t === null || t.memoizedState !== null) {
                    if (o = Va(n), s !== null) {
                        if (t === null) {
                            if (!o) throw Error(r(318));
                            if (t = n.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
                            t[ce] = n
                        } else Fi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                        Ht(n), t = !1
                    } else s = Fu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), t = !0;
                    if (!t) return n.flags & 256 ? (Pe(n), n) : (Pe(n), null);
                    if ((n.flags & 128) !== 0) throw Error(r(558))
                }
                return Ht(n), null;
            case 13:
                if (o = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (u = Va(n), o !== null && o.dehydrated !== null) {
                        if (t === null) {
                            if (!u) throw Error(r(318));
                            if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
                            u[ce] = n
                        } else Fi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                        Ht(n), u = !1
                    } else u = Fu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
                    if (!u) return n.flags & 256 ? (Pe(n), n) : (Pe(n), null)
                }
                return Pe(n), (n.flags & 128) !== 0 ? (n.lanes = s, n) : (s = o !== null, t = t !== null && t.memoizedState !== null, s && (o = n.child, u = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (u = o.alternate.memoizedState.cachePool.pool), d = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (d = o.memoizedState.cachePool.pool), d !== u && (o.flags |= 2048)), s !== t && s && (n.child.flags |= 8192), Po(n, n.updateQueue), Ht(n), null);
            case 4:
                return zt(), t === null && rf(n.stateNode.containerInfo), Ht(n), null;
            case 10:
                return jn(n.type), Ht(n), null;
            case 19:
                if (X(Qt), o = n.memoizedState, o === null) return Ht(n), null;
                if (u = (n.flags & 128) !== 0, d = o.rendering, d === null)
                    if (u) $s(o, !1);
                    else {
                        if (Gt !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = n.child; t !== null;) {
                                if (d = Ro(t), d !== null) {
                                    for (n.flags |= 128, $s(o, !1), t = d.updateQueue, n.updateQueue = t, Po(n, t), n.subtreeFlags = 0, t = s, s = n.child; s !== null;) wm(s, t), s = s.sibling;
                                    return tt(Qt, Qt.current & 1 | 2), Tt && Nn(n, o.treeForkCount), n.child
                                }
                                t = t.sibling
                            }
                        o.tail !== null && ve() > Yo && (n.flags |= 128, u = !0, $s(o, !1), n.lanes = 4194304)
                    }
                else {
                    if (!u)
                        if (t = Ro(d), t !== null) {
                            if (n.flags |= 128, u = !0, t = t.updateQueue, n.updateQueue = t, Po(n, t), $s(o, !0), o.tail === null && o.tailMode === "hidden" && !d.alternate && !Tt) return Ht(n), null
                        } else 2 * ve() - o.renderingStartTime > Yo && s !== 536870912 && (n.flags |= 128, u = !0, $s(o, !1), n.lanes = 4194304);
                    o.isBackwards ? (d.sibling = n.child, n.child = d) : (t = o.last, t !== null ? t.sibling = d : n.child = d, o.last = d)
                }
                return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ve(), t.sibling = null, s = Qt.current, tt(Qt, u ? s & 1 | 2 : s & 1), Tt && Nn(n, o.treeForkCount), t) : (Ht(n), null);
            case 22:
            case 23:
                return Pe(n), rc(), o = n.memoizedState !== null, t !== null ? t.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (s & 536870912) !== 0 && (n.flags & 128) === 0 && (Ht(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ht(n), s = n.updateQueue, s !== null && Po(n, s.retryQueue), s = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== s && (n.flags |= 2048), t !== null && X(Ii), null;
            case 24:
                return s = null, t !== null && (s = t.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048), jn(Jt), Ht(n), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(r(156, n.tag))
    }

    function cT(t, n) {
        switch (Gu(n), n.tag) {
            case 1:
                return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
            case 3:
                return jn(Jt), zt(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
            case 26:
            case 27:
            case 5:
                return _n(n), null;
            case 31:
                if (n.memoizedState !== null) {
                    if (Pe(n), n.alternate === null) throw Error(r(340));
                    Fi()
                }
                return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
            case 13:
                if (Pe(n), t = n.memoizedState, t !== null && t.dehydrated !== null) {
                    if (n.alternate === null) throw Error(r(340));
                    Fi()
                }
                return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
            case 19:
                return X(Qt), null;
            case 4:
                return zt(), null;
            case 10:
                return jn(n.type), null;
            case 22:
            case 23:
                return Pe(n), rc(), t !== null && X(Ii), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
            case 24:
                return jn(Jt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Wp(t, n) {
        switch (Gu(n), n.tag) {
            case 3:
                jn(Jt), zt();
                break;
            case 26:
            case 27:
            case 5:
                _n(n);
                break;
            case 4:
                zt();
                break;
            case 31:
                n.memoizedState !== null && Pe(n);
                break;
            case 13:
                Pe(n);
                break;
            case 19:
                X(Qt);
                break;
            case 10:
                jn(n.type);
                break;
            case 22:
            case 23:
                Pe(n), rc(), t !== null && X(Ii);
                break;
            case 24:
                jn(Jt)
        }
    }

    function tr(t, n) {
        try {
            var s = n.updateQueue,
                o = s !== null ? s.lastEffect : null;
            if (o !== null) {
                var u = o.next;
                s = u;
                do {
                    if ((s.tag & t) === t) {
                        o = void 0;
                        var d = s.create,
                            v = s.inst;
                        o = d(), v.destroy = o
                    }
                    s = s.next
                } while (s !== u)
            }
        } catch (x) {
            Dt(n, n.return, x)
        }
    }

    function ci(t, n, s) {
        try {
            var o = n.updateQueue,
                u = o !== null ? o.lastEffect : null;
            if (u !== null) {
                var d = u.next;
                o = d;
                do {
                    if ((o.tag & t) === t) {
                        var v = o.inst,
                            x = v.destroy;
                        if (x !== void 0) {
                            v.destroy = void 0, u = n;
                            var M = s,
                                V = x;
                            try {
                                V()
                            } catch (Y) {
                                Dt(u, M, Y)
                            }
                        }
                    }
                    o = o.next
                } while (o !== d)
            }
        } catch (Y) {
            Dt(n, n.return, Y)
        }
    }

    function $p(t) {
        var n = t.updateQueue;
        if (n !== null) {
            var s = t.stateNode;
            try {
                Km(n, s)
            } catch (o) {
                Dt(t, t.return, o)
            }
        }
    }

    function ty(t, n, s) {
        s.props = ea(t.type, t.memoizedProps), s.state = t.memoizedState;
        try {
            s.componentWillUnmount()
        } catch (o) {
            Dt(t, n, o)
        }
    }

    function er(t, n) {
        try {
            var s = t.ref;
            if (s !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var o = t.stateNode;
                        break;
                    case 30:
                        o = t.stateNode;
                        break;
                    default:
                        o = t.stateNode
                }
                typeof s == "function" ? t.refCleanup = s(o) : s.current = o
            }
        } catch (u) {
            Dt(t, n, u)
        }
    }

    function vn(t, n) {
        var s = t.ref,
            o = t.refCleanup;
        if (s !== null)
            if (typeof o == "function") try {
                o()
            } catch (u) {
                Dt(t, n, u)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof s == "function") try {
                s(null)
            } catch (u) {
                Dt(t, n, u)
            } else s.current = null
    }

    function ey(t) {
        var n = t.type,
            s = t.memoizedProps,
            o = t.stateNode;
        try {
            t: switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    s.autoFocus && o.focus();
                    break t;
                case "img":
                    s.src ? o.src = s.src : s.srcSet && (o.srcset = s.srcSet)
            }
        }
        catch (u) {
            Dt(t, t.return, u)
        }
    }

    function Uc(t, n, s) {
        try {
            var o = t.stateNode;
            LT(o, t.type, s, n), o[Ae] = n
        } catch (u) {
            Dt(t, t.return, u)
        }
    }

    function ny(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && gi(t.type) || t.tag === 4
    }

    function Pc(t) {
        t: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || ny(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && gi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function Hc(t, n, s) {
        var o = t.tag;
        if (o === 5 || o === 6) t = t.stateNode, n ? (s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body : s).insertBefore(t, n) : (n = s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body : s, n.appendChild(t), s = s._reactRootContainer, s != null || n.onclick !== null || (n.onclick = Dn));
        else if (o !== 4 && (o === 27 && gi(t.type) && (s = t.stateNode, n = null), t = t.child, t !== null))
            for (Hc(t, n, s), t = t.sibling; t !== null;) Hc(t, n, s), t = t.sibling
    }

    function Ho(t, n, s) {
        var o = t.tag;
        if (o === 5 || o === 6) t = t.stateNode, n ? s.insertBefore(t, n) : s.appendChild(t);
        else if (o !== 4 && (o === 27 && gi(t.type) && (s = t.stateNode), t = t.child, t !== null))
            for (Ho(t, n, s), t = t.sibling; t !== null;) Ho(t, n, s), t = t.sibling
    }

    function iy(t) {
        var n = t.stateNode,
            s = t.memoizedProps;
        try {
            for (var o = t.type, u = n.attributes; u.length;) n.removeAttributeNode(u[0]);
            me(n, o, s), n[ce] = t, n[Ae] = s
        } catch (d) {
            Dt(t, t.return, d)
        }
    }
    var Hn = !1,
        te = !1,
        kc = !1,
        ay = typeof WeakSet == "function" ? WeakSet : Set,
        oe = null;

    function fT(t, n) {
        if (t = t.containerInfo, uf = ol, t = ym(t), zu(t)) {
            if ("selectionStart" in t) var s = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else t: {
                s = (s = t.ownerDocument) && s.defaultView || window;
                var o = s.getSelection && s.getSelection();
                if (o && o.rangeCount !== 0) {
                    s = o.anchorNode;
                    var u = o.anchorOffset,
                        d = o.focusNode;
                    o = o.focusOffset;
                    try {
                        s.nodeType, d.nodeType
                    } catch {
                        s = null;
                        break t
                    }
                    var v = 0,
                        x = -1,
                        M = -1,
                        V = 0,
                        Y = 0,
                        Q = t,
                        U = null;
                    e: for (;;) {
                        for (var H; Q !== s || u !== 0 && Q.nodeType !== 3 || (x = v + u), Q !== d || o !== 0 && Q.nodeType !== 3 || (M = v + o), Q.nodeType === 3 && (v += Q.nodeValue.length), (H = Q.firstChild) !== null;) U = Q, Q = H;
                        for (;;) {
                            if (Q === t) break e;
                            if (U === s && ++V === u && (x = v), U === d && ++Y === o && (M = v), (H = Q.nextSibling) !== null) break;
                            Q = U, U = Q.parentNode
                        }
                        Q = H
                    }
                    s = x === -1 || M === -1 ? null : {
                        start: x,
                        end: M
                    }
                } else s = null
            }
            s = s || {
                start: 0,
                end: 0
            }
        } else s = null;
        for (cf = {
                focusedElem: t,
                selectionRange: s
            }, ol = !1, oe = n; oe !== null;)
            if (n = oe, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null) t.return = n, oe = t;
            else
                for (; oe !== null;) {
                    switch (n = oe, d = n.alternate, t = n.flags, n.tag) {
                        case 0:
                            if ((t & 4) !== 0 && (t = n.updateQueue, t = t !== null ? t.events : null, t !== null))
                                for (s = 0; s < t.length; s++) u = t[s], u.ref.impl = u.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && d !== null) {
                                t = void 0, s = n, u = d.memoizedProps, d = d.memoizedState, o = s.stateNode;
                                try {
                                    var it = ea(s.type, u);
                                    t = o.getSnapshotBeforeUpdate(it, d), o.__reactInternalSnapshotBeforeUpdate = t
                                } catch (ut) {
                                    Dt(s, s.return, ut)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = n.stateNode.containerInfo, s = t.nodeType, s === 9) hf(t);
                                else if (s === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        hf(t);
                                        break;
                                    default:
                                        t.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(r(163))
                    }
                    if (t = n.sibling, t !== null) {
                        t.return = n.return, oe = t;
                        break
                    }
                    oe = n.return
                }
    }

    function sy(t, n, s) {
        var o = s.flags;
        switch (s.tag) {
            case 0:
            case 11:
            case 15:
                qn(t, s), o & 4 && tr(5, s);
                break;
            case 1:
                if (qn(t, s), o & 4)
                    if (t = s.stateNode, n === null) try {
                        t.componentDidMount()
                    } catch (v) {
                        Dt(s, s.return, v)
                    } else {
                        var u = ea(s.type, n.memoizedProps);
                        n = n.memoizedState;
                        try {
                            t.componentDidUpdate(u, n, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (v) {
                            Dt(s, s.return, v)
                        }
                    }
                o & 64 && $p(s), o & 512 && er(s, s.return);
                break;
            case 3:
                if (qn(t, s), o & 64 && (t = s.updateQueue, t !== null)) {
                    if (n = null, s.child !== null) switch (s.child.tag) {
                        case 27:
                        case 5:
                            n = s.child.stateNode;
                            break;
                        case 1:
                            n = s.child.stateNode
                    }
                    try {
                        Km(t, n)
                    } catch (v) {
                        Dt(s, s.return, v)
                    }
                }
                break;
            case 27:
                n === null && o & 4 && iy(s);
            case 26:
            case 5:
                qn(t, s), n === null && o & 4 && ey(s), o & 512 && er(s, s.return);
                break;
            case 12:
                qn(t, s);
                break;
            case 31:
                qn(t, s), o & 4 && ly(t, s);
                break;
            case 13:
                qn(t, s), o & 4 && uy(t, s), o & 64 && (t = s.memoizedState, t !== null && (t = t.dehydrated, t !== null && (s = bT.bind(null, s), HT(t, s))));
                break;
            case 22:
                if (o = s.memoizedState !== null || Hn, !o) {
                    n = n !== null && n.memoizedState !== null || te, u = Hn;
                    var d = te;
                    Hn = o, (te = n) && !d ? Kn(t, s, (s.subtreeFlags & 8772) !== 0) : qn(t, s), Hn = u, te = d
                }
                break;
            case 30:
                break;
            default:
                qn(t, s)
        }
    }

    function ry(t) {
        var n = t.alternate;
        n !== null && (t.alternate = null, ry(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && gu(n)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var qt = null,
        Re = !1;

    function kn(t, n, s) {
        for (s = s.child; s !== null;) oy(t, n, s), s = s.sibling
    }

    function oy(t, n, s) {
        if (ze && typeof ze.onCommitFiberUnmount == "function") try {
            ze.onCommitFiberUnmount(ws, s)
        } catch {}
        switch (s.tag) {
            case 26:
                te || vn(s, n), kn(t, n, s), s.memoizedState ? s.memoizedState.count-- : s.stateNode && (s = s.stateNode, s.parentNode.removeChild(s));
                break;
            case 27:
                te || vn(s, n);
                var o = qt,
                    u = Re;
                gi(s.type) && (qt = s.stateNode, Re = !1), kn(t, n, s), cr(s.stateNode), qt = o, Re = u;
                break;
            case 5:
                te || vn(s, n);
            case 6:
                if (o = qt, u = Re, qt = null, kn(t, n, s), qt = o, Re = u, qt !== null)
                    if (Re) try {
                        (qt.nodeType === 9 ? qt.body : qt.nodeName === "HTML" ? qt.ownerDocument.body : qt).removeChild(s.stateNode)
                    } catch (d) {
                        Dt(s, n, d)
                    } else try {
                        qt.removeChild(s.stateNode)
                    } catch (d) {
                        Dt(s, n, d)
                    }
                break;
            case 18:
                qt !== null && (Re ? (t = qt, $y(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, s.stateNode), as(t)) : $y(qt, s.stateNode));
                break;
            case 4:
                o = qt, u = Re, qt = s.stateNode.containerInfo, Re = !0, kn(t, n, s), qt = o, Re = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ci(2, s, n), te || ci(4, s, n), kn(t, n, s);
                break;
            case 1:
                te || (vn(s, n), o = s.stateNode, typeof o.componentWillUnmount == "function" && ty(s, n, o)), kn(t, n, s);
                break;
            case 21:
                kn(t, n, s);
                break;
            case 22:
                te = (o = te) || s.memoizedState !== null, kn(t, n, s), te = o;
                break;
            default:
                kn(t, n, s)
        }
    }

    function ly(t, n) {
        if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null))) {
            t = t.dehydrated;
            try {
                as(t)
            } catch (s) {
                Dt(n, n.return, s)
            }
        }
    }

    function uy(t, n) {
        if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            as(t)
        } catch (s) {
            Dt(n, n.return, s)
        }
    }

    function dT(t) {
        switch (t.tag) {
            case 31:
            case 13:
            case 19:
                var n = t.stateNode;
                return n === null && (n = t.stateNode = new ay), n;
            case 22:
                return t = t.stateNode, n = t._retryCache, n === null && (n = t._retryCache = new ay), n;
            default:
                throw Error(r(435, t.tag))
        }
    }

    function ko(t, n) {
        var s = dT(t);
        n.forEach(function(o) {
            if (!s.has(o)) {
                s.add(o);
                var u = xT.bind(null, t, o);
                o.then(u, u)
            }
        })
    }

    function _e(t, n) {
        var s = n.deletions;
        if (s !== null)
            for (var o = 0; o < s.length; o++) {
                var u = s[o],
                    d = t,
                    v = n,
                    x = v;
                t: for (; x !== null;) {
                    switch (x.tag) {
                        case 27:
                            if (gi(x.type)) {
                                qt = x.stateNode, Re = !1;
                                break t
                            }
                            break;
                        case 5:
                            qt = x.stateNode, Re = !1;
                            break t;
                        case 3:
                        case 4:
                            qt = x.stateNode.containerInfo, Re = !0;
                            break t
                    }
                    x = x.return
                }
                if (qt === null) throw Error(r(160));
                oy(d, v, u), qt = null, Re = !1, d = u.alternate, d !== null && (d.return = null), u.return = null
            }
        if (n.subtreeFlags & 13886)
            for (n = n.child; n !== null;) cy(n, t), n = n.sibling
    }
    var un = null;

    function cy(t, n) {
        var s = t.alternate,
            o = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                _e(n, t), Me(t), o & 4 && (ci(3, t, t.return), tr(3, t), ci(5, t, t.return));
                break;
            case 1:
                _e(n, t), Me(t), o & 512 && (te || s === null || vn(s, s.return)), o & 64 && Hn && (t = t.updateQueue, t !== null && (o = t.callbacks, o !== null && (s = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = s === null ? o : s.concat(o))));
                break;
            case 26:
                var u = un;
                if (_e(n, t), Me(t), o & 512 && (te || s === null || vn(s, s.return)), o & 4) {
                    var d = s !== null ? s.memoizedState : null;
                    if (o = t.memoizedState, s === null)
                        if (o === null)
                            if (t.stateNode === null) {
                                t: {
                                    o = t.type,
                                    s = t.memoizedProps,
                                    u = u.ownerDocument || u;e: switch (o) {
                                        case "title":
                                            d = u.getElementsByTagName("title")[0], (!d || d[Ms] || d[ce] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = u.createElement(o), u.head.insertBefore(d, u.querySelector("head > title"))), me(d, o, s), d[ce] = t, re(d), o = d;
                                            break t;
                                        case "link":
                                            var v = cg("link", "href", u).get(o + (s.href || ""));
                                            if (v) {
                                                for (var x = 0; x < v.length; x++)
                                                    if (d = v[x], d.getAttribute("href") === (s.href == null || s.href === "" ? null : s.href) && d.getAttribute("rel") === (s.rel == null ? null : s.rel) && d.getAttribute("title") === (s.title == null ? null : s.title) && d.getAttribute("crossorigin") === (s.crossOrigin == null ? null : s.crossOrigin)) {
                                                        v.splice(x, 1);
                                                        break e
                                                    }
                                            }
                                            d = u.createElement(o), me(d, o, s), u.head.appendChild(d);
                                            break;
                                        case "meta":
                                            if (v = cg("meta", "content", u).get(o + (s.content || ""))) {
                                                for (x = 0; x < v.length; x++)
                                                    if (d = v[x], d.getAttribute("content") === (s.content == null ? null : "" + s.content) && d.getAttribute("name") === (s.name == null ? null : s.name) && d.getAttribute("property") === (s.property == null ? null : s.property) && d.getAttribute("http-equiv") === (s.httpEquiv == null ? null : s.httpEquiv) && d.getAttribute("charset") === (s.charSet == null ? null : s.charSet)) {
                                                        v.splice(x, 1);
                                                        break e
                                                    }
                                            }
                                            d = u.createElement(o), me(d, o, s), u.head.appendChild(d);
                                            break;
                                        default:
                                            throw Error(r(468, o))
                                    }
                                    d[ce] = t,
                                    re(d),
                                    o = d
                                }
                                t.stateNode = o
                            }
                    else fg(u, t.type, t.stateNode);
                    else t.stateNode = ug(u, o, t.memoizedProps);
                    else d !== o ? (d === null ? s.stateNode !== null && (s = s.stateNode, s.parentNode.removeChild(s)) : d.count--, o === null ? fg(u, t.type, t.stateNode) : ug(u, o, t.memoizedProps)) : o === null && t.stateNode !== null && Uc(t, t.memoizedProps, s.memoizedProps)
                }
                break;
            case 27:
                _e(n, t), Me(t), o & 512 && (te || s === null || vn(s, s.return)), s !== null && o & 4 && Uc(t, t.memoizedProps, s.memoizedProps);
                break;
            case 5:
                if (_e(n, t), Me(t), o & 512 && (te || s === null || vn(s, s.return)), t.flags & 32) {
                    u = t.stateNode;
                    try {
                        _a(u, "")
                    } catch (it) {
                        Dt(t, t.return, it)
                    }
                }
                o & 4 && t.stateNode != null && (u = t.memoizedProps, Uc(t, u, s !== null ? s.memoizedProps : u)), o & 1024 && (kc = !0);
                break;
            case 6:
                if (_e(n, t), Me(t), o & 4) {
                    if (t.stateNode === null) throw Error(r(162));
                    o = t.memoizedProps, s = t.stateNode;
                    try {
                        s.nodeValue = o
                    } catch (it) {
                        Dt(t, t.return, it)
                    }
                }
                break;
            case 3:
                if (il = null, u = un, un = el(n.containerInfo), _e(n, t), un = u, Me(t), o & 4 && s !== null && s.memoizedState.isDehydrated) try {
                    as(n.containerInfo)
                } catch (it) {
                    Dt(t, t.return, it)
                }
                kc && (kc = !1, fy(t));
                break;
            case 4:
                o = un, un = el(t.stateNode.containerInfo), _e(n, t), Me(t), un = o;
                break;
            case 12:
                _e(n, t), Me(t);
                break;
            case 31:
                _e(n, t), Me(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, ko(t, o)));
                break;
            case 13:
                _e(n, t), Me(t), t.child.flags & 8192 && t.memoizedState !== null != (s !== null && s.memoizedState !== null) && (Ko = ve()), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, ko(t, o)));
                break;
            case 22:
                u = t.memoizedState !== null;
                var M = s !== null && s.memoizedState !== null,
                    V = Hn,
                    Y = te;
                if (Hn = V || u, te = Y || M, _e(n, t), te = Y, Hn = V, Me(t), o & 8192) t: for (n = t.stateNode, n._visibility = u ? n._visibility & -2 : n._visibility | 1, u && (s === null || M || Hn || te || na(t)), s = null, n = t;;) {
                    if (n.tag === 5 || n.tag === 26) {
                        if (s === null) {
                            M = s = n;
                            try {
                                if (d = M.stateNode, u) v = d.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                                else {
                                    x = M.stateNode;
                                    var Q = M.memoizedProps.style,
                                        U = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                                    x.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim()
                                }
                            } catch (it) {
                                Dt(M, M.return, it)
                            }
                        }
                    } else if (n.tag === 6) {
                        if (s === null) {
                            M = n;
                            try {
                                M.stateNode.nodeValue = u ? "" : M.memoizedProps
                            } catch (it) {
                                Dt(M, M.return, it)
                            }
                        }
                    } else if (n.tag === 18) {
                        if (s === null) {
                            M = n;
                            try {
                                var H = M.stateNode;
                                u ? tg(H, !0) : tg(M.stateNode, !1)
                            } catch (it) {
                                Dt(M, M.return, it)
                            }
                        }
                    } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break t;
                    for (; n.sibling === null;) {
                        if (n.return === null || n.return === t) break t;
                        s === n && (s = null), n = n.return
                    }
                    s === n && (s = null), n.sibling.return = n.return, n = n.sibling
                }
                o & 4 && (o = t.updateQueue, o !== null && (s = o.retryQueue, s !== null && (o.retryQueue = null, ko(t, s))));
                break;
            case 19:
                _e(n, t), Me(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, ko(t, o)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                _e(n, t), Me(t)
        }
    }

    function Me(t) {
        var n = t.flags;
        if (n & 2) {
            try {
                for (var s, o = t.return; o !== null;) {
                    if (ny(o)) {
                        s = o;
                        break
                    }
                    o = o.return
                }
                if (s == null) throw Error(r(160));
                switch (s.tag) {
                    case 27:
                        var u = s.stateNode,
                            d = Pc(t);
                        Ho(t, d, u);
                        break;
                    case 5:
                        var v = s.stateNode;
                        s.flags & 32 && (_a(v, ""), s.flags &= -33);
                        var x = Pc(t);
                        Ho(t, x, v);
                        break;
                    case 3:
                    case 4:
                        var M = s.stateNode.containerInfo,
                            V = Pc(t);
                        Hc(t, V, M);
                        break;
                    default:
                        throw Error(r(161))
                }
            } catch (Y) {
                Dt(t, t.return, Y)
            }
            t.flags &= -3
        }
        n & 4096 && (t.flags &= -4097)
    }

    function fy(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var n = t;
                fy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), t = t.sibling
            }
    }

    function qn(t, n) {
        if (n.subtreeFlags & 8772)
            for (n = n.child; n !== null;) sy(t, n.alternate, n), n = n.sibling
    }

    function na(t) {
        for (t = t.child; t !== null;) {
            var n = t;
            switch (n.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ci(4, n, n.return), na(n);
                    break;
                case 1:
                    vn(n, n.return);
                    var s = n.stateNode;
                    typeof s.componentWillUnmount == "function" && ty(n, n.return, s), na(n);
                    break;
                case 27:
                    cr(n.stateNode);
                case 26:
                case 5:
                    vn(n, n.return), na(n);
                    break;
                case 22:
                    n.memoizedState === null && na(n);
                    break;
                case 30:
                    na(n);
                    break;
                default:
                    na(n)
            }
            t = t.sibling
        }
    }

    function Kn(t, n, s) {
        for (s = s && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
            var o = n.alternate,
                u = t,
                d = n,
                v = d.flags;
            switch (d.tag) {
                case 0:
                case 11:
                case 15:
                    Kn(u, d, s), tr(4, d);
                    break;
                case 1:
                    if (Kn(u, d, s), o = d, u = o.stateNode, typeof u.componentDidMount == "function") try {
                        u.componentDidMount()
                    } catch (V) {
                        Dt(o, o.return, V)
                    }
                    if (o = d, u = o.updateQueue, u !== null) {
                        var x = o.stateNode;
                        try {
                            var M = u.shared.hiddenCallbacks;
                            if (M !== null)
                                for (u.shared.hiddenCallbacks = null, u = 0; u < M.length; u++) qm(M[u], x)
                        } catch (V) {
                            Dt(o, o.return, V)
                        }
                    }
                    s && v & 64 && $p(d), er(d, d.return);
                    break;
                case 27:
                    iy(d);
                case 26:
                case 5:
                    Kn(u, d, s), s && o === null && v & 4 && ey(d), er(d, d.return);
                    break;
                case 12:
                    Kn(u, d, s);
                    break;
                case 31:
                    Kn(u, d, s), s && v & 4 && ly(u, d);
                    break;
                case 13:
                    Kn(u, d, s), s && v & 4 && uy(u, d);
                    break;
                case 22:
                    d.memoizedState === null && Kn(u, d, s), er(d, d.return);
                    break;
                case 30:
                    break;
                default:
                    Kn(u, d, s)
            }
            n = n.sibling
        }
    }

    function qc(t, n) {
        var s = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), t = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool), t !== s && (t != null && t.refCount++, s != null && ks(s))
    }

    function Kc(t, n) {
        t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && ks(t))
    }

    function cn(t, n, s, o) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) dy(t, n, s, o), n = n.sibling
    }

    function dy(t, n, s, o) {
        var u = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                cn(t, n, s, o), u & 2048 && tr(9, n);
                break;
            case 1:
                cn(t, n, s, o);
                break;
            case 3:
                cn(t, n, s, o), u & 2048 && (t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && ks(t)));
                break;
            case 12:
                if (u & 2048) {
                    cn(t, n, s, o), t = n.stateNode;
                    try {
                        var d = n.memoizedProps,
                            v = d.id,
                            x = d.onPostCommit;
                        typeof x == "function" && x(v, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (M) {
                        Dt(n, n.return, M)
                    }
                } else cn(t, n, s, o);
                break;
            case 31:
                cn(t, n, s, o);
                break;
            case 13:
                cn(t, n, s, o);
                break;
            case 23:
                break;
            case 22:
                d = n.stateNode, v = n.alternate, n.memoizedState !== null ? d._visibility & 2 ? cn(t, n, s, o) : nr(t, n) : d._visibility & 2 ? cn(t, n, s, o) : (d._visibility |= 2, Fa(t, n, s, o, (n.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && qc(v, n);
                break;
            case 24:
                cn(t, n, s, o), u & 2048 && Kc(n.alternate, n);
                break;
            default:
                cn(t, n, s, o)
        }
    }

    function Fa(t, n, s, o, u) {
        for (u = u && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null;) {
            var d = t,
                v = n,
                x = s,
                M = o,
                V = v.flags;
            switch (v.tag) {
                case 0:
                case 11:
                case 15:
                    Fa(d, v, x, M, u), tr(8, v);
                    break;
                case 23:
                    break;
                case 22:
                    var Y = v.stateNode;
                    v.memoizedState !== null ? Y._visibility & 2 ? Fa(d, v, x, M, u) : nr(d, v) : (Y._visibility |= 2, Fa(d, v, x, M, u)), u && V & 2048 && qc(v.alternate, v);
                    break;
                case 24:
                    Fa(d, v, x, M, u), u && V & 2048 && Kc(v.alternate, v);
                    break;
                default:
                    Fa(d, v, x, M, u)
            }
            n = n.sibling
        }
    }

    function nr(t, n) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null;) {
                var s = t,
                    o = n,
                    u = o.flags;
                switch (o.tag) {
                    case 22:
                        nr(s, o), u & 2048 && qc(o.alternate, o);
                        break;
                    case 24:
                        nr(s, o), u & 2048 && Kc(o.alternate, o);
                        break;
                    default:
                        nr(s, o)
                }
                n = n.sibling
            }
    }
    var ir = 8192;

    function Qa(t, n, s) {
        if (t.subtreeFlags & ir)
            for (t = t.child; t !== null;) hy(t, n, s), t = t.sibling
    }

    function hy(t, n, s) {
        switch (t.tag) {
            case 26:
                Qa(t, n, s), t.flags & ir && t.memoizedState !== null && WT(s, un, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                Qa(t, n, s);
                break;
            case 3:
            case 4:
                var o = un;
                un = el(t.stateNode.containerInfo), Qa(t, n, s), un = o;
                break;
            case 22:
                t.memoizedState === null && (o = t.alternate, o !== null && o.memoizedState !== null ? (o = ir, ir = 16777216, Qa(t, n, s), ir = o) : Qa(t, n, s));
                break;
            default:
                Qa(t, n, s)
        }
    }

    function my(t) {
        var n = t.alternate;
        if (n !== null && (t = n.child, t !== null)) {
            n.child = null;
            do n = t.sibling, t.sibling = null, t = n; while (t !== null)
        }
    }

    function ar(t) {
        var n = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (n !== null)
                for (var s = 0; s < n.length; s++) {
                    var o = n[s];
                    oe = o, yy(o, t)
                }
            my(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) py(t), t = t.sibling
    }

    function py(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                ar(t), t.flags & 2048 && ci(9, t, t.return);
                break;
            case 3:
                ar(t);
                break;
            case 12:
                ar(t);
                break;
            case 22:
                var n = t.stateNode;
                t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3, qo(t)) : ar(t);
                break;
            default:
                ar(t)
        }
    }

    function qo(t) {
        var n = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (n !== null)
                for (var s = 0; s < n.length; s++) {
                    var o = n[s];
                    oe = o, yy(o, t)
                }
            my(t)
        }
        for (t = t.child; t !== null;) {
            switch (n = t, n.tag) {
                case 0:
                case 11:
                case 15:
                    ci(8, n, n.return), qo(n);
                    break;
                case 22:
                    s = n.stateNode, s._visibility & 2 && (s._visibility &= -3, qo(n));
                    break;
                default:
                    qo(n)
            }
            t = t.sibling
        }
    }

    function yy(t, n) {
        for (; oe !== null;) {
            var s = oe;
            switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    ci(8, s, n);
                    break;
                case 23:
                case 22:
                    if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
                        var o = s.memoizedState.cachePool.pool;
                        o != null && o.refCount++
                    }
                    break;
                case 24:
                    ks(s.memoizedState.cache)
            }
            if (o = s.child, o !== null) o.return = s, oe = o;
            else t: for (s = t; oe !== null;) {
                o = oe;
                var u = o.sibling,
                    d = o.return;
                if (ry(o), o === s) {
                    oe = null;
                    break t
                }
                if (u !== null) {
                    u.return = d, oe = u;
                    break t
                }
                oe = d
            }
        }
    }
    var hT = {
            getCacheForType: function(t) {
                var n = de(Jt),
                    s = n.data.get(t);
                return s === void 0 && (s = t(), n.data.set(t, s)), s
            },
            cacheSignal: function() {
                return de(Jt).controller.signal
            }
        },
        mT = typeof WeakMap == "function" ? WeakMap : Map,
        Mt = 0,
        jt = null,
        vt = null,
        bt = 0,
        Ct = 0,
        He = null,
        fi = !1,
        Za = !1,
        Yc = !1,
        Yn = 0,
        Gt = 0,
        di = 0,
        ia = 0,
        Gc = 0,
        ke = 0,
        Ia = 0,
        sr = null,
        Ce = null,
        Xc = !1,
        Ko = 0,
        gy = 0,
        Yo = 1 / 0,
        Go = null,
        hi = null,
        ne = 0,
        mi = null,
        Ja = null,
        Gn = 0,
        Fc = 0,
        Qc = null,
        vy = null,
        rr = 0,
        Zc = null;

    function qe() {
        return (Mt & 2) !== 0 && bt !== 0 ? bt & -bt : P.T !== null ? ef() : zh()
    }

    function Sy() {
        if (ke === 0)
            if ((bt & 536870912) === 0 || Tt) {
                var t = Wr;
                Wr <<= 1, (Wr & 3932160) === 0 && (Wr = 262144), ke = t
            } else ke = 536870912;
        return t = Ue.current, t !== null && (t.flags |= 32), ke
    }

    function De(t, n, s) {
        (t === jt && (Ct === 2 || Ct === 9) || t.cancelPendingCommit !== null) && (Wa(t, 0), pi(t, bt, ke, !1)), _s(t, s), ((Mt & 2) === 0 || t !== jt) && (t === jt && ((Mt & 2) === 0 && (ia |= s), Gt === 4 && pi(t, bt, ke, !1)), Sn(t))
    }

    function by(t, n, s) {
        if ((Mt & 6) !== 0) throw Error(r(327));
        var o = !s && (n & 127) === 0 && (n & t.expiredLanes) === 0 || Rs(t, n),
            u = o ? gT(t, n) : Jc(t, n, !0),
            d = o;
        do {
            if (u === 0) {
                Za && !o && pi(t, n, 0, !1);
                break
            } else {
                if (s = t.current.alternate, d && !pT(s)) {
                    u = Jc(t, n, !1), d = !1;
                    continue
                }
                if (u === 2) {
                    if (d = n, t.errorRecoveryDisabledLanes & d) var v = 0;
                    else v = t.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
                    if (v !== 0) {
                        n = v;
                        t: {
                            var x = t;u = sr;
                            var M = x.current.memoizedState.isDehydrated;
                            if (M && (Wa(x, v).flags |= 256), v = Jc(x, v, !1), v !== 2) {
                                if (Yc && !M) {
                                    x.errorRecoveryDisabledLanes |= d, ia |= d, u = 4;
                                    break t
                                }
                                d = Ce, Ce = u, d !== null && (Ce === null ? Ce = d : Ce.push.apply(Ce, d))
                            }
                            u = v
                        }
                        if (d = !1, u !== 2) continue
                    }
                }
                if (u === 1) {
                    Wa(t, 0), pi(t, n, 0, !0);
                    break
                }
                t: {
                    switch (o = t, d = u, d) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((n & 4194048) !== n) break;
                        case 6:
                            pi(o, n, ke, !fi);
                            break t;
                        case 2:
                            Ce = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                    }
                    if ((n & 62914560) === n && (u = Ko + 300 - ve(), 10 < u)) {
                        if (pi(o, n, ke, !fi), to(o, 0, !0) !== 0) break t;
                        Gn = n, o.timeoutHandle = Jy(xy.bind(null, o, s, Ce, Go, Xc, n, ke, ia, Ia, fi, d, "Throttled", -0, 0), u);
                        break t
                    }
                    xy(o, s, Ce, Go, Xc, n, ke, ia, Ia, fi, d, null, -0, 0)
                }
            }
            break
        } while (!0);
        Sn(t)
    }

    function xy(t, n, s, o, u, d, v, x, M, V, Y, Q, U, H) {
        if (t.timeoutHandle = -1, Q = n.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
            Q = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Dn
            }, hy(n, d, Q);
            var it = (d & 62914560) === d ? Ko - ve() : (d & 4194048) === d ? gy - ve() : 0;
            if (it = $T(Q, it), it !== null) {
                Gn = d, t.cancelPendingCommit = it(Cy.bind(null, t, n, d, s, o, u, v, x, M, Y, Q, null, U, H)), pi(t, d, v, !V);
                return
            }
        }
        Cy(t, n, d, s, o, u, v, x, M)
    }

    function pT(t) {
        for (var n = t;;) {
            var s = n.tag;
            if ((s === 0 || s === 11 || s === 15) && n.flags & 16384 && (s = n.updateQueue, s !== null && (s = s.stores, s !== null)))
                for (var o = 0; o < s.length; o++) {
                    var u = s[o],
                        d = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!Be(d(), u)) return !1
                    } catch {
                        return !1
                    }
                }
            if (s = n.child, n.subtreeFlags & 16384 && s !== null) s.return = n, n = s;
            else {
                if (n === t) break;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === t) return !0;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
        }
        return !0
    }

    function pi(t, n, s, o) {
        n &= ~Gc, n &= ~ia, t.suspendedLanes |= n, t.pingedLanes &= ~n, o && (t.warmLanes |= n), o = t.expirationTimes;
        for (var u = n; 0 < u;) {
            var d = 31 - je(u),
                v = 1 << d;
            o[d] = -1, u &= ~v
        }
        s !== 0 && Oh(t, s, n)
    }

    function Xo() {
        return (Mt & 6) === 0 ? (or(0), !1) : !0
    }

    function Ic() {
        if (vt !== null) {
            if (Ct === 0) var t = vt.return;
            else t = vt, zn = Qi = null, dc(t), qa = null, Ks = 0, t = vt;
            for (; t !== null;) Wp(t.alternate, t), t = t.return;
            vt = null
        }
    }

    function Wa(t, n) {
        var s = t.timeoutHandle;
        s !== -1 && (t.timeoutHandle = -1, jT(s)), s = t.cancelPendingCommit, s !== null && (t.cancelPendingCommit = null, s()), Gn = 0, Ic(), jt = t, vt = s = Ln(t.current, null), bt = n, Ct = 0, He = null, fi = !1, Za = Rs(t, n), Yc = !1, Ia = ke = Gc = ia = di = Gt = 0, Ce = sr = null, Xc = !1, (n & 8) !== 0 && (n |= n & 32);
        var o = t.entangledLanes;
        if (o !== 0)
            for (t = t.entanglements, o &= n; 0 < o;) {
                var u = 31 - je(o),
                    d = 1 << u;
                n |= t[u], o &= ~d
            }
        return Yn = n, ho(), s
    }

    function Ty(t, n) {
        ht = null, P.H = Js, n === ka || n === xo ? (n = Um(), Ct = 3) : n === tc ? (n = Um(), Ct = 4) : Ct = n === Mc ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, He = n, vt === null && (Gt = 1, jo(t, Qe(n, t.current)))
    }

    function Ey() {
        var t = Ue.current;
        return t === null ? !0 : (bt & 4194048) === bt ? We === null : (bt & 62914560) === bt || (bt & 536870912) !== 0 ? t === We : !1
    }

    function Ay() {
        var t = P.H;
        return P.H = Js, t === null ? Js : t
    }

    function wy() {
        var t = P.A;
        return P.A = hT, t
    }

    function Fo() {
        Gt = 4, fi || (bt & 4194048) !== bt && Ue.current !== null || (Za = !0), (di & 134217727) === 0 && (ia & 134217727) === 0 || jt === null || pi(jt, bt, ke, !1)
    }

    function Jc(t, n, s) {
        var o = Mt;
        Mt |= 2;
        var u = Ay(),
            d = wy();
        (jt !== t || bt !== n) && (Go = null, Wa(t, n)), n = !1;
        var v = Gt;
        t: do try {
                if (Ct !== 0 && vt !== null) {
                    var x = vt,
                        M = He;
                    switch (Ct) {
                        case 8:
                            Ic(), v = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ue.current === null && (n = !0);
                            var V = Ct;
                            if (Ct = 0, He = null, $a(t, x, M, V), s && Za) {
                                v = 0;
                                break t
                            }
                            break;
                        default:
                            V = Ct, Ct = 0, He = null, $a(t, x, M, V)
                    }
                }
                yT(), v = Gt;
                break
            } catch (Y) {
                Ty(t, Y)
            }
            while (!0);
            return n && t.shellSuspendCounter++, zn = Qi = null, Mt = o, P.H = u, P.A = d, vt === null && (jt = null, bt = 0, ho()), v
    }

    function yT() {
        for (; vt !== null;) Ry(vt)
    }

    function gT(t, n) {
        var s = Mt;
        Mt |= 2;
        var o = Ay(),
            u = wy();
        jt !== t || bt !== n ? (Go = null, Yo = ve() + 500, Wa(t, n)) : Za = Rs(t, n);
        t: do try {
                if (Ct !== 0 && vt !== null) {
                    n = vt;
                    var d = He;
                    e: switch (Ct) {
                        case 1:
                            Ct = 0, He = null, $a(t, n, d, 1);
                            break;
                        case 2:
                        case 9:
                            if (Bm(d)) {
                                Ct = 0, He = null, _y(n);
                                break
                            }
                            n = function() {
                                Ct !== 2 && Ct !== 9 || jt !== t || (Ct = 7), Sn(t)
                            }, d.then(n, n);
                            break t;
                        case 3:
                            Ct = 7;
                            break t;
                        case 4:
                            Ct = 5;
                            break t;
                        case 7:
                            Bm(d) ? (Ct = 0, He = null, _y(n)) : (Ct = 0, He = null, $a(t, n, d, 7));
                            break;
                        case 5:
                            var v = null;
                            switch (vt.tag) {
                                case 26:
                                    v = vt.memoizedState;
                                case 5:
                                case 27:
                                    var x = vt;
                                    if (v ? dg(v) : x.stateNode.complete) {
                                        Ct = 0, He = null;
                                        var M = x.sibling;
                                        if (M !== null) vt = M;
                                        else {
                                            var V = x.return;
                                            V !== null ? (vt = V, Qo(V)) : vt = null
                                        }
                                        break e
                                    }
                            }
                            Ct = 0, He = null, $a(t, n, d, 5);
                            break;
                        case 6:
                            Ct = 0, He = null, $a(t, n, d, 6);
                            break;
                        case 8:
                            Ic(), Gt = 6;
                            break t;
                        default:
                            throw Error(r(462))
                    }
                }
                vT();
                break
            } catch (Y) {
                Ty(t, Y)
            }
            while (!0);
            return zn = Qi = null, P.H = o, P.A = u, Mt = s, vt !== null ? 0 : (jt = null, bt = 0, ho(), Gt)
    }

    function vT() {
        for (; vt !== null && !Ir();) Ry(vt)
    }

    function Ry(t) {
        var n = Ip(t.alternate, t, Yn);
        t.memoizedProps = t.pendingProps, n === null ? Qo(t) : vt = n
    }

    function _y(t) {
        var n = t,
            s = n.alternate;
        switch (n.tag) {
            case 15:
            case 0:
                n = Yp(s, n, n.pendingProps, n.type, void 0, bt);
                break;
            case 11:
                n = Yp(s, n, n.pendingProps, n.type.render, n.ref, bt);
                break;
            case 5:
                dc(n);
            default:
                Wp(s, n), n = vt = wm(n, Yn), n = Ip(s, n, Yn)
        }
        t.memoizedProps = t.pendingProps, n === null ? Qo(t) : vt = n
    }

    function $a(t, n, s, o) {
        zn = Qi = null, dc(n), qa = null, Ks = 0;
        var u = n.return;
        try {
            if (rT(t, u, n, s, bt)) {
                Gt = 1, jo(t, Qe(s, t.current)), vt = null;
                return
            }
        } catch (d) {
            if (u !== null) throw vt = u, d;
            Gt = 1, jo(t, Qe(s, t.current)), vt = null;
            return
        }
        n.flags & 32768 ? (Tt || o === 1 ? t = !0 : Za || (bt & 536870912) !== 0 ? t = !1 : (fi = t = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Ue.current, o !== null && o.tag === 13 && (o.flags |= 16384))), My(n, t)) : Qo(n)
    }

    function Qo(t) {
        var n = t;
        do {
            if ((n.flags & 32768) !== 0) {
                My(n, fi);
                return
            }
            t = n.return;
            var s = uT(n.alternate, n, Yn);
            if (s !== null) {
                vt = s;
                return
            }
            if (n = n.sibling, n !== null) {
                vt = n;
                return
            }
            vt = n = t
        } while (n !== null);
        Gt === 0 && (Gt = 5)
    }

    function My(t, n) {
        do {
            var s = cT(t.alternate, t);
            if (s !== null) {
                s.flags &= 32767, vt = s;
                return
            }
            if (s = t.return, s !== null && (s.flags |= 32768, s.subtreeFlags = 0, s.deletions = null), !n && (t = t.sibling, t !== null)) {
                vt = t;
                return
            }
            vt = t = s
        } while (t !== null);
        Gt = 6, vt = null
    }

    function Cy(t, n, s, o, u, d, v, x, M) {
        t.cancelPendingCommit = null;
        do Zo(); while (ne !== 0);
        if ((Mt & 6) !== 0) throw Error(r(327));
        if (n !== null) {
            if (n === t.current) throw Error(r(177));
            if (d = n.lanes | n.childLanes, d |= Pu, J1(t, s, d, v, x, M), t === jt && (vt = jt = null, bt = 0), Ja = n, mi = t, Gn = s, Fc = d, Qc = u, vy = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, TT(ba, function() {
                    return zy(), null
                })) : (t.callbackNode = null, t.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
                o = P.T, P.T = null, u = W.p, W.p = 2, v = Mt, Mt |= 4;
                try {
                    fT(t, n, s)
                } finally {
                    Mt = v, W.p = u, P.T = o
                }
            }
            ne = 1, Dy(), Oy(), Ly()
        }
    }

    function Dy() {
        if (ne === 1) {
            ne = 0;
            var t = mi,
                n = Ja,
                s = (n.flags & 13878) !== 0;
            if ((n.subtreeFlags & 13878) !== 0 || s) {
                s = P.T, P.T = null;
                var o = W.p;
                W.p = 2;
                var u = Mt;
                Mt |= 4;
                try {
                    cy(n, t);
                    var d = cf,
                        v = ym(t.containerInfo),
                        x = d.focusedElem,
                        M = d.selectionRange;
                    if (v !== x && x && x.ownerDocument && pm(x.ownerDocument.documentElement, x)) {
                        if (M !== null && zu(x)) {
                            var V = M.start,
                                Y = M.end;
                            if (Y === void 0 && (Y = V), "selectionStart" in x) x.selectionStart = V, x.selectionEnd = Math.min(Y, x.value.length);
                            else {
                                var Q = x.ownerDocument || document,
                                    U = Q && Q.defaultView || window;
                                if (U.getSelection) {
                                    var H = U.getSelection(),
                                        it = x.textContent.length,
                                        ut = Math.min(M.start, it),
                                        Nt = M.end === void 0 ? ut : Math.min(M.end, it);
                                    !H.extend && ut > Nt && (v = Nt, Nt = ut, ut = v);
                                    var z = mm(x, ut),
                                        D = mm(x, Nt);
                                    if (z && D && (H.rangeCount !== 1 || H.anchorNode !== z.node || H.anchorOffset !== z.offset || H.focusNode !== D.node || H.focusOffset !== D.offset)) {
                                        var B = Q.createRange();
                                        B.setStart(z.node, z.offset), H.removeAllRanges(), ut > Nt ? (H.addRange(B), H.extend(D.node, D.offset)) : (B.setEnd(D.node, D.offset), H.addRange(B))
                                    }
                                }
                            }
                        }
                        for (Q = [], H = x; H = H.parentNode;) H.nodeType === 1 && Q.push({
                            element: H,
                            left: H.scrollLeft,
                            top: H.scrollTop
                        });
                        for (typeof x.focus == "function" && x.focus(), x = 0; x < Q.length; x++) {
                            var G = Q[x];
                            G.element.scrollLeft = G.left, G.element.scrollTop = G.top
                        }
                    }
                    ol = !!uf, cf = uf = null
                } finally {
                    Mt = u, W.p = o, P.T = s
                }
            }
            t.current = n, ne = 2
        }
    }

    function Oy() {
        if (ne === 2) {
            ne = 0;
            var t = mi,
                n = Ja,
                s = (n.flags & 8772) !== 0;
            if ((n.subtreeFlags & 8772) !== 0 || s) {
                s = P.T, P.T = null;
                var o = W.p;
                W.p = 2;
                var u = Mt;
                Mt |= 4;
                try {
                    sy(t, n.alternate, n)
                } finally {
                    Mt = u, W.p = o, P.T = s
                }
            }
            ne = 3
        }
    }

    function Ly() {
        if (ne === 4 || ne === 3) {
            ne = 0, du();
            var t = mi,
                n = Ja,
                s = Gn,
                o = vy;
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ne = 5 : (ne = 0, Ja = mi = null, Ny(t, t.pendingLanes));
            var u = t.pendingLanes;
            if (u === 0 && (hi = null), pu(s), n = n.stateNode, ze && typeof ze.onCommitFiberRoot == "function") try {
                ze.onCommitFiberRoot(ws, n, void 0, (n.current.flags & 128) === 128)
            } catch {}
            if (o !== null) {
                n = P.T, u = W.p, W.p = 2, P.T = null;
                try {
                    for (var d = t.onRecoverableError, v = 0; v < o.length; v++) {
                        var x = o[v];
                        d(x.value, {
                            componentStack: x.stack
                        })
                    }
                } finally {
                    P.T = n, W.p = u
                }
            }(Gn & 3) !== 0 && Zo(), Sn(t), u = t.pendingLanes, (s & 261930) !== 0 && (u & 42) !== 0 ? t === Zc ? rr++ : (rr = 0, Zc = t) : rr = 0, or(0)
        }
    }

    function Ny(t, n) {
        (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache, n != null && (t.pooledCache = null, ks(n)))
    }

    function Zo() {
        return Dy(), Oy(), Ly(), zy()
    }

    function zy() {
        if (ne !== 5) return !1;
        var t = mi,
            n = Fc;
        Fc = 0;
        var s = pu(Gn),
            o = P.T,
            u = W.p;
        try {
            W.p = 32 > s ? 32 : s, P.T = null, s = Qc, Qc = null;
            var d = mi,
                v = Gn;
            if (ne = 0, Ja = mi = null, Gn = 0, (Mt & 6) !== 0) throw Error(r(331));
            var x = Mt;
            if (Mt |= 4, py(d.current), dy(d, d.current, v, s), Mt = x, or(0, !1), ze && typeof ze.onPostCommitFiberRoot == "function") try {
                ze.onPostCommitFiberRoot(ws, d)
            } catch {}
            return !0
        } finally {
            W.p = u, P.T = o, Ny(t, n)
        }
    }

    function jy(t, n, s) {
        n = Qe(s, n), n = _c(t.stateNode, n, 2), t = oi(t, n, 2), t !== null && (_s(t, 2), Sn(t))
    }

    function Dt(t, n, s) {
        if (t.tag === 3) jy(t, t, s);
        else
            for (; n !== null;) {
                if (n.tag === 3) {
                    jy(n, t, s);
                    break
                } else if (n.tag === 1) {
                    var o = n.stateNode;
                    if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (hi === null || !hi.has(o))) {
                        t = Qe(s, t), s = Bp(2), o = oi(n, s, 2), o !== null && (Vp(s, o, n, t), _s(o, 2), Sn(o));
                        break
                    }
                }
                n = n.return
            }
    }

    function Wc(t, n, s) {
        var o = t.pingCache;
        if (o === null) {
            o = t.pingCache = new mT;
            var u = new Set;
            o.set(n, u)
        } else u = o.get(n), u === void 0 && (u = new Set, o.set(n, u));
        u.has(s) || (Yc = !0, u.add(s), t = ST.bind(null, t, n, s), n.then(t, t))
    }

    function ST(t, n, s) {
        var o = t.pingCache;
        o !== null && o.delete(n), t.pingedLanes |= t.suspendedLanes & s, t.warmLanes &= ~s, jt === t && (bt & s) === s && (Gt === 4 || Gt === 3 && (bt & 62914560) === bt && 300 > ve() - Ko ? (Mt & 2) === 0 && Wa(t, 0) : Gc |= s, Ia === bt && (Ia = 0)), Sn(t)
    }

    function By(t, n) {
        n === 0 && (n = Dh()), t = Gi(t, n), t !== null && (_s(t, n), Sn(t))
    }

    function bT(t) {
        var n = t.memoizedState,
            s = 0;
        n !== null && (s = n.retryLane), By(t, s)
    }

    function xT(t, n) {
        var s = 0;
        switch (t.tag) {
            case 31:
            case 13:
                var o = t.stateNode,
                    u = t.memoizedState;
                u !== null && (s = u.retryLane);
                break;
            case 19:
                o = t.stateNode;
                break;
            case 22:
                o = t.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
        }
        o !== null && o.delete(n), By(t, s)
    }

    function TT(t, n) {
        return on(t, n)
    }
    var Io = null,
        ts = null,
        $c = !1,
        Jo = !1,
        tf = !1,
        yi = 0;

    function Sn(t) {
        t !== ts && t.next === null && (ts === null ? Io = ts = t : ts = ts.next = t), Jo = !0, $c || ($c = !0, AT())
    }

    function or(t, n) {
        if (!tf && Jo) {
            tf = !0;
            do
                for (var s = !1, o = Io; o !== null;) {
                    if (t !== 0) {
                        var u = o.pendingLanes;
                        if (u === 0) var d = 0;
                        else {
                            var v = o.suspendedLanes,
                                x = o.pingedLanes;
                            d = (1 << 31 - je(42 | t) + 1) - 1, d &= u & ~(v & ~x), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0
                        }
                        d !== 0 && (s = !0, Hy(o, d))
                    } else d = bt, d = to(o, o === jt ? d : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1), (d & 3) === 0 || Rs(o, d) || (s = !0, Hy(o, d));
                    o = o.next
                }
            while (s);
            tf = !1
        }
    }

    function ET() {
        Vy()
    }

    function Vy() {
        Jo = $c = !1;
        var t = 0;
        yi !== 0 && zT() && (t = yi);
        for (var n = ve(), s = null, o = Io; o !== null;) {
            var u = o.next,
                d = Uy(o, n);
            d === 0 ? (o.next = null, s === null ? Io = u : s.next = u, u === null && (ts = s)) : (s = o, (t !== 0 || (d & 3) !== 0) && (Jo = !0)), o = u
        }
        ne !== 0 && ne !== 5 || or(t), yi !== 0 && (yi = 0)
    }

    function Uy(t, n) {
        for (var s = t.suspendedLanes, o = t.pingedLanes, u = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d;) {
            var v = 31 - je(d),
                x = 1 << v,
                M = u[v];
            M === -1 ? ((x & s) === 0 || (x & o) !== 0) && (u[v] = I1(x, n)) : M <= n && (t.expiredLanes |= x), d &= ~x
        }
        if (n = jt, s = bt, s = to(t, t === n ? s : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), o = t.callbackNode, s === 0 || t === n && (Ct === 2 || Ct === 9) || t.cancelPendingCommit !== null) return o !== null && o !== null && As(o), t.callbackNode = null, t.callbackPriority = 0;
        if ((s & 3) === 0 || Rs(t, s)) {
            if (n = s & -s, n === t.callbackPriority) return n;
            switch (o !== null && As(o), pu(s)) {
                case 2:
                case 8:
                    s = pn;
                    break;
                case 32:
                    s = ba;
                    break;
                case 268435456:
                    s = Ch;
                    break;
                default:
                    s = ba
            }
            return o = Py.bind(null, t), s = on(s, o), t.callbackPriority = n, t.callbackNode = s, n
        }
        return o !== null && o !== null && As(o), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function Py(t, n) {
        if (ne !== 0 && ne !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var s = t.callbackNode;
        if (Zo() && t.callbackNode !== s) return null;
        var o = bt;
        return o = to(t, t === jt ? o : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), o === 0 ? null : (by(t, o, n), Uy(t, ve()), t.callbackNode != null && t.callbackNode === s ? Py.bind(null, t) : null)
    }

    function Hy(t, n) {
        if (Zo()) return null;
        by(t, n, !0)
    }

    function AT() {
        BT(function() {
            (Mt & 6) !== 0 ? on(ue, ET) : Vy()
        })
    }

    function ef() {
        if (yi === 0) {
            var t = Pa;
            t === 0 && (t = Jr, Jr <<= 1, (Jr & 261888) === 0 && (Jr = 256)), yi = t
        }
        return yi
    }

    function ky(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ao("" + t)
    }

    function qy(t, n) {
        var s = n.ownerDocument.createElement("input");
        return s.name = n.name, s.value = n.value, t.id && s.setAttribute("form", t.id), n.parentNode.insertBefore(s, n), t = new FormData(t), s.parentNode.removeChild(s), t
    }

    function wT(t, n, s, o, u) {
        if (n === "submit" && s && s.stateNode === u) {
            var d = ky((u[Ae] || null).action),
                v = o.submitter;
            v && (n = (n = v[Ae] || null) ? ky(n.formAction) : v.getAttribute("formAction"), n !== null && (d = n, v = null));
            var x = new lo("action", "action", null, o, u);
            t.push({
                event: x,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (o.defaultPrevented) {
                            if (yi !== 0) {
                                var M = v ? qy(u, v) : new FormData(u);
                                xc(s, {
                                    pending: !0,
                                    data: M,
                                    method: u.method,
                                    action: d
                                }, null, M)
                            }
                        } else typeof d == "function" && (x.preventDefault(), M = v ? qy(u, v) : new FormData(u), xc(s, {
                            pending: !0,
                            data: M,
                            method: u.method,
                            action: d
                        }, d, M))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var nf = 0; nf < Uu.length; nf++) {
        var af = Uu[nf],
            RT = af.toLowerCase(),
            _T = af[0].toUpperCase() + af.slice(1);
        ln(RT, "on" + _T)
    }
    ln(Sm, "onAnimationEnd"), ln(bm, "onAnimationIteration"), ln(xm, "onAnimationStart"), ln("dblclick", "onDoubleClick"), ln("focusin", "onFocus"), ln("focusout", "onBlur"), ln(Kx, "onTransitionRun"), ln(Yx, "onTransitionStart"), ln(Gx, "onTransitionCancel"), ln(Tm, "onTransitionEnd"), wa("onMouseEnter", ["mouseout", "mouseover"]), wa("onMouseLeave", ["mouseout", "mouseover"]), wa("onPointerEnter", ["pointerout", "pointerover"]), wa("onPointerLeave", ["pointerout", "pointerover"]), ki("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ki("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ki("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ki("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ki("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ki("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        MT = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lr));

    function Ky(t, n) {
        n = (n & 4) !== 0;
        for (var s = 0; s < t.length; s++) {
            var o = t[s],
                u = o.event;
            o = o.listeners;
            t: {
                var d = void 0;
                if (n)
                    for (var v = o.length - 1; 0 <= v; v--) {
                        var x = o[v],
                            M = x.instance,
                            V = x.currentTarget;
                        if (x = x.listener, M !== d && u.isPropagationStopped()) break t;
                        d = x, u.currentTarget = V;
                        try {
                            d(u)
                        } catch (Y) {
                            fo(Y)
                        }
                        u.currentTarget = null, d = M
                    } else
                        for (v = 0; v < o.length; v++) {
                            if (x = o[v], M = x.instance, V = x.currentTarget, x = x.listener, M !== d && u.isPropagationStopped()) break t;
                            d = x, u.currentTarget = V;
                            try {
                                d(u)
                            } catch (Y) {
                                fo(Y)
                            }
                            u.currentTarget = null, d = M
                        }
            }
        }
    }

    function St(t, n) {
        var s = n[yu];
        s === void 0 && (s = n[yu] = new Set);
        var o = t + "__bubble";
        s.has(o) || (Yy(n, t, 2, !1), s.add(o))
    }

    function sf(t, n, s) {
        var o = 0;
        n && (o |= 4), Yy(s, t, o, n)
    }
    var Wo = "_reactListening" + Math.random().toString(36).slice(2);

    function rf(t) {
        if (!t[Wo]) {
            t[Wo] = !0, Vh.forEach(function(s) {
                s !== "selectionchange" && (MT.has(s) || sf(s, !1, t), sf(s, !0, t))
            });
            var n = t.nodeType === 9 ? t : t.ownerDocument;
            n === null || n[Wo] || (n[Wo] = !0, sf("selectionchange", !1, n))
        }
    }

    function Yy(t, n, s, o) {
        switch (Sg(n)) {
            case 2:
                var u = nE;
                break;
            case 8:
                u = iE;
                break;
            default:
                u = xf
        }
        s = u.bind(null, n, s, t), u = void 0, !wu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0), o ? u !== void 0 ? t.addEventListener(n, s, {
            capture: !0,
            passive: u
        }) : t.addEventListener(n, s, !0) : u !== void 0 ? t.addEventListener(n, s, {
            passive: u
        }) : t.addEventListener(n, s, !1)
    }

    function of (t, n, s, o, u) {
        var d = o;
        if ((n & 1) === 0 && (n & 2) === 0 && o !== null) t: for (;;) {
            if (o === null) return;
            var v = o.tag;
            if (v === 3 || v === 4) {
                var x = o.stateNode.containerInfo;
                if (x === u) break;
                if (v === 4)
                    for (v = o.return; v !== null;) {
                        var M = v.tag;
                        if ((M === 3 || M === 4) && v.stateNode.containerInfo === u) return;
                        v = v.return
                    }
                for (; x !== null;) {
                    if (v = Ta(x), v === null) return;
                    if (M = v.tag, M === 5 || M === 6 || M === 26 || M === 27) {
                        o = d = v;
                        continue t
                    }
                    x = x.parentNode
                }
            }
            o = o.return
        }
        Zh(function() {
            var V = d,
                Y = Eu(s),
                Q = [];
            t: {
                var U = Em.get(t);
                if (U !== void 0) {
                    var H = lo,
                        it = t;
                    switch (t) {
                        case "keypress":
                            if (ro(s) === 0) break t;
                        case "keydown":
                        case "keyup":
                            H = xx;
                            break;
                        case "focusin":
                            it = "focus", H = Cu;
                            break;
                        case "focusout":
                            it = "blur", H = Cu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            H = Cu;
                            break;
                        case "click":
                            if (s.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            H = Wh;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            H = ux;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            H = Ax;
                            break;
                        case Sm:
                        case bm:
                        case xm:
                            H = dx;
                            break;
                        case Tm:
                            H = Rx;
                            break;
                        case "scroll":
                        case "scrollend":
                            H = ox;
                            break;
                        case "wheel":
                            H = Mx;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            H = mx;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            H = tm;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            H = Dx
                    }
                    var ut = (n & 4) !== 0,
                        Nt = !ut && (t === "scroll" || t === "scrollend"),
                        z = ut ? U !== null ? U + "Capture" : null : U;
                    ut = [];
                    for (var D = V, B; D !== null;) {
                        var G = D;
                        if (B = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || B === null || z === null || (G = Ds(D, z), G != null && ut.push(ur(D, G, B))), Nt) break;
                        D = D.return
                    }
                    0 < ut.length && (U = new H(U, it, null, s, Y), Q.push({
                        event: U,
                        listeners: ut
                    }))
                }
            }
            if ((n & 7) === 0) {
                t: {
                    if (U = t === "mouseover" || t === "pointerover", H = t === "mouseout" || t === "pointerout", U && s !== Tu && (it = s.relatedTarget || s.fromElement) && (Ta(it) || it[xa])) break t;
                    if ((H || U) && (U = Y.window === Y ? Y : (U = Y.ownerDocument) ? U.defaultView || U.parentWindow : window, H ? (it = s.relatedTarget || s.toElement, H = V, it = it ? Ta(it) : null, it !== null && (Nt = c(it), ut = it.tag, it !== Nt || ut !== 5 && ut !== 27 && ut !== 6) && (it = null)) : (H = null, it = V), H !== it)) {
                        if (ut = Wh, G = "onMouseLeave", z = "onMouseEnter", D = "mouse", (t === "pointerout" || t === "pointerover") && (ut = tm, G = "onPointerLeave", z = "onPointerEnter", D = "pointer"), Nt = H == null ? U : Cs(H), B = it == null ? U : Cs(it), U = new ut(G, D + "leave", H, s, Y), U.target = Nt, U.relatedTarget = B, G = null, Ta(Y) === V && (ut = new ut(z, D + "enter", it, s, Y), ut.target = B, ut.relatedTarget = Nt, G = ut), Nt = G, H && it) e: {
                            for (ut = CT, z = H, D = it, B = 0, G = z; G; G = ut(G)) B++;G = 0;
                            for (var lt = D; lt; lt = ut(lt)) G++;
                            for (; 0 < B - G;) z = ut(z),
                            B--;
                            for (; 0 < G - B;) D = ut(D),
                            G--;
                            for (; B--;) {
                                if (z === D || D !== null && z === D.alternate) {
                                    ut = z;
                                    break e
                                }
                                z = ut(z), D = ut(D)
                            }
                            ut = null
                        }
                        else ut = null;
                        H !== null && Gy(Q, U, H, ut, !1), it !== null && Nt !== null && Gy(Q, Nt, it, ut, !0)
                    }
                }
                t: {
                    if (U = V ? Cs(V) : window, H = U.nodeName && U.nodeName.toLowerCase(), H === "select" || H === "input" && U.type === "file") var wt = lm;
                    else if (rm(U))
                        if (um) wt = Hx;
                        else {
                            wt = Ux;
                            var st = Vx
                        }
                    else H = U.nodeName,
                    !H || H.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? V && xu(V.elementType) && (wt = lm) : wt = Px;
                    if (wt && (wt = wt(t, V))) {
                        om(Q, wt, s, Y);
                        break t
                    }
                    st && st(t, U, V),
                    t === "focusout" && V && U.type === "number" && V.memoizedProps.value != null && bu(U, "number", U.value)
                }
                switch (st = V ? Cs(V) : window, t) {
                    case "focusin":
                        (rm(st) || st.contentEditable === "true") && (Oa = st, ju = V, Us = null);
                        break;
                    case "focusout":
                        Us = ju = Oa = null;
                        break;
                    case "mousedown":
                        Bu = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Bu = !1, gm(Q, s, Y);
                        break;
                    case "selectionchange":
                        if (qx) break;
                    case "keydown":
                    case "keyup":
                        gm(Q, s, Y)
                }
                var mt;
                if (Ou) t: {
                    switch (t) {
                        case "compositionstart":
                            var xt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            xt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            xt = "onCompositionUpdate";
                            break t
                    }
                    xt = void 0
                }
                else Da ? am(t, s) && (xt = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (xt = "onCompositionStart");xt && (em && s.locale !== "ko" && (Da || xt !== "onCompositionStart" ? xt === "onCompositionEnd" && Da && (mt = Ih()) : (ti = Y, Ru = "value" in ti ? ti.value : ti.textContent, Da = !0)), st = $o(V, xt), 0 < st.length && (xt = new $h(xt, t, null, s, Y), Q.push({
                    event: xt,
                    listeners: st
                }), mt ? xt.data = mt : (mt = sm(s), mt !== null && (xt.data = mt)))),
                (mt = Lx ? Nx(t, s) : zx(t, s)) && (xt = $o(V, "onBeforeInput"), 0 < xt.length && (st = new $h("onBeforeInput", "beforeinput", null, s, Y), Q.push({
                    event: st,
                    listeners: xt
                }), st.data = mt)),
                wT(Q, t, V, s, Y)
            }
            Ky(Q, n)
        })
    }

    function ur(t, n, s) {
        return {
            instance: t,
            listener: n,
            currentTarget: s
        }
    }

    function $o(t, n) {
        for (var s = n + "Capture", o = []; t !== null;) {
            var u = t,
                d = u.stateNode;
            if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = Ds(t, s), u != null && o.unshift(ur(t, u, d)), u = Ds(t, n), u != null && o.push(ur(t, u, d))), t.tag === 3) return o;
            t = t.return
        }
        return []
    }

    function CT(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function Gy(t, n, s, o, u) {
        for (var d = n._reactName, v = []; s !== null && s !== o;) {
            var x = s,
                M = x.alternate,
                V = x.stateNode;
            if (x = x.tag, M !== null && M === o) break;
            x !== 5 && x !== 26 && x !== 27 || V === null || (M = V, u ? (V = Ds(s, d), V != null && v.unshift(ur(s, V, M))) : u || (V = Ds(s, d), V != null && v.push(ur(s, V, M)))), s = s.return
        }
        v.length !== 0 && t.push({
            event: n,
            listeners: v
        })
    }
    var DT = /\r\n?/g,
        OT = /\u0000|\uFFFD/g;

    function Xy(t) {
        return (typeof t == "string" ? t : "" + t).replace(DT, `
`).replace(OT, "")
    }

    function Fy(t, n) {
        return n = Xy(n), Xy(t) === n
    }

    function Lt(t, n, s, o, u, d) {
        switch (s) {
            case "children":
                typeof o == "string" ? n === "body" || n === "textarea" && o === "" || _a(t, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && _a(t, "" + o);
                break;
            case "className":
                no(t, "class", o);
                break;
            case "tabIndex":
                no(t, "tabindex", o);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                no(t, s, o);
                break;
            case "style":
                Fh(t, o, d);
                break;
            case "data":
                if (n !== "object") {
                    no(t, "data", o);
                    break
                }
            case "src":
            case "href":
                if (o === "" && (n !== "a" || s !== "href")) {
                    t.removeAttribute(s);
                    break
                }
                if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
                    t.removeAttribute(s);
                    break
                }
                o = ao("" + o), t.setAttribute(s, o);
                break;
            case "action":
            case "formAction":
                if (typeof o == "function") {
                    t.setAttribute(s, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof d == "function" && (s === "formAction" ? (n !== "input" && Lt(t, n, "name", u.name, u, null), Lt(t, n, "formEncType", u.formEncType, u, null), Lt(t, n, "formMethod", u.formMethod, u, null), Lt(t, n, "formTarget", u.formTarget, u, null)) : (Lt(t, n, "encType", u.encType, u, null), Lt(t, n, "method", u.method, u, null), Lt(t, n, "target", u.target, u, null)));
                if (o == null || typeof o == "symbol" || typeof o == "boolean") {
                    t.removeAttribute(s);
                    break
                }
                o = ao("" + o), t.setAttribute(s, o);
                break;
            case "onClick":
                o != null && (t.onclick = Dn);
                break;
            case "onScroll":
                o != null && St("scroll", t);
                break;
            case "onScrollEnd":
                o != null && St("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (o != null) {
                    if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
                    if (s = o.__html, s != null) {
                        if (u.children != null) throw Error(r(60));
                        t.innerHTML = s
                    }
                }
                break;
            case "multiple":
                t.multiple = o && typeof o != "function" && typeof o != "symbol";
                break;
            case "muted":
                t.muted = o && typeof o != "function" && typeof o != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                s = ao("" + o), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(s, "" + o) : t.removeAttribute(s);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                o && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(s, "") : t.removeAttribute(s);
                break;
            case "capture":
            case "download":
                o === !0 ? t.setAttribute(s, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(s, o) : t.removeAttribute(s);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? t.setAttribute(s, o) : t.removeAttribute(s);
                break;
            case "rowSpan":
            case "start":
                o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? t.removeAttribute(s) : t.setAttribute(s, o);
                break;
            case "popover":
                St("beforetoggle", t), St("toggle", t), eo(t, "popover", o);
                break;
            case "xlinkActuate":
                Cn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
                break;
            case "xlinkArcrole":
                Cn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
                break;
            case "xlinkRole":
                Cn(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
                break;
            case "xlinkShow":
                Cn(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
                break;
            case "xlinkTitle":
                Cn(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
                break;
            case "xlinkType":
                Cn(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
                break;
            case "xmlBase":
                Cn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
                break;
            case "xmlLang":
                Cn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
                break;
            case "xmlSpace":
                Cn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
                break;
            case "is":
                eo(t, "is", o);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (s = sx.get(s) || s, eo(t, s, o))
        }
    }

    function lf(t, n, s, o, u, d) {
        switch (s) {
            case "style":
                Fh(t, o, d);
                break;
            case "dangerouslySetInnerHTML":
                if (o != null) {
                    if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
                    if (s = o.__html, s != null) {
                        if (u.children != null) throw Error(r(60));
                        t.innerHTML = s
                    }
                }
                break;
            case "children":
                typeof o == "string" ? _a(t, o) : (typeof o == "number" || typeof o == "bigint") && _a(t, "" + o);
                break;
            case "onScroll":
                o != null && St("scroll", t);
                break;
            case "onScrollEnd":
                o != null && St("scrollend", t);
                break;
            case "onClick":
                o != null && (t.onclick = Dn);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Uh.hasOwnProperty(s)) t: {
                    if (s[0] === "o" && s[1] === "n" && (u = s.endsWith("Capture"), n = s.slice(2, u ? s.length - 7 : void 0), d = t[Ae] || null, d = d != null ? d[s] : null, typeof d == "function" && t.removeEventListener(n, d, u), typeof o == "function")) {
                        typeof d != "function" && d !== null && (s in t ? t[s] = null : t.hasAttribute(s) && t.removeAttribute(s)), t.addEventListener(n, o, u);
                        break t
                    }
                    s in t ? t[s] = o : o === !0 ? t.setAttribute(s, "") : eo(t, s, o)
                }
        }
    }

    function me(t, n, s) {
        switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                St("error", t), St("load", t);
                var o = !1,
                    u = !1,
                    d;
                for (d in s)
                    if (s.hasOwnProperty(d)) {
                        var v = s[d];
                        if (v != null) switch (d) {
                            case "src":
                                o = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, n));
                            default:
                                Lt(t, n, d, v, s, null)
                        }
                    }
                u && Lt(t, n, "srcSet", s.srcSet, s, null), o && Lt(t, n, "src", s.src, s, null);
                return;
            case "input":
                St("invalid", t);
                var x = d = v = u = null,
                    M = null,
                    V = null;
                for (o in s)
                    if (s.hasOwnProperty(o)) {
                        var Y = s[o];
                        if (Y != null) switch (o) {
                            case "name":
                                u = Y;
                                break;
                            case "type":
                                v = Y;
                                break;
                            case "checked":
                                M = Y;
                                break;
                            case "defaultChecked":
                                V = Y;
                                break;
                            case "value":
                                d = Y;
                                break;
                            case "defaultValue":
                                x = Y;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (Y != null) throw Error(r(137, n));
                                break;
                            default:
                                Lt(t, n, o, Y, s, null)
                        }
                    }
                Kh(t, d, x, M, V, v, u, !1);
                return;
            case "select":
                St("invalid", t), o = v = d = null;
                for (u in s)
                    if (s.hasOwnProperty(u) && (x = s[u], x != null)) switch (u) {
                        case "value":
                            d = x;
                            break;
                        case "defaultValue":
                            v = x;
                            break;
                        case "multiple":
                            o = x;
                        default:
                            Lt(t, n, u, x, s, null)
                    }
                n = d, s = v, t.multiple = !!o, n != null ? Ra(t, !!o, n, !1) : s != null && Ra(t, !!o, s, !0);
                return;
            case "textarea":
                St("invalid", t), d = u = o = null;
                for (v in s)
                    if (s.hasOwnProperty(v) && (x = s[v], x != null)) switch (v) {
                        case "value":
                            o = x;
                            break;
                        case "defaultValue":
                            u = x;
                            break;
                        case "children":
                            d = x;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (x != null) throw Error(r(91));
                            break;
                        default:
                            Lt(t, n, v, x, s, null)
                    }
                Gh(t, o, u, d);
                return;
            case "option":
                for (M in s) s.hasOwnProperty(M) && (o = s[M], o != null) && (M === "selected" ? t.selected = o && typeof o != "function" && typeof o != "symbol" : Lt(t, n, M, o, s, null));
                return;
            case "dialog":
                St("beforetoggle", t), St("toggle", t), St("cancel", t), St("close", t);
                break;
            case "iframe":
            case "object":
                St("load", t);
                break;
            case "video":
            case "audio":
                for (o = 0; o < lr.length; o++) St(lr[o], t);
                break;
            case "image":
                St("error", t), St("load", t);
                break;
            case "details":
                St("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                St("error", t), St("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (V in s)
                    if (s.hasOwnProperty(V) && (o = s[V], o != null)) switch (V) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, n));
                        default:
                            Lt(t, n, V, o, s, null)
                    }
                return;
            default:
                if (xu(n)) {
                    for (Y in s) s.hasOwnProperty(Y) && (o = s[Y], o !== void 0 && lf(t, n, Y, o, s, void 0));
                    return
                }
        }
        for (x in s) s.hasOwnProperty(x) && (o = s[x], o != null && Lt(t, n, x, o, s, null))
    }

    function LT(t, n, s, o) {
        switch (n) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var u = null,
                    d = null,
                    v = null,
                    x = null,
                    M = null,
                    V = null,
                    Y = null;
                for (H in s) {
                    var Q = s[H];
                    if (s.hasOwnProperty(H) && Q != null) switch (H) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            M = Q;
                        default:
                            o.hasOwnProperty(H) || Lt(t, n, H, null, o, Q)
                    }
                }
                for (var U in o) {
                    var H = o[U];
                    if (Q = s[U], o.hasOwnProperty(U) && (H != null || Q != null)) switch (U) {
                        case "type":
                            d = H;
                            break;
                        case "name":
                            u = H;
                            break;
                        case "checked":
                            V = H;
                            break;
                        case "defaultChecked":
                            Y = H;
                            break;
                        case "value":
                            v = H;
                            break;
                        case "defaultValue":
                            x = H;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (H != null) throw Error(r(137, n));
                            break;
                        default:
                            H !== Q && Lt(t, n, U, H, o, Q)
                    }
                }
                Su(t, v, x, M, V, Y, d, u);
                return;
            case "select":
                H = v = x = U = null;
                for (d in s)
                    if (M = s[d], s.hasOwnProperty(d) && M != null) switch (d) {
                        case "value":
                            break;
                        case "multiple":
                            H = M;
                        default:
                            o.hasOwnProperty(d) || Lt(t, n, d, null, o, M)
                    }
                for (u in o)
                    if (d = o[u], M = s[u], o.hasOwnProperty(u) && (d != null || M != null)) switch (u) {
                        case "value":
                            U = d;
                            break;
                        case "defaultValue":
                            x = d;
                            break;
                        case "multiple":
                            v = d;
                        default:
                            d !== M && Lt(t, n, u, d, o, M)
                    }
                n = x, s = v, o = H, U != null ? Ra(t, !!s, U, !1) : !!o != !!s && (n != null ? Ra(t, !!s, n, !0) : Ra(t, !!s, s ? [] : "", !1));
                return;
            case "textarea":
                H = U = null;
                for (x in s)
                    if (u = s[x], s.hasOwnProperty(x) && u != null && !o.hasOwnProperty(x)) switch (x) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Lt(t, n, x, null, o, u)
                    }
                for (v in o)
                    if (u = o[v], d = s[v], o.hasOwnProperty(v) && (u != null || d != null)) switch (v) {
                        case "value":
                            U = u;
                            break;
                        case "defaultValue":
                            H = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(r(91));
                            break;
                        default:
                            u !== d && Lt(t, n, v, u, o, d)
                    }
                Yh(t, U, H);
                return;
            case "option":
                for (var it in s) U = s[it], s.hasOwnProperty(it) && U != null && !o.hasOwnProperty(it) && (it === "selected" ? t.selected = !1 : Lt(t, n, it, null, o, U));
                for (M in o) U = o[M], H = s[M], o.hasOwnProperty(M) && U !== H && (U != null || H != null) && (M === "selected" ? t.selected = U && typeof U != "function" && typeof U != "symbol" : Lt(t, n, M, U, o, H));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var ut in s) U = s[ut], s.hasOwnProperty(ut) && U != null && !o.hasOwnProperty(ut) && Lt(t, n, ut, null, o, U);
                for (V in o)
                    if (U = o[V], H = s[V], o.hasOwnProperty(V) && U !== H && (U != null || H != null)) switch (V) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (U != null) throw Error(r(137, n));
                            break;
                        default:
                            Lt(t, n, V, U, o, H)
                    }
                return;
            default:
                if (xu(n)) {
                    for (var Nt in s) U = s[Nt], s.hasOwnProperty(Nt) && U !== void 0 && !o.hasOwnProperty(Nt) && lf(t, n, Nt, void 0, o, U);
                    for (Y in o) U = o[Y], H = s[Y], !o.hasOwnProperty(Y) || U === H || U === void 0 && H === void 0 || lf(t, n, Y, U, o, H);
                    return
                }
        }
        for (var z in s) U = s[z], s.hasOwnProperty(z) && U != null && !o.hasOwnProperty(z) && Lt(t, n, z, null, o, U);
        for (Q in o) U = o[Q], H = s[Q], !o.hasOwnProperty(Q) || U === H || U == null && H == null || Lt(t, n, Q, U, o, H)
    }

    function Qy(t) {
        switch (t) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }

    function NT() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, n = 0, s = performance.getEntriesByType("resource"), o = 0; o < s.length; o++) {
                var u = s[o],
                    d = u.transferSize,
                    v = u.initiatorType,
                    x = u.duration;
                if (d && x && Qy(v)) {
                    for (v = 0, x = u.responseEnd, o += 1; o < s.length; o++) {
                        var M = s[o],
                            V = M.startTime;
                        if (V > x) break;
                        var Y = M.transferSize,
                            Q = M.initiatorType;
                        Y && Qy(Q) && (M = M.responseEnd, v += Y * (M < x ? 1 : (x - V) / (M - V)))
                    }
                    if (--o, n += 8 * (d + v) / (u.duration / 1e3), t++, 10 < t) break
                }
            }
            if (0 < t) return n / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5
    }
    var uf = null,
        cf = null;

    function tl(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function Zy(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Iy(t, n) {
        if (t === 0) switch (n) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && n === "foreignObject" ? 0 : t
    }

    function ff(t, n) {
        return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
    }
    var df = null;

    function zT() {
        var t = window.event;
        return t && t.type === "popstate" ? t === df ? !1 : (df = t, !0) : (df = null, !1)
    }
    var Jy = typeof setTimeout == "function" ? setTimeout : void 0,
        jT = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Wy = typeof Promise == "function" ? Promise : void 0,
        BT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wy < "u" ? function(t) {
            return Wy.resolve(null).then(t).catch(VT)
        } : Jy;

    function VT(t) {
        setTimeout(function() {
            throw t
        })
    }

    function gi(t) {
        return t === "head"
    }

    function $y(t, n) {
        var s = n,
            o = 0;
        do {
            var u = s.nextSibling;
            if (t.removeChild(s), u && u.nodeType === 8)
                if (s = u.data, s === "/$" || s === "/&") {
                    if (o === 0) {
                        t.removeChild(u), as(n);
                        return
                    }
                    o--
                } else if (s === "$" || s === "$?" || s === "$~" || s === "$!" || s === "&") o++;
            else if (s === "html") cr(t.ownerDocument.documentElement);
            else if (s === "head") {
                s = t.ownerDocument.head, cr(s);
                for (var d = s.firstChild; d;) {
                    var v = d.nextSibling,
                        x = d.nodeName;
                    d[Ms] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && d.rel.toLowerCase() === "stylesheet" || s.removeChild(d), d = v
                }
            } else s === "body" && cr(t.ownerDocument.body);
            s = u
        } while (s);
        as(n)
    }

    function tg(t, n) {
        var s = t;
        t = 0;
        do {
            var o = s.nextSibling;
            if (s.nodeType === 1 ? n ? (s._stashedDisplay = s.style.display, s.style.display = "none") : (s.style.display = s._stashedDisplay || "", s.getAttribute("style") === "" && s.removeAttribute("style")) : s.nodeType === 3 && (n ? (s._stashedText = s.nodeValue, s.nodeValue = "") : s.nodeValue = s._stashedText || ""), o && o.nodeType === 8)
                if (s = o.data, s === "/$") {
                    if (t === 0) break;
                    t--
                } else s !== "$" && s !== "$?" && s !== "$~" && s !== "$!" || t++;
            s = o
        } while (s)
    }

    function hf(t) {
        var n = t.firstChild;
        for (n && n.nodeType === 10 && (n = n.nextSibling); n;) {
            var s = n;
            switch (n = n.nextSibling, s.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    hf(s), gu(s);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (s.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(s)
        }
    }

    function UT(t, n, s, o) {
        for (; t.nodeType === 1;) {
            var u = s;
            if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
                if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (o) {
                if (!t[Ms]) switch (n) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (d = t.getAttribute("rel"), d === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (d !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (d = t.getAttribute("src"), (d !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && d && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (n === "input" && t.type === "hidden") {
                var d = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && t.getAttribute("name") === d) return t
            } else return t;
            if (t = $e(t.nextSibling), t === null) break
        }
        return null
    }

    function PT(t, n, s) {
        if (n === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !s || (t = $e(t.nextSibling), t === null)) return null;
        return t
    }

    function eg(t, n) {
        for (; t.nodeType !== 8;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = $e(t.nextSibling), t === null)) return null;
        return t
    }

    function mf(t) {
        return t.data === "$?" || t.data === "$~"
    }

    function pf(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }

    function HT(t, n) {
        var s = t.ownerDocument;
        if (t.data === "$~") t._reactRetry = n;
        else if (t.data !== "$?" || s.readyState !== "loading") n();
        else {
            var o = function() {
                n(), s.removeEventListener("DOMContentLoaded", o)
            };
            s.addEventListener("DOMContentLoaded", o), t._reactRetry = o
        }
    }

    function $e(t) {
        for (; t != null; t = t.nextSibling) {
            var n = t.nodeType;
            if (n === 1 || n === 3) break;
            if (n === 8) {
                if (n = t.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F") break;
                if (n === "/$" || n === "/&") return null
            }
        }
        return t
    }
    var yf = null;

    function ng(t) {
        t = t.nextSibling;
        for (var n = 0; t;) {
            if (t.nodeType === 8) {
                var s = t.data;
                if (s === "/$" || s === "/&") {
                    if (n === 0) return $e(t.nextSibling);
                    n--
                } else s !== "$" && s !== "$!" && s !== "$?" && s !== "$~" && s !== "&" || n++
            }
            t = t.nextSibling
        }
        return null
    }

    function ig(t) {
        t = t.previousSibling;
        for (var n = 0; t;) {
            if (t.nodeType === 8) {
                var s = t.data;
                if (s === "$" || s === "$!" || s === "$?" || s === "$~" || s === "&") {
                    if (n === 0) return t;
                    n--
                } else s !== "/$" && s !== "/&" || n++
            }
            t = t.previousSibling
        }
        return null
    }

    function ag(t, n, s) {
        switch (n = tl(s), t) {
            case "html":
                if (t = n.documentElement, !t) throw Error(r(452));
                return t;
            case "head":
                if (t = n.head, !t) throw Error(r(453));
                return t;
            case "body":
                if (t = n.body, !t) throw Error(r(454));
                return t;
            default:
                throw Error(r(451))
        }
    }

    function cr(t) {
        for (var n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
        gu(t)
    }
    var tn = new Map,
        sg = new Set;

    function el(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var Xn = W.d;
    W.d = {
        f: kT,
        r: qT,
        D: KT,
        C: YT,
        L: GT,
        m: XT,
        X: QT,
        S: FT,
        M: ZT
    };

    function kT() {
        var t = Xn.f(),
            n = Xo();
        return t || n
    }

    function qT(t) {
        var n = Ea(t);
        n !== null && n.tag === 5 && n.type === "form" ? Tp(n) : Xn.r(t)
    }
    var es = typeof document > "u" ? null : document;

    function rg(t, n, s) {
        var o = es;
        if (o && typeof n == "string" && n) {
            var u = Xe(n);
            u = 'link[rel="' + t + '"][href="' + u + '"]', typeof s == "string" && (u += '[crossorigin="' + s + '"]'), sg.has(u) || (sg.add(u), t = {
                rel: t,
                crossOrigin: s,
                href: n
            }, o.querySelector(u) === null && (n = o.createElement("link"), me(n, "link", t), re(n), o.head.appendChild(n)))
        }
    }

    function KT(t) {
        Xn.D(t), rg("dns-prefetch", t, null)
    }

    function YT(t, n) {
        Xn.C(t, n), rg("preconnect", t, n)
    }

    function GT(t, n, s) {
        Xn.L(t, n, s);
        var o = es;
        if (o && t && n) {
            var u = 'link[rel="preload"][as="' + Xe(n) + '"]';
            n === "image" && s && s.imageSrcSet ? (u += '[imagesrcset="' + Xe(s.imageSrcSet) + '"]', typeof s.imageSizes == "string" && (u += '[imagesizes="' + Xe(s.imageSizes) + '"]')) : u += '[href="' + Xe(t) + '"]';
            var d = u;
            switch (n) {
                case "style":
                    d = ns(t);
                    break;
                case "script":
                    d = is(t)
            }
            tn.has(d) || (t = g({
                rel: "preload",
                href: n === "image" && s && s.imageSrcSet ? void 0 : t,
                as: n
            }, s), tn.set(d, t), o.querySelector(u) !== null || n === "style" && o.querySelector(fr(d)) || n === "script" && o.querySelector(dr(d)) || (n = o.createElement("link"), me(n, "link", t), re(n), o.head.appendChild(n)))
        }
    }

    function XT(t, n) {
        Xn.m(t, n);
        var s = es;
        if (s && t) {
            var o = n && typeof n.as == "string" ? n.as : "script",
                u = 'link[rel="modulepreload"][as="' + Xe(o) + '"][href="' + Xe(t) + '"]',
                d = u;
            switch (o) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    d = is(t)
            }
            if (!tn.has(d) && (t = g({
                    rel: "modulepreload",
                    href: t
                }, n), tn.set(d, t), s.querySelector(u) === null)) {
                switch (o) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (s.querySelector(dr(d))) return
                }
                o = s.createElement("link"), me(o, "link", t), re(o), s.head.appendChild(o)
            }
        }
    }

    function FT(t, n, s) {
        Xn.S(t, n, s);
        var o = es;
        if (o && t) {
            var u = Aa(o).hoistableStyles,
                d = ns(t);
            n = n || "default";
            var v = u.get(d);
            if (!v) {
                var x = {
                    loading: 0,
                    preload: null
                };
                if (v = o.querySelector(fr(d))) x.loading = 5;
                else {
                    t = g({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": n
                    }, s), (s = tn.get(d)) && gf(t, s);
                    var M = v = o.createElement("link");
                    re(M), me(M, "link", t), M._p = new Promise(function(V, Y) {
                        M.onload = V, M.onerror = Y
                    }), M.addEventListener("load", function() {
                        x.loading |= 1
                    }), M.addEventListener("error", function() {
                        x.loading |= 2
                    }), x.loading |= 4, nl(v, n, o)
                }
                v = {
                    type: "stylesheet",
                    instance: v,
                    count: 1,
                    state: x
                }, u.set(d, v)
            }
        }
    }

    function QT(t, n) {
        Xn.X(t, n);
        var s = es;
        if (s && t) {
            var o = Aa(s).hoistableScripts,
                u = is(t),
                d = o.get(u);
            d || (d = s.querySelector(dr(u)), d || (t = g({
                src: t,
                async: !0
            }, n), (n = tn.get(u)) && vf(t, n), d = s.createElement("script"), re(d), me(d, "link", t), s.head.appendChild(d)), d = {
                type: "script",
                instance: d,
                count: 1,
                state: null
            }, o.set(u, d))
        }
    }

    function ZT(t, n) {
        Xn.M(t, n);
        var s = es;
        if (s && t) {
            var o = Aa(s).hoistableScripts,
                u = is(t),
                d = o.get(u);
            d || (d = s.querySelector(dr(u)), d || (t = g({
                src: t,
                async: !0,
                type: "module"
            }, n), (n = tn.get(u)) && vf(t, n), d = s.createElement("script"), re(d), me(d, "link", t), s.head.appendChild(d)), d = {
                type: "script",
                instance: d,
                count: 1,
                state: null
            }, o.set(u, d))
        }
    }

    function og(t, n, s, o) {
        var u = (u = pt.current) ? el(u) : null;
        if (!u) throw Error(r(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof s.precedence == "string" && typeof s.href == "string" ? (n = ns(s.href), s = Aa(u).hoistableStyles, o = s.get(n), o || (o = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, s.set(n, o)), o) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (s.rel === "stylesheet" && typeof s.href == "string" && typeof s.precedence == "string") {
                    t = ns(s.href);
                    var d = Aa(u).hoistableStyles,
                        v = d.get(t);
                    if (v || (u = u.ownerDocument || u, v = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, d.set(t, v), (d = u.querySelector(fr(t))) && !d._p && (v.instance = d, v.state.loading = 5), tn.has(t) || (s = {
                            rel: "preload",
                            as: "style",
                            href: s.href,
                            crossOrigin: s.crossOrigin,
                            integrity: s.integrity,
                            media: s.media,
                            hrefLang: s.hrefLang,
                            referrerPolicy: s.referrerPolicy
                        }, tn.set(t, s), d || IT(u, t, s, v.state))), n && o === null) throw Error(r(528, ""));
                    return v
                }
                if (n && o !== null) throw Error(r(529, ""));
                return null;
            case "script":
                return n = s.async, s = s.src, typeof s == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = is(s), s = Aa(u).hoistableScripts, o = s.get(n), o || (o = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, s.set(n, o)), o) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(r(444, t))
        }
    }

    function ns(t) {
        return 'href="' + Xe(t) + '"'
    }

    function fr(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function lg(t) {
        return g({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function IT(t, n, s, o) {
        t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = t.createElement("link"), o.preload = n, n.addEventListener("load", function() {
            return o.loading |= 1
        }), n.addEventListener("error", function() {
            return o.loading |= 2
        }), me(n, "link", s), re(n), t.head.appendChild(n))
    }

    function is(t) {
        return '[src="' + Xe(t) + '"]'
    }

    function dr(t) {
        return "script[async]" + t
    }

    function ug(t, n, s) {
        if (n.count++, n.instance === null) switch (n.type) {
            case "style":
                var o = t.querySelector('style[data-href~="' + Xe(s.href) + '"]');
                if (o) return n.instance = o, re(o), o;
                var u = g({}, s, {
                    "data-href": s.href,
                    "data-precedence": s.precedence,
                    href: null,
                    precedence: null
                });
                return o = (t.ownerDocument || t).createElement("style"), re(o), me(o, "style", u), nl(o, s.precedence, t), n.instance = o;
            case "stylesheet":
                u = ns(s.href);
                var d = t.querySelector(fr(u));
                if (d) return n.state.loading |= 4, n.instance = d, re(d), d;
                o = lg(s), (u = tn.get(u)) && gf(o, u), d = (t.ownerDocument || t).createElement("link"), re(d);
                var v = d;
                return v._p = new Promise(function(x, M) {
                    v.onload = x, v.onerror = M
                }), me(d, "link", o), n.state.loading |= 4, nl(d, s.precedence, t), n.instance = d;
            case "script":
                return d = is(s.src), (u = t.querySelector(dr(d))) ? (n.instance = u, re(u), u) : (o = s, (u = tn.get(d)) && (o = g({}, s), vf(o, u)), t = t.ownerDocument || t, u = t.createElement("script"), re(u), me(u, "link", o), t.head.appendChild(u), n.instance = u);
            case "void":
                return null;
            default:
                throw Error(r(443, n.type))
        } else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, nl(o, s.precedence, t));
        return n.instance
    }

    function nl(t, n, s) {
        for (var o = s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = o.length ? o[o.length - 1] : null, d = u, v = 0; v < o.length; v++) {
            var x = o[v];
            if (x.dataset.precedence === n) d = x;
            else if (d !== u) break
        }
        d ? d.parentNode.insertBefore(t, d.nextSibling) : (n = s.nodeType === 9 ? s.head : s, n.insertBefore(t, n.firstChild))
    }

    function gf(t, n) {
        t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.title == null && (t.title = n.title)
    }

    function vf(t, n) {
        t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.integrity == null && (t.integrity = n.integrity)
    }
    var il = null;

    function cg(t, n, s) {
        if (il === null) {
            var o = new Map,
                u = il = new Map;
            u.set(s, o)
        } else u = il, o = u.get(s), o || (o = new Map, u.set(s, o));
        if (o.has(t)) return o;
        for (o.set(t, null), s = s.getElementsByTagName(t), u = 0; u < s.length; u++) {
            var d = s[u];
            if (!(d[Ms] || d[ce] || t === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
                var v = d.getAttribute(n) || "";
                v = t + v;
                var x = o.get(v);
                x ? x.push(d) : o.set(v, [d])
            }
        }
        return o
    }

    function fg(t, n, s) {
        t = t.ownerDocument || t, t.head.insertBefore(s, n === "title" ? t.querySelector("head > title") : null)
    }

    function JT(t, n, s) {
        if (s === 1 || n.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
                return !0;
            case "link":
                if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
                return n.rel === "stylesheet" ? (t = n.disabled, typeof n.precedence == "string" && t == null) : !0;
            case "script":
                if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0
        }
        return !1
    }

    function dg(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }

    function WT(t, n, s, o) {
        if (s.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== !1) && (s.state.loading & 4) === 0) {
            if (s.instance === null) {
                var u = ns(o.href),
                    d = n.querySelector(fr(u));
                if (d) {
                    n = d._p, n !== null && typeof n == "object" && typeof n.then == "function" && (t.count++, t = al.bind(t), n.then(t, t)), s.state.loading |= 4, s.instance = d, re(d);
                    return
                }
                d = n.ownerDocument || n, o = lg(o), (u = tn.get(u)) && gf(o, u), d = d.createElement("link"), re(d);
                var v = d;
                v._p = new Promise(function(x, M) {
                    v.onload = x, v.onerror = M
                }), me(d, "link", o), s.instance = d
            }
            t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(s, n), (n = s.state.preload) && (s.state.loading & 3) === 0 && (t.count++, s = al.bind(t), n.addEventListener("load", s), n.addEventListener("error", s))
        }
    }
    var Sf = 0;

    function $T(t, n) {
        return t.stylesheets && t.count === 0 && rl(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(s) {
            var o = setTimeout(function() {
                if (t.stylesheets && rl(t, t.stylesheets), t.unsuspend) {
                    var d = t.unsuspend;
                    t.unsuspend = null, d()
                }
            }, 6e4 + n);
            0 < t.imgBytes && Sf === 0 && (Sf = 62500 * NT());
            var u = setTimeout(function() {
                if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && rl(t, t.stylesheets), t.unsuspend)) {
                    var d = t.unsuspend;
                    t.unsuspend = null, d()
                }
            }, (t.imgBytes > Sf ? 50 : 800) + n);
            return t.unsuspend = s,
                function() {
                    t.unsuspend = null, clearTimeout(o), clearTimeout(u)
                }
        } : null
    }

    function al() {
        if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets) rl(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var sl = null;

    function rl(t, n) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, sl = new Map, n.forEach(tE, t), sl = null, al.call(t))
    }

    function tE(t, n) {
        if (!(n.state.loading & 4)) {
            var s = sl.get(t);
            if (s) var o = s.get(null);
            else {
                s = new Map, sl.set(t, s);
                for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < u.length; d++) {
                    var v = u[d];
                    (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (s.set(v.dataset.precedence, v), o = v)
                }
                o && s.set(null, o)
            }
            u = n.instance, v = u.getAttribute("data-precedence"), d = s.get(v) || o, d === o && s.set(null, u), s.set(v, u), this.count++, o = al.bind(this), u.addEventListener("load", o), u.addEventListener("error", o), d ? d.parentNode.insertBefore(u, d.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), n.state.loading |= 4
        }
    }
    var hr = {
        $$typeof: L,
        Provider: null,
        Consumer: null,
        _currentValue: et,
        _currentValue2: et,
        _threadCount: 0
    };

    function eE(t, n, s, o, u, d, v, x, M) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hu(0), this.hiddenUpdates = hu(null), this.identifierPrefix = o, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = M, this.incompleteTransitions = new Map
    }

    function hg(t, n, s, o, u, d, v, x, M, V, Y, Q) {
        return t = new eE(t, n, s, v, M, V, Y, Q, x), n = 1, d === !0 && (n |= 24), d = Ve(3, null, null, n), t.current = d, d.stateNode = t, n = Ju(), n.refCount++, t.pooledCache = n, n.refCount++, d.memoizedState = {
            element: o,
            isDehydrated: s,
            cache: n
        }, ec(d), t
    }

    function mg(t) {
        return t ? (t = za, t) : za
    }

    function pg(t, n, s, o, u, d) {
        u = mg(u), o.context === null ? o.context = u : o.pendingContext = u, o = ri(n), o.payload = {
            element: s
        }, d = d === void 0 ? null : d, d !== null && (o.callback = d), s = oi(t, o, n), s !== null && (De(s, t, n), Gs(s, t, n))
    }

    function yg(t, n) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var s = t.retryLane;
            t.retryLane = s !== 0 && s < n ? s : n
        }
    }

    function bf(t, n) {
        yg(t, n), (t = t.alternate) && yg(t, n)
    }

    function gg(t) {
        if (t.tag === 13 || t.tag === 31) {
            var n = Gi(t, 67108864);
            n !== null && De(n, t, 67108864), bf(t, 67108864)
        }
    }

    function vg(t) {
        if (t.tag === 13 || t.tag === 31) {
            var n = qe();
            n = mu(n);
            var s = Gi(t, n);
            s !== null && De(s, t, n), bf(t, n)
        }
    }
    var ol = !0;

    function nE(t, n, s, o) {
        var u = P.T;
        P.T = null;
        var d = W.p;
        try {
            W.p = 2, xf(t, n, s, o)
        } finally {
            W.p = d, P.T = u
        }
    }

    function iE(t, n, s, o) {
        var u = P.T;
        P.T = null;
        var d = W.p;
        try {
            W.p = 8, xf(t, n, s, o)
        } finally {
            W.p = d, P.T = u
        }
    }

    function xf(t, n, s, o) {
        if (ol) {
            var u = Tf(o);
            if (u === null) of (t, n, o, ll, s), bg(t, o);
            else if (sE(u, t, n, s, o)) o.stopPropagation();
            else if (bg(t, o), n & 4 && -1 < aE.indexOf(t)) {
                for (; u !== null;) {
                    var d = Ea(u);
                    if (d !== null) switch (d.tag) {
                        case 3:
                            if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                                var v = Hi(d.pendingLanes);
                                if (v !== 0) {
                                    var x = d;
                                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; v;) {
                                        var M = 1 << 31 - je(v);
                                        x.entanglements[1] |= M, v &= ~M
                                    }
                                    Sn(d), (Mt & 6) === 0 && (Yo = ve() + 500, or(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            x = Gi(d, 2), x !== null && De(x, d, 2), Xo(), bf(d, 2)
                    }
                    if (d = Tf(o), d === null && of (t, n, o, ll, s), d === u) break;
                    u = d
                }
                u !== null && o.stopPropagation()
            } else of(t, n, o, null, s)
        }
    }

    function Tf(t) {
        return t = Eu(t), Ef(t)
    }
    var ll = null;

    function Ef(t) {
        if (ll = null, t = Ta(t), t !== null) {
            var n = c(t);
            if (n === null) t = null;
            else {
                var s = n.tag;
                if (s === 13) {
                    if (t = f(n), t !== null) return t;
                    t = null
                } else if (s === 31) {
                    if (t = h(n), t !== null) return t;
                    t = null
                } else if (s === 3) {
                    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
                    t = null
                } else n !== t && (t = null)
            }
        }
        return ll = t, null
    }

    function Sg(t) {
        switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Ut()) {
                    case ue:
                        return 2;
                    case pn:
                        return 8;
                    case ba:
                    case Y1:
                        return 32;
                    case Ch:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Af = !1,
        vi = null,
        Si = null,
        bi = null,
        mr = new Map,
        pr = new Map,
        xi = [],
        aE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function bg(t, n) {
        switch (t) {
            case "focusin":
            case "focusout":
                vi = null;
                break;
            case "dragenter":
            case "dragleave":
                Si = null;
                break;
            case "mouseover":
            case "mouseout":
                bi = null;
                break;
            case "pointerover":
            case "pointerout":
                mr.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                pr.delete(n.pointerId)
        }
    }

    function yr(t, n, s, o, u, d) {
        return t === null || t.nativeEvent !== d ? (t = {
            blockedOn: n,
            domEventName: s,
            eventSystemFlags: o,
            nativeEvent: d,
            targetContainers: [u]
        }, n !== null && (n = Ea(n), n !== null && gg(n)), t) : (t.eventSystemFlags |= o, n = t.targetContainers, u !== null && n.indexOf(u) === -1 && n.push(u), t)
    }

    function sE(t, n, s, o, u) {
        switch (n) {
            case "focusin":
                return vi = yr(vi, t, n, s, o, u), !0;
            case "dragenter":
                return Si = yr(Si, t, n, s, o, u), !0;
            case "mouseover":
                return bi = yr(bi, t, n, s, o, u), !0;
            case "pointerover":
                var d = u.pointerId;
                return mr.set(d, yr(mr.get(d) || null, t, n, s, o, u)), !0;
            case "gotpointercapture":
                return d = u.pointerId, pr.set(d, yr(pr.get(d) || null, t, n, s, o, u)), !0
        }
        return !1
    }

    function xg(t) {
        var n = Ta(t.target);
        if (n !== null) {
            var s = c(n);
            if (s !== null) {
                if (n = s.tag, n === 13) {
                    if (n = f(s), n !== null) {
                        t.blockedOn = n, jh(t.priority, function() {
                            vg(s)
                        });
                        return
                    }
                } else if (n === 31) {
                    if (n = h(s), n !== null) {
                        t.blockedOn = n, jh(t.priority, function() {
                            vg(s)
                        });
                        return
                    }
                } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function ul(t) {
        if (t.blockedOn !== null) return !1;
        for (var n = t.targetContainers; 0 < n.length;) {
            var s = Tf(t.nativeEvent);
            if (s === null) {
                s = t.nativeEvent;
                var o = new s.constructor(s.type, s);
                Tu = o, s.target.dispatchEvent(o), Tu = null
            } else return n = Ea(s), n !== null && gg(n), t.blockedOn = s, !1;
            n.shift()
        }
        return !0
    }

    function Tg(t, n, s) {
        ul(t) && s.delete(n)
    }

    function rE() {
        Af = !1, vi !== null && ul(vi) && (vi = null), Si !== null && ul(Si) && (Si = null), bi !== null && ul(bi) && (bi = null), mr.forEach(Tg), pr.forEach(Tg)
    }

    function cl(t, n) {
        t.blockedOn === n && (t.blockedOn = null, Af || (Af = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, rE)))
    }
    var fl = null;

    function Eg(t) {
        fl !== t && (fl = t, e.unstable_scheduleCallback(e.unstable_NormalPriority, function() {
            fl === t && (fl = null);
            for (var n = 0; n < t.length; n += 3) {
                var s = t[n],
                    o = t[n + 1],
                    u = t[n + 2];
                if (typeof o != "function") {
                    if (Ef(o || s) === null) continue;
                    break
                }
                var d = Ea(s);
                d !== null && (t.splice(n, 3), n -= 3, xc(d, {
                    pending: !0,
                    data: u,
                    method: s.method,
                    action: o
                }, o, u))
            }
        }))
    }

    function as(t) {
        function n(M) {
            return cl(M, t)
        }
        vi !== null && cl(vi, t), Si !== null && cl(Si, t), bi !== null && cl(bi, t), mr.forEach(n), pr.forEach(n);
        for (var s = 0; s < xi.length; s++) {
            var o = xi[s];
            o.blockedOn === t && (o.blockedOn = null)
        }
        for (; 0 < xi.length && (s = xi[0], s.blockedOn === null);) xg(s), s.blockedOn === null && xi.shift();
        if (s = (t.ownerDocument || t).$$reactFormReplay, s != null)
            for (o = 0; o < s.length; o += 3) {
                var u = s[o],
                    d = s[o + 1],
                    v = u[Ae] || null;
                if (typeof d == "function") v || Eg(s);
                else if (v) {
                    var x = null;
                    if (d && d.hasAttribute("formAction")) {
                        if (u = d, v = d[Ae] || null) x = v.formAction;
                        else if (Ef(u) !== null) continue
                    } else x = v.action;
                    typeof x == "function" ? s[o + 1] = x : (s.splice(o, 3), o -= 3), Eg(s)
                }
            }
    }

    function Ag() {
        function t(d) {
            d.canIntercept && d.info === "react-transition" && d.intercept({
                handler: function() {
                    return new Promise(function(v) {
                        return u = v
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function n() {
            u !== null && (u(), u = null), o || setTimeout(s, 20)
        }

        function s() {
            if (!o && !navigation.transition) {
                var d = navigation.currentEntry;
                d && d.url != null && navigation.navigate(d.url, {
                    state: d.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var o = !1,
                u = null;
            return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(s, 100),
                function() {
                    o = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), u !== null && (u(), u = null)
                }
        }
    }

    function wf(t) {
        this._internalRoot = t
    }
    dl.prototype.render = wf.prototype.render = function(t) {
        var n = this._internalRoot;
        if (n === null) throw Error(r(409));
        var s = n.current,
            o = qe();
        pg(s, o, t, n, null, null)
    }, dl.prototype.unmount = wf.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var n = t.containerInfo;
            pg(t.current, 2, null, t, null, null), Xo(), n[xa] = null
        }
    };

    function dl(t) {
        this._internalRoot = t
    }
    dl.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var n = zh();
            t = {
                blockedOn: null,
                target: t,
                priority: n
            };
            for (var s = 0; s < xi.length && n !== 0 && n < xi[s].priority; s++);
            xi.splice(s, 0, t), s === 0 && xg(t)
        }
    };
    var wg = i.version;
    if (wg !== "19.2.5") throw Error(r(527, wg, "19.2.5"));
    W.findDOMNode = function(t) {
        var n = t._reactInternals;
        if (n === void 0) throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
        return t = m(n), t = t !== null ? y(t) : null, t = t === null ? null : t.stateNode, t
    };
    var oE = {
        bundleType: 0,
        version: "19.2.5",
        rendererPackageName: "react-dom",
        currentDispatcherRef: P,
        reconcilerVersion: "19.2.5"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!hl.isDisabled && hl.supportsFiber) try {
            ws = hl.inject(oE), ze = hl
        } catch {}
    }
    return vr.createRoot = function(t, n) {
        if (!l(t)) throw Error(r(299));
        var s = !1,
            o = "",
            u = Lp,
            d = Np,
            v = zp;
        return n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError)), n = hg(t, 1, !1, null, null, s, o, null, u, d, v, Ag), t[xa] = n.current, rf(t), new wf(n)
    }, vr.hydrateRoot = function(t, n, s) {
        if (!l(t)) throw Error(r(299));
        var o = !1,
            u = "",
            d = Lp,
            v = Np,
            x = zp,
            M = null;
        return s != null && (s.unstable_strictMode === !0 && (o = !0), s.identifierPrefix !== void 0 && (u = s.identifierPrefix), s.onUncaughtError !== void 0 && (d = s.onUncaughtError), s.onCaughtError !== void 0 && (v = s.onCaughtError), s.onRecoverableError !== void 0 && (x = s.onRecoverableError), s.formState !== void 0 && (M = s.formState)), n = hg(t, 1, !0, n, s ? ? null, o, u, M, d, v, x, Ag), n.context = mg(null), s = n.current, o = qe(), o = mu(o), u = ri(o), u.callback = null, oi(s, u, o), s = o, n.current.lanes = s, _s(n, s), Sn(n), t[xa] = n.current, rf(t), new dl(n)
    }, vr.version = "19.2.5", vr
}
var jg;

function gE() {
    if (jg) return Mf.exports;
    jg = 1;

    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (i) {
            console.error(i)
        }
    }
    return e(), Mf.exports = yE(), Mf.exports
}
var vE = gE(),
    SE = "__TSS_CONTEXT",
    ud = Symbol.for("TSS_SERVER_FUNCTION"),
    bE = "application/x-tss-framed",
    Fn = {
        JSON: 0,
        CHUNK: 1,
        END: 2,
        ERROR: 3
    },
    xE = /;\s*v=(\d+)/;

function TE(e) {
    const i = e.match(xE);
    return i ? parseInt(i[1], 10) : void 0
}

function EE(e) {
    const i = TE(e);
    if (i !== void 0 && i !== 1) throw new Error(`Incompatible framed protocol version: server=${i}, client=1. Please ensure client and server are using compatible versions.`)
}
var K0 = () => window.__TSS_START_OPTIONS__,
    Y0 = !1;

function zr(e) {
    return e[e.length - 1]
}

function AE(e) {
    return typeof e == "function"
}

function Ri(e, i) {
    return AE(e) ? e(i) : e
}
var wE = Object.prototype.hasOwnProperty,
    Bg = Object.prototype.propertyIsEnumerable,
    RE = () => Object.create(null),
    aa = (e, i) => _i(e, i, RE);

function _i(e, i, a = () => ({}), r = 0) {
    if (e === i) return e;
    if (r > 500) return i;
    const l = i,
        c = Pg(e) && Pg(l);
    if (!c && !(ps(e) && ps(l))) return l;
    const f = c ? e : Vg(e);
    if (!f) return l;
    const h = c ? l : Vg(l);
    if (!h) return l;
    const p = f.length,
        m = h.length,
        y = c ? new Array(m) : a();
    let g = 0;
    for (let S = 0; S < m; S++) {
        const b = c ? S : h[S],
            E = e[b],
            _ = l[b];
        if (E === _) {
            y[b] = E, (c ? S < p : wE.call(e, b)) && g++;
            continue
        }
        if (E === null || _ === null || typeof E != "object" || typeof _ != "object") {
            y[b] = _;
            continue
        }
        const A = _i(E, _, a, r + 1);
        y[b] = A, A === E && g++
    }
    return p === m && g === p ? e : y
}

function Vg(e) {
    const i = Object.getOwnPropertyNames(e);
    for (const l of i)
        if (!Bg.call(e, l)) return !1;
    const a = Object.getOwnPropertySymbols(e);
    if (a.length === 0) return i;
    const r = i;
    for (const l of a) {
        if (!Bg.call(e, l)) return !1;
        r.push(l)
    }
    return r
}

function ps(e) {
    if (!Ug(e)) return !1;
    const i = e.constructor;
    if (typeof i > "u") return !0;
    const a = i.prototype;
    return !(!Ug(a) || !a.hasOwnProperty("isPrototypeOf"))
}

function Ug(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function Pg(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Oe(e, i, a) {
    if (e === i) return !0;
    if (typeof e != typeof i) return !1;
    if (Array.isArray(e) && Array.isArray(i)) {
        if (e.length !== i.length) return !1;
        for (let r = 0, l = e.length; r < l; r++)
            if (!Oe(e[r], i[r], a)) return !1;
        return !0
    }
    if (ps(e) && ps(i)) {
        const r = a ? .ignoreUndefined ? ? !0;
        if (a ? .partial) {
            for (const f in i)
                if ((!r || i[f] !== void 0) && !Oe(e[f], i[f], a)) return !1;
            return !0
        }
        let l = 0;
        if (!r) l = Object.keys(e).length;
        else
            for (const f in e) e[f] !== void 0 && l++;
        let c = 0;
        for (const f in i)
            if ((!r || i[f] !== void 0) && (c++, c > l || !Oe(e[f], i[f], a))) return !1;
        return l === c
    }
    return !1
}

function ya(e) {
    let i, a;
    const r = new Promise((l, c) => {
        i = l, a = c
    });
    return r.status = "pending", r.resolve = l => {
        r.status = "resolved", r.value = l, i(l), e ? .(l)
    }, r.reject = l => {
        r.status = "rejected", a(l)
    }, r
}

function _E(e) {
    return typeof e ? .message != "string" ? !1 : e.message.startsWith("Failed to fetch dynamically imported module") || e.message.startsWith("error loading dynamically imported module") || e.message.startsWith("Importing a module script failed")
}

function jr(e) {
    return !!(e && typeof e == "object" && typeof e.then == "function")
}

function ME(e) {
    return e.replace(/[\x00-\x1f\x7f]/g, "")
}

function Hg(e) {
    let i;
    try {
        i = decodeURI(e)
    } catch {
        i = e.replaceAll(/%[0-9A-F]{2}/gi, a => {
            try {
                return decodeURI(a)
            } catch {
                return a
            }
        })
    }
    return ME(i)
}
var CE = ["http:", "https:", "mailto:", "tel:"];

function Bl(e, i) {
    if (!e) return !1;
    try {
        const a = new URL(e);
        return !i.has(a.protocol)
    } catch {
        return !1
    }
}
var DE = {
        "&": "\\u0026",
        ">": "\\u003e",
        "<": "\\u003c",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    },
    OE = /[&><\u2028\u2029]/g;

function LE(e) {
    return e.replace(OE, i => DE[i])
}

function Sr(e) {
    if (!e) return {
        path: e,
        handledProtocolRelativeURL: !1
    };
    if (!/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith("//")) return {
        path: e,
        handledProtocolRelativeURL: !1
    };
    const i = /%25|%5C/gi;
    let a = 0,
        r = "",
        l;
    for (;
        (l = i.exec(e)) !== null;) r += Hg(e.slice(a, l.index)) + l[0], a = i.lastIndex;
    r = r + Hg(a ? e.slice(a) : e);
    let c = !1;
    return r.startsWith("//") && (c = !0, r = "/" + r.replace(/^\/+/, "")), {
        path: r,
        handledProtocolRelativeURL: c
    }
}

function NE(e) {
    return /\s|[^\u0000-\u007F]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e
}

function zE(e, i) {
    if (e === i) return !0;
    if (e.length !== i.length) return !1;
    for (let a = 0; a < e.length; a++)
        if (e[a] !== i[a]) return !1;
    return !0
}

function Ne() {
    throw new Error("Invariant failed")
}

function Br(e) {
    const i = new Map;
    let a, r;
    const l = c => {
        c.next && (c.prev ? (c.prev.next = c.next, c.next.prev = c.prev, c.next = void 0, r && (r.next = c, c.prev = r)) : (c.next.prev = void 0, a = c.next, c.next = void 0, r && (c.prev = r, r.next = c)), r = c)
    };
    return {
        get(c) {
            const f = i.get(c);
            if (f) return l(f), f.value
        },
        set(c, f) {
            if (i.size >= e && a) {
                const p = a;
                i.delete(p.key), p.next && (a = p.next, p.next.prev = void 0), p === r && (r = void 0)
            }
            const h = i.get(c);
            if (h) h.value = f, l(h);
            else {
                const p = {
                    key: c,
                    value: f,
                    prev: r
                };
                r && (r.next = p), r = p, a || (a = p), i.set(c, p)
            }
        },
        clear() {
            i.clear(), a = void 0, r = void 0
        }
    }
}
var oa = 4,
    G0 = 5;

function jE(e) {
    const i = e.indexOf("{");
    if (i === -1) return null;
    const a = e.indexOf("}", i);
    return a === -1 || i + 1 >= e.length ? null : [i, a]
}

function Yd(e, i, a = new Uint16Array(6)) {
    const r = e.indexOf("/", i),
        l = r === -1 ? e.length : r,
        c = e.substring(i, l);
    if (!c || !c.includes("$")) return a[0] = 0, a[1] = i, a[2] = i, a[3] = l, a[4] = l, a[5] = l, a;
    if (c === "$") {
        const h = e.length;
        return a[0] = 2, a[1] = i, a[2] = i, a[3] = h, a[4] = h, a[5] = h, a
    }
    if (c.charCodeAt(0) === 36) return a[0] = 1, a[1] = i, a[2] = i + 1, a[3] = l, a[4] = l, a[5] = l, a;
    const f = jE(c);
    if (f) {
        const [h, p] = f, m = c.charCodeAt(h + 1);
        if (m === 45) {
            if (h + 2 < c.length && c.charCodeAt(h + 2) === 36) {
                const y = h + 3,
                    g = p;
                if (y < g) return a[0] = 3, a[1] = i + h, a[2] = i + y, a[3] = i + g, a[4] = i + p + 1, a[5] = l, a
            }
        } else if (m === 36) {
            const y = h + 1,
                g = h + 2;
            return g === p ? (a[0] = 2, a[1] = i + h, a[2] = i + y, a[3] = i + g, a[4] = i + p + 1, a[5] = e.length, a) : (a[0] = 1, a[1] = i + h, a[2] = i + g, a[3] = i + p, a[4] = i + p + 1, a[5] = l, a)
        }
    }
    return a[0] = 0, a[1] = i, a[2] = i, a[3] = l, a[4] = l, a[5] = l, a
}

function $l(e, i, a, r, l, c, f) {
    f ? .(a);
    let h = r; {
        const p = a.fullPath ? ? a.from,
            m = p.length,
            y = a.options ? .caseSensitive ? ? e,
            g = !!(a.options ? .params ? .parse && a.options ? .skipRouteOnParseError ? .params);
        for (; h < m;) {
            const b = Yd(p, h, i);
            let E;
            const _ = h,
                A = b[5];
            switch (h = A + 1, c++, b[0]) {
                case 0:
                    {
                        const R = p.substring(b[2], b[3]);
                        if (y) {
                            const N = l.static ? .get(R);
                            if (N) E = N;
                            else {
                                l.static ? ? = new Map;
                                const L = la(a.fullPath ? ? a.from);
                                L.parent = l, L.depth = c, E = L, l.static.set(R, L)
                            }
                        } else {
                            const N = R.toLowerCase(),
                                L = l.staticInsensitive ? .get(N);
                            if (L) E = L;
                            else {
                                l.staticInsensitive ? ? = new Map;
                                const O = la(a.fullPath ? ? a.from);
                                O.parent = l, O.depth = c, E = O, l.staticInsensitive.set(N, O)
                            }
                        }
                        break
                    }
                case 1:
                    {
                        const R = p.substring(_, b[1]),
                            N = p.substring(b[4], A),
                            L = y && !!(R || N),
                            O = R ? L ? R : R.toLowerCase() : void 0,
                            F = N ? L ? N : N.toLowerCase() : void 0,
                            J = !g && l.dynamic ? .find(q => !q.skipOnParamError && q.caseSensitive === L && q.prefix === O && q.suffix === F);
                        if (J) E = J;
                        else {
                            const q = Nf(1, a.fullPath ? ? a.from, L, O, F);
                            E = q, q.depth = c, q.parent = l, l.dynamic ? ? = [], l.dynamic.push(q)
                        }
                        break
                    }
                case 3:
                    {
                        const R = p.substring(_, b[1]),
                            N = p.substring(b[4], A),
                            L = y && !!(R || N),
                            O = R ? L ? R : R.toLowerCase() : void 0,
                            F = N ? L ? N : N.toLowerCase() : void 0,
                            J = !g && l.optional ? .find(q => !q.skipOnParamError && q.caseSensitive === L && q.prefix === O && q.suffix === F);
                        if (J) E = J;
                        else {
                            const q = Nf(3, a.fullPath ? ? a.from, L, O, F);
                            E = q, q.parent = l, q.depth = c, l.optional ? ? = [], l.optional.push(q)
                        }
                        break
                    }
                case 2:
                    {
                        const R = p.substring(_, b[1]),
                            N = p.substring(b[4], A),
                            L = y && !!(R || N),
                            O = R ? L ? R : R.toLowerCase() : void 0,
                            F = N ? L ? N : N.toLowerCase() : void 0,
                            J = Nf(2, a.fullPath ? ? a.from, L, O, F);E = J,
                        J.parent = l,
                        J.depth = c,
                        l.wildcard ? ? = [],
                        l.wildcard.push(J)
                    }
            }
            l = E
        }
        if (g && a.children && !a.isRoot && a.id && a.id.charCodeAt(a.id.lastIndexOf("/") + 1) === 95) {
            const b = la(a.fullPath ? ? a.from);
            b.kind = G0, b.parent = l, c++, b.depth = c, l.pathless ? ? = [], l.pathless.push(b), l = b
        }
        const S = (a.path || !a.children) && !a.isRoot;
        if (S && p.endsWith("/")) {
            const b = la(a.fullPath ? ? a.from);
            b.kind = oa, b.parent = l, c++, b.depth = c, l.index = b, l = b
        }
        l.parse = a.options ? .params ? .parse ? ? null, l.skipOnParamError = g, l.parsingPriority = a.options ? .skipRouteOnParseError ? .priority ? ? 0, S && !l.route && (l.route = a, l.fullPath = a.fullPath ? ? a.from)
    }
    if (a.children)
        for (const p of a.children) $l(e, i, p, h, l, c, f)
}

function Lf(e, i) {
    if (e.skipOnParamError && !i.skipOnParamError) return -1;
    if (!e.skipOnParamError && i.skipOnParamError) return 1;
    if (e.skipOnParamError && i.skipOnParamError && (e.parsingPriority || i.parsingPriority)) return i.parsingPriority - e.parsingPriority;
    if (e.prefix && i.prefix && e.prefix !== i.prefix) {
        if (e.prefix.startsWith(i.prefix)) return -1;
        if (i.prefix.startsWith(e.prefix)) return 1
    }
    if (e.suffix && i.suffix && e.suffix !== i.suffix) {
        if (e.suffix.endsWith(i.suffix)) return -1;
        if (i.suffix.endsWith(e.suffix)) return 1
    }
    return e.prefix && !i.prefix ? -1 : !e.prefix && i.prefix ? 1 : e.suffix && !i.suffix ? -1 : !e.suffix && i.suffix ? 1 : e.caseSensitive && !i.caseSensitive ? -1 : !e.caseSensitive && i.caseSensitive ? 1 : 0
}

function Ai(e) {
    if (e.pathless)
        for (const i of e.pathless) Ai(i);
    if (e.static)
        for (const i of e.static.values()) Ai(i);
    if (e.staticInsensitive)
        for (const i of e.staticInsensitive.values()) Ai(i);
    if (e.dynamic ? .length) {
        e.dynamic.sort(Lf);
        for (const i of e.dynamic) Ai(i)
    }
    if (e.optional ? .length) {
        e.optional.sort(Lf);
        for (const i of e.optional) Ai(i)
    }
    if (e.wildcard ? .length) {
        e.wildcard.sort(Lf);
        for (const i of e.wildcard) Ai(i)
    }
}

function la(e) {
    return {
        kind: 0,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: e,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0
    }
}

function Nf(e, i, a, r, l) {
    return {
        kind: e,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: i,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0,
        caseSensitive: a,
        prefix: r,
        suffix: l
    }
}

function BE(e, i) {
    const a = la("/"),
        r = new Uint16Array(6);
    for (const l of e) $l(!1, r, l, 1, a, 0);
    Ai(a), i.masksTree = a, i.flatCache = Br(1e3)
}

function VE(e, i) {
    e || = "/";
    const a = i.flatCache.get(e);
    if (a) return a;
    const r = Gd(e, i.masksTree);
    return i.flatCache.set(e, r), r
}

function UE(e, i, a, r, l) {
    e || = "/", r || = "/";
    const c = i ? `case\0${e}` : e;
    let f = l.singleCache.get(c);
    return f || (f = la("/"), $l(i, new Uint16Array(6), {
        from: e
    }, 1, f, 0), l.singleCache.set(c, f)), Gd(r, f, a)
}

function PE(e, i, a = !1) {
    const r = a ? e : `nofuzz\0${e}`,
        l = i.matchCache.get(r);
    if (l !== void 0) return l;
    e || = "/";
    let c;
    try {
        c = Gd(e, i.segmentTree, a)
    } catch (f) {
        if (f instanceof URIError) c = null;
        else throw f
    }
    return c && (c.branch = qE(c.route)), i.matchCache.set(r, c), c
}

function HE(e) {
    return e === "/" ? e : e.replace(/\/{1,}$/, "")
}

function kE(e, i = !1, a) {
    const r = la(e.fullPath),
        l = new Uint16Array(6),
        c = {},
        f = {};
    let h = 0;
    return $l(i, l, e, 1, r, 0, p => {
        if (a ? .(p, h), p.id in c && Ne(), c[p.id] = p, h !== 0 && p.path) {
            const m = HE(p.fullPath);
            (!f[m] || p.fullPath.endsWith("/")) && (f[m] = p)
        }
        h++
    }), Ai(r), {
        processedTree: {
            segmentTree: r,
            singleCache: Br(1e3),
            matchCache: Br(1e3),
            flatCache: null,
            masksTree: null
        },
        routesById: c,
        routesByPath: f
    }
}

function Gd(e, i, a = !1) {
    const r = e.split("/"),
        l = YE(e, r, i, a);
    if (!l) return null;
    const [c] = X0(e, r, l);
    return {
        route: l.node.route,
        rawParams: c,
        parsedParams: l.parsedParams
    }
}

function X0(e, i, a) {
    const r = KE(a.node);
    let l = null;
    const c = Object.create(null);
    let f = a.extract ? .part ? ? 0,
        h = a.extract ? .node ? ? 0,
        p = a.extract ? .path ? ? 0,
        m = a.extract ? .segment ? ? 0;
    for (; h < r.length; f++, h++, p++, m++) {
        const y = r[h];
        if (y.kind === oa) break;
        if (y.kind === G0) {
            m--, f--, p--;
            continue
        }
        const g = i[f],
            S = p;
        if (g && (p += g.length), y.kind === 1) {
            l ? ? = a.node.fullPath.split("/");
            const b = l[m],
                E = y.prefix ? .length ? ? 0;
            if (b.charCodeAt(E) === 123) {
                const _ = y.suffix ? .length ? ? 0,
                    A = b.substring(E + 2, b.length - _ - 1),
                    R = g.substring(E, g.length - _);
                c[A] = decodeURIComponent(R)
            } else {
                const _ = b.substring(1);
                c[_] = decodeURIComponent(g)
            }
        } else if (y.kind === 3) {
            if (a.skipped & 1 << h) {
                f--, p = S - 1;
                continue
            }
            l ? ? = a.node.fullPath.split("/");
            const b = l[m],
                E = y.prefix ? .length ? ? 0,
                _ = y.suffix ? .length ? ? 0,
                A = b.substring(E + 3, b.length - _ - 1),
                R = y.suffix || y.prefix ? g.substring(E, g.length - _) : g;
            R && (c[A] = decodeURIComponent(R))
        } else if (y.kind === 2) {
            const b = y,
                E = e.substring(S + (b.prefix ? .length ? ? 0), e.length - (b.suffix ? .length ? ? 0)),
                _ = decodeURIComponent(E);
            c["*"] = _, c._splat = _;
            break
        }
    }
    return a.rawParams && Object.assign(c, a.rawParams), [c, {
        part: f,
        node: h,
        path: p,
        segment: m
    }]
}

function qE(e) {
    const i = [e];
    for (; e.parentRoute;) e = e.parentRoute, i.push(e);
    return i.reverse(), i
}

function KE(e) {
    const i = Array(e.depth + 1);
    do i[e.depth] = e, e = e.parent; while (e);
    return i
}

function YE(e, i, a, r) {
    if (e === "/" && a.index) return {
        node: a.index,
        skipped: 0
    };
    const l = !zr(i),
        c = l && e !== "/",
        f = i.length - (l ? 1 : 0),
        h = [{
            node: a,
            index: 1,
            skipped: 0,
            depth: 1,
            statics: 1,
            dynamics: 0,
            optionals: 0
        }];
    let p = null,
        m = null,
        y = null;
    for (; h.length;) {
        const g = h.pop(),
            {
                node: S,
                index: b,
                skipped: E,
                depth: _,
                statics: A,
                dynamics: R,
                optionals: N
            } = g;
        let {
            extract: L,
            rawParams: O,
            parsedParams: F
        } = g;
        if (S.skipOnParamError) {
            if (!zf(e, i, g)) continue;
            O = g.rawParams, L = g.extract, F = g.parsedParams
        }
        r && S.route && S.kind !== oa && br(m, g) && (m = g);
        const J = b === f;
        if (J && (S.route && !c && br(y, g) && (y = g), !S.optional && !S.wildcard && !S.index && !S.pathless)) continue;
        const q = J ? void 0 : i[b];
        let K;
        if (J && S.index) {
            const Z = {
                node: S.index,
                index: b,
                skipped: E,
                depth: _ + 1,
                statics: A,
                dynamics: R,
                optionals: N,
                extract: L,
                rawParams: O,
                parsedParams: F
            };
            let I = !0;
            if (S.index.skipOnParamError && (zf(e, i, Z) || (I = !1)), I) {
                if (A === f && !R && !N && !E) return Z;
                br(y, Z) && (y = Z)
            }
        }
        if (S.wildcard && br(p, g))
            for (const Z of S.wildcard) {
                const {
                    prefix: I,
                    suffix: $
                } = Z;
                if (I && (J || !(Z.caseSensitive ? q : K ? ? = q.toLowerCase()).startsWith(I))) continue;
                if ($) {
                    if (J) continue;
                    const ct = i.slice(b).join("/").slice(-$.length);
                    if ((Z.caseSensitive ? ct : ct.toLowerCase()) !== $) continue
                }
                const ot = {
                    node: Z,
                    index: f,
                    skipped: E,
                    depth: _,
                    statics: A,
                    dynamics: R,
                    optionals: N,
                    extract: L,
                    rawParams: O,
                    parsedParams: F
                };
                if (!(Z.skipOnParamError && !zf(e, i, ot))) {
                    p = ot;
                    break
                }
            }
        if (S.optional) {
            const Z = E | 1 << _,
                I = _ + 1;
            for (let $ = S.optional.length - 1; $ >= 0; $--) {
                const ot = S.optional[$];
                h.push({
                    node: ot,
                    index: b,
                    skipped: Z,
                    depth: I,
                    statics: A,
                    dynamics: R,
                    optionals: N,
                    extract: L,
                    rawParams: O,
                    parsedParams: F
                })
            }
            if (!J)
                for (let $ = S.optional.length - 1; $ >= 0; $--) {
                    const ot = S.optional[$],
                        {
                            prefix: ct,
                            suffix: Et
                        } = ot;
                    if (ct || Et) {
                        const yt = ot.caseSensitive ? q : K ? ? = q.toLowerCase();
                        if (ct && !yt.startsWith(ct) || Et && !yt.endsWith(Et)) continue
                    }
                    h.push({
                        node: ot,
                        index: b + 1,
                        skipped: E,
                        depth: I,
                        statics: A,
                        dynamics: R,
                        optionals: N + 1,
                        extract: L,
                        rawParams: O,
                        parsedParams: F
                    })
                }
        }
        if (!J && S.dynamic && q)
            for (let Z = S.dynamic.length - 1; Z >= 0; Z--) {
                const I = S.dynamic[Z],
                    {
                        prefix: $,
                        suffix: ot
                    } = I;
                if ($ || ot) {
                    const ct = I.caseSensitive ? q : K ? ? = q.toLowerCase();
                    if ($ && !ct.startsWith($) || ot && !ct.endsWith(ot)) continue
                }
                h.push({
                    node: I,
                    index: b + 1,
                    skipped: E,
                    depth: _ + 1,
                    statics: A,
                    dynamics: R + 1,
                    optionals: N,
                    extract: L,
                    rawParams: O,
                    parsedParams: F
                })
            }
        if (!J && S.staticInsensitive) {
            const Z = S.staticInsensitive.get(K ? ? = q.toLowerCase());
            Z && h.push({
                node: Z,
                index: b + 1,
                skipped: E,
                depth: _ + 1,
                statics: A + 1,
                dynamics: R,
                optionals: N,
                extract: L,
                rawParams: O,
                parsedParams: F
            })
        }
        if (!J && S.static) {
            const Z = S.static.get(q);
            Z && h.push({
                node: Z,
                index: b + 1,
                skipped: E,
                depth: _ + 1,
                statics: A + 1,
                dynamics: R,
                optionals: N,
                extract: L,
                rawParams: O,
                parsedParams: F
            })
        }
        if (S.pathless) {
            const Z = _ + 1;
            for (let I = S.pathless.length - 1; I >= 0; I--) {
                const $ = S.pathless[I];
                h.push({
                    node: $,
                    index: b,
                    skipped: E,
                    depth: Z,
                    statics: A,
                    dynamics: R,
                    optionals: N,
                    extract: L,
                    rawParams: O,
                    parsedParams: F
                })
            }
        }
    }
    if (y && p) return br(p, y) ? y : p;
    if (y) return y;
    if (p) return p;
    if (r && m) {
        let g = m.index;
        for (let b = 0; b < m.index; b++) g += i[b].length;
        const S = g === e.length ? "/" : e.slice(g);
        return m.rawParams ? ? = Object.create(null), m.rawParams["**"] = decodeURIComponent(S), m
    }
    return null
}

function zf(e, i, a) {
    try {
        const [r, l] = X0(e, i, a);
        a.rawParams = r, a.extract = l;
        const c = a.node.parse(r);
        return a.parsedParams = Object.assign(Object.create(null), a.parsedParams, c), !0
    } catch {
        return null
    }
}

function br(e, i) {
    return e ? i.statics > e.statics || i.statics === e.statics && (i.dynamics > e.dynamics || i.dynamics === e.dynamics && (i.optionals > e.optionals || i.optionals === e.optionals && ((i.node.kind === oa) > (e.node.kind === oa) || i.node.kind === oa == (e.node.kind === oa) && i.depth > e.depth))) : !0
}

function Tl(e) {
    return Xd(e.filter(i => i !== void 0).join("/"))
}

function Xd(e) {
    return e.replace(/\/{2,}/g, "/")
}

function F0(e) {
    return e === "/" ? e : e.replace(/^\/{1,}/, "")
}

function Di(e) {
    const i = e.length;
    return i > 1 && e[i - 1] === "/" ? e.replace(/\/{1,}$/, "") : e
}

function Q0(e) {
    return Di(F0(e))
}

function Vl(e, i) {
    return e ? .endsWith("/") && e !== "/" && e !== `${i}/` ? e.slice(0, -1) : e
}

function GE(e, i, a) {
    return Vl(e, a) === Vl(i, a)
}

function XE({
    base: e,
    to: i,
    trailingSlash: a = "never",
    cache: r
}) {
    const l = i.startsWith("/"),
        c = !l && i === ".";
    let f;
    if (r) {
        f = l ? i : c ? e : e + "\0" + i;
        const g = r.get(f);
        if (g) return g
    }
    let h;
    if (c) h = e.split("/");
    else if (l) h = i.split("/");
    else {
        for (h = e.split("/"); h.length > 1 && zr(h) === "";) h.pop();
        const g = i.split("/");
        for (let S = 0, b = g.length; S < b; S++) {
            const E = g[S];
            E === "" ? S ? S === b - 1 && h.push(E) : h = [E] : E === ".." ? h.pop() : E === "." || h.push(E)
        }
    }
    h.length > 1 && (zr(h) === "" ? a === "never" && h.pop() : a === "always" && h.push(""));
    let p, m = "";
    for (let g = 0; g < h.length; g++) {
        g > 0 && (m += "/");
        const S = h[g];
        if (!S) continue;
        p = Yd(S, 0, p);
        const b = p[0];
        if (b === 0) {
            m += S;
            continue
        }
        const E = p[5],
            _ = S.substring(0, p[1]),
            A = S.substring(p[4], E),
            R = S.substring(p[2], p[3]);
        b === 1 ? m += _ || A ? `${_}{$${R}}${A}` : `$${R}` : b === 2 ? m += _ || A ? `${_}{$}${A}` : "$" : m += `${_}{-$${R}}${A}`
    }
    m = Xd(m);
    const y = m || "/";
    return f && r && r.set(f, y), y
}

function FE(e) {
    const i = new Map(e.map(l => [encodeURIComponent(l), l])),
        a = Array.from(i.keys()).map(l => l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
        r = new RegExp(a, "g");
    return l => l.replace(r, c => i.get(c) ? ? c)
}

function jf(e, i, a) {
    const r = i[e];
    return typeof r != "string" ? r : e === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(r) ? r : r.split("/").map(l => qg(l, a)).join("/") : qg(r, a)
}

function kg({
    path: e,
    params: i,
    decoder: a,
    ...r
}) {
    let l = !1;
    const c = Object.create(null);
    if (!e || e === "/") return {
        interpolatedPath: "/",
        usedParams: c,
        isMissingParams: l
    };
    if (!e.includes("$")) return {
        interpolatedPath: e,
        usedParams: c,
        isMissingParams: l
    };
    const f = e.length;
    let h = 0,
        p, m = "";
    for (; h < f;) {
        const y = h;
        p = Yd(e, y, p);
        const g = p[5];
        if (h = g + 1, y === g) continue;
        const S = p[0];
        if (S === 0) {
            m += "/" + e.substring(y, g);
            continue
        }
        if (S === 2) {
            const b = i._splat;
            c._splat = b, c["*"] = b;
            const E = e.substring(y, p[1]),
                _ = e.substring(p[4], g);
            if (!b) {
                l = !0, (E || _) && (m += "/" + E + _);
                continue
            }
            const A = jf("_splat", i, a);
            m += "/" + E + A + _;
            continue
        }
        if (S === 1) {
            const b = e.substring(p[2], p[3]);
            !l && !(b in i) && (l = !0), c[b] = i[b];
            const E = e.substring(y, p[1]),
                _ = e.substring(p[4], g),
                A = jf(b, i, a) ? ? "undefined";
            m += "/" + E + A + _;
            continue
        }
        if (S === 3) {
            const b = e.substring(p[2], p[3]),
                E = i[b];
            if (E == null) continue;
            c[b] = E;
            const _ = e.substring(y, p[1]),
                A = e.substring(p[4], g),
                R = jf(b, i, a) ? ? "";
            m += "/" + _ + R + A;
            continue
        }
    }
    return e.endsWith("/") && (m += "/"), {
        usedParams: c,
        interpolatedPath: m || "/",
        isMissingParams: l
    }
}

function qg(e, i) {
    const a = encodeURIComponent(e);
    return i ? .(a) ? ? a
}

function ge(e) {
    return e ? .isNotFound === !0
}

function QE() {
    try {
        return typeof window < "u" && typeof window.sessionStorage == "object" ? window.sessionStorage : void 0
    } catch {
        return
    }
}
var ZE = "tsr-scroll-restoration-v1_3";

function IE() {
    const e = QE();
    if (!e) return null;
    let i = {};
    try {
        const r = JSON.parse(e.getItem("tsr-scroll-restoration-v1_3") || "{}");
        ps(r) && (i = r)
    } catch {}
    return {
        get state() {
            return i
        },
        set: r => {
            i = Ri(r, i) || i
        },
        persist: () => {
            try {
                e.setItem(ZE, JSON.stringify(i))
            } catch {}
        }
    }
}
var Kg = IE(),
    JE = e => e.state.__TSR_key || e.href;

function WE(e) {
    const i = [];
    let a;
    for (; a = e.parentNode;) i.push(`${e.tagName}:nth-child(${Array.prototype.indexOf.call(a.children,e)+1})`), e = a;
    return `${i.reverse().join(" > ")}`.toLowerCase()
}
var ml = !1,
    xr = "window",
    Yg = "data-scroll-restoration-id";

function $E(e, i) {
    if (!Kg) return;
    const a = Kg;
    if ((e.options.scrollRestoration ? ? !1) && (e.isScrollRestoring = !0), e.isScrollRestorationSetup || !a) return;
    e.isScrollRestorationSetup = !0, ml = !1;
    const r = e.options.getScrollRestorationKey || JE,
        l = new Map;
    window.history.scrollRestoration = "manual";
    const c = h => {
            if (!(ml || !e.isScrollRestoring))
                if (h.target === document || h.target === window) l.set(xr, {
                    scrollX: window.scrollX || 0,
                    scrollY: window.scrollY || 0
                });
                else {
                    const p = h.target;
                    l.set(p, {
                        scrollX: p.scrollLeft || 0,
                        scrollY: p.scrollTop || 0
                    })
                }
        },
        f = h => {
            if (!e.isScrollRestoring || !h || l.size === 0 || !a) return;
            const p = a.state[h] || = {};
            for (const [m, y] of l) {
                let g;
                if (m === xr) g = xr;
                else if (m.isConnected) {
                    const S = m.getAttribute(Yg);
                    g = S ? `[${Yg}="${S}"]` : WE(m)
                }
                g && (p[g] = y)
            }
        };
    document.addEventListener("scroll", c, !0), e.subscribe("onBeforeLoad", h => {
        f(h.fromLocation ? r(h.fromLocation) : void 0), l.clear()
    }), window.addEventListener("pagehide", () => {
        f(r(e.stores.resolvedLocation.get() ? ? e.stores.location.get())), a.persist()
    }), e.subscribe("onRendered", h => {
        const p = r(h.toLocation),
            m = e.options.scrollRestorationBehavior,
            y = e.options.scrollToTopSelectors;
        if (l.clear(), !e.resetNextScroll) {
            e.resetNextScroll = !0;
            return
        }
        if (!(typeof e.options.scrollRestoration == "function" && !e.options.scrollRestoration({
                location: e.latestLocation
            }))) {
            ml = !0;
            try {
                const g = e.isScrollRestoring ? a.state[p] : void 0;
                let S = !1;
                if (g)
                    for (const b in g) {
                        const E = g[b];
                        if (!ps(E)) continue;
                        const {
                            scrollX: _,
                            scrollY: A
                        } = E;
                        if (!(!Number.isFinite(_) || !Number.isFinite(A))) {
                            if (b === xr) window.scrollTo({
                                top: A,
                                left: _,
                                behavior: m
                            }), S = !0;
                            else if (b) {
                                let R;
                                try {
                                    R = document.querySelector(b)
                                } catch {
                                    continue
                                }
                                R && (R.scrollLeft = _, R.scrollTop = A, S = !0)
                            }
                        }
                    }
                if (!S) {
                    const b = e.history.location.hash.slice(1);
                    if (b) {
                        const E = window.history.state ? .__hashScrollIntoViewOptions ? ? !0;
                        if (E) {
                            const _ = document.getElementById(b);
                            _ && _.scrollIntoView(E)
                        }
                    } else {
                        const E = {
                            top: 0,
                            left: 0,
                            behavior: m
                        };
                        if (window.scrollTo(E), y)
                            for (const _ of y) {
                                if (_ === xr) continue;
                                const A = typeof _ == "function" ? _() : document.querySelector(_);
                                A && A.scrollTo(E)
                            }
                    }
                }
            } finally {
                ml = !1
            }
            e.isScrollRestoring && a.set(g => (g[p] || = {}, g))
        }
    })
}

function Z0(e, i = String) {
    const a = new URLSearchParams;
    for (const r in e) {
        const l = e[r];
        l !== void 0 && a.set(r, i(l))
    }
    return a.toString()
}

function Bf(e) {
    return e ? e === "false" ? !1 : e === "true" ? !0 : +e * 0 === 0 && +e + "" === e ? +e : e : ""
}

function tA(e) {
    const i = new URLSearchParams(e),
        a = Object.create(null);
    for (const [r, l] of i.entries()) {
        const c = a[r];
        c == null ? a[r] = Bf(l) : Array.isArray(c) ? c.push(Bf(l)) : a[r] = [c, Bf(l)]
    }
    return a
}
var eA = iA(JSON.parse),
    nA = aA(JSON.stringify, JSON.parse);

function iA(e) {
    return i => {
        i[0] === "?" && (i = i.substring(1));
        const a = tA(i);
        for (const r in a) {
            const l = a[r];
            if (typeof l == "string") try {
                a[r] = e(l)
            } catch {}
        }
        return a
    }
}

function aA(e, i) {
    const a = typeof i == "function";

    function r(l) {
        if (typeof l == "object" && l !== null) try {
            return e(l)
        } catch {} else if (a && typeof l == "string") try {
            return i(l), e(l)
        } catch {}
        return l
    }
    return l => {
        const c = Z0(l, r);
        return c ? `?${c}` : ""
    }
}
var da = "__root__";

function I0(e) {
    if (e.statusCode = e.statusCode || e.code || 307, !e._builtLocation && !e.reloadDocument && typeof e.href == "string") try {
        new URL(e.href), e.reloadDocument = !0
    } catch {}
    const i = new Headers(e.headers);
    e.href && i.get("Location") === null && i.set("Location", e.href);
    const a = new Response(null, {
        status: e.statusCode,
        headers: i
    });
    if (a.options = e, e.throw) throw a;
    return a
}

function Le(e) {
    return e instanceof Response && !!e.options
}

function sA(e) {
    if (e !== null && typeof e == "object" && e.isSerializedRedirect) return I0(e)
}

function rA(e) {
    return {
        input: ({
            url: i
        }) => {
            for (const a of e) i = cd(a, i);
            return i
        },
        output: ({
            url: i
        }) => {
            for (let a = e.length - 1; a >= 0; a--) i = J0(e[a], i);
            return i
        }
    }
}

function oA(e) {
    const i = Q0(e.basepath),
        a = `/${i}`,
        r = `${a}/`,
        l = e.caseSensitive ? a : a.toLowerCase(),
        c = e.caseSensitive ? r : r.toLowerCase();
    return {
        input: ({
            url: f
        }) => {
            const h = e.caseSensitive ? f.pathname : f.pathname.toLowerCase();
            return h === l ? f.pathname = "/" : h.startsWith(c) && (f.pathname = f.pathname.slice(a.length)), f
        },
        output: ({
            url: f
        }) => (f.pathname = Tl(["/", i, f.pathname]), f)
    }
}

function cd(e, i) {
    const a = e ? .input ? .({
        url: i
    });
    if (a) {
        if (typeof a == "string") return new URL(a);
        if (a instanceof URL) return a
    }
    return i
}

function J0(e, i) {
    const a = e ? .output ? .({
        url: i
    });
    if (a) {
        if (typeof a == "string") return new URL(a);
        if (a instanceof URL) return a
    }
    return i
}

function lA(e, i) {
    const {
        createMutableStore: a,
        createReadonlyStore: r,
        batch: l,
        init: c
    } = i, f = new Map, h = new Map, p = new Map, m = a(e.status), y = a(e.loadedAt), g = a(e.isLoading), S = a(e.isTransitioning), b = a(e.location), E = a(e.resolvedLocation), _ = a(e.statusCode), A = a(e.redirect), R = a([]), N = a([]), L = a([]), O = r(() => Vf(f, R.get())), F = r(() => Vf(h, N.get())), J = r(() => Vf(p, L.get())), q = r(() => R.get()[0]), K = r(() => R.get().some(W => f.get(W) ? .get().status === "pending")), Z = r(() => ({
        locationHref: b.get().href,
        resolvedLocationHref: E.get() ? .href,
        status: m.get()
    })), I = r(() => ({
        status: m.get(),
        loadedAt: y.get(),
        isLoading: g.get(),
        isTransitioning: S.get(),
        matches: O.get(),
        location: b.get(),
        resolvedLocation: E.get(),
        statusCode: _.get(),
        redirect: A.get()
    })), $ = Br(64);

    function ot(W) {
        let et = $.get(W);
        return et || (et = r(() => {
            const ft = R.get();
            for (const gt of ft) {
                const C = f.get(gt);
                if (C && C.routeId === W) return C.get()
            }
        }), $.set(W, et)), et
    }
    const ct = {
        status: m,
        loadedAt: y,
        isLoading: g,
        isTransitioning: S,
        location: b,
        resolvedLocation: E,
        statusCode: _,
        redirect: A,
        matchesId: R,
        pendingIds: N,
        cachedIds: L,
        matches: O,
        pendingMatches: F,
        cachedMatches: J,
        firstId: q,
        hasPending: K,
        matchRouteDeps: Z,
        matchStores: f,
        pendingMatchStores: h,
        cachedMatchStores: p,
        __store: I,
        getRouteMatchStore: ot,
        setMatches: Et,
        setPending: yt,
        setCached: P
    };
    Et(e.matches), c ? .(ct);

    function Et(W) {
        Uf(W, f, R, a, l)
    }

    function yt(W) {
        Uf(W, h, N, a, l)
    }

    function P(W) {
        Uf(W, p, L, a, l)
    }
    return ct
}

function Vf(e, i) {
    const a = [];
    for (const r of i) {
        const l = e.get(r);
        l && a.push(l.get())
    }
    return a
}

function Uf(e, i, a, r, l) {
    const c = e.map(h => h.id),
        f = new Set(c);
    l(() => {
        for (const h of i.keys()) f.has(h) || i.delete(h);
        for (const h of e) {
            const p = i.get(h.id);
            if (!p) {
                const m = r(h);
                m.routeId = h.routeId, i.set(h.id, m);
                continue
            }
            p.routeId = h.routeId, p.get() !== h && p.set(h)
        }
        zE(a.get(), c) || a.set(c)
    })
}
var fd = e => {
        if (!e.rendered) return e.rendered = !0, e.onReady ? .()
    },
    uA = e => e.stores.matchesId.get().some(i => e.stores.matchStores.get(i) ? .get()._forcePending),
    tu = (e, i) => !!(e.preload && !e.router.stores.matchStores.has(i)),
    ha = (e, i, a = !0) => {
        const r = { ...e.router.options.context ? ? {}
            },
            l = a ? i : i - 1;
        for (let c = 0; c <= l; c++) {
            const f = e.matches[c];
            if (!f) continue;
            const h = e.router.getMatch(f.id);
            h && Object.assign(r, h.__routeContext, h.__beforeLoadContext)
        }
        return r
    },
    Gg = (e, i) => {
        if (!e.matches.length) return;
        const a = i.routeId,
            r = e.matches.findIndex(f => f.routeId === e.router.routeTree.id),
            l = r >= 0 ? r : 0;
        let c = a ? e.matches.findIndex(f => f.routeId === a) : e.firstBadMatchIndex ? ? e.matches.length - 1;
        c < 0 && (c = l);
        for (let f = c; f >= 0; f--) {
            const h = e.matches[f];
            if (e.router.looseRoutesById[h.routeId].options.notFoundComponent) return f
        }
        return a ? c : l
    },
    Mi = (e, i, a) => {
        if (!(!Le(a) && !ge(a))) throw Le(a) && a.redirectHandled && !a.options.reloadDocument || (i && (i._nonReactive.beforeLoadPromise ? .resolve(), i._nonReactive.loaderPromise ? .resolve(), i._nonReactive.beforeLoadPromise = void 0, i._nonReactive.loaderPromise = void 0, i._nonReactive.error = a, e.updateMatch(i.id, r => ({ ...r,
            status: Le(a) ? "redirected" : r.status === "pending" ? "success" : r.status,
            context: ha(e, i.index),
            isFetching: !1,
            error: a
        })), ge(a) && !a.routeId && (a.routeId = i.routeId), i._nonReactive.loadPromise ? .resolve()), Le(a) && (e.rendered = !0, a.options._fromLocation = e.location, a.redirectHandled = !0, a = e.router.resolveRedirect(a))), a
    },
    W0 = (e, i) => {
        const a = e.router.getMatch(i);
        return !!(!a || a._nonReactive.dehydrated)
    },
    Xg = (e, i, a) => {
        const r = ha(e, a);
        e.updateMatch(i, l => ({ ...l,
            context: r
        }))
    },
    Tr = (e, i, a, r) => {
        const {
            id: l,
            routeId: c
        } = e.matches[i], f = e.router.looseRoutesById[c];
        if (a instanceof Promise) throw a;
        a.routerCode = r, e.firstBadMatchIndex ? ? = i, Mi(e, e.router.getMatch(l), a);
        try {
            f.options.onError ? .(a)
        } catch (h) {
            a = h, Mi(e, e.router.getMatch(l), a)
        }
        e.updateMatch(l, h => (h._nonReactive.beforeLoadPromise ? .resolve(), h._nonReactive.beforeLoadPromise = void 0, h._nonReactive.loadPromise ? .resolve(), { ...h,
            error: a,
            status: "error",
            isFetching: !1,
            updatedAt: Date.now(),
            abortController: new AbortController
        })), !e.preload && !Le(a) && !ge(a) && (e.serialError ? ? = a)
    },
    $0 = (e, i, a, r) => {
        if (r._nonReactive.pendingTimeout !== void 0) return;
        const l = a.options.pendingMs ? ? e.router.options.defaultPendingMs;
        if (e.onReady && !tu(e, i) && (a.options.loader || a.options.beforeLoad || eS(a)) && typeof l == "number" && l !== 1 / 0 && (a.options.pendingComponent ? ? e.router.options ? .defaultPendingComponent)) {
            const c = setTimeout(() => {
                fd(e)
            }, l);
            r._nonReactive.pendingTimeout = c
        }
    },
    cA = (e, i, a) => {
        const r = e.router.getMatch(i);
        if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise) return;
        $0(e, i, a, r);
        const l = () => {
            const c = e.router.getMatch(i);
            c.preload && (c.status === "redirected" || c.status === "notFound") && Mi(e, c, c.error)
        };
        return r._nonReactive.beforeLoadPromise ? r._nonReactive.beforeLoadPromise.then(l) : l()
    },
    fA = (e, i, a, r) => {
        const l = e.router.getMatch(i);
        let c = l._nonReactive.loadPromise;
        l._nonReactive.loadPromise = ya(() => {
            c ? .resolve(), c = void 0
        });
        const {
            paramsError: f,
            searchError: h
        } = l;
        f && Tr(e, a, f, "PARSE_PARAMS"), h && Tr(e, a, h, "VALIDATE_SEARCH"), $0(e, i, r, l);
        const p = new AbortController;
        let m = !1;
        const y = () => {
                m || (m = !0, e.updateMatch(i, O => ({ ...O,
                    isFetching: "beforeLoad",
                    fetchCount: O.fetchCount + 1,
                    abortController: p
                })))
            },
            g = () => {
                l._nonReactive.beforeLoadPromise ? .resolve(), l._nonReactive.beforeLoadPromise = void 0, e.updateMatch(i, O => ({ ...O,
                    isFetching: !1
                }))
            };
        if (!r.options.beforeLoad) {
            e.router.batch(() => {
                y(), g()
            });
            return
        }
        l._nonReactive.beforeLoadPromise = ya();
        const S = { ...ha(e, a, !1),
                ...l.__routeContext
            },
            {
                search: b,
                params: E,
                cause: _
            } = l,
            A = tu(e, i),
            R = {
                search: b,
                abortController: p,
                params: E,
                preload: A,
                context: S,
                location: e.location,
                navigate: O => e.router.navigate({ ...O,
                    _fromLocation: e.location
                }),
                buildLocation: e.router.buildLocation,
                cause: A ? "preload" : _,
                matches: e.matches,
                routeId: r.id,
                ...e.router.options.additionalContext
            },
            N = O => {
                if (O === void 0) {
                    e.router.batch(() => {
                        y(), g()
                    });
                    return
                }(Le(O) || ge(O)) && (y(), Tr(e, a, O, "BEFORE_LOAD")), e.router.batch(() => {
                    y(), e.updateMatch(i, F => ({ ...F,
                        __beforeLoadContext: O
                    })), g()
                })
            };
        let L;
        try {
            if (L = r.options.beforeLoad(R), jr(L)) return y(), L.catch(O => {
                Tr(e, a, O, "BEFORE_LOAD")
            }).then(N)
        } catch (O) {
            y(), Tr(e, a, O, "BEFORE_LOAD")
        }
        N(L)
    },
    dA = (e, i) => {
        const {
            id: a,
            routeId: r
        } = e.matches[i], l = e.router.looseRoutesById[r], c = () => h(), f = () => fA(e, a, i, l), h = () => {
            if (W0(e, a)) return;
            const p = cA(e, a, l);
            return jr(p) ? p.then(f) : f()
        };
        return c()
    },
    hA = (e, i, a) => {
        const r = e.router.getMatch(i);
        if (!r || !a.options.head && !a.options.scripts && !a.options.headers) return;
        const l = {
            ssr: e.router.options.ssr,
            matches: e.matches,
            match: r,
            params: r.params,
            loaderData: r.loaderData
        };
        return Promise.all([a.options.head ? .(l), a.options.scripts ? .(l), a.options.headers ? .(l)]).then(([c, f, h]) => ({
            meta: c ? .meta,
            links: c ? .links,
            headScripts: c ? .scripts,
            headers: h,
            scripts: f,
            styles: c ? .styles
        }))
    },
    tS = (e, i, a, r, l) => {
        const c = i[r - 1],
            {
                params: f,
                loaderDeps: h,
                abortController: p,
                cause: m
            } = e.router.getMatch(a),
            y = ha(e, r),
            g = tu(e, a);
        return {
            params: f,
            deps: h,
            preload: !!g,
            parentMatchPromise: c,
            abortController: p,
            context: y,
            location: e.location,
            navigate: S => e.router.navigate({ ...S,
                _fromLocation: e.location
            }),
            cause: g ? "preload" : m,
            route: l,
            ...e.router.options.additionalContext
        }
    },
    Fg = async (e, i, a, r, l) => {
        try {
            const c = e.router.getMatch(a);
            try {
                (!(Y0 ? ? e.router.isServer) || c.ssr === !0) && Vr(l);
                const f = l.options.loader,
                    h = typeof f == "function" ? f : f ? .handler,
                    p = h ? .(tS(e, i, a, r, l)),
                    m = !!h && jr(p);
                if ((m || l._lazyPromise || l._componentsPromise || l.options.head || l.options.scripts || l.options.headers || c._nonReactive.minPendingPromise) && e.updateMatch(a, g => ({ ...g,
                        isFetching: "loader"
                    })), h) {
                    const g = m ? await p : p;
                    Mi(e, e.router.getMatch(a), g), g !== void 0 && e.updateMatch(a, S => ({ ...S,
                        loaderData: g
                    }))
                }
                l._lazyPromise && await l._lazyPromise;
                const y = c._nonReactive.minPendingPromise;
                y && await y, l._componentsPromise && await l._componentsPromise, e.updateMatch(a, g => ({ ...g,
                    error: void 0,
                    context: ha(e, r),
                    status: "success",
                    isFetching: !1,
                    updatedAt: Date.now()
                }))
            } catch (f) {
                let h = f;
                if (h ? .name === "AbortError") {
                    if (c.abortController.signal.aborted) {
                        c._nonReactive.loaderPromise ? .resolve(), c._nonReactive.loaderPromise = void 0;
                        return
                    }
                    e.updateMatch(a, m => ({ ...m,
                        status: m.status === "pending" ? "success" : m.status,
                        isFetching: !1,
                        context: ha(e, r)
                    }));
                    return
                }
                const p = c._nonReactive.minPendingPromise;
                p && await p, ge(f) && await l.options.notFoundComponent ? .preload ? .(), Mi(e, e.router.getMatch(a), f);
                try {
                    l.options.onError ? .(f)
                } catch (m) {
                    h = m, Mi(e, e.router.getMatch(a), m)
                }!Le(h) && !ge(h) && await Vr(l, ["errorComponent"]), e.updateMatch(a, m => ({ ...m,
                    error: h,
                    context: ha(e, r),
                    status: "error",
                    isFetching: !1
                }))
            }
        } catch (c) {
            const f = e.router.getMatch(a);
            f && (f._nonReactive.loaderPromise = void 0), Mi(e, f, c)
        }
    },
    mA = async (e, i, a) => {
        async function r(b, E, _, A, R) {
            const N = Date.now() - E.updatedAt,
                L = b ? R.options.preloadStaleTime ? ? e.router.options.defaultPreloadStaleTime ? ? 3e4 : R.options.staleTime ? ? e.router.options.defaultStaleTime ? ? 0,
                O = R.options.shouldReload,
                F = typeof O == "function" ? O(tS(e, i, l, a, R)) : O,
                {
                    status: J,
                    invalid: q
                } = A,
                K = N >= L && (!!e.forceStaleReload || A.cause === "enter" || _ !== void 0 && _ !== A.id);
            f = J === "success" && (q || (F ? ? K)), b && R.options.preload === !1 || (f && !e.sync && y ? (h = !0, (async () => {
                try {
                    await Fg(e, i, l, a, R);
                    const Z = e.router.getMatch(l);
                    Z._nonReactive.loaderPromise ? .resolve(), Z._nonReactive.loadPromise ? .resolve(), Z._nonReactive.loaderPromise = void 0, Z._nonReactive.loadPromise = void 0
                } catch (Z) {
                    Le(Z) && await e.router.navigate(Z.options)
                }
            })()) : J !== "success" || f ? await Fg(e, i, l, a, R) : Xg(e, l, a))
        }
        const {
            id: l,
            routeId: c
        } = e.matches[a];
        let f = !1,
            h = !1;
        const p = e.router.looseRoutesById[c],
            m = p.options.loader,
            y = ((typeof m == "function" ? void 0 : m ? .staleReloadMode) ? ? e.router.options.defaultStaleReloadMode) !== "blocking";
        if (W0(e, l)) {
            if (!e.router.getMatch(l)) return e.matches[a];
            Xg(e, l, a)
        } else {
            const b = e.router.getMatch(l),
                E = e.router.stores.matchesId.get()[a],
                _ = (E && e.router.stores.matchStores.get(E) || null) ? .routeId === c ? E : e.router.stores.matches.get().find(R => R.routeId === c) ? .id,
                A = tu(e, l);
            if (b._nonReactive.loaderPromise) {
                if (b.status === "success" && !e.sync && !b.preload && y) return b;
                await b._nonReactive.loaderPromise;
                const R = e.router.getMatch(l),
                    N = R._nonReactive.error || R.error;
                N && Mi(e, R, N), R.status === "pending" && await r(A, b, _, R, p)
            } else {
                const R = A && !e.router.stores.matchStores.has(l),
                    N = e.router.getMatch(l);
                N._nonReactive.loaderPromise = ya(), R !== N.preload && e.updateMatch(l, L => ({ ...L,
                    preload: R
                })), await r(A, b, _, N, p)
            }
        }
        const g = e.router.getMatch(l);
        h || (g._nonReactive.loaderPromise ? .resolve(), g._nonReactive.loadPromise ? .resolve(), g._nonReactive.loadPromise = void 0), clearTimeout(g._nonReactive.pendingTimeout), g._nonReactive.pendingTimeout = void 0, h || (g._nonReactive.loaderPromise = void 0), g._nonReactive.dehydrated = void 0;
        const S = h ? g.isFetching : !1;
        return S !== g.isFetching || g.invalid !== !1 ? (e.updateMatch(l, b => ({ ...b,
            isFetching: S,
            invalid: !1
        })), e.router.getMatch(l)) : g
    };
async function Qg(e) {
    const i = e,
        a = [];
    uA(i.router) && fd(i);
    let r;
    for (let S = 0; S < i.matches.length; S++) {
        try {
            const b = dA(i, S);
            jr(b) && await b
        } catch (b) {
            if (Le(b)) throw b;
            if (ge(b)) r = b;
            else if (!i.preload) throw b;
            break
        }
        if (i.serialError || i.firstBadMatchIndex != null) break
    }
    const l = i.firstBadMatchIndex ? ? i.matches.length,
        c = r && !i.preload ? Gg(i, r) : void 0,
        f = r && i.preload ? 0 : c !== void 0 ? Math.min(c + 1, l) : l;
    let h, p;
    for (let S = 0; S < f; S++) a.push(mA(i, a, S));
    try {
        await Promise.all(a)
    } catch {
        const S = await Promise.allSettled(a);
        for (const b of S) {
            if (b.status !== "rejected") continue;
            const E = b.reason;
            if (Le(E)) throw E;
            ge(E) ? h ? ? = E : p ? ? = E
        }
        if (p !== void 0) throw p
    }
    const m = h ? ? (r && !i.preload ? r : void 0);
    let y = i.firstBadMatchIndex !== void 0 ? i.firstBadMatchIndex : i.matches.length - 1;
    if (!m && r && i.preload) return i.matches;
    if (m) {
        const S = Gg(i, m);
        S === void 0 && Ne();
        const b = i.matches[S],
            E = i.router.looseRoutesById[b.routeId],
            _ = i.router.options ? .defaultNotFoundComponent;
        !E.options.notFoundComponent && _ && (E.options.notFoundComponent = _), m.routeId = b.routeId;
        const A = b.routeId === i.router.routeTree.id;
        i.updateMatch(b.id, R => ({ ...R,
            ...A ? {
                status: "success",
                globalNotFound: !0,
                error: void 0
            } : {
                status: "notFound",
                error: m
            },
            isFetching: !1
        })), y = S, await Vr(E, ["notFoundComponent"])
    } else if (!i.preload) {
        const S = i.matches[0];
        S.globalNotFound || i.router.getMatch(S.id) ? .globalNotFound && i.updateMatch(S.id, b => ({ ...b,
            globalNotFound: !1,
            error: void 0
        }))
    }
    if (i.serialError && i.firstBadMatchIndex !== void 0) {
        const S = i.router.looseRoutesById[i.matches[i.firstBadMatchIndex].routeId];
        await Vr(S, ["errorComponent"])
    }
    for (let S = 0; S <= y; S++) {
        const {
            id: b,
            routeId: E
        } = i.matches[S], _ = i.router.looseRoutesById[E];
        try {
            const A = hA(i, b, _);
            if (A) {
                const R = await A;
                i.updateMatch(b, N => ({ ...N,
                    ...R
                }))
            }
        } catch (A) {
            console.error(`Error executing head for route ${E}:`, A)
        }
    }
    const g = fd(i);
    if (jr(g) && await g, m) throw m;
    if (i.serialError && !i.preload && !i.onReady) throw i.serialError;
    return i.matches
}

function Zg(e, i) {
    const a = i.map(r => e.options[r] ? .preload ? .()).filter(Boolean);
    if (a.length !== 0) return Promise.all(a)
}

function Vr(e, i = El) {
    !e._lazyLoaded && e._lazyPromise === void 0 && (e.lazyFn ? e._lazyPromise = e.lazyFn().then(r => {
        const {
            id: l,
            ...c
        } = r.options;
        Object.assign(e.options, c), e._lazyLoaded = !0, e._lazyPromise = void 0
    }) : e._lazyLoaded = !0);
    const a = () => e._componentsLoaded ? void 0 : i === El ? (() => {
        if (e._componentsPromise === void 0) {
            const r = Zg(e, El);
            r ? e._componentsPromise = r.then(() => {
                e._componentsLoaded = !0, e._componentsPromise = void 0
            }) : e._componentsLoaded = !0
        }
        return e._componentsPromise
    })() : Zg(e, i);
    return e._lazyPromise ? e._lazyPromise.then(a) : a()
}

function eS(e) {
    for (const i of El)
        if (e.options[i] ? .preload) return !0;
    return !1
}
var El = ["component", "errorComponent", "pendingComponent", "notFoundComponent"],
    Oi = "__TSR_index",
    Ig = "popstate",
    Jg = "beforeunload";

function pA(e) {
    let i = e.getLocation();
    const a = new Set,
        r = f => {
            i = e.getLocation(), a.forEach(h => h({
                location: i,
                action: f
            }))
        },
        l = f => {
            e.notifyOnIndexChange ? ? !0 ? r(f) : i = e.getLocation()
        },
        c = async ({
            task: f,
            navigateOpts: h,
            ...p
        }) => {
            if (h ? .ignoreBlocker ? ? !1) {
                f();
                return
            }
            const m = e.getBlockers ? .() ? ? [],
                y = p.type === "PUSH" || p.type === "REPLACE";
            if (typeof document < "u" && m.length && y)
                for (const g of m) {
                    const S = Ul(p.path, p.state);
                    if (await g.blockerFn({
                            currentLocation: i,
                            nextLocation: S,
                            action: p.type
                        })) {
                        e.onBlocked ? .();
                        return
                    }
                }
            f()
        };
    return {
        get location() {
            return i
        },
        get length() {
            return e.getLength()
        },
        subscribers: a,
        subscribe: f => (a.add(f), () => {
            a.delete(f)
        }),
        push: (f, h, p) => {
            const m = i.state[Oi];
            h = Wg(m + 1, h), c({
                task: () => {
                    e.pushState(f, h), r({
                        type: "PUSH"
                    })
                },
                navigateOpts: p,
                type: "PUSH",
                path: f,
                state: h
            })
        },
        replace: (f, h, p) => {
            const m = i.state[Oi];
            h = Wg(m, h), c({
                task: () => {
                    e.replaceState(f, h), r({
                        type: "REPLACE"
                    })
                },
                navigateOpts: p,
                type: "REPLACE",
                path: f,
                state: h
            })
        },
        go: (f, h) => {
            c({
                task: () => {
                    e.go(f), l({
                        type: "GO",
                        index: f
                    })
                },
                navigateOpts: h,
                type: "GO"
            })
        },
        back: f => {
            c({
                task: () => {
                    e.back(f ? .ignoreBlocker ? ? !1), l({
                        type: "BACK"
                    })
                },
                navigateOpts: f,
                type: "BACK"
            })
        },
        forward: f => {
            c({
                task: () => {
                    e.forward(f ? .ignoreBlocker ? ? !1), l({
                        type: "FORWARD"
                    })
                },
                navigateOpts: f,
                type: "FORWARD"
            })
        },
        canGoBack: () => i.state[Oi] !== 0,
        createHref: f => e.createHref(f),
        block: f => {
            if (!e.setBlockers) return () => {};
            const h = e.getBlockers ? .() ? ? [];
            return e.setBlockers([...h, f]), () => {
                const p = e.getBlockers ? .() ? ? [];
                e.setBlockers ? .(p.filter(m => m !== f))
            }
        },
        flush: () => e.flush ? .(),
        destroy: () => e.destroy ? .(),
        notify: r
    }
}

function Wg(e, i) {
    i || (i = {});
    const a = Fd();
    return { ...i,
        key: a,
        __TSR_key: a,
        [Oi]: e
    }
}

function yA(e) {
    const i = typeof document < "u" ? window : void 0,
        a = i.history.pushState,
        r = i.history.replaceState;
    let l = [];
    const c = () => l,
        f = K => l = K,
        h = (K => K),
        p = (() => Ul(`${i.location.pathname}${i.location.search}${i.location.hash}`, i.history.state));
    if (!i.history.state ? .__TSR_key && !i.history.state ? .key) {
        const K = Fd();
        i.history.replaceState({
            [Oi]: 0,
            key: K,
            __TSR_key: K
        }, "")
    }
    let m = p(),
        y, g = !1,
        S = !1,
        b = !1,
        E = !1;
    const _ = () => m;
    let A, R;
    const N = () => {
            A && (q._ignoreSubscribers = !0, (A.isPush ? i.history.pushState : i.history.replaceState)(A.state, "", A.href), q._ignoreSubscribers = !1, A = void 0, R = void 0, y = void 0)
        },
        L = (K, Z, I) => {
            const $ = h(Z);
            R || (y = m), m = Ul(Z, I), A = {
                href: $,
                state: I,
                isPush: A ? .isPush || K === "push"
            }, R || (R = Promise.resolve().then(() => N()))
        },
        O = K => {
            m = p(), q.notify({
                type: K
            })
        },
        F = async () => {
            if (S) {
                S = !1;
                return
            }
            const K = p(),
                Z = K.state[Oi] - m.state[Oi],
                I = Z === 1,
                $ = Z === -1,
                ot = !I && !$ || g;
            g = !1;
            const ct = ot ? "GO" : $ ? "BACK" : "FORWARD",
                Et = ot ? {
                    type: "GO",
                    index: Z
                } : {
                    type: $ ? "BACK" : "FORWARD"
                };
            if (b) b = !1;
            else {
                const yt = c();
                if (typeof document < "u" && yt.length) {
                    for (const P of yt)
                        if (await P.blockerFn({
                                currentLocation: m,
                                nextLocation: K,
                                action: ct
                            })) {
                            S = !0, i.history.go(1), q.notify(Et);
                            return
                        }
                }
            }
            m = p(), q.notify(Et)
        },
        J = K => {
            if (E) {
                E = !1;
                return
            }
            let Z = !1;
            const I = c();
            if (typeof document < "u" && I.length)
                for (const $ of I) {
                    const ot = $.enableBeforeUnload ? ? !0;
                    if (ot === !0) {
                        Z = !0;
                        break
                    }
                    if (typeof ot == "function" && ot() === !0) {
                        Z = !0;
                        break
                    }
                }
            if (Z) return K.preventDefault(), K.returnValue = ""
        },
        q = pA({
            getLocation: _,
            getLength: () => i.history.length,
            pushState: (K, Z) => L("push", K, Z),
            replaceState: (K, Z) => L("replace", K, Z),
            back: K => (K && (b = !0), E = !0, i.history.back()),
            forward: K => {
                K && (b = !0), E = !0, i.history.forward()
            },
            go: K => {
                g = !0, i.history.go(K)
            },
            createHref: K => h(K),
            flush: N,
            destroy: () => {
                i.history.pushState = a, i.history.replaceState = r, i.removeEventListener(Jg, J, {
                    capture: !0
                }), i.removeEventListener(Ig, F)
            },
            onBlocked: () => {
                y && m !== y && (m = y)
            },
            getBlockers: c,
            setBlockers: f,
            notifyOnIndexChange: !1
        });
    return i.addEventListener(Jg, J, {
        capture: !0
    }), i.addEventListener(Ig, F), i.history.pushState = function(...K) {
        const Z = a.apply(i.history, K);
        return q._ignoreSubscribers || O("PUSH"), Z
    }, i.history.replaceState = function(...K) {
        const Z = r.apply(i.history, K);
        return q._ignoreSubscribers || O("REPLACE"), Z
    }, q
}

function gA(e) {
    let i = e.replace(/[\x00-\x1f\x7f]/g, "");
    return i.startsWith("//") && (i = "/" + i.replace(/^\/+/, "")), i
}

function Ul(e, i) {
    const a = gA(e),
        r = a.indexOf("#"),
        l = a.indexOf("?"),
        c = Fd();
    return {
        href: a,
        pathname: a.substring(0, r > 0 ? l > 0 ? Math.min(r, l) : r : l > 0 ? l : a.length),
        hash: r > -1 ? a.substring(r) : "",
        search: l > -1 ? a.slice(l, r === -1 ? void 0 : r) : "",
        state: i || {
            [Oi]: 0,
            key: c,
            __TSR_key: c
        }
    }
}

function Fd() {
    return (Math.random() + 1).toString(36).substring(7)
}

function vA(e) {
    return e instanceof Error ? {
        name: e.name,
        message: e.message
    } : {
        data: e
    }
}

function ds(e, i) {
    const a = i,
        r = e;
    return {
        fromLocation: a,
        toLocation: r,
        pathChanged: a ? .pathname !== r.pathname,
        hrefChanged: a ? .href !== r.href,
        hashChanged: a ? .hash !== r.hash
    }
}
var SA = class {
        constructor(e, i) {
            this.tempLocationKey = `${Math.round(Math.random()*1e7)}`, this.resetNextScroll = !0, this.shouldViewTransition = void 0, this.isViewTransitionTypesSupported = void 0, this.subscribers = new Set, this.isScrollRestoring = !1, this.isScrollRestorationSetup = !1, this.startTransition = a => a(), this.update = a => {
                const r = this.options,
                    l = this.basepath ? ? r ? .basepath ? ? "/",
                    c = this.basepath === void 0,
                    f = r ? .rewrite;
                if (this.options = { ...r,
                        ...a
                    }, this.isServer = this.options.isServer ? ? typeof document > "u", this.protocolAllowlist = new Set(this.options.protocolAllowlist), this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = FE(this.options.pathParamsAllowedCharacters)), (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = yA()), this.origin = this.options.origin, this.origin || (window ? .origin && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"), this.history && this.updateLatestLocation(), this.options.routeTree !== this.routeTree) {
                    this.routeTree = this.options.routeTree;
                    let y;
                    this.resolvePathCache = Br(1e3), y = this.buildRouteTree(), this.setRoutes(y)
                }
                if (!this.stores && this.latestLocation) {
                    const y = this.getStoreConfig(this);
                    this.batch = y.batch, this.stores = lA(xA(this.latestLocation), y), $E(this)
                }
                let h = !1;
                const p = this.options.basepath ? ? "/",
                    m = this.options.rewrite;
                if (c || l !== p || f !== m) {
                    this.basepath = p;
                    const y = [],
                        g = Q0(p);
                    g && g !== "/" && y.push(oA({
                        basepath: p
                    })), m && y.push(m), this.rewrite = y.length === 0 ? void 0 : y.length === 1 ? y[0] : rA(y), this.history && this.updateLatestLocation(), h = !0
                }
                h && this.stores && this.stores.location.set(this.latestLocation), typeof window < "u" && "CSS" in window && typeof window.CSS ? .supports == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"))
            }, this.updateLatestLocation = () => {
                this.latestLocation = this.parseLocation(this.history.location, this.latestLocation)
            }, this.buildRouteTree = () => {
                const a = kE(this.routeTree, this.options.caseSensitive, (r, l) => {
                    r.init({
                        originalIndex: l
                    })
                });
                return this.options.routeMasks && BE(this.options.routeMasks, a.processedTree), a
            }, this.subscribe = (a, r) => {
                const l = {
                    eventType: a,
                    fn: r
                };
                return this.subscribers.add(l), () => {
                    this.subscribers.delete(l)
                }
            }, this.emit = a => {
                this.subscribers.forEach(r => {
                    r.eventType === a.type && r.fn(a)
                })
            }, this.parseLocation = (a, r) => {
                const l = ({
                        pathname: p,
                        search: m,
                        hash: y,
                        href: g,
                        state: S
                    }) => {
                        if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(p)) {
                            const R = this.options.parseSearch(m),
                                N = this.options.stringifySearch(R);
                            return {
                                href: p + N + y,
                                publicHref: p + N + y,
                                pathname: Sr(p).path,
                                external: !1,
                                searchStr: N,
                                search: aa(r ? .search, R),
                                hash: Sr(y.slice(1)).path,
                                state: _i(r ? .state, S)
                            }
                        }
                        const b = new URL(g, this.origin),
                            E = cd(this.rewrite, b),
                            _ = this.options.parseSearch(E.search),
                            A = this.options.stringifySearch(_);
                        return E.search = A, {
                            href: E.href.replace(E.origin, ""),
                            publicHref: g,
                            pathname: Sr(E.pathname).path,
                            external: !!this.rewrite && E.origin !== this.origin,
                            searchStr: A,
                            search: aa(r ? .search, _),
                            hash: Sr(E.hash.slice(1)).path,
                            state: _i(r ? .state, S)
                        }
                    },
                    c = l(a),
                    {
                        __tempLocation: f,
                        __tempKey: h
                    } = c.state;
                if (f && (!h || h === this.tempLocationKey)) {
                    const p = l(f);
                    return p.state.key = c.state.key, p.state.__TSR_key = c.state.__TSR_key, delete p.state.__tempLocation, { ...p,
                        maskedLocation: c
                    }
                }
                return c
            }, this.resolvePathWithBase = (a, r) => XE({
                base: a,
                to: Xd(r),
                trailingSlash: this.options.trailingSlash,
                cache: this.resolvePathCache
            }), this.matchRoutes = (a, r, l) => typeof a == "string" ? this.matchRoutesInternal({
                pathname: a,
                search: r
            }, l) : this.matchRoutesInternal(a, r), this.getMatchedRoutes = a => TA({
                pathname: a,
                routesById: this.routesById,
                processedTree: this.processedTree
            }), this.cancelMatch = a => {
                const r = this.getMatch(a);
                r && (r.abortController.abort(), clearTimeout(r._nonReactive.pendingTimeout), r._nonReactive.pendingTimeout = void 0)
            }, this.cancelMatches = () => {
                this.stores.pendingIds.get().forEach(a => {
                    this.cancelMatch(a)
                }), this.stores.matchesId.get().forEach(a => {
                    if (this.stores.pendingMatchStores.has(a)) return;
                    const r = this.stores.matchStores.get(a) ? .get();
                    r && (r.status === "pending" || r.isFetching === "loader") && this.cancelMatch(a)
                })
            }, this.buildLocation = a => {
                const r = (c = {}) => {
                        const f = c._fromLocation || this.pendingBuiltLocation || this.latestLocation,
                            h = this.matchRoutesLightweight(f);
                        c.from;
                        const p = c.unsafeRelative === "path" ? f.pathname : c.from ? ? h.fullPath,
                            m = this.resolvePathWithBase(p, "."),
                            y = h.search,
                            g = Object.assign(Object.create(null), h.params),
                            S = c.to ? this.resolvePathWithBase(m, `${c.to}`) : this.resolvePathWithBase(m, "."),
                            b = c.params === !1 || c.params === null ? Object.create(null) : (c.params ? ? !0) === !0 ? g : Object.assign(g, Ri(c.params, g)),
                            E = this.getMatchedRoutes(S);
                        let _ = E.matchedRoutes;
                        if ((!E.foundRoute || E.foundRoute.path !== "/" && E.routeParams["**"]) && this.options.notFoundRoute && (_ = [..._, this.options.notFoundRoute]), Object.keys(b).length > 0)
                            for (const I of _) {
                                const $ = I.options.params ? .stringify ? ? I.options.stringifyParams;
                                if ($) try {
                                    Object.assign(b, $(b))
                                } catch {}
                            }
                        const A = a.leaveParams ? S : Sr(kg({
                            path: S,
                            params: b,
                            decoder: this.pathParamsDecoder,
                            server: this.isServer
                        }).interpolatedPath).path;
                        let R = y;
                        if (a._includeValidateSearch && this.options.search ? .strict) {
                            const I = {};
                            _.forEach($ => {
                                if ($.options.validateSearch) try {
                                    Object.assign(I, Al($.options.validateSearch, { ...I,
                                        ...R
                                    }))
                                } catch {}
                            }), R = I
                        }
                        R = EA({
                            search: R,
                            dest: c,
                            destRoutes: _,
                            _includeValidateSearch: a._includeValidateSearch
                        }), R = aa(y, R);
                        const N = this.options.stringifySearch(R),
                            L = c.hash === !0 ? f.hash : c.hash ? Ri(c.hash, f.hash) : void 0,
                            O = L ? `#${L}` : "";
                        let F = c.state === !0 ? f.state : c.state ? Ri(c.state, f.state) : {};
                        F = _i(f.state, F);
                        const J = `${A}${N}${O}`;
                        let q, K, Z = !1;
                        if (this.rewrite) {
                            const I = new URL(J, this.origin),
                                $ = J0(this.rewrite, I);
                            q = I.href.replace(I.origin, ""), $.origin !== this.origin ? (K = $.href, Z = !0) : K = $.pathname + $.search + $.hash
                        } else q = NE(J), K = q;
                        return {
                            publicHref: K,
                            href: q,
                            pathname: A,
                            search: R,
                            searchStr: N,
                            state: F,
                            hash: L ? ? "",
                            external: Z,
                            unmaskOnReload: c.unmaskOnReload
                        }
                    },
                    l = (c = {}, f) => {
                        const h = r(c);
                        let p = f ? r(f) : void 0;
                        if (!p) {
                            const m = Object.create(null);
                            if (this.options.routeMasks) {
                                const y = VE(h.pathname, this.processedTree);
                                if (y) {
                                    Object.assign(m, y.rawParams);
                                    const {
                                        from: g,
                                        params: S,
                                        ...b
                                    } = y.route, E = S === !1 || S === null ? Object.create(null) : (S ? ? !0) === !0 ? m : Object.assign(m, Ri(S, m));
                                    f = {
                                        from: a.from,
                                        ...b,
                                        params: E
                                    }, p = r(f)
                                }
                            }
                        }
                        return p && (h.maskedLocation = p), h
                    };
                return a.mask ? l(a, {
                    from: a.from,
                    ...a.mask
                }) : l(a)
            }, this.commitLocation = async ({
                viewTransition: a,
                ignoreBlocker: r,
                ...l
            }) => {
                const c = () => {
                        const p = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
                        p.forEach(y => {
                            l.state[y] = this.latestLocation.state[y]
                        });
                        const m = Oe(l.state, this.latestLocation.state);
                        return p.forEach(y => {
                            delete l.state[y]
                        }), m
                    },
                    f = Di(this.latestLocation.href) === Di(l.href);
                let h = this.commitLocationPromise;
                if (this.commitLocationPromise = ya(() => {
                        h ? .resolve(), h = void 0
                    }), f && c()) this.load();
                else {
                    let {
                        maskedLocation: p,
                        hashScrollIntoView: m,
                        ...y
                    } = l;
                    p && (y = { ...p,
                        state: { ...p.state,
                            __tempKey: void 0,
                            __tempLocation: { ...y,
                                search: y.searchStr,
                                state: { ...y.state,
                                    __tempKey: void 0,
                                    __tempLocation: void 0,
                                    __TSR_key: void 0,
                                    key: void 0
                                }
                            }
                        }
                    }, (y.unmaskOnReload ? ? this.options.unmaskOnReload ? ? !1) && (y.state.__tempKey = this.tempLocationKey)), y.state.__hashScrollIntoViewOptions = m ? ? this.options.defaultHashScrollIntoView ? ? !0, this.shouldViewTransition = a, this.history[l.replace ? "replace" : "push"](y.publicHref, y.state, {
                        ignoreBlocker: r
                    })
                }
                return this.resetNextScroll = l.resetScroll ? ? !0, this.history.subscribers.size || this.load(), this.commitLocationPromise
            }, this.buildAndCommitLocation = ({
                replace: a,
                resetScroll: r,
                hashScrollIntoView: l,
                viewTransition: c,
                ignoreBlocker: f,
                href: h,
                ...p
            } = {}) => {
                if (h) {
                    const g = this.history.location.state.__TSR_index,
                        S = Ul(h, {
                            __TSR_index: a ? g : g + 1
                        }),
                        b = new URL(S.pathname, this.origin);
                    p.to = cd(this.rewrite, b).pathname, p.search = this.options.parseSearch(S.search), p.hash = S.hash.slice(1)
                }
                const m = this.buildLocation({ ...p,
                    _includeValidateSearch: !0
                });
                this.pendingBuiltLocation = m;
                const y = this.commitLocation({ ...m,
                    viewTransition: c,
                    replace: a,
                    resetScroll: r,
                    hashScrollIntoView: l,
                    ignoreBlocker: f
                });
                return Promise.resolve().then(() => {
                    this.pendingBuiltLocation === m && (this.pendingBuiltLocation = void 0)
                }), y
            }, this.navigate = async ({
                to: a,
                reloadDocument: r,
                href: l,
                publicHref: c,
                ...f
            }) => {
                let h = !1;
                if (l) try {
                    new URL(`${l}`), h = !0
                } catch {}
                if (h && !r && (r = !0), r) {
                    if (a !== void 0 || !l) {
                        const m = this.buildLocation({
                            to: a,
                            ...f
                        });
                        l = l ? ? m.publicHref, c = c ? ? m.publicHref
                    }
                    const p = !h && c ? c : l;
                    if (Bl(p, this.protocolAllowlist)) return Promise.resolve();
                    if (!f.ignoreBlocker) {
                        const m = this.history.getBlockers ? .() ? ? [];
                        for (const y of m)
                            if (y ? .blockerFn && await y.blockerFn({
                                    currentLocation: this.latestLocation,
                                    nextLocation: this.latestLocation,
                                    action: "PUSH"
                                })) return Promise.resolve()
                    }
                    return f.replace ? window.location.replace(p) : window.location.href = p, Promise.resolve()
                }
                return this.buildAndCommitLocation({ ...f,
                    href: l,
                    to: a,
                    _isNavigate: !0
                })
            }, this.beforeLoad = () => {
                this.cancelMatches(), this.updateLatestLocation();
                const a = this.matchRoutes(this.latestLocation),
                    r = this.stores.cachedMatches.get().filter(l => !a.some(c => c.id === l.id));
                this.batch(() => {
                    this.stores.status.set("pending"), this.stores.statusCode.set(200), this.stores.isLoading.set(!0), this.stores.location.set(this.latestLocation), this.stores.setPending(a), this.stores.setCached(r)
                })
            }, this.load = async a => {
                let r, l, c;
                const f = this.stores.resolvedLocation.get() ? ? this.stores.location.get();
                for (c = new Promise(p => {
                        this.startTransition(async () => {
                            try {
                                this.beforeLoad();
                                const m = this.latestLocation,
                                    y = ds(m, this.stores.resolvedLocation.get());
                                this.stores.redirect.get() || this.emit({
                                    type: "onBeforeNavigate",
                                    ...y
                                }), this.emit({
                                    type: "onBeforeLoad",
                                    ...y
                                }), await Qg({
                                    router: this,
                                    sync: a ? .sync,
                                    forceStaleReload: f.href === m.href,
                                    matches: this.stores.pendingMatches.get(),
                                    location: m,
                                    updateMatch: this.updateMatch,
                                    onReady: async () => {
                                        this.startTransition(() => {
                                            this.startViewTransition(async () => {
                                                let g = null,
                                                    S = null,
                                                    b = null,
                                                    E = null;
                                                this.batch(() => {
                                                    const _ = this.stores.pendingMatches.get(),
                                                        A = _.length,
                                                        R = this.stores.matches.get();
                                                    g = A ? R.filter(O => !this.stores.pendingMatchStores.has(O.id)) : null;
                                                    const N = new Set;
                                                    for (const O of this.stores.pendingMatchStores.values()) O.routeId && N.add(O.routeId);
                                                    const L = new Set;
                                                    for (const O of this.stores.matchStores.values()) O.routeId && L.add(O.routeId);
                                                    S = A ? R.filter(O => !N.has(O.routeId)) : null, b = A ? _.filter(O => !L.has(O.routeId)) : null, E = A ? _.filter(O => L.has(O.routeId)) : R, this.stores.isLoading.set(!1), this.stores.loadedAt.set(Date.now()), A && (this.stores.setMatches(_), this.stores.setPending([]), this.stores.setCached([...this.stores.cachedMatches.get(), ...g.filter(O => O.status !== "error" && O.status !== "notFound" && O.status !== "redirected")]), this.clearExpiredCache())
                                                });
                                                for (const [_, A] of [
                                                        [S, "onLeave"],
                                                        [b, "onEnter"],
                                                        [E, "onStay"]
                                                    ])
                                                    if (_)
                                                        for (const R of _) this.looseRoutesById[R.routeId].options[A] ? .(R)
                                            })
                                        })
                                    }
                                })
                            } catch (m) {
                                Le(m) ? (r = m, this.navigate({ ...r.options,
                                    replace: !0,
                                    ignoreBlocker: !0
                                })) : ge(m) && (l = m);
                                const y = r ? r.status : l ? 404 : this.stores.matches.get().some(g => g.status === "error") ? 500 : 200;
                                this.batch(() => {
                                    this.stores.statusCode.set(y), this.stores.redirect.set(r)
                                })
                            }
                            this.latestLoadPromise === c && (this.commitLocationPromise ? .resolve(), this.latestLoadPromise = void 0, this.commitLocationPromise = void 0), p()
                        })
                    }), this.latestLoadPromise = c, await c; this.latestLoadPromise && c !== this.latestLoadPromise;) await this.latestLoadPromise;
                let h;
                this.hasNotFoundMatch() ? h = 404 : this.stores.matches.get().some(p => p.status === "error") && (h = 500), h !== void 0 && this.stores.statusCode.set(h)
            }, this.startViewTransition = a => {
                const r = this.shouldViewTransition ? ? this.options.defaultViewTransition;
                if (this.shouldViewTransition = void 0, r && typeof document < "u" && "startViewTransition" in document && typeof document.startViewTransition == "function") {
                    let l;
                    if (typeof r == "object" && this.isViewTransitionTypesSupported) {
                        const c = this.latestLocation,
                            f = this.stores.resolvedLocation.get(),
                            h = typeof r.types == "function" ? r.types(ds(c, f)) : r.types;
                        if (h === !1) {
                            a();
                            return
                        }
                        l = {
                            update: a,
                            types: h
                        }
                    } else l = a;
                    document.startViewTransition(l)
                } else a()
            }, this.updateMatch = (a, r) => {
                this.startTransition(() => {
                    const l = this.stores.pendingMatchStores.get(a);
                    if (l) {
                        l.set(r);
                        return
                    }
                    const c = this.stores.matchStores.get(a);
                    if (c) {
                        c.set(r);
                        return
                    }
                    const f = this.stores.cachedMatchStores.get(a);
                    if (f) {
                        const h = r(f.get());
                        h.status === "redirected" ? this.stores.cachedMatchStores.delete(a) && this.stores.cachedIds.set(p => p.filter(m => m !== a)) : f.set(h)
                    }
                })
            }, this.getMatch = a => this.stores.cachedMatchStores.get(a) ? .get() ? ? this.stores.pendingMatchStores.get(a) ? .get() ? ? this.stores.matchStores.get(a) ? .get(), this.invalidate = a => {
                const r = l => a ? .filter ? .(l) ? ? !0 ? { ...l,
                    invalid: !0,
                    ...a ? .forcePending || l.status === "error" || l.status === "notFound" ? {
                        status: "pending",
                        error: void 0
                    } : void 0
                } : l;
                return this.batch(() => {
                    this.stores.setMatches(this.stores.matches.get().map(r)), this.stores.setCached(this.stores.cachedMatches.get().map(r)), this.stores.setPending(this.stores.pendingMatches.get().map(r))
                }), this.shouldViewTransition = !1, this.load({
                    sync: a ? .sync
                })
            }, this.getParsedLocationHref = a => a.publicHref || "/", this.resolveRedirect = a => {
                const r = a.headers.get("Location");
                if (!a.options.href || a.options._builtLocation) {
                    const l = a.options._builtLocation ? ? this.buildLocation(a.options),
                        c = this.getParsedLocationHref(l);
                    a.options.href = c, a.headers.set("Location", c)
                } else if (r) try {
                    const l = new URL(r);
                    if (this.origin && l.origin === this.origin) {
                        const c = l.pathname + l.search + l.hash;
                        a.options.href = c, a.headers.set("Location", c)
                    }
                } catch {}
                if (a.options.href && !a.options._builtLocation && Bl(a.options.href, this.protocolAllowlist)) throw new Error("Redirect blocked: unsafe protocol");
                return a.headers.get("Location") || a.headers.set("Location", a.options.href), a
            }, this.clearCache = a => {
                const r = a ? .filter;
                r !== void 0 ? this.stores.setCached(this.stores.cachedMatches.get().filter(l => !r(l))) : this.stores.setCached([])
            }, this.clearExpiredCache = () => {
                const a = Date.now(),
                    r = l => {
                        const c = this.looseRoutesById[l.routeId];
                        if (!c.options.loader) return !0;
                        const f = (l.preload ? c.options.preloadGcTime ? ? this.options.defaultPreloadGcTime : c.options.gcTime ? ? this.options.defaultGcTime) ? ? 300 * 1e3;
                        return l.status === "error" ? !0 : a - l.updatedAt >= f
                    };
                this.clearCache({
                    filter: r
                })
            }, this.loadRouteChunk = Vr, this.preloadRoute = async a => {
                const r = a._builtLocation ? ? this.buildLocation(a);
                let l = this.matchRoutes(r, {
                    throwOnError: !0,
                    preload: !0,
                    dest: a
                });
                const c = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()]),
                    f = new Set([...c, ...this.stores.cachedIds.get()]),
                    h = l.filter(p => !f.has(p.id));
                if (h.length) {
                    const p = this.stores.cachedMatches.get();
                    this.stores.setCached([...p, ...h])
                }
                try {
                    return l = await Qg({
                        router: this,
                        matches: l,
                        location: r,
                        preload: !0,
                        updateMatch: (p, m) => {
                            c.has(p) ? l = l.map(y => y.id === p ? m(y) : y) : this.updateMatch(p, m)
                        }
                    }), l
                } catch (p) {
                    if (Le(p)) return p.options.reloadDocument ? void 0 : await this.preloadRoute({ ...p.options,
                        _fromLocation: r
                    });
                    ge(p) || console.error(p);
                    return
                }
            }, this.matchRoute = (a, r) => {
                const l = { ...a,
                        to: a.to ? this.resolvePathWithBase(a.from || "", a.to) : void 0,
                        params: a.params || {},
                        leaveParams: !0
                    },
                    c = this.buildLocation(l);
                if (r ? .pending && this.stores.status.get() !== "pending") return !1;
                const f = (r ? .pending === void 0 ? !this.stores.isLoading.get() : r.pending) ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get(),
                    h = UE(c.pathname, r ? .caseSensitive ? ? !1, r ? .fuzzy ? ? !1, f.pathname, this.processedTree);
                return !h || a.params && !Oe(h.rawParams, a.params, {
                    partial: !0
                }) ? !1 : r ? .includeSearch ? ? !0 ? Oe(f.search, c.search, {
                    partial: !0
                }) ? h.rawParams : !1 : h.rawParams
            }, this.hasNotFoundMatch = () => this.stores.matches.get().some(a => a.status === "notFound" || a.globalNotFound), this.getStoreConfig = i, this.update({
                defaultPreloadDelay: 50,
                defaultPendingMs: 1e3,
                defaultPendingMinMs: 500,
                context: void 0,
                ...e,
                caseSensitive: e.caseSensitive ? ? !1,
                notFoundMode: e.notFoundMode ? ? "fuzzy",
                stringifySearch: e.stringifySearch ? ? nA,
                parseSearch: e.parseSearch ? ? eA,
                protocolAllowlist: e.protocolAllowlist ? ? CE
            }), typeof document < "u" && (self.__TSR_ROUTER__ = this)
        }
        isShell() {
            return !!this.options.isShell
        }
        isPrerendering() {
            return !!this.options.isPrerendering
        }
        get state() {
            return this.stores.__store.get()
        }
        setRoutes({
            routesById: e,
            routesByPath: i,
            processedTree: a
        }) {
            this.routesById = e, this.routesByPath = i, this.processedTree = a;
            const r = this.options.notFoundRoute;
            r && (r.init({
                originalIndex: 99999999999
            }), this.routesById[r.id] = r)
        }
        get looseRoutesById() {
            return this.routesById
        }
        getParentContext(e) {
            return e ? .id ? e.context ? ? this.options.context ? ? void 0 : this.options.context ? ? void 0
        }
        matchRoutesInternal(e, i) {
            const a = this.getMatchedRoutes(e.pathname),
                {
                    foundRoute: r,
                    routeParams: l,
                    parsedParams: c
                } = a;
            let {
                matchedRoutes: f
            } = a, h = !1;
            (r ? r.path !== "/" && l["**"] : Di(e.pathname)) && (this.options.notFoundRoute ? f = [...f, this.options.notFoundRoute] : h = !0);
            const p = h ? wA(this.options.notFoundMode, f) : void 0,
                m = new Array(f.length),
                y = new Map;
            for (const g of this.stores.matchStores.values()) g.routeId && y.set(g.routeId, g.get());
            for (let g = 0; g < f.length; g++) {
                const S = f[g],
                    b = m[g - 1];
                let E, _, A; {
                    const ct = b ? .search ? ? e.search,
                        Et = b ? ._strictSearch ? ? void 0;
                    try {
                        const yt = Al(S.options.validateSearch, { ...ct
                        }) ? ? void 0;
                        E = { ...ct,
                            ...yt
                        }, _ = { ...Et,
                            ...yt
                        }, A = void 0
                    } catch (yt) {
                        let P = yt;
                        if (yt instanceof Pl || (P = new Pl(yt.message, {
                                cause: yt
                            })), i ? .throwOnError) throw P;
                        E = ct, _ = {}, A = P
                    }
                }
                const R = S.options.loaderDeps ? .({
                        search: E
                    }) ? ? "",
                    N = R ? JSON.stringify(R) : "",
                    {
                        interpolatedPath: L,
                        usedParams: O
                    } = kg({
                        path: S.fullPath,
                        params: l,
                        decoder: this.pathParamsDecoder,
                        server: this.isServer
                    }),
                    F = S.id + L + N,
                    J = this.getMatch(F),
                    q = y.get(S.id),
                    K = J ? ._strictParams ? ? O;
                let Z;
                if (!J) try {
                    $g(S, O, c, K)
                } catch (ct) {
                    if (ge(ct) || Le(ct) ? Z = ct : Z = new bA(ct.message, {
                            cause: ct
                        }), i ? .throwOnError) throw Z
                }
                Object.assign(l, K);
                const I = q ? "stay" : "enter";
                let $;
                if (J) $ = { ...J,
                    cause: I,
                    params: q ? .params ? ? l,
                    _strictParams: K,
                    search: aa(q ? q.search : J.search, E),
                    _strictSearch: _
                };
                else {
                    const ct = S.options.loader || S.options.beforeLoad || S.lazyFn || eS(S) ? "pending" : "success";
                    $ = {
                        id: F,
                        ssr: S.options.ssr,
                        index: g,
                        routeId: S.id,
                        params: q ? .params ? ? l,
                        _strictParams: K,
                        pathname: L,
                        updatedAt: Date.now(),
                        search: q ? aa(q.search, E) : E,
                        _strictSearch: _,
                        searchError: void 0,
                        status: ct,
                        isFetching: !1,
                        error: void 0,
                        paramsError: Z,
                        __routeContext: void 0,
                        _nonReactive: {
                            loadPromise: ya()
                        },
                        __beforeLoadContext: void 0,
                        context: {},
                        abortController: new AbortController,
                        fetchCount: 0,
                        cause: I,
                        loaderDeps: q ? _i(q.loaderDeps, R) : R,
                        invalid: !1,
                        preload: !1,
                        links: void 0,
                        scripts: void 0,
                        headScripts: void 0,
                        meta: void 0,
                        staticData: S.options.staticData || {},
                        fullPath: S.fullPath
                    }
                }
                i ? .preload || ($.globalNotFound = p === S.id), $.searchError = A;
                const ot = this.getParentContext(b);
                $.context = { ...ot,
                    ...$.__routeContext,
                    ...$.__beforeLoadContext
                }, m[g] = $
            }
            for (let g = 0; g < m.length; g++) {
                const S = m[g],
                    b = this.looseRoutesById[S.routeId],
                    E = this.getMatch(S.id),
                    _ = y.get(S.routeId);
                if (S.params = _ ? aa(_.params, l) : l, !E) {
                    const A = m[g - 1],
                        R = this.getParentContext(A);
                    if (b.options.context) {
                        const N = {
                            deps: S.loaderDeps,
                            params: S.params,
                            context: R ? ? {},
                            location: e,
                            navigate: L => this.navigate({ ...L,
                                _fromLocation: e
                            }),
                            buildLocation: this.buildLocation,
                            cause: S.cause,
                            abortController: S.abortController,
                            preload: !!S.preload,
                            matches: m,
                            routeId: b.id
                        };
                        S.__routeContext = b.options.context(N) ? ? void 0
                    }
                    S.context = { ...R,
                        ...S.__routeContext,
                        ...S.__beforeLoadContext
                    }
                }
            }
            return m
        }
        matchRoutesLightweight(e) {
            const {
                matchedRoutes: i,
                routeParams: a,
                parsedParams: r
            } = this.getMatchedRoutes(e.pathname), l = zr(i), c = { ...e.search
            };
            for (const y of i) try {
                Object.assign(c, Al(y.options.validateSearch, c))
            } catch {}
            const f = zr(this.stores.matchesId.get()),
                h = f && this.stores.matchStores.get(f) ? .get(),
                p = h && h.routeId === l.id && h.pathname === e.pathname;
            let m;
            if (p) m = h.params;
            else {
                const y = Object.assign(Object.create(null), a);
                for (const g of i) try {
                    $g(g, a, r ? ? {}, y)
                } catch {}
                m = y
            }
            return {
                matchedRoutes: i,
                fullPath: l.fullPath,
                search: c,
                params: m
            }
        }
    },
    Pl = class extends Error {},
    bA = class extends Error {};

function xA(e) {
    return {
        loadedAt: 0,
        isLoading: !1,
        isTransitioning: !1,
        status: "idle",
        resolvedLocation: void 0,
        location: e,
        matches: [],
        statusCode: 200
    }
}

function Al(e, i) {
    if (e == null) return {};
    if ("~standard" in e) {
        const a = e["~standard"].validate(i);
        if (a instanceof Promise) throw new Pl("Async validation not supported");
        if (a.issues) throw new Pl(JSON.stringify(a.issues, void 0, 2), {
            cause: a
        });
        return a.value
    }
    return "parse" in e ? e.parse(i) : typeof e == "function" ? e(i) : {}
}

function TA({
    pathname: e,
    routesById: i,
    processedTree: a
}) {
    const r = Object.create(null),
        l = Di(e);
    let c, f;
    const h = PE(l, a, !0);
    return h && (c = h.route, Object.assign(r, h.rawParams), f = Object.assign(Object.create(null), h.parsedParams)), {
        matchedRoutes: h ? .branch || [i.__root__],
        routeParams: r,
        foundRoute: c,
        parsedParams: f
    }
}

function EA({
    search: e,
    dest: i,
    destRoutes: a,
    _includeValidateSearch: r
}) {
    return AA(a)(e, i, r ? ? !1)
}

function AA(e) {
    const i = {
        dest: null,
        _includeValidateSearch: !1,
        middlewares: []
    };
    for (const l of e) {
        if ("search" in l.options) l.options.search ? .middlewares && i.middlewares.push(...l.options.search.middlewares);
        else if (l.options.preSearchFilters || l.options.postSearchFilters) {
            const c = ({
                search: f,
                next: h
            }) => {
                let p = f;
                "preSearchFilters" in l.options && l.options.preSearchFilters && (p = l.options.preSearchFilters.reduce((y, g) => g(y), f));
                const m = h(p);
                return "postSearchFilters" in l.options && l.options.postSearchFilters ? l.options.postSearchFilters.reduce((y, g) => g(y), m) : m
            };
            i.middlewares.push(c)
        }
        if (l.options.validateSearch) {
            const c = ({
                search: f,
                next: h
            }) => {
                const p = h(f);
                if (!i._includeValidateSearch) return p;
                try {
                    return { ...p,
                        ...Al(l.options.validateSearch, p) ? ? void 0
                    }
                } catch {
                    return p
                }
            };
            i.middlewares.push(c)
        }
    }
    const a = ({
        search: l
    }) => {
        const c = i.dest;
        return c.search ? c.search === !0 ? l : Ri(c.search, l) : {}
    };
    i.middlewares.push(a);
    const r = (l, c, f) => {
        if (l >= f.length) return c;
        const h = f[l];
        return h({
            search: c,
            next: m => r(l + 1, m, f)
        })
    };
    return function(c, f, h) {
        return i.dest = f, i._includeValidateSearch = h, r(0, c, i.middlewares)
    }
}

function wA(e, i) {
    if (e !== "root")
        for (let a = i.length - 1; a >= 0; a--) {
            const r = i[a];
            if (r.children) return r.id
        }
    return da
}

function $g(e, i, a, r) {
    const l = e.options.params ? .parse ? ? e.options.parseParams;
    if (l)
        if (e.options.skipRouteOnParseError)
            for (const c in i) c in a && (r[c] = a[c]);
        else {
            const c = l(r);
            Object.assign(r, c)
        }
}
var Tn = Symbol.for("TSR_DEFERRED_PROMISE");

function RA(e, i) {
    const a = e;
    return a[Tn] || (a[Tn] = {
        status: "pending"
    }, a.then(r => {
        a[Tn].status = "success", a[Tn].data = r
    }).catch(r => {
        a[Tn].status = "error", a[Tn].error = {
            data: vA(r),
            __isServerError: !0
        }
    })), a
}
var _A = "Error preloading route! ☝️";

function tv(e, i) {
    if (e) return typeof e == "string" ? e : e[i]
}

function MA(e) {
    return typeof e == "string" ? {
        href: e,
        crossOrigin: void 0
    } : e
}
var nS = class {
        get to() {
            return this._to
        }
        get id() {
            return this._id
        }
        get path() {
            return this._path
        }
        get fullPath() {
            return this._fullPath
        }
        constructor(e) {
            if (this.init = i => {
                    this.originalIndex = i.originalIndex;
                    const a = this.options,
                        r = !a ? .path && !a ? .id;
                    this.parentRoute = this.options.getParentRoute ? .(), r ? this._path = da : this.parentRoute || Ne();
                    let l = r ? da : a ? .path;
                    l && l !== "/" && (l = F0(l));
                    const c = a ? .id || l;
                    let f = r ? da : Tl([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, c]);
                    l === "__root__" && (l = "/"), f !== "__root__" && (f = Tl(["/", f]));
                    const h = f === "__root__" ? "/" : Tl([this.parentRoute.fullPath, l]);
                    this._path = l, this._id = f, this._fullPath = h, this._to = Di(h)
                }, this.addChildren = i => this._addFileChildren(i), this._addFileChildren = i => (Array.isArray(i) && (this.children = i), typeof i == "object" && i !== null && (this.children = Object.values(i)), this), this._addFileTypes = () => this, this.updateLoader = i => (Object.assign(this.options, i), this), this.update = i => (Object.assign(this.options, i), this), this.lazy = i => (this.lazyFn = i, this), this.redirect = i => I0({
                    from: this.fullPath,
                    ...i
                }), this.options = e || {}, this.isRoot = !e ? .getParentRoute, e ? .id && e ? .path) throw new Error("Route cannot have both an 'id' and a 'path' option.")
        }
    },
    CA = class extends nS {
        constructor(e) {
            super(e)
        }
    };

function DA(e) {
    if (typeof document < "u" && document.querySelector) {
        const i = e.stores.location.get(),
            a = i.state.__hashScrollIntoViewOptions ? ? !0;
        if (a && i.hash !== "") {
            const r = document.getElementById(i.hash);
            r && r.scrollIntoView(a)
        }
    }
}
var OA = (e => (e[e.AggregateError = 1] = "AggregateError", e[e.ArrowFunction = 2] = "ArrowFunction", e[e.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", e[e.ObjectAssign = 8] = "ObjectAssign", e[e.BigIntTypedArray = 16] = "BigIntTypedArray", e[e.RegExp = 32] = "RegExp", e))(OA || {}),
    Qn = Symbol.asyncIterator,
    iS = Symbol.hasInstance,
    hs = Symbol.isConcatSpreadable,
    Zn = Symbol.iterator,
    aS = Symbol.match,
    sS = Symbol.matchAll,
    rS = Symbol.replace,
    oS = Symbol.search,
    lS = Symbol.species,
    uS = Symbol.split,
    cS = Symbol.toPrimitive,
    ms = Symbol.toStringTag,
    fS = Symbol.unscopables,
    dS = {
        [Qn]: 0,
        [iS]: 1,
        [hs]: 2,
        [Zn]: 3,
        [aS]: 4,
        [sS]: 5,
        [rS]: 6,
        [oS]: 7,
        [lS]: 8,
        [uS]: 9,
        [cS]: 10,
        [ms]: 11,
        [fS]: 12
    },
    LA = {
        0: Qn,
        1: iS,
        2: hs,
        3: Zn,
        4: aS,
        5: sS,
        6: rS,
        7: oS,
        8: lS,
        9: uS,
        10: cS,
        11: ms,
        12: fS
    },
    w = void 0,
    NA = {
        2: !0,
        3: !1,
        1: w,
        0: null,
        4: -0,
        5: Number.POSITIVE_INFINITY,
        6: Number.NEGATIVE_INFINITY,
        7: Number.NaN
    },
    zA = {
        0: "Error",
        1: "EvalError",
        2: "RangeError",
        3: "ReferenceError",
        4: "SyntaxError",
        5: "TypeError",
        6: "URIError"
    },
    jA = {
        0: Error,
        1: EvalError,
        2: RangeError,
        3: ReferenceError,
        4: SyntaxError,
        5: TypeError,
        6: URIError
    };

function _t(e, i, a, r, l, c, f, h, p, m, y, g) {
    return {
        t: e,
        i,
        s: a,
        c: r,
        m: l,
        p: c,
        e: f,
        a: h,
        f: p,
        b: m,
        o: y,
        l: g
    }
}

function zi(e) {
    return _t(2, w, e, w, w, w, w, w, w, w, w, w)
}
var hS = zi(2),
    mS = zi(3),
    BA = zi(1),
    VA = zi(0),
    UA = zi(4),
    PA = zi(5),
    HA = zi(6),
    kA = zi(7);

function qA(e) {
    switch (e) {
        case '"':
            return '\\"';
        case "\\":
            return "\\\\";
        case `
`:
            return "\\n";
        case "\r":
            return "\\r";
        case "\b":
            return "\\b";
        case "	":
            return "\\t";
        case "\f":
            return "\\f";
        case "<":
            return "\\x3C";
        case "\u2028":
            return "\\u2028";
        case "\u2029":
            return "\\u2029";
        default:
            return w
    }
}

function ji(e) {
    let i = "",
        a = 0,
        r;
    for (let l = 0, c = e.length; l < c; l++) r = qA(e[l]), r && (i += e.slice(a, l) + r, a = l + 1);
    return a === 0 ? i = e : i += e.slice(a), i
}

function KA(e) {
    switch (e) {
        case "\\\\":
            return "\\";
        case '\\"':
            return '"';
        case "\\n":
            return `
`;
        case "\\r":
            return "\r";
        case "\\b":
            return "\b";
        case "\\t":
            return "	";
        case "\\f":
            return "\f";
        case "\\x3C":
            return "<";
        case "\\u2028":
            return "\u2028";
        case "\\u2029":
            return "\u2029";
        default:
            return e
    }
}

function Bi(e) {
    return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, KA)
}
var pl = "__SEROVAL_REFS__",
    pS = new Map,
    ls = new Map;

function yS(e) {
    return pS.has(e)
}

function YA(e) {
    return ls.has(e)
}

function GA(e) {
    if (yS(e)) return pS.get(e);
    throw new Tw(e)
}

function XA(e) {
    if (YA(e)) return ls.get(e);
    throw new Ew(e)
}
typeof globalThis < "u" ? Object.defineProperty(globalThis, pl, {
    value: ls,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof window < "u" ? Object.defineProperty(window, pl, {
    value: ls,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof self < "u" ? Object.defineProperty(self, pl, {
    value: ls,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof global < "u" && Object.defineProperty(global, pl, {
    value: ls,
    configurable: !0,
    writable: !1,
    enumerable: !1
});

function Qd(e) {
    return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0
}

function FA(e) {
    let i = zA[Qd(e)];
    return e.name !== i ? {
        name: e.name
    } : e.constructor.name !== i ? {
        name: e.constructor.name
    } : {}
}

function gS(e, i) {
    let a = FA(e),
        r = Object.getOwnPropertyNames(e);
    for (let l = 0, c = r.length, f; l < c; l++) f = r[l], f !== "name" && f !== "message" && (f === "stack" ? i & 4 && (a = a || {}, a[f] = e[f]) : (a = a || {}, a[f] = e[f]));
    return a
}

function vS(e) {
    return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1
}

function QA(e) {
    switch (e) {
        case Number.POSITIVE_INFINITY:
            return PA;
        case Number.NEGATIVE_INFINITY:
            return HA
    }
    return e !== e ? kA : Object.is(e, -0) ? UA : _t(0, w, e, w, w, w, w, w, w, w, w, w)
}

function SS(e) {
    return _t(1, w, ji(e), w, w, w, w, w, w, w, w, w)
}

function ZA(e) {
    return _t(3, w, "" + e, w, w, w, w, w, w, w, w, w)
}

function IA(e) {
    return _t(4, e, w, w, w, w, w, w, w, w, w, w)
}

function JA(e, i) {
    let a = i.valueOf();
    return _t(5, e, a !== a ? "" : i.toISOString(), w, w, w, w, w, w, w, w, w)
}

function WA(e, i) {
    return _t(6, e, w, ji(i.source), i.flags, w, w, w, w, w, w, w)
}

function $A(e, i) {
    return _t(17, e, dS[i], w, w, w, w, w, w, w, w, w)
}

function tw(e, i) {
    return _t(18, e, ji(GA(i)), w, w, w, w, w, w, w, w, w)
}

function ew(e, i, a) {
    return _t(25, e, a, ji(i), w, w, w, w, w, w, w, w)
}

function nw(e, i, a) {
    return _t(9, e, w, w, w, w, w, a, w, w, vS(i), w)
}

function iw(e, i) {
    return _t(21, e, w, w, w, w, w, w, i, w, w, w)
}

function aw(e, i, a) {
    return _t(15, e, w, i.constructor.name, w, w, w, w, a, i.byteOffset, w, i.length)
}

function sw(e, i, a) {
    return _t(16, e, w, i.constructor.name, w, w, w, w, a, i.byteOffset, w, i.byteLength)
}

function rw(e, i, a) {
    return _t(20, e, w, w, w, w, w, w, a, i.byteOffset, w, i.byteLength)
}

function ow(e, i, a) {
    return _t(13, e, Qd(i), w, ji(i.message), a, w, w, w, w, w, w)
}

function lw(e, i, a) {
    return _t(14, e, Qd(i), w, ji(i.message), a, w, w, w, w, w, w)
}

function uw(e, i) {
    return _t(7, e, w, w, w, w, w, i, w, w, w, w)
}

function cw(e, i) {
    return _t(28, w, w, w, w, w, w, [e, i], w, w, w, w)
}

function fw(e, i) {
    return _t(30, w, w, w, w, w, w, [e, i], w, w, w, w)
}

function dw(e, i, a) {
    return _t(31, e, w, w, w, w, w, a, i, w, w, w)
}

function hw(e, i) {
    return _t(32, e, w, w, w, w, w, w, i, w, w, w)
}

function mw(e, i) {
    return _t(33, e, w, w, w, w, w, w, i, w, w, w)
}

function pw(e, i) {
    return _t(34, e, w, w, w, w, w, w, i, w, w, w)
}

function yw(e, i, a, r) {
    return _t(35, e, a, w, w, w, w, i, w, w, w, r)
}
var gw = {
    parsing: 1,
    serialization: 2,
    deserialization: 3
};

function vw(e) {
    return `Seroval Error (step: ${gw[e]})`
}
var Sw = (e, i) => vw(e),
    bS = class extends Error {
        constructor(e, i) {
            super(Sw(e)), this.cause = i
        }
    },
    ev = class extends bS {
        constructor(e) {
            super("parsing", e)
        }
    },
    bw = class extends bS {
        constructor(e) {
            super("deserialization", e)
        }
    };

function In(e) {
    return `Seroval Error (specific: ${e})`
}
var eu = class extends Error {
        constructor(i) {
            super(In(1)), this.value = i
        }
    },
    xS = class extends Error {
        constructor(i) {
            super(In(2))
        }
    },
    xw = class extends Error {
        constructor(e) {
            super(In(3))
        }
    },
    Yr = class extends Error {
        constructor(e) {
            super(In(4))
        }
    },
    Tw = class extends Error {
        constructor(e) {
            super(In(5)), this.value = e
        }
    },
    Ew = class extends Error {
        constructor(e) {
            super(In(6))
        }
    },
    Aw = class extends Error {
        constructor(e) {
            super(In(7))
        }
    },
    Vi = class extends Error {
        constructor(e) {
            super(In(8))
        }
    },
    ww = class extends Error {
        constructor(i) {
            super(In(9))
        }
    },
    Rw = class {
        constructor(e, i) {
            this.value = e, this.replacement = i
        }
    },
    nu = () => {
        let e = {
            p: 0,
            s: 0,
            f: 0
        };
        return e.p = new Promise((i, a) => {
            e.s = i, e.f = a
        }), e
    },
    _w = (e, i) => {
        e.s(i), e.p.s = 1, e.p.v = i
    },
    Mw = (e, i) => {
        e.f(i), e.p.s = 2, e.p.v = i
    };
nu.toString();
_w.toString();
Mw.toString();
var Cw = () => {
        let e = [],
            i = [],
            a = !0,
            r = !1,
            l = 0,
            c = (p, m, y) => {
                for (y = 0; y < l; y++) i[y] && i[y][m](p)
            },
            f = (p, m, y, g) => {
                for (m = 0, y = e.length; m < y; m++) g = e[m], !a && m === y - 1 ? p[r ? "return" : "throw"](g) : p.next(g)
            },
            h = (p, m) => (a && (m = l++, i[m] = p), f(p), () => {
                a && (i[m] = i[l], i[l--] = void 0)
            });
        return {
            __SEROVAL_STREAM__: !0,
            on: p => h(p),
            next: p => {
                a && (e.push(p), c(p, "next"))
            },
            throw: p => {
                a && (e.push(p), c(p, "throw"), a = !1, r = !1, i.length = 0)
            },
            return: p => {
                a && (e.push(p), c(p, "return"), a = !1, r = !0, i.length = 0)
            }
        }
    },
    Dw = e => i => () => {
        let a = 0,
            r = {
                [e]: () => r,
                next: () => {
                    if (a > i.d) return {
                        done: !0,
                        value: void 0
                    };
                    let l = a++,
                        c = i.v[l];
                    if (l === i.t) throw c;
                    return {
                        done: l === i.d,
                        value: c
                    }
                }
            };
        return r
    },
    Ow = (e, i) => a => () => {
        let r = 0,
            l = -1,
            c = !1,
            f = [],
            h = [],
            p = (y = 0, g = h.length) => {
                for (; y < g; y++) h[y].s({
                    done: !0,
                    value: void 0
                })
            };
        a.on({
            next: y => {
                let g = h.shift();
                g && g.s({
                    done: !1,
                    value: y
                }), f.push(y)
            },
            throw: y => {
                let g = h.shift();
                g && g.f(y), p(), l = f.length, c = !0, f.push(y)
            },
            return: y => {
                let g = h.shift();
                g && g.s({
                    done: !0,
                    value: y
                }), p(), l = f.length, f.push(y)
            }
        });
        let m = {
            [e]: () => m,
            next: () => {
                if (l === -1) {
                    let S = r++;
                    if (S >= f.length) {
                        let b = i();
                        return h.push(b), b.p
                    }
                    return {
                        done: !1,
                        value: f[S]
                    }
                }
                if (r > l) return {
                    done: !0,
                    value: void 0
                };
                let y = r++,
                    g = f[y];
                if (y !== l) return {
                    done: !1,
                    value: g
                };
                if (c) throw g;
                return {
                    done: !0,
                    value: g
                }
            }
        };
        return m
    },
    TS = e => {
        let i = atob(e),
            a = i.length,
            r = new Uint8Array(a);
        for (let l = 0; l < a; l++) r[l] = i.charCodeAt(l);
        return r.buffer
    };
TS.toString();

function Lw(e) {
    return "__SEROVAL_SEQUENCE__" in e
}

function ES(e, i, a) {
    return {
        __SEROVAL_SEQUENCE__: !0,
        v: e,
        t: i,
        d: a
    }
}

function Nw(e) {
    let i = [],
        a = -1,
        r = -1,
        l = e[Zn]();
    for (;;) try {
        let c = l.next();
        if (i.push(c.value), c.done) {
            r = i.length - 1;
            break
        }
    } catch (c) {
        a = i.length, i.push(c)
    }
    return ES(i, a, r)
}
var zw = Dw(Zn);

function jw(e) {
    return zw(e)
}
var Bw = {},
    Vw = {},
    Uw = {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {}
    };

function iu(e) {
    return "__SEROVAL_STREAM__" in e
}

function ga() {
    return Cw()
}

function Pw(e) {
    let i = ga(),
        a = e[Qn]();
    async function r() {
        try {
            let l = await a.next();
            l.done ? i.return(l.value) : (i.next(l.value), await r())
        } catch (l) {
            i.throw(l)
        }
    }
    return r().catch(() => {}), i
}
var Hw = Ow(Qn, nu);

function kw(e) {
    return Hw(e)
}
async function qw(e) {
    try {
        return [1, await e]
    } catch (i) {
        return [0, i]
    }
}

function Kw(e, i) {
    return {
        plugins: i.plugins,
        mode: e,
        marked: new Set,
        features: 63 ^ (i.disabledFeatures || 0),
        refs: i.refs || new Map,
        depthLimit: i.depthLimit || 1e3
    }
}

function wl(e, i) {
    e.marked.add(i)
}

function Yw(e, i) {
    let a = e.refs.size;
    return e.refs.set(i, a), a
}

function au(e, i) {
    let a = e.refs.get(i);
    return a != null ? (wl(e, a), {
        type: 1,
        value: IA(a)
    }) : {
        type: 0,
        value: Yw(e, i)
    }
}

function Zd(e, i) {
    let a = au(e, i);
    return a.type === 1 ? a : yS(i) ? {
        type: 2,
        value: tw(a.value, i)
    } : a
}

function ua(e, i) {
    let a = Zd(e, i);
    if (a.type !== 0) return a.value;
    if (i in dS) return $A(a.value, i);
    throw new eu(i)
}

function su(e, i) {
    let a = au(e, Uw[i]);
    return a.type === 1 ? a.value : _t(26, a.value, i, w, w, w, w, w, w, w, w, w)
}

function Gw(e) {
    let i = au(e, Bw);
    return i.type === 1 ? i.value : _t(27, i.value, w, w, w, w, w, w, ua(e, Zn), w, w, w)
}

function Xw(e) {
    let i = au(e, Vw);
    return i.type === 1 ? i.value : _t(29, i.value, w, w, w, w, w, [su(e, 1), ua(e, Qn)], w, w, w, w)
}

function Fw(e, i, a, r) {
    return _t(a ? 11 : 10, e, w, w, w, r, w, w, w, w, vS(i), w)
}

function Qw(e, i, a, r) {
    return _t(8, i, w, w, w, w, {
        k: a,
        v: r
    }, w, su(e, 0), w, w, w)
}

function Zw(e, i, a) {
    let r = new Uint8Array(a),
        l = "";
    for (let c = 0, f = r.length; c < f; c++) l += String.fromCharCode(r[c]);
    return _t(19, i, ji(btoa(l)), w, w, w, w, w, su(e, 5), w, w, w)
}

function Iw(e, i) {
    return {
        base: Kw(e, i),
        child: void 0
    }
}
var Jw = class {
    constructor(e, i) {
        this._p = e, this.depth = i
    }
    parse(e) {
        return ae(this._p, this.depth, e)
    }
};
async function Ww(e, i, a) {
    let r = [];
    for (let l = 0, c = a.length; l < c; l++) l in a ? r[l] = await ae(e, i, a[l]) : r[l] = 0;
    return r
}
async function $w(e, i, a, r) {
    return nw(a, r, await Ww(e, i, r))
}
async function Id(e, i, a) {
    let r = Object.entries(a),
        l = [],
        c = [];
    for (let f = 0, h = r.length; f < h; f++) l.push(ji(r[f][0])), c.push(await ae(e, i, r[f][1]));
    return Zn in a && (l.push(ua(e.base, Zn)), c.push(cw(Gw(e.base), await ae(e, i, Nw(a))))), Qn in a && (l.push(ua(e.base, Qn)), c.push(fw(Xw(e.base), await ae(e, i, Pw(a))))), ms in a && (l.push(ua(e.base, ms)), c.push(SS(a[ms]))), hs in a && (l.push(ua(e.base, hs)), c.push(a[hs] ? hS : mS)), {
        k: l,
        v: c
    }
}
async function Pf(e, i, a, r, l) {
    return Fw(a, r, l, await Id(e, i, r))
}
async function tR(e, i, a, r) {
    return iw(a, await ae(e, i, r.valueOf()))
}
async function eR(e, i, a, r) {
    return aw(a, r, await ae(e, i, r.buffer))
}
async function nR(e, i, a, r) {
    return sw(a, r, await ae(e, i, r.buffer))
}
async function iR(e, i, a, r) {
    return rw(a, r, await ae(e, i, r.buffer))
}
async function nv(e, i, a, r) {
    let l = gS(r, e.base.features);
    return ow(a, r, l ? await Id(e, i, l) : w)
}
async function aR(e, i, a, r) {
    let l = gS(r, e.base.features);
    return lw(a, r, l ? await Id(e, i, l) : w)
}
async function sR(e, i, a, r) {
    let l = [],
        c = [];
    for (let [f, h] of r.entries()) l.push(await ae(e, i, f)), c.push(await ae(e, i, h));
    return Qw(e.base, a, l, c)
}
async function rR(e, i, a, r) {
    let l = [];
    for (let c of r.keys()) l.push(await ae(e, i, c));
    return uw(a, l)
}
async function AS(e, i, a, r) {
    let l = e.base.plugins;
    if (l)
        for (let c = 0, f = l.length; c < f; c++) {
            let h = l[c];
            if (h.parse.async && h.test(r)) return ew(a, h.tag, await h.parse.async(r, new Jw(e, i), {
                id: a
            }))
        }
    return w
}
async function oR(e, i, a, r) {
    let [l, c] = await qw(r);
    return _t(12, a, l, w, w, w, w, w, await ae(e, i, c), w, w, w)
}

function lR(e, i, a, r, l) {
    let c = [],
        f = a.on({
            next: h => {
                wl(this.base, i), ae(this, e, h).then(p => {
                    c.push(hw(i, p))
                }, p => {
                    l(p), f()
                })
            },
            throw: h => {
                wl(this.base, i), ae(this, e, h).then(p => {
                    c.push(mw(i, p)), r(c), f()
                }, p => {
                    l(p), f()
                })
            },
            return: h => {
                wl(this.base, i), ae(this, e, h).then(p => {
                    c.push(pw(i, p)), r(c), f()
                }, p => {
                    l(p), f()
                })
            }
        })
}
async function uR(e, i, a, r) {
    return dw(a, su(e.base, 4), await new Promise(lR.bind(e, i, a, r)))
}
async function cR(e, i, a, r) {
    let l = [];
    for (let c = 0, f = r.v.length; c < f; c++) l[c] = await ae(e, i, r.v[c]);
    return yw(a, l, r.t, r.d)
}
async function fR(e, i, a, r) {
    if (Array.isArray(r)) return $w(e, i, a, r);
    if (iu(r)) return uR(e, i, a, r);
    if (Lw(r)) return cR(e, i, a, r);
    let l = r.constructor;
    if (l === Rw) return ae(e, i, r.replacement);
    let c = await AS(e, i, a, r);
    if (c) return c;
    switch (l) {
        case Object:
            return Pf(e, i, a, r, !1);
        case w:
            return Pf(e, i, a, r, !0);
        case Date:
            return JA(a, r);
        case Error:
        case EvalError:
        case RangeError:
        case ReferenceError:
        case SyntaxError:
        case TypeError:
        case URIError:
            return nv(e, i, a, r);
        case Number:
        case Boolean:
        case String:
        case BigInt:
            return tR(e, i, a, r);
        case ArrayBuffer:
            return Zw(e.base, a, r);
        case Int8Array:
        case Int16Array:
        case Int32Array:
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
        case Uint8ClampedArray:
        case Float32Array:
        case Float64Array:
            return eR(e, i, a, r);
        case DataView:
            return iR(e, i, a, r);
        case Map:
            return sR(e, i, a, r);
        case Set:
            return rR(e, i, a, r)
    }
    if (l === Promise || r instanceof Promise) return oR(e, i, a, r);
    let f = e.base.features;
    if (f & 32 && l === RegExp) return WA(a, r);
    if (f & 16) switch (l) {
        case BigInt64Array:
        case BigUint64Array:
            return nR(e, i, a, r)
    }
    if (f & 1 && typeof AggregateError < "u" && (l === AggregateError || r instanceof AggregateError)) return aR(e, i, a, r);
    if (r instanceof Error) return nv(e, i, a, r);
    if (Zn in r || Qn in r) return Pf(e, i, a, r, !!l);
    throw new eu(r)
}
async function dR(e, i, a) {
    let r = Zd(e.base, a);
    if (r.type !== 0) return r.value;
    let l = await AS(e, i, r.value, a);
    if (l) return l;
    throw new eu(a)
}
async function ae(e, i, a) {
    switch (typeof a) {
        case "boolean":
            return a ? hS : mS;
        case "undefined":
            return BA;
        case "string":
            return SS(a);
        case "number":
            return QA(a);
        case "bigint":
            return ZA(a);
        case "object":
            {
                if (a) {
                    let r = Zd(e.base, a);
                    return r.type === 0 ? await fR(e, i + 1, r.value, a) : r.value
                }
                return VA
            }
        case "symbol":
            return ua(e.base, a);
        case "function":
            return dR(e, i, a);
        default:
            throw new eu(a)
    }
}
async function hR(e, i) {
    try {
        return await ae(e, 0, i)
    } catch (a) {
        throw a instanceof ev ? a : new ev(a)
    }
}
var mR = (e => (e[e.Vanilla = 1] = "Vanilla", e[e.Cross = 2] = "Cross", e))(mR || {});

function wS(e, i) {
    for (let a = 0, r = i.length; a < r; a++) {
        let l = i[a];
        e.has(l) || (e.add(l), l.extends && wS(e, l.extends))
    }
}

function RS(e) {
    if (e) {
        let i = new Set;
        return wS(i, e), [...i]
    }
}

function pR(e) {
    switch (e) {
        case "Int8Array":
            return Int8Array;
        case "Int16Array":
            return Int16Array;
        case "Int32Array":
            return Int32Array;
        case "Uint8Array":
            return Uint8Array;
        case "Uint16Array":
            return Uint16Array;
        case "Uint32Array":
            return Uint32Array;
        case "Uint8ClampedArray":
            return Uint8ClampedArray;
        case "Float32Array":
            return Float32Array;
        case "Float64Array":
            return Float64Array;
        case "BigInt64Array":
            return BigInt64Array;
        case "BigUint64Array":
            return BigUint64Array;
        default:
            throw new Aw(e)
    }
}
var yR = 1e6,
    gR = 1e4,
    vR = 2e4;

function _S(e, i) {
    switch (i) {
        case 3:
            return Object.freeze(e);
        case 1:
            return Object.preventExtensions(e);
        case 2:
            return Object.seal(e);
        default:
            return e
    }
}
var SR = 1e3;

function bR(e, i) {
    var a;
    return {
        mode: e,
        plugins: i.plugins,
        refs: i.refs || new Map,
        features: (a = i.features) != null ? a : 63 ^ (i.disabledFeatures || 0),
        depthLimit: i.depthLimit || SR
    }
}

function xR(e) {
    return {
        mode: 2,
        base: bR(2, e),
        child: w
    }
}
var TR = class {
    constructor(e, i) {
        this._p = e, this.depth = i
    }
    deserialize(e) {
        return Bt(this._p, this.depth, e)
    }
};

function MS(e, i) {
    if (i < 0 || !Number.isFinite(i) || !Number.isInteger(i)) throw new Vi({
        t: 4,
        i
    });
    if (e.refs.has(i)) throw new Error("Conflicted ref id: " + i)
}

function ER(e, i, a) {
    return MS(e.base, i), e.state.marked.has(i) && e.base.refs.set(i, a), a
}

function AR(e, i, a) {
    return MS(e.base, i), e.base.refs.set(i, a), a
}

function se(e, i, a) {
    return e.mode === 1 ? ER(e, i, a) : AR(e, i, a)
}

function dd(e, i, a) {
    if (Object.hasOwn(i, a)) return i[a];
    throw new Vi(e)
}

function wR(e, i) {
    return se(e, i.i, XA(Bi(i.s)))
}

function RR(e, i, a) {
    let r = a.a,
        l = r.length,
        c = se(e, a.i, new Array(l));
    for (let f = 0, h; f < l; f++) h = r[f], h && (c[f] = Bt(e, i, h));
    return _S(c, a.o), c
}

function _R(e) {
    switch (e) {
        case "constructor":
        case "__proto__":
        case "prototype":
        case "__defineGetter__":
        case "__defineSetter__":
        case "__lookupGetter__":
        case "__lookupSetter__":
            return !1;
        default:
            return !0
    }
}

function MR(e) {
    switch (e) {
        case Qn:
        case hs:
        case ms:
        case Zn:
            return !0;
        default:
            return !1
    }
}

function iv(e, i, a) {
    _R(i) ? e[i] = a : Object.defineProperty(e, i, {
        value: a,
        configurable: !0,
        enumerable: !0,
        writable: !0
    })
}

function CR(e, i, a, r, l) {
    if (typeof r == "string") iv(a, Bi(r), Bt(e, i, l));
    else {
        let c = Bt(e, i, r);
        switch (typeof c) {
            case "string":
                iv(a, c, Bt(e, i, l));
                break;
            case "symbol":
                MR(c) && (a[c] = Bt(e, i, l));
                break;
            default:
                throw new Vi(r)
        }
    }
}

function CS(e, i, a, r) {
    let l = a.k;
    if (l.length > 0)
        for (let c = 0, f = a.v, h = l.length; c < h; c++) CR(e, i, r, l[c], f[c]);
    return r
}

function DR(e, i, a) {
    let r = se(e, a.i, a.t === 10 ? {} : Object.create(null));
    return CS(e, i, a.p, r), _S(r, a.o), r
}

function OR(e, i) {
    return se(e, i.i, new Date(i.s))
}

function LR(e, i) {
    if (e.base.features & 32) {
        let a = Bi(i.c);
        if (a.length > vR) throw new Vi(i);
        return se(e, i.i, new RegExp(a, i.m))
    }
    throw new xS(i)
}

function NR(e, i, a) {
    let r = se(e, a.i, new Set);
    for (let l = 0, c = a.a, f = c.length; l < f; l++) r.add(Bt(e, i, c[l]));
    return r
}

function zR(e, i, a) {
    let r = se(e, a.i, new Map);
    for (let l = 0, c = a.e.k, f = a.e.v, h = c.length; l < h; l++) r.set(Bt(e, i, c[l]), Bt(e, i, f[l]));
    return r
}

function jR(e, i) {
    if (i.s.length > yR) throw new Vi(i);
    return se(e, i.i, TS(Bi(i.s)))
}

function BR(e, i, a) {
    var r;
    let l = pR(a.c),
        c = Bt(e, i, a.f),
        f = (r = a.b) != null ? r : 0;
    if (f < 0 || f > c.byteLength) throw new Vi(a);
    return se(e, a.i, new l(c, f, a.l))
}

function VR(e, i, a) {
    var r;
    let l = Bt(e, i, a.f),
        c = (r = a.b) != null ? r : 0;
    if (c < 0 || c > l.byteLength) throw new Vi(a);
    return se(e, a.i, new DataView(l, c, a.l))
}

function DS(e, i, a, r) {
    if (a.p) {
        let l = CS(e, i, a.p, {});
        Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
    }
    return r
}

function UR(e, i, a) {
    let r = se(e, a.i, new AggregateError([], Bi(a.m)));
    return DS(e, i, a, r)
}

function PR(e, i, a) {
    let r = dd(a, jA, a.s),
        l = se(e, a.i, new r(Bi(a.m)));
    return DS(e, i, a, l)
}

function HR(e, i, a) {
    let r = nu(),
        l = se(e, a.i, r.p),
        c = Bt(e, i, a.f);
    return a.s ? r.s(c) : r.f(c), l
}

function kR(e, i, a) {
    return se(e, a.i, Object(Bt(e, i, a.f)))
}

function qR(e, i, a) {
    let r = e.base.plugins;
    if (r) {
        let l = Bi(a.c);
        for (let c = 0, f = r.length; c < f; c++) {
            let h = r[c];
            if (h.tag === l) return se(e, a.i, h.deserialize(a.s, new TR(e, i), {
                id: a.i
            }))
        }
    }
    throw new xw(a.c)
}

function KR(e, i) {
    return se(e, i.i, se(e, i.s, nu()).p)
}

function YR(e, i, a) {
    let r = e.base.refs.get(a.i);
    if (r) return r.s(Bt(e, i, a.a[1])), w;
    throw new Yr("Promise")
}

function GR(e, i, a) {
    let r = e.base.refs.get(a.i);
    if (r) return r.f(Bt(e, i, a.a[1])), w;
    throw new Yr("Promise")
}

function XR(e, i, a) {
    Bt(e, i, a.a[0]);
    let r = Bt(e, i, a.a[1]);
    return jw(r)
}

function FR(e, i, a) {
    Bt(e, i, a.a[0]);
    let r = Bt(e, i, a.a[1]);
    return kw(r)
}

function QR(e, i, a) {
    let r = se(e, a.i, ga()),
        l = a.a,
        c = l.length;
    if (c)
        for (let f = 0; f < c; f++) Bt(e, i, l[f]);
    return r
}

function ZR(e, i, a) {
    let r = e.base.refs.get(a.i);
    if (r && iu(r)) return r.next(Bt(e, i, a.f)), w;
    throw new Yr("Stream")
}

function IR(e, i, a) {
    let r = e.base.refs.get(a.i);
    if (r && iu(r)) return r.throw(Bt(e, i, a.f)), w;
    throw new Yr("Stream")
}

function JR(e, i, a) {
    let r = e.base.refs.get(a.i);
    if (r && iu(r)) return r.return(Bt(e, i, a.f)), w;
    throw new Yr("Stream")
}

function WR(e, i, a) {
    return Bt(e, i, a.f), w
}

function $R(e, i, a) {
    return Bt(e, i, a.a[1]), w
}

function t_(e, i, a) {
    let r = se(e, a.i, ES([], a.s, a.l));
    for (let l = 0, c = a.a.length; l < c; l++) r.v[l] = Bt(e, i, a.a[l]);
    return r
}

function Bt(e, i, a) {
    if (i > e.base.depthLimit) throw new ww(e.base.depthLimit);
    switch (i += 1, a.t) {
        case 2:
            return dd(a, NA, a.s);
        case 0:
            return Number(a.s);
        case 1:
            return Bi(String(a.s));
        case 3:
            if (String(a.s).length > gR) throw new Vi(a);
            return BigInt(a.s);
        case 4:
            return e.base.refs.get(a.i);
        case 18:
            return wR(e, a);
        case 9:
            return RR(e, i, a);
        case 10:
        case 11:
            return DR(e, i, a);
        case 5:
            return OR(e, a);
        case 6:
            return LR(e, a);
        case 7:
            return NR(e, i, a);
        case 8:
            return zR(e, i, a);
        case 19:
            return jR(e, a);
        case 16:
        case 15:
            return BR(e, i, a);
        case 20:
            return VR(e, i, a);
        case 14:
            return UR(e, i, a);
        case 13:
            return PR(e, i, a);
        case 12:
            return HR(e, i, a);
        case 17:
            return dd(a, LA, a.s);
        case 21:
            return kR(e, i, a);
        case 25:
            return qR(e, i, a);
        case 22:
            return KR(e, a);
        case 23:
            return YR(e, i, a);
        case 24:
            return GR(e, i, a);
        case 28:
            return XR(e, i, a);
        case 30:
            return FR(e, i, a);
        case 31:
            return QR(e, i, a);
        case 32:
            return ZR(e, i, a);
        case 33:
            return IR(e, i, a);
        case 34:
            return JR(e, i, a);
        case 27:
            return WR(e, i, a);
        case 29:
            return $R(e, i, a);
        case 35:
            return t_(e, i, a);
        default:
            throw new xS(a)
    }
}

function e_(e, i) {
    try {
        return Bt(e, 0, i)
    } catch (a) {
        throw new bw(a)
    }
}
var n_ = () => T;
n_.toString();

function av(e, i) {
    let a = RS(i.plugins),
        r = xR({
            plugins: a,
            refs: i.refs,
            features: i.features,
            disabledFeatures: i.disabledFeatures,
            depthLimit: i.depthLimit
        });
    return e_(r, e)
}
async function i_(e, i = {}) {
    let a = RS(i.plugins),
        r = Iw(1, {
            plugins: a,
            disabledFeatures: i.disabledFeatures
        });
    return {
        t: await hR(r, e),
        f: r.base.features,
        m: Array.from(r.base.marked)
    }
}

function a_(e) {
    return {
        tag: "$TSR/t/" + e.key,
        test: e.test,
        parse: {
            sync(i, a, r) {
                return {
                    v: a.parse(e.toSerializable(i))
                }
            },
            async async (i, a, r) {
                return {
                    v: await a.parse(e.toSerializable(i))
                }
            },
            stream(i, a, r) {
                return {
                    v: a.parse(e.toSerializable(i))
                }
            }
        },
        serialize: void 0,
        deserialize(i, a, r) {
            return e.fromSerializable(a.deserialize(i.v))
        }
    }
}
var s_ = class {
        constructor(e, i) {
            this.stream = e, this.hint = i ? .hint ? ? "binary"
        }
    },
    Hl = globalThis.Buffer,
    OS = !!Hl && typeof Hl.from == "function";

function LS(e) {
    if (e.length === 0) return "";
    if (OS) return Hl.from(e).toString("base64");
    const i = 32768,
        a = [];
    for (let r = 0; r < e.length; r += i) {
        const l = e.subarray(r, r + i);
        a.push(String.fromCharCode.apply(null, l))
    }
    return btoa(a.join(""))
}

function NS(e) {
    if (e.length === 0) return new Uint8Array(0);
    if (OS) {
        const r = Hl.from(e, "base64");
        return new Uint8Array(r.buffer, r.byteOffset, r.byteLength)
    }
    const i = atob(e),
        a = new Uint8Array(i.length);
    for (let r = 0; r < i.length; r++) a[r] = i.charCodeAt(r);
    return a
}
var Er = Object.create(null),
    Ar = Object.create(null),
    r_ = e => new ReadableStream({
        start(i) {
            e.on({
                next(a) {
                    try {
                        i.enqueue(NS(a))
                    } catch {}
                },
                throw (a) {
                    i.error(a)
                },
                return () {
                    try {
                        i.close()
                    } catch {}
                }
            })
        }
    }),
    o_ = new TextEncoder,
    l_ = e => new ReadableStream({
        start(i) {
            e.on({
                next(a) {
                    try {
                        typeof a == "string" ? i.enqueue(o_.encode(a)) : i.enqueue(NS(a.$b64))
                    } catch {}
                },
                throw (a) {
                    i.error(a)
                },
                return () {
                    try {
                        i.close()
                    } catch {}
                }
            })
        }
    }),
    u_ = "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))",
    c_ = "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";

function sv(e) {
    const i = ga(),
        a = e.getReader();
    return (async () => {
        try {
            for (;;) {
                const {
                    done: r,
                    value: l
                } = await a.read();
                if (r) {
                    i.return(void 0);
                    break
                }
                i.next(LS(l))
            }
        } catch (r) {
            i.throw(r)
        } finally {
            a.releaseLock()
        }
    })(), i
}

function rv(e) {
    const i = ga(),
        a = e.getReader(),
        r = new TextDecoder("utf-8", {
            fatal: !0
        });
    return (async () => {
        try {
            for (;;) {
                const {
                    done: l,
                    value: c
                } = await a.read();
                if (l) {
                    try {
                        const f = r.decode();
                        f.length > 0 && i.next(f)
                    } catch {}
                    i.return(void 0);
                    break
                }
                try {
                    const f = r.decode(c, {
                        stream: !0
                    });
                    f.length > 0 && i.next(f)
                } catch {
                    i.next({
                        $b64: LS(c)
                    })
                }
            }
        } catch (l) {
            i.throw(l)
        } finally {
            a.releaseLock()
        }
    })(), i
}
var f_ = {
    tag: "tss/RawStream",
    extends: [{
        tag: "tss/RawStreamFactory",
        test(e) {
            return e === Er
        },
        parse: {
            sync(e, i, a) {
                return {}
            },
            async async (e, i, a) {
                return {}
            },
            stream(e, i, a) {
                return {}
            }
        },
        serialize(e, i, a) {
            return u_
        },
        deserialize(e, i, a) {
            return Er
        }
    }, {
        tag: "tss/RawStreamFactoryText",
        test(e) {
            return e === Ar
        },
        parse: {
            sync(e, i, a) {
                return {}
            },
            async async (e, i, a) {
                return {}
            },
            stream(e, i, a) {
                return {}
            }
        },
        serialize(e, i, a) {
            return c_
        },
        deserialize(e, i, a) {
            return Ar
        }
    }],
    test(e) {
        return e instanceof s_
    },
    parse: {
        sync(e, i, a) {
            const r = e.hint === "text" ? Ar : Er;
            return {
                hint: i.parse(e.hint),
                factory: i.parse(r),
                stream: i.parse(ga())
            }
        },
        async async (e, i, a) {
            const r = e.hint === "text" ? Ar : Er,
                l = e.hint === "text" ? rv(e.stream) : sv(e.stream);
            return {
                hint: await i.parse(e.hint),
                factory: await i.parse(r),
                stream: await i.parse(l)
            }
        },
        stream(e, i, a) {
            const r = e.hint === "text" ? Ar : Er,
                l = e.hint === "text" ? rv(e.stream) : sv(e.stream);
            return {
                hint: i.parse(e.hint),
                factory: i.parse(r),
                stream: i.parse(l)
            }
        }
    },
    serialize(e, i, a) {
        return "(" + i.serialize(e.factory) + ")(" + i.serialize(e.stream) + ")"
    },
    deserialize(e, i, a) {
        const r = i.deserialize(e.stream);
        return i.deserialize(e.hint) === "text" ? l_(r) : r_(r)
    }
};

function d_(e) {
    return {
        tag: "tss/RawStream",
        test: () => !1,
        parse: {},
        serialize() {
            throw new Error("RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.")
        },
        deserialize(i, a, r) {
            return e(typeof a ? .deserialize == "function" ? a.deserialize(i.streamId) : i.streamId)
        }
    }
}
var h_ = {
        tag: "$TSR/Error",
        test(e) {
            return e instanceof Error
        },
        parse: {
            sync(e, i) {
                return {
                    message: i.parse(e.message)
                }
            },
            async async (e, i) {
                return {
                    message: await i.parse(e.message)
                }
            },
            stream(e, i) {
                return {
                    message: i.parse(e.message)
                }
            }
        },
        serialize(e, i) {
            return "new Error(" + i.serialize(e.message) + ")"
        },
        deserialize(e, i) {
            return new Error(i.deserialize(e.message))
        }
    },
    wi = {},
    zS = e => new ReadableStream({
        start: i => {
            e.on({
                next: a => {
                    try {
                        i.enqueue(a)
                    } catch {}
                },
                throw: a => {
                    i.error(a)
                },
                return: () => {
                    try {
                        i.close()
                    } catch {}
                }
            })
        }
    }),
    m_ = {
        tag: "seroval-plugins/web/ReadableStreamFactory",
        test(e) {
            return e === wi
        },
        parse: {
            sync() {
                return wi
            },
            async async () {
                return await Promise.resolve(wi)
            },
            stream() {
                return wi
            }
        },
        serialize() {
            return zS.toString()
        },
        deserialize() {
            return wi
        }
    };

function ov(e) {
    let i = ga(),
        a = e.getReader();
    async function r() {
        try {
            let l = await a.read();
            l.done ? i.return(l.value) : (i.next(l.value), await r())
        } catch (l) {
            i.throw(l)
        }
    }
    return r().catch(() => {}), i
}
var p_ = {
        tag: "seroval/plugins/web/ReadableStream",
        extends: [m_],
        test(e) {
            return typeof ReadableStream > "u" ? !1 : e instanceof ReadableStream
        },
        parse: {
            sync(e, i) {
                return {
                    factory: i.parse(wi),
                    stream: i.parse(ga())
                }
            },
            async async (e, i) {
                return {
                    factory: await i.parse(wi),
                    stream: await i.parse(ov(e))
                }
            },
            stream(e, i) {
                return {
                    factory: i.parse(wi),
                    stream: i.parse(ov(e))
                }
            }
        },
        serialize(e, i) {
            return "(" + i.serialize(e.factory) + ")(" + i.serialize(e.stream) + ")"
        },
        deserialize(e, i) {
            let a = i.deserialize(e.stream);
            return zS(a)
        }
    },
    y_ = p_,
    g_ = [h_, f_, y_];

function v_() {
    return [...K0() ? .serializationAdapters ? .map(a_) ? ? [], ...g_]
}
var lv = new TextDecoder,
    S_ = new Uint8Array(0),
    uv = 16 * 1024 * 1024,
    cv = 32 * 1024 * 1024,
    fv = 1024,
    dv = 1e5;

function b_(e) {
    const i = new Map,
        a = new Map,
        r = new Set;
    let l = !1,
        c = null,
        f = 0,
        h;
    const p = new ReadableStream({
        start(g) {
            h = g
        },
        cancel() {
            l = !0;
            try {
                c ? .cancel()
            } catch {}
            i.forEach(g => {
                try {
                    g.error(new Error("Framed response cancelled"))
                } catch {}
            }), i.clear(), a.clear(), r.clear()
        }
    });

    function m(g) {
        const S = a.get(g);
        if (S) return S;
        if (r.has(g)) return new ReadableStream({
            start(E) {
                E.close()
            }
        });
        if (a.size >= fv) throw new Error(`Too many raw streams in framed response (max ${fv})`);
        const b = new ReadableStream({
            start(E) {
                i.set(g, E)
            },
            cancel() {
                r.add(g), i.delete(g), a.delete(g)
            }
        });
        return a.set(g, b), b
    }

    function y(g) {
        return m(g), i.get(g)
    }
    return (async () => {
        const g = e.getReader();
        c = g;
        const S = [];
        let b = 0;

        function E() {
            if (b < 9) return null;
            const A = S[0];
            if (A.length >= 9) return {
                type: A[0],
                streamId: (A[1] << 24 | A[2] << 16 | A[3] << 8 | A[4]) >>> 0,
                length: (A[5] << 24 | A[6] << 16 | A[7] << 8 | A[8]) >>> 0
            };
            const R = new Uint8Array(9);
            let N = 0,
                L = 9;
            for (let O = 0; O < S.length && L > 0; O++) {
                const F = S[O],
                    J = Math.min(F.length, L);
                R.set(F.subarray(0, J), N), N += J, L -= J
            }
            return {
                type: R[0],
                streamId: (R[1] << 24 | R[2] << 16 | R[3] << 8 | R[4]) >>> 0,
                length: (R[5] << 24 | R[6] << 16 | R[7] << 8 | R[8]) >>> 0
            }
        }

        function _(A) {
            if (A === 0) return S_;
            const R = new Uint8Array(A);
            let N = 0,
                L = A;
            for (; L > 0 && S.length > 0;) {
                const O = S[0];
                if (!O) break;
                const F = Math.min(O.length, L);
                R.set(O.subarray(0, F), N), N += F, L -= F, F === O.length ? S.shift() : S[0] = O.subarray(F)
            }
            return b -= A, R
        }
        try {
            for (;;) {
                const {
                    done: A,
                    value: R
                } = await g.read();
                if (l || A) break;
                if (R) {
                    if (b + R.length > cv) throw new Error(`Framed response buffer exceeded ${cv} bytes`);
                    for (S.push(R), b += R.length;;) {
                        const N = E();
                        if (!N) break;
                        const {
                            type: L,
                            streamId: O,
                            length: F
                        } = N;
                        if (L !== Fn.JSON && L !== Fn.CHUNK && L !== Fn.END && L !== Fn.ERROR) throw new Error(`Unknown frame type: ${L}`);
                        if (L === Fn.JSON) {
                            if (O !== 0) throw new Error("Invalid JSON frame streamId (expected 0)")
                        } else if (O === 0) throw new Error("Invalid raw frame streamId (expected non-zero)");
                        if (F > uv) throw new Error(`Frame payload too large: ${F} bytes (max ${uv})`);
                        const J = 9 + F;
                        if (b < J) break;
                        if (++f > dv) throw new Error(`Too many frames in framed response (max ${dv})`);
                        _(9);
                        const q = _(F);
                        switch (L) {
                            case Fn.JSON:
                                try {
                                    h.enqueue(lv.decode(q))
                                } catch {}
                                break;
                            case Fn.CHUNK:
                                {
                                    const K = y(O);K && K.enqueue(q);
                                    break
                                }
                            case Fn.END:
                                {
                                    const K = y(O);
                                    if (r.add(O), K) {
                                        try {
                                            K.close()
                                        } catch {}
                                        i.delete(O)
                                    }
                                    break
                                }
                            case Fn.ERROR:
                                {
                                    const K = y(O);
                                    if (r.add(O), K) {
                                        const Z = lv.decode(q);
                                        K.error(new Error(Z)), i.delete(O)
                                    }
                                    break
                                }
                        }
                    }
                }
            }
            if (b !== 0) throw new Error("Incomplete frame at end of framed response");
            try {
                h.close()
            } catch {}
            i.forEach(A => {
                try {
                    A.close()
                } catch {}
            }), i.clear()
        } catch (A) {
            try {
                h.error(A)
            } catch {}
            i.forEach(R => {
                try {
                    R.error(A)
                } catch {}
            }), i.clear()
        } finally {
            try {
                g.releaseLock()
            } catch {}
            c = null
        }
    })(), {
        getOrCreateStream: m,
        jsonChunks: p
    }
}
var Ur = null;
async function hd(e) {
    e.length > 0 && await Promise.allSettled(e)
}
var x_ = Object.prototype.hasOwnProperty;

function jS(e) {
    for (const i in e)
        if (x_.call(e, i)) return !0;
    return !1
}
async function T_(e, i, a) {
    Ur || (Ur = v_());
    const r = i[0],
        l = r.fetch ? ? a,
        c = r.data instanceof FormData ? "formData" : "payload",
        f = r.headers ? new Headers(r.headers) : new Headers;
    if (f.set("x-tsr-serverFn", "true"), c === "payload" && f.set("accept", `${bE}, application/x-ndjson, application/json`), r.method === "GET") {
        if (c === "formData") throw new Error("FormData is not supported with GET requests");
        const p = await BS(r);
        if (p !== void 0) {
            const m = Z0({
                payload: p
            });
            e.includes("?") ? e += `&${m}` : e += `?${m}`
        }
    }
    let h;
    if (r.method === "POST") {
        const p = await E_(r);
        p ? .contentType && f.set("content-type", p.contentType), h = p ? .body
    }
    return await A_(async () => l(e, {
        method: r.method,
        headers: f,
        signal: r.signal,
        body: h
    }))
}
async function BS(e) {
    let i = !1;
    const a = {};
    if (e.data !== void 0 && (i = !0, a.data = e.data), e.context && jS(e.context) && (i = !0, a.context = e.context), i) return VS(a)
}
async function VS(e) {
    return JSON.stringify(await Promise.resolve(i_(e, {
        plugins: Ur
    })))
}
async function E_(e) {
    if (e.data instanceof FormData) {
        let a;
        return e.context && jS(e.context) && (a = await VS(e.context)), a !== void 0 && e.data.set(SE, a), {
            body: e.data
        }
    }
    const i = await BS(e);
    if (i) return {
        body: i,
        contentType: "application/json"
    }
}
async function A_(e) {
    let i;
    try {
        i = await e()
    } catch (r) {
        if (r instanceof Response) i = r;
        else throw console.log(r), r
    }
    if (i.headers.get("x-tss-raw") === "true") return i;
    const a = i.headers.get("content-type");
    if (a || Ne(), i.headers.get("x-tss-serialized")) {
        let r;
        if (a.includes("application/x-tss-framed")) {
            if (EE(a), !i.body) throw new Error("No response body for framed response");
            const {
                getOrCreateStream: l,
                jsonChunks: c
            } = b_(i.body), f = [d_(l), ...Ur || []], h = new Map;
            r = await w_({
                jsonStream: c,
                onMessage: p => av(p, {
                    refs: h,
                    plugins: f
                }),
                onError(p, m) {
                    console.error(p, m)
                }
            })
        } else if (a.includes("application/json")) {
            const l = await i.json(),
                c = [];
            r = av(l, {
                plugins: Ur
            }), await hd(c)
        }
        if (r || Ne(), r instanceof Error) throw r;
        return r
    }
    if (a.includes("application/json")) {
        const r = await i.json(),
            l = sA(r);
        if (l) throw l;
        if (ge(r)) throw r;
        return r
    }
    if (!i.ok) throw new Error(await i.text());
    return i
}
async function w_({
    jsonStream: e,
    onMessage: i,
    onError: a
}) {
    const r = e.getReader(),
        {
            value: l,
            done: c
        } = await r.read();
    if (c || !l) throw new Error("Stream ended before first object");
    const f = JSON.parse(l);
    let h = !1;
    const p = (async () => {
        try {
            for (;;) {
                const {
                    value: g,
                    done: S
                } = await r.read();
                if (S) break;
                if (g) try {
                    const b = [];
                    try {
                        i(JSON.parse(g))
                    } finally {}
                    await hd(b)
                } catch (b) {
                    a ? .(`Invalid JSON: ${g}`, b)
                }
            }
        } catch (g) {
            h || a ? .("Stream processing error:", g)
        }
    })();
    let m;
    const y = [];
    try {
        m = i(f)
    } catch (g) {
        throw h = !0, r.cancel().catch(() => {}), g
    }
    return await hd(y), Promise.resolve(m).catch(() => {
        h = !0, r.cancel().catch(() => {})
    }), p.finally(() => {
        try {
            r.releaseLock()
        } catch {}
    }), m
}

function R_(e) {
    const i = "/_serverFn/" + e;
    return Object.assign((...l) => {
        const c = K0() ? .serverFns ? .fetch;
        return T_(i, l, c ? ? fetch)
    }, {
        url: i,
        serverFnMeta: {
            id: e
        },
        [ud]: !0
    })
}
var __ = {
    key: "$TSS/serverfn",
    test: e => typeof e != "function" || !(ud in e) ? !1 : !!e[ud],
    toSerializable: ({
        serverFnMeta: e
    }) => ({
        functionId: e.id
    }),
    fromSerializable: ({
        functionId: e
    }) => R_(e)
};

function hv(e) {
    return e.replaceAll("\0", "/").replaceAll("�", "/")
}

function M_(e, i) {
    e.id = i.i, e.__beforeLoadContext = i.b, e.loaderData = i.l, e.status = i.s, e.ssr = i.ssr, e.updatedAt = i.u, e.error = i.e, i.g !== void 0 && (e.globalNotFound = i.g)
}
async function C_(e) {
    window.$_TSR || Ne();
    const i = e.options.serializationAdapters;
    if (i ? .length) {
        const A = new Map;
        i.forEach(R => {
            A.set(R.key, R.fromSerializable)
        }), window.$_TSR.t = A, window.$_TSR.buffer.forEach(R => R())
    }
    window.$_TSR.initialized = !0, window.$_TSR.router || Ne();
    const a = window.$_TSR.router;
    a.matches.forEach(A => {
        A.i = hv(A.i)
    }), a.lastMatchId && (a.lastMatchId = hv(a.lastMatchId));
    const {
        manifest: r,
        dehydratedData: l,
        lastMatchId: c
    } = a;
    e.ssr = {
        manifest: r
    };
    const f = document.querySelector('meta[property="csp-nonce"]') ? .content;
    e.options.ssr = {
        nonce: f
    };
    const h = e.matchRoutes(e.stores.location.get()),
        p = Promise.all(h.map(A => e.loadRouteChunk(e.looseRoutesById[A.routeId])));

    function m(A) {
        const R = e.looseRoutesById[A.routeId].options.pendingMinMs ? ? e.options.defaultPendingMinMs;
        if (R) {
            const N = ya();
            A._nonReactive.minPendingPromise = N, A._forcePending = !0, setTimeout(() => {
                N.resolve(), e.updateMatch(A.id, L => (L._nonReactive.minPendingPromise = void 0, { ...L,
                    _forcePending: void 0
                }))
            }, R)
        }
    }

    function y(A) {
        const R = e.looseRoutesById[A.routeId];
        R && (R.options.ssr = A.ssr)
    }
    let g;
    h.forEach(A => {
        const R = a.matches.find(N => N.i === A.id);
        if (!R) {
            A._nonReactive.dehydrated = !1, A.ssr = !1, y(A);
            return
        }
        M_(A, R), y(A), A._nonReactive.dehydrated = A.ssr !== !1, (A.ssr === "data-only" || A.ssr === !1) && g === void 0 && (g = A.index, m(A))
    }), e.stores.setMatches(h), await e.options.hydrate ? .(l);
    const S = e.stores.matches.get(),
        b = e.stores.location.get();
    await Promise.all(S.map(async A => {
        try {
            const R = e.looseRoutesById[A.routeId],
                N = S[A.index - 1] ? .context ? ? e.options.context;
            if (R.options.context) {
                const J = {
                    deps: A.loaderDeps,
                    params: A.params,
                    context: N ? ? {},
                    location: b,
                    navigate: q => e.navigate({ ...q,
                        _fromLocation: b
                    }),
                    buildLocation: e.buildLocation,
                    cause: A.cause,
                    abortController: A.abortController,
                    preload: !1,
                    matches: h,
                    routeId: R.id
                };
                A.__routeContext = R.options.context(J) ? ? void 0
            }
            A.context = { ...N,
                ...A.__routeContext,
                ...A.__beforeLoadContext
            };
            const L = {
                    ssr: e.options.ssr,
                    matches: S,
                    match: A,
                    params: A.params,
                    loaderData: A.loaderData
                },
                O = await R.options.head ? .(L),
                F = await R.options.scripts ? .(L);
            A.meta = O ? .meta, A.links = O ? .links, A.headScripts = O ? .scripts, A.styles = O ? .styles, A.scripts = F
        } catch (R) {
            if (ge(R)) A.error = {
                isNotFound: !0
            }, console.error(`NotFound error during hydration for routeId: ${A.routeId}`, R);
            else throw A.error = R, console.error(`Error during hydration for route ${A.routeId}:`, R), R
        }
    }));
    const E = h[h.length - 1].id !== c;
    if (!h.some(A => A.ssr === !1) && !E) return h.forEach(A => {
        A._nonReactive.dehydrated = void 0
    }), e.stores.resolvedLocation.set(e.stores.location.get()), p;
    const _ = Promise.resolve().then(() => e.load()).catch(A => {
        console.error("Error during router hydration:", A)
    });
    if (E) {
        const A = h[1];
        A || Ne(), m(A), A._displayPending = !0, A._nonReactive.displayPendingPromise = _, _.then(() => {
            e.batch(() => {
                e.stores.status.get() === "pending" && (e.stores.status.set("idle"), e.stores.resolvedLocation.set(e.stores.location.get())), e.updateMatch(A.id, R => ({ ...R,
                    _displayPending: void 0,
                    displayPendingPromise: void 0
                }))
            })
        })
    }
    return p
}
var kl = k.use,
    _r = typeof window < "u" ? k.useLayoutEffect : k.useEffect;

function Hf(e) {
    const i = k.useRef({
            value: e,
            prev: null
        }),
        a = i.current.value;
    return e !== a && (i.current = {
        value: e,
        prev: a
    }), i.current.prev
}

function D_(e, i, a = {}, r = {}) {
    k.useEffect(() => {
        if (!e.current || r.disabled || typeof IntersectionObserver != "function") return;
        const l = new IntersectionObserver(([c]) => {
            i(c)
        }, a);
        return l.observe(e.current), () => {
            l.disconnect()
        }
    }, [i, a, r.disabled, e])
}

function O_(e) {
    const i = k.useRef(null);
    return k.useImperativeHandle(e, () => i.current, []), i
}

function L_({
    promise: e
}) {
    if (kl) return kl(e);
    const i = RA(e);
    if (i[Tn].status === "pending") throw i;
    if (i[Tn].status === "error") throw i[Tn].error;
    return i[Tn].data
}

function N_(e) {
    const i = j.jsx(z_, { ...e
    });
    return e.fallback ? j.jsx(k.Suspense, {
        fallback: e.fallback,
        children: i
    }) : i
}

function z_(e) {
    const i = L_(e);
    return e.children(i)
}

function Jd(e) {
    const i = e.errorComponent ? ? Wd;
    return j.jsx(j_, {
        getResetKey: e.getResetKey,
        onCatch: e.onCatch,
        children: ({
            error: a,
            reset: r
        }) => a ? k.createElement(i, {
            error: a,
            reset: r
        }) : e.children
    })
}
var j_ = class extends k.Component {
    constructor(...e) {
        super(...e), this.state = {
            error: null
        }
    }
    static getDerivedStateFromProps(e, i) {
        const a = e.getResetKey();
        return i.error && i.resetKey !== a ? {
            resetKey: a,
            error: null
        } : {
            resetKey: a
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    reset() {
        this.setState({
            error: null
        })
    }
    componentDidCatch(e, i) {
        this.props.onCatch && this.props.onCatch(e, i)
    }
    render() {
        return this.props.children({
            error: this.state.error,
            reset: () => {
                this.reset()
            }
        })
    }
};

function Wd({
    error: e
}) {
    const [i, a] = k.useState(!1);
    return j.jsxs("div", {
        style: {
            padding: ".5rem",
            maxWidth: "100%"
        },
        children: [j.jsxs("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: ".5rem"
            },
            children: [j.jsx("strong", {
                style: {
                    fontSize: "1rem"
                },
                children: "Something went wrong!"
            }), j.jsx("button", {
                style: {
                    appearance: "none",
                    fontSize: ".6em",
                    border: "1px solid currentColor",
                    padding: ".1rem .2rem",
                    fontWeight: "bold",
                    borderRadius: ".25rem"
                },
                onClick: () => a(r => !r),
                children: i ? "Hide Error" : "Show Error"
            })]
        }), j.jsx("div", {
            style: {
                height: ".25rem"
            }
        }), i ? j.jsx("div", {
            children: j.jsx("pre", {
                style: {
                    fontSize: ".7em",
                    border: "1px solid red",
                    borderRadius: ".25rem",
                    padding: ".3rem",
                    color: "red",
                    overflow: "auto"
                },
                children: e.message ? j.jsx("code", {
                    children: e.message
                }) : null
            })
        }) : null]
    })
}

function B_({
    children: e,
    fallback: i = null
}) {
    return $d() ? j.jsx(Nr.Fragment, {
        children: e
    }) : j.jsx(Nr.Fragment, {
        children: i
    })
}

function $d() {
    return Nr.useSyncExternalStore(V_, () => !0, () => !1)
}

function V_() {
    return () => {}
}
var US = k.createContext(null);

function le(e) {
    return k.useContext(US)
}
var ru = k.createContext(void 0),
    U_ = k.createContext(void 0),
    Kt = (e => (e[e.None = 0] = "None", e[e.Mutable = 1] = "Mutable", e[e.Watching = 2] = "Watching", e[e.RecursedCheck = 4] = "RecursedCheck", e[e.Recursed = 8] = "Recursed", e[e.Dirty = 16] = "Dirty", e[e.Pending = 32] = "Pending", e))(Kt || {});

function P_({
    update: e,
    notify: i,
    unwatched: a
}) {
    return {
        link: r,
        unlink: l,
        propagate: c,
        checkDirty: f,
        shallowPropagate: h
    };

    function r(m, y, g) {
        const S = y.depsTail;
        if (S !== void 0 && S.dep === m) return;
        const b = S !== void 0 ? S.nextDep : y.deps;
        if (b !== void 0 && b.dep === m) {
            b.version = g, y.depsTail = b;
            return
        }
        const E = m.subsTail;
        if (E !== void 0 && E.version === g && E.sub === y) return;
        const _ = y.depsTail = m.subsTail = {
            version: g,
            dep: m,
            sub: y,
            prevDep: S,
            nextDep: b,
            prevSub: E,
            nextSub: void 0
        };
        b !== void 0 && (b.prevDep = _), S !== void 0 ? S.nextDep = _ : y.deps = _, E !== void 0 ? E.nextSub = _ : m.subs = _
    }

    function l(m, y = m.sub) {
        const g = m.dep,
            S = m.prevDep,
            b = m.nextDep,
            E = m.nextSub,
            _ = m.prevSub;
        return b !== void 0 ? b.prevDep = S : y.depsTail = S, S !== void 0 ? S.nextDep = b : y.deps = b, E !== void 0 ? E.prevSub = _ : g.subsTail = _, _ !== void 0 ? _.nextSub = E : (g.subs = E) === void 0 && a(g), b
    }

    function c(m) {
        let y = m.nextSub,
            g;
        t: do {
            const S = m.sub;
            let b = S.flags;
            if (b & 60 ? b & 12 ? b & 4 ? !(b & 48) && p(m, S) ? (S.flags = b | 40, b &= 1) : b = 0 : S.flags = b & -9 | 32 : b = 0 : S.flags = b | 32, b & 2 && i(S), b & 1) {
                const E = S.subs;
                if (E !== void 0) {
                    const _ = (m = E).nextSub;
                    _ !== void 0 && (g = {
                        value: y,
                        prev: g
                    }, y = _);
                    continue
                }
            }
            if ((m = y) !== void 0) {
                y = m.nextSub;
                continue
            }
            for (; g !== void 0;)
                if (m = g.value, g = g.prev, m !== void 0) {
                    y = m.nextSub;
                    continue t
                }
            break
        } while (!0)
    }

    function f(m, y) {
        let g, S = 0,
            b = !1;
        t: do {
            const E = m.dep,
                _ = E.flags;
            if (y.flags & 16) b = !0;
            else if ((_ & 17) === 17) {
                if (e(E)) {
                    const A = E.subs;
                    A.nextSub !== void 0 && h(A), b = !0
                }
            } else if ((_ & 33) === 33) {
                (m.nextSub !== void 0 || m.prevSub !== void 0) && (g = {
                    value: m,
                    prev: g
                }), m = E.deps, y = E, ++S;
                continue
            }
            if (!b) {
                const A = m.nextDep;
                if (A !== void 0) {
                    m = A;
                    continue
                }
            }
            for (; S--;) {
                const A = y.subs,
                    R = A.nextSub !== void 0;
                if (R ? (m = g.value, g = g.prev) : m = A, b) {
                    if (e(y)) {
                        R && h(A), y = m.sub;
                        continue
                    }
                    b = !1
                } else y.flags &= -33;
                y = m.sub;
                const N = m.nextDep;
                if (N !== void 0) {
                    m = N;
                    continue t
                }
            }
            return b
        } while (!0)
    }

    function h(m) {
        do {
            const y = m.sub,
                g = y.flags;
            (g & 48) === 32 && (y.flags = g | 16, (g & 6) === 2 && i(y))
        } while ((m = m.nextSub) !== void 0)
    }

    function p(m, y) {
        let g = y.depsTail;
        for (; g !== void 0;) {
            if (g === m) return !0;
            g = g.prevDep
        }
        return !1
    }
}

function H_(e, i, a) {
    const r = typeof e == "object",
        l = r ? e : void 0;
    return {
        next: (r ? e.next : e) ? .bind(l),
        error: (r ? e.error : i) ? .bind(l),
        complete: (r ? e.complete : a) ? .bind(l)
    }
}
const md = [];
let Rl = 0;
const {
    link: mv,
    unlink: k_,
    propagate: q_,
    checkDirty: PS,
    shallowPropagate: pv
} = P_({
    update(e) {
        return e._update()
    },
    notify(e) {
        md[pd++] = e, e.flags &= ~Kt.Watching
    },
    unwatched(e) {
        e.depsTail !== void 0 && (e.depsTail = void 0, e.flags = Kt.Mutable | Kt.Dirty, ql(e))
    }
});
let yl = 0,
    pd = 0,
    xn, yd = 0;

function HS(e) {
    try {
        ++yd, e()
    } finally {
        --yd || kS()
    }
}

function ql(e) {
    const i = e.depsTail;
    let a = i !== void 0 ? i.nextDep : e.deps;
    for (; a !== void 0;) a = k_(a, e)
}

function kS() {
    if (!(yd > 0)) {
        for (; yl < pd;) {
            const e = md[yl];
            md[yl++] = void 0, e.notify()
        }
        yl = 0, pd = 0
    }
}

function yv(e, i) {
    const a = typeof e == "function",
        r = e,
        l = {
            _snapshot: a ? void 0 : e,
            subs: void 0,
            subsTail: void 0,
            deps: void 0,
            depsTail: void 0,
            flags: a ? Kt.None : Kt.Mutable,
            get() {
                return xn !== void 0 && mv(l, xn, Rl), l._snapshot
            },
            subscribe(c) {
                const f = H_(c),
                    h = {
                        current: !1
                    },
                    p = K_(() => {
                        l.get(), h.current ? f.next ? .(l._snapshot) : h.current = !0
                    });
                return {
                    unsubscribe: () => {
                        p.stop()
                    }
                }
            },
            _update(c) {
                const f = xn,
                    h = i ? .compare ? ? Object.is;
                if (a) xn = l, ++Rl, l.depsTail = void 0;
                else if (c === void 0) return !1;
                a && (l.flags = Kt.Mutable | Kt.RecursedCheck);
                try {
                    const p = l._snapshot,
                        m = typeof c == "function" ? c(p) : c === void 0 && a ? r(p) : c;
                    return p === void 0 || !h(p, m) ? (l._snapshot = m, !0) : !1
                } finally {
                    xn = f, a && (l.flags &= ~Kt.RecursedCheck), ql(l)
                }
            }
        };
    return a ? (l.flags = Kt.Mutable | Kt.Dirty, l.get = function() {
        const c = l.flags;
        if (c & Kt.Dirty || c & Kt.Pending && PS(l.deps, l)) {
            if (l._update()) {
                const f = l.subs;
                f !== void 0 && pv(f)
            }
        } else c & Kt.Pending && (l.flags = c & ~Kt.Pending);
        return xn !== void 0 && mv(l, xn, Rl), l._snapshot
    }) : l.set = function(c) {
        if (l._update(c)) {
            const f = l.subs;
            f !== void 0 && (q_(f), pv(f), kS())
        }
    }, l
}

function K_(e) {
    const i = () => {
            const r = xn;
            xn = a, ++Rl, a.depsTail = void 0, a.flags = Kt.Watching | Kt.RecursedCheck;
            try {
                return e()
            } finally {
                xn = r, a.flags &= ~Kt.RecursedCheck, ql(a)
            }
        },
        a = {
            deps: void 0,
            depsTail: void 0,
            subs: void 0,
            subsTail: void 0,
            flags: Kt.Watching | Kt.RecursedCheck,
            notify() {
                const r = this.flags;
                r & Kt.Dirty || r & Kt.Pending && PS(this.deps, this) ? i() : this.flags = Kt.Watching
            },
            stop() {
                this.flags = Kt.None, this.depsTail = void 0, ql(this)
            }
        };
    return i(), a
}
var kf = {
        exports: {}
    },
    qf = {},
    Kf = {
        exports: {}
    },
    Yf = {};
var gv;

function Y_() {
    if (gv) return Yf;
    gv = 1;
    var e = Kr();

    function i(g, S) {
        return g === S && (g !== 0 || 1 / g === 1 / S) || g !== g && S !== S
    }
    var a = typeof Object.is == "function" ? Object.is : i,
        r = e.useState,
        l = e.useEffect,
        c = e.useLayoutEffect,
        f = e.useDebugValue;

    function h(g, S) {
        var b = S(),
            E = r({
                inst: {
                    value: b,
                    getSnapshot: S
                }
            }),
            _ = E[0].inst,
            A = E[1];
        return c(function() {
            _.value = b, _.getSnapshot = S, p(_) && A({
                inst: _
            })
        }, [g, b, S]), l(function() {
            return p(_) && A({
                inst: _
            }), g(function() {
                p(_) && A({
                    inst: _
                })
            })
        }, [g]), f(b), b
    }

    function p(g) {
        var S = g.getSnapshot;
        g = g.value;
        try {
            var b = S();
            return !a(g, b)
        } catch {
            return !0
        }
    }

    function m(g, S) {
        return S()
    }
    var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : h;
    return Yf.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y, Yf
}
var vv;

function G_() {
    return vv || (vv = 1, Kf.exports = Y_()), Kf.exports
}
var Sv;

function X_() {
    if (Sv) return qf;
    Sv = 1;
    var e = Kr(),
        i = G_();

    function a(m, y) {
        return m === y && (m !== 0 || 1 / m === 1 / y) || m !== m && y !== y
    }
    var r = typeof Object.is == "function" ? Object.is : a,
        l = i.useSyncExternalStore,
        c = e.useRef,
        f = e.useEffect,
        h = e.useMemo,
        p = e.useDebugValue;
    return qf.useSyncExternalStoreWithSelector = function(m, y, g, S, b) {
        var E = c(null);
        if (E.current === null) {
            var _ = {
                hasValue: !1,
                value: null
            };
            E.current = _
        } else _ = E.current;
        E = h(function() {
            function R(J) {
                if (!N) {
                    if (N = !0, L = J, J = S(J), b !== void 0 && _.hasValue) {
                        var q = _.value;
                        if (b(q, J)) return O = q
                    }
                    return O = J
                }
                if (q = O, r(L, J)) return q;
                var K = S(J);
                return b !== void 0 && b(q, K) ? (L = J, q) : (L = J, O = K)
            }
            var N = !1,
                L, O, F = g === void 0 ? null : g;
            return [function() {
                return R(y())
            }, F === null ? void 0 : function() {
                return R(F())
            }]
        }, [y, g, S, b]);
        var A = l(m, E[0], E[1]);
        return f(function() {
            _.hasValue = !0, _.value = A
        }, [A]), p(A), A
    }, qf
}
var bv;

function F_() {
    return bv || (bv = 1, kf.exports = X_()), kf.exports
}
var Q_ = F_();

function Z_(e, i) {
    return e === i
}

function It(e, i, a = Z_) {
    const r = k.useCallback(f => {
            if (!e) return () => {};
            const {
                unsubscribe: h
            } = e.subscribe(f);
            return h
        }, [e]),
        l = k.useCallback(() => e ? .get(), [e]);
    return Q_.useSyncExternalStoreWithSelector(r, l, l, i, a)
}
var I_ = {
    get: () => {},
    subscribe: () => ({
        unsubscribe: () => {}
    })
};

function va(e) {
    const i = le(),
        a = k.useContext(e.from ? U_ : ru),
        r = e.from ? ? a,
        l = r ? e.from ? i.stores.getRouteMatchStore(r) : i.stores.matchStores.get(r) : void 0,
        c = k.useRef(void 0);
    return It(l ? ? I_, f => {
        if ((e.shouldThrow ? ? !0) && !f && Ne(), f === void 0) return;
        const h = e.select ? e.select(f) : f;
        if (e.structuralSharing ? ? i.options.defaultStructuralSharing) {
            const p = _i(c.current, h);
            return c.current = p, p
        }
        return h
    })
}

function qS(e) {
    return va({
        from: e.from,
        strict: e.strict,
        structuralSharing: e.structuralSharing,
        select: i => e.select ? e.select(i.loaderData) : i.loaderData
    })
}

function KS(e) {
    const {
        select: i,
        ...a
    } = e;
    return va({ ...a,
        select: r => i ? i(r.loaderDeps) : r.loaderDeps
    })
}

function YS(e) {
    return va({
        from: e.from,
        shouldThrow: e.shouldThrow,
        structuralSharing: e.structuralSharing,
        strict: e.strict,
        select: i => {
            const a = e.strict === !1 ? i.params : i._strictParams;
            return e.select ? e.select(a) : a
        }
    })
}

function GS(e) {
    return va({
        from: e.from,
        strict: e.strict,
        shouldThrow: e.shouldThrow,
        structuralSharing: e.structuralSharing,
        select: i => e.select ? e.select(i.search) : i.search
    })
}

function XS(e) {
    const i = le();
    return k.useCallback(a => i.navigate({ ...a,
        from: a.from ? ? e ? .from
    }), [e ? .from, i])
}

function FS(e) {
    return va({ ...e,
        select: i => e.select ? e.select(i.context) : i.context
    })
}
var J_ = q0();

function W_(e, i) {
    const a = le(),
        r = O_(i),
        {
            activeProps: l,
            inactiveProps: c,
            activeOptions: f,
            to: h,
            preload: p,
            preloadDelay: m,
            preloadIntentProximity: y,
            hashScrollIntoView: g,
            replace: S,
            startTransition: b,
            resetScroll: E,
            viewTransition: _,
            children: A,
            target: R,
            disabled: N,
            style: L,
            className: O,
            onClick: F,
            onBlur: J,
            onFocus: q,
            onMouseEnter: K,
            onMouseLeave: Z,
            onTouchStart: I,
            ignoreBlocker: $,
            params: ot,
            search: ct,
            hash: Et,
            state: yt,
            mask: P,
            reloadDocument: W,
            unsafeRelative: et,
            from: ft,
            _fromLocation: gt,
            ...C
        } = e,
        X = $d(),
        tt = k.useMemo(() => e, [a, e.from, e._fromLocation, e.hash, e.to, e.search, e.params, e.state, e.mask, e.unsafeRelative]),
        nt = It(a.stores.location, Ut => Ut, (Ut, ue) => Ut.href === ue.href),
        rt = k.useMemo(() => {
            const Ut = {
                _fromLocation: nt,
                ...tt
            };
            return a.buildLocation(Ut)
        }, [a, nt, tt]),
        pt = rt.maskedLocation ? rt.maskedLocation.publicHref : rt.publicHref,
        At = rt.maskedLocation ? rt.maskedLocation.external : rt.external,
        Ft = k.useMemo(() => aM(pt, At, a.history, N), [N, At, pt, a.history]),
        zt = k.useMemo(() => {
            if (Ft ? .external) return Bl(Ft.href, a.protocolAllowlist) ? void 0 : Ft.href;
            if (!sM(h) && !(typeof h != "string" || h.indexOf(":") === -1)) try {
                return new URL(h), Bl(h, a.protocolAllowlist) ? void 0 : h
            } catch {}
        }, [h, Ft, a.protocolAllowlist]),
        Rn = k.useMemo(() => {
            if (zt) return !1;
            if (f ? .exact) {
                if (!GE(nt.pathname, rt.pathname, a.basepath)) return !1
            } else {
                const Ut = Vl(nt.pathname, a.basepath),
                    ue = Vl(rt.pathname, a.basepath);
                if (!(Ut.startsWith(ue) && (Ut.length === ue.length || Ut[ue.length] === "/"))) return !1
            }
            return (f ? .includeSearch ? ? !0) && !Oe(nt.search, rt.search, {
                partial: !f ? .exact,
                ignoreUndefined: !f ? .explicitUndefined
            }) ? !1 : f ? .includeHash ? X && nt.hash === rt.hash : !0
        }, [f ? .exact, f ? .explicitUndefined, f ? .includeHash, f ? .includeSearch, nt, zt, X, rt.hash, rt.pathname, rt.search, a.basepath]),
        _n = Rn ? Ri(l, {}) ? ? $_ : Gf,
        Jn = Rn ? Gf : Ri(c, {}) ? ? Gf,
        Ts = [O, _n.className, Jn.className].filter(Boolean).join(" "),
        mn = (L || _n.style || Jn.style) && { ...L,
            ..._n.style,
            ...Jn.style
        },
        [Es, Sa] = k.useState(!1),
        Zr = k.useRef(!1),
        Mn = e.reloadDocument || zt ? !1 : p ? ? a.options.defaultPreload,
        Pi = m ? ? a.options.defaultPreloadDelay ? ? 0,
        on = k.useCallback(() => {
            a.preloadRoute({ ...tt,
                _builtLocation: rt
            }).catch(Ut => {
                console.warn(Ut), console.warn(_A)
            })
        }, [a, tt, rt]);
    D_(r, k.useCallback(Ut => {
        Ut ? .isIntersecting && on()
    }, [on]), iM, {
        disabled: !!N || Mn !== "viewport"
    }), k.useEffect(() => {
        Zr.current || !N && Mn === "render" && (on(), Zr.current = !0)
    }, [N, on, Mn]);
    const As = Ut => {
        const ue = Ut.currentTarget.getAttribute("target"),
            pn = R !== void 0 ? R : ue;
        if (!N && !rM(Ut) && !Ut.defaultPrevented && (!pn || pn === "_self") && Ut.button === 0) {
            Ut.preventDefault(), J_.flushSync(() => {
                Sa(!0)
            });
            const ba = a.subscribe("onResolved", () => {
                ba(), Sa(!1)
            });
            a.navigate({ ...tt,
                replace: S,
                resetScroll: E,
                hashScrollIntoView: g,
                startTransition: b,
                viewTransition: _,
                ignoreBlocker: $
            })
        }
    };
    if (zt) return { ...C,
        ref: r,
        href: zt,
        ...A && {
            children: A
        },
        ...R && {
            target: R
        },
        ...N && {
            disabled: N
        },
        ...L && {
            style: L
        },
        ...O && {
            className: O
        },
        ...F && {
            onClick: F
        },
        ...J && {
            onBlur: J
        },
        ...q && {
            onFocus: q
        },
        ...K && {
            onMouseEnter: K
        },
        ...Z && {
            onMouseLeave: Z
        },
        ...I && {
            onTouchStart: I
        }
    };
    const Ir = Ut => {
            if (N || Mn !== "intent") return;
            if (!Pi) {
                on();
                return
            }
            const ue = Ut.currentTarget;
            if (wr.has(ue)) return;
            const pn = setTimeout(() => {
                wr.delete(ue), on()
            }, Pi);
            wr.set(ue, pn)
        },
        du = Ut => {
            N || Mn !== "intent" || on()
        },
        ve = Ut => {
            if (N || !Mn || !Pi) return;
            const ue = Ut.currentTarget,
                pn = wr.get(ue);
            pn && (clearTimeout(pn), wr.delete(ue))
        };
    return { ...C,
        ..._n,
        ...Jn,
        href: Ft ? .href,
        ref: r,
        onClick: ss([F, As]),
        onBlur: ss([J, ve]),
        onFocus: ss([q, Ir]),
        onMouseEnter: ss([K, Ir]),
        onMouseLeave: ss([Z, ve]),
        onTouchStart: ss([I, du]),
        disabled: !!N,
        target: R,
        ...mn && {
            style: mn
        },
        ...Ts && {
            className: Ts
        },
        ...N && tM,
        ...Rn && eM,
        ...X && Es && nM
    }
}
var Gf = {},
    $_ = {
        className: "active"
    },
    tM = {
        role: "link",
        "aria-disabled": !0
    },
    eM = {
        "data-status": "active",
        "aria-current": "page"
    },
    nM = {
        "data-transitioning": "transitioning"
    },
    wr = new WeakMap,
    iM = {
        rootMargin: "100px"
    },
    ss = e => i => {
        for (const a of e)
            if (a) {
                if (i.defaultPrevented) return;
                a(i)
            }
    };

function aM(e, i, a, r) {
    if (!r) return i ? {
        href: e,
        external: !0
    } : {
        href: a.createHref(e) || "/",
        external: !1
    }
}

function sM(e) {
    if (typeof e != "string") return !1;
    const i = e.charCodeAt(0);
    return i === 47 ? e.charCodeAt(1) !== 47 : i === 46
}
var be = k.forwardRef((e, i) => {
    const {
        _asChild: a,
        ...r
    } = e, {
        type: l,
        ...c
    } = W_(r, i), f = typeof r.children == "function" ? r.children({
        isActive: c["data-status"] === "active"
    }) : r.children;
    if (!a) {
        const {
            disabled: h,
            ...p
        } = c;
        return k.createElement("a", p, f)
    }
    return k.createElement(a, c, f)
});

function rM(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
var oM = class extends nS {
    constructor(i) {
        super(i), this.useMatch = a => va({
            select: a ? .select,
            from: this.id,
            structuralSharing: a ? .structuralSharing
        }), this.useRouteContext = a => FS({ ...a,
            from: this.id
        }), this.useSearch = a => GS({
            select: a ? .select,
            structuralSharing: a ? .structuralSharing,
            from: this.id
        }), this.useParams = a => YS({
            select: a ? .select,
            structuralSharing: a ? .structuralSharing,
            from: this.id
        }), this.useLoaderDeps = a => KS({ ...a,
            from: this.id
        }), this.useLoaderData = a => qS({ ...a,
            from: this.id
        }), this.useNavigate = () => XS({
            from: this.fullPath
        }), this.Link = Nr.forwardRef((a, r) => j.jsx(be, {
            ref: r,
            from: this.fullPath,
            ...a
        }))
    }
};

function lM(e) {
    return new oM(e)
}
var uM = class extends CA {
    constructor(e) {
        super(e), this.useMatch = i => va({
            select: i ? .select,
            from: this.id,
            structuralSharing: i ? .structuralSharing
        }), this.useRouteContext = i => FS({ ...i,
            from: this.id
        }), this.useSearch = i => GS({
            select: i ? .select,
            structuralSharing: i ? .structuralSharing,
            from: this.id
        }), this.useParams = i => YS({
            select: i ? .select,
            structuralSharing: i ? .structuralSharing,
            from: this.id
        }), this.useLoaderDeps = i => KS({ ...i,
            from: this.id
        }), this.useLoaderData = i => qS({ ...i,
            from: this.id
        }), this.useNavigate = () => XS({
            from: this.fullPath
        }), this.Link = Nr.forwardRef((i, a) => j.jsx(be, {
            ref: a,
            from: this.fullPath,
            ...i
        }))
    }
};

function cM(e) {
    return new uM(e)
}

function an(e) {
    return typeof e == "object" ? new xv(e, {
        silent: !0
    }).createRoute(e) : new xv(e, {
        silent: !0
    }).createRoute
}
var xv = class {
    constructor(e, i) {
        this.path = e, this.createRoute = a => {
            const r = lM(a);
            return r.isRoot = !1, r
        }, this.silent = i ? .silent
    }
};

function sn(e, i) {
    let a, r, l, c;
    const f = () => (a || (a = e().then(p => {
            a = void 0, r = p[i]
        }).catch(p => {
            if (l = p, _E(l) && l instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
                const m = `tanstack_router_reload:${l.message}`;
                sessionStorage.getItem(m) || (sessionStorage.setItem(m, "1"), c = !0)
            }
        })), a),
        h = function(m) {
            if (c) throw window.location.reload(), new Promise(() => {});
            if (l) throw l;
            if (!r)
                if (kl) kl(f());
                else throw f();
            return k.createElement(r, m)
        };
    return h.preload = f, h
}

function fM(e) {
    const i = le(),
        a = `not-found-${It(i.stores.location,r=>r.pathname)}-${It(i.stores.status,r=>r)}`;
    return j.jsx(Jd, {
        getResetKey: () => a,
        onCatch: (r, l) => {
            if (ge(r)) e.onCatch ? .(r, l);
            else throw r
        },
        errorComponent: ({
            error: r
        }) => {
            if (ge(r)) return e.fallback ? .(r);
            throw r
        },
        children: e.children
    })
}

function dM() {
    return j.jsx("p", {
        children: "Not Found"
    })
}

function rs(e) {
    return j.jsx(j.Fragment, {
        children: e.children
    })
}

function QS(e, i, a) {
    return i.options.notFoundComponent ? j.jsx(i.options.notFoundComponent, { ...a
    }) : e.options.defaultNotFoundComponent ? j.jsx(e.options.defaultNotFoundComponent, { ...a
    }) : j.jsx(dM, {})
}

function hM(e) {
    return null
}

function mM() {
    return hM(le()), null
}
var ZS = k.memo(function({
    matchId: i
}) {
    const a = le(),
        r = a.stores.matchStores.get(i);
    r || Ne();
    const l = It(a.stores.loadedAt, f => f),
        c = It(r, f => f);
    return j.jsx(pM, {
        router: a,
        matchId: i,
        resetKey: l,
        matchState: k.useMemo(() => {
            const f = c.routeId,
                h = a.routesById[f].parentRoute ? .id;
            return {
                routeId: f,
                ssr: c.ssr,
                _displayPending: c._displayPending,
                parentRouteId: h
            }
        }, [c._displayPending, c.routeId, c.ssr, a.routesById])
    })
});

function pM({
    router: e,
    matchId: i,
    resetKey: a,
    matchState: r
}) {
    const l = e.routesById[r.routeId],
        c = l.options.pendingComponent ? ? e.options.defaultPendingComponent,
        f = c ? j.jsx(c, {}) : null,
        h = l.options.errorComponent ? ? e.options.defaultErrorComponent,
        p = l.options.onCatch ? ? e.options.defaultOnCatch,
        m = l.isRoot ? l.options.notFoundComponent ? ? e.options.notFoundRoute ? .options.component : l.options.notFoundComponent,
        y = r.ssr === !1 || r.ssr === "data-only",
        g = (!l.isRoot || l.options.wrapInSuspense || y) && (l.options.wrapInSuspense ? ? c ? ? (l.options.errorComponent ? .preload || y)) ? k.Suspense : rs,
        S = h ? Jd : rs,
        b = m ? fM : rs;
    return j.jsxs(l.isRoot ? l.options.shellComponent ? ? rs : rs, {
        children: [j.jsx(ru.Provider, {
            value: i,
            children: j.jsx(g, {
                fallback: f,
                children: j.jsx(S, {
                    getResetKey: () => a,
                    errorComponent: h || Wd,
                    onCatch: (E, _) => {
                        if (ge(E)) throw E.routeId ? ? = r.routeId, E;
                        p ? .(E, _)
                    },
                    children: j.jsx(b, {
                        fallback: E => {
                            if (E.routeId ? ? = r.routeId, !m || E.routeId && E.routeId !== r.routeId || !E.routeId && !l.isRoot) throw E;
                            return k.createElement(m, E)
                        },
                        children: y || r._displayPending ? j.jsx(B_, {
                            fallback: f,
                            children: j.jsx(Tv, {
                                matchId: i
                            })
                        }) : j.jsx(Tv, {
                            matchId: i
                        })
                    })
                })
            })
        }), r.parentRouteId === da ? j.jsxs(j.Fragment, {
            children: [j.jsx(yM, {
                resetKey: a
            }), e.options.scrollRestoration && Y0 ? j.jsx(mM, {}) : null]
        }) : null]
    })
}

function yM({
    resetKey: e
}) {
    const i = le(),
        a = k.useRef(void 0);
    return _r(() => {
        const r = i.latestLocation.href;
        (a.current === void 0 || a.current !== r) && (i.emit({
            type: "onRendered",
            ...ds(i.stores.location.get(), i.stores.resolvedLocation.get())
        }), a.current = r)
    }, [i.latestLocation.state.__TSR_key, e, i]), null
}
var Tv = k.memo(function({
        matchId: i
    }) {
        const a = le(),
            r = (y, g) => a.getMatch(y.id) ? ._nonReactive[g] ? ? y._nonReactive[g],
            l = a.stores.matchStores.get(i);
        l || Ne();
        const c = It(l, y => y),
            f = c.routeId,
            h = a.routesById[f],
            p = k.useMemo(() => {
                const y = (a.routesById[f].options.remountDeps ? ? a.options.defaultRemountDeps) ? .({
                    routeId: f,
                    loaderDeps: c.loaderDeps,
                    params: c._strictParams,
                    search: c._strictSearch
                });
                return y ? JSON.stringify(y) : void 0
            }, [f, c.loaderDeps, c._strictParams, c._strictSearch, a.options.defaultRemountDeps, a.routesById]),
            m = k.useMemo(() => {
                const y = h.options.component ? ? a.options.defaultComponent;
                return y ? j.jsx(y, {}, p) : j.jsx(IS, {})
            }, [p, h.options.component, a.options.defaultComponent]);
        if (c._displayPending) throw r(c, "displayPendingPromise");
        if (c._forcePending) throw r(c, "minPendingPromise");
        if (c.status === "pending") {
            const y = h.options.pendingMinMs ? ? a.options.defaultPendingMinMs;
            if (y) {
                const g = a.getMatch(c.id);
                if (g && !g._nonReactive.minPendingPromise) {
                    const S = ya();
                    g._nonReactive.minPendingPromise = S, setTimeout(() => {
                        S.resolve(), g._nonReactive.minPendingPromise = void 0
                    }, y)
                }
            }
            throw r(c, "loadPromise")
        }
        if (c.status === "notFound") return ge(c.error) || Ne(), QS(a, h, c.error);
        if (c.status === "redirected") throw Le(c.error) || Ne(), r(c, "loadPromise");
        if (c.status === "error") throw c.error;
        return m
    }),
    IS = k.memo(function() {
        const i = le(),
            a = k.useContext(ru);
        let r, l = !1,
            c; {
            const m = a ? i.stores.matchStores.get(a) : void 0;
            [r, l] = It(m, y => [y ? .routeId, y ? .globalNotFound ? ? !1]), c = It(i.stores.matchesId, y => y[y.findIndex(g => g === a) + 1])
        }
        const f = r ? i.routesById[r] : void 0,
            h = i.options.defaultPendingComponent ? j.jsx(i.options.defaultPendingComponent, {}) : null;
        if (l) return f || Ne(), QS(i, f, void 0);
        if (!c) return null;
        const p = j.jsx(ZS, {
            matchId: c
        });
        return r === da ? j.jsx(k.Suspense, {
            fallback: h,
            children: p
        }) : p
    });

function gM() {
    const e = le(),
        i = k.useRef({
            router: e,
            mounted: !1
        }),
        [a, r] = k.useState(!1),
        l = It(e.stores.isLoading, g => g),
        c = It(e.stores.hasPending, g => g),
        f = Hf(l),
        h = l || a || c,
        p = Hf(h),
        m = l || c,
        y = Hf(m);
    return e.startTransition = g => {
        r(!0), k.startTransition(() => {
            g(), r(!1)
        })
    }, k.useEffect(() => {
        const g = e.history.subscribe(e.load),
            S = e.buildLocation({
                to: e.latestLocation.pathname,
                search: !0,
                params: !0,
                hash: !0,
                state: !0,
                _includeValidateSearch: !0
            });
        return Di(e.latestLocation.publicHref) !== Di(S.publicHref) && e.commitLocation({ ...S,
            replace: !0
        }), () => {
            g()
        }
    }, [e, e.history]), _r(() => {
        if (typeof window < "u" && e.ssr || i.current.router === e && i.current.mounted) return;
        i.current = {
            router: e,
            mounted: !0
        }, (async () => {
            try {
                await e.load()
            } catch (S) {
                console.error(S)
            }
        })()
    }, [e]), _r(() => {
        f && !l && e.emit({
            type: "onLoad",
            ...ds(e.stores.location.get(), e.stores.resolvedLocation.get())
        })
    }, [f, e, l]), _r(() => {
        y && !m && e.emit({
            type: "onBeforeRouteMount",
            ...ds(e.stores.location.get(), e.stores.resolvedLocation.get())
        })
    }, [m, y, e]), _r(() => {
        if (p && !h) {
            const g = ds(e.stores.location.get(), e.stores.resolvedLocation.get());
            e.emit({
                type: "onResolved",
                ...g
            }), HS(() => {
                e.stores.status.set("idle"), e.stores.resolvedLocation.set(e.stores.location.get())
            }), g.hrefChanged && DA(e)
        }
    }, [h, p, e]), null
}

function vM() {
    const e = le(),
        i = e.routesById[da].options.pendingComponent ? ? e.options.defaultPendingComponent,
        a = i ? j.jsx(i, {}) : null,
        r = j.jsxs(typeof document < "u" && e.ssr ? rs : k.Suspense, {
            fallback: a,
            children: [j.jsx(gM, {}), j.jsx(SM, {})]
        });
    return e.options.InnerWrap ? j.jsx(e.options.InnerWrap, {
        children: r
    }) : r
}

function SM() {
    const e = le(),
        i = It(e.stores.firstId, l => l),
        a = It(e.stores.loadedAt, l => l),
        r = i ? j.jsx(ZS, {
            matchId: i
        }) : null;
    return j.jsx(ru.Provider, {
        value: i,
        children: e.options.disableGlobalCatchBoundary ? r : j.jsx(Jd, {
            getResetKey: () => a,
            errorComponent: Wd,
            onCatch: void 0,
            children: r
        })
    })
}
var bM = e => ({
        createMutableStore: yv,
        createReadonlyStore: yv,
        batch: HS
    }),
    xM = e => new TM(e),
    TM = class extends SA {
        constructor(e) {
            super(e, bM)
        }
    };

function EM({
    router: e,
    children: i,
    ...a
}) {
    Object.keys(a).length > 0 && e.update({ ...e.options,
        ...a,
        context: { ...e.options.context,
            ...a.context
        }
    });
    const r = j.jsx(US.Provider, {
        value: e,
        children: i
    });
    return e.options.Wrap ? j.jsx(e.options.Wrap, {
        children: r
    }) : r
}

function AM({
    router: e,
    ...i
}) {
    return j.jsx(EM, {
        router: e,
        ...i,
        children: j.jsx(vM, {})
    })
}

function wM(e) {
    const i = le(),
        a = k.useRef(void 0);
    return It(i.stores.location, r => {
        const l = r;
        if (i.options.defaultStructuralSharing) {
            const c = _i(a.current, l);
            return a.current = c, c
        }
        return l
    })
}

function JS({
    tag: e,
    attrs: i,
    children: a,
    nonce: r
}) {
    switch (e) {
        case "title":
            return j.jsx("title", { ...i,
                suppressHydrationWarning: !0,
                children: a
            });
        case "meta":
            return j.jsx("meta", { ...i,
                suppressHydrationWarning: !0
            });
        case "link":
            return j.jsx("link", { ...i,
                nonce: r,
                suppressHydrationWarning: !0
            });
        case "style":
            return j.jsx("style", { ...i,
                dangerouslySetInnerHTML: {
                    __html: a
                },
                nonce: r
            });
        case "script":
            return j.jsx(RM, {
                attrs: i,
                children: a
            });
        default:
            return null
    }
}

function RM({
    attrs: e,
    children: i
}) {
    le();
    const a = $d(),
        r = typeof e ? .type == "string" && e.type !== "" && e.type !== "text/javascript" && e.type !== "module";
    if (k.useEffect(() => {
            if (!r) {
                if (e ? .src) {
                    const l = (() => {
                        try {
                            const f = document.baseURI || window.location.href;
                            return new URL(e.src, f).href
                        } catch {
                            return e.src
                        }
                    })();
                    if (Array.from(document.querySelectorAll("script[src]")).find(f => f.src === l)) return;
                    const c = document.createElement("script");
                    for (const [f, h] of Object.entries(e)) f !== "suppressHydrationWarning" && h !== void 0 && h !== !1 && c.setAttribute(f, typeof h == "boolean" ? "" : String(h));
                    return document.head.appendChild(c), () => {
                        c.parentNode && c.parentNode.removeChild(c)
                    }
                }
                if (typeof i == "string") {
                    const l = typeof e ? .type == "string" ? e.type : "text/javascript",
                        c = typeof e ? .nonce == "string" ? e.nonce : void 0;
                    if (Array.from(document.querySelectorAll("script:not([src])")).find(h => {
                            if (!(h instanceof HTMLScriptElement)) return !1;
                            const p = h.getAttribute("type") ? ? "text/javascript",
                                m = h.getAttribute("nonce") ? ? void 0;
                            return h.textContent === i && p === l && m === c
                        })) return;
                    const f = document.createElement("script");
                    if (f.textContent = i, e)
                        for (const [h, p] of Object.entries(e)) h !== "suppressHydrationWarning" && p !== void 0 && p !== !1 && f.setAttribute(h, typeof p == "boolean" ? "" : String(p));
                    return document.head.appendChild(f), () => {
                        f.parentNode && f.parentNode.removeChild(f)
                    }
                }
            }
        }, [e, i, r]), r && typeof i == "string") return j.jsx("script", { ...e,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: i
        }
    });
    if (!a) {
        if (e ? .src) return j.jsx("script", { ...e,
            suppressHydrationWarning: !0
        });
        if (typeof i == "string") return j.jsx("script", { ...e,
            dangerouslySetInnerHTML: {
                __html: i
            },
            suppressHydrationWarning: !0
        })
    }
    return null
}
var _M = e => {
    const i = le(),
        a = i.options.ssr ? .nonce,
        r = It(i.stores.matches, m => m.map(y => y.meta).filter(Boolean), Oe),
        l = k.useMemo(() => {
            const m = [],
                y = {};
            let g;
            for (let S = r.length - 1; S >= 0; S--) {
                const b = r[S];
                for (let E = b.length - 1; E >= 0; E--) {
                    const _ = b[E];
                    if (_)
                        if (_.title) g || (g = {
                            tag: "title",
                            children: _.title
                        });
                        else if ("script:ld+json" in _) try {
                        const A = JSON.stringify(_["script:ld+json"]);
                        m.push({
                            tag: "script",
                            attrs: {
                                type: "application/ld+json"
                            },
                            children: LE(A)
                        })
                    } catch {} else {
                        const A = _.name ? ? _.property;
                        if (A) {
                            if (y[A]) continue;
                            y[A] = !0
                        }
                        m.push({
                            tag: "meta",
                            attrs: { ..._,
                                nonce: a
                            }
                        })
                    }
                }
            }
            return g && m.push(g), a && m.push({
                tag: "meta",
                attrs: {
                    property: "csp-nonce",
                    content: a
                }
            }), m.reverse(), m
        }, [r, a]),
        c = It(i.stores.matches, m => {
            const y = m.map(b => b.links).filter(Boolean).flat(1).map(b => ({
                    tag: "link",
                    attrs: { ...b,
                        nonce: a
                    }
                })),
                g = i.ssr ? .manifest,
                S = m.map(b => g ? .routes[b.routeId] ? .assets ? ? []).filter(Boolean).flat(1).filter(b => b.tag === "link").map(b => ({
                    tag: "link",
                    attrs: { ...b.attrs,
                        crossOrigin: tv(e, "stylesheet") ? ? b.attrs ? .crossOrigin,
                        suppressHydrationWarning: !0,
                        nonce: a
                    }
                }));
            return [...y, ...S]
        }, Oe),
        f = It(i.stores.matches, m => {
            const y = [];
            return m.map(g => i.looseRoutesById[g.routeId]).forEach(g => i.ssr ? .manifest ? .routes[g.id] ? .preloads ? .filter(Boolean).forEach(S => {
                const b = MA(S);
                y.push({
                    tag: "link",
                    attrs: {
                        rel: "modulepreload",
                        href: b.href,
                        crossOrigin: tv(e, "modulepreload") ? ? b.crossOrigin,
                        nonce: a
                    }
                })
            })), y
        }, Oe),
        h = It(i.stores.matches, m => m.map(y => y.styles).flat(1).filter(Boolean).map(({
            children: y,
            ...g
        }) => ({
            tag: "style",
            attrs: { ...g,
                nonce: a
            },
            children: y
        })), Oe),
        p = It(i.stores.matches, m => m.map(y => y.headScripts).flat(1).filter(Boolean).map(({
            children: y,
            ...g
        }) => ({
            tag: "script",
            attrs: { ...g,
                nonce: a
            },
            children: y
        })), Oe);
    return MM([...l, ...f, ...c, ...h, ...p], m => JSON.stringify(m))
};

function MM(e, i) {
    const a = new Set;
    return e.filter(r => {
        const l = i(r);
        return a.has(l) ? !1 : (a.add(l), !0)
    })
}

function CM(e) {
    const i = _M(e.assetCrossOrigin),
        a = le().options.ssr ? .nonce;
    return j.jsx(j.Fragment, {
        children: i.map(r => k.createElement(JS, { ...r,
            key: `tsr-meta-${JSON.stringify(r)}`,
            nonce: a
        }))
    })
}
var DM = () => {
    const e = le(),
        i = e.options.ssr ? .nonce,
        a = c => {
            const f = [],
                h = e.ssr ? .manifest;
            return h ? (c.map(p => e.looseRoutesById[p.routeId]).forEach(p => h.routes[p.id] ? .assets ? .filter(m => m.tag === "script").forEach(m => {
                f.push({
                    tag: "script",
                    attrs: { ...m.attrs,
                        nonce: i
                    },
                    children: m.children
                })
            })), f) : []
        },
        r = c => c.map(f => f.scripts).flat(1).filter(Boolean).map(({
            children: f,
            ...h
        }) => ({
            tag: "script",
            attrs: { ...h,
                suppressHydrationWarning: !0,
                nonce: i
            },
            children: f
        })),
        l = It(e.stores.matches, a, Oe);
    return OM(e, It(e.stores.matches, r, Oe), l)
};

function OM(e, i, a) {
    let r;
    e.serverSsr && (r = e.serverSsr.takeBufferedScripts());
    const l = [...i, ...a];
    return r && l.unshift(r), j.jsx(j.Fragment, {
        children: l.map((c, f) => k.createElement(JS, { ...c,
            key: `tsr-scripts-${c.tag}-${f}`
        }))
    })
}
const LM = "/assets/styles-D2POZI0D.css",
    th = k.createContext({});

function eh(e) {
    const i = k.useRef(null);
    return i.current === null && (i.current = e()), i.current
}
const NM = typeof window < "u",
    WS = NM ? k.useLayoutEffect : k.useEffect,
    ou = k.createContext(null);

function nh(e, i) {
    e.indexOf(i) === -1 && e.push(i)
}

function Kl(e, i) {
    const a = e.indexOf(i);
    a > -1 && e.splice(a, 1)
}
const wn = (e, i, a) => a > i ? i : a < e ? e : a;
let ih = () => {};
const Li = {},
    $S = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);

function tb(e) {
    return typeof e == "object" && e !== null
}
const eb = e => /^0[^.\s]+$/u.test(e);

function nb(e) {
    let i;
    return () => (i === void 0 && (i = e()), i)
}
const nn = e => e,
    zM = (e, i) => a => i(e(a)),
    Gr = (...e) => e.reduce(zM),
    Pr = (e, i, a) => {
        const r = i - e;
        return r === 0 ? 1 : (a - e) / r
    };
class ah {
    constructor() {
        this.subscriptions = []
    }
    add(i) {
        return nh(this.subscriptions, i), () => Kl(this.subscriptions, i)
    }
    notify(i, a, r) {
        const l = this.subscriptions.length;
        if (l)
            if (l === 1) this.subscriptions[0](i, a, r);
            else
                for (let c = 0; c < l; c++) {
                    const f = this.subscriptions[c];
                    f && f(i, a, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Ke = e => e * 1e3,
    en = e => e / 1e3;

function ib(e, i) {
    return i ? e * (1e3 / i) : 0
}
const ab = (e, i, a) => (((1 - 3 * a + 3 * i) * e + (3 * a - 6 * i)) * e + 3 * i) * e,
    jM = 1e-7,
    BM = 12;

function VM(e, i, a, r, l) {
    let c, f, h = 0;
    do f = i + (a - i) / 2, c = ab(f, r, l) - e, c > 0 ? a = f : i = f; while (Math.abs(c) > jM && ++h < BM);
    return f
}

function Xr(e, i, a, r) {
    if (e === i && a === r) return nn;
    const l = c => VM(c, 0, 1, e, a);
    return c => c === 0 || c === 1 ? c : ab(l(c), i, r)
}
const sb = e => i => i <= .5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2,
    rb = e => i => 1 - e(1 - i),
    ob = Xr(.33, 1.53, .69, .99),
    sh = rb(ob),
    lb = sb(sh),
    ub = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * sh(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    rh = e => 1 - Math.sin(Math.acos(e)),
    cb = rb(rh),
    fb = sb(rh),
    UM = Xr(.42, 0, 1, 1),
    PM = Xr(0, 0, .58, 1),
    db = Xr(.42, 0, .58, 1),
    HM = e => Array.isArray(e) && typeof e[0] != "number",
    hb = e => Array.isArray(e) && typeof e[0] == "number",
    kM = {
        linear: nn,
        easeIn: UM,
        easeInOut: db,
        easeOut: PM,
        circIn: rh,
        circInOut: fb,
        circOut: cb,
        backIn: sh,
        backInOut: lb,
        backOut: ob,
        anticipate: ub
    },
    qM = e => typeof e == "string",
    Ev = e => {
        if (hb(e)) {
            ih(e.length === 4);
            const [i, a, r, l] = e;
            return Xr(i, a, r, l)
        } else if (qM(e)) return kM[e];
        return e
    },
    gl = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function KM(e, i) {
    let a = new Set,
        r = new Set,
        l = !1,
        c = !1;
    const f = new WeakSet;
    let h = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function p(y) {
        f.has(y) && (m.schedule(y), e()), y(h)
    }
    const m = {
        schedule: (y, g = !1, S = !1) => {
            const E = S && l ? a : r;
            return g && f.add(y), E.add(y), y
        },
        cancel: y => {
            r.delete(y), f.delete(y)
        },
        process: y => {
            if (h = y, l) {
                c = !0;
                return
            }
            l = !0;
            const g = a;
            a = r, r = g, a.forEach(p), a.clear(), l = !1, c && (c = !1, m.process(y))
        }
    };
    return m
}
const YM = 40;

function mb(e, i) {
    let a = !1,
        r = !0;
    const l = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        c = () => a = !0,
        f = gl.reduce((L, O) => (L[O] = KM(c), L), {}),
        {
            setup: h,
            read: p,
            resolveKeyframes: m,
            preUpdate: y,
            update: g,
            preRender: S,
            render: b,
            postRender: E
        } = f,
        _ = () => {
            const L = Li.useManualTiming,
                O = L ? l.timestamp : performance.now();
            a = !1, L || (l.delta = r ? 1e3 / 60 : Math.max(Math.min(O - l.timestamp, YM), 1)), l.timestamp = O, l.isProcessing = !0, h.process(l), p.process(l), m.process(l), y.process(l), g.process(l), S.process(l), b.process(l), E.process(l), l.isProcessing = !1, a && i && (r = !1, e(_))
        },
        A = () => {
            a = !0, r = !0, l.isProcessing || e(_)
        };
    return {
        schedule: gl.reduce((L, O) => {
            const F = f[O];
            return L[O] = (J, q = !1, K = !1) => (a || A(), F.schedule(J, q, K)), L
        }, {}),
        cancel: L => {
            for (let O = 0; O < gl.length; O++) f[gl[O]].cancel(L)
        },
        state: l,
        steps: f
    }
}
const {
    schedule: Vt,
    cancel: Ni,
    state: pe,
    steps: Xf
} = mb(typeof requestAnimationFrame < "u" ? requestAnimationFrame : nn, !0);
let _l;

function GM() {
    _l = void 0
}
const Te = {
        now: () => (_l === void 0 && Te.set(pe.isProcessing || Li.useManualTiming ? pe.timestamp : performance.now()), _l),
        set: e => {
            _l = e, queueMicrotask(GM)
        }
    },
    pb = e => i => typeof i == "string" && i.startsWith(e),
    yb = pb("--"),
    XM = pb("var(--"),
    oh = e => XM(e) ? FM.test(e.split("/*")[0].trim()) : !1,
    FM = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function Av(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const vs = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    Hr = { ...vs,
        transform: e => wn(0, 1, e)
    },
    vl = { ...vs,
        default: 1
    },
    Cr = e => Math.round(e * 1e5) / 1e5,
    lh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function QM(e) {
    return e == null
}
const ZM = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    uh = (e, i) => a => !!(typeof a == "string" && ZM.test(a) && a.startsWith(e) || i && !QM(a) && Object.prototype.hasOwnProperty.call(a, i)),
    gb = (e, i, a) => r => {
        if (typeof r != "string") return r;
        const [l, c, f, h] = r.match(lh);
        return {
            [e]: parseFloat(l),
            [i]: parseFloat(c),
            [a]: parseFloat(f),
            alpha: h !== void 0 ? parseFloat(h) : 1
        }
    },
    IM = e => wn(0, 255, e),
    Ff = { ...vs,
        transform: e => Math.round(IM(e))
    },
    ca = {
        test: uh("rgb", "red"),
        parse: gb("red", "green", "blue"),
        transform: ({
            red: e,
            green: i,
            blue: a,
            alpha: r = 1
        }) => "rgba(" + Ff.transform(e) + ", " + Ff.transform(i) + ", " + Ff.transform(a) + ", " + Cr(Hr.transform(r)) + ")"
    };

function JM(e) {
    let i = "",
        a = "",
        r = "",
        l = "";
    return e.length > 5 ? (i = e.substring(1, 3), a = e.substring(3, 5), r = e.substring(5, 7), l = e.substring(7, 9)) : (i = e.substring(1, 2), a = e.substring(2, 3), r = e.substring(3, 4), l = e.substring(4, 5), i += i, a += a, r += r, l += l), {
        red: parseInt(i, 16),
        green: parseInt(a, 16),
        blue: parseInt(r, 16),
        alpha: l ? parseInt(l, 16) / 255 : 1
    }
}
const gd = {
        test: uh("#"),
        parse: JM,
        transform: ca.transform
    },
    Fr = e => ({
        test: i => typeof i == "string" && i.endsWith(e) && i.split(" ").length === 1,
        parse: parseFloat,
        transform: i => `${i}${e}`
    }),
    Ei = Fr("deg"),
    An = Fr("%"),
    at = Fr("px"),
    WM = Fr("vh"),
    $M = Fr("vw"),
    wv = { ...An,
        parse: e => An.parse(e) / 100,
        transform: e => An.transform(e * 100)
    },
    us = {
        test: uh("hsl", "hue"),
        parse: gb("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: i,
            lightness: a,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + An.transform(Cr(i)) + ", " + An.transform(Cr(a)) + ", " + Cr(Hr.transform(r)) + ")"
    },
    ee = {
        test: e => ca.test(e) || gd.test(e) || us.test(e),
        parse: e => ca.test(e) ? ca.parse(e) : us.test(e) ? us.parse(e) : gd.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? ca.transform(e) : us.transform(e),
        getAnimatableNone: e => {
            const i = ee.parse(e);
            return i.alpha = 0, ee.transform(i)
        }
    },
    tC = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function eC(e) {
    return isNaN(e) && typeof e == "string" && (e.match(lh) ? .length || 0) + (e.match(tC) ? .length || 0) > 0
}
const vb = "number",
    Sb = "color",
    nC = "var",
    iC = "var(",
    Rv = "${}",
    aC = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function ys(e) {
    const i = e.toString(),
        a = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        l = [];
    let c = 0;
    const h = i.replace(aC, p => (ee.test(p) ? (r.color.push(c), l.push(Sb), a.push(ee.parse(p))) : p.startsWith(iC) ? (r.var.push(c), l.push(nC), a.push(p)) : (r.number.push(c), l.push(vb), a.push(parseFloat(p))), ++c, Rv)).split(Rv);
    return {
        values: a,
        split: h,
        indexes: r,
        types: l
    }
}

function sC(e) {
    return ys(e).values
}

function bb({
    split: e,
    types: i
}) {
    const a = e.length;
    return r => {
        let l = "";
        for (let c = 0; c < a; c++)
            if (l += e[c], r[c] !== void 0) {
                const f = i[c];
                f === vb ? l += Cr(r[c]) : f === Sb ? l += ee.transform(r[c]) : l += r[c]
            }
        return l
    }
}

function rC(e) {
    return bb(ys(e))
}
const oC = e => typeof e == "number" ? 0 : ee.test(e) ? ee.getAnimatableNone(e) : e,
    lC = (e, i) => typeof e == "number" ? i ? .trim().endsWith("/") ? e : 0 : oC(e);

function uC(e) {
    const i = ys(e);
    return bb(i)(i.values.map((r, l) => lC(r, i.split[l])))
}
const hn = {
    test: eC,
    parse: sC,
    createTransformer: rC,
    getAnimatableNone: uC
};

function Qf(e, i, a) {
    return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? e + (i - e) * 6 * a : a < 1 / 2 ? i : a < 2 / 3 ? e + (i - e) * (2 / 3 - a) * 6 : e
}

function cC({
    hue: e,
    saturation: i,
    lightness: a,
    alpha: r
}) {
    e /= 360, i /= 100, a /= 100;
    let l = 0,
        c = 0,
        f = 0;
    if (!i) l = c = f = a;
    else {
        const h = a < .5 ? a * (1 + i) : a + i - a * i,
            p = 2 * a - h;
        l = Qf(p, h, e + 1 / 3), c = Qf(p, h, e), f = Qf(p, h, e - 1 / 3)
    }
    return {
        red: Math.round(l * 255),
        green: Math.round(c * 255),
        blue: Math.round(f * 255),
        alpha: r
    }
}

function Yl(e, i) {
    return a => a > 0 ? i : e
}
const kt = (e, i, a) => e + (i - e) * a,
    Zf = (e, i, a) => {
        const r = e * e,
            l = a * (i * i - r) + r;
        return l < 0 ? 0 : Math.sqrt(l)
    },
    fC = [gd, ca, us],
    dC = e => fC.find(i => i.test(e));

function _v(e) {
    const i = dC(e);
    if (!i) return !1;
    let a = i.parse(e);
    return i === us && (a = cC(a)), a
}
const Mv = (e, i) => {
        const a = _v(e),
            r = _v(i);
        if (!a || !r) return Yl(e, i);
        const l = { ...a
        };
        return c => (l.red = Zf(a.red, r.red, c), l.green = Zf(a.green, r.green, c), l.blue = Zf(a.blue, r.blue, c), l.alpha = kt(a.alpha, r.alpha, c), ca.transform(l))
    },
    vd = new Set(["none", "hidden"]);

function hC(e, i) {
    return vd.has(e) ? a => a <= 0 ? e : i : a => a >= 1 ? i : e
}

function mC(e, i) {
    return a => kt(e, i, a)
}

function ch(e) {
    return typeof e == "number" ? mC : typeof e == "string" ? oh(e) ? Yl : ee.test(e) ? Mv : gC : Array.isArray(e) ? xb : typeof e == "object" ? ee.test(e) ? Mv : pC : Yl
}

function xb(e, i) {
    const a = [...e],
        r = a.length,
        l = e.map((c, f) => ch(c)(c, i[f]));
    return c => {
        for (let f = 0; f < r; f++) a[f] = l[f](c);
        return a
    }
}

function pC(e, i) {
    const a = { ...e,
            ...i
        },
        r = {};
    for (const l in a) e[l] !== void 0 && i[l] !== void 0 && (r[l] = ch(e[l])(e[l], i[l]));
    return l => {
        for (const c in r) a[c] = r[c](l);
        return a
    }
}

function yC(e, i) {
    const a = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let l = 0; l < i.values.length; l++) {
        const c = i.types[l],
            f = e.indexes[c][r[c]],
            h = e.values[f] ? ? 0;
        a[l] = h, r[c]++
    }
    return a
}
const gC = (e, i) => {
    const a = hn.createTransformer(i),
        r = ys(e),
        l = ys(i);
    return r.indexes.var.length === l.indexes.var.length && r.indexes.color.length === l.indexes.color.length && r.indexes.number.length >= l.indexes.number.length ? vd.has(e) && !l.values.length || vd.has(i) && !r.values.length ? hC(e, i) : Gr(xb(yC(r, l), l.values), a) : Yl(e, i)
};

function Tb(e, i, a) {
    return typeof e == "number" && typeof i == "number" && typeof a == "number" ? kt(e, i, a) : ch(e)(e, i)
}
const vC = e => {
        const i = ({
            timestamp: a
        }) => e(a);
        return {
            start: (a = !0) => Vt.update(i, a),
            stop: () => Ni(i),
            now: () => pe.isProcessing ? pe.timestamp : Te.now()
        }
    },
    Eb = (e, i, a = 10) => {
        let r = "";
        const l = Math.max(Math.round(i / a), 2);
        for (let c = 0; c < l; c++) r += Math.round(e(c / (l - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0,r.length-2)})`
    },
    Gl = 2e4;

function fh(e) {
    let i = 0;
    const a = 50;
    let r = e.next(i);
    for (; !r.done && i < Gl;) i += a, r = e.next(i);
    return i >= Gl ? 1 / 0 : i
}

function SC(e, i = 100, a) {
    const r = a({ ...e,
            keyframes: [0, i]
        }),
        l = Math.min(fh(r), Gl);
    return {
        type: "keyframes",
        ease: c => r.next(l * c).value / i,
        duration: en(l)
    }
}
const Xt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};

function Sd(e, i) {
    return e * Math.sqrt(1 - i * i)
}
const bC = 12;

function xC(e, i, a) {
    let r = a;
    for (let l = 1; l < bC; l++) r = r - e(r) / i(r);
    return r
}
const If = .001;

function TC({
    duration: e = Xt.duration,
    bounce: i = Xt.bounce,
    velocity: a = Xt.velocity,
    mass: r = Xt.mass
}) {
    let l, c, f = 1 - i;
    f = wn(Xt.minDamping, Xt.maxDamping, f), e = wn(Xt.minDuration, Xt.maxDuration, en(e)), f < 1 ? (l = m => {
        const y = m * f,
            g = y * e,
            S = y - a,
            b = Sd(m, f),
            E = Math.exp(-g);
        return If - S / b * E
    }, c = m => {
        const g = m * f * e,
            S = g * a + a,
            b = Math.pow(f, 2) * Math.pow(m, 2) * e,
            E = Math.exp(-g),
            _ = Sd(Math.pow(m, 2), f);
        return (-l(m) + If > 0 ? -1 : 1) * ((S - b) * E) / _
    }) : (l = m => {
        const y = Math.exp(-m * e),
            g = (m - a) * e + 1;
        return -If + y * g
    }, c = m => {
        const y = Math.exp(-m * e),
            g = (a - m) * (e * e);
        return y * g
    });
    const h = 5 / e,
        p = xC(l, c, h);
    if (e = Ke(e), isNaN(p)) return {
        stiffness: Xt.stiffness,
        damping: Xt.damping,
        duration: e
    }; {
        const m = Math.pow(p, 2) * r;
        return {
            stiffness: m,
            damping: f * 2 * Math.sqrt(r * m),
            duration: e
        }
    }
}
const EC = ["duration", "bounce"],
    AC = ["stiffness", "damping", "mass"];

function Cv(e, i) {
    return i.some(a => e[a] !== void 0)
}

function wC(e) {
    let i = {
        velocity: Xt.velocity,
        stiffness: Xt.stiffness,
        damping: Xt.damping,
        mass: Xt.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Cv(e, AC) && Cv(e, EC))
        if (i.velocity = 0, e.visualDuration) {
            const a = e.visualDuration,
                r = 2 * Math.PI / (a * 1.2),
                l = r * r,
                c = 2 * wn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l);
            i = { ...i,
                mass: Xt.mass,
                stiffness: l,
                damping: c
            }
        } else {
            const a = TC({ ...e,
                velocity: 0
            });
            i = { ...i,
                ...a,
                mass: Xt.mass
            }, i.isResolvedFromDuration = !0
        }
    return i
}

function Xl(e = Xt.visualDuration, i = Xt.bounce) {
    const a = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: i
    } : e;
    let {
        restSpeed: r,
        restDelta: l
    } = a;
    const c = a.keyframes[0],
        f = a.keyframes[a.keyframes.length - 1],
        h = {
            done: !1,
            value: c
        },
        {
            stiffness: p,
            damping: m,
            mass: y,
            duration: g,
            velocity: S,
            isResolvedFromDuration: b
        } = wC({ ...a,
            velocity: -en(a.velocity || 0)
        }),
        E = S || 0,
        _ = m / (2 * Math.sqrt(p * y)),
        A = f - c,
        R = en(Math.sqrt(p / y)),
        N = Math.abs(A) < 5;
    r || (r = N ? Xt.restSpeed.granular : Xt.restSpeed.default), l || (l = N ? Xt.restDelta.granular : Xt.restDelta.default);
    let L, O, F, J, q, K;
    if (_ < 1) F = Sd(R, _), J = (E + _ * R * A) / F, L = I => {
        const $ = Math.exp(-_ * R * I);
        return f - $ * (J * Math.sin(F * I) + A * Math.cos(F * I))
    }, q = _ * R * J + A * F, K = _ * R * A - J * F, O = I => Math.exp(-_ * R * I) * (q * Math.sin(F * I) + K * Math.cos(F * I));
    else if (_ === 1) {
        L = $ => f - Math.exp(-R * $) * (A + (E + R * A) * $);
        const I = E + R * A;
        O = $ => Math.exp(-R * $) * (R * I * $ - E)
    } else {
        const I = R * Math.sqrt(_ * _ - 1);
        L = Et => {
            const yt = Math.exp(-_ * R * Et),
                P = Math.min(I * Et, 300);
            return f - yt * ((E + _ * R * A) * Math.sinh(P) + I * A * Math.cosh(P)) / I
        };
        const $ = (E + _ * R * A) / I,
            ot = _ * R * $ - A * I,
            ct = _ * R * A - $ * I;
        O = Et => {
            const yt = Math.exp(-_ * R * Et),
                P = Math.min(I * Et, 300);
            return yt * (ot * Math.sinh(P) + ct * Math.cosh(P))
        }
    }
    const Z = {
        calculatedDuration: b && g || null,
        velocity: I => Ke(O(I)),
        next: I => {
            if (!b && _ < 1) {
                const ot = Math.exp(-_ * R * I),
                    ct = Math.sin(F * I),
                    Et = Math.cos(F * I),
                    yt = f - ot * (J * ct + A * Et),
                    P = Ke(ot * (q * ct + K * Et));
                return h.done = Math.abs(P) <= r && Math.abs(f - yt) <= l, h.value = h.done ? f : yt, h
            }
            const $ = L(I);
            if (b) h.done = I >= g;
            else {
                const ot = Ke(O(I));
                h.done = Math.abs(ot) <= r && Math.abs(f - $) <= l
            }
            return h.value = h.done ? f : $, h
        },
        toString: () => {
            const I = Math.min(fh(Z), Gl),
                $ = Eb(ot => Z.next(I * ot).value, I, 30);
            return I + "ms " + $
        },
        toTransition: () => {}
    };
    return Z
}
Xl.applyToOptions = e => {
    const i = SC(e, 100, Xl);
    return e.ease = i.ease, e.duration = Ke(i.duration), e.type = "keyframes", e
};
const RC = 5;

function Ab(e, i, a) {
    const r = Math.max(i - RC, 0);
    return ib(a - e(r), i - r)
}

function bd({
    keyframes: e,
    velocity: i = 0,
    power: a = .8,
    timeConstant: r = 325,
    bounceDamping: l = 10,
    bounceStiffness: c = 500,
    modifyTarget: f,
    min: h,
    max: p,
    restDelta: m = .5,
    restSpeed: y
}) {
    const g = e[0],
        S = {
            done: !1,
            value: g
        },
        b = K => h !== void 0 && K < h || p !== void 0 && K > p,
        E = K => h === void 0 ? p : p === void 0 || Math.abs(h - K) < Math.abs(p - K) ? h : p;
    let _ = a * i;
    const A = g + _,
        R = f === void 0 ? A : f(A);
    R !== A && (_ = R - g);
    const N = K => -_ * Math.exp(-K / r),
        L = K => R + N(K),
        O = K => {
            const Z = N(K),
                I = L(K);
            S.done = Math.abs(Z) <= m, S.value = S.done ? R : I
        };
    let F, J;
    const q = K => {
        b(S.value) && (F = K, J = Xl({
            keyframes: [S.value, E(S.value)],
            velocity: Ab(L, K, S.value),
            damping: l,
            stiffness: c,
            restDelta: m,
            restSpeed: y
        }))
    };
    return q(0), {
        calculatedDuration: null,
        next: K => {
            let Z = !1;
            return !J && F === void 0 && (Z = !0, O(K), q(K)), F !== void 0 && K >= F ? J.next(K - F) : (!Z && O(K), S)
        }
    }
}

function _C(e, i, a) {
    const r = [],
        l = a || Li.mix || Tb,
        c = e.length - 1;
    for (let f = 0; f < c; f++) {
        let h = l(e[f], e[f + 1]);
        if (i) {
            const p = Array.isArray(i) ? i[f] || nn : i;
            h = Gr(p, h)
        }
        r.push(h)
    }
    return r
}

function MC(e, i, {
    clamp: a = !0,
    ease: r,
    mixer: l
} = {}) {
    const c = e.length;
    if (ih(c === i.length), c === 1) return () => i[0];
    if (c === 2 && i[0] === i[1]) return () => i[1];
    const f = e[0] === e[1];
    e[0] > e[c - 1] && (e = [...e].reverse(), i = [...i].reverse());
    const h = _C(i, r, l),
        p = h.length,
        m = y => {
            if (f && y < e[0]) return i[0];
            let g = 0;
            if (p > 1)
                for (; g < e.length - 2 && !(y < e[g + 1]); g++);
            const S = Pr(e[g], e[g + 1], y);
            return h[g](S)
        };
    return a ? y => m(wn(e[0], e[c - 1], y)) : m
}

function CC(e, i) {
    const a = e[e.length - 1];
    for (let r = 1; r <= i; r++) {
        const l = Pr(0, i, r);
        e.push(kt(a, 1, l))
    }
}

function DC(e) {
    const i = [0];
    return CC(i, e.length - 1), i
}

function OC(e, i) {
    return e.map(a => a * i)
}

function LC(e, i) {
    return e.map(() => i || db).splice(0, e.length - 1)
}

function Dr({
    duration: e = 300,
    keyframes: i,
    times: a,
    ease: r = "easeInOut"
}) {
    const l = HM(r) ? r.map(Ev) : Ev(r),
        c = {
            done: !1,
            value: i[0]
        },
        f = OC(a && a.length === i.length ? a : DC(i), e),
        h = MC(f, i, {
            ease: Array.isArray(l) ? l : LC(i, l)
        });
    return {
        calculatedDuration: e,
        next: p => (c.value = h(p), c.done = p >= e, c)
    }
}
const NC = e => e !== null;

function lu(e, {
    repeat: i,
    repeatType: a = "loop"
}, r, l = 1) {
    const c = e.filter(NC),
        h = l < 0 || i && a !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
    return !h || r === void 0 ? c[h] : r
}
const zC = {
    decay: bd,
    inertia: bd,
    tween: Dr,
    keyframes: Dr,
    spring: Xl
};

function wb(e) {
    typeof e.type == "string" && (e.type = zC[e.type])
}
class dh {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(i => {
            this.resolve = i
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(i, a) {
        return this.finished.then(i, a)
    }
}
const jC = e => e / 100;
class Fl extends dh {
    constructor(i) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
            done: !1,
            value: void 0
        }, this.stop = () => {
            const {
                motionValue: a
            } = this.options;
            a && a.updatedAt !== Te.now() && this.tick(Te.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop ? .())
        }, this.options = i, this.initAnimation(), this.play(), i.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: i
        } = this;
        wb(i);
        const {
            type: a = Dr,
            repeat: r = 0,
            repeatDelay: l = 0,
            repeatType: c,
            velocity: f = 0
        } = i;
        let {
            keyframes: h
        } = i;
        const p = a || Dr;
        p !== Dr && typeof h[0] != "number" && (this.mixKeyframes = Gr(jC, Tb(h[0], h[1])), h = [0, 100]);
        const m = p({ ...i,
            keyframes: h
        });
        c === "mirror" && (this.mirroredGenerator = p({ ...i,
            keyframes: [...h].reverse(),
            velocity: -f
        })), m.calculatedDuration === null && (m.calculatedDuration = fh(m));
        const {
            calculatedDuration: y
        } = m;
        this.calculatedDuration = y, this.resolvedDuration = y + l, this.totalDuration = this.resolvedDuration * (r + 1) - l, this.generator = m
    }
    updateTime(i) {
        const a = Math.round(i - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = a
    }
    tick(i, a = !1) {
        const {
            generator: r,
            totalDuration: l,
            mixKeyframes: c,
            mirroredGenerator: f,
            resolvedDuration: h,
            calculatedDuration: p
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
            delay: m = 0,
            keyframes: y,
            repeat: g,
            repeatType: S,
            repeatDelay: b,
            type: E,
            onUpdate: _,
            finalKeyframe: A
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - l / this.speed, this.startTime)), a ? this.currentTime = i : this.updateTime(i);
        const R = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
            N = this.playbackSpeed >= 0 ? R < 0 : R > l;
        this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
        let L = this.currentTime,
            O = r;
        if (g) {
            const K = Math.min(this.currentTime, l) / h;
            let Z = Math.floor(K),
                I = K % 1;
            !I && K >= 1 && (I = 1), I === 1 && Z--, Z = Math.min(Z, g + 1), Z % 2 && (S === "reverse" ? (I = 1 - I, b && (I -= b / h)) : S === "mirror" && (O = f)), L = wn(0, 1, I) * h
        }
        let F;
        N ? (this.delayState.value = y[0], F = this.delayState) : F = O.next(L), c && !N && (F.value = c(F.value));
        let {
            done: J
        } = F;
        !N && p !== null && (J = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
        const q = this.holdTime === null && (this.state === "finished" || this.state === "running" && J);
        return q && E !== bd && (F.value = lu(y, this.options, A, this.speed)), _ && _(F.value), q && this.finish(), F
    }
    then(i, a) {
        return this.finished.then(i, a)
    }
    get duration() {
        return en(this.calculatedDuration)
    }
    get iterationDuration() {
        const {
            delay: i = 0
        } = this.options || {};
        return this.duration + en(i)
    }
    get time() {
        return en(this.currentTime)
    }
    set time(i) {
        i = Ke(i), this.currentTime = i, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = i, this.tick(i))
    }
    getGeneratorVelocity() {
        const i = this.currentTime;
        if (i <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(i);
        const a = this.generator.next(i).value;
        return Ab(r => this.generator.next(r).value, i, a)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(i) {
        const a = this.playbackSpeed !== i;
        a && this.driver && this.updateTime(Te.now()), this.playbackSpeed = i, a && this.driver && (this.time = en(this.currentTime))
    }
    play() {
        if (this.isStopped) return;
        const {
            driver: i = vC,
            startTime: a
        } = this.options;
        this.driver || (this.driver = i(l => this.tick(l))), this.options.onPlay ? .();
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = a ? ? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(Te.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
    }
    cancel() {
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(i) {
        return this.startTime = 0, this.tick(i, !0)
    }
    attachTimeline(i) {
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), i.observe(this)
    }
}

function BC(e) {
    for (let i = 1; i < e.length; i++) e[i] ? ? (e[i] = e[i - 1])
}
const fa = e => e * 180 / Math.PI,
    xd = e => {
        const i = fa(Math.atan2(e[1], e[0]));
        return Td(i)
    },
    VC = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: xd,
        rotateZ: xd,
        skewX: e => fa(Math.atan(e[1])),
        skewY: e => fa(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    Td = e => (e = e % 360, e < 0 && (e += 360), e),
    Dv = xd,
    Ov = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    Lv = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    UC = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Ov,
        scaleY: Lv,
        scale: e => (Ov(e) + Lv(e)) / 2,
        rotateX: e => Td(fa(Math.atan2(e[6], e[5]))),
        rotateY: e => Td(fa(Math.atan2(-e[2], e[0]))),
        rotateZ: Dv,
        rotate: Dv,
        skewX: e => fa(Math.atan(e[4])),
        skewY: e => fa(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function Ed(e) {
    return e.includes("scale") ? 1 : 0
}

function Ad(e, i) {
    if (!e || e === "none") return Ed(i);
    const a = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, l;
    if (a) r = UC, l = a;
    else {
        const h = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = VC, l = h
    }
    if (!l) return Ed(i);
    const c = r[i],
        f = l[1].split(",").map(HC);
    return typeof c == "function" ? c(f) : f[c]
}
const PC = (e, i) => {
    const {
        transform: a = "none"
    } = getComputedStyle(e);
    return Ad(a, i)
};

function HC(e) {
    return parseFloat(e.trim())
}
const Ss = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    bs = new Set(Ss),
    Nv = e => e === vs || e === at,
    kC = new Set(["x", "y", "z"]),
    qC = Ss.filter(e => !kC.has(e));

function KC(e) {
    const i = [];
    return qC.forEach(a => {
        const r = e.getValue(a);
        r !== void 0 && (i.push([a, r.get()]), r.set(a.startsWith("scale") ? 1 : 0))
    }), i
}
const Ci = {
    width: ({
        x: e
    }, {
        paddingLeft: i = "0",
        paddingRight: a = "0",
        boxSizing: r
    }) => {
        const l = e.max - e.min;
        return r === "border-box" ? l : l - parseFloat(i) - parseFloat(a)
    },
    height: ({
        y: e
    }, {
        paddingTop: i = "0",
        paddingBottom: a = "0",
        boxSizing: r
    }) => {
        const l = e.max - e.min;
        return r === "border-box" ? l : l - parseFloat(i) - parseFloat(a)
    },
    top: (e, {
        top: i
    }) => parseFloat(i),
    left: (e, {
        left: i
    }) => parseFloat(i),
    bottom: ({
        y: e
    }, {
        top: i
    }) => parseFloat(i) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: i
    }) => parseFloat(i) + (e.max - e.min),
    x: (e, {
        transform: i
    }) => Ad(i, "x"),
    y: (e, {
        transform: i
    }) => Ad(i, "y")
};
Ci.translateX = Ci.x;
Ci.translateY = Ci.y;
const ma = new Set;
let wd = !1,
    Rd = !1,
    _d = !1;

function Rb() {
    if (Rd) {
        const e = Array.from(ma).filter(r => r.needsMeasurement),
            i = new Set(e.map(r => r.element)),
            a = new Map;
        i.forEach(r => {
            const l = KC(r);
            l.length && (a.set(r, l), r.render())
        }), e.forEach(r => r.measureInitialState()), i.forEach(r => {
            r.render();
            const l = a.get(r);
            l && l.forEach(([c, f]) => {
                r.getValue(c) ? .set(f)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    Rd = !1, wd = !1, ma.forEach(e => e.complete(_d)), ma.clear()
}

function _b() {
    ma.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (Rd = !0)
    })
}

function YC() {
    _d = !0, _b(), Rb(), _d = !1
}
class hh {
    constructor(i, a, r, l, c, f = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...i], this.onComplete = a, this.name = r, this.motionValue = l, this.element = c, this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (ma.add(this), wd || (wd = !0, Vt.read(_b), Vt.resolveKeyframes(Rb))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: i,
            name: a,
            element: r,
            motionValue: l
        } = this;
        if (i[0] === null) {
            const c = l ? .get(),
                f = i[i.length - 1];
            if (c !== void 0) i[0] = c;
            else if (r && a) {
                const h = r.readValue(a, f);
                h != null && (i[0] = h)
            }
            i[0] === void 0 && (i[0] = f), l && c === void 0 && l.set(i[0])
        }
        BC(i)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(i = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i), ma.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (ma.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const GC = e => e.startsWith("--");

function Mb(e, i, a) {
    GC(i) ? e.style.setProperty(i, a) : e.style[i] = a
}
const XC = {};

function Cb(e, i) {
    const a = nb(e);
    return () => XC[i] ? ? a()
}
const FC = Cb(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
    Db = Cb(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    Mr = ([e, i, a, r]) => `cubic-bezier(${e}, ${i}, ${a}, ${r})`,
    zv = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Mr([0, .65, .55, 1]),
        circOut: Mr([.55, 0, 1, .45]),
        backIn: Mr([.31, .01, .66, -.59]),
        backOut: Mr([.33, 1.53, .69, .99])
    };

function Ob(e, i) {
    if (e) return typeof e == "function" ? Db() ? Eb(e, i) : "ease-out" : hb(e) ? Mr(e) : Array.isArray(e) ? e.map(a => Ob(a, i) || zv.easeOut) : zv[e]
}

function QC(e, i, a, {
    delay: r = 0,
    duration: l = 300,
    repeat: c = 0,
    repeatType: f = "loop",
    ease: h = "easeOut",
    times: p
} = {}, m = void 0) {
    const y = {
        [i]: a
    };
    p && (y.offset = p);
    const g = Ob(h, l);
    Array.isArray(g) && (y.easing = g);
    const S = {
        delay: r,
        duration: l,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: c + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return m && (S.pseudoElement = m), e.animate(y, S)
}

function Lb(e) {
    return typeof e == "function" && "applyToOptions" in e
}

function ZC({
    type: e,
    ...i
}) {
    return Lb(e) && Db() ? e.applyToOptions(i) : (i.duration ? ? (i.duration = 300), i.ease ? ? (i.ease = "easeOut"), i)
}
class Nb extends dh {
    constructor(i) {
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !i) return;
        const {
            element: a,
            name: r,
            keyframes: l,
            pseudoElement: c,
            allowFlatten: f = !1,
            finalKeyframe: h,
            onComplete: p
        } = i;
        this.isPseudoElement = !!c, this.allowFlatten = f, this.options = i, ih(typeof i.type != "string");
        const m = ZC(i);
        this.animation = QC(a, r, l, m, c), m.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !c) {
                const y = lu(l, this.options, h, this.speed);
                this.updateMotionValue && this.updateMotionValue(y), Mb(a, r, y), this.animation.cancel()
            }
            p ? .(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish ? .()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: i
        } = this;
        i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        const i = this.options ? .element;
        !this.isPseudoElement && i ? .isConnected && this.animation.commitStyles ? .()
    }
    get duration() {
        const i = this.animation.effect ? .getComputedTiming ? .().duration || 0;
        return en(Number(i))
    }
    get iterationDuration() {
        const {
            delay: i = 0
        } = this.options || {};
        return this.duration + en(i)
    }
    get time() {
        return en(Number(this.animation.currentTime) || 0)
    }
    set time(i) {
        const a = this.finishedTime !== null;
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = Ke(i), a && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(i) {
        i < 0 && (this.finishedTime = null), this.animation.playbackRate = i
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ? ? Number(this.animation.startTime)
    }
    set startTime(i) {
        this.manualStartTime = this.animation.startTime = i
    }
    attachTimeline({
        timeline: i,
        rangeStart: a,
        rangeEnd: r,
        observe: l
    }) {
        return this.allowFlatten && this.animation.effect ? .updateTiming({
            easing: "linear"
        }), this.animation.onfinish = null, i && FC() ? (this.animation.timeline = i, a && (this.animation.rangeStart = a), r && (this.animation.rangeEnd = r), nn) : l(this)
    }
}
const zb = {
    anticipate: ub,
    backInOut: lb,
    circInOut: fb
};

function IC(e) {
    return e in zb
}

function JC(e) {
    typeof e.ease == "string" && IC(e.ease) && (e.ease = zb[e.ease])
}
const Jf = 10;
class WC extends Nb {
    constructor(i) {
        JC(i), wb(i), super(i), i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime), this.options = i
    }
    updateMotionValue(i) {
        const {
            motionValue: a,
            onUpdate: r,
            onComplete: l,
            element: c,
            ...f
        } = this.options;
        if (!a) return;
        if (i !== void 0) {
            a.set(i);
            return
        }
        const h = new Fl({ ...f,
                autoplay: !1
            }),
            p = Math.max(Jf, Te.now() - this.startTime),
            m = wn(0, Jf, p - Jf),
            y = h.sample(p).value,
            {
                name: g
            } = this.options;
        c && g && Mb(c, g, y), a.setWithVelocity(h.sample(Math.max(0, p - m)).value, y, m), h.stop()
    }
}
const jv = (e, i) => i === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (hn.test(e) || e === "0") && !e.startsWith("url("));

function $C(e) {
    const i = e[0];
    if (e.length === 1) return !0;
    for (let a = 0; a < e.length; a++)
        if (e[a] !== i) return !0
}

function t2(e, i, a, r) {
    const l = e[0];
    if (l === null) return !1;
    if (i === "display" || i === "visibility") return !0;
    const c = e[e.length - 1],
        f = jv(l, i),
        h = jv(c, i);
    return !f || !h ? !1 : $C(e) || (a === "spring" || Lb(a)) && r
}

function Md(e) {
    e.duration = 0, e.type = "keyframes"
}
const jb = new Set(["opacity", "clipPath", "filter", "transform"]),
    e2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;

function n2(e) {
    for (let i = 0; i < e.length; i++)
        if (typeof e[i] == "string" && e2.test(e[i])) return !0;
    return !1
}
const i2 = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
    a2 = nb(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function s2(e) {
    const {
        motionValue: i,
        name: a,
        repeatDelay: r,
        repeatType: l,
        damping: c,
        type: f,
        keyframes: h
    } = e;
    if (!(i ? .owner ? .current instanceof HTMLElement)) return !1;
    const {
        onUpdate: m,
        transformTemplate: y
    } = i.owner.getProps();
    return a2() && a && (jb.has(a) || i2.has(a) && n2(h)) && (a !== "transform" || !y) && !m && !r && l !== "mirror" && c !== 0 && f !== "inertia"
}
const r2 = 40;
class o2 extends dh {
    constructor({
        autoplay: i = !0,
        delay: a = 0,
        type: r = "keyframes",
        repeat: l = 0,
        repeatDelay: c = 0,
        repeatType: f = "loop",
        keyframes: h,
        name: p,
        motionValue: m,
        element: y,
        ...g
    }) {
        super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
        }, this.createdAt = Te.now();
        const S = {
                autoplay: i,
                delay: a,
                type: r,
                repeat: l,
                repeatDelay: c,
                repeatType: f,
                name: p,
                motionValue: m,
                element: y,
                ...g
            },
            b = y ? .KeyframeResolver || hh;
        this.keyframeResolver = new b(h, (E, _, A) => this.onKeyframesResolved(E, _, S, !A), p, m, y), this.keyframeResolver ? .scheduleResolve()
    }
    onKeyframesResolved(i, a, r, l) {
        this.keyframeResolver = void 0;
        const {
            name: c,
            type: f,
            velocity: h,
            delay: p,
            isHandoff: m,
            onUpdate: y
        } = r;
        this.resolvedAt = Te.now();
        let g = !0;
        t2(i, c, f, h) || (g = !1, (Li.instantAnimations || !p) && y ? .(lu(i, r, a)), i[0] = i[i.length - 1], Md(r), r.repeat = 0);
        const b = {
                startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > r2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: a,
                ...r,
                keyframes: i
            },
            E = g && !m && s2(b),
            _ = b.motionValue ? .owner ? .current;
        let A;
        if (E) try {
            A = new WC({ ...b,
                element: _
            })
        } catch {
            A = new Fl(b)
        } else A = new Fl(b);
        A.finished.then(() => {
            this.notifyFinished()
        }).catch(nn), this.pendingTimeline && (this.stopTimeline = A.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = A
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(i, a) {
        return this.finished.finally(i).then(() => {})
    }
    get animation() {
        return this._animation || (this.keyframeResolver ? .resume(), YC()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(i) {
        this.animation.time = i
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(i) {
        this.animation.speed = i
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(i) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
    }
}

function Bb(e, i, a, r = 0, l = 1) {
    const c = Array.from(e).sort((m, y) => m.sortNodePosition(y)).indexOf(i),
        f = e.size,
        h = (f - 1) * r;
    return typeof a == "function" ? a(c, f) : l === 1 ? c * r : h - c * r
}
const l2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function u2(e) {
    const i = l2.exec(e);
    if (!i) return [, ];
    const [, a, r, l] = i;
    return [`--${a??r}`, l]
}

function Vb(e, i, a = 1) {
    const [r, l] = u2(e);
    if (!r) return;
    const c = window.getComputedStyle(i).getPropertyValue(r);
    if (c) {
        const f = c.trim();
        return $S(f) ? parseFloat(f) : f
    }
    return oh(l) ? Vb(l, i, a + 1) : l
}
const c2 = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    f2 = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    d2 = {
        type: "keyframes",
        duration: .8
    },
    h2 = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    m2 = (e, {
        keyframes: i
    }) => i.length > 2 ? d2 : bs.has(e) ? e.startsWith("scale") ? f2(i[1]) : c2 : h2;

function Ub(e, i) {
    if (e ? .inherit && i) {
        const {
            inherit: a,
            ...r
        } = e;
        return { ...i,
            ...r
        }
    }
    return e
}

function mh(e, i) {
    const a = e ? .[i] ? ? e ? .default ? ? e;
    return a !== e ? Ub(a, e) : a
}
const p2 = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

function y2(e) {
    for (const i in e)
        if (!p2.has(i)) return !0;
    return !1
}
const ph = (e, i, a, r = {}, l, c) => f => {
    const h = mh(r, e) || {},
        p = h.delay || r.delay || 0;
    let {
        elapsed: m = 0
    } = r;
    m = m - Ke(p);
    const y = {
        keyframes: Array.isArray(a) ? a : [null, a],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...h,
        delay: -m,
        onUpdate: S => {
            i.set(S), h.onUpdate && h.onUpdate(S)
        },
        onComplete: () => {
            f(), h.onComplete && h.onComplete()
        },
        name: e,
        motionValue: i,
        element: c ? void 0 : l
    };
    y2(h) || Object.assign(y, m2(e, y)), y.duration && (y.duration = Ke(y.duration)), y.repeatDelay && (y.repeatDelay = Ke(y.repeatDelay)), y.from !== void 0 && (y.keyframes[0] = y.from);
    let g = !1;
    if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (Md(y), y.delay === 0 && (g = !0)), (Li.instantAnimations || Li.skipAnimations || l ? .shouldSkipAnimations) && (g = !0, Md(y), y.delay = 0), y.allowFlatten = !h.type && !h.ease, g && !c && i.get() !== void 0) {
        const S = lu(y.keyframes, h);
        if (S !== void 0) {
            Vt.update(() => {
                y.onUpdate(S), y.onComplete()
            });
            return
        }
    }
    return h.isSync ? new Fl(y) : new o2(y)
};

function Bv(e) {
    const i = [{}, {}];
    return e ? .values.forEach((a, r) => {
        i[0][r] = a.get(), i[1][r] = a.getVelocity()
    }), i
}

function yh(e, i, a, r) {
    if (typeof i == "function") {
        const [l, c] = Bv(r);
        i = i(a !== void 0 ? a : e.custom, l, c)
    }
    if (typeof i == "string" && (i = e.variants && e.variants[i]), typeof i == "function") {
        const [l, c] = Bv(r);
        i = i(a !== void 0 ? a : e.custom, l, c)
    }
    return i
}

function pa(e, i, a) {
    const r = e.getProps();
    return yh(r, i, a !== void 0 ? a : r.custom, e)
}
const Pb = new Set(["width", "height", "top", "left", "right", "bottom", ...Ss]),
    Vv = 30,
    g2 = e => !isNaN(parseFloat(e));
class v2 {
    constructor(i, a = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = r => {
            const l = Te.now();
            if (this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                for (const c of this.dependents) c.dirty()
        }, this.hasAnimated = !1, this.setCurrent(i), this.owner = a.owner
    }
    setCurrent(i) {
        this.current = i, this.updatedAt = Te.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = g2(this.current))
    }
    setPrevFrameValue(i = this.current) {
        this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt
    }
    onChange(i) {
        return this.on("change", i)
    }
    on(i, a) {
        this.events[i] || (this.events[i] = new ah);
        const r = this.events[i].add(a);
        return i === "change" ? () => {
            r(), Vt.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const i in this.events) this.events[i].clear()
    }
    attach(i, a) {
        this.passiveEffect = i, this.stopPassiveEffect = a
    }
    set(i) {
        this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
    }
    setWithVelocity(i, a, r) {
        this.set(a), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(i, a = !0) {
        this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, a && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change ? .notify(this.current)
    }
    addDependent(i) {
        this.dependents || (this.dependents = new Set), this.dependents.add(i)
    }
    removeDependent(i) {
        this.dependents && this.dependents.delete(i)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const i = Te.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Vv) return 0;
        const a = Math.min(this.updatedAt - this.prevUpdatedAt, Vv);
        return ib(parseFloat(this.current) - parseFloat(this.prevFrameValue), a)
    }
    start(i) {
        return this.stop(), new Promise(a => {
            this.hasAnimated = !0, this.animation = i(a), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function gs(e, i) {
    return new v2(e, i)
}
const Cd = e => Array.isArray(e);

function S2(e, i, a) {
    e.hasValue(i) ? e.getValue(i).set(a) : e.addValue(i, gs(a))
}

function b2(e) {
    return Cd(e) ? e[e.length - 1] || 0 : e
}

function x2(e, i) {
    const a = pa(e, i);
    let {
        transitionEnd: r = {},
        transition: l = {},
        ...c
    } = a || {};
    c = { ...c,
        ...r
    };
    for (const f in c) {
        const h = b2(c[f]);
        S2(e, f, h)
    }
}
const ye = e => !!(e && e.getVelocity);

function T2(e) {
    return !!(ye(e) && e.add)
}

function Dd(e, i) {
    const a = e.getValue("willChange");
    if (T2(a)) return a.add(i);
    if (!a && Li.WillChange) {
        const r = new Li.WillChange("auto");
        e.addValue("willChange", r), r.add(i)
    }
}

function gh(e) {
    return e.replace(/([A-Z])/g, i => `-${i.toLowerCase()}`)
}
const E2 = "framerAppearId",
    Hb = "data-" + gh(E2);

function kb(e) {
    return e.props[Hb]
}

function A2({
    protectedKeys: e,
    needsAnimating: i
}, a) {
    const r = e.hasOwnProperty(a) && i[a] !== !0;
    return i[a] = !1, r
}

function qb(e, i, {
    delay: a = 0,
    transitionOverride: r,
    type: l
} = {}) {
    let {
        transition: c,
        transitionEnd: f,
        ...h
    } = i;
    const p = e.getDefaultTransition();
    c = c ? Ub(c, p) : p;
    const m = c ? .reduceMotion;
    r && (c = r);
    const y = [],
        g = l && e.animationState && e.animationState.getState()[l];
    for (const S in h) {
        const b = e.getValue(S, e.latestValues[S] ? ? null),
            E = h[S];
        if (E === void 0 || g && A2(g, S)) continue;
        const _ = {
                delay: a,
                ...mh(c || {}, S)
            },
            A = b.get();
        if (A !== void 0 && !b.isAnimating() && !Array.isArray(E) && E === A && !_.velocity) {
            Vt.update(() => b.set(E));
            continue
        }
        let R = !1;
        if (window.MotionHandoffAnimation) {
            const O = kb(e);
            if (O) {
                const F = window.MotionHandoffAnimation(O, S, Vt);
                F !== null && (_.startTime = F, R = !0)
            }
        }
        Dd(e, S);
        const N = m ? ? e.shouldReduceMotion;
        b.start(ph(S, b, E, N && Pb.has(S) ? {
            type: !1
        } : _, e, R));
        const L = b.animation;
        L && y.push(L)
    }
    if (f) {
        const S = () => Vt.update(() => {
            f && x2(e, f)
        });
        y.length ? Promise.all(y).then(S) : S()
    }
    return y
}

function Od(e, i, a = {}) {
    const r = pa(e, i, a.type === "exit" ? e.presenceContext ? .custom : void 0);
    let {
        transition: l = e.getDefaultTransition() || {}
    } = r || {};
    a.transitionOverride && (l = a.transitionOverride);
    const c = r ? () => Promise.all(qb(e, r, a)) : () => Promise.resolve(),
        f = e.variantChildren && e.variantChildren.size ? (p = 0) => {
            const {
                delayChildren: m = 0,
                staggerChildren: y,
                staggerDirection: g
            } = l;
            return w2(e, i, p, m, y, g, a)
        } : () => Promise.resolve(),
        {
            when: h
        } = l;
    if (h) {
        const [p, m] = h === "beforeChildren" ? [c, f] : [f, c];
        return p().then(() => m())
    } else return Promise.all([c(), f(a.delay)])
}

function w2(e, i, a = 0, r = 0, l = 0, c = 1, f) {
    const h = [];
    for (const p of e.variantChildren) p.notify("AnimationStart", i), h.push(Od(p, i, { ...f,
        delay: a + (typeof r == "function" ? 0 : r) + Bb(e.variantChildren, p, r, l, c)
    }).then(() => p.notify("AnimationComplete", i)));
    return Promise.all(h)
}

function R2(e, i, a = {}) {
    e.notify("AnimationStart", i);
    let r;
    if (Array.isArray(i)) {
        const l = i.map(c => Od(e, c, a));
        r = Promise.all(l)
    } else if (typeof i == "string") r = Od(e, i, a);
    else {
        const l = typeof i == "function" ? pa(e, i, a.custom) : i;
        r = Promise.all(qb(e, l, a))
    }
    return r.then(() => {
        e.notify("AnimationComplete", i)
    })
}
const _2 = {
        test: e => e === "auto",
        parse: e => e
    },
    Kb = e => i => i.test(e),
    Yb = [vs, at, An, Ei, $M, WM, _2],
    Uv = e => Yb.find(Kb(e));

function M2(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || eb(e) : !0
}
const C2 = new Set(["brightness", "contrast", "saturate", "opacity"]);

function D2(e) {
    const [i, a] = e.slice(0, -1).split("(");
    if (i === "drop-shadow") return e;
    const [r] = a.match(lh) || [];
    if (!r) return e;
    const l = a.replace(r, "");
    let c = C2.has(i) ? 1 : 0;
    return r !== a && (c *= 100), i + "(" + c + l + ")"
}
const O2 = /\b([a-z-]*)\(.*?\)/gu,
    Ld = { ...hn,
        getAnimatableNone: e => {
            const i = e.match(O2);
            return i ? i.map(D2).join(" ") : e
        }
    },
    Nd = { ...hn,
        getAnimatableNone: e => {
            const i = hn.parse(e);
            return hn.createTransformer(e)(i.map(r => typeof r == "number" ? 0 : typeof r == "object" ? { ...r,
                alpha: 1
            } : r))
        }
    },
    Pv = { ...vs,
        transform: Math.round
    },
    L2 = {
        rotate: Ei,
        rotateX: Ei,
        rotateY: Ei,
        rotateZ: Ei,
        scale: vl,
        scaleX: vl,
        scaleY: vl,
        scaleZ: vl,
        skew: Ei,
        skewX: Ei,
        skewY: Ei,
        distance: at,
        translateX: at,
        translateY: at,
        translateZ: at,
        x: at,
        y: at,
        z: at,
        perspective: at,
        transformPerspective: at,
        opacity: Hr,
        originX: wv,
        originY: wv,
        originZ: at
    },
    vh = {
        borderWidth: at,
        borderTopWidth: at,
        borderRightWidth: at,
        borderBottomWidth: at,
        borderLeftWidth: at,
        borderRadius: at,
        borderTopLeftRadius: at,
        borderTopRightRadius: at,
        borderBottomRightRadius: at,
        borderBottomLeftRadius: at,
        width: at,
        maxWidth: at,
        height: at,
        maxHeight: at,
        top: at,
        right: at,
        bottom: at,
        left: at,
        inset: at,
        insetBlock: at,
        insetBlockStart: at,
        insetBlockEnd: at,
        insetInline: at,
        insetInlineStart: at,
        insetInlineEnd: at,
        padding: at,
        paddingTop: at,
        paddingRight: at,
        paddingBottom: at,
        paddingLeft: at,
        paddingBlock: at,
        paddingBlockStart: at,
        paddingBlockEnd: at,
        paddingInline: at,
        paddingInlineStart: at,
        paddingInlineEnd: at,
        margin: at,
        marginTop: at,
        marginRight: at,
        marginBottom: at,
        marginLeft: at,
        marginBlock: at,
        marginBlockStart: at,
        marginBlockEnd: at,
        marginInline: at,
        marginInlineStart: at,
        marginInlineEnd: at,
        fontSize: at,
        backgroundPositionX: at,
        backgroundPositionY: at,
        ...L2,
        zIndex: Pv,
        fillOpacity: Hr,
        strokeOpacity: Hr,
        numOctaves: Pv
    },
    N2 = { ...vh,
        color: ee,
        backgroundColor: ee,
        outlineColor: ee,
        fill: ee,
        stroke: ee,
        borderColor: ee,
        borderTopColor: ee,
        borderRightColor: ee,
        borderBottomColor: ee,
        borderLeftColor: ee,
        filter: Ld,
        WebkitFilter: Ld,
        mask: Nd,
        WebkitMask: Nd
    },
    Gb = e => N2[e],
    z2 = new Set([Ld, Nd]);

function Xb(e, i) {
    let a = Gb(e);
    return z2.has(a) || (a = hn), a.getAnimatableNone ? a.getAnimatableNone(i) : void 0
}
const j2 = new Set(["auto", "none", "0"]);

function B2(e, i, a) {
    let r = 0,
        l;
    for (; r < e.length && !l;) {
        const c = e[r];
        typeof c == "string" && !j2.has(c) && ys(c).values.length && (l = e[r]), r++
    }
    if (l && a)
        for (const c of i) e[c] = Xb(a, l)
}
class V2 extends hh {
    constructor(i, a, r, l, c) {
        super(i, a, r, l, c, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: i,
            element: a,
            name: r
        } = this;
        if (!a || !a.current) return;
        super.readKeyframes();
        for (let y = 0; y < i.length; y++) {
            let g = i[y];
            if (typeof g == "string" && (g = g.trim(), oh(g))) {
                const S = Vb(g, a.current);
                S !== void 0 && (i[y] = S), y === i.length - 1 && (this.finalKeyframe = g)
            }
        }
        if (this.resolveNoneKeyframes(), !Pb.has(r) || i.length !== 2) return;
        const [l, c] = i, f = Uv(l), h = Uv(c), p = Av(l), m = Av(c);
        if (p !== m && Ci[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (f !== h)
            if (Nv(f) && Nv(h))
                for (let y = 0; y < i.length; y++) {
                    const g = i[y];
                    typeof g == "string" && (i[y] = parseFloat(g))
                } else Ci[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: i,
            name: a
        } = this, r = [];
        for (let l = 0; l < i.length; l++)(i[l] === null || M2(i[l])) && r.push(l);
        r.length && B2(i, r, a)
    }
    measureInitialState() {
        const {
            element: i,
            unresolvedKeyframes: a,
            name: r
        } = this;
        if (!i || !i.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ci[r](i.measureViewportBox(), window.getComputedStyle(i.current)), a[0] = this.measuredOrigin;
        const l = a[a.length - 1];
        l !== void 0 && i.getValue(r, l).jump(l, !1)
    }
    measureEndState() {
        const {
            element: i,
            name: a,
            unresolvedKeyframes: r
        } = this;
        if (!i || !i.current) return;
        const l = i.getValue(a);
        l && l.jump(this.measuredOrigin, !1);
        const c = r.length - 1,
            f = r[c];
        r[c] = Ci[a](i.measureViewportBox(), window.getComputedStyle(i.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms ? .length && this.removedTransforms.forEach(([h, p]) => {
            i.getValue(h).set(p)
        }), this.resolveNoneKeyframes()
    }
}

function Fb(e, i, a) {
    if (e == null) return [];
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
        let r = document;
        const l = a ? .[e] ? ? r.querySelectorAll(e);
        return l ? Array.from(l) : []
    }
    return Array.from(e).filter(r => r != null)
}
const Qb = (e, i) => i && typeof e == "number" ? i.transform(e) : e;

function Ml(e) {
    return tb(e) && "offsetHeight" in e && !("ownerSVGElement" in e)
}
const {
    schedule: Sh
} = mb(queueMicrotask, !1), dn = {
    x: !1,
    y: !1
};

function Zb() {
    return dn.x || dn.y
}

function U2(e) {
    return e === "x" || e === "y" ? dn[e] ? null : (dn[e] = !0, () => {
        dn[e] = !1
    }) : dn.x || dn.y ? null : (dn.x = dn.y = !0, () => {
        dn.x = dn.y = !1
    })
}

function Ib(e, i) {
    const a = Fb(e),
        r = new AbortController,
        l = {
            passive: !0,
            ...i,
            signal: r.signal
        };
    return [a, l, () => r.abort()]
}

function P2(e) {
    return !(e.pointerType === "touch" || Zb())
}

function H2(e, i, a = {}) {
    const [r, l, c] = Ib(e, a);
    return r.forEach(f => {
        let h = !1,
            p = !1,
            m;
        const y = () => {
                f.removeEventListener("pointerleave", E)
            },
            g = A => {
                m && (m(A), m = void 0), y()
            },
            S = A => {
                h = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), p && (p = !1, g(A))
            },
            b = () => {
                h = !0, window.addEventListener("pointerup", S, l), window.addEventListener("pointercancel", S, l)
            },
            E = A => {
                if (A.pointerType !== "touch") {
                    if (h) {
                        p = !0;
                        return
                    }
                    g(A)
                }
            },
            _ = A => {
                if (!P2(A)) return;
                p = !1;
                const R = i(f, A);
                typeof R == "function" && (m = R, f.addEventListener("pointerleave", E, l))
            };
        f.addEventListener("pointerenter", _, l), f.addEventListener("pointerdown", b, l)
    }), c
}
const Jb = (e, i) => i ? e === i ? !0 : Jb(e, i.parentElement) : !1,
    bh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    k2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function q2(e) {
    return k2.has(e.tagName) || e.isContentEditable === !0
}
const K2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function Y2(e) {
    return K2.has(e.tagName) || e.isContentEditable === !0
}
const Cl = new WeakSet;

function Hv(e) {
    return i => {
        i.key === "Enter" && e(i)
    }
}

function Wf(e, i) {
    e.dispatchEvent(new PointerEvent("pointer" + i, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const G2 = (e, i) => {
    const a = e.currentTarget;
    if (!a) return;
    const r = Hv(() => {
        if (Cl.has(a)) return;
        Wf(a, "down");
        const l = Hv(() => {
                Wf(a, "up")
            }),
            c = () => Wf(a, "cancel");
        a.addEventListener("keyup", l, i), a.addEventListener("blur", c, i)
    });
    a.addEventListener("keydown", r, i), a.addEventListener("blur", () => a.removeEventListener("keydown", r), i)
};

function kv(e) {
    return bh(e) && !Zb()
}
const qv = new WeakSet;

function X2(e, i, a = {}) {
    const [r, l, c] = Ib(e, a), f = h => {
        const p = h.currentTarget;
        if (!kv(h) || qv.has(h)) return;
        Cl.add(p), a.stopPropagation && qv.add(h);
        const m = i(p, h),
            y = (b, E) => {
                window.removeEventListener("pointerup", g), window.removeEventListener("pointercancel", S), Cl.has(p) && Cl.delete(p), kv(b) && typeof m == "function" && m(b, {
                    success: E
                })
            },
            g = b => {
                y(b, p === window || p === document || a.useGlobalTarget || Jb(p, b.target))
            },
            S = b => {
                y(b, !1)
            };
        window.addEventListener("pointerup", g, l), window.addEventListener("pointercancel", S, l)
    };
    return r.forEach(h => {
        (a.useGlobalTarget ? window : h).addEventListener("pointerdown", f, l), Ml(h) && (h.addEventListener("focus", m => G2(m, l)), !q2(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0))
    }), c
}

function xh(e) {
    return tb(e) && "ownerSVGElement" in e
}
const Dl = new WeakMap;
let Ol;
const Wb = (e, i, a) => (r, l) => l && l[0] ? l[0][e + "Size"] : xh(r) && "getBBox" in r ? r.getBBox()[i] : r[a],
    F2 = Wb("inline", "width", "offsetWidth"),
    Q2 = Wb("block", "height", "offsetHeight");

function Z2({
    target: e,
    borderBoxSize: i
}) {
    Dl.get(e) ? .forEach(a => {
        a(e, {
            get width() {
                return F2(e, i)
            },
            get height() {
                return Q2(e, i)
            }
        })
    })
}

function I2(e) {
    e.forEach(Z2)
}

function J2() {
    typeof ResizeObserver > "u" || (Ol = new ResizeObserver(I2))
}

function W2(e, i) {
    Ol || J2();
    const a = Fb(e);
    return a.forEach(r => {
        let l = Dl.get(r);
        l || (l = new Set, Dl.set(r, l)), l.add(i), Ol ? .observe(r)
    }), () => {
        a.forEach(r => {
            const l = Dl.get(r);
            l ? .delete(i), l ? .size || Ol ? .unobserve(r)
        })
    }
}
const Ll = new Set;
let cs;

function $2() {
    cs = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Ll.forEach(i => i(e))
    }, window.addEventListener("resize", cs)
}

function tD(e) {
    return Ll.add(e), cs || $2(), () => {
        Ll.delete(e), !Ll.size && typeof cs == "function" && (window.removeEventListener("resize", cs), cs = void 0)
    }
}

function Kv(e, i) {
    return typeof e == "function" ? tD(e) : W2(e, i)
}

function eD(e) {
    return xh(e) && e.tagName === "svg"
}
const nD = [...Yb, ee, hn],
    iD = e => nD.find(Kb(e)),
    Yv = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    fs = () => ({
        x: Yv(),
        y: Yv()
    }),
    Gv = () => ({
        min: 0,
        max: 0
    }),
    ie = () => ({
        x: Gv(),
        y: Gv()
    }),
    aD = new WeakMap;

function uu(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function kr(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Th = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Eh = ["initial", ...Th];

function cu(e) {
    return uu(e.animate) || Eh.some(i => kr(e[i]))
}

function $b(e) {
    return !!(cu(e) || e.variants)
}

function sD(e, i, a) {
    for (const r in i) {
        const l = i[r],
            c = a[r];
        if (ye(l)) e.addValue(r, l);
        else if (ye(c)) e.addValue(r, gs(l, {
            owner: e
        }));
        else if (c !== l)
            if (e.hasValue(r)) {
                const f = e.getValue(r);
                f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l)
            } else {
                const f = e.getStaticValue(r);
                e.addValue(r, gs(f !== void 0 ? f : l, {
                    owner: e
                }))
            }
    }
    for (const r in a) i[r] === void 0 && e.removeValue(r);
    return i
}
const zd = {
        current: null
    },
    t1 = {
        current: !1
    },
    rD = typeof window < "u";

function oD() {
    if (t1.current = !0, !!rD)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                i = () => zd.current = e.matches;
            e.addEventListener("change", i), i()
        } else zd.current = !1
}
const Xv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Ql = {};

function e1(e) {
    Ql = e
}

function lD() {
    return Ql
}
class uD {
    scrapeMotionValuesFromProps(i, a, r) {
        return {}
    }
    constructor({
        parent: i,
        props: a,
        presenceContext: r,
        reducedMotionConfig: l,
        skipAnimations: c,
        blockInitialAnimation: f,
        visualState: h
    }, p = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = hh, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const b = Te.now();
            this.renderScheduledAt < b && (this.renderScheduledAt = b, Vt.render(this.render, !1, !0))
        };
        const {
            latestValues: m,
            renderState: y
        } = h;
        this.latestValues = m, this.baseTarget = { ...m
        }, this.initialValues = a.initial ? { ...m
        } : {}, this.renderState = y, this.parent = i, this.props = a, this.presenceContext = r, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = l, this.skipAnimationsConfig = c, this.options = p, this.blockInitialAnimation = !!f, this.isControllingVariants = cu(a), this.isVariantNode = $b(a), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(i && i.current);
        const {
            willChange: g,
            ...S
        } = this.scrapeMotionValuesFromProps(a, {}, this);
        for (const b in S) {
            const E = S[b];
            m[b] !== void 0 && ye(E) && E.set(m[b])
        }
    }
    mount(i) {
        if (this.hasBeenMounted)
            for (const a in this.initialValues) this.values.get(a) ? .jump(this.initialValues[a]), this.latestValues[a] = this.initialValues[a];
        this.current = i, aD.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((a, r) => this.bindToMotionValue(r, a)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (t1.current || oD(), this.shouldReduceMotion = zd.current), this.shouldSkipAnimations = this.skipAnimationsConfig ? ? !1, this.parent ? .addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
    }
    unmount() {
        this.projection && this.projection.unmount(), Ni(this.notifyUpdate), Ni(this.render), this.valueSubscriptions.forEach(i => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ? .removeChild(this);
        for (const i in this.events) this.events[i].clear();
        for (const i in this.features) {
            const a = this.features[i];
            a && (a.unmount(), a.isMounted = !1)
        }
        this.current = null
    }
    addChild(i) {
        this.children.add(i), this.enteringChildren ? ? (this.enteringChildren = new Set), this.enteringChildren.add(i)
    }
    removeChild(i) {
        this.children.delete(i), this.enteringChildren && this.enteringChildren.delete(i)
    }
    bindToMotionValue(i, a) {
        if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(), a.accelerate && jb.has(i) && this.current instanceof HTMLElement) {
            const {
                factory: f,
                keyframes: h,
                times: p,
                ease: m,
                duration: y
            } = a.accelerate, g = new Nb({
                element: this.current,
                name: i,
                keyframes: h,
                times: p,
                ease: m,
                duration: Ke(y)
            }), S = f(g);
            this.valueSubscriptions.set(i, () => {
                S(), g.cancel()
            });
            return
        }
        const r = bs.has(i);
        r && this.onBindTransform && this.onBindTransform();
        const l = a.on("change", f => {
            this.latestValues[i] = f, this.props.onUpdate && Vt.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let c;
        typeof window < "u" && window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, i, a)), this.valueSubscriptions.set(i, () => {
            l(), c && c(), a.owner && a.stop()
        })
    }
    sortNodePosition(i) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
    }
    updateFeatures() {
        let i = "animation";
        for (i in Ql) {
            const a = Ql[i];
            if (!a) continue;
            const {
                isEnabled: r,
                Feature: l
            } = a;
            if (!this.features[i] && l && r(this.props) && (this.features[i] = new l(this)), this.features[i]) {
                const c = this.features[i];
                c.isMounted ? c.update() : (c.mount(), c.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ie()
    }
    getStaticValue(i) {
        return this.latestValues[i]
    }
    setStaticValue(i, a) {
        this.latestValues[i] = a
    }
    update(i, a) {
        (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = a;
        for (let r = 0; r < Xv.length; r++) {
            const l = Xv[r];
            this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
            const c = "on" + l,
                f = i[c];
            f && (this.propEventSubscriptions[l] = this.on(l, f))
        }
        this.prevMotionValues = sD(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(i) {
        return this.props.variants ? this.props.variants[i] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(i) {
        const a = this.getClosestVariantNode();
        if (a) return a.variantChildren && a.variantChildren.add(i), () => a.variantChildren.delete(i)
    }
    addValue(i, a) {
        const r = this.values.get(i);
        a !== r && (r && this.removeValue(i), this.bindToMotionValue(i, a), this.values.set(i, a), this.latestValues[i] = a.get())
    }
    removeValue(i) {
        this.values.delete(i);
        const a = this.valueSubscriptions.get(i);
        a && (a(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState)
    }
    hasValue(i) {
        return this.values.has(i)
    }
    getValue(i, a) {
        if (this.props.values && this.props.values[i]) return this.props.values[i];
        let r = this.values.get(i);
        return r === void 0 && a !== void 0 && (r = gs(a === null ? void 0 : a, {
            owner: this
        }), this.addValue(i, r)), r
    }
    readValue(i, a) {
        let r = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ? ? this.readValueFromInstance(this.current, i, this.options);
        return r != null && (typeof r == "string" && ($S(r) || eb(r)) ? r = parseFloat(r) : !iD(r) && hn.test(a) && (r = Xb(i, a)), this.setBaseTarget(i, ye(r) ? r.get() : r)), ye(r) ? r.get() : r
    }
    setBaseTarget(i, a) {
        this.baseTarget[i] = a
    }
    getBaseTarget(i) {
        const {
            initial: a
        } = this.props;
        let r;
        if (typeof a == "string" || typeof a == "object") {
            const c = yh(this.props, a, this.presenceContext ? .custom);
            c && (r = c[i])
        }
        if (a && r !== void 0) return r;
        const l = this.getBaseTargetFromProps(this.props, i);
        return l !== void 0 && !ye(l) ? l : this.initialValues[i] !== void 0 && r === void 0 ? void 0 : this.baseTarget[i]
    }
    on(i, a) {
        return this.events[i] || (this.events[i] = new ah), this.events[i].add(a)
    }
    notify(i, ...a) {
        this.events[i] && this.events[i].notify(...a)
    }
    scheduleRenderMicrotask() {
        Sh.render(this.render)
    }
}
class n1 extends uD {
    constructor() {
        super(...arguments), this.KeyframeResolver = V2
    }
    sortInstanceNodePosition(i, a) {
        return i.compareDocumentPosition(a) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(i, a) {
        const r = i.style;
        return r ? r[a] : void 0
    }
    removeValueFromRenderState(i, {
        vars: a,
        style: r
    }) {
        delete a[i], delete r[i]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: i
        } = this.props;
        ye(i) && (this.childSubscription = i.on("change", a => {
            this.current && (this.current.textContent = `${a}`)
        }))
    }
}
class Ui {
    constructor(i) {
        this.isMounted = !1, this.node = i
    }
    update() {}
}

function i1({
    top: e,
    left: i,
    right: a,
    bottom: r
}) {
    return {
        x: {
            min: i,
            max: a
        },
        y: {
            min: e,
            max: r
        }
    }
}

function cD({
    x: e,
    y: i
}) {
    return {
        top: i.min,
        right: e.max,
        bottom: i.max,
        left: e.min
    }
}

function fD(e, i) {
    if (!i) return e;
    const a = i({
            x: e.left,
            y: e.top
        }),
        r = i({
            x: e.right,
            y: e.bottom
        });
    return {
        top: a.y,
        left: a.x,
        bottom: r.y,
        right: r.x
    }
}

function $f(e) {
    return e === void 0 || e === 1
}

function jd({
    scale: e,
    scaleX: i,
    scaleY: a
}) {
    return !$f(e) || !$f(i) || !$f(a)
}

function ra(e) {
    return jd(e) || a1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function a1(e) {
    return Fv(e.x) || Fv(e.y)
}

function Fv(e) {
    return e && e !== "0%"
}

function Zl(e, i, a) {
    const r = e - a,
        l = i * r;
    return a + l
}

function Qv(e, i, a, r, l) {
    return l !== void 0 && (e = Zl(e, l, r)), Zl(e, a, r) + i
}

function Bd(e, i = 0, a = 1, r, l) {
    e.min = Qv(e.min, i, a, r, l), e.max = Qv(e.max, i, a, r, l)
}

function s1(e, {
    x: i,
    y: a
}) {
    Bd(e.x, i.translate, i.scale, i.originPoint), Bd(e.y, a.translate, a.scale, a.originPoint)
}
const Zv = .999999999999,
    Iv = 1.0000000000001;

function dD(e, i, a, r = !1) {
    const l = a.length;
    if (!l) return;
    i.x = i.y = 1;
    let c, f;
    for (let h = 0; h < l; h++) {
        c = a[h], f = c.projectionDelta;
        const {
            visualElement: p
        } = c.options;
        p && p.props.style && p.props.style.display === "contents" || (r && c.options.layoutScroll && c.scroll && c !== c.root && (En(e.x, -c.scroll.offset.x), En(e.y, -c.scroll.offset.y)), f && (i.x *= f.x.scale, i.y *= f.y.scale, s1(e, f)), r && ra(c.latestValues) && Nl(e, c.latestValues, c.layout ? .layoutBox))
    }
    i.x < Iv && i.x > Zv && (i.x = 1), i.y < Iv && i.y > Zv && (i.y = 1)
}

function En(e, i) {
    e.min += i, e.max += i
}

function Jv(e, i, a, r, l = .5) {
    const c = kt(e.min, e.max, l);
    Bd(e, i, a, c, r)
}

function Wv(e, i) {
    return typeof e == "string" ? parseFloat(e) / 100 * (i.max - i.min) : e
}

function Nl(e, i, a) {
    const r = a ? ? e;
    Jv(e.x, Wv(i.x, r.x), i.scaleX, i.scale, i.originX), Jv(e.y, Wv(i.y, r.y), i.scaleY, i.scale, i.originY)
}

function r1(e, i) {
    return i1(fD(e.getBoundingClientRect(), i))
}

function hD(e, i, a) {
    const r = r1(e, a),
        {
            scroll: l
        } = i;
    return l && (En(r.x, l.offset.x), En(r.y, l.offset.y)), r
}
const mD = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    pD = Ss.length;

function yD(e, i, a) {
    let r = "",
        l = !0;
    for (let c = 0; c < pD; c++) {
        const f = Ss[c],
            h = e[f];
        if (h === void 0) continue;
        let p = !0;
        if (typeof h == "number") p = h === (f.startsWith("scale") ? 1 : 0);
        else {
            const m = parseFloat(h);
            p = f.startsWith("scale") ? m === 1 : m === 0
        }
        if (!p || a) {
            const m = Qb(h, vh[f]);
            if (!p) {
                l = !1;
                const y = mD[f] || f;
                r += `${y}(${m}) `
            }
            a && (i[f] = m)
        }
    }
    return r = r.trim(), a ? r = a(i, l ? "" : r) : l && (r = "none"), r
}

function Ah(e, i, a) {
    const {
        style: r,
        vars: l,
        transformOrigin: c
    } = e;
    let f = !1,
        h = !1;
    for (const p in i) {
        const m = i[p];
        if (bs.has(p)) {
            f = !0;
            continue
        } else if (yb(p)) {
            l[p] = m;
            continue
        } else {
            const y = Qb(m, vh[p]);
            p.startsWith("origin") ? (h = !0, c[p] = y) : r[p] = y
        }
    }
    if (i.transform || (f || a ? r.transform = yD(i, e.transform, a) : r.transform && (r.transform = "none")), h) {
        const {
            originX: p = "50%",
            originY: m = "50%",
            originZ: y = 0
        } = c;
        r.transformOrigin = `${p} ${m} ${y}`
    }
}

function o1(e, {
    style: i,
    vars: a
}, r, l) {
    const c = e.style;
    let f;
    for (f in i) c[f] = i[f];
    l ? .applyProjectionStyles(c, r);
    for (f in a) c.setProperty(f, a[f])
}

function $v(e, i) {
    return i.max === i.min ? 0 : e / (i.max - i.min) * 100
}
const Rr = {
        correct: (e, i) => {
            if (!i.target) return e;
            if (typeof e == "string")
                if (at.test(e)) e = parseFloat(e);
                else return e;
            const a = $v(e, i.target.x),
                r = $v(e, i.target.y);
            return `${a}% ${r}%`
        }
    },
    gD = {
        correct: (e, {
            treeScale: i,
            projectionDelta: a
        }) => {
            const r = e,
                l = hn.parse(e);
            if (l.length > 5) return r;
            const c = hn.createTransformer(e),
                f = typeof l[0] != "number" ? 1 : 0,
                h = a.x.scale * i.x,
                p = a.y.scale * i.y;
            l[0 + f] /= h, l[1 + f] /= p;
            const m = kt(h, p, .5);
            return typeof l[2 + f] == "number" && (l[2 + f] /= m), typeof l[3 + f] == "number" && (l[3 + f] /= m), c(l)
        }
    },
    Vd = {
        borderRadius: { ...Rr,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Rr,
        borderTopRightRadius: Rr,
        borderBottomLeftRadius: Rr,
        borderBottomRightRadius: Rr,
        boxShadow: gD
    };

function l1(e, {
    layout: i,
    layoutId: a
}) {
    return bs.has(e) || e.startsWith("origin") || (i || a !== void 0) && (!!Vd[e] || e === "opacity")
}

function wh(e, i, a) {
    const r = e.style,
        l = i ? .style,
        c = {};
    if (!r) return c;
    for (const f in r)(ye(r[f]) || l && ye(l[f]) || l1(f, e) || a ? .getValue(f) ? .liveStyle !== void 0) && (c[f] = r[f]);
    return c
}

function vD(e) {
    return window.getComputedStyle(e)
}
class SD extends n1 {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = o1
    }
    readValueFromInstance(i, a) {
        if (bs.has(a)) return this.projection ? .isProjecting ? Ed(a) : PC(i, a); {
            const r = vD(i),
                l = (yb(a) ? r.getPropertyValue(a) : r[a]) || 0;
            return typeof l == "string" ? l.trim() : l
        }
    }
    measureInstanceViewportBox(i, {
        transformPagePoint: a
    }) {
        return r1(i, a)
    }
    build(i, a, r) {
        Ah(i, a, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(i, a, r) {
        return wh(i, a, r)
    }
}
const bD = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    xD = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function TD(e, i, a = 1, r = 0, l = !0) {
    e.pathLength = 1;
    const c = l ? bD : xD;
    e[c.offset] = `${-r}`, e[c.array] = `${i} ${a}`
}
const ED = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function u1(e, {
    attrX: i,
    attrY: a,
    attrScale: r,
    pathLength: l,
    pathSpacing: c = 1,
    pathOffset: f = 0,
    ...h
}, p, m, y) {
    if (Ah(e, h, m), p) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: g,
        style: S
    } = e;
    g.transform && (S.transform = g.transform, delete g.transform), (S.transform || g.transformOrigin) && (S.transformOrigin = g.transformOrigin ? ? "50% 50%", delete g.transformOrigin), S.transform && (S.transformBox = y ? .transformBox ? ? "fill-box", delete g.transformBox);
    for (const b of ED) g[b] !== void 0 && (S[b] = g[b], delete g[b]);
    i !== void 0 && (g.x = i), a !== void 0 && (g.y = a), r !== void 0 && (g.scale = r), l !== void 0 && TD(g, l, c, f, !1)
}
const c1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
    f1 = e => typeof e == "string" && e.toLowerCase() === "svg";

function AD(e, i, a, r) {
    o1(e, i, void 0, r);
    for (const l in i.attrs) e.setAttribute(c1.has(l) ? l : gh(l), i.attrs[l])
}

function d1(e, i, a) {
    const r = wh(e, i, a);
    for (const l in e)
        if (ye(e[l]) || ye(i[l])) {
            const c = Ss.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
            r[c] = e[l]
        }
    return r
}
class wD extends n1 {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ie
    }
    getBaseTargetFromProps(i, a) {
        return i[a]
    }
    readValueFromInstance(i, a) {
        if (bs.has(a)) {
            const r = Gb(a);
            return r && r.default || 0
        }
        return a = c1.has(a) ? a : gh(a), i.getAttribute(a)
    }
    scrapeMotionValuesFromProps(i, a, r) {
        return d1(i, a, r)
    }
    build(i, a, r) {
        u1(i, a, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(i, a, r, l) {
        AD(i, a, r, l)
    }
    mount(i) {
        this.isSVGTag = f1(i.tagName), super.mount(i)
    }
}
const RD = Eh.length;

function h1(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const a = e.parent ? h1(e.parent) || {} : {};
        return e.props.initial !== void 0 && (a.initial = e.props.initial), a
    }
    const i = {};
    for (let a = 0; a < RD; a++) {
        const r = Eh[a],
            l = e.props[r];
        (kr(l) || l === !1) && (i[r] = l)
    }
    return i
}

function m1(e, i) {
    if (!Array.isArray(i)) return !1;
    const a = i.length;
    if (a !== e.length) return !1;
    for (let r = 0; r < a; r++)
        if (i[r] !== e[r]) return !1;
    return !0
}
const _D = [...Th].reverse(),
    MD = Th.length;

function CD(e) {
    return i => Promise.all(i.map(({
        animation: a,
        options: r
    }) => R2(e, a, r)))
}

function DD(e) {
    let i = CD(e),
        a = t0(),
        r = !0,
        l = !1;
    const c = m => (y, g) => {
        const S = pa(e, g, m === "exit" ? e.presenceContext ? .custom : void 0);
        if (S) {
            const {
                transition: b,
                transitionEnd: E,
                ..._
            } = S;
            y = { ...y,
                ..._,
                ...E
            }
        }
        return y
    };

    function f(m) {
        i = m(e)
    }

    function h(m) {
        const {
            props: y
        } = e, g = h1(e.parent) || {}, S = [], b = new Set;
        let E = {},
            _ = 1 / 0;
        for (let R = 0; R < MD; R++) {
            const N = _D[R],
                L = a[N],
                O = y[N] !== void 0 ? y[N] : g[N],
                F = kr(O),
                J = N === m ? L.isActive : null;
            J === !1 && (_ = R);
            let q = O === g[N] && O !== y[N] && F;
            if (q && (r || l) && e.manuallyAnimateOnMount && (q = !1), L.protectedKeys = { ...E
                }, !L.isActive && J === null || !O && !L.prevProp || uu(O) || typeof O == "boolean") continue;
            if (N === "exit" && L.isActive && J !== !0) {
                L.prevResolvedValues && (E = { ...E,
                    ...L.prevResolvedValues
                });
                continue
            }
            const K = OD(L.prevProp, O);
            let Z = K || N === m && L.isActive && !q && F || R > _ && F,
                I = !1;
            const $ = Array.isArray(O) ? O : [O];
            let ot = $.reduce(c(N), {});
            J === !1 && (ot = {});
            const {
                prevResolvedValues: ct = {}
            } = L, Et = { ...ct,
                ...ot
            }, yt = et => {
                Z = !0, b.has(et) && (I = !0, b.delete(et)), L.needsAnimating[et] = !0;
                const ft = e.getValue(et);
                ft && (ft.liveStyle = !1)
            };
            for (const et in Et) {
                const ft = ot[et],
                    gt = ct[et];
                if (E.hasOwnProperty(et)) continue;
                let C = !1;
                Cd(ft) && Cd(gt) ? C = !m1(ft, gt) : C = ft !== gt, C ? ft != null ? yt(et) : b.add(et) : ft !== void 0 && b.has(et) ? yt(et) : L.protectedKeys[et] = !0
            }
            L.prevProp = O, L.prevResolvedValues = ot, L.isActive && (E = { ...E,
                ...ot
            }), (r || l) && e.blockInitialAnimation && (Z = !1);
            const P = q && K;
            Z && (!P || I) && S.push(...$.map(et => {
                const ft = {
                    type: N
                };
                if (typeof et == "string" && (r || l) && !P && e.manuallyAnimateOnMount && e.parent) {
                    const {
                        parent: gt
                    } = e, C = pa(gt, et);
                    if (gt.enteringChildren && C) {
                        const {
                            delayChildren: X
                        } = C.transition || {};
                        ft.delay = Bb(gt.enteringChildren, e, X)
                    }
                }
                return {
                    animation: et,
                    options: ft
                }
            }))
        }
        if (b.size) {
            const R = {};
            if (typeof y.initial != "boolean") {
                const N = pa(e, Array.isArray(y.initial) ? y.initial[0] : y.initial);
                N && N.transition && (R.transition = N.transition)
            }
            b.forEach(N => {
                const L = e.getBaseTarget(N),
                    O = e.getValue(N);
                O && (O.liveStyle = !0), R[N] = L ? ? null
            }), S.push({
                animation: R
            })
        }
        let A = !!S.length;
        return r && (y.initial === !1 || y.initial === y.animate) && !e.manuallyAnimateOnMount && (A = !1), r = !1, l = !1, A ? i(S) : Promise.resolve()
    }

    function p(m, y) {
        if (a[m].isActive === y) return Promise.resolve();
        e.variantChildren ? .forEach(S => S.animationState ? .setActive(m, y)), a[m].isActive = y;
        const g = h(m);
        for (const S in a) a[S].protectedKeys = {};
        return g
    }
    return {
        animateChanges: h,
        setActive: p,
        setAnimateFunction: f,
        getState: () => a,
        reset: () => {
            a = t0(), l = !0
        }
    }
}

function OD(e, i) {
    return typeof i == "string" ? i !== e : Array.isArray(i) ? !m1(i, e) : !1
}

function sa(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function t0() {
    return {
        animate: sa(!0),
        whileInView: sa(),
        whileHover: sa(),
        whileTap: sa(),
        whileDrag: sa(),
        whileFocus: sa(),
        exit: sa()
    }
}

function Ud(e, i) {
    e.min = i.min, e.max = i.max
}

function fn(e, i) {
    Ud(e.x, i.x), Ud(e.y, i.y)
}

function e0(e, i) {
    e.translate = i.translate, e.scale = i.scale, e.originPoint = i.originPoint, e.origin = i.origin
}
const p1 = 1e-4,
    LD = 1 - p1,
    ND = 1 + p1,
    y1 = .01,
    zD = 0 - y1,
    jD = 0 + y1;

function Ee(e) {
    return e.max - e.min
}

function BD(e, i, a) {
    return Math.abs(e - i) <= a
}

function n0(e, i, a, r = .5) {
    e.origin = r, e.originPoint = kt(i.min, i.max, e.origin), e.scale = Ee(a) / Ee(i), e.translate = kt(a.min, a.max, e.origin) - e.originPoint, (e.scale >= LD && e.scale <= ND || isNaN(e.scale)) && (e.scale = 1), (e.translate >= zD && e.translate <= jD || isNaN(e.translate)) && (e.translate = 0)
}

function Or(e, i, a, r) {
    n0(e.x, i.x, a.x, r ? r.originX : void 0), n0(e.y, i.y, a.y, r ? r.originY : void 0)
}

function i0(e, i, a, r = 0) {
    const l = r ? kt(a.min, a.max, r) : a.min;
    e.min = l + i.min, e.max = e.min + Ee(i)
}

function VD(e, i, a, r) {
    i0(e.x, i.x, a.x, r ? .x), i0(e.y, i.y, a.y, r ? .y)
}

function a0(e, i, a, r = 0) {
    const l = r ? kt(a.min, a.max, r) : a.min;
    e.min = i.min - l, e.max = e.min + Ee(i)
}

function Il(e, i, a, r) {
    a0(e.x, i.x, a.x, r ? .x), a0(e.y, i.y, a.y, r ? .y)
}

function s0(e, i, a, r, l) {
    return e -= i, e = Zl(e, 1 / a, r), l !== void 0 && (e = Zl(e, 1 / l, r)), e
}

function UD(e, i = 0, a = 1, r = .5, l, c = e, f = e) {
    if (An.test(i) && (i = parseFloat(i), i = kt(f.min, f.max, i / 100) - f.min), typeof i != "number") return;
    let h = kt(c.min, c.max, r);
    e === c && (h -= i), e.min = s0(e.min, i, a, h, l), e.max = s0(e.max, i, a, h, l)
}

function r0(e, i, [a, r, l], c, f) {
    UD(e, i[a], i[r], i[l], i.scale, c, f)
}
const PD = ["x", "scaleX", "originX"],
    HD = ["y", "scaleY", "originY"];

function o0(e, i, a, r) {
    r0(e.x, i, PD, a ? a.x : void 0, r ? r.x : void 0), r0(e.y, i, HD, a ? a.y : void 0, r ? r.y : void 0)
}

function l0(e) {
    return e.translate === 0 && e.scale === 1
}

function g1(e) {
    return l0(e.x) && l0(e.y)
}

function u0(e, i) {
    return e.min === i.min && e.max === i.max
}

function kD(e, i) {
    return u0(e.x, i.x) && u0(e.y, i.y)
}

function c0(e, i) {
    return Math.round(e.min) === Math.round(i.min) && Math.round(e.max) === Math.round(i.max)
}

function v1(e, i) {
    return c0(e.x, i.x) && c0(e.y, i.y)
}

function f0(e) {
    return Ee(e.x) / Ee(e.y)
}

function d0(e, i) {
    return e.translate === i.translate && e.scale === i.scale && e.originPoint === i.originPoint
}

function bn(e) {
    return [e("x"), e("y")]
}

function qD(e, i, a) {
    let r = "";
    const l = e.x.translate / i.x,
        c = e.y.translate / i.y,
        f = a ? .z || 0;
    if ((l || c || f) && (r = `translate3d(${l}px, ${c}px, ${f}px) `), (i.x !== 1 || i.y !== 1) && (r += `scale(${1/i.x}, ${1/i.y}) `), a) {
        const {
            transformPerspective: m,
            rotate: y,
            rotateX: g,
            rotateY: S,
            skewX: b,
            skewY: E
        } = a;
        m && (r = `perspective(${m}px) ${r}`), y && (r += `rotate(${y}deg) `), g && (r += `rotateX(${g}deg) `), S && (r += `rotateY(${S}deg) `), b && (r += `skewX(${b}deg) `), E && (r += `skewY(${E}deg) `)
    }
    const h = e.x.scale * i.x,
        p = e.y.scale * i.y;
    return (h !== 1 || p !== 1) && (r += `scale(${h}, ${p})`), r || "none"
}
const S1 = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
    KD = S1.length,
    h0 = e => typeof e == "string" ? parseFloat(e) : e,
    m0 = e => typeof e == "number" || at.test(e);

function YD(e, i, a, r, l, c) {
    l ? (e.opacity = kt(0, a.opacity ? ? 1, GD(r)), e.opacityExit = kt(i.opacity ? ? 1, 0, XD(r))) : c && (e.opacity = kt(i.opacity ? ? 1, a.opacity ? ? 1, r));
    for (let f = 0; f < KD; f++) {
        const h = S1[f];
        let p = p0(i, h),
            m = p0(a, h);
        if (p === void 0 && m === void 0) continue;
        p || (p = 0), m || (m = 0), p === 0 || m === 0 || m0(p) === m0(m) ? (e[h] = Math.max(kt(h0(p), h0(m), r), 0), (An.test(m) || An.test(p)) && (e[h] += "%")) : e[h] = m
    }(i.rotate || a.rotate) && (e.rotate = kt(i.rotate || 0, a.rotate || 0, r))
}

function p0(e, i) {
    return e[i] !== void 0 ? e[i] : e.borderRadius
}
const GD = b1(0, .5, cb),
    XD = b1(.5, .95, nn);

function b1(e, i, a) {
    return r => r < e ? 0 : r > i ? 1 : a(Pr(e, i, r))
}

function FD(e, i, a) {
    const r = ye(e) ? e : gs(e);
    return r.start(ph("", r, i, a)), r.animation
}

function qr(e, i, a, r = {
    passive: !0
}) {
    return e.addEventListener(i, a, r), () => e.removeEventListener(i, a)
}
const QD = (e, i) => e.depth - i.depth;
class ZD {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(i) {
        nh(this.children, i), this.isDirty = !0
    }
    remove(i) {
        Kl(this.children, i), this.isDirty = !0
    }
    forEach(i) {
        this.isDirty && this.children.sort(QD), this.isDirty = !1, this.children.forEach(i)
    }
}

function ID(e, i) {
    const a = Te.now(),
        r = ({
            timestamp: l
        }) => {
            const c = l - a;
            c >= i && (Ni(r), e(c - i))
        };
    return Vt.setup(r, !0), () => Ni(r)
}

function zl(e) {
    return ye(e) ? e.get() : e
}
class JD {
    constructor() {
        this.members = []
    }
    add(i) {
        nh(this.members, i);
        for (let a = this.members.length - 1; a >= 0; a--) {
            const r = this.members[a];
            if (r === i || r === this.lead || r === this.prevLead) continue;
            const l = r.instance;
            (!l || l.isConnected === !1) && !r.snapshot && (Kl(this.members, r), r.unmount())
        }
        i.scheduleRender()
    }
    remove(i) {
        if (Kl(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
            const a = this.members[this.members.length - 1];
            a && this.promote(a)
        }
    }
    relegate(i) {
        for (let a = this.members.indexOf(i) - 1; a >= 0; a--) {
            const r = this.members[a];
            if (r.isPresent !== !1 && r.instance ? .isConnected !== !1) return this.promote(r), !0
        }
        return !1
    }
    promote(i, a) {
        const r = this.lead;
        if (i !== r && (this.prevLead = r, this.lead = i, i.show(), r)) {
            r.updateSnapshot(), i.scheduleRender();
            const {
                layoutDependency: l
            } = r.options, {
                layoutDependency: c
            } = i.options;
            (l === void 0 || l !== c) && (i.resumeFrom = r, a && (r.preserveOpacity = !0), r.snapshot && (i.snapshot = r.snapshot, i.snapshot.latestValues = r.animationValues || r.latestValues), i.root ? .isUpdating && (i.isLayoutDirty = !0)), i.options.crossfade === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(i => {
            i.options.onExitComplete ? .(), i.resumingFrom ? .options.onExitComplete ? .()
        })
    }
    scheduleRender() {
        this.members.forEach(i => i.instance && i.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        this.lead ? .snapshot && (this.lead.snapshot = void 0)
    }
}
const jl = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    td = ["", "X", "Y", "Z"],
    WD = 1e3;
let $D = 0;

function ed(e, i, a, r) {
    const {
        latestValues: l
    } = i;
    l[e] && (a[e] = l[e], i.setStaticValue(e, 0), r && (r[e] = 0))
}

function x1(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: i
    } = e.options;
    if (!i) return;
    const a = kb(i);
    if (window.MotionHasOptimisedAnimation(a, "transform")) {
        const {
            layout: l,
            layoutId: c
        } = e.options;
        window.MotionCancelOptimisedAnimation(a, "transform", Vt, !(l || c))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && x1(r)
}

function T1({
    attachResizeListener: e,
    defaultParent: i,
    measureScroll: a,
    checkIsScrollRoot: r,
    resetTransform: l
}) {
    return class {
        constructor(f = {}, h = i ? .()) {
            this.id = $D++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(n3), this.nodes.forEach(l3), this.nodes.forEach(u3), this.nodes.forEach(i3)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = f, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ZD)
        }
        addEventListener(f, h) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new ah), this.eventHandlers.get(f).add(h)
        }
        notifyListeners(f, ...h) {
            const p = this.eventHandlers.get(f);
            p && p.notify(...h)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance) return;
            this.isSVG = xh(f) && !eD(f), this.instance = f;
            const {
                layoutId: h,
                layout: p,
                visualElement: m
            } = this.options;
            if (m && !m.current && m.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0), e) {
                let y, g = 0;
                const S = () => this.root.updateBlockedByResize = !1;
                Vt.read(() => {
                    g = window.innerWidth
                }), e(f, () => {
                    const b = window.innerWidth;
                    b !== g && (g = b, this.root.updateBlockedByResize = !0, y && y(), y = ID(S, 250), jl.hasAnimatedSinceResize && (jl.hasAnimatedSinceResize = !1, this.nodes.forEach(v0)))
                })
            }
            h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && m && (h || p) && this.addEventListener("didUpdate", ({
                delta: y,
                hasLayoutChanged: g,
                hasRelativeLayoutChanged: S,
                layout: b
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const E = this.options.transition || m.getDefaultTransition() || m3,
                    {
                        onLayoutAnimationStart: _,
                        onLayoutAnimationComplete: A
                    } = m.getProps(),
                    R = !this.targetLayout || !v1(this.targetLayout, b),
                    N = !g && S;
                if (this.options.layoutRoot || this.resumeFrom || N || g && (R || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const L = { ...mh(E, "layout"),
                        onPlay: _,
                        onComplete: A
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (L.delay = 0, L.type = !1), this.startAnimation(L), this.setAnimationOrigin(y, N)
                } else g || v0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = b
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ni(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(c3), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: f
            } = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && x1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const g = this.path[y];
                g.shouldResetTransform = !0, (typeof g.latestValues.x == "string" || typeof g.latestValues.y == "string") && (g.isLayoutDirty = !0), g.updateScroll("snapshot"), g.options.layoutRoot && g.willUpdate(!1)
            }
            const {
                layoutId: h,
                layout: p
            } = this.options;
            if (h === void 0 && !p) return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                const p = this.updateBlockedByResize;
                this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), p && this.nodes.forEach(s3), this.nodes.forEach(y0);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(g0);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(r3), this.nodes.forEach(o3), this.nodes.forEach(t3), this.nodes.forEach(e3)) : this.nodes.forEach(g0), this.clearAllSnapshots();
            const h = Te.now();
            pe.delta = wn(0, 1e3 / 60, h - pe.timestamp), pe.timestamp = h, pe.isProcessing = !0, Xf.update.process(pe), Xf.preRender.process(pe), Xf.render.process(pe), pe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Sh.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(a3), this.sharedNodes.forEach(f3)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Vt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Vt.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Ee(this.snapshot.measuredBox.x) && !Ee(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = ie()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: h
            } = this.options;
            h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f = "measure") {
            let h = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1), h && this.instance) {
                const p = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: p,
                    offset: a(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!l) return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                h = this.projectionDelta && !g1(this.projectionDelta),
                p = this.getTransformTemplate(),
                m = p ? p(this.latestValues, "") : void 0,
                y = m !== this.prevTransformTemplateValue;
            f && this.instance && (h || ra(this.latestValues) || y) && (l(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(f = !0) {
            const h = this.measurePageBox();
            let p = this.removeElementScroll(h);
            return f && (p = this.removeTransform(p)), p3(p), {
                animationId: this.root.animationId,
                measuredBox: h,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return ie();
            const h = f.measureViewportBox();
            if (!(this.scroll ? .wasRoot || this.path.some(y3))) {
                const {
                    scroll: m
                } = this.root;
                m && (En(h.x, m.offset.x), En(h.y, m.offset.y))
            }
            return h
        }
        removeElementScroll(f) {
            const h = ie();
            if (fn(h, f), this.scroll ? .wasRoot) return h;
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p],
                    {
                        scroll: y,
                        options: g
                    } = m;
                m !== this.root && y && g.layoutScroll && (y.wasRoot && fn(h, f), En(h.x, y.offset.x), En(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(f, h = !1, p) {
            const m = p || ie();
            fn(m, f);
            for (let y = 0; y < this.path.length; y++) {
                const g = this.path[y];
                !h && g.options.layoutScroll && g.scroll && g !== g.root && (En(m.x, -g.scroll.offset.x), En(m.y, -g.scroll.offset.y)), ra(g.latestValues) && Nl(m, g.latestValues, g.layout ? .layoutBox)
            }
            return ra(this.latestValues) && Nl(m, this.latestValues, this.layout ? .layoutBox), m
        }
        removeTransform(f) {
            const h = ie();
            fn(h, f);
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p];
                if (!ra(m.latestValues)) continue;
                let y;
                m.instance && (jd(m.latestValues) && m.updateSnapshot(), y = ie(), fn(y, m.measurePageBox())), o0(h, m.latestValues, m.snapshot ? .layoutBox, y)
            }
            return ra(this.latestValues) && o0(h, this.latestValues), h
        }
        setTargetDelta(f) {
            this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = { ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== pe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f = !1) {
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== h;
            if (!(f || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: y,
                layoutId: g
            } = this.options;
            if (!this.layout || !(y || g)) return;
            this.resolvedRelativeTargetAt = pe.timestamp;
            const S = this.getClosestProjectingParent();
            S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ie(), this.targetWithTransforms = ie()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), VD(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : fn(this.target, this.layout.layoutBox), s1(this.target, this.targetDelta)) : fn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || jd(this.parent.latestValues) || a1(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(f, h, p) {
            this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ie(), this.relativeTargetOrigin = ie(), Il(this.relativeTargetOrigin, h, p, this.options.layoutAnchor || void 0), fn(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            const f = this.getLead(),
                h = !!this.resumingFrom || this !== f;
            let p = !0;
            if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (p = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === pe.timestamp && (p = !1), p) return;
            const {
                layout: m,
                layoutId: y
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || y)) return;
            fn(this.layoutCorrected, this.layout.layoutBox);
            const g = this.treeScale.x,
                S = this.treeScale.y;
            dD(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = ie());
            const {
                target: b
            } = f;
            if (!b) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (e0(this.prevProjectionDelta.x, this.projectionDelta.x), e0(this.prevProjectionDelta.y, this.projectionDelta.y)), Or(this.projectionDelta, this.layoutCorrected, b, this.latestValues), (this.treeScale.x !== g || this.treeScale.y !== S || !d0(this.projectionDelta.x, this.prevProjectionDelta.x) || !d0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", b))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f = !0) {
            if (this.options.visualElement ? .scheduleRender(), f) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = fs(), this.projectionDelta = fs(), this.projectionDeltaWithTransform = fs()
        }
        setAnimationOrigin(f, h = !1) {
            const p = this.snapshot,
                m = p ? p.latestValues : {},
                y = { ...this.latestValues
                },
                g = fs();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
            const S = ie(),
                b = p ? p.source : void 0,
                E = this.layout ? this.layout.source : void 0,
                _ = b !== E,
                A = this.getStack(),
                R = !A || A.members.length <= 1,
                N = !!(_ && !R && this.options.crossfade === !0 && !this.path.some(h3));
            this.animationProgress = 0;
            let L;
            this.mixTargetDelta = O => {
                const F = O / 1e3;
                S0(g.x, f.x, F), S0(g.y, f.y, F), this.setTargetDelta(g), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Il(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), d3(this.relativeTarget, this.relativeTargetOrigin, S, F), L && kD(this.relativeTarget, L) && (this.isProjectionDirty = !1), L || (L = ie()), fn(L, this.relativeTarget)), _ && (this.animationValues = y, YD(y, m, this.latestValues, F, N, R)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = F
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            this.notifyListeners("animationStart"), this.currentAnimation ? .stop(), this.resumingFrom ? .currentAnimation ? .stop(), this.pendingAnimation && (Ni(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Vt.update(() => {
                jl.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = gs(0)), this.motionValue.jump(0, !1), this.currentAnimation = FD(this.motionValue, [0, 1e3], { ...f,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: h => {
                        this.mixTargetDelta(h), f.onUpdate && f.onUpdate(h)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        f.onComplete && f.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(WD), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {
                targetWithTransforms: h,
                target: p,
                layout: m,
                latestValues: y
            } = f;
            if (!(!h || !p || !m)) {
                if (this !== f && this.layout && m && E1(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    p = this.target || ie();
                    const g = Ee(this.layout.layoutBox.x);
                    p.x.min = f.target.x.min, p.x.max = p.x.min + g;
                    const S = Ee(this.layout.layoutBox.y);
                    p.y.min = f.target.y.min, p.y.max = p.y.min + S
                }
                fn(h, p), Nl(h, y), Or(this.projectionDeltaWithTransform, this.layoutCorrected, h, y)
            }
        }
        registerSharedNode(f, h) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new JD), this.sharedNodes.get(f).add(h);
            const m = h.options.initialPromotionConfig;
            h.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(h) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            const {
                layoutId: f
            } = this.options;
            return f ? this.getStack() ? .lead || this : this
        }
        getPrevLead() {
            const {
                layoutId: f
            } = this.options;
            return f ? this.getStack() ? .prevLead : void 0
        }
        getStack() {
            const {
                layoutId: f
            } = this.options;
            if (f) return this.root.sharedNodes.get(f)
        }
        promote({
            needsReset: f,
            transition: h,
            preserveFollowOpacity: p
        } = {}) {
            const m = this.getStack();
            m && m.promote(this, p), f && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({
                transition: h
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: f
            } = this.options;
            if (!f) return;
            let h = !1;
            const {
                latestValues: p
            } = f;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (h = !0), !h) return;
            const m = {};
            p.z && ed("z", f, m, this.animationValues);
            for (let y = 0; y < td.length; y++) ed(`rotate${td[y]}`, f, m, this.animationValues), ed(`skew${td[y]}`, f, m, this.animationValues);
            f.render();
            for (const y in m) f.setStaticValue(y, m[y]), this.animationValues && (this.animationValues[y] = m[y]);
            f.scheduleRender()
        }
        applyProjectionStyles(f, h) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                f.visibility = "hidden";
                return
            }
            const p = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = zl(h ? .pointerEvents) || "", f.transform = p ? p(this.latestValues, "") : "none";
                return
            }
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = zl(h ? .pointerEvents) || ""), this.hasProjected && !ra(this.latestValues) && (f.transform = p ? p({}, "") : "none", this.hasProjected = !1);
                return
            }
            f.visibility = "";
            const y = m.animationValues || m.latestValues;
            this.applyTransformsToTarget();
            let g = qD(this.projectionDeltaWithTransform, this.treeScale, y);
            p && (g = p(y, g)), f.transform = g;
            const {
                x: S,
                y: b
            } = this.projectionDelta;
            f.transformOrigin = `${S.origin*100}% ${b.origin*100}% 0`, m.animationValues ? f.opacity = m === this ? y.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : f.opacity = m === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
            for (const E in Vd) {
                if (y[E] === void 0) continue;
                const {
                    correct: _,
                    applyTo: A,
                    isCSSVariable: R
                } = Vd[E], N = g === "none" ? y[E] : _(y[E], m);
                if (A) {
                    const L = A.length;
                    for (let O = 0; O < L; O++) f[A[O]] = N
                } else R ? this.options.visualElement.renderState.vars[E] = N : f[E] = N
            }
            this.options.layoutId && (f.pointerEvents = m === this ? zl(h ? .pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => f.currentAnimation ? .stop()), this.root.nodes.forEach(y0), this.root.sharedNodes.clear()
        }
    }
}

function t3(e) {
    e.updateLayout()
}

function e3(e) {
    const i = e.resumeFrom ? .snapshot || e.snapshot;
    if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
        const {
            layoutBox: a,
            measuredBox: r
        } = e.layout, {
            animationType: l
        } = e.options, c = i.source !== e.layout.source;
        if (l === "size") bn(y => {
            const g = c ? i.measuredBox[y] : i.layoutBox[y],
                S = Ee(g);
            g.min = a[y].min, g.max = g.min + S
        });
        else if (l === "x" || l === "y") {
            const y = l === "x" ? "y" : "x";
            Ud(c ? i.measuredBox[y] : i.layoutBox[y], a[y])
        } else E1(l, i.layoutBox, a) && bn(y => {
            const g = c ? i.measuredBox[y] : i.layoutBox[y],
                S = Ee(a[y]);
            g.max = g.min + S, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[y].max = e.relativeTarget[y].min + S)
        });
        const f = fs();
        Or(f, a, i.layoutBox);
        const h = fs();
        c ? Or(h, e.applyTransform(r, !0), i.measuredBox) : Or(h, a, i.layoutBox);
        const p = !g1(f);
        let m = !1;
        if (!e.resumeFrom) {
            const y = e.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {
                    snapshot: g,
                    layout: S
                } = y;
                if (g && S) {
                    const b = e.options.layoutAnchor || void 0,
                        E = ie();
                    Il(E, i.layoutBox, g.layoutBox, b);
                    const _ = ie();
                    Il(_, a, S.layoutBox, b), v1(E, _) || (m = !0), y.options.layoutRoot && (e.relativeTarget = _, e.relativeTargetOrigin = E, e.relativeParent = y)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: a,
            snapshot: i,
            delta: h,
            layoutDelta: f,
            hasLayoutChanged: p,
            hasRelativeLayoutChanged: m
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: a
        } = e.options;
        a && a()
    }
    e.options.transition = void 0
}

function n3(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function i3(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function a3(e) {
    e.clearSnapshot()
}

function y0(e) {
    e.clearMeasurements()
}

function s3(e) {
    e.isLayoutDirty = !0, e.updateLayout()
}

function g0(e) {
    e.isLayoutDirty = !1
}

function r3(e) {
    e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0)
}

function o3(e) {
    const {
        visualElement: i
    } = e.options;
    i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function v0(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function l3(e) {
    e.resolveTargetDelta()
}

function u3(e) {
    e.calcProjection()
}

function c3(e) {
    e.resetSkewAndRotation()
}

function f3(e) {
    e.removeLeadSnapshot()
}

function S0(e, i, a) {
    e.translate = kt(i.translate, 0, a), e.scale = kt(i.scale, 1, a), e.origin = i.origin, e.originPoint = i.originPoint
}

function b0(e, i, a, r) {
    e.min = kt(i.min, a.min, r), e.max = kt(i.max, a.max, r)
}

function d3(e, i, a, r) {
    b0(e.x, i.x, a.x, r), b0(e.y, i.y, a.y, r)
}

function h3(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const m3 = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    x0 = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    T0 = x0("applewebkit/") && !x0("chrome/") ? Math.round : nn;

function E0(e) {
    e.min = T0(e.min), e.max = T0(e.max)
}

function p3(e) {
    E0(e.x), E0(e.y)
}

function E1(e, i, a) {
    return e === "position" || e === "preserve-aspect" && !BD(f0(i), f0(a), .2)
}

function y3(e) {
    return e !== e.root && e.scroll ? .wasRoot
}
const g3 = T1({
        attachResizeListener: (e, i) => qr(e, "resize", i),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body ? .scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body ? .scrollTop || 0
        }),
        checkIsScrollRoot: () => !0
    }),
    nd = {
        current: void 0
    },
    A1 = T1({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!nd.current) {
                const e = new g3({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), nd.current = e
            }
            return nd.current
        },
        resetTransform: (e, i) => {
            e.style.transform = i !== void 0 ? i : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    Rh = k.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });

function A0(e, i) {
    if (typeof e == "function") return e(i);
    e != null && (e.current = i)
}

function v3(...e) {
    return i => {
        let a = !1;
        const r = e.map(l => {
            const c = A0(l, i);
            return !a && typeof c == "function" && (a = !0), c
        });
        if (a) return () => {
            for (let l = 0; l < r.length; l++) {
                const c = r[l];
                typeof c == "function" ? c() : A0(e[l], null)
            }
        }
    }
}

function S3(...e) {
    return k.useCallback(v3(...e), e)
}
class b3 extends k.Component {
    getSnapshotBeforeUpdate(i) {
        const a = this.props.childRef.current;
        if (Ml(a) && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = a.offsetParent,
                l = Ml(r) && r.offsetWidth || 0,
                c = Ml(r) && r.offsetHeight || 0,
                f = getComputedStyle(a),
                h = this.props.sizeRef.current;
            h.height = parseFloat(f.height), h.width = parseFloat(f.width), h.top = a.offsetTop, h.left = a.offsetLeft, h.right = l - h.width - h.left, h.bottom = c - h.height - h.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function x3({
    children: e,
    isPresent: i,
    anchorX: a,
    anchorY: r,
    root: l,
    pop: c
}) {
    const f = k.useId(),
        h = k.useRef(null),
        p = k.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }),
        {
            nonce: m
        } = k.useContext(Rh),
        y = e.props ? .ref ? ? e ? .ref,
        g = S3(h, y);
    return k.useInsertionEffect(() => {
        const {
            width: S,
            height: b,
            top: E,
            left: _,
            right: A,
            bottom: R
        } = p.current;
        if (i || c === !1 || !h.current || !S || !b) return;
        const N = a === "left" ? `left: ${_}` : `right: ${A}`,
            L = r === "bottom" ? `bottom: ${R}` : `top: ${E}`;
        h.current.dataset.motionPopId = f;
        const O = document.createElement("style");
        m && (O.nonce = m);
        const F = l ? ? document.head;
        return F.appendChild(O), O.sheet && O.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${b}px !important;
            ${N}px !important;
            ${L}px !important;
          }
        `), () => {
            h.current ? .removeAttribute("data-motion-pop-id"), F.contains(O) && F.removeChild(O)
        }
    }, [i]), j.jsx(b3, {
        isPresent: i,
        childRef: h,
        sizeRef: p,
        pop: c,
        children: c === !1 ? e : k.cloneElement(e, {
            ref: g
        })
    })
}
const T3 = ({
    children: e,
    initial: i,
    isPresent: a,
    onExitComplete: r,
    custom: l,
    presenceAffectsLayout: c,
    mode: f,
    anchorX: h,
    anchorY: p,
    root: m
}) => {
    const y = eh(E3),
        g = k.useId();
    let S = !0,
        b = k.useMemo(() => (S = !1, {
            id: g,
            initial: i,
            isPresent: a,
            custom: l,
            onExitComplete: E => {
                y.set(E, !0);
                for (const _ of y.values())
                    if (!_) return;
                r && r()
            },
            register: E => (y.set(E, !1), () => y.delete(E))
        }), [a, y, r]);
    return c && S && (b = { ...b
    }), k.useMemo(() => {
        y.forEach((E, _) => y.set(_, !1))
    }, [a]), k.useEffect(() => {
        !a && !y.size && r && r()
    }, [a]), e = j.jsx(x3, {
        pop: f === "popLayout",
        isPresent: a,
        anchorX: h,
        anchorY: p,
        root: m,
        children: e
    }), j.jsx(ou.Provider, {
        value: b,
        children: e
    })
};

function E3() {
    return new Map
}

function w1(e = !0) {
    const i = k.useContext(ou);
    if (i === null) return [!0, null];
    const {
        isPresent: a,
        onExitComplete: r,
        register: l
    } = i, c = k.useId();
    k.useEffect(() => {
        if (e) return l(c)
    }, [e]);
    const f = k.useCallback(() => e && r && r(c), [c, r, e]);
    return !a && r ? [!1, f] : [!0]
}
const Sl = e => e.key || "";

function w0(e) {
    const i = [];
    return k.Children.forEach(e, a => {
        k.isValidElement(a) && i.push(a)
    }), i
}
const A3 = ({
        children: e,
        custom: i,
        initial: a = !0,
        onExitComplete: r,
        presenceAffectsLayout: l = !0,
        mode: c = "sync",
        propagate: f = !1,
        anchorX: h = "left",
        anchorY: p = "top",
        root: m
    }) => {
        const [y, g] = w1(f), S = k.useMemo(() => w0(e), [e]), b = f && !y ? [] : S.map(Sl), E = k.useRef(!0), _ = k.useRef(S), A = eh(() => new Map), R = k.useRef(new Set), [N, L] = k.useState(S), [O, F] = k.useState(S);
        WS(() => {
            E.current = !1, _.current = S;
            for (let K = 0; K < O.length; K++) {
                const Z = Sl(O[K]);
                b.includes(Z) ? (A.delete(Z), R.current.delete(Z)) : A.get(Z) !== !0 && A.set(Z, !1)
            }
        }, [O, b.length, b.join("-")]);
        const J = [];
        if (S !== N) {
            let K = [...S];
            for (let Z = 0; Z < O.length; Z++) {
                const I = O[Z],
                    $ = Sl(I);
                b.includes($) || (K.splice(Z, 0, I), J.push(I))
            }
            return c === "wait" && J.length && (K = J), F(w0(K)), L(S), null
        }
        const {
            forceRender: q
        } = k.useContext(th);
        return j.jsx(j.Fragment, {
            children: O.map(K => {
                const Z = Sl(K),
                    I = f && !y ? !1 : S === O || b.includes(Z),
                    $ = () => {
                        if (R.current.has(Z)) return;
                        if (A.has(Z)) R.current.add(Z), A.set(Z, !0);
                        else return;
                        let ot = !0;
                        A.forEach(ct => {
                            ct || (ot = !1)
                        }), ot && (q ? .(), F(_.current), f && g ? .(), r && r())
                    };
                return j.jsx(T3, {
                    isPresent: I,
                    initial: !E.current || a ? void 0 : !1,
                    custom: i,
                    presenceAffectsLayout: l,
                    mode: c,
                    root: m,
                    onExitComplete: I ? void 0 : $,
                    anchorX: h,
                    anchorY: p,
                    children: K
                }, Z)
            })
        })
    },
    R1 = k.createContext({
        strict: !1
    }),
    R0 = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    };
let _0 = !1;

function w3() {
    if (_0) return;
    const e = {};
    for (const i in R0) e[i] = {
        isEnabled: a => R0[i].some(r => !!a[r])
    };
    e1(e), _0 = !0
}

function _1() {
    return w3(), lD()
}

function R3(e) {
    const i = _1();
    for (const a in e) i[a] = { ...i[a],
        ...e[a]
    };
    e1(i)
}
const _3 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

function Jl(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || _3.has(e)
}
let M1 = e => !Jl(e);

function M3(e) {
    typeof e == "function" && (M1 = i => i.startsWith("on") ? !Jl(i) : e(i))
}
try {
    M3(require("@emotion/is-prop-valid").default)
} catch {}

function C3(e, i, a) {
    const r = {};
    for (const l in e) l === "values" && typeof e.values == "object" || ye(e[l]) || (M1(l) || a === !0 && Jl(l) || !i && !Jl(l) || e.draggable && l.startsWith("onDrag")) && (r[l] = e[l]);
    return r
}
const fu = k.createContext({});

function D3(e, i) {
    if (cu(e)) {
        const {
            initial: a,
            animate: r
        } = e;
        return {
            initial: a === !1 || kr(a) ? a : void 0,
            animate: kr(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? i : {}
}

function O3(e) {
    const {
        initial: i,
        animate: a
    } = D3(e, k.useContext(fu));
    return k.useMemo(() => ({
        initial: i,
        animate: a
    }), [M0(i), M0(a)])
}

function M0(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const _h = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function C1(e, i, a) {
    for (const r in i) !ye(i[r]) && !l1(r, a) && (e[r] = i[r])
}

function L3({
    transformTemplate: e
}, i) {
    return k.useMemo(() => {
        const a = _h();
        return Ah(a, i, e), Object.assign({}, a.vars, a.style)
    }, [i])
}

function N3(e, i) {
    const a = e.style || {},
        r = {};
    return C1(r, a, e), Object.assign(r, L3(e, i)), r
}

function z3(e, i) {
    const a = {},
        r = N3(e, i);
    return e.drag && e.dragListener !== !1 && (a.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (a.tabIndex = 0), a.style = r, a
}
const D1 = () => ({ ..._h(),
    attrs: {}
});

function j3(e, i, a, r) {
    const l = k.useMemo(() => {
        const c = D1();
        return u1(c, i, f1(r), e.transformTemplate, e.style), { ...c.attrs,
            style: { ...c.style
            }
        }
    }, [i]);
    if (e.style) {
        const c = {};
        C1(c, e.style, e), l.style = { ...c,
            ...l.style
        }
    }
    return l
}
const B3 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Mh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(B3.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function V3(e, i, a, {
    latestValues: r
}, l, c = !1, f) {
    const p = (f ? ? Mh(e) ? j3 : z3)(i, r, l, e),
        m = C3(i, typeof e == "string", c),
        y = e !== k.Fragment ? { ...m,
            ...p,
            ref: a
        } : {},
        {
            children: g
        } = i,
        S = k.useMemo(() => ye(g) ? g.get() : g, [g]);
    return k.createElement(e, { ...y,
        children: S
    })
}

function U3({
    scrapeMotionValuesFromProps: e,
    createRenderState: i
}, a, r, l) {
    return {
        latestValues: P3(a, r, l, e),
        renderState: i()
    }
}

function P3(e, i, a, r) {
    const l = {},
        c = r(e, {});
    for (const S in c) l[S] = zl(c[S]);
    let {
        initial: f,
        animate: h
    } = e;
    const p = cu(e),
        m = $b(e);
    i && m && !p && e.inherit !== !1 && (f === void 0 && (f = i.initial), h === void 0 && (h = i.animate));
    let y = a ? a.initial === !1 : !1;
    y = y || f === !1;
    const g = y ? h : f;
    if (g && typeof g != "boolean" && !uu(g)) {
        const S = Array.isArray(g) ? g : [g];
        for (let b = 0; b < S.length; b++) {
            const E = yh(e, S[b]);
            if (E) {
                const {
                    transitionEnd: _,
                    transition: A,
                    ...R
                } = E;
                for (const N in R) {
                    let L = R[N];
                    if (Array.isArray(L)) {
                        const O = y ? L.length - 1 : 0;
                        L = L[O]
                    }
                    L !== null && (l[N] = L)
                }
                for (const N in _) l[N] = _[N]
            }
        }
    }
    return l
}
const O1 = e => (i, a) => {
        const r = k.useContext(fu),
            l = k.useContext(ou),
            c = () => U3(e, i, r, l);
        return a ? c() : eh(c)
    },
    H3 = O1({
        scrapeMotionValuesFromProps: wh,
        createRenderState: _h
    }),
    k3 = O1({
        scrapeMotionValuesFromProps: d1,
        createRenderState: D1
    }),
    q3 = Symbol.for("motionComponentSymbol");

function K3(e, i, a) {
    const r = k.useRef(a);
    k.useInsertionEffect(() => {
        r.current = a
    });
    const l = k.useRef(null);
    return k.useCallback(c => {
        c && e.onMount ? .(c);
        const f = r.current;
        if (typeof f == "function")
            if (c) {
                const h = f(c);
                typeof h == "function" && (l.current = h)
            } else l.current ? (l.current(), l.current = null) : f(c);
        else f && (f.current = c);
        i && (c ? i.mount(c) : i.unmount())
    }, [i])
}
const L1 = k.createContext({});

function os(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function Y3(e, i, a, r, l, c) {
    const {
        visualElement: f
    } = k.useContext(fu), h = k.useContext(R1), p = k.useContext(ou), m = k.useContext(Rh), y = m.reducedMotion, g = m.skipAnimations, S = k.useRef(null), b = k.useRef(!1);
    r = r || h.renderer, !S.current && r && (S.current = r(e, {
        visualState: i,
        parent: f,
        props: a,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: y,
        skipAnimations: g,
        isSVG: c
    }), b.current && S.current && (S.current.manuallyAnimateOnMount = !0));
    const E = S.current,
        _ = k.useContext(L1);
    E && !E.projection && l && (E.type === "html" || E.type === "svg") && G3(S.current, a, l, _);
    const A = k.useRef(!1);
    k.useInsertionEffect(() => {
        E && A.current && E.update(a, p)
    });
    const R = a[Hb],
        N = k.useRef(!!R && typeof window < "u" && !window.MotionHandoffIsComplete ? .(R) && window.MotionHasOptimisedAnimation ? .(R));
    return WS(() => {
        b.current = !0, E && (A.current = !0, window.MotionIsMounted = !0, E.updateFeatures(), E.scheduleRenderMicrotask(), N.current && E.animationState && E.animationState.animateChanges())
    }), k.useEffect(() => {
        E && (!N.current && E.animationState && E.animationState.animateChanges(), N.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete ? .(R)
        }), N.current = !1), E.enteringChildren = void 0)
    }), E
}

function G3(e, i, a, r) {
    const {
        layoutId: l,
        layout: c,
        drag: f,
        dragConstraints: h,
        layoutScroll: p,
        layoutRoot: m,
        layoutAnchor: y,
        layoutCrossfade: g
    } = i;
    e.projection = new a(e.latestValues, i["data-framer-portal-id"] ? void 0 : N1(e.parent)), e.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!f || h && os(h),
        visualElement: e,
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: r,
        crossfade: g,
        layoutScroll: p,
        layoutRoot: m,
        layoutAnchor: y
    })
}

function N1(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : N1(e.parent)
}

function id(e, {
    forwardMotionProps: i = !1,
    type: a
} = {}, r, l) {
    r && R3(r);
    const c = a ? a === "svg" : Mh(e),
        f = c ? k3 : H3;

    function h(m, y) {
        let g;
        const S = { ...k.useContext(Rh),
                ...m,
                layoutId: X3(m)
            },
            {
                isStatic: b
            } = S,
            E = O3(m),
            _ = f(m, b);
        if (!b && typeof window < "u") {
            F3();
            const A = Q3(S);
            g = A.MeasureLayout, E.visualElement = Y3(e, _, S, l, A.ProjectionNode, c)
        }
        return j.jsxs(fu.Provider, {
            value: E,
            children: [g && E.visualElement ? j.jsx(g, {
                visualElement: E.visualElement,
                ...S
            }) : null, V3(e, m, K3(_, E.visualElement, y), _, b, i, c)]
        })
    }
    h.displayName = `motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;
    const p = k.forwardRef(h);
    return p[q3] = e, p
}

function X3({
    layoutId: e
}) {
    const i = k.useContext(th).id;
    return i && e !== void 0 ? i + "-" + e : e
}

function F3(e, i) {
    k.useContext(R1).strict
}

function Q3(e) {
    const i = _1(),
        {
            drag: a,
            layout: r
        } = i;
    if (!a && !r) return {};
    const l = { ...a,
        ...r
    };
    return {
        MeasureLayout: a ? .isEnabled(e) || r ? .isEnabled(e) ? l.MeasureLayout : void 0,
        ProjectionNode: l.ProjectionNode
    }
}

function Z3(e, i) {
    if (typeof Proxy > "u") return id;
    const a = new Map,
        r = (c, f) => id(c, f, e, i),
        l = (c, f) => r(c, f);
    return new Proxy(l, {
        get: (c, f) => f === "create" ? r : (a.has(f) || a.set(f, id(f, void 0, e, i)), a.get(f))
    })
}
const I3 = (e, i) => i.isSVG ? ? Mh(e) ? new wD(i) : new SD(i, {
    allowProjection: e !== k.Fragment
});
class J3 extends Ui {
    constructor(i) {
        super(i), i.animationState || (i.animationState = DD(i))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: i
        } = this.node.getProps();
        uu(i) && (this.unmountControls = i.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: i
        } = this.node.getProps(), {
            animate: a
        } = this.node.prevProps || {};
        i !== a && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(), this.unmountControls ? .()
    }
}
let W3 = 0;
class $3 extends Ui {
    constructor() {
        super(...arguments), this.id = W3++, this.isExitComplete = !1
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: i,
            onExitComplete: a
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || i === r) return;
        if (i && r === !1) {
            if (this.isExitComplete) {
                const {
                    initial: c,
                    custom: f
                } = this.node.getProps();
                if (typeof c == "string") {
                    const h = pa(this.node, c, f);
                    if (h) {
                        const {
                            transition: p,
                            transitionEnd: m,
                            ...y
                        } = h;
                        for (const g in y) this.node.getValue(g) ? .jump(y[g])
                    }
                }
                this.node.animationState.reset(), this.node.animationState.animateChanges()
            } else this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const l = this.node.animationState.setActive("exit", !i);
        a && !i && l.then(() => {
            this.isExitComplete = !0, a(this.id)
        })
    }
    mount() {
        const {
            register: i,
            onExitComplete: a
        } = this.node.presenceContext || {};
        a && a(this.id), i && (this.unmount = i(this.id))
    }
    unmount() {}
}
const tO = {
    animation: {
        Feature: J3
    },
    exit: {
        Feature: $3
    }
};

function Qr(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const eO = e => i => bh(i) && e(i, Qr(i));

function Lr(e, i, a, r) {
    return qr(e, i, eO(a), r)
}
const z1 = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    C0 = (e, i) => Math.abs(e - i);

function nO(e, i) {
    const a = C0(e.x, i.x),
        r = C0(e.y, i.y);
    return Math.sqrt(a ** 2 + r ** 2)
}
const D0 = new Set(["auto", "scroll"]);
class j1 {
    constructor(i, a, {
        transformPagePoint: r,
        contextWindow: l = window,
        dragSnapToOrigin: c = !1,
        distanceThreshold: f = 3,
        element: h
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = b => {
                this.handleScroll(b.target)
            }, this.onWindowScroll = () => {
                this.handleScroll(window)
            }, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                this.lastRawMoveEventInfo && (this.lastMoveEventInfo = bl(this.lastRawMoveEventInfo, this.transformPagePoint));
                const b = ad(this.lastMoveEventInfo, this.history),
                    E = this.startEvent !== null,
                    _ = nO(b.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!E && !_) return;
                const {
                    point: A
                } = b, {
                    timestamp: R
                } = pe;
                this.history.push({ ...A,
                    timestamp: R
                });
                const {
                    onStart: N,
                    onMove: L
                } = this.handlers;
                E || (N && N(this.lastMoveEvent, b), this.startEvent = this.lastMoveEvent), L && L(this.lastMoveEvent, b)
            }, this.handlePointerMove = (b, E) => {
                this.lastMoveEvent = b, this.lastRawMoveEventInfo = E, this.lastMoveEventInfo = bl(E, this.transformPagePoint), Vt.update(this.updatePoint, !0)
            }, this.handlePointerUp = (b, E) => {
                this.end();
                const {
                    onEnd: _,
                    onSessionEnd: A,
                    resumeAnimation: R
                } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && R && R(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const N = ad(b.type === "pointercancel" ? this.lastMoveEventInfo : bl(E, this.transformPagePoint), this.history);
                this.startEvent && _ && _(b, N), A && A(b, N)
            }, !bh(i)) return;
        this.dragSnapToOrigin = c, this.handlers = a, this.transformPagePoint = r, this.distanceThreshold = f, this.contextWindow = l || window;
        const p = Qr(i),
            m = bl(p, this.transformPagePoint),
            {
                point: y
            } = m,
            {
                timestamp: g
            } = pe;
        this.history = [{ ...y,
            timestamp: g
        }];
        const {
            onSessionStart: S
        } = a;
        S && S(i, ad(m, this.history)), this.removeListeners = Gr(Lr(this.contextWindow, "pointermove", this.handlePointerMove), Lr(this.contextWindow, "pointerup", this.handlePointerUp), Lr(this.contextWindow, "pointercancel", this.handlePointerUp)), h && this.startScrollTracking(h)
    }
    startScrollTracking(i) {
        let a = i.parentElement;
        for (; a;) {
            const r = getComputedStyle(a);
            (D0.has(r.overflowX) || D0.has(r.overflowY)) && this.scrollPositions.set(a, {
                x: a.scrollLeft,
                y: a.scrollTop
            }), a = a.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(i) {
        const a = this.scrollPositions.get(i);
        if (!a) return;
        const r = i === window,
            l = r ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: i.scrollLeft,
                y: i.scrollTop
            },
            c = {
                x: l.x - a.x,
                y: l.y - a.y
            };
        c.x === 0 && c.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += c.x, this.lastMoveEventInfo.point.y += c.y) : this.history.length > 0 && (this.history[0].x -= c.x, this.history[0].y -= c.y), this.scrollPositions.set(i, l), Vt.update(this.updatePoint, !0))
    }
    updateHandlers(i) {
        this.handlers = i
    }
    end() {
        this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Ni(this.updatePoint)
    }
}

function bl(e, i) {
    return i ? {
        point: i(e.point)
    } : e
}

function O0(e, i) {
    return {
        x: e.x - i.x,
        y: e.y - i.y
    }
}

function ad({
    point: e
}, i) {
    return {
        point: e,
        delta: O0(e, B1(i)),
        offset: O0(e, iO(i)),
        velocity: aO(i, .1)
    }
}

function iO(e) {
    return e[0]
}

function B1(e) {
    return e[e.length - 1]
}

function aO(e, i) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let a = e.length - 1,
        r = null;
    const l = B1(e);
    for (; a >= 0 && (r = e[a], !(l.timestamp - r.timestamp > Ke(i)));) a--;
    if (!r) return {
        x: 0,
        y: 0
    };
    r === e[0] && e.length > 2 && l.timestamp - r.timestamp > Ke(i) * 2 && (r = e[1]);
    const c = en(l.timestamp - r.timestamp);
    if (c === 0) return {
        x: 0,
        y: 0
    };
    const f = {
        x: (l.x - r.x) / c,
        y: (l.y - r.y) / c
    };
    return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f
}

function sO(e, {
    min: i,
    max: a
}, r) {
    return i !== void 0 && e < i ? e = r ? kt(i, e, r.min) : Math.max(e, i) : a !== void 0 && e > a && (e = r ? kt(a, e, r.max) : Math.min(e, a)), e
}

function L0(e, i, a) {
    return {
        min: i !== void 0 ? e.min + i : void 0,
        max: a !== void 0 ? e.max + a - (e.max - e.min) : void 0
    }
}

function rO(e, {
    top: i,
    left: a,
    bottom: r,
    right: l
}) {
    return {
        x: L0(e.x, a, l),
        y: L0(e.y, i, r)
    }
}

function N0(e, i) {
    let a = i.min - e.min,
        r = i.max - e.max;
    return i.max - i.min < e.max - e.min && ([a, r] = [r, a]), {
        min: a,
        max: r
    }
}

function oO(e, i) {
    return {
        x: N0(e.x, i.x),
        y: N0(e.y, i.y)
    }
}

function lO(e, i) {
    let a = .5;
    const r = Ee(e),
        l = Ee(i);
    return l > r ? a = Pr(i.min, i.max - r, e.min) : r > l && (a = Pr(e.min, e.max - l, i.min)), wn(0, 1, a)
}

function uO(e, i) {
    const a = {};
    return i.min !== void 0 && (a.min = i.min - e.min), i.max !== void 0 && (a.max = i.max - e.min), a
}
const Pd = .35;

function cO(e = Pd) {
    return e === !1 ? e = 0 : e === !0 && (e = Pd), {
        x: z0(e, "left", "right"),
        y: z0(e, "top", "bottom")
    }
}

function z0(e, i, a) {
    return {
        min: j0(e, i),
        max: j0(e, a)
    }
}

function j0(e, i) {
    return typeof e == "number" ? e : e[i] || 0
}
const fO = new WeakMap;
class dO {
    constructor(i) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ie(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = i
    }
    start(i, {
        snapToCursor: a = !1,
        distanceThreshold: r
    } = {}) {
        const {
            presenceContext: l
        } = this.visualElement;
        if (l && l.isPresent === !1) return;
        const c = g => {
                a && this.snapToCursor(Qr(g).point), this.stopAnimation()
            },
            f = (g, S) => {
                const {
                    drag: b,
                    dragPropagation: E,
                    onDragStart: _
                } = this.getProps();
                if (b && !E && (this.openDragLock && this.openDragLock(), this.openDragLock = U2(b), !this.openDragLock)) return;
                this.latestPointerEvent = g, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), bn(R => {
                    let N = this.getAxisMotionValue(R).get() || 0;
                    if (An.test(N)) {
                        const {
                            projection: L
                        } = this.visualElement;
                        if (L && L.layout) {
                            const O = L.layout.layoutBox[R];
                            O && (N = Ee(O) * (parseFloat(N) / 100))
                        }
                    }
                    this.originPoint[R] = N
                }), _ && Vt.update(() => _(g, S), !1, !0), Dd(this.visualElement, "transform");
                const {
                    animationState: A
                } = this.visualElement;
                A && A.setActive("whileDrag", !0)
            },
            h = (g, S) => {
                this.latestPointerEvent = g, this.latestPanInfo = S;
                const {
                    dragPropagation: b,
                    dragDirectionLock: E,
                    onDirectionLock: _,
                    onDrag: A
                } = this.getProps();
                if (!b && !this.openDragLock) return;
                const {
                    offset: R
                } = S;
                if (E && this.currentDirection === null) {
                    this.currentDirection = mO(R), this.currentDirection !== null && _ && _(this.currentDirection);
                    return
                }
                this.updateAxis("x", S.point, R), this.updateAxis("y", S.point, R), this.visualElement.render(), A && Vt.update(() => A(g, S), !1, !0)
            },
            p = (g, S) => {
                this.latestPointerEvent = g, this.latestPanInfo = S, this.stop(g, S), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            m = () => {
                const {
                    dragSnapToOrigin: g
                } = this.getProps();
                (g || this.constraints) && this.startAnimation({
                    x: 0,
                    y: 0
                })
            },
            {
                dragSnapToOrigin: y
            } = this.getProps();
        this.panSession = new j1(i, {
            onSessionStart: c,
            onStart: f,
            onMove: h,
            onSessionEnd: p,
            resumeAnimation: m
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: y,
            distanceThreshold: r,
            contextWindow: z1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(i, a) {
        const r = i || this.latestPointerEvent,
            l = a || this.latestPanInfo,
            c = this.isDragging;
        if (this.cancel(), !c || !l || !r) return;
        const {
            velocity: f
        } = l;
        this.startAnimation(f);
        const {
            onDragEnd: h
        } = this.getProps();
        h && Vt.postRender(() => h(r, l))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: i,
            animationState: a
        } = this.visualElement;
        i && (i.isAnimationBlocked = !1), this.endPanSession();
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), a && a.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(), this.panSession = void 0
    }
    updateAxis(i, a, r) {
        const {
            drag: l
        } = this.getProps();
        if (!r || !xl(i, l, this.currentDirection)) return;
        const c = this.getAxisMotionValue(i);
        let f = this.originPoint[i] + r[i];
        this.constraints && this.constraints[i] && (f = sO(f, this.constraints[i], this.elastic[i])), c.set(f)
    }
    resolveConstraints() {
        const {
            dragConstraints: i,
            dragElastic: a
        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, l = this.constraints;
        i && os(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && r ? this.constraints = rO(r.layoutBox, i) : this.constraints = !1, this.elastic = cO(a), l !== this.constraints && !os(i) && r && this.constraints && !this.hasMutatedConstraints && bn(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = uO(r.layoutBox[c], this.constraints[c]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: i,
            onMeasureDragConstraints: a
        } = this.getProps();
        if (!i || !os(i)) return !1;
        const r = i.current,
            {
                projection: l
            } = this.visualElement;
        if (!l || !l.layout) return !1;
        const c = hD(r, l.root, this.visualElement.getTransformPagePoint());
        let f = oO(l.layout.layoutBox, c);
        if (a) {
            const h = a(cD(f));
            this.hasMutatedConstraints = !!h, h && (f = i1(h))
        }
        return f
    }
    startAnimation(i) {
        const {
            drag: a,
            dragMomentum: r,
            dragElastic: l,
            dragTransition: c,
            dragSnapToOrigin: f,
            onDragTransitionEnd: h
        } = this.getProps(), p = this.constraints || {}, m = bn(y => {
            if (!xl(y, a, this.currentDirection)) return;
            let g = p && p[y] || {};
            (f === !0 || f === y) && (g = {
                min: 0,
                max: 0
            });
            const S = l ? 200 : 1e6,
                b = l ? 40 : 1e7,
                E = {
                    type: "inertia",
                    velocity: r ? i[y] : 0,
                    bounceStiffness: S,
                    bounceDamping: b,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...c,
                    ...g
                };
            return this.startAxisValueAnimation(y, E)
        });
        return Promise.all(m).then(h)
    }
    startAxisValueAnimation(i, a) {
        const r = this.getAxisMotionValue(i);
        return Dd(this.visualElement, i), r.start(ph(i, r, 0, a, this.visualElement, !1))
    }
    stopAnimation() {
        bn(i => this.getAxisMotionValue(i).stop())
    }
    getAxisMotionValue(i) {
        const a = `_drag${i.toUpperCase()}`,
            r = this.visualElement.getProps(),
            l = r[a];
        return l || this.visualElement.getValue(i, (r.initial ? r.initial[i] : void 0) || 0)
    }
    snapToCursor(i) {
        bn(a => {
            const {
                drag: r
            } = this.getProps();
            if (!xl(a, r, this.currentDirection)) return;
            const {
                projection: l
            } = this.visualElement, c = this.getAxisMotionValue(a);
            if (l && l.layout) {
                const {
                    min: f,
                    max: h
                } = l.layout.layoutBox[a], p = c.get() || 0;
                c.set(i[a] - kt(f, h, .5) + p)
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: i,
            dragConstraints: a
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!os(a) || !r || !this.constraints) return;
        this.stopAnimation();
        const l = {
            x: 0,
            y: 0
        };
        bn(f => {
            const h = this.getAxisMotionValue(f);
            if (h && this.constraints !== !1) {
                const p = h.get();
                l[f] = lO({
                    min: p,
                    max: p
                }, this.constraints[f])
            }
        });
        const {
            transformTemplate: c
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = c ? c({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), bn(f => {
            if (!xl(f, i, null)) return;
            const h = this.getAxisMotionValue(f),
                {
                    min: p,
                    max: m
                } = this.constraints[f];
            h.set(kt(p, m, l[f]))
        }), this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current) return;
        fO.set(this.visualElement, this);
        const i = this.visualElement.current,
            a = Lr(i, "pointerdown", m => {
                const {
                    drag: y,
                    dragListener: g = !0
                } = this.getProps(), S = m.target, b = S !== i && Y2(S);
                y && g && !b && this.start(m)
            });
        let r;
        const l = () => {
                const {
                    dragConstraints: m
                } = this.getProps();
                os(m) && m.current && (this.constraints = this.resolveRefConstraints(), r || (r = hO(i, m.current, () => this.scalePositionWithinConstraints())))
            },
            {
                projection: c
            } = this.visualElement,
            f = c.addEventListener("measure", l);
        c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), Vt.read(l);
        const h = qr(window, "resize", () => this.scalePositionWithinConstraints()),
            p = c.addEventListener("didUpdate", (({
                delta: m,
                hasLayoutChanged: y
            }) => {
                this.isDragging && y && (bn(g => {
                    const S = this.getAxisMotionValue(g);
                    S && (this.originPoint[g] += m[g].translate, S.set(S.get() + m[g].translate))
                }), this.visualElement.render())
            }));
        return () => {
            h(), a(), f(), p && p(), r && r()
        }
    }
    getProps() {
        const i = this.visualElement.getProps(),
            {
                drag: a = !1,
                dragDirectionLock: r = !1,
                dragPropagation: l = !1,
                dragConstraints: c = !1,
                dragElastic: f = Pd,
                dragMomentum: h = !0
            } = i;
        return { ...i,
            drag: a,
            dragDirectionLock: r,
            dragPropagation: l,
            dragConstraints: c,
            dragElastic: f,
            dragMomentum: h
        }
    }
}

function B0(e) {
    let i = !0;
    return () => {
        if (i) {
            i = !1;
            return
        }
        e()
    }
}

function hO(e, i, a) {
    const r = Kv(e, B0(a)),
        l = Kv(i, B0(a));
    return () => {
        r(), l()
    }
}

function xl(e, i, a) {
    return (i === !0 || i === e) && (a === null || a === e)
}

function mO(e, i = 10) {
    let a = null;
    return Math.abs(e.y) > i ? a = "y" : Math.abs(e.x) > i && (a = "x"), a
}
class pO extends Ui {
    constructor(i) {
        super(i), this.removeGroupControls = nn, this.removeListeners = nn, this.controls = new dO(i)
    }
    mount() {
        const {
            dragControls: i
        } = this.node.getProps();
        i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || nn
    }
    update() {
        const {
            dragControls: i
        } = this.node.getProps(), {
            dragControls: a
        } = this.node.prevProps || {};
        i !== a && (this.removeGroupControls(), i && (this.removeGroupControls = i.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
    }
}
const sd = e => (i, a) => {
    e && Vt.update(() => e(i, a), !1, !0)
};
class yO extends Ui {
    constructor() {
        super(...arguments), this.removePointerDownListener = nn
    }
    onPointerDown(i) {
        this.session = new j1(i, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: z1(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: i,
            onPanStart: a,
            onPan: r,
            onPanEnd: l
        } = this.node.getProps();
        return {
            onSessionStart: sd(i),
            onStart: sd(a),
            onMove: sd(r),
            onEnd: (c, f) => {
                delete this.session, l && Vt.postRender(() => l(c, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Lr(this.node.current, "pointerdown", i => this.onPointerDown(i))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
let rd = !1;
class gO extends k.Component {
    componentDidMount() {
        const {
            visualElement: i,
            layoutGroup: a,
            switchLayoutGroup: r,
            layoutId: l
        } = this.props, {
            projection: c
        } = i;
        c && (a.group && a.group.add(c), r && r.register && l && r.register(c), rd && c.root.didUpdate(), c.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), c.setOptions({ ...c.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })), jl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(i) {
        const {
            layoutDependency: a,
            visualElement: r,
            drag: l,
            isPresent: c
        } = this.props, {
            projection: f
        } = r;
        return f && (f.isPresent = c, i.layoutDependency !== a && f.setOptions({ ...f.options,
            layoutDependency: a
        }), rd = !0, l || i.layoutDependency !== a || a === void 0 || i.isPresent !== c ? f.willUpdate() : this.safeToRemove(), i.isPresent !== c && (c ? f.promote() : f.relegate() || Vt.postRender(() => {
            const h = f.getStack();
            (!h || !h.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            visualElement: i,
            layoutAnchor: a
        } = this.props, {
            projection: r
        } = i;
        r && (r.options.layoutAnchor = a, r.root.didUpdate(), Sh.postRender(() => {
            !r.currentAnimation && r.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: i,
            layoutGroup: a,
            switchLayoutGroup: r
        } = this.props, {
            projection: l
        } = i;
        rd = !0, l && (l.scheduleCheckAfterUnmount(), a && a.group && a.group.remove(l), r && r.deregister && r.deregister(l))
    }
    safeToRemove() {
        const {
            safeToRemove: i
        } = this.props;
        i && i()
    }
    render() {
        return null
    }
}

function V1(e) {
    const [i, a] = w1(), r = k.useContext(th);
    return j.jsx(gO, { ...e,
        layoutGroup: r,
        switchLayoutGroup: k.useContext(L1),
        isPresent: i,
        safeToRemove: a
    })
}
const vO = {
    pan: {
        Feature: yO
    },
    drag: {
        Feature: pO,
        ProjectionNode: A1,
        MeasureLayout: V1
    }
};

function V0(e, i, a) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", a === "Start");
    const l = "onHover" + a,
        c = r[l];
    c && Vt.postRender(() => c(i, Qr(i)))
}
class SO extends Ui {
    mount() {
        const {
            current: i
        } = this.node;
        i && (this.unmount = H2(i, (a, r) => (V0(this.node, r, "Start"), l => V0(this.node, l, "End"))))
    }
    unmount() {}
}
class bO extends Ui {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let i = !1;
        try {
            i = this.node.current.matches(":focus-visible")
        } catch {
            i = !0
        }!i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Gr(qr(this.node.current, "focus", () => this.onFocus()), qr(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function U0(e, i, a) {
    const {
        props: r
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", a === "Start");
    const l = "onTap" + (a === "End" ? "" : a),
        c = r[l];
    c && Vt.postRender(() => c(i, Qr(i)))
}
class xO extends Ui {
    mount() {
        const {
            current: i
        } = this.node;
        if (!i) return;
        const {
            globalTapTarget: a,
            propagate: r
        } = this.node.props;
        this.unmount = X2(i, (l, c) => (U0(this.node, c, "Start"), (f, {
            success: h
        }) => U0(this.node, f, h ? "End" : "Cancel")), {
            useGlobalTarget: a,
            stopPropagation: r ? .tap === !1
        })
    }
    unmount() {}
}
const Hd = new WeakMap,
    od = new WeakMap,
    TO = e => {
        const i = Hd.get(e.target);
        i && i(e)
    },
    EO = e => {
        e.forEach(TO)
    };

function AO({
    root: e,
    ...i
}) {
    const a = e || document;
    od.has(a) || od.set(a, {});
    const r = od.get(a),
        l = JSON.stringify(i);
    return r[l] || (r[l] = new IntersectionObserver(EO, {
        root: e,
        ...i
    })), r[l]
}

function wO(e, i, a) {
    const r = AO(i);
    return Hd.set(e, a), r.observe(e), () => {
        Hd.delete(e), r.unobserve(e)
    }
}
const RO = {
    some: 0,
    all: 1
};
class _O extends Ui {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.stopObserver ? .();
        const {
            viewport: i = {}
        } = this.node.getProps(), {
            root: a,
            margin: r,
            amount: l = "some",
            once: c
        } = i, f = {
            root: a ? a.current : void 0,
            rootMargin: r,
            threshold: typeof l == "number" ? l : RO[l]
        }, h = p => {
            const {
                isIntersecting: m
            } = p;
            if (this.isInView === m || (this.isInView = m, c && !m && this.hasEnteredView)) return;
            m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {
                onViewportEnter: y,
                onViewportLeave: g
            } = this.node.getProps(), S = m ? y : g;
            S && S(p)
        };
        this.stopObserver = wO(this.node.current, f, h)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: i,
            prevProps: a
        } = this.node;
        ["amount", "margin", "root"].some(MO(i, a)) && this.startObserver()
    }
    unmount() {
        this.stopObserver ? .(), this.hasEnteredView = !1, this.isInView = !1
    }
}

function MO({
    viewport: e = {}
}, {
    viewport: i = {}
} = {}) {
    return a => e[a] !== i[a]
}
const CO = {
        inView: {
            Feature: _O
        },
        tap: {
            Feature: xO
        },
        focus: {
            Feature: bO
        },
        hover: {
            Feature: SO
        }
    },
    DO = {
        layout: {
            ProjectionNode: A1,
            MeasureLayout: V1
        }
    },
    OO = { ...tO,
        ...CO,
        ...vO,
        ...DO
    },
    kd = Z3(OO, I3);
const U1 = (...e) => e.filter((i, a, r) => !!i && i.trim() !== "" && r.indexOf(i) === a).join(" ").trim();
const LO = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const NO = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, a, r) => r ? r.toUpperCase() : a.toLowerCase());
const P0 = e => {
    const i = NO(e);
    return i.charAt(0).toUpperCase() + i.slice(1)
};
var zO = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const jO = e => {
    for (const i in e)
        if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
    return !1
};
const BO = k.forwardRef(({
    color: e = "currentColor",
    size: i = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: r,
    className: l = "",
    children: c,
    iconNode: f,
    ...h
}, p) => k.createElement("svg", {
    ref: p,
    ...zO,
    width: i,
    height: i,
    stroke: e,
    strokeWidth: r ? Number(a) * 24 / Number(i) : a,
    className: U1("lucide", l),
    ...!c && !jO(h) && {
        "aria-hidden": "true"
    },
    ...h
}, [...f.map(([m, y]) => k.createElement(m, y)), ...Array.isArray(c) ? c : [c]]));
const xs = (e, i) => {
    const a = k.forwardRef(({
        className: r,
        ...l
    }, c) => k.createElement(BO, {
        ref: c,
        iconNode: i,
        className: U1(`lucide-${LO(P0(e))}`, `lucide-${e}`, r),
        ...l
    }));
    return a.displayName = P0(e), a
};
const VO = [
        ["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }],
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]
    ],
    UO = xs("mail", VO);
const PO = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    HO = xs("map-pin", PO);
const kO = [
        ["path", {
            d: "M4 5h16",
            key: "1tepv9"
        }],
        ["path", {
            d: "M4 12h16",
            key: "1lakjw"
        }],
        ["path", {
            d: "M4 19h16",
            key: "1djgab"
        }]
    ],
    qO = xs("menu", kO);
const KO = [
        ["path", {
            d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
            key: "1sd12s"
        }]
    ],
    YO = xs("message-circle", KO);
const GO = [
        ["path", {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }]
    ],
    P1 = xs("phone", GO);
const XO = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    FO = xs("x", XO),
    qd = "/assets/logo-kentank-Bi2efOmy.png",
    H1 = "254785152927",
    QO = "0785152927";

function k1(e) {
    return `https://wa.me/${H1}?text=${encodeURIComponent(e)}`
}

function Wl(e, i) {
    const a = e ? `Hello KENTANK, I would like a quote for a ${e} tank. My location is ${i||"[my location]"}.` : "Hello KENTANK, I would like to inquire about your water tanks.";
    return k1(a)
}

function ZL(e) {
    return k1(e)
}

function Kd() {
    return `tel:+${H1}`
}
const H0 = [{
    to: "/",
    label: "Home"
}, {
    to: "products/index.html",
    label: "Products"
}, {
    to: "/pricing",
    label: "Pricing"
}, {
    to: "/solutions",
    label: "Solutions"
}, {
    to: "/about",
    label: "About"
}, {
    to: "/delivery",
    label: "Delivery"
}, {
    to: "/gallery",
    label: "Gallery"
}, {
    to: "/faq",
    label: "FAQ"
}, {
    to: "/contact",
    label: "Contact"
}];

function q1() {
    const [e, i] = k.useState(!1), a = wM();
    return j.jsxs("nav", {
        className: "sticky top-0 z-50 bg-brand-yellow shadow-md",
        children: [j.jsxs("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-2",
            children: [j.jsx(be, {
                to: "/",
                className: "flex items-center gap-2",
                children: j.jsx("img", {
                    src: qd,
                    alt: "KENTANK",
                    className: "h-10 md:h-12"
                })
            }), j.jsx("div", {
                className: "hidden items-center gap-1 lg:flex",
                children: H0.map(r => r.to === "products/index.html" ? j.jsx("a", {
                    href: r.to,
                    className: "px-3 py-2 font-heading text-sm font-semibold uppercase tracking-wide transition-colors text-brand-blue/80 hover:text-brand-blue",
                    children: r.label
                }, r.to) : j.jsx(be, {
                    to: r.to,
                    className: `px-3 py-2 font-heading text-sm font-semibold uppercase tracking-wide transition-colors ${a.pathname===r.to?"text-brand-blue underline underline-offset-4 decoration-2":"text-brand-blue/80 hover:text-brand-blue"}`,
                    children: r.label
                }, r.to))
            }), j.jsxs("div", {
                className: "hidden items-center gap-2 lg:flex",
                children: [j.jsxs("a", {
                    href: Kd(),
                    className: "btn-cta-blue flex items-center gap-2 !py-2 !px-4 text-sm",
                    children: [j.jsx(P1, {
                        size: 16
                    }), " Call Now"]
                }), j.jsx("a", {
                    href: Wl(),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn-cta-blue flex items-center gap-2 !py-2 !px-4 text-sm !bg-green-600",
                    children: "WhatsApp"
                })]
            }), j.jsx("button", {
                onClick: () => i(!0),
                className: "text-brand-blue lg:hidden",
                "aria-label": "Open menu",
                children: j.jsx(qO, {
                    size: 28
                })
            })]
        }), j.jsx(A3, {
            children: e && j.jsxs(j.Fragment, {
                children: [j.jsx(kd.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: .4
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-50 bg-black",
                    onClick: () => i(!1)
                }), j.jsxs(kd.div, {
                    initial: {
                        x: "100%"
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: "100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 300
                    },
                    className: "fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-brand-yellow shadow-xl",
                    children: [j.jsxs("div", {
                        className: "flex items-center justify-between p-4",
                        children: [j.jsx("img", {
                            src: qd,
                            alt: "KENTANK",
                            className: "h-8"
                        }), j.jsx("button", {
                            onClick: () => i(!1),
                            "aria-label": "Close menu",
                            children: j.jsx(FO, {
                                size: 24,
                                className: "text-brand-blue"
                            })
                        })]
                    }), j.jsx("div", {
                        className: "flex flex-col gap-1 px-4",
                        children: H0.map(r => j.jsx(be, {
                            to: r.to,
                            onClick: () => i(!1),
                            className: "rounded px-3 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-brand-blue hover:bg-brand-blue/10",
                            children: r.label
                        }, r.to))
                    }), j.jsxs("div", {
                        className: "mt-auto flex flex-col gap-2 p-4",
                        children: [j.jsx("a", {
                            href: Kd(),
                            className: "btn-cta-blue text-center text-sm",
                            children: "Call Now"
                        }), j.jsx("a", {
                            href: Wl(),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn-cta-blue text-center text-sm !bg-green-600",
                            children: "WhatsApp"
                        })]
                    })]
                })]
            })
        })]
    })
}

function K1() {
    return j.jsx("footer", {
        className: "section-blue pt-12 pb-6",
        children: j.jsxs("div", {
            className: "mx-auto max-w-7xl px-4",
            children: [j.jsxs("div", {
                className: "grid gap-8 md:grid-cols-4",
                children: [j.jsxs("div", {
                    children: [j.jsx("img", {
                        src: qd,
                        alt: "KENTANK",
                        className: "mb-4 h-10"
                    }), j.jsx("p", {
                        className: "text-sm opacity-80",
                        children: "Securing water for healthy living. Kenya's trusted water tank brand."
                    })]
                }), j.jsxs("div", {
                    children: [j.jsx("h4", {
                        className: "mb-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-yellow",
                        children: "Quick Links"
                    }), j.jsxs("div", {
                        className: "flex flex-col gap-2 text-sm opacity-80",
                        children: [j.jsx("a", {
                            href: "products/index.html",
                            className: "hover:text-brand-yellow",
                            children: "Products"
                        }), j.jsx(be, {
                            to: "/pricing",
                            className: "hover:text-brand-yellow",
                            children: "Pricing"
                        }), j.jsx(be, {
                            to: "/solutions",
                            className: "hover:text-brand-yellow",
                            children: "Solutions"
                        }), j.jsx(be, {
                            to: "/about",
                            className: "hover:text-brand-yellow",
                            children: "About"
                        }), j.jsx(be, {
                            to: "/quality",
                            className: "hover:text-brand-yellow",
                            children: "Quality & Warranty"
                        })]
                    })]
                }), j.jsxs("div", {
                    children: [j.jsx("h4", {
                        className: "mb-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-yellow",
                        children: "Support"
                    }), j.jsxs("div", {
                        className: "flex flex-col gap-2 text-sm opacity-80",
                        children: [j.jsx(be, {
                            to: "/delivery",
                            className: "hover:text-brand-yellow",
                            children: "Delivery"
                        }), j.jsx(be, {
                            to: "/faq",
                            className: "hover:text-brand-yellow",
                            children: "FAQ"
                        }), j.jsx(be, {
                            to: "/contact",
                            className: "hover:text-brand-yellow",
                            children: "Contact"
                        }), j.jsx(be, {
                            to: "/quote",
                            className: "hover:text-brand-yellow",
                            children: "Get a Quote"
                        }), j.jsx(be, {
                            to: "/why-choose-us",
                            className: "hover:text-brand-yellow",
                            children: "Why KENTANK"
                        })]
                    })]
                }), j.jsxs("div", {
                    children: [j.jsx("h4", {
                        className: "mb-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-yellow",
                        children: "Contact"
                    }), j.jsxs("div", {
                        className: "flex flex-col gap-3 text-sm opacity-80",
                        children: [j.jsxs("a", {
                            href: Kd(),
                            className: "flex items-center gap-2 hover:text-brand-yellow",
                            children: [j.jsx(P1, {
                                size: 14
                            }), " ", QO]
                        }), j.jsxs("a", {
                            href: Wl(),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-2 hover:text-brand-yellow",
                            children: [j.jsx(UO, {
                                size: 14
                            }), " WhatsApp Us"]
                        }), j.jsxs("p", {
                            className: "flex items-center gap-2",
                            children: [j.jsx(HO, {
                                size: 14
                            }), " Nairobi, Kenya"]
                        })]
                    })]
                })]
            }), j.jsxs("div", {
                className: "mt-8 border-t border-white/20 pt-6 text-center text-xs opacity-60",
                children: ["© ", new Date().getFullYear(), " KENTANK. All rights reserved. Securing water for healthy living."]
            })]
        })
    })
}

function ZO() {
    return j.jsx(kd.a, {
        href: Wl(),
        target: "_blank",
        rel: "noopener noreferrer",
        className: "whatsapp-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600",
        initial: {
            scale: 0
        },
        animate: {
            scale: 1
        },
        transition: {
            delay: 1,
            type: "spring"
        },
        "aria-label": "Chat on WhatsApp",
        children: j.jsx(YO, {
            size: 28
        })
    })
}

function IO() {
    return j.jsxs("div", {
        className: "flex min-h-screen flex-col",
        children: [j.jsx(q1, {}), j.jsx("div", {
            className: "flex flex-1 items-center justify-center px-4",
            children: j.jsxs("div", {
                className: "max-w-md text-center",
                children: [j.jsx("h1", {
                    className: "font-heading text-7xl font-bold text-brand-blue",
                    children: "404"
                }), j.jsx("h2", {
                    className: "mt-4 text-xl font-semibold",
                    children: "Page not found"
                }), j.jsx("p", {
                    className: "mt-2 text-sm text-muted-foreground",
                    children: "The page you're looking for doesn't exist."
                }), j.jsx("div", {
                    className: "mt-6",
                    children: j.jsx(be, {
                        to: "/",
                        className: "btn-cta-yellow inline-block",
                        children: "Go Home"
                    })
                })]
            })
        }), j.jsx(K1, {})]
    })
}
const Ye = cM({
    head: () => ({
        meta: [{
            charSet: "utf-8"
        }, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }, {
            title: "KENTANK – Water Tanks Kenya | Reliable Storage for Every Home & Business"
        }, {
            name: "description",
            content: "KENTANK offers durable, affordable water tanks in Kenya. Multiple sizes from 1,000L to 24,000L. Get a quote today!"
        }, {
            property: "og:title",
            content: "KENTANK – Water Tanks Kenya"
        }, {
            property: "og:description",
            content: "Durable, affordable water tanks. Securing water for healthy living."
        }, {
            property: "og:type",
            content: "website"
        }],
        links: [{
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        }, {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous"
        }, {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
        }, {
            rel: "stylesheet",
            href: LM
        }]
    }),
    shellComponent: JO,
    component: WO,
    notFoundComponent: IO
});

function JO({
    children: e
}) {
    return j.jsxs("html", {
        lang: "en",
        children: [j.jsxs("head", {
            children: [j.jsx(CM, {}), j.jsx("script", {
                async: !0,
                src: "https://www.googletagmanager.com/gtag/js?id=AW-18083373275"
            }), j.jsx("script", {
                dangerouslySetInnerHTML: {
                    __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18083373275');`
                }
            })]
        }), j.jsxs("body", {
            children: [e, j.jsx(DM, {})]
        })]
    })
}

function WO() {
    return j.jsxs("div", {
        className: "flex min-h-screen flex-col",
        children: [j.jsx(q1, {}), j.jsx("main", {
            className: "flex-1",
            children: j.jsx(IS, {})
        }), j.jsx(K1, {}), j.jsx(ZO, {})]
    })
}
const $O = "modulepreload",
    tL = function(e) {
        return "/" + e
    },
    k0 = {},
    rn = function(i, a, r) {
        let l = Promise.resolve();
        if (a && a.length > 0) {
            let p = function(m) {
                return Promise.all(m.map(y => Promise.resolve(y).then(g => ({
                    status: "fulfilled",
                    value: g
                }), g => ({
                    status: "rejected",
                    reason: g
                }))))
            };
            document.getElementsByTagName("link");
            const f = document.querySelector("meta[property=csp-nonce]"),
                h = f ? .nonce || f ? .getAttribute("nonce");
            l = p(a.map(m => {
                if (m = tL(m), m in k0) return;
                k0[m] = !0;
                const y = m.endsWith(".css"),
                    g = y ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${m}"]${g}`)) return;
                const S = document.createElement("link");
                if (S.rel = y ? "stylesheet" : $O, y || (S.as = "script"), S.crossOrigin = "", S.href = m, h && S.setAttribute("nonce", h), document.head.appendChild(S), y) return new Promise((b, E) => {
                    S.addEventListener("load", b), S.addEventListener("error", () => E(new Error(`Unable to preload CSS for ${m}`)))
                })
            }))
        }

        function c(f) {
            const h = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (h.payload = f, window.dispatchEvent(h), !h.defaultPrevented) throw f
        }
        return l.then(f => {
            for (const h of f || []) h.status === "rejected" && c(h.reason);
            return i().catch(c)
        })
    },
    eL = () => rn(() =>
        import ("./why-choose-us-BBDhUE3o.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])),
    nL = an("/why-choose-us")({
        head: () => ({
            meta: [{
                title: "Why Choose KENTANK – Water Tanks Kenya"
            }, {
                name: "description",
                content: "Discover why KENTANK is Kenya's preferred water tank brand. Quality, durability, and affordability."
            }, {
                property: "og:title",
                content: "Why Choose KENTANK"
            }, {
                property: "og:description",
                content: "Quality, durability, and affordability."
            }]
        }),
        component: sn(eL, "component")
    }),
    iL = () => rn(() =>
        import ("./solutions-DySUiK0k.js"), __vite__mapDeps([7, 1, 8, 6])),
    aL = an("/solutions")({
        head: () => ({
            meta: [{
                title: "Solutions – KENTANK Water Storage"
            }, {
                name: "description",
                content: "Water storage solutions for homes, rentals, schools, farms, businesses, and institutions."
            }, {
                property: "og:title",
                content: "KENTANK Solutions"
            }, {
                property: "og:description",
                content: "Water tanks for every need."
            }]
        }),
        component: sn(iL, "component")
    }),
    sL = () => rn(() =>
        import ("./quote-xKRYDtW6.js"), __vite__mapDeps([9, 1, 10])),
    rL = an("/quote")({
        head: () => ({
            meta: [{
                title: "Get a Quote – KENTANK Water Tanks"
            }, {
                name: "description",
                content: "Request a free quote for KENTANK water tanks. Fast response via WhatsApp."
            }, {
                property: "og:title",
                content: "Get a KENTANK Quote"
            }, {
                property: "og:description",
                content: "Free quotes for water tanks across Kenya."
            }]
        }),
        component: sn(sL, "component")
    }),
    oL = () => rn(() =>
        import ("./quality-C_mrhP_g.js"), __vite__mapDeps([11, 1, 3, 2, 4, 12])),
    lL = an("/quality")({
        head: () => ({
            meta: [{
                title: "Quality & Warranty – KENTANK Water Tanks"
            }, {
                name: "description",
                content: "KENTANK water tanks are built with food-grade materials, UV protection, and backed by manufacturer warranty."
            }, {
                property: "og:title",
                content: "KENTANK Quality & Warranty"
            }, {
                property: "og:description",
                content: "Quality materials and warranty guarantee."
            }]
        }),
        component: sn(oL, "component")
    }),
    uL = () => rn(() =>
        import ("./products-CBU9Do_k.js?v=3"), __vite__mapDeps([13, 1, 14, 15, 10])),
    cL = an("/products")({
        head: () => ({
            meta: [{
                title: "Water Tanks – KENTANK Products"
            }, {
                name: "description",
                content: "Browse KENTANK water tanks from 1,000L to 24,000L. Durable, affordable, and available across Kenya."
            }, {
                property: "og:title",
                content: "KENTANK Water Tanks – All Sizes"
            }, {
                property: "og:description",
                content: "Browse our full range of water tanks."
            }]
        }),
        component: sn(uL, "component")
    }),
    fL = () => rn(() =>
        import ("./pricing-rfu24AHZ.js"), __vite__mapDeps([16, 1, 10])),
    dL = an("/pricing")({
        head: () => ({
            meta: [{
                title: "Pricing – KENTANK Water Tanks"
            }, {
                name: "description",
                content: "Affordable water tank prices in Kenya. View KENTANK pricing for all sizes."
            }, {
                property: "og:title",
                content: "KENTANK Pricing"
            }, {
                property: "og:description",
                content: "View our competitive water tank prices."
            }]
        }),
        component: sn(fL, "component")
    }),
    hL = () => rn(() =>
        import ("./gallery-BT6WejGK.js"), __vite__mapDeps([17, 1, 18, 15, 19])),
    mL = an("/gallery")({
        head: () => ({
            meta: [{
                title: "Gallery – KENTANK Water Tanks"
            }, {
                name: "description",
                content: "View KENTANK water tank images, installations, and product range."
            }, {
                property: "og:title",
                content: "KENTANK Gallery"
            }, {
                property: "og:description",
                content: "See our tanks in action."
            }]
        }),
        component: sn(hL, "component")
    }),
    pL = () => rn(() =>
        import ("./faq-hWRhsX-J.js"), __vite__mapDeps([20, 1])),
    yL = an("/faq")({
        head: () => ({
            meta: [{
                title: "FAQ – KENTANK Water Tanks"
            }, {
                name: "description",
                content: "Frequently asked questions about KENTANK water tanks, ordering, delivery, and warranties."
            }, {
                property: "og:title",
                content: "KENTANK FAQ"
            }, {
                property: "og:description",
                content: "Get answers to common questions."
            }]
        }),
        component: sn(pL, "component")
    }),
    gL = () => rn(() =>
        import ("./delivery-ZburUZaB.js"), __vite__mapDeps([21, 1, 5, 12])),
    vL = an("/delivery")({
        head: () => ({
            meta: [{
                title: "Delivery – KENTANK Water Tanks"
            }, {
                name: "description",
                content: "KENTANK delivers water tanks across Kenya. Learn about our ordering and delivery process."
            }, {
                property: "og:title",
                content: "KENTANK Delivery"
            }, {
                property: "og:description",
                content: "Fast and reliable water tank delivery across Kenya."
            }]
        }),
        component: sn(gL, "component")
    }),
    SL = () => rn(() =>
        import ("./contact-Kgl5pQjk.js"), __vite__mapDeps([22, 1])),
    bL = an("/contact")({
        head: () => ({
            meta: [{
                title: "Contact – KENTANK Water Tanks"
            }, {
                name: "description",
                content: "Contact KENTANK for water tank inquiries, quotes, and delivery across Kenya."
            }, {
                property: "og:title",
                content: "Contact KENTANK"
            }, {
                property: "og:description",
                content: "Get in touch for quotes and inquiries."
            }]
        }),
        component: sn(SL, "component")
    }),
    xL = () => rn(() =>
        import ("./about-CzKdivLO.js"), __vite__mapDeps([23, 1, 19, 6, 2, 4, 5])),
    TL = an("/about")({
        head: () => ({
            meta: [{
                title: "About KENTANK – Kenya's Trusted Water Tank Brand"
            }, {
                name: "description",
                content: "Learn about KENTANK, Kenya's leading water tank manufacturer. Securing water for healthy living."
            }, {
                property: "og:title",
                content: "About KENTANK"
            }, {
                property: "og:description",
                content: "Kenya's trusted water tank brand."
            }]
        }),
        component: sn(xL, "component")
    }),
    EL = () => rn(() =>
        import ("./index-CB4FrW2e.js?v=3"), __vite__mapDeps([24, 1, 14, 15, 10, 18, 2, 3, 5, 6, 8])),
    AL = an("/")({
        component: sn(EL, "component")
    }),
    wL = nL.update({
        id: "/why-choose-us",
        path: "/why-choose-us",
        getParentRoute: () => Ye
    }),
    RL = aL.update({
        id: "/solutions",
        path: "/solutions",
        getParentRoute: () => Ye
    }),
    _L = rL.update({
        id: "/quote",
        path: "/quote",
        getParentRoute: () => Ye
    }),
    ML = lL.update({
        id: "/quality",
        path: "/quality",
        getParentRoute: () => Ye
    }),
    CL = cL.update({
        id: "/products",
        path: "/products",
        getParentRoute: () => Ye
    }),
    DL = dL.update({
        id: "/pricing",
        path: "/pricing",
        getParentRoute: () => Ye
    }),
    OL = mL.update({
        id: "/gallery",
        path: "/gallery",
        getParentRoute: () => Ye
    }),
    LL = yL.update({
        id: "/faq",
        path: "/faq",
        getParentRoute: () => Ye
    }),
    NL = vL.update({
        id: "/delivery",
        path: "/delivery",
        getParentRoute: () => Ye
    }),
    zL = bL.update({
        id: "/contact",
        path: "/contact",
        getParentRoute: () => Ye
    }),
    jL = TL.update({
        id: "/about",
        path: "/about",
        getParentRoute: () => Ye
    }),
    BL = AL.update({
        id: "/",
        path: "/",
        getParentRoute: () => Ye
    }),
    VL = {
        IndexRoute: BL,
        AboutRoute: jL,
        ContactRoute: zL,
        DeliveryRoute: NL,
        FaqRoute: LL,
        GalleryRoute: OL,
        PricingRoute: DL,
        ProductsRoute: CL,
        QualityRoute: ML,
        QuoteRoute: _L,
        SolutionsRoute: RL,
        WhyChooseUsRoute: wL
    },
    UL = Ye._addFileChildren(VL);

function PL({
    error: e,
    reset: i
}) {
    const a = le();
    return j.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-background px-4",
        children: j.jsxs("div", {
            className: "max-w-md text-center",
            children: [j.jsx("div", {
                className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10",
                children: j.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-8 w-8 text-destructive",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    children: j.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    })
                })
            }), j.jsx("h1", {
                className: "text-2xl font-bold tracking-tight text-foreground",
                children: "Something went wrong"
            }), j.jsx("p", {
                className: "mt-2 text-sm text-muted-foreground",
                children: "An unexpected error occurred. Please try again."
            }), !1, j.jsxs("div", {
                className: "mt-6 flex items-center justify-center gap-3",
                children: [j.jsx("button", {
                    onClick: () => {
                        a.invalidate(), i()
                    },
                    className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
                    children: "Try again"
                }), j.jsx("a", {
                    href: "/",
                    className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
                    children: "Go home"
                })]
            })]
        })
    })
}
const HL = () => xM({
    routeTree: UL,
    context: {},
    scrollRestoration: !0,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: PL
});
async function kL() {
    const e = await HL();
    let i;
    return i = [], window.__TSS_START_OPTIONS__ = {
        serializationAdapters: i
    }, i.push(__), e.options.serializationAdapters && i.push(...e.options.serializationAdapters), e.update({
        basepath: "",
        serializationAdapters: i
    }), e.stores.matchesId.get().length || await C_(e), e
}
async function qL() {
    const e = await kL();
    return window.$_TSR ? .h(), e
}
var ld;

function KL() {
    return ld || (ld = qL()), j.jsx(N_, {
        promise: ld,
        children: e => j.jsx(AM, {
            router: e
        })
    })
}
k.startTransition(() => {
    vE.hydrateRoot(document, j.jsx(k.StrictMode, {
        children: j.jsx(KL, {})
    }))
});
export {
    QO as D, be as L, YO as M, P1 as P, FO as X, ZL as a, Kd as b, xs as c, HO as d, Wl as g, j, kd as m, k as r
};
