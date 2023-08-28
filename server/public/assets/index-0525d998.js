function zh(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, l);
                    o &&
                        Object.defineProperty(
                            e,
                            l,
                            o.get ? o : { enumerable: !0, get: () => r[l] }
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver((l) => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(l) {
        const o = {};
        return (
            l.integrity && (o.integrity = l.integrity),
            l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : l.crossOrigin === "anonymous"
                ? (o.credentials = "omit")
                : (o.credentials = "same-origin"),
            o
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o);
    }
})();
function zd(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var Ad = { exports: {} },
    Si = {},
    Ud = { exports: {} },
    G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var io = Symbol.for("react.element"),
    Ah = Symbol.for("react.portal"),
    Uh = Symbol.for("react.fragment"),
    Bh = Symbol.for("react.strict_mode"),
    Hh = Symbol.for("react.profiler"),
    bh = Symbol.for("react.provider"),
    Vh = Symbol.for("react.context"),
    Wh = Symbol.for("react.forward_ref"),
    Kh = Symbol.for("react.suspense"),
    Qh = Symbol.for("react.memo"),
    Yh = Symbol.for("react.lazy"),
    Ys = Symbol.iterator;
function Gh(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Ys && e[Ys]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Bd = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Hd = Object.assign,
    bd = {};
function rl(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = bd),
        (this.updater = n || Bd);
}
rl.prototype.isReactComponent = {};
rl.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
rl.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vd() {}
Vd.prototype = rl.prototype;
function $u(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = bd),
        (this.updater = n || Bd);
}
var zu = ($u.prototype = new Vd());
zu.constructor = $u;
Hd(zu, rl.prototype);
zu.isPureReactComponent = !0;
var Gs = Array.isArray,
    Wd = Object.prototype.hasOwnProperty,
    Au = { current: null },
    Kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qd(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
            Wd.call(t, r) && !Kd.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) l.children = n;
    else if (1 < a) {
        for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
        l.children = u;
    }
    if (e && e.defaultProps)
        for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: io,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Au.current,
    };
}
function Xh(e, t) {
    return {
        $$typeof: io,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Uu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === io;
}
function Zh(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Xs = /\/+/g;
function Gi(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Zh("" + e.key)
        : t.toString(36);
}
function $o(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
        switch (o) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case io:
                    case Ah:
                        i = !0;
                }
        }
    if (i)
        return (
            (i = e),
            (l = l(i)),
            (e = r === "" ? "." + Gi(i, 0) : r),
            Gs(l)
                ? ((n = ""),
                  e != null && (n = e.replace(Xs, "$&/") + "/"),
                  $o(l, t, n, "", function (s) {
                      return s;
                  }))
                : l != null &&
                  (Uu(l) &&
                      (l = Xh(
                          l,
                          n +
                              (!l.key || (i && i.key === l.key)
                                  ? ""
                                  : ("" + l.key).replace(Xs, "$&/") + "/") +
                              e
                      )),
                  t.push(l)),
            1
        );
    if (((i = 0), (r = r === "" ? "." : r + ":"), Gs(e)))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var u = r + Gi(o, a);
            i += $o(o, t, n, u, l);
        }
    else if (((u = Gh(e)), typeof u == "function"))
        for (e = u.call(e), a = 0; !(o = e.next()).done; )
            (o = o.value), (u = r + Gi(o, a++)), (i += $o(o, t, n, u, l));
    else if (o === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return i;
}
function yo(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        $o(e, r, "", "", function (o) {
            return t.call(n, o, l++);
        }),
        r
    );
}
function Jh(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Je = { current: null },
    zo = { transition: null },
    qh = {
        ReactCurrentDispatcher: Je,
        ReactCurrentBatchConfig: zo,
        ReactCurrentOwner: Au,
    };
G.Children = {
    map: yo,
    forEach: function (e, t, n) {
        yo(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            yo(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            yo(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Uu(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
G.Component = rl;
G.Fragment = Uh;
G.Profiler = Hh;
G.PureComponent = $u;
G.StrictMode = Bh;
G.Suspense = Kh;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qh;
G.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Hd({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (i = Au.current)),
            t.key !== void 0 && (l = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (u in t)
            Wd.call(t, u) &&
                !Kd.hasOwnProperty(u) &&
                (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
        r.children = a;
    }
    return { $$typeof: io, type: e.type, key: l, ref: o, props: r, _owner: i };
};
G.createContext = function (e) {
    return (
        (e = {
            $$typeof: Vh,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: bh, _context: e }),
        (e.Consumer = e)
    );
};
G.createElement = Qd;
G.createFactory = function (e) {
    var t = Qd.bind(null, e);
    return (t.type = e), t;
};
G.createRef = function () {
    return { current: null };
};
G.forwardRef = function (e) {
    return { $$typeof: Wh, render: e };
};
G.isValidElement = Uu;
G.lazy = function (e) {
    return { $$typeof: Yh, _payload: { _status: -1, _result: e }, _init: Jh };
};
G.memo = function (e, t) {
    return { $$typeof: Qh, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
    var t = zo.transition;
    zo.transition = {};
    try {
        e();
    } finally {
        zo.transition = t;
    }
};
G.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
G.useCallback = function (e, t) {
    return Je.current.useCallback(e, t);
};
G.useContext = function (e) {
    return Je.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
    return Je.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
    return Je.current.useEffect(e, t);
};
G.useId = function () {
    return Je.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
    return Je.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
    return Je.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
    return Je.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
    return Je.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
    return Je.current.useReducer(e, t, n);
};
G.useRef = function (e) {
    return Je.current.useRef(e);
};
G.useState = function (e) {
    return Je.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
    return Je.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
    return Je.current.useTransition();
};
G.version = "18.2.0";
Ud.exports = G;
var p = Ud.exports;
const le = zd(p),
    rw = zh({ __proto__: null, default: le }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var em = p,
    tm = Symbol.for("react.element"),
    nm = Symbol.for("react.fragment"),
    rm = Object.prototype.hasOwnProperty,
    lm =
        em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    om = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yd(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (i = t.ref);
    for (r in t) rm.call(t, r) && !om.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: tm,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: lm.current,
    };
}
Si.Fragment = nm;
Si.jsx = Yd;
Si.jsxs = Yd;
Ad.exports = Si;
var E = Ad.exports,
    Oa = {},
    Gd = { exports: {} },
    ft = {},
    Xd = { exports: {} },
    Zd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(L, F) {
        var B = L.length;
        L.push(F);
        e: for (; 0 < B; ) {
            var U = (B - 1) >>> 1,
                ne = L[U];
            if (0 < l(ne, F)) (L[U] = F), (L[B] = ne), (B = U);
            else break e;
        }
    }
    function n(L) {
        return L.length === 0 ? null : L[0];
    }
    function r(L) {
        if (L.length === 0) return null;
        var F = L[0],
            B = L.pop();
        if (B !== F) {
            L[0] = B;
            e: for (var U = 0, ne = L.length, ve = ne >>> 1; U < ve; ) {
                var ze = 2 * (U + 1) - 1,
                    Pe = L[ze],
                    Re = ze + 1,
                    et = L[Re];
                if (0 > l(Pe, B))
                    Re < ne && 0 > l(et, Pe)
                        ? ((L[U] = et), (L[Re] = B), (U = Re))
                        : ((L[U] = Pe), (L[ze] = B), (U = ze));
                else if (Re < ne && 0 > l(et, B))
                    (L[U] = et), (L[Re] = B), (U = Re);
                else break e;
            }
        }
        return F;
    }
    function l(L, F) {
        var B = L.sortIndex - F.sortIndex;
        return B !== 0 ? B : L.id - F.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var i = Date,
            a = i.now();
        e.unstable_now = function () {
            return i.now() - a;
        };
    }
    var u = [],
        s = [],
        f = 1,
        h = null,
        m = 3,
        y = !1,
        v = !1,
        w = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        c = typeof clearTimeout == "function" ? clearTimeout : null,
        d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(L) {
        for (var F = n(s); F !== null; ) {
            if (F.callback === null) r(s);
            else if (F.startTime <= L)
                r(s), (F.sortIndex = F.expirationTime), t(u, F);
            else break;
            F = n(s);
        }
    }
    function x(L) {
        if (((w = !1), g(L), !v))
            if (n(u) !== null) (v = !0), ue(P);
            else {
                var F = n(s);
                F !== null && ee(x, F.startTime - L);
            }
    }
    function P(L, F) {
        (v = !1), w && ((w = !1), c(T), (T = -1)), (y = !0);
        var B = m;
        try {
            for (
                g(F), h = n(u);
                h !== null && (!(h.expirationTime > F) || (L && !Z()));

            ) {
                var U = h.callback;
                if (typeof U == "function") {
                    (h.callback = null), (m = h.priorityLevel);
                    var ne = U(h.expirationTime <= F);
                    (F = e.unstable_now()),
                        typeof ne == "function"
                            ? (h.callback = ne)
                            : h === n(u) && r(u),
                        g(F);
                } else r(u);
                h = n(u);
            }
            if (h !== null) var ve = !0;
            else {
                var ze = n(s);
                ze !== null && ee(x, ze.startTime - F), (ve = !1);
            }
            return ve;
        } finally {
            (h = null), (m = B), (y = !1);
        }
    }
    var R = !1,
        M = null,
        T = -1,
        O = 5,
        j = -1;
    function Z() {
        return !(e.unstable_now() - j < O);
    }
    function q() {
        if (M !== null) {
            var L = e.unstable_now();
            j = L;
            var F = !0;
            try {
                F = M(!0, L);
            } finally {
                F ? ae() : ((R = !1), (M = null));
            }
        } else R = !1;
    }
    var ae;
    if (typeof d == "function")
        ae = function () {
            d(q);
        };
    else if (typeof MessageChannel < "u") {
        var ie = new MessageChannel(),
            Y = ie.port2;
        (ie.port1.onmessage = q),
            (ae = function () {
                Y.postMessage(null);
            });
    } else
        ae = function () {
            S(q, 0);
        };
    function ue(L) {
        (M = L), R || ((R = !0), ae());
    }
    function ee(L, F) {
        T = S(function () {
            L(e.unstable_now());
        }, F);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (L) {
            L.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            v || y || ((v = !0), ue(P));
        }),
        (e.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (O = 0 < L ? Math.floor(1e3 / L) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (e.unstable_next = function (L) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var F = 3;
                    break;
                default:
                    F = m;
            }
            var B = m;
            m = F;
            try {
                return L();
            } finally {
                m = B;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (L, F) {
            switch (L) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    L = 3;
            }
            var B = m;
            m = L;
            try {
                return F();
            } finally {
                m = B;
            }
        }),
        (e.unstable_scheduleCallback = function (L, F, B) {
            var U = e.unstable_now();
            switch (
                (typeof B == "object" && B !== null
                    ? ((B = B.delay),
                      (B = typeof B == "number" && 0 < B ? U + B : U))
                    : (B = U),
                L)
            ) {
                case 1:
                    var ne = -1;
                    break;
                case 2:
                    ne = 250;
                    break;
                case 5:
                    ne = 1073741823;
                    break;
                case 4:
                    ne = 1e4;
                    break;
                default:
                    ne = 5e3;
            }
            return (
                (ne = B + ne),
                (L = {
                    id: f++,
                    callback: F,
                    priorityLevel: L,
                    startTime: B,
                    expirationTime: ne,
                    sortIndex: -1,
                }),
                B > U
                    ? ((L.sortIndex = B),
                      t(s, L),
                      n(u) === null &&
                          L === n(s) &&
                          (w ? (c(T), (T = -1)) : (w = !0), ee(x, B - U)))
                    : ((L.sortIndex = ne),
                      t(u, L),
                      v || y || ((v = !0), ue(P))),
                L
            );
        }),
        (e.unstable_shouldYield = Z),
        (e.unstable_wrapCallback = function (L) {
            var F = m;
            return function () {
                var B = m;
                m = F;
                try {
                    return L.apply(this, arguments);
                } finally {
                    m = B;
                }
            };
        });
})(Zd);
Xd.exports = Zd;
var im = Xd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jd = p,
    dt = im;
function _(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var qd = new Set(),
    Ul = {};
function vr(e, t) {
    Yr(e, t), Yr(e + "Capture", t);
}
function Yr(e, t) {
    for (Ul[e] = t, e = 0; e < t.length; e++) qd.add(t[e]);
}
var nn = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    ja = Object.prototype.hasOwnProperty,
    am =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Zs = {},
    Js = {};
function um(e) {
    return ja.call(Js, e)
        ? !0
        : ja.call(Zs, e)
        ? !1
        : am.test(e)
        ? (Js[e] = !0)
        : ((Zs[e] = !0), !1);
}
function sm(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function cm(e, t, n, r) {
    if (t === null || typeof t > "u" || sm(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function qe(e, t, n, r, l, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = i);
}
var be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        be[e] = new qe(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    be[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    be[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    be[e] = new qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        be[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    be[e] = new qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    be[e] = new qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    be[e] = new qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    be[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bu = /[\-:]([a-z])/g;
function Hu(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Bu, Hu);
        be[t] = new qe(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Bu, Hu);
        be[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Bu, Hu);
    be[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    be[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
be.xlinkHref = new qe(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    be[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bu(e, t, n, r) {
    var l = be.hasOwnProperty(t) ? be[t] : null;
    (l !== null
        ? l.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (cm(t, n, l, r) && (n = null),
        r || l === null
            ? um(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : l.mustUseProperty
            ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
            : ((t = l.attributeName),
              (r = l.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((l = l.type),
                    (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var un = Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    wo = Symbol.for("react.element"),
    Rr = Symbol.for("react.portal"),
    Nr = Symbol.for("react.fragment"),
    Vu = Symbol.for("react.strict_mode"),
    Ia = Symbol.for("react.profiler"),
    ef = Symbol.for("react.provider"),
    tf = Symbol.for("react.context"),
    Wu = Symbol.for("react.forward_ref"),
    Da = Symbol.for("react.suspense"),
    Fa = Symbol.for("react.suspense_list"),
    Ku = Symbol.for("react.memo"),
    xn = Symbol.for("react.lazy"),
    nf = Symbol.for("react.offscreen"),
    qs = Symbol.iterator;
function hl(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (qs && e[qs]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var xe = Object.assign,
    Xi;
function Pl(e) {
    if (Xi === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Xi = (t && t[1]) || "";
        }
    return (
        `
` +
        Xi +
        e
    );
}
var Zi = !1;
function Ji(e, t) {
    if (!e || Zi) return "";
    Zi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (s) {
                    var r = s;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (s) {
                    r = s;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (s) {
                r = s;
            }
            e();
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (
                var l = s.stack.split(`
`),
                    o = r.stack.split(`
`),
                    i = l.length - 1,
                    a = o.length - 1;
                1 <= i && 0 <= a && l[i] !== o[a];

            )
                a--;
            for (; 1 <= i && 0 <= a; i--, a--)
                if (l[i] !== o[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if ((i--, a--, 0 > a || l[i] !== o[a])) {
                                var u =
                                    `
` + l[i].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        u.includes("<anonymous>") &&
                                        (u = u.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    u
                                );
                            }
                        while (1 <= i && 0 <= a);
                    break;
                }
        }
    } finally {
        (Zi = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Pl(e) : "";
}
function dm(e) {
    switch (e.tag) {
        case 5:
            return Pl(e.type);
        case 16:
            return Pl("Lazy");
        case 13:
            return Pl("Suspense");
        case 19:
            return Pl("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Ji(e.type, !1)), e;
        case 11:
            return (e = Ji(e.type.render, !1)), e;
        case 1:
            return (e = Ji(e.type, !0)), e;
        default:
            return "";
    }
}
function $a(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Nr:
            return "Fragment";
        case Rr:
            return "Portal";
        case Ia:
            return "Profiler";
        case Vu:
            return "StrictMode";
        case Da:
            return "Suspense";
        case Fa:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case tf:
                return (e.displayName || "Context") + ".Consumer";
            case ef:
                return (e._context.displayName || "Context") + ".Provider";
            case Wu:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Ku:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : $a(e.type) || "Memo"
                );
            case xn:
                (t = e._payload), (e = e._init);
                try {
                    return $a(e(t));
                } catch {}
        }
    return null;
}
function fm(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return $a(t);
        case 8:
            return t === Vu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Fn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function rf(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function pm(e) {
    var t = rf(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var l = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (i) {
                    (r = "" + i), o.call(this, i);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (i) {
                    r = "" + i;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function xo(e) {
    e._valueTracker || (e._valueTracker = pm(e));
}
function lf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = rf(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Go(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function za(e, t) {
    var n = t.checked;
    return xe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function ec(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Fn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function of(e, t) {
    (t = t.checked), t != null && bu(e, "checked", t, !1);
}
function Aa(e, t) {
    of(e, t);
    var n = Fn(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Ua(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Ua(e, t.type, Fn(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function tc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Ua(e, t, n) {
    (t !== "number" || Go(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rl = Array.isArray;
function Br(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Fn(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = !0);
    }
}
function Ba(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
    return xe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function nc(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(_(92));
            if (Rl(n)) {
                if (1 < n.length) throw Error(_(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Fn(n) };
}
function af(e, t) {
    var n = Fn(t.value),
        r = Fn(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function rc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function uf(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Ha(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? uf(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var So,
    sf = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, l);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                So = So || document.createElement("div"),
                    So.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = So.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Bl(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Ll = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    hm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ll).forEach(function (e) {
    hm.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ll[t] = Ll[e]);
    });
});
function cf(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (Ll.hasOwnProperty(e) && Ll[e])
        ? ("" + t).trim()
        : t + "px";
}
function df(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = cf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, l) : (e[n] = l);
        }
}
var mm = xe(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function ba(e, t) {
    if (t) {
        if (mm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(_(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(_(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(_(62));
    }
}
function Va(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
            return !0;
    }
}
var Wa = null;
function Qu(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Ka = null,
    Hr = null,
    br = null;
function lc(e) {
    if ((e = so(e))) {
        if (typeof Ka != "function") throw Error(_(280));
        var t = e.stateNode;
        t && ((t = Ri(t)), Ka(e.stateNode, e.type, t));
    }
}
function ff(e) {
    Hr ? (br ? br.push(e) : (br = [e])) : (Hr = e);
}
function pf() {
    if (Hr) {
        var e = Hr,
            t = br;
        if (((br = Hr = null), lc(e), t))
            for (e = 0; e < t.length; e++) lc(t[e]);
    }
}
function hf(e, t) {
    return e(t);
}
function mf() {}
var qi = !1;
function vf(e, t, n) {
    if (qi) return e(t, n);
    qi = !0;
    try {
        return hf(e, t, n);
    } finally {
        (qi = !1), (Hr !== null || br !== null) && (mf(), pf());
    }
}
function Hl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ri(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(_(231, t, typeof n));
    return n;
}
var Qa = !1;
if (nn)
    try {
        var ml = {};
        Object.defineProperty(ml, "passive", {
            get: function () {
                Qa = !0;
            },
        }),
            window.addEventListener("test", ml, ml),
            window.removeEventListener("test", ml, ml);
    } catch {
        Qa = !1;
    }
function vm(e, t, n, r, l, o, i, a, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (f) {
        this.onError(f);
    }
}
var Tl = !1,
    Xo = null,
    Zo = !1,
    Ya = null,
    gm = {
        onError: function (e) {
            (Tl = !0), (Xo = e);
        },
    };
function ym(e, t, n, r, l, o, i, a, u) {
    (Tl = !1), (Xo = null), vm.apply(gm, arguments);
}
function wm(e, t, n, r, l, o, i, a, u) {
    if ((ym.apply(this, arguments), Tl)) {
        if (Tl) {
            var s = Xo;
            (Tl = !1), (Xo = null);
        } else throw Error(_(198));
        Zo || ((Zo = !0), (Ya = s));
    }
}
function gr(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function gf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function oc(e) {
    if (gr(e) !== e) throw Error(_(188));
}
function xm(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = gr(e)), t === null)) throw Error(_(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (((r = l.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === n) return oc(l), e;
                if (o === r) return oc(l), t;
                o = o.sibling;
            }
            throw Error(_(188));
        }
        if (n.return !== r.return) (n = l), (r = o);
        else {
            for (var i = !1, a = l.child; a; ) {
                if (a === n) {
                    (i = !0), (n = l), (r = o);
                    break;
                }
                if (a === r) {
                    (i = !0), (r = l), (n = o);
                    break;
                }
                a = a.sibling;
            }
            if (!i) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        (i = !0), (n = o), (r = l);
                        break;
                    }
                    if (a === r) {
                        (i = !0), (r = o), (n = l);
                        break;
                    }
                    a = a.sibling;
                }
                if (!i) throw Error(_(189));
            }
        }
        if (n.alternate !== r) throw Error(_(190));
    }
    if (n.tag !== 3) throw Error(_(188));
    return n.stateNode.current === n ? e : t;
}
function yf(e) {
    return (e = xm(e)), e !== null ? wf(e) : null;
}
function wf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = wf(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var xf = dt.unstable_scheduleCallback,
    ic = dt.unstable_cancelCallback,
    Sm = dt.unstable_shouldYield,
    Em = dt.unstable_requestPaint,
    Ce = dt.unstable_now,
    km = dt.unstable_getCurrentPriorityLevel,
    Yu = dt.unstable_ImmediatePriority,
    Sf = dt.unstable_UserBlockingPriority,
    Jo = dt.unstable_NormalPriority,
    Cm = dt.unstable_LowPriority,
    Ef = dt.unstable_IdlePriority,
    Ei = null,
    Bt = null;
function Pm(e) {
    if (Bt && typeof Bt.onCommitFiberRoot == "function")
        try {
            Bt.onCommitFiberRoot(
                Ei,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Tt = Math.clz32 ? Math.clz32 : Mm,
    Rm = Math.log,
    Nm = Math.LN2;
function Mm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Rm(e) / Nm) | 0)) | 0;
}
var Eo = 64,
    ko = 4194304;
function Nl(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function qo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var a = i & ~l;
        a !== 0 ? (r = Nl(a)) : ((o &= i), o !== 0 && (r = Nl(o)));
    } else (i = n & ~l), i !== 0 ? (r = Nl(i)) : o !== 0 && (r = Nl(o));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & l) &&
        ((l = r & -r),
        (o = t & -t),
        l >= o || (l === 16 && (o & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
}
function _m(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Lm(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var i = 31 - Tt(o),
            a = 1 << i,
            u = l[i];
        u === -1
            ? (!(a & n) || a & r) && (l[i] = _m(a, t))
            : u <= t && (e.expiredLanes |= a),
            (o &= ~a);
    }
}
function Ga(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function kf() {
    var e = Eo;
    return (Eo <<= 1), !(Eo & 4194240) && (Eo = 64), e;
}
function ea(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function ao(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Tt(t)),
        (e[t] = n);
}
function Tm(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Tt(n),
            o = 1 << l;
        (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
}
function Gu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Tt(n),
            l = 1 << r;
        (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
}
var oe = 0;
function Cf(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Pf,
    Xu,
    Rf,
    Nf,
    Mf,
    Xa = !1,
    Co = [],
    Nn = null,
    Mn = null,
    _n = null,
    bl = new Map(),
    Vl = new Map(),
    En = [],
    Om =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function ac(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Nn = null;
            break;
        case "dragenter":
        case "dragleave":
            Mn = null;
            break;
        case "mouseover":
        case "mouseout":
            _n = null;
            break;
        case "pointerover":
        case "pointerout":
            bl.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Vl.delete(t.pointerId);
    }
}
function vl(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [l],
          }),
          t !== null && ((t = so(t)), t !== null && Xu(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          l !== null && t.indexOf(l) === -1 && t.push(l),
          e);
}
function jm(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return (Nn = vl(Nn, e, t, n, r, l)), !0;
        case "dragenter":
            return (Mn = vl(Mn, e, t, n, r, l)), !0;
        case "mouseover":
            return (_n = vl(_n, e, t, n, r, l)), !0;
        case "pointerover":
            var o = l.pointerId;
            return bl.set(o, vl(bl.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return (
                (o = l.pointerId),
                Vl.set(o, vl(Vl.get(o) || null, e, t, n, r, l)),
                !0
            );
    }
    return !1;
}
function _f(e) {
    var t = nr(e.target);
    if (t !== null) {
        var n = gr(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = gf(n)), t !== null)) {
                    (e.blockedOn = t),
                        Mf(e.priority, function () {
                            Rf(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Ao(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Za(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Wa = r), n.target.dispatchEvent(r), (Wa = null);
        } else return (t = so(n)), t !== null && Xu(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function uc(e, t, n) {
    Ao(e) && n.delete(t);
}
function Im() {
    (Xa = !1),
        Nn !== null && Ao(Nn) && (Nn = null),
        Mn !== null && Ao(Mn) && (Mn = null),
        _n !== null && Ao(_n) && (_n = null),
        bl.forEach(uc),
        Vl.forEach(uc);
}
function gl(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Xa ||
            ((Xa = !0),
            dt.unstable_scheduleCallback(dt.unstable_NormalPriority, Im)));
}
function Wl(e) {
    function t(l) {
        return gl(l, e);
    }
    if (0 < Co.length) {
        gl(Co[0], e);
        for (var n = 1; n < Co.length; n++) {
            var r = Co[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Nn !== null && gl(Nn, e),
            Mn !== null && gl(Mn, e),
            _n !== null && gl(_n, e),
            bl.forEach(t),
            Vl.forEach(t),
            n = 0;
        n < En.length;
        n++
    )
        (r = En[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < En.length && ((n = En[0]), n.blockedOn === null); )
        _f(n), n.blockedOn === null && En.shift();
}
var Vr = un.ReactCurrentBatchConfig,
    ei = !0;
function Dm(e, t, n, r) {
    var l = oe,
        o = Vr.transition;
    Vr.transition = null;
    try {
        (oe = 1), Zu(e, t, n, r);
    } finally {
        (oe = l), (Vr.transition = o);
    }
}
function Fm(e, t, n, r) {
    var l = oe,
        o = Vr.transition;
    Vr.transition = null;
    try {
        (oe = 4), Zu(e, t, n, r);
    } finally {
        (oe = l), (Vr.transition = o);
    }
}
function Zu(e, t, n, r) {
    if (ei) {
        var l = Za(e, t, n, r);
        if (l === null) ca(e, t, r, ti, n), ac(e, r);
        else if (jm(l, e, t, n, r)) r.stopPropagation();
        else if ((ac(e, r), t & 4 && -1 < Om.indexOf(e))) {
            for (; l !== null; ) {
                var o = so(l);
                if (
                    (o !== null && Pf(o),
                    (o = Za(e, t, n, r)),
                    o === null && ca(e, t, r, ti, n),
                    o === l)
                )
                    break;
                l = o;
            }
            l !== null && r.stopPropagation();
        } else ca(e, t, r, null, n);
    }
}
var ti = null;
function Za(e, t, n, r) {
    if (((ti = null), (e = Qu(r)), (e = nr(e)), e !== null))
        if (((t = gr(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = gf(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (ti = e), null;
}
function Lf(e) {
    switch (e) {
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
            return 1;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (km()) {
                case Yu:
                    return 1;
                case Sf:
                    return 4;
                case Jo:
                case Cm:
                    return 16;
                case Ef:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Cn = null,
    Ju = null,
    Uo = null;
function Tf() {
    if (Uo) return Uo;
    var e,
        t = Ju,
        n = t.length,
        r,
        l = "value" in Cn ? Cn.value : Cn.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Uo = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Bo(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Po() {
    return !0;
}
function sc() {
    return !1;
}
function pt(e) {
    function t(n, r, l, o, i) {
        (this._reactName = n),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null);
        for (var a in e)
            e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? Po
                : sc),
            (this.isPropagationStopped = sc),
            this
        );
    }
    return (
        xe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Po));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Po));
            },
            persist: function () {},
            isPersistent: Po,
        }),
        t
    );
}
var ll = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    qu = pt(ll),
    uo = xe({}, ll, { view: 0, detail: 0 }),
    $m = pt(uo),
    ta,
    na,
    yl,
    ki = xe({}, uo, {
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
        getModifierState: es,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== yl &&
                      (yl && e.type === "mousemove"
                          ? ((ta = e.screenX - yl.screenX),
                            (na = e.screenY - yl.screenY))
                          : (na = ta = 0),
                      (yl = e)),
                  ta);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : na;
        },
    }),
    cc = pt(ki),
    zm = xe({}, ki, { dataTransfer: 0 }),
    Am = pt(zm),
    Um = xe({}, uo, { relatedTarget: 0 }),
    ra = pt(Um),
    Bm = xe({}, ll, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hm = pt(Bm),
    bm = xe({}, ll, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    Vm = pt(bm),
    Wm = xe({}, ll, { data: 0 }),
    dc = pt(Wm),
    Km = {
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
        MozPrintableKey: "Unidentified",
    },
    Qm = {
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
        224: "Meta",
    },
    Ym = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Gm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Ym[e])
        ? !!t[e]
        : !1;
}
function es() {
    return Gm;
}
var Xm = xe({}, uo, {
        key: function (e) {
            if (e.key) {
                var t = Km[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Bo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? Qm[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: es,
        charCode: function (e) {
            return e.type === "keypress" ? Bo(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Bo(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    Zm = pt(Xm),
    Jm = xe({}, ki, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    fc = pt(Jm),
    qm = xe({}, uo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: es,
    }),
    ev = pt(qm),
    tv = xe({}, ll, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nv = pt(tv),
    rv = xe({}, ki, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    lv = pt(rv),
    ov = [9, 13, 27, 32],
    ts = nn && "CompositionEvent" in window,
    Ol = null;
nn && "documentMode" in document && (Ol = document.documentMode);
var iv = nn && "TextEvent" in window && !Ol,
    Of = nn && (!ts || (Ol && 8 < Ol && 11 >= Ol)),
    pc = String.fromCharCode(32),
    hc = !1;
function jf(e, t) {
    switch (e) {
        case "keyup":
            return ov.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function If(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mr = !1;
function av(e, t) {
    switch (e) {
        case "compositionend":
            return If(t);
        case "keypress":
            return t.which !== 32 ? null : ((hc = !0), pc);
        case "textInput":
            return (e = t.data), e === pc && hc ? null : e;
        default:
            return null;
    }
}
function uv(e, t) {
    if (Mr)
        return e === "compositionend" || (!ts && jf(e, t))
            ? ((e = Tf()), (Uo = Ju = Cn = null), (Mr = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Of && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var sv = {
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
    week: !0,
};
function mc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sv[e.type] : t === "textarea";
}
function Df(e, t, n, r) {
    ff(r),
        (t = ni(t, "onChange")),
        0 < t.length &&
            ((n = new qu("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var jl = null,
    Kl = null;
function cv(e) {
    Kf(e, 0);
}
function Ci(e) {
    var t = Tr(e);
    if (lf(t)) return e;
}
function dv(e, t) {
    if (e === "change") return t;
}
var Ff = !1;
if (nn) {
    var la;
    if (nn) {
        var oa = "oninput" in document;
        if (!oa) {
            var vc = document.createElement("div");
            vc.setAttribute("oninput", "return;"),
                (oa = typeof vc.oninput == "function");
        }
        la = oa;
    } else la = !1;
    Ff = la && (!document.documentMode || 9 < document.documentMode);
}
function gc() {
    jl && (jl.detachEvent("onpropertychange", $f), (Kl = jl = null));
}
function $f(e) {
    if (e.propertyName === "value" && Ci(Kl)) {
        var t = [];
        Df(t, Kl, e, Qu(e)), vf(cv, t);
    }
}
function fv(e, t, n) {
    e === "focusin"
        ? (gc(), (jl = t), (Kl = n), jl.attachEvent("onpropertychange", $f))
        : e === "focusout" && gc();
}
function pv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ci(Kl);
}
function hv(e, t) {
    if (e === "click") return Ci(t);
}
function mv(e, t) {
    if (e === "input" || e === "change") return Ci(t);
}
function vv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jt = typeof Object.is == "function" ? Object.is : vv;
function Ql(e, t) {
    if (jt(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!ja.call(t, l) || !jt(e[l], t[l])) return !1;
    }
    return !0;
}
function yc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function wc(e, t) {
    var n = yc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = yc(n);
    }
}
function zf(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? zf(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Af() {
    for (var e = window, t = Go(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Go(e.document);
    }
    return t;
}
function ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function gv(e) {
    var t = Af(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        zf(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && ns(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                (r = r.end === void 0 ? o : Math.min(r.end, l)),
                    !e.extend && o > r && ((l = r), (r = o), (o = l)),
                    (l = wc(n, o));
                var i = wc(n, r);
                l &&
                    i &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== i.node ||
                        e.focusOffset !== i.offset) &&
                    ((t = t.createRange()),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(t), e.extend(i.node, i.offset))
                        : (t.setEnd(i.node, i.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var yv = nn && "documentMode" in document && 11 >= document.documentMode,
    _r = null,
    Ja = null,
    Il = null,
    qa = !1;
function xc(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qa ||
        _r == null ||
        _r !== Go(r) ||
        ((r = _r),
        "selectionStart" in r && ns(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Il && Ql(Il, r)) ||
            ((Il = r),
            (r = ni(Ja, "onSelect")),
            0 < r.length &&
                ((t = new qu("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = _r))));
}
function Ro(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var Lr = {
        animationend: Ro("Animation", "AnimationEnd"),
        animationiteration: Ro("Animation", "AnimationIteration"),
        animationstart: Ro("Animation", "AnimationStart"),
        transitionend: Ro("Transition", "TransitionEnd"),
    },
    ia = {},
    Uf = {};
nn &&
    ((Uf = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Lr.animationend.animation,
        delete Lr.animationiteration.animation,
        delete Lr.animationstart.animation),
    "TransitionEvent" in window || delete Lr.transitionend.transition);
function Pi(e) {
    if (ia[e]) return ia[e];
    if (!Lr[e]) return e;
    var t = Lr[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Uf) return (ia[e] = t[n]);
    return e;
}
var Bf = Pi("animationend"),
    Hf = Pi("animationiteration"),
    bf = Pi("animationstart"),
    Vf = Pi("transitionend"),
    Wf = new Map(),
    Sc =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function An(e, t) {
    Wf.set(e, t), vr(t, [e]);
}
for (var aa = 0; aa < Sc.length; aa++) {
    var ua = Sc[aa],
        wv = ua.toLowerCase(),
        xv = ua[0].toUpperCase() + ua.slice(1);
    An(wv, "on" + xv);
}
An(Bf, "onAnimationEnd");
An(Hf, "onAnimationIteration");
An(bf, "onAnimationStart");
An("dblclick", "onDoubleClick");
An("focusin", "onFocus");
An("focusout", "onBlur");
An(Vf, "onTransitionEnd");
Yr("onMouseEnter", ["mouseout", "mouseover"]);
Yr("onMouseLeave", ["mouseout", "mouseover"]);
Yr("onPointerEnter", ["pointerout", "pointerover"]);
Yr("onPointerLeave", ["pointerout", "pointerover"]);
vr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
vr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ml =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    Sv = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Ml)
    );
function Ec(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), wm(r, t, void 0, e), (e.currentTarget = null);
}
function Kf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i],
                        u = a.instance,
                        s = a.currentTarget;
                    if (((a = a.listener), u !== o && l.isPropagationStopped()))
                        break e;
                    Ec(l, a, s), (o = u);
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (
                        ((a = r[i]),
                        (u = a.instance),
                        (s = a.currentTarget),
                        (a = a.listener),
                        u !== o && l.isPropagationStopped())
                    )
                        break e;
                    Ec(l, a, s), (o = u);
                }
        }
    }
    if (Zo) throw ((e = Ya), (Zo = !1), (Ya = null), e);
}
function de(e, t) {
    var n = t[lu];
    n === void 0 && (n = t[lu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Qf(t, e, 2, !1), n.add(r));
}
function sa(e, t, n) {
    var r = 0;
    t && (r |= 4), Qf(n, e, r, t);
}
var No = "_reactListening" + Math.random().toString(36).slice(2);
function Yl(e) {
    if (!e[No]) {
        (e[No] = !0),
            qd.forEach(function (n) {
                n !== "selectionchange" &&
                    (Sv.has(n) || sa(n, !1, e), sa(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[No] || ((t[No] = !0), sa("selectionchange", !1, t));
    }
}
function Qf(e, t, n, r) {
    switch (Lf(t)) {
        case 1:
            var l = Dm;
            break;
        case 4:
            l = Fm;
            break;
        default:
            l = Zu;
    }
    (n = l.bind(null, t, n, e)),
        (l = void 0),
        !Qa ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: l })
                : e.addEventListener(t, n, !0)
            : l !== void 0
            ? e.addEventListener(t, n, { passive: l })
            : e.addEventListener(t, n, !1);
}
function ca(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var u = i.tag;
                        if (
                            (u === 3 || u === 4) &&
                            ((u = i.stateNode.containerInfo),
                            u === l || (u.nodeType === 8 && u.parentNode === l))
                        )
                            return;
                        i = i.return;
                    }
                for (; a !== null; ) {
                    if (((i = nr(a)), i === null)) return;
                    if (((u = i.tag), u === 5 || u === 6)) {
                        r = o = i;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    vf(function () {
        var s = o,
            f = Qu(n),
            h = [];
        e: {
            var m = Wf.get(e);
            if (m !== void 0) {
                var y = qu,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (Bo(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = Zm;
                        break;
                    case "focusin":
                        (v = "focus"), (y = ra);
                        break;
                    case "focusout":
                        (v = "blur"), (y = ra);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = ra;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = cc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Am;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = ev;
                        break;
                    case Bf:
                    case Hf:
                    case bf:
                        y = Hm;
                        break;
                    case Vf:
                        y = nv;
                        break;
                    case "scroll":
                        y = $m;
                        break;
                    case "wheel":
                        y = lv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = Vm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = fc;
                }
                var w = (t & 4) !== 0,
                    S = !w && e === "scroll",
                    c = w ? (m !== null ? m + "Capture" : null) : m;
                w = [];
                for (var d = s, g; d !== null; ) {
                    g = d;
                    var x = g.stateNode;
                    if (
                        (g.tag === 5 &&
                            x !== null &&
                            ((g = x),
                            c !== null &&
                                ((x = Hl(d, c)),
                                x != null && w.push(Gl(d, x, g)))),
                        S)
                    )
                        break;
                    d = d.return;
                }
                0 < w.length &&
                    ((m = new y(m, v, null, n, f)),
                    h.push({ event: m, listeners: w }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === "mouseover" || e === "pointerover"),
                    (y = e === "mouseout" || e === "pointerout"),
                    m &&
                        n !== Wa &&
                        (v = n.relatedTarget || n.fromElement) &&
                        (nr(v) || v[rn]))
                )
                    break e;
                if (
                    (y || m) &&
                    ((m =
                        f.window === f
                            ? f
                            : (m = f.ownerDocument)
                            ? m.defaultView || m.parentWindow
                            : window),
                    y
                        ? ((v = n.relatedTarget || n.toElement),
                          (y = s),
                          (v = v ? nr(v) : null),
                          v !== null &&
                              ((S = gr(v)),
                              v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                              (v = null))
                        : ((y = null), (v = s)),
                    y !== v)
                ) {
                    if (
                        ((w = cc),
                        (x = "onMouseLeave"),
                        (c = "onMouseEnter"),
                        (d = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((w = fc),
                            (x = "onPointerLeave"),
                            (c = "onPointerEnter"),
                            (d = "pointer")),
                        (S = y == null ? m : Tr(y)),
                        (g = v == null ? m : Tr(v)),
                        (m = new w(x, d + "leave", y, n, f)),
                        (m.target = S),
                        (m.relatedTarget = g),
                        (x = null),
                        nr(f) === s &&
                            ((w = new w(c, d + "enter", v, n, f)),
                            (w.target = g),
                            (w.relatedTarget = S),
                            (x = w)),
                        (S = x),
                        y && v)
                    )
                        t: {
                            for (w = y, c = v, d = 0, g = w; g; g = Cr(g)) d++;
                            for (g = 0, x = c; x; x = Cr(x)) g++;
                            for (; 0 < d - g; ) (w = Cr(w)), d--;
                            for (; 0 < g - d; ) (c = Cr(c)), g--;
                            for (; d--; ) {
                                if (
                                    w === c ||
                                    (c !== null && w === c.alternate)
                                )
                                    break t;
                                (w = Cr(w)), (c = Cr(c));
                            }
                            w = null;
                        }
                    else w = null;
                    y !== null && kc(h, m, y, w, !1),
                        v !== null && S !== null && kc(h, S, v, w, !0);
                }
            }
            e: {
                if (
                    ((m = s ? Tr(s) : window),
                    (y = m.nodeName && m.nodeName.toLowerCase()),
                    y === "select" || (y === "input" && m.type === "file"))
                )
                    var P = dv;
                else if (mc(m))
                    if (Ff) P = mv;
                    else {
                        P = pv;
                        var R = fv;
                    }
                else
                    (y = m.nodeName) &&
                        y.toLowerCase() === "input" &&
                        (m.type === "checkbox" || m.type === "radio") &&
                        (P = hv);
                if (P && (P = P(e, s))) {
                    Df(h, P, n, f);
                    break e;
                }
                R && R(e, m, s),
                    e === "focusout" &&
                        (R = m._wrapperState) &&
                        R.controlled &&
                        m.type === "number" &&
                        Ua(m, "number", m.value);
            }
            switch (((R = s ? Tr(s) : window), e)) {
                case "focusin":
                    (mc(R) || R.contentEditable === "true") &&
                        ((_r = R), (Ja = s), (Il = null));
                    break;
                case "focusout":
                    Il = Ja = _r = null;
                    break;
                case "mousedown":
                    qa = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (qa = !1), xc(h, n, f);
                    break;
                case "selectionchange":
                    if (yv) break;
                case "keydown":
                case "keyup":
                    xc(h, n, f);
            }
            var M;
            if (ts)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var T = "onCompositionStart";
                            break e;
                        case "compositionend":
                            T = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            T = "onCompositionUpdate";
                            break e;
                    }
                    T = void 0;
                }
            else
                Mr
                    ? jf(e, n) && (T = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (T = "onCompositionStart");
            T &&
                (Of &&
                    n.locale !== "ko" &&
                    (Mr || T !== "onCompositionStart"
                        ? T === "onCompositionEnd" && Mr && (M = Tf())
                        : ((Cn = f),
                          (Ju = "value" in Cn ? Cn.value : Cn.textContent),
                          (Mr = !0))),
                (R = ni(s, T)),
                0 < R.length &&
                    ((T = new dc(T, e, null, n, f)),
                    h.push({ event: T, listeners: R }),
                    M
                        ? (T.data = M)
                        : ((M = If(n)), M !== null && (T.data = M)))),
                (M = iv ? av(e, n) : uv(e, n)) &&
                    ((s = ni(s, "onBeforeInput")),
                    0 < s.length &&
                        ((f = new dc(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            f
                        )),
                        h.push({ event: f, listeners: s }),
                        (f.data = M)));
        }
        Kf(h, t);
    });
}
function Gl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function ni(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 &&
            o !== null &&
            ((l = o),
            (o = Hl(e, n)),
            o != null && r.unshift(Gl(e, o, l)),
            (o = Hl(e, t)),
            o != null && r.push(Gl(e, o, l))),
            (e = e.return);
    }
    return r;
}
function Cr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function kc(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var a = n,
            u = a.alternate,
            s = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 &&
            s !== null &&
            ((a = s),
            l
                ? ((u = Hl(n, o)), u != null && i.unshift(Gl(n, u, a)))
                : l || ((u = Hl(n, o)), u != null && i.push(Gl(n, u, a)))),
            (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ev = /\r\n?/g,
    kv = /\u0000|\uFFFD/g;
function Cc(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Ev,
            `
`
        )
        .replace(kv, "");
}
function Mo(e, t, n) {
    if (((t = Cc(t)), Cc(e) !== t && n)) throw Error(_(425));
}
function ri() {}
var eu = null,
    tu = null;
function nu(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var ru = typeof setTimeout == "function" ? setTimeout : void 0,
    Cv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Pc = typeof Promise == "function" ? Promise : void 0,
    Pv =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Pc < "u"
            ? function (e) {
                  return Pc.resolve(null).then(e).catch(Rv);
              }
            : ru;
function Rv(e) {
    setTimeout(function () {
        throw e;
    });
}
function da(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(l), Wl(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = l;
    } while (n);
    Wl(t);
}
function Ln(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Rc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var ol = Math.random().toString(36).slice(2),
    At = "__reactFiber$" + ol,
    Xl = "__reactProps$" + ol,
    rn = "__reactContainer$" + ol,
    lu = "__reactEvents$" + ol,
    Nv = "__reactListeners$" + ol,
    Mv = "__reactHandles$" + ol;
function nr(e) {
    var t = e[At];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[rn] || n[At])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = Rc(e); e !== null; ) {
                    if ((n = e[At])) return n;
                    e = Rc(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function so(e) {
    return (
        (e = e[At] || e[rn]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function Tr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(_(33));
}
function Ri(e) {
    return e[Xl] || null;
}
var ou = [],
    Or = -1;
function Un(e) {
    return { current: e };
}
function fe(e) {
    0 > Or || ((e.current = ou[Or]), (ou[Or] = null), Or--);
}
function ce(e, t) {
    Or++, (ou[Or] = e.current), (e.current = t);
}
var $n = {},
    Ye = Un($n),
    lt = Un(!1),
    cr = $n;
function Gr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return $n;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function ot(e) {
    return (e = e.childContextTypes), e != null;
}
function li() {
    fe(lt), fe(Ye);
}
function Nc(e, t, n) {
    if (Ye.current !== $n) throw Error(_(168));
    ce(Ye, t), ce(lt, n);
}
function Yf(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(_(108, fm(e) || "Unknown", l));
    return xe({}, n, r);
}
function oi(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            $n),
        (cr = Ye.current),
        ce(Ye, e),
        ce(lt, lt.current),
        !0
    );
}
function Mc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(_(169));
    n
        ? ((e = Yf(e, t, cr)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          fe(lt),
          fe(Ye),
          ce(Ye, e))
        : fe(lt),
        ce(lt, n);
}
var Gt = null,
    Ni = !1,
    fa = !1;
function Gf(e) {
    Gt === null ? (Gt = [e]) : Gt.push(e);
}
function _v(e) {
    (Ni = !0), Gf(e);
}
function Bn() {
    if (!fa && Gt !== null) {
        fa = !0;
        var e = 0,
            t = oe;
        try {
            var n = Gt;
            for (oe = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Gt = null), (Ni = !1);
        } catch (l) {
            throw (Gt !== null && (Gt = Gt.slice(e + 1)), xf(Yu, Bn), l);
        } finally {
            (oe = t), (fa = !1);
        }
    }
    return null;
}
var jr = [],
    Ir = 0,
    ii = null,
    ai = 0,
    vt = [],
    gt = 0,
    dr = null,
    Xt = 1,
    Zt = "";
function qn(e, t) {
    (jr[Ir++] = ai), (jr[Ir++] = ii), (ii = e), (ai = t);
}
function Xf(e, t, n) {
    (vt[gt++] = Xt), (vt[gt++] = Zt), (vt[gt++] = dr), (dr = e);
    var r = Xt;
    e = Zt;
    var l = 32 - Tt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - Tt(t) + l;
    if (30 < o) {
        var i = l - (l % 5);
        (o = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (l -= i),
            (Xt = (1 << (32 - Tt(t) + l)) | (n << l) | r),
            (Zt = o + e);
    } else (Xt = (1 << o) | (n << l) | r), (Zt = e);
}
function rs(e) {
    e.return !== null && (qn(e, 1), Xf(e, 1, 0));
}
function ls(e) {
    for (; e === ii; )
        (ii = jr[--Ir]), (jr[Ir] = null), (ai = jr[--Ir]), (jr[Ir] = null);
    for (; e === dr; )
        (dr = vt[--gt]),
            (vt[gt] = null),
            (Zt = vt[--gt]),
            (vt[gt] = null),
            (Xt = vt[--gt]),
            (vt[gt] = null);
}
var ct = null,
    st = null,
    me = !1,
    _t = null;
function Zf(e, t) {
    var n = yt(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function _c(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (ct = e), (st = Ln(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (ct = e), (st = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = dr !== null ? { id: Xt, overflow: Zt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = yt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ct = e),
                      (st = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function iu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function au(e) {
    if (me) {
        var t = st;
        if (t) {
            var n = t;
            if (!_c(e, t)) {
                if (iu(e)) throw Error(_(418));
                t = Ln(n.nextSibling);
                var r = ct;
                t && _c(e, t)
                    ? Zf(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (me = !1), (ct = e));
            }
        } else {
            if (iu(e)) throw Error(_(418));
            (e.flags = (e.flags & -4097) | 2), (me = !1), (ct = e);
        }
    }
}
function Lc(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    ct = e;
}
function _o(e) {
    if (e !== ct) return !1;
    if (!me) return Lc(e), (me = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !nu(e.type, e.memoizedProps))),
        t && (t = st))
    ) {
        if (iu(e)) throw (Jf(), Error(_(418)));
        for (; t; ) Zf(e, t), (t = Ln(t.nextSibling));
    }
    if ((Lc(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(_(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            st = Ln(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            st = null;
        }
    } else st = ct ? Ln(e.stateNode.nextSibling) : null;
    return !0;
}
function Jf() {
    for (var e = st; e; ) e = Ln(e.nextSibling);
}
function Xr() {
    (st = ct = null), (me = !1);
}
function os(e) {
    _t === null ? (_t = [e]) : _t.push(e);
}
var Lv = un.ReactCurrentBatchConfig;
function Rt(e, t) {
    if (e && e.defaultProps) {
        (t = xe({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var ui = Un(null),
    si = null,
    Dr = null,
    is = null;
function as() {
    is = Dr = si = null;
}
function us(e) {
    var t = ui.current;
    fe(ui), (e._currentValue = t);
}
function uu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function Wr(e, t) {
    (si = e),
        (is = Dr = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (rt = !0), (e.firstContext = null));
}
function St(e) {
    var t = e._currentValue;
    if (is !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Dr === null)) {
            if (si === null) throw Error(_(308));
            (Dr = e), (si.dependencies = { lanes: 0, firstContext: e });
        } else Dr = Dr.next = e;
    return t;
}
var rr = null;
function ss(e) {
    rr === null ? (rr = [e]) : rr.push(e);
}
function qf(e, t, n, r) {
    var l = t.interleaved;
    return (
        l === null ? ((n.next = n), ss(t)) : ((n.next = l.next), (l.next = n)),
        (t.interleaved = n),
        ln(e, r)
    );
}
function ln(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Sn = !1;
function cs(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function ep(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function en(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function Tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), J & 2)) {
        var l = r.pending;
        return (
            l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            ln(e, n)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((t.next = t), ss(r)) : ((t.next = l.next), (l.next = t)),
        (r.interleaved = t),
        ln(e, n)
    );
}
function Ho(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gu(e, n);
    }
}
function Tc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
            } while (n !== null);
            o === null ? (l = o = t) : (o = o.next = t);
        } else l = o = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function ci(e, t, n, r) {
    var l = e.updateQueue;
    Sn = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a,
            s = u.next;
        (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
        var f = e.alternate;
        f !== null &&
            ((f = f.updateQueue),
            (a = f.lastBaseUpdate),
            a !== i &&
                (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
                (f.lastBaseUpdate = u)));
    }
    if (o !== null) {
        var h = l.baseState;
        (i = 0), (f = s = u = null), (a = o);
        do {
            var m = a.lane,
                y = a.eventTime;
            if ((r & m) === m) {
                f !== null &&
                    (f = f.next =
                        {
                            eventTime: y,
                            lane: 0,
                            tag: a.tag,
                            payload: a.payload,
                            callback: a.callback,
                            next: null,
                        });
                e: {
                    var v = e,
                        w = a;
                    switch (((m = t), (y = n), w.tag)) {
                        case 1:
                            if (((v = w.payload), typeof v == "function")) {
                                h = v.call(y, h, m);
                                break e;
                            }
                            h = v;
                            break e;
                        case 3:
                            v.flags = (v.flags & -65537) | 128;
                        case 0:
                            if (
                                ((v = w.payload),
                                (m =
                                    typeof v == "function"
                                        ? v.call(y, h, m)
                                        : v),
                                m == null)
                            )
                                break e;
                            h = xe({}, h, m);
                            break e;
                        case 2:
                            Sn = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64),
                    (m = l.effects),
                    m === null ? (l.effects = [a]) : m.push(a));
            } else
                (y = {
                    eventTime: y,
                    lane: m,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    f === null ? ((s = f = y), (u = h)) : (f = f.next = y),
                    (i |= m);
            if (((a = a.next), a === null)) {
                if (((a = l.shared.pending), a === null)) break;
                (m = a),
                    (a = m.next),
                    (m.next = null),
                    (l.lastBaseUpdate = m),
                    (l.shared.pending = null);
            }
        } while (1);
        if (
            (f === null && (u = h),
            (l.baseState = u),
            (l.firstBaseUpdate = s),
            (l.lastBaseUpdate = f),
            (t = l.shared.interleaved),
            t !== null)
        ) {
            l = t;
            do (i |= l.lane), (l = l.next);
            while (l !== t);
        } else o === null && (l.shared.lanes = 0);
        (pr |= i), (e.lanes = i), (e.memoizedState = h);
    }
}
function Oc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != "function"))
                    throw Error(_(191, l));
                l.call(r);
            }
        }
}
var tp = new Jd.Component().refs;
function su(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : xe({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Mi = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? gr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ze(),
            l = jn(e),
            o = en(r, l);
        (o.payload = t),
            n != null && (o.callback = n),
            (t = Tn(e, o, l)),
            t !== null && (Ot(t, e, l, r), Ho(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ze(),
            l = jn(e),
            o = en(r, l);
        (o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = Tn(e, o, l)),
            t !== null && (Ot(t, e, l, r), Ho(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ze(),
            r = jn(e),
            l = en(n, r);
        (l.tag = 2),
            t != null && (l.callback = t),
            (t = Tn(e, l, r)),
            t !== null && (Ot(t, e, r, n), Ho(t, e, r));
    },
};
function jc(e, t, n, r, l, o, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, o, i)
            : t.prototype && t.prototype.isPureReactComponent
            ? !Ql(n, r) || !Ql(l, o)
            : !0
    );
}
function np(e, t, n) {
    var r = !1,
        l = $n,
        o = t.contextType;
    return (
        typeof o == "object" && o !== null
            ? (o = St(o))
            : ((l = ot(t) ? cr : Ye.current),
              (r = t.contextTypes),
              (o = (r = r != null) ? Gr(e, l) : $n)),
        (t = new t(n, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Mi),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function Ic(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Mi.enqueueReplaceState(t, t.state, null);
}
function cu(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = tp), cs(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
        ? (l.context = St(o))
        : ((o = ot(t) ? cr : Ye.current), (l.context = Gr(e, o))),
        (l.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (su(e, t, o, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" &&
                typeof l.componentWillMount != "function") ||
            ((t = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
                l.UNSAFE_componentWillMount(),
            t !== l.state && Mi.enqueueReplaceState(l, l.state, null),
            ci(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function wl(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(_(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(_(147, e));
            var l = r,
                o = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (i) {
                      var a = l.refs;
                      a === tp && (a = l.refs = {}),
                          i === null ? delete a[o] : (a[o] = i);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != "string") throw Error(_(284));
        if (!n._owner) throw Error(_(290, e));
    }
    return e;
}
function Lo(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            _(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function Dc(e) {
    var t = e._init;
    return t(e._payload);
}
function rp(e) {
    function t(c, d) {
        if (e) {
            var g = c.deletions;
            g === null ? ((c.deletions = [d]), (c.flags |= 16)) : g.push(d);
        }
    }
    function n(c, d) {
        if (!e) return null;
        for (; d !== null; ) t(c, d), (d = d.sibling);
        return null;
    }
    function r(c, d) {
        for (c = new Map(); d !== null; )
            d.key !== null ? c.set(d.key, d) : c.set(d.index, d),
                (d = d.sibling);
        return c;
    }
    function l(c, d) {
        return (c = In(c, d)), (c.index = 0), (c.sibling = null), c;
    }
    function o(c, d, g) {
        return (
            (c.index = g),
            e
                ? ((g = c.alternate),
                  g !== null
                      ? ((g = g.index), g < d ? ((c.flags |= 2), d) : g)
                      : ((c.flags |= 2), d))
                : ((c.flags |= 1048576), d)
        );
    }
    function i(c) {
        return e && c.alternate === null && (c.flags |= 2), c;
    }
    function a(c, d, g, x) {
        return d === null || d.tag !== 6
            ? ((d = wa(g, c.mode, x)), (d.return = c), d)
            : ((d = l(d, g)), (d.return = c), d);
    }
    function u(c, d, g, x) {
        var P = g.type;
        return P === Nr
            ? f(c, d, g.props.children, x, g.key)
            : d !== null &&
              (d.elementType === P ||
                  (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === xn &&
                      Dc(P) === d.type))
            ? ((x = l(d, g.props)), (x.ref = wl(c, d, g)), (x.return = c), x)
            : ((x = Yo(g.type, g.key, g.props, null, c.mode, x)),
              (x.ref = wl(c, d, g)),
              (x.return = c),
              x);
    }
    function s(c, d, g, x) {
        return d === null ||
            d.tag !== 4 ||
            d.stateNode.containerInfo !== g.containerInfo ||
            d.stateNode.implementation !== g.implementation
            ? ((d = xa(g, c.mode, x)), (d.return = c), d)
            : ((d = l(d, g.children || [])), (d.return = c), d);
    }
    function f(c, d, g, x, P) {
        return d === null || d.tag !== 7
            ? ((d = ar(g, c.mode, x, P)), (d.return = c), d)
            : ((d = l(d, g)), (d.return = c), d);
    }
    function h(c, d, g) {
        if ((typeof d == "string" && d !== "") || typeof d == "number")
            return (d = wa("" + d, c.mode, g)), (d.return = c), d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case wo:
                    return (
                        (g = Yo(d.type, d.key, d.props, null, c.mode, g)),
                        (g.ref = wl(c, null, d)),
                        (g.return = c),
                        g
                    );
                case Rr:
                    return (d = xa(d, c.mode, g)), (d.return = c), d;
                case xn:
                    var x = d._init;
                    return h(c, x(d._payload), g);
            }
            if (Rl(d) || hl(d))
                return (d = ar(d, c.mode, g, null)), (d.return = c), d;
            Lo(c, d);
        }
        return null;
    }
    function m(c, d, g, x) {
        var P = d !== null ? d.key : null;
        if ((typeof g == "string" && g !== "") || typeof g == "number")
            return P !== null ? null : a(c, d, "" + g, x);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case wo:
                    return g.key === P ? u(c, d, g, x) : null;
                case Rr:
                    return g.key === P ? s(c, d, g, x) : null;
                case xn:
                    return (P = g._init), m(c, d, P(g._payload), x);
            }
            if (Rl(g) || hl(g)) return P !== null ? null : f(c, d, g, x, null);
            Lo(c, g);
        }
        return null;
    }
    function y(c, d, g, x, P) {
        if ((typeof x == "string" && x !== "") || typeof x == "number")
            return (c = c.get(g) || null), a(d, c, "" + x, P);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case wo:
                    return (
                        (c = c.get(x.key === null ? g : x.key) || null),
                        u(d, c, x, P)
                    );
                case Rr:
                    return (
                        (c = c.get(x.key === null ? g : x.key) || null),
                        s(d, c, x, P)
                    );
                case xn:
                    var R = x._init;
                    return y(c, d, g, R(x._payload), P);
            }
            if (Rl(x) || hl(x))
                return (c = c.get(g) || null), f(d, c, x, P, null);
            Lo(d, x);
        }
        return null;
    }
    function v(c, d, g, x) {
        for (
            var P = null, R = null, M = d, T = (d = 0), O = null;
            M !== null && T < g.length;
            T++
        ) {
            M.index > T ? ((O = M), (M = null)) : (O = M.sibling);
            var j = m(c, M, g[T], x);
            if (j === null) {
                M === null && (M = O);
                break;
            }
            e && M && j.alternate === null && t(c, M),
                (d = o(j, d, T)),
                R === null ? (P = j) : (R.sibling = j),
                (R = j),
                (M = O);
        }
        if (T === g.length) return n(c, M), me && qn(c, T), P;
        if (M === null) {
            for (; T < g.length; T++)
                (M = h(c, g[T], x)),
                    M !== null &&
                        ((d = o(M, d, T)),
                        R === null ? (P = M) : (R.sibling = M),
                        (R = M));
            return me && qn(c, T), P;
        }
        for (M = r(c, M); T < g.length; T++)
            (O = y(M, c, T, g[T], x)),
                O !== null &&
                    (e &&
                        O.alternate !== null &&
                        M.delete(O.key === null ? T : O.key),
                    (d = o(O, d, T)),
                    R === null ? (P = O) : (R.sibling = O),
                    (R = O));
        return (
            e &&
                M.forEach(function (Z) {
                    return t(c, Z);
                }),
            me && qn(c, T),
            P
        );
    }
    function w(c, d, g, x) {
        var P = hl(g);
        if (typeof P != "function") throw Error(_(150));
        if (((g = P.call(g)), g == null)) throw Error(_(151));
        for (
            var R = (P = null), M = d, T = (d = 0), O = null, j = g.next();
            M !== null && !j.done;
            T++, j = g.next()
        ) {
            M.index > T ? ((O = M), (M = null)) : (O = M.sibling);
            var Z = m(c, M, j.value, x);
            if (Z === null) {
                M === null && (M = O);
                break;
            }
            e && M && Z.alternate === null && t(c, M),
                (d = o(Z, d, T)),
                R === null ? (P = Z) : (R.sibling = Z),
                (R = Z),
                (M = O);
        }
        if (j.done) return n(c, M), me && qn(c, T), P;
        if (M === null) {
            for (; !j.done; T++, j = g.next())
                (j = h(c, j.value, x)),
                    j !== null &&
                        ((d = o(j, d, T)),
                        R === null ? (P = j) : (R.sibling = j),
                        (R = j));
            return me && qn(c, T), P;
        }
        for (M = r(c, M); !j.done; T++, j = g.next())
            (j = y(M, c, T, j.value, x)),
                j !== null &&
                    (e &&
                        j.alternate !== null &&
                        M.delete(j.key === null ? T : j.key),
                    (d = o(j, d, T)),
                    R === null ? (P = j) : (R.sibling = j),
                    (R = j));
        return (
            e &&
                M.forEach(function (q) {
                    return t(c, q);
                }),
            me && qn(c, T),
            P
        );
    }
    function S(c, d, g, x) {
        if (
            (typeof g == "object" &&
                g !== null &&
                g.type === Nr &&
                g.key === null &&
                (g = g.props.children),
            typeof g == "object" && g !== null)
        ) {
            switch (g.$$typeof) {
                case wo:
                    e: {
                        for (var P = g.key, R = d; R !== null; ) {
                            if (R.key === P) {
                                if (((P = g.type), P === Nr)) {
                                    if (R.tag === 7) {
                                        n(c, R.sibling),
                                            (d = l(R, g.props.children)),
                                            (d.return = c),
                                            (c = d);
                                        break e;
                                    }
                                } else if (
                                    R.elementType === P ||
                                    (typeof P == "object" &&
                                        P !== null &&
                                        P.$$typeof === xn &&
                                        Dc(P) === R.type)
                                ) {
                                    n(c, R.sibling),
                                        (d = l(R, g.props)),
                                        (d.ref = wl(c, R, g)),
                                        (d.return = c),
                                        (c = d);
                                    break e;
                                }
                                n(c, R);
                                break;
                            } else t(c, R);
                            R = R.sibling;
                        }
                        g.type === Nr
                            ? ((d = ar(g.props.children, c.mode, x, g.key)),
                              (d.return = c),
                              (c = d))
                            : ((x = Yo(
                                  g.type,
                                  g.key,
                                  g.props,
                                  null,
                                  c.mode,
                                  x
                              )),
                              (x.ref = wl(c, d, g)),
                              (x.return = c),
                              (c = x));
                    }
                    return i(c);
                case Rr:
                    e: {
                        for (R = g.key; d !== null; ) {
                            if (d.key === R)
                                if (
                                    d.tag === 4 &&
                                    d.stateNode.containerInfo ===
                                        g.containerInfo &&
                                    d.stateNode.implementation ===
                                        g.implementation
                                ) {
                                    n(c, d.sibling),
                                        (d = l(d, g.children || [])),
                                        (d.return = c),
                                        (c = d);
                                    break e;
                                } else {
                                    n(c, d);
                                    break;
                                }
                            else t(c, d);
                            d = d.sibling;
                        }
                        (d = xa(g, c.mode, x)), (d.return = c), (c = d);
                    }
                    return i(c);
                case xn:
                    return (R = g._init), S(c, d, R(g._payload), x);
            }
            if (Rl(g)) return v(c, d, g, x);
            if (hl(g)) return w(c, d, g, x);
            Lo(c, g);
        }
        return (typeof g == "string" && g !== "") || typeof g == "number"
            ? ((g = "" + g),
              d !== null && d.tag === 6
                  ? (n(c, d.sibling), (d = l(d, g)), (d.return = c), (c = d))
                  : (n(c, d), (d = wa(g, c.mode, x)), (d.return = c), (c = d)),
              i(c))
            : n(c, d);
    }
    return S;
}
var Zr = rp(!0),
    lp = rp(!1),
    co = {},
    Ht = Un(co),
    Zl = Un(co),
    Jl = Un(co);
function lr(e) {
    if (e === co) throw Error(_(174));
    return e;
}
function ds(e, t) {
    switch ((ce(Jl, t), ce(Zl, e), ce(Ht, co), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ha(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Ha(t, e));
    }
    fe(Ht), ce(Ht, t);
}
function Jr() {
    fe(Ht), fe(Zl), fe(Jl);
}
function op(e) {
    lr(Jl.current);
    var t = lr(Ht.current),
        n = Ha(t, e.type);
    t !== n && (ce(Zl, e), ce(Ht, n));
}
function fs(e) {
    Zl.current === e && (fe(Ht), fe(Zl));
}
var ge = Un(0);
function di(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var pa = [];
function ps() {
    for (var e = 0; e < pa.length; e++)
        pa[e]._workInProgressVersionPrimary = null;
    pa.length = 0;
}
var bo = un.ReactCurrentDispatcher,
    ha = un.ReactCurrentBatchConfig,
    fr = 0,
    we = null,
    je = null,
    Fe = null,
    fi = !1,
    Dl = !1,
    ql = 0,
    Tv = 0;
function Ve() {
    throw Error(_(321));
}
function hs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!jt(e[n], t[n])) return !1;
    return !0;
}
function ms(e, t, n, r, l, o) {
    if (
        ((fr = o),
        (we = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (bo.current = e === null || e.memoizedState === null ? Dv : Fv),
        (e = n(r, l)),
        Dl)
    ) {
        o = 0;
        do {
            if (((Dl = !1), (ql = 0), 25 <= o)) throw Error(_(301));
            (o += 1),
                (Fe = je = null),
                (t.updateQueue = null),
                (bo.current = $v),
                (e = n(r, l));
        } while (Dl);
    }
    if (
        ((bo.current = pi),
        (t = je !== null && je.next !== null),
        (fr = 0),
        (Fe = je = we = null),
        (fi = !1),
        t)
    )
        throw Error(_(300));
    return e;
}
function vs() {
    var e = ql !== 0;
    return (ql = 0), e;
}
function zt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return Fe === null ? (we.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
}
function Et() {
    if (je === null) {
        var e = we.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Fe === null ? we.memoizedState : Fe.next;
    if (t !== null) (Fe = t), (je = e);
    else {
        if (e === null) throw Error(_(310));
        (je = e),
            (e = {
                memoizedState: je.memoizedState,
                baseState: je.baseState,
                baseQueue: je.baseQueue,
                queue: je.queue,
                next: null,
            }),
            Fe === null ? (we.memoizedState = Fe = e) : (Fe = Fe.next = e);
    }
    return Fe;
}
function eo(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function ma(e) {
    var t = Et(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = je,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            (l.next = o.next), (o.next = i);
        }
        (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
        (o = l.next), (r = r.baseState);
        var a = (i = null),
            u = null,
            s = o;
        do {
            var f = s.lane;
            if ((fr & f) === f)
                u !== null &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: s.action,
                            hasEagerState: s.hasEagerState,
                            eagerState: s.eagerState,
                            next: null,
                        }),
                    (r = s.hasEagerState ? s.eagerState : e(r, s.action));
            else {
                var h = {
                    lane: f,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null,
                };
                u === null ? ((a = u = h), (i = r)) : (u = u.next = h),
                    (we.lanes |= f),
                    (pr |= f);
            }
            s = s.next;
        } while (s !== null && s !== o);
        u === null ? (i = r) : (u.next = a),
            jt(r, t.memoizedState) || (rt = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        l = e;
        do (o = l.lane), (we.lanes |= o), (pr |= o), (l = l.next);
        while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function va(e) {
    var t = Et(),
        n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = (l = l.next);
        do (o = e(o, i.action)), (i = i.next);
        while (i !== l);
        jt(o, t.memoizedState) || (rt = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o);
    }
    return [o, r];
}
function ip() {}
function ap(e, t) {
    var n = we,
        r = Et(),
        l = t(),
        o = !jt(r.memoizedState, l);
    if (
        (o && ((r.memoizedState = l), (rt = !0)),
        (r = r.queue),
        gs(cp.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (Fe !== null && Fe.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            to(9, sp.bind(null, n, r, l, t), void 0, null),
            $e === null)
        )
            throw Error(_(349));
        fr & 30 || up(n, t, l);
    }
    return l;
}
function up(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = we.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (we.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sp(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), dp(t) && fp(e);
}
function cp(e, t, n) {
    return n(function () {
        dp(t) && fp(e);
    });
}
function dp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !jt(e, n);
    } catch {
        return !0;
    }
}
function fp(e) {
    var t = ln(e, 1);
    t !== null && Ot(t, e, 1, -1);
}
function Fc(e) {
    var t = zt();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: eo,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Iv.bind(null, we, e)),
        [t.memoizedState, e]
    );
}
function to(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = we.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (we.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function pp() {
    return Et().memoizedState;
}
function Vo(e, t, n, r) {
    var l = zt();
    (we.flags |= e),
        (l.memoizedState = to(1 | t, n, void 0, r === void 0 ? null : r));
}
function _i(e, t, n, r) {
    var l = Et();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (je !== null) {
        var i = je.memoizedState;
        if (((o = i.destroy), r !== null && hs(r, i.deps))) {
            l.memoizedState = to(t, n, o, r);
            return;
        }
    }
    (we.flags |= e), (l.memoizedState = to(1 | t, n, o, r));
}
function $c(e, t) {
    return Vo(8390656, 8, e, t);
}
function gs(e, t) {
    return _i(2048, 8, e, t);
}
function hp(e, t) {
    return _i(4, 2, e, t);
}
function mp(e, t) {
    return _i(4, 4, e, t);
}
function vp(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function gp(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), _i(4, 4, vp.bind(null, t, e), n)
    );
}
function ys() {}
function yp(e, t) {
    var n = Et();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hs(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function wp(e, t) {
    var n = Et();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hs(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xp(e, t, n) {
    return fr & 21
        ? (jt(n, t) ||
              ((n = kf()), (we.lanes |= n), (pr |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (rt = !0)),
          (e.memoizedState = n));
}
function Ov(e, t) {
    var n = oe;
    (oe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ha.transition;
    ha.transition = {};
    try {
        e(!1), t();
    } finally {
        (oe = n), (ha.transition = r);
    }
}
function Sp() {
    return Et().memoizedState;
}
function jv(e, t, n) {
    var r = jn(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Ep(e))
    )
        kp(t, n);
    else if (((n = qf(e, t, n, r)), n !== null)) {
        var l = Ze();
        Ot(n, e, r, l), Cp(n, t, r);
    }
}
function Iv(e, t, n) {
    var r = jn(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Ep(e)) kp(t, l);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = t.lastRenderedReducer), o !== null)
        )
            try {
                var i = t.lastRenderedState,
                    a = o(i, n);
                if (((l.hasEagerState = !0), (l.eagerState = a), jt(a, i))) {
                    var u = t.interleaved;
                    u === null
                        ? ((l.next = l), ss(t))
                        : ((l.next = u.next), (u.next = l)),
                        (t.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (n = qf(e, t, l, r)),
            n !== null && ((l = Ze()), Ot(n, e, r, l), Cp(n, t, r));
    }
}
function Ep(e) {
    var t = e.alternate;
    return e === we || (t !== null && t === we);
}
function kp(e, t) {
    Dl = fi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Cp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gu(e, n);
    }
}
var pi = {
        readContext: St,
        useCallback: Ve,
        useContext: Ve,
        useEffect: Ve,
        useImperativeHandle: Ve,
        useInsertionEffect: Ve,
        useLayoutEffect: Ve,
        useMemo: Ve,
        useReducer: Ve,
        useRef: Ve,
        useState: Ve,
        useDebugValue: Ve,
        useDeferredValue: Ve,
        useTransition: Ve,
        useMutableSource: Ve,
        useSyncExternalStore: Ve,
        useId: Ve,
        unstable_isNewReconciler: !1,
    },
    Dv = {
        readContext: St,
        useCallback: function (e, t) {
            return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: St,
        useEffect: $c,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Vo(4194308, 4, vp.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Vo(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Vo(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = zt();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = zt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = jv.bind(null, we, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = zt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Fc,
        useDebugValue: ys,
        useDeferredValue: function (e) {
            return (zt().memoizedState = e);
        },
        useTransition: function () {
            var e = Fc(!1),
                t = e[0];
            return (e = Ov.bind(null, e[1])), (zt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = we,
                l = zt();
            if (me) {
                if (n === void 0) throw Error(_(407));
                n = n();
            } else {
                if (((n = t()), $e === null)) throw Error(_(349));
                fr & 30 || up(r, t, n);
            }
            l.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (l.queue = o),
                $c(cp.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                to(9, sp.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = zt(),
                t = $e.identifierPrefix;
            if (me) {
                var n = Zt,
                    r = Xt;
                (n = (r & ~(1 << (32 - Tt(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = ql++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = Tv++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Fv = {
        readContext: St,
        useCallback: yp,
        useContext: St,
        useEffect: gs,
        useImperativeHandle: gp,
        useInsertionEffect: hp,
        useLayoutEffect: mp,
        useMemo: wp,
        useReducer: ma,
        useRef: pp,
        useState: function () {
            return ma(eo);
        },
        useDebugValue: ys,
        useDeferredValue: function (e) {
            var t = Et();
            return xp(t, je.memoizedState, e);
        },
        useTransition: function () {
            var e = ma(eo)[0],
                t = Et().memoizedState;
            return [e, t];
        },
        useMutableSource: ip,
        useSyncExternalStore: ap,
        useId: Sp,
        unstable_isNewReconciler: !1,
    },
    $v = {
        readContext: St,
        useCallback: yp,
        useContext: St,
        useEffect: gs,
        useImperativeHandle: gp,
        useInsertionEffect: hp,
        useLayoutEffect: mp,
        useMemo: wp,
        useReducer: va,
        useRef: pp,
        useState: function () {
            return va(eo);
        },
        useDebugValue: ys,
        useDeferredValue: function (e) {
            var t = Et();
            return je === null
                ? (t.memoizedState = e)
                : xp(t, je.memoizedState, e);
        },
        useTransition: function () {
            var e = va(eo)[0],
                t = Et().memoizedState;
            return [e, t];
        },
        useMutableSource: ip,
        useSyncExternalStore: ap,
        useId: Sp,
        unstable_isNewReconciler: !1,
    };
function qr(e, t) {
    try {
        var n = "",
            r = t;
        do (n += dm(r)), (r = r.return);
        while (r);
        var l = n;
    } catch (o) {
        l =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
}
function ga(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function du(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var zv = typeof WeakMap == "function" ? WeakMap : Map;
function Pp(e, t, n) {
    (n = en(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            mi || ((mi = !0), (Su = r)), du(e, t);
        }),
        n
    );
}
function Rp(e, t, n) {
    (n = en(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        (n.payload = function () {
            return r(l);
        }),
            (n.callback = function () {
                du(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (n.callback = function () {
                du(e, t),
                    typeof r != "function" &&
                        (On === null ? (On = new Set([this])) : On.add(this));
                var i = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: i !== null ? i : "",
                });
            }),
        n
    );
}
function zc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new zv();
        var l = new Set();
        r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Jv.bind(null, e, t, n)), t.then(e, e));
}
function Ac(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Uc(e, t, n, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = en(-1, 1)), (t.tag = 2), Tn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var Av = un.ReactCurrentOwner,
    rt = !1;
function Xe(e, t, n, r) {
    t.child = e === null ? lp(t, null, n, r) : Zr(t, e.child, n, r);
}
function Bc(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
        Wr(t, l),
        (r = ms(e, t, n, r, o, l)),
        (n = vs()),
        e !== null && !rt
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              on(e, t, l))
            : (me && n && rs(t), (t.flags |= 1), Xe(e, t, r, l), t.child)
    );
}
function Hc(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" &&
            !Rs(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), Np(e, t, o, r, l))
            : ((e = Yo(n.type, null, r, t, t.mode, l)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
        var i = o.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : Ql),
            n(i, r) && e.ref === t.ref)
        )
            return on(e, t, l);
    }
    return (
        (t.flags |= 1),
        (e = In(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Np(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Ql(o, r) && e.ref === t.ref)
            if (((rt = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
                e.flags & 131072 && (rt = !0);
            else return (t.lanes = e.lanes), on(e, t, l);
    }
    return fu(e, t, n, r, l);
}
function Mp(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                ce($r, at),
                (at |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    ce($r, at),
                    (at |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                ce($r, at),
                (at |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            ce($r, at),
            (at |= r);
    return Xe(e, t, l, n), t.child;
}
function _p(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function fu(e, t, n, r, l) {
    var o = ot(n) ? cr : Ye.current;
    return (
        (o = Gr(t, o)),
        Wr(t, l),
        (n = ms(e, t, n, r, o, l)),
        (r = vs()),
        e !== null && !rt
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              on(e, t, l))
            : (me && r && rs(t), (t.flags |= 1), Xe(e, t, n, l), t.child)
    );
}
function bc(e, t, n, r, l) {
    if (ot(n)) {
        var o = !0;
        oi(t);
    } else o = !1;
    if ((Wr(t, l), t.stateNode === null))
        Wo(e, t), np(t, n, r), cu(t, n, r, l), (r = !0);
    else if (e === null) {
        var i = t.stateNode,
            a = t.memoizedProps;
        i.props = a;
        var u = i.context,
            s = n.contextType;
        typeof s == "object" && s !== null
            ? (s = St(s))
            : ((s = ot(n) ? cr : Ye.current), (s = Gr(t, s)));
        var f = n.getDerivedStateFromProps,
            h =
                typeof f == "function" ||
                typeof i.getSnapshotBeforeUpdate == "function";
        h ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((a !== r || u !== s) && Ic(t, i, r, s)),
            (Sn = !1);
        var m = t.memoizedState;
        (i.state = m),
            ci(t, r, i, l),
            (u = t.memoizedState),
            a !== r || m !== u || lt.current || Sn
                ? (typeof f == "function" &&
                      (su(t, n, f, r), (u = t.memoizedState)),
                  (a = Sn || jc(t, n, a, r, m, u, s))
                      ? (h ||
                            (typeof i.UNSAFE_componentWillMount != "function" &&
                                typeof i.componentWillMount != "function") ||
                            (typeof i.componentWillMount == "function" &&
                                i.componentWillMount(),
                            typeof i.UNSAFE_componentWillMount == "function" &&
                                i.UNSAFE_componentWillMount()),
                        typeof i.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof i.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = a))
                : (typeof i.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (i = t.stateNode),
            ep(e, t),
            (a = t.memoizedProps),
            (s = t.type === t.elementType ? a : Rt(t.type, a)),
            (i.props = s),
            (h = t.pendingProps),
            (m = i.context),
            (u = n.contextType),
            typeof u == "object" && u !== null
                ? (u = St(u))
                : ((u = ot(n) ? cr : Ye.current), (u = Gr(t, u)));
        var y = n.getDerivedStateFromProps;
        (f =
            typeof y == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function") ||
            (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
            ((a !== h || m !== u) && Ic(t, i, r, u)),
            (Sn = !1),
            (m = t.memoizedState),
            (i.state = m),
            ci(t, r, i, l);
        var v = t.memoizedState;
        a !== h || m !== v || lt.current || Sn
            ? (typeof y == "function" &&
                  (su(t, n, y, r), (v = t.memoizedState)),
              (s = Sn || jc(t, n, s, r, m, v, u) || !1)
                  ? (f ||
                        (typeof i.UNSAFE_componentWillUpdate != "function" &&
                            typeof i.componentWillUpdate != "function") ||
                        (typeof i.componentWillUpdate == "function" &&
                            i.componentWillUpdate(r, v, u),
                        typeof i.UNSAFE_componentWillUpdate == "function" &&
                            i.UNSAFE_componentWillUpdate(r, v, u)),
                    typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof i.componentDidUpdate != "function" ||
                        (a === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" ||
                        (a === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = v)),
              (i.props = r),
              (i.state = v),
              (i.context = u),
              (r = s))
            : (typeof i.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return pu(e, t, n, r, o, l);
}
function pu(e, t, n, r, l, o) {
    _p(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && Mc(t, n, !1), on(e, t, o);
    (r = t.stateNode), (Av.current = t);
    var a =
        i && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && i
            ? ((t.child = Zr(t, e.child, null, o)),
              (t.child = Zr(t, null, a, o)))
            : Xe(e, t, a, o),
        (t.memoizedState = r.state),
        l && Mc(t, n, !0),
        t.child
    );
}
function Lp(e) {
    var t = e.stateNode;
    t.pendingContext
        ? Nc(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Nc(e, t.context, !1),
        ds(e, t.containerInfo);
}
function Vc(e, t, n, r, l) {
    return Xr(), os(l), (t.flags |= 256), Xe(e, t, n, r), t.child;
}
var hu = { dehydrated: null, treeContext: null, retryLane: 0 };
function mu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Tp(e, t, n) {
    var r = t.pendingProps,
        l = ge.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        a;
    if (
        ((a = i) ||
            (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        a
            ? ((o = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (l |= 1),
        ce(ge, l & 1),
        e === null)
    )
        return (
            au(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((i = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (i = { mode: "hidden", children: i }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = i))
                            : (o = Oi(i, r, 0, null)),
                        (e = ar(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = mu(n)),
                        (t.memoizedState = hu),
                        e)
                      : ws(t, i))
        );
    if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
        return Uv(e, t, i, r, a, l, n);
    if (o) {
        (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
        var u = { mode: "hidden", children: r.children };
        return (
            !(i & 1) && t.child !== l
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = u),
                  (t.deletions = null))
                : ((r = In(l, u)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            a !== null
                ? (o = In(a, o))
                : ((o = ar(o, i, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (i = e.child.memoizedState),
            (i =
                i === null
                    ? mu(n)
                    : {
                          baseLanes: i.baseLanes | n,
                          cachePool: null,
                          transitions: i.transitions,
                      }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = hu),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = In(o, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function ws(e, t) {
    return (
        (t = Oi({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function To(e, t, n, r) {
    return (
        r !== null && os(r),
        Zr(t, e.child, null, n),
        (e = ws(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Uv(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = ga(Error(_(422)))), To(e, t, i, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((o = r.fallback),
              (l = t.mode),
              (r = Oi({ mode: "visible", children: r.children }, l, 0, null)),
              (o = ar(o, l, i, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && Zr(t, e.child, null, i),
              (t.child.memoizedState = mu(i)),
              (t.memoizedState = hu),
              o);
    if (!(t.mode & 1)) return To(e, t, i, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
        return (
            (r = a), (o = Error(_(419))), (r = ga(o, r, void 0)), To(e, t, i, r)
        );
    }
    if (((a = (i & e.childLanes) !== 0), rt || a)) {
        if (((r = $e), r !== null)) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | i) ? 0 : l),
                l !== 0 &&
                    l !== o.retryLane &&
                    ((o.retryLane = l), ln(e, l), Ot(r, e, l, -1));
        }
        return Ps(), (r = ga(Error(_(421)))), To(e, t, i, r);
    }
    return l.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = qv.bind(null, e)),
          (l._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (st = Ln(l.nextSibling)),
          (ct = t),
          (me = !0),
          (_t = null),
          e !== null &&
              ((vt[gt++] = Xt),
              (vt[gt++] = Zt),
              (vt[gt++] = dr),
              (Xt = e.id),
              (Zt = e.overflow),
              (dr = t)),
          (t = ws(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Wc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), uu(e.return, t, n);
}
function ya(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = l));
}
function Op(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if ((Xe(e, t, r.children, n), (r = ge.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Wc(e, n, t);
                else if (e.tag === 19) Wc(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((ce(ge, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null; )
                    (e = n.alternate),
                        e !== null && di(e) === null && (l = n),
                        (n = n.sibling);
                (n = l),
                    n === null
                        ? ((l = t.child), (t.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                    ya(t, !1, l, n, o);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && di(e) === null)) {
                        t.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                ya(t, !0, n, null, o);
                break;
            case "together":
                ya(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Wo(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function on(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (pr |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(_(153));
    if (t.child !== null) {
        for (
            e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = In(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Bv(e, t, n) {
    switch (t.tag) {
        case 3:
            Lp(t), Xr();
            break;
        case 5:
            op(t);
            break;
        case 1:
            ot(t.type) && oi(t);
            break;
        case 4:
            ds(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            ce(ui, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (ce(ge, ge.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Tp(e, t, n)
                    : (ce(ge, ge.current & 1),
                      (e = on(e, t, n)),
                      e !== null ? e.sibling : null);
            ce(ge, ge.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Op(e, t, n);
                t.flags |= 128;
            }
            if (
                ((l = t.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                ce(ge, ge.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Mp(e, t, n);
    }
    return on(e, t, n);
}
var jp, vu, Ip, Dp;
jp = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
vu = function () {};
Ip = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = t.stateNode), lr(Ht.current);
        var o = null;
        switch (n) {
            case "input":
                (l = za(e, l)), (r = za(e, r)), (o = []);
                break;
            case "select":
                (l = xe({}, l, { value: void 0 })),
                    (r = xe({}, r, { value: void 0 })),
                    (o = []);
                break;
            case "textarea":
                (l = Ba(e, l)), (r = Ba(e, r)), (o = []);
                break;
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = ri);
        }
        ba(n, r);
        var i;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var a = l[s];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                } else
                    s !== "dangerouslySetInnerHTML" &&
                        s !== "children" &&
                        s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Ul.hasOwnProperty(s)
                            ? o || (o = [])
                            : (o = o || []).push(s, null));
        for (s in r) {
            var u = r[s];
            if (
                ((a = l != null ? l[s] : void 0),
                r.hasOwnProperty(s) && u !== a && (u != null || a != null))
            )
                if (s === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) ||
                                (u && u.hasOwnProperty(i)) ||
                                (n || (n = {}), (n[i] = ""));
                        for (i in u)
                            u.hasOwnProperty(i) &&
                                a[i] !== u[i] &&
                                (n || (n = {}), (n[i] = u[i]));
                    } else n || (o || (o = []), o.push(s, n)), (n = u);
                else
                    s === "dangerouslySetInnerHTML"
                        ? ((u = u ? u.__html : void 0),
                          (a = a ? a.__html : void 0),
                          u != null && a !== u && (o = o || []).push(s, u))
                        : s === "children"
                        ? (typeof u != "string" && typeof u != "number") ||
                          (o = o || []).push(s, "" + u)
                        : s !== "suppressContentEditableWarning" &&
                          s !== "suppressHydrationWarning" &&
                          (Ul.hasOwnProperty(s)
                              ? (u != null &&
                                    s === "onScroll" &&
                                    de("scroll", e),
                                o || a === u || (o = []))
                              : (o = o || []).push(s, u));
        }
        n && (o = o || []).push("style", n);
        var s = o;
        (t.updateQueue = s) && (t.flags |= 4);
    }
};
Dp = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function xl(e, t) {
    if (!me)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function We(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling);
    else
        for (l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Hv(e, t, n) {
    var r = t.pendingProps;
    switch ((ls(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return We(t), null;
        case 1:
            return ot(t.type) && li(), We(t), null;
        case 3:
            return (
                (r = t.stateNode),
                Jr(),
                fe(lt),
                fe(Ye),
                ps(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (_o(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          _t !== null && (Cu(_t), (_t = null)))),
                vu(e, t),
                We(t),
                null
            );
        case 5:
            fs(t);
            var l = lr(Jl.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Ip(e, t, n, r, l),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(_(166));
                    return We(t), null;
                }
                if (((e = lr(Ht.current)), _o(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (
                        ((r[At] = t), (r[Xl] = o), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            de("cancel", r), de("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            de("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Ml.length; l++) de(Ml[l], r);
                            break;
                        case "source":
                            de("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            de("error", r), de("load", r);
                            break;
                        case "details":
                            de("toggle", r);
                            break;
                        case "input":
                            ec(r, o), de("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                de("invalid", r);
                            break;
                        case "textarea":
                            nc(r, o), de("invalid", r);
                    }
                    ba(n, o), (l = null);
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var a = o[i];
                            i === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Mo(r.textContent, a, e),
                                      (l = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Mo(r.textContent, a, e),
                                      (l = ["children", "" + a]))
                                : Ul.hasOwnProperty(i) &&
                                  a != null &&
                                  i === "onScroll" &&
                                  de("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            xo(r), tc(r, o, !0);
                            break;
                        case "textarea":
                            xo(r), rc(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = ri);
                    }
                    (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (i = l.nodeType === 9 ? l : l.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = uf(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = i.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = i.createElement(n, { is: r.is }))
                                : ((e = i.createElement(n)),
                                  n === "select" &&
                                      ((i = e),
                                      r.multiple
                                          ? (i.multiple = !0)
                                          : r.size && (i.size = r.size)))
                            : (e = i.createElementNS(e, n)),
                        (e[At] = t),
                        (e[Xl] = r),
                        jp(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((i = Va(n, r)), n)) {
                            case "dialog":
                                de("cancel", e), de("close", e), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                de("load", e), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Ml.length; l++) de(Ml[l], e);
                                l = r;
                                break;
                            case "source":
                                de("error", e), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                de("error", e), de("load", e), (l = r);
                                break;
                            case "details":
                                de("toggle", e), (l = r);
                                break;
                            case "input":
                                ec(e, r), (l = za(e, r)), de("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (l = xe({}, r, { value: void 0 })),
                                    de("invalid", e);
                                break;
                            case "textarea":
                                nc(e, r), (l = Ba(e, r)), de("invalid", e);
                                break;
                            default:
                                l = r;
                        }
                        ba(n, l), (a = l);
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var u = a[o];
                                o === "style"
                                    ? df(e, u)
                                    : o === "dangerouslySetInnerHTML"
                                    ? ((u = u ? u.__html : void 0),
                                      u != null && sf(e, u))
                                    : o === "children"
                                    ? typeof u == "string"
                                        ? (n !== "textarea" || u !== "") &&
                                          Bl(e, u)
                                        : typeof u == "number" && Bl(e, "" + u)
                                    : o !== "suppressContentEditableWarning" &&
                                      o !== "suppressHydrationWarning" &&
                                      o !== "autoFocus" &&
                                      (Ul.hasOwnProperty(o)
                                          ? u != null &&
                                            o === "onScroll" &&
                                            de("scroll", e)
                                          : u != null && bu(e, o, u, i));
                            }
                        switch (n) {
                            case "input":
                                xo(e), tc(e, r, !1);
                                break;
                            case "textarea":
                                xo(e), rc(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + Fn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? Br(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          Br(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof l.onClick == "function" &&
                                    (e.onclick = ri);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return We(t), null;
        case 6:
            if (e && t.stateNode != null) Dp(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(_(166));
                if (((n = lr(Jl.current)), lr(Ht.current), _o(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[At] = t),
                        (o = r.nodeValue !== n) && ((e = ct), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Mo(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Mo(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[At] = t),
                        (t.stateNode = r);
            }
            return We(t), null;
        case 13:
            if (
                (fe(ge),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (me && st !== null && t.mode & 1 && !(t.flags & 128))
                    Jf(), Xr(), (t.flags |= 98560), (o = !1);
                else if (((o = _o(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(_(318));
                        if (
                            ((o = t.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(_(317));
                        o[At] = t;
                    } else
                        Xr(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    We(t), (o = !1);
                } else _t !== null && (Cu(_t), (_t = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || ge.current & 1
                              ? Ie === 0 && (Ie = 3)
                              : Ps())),
                  t.updateQueue !== null && (t.flags |= 4),
                  We(t),
                  null);
        case 4:
            return (
                Jr(),
                vu(e, t),
                e === null && Yl(t.stateNode.containerInfo),
                We(t),
                null
            );
        case 10:
            return us(t.type._context), We(t), null;
        case 17:
            return ot(t.type) && li(), We(t), null;
        case 19:
            if ((fe(ge), (o = t.memoizedState), o === null)) return We(t), null;
            if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
                if (r) xl(o, !1);
                else {
                    if (Ie !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((i = di(e)), i !== null)) {
                                for (
                                    t.flags |= 128,
                                        xl(o, !1),
                                        r = i.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (i = o.alternate),
                                        i === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = i.childLanes),
                                              (o.lanes = i.lanes),
                                              (o.child = i.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  i.memoizedProps),
                                              (o.memoizedState =
                                                  i.memoizedState),
                                              (o.updateQueue = i.updateQueue),
                                              (o.type = i.type),
                                              (e = i.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return ce(ge, (ge.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        Ce() > el &&
                        ((t.flags |= 128),
                        (r = !0),
                        xl(o, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = di(i)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            xl(o, !0),
                            o.tail === null &&
                                o.tailMode === "hidden" &&
                                !i.alternate &&
                                !me)
                        )
                            return We(t), null;
                    } else
                        2 * Ce() - o.renderingStartTime > el &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            xl(o, !1),
                            (t.lanes = 4194304));
                o.isBackwards
                    ? ((i.sibling = t.child), (t.child = i))
                    : ((n = o.last),
                      n !== null ? (n.sibling = i) : (t.child = i),
                      (o.last = i));
            }
            return o.tail !== null
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ce()),
                  (t.sibling = null),
                  (n = ge.current),
                  ce(ge, r ? (n & 1) | 2 : n & 1),
                  t)
                : (We(t), null);
        case 22:
        case 23:
            return (
                Cs(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? at & 1073741824 &&
                      (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : We(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(_(156, t.tag));
}
function bv(e, t) {
    switch ((ls(t), t.tag)) {
        case 1:
            return (
                ot(t.type) && li(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                Jr(),
                fe(lt),
                fe(Ye),
                ps(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return fs(t), null;
        case 13:
            if (
                (fe(ge),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(_(340));
                Xr();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return fe(ge), null;
        case 4:
            return Jr(), null;
        case 10:
            return us(t.type._context), null;
        case 22:
        case 23:
            return Cs(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Oo = !1,
    Ke = !1,
    Vv = typeof WeakSet == "function" ? WeakSet : Set,
    D = null;
function Fr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Ee(e, t, r);
            }
        else n.current = null;
}
function gu(e, t, n) {
    try {
        n();
    } catch (r) {
        Ee(e, t, r);
    }
}
var Kc = !1;
function Wv(e, t) {
    if (((eu = ei), (e = Af()), ns(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var i = 0,
                        a = -1,
                        u = -1,
                        s = 0,
                        f = 0,
                        h = e,
                        m = null;
                    t: for (;;) {
                        for (
                            var y;
                            h !== n ||
                                (l !== 0 && h.nodeType !== 3) ||
                                (a = i + l),
                                h !== o ||
                                    (r !== 0 && h.nodeType !== 3) ||
                                    (u = i + r),
                                h.nodeType === 3 && (i += h.nodeValue.length),
                                (y = h.firstChild) !== null;

                        )
                            (m = h), (h = y);
                        for (;;) {
                            if (h === e) break t;
                            if (
                                (m === n && ++s === l && (a = i),
                                m === o && ++f === r && (u = i),
                                (y = h.nextSibling) !== null)
                            )
                                break;
                            (h = m), (m = h.parentNode);
                        }
                        h = y;
                    }
                    n = a === -1 || u === -1 ? null : { start: a, end: u };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        tu = { focusedElem: e, selectionRange: n }, ei = !1, D = t;
        D !== null;

    )
        if (
            ((t = D),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (D = e);
        else
            for (; D !== null; ) {
                t = D;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (v !== null) {
                                    var w = v.memoizedProps,
                                        S = v.memoizedState,
                                        c = t.stateNode,
                                        d = c.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? w
                                                : Rt(t.type, w),
                                            S
                                        );
                                    c.__reactInternalSnapshotBeforeUpdate = d;
                                }
                                break;
                            case 3:
                                var g = t.stateNode.containerInfo;
                                g.nodeType === 1
                                    ? (g.textContent = "")
                                    : g.nodeType === 9 &&
                                      g.documentElement &&
                                      g.removeChild(g.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(_(163));
                        }
                } catch (x) {
                    Ee(t, t.return, x);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (D = e);
                    break;
                }
                D = t.return;
            }
    return (v = Kc), (Kc = !1), v;
}
function Fl(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                (l.destroy = void 0), o !== void 0 && gu(t, n, o);
            }
            l = l.next;
        } while (l !== r);
    }
}
function Li(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function yu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Fp(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Fp(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[At],
                delete t[Xl],
                delete t[lu],
                delete t[Nv],
                delete t[Mv])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function $p(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qc(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || $p(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function wu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = ri));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (wu(e, t, n), e = e.sibling; e !== null; )
            wu(e, t, n), (e = e.sibling);
}
function xu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (xu(e, t, n), e = e.sibling; e !== null; )
            xu(e, t, n), (e = e.sibling);
}
var Ue = null,
    Mt = !1;
function wn(e, t, n) {
    for (n = n.child; n !== null; ) zp(e, t, n), (n = n.sibling);
}
function zp(e, t, n) {
    if (Bt && typeof Bt.onCommitFiberUnmount == "function")
        try {
            Bt.onCommitFiberUnmount(Ei, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Ke || Fr(n, t);
        case 6:
            var r = Ue,
                l = Mt;
            (Ue = null),
                wn(e, t, n),
                (Ue = r),
                (Mt = l),
                Ue !== null &&
                    (Mt
                        ? ((e = Ue),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : Ue.removeChild(n.stateNode));
            break;
        case 18:
            Ue !== null &&
                (Mt
                    ? ((e = Ue),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? da(e.parentNode, n)
                          : e.nodeType === 1 && da(e, n),
                      Wl(e))
                    : da(Ue, n.stateNode));
            break;
        case 4:
            (r = Ue),
                (l = Mt),
                (Ue = n.stateNode.containerInfo),
                (Mt = !0),
                wn(e, t, n),
                (Ue = r),
                (Mt = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !Ke &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    (o = o.tag),
                        i !== void 0 && (o & 2 || o & 4) && gu(n, t, i),
                        (l = l.next);
                } while (l !== r);
            }
            wn(e, t, n);
            break;
        case 1:
            if (
                !Ke &&
                (Fr(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (a) {
                    Ee(n, t, a);
                }
            wn(e, t, n);
            break;
        case 21:
            wn(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((Ke = (r = Ke) || n.memoizedState !== null),
                  wn(e, t, n),
                  (Ke = r))
                : wn(e, t, n);
            break;
        default:
            wn(e, t, n);
    }
}
function Yc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Vv()),
            t.forEach(function (r) {
                var l = e0.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l));
            });
    }
}
function Pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    a = i;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (Ue = a.stateNode), (Mt = !1);
                            break e;
                        case 3:
                            (Ue = a.stateNode.containerInfo), (Mt = !0);
                            break e;
                        case 4:
                            (Ue = a.stateNode.containerInfo), (Mt = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (Ue === null) throw Error(_(160));
                zp(o, i, l), (Ue = null), (Mt = !1);
                var u = l.alternate;
                u !== null && (u.return = null), (l.return = null);
            } catch (s) {
                Ee(l, t, s);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Ap(t, e), (t = t.sibling);
}
function Ap(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Pt(t, e), $t(e), r & 4)) {
                try {
                    Fl(3, e, e.return), Li(3, e);
                } catch (w) {
                    Ee(e, e.return, w);
                }
                try {
                    Fl(5, e, e.return);
                } catch (w) {
                    Ee(e, e.return, w);
                }
            }
            break;
        case 1:
            Pt(t, e), $t(e), r & 512 && n !== null && Fr(n, n.return);
            break;
        case 5:
            if (
                (Pt(t, e),
                $t(e),
                r & 512 && n !== null && Fr(n, n.return),
                e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Bl(l, "");
                } catch (w) {
                    Ee(e, e.return, w);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), u !== null))
                    try {
                        a === "input" &&
                            o.type === "radio" &&
                            o.name != null &&
                            of(l, o),
                            Va(a, i);
                        var s = Va(a, o);
                        for (i = 0; i < u.length; i += 2) {
                            var f = u[i],
                                h = u[i + 1];
                            f === "style"
                                ? df(l, h)
                                : f === "dangerouslySetInnerHTML"
                                ? sf(l, h)
                                : f === "children"
                                ? Bl(l, h)
                                : bu(l, f, h, s);
                        }
                        switch (a) {
                            case "input":
                                Aa(l, o);
                                break;
                            case "textarea":
                                af(l, o);
                                break;
                            case "select":
                                var m = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var y = o.value;
                                y != null
                                    ? Br(l, !!o.multiple, y, !1)
                                    : m !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? Br(
                                                l,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : Br(
                                                l,
                                                !!o.multiple,
                                                o.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        l[Xl] = o;
                    } catch (w) {
                        Ee(e, e.return, w);
                    }
            }
            break;
        case 6:
            if ((Pt(t, e), $t(e), r & 4)) {
                if (e.stateNode === null) throw Error(_(162));
                (l = e.stateNode), (o = e.memoizedProps);
                try {
                    l.nodeValue = o;
                } catch (w) {
                    Ee(e, e.return, w);
                }
            }
            break;
        case 3:
            if (
                (Pt(t, e),
                $t(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Wl(t.containerInfo);
                } catch (w) {
                    Ee(e, e.return, w);
                }
            break;
        case 4:
            Pt(t, e), $t(e);
            break;
        case 13:
            Pt(t, e),
                $t(e),
                (l = e.child),
                l.flags & 8192 &&
                    ((o = l.memoizedState !== null),
                    (l.stateNode.isHidden = o),
                    !o ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (Es = Ce())),
                r & 4 && Yc(e);
            break;
        case 22:
            if (
                ((f = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((Ke = (s = Ke) || f), Pt(t, e), (Ke = s))
                    : Pt(t, e),
                $t(e),
                r & 8192)
            ) {
                if (
                    ((s = e.memoizedState !== null),
                    (e.stateNode.isHidden = s) && !f && e.mode & 1)
                )
                    for (D = e, f = e.child; f !== null; ) {
                        for (h = D = f; D !== null; ) {
                            switch (((m = D), (y = m.child), m.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Fl(4, m, m.return);
                                    break;
                                case 1:
                                    Fr(m, m.return);
                                    var v = m.stateNode;
                                    if (
                                        typeof v.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = m), (n = m.return);
                                        try {
                                            (t = r),
                                                (v.props = t.memoizedProps),
                                                (v.state = t.memoizedState),
                                                v.componentWillUnmount();
                                        } catch (w) {
                                            Ee(r, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    Fr(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Xc(h);
                                        continue;
                                    }
                            }
                            y !== null ? ((y.return = m), (D = y)) : Xc(h);
                        }
                        f = f.sibling;
                    }
                e: for (f = null, h = e; ; ) {
                    if (h.tag === 5) {
                        if (f === null) {
                            f = h;
                            try {
                                (l = h.stateNode),
                                    s
                                        ? ((o = l.style),
                                          typeof o.setProperty == "function"
                                              ? o.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (o.display = "none"))
                                        : ((a = h.stateNode),
                                          (u = h.memoizedProps.style),
                                          (i =
                                              u != null &&
                                              u.hasOwnProperty("display")
                                                  ? u.display
                                                  : null),
                                          (a.style.display = cf("display", i)));
                            } catch (w) {
                                Ee(e, e.return, w);
                            }
                        }
                    } else if (h.tag === 6) {
                        if (f === null)
                            try {
                                h.stateNode.nodeValue = s
                                    ? ""
                                    : h.memoizedProps;
                            } catch (w) {
                                Ee(e, e.return, w);
                            }
                    } else if (
                        ((h.tag !== 22 && h.tag !== 23) ||
                            h.memoizedState === null ||
                            h === e) &&
                        h.child !== null
                    ) {
                        (h.child.return = h), (h = h.child);
                        continue;
                    }
                    if (h === e) break e;
                    for (; h.sibling === null; ) {
                        if (h.return === null || h.return === e) break e;
                        f === h && (f = null), (h = h.return);
                    }
                    f === h && (f = null),
                        (h.sibling.return = h.return),
                        (h = h.sibling);
                }
            }
            break;
        case 19:
            Pt(t, e), $t(e), r & 4 && Yc(e);
            break;
        case 21:
            break;
        default:
            Pt(t, e), $t(e);
    }
}
function $t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if ($p(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(_(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Bl(l, ""), (r.flags &= -33));
                    var o = Qc(e);
                    xu(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        a = Qc(e);
                    wu(e, a, i);
                    break;
                default:
                    throw Error(_(161));
            }
        } catch (u) {
            Ee(e, e.return, u);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Kv(e, t, n) {
    (D = e), Up(e);
}
function Up(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
        var l = D,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Oo;
            if (!i) {
                var a = l.alternate,
                    u = (a !== null && a.memoizedState !== null) || Ke;
                a = Oo;
                var s = Ke;
                if (((Oo = i), (Ke = u) && !s))
                    for (D = l; D !== null; )
                        (i = D),
                            (u = i.child),
                            i.tag === 22 && i.memoizedState !== null
                                ? Zc(l)
                                : u !== null
                                ? ((u.return = i), (D = u))
                                : Zc(l);
                for (; o !== null; ) (D = o), Up(o), (o = o.sibling);
                (D = l), (Oo = a), (Ke = s);
            }
            Gc(e);
        } else
            l.subtreeFlags & 8772 && o !== null
                ? ((o.return = l), (D = o))
                : Gc(e);
    }
}
function Gc(e) {
    for (; D !== null; ) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ke || Li(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Ke)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Rt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = t.updateQueue;
                            o !== null && Oc(t, o, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Oc(t, i, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var s = t.alternate;
                                if (s !== null) {
                                    var f = s.memoizedState;
                                    if (f !== null) {
                                        var h = f.dehydrated;
                                        h !== null && Wl(h);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(_(163));
                    }
                Ke || (t.flags & 512 && yu(t));
            } catch (m) {
                Ee(t, t.return, m);
            }
        }
        if (t === e) {
            D = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (D = n);
            break;
        }
        D = t.return;
    }
}
function Xc(e) {
    for (; D !== null; ) {
        var t = D;
        if (t === e) {
            D = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (D = n);
            break;
        }
        D = t.return;
    }
}
function Zc(e) {
    for (; D !== null; ) {
        var t = D;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Li(4, t);
                    } catch (u) {
                        Ee(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            Ee(t, l, u);
                        }
                    }
                    var o = t.return;
                    try {
                        yu(t);
                    } catch (u) {
                        Ee(t, o, u);
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        yu(t);
                    } catch (u) {
                        Ee(t, i, u);
                    }
            }
        } catch (u) {
            Ee(t, t.return, u);
        }
        if (t === e) {
            D = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (D = a);
            break;
        }
        D = t.return;
    }
}
var Qv = Math.ceil,
    hi = un.ReactCurrentDispatcher,
    xs = un.ReactCurrentOwner,
    xt = un.ReactCurrentBatchConfig,
    J = 0,
    $e = null,
    Le = null,
    He = 0,
    at = 0,
    $r = Un(0),
    Ie = 0,
    no = null,
    pr = 0,
    Ti = 0,
    Ss = 0,
    $l = null,
    nt = null,
    Es = 0,
    el = 1 / 0,
    Qt = null,
    mi = !1,
    Su = null,
    On = null,
    jo = !1,
    Pn = null,
    vi = 0,
    zl = 0,
    Eu = null,
    Ko = -1,
    Qo = 0;
function Ze() {
    return J & 6 ? Ce() : Ko !== -1 ? Ko : (Ko = Ce());
}
function jn(e) {
    return e.mode & 1
        ? J & 2 && He !== 0
            ? He & -He
            : Lv.transition !== null
            ? (Qo === 0 && (Qo = kf()), Qo)
            : ((e = oe),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : Lf(e.type))),
              e)
        : 1;
}
function Ot(e, t, n, r) {
    if (50 < zl) throw ((zl = 0), (Eu = null), Error(_(185)));
    ao(e, n, r),
        (!(J & 2) || e !== $e) &&
            (e === $e && (!(J & 2) && (Ti |= n), Ie === 4 && kn(e, He)),
            it(e, r),
            n === 1 &&
                J === 0 &&
                !(t.mode & 1) &&
                ((el = Ce() + 500), Ni && Bn()));
}
function it(e, t) {
    var n = e.callbackNode;
    Lm(e, t);
    var r = qo(e, e === $e ? He : 0);
    if (r === 0)
        n !== null && ic(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && ic(n), t === 1))
            e.tag === 0 ? _v(Jc.bind(null, e)) : Gf(Jc.bind(null, e)),
                Pv(function () {
                    !(J & 6) && Bn();
                }),
                (n = null);
        else {
            switch (Cf(r)) {
                case 1:
                    n = Yu;
                    break;
                case 4:
                    n = Sf;
                    break;
                case 16:
                    n = Jo;
                    break;
                case 536870912:
                    n = Ef;
                    break;
                default:
                    n = Jo;
            }
            n = Yp(n, Bp.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Bp(e, t) {
    if (((Ko = -1), (Qo = 0), J & 6)) throw Error(_(327));
    var n = e.callbackNode;
    if (Kr() && e.callbackNode !== n) return null;
    var r = qo(e, e === $e ? He : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = gi(e, r);
    else {
        t = r;
        var l = J;
        J |= 2;
        var o = bp();
        ($e !== e || He !== t) && ((Qt = null), (el = Ce() + 500), ir(e, t));
        do
            try {
                Xv();
                break;
            } catch (a) {
                Hp(e, a);
            }
        while (1);
        as(),
            (hi.current = o),
            (J = l),
            Le !== null ? (t = 0) : (($e = null), (He = 0), (t = Ie));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((l = Ga(e)), l !== 0 && ((r = l), (t = ku(e, l)))),
            t === 1)
        )
            throw ((n = no), ir(e, 0), kn(e, r), it(e, Ce()), n);
        if (t === 6) kn(e, r);
        else {
            if (
                ((l = e.current.alternate),
                !(r & 30) &&
                    !Yv(l) &&
                    ((t = gi(e, r)),
                    t === 2 &&
                        ((o = Ga(e)), o !== 0 && ((r = o), (t = ku(e, o)))),
                    t === 1))
            )
                throw ((n = no), ir(e, 0), kn(e, r), it(e, Ce()), n);
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(_(345));
                case 2:
                    er(e, nt, Qt);
                    break;
                case 3:
                    if (
                        (kn(e, r),
                        (r & 130023424) === r &&
                            ((t = Es + 500 - Ce()), 10 < t))
                    ) {
                        if (qo(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            Ze(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = ru(er.bind(null, e, nt, Qt), t);
                        break;
                    }
                    er(e, nt, Qt);
                    break;
                case 4:
                    if ((kn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, l = -1; 0 < r; ) {
                        var i = 31 - Tt(r);
                        (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
                    }
                    if (
                        ((r = l),
                        (r = Ce() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * Qv(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = ru(er.bind(null, e, nt, Qt), r);
                        break;
                    }
                    er(e, nt, Qt);
                    break;
                case 5:
                    er(e, nt, Qt);
                    break;
                default:
                    throw Error(_(329));
            }
        }
    }
    return it(e, Ce()), e.callbackNode === n ? Bp.bind(null, e) : null;
}
function ku(e, t) {
    var n = $l;
    return (
        e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256),
        (e = gi(e, t)),
        e !== 2 && ((t = nt), (nt = n), t !== null && Cu(t)),
        e
    );
}
function Cu(e) {
    nt === null ? (nt = e) : nt.push.apply(nt, e);
}
function Yv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!jt(o(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function kn(e, t) {
    for (
        t &= ~Ss,
            t &= ~Ti,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Tt(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Jc(e) {
    if (J & 6) throw Error(_(327));
    Kr();
    var t = qo(e, 0);
    if (!(t & 1)) return it(e, Ce()), null;
    var n = gi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ga(e);
        r !== 0 && ((t = r), (n = ku(e, r)));
    }
    if (n === 1) throw ((n = no), ir(e, 0), kn(e, t), it(e, Ce()), n);
    if (n === 6) throw Error(_(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        er(e, nt, Qt),
        it(e, Ce()),
        null
    );
}
function ks(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t);
    } finally {
        (J = n), J === 0 && ((el = Ce() + 500), Ni && Bn());
    }
}
function hr(e) {
    Pn !== null && Pn.tag === 0 && !(J & 6) && Kr();
    var t = J;
    J |= 1;
    var n = xt.transition,
        r = oe;
    try {
        if (((xt.transition = null), (oe = 1), e)) return e();
    } finally {
        (oe = r), (xt.transition = n), (J = t), !(J & 6) && Bn();
    }
}
function Cs() {
    (at = $r.current), fe($r);
}
function ir(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Cv(n)), Le !== null))
        for (n = Le.return; n !== null; ) {
            var r = n;
            switch ((ls(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && li();
                    break;
                case 3:
                    Jr(), fe(lt), fe(Ye), ps();
                    break;
                case 5:
                    fs(r);
                    break;
                case 4:
                    Jr();
                    break;
                case 13:
                    fe(ge);
                    break;
                case 19:
                    fe(ge);
                    break;
                case 10:
                    us(r.type._context);
                    break;
                case 22:
                case 23:
                    Cs();
            }
            n = n.return;
        }
    if (
        (($e = e),
        (Le = e = In(e.current, null)),
        (He = at = t),
        (Ie = 0),
        (no = null),
        (Ss = Ti = pr = 0),
        (nt = $l = null),
        rr !== null)
    ) {
        for (t = 0; t < rr.length; t++)
            if (((n = rr[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    (o.next = l), (r.next = i);
                }
                n.pending = r;
            }
        rr = null;
    }
    return e;
}
function Hp(e, t) {
    do {
        var n = Le;
        try {
            if ((as(), (bo.current = pi), fi)) {
                for (var r = we.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                fi = !1;
            }
            if (
                ((fr = 0),
                (Fe = je = we = null),
                (Dl = !1),
                (ql = 0),
                (xs.current = null),
                n === null || n.return === null)
            ) {
                (Ie = 1), (no = t), (Le = null);
                break;
            }
            e: {
                var o = e,
                    i = n.return,
                    a = n,
                    u = t;
                if (
                    ((t = He),
                    (a.flags |= 32768),
                    u !== null &&
                        typeof u == "object" &&
                        typeof u.then == "function")
                ) {
                    var s = u,
                        f = a,
                        h = f.tag;
                    if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = f.alternate;
                        m
                            ? ((f.updateQueue = m.updateQueue),
                              (f.memoizedState = m.memoizedState),
                              (f.lanes = m.lanes))
                            : ((f.updateQueue = null),
                              (f.memoizedState = null));
                    }
                    var y = Ac(i);
                    if (y !== null) {
                        (y.flags &= -257),
                            Uc(y, i, a, o, t),
                            y.mode & 1 && zc(o, s, t),
                            (t = y),
                            (u = s);
                        var v = t.updateQueue;
                        if (v === null) {
                            var w = new Set();
                            w.add(u), (t.updateQueue = w);
                        } else v.add(u);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            zc(o, s, t), Ps();
                            break e;
                        }
                        u = Error(_(426));
                    }
                } else if (me && a.mode & 1) {
                    var S = Ac(i);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                            Uc(S, i, a, o, t),
                            os(qr(u, a));
                        break e;
                    }
                }
                (o = u = qr(u, a)),
                    Ie !== 4 && (Ie = 2),
                    $l === null ? ($l = [o]) : $l.push(o),
                    (o = i);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var c = Pp(o, u, t);
                            Tc(o, c);
                            break e;
                        case 1:
                            a = u;
                            var d = o.type,
                                g = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof d.getDerivedStateFromError ==
                                    "function" ||
                                    (g !== null &&
                                        typeof g.componentDidCatch ==
                                            "function" &&
                                        (On === null || !On.has(g))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var x = Rp(o, a, t);
                                Tc(o, x);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Wp(n);
        } catch (P) {
            (t = P), Le === n && n !== null && (Le = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function bp() {
    var e = hi.current;
    return (hi.current = pi), e === null ? pi : e;
}
function Ps() {
    (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4),
        $e === null || (!(pr & 268435455) && !(Ti & 268435455)) || kn($e, He);
}
function gi(e, t) {
    var n = J;
    J |= 2;
    var r = bp();
    ($e !== e || He !== t) && ((Qt = null), ir(e, t));
    do
        try {
            Gv();
            break;
        } catch (l) {
            Hp(e, l);
        }
    while (1);
    if ((as(), (J = n), (hi.current = r), Le !== null)) throw Error(_(261));
    return ($e = null), (He = 0), Ie;
}
function Gv() {
    for (; Le !== null; ) Vp(Le);
}
function Xv() {
    for (; Le !== null && !Sm(); ) Vp(Le);
}
function Vp(e) {
    var t = Qp(e.alternate, e, at);
    (e.memoizedProps = e.pendingProps),
        t === null ? Wp(e) : (Le = t),
        (xs.current = null);
}
function Wp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = bv(n, t)), n !== null)) {
                (n.flags &= 32767), (Le = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Ie = 6), (Le = null);
                return;
            }
        } else if (((n = Hv(n, t, at)), n !== null)) {
            Le = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Le = t;
            return;
        }
        Le = t = e;
    } while (t !== null);
    Ie === 0 && (Ie = 5);
}
function er(e, t, n) {
    var r = oe,
        l = xt.transition;
    try {
        (xt.transition = null), (oe = 1), Zv(e, t, n, r);
    } finally {
        (xt.transition = l), (oe = r);
    }
    return null;
}
function Zv(e, t, n, r) {
    do Kr();
    while (Pn !== null);
    if (J & 6) throw Error(_(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(_(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (Tm(e, o),
        e === $e && ((Le = $e = null), (He = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            jo ||
            ((jo = !0),
            Yp(Jo, function () {
                return Kr(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = xt.transition), (xt.transition = null);
        var i = oe;
        oe = 1;
        var a = J;
        (J |= 4),
            (xs.current = null),
            Wv(e, n),
            Ap(n, e),
            gv(tu),
            (ei = !!eu),
            (tu = eu = null),
            (e.current = n),
            Kv(n),
            Em(),
            (J = a),
            (oe = i),
            (xt.transition = o);
    } else e.current = n;
    if (
        (jo && ((jo = !1), (Pn = e), (vi = l)),
        (o = e.pendingLanes),
        o === 0 && (On = null),
        Pm(n.stateNode),
        it(e, Ce()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (l = t[n]),
                r(l.value, { componentStack: l.stack, digest: l.digest });
    if (mi) throw ((mi = !1), (e = Su), (Su = null), e);
    return (
        vi & 1 && e.tag !== 0 && Kr(),
        (o = e.pendingLanes),
        o & 1 ? (e === Eu ? zl++ : ((zl = 0), (Eu = e))) : (zl = 0),
        Bn(),
        null
    );
}
function Kr() {
    if (Pn !== null) {
        var e = Cf(vi),
            t = xt.transition,
            n = oe;
        try {
            if (((xt.transition = null), (oe = 16 > e ? 16 : e), Pn === null))
                var r = !1;
            else {
                if (((e = Pn), (Pn = null), (vi = 0), J & 6))
                    throw Error(_(331));
                var l = J;
                for (J |= 4, D = e.current; D !== null; ) {
                    var o = D,
                        i = o.child;
                    if (D.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var s = a[u];
                                for (D = s; D !== null; ) {
                                    var f = D;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Fl(8, f, o);
                                    }
                                    var h = f.child;
                                    if (h !== null) (h.return = f), (D = h);
                                    else
                                        for (; D !== null; ) {
                                            f = D;
                                            var m = f.sibling,
                                                y = f.return;
                                            if ((Fp(f), f === s)) {
                                                D = null;
                                                break;
                                            }
                                            if (m !== null) {
                                                (m.return = y), (D = m);
                                                break;
                                            }
                                            D = y;
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var w = v.child;
                                if (w !== null) {
                                    v.child = null;
                                    do {
                                        var S = w.sibling;
                                        (w.sibling = null), (w = S);
                                    } while (w !== null);
                                }
                            }
                            D = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        (i.return = o), (D = i);
                    else
                        e: for (; D !== null; ) {
                            if (((o = D), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fl(9, o, o.return);
                                }
                            var c = o.sibling;
                            if (c !== null) {
                                (c.return = o.return), (D = c);
                                break e;
                            }
                            D = o.return;
                        }
                }
                var d = e.current;
                for (D = d; D !== null; ) {
                    i = D;
                    var g = i.child;
                    if (i.subtreeFlags & 2064 && g !== null)
                        (g.return = i), (D = g);
                    else
                        e: for (i = d; D !== null; ) {
                            if (((a = D), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Li(9, a);
                                    }
                                } catch (P) {
                                    Ee(a, a.return, P);
                                }
                            if (a === i) {
                                D = null;
                                break e;
                            }
                            var x = a.sibling;
                            if (x !== null) {
                                (x.return = a.return), (D = x);
                                break e;
                            }
                            D = a.return;
                        }
                }
                if (
                    ((J = l),
                    Bn(),
                    Bt && typeof Bt.onPostCommitFiberRoot == "function")
                )
                    try {
                        Bt.onPostCommitFiberRoot(Ei, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (oe = n), (xt.transition = t);
        }
    }
    return !1;
}
function qc(e, t, n) {
    (t = qr(n, t)),
        (t = Pp(e, t, 1)),
        (e = Tn(e, t, 1)),
        (t = Ze()),
        e !== null && (ao(e, 1, t), it(e, t));
}
function Ee(e, t, n) {
    if (e.tag === 3) qc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                qc(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (On === null || !On.has(r)))
                ) {
                    (e = qr(n, e)),
                        (e = Rp(t, e, 1)),
                        (t = Tn(t, e, 1)),
                        (e = Ze()),
                        t !== null && (ao(t, 1, e), it(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Jv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Ze()),
        (e.pingedLanes |= e.suspendedLanes & n),
        $e === e &&
            (He & n) === n &&
            (Ie === 4 ||
            (Ie === 3 && (He & 130023424) === He && 500 > Ce() - Es)
                ? ir(e, 0)
                : (Ss |= n)),
        it(e, t);
}
function Kp(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = ko), (ko <<= 1), !(ko & 130023424) && (ko = 4194304))
            : (t = 1));
    var n = Ze();
    (e = ln(e, t)), e !== null && (ao(e, t, n), it(e, n));
}
function qv(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Kp(e, n);
}
function e0(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(_(314));
    }
    r !== null && r.delete(t), Kp(e, n);
}
var Qp;
Qp = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || lt.current) rt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (rt = !1), Bv(e, t, n);
            rt = !!(e.flags & 131072);
        }
    else (rt = !1), me && t.flags & 1048576 && Xf(t, ai, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Wo(e, t), (e = t.pendingProps);
            var l = Gr(t, Ye.current);
            Wr(t, n), (l = ms(null, t, r, e, l, n));
            var o = vs();
            return (
                (t.flags |= 1),
                typeof l == "object" &&
                l !== null &&
                typeof l.render == "function" &&
                l.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ot(r) ? ((o = !0), oi(t)) : (o = !1),
                      (t.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      cs(t),
                      (l.updater = Mi),
                      (t.stateNode = l),
                      (l._reactInternals = t),
                      cu(t, r, e, n),
                      (t = pu(null, t, r, !0, o, n)))
                    : ((t.tag = 0),
                      me && o && rs(t),
                      Xe(null, t, l, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Wo(e, t),
                    (e = t.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (t.type = r),
                    (l = t.tag = n0(r)),
                    (e = Rt(r, e)),
                    l)
                ) {
                    case 0:
                        t = fu(null, t, r, e, n);
                        break e;
                    case 1:
                        t = bc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Bc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Hc(null, t, r, Rt(r.type, e), n);
                        break e;
                }
                throw Error(_(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Rt(r, l)),
                fu(e, t, r, l, n)
            );
        case 1:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Rt(r, l)),
                bc(e, t, r, l, n)
            );
        case 3:
            e: {
                if ((Lp(t), e === null)) throw Error(_(387));
                (r = t.pendingProps),
                    (o = t.memoizedState),
                    (l = o.element),
                    ep(e, t),
                    ci(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries:
                                i.pendingSuspenseBoundaries,
                            transitions: i.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        t.flags & 256)
                    ) {
                        (l = qr(Error(_(423)), t)), (t = Vc(e, t, r, n, l));
                        break e;
                    } else if (r !== l) {
                        (l = qr(Error(_(424)), t)), (t = Vc(e, t, r, n, l));
                        break e;
                    } else
                        for (
                            st = Ln(t.stateNode.containerInfo.firstChild),
                                ct = t,
                                me = !0,
                                _t = null,
                                n = lp(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Xr(), r === l)) {
                        t = on(e, t, n);
                        break e;
                    }
                    Xe(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                op(t),
                e === null && au(t),
                (r = t.type),
                (l = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (i = l.children),
                nu(r, l)
                    ? (i = null)
                    : o !== null && nu(r, o) && (t.flags |= 32),
                _p(e, t),
                Xe(e, t, i, n),
                t.child
            );
        case 6:
            return e === null && au(t), null;
        case 13:
            return Tp(e, t, n);
        case 4:
            return (
                ds(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = Zr(t, null, r, n)) : Xe(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Rt(r, l)),
                Bc(e, t, r, l, n)
            );
        case 7:
            return Xe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Xe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Xe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (l = t.pendingProps),
                    (o = t.memoizedProps),
                    (i = l.value),
                    ce(ui, r._currentValue),
                    (r._currentValue = i),
                    o !== null)
                )
                    if (jt(o.value, i)) {
                        if (o.children === l.children && !lt.current) {
                            t = on(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            o = t.child, o !== null && (o.return = t);
                            o !== null;

                        ) {
                            var a = o.dependencies;
                            if (a !== null) {
                                i = o.child;
                                for (var u = a.firstContext; u !== null; ) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            (u = en(-1, n & -n)), (u.tag = 2);
                                            var s = o.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var f = s.pending;
                                                f === null
                                                    ? (u.next = u)
                                                    : ((u.next = f.next),
                                                      (f.next = u)),
                                                    (s.pending = u);
                                            }
                                        }
                                        (o.lanes |= n),
                                            (u = o.alternate),
                                            u !== null && (u.lanes |= n),
                                            uu(o.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (o.tag === 10)
                                i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((i = o.return), i === null))
                                    throw Error(_(341));
                                (i.lanes |= n),
                                    (a = i.alternate),
                                    a !== null && (a.lanes |= n),
                                    uu(i, n, t),
                                    (i = o.sibling);
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null; ) {
                                    if (i === t) {
                                        i = null;
                                        break;
                                    }
                                    if (((o = i.sibling), o !== null)) {
                                        (o.return = i.return), (i = o);
                                        break;
                                    }
                                    i = i.return;
                                }
                            o = i;
                        }
                Xe(e, t, l.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (l = t.type),
                (r = t.pendingProps.children),
                Wr(t, n),
                (l = St(l)),
                (r = r(l)),
                (t.flags |= 1),
                Xe(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (l = Rt(r, t.pendingProps)),
                (l = Rt(r.type, l)),
                Hc(e, t, r, l, n)
            );
        case 15:
            return Np(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Rt(r, l)),
                Wo(e, t),
                (t.tag = 1),
                ot(r) ? ((e = !0), oi(t)) : (e = !1),
                Wr(t, n),
                np(t, r, l),
                cu(t, r, l, n),
                pu(null, t, r, !0, e, n)
            );
        case 19:
            return Op(e, t, n);
        case 22:
            return Mp(e, t, n);
    }
    throw Error(_(156, t.tag));
};
function Yp(e, t) {
    return xf(e, t);
}
function t0(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function yt(e, t, n, r) {
    return new t0(e, t, n, r);
}
function Rs(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function n0(e) {
    if (typeof e == "function") return Rs(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Wu)) return 11;
        if (e === Ku) return 14;
    }
    return 2;
}
function In(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = yt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Yo(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) Rs(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
        e: switch (e) {
            case Nr:
                return ar(n.children, l, o, t);
            case Vu:
                (i = 8), (l |= 8);
                break;
            case Ia:
                return (
                    (e = yt(12, n, t, l | 2)),
                    (e.elementType = Ia),
                    (e.lanes = o),
                    e
                );
            case Da:
                return (
                    (e = yt(13, n, t, l)),
                    (e.elementType = Da),
                    (e.lanes = o),
                    e
                );
            case Fa:
                return (
                    (e = yt(19, n, t, l)),
                    (e.elementType = Fa),
                    (e.lanes = o),
                    e
                );
            case nf:
                return Oi(n, l, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case ef:
                            i = 10;
                            break e;
                        case tf:
                            i = 9;
                            break e;
                        case Wu:
                            i = 11;
                            break e;
                        case Ku:
                            i = 14;
                            break e;
                        case xn:
                            (i = 16), (r = null);
                            break e;
                    }
                throw Error(_(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = yt(i, n, t, l)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
    );
}
function ar(e, t, n, r) {
    return (e = yt(7, e, r, t)), (e.lanes = n), e;
}
function Oi(e, t, n, r) {
    return (
        (e = yt(22, e, r, t)),
        (e.elementType = nf),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function wa(e, t, n) {
    return (e = yt(6, e, null, t)), (e.lanes = n), e;
}
function xa(e, t, n) {
    return (
        (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function r0(e, t, n, r, l) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = ea(0)),
        (this.expirationTimes = ea(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = ea(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function Ns(e, t, n, r, l, o, i, a, u) {
    return (
        (e = new r0(e, t, n, a, u)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = yt(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        cs(o),
        e
    );
}
function l0(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Rr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function Gp(e) {
    if (!e) return $n;
    e = e._reactInternals;
    e: {
        if (gr(e) !== e || e.tag !== 1) throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ot(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(_(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ot(n)) return Yf(e, n, t);
    }
    return t;
}
function Xp(e, t, n, r, l, o, i, a, u) {
    return (
        (e = Ns(n, r, !0, e, l, o, i, a, u)),
        (e.context = Gp(null)),
        (n = e.current),
        (r = Ze()),
        (l = jn(n)),
        (o = en(r, l)),
        (o.callback = t ?? null),
        Tn(n, o, l),
        (e.current.lanes = l),
        ao(e, l, r),
        it(e, r),
        e
    );
}
function ji(e, t, n, r) {
    var l = t.current,
        o = Ze(),
        i = jn(l);
    return (
        (n = Gp(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = en(o, i)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Tn(l, t, i)),
        e !== null && (Ot(e, l, i, o), Ho(e, l, i)),
        i
    );
}
function yi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function ed(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Ms(e, t) {
    ed(e, t), (e = e.alternate) && ed(e, t);
}
function o0() {
    return null;
}
var Zp =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function _s(e) {
    this._internalRoot = e;
}
Ii.prototype.render = _s.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(_(409));
    ji(e, t, null, null);
};
Ii.prototype.unmount = _s.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        hr(function () {
            ji(null, e, null, null);
        }),
            (t[rn] = null);
    }
};
function Ii(e) {
    this._internalRoot = e;
}
Ii.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Nf();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < En.length && t !== 0 && t < En[n].priority; n++);
        En.splice(n, 0, e), n === 0 && _f(e);
    }
};
function Ls(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Di(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function td() {}
function i0(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var s = yi(i);
                o.call(s);
            };
        }
        var i = Xp(t, r, e, 0, null, !1, !1, "", td);
        return (
            (e._reactRootContainer = i),
            (e[rn] = i.current),
            Yl(e.nodeType === 8 ? e.parentNode : e),
            hr(),
            i
        );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var s = yi(u);
            a.call(s);
        };
    }
    var u = Ns(e, 0, !1, null, null, !1, !1, "", td);
    return (
        (e._reactRootContainer = u),
        (e[rn] = u.current),
        Yl(e.nodeType === 8 ? e.parentNode : e),
        hr(function () {
            ji(t, u, n, r);
        }),
        u
    );
}
function Fi(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var a = l;
            l = function () {
                var u = yi(i);
                a.call(u);
            };
        }
        ji(t, i, e, l);
    } else i = i0(n, t, e, l, r);
    return yi(i);
}
Pf = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Nl(t.pendingLanes);
                n !== 0 &&
                    (Gu(t, n | 1),
                    it(t, Ce()),
                    !(J & 6) && ((el = Ce() + 500), Bn()));
            }
            break;
        case 13:
            hr(function () {
                var r = ln(e, 1);
                if (r !== null) {
                    var l = Ze();
                    Ot(r, e, 1, l);
                }
            }),
                Ms(e, 1);
    }
};
Xu = function (e) {
    if (e.tag === 13) {
        var t = ln(e, 134217728);
        if (t !== null) {
            var n = Ze();
            Ot(t, e, 134217728, n);
        }
        Ms(e, 134217728);
    }
};
Rf = function (e) {
    if (e.tag === 13) {
        var t = jn(e),
            n = ln(e, t);
        if (n !== null) {
            var r = Ze();
            Ot(n, e, t, r);
        }
        Ms(e, t);
    }
};
Nf = function () {
    return oe;
};
Mf = function (e, t) {
    var n = oe;
    try {
        return (oe = e), t();
    } finally {
        oe = n;
    }
};
Ka = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Aa(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = Ri(r);
                        if (!l) throw Error(_(90));
                        lf(r), Aa(r, l);
                    }
                }
            }
            break;
        case "textarea":
            af(e, n);
            break;
        case "select":
            (t = n.value), t != null && Br(e, !!n.multiple, t, !1);
    }
};
hf = ks;
mf = hr;
var a0 = { usingClientEntryPoint: !1, Events: [so, Tr, Ri, ff, pf, ks] },
    Sl = {
        findFiberByHostInstance: nr,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    u0 = {
        bundleType: Sl.bundleType,
        version: Sl.version,
        rendererPackageName: Sl.rendererPackageName,
        rendererConfig: Sl.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: un.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = yf(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Sl.findFiberByHostInstance || o0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Io = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Io.isDisabled && Io.supportsFiber)
        try {
            (Ei = Io.inject(u0)), (Bt = Io);
        } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a0;
ft.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ls(t)) throw Error(_(200));
    return l0(e, t, null, n);
};
ft.createRoot = function (e, t) {
    if (!Ls(e)) throw Error(_(299));
    var n = !1,
        r = "",
        l = Zp;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ns(e, 1, !1, null, null, n, !1, r, l)),
        (e[rn] = t.current),
        Yl(e.nodeType === 8 ? e.parentNode : e),
        new _s(t)
    );
};
ft.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(_(188))
            : ((e = Object.keys(e).join(",")), Error(_(268, e)));
    return (e = yf(t)), (e = e === null ? null : e.stateNode), e;
};
ft.flushSync = function (e) {
    return hr(e);
};
ft.hydrate = function (e, t, n) {
    if (!Di(t)) throw Error(_(200));
    return Fi(null, e, t, !0, n);
};
ft.hydrateRoot = function (e, t, n) {
    if (!Ls(e)) throw Error(_(405));
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        i = Zp;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Xp(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[rn] = t.current),
        Yl(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (l = n._getVersion),
                (l = l(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, l])
                    : t.mutableSourceEagerHydrationData.push(n, l);
    return new Ii(t);
};
ft.render = function (e, t, n) {
    if (!Di(t)) throw Error(_(200));
    return Fi(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function (e) {
    if (!Di(e)) throw Error(_(40));
    return e._reactRootContainer
        ? (hr(function () {
              Fi(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[rn] = null);
              });
          }),
          !0)
        : !1;
};
ft.unstable_batchedUpdates = ks;
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Di(n)) throw Error(_(200));
    if (e == null || e._reactInternals === void 0) throw Error(_(38));
    return Fi(e, t, n, !1, r);
};
ft.version = "18.2.0-next-9e3b772b8-20220608";
function Jp() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp);
        } catch (e) {
            console.error(e);
        }
}
Jp(), (Gd.exports = ft);
var s0 = Gd.exports,
    nd = s0;
(Oa.createRoot = nd.createRoot), (Oa.hydrateRoot = nd.hydrateRoot);
const c0 = "modulepreload",
    d0 = function (e) {
        return "/" + e;
    },
    rd = {},
    yr = function (t, n, r) {
        if (!n || n.length === 0) return t();
        const l = document.getElementsByTagName("link");
        return Promise.all(
            n.map((o) => {
                if (((o = d0(o)), o in rd)) return;
                rd[o] = !0;
                const i = o.endsWith(".css"),
                    a = i ? '[rel="stylesheet"]' : "";
                if (!!r)
                    for (let f = l.length - 1; f >= 0; f--) {
                        const h = l[f];
                        if (h.href === o && (!i || h.rel === "stylesheet"))
                            return;
                    }
                else if (document.querySelector(`link[href="${o}"]${a}`))
                    return;
                const s = document.createElement("link");
                if (
                    ((s.rel = i ? "stylesheet" : c0),
                    i || ((s.as = "script"), (s.crossOrigin = "")),
                    (s.href = o),
                    document.head.appendChild(s),
                    i)
                )
                    return new Promise((f, h) => {
                        s.addEventListener("load", f),
                            s.addEventListener("error", () =>
                                h(new Error(`Unable to preload CSS for ${o}`))
                            );
                    });
            })
        ).then(() => t());
    };
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function te() {
    return (
        (te = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        te.apply(this, arguments)
    );
}
var _e;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(_e || (_e = {}));
const ld = "popstate";
function f0(e) {
    e === void 0 && (e = {});
    function t(r, l) {
        let { pathname: o, search: i, hash: a } = r.location;
        return ro(
            "",
            { pathname: o, search: i, hash: a },
            (l.state && l.state.usr) || null,
            (l.state && l.state.key) || "default"
        );
    }
    function n(r, l) {
        return typeof l == "string" ? l : mr(l);
    }
    return h0(t, n, null, e);
}
function Q(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function tl(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function p0() {
    return Math.random().toString(36).substr(2, 8);
}
function od(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function ro(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        te(
            {
                pathname: typeof e == "string" ? e : e.pathname,
                search: "",
                hash: "",
            },
            typeof t == "string" ? sn(t) : t,
            { state: n, key: (t && t.key) || r || p0() }
        )
    );
}
function mr(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function sn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
    }
    return t;
}
function h0(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: l = document.defaultView, v5Compat: o = !1 } = r,
        i = l.history,
        a = _e.Pop,
        u = null,
        s = f();
    s == null && ((s = 0), i.replaceState(te({}, i.state, { idx: s }), ""));
    function f() {
        return (i.state || { idx: null }).idx;
    }
    function h() {
        a = _e.Pop;
        let S = f(),
            c = S == null ? null : S - s;
        (s = S), u && u({ action: a, location: w.location, delta: c });
    }
    function m(S, c) {
        a = _e.Push;
        let d = ro(w.location, S, c);
        n && n(d, S), (s = f() + 1);
        let g = od(d, s),
            x = w.createHref(d);
        try {
            i.pushState(g, "", x);
        } catch {
            l.location.assign(x);
        }
        o && u && u({ action: a, location: w.location, delta: 1 });
    }
    function y(S, c) {
        a = _e.Replace;
        let d = ro(w.location, S, c);
        n && n(d, S), (s = f());
        let g = od(d, s),
            x = w.createHref(d);
        i.replaceState(g, "", x),
            o && u && u({ action: a, location: w.location, delta: 0 });
    }
    function v(S) {
        let c =
                l.location.origin !== "null"
                    ? l.location.origin
                    : l.location.href,
            d = typeof S == "string" ? S : mr(S);
        return (
            Q(
                c,
                "No window.location.(origin|href) available to create URL for href: " +
                    d
            ),
            new URL(d, c)
        );
    }
    let w = {
        get action() {
            return a;
        },
        get location() {
            return e(l, i);
        },
        listen(S) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return (
                l.addEventListener(ld, h),
                (u = S),
                () => {
                    l.removeEventListener(ld, h), (u = null);
                }
            );
        },
        createHref(S) {
            return t(l, S);
        },
        createURL: v,
        encodeLocation(S) {
            let c = v(S);
            return { pathname: c.pathname, search: c.search, hash: c.hash };
        },
        push: m,
        replace: y,
        go(S) {
            return i.go(S);
        },
    };
    return w;
}
var Oe;
(function (e) {
    (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
})(Oe || (Oe = {}));
const m0 = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children",
]);
function v0(e) {
    return e.index === !0;
}
function Pu(e, t, n, r) {
    return (
        n === void 0 && (n = []),
        r === void 0 && (r = {}),
        e.map((l, o) => {
            let i = [...n, o],
                a = typeof l.id == "string" ? l.id : i.join("-");
            if (
                (Q(
                    l.index !== !0 || !l.children,
                    "Cannot specify children on an index route"
                ),
                Q(
                    !r[a],
                    'Found a route id collision on id "' +
                        a +
                        `".  Route id's must be globally unique within Data Router usages`
                ),
                v0(l))
            ) {
                let u = te({}, l, t(l), { id: a });
                return (r[a] = u), u;
            } else {
                let u = te({}, l, t(l), { id: a, children: void 0 });
                return (
                    (r[a] = u),
                    l.children && (u.children = Pu(l.children, t, i, r)),
                    u
                );
            }
        })
    );
}
function zr(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? sn(t) : t,
        l = il(r.pathname || "/", n);
    if (l == null) return null;
    let o = qp(e);
    g0(o);
    let i = null;
    for (let a = 0; i == null && a < o.length; ++a) i = R0(o[a], _0(l));
    return i;
}
function qp(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let l = (o, i, a) => {
        let u = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o,
        };
        u.relativePath.startsWith("/") &&
            (Q(
                u.relativePath.startsWith(r),
                'Absolute route path "' +
                    u.relativePath +
                    '" nested under path ' +
                    ('"' +
                        r +
                        '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (u.relativePath = u.relativePath.slice(r.length)));
        let s = tn([r, u.relativePath]),
            f = n.concat(u);
        o.children &&
            o.children.length > 0 &&
            (Q(
                o.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + s + '".')
            ),
            qp(o.children, t, f, s)),
            !(o.path == null && !o.index) &&
                t.push({ path: s, score: C0(s, o.index), routesMeta: f });
    };
    return (
        e.forEach((o, i) => {
            var a;
            if (o.path === "" || !((a = o.path) != null && a.includes("?")))
                l(o, i);
            else for (let u of eh(o.path)) l(o, i, u);
        }),
        t
    );
}
function eh(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        l = n.endsWith("?"),
        o = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [o, ""] : [o];
    let i = eh(r.join("/")),
        a = [];
    return (
        a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
        l && a.push(...i),
        a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
    );
}
function g0(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : P0(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const y0 = /^:\w+$/,
    w0 = 3,
    x0 = 2,
    S0 = 1,
    E0 = 10,
    k0 = -2,
    id = (e) => e === "*";
function C0(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(id) && (r += k0),
        t && (r += x0),
        n
            .filter((l) => !id(l))
            .reduce((l, o) => l + (y0.test(o) ? w0 : o === "" ? S0 : E0), r)
    );
}
function P0(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
}
function R0(e, t) {
    let { routesMeta: n } = e,
        r = {},
        l = "/",
        o = [];
    for (let i = 0; i < n.length; ++i) {
        let a = n[i],
            u = i === n.length - 1,
            s = l === "/" ? t : t.slice(l.length) || "/",
            f = N0(
                {
                    path: a.relativePath,
                    caseSensitive: a.caseSensitive,
                    end: u,
                },
                s
            );
        if (!f) return null;
        Object.assign(r, f.params);
        let h = a.route;
        o.push({
            params: r,
            pathname: tn([l, f.pathname]),
            pathnameBase: j0(tn([l, f.pathnameBase])),
            route: h,
        }),
            f.pathnameBase !== "/" && (l = tn([l, f.pathnameBase]));
    }
    return o;
}
function N0(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = M0(e.path, e.caseSensitive, e.end),
        l = t.match(n);
    if (!l) return null;
    let o = l[0],
        i = o.replace(/(.)\/+$/, "$1"),
        a = l.slice(1);
    return {
        params: r.reduce((s, f, h) => {
            if (f === "*") {
                let m = a[h] || "";
                i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
            }
            return (s[f] = L0(a[h] || "", f)), s;
        }, {}),
        pathname: o,
        pathnameBase: i,
        pattern: e,
    };
}
function M0(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        tl(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' +
                    e.replace(/\*$/, "/*") +
                    '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' +
                    e.replace(/\*$/, "/*") +
                    '".')
        );
    let r = [],
        l =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                .replace(/\/:(\w+)/g, (i, a) => (r.push(a), "/([^\\/]+)"));
    return (
        e.endsWith("*")
            ? (r.push("*"),
              (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
            ? (l += "\\/*$")
            : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
        [new RegExp(l, t ? void 0 : "i"), r]
    );
}
function _0(e) {
    try {
        return decodeURI(e);
    } catch (t) {
        return (
            tl(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ").")
            ),
            e
        );
    }
}
function L0(e, t) {
    try {
        return decodeURIComponent(e);
    } catch (n) {
        return (
            tl(
                !1,
                'The value for the URL param "' +
                    t +
                    '" will not be decoded because' +
                    (' the string "' +
                        e +
                        '" is a malformed URL segment. This is probably') +
                    (" due to a bad percent encoding (" + n + ").")
            ),
            e
        );
    }
}
function il(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function T0(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = "",
    } = typeof e == "string" ? sn(e) : e;
    return {
        pathname: n ? (n.startsWith("/") ? n : O0(n, t)) : t,
        search: I0(r),
        hash: D0(l),
    };
}
function O0(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((l) => {
            l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function Sa(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." +
            t +
            "` field [" +
            JSON.stringify(r) +
            "].  Please separate it out to the ") +
        ("`to." +
            n +
            "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function fo(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
    );
}
function $i(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string"
        ? (l = sn(e))
        : ((l = te({}, e)),
          Q(
              !l.pathname || !l.pathname.includes("?"),
              Sa("?", "pathname", "search", l)
          ),
          Q(
              !l.pathname || !l.pathname.includes("#"),
              Sa("#", "pathname", "hash", l)
          ),
          Q(
              !l.search || !l.search.includes("#"),
              Sa("#", "search", "hash", l)
          ));
    let o = e === "" || l.pathname === "",
        i = o ? "/" : l.pathname,
        a;
    if (r || i == null) a = n;
    else {
        let h = t.length - 1;
        if (i.startsWith("..")) {
            let m = i.split("/");
            for (; m[0] === ".."; ) m.shift(), (h -= 1);
            l.pathname = m.join("/");
        }
        a = h >= 0 ? t[h] : "/";
    }
    let u = T0(l, a),
        s = i && i !== "/" && i.endsWith("/"),
        f = (o || i === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (s || f) && (u.pathname += "/"), u;
}
const tn = (e) => e.join("/").replace(/\/\/+/g, "/"),
    j0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    I0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    D0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Ts {
    constructor(t, n, r, l) {
        l === void 0 && (l = !1),
            (this.status = t),
            (this.statusText = n || ""),
            (this.internal = l),
            r instanceof Error
                ? ((this.data = r.toString()), (this.error = r))
                : (this.data = r);
    }
}
function th(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const nh = ["post", "put", "patch", "delete"],
    F0 = new Set(nh),
    $0 = ["get", ...nh],
    z0 = new Set($0),
    A0 = new Set([301, 302, 303, 307, 308]),
    U0 = new Set([307, 308]),
    Ea = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
    },
    B0 = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
    },
    ad = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0,
    },
    rh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    lh =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    H0 = !lh,
    b0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function V0(e) {
    Q(
        e.routes.length > 0,
        "You must provide a non-empty routes array to createRouter"
    );
    let t;
    if (e.mapRouteProperties) t = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let k = e.detectErrorBoundary;
        t = (C) => ({ hasErrorBoundary: k(C) });
    } else t = b0;
    let n = {},
        r = Pu(e.routes, t, void 0, n),
        l,
        o = e.basename || "/",
        i = te(
            { v7_normalizeFormMethod: !1, v7_prependBasename: !1 },
            e.future
        ),
        a = null,
        u = new Set(),
        s = null,
        f = null,
        h = null,
        m = e.hydrationData != null,
        y = zr(r, e.history.location, o),
        v = null;
    if (y == null) {
        let k = Nt(404, { pathname: e.history.location.pathname }),
            { matches: C, route: N } = hd(r);
        (y = C), (v = { [N.id]: k });
    }
    let w =
            !y.some((k) => k.route.lazy) &&
            (!y.some((k) => k.route.loader) || e.hydrationData != null),
        S,
        c = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: y,
            initialized: w,
            navigation: Ea,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || v,
            fetchers: new Map(),
            blockers: new Map(),
        },
        d = _e.Pop,
        g = !1,
        x,
        P = !1,
        R = !1,
        M = [],
        T = [],
        O = new Map(),
        j = 0,
        Z = -1,
        q = new Map(),
        ae = new Set(),
        ie = new Map(),
        Y = new Map(),
        ue = new Map(),
        ee = !1;
    function L() {
        return (
            (a = e.history.listen((k) => {
                let { action: C, location: N, delta: I } = k;
                if (ee) {
                    ee = !1;
                    return;
                }
                tl(
                    ue.size === 0 || I != null,
                    "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                );
                let $ = Qn({
                    currentLocation: c.location,
                    nextLocation: N,
                    historyAction: C,
                });
                if ($ && I != null) {
                    (ee = !0),
                        e.history.go(I * -1),
                        Kn($, {
                            state: "blocked",
                            location: N,
                            proceed() {
                                Kn($, {
                                    state: "proceeding",
                                    proceed: void 0,
                                    reset: void 0,
                                    location: N,
                                }),
                                    e.history.go(I);
                            },
                            reset() {
                                Wn($),
                                    U({ blockers: new Map(S.state.blockers) });
                            },
                        });
                    return;
                }
                return Pe(C, N);
            })),
            c.initialized || Pe(_e.Pop, c.location),
            S
        );
    }
    function F() {
        a && a(),
            u.clear(),
            x && x.abort(),
            c.fetchers.forEach((k, C) => hn(C)),
            c.blockers.forEach((k, C) => Wn(C));
    }
    function B(k) {
        return u.add(k), () => u.delete(k);
    }
    function U(k) {
        (c = te({}, c, k)), u.forEach((C) => C(c));
    }
    function ne(k, C) {
        var N, I;
        let $ =
                c.actionData != null &&
                c.navigation.formMethod != null &&
                Yt(c.navigation.formMethod) &&
                c.navigation.state === "loading" &&
                ((N = k.state) == null ? void 0 : N._isRedirect) !== !0,
            b;
        C.actionData
            ? Object.keys(C.actionData).length > 0
                ? (b = C.actionData)
                : (b = null)
            : $
            ? (b = c.actionData)
            : (b = null);
        let V = C.loaderData
            ? pd(c.loaderData, C.loaderData, C.matches || [], C.errors)
            : c.loaderData;
        for (let [z] of ue) Wn(z);
        let H =
            g === !0 ||
            (c.navigation.formMethod != null &&
                Yt(c.navigation.formMethod) &&
                ((I = k.state) == null ? void 0 : I._isRedirect) !== !0);
        l && ((r = l), (l = void 0)),
            U(
                te({}, C, {
                    actionData: b,
                    loaderData: V,
                    historyAction: d,
                    location: k,
                    initialized: !0,
                    navigation: Ea,
                    revalidation: "idle",
                    restoreScrollPosition: Ct(k, C.matches || c.matches),
                    preventScrollReset: H,
                    blockers: new Map(c.blockers),
                })
            ),
            P ||
                d === _e.Pop ||
                (d === _e.Push
                    ? e.history.push(k, k.state)
                    : d === _e.Replace && e.history.replace(k, k.state)),
            (d = _e.Pop),
            (g = !1),
            (P = !1),
            (R = !1),
            (M = []),
            (T = []);
    }
    async function ve(k, C) {
        if (typeof k == "number") {
            e.history.go(k);
            return;
        }
        let N = Ru(
                c.location,
                c.matches,
                o,
                i.v7_prependBasename,
                k,
                C == null ? void 0 : C.fromRouteId,
                C == null ? void 0 : C.relative
            ),
            {
                path: I,
                submission: $,
                error: b,
            } = ud(i.v7_normalizeFormMethod, !1, N, C),
            V = c.location,
            H = ro(c.location, I, C && C.state);
        H = te({}, H, e.history.encodeLocation(H));
        let z = C && C.replace != null ? C.replace : void 0,
            X = _e.Push;
        z === !0
            ? (X = _e.Replace)
            : z === !1 ||
              ($ != null &&
                  Yt($.formMethod) &&
                  $.formAction === c.location.pathname + c.location.search &&
                  (X = _e.Replace));
        let re =
                C && "preventScrollReset" in C
                    ? C.preventScrollReset === !0
                    : void 0,
            De = Qn({ currentLocation: V, nextLocation: H, historyAction: X });
        if (De) {
            Kn(De, {
                state: "blocked",
                location: H,
                proceed() {
                    Kn(De, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: H,
                    }),
                        ve(k, C);
                },
                reset() {
                    Wn(De), U({ blockers: new Map(c.blockers) });
                },
            });
            return;
        }
        return await Pe(X, H, {
            submission: $,
            pendingError: b,
            preventScrollReset: re,
            replace: C && C.replace,
        });
    }
    function ze() {
        if (
            (ht(),
            U({ revalidation: "loading" }),
            c.navigation.state !== "submitting")
        ) {
            if (c.navigation.state === "idle") {
                Pe(c.historyAction, c.location, {
                    startUninterruptedRevalidation: !0,
                });
                return;
            }
            Pe(d || c.historyAction, c.navigation.location, {
                overrideNavigation: c.navigation,
            });
        }
    }
    async function Pe(k, C, N) {
        x && x.abort(),
            (x = null),
            (d = k),
            (P = (N && N.startUninterruptedRevalidation) === !0),
            go(c.location, c.matches),
            (g = (N && N.preventScrollReset) === !0);
        let I = l || r,
            $ = N && N.overrideNavigation,
            b = zr(I, C, o);
        if (!b) {
            let Ne = Nt(404, { pathname: C.pathname }),
                { matches: Me, route: Ae } = hd(I);
            Sr(),
                ne(C, { matches: Me, loaderData: {}, errors: { [Ae.id]: Ne } });
            return;
        }
        if (
            c.initialized &&
            G0(c.location, C) &&
            !(N && N.submission && Yt(N.submission.formMethod))
        ) {
            ne(C, { matches: b });
            return;
        }
        x = new AbortController();
        let V = kl(e.history, C, x.signal, N && N.submission),
            H,
            z;
        if (N && N.pendingError) z = { [Ar(b).route.id]: N.pendingError };
        else if (N && N.submission && Yt(N.submission.formMethod)) {
            let Ne = await Re(V, C, N.submission, b, { replace: N.replace });
            if (Ne.shortCircuited) return;
            (H = Ne.pendingActionData),
                (z = Ne.pendingActionError),
                ($ = te({ state: "loading", location: C }, N.submission)),
                (V = new Request(V.url, { signal: V.signal }));
        }
        let {
            shortCircuited: X,
            loaderData: re,
            errors: De,
        } = await et(
            V,
            C,
            b,
            $,
            N && N.submission,
            N && N.fetcherSubmission,
            N && N.replace,
            H,
            z
        );
        X ||
            ((x = null),
            ne(
                C,
                te({ matches: b }, H ? { actionData: H } : {}, {
                    loaderData: re,
                    errors: De,
                })
            ));
    }
    async function Re(k, C, N, I, $) {
        ht();
        let b = te({ state: "submitting", location: C }, N);
        U({ navigation: b });
        let V,
            H = Nu(I, C);
        if (!H.route.action && !H.route.lazy)
            V = {
                type: Oe.error,
                error: Nt(405, {
                    method: k.method,
                    pathname: C.pathname,
                    routeId: H.route.id,
                }),
            };
        else if (((V = await El("action", k, H, I, n, t, o)), k.signal.aborted))
            return { shortCircuited: !0 };
        if (Qr(V)) {
            let z;
            return (
                $ && $.replace != null
                    ? (z = $.replace)
                    : (z =
                          V.location ===
                          c.location.pathname + c.location.search),
                await kt(c, V, { submission: N, replace: z }),
                { shortCircuited: !0 }
            );
        }
        if (Al(V)) {
            let z = Ar(I, H.route.id);
            return (
                ($ && $.replace) !== !0 && (d = _e.Push),
                {
                    pendingActionData: {},
                    pendingActionError: { [z.route.id]: V.error },
                }
            );
        }
        if (or(V)) throw Nt(400, { type: "defer-action" });
        return { pendingActionData: { [H.route.id]: V.data } };
    }
    async function et(k, C, N, I, $, b, V, H, z) {
        let X = I;
        X ||
            (X = te(
                {
                    state: "loading",
                    location: C,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                },
                $
            ));
        let re =
                $ || b
                    ? $ || b
                    : X.formMethod &&
                      X.formAction &&
                      X.formData &&
                      X.formEncType
                    ? {
                          formMethod: X.formMethod,
                          formAction: X.formAction,
                          formData: X.formData,
                          formEncType: X.formEncType,
                      }
                    : void 0,
            De = l || r,
            [Ne, Me] = sd(e.history, c, N, re, C, R, M, T, ie, De, o, H, z);
        if (
            (Sr(
                (se) =>
                    !(N && N.some((Ge) => Ge.route.id === se)) ||
                    (Ne && Ne.some((Ge) => Ge.route.id === se))
            ),
            Ne.length === 0 && Me.length === 0)
        ) {
            let se = It();
            return (
                ne(
                    C,
                    te(
                        { matches: N, loaderData: {}, errors: z || null },
                        H ? { actionData: H } : {},
                        se ? { fetchers: new Map(c.fetchers) } : {}
                    )
                ),
                { shortCircuited: !0 }
            );
        }
        if (!P) {
            Me.forEach((Ge) => {
                let gn = c.fetchers.get(Ge.key),
                    pe = {
                        state: "loading",
                        data: gn && gn.data,
                        formMethod: void 0,
                        formAction: void 0,
                        formEncType: void 0,
                        formData: void 0,
                        " _hasFetcherDoneAnything ": !0,
                    };
                c.fetchers.set(Ge.key, pe);
            });
            let se = H || c.actionData;
            U(
                te(
                    { navigation: X },
                    se
                        ? Object.keys(se).length === 0
                            ? { actionData: null }
                            : { actionData: se }
                        : {},
                    Me.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
                )
            );
        }
        (Z = ++j),
            Me.forEach((se) => {
                se.controller && O.set(se.key, se.controller);
            });
        let Ae = () => Me.forEach((se) => Te(se.key));
        x && x.signal.addEventListener("abort", Ae);
        let {
            results: mn,
            loaderResults: cl,
            fetcherResults: vn,
        } = await pn(c.matches, N, Ne, Me, k);
        if (k.signal.aborted) return { shortCircuited: !0 };
        x && x.signal.removeEventListener("abort", Ae),
            Me.forEach((se) => O.delete(se.key));
        let Dt = md(mn);
        if (Dt) return await kt(c, Dt, { replace: V }), { shortCircuited: !0 };
        let { loaderData: Yn, errors: Er } = fd(c, N, Ne, cl, z, Me, vn, Y);
        Y.forEach((se, Ge) => {
            se.subscribe((gn) => {
                (gn || se.done) && Y.delete(Ge);
            });
        });
        let Ft = It(),
            dl = vo(Z),
            Gn = Ft || dl || Me.length > 0;
        return te(
            { loaderData: Yn, errors: Er },
            Gn ? { fetchers: new Map(c.fetchers) } : {}
        );
    }
    function Wt(k) {
        return c.fetchers.get(k) || B0;
    }
    function fn(k, C, N, I) {
        if (H0)
            throw new Error(
                "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
            );
        O.has(k) && Te(k);
        let $ = l || r,
            b = Ru(
                c.location,
                c.matches,
                o,
                i.v7_prependBasename,
                N,
                C,
                I == null ? void 0 : I.relative
            ),
            V = zr($, b, o);
        if (!V) {
            tt(k, C, Nt(404, { pathname: b }));
            return;
        }
        let { path: H, submission: z } = ud(i.v7_normalizeFormMethod, !0, b, I),
            X = Nu(V, H);
        if (((g = (I && I.preventScrollReset) === !0), z && Yt(z.formMethod))) {
            bn(k, C, H, X, V, z);
            return;
        }
        ie.set(k, { routeId: C, path: H }), Vn(k, C, H, X, V, z);
    }
    async function bn(k, C, N, I, $, b) {
        if ((ht(), ie.delete(k), !I.route.action && !I.route.lazy)) {
            let W = Nt(405, { method: b.formMethod, pathname: N, routeId: C });
            tt(k, C, W);
            return;
        }
        let V = c.fetchers.get(k),
            H = te({ state: "submitting" }, b, {
                data: V && V.data,
                " _hasFetcherDoneAnything ": !0,
            });
        c.fetchers.set(k, H), U({ fetchers: new Map(c.fetchers) });
        let z = new AbortController(),
            X = kl(e.history, N, z.signal, b);
        O.set(k, z);
        let re = await El("action", X, I, $, n, t, o);
        if (X.signal.aborted) {
            O.get(k) === z && O.delete(k);
            return;
        }
        if (Qr(re)) {
            O.delete(k), ae.add(k);
            let W = te({ state: "loading" }, b, {
                data: void 0,
                " _hasFetcherDoneAnything ": !0,
            });
            return (
                c.fetchers.set(k, W),
                U({ fetchers: new Map(c.fetchers) }),
                kt(c, re, { submission: b, isFetchActionRedirect: !0 })
            );
        }
        if (Al(re)) {
            tt(k, C, re.error);
            return;
        }
        if (or(re)) throw Nt(400, { type: "defer-action" });
        let De = c.navigation.location || c.location,
            Ne = kl(e.history, De, z.signal),
            Me = l || r,
            Ae =
                c.navigation.state !== "idle"
                    ? zr(Me, c.navigation.location, o)
                    : c.matches;
        Q(Ae, "Didn't find any matches after fetcher action");
        let mn = ++j;
        q.set(k, mn);
        let cl = te({ state: "loading", data: re.data }, b, {
            " _hasFetcherDoneAnything ": !0,
        });
        c.fetchers.set(k, cl);
        let [vn, Dt] = sd(
            e.history,
            c,
            Ae,
            b,
            De,
            R,
            M,
            T,
            ie,
            Me,
            o,
            { [I.route.id]: re.data },
            void 0
        );
        Dt.filter((W) => W.key !== k).forEach((W) => {
            let K = W.key,
                ke = c.fetchers.get(K),
                he = {
                    state: "loading",
                    data: ke && ke.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0,
                };
            c.fetchers.set(K, he), W.controller && O.set(K, W.controller);
        }),
            U({ fetchers: new Map(c.fetchers) });
        let Yn = () => Dt.forEach((W) => Te(W.key));
        z.signal.addEventListener("abort", Yn);
        let {
            results: Er,
            loaderResults: Ft,
            fetcherResults: dl,
        } = await pn(c.matches, Ae, vn, Dt, Ne);
        if (z.signal.aborted) return;
        z.signal.removeEventListener("abort", Yn),
            q.delete(k),
            O.delete(k),
            Dt.forEach((W) => O.delete(W.key));
        let Gn = md(Er);
        if (Gn) return kt(c, Gn);
        let { loaderData: se, errors: Ge } = fd(
                c,
                c.matches,
                vn,
                Ft,
                void 0,
                Dt,
                dl,
                Y
            ),
            gn = {
                state: "idle",
                data: re.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0,
            };
        c.fetchers.set(k, gn);
        let pe = vo(mn);
        c.navigation.state === "loading" && mn > Z
            ? (Q(d, "Expected pending action"),
              x && x.abort(),
              ne(c.navigation.location, {
                  matches: Ae,
                  loaderData: se,
                  errors: Ge,
                  fetchers: new Map(c.fetchers),
              }))
            : (U(
                  te(
                      { errors: Ge, loaderData: pd(c.loaderData, se, Ae, Ge) },
                      pe ? { fetchers: new Map(c.fetchers) } : {}
                  )
              ),
              (R = !1));
    }
    async function Vn(k, C, N, I, $, b) {
        let V = c.fetchers.get(k),
            H = te(
                {
                    state: "loading",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                },
                b,
                { data: V && V.data, " _hasFetcherDoneAnything ": !0 }
            );
        c.fetchers.set(k, H), U({ fetchers: new Map(c.fetchers) });
        let z = new AbortController(),
            X = kl(e.history, N, z.signal);
        O.set(k, z);
        let re = await El("loader", X, I, $, n, t, o);
        if (
            (or(re) && (re = (await uh(re, X.signal, !0)) || re),
            O.get(k) === z && O.delete(k),
            X.signal.aborted)
        )
            return;
        if (Qr(re)) {
            ae.add(k), await kt(c, re);
            return;
        }
        if (Al(re)) {
            let Ne = Ar(c.matches, C);
            c.fetchers.delete(k),
                U({
                    fetchers: new Map(c.fetchers),
                    errors: { [Ne.route.id]: re.error },
                });
            return;
        }
        Q(!or(re), "Unhandled fetcher deferred data");
        let De = {
            state: "idle",
            data: re.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
        };
        c.fetchers.set(k, De), U({ fetchers: new Map(c.fetchers) });
    }
    async function kt(k, C, N) {
        var I;
        let {
            submission: $,
            replace: b,
            isFetchActionRedirect: V,
        } = N === void 0 ? {} : N;
        C.revalidate && (R = !0);
        let H = ro(
            k.location,
            C.location,
            te({ _isRedirect: !0 }, V ? { _isFetchActionRedirect: !0 } : {})
        );
        if (
            (Q(H, "Expected a location on the redirect navigation"),
            rh.test(C.location) &&
                lh &&
                typeof ((I = window) == null ? void 0 : I.location) < "u")
        ) {
            let Me = e.history.createURL(C.location),
                Ae = il(Me.pathname, o) == null;
            if (window.location.origin !== Me.origin || Ae) {
                b
                    ? window.location.replace(C.location)
                    : window.location.assign(C.location);
                return;
            }
        }
        x = null;
        let z = b === !0 ? _e.Replace : _e.Push,
            {
                formMethod: X,
                formAction: re,
                formEncType: De,
                formData: Ne,
            } = k.navigation;
        !$ &&
            X &&
            re &&
            Ne &&
            De &&
            ($ = {
                formMethod: X,
                formAction: re,
                formEncType: De,
                formData: Ne,
            }),
            U0.has(C.status) && $ && Yt($.formMethod)
                ? await Pe(z, H, {
                      submission: te({}, $, { formAction: C.location }),
                      preventScrollReset: g,
                  })
                : V
                ? await Pe(z, H, {
                      overrideNavigation: {
                          state: "loading",
                          location: H,
                          formMethod: void 0,
                          formAction: void 0,
                          formEncType: void 0,
                          formData: void 0,
                      },
                      fetcherSubmission: $,
                      preventScrollReset: g,
                  })
                : await Pe(z, H, {
                      overrideNavigation: {
                          state: "loading",
                          location: H,
                          formMethod: $ ? $.formMethod : void 0,
                          formAction: $ ? $.formAction : void 0,
                          formEncType: $ ? $.formEncType : void 0,
                          formData: $ ? $.formData : void 0,
                      },
                      preventScrollReset: g,
                  });
    }
    async function pn(k, C, N, I, $) {
        let b = await Promise.all([
                ...N.map((z) => El("loader", $, z, C, n, t, o)),
                ...I.map((z) =>
                    z.matches && z.match && z.controller
                        ? El(
                              "loader",
                              kl(e.history, z.path, z.controller.signal),
                              z.match,
                              z.matches,
                              n,
                              t,
                              o
                          )
                        : {
                              type: Oe.error,
                              error: Nt(404, { pathname: z.path }),
                          }
                ),
            ]),
            V = b.slice(0, N.length),
            H = b.slice(N.length);
        return (
            await Promise.all([
                vd(
                    k,
                    N,
                    V,
                    V.map(() => $.signal),
                    !1,
                    c.loaderData
                ),
                vd(
                    k,
                    I.map((z) => z.match),
                    H,
                    I.map((z) => (z.controller ? z.controller.signal : null)),
                    !0
                ),
            ]),
            { results: b, loaderResults: V, fetcherResults: H }
        );
    }
    function ht() {
        (R = !0),
            M.push(...Sr()),
            ie.forEach((k, C) => {
                O.has(C) && (T.push(C), Te(C));
            });
    }
    function tt(k, C, N) {
        let I = Ar(c.matches, C);
        hn(k),
            U({ errors: { [I.route.id]: N }, fetchers: new Map(c.fetchers) });
    }
    function hn(k) {
        O.has(k) && Te(k),
            ie.delete(k),
            q.delete(k),
            ae.delete(k),
            c.fetchers.delete(k);
    }
    function Te(k) {
        let C = O.get(k);
        Q(C, "Expected fetch controller: " + k), C.abort(), O.delete(k);
    }
    function Kt(k) {
        for (let C of k) {
            let I = {
                state: "idle",
                data: Wt(C).data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0,
            };
            c.fetchers.set(C, I);
        }
    }
    function It() {
        let k = [],
            C = !1;
        for (let N of ae) {
            let I = c.fetchers.get(N);
            Q(I, "Expected fetcher: " + N),
                I.state === "loading" && (ae.delete(N), k.push(N), (C = !0));
        }
        return Kt(k), C;
    }
    function vo(k) {
        let C = [];
        for (let [N, I] of q)
            if (I < k) {
                let $ = c.fetchers.get(N);
                Q($, "Expected fetcher: " + N),
                    $.state === "loading" && (Te(N), q.delete(N), C.push(N));
            }
        return Kt(C), C.length > 0;
    }
    function xr(k, C) {
        let N = c.blockers.get(k) || ad;
        return ue.get(k) !== C && ue.set(k, C), N;
    }
    function Wn(k) {
        c.blockers.delete(k), ue.delete(k);
    }
    function Kn(k, C) {
        let N = c.blockers.get(k) || ad;
        Q(
            (N.state === "unblocked" && C.state === "blocked") ||
                (N.state === "blocked" && C.state === "blocked") ||
                (N.state === "blocked" && C.state === "proceeding") ||
                (N.state === "blocked" && C.state === "unblocked") ||
                (N.state === "proceeding" && C.state === "unblocked"),
            "Invalid blocker state transition: " + N.state + " -> " + C.state
        ),
            c.blockers.set(k, C),
            U({ blockers: new Map(c.blockers) });
    }
    function Qn(k) {
        let { currentLocation: C, nextLocation: N, historyAction: I } = k;
        if (ue.size === 0) return;
        ue.size > 1 && tl(!1, "A router only supports one blocker at a time");
        let $ = Array.from(ue.entries()),
            [b, V] = $[$.length - 1],
            H = c.blockers.get(b);
        if (
            !(H && H.state === "proceeding") &&
            V({ currentLocation: C, nextLocation: N, historyAction: I })
        )
            return b;
    }
    function Sr(k) {
        let C = [];
        return (
            Y.forEach((N, I) => {
                (!k || k(I)) && (N.cancel(), C.push(I), Y.delete(I));
            }),
            C
        );
    }
    function Qi(k, C, N) {
        if (
            ((s = k),
            (h = C),
            (f = N || ((I) => I.key)),
            !m && c.navigation === Ea)
        ) {
            m = !0;
            let I = Ct(c.location, c.matches);
            I != null && U({ restoreScrollPosition: I });
        }
        return () => {
            (s = null), (h = null), (f = null);
        };
    }
    function go(k, C) {
        if (s && f && h) {
            let N = C.map(($) => gd($, c.loaderData)),
                I = f(k, N) || k.key;
            s[I] = h();
        }
    }
    function Ct(k, C) {
        if (s && f && h) {
            let N = C.map((b) => gd(b, c.loaderData)),
                I = f(k, N) || k.key,
                $ = s[I];
            if (typeof $ == "number") return $;
        }
        return null;
    }
    function Yi(k) {
        (n = {}), (l = Pu(k, t, void 0, n));
    }
    return (
        (S = {
            get basename() {
                return o;
            },
            get state() {
                return c;
            },
            get routes() {
                return r;
            },
            initialize: L,
            subscribe: B,
            enableScrollRestoration: Qi,
            navigate: ve,
            fetch: fn,
            revalidate: ze,
            createHref: (k) => e.history.createHref(k),
            encodeLocation: (k) => e.history.encodeLocation(k),
            getFetcher: Wt,
            deleteFetcher: hn,
            dispose: F,
            getBlocker: xr,
            deleteBlocker: Wn,
            _internalFetchControllers: O,
            _internalActiveDeferreds: Y,
            _internalSetRoutes: Yi,
        }),
        S
    );
}
function W0(e) {
    return e != null && "formData" in e;
}
function Ru(e, t, n, r, l, o, i) {
    let a, u;
    if (o != null && i !== "path") {
        a = [];
        for (let f of t)
            if ((a.push(f), f.route.id === o)) {
                u = f;
                break;
            }
    } else (a = t), (u = t[t.length - 1]);
    let s = $i(
        l || ".",
        fo(a).map((f) => f.pathnameBase),
        il(e.pathname, n) || e.pathname,
        i === "path"
    );
    return (
        l == null && ((s.search = e.search), (s.hash = e.hash)),
        (l == null || l === "" || l === ".") &&
            u &&
            u.route.index &&
            !Os(s.search) &&
            (s.search = s.search
                ? s.search.replace(/^\?/, "?index&")
                : "?index"),
        r &&
            n !== "/" &&
            (s.pathname = s.pathname === "/" ? n : tn([n, s.pathname])),
        mr(s)
    );
}
function ud(e, t, n, r) {
    if (!r || !W0(r)) return { path: n };
    if (r.formMethod && !J0(r.formMethod))
        return { path: n, error: Nt(405, { method: r.formMethod }) };
    let l;
    if (r.formData) {
        let a = r.formMethod || "get";
        if (
            ((l = {
                formMethod: e ? a.toUpperCase() : a.toLowerCase(),
                formAction: ah(n),
                formEncType:
                    (r && r.formEncType) || "application/x-www-form-urlencoded",
                formData: r.formData,
            }),
            Yt(l.formMethod))
        )
            return { path: n, submission: l };
    }
    let o = sn(n),
        i = ih(r.formData);
    return (
        t && o.search && Os(o.search) && i.append("index", ""),
        (o.search = "?" + i),
        { path: mr(o), submission: l }
    );
}
function K0(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex((l) => l.route.id === t);
        r >= 0 && (n = e.slice(0, r));
    }
    return n;
}
function sd(e, t, n, r, l, o, i, a, u, s, f, h, m) {
    let y = m ? Object.values(m)[0] : h ? Object.values(h)[0] : void 0,
        v = e.createURL(t.location),
        w = e.createURL(l),
        S = m ? Object.keys(m)[0] : void 0,
        d = K0(n, S).filter((x, P) => {
            if (x.route.lazy) return !0;
            if (x.route.loader == null) return !1;
            if (
                Q0(t.loaderData, t.matches[P], x) ||
                i.some((T) => T === x.route.id)
            )
                return !0;
            let R = t.matches[P],
                M = x;
            return cd(
                x,
                te(
                    {
                        currentUrl: v,
                        currentParams: R.params,
                        nextUrl: w,
                        nextParams: M.params,
                    },
                    r,
                    {
                        actionResult: y,
                        defaultShouldRevalidate:
                            o ||
                            v.pathname + v.search === w.pathname + w.search ||
                            v.search !== w.search ||
                            oh(R, M),
                    }
                )
            );
        }),
        g = [];
    return (
        u.forEach((x, P) => {
            if (!n.some((O) => O.route.id === x.routeId)) return;
            let R = zr(s, x.path, f);
            if (!R) {
                g.push({
                    key: P,
                    routeId: x.routeId,
                    path: x.path,
                    matches: null,
                    match: null,
                    controller: null,
                });
                return;
            }
            let M = Nu(R, x.path);
            if (a.includes(P)) {
                g.push({
                    key: P,
                    routeId: x.routeId,
                    path: x.path,
                    matches: R,
                    match: M,
                    controller: new AbortController(),
                });
                return;
            }
            cd(
                M,
                te(
                    {
                        currentUrl: v,
                        currentParams: t.matches[t.matches.length - 1].params,
                        nextUrl: w,
                        nextParams: n[n.length - 1].params,
                    },
                    r,
                    { actionResult: y, defaultShouldRevalidate: o }
                )
            ) &&
                g.push({
                    key: P,
                    routeId: x.routeId,
                    path: x.path,
                    matches: R,
                    match: M,
                    controller: new AbortController(),
                });
        }),
        [d, g]
    );
}
function Q0(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        l = e[n.route.id] === void 0;
    return r || l;
}
function oh(e, t) {
    let n = e.route.path;
    return (
        e.pathname !== t.pathname ||
        (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
    );
}
function cd(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n;
    }
    return t.defaultShouldRevalidate;
}
async function dd(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let l = n[e.id];
    Q(l, "No route found in manifest");
    let o = {};
    for (let i in r) {
        let u = l[i] !== void 0 && i !== "hasErrorBoundary";
        tl(
            !u,
            'Route "' +
                l.id +
                '" has a static property "' +
                i +
                '" defined but its lazy function is also returning a value for this property. ' +
                ('The lazy route property "' + i + '" will be ignored.')
        ),
            !u && !m0.has(i) && (o[i] = r[i]);
    }
    Object.assign(l, o), Object.assign(l, te({}, t(l), { lazy: void 0 }));
}
async function El(e, t, n, r, l, o, i, a, u, s) {
    a === void 0 && (a = !1), u === void 0 && (u = !1);
    let f,
        h,
        m,
        y = (S) => {
            let c,
                d = new Promise((g, x) => (c = x));
            return (
                (m = () => c()),
                t.signal.addEventListener("abort", m),
                Promise.race([
                    S({ request: t, params: n.params, context: s }),
                    d,
                ])
            );
        };
    try {
        let S = n.route[e];
        if (n.route.lazy)
            if (S) h = (await Promise.all([y(S), dd(n.route, o, l)]))[0];
            else if ((await dd(n.route, o, l), (S = n.route[e]), S))
                h = await y(S);
            else if (e === "action") {
                let c = new URL(t.url),
                    d = c.pathname + c.search;
                throw Nt(405, {
                    method: t.method,
                    pathname: d,
                    routeId: n.route.id,
                });
            } else return { type: Oe.data, data: void 0 };
        else if (S) h = await y(S);
        else {
            let c = new URL(t.url),
                d = c.pathname + c.search;
            throw Nt(404, { pathname: d });
        }
        Q(
            h !== void 0,
            "You defined " +
                (e === "action" ? "an action" : "a loader") +
                " for route " +
                ('"' +
                    n.route.id +
                    "\" but didn't return anything from your `" +
                    e +
                    "` ") +
                "function. Please return a value or `null`."
        );
    } catch (S) {
        (f = Oe.error), (h = S);
    } finally {
        m && t.signal.removeEventListener("abort", m);
    }
    if (Z0(h)) {
        let S = h.status;
        if (A0.has(S)) {
            let g = h.headers.get("Location");
            if (
                (Q(
                    g,
                    "Redirects returned/thrown from loaders/actions must have a Location header"
                ),
                !rh.test(g))
            )
                g = Ru(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, g);
            else if (!a) {
                let x = new URL(t.url),
                    P = g.startsWith("//")
                        ? new URL(x.protocol + g)
                        : new URL(g),
                    R = il(P.pathname, i) != null;
                P.origin === x.origin &&
                    R &&
                    (g = P.pathname + P.search + P.hash);
            }
            if (a) throw (h.headers.set("Location", g), h);
            return {
                type: Oe.redirect,
                status: S,
                location: g,
                revalidate: h.headers.get("X-Remix-Revalidate") !== null,
            };
        }
        if (u) throw { type: f || Oe.data, response: h };
        let c,
            d = h.headers.get("Content-Type");
        return (
            d && /\bapplication\/json\b/.test(d)
                ? (c = await h.json())
                : (c = await h.text()),
            f === Oe.error
                ? {
                      type: f,
                      error: new Ts(S, h.statusText, c),
                      headers: h.headers,
                  }
                : {
                      type: Oe.data,
                      data: c,
                      statusCode: h.status,
                      headers: h.headers,
                  }
        );
    }
    if (f === Oe.error) return { type: f, error: h };
    if (X0(h)) {
        var v, w;
        return {
            type: Oe.deferred,
            deferredData: h,
            statusCode: (v = h.init) == null ? void 0 : v.status,
            headers:
                ((w = h.init) == null ? void 0 : w.headers) &&
                new Headers(h.init.headers),
        };
    }
    return { type: Oe.data, data: h };
}
function kl(e, t, n, r) {
    let l = e.createURL(ah(t)).toString(),
        o = { signal: n };
    if (r && Yt(r.formMethod)) {
        let { formMethod: i, formEncType: a, formData: u } = r;
        (o.method = i.toUpperCase()),
            (o.body = a === "application/x-www-form-urlencoded" ? ih(u) : u);
    }
    return new Request(l, o);
}
function ih(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
    return t;
}
function Y0(e, t, n, r, l) {
    let o = {},
        i = null,
        a,
        u = !1,
        s = {};
    return (
        n.forEach((f, h) => {
            let m = t[h].route.id;
            if (
                (Q(
                    !Qr(f),
                    "Cannot handle redirect results in processLoaderData"
                ),
                Al(f))
            ) {
                let y = Ar(e, m),
                    v = f.error;
                r && ((v = Object.values(r)[0]), (r = void 0)),
                    (i = i || {}),
                    i[y.route.id] == null && (i[y.route.id] = v),
                    (o[m] = void 0),
                    u || ((u = !0), (a = th(f.error) ? f.error.status : 500)),
                    f.headers && (s[m] = f.headers);
            } else
                or(f)
                    ? (l.set(m, f.deferredData), (o[m] = f.deferredData.data))
                    : (o[m] = f.data),
                    f.statusCode != null &&
                        f.statusCode !== 200 &&
                        !u &&
                        (a = f.statusCode),
                    f.headers && (s[m] = f.headers);
        }),
        r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
        { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
    );
}
function fd(e, t, n, r, l, o, i, a) {
    let { loaderData: u, errors: s } = Y0(t, n, r, l, a);
    for (let f = 0; f < o.length; f++) {
        let { key: h, match: m, controller: y } = o[f];
        Q(
            i !== void 0 && i[f] !== void 0,
            "Did not find corresponding fetcher result"
        );
        let v = i[f];
        if (!(y && y.signal.aborted))
            if (Al(v)) {
                let w = Ar(e.matches, m == null ? void 0 : m.route.id);
                (s && s[w.route.id]) ||
                    (s = te({}, s, { [w.route.id]: v.error })),
                    e.fetchers.delete(h);
            } else if (Qr(v)) Q(!1, "Unhandled fetcher revalidation redirect");
            else if (or(v)) Q(!1, "Unhandled fetcher deferred data");
            else {
                let w = {
                    state: "idle",
                    data: v.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0,
                };
                e.fetchers.set(h, w);
            }
    }
    return { loaderData: u, errors: s };
}
function pd(e, t, n, r) {
    let l = te({}, t);
    for (let o of n) {
        let i = o.route.id;
        if (
            (t.hasOwnProperty(i)
                ? t[i] !== void 0 && (l[i] = t[i])
                : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
            r && r.hasOwnProperty(i))
        )
            break;
    }
    return l;
}
function Ar(e, t) {
    return (
        (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
            .reverse()
            .find((r) => r.route.hasErrorBoundary === !0) || e[0]
    );
}
function hd(e) {
    let t = e.find((n) => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__",
    };
    return {
        matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
        route: t,
    };
}
function Nt(e, t) {
    let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
        i = "Unknown Server Error",
        a = "Unknown @remix-run/router error";
    return (
        e === 400
            ? ((i = "Bad Request"),
              l && n && r
                  ? (a =
                        "You made a " +
                        l +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide a `loader` for route "' + r + '", ') +
                        "so there is no way to handle the request.")
                  : o === "defer-action" &&
                    (a = "defer() is not supported in actions"))
            : e === 403
            ? ((i = "Forbidden"),
              (a = 'Route "' + r + '" does not match URL "' + n + '"'))
            : e === 404
            ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
            : e === 405 &&
              ((i = "Method Not Allowed"),
              l && n && r
                  ? (a =
                        "You made a " +
                        l.toUpperCase() +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide an `action` for route "' +
                            r +
                            '", ') +
                        "so there is no way to handle the request.")
                  : l &&
                    (a = 'Invalid request method "' + l.toUpperCase() + '"')),
        new Ts(e || 500, i, new Error(a), !0)
    );
}
function md(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Qr(n)) return n;
    }
}
function ah(e) {
    let t = typeof e == "string" ? sn(e) : e;
    return mr(te({}, t, { hash: "" }));
}
function G0(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search
        ? !1
        : e.hash === ""
        ? t.hash !== ""
        : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function or(e) {
    return e.type === Oe.deferred;
}
function Al(e) {
    return e.type === Oe.error;
}
function Qr(e) {
    return (e && e.type) === Oe.redirect;
}
function X0(e) {
    let t = e;
    return (
        t &&
        typeof t == "object" &&
        typeof t.data == "object" &&
        typeof t.subscribe == "function" &&
        typeof t.cancel == "function" &&
        typeof t.resolveData == "function"
    );
}
function Z0(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.headers == "object" &&
        typeof e.body < "u"
    );
}
function J0(e) {
    return z0.has(e.toLowerCase());
}
function Yt(e) {
    return F0.has(e.toLowerCase());
}
async function vd(e, t, n, r, l, o) {
    for (let i = 0; i < n.length; i++) {
        let a = n[i],
            u = t[i];
        if (!u) continue;
        let s = e.find((h) => h.route.id === u.route.id),
            f = s != null && !oh(s, u) && (o && o[u.route.id]) !== void 0;
        if (or(a) && (l || f)) {
            let h = r[i];
            Q(
                h,
                "Expected an AbortSignal for revalidating fetcher deferred result"
            ),
                await uh(a, h, l).then((m) => {
                    m && (n[i] = m || n[i]);
                });
        }
    }
}
async function uh(e, t, n) {
    if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
        if (n)
            try {
                return { type: Oe.data, data: e.deferredData.unwrappedData };
            } catch (l) {
                return { type: Oe.error, error: l };
            }
        return { type: Oe.data, data: e.deferredData.data };
    }
}
function Os(e) {
    return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function gd(e, t) {
    let { route: n, pathname: r, params: l } = e;
    return {
        id: n.id,
        pathname: r,
        params: l,
        data: t[n.id],
        handle: n.handle,
    };
}
function Nu(e, t) {
    let n = typeof t == "string" ? sn(t).search : t.search;
    if (e[e.length - 1].route.index && Os(n || "")) return e[e.length - 1];
    let r = fo(e);
    return r[r.length - 1];
}
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wi() {
    return (
        (wi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        wi.apply(this, arguments)
    );
}
const zi = p.createContext(null),
    sh = p.createContext(null),
    al = p.createContext(null),
    Ai = p.createContext(null),
    bt = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    ch = p.createContext(null);
function q0(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    ul() || Q(!1);
    let { basename: r, navigator: l } = p.useContext(al),
        { hash: o, pathname: i, search: a } = ph(e, { relative: n }),
        u = i;
    return (
        r !== "/" && (u = i === "/" ? r : tn([r, i])),
        l.createHref({ pathname: u, search: a, hash: o })
    );
}
function ul() {
    return p.useContext(Ai) != null;
}
function sl() {
    return ul() || Q(!1), p.useContext(Ai).location;
}
function dh(e) {
    p.useContext(al).static || p.useLayoutEffect(e);
}
function fh() {
    let { isDataRoute: e } = p.useContext(bt);
    return e ? pg() : eg();
}
function eg() {
    ul() || Q(!1);
    let e = p.useContext(zi),
        { basename: t, navigator: n } = p.useContext(al),
        { matches: r } = p.useContext(bt),
        { pathname: l } = sl(),
        o = JSON.stringify(fo(r).map((u) => u.pathnameBase)),
        i = p.useRef(!1);
    return (
        dh(() => {
            i.current = !0;
        }),
        p.useCallback(
            function (u, s) {
                if ((s === void 0 && (s = {}), !i.current)) return;
                if (typeof u == "number") {
                    n.go(u);
                    return;
                }
                let f = $i(u, JSON.parse(o), l, s.relative === "path");
                e == null &&
                    t !== "/" &&
                    (f.pathname = f.pathname === "/" ? t : tn([t, f.pathname])),
                    (s.replace ? n.replace : n.push)(f, s.state, s);
            },
            [t, n, o, l, e]
        )
    );
}
const tg = p.createContext(null);
function ng(e) {
    let t = p.useContext(bt).outlet;
    return t && p.createElement(tg.Provider, { value: e }, t);
}
function lw() {
    let { matches: e } = p.useContext(bt),
        t = e[e.length - 1];
    return t ? t.params : {};
}
function ph(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { matches: r } = p.useContext(bt),
        { pathname: l } = sl(),
        o = JSON.stringify(fo(r).map((i) => i.pathnameBase));
    return p.useMemo(() => $i(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function rg(e, t, n) {
    ul() || Q(!1);
    let { navigator: r } = p.useContext(al),
        { matches: l } = p.useContext(bt),
        o = l[l.length - 1],
        i = o ? o.params : {};
    o && o.pathname;
    let a = o ? o.pathnameBase : "/";
    o && o.route;
    let u = sl(),
        s;
    if (t) {
        var f;
        let w = typeof t == "string" ? sn(t) : t;
        a === "/" || ((f = w.pathname) != null && f.startsWith(a)) || Q(!1),
            (s = w);
    } else s = u;
    let h = s.pathname || "/",
        m = a === "/" ? h : h.slice(a.length) || "/",
        y = zr(e, { pathname: m }),
        v = ug(
            y &&
                y.map((w) =>
                    Object.assign({}, w, {
                        params: Object.assign({}, i, w.params),
                        pathname: tn([
                            a,
                            r.encodeLocation
                                ? r.encodeLocation(w.pathname).pathname
                                : w.pathname,
                        ]),
                        pathnameBase:
                            w.pathnameBase === "/"
                                ? a
                                : tn([
                                      a,
                                      r.encodeLocation
                                          ? r.encodeLocation(w.pathnameBase)
                                                .pathname
                                          : w.pathnameBase,
                                  ]),
                    })
                ),
            l,
            n
        );
    return t && v
        ? p.createElement(
              Ai.Provider,
              {
                  value: {
                      location: wi(
                          {
                              pathname: "/",
                              search: "",
                              hash: "",
                              state: null,
                              key: "default",
                          },
                          s
                      ),
                      navigationType: _e.Pop,
                  },
              },
              v
          )
        : v;
}
function lg() {
    let e = fg(),
        t = th(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
        o = null;
    return p.createElement(
        p.Fragment,
        null,
        p.createElement("h2", null, "Unexpected Application Error!"),
        p.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? p.createElement("pre", { style: l }, n) : null,
        o
    );
}
const og = p.createElement(lg, null);
class ig extends p.Component {
    constructor(t) {
        super(t),
            (this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error,
            });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ||
            (n.revalidation !== "idle" && t.revalidation === "idle")
            ? {
                  error: t.error,
                  location: t.location,
                  revalidation: t.revalidation,
              }
            : {
                  error: t.error || n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error(
            "React Router caught the following error during render",
            t,
            n
        );
    }
    render() {
        return this.state.error
            ? p.createElement(
                  bt.Provider,
                  { value: this.props.routeContext },
                  p.createElement(ch.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  })
              )
            : this.props.children;
    }
}
function ag(e) {
    let { routeContext: t, match: n, children: r } = e,
        l = p.useContext(zi);
    return (
        l &&
            l.static &&
            l.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (l.staticContext._deepestRenderedBoundaryId = n.route.id),
        p.createElement(bt.Provider, { value: t }, r)
    );
}
function ug(e, t, n) {
    var r;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
        var l;
        if ((l = n) != null && l.errors) e = n.matches;
        else return null;
    }
    let o = e,
        i = (r = n) == null ? void 0 : r.errors;
    if (i != null) {
        let a = o.findIndex(
            (u) => u.route.id && (i == null ? void 0 : i[u.route.id])
        );
        a >= 0 || Q(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
    }
    return o.reduceRight((a, u, s) => {
        let f = u.route.id ? (i == null ? void 0 : i[u.route.id]) : null,
            h = null;
        n && (h = u.route.errorElement || og);
        let m = t.concat(o.slice(0, s + 1)),
            y = () => {
                let v;
                return (
                    f
                        ? (v = h)
                        : u.route.Component
                        ? (v = p.createElement(u.route.Component, null))
                        : u.route.element
                        ? (v = u.route.element)
                        : (v = a),
                    p.createElement(ag, {
                        match: u,
                        routeContext: {
                            outlet: a,
                            matches: m,
                            isDataRoute: n != null,
                        },
                        children: v,
                    })
                );
            };
        return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
            ? p.createElement(ig, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: h,
                  error: f,
                  children: y(),
                  routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : y();
    }, null);
}
var Mu;
(function (e) {
    (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate");
})(Mu || (Mu = {}));
var lo;
(function (e) {
    (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId");
})(lo || (lo = {}));
function sg(e) {
    let t = p.useContext(zi);
    return t || Q(!1), t;
}
function cg(e) {
    let t = p.useContext(sh);
    return t || Q(!1), t;
}
function dg(e) {
    let t = p.useContext(bt);
    return t || Q(!1), t;
}
function hh(e) {
    let t = dg(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Q(!1), n.route.id;
}
function fg() {
    var e;
    let t = p.useContext(ch),
        n = cg(lo.UseRouteError),
        r = hh(lo.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function pg() {
    let { router: e } = sg(Mu.UseNavigateStable),
        t = hh(lo.UseNavigateStable),
        n = p.useRef(!1);
    return (
        dh(() => {
            n.current = !0;
        }),
        p.useCallback(
            function (l, o) {
                o === void 0 && (o = {}),
                    n.current &&
                        (typeof l == "number"
                            ? e.navigate(l)
                            : e.navigate(l, wi({ fromRouteId: t }, o)));
            },
            [e, t]
        )
    );
}
function hg(e) {
    let { fallbackElement: t, router: n } = e,
        [r, l] = p.useState(n.state);
    p.useLayoutEffect(() => n.subscribe(l), [n, l]);
    let o = p.useMemo(
            () => ({
                createHref: n.createHref,
                encodeLocation: n.encodeLocation,
                go: (u) => n.navigate(u),
                push: (u, s, f) =>
                    n.navigate(u, {
                        state: s,
                        preventScrollReset:
                            f == null ? void 0 : f.preventScrollReset,
                    }),
                replace: (u, s, f) =>
                    n.navigate(u, {
                        replace: !0,
                        state: s,
                        preventScrollReset:
                            f == null ? void 0 : f.preventScrollReset,
                    }),
            }),
            [n]
        ),
        i = n.basename || "/",
        a = p.useMemo(
            () => ({ router: n, navigator: o, static: !1, basename: i }),
            [n, o, i]
        );
    return p.createElement(
        p.Fragment,
        null,
        p.createElement(
            zi.Provider,
            { value: a },
            p.createElement(
                sh.Provider,
                { value: r },
                p.createElement(
                    yg,
                    {
                        basename: n.basename,
                        location: n.state.location,
                        navigationType: n.state.historyAction,
                        navigator: o,
                    },
                    n.state.initialized
                        ? p.createElement(mg, { routes: n.routes, state: r })
                        : t
                )
            )
        ),
        null
    );
}
function mg(e) {
    let { routes: t, state: n } = e;
    return rg(t, void 0, n);
}
function vg(e) {
    let { to: t, replace: n, state: r, relative: l } = e;
    ul() || Q(!1);
    let { matches: o } = p.useContext(bt),
        { pathname: i } = sl(),
        a = fh(),
        u = $i(
            t,
            fo(o).map((f) => f.pathnameBase),
            i,
            l === "path"
        ),
        s = JSON.stringify(u);
    return (
        p.useEffect(
            () => a(JSON.parse(s), { replace: n, state: r, relative: l }),
            [a, s, l, n, r]
        ),
        null
    );
}
function gg(e) {
    return ng(e.context);
}
function mt(e) {
    Q(!1);
}
function yg(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = _e.Pop,
        navigator: o,
        static: i = !1,
    } = e;
    ul() && Q(!1);
    let a = t.replace(/^\/*/, "/"),
        u = p.useMemo(
            () => ({ basename: a, navigator: o, static: i }),
            [a, o, i]
        );
    typeof r == "string" && (r = sn(r));
    let {
            pathname: s = "/",
            search: f = "",
            hash: h = "",
            state: m = null,
            key: y = "default",
        } = r,
        v = p.useMemo(() => {
            let w = il(s, a);
            return w == null
                ? null
                : {
                      location: {
                          pathname: w,
                          search: f,
                          hash: h,
                          state: m,
                          key: y,
                      },
                      navigationType: l,
                  };
        }, [a, s, f, h, m, y, l]);
    return v == null
        ? null
        : p.createElement(
              al.Provider,
              { value: u },
              p.createElement(Ai.Provider, { children: n, value: v })
          );
}
var yd;
(function (e) {
    (e[(e.pending = 0)] = "pending"),
        (e[(e.success = 1)] = "success"),
        (e[(e.error = 2)] = "error");
})(yd || (yd = {}));
new Promise(() => {});
function _u(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        p.Children.forEach(e, (r, l) => {
            if (!p.isValidElement(r)) return;
            let o = [...t, l];
            if (r.type === p.Fragment) {
                n.push.apply(n, _u(r.props.children, o));
                return;
            }
            r.type !== mt && Q(!1),
                !r.props.index || !r.props.children || Q(!1);
            let i = {
                id: r.props.id || o.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary:
                    r.props.ErrorBoundary != null ||
                    r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (i.children = _u(r.props.children, o)),
                n.push(i);
        }),
        n
    );
}
function wg(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
    };
    return (
        e.Component &&
            Object.assign(t, {
                element: p.createElement(e.Component),
                Component: void 0,
            }),
        e.ErrorBoundary &&
            Object.assign(t, {
                errorElement: p.createElement(e.ErrorBoundary),
                ErrorBoundary: void 0,
            }),
        t
    );
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oo() {
    return (
        (oo = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        oo.apply(this, arguments)
    );
}
function xg(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l,
        o;
    for (o = 0; o < r.length; o++)
        (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n;
}
function Sg(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Eg(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Sg(e);
}
const kg = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
];
function Cg(e, t) {
    return V0({
        basename: t == null ? void 0 : t.basename,
        future: oo({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0,
        }),
        history: f0({ window: t == null ? void 0 : t.window }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || Pg(),
        routes: e,
        mapRouteProperties: wg,
    }).initialize();
}
function Pg() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = oo({}, t, { errors: Rg(t.errors) })), t;
}
function Rg(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, l] of t)
        if (l && l.__type === "RouteErrorResponse")
            n[r] = new Ts(l.status, l.statusText, l.data, l.internal === !0);
        else if (l && l.__type === "Error") {
            let o = new Error(l.message);
            (o.stack = ""), (n[r] = o);
        } else n[r] = l;
    return n;
}
const Ng =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    Mg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    _l = p.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: l,
                reloadDocument: o,
                replace: i,
                state: a,
                target: u,
                to: s,
                preventScrollReset: f,
            } = t,
            h = xg(t, kg),
            { basename: m } = p.useContext(al),
            y,
            v = !1;
        if (typeof s == "string" && Mg.test(s) && ((y = s), Ng))
            try {
                let d = new URL(window.location.href),
                    g = s.startsWith("//")
                        ? new URL(d.protocol + s)
                        : new URL(s),
                    x = il(g.pathname, m);
                g.origin === d.origin && x != null
                    ? (s = x + g.search + g.hash)
                    : (v = !0);
            } catch {}
        let w = q0(s, { relative: l }),
            S = _g(s, {
                replace: i,
                state: a,
                target: u,
                preventScrollReset: f,
                relative: l,
            });
        function c(d) {
            r && r(d), d.defaultPrevented || S(d);
        }
        return p.createElement(
            "a",
            oo({}, h, {
                href: y || w,
                onClick: v || o ? r : c,
                ref: n,
                target: u,
            })
        );
    });
var wd;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmitImpl = "useSubmitImpl"),
        (e.UseFetcher = "useFetcher");
})(wd || (wd = {}));
var xd;
(function (e) {
    (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
})(xd || (xd = {}));
function _g(e, t) {
    let {
            target: n,
            replace: r,
            state: l,
            preventScrollReset: o,
            relative: i,
        } = t === void 0 ? {} : t,
        a = fh(),
        u = sl(),
        s = ph(e, { relative: i });
    return p.useCallback(
        (f) => {
            if (Eg(f, n)) {
                f.preventDefault();
                let h = r !== void 0 ? r : mr(u) === mr(s);
                a(e, {
                    replace: h,
                    state: l,
                    preventScrollReset: o,
                    relative: i,
                });
            }
        },
        [u, a, s, r, l, n, e, o, i]
    );
}
const mh = "/assets/jambon-beurre-logo-c8db6693.svg";
function Zn() {
    return E.jsxs("div", {
        className: "flex flex-col items-center justify-center h-screen",
        children: [
            E.jsx("img", {
                src: mh,
                alt: "Jambon Beurre Logo",
                className: "w-[8%] animate-bounce duration-300",
            }),
            E.jsx("h1", {
                className:
                    "h-[40px] text-3xl font-bold text-center mt-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",
                children: "Loading...",
            }),
        ],
    });
}
async function tr(e, t, n = {}, r = {}, l = !1) {
    let o = {
        method: e,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...n,
        },
    };
    if (l) {
        let a = localStorage.getItem("token");
        a || window.location.replace("/"),
            (o.headers.Authorization = `Bearer ${a}`);
    }
    if (l) {
        let a = localStorage.getItem("token");
        a || window.location.replace("/"),
            (o.headers.Authorization = `Bearer ${a}`);
    }
    e !== "GET" && (o.body = JSON.stringify(r));
    const i = await fetch(t, o);
    if (i.status >= 400) return i.status;
    {
        let a;
        return (
            i.headers.get("content-type") === "application/json"
                ? (a = await i.json())
                : (a = await i.text()),
            { data: a, status: i.status }
        );
    }
}
const vh = p.createContext(),
    Lg = ({ children: e }) => {
        const [t, n] = p.useState(!!localStorage.getItem("token")),
            [r, l] = p.useState(null),
            [o, i] = p.useState([]);
        async function a() {
            await tr("GET", "/api/profil", {}, {}, !0)
                .then((s) => {
                    s.status === 200
                        ? (l(s.data.user), i(s.data.user.playlists))
                        : (console.error("Failed to fetch user"),
                          u(),
                          window.location.replace("/"));
                })
                .catch((s) => {
                    console.error(s);
                });
        }
        function u() {
            localStorage.removeItem("token"), n(!1), l(null);
        }
        return (
            p.useEffect(() => {
                t &&
                    (async () => {
                        await a();
                    })().catch((f) => {
                        console.error(f);
                    });
            }, [t]),
            E.jsx(vh.Provider, {
                value: {
                    isLoggedIn: t,
                    user: r,
                    userPlaylists: o,
                    setIsLoggedIn: n,
                    fetchUser: a,
                    logout: u,
                },
                children: e,
            })
        );
    },
    js = p.createContext(),
    Tg = ({ children: e }) => {
        const [t, n] = p.useState([]),
            [r, l] = p.useState([]);
        function o() {
            tr("GET", "/api/playlist, {}, {}, true")
                .then((m) => {
                    m.status === 200 || console.error(m);
                })
                .catch((m) => {
                    console.error(m);
                });
        }
        function i() {
            tr("GET", "/api/tracks/play", {}, {}, !0)
                .then((m) => {
                    m.status === 200 ? n(m.data) : console.error(m);
                })
                .catch((m) => {
                    console.error(m);
                });
        }
        function a() {
            tr("GET", "/api/accueil", {}, {}, !0)
                .then((m) => {
                    m.status === 200 ? l(m.data) : console.error(m);
                })
                .catch((m) => {
                    console.error(m);
                });
        }
        function u(m) {
            return t.filter((y) => y.album_id === Number(m));
        }
        function s(m, y) {
            tr("POST", "/api/playlist/" + y + "/track", {}, { track_id: m }, !0)
                .then((v) => {
                    v.status === 200
                        ? console.log(
                              "Musique ajoutée à la playlist avec succès"
                          )
                        : v.status === 401
                        ? console.error(
                              "Vous n'êtes pas autorisé à ajouter cette musique à la playlist"
                          )
                        : v.status === 422
                        ? console.error(
                              "Cette musique est déjà dans la playlist"
                          )
                        : console.error(v);
                })
                .catch((v) => {
                    console.error(v);
                });
        }
        async function f(m) {
            try {
                const y = await tr(
                    "POST",
                    "/api/playlist",
                    {},
                    { name: m },
                    !0
                );
                if (y.status === 201)
                    return (
                        console.log("Playlist a été créée avec succès !"),
                        y.data
                    );
                y.status === 401
                    ? console.error(
                          "Vous n'êtes pas autorisé à créer cette playlist"
                      )
                    : console.error(y);
            } catch (y) {
                throw (console.error(y), y);
            }
        }
        async function h(m) {
            try {
                const y = await tr("GET", `/api/playlists/${m}`, {}, {}, !0);
                if (y.status === 200)
                    return (
                        console.log(
                            "tracks présentes dans la playlist sélectionnée :",
                            y.data
                        ),
                        y.data
                    );
                throw (
                    (console.error(y),
                    new Error(`Unexpected response status: ${y.status}`))
                );
            } catch (y) {
                throw (console.error(y), y);
            }
        }
        return E.jsx(js.Provider, {
            value: {
                tracks: t,
                setTracks: n,
                albums: r,
                fetchAllAlbums: a,
                fetchAllTracks: i,
                getTrackByAlbumId: u,
                addTrackToPlaylist: s,
                createPlaylist: f,
                getPlaylistByUserId: o,
                fetchTracksByPlaylistId: h,
            },
            children: e,
        });
    };
function zn(e) {
    "@babel/helpers - typeof";
    return (
        (zn =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == "function" &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                  }),
        zn(e)
    );
}
function Og(e, t) {
    if (zn(e) !== "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (zn(r) !== "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
}
function jg(e) {
    var t = Og(e, "string");
    return zn(t) === "symbol" ? t : String(t);
}
function Jt(e, t, n) {
    return (
        (t = jg(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Lu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function Ig(e) {
    if (Array.isArray(e)) return Lu(e);
}
function Dg(e) {
    if (
        (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
        e["@@iterator"] != null
    )
        return Array.from(e);
}
function gh(e, t) {
    if (e) {
        if (typeof e == "string") return Lu(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (n === "Object" && e.constructor && (n = e.constructor.name),
            n === "Map" || n === "Set")
        )
            return Array.from(e);
        if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
            return Lu(e, t);
    }
}
function Fg() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rn(e) {
    return Ig(e) || Dg(e) || gh(e) || Fg();
}
function $g(e) {
    if (Array.isArray(e)) return e;
}
function zg(e, t) {
    var n =
        e == null
            ? null
            : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n != null) {
        var r,
            l,
            o,
            i,
            a = [],
            u = !0,
            s = !1;
        try {
            if (((o = (n = n.call(e)).next), t === 0)) {
                if (Object(n) !== n) return;
                u = !1;
            } else
                for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    u = !0
                );
        } catch (f) {
            (s = !0), (l = f);
        } finally {
            try {
                if (
                    !u &&
                    n.return != null &&
                    ((i = n.return()), Object(i) !== i)
                )
                    return;
            } finally {
                if (s) throw l;
            }
        }
        return a;
    }
}
function Ag() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ut(e, t) {
    return $g(e) || zg(e, t) || gh(e, t) || Ag();
}
var yh = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
        var t = {}.hasOwnProperty;
        function n() {
            for (var r = [], l = 0; l < arguments.length; l++) {
                var o = arguments[l];
                if (o) {
                    var i = typeof o;
                    if (i === "string" || i === "number") r.push(o);
                    else if (Array.isArray(o)) {
                        if (o.length) {
                            var a = n.apply(null, o);
                            a && r.push(a);
                        }
                    } else if (i === "object") {
                        if (
                            o.toString !== Object.prototype.toString &&
                            !o.toString.toString().includes("[native code]")
                        ) {
                            r.push(o.toString());
                            continue;
                        }
                        for (var u in o) t.call(o, u) && o[u] && r.push(u);
                    }
                }
            }
            return r.join(" ");
        }
        e.exports
            ? ((n.default = n), (e.exports = n))
            : (window.classNames = n);
    })();
})(yh);
var Ug = yh.exports;
const po = zd(Ug);
var Tu = {},
    Bg = function (t) {};
function Hg(e, t) {}
function bg(e, t) {}
function Vg() {
    Tu = {};
}
function wh(e, t, n) {
    !t && !Tu[n] && (e(!1, n), (Tu[n] = !0));
}
function Ui(e, t) {
    wh(Hg, e, t);
}
function Wg(e, t) {
    wh(bg, e, t);
}
Ui.preMessage = Bg;
Ui.resetWarned = Vg;
Ui.noteOnce = Wg;
function Kg(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = new Set();
    function l(o, i) {
        var a =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : 1,
            u = r.has(o);
        if ((Ui(!u, "Warning: There may be circular references"), u)) return !1;
        if (o === i) return !0;
        if (n && a > 1) return !1;
        r.add(o);
        var s = a + 1;
        if (Array.isArray(o)) {
            if (!Array.isArray(i) || o.length !== i.length) return !1;
            for (var f = 0; f < o.length; f++) if (!l(o[f], i[f], s)) return !1;
            return !0;
        }
        if (o && i && zn(o) === "object" && zn(i) === "object") {
            var h = Object.keys(o);
            return h.length !== Object.keys(i).length
                ? !1
                : h.every(function (m) {
                      return l(o[m], i[m], s);
                  });
        }
        return !1;
    }
    return l(e, t);
}
function Sd(e) {
    var t = p.useRef();
    t.current = e;
    var n = p.useCallback(function () {
        for (var r, l = arguments.length, o = new Array(l), i = 0; i < l; i++)
            o[i] = arguments[i];
        return (r = t.current) === null || r === void 0
            ? void 0
            : r.call.apply(r, [t].concat(o));
    }, []);
    return n;
}
function Qg() {
    return !!(
        typeof window < "u" &&
        window.document &&
        window.document.createElement
    );
}
var Ed = Qg() ? p.useLayoutEffect : p.useEffect,
    kd = function (t, n) {
        var r = p.useRef(!0);
        Ed(function () {
            if (!r.current) return t();
        }, n),
            Ed(function () {
                return (
                    (r.current = !1),
                    function () {
                        r.current = !0;
                    }
                );
            }, []);
    };
function Cd(e) {
    var t = p.useRef(!1),
        n = p.useState(e),
        r = ut(n, 2),
        l = r[0],
        o = r[1];
    p.useEffect(function () {
        return (
            (t.current = !1),
            function () {
                t.current = !0;
            }
        );
    }, []);
    function i(a, u) {
        (u && t.current) || o(a);
    }
    return [l, i];
}
function ka(e) {
    return e !== void 0;
}
function Yg(e, t) {
    var n = t || {},
        r = n.defaultValue,
        l = n.value,
        o = n.onChange,
        i = n.postState,
        a = Cd(function () {
            return ka(l)
                ? l
                : ka(r)
                ? typeof r == "function"
                    ? r()
                    : r
                : typeof e == "function"
                ? e()
                : e;
        }),
        u = ut(a, 2),
        s = u[0],
        f = u[1],
        h = l !== void 0 ? l : s,
        m = i ? i(h) : h,
        y = Sd(o),
        v = Cd([h]),
        w = ut(v, 2),
        S = w[0],
        c = w[1];
    kd(
        function () {
            var g = S[0];
            s !== g && y(s, g);
        },
        [S]
    ),
        kd(
            function () {
                ka(l) || f(l);
            },
            [l]
        );
    var d = Sd(function (g, x) {
        f(g, x), c([h], x);
    });
    return [m, d];
}
function xi() {
    return (
        (xi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        xi.apply(this, arguments)
    );
}
function Gg(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l,
        o;
    for (o = 0; o < r.length; o++)
        (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n;
}
function xh(e, t) {
    if (e == null) return {};
    var n = Gg(e, t),
        r,
        l;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (l = 0; l < o.length; l++)
            (r = o[l]),
                !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (n[r] = e[r]);
    }
    return n;
}
function Pd(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (l) {
                return Object.getOwnPropertyDescriptor(e, l).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Ut(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Pd(Object(n), !0).forEach(function (r) {
                  Jt(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Pd(Object(n)).forEach(function (r) {
                  Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(n, r)
                  );
              });
    }
    return e;
}
var A = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (t) {
            var n = t.keyCode;
            if (
                (t.altKey && !t.ctrlKey) ||
                t.metaKey ||
                (n >= A.F1 && n <= A.F12)
            )
                return !1;
            switch (n) {
                case A.ALT:
                case A.CAPS_LOCK:
                case A.CONTEXT_MENU:
                case A.CTRL:
                case A.DOWN:
                case A.END:
                case A.ESC:
                case A.HOME:
                case A.INSERT:
                case A.LEFT:
                case A.MAC_FF_META:
                case A.META:
                case A.NUMLOCK:
                case A.NUM_CENTER:
                case A.PAGE_DOWN:
                case A.PAGE_UP:
                case A.PAUSE:
                case A.PRINT_SCREEN:
                case A.RIGHT:
                case A.SHIFT:
                case A.UP:
                case A.WIN_KEY:
                case A.WIN_KEY_RIGHT:
                    return !1;
                default:
                    return !0;
            }
        },
        isCharacterKey: function (t) {
            if (
                (t >= A.ZERO && t <= A.NINE) ||
                (t >= A.NUM_ZERO && t <= A.NUM_MULTIPLY) ||
                (t >= A.A && t <= A.Z) ||
                (window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
            )
                return !0;
            switch (t) {
                case A.SPACE:
                case A.QUESTION_MARK:
                case A.NUM_PLUS:
                case A.NUM_MINUS:
                case A.NUM_PERIOD:
                case A.NUM_DIVISION:
                case A.SEMICOLON:
                case A.DASH:
                case A.EQUALS:
                case A.COMMA:
                case A.PERIOD:
                case A.SLASH:
                case A.APOSTROPHE:
                case A.SINGLE_QUOTE:
                case A.OPEN_SQUARE_BRACKET:
                case A.BACKSLASH:
                case A.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1;
            }
        },
    },
    wr = p.createContext({
        min: 0,
        max: 0,
        direction: "ltr",
        step: 1,
        includedStart: 0,
        includedEnd: 0,
        tabIndex: 0,
        keyboard: !0,
    });
function Ou(e, t, n) {
    return (e - t) / (n - t);
}
function Is(e, t, n, r) {
    var l = Ou(t, n, r),
        o = {};
    switch (e) {
        case "rtl":
            (o.right = "".concat(l * 100, "%")),
                (o.transform = "translateX(50%)");
            break;
        case "btt":
            (o.bottom = "".concat(l * 100, "%")),
                (o.transform = "translateY(50%)");
            break;
        case "ttb":
            (o.top = "".concat(l * 100, "%")),
                (o.transform = "translateY(-50%)");
            break;
        default:
            (o.left = "".concat(l * 100, "%")),
                (o.transform = "translateX(-50%)");
            break;
    }
    return o;
}
function Ur(e, t) {
    return Array.isArray(e) ? e[t] : e;
}
var Xg = [
        "prefixCls",
        "value",
        "valueIndex",
        "onStartMove",
        "style",
        "render",
        "dragging",
        "onOffsetChange",
    ],
    Zg = p.forwardRef(function (e, t) {
        var n,
            r,
            l = e.prefixCls,
            o = e.value,
            i = e.valueIndex,
            a = e.onStartMove,
            u = e.style,
            s = e.render,
            f = e.dragging,
            h = e.onOffsetChange,
            m = xh(e, Xg),
            y = p.useContext(wr),
            v = y.min,
            w = y.max,
            S = y.direction,
            c = y.disabled,
            d = y.keyboard,
            g = y.range,
            x = y.tabIndex,
            P = y.ariaLabelForHandle,
            R = y.ariaLabelledByForHandle,
            M = y.ariaValueTextFormatterForHandle,
            T = "".concat(l, "-handle"),
            O = function (ie) {
                c || a(ie, i);
            },
            j = function (ie) {
                if (!c && d) {
                    var Y = null;
                    switch (ie.which || ie.keyCode) {
                        case A.LEFT:
                            Y = S === "ltr" || S === "btt" ? -1 : 1;
                            break;
                        case A.RIGHT:
                            Y = S === "ltr" || S === "btt" ? 1 : -1;
                            break;
                        case A.UP:
                            Y = S !== "ttb" ? 1 : -1;
                            break;
                        case A.DOWN:
                            Y = S !== "ttb" ? -1 : 1;
                            break;
                        case A.HOME:
                            Y = "min";
                            break;
                        case A.END:
                            Y = "max";
                            break;
                        case A.PAGE_UP:
                            Y = 2;
                            break;
                        case A.PAGE_DOWN:
                            Y = -2;
                            break;
                    }
                    Y !== null && (ie.preventDefault(), h(Y, i));
                }
            },
            Z = Is(S, o, v, w),
            q = p.createElement(
                "div",
                xi(
                    {
                        ref: t,
                        className: po(
                            T,
                            ((n = {}),
                            Jt(n, "".concat(T, "-").concat(i + 1), g),
                            Jt(n, "".concat(T, "-dragging"), f),
                            n)
                        ),
                        style: Ut(Ut({}, Z), u),
                        onMouseDown: O,
                        onTouchStart: O,
                        onKeyDown: j,
                        tabIndex: c ? null : Ur(x, i),
                        role: "slider",
                        "aria-valuemin": v,
                        "aria-valuemax": w,
                        "aria-valuenow": o,
                        "aria-disabled": c,
                        "aria-label": Ur(P, i),
                        "aria-labelledby": Ur(R, i),
                        "aria-valuetext":
                            (r = Ur(M, i)) === null || r === void 0
                                ? void 0
                                : r(o),
                    },
                    m
                )
            );
        return (
            s && (q = s(q, { index: i, prefixCls: l, value: o, dragging: f })),
            q
        );
    }),
    Jg = [
        "prefixCls",
        "style",
        "onStartMove",
        "onOffsetChange",
        "values",
        "handleRender",
        "draggingIndex",
    ],
    qg = p.forwardRef(function (e, t) {
        var n = e.prefixCls,
            r = e.style,
            l = e.onStartMove,
            o = e.onOffsetChange,
            i = e.values,
            a = e.handleRender,
            u = e.draggingIndex,
            s = xh(e, Jg),
            f = p.useRef({});
        return (
            p.useImperativeHandle(t, function () {
                return {
                    focus: function (m) {
                        var y;
                        (y = f.current[m]) === null ||
                            y === void 0 ||
                            y.focus();
                    },
                };
            }),
            p.createElement(
                p.Fragment,
                null,
                i.map(function (h, m) {
                    return p.createElement(
                        Zg,
                        xi(
                            {
                                ref: function (v) {
                                    v
                                        ? (f.current[m] = v)
                                        : delete f.current[m];
                                },
                                dragging: u === m,
                                prefixCls: n,
                                style: Ur(r, m),
                                key: m,
                                value: h,
                                valueIndex: m,
                                onStartMove: l,
                                onOffsetChange: o,
                                render: a,
                            },
                            s
                        )
                    );
                })
            )
        );
    });
function Rd(e) {
    var t = "touches" in e ? e.touches[0] : e;
    return { pageX: t.pageX, pageY: t.pageY };
}
function ey(e, t, n, r, l, o, i, a, u) {
    var s = p.useState(null),
        f = ut(s, 2),
        h = f[0],
        m = f[1],
        y = p.useState(-1),
        v = ut(y, 2),
        w = v[0],
        S = v[1],
        c = p.useState(n),
        d = ut(c, 2),
        g = d[0],
        x = d[1],
        P = p.useState(n),
        R = ut(P, 2),
        M = R[0],
        T = R[1],
        O = p.useRef(null),
        j = p.useRef(null);
    p.useEffect(
        function () {
            w === -1 && x(n);
        },
        [n, w]
    ),
        p.useEffect(function () {
            return function () {
                document.removeEventListener("mousemove", O.current),
                    document.removeEventListener("mouseup", j.current),
                    document.removeEventListener("touchmove", O.current),
                    document.removeEventListener("touchend", j.current);
            };
        }, []);
    var Z = function (ee, L) {
            g.some(function (F, B) {
                return F !== ee[B];
            }) && (L !== void 0 && m(L), x(ee), i(ee));
        },
        q = function (ee, L) {
            if (ee === -1) {
                var F = M[0],
                    B = M[M.length - 1],
                    U = r - F,
                    ne = l - B,
                    ve = L * (l - r);
                (ve = Math.max(ve, U)), (ve = Math.min(ve, ne));
                var ze = o(F + ve);
                ve = ze - F;
                var Pe = M.map(function (fn) {
                    return fn + ve;
                });
                Z(Pe);
            } else {
                var Re = (l - r) * L,
                    et = Rn(g);
                et[ee] = M[ee];
                var Wt = u(et, Re, ee, "dist");
                Z(Wt.values, Wt.value);
            }
        },
        ae = p.useRef(q);
    ae.current = q;
    var ie = function (ee, L) {
            ee.stopPropagation();
            var F = n[L];
            S(L), m(F), T(n);
            var B = Rd(ee),
                U = B.pageX,
                ne = B.pageY,
                ve = function (Re) {
                    Re.preventDefault();
                    var et = Rd(Re),
                        Wt = et.pageX,
                        fn = et.pageY,
                        bn = Wt - U,
                        Vn = fn - ne,
                        kt = e.current.getBoundingClientRect(),
                        pn = kt.width,
                        ht = kt.height,
                        tt;
                    switch (t) {
                        case "btt":
                            tt = -Vn / ht;
                            break;
                        case "ttb":
                            tt = Vn / ht;
                            break;
                        case "rtl":
                            tt = -bn / pn;
                            break;
                        default:
                            tt = bn / pn;
                    }
                    ae.current(L, tt);
                },
                ze = function Pe(Re) {
                    Re.preventDefault(),
                        document.removeEventListener("mouseup", Pe),
                        document.removeEventListener("mousemove", ve),
                        document.removeEventListener("touchend", Pe),
                        document.removeEventListener("touchmove", ve),
                        (O.current = null),
                        (j.current = null),
                        S(-1),
                        a();
                };
            document.addEventListener("mouseup", ze),
                document.addEventListener("mousemove", ve),
                document.addEventListener("touchend", ze),
                document.addEventListener("touchmove", ve),
                (O.current = ve),
                (j.current = ze);
        },
        Y = p.useMemo(
            function () {
                var ue = Rn(n).sort(function (L, F) {
                        return L - F;
                    }),
                    ee = Rn(g).sort(function (L, F) {
                        return L - F;
                    });
                return ue.every(function (L, F) {
                    return L === ee[F];
                })
                    ? g
                    : n;
            },
            [n, g]
        );
    return [w, h, Y, ie];
}
function ty(e) {
    var t = e.prefixCls,
        n = e.style,
        r = e.start,
        l = e.end,
        o = e.index,
        i = e.onStartMove,
        a = p.useContext(wr),
        u = a.direction,
        s = a.min,
        f = a.max,
        h = a.disabled,
        m = a.range,
        y = "".concat(t, "-track"),
        v = Ou(r, s, f),
        w = Ou(l, s, f),
        S = function (g) {
            !h && i && i(g, -1);
        },
        c = {};
    switch (u) {
        case "rtl":
            (c.right = "".concat(v * 100, "%")),
                (c.width = "".concat(w * 100 - v * 100, "%"));
            break;
        case "btt":
            (c.bottom = "".concat(v * 100, "%")),
                (c.height = "".concat(w * 100 - v * 100, "%"));
            break;
        case "ttb":
            (c.top = "".concat(v * 100, "%")),
                (c.height = "".concat(w * 100 - v * 100, "%"));
            break;
        default:
            (c.left = "".concat(v * 100, "%")),
                (c.width = "".concat(w * 100 - v * 100, "%"));
    }
    return p.createElement("div", {
        className: po(y, m && "".concat(y, "-").concat(o + 1)),
        style: Ut(Ut({}, c), n),
        onMouseDown: S,
        onTouchStart: S,
    });
}
function ny(e) {
    var t = e.prefixCls,
        n = e.style,
        r = e.values,
        l = e.startPoint,
        o = e.onStartMove,
        i = p.useContext(wr),
        a = i.included,
        u = i.range,
        s = i.min,
        f = p.useMemo(
            function () {
                if (!u) {
                    if (r.length === 0) return [];
                    var h = l ?? s,
                        m = r[0];
                    return [{ start: Math.min(h, m), end: Math.max(h, m) }];
                }
                for (var y = [], v = 0; v < r.length - 1; v += 1)
                    y.push({ start: r[v], end: r[v + 1] });
                return y;
            },
            [r, u, l, s]
        );
    return a
        ? f.map(function (h, m) {
              var y = h.start,
                  v = h.end;
              return p.createElement(ty, {
                  index: m,
                  prefixCls: t,
                  style: Ur(n, m),
                  start: y,
                  end: v,
                  key: m,
                  onStartMove: o,
              });
          })
        : null;
}
function ry(e) {
    var t = e.prefixCls,
        n = e.style,
        r = e.children,
        l = e.value,
        o = e.onClick,
        i = p.useContext(wr),
        a = i.min,
        u = i.max,
        s = i.direction,
        f = i.includedStart,
        h = i.includedEnd,
        m = i.included,
        y = "".concat(t, "-text"),
        v = Is(s, l, a, u);
    return p.createElement(
        "span",
        {
            className: po(
                y,
                Jt({}, "".concat(y, "-active"), m && f <= l && l <= h)
            ),
            style: Ut(Ut({}, v), n),
            onMouseDown: function (S) {
                S.stopPropagation();
            },
            onClick: function () {
                o(l);
            },
        },
        r
    );
}
function ly(e) {
    var t = e.prefixCls,
        n = e.marks,
        r = e.onClick,
        l = "".concat(t, "-mark");
    return n.length
        ? p.createElement(
              "div",
              { className: l },
              n.map(function (o) {
                  var i = o.value,
                      a = o.style,
                      u = o.label;
                  return p.createElement(
                      ry,
                      { key: i, prefixCls: l, style: a, value: i, onClick: r },
                      u
                  );
              })
          )
        : null;
}
function oy(e) {
    var t = e.prefixCls,
        n = e.value,
        r = e.style,
        l = e.activeStyle,
        o = p.useContext(wr),
        i = o.min,
        a = o.max,
        u = o.direction,
        s = o.included,
        f = o.includedStart,
        h = o.includedEnd,
        m = "".concat(t, "-dot"),
        y = s && f <= n && n <= h,
        v = Ut(Ut({}, Is(u, n, i, a)), typeof r == "function" ? r(n) : r);
    return (
        y && (v = Ut(Ut({}, v), typeof l == "function" ? l(n) : l)),
        p.createElement("span", {
            className: po(m, Jt({}, "".concat(m, "-active"), y)),
            style: v,
        })
    );
}
function iy(e) {
    var t = e.prefixCls,
        n = e.marks,
        r = e.dots,
        l = e.style,
        o = e.activeStyle,
        i = p.useContext(wr),
        a = i.min,
        u = i.max,
        s = i.step,
        f = p.useMemo(
            function () {
                var h = new Set();
                if (
                    (n.forEach(function (y) {
                        h.add(y.value);
                    }),
                    r && s !== null)
                )
                    for (var m = a; m <= u; ) h.add(m), (m += s);
                return Array.from(h);
            },
            [a, u, s, r, n]
        );
    return p.createElement(
        "div",
        { className: "".concat(t, "-step") },
        f.map(function (h) {
            return p.createElement(oy, {
                prefixCls: t,
                key: h,
                value: h,
                style: l,
                activeStyle: o,
            });
        })
    );
}
function ay(e, t, n, r, l, o) {
    var i = p.useCallback(
            function (y) {
                var v = isFinite(y) ? y : e;
                return (v = Math.min(t, y)), (v = Math.max(e, v)), v;
            },
            [e, t]
        ),
        a = p.useCallback(
            function (y) {
                if (n !== null) {
                    var v = e + Math.round((i(y) - e) / n) * n,
                        w = function (g) {
                            return (String(g).split(".")[1] || "").length;
                        },
                        S = Math.max(w(n), w(t), w(e)),
                        c = Number(v.toFixed(S));
                    return e <= c && c <= t ? c : null;
                }
                return null;
            },
            [n, e, t, i]
        ),
        u = p.useCallback(
            function (y) {
                var v = i(y),
                    w = r.map(function (d) {
                        return d.value;
                    });
                n !== null && w.push(a(y)), w.push(e, t);
                var S = w[0],
                    c = t - e;
                return (
                    w.forEach(function (d) {
                        var g = Math.abs(v - d);
                        g <= c && ((S = d), (c = g));
                    }),
                    S
                );
            },
            [e, t, r, n, i, a]
        ),
        s = function y(v, w, S) {
            var c =
                arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : "unit";
            if (typeof w == "number") {
                var d,
                    g = v[S],
                    x = g + w,
                    P = [];
                r.forEach(function (j) {
                    P.push(j.value);
                }),
                    P.push(e, t),
                    P.push(a(g));
                var R = w > 0 ? 1 : -1;
                c === "unit" ? P.push(a(g + R * n)) : P.push(a(x)),
                    (P = P.filter(function (j) {
                        return j !== null;
                    }).filter(function (j) {
                        return w < 0 ? j <= g : j >= g;
                    })),
                    c === "unit" &&
                        (P = P.filter(function (j) {
                            return j !== g;
                        }));
                var M = c === "unit" ? g : x;
                d = P[0];
                var T = Math.abs(d - M);
                if (
                    (P.forEach(function (j) {
                        var Z = Math.abs(j - M);
                        Z < T && ((d = j), (T = Z));
                    }),
                    d === void 0)
                )
                    return w < 0 ? e : t;
                if (c === "dist") return d;
                if (Math.abs(w) > 1) {
                    var O = Rn(v);
                    return (O[S] = d), y(O, w - R, S, c);
                }
                return d;
            } else {
                if (w === "min") return e;
                if (w === "max") return t;
            }
        },
        f = function (v, w, S) {
            var c =
                    arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : "unit",
                d = v[S],
                g = s(v, w, S, c);
            return { value: g, changed: g !== d };
        },
        h = function (v) {
            return (o === null && v === 0) || (typeof o == "number" && v < o);
        },
        m = function (v, w, S) {
            var c =
                    arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : "unit",
                d = v.map(u),
                g = d[S],
                x = s(d, w, S, c);
            if (((d[S] = x), l === !1)) {
                var P = o || 0;
                S > 0 &&
                    d[S - 1] !== g &&
                    (d[S] = Math.max(d[S], d[S - 1] + P)),
                    S < d.length - 1 &&
                        d[S + 1] !== g &&
                        (d[S] = Math.min(d[S], d[S + 1] - P));
            } else if (typeof o == "number" || o === null) {
                for (var R = S + 1; R < d.length; R += 1)
                    for (var M = !0; h(d[R] - d[R - 1]) && M; ) {
                        var T = f(d, 1, R);
                        (d[R] = T.value), (M = T.changed);
                    }
                for (var O = S; O > 0; O -= 1)
                    for (var j = !0; h(d[O] - d[O - 1]) && j; ) {
                        var Z = f(d, -1, O - 1);
                        (d[O - 1] = Z.value), (j = Z.changed);
                    }
                for (var q = d.length - 1; q > 0; q -= 1)
                    for (var ae = !0; h(d[q] - d[q - 1]) && ae; ) {
                        var ie = f(d, -1, q - 1);
                        (d[q - 1] = ie.value), (ae = ie.changed);
                    }
                for (var Y = 0; Y < d.length - 1; Y += 1)
                    for (var ue = !0; h(d[Y + 1] - d[Y]) && ue; ) {
                        var ee = f(d, 1, Y + 1);
                        (d[Y + 1] = ee.value), (ue = ee.changed);
                    }
            }
            return { value: d[S], values: d };
        };
    return [u, m];
}
var Nd = p.forwardRef(function (e, t) {
    var n,
        r = e.prefixCls,
        l = r === void 0 ? "rc-slider" : r,
        o = e.className,
        i = e.style,
        a = e.disabled,
        u = a === void 0 ? !1 : a,
        s = e.keyboard,
        f = s === void 0 ? !0 : s,
        h = e.autoFocus,
        m = e.onFocus,
        y = e.onBlur,
        v = e.min,
        w = v === void 0 ? 0 : v,
        S = e.max,
        c = S === void 0 ? 100 : S,
        d = e.step,
        g = d === void 0 ? 1 : d,
        x = e.value,
        P = e.defaultValue,
        R = e.range,
        M = e.count,
        T = e.onChange,
        O = e.onBeforeChange,
        j = e.onAfterChange,
        Z = e.allowCross,
        q = Z === void 0 ? !0 : Z,
        ae = e.pushable,
        ie = ae === void 0 ? !1 : ae,
        Y = e.draggableTrack,
        ue = e.reverse,
        ee = e.vertical,
        L = e.included,
        F = L === void 0 ? !0 : L,
        B = e.startPoint,
        U = e.trackStyle,
        ne = e.handleStyle,
        ve = e.railStyle,
        ze = e.dotStyle,
        Pe = e.activeDotStyle,
        Re = e.marks,
        et = e.dots,
        Wt = e.handleRender,
        fn = e.tabIndex,
        bn = fn === void 0 ? 0 : fn,
        Vn = e.ariaLabelForHandle,
        kt = e.ariaLabelledByForHandle,
        pn = e.ariaValueTextFormatterForHandle,
        ht = p.useRef(),
        tt = p.useRef(),
        hn = p.useMemo(
            function () {
                return ee ? (ue ? "ttb" : "btt") : ue ? "rtl" : "ltr";
            },
            [ue, ee]
        ),
        Te = p.useMemo(
            function () {
                return isFinite(w) ? w : 0;
            },
            [w]
        ),
        Kt = p.useMemo(
            function () {
                return isFinite(c) ? c : 100;
            },
            [c]
        ),
        It = p.useMemo(
            function () {
                return g !== null && g <= 0 ? 1 : g;
            },
            [g]
        ),
        vo = p.useMemo(
            function () {
                return ie === !0 ? It : ie >= 0 ? ie : !1;
            },
            [ie, It]
        ),
        xr = p.useMemo(
            function () {
                var pe = Object.keys(Re || {});
                return pe
                    .map(function (W) {
                        var K = Re[W],
                            ke = { value: Number(W) };
                        return (
                            K &&
                            zn(K) === "object" &&
                            !p.isValidElement(K) &&
                            ("label" in K || "style" in K)
                                ? ((ke.style = K.style), (ke.label = K.label))
                                : (ke.label = K),
                            ke
                        );
                    })
                    .filter(function (W) {
                        var K = W.label;
                        return K || typeof K == "number";
                    })
                    .sort(function (W, K) {
                        return W.value - K.value;
                    });
            },
            [Re]
        ),
        Wn = ay(Te, Kt, It, xr, q, vo),
        Kn = ut(Wn, 2),
        Qn = Kn[0],
        Sr = Kn[1],
        Qi = Yg(P, { value: x }),
        go = ut(Qi, 2),
        Ct = go[0],
        Yi = go[1],
        k = p.useMemo(
            function () {
                var pe = Ct == null ? [] : Array.isArray(Ct) ? Ct : [Ct],
                    W = ut(pe, 1),
                    K = W[0],
                    ke = K === void 0 ? Te : K,
                    he = Ct === null ? [] : [ke];
                if (R) {
                    if (((he = Rn(pe)), M || Ct === void 0)) {
                        var kr = M >= 0 ? M + 1 : 2;
                        for (he = he.slice(0, kr); he.length < kr; ) {
                            var Xn;
                            he.push(
                                (Xn = he[he.length - 1]) !== null &&
                                    Xn !== void 0
                                    ? Xn
                                    : Te
                            );
                        }
                    }
                    he.sort(function (yn, fl) {
                        return yn - fl;
                    });
                }
                return (
                    he.forEach(function (yn, fl) {
                        he[fl] = Qn(yn);
                    }),
                    he
                );
            },
            [Ct, R, Te, M, Qn]
        ),
        C = p.useRef(k);
    C.current = k;
    var N = function (W) {
            return R ? W : W[0];
        },
        I = function (W) {
            var K = Rn(W).sort(function (ke, he) {
                return ke - he;
            });
            T && !Kg(K, C.current, !0) && T(N(K)), Yi(K);
        },
        $ = function (W) {
            if (!u) {
                var K = 0,
                    ke = Kt - Te;
                k.forEach(function (kr, Xn) {
                    var yn = Math.abs(W - kr);
                    yn <= ke && ((ke = yn), (K = Xn));
                });
                var he = Rn(k);
                (he[K] = W),
                    R && !k.length && M === void 0 && he.push(W),
                    O == null || O(N(he)),
                    I(he),
                    j == null || j(N(he));
            }
        },
        b = function (W) {
            W.preventDefault();
            var K = tt.current.getBoundingClientRect(),
                ke = K.width,
                he = K.height,
                kr = K.left,
                Xn = K.top,
                yn = K.bottom,
                fl = K.right,
                Ks = W.clientX,
                Qs = W.clientY,
                pl;
            switch (hn) {
                case "btt":
                    pl = (yn - Qs) / he;
                    break;
                case "ttb":
                    pl = (Qs - Xn) / he;
                    break;
                case "rtl":
                    pl = (fl - Ks) / ke;
                    break;
                default:
                    pl = (Ks - kr) / ke;
            }
            var $h = Te + pl * (Kt - Te);
            $(Qn($h));
        },
        V = p.useState(null),
        H = ut(V, 2),
        z = H[0],
        X = H[1],
        re = function (W, K) {
            if (!u) {
                var ke = Sr(k, W, K);
                O == null || O(N(k)),
                    I(ke.values),
                    j == null || j(N(ke.values)),
                    X(ke.value);
            }
        };
    p.useEffect(
        function () {
            if (z !== null) {
                var pe = k.indexOf(z);
                pe >= 0 && ht.current.focus(pe);
            }
            X(null);
        },
        [z]
    );
    var De = p.useMemo(
            function () {
                return Y && It === null ? !1 : Y;
            },
            [Y, It]
        ),
        Ne = function () {
            j == null || j(N(C.current));
        },
        Me = ey(tt, hn, k, Te, Kt, Qn, I, Ne, Sr),
        Ae = ut(Me, 4),
        mn = Ae[0],
        cl = Ae[1],
        vn = Ae[2],
        Dt = Ae[3],
        Yn = function (W, K) {
            Dt(W, K), O == null || O(N(C.current));
        },
        Er = mn !== -1;
    p.useEffect(
        function () {
            if (!Er) {
                var pe = k.lastIndexOf(cl);
                ht.current.focus(pe);
            }
        },
        [Er]
    );
    var Ft = p.useMemo(
            function () {
                return Rn(vn).sort(function (pe, W) {
                    return pe - W;
                });
            },
            [vn]
        ),
        dl = p.useMemo(
            function () {
                return R ? [Ft[0], Ft[Ft.length - 1]] : [Te, Ft[0]];
            },
            [Ft, R, Te]
        ),
        Gn = ut(dl, 2),
        se = Gn[0],
        Ge = Gn[1];
    p.useImperativeHandle(t, function () {
        return {
            focus: function () {
                ht.current.focus(0);
            },
            blur: function () {
                var W = document,
                    K = W.activeElement;
                tt.current.contains(K) && (K == null || K.blur());
            },
        };
    }),
        p.useEffect(function () {
            h && ht.current.focus(0);
        }, []);
    var gn = p.useMemo(
        function () {
            return {
                min: Te,
                max: Kt,
                direction: hn,
                disabled: u,
                keyboard: f,
                step: It,
                included: F,
                includedStart: se,
                includedEnd: Ge,
                range: R,
                tabIndex: bn,
                ariaLabelForHandle: Vn,
                ariaLabelledByForHandle: kt,
                ariaValueTextFormatterForHandle: pn,
            };
        },
        [Te, Kt, hn, u, f, It, F, se, Ge, R, bn, Vn, kt, pn]
    );
    return p.createElement(
        wr.Provider,
        { value: gn },
        p.createElement(
            "div",
            {
                ref: tt,
                className: po(
                    l,
                    o,
                    ((n = {}),
                    Jt(n, "".concat(l, "-disabled"), u),
                    Jt(n, "".concat(l, "-vertical"), ee),
                    Jt(n, "".concat(l, "-horizontal"), !ee),
                    Jt(n, "".concat(l, "-with-marks"), xr.length),
                    n)
                ),
                style: i,
                onMouseDown: b,
            },
            p.createElement("div", {
                className: "".concat(l, "-rail"),
                style: ve,
            }),
            p.createElement(ny, {
                prefixCls: l,
                style: U,
                values: Ft,
                startPoint: B,
                onStartMove: De ? Yn : null,
            }),
            p.createElement(iy, {
                prefixCls: l,
                marks: xr,
                dots: et,
                style: ze,
                activeStyle: Pe,
            }),
            p.createElement(qg, {
                ref: ht,
                prefixCls: l,
                style: ne,
                values: vn,
                draggingIndex: mn,
                onStartMove: Yn,
                onOffsetChange: re,
                onFocus: m,
                onBlur: y,
                handleRender: Wt,
            }),
            p.createElement(ly, { prefixCls: l, marks: xr, onClick: $ })
        )
    );
});
var Sh = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
    },
    Md = le.createContext && le.createContext(Sh),
    Dn =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Dn =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) {
                            t = arguments[n];
                            for (var l in t)
                                Object.prototype.hasOwnProperty.call(t, l) &&
                                    (e[l] = t[l]);
                        }
                        return e;
                    }),
                Dn.apply(this, arguments)
            );
        },
    uy =
        (globalThis && globalThis.__rest) ||
        function (e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                    t.indexOf(r) < 0 &&
                    (n[r] = e[r]);
            if (e != null && typeof Object.getOwnPropertySymbols == "function")
                for (
                    var l = 0, r = Object.getOwnPropertySymbols(e);
                    l < r.length;
                    l++
                )
                    t.indexOf(r[l]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
                        (n[r[l]] = e[r[l]]);
            return n;
        };
function Eh(e) {
    return (
        e &&
        e.map(function (t, n) {
            return le.createElement(t.tag, Dn({ key: n }, t.attr), Eh(t.child));
        })
    );
}
function Hn(e) {
    return function (t) {
        return le.createElement(
            sy,
            Dn({ attr: Dn({}, e.attr) }, t),
            Eh(e.child)
        );
    };
}
function sy(e) {
    var t = function (n) {
        var r = e.attr,
            l = e.size,
            o = e.title,
            i = uy(e, ["attr", "size", "title"]),
            a = l || n.size || "1em",
            u;
        return (
            n.className && (u = n.className),
            e.className && (u = (u ? u + " " : "") + e.className),
            le.createElement(
                "svg",
                Dn(
                    {
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0",
                    },
                    n.attr,
                    r,
                    i,
                    {
                        className: u,
                        style: Dn(
                            Dn({ color: e.color || n.color }, n.style),
                            e.style
                        ),
                        height: a,
                        width: a,
                        xmlns: "http://www.w3.org/2000/svg",
                    }
                ),
                o && le.createElement("title", null, o),
                e.children
            )
        );
    };
    return Md !== void 0
        ? le.createElement(Md.Consumer, null, function (n) {
              return t(n);
          })
        : t(Sh);
}
function cy(e) {
    return Hn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            { tag: "path", attr: { d: "M18 4l3 3l-3 3" } },
            { tag: "path", attr: { d: "M18 20l3 -3l-3 -3" } },
            {
                tag: "path",
                attr: { d: "M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" },
            },
            {
                tag: "path",
                attr: { d: "M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5" },
            },
        ],
    })(e);
}
function dy(e) {
    return Hn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            {
                tag: "path",
                attr: { d: "M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" },
            },
            {
                tag: "path",
                attr: { d: "M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" },
            },
            { tag: "path", attr: { d: "M9 17l0 -13l10 0l0 13" } },
            { tag: "path", attr: { d: "M9 8l10 0" } },
        ],
    })(e);
}
function fy(e) {
    return Hn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            {
                tag: "path",
                attr: {
                    d: "M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z",
                },
            },
            {
                tag: "path",
                attr: {
                    d: "M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z",
                },
            },
        ],
    })(e);
}
function py(e) {
    return Hn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            { tag: "path", attr: { d: "M7 4v16l13 -8z" } },
        ],
    })(e);
}
function hy(e) {
    return Hn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            { tag: "path", attr: { d: "M20 5v14l-12 -7z" } },
            { tag: "path", attr: { d: "M4 5l0 14" } },
        ],
    })(e);
}
function my(e) {
    return Hn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            { tag: "path", attr: { d: "M4 5v14l12 -7z" } },
            { tag: "path", attr: { d: "M20 5l0 14" } },
        ],
    })(e);
}
function vy(e) {
    return Hn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            {
                tag: "path",
                attr: {
                    d: "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",
                },
            },
            { tag: "path", attr: { d: "M16 10l4 4m0 -4l-4 4" } },
        ],
    })(e);
}
function gy(e) {
    return Hn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        child: [
            {
                tag: "path",
                attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            { tag: "path", attr: { d: "M15 8a5 5 0 0 1 0 8" } },
            { tag: "path", attr: { d: "M17.7 5a9 9 0 0 1 0 14" } },
            {
                tag: "path",
                attr: {
                    d: "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",
                },
            },
        ],
    })(e);
}
const yy = () =>
        E.jsx("div", {
            className:
                "bg-gradient-to-r from-primary to-secondary text-white justify-center items-center text-2xl rounded-lg flex w-full h-full",
            children: E.jsx(dy, {}),
        }),
    _d = (e) => {
        if (!e) return "00:00";
        e = Math.trunc(+e);
        const t = Math.floor(e / 60),
            n = e % 60;
        return (
            t.toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0")
        );
    },
    wy = () => {
        const [e, t] = p.useState(!1),
            [n, r] = p.useState(!1),
            [l, o] = p.useState(100),
            i = p.useRef(null);
        p.useEffect(() => {
            const v = (w) => {
                var S;
                ((S = i.current) != null && S.contains(w.target)) || r(!1);
            };
            return (
                document.addEventListener("click", v, !0),
                () => {
                    document.removeEventListener("click", v, !0);
                }
            );
        }, []);
        const a = p.useRef(),
            { currentMusic: u, setCurrentMusic: s, playList: f } = Ph();
        p.useEffect(
            () => (
                (a.current = new Audio(u.url)),
                a.current.addEventListener("volumechange", (v) => {
                    o(+v.target.volume);
                }),
                a.current.addEventListener("play", () => {
                    s({ isPlaying: !0 });
                }),
                a.current.addEventListener("pause", () => {
                    s({ isPlaying: !1 });
                }),
                a.current.addEventListener("ended", (v) => {
                    h(v.target.url);
                }),
                a.current.addEventListener("canplay", () => {
                    var v;
                    (v = a.current) == null || v.play();
                }),
                a.current.addEventListener("loadedmetadata", (v) => {
                    s({
                        curTime: v.target.currentTime,
                        duration: v.target.duration,
                    });
                }),
                a.current.addEventListener("timeupdate", (v) => {
                    s({ curTime: v.target.currentTime });
                }),
                () => {
                    var v;
                    (v = a.current) == null || v.pause();
                }
            ),
            [u.url]
        );
        const h = () => {
                const v = f.findIndex((w) => w.url === u.url);
                if (e) return y();
                v === f.length - 1 ? s(f[0], !0) : s(f[v + 1], !0);
            },
            m = () => {
                const v = f.findIndex((w) => w.url === u.url);
                if (e) return y();
                s(v === 0 ? f[f.length - 1] : f[v - 1]);
            },
            y = () => {
                const v = Math.floor(Math.random() * f.length),
                    w = f.findIndex((S) => S.url === u.url);
                v === w ? y() : s(f[v]);
            };
        return E.jsx("div", {
            className: "fixed w-screen bottom-0 inset-x-0",
            children: E.jsxs("div", {
                className:
                    "pt-3 px-8 bg-light-50 backdrop-blur-xl rounded-t-[2rem] text-white shadow-lg shadow-purple-50 h-24",
                children: [
                    E.jsxs("div", {
                        className:
                            "container mx-auto px-3 lg:px-0 flex justify-between",
                        children: [
                            E.jsxs("div", {
                                className: "flex items-center lg:w-3/12 gap-2",
                                children: [
                                    E.jsx("div", {
                                        className: "w-14 h-14 lg:flex-shrink-0",
                                        children: u.thumbnail
                                            ? E.jsx("img", {
                                                  src: u.thumbnail,
                                                  alt: u.title,
                                                  className: "rounded-lg",
                                              })
                                            : E.jsx(yy, {}),
                                    }),
                                    E.jsxs("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            E.jsx("h6", {
                                                className:
                                                    "text-sm font-semibold",
                                                children: u.title,
                                            }),
                                            E.jsx("span", {
                                                className:
                                                    "text-xs text-gray-400",
                                                children: u.artist,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            E.jsxs("div", {
                                className:
                                    "flex items-center justify-center gap-3 lg:w-2/12",
                                children: [
                                    E.jsx("button", {
                                        onClick: () => m(u.url),
                                        children: E.jsx(hy, { size: 20 }),
                                    }),
                                    E.jsx("button", {
                                        onClick: () => {
                                            var v, w;
                                            console.log(u.isPlaying),
                                                u.isPlaying
                                                    ? (v = a.current) == null ||
                                                      v.pause()
                                                    : (w = a.current) == null ||
                                                      w.play();
                                        },
                                        className:
                                            "rounded-full p-1 border border-primary bg-primary/10",
                                        children: u.isPlaying
                                            ? E.jsx(fy, { size: 26 })
                                            : E.jsx(py, { size: 26 }),
                                    }),
                                    E.jsx("button", {
                                        onClick: () => h(u.url),
                                        children: E.jsx(my, { size: 20 }),
                                    }),
                                ],
                            }),
                            E.jsxs("div", {
                                className:
                                    "hidden lg:flex w-6/12 flex-col gap-1 justify-center",
                                children: [
                                    E.jsx(Nd, {
                                        trackStyle: { background: "#f97f27" },
                                        handleStyle: {
                                            border: "2px solid #f97f27",
                                            background: "#f97f27",
                                            boxShadow: "none",
                                            opacity: 1,
                                        },
                                        min: 0,
                                        max: u.duration,
                                        value: u.curTime,
                                        onChange: (v) => {
                                            (a.current.currentTime = v),
                                                s({ curTime: v });
                                        },
                                    }),
                                    E.jsxs("div", {
                                        className:
                                            "flex justify-between text-xs",
                                        children: [
                                            E.jsx("span", {
                                                children: _d(u.curTime),
                                            }),
                                            E.jsx("span", {
                                                children: _d(u.duration),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            E.jsxs("div", {
                                className: "flex justify-end gap-3 lg:w-1/12",
                                children: [
                                    E.jsxs("div", {
                                        className:
                                            "relative flex items-center h-full",
                                        ref: i,
                                        children: [
                                            n &&
                                                E.jsx("div", {
                                                    className:
                                                        "flex absolute -top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-lg w-8 h-20 rounded-2xl overflow-hidden bg-light py-4 justify-center",
                                                    children: E.jsx(Nd, {
                                                        vertical: !0,
                                                        min: 0,
                                                        max: 1,
                                                        step: 0.01,
                                                        value: l,
                                                        onChange: (v) => {
                                                            o(v),
                                                                (a.current.volume =
                                                                    v);
                                                        },
                                                    }),
                                                }),
                                            E.jsx("button", {
                                                onClick: () => r(!n),
                                                children:
                                                    l === 0
                                                        ? E.jsx(vy, {
                                                              size: 20,
                                                          })
                                                        : E.jsx(gy, {
                                                              size: 20,
                                                          }),
                                            }),
                                        ],
                                    }),
                                    E.jsx("button", {
                                        onClick: () => t(!e),
                                        children: E.jsx(cy, {
                                            size: 20,
                                            color: e ? "#f97f27" : "",
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    E.jsx("div", {
                        className: "flex justify-center h-8",
                        children: E.jsx("span", {
                            className: "p-2 text-center text-gray-400 text-xs",
                            children:
                                "© 2022 - 2023 - All rights reserved - Made with ❤️ by jambon beurre team",
                        }),
                    }),
                ],
            }),
        });
    },
    kh = {
        album_id: 1,
        duration: "",
        expiration: 1e9,
        fileName: "",
        id: 1,
        title: "",
        url: "",
    },
    Ch = p.createContext({
        playList: [],
        currentMusic: kh,
        setCurrentMusic: () => {},
        setCurrentPlaylist: () => {},
    }),
    Ph = () => p.useContext(Ch),
    xy = ({ children: e }) => {
        const [t, n] = p.useState(kh),
            { tracks: r } = p.useContext(js),
            [l, o] = p.useState([]);
        p.useEffect(() => {
            r &&
                r.length > 0 &&
                (o(r), console.log("Récupération de toutes les chansons :", r));
        }, [r]);
        const i = (u, s = !1) => {
                s && u.url !== t.url ? n(u) : n((f) => ({ ...f, ...u }));
            },
            a = (u) => {
                o(u);
            };
        return E.jsxs(Ch.Provider, {
            value: {
                currentMusic: t,
                setCurrentMusic: i,
                playList: l,
                setCurrentPlaylist: a,
            },
            children: [
                e,
                t && t.url
                    ? E.jsx(wy, {})
                    : E.jsx("div", {
                          className:
                              "h-8 fixed w-screen bottom-0 inset-x-0 mt-4 bg-light flex justify-center",
                          children: E.jsx("span", {
                              className:
                                  "p-2 text-center text-gray-400 text-xs",
                              children:
                                  "© 2022 - 2023 - All rights reserved - Made with ❤️ by jambon beurre team",
                          }),
                      }),
            ],
        });
    };
var Sy = Object.defineProperty,
    Ey = (e, t, n) =>
        t in e
            ? Sy(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    Ca = (e, t, n) => (Ey(e, typeof t != "symbol" ? t + "" : t, n), n);
let ky = class {
        constructor() {
            Ca(this, "current", this.detect()),
                Ca(this, "handoffState", "pending"),
                Ca(this, "currentId", 0);
        }
        set(t) {
            this.current !== t &&
                ((this.handoffState = "pending"),
                (this.currentId = 0),
                (this.current = t));
        }
        reset() {
            this.set(this.detect());
        }
        nextId() {
            return ++this.currentId;
        }
        get isServer() {
            return this.current === "server";
        }
        get isClient() {
            return this.current === "client";
        }
        detect() {
            return typeof window > "u" || typeof document > "u"
                ? "server"
                : "client";
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
            return this.handoffState === "complete";
        }
    },
    ur = new ky(),
    wt = (e, t) => {
        ur.isServer ? p.useEffect(e, t) : p.useLayoutEffect(e, t);
    };
function sr(e) {
    let t = p.useRef(e);
    return (
        wt(() => {
            t.current = e;
        }, [e]),
        t
    );
}
function Cy(e) {
    typeof queueMicrotask == "function"
        ? queueMicrotask(e)
        : Promise.resolve()
              .then(e)
              .catch((t) =>
                  setTimeout(() => {
                      throw t;
                  })
              );
}
function an() {
    let e = [],
        t = {
            addEventListener(n, r, l, o) {
                return (
                    n.addEventListener(r, l, o),
                    t.add(() => n.removeEventListener(r, l, o))
                );
            },
            requestAnimationFrame(...n) {
                let r = requestAnimationFrame(...n);
                return t.add(() => cancelAnimationFrame(r));
            },
            nextFrame(...n) {
                return t.requestAnimationFrame(() =>
                    t.requestAnimationFrame(...n)
                );
            },
            setTimeout(...n) {
                let r = setTimeout(...n);
                return t.add(() => clearTimeout(r));
            },
            microTask(...n) {
                let r = { current: !0 };
                return (
                    Cy(() => {
                        r.current && n[0]();
                    }),
                    t.add(() => {
                        r.current = !1;
                    })
                );
            },
            style(n, r, l) {
                let o = n.style.getPropertyValue(r);
                return (
                    Object.assign(n.style, { [r]: l }),
                    this.add(() => {
                        Object.assign(n.style, { [r]: o });
                    })
                );
            },
            group(n) {
                let r = an();
                return n(r), this.add(() => r.dispose());
            },
            add(n) {
                return (
                    e.push(n),
                    () => {
                        let r = e.indexOf(n);
                        if (r >= 0) for (let l of e.splice(r, 1)) l();
                    }
                );
            },
            dispose() {
                for (let n of e.splice(0)) n();
            },
        };
    return t;
}
function Bi() {
    let [e] = p.useState(an);
    return p.useEffect(() => () => e.dispose(), [e]), e;
}
let ye = function (e) {
    let t = sr(e);
    return le.useCallback((...n) => t.current(...n), [t]);
};
function Ds() {
    let [e, t] = p.useState(ur.isHandoffComplete);
    return (
        e && ur.isHandoffComplete === !1 && t(!1),
        p.useEffect(() => {
            e !== !0 && t(!0);
        }, [e]),
        p.useEffect(() => ur.handoff(), []),
        e
    );
}
var Ld;
let ho =
    (Ld = le.useId) != null
        ? Ld
        : function () {
              let e = Ds(),
                  [t, n] = le.useState(e ? () => ur.nextId() : null);
              return (
                  wt(() => {
                      t === null && n(ur.nextId());
                  }, [t]),
                  t != null ? "" + t : void 0
              );
          };
function Qe(e, t, ...n) {
    if (e in t) {
        let l = t[e];
        return typeof l == "function" ? l(...n) : l;
    }
    let r = new Error(
        `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
        )
            .map((l) => `"${l}"`)
            .join(", ")}.`
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(r, Qe), r);
}
function mo(e) {
    return ur.isServer
        ? null
        : e instanceof Node
        ? e.ownerDocument
        : e != null && e.hasOwnProperty("current") && e.current instanceof Node
        ? e.current.ownerDocument
        : document;
}
let ju = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
]
    .map((e) => `${e}:not([tabindex='-1'])`)
    .join(",");
var Iu = ((e) => (
        (e[(e.First = 1)] = "First"),
        (e[(e.Previous = 2)] = "Previous"),
        (e[(e.Next = 4)] = "Next"),
        (e[(e.Last = 8)] = "Last"),
        (e[(e.WrapAround = 16)] = "WrapAround"),
        (e[(e.NoScroll = 32)] = "NoScroll"),
        e
    ))(Iu || {}),
    Py = ((e) => (
        (e[(e.Error = 0)] = "Error"),
        (e[(e.Overflow = 1)] = "Overflow"),
        (e[(e.Success = 2)] = "Success"),
        (e[(e.Underflow = 3)] = "Underflow"),
        e
    ))(Py || {}),
    Ry = ((e) => (
        (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
    ))(Ry || {});
function Rh(e = document.body) {
    return e == null
        ? []
        : Array.from(e.querySelectorAll(ju)).sort((t, n) =>
              Math.sign(
                  (t.tabIndex || Number.MAX_SAFE_INTEGER) -
                      (n.tabIndex || Number.MAX_SAFE_INTEGER)
              )
          );
}
var Fs = ((e) => (
    (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Fs || {});
function $s(e, t = 0) {
    var n;
    return e === ((n = mo(e)) == null ? void 0 : n.body)
        ? !1
        : Qe(t, {
              [0]() {
                  return e.matches(ju);
              },
              [1]() {
                  let r = e;
                  for (; r !== null; ) {
                      if (r.matches(ju)) return !0;
                      r = r.parentElement;
                  }
                  return !1;
              },
          });
}
function Nh(e) {
    let t = mo(e);
    an().nextFrame(() => {
        t && !$s(t.activeElement, 0) && My(e);
    });
}
var Ny = ((e) => (
    (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Ny || {});
typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener(
        "keydown",
        (e) => {
            e.metaKey ||
                e.altKey ||
                e.ctrlKey ||
                (document.documentElement.dataset.headlessuiFocusVisible = "");
        },
        !0
    ),
    document.addEventListener(
        "click",
        (e) => {
            e.detail === 1
                ? delete document.documentElement.dataset.headlessuiFocusVisible
                : e.detail === 0 &&
                  (document.documentElement.dataset.headlessuiFocusVisible =
                      "");
        },
        !0
    ));
function My(e) {
    e == null || e.focus({ preventScroll: !0 });
}
let _y = ["textarea", "input"].join(",");
function Ly(e) {
    var t, n;
    return (n =
        (t = e == null ? void 0 : e.matches) == null
            ? void 0
            : t.call(e, _y)) != null
        ? n
        : !1;
}
function Mh(e, t = (n) => n) {
    return e.slice().sort((n, r) => {
        let l = t(n),
            o = t(r);
        if (l === null || o === null) return 0;
        let i = l.compareDocumentPosition(o);
        return i & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : i & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
    });
}
function Ty(e, t) {
    return Oy(Rh(), t, { relativeTo: e });
}
function Oy(
    e,
    t,
    { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}
) {
    let o = Array.isArray(e)
            ? e.length > 0
                ? e[0].ownerDocument
                : document
            : e.ownerDocument,
        i = Array.isArray(e) ? (n ? Mh(e) : e) : Rh(e);
    l.length > 0 && i.length > 1 && (i = i.filter((y) => !l.includes(y))),
        (r = r ?? o.activeElement);
    let a = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error(
                "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
        })(),
        u = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
            if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
            if (t & 8) return i.length - 1;
            throw new Error(
                "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
        })(),
        s = t & 32 ? { preventScroll: !0 } : {},
        f = 0,
        h = i.length,
        m;
    do {
        if (f >= h || f + h <= 0) return 0;
        let y = u + f;
        if (t & 16) y = (y + h) % h;
        else {
            if (y < 0) return 3;
            if (y >= h) return 1;
        }
        (m = i[y]), m == null || m.focus(s), (f += a);
    } while (m !== o.activeElement);
    return t & 6 && Ly(m) && m.select(), 2;
}
function Pa(e, t, n) {
    let r = sr(t);
    p.useEffect(() => {
        function l(o) {
            r.current(o);
        }
        return (
            document.addEventListener(e, l, n),
            () => document.removeEventListener(e, l, n)
        );
    }, [e, n]);
}
function jy(e, t, n = !0) {
    let r = p.useRef(!1);
    p.useEffect(() => {
        requestAnimationFrame(() => {
            r.current = n;
        });
    }, [n]);
    function l(i, a) {
        if (!r.current || i.defaultPrevented) return;
        let u = (function f(h) {
                return typeof h == "function"
                    ? f(h())
                    : Array.isArray(h) || h instanceof Set
                    ? h
                    : [h];
            })(e),
            s = a(i);
        if (s !== null && s.getRootNode().contains(s)) {
            for (let f of u) {
                if (f === null) continue;
                let h = f instanceof HTMLElement ? f : f.current;
                if (
                    (h != null && h.contains(s)) ||
                    (i.composed && i.composedPath().includes(h))
                )
                    return;
            }
            return (
                !$s(s, Fs.Loose) && s.tabIndex !== -1 && i.preventDefault(),
                t(i, s)
            );
        }
    }
    let o = p.useRef(null);
    Pa(
        "mousedown",
        (i) => {
            var a, u;
            r.current &&
                (o.current =
                    ((u = (a = i.composedPath) == null ? void 0 : a.call(i)) ==
                    null
                        ? void 0
                        : u[0]) || i.target);
        },
        !0
    ),
        Pa(
            "click",
            (i) => {
                o.current && (l(i, () => o.current), (o.current = null));
            },
            !0
        ),
        Pa(
            "blur",
            (i) =>
                l(i, () =>
                    window.document.activeElement instanceof HTMLIFrameElement
                        ? window.document.activeElement
                        : null
                ),
            !0
        );
}
function Td(e) {
    var t;
    if (e.type) return e.type;
    let n = (t = e.as) != null ? t : "button";
    if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function _h(e, t) {
    let [n, r] = p.useState(() => Td(e));
    return (
        wt(() => {
            r(Td(e));
        }, [e.type, e.as]),
        wt(() => {
            n ||
                (t.current &&
                    t.current instanceof HTMLButtonElement &&
                    !t.current.hasAttribute("type") &&
                    r("button"));
        }, [n, t]),
        n
    );
}
let Lh = Symbol();
function Iy(e, t = !0) {
    return Object.assign(e, { [Lh]: t });
}
function cn(...e) {
    let t = p.useRef(e);
    p.useEffect(() => {
        t.current = e;
    }, [e]);
    let n = ye((r) => {
        for (let l of t.current)
            l != null && (typeof l == "function" ? l(r) : (l.current = r));
    });
    return e.every((r) => r == null || (r == null ? void 0 : r[Lh]))
        ? void 0
        : n;
}
function Dy({ container: e, accept: t, walk: n, enabled: r = !0 }) {
    let l = p.useRef(t),
        o = p.useRef(n);
    p.useEffect(() => {
        (l.current = t), (o.current = n);
    }, [t, n]),
        wt(() => {
            if (!e || !r) return;
            let i = mo(e);
            if (!i) return;
            let a = l.current,
                u = o.current,
                s = Object.assign((h) => a(h), { acceptNode: a }),
                f = i.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, !1);
            for (; f.nextNode(); ) u(f.currentNode);
        }, [e, r, l, o]);
}
function Fy(e) {
    throw new Error("Unexpected object: " + e);
}
var Lt = ((e) => (
    (e[(e.First = 0)] = "First"),
    (e[(e.Previous = 1)] = "Previous"),
    (e[(e.Next = 2)] = "Next"),
    (e[(e.Last = 3)] = "Last"),
    (e[(e.Specific = 4)] = "Specific"),
    (e[(e.Nothing = 5)] = "Nothing"),
    e
))(Lt || {});
function $y(e, t) {
    let n = t.resolveItems();
    if (n.length <= 0) return null;
    let r = t.resolveActiveIndex(),
        l = r ?? -1,
        o = (() => {
            switch (e.focus) {
                case 0:
                    return n.findIndex((i) => !t.resolveDisabled(i));
                case 1: {
                    let i = n
                        .slice()
                        .reverse()
                        .findIndex((a, u, s) =>
                            l !== -1 && s.length - u - 1 >= l
                                ? !1
                                : !t.resolveDisabled(a)
                        );
                    return i === -1 ? i : n.length - 1 - i;
                }
                case 2:
                    return n.findIndex((i, a) =>
                        a <= l ? !1 : !t.resolveDisabled(i)
                    );
                case 3: {
                    let i = n
                        .slice()
                        .reverse()
                        .findIndex((a) => !t.resolveDisabled(a));
                    return i === -1 ? i : n.length - 1 - i;
                }
                case 4:
                    return n.findIndex((i) => t.resolveId(i) === e.id);
                case 5:
                    return null;
                default:
                    Fy(e);
            }
        })();
    return o === -1 ? r : o;
}
function Du(...e) {
    return e.filter(Boolean).join(" ");
}
var nl = ((e) => (
        (e[(e.None = 0)] = "None"),
        (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
        (e[(e.Static = 2)] = "Static"),
        e
    ))(nl || {}),
    qt = ((e) => (
        (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
    ))(qt || {});
function dn({
    ourProps: e,
    theirProps: t,
    slot: n,
    defaultTag: r,
    features: l,
    visible: o = !0,
    name: i,
}) {
    let a = Th(t, e);
    if (o) return Do(a, n, r, i);
    let u = l ?? 0;
    if (u & 2) {
        let { static: s = !1, ...f } = a;
        if (s) return Do(f, n, r, i);
    }
    if (u & 1) {
        let { unmount: s = !0, ...f } = a;
        return Qe(s ? 0 : 1, {
            [0]() {
                return null;
            },
            [1]() {
                return Do(
                    { ...f, hidden: !0, style: { display: "none" } },
                    n,
                    r,
                    i
                );
            },
        });
    }
    return Do(a, n, r, i);
}
function Do(e, t = {}, n, r) {
    let {
            as: l = n,
            children: o,
            refName: i = "ref",
            ...a
        } = Ra(e, ["unmount", "static"]),
        u = e.ref !== void 0 ? { [i]: e.ref } : {},
        s = typeof o == "function" ? o(t) : o;
    "className" in a &&
        a.className &&
        typeof a.className == "function" &&
        (a.className = a.className(t));
    let f = {};
    if (t) {
        let h = !1,
            m = [];
        for (let [y, v] of Object.entries(t))
            typeof v == "boolean" && (h = !0), v === !0 && m.push(y);
        h && (f["data-headlessui-state"] = m.join(" "));
    }
    if (l === p.Fragment && Object.keys(Od(a)).length > 0) {
        if (!p.isValidElement(s) || (Array.isArray(s) && s.length > 1))
            throw new Error(
                [
                    'Passing props on "Fragment"!',
                    "",
                    `The current component <${r} /> is rendering a "Fragment".`,
                    "However we need to passthrough the following props:",
                    Object.keys(a).map((v) => `  - ${v}`).join(`
`),
                    "",
                    "You can apply a few solutions:",
                    [
                        'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                        "Render a single element as the child so that we can forward the props onto that element.",
                    ].map((v) => `  - ${v}`).join(`
`),
                ].join(`
`)
            );
        let h = s.props,
            m =
                typeof (h == null ? void 0 : h.className) == "function"
                    ? (...v) =>
                          Du(
                              h == null ? void 0 : h.className(...v),
                              a.className
                          )
                    : Du(h == null ? void 0 : h.className, a.className),
            y = m ? { className: m } : {};
        return p.cloneElement(
            s,
            Object.assign(
                {},
                Th(s.props, Od(Ra(a, ["ref"]))),
                f,
                u,
                zy(s.ref, u.ref),
                y
            )
        );
    }
    return p.createElement(
        l,
        Object.assign(
            {},
            Ra(a, ["ref"]),
            l !== p.Fragment && u,
            l !== p.Fragment && f
        ),
        s
    );
}
function zy(...e) {
    return {
        ref: e.every((t) => t == null)
            ? void 0
            : (t) => {
                  for (let n of e)
                      n != null &&
                          (typeof n == "function" ? n(t) : (n.current = t));
              },
    };
}
function Th(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let l in r)
            l.startsWith("on") && typeof r[l] == "function"
                ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
                : (t[l] = r[l]);
    if (t.disabled || t["aria-disabled"])
        return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
        );
    for (let r in n)
        Object.assign(t, {
            [r](l, ...o) {
                let i = n[r];
                for (let a of i) {
                    if (
                        (l instanceof Event ||
                            (l == null ? void 0 : l.nativeEvent) instanceof
                                Event) &&
                        l.defaultPrevented
                    )
                        return;
                    a(l, ...o);
                }
            },
        });
    return t;
}
function Vt(e) {
    var t;
    return Object.assign(p.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name,
    });
}
function Od(e) {
    let t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t;
}
function Ra(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n;
}
function Oh(e) {
    let t = e.parentElement,
        n = null;
    for (; t && !(t instanceof HTMLFieldSetElement); )
        t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && Ay(n) ? !1 : r;
}
function Ay(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null; ) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling;
    }
    return !0;
}
let zs = p.createContext(null);
zs.displayName = "OpenClosedContext";
var Be = ((e) => (
    (e[(e.Open = 1)] = "Open"),
    (e[(e.Closed = 2)] = "Closed"),
    (e[(e.Closing = 4)] = "Closing"),
    (e[(e.Opening = 8)] = "Opening"),
    e
))(Be || {});
function Hi() {
    return p.useContext(zs);
}
function As({ value: e, children: t }) {
    return le.createElement(zs.Provider, { value: e }, t);
}
var Se = ((e) => (
    (e.Space = " "),
    (e.Enter = "Enter"),
    (e.Escape = "Escape"),
    (e.Backspace = "Backspace"),
    (e.Delete = "Delete"),
    (e.ArrowLeft = "ArrowLeft"),
    (e.ArrowUp = "ArrowUp"),
    (e.ArrowRight = "ArrowRight"),
    (e.ArrowDown = "ArrowDown"),
    (e.Home = "Home"),
    (e.End = "End"),
    (e.PageUp = "PageUp"),
    (e.PageDown = "PageDown"),
    (e.Tab = "Tab"),
    e
))(Se || {});
function jd(e) {
    return [e.screenX, e.screenY];
}
function Uy() {
    let e = p.useRef([-1, -1]);
    return {
        wasMoved(t) {
            let n = jd(t);
            return e.current[0] === n[0] && e.current[1] === n[1]
                ? !1
                : ((e.current = n), !0);
        },
        update(t) {
            e.current = jd(t);
        },
    };
}
function Us() {
    let e = p.useRef(!1);
    return (
        wt(
            () => (
                (e.current = !0),
                () => {
                    e.current = !1;
                }
            ),
            []
        ),
        e
    );
}
function By(...e) {
    return p.useMemo(() => mo(...e), [...e]);
}
var Id;
let Hy =
    (Id = le.startTransition) != null
        ? Id
        : function (e) {
              e();
          };
var by = ((e) => (
        (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
    ))(by || {}),
    Vy = ((e) => (
        (e[(e.ToggleDisclosure = 0)] = "ToggleDisclosure"),
        (e[(e.CloseDisclosure = 1)] = "CloseDisclosure"),
        (e[(e.SetButtonId = 2)] = "SetButtonId"),
        (e[(e.SetPanelId = 3)] = "SetPanelId"),
        (e[(e.LinkPanel = 4)] = "LinkPanel"),
        (e[(e.UnlinkPanel = 5)] = "UnlinkPanel"),
        e
    ))(Vy || {});
let Wy = {
        [0]: (e) => ({
            ...e,
            disclosureState: Qe(e.disclosureState, { [0]: 1, [1]: 0 }),
        }),
        [1]: (e) =>
            e.disclosureState === 1 ? e : { ...e, disclosureState: 1 },
        [4](e) {
            return e.linkedPanel === !0 ? e : { ...e, linkedPanel: !0 };
        },
        [5](e) {
            return e.linkedPanel === !1 ? e : { ...e, linkedPanel: !1 };
        },
        [2](e, t) {
            return e.buttonId === t.buttonId
                ? e
                : { ...e, buttonId: t.buttonId };
        },
        [3](e, t) {
            return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
        },
    },
    Bs = p.createContext(null);
Bs.displayName = "DisclosureContext";
function Hs(e) {
    let t = p.useContext(Bs);
    if (t === null) {
        let n = new Error(
            `<${e} /> is missing a parent <Disclosure /> component.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(n, Hs), n);
    }
    return t;
}
let bs = p.createContext(null);
bs.displayName = "DisclosureAPIContext";
function jh(e) {
    let t = p.useContext(bs);
    if (t === null) {
        let n = new Error(
            `<${e} /> is missing a parent <Disclosure /> component.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(n, jh), n);
    }
    return t;
}
let Vs = p.createContext(null);
Vs.displayName = "DisclosurePanelContext";
function Ky() {
    return p.useContext(Vs);
}
function Qy(e, t) {
    return Qe(t.type, Wy, e, t);
}
let Yy = p.Fragment;
function Gy(e, t) {
    let { defaultOpen: n = !1, ...r } = e,
        l = p.useRef(null),
        o = cn(
            t,
            Iy((S) => {
                l.current = S;
            }, e.as === void 0 || e.as === p.Fragment)
        ),
        i = p.useRef(null),
        a = p.useRef(null),
        u = p.useReducer(Qy, {
            disclosureState: n ? 0 : 1,
            linkedPanel: !1,
            buttonRef: a,
            panelRef: i,
            buttonId: null,
            panelId: null,
        }),
        [{ disclosureState: s, buttonId: f }, h] = u,
        m = ye((S) => {
            h({ type: 1 });
            let c = mo(l);
            if (!c || !f) return;
            let d = (() =>
                S
                    ? S instanceof HTMLElement
                        ? S
                        : S.current instanceof HTMLElement
                        ? S.current
                        : c.getElementById(f)
                    : c.getElementById(f))();
            d == null || d.focus();
        }),
        y = p.useMemo(() => ({ close: m }), [m]),
        v = p.useMemo(() => ({ open: s === 0, close: m }), [s, m]),
        w = { ref: o };
    return le.createElement(
        Bs.Provider,
        { value: u },
        le.createElement(
            bs.Provider,
            { value: y },
            le.createElement(
                As,
                { value: Qe(s, { [0]: Be.Open, [1]: Be.Closed }) },
                dn({
                    ourProps: w,
                    theirProps: r,
                    slot: v,
                    defaultTag: Yy,
                    name: "Disclosure",
                })
            )
        )
    );
}
let Xy = "button";
function Zy(e, t) {
    let n = ho(),
        { id: r = `headlessui-disclosure-button-${n}`, ...l } = e,
        [o, i] = Hs("Disclosure.Button"),
        a = Ky(),
        u = a === null ? !1 : a === o.panelId,
        s = p.useRef(null),
        f = cn(s, t, u ? null : o.buttonRef);
    p.useEffect(() => {
        if (!u)
            return (
                i({ type: 2, buttonId: r }),
                () => {
                    i({ type: 2, buttonId: null });
                }
            );
    }, [r, i, u]);
    let h = ye((c) => {
            var d;
            if (u) {
                if (o.disclosureState === 1) return;
                switch (c.key) {
                    case Se.Space:
                    case Se.Enter:
                        c.preventDefault(),
                            c.stopPropagation(),
                            i({ type: 0 }),
                            (d = o.buttonRef.current) == null || d.focus();
                        break;
                }
            } else
                switch (c.key) {
                    case Se.Space:
                    case Se.Enter:
                        c.preventDefault(), c.stopPropagation(), i({ type: 0 });
                        break;
                }
        }),
        m = ye((c) => {
            switch (c.key) {
                case Se.Space:
                    c.preventDefault();
                    break;
            }
        }),
        y = ye((c) => {
            var d;
            Oh(c.currentTarget) ||
                e.disabled ||
                (u
                    ? (i({ type: 0 }),
                      (d = o.buttonRef.current) == null || d.focus())
                    : i({ type: 0 }));
        }),
        v = p.useMemo(() => ({ open: o.disclosureState === 0 }), [o]),
        w = _h(e, s),
        S = u
            ? { ref: f, type: w, onKeyDown: h, onClick: y }
            : {
                  ref: f,
                  id: r,
                  type: w,
                  "aria-expanded": e.disabled
                      ? void 0
                      : o.disclosureState === 0,
                  "aria-controls": o.linkedPanel ? o.panelId : void 0,
                  onKeyDown: h,
                  onKeyUp: m,
                  onClick: y,
              };
    return dn({
        ourProps: S,
        theirProps: l,
        slot: v,
        defaultTag: Xy,
        name: "Disclosure.Button",
    });
}
let Jy = "div",
    qy = nl.RenderStrategy | nl.Static;
function e1(e, t) {
    let n = ho(),
        { id: r = `headlessui-disclosure-panel-${n}`, ...l } = e,
        [o, i] = Hs("Disclosure.Panel"),
        { close: a } = jh("Disclosure.Panel"),
        u = cn(t, o.panelRef, (y) => {
            Hy(() => i({ type: y ? 4 : 5 }));
        });
    p.useEffect(
        () => (
            i({ type: 3, panelId: r }),
            () => {
                i({ type: 3, panelId: null });
            }
        ),
        [r, i]
    );
    let s = Hi(),
        f = (() =>
            s !== null ? (s & Be.Open) === Be.Open : o.disclosureState === 0)(),
        h = p.useMemo(
            () => ({ open: o.disclosureState === 0, close: a }),
            [o, a]
        ),
        m = { ref: u, id: r };
    return le.createElement(
        Vs.Provider,
        { value: o.panelId },
        dn({
            ourProps: m,
            theirProps: l,
            slot: h,
            defaultTag: Jy,
            features: qy,
            visible: f,
            name: "Disclosure.Panel",
        })
    );
}
let t1 = Vt(Gy),
    n1 = Vt(Zy),
    r1 = Vt(e1),
    Cl = Object.assign(t1, { Button: n1, Panel: r1 });
var l1 = ((e) => (
        (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
    ))(l1 || {}),
    o1 = ((e) => (
        (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
    ))(o1 || {}),
    i1 = ((e) => (
        (e[(e.OpenMenu = 0)] = "OpenMenu"),
        (e[(e.CloseMenu = 1)] = "CloseMenu"),
        (e[(e.GoToItem = 2)] = "GoToItem"),
        (e[(e.Search = 3)] = "Search"),
        (e[(e.ClearSearch = 4)] = "ClearSearch"),
        (e[(e.RegisterItem = 5)] = "RegisterItem"),
        (e[(e.UnregisterItem = 6)] = "UnregisterItem"),
        e
    ))(i1 || {});
function Na(e, t = (n) => n) {
    let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
        r = Mh(t(e.items.slice()), (o) => o.dataRef.current.domRef.current),
        l = n ? r.indexOf(n) : null;
    return l === -1 && (l = null), { items: r, activeItemIndex: l };
}
let a1 = {
        [1](e) {
            return e.menuState === 1
                ? e
                : { ...e, activeItemIndex: null, menuState: 1 };
        },
        [0](e) {
            return e.menuState === 0 ? e : { ...e, menuState: 0 };
        },
        [2]: (e, t) => {
            var n;
            let r = Na(e),
                l = $y(t, {
                    resolveItems: () => r.items,
                    resolveActiveIndex: () => r.activeItemIndex,
                    resolveId: (o) => o.id,
                    resolveDisabled: (o) => o.dataRef.current.disabled,
                });
            return {
                ...e,
                ...r,
                searchQuery: "",
                activeItemIndex: l,
                activationTrigger: (n = t.trigger) != null ? n : 1,
            };
        },
        [3]: (e, t) => {
            let n = e.searchQuery !== "" ? 0 : 1,
                r = e.searchQuery + t.value.toLowerCase(),
                l = (
                    e.activeItemIndex !== null
                        ? e.items
                              .slice(e.activeItemIndex + n)
                              .concat(e.items.slice(0, e.activeItemIndex + n))
                        : e.items
                ).find((i) => {
                    var a;
                    return (
                        ((a = i.dataRef.current.textValue) == null
                            ? void 0
                            : a.startsWith(r)) && !i.dataRef.current.disabled
                    );
                }),
                o = l ? e.items.indexOf(l) : -1;
            return o === -1 || o === e.activeItemIndex
                ? { ...e, searchQuery: r }
                : {
                      ...e,
                      searchQuery: r,
                      activeItemIndex: o,
                      activationTrigger: 1,
                  };
        },
        [4](e) {
            return e.searchQuery === ""
                ? e
                : { ...e, searchQuery: "", searchActiveItemIndex: null };
        },
        [5]: (e, t) => {
            let n = Na(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
            return { ...e, ...n };
        },
        [6]: (e, t) => {
            let n = Na(e, (r) => {
                let l = r.findIndex((o) => o.id === t.id);
                return l !== -1 && r.splice(l, 1), r;
            });
            return { ...e, ...n, activationTrigger: 1 };
        },
    },
    Ws = p.createContext(null);
Ws.displayName = "MenuContext";
function bi(e) {
    let t = p.useContext(Ws);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
        throw (Error.captureStackTrace && Error.captureStackTrace(n, bi), n);
    }
    return t;
}
function u1(e, t) {
    return Qe(t.type, a1, e, t);
}
let s1 = p.Fragment;
function c1(e, t) {
    let n = p.useReducer(u1, {
            menuState: 1,
            buttonRef: p.createRef(),
            itemsRef: p.createRef(),
            items: [],
            searchQuery: "",
            activeItemIndex: null,
            activationTrigger: 1,
        }),
        [{ menuState: r, itemsRef: l, buttonRef: o }, i] = n,
        a = cn(t);
    jy(
        [o, l],
        (m, y) => {
            var v;
            i({ type: 1 }),
                $s(y, Fs.Loose) ||
                    (m.preventDefault(), (v = o.current) == null || v.focus());
        },
        r === 0
    );
    let u = ye(() => {
            i({ type: 1 });
        }),
        s = p.useMemo(() => ({ open: r === 0, close: u }), [r, u]),
        f = e,
        h = { ref: a };
    return le.createElement(
        Ws.Provider,
        { value: n },
        le.createElement(
            As,
            { value: Qe(r, { [0]: Be.Open, [1]: Be.Closed }) },
            dn({
                ourProps: h,
                theirProps: f,
                slot: s,
                defaultTag: s1,
                name: "Menu",
            })
        )
    );
}
let d1 = "button";
function f1(e, t) {
    var n;
    let r = ho(),
        { id: l = `headlessui-menu-button-${r}`, ...o } = e,
        [i, a] = bi("Menu.Button"),
        u = cn(i.buttonRef, t),
        s = Bi(),
        f = ye((w) => {
            switch (w.key) {
                case Se.Space:
                case Se.Enter:
                case Se.ArrowDown:
                    w.preventDefault(),
                        w.stopPropagation(),
                        a({ type: 0 }),
                        s.nextFrame(() => a({ type: 2, focus: Lt.First }));
                    break;
                case Se.ArrowUp:
                    w.preventDefault(),
                        w.stopPropagation(),
                        a({ type: 0 }),
                        s.nextFrame(() => a({ type: 2, focus: Lt.Last }));
                    break;
            }
        }),
        h = ye((w) => {
            switch (w.key) {
                case Se.Space:
                    w.preventDefault();
                    break;
            }
        }),
        m = ye((w) => {
            if (Oh(w.currentTarget)) return w.preventDefault();
            e.disabled ||
                (i.menuState === 0
                    ? (a({ type: 1 }),
                      s.nextFrame(() => {
                          var S;
                          return (S = i.buttonRef.current) == null
                              ? void 0
                              : S.focus({ preventScroll: !0 });
                      }))
                    : (w.preventDefault(), a({ type: 0 })));
        }),
        y = p.useMemo(() => ({ open: i.menuState === 0 }), [i]),
        v = {
            ref: u,
            id: l,
            type: _h(e, i.buttonRef),
            "aria-haspopup": "menu",
            "aria-controls": (n = i.itemsRef.current) == null ? void 0 : n.id,
            "aria-expanded": e.disabled ? void 0 : i.menuState === 0,
            onKeyDown: f,
            onKeyUp: h,
            onClick: m,
        };
    return dn({
        ourProps: v,
        theirProps: o,
        slot: y,
        defaultTag: d1,
        name: "Menu.Button",
    });
}
let p1 = "div",
    h1 = nl.RenderStrategy | nl.Static;
function m1(e, t) {
    var n, r;
    let l = ho(),
        { id: o = `headlessui-menu-items-${l}`, ...i } = e,
        [a, u] = bi("Menu.Items"),
        s = cn(a.itemsRef, t),
        f = By(a.itemsRef),
        h = Bi(),
        m = Hi(),
        y = (() =>
            m !== null ? (m & Be.Open) === Be.Open : a.menuState === 0)();
    p.useEffect(() => {
        let d = a.itemsRef.current;
        d &&
            a.menuState === 0 &&
            d !== (f == null ? void 0 : f.activeElement) &&
            d.focus({ preventScroll: !0 });
    }, [a.menuState, a.itemsRef, f]),
        Dy({
            container: a.itemsRef.current,
            enabled: a.menuState === 0,
            accept(d) {
                return d.getAttribute("role") === "menuitem"
                    ? NodeFilter.FILTER_REJECT
                    : d.hasAttribute("role")
                    ? NodeFilter.FILTER_SKIP
                    : NodeFilter.FILTER_ACCEPT;
            },
            walk(d) {
                d.setAttribute("role", "none");
            },
        });
    let v = ye((d) => {
            var g, x;
            switch ((h.dispose(), d.key)) {
                case Se.Space:
                    if (a.searchQuery !== "")
                        return (
                            d.preventDefault(),
                            d.stopPropagation(),
                            u({ type: 3, value: d.key })
                        );
                case Se.Enter:
                    if (
                        (d.preventDefault(),
                        d.stopPropagation(),
                        u({ type: 1 }),
                        a.activeItemIndex !== null)
                    ) {
                        let { dataRef: P } = a.items[a.activeItemIndex];
                        (x =
                            (g = P.current) == null
                                ? void 0
                                : g.domRef.current) == null || x.click();
                    }
                    Nh(a.buttonRef.current);
                    break;
                case Se.ArrowDown:
                    return (
                        d.preventDefault(),
                        d.stopPropagation(),
                        u({ type: 2, focus: Lt.Next })
                    );
                case Se.ArrowUp:
                    return (
                        d.preventDefault(),
                        d.stopPropagation(),
                        u({ type: 2, focus: Lt.Previous })
                    );
                case Se.Home:
                case Se.PageUp:
                    return (
                        d.preventDefault(),
                        d.stopPropagation(),
                        u({ type: 2, focus: Lt.First })
                    );
                case Se.End:
                case Se.PageDown:
                    return (
                        d.preventDefault(),
                        d.stopPropagation(),
                        u({ type: 2, focus: Lt.Last })
                    );
                case Se.Escape:
                    d.preventDefault(),
                        d.stopPropagation(),
                        u({ type: 1 }),
                        an().nextFrame(() => {
                            var P;
                            return (P = a.buttonRef.current) == null
                                ? void 0
                                : P.focus({ preventScroll: !0 });
                        });
                    break;
                case Se.Tab:
                    d.preventDefault(),
                        d.stopPropagation(),
                        u({ type: 1 }),
                        an().nextFrame(() => {
                            Ty(
                                a.buttonRef.current,
                                d.shiftKey ? Iu.Previous : Iu.Next
                            );
                        });
                    break;
                default:
                    d.key.length === 1 &&
                        (u({ type: 3, value: d.key }),
                        h.setTimeout(() => u({ type: 4 }), 350));
                    break;
            }
        }),
        w = ye((d) => {
            switch (d.key) {
                case Se.Space:
                    d.preventDefault();
                    break;
            }
        }),
        S = p.useMemo(() => ({ open: a.menuState === 0 }), [a]),
        c = {
            "aria-activedescendant":
                a.activeItemIndex === null ||
                (n = a.items[a.activeItemIndex]) == null
                    ? void 0
                    : n.id,
            "aria-labelledby":
                (r = a.buttonRef.current) == null ? void 0 : r.id,
            id: o,
            onKeyDown: v,
            onKeyUp: w,
            role: "menu",
            tabIndex: 0,
            ref: s,
        };
    return dn({
        ourProps: c,
        theirProps: i,
        slot: S,
        defaultTag: p1,
        features: h1,
        visible: y,
        name: "Menu.Items",
    });
}
let v1 = p.Fragment;
function g1(e, t) {
    let n = ho(),
        { id: r = `headlessui-menu-item-${n}`, disabled: l = !1, ...o } = e,
        [i, a] = bi("Menu.Item"),
        u =
            i.activeItemIndex !== null
                ? i.items[i.activeItemIndex].id === r
                : !1,
        s = p.useRef(null),
        f = cn(t, s);
    wt(() => {
        if (i.menuState !== 0 || !u || i.activationTrigger === 0) return;
        let x = an();
        return (
            x.requestAnimationFrame(() => {
                var P, R;
                (R = (P = s.current) == null ? void 0 : P.scrollIntoView) ==
                    null || R.call(P, { block: "nearest" });
            }),
            x.dispose
        );
    }, [s, u, i.menuState, i.activationTrigger, i.activeItemIndex]);
    let h = p.useRef({ disabled: l, domRef: s });
    wt(() => {
        h.current.disabled = l;
    }, [h, l]),
        wt(() => {
            var x, P;
            h.current.textValue =
                (P = (x = s.current) == null ? void 0 : x.textContent) == null
                    ? void 0
                    : P.toLowerCase();
        }, [h, s]),
        wt(
            () => (
                a({ type: 5, id: r, dataRef: h }), () => a({ type: 6, id: r })
            ),
            [h, r]
        );
    let m = ye(() => {
            a({ type: 1 });
        }),
        y = ye((x) => {
            if (l) return x.preventDefault();
            a({ type: 1 }), Nh(i.buttonRef.current);
        }),
        v = ye(() => {
            if (l) return a({ type: 2, focus: Lt.Nothing });
            a({ type: 2, focus: Lt.Specific, id: r });
        }),
        w = Uy(),
        S = ye((x) => w.update(x)),
        c = ye((x) => {
            w.wasMoved(x) &&
                (l ||
                    u ||
                    a({ type: 2, focus: Lt.Specific, id: r, trigger: 0 }));
        }),
        d = ye((x) => {
            w.wasMoved(x) && (l || (u && a({ type: 2, focus: Lt.Nothing })));
        }),
        g = p.useMemo(() => ({ active: u, disabled: l, close: m }), [u, l, m]);
    return dn({
        ourProps: {
            id: r,
            ref: f,
            role: "menuitem",
            tabIndex: l === !0 ? void 0 : -1,
            "aria-disabled": l === !0 ? !0 : void 0,
            disabled: void 0,
            onClick: y,
            onFocus: v,
            onPointerEnter: S,
            onMouseEnter: S,
            onPointerMove: c,
            onMouseMove: c,
            onPointerLeave: d,
            onMouseLeave: d,
        },
        theirProps: o,
        slot: g,
        defaultTag: v1,
        name: "Menu.Item",
    });
}
let y1 = Vt(c1),
    w1 = Vt(f1),
    x1 = Vt(m1),
    S1 = Vt(g1),
    Fo = Object.assign(y1, { Button: w1, Items: x1, Item: S1 });
function E1(e = 0) {
    let [t, n] = p.useState(e),
        r = Us(),
        l = p.useCallback(
            (u) => {
                r.current && n((s) => s | u);
            },
            [t, r]
        ),
        o = p.useCallback((u) => !!(t & u), [t]),
        i = p.useCallback(
            (u) => {
                r.current && n((s) => s & ~u);
            },
            [n, r]
        ),
        a = p.useCallback(
            (u) => {
                r.current && n((s) => s ^ u);
            },
            [n]
        );
    return { flags: t, addFlag: l, hasFlag: o, removeFlag: i, toggleFlag: a };
}
function k1(e) {
    let t = { called: !1 };
    return (...n) => {
        if (!t.called) return (t.called = !0), e(...n);
    };
}
function Ma(e, ...t) {
    e && t.length > 0 && e.classList.add(...t);
}
function _a(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t);
}
function C1(e, t) {
    let n = an();
    if (!e) return n.dispose;
    let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
        [o, i] = [r, l].map((u) => {
            let [s = 0] = u
                .split(",")
                .filter(Boolean)
                .map((f) =>
                    f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3
                )
                .sort((f, h) => h - f);
            return s;
        }),
        a = o + i;
    if (a !== 0) {
        n.group((s) => {
            s.setTimeout(() => {
                t(), s.dispose();
            }, a),
                s.addEventListener(e, "transitionrun", (f) => {
                    f.target === f.currentTarget && s.dispose();
                });
        });
        let u = n.addEventListener(e, "transitionend", (s) => {
            s.target === s.currentTarget && (t(), u());
        });
    } else t();
    return n.add(() => t()), n.dispose;
}
function P1(e, t, n, r) {
    let l = n ? "enter" : "leave",
        o = an(),
        i = r !== void 0 ? k1(r) : () => {};
    l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
    let a = Qe(l, { enter: () => t.enter, leave: () => t.leave }),
        u = Qe(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
        s = Qe(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
    return (
        _a(
            e,
            ...t.enter,
            ...t.enterTo,
            ...t.enterFrom,
            ...t.leave,
            ...t.leaveFrom,
            ...t.leaveTo,
            ...t.entered
        ),
        Ma(e, ...a, ...s),
        o.nextFrame(() => {
            _a(e, ...s),
                Ma(e, ...u),
                C1(e, () => (_a(e, ...a), Ma(e, ...t.entered), i()));
        }),
        o.dispose
    );
}
function R1({ container: e, direction: t, classes: n, onStart: r, onStop: l }) {
    let o = Us(),
        i = Bi(),
        a = sr(t);
    wt(() => {
        let u = an();
        i.add(u.dispose);
        let s = e.current;
        if (s && a.current !== "idle" && o.current)
            return (
                u.dispose(),
                r.current(a.current),
                u.add(
                    P1(s, n.current, a.current === "enter", () => {
                        u.dispose(), l.current(a.current);
                    })
                ),
                u.dispose
            );
    }, [t]);
}
function Jn(e = "") {
    return e.split(" ").filter((t) => t.trim().length > 1);
}
let Vi = p.createContext(null);
Vi.displayName = "TransitionContext";
var N1 = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(N1 || {});
function M1() {
    let e = p.useContext(Vi);
    if (e === null)
        throw new Error(
            "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
        );
    return e;
}
function _1() {
    let e = p.useContext(Wi);
    if (e === null)
        throw new Error(
            "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
        );
    return e;
}
let Wi = p.createContext(null);
Wi.displayName = "NestingContext";
function Ki(e) {
    return "children" in e
        ? Ki(e.children)
        : e.current
              .filter(({ el: t }) => t.current !== null)
              .filter(({ state: t }) => t === "visible").length > 0;
}
function Ih(e, t) {
    let n = sr(e),
        r = p.useRef([]),
        l = Us(),
        o = Bi(),
        i = ye((y, v = qt.Hidden) => {
            let w = r.current.findIndex(({ el: S }) => S === y);
            w !== -1 &&
                (Qe(v, {
                    [qt.Unmount]() {
                        r.current.splice(w, 1);
                    },
                    [qt.Hidden]() {
                        r.current[w].state = "hidden";
                    },
                }),
                o.microTask(() => {
                    var S;
                    !Ki(r) &&
                        l.current &&
                        ((S = n.current) == null || S.call(n));
                }));
        }),
        a = ye((y) => {
            let v = r.current.find(({ el: w }) => w === y);
            return (
                v
                    ? v.state !== "visible" && (v.state = "visible")
                    : r.current.push({ el: y, state: "visible" }),
                () => i(y, qt.Unmount)
            );
        }),
        u = p.useRef([]),
        s = p.useRef(Promise.resolve()),
        f = p.useRef({ enter: [], leave: [], idle: [] }),
        h = ye((y, v, w) => {
            u.current.splice(0),
                t &&
                    (t.chains.current[v] = t.chains.current[v].filter(
                        ([S]) => S !== y
                    )),
                t == null ||
                    t.chains.current[v].push([
                        y,
                        new Promise((S) => {
                            u.current.push(S);
                        }),
                    ]),
                t == null ||
                    t.chains.current[v].push([
                        y,
                        new Promise((S) => {
                            Promise.all(f.current[v].map(([c, d]) => d)).then(
                                () => S()
                            );
                        }),
                    ]),
                v === "enter"
                    ? (s.current = s.current
                          .then(() => (t == null ? void 0 : t.wait.current))
                          .then(() => w(v)))
                    : w(v);
        }),
        m = ye((y, v, w) => {
            Promise.all(f.current[v].splice(0).map(([S, c]) => c))
                .then(() => {
                    var S;
                    (S = u.current.shift()) == null || S();
                })
                .then(() => w(v));
        });
    return p.useMemo(
        () => ({
            children: r,
            register: a,
            unregister: i,
            onStart: h,
            onStop: m,
            wait: s,
            chains: f,
        }),
        [a, i, r, h, m, f, s]
    );
}
function L1() {}
let T1 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Dd(e) {
    var t;
    let n = {};
    for (let r of T1) n[r] = (t = e[r]) != null ? t : L1;
    return n;
}
function O1(e) {
    let t = p.useRef(Dd(e));
    return (
        p.useEffect(() => {
            t.current = Dd(e);
        }, [e]),
        t
    );
}
let j1 = "div",
    Dh = nl.RenderStrategy;
function I1(e, t) {
    let {
            beforeEnter: n,
            afterEnter: r,
            beforeLeave: l,
            afterLeave: o,
            enter: i,
            enterFrom: a,
            enterTo: u,
            entered: s,
            leave: f,
            leaveFrom: h,
            leaveTo: m,
            ...y
        } = e,
        v = p.useRef(null),
        w = cn(v, t),
        S = y.unmount ? qt.Unmount : qt.Hidden,
        { show: c, appear: d, initial: g } = M1(),
        [x, P] = p.useState(c ? "visible" : "hidden"),
        R = _1(),
        { register: M, unregister: T } = R,
        O = p.useRef(null);
    p.useEffect(() => M(v), [M, v]),
        p.useEffect(() => {
            if (S === qt.Hidden && v.current) {
                if (c && x !== "visible") {
                    P("visible");
                    return;
                }
                return Qe(x, { hidden: () => T(v), visible: () => M(v) });
            }
        }, [x, v, M, T, c, S]);
    let j = sr({
            enter: Jn(i),
            enterFrom: Jn(a),
            enterTo: Jn(u),
            entered: Jn(s),
            leave: Jn(f),
            leaveFrom: Jn(h),
            leaveTo: Jn(m),
        }),
        Z = O1({
            beforeEnter: n,
            afterEnter: r,
            beforeLeave: l,
            afterLeave: o,
        }),
        q = Ds();
    p.useEffect(() => {
        if (q && x === "visible" && v.current === null)
            throw new Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
            );
    }, [v, x, q]);
    let ae = g && !d,
        ie = (() =>
            !q || ae || O.current === c ? "idle" : c ? "enter" : "leave")(),
        Y = E1(0),
        ue = ye((U) =>
            Qe(U, {
                enter: () => {
                    Y.addFlag(Be.Opening), Z.current.beforeEnter();
                },
                leave: () => {
                    Y.addFlag(Be.Closing), Z.current.beforeLeave();
                },
                idle: () => {},
            })
        ),
        ee = ye((U) =>
            Qe(U, {
                enter: () => {
                    Y.removeFlag(Be.Opening), Z.current.afterEnter();
                },
                leave: () => {
                    Y.removeFlag(Be.Closing), Z.current.afterLeave();
                },
                idle: () => {},
            })
        ),
        L = Ih(() => {
            P("hidden"), T(v);
        }, R);
    R1({
        container: v,
        classes: j,
        direction: ie,
        onStart: sr((U) => {
            L.onStart(v, U, ue);
        }),
        onStop: sr((U) => {
            L.onStop(v, U, ee), U === "leave" && !Ki(L) && (P("hidden"), T(v));
        }),
    }),
        p.useEffect(() => {
            ae && (S === qt.Hidden ? (O.current = null) : (O.current = c));
        }, [c, ae, x]);
    let F = y,
        B = { ref: w };
    return (
        d &&
            c &&
            (F = {
                ...F,
                className: Du(
                    y.className,
                    ...j.current.enter,
                    ...j.current.enterFrom
                ),
            }),
        le.createElement(
            Wi.Provider,
            { value: L },
            le.createElement(
                As,
                {
                    value:
                        Qe(x, { visible: Be.Open, hidden: Be.Closed }) |
                        Y.flags,
                },
                dn({
                    ourProps: B,
                    theirProps: F,
                    defaultTag: j1,
                    features: Dh,
                    visible: x === "visible",
                    name: "Transition.Child",
                })
            )
        )
    );
}
function D1(e, t) {
    let { show: n, appear: r = !1, unmount: l, ...o } = e,
        i = p.useRef(null),
        a = cn(i, t);
    Ds();
    let u = Hi();
    if (
        (n === void 0 && u !== null && (n = (u & Be.Open) === Be.Open),
        ![!0, !1].includes(n))
    )
        throw new Error(
            "A <Transition /> is used but it is missing a `show={true | false}` prop."
        );
    let [s, f] = p.useState(n ? "visible" : "hidden"),
        h = Ih(() => {
            f("hidden");
        }),
        [m, y] = p.useState(!0),
        v = p.useRef([n]);
    wt(() => {
        m !== !1 &&
            v.current[v.current.length - 1] !== n &&
            (v.current.push(n), y(!1));
    }, [v, n]);
    let w = p.useMemo(() => ({ show: n, appear: r, initial: m }), [n, r, m]);
    p.useEffect(() => {
        if (n) f("visible");
        else if (!Ki(h)) f("hidden");
        else {
            let c = i.current;
            if (!c) return;
            let d = c.getBoundingClientRect();
            d.x === 0 &&
                d.y === 0 &&
                d.width === 0 &&
                d.height === 0 &&
                f("hidden");
        }
    }, [n, h]);
    let S = { unmount: l };
    return le.createElement(
        Wi.Provider,
        { value: h },
        le.createElement(
            Vi.Provider,
            { value: w },
            dn({
                ourProps: {
                    ...S,
                    as: p.Fragment,
                    children: le.createElement(Fh, { ref: a, ...S, ...o }),
                },
                theirProps: {},
                defaultTag: p.Fragment,
                features: Dh,
                visible: s === "visible",
                name: "Transition",
            })
        )
    );
}
function F1(e, t) {
    let n = p.useContext(Vi) !== null,
        r = Hi() !== null;
    return le.createElement(
        le.Fragment,
        null,
        !n && r
            ? le.createElement(Fu, { ref: t, ...e })
            : le.createElement(Fh, { ref: t, ...e })
    );
}
let Fu = Vt(D1),
    Fh = Vt(I1),
    $1 = Vt(F1),
    z1 = Object.assign(Fu, { Child: $1, Root: Fu });
function A1({ title: e, titleId: t, ...n }, r) {
    return p.createElement(
        "svg",
        Object.assign(
            {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: r,
                "aria-labelledby": t,
            },
            n
        ),
        e ? p.createElement("title", { id: t }, e) : null,
        p.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
        })
    );
}
const U1 = p.forwardRef(A1),
    B1 = U1;
function H1({ title: e, titleId: t, ...n }, r) {
    return p.createElement(
        "svg",
        Object.assign(
            {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: r,
                "aria-labelledby": t,
            },
            n
        ),
        e ? p.createElement("title", { id: t }, e) : null,
        p.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
        })
    );
}
const b1 = p.forwardRef(H1),
    Fd = b1;
function V1({ title: e, titleId: t, ...n }, r) {
    return p.createElement(
        "svg",
        Object.assign(
            {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: r,
                "aria-labelledby": t,
            },
            n
        ),
        e ? p.createElement("title", { id: t }, e) : null,
        p.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12",
        })
    );
}
const W1 = p.forwardRef(V1),
    K1 = W1,
    La = [
        { name: "Accueil", to: "/user", current: !1 },
        { name: "Mes playlists", to: "/user/playlists", current: !1 },
    ],
    Ta = [
        { name: "Mon profil", to: "/user/profil", current: !1 },
        { name: "Me déconnecter", to: "/user/logout", current: !1 },
    ];
function Pr(...e) {
    return e.filter(Boolean).join(" ");
}
function Q1({ children: e }) {
    const { user: t } = p.useContext(vh),
        { fetchAllAlbums: n, fetchAllTracks: r } = p.useContext(js),
        { currentMusic: l } = Ph(),
        o = sl().pathname;
    return (
        La.map((i) => {
            i.current = o === i.to;
        }),
        Ta.map((i) => {
            i.current = o === i.to;
        }),
        p.useEffect(() => {
            n(), r();
        }, []),
        E.jsx(E.Fragment, {
            children: E.jsxs("div", {
                className: "min-h-full",
                children: [
                    E.jsx(Cl, {
                        as: "nav",
                        className: "bg-light z-50 fixed top-0 w-full inset-x-0",
                        children: ({ open: i }) =>
                            E.jsxs(E.Fragment, {
                                children: [
                                    E.jsx("div", {
                                        className: "px-4 sm:px-6 lg:px-8",
                                        children: E.jsxs("div", {
                                            className:
                                                "flex h-16 items-center justify-between",
                                            children: [
                                                E.jsxs("div", {
                                                    className:
                                                        "flex items-center",
                                                    children: [
                                                        E.jsx("div", {
                                                            className:
                                                                "flex-shrink-0",
                                                            children: E.jsx(
                                                                "img",
                                                                {
                                                                    className:
                                                                        "h-8 w-auto lg:block",
                                                                    src: mh,
                                                                    alt: "Jambon Beurre Logo",
                                                                }
                                                            ),
                                                        }),
                                                        E.jsx("div", {
                                                            className:
                                                                "hidden md:block",
                                                            children: E.jsx(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "ml-10 flex items-baseline space-x-4",
                                                                    children:
                                                                        La.map(
                                                                            (
                                                                                a
                                                                            ) =>
                                                                                E.jsx(
                                                                                    _l,
                                                                                    {
                                                                                        to: a.to,
                                                                                        className:
                                                                                            Pr(
                                                                                                a.current
                                                                                                    ? "bg-dark text-gray-100"
                                                                                                    : "text-gray-300 hover:bg-gray-700 hover:text-gray-100",
                                                                                                "rounded-md px-3 py-2 text-sm font-medium"
                                                                                            ),
                                                                                        "aria-current":
                                                                                            a.current
                                                                                                ? "page"
                                                                                                : void 0,
                                                                                        children:
                                                                                            a.name,
                                                                                    },
                                                                                    a.name
                                                                                )
                                                                        ),
                                                                }
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                                E.jsx("div", {
                                                    className:
                                                        "hidden md:block",
                                                    children: E.jsx("div", {
                                                        className:
                                                            "ml-4 flex items-center md:ml-6",
                                                        children: E.jsxs(Fo, {
                                                            as: "div",
                                                            className:
                                                                "relative ml-3",
                                                            children: [
                                                                E.jsx("div", {
                                                                    children:
                                                                        E.jsxs(
                                                                            Fo.Button,
                                                                            {
                                                                                className:
                                                                                    "flex max-w-xs items-center rounded-full text-sm focus:outline-none",
                                                                                children:
                                                                                    [
                                                                                        E.jsx(
                                                                                            "span",
                                                                                            {
                                                                                                className:
                                                                                                    "sr-only",
                                                                                                children:
                                                                                                    "Open user menu",
                                                                                            }
                                                                                        ),
                                                                                        E.jsx(
                                                                                            Fd,
                                                                                            {
                                                                                                className:
                                                                                                    "h-10 w-10 rounded-full text-gray-100",
                                                                                                "aria-hidden":
                                                                                                    "true",
                                                                                            }
                                                                                        ),
                                                                                    ],
                                                                            }
                                                                        ),
                                                                }),
                                                                E.jsx(z1, {
                                                                    as: p.Fragment,
                                                                    enter: "transition ease-out duration-100",
                                                                    enterFrom:
                                                                        "transform opacity-0 scale-95",
                                                                    enterTo:
                                                                        "transform opacity-100 scale-100",
                                                                    leave: "transition ease-in duration-75",
                                                                    leaveFrom:
                                                                        "transform opacity-100 scale-100",
                                                                    leaveTo:
                                                                        "transform opacity-0 scale-95",
                                                                    children:
                                                                        E.jsx(
                                                                            Fo.Items,
                                                                            {
                                                                                className:
                                                                                    "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-100 py-1 shadow-lg focus:outline-none",
                                                                                children:
                                                                                    Ta.map(
                                                                                        (
                                                                                            a
                                                                                        ) =>
                                                                                            E.jsx(
                                                                                                Fo.Item,
                                                                                                {
                                                                                                    children:
                                                                                                        ({
                                                                                                            active: u,
                                                                                                        }) =>
                                                                                                            E.jsx(
                                                                                                                _l,
                                                                                                                {
                                                                                                                    to: a.to,
                                                                                                                    className:
                                                                                                                        Pr(
                                                                                                                            u
                                                                                                                                ? "bg-gray-100"
                                                                                                                                : "",
                                                                                                                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                                                                                        ),
                                                                                                                    children:
                                                                                                                        a.name,
                                                                                                                }
                                                                                                            ),
                                                                                                },
                                                                                                a.name
                                                                                            )
                                                                                    ),
                                                                            }
                                                                        ),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                E.jsx("div", {
                                                    className:
                                                        "-mr-2 flex md:hidden",
                                                    children: E.jsxs(
                                                        Cl.Button,
                                                        {
                                                            className:
                                                                "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-gray-100 focus:outline-none",
                                                            children: [
                                                                E.jsx("span", {
                                                                    className:
                                                                        "sr-only",
                                                                    children:
                                                                        "Open main menu",
                                                                }),
                                                                i
                                                                    ? E.jsx(
                                                                          K1,
                                                                          {
                                                                              className:
                                                                                  "block h-6 w-6",
                                                                              "aria-hidden":
                                                                                  "true",
                                                                          }
                                                                      )
                                                                    : E.jsx(
                                                                          B1,
                                                                          {
                                                                              className:
                                                                                  "block h-6 w-6",
                                                                              "aria-hidden":
                                                                                  "true",
                                                                          }
                                                                      ),
                                                            ],
                                                        }
                                                    ),
                                                }),
                                            ],
                                        }),
                                    }),
                                    E.jsxs(Cl.Panel, {
                                        className: "md:hidden",
                                        children: [
                                            E.jsx("div", {
                                                className:
                                                    "space-y-1 px-2 pb-3 pt-2 sm:px-3",
                                                children: La.map((a) =>
                                                    E.jsx(
                                                        _l,
                                                        {
                                                            to: a.to,
                                                            className: Pr(
                                                                a.current
                                                                    ? "bg-dark text-gray-100"
                                                                    : "text-gray-300 hover:bg-gray-700 hover:text-gray-100",
                                                                "block rounded-md text-base font-medium"
                                                            ),
                                                            children: E.jsx(
                                                                Cl.Button,
                                                                {
                                                                    className:
                                                                        Pr(
                                                                            a.current
                                                                                ? "bg-dark text-gray-100"
                                                                                : "text-gray-300 hover:bg-gray-700 hover:text-gray-100",
                                                                            "block rounded-md px-3 py-2 text-base font-medium"
                                                                        ),
                                                                    children:
                                                                        a.name,
                                                                }
                                                            ),
                                                        },
                                                        a.to
                                                    )
                                                ),
                                            }),
                                            E.jsxs("div", {
                                                className:
                                                    "border-t border-gray-700 pb-3 pt-4",
                                                children: [
                                                    E.jsxs("div", {
                                                        className:
                                                            "flex items-center px-5",
                                                        children: [
                                                            E.jsx("div", {
                                                                className:
                                                                    "flex-shrink-0",
                                                                children: E.jsx(
                                                                    Fd,
                                                                    {
                                                                        className:
                                                                            "h-10 w-10 rounded-full text-gray-100",
                                                                        "aria-hidden":
                                                                            "true",
                                                                    }
                                                                ),
                                                            }),
                                                            E.jsxs("div", {
                                                                className:
                                                                    "ml-3",
                                                                children: [
                                                                    E.jsx(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "text-base font-medium leading-none text-gray-100",
                                                                            children:
                                                                                t ==
                                                                                null
                                                                                    ? void 0
                                                                                    : t.pseudo,
                                                                        }
                                                                    ),
                                                                    E.jsx(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "text-sm font-medium leading-none text-gray-400",
                                                                            children:
                                                                                t ==
                                                                                null
                                                                                    ? void 0
                                                                                    : t.email,
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                    E.jsx("div", {
                                                        className:
                                                            "mt-3 space-y-1 px-2",
                                                        children: Ta.map((a) =>
                                                            E.jsx(
                                                                _l,
                                                                {
                                                                    to: a.to,
                                                                    className:
                                                                        Pr(
                                                                            a.current
                                                                                ? "bg-dark text-gray-100"
                                                                                : "text-gray-300 hover:bg-gray-700 hover:text-gray-100",
                                                                            "block rounded-md text-base font-medium"
                                                                        ),
                                                                    children:
                                                                        E.jsx(
                                                                            Cl.Button,
                                                                            {
                                                                                className:
                                                                                    Pr(
                                                                                        a.current
                                                                                            ? "bg-dark text-gray-100"
                                                                                            : "text-gray-300 hover:bg-gray-700 hover:text-gray-100",
                                                                                        "block rounded-md px-3 py-2 text-base font-medium"
                                                                                    ),
                                                                                children:
                                                                                    a.name,
                                                                            }
                                                                        ),
                                                                },
                                                                a.to
                                                            )
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    }),
                    E.jsx("main", {
                        children: E.jsx("div", {
                            className: "pb-12 pt-16",
                            children: e,
                        }),
                    }),
                    l.url && E.jsx("div", { className: "h-24" }),
                ],
            }),
        })
    );
}
function Y1() {
    return E.jsx("div", {
        className: "h-[100vh] max-w-[100vw]",
        children: E.jsx(Q1, { children: E.jsx(gg, {}) }),
    });
}
function $d({ to: e }) {
    return E.jsx(E.Fragment, {
        children: E.jsxs("div", {
            className:
                "flex flex-col gap-6 items-center justify-center h-[75vh]",
            children: [
                E.jsx("h1", {
                    className:
                        "text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",
                    children: "Erreur 404",
                }),
                E.jsx("h2", {
                    className: "text-2xl font-bold text-center text-gray-100",
                    children: "La page que vous recherchez n'existe pas",
                }),
                E.jsx(_l, {
                    to: e,
                    className:
                        "px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",
                    children: "Retourner à l'accueil",
                }),
            ],
        }),
    });
}
const G1 = p.lazy(() => yr(() => import("./Home-9acf303d.js"), [])),
    X1 = p.lazy(() =>
        yr(
            () => import("./AlbumList-babe5948.js"),
            ["assets/AlbumList-babe5948.js", "assets/Card-d8e2b740.js"]
        )
    ),
    Z1 = p.lazy(() =>
        yr(
            () => import("./PlaylistsList-ab503c71.js"),
            ["assets/PlaylistsList-ab503c71.js", "assets/Card-d8e2b740.js"]
        )
    ),
    J1 = p.lazy(() => yr(() => import("./TracksListAlbum-81ec9c3b.js"), [])),
    q1 = p.lazy(() => yr(() => import("./TracksListPlaylist-1d0e8f86.js"), [])),
    ew = p.lazy(() => yr(() => import("./Profil-52ec21ec.js"), [])),
    tw = p.lazy(() => yr(() => import("./Logout-a4dc3dc0.js"), []));
function nw() {
    const [e, t] = p.useState(!!localStorage.getItem("token"));
    p.useEffect(() => {
        function r() {
            t(!!localStorage.getItem("token"));
        }
        return (
            window.addEventListener("storage", r),
            () => {
                window.removeEventListener("storage", r);
            }
        );
    }, []);
    const n = Cg(
        _u(
            E.jsxs(mt, {
                path: "/",
                children: [
                    E.jsx(mt, {
                        index: !0,
                        element: E.jsx(p.Suspense, {
                            fallback: E.jsx(Zn, {}),
                            children: E.jsx(G1, {}),
                        }),
                    }),
                    E.jsxs(mt, {
                        path: "/user",
                        element: e ? E.jsx(Y1, {}) : E.jsx(vg, { to: "/" }),
                        children: [
                            E.jsx(mt, {
                                index: !0,
                                element: E.jsx(p.Suspense, {
                                    fallback: E.jsx(Zn, {}),
                                    children: E.jsx(X1, {}),
                                }),
                            }),
                            E.jsx(mt, {
                                path: "album/:id",
                                element: E.jsx(p.Suspense, {
                                    fallback: E.jsx(Zn, {}),
                                    children: E.jsx(J1, {}),
                                }),
                            }),
                            E.jsx(mt, {
                                path: "playlists",
                                element: E.jsx(p.Suspense, {
                                    fallback: E.jsx(Zn, {}),
                                    children: E.jsx(Z1, {}),
                                }),
                            }),
                            E.jsx(mt, {
                                path: "playlists/:id",
                                element: E.jsx(p.Suspense, {
                                    fallback: E.jsx(Zn, {}),
                                    children: E.jsx(q1, {}),
                                }),
                            }),
                            E.jsx(mt, {
                                path: "profil",
                                element: E.jsx(p.Suspense, {
                                    fallback: E.jsx(Zn, {}),
                                    children: E.jsx(ew, {}),
                                }),
                            }),
                            E.jsx(mt, {
                                path: "logout",
                                element: E.jsx(p.Suspense, {
                                    fallback: E.jsx(Zn, {}),
                                    children: E.jsx(tw, {}),
                                }),
                            }),
                            E.jsx(mt, {
                                path: "*",
                                element: E.jsx($d, { to: "/user" }),
                            }),
                        ],
                    }),
                    E.jsx(mt, { path: "*", element: E.jsx($d, { to: "/" }) }),
                ],
            })
        )
    );
    return E.jsx(Lg, {
        children: E.jsx(Tg, {
            children: E.jsx(xy, { children: E.jsx(hg, { router: n }) }),
        }),
    });
}
Oa.createRoot(document.getElementById("root")).render(
    E.jsx(le.StrictMode, { children: E.jsx(nw, {}) })
);
export {
    vh as A,
    js as B,
    Hi as C,
    Vt as D,
    _l as E,
    lw as F,
    Ph as G,
    yy as H,
    ho as I,
    fy as J,
    py as K,
    mh as L,
    Iu as M,
    Py as N,
    Oy as O,
    kh as P,
    le as R,
    nl as S,
    Iy as T,
    Fd as U,
    K1 as X,
    dn as a,
    Qe as b,
    Us as c,
    My as d,
    ur as e,
    tr as f,
    wt as g,
    s0 as h,
    rw as i,
    E as j,
    an as k,
    Ds as l,
    Be as m,
    By as n,
    ye as o,
    Bi as p,
    jy as q,
    p as r,
    sr as s,
    Cy as t,
    fh as u,
    Se as v,
    Oh as w,
    z1 as x,
    cn as y,
    Cl as z,
};
