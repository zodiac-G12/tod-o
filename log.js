(this["webpackJsonptod-o"] = this["webpackJsonptod-o"] || []).push([[0], {
    56: function(e, n, t) {
        e.exports = t.p + "static/media/sea-lion.2f163542.svg"
    },
    73: function(e, n, t) {
        e.exports = t(83)
    },
    83: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t(0)
          , r = t.n(a)
          , o = t(10)
          , i = t.n(o)
          , l = t(15)
          , c = t(48)
          , s = t(16)
          , d = t(57)
          , u = t.n(d)
          , g = t(58)
          , h = t.n(g)
          , f = t(59)
          , v = t.n(f)
          , p = t(47)
          , m = t.n(p)
          , b = t(128)
          , y = t(129)
          , w = t(124)
          , E = t(126)
          , O = t(125)
          , S = t(85)
          , k = t(60)
          , D = t.n(k)
          , R = t(130)
          , j = t(131)
          , C = t(127)
          , x = function(e, n, t) {
            return [{
                id: e,
                title: "sample title",
                description: "sample description",
                dead_line: new Date((new Date).setDate((new Date).getDate() + 7)).toLocaleString(t).split(" ").map((function(e, n) {
                    return 0 === n ? e.split("/").map((function(e) {
                        return 1 === e.length ? "0" + e : e
                    }
                    )).join("/") : e.split(":").map((function(e) {
                        return 1 === e.length ? "0" + e : e
                    }
                    )).join(":")
                }
                )).join(" "),
                degree: "LOW",
                project_id: "",
                completeness: 0,
                category: n,
                created: (new Date).toLocaleString(t)
            }]
        }
          , N = t(56)
          , I = t.n(N)
          , T = function(e) {
            return r.a.createElement("img", {
                style: {
                    height: e.height,
                    width: e.width
                },
                src: I.a,
                alt: ""
            })
        };
        function P() {
            var e = Object(l.a)(["\n    padding: 4vh;\n    padding-top: 1vh;\n    height: 65vh;\n    border: solid 1px darkslategray;\n    border-top: none;\n    background: lightsteelblue;\n    overflow-y: scroll;\n    width: calc((90vw - 20vh) / 3);\n"]);
            return P = function() {
                return e
            }
            ,
            e
        }
        function L() {
            var e = Object(l.a)(["\n    background: lightcyan;\n    min-width: calc(100vw - 10vh);\n    overflow-x: scroll;\n    height: 82.5vh;\n    margin-top: 7.5vh;\n    padding: 5vh;\n    overflow-y: scroll;\n"]);
            return L = function() {
                return e
            }
            ,
            e
        }
        function G() {
            var e = Object(l.a)(["\n    margin-left: 1vh;\n    height: 7.5vh;\n    line-height: 7.5vh;\n"]);
            return G = function() {
                return e
            }
            ,
            e
        }
        function J() {
            var e = Object(l.a)(["\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: auto;\n    display: flex;\n"]);
            return J = function() {
                return e
            }
            ,
            e
        }
        function W() {
            var e = Object(l.a)(["\n    position: fixed;\n    top: 0;\n    width: 100vw;\n    @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');\n    font-family: 'Ranchers', cursive;\n    font-weight: bold;\n    padding: 0;\n    display: flex;\n    font-size: 4vh;\n    color: snow;\n    user-select: none;\n    text-align: center;\n    background: royalblue;\n"]);
            return W = function() {
                return e
            }
            ,
            e
        }
        function A() {
            var e = Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);
            return A = function() {
                return e
            }
            ,
            e
        }
        function M() {
            var e = Object(l.a)(["\n    display: flex;\n"]);
            return M = function() {
                return e
            }
            ,
            e
        }
        function H() {
            var e = Object(l.a)(["\n    margin-right: 1vw;\n    height: 3.5vh;\n    width: 3.5vh;\n    text-align: center;\n    border-radius: 40%;\n    color: white;\n    background: indianred;\n"]);
            return H = function() {
                return e
            }
            ,
            e
        }
        function z() {
            var e = Object(l.a)(["\n    margin-bottom: 5vh;\n    outline: none;\n    display: block;\n    border: none;\n    font-size: 1.5vh;\n    width: 25vw;\n    resize: none;\n"]);
            return z = function() {
                return e
            }
            ,
            e
        }
        function U() {
            var e = Object(l.a)(["\n    outline: none;\n    border: none;\n    font-size: 1.5vh;\n    resize: none;\n    color: black;\n    font-weight: bold;\n    width: 100%;\n    margin-right: 5vh;\n"]);
            return U = function() {
                return e
            }
            ,
            e
        }
        var _ = s.a.input(U())
          , B = s.a.textarea(z())
          , V = {
            display: "flex",
            overflow: "scroll",
            justifyContent: "space-between",
            height: "7.5vh",
            padding: "4vh 4vh 0 4vh",
            width: "calc((90vw - 20vh) / 3)",
            lineHeight: "3.5vh",
            background: "lightsteelblue",
            border: "solid 1px darkslategray",
            borderRadius: "0.5vh 0.5vh 0 0",
            borderBottom: "none"
        }
          , F = s.a.div(H())
          , $ = (s.a.div(M()),
        s.a.div(A()),
        s.a.div(W()))
          , q = s.a.div(J())
          , K = s.a.div(G())
          , Q = s.a.div(L())
          , X = s.a.div(P())
          , Y = function() {
            var e = window.navigator.language
              , n = localStorage.todoDatas && 0 !== JSON.parse(localStorage.todoDatas).length ? JSON.parse(localStorage.todoDatas) : x(1, "TODO", e)
              , t = Object(a.useState)(n)
              , o = Object(c.a)(t, 2)
              , i = o[0]
              , l = o[1]
              , s = Object(a.useState)([])
              , d = Object(c.a)(s, 2)
              , g = d[0]
              , f = d[1]
              , p = function(e, n, t) {
                var a, r = JSON.parse(JSON.stringify(i));
                return r.some((function(e, n) {
                    return e.id === t && (a = n,
                    !0)
                }
                )),
                "PROGRESS" === n && "TODO" !== r[a][e] || "DONE" === n && "PROGRESS" !== r[a][e] || (r[a][e] = n,
                localStorage.todoDatas = JSON.stringify(r)),
                r
            }
              , k = function(e, n, t) {
                var a = JSON.parse(JSON.stringify(i));
                return t.forEach((function(t) {
                    var r;
                    a.some((function(e, n) {
                        return e.id === t && (r = n,
                        !0)
                    }
                    )),
                    "PROGRESS" === n && "TODO" !== a[r][e] || "DONE" === n && "PROGRESS" !== a[r][e] || (a[r][e] = n)
                }
                )),
                localStorage.todoDatas = JSON.stringify(a),
                a
            };
            return r.a.createElement("div", null, r.a.createElement($, null, r.a.createElement(q, null, r.a.createElement(T, {
                height: "7.5vh",
                width: "5vh"
            }), r.a.createElement(K, null, "todo"))), r.a.createElement(Q, null, r.a.createElement("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between"
                }
            }, ["TODO", "PROGRESS", "DONE"].map((function(n) {
                return r.a.createElement("div", {
                    style: V,
                    key: "mtc-".concat(n)
                }, r.a.createElement("div", {
                    style: {
                        display: "flex"
                    }
                }, r.a.createElement(F, null, i.filter((function(e) {
                    return e.category === n
                }
                )).length), r.a.createElement("div", {
                    style: {
                        fontSize: "2vh",
                        fontWeight: "bold"
                    }
                }, n)), r.a.createElement("div", {
                    style: {
                        display: "flex"
                    }
                }, r.a.createElement(u.a, {
                    onClick: function() {
                        l(function(n) {
                            var t = 0 !== i.length ? i[i.length - 1].id + 1 : 1
                              , a = i.concat(x(t, n, e));
                            return localStorage.todoDatas = JSON.stringify(a),
                            a
                        }(n))
                    }
                }), r.a.createElement(h.a, {
                    onClick: function() {
                        l(function() {
                            var e = i.filter((function(e) {
                                return !g.includes(e.id)
                            }
                            ));
                            return localStorage.todoDatas = JSON.stringify(e),
                            e
                        }()),
                        f([])
                    }
                }), "TODO" === n && r.a.createElement(v.a, {
                    onClick: function() {
                        l(k("category", "PROGRESS", g)),
                        f([])
                    }
                }), "PROGRESS" === n && r.a.createElement(m.a, {
                    onClick: function() {
                        l(k("category", "DONE", g)),
                        f([])
                    }
                })))
            }
            ))), r.a.createElement("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between"
                }
            }, ["TODO", "PROGRESS", "DONE"].map((function(e) {
                return r.a.createElement(X, {
                    key: "mt-".concat(e)
                }, i.filter((function(n) {
                    return n.category === e
                }
                )).map((function(e, n) {
                    return r.a.createElement(y.a, {
                        key: "ac-".concat(n, "-").concat(e),
                        style: {
                            marginTop: "1vh"
                        }
                    }, r.a.createElement(w.a, {
                        expandIcon: r.a.createElement(D.a, null),
                        "aria-label": "Expand",
                        "aria-controls": "additional-actions1-content",
                        id: "additional-actions1-header"
                    }, r.a.createElement(O.a, {
                        "aria-label": "Acknowledge",
                        onClick: function(e) {
                            return e.stopPropagation()
                        },
                        onFocus: function(e) {
                            return e.stopPropagation()
                        },
                        control: r.a.createElement(b.a, {
                            value: e.id,
                            checked: g.includes(e.id),
                            onClick: function(e) {
                                var n = parseInt(e.target.value);
                                g.includes(n) ? f(g.filter((function(e) {
                                    return e !== n
                                }
                                ))) : f(g.concat([n]))
                            }
                        }),
                        label: r.a.createElement(_, {
                            value: e.title,
                            onChange: function(n) {
                                var t = n.target.value;
                                l(p("title", t, e.id))
                            }
                        })
                    }), r.a.createElement("div", {
                        style: {
                            display: "flex"
                        }
                    }, r.a.createElement(R.a, {
                        style: {
                            height: "3vh",
                            padding: "0",
                            marginTop: "0.5vh",
                            color: "white",
                            background: "CRITICAL" === e.degree ? "red" : "HIGH" === e.degree ? "orange" : "MEDIUM" === e.degree ? "green" : "PENDING" === e.degree ? "indigo" : "blue"
                        },
                        label: e.degree
                    }), r.a.createElement(R.a, {
                        style: {
                            height: "3vh",
                            marginTop: "0.5vh",
                            marginLeft: "0.5vh",
                            color: "white",
                            background: "rgba(".concat(Math.floor(255 - 255 * parseInt(e.completeness) / 100), ",0,").concat(Math.floor(255 * parseInt(e.completeness) / 100), ",1)")
                        },
                        label: e.completeness + "%"
                    }), r.a.createElement(R.a, {
                        style: {
                            height: "3vh",
                            marginTop: "0.5vh",
                            marginLeft: "0.5vh"
                        },
                        label: new Date(new Date(e.dead_line) - new Date).getDate() - 1 + "days"
                    }))), r.a.createElement(E.a, null, r.a.createElement(S.a, {
                        component: "div",
                        color: "textSecondary"
                    }, r.a.createElement(B, {
                        value: e.description,
                        onChange: function(n) {
                            var t = n.target.value;
                            l(p("description", t, e.id))
                        }
                    }), r.a.createElement("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "2vh"
                        }
                    }, r.a.createElement("div", {
                        style: {
                            marginRight: "1vh",
                            color: "black"
                        }
                    }, "Completeness:"), r.a.createElement(m.a, {
                        style: {
                            marginRight: "2vh"
                        }
                    }), r.a.createElement(j.a, {
                        defaultValue: e.completeness,
                        "aria-labelledby": "discrete-slider-always",
                        step: 1,
                        valueLabelDisplay: "on",
                        onChange: function(n, t) {
                            l(p("completeness", t, e.id))
                        }
                    }), r.a.createElement("div", {
                        style: {
                            marginLeft: "2vh",
                            width: "5vh",
                            color: "black"
                        }
                    }, "[%]")), ["LOW", "MEDIUM", "HIGH", "CRITICAL", "PENDING"].map((function(n) {
                        return r.a.createElement(R.a, {
                            key: "ch-".concat(n),
                            label: n,
                            style: {
                                color: e.degree !== n ? "rgba(0,0,0,0.87)" : "white",
                                background: e.degree !== n ? "#e0e0e0" : "CRITICAL" === n ? "red" : "HIGH" === n ? "orange" : "MEDIUM" === n ? "green" : "PENDING" === n ? "indigo" : "blue"
                            },
                            onClick: function() {
                                l(p("degree", n, e.id))
                            }
                        })
                    }
                    )), r.a.createElement("form", null, r.a.createElement(C.a, {
                        label: r.a.createElement("div", {
                            style: {
                                color: "black"
                            }
                        }, "Dead Line"),
                        type: "datetime-local",
                        style: {
                            marginTop: "2vh"
                        },
                        defaultValue: e.dead_line.replace(/\//g, "-").replace(" ", "T"),
                        InputLabelProps: {
                            shrink: !0
                        },
                        onChange: function(n) {
                            var t = n.target.value.replace(/-/g, "/").replace("T", " ");
                            l(p("dead_line", t, e.id))
                        }
                    })))))
                }
                )))
            }
            )))))
        }
          , Z = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        function ee(e, n) {
            navigator.serviceWorker.register(e).then((function(e) {
                e.onupdatefound = function() {
                    var t = e.installing;
                    null != t && (t.onstatechange = function() {
                        "installed" === t.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),
                        n && n.onUpdate && n.onUpdate(e)) : (console.log("Content is cached for offline use."),
                        n && n.onSuccess && n.onSuccess(e)))
                    }
                    )
                }
            }
            )).catch((function(e) {
                console.error("Error during service worker registration:", e)
            }
            ))
        }
        i.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(Y, null)), document.getElementById("root")),
        function(e) {
            if ("serviceWorker"in navigator) {
                if (new URL("/tod-o",window.location.href).origin !== window.location.origin)
                    return;
                window.addEventListener("load", (function() {
                    var n = "".concat("/tod-o", "/service-worker.js");
                    Z ? (!function(e, n) {
                        fetch(e, {
                            headers: {
                                "Service-Worker": "script"
                            }
                        }).then((function(t) {
                            var a = t.headers.get("content-type");
                            404 === t.status || null != a && -1 === a.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                e.unregister().then((function() {
                                    window.location.reload()
                                }
                                ))
                            }
                            )) : ee(e, n)
                        }
                        )).catch((function() {
                            console.log("No internet connection found. App is running in offline mode.")
                        }
                        ))
                    }(n, e),
                    navigator.serviceWorker.ready.then((function() {
                        console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                    }
                    ))) : ee(n, e)
                }
                ))
            }
        }()
    }
}, [[73, 1, 2]]]);
//# sourceMappingURL=main.96195976.chunk.js.map

