function jfload(u, c) {
    "use strict";
    var fgroupDeclared = !0;
    try {
        fgroup;
        var h = document.getElementsByTagName("head")[0],
            s = document.createElement("script");
        s.async = !0;
        s.src = u;
        s.onload = s.onreadystatechange = function () {
            if (!s.readyState || /loaded|complete/.test(s.readyState)) {
                s.onload = s.onreadystatechange = null;
                if (h && s.parentNode) {
                    h.removeChild(s);
                }
                s = undefined;
                if (c) {
                    c();
                }
            }
        };
        h.insertBefore(s, h.firstChild);
    } catch (e) {
        if (e.name == "ReferenceError") {
            fgroupDeclared = !1;
        }
    }
}
function gfont() {
    "use strict";
    var fgroupDeclared = !0,
        flist = "";
    try {
        fgroup;
        flist = fgroup;
    } catch (e) {
        if (e.name == "ReferenceError") {
            fgroupDeclared = !1;
        }
    }
    if (fgroupDeclared) {
        WebFont.load({
            google: { families: flist },
            timeout: 2000,
            loading: function () {
                var css = "";
                for (var i = 0; i < this.google.families.length; i++) {
                    var f = this.google.families[i].split(":");
                    css += ".f-" + (i + 1) + ' { font-family: "' + f[0] + '"; }';
                }
                var head = document.head || document.getElementsByTagName("head")[0],
                    style = document.createElement("style");
                style.type = "text/css";
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }
                head.appendChild(style);
            },
            active: function () {},
            inactive: function () {},
            fontloading: function (familyName, fvd) {},
            fontactive: function (familyName, fvd) {},
            fontinactive: function (familyName, fvd) {},
        });
    }
}
jfload("//ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js", gfont);
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function e(t) {
            return null != t && t === t.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
    function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");
        if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t);
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                w.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || g(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (n = a[t]),
                            a !== (r = e[t]) &&
                                (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && w.isPlainObject(n) ? n : {}), (a[t] = w.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        w.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e) {
                m(e);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (C(e)) {
                    for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(T, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    s = [];
                if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return a.apply([], s);
            },
            guid: 1,
            support: h,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    var E = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            re = function () {
                p();
            },
            ie = me(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((A = H.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: A.length
                    ? function (e, t) {
                          q.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)) {
                if (11 !== T && (f = J.exec(e)))
                    if ((o = f[1])) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) (m = t), (v = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? (c = c.replace(te, ne)) : t.setAttribute("id", (c = b)), (s = (h = a(e)).length);
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)), r;
                        } catch (e) {
                        } finally {
                            c === b && t.removeAttribute("id");
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i);
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            }
            return t;
        }
        function se(e) {
            return (e[b] = !0), e;
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function de(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function he(e) {
            return se(function (t) {
                return (
                    (t = +t),
                    se(function (n, r) {
                        var i,
                            o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        (n = oe.support = {}),
            (o = oe.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (p = oe.setDocument = function (e) {
                var t,
                    i,
                    a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement
                    ? ((d = a),
                      (h = d.documentElement),
                      (g = !o(d)),
                      w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                      (n.attributes = ue(function (e) {
                          return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (n.getElementsByTagName = ue(function (e) {
                          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
                      (n.getById = ue(function (e) {
                          return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                      })),
                      n.getById
                          ? ((r.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }),
                            (r.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && g) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : [];
                                }
                            }))
                          : ((r.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            }),
                            (r.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && g) {
                                    var n,
                                        r,
                                        i,
                                        o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        (i = t.getElementsByName(e)), (r = 0);
                                        while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    }
                                    return [];
                                }
                            })),
                      (r.find.TAG = n.getElementsByTagName
                          ? function (e, t) {
                                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                            }
                          : function (e, t) {
                                var n,
                                    r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                    return r;
                                }
                                return o;
                            }),
                      (r.find.CLASS =
                          n.getElementsByClassName &&
                          function (e, t) {
                              if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
                          }),
                      (v = []),
                      (y = []),
                      (n.qsa = Q.test(d.querySelectorAll)) &&
                          (ue(function (e) {
                              (h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                                  e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                                  e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                                  e.querySelectorAll(":checked").length || y.push(":checked"),
                                  e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
                          }),
                          ue(function (e) {
                              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var t = d.createElement("input");
                              t.setAttribute("type", "hidden"),
                                  e.appendChild(t).setAttribute("name", "D"),
                                  e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                                  2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                  (h.appendChild(e).disabled = !0),
                                  2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                  e.querySelectorAll("*,:x"),
                                  y.push(",.*:");
                          })),
                      (n.matchesSelector = Q.test((m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                          ue(function (e) {
                              (n.disconnectedMatch = m.call(e, "*")), m.call(e, "[s!='']:x"), v.push("!=", W);
                          }),
                      (y = y.length && new RegExp(y.join("|"))),
                      (v = v.length && new RegExp(v.join("|"))),
                      (t = Q.test(h.compareDocumentPosition)),
                      (x =
                          t || Q.test(h.contains)
                              ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                }
                              : function (e, t) {
                                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                    return !1;
                                }),
                      (D = t
                          ? function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    r ||
                                    (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                        ? e === d || (e.ownerDocument === w && x(w, e))
                                            ? -1
                                            : t === d || (t.ownerDocument === w && x(w, t))
                                            ? 1
                                            : c
                                            ? O(c, e) - O(c, t)
                                            : 0
                                        : 4 & r
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var n,
                                    r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                                if (i === o) return ce(e, t);
                                n = e;
                                while ((n = n.parentNode)) a.unshift(n);
                                n = t;
                                while ((n = n.parentNode)) s.unshift(n);
                                while (a[r] === s[r]) r++;
                                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                            }),
                      d)
                    : d;
            }),
            (oe.matches = function (e, t) {
                return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function (e, t) {
                if (((e.ownerDocument || e) !== d && p(e), (t = t.replace(z, "='$1']")), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))))
                    try {
                        var r = m.call(e, t);
                        if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                    } catch (e) {}
                return oe(t, d, null, [e]).length > 0;
            }),
            (oe.contains = function (e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t);
            }),
            (oe.attr = function (e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }),
            (oe.escape = function (e) {
                return (e + "").replace(te, ne);
            }),
            (oe.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (oe.uniqueSort = function (e) {
                var t,
                    r = [],
                    i = 0,
                    o = 0;
                if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(D), f)) {
                    while ((t = e[o++])) t === e[o] && (i = r.push(o));
                    while (i--) e.splice(r[i], 1);
                }
                return (c = null), e;
            }),
            (i = oe.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                } else while ((t = e[r++])) n += i(t);
                return n;
            }),
            ((r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(Z, ee)), (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return V.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return e.nodeName && e.nodeName.toLowerCase() === t;
                              };
                    },
                    CLASS: function (e) {
                        var t = E[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                E(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var i = oe.attr(r, e);
                            return null == i
                                ? "!=" === t
                                : !t ||
                                      ((i += ""),
                                      "=" === t
                                          ? i === n
                                          : "!=" === t
                                          ? i !== n
                                          : "^=" === t
                                          ? n && 0 === i.indexOf(n)
                                          : "*=" === t
                                          ? n && i.indexOf(n) > -1
                                          : "$=" === t
                                          ? n && i.slice(-n.length) === n
                                          : "~=" === t
                                          ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                                          : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (t, n, u) {
                                  var l,
                                      c,
                                      f,
                                      p,
                                      d,
                                      h,
                                      g = o !== a ? "nextSibling" : "previousSibling",
                                      y = t.parentNode,
                                      v = s && t.nodeName.toLowerCase(),
                                      m = !u && !s,
                                      x = !1;
                                  if (y) {
                                      if (o) {
                                          while (g) {
                                              p = t;
                                              while ((p = p[g])) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                              h = g = "only" === e && !h && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                                          (x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2]), (p = d && y.childNodes[d]);
                                          while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                              if (1 === p.nodeType && ++x && p === t) {
                                                  c[e] = [T, d, x];
                                                  break;
                                              }
                                      } else if ((m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x))
                                          while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                              if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (e, t) {
                        var n,
                            i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[b]
                            ? i(t)
                            : i.length > 1
                            ? ((n = [e, e, "", t]),
                              r.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? se(function (e, n) {
                                        var r,
                                            o = i(e, t),
                                            a = o.length;
                                        while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                                    })
                                  : function (e) {
                                        return i(e, 0, n);
                                    })
                            : i;
                    },
                },
                pseudos: {
                    not: se(function (e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[b]
                            ? se(function (e, t, n, i) {
                                  var o,
                                      a = r(e, null, i, []),
                                      s = e.length;
                                  while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                              })
                            : function (e, i, o) {
                                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                              };
                    }),
                    has: se(function (e) {
                        return function (t) {
                            return oe(e, t).length > 0;
                        };
                    }),
                    contains: se(function (e) {
                        return (
                            (e = e.replace(Z, ee)),
                            function (t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: se(function (e) {
                        return (
                            U.test(e || "") || oe.error("unsupported lang: " + e),
                            (e = e.replace(Z, ee).toLowerCase()),
                            function (t) {
                                var n;
                                do {
                                    if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === h;
                    },
                    focus: function (e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                        return Y.test(e.nodeName);
                    },
                    input: function (e) {
                        return G.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: he(function () {
                        return [0];
                    }),
                    last: he(function (e, t) {
                        return [t - 1];
                    }),
                    eq: he(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: he(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: he(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                        return e;
                    }),
                    gt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = r.pseudos.eq);
        for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
        function ye() {}
        (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = oe.tokenize = function (e, t) {
                var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                (s = e), (u = []), (l = r.preFilter);
                while (s) {
                    (n && !(i = F.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))), (n = !1), (i = _.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(B, " ") }), (s = s.slice(n.length)));
                    for (a in r.filter) !(i = V[a].exec(s)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
            });
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first
                ? function (t, n, i) {
                      while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
                      return !1;
                  }
                : function (t, n, u) {
                      var l,
                          c,
                          f,
                          p = [T, s];
                      if (u) {
                          while ((t = t[r])) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                      } else
                          while ((t = t[r]))
                              if (1 === t.nodeType || a)
                                  if (((f = t[b] || (t[b] = {})), (c = f[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                  else {
                                      if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                                      if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                                  }
                      return !1;
                  };
        }
        function xe(e) {
            return e.length > 1
                ? function (t, n, r) {
                      var i = e.length;
                      while (i--) if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Te(e, t, n, r, i, o) {
            return (
                r && !r[b] && (r = Te(r)),
                i && !i[b] && (i = Te(i, o)),
                se(function (o, a, s, u) {
                    var l,
                        c,
                        f,
                        p = [],
                        d = [],
                        h = a.length,
                        g = o || be(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!o && t) ? g : we(g, p, e, s, u),
                        v = n ? (i || (o ? e : h || r) ? [] : a) : y;
                    if ((n && n(y, v, s, u), r)) {
                        (l = we(v, d)), r(l, [], s, u), (c = l.length);
                        while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                (l = []), (c = v.length);
                                while (c--) (f = v[c]) && l.push((y[c] = f));
                                i(null, (v = []), l, u);
                            }
                            c = v.length;
                            while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
                })
            );
        }
        function Ce(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    a = r.relative[e[0].type],
                    s = a || r.relative[" "],
                    u = a ? 1 : 0,
                    c = me(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    f = me(
                        function (e) {
                            return O(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    p = [
                        function (e, n, r) {
                            var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return (t = null), i;
                        },
                    ];
                u < o;
                u++
            )
                if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce((e = e.slice(i))), i < o && ve(e));
                    }
                    p.push(n);
                }
            return xe(p);
        }
        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f,
                        h,
                        y,
                        v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || (i && r.find.TAG("*", c)),
                        E = (T += null == w ? 1 : Math.random() || 0.1),
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
                            while ((y = e[h++]))
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                }
                            c && (T = E);
                        }
                        n && ((f = !y && f) && v--, o && x.push(f));
                    }
                    if (((v += m), n && m !== v)) {
                        h = 0;
                        while ((y = t[h++])) y(x, b, a, s);
                        if (o) {
                            if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b);
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                    }
                    return c && ((T = E), (l = w)), x;
                };
            return n ? se(o) : o;
        }
        return (
            (s = oe.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    t || (t = a(e)), (n = t.length);
                    while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                    (o = S(e, Ee(i, r))).selector = e;
                }
                return o;
            }),
            (u = oe.select = function (e, t, n, i) {
                var o,
                    u,
                    l,
                    c,
                    f,
                    p = "function" == typeof e && e,
                    d = !i && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                    if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                    }
                    o = V.needsContext.test(e) ? 0 : u.length;
                    while (o--) {
                        if (((l = u[o]), r.relative[(c = l.type)])) break;
                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), (K.test(u[0].type) && ge(t.parentNode)) || t))) {
                            if ((u.splice(o, 1), !(e = i.length && ve(u)))) return L.apply(n, i), n;
                            break;
                        }
                    }
                }
                return (p || s(e, d))(i, t, !g, n, !t || (K.test(e) && ge(t.parentNode)) || t), n;
            }),
            (n.sortStable = b.split("").sort(D).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ue(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                le("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                ue(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                le("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                le(P, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            oe
        );
    })(e);
    (w.find = E), (w.expr = E.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = E.uniqueSort), (w.text = E.getText), (w.isXMLDoc = E.isXML), (w.contains = E.contains), (w.escapeSelector = E.escape);
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t)
            ? w.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? w.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? w.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
              })
            : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? w.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function (e) {
                return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
            },
        });
    var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
    }).prototype = w.fn),
        (q = w(r));
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    w.each(
        {
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
                return k(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
                return k(e, "parentNode", n);
            },
            next: function (e) {
                return P(e, "nextSibling");
            },
            prev: function (e) {
                return P(e, "previousSibling");
            },
            nextAll: function (e) {
                return k(e, "nextSibling");
            },
            prevAll: function (e) {
                return k(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
                return k(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
                return k(e, "previousSibling", n);
            },
            siblings: function (e) {
                return S((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
                return S(e.firstChild);
            },
            contents: function (e) {
                return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
            },
        },
        function (e, t) {
            w.fn[e] = function (n, r) {
                var i = w.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
            };
        }
    );
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return (
            w.each(e.match(M) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
                }
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
                add: function () {
                    return (
                        o &&
                            (n && !t && ((s = o.length - 1), a.push(n)),
                            (function t(n) {
                                w.each(n, function (n, r) {
                                    g(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                                });
                            })(arguments),
                            n && !t && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            var n;
                            while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || u()), this;
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return l;
    };
    function I(e) {
        return e;
    }
    function W(e) {
        throw e;
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g((i = e.promise)) ? i.call(e).done(t).fail(n) : e && g((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r;
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                        return i.then(null, e);
                    },
                    pipe: function () {
                        var e = arguments;
                        return w
                            .Deferred(function (t) {
                                w.each(n, function (n, r) {
                                    var i = g(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                    });
                                }),
                                    (e = null);
                            })
                            .promise();
                    },
                    then: function (t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            (l = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                g(l)
                                                    ? i
                                                        ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                                                        : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith)))
                                                    : (r !== I && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                                        }
                                    },
                                    c = i
                                        ? l
                                        : function () {
                                              try {
                                                  l();
                                              } catch (e) {
                                                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                                              }
                                          };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                            };
                        }
                        return w
                            .Deferred(function (e) {
                                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                            })
                            .promise();
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i;
                    },
                },
                o = {};
            return (
                w.each(n, function (e, t) {
                    var a = t[2],
                        s = t[5];
                    (i[t[1]] = a.add),
                        s &&
                            a.add(
                                function () {
                                    r = s;
                                },
                                n[3 - e][2].disable,
                                n[3 - e][3].disable,
                                n[0][2].lock,
                                n[0][3].lock
                            ),
                        a.add(t[3].fire),
                        (o[t[0]] = function () {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                        }),
                        (o[t[0] + "With"] = a.fireWith);
                }),
                i.promise(o),
                t && t.call(o, o),
                o
            );
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        (r[e] = this), (i[e] = arguments.length > 1 ? o.call(arguments) : n), --t || a.resolveWith(r, i);
                    };
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise();
        },
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var F = w.Deferred();
    (w.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0), (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
            },
        }),
        (w.ready.then = F.then);
    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
    }
    "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll) ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a);
            } else if (
                void 0 !== r &&
                ((i = !0),
                g(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(w(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        X = /^-ms-/,
        U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase();
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
        this.expando = w.expando + Q.uid++;
    }
    (Q.uid = 1),
        (Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Y(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[G(t)] = n;
                else for (r in t) i[G(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e));
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = te(n);
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return J.access(e, t, n);
        },
        _removeData: function (e, t) {
            J.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        n = a.length;
                        while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = G(r.slice(5))), ne(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          K.set(this, e);
                      })
                    : z(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t) {
                                  if (void 0 !== (n = K.get(o, e))) return n;
                                  if (void 0 !== (n = ne(o, e))) return n;
                              } else
                                  this.each(function () {
                                      K.set(this, e, t);
                                  });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = J.get(e, t)), n && (!r || Array.isArray(n) ? (r = J.access(e, t, w.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = w._queueHooks(e, t),
                    a = function () {
                        w.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    J.get(e, n) ||
                    J.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            J.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = w.queue(this, e, t);
                              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = w.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display"));
        },
        se = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        };
    function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return w.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), w.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var le = {};
    function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || ((t = n.body.appendChild(n.createElement(r))), (i = w.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (le[r] = i), i);
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
                ((n = r.style.display),
                t ? ("none" === n && ((i[o] = J.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0);
        },
        hide: function () {
            return fe(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
    function ye(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))), (s = (de.exec(o) || ["", ""])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]), (c = u[0]);
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (((l = w.contains(o.ownerDocument, o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    !(function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (s in t) De(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = ke;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, i, r, n);
            })
        );
    }
    (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);
            if (y) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && w.find.matchesSelector(be, i),
                    n.guid || (n.guid = w.guid++),
                    (u = y.events) || (u = y.events = {}),
                    (a = y.handle) ||
                        (a = y.handle = function (t) {
                            return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                        }),
                    (l = (t = (t || "").match(M) || [""]).length);
                while (l--)
                    (d = g = (s = Ce.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = w.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = w.event.special[d] || {}),
                            (c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (w.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (((s = Ce.exec(t[l]) || []), (d = g = s[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        (f = w.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) || w.removeEvent(e, d, y.handle), delete u[d]);
                    } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (((t.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, t))) {
                (s = w.event.handlers.call(this, t, l)), (n = 0);
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    (t.currentTarget = o.elem), (r = 0);
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
                            ((t.handleObj = a), (t.data = a.data), void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
                },
                _default: function (e) {
                    return N(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ee : ke),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Te.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            w.event.addProp
        ),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (i && (i === r || w.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (e, t, n, r) {
                return De(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return De(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = ke),
                    this.each(function () {
                        w.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
    }
    function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))) {
                delete a.handle, (a.events = {});
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
            }
            K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
            return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
            });
        if (p && ((i = xe(t, e[0].ownerDocument, !1, e, r)), (o = i.firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) (l = i), f !== d && ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
                    (l = s[f]), he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
        }
        return e;
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if ((t = n[J.expando])) {
                        if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return Ie(this, e, !0);
            },
            remove: function (e) {
                return Ie(this, e);
            },
            text: function (e) {
                return z(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Re(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Re(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return z(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return Re(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            w.fn[e] = function (e) {
                for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), w(i[a])[t](n), s.apply(r, n.get());
                return this.pushStack(r);
            };
        });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Be = new RegExp(oe.join("|"), "i");
    !(function () {
        function t() {
            if (c) {
                (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                (i = "1%" !== t.top),
                    (u = 12 === n(t.marginLeft)),
                    (c.style.right = "60%"),
                    (s = 36 === n(t.right)),
                    (o = 36 === n(t.width)),
                    (c.style.position = "absolute"),
                    (a = 36 === c.offsetWidth || "absolute"),
                    be.removeChild(l),
                    (c = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");
        c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
            w.extend(h, {
                boxSizingReliable: function () {
                    return t(), o;
                },
                pixelBoxStyles: function () {
                    return t(), s;
                },
                pixelPosition: function () {
                    return t(), i;
                },
                reliableMarginLeft: function () {
                    return t(), u;
                },
                scrollboxSize: function () {
                    return t(), a;
                },
            }));
    })();
    function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || $e(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
                !h.pixelBoxStyles() && We.test(a) && Be.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e;
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
                r
                    ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
                    : ((u += w.css(e, "padding" + oe[a], !0, i)), "padding" !== n ? (u += w.css(e, "border" + oe[a] + "Width", !0, i)) : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5))), u;
    }
    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return (
            (a = a && (h.boxSizingReliable() || i === e.style[t])),
            ("auto" === i || (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) && ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
            (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        );
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if ((u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = "number")),
                    null != n &&
                        n === n &&
                        ("number" === o && (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);
            return (
                Xe.test(t) || (t = Je(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Fe(e, t, r)),
                "normal" === i && t in Ve && (i = Ve[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return !ze.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? et(e, t, r)
                            : se(e, Ue, function () {
                                  return et(e, t, r);
                              });
                },
                set: function (e, n, r) {
                    var i,
                        o = $e(e),
                        a = "border-box" === w.css(e, "boxSizing", !1, o),
                        s = r && Ze(e, t, r, a, o);
                    return (
                        a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - 0.5)),
                        s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                        Ke(e, n, s)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Fe(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            se(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                "margin" !== e && (w.cssHooks[e + t].set = Ke);
        }),
        w.fn.extend({
            css: function (e, t) {
                return z(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }
    (w.Tween = tt),
        (tt.prototype = {
            constructor: tt,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = tt.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                    this
                );
            },
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = tt.prototype.init),
        (w.fx.step = {});
    var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }
    function st() {
        return (
            e.setTimeout(function () {
                nt = void 0;
            }),
            (nt = Date.now())
        );
    }
    function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue ||
            (null == (a = w._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                    a.unqueued || s();
                })),
            a.unqueued++,
            p.always(function () {
                p.always(function () {
                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                });
            }));
        for (r in t)
            if (((i = t[r]), it.test(i))) {
                if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0;
                }
                d[r] = (y && y[r]) || w.style(e, r);
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = y && y.display) && (l = J.get(e, "display")),
                "none" === (c = w.css(e, "display")) && (l ? (c = l) : (fe([e], !0), (l = e.style.display || l), (c = w.css(e, "display")), fe([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === w.css(e, "float") &&
                    (u ||
                        (p.done(function () {
                            h.display = l;
                        }),
                        null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                    (h.display = "inline-block"))),
                n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                        (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                    })),
                (u = !1);
            for (r in d)
                u ||
                    (y ? "hidden" in y && (g = y.hidden) : (y = J.access(e, "fxshow", { display: l })),
                    o && (y.hidden = !g),
                    g && fe([e], !0),
                    p.done(function () {
                        g || fe([e]), J.remove(e, "fxshow");
                        for (r in d) w.style(e, r, d[r]);
                    })),
                    (u = lt(g ? y[r] : 0, r, p)),
                    r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (((r = G(n)), (i = t[r]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = w.cssHooks[r]) && "expand" in a)) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                },
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) if ((r = pt.prefilters[o].call(l, e, c, l.opts))) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return (
            w.map(c, lt, l),
            g(l.opts.start) && l.opts.start.call(e, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (w.Animation = w.extend(pt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
        },
        prefilters: [ct],
        prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
            return (
                w.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
                }),
                r
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = w.timers,
                            a = J.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                        for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (!t && n) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = J.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = w.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
            };
        }),
        w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (nt = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            rt || ((rt = !0), at());
        }),
        (w.fx.stop = function () {
            rt = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
            return (
                (t = w.fx ? w.fx.speeds[t] || t : t),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(i);
                    };
                })
            );
        }),
        (function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            (e.type = "checkbox"), (h.checkOn = "" !== e.value), (h.optSelected = t.selected), ((e = r.createElement("input")).value = "t"), (e.type = "radio"), (h.radioValue = "t" === e.value);
        })();
    var dt,
        ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? w.prop(e, t, n)
                        : ((1 === o && w.isXMLDoc(e)) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void w.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = w.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(M);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (dt = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || w.find.attr;
            ht[t] = function (e, t, r) {
                var i,
                    o,
                    a = t.toLowerCase();
                return r || ((o = ht[a]), (ht[a] = i), (i = null != n(e, t, r) ? a : null), (ht[a] = o)), i;
            };
        });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        h.optSelected ||
            (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        });
    function vt(e) {
        return (e.match(M) || []).join(" ");
    }
    function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }
    w.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).addClass(e.call(this, t, mt(this)));
                });
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).removeClass(e.call(this, t, mt(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : g(e)
                ? this.each(function (n) {
                      w(this).toggleClass(e.call(this, n, mt(this), t), t);
                  })
                : this.each(function () {
                      var t, i, o, a;
                      if (r) {
                          (i = 0), (o = w(this)), (a = xt(e));
                          while ((t = a[i++])) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                  });
        },
        hasClass: function (e) {
            var t,
                n,
                r = 0;
            t = " " + e + " ";
            while ((n = this[r++])) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        },
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return (
                        (r = g(e)),
                        this.each(function (n) {
                            var i;
                            1 === this.nodeType &&
                                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                                    ? (i = "")
                                    : "number" == typeof i
                                    ? (i += "")
                                    : Array.isArray(i) &&
                                      (i = w.map(i, function (e) {
                                          return null == e ? "" : e + "";
                                      })),
                                ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                        })
                    );
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : vt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (((t = w(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = w.makeArray(t),
                            a = i.length;
                        while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = w.inArray(w(e).val(), t) > -1);
                },
            }),
                h.checkOn ||
                    (w.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (h.focusin = "onfocusin" in e);
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = h = u = i = i || r),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !wt.test(m + w.event.triggered) &&
                    (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
                    (c = m.indexOf(":") < 0 && "on" + m),
                    (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
                    (t.isTrigger = o ? 2 : 3),
                    (t.namespace = x.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = i),
                    (n = null == n ? [t] : w.makeArray(n, [t])),
                    (d = w.event.special[m] || {}),
                    o || !d.trigger || !1 !== d.trigger.apply(i, n)))
            ) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (u = s);
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    (h = s),
                        (t.type = a > 1 ? l : d.bindType || m),
                        (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                        (p = c && s[c]) && p.apply && Y(s) && ((t.result = p.apply(s, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = m),
                    o ||
                        t.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                        !Y(i) ||
                        (c &&
                            g(i[m]) &&
                            !y(i) &&
                            ((u = i[c]) && (i[c] = null),
                            (w.event.triggered = m),
                            t.isPropagationStopped() && h.addEventListener(m, Tt),
                            i[m](),
                            t.isPropagationStopped() && h.removeEventListener(m, Tt),
                            (w.event.triggered = void 0),
                            u && (i[c] = u))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
        h.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t);
                        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t) - 1;
                        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
                    },
                };
            });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function (t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            });
        else if (n || "object" !== x(t)) r(e, t);
        else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
    }
    (w.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
                    })
                    .map(function (e, t) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? w.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Dt, "\r\n") };
                    })
                    .get();
            },
        });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n)) while ((r = o[i++])) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;
        function a(s) {
            var u;
            return (
                (i[s] = !0),
                w.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
            );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
    }
    function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
    }
    function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break;
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (!0 !== a)
                        if (a && e.throws) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (e) {
                                return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                            }
                }
        return { state: "success", data: t };
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
                            }
                            t = s[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null;
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (b[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else for (t in e) x[t] = [x[t], e[t]];
                        return this;
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this;
                    },
                };
            if (
                (v.promise(E),
                (h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//")),
                (h.type = n.method || n.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
                null == h.crossDomain)
            ) {
                l = r.createElement("a");
                try {
                    (l.href = h.url), (l.href = l.href), (h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if ((h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c)) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Mt.test(h.type)),
                (o = h.url.replace(Lt, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+"))
                    : ((d = h.url.slice(o.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((o = o.replace(Ht, "$1")), (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
                      (h.url = o + d)),
                h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
                ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (((C = "abort"), m.add(h.complete), E.done(h.success), E.fail(h.error), (i = _t(Wt, h, n, E)))) {
                if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c)) return E;
                h.async &&
                    h.timeout > 0 &&
                    (u = e.setTimeout(function () {
                        E.abort("timeout");
                    }, h.timeout));
                try {
                    (c = !1), i.send(b, k);
                } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;
                c ||
                    ((c = !0),
                    u && e.clearTimeout(u),
                    (i = void 0),
                    (a = s || ""),
                    (E.readyState = t > 0 ? 4 : 0),
                    (l = (t >= 200 && t < 300) || 304 === t),
                    r && (b = Xt(h, E, r)),
                    (b = Ut(h, b, E, l)),
                    l
                        ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                          204 === t || "HEAD" === h.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = b.state), (p = b.data), (l = !(d = b.error))))
                        : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                    (E.status = t),
                    (E.statusText = (n || C) + ""),
                    l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                    E.statusCode(x),
                    (x = void 0),
                    f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                    m.fireWith(g, [E, C]),
                    f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
            }
            return E;
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json");
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script");
        },
    }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, r, i) {
                return g(n) && ((i = i || r), (r = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
            };
        }),
        (w._evalUrl = function (e) {
            return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (g(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return g(e)
                    ? this.each(function (t) {
                          w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = w(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();
    (h.cors = !!Gt && "withCredentials" in Gt),
        (h.ajax = Gt = !!Gt),
        w.ajaxTransport(function (t) {
            var n, r;
            if (h.cors || (Gt && !t.crossDomain))
                return {
                    send: function (i, o) {
                        var a,
                            s = t.xhr();
                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                    "abort" === e
                                        ? s.abort()
                                        : "error" === e
                                        ? "number" != typeof s.status
                                            ? o(0, "error")
                                            : o(s.status, s.statusText)
                                        : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = n()),
                            (r = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = r)
                                : (s.onreadystatechange = function () {
                                      4 === s.readyState &&
                                          e.setTimeout(function () {
                                              n && r();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        (t = w("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            r.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                a,
                s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    s ? (t[s] = t[s].replace(Qt, "$1" + i)) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return a || w.error(i + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[i]),
                    (e[i] = function () {
                        a = arguments;
                    }),
                    r.always(function () {
                        void 0 === o ? w(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)), a && g(o) && o(a[0]), (a = o = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = (function () {
            var e = r.implementation.createHTMLDocument("").body;
            return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
        })()),
        (w.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var i, o, a;
            return (
                t || (h.createHTMLDocument ? (((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href), t.head.appendChild(i)) : (t = r)),
                (o = A.exec(e)),
                (a = !n && []),
                o ? [t.createElement(o[1])] : ((o = xe([e], t, a)), a && a.length && w(a).remove(), w.merge([], o.childNodes))
            );
        }),
        (w.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                    w
                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = w.css(e, "position"),
                    f = w(e),
                    p = {};
                "static" === c && (e.style.position = "relative"),
                    (s = f.offset()),
                    (o = w.css(e, "top")),
                    (u = w.css(e, "left")),
                    (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? ((a = (r = f.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    g(t) && (t = t.call(e, n, w.extend({}, s))),
                    null != t.top && (p.top = t.top - s.top + a),
                    null != t.left && (p.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, p) : f.css(p);
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              w.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = this[0];
                if (r) return r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                        while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (i.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                    return e || be;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (r) {
                return z(
                    this,
                    function (e, r, i) {
                        var o;
                        if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
                if (n) return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                w.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(
                        this,
                        function (t, n, i) {
                            var o;
                            return y(t)
                                ? 0 === r.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                : void 0 === i
                                ? w.css(t, n, s)
                                : w.style(t, n, i, s);
                        },
                        t,
                        a ? i : void 0,
                        a
                    );
                };
            });
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            w.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (w.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                return (
                    (r = o.call(arguments, 2)),
                    (i = function () {
                        return e.apply(t || this, r.concat(o.call(arguments)));
                    }),
                    (i.guid = e.guid = e.guid || w.guid++),
                    i
                );
        }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = N),
        (w.isFunction = g),
        (w.isWindow = y),
        (w.camelCase = G),
        (w.type = x),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var Jt = e.jQuery,
        Kt = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
        }),
        t || (e.jQuery = e.$ = w),
        w
    );
});
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    (function (a, b) {
        "use strict";
        function c(c) {
            var d = b.console;
            e[c] || ((e[c] = !0), a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()));
        }
        function d(a, b, d, e) {
            Object.defineProperty(a, b, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return c(e), d;
                },
            });
        }
        (a.migrateVersion = "3.0.0"),
            (function () {
                var c =
                        b.console &&
                        b.console.log &&
                        function () {
                            b.console.log.apply(b.console, arguments);
                        },
                    d = /^[12]\./;
                c &&
                    ((a && !d.test(a.fn.jquery)) || c("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
                    a.migrateWarnings && c("JQMIGRATE: Migrate plugin loaded multiple times"),
                    c("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion));
            })();
        var e = {};
        (a.migrateWarnings = []),
            void 0 === a.migrateTrace && (a.migrateTrace = !0),
            (a.migrateReset = function () {
                (e = {}), (a.migrateWarnings.length = 0);
            }),
            "BackCompat" === document.compatMode && c("jQuery is not compatible with Quirks Mode");
        var f = a.fn.init,
            g = a.isNumeric,
            h = a.find,
            i = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            j = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
        (a.fn.init = function (a) {
            var b = Array.prototype.slice.call(arguments);
            return "string" == typeof a && "#" === a && (c("jQuery( '#' ) is not a valid selector"), (b[0] = [])), f.apply(this, b);
        }),
            (a.fn.init.prototype = a.fn),
            (a.find = function (a) {
                var b = Array.prototype.slice.call(arguments);
                if ("string" == typeof a && i.test(a))
                    try {
                        document.querySelector(a);
                    } catch (d) {
                        a = a.replace(j, function (a, b, c, d) {
                            return "[" + b + c + '"' + d + '"]';
                        });
                        try {
                            document.querySelector(a), c("Attribute selector with '#' must be quoted: " + b[0]), (b[0] = a);
                        } catch (e) {
                            c("Attribute selector with '#' was not fixed: " + b[0]);
                        }
                    }
                return h.apply(this, b);
            });
        var k;
        for (k in h) Object.prototype.hasOwnProperty.call(h, k) && (a.find[k] = h[k]);
        (a.fn.size = function () {
            return c("jQuery.fn.size() is deprecated; use the .length property"), this.length;
        }),
            (a.parseJSON = function () {
                return c("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments);
            }),
            (a.isNumeric = function (b) {
                function d(b) {
                    var c = b && b.toString();
                    return !a.isArray(b) && c - parseFloat(c) + 1 >= 0;
                }
                var e = g(b),
                    f = d(b);
                return e !== f && c("jQuery.isNumeric() should not be called on constructed objects"), f;
            }),
            d(a, "unique", a.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort"),
            d(a.expr, "filters", a.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos"),
            d(a.expr, ":", a.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
        var l = a.ajax;
        a.ajax = function () {
            var a = l.apply(this, arguments);
            return a.promise && (d(a, "success", a.done, "jQXHR.success is deprecated and removed"), d(a, "error", a.fail, "jQXHR.error is deprecated and removed"), d(a, "complete", a.always, "jQXHR.complete is deprecated and removed")), a;
        };
        var m = a.fn.removeAttr,
            n = a.fn.toggleClass,
            o = /\S+/g;
        (a.fn.removeAttr = function (b) {
            var d = this;
            return (
                a.each(b.match(o), function (b, e) {
                    a.expr.match.bool.test(e) && (c("jQuery.fn.removeAttr no longer sets boolean properties: " + e), d.prop(e, !1));
                }),
                m.apply(this, arguments)
            );
        }),
            (a.fn.toggleClass = function (b) {
                return void 0 !== b && "boolean" != typeof b
                    ? n.apply(this, arguments)
                    : (c("jQuery.fn.toggleClass( boolean ) is deprecated"),
                      this.each(function () {
                          var c = (this.getAttribute && this.getAttribute("class")) || "";
                          c && a.data(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || b === !1 ? "" : a.data(this, "__className__") || "");
                      }));
            });
        var p = !1;
        a.swap &&
            a.each(["height", "width", "reliableMarginRight"], function (b, c) {
                var d = a.cssHooks[c] && a.cssHooks[c].get;
                d &&
                    (a.cssHooks[c].get = function () {
                        var a;
                        return (p = !0), (a = d.apply(this, arguments)), (p = !1), a;
                    });
            }),
            (a.swap = function (a, b, d, e) {
                var f,
                    g,
                    h = {};
                p || c("jQuery.swap() is undocumented and deprecated");
                for (g in b) (h[g] = a.style[g]), (a.style[g] = b[g]);
                f = d.apply(a, e || []);
                for (g in b) a.style[g] = h[g];
                return f;
            });
        var q = a.data;
        a.data = function (b, d, e) {
            var f;
            return d && d !== a.camelCase(d) && ((f = a.hasData(b) && q.call(this, b)), f && d in f) ? (c("jQuery.data() always sets/gets camelCased names: " + d), arguments.length > 2 && (f[d] = e), f[d]) : q.apply(this, arguments);
        };
        var r = a.Tween.prototype.run;
        a.Tween.prototype.run = function (b) {
            a.easing[this.easing].length > 1 &&
                (c('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), (a.easing[this.easing] = a.easing[this.easing].bind(a.easing, b, this.options.duration * b, 0, 1, this.options.duration))),
                r.apply(this, arguments);
        };
        var s = a.fn.load,
            t = a.event.fix;
        (a.event.props = []),
            (a.event.fixHooks = {}),
            (a.event.fix = function (b) {
                var d,
                    e = b.type,
                    f = this.fixHooks[e],
                    g = a.event.props;
                if (g.length) for (c("jQuery.event.props are deprecated and removed: " + g.join()); g.length; ) a.event.addProp(g.pop());
                if (f && !f._migrated_ && ((f._migrated_ = !0), c("jQuery.event.fixHooks are deprecated and removed: " + e), (g = f.props) && g.length)) for (; g.length; ) a.event.addProp(g.pop());
                return (d = t.call(this, b)), f && f.filter ? f.filter(d, b) : d;
            }),
            a.each(["load", "unload", "error"], function (b, d) {
                a.fn[d] = function () {
                    var a = Array.prototype.slice.call(arguments, 0);
                    return "load" === d && "string" == typeof a[0] ? s.apply(this, a) : (c("jQuery.fn." + d + "() is deprecated"), a.splice(0, 0, d), arguments.length ? this.on.apply(this, a) : (this.triggerHandler.apply(this, a), this));
                };
            }),
            a(function () {
                a(document).triggerHandler("ready");
            }),
            (a.event.special.ready = {
                setup: function () {
                    this === document && c("'ready' event is deprecated");
                },
            }),
            a.fn.extend({
                bind: function (a, b, d) {
                    return c("jQuery.fn.bind() is deprecated"), this.on(a, null, b, d);
                },
                unbind: function (a, b) {
                    return c("jQuery.fn.unbind() is deprecated"), this.off(a, null, b);
                },
                delegate: function (a, b, d, e) {
                    return c("jQuery.fn.delegate() is deprecated"), this.on(b, a, d, e);
                },
                undelegate: function (a, b, d) {
                    return c("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", d);
                },
            });
        var u = a.fn.offset;
        a.fn.offset = function () {
            var b,
                d = this[0],
                e = { top: 0, left: 0 };
            return d && d.nodeType
                ? ((b = (d.ownerDocument || document).documentElement), a.contains(b, d) ? u.apply(this, arguments) : (c("jQuery.fn.offset() requires an element connected to a document"), e))
                : (c("jQuery.fn.offset() requires a valid DOM element"), e);
        };
        var v = a.param;
        a.param = function (b, d) {
            var e = a.ajaxSettings && a.ajaxSettings.traditional;
            return void 0 === d && e && (c("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), (d = e)), v.call(this, b, d);
        };
        var w = a.fn.andSelf || a.fn.addBack;
        a.fn.andSelf = function () {
            return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments);
        };
        var x = a.Deferred,
            y = [
                ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")],
            ];
        a.Deferred = function (b) {
            var d = x(),
                e = d.promise();
            return (
                (d.pipe = e.pipe = function () {
                    var b = arguments;
                    return (
                        c("deferred.pipe() is deprecated"),
                        a
                            .Deferred(function (c) {
                                a.each(y, function (f, g) {
                                    var h = a.isFunction(b[f]) && b[f];
                                    d[g[1]](function () {
                                        var b = h && h.apply(this, arguments);
                                        b && a.isFunction(b.promise) ? b.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g[0] + "With"](this === e ? c.promise() : this, h ? [b] : arguments);
                                    });
                                }),
                                    (b = null);
                            })
                            .promise()
                    );
                }),
                b && b.call(d, d),
                d
            );
        };
    })(jQuery, window);
(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Popper = t());
})(this, function () {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o;
    }
    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
    }
    function r(e) {
        var o = e && e.offsetParent,
            i = o && o.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TD", "TABLE"].indexOf(o.nodeName) && "static" === t(o, "position") ? r(o) : o) : e ? e.ownerDocument.documentElement : document.documentElement;
    }
    function p(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e);
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode);
    }
    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = o ? e : t,
            n = o ? t : e,
            a = document.createRange();
        a.setStart(i, 0), a.setEnd(n, 0);
        var l = a.commonAncestorContainer;
        if ((e !== l && t !== l) || i.contains(n)) return p(l) ? l : r(l);
        var f = s(e);
        return f.host ? d(f.host, t) : d(e, s(t).host);
    }
    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            o = "top" === t ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var n = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || n;
            return r[o];
        }
        return e[o];
    }
    function l(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = a(t, "top"),
            n = a(t, "left"),
            r = o ? -1 : 1;
        return (e.top += i * r), (e.bottom += i * r), (e.left += n * r), (e.right += n * r), e;
    }
    function f(e, t) {
        var o = "x" === t ? "Left" : "Top",
            i = "Left" == o ? "Right" : "Bottom";
        return parseFloat(e["border" + o + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
    }
    function m(e, t, o, i) {
        return J(t["offset" + e], t["scroll" + e], o["client" + e], o["offset" + e], o["scroll" + e], ie() ? o["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
    }
    function h() {
        var e = document.body,
            t = document.documentElement,
            o = ie() && getComputedStyle(t);
        return { height: m("Height", e, t, o), width: m("Width", e, t, o) };
    }
    function c(e) {
        return se({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function g(e) {
        var o = {};
        if (ie())
            try {
                o = e.getBoundingClientRect();
                var i = a(e, "top"),
                    n = a(e, "left");
                (o.top += i), (o.left += n), (o.bottom += i), (o.right += n);
            } catch (e) {}
        else o = e.getBoundingClientRect();
        var r = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
            p = "HTML" === e.nodeName ? h() : {},
            s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            m = e.offsetHeight - d;
        if (l || m) {
            var g = t(e);
            (l -= f(g, "x")), (m -= f(g, "y")), (r.width -= l), (r.height -= m);
        }
        return c(r);
    }
    function u(e, o) {
        var i = ie(),
            r = "HTML" === o.nodeName,
            p = g(e),
            s = g(o),
            d = n(e),
            a = t(o),
            f = parseFloat(a.borderTopWidth, 10),
            m = parseFloat(a.borderLeftWidth, 10),
            h = c({ top: p.top - s.top - f, left: p.left - s.left - m, width: p.width, height: p.height });
        if (((h.marginTop = 0), (h.marginLeft = 0), !i && r)) {
            var u = parseFloat(a.marginTop, 10),
                b = parseFloat(a.marginLeft, 10);
            (h.top -= f - u), (h.bottom -= f - u), (h.left -= m - b), (h.right -= m - b), (h.marginTop = u), (h.marginLeft = b);
        }
        return (i ? o.contains(d) : o === d && "BODY" !== d.nodeName) && (h = l(h, o)), h;
    }
    function b(e) {
        var t = e.ownerDocument.documentElement,
            o = u(e, t),
            i = J(t.clientWidth, window.innerWidth || 0),
            n = J(t.clientHeight, window.innerHeight || 0),
            r = a(t),
            p = a(t, "left"),
            s = { top: r - o.top + o.marginTop, left: p - o.left + o.marginLeft, width: i, height: n };
        return c(s);
    }
    function w(e) {
        var i = e.nodeName;
        return "BODY" === i || "HTML" === i ? !1 : "fixed" === t(e, "position") || w(o(e));
    }
    function y(e, t, i, r) {
        var p = { top: 0, left: 0 },
            s = d(e, t);
        if ("viewport" === r) p = b(s);
        else {
            var a;
            "scrollParent" === r ? ((a = n(o(t))), "BODY" === a.nodeName && (a = e.ownerDocument.documentElement)) : "window" === r ? (a = e.ownerDocument.documentElement) : (a = r);
            var l = u(a, s);
            if ("HTML" === a.nodeName && !w(s)) {
                var f = h(),
                    m = f.height,
                    c = f.width;
                (p.top += l.top - l.marginTop), (p.bottom = m + l.top), (p.left += l.left - l.marginLeft), (p.right = c + l.left);
            } else p = l;
        }
        return (p.left += i), (p.top += i), (p.right -= i), (p.bottom -= i), p;
    }
    function E(e) {
        var t = e.width,
            o = e.height;
        return t * o;
    }
    function v(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var p = y(o, i, r, n),
            s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
            d = Object.keys(s)
                .map(function (e) {
                    return se({ key: e }, s[e], { area: E(s[e]) });
                })
                .sort(function (e, t) {
                    return t.area - e.area;
                }),
            a = d.filter(function (e) {
                var t = e.width,
                    i = e.height;
                return t >= o.clientWidth && i >= o.clientHeight;
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split("-")[1];
        return l + (f ? "-" + f : "");
    }
    function O(e, t, o) {
        var i = d(t, o);
        return u(o, i);
    }
    function L(e) {
        var t = getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            n = { width: e.offsetWidth + i, height: e.offsetHeight + o };
        return n;
    }
    function x(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
        });
    }
    function S(e, t, o) {
        o = o.split("-")[0];
        var i = L(e),
            n = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(o),
            p = r ? "top" : "left",
            s = r ? "left" : "top",
            d = r ? "height" : "width",
            a = r ? "width" : "height";
        return (n[p] = t[p] + t[d] / 2 - i[d] / 2), (n[s] = o === s ? t[s] - i[a] : t[x(s)]), n;
    }
    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function D(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
                return e[t] === o;
            });
        var i = T(e, function (e) {
            return e[t] === o;
        });
        return e.indexOf(i);
    }
    function C(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, D(t, "name", i));
        return (
            n.forEach(function (t) {
                t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var i = t["function"] || t.fn;
                t.enabled && e(i) && ((o.offsets.popper = c(o.offsets.popper)), (o.offsets.reference = c(o.offsets.reference)), (o = i(o, t)));
            }),
            o
        );
    }
    function N() {
        if (!this.state.isDestroyed) {
            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            (e.offsets.reference = O(this.state, this.popper, this.reference)),
                (e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                (e.originalPlacement = e.placement),
                (e.offsets.popper = S(this.popper, e.offsets.reference, e.placement)),
                (e.offsets.popper.position = "absolute"),
                (e = C(this.modifiers, e)),
                this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
    }
    function k(e, t) {
        return e.some(function (e) {
            var o = e.name,
                i = e.enabled;
            return i && o === t;
        });
    }
    function W(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n],
                r = i ? "" + i + o : e;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function P() {
        return (
            (this.state.isDestroyed = !0),
            k(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), (this.popper.style.left = ""), (this.popper.style.position = ""), (this.popper.style.top = ""), (this.popper.style[W("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
        );
    }
    function B(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function H(e, t, o, i) {
        var r = "BODY" === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, { passive: !0 }), r || H(n(p.parentNode), t, o, i), i.push(p);
    }
    function A(e, t, o, i) {
        (o.updateBound = i), B(e).addEventListener("resize", o.updateBound, { passive: !0 });
        var r = n(e);
        return H(r, "scroll", o.updateBound, o.scrollParents), (o.scrollElement = r), (o.eventsEnabled = !0), o;
    }
    function I() {
        this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function M(e, t) {
        return (
            B(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
        );
    }
    function R() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), (this.state = M(this.reference, this.state)));
    }
    function U(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function Y(e, t) {
        Object.keys(t).forEach(function (o) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) && U(t[o]) && (i = "px"), (e.style[o] = t[o] + i);
        });
    }
    function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function F(e, t, o) {
        var i = T(e, function (e) {
                var o = e.name;
                return o === t;
            }),
            n =
                !!i &&
                e.some(function (e) {
                    return e.name === o && e.enabled && e.order < i.order;
                });
        if (!n) {
            var r = "`" + t + "`";
            console.warn("`" + o + "`" + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
        }
        return n;
    }
    function K(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function q(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = ae.indexOf(e),
            i = ae.slice(o + 1).concat(ae.slice(0, o));
        return t ? i.reverse() : i;
    }
    function V(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +n[1],
            p = n[2];
        if (!r) return e;
        if (0 === p.indexOf("%")) {
            var s;
            switch (p) {
                case "%p":
                    s = o;
                    break;
                case "%":
                case "%r":
                default:
                    s = i;
            }
            var d = c(s);
            return (d[t] / 100) * r;
        }
        if ("vh" === p || "vw" === p) {
            var a;
            return (a = "vh" === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0)), (a / 100) * r;
        }
        return r;
    }
    function z(e, t, o, i) {
        var n = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            p = e.split(/(\+|\-)/).map(function (e) {
                return e.trim();
            }),
            s = p.indexOf(
                T(p, function (e) {
                    return -1 !== e.search(/,|\s/);
                })
            );
        p[s] && -1 === p[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return (
            (a = a.map(function (e, i) {
                var n = (1 === i ? !r : r) ? "height" : "width",
                    p = !1;
                return e
                    .reduce(function (e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (p = !0), e) : p ? ((e[e.length - 1] += t), (p = !1), e) : e.concat(t);
                    }, [])
                    .map(function (e) {
                        return V(e, n, t, o);
                    });
            })),
            a.forEach(function (e, t) {
                e.forEach(function (o, i) {
                    U(o) && (n[t] += o * ("-" === e[i - 1] ? -1 : 1));
                });
            }),
            n
        );
    }
    function G(e, t) {
        var o,
            i = t.offset,
            n = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = n.split("-")[0];
        return (
            (o = U(+i) ? [+i, 0] : z(i, p, s, d)),
            "left" === d ? ((p.top += o[0]), (p.left -= o[1])) : "right" === d ? ((p.top += o[0]), (p.left += o[1])) : "top" === d ? ((p.left += o[0]), (p.top -= o[1])) : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
            (e.popper = p),
            e
        );
    }
    for (var _ = Math.min, X = Math.floor, J = Math.max, Q = "undefined" != typeof window && "undefined" != typeof document, Z = ["Edge", "Trident", "Firefox"], $ = 0, ee = 0; ee < Z.length; ee += 1)
        if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
            $ = 1;
            break;
        }
    var i,
        te = Q && window.Promise,
        oe = te
            ? function (e) {
                  var t = !1;
                  return function () {
                      t ||
                          ((t = !0),
                          window.Promise.resolve().then(function () {
                              (t = !1), e();
                          }));
                  };
              }
            : function (e) {
                  var t = !1;
                  return function () {
                      t ||
                          ((t = !0),
                          setTimeout(function () {
                              (t = !1), e();
                          }, $));
                  };
              },
        ie = function () {
            return void 0 == i && (i = -1 !== navigator.appVersion.indexOf("MSIE 10")), i;
        },
        ne = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        re = (function () {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) (o = t[n]), (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
            return function (t, o, i) {
                return o && e(t.prototype, o), i && e(t, i), t;
            };
        })(),
        pe = function (e, t, o) {
            return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
        },
        se =
            Object.assign ||
            function (e) {
                for (var t, o = 1; o < arguments.length; o++) for (var i in ((t = arguments[o]), t)) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            },
        de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ae = de.slice(3),
        le = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
        fe = (function () {
            function t(o, i) {
                var n = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ne(this, t),
                    (this.scheduleUpdate = function () {
                        return requestAnimationFrame(n.update);
                    }),
                    (this.update = oe(this.update.bind(this))),
                    (this.options = se({}, t.Defaults, r)),
                    (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                    (this.reference = o && o.jquery ? o[0] : o),
                    (this.popper = i && i.jquery ? i[0] : i),
                    (this.options.modifiers = {}),
                    Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                        n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function (e) {
                            return se({ name: e }, n.options.modifiers[e]);
                        })
                        .sort(function (e, t) {
                            return e.order - t.order;
                        })),
                    this.modifiers.forEach(function (t) {
                        t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
                    }),
                    this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), (this.state.eventsEnabled = p);
            }
            return (
                re(t, [
                    {
                        key: "update",
                        value: function () {
                            return N.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return P.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function () {
                            return I.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function () {
                            return R.call(this);
                        },
                    },
                ]),
                t
            );
        })();
    return (
        (fe.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
        (fe.placements = de),
        (fe.Defaults = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var n = e.offsets,
                                r = n.reference,
                                p = n.popper,
                                s = -1 !== ["bottom", "top"].indexOf(o),
                                d = s ? "left" : "top",
                                a = s ? "width" : "height",
                                l = { start: pe({}, d, r[d]), end: pe({}, d, r[d] + r[a] - p[a]) };
                            e.offsets.popper = se({}, p, l[i]);
                        }
                        return e;
                    },
                },
                offset: { order: 200, enabled: !0, fn: G, offset: 0 },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.boundariesElement || r(e.instance.popper);
                        e.instance.reference === o && (o = r(o));
                        var i = y(e.instance.popper, e.instance.reference, t.padding, o);
                        t.boundaries = i;
                        var n = t.priority,
                            p = e.offsets.popper,
                            s = {
                                primary: function (e) {
                                    var o = p[e];
                                    return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o);
                                },
                                secondary: function (e) {
                                    var o = "right" === e ? "left" : "top",
                                        n = p[o];
                                    return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ("right" === e ? p.width : p.height))), pe({}, o, n);
                                },
                            };
                        return (
                            n.forEach(function (e) {
                                var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                                p = se({}, p, s[t](e));
                            }),
                            (e.offsets.popper = p),
                            e
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent",
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            o = t.popper,
                            i = t.reference,
                            n = e.placement.split("-")[0],
                            r = X,
                            p = -1 !== ["top", "bottom"].indexOf(n),
                            s = p ? "right" : "bottom",
                            d = p ? "left" : "top",
                            a = p ? "width" : "height";
                        return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e;
                    },
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, o) {
                        var i;
                        if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var n = o.element;
                        if ("string" == typeof n) {
                            if (((n = e.instance.popper.querySelector(n)), !n)) return e;
                        } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            p = e.offsets,
                            s = p.popper,
                            d = p.reference,
                            a = -1 !== ["left", "right"].indexOf(r),
                            l = a ? "height" : "width",
                            f = a ? "Top" : "Left",
                            m = f.toLowerCase(),
                            h = a ? "left" : "top",
                            g = a ? "bottom" : "right",
                            u = L(n)[l];
                        d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), (e.offsets.popper = c(e.offsets.popper));
                        var b = d[m] + d[l] / 2 - u / 2,
                            w = t(e.instance.popper),
                            y = parseFloat(w["margin" + f], 10),
                            E = parseFloat(w["border" + f + "Width"], 10),
                            v = b - e.offsets.popper[m] - y - E;
                        return (v = J(_(s[l] - u, v), 0)), (e.arrowElement = n), (e.offsets.arrow = ((i = {}), pe(i, m, Math.round(v)), pe(i, h, ""), i)), e;
                    },
                    element: "[x-arrow]",
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (k(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                            i = e.placement.split("-")[0],
                            n = x(i),
                            r = e.placement.split("-")[1] || "",
                            p = [];
                        switch (t.behavior) {
                            case le.FLIP:
                                p = [i, n];
                                break;
                            case le.CLOCKWISE:
                                p = q(i);
                                break;
                            case le.COUNTERCLOCKWISE:
                                p = q(i, !0);
                                break;
                            default:
                                p = t.behavior;
                        }
                        return (
                            p.forEach(function (s, d) {
                                if (i !== s || p.length === d + 1) return e;
                                (i = e.placement.split("-")[0]), (n = x(i));
                                var a = e.offsets.popper,
                                    l = e.offsets.reference,
                                    f = X,
                                    m = ("left" === i && f(a.right) > f(l.left)) || ("right" === i && f(a.left) < f(l.right)) || ("top" === i && f(a.bottom) > f(l.top)) || ("bottom" === i && f(a.top) < f(l.bottom)),
                                    h = f(a.left) < f(o.left),
                                    c = f(a.right) > f(o.right),
                                    g = f(a.top) < f(o.top),
                                    u = f(a.bottom) > f(o.bottom),
                                    b = ("left" === i && h) || ("right" === i && c) || ("top" === i && g) || ("bottom" === i && u),
                                    w = -1 !== ["top", "bottom"].indexOf(i),
                                    y = !!t.flipVariations && ((w && "start" === r && h) || (w && "end" === r && c) || (!w && "start" === r && g) || (!w && "end" === r && u));
                                (m || b || y) &&
                                    ((e.flipped = !0),
                                    (m || b) && (i = p[d + 1]),
                                    y && (r = K(r)),
                                    (e.placement = i + (r ? "-" + r : "")),
                                    (e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement))),
                                    (e = C(e.instance.modifiers, e, "flip")));
                            }),
                            e
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            i = e.offsets,
                            n = i.popper,
                            r = i.reference,
                            p = -1 !== ["left", "right"].indexOf(o),
                            s = -1 === ["top", "left"].indexOf(o);
                        return (n[p ? "left" : "top"] = r[o] - (s ? n[p ? "width" : "height"] : 0)), (e.placement = x(t)), (e.offsets.popper = c(n)), e;
                    },
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            o = T(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name;
                            }).boundaries;
                        if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                            if (!0 === e.hide) return e;
                            (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === e.hide) return e;
                            (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                        }
                        return e;
                    },
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.x,
                            i = t.y,
                            n = e.offsets.popper,
                            p = T(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name;
                            }).gpuAcceleration;
                        void 0 !== p && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s,
                            d,
                            a = void 0 === p ? t.gpuAcceleration : p,
                            l = r(e.instance.popper),
                            f = g(l),
                            m = { position: n.position },
                            h = { left: X(n.left), top: X(n.top), bottom: X(n.bottom), right: X(n.right) },
                            c = "bottom" === o ? "top" : "bottom",
                            u = "right" === i ? "left" : "right",
                            b = W("transform");
                        if (((d = "bottom" == c ? -f.height + h.bottom : h.top), (s = "right" == u ? -f.width + h.right : h.left), a && b))
                            (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"), (m[c] = 0), (m[u] = 0), (m.willChange = "transform");
                        else {
                            var w = "bottom" == c ? -1 : 1,
                                y = "right" == u ? -1 : 1;
                            (m[c] = d * w), (m[u] = s * y), (m.willChange = c + ", " + u);
                        }
                        var E = { "x-placement": e.placement };
                        return (e.attributes = se({}, E, e.attributes)), (e.styles = se({}, m, e.styles)), (e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles)), e;
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right",
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e;
                    },
                    onLoad: function (e, t, o, i, n) {
                        var r = O(n, t, e),
                            p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                        return t.setAttribute("x-placement", p), Y(t, { position: "absolute" }), o;
                    },
                    gpuAcceleration: void 0,
                },
            },
        }),
        fe
    );
});
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("jquery"), require("popper.js"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery", "popper.js"], e)
        : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }
    function r() {
        return (r =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
            }).apply(this, arguments);
    }
    (e = e && e.hasOwnProperty("default") ? e.default : e), (n = n && n.hasOwnProperty("default") ? n.default : n);
    var o,
        a,
        l,
        h,
        c,
        u,
        f,
        d,
        _,
        g,
        p,
        m,
        v,
        E,
        T,
        y,
        C,
        I,
        A,
        b,
        D,
        S,
        w,
        N,
        O,
        k,
        P = (function (t) {
            var e = !1;
            function n(e) {
                var n = this,
                    s = !1;
                return (
                    t(this).one(i.TRANSITION_END, function () {
                        s = !0;
                    }),
                    setTimeout(function () {
                        s || i.triggerTransitionEnd(n);
                    }, e),
                    this
                );
            }
            var i = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (t) {
                    do {
                        t += ~~(1e6 * Math.random());
                    } while (document.getElementById(t));
                    return t;
                },
                getSelectorFromElement: function (e) {
                    var n,
                        i = e.getAttribute("data-target");
                    (i && "#" !== i) || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && ((n = i), (i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")));
                    try {
                        return t(document).find(i).length > 0 ? i : null;
                    } catch (t) {
                        return null;
                    }
                },
                reflow: function (t) {
                    return t.offsetHeight;
                },
                triggerTransitionEnd: function (n) {
                    t(n).trigger(e.end);
                },
                supportsTransitionEnd: function () {
                    return Boolean(e);
                },
                isElement: function (t) {
                    return (t[0] || t).nodeType;
                },
                typeCheckConfig: function (t, e, n) {
                    for (var s in n)
                        if (Object.prototype.hasOwnProperty.call(n, s)) {
                            var r = n[s],
                                o = e[s],
                                a =
                                    o && i.isElement(o)
                                        ? "element"
                                        : ((l = o),
                                          {}.toString
                                              .call(l)
                                              .match(/\s([a-zA-Z]+)/)[1]
                                              .toLowerCase());
                            if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".');
                        }
                    var l;
                },
            };
            return (
                (e = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }),
                (t.fn.emulateTransitionEnd = n),
                i.supportsTransitionEnd() &&
                    (t.event.special[i.TRANSITION_END] = {
                        bindType: e.end,
                        delegateType: e.end,
                        handle: function (e) {
                            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                        },
                    }),
                i
            );
        })(e),
        L =
            ((a = "alert"),
            (h = "." + (l = "bs.alert")),
            (c = (o = e).fn[a]),
            (u = { CLOSE: "close" + h, CLOSED: "closed" + h, CLICK_DATA_API: "click" + h + ".data-api" }),
            (f = "alert"),
            (d = "fade"),
            (_ = "show"),
            (g = (function () {
                function t(t) {
                    this._element = t;
                }
                var e = t.prototype;
                return (
                    (e.close = function (t) {
                        t = t || this._element;
                        var e = this._getRootElement(t);
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                    }),
                    (e.dispose = function () {
                        o.removeData(this._element, l), (this._element = null);
                    }),
                    (e._getRootElement = function (t) {
                        var e = P.getSelectorFromElement(t),
                            n = !1;
                        return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
                    }),
                    (e._triggerCloseEvent = function (t) {
                        var e = o.Event(u.CLOSE);
                        return o(t).trigger(e), e;
                    }),
                    (e._removeElement = function (t) {
                        var e = this;
                        o(t).removeClass(_),
                            P.supportsTransitionEnd() && o(t).hasClass(d)
                                ? o(t)
                                      .one(P.TRANSITION_END, function (n) {
                                          return e._destroyElement(t, n);
                                      })
                                      .emulateTransitionEnd(150)
                                : this._destroyElement(t);
                    }),
                    (e._destroyElement = function (t) {
                        o(t).detach().trigger(u.CLOSED).remove();
                    }),
                    (t._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = o(this),
                                i = n.data(l);
                            i || ((i = new t(this)), n.data(l, i)), "close" === e && i[e](this);
                        });
                    }),
                    (t._handleDismiss = function (t) {
                        return function (e) {
                            e && e.preventDefault(), t.close(this);
                        };
                    }),
                    s(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                    ]),
                    t
                );
            })()),
            o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())),
            (o.fn[a] = g._jQueryInterface),
            (o.fn[a].Constructor = g),
            (o.fn[a].noConflict = function () {
                return (o.fn[a] = c), g._jQueryInterface;
            }),
            g),
        R =
            ((m = "button"),
            (E = "." + (v = "bs.button")),
            (T = ".data-api"),
            (y = (p = e).fn[m]),
            (C = "active"),
            (I = "btn"),
            (A = "focus"),
            (b = '[data-toggle^="button"]'),
            (D = '[data-toggle="buttons"]'),
            (S = "input"),
            (w = ".active"),
            (N = ".btn"),
            (O = { CLICK_DATA_API: "click" + E + T, FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T }),
            (k = (function () {
                function t(t) {
                    this._element = t;
                }
                var e = t.prototype;
                return (
                    (e.toggle = function () {
                        var t = !0,
                            e = !0,
                            n = p(this._element).closest(D)[0];
                        if (n) {
                            var i = p(this._element).find(S)[0];
                            if (i) {
                                if ("radio" === i.type)
                                    if (i.checked && p(this._element).hasClass(C)) t = !1;
                                    else {
                                        var s = p(n).find(w)[0];
                                        s && p(s).removeClass(C);
                                    }
                                if (t) {
                                    if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                    (i.checked = !p(this._element).hasClass(C)), p(i).trigger("change");
                                }
                                i.focus(), (e = !1);
                            }
                        }
                        e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C);
                    }),
                    (e.dispose = function () {
                        p.removeData(this._element, v), (this._element = null);
                    }),
                    (t._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = p(this).data(v);
                            n || ((n = new t(this)), p(this).data(v, n)), "toggle" === e && n[e]();
                        });
                    }),
                    s(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                    ]),
                    t
                );
            })()),
            p(document)
                .on(O.CLICK_DATA_API, b, function (t) {
                    t.preventDefault();
                    var e = t.target;
                    p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle");
                })
                .on(O.FOCUS_BLUR_DATA_API, b, function (t) {
                    var e = p(t.target).closest(N)[0];
                    p(e).toggleClass(A, /^focus(in)?$/.test(t.type));
                }),
            (p.fn[m] = k._jQueryInterface),
            (p.fn[m].Constructor = k),
            (p.fn[m].noConflict = function () {
                return (p.fn[m] = y), k._jQueryInterface;
            }),
            k),
        j = (function (t) {
            var e = "carousel",
                n = "bs.carousel",
                i = "." + n,
                o = t.fn[e],
                a = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
                l = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
                h = "next",
                c = "prev",
                u = "left",
                f = "right",
                d = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load" + i + ".data-api",
                    CLICK_DATA_API: "click" + i + ".data-api",
                },
                _ = "carousel",
                g = "active",
                p = "slide",
                m = "carousel-item-right",
                v = "carousel-item-left",
                E = "carousel-item-next",
                T = "carousel-item-prev",
                y = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]',
                },
                C = (function () {
                    function o(e, n) {
                        (this._items = null),
                            (this._interval = null),
                            (this._activeElement = null),
                            (this._isPaused = !1),
                            (this._isSliding = !1),
                            (this.touchTimeout = null),
                            (this._config = this._getConfig(n)),
                            (this._element = t(e)[0]),
                            (this._indicatorsElement = t(this._element).find(y.INDICATORS)[0]),
                            this._addEventListeners();
                    }
                    var C = o.prototype;
                    return (
                        (C.next = function () {
                            this._isSliding || this._slide(h);
                        }),
                        (C.nextWhenVisible = function () {
                            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
                        }),
                        (C.prev = function () {
                            this._isSliding || this._slide(c);
                        }),
                        (C.pause = function (e) {
                            e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                        }),
                        (C.cycle = function (t) {
                            t || (this._isPaused = !1),
                                this._interval && (clearInterval(this._interval), (this._interval = null)),
                                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                        }),
                        (C.to = function (e) {
                            var n = this;
                            this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
                            var i = this._getItemIndex(this._activeElement);
                            if (!(e > this._items.length - 1 || e < 0))
                                if (this._isSliding)
                                    t(this._element).one(d.SLID, function () {
                                        return n.to(e);
                                    });
                                else {
                                    if (i === e) return this.pause(), void this.cycle();
                                    var s = e > i ? h : c;
                                    this._slide(s, this._items[e]);
                                }
                        }),
                        (C.dispose = function () {
                            t(this._element).off(i),
                                t.removeData(this._element, n),
                                (this._items = null),
                                (this._config = null),
                                (this._element = null),
                                (this._interval = null),
                                (this._isPaused = null),
                                (this._isSliding = null),
                                (this._activeElement = null),
                                (this._indicatorsElement = null);
                        }),
                        (C._getConfig = function (t) {
                            return (t = r({}, a, t)), P.typeCheckConfig(e, t, l), t;
                        }),
                        (C._addEventListeners = function () {
                            var e = this;
                            this._config.keyboard &&
                                t(this._element).on(d.KEYDOWN, function (t) {
                                    return e._keydown(t);
                                }),
                                "hover" === this._config.pause &&
                                    (t(this._element)
                                        .on(d.MOUSEENTER, function (t) {
                                            return e.pause(t);
                                        })
                                        .on(d.MOUSELEAVE, function (t) {
                                            return e.cycle(t);
                                        }),
                                    "ontouchstart" in document.documentElement &&
                                        t(this._element).on(d.TOUCHEND, function () {
                                            e.pause(),
                                                e.touchTimeout && clearTimeout(e.touchTimeout),
                                                (e.touchTimeout = setTimeout(function (t) {
                                                    return e.cycle(t);
                                                }, 500 + e._config.interval));
                                        }));
                        }),
                        (C._keydown = function (t) {
                            if (!/input|textarea/i.test(t.target.tagName))
                                switch (t.which) {
                                    case 37:
                                        t.preventDefault(), this.prev();
                                        break;
                                    case 39:
                                        t.preventDefault(), this.next();
                                }
                        }),
                        (C._getItemIndex = function (e) {
                            return (this._items = t.makeArray(t(e).parent().find(y.ITEM))), this._items.indexOf(e);
                        }),
                        (C._getItemByDirection = function (t, e) {
                            var n = t === h,
                                i = t === c,
                                s = this._getItemIndex(e),
                                r = this._items.length - 1;
                            if (((i && 0 === s) || (n && s === r)) && !this._config.wrap) return e;
                            var o = (s + (t === c ? -1 : 1)) % this._items.length;
                            return -1 === o ? this._items[this._items.length - 1] : this._items[o];
                        }),
                        (C._triggerSlideEvent = function (e, n) {
                            var i = this._getItemIndex(e),
                                s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
                                r = t.Event(d.SLIDE, { relatedTarget: e, direction: n, from: s, to: i });
                            return t(this._element).trigger(r), r;
                        }),
                        (C._setActiveIndicatorElement = function (e) {
                            if (this._indicatorsElement) {
                                t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
                                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                                n && t(n).addClass(g);
                            }
                        }),
                        (C._slide = function (e, n) {
                            var i,
                                s,
                                r,
                                o = this,
                                a = t(this._element).find(y.ACTIVE_ITEM)[0],
                                l = this._getItemIndex(a),
                                c = n || (a && this._getItemByDirection(e, a)),
                                _ = this._getItemIndex(c),
                                C = Boolean(this._interval);
                            if ((e === h ? ((i = v), (s = E), (r = u)) : ((i = m), (s = T), (r = f)), c && t(c).hasClass(g))) this._isSliding = !1;
                            else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
                                (this._isSliding = !0), C && this.pause(), this._setActiveIndicatorElement(c);
                                var I = t.Event(d.SLID, { relatedTarget: c, direction: r, from: l, to: _ });
                                P.supportsTransitionEnd() && t(this._element).hasClass(p)
                                    ? (t(c).addClass(s),
                                      P.reflow(c),
                                      t(a).addClass(i),
                                      t(c).addClass(i),
                                      t(a)
                                          .one(P.TRANSITION_END, function () {
                                              t(c)
                                                  .removeClass(i + " " + s)
                                                  .addClass(g),
                                                  t(a).removeClass(g + " " + s + " " + i),
                                                  (o._isSliding = !1),
                                                  setTimeout(function () {
                                                      return t(o._element).trigger(I);
                                                  }, 0);
                                          })
                                          .emulateTransitionEnd(600))
                                    : (t(a).removeClass(g), t(c).addClass(g), (this._isSliding = !1), t(this._element).trigger(I)),
                                    C && this.cycle();
                            }
                        }),
                        (o._jQueryInterface = function (e) {
                            return this.each(function () {
                                var i = t(this).data(n),
                                    s = r({}, a, t(this).data());
                                "object" == typeof e && (s = r({}, s, e));
                                var l = "string" == typeof e ? e : s.slide;
                                if ((i || ((i = new o(this, s)), t(this).data(n, i)), "number" == typeof e)) i.to(e);
                                else if ("string" == typeof l) {
                                    if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');
                                    i[l]();
                                } else s.interval && (i.pause(), i.cycle());
                            });
                        }),
                        (o._dataApiClickHandler = function (e) {
                            var i = P.getSelectorFromElement(this);
                            if (i) {
                                var s = t(i)[0];
                                if (s && t(s).hasClass(_)) {
                                    var a = r({}, t(s).data(), t(this).data()),
                                        l = this.getAttribute("data-slide-to");
                                    l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault();
                                }
                            }
                        }),
                        s(o, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return a;
                                },
                            },
                        ]),
                        o
                    );
                })();
            return (
                t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler),
                t(window).on(d.LOAD_DATA_API, function () {
                    t(y.DATA_RIDE).each(function () {
                        var e = t(this);
                        C._jQueryInterface.call(e, e.data());
                    });
                }),
                (t.fn[e] = C._jQueryInterface),
                (t.fn[e].Constructor = C),
                (t.fn[e].noConflict = function () {
                    return (t.fn[e] = o), C._jQueryInterface;
                }),
                C
            );
        })(e),
        H = (function (t) {
            var e = "collapse",
                n = "bs.collapse",
                i = "." + n,
                o = t.fn[e],
                a = { toggle: !0, parent: "" },
                l = { toggle: "boolean", parent: "(string|element)" },
                h = { SHOW: "show" + i, SHOWN: "shown" + i, HIDE: "hide" + i, HIDDEN: "hidden" + i, CLICK_DATA_API: "click" + i + ".data-api" },
                c = "show",
                u = "collapse",
                f = "collapsing",
                d = "collapsed",
                _ = "width",
                g = "height",
                p = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
                m = (function () {
                    function i(e, n) {
                        (this._isTransitioning = !1),
                            (this._element = e),
                            (this._config = this._getConfig(n)),
                            (this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                        for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
                            var r = i[s],
                                o = P.getSelectorFromElement(r);
                            null !== o && t(o).filter(e).length > 0 && ((this._selector = o), this._triggerArray.push(r));
                        }
                        (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                    }
                    var o = i.prototype;
                    return (
                        (o.toggle = function () {
                            t(this._element).hasClass(c) ? this.hide() : this.show();
                        }),
                        (o.show = function () {
                            var e,
                                s,
                                r = this;
                            if (
                                !this._isTransitioning &&
                                !t(this._element).hasClass(c) &&
                                (this._parent &&
                                    0 ===
                                        (e = t.makeArray(
                                            t(this._parent)
                                                .find(p.ACTIVES)
                                                .filter('[data-parent="' + this._config.parent + '"]')
                                        )).length &&
                                    (e = null),
                                !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))
                            ) {
                                var o = t.Event(h.SHOW);
                                if ((t(this._element).trigger(o), !o.isDefaultPrevented())) {
                                    e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));
                                    var a = this._getDimension();
                                    t(this._element).removeClass(u).addClass(f), (this._element.style[a] = 0), this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var l = function () {
                                        t(r._element).removeClass(f).addClass(u).addClass(c), (r._element.style[a] = ""), r.setTransitioning(!1), t(r._element).trigger(h.SHOWN);
                                    };
                                    if (P.supportsTransitionEnd()) {
                                        var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                        t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), (this._element.style[a] = this._element[_] + "px");
                                    } else l();
                                }
                            }
                        }),
                        (o.hide = function () {
                            var e = this;
                            if (!this._isTransitioning && t(this._element).hasClass(c)) {
                                var n = t.Event(h.HIDE);
                                if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                                    var i = this._getDimension();
                                    if (((this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"), P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0))
                                        for (var s = 0; s < this._triggerArray.length; s++) {
                                            var r = this._triggerArray[s],
                                                o = P.getSelectorFromElement(r);
                                            if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1);
                                        }
                                    this.setTransitioning(!0);
                                    var a = function () {
                                        e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN);
                                    };
                                    (this._element.style[i] = ""), P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a();
                                }
                            }
                        }),
                        (o.setTransitioning = function (t) {
                            this._isTransitioning = t;
                        }),
                        (o.dispose = function () {
                            t.removeData(this._element, n), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                        }),
                        (o._getConfig = function (t) {
                            return ((t = r({}, a, t)).toggle = Boolean(t.toggle)), P.typeCheckConfig(e, t, l), t;
                        }),
                        (o._getDimension = function () {
                            return t(this._element).hasClass(_) ? _ : g;
                        }),
                        (o._getParent = function () {
                            var e = this,
                                n = null;
                            P.isElement(this._config.parent) ? ((n = this._config.parent), "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : (n = t(this._config.parent)[0]);
                            var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return (
                                t(n)
                                    .find(s)
                                    .each(function (t, n) {
                                        e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
                                    }),
                                n
                            );
                        }),
                        (o._addAriaAndCollapsedClass = function (e, n) {
                            if (e) {
                                var i = t(e).hasClass(c);
                                n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i);
                            }
                        }),
                        (i._getTargetFromElement = function (e) {
                            var n = P.getSelectorFromElement(e);
                            return n ? t(n)[0] : null;
                        }),
                        (i._jQueryInterface = function (e) {
                            return this.each(function () {
                                var s = t(this),
                                    o = s.data(n),
                                    l = r({}, a, s.data(), "object" == typeof e && e);
                                if ((!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || ((o = new i(this, l)), s.data(n, o)), "string" == typeof e)) {
                                    if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                                    o[e]();
                                }
                            });
                        }),
                        s(i, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return a;
                                },
                            },
                        ]),
                        i
                    );
                })();
            return (
                t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
                    "A" === e.currentTarget.tagName && e.preventDefault();
                    var i = t(this),
                        s = P.getSelectorFromElement(this);
                    t(s).each(function () {
                        var e = t(this),
                            s = e.data(n) ? "toggle" : i.data();
                        m._jQueryInterface.call(e, s);
                    });
                }),
                (t.fn[e] = m._jQueryInterface),
                (t.fn[e].Constructor = m),
                (t.fn[e].noConflict = function () {
                    return (t.fn[e] = o), m._jQueryInterface;
                }),
                m
            );
        })(e),
        W = (function (t) {
            var e = "dropdown",
                i = "bs.dropdown",
                o = "." + i,
                a = ".data-api",
                l = t.fn[e],
                h = new RegExp("38|40|27"),
                c = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click" + o + a, KEYDOWN_DATA_API: "keydown" + o + a, KEYUP_DATA_API: "keyup" + o + a },
                u = "disabled",
                f = "show",
                d = "dropup",
                _ = "dropright",
                g = "dropleft",
                p = "dropdown-menu-right",
                m = "dropdown-menu-left",
                v = "position-static",
                E = '[data-toggle="dropdown"]',
                T = ".dropdown form",
                y = ".dropdown-menu",
                C = ".navbar-nav",
                I = ".dropdown-menu .dropdown-item:not(.disabled)",
                A = "top-start",
                b = "top-end",
                D = "bottom-start",
                S = "bottom-end",
                w = "right-start",
                N = "left-start",
                O = { offset: 0, flip: !0, boundary: "scrollParent" },
                k = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)" },
                L = (function () {
                    function a(t, e) {
                        (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
                    }
                    var l = a.prototype;
                    return (
                        (l.toggle = function () {
                            if (!this._element.disabled && !t(this._element).hasClass(u)) {
                                var e = a._getParentFromElement(this._element),
                                    i = t(this._menu).hasClass(f);
                                if ((a._clearMenus(), !i)) {
                                    var s = { relatedTarget: this._element },
                                        r = t.Event(c.SHOW, s);
                                    if ((t(e).trigger(r), !r.isDefaultPrevented())) {
                                        if (!this._inNavbar) {
                                            if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                            var o = this._element;
                                            t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e),
                                                "scrollParent" !== this._config.boundary && t(e).addClass(v),
                                                (this._popper = new n(o, this._menu, this._getPopperConfig()));
                                        }
                                        "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop),
                                            this._element.focus(),
                                            this._element.setAttribute("aria-expanded", !0),
                                            t(this._menu).toggleClass(f),
                                            t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s));
                                    }
                                }
                            }
                        }),
                        (l.dispose = function () {
                            t.removeData(this._element, i), t(this._element).off(o), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
                        }),
                        (l.update = function () {
                            (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                        }),
                        (l._addEventListeners = function () {
                            var e = this;
                            t(this._element).on(c.CLICK, function (t) {
                                t.preventDefault(), t.stopPropagation(), e.toggle();
                            });
                        }),
                        (l._getConfig = function (n) {
                            return (n = r({}, this.constructor.Default, t(this._element).data(), n)), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
                        }),
                        (l._getMenuElement = function () {
                            if (!this._menu) {
                                var e = a._getParentFromElement(this._element);
                                this._menu = t(e).find(y)[0];
                            }
                            return this._menu;
                        }),
                        (l._getPlacement = function () {
                            var e = t(this._element).parent(),
                                n = D;
                            return e.hasClass(d) ? ((n = A), t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? (n = w) : e.hasClass(g) ? (n = N) : t(this._menu).hasClass(p) && (n = S), n;
                        }),
                        (l._detectNavbar = function () {
                            return t(this._element).closest(".navbar").length > 0;
                        }),
                        (l._getPopperConfig = function () {
                            var t = this,
                                e = {};
                            return (
                                "function" == typeof this._config.offset
                                    ? (e.fn = function (e) {
                                          return (e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {})), e;
                                      })
                                    : (e.offset = this._config.offset),
                                { placement: this._getPlacement(), modifiers: { offset: e, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }
                            );
                        }),
                        (a._jQueryInterface = function (e) {
                            return this.each(function () {
                                var n = t(this).data(i);
                                if ((n || ((n = new a(this, "object" == typeof e ? e : null)), t(this).data(i, n)), "string" == typeof e)) {
                                    if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                                    n[e]();
                                }
                            });
                        }),
                        (a._clearMenus = function (e) {
                            if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
                                for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
                                    var r = a._getParentFromElement(n[s]),
                                        o = t(n[s]).data(i),
                                        l = { relatedTarget: n[s] };
                                    if (o) {
                                        var h = o._menu;
                                        if (t(r).hasClass(f) && !(e && (("click" === e.type && /input|textarea/i.test(e.target.tagName)) || ("keyup" === e.type && 9 === e.which)) && t.contains(r, e.target))) {
                                            var u = t.Event(c.HIDE, l);
                                            t(r).trigger(u),
                                                u.isDefaultPrevented() ||
                                                    ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                                                    n[s].setAttribute("aria-expanded", "false"),
                                                    t(h).removeClass(f),
                                                    t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)));
                                        }
                                    }
                                }
                        }),
                        (a._getParentFromElement = function (e) {
                            var n,
                                i = P.getSelectorFromElement(e);
                            return i && (n = t(i)[0]), n || e.parentNode;
                        }),
                        (a._dataApiKeydownHandler = function (e) {
                            if (
                                (/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || (27 !== e.which && ((40 !== e.which && 38 !== e.which) || t(e.target).closest(y).length))) : h.test(e.which)) &&
                                (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))
                            ) {
                                var n = a._getParentFromElement(this),
                                    i = t(n).hasClass(f);
                                if ((i || (27 === e.which && 32 === e.which)) && (!i || (27 !== e.which && 32 !== e.which))) {
                                    var s = t(n).find(I).get();
                                    if (0 !== s.length) {
                                        var r = s.indexOf(e.target);
                                        38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus();
                                    }
                                } else {
                                    if (27 === e.which) {
                                        var o = t(n).find(E)[0];
                                        t(o).trigger("focus");
                                    }
                                    t(this).trigger("click");
                                }
                            }
                        }),
                        s(a, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return O;
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return k;
                                },
                            },
                        ]),
                        a
                    );
                })();
            return (
                t(document)
                    .on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler)
                    .on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler)
                    .on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus)
                    .on(c.CLICK_DATA_API, E, function (e) {
                        e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle");
                    })
                    .on(c.CLICK_DATA_API, T, function (t) {
                        t.stopPropagation();
                    }),
                (t.fn[e] = L._jQueryInterface),
                (t.fn[e].Constructor = L),
                (t.fn[e].noConflict = function () {
                    return (t.fn[e] = l), L._jQueryInterface;
                }),
                L
            );
        })(e),
        M = (function (t) {
            var e = "modal",
                n = "bs.modal",
                i = "." + n,
                o = t.fn.modal,
                a = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                l = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                h = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    FOCUSIN: "focusin" + i,
                    RESIZE: "resize" + i,
                    CLICK_DISMISS: "click.dismiss" + i,
                    KEYDOWN_DISMISS: "keydown.dismiss" + i,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + i,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
                    CLICK_DATA_API: "click" + i + ".data-api",
                },
                c = "modal-scrollbar-measure",
                u = "modal-backdrop",
                f = "modal-open",
                d = "fade",
                _ = "show",
                g = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler",
                },
                p = (function () {
                    function o(e, n) {
                        (this._config = this._getConfig(n)),
                            (this._element = e),
                            (this._dialog = t(e).find(g.DIALOG)[0]),
                            (this._backdrop = null),
                            (this._isShown = !1),
                            (this._isBodyOverflowing = !1),
                            (this._ignoreBackdropClick = !1),
                            (this._originalBodyPadding = 0),
                            (this._scrollbarWidth = 0);
                    }
                    var p = o.prototype;
                    return (
                        (p.toggle = function (t) {
                            return this._isShown ? this.hide() : this.show(t);
                        }),
                        (p.show = function (e) {
                            var n = this;
                            if (!this._isTransitioning && !this._isShown) {
                                P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
                                var i = t.Event(h.SHOW, { relatedTarget: e });
                                t(this._element).trigger(i),
                                    this._isShown ||
                                        i.isDefaultPrevented() ||
                                        ((this._isShown = !0),
                                        this._checkScrollbar(),
                                        this._setScrollbar(),
                                        this._adjustDialog(),
                                        t(document.body).addClass(f),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) {
                                            return n.hide(t);
                                        }),
                                        t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
                                            t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
                                                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                                            });
                                        }),
                                        this._showBackdrop(function () {
                                            return n._showElement(e);
                                        }));
                            }
                        }),
                        (p.hide = function (e) {
                            var n = this;
                            if ((e && e.preventDefault(), !this._isTransitioning && this._isShown)) {
                                var i = t.Event(h.HIDE);
                                if ((t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                                    this._isShown = !1;
                                    var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                                    s && (this._isTransitioning = !0),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        t(document).off(h.FOCUSIN),
                                        t(this._element).removeClass(_),
                                        t(this._element).off(h.CLICK_DISMISS),
                                        t(this._dialog).off(h.MOUSEDOWN_DISMISS),
                                        s
                                            ? t(this._element)
                                                  .one(P.TRANSITION_END, function (t) {
                                                      return n._hideModal(t);
                                                  })
                                                  .emulateTransitionEnd(300)
                                            : this._hideModal();
                                }
                            }
                        }),
                        (p.dispose = function () {
                            t.removeData(this._element, n),
                                t(window, document, this._element, this._backdrop).off(i),
                                (this._config = null),
                                (this._element = null),
                                (this._dialog = null),
                                (this._backdrop = null),
                                (this._isShown = null),
                                (this._isBodyOverflowing = null),
                                (this._ignoreBackdropClick = null),
                                (this._scrollbarWidth = null);
                        }),
                        (p.handleUpdate = function () {
                            this._adjustDialog();
                        }),
                        (p._getConfig = function (t) {
                            return (t = r({}, a, t)), P.typeCheckConfig(e, t, l), t;
                        }),
                        (p._showElement = function (e) {
                            var n = this,
                                i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                            (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                                (this._element.style.display = "block"),
                                this._element.removeAttribute("aria-hidden"),
                                (this._element.scrollTop = 0),
                                i && P.reflow(this._element),
                                t(this._element).addClass(_),
                                this._config.focus && this._enforceFocus();
                            var s = t.Event(h.SHOWN, { relatedTarget: e }),
                                r = function () {
                                    n._config.focus && n._element.focus(), (n._isTransitioning = !1), t(n._element).trigger(s);
                                };
                            i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r();
                        }),
                        (p._enforceFocus = function () {
                            var e = this;
                            t(document)
                                .off(h.FOCUSIN)
                                .on(h.FOCUSIN, function (n) {
                                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
                                });
                        }),
                        (p._setEscapeEvent = function () {
                            var e = this;
                            this._isShown && this._config.keyboard
                                ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
                                      27 === t.which && (t.preventDefault(), e.hide());
                                  })
                                : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS);
                        }),
                        (p._setResizeEvent = function () {
                            var e = this;
                            this._isShown
                                ? t(window).on(h.RESIZE, function (t) {
                                      return e.handleUpdate(t);
                                  })
                                : t(window).off(h.RESIZE);
                        }),
                        (p._hideModal = function () {
                            var e = this;
                            (this._element.style.display = "none"),
                                this._element.setAttribute("aria-hidden", !0),
                                (this._isTransitioning = !1),
                                this._showBackdrop(function () {
                                    t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN);
                                });
                        }),
                        (p._removeBackdrop = function () {
                            this._backdrop && (t(this._backdrop).remove(), (this._backdrop = null));
                        }),
                        (p._showBackdrop = function (e) {
                            var n = this,
                                i = t(this._element).hasClass(d) ? d : "";
                            if (this._isShown && this._config.backdrop) {
                                var s = P.supportsTransitionEnd() && i;
                                if (
                                    ((this._backdrop = document.createElement("div")),
                                    (this._backdrop.className = u),
                                    i && t(this._backdrop).addClass(i),
                                    t(this._backdrop).appendTo(document.body),
                                    t(this._element).on(h.CLICK_DISMISS, function (t) {
                                        n._ignoreBackdropClick ? (n._ignoreBackdropClick = !1) : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
                                    }),
                                    s && P.reflow(this._backdrop),
                                    t(this._backdrop).addClass(_),
                                    !e)
                                )
                                    return;
                                if (!s) return void e();
                                t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150);
                            } else if (!this._isShown && this._backdrop) {
                                t(this._backdrop).removeClass(_);
                                var r = function () {
                                    n._removeBackdrop(), e && e();
                                };
                                P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r();
                            } else e && e();
                        }),
                        (p._adjustDialog = function () {
                            var t = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                        }),
                        (p._resetAdjustments = function () {
                            (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                        }),
                        (p._checkScrollbar = function () {
                            var t = document.body.getBoundingClientRect();
                            (this._isBodyOverflowing = t.left + t.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                        }),
                        (p._setScrollbar = function () {
                            var e = this;
                            if (this._isBodyOverflowing) {
                                t(g.FIXED_CONTENT).each(function (n, i) {
                                    var s = t(i)[0].style.paddingRight,
                                        r = t(i).css("padding-right");
                                    t(i)
                                        .data("padding-right", s)
                                        .css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
                                }),
                                    t(g.STICKY_CONTENT).each(function (n, i) {
                                        var s = t(i)[0].style.marginRight,
                                            r = t(i).css("margin-right");
                                        t(i)
                                            .data("margin-right", s)
                                            .css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
                                    }),
                                    t(g.NAVBAR_TOGGLER).each(function (n, i) {
                                        var s = t(i)[0].style.marginRight,
                                            r = t(i).css("margin-right");
                                        t(i)
                                            .data("margin-right", s)
                                            .css("margin-right", parseFloat(r) + e._scrollbarWidth + "px");
                                    });
                                var n = document.body.style.paddingRight,
                                    i = t("body").css("padding-right");
                                t("body")
                                    .data("padding-right", n)
                                    .css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
                            }
                        }),
                        (p._resetScrollbar = function () {
                            t(g.FIXED_CONTENT).each(function (e, n) {
                                var i = t(n).data("padding-right");
                                "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right");
                            }),
                                t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (e, n) {
                                    var i = t(n).data("margin-right");
                                    "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right");
                                });
                            var e = t("body").data("padding-right");
                            "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right");
                        }),
                        (p._getScrollbarWidth = function () {
                            var t = document.createElement("div");
                            (t.className = c), document.body.appendChild(t);
                            var e = t.getBoundingClientRect().width - t.clientWidth;
                            return document.body.removeChild(t), e;
                        }),
                        (o._jQueryInterface = function (e, i) {
                            return this.each(function () {
                                var s = t(this).data(n),
                                    a = r({}, o.Default, t(this).data(), "object" == typeof e && e);
                                if ((s || ((s = new o(this, a)), t(this).data(n, s)), "string" == typeof e)) {
                                    if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');
                                    s[e](i);
                                } else a.show && s.show(i);
                            });
                        }),
                        s(o, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return a;
                                },
                            },
                        ]),
                        o
                    );
                })();
            return (
                t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
                    var i,
                        s = this,
                        o = P.getSelectorFromElement(this);
                    o && (i = t(o)[0]);
                    var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
                    ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
                    var l = t(i).one(h.SHOW, function (e) {
                        e.isDefaultPrevented() ||
                            l.one(h.HIDDEN, function () {
                                t(s).is(":visible") && s.focus();
                            });
                    });
                    p._jQueryInterface.call(t(i), a, this);
                }),
                (t.fn.modal = p._jQueryInterface),
                (t.fn.modal.Constructor = p),
                (t.fn.modal.noConflict = function () {
                    return (t.fn.modal = o), p._jQueryInterface;
                }),
                p
            );
        })(e),
        U = (function (t) {
            var e = "tooltip",
                i = "bs.tooltip",
                o = "." + i,
                a = t.fn[e],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                h = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                },
                c = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
                u = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                },
                f = "show",
                d = "out",
                _ = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    INSERTED: "inserted" + o,
                    CLICK: "click" + o,
                    FOCUSIN: "focusin" + o,
                    FOCUSOUT: "focusout" + o,
                    MOUSEENTER: "mouseenter" + o,
                    MOUSELEAVE: "mouseleave" + o,
                },
                g = "fade",
                p = "show",
                m = ".tooltip-inner",
                v = ".arrow",
                E = "hover",
                T = "focus",
                y = "click",
                C = "manual",
                I = (function () {
                    function a(t, e) {
                        if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        (this._isEnabled = !0),
                            (this._timeout = 0),
                            (this._hoverState = ""),
                            (this._activeTrigger = {}),
                            (this._popper = null),
                            (this.element = t),
                            (this.config = this._getConfig(e)),
                            (this.tip = null),
                            this._setListeners();
                    }
                    var I = a.prototype;
                    return (
                        (I.enable = function () {
                            this._isEnabled = !0;
                        }),
                        (I.disable = function () {
                            this._isEnabled = !1;
                        }),
                        (I.toggleEnabled = function () {
                            this._isEnabled = !this._isEnabled;
                        }),
                        (I.toggle = function (e) {
                            if (this._isEnabled)
                                if (e) {
                                    var n = this.constructor.DATA_KEY,
                                        i = t(e.currentTarget).data(n);
                                    i || ((i = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(n, i)),
                                        (i._activeTrigger.click = !i._activeTrigger.click),
                                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                                } else {
                                    if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);
                                    this._enter(null, this);
                                }
                        }),
                        (I.dispose = function () {
                            clearTimeout(this._timeout),
                                t.removeData(this.element, this.constructor.DATA_KEY),
                                t(this.element).off(this.constructor.EVENT_KEY),
                                t(this.element).closest(".modal").off("hide.bs.modal"),
                                this.tip && t(this.tip).remove(),
                                (this._isEnabled = null),
                                (this._timeout = null),
                                (this._hoverState = null),
                                (this._activeTrigger = null),
                                null !== this._popper && this._popper.destroy(),
                                (this._popper = null),
                                (this.element = null),
                                (this.config = null),
                                (this.tip = null);
                        }),
                        (I.show = function () {
                            var e = this;
                            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                            var i = t.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                t(this.element).trigger(i);
                                var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                                if (i.isDefaultPrevented() || !s) return;
                                var r = this.getTipElement(),
                                    o = P.getUID(this.constructor.NAME);
                                r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);
                                var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                    h = this._getAttachment(l);
                                this.addAttachmentClass(h);
                                var c = !1 === this.config.container ? document.body : t(this.config.container);
                                t(r).data(this.constructor.DATA_KEY, this),
                                    t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c),
                                    t(this.element).trigger(this.constructor.Event.INSERTED),
                                    (this._popper = new n(this.element, r, {
                                        placement: h,
                                        modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: v }, preventOverflow: { boundariesElement: this.config.boundary } },
                                        onCreate: function (t) {
                                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                                        },
                                        onUpdate: function (t) {
                                            e._handlePopperPlacementChange(t);
                                        },
                                    })),
                                    t(r).addClass(p),
                                    "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                                var u = function () {
                                    e.config.animation && e._fixTransition();
                                    var n = e._hoverState;
                                    (e._hoverState = null), t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e);
                                };
                                P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u();
                            }
                        }),
                        (I.hide = function (e) {
                            var n = this,
                                i = this.getTipElement(),
                                s = t.Event(this.constructor.Event.HIDE),
                                r = function () {
                                    n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i),
                                        n._cleanTipClass(),
                                        n.element.removeAttribute("aria-describedby"),
                                        t(n.element).trigger(n.constructor.Event.HIDDEN),
                                        null !== n._popper && n._popper.destroy(),
                                        e && e();
                                };
                            t(this.element).trigger(s),
                                s.isDefaultPrevented() ||
                                    (t(i).removeClass(p),
                                    "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                                    (this._activeTrigger[y] = !1),
                                    (this._activeTrigger[T] = !1),
                                    (this._activeTrigger[E] = !1),
                                    P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(),
                                    (this._hoverState = ""));
                        }),
                        (I.update = function () {
                            null !== this._popper && this._popper.scheduleUpdate();
                        }),
                        (I.isWithContent = function () {
                            return Boolean(this.getTitle());
                        }),
                        (I.addAttachmentClass = function (e) {
                            t(this.getTipElement()).addClass("bs-tooltip-" + e);
                        }),
                        (I.getTipElement = function () {
                            return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
                        }),
                        (I.setContent = function () {
                            var e = t(this.getTipElement());
                            this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p);
                        }),
                        (I.setElementContent = function (e, n) {
                            var i = this.config.html;
                            "object" == typeof n && (n.nodeType || n.jquery) ? (i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())) : e[i ? "html" : "text"](n);
                        }),
                        (I.getTitle = function () {
                            var t = this.element.getAttribute("data-original-title");
                            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                        }),
                        (I._getAttachment = function (t) {
                            return c[t.toUpperCase()];
                        }),
                        (I._setListeners = function () {
                            var e = this;
                            this.config.trigger.split(" ").forEach(function (n) {
                                if ("click" === n)
                                    t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                                        return e.toggle(t);
                                    });
                                else if (n !== C) {
                                    var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                        s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                    t(e.element)
                                        .on(i, e.config.selector, function (t) {
                                            return e._enter(t);
                                        })
                                        .on(s, e.config.selector, function (t) {
                                            return e._leave(t);
                                        });
                                }
                                t(e.element)
                                    .closest(".modal")
                                    .on("hide.bs.modal", function () {
                                        return e.hide();
                                    });
                            }),
                                this.config.selector ? (this.config = r({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                        }),
                        (I._fixTitle = function () {
                            var t = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                        }),
                        (I._enter = function (e, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || t(e.currentTarget).data(i)) || ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(i, n)),
                                e && (n._activeTrigger["focusin" === e.type ? T : E] = !0),
                                t(n.getTipElement()).hasClass(p) || n._hoverState === f
                                    ? (n._hoverState = f)
                                    : (clearTimeout(n._timeout),
                                      (n._hoverState = f),
                                      n.config.delay && n.config.delay.show
                                          ? (n._timeout = setTimeout(function () {
                                                n._hoverState === f && n.show();
                                            }, n.config.delay.show))
                                          : n.show());
                        }),
                        (I._leave = function (e, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || t(e.currentTarget).data(i)) || ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), t(e.currentTarget).data(i, n)),
                                e && (n._activeTrigger["focusout" === e.type ? T : E] = !1),
                                n._isWithActiveTrigger() ||
                                    (clearTimeout(n._timeout),
                                    (n._hoverState = d),
                                    n.config.delay && n.config.delay.hide
                                        ? (n._timeout = setTimeout(function () {
                                              n._hoverState === d && n.hide();
                                          }, n.config.delay.hide))
                                        : n.hide());
                        }),
                        (I._isWithActiveTrigger = function () {
                            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                            return !1;
                        }),
                        (I._getConfig = function (n) {
                            return (
                                "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }),
                                "number" == typeof n.title && (n.title = n.title.toString()),
                                "number" == typeof n.content && (n.content = n.content.toString()),
                                P.typeCheckConfig(e, n, this.constructor.DefaultType),
                                n
                            );
                        }),
                        (I._getDelegateConfig = function () {
                            var t = {};
                            if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                            return t;
                        }),
                        (I._cleanTipClass = function () {
                            var e = t(this.getTipElement()),
                                n = e.attr("class").match(l);
                            null !== n && n.length > 0 && e.removeClass(n.join(""));
                        }),
                        (I._handlePopperPlacementChange = function (t) {
                            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                        }),
                        (I._fixTransition = function () {
                            var e = this.getTipElement(),
                                n = this.config.animation;
                            null === e.getAttribute("x-placement") && (t(e).removeClass(g), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = n));
                        }),
                        (a._jQueryInterface = function (e) {
                            return this.each(function () {
                                var n = t(this).data(i),
                                    s = "object" == typeof e && e;
                                if ((n || !/dispose|hide/.test(e)) && (n || ((n = new a(this, s)), t(this).data(i, n)), "string" == typeof e)) {
                                    if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                                    n[e]();
                                }
                            });
                        }),
                        s(a, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return u;
                                },
                            },
                            {
                                key: "NAME",
                                get: function () {
                                    return e;
                                },
                            },
                            {
                                key: "DATA_KEY",
                                get: function () {
                                    return i;
                                },
                            },
                            {
                                key: "Event",
                                get: function () {
                                    return _;
                                },
                            },
                            {
                                key: "EVENT_KEY",
                                get: function () {
                                    return o;
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return h;
                                },
                            },
                        ]),
                        a
                    );
                })();
            return (
                (t.fn[e] = I._jQueryInterface),
                (t.fn[e].Constructor = I),
                (t.fn[e].noConflict = function () {
                    return (t.fn[e] = a), I._jQueryInterface;
                }),
                I
            );
        })(e),
        x = (function (t) {
            var e = "popover",
                n = "bs.popover",
                i = "." + n,
                o = t.fn[e],
                a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                l = r({}, U.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
                h = r({}, U.DefaultType, { content: "(string|element|function)" }),
                c = "fade",
                u = "show",
                f = ".popover-header",
                d = ".popover-body",
                _ = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                },
                g = (function (r) {
                    var o, g;
                    function p() {
                        return r.apply(this, arguments) || this;
                    }
                    (g = r), ((o = p).prototype = Object.create(g.prototype)), (o.prototype.constructor = o), (o.__proto__ = g);
                    var m = p.prototype;
                    return (
                        (m.isWithContent = function () {
                            return this.getTitle() || this._getContent();
                        }),
                        (m.addAttachmentClass = function (e) {
                            t(this.getTipElement()).addClass("bs-popover-" + e);
                        }),
                        (m.getTipElement = function () {
                            return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
                        }),
                        (m.setContent = function () {
                            var e = t(this.getTipElement());
                            this.setElementContent(e.find(f), this.getTitle());
                            var n = this._getContent();
                            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u);
                        }),
                        (m._getContent = function () {
                            return this.element.getAttribute("data-content") || this.config.content;
                        }),
                        (m._cleanTipClass = function () {
                            var e = t(this.getTipElement()),
                                n = e.attr("class").match(a);
                            null !== n && n.length > 0 && e.removeClass(n.join(""));
                        }),
                        (p._jQueryInterface = function (e) {
                            return this.each(function () {
                                var i = t(this).data(n),
                                    s = "object" == typeof e ? e : null;
                                if ((i || !/destroy|hide/.test(e)) && (i || ((i = new p(this, s)), t(this).data(n, i)), "string" == typeof e)) {
                                    if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                                    i[e]();
                                }
                            });
                        }),
                        s(p, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return l;
                                },
                            },
                            {
                                key: "NAME",
                                get: function () {
                                    return e;
                                },
                            },
                            {
                                key: "DATA_KEY",
                                get: function () {
                                    return n;
                                },
                            },
                            {
                                key: "Event",
                                get: function () {
                                    return _;
                                },
                            },
                            {
                                key: "EVENT_KEY",
                                get: function () {
                                    return i;
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return h;
                                },
                            },
                        ]),
                        p
                    );
                })(U);
            return (
                (t.fn[e] = g._jQueryInterface),
                (t.fn[e].Constructor = g),
                (t.fn[e].noConflict = function () {
                    return (t.fn[e] = o), g._jQueryInterface;
                }),
                g
            );
        })(e),
        K = (function (t) {
            var e = "scrollspy",
                n = "bs.scrollspy",
                i = "." + n,
                o = t.fn[e],
                a = { offset: 10, method: "auto", target: "" },
                l = { offset: "number", method: "string", target: "(string|element)" },
                h = { ACTIVATE: "activate" + i, SCROLL: "scroll" + i, LOAD_DATA_API: "load" + i + ".data-api" },
                c = "dropdown-item",
                u = "active",
                f = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                },
                d = "offset",
                _ = "position",
                g = (function () {
                    function o(e, n) {
                        var i = this;
                        (this._element = e),
                            (this._scrollElement = "BODY" === e.tagName ? window : e),
                            (this._config = this._getConfig(n)),
                            (this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS),
                            (this._offsets = []),
                            (this._targets = []),
                            (this._activeTarget = null),
                            (this._scrollHeight = 0),
                            t(this._scrollElement).on(h.SCROLL, function (t) {
                                return i._process(t);
                            }),
                            this.refresh(),
                            this._process();
                    }
                    var g = o.prototype;
                    return (
                        (g.refresh = function () {
                            var e = this,
                                n = this._scrollElement === this._scrollElement.window ? d : _,
                                i = "auto" === this._config.method ? n : this._config.method,
                                s = i === _ ? this._getScrollTop() : 0;
                            (this._offsets = []),
                                (this._targets = []),
                                (this._scrollHeight = this._getScrollHeight()),
                                t
                                    .makeArray(t(this._selector))
                                    .map(function (e) {
                                        var n,
                                            r = P.getSelectorFromElement(e);
                                        if ((r && (n = t(r)[0]), n)) {
                                            var o = n.getBoundingClientRect();
                                            if (o.width || o.height) return [t(n)[i]().top + s, r];
                                        }
                                        return null;
                                    })
                                    .filter(function (t) {
                                        return t;
                                    })
                                    .sort(function (t, e) {
                                        return t[0] - e[0];
                                    })
                                    .forEach(function (t) {
                                        e._offsets.push(t[0]), e._targets.push(t[1]);
                                    });
                        }),
                        (g.dispose = function () {
                            t.removeData(this._element, n),
                                t(this._scrollElement).off(i),
                                (this._element = null),
                                (this._scrollElement = null),
                                (this._config = null),
                                (this._selector = null),
                                (this._offsets = null),
                                (this._targets = null),
                                (this._activeTarget = null),
                                (this._scrollHeight = null);
                        }),
                        (g._getConfig = function (n) {
                            if ("string" != typeof (n = r({}, a, n)).target) {
                                var i = t(n.target).attr("id");
                                i || ((i = P.getUID(e)), t(n.target).attr("id", i)), (n.target = "#" + i);
                            }
                            return P.typeCheckConfig(e, n, l), n;
                        }),
                        (g._getScrollTop = function () {
                            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                        }),
                        (g._getScrollHeight = function () {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                        }),
                        (g._getOffsetHeight = function () {
                            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                        }),
                        (g._process = function () {
                            var t = this._getScrollTop() + this._config.offset,
                                e = this._getScrollHeight(),
                                n = this._config.offset + e - this._getOffsetHeight();
                            if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                                var i = this._targets[this._targets.length - 1];
                                this._activeTarget !== i && this._activate(i);
                            } else {
                                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                                for (var s = this._offsets.length; s--; ) {
                                    this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]);
                                }
                            }
                        }),
                        (g._activate = function (e) {
                            (this._activeTarget = e), this._clear();
                            var n = this._selector.split(",");
                            n = n.map(function (t) {
                                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                            });
                            var i = t(n.join(","));
                            i.hasClass(c)
                                ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u))
                                : (i.addClass(u),
                                  i
                                      .parents(f.NAV_LIST_GROUP)
                                      .prev(f.NAV_LINKS + ", " + f.LIST_ITEMS)
                                      .addClass(u),
                                  i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),
                                t(this._scrollElement).trigger(h.ACTIVATE, { relatedTarget: e });
                        }),
                        (g._clear = function () {
                            t(this._selector).filter(f.ACTIVE).removeClass(u);
                        }),
                        (o._jQueryInterface = function (e) {
                            return this.each(function () {
                                var i = t(this).data(n);
                                if ((i || ((i = new o(this, "object" == typeof e && e)), t(this).data(n, i)), "string" == typeof e)) {
                                    if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                                    i[e]();
                                }
                            });
                        }),
                        s(o, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return a;
                                },
                            },
                        ]),
                        o
                    );
                })();
            return (
                t(window).on(h.LOAD_DATA_API, function () {
                    for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--; ) {
                        var i = t(e[n]);
                        g._jQueryInterface.call(i, i.data());
                    }
                }),
                (t.fn[e] = g._jQueryInterface),
                (t.fn[e].Constructor = g),
                (t.fn[e].noConflict = function () {
                    return (t.fn[e] = o), g._jQueryInterface;
                }),
                g
            );
        })(e),
        V = (function (t) {
            var e = "bs.tab",
                n = "." + e,
                i = t.fn.tab,
                r = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, CLICK_DATA_API: "click.bs.tab.data-api" },
                o = "dropdown-menu",
                a = "active",
                l = "disabled",
                h = "fade",
                c = "show",
                u = ".dropdown",
                f = ".nav, .list-group",
                d = ".active",
                _ = "> li > .active",
                g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                p = ".dropdown-toggle",
                m = "> .dropdown-menu .active",
                v = (function () {
                    function n(t) {
                        this._element = t;
                    }
                    var i = n.prototype;
                    return (
                        (i.show = function () {
                            var e = this;
                            if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a)) || t(this._element).hasClass(l))) {
                                var n,
                                    i,
                                    s = t(this._element).closest(f)[0],
                                    o = P.getSelectorFromElement(this._element);
                                if (s) {
                                    var h = "UL" === s.nodeName ? _ : d;
                                    i = (i = t.makeArray(t(s).find(h)))[i.length - 1];
                                }
                                var c = t.Event(r.HIDE, { relatedTarget: this._element }),
                                    u = t.Event(r.SHOW, { relatedTarget: i });
                                if ((i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented())) {
                                    o && (n = t(o)[0]), this._activate(this._element, s);
                                    var g = function () {
                                        var n = t.Event(r.HIDDEN, { relatedTarget: e._element }),
                                            s = t.Event(r.SHOWN, { relatedTarget: i });
                                        t(i).trigger(n), t(e._element).trigger(s);
                                    };
                                    n ? this._activate(n, n.parentNode, g) : g();
                                }
                            }
                        }),
                        (i.dispose = function () {
                            t.removeData(this._element, e), (this._element = null);
                        }),
                        (i._activate = function (e, n, i) {
                            var s = this,
                                r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
                                o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
                                a = function () {
                                    return s._transitionComplete(e, r, i);
                                };
                            r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a();
                        }),
                        (i._transitionComplete = function (e, n, i) {
                            if (n) {
                                t(n).removeClass(c + " " + a);
                                var s = t(n.parentNode).find(m)[0];
                                s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                            }
                            if ((t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o))) {
                                var r = t(e).closest(u)[0];
                                r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0);
                            }
                            i && i();
                        }),
                        (n._jQueryInterface = function (i) {
                            return this.each(function () {
                                var s = t(this),
                                    r = s.data(e);
                                if ((r || ((r = new n(this)), s.data(e, r)), "string" == typeof i)) {
                                    if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
                                    r[i]();
                                }
                            });
                        }),
                        s(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0";
                                },
                            },
                        ]),
                        n
                    );
                })();
            return (
                t(document).on(r.CLICK_DATA_API, g, function (e) {
                    e.preventDefault(), v._jQueryInterface.call(t(this), "show");
                }),
                (t.fn.tab = v._jQueryInterface),
                (t.fn.tab.Constructor = v),
                (t.fn.tab.noConflict = function () {
                    return (t.fn.tab = i), v._jQueryInterface;
                }),
                v
            );
        })(e);
    !(function (t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    })(e),
        (t.Util = P),
        (t.Alert = L),
        (t.Button = R),
        (t.Carousel = j),
        (t.Collapse = H),
        (t.Dropdown = W),
        (t.Modal = M),
        (t.Popover = x),
        (t.Scrollspy = K),
        (t.Tab = V),
        (t.Tooltip = U),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
!(function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery);
})(function (a) {
    var b = {},
        c = {
            exclude: [],
            excludeWithin: [],
            offset: 0,
            direction: "top",
            delegateSelector: null,
            scrollElement: null,
            scrollTarget: null,
            autoFocus: !1,
            beforeScroll: function () {},
            afterScroll: function () {},
            easing: "swing",
            speed: 400,
            autoCoefficient: 2,
            preventDefault: !0,
        },
        d = function (b) {
            var c = [],
                d = !1,
                e = b.dir && "left" === b.dir ? "scrollLeft" : "scrollTop";
            return (
                this.each(function () {
                    var b = a(this);
                    if (this !== document && this !== window)
                        return !document.scrollingElement || (this !== document.documentElement && this !== document.body)
                            ? void (b[e]() > 0 ? c.push(this) : (b[e](1), (d = b[e]() > 0), d && c.push(this), b[e](0)))
                            : (c.push(document.scrollingElement), !1);
                }),
                c.length ||
                    this.each(function () {
                        this === document.documentElement && "smooth" === a(this).css("scrollBehavior") && (c = [this]), c.length || "BODY" !== this.nodeName || (c = [this]);
                    }),
                "first" === b.el && c.length > 1 && (c = [c[0]]),
                c
            );
        },
        e = /^([\-\+]=)(\d+)/;
    a.fn.extend({
        scrollable: function (a) {
            var b = d.call(this, { dir: a });
            return this.pushStack(b);
        },
        firstScrollable: function (a) {
            var b = d.call(this, { el: "first", dir: a });
            return this.pushStack(b);
        },
        smoothScroll: function (b, c) {
            if ("options" === (b = b || {}))
                return c
                    ? this.each(function () {
                          var b = a(this),
                              d = a.extend(b.data("ssOpts") || {}, c);
                          a(this).data("ssOpts", d);
                      })
                    : this.first().data("ssOpts");
            var d = a.extend({}, a.fn.smoothScroll.defaults, b),
                e = function (b) {
                    var c = function (a) {
                            return a.replace(/(:|\.|\/)/g, "\\$1");
                        },
                        e = this,
                        f = a(this),
                        g = a.extend({}, d, f.data("ssOpts") || {}),
                        h = d.exclude,
                        i = g.excludeWithin,
                        j = 0,
                        k = 0,
                        l = !0,
                        m = {},
                        n = a.smoothScroll.filterPath(location.pathname),
                        o = a.smoothScroll.filterPath(e.pathname),
                        p = location.hostname === e.hostname || !e.hostname,
                        q = g.scrollTarget || o === n,
                        r = c(e.hash);
                    if ((r && !a(r).length && (l = !1), g.scrollTarget || (p && q && r))) {
                        for (; l && j < h.length; ) f.is(c(h[j++])) && (l = !1);
                        for (; l && k < i.length; ) f.closest(i[k++]).length && (l = !1);
                    } else l = !1;
                    l && (g.preventDefault && b.preventDefault(), a.extend(m, g, { scrollTarget: g.scrollTarget || r, link: e }), a.smoothScroll(m));
                };
            return null !== b.delegateSelector ? this.off("click.smoothscroll", b.delegateSelector).on("click.smoothscroll", b.delegateSelector, e) : this.off("click.smoothscroll").on("click.smoothscroll", e), this;
        },
    });
    var f = function (a) {
            var b = { relative: "" },
                c = "string" == typeof a && e.exec(a);
            return "number" == typeof a ? (b.px = a) : c && ((b.relative = c[1]), (b.px = parseFloat(c[2]) || 0)), b;
        },
        g = function (b) {
            var c = a(b.scrollTarget);
            b.autoFocus && c.length && (c[0].focus(), c.is(document.activeElement) || (c.prop({ tabIndex: -1 }), c[0].focus())), b.afterScroll.call(b.link, b);
        };
    (a.smoothScroll = function (c, d) {
        if ("options" === c && "object" == typeof d) return a.extend(b, d);
        var e,
            h,
            i,
            j,
            k = f(c),
            l = {},
            m = 0,
            n = "offset",
            o = "scrollTop",
            p = {},
            q = {};
        k.px
            ? (e = a.extend({ link: null }, a.fn.smoothScroll.defaults, b))
            : ((e = a.extend({ link: null }, a.fn.smoothScroll.defaults, c || {}, b)), e.scrollElement && ((n = "position"), "static" === e.scrollElement.css("position") && e.scrollElement.css("position", "relative")), d && (k = f(d))),
            (o = "left" === e.direction ? "scrollLeft" : o),
            e.scrollElement ? ((h = e.scrollElement), k.px || /^(?:HTML|BODY)$/.test(h[0].nodeName) || (m = h[o]())) : (h = a("html, body").firstScrollable(e.direction)),
            e.beforeScroll.call(h, e),
            (l = k.px ? k : { relative: "", px: (a(e.scrollTarget)[n]() && a(e.scrollTarget)[n]()[e.direction]) || 0 }),
            (p[o] = l.relative + (l.px + m + e.offset)),
            (i = e.speed),
            "auto" === i && ((j = Math.abs(p[o] - h[o]())), (i = j / e.autoCoefficient)),
            (q = {
                duration: i,
                easing: e.easing,
                complete: function () {
                    g(e);
                },
            }),
            e.step && (q.step = e.step),
            h.length ? h.stop().animate(p, q) : g(e);
    }),
        (a.smoothScroll.version = "2.2.0"),
        (a.smoothScroll.filterPath = function (a) {
            return (
                (a = a || ""),
                a
                    .replace(/^\//, "")
                    .replace(/(?:index|default).[a-zA-Z]{3,4}$/, "")
                    .replace(/\/$/, "")
            );
        }),
        (a.fn.smoothScroll.defaults = c);
});
!(function (a) {
    a.fn.viewportChecker = function (b) {
        var c = {
            classToAdd: "visible",
            classToRemove: "invisible",
            classToAddForFullView: "full-visible",
            removeClassAfterAnimation: !1,
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function (a, b) {},
            scrollHorizontal: !1,
            scrollBox: window,
        };
        a.extend(c, b);
        var d = this,
            e = { height: a(c.scrollBox).height(), width: a(c.scrollBox).width() };
        return (
            (this.checkElements = function () {
                var b, f;
                c.scrollHorizontal
                    ? ((b = Math.max(a("html").scrollLeft(), a("body").scrollLeft(), a(window).scrollLeft())), (f = b + e.width))
                    : ((b = Math.max(a("html").scrollTop(), a("body").scrollTop(), a(window).scrollTop())), (f = b + e.height)),
                    d.each(function () {
                        var d = a(this),
                            g = {},
                            h = {};
                        if (
                            (d.data("vp-add-class") && (h.classToAdd = d.data("vp-add-class")),
                            d.data("vp-remove-class") && (h.classToRemove = d.data("vp-remove-class")),
                            d.data("vp-add-class-full-view") && (h.classToAddForFullView = d.data("vp-add-class-full-view")),
                            d.data("vp-keep-add-class") && (h.removeClassAfterAnimation = d.data("vp-remove-after-animation")),
                            d.data("vp-offset") && (h.offset = d.data("vp-offset")),
                            d.data("vp-repeat") && (h.repeat = d.data("vp-repeat")),
                            d.data("vp-scrollHorizontal") && (h.scrollHorizontal = d.data("vp-scrollHorizontal")),
                            d.data("vp-invertBottomOffset") && (h.scrollHorizontal = d.data("vp-invertBottomOffset")),
                            a.extend(g, c),
                            a.extend(g, h),
                            !d.data("vp-animated") || g.repeat)
                        ) {
                            String(g.offset).indexOf("%") > 0 && (g.offset = (parseInt(g.offset) / 100) * e.height);
                            var i = g.scrollHorizontal ? d.offset().left : d.offset().top,
                                j = g.scrollHorizontal ? i + d.width() : i + d.height(),
                                k = Math.round(i) + g.offset,
                                l = g.scrollHorizontal ? k + d.width() : k + d.height();
                            g.invertBottomOffset && (l -= 2 * g.offset),
                                k < f && l > b
                                    ? (d.removeClass(g.classToRemove),
                                      d.addClass(g.classToAdd),
                                      g.callbackFunction(d, "add"),
                                      j <= f && i >= b ? d.addClass(g.classToAddForFullView) : d.removeClass(g.classToAddForFullView),
                                      d.data("vp-animated", !0),
                                      g.removeClassAfterAnimation &&
                                          d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                              d.removeClass(g.classToAdd);
                                          }))
                                    : d.hasClass(g.classToAdd) && g.repeat && (d.removeClass(g.classToAdd + " " + g.classToAddForFullView), g.callbackFunction(d, "remove"), d.data("vp-animated", !1));
                        }
                    });
            }),
            ("ontouchstart" in window || "onmsgesturechange" in window) && a(document).bind("touchmove MSPointerMove pointermove", this.checkElements),
            a(c.scrollBox).bind("load scroll", this.checkElements),
            a(window).resize(function (b) {
                (e = { height: a(c.scrollBox).height(), width: a(c.scrollBox).width() }), d.checkElements();
            }),
            this.checkElements(),
            this
        );
    };
})(jQuery);
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Swiper = t());
})(this, function () {
    "use strict";
    var e =
            "undefined" == typeof document
                ? {
                      body: {},
                      addEventListener: function () {},
                      removeEventListener: function () {},
                      activeElement: { blur: function () {}, nodeName: "" },
                      querySelector: function () {
                          return null;
                      },
                      querySelectorAll: function () {
                          return [];
                      },
                      getElementById: function () {
                          return null;
                      },
                      createEvent: function () {
                          return { initEvent: function () {} };
                      },
                      createElement: function () {
                          return {
                              children: [],
                              childNodes: [],
                              style: {},
                              setAttribute: function () {},
                              getElementsByTagName: function () {
                                  return [];
                              },
                          };
                      },
                      location: { hash: "" },
                  }
                : document,
        t =
            "undefined" == typeof window
                ? {
                      document: e,
                      navigator: { userAgent: "" },
                      location: {},
                      history: {},
                      CustomEvent: function () {
                          return this;
                      },
                      addEventListener: function () {},
                      removeEventListener: function () {},
                      getComputedStyle: function () {
                          return {
                              getPropertyValue: function () {
                                  return "";
                              },
                          };
                      },
                      Image: function () {},
                      Date: function () {},
                      screen: {},
                      setTimeout: function () {},
                      clearTimeout: function () {},
                  }
                : window,
        i = function (e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return (this.length = e.length), this;
        };
    function s(s, a) {
        var r = [],
            n = 0;
        if (s && !a && s instanceof i) return s;
        if (s)
            if ("string" == typeof s) {
                var o,
                    l,
                    d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (
                        0 === d.indexOf("<li") && (h = "ul"),
                            0 === d.indexOf("<tr") && (h = "tbody"),
                            (0 !== d.indexOf("<td") && 0 !== d.indexOf("<th")) || (h = "tr"),
                            0 === d.indexOf("<tbody") && (h = "table"),
                            0 === d.indexOf("<option") && (h = "select"),
                            (l = e.createElement(h)).innerHTML = d,
                            n = 0;
                        n < l.childNodes.length;
                        n += 1
                    )
                        r.push(l.childNodes[n]);
                } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n]);
            } else if (s.nodeType || s === t || s === e) r.push(s);
            else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r);
    }
    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
    }
    (s.fn = i.prototype), (s.Class = i), (s.Dom7 = i);
    var r = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this;
        },
        removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this;
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this;
        },
        attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length) this[s].setAttribute(e, t);
                else for (var a in e) (this[s][a] = e[a]), this[s].setAttribute(a, e[a]);
            return this;
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
        },
        data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), (i.dom7ElementDataStorage[e] = t);
                return this;
            }
            if ((i = this[0])) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0;
            }
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                (i.webkitTransform = e), (i.transform = e);
            }
            return this;
        },
        transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                (i.webkitTransitionDuration = e), (i.transitionDuration = e);
            }
            return this;
        },
        on: function () {
            for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
            var a = t[0],
                r = t[1],
                n = t[2],
                o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if ((i.unshift(e), s(t).is(r))) n.apply(t, i);
                    else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i);
                }
            }
            function d(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e), n.apply(this, t);
            }
            "function" == typeof t[1] && ((a = (e = t)[0]), (n = e[1]), (o = e[2]), (r = void 0)), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r) for (h = 0; h < p.length; h += 1) u.dom7LiveListeners || (u.dom7LiveListeners = []), u.dom7LiveListeners.push({ type: a, listener: n, proxyListener: l }), u.addEventListener(p[h], l, o);
                else for (h = 0; h < p.length; h += 1) u.dom7Listeners || (u.dom7Listeners = []), u.dom7Listeners.push({ type: a, listener: n, proxyListener: d }), u.addEventListener(p[h], d, o);
            }
            return this;
        },
        off: function () {
            for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && ((s = (e = t)[0]), (r = e[1]), (n = e[2]), (a = void 0)), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = 0; d < this.length; d += 1) {
                    var h = this[d];
                    if (a) {
                        if (h.dom7LiveListeners)
                            for (var p = 0; p < h.dom7LiveListeners.length; p += 1)
                                r
                                    ? h.dom7LiveListeners[p].listener === r && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n)
                                    : h.dom7LiveListeners[p].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n);
                    } else if (h.dom7Listeners)
                        for (var c = 0; c < h.dom7Listeners.length; c += 1)
                            r ? h.dom7Listeners[c].listener === r && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n) : h.dom7Listeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n);
                }
            return this;
        },
        trigger: function () {
            for (var i = [], s = arguments.length; s--; ) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = 0; o < this.length; o += 1) {
                    var l = void 0;
                    try {
                        l = new t.CustomEvent(a[n], { detail: r, bubbles: !0, cancelable: !0 });
                    } catch (t) {
                        (l = e.createEvent("Event")).initEvent(a[n], !0, !0), (l.detail = r);
                    }
                    (this[o].dom7EventData = i.filter(function (e, t) {
                        return t > 0;
                    })),
                        this[o].dispatchEvent(l),
                        (this[o].dom7EventData = []),
                        delete this[o].dom7EventData;
                }
            return this;
        },
        transitionEnd: function (e) {
            var t,
                i = ["webkitTransitionEnd", "transitionend"],
                s = this;
            function a(r) {
                if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
            }
            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this;
        },
        outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function () {
            if (this.length > 0) {
                var i = this[0],
                    s = i.getBoundingClientRect(),
                    a = e.body,
                    r = i.clientTop || a.clientTop || 0,
                    n = i.clientLeft || a.clientLeft || 0,
                    o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return { top: s.top + o - r, left: s.left + l - n };
            }
            return null;
        },
        css: function (e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1) for (var a in e) this[s].style[a] = e[a];
                    return this;
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this;
            }
            return this;
        },
        each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
        },
        is: function (a) {
            var r,
                n,
                o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1;
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1;
            }
            return !1;
        },
        index: function () {
            var e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t,
                s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? ((t = s + e) < 0 ? [] : [this[t]]) : [this[e]]);
        },
        append: function () {
            for (var t, s = [], a = arguments.length; a--; ) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild; ) this[n].appendChild(o.firstChild);
                    } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
                    else this[n].appendChild(t);
            }
            return this;
        },
        prepend: function (t) {
            var s, a;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) {
                    var r = e.createElement("div");
                    for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
                } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
                else this[s].insertBefore(t, this[s].childNodes[0]);
            return this;
        },
        next: function (e) {
            return this.length > 0
                ? e
                    ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e)
                        ? new i([this[0].nextElementSibling])
                        : new i([])
                    : this[0].nextElementSibling
                    ? new i([this[0].nextElementSibling])
                    : new i([])
                : new i([]);
        },
        nextAll: function (e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling; ) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), (a = r);
            }
            return new i(t);
        },
        prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? (t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([])) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]);
            }
            return new i([]);
        },
        prevAll: function (e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling; ) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), (a = r);
            }
            return new i(t);
        },
        parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t));
        },
        parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].parentNode; r; ) e ? s(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
            return s(a(t));
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
            for (var t = [], s = 0; s < this.length; s += 1) for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t);
        },
        children: function (e) {
            for (var t = [], r = 0; r < this.length; r += 1) for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t));
        },
        remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
        add: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1) (this[this.length] = r[a]), (this.length += 1);
            }
            return this;
        },
        styles: function () {
            return this[0] ? t.getComputedStyle(this[0], null) : {};
        },
    };
    Object.keys(r).forEach(function (e) {
        s.fn[e] = r[e];
    });
    var n,
        o,
        l,
        d = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach(function (e) {
                    try {
                        t[e] = null;
                    } catch (e) {}
                    try {
                        delete t[e];
                    } catch (e) {}
                });
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            },
            now: function () {
                return Date.now();
            },
            getTranslate: function (e, i) {
                var s, a, r;
                void 0 === i && (i = "x");
                var n = t.getComputedStyle(e, null);
                return (
                    t.WebKitCSSMatrix
                        ? ((a = n.transform || n.webkitTransform).split(",").length > 6 &&
                              (a = a
                                  .split(", ")
                                  .map(function (e) {
                                      return e.replace(",", ".");
                                  })
                                  .join(", ")),
                          (r = new t.WebKitCSSMatrix("none" === a ? "" : a)))
                        : (s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                    "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
                    "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
                    a || 0
                );
            },
            parseUrlQuery: function (e) {
                var i,
                    s,
                    a,
                    r,
                    n = {},
                    o = e || t.location.href;
                if ("string" == typeof o && o.length)
                    for (
                        r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                            return "" !== e;
                        })).length,
                            i = 0;
                        i < r;
                        i += 1
                    )
                        (a = s[i].replace(/#\S+/g, "").split("=")), (n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "");
                return n;
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var a = e[s];
                    if (void 0 !== a && null !== a)
                        for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                            var l = r[n],
                                h = Object.getOwnPropertyDescriptor(a, l);
                            void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? ((i[l] = {}), d.extend(i[l], a[l])) : (i[l] = a[l]));
                        }
                }
                return i;
            },
        },
        h =
            ((l = e.createElement("div")),
            {
                touch: (t.Modernizr && !0 === t.Modernizr.touch) || !!("ontouchstart" in t || (t.DocumentTouch && e instanceof t.DocumentTouch)),
                pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
                prefixedPointerEvents: !!t.navigator.msPointerEnabled,
                transition: ((o = l.style), "transition" in o || "webkitTransition" in o || "MozTransition" in o),
                transforms3d: (t.Modernizr && !0 === t.Modernizr.csstransforms3d) || ((n = l.style), "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n),
                flexbox: (function () {
                    for (
                        var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0;
                        i < t.length;
                        i += 1
                    )
                        if (t[i] in e) return !0;
                    return !1;
                })(),
                observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
                passiveListener: (function () {
                    var e = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0;
                            },
                        });
                        t.addEventListener("testPassiveListener", null, i);
                    } catch (e) {}
                    return e;
                })(),
                gestures: "ongesturestart" in t,
            }),
        p = function (e) {
            void 0 === e && (e = {});
            var t = this;
            (t.params = e),
                (t.eventsListeners = {}),
                t.params &&
                    t.params.on &&
                    Object.keys(t.params.on).forEach(function (e) {
                        t.on(e, t.params.on[e]);
                    });
        },
        c = { components: { configurable: !0 } };
    (p.prototype.on = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return (
            e.split(" ").forEach(function (e) {
                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
            }),
            s
        );
    }),
        (p.prototype.once = function (e, t, i) {
            var s = this;
            if ("function" != typeof t) return s;
            return s.on(
                e,
                function i() {
                    for (var a = [], r = arguments.length; r--; ) a[r] = arguments[r];
                    t.apply(s, a), s.off(e, i);
                },
                i
            );
        }),
        (p.prototype.off = function (e, t) {
            var i = this;
            return i.eventsListeners
                ? (e.split(" ").forEach(function (e) {
                      void 0 === t
                          ? (i.eventsListeners[e] = [])
                          : i.eventsListeners[e].forEach(function (s, a) {
                                s === t && i.eventsListeners[e].splice(a, 1);
                            });
                  }),
                  i)
                : i;
        }),
        (p.prototype.emit = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var i,
                s,
                a,
                r = this;
            return r.eventsListeners
                ? ("string" == typeof e[0] || Array.isArray(e[0]) ? ((i = e[0]), (s = e.slice(1, e.length)), (a = r)) : ((i = e[0].events), (s = e[0].data), (a = e[0].context || r)),
                  (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
                      if (r.eventsListeners && r.eventsListeners[e]) {
                          var t = [];
                          r.eventsListeners[e].forEach(function (e) {
                              t.push(e);
                          }),
                              t.forEach(function (e) {
                                  e.apply(a, s);
                              });
                      }
                  }),
                  r)
                : r;
        }),
        (p.prototype.useModulesParams = function (e) {
            var t = this;
            t.modules &&
                Object.keys(t.modules).forEach(function (i) {
                    var s = t.modules[i];
                    s.params && d.extend(e, s.params);
                });
        }),
        (p.prototype.useModules = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
                Object.keys(t.modules).forEach(function (i) {
                    var s = t.modules[i],
                        a = e[i] || {};
                    s.instance &&
                        Object.keys(s.instance).forEach(function (e) {
                            var i = s.instance[e];
                            t[e] = "function" == typeof i ? i.bind(t) : i;
                        }),
                        s.on &&
                            t.on &&
                            Object.keys(s.on).forEach(function (e) {
                                t.on(e, s.on[e]);
                            }),
                        s.create && s.create.bind(t)(a);
                });
        }),
        (c.components.set = function (e) {
            this.use && this.use(e);
        }),
        (p.installModule = function (e) {
            for (var t = [], i = arguments.length - 1; i-- > 0; ) t[i] = arguments[i + 1];
            var s = this;
            s.prototype.modules || (s.prototype.modules = {});
            var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
            return (
                (s.prototype.modules[a] = e),
                e.proto &&
                    Object.keys(e.proto).forEach(function (t) {
                        s.prototype[t] = e.proto[t];
                    }),
                e.static &&
                    Object.keys(e.static).forEach(function (t) {
                        s[t] = e.static[t];
                    }),
                e.install && e.install.apply(s, t),
                s
            );
        }),
        (p.use = function (e) {
            for (var t = [], i = arguments.length - 1; i-- > 0; ) t[i] = arguments[i + 1];
            var s = this;
            return Array.isArray(e)
                ? (e.forEach(function (e) {
                      return s.installModule(e);
                  }),
                  s)
                : s.installModule.apply(s, [e].concat(t));
        }),
        Object.defineProperties(p, c);
    var u = {
        updateSize: function () {
            var e,
                t,
                i = this.$el;
            (e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth),
                (t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight),
                (0 === e && this.isHorizontal()) ||
                    (0 === t && this.isVertical()) ||
                    ((e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10)),
                    (t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10)),
                    d.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
            var e = this.params,
                i = this.$wrapperEl,
                s = this.size,
                a = this.rtlTranslate,
                r = this.wrongRTL,
                n = i.children("." + this.params.slideClass),
                o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : n.length,
                l = [],
                p = [],
                c = [],
                u = e.slidesOffsetBefore;
            "function" == typeof u && (u = e.slidesOffsetBefore.call(this));
            var v = e.slidesOffsetAfter;
            "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
            var f = o,
                m = this.snapGrid.length,
                g = this.snapGrid.length,
                b = e.spaceBetween,
                w = -u,
                y = 0,
                x = 0;
            if (void 0 !== s) {
                var E, T;
                "string" == typeof b && b.indexOf("%") >= 0 && (b = (parseFloat(b.replace("%", "")) / 100) * s),
                    (this.virtualSize = -b),
                    a ? n.css({ marginLeft: "", marginTop: "" }) : n.css({ marginRight: "", marginBottom: "" }),
                    e.slidesPerColumn > 1 &&
                        ((E = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn),
                        "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var S, C = e.slidesPerColumn, M = E / C, z = M - (e.slidesPerColumn * M - o), k = 0; k < o; k += 1) {
                    T = 0;
                    var P = n.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var $ = void 0,
                            L = void 0,
                            I = void 0;
                        "column" === e.slidesPerColumnFill
                            ? ((I = k - (L = Math.floor(k / C)) * C),
                              (L > z || (L === z && I === C - 1)) && (I += 1) >= C && ((I = 0), (L += 1)),
                              ($ = L + (I * E) / C),
                              P.css({ "-webkit-box-ordinal-group": $, "-moz-box-ordinal-group": $, "-ms-flex-order": $, "-webkit-order": $, order: $ }))
                            : (L = k - (I = Math.floor(k / M)) * M),
                            P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px")
                                .attr("data-swiper-column", L)
                                .attr("data-swiper-row", I);
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var D = t.getComputedStyle(P[0], null);
                            (T = this.isHorizontal()
                                ? P[0].getBoundingClientRect().width + parseFloat(D.getPropertyValue("margin-left")) + parseFloat(D.getPropertyValue("margin-right"))
                                : P[0].getBoundingClientRect().height + parseFloat(D.getPropertyValue("margin-top")) + parseFloat(D.getPropertyValue("margin-bottom"))),
                                e.roundLengths && (T = Math.floor(T));
                        } else (T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView), e.roundLengths && (T = Math.floor(T)), n[k] && (this.isHorizontal() ? (n[k].style.width = T + "px") : (n[k].style.height = T + "px"));
                        n[k] && (n[k].swiperSlideSize = T),
                            c.push(T),
                            e.centeredSlides
                                ? ((w = w + T / 2 + y / 2 + b), 0 === y && 0 !== k && (w = w - s / 2 - b), 0 === k && (w = w - s / 2 - b), Math.abs(w) < 0.001 && (w = 0), x % e.slidesPerGroup == 0 && l.push(w), p.push(w))
                                : (x % e.slidesPerGroup == 0 && l.push(w), p.push(w), (w = w + T + b)),
                            (this.virtualSize += T + b),
                            (y = T),
                            (x += 1);
                    }
                }
                if (
                    ((this.virtualSize = Math.max(this.virtualSize, s) + v),
                    a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({ width: this.virtualSize + e.spaceBetween + "px" }),
                    (h.flexbox && !e.setWrapperSize) || (this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" })),
                    e.slidesPerColumn > 1 &&
                        ((this.virtualSize = (T + e.spaceBetween) * E),
                        (this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween),
                        this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" }),
                        e.centeredSlides))
                ) {
                    S = [];
                    for (var O = 0; O < l.length; O += 1) l[O] < this.virtualSize + l[0] && S.push(l[O]);
                    l = S;
                }
                if (!e.centeredSlides) {
                    S = [];
                    for (var A = 0; A < l.length; A += 1) l[A] <= this.virtualSize - s && S.push(l[A]);
                    (l = S), Math.floor(this.virtualSize - s) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - s);
                }
                0 === l.length && (l = [0]),
                    0 !== e.spaceBetween && (this.isHorizontal() ? (a ? n.css({ marginLeft: b + "px" }) : n.css({ marginRight: b + "px" })) : n.css({ marginBottom: b + "px" })),
                    d.extend(this, { slides: n, snapGrid: l, slidesGrid: p, slidesSizesGrid: c }),
                    o !== f && this.emit("slidesLengthChange"),
                    l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")),
                    p.length !== g && this.emit("slidesGridLengthChange"),
                    (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
            }
        },
        updateAutoHeight: function (e) {
            var t,
                i = [],
                s = 0;
            if (("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1))
                for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                    var a = this.activeIndex + t;
                    if (a > this.slides.length) break;
                    i.push(this.slides.eq(a)[0]);
                }
            else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s;
                }
            s && this.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
            void 0 === e && (e = this.translate || 0);
            var t = this.params,
                i = this.slides,
                s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e), i.removeClass(t.slideVisibleClass);
                for (var r = 0; r < i.length; r += 1) {
                    var n = i[r],
                        o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var l = -(a - n.swiperSlideOffset),
                            d = l + this.slidesSizesGrid[r];
                        ((l >= 0 && l < this.size) || (d > 0 && d <= this.size) || (l <= 0 && d >= this.size)) && i.eq(r).addClass(t.slideVisibleClass);
                    }
                    n.progress = s ? -o : o;
                }
            }
        },
        updateProgress: function (e) {
            void 0 === e && (e = this.translate || 0);
            var t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                s = this.progress,
                a = this.isBeginning,
                r = this.isEnd,
                n = a,
                o = r;
            0 === i ? ((s = 0), (a = !0), (r = !0)) : ((a = (s = (e - this.minTranslate()) / i) <= 0), (r = s >= 1)),
                d.extend(this, { progress: s, isBeginning: a, isEnd: r }),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e),
                a && !n && this.emit("reachBeginning toEdge"),
                r && !o && this.emit("reachEnd toEdge"),
                ((n && !a) || (o && !r)) && this.emit("fromEdge"),
                this.emit("progress", s);
        },
        updateSlidesClasses: function () {
            var e,
                t = this.slides,
                i = this.params,
                s = this.$wrapperEl,
                a = this.activeIndex,
                r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
                (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass),
                i.loop &&
                    (e.hasClass(i.slideDuplicateClass)
                        ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass)
                        : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e
                .nextAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e
                .prevAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
                i.loop &&
                    (o.hasClass(i.slideDuplicateClass)
                        ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass)
                        : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
                    l.hasClass(i.slideDuplicateClass)
                        ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)
                        : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
            var t,
                i = this.rtlTranslate ? this.translate : -this.translate,
                s = this.slidesGrid,
                a = this.snapGrid,
                r = this.params,
                n = this.activeIndex,
                o = this.realIndex,
                l = this.snapIndex,
                h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? (i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? (h = p) : i >= s[p] && i < s[p + 1] && (h = p + 1)) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
            }
            if (((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n)) {
                var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, { snapIndex: t, realIndex: c, previousIndex: n, activeIndex: h }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange");
            } else t !== l && ((this.snapIndex = t), this.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
            var t = this.params,
                i = s(e.target).closest("." + t.slideClass)[0],
                a = !1;
            if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
            (this.clickedSlide = i),
                this.virtual && this.params.virtual.enabled ? (this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10)) : (this.clickedIndex = s(i).index()),
                t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
        },
    };
    var v = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                i = this.rtlTranslate,
                s = this.translate,
                a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
            var i = this.rtlTranslate,
                s = this.params,
                a = this.$wrapperEl,
                r = this.progress,
                n = 0,
                o = 0;
            this.isHorizontal() ? (n = i ? -e : e) : (o = e),
                s.roundLengths && ((n = Math.floor(n)), (o = Math.floor(o))),
                s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")),
                (this.translate = this.isHorizontal() ? n : o);
            var l = this.maxTranslate() - this.minTranslate();
            (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function () {
            return -this.snapGrid[0];
        },
        maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
    };
    var f = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.params,
                a = this.previousIndex;
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if ((r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a)) {
                if ("reset" === r) return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
            }
        },
        transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.previousIndex;
            (this.animating = !1), this.setTransition(0);
            var a = t;
            if ((a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s)) {
                if ("reset" === a) return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
            }
        },
    };
    var m = {
        slideTo: function (e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = this,
                r = e;
            r < 0 && (r = 0);
            var n = a.params,
                o = a.snapGrid,
                l = a.slidesGrid,
                d = a.previousIndex,
                p = a.activeIndex,
                c = a.rtlTranslate,
                u = a.$wrapperEl;
            if (a.animating && n.preventIntercationOnTransition) return !1;
            var v = Math.floor(r / n.slidesPerGroup);
            v >= o.length && (v = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
            var f,
                m = -o[v];
            if ((a.updateProgress(m), n.normalizeSlideIndex)) for (var g = 0; g < l.length; g += 1) -Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);
            if (a.initialized && r !== p) {
                if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
                if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (p || 0) !== r) return !1;
            }
            return (
                (f = r > p ? "next" : r < p ? "prev" : "reset"),
                (c && -m === a.translate) || (!c && m === a.translate)
                    ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1)
                    : (0 !== t && h.transition
                          ? (a.setTransition(t),
                            a.setTranslate(m),
                            a.updateActiveIndex(r),
                            a.updateSlidesClasses(),
                            a.emit("beforeTransitionStart", t, s),
                            a.transitionStart(i, f),
                            a.animating ||
                                ((a.animating = !0),
                                u.transitionEnd(function () {
                                    a && !a.destroyed && a.transitionEnd(i, f);
                                })))
                          : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)),
                      !0)
            );
        },
        slideToLoop: function (e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
        },
        slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating;
            return s.loop ? !a && (this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft), this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i);
        },
        slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r = this.snapGrid,
                n = this.slidesGrid,
                o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
            }
            var l,
                d = o ? this.translate : -this.translate,
                h = (r[r.indexOf(d)], r[r.indexOf(d) - 1]);
            return h && (l = n.indexOf(h)) < 0 && (l = this.activeIndex - 1), this.slideTo(l, e, t, i);
        },
        slideReset: function (e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
        },
        slideToClosest: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.activeIndex,
                a = Math.floor(s / this.params.slidesPerGroup);
            if (a < this.snapGrid.length - 1) {
                var r = this.rtlTranslate ? this.translate : -this.translate,
                    n = this.snapGrid[a];
                r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup);
            }
            return this.slideTo(s, e, t, i);
        },
        slideToClickedSlide: function () {
            var e,
                t = this,
                i = t.params,
                a = t.$wrapperEl,
                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                n = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                (e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                    i.centeredSlides
                        ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2
                            ? (t.loopFix(),
                              (n = a
                                  .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                  .eq(0)
                                  .index()),
                              d.nextTick(function () {
                                  t.slideTo(n);
                              }))
                            : t.slideTo(n)
                        : n > t.slides.length - r
                        ? (t.loopFix(),
                          (n = a
                              .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                              .eq(0)
                              .index()),
                          d.nextTick(function () {
                              t.slideTo(n);
                          }))
                        : t.slideTo(n);
            } else t.slideTo(n);
        },
    };
    var g = {
        loopCreate: function () {
            var t = this,
                i = t.params,
                a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - (r.length % i.slidesPerGroup);
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l);
                    }
                    r = a.children("." + i.slideClass);
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
                (t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10)),
                (t.loopedSlides += i.loopAdditionalSlides),
                t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [],
                h = [];
            r.each(function (e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e);
            });
            for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
            var e,
                t = this.params,
                i = this.activeIndex,
                s = this.slides,
                a = this.loopedSlides,
                r = this.allowSlidePrev,
                n = this.allowSlideNext,
                o = this.snapGrid,
                l = this.rtlTranslate;
            (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
            var d = -o[i] - this.getTranslate();
            i < a
                ? ((e = s.length - 3 * a + i), (e += a), this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d))
                : (("auto" === t.slidesPerView && i >= 2 * a) || i > s.length - 2 * t.slidesPerView) &&
                  ((e = -s.length + i + a), (e += a), this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
            (this.allowSlidePrev = r), (this.allowSlideNext = n);
        },
        loopDestroy: function () {
            var e = this.$wrapperEl,
                t = this.params,
                i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
        },
    };
    var b = {
        setGrabCursor: function (e) {
            if (!h.touch && this.params.simulateTouch) {
                var t = this.el;
                (t.style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab");
            }
        },
        unsetGrabCursor: function () {
            h.touch || (this.el.style.cursor = "");
        },
    };
    var w = {
            appendSlide: function (e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if ((i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                else t.append(e);
                i.loop && this.loopCreate(), (i.observer && h.observer) || this.update();
            },
            prependSlide: function (e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                    a = s + e.length;
                } else i.prepend(e);
                t.loop && this.loopCreate(), (t.observer && h.observer) || this.update(), this.slideTo(a, 0, !1);
            },
            removeSlide: function (e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && (this.loopDestroy(), (this.slides = i.children("." + t.slideClass)));
                var a,
                    r = s;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) (a = e[n]), this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                    r = Math.max(r, 0);
                } else (a = e), this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), (r = Math.max(r, 0));
                t.loop && this.loopCreate(), (t.observer && h.observer) || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
            },
            removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e);
            },
        },
        y = (function () {
            var i = t.navigator.userAgent,
                s = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: t.cordova || t.phonegap, phonegap: t.cordova || t.phonegap },
                a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                n = i.match(/(iPad).*OS\s([\d_]+)/),
                o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (
                (a && ((s.os = "windows"), (s.osVersion = a[2]), (s.windows = !0)),
                r && !a && ((s.os = "android"), (s.osVersion = r[2]), (s.android = !0), (s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0)),
                (n || l || o) && ((s.os = "ios"), (s.ios = !0)),
                l && !o && ((s.osVersion = l[2].replace(/_/g, ".")), (s.iphone = !0)),
                n && ((s.osVersion = n[2].replace(/_/g, ".")), (s.ipad = !0)),
                o && ((s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null), (s.iphone = !0)),
                s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]),
                (s.desktop = !(s.os || s.android || s.webView)),
                (s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i)),
                s.os && "ios" === s.os)
            ) {
                var d = s.osVersion.split("."),
                    h = e.querySelector('meta[name="viewport"]');
                s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0;
            }
            return (s.pixelRatio = t.devicePixelRatio || 1), s;
        })();
    function x() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            if (((this.allowSlideNext = !0), (this.allowSlidePrev = !0), this.updateSize(), this.updateSlides(), e.freeMode)) {
                var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight();
            } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            (this.allowSlidePrev = s), (this.allowSlideNext = i), this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
        }
    }
    var E = {
        attachEvents: function () {
            var i = this.params,
                a = this.touchEvents,
                r = this.el,
                n = this.wrapperEl;
            (this.onTouchStart = function (i) {
                var a = this.touchEventsData,
                    r = this.params,
                    n = this.touches;
                if (!this.animating || !r.preventIntercationOnTransition) {
                    var o = i;
                    if ((o.originalEvent && (o = o.originalEvent), (a.isTouchEvent = "touchstart" === o.type), (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved)))
                        if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                        else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
                            (n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX), (n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
                            var l = n.currentX,
                                h = n.currentY;
                            if (!(y.ios && !y.cordova && r.iOSEdgeSwipeDetection && l <= r.iOSEdgeSwipeThreshold && l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
                                if (
                                    (d.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                                    (n.startX = l),
                                    (n.startY = h),
                                    (a.touchStartTime = d.now()),
                                    (this.allowClick = !0),
                                    this.updateSize(),
                                    (this.swipeDirection = void 0),
                                    r.threshold > 0 && (a.allowThresholdMove = !1),
                                    "touchstart" !== o.type)
                                ) {
                                    var p = !0;
                                    s(o.target).is(a.formElements) && (p = !1),
                                        e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(),
                                        p && this.allowTouchMove && o.preventDefault();
                                }
                                this.emit("touchStart", o);
                            }
                        }
                }
            }.bind(this)),
                (this.onTouchMove = function (t) {
                    var i = this.touchEventsData,
                        a = this.params,
                        r = this.touches,
                        n = this.rtlTranslate,
                        o = t;
                    if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
                        if (!i.isTouchEvent || "mousemove" !== o.type) {
                            var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                                h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                            if (o.preventedByNestedSwiper) return (r.startX = l), void (r.startY = h);
                            if (!this.allowTouchMove) return (this.allowClick = !1), void (i.isTouched && (d.extend(r, { startX: l, startY: h, currentX: l, currentY: h }), (i.touchStartTime = d.now())));
                            if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                                if (this.isVertical()) {
                                    if ((h < r.startY && this.translate <= this.maxTranslate()) || (h > r.startY && this.translate >= this.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                                } else if ((l < r.startX && this.translate <= this.maxTranslate()) || (l > r.startX && this.translate >= this.minTranslate())) return;
                            if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return (i.isMoved = !0), void (this.allowClick = !1);
                            if ((i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1))) {
                                (r.currentX = l), (r.currentY = h);
                                var p,
                                    c = r.currentX - r.startX,
                                    u = r.currentY - r.startY;
                                if (
                                    (void 0 === i.isScrolling &&
                                        ((this.isHorizontal() && r.currentY === r.startY) || (this.isVertical() && r.currentX === r.startX)
                                            ? (i.isScrolling = !1)
                                            : c * c + u * u >= 25 && ((p = (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI), (i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle))),
                                    i.isScrolling && this.emit("touchMoveOpposite", o),
                                    "undefined" == typeof startMoving && ((r.currentX === r.startX && r.currentY === r.startY) || (i.startMoving = !0)),
                                    i.isScrolling)
                                )
                                    i.isTouched = !1;
                                else if (i.startMoving) {
                                    (this.allowClick = !1),
                                        o.preventDefault(),
                                        a.touchMoveStopPropagation && !a.nested && o.stopPropagation(),
                                        i.isMoved ||
                                            (a.loop && this.loopFix(),
                                            (i.startTranslate = this.getTranslate()),
                                            this.setTransition(0),
                                            this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                            (i.allowMomentumBounce = !1),
                                            !a.grabCursor || (!0 !== this.allowSlideNext && !0 !== this.allowSlidePrev) || this.setGrabCursor(!0),
                                            this.emit("sliderFirstMove", o)),
                                        this.emit("sliderMove", o),
                                        (i.isMoved = !0);
                                    var v = this.isHorizontal() ? c : u;
                                    (r.diff = v), (v *= a.touchRatio), n && (v = -v), (this.swipeDirection = v > 0 ? "prev" : "next"), (i.currentTranslate = v + i.startTranslate);
                                    var f = !0,
                                        m = a.resistanceRatio;
                                    if (
                                        (a.touchReleaseOnEdges && (m = 0),
                                        v > 0 && i.currentTranslate > this.minTranslate()
                                            ? ((f = !1), a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m)))
                                            : v < 0 && i.currentTranslate < this.maxTranslate() && ((f = !1), a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))),
                                        f && (o.preventedByNestedSwiper = !0),
                                        !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                        !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                        a.threshold > 0)
                                    ) {
                                        if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                        if (!i.allowThresholdMove)
                                            return (
                                                (i.allowThresholdMove = !0),
                                                (r.startX = r.currentX),
                                                (r.startY = r.currentY),
                                                (i.currentTranslate = i.startTranslate),
                                                void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                            );
                                    }
                                    a.followFinger &&
                                        ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()),
                                        a.freeMode &&
                                            (0 === i.velocities.length && i.velocities.push({ position: r[this.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                                            i.velocities.push({ position: r[this.isHorizontal() ? "currentX" : "currentY"], time: d.now() })),
                                        this.updateProgress(i.currentTranslate),
                                        this.setTranslate(i.currentTranslate));
                                }
                            }
                        }
                    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
                }.bind(this)),
                (this.onTouchEnd = function (e) {
                    var t = this,
                        i = t.touchEventsData,
                        s = t.params,
                        a = t.touches,
                        r = t.rtlTranslate,
                        n = t.$wrapperEl,
                        o = t.slidesGrid,
                        l = t.snapGrid,
                        h = e;
                    if ((h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), (i.allowTouchCallbacks = !1), !i.isTouched))
                        return i.isMoved && s.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
                    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var p,
                        c = d.now(),
                        u = c - i.touchStartTime;
                    if (
                        (t.allowClick &&
                            (t.updateClickedSlide(h),
                            t.emit("tap", h),
                            u < 300 &&
                                c - i.lastClickTime > 300 &&
                                (i.clickTimeout && clearTimeout(i.clickTimeout),
                                (i.clickTimeout = d.nextTick(function () {
                                    t && !t.destroyed && t.emit("click", h);
                                }, 300))),
                            u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))),
                        (i.lastClickTime = d.now()),
                        d.nextTick(function () {
                            t.destroyed || (t.allowClick = !0);
                        }),
                        !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
                    )
                        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
                    if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (p = s.followFinger ? (r ? t.translate : -t.translate) : -i.currentTranslate), s.freeMode)) {
                        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                        if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                        if (s.freeModeMomentum) {
                            if (i.velocities.length > 1) {
                                var v = i.velocities.pop(),
                                    f = i.velocities.pop(),
                                    m = v.position - f.position,
                                    g = v.time - f.time;
                                (t.velocity = m / g), (t.velocity /= 2), Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0);
                            } else t.velocity = 0;
                            (t.velocity *= s.freeModeMomentumVelocityRatio), (i.velocities.length = 0);
                            var b = 1e3 * s.freeModeMomentumRatio,
                                w = t.velocity * b,
                                y = t.translate + w;
                            r && (y = -y);
                            var x,
                                E,
                                T = !1,
                                S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                            if (y < t.maxTranslate())
                                s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), (x = t.maxTranslate()), (T = !0), (i.allowMomentumBounce = !0)) : (y = t.maxTranslate()),
                                    s.loop && s.centeredSlides && (E = !0);
                            else if (y > t.minTranslate())
                                s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), (x = t.minTranslate()), (T = !0), (i.allowMomentumBounce = !0)) : (y = t.minTranslate()),
                                    s.loop && s.centeredSlides && (E = !0);
                            else if (s.freeModeSticky) {
                                for (var C, M = 0; M < l.length; M += 1)
                                    if (l[M] > -y) {
                                        C = M;
                                        break;
                                    }
                                y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1]);
                            }
                            if (
                                (E &&
                                    t.once("transitionEnd", function () {
                                        t.loopFix();
                                    }),
                                0 !== t.velocity)
                            )
                                b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                            else if (s.freeModeSticky) return void t.slideToClosest();
                            s.freeModeMomentumBounce && T
                                ? (t.updateProgress(x),
                                  t.setTransition(b),
                                  t.setTranslate(y),
                                  t.transitionStart(!0, t.swipeDirection),
                                  (t.animating = !0),
                                  n.transitionEnd(function () {
                                      t &&
                                          !t.destroyed &&
                                          i.allowMomentumBounce &&
                                          (t.emit("momentumBounce"),
                                          t.setTransition(s.speed),
                                          t.setTranslate(x),
                                          n.transitionEnd(function () {
                                              t && !t.destroyed && t.transitionEnd();
                                          }));
                                  }))
                                : t.velocity
                                ? (t.updateProgress(y),
                                  t.setTransition(b),
                                  t.setTranslate(y),
                                  t.transitionStart(!0, t.swipeDirection),
                                  t.animating ||
                                      ((t.animating = !0),
                                      n.transitionEnd(function () {
                                          t && !t.destroyed && t.transitionEnd();
                                      })))
                                : t.updateProgress(y),
                                t.updateActiveIndex(),
                                t.updateSlidesClasses();
                        } else if (s.freeModeSticky) return void t.slideToClosest();
                        (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                    } else {
                        for (var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup)
                            void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && ((z = P), (k = o[P + s.slidesPerGroup] - o[P])) : p >= o[P] && ((z = P), (k = o[o.length - 1] - o[o.length - 2]));
                        var $ = (p - o[z]) / k;
                        if (u > s.longSwipesMs) {
                            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)),
                                "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z));
                        } else {
                            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z);
                        }
                    }
                }.bind(this)),
                (this.onClick = function (e) {
                    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
                }.bind(this));
            var o = "container" === i.touchEventsTarget ? r : n,
                l = !!i.nested;
            if (h.touch || (!h.pointerEvents && !h.prefixedPointerEvents)) {
                if (h.touch) {
                    var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                    o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? { passive: !1, capture: l } : l), o.addEventListener(a.end, this.onTouchEnd, p);
                }
                ((i.simulateTouch && !y.ios && !y.android) || (i.simulateTouch && !h.touch && y.ios)) &&
                    (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1));
            } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", x, !0);
        },
        detachEvents: function () {
            var t = this.params,
                i = this.touchEvents,
                s = this.el,
                a = this.wrapperEl,
                r = "container" === t.touchEventsTarget ? s : a,
                n = !!t.nested;
            if (h.touch || (!h.pointerEvents && !h.prefixedPointerEvents)) {
                if (h.touch) {
                    var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                    r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o);
                }
                ((t.simulateTouch && !y.ios && !y.android) || (t.simulateTouch && !h.touch && y.ios)) &&
                    (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1));
            } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", x);
        },
    };
    var T = {
            setBreakpoint: function () {
                var e = this.activeIndex,
                    t = this.loopedSlides;
                void 0 === t && (t = 0);
                var i = this.params,
                    s = i.breakpoints;
                if (s && (!s || 0 !== Object.keys(s).length)) {
                    var a = this.getBreakpoint(s);
                    if (a && this.currentBreakpoint !== a) {
                        var r = a in s ? s[a] : this.originalParams,
                            n = i.loop && r.slidesPerView !== i.slidesPerView;
                        d.extend(this.params, r),
                            d.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }),
                            (this.currentBreakpoint = a),
                            n && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)),
                            this.emit("breakpoint", r);
                    }
                }
            },
            getBreakpoint: function (e) {
                if (e) {
                    var i = !1,
                        s = [];
                    Object.keys(e).forEach(function (e) {
                        s.push(e);
                    }),
                        s.sort(function (e, t) {
                            return parseInt(e, 10) - parseInt(t, 10);
                        });
                    for (var a = 0; a < s.length; a += 1) {
                        var r = s[a];
                        r >= t.innerWidth && !i && (i = r);
                    }
                    return i || "max";
                }
            },
        },
        S = (function () {
            return {
                isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
                isSafari: ((e = t.navigator.userAgent.toLowerCase()), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
            };
            var e;
        })();
    var C = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventIntercationOnTransition: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
        },
        M = {
            update: u,
            translate: v,
            transition: f,
            slide: m,
            loop: g,
            grabCursor: b,
            manipulation: w,
            events: E,
            breakpoints: T,
            checkOverflow: {
                checkOverflow: function () {
                    var e = this.isLocked;
                    (this.isLocked = 1 === this.snapGrid.length),
                        (this.allowSlideNext = !this.isLocked),
                        (this.allowSlidePrev = !this.isLocked),
                        e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                        e && e !== this.isLocked && ((this.isEnd = !1), this.navigation.update());
                },
            },
            classes: {
                addClasses: function () {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = [];
                    a.push(t.direction),
                        t.freeMode && a.push("free-mode"),
                        h.flexbox || a.push("no-flexbox"),
                        t.autoHeight && a.push("autoheight"),
                        i && a.push("rtl"),
                        t.slidesPerColumn > 1 && a.push("multirow"),
                        y.android && a.push("android"),
                        y.ios && a.push("ios"),
                        S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction),
                        a.forEach(function (i) {
                            e.push(t.containerModifierClass + i);
                        }),
                        s.addClass(e.join(" "));
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "));
                },
            },
            images: {
                loadImage: function (e, i, s, a, r, n) {
                    var o;
                    function l() {
                        n && n();
                    }
                    e.complete && r ? l() : i ? (((o = new t.Image()).onload = l), (o.onerror = l), a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l();
                },
                preloadImages: function () {
                    var e = this;
                    function t() {
                        void 0 !== e &&
                            null !== e &&
                            e &&
                            !e.destroyed &&
                            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
                    }
                },
            },
        },
        z = {},
        k = (function (e) {
            function t() {
                for (var i, a, r, n = [], o = arguments.length; o--; ) n[o] = arguments[o];
                1 === n.length && n[0].constructor && n[0].constructor === Object ? (r = n[0]) : ((a = (i = n)[0]), (r = i[1])),
                    r || (r = {}),
                    (r = d.extend({}, r)),
                    a && !r.el && (r.el = a),
                    e.call(this, r),
                    Object.keys(M).forEach(function (e) {
                        Object.keys(M[e]).forEach(function (i) {
                            t.prototype[i] || (t.prototype[i] = M[e][i]);
                        });
                    });
                var l = this;
                void 0 === l.modules && (l.modules = {}),
                    Object.keys(l.modules).forEach(function (e) {
                        var t = l.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0],
                                s = t.params[i];
                            if ("object" != typeof s) return;
                            if (!(i in r && "enabled" in s)) return;
                            !0 === r[i] && (r[i] = { enabled: !0 }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = { enabled: !1 });
                        }
                    });
                var p = d.extend({}, C);
                l.useModulesParams(p), (l.params = d.extend({}, p, z, r)), (l.originalParams = d.extend({}, l.params)), (l.passedParams = d.extend({}, r)), (l.$ = s);
                var c = s(l.params.el);
                if ((a = c[0])) {
                    if (c.length > 1) {
                        var u = [];
                        return (
                            c.each(function (e, i) {
                                var s = d.extend({}, r, { el: i });
                                u.push(new t(s));
                            }),
                            u
                        );
                    }
                    (a.swiper = l), c.data("swiper", l);
                    var v,
                        f,
                        m = c.children("." + l.params.wrapperClass);
                    return (
                        d.extend(l, {
                            $el: c,
                            el: a,
                            $wrapperEl: m,
                            wrapperEl: m[0],
                            classNames: [],
                            slides: s(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === l.params.direction;
                            },
                            isVertical: function () {
                                return "vertical" === l.params.direction;
                            },
                            rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                            rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                            wrongRTL: "-webkit-box" === m.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: l.params.allowSlideNext,
                            allowSlidePrev: l.params.allowSlidePrev,
                            touchEvents:
                                ((v = ["touchstart", "touchmove", "touchend"]),
                                (f = ["mousedown", "mousemove", "mouseup"]),
                                h.pointerEvents ? (f = ["pointerdown", "pointermove", "pointerup"]) : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                                (l.touchEventsTouch = { start: v[0], move: v[1], end: v[2] }),
                                (l.touchEventsDesktop = { start: f[0], move: f[1], end: f[2] }),
                                h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: d.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: l.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        l.useModules(),
                        l.params.init && l.init(),
                        l
                    );
                }
            }
            e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)), (t.prototype.constructor = t);
            var i = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
            return (
                (t.prototype.slidesPerViewDynamic = function () {
                    var e = this.params,
                        t = this.slides,
                        i = this.slidesGrid,
                        s = this.size,
                        a = this.activeIndex,
                        r = 1;
                    if (e.centeredSlides) {
                        for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && ((r += 1), (o += t[l].swiperSlideSize) > s && (n = !0));
                        for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && ((r += 1), (o += t[d].swiperSlideSize) > s && (n = !0));
                    } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                    return r;
                }),
                (t.prototype.update = function () {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            i = e.params;
                        i.breakpoints && e.setBreakpoint(),
                            e.updateSize(),
                            e.updateSlides(),
                            e.updateProgress(),
                            e.updateSlidesClasses(),
                            e.params.freeMode
                                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                                : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                            e.emit("update");
                    }
                    function s() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
                    }
                }),
                (t.prototype.init = function () {
                    this.initialized ||
                        (this.emit("beforeInit"),
                        this.params.breakpoints && this.setBreakpoint(),
                        this.addClasses(),
                        this.params.loop && this.loopCreate(),
                        this.updateSize(),
                        this.updateSlides(),
                        this.params.watchOverflow && this.checkOverflow(),
                        this.params.grabCursor && this.setGrabCursor(),
                        this.params.preloadImages && this.preloadImages(),
                        this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
                        this.attachEvents(),
                        (this.initialized = !0),
                        this.emit("init"));
                }),
                (t.prototype.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        a = i.$el,
                        r = i.$wrapperEl,
                        n = i.slides;
                    i.emit("beforeDestroy"),
                        (i.initialized = !1),
                        i.detachEvents(),
                        s.loop && i.loopDestroy(),
                        t &&
                            (i.removeClasses(),
                            a.removeAttr("style"),
                            r.removeAttr("style"),
                            n &&
                                n.length &&
                                n
                                    .removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" "))
                                    .removeAttr("style")
                                    .removeAttr("data-swiper-slide-index")
                                    .removeAttr("data-swiper-column")
                                    .removeAttr("data-swiper-row")),
                        i.emit("destroy"),
                        Object.keys(i.eventsListeners).forEach(function (e) {
                            i.off(e);
                        }),
                        !1 !== e && ((i.$el[0].swiper = null), i.$el.data("swiper", null), d.deleteProps(i)),
                        (i.destroyed = !0);
                }),
                (t.extendDefaults = function (e) {
                    d.extend(z, e);
                }),
                (i.extendedDefaults.get = function () {
                    return z;
                }),
                (i.defaults.get = function () {
                    return C;
                }),
                (i.Class.get = function () {
                    return e;
                }),
                (i.$.get = function () {
                    return s;
                }),
                Object.defineProperties(t, i),
                t
            );
        })(p),
        P = { name: "device", proto: { device: y }, static: { device: y } },
        $ = { name: "support", proto: { support: h }, static: { support: h } },
        L = { name: "browser", proto: { browser: S }, static: { browser: S } },
        I = {
            name: "resize",
            create: function () {
                var e = this;
                d.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange");
                        },
                    },
                });
            },
            on: {
                init: function () {
                    t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
                },
                destroy: function () {
                    t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
                },
            },
        },
        D = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function (e, t) {
                void 0 === t && (t = {});
                var i = this,
                    s = new (0, D.func)(function (e) {
                        e.forEach(function (e) {
                            i.emit("observerUpdate", e);
                        });
                    });
                s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(s);
            },
            init: function () {
                if (h.observer && this.params.observer) {
                    if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], { childList: !1 }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect();
                }),
                    (this.observer.observers = []);
            },
        },
        O = {
            name: "observer",
            params: { observer: !1, observeParents: !1 },
            create: function () {
                d.extend(this, { observer: { init: D.init.bind(this), attach: D.attach.bind(this), destroy: D.destroy.bind(this), observers: [] } });
            },
            on: {
                init: function () {
                    this.observer.init();
                },
                destroy: function () {
                    this.observer.destroy();
                },
            },
        },
        A = {
            update: function (e) {
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    a = i.slidesPerGroup,
                    r = i.centeredSlides,
                    n = t.virtual,
                    o = n.from,
                    l = n.to,
                    h = n.slides,
                    p = n.slidesGrid,
                    c = n.renderSlide,
                    u = n.offset;
                t.updateActiveIndex();
                var v,
                    f,
                    m,
                    g = t.activeIndex || 0;
                (v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"), r ? ((f = Math.floor(s / 2) + a), (m = Math.floor(s / 2) + a)) : ((f = s + (a - 1)), (m = a));
                var b = Math.max((g || 0) - m, 0),
                    w = Math.min((g || 0) + f, h.length - 1),
                    y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
                function x() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
                }
                if ((d.extend(t.virtual, { from: b, to: w, offset: y, slidesGrid: t.slidesGrid }), o === b && l === w && !e)) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal)
                    return (
                        t.params.virtual.renderExternal.call(t, {
                            offset: y,
                            from: b,
                            to: w,
                            slides: (function () {
                                for (var e = [], t = b; t <= w; t += 1) e.push(h[t]);
                                return e;
                            })(),
                        }),
                        void x()
                    );
                var E = [],
                    T = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else for (var S = o; S <= l; S += 1) (S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var C = 0; C < h.length; C += 1) C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
                T.forEach(function (e) {
                    t.$wrapperEl.append(c(h[e], e));
                }),
                    E.sort(function (e, t) {
                        return e < t;
                    }).forEach(function (e) {
                        t.$wrapperEl.prepend(c(h[e], e));
                    }),
                    t.$wrapperEl.children(".swiper-slide").css(v, y + "px"),
                    x();
            },
            renderSlide: function (e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a;
            },
            appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0);
            },
            prependSlide: function (e) {
                if ((this.virtual.slides.unshift(e), this.params.virtual.cache)) {
                    var t = this.virtual.cache,
                        i = {};
                    Object.keys(t).forEach(function (e) {
                        i[e + 1] = t[e];
                    }),
                        (this.virtual.cache = i);
                }
                this.virtual.update(!0), this.slideNext(0);
            },
        },
        G = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } },
            create: function () {
                d.extend(this, {
                    virtual: { update: A.update.bind(this), appendSlide: A.appendSlide.bind(this), prependSlide: A.prependSlide.bind(this), renderSlide: A.renderSlide.bind(this), slides: this.params.virtual.slides, cache: {} },
                });
            },
            on: {
                beforeInit: function () {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = { watchSlidesProgress: !0 };
                        d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update();
                    }
                },
                setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update();
                },
            },
        },
        H = {
            handle: function (i) {
                var s = this.rtlTranslate,
                    a = i;
                a.originalEvent && (a = a.originalEvent);
                var r = a.keyCode || a.charCode;
                if (!this.allowSlideNext && ((this.isHorizontal() && 39 === r) || (this.isVertical() && 40 === r))) return !1;
                if (!this.allowSlidePrev && ((this.isHorizontal() && 37 === r) || (this.isVertical() && 38 === r))) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || (e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase())))) {
                    if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                        var n = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var o = t.innerWidth,
                            l = t.innerHeight,
                            d = this.$el.offset();
                        s && (d.left -= this.$el[0].scrollLeft);
                        for (
                            var h = [
                                    [d.left, d.top],
                                    [d.left + this.width, d.top],
                                    [d.left, d.top + this.height],
                                    [d.left + this.width, d.top + this.height],
                                ],
                                p = 0;
                            p < h.length;
                            p += 1
                        ) {
                            var c = h[p];
                            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
                        }
                        if (!n) return;
                    }
                    this.isHorizontal()
                        ? ((37 !== r && 39 !== r) || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), ((39 === r && !s) || (37 === r && s)) && this.slideNext(), ((37 === r && !s) || (39 === r && s)) && this.slidePrev())
                        : ((38 !== r && 40 !== r) || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), 40 === r && this.slideNext(), 38 === r && this.slidePrev()),
                        this.emit("keyPress", r);
                }
            },
            enable: function () {
                this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
            },
            disable: function () {
                this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
            },
        },
        N = {
            name: "keyboard",
            params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
            create: function () {
                d.extend(this, { keyboard: { enabled: !1, enable: H.enable.bind(this), disable: H.disable.bind(this), handle: H.handle.bind(this) } });
            },
            on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable();
                },
                destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable();
                },
            },
        };
    var B = {
            lastScrollTime: d.now(),
            event:
                t.navigator.userAgent.indexOf("firefox") > -1
                    ? "DOMMouseScroll"
                    : (function () {
                          var t = "onwheel" in e;
                          if (!t) {
                              var i = e.createElement("div");
                              i.setAttribute("onwheel", "return;"), (t = "function" == typeof i.onwheel);
                          }
                          return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
                      })()
                    ? "wheel"
                    : "mousewheel",
            normalize: function (e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                return (
                    "detail" in e && (i = e.detail),
                    "wheelDelta" in e && (i = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
                    (s = 10 * t),
                    (a = 10 * i),
                    "deltaY" in e && (a = e.deltaY),
                    "deltaX" in e && (s = e.deltaX),
                    (s || a) && e.deltaMode && (1 === e.deltaMode ? ((s *= 40), (a *= 40)) : ((s *= 800), (a *= 800))),
                    s && !t && (t = s < 1 ? -1 : 1),
                    a && !i && (i = a < 1 ? -1 : 1),
                    { spinX: t, spinY: i, pixelX: s, pixelY: a }
                );
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0;
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1;
            },
            handle: function (e) {
                var i = e,
                    s = this,
                    a = s.params.mousewheel;
                if (!s.mouseEntered && !a.releaseOnEdges) return !0;
                i.originalEvent && (i = i.originalEvent);
                var r = 0,
                    n = s.rtlTranslate ? -1 : 1,
                    o = B.normalize(i);
                if (a.forceToAxis)
                    if (s.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        r = o.pixelX * n;
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        r = o.pixelY;
                    }
                else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
                if (0 === r) return !0;
                if ((a.invert && (r = -r), s.params.freeMode)) {
                    s.params.loop && s.loopFix();
                    var l = s.getTranslate() + r * a.sensitivity,
                        h = s.isBeginning,
                        p = s.isEnd;
                    if (
                        (l >= s.minTranslate() && (l = s.minTranslate()),
                        l <= s.maxTranslate() && (l = s.maxTranslate()),
                        s.setTransition(0),
                        s.setTranslate(l),
                        s.updateProgress(),
                        s.updateActiveIndex(),
                        s.updateSlidesClasses(),
                        ((!h && s.isBeginning) || (!p && s.isEnd)) && s.updateSlidesClasses(),
                        s.params.freeModeSticky &&
                            (clearTimeout(s.mousewheel.timeout),
                            (s.mousewheel.timeout = d.nextTick(function () {
                                s.slideToClosest();
                            }, 300))),
                        s.emit("scroll", i),
                        s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(),
                        l === s.minTranslate() || l === s.maxTranslate())
                    )
                        return !0;
                } else {
                    if (d.now() - s.mousewheel.lastScrollTime > 60)
                        if (r < 0)
                            if ((s.isEnd && !s.params.loop) || s.animating) {
                                if (a.releaseOnEdges) return !0;
                            } else s.slideNext(), s.emit("scroll", i);
                        else if ((s.isBeginning && !s.params.loop) || s.animating) {
                            if (a.releaseOnEdges) return !0;
                        } else s.slidePrev(), s.emit("scroll", i);
                    s.mousewheel.lastScrollTime = new t.Date().getTime();
                }
                return i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1;
            },
            enable: function () {
                if (!B.event) return !1;
                if (this.mousewheel.enabled) return !1;
                var e = this.$el;
                return (
                    "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)),
                    e.on("mouseenter", this.mousewheel.handleMouseEnter),
                    e.on("mouseleave", this.mousewheel.handleMouseLeave),
                    e.on(B.event, this.mousewheel.handle),
                    (this.mousewheel.enabled = !0),
                    !0
                );
            },
            disable: function () {
                if (!B.event) return !1;
                if (!this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), (this.mousewheel.enabled = !1), !0;
            },
        },
        X = {
            update: function () {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                        i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
                }
            },
            init: function () {
                var e,
                    t,
                    i = this,
                    a = i.params.navigation;
                (a.nextEl || a.prevEl) &&
                    (a.nextEl && ((e = s(a.nextEl)), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))),
                    a.prevEl && ((t = s(a.prevEl)), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))),
                    e &&
                        e.length > 0 &&
                        e.on("click", function (e) {
                            e.preventDefault(), (i.isEnd && !i.params.loop) || i.slideNext();
                        }),
                    t &&
                        t.length > 0 &&
                        t.on("click", function (e) {
                            e.preventDefault(), (i.isBeginning && !i.params.loop) || i.slidePrev();
                        }),
                    d.extend(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
            },
            destroy: function () {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass));
            },
        },
        Y = {
            update: function () {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i,
                        a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        r = this.pagination.$el,
                        n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (
                        (this.params.loop
                            ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides),
                              i > n - 1 && (i -= n),
                              i < 0 && "bullets" !== this.params.paginationType && (i = n + i))
                            : (i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0),
                        "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0)
                    ) {
                        var o,
                            l,
                            d,
                            h = this.pagination.bullets;
                        if (
                            (t.dynamicBullets &&
                                ((this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"),
                                t.dynamicMainBullets > 1 &&
                                    void 0 !== this.previousIndex &&
                                    ((this.pagination.dynamicBulletIndex += i - this.previousIndex),
                                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                                        ? (this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1)
                                        : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                                (o = i - this.pagination.dynamicBulletIndex),
                                (d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2)),
                            h.removeClass(
                                t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"
                            ),
                            r.length > 1)
                        )
                            h.each(function (e, a) {
                                var r = s(a),
                                    n = r.index();
                                n === i && r.addClass(t.bulletActiveClass),
                                    t.dynamicBullets &&
                                        (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"),
                                        n === o &&
                                            r
                                                .prev()
                                                .addClass(t.bulletActiveClass + "-prev")
                                                .prev()
                                                .addClass(t.bulletActiveClass + "-prev-prev"),
                                        n === l &&
                                            r
                                                .next()
                                                .addClass(t.bulletActiveClass + "-next")
                                                .next()
                                                .addClass(t.bulletActiveClass + "-next-next"));
                            });
                        else if ((h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets)) {
                            for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1) h.eq(u).addClass(t.bulletActiveClass + "-main");
                            p
                                .prev()
                                .addClass(t.bulletActiveClass + "-prev")
                                .prev()
                                .addClass(t.bulletActiveClass + "-prev-prev"),
                                c
                                    .next()
                                    .addClass(t.bulletActiveClass + "-next")
                                    .next()
                                    .addClass(t.bulletActiveClass + "-next-next");
                        }
                        if (t.dynamicBullets) {
                            var v = Math.min(h.length, t.dynamicMainBullets + 4),
                                f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                                m = e ? "right" : "left";
                            h.css(this.isHorizontal() ? m : "top", f + "px");
                        }
                    }
                    if (("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1), r.find("." + t.totalClass).text(n)), "progressbar" === t.type)) {
                        var g;
                        g = t.progressbarOpposite ? (this.isHorizontal() ? "vertical" : "horizontal") : this.isHorizontal() ? "horizontal" : "vertical";
                        var b = (i + 1) / n,
                            w = 1,
                            y = 1;
                        "horizontal" === g ? (w = b) : (y = b),
                            r
                                .find("." + t.progressbarFillClass)
                                .transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")")
                                .transition(this.params.speed);
                    }
                    "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]),
                        r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
                }
            },
            render: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)
                            e.renderBullet ? (s += e.renderBullet.call(this, r, e.bulletClass)) : (s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">");
                        i.html(s), (this.pagination.bullets = i.find("." + e.bulletClass));
                    }
                    "fraction" === e.type && ((s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>'), i.html(s)),
                        "progressbar" === e.type && ((s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>'), i.html(s)),
                        "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
                }
            },
            init: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = s(t.el);
                    0 !== i.length &&
                        (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)),
                        "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                        i.addClass(t.modifierClass + t.type),
                        "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), (e.pagination.dynamicBulletIndex = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                        "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                            i.on("click", "." + t.bulletClass, function (t) {
                                t.preventDefault();
                                var i = s(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                            }),
                        d.extend(e.pagination, { $el: i, el: i[0] }));
                }
            },
            destroy: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
                }
            },
        },
        V = {
            setTranslate: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        o = this.params.scrollbar,
                        l = s,
                        d = (a - s) * i;
                    t ? ((d = -d) > 0 ? ((l = s - d), (d = 0)) : -d + s > a && (l = a + d)) : d < 0 ? ((l = s + d), (d = 0)) : d + s > a && (l = a - d),
                        this.isHorizontal()
                            ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), (r[0].style.width = l + "px"))
                            : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), (r[0].style.height = l + "px")),
                        o.hide &&
                            (clearTimeout(this.scrollbar.timeout),
                            (n[0].style.opacity = 1),
                            (this.scrollbar.timeout = setTimeout(function () {
                                (n[0].style.opacity = 0), n.transition(400);
                            }, 1e3)));
                }
            },
            setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
            },
            updateSize: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    (t[0].style.width = ""), (t[0].style.height = "");
                    var s,
                        a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        n = r * (a / this.size);
                    (s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10)),
                        this.isHorizontal() ? (t[0].style.width = s + "px") : (t[0].style.height = s + "px"),
                        (i[0].style.display = r >= 1 ? "none" : ""),
                        this.params.scrollbarHide && (i[0].style.opacity = 0),
                        d.extend(e, { trackSize: a, divider: r, moveDivider: n, dragSize: s }),
                        e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
                }
            },
            setDragPosition: function (e) {
                var t,
                    i = this.scrollbar,
                    s = this.rtlTranslate,
                    a = i.$el,
                    r = i.dragSize,
                    n = i.trackSize;
                (t =
                    ((this.isHorizontal()
                        ? "touchstart" === e.type || "touchmove" === e.type
                            ? e.targetTouches[0].pageX
                            : e.pageX || e.clientX
                        : "touchstart" === e.type || "touchmove" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY || e.clientY) -
                        a.offset()[this.isHorizontal() ? "left" : "top"] -
                        r / 2) /
                    (n - r)),
                    (t = Math.max(Math.min(t, 1), 0)),
                    s && (t = 1 - t);
                var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
            },
            onDragStart: function (e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                (this.scrollbar.isTouched = !0),
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    r.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(this.scrollbar.dragTimeout),
                    a.transition(0),
                    t.hide && a.css("opacity", 1),
                    this.emit("scrollbarDragStart", e);
            },
            onDragMove: function (e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
            },
            onDragEnd: function (e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar.$el;
                this.scrollbar.isTouched &&
                    ((this.scrollbar.isTouched = !1),
                    t.hide &&
                        (clearTimeout(this.scrollbar.dragTimeout),
                        (this.scrollbar.dragTimeout = d.nextTick(function () {
                            i.css("opacity", 0), i.transition(400);
                        }, 1e3))),
                    this.emit("scrollbarDragEnd", e),
                    t.snapOnRelease && this.slideToClosest());
            },
            enableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEvents,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!h.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 },
                        o = !(!h.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 };
                    h.touch || (!h.pointerEvents && !h.prefixedPointerEvents)
                        ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)),
                          ((a.simulateTouch && !y.ios && !y.android) || (a.simulateTouch && !h.touch && y.ios)) &&
                              (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o)))
                        : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o));
                }
            },
            disableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEvents,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!h.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 },
                        o = !(!h.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 };
                    h.touch || (!h.pointerEvents && !h.prefixedPointerEvents)
                        ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)),
                          ((a.simulateTouch && !y.ios && !y.android) || (a.simulateTouch && !h.touch && y.ios)) &&
                              (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o)))
                        : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o));
                }
            },
            init: function () {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        a = s(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                    var r = a.find("." + this.params.scrollbar.dragClass);
                    0 === r.length && ((r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>')), a.append(r)), d.extend(e, { $el: a, el: a[0], $dragEl: r, dragEl: r[0] }), i.draggable && e.enableDraggable();
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable();
            },
        },
        R = {
            setTransform: function (e, t) {
                var i = this.rtl,
                    a = s(e),
                    r = i ? -1 : 1,
                    n = a.attr("data-swiper-parallax") || "0",
                    o = a.attr("data-swiper-parallax-x"),
                    l = a.attr("data-swiper-parallax-y"),
                    d = a.attr("data-swiper-parallax-scale"),
                    h = a.attr("data-swiper-parallax-opacity");
                if (
                    (o || l ? ((o = o || "0"), (l = l || "0")) : this.isHorizontal() ? ((o = n), (l = "0")) : ((l = n), (o = "0")),
                    (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px"),
                    (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
                    void 0 !== h && null !== h)
                ) {
                    var p = h - (h - 1) * (1 - Math.abs(t));
                    a[0].style.opacity = p;
                }
                if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var c = d - (d - 1) * (1 - Math.abs(t));
                    a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
                }
            },
            setTranslate: function () {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    a = e.progress,
                    r = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                    e.parallax.setTransform(i, a);
                }),
                    i.each(function (t, i) {
                        var n = i.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)),
                            (n = Math.min(Math.max(n, -1), 1)),
                            s(i)
                                .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                                .each(function (t, i) {
                                    e.parallax.setTransform(i, n);
                                });
                    });
            },
            setTransition: function (e) {
                void 0 === e && (e = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                    var a = s(i),
                        r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (r = 0), a.transition(r);
                });
            },
        },
        F = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
            },
            onGestureStart: function (e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    a = i.gesture;
                if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !h.gestures)) {
                    if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                    (i.fakeGestureTouched = !0), (a.scaleStart = F.getDistanceBetweenTouches(e));
                }
                (a.$slideEl && a.$slideEl.length) ||
                ((a.$slideEl = s(e.target).closest(".swiper-slide")),
                0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)),
                (a.$imageEl = a.$slideEl.find("img, svg, canvas")),
                (a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass)),
                (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
                0 !== a.$imageWrapEl.length)
                    ? (a.$imageEl.transition(0), (this.zoom.isScaling = !0))
                    : (a.$imageEl = void 0);
            },
            onGestureChange: function (e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!h.gestures) {
                    if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                    (i.fakeGestureMoved = !0), (s.scaleMove = F.getDistanceBetweenTouches(e));
                }
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    (h.gestures ? (this.zoom.scale = e.scale * i.currentScale) : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
                    i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
                    i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
                    s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
            },
            onGestureEnd: function (e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!h.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !y.android)) return;
                    (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
                }
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
                    s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                    (i.currentScale = i.scale),
                    (i.isScaling = !1),
                    1 === i.scale && (s.$slideEl = void 0));
            },
            onTouchStart: function (e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image;
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    (s.isTouched ||
                        (y.android && e.preventDefault(),
                        (s.isTouched = !0),
                        (s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
            },
            onTouchMove: function (e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && ((this.allowClick = !1), s.isTouched && i.$slideEl)) {
                    s.isMoved ||
                        ((s.width = i.$imageEl[0].offsetWidth),
                        (s.height = i.$imageEl[0].offsetHeight),
                        (s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0),
                        (s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0),
                        (i.slideWidth = i.$slideEl[0].offsetWidth),
                        (i.slideHeight = i.$slideEl[0].offsetHeight),
                        i.$imageWrapEl.transition(0),
                        this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
                    var r = s.width * t.scale,
                        n = s.height * t.scale;
                    if (!(r < i.slideWidth && n < i.slideHeight)) {
                        if (
                            ((s.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
                            (s.maxX = -s.minX),
                            (s.minY = Math.min(i.slideHeight / 2 - n / 2, 0)),
                            (s.maxY = -s.minY),
                            (s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                            !s.isMoved && !t.isScaling)
                        ) {
                            if (this.isHorizontal() && ((Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x) || (Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)))
                                return void (s.isTouched = !1);
                            if (!this.isHorizontal() && ((Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y) || (Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)))
                                return void (s.isTouched = !1);
                        }
                        e.preventDefault(),
                            e.stopPropagation(),
                            (s.isMoved = !0),
                            (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                            (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                            s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                            s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                            s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                            s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                            a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                            a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                            a.prevTime || (a.prevTime = Date.now()),
                            (a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2),
                            (a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2),
                            Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                            Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                            (a.prevPositionX = s.touchesCurrent.x),
                            (a.prevPositionY = s.touchesCurrent.y),
                            (a.prevTime = Date.now()),
                            i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1);
                    (i.isTouched = !1), (i.isMoved = !1);
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        o = i.currentX + n,
                        l = s.y * r,
                        d = i.currentY + l;
                    0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    (i.currentX = o), (i.currentY = d);
                    var p = i.width * e.scale,
                        c = i.height * e.scale;
                    (i.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
                        (i.maxX = -i.minX),
                        (i.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
                        (i.maxY = -i.minY),
                        (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                        (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                        t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
                }
            },
            onTransitionEnd: function () {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl &&
                    this.previousIndex !== this.activeIndex &&
                    (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), (t.$slideEl = void 0), (t.$imageEl = void 0), (t.$imageWrapEl = void 0), (e.scale = 1), (e.currentScale = 1));
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function (e) {
                var t,
                    i,
                    a,
                    r,
                    n,
                    o,
                    l,
                    d,
                    h,
                    p,
                    c,
                    u,
                    v,
                    f,
                    m,
                    g,
                    b = this.zoom,
                    w = this.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl || ((y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex)), (y.$imageEl = y.$slideEl.find("img, svg, canvas")), (y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass))),
                y.$imageEl && 0 !== y.$imageEl.length) &&
                    (y.$slideEl.addClass("" + w.zoomedSlideClass),
                    void 0 === x.touchesStart.x && e
                        ? ((t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                        : ((t = x.touchesStart.x), (i = x.touchesStart.y)),
                    (b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                    (b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                    e
                        ? ((m = y.$slideEl[0].offsetWidth),
                          (g = y.$slideEl[0].offsetHeight),
                          (a = y.$slideEl.offset().left + m / 2 - t),
                          (r = y.$slideEl.offset().top + g / 2 - i),
                          (l = y.$imageEl[0].offsetWidth),
                          (d = y.$imageEl[0].offsetHeight),
                          (h = l * b.scale),
                          (p = d * b.scale),
                          (v = -(c = Math.min(m / 2 - h / 2, 0))),
                          (f = -(u = Math.min(g / 2 - p / 2, 0))),
                          (n = a * b.scale),
                          (o = r * b.scale),
                          n < c && (n = c),
                          n > v && (n = v),
                          o < u && (o = u),
                          o > f && (o = f))
                        : ((n = 0), (o = 0)),
                    y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"),
                    y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
            },
            out: function () {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || ((i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex)), (i.$imageEl = i.$slideEl.find("img, svg, canvas")), (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        ((e.scale = 1),
                        (e.currentScale = 1),
                        i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        i.$slideEl.removeClass("" + t.zoomedSlideClass),
                        (i.$slideEl = void 0));
            },
            enable: function () {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };
                    h.gestures
                        ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t),
                          this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t),
                          this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t))
                        : "touchstart" === this.touchEvents.start &&
                          (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t),
                          this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t),
                          this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)),
                        this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
                }
            },
            disable: function () {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };
                    h.gestures
                        ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t),
                          this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t),
                          this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t))
                        : "touchstart" === this.touchEvents.start &&
                          (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t),
                          this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t),
                          this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)),
                        this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
                }
            },
        },
        W = {
            loadInSlide: function (e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    a = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                    !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])),
                        0 !== n.length &&
                            n.each(function (e, n) {
                                var o = s(n);
                                o.addClass(a.loadingClass);
                                var l = o.attr("data-background"),
                                    d = o.attr("data-src"),
                                    h = o.attr("data-srcset"),
                                    p = o.attr("data-sizes");
                                i.loadImage(o[0], d || l, h, p, !1, function () {
                                    if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                        if (
                                            (l
                                                ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background"))
                                                : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))),
                                            o.addClass(a.loadedClass).removeClass(a.loadingClass),
                                            r.find("." + a.preloaderClass).remove(),
                                            i.params.loop && t)
                                        ) {
                                            var e = r.attr("data-swiper-slide-index");
                                            if (r.hasClass(i.params.slideDuplicateClass)) {
                                                var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                                i.lazy.loadInSlide(s.index(), !1);
                                            } else {
                                                var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                i.lazy.loadInSlide(n.index(), !1);
                                            }
                                        }
                                        i.emit("lazyImageReady", r[0], o[0]);
                                    }
                                }),
                                    i.emit("lazyImageLoad", r[0], o[0]);
                            });
                }
            },
            load: function () {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    a = e.slides,
                    r = e.activeIndex,
                    n = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;
                function d(e) {
                    if (n) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                    } else if (a[e]) return !0;
                    return !1;
                }
                function h(e) {
                    return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
                }
                if (("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility))
                    t.children("." + i.slideVisibleClass).each(function (t, i) {
                        var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                        e.lazy.loadInSlide(a);
                    });
                else if (l > 1) for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(r);
                if (o.loadPrevNext)
                    if (l > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
                        for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                        for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g);
                    } else {
                        var b = t.children("." + i.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(h(b));
                        var w = t.children("." + i.slidePrevClass);
                        w.length > 0 && e.lazy.loadInSlide(h(w));
                    }
            },
        },
        q = {
            LinearSpline: function (e, t) {
                var i,
                    s,
                    a,
                    r,
                    n,
                    o = function (e, t) {
                        for (s = -1, i = e.length; i - s > 1; ) e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
                        return i;
                    };
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function (e) {
                        return e ? ((n = o(this.x, e)), (r = n - 1), ((e - this.x[r]) * (this.y[n] - this.y[r])) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function (e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid));
            },
            setTranslate: function (e, t) {
                var i,
                    s,
                    a = this,
                    r = a.controller.control;
                function n(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), (s = -a.controller.spline.interpolate(-t))),
                        (s && "container" !== a.params.controller.by) || ((i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate())), (s = (t - a.minTranslate()) * i + e.minTranslate())),
                        a.params.controller.inverse && (s = e.maxTranslate() - s),
                        e.updateProgress(s),
                        e.setTranslate(s, a),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof k && n(r[o]);
                else r instanceof k && t !== r && n(r);
            },
            setTransition: function (e, t) {
                var i,
                    s = this,
                    a = s.controller.control;
                function r(t) {
                    t.setTransition(e, s),
                        0 !== e &&
                            (t.transitionStart(),
                            t.$wrapperEl.transitionEnd(function () {
                                a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
                            }));
                }
                if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof k && r(a[i]);
                else a instanceof k && t !== a && r(a);
            },
        },
        j = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e;
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e;
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e;
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e;
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function (e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = s(e.target);
                    this.navigation &&
                        this.navigation.$nextEl &&
                        i.is(this.navigation.$nextEl) &&
                        ((this.isEnd && !this.params.loop) || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                        this.navigation &&
                            this.navigation.$prevEl &&
                            i.is(this.navigation.$prevEl) &&
                            ((this.isBeginning && !this.params.loop) || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                        this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation: function () {
                if (!this.params.loop) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
                }
            },
            updatePagination: function () {
                var e = this,
                    t = e.params.a11y;
                e.pagination &&
                    e.params.pagination.clickable &&
                    e.pagination.bullets &&
                    e.pagination.bullets.length &&
                    e.pagination.bullets.each(function (i, a) {
                        var r = s(a);
                        e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
                    });
            },
            init: function () {
                this.$el.append(this.a11y.liveRegion);
                var e,
                    t,
                    i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                    this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                    e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)),
                    t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)),
                    this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
            },
            destroy: function () {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                    this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                    e && e.off("keydown", this.a11y.onEnterKey),
                    t && t.off("keydown", this.a11y.onEnterKey),
                    this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
            },
        },
        K = {
            init: function () {
                if (this.params.history) {
                    if (!t.history || !t.history.pushState) return (this.params.history.enabled = !1), void (this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    (e.initialized = !0),
                        (e.paths = K.getPathValues()),
                        (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
                }
            },
            destroy: function () {
                this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
            },
            setHistoryPopState: function () {
                (this.history.paths = K.getPathValues()), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
            },
            getPathValues: function () {
                var e = t.location.pathname
                        .slice(1)
                        .split("/")
                        .filter(function (e) {
                            return "" !== e;
                        }),
                    i = e.length;
                return { key: e[i - 2], value: e[i - 1] };
            },
            setHistory: function (e, i) {
                if (this.history.initialized && this.params.history.enabled) {
                    var s = this.slides.eq(i),
                        a = K.slugify(s.attr("data-history"));
                    t.location.pathname.includes(e) || (a = e + "/" + a);
                    var r = t.history.state;
                    (r && r.value === a) || (this.params.history.replaceState ? t.history.replaceState({ value: a }, null, a) : t.history.pushState({ value: a }, null, a));
                }
            },
            slugify: function (e) {
                return e
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, "");
            },
            scrollToSlide: function (e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var r = this.slides.eq(s);
                        if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var n = r.index();
                            this.slideTo(n, e, i);
                        }
                    }
                else this.slideTo(0, e, i);
            },
        },
        U = {
            onHashCange: function () {
                var t = e.location.hash.replace("#", "");
                t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index());
            },
            setHash: function () {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                    else {
                        var i = this.slides.eq(this.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        e.location.hash = s || "";
                    }
            },
            init: function () {
                if (!(!this.params.hashNavigation.enabled || (this.params.history && this.params.history.enabled))) {
                    this.hashNavigation.initialized = !0;
                    var i = e.location.hash.replace("#", "");
                    if (i)
                        for (var a = 0, r = this.slides.length; a < r; a += 1) {
                            var n = this.slides.eq(a);
                            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                var o = n.index();
                                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
                            }
                        }
                    this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
                }
            },
            destroy: function () {
                this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
            },
        },
        _ = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    (e.autoplay.timeout = d.nextTick(function () {
                        e.params.autoplay.reverseDirection
                            ? e.params.loop
                                ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.isBeginning
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))
                                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.params.loop
                            ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                            : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
                    }, i));
            },
            start: function () {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0);
            },
            stop: function () {
                return (
                    !!this.autoplay.running &&
                    void 0 !== this.autoplay.timeout &&
                    (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)), (this.autoplay.running = !1), this.emit("autoplayStop"), !0)
                );
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running &&
                    (t.autoplay.paused ||
                        (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                        (t.autoplay.paused = !0),
                        0 !== e && t.params.autoplay.waitForTransition
                            ? t.$wrapperEl.transitionEnd(function () {
                                  t && !t.destroyed && ((t.autoplay.paused = !1), t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                              })
                            : ((t.autoplay.paused = !1), t.autoplay.run())));
            },
        },
        Z = {
            setTranslate: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || ((a = s), (s = 0));
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: r }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var a = !1;
                    i.transitionEnd(function () {
                        if (!a && t && !t.destroyed) {
                            (a = !0), (t.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]);
                        }
                    });
                }
            },
        },
        Q = {
            setTranslate: function () {
                var e,
                    t = this.$el,
                    i = this.$wrapperEl,
                    a = this.slides,
                    r = this.width,
                    n = this.height,
                    o = this.rtlTranslate,
                    l = this.size,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    c = 0;
                d.shadow &&
                    (h
                        ? (0 === (e = i.find(".swiper-cube-shadow")).length && ((e = s('<div class="swiper-cube-shadow"></div>')), i.append(e)), e.css({ height: r + "px" }))
                        : 0 === (e = t.find(".swiper-cube-shadow")).length && ((e = s('<div class="swiper-cube-shadow"></div>')), t.append(e)));
                for (var u = 0; u < a.length; u += 1) {
                    var v = a.eq(u),
                        f = u;
                    p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && ((m = -m), (g = Math.floor(-m / 360)));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? ((w = 4 * -g * l), (x = 0)) : (f - 1) % 4 == 0 ? ((w = 0), (x = 4 * -g * l)) : (f - 2) % 4 == 0 ? ((w = l + 4 * g * l), (x = l)) : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
                        o && (w = -w),
                        h || ((y = w), (w = 0));
                    var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if ((b <= 1 && b > -1 && ((c = 90 * f + 90 * b), o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows)) {
                        var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === T.length && ((T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>')), v.append(T)),
                            0 === C.length && ((C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>')), v.append(C)),
                            T.length && (T[0].style.opacity = Math.max(-b, 0)),
                            C.length && (C[0].style.opacity = Math.max(b, 0));
                    }
                }
                if (
                    (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }),
                    d.shadow)
                )
                    if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            z = 1.5 - (Math.sin((2 * M * Math.PI) / 360) / 2 + Math.cos((2 * M * Math.PI) / 360) / 2),
                            k = d.shadowScale,
                            P = d.shadowScale / z,
                            $ = d.shadowOffset;
                        e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
                    }
                var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
            },
            setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
            },
        },
        J = {
            setTranslate: function () {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var a = e.eq(i),
                        r = a[0].progress;
                    this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -a[0].swiperSlideOffset,
                        d = 0;
                    if ((this.isHorizontal() ? t && (n = -n) : ((d = l), (l = 0), (o = -n), (n = 0)), (a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length), this.params.flipEffect.slideShadows)) {
                        var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                            p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === h.length && ((h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>')), a.append(h)),
                            0 === p.length && ((p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>')), a.append(p)),
                            h.length && (h[0].style.opacity = Math.max(-r, 0)),
                            p.length && (p[0].style.opacity = Math.max(r, 0));
                    }
                    a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if ((i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var r = !1;
                    i.eq(s).transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            (r = !0), (t.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i]);
                        }
                    });
                }
            },
        },
        ee = {
            setTranslate: function () {
                for (
                    var e = this.width,
                        t = this.height,
                        i = this.slides,
                        a = this.$wrapperEl,
                        r = this.slidesSizesGrid,
                        n = this.params.coverflowEffect,
                        o = this.isHorizontal(),
                        l = this.translate,
                        d = o ? e / 2 - l : t / 2 - l,
                        p = o ? n.rotate : -n.rotate,
                        c = n.depth,
                        u = 0,
                        v = i.length;
                    u < v;
                    u += 1
                ) {
                    var f = i.eq(u),
                        m = r[u],
                        g = ((d - f[0].swiperSlideOffset - m / 2) / m) * n.modifier,
                        b = o ? p * g : 0,
                        w = o ? 0 : p * g,
                        y = -c * Math.abs(g),
                        x = o ? 0 : n.stretch * g,
                        E = o ? n.stretch * g : 0;
                    Math.abs(E) < 0.001 && (E = 0), Math.abs(x) < 0.001 && (x = 0), Math.abs(y) < 0.001 && (y = 0), Math.abs(b) < 0.001 && (b = 0), Math.abs(w) < 0.001 && (w = 0);
                    var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                    if ((f.transform(T), (f[0].style.zIndex = 1 - Math.abs(Math.round(g))), n.slideShadows)) {
                        var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === S.length && ((S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>')), f.append(S)),
                            0 === C.length && ((C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>')), f.append(C)),
                            S.length && (S[0].style.opacity = g > 0 ? g : 0),
                            C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
                    }
                }
                (h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%");
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            },
        },
        te = [
            P,
            $,
            L,
            I,
            O,
            G,
            N,
            {
                name: "mousewheel",
                params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
                create: function () {
                    d.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: B.enable.bind(this),
                            disable: B.disable.bind(this),
                            handle: B.handle.bind(this),
                            handleMouseEnter: B.handleMouseEnter.bind(this),
                            handleMouseLeave: B.handleMouseLeave.bind(this),
                            lastScrollTime: d.now(),
                        },
                    });
                },
                on: {
                    init: function () {
                        this.params.mousewheel.enabled && this.mousewheel.enable();
                    },
                    destroy: function () {
                        this.mousewheel.enabled && this.mousewheel.disable();
                    },
                },
            },
            {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create: function () {
                    d.extend(this, { navigation: { init: X.init.bind(this), update: X.update.bind(this), destroy: X.destroy.bind(this) } });
                },
                on: {
                    init: function () {
                        this.navigation.init(), this.navigation.update();
                    },
                    toEdge: function () {
                        this.navigation.update();
                    },
                    fromEdge: function () {
                        this.navigation.update();
                    },
                    destroy: function () {
                        this.navigation.destroy();
                    },
                    click: function (e) {
                        var t = this.navigation,
                            i = t.$nextEl,
                            a = t.$prevEl;
                        !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass));
                    },
                },
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock",
                    },
                },
                create: function () {
                    d.extend(this, { pagination: { init: Y.init.bind(this), render: Y.render.bind(this), update: Y.update.bind(this), destroy: Y.destroy.bind(this), dynamicBulletIndex: 0 } });
                },
                on: {
                    init: function () {
                        this.pagination.init(), this.pagination.render(), this.pagination.update();
                    },
                    activeIndexChange: function () {
                        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
                    },
                    snapIndexChange: function () {
                        this.params.loop || this.pagination.update();
                    },
                    slidesLengthChange: function () {
                        this.params.loop && (this.pagination.render(), this.pagination.update());
                    },
                    snapGridLengthChange: function () {
                        this.params.loop || (this.pagination.render(), this.pagination.update());
                    },
                    destroy: function () {
                        this.pagination.destroy();
                    },
                    click: function (e) {
                        this.params.pagination.el &&
                            this.params.pagination.hideOnClick &&
                            this.pagination.$el.length > 0 &&
                            !s(e.target).hasClass(this.params.pagination.bulletClass) &&
                            this.pagination.$el.toggleClass(this.params.pagination.hiddenClass);
                    },
                },
            },
            {
                name: "scrollbar",
                params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                create: function () {
                    d.extend(this, {
                        scrollbar: {
                            init: V.init.bind(this),
                            destroy: V.destroy.bind(this),
                            updateSize: V.updateSize.bind(this),
                            setTranslate: V.setTranslate.bind(this),
                            setTransition: V.setTransition.bind(this),
                            enableDraggable: V.enableDraggable.bind(this),
                            disableDraggable: V.disableDraggable.bind(this),
                            setDragPosition: V.setDragPosition.bind(this),
                            onDragStart: V.onDragStart.bind(this),
                            onDragMove: V.onDragMove.bind(this),
                            onDragEnd: V.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null,
                        },
                    });
                },
                on: {
                    init: function () {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
                    },
                    update: function () {
                        this.scrollbar.updateSize();
                    },
                    resize: function () {
                        this.scrollbar.updateSize();
                    },
                    observerUpdate: function () {
                        this.scrollbar.updateSize();
                    },
                    setTranslate: function () {
                        this.scrollbar.setTranslate();
                    },
                    setTransition: function (e) {
                        this.scrollbar.setTransition(e);
                    },
                    destroy: function () {
                        this.scrollbar.destroy();
                    },
                },
            },
            {
                name: "parallax",
                params: { parallax: { enabled: !1 } },
                create: function () {
                    d.extend(this, { parallax: { setTransform: R.setTransform.bind(this), setTranslate: R.setTranslate.bind(this), setTransition: R.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0);
                    },
                    init: function () {
                        this.params.parallax && this.parallax.setTranslate();
                    },
                    setTranslate: function () {
                        this.params.parallax && this.parallax.setTranslate();
                    },
                    setTransition: function (e) {
                        this.params.parallax && this.parallax.setTransition(e);
                    },
                },
            },
            {
                name: "zoom",
                params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                create: function () {
                    var e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {},
                            },
                            velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
                        t[i] = F[i].bind(e);
                    }),
                        d.extend(e, { zoom: t });
                },
                on: {
                    init: function () {
                        this.params.zoom.enabled && this.zoom.enable();
                    },
                    destroy: function () {
                        this.zoom.disable();
                    },
                    touchStart: function (e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e);
                    },
                    touchEnd: function (e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e);
                    },
                    doubleTap: function (e) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
                    },
                    transitionEnd: function () {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
                    },
                },
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                },
                create: function () {
                    d.extend(this, { lazy: { initialImageLoaded: !1, load: W.load.bind(this), loadInSlide: W.loadInSlide.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
                    },
                    init: function () {
                        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
                    },
                    scroll: function () {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
                    },
                    resize: function () {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    scrollbarDragMove: function () {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    transitionStart: function () {
                        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || (!this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded)) && this.lazy.load();
                    },
                    transitionEnd: function () {
                        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
                    },
                },
            },
            {
                name: "controller",
                params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                create: function () {
                    d.extend(this, {
                        controller: { control: this.params.controller.control, getInterpolateFunction: q.getInterpolateFunction.bind(this), setTranslate: q.setTranslate.bind(this), setTransition: q.setTransition.bind(this) },
                    });
                },
                on: {
                    update: function () {
                        this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    resize: function () {
                        this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    observerUpdate: function () {
                        this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    setTranslate: function (e, t) {
                        this.controller.control && this.controller.setTranslate(e, t);
                    },
                    setTransition: function (e, t) {
                        this.controller.control && this.controller.setTransition(e, t);
                    },
                },
            },
            {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                    },
                },
                create: function () {
                    var e = this;
                    d.extend(e, { a11y: { liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }),
                        Object.keys(j).forEach(function (t) {
                            e.a11y[t] = j[t].bind(e);
                        });
                },
                on: {
                    init: function () {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
                    },
                    toEdge: function () {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    fromEdge: function () {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    paginationUpdate: function () {
                        this.params.a11y.enabled && this.a11y.updatePagination();
                    },
                    destroy: function () {
                        this.params.a11y.enabled && this.a11y.destroy();
                    },
                },
            },
            {
                name: "history",
                params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                create: function () {
                    d.extend(this, {
                        history: { init: K.init.bind(this), setHistory: K.setHistory.bind(this), setHistoryPopState: K.setHistoryPopState.bind(this), scrollToSlide: K.scrollToSlide.bind(this), destroy: K.destroy.bind(this) },
                    });
                },
                on: {
                    init: function () {
                        this.params.history.enabled && this.history.init();
                    },
                    destroy: function () {
                        this.params.history.enabled && this.history.destroy();
                    },
                    transitionEnd: function () {
                        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
                    },
                },
            },
            {
                name: "hash-navigation",
                params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                create: function () {
                    d.extend(this, { hashNavigation: { initialized: !1, init: U.init.bind(this), destroy: U.destroy.bind(this), setHash: U.setHash.bind(this), onHashCange: U.onHashCange.bind(this) } });
                },
                on: {
                    init: function () {
                        this.params.hashNavigation.enabled && this.hashNavigation.init();
                    },
                    destroy: function () {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
                    },
                    transitionEnd: function () {
                        this.hashNavigation.initialized && this.hashNavigation.setHash();
                    },
                },
            },
            {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                create: function () {
                    d.extend(this, { autoplay: { running: !1, paused: !1, run: _.run.bind(this), start: _.start.bind(this), stop: _.stop.bind(this), pause: _.pause.bind(this) } });
                },
                on: {
                    init: function () {
                        this.params.autoplay.enabled && this.autoplay.start();
                    },
                    beforeTransitionStart: function (e, t) {
                        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
                    },
                    sliderFirstMove: function () {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
                    },
                    destroy: function () {
                        this.autoplay.running && this.autoplay.stop();
                    },
                },
            },
            {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function () {
                    d.extend(this, { fadeEffect: { setTranslate: Z.setTranslate.bind(this), setTransition: Z.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        if ("fade" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "fade");
                            var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            d.extend(this.params, e), d.extend(this.originalParams, e);
                        }
                    },
                    setTranslate: function () {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-cube",
                params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                create: function () {
                    d.extend(this, { cubeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        if ("cube" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                            d.extend(this.params, e), d.extend(this.originalParams, e);
                        }
                    },
                    setTranslate: function () {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create: function () {
                    d.extend(this, { flipEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        if ("flip" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            d.extend(this.params, e), d.extend(this.originalParams, e);
                        }
                    },
                    setTranslate: function () {
                        "flip" === this.params.effect && this.flipEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-coverflow",
                params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
                create: function () {
                    d.extend(this, { coverflowEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        "coverflow" === this.params.effect &&
                            (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                            this.classNames.push(this.params.containerModifierClass + "3d"),
                            (this.params.watchSlidesProgress = !0),
                            (this.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate: function () {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
                    },
                },
            },
        ];
    return void 0 === k.use && ((k.use = k.Class.use), (k.installModule = k.Class.installModule)), k.use(te), k;
});
!(function (a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
            (this.options = a.extend({}, e.Defaults, c)),
            (this.$element = a(b)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
            (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
            a.each(
                ["onResize", "onThrottledResize"],
                a.proxy(function (b, c) {
                    this._handlers[c] = a.proxy(this[c], this);
                }, this)
            ),
            a.each(
                e.Plugins,
                a.proxy(function (a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                }, this)
            ),
            a.each(
                e.Workers,
                a.proxy(function (b, c) {
                    this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    (e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    }),
        (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (e.Type = { Event: "event", State: "state" }),
        (e.Plugins = {}),
        (e.Workers = [
            {
                filter: ["width", "settings"],
                run: function () {
                    this._width = this.$element.width();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current = this._items && this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    this.$stage.children(".cloned").remove();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this.settings.margin || "",
                        c = !this.settings.autoWidth,
                        d = this.settings.rtl,
                        e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
                    !c && this.$stage.children().css(e), (a.css = e);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                        c = null,
                        d = this._items.length,
                        e = !this.settings.autoWidth,
                        f = [];
                    for (a.items = { merge: !1, width: b }; d--; )
                        (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
                    this._widths = f;
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var b = [],
                        c = this._items,
                        d = this.settings,
                        e = Math.max(2 * d.items, 4),
                        f = 2 * Math.ceil(c.length / 2),
                        g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                        h = "",
                        i = "";
                    for (g /= 2; g--; ) b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i);
                    (this._clones = b), a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                        (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
                    this._coordinates = f;
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var a = this.settings.stagePadding,
                        b = this._coordinates,
                        c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
                    this.$stage.css(c);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this._coordinates.length,
                        c = !this.settings.autoWidth,
                        d = this.$stage.children();
                    if (c && a.items.merge) for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                    else c && ((a.css.width = a.items.width), d.css(a.css));
                },
            },
            {
                filter: ["items"],
                run: function () {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style");
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
                },
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var a,
                        b,
                        c,
                        d,
                        e = this.settings.rtl ? 1 : -1,
                        f = 2 * this.settings.stagePadding,
                        g = this.coordinates(this.current()) + f,
                        h = g + this.width() * e,
                        i = [];
                    for (c = 0, d = this._coordinates.length; c < d; c++)
                        (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                    this.$stage.children(".active").removeClass("active"),
                        this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                        this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
                },
            },
        ]),
        (e.prototype.initialize = function () {
            if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                var b, c, e;
                (b = this.$element.find("img")), (c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d), (e = this.$element.children(c).width()), b.length && e <= 0 && this.preloadAutoWidthImages(b);
            }
            this.$element.addClass(this.options.loadingClass),
                (this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
                this.$element.append(this.$stage.parent()),
                this.replace(this.$element.children().not(this.$stage.parent())),
                this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
                this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized");
        }),
        (e.prototype.setup = function () {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c
                ? (a.each(c, function (a) {
                      a <= b && a > d && (d = Number(a));
                  }),
                  (e = a.extend({}, this.options, c[d])),
                  "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                  delete e.responsive,
                  e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d)))
                : (e = a.extend({}, this.options)),
                this.trigger("change", { property: { name: "settings", value: e } }),
                (this._breakpoint = d),
                (this.settings = e),
                this.invalidate("settings"),
                this.trigger("changed", { property: { name: "settings", value: this.settings } });
        }),
        (e.prototype.optionsLogic = function () {
            this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", { content: b });
            return (
                c.data ||
                    (c.data = a("<" + this.settings.itemElement + "/>")
                        .addClass(this.options.itemClass)
                        .append(b)),
                this.trigger("prepared", { content: c.data }),
                c.data
            );
        }),
        (e.prototype.update = function () {
            for (
                var b = 0,
                    c = this._pipe.length,
                    d = a.proxy(function (a) {
                        return this[a];
                    }, this._invalidated),
                    e = {};
                b < c;

            )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (e.prototype.width = function (a) {
            switch ((a = a || e.Width.Default)) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin;
            }
        }),
        (e.prototype.refresh = function () {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
        }),
        (e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
        }),
        (e.prototype.onResize = function () {
            return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.$element.is(":visible") &&
                (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
            );
        }),
        (e.prototype.registerEventHandlers = function () {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
                this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                    (this.$element.addClass(this.options.dragClass),
                    this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                    this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                        return !1;
                    })),
                this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
        }),
        (e.prototype.onDragStart = function (b) {
            var d = null;
            3 !== b.which &&
                (a.support.transform
                    ? ((d = this.$stage
                          .css("transform")
                          .replace(/.*\(|\)| /g, "")
                          .split(",")),
                      (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
                    : ((d = this.$stage.position()), (d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top })),
                this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = a(b.target)),
                (this._drag.stage.start = d),
                (this._drag.stage.current = d),
                (this._drag.pointer = this.pointer(b)),
                a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                a(c).one(
                    "mousemove.owl.core touchmove.owl.core",
                    a.proxy(function (b) {
                        var d = this.difference(this._drag.pointer, this.pointer(b));
                        a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                    }, this)
                ));
        }),
        (e.prototype.onDragMove = function (a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") &&
                (a.preventDefault(),
                this.settings.loop
                    ? ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b))
                    : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                      (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                      (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                      (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                (this._drag.stage.current = f),
                this.animate(f.x));
        }),
        (e.prototype.onDragEnd = function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
                    (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                    this.invalidate("position"),
                    this.update(),
                    (this._drag.direction = f),
                    (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                        this._drag.target.one("click.owl.core", function () {
                            return !1;
                        })),
                this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
        }),
        (e.prototype.closest = function (b, c) {
            var d = -1,
                e = 30,
                f = this.width(),
                g = this.coordinates();
            return (
                this.settings.freeDrag ||
                    a.each(
                        g,
                        a.proxy(function (a, h) {
                            return (
                                "left" === c && b > h - e && b < h + e ? (d = a) : "right" === c && b > h - f - e && b < h - f + e ? (d = a + 1) : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a),
                                d === -1
                            );
                        }, this)
                    ),
                this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? (d = b = this.minimum()) : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
                d
            );
        }),
        (e.prototype.animate = function (b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
                c && (this.enter("animating"), this.trigger("translate")),
                a.support.transform3d && a.support.transition
                    ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" })
                    : c
                    ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))
                    : this.$stage.css({ left: b + "px" });
        }),
        (e.prototype.is = function (a) {
            return this._states.current[a] && this._states.current[a] > 0;
        }),
        (e.prototype.current = function (a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (((a = this.normalize(a)), this._current !== a)) {
                var b = this.trigger("change", { property: { name: "position", value: a } });
                b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
            }
            return this._current;
        }),
        (e.prototype.invalidate = function (b) {
            return (
                "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
                a.map(this._invalidated, function (a, b) {
                    return b;
                })
            );
        }),
        (e.prototype.reset = function (a) {
            (a = this.normalize(a)), a !== d && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
        }),
        (e.prototype.normalize = function (a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || c < 1 ? (a = d) : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a;
        }),
        (e.prototype.relative = function (a) {
            return (a -= this._clones.length / 2), this.normalize(a, !0);
        }),
        (e.prototype.maximum = function (a) {
            var b,
                c,
                d,
                e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && ((c += this._items[b].width() + this.settings.margin), !(c > d)); );
                f = b + 1;
            } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0);
        }),
        (e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2;
        }),
        (e.prototype.items = function (a) {
            return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
        }),
        (e.prototype.mergers = function (a) {
            return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
        }),
        (e.prototype.clones = function (b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function (a) {
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
                };
            return b === d
                ? a.map(this._clones, function (a, b) {
                      return f(b);
                  })
                : a.map(this._clones, function (a, c) {
                      return a === b ? f(c) : null;
                  });
        }),
        (e.prototype.speed = function (a) {
            return a !== d && (this._speed = a), this._speed;
        }),
        (e.prototype.coordinates = function (b) {
            var c,
                e = 1,
                f = b - 1;
            return b === d
                ? a.map(
                      this._coordinates,
                      a.proxy(function (a, b) {
                          return this.coordinates(b);
                      }, this)
                  )
                : (this.settings.center ? (this.settings.rtl && ((e = -1), (f = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e)) : (c = this._coordinates[f] || 0), (c = Math.ceil(c)));
        }),
        (e.prototype.duration = function (a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
        }),
        (e.prototype.to = function (a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (e < 0),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop
                ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h), d !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
                : this.settings.rewind
                ? ((i += 1), (a = ((a % i) + i) % i))
                : (a = Math.max(h, Math.min(i, a))),
                this.speed(this.duration(c, a, b)),
                this.current(a),
                this.$element.is(":visible") && this.update();
        }),
        (e.prototype.next = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) + 1, a);
        }),
        (e.prototype.prev = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) - 1, a);
        }),
        (e.prototype.onTransitionEnd = function (a) {
            if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated");
        }),
        (e.prototype.viewport = function () {
            var d;
            return (
                this.options.responsiveBaseElement !== b
                    ? (d = a(this.options.responsiveBaseElement).width())
                    : b.innerWidth
                    ? (d = b.innerWidth)
                    : c.documentElement && c.documentElement.clientWidth
                    ? (d = c.documentElement.clientWidth)
                    : console.warn("Can not detect viewport width."),
                d
            );
        }),
        (e.prototype.replace = function (b) {
            this.$stage.empty(),
                (this._items = []),
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                b
                    .filter(function () {
                        return 1 === this.nodeType;
                    })
                    .each(
                        a.proxy(function (a, b) {
                            (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                        }, this)
                    ),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items");
        }),
        (e.prototype.add = function (b, c) {
            var e = this.relative(this._current);
            (c = c === d ? this._items.length : this.normalize(c, !0)),
                (b = b instanceof jQuery ? b : a(b)),
                this.trigger("add", { content: b, position: c }),
                (b = this.prepare(b)),
                0 === this._items.length || c === this._items.length
                    ? (0 === this._items.length && this.$stage.append(b),
                      0 !== this._items.length && this._items[c - 1].after(b),
                      this._items.push(b),
                      this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                    : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", { content: b, position: c });
        }),
        (e.prototype.remove = function (a) {
            (a = this.normalize(a, !0)),
                a !== d &&
                    (this.trigger("remove", { content: this._items[a], position: a }),
                    this._items[a].remove(),
                    this._items.splice(a, 1),
                    this._mergers.splice(a, 1),
                    this.invalidate("items"),
                    this.trigger("removed", { content: null, position: a }));
        }),
        (e.prototype.preloadAutoWidthImages = function (b) {
            b.each(
                a.proxy(function (b, c) {
                    this.enter("pre-loading"),
                        (c = a(c)),
                        a(new Image())
                            .one(
                                "load",
                                a.proxy(function (a) {
                                    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                }, this)
                            )
                            .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
                }, this)
            );
        }),
        (e.prototype.destroy = function () {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$element
                    .removeClass(this.options.refreshClass)
                    .removeClass(this.options.loadingClass)
                    .removeClass(this.options.loadedClass)
                    .removeClass(this.options.rtlClass)
                    .removeClass(this.options.dragClass)
                    .removeClass(this.options.grabClass)
                    .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                    .removeData("owl.carousel");
        }),
        (e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c;
            }
        }),
        (e.prototype.on = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
        }),
        (e.prototype.off = function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
        }),
        (e.prototype.trigger = function (b, c, d, f, g) {
            var h = { item: { count: this._items.length, index: this.current() } },
                i = a.camelCase(
                    a
                        .grep(["on", b, d], function (a) {
                            return a;
                        })
                        .join("-")
                        .toLowerCase()
                ),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
            return (
                this._supress[b] ||
                    (a.each(this._plugins, function (a, b) {
                        b.onTrigger && b.onTrigger(j);
                    }),
                    this.register({ type: e.Type.Event, name: b }),
                    this.$element.trigger(j),
                    this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                j
            );
        }),
        (e.prototype.enter = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
                }, this)
            );
        }),
        (e.prototype.leave = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b]--;
                }, this)
            );
        }),
        (e.prototype.register = function (b) {
            if (b.type === e.Type.Event) {
                if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                    var c = a.event.special[b.name]._default;
                    (a.event.special[b.name]._default = function (a) {
                        return !c || !c.apply || (a.namespace && a.namespace.indexOf("owl") !== -1) ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                    }),
                        (a.event.special[b.name].owl = !0);
                }
            } else
                b.type === e.Type.State &&
                    (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
                    (this._states.tags[b.name] = a.grep(
                        this._states.tags[b.name],
                        a.proxy(function (c, d) {
                            return a.inArray(c, this._states.tags[b.name]) === d;
                        }, this)
                    )));
        }),
        (e.prototype.suppress = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    this._supress[b] = !0;
                }, this)
            );
        }),
        (e.prototype.release = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    delete this._supress[b];
                }, this)
            );
        }),
        (e.prototype.pointer = function (a) {
            var c = { x: null, y: null };
            return (
                (a = a.originalEvent || a || b.event),
                (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
                a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
                c
            );
        }),
        (e.prototype.isNumeric = function (a) {
            return !isNaN(parseFloat(a));
        }),
        (e.prototype.difference = function (a, b) {
            return { x: a.x - b.x, y: a.y - b.y };
        }),
        (a.fn.owlCarousel = function (b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var d = a(this),
                    f = d.data("owl.carousel");
                f ||
                    ((f = new e(this, "object" == typeof b && b)),
                    d.data("owl.carousel", f),
                    a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                        f.register({ type: e.Type.Event, name: c }),
                            f.$element.on(
                                c + ".owl.carousel.core",
                                a.proxy(function (a) {
                                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                                }, f)
                            );
                    })),
                    "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
            });
        }),
        (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (e.prototype.watch = function () {
                this._interval || ((this._visible = this._core.$element.is(":visible")), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (e.prototype.refresh = function () {
                this._core.$element.is(":visible") !== this._visible &&
                    ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (e.prototype.destroy = function () {
                var a, c;
                b.clearInterval(this._interval);
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type))
                            for (
                                var c = this._core.settings,
                                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                                    f = (c.center && e * -1) || 0,
                                    g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                                    h = this._core.clones().length,
                                    i = a.proxy(function (a, b) {
                                        this.load(b);
                                    }, this);
                                f++ < e;

                            )
                                this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { lazyLoad: !1 }),
            (e.prototype.load = function (c) {
                var d = this._core.$stage.children().eq(c),
                    e = d && d.find(".owl-lazy");
                !e ||
                    a.inArray(d.get(0), this._loaded) > -1 ||
                    (e.each(
                        a.proxy(function (c, d) {
                            var e,
                                f = a(d),
                                g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src");
                            this._core.trigger("load", { element: f, url: g }, "lazy"),
                                f.is("img")
                                    ? f
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", g)
                                    : ((e = new Image()),
                                      (e.onload = a.proxy(function () {
                                          f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                      }, this)),
                                      (e.src = g));
                        }, this)
                    ),
                    this._loaded.push(d.get(0)));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (e.prototype.update = function () {
                var b = this._core._current,
                    c = b + this._core.settings.items,
                    d = this._core.$stage.children().toArray().slice(b, c),
                    e = [],
                    f = 0;
                a.each(d, function (b, c) {
                    e.push(a(c).height());
                }),
                    (f = Math.max.apply(null, e)),
                    this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" === a.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find(".owl-video");
                            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    a.proxy(function (a) {
                        this.play(a);
                    }, this)
                );
        };
        (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (e.prototype.fetch = function (a, b) {
                var c = (function () {
                        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
                    })(),
                    d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                    e = a.attr("data-width") || this._core.settings.videoWidth,
                    f = a.attr("data-height") || this._core.settings.videoHeight,
                    g = a.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (
                    ((d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/)),
                    d[3].indexOf("youtu") > -1)
                )
                    c = "youtube";
                else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
                else {
                    if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    c = "vzaar";
                }
                (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
            }),
            (e.prototype.thumbnail = function (b, c) {
                var d,
                    e,
                    f,
                    g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                    h = b.find("img"),
                    i = "src",
                    j = "",
                    k = this._core.settings,
                    l = function (a) {
                        (e = '<div class="owl-video-play-icon"></div>'),
                            (d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>'),
                            b.after(d),
                            b.after(e);
                    };
                if ((b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")), h.length)) return l(h.attr(i)), h.remove(), !1;
                "youtube" === c.type
                    ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                    : "vimeo" === c.type
                    ? a.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a[0].thumbnail_large), l(f);
                          },
                      })
                    : "vzaar" === c.type &&
                      a.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a.framegrab_url), l(f);
                          },
                      });
            }),
            (e.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (e.prototype.play = function (b) {
                var c,
                    d = a(b.target),
                    e = d.closest("." + this._core.settings.itemClass),
                    f = this._videos[e.attr("data-video")],
                    g = f.width || "100%",
                    h = f.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (e = this._core.items(this._core.relative(e.index()))),
                    this._core.reset(e.index()),
                    "youtube" === f.type
                        ? (c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>')
                        : "vimeo" === f.type
                        ? (c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
                        : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'),
                    a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")),
                    (this._playing = e.addClass("owl-video-playing")));
            }),
            (e.prototype.isInFullScreen = function () {
                var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                return b && a(b).parent().hasClass("owl-video-frame");
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Video = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = d),
                (this.next = d),
                (this.handlers = {
                    "change.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                        a.namespace && (this.swapping = "translated" == a.type);
                    }, this),
                    "translate.owl.carousel": a.proxy(function (a) {
                        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (e.Defaults = { animateOut: !1, animateIn: !1 }),
            (e.prototype.swap = function () {
                if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                    this.core.speed(0);
                    var b,
                        c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (g &&
                            ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            d
                                .one(a.support.animation.end, c)
                                .css({ left: b + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(g)),
                        f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
                }
            }),
            (e.prototype.clear = function (b) {
                a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._timeout = null),
                (this._paused = !1),
                (this._handlers = {
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "settings" === a.property.name
                            ? this._core.settings.autoplay
                                ? this.play()
                                : this.stop()
                            : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": a.proxy(function (a, b, c) {
                        a.namespace && this.play(b, c);
                    }, this),
                    "stop.owl.autoplay": a.proxy(function (a) {
                        a.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = a.extend({}, e.Defaults, this._core.options));
        };
        (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (e.prototype.play = function (a, b) {
                (this._paused = !1), this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
            }),
            (e.prototype._getNextTimeout = function (d, e) {
                return (
                    this._timeout && b.clearTimeout(this._timeout),
                    b.setTimeout(
                        a.proxy(function () {
                            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
                        }, this),
                        d || this._core.settings.autoplayTimeout
                    )
                );
            }),
            (e.prototype._setAutoPlayInterval = function () {
                this._timeout = this._getNextTimeout();
            }),
            (e.prototype.stop = function () {
                this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
            }),
            (e.prototype.pause = function () {
                this._core.is("rotating") && (this._paused = !0);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this.stop();
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (b) {
            (this._core = b),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": a.proxy(function (b) {
                        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (e.prototype.initialize = function () {
                var b,
                    c = this._core.settings;
                (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                    (this._controls.$previous = a("<" + c.navElement + ">")
                        .addClass(c.navClass[0])
                        .html(c.navText[0])
                        .prependTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.prev(c.navSpeed);
                            }, this)
                        )),
                    (this._controls.$next = a("<" + c.navElement + ">")
                        .addClass(c.navClass[1])
                        .html(c.navText[1])
                        .appendTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.next(c.navSpeed);
                            }, this)
                        )),
                    c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                    (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled")),
                    this._controls.$absolute.on(
                        "click",
                        "div",
                        a.proxy(function (b) {
                            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                            b.preventDefault(), this.to(d, c.dotsSpeed);
                        }, this)
                    );
                for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
            }),
            (e.prototype.destroy = function () {
                var a, b, c, d;
                for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                for (b in this._controls) this._controls[b].remove();
                for (d in this.overides) this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (e.prototype.update = function () {
                var a,
                    b,
                    c,
                    d = this._core.clones().length / 2,
                    e = d + this._core.items().length,
                    f = this._core.maximum(!0),
                    g = this._core.settings,
                    h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
                    for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                        if (b >= h || 0 === b) {
                            if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f)) break;
                            (b = 0), ++c;
                        }
                        b += this._core.mergers(this._core.relative(a));
                    }
            }),
            (e.prototype.draw = function () {
                var b,
                    c = this._core.settings,
                    d = this._core.items().length <= c.items,
                    e = this._core.relative(this._core.current()),
                    f = c.loop || c.rewind;
                this._controls.$relative.toggleClass("disabled", !c.nav || d),
                    c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                    c.dots &&
                        ((b = this._pages.length - this._controls.$absolute.children().length),
                        c.dotsData && 0 !== b
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : b > 0
                            ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
                            : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (e.prototype.onTrigger = function (b) {
                var c = this._core.settings;
                b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
            }),
            (e.prototype.current = function () {
                var b = this._core.relative(this._core.current());
                return a
                    .grep(
                        this._pages,
                        a.proxy(function (a, c) {
                            return a.start <= b && a.end >= b;
                        }, this)
                    )
                    .pop();
            }),
            (e.prototype.getPosition = function (b) {
                var c,
                    d,
                    e = this._core.settings;
                return (
                    "page" == e.slideBy
                        ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
                        : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
                    c
                );
            }),
            (e.prototype.next = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
            }),
            (e.prototype.prev = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
            }),
            (e.prototype.to = function (b, c, d) {
                var e;
                !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (c) {
            (this._core = c),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (c) {
                        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!c) return;
                            this._hashes[c] = b.content;
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function (c) {
                        if (c.namespace && "position" === c.property.name) {
                            var d = this._core.items(this._core.relative(this._core.current())),
                                e = a
                                    .map(this._hashes, function (a, b) {
                                        return a === d ? b : null;
                                    })
                                    .join();
                            if (!e || b.location.hash.slice(1) === e) return;
                            b.location.hash = e;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                a(b).on(
                    "hashchange.owl.navigation",
                    a.proxy(function (a) {
                        var c = b.location.hash.substring(1),
                            e = this._core.$stage.children(),
                            f = this._hashes[c] && e.index(this._hashes[c]);
                        f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
                    }, this)
                );
        };
        (e.Defaults = { URLhashListener: !1 }),
            (e.prototype.destroy = function () {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return (
                a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                    if (g[b] !== d) return (e = !c || b), !1;
                }),
                e
            );
        }
        function f(a) {
            return e(a, !0);
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            j = {
                csstransforms: function () {
                    return !!e("transform");
                },
                csstransforms3d: function () {
                    return !!e("perspective");
                },
                csstransitions: function () {
                    return !!e("transition");
                },
                cssanimations: function () {
                    return !!e("animation");
                },
            };
        j.csstransitions() && ((a.support.transition = new String(f("transition"))), (a.support.transition.end = i.transition.end[a.support.transition])),
            j.cssanimations() && ((a.support.animation = new String(f("animation"))), (a.support.animation.end = i.animation.end[a.support.animation])),
            j.csstransforms() && ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
    })(window.Zepto || window.jQuery, window, document);
!(function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
})(function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c);
        },
        x = function (b, c, d, e) {
            var f = document.createElement("div");
            return (f.className = "mfp-" + b), d && (f.innerHTML = d), e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)), f;
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && ((c = c.charAt(0).toLowerCase() + c.slice(1)), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
        },
        z = function (c) {
            return (c === g && b.currTemplate.closeBtn) || ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose))), (g = c)), b.currTemplate.closeBtn;
        },
        A = function () {
            a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
        },
        B = function () {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
            return !1;
        };
    (t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
                (b.isAndroid = /android/gi.test(c)),
                (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
                (b.supportsTransition = B()),
                (b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                (d = a(document)),
                (b.popupsCache = {});
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
                        b.index = e;
                        break;
                    }
            } else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
            if (b.isOpen) return void b.updateItemHTML();
            (b.types = []),
                (f = ""),
                c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
                c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key])) : (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
                b.st.modal && ((b.st.closeOnContentClick = !1), (b.st.closeOnBgClick = !1), (b.st.showCloseBtn = !1), (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                    ((b.bgOverlay = x("bg").on("click" + p, function () {
                        b.close();
                    })),
                    (b.wrap = x("wrap")
                        .attr("tabindex", -1)
                        .on("click" + p, function (a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                    (b.container = x("container", b.wrap))),
                (b.contentContainer = x("content")),
                b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
            }
            y("BeforeOpen"),
                b.st.showCloseBtn &&
                    (b.st.closeBtnInside
                        ? (w(l, function (a, b, c, d) {
                              c.close_replaceWith = z(d.type);
                          }),
                          (f += " mfp-close-btn-in"))
                        : b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
                (b.st.fixedBgPos === !1 || ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) && b.bgOverlay.css({ height: d.height(), position: "absolute" }),
                b.st.enableEscapeKey &&
                    d.on("keyup" + p, function (a) {
                        27 === a.keyCode && b.close();
                    }),
                v.on("resize" + p, function () {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : (n.overflow = "hidden"));
            var r = b.st.mainClass;
            return (
                b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c
            );
        },
        close: function () {
            b.isOpen &&
                (y(i),
                (b.isOpen = !1),
                b.st.removalDelay && !b.isLowIE && b.supportsTransition
                    ? (b._addClassToMFP(r),
                      setTimeout(function () {
                          b._close();
                      }, b.st.removalDelay))
                    : b._close());
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if ((b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos)) {
                var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""), a("html").css(e);
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"),
                !b.st.showCloseBtn || (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) || (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
                b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), (b.wH = d);
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if ((y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), (b.currItem = c), !b.currTemplate[d])) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), (c.preloaded = !0), y(n, c), (e = c.type), b.container.prepend(b.contentContainer), y("AfterChange");
        },
        appendContent: function (a, c) {
            (b.content = a),
                a ? (b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : (b.content = a)) : (b.content = ""),
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content);
        },
        parseEl: function (c) {
            var d,
                e = b.items[c];
            if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break;
                    }
                (e.src = e.el.attr("data-mfp-src")), e.src || (e.src = e.el.attr("href"));
            }
            return (e.type = d || b.st.type || "inline"), (e.index = c), (e.parsed = !0), (b.items[c] = e), y("ElementParse", e), b.items[c];
        },
        addGroup: function (a, c) {
            var d = function (d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = "click.magnificPopup";
            (c.mainEl = a), c.items ? ((c.isObj = !0), a.off(e).on(e, d)) : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0;
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), (e.el = a(c.mfpEl)), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y("UpdateStatus", e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function (a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass("mfp-s-" + a),
                    (c = a);
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || (b.preloader && c === b.preloader[0])) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function (c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (((e = c.split("_")), e.length > 1)) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? (f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class")))) : f.attr(e[1], d);
                        }
                    } else b.find(p + "-" + c).html(d);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                (a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(a), (b.scrollbarSize = a.offsetWidth - a.clientWidth), document.body.removeChild(a);
            }
            return b.scrollbarSize;
        },
    }),
        (a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (b, c) {
                return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
            },
            close: function () {
                return a.magnificPopup.instance && a.magnificPopup.instance.close();
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0,
            },
        }),
        (a.fn.magnificPopup = function (c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e,
                        f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))), b._openClick({ mfpEl: e }, d, f);
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else (c = a.extend(!0, {}, c)), u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c), b.addGroup(d, c);
            return d;
        });
    var C,
        D,
        E,
        F = "inline",
        G = function () {
            E && (D.after(E.addClass(C)).detach(), (E = null));
        };
    a.magnificPopup.registerModule(F, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function () {
                b.types.push(F),
                    w(h + "." + F, function () {
                        G();
                    });
            },
            getInline: function (c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)), (E = f.after(D).detach().removeClass(C))), b.updateStatus("ready");
                    } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            },
        },
    });
    var H,
        I = "ajax",
        J = function () {
            H && a(document.body).removeClass(H);
        },
        K = function () {
            J(), b.req && b.req.abort();
        };
    a.magnificPopup.registerModule(I, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function () {
                b.types.push(I), (H = b.st.ajax.cursor), w(h + "." + I, K), w("BeforeChange." + I, K);
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend(
                    {
                        url: c.src,
                        success: function (d, e, f) {
                            var g = { data: d, xhr: f };
                            y("ParseAjax", g),
                                b.appendContent(a(g.data), I),
                                (c.finished = !0),
                                J(),
                                b._setFocus(),
                                setTimeout(function () {
                                    b.wrap.addClass(q);
                                }, 16),
                                b.updateStatus("ready"),
                                y("AjaxContentAdded");
                        },
                        error: function () {
                            J(), (c.finished = c.loadError = !0), b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
                        },
                    },
                    b.st.ajax.settings
                );
                return (b.req = a.ajax(d)), "";
            },
        },
    });
    var L,
        M = function (c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || "";
            }
            return "";
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup:
                '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"),
                    w(m + d, function () {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function () {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage);
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
                }
            },
            _onImageHasSize: function (a) {
                a.img && ((a.hasSize = !0), L && clearInterval(L), (a.isCheckingImgSize = !1), y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), (a.imgHidden = !1)));
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L),
                            (L = setInterval(function () {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
                            }, f));
                    };
                e(1);
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c &&
                            (c.img[0].complete
                                ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), (c.hasSize = !0), (c.loaded = !0), y("ImageLoadComplete"))
                                : (e++, 200 > e ? setTimeout(f, 100) : g()));
                    },
                    g = function () {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), (c.hasSize = !0), (c.loaded = !0), (c.loadError = !0));
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    (j.className = "mfp-img"),
                        c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                        (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
                        (j.src = c.src),
                        i.is("img") && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
                }
                return (
                    b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
                    b.resizeImage(),
                    c.hasSize
                        ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d)
                        : (b.updateStatus("loading"), (c.loading = !0), c.hasSize || ((c.imgHidden = !0), d.addClass("mfp-loading"), b.findImageSize(c)), d)
                );
            },
        },
    });
    var N,
        O = function () {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img");
            },
        },
        proto: {
            initZoom: function () {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function (a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                f = "transition";
                            return (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d), b.css(e), b;
                        },
                        k = function () {
                            b.content.css("visibility", "visible");
                        };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if ((clearTimeout(e), b.content.css("visibility", "hidden"), (a = b._getItemToZoom()), !a)) return void k();
                            (f = j(a)),
                                f.css(b._getOffset()),
                                b.wrap.append(f),
                                (e = setTimeout(function () {
                                    f.css(b._getOffset(!0)),
                                        (e = setTimeout(function () {
                                            k(),
                                                setTimeout(function () {
                                                    f.remove(), (a = f = null), y("ZoomAnimationEnded");
                                                }, 16);
                                        }, g));
                                }, 16));
                        }
                    }),
                        w(i + d, function () {
                            if (b._allowZoom()) {
                                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                                    if (((a = b._getItemToZoom()), !a)) return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function () {
                            b._allowZoom() && (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type;
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
                return O() ? (h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)") : ((h.left = e.left), (h.top = e.top)), h;
            },
        },
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
        },
        proto: {
            initIframe: function () {
                b.types.push(P),
                    w("BeforeChange", function (a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + "." + P, function () {
                        R();
                    });
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), (e = this.src.replace("%id%", e)), !1) : void 0;
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
            },
        },
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a;
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return (
                    (b.direction = !0),
                    c && c.enabled
                        ? ((f += " mfp-gallery"),
                          w(m + e, function () {
                              c.navigateByImgClick &&
                                  b.wrap.on("click" + e, ".mfp-img", function () {
                                      return b.items.length > 1 ? (b.next(), !1) : void 0;
                                  }),
                                  d.on("keydown" + e, function (a) {
                                      37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                                  });
                          }),
                          w("UpdateStatus" + e, function (a, c) {
                              c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
                          }),
                          w(l + e, function (a, d, e, f) {
                              var g = b.items.length;
                              e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                          }),
                          w("BuildControls" + e, function () {
                              if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                  var d = c.arrowMarkup,
                                      e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)),
                                      f = (b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s));
                                  e.click(function () {
                                      b.prev();
                                  }),
                                      f.click(function () {
                                          b.next();
                                      }),
                                      b.container.append(e.add(f));
                              }
                          }),
                          w(n + e, function () {
                              b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                  (b._preloadTimeout = setTimeout(function () {
                                      b.preloadNearbyImages(), (b._preloadTimeout = null);
                                  }, 16));
                          }),
                          void w(h + e, function () {
                              d.off(e), b.wrap.off("click" + e), (b.arrowRight = b.arrowLeft = null);
                          }))
                        : !1
                );
            },
            next: function () {
                (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
            },
            prev: function () {
                (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
            },
            goTo: function (a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
            },
            _preloadItem: function (c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type &&
                            (d.img = a('<img class="mfp-img" />')
                                .on("load.mfploader", function () {
                                    d.hasSize = !0;
                                })
                                .on("error.mfploader", function () {
                                    (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                                })
                                .attr("src", d.src)),
                        (d.preloaded = !0);
                }
            },
        },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a;
                });
            },
            ratio: 1,
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w("ImageHasSize." + U, function (a, b) {
                                b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
                            }),
                            w("ElementParse." + U, function (b, d) {
                                d.src = a.replaceSrc(d, c);
                            }));
                }
            },
        },
    }),
        A();
});
!(function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? (module.exports = t()) : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return (
        (t.on = function (e, t) {
            if (e && t) {
                var i = (this._events = this._events || {}),
                    n = (i[e] = i[e] || []);
                return n.indexOf(t) == -1 && n.push(t), this;
            }
        }),
        (t.once = function (e, t) {
            if (e && t) {
                this.on(e, t);
                var i = (this._onceEvents = this._onceEvents || {}),
                    n = (i[e] = i[e] || {});
                return (n[t] = !0), this;
            }
        }),
        (t.off = function (e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = i.indexOf(t);
                return n != -1 && i.splice(n, 1), this;
            }
        }),
        (t.emitEvent = function (e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                (i = i.slice(0)), (t = t || []);
                for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                    var r = i[o],
                        s = n && n[r];
                    s && (this.off(e, r), delete n[r]), r.apply(this, t);
                }
                return this;
            }
        }),
        (t.allOff = function () {
            delete this._events, delete this._onceEvents;
        }),
        e
    );
}),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["ev-emitter/ev-emitter"], function (i) {
                  return t(e, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = t(e, require("ev-emitter")))
            : (e.imagesLoaded = t(e, e.EvEmitter));
    })("undefined" != typeof window ? window : this, function (e, t) {
        function i(e, t) {
            for (var i in t) e[i] = t[i];
            return e;
        }
        function n(e) {
            if (Array.isArray(e)) return e;
            var t = "object" == typeof e && "number" == typeof e.length;
            return t ? d.call(e) : [e];
        }
        function o(e, t, r) {
            if (!(this instanceof o)) return new o(e, t, r);
            var s = e;
            return (
                "string" == typeof e && (s = document.querySelectorAll(e)),
                s
                    ? ((this.elements = n(s)),
                      (this.options = i({}, this.options)),
                      "function" == typeof t ? (r = t) : i(this.options, t),
                      r && this.on("always", r),
                      this.getImages(),
                      h && (this.jqDeferred = new h.Deferred()),
                      void setTimeout(this.check.bind(this)))
                    : void a.error("Bad element for imagesLoaded " + (s || e))
            );
        }
        function r(e) {
            this.img = e;
        }
        function s(e, t) {
            (this.url = e), (this.element = t), (this.img = new Image());
        }
        var h = e.jQuery,
            a = e.console,
            d = Array.prototype.slice;
        (o.prototype = Object.create(t.prototype)),
            (o.prototype.options = {}),
            (o.prototype.getImages = function () {
                (this.images = []), this.elements.forEach(this.addElementImages, this);
            }),
            (o.prototype.addElementImages = function (e) {
                "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
                var t = e.nodeType;
                if (t && u[t]) {
                    for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var o = i[n];
                        this.addImage(o);
                    }
                    if ("string" == typeof this.options.background) {
                        var r = e.querySelectorAll(this.options.background);
                        for (n = 0; n < r.length; n++) {
                            var s = r[n];
                            this.addElementBackgroundImages(s);
                        }
                    }
                }
            });
        var u = { 1: !0, 9: !0, 11: !0 };
        return (
            (o.prototype.addElementBackgroundImages = function (e) {
                var t = getComputedStyle(e);
                if (t)
                    for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n; ) {
                        var o = n && n[2];
                        o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
                    }
            }),
            (o.prototype.addImage = function (e) {
                var t = new r(e);
                this.images.push(t);
            }),
            (o.prototype.addBackground = function (e, t) {
                var i = new s(e, t);
                this.images.push(i);
            }),
            (o.prototype.check = function () {
                function e(e, i, n) {
                    setTimeout(function () {
                        t.progress(e, i, n);
                    });
                }
                var t = this;
                return (
                    (this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length
                        ? void this.images.forEach(function (t) {
                              t.once("progress", e), t.check();
                          })
                        : void this.complete()
                );
            }),
            (o.prototype.progress = function (e, t, i) {
                this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                    this.emitEvent("progress", [this, e, t]),
                    this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && a && a.log("progress: " + i, e, t);
            }),
            (o.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                if (((this.isComplete = !0), this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                    var t = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[t](this);
                }
            }),
            (r.prototype = Object.create(t.prototype)),
            (r.prototype.check = function () {
                var e = this.getIsImageComplete();
                return e
                    ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                      this.proxyImage.addEventListener("load", this),
                      this.proxyImage.addEventListener("error", this),
                      this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      void (this.proxyImage.src = this.img.src));
            }),
            (r.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth;
            }),
            (r.prototype.confirm = function (e, t) {
                (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
            }),
            (r.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (r.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (r.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (r.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (s.prototype = Object.create(r.prototype)),
            (s.prototype.check = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url);
                var e = this.getIsImageComplete();
                e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
            }),
            (s.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (s.prototype.confirm = function (e, t) {
                (this.isLoaded = e), this.emitEvent("progress", [this, this.element, t]);
            }),
            (o.makeJQueryPlugin = function (t) {
                (t = t || e.jQuery),
                    t &&
                        ((h = t),
                        (h.fn.imagesLoaded = function (e, t) {
                            var i = new o(this, e, t);
                            return i.jqDeferred.promise(h(this));
                        }));
            }),
            o.makeJQueryPlugin(),
            o
        );
    });
!(function (t, e) {
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
              return e(t, i);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("jquery")))
        : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n,
                s = "$()." + i + '("' + e + '")';
            return (
                t.each(function (t, u) {
                    var h = a.data(u, i);
                    if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                    var d = h[e];
                    if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                    var l = d.apply(h, o);
                    n = void 0 === n ? l : n;
                }),
                void 0 !== n ? n : t
            );
        }
        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
            });
        }
        (a = a || e || t.jQuery),
            a &&
                (s.prototype.option ||
                    (s.prototype.option = function (t) {
                        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                    }),
                (a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = n.call(arguments, 1);
                        return u(this, t, e);
                    }
                    return h(this, t), this;
                }),
                o(a));
    }
    function o(t) {
        !t || (t && t.bridget) || (t.bridget = i);
    }
    var n = Array.prototype.slice,
        s = t.console,
        r =
            "undefined" == typeof s
                ? function () {}
                : function (t) {
                      s.error(t);
                  };
    return o(e || t.jQuery), i;
}),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        o = (i[t] = i[t] || []);
                    return o.indexOf(e) == -1 && o.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {}),
                        o = (i[t] = i[t] || {});
                    return (o[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return o != -1 && i.splice(o, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                        var s = i[n],
                            r = o && o[s];
                        r && (this.off(t, s), delete o[s]), s.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t),
                i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e;
        }
        function e() {}
        function i() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
                var i = u[e];
                t[i] = 0;
            }
            return t;
        }
        function o(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
        }
        function n() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var n = o(e);
                (r = 200 == Math.round(t(n.width))), (s.isBoxSizeOuter = r), i.removeChild(e);
            }
        }
        function s(e) {
            if ((n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType)) {
                var s = o(e);
                if ("none" == s.display) return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0; l < h; l++) {
                    var f = u[l],
                        c = s[f],
                        m = parseFloat(c);
                    a[f] = isNaN(m) ? 0 : m;
                }
                var p = a.paddingLeft + a.paddingRight,
                    y = a.paddingTop + a.paddingBottom,
                    g = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    _ = a.borderLeftWidth + a.borderRightWidth,
                    z = a.borderTopWidth + a.borderBottomWidth,
                    I = d && r,
                    x = t(s.width);
                x !== !1 && (a.width = x + (I ? 0 : p + _));
                var S = t(s.height);
                return S !== !1 && (a.height = S + (I ? 0 : y + z)), (a.innerWidth = a.width - (p + _)), (a.innerHeight = a.height - (y + z)), (a.outerWidth = a.width + g), (a.outerHeight = a.height + v), a;
            }
        }
        var r,
            a =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      },
            u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            h = u.length,
            d = !1;
        return s;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var o = e[i],
                    n = o + "MatchesSelector";
                if (t[n]) return n;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            });
        var o = Array.prototype.slice;
        (i.makeArray = function (t) {
            if (Array.isArray(t)) return t;
            if (null === t || void 0 === t) return [];
            var e = "object" == typeof t && "number" == typeof t.length;
            return e ? o.call(t) : [t];
        }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                i != -1 && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, o) {
                t = i.makeArray(t);
                var n = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!o) return void n.push(t);
                            e(t, o) && n.push(t);
                            for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s]);
                        }
                    }),
                    n
                );
            }),
            (i.debounceMethod = function (t, e, i) {
                i = i || 100;
                var o = t.prototype[e],
                    n = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[n];
                    clearTimeout(t);
                    var e = arguments,
                        s = this;
                    this[n] = setTimeout(function () {
                        o.apply(s, e), delete s[n];
                    }, i);
                };
            }),
            (i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var n = t.console;
        return (
            (i.htmlInit = function (e, o) {
                i.docReady(function () {
                    var s = i.toDashed(o),
                        r = "data-" + s,
                        a = document.querySelectorAll("[" + r + "]"),
                        u = document.querySelectorAll(".js-" + s),
                        h = i.makeArray(a).concat(i.makeArray(u)),
                        d = r + "-options",
                        l = t.jQuery;
                    h.forEach(function (t) {
                        var i,
                            s = t.getAttribute(r) || t.getAttribute(d);
                        try {
                            i = s && JSON.parse(s);
                        } catch (a) {
                            return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
                        }
                        var u = new e(t, i);
                        l && l.data(t, o, u);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function o(t, e) {
            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
        }
        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var s = document.documentElement.style,
            r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
            h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
            d = (o.prototype = Object.create(t.prototype));
        (d.constructor = o),
            (d._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (d.getSize = function () {
                this.size = e(this.element);
            }),
            (d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = h[i] || i;
                    e[o] = t[i];
                }
            }),
            (d.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    o = t[e ? "left" : "right"],
                    n = t[i ? "top" : "bottom"],
                    s = parseFloat(o),
                    r = parseFloat(n),
                    a = this.layout.size;
                o.indexOf("%") != -1 && (s = (s / 100) * a.width),
                    n.indexOf("%") != -1 && (r = (r / 100) * a.height),
                    (s = isNaN(s) ? 0 : s),
                    (r = isNaN(r) ? 0 : r),
                    (s -= e ? a.paddingLeft : a.paddingRight),
                    (r -= i ? a.paddingTop : a.paddingBottom),
                    (this.position.x = s),
                    (this.position.y = r);
            }),
            (d.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop"),
                    n = i ? "paddingLeft" : "paddingRight",
                    s = i ? "left" : "right",
                    r = i ? "right" : "left",
                    a = this.position.x + t[n];
                (e[s] = this.getXValue(a)), (e[r] = "");
                var u = o ? "paddingTop" : "paddingBottom",
                    h = o ? "top" : "bottom",
                    d = o ? "bottom" : "top",
                    l = this.position.y + t[u];
                (e[h] = this.getYValue(l)), (e[d] = ""), this.css(e), this.emitEvent("layout", [this]);
            }),
            (d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
            }),
            (d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
            }),
            (d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = t == this.position.x && e == this.position.y;
                if ((this.setPosition(t, e), n && !this.isTransitioning)) return void this.layoutPosition();
                var s = t - i,
                    r = e - o,
                    a = {};
                (a.transform = this.getTranslate(s, r)), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }),
            (d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop");
                return (t = i ? t : -t), (e = o ? e : -e), "translate3d(" + t + "px, " + e + "px, 0)";
            }),
            (d.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (d.moveTo = d._transitionTo),
            (d.setPosition = function (t, e) {
                (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
            }),
            (d._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
            }),
            (d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null;
                }
                this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
            });
        var l = "opacity," + n(a);
        (d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1);
            }
        }),
            (d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (d.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var f = { "-webkit-transform": "transform" };
        (d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    o = f[t.propertyName] || t.propertyName;
                if ((delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[o]), o in e.onEnd)) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (d.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), (this.isTransitioning = !1);
            }),
            (d._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (d.removeTransitionStyles = function () {
                this.css(c);
            }),
            (d.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (d.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (d.remove = function () {
                return r && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (d.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("visibleStyle");
                (e[i] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (d.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                (e[i] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (d.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (d.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            o
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
                  return e(t, i, o, n, s);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
    })(window, function (t, e, i, o, n) {
        "use strict";
        function s(t, e) {
            var i = o.getQueryElement(t);
            if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            (this.element = i), h && (this.$element = h(this.element)), (this.options = o.extend({}, this.constructor.defaults)), this.option(e);
            var n = ++l;
            (this.element.outlayerGUID = n), (f[n] = this), this._create();
            var s = this._getOption("initLayout");
            s && this.layout();
        }
        function r(t) {
            function e() {
                t.apply(this, arguments);
            }
            return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
        }
        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var n = m[o] || 1;
            return i * n;
        }
        var u = t.console,
            h = t.jQuery,
            d = function () {},
            l = 0,
            f = {};
        (s.namespace = "outlayer"),
            (s.Item = n),
            (s.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var c = s.prototype;
        o.extend(c, e.prototype),
            (c.option = function (t) {
                o.extend(this.options, t);
            }),
            (c._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }),
            (s.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (c._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }),
            (c.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (c._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                    var s = e[n],
                        r = new i(s, this);
                    o.push(r);
                }
                return o;
            }),
            (c._filterFindItemElements = function (t) {
                return o.filterFindElements(t, this.options.itemSelector);
            }),
            (c.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (c.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (c._init = c.layout),
            (c._resetLayout = function () {
                this.getSize();
            }),
            (c.getSize = function () {
                this.size = i(this.element);
            }),
            (c._getMeasurement = function (t, e) {
                var o,
                    n = this.options[t];
                n ? ("string" == typeof n ? (o = this.element.querySelector(n)) : n instanceof HTMLElement && (o = n), (this[t] = o ? i(o)[e] : n)) : (this[t] = 0);
            }),
            (c.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
            }),
            (c._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (c._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var o = this._getItemLayoutPosition(t);
                        (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (c._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (c._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (c.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : ((this.stagger = a(t)), this.stagger);
            }),
            (c._positionItem = function (t, e, i, o, n) {
                o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
            }),
            (c._postLayout = function () {
                this.resizeContainer();
            }),
            (c.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
                }
            }),
            (c._getContainerSize = d),
            (c._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (c._emitCompleteOnItems = function (t, e) {
                function i() {
                    n.dispatchEvent(t + "Complete", null, [e]);
                }
                function o() {
                    r++, r == s && i();
                }
                var n = this,
                    s = e.length;
                if (!e || !s) return void i();
                var r = 0;
                e.forEach(function (e) {
                    e.once(t, o);
                });
            }),
            (c.dispatchEvent = function (t, e, i) {
                var o = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, o), h))
                    if (((this.$element = this.$element || h(this.element)), e)) {
                        var n = h.Event(e);
                        (n.type = t), this.$element.trigger(n, i);
                    } else this.$element.trigger(t, i);
            }),
            (c.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (c.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (c.stamp = function (t) {
                (t = this._find(t)), t && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (c.unstamp = function (t) {
                (t = this._find(t)),
                    t &&
                        t.forEach(function (t) {
                            o.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
            }),
            (c._find = function (t) {
                if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), (t = o.makeArray(t));
            }),
            (c._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (c._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (c._manageStamp = d),
            (c._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    o = this._boundingRect,
                    n = i(t),
                    s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };
                return s;
            }),
            (c.handleEvent = o.handleEvent),
            (c.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (c.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (c.onresize = function () {
                this.resize();
            }),
            o.debounceMethod(s, "onresize", 100),
            (c.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (c.needsResizeLayout = function () {
                var t = i(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }),
            (c.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (c.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (c.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                }
            }),
            (c.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (c.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (c.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (c.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (c.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (c.getItems = function (t) {
                t = o.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getItem(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (c.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), o.removeFrom(this.items, t);
                        }, this);
            }),
            (c.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
            }),
            (s.data = function (t) {
                t = o.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && f[e];
            }),
            (s.create = function (t, e) {
                var i = r(s);
                return (
                    (i.defaults = o.extend({}, s.defaults)),
                    o.extend(i.defaults, e),
                    (i.compatOptions = o.extend({}, s.compatOptions)),
                    (i.namespace = t),
                    (i.data = s.data),
                    (i.Item = r(n)),
                    o.htmlInit(i, t),
                    h && h.bridget && h.bridget(t, i),
                    i
                );
            });
        var m = { ms: 1, s: 1e3 };
        return (s.Item = n), s;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            o = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this);
                    }
                }
            });
        var n = i.destroy;
        return (
            (i.destroy = function () {
                n.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            (this.isotope = t), t && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
        }
        var o = i.prototype,
            n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return (
            n.forEach(function (t) {
                o[t] = function () {
                    return e.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (o.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight != this.isotope.size.innerHeight;
            }),
            (o._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (o.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (o.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (o.getSegmentSize = function (t, e) {
                var i = t + e,
                    o = "outer" + e;
                if ((this._getMeasurement(i, o), !this[i])) {
                    var n = this.getFirstItemSize();
                    this[i] = (n && n[o]) || this.isotope.size["inner" + e];
                }
            }),
            (o.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element);
            }),
            (o.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (o.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (i.modes = {}),
            (i.create = function (t, e) {
                function n() {
                    i.apply(this, arguments);
                }
                return (n.prototype = Object.create(o)), (n.prototype.constructor = n), e && (n.options = e), (n.prototype.namespace = t), (i.modes[t] = n), n;
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var o = i.prototype;
        return (
            (o._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (o.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
                }
                var o = (this.columnWidth += this.gutter),
                    n = this.containerWidth + this.gutter,
                    s = n / o,
                    r = o - (n % o),
                    a = r && r < 1 ? "round" : "floor";
                (s = Math[a](s)), (this.cols = Math.max(s, 1));
            }),
            (o.getContainerWidth = function () {
                var t = this._getOption("fitWidth"),
                    i = t ? this.element.parentNode : this.element,
                    o = e(i);
                this.containerWidth = o && o.innerWidth;
            }),
            (o._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = e && e < 1 ? "round" : "ceil",
                    o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (
                    var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col;
                    h < u;
                    h++
                )
                    this.colYs[h] = a;
                return r;
            }),
            (o._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);
                return { col: e.indexOf(i), y: i };
            }),
            (o._getTopColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
                return e;
            }),
            (o._getColGroupY = function (t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }),
            (o._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols,
                    o = t > 1 && i + t > this.cols;
                i = o ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return (this.horizontalColIndex = n ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
            }),
            (o._manageStamp = function (t) {
                var i = e(t),
                    o = this._getElementOffset(t),
                    n = this._getOption("originLeft"),
                    s = n ? o.left : o.right,
                    r = s + i.outerWidth,
                    a = Math.floor(s / this.columnWidth);
                a = Math.max(0, a);
                var u = Math.floor(r / this.columnWidth);
                (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
                for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
            }),
            (o._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
            }),
            (o._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (o.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode"), require("masonry-layout")))
            : e(t.Isotope.LayoutMode, t.Masonry);
    })(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
            o = i.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
        var r = o.measureColumns;
        o.measureColumns = function () {
            (this.items = this.isotope.filteredItems), r.call(this);
        };
        var a = o._getOption;
        return (
            (o._getOption = function (t) {
                return "fitWidth" == t ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : a.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
                var o = { x: this.x, y: this.y };
                return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), o;
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode")))
            : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define([
                  "outlayer/outlayer",
                  "get-size/get-size",
                  "desandro-matches-selector/matches-selector",
                  "fizzy-ui-utils/utils",
                  "isotope-layout/js/item",
                  "isotope-layout/js/layout-mode",
                  "isotope-layout/js/layout-modes/masonry",
                  "isotope-layout/js/layout-modes/fit-rows",
                  "isotope-layout/js/layout-modes/vertical",
              ], function (i, o, n, s, r, a) {
                  return e(t, i, o, n, s, r, a);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  t,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope-layout/js/item"),
                  require("isotope-layout/js/layout-mode"),
                  require("isotope-layout/js/layout-modes/masonry"),
                  require("isotope-layout/js/layout-modes/fit-rows"),
                  require("isotope-layout/js/layout-modes/vertical")
              ))
            : (t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode));
    })(window, function (t, e, i, o, n, s, r) {
        function a(t, e) {
            return function (i, o) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n],
                        r = i.sortData[s],
                        a = o.sortData[s];
                    if (r > a || r < a) {
                        var u = void 0 !== e[s] ? e[s] : e,
                            h = u ? 1 : -1;
                        return (r > a ? 1 : -1) * h;
                    }
                }
                return 0;
            };
        }
        var u = t.jQuery,
            h = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        (d.Item = s), (d.LayoutMode = r);
        var l = d.prototype;
        (l._create = function () {
            (this.itemGUID = 0), (this._sorters = {}), this._getSorters(), e.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]);
            for (var t in r.modes) this._initLayoutMode(t);
        }),
            (l.reloadItems = function () {
                (this.itemGUID = 0), e.prototype.reloadItems.call(this);
            }),
            (l._itemize = function () {
                for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }),
            (l._initLayoutMode = function (t) {
                var e = r.modes[t],
                    i = this.options[t] || {};
                (this.options[t] = e.options ? n.extend(e.options, i) : i), (this.modes[t] = new e(this));
            }),
            (l.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
            }),
            (l._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
            }),
            (l.arrange = function (t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                (this.filteredItems = e.matches), this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
            }),
            (l._init = l.arrange),
            (l._hideReveal = function (t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }),
            (l._getIsInstant = function () {
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                return (this._isInstant = e), e;
            }),
            (l._bindArrangeComplete = function () {
                function t() {
                    e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
                }
                var e,
                    i,
                    o,
                    n = this;
                this.once("layoutComplete", function () {
                    (e = !0), t();
                }),
                    this.once("hideComplete", function () {
                        (i = !0), t();
                    }),
                    this.once("revealComplete", function () {
                        (o = !0), t();
                    });
            }),
            (l._filter = function (t) {
                var e = this.options.filter;
                e = e || "*";
                for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!a.isIgnored) {
                        var u = s(a);
                        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
                    }
                }
                return { matches: i, needReveal: o, needHide: n };
            }),
            (l._getFilterTest = function (t) {
                return u && this.options.isJQueryFiltering
                    ? function (e) {
                          return u(e.element).is(t);
                      }
                    : "function" == typeof t
                    ? function (e) {
                          return t(e.element);
                      }
                    : function (e) {
                          return o(e.element, t);
                      };
            }),
            (l.updateSortData = function (t) {
                var e;
                t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items), this._getSorters(), this._updateItemsSortData(e);
            }),
            (l._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i);
                }
            }),
            (l._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    var o = t[i];
                    o.updateSortData();
                }
            });
        var f = (function () {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = h(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    s = n && n[1],
                    r = e(s, o),
                    a = d.sortDataParsers[i[1]];
                return (t = a
                    ? function (t) {
                          return t && a(r(t));
                      }
                    : function (t) {
                          return t && r(t);
                      });
            }
            function e(t, e) {
                return t
                    ? function (e) {
                          return e.getAttribute(t);
                      }
                    : function (t) {
                          var i = t.querySelector(e);
                          return i && i.textContent;
                      };
            }
            return t;
        })();
        (d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10);
            },
            parseFloat: function (t) {
                return parseFloat(t);
            },
        }),
            (l._sort = function () {
                if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                    var e = a(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e);
                }
            }),
            (l._getIsSameSortBy = function (t) {
                for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
                return !0;
            }),
            (l._mode = function () {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return (e.options = this.options[t]), e;
            }),
            (l._resetLayout = function () {
                e.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }),
            (l._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t);
            }),
            (l._manageStamp = function (t) {
                this._mode()._manageStamp(t);
            }),
            (l._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (l.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (l.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }),
            (l.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems), (this.filteredItems = i.concat(this.filteredItems)), (this.items = e.concat(this.items));
                }
            }),
            (l._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
            }),
            (l.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i,
                        o,
                        n = e.length;
                    for (i = 0; i < n; i++) (o = e[i]), this.element.appendChild(o.element);
                    var s = this._filter(e).matches;
                    for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                    this.reveal(s);
                }
            });
        var c = l.remove;
        return (
            (l.remove = function (t) {
                t = n.makeArray(t);
                var e = this.getItems(t);
                c.call(this, t);
                for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var s = e[o];
                    n.removeFrom(this.filteredItems, s);
                }
            }),
            (l.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    var e = this.items[t];
                    e.sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (l._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var o = t.apply(this, e);
                return (this.options.transitionDuration = i), o;
            }),
            (l.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element;
                });
            }),
            d
        );
    });
!(function (a, b) {
    "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof module && module.exports ? (module.exports = b()) : ((a.Packery = a.Packery || {}), (a.Packery.Rect = b()));
})(window, function () {
    function a(b) {
        for (var c in a.defaults) this[c] = a.defaults[c];
        for (c in b) this[c] = b[c];
    }
    a.defaults = { x: 0, y: 0, width: 0, height: 0 };
    var b = a.prototype;
    return (
        (b.contains = function (a) {
            var b = a.width || 0,
                c = a.height || 0;
            return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c;
        }),
        (b.overlaps = function (a) {
            var b = this.x + this.width,
                c = this.y + this.height,
                d = a.x + a.width,
                e = a.y + a.height;
            return this.x < d && b > a.x && this.y < e && c > a.y;
        }),
        (b.getMaximalFreeRects = function (b) {
            if (!this.overlaps(b)) return !1;
            var c,
                d = [],
                e = this.x + this.width,
                f = this.y + this.height,
                g = b.x + b.width,
                h = b.y + b.height;
            return (
                this.y < b.y && ((c = new a({ x: this.x, y: this.y, width: this.width, height: b.y - this.y })), d.push(c)),
                e > g && ((c = new a({ x: g, y: this.y, width: e - g, height: this.height })), d.push(c)),
                f > h && ((c = new a({ x: this.x, y: h, width: this.width, height: f - h })), d.push(c)),
                this.x < b.x && ((c = new a({ x: this.x, y: this.y, width: b.x - this.x, height: this.height })), d.push(c)),
                d
            );
        }),
        (b.canFit = function (a) {
            return this.width >= a.width && this.height >= a.height;
        }),
        a
    );
}),
    (function (a, b) {
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
        else if ("object" == typeof module && module.exports) module.exports = b(require("./rect"));
        else {
            var c = (a.Packery = a.Packery || {});
            c.Packer = b(c.Rect);
        }
    })(window, function (a) {
        function b(a, b, c) {
            (this.width = a || 0), (this.height = b || 0), (this.sortDirection = c || "downwardLeftToRight"), this.reset();
        }
        var c = b.prototype;
        (c.reset = function () {
            this.spaces = [];
            var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
            this.spaces.push(b), (this.sorter = d[this.sortDirection] || d.downwardLeftToRight);
        }),
            (c.pack = function (a) {
                for (var b = 0; b < this.spaces.length; b++) {
                    var c = this.spaces[b];
                    if (c.canFit(a)) {
                        this.placeInSpace(a, c);
                        break;
                    }
                }
            }),
            (c.columnPack = function (a) {
                for (var b = 0; b < this.spaces.length; b++) {
                    var c = this.spaces[b],
                        d = c.x <= a.x && c.x + c.width >= a.x + a.width && c.height >= a.height - 0.01;
                    if (d) {
                        (a.y = c.y), this.placed(a);
                        break;
                    }
                }
            }),
            (c.rowPack = function (a) {
                for (var b = 0; b < this.spaces.length; b++) {
                    var c = this.spaces[b],
                        d = c.y <= a.y && c.y + c.height >= a.y + a.height && c.width >= a.width - 0.01;
                    if (d) {
                        (a.x = c.x), this.placed(a);
                        break;
                    }
                }
            }),
            (c.placeInSpace = function (a, b) {
                (a.x = b.x), (a.y = b.y), this.placed(a);
            }),
            (c.placed = function (a) {
                for (var b = [], c = 0; c < this.spaces.length; c++) {
                    var d = this.spaces[c],
                        e = d.getMaximalFreeRects(a);
                    e ? b.push.apply(b, e) : b.push(d);
                }
                (this.spaces = b), this.mergeSortSpaces();
            }),
            (c.mergeSortSpaces = function () {
                b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
            }),
            (c.addSpace = function (a) {
                this.spaces.push(a), this.mergeSortSpaces();
            }),
            (b.mergeRects = function (a) {
                var b = 0,
                    c = a[b];
                a: for (; c; ) {
                    for (var d = 0, e = a[b + d]; e; ) {
                        if (e == c) d++;
                        else {
                            if (e.contains(c)) {
                                a.splice(b, 1), (c = a[b]);
                                continue a;
                            }
                            c.contains(e) ? a.splice(b + d, 1) : d++;
                        }
                        e = a[b + d];
                    }
                    b++, (c = a[b]);
                }
                return a;
            });
        var d = {
            downwardLeftToRight: function (a, b) {
                return a.y - b.y || a.x - b.x;
            },
            rightwardTopToBottom: function (a, b) {
                return a.x - b.x || a.y - b.y;
            },
        };
        return b;
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define("packery/js/item", ["outlayer/outlayer", "./rect"], b)
            : "object" == typeof module && module.exports
            ? (module.exports = b(require("outlayer"), require("./rect")))
            : (a.Packery.Item = b(a.Outlayer, a.Packery.Rect));
    })(window, function (a, b) {
        var c = document.documentElement.style,
            d = "string" == typeof c.transform ? "transform" : "WebkitTransform",
            e = function () {
                a.Item.apply(this, arguments);
            },
            f = (e.prototype = Object.create(a.Item.prototype)),
            g = f._create;
        f._create = function () {
            g.call(this), (this.rect = new b());
        };
        var h = f.moveTo;
        return (
            (f.moveTo = function (a, b) {
                var c = Math.abs(this.position.x - a),
                    d = Math.abs(this.position.y - b),
                    e = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > c && 1 > d;
                return e ? void this.goTo(a, b) : void h.apply(this, arguments);
            }),
            (f.enablePlacing = function () {
                this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), (this.isTransitioning = !1), this.getSize(), this.layout._setRectSize(this.element, this.rect), (this.isPlacing = !0);
            }),
            (f.disablePlacing = function () {
                this.isPlacing = !1;
            }),
            (f.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this]);
            }),
            (f.showDropPlaceholder = function () {
                var a = this.dropPlaceholder;
                a || ((a = this.dropPlaceholder = document.createElement("div")), (a.className = "packery-drop-placeholder"), (a.style.position = "absolute")),
                    (a.style.width = this.size.width + "px"),
                    (a.style.height = this.size.height + "px"),
                    this.positionDropPlaceholder(),
                    this.layout.element.appendChild(a);
            }),
            (f.positionDropPlaceholder = function () {
                this.dropPlaceholder.style[d] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
            }),
            (f.hideDropPlaceholder = function () {
                this.layout.element.removeChild(this.dropPlaceholder);
            }),
            e
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define("packery/js/packery", ["get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b)
            : "object" == typeof module && module.exports
            ? (module.exports = b(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")))
            : (a.Packery = b(a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item));
    })(window, function (a, b, c, d, e) {
        function f(a, b) {
            return a.position.y - b.position.y || a.position.x - b.position.x;
        }
        function g(a, b) {
            return a.position.x - b.position.x || a.position.y - b.position.y;
        }
        function h(a, b) {
            var c = b.x - a.x,
                d = b.y - a.y;
            return Math.sqrt(c * c + d * d);
        }
        c.prototype.canFit = function (a) {
            return this.width >= a.width - 1 && this.height >= a.height - 1;
        };
        var i = b.create("packery");
        i.Item = e;
        var j = i.prototype;
        (j._create = function () {
            b.prototype._create.call(this), (this.packer = new d()), (this.shiftPacker = new d()), (this.isEnabled = !0), (this.dragItemCount = 0);
            var a = this;
            (this.handleDraggabilly = {
                dragStart: function () {
                    a.itemDragStart(this.element);
                },
                dragMove: function () {
                    a.itemDragMove(this.element, this.position.x, this.position.y);
                },
                dragEnd: function () {
                    a.itemDragEnd(this.element);
                },
            }),
                (this.handleUIDraggable = {
                    start: function (b, c) {
                        c && a.itemDragStart(b.currentTarget);
                    },
                    drag: function (b, c) {
                        c && a.itemDragMove(b.currentTarget, c.position.left, c.position.top);
                    },
                    stop: function (b, c) {
                        c && a.itemDragEnd(b.currentTarget);
                    },
                });
        }),
            (j._resetLayout = function () {
                this.getSize(), this._getMeasurements();
                var a, b, c;
                this._getOption("horizontal") ? ((a = 1 / 0), (b = this.size.innerHeight + this.gutter), (c = "rightwardTopToBottom")) : ((a = this.size.innerWidth + this.gutter), (b = 1 / 0), (c = "downwardLeftToRight")),
                    (this.packer.width = this.shiftPacker.width = a),
                    (this.packer.height = this.shiftPacker.height = b),
                    (this.packer.sortDirection = this.shiftPacker.sortDirection = c),
                    this.packer.reset(),
                    (this.maxY = 0),
                    (this.maxX = 0);
            }),
            (j._getMeasurements = function () {
                this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width");
            }),
            (j._getItemLayoutPosition = function (a) {
                if ((this._setRectSize(a.element, a.rect), this.isShifting || this.dragItemCount > 0)) {
                    var b = this._getPackMethod();
                    this.packer[b](a.rect);
                } else this.packer.pack(a.rect);
                return this._setMaxXY(a.rect), a.rect;
            }),
            (j.shiftLayout = function () {
                (this.isShifting = !0), this.layout(), delete this.isShifting;
            }),
            (j._getPackMethod = function () {
                return this._getOption("horizontal") ? "rowPack" : "columnPack";
            }),
            (j._setMaxXY = function (a) {
                (this.maxX = Math.max(a.x + a.width, this.maxX)), (this.maxY = Math.max(a.y + a.height, this.maxY));
            }),
            (j._setRectSize = function (b, c) {
                var d = a(b),
                    e = d.outerWidth,
                    f = d.outerHeight;
                (e || f) && ((e = this._applyGridGutter(e, this.columnWidth)), (f = this._applyGridGutter(f, this.rowHeight))), (c.width = Math.min(e, this.packer.width)), (c.height = Math.min(f, this.packer.height));
            }),
            (j._applyGridGutter = function (a, b) {
                if (!b) return a + this.gutter;
                b += this.gutter;
                var c = a % b,
                    d = c && 1 > c ? "round" : "ceil";
                return (a = Math[d](a / b) * b);
            }),
            (j._getContainerSize = function () {
                return this._getOption("horizontal") ? { width: this.maxX - this.gutter } : { height: this.maxY - this.gutter };
            }),
            (j._manageStamp = function (a) {
                var b,
                    d = this.getItem(a);
                if (d && d.isPlacing) b = d.rect;
                else {
                    var e = this._getElementOffset(a);
                    b = new c({ x: this._getOption("originLeft") ? e.left : e.right, y: this._getOption("originTop") ? e.top : e.bottom });
                }
                this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
            }),
            (j.sortItemsByPosition = function () {
                var a = this._getOption("horizontal") ? g : f;
                this.items.sort(a);
            }),
            (j.fit = function (a, b, c) {
                var d = this.getItem(a);
                d &&
                    (this.stamp(d.element),
                    d.enablePlacing(),
                    this.updateShiftTargets(d),
                    (b = void 0 === b ? d.rect.x : b),
                    (c = void 0 === c ? d.rect.y : c),
                    this.shift(d, b, c),
                    this._bindFitEvents(d),
                    d.moveTo(d.rect.x, d.rect.y),
                    this.shiftLayout(),
                    this.unstamp(d.element),
                    this.sortItemsByPosition(),
                    d.disablePlacing());
            }),
            (j._bindFitEvents = function (a) {
                function b() {
                    d++, 2 == d && c.dispatchEvent("fitComplete", null, [a]);
                }
                var c = this,
                    d = 0;
                a.once("layout", b), this.once("layoutComplete", b);
            }),
            (j.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout());
            }),
            (j.needsResizeLayout = function () {
                var b = a(this.element),
                    c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
                return b[c] != this.size[c];
            }),
            (j.resizeShiftPercentLayout = function () {
                var b = this._getItemsForLayout(this.items),
                    c = this._getOption("horizontal"),
                    d = c ? "y" : "x",
                    e = c ? "height" : "width",
                    f = c ? "rowHeight" : "columnWidth",
                    g = c ? "innerHeight" : "innerWidth",
                    h = this[f];
                if ((h = h && h + this.gutter)) {
                    this._getMeasurements();
                    var i = this[f] + this.gutter;
                    b.forEach(function (a) {
                        var b = Math.round(a.rect[d] / h);
                        a.rect[d] = b * i;
                    });
                } else {
                    var j = a(this.element)[g] + this.gutter,
                        k = this.packer[e];
                    b.forEach(function (a) {
                        a.rect[d] = (a.rect[d] / k) * j;
                    });
                }
                this.shiftLayout();
            }),
            (j.itemDragStart = function (a) {
                if (this.isEnabled) {
                    this.stamp(a);
                    var b = this.getItem(a);
                    b && (b.enablePlacing(), b.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(b));
                }
            }),
            (j.updateShiftTargets = function (a) {
                this.shiftPacker.reset(), this._getBoundingRect();
                var b = this._getOption("originLeft"),
                    d = this._getOption("originTop");
                this.stamps.forEach(function (a) {
                    var e = this.getItem(a);
                    if (!e || !e.isPlacing) {
                        var f = this._getElementOffset(a),
                            g = new c({ x: b ? f.left : f.right, y: d ? f.top : f.bottom });
                        this._setRectSize(a, g), this.shiftPacker.placed(g);
                    }
                }, this);
                var e = this._getOption("horizontal"),
                    f = e ? "rowHeight" : "columnWidth",
                    g = e ? "height" : "width";
                (this.shiftTargetKeys = []), (this.shiftTargets = []);
                var h,
                    i = this[f];
                if ((i = i && i + this.gutter)) {
                    var j = Math.ceil(a.rect[g] / i),
                        k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
                    h = (k - j) * i;
                    for (var l = 0; k > l; l++) this._addShiftTarget(l * i, 0, h);
                } else (h = this.shiftPacker[g] + this.gutter - a.rect[g]), this._addShiftTarget(0, 0, h);
                var m = this._getItemsForLayout(this.items),
                    n = this._getPackMethod();
                m.forEach(function (a) {
                    var b = a.rect;
                    this._setRectSize(a.element, b), this.shiftPacker[n](b), this._addShiftTarget(b.x, b.y, h);
                    var c = e ? b.x + b.width : b.x,
                        d = e ? b.y : b.y + b.height;
                    if ((this._addShiftTarget(c, d, h), i))
                        for (var f = Math.round(b[g] / i), j = 1; f > j; j++) {
                            var k = e ? c : b.x + i * j,
                                l = e ? b.y + i * j : d;
                            this._addShiftTarget(k, l, h);
                        }
                }, this);
            }),
            (j._addShiftTarget = function (a, b, c) {
                var d = this._getOption("horizontal") ? b : a;
                if (!(0 !== d && d > c)) {
                    var e = a + "," + b,
                        f = -1 != this.shiftTargetKeys.indexOf(e);
                    f || (this.shiftTargetKeys.push(e), this.shiftTargets.push({ x: a, y: b }));
                }
            }),
            (j.shift = function (a, b, c) {
                var d,
                    e = 1 / 0,
                    f = { x: b, y: c };
                this.shiftTargets.forEach(function (a) {
                    var b = h(a, f);
                    e > b && ((d = a), (e = b));
                }),
                    (a.rect.x = d.x),
                    (a.rect.y = d.y);
            });
        var k = 120;
        (j.itemDragMove = function (a, b, c) {
            function d() {
                f.shift(e, b, c), e.positionDropPlaceholder(), f.layout();
            }
            var e = this.isEnabled && this.getItem(a);
            if (e) {
                (b -= this.size.paddingLeft), (c -= this.size.paddingTop);
                var f = this,
                    g = new Date();
                this._itemDragTime && g - this._itemDragTime < k ? (clearTimeout(this.dragTimeout), (this.dragTimeout = setTimeout(d, k))) : (d(), (this._itemDragTime = g));
            }
        }),
            (j.itemDragEnd = function (a) {
                function b() {
                    d++, 2 == d && (c.element.classList.remove("is-positioning-post-drag"), c.hideDropPlaceholder(), e.dispatchEvent("dragItemPositioned", null, [c]));
                }
                var c = this.isEnabled && this.getItem(a);
                if (c) {
                    clearTimeout(this.dragTimeout), c.element.classList.add("is-positioning-post-drag");
                    var d = 0,
                        e = this;
                    c.once("layout", b),
                        this.once("layoutComplete", b),
                        c.moveTo(c.rect.x, c.rect.y),
                        this.layout(),
                        (this.dragItemCount = Math.max(0, this.dragItemCount - 1)),
                        this.sortItemsByPosition(),
                        c.disablePlacing(),
                        this.unstamp(c.element);
                }
            }),
            (j.bindDraggabillyEvents = function (a) {
                this._bindDraggabillyEvents(a, "on");
            }),
            (j.unbindDraggabillyEvents = function (a) {
                this._bindDraggabillyEvents(a, "off");
            }),
            (j._bindDraggabillyEvents = function (a, b) {
                var c = this.handleDraggabilly;
                a[b]("dragStart", c.dragStart), a[b]("dragMove", c.dragMove), a[b]("dragEnd", c.dragEnd);
            }),
            (j.bindUIDraggableEvents = function (a) {
                this._bindUIDraggableEvents(a, "on");
            }),
            (j.unbindUIDraggableEvents = function (a) {
                this._bindUIDraggableEvents(a, "off");
            }),
            (j._bindUIDraggableEvents = function (a, b) {
                var c = this.handleUIDraggable;
                a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop);
            });
        var l = j.destroy;
        return (
            (j.destroy = function () {
                l.apply(this, arguments), (this.isEnabled = !1);
            }),
            (i.Rect = c),
            (i.Packer = d),
            i
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["isotope-layout/js/layout-mode", "packery/js/packery"], b)
            : "object" == typeof module && module.exports
            ? (module.exports = b(require("isotope-layout/js/layout-mode"), require("packery")))
            : b(a.Isotope.LayoutMode, a.Packery);
    })(window, function (a, b) {
        var c = a.create("packery"),
            d = c.prototype,
            e = { _getElementOffset: !0, _getMeasurement: !0 };
        for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
        var g = d._resetLayout;
        d._resetLayout = function () {
            (this.packer = this.packer || new b.Packer()), (this.shiftPacker = this.shiftPacker || new b.Packer()), g.apply(this, arguments);
        };
        var h = d._getItemLayoutPosition;
        d._getItemLayoutPosition = function (a) {
            return (a.rect = a.rect || new b.Rect()), h.call(this, a);
        };
        var i = d.needsResizeLayout;
        d.needsResizeLayout = function () {
            return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : i.call(this);
        };
        var j = d._getOption;
        return (
            (d._getOption = function (a) {
                return "horizontal" == a ? (void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal) : j.apply(this.isotope, arguments);
            }),
            c
        );
    });
(function ($) {
    $.fn.countDown = function (options) {
        config = {};
        $.extend(config, options);
        diffSecs = this.setCountDown(config);
        if (config.onComplete) {
            $.data($(this)[0], "callback", config.onComplete);
        }
        if (config.omitWeeks) {
            $.data($(this)[0], "omitWeeks", config.omitWeeks);
        }
        $("#" + $(this).attr("id") + " .digit").html('<div class="top"></div><div class="bottom"></div>');
        $(this).doCountDown($(this).attr("id"), diffSecs, 500);
        return this;
    };
    $.fn.stopCountDown = function () {
        clearTimeout($.data(this[0], "timer"));
    };
    $.fn.startCountDown = function () {
        this.doCountDown($(this).attr("id"), $.data(this[0], "diffSecs"), 500);
    };
    $.fn.setCountDown = function (options) {
        var targetTime = new Date();
        if (options.targetDate) {
            targetTime = new Date(
                options.targetDate.month + "/" + options.targetDate.day + "/" + options.targetDate.year + " " + options.targetDate.hour + ":" + options.targetDate.min + ":" + options.targetDate.sec + (options.targetDate.utc ? " UTC" : "")
            );
        } else if (options.targetOffset) {
            targetTime.setFullYear(options.targetOffset.year + targetTime.getFullYear());
            targetTime.setMonth(options.targetOffset.month + targetTime.getMonth());
            targetTime.setDate(options.targetOffset.day + targetTime.getDate());
            targetTime.setHours(options.targetOffset.hour + targetTime.getHours());
            targetTime.setMinutes(options.targetOffset.min + targetTime.getMinutes());
            targetTime.setSeconds(options.targetOffset.sec + targetTime.getSeconds());
        }
        var nowTime = new Date();
        diffSecs = Math.floor((targetTime.valueOf() - nowTime.valueOf()) / 1000);
        $.data(this[0], "diffSecs", diffSecs);
        return diffSecs;
    };
    $.fn.doCountDown = function (id, diffSecs, duration) {
        $this = $("#" + id);
        if (diffSecs <= 0) {
            diffSecs = 0;
            if ($.data($this[0], "timer")) {
                clearTimeout($.data($this[0], "timer"));
            }
        }
        secs = diffSecs % 60;
        mins = Math.floor(diffSecs / 60) % 60;
        hours = Math.floor(diffSecs / 60 / 60) % 24;
        if ($.data($this[0], "omitWeeks") == !0) {
            days = Math.floor(diffSecs / 60 / 60 / 24);
            weeks = Math.floor(diffSecs / 60 / 60 / 24 / 7);
        } else {
            days = Math.floor(diffSecs / 60 / 60 / 24) % 7;
            weeks = Math.floor(diffSecs / 60 / 60 / 24 / 7);
        }
        $this.dashChangeTo(id, "seconds_dash", secs, duration ? duration : 800);
        $this.dashChangeTo(id, "minutes_dash", mins, duration ? duration : 1200);
        $this.dashChangeTo(id, "hours_dash", hours, duration ? duration : 1200);
        $this.dashChangeTo(id, "days_dash", days, duration ? duration : 1200);
        $this.dashChangeTo(id, "weeks_dash", weeks, duration ? duration : 1200);
        $.data($this[0], "diffSecs", diffSecs);
        if (diffSecs > 0) {
            e = $this;
            t = setTimeout(function () {
                e.doCountDown(id, diffSecs - 1);
            }, 1000);
            $.data(e[0], "timer", t);
        } else if ((cb = $.data($this[0], "callback"))) {
            $.data($this[0], "callback")();
        }
    };
    $.fn.dashChangeTo = function (id, dash, n, duration) {
        $this = $("#" + id);
        for (var i = $this.find("." + dash + " .digit").length - 1; i >= 0; i--) {
            var d = n % 10;
            n = (n - d) / 10;
            $this.digitChangeTo("#" + $this.attr("id") + " ." + dash + " .digit:eq(" + i + ")", d, duration);
        }
    };
    $.fn.digitChangeTo = function (digit, n, duration) {
        if (!duration) {
            duration = 800;
        }
        if ($(digit + " div.top").html() != n + "") {
            $(digit + " div.top").css({ display: "none" });
            $(digit + " div.top")
                .html(n ? n : "0")
                .slideDown(duration);
            $(digit + " div.bottom").animate({}, duration, function () {
                $(digit + " div.bottom").html($(digit + " div.top").html());
                $(digit + " div.bottom").css({ display: "block", height: "" });
                $(digit + " div.top")
                    .hide()
                    .slideUp(10);
            });
        }
    };
})(jQuery);
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Sweetalert2 = t());
})(this, function () {
    "use strict";
    var e = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            type: null,
            toast: !1,
            customClass: "",
            target: "body",
            backdrop: !0,
            animation: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: "#3085d6",
            confirmButtonClass: null,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: "#aaa",
            cancelButtonClass: null,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageAlt: "",
            imageClass: null,
            timer: null,
            width: 500,
            padding: 20,
            background: "#fff",
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: null,
            inputAttributes: {},
            inputValidator: null,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: "40px",
            onBeforeOpen: null,
            onOpen: null,
            onClose: null,
            useRejections: !1,
            expectRejections: !1,
        },
        t = ["useRejections", "expectRejections"],
        n = function (e) {
            var t = {};
            for (var n in e) t[e[n]] = "swal2-" + e[n];
            return t;
        },
        o = n([
            "container",
            "shown",
            "iosfix",
            "popup",
            "modal",
            "no-backdrop",
            "toast",
            "toast-shown",
            "overlay",
            "fade",
            "show",
            "hide",
            "noanimation",
            "close",
            "title",
            "content",
            "contentwrapper",
            "buttonswrapper",
            "confirm",
            "cancel",
            "icon",
            "image",
            "input",
            "has-input",
            "file",
            "range",
            "select",
            "radio",
            "checkbox",
            "textarea",
            "inputerror",
            "validationerror",
            "progresssteps",
            "activeprogressstep",
            "progresscircle",
            "progressline",
            "loading",
            "styled",
            "top",
            "top-left",
            "top-right",
            "center",
            "center-left",
            "center-right",
            "bottom",
            "bottom-left",
            "bottom-right",
            "grow-row",
            "grow-column",
            "grow-fullscreen",
        ]),
        r = n(["success", "warning", "info", "question", "error"]),
        i = function (e, t) {
            (e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), (t = t || 0);
            for (var n = "#", o = 0; o < 3; o++) {
                var r = parseInt(e.substr(2 * o, 2), 16);
                n += ("00" + (r = Math.round(Math.min(Math.max(0, r + r * t), 255)).toString(16))).substr(r.length);
            }
            return n;
        },
        a = function (e) {
            console.warn("SweetAlert2: " + e);
        },
        s = function (e) {
            console.error("SweetAlert2: " + e);
        },
        l = [],
        u = { previousWindowKeyDown: null, previousActiveElement: null, previousBodyPadding: null },
        c = function (e) {
            var t = p();
            t && (t.parentNode.removeChild(t), L(document.body, o["no-backdrop"]), L(document.body, o["has-input"]), L(document.body, o["toast-shown"]));
            {
                if ("undefined" != typeof document) {
                    var n = document.createElement("div");
                    (n.className = o.container), (n.innerHTML = d);
                    ("string" == typeof e.target ? document.querySelector(e.target) : e.target).appendChild(n);
                    var r = f(),
                        i = T(r, o.input),
                        a = T(r, o.file),
                        l = r.querySelector("." + o.range + " input"),
                        u = r.querySelector("." + o.range + " output"),
                        c = T(r, o.select),
                        m = r.querySelector("." + o.checkbox + " input"),
                        b = T(r, o.textarea);
                    return (
                        (i.oninput = function () {
                            K.resetValidationError();
                        }),
                        (a.onchange = function () {
                            K.resetValidationError();
                        }),
                        (l.oninput = function () {
                            K.resetValidationError(), (u.value = l.value);
                        }),
                        (l.onchange = function () {
                            K.resetValidationError(), (l.previousSibling.value = l.value);
                        }),
                        (c.onchange = function () {
                            K.resetValidationError();
                        }),
                        (m.onchange = function () {
                            K.resetValidationError();
                        }),
                        (b.oninput = function () {
                            K.resetValidationError();
                        }),
                        r
                    );
                }
                s("SweetAlert2 requires document to initialize");
            }
        },
        d = (
            '\n <div role="dialog" aria-modal="true" aria-labelledby="' +
            o.title +
            '" aria-describedby="' +
            o.content +
            '" class="' +
            o.popup +
            '" tabindex="-1">\n   <ul class="' +
            o.progresssteps +
            '"></ul>\n   <div class="' +
            o.icon +
            " " +
            r.error +
            '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' +
            o.icon +
            " " +
            r.question +
            '">?</div>\n   <div class="' +
            o.icon +
            " " +
            r.warning +
            '">!</div>\n   <div class="' +
            o.icon +
            " " +
            r.info +
            '">i</div>\n   <div class="' +
            o.icon +
            " " +
            r.success +
            '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' +
            o.image +
            '" />\n   <div class="' +
            o.contentwrapper +
            '">\n   <h2 class="' +
            o.title +
            '" id="' +
            o.title +
            '"></h2>\n   <div id="' +
            o.content +
            '" class="' +
            o.content +
            '"></div>\n   </div>\n   <input class="' +
            o.input +
            '" />\n   <input type="file" class="' +
            o.file +
            '" />\n   <div class="' +
            o.range +
            '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' +
            o.select +
            '"></select>\n   <div class="' +
            o.radio +
            '"></div>\n   <label for="' +
            o.checkbox +
            '" class="' +
            o.checkbox +
            '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' +
            o.textarea +
            '"></textarea>\n   <div class="' +
            o.validationerror +
            '" id="' +
            o.validationerror +
            '"></div>\n   <div class="' +
            o.buttonswrapper +
            '">\n     <button type="button" class="' +
            o.confirm +
            '">OK</button>\n     <button type="button" class="' +
            o.cancel +
            '">Cancel</button>\n   </div>\n   <button type="button" class="' +
            o.close +
            '">×</button>\n </div>\n'
        ).replace(/(^|\n)\s*/g, ""),
        p = function () {
            return document.body.querySelector("." + o.container);
        },
        f = function () {
            return p() ? p().querySelector("." + o.popup) : null;
        },
        m = function (e) {
            return p() ? p().querySelector("." + e) : null;
        },
        b = function () {
            return m(o.title);
        },
        h = function () {
            return m(o.content);
        },
        g = function () {
            return m(o.image);
        },
        v = function () {
            return m(o.progresssteps);
        },
        y = function () {
            return m(o.validationerror);
        },
        w = function () {
            return m(o.confirm);
        },
        C = function () {
            return m(o.cancel);
        },
        x = function () {
            return m(o.buttonswrapper);
        },
        k = function () {
            return m(o.close);
        },
        S = function () {
            var e = Array.from(f().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (e, t) {
                    return (e = parseInt(e.getAttribute("tabindex"))), (t = parseInt(t.getAttribute("tabindex"))), e > t ? 1 : e < t ? -1 : 0;
                }),
                t = Array.prototype.slice.call(f().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));
            return (function (e) {
                var t = [];
                for (var n in e) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t;
            })(e.concat(t));
        },
        A = function () {
            return !document.body.classList.contains(o["toast-shown"]);
        },
        B = function (e, t) {
            return !!e.classList && e.classList.contains(t);
        },
        E = function (e) {
            if ((e.focus(), "file" !== e.type)) {
                var t = e.value;
                (e.value = ""), (e.value = t);
            }
        },
        P = function (e, t) {
            if (e && t) {
                t.split(/\s+/)
                    .filter(Boolean)
                    .forEach(function (t) {
                        e.classList.add(t);
                    });
            }
        },
        L = function (e, t) {
            if (e && t) {
                t.split(/\s+/)
                    .filter(Boolean)
                    .forEach(function (t) {
                        e.classList.remove(t);
                    });
            }
        },
        T = function (e, t) {
            for (var n = 0; n < e.childNodes.length; n++) if (B(e.childNodes[n], t)) return e.childNodes[n];
        },
        q = function (e, t) {
            t || (t = e === f() || e === x() ? "flex" : "block"), (e.style.opacity = ""), (e.style.display = t);
        },
        V = function (e) {
            (e.style.opacity = ""), (e.style.display = "none");
        },
        O = function (e) {
            return e.offsetWidth || e.offsetHeight || e.getClientRects().length;
        },
        j = (function () {
            var e = document.createElement("div"),
                t = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };
            for (var n in t) if (t.hasOwnProperty(n) && void 0 !== e.style[n]) return t[n];
            return !1;
        })(),
        N =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  },
        M =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
            },
        H = M({}, e),
        R = [];
    "undefined" == typeof Promise && s("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");
    var I = function (e) {
            for (var t in e)
                K.isValidParameter(t) || a('Unknown parameter "' + t + '"'),
                    K.isDeprecatedParameter(t) &&
                        (function (e) {
                            -1 === l.indexOf(e) && (l.push(e), a(e));
                        })('The parameter "' + t + '" is deprecated and will be removed in the next major release.');
        },
        D = function (t) {
            (("string" == typeof t.target && !document.querySelector(t.target)) || ("string" != typeof t.target && !t.target.appendChild)) && (a('Target parameter is not valid, defaulting to "body"'), (t.target = "body"));
            var n = void 0,
                i = f(),
                l = "string" == typeof t.target ? document.querySelector(t.target) : t.target;
            (n = i && l && i.parentNode !== l.parentNode ? c(t) : i || c(t)), I(t);
            var u = t.width === e.width && t.toast ? "auto" : t.width;
            n.style.width = "number" == typeof u ? u + "px" : u;
            var d = t.padding === e.padding && t.toast ? "inherit" : t.padding;
            (n.style.padding = "number" == typeof d ? d + "px" : d), (n.style.background = t.background);
            for (var m = n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), y = 0; y < m.length; y++) m[y].style.background = t.background;
            var S = p(),
                A = b(),
                B = h(),
                E = x(),
                T = w(),
                O = C(),
                j = k();
            if ((t.titleText ? (A.innerText = t.titleText) : (A.innerHTML = t.title.split("\n").join("<br />")), t.backdrop || P(document.body, o["no-backdrop"]), t.text || t.html)) {
                if ("object" === N(t.html))
                    if (((B.innerHTML = ""), 0 in t.html)) for (var M = 0; M in t.html; M++) B.appendChild(t.html[M].cloneNode(!0));
                    else B.appendChild(t.html.cloneNode(!0));
                else t.html ? (B.innerHTML = t.html) : t.text && (B.textContent = t.text);
                q(B);
            } else V(B);
            if ((t.position in o && P(S, o[t.position]), t.grow && "string" == typeof t.grow)) {
                var H = "grow-" + t.grow;
                H in o && P(S, o[H]);
            }
            t.showCloseButton ? (j.setAttribute("aria-label", t.closeButtonAriaLabel), q(j)) : V(j),
                (n.className = o.popup),
                t.toast ? (P(document.body, o["toast-shown"]), P(n, o.toast)) : P(n, o.modal),
                t.customClass && P(n, t.customClass);
            var R = v(),
                D = parseInt(null === t.currentProgressStep ? K.getQueueStep() : t.currentProgressStep, 10);
            t.progressSteps.length
                ? (q(R),
                  (function (e) {
                      for (; e.firstChild; ) e.removeChild(e.firstChild);
                  })(R),
                  D >= t.progressSteps.length && a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
                  t.progressSteps.forEach(function (e, n) {
                      var r = document.createElement("li");
                      if ((P(r, o.progresscircle), (r.innerHTML = e), n === D && P(r, o.activeprogressstep), R.appendChild(r), n !== t.progressSteps.length - 1)) {
                          var i = document.createElement("li");
                          P(i, o.progressline), (i.style.width = t.progressStepsDistance), R.appendChild(i);
                      }
                  }))
                : V(R);
            for (var U = f().querySelectorAll("." + o.icon), W = 0; W < U.length; W++) V(U[W]);
            if (t.type) {
                var z = !1;
                for (var Z in r)
                    if (t.type === Z) {
                        z = !0;
                        break;
                    }
                if (!z) return s("Unknown alert type: " + t.type), !1;
                var Q = n.querySelector("." + o.icon + "." + r[t.type]);
                if ((q(Q), t.animation))
                    switch (t.type) {
                        case "success":
                            P(Q, "swal2-animate-success-icon"), P(Q.querySelector(".swal2-success-line-tip"), "swal2-animate-success-line-tip"), P(Q.querySelector(".swal2-success-line-long"), "swal2-animate-success-line-long");
                            break;
                        case "error":
                            P(Q, "swal2-animate-error-icon"), P(Q.querySelector(".swal2-x-mark"), "swal2-animate-x-mark");
                    }
            }
            var Y = g();
            t.imageUrl
                ? (Y.setAttribute("src", t.imageUrl),
                  Y.setAttribute("alt", t.imageAlt),
                  q(Y),
                  t.imageWidth ? Y.setAttribute("width", t.imageWidth) : Y.removeAttribute("width"),
                  t.imageHeight ? Y.setAttribute("height", t.imageHeight) : Y.removeAttribute("height"),
                  (Y.className = o.image),
                  t.imageClass && P(Y, t.imageClass))
                : V(Y),
                t.showCancelButton ? (O.style.display = "inline-block") : V(O),
                t.showConfirmButton
                    ? (function (e, t) {
                          e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t);
                      })(T, "display")
                    : V(T),
                t.showConfirmButton || t.showCancelButton ? q(E) : V(E),
                (T.innerHTML = t.confirmButtonText),
                (O.innerHTML = t.cancelButtonText),
                T.setAttribute("aria-label", t.confirmButtonAriaLabel),
                O.setAttribute("aria-label", t.cancelButtonAriaLabel),
                t.buttonsStyling && ((T.style.backgroundColor = t.confirmButtonColor), (O.style.backgroundColor = t.cancelButtonColor)),
                (T.className = o.confirm),
                P(T, t.confirmButtonClass),
                (O.className = o.cancel),
                P(O, t.cancelButtonClass),
                t.buttonsStyling
                    ? (P(T, o.styled), P(O, o.styled))
                    : (L(T, o.styled), L(O, o.styled), (T.style.backgroundColor = T.style.borderLeftColor = T.style.borderRightColor = ""), (O.style.backgroundColor = O.style.borderLeftColor = O.style.borderRightColor = "")),
                !0 === t.animation ? L(n, o.noanimation) : P(n, o.noanimation),
                t.showLoaderOnConfirm &&
                    !t.preConfirm &&
                    a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://limonte.github.io/sweetalert2/#ajax-request");
        },
        U = function () {
            null === u.previousBodyPadding &&
                document.body.scrollHeight > window.innerHeight &&
                ((u.previousBodyPadding = document.body.style.paddingRight),
                (document.body.style.paddingRight =
                    (function () {
                        if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
                        var e = document.createElement("div");
                        (e.style.width = "50px"), (e.style.height = "50px"), (e.style.overflow = "scroll"), document.body.appendChild(e);
                        var t = e.offsetWidth - e.clientWidth;
                        return document.body.removeChild(e), t;
                    })() + "px"));
        },
        W = function () {
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !B(document.body, o.iosfix)) {
                var e = document.body.scrollTop;
                (document.body.style.top = -1 * e + "px"), P(document.body, o.iosfix);
            }
        },
        K = function e() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            if (void 0 === n[0]) return s("SweetAlert2 expects at least 1 attribute!"), !1;
            var a = M({}, H);
            switch (N(n[0])) {
                case "string":
                    (a.title = n[0]), (a.html = n[1]), (a.type = n[2]);
                    break;
                case "object":
                    if ((M(a, n[0]), (a.extraParams = n[0].extraParams), "email" === a.input && null === a.inputValidator)) {
                        var l = function (e) {
                            return new Promise(function (t, n) {
                                /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(e) ? t() : n("Invalid email address");
                            });
                        };
                        a.inputValidator = a.expectRejections ? l : e.adaptInputValidator(l);
                    }
                    if ("url" === a.input && null === a.inputValidator) {
                        var c = function (e) {
                            return new Promise(function (t, n) {
                                /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e) ? t() : n("Invalid URL");
                            });
                        };
                        a.inputValidator = a.expectRejections ? c : e.adaptInputValidator(c);
                    }
                    break;
                default:
                    return s('Unexpected type of argument! Expected "string" or "object", got ' + N(n[0])), !1;
            }
            D(a);
            var d = p(),
                m = f();
            return new Promise(function (t, n) {
                var r = function (n) {
                        e.closePopup(a.onClose), t(a.useRejections ? n : { value: n });
                    },
                    l = function (o) {
                        e.closePopup(a.onClose), a.useRejections ? n(o) : t({ dismiss: o });
                    },
                    c = function (t) {
                        e.closePopup(a.onClose), n(t);
                    };
                a.timer &&
                    (m.timeout = setTimeout(function () {
                        return l("timer");
                    }, a.timer));
                var M = function (e) {
                    if (!(e = e || a.input)) return null;
                    switch (e) {
                        case "select":
                        case "textarea":
                        case "file":
                            return T(m, o[e]);
                        case "checkbox":
                            return m.querySelector("." + o.checkbox + " input");
                        case "radio":
                            return m.querySelector("." + o.radio + " input:checked") || m.querySelector("." + o.radio + " input:first-child");
                        case "range":
                            return m.querySelector("." + o.range + " input");
                        default:
                            return T(m, o.input);
                    }
                };
                a.input &&
                    setTimeout(function () {
                        var e = M();
                        e && E(e);
                    }, 0);
                for (
                    var H = function (t) {
                            if ((a.showLoaderOnConfirm && e.showLoading(), a.preConfirm)) {
                                var n = Promise.resolve().then(function () {
                                    return a.preConfirm(t, a.extraParams);
                                });
                                a.expectRejections
                                    ? n.then(
                                          function (e) {
                                              return r(e || t);
                                          },
                                          function (t) {
                                              e.hideLoading(), t && e.showValidationError(t);
                                          }
                                      )
                                    : n.then(
                                          function (n) {
                                              O(y()) ? e.hideLoading() : r(n || t);
                                          },
                                          function (e) {
                                              return c(e);
                                          }
                                      );
                            } else r(t);
                        },
                        R = function (t) {
                            var n = t || window.event,
                                o = n.target || n.srcElement,
                                r = w(),
                                s = C(),
                                u = r && (r === o || r.contains(o)),
                                d = s && (s === o || s.contains(o));
                            switch (n.type) {
                                case "mouseover":
                                case "mouseup":
                                    a.buttonsStyling && (u ? (r.style.backgroundColor = i(a.confirmButtonColor, -0.1)) : d && (s.style.backgroundColor = i(a.cancelButtonColor, -0.1)));
                                    break;
                                case "mouseout":
                                    a.buttonsStyling && (u ? (r.style.backgroundColor = a.confirmButtonColor) : d && (s.style.backgroundColor = a.cancelButtonColor));
                                    break;
                                case "mousedown":
                                    a.buttonsStyling && (u ? (r.style.backgroundColor = i(a.confirmButtonColor, -0.2)) : d && (s.style.backgroundColor = i(a.cancelButtonColor, -0.2)));
                                    break;
                                case "click":
                                    if (u && e.isVisible())
                                        if ((e.disableButtons(), a.input)) {
                                            var p = (function () {
                                                var e = M();
                                                if (!e) return null;
                                                switch (a.input) {
                                                    case "checkbox":
                                                        return e.checked ? 1 : 0;
                                                    case "radio":
                                                        return e.checked ? e.value : null;
                                                    case "file":
                                                        return e.files.length ? e.files[0] : null;
                                                    default:
                                                        return a.inputAutoTrim ? e.value.trim() : e.value;
                                                }
                                            })();
                                            if (a.inputValidator) {
                                                e.disableInput();
                                                var f = Promise.resolve().then(function () {
                                                    return a.inputValidator(p, a.extraParams);
                                                });
                                                a.expectRejections
                                                    ? f.then(
                                                          function () {
                                                              e.enableButtons(), e.enableInput(), H(p);
                                                          },
                                                          function (t) {
                                                              e.enableButtons(), e.enableInput(), t && e.showValidationError(t);
                                                          }
                                                      )
                                                    : f.then(
                                                          function (t) {
                                                              e.enableButtons(), e.enableInput(), t ? e.showValidationError(t) : H(p);
                                                          },
                                                          function (e) {
                                                              return c(e);
                                                          }
                                                      );
                                            } else H(p);
                                        } else H(!0);
                                    else d && e.isVisible() && (e.disableButtons(), l("cancel"));
                            }
                        },
                        I = m.querySelectorAll("button"),
                        K = 0;
                    K < I.length;
                    K++
                )
                    (I[K].onclick = R), (I[K].onmouseover = R), (I[K].onmouseout = R), (I[K].onmousedown = R);
                (k().onclick = function () {
                    l("close");
                }),
                    a.toast
                        ? (m.onclick = function (t) {
                              t.target !== m || a.showConfirmButton || a.showCancelButton || (a.allowOutsideClick && (e.closePopup(a.onClose), l("overlay")));
                          })
                        : (d.onclick = function (e) {
                              e.target === d && a.allowOutsideClick && l("overlay");
                          });
                var z = x(),
                    Z = w(),
                    Q = C();
                a.reverseButtons ? Z.parentNode.insertBefore(Q, Z) : Z.parentNode.insertBefore(Z, Q);
                var Y = function (e, t) {
                        for (var n = S(a.focusCancel), o = 0; o < n.length; o++) {
                            (e += t) === n.length ? (e = 0) : -1 === e && (e = n.length - 1);
                            var r = n[e];
                            if (O(r)) return r.focus();
                        }
                    },
                    _ = function (t) {
                        var n = t || window.event;
                        if ("Enter" === n.key) n.target === M() && (e.clickConfirm(), n.preventDefault());
                        else if ("Tab" === n.key) {
                            for (var o = n.target || n.srcElement, r = S(a.focusCancel), i = -1, s = 0; s < r.length; s++)
                                if (o === r[s]) {
                                    i = s;
                                    break;
                                }
                            n.shiftKey ? Y(i, -1) : Y(i, 1), n.stopPropagation(), n.preventDefault();
                        } else
                            -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(n.key)
                                ? document.activeElement === Z && O(Q)
                                    ? Q.focus()
                                    : document.activeElement === Q && O(Z) && Z.focus()
                                : ("Escape" !== n.key && "Esc" !== n.key) || !0 !== a.allowEscapeKey || l("esc");
                    };
                (window.onkeydown && window.onkeydown.toString() === _.toString()) || ((u.previousWindowKeyDown = window.onkeydown), (window.onkeydown = _)),
                    a.buttonsStyling && ((Z.style.borderLeftColor = a.confirmButtonColor), (Z.style.borderRightColor = a.confirmButtonColor)),
                    (e.hideLoading = e.disableLoading = function () {
                        a.showConfirmButton || (V(Z), a.showCancelButton || V(x())), L(z, o.loading), L(m, o.loading), m.removeAttribute("aria-busy"), (Z.disabled = !1), (Q.disabled = !1);
                    }),
                    (e.getTitle = function () {
                        return b();
                    }),
                    (e.getContent = function () {
                        return h();
                    }),
                    (e.getInput = function () {
                        return M();
                    }),
                    (e.getImage = function () {
                        return g();
                    }),
                    (e.getButtonsWrapper = function () {
                        return x();
                    }),
                    (e.getConfirmButton = function () {
                        return w();
                    }),
                    (e.getCancelButton = function () {
                        return C();
                    }),
                    (e.enableButtons = function () {
                        (Z.disabled = !1), (Q.disabled = !1);
                    }),
                    (e.disableButtons = function () {
                        (Z.disabled = !0), (Q.disabled = !0);
                    }),
                    (e.enableConfirmButton = function () {
                        Z.disabled = !1;
                    }),
                    (e.disableConfirmButton = function () {
                        Z.disabled = !0;
                    }),
                    (e.enableInput = function () {
                        var e = M();
                        if (!e) return !1;
                        if ("radio" === e.type) for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !1;
                        else e.disabled = !1;
                    }),
                    (e.disableInput = function () {
                        var e = M();
                        if (!e) return !1;
                        if (e && "radio" === e.type) for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !0;
                        else e.disabled = !0;
                    }),
                    (e.showValidationError = function (e) {
                        var t = y();
                        (t.innerHTML = e), q(t);
                        var n = M();
                        n && (n.setAttribute("aria-invalid", !0), n.setAttribute("aria-describedBy", o.validationerror), E(n), P(n, o.inputerror));
                    }),
                    (e.resetValidationError = function () {
                        var e = y();
                        V(e);
                        var t = M();
                        t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), L(t, o.inputerror));
                    }),
                    (e.getProgressSteps = function () {
                        return a.progressSteps;
                    }),
                    (e.setProgressSteps = function (e) {
                        (a.progressSteps = e), D(a);
                    }),
                    (e.showProgressSteps = function () {
                        q(v());
                    }),
                    (e.hideProgressSteps = function () {
                        V(v());
                    }),
                    e.enableButtons(),
                    e.hideLoading(),
                    e.resetValidationError(),
                    a.input && P(document.body, o["has-input"]);
                for (var $ = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], J = void 0, X = 0; X < $.length; X++) {
                    var F = o[$[X]],
                        G = T(m, F);
                    if ((J = M($[X]))) {
                        for (var ee in J.attributes)
                            if (J.attributes.hasOwnProperty(ee)) {
                                var te = J.attributes[ee].name;
                                "type" !== te && "value" !== te && J.removeAttribute(te);
                            }
                        for (var ne in a.inputAttributes) J.setAttribute(ne, a.inputAttributes[ne]);
                    }
                    (G.className = F), a.inputClass && P(G, a.inputClass), V(G);
                }
                var oe = void 0;
                switch (a.input) {
                    case "text":
                    case "email":
                    case "password":
                    case "number":
                    case "tel":
                    case "url":
                        ((J = T(m, o.input)).value = a.inputValue), (J.placeholder = a.inputPlaceholder), (J.type = a.input), q(J);
                        break;
                    case "file":
                        ((J = T(m, o.file)).placeholder = a.inputPlaceholder), (J.type = a.input), q(J);
                        break;
                    case "range":
                        var re = T(m, o.range),
                            ie = re.querySelector("input"),
                            ae = re.querySelector("output");
                        (ie.value = a.inputValue), (ie.type = a.input), (ae.value = a.inputValue), q(re);
                        break;
                    case "select":
                        var se = T(m, o.select);
                        if (((se.innerHTML = ""), a.inputPlaceholder)) {
                            var le = document.createElement("option");
                            (le.innerHTML = a.inputPlaceholder), (le.value = ""), (le.disabled = !0), (le.selected = !0), se.appendChild(le);
                        }
                        oe = function (e) {
                            for (var t in e) {
                                var n = document.createElement("option");
                                (n.value = t), (n.innerHTML = e[t]), a.inputValue.toString() === t && (n.selected = !0), se.appendChild(n);
                            }
                            q(se), se.focus();
                        };
                        break;
                    case "radio":
                        var ue = T(m, o.radio);
                        (ue.innerHTML = ""),
                            (oe = function (e) {
                                for (var t in e) {
                                    var n = document.createElement("input"),
                                        r = document.createElement("label"),
                                        i = document.createElement("span");
                                    (n.type = "radio"), (n.name = o.radio), (n.value = t), a.inputValue.toString() === t && (n.checked = !0), (i.innerHTML = e[t]), r.appendChild(n), r.appendChild(i), (r.for = n.id), ue.appendChild(r);
                                }
                                q(ue);
                                var s = ue.querySelectorAll("input");
                                s.length && s[0].focus();
                            });
                        break;
                    case "checkbox":
                        var ce = T(m, o.checkbox),
                            de = M("checkbox");
                        (de.type = "checkbox"), (de.value = 1), (de.id = o.checkbox), (de.checked = Boolean(a.inputValue));
                        var pe = ce.getElementsByTagName("span");
                        pe.length && ce.removeChild(pe[0]), ((pe = document.createElement("span")).innerHTML = a.inputPlaceholder), ce.appendChild(pe), q(ce);
                        break;
                    case "textarea":
                        var fe = T(m, o.textarea);
                        (fe.value = a.inputValue), (fe.placeholder = a.inputPlaceholder), q(fe);
                        break;
                    case null:
                        break;
                    default:
                        s('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + a.input + '"');
                }
                ("select" !== a.input && "radio" !== a.input) ||
                    (a.inputOptions instanceof Promise
                        ? (e.showLoading(),
                          a.inputOptions.then(function (t) {
                              e.hideLoading(), oe(t);
                          }))
                        : "object" === N(a.inputOptions)
                        ? oe(a.inputOptions)
                        : s("Unexpected type of inputOptions! Expected object or Promise, got " + N(a.inputOptions))),
                    (function (e, t, n) {
                        var r = p(),
                            i = f();
                        null !== t && "function" == typeof t && t(i),
                            e ? (P(i, o.show), P(r, o.fade), L(i, o.hide)) : L(i, o.fade),
                            q(i),
                            (r.style.overflowY = "hidden"),
                            j && !B(i, o.noanimation)
                                ? i.addEventListener(j, function e() {
                                      i.removeEventListener(j, e), (r.style.overflowY = "auto");
                                  })
                                : (r.style.overflowY = "auto"),
                            P(document.documentElement, o.shown),
                            P(document.body, o.shown),
                            P(r, o.shown),
                            A() && (U(), W()),
                            (u.previousActiveElement = document.activeElement),
                            null !== n &&
                                "function" == typeof n &&
                                setTimeout(function () {
                                    n(i);
                                });
                    })(a.animation, a.onBeforeOpen, a.onOpen),
                    a.toast || (a.allowEnterKey ? (a.focusCancel && O(Q) ? Q.focus() : a.focusConfirm && O(Z) ? Z.focus() : Y(-1, 1)) : document.activeElement && document.activeElement.blur()),
                    (p().scrollTop = 0);
            });
        };
    return (
        (K.isVisible = function () {
            return !!f();
        }),
        (K.queue = function (e) {
            R = e;
            var t = function () {
                    (R = []), document.body.removeAttribute("data-swal2-queue-step");
                },
                n = [];
            return new Promise(function (e, o) {
                !(function r(i, a) {
                    i < R.length
                        ? (document.body.setAttribute("data-swal2-queue-step", i),
                          K(R[i]).then(
                              function (e) {
                                  n.push(e), r(i + 1, a);
                              },
                              function (e) {
                                  t(), o(e);
                              }
                          ))
                        : (t(), e(n));
                })(0);
            });
        }),
        (K.getQueueStep = function () {
            return document.body.getAttribute("data-swal2-queue-step");
        }),
        (K.insertQueueStep = function (e, t) {
            return t && t < R.length ? R.splice(t, 0, e) : R.push(e);
        }),
        (K.deleteQueueStep = function (e) {
            void 0 !== R[e] && R.splice(e, 1);
        }),
        (K.close = K.closePopup = K.closeModal = K.closeToast = function (e) {
            var t = p(),
                n = f();
            if (n) {
                L(n, o.show),
                    P(n, o.hide),
                    clearTimeout(n.timeout),
                    document.body.classList.contains(o["toast-shown"]) ||
                        (function () {
                            if (((window.onkeydown = u.previousWindowKeyDown), u.previousActiveElement && u.previousActiveElement.focus)) {
                                var e = window.scrollX,
                                    t = window.scrollY;
                                u.previousActiveElement.focus(), e && t && window.scrollTo(e, t);
                            }
                        })();
                var r = function () {
                    t.parentNode && t.parentNode.removeChild(t),
                        L(document.documentElement, o.shown),
                        L(document.body, o.shown),
                        L(document.body, o["no-backdrop"]),
                        L(document.body, o["has-input"]),
                        L(document.body, o["toast-shown"]),
                        A() &&
                            (null !== u.previousBodyPadding && ((document.body.style.paddingRight = u.previousBodyPadding), (u.previousBodyPadding = null)),
                            (function () {
                                if (B(document.body, o.iosfix)) {
                                    var e = parseInt(document.body.style.top, 10);
                                    L(document.body, o.iosfix), (document.body.style.top = ""), (document.body.scrollTop = -1 * e);
                                }
                            })());
                };
                j && !B(n, o.noanimation)
                    ? n.addEventListener(j, function e() {
                          n.removeEventListener(j, e), B(n, o.hide) && r();
                      })
                    : r(),
                    null !== e &&
                        "function" == typeof e &&
                        setTimeout(function () {
                            e(n);
                        });
            }
        }),
        (K.clickConfirm = function () {
            return w().click();
        }),
        (K.clickCancel = function () {
            return C().click();
        }),
        (K.showLoading = K.enableLoading = function () {
            var e = f();
            e || K(""), (e = f());
            var t = x(),
                n = w(),
                r = C();
            q(t), q(n, "inline-block"), P(t, o.loading), P(e, o.loading), (n.disabled = !0), (r.disabled = !0), e.setAttribute("aria-busy", !0), e.focus();
        }),
        (K.isValidParameter = function (t) {
            return e.hasOwnProperty(t) || "extraParams" === t;
        }),
        (K.isDeprecatedParameter = function (e) {
            return -1 !== t.indexOf(e);
        }),
        (K.setDefaults = function (e) {
            if (!e || "object" !== (void 0 === e ? "undefined" : N(e))) return s("the argument for setDefaults() is required and has to be a object");
            I(e);
            for (var t in e) K.isValidParameter(t) && (H[t] = e[t]);
        }),
        (K.resetDefaults = function () {
            H = M({}, e);
        }),
        (K.adaptInputValidator = function (e) {
            return function (t, n) {
                return e.call(this, t, n).then(
                    function () {},
                    function (e) {
                        return e;
                    }
                );
            };
        }),
        (K.noop = function () {}),
        (K.version = "7.0.0"),
        (K.default = K),
        K
    );
}),
    window.Sweetalert2 && (window.sweetAlert = window.swal = window.Sweetalert2);
!(function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c
                ? c
                : (this.attr("novalidate", "novalidate"),
                  (c = new a.validator(b, this[0])),
                  a.data(this[0], "validator", c),
                  c.settings.onsubmit &&
                      (this.on("click.validate", ":submit", function (b) {
                          c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
                      }),
                      this.on("submit.validate", function (b) {
                          function d() {
                              var d, e;
                              return c.settings.submitHandler
                                  ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                                    (e = c.settings.submitHandler.call(c, c.currentForm, b)),
                                    c.submitButton && d.remove(),
                                    void 0 !== e ? e : !1)
                                  : !0;
                          }
                          return c.settings.debug && b.preventDefault(), c.cancelSubmit ? ((c.cancelSubmit = !1), d()) : c.form() ? (c.pendingRequest ? ((c.formSubmitted = !0), !1) : d()) : (c.focusInvalid(), !1);
                      })),
                  c);
        },
        valid: function () {
            var b, c, d;
            return (
                a(this[0]).is("form")
                    ? (b = this.validate().form())
                    : ((d = []),
                      (b = !0),
                      (c = a(this[0].form).validate()),
                      this.each(function () {
                          (b = c.element(this) && b), (d = d.concat(c.errorList));
                      }),
                      (c.errorList = d)),
                b
            );
        },
        rules: function (b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j = this[0];
            if (b)
                switch (((d = a.data(j.form, "validator").settings), (e = d.rules), (f = a.validator.staticRules(j)), b)) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, (e[j.name] = f), c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c
                            ? ((i = {}),
                              a.each(c.split(/\s/), function (b, c) {
                                  (i[c] = f[c]), delete f[c], "required" === c && a(j).removeAttr("aria-required");
                              }),
                              i)
                            : (delete e[j.name], f);
                }
            return (
                (g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j)),
                g.required && ((h = g.required), delete g.required, (g = a.extend({ required: h }, g)), a(j).attr("aria-required", "true")),
                g.remote && ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
                g
            );
        },
    }),
        a.extend(a.expr[":"], {
            blank: function (b) {
                return !a.trim("" + a(b).val());
            },
            filled: function (b) {
                return !!a.trim("" + a(b).val());
            },
            unchecked: function (b) {
                return !a(b).prop("checked");
            },
        }),
        (a.validator = function (b, c) {
            (this.settings = a.extend(!0, {}, a.validator.defaults, b)), (this.currentForm = c), this.init();
        }),
        (a.validator.format = function (b, c) {
            return 1 === arguments.length
                ? function () {
                      var c = a.makeArray(arguments);
                      return c.unshift(b), a.validator.format.apply(this, c);
                  }
                : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
                  c.constructor !== Array && (c = [c]),
                  a.each(c, function (a, c) {
                      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                          return c;
                      });
                  }),
                  b);
        }),
        a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (a) {
                    (this.lastActive = a), this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
                },
                onfocusout: function (a) {
                    this.checkable(a) || (!(a.name in this.submitted) && this.optional(a)) || this.element(a);
                },
                onkeyup: function (b, c) {
                    var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    (9 === c.which && "" === this.elementValue(b)) || -1 !== a.inArray(c.keyCode, d) || ((b.name in this.submitted || b === this.lastElement) && this.element(b));
                },
                onclick: function (a) {
                    a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
                },
                highlight: function (b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
                },
                unhighlight: function (b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
                },
            },
            setDefaults: function (b) {
                a.extend(a.validator.defaults, b);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format("Please enter no more than {0} characters."),
                minlength: a.validator.format("Please enter at least {0} characters."),
                rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                range: a.validator.format("Please enter a value between {0} and {1}."),
                max: a.validator.format("Please enter a value less than or equal to {0}."),
                min: a.validator.format("Please enter a value greater than or equal to {0}."),
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function b(b) {
                        var c = a.data(this.form, "validator"),
                            d = "on" + b.type.replace(/^validate/, ""),
                            e = c.settings;
                        e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
                    }
                    (this.labelContainer = a(this.settings.errorLabelContainer)),
                        (this.errorContext = (this.labelContainer.length && this.labelContainer) || a(this.currentForm)),
                        (this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                    var c,
                        d = (this.groups = {});
                    a.each(this.settings.groups, function (b, c) {
                        "string" == typeof c && (c = c.split(/\s/)),
                            a.each(c, function (a, c) {
                                d[c] = b;
                            });
                    }),
                        (c = this.settings.rules),
                        a.each(c, function (b, d) {
                            c[b] = a.validator.normalizeRule(d);
                        }),
                        a(this.currentForm)
                            .on(
                                "focusin.validate focusout.validate keyup.validate",
                                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                                b
                            )
                            .on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                        this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                        a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
                },
                form: function () {
                    return this.checkForm(), a.extend(this.submitted, this.errorMap), (this.invalid = a.extend({}, this.errorMap)), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var a = 0, b = (this.currentElements = this.elements()); b[a]; a++) this.check(b[a]);
                    return this.valid();
                },
                element: function (b) {
                    var c = this.clean(b),
                        d = this.validationTargetFor(c),
                        e = !0;
                    return (
                        (this.lastElement = d),
                        void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), (this.currentElements = a(d)), (e = this.check(d) !== !1), e ? delete this.invalid[d.name] : (this.invalid[d.name] = !0)),
                        a(b).attr("aria-invalid", !e),
                        this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                        this.showErrors(),
                        e
                    );
                },
                showErrors: function (b) {
                    if (b) {
                        a.extend(this.errorMap, b), (this.errorList = []);
                        for (var c in b) this.errorList.push({ message: b[c], element: this.findByName(c)[0] });
                        this.successList = a.grep(this.successList, function (a) {
                            return !(a.name in b);
                        });
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
                },
                resetForm: function () {
                    a.fn.resetForm && a(this.currentForm).resetForm(), (this.submitted = {}), (this.lastElement = null), this.prepareForm(), this.hideErrors();
                    var b,
                        c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    if (this.settings.unhighlight) for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, "");
                    else c.removeClass(this.settings.errorClass);
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid);
                },
                objectLength: function (a) {
                    var b,
                        c = 0;
                    for (b in a) c++;
                    return c;
                },
                hideErrors: function () {
                    this.hideThese(this.toHide);
                },
                hideThese: function (a) {
                    a.not(this.containers).text(""), this.addWrapper(a).hide();
                },
                valid: function () {
                    return 0 === this.size();
                },
                size: function () {
                    return this.errorList.length;
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid)
                        try {
                            a(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                                .filter(":visible")
                                .focus()
                                .trigger("focusin");
                        } catch (b) {}
                },
                findLastActive: function () {
                    var b = this.lastActive;
                    return (
                        b &&
                        1 ===
                            a.grep(this.errorList, function (a) {
                                return a.element.name === b.name;
                            }).length &&
                        b
                    );
                },
                elements: function () {
                    var b = this,
                        c = {};
                    return a(this.currentForm)
                        .find("input, select, textarea")
                        .not(":submit, :reset, :image, :disabled")
                        .not(this.settings.ignore)
                        .filter(function () {
                            return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : ((c[this.name] = !0), !0);
                        });
                },
                clean: function (b) {
                    return a(b)[0];
                },
                errors: function () {
                    var b = this.settings.errorClass.split(" ").join(".");
                    return a(this.settings.errorElement + "." + b, this.errorContext);
                },
                reset: function () {
                    (this.successList = []), (this.errorList = []), (this.errorMap = {}), (this.toShow = a([])), (this.toHide = a([])), (this.currentElements = a([]));
                },
                prepareForm: function () {
                    this.reset(), (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (a) {
                    this.reset(), (this.toHide = this.errorsFor(a));
                },
                elementValue: function (b) {
                    var c,
                        d = a(b),
                        e = b.type;
                    return "radio" === e || "checkbox" === e
                        ? this.findByName(b.name).filter(":checked").val()
                        : "number" === e && "undefined" != typeof b.validity
                        ? b.validity.badInput
                            ? !1
                            : d.val()
                        : ((c = d.val()), "string" == typeof c ? c.replace(/\r/g, "") : c);
                },
                check: function (b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c,
                        d,
                        e,
                        f = a(b).rules(),
                        g = a.map(f, function (a, b) {
                            return b;
                        }).length,
                        h = !1,
                        i = this.elementValue(b);
                    for (d in f) {
                        e = { method: d, parameters: f[d] };
                        try {
                            if (((c = a.validator.methods[d].call(this, i, b, e.parameters)), "dependency-mismatch" === c && 1 === g)) {
                                h = !0;
                                continue;
                            }
                            if (((h = !1), "pending" === c)) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c) return this.formatAndAdd(b, e), !1;
                        } catch (j) {
                            throw (
                                (this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j),
                                j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
                                j)
                            );
                        }
                    }
                    if (!h) return this.objectLength(f) && this.successList.push(b), !0;
                },
                customDataMessage: function (b, c) {
                    return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
                },
                customMessage: function (a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b]);
                },
                findDefined: function () {
                    for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
                    return void 0;
                },
                defaultMessage: function (b, c) {
                    return this.findDefined(
                        this.customMessage(b.name, c),
                        this.customDataMessage(b, c),
                        (!this.settings.ignoreTitle && b.title) || void 0,
                        a.validator.messages[c],
                        "<strong>Warning: No message defined for " + b.name + "</strong>"
                    );
                },
                formatAndAdd: function (b, c) {
                    var d = this.defaultMessage(b, c.method),
                        e = /\$?\{(\d+)\}/g;
                    "function" == typeof d ? (d = d.call(this, c.parameters, b)) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                        this.errorList.push({ message: d, element: b, method: c.method }),
                        (this.errorMap[b.name] = d),
                        (this.submitted[b.name] = d);
                },
                addWrapper: function (a) {
                    return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
                },
                defaultShowErrors: function () {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++)
                        (c = this.errorList[a]), this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                    if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                    return a(this.errorList).map(function () {
                        return this.element;
                    });
                },
                showLabel: function (b, c) {
                    var d,
                        e,
                        f,
                        g = this.errorsFor(b),
                        h = this.idOrName(b),
                        i = a(b).attr("aria-describedby");
                    g.length
                        ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c))
                        : ((g = a("<" + this.settings.errorElement + ">")
                              .attr("id", h + "-error")
                              .addClass(this.settings.errorClass)
                              .html(c || "")),
                          (d = g),
                          this.settings.wrapper &&
                              (d = g
                                  .hide()
                                  .show()
                                  .wrap("<" + this.settings.wrapper + "/>")
                                  .parent()),
                          this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b),
                          g.is("label")
                              ? g.attr("for", h)
                              : 0 === g.parents("label[for='" + h + "']").length &&
                                ((f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1")),
                                i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : (i = f),
                                a(b).attr("aria-describedby", i),
                                (e = this.groups[b.name]),
                                e &&
                                    a.each(this.groups, function (b, c) {
                                        c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"));
                                    }))),
                        !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)),
                        (this.toShow = this.toShow.add(g));
                },
                errorsFor: function (b) {
                    var c = this.idOrName(b),
                        d = a(b).attr("aria-describedby"),
                        e = "label[for='" + c + "'], label[for='" + c + "'] *";
                    return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e);
                },
                idOrName: function (a) {
                    return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
                },
                validationTargetFor: function (b) {
                    return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
                },
                checkable: function (a) {
                    return /radio|checkbox/i.test(a.type);
                },
                findByName: function (b) {
                    return a(this.currentForm).find("[name='" + b + "']");
                },
                getLength: function (b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
                    }
                    return b.length;
                },
                depend: function (a, b) {
                    return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0;
                },
                dependTypes: {
                    boolean: function (a) {
                        return a;
                    },
                    string: function (b, c) {
                        return !!a(b, c.form).length;
                    },
                    function: function (a, b) {
                        return a(b);
                    },
                },
                optional: function (b) {
                    var c = this.elementValue(b);
                    return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
                },
                startRequest: function (a) {
                    this.pending[a.name] || (this.pendingRequest++, (this.pending[a.name] = !0));
                },
                stopRequest: function (b, c) {
                    this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[b.name],
                        c && 0 === this.pendingRequest && this.formSubmitted && this.form()
                            ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
                            : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));
                },
                previousValue: function (b) {
                    return a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, "remote") });
                },
                destroy: function () {
                    this.resetForm(), a(this.currentForm).off(".validate").removeData("validator");
                },
            },
            classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
            addClassRules: function (b, c) {
                b.constructor === String ? (this.classRuleSettings[b] = c) : a.extend(this.classRuleSettings, b);
            },
            classRules: function (b) {
                var c = {},
                    d = a(b).attr("class");
                return (
                    d &&
                        a.each(d.split(" "), function () {
                            this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
                        }),
                    c
                );
            },
            normalizeAttributeRule: function (a, b, c, d) {
                /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && ((d = Number(d)), isNaN(d) && (d = void 0)), d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
            },
            attributeRules: function (b) {
                var c,
                    d,
                    e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) "required" === c ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d)) : (d = f.attr(c)), this.normalizeAttributeRule(e, g, c, d);
                return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
            },
            dataRules: function (b) {
                var c,
                    d,
                    e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) (d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase())), this.normalizeAttributeRule(e, g, c, d);
                return e;
            },
            staticRules: function (b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
            },
            normalizeRules: function (b, c) {
                return (
                    a.each(b, function (d, e) {
                        if (e === !1) return void delete b[d];
                        if (e.param || e.depends) {
                            var f = !0;
                            switch (typeof e.depends) {
                                case "string":
                                    f = !!a(e.depends, c.form).length;
                                    break;
                                case "function":
                                    f = e.depends.call(c, c);
                            }
                            f ? (b[d] = void 0 !== e.param ? e.param : !0) : delete b[d];
                        }
                    }),
                    a.each(b, function (d, e) {
                        b[d] = a.isFunction(e) ? e(c) : e;
                    }),
                    a.each(["minlength", "maxlength"], function () {
                        b[this] && (b[this] = Number(b[this]));
                    }),
                    a.each(["rangelength", "range"], function () {
                        var c;
                        b[this] && (a.isArray(b[this]) ? (b[this] = [Number(b[this][0]), Number(b[this][1])]) : "string" == typeof b[this] && ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)), (b[this] = [Number(c[0]), Number(c[1])])));
                    }),
                    a.validator.autoCreateRanges &&
                        (null != b.min && null != b.max && ((b.range = [b.min, b.max]), delete b.min, delete b.max),
                        null != b.minlength && null != b.maxlength && ((b.rangelength = [b.minlength, b.maxlength]), delete b.minlength, delete b.maxlength)),
                    b
                );
            },
            normalizeRule: function (b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function () {
                        c[this] = !0;
                    }),
                        (b = c);
                }
                return b;
            },
            addMethod: function (b, c, d) {
                (a.validator.methods[b] = c), (a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b]), c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
            },
            methods: {
                required: function (b, c, d) {
                    if (!this.depend(d, c)) return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0;
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
                },
                email: function (a, b) {
                    return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
                },
                url: function (a, b) {
                    return (
                        this.optional(b) ||
                        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                            a
                        )
                    );
                },
                date: function (a, b) {
                    return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
                },
                dateISO: function (a, b) {
                    return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
                },
                number: function (a, b) {
                    return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
                },
                digits: function (a, b) {
                    return this.optional(b) || /^\d+$/.test(a);
                },
                creditcard: function (a, b) {
                    if (this.optional(b)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(a)) return !1;
                    var c,
                        d,
                        e = 0,
                        f = 0,
                        g = !1;
                    if (((a = a.replace(/\D/g, "")), a.length < 13 || a.length > 19)) return !1;
                    for (c = a.length - 1; c >= 0; c--) (d = a.charAt(c)), (f = parseInt(d, 10)), g && (f *= 2) > 9 && (f -= 9), (e += f), (g = !g);
                    return e % 10 === 0;
                },
                minlength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d;
                },
                maxlength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || d >= e;
                },
                rangelength: function (b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || (e >= d[0] && e <= d[1]);
                },
                min: function (a, b, c) {
                    return this.optional(b) || a >= c;
                },
                max: function (a, b, c) {
                    return this.optional(b) || c >= a;
                },
                range: function (a, b, c) {
                    return this.optional(b) || (a >= c[0] && a <= c[1]);
                },
                equalTo: function (b, c, d) {
                    var e = a(d);
                    return (
                        this.settings.onfocusout &&
                            e.off(".validate-equalTo").on("blur.validate-equalTo", function () {
                                a(c).valid();
                            }),
                        b === e.val()
                    );
                },
                remote: function (b, c, d) {
                    if (this.optional(c)) return "dependency-mismatch";
                    var e,
                        f,
                        g = this.previousValue(c);
                    return (
                        this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                        (g.originalMessage = this.settings.messages[c.name].remote),
                        (this.settings.messages[c.name].remote = g.message),
                        (d = ("string" == typeof d && { url: d }) || d),
                        g.old === b
                            ? g.valid
                            : ((g.old = b),
                              (e = this),
                              this.startRequest(c),
                              (f = {}),
                              (f[c.name] = b),
                              a.ajax(
                                  a.extend(
                                      !0,
                                      {
                                          mode: "abort",
                                          port: "validate" + c.name,
                                          dataType: "json",
                                          data: f,
                                          context: e.currentForm,
                                          success: function (d) {
                                              var f,
                                                  h,
                                                  i,
                                                  j = d === !0 || "true" === d;
                                              (e.settings.messages[c.name].remote = g.originalMessage),
                                                  j
                                                      ? ((i = e.formSubmitted), e.prepareElement(c), (e.formSubmitted = i), e.successList.push(c), delete e.invalid[c.name], e.showErrors())
                                                      : ((f = {}), (h = d || e.defaultMessage(c, "remote")), (f[c.name] = g.message = a.isFunction(h) ? h(b) : h), (e.invalid[c.name] = !0), e.showErrors(f)),
                                                  (g.valid = j),
                                                  e.stopRequest(c, j);
                                          },
                                      },
                                      d
                                  )
                              ),
                              "pending")
                    );
                },
            },
        });
    var b,
        c = {};
    a.ajaxPrefilter
        ? a.ajaxPrefilter(function (a, b, d) {
              var e = a.port;
              "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
          })
        : ((b = a.ajax),
          (a.ajax = function (d) {
              var e = ("mode" in d ? d : a.ajaxSettings).mode,
                  f = ("port" in d ? d : a.ajaxSettings).port;
              return "abort" === e ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f]) : b.apply(this, arguments);
          }));
});
if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {
    var loadAPI = function loadAPI(callback) {
            var tag = document.createElement("script"),
                head = document.getElementsByTagName("head")[0];
            if (window.location.origin == "file://") {
                tag.src = "http://www.youtube.com/iframe_api";
            } else {
                tag.src = "//www.youtube.com/iframe_api";
            }
            head.appendChild(tag);
            head = null;
            tag = null;
            iframeIsReady(callback);
        },
        iframeIsReady = function iframeIsReady(callback) {
            if (typeof YT === "undefined" && typeof window.loadingPlayer === "undefined") {
                window.loadingPlayer = !0;
                window.dfd = $.Deferred();
                window.onYouTubeIframeAPIReady = function () {
                    window.onYouTubeIframeAPIReady = null;
                    window.dfd.resolve("done");
                    callback();
                };
            } else if (typeof YT === "object") {
                callback();
            } else {
                window.dfd.done(function (name) {
                    callback();
                });
            }
        };
    YTPlayer = {
        player: null,
        defaults: {
            ratio: 16 / 9,
            videoId: "LSmgKRx5pBo",
            mute: !0,
            repeat: !0,
            width: $(window).width(),
            playButtonClass: "YTPlayer-play",
            pauseButtonClass: "YTPlayer-pause",
            muteButtonClass: "YTPlayer-mute",
            volumeUpClass: "YTPlayer-volume-up",
            volumeDownClass: "YTPlayer-volume-down",
            start: 0,
            pauseOnScroll: !1,
            fitToBackground: !0,
            playerVars: { iv_load_policy: 3, modestbranding: 1, autoplay: 1, controls: 0, showinfo: 0, wmode: "opaque", branding: 0, autohide: 0 },
            events: null,
        },
        init: function init(node, userOptions) {
            var self = this;
            self.userOptions = userOptions;
            (self.$body = $("body")), (self.$node = $(node)), (self.$window = $(window));
            self.defaults.events = {
                onReady: function (e) {
                    self.onPlayerReady(e);
                    if (self.options.pauseOnScroll) {
                        self.pauseOnScroll();
                    }
                    if (typeof self.options.callback == "function") {
                        self.options.callback.call(this);
                    }
                },
                onStateChange: function (e) {
                    if (e.data === 1) {
                        self.$node.find("img").fadeOut(400);
                        self.$node.addClass("loaded");
                    } else if (e.data === 0 && self.options.repeat) {
                        self.player.seekTo(self.options.start);
                    }
                },
            };
            self.options = $.extend(!0, {}, self.defaults, self.userOptions);
            self.options.height = Math.ceil(self.options.width / self.options.ratio);
            self.ID = new Date().getTime();
            self.holderID = "YTPlayer-ID-" + self.ID;
            if (self.options.fitToBackground) {
                self.createBackgroundVideo();
            } else {
                self.createContainerVideo();
            }
            self.$window.on("resize.YTplayer" + self.ID, function () {
                self.resize(self);
            });
            loadAPI(self.onYouTubeIframeAPIReady.bind(self));
            self.resize(self);
            return self;
        },
        pauseOnScroll: function pauseOnScroll() {
            var self = this;
            self.$window.on("scroll.YTplayer" + self.ID, function () {
                var state = self.player.getPlayerState();
                if (state === 1) {
                    self.player.pauseVideo();
                }
            });
            self.$window.scrollStopped(function () {
                var state = self.player.getPlayerState();
                if (state === 2) {
                    self.player.playVideo();
                }
            });
        },
        createContainerVideo: function createContainerVideo() {
            var self = this;
            var $YTPlayerString = $(
                '<div id="ytplayer-container' +
                    self.ID +
                    '" >\
                                    <div id="' +
                    self.holderID +
                    '" class="ytplayer-player-inline"></div> \
                                    </div> \
                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>'
            );
            self.$node.append($YTPlayerString);
            self.$YTPlayerString = $YTPlayerString;
            $YTPlayerString = null;
        },
        createBackgroundVideo: function createBackgroundVideo() {
            var self = this,
                $YTPlayerString = $(
                    '<div id="ytplayer-container' +
                        self.ID +
                        '" class="ytplayer-container background">\
                                    <div id="' +
                        self.holderID +
                        '" class="ytplayer-player"></div>\
                                    </div>\
                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>'
                );
            self.$node.append($YTPlayerString);
            self.$YTPlayerString = $YTPlayerString;
            $YTPlayerString = null;
        },
        resize: function resize(self) {
            var container = $(window);
            if (!self.options.fitToBackground) {
                container = self.$node;
            }
            var width = container.width(),
                pWidth,
                height = container.height(),
                pHeight,
                $YTPlayerPlayer = $("#" + self.holderID);
            if (width / self.options.ratio < height) {
                pWidth = Math.ceil(height * self.options.ratio);
                $YTPlayerPlayer
                    .width(pWidth)
                    .height(height)
                    .css({ left: (width - pWidth) / 2, top: 0 });
            } else {
                pHeight = Math.ceil(width / self.options.ratio);
                $YTPlayerPlayer
                    .width(width)
                    .height(pHeight)
                    .css({ left: 0, top: (height - pHeight) / 2 });
            }
            $YTPlayerPlayer = null;
            container = null;
        },
        onYouTubeIframeAPIReady: function onYouTubeIframeAPIReady() {
            var self = this;
            self.player = new window.YT.Player(self.holderID, self.options);
        },
        onPlayerReady: function onPlayerReady(e) {
            if (this.options.mute) {
                e.target.mute();
            }
            if (this.options.start > 0) e.target.seekTo(this.options.start);
            e.target.playVideo();
        },
        getPlayer: function getPlayer() {
            return this.player;
        },
        destroy: function destroy() {
            var self = this;
            self.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded");
            self.$YTPlayerString.remove();
            $(window).off("resize.YTplayer" + self.ID);
            $(window).off("scroll.YTplayer" + self.ID);
            self.$body = null;
            self.$node = null;
            self.$YTPlayerString = null;
            self.player.destroy();
            self.player = null;
        },
    };
    $.fn.scrollStopped = function (callback) {
        var $this = $(this),
            self = this;
        $this.scroll(function () {
            if ($this.data("scrollTimeout")) {
                clearTimeout($this.data("scrollTimeout"));
            }
            $this.data("scrollTimeout", setTimeout(callback, 250, self));
        });
    };
    $.fn.YTPlayer = function (options) {
        return this.each(function () {
            var el = this;
            $(el).data("yt-init", !0);
            var player = Object.create(YTPlayer);
            player.init(el, options);
            $.data(el, "ytPlayer", player);
        });
    };
})(jQuery, window, document);
!(function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require("jquery") : a.jQuery);
})(this, function (a) {
    "use strict";
    function b(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i = {};
        for (
            f = a
                .replace(/\s*:\s*/g, ":")
                .replace(/\s*,\s*/g, ",")
                .split(","),
                h = 0,
                g = f.length;
            g > h && ((c = f[h]), -1 === c.search(/^(http|https|ftp):\/\//) && -1 !== c.search(":"));
            h++
        )
            (b = c.indexOf(":")), (d = c.substring(0, b)), (e = c.substring(b + 1)), e || (e = void 0), "string" == typeof e && (e = "true" === e || ("false" === e ? !1 : e)), "string" == typeof e && (e = isNaN(e) ? e : +e), (i[d] = e);
        return null == d && null == e ? a : i;
    }
    function c(a) {
        a = "" + a;
        var b,
            c,
            d,
            e = a.split(/\s+/),
            f = "50%",
            g = "50%";
        for (d = 0, b = e.length; b > d; d++)
            (c = e[d]), "left" === c ? (f = "0%") : "right" === c ? (f = "100%") : "top" === c ? (g = "0%") : "bottom" === c ? (g = "100%") : "center" === c ? (0 === d ? (f = "50%") : (g = "50%")) : 0 === d ? (f = c) : (g = c);
        return { x: f, y: g };
    }
    function d(b, c) {
        var d = function () {
            c(this.src);
        };
        a('<img src="' + b + '.gif">').load(d), a('<img src="' + b + '.jpg">').load(d), a('<img src="' + b + '.jpeg">').load(d), a('<img src="' + b + '.png">').load(d);
    }
    function e(c, d, e) {
        if (((this.$element = a(c)), "string" == typeof d && (d = b(d)), e ? "string" == typeof e && (e = b(e)) : (e = {}), "string" == typeof d)) d = d.replace(/\.\w*$/, "");
        else if ("object" == typeof d) for (var f in d) d.hasOwnProperty(f) && (d[f] = d[f].replace(/\.\w*$/, ""));
        (this.settings = a.extend({}, g, e)), (this.path = d);
        try {
            this.init();
        } catch (i) {
            if (i.message !== h) throw i;
        }
    }
    var f = "vide",
        g = { volume: 1, playbackRate: 1, muted: !0, loop: !0, autoplay: !0, position: "50% 50%", posterType: "detect", resizing: !0, bgColor: "transparent", className: "" },
        h = "Not implemented";
    (e.prototype.init = function () {
        var b,
            e,
            g = this,
            i = g.path,
            j = i,
            k = "",
            l = g.$element,
            m = g.settings,
            n = c(m.position),
            o = m.posterType;
        (e = g.$wrapper = a("<div>")
            .addClass(m.className)
            .css({
                position: "absolute",
                "z-index": -1,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: "hidden",
                "-webkit-background-size": "cover",
                "-moz-background-size": "cover",
                "-o-background-size": "cover",
                "background-size": "cover",
                "background-color": m.bgColor,
                "background-repeat": "no-repeat",
                "background-position": n.x + " " + n.y,
            })),
            "object" == typeof i && (i.poster ? (j = i.poster) : i.mp4 ? (j = i.mp4) : i.webm ? (j = i.webm) : i.ogv && (j = i.ogv)),
            "detect" === o
                ? d(j, function (a) {
                      e.css("background-image", "url(" + a + ")");
                  })
                : "none" !== o && e.css("background-image", "url(" + j + "." + o + ")"),
            "static" === l.css("position") && l.css("position", "relative"),
            l.prepend(e),
            "object" == typeof i
                ? (i.mp4 && (k += '<source src="' + i.mp4 + '.mp4" type="video/mp4">'),
                  i.webm && (k += '<source src="' + i.webm + '.webm" type="video/webm">'),
                  i.ogv && (k += '<source src="' + i.ogv + '.ogv" type="video/ogg">'),
                  (b = g.$video = a("<video>" + k + "</video>")))
                : (b = g.$video = a('<video><source src="' + i + '.mp4" type="video/mp4"><source src="' + i + '.webm" type="video/webm"><source src="' + i + '.ogv" type="video/ogg"></video>'));
        try {
            b.prop({ autoplay: m.autoplay, loop: m.loop, volume: m.volume, muted: m.muted, defaultMuted: m.muted, playbackRate: m.playbackRate, defaultPlaybackRate: m.playbackRate });
        } catch (p) {
            throw new Error(h);
        }
        b
            .css({
                margin: "auto",
                position: "absolute",
                "z-index": -1,
                top: n.y,
                left: n.x,
                "-webkit-transform": "translate(-" + n.x + ", -" + n.y + ")",
                "-ms-transform": "translate(-" + n.x + ", -" + n.y + ")",
                "-moz-transform": "translate(-" + n.x + ", -" + n.y + ")",
                transform: "translate(-" + n.x + ", -" + n.y + ")",
                visibility: "hidden",
                opacity: 0,
            })
            .one("canplaythrough." + f, function () {
                g.resize();
            })
            .one("playing." + f, function () {
                b.css({ visibility: "visible", opacity: 1 }), e.css("background-image", "none");
            }),
            l.on("resize." + f, function () {
                m.resizing && g.resize();
            }),
            e.append(b);
    }),
        (e.prototype.getVideoObject = function () {
            return this.$video[0];
        }),
        (e.prototype.resize = function () {
            if (this.$video) {
                var a = this.$wrapper,
                    b = this.$video,
                    c = b[0],
                    d = c.videoHeight,
                    e = c.videoWidth,
                    f = a.height(),
                    g = a.width();
                g / e > f / d ? b.css({ width: g + 2, height: "auto" }) : b.css({ width: "auto", height: f + 2 });
            }
        }),
        (e.prototype.destroy = function () {
            delete a[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove();
        }),
        (a[f] = { lookup: [] }),
        (a.fn[f] = function (b, c) {
            var d;
            return (
                this.each(function () {
                    (d = a.data(this, f)), d && d.destroy(), (d = new e(this, b, c)), (d.index = a[f].lookup.push(d) - 1), a.data(this, f, d);
                }),
                this
            );
        }),
        a(document).ready(function () {
            var b = a(window);
            b.on("resize." + f, function () {
                for (var b, c = a[f].lookup.length, d = 0; c > d; d++) (b = a[f].lookup[d]), b && b.settings.resizing && b.resize();
            }),
                b.on("unload." + f, function () {
                    return !1;
                }),
                a(document)
                    .find("[data-" + f + "-bg]")
                    .each(function (b, c) {
                        var d = a(c),
                            e = d.data(f + "-options"),
                            g = d.data(f + "-bg");
                        d[f](g, e);
                    });
        });
});
!(function (t) {
    "use strict";
    var s = {
            slide: 0,
            delay: 5e3,
            loop: !0,
            preload: !1,
            preloadImage: !1,
            preloadVideo: !1,
            timer: !0,
            overlay: !1,
            autoplay: !0,
            shuffle: !1,
            cover: !0,
            color: null,
            align: "center",
            valign: "center",
            firstTransition: null,
            firstTransitionDuration: null,
            transition: "fade",
            transitionDuration: 1e3,
            transitionRegister: [],
            animation: null,
            animationDuration: "auto",
            animationRegister: [],
            slidesToKeep: 1,
            init: function () {},
            play: function () {},
            pause: function () {},
            walk: function () {},
            slides: [],
        },
        i = {},
        e = function (i, e) {
            (this.elmt = i),
                (this.settings = t.extend({}, s, t.vegas.defaults, e)),
                (this.slide = this.settings.slide),
                (this.total = this.settings.slides.length),
                (this.noshow = this.total < 2),
                (this.paused = !this.settings.autoplay || this.noshow),
                (this.ended = !1),
                (this.$elmt = t(i)),
                (this.$timer = null),
                (this.$overlay = null),
                (this.$slide = null),
                (this.timeout = null),
                (this.first = !0),
                (this.transitions = [
                    "fade",
                    "fade2",
                    "blur",
                    "blur2",
                    "flash",
                    "flash2",
                    "negative",
                    "negative2",
                    "burn",
                    "burn2",
                    "slideLeft",
                    "slideLeft2",
                    "slideRight",
                    "slideRight2",
                    "slideUp",
                    "slideUp2",
                    "slideDown",
                    "slideDown2",
                    "zoomIn",
                    "zoomIn2",
                    "zoomOut",
                    "zoomOut2",
                    "swirlLeft",
                    "swirlLeft2",
                    "swirlRight",
                    "swirlRight2",
                ]),
                (this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"]),
                this.settings.transitionRegister instanceof Array == !1 && (this.settings.transitionRegister = [this.settings.transitionRegister]),
                this.settings.animationRegister instanceof Array == !1 && (this.settings.animationRegister = [this.settings.animationRegister]),
                (this.transitions = this.transitions.concat(this.settings.transitionRegister)),
                (this.animations = this.animations.concat(this.settings.animationRegister)),
                (this.support = { objectFit: "objectFit" in document.body.style, transition: "transition" in document.body.style || "WebkitTransition" in document.body.style, video: t.vegas.isVideoCompatible() }),
                this.settings.shuffle === !0 && this.shuffle(),
                this._init();
        };
    (e.prototype = {
        _init: function () {
            var s,
                i,
                e,
                n = "BODY" === this.elmt.tagName,
                o = this.settings.timer,
                a = this.settings.overlay,
                r = this;
            this._preload(),
                n ||
                    (this.$elmt.css("height", this.$elmt.css("height")),
                    (s = t('<div class="vegas-wrapper">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding"))),
                    this.$elmt.css("padding") ||
                        s.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")),
                    this.$elmt.clone(!0).children().appendTo(s),
                    (this.elmt.innerHTML = "")),
                o && this.support.transition && ((e = t('<div class="vegas-timer"><div class="vegas-timer-progress">')), (this.$timer = e), this.$elmt.prepend(e)),
                a && ((i = t('<div class="vegas-overlay">')), "string" == typeof a && i.css("background-image", "url(" + a + ")"), (this.$overlay = i), this.$elmt.prepend(i)),
                this.$elmt.addClass("vegas-container"),
                n || this.$elmt.append(s),
                setTimeout(function () {
                    r.trigger("init"), r._goto(r.slide), r.settings.autoplay && r.trigger("play");
                }, 1);
        },
        _preload: function () {
            var t, s;
            for (s = 0; s < this.settings.slides.length; s++)
                (this.settings.preload || this.settings.preloadImages) && this.settings.slides[s].src && ((t = new Image()), (t.src = this.settings.slides[s].src)),
                    (this.settings.preload || this.settings.preloadVideos) &&
                        this.support.video &&
                        this.settings.slides[s].video &&
                        (this.settings.slides[s].video instanceof Array ? this._video(this.settings.slides[s].video) : this._video(this.settings.slides[s].video.src));
        },
        _random: function (t) {
            return t[Math.floor(Math.random() * t.length)];
        },
        _slideShow: function () {
            var t = this;
            this.total > 1 &&
                !this.ended &&
                !this.paused &&
                !this.noshow &&
                (this.timeout = setTimeout(function () {
                    t.next();
                }, this._options("delay")));
        },
        _timer: function (t) {
            var s = this;
            clearTimeout(this.timeout),
                this.$timer &&
                    (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"),
                    this.ended ||
                        this.paused ||
                        this.noshow ||
                        (t &&
                            setTimeout(function () {
                                s.$timer
                                    .addClass("vegas-timer-running")
                                    .find("div")
                                    .css("transition-duration", s._options("delay") - 100 + "ms");
                            }, 100)));
        },
        _video: function (t) {
            var s,
                e,
                n = t.toString();
            return i[n]
                ? i[n]
                : (t instanceof Array == !1 && (t = [t]),
                  (s = document.createElement("video")),
                  (s.preload = !0),
                  t.forEach(function (t) {
                      (e = document.createElement("source")), (e.src = t), s.appendChild(e);
                  }),
                  (i[n] = s),
                  s);
        },
        _fadeOutSound: function (t, s) {
            var i = this,
                e = s / 10,
                n = t.volume - 0.09;
            n > 0
                ? ((t.volume = n),
                  setTimeout(function () {
                      i._fadeOutSound(t, s);
                  }, e))
                : t.pause();
        },
        _fadeInSound: function (t, s) {
            var i = this,
                e = s / 10,
                n = t.volume + 0.09;
            n < 1 &&
                ((t.volume = n),
                setTimeout(function () {
                    i._fadeInSound(t, s);
                }, e));
        },
        _options: function (t, s) {
            return void 0 === s && (s = this.slide), void 0 !== this.settings.slides[s][t] ? this.settings.slides[s][t] : this.settings[t];
        },
        _goto: function (s) {
            function i() {
                f._timer(!0),
                    setTimeout(function () {
                        y &&
                            (f.support.transition
                                ? (h.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-out"),
                                  h.each(function () {
                                      var t = h.find("video").get(0);
                                      t && ((t.volume = 1), f._fadeOutSound(t, _));
                                  }),
                                  e.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-in"))
                                : e.fadeIn(_));
                        for (var t = 0; t < h.length - f.settings.slidesToKeep; t++) h.eq(t).remove();
                        f.trigger("walk"), f._slideShow();
                    }, 100);
            }
            "undefined" == typeof this.settings.slides[s] && (s = 0), (this.slide = s);
            var e,
                n,
                o,
                a,
                r,
                h = this.$elmt.children(".vegas-slide"),
                d = this.settings.slides[s].src,
                l = this.settings.slides[s].video,
                g = this._options("delay"),
                u = this._options("align"),
                c = this._options("valign"),
                p = this._options("cover"),
                m = this._options("color") || this.$elmt.css("background-color"),
                f = this,
                v = h.length,
                y = this._options("transition"),
                _ = this._options("transitionDuration"),
                w = this._options("animation"),
                b = this._options("animationDuration");
            this.settings.firstTransition && this.first && (y = this.settings.firstTransition || y),
                this.settings.firstTransitionDuration && this.first && (_ = this.settings.firstTransitionDuration || _),
                this.first && (this.first = !1),
                "repeat" !== p && (p === !0 ? (p = "cover") : p === !1 && (p = "contain")),
                ("random" === y || y instanceof Array) && (y = y instanceof Array ? this._random(y) : this._random(this.transitions)),
                ("random" === w || w instanceof Array) && (w = w instanceof Array ? this._random(w) : this._random(this.animations)),
                ("auto" === _ || _ > g) && (_ = g),
                "auto" === b && (b = g),
                (e = t('<div class="vegas-slide"></div>')),
                this.support.transition && y && e.addClass("vegas-transition-" + y),
                this.support.video && l
                    ? ((a = l instanceof Array ? this._video(l) : this._video(l.src)),
                      (a.loop = void 0 === l.loop || l.loop),
                      (a.muted = void 0 === l.mute || l.mute),
                      a.muted === !1 ? ((a.volume = 0), this._fadeInSound(a, _)) : a.pause(),
                      (o = t(a).addClass("vegas-video").css("background-color", m)),
                      this.support.objectFit
                          ? o
                                .css("object-position", u + " " + c)
                                .css("object-fit", p)
                                .css("width", "100%")
                                .css("height", "100%")
                          : "contain" === p && o.css("width", "100%").css("height", "100%"),
                      e.append(o))
                    : ((r = new Image()),
                      (n = t('<div class="vegas-slide-inner"></div>')
                          .css("background-image", 'url("' + d + '")')
                          .css("background-color", m)
                          .css("background-position", u + " " + c)),
                      "repeat" === p ? n.css("background-repeat", "repeat") : n.css("background-size", p),
                      this.support.transition && w && n.addClass("vegas-animation-" + w).css("animation-duration", b + "ms"),
                      e.append(n)),
                this.support.transition || e.css("display", "none"),
                v ? h.eq(v - 1).after(e) : this.$elmt.prepend(e),
                h.css("transition", "all 0ms").each(function () {
                    (this.className = "vegas-slide"), "VIDEO" === this.tagName && (this.className += " vegas-video"), y && ((this.className += " vegas-transition-" + y), (this.className += " vegas-transition-" + y + "-in"));
                }),
                f._timer(!1),
                a ? (4 === a.readyState && (a.currentTime = 0), a.play(), i()) : ((r.src = d), r.complete ? i() : (r.onload = i));
        },
        _end: function () {
            (this.ended = !0), this._timer(!1), this.trigger("end");
        },
        shuffle: function () {
            for (var t, s, i = this.total - 1; i > 0; i--) (s = Math.floor(Math.random() * (i + 1))), (t = this.settings.slides[i]), (this.settings.slides[i] = this.settings.slides[s]), (this.settings.slides[s] = t);
        },
        play: function () {
            this.paused && ((this.paused = !1), this.next(), this.trigger("play"));
        },
        pause: function () {
            this._timer(!1), (this.paused = !0), this.trigger("pause");
        },
        toggle: function () {
            this.paused ? this.play() : this.pause();
        },
        playing: function () {
            return !this.paused && !this.noshow;
        },
        current: function (t) {
            return t ? { slide: this.slide, data: this.settings.slides[this.slide] } : this.slide;
        },
        jump: function (t) {
            t < 0 || t > this.total - 1 || t === this.slide || ((this.slide = t), this._goto(this.slide));
        },
        next: function () {
            if ((this.slide++, this.slide >= this.total)) {
                if (!this.settings.loop) return this._end();
                this.slide = 0;
            }
            this._goto(this.slide);
        },
        previous: function () {
            if ((this.slide--, this.slide < 0)) {
                if (!this.settings.loop) return void this.slide++;
                this.slide = this.total - 1;
            }
            this._goto(this.slide);
        },
        trigger: function (t) {
            var s = [];
            (s = "init" === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]]), this.$elmt.trigger("vegas" + t, s), "function" == typeof this.settings[t] && this.settings[t].apply(this.$elmt, s);
        },
        options: function (i, e) {
            var n = this.settings.slides.slice();
            if ("object" == typeof i) this.settings = t.extend({}, s, t.vegas.defaults, i);
            else {
                if ("string" != typeof i) return this.settings;
                if (void 0 === e) return this.settings[i];
                this.settings[i] = e;
            }
            this.settings.slides !== n && ((this.total = this.settings.slides.length), (this.noshow = this.total < 2), this._preload());
        },
        destroy: function () {
            clearTimeout(this.timeout),
                this.$elmt.removeClass("vegas-container"),
                this.$elmt.find("> .vegas-slide").remove(),
                this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt),
                this.$elmt.find("> .vegas-wrapper").remove(),
                this.settings.timer && this.$timer.remove(),
                this.settings.overlay && this.$overlay.remove(),
                (this.elmt._vegas = null);
        },
    }),
        (t.fn.vegas = function (t) {
            var s,
                i = arguments,
                n = !1;
            if (void 0 === t || "object" == typeof t)
                return this.each(function () {
                    this._vegas || (this._vegas = new e(this, t));
                });
            if ("string" == typeof t) {
                if (
                    (this.each(function () {
                        var e = this._vegas;
                        if (!e) throw new Error("No Vegas applied to this element.");
                        "function" == typeof e[t] && "_" !== t[0] ? (s = e[t].apply(e, [].slice.call(i, 1))) : (n = !0);
                    }),
                    n)
                )
                    throw new Error('No method "' + t + '" in Vegas.');
                return void 0 !== s ? s : this;
            }
        }),
        (t.vegas = {}),
        (t.vegas.defaults = s),
        (t.vegas.isVideoCompatible = function () {
            return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent);
        });
})(window.jQuery || window.Zepto);
!(function (i) {
    i.fn.parallax = function () {
        var a = i(window).width();
        return this.each(function (t) {
            function n(t) {
                var n;
                n = a < 601 ? (r.height() > 0 ? r.height() : r.children("img").height()) : r.height() > 0 ? r.height() : 500;
                var e = r.children("img").first(),
                    l = e.height() - n,
                    o = r.offset().top + n,
                    h = r.offset().top,
                    d = i(window).scrollTop(),
                    s = window.innerHeight,
                    c = (d + s - h) / (n + s),
                    g = Math.round(l * c);
                t && e.css("display", "block"), o > d && h < d + s && e.css("transform", "translate3D(-50%," + g + "px, 0)");
            }
            var r = i(this).prepend('<div class="material-parallax parallax"><img src="images/_blank.png" alt=""></div>').find(".material-parallax");
            r.children("img").first().attr("src", r.parents("[data-parallax-img]").data("parallax-img")),
                r
                    .children("img")
                    .one("load", function () {
                        n(!0);
                    })
                    .each(function () {
                        this.complete && i(this).trigger("load");
                    }),
                i(window).scroll(function () {
                    (a = i(window).width()), n(!1);
                }),
                i(window).resize(function () {
                    (a = i(window).width()), n(!1);
                });
        });
    };
})(jQuery);
var CountUp = function (target, startVal, endVal, decimals, duration, options) {
    var self = this;
    self.version = function () {
        return "1.9.3";
    };
    self.options = { useEasing: !0, useGrouping: !0, separator: ",", decimal: ".", easingFn: easeOutExpo, formattingFn: formatNumber, prefix: "", suffix: "", numerals: [] };
    if (options && typeof options === "object") {
        for (var key in self.options) {
            if (options.hasOwnProperty(key) && options[key] !== null) {
                self.options[key] = options[key];
            }
        }
    }
    if (self.options.separator === "") {
        self.options.useGrouping = !1;
    } else {
        self.options.separator = "" + self.options.separator;
    }
    var lastTime = 0;
    var vendors = ["webkit", "moz", "ms", "o"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
    function formatNumber(num) {
        var neg = num < 0,
            x,
            x1,
            x2,
            x3,
            i,
            len;
        num = Math.abs(num).toFixed(self.decimals);
        num += "";
        x = num.split(".");
        x1 = x[0];
        x2 = x.length > 1 ? self.options.decimal + x[1] : "";
        if (self.options.useGrouping) {
            x3 = "";
            for (i = 0, len = x1.length; i < len; ++i) {
                if (i !== 0 && i % 3 === 0) {
                    x3 = self.options.separator + x3;
                }
                x3 = x1[len - i - 1] + x3;
            }
            x1 = x3;
        }
        if (self.options.numerals.length) {
            x1 = x1.replace(/[0-9]/g, function (w) {
                return self.options.numerals[+w];
            });
            x2 = x2.replace(/[0-9]/g, function (w) {
                return self.options.numerals[+w];
            });
        }
        return (neg ? "-" : "") + self.options.prefix + x1 + x2 + self.options.suffix;
    }
    function easeOutExpo(t, b, c, d) {
        return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
    }
    function ensureNumber(n) {
        return typeof n === "number" && !isNaN(n);
    }
    self.initialize = function () {
        if (self.initialized) return !0;
        self.error = "";
        self.d = typeof target === "string" ? document.getElementById(target) : target;
        if (!self.d) {
            self.error = "[CountUp] target is null or undefined";
            return !1;
        }
        self.startVal = Number(startVal);
        self.endVal = Number(endVal);
        if (ensureNumber(self.startVal) && ensureNumber(self.endVal)) {
            self.decimals = Math.max(0, decimals || 0);
            self.dec = Math.pow(10, self.decimals);
            self.duration = Number(duration) * 1000 || 2000;
            self.countDown = self.startVal > self.endVal;
            self.frameVal = self.startVal;
            self.initialized = !0;
            return !0;
        } else {
            self.error = "[CountUp] startVal (" + startVal + ") or endVal (" + endVal + ") is not a number";
            return !1;
        }
    };
    self.printValue = function (value) {
        var result = self.options.formattingFn(value);
        if (self.d.tagName === "INPUT") {
            this.d.value = result;
        } else if (self.d.tagName === "text" || self.d.tagName === "tspan") {
            this.d.textContent = result;
        } else {
            this.d.innerHTML = result;
        }
    };
    self.count = function (timestamp) {
        if (!self.startTime) {
            self.startTime = timestamp;
        }
        self.timestamp = timestamp;
        var progress = timestamp - self.startTime;
        self.remaining = self.duration - progress;
        if (self.options.useEasing) {
            if (self.countDown) {
                self.frameVal = self.startVal - self.options.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
            } else {
                self.frameVal = self.options.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
            }
        } else {
            if (self.countDown) {
                self.frameVal = self.startVal - (self.startVal - self.endVal) * (progress / self.duration);
            } else {
                self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
            }
        }
        if (self.countDown) {
            self.frameVal = self.frameVal < self.endVal ? self.endVal : self.frameVal;
        } else {
            self.frameVal = self.frameVal > self.endVal ? self.endVal : self.frameVal;
        }
        self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
        self.printValue(self.frameVal);
        if (progress < self.duration) {
            self.rAF = requestAnimationFrame(self.count);
        } else {
            if (self.callback) self.callback();
        }
    };
    self.start = function (callback) {
        if (!self.initialize()) return;
        self.callback = callback;
        self.rAF = requestAnimationFrame(self.count);
    };
    self.pauseResume = function () {
        if (!self.paused) {
            self.paused = !0;
            cancelAnimationFrame(self.rAF);
        } else {
            self.paused = !1;
            delete self.startTime;
            self.duration = self.remaining;
            self.startVal = self.frameVal;
            requestAnimationFrame(self.count);
        }
    };
    self.reset = function () {
        self.paused = !1;
        delete self.startTime;
        self.initialized = !1;
        if (self.initialize()) {
            cancelAnimationFrame(self.rAF);
            self.printValue(self.startVal);
        }
    };
    self.update = function (newEndVal) {
        if (!self.initialize()) return;
        newEndVal = Number(newEndVal);
        if (!ensureNumber(newEndVal)) {
            self.error = "[CountUp] update() - new endVal is not a number: " + newEndVal;
            return;
        }
        self.error = "";
        if (newEndVal === self.frameVal) return;
        cancelAnimationFrame(self.rAF);
        self.paused = !1;
        delete self.startTime;
        self.startVal = self.frameVal;
        self.endVal = newEndVal;
        self.countDown = self.startVal > self.endVal;
        self.rAF = requestAnimationFrame(self.count);
    };
    if (self.initialize()) self.printValue(self.startVal);
};
!(function (a, b, c, d) {
    function e(b, c) {
        (this.element = b), (this.options = a.extend({}, g, c)), (this._defaults = g), (this._name = f), this.init();
    }
    var f = "stellar",
        g = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function (a) {
                a.hide();
            },
            showElement: function (a) {
                a.show();
            },
        },
        h = {
            scroll: {
                getLeft: function (a) {
                    return a.scrollLeft();
                },
                setLeft: function (a, b) {
                    a.scrollLeft(b);
                },
                getTop: function (a) {
                    return a.scrollTop();
                },
                setTop: function (a, b) {
                    a.scrollTop(b);
                },
            },
            position: {
                getLeft: function (a) {
                    return -1 * parseInt(a.css("left"), 10);
                },
                getTop: function (a) {
                    return -1 * parseInt(a.css("top"), 10);
                },
            },
            margin: {
                getLeft: function (a) {
                    return -1 * parseInt(a.css("margin-left"), 10);
                },
                getTop: function (a) {
                    return -1 * parseInt(a.css("margin-top"), 10);
                },
            },
            transform: {
                getLeft: function (a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0;
                },
                getTop: function (a) {
                    var b = getComputedStyle(a[0])[k];
                    return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0;
                },
            },
        },
        i = {
            position: {
                setLeft: function (a, b) {
                    a.css("left", b);
                },
                setTop: function (a, b) {
                    a.css("top", b);
                },
            },
            transform: {
                setPosition: function (a, b, c, d, e) {
                    a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)";
                },
            },
        },
        j = (function () {
            var b,
                c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                d = a("script")[0].style,
                e = "";
            for (b in d)
                if (c.test(b)) {
                    e = b.match(c)[0];
                    break;
                }
            return (
                "WebkitOpacity" in d && (e = "Webkit"),
                "KhtmlOpacity" in d && (e = "Khtml"),
                function (a) {
                    return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a);
                }
            );
        })(),
        k = j("transform"),
        l = a("<div />", { style: "background:#fff" }).css("background-position-x") !== d,
        m = l
            ? function (a, b, c) {
                  a.css({ "background-position-x": b, "background-position-y": c });
              }
            : function (a, b, c) {
                  a.css("background-position", b + " " + c);
              },
        n = l
            ? function (a) {
                  return [a.css("background-position-x"), a.css("background-position-y")];
              }
            : function (a) {
                  return a.css("background-position").split(" ");
              },
        o =
            b.requestAnimationFrame ||
            b.webkitRequestAnimationFrame ||
            b.mozRequestAnimationFrame ||
            b.oRequestAnimationFrame ||
            b.msRequestAnimationFrame ||
            function (a) {
                setTimeout(a, 1e3 / 60);
            };
    (e.prototype = {
        init: function () {
            (this.options.name = f + "_" + Math.floor(1e9 * Math.random())),
                this._defineElements(),
                this._defineGetters(),
                this._defineSetters(),
                this._handleWindowLoadAndResize(),
                this._detectViewport(),
                this.refresh({ firstLoad: !0 }),
                "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop();
        },
        _defineElements: function () {
            this.element === c.body && (this.element = b),
                (this.$scrollElement = a(this.element)),
                (this.$element = this.element === b ? a("body") : this.$scrollElement),
                (this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent());
        },
        _defineGetters: function () {
            var a = this,
                b = h[a.options.scrollProperty];
            (this._getScrollLeft = function () {
                return b.getLeft(a.$scrollElement);
            }),
                (this._getScrollTop = function () {
                    return b.getTop(a.$scrollElement);
                });
        },
        _defineSetters: function () {
            var b = this,
                c = h[b.options.scrollProperty],
                d = i[b.options.positionProperty],
                e = c.setLeft,
                f = c.setTop;
            (this._setScrollLeft =
                "function" == typeof e
                    ? function (a) {
                          e(b.$scrollElement, a);
                      }
                    : a.noop),
                (this._setScrollTop =
                    "function" == typeof f
                        ? function (a) {
                              f(b.$scrollElement, a);
                          }
                        : a.noop),
                (this._setPosition =
                    d.setPosition ||
                    function (a, c, e, f, g) {
                        b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g);
                    });
        },
        _handleWindowLoadAndResize: function () {
            var c = this,
                d = a(b);
            c.options.responsive &&
                d.bind("load." + this.name, function () {
                    c.refresh();
                }),
                d.bind("resize." + this.name, function () {
                    c._detectViewport(), c.options.responsive && c.refresh();
                });
        },
        refresh: function (c) {
            var d = this,
                e = d._getScrollLeft(),
                f = d._getScrollTop();
            (c && c.firstLoad) || this._reset(),
                this._setScrollLeft(0),
                this._setScrollTop(0),
                this._setOffsets(),
                this._findParticles(),
                this._findBackgrounds(),
                c &&
                    c.firstLoad &&
                    /WebKit/.test(navigator.userAgent) &&
                    a(b).load(function () {
                        var a = d._getScrollLeft(),
                            b = d._getScrollTop();
                        d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b);
                    }),
                this._setScrollLeft(e),
                this._setScrollTop(f);
        },
        _detectViewport: function () {
            var a = this.$viewportElement.offset(),
                b = null !== a && a !== d;
            (this.viewportWidth = this.$viewportElement.width()), (this.viewportHeight = this.$viewportElement.height()), (this.viewportOffsetTop = b ? a.top : 0), (this.viewportOffsetLeft = b ? a.left : 0);
        },
        _findParticles: function () {
            {
                var b = this;
                this._getScrollLeft(), this._getScrollTop();
            }
            if (this.particles !== d) for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
            (this.particles = []),
                this.options.parallaxElements &&
                    this.$element.find("[data-stellar-ratio]").each(function () {
                        var c,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m = a(this),
                            n = 0,
                            o = 0,
                            p = 0,
                            q = 0;
                        if (m.data("stellar-elementIsActive")) {
                            if (m.data("stellar-elementIsActive") !== this) return;
                        } else m.data("stellar-elementIsActive", this);
                        b.options.showElement(m),
                            m.data("stellar-startingLeft")
                                ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop")))
                                : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))),
                            (f = m.position().left),
                            (g = m.position().top),
                            (h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10)),
                            (i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10)),
                            (k = m.offset().left - h),
                            (l = m.offset().top - i),
                            m.parents().each(function () {
                                var b = a(this);
                                return b.data("stellar-offset-parent") === !0 ? ((n = p), (o = q), (j = b), !1) : ((p += b.position().left), void (q += b.position().top));
                            }),
                            (c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset),
                            (e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset),
                            b.particles.push({
                                $element: m,
                                $offsetParent: j,
                                isFixed: "fixed" === m.css("position"),
                                horizontalOffset: c,
                                verticalOffset: e,
                                startingPositionLeft: f,
                                startingPositionTop: g,
                                startingOffsetLeft: k,
                                startingOffsetTop: l,
                                parentOffsetLeft: n,
                                parentOffsetTop: o,
                                stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                                width: m.outerWidth(!0),
                                height: m.outerHeight(!0),
                                isHidden: !1,
                            });
                    });
        },
        _findBackgrounds: function () {
            var b,
                c = this,
                e = this._getScrollLeft(),
                f = this._getScrollTop();
            (this.backgrounds = []),
                this.options.parallaxBackgrounds &&
                    ((b = this.$element.find("[data-stellar-background-ratio]")),
                    this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)),
                    b.each(function () {
                        var b,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            o = a(this),
                            p = n(o),
                            q = 0,
                            r = 0,
                            s = 0,
                            t = 0;
                        if (o.data("stellar-backgroundIsActive")) {
                            if (o.data("stellar-backgroundIsActive") !== this) return;
                        } else o.data("stellar-backgroundIsActive", this);
                        o.data("stellar-backgroundStartingLeft")
                            ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop"))
                            : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])),
                            (h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10)),
                            (i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10)),
                            (j = o.offset().left - h - e),
                            (k = o.offset().top - i - f),
                            o.parents().each(function () {
                                var b = a(this);
                                return b.data("stellar-offset-parent") === !0 ? ((q = s), (r = t), (l = b), !1) : ((s += b.position().left), void (t += b.position().top));
                            }),
                            (b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset),
                            (g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset),
                            c.backgrounds.push({
                                $element: o,
                                $offsetParent: l,
                                isFixed: "fixed" === o.css("background-attachment"),
                                horizontalOffset: b,
                                verticalOffset: g,
                                startingValueLeft: p[0],
                                startingValueTop: p[1],
                                startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
                                startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
                                startingPositionLeft: o.position().left,
                                startingPositionTop: o.position().top,
                                startingOffsetLeft: j,
                                startingOffsetTop: k,
                                parentOffsetLeft: q,
                                parentOffsetTop: r,
                                stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio"),
                            });
                    }));
        },
        _reset: function () {
            var a, b, c, d, e;
            for (e = this.particles.length - 1; e >= 0; e--)
                (a = this.particles[e]),
                    (b = a.$element.data("stellar-startingLeft")),
                    (c = a.$element.data("stellar-startingTop")),
                    this._setPosition(a.$element, b, b, c, c),
                    this.options.showElement(a.$element),
                    a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (e = this.backgrounds.length - 1; e >= 0; e--)
                (d = this.backgrounds[e]), d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop);
        },
        destroy: function () {
            this._reset(),
                this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name),
                (this._animationLoop = a.noop),
                a(b)
                    .unbind("load." + this.name)
                    .unbind("resize." + this.name);
        },
        _setOffsets: function () {
            var c = this,
                d = a(b);
            d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name),
                "function" == typeof this.options.horizontalOffset
                    ? ((this.horizontalOffset = this.options.horizontalOffset()),
                      d.bind("resize.horizontal-" + this.name, function () {
                          c.horizontalOffset = c.options.horizontalOffset();
                      }))
                    : (this.horizontalOffset = this.options.horizontalOffset),
                "function" == typeof this.options.verticalOffset
                    ? ((this.verticalOffset = this.options.verticalOffset()),
                      d.bind("resize.vertical-" + this.name, function () {
                          c.verticalOffset = c.options.verticalOffset();
                      }))
                    : (this.verticalOffset = this.options.verticalOffset);
        },
        _repositionElements: function () {
            var a,
                b,
                c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = this._getScrollLeft(),
                l = this._getScrollTop(),
                n = !0,
                o = !0;
            if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--)
                    (a = this.particles[j]),
                        (b = a.isFixed ? 1 : 0),
                        this.options.horizontalScrolling
                            ? ((f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft),
                              (h = f - a.startingPositionLeft + a.startingOffsetLeft))
                            : ((f = a.startingPositionLeft), (h = a.startingOffsetLeft)),
                        this.options.verticalScrolling
                            ? ((g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop),
                              (i = g - a.startingPositionTop + a.startingOffsetTop))
                            : ((g = a.startingPositionTop), (i = a.startingOffsetTop)),
                        this.options.hideDistantElements &&
                            ((o = !this.options.horizontalScrolling || (h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft)),
                            (n = !this.options.verticalScrolling || (i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop))),
                        o && n
                            ? (a.isHidden && (this.options.showElement(a.$element), (a.isHidden = !1)), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop))
                            : a.isHidden || (this.options.hideElement(a.$element), (a.isHidden = !0));
                for (j = this.backgrounds.length - 1; j >= 0; j--)
                    (c = this.backgrounds[j]),
                        (b = c.isFixed ? 0 : 1),
                        (d = this.options.horizontalScrolling
                            ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px"
                            : c.startingValueLeft),
                        (e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop),
                        m(c.$element, d, e);
            }
        },
        _handleScrollEvent: function () {
            var a = this,
                b = !1,
                c = function () {
                    a._repositionElements(), (b = !1);
                },
                d = function () {
                    b || (o(c), (b = !0));
                };
            this.$scrollElement.bind("scroll." + this.name, d), d();
        },
        _startAnimationLoop: function () {
            var a = this;
            (this._animationLoop = function () {
                o(a._animationLoop), a._repositionElements();
            }),
                this._animationLoop();
        },
    }),
        (a.fn[f] = function (b) {
            var c = arguments;
            return b === d || "object" == typeof b
                ? this.each(function () {
                      a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b));
                  })
                : "string" == typeof b && "_" !== b[0] && "init" !== b
                ? this.each(function () {
                      var d = a.data(this, "plugin_" + f);
                      d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null);
                  })
                : void 0;
        }),
        (a[f] = function () {
            var c = a(b);
            return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0));
        }),
        (a[f].scrollProperty = h),
        (a[f].positionProperty = i),
        (b.Stellar = e);
})(jQuery, this, document);
!(function (a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        (b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this), (b.enquire = a());
    }
})(function () {
    return (function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw ((j.code = "MODULE_NOT_FOUND"), j);
                }
                var k = (c[g] = { exports: {} });
                b[g][0].call(
                    k.exports,
                    function (a) {
                        var c = b[g][1][a];
                        return e(c ? c : a);
                    },
                    k,
                    k.exports,
                    a,
                    b,
                    c,
                    d
                );
            }
            return c[g].exports;
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e;
    })(
        {
            1: [
                function (a, b, c) {
                    function d(a, b) {
                        (this.query = a), (this.isUnconditional = b), (this.handlers = []), (this.mql = window.matchMedia(a));
                        var c = this;
                        (this.listener = function (a) {
                            (c.mql = a.currentTarget || a), c.assess();
                        }),
                            this.mql.addListener(this.listener);
                    }
                    var e = a(3),
                        f = a(4).each;
                    (d.prototype = {
                        constuctor: d,
                        addHandler: function (a) {
                            var b = new e(a);
                            this.handlers.push(b), this.matches() && b.on();
                        },
                        removeHandler: function (a) {
                            var b = this.handlers;
                            f(b, function (c, d) {
                                if (c.equals(a)) return c.destroy(), !b.splice(d, 1);
                            });
                        },
                        matches: function () {
                            return this.mql.matches || this.isUnconditional;
                        },
                        clear: function () {
                            f(this.handlers, function (a) {
                                a.destroy();
                            }),
                                this.mql.removeListener(this.listener),
                                (this.handlers.length = 0);
                        },
                        assess: function () {
                            var a = this.matches() ? "on" : "off";
                            f(this.handlers, function (b) {
                                b[a]();
                            });
                        },
                    }),
                        (b.exports = d);
                },
                { 3: 3, 4: 4 },
            ],
            2: [
                function (a, b, c) {
                    function d() {
                        if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                        (this.queries = {}), (this.browserIsIncapable = !window.matchMedia("only all").matches);
                    }
                    var e = a(1),
                        f = a(4),
                        g = f.each,
                        h = f.isFunction,
                        i = f.isArray;
                    (d.prototype = {
                        constructor: d,
                        register: function (a, b, c) {
                            var d = this.queries,
                                f = c && this.browserIsIncapable;
                            return (
                                d[a] || (d[a] = new e(a, f)),
                                h(b) && (b = { match: b }),
                                i(b) || (b = [b]),
                                g(b, function (b) {
                                    h(b) && (b = { match: b }), d[a].addHandler(b);
                                }),
                                this
                            );
                        },
                        unregister: function (a, b) {
                            var c = this.queries[a];
                            return c && (b ? c.removeHandler(b) : (c.clear(), delete this.queries[a])), this;
                        },
                    }),
                        (b.exports = d);
                },
                { 1: 1, 4: 4 },
            ],
            3: [
                function (a, b, c) {
                    function d(a) {
                        (this.options = a), !a.deferSetup && this.setup();
                    }
                    (d.prototype = {
                        constructor: d,
                        setup: function () {
                            this.options.setup && this.options.setup(), (this.initialised = !0);
                        },
                        on: function () {
                            !this.initialised && this.setup(), this.options.match && this.options.match();
                        },
                        off: function () {
                            this.options.unmatch && this.options.unmatch();
                        },
                        destroy: function () {
                            this.options.destroy ? this.options.destroy() : this.off();
                        },
                        equals: function (a) {
                            return this.options === a || this.options.match === a;
                        },
                    }),
                        (b.exports = d);
                },
                {},
            ],
            4: [
                function (a, b, c) {
                    function d(a, b) {
                        var c = 0,
                            d = a.length;
                        for (c; c < d && b(a[c], c) !== !1; c++);
                    }
                    function e(a) {
                        return "[object Array]" === Object.prototype.toString.apply(a);
                    }
                    function f(a) {
                        return "function" == typeof a;
                    }
                    b.exports = { isFunction: f, isArray: e, each: d };
                },
                {},
            ],
            5: [
                function (a, b, c) {
                    var d = a(2);
                    b.exports = new d();
                },
                { 2: 2 },
            ],
        },
        {},
        [5]
    )(5);
});
(function () {
    "use strict";
    var rgen = {},
        package_ver = "v4.5",
        $document = $(document),
        $window = $(window),
        $html = $("html"),
        isNovi = window.xMode,
        pageLoader = $(".page-loader"),
        userAgent = navigator.userAgent.toLowerCase(),
        isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : !1,
        isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    window.rgen = rgen;
    rgen.config = { twitter: { consumer_key: "YOUR_CONSUMER_KEY", consumer_secret: "YOUR_CONSUMER_SECRET_KEY" }, success_url: "thankyou.html" };
    if (pageLoader > 0 && !isNovi) {
        $window.on("load", function () {
            pageLoader.fadeOut("slow");
            $window.trigger("resize");
        });
    } else {
        pageLoader.remove();
    }
    rgen.dmod = !1;
    rgen.demo = function () {
        if (rgen.dmod) {
            return rgenNotice();
        } else {
            return !0;
        }
    };
    $(function () {
        var $o = {};
        $o.r = !rgen.demo ? !1 : rgen.demo();
        $o.tooltip = $o.r ? $('[data-toggle="tooltip"]') : !1;
        $o.pageLoader = $(".page-loader").length > 0 && $o.r ? $(".page-loader") : !1;
        $o.header = $(".main-head").length > 0 && $o.r ? $(".main-head") : !1;
        $o.menuwrp = $(".menu-wrp").length > 0 && $o.r ? $(".menu-wrp") : !1;
        $o.navlink = $(".menu-wrp").find(".menu-item").length > 0 && $o.r ? $(".menu-wrp").find(".menu-item") : !1;
        $o.fullwh = $("[data-fullwh='y']").length > 0 && $o.r ? $("[data-fullwh='y']") : !1;
        $o.fullh = $("[data-fullh='y']").length > 0 && $o.r ? $("[data-fullh='y']") : !1;
        $o.bgimg = $("[data-bg]").length > 0 && $o.r ? $("[data-bg]") : !1;
        $o.slidebg = $("[data-slide-bg]").length > 0 && $o.r ? $("[data-slide-bg]") : !1;
        $o.section = $("#page > section").length > 0 && $o.r ? $("#page > section") : !1;
        $o.hoverclass = $("[data-hover-class]").length > 0 && $o.r ? $("[data-hover-class]") : !1;
        $o.bgcolor = $("[data-bgcolor]").length > 0 && $o.r ? $("[data-bgcolor]") : !1;
        $o.txtcolor = $("[data-txtcolor]").length > 0 && $o.r ? $("[data-txtcolor]") : !1;
        $o.gradient = $("[data-gradient]").length > 0 && $o.r ? $("[data-gradient]") : !1;
        $o.videopop = $(".video-popup").length > 0 && $o.r ? $(".video-popup") : !1;
        $o.setpop = $(".set-popup").length > 0 && $o.r ? $(".set-popup") : !1;
        $o.countbox = $(".count-box").length > 0 && $o.r ? $(".count-box") : !1;
        $o.tabwidget = $(".tab-widget").length > 0 && $o.r ? $(".tab-widget") : !1;
        $o.tabsauto = $(".tabs-auto").length > 0 && $o.r ? $(".tabs-auto") : !1;
        $o.carouselwidget = $(".carousel-widget").length > 0 && $o.r ? $(".carousel-widget") : !1;
        $o.accordionwidget = $(".accordion-widget").length > 0 && $o.r ? $(".accordion-widget") : !1;
        $o.swiperwidget = $(".swiper-widget").length > 0 && $o.r ? $(".swiper-widget") : !1;
        $o.swipergallery = $(".swiper-gallery").length > 0 && $o.r ? $(".swiper-gallery") : !1;
        $o.videobg = $(".videobg").length > 0 && $o.r ? $(".videobg") : !1;
        $o.videwidget = $(".vide-widget").length > 0 && $o.r ? $(".vide-widget") : !1;
        $o.othersection1 = $(".other-section-1").length > 0 && $o.r ? $(".other-section-1") : !1;
        $o.popgallerywidget = $(".popgallery-widget").length > 0 && $o.r ? $(".popgallery-widget") : !1;
        $o.bgslider = $("[data-bgslider]").length > 0 && $o.r ? $("[data-bgslider]") : !1;
        $o.countdownwidget = $(".countdown-widget").length > 0 && $o.r ? $(".countdown-widget") : !1;
        $o.filterwidget = $(".filter-widget").length > 0 && $o.r ? $(".filter-widget") : !1;
        $o.gmapwidget = $(".gmap-widget").length > 0 && $o.r ? $(".gmap-widget") : !1;
        $o.socialsection = $(".social-section").length > 0 && $o.r ? $(".social-section") : !1;
        $o.instagramwidget = $(".instagram-widget").length > 0 && $o.r ? $(".instagram-widget") : !1;
        $o.twitterwidget = $(".twitter-widget").length > 0 && $o.r ? $(".twitter-widget") : !1;
        $o.formwidget = $(".form-widget").length > 0 && $o.r ? $(".form-widget") : !1;
        $o.stellar = $("[data-stellar]").length > 0 && $o.r ? $("[data-stellar]") : !1;
        $o.parallax = $("[data-parallax-img]").length > 0 && $o.r ? $("[data-parallax-img]") : !1;
        $o.elanimate = $("[data-animate-in]").length > 0 && $o.r ? $("[data-animate-in]") : !1;
        $o.bLazy = $(".b-lazy").length > 0 && $o.r ? $(".b-lazy") : !1;
        $o.masonry = $("[data-masonry-grid]").length > 0 && $o.r ? $("[data-masonry-grid]") : !1;
        $o.styleid = $("[data-style-id]").length > 0 && $o.r ? $("[data-style-id]") : !1;
        $o.searchpop = $("#popup-search").length > 0 && $o.r ? $("#popup-search") : !1;
        rgen.bgimg = function (obj) {
            $(obj).css({ backgroundImage: "url(" + $(obj).attr("data-bg") + ")" });
        };
        if ($o.r) {
            $("html").before("<!-- " + package_ver + " -->");
            $(".copyright-year").text(new Date().getFullYear());
            if (isNovi) {
                $("head").append('<link href="css/builder.css" rel="stylesheet">');
            }
            enquire
                .register("screen and (min-width: 992px)", {
                    match: function () {
                        rgen.device = "d";
                    },
                    unmatch: function () {},
                })
                .register("(min-width: 200px) and (max-width: 991px)", {
                    match: function () {
                        rgen.device = "m";
                    },
                    unmatch: function () {},
                });
            rgen.elcheck = function (el) {
                "use strict";
                if ($(el).length > 0) {
                    return !0;
                } else {
                    return !1;
                }
            };
            rgen.uid = function () {
                "use strict";
                var uid = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (var i = 0; i < 3; i++) uid += possible.charAt(Math.floor(Math.random() * possible.length));
                return "rg" + uid;
            };
            rgen.setId = function (obj, prefix, n) {
                "use strict";
                n++;
                var a = prefix + n;
                $(obj).css({ opacity: 0 });
                $(obj).attr("id", a);
                $(obj).addClass(a);
                if ($(obj).is(".accordion-widget")) {
                    $(obj)
                        .find(".acc-block")
                        .each(function (index, el) {
                            var id = a + "-acc-block-" + index;
                            $(this)
                                .find(".acc-hd")
                                .attr("data-accid", "#" + id);
                            $(this).find(".acc-content").attr("id", id);
                            $(this)
                                .find(".acc-hd")
                                .append('<i class="acc-open ' + $(obj).attr("data-acc-openclass") + ' "></i><i class="acc-close ' + $(obj).attr("data-acc-closeclass") + '"></i>');
                        });
                }
            };
            rgen.getMultiScripts = function (arr, path) {
                "use strict";
                var _arr = $.map(arr, function (scr) {
                    return $.getScript((path || "") + scr);
                });
                _arr.push(
                    $.Deferred(function (deferred) {
                        $(deferred.resolve);
                    })
                );
                return $.when.apply($, _arr);
            };
            rgen.getvar = function (v, default_v, val_type) {
                "use strict";
                if (val_type == "n") {
                    return v ? parseInt(v, 10) : default_v;
                }
                if (val_type == "b") {
                    if (v == "true") {
                        return !0;
                    } else if (v == "false") {
                        return !1;
                    } else {
                        return default_v;
                    }
                }
                if (val_type == "s") {
                    if (v == "false") {
                        return !1;
                    } else {
                        return v ? v : default_v;
                    }
                }
            };
            rgen.fullwh = function (obj) {
                "use strict";
                var winWidth = $(window).width();
                var winHeight = $(window).height();
                $(obj).css({ width: winWidth, height: winHeight });
            };
            rgen.fullh = function (obj, wrp) {
                "use strict";
                if (wrp) {
                    var winHeight = $(obj).closest(wrp).height();
                } else {
                    var winHeight = $(window).height();
                }
                $(obj).css({ height: winHeight });
            };
            rgen.mobmenu = function (el) {
                "use strict";
                $(el).on("click", function (e) {
                    var nav = $(this).attr("data-nav");
                    var c = $(this).attr("data-navclose");
                    var o = $(this).attr("data-navopen");
                    if ($(nav).hasClass("open")) {
                        $(nav).removeClass("open");
                        $(this).find("i").removeClass(c).addClass(o);
                    } else {
                        $(nav).addClass("open m-nav");
                        $(this).find("i").removeClass(o).addClass(c);
                    }
                });
                $(".menu").on("click", ".sub-handler", function (event) {
                    var parent_el = $(this).closest(".has-dropdown");
                    if ($(parent_el).hasClass("active")) {
                        $(parent_el).removeClass("active");
                        $(this).addClass("fa-plus").removeClass("fa-minus");
                    } else {
                        $(parent_el).addClass("active");
                        $(this).addClass("fa-minus").removeClass("fa-plus");
                    }
                });
            };
            rgen.menuH = function (header, menu) {
                "use strict";
                $(menu).removeAttr("style");
                $(menu).css({ minHeight: $(header).height() });
            };
            rgen.menuFn = function ($menu) {
                "use strict";
                var mEnter = isNovi ? "click" : "mouseenter",
                    mLeave = isNovi ? "dblclick" : "mouseleave";
                $menu.on(mEnter, ".has-dropdown", function (event) {
                    $(this).addClass("active");
                    $(this).children(".sub-handler").addClass("fa-minus").removeClass("fa-plus");
                });
                $menu.on(mLeave, ".has-dropdown", function (event) {
                    $(this).removeClass("active");
                    $(this).children(".sub-handler").addClass("fa-plus").removeClass("fa-minus");
                    $(this).children(".sub").removeAttr("style");
                });
                $menu.on(mEnter, ".menu-item", function (event) {
                    event.preventDefault();
                    if ($(this).children(".sub").length != 0) {
                        $(this).children(".sub").removeAttr("style");
                        var submenu = $(this).children(".sub"),
                            dropdown = $(submenu).offset(),
                            l_offset_from_container = dropdown.left - ($(window).width() - $(".main-head > .container").width()) / 2,
                            overflow_menu_w = l_offset_from_container + $(submenu).outerWidth() - $(".main-head > .container").width();
                        if (overflow_menu_w > 0) {
                            $(submenu).css({ marginLeft: "-" + overflow_menu_w + "px" });
                        }
                    }
                });
            };
            rgen.headerFn = function ($header) {
                if ($header.attr("data-sticky") == "y") {
                    $("html").addClass("data-sticky");
                    $header.addClass("fixed-top").removeClass("show-above");
                    if ($(window).scrollTop() > $header.height()) {
                        $header.addClass("header-sticky");
                        $header.attr("data-glass") === "y" ? $header.removeClass("bg-glass") : null;
                        rgen.menuH($header, $header.find(".menu"));
                    } else {
                        $header.removeClass("header-sticky");
                        $header.attr("data-glass") === "y" ? $header.addClass("bg-glass") : null;
                        rgen.menuH($header, $header.find(".menu"));
                    }
                }
                if ($header.attr("data-sticky-scroll") == "y") {
                    if ($(window).scrollTop() > $header.height()) {
                        $header.addClass("fixed-top").addClass("header-sticky");
                        rgen.menuH($header, $header.find(".menu"));
                    } else {
                        $header.removeClass("fixed-top").removeClass("header-sticky");
                        rgen.menuH($header, $header.find(".menu"));
                    }
                }
                if ($header.attr("data-hide") == "y" && rgen.device == "d") {
                    $header.addClass("header-hide");
                    if ($(window).scrollTop() > $header.height()) {
                        $header.addClass("header-show");
                        rgen.menuH($header, $header.find(".menu"));
                    } else {
                        $header.removeClass("header-show");
                        rgen.menuH($header, $header.find(".menu"));
                    }
                }
            };
            rgen.linkscroll = function (obj) {
                "use strict";
                $(document).on("click", obj, function (e) {
                    e.preventDefault();
                    if ($(this).closest(".nav-links").hasClass("nav-links") == !1 && $(this).attr("href").indexOf("popup") === -1) {
                        var id = $(this).attr("href");
                        var $id = $(id);
                        if ($id.length === 0) {
                            return;
                        }
                        var pos = $(id).offset().top;
                        $("body, html").animate({ scrollTop: pos }, 1200);
                    }
                });
            };
            if (!isNovi) {
                if ($o.navlink) {
                    $o.navlink.find("a").smoothScroll({
                        speed: 1200,
                        beforeScroll: function () {
                            $o.navlink.find("a").removeClass("active");
                            $(".nav-handle").trigger("tap");
                        },
                        afterScroll: function () {
                            $(this).addClass("active");
                        },
                    });
                }
            }
            if (!isNovi) {
                if (rgen.elcheck("#page[data-linkscroll='y']")) {
                    rgen.linkscroll('a[href^="#"]:not(.nav-links)');
                }
            }
            if ($o.menuwrp) {
                var $menu = $(".menu");
                $(".menu .has-dropdown").each(function () {
                    $(this).prepend('<b class="sub-handler fa fa-plus">');
                    if ($(this).hasClass("menu-item")) {
                        $(this).children("ul").addClass("sub");
                        $(this).children(".mega-menu").addClass("sub");
                    }
                });
            }
            if (!isNovi) {
                if ($o.header) {
                    $o.header.attr("data-glass") === "y" ? $o.header.addClass("bg-glass") : null;
                    $o.header.attr("data-above") === "y" ? $o.header.addClass("show-above") : null;
                    rgen.menuH($o.header, $o.header.find(".menu"));
                    if ($o.header.attr("data-sticky") == "y" || $o.header.attr("data-sticky-scroll") == "y" || ($o.header.attr("data-hide") == "y" && rgen.device == "d")) {
                        $(window).scroll(function () {
                            rgen.headerFn($o.header);
                        });
                        rgen.headerFn($o.header);
                    }
                }
            }
            rgen.owlitems = function (arr) {
                "use strict";
                if (typeof arr == "string" && arr != "false") {
                    var t1 = arr.split("|");
                    var t2 = {};
                    $.each(t1, function (index, val) {
                        var str = val;
                        var newarr = str.split(",");
                        t2[newarr[0]] = {};
                        t2[newarr[0]] = { items: parseInt(newarr[1], 10) };
                    });
                    return t2;
                } else if (arr === "false") {
                    return {};
                } else {
                    return !1;
                }
            };
            var owl = $(".owl-carousel");
            if (owl.length) {
                var i;
                for (i = 0; i < owl.length; i++) {
                    var c = $(owl[i]),
                        responsive = {};
                    owl[i].owl = c;
                    var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-xl-"],
                        values = [0, 480, 768, 992, 1200, 1800],
                        j,
                        k;
                    for (j = 0; j < values.length; j++) {
                        responsive[values[j]] = {};
                        for (k = j; k >= -1; k--) {
                            if (!responsive[values[j]].items && c.attr("data" + aliaces[k] + "items")) {
                                responsive[values[j]].items = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
                            }
                            if (!responsive[values[j]].stagePadding && responsive[values[j]].stagePadding !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
                                responsive[values[j]].stagePadding = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
                            }
                            if (!responsive[values[j]].margin && responsive[values[j]].margin !== 0 && c.attr("data" + aliaces[k] + "margin")) {
                                responsive[values[j]].margin = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
                            }
                        }
                    }
                    if (typeof c.attr("data-numbering") !== "undefined") {
                        var numberingObject = $(c.attr("data-numbering"));
                        c.on(
                            "initialized.owl.carousel changed.owl.carousel",
                            (function (numberingObject) {
                                return function (e) {
                                    if (!e.namespace) return;
                                    numberingObject.find(".numbering-current").text(((e.item.index + 1) % e.item.count) + 1);
                                    numberingObject.find(".numbering-count").text(e.item.count);
                                };
                            })(numberingObject)
                        );
                    }
                    c.on("initialized.owl.carousel", function () {});
                    c.owlCarousel({
                        autoplay: isNovi ? !1 : c.attr("data-autoplay") === "true",
                        loop: isNovi ? !1 : c.attr("data-loop") !== "false",
                        items: 1,
                        dotsContainer: c.attr("data-pagination-class") || !1,
                        navContainer: c.attr("data-navigation-class") || !1,
                        mouseDrag: isNovi ? !1 : c.attr("data-mouse-drag") !== "false",
                        autoplayTimeout: !isNovi && c.attr("data-interval") ? parseInt(c.attr("data-interval")) : 3000,
                        nav: c.attr("data-nav") === "true",
                        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                        dots: isNovi && c.attr("data-nav") !== "true" ? !0 : c.attr("data-dots") === "true",
                        dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : !1,
                        animateIn: c.attr("data-animation-in") ? c.attr("data-animation-in") : !1,
                        animateOut: c.attr("data-animation-out") ? c.attr("data-animation-out") : !1,
                        responsive: responsive,
                        center: c.attr("data-center") === "true",
                        autoHeight: c.attr("data-center") ? c.attr("data-center") : !0,
                    });
                }
            }
            rgen.swiper_slider = function (obj) {
                "use strict";
                rgen.slidebg();
                if (config.fullsize) {
                    rgen.fullwh(obj);
                    $(window).resize(function () {
                        rgen.fullwh(obj);
                    });
                }
                var swiper = new Swiper(obj, {
                    pagination: { el: obj + " .swiper-pagination", type: "bullets", clickable: !0 },
                    navigation: { nextEl: obj + " .swiper-button-next", prevEl: obj + " .swiper-button-prev" },
                    on: {
                        init: function () {
                            $(obj).animate({ opacity: 1 }, 300);
                        },
                    },
                    autoplay: $(obj).attr("data-autoplay") ? ($(obj).attr("data-autoplay") === "false" ? undefined : $(obj).attr("data-autoplay-delay")) : 5000,
                    direction: $(obj).attr("data-direction") ? $(obj).attr("data-direction") : "horizontal",
                    effect: $(obj).attr("data-slide-effect") ? $(obj).attr("data-slide-effect") : "slide",
                    speed: $(obj).attr("data-slide-speed") ? $(obj).attr("data-slide-speed") : 600,
                    keyboardControl: $(obj).attr("data-keyboard") === "true",
                    mousewheelControl: $(obj).attr("data-mousewheel") === "true",
                    mousewheelReleaseOnEdges: $(obj).attr("data-mousewheel-release") === "true",
                    nextButton: next.length ? next.get(0) : null,
                    prevButton: prev.length ? prev.get(0) : null,
                    paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : !1,
                    paginationBulletRender: pag.length
                        ? pag.attr("data-index-bullet") === "true"
                            ? function (index, className) {
                                  return '<span class="' + className + '">' + (index + 1) + "</span>";
                              }
                            : null
                        : null,
                    scrollbar: bar.length ? bar.get(0) : null,
                    scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : !0,
                    scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : !1,
                    loop: isNovi ? !1 : $(obj).attr("data-loop") !== "false",
                    simulateTouch: $(obj).attr("data-simulate-touch") && !isNovi ? $(obj).attr("data-simulate-touch") === "true" : !1,
                });
            };
            rgen.swiper_gallery_th = function (obj, swi) {
                var swi_slides = [];
                $(obj)
                    .find(".swiper-slide")
                    .each(function (index, el) {
                        var _gl_img = $(this).attr("data-slide-bg"),
                            swi_slide = "<!-- Thumb image -->";
                        swi_slide += '<div class="swiper-slide min-px-w100" style="background-image: url(' + _gl_img + ');" data-slide-bg="' + _gl_img + '"></div>';
                        swi_slides.push(swi_slide);
                    });
                swi.removeAllSlides();
                swi.appendSlide(swi_slides);
                swi.update();
            };
            rgen.swiper_gallery = function (obj) {
                "use strict";
                var config = { autoplay: rgen.getvar($(obj).attr("data-autoplay"), !1, "b") };
                var galleryTop = new Swiper(obj, {
                    spaceBetween: 10,
                    effect: "slide",
                    navigation: { nextEl: obj + " .swiper-button-next", prevEl: obj + " .swiper-button-prev" },
                    on: {
                        init: function () {
                            $(obj).animate({ opacity: 1 }, 300);
                        },
                    },
                    simulateTouch: !isNovi ? !0 : !1,
                });
                var galleryThumbs = new Swiper(obj + "_th", { spaceBetween: 10, centeredSlides: !0, slidesPerView: "auto", touchRatio: 0.2, slideToClickedSlide: !0, autoplay: config.autoplay, simulateTouch: !isNovi ? !0 : !1 });
                galleryTop.controller.control = galleryThumbs;
                rgen.swiper_gallery_th(obj, galleryThumbs);
                galleryTop.on("update", function () {
                    rgen.swiper_gallery_th(obj, galleryThumbs);
                });
                galleryThumbs.controller.control = galleryTop;
                rgen.slidebg();
            };
            rgen.slidebg = function () {
                if ($o.slidebg) {
                    for (var i = 0; i < $o.slidebg.length; i++) {
                        $($o.slidebg[i]).css({ backgroundImage: "url(" + $($o.slidebg[i]).attr("data-slide-bg") + ")" });
                    }
                }
            };
            if ($o.swiperwidget) {
                for (var i = 0; i < $o.swiperwidget.length; i++) {
                    var swiObj = "swiper" + i;
                    $($o.swiperwidget[i]).find(".swiper-container").attr("id", swiObj).addClass(swiObj);
                    rgen.swiper_slider("#" + swiObj);
                }
            }
            if ($o.swipergallery) {
                for (var i = 0; i < $o.swipergallery.length; i++) {
                    var swiGal = "swiperGallery" + i,
                        swiGal_th = "swiperGallery" + i + "_th";
                    $($o.swipergallery[i]).find(".gallery-top").attr("id", swiGal).addClass(swiGal);
                    $($o.swipergallery[i]).find(".gallery-thumbs").attr("id", swiGal_th).addClass(swiGal);
                    rgen.swiper_gallery("#" + swiGal);
                }
            }
            rgen.tabs = function (obj) {
                "use strict";
                if ($(obj.tb).hasClass("tabs-auto")) {
                    var t = 0,
                        tb_activeClass = $(obj.tb).attr("data-tb-active") ? "active " + $(obj.tb).attr("data-tb-active") : "active",
                        pn_activeClass = $(obj.tb).attr("data-pn-active") ? "active " + $(obj.tb).attr("data-pn-active") : "active",
                        tb_normalClass = $(obj.tb).attr("data-tb-normal") ? $(obj.tb).attr("data-tb-normal") : "",
                        pn_normalClass = $(obj.tb).attr("data-pn-normal") ? $(obj.tb).attr("data-pn-normal") : "";
                    $(obj.tb)
                        .find(".tb-list > .tb")
                        .each(function () {
                            var tb = obj.count + "-tb-" + t;
                            $(this).attr("data-tb", "#" + tb);
                            $(this).addClass(tb_normalClass);
                            $(obj.tb)
                                .find(".tb-content > .tb-pn:eq(" + t + ")")
                                .attr("id", tb);
                            t++;
                        });
                    $(obj.tb).on("click", ".tb-list > .tb", function (e) {
                        e.preventDefault();
                        $(this).closest(".tb-list").find(".tb").removeClass(tb_activeClass).addClass(tb_normalClass);
                        $(this).removeClass(tb_normalClass).addClass(tb_activeClass);
                        var target = $($(this).attr("data-tb"));
                        target.siblings(".tb-pn").removeClass(pn_activeClass);
                        target.addClass(pn_activeClass);
                    });
                    if ($(obj.tb).find(".tb-list > .tb").hasClass(tb_activeClass)) {
                        $(obj.tb).find(".tb-list > .tb.active").click();
                    } else {
                        $(obj.tb).find(".tb-list > .tb:first").click();
                    }
                } else {
                    $("[data-tb]").each(function (index, el) {
                        var target = $(this).attr("data-tb");
                        $(target).addClass("tab-pn");
                    });
                    $(obj)
                        .on("click", function (e) {
                            e.preventDefault();
                            var tb_activeClass = $(obj).attr("data-tb-active") ? "active " + $(obj).attr("data-tb-active") : "active",
                                pn_activeClass = $(obj).attr("data-pn-active") ? "active " + $(obj).attr("data-pn-active") : "active",
                                tb_normalClass = $(obj).attr("data-tb-normal") ? $(obj).attr("data-tb-normal") : "",
                                pn_normalClass = $(obj).attr("data-pn-normal") ? $(obj).attr("data-pn-normal") : "";
                            $(obj).closest(".tab-widget").find("[data-tb]").addClass(tb_normalClass).removeClass(tb_activeClass);
                            $(this).removeClass(tb_normalClass).addClass(tb_activeClass);
                            var target = $($(this).attr("data-tb"));
                            target.siblings(".tab-pn").addClass(tb_normalClass).removeClass(pn_activeClass).hide();
                            target.show().removeClass(tb_normalClass).addClass(pn_activeClass);
                        })
                        .eq(0)
                        .click();
                }
            };
            if ($o.tabwidget) {
                for (var i = 0; i < $o.tabwidget.length; i++) {
                    rgen.tabs($($o.tabwidget[i]).find("[data-tb]"));
                }
            }
            if ($o.tabsauto) {
                for (var i = 0; i < $o.tabsauto.length; i++) {
                    var tabObj = { count: i, tb: $o.tabsauto[i] };
                    rgen.tabs(tabObj);
                }
            }
            rgen.accordion = function (obj) {
                "use strict";
                function close_acc(parent_obj) {
                    $(parent_obj).find(".acc-hd").removeClass("active");
                    $(parent_obj).find(".acc-content").stop().slideUp(200).removeClass("open");
                }
                $(obj).animate({ opacity: 1 }, 500, function () {});
                $(obj).on("click", ".acc-hd", function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var content = $(this).attr("data-accid");
                    if ($(this).is(".active")) {
                        close_acc(obj);
                    } else {
                        close_acc(obj);
                        $(this).addClass("active");
                        $(obj).find(content).stop().slideDown(200).addClass("open");
                    }
                });
                if ($(obj).attr("data-acc-firstopen") == "y") {
                    $(obj).find(".acc-block:first .acc-hd").click();
                } else {
                    close_acc(obj);
                }
            };
            if ($o.accordionwidget) {
                for (var i = 0; i < $o.accordionwidget.length; i++) {
                    rgen.setId($o.accordionwidget[i], "accwidget", i);
                    rgen.accordion($o.accordionwidget[i]);
                }
            }
            if (!isNovi) {
                var captcha = $(".g-recaptcha").length;
                if (captcha > 0) {
                    $.getScript("//www.google.com/recaptcha/api.js", function () {});
                }
                rgen.global_validation = {
                    form: "",
                    rules: {
                        email: { required: !0, email: !0 },
                        name: { required: !0 },
                        message: { required: !0 },
                        phone: { required: !0, number: !0 },
                        date: { required: !0, date: !0 },
                        datetime: { required: !0, date: !0 },
                        people: { required: !0, number: !0 },
                    },
                    msgpos: "normal",
                    msg: { email: { email: "Please, enter a valid email" } },
                    subscribe_successMsg: "You are in list. We will inform you as soon as we finish.",
                    form_successMsg: "Thank you for contact us. We will contact you as soon as possible.",
                    successMsg: "",
                    errorMsg: "Oops! Looks like something went wrong. Please try again later.",
                };
                rgen.formVaidate = function (obj) {
                    "use strict";
                    var msgpos = $(obj.form).attr("data-msgpos") ? $(obj.form).attr("data-msgpos") : "normal";
                    if (msgpos == "append") {
                        $(obj.form).validate({
                            onfocusout: !1,
                            onkeyup: !1,
                            rules: obj.rules,
                            messages: obj.msg,
                            highlight: !1,
                            errorPlacement: function (error, element) {
                                if (msgpos == "append") {
                                    error.appendTo(element.closest("form").find(".msg-wrp"));
                                }
                            },
                            success: function (element) {
                                element.remove();
                            },
                        });
                    } else {
                        $(obj.form).validate({
                            onfocusout: !1,
                            onkeyup: !1,
                            rules: obj.rules,
                            messages: obj.msg,
                            highlight: !1,
                            success: function (element) {
                                element.remove();
                            },
                        });
                    }
                };
                rgen.resetForm = function (form) {
                    "use strict";
                    $(form).find('input[type="text"], input[type="email"], textarea').val(null);
                };
                rgen.contactForm = function ($form, formData, validate_data) {
                    "use strict";
                    if ($form.find("label.error").length > 0) {
                        $form.find("label.error").hide();
                    }
                    var $btn = $form.find(".btn").button("loading");
                    var timer = 4000;
                    if ($form.valid()) {
                        $.ajax({
                            url: $form.attr("action"),
                            type: "POST",
                            data: formData,
                            success: function (data) {
                                if (data.status == "captcha_error") {
                                    swal("Error!", data.type, "error");
                                    $btn.button("reset");
                                } else if (data.status == "error") {
                                    swal("Error!", data.type, "error");
                                    $btn.button("reset");
                                    rgen.resetForm($form);
                                } else {
                                    swal({ type: "success", title: "Success!", text: validate_data.successMsg, timer: timer }).then(function (argument) {
                                        if ($form.attr("data-success-redirect") === "y") {
                                            window.location = rgen.config.success_url;
                                        }
                                    });
                                    $btn.button("reset");
                                    $.magnificPopup.close();
                                    rgen.resetForm($form);
                                    if (captcha > 0) {
                                        grecaptcha.reset();
                                    }
                                }
                            },
                            error: function () {
                                swal("Error!", validate_data.errorMsg, "error");
                                $btn.button("reset");
                                $.magnificPopup.close();
                                setTimeout(function () {
                                    swal.close();
                                }, timer);
                            },
                        });
                    } else {
                        $form
                            .find("label.error")
                            .delay(timer)
                            .fadeOut("400", function () {
                                $(this).remove();
                            });
                        $btn.button("reset");
                    }
                };
                rgen.formWidget = function (obj) {
                    "use strict";
                    var config = { popup_selector: $(obj).attr("data-popup") ? "." + $(obj).attr("data-popup") : !1, form_type: $(obj).attr("data-formtype") ? $(obj).attr("data-formtype") : "normal", form_selector: obj };
                    var $form = $(config.form_selector);
                    rgen.global_validation.form = config.form_selector;
                    var validate_data = rgen.global_validation;
                    if (config.popup_selector) {
                        $(config.popup_selector).each(function (index, el) {
                            $(this).magnificPopup({ type: "inline", preloader: !1 });
                        });
                    }
                    if ($form.find(".date-pick").length > 0 || $form.find(".datetime-pick").length > 0) {
                        var date_script_arr = ["lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"];
                        rgen.getMultiScripts(date_script_arr, "").done(function () {
                            if ($form.find(".date-pick").length > 0) {
                                $form.find(".date-pick").each(function (index, el) {
                                    $(this).datetimepicker({ autoclose: !0, startView: 2, minView: 2 });
                                });
                            }
                            if ($form.find(".datetime-pick").length > 0) {
                                $form.find(".datetime-pick").each(function (index, el) {
                                    $(this).datetimepicker({ autoclose: !0 });
                                });
                            }
                        });
                    }
                    rgen.formVaidate(validate_data);
                    $form
                        .find("button")
                        .off("click")
                        .on("click", function (e) {
                            e.preventDefault();
                            if (config.form_type == "newsletter") {
                                rgen.global_validation.successMsg = rgen.global_validation.subscribe_successMsg;
                            } else {
                                rgen.global_validation.successMsg = rgen.global_validation.form_successMsg;
                            }
                            rgen.contactForm($form, $form.serializeObject(), validate_data);
                            return !1;
                        });
                };
                $.fn.serializeObject = function () {
                    "use strict";
                    var o = {};
                    var a = this.serializeArray();
                    $.each(a, function () {
                        var field_label = $("[name=" + this.name + "]").attr("data-label") ? $("[name=" + this.name + "]").attr("data-label") : this.name;
                        if (o[this.name]) {
                            if (!o[this.name].push) {
                                o[this.name] = [o[this.name]];
                            }
                            o[this.name].push({ val: this.value, label: field_label } || "");
                        } else {
                            o[this.name] = { val: this.value, label: field_label } || "";
                        }
                    });
                    return o;
                };
                if ($o.formwidget) {
                    for (var i = 0; i < $o.formwidget.length; i++) {
                        $o.formwidget[i];
                        rgen.formWidget($o.formwidget[i]);
                        if ($("html").hasClass("builder")) {
                            $($o.formwidget[i]).find("button").attr("disabled", !0);
                        } else {
                            $($o.formwidget[i]).find("button").attr("disabled", !1);
                        }
                    }
                }
            }
            rgen.videoBg = function (obj, imglist) {
                "use strict";
                var isMobile = {
                    Android: function () {
                        return navigator.userAgent.match(/Android/i);
                    },
                    BlackBerry: function () {
                        return navigator.userAgent.match(/BlackBerry/i);
                    },
                    iOS: function () {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                    },
                    Opera: function () {
                        return navigator.userAgent.match(/Opera Mini/i);
                    },
                    Windows: function () {
                        return navigator.userAgent.match(/IEMobile/i);
                    },
                    any: function () {
                        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
                    },
                };
                if (isMobile.any()) {
                    $(obj).css("display", "none");
                } else {
                    $(obj).css("display", "block");
                    if ($(obj).attr("data-videoid")) {
                        $(obj).YTPlayer({ videoId: $(obj).attr("data-videoid"), start: $(obj).attr("data-start") ? parseInt($(obj).attr("data-start")) : 0, onReady: function (player) {} });
                    }
                }
            };
            rgen.vide = function (obj) {
                "use strict";
                var videofile = $(obj).attr("data-vide-src");
                $(obj).animate({ opacity: 1 }, 500, function () {});
                $(obj).vide(
                    { mp4: videofile, webm: videofile, ogv: videofile, poster: videofile + ".jpg" },
                    { volume: 1, playbackRate: 1, muted: !0, loop: !0, autoplay: !0, position: "center center", posterType: "jpg", resizing: !0, bgColor: "transparent", className: "" }
                );
            };
            if ($o.videobg) {
                for (var i = 0; i < $o.videobg.length; i++) {
                    if ($($o.videobg[i]).attr("data-videoid")) {
                        rgen.videoBg($o.videobg[i]);
                    }
                }
            }
            if ($o.videwidget) {
                for (var i = 0; i < $o.videwidget.length; i++) {
                    rgen.setId($o.videwidget[i], "videwidget", i);
                    rgen.vide($o.videwidget[i]);
                }
            }
            rgen.videoPopup = function (obj) {
                "use strict";
                $(obj).magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 });
            };
            rgen.inlinePopup = function (obj) {
                "use strict";
                $("body")
                    .off("click")
                    .on("click", obj, function (e) {
                        $(this).magnificPopup({ type: "inline", preloader: !1 }).click();
                    });
            };
            if ($o.videopop) {
                for (var i = 0; i < $o.videopop.length; i++) {
                    rgen.videoPopup($o.videopop[i]);
                }
            }
            if ($o.setpop) {
                for (var i = 0; i < $o.setpop.length; i++) {
                    $o.setpop[i];
                    var pop = $($o.setpop[i]).attr("href");
                    $($o.setpop[i]).magnificPopup({
                        type: "inline",
                        preloader: !1,
                        mainClass: "mfp-fade",
                        callbacks: {
                            beforeOpen: function () {
                                $(pop).removeClass("animate fadeInDown").addClass("animate fadeInDown");
                            },
                        },
                    });
                }
            }
            if ($o.searchpop) {
                $('[href="#popup-search"].set-popup').on("mfpOpen", function (e) {
                    $($o.searchpop).closest(".mfp-container").addClass("popup-search");
                });
            }
            $(".zoom-img").magnificPopup({ type: "image", mainClass: "mfp-fade" });
            if (!isNovi) {
                if ($o.popgallerywidget) {
                    for (var i = 0; i < $o.popgallerywidget.length; i++) {
                        $o.popgallerywidget[i];
                        $($o.popgallerywidget[i])
                            .attr("id", "popgallery" + i)
                            .addClass("popgallery" + i);
                        $("#popgallery" + i).magnificPopup({
                            delegate: ".pop-img",
                            type: "image",
                            removalDelay: 300,
                            tLoading: "Loading image #%curr%...",
                            mainClass: "mfp-img-mobile mfp-fade",
                            gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
                            image: {
                                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                                titleSrc: function (item) {
                                    return item.el.attr("title");
                                },
                            },
                        });
                    }
                }
            }
            rgen.bgSlider = function (setting) {
                "use strict";
                setTimeout(function () {
                    $(setting.obj).vegas({ delay: setting.delay, slides: setting.slides, animation: setting.effect });
                }, 1000);
            };
            if ($o.bgslider) {
                for (var i = 0; i < $o.bgslider.length; i++) {
                    if ($($o.bgslider[i]).attr("data-bgslider")) {
                        var s1 = $($o.bgslider[i]).attr("data-bgslider"),
                            s2 = s1.split("|"),
                            el = $o.bgslider[i],
                            bgslides = [];
                        $.each(s2, function (index, val) {
                            bgslides.push({ src: val });
                        });
                        $(el).vegas({ delay: 6000, slides: bgslides, timer: !1, animation: "kenburns" });
                    }
                }
            }
            rgen.countdown = function (obj) {
                "use strict";
                var o = $(obj);
                var config = {
                    day: parseInt(o.attr("data-day"), 10),
                    month: parseInt(o.attr("data-month"), 10),
                    year: parseInt(o.attr("data-year"), 10),
                    hour: parseInt(o.attr("data-hr"), 10),
                    min: parseInt(o.attr("data-min"), 10),
                    sec: parseInt(o.attr("data-sec"), 10),
                };
                var oneDay = 24 * 60 * 60 * 1000;
                var firstDate = new Date(config.year, config.month - 1, config.day - 1);
                var d = new Date();
                var secondDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
                var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
                var countdownHtml = '<div class="inner-dashboard">';
                countdownHtml += "	<!-- DAYS -->";
                countdownHtml += '	<div class="dash days_dash">';
                countdownHtml += '		<div class="inner-dash">';
                countdownHtml += diffDays > 99 ? '<div class="digit">0</div>' : "";
                countdownHtml += '			<div class="digit">0</div>';
                countdownHtml += '			<div class="digit">0</div>';
                countdownHtml += "		</div>";
                countdownHtml += '		<span class="dash_title">days</span>';
                countdownHtml += "	</div>";
                countdownHtml += "	<!-- HOURS -->";
                countdownHtml += '	<div class="dash hours_dash">';
                countdownHtml += '		<div class="inner-dash">';
                countdownHtml += '			<div class="digit">0</div>';
                countdownHtml += '			<div class="digit">0</div>';
                countdownHtml += "		</div>";
                countdownHtml += '		<span class="dash_title">hours</span>';
                countdownHtml += "	</div>";
                countdownHtml += "	<!-- MINIUTES -->";
                countdownHtml += '	<div class="dash minutes_dash">';
                countdownHtml += '		<div class="inner-dash">';
                countdownHtml += '			<div class="digit">0</div>';
                countdownHtml += '			<div class="digit">0</div>';
                countdownHtml += "		</div>";
                countdownHtml += '		<span class="dash_title">minutes</span>';
                countdownHtml += "	</div>";
                countdownHtml += "	<!-- SECONDS -->";
                countdownHtml += '	<div class="dash seconds_dash">';
                countdownHtml += '		<div class="inner-dash">';
                countdownHtml += '			<div class="digit">0</div>';
                countdownHtml += '			<div class="digit">0</div>';
                countdownHtml += "		</div>";
                countdownHtml += '		<span class="dash_title">seconds</span>';
                countdownHtml += "	</div>";
                countdownHtml += "</div>";
                o.html(countdownHtml);
                o.countDown({ targetDate: { day: config.day, month: config.month, year: config.year, hour: config.hour, min: config.min, sec: config.sec }, omitWeeks: !0 });
            };
            if ($o.countdownwidget) {
                for (var i = 0; i < $o.countdownwidget.length; i++) {
                    $($o.countdownwidget[i])
                        .children("div")
                        .attr("id", "countdown" + i);
                    rgen.countdown("#countdown" + i);
                }
            }
            rgen.filter = function (obj) {
                "use strict";
                $(obj).animate({ opacity: 1 }, 500, function () {});
                var filterObj = $(obj);
                var container = filterObj.find(".filter-container");
                var list = filterObj.find(".filter-list");
                var time = 500;
                list.find("[data-filter]").on("click", function (event) {
                    event.preventDefault();
                    var filter = $(this).attr("data-filter");
                    list.find("[data-filter]").removeClass("active");
                    $(this).addClass("active");
                    container
                        .find(".filter-content")
                        .stop()
                        .animate({ opacity: 0 }, 150, function () {
                            $(this).hide();
                            if (filter == "all") {
                                container.find(".filter-content").show().stop().animate({ opacity: 1 }, time);
                            } else {
                                $(filter).show().stop().animate({ opacity: 1 }, time);
                            }
                        });
                });
                list.find(".active") ? list.find(".active").trigger("click") : list.find("[data-filter]").first().trigger("click");
            };
            if ($o.filterwidget) {
                for (var i = 0; i < $o.filterwidget.length; i++) {
                    $o.filterwidget[i];
                    rgen.setId($o.filterwidget[i], "filterwidget", i);
                    rgen.filter($o.filterwidget[i]);
                }
            }
            
            
            rgen.blazyload = function (obj) {
                "use strict";
                var bLazy = new Blazy({
                    loadInvisible: !0,
                    success: function (ele) {
                        if ($(obj).hasClass("owl-carousel")) {
                            $(obj)
                                .find(".owl-nav")
                                .css({ top: $(obj).find(".owl-stage-outer").outerHeight() / 2 });
                        }
                    },
                });
            };
            if ($o.bLazy) {
                rgen.blazyload();
            }
            if ($o.masonry) {
                $($o.masonry).each(function (index, el) {
                    var masonry_wrp = $(this).closest(".masonry-wrp");
                    masonry_wrp.css({ opacity: 0 });
                    var $mGrid = $(this)
                        .imagesLoaded()
                        .always(function (instance) {})
                        .done(function (instance) {})
                        .fail(function () {})
                        .progress(function (instance, image) {});
                    masonry_wrp.animate({ opacity: 1 }, 600, function () {
                        $mGrid.isotope({ itemSelector: ".masonry-item", percentPosition: !0, stagger: 30, layoutMode: "packery", hiddenStyle: { opacity: 0 }, visibleStyle: { opacity: 1 } });
                    });
                    $(masonry_wrp).on("click", ".filters [data-filter]", function (event) {
                        event.preventDefault();
                        $(masonry_wrp).find(".filters [data-filter]").removeClass("active");
                        $(this).addClass("active");
                        var filterValue = $(this).attr("data-filter");
                        $mGrid.isotope({ filter: filterValue });
                    });
                });
            }
            if ($o.bgimg) {
                for (var i = 0; i < $o.bgimg.length; i++) {
                    rgen.bgimg($o.bgimg[i]);
                }
            }
            if ($o.bgcolor) {
                for (var i = 0; i < $o.bgcolor.length; i++) {
                    $($o.bgcolor[i]).css({ backgroundColor: $($o.bgcolor[i]).attr("data-bgcolor") });
                }
            }
            if ($o.txtcolor) {
                for (var i = 0; i < $o.txtcolor.length; i++) {
                    $($o.txtcolor[i]).css({ color: $($o.txtcolor[i]).attr("data-txtcolor") });
                }
            }
            if ($o.hoverclass) {
                for (var i = 0; i < $o.hoverclass.length; i++) {
                    var hov_class = $($o.hoverclass[i]).attr("data-hover-class");
                    $($o.hoverclass[i]).hover(
                        function () {
                            $(this).addClass(hov_class);
                        },
                        function () {
                            $(this).removeClass(hov_class);
                        }
                    );
                }
            }
            if ($o.gradient) {
                for (var i = 0; i < $o.gradient.length; i++) {
                    $o.gradient[i];
                    var grd_colors = $($o.gradient[i]).attr("data-g-colors"),
                        grd_color = grd_colors.split("|");
                    $($o.gradient[i]).css({ background: "linear-gradient(to bottom, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)" });
                }
            }
            if ($o.elanimate) {
                for (var i = 0; i < $o.elanimate.length; i++) {
                    var animateobj = $($o.elanimate[i]),
                        animatein = animateobj.attr("data-animate-in"),
                        animatearr = animatein.indexOf("|") > -1 ? animatein.split("|") : animatein,
                        animateclass = typeof animatearr == "object" ? animatearr[0] : animatearr,
                        animatedelay = typeof animatearr == "object" ? animatearr[1] : 0;
                    animateobj.css({ "-webkit-animation-delay": animatedelay + "s", "animation-delay": animatedelay + "s" });
                    animateobj.viewportChecker({ classToAdd: "animated " + animateclass, offset: 100 });
                }
            }
            if ($o.stellar) {
                for (var i = 0; i < $o.stellar.length; i++) {
                    $($o.stellar[i]).parent().css({ overflow: "hidden" });
                }
                $.stellar({ positionProperty: "transform", horizontalScrolling: !1, hideDistantElements: !1 });
            }
            if ($o.parallax) {
                if (!isNovi && !isIE && !isMobile) {
                    for (var i = 0; i < $o.parallax.length; i++) {
                        $($o.parallax[i]).parallax();
                    }
                } else {
                    for (var i = 0; i < $o.parallax.length; i++) {
                        var parallax = $($o.parallax[i]),
                            imgPath = parallax.data("parallax-img");
                        parallax.css({ "background-image": "url(" + imgPath + ")", "background-attachment": "fixed", "background-size": "cover" });
                    }
                }
            }
            if ($o.countbox) {
                var count_obj = document.querySelectorAll(".count-box");
                for (var i = 0; i < count_obj.length; i++) {
                    var count_b = count_obj[i],
                        count_o = $(count_b).find(".count"),
                        count_val = parseInt(count_o.text()),
                        count_prefix = count_o.attr("data-prefix"),
                        count_suffix = count_o.attr("data-suffix"),
                        options = { useEasing: !0, useGrouping: !0, separator: ",", decimal: ".", prefix: count_prefix ? count_prefix : "", suffix: count_suffix ? count_suffix : "" };
                    var count_box = new CountUp(count_b.querySelector(".count"), 0, count_val, 0, 3, options);
                    if (!count_box.error) {
                        count_box.start();
                    } else {
                        console.error(count_box.error);
                    }
                }
            }
            enquire
                .register("screen and (min-width: 992px)", {
                    match: function () {
                        if ($o.menuwrp) {
                            var $menu = $(".menu");
                            rgen.menuFn($menu);
                        }
                        if ($("html").hasClass("data-sticky")) {
                            $(".main-head").attr("data-sticky", "y").removeAttr("data-sticky-scroll", "y");
                            $("[data-sticky]").addClass("fixed-top");
                        }
                    },
                    unmatch: function () {},
                })
                .register("(min-width: 200px) and (max-width: 991px)", {
                    match: function () {
                        if ($o.menuwrp) {
                            var $menu = $(".menu");
                            $menu.find(".has-dropdown").off("mouseenter");
                            $menu.find(".has-dropdown").off("mouseleave");
                            $menu.removeAttr("style");
                        }
                        rgen.mobmenu(".nav-handle");
                        $("html").addClass("data-sticky");
                        $("[data-sticky]").removeClass("fixed-top");
                        $(".main-head").removeAttr("data-sticky").attr("data-sticky-scroll", "y");
                    },
                    unmatch: function () {
                        $("[data-sticky]").addClass("fixed-top");
                        if ($o.menuwrp) {
                            var $menu = $(".menu");
                            rgen.menuFn($menu);
                        }
                    },
                });
        } else {
            $o.r ? rgen.demo() : $("html").html("");
        }
    });
})();
