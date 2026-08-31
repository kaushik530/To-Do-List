(() => {
  "use strict";
  var n = {
    365(n, t, e) {
      var r = e(601),
        o = e.n(r),
        a = e(314),
        i = e.n(a),
        s = e(417),
        c = e.n(s),
        d = new URL(e(112), e.b),
        u = i()(o()),
        l = c()(d);
      u.push([
        n.id,
        `/* =========================\n   RESET\n   ========================= */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Inter, Arial, sans-serif;\n    color: #1f2937;\n    background: #f5f6f8;\n}\n\nbutton,\ninput,\ntextarea,\nselect {\n    font: inherit;\n}\n\n\n/* =========================\n   FONTS\n   ========================= */\n\n@font-face {\n    font-family: museo;\n    src: url(${l});\n    font-weight: 500;\n}\n\n\n/* =========================\n   LAYOUT\n   ========================= */\n\nmain {\n    font-family: museo;\n    display: grid;\n    grid-template-columns: 280px 1fr;\n    min-height: 100vh;\n}\n\n\n/* =========================\n   SIDEBAR\n   ========================= */\n\n.project-container {\n    position: relative;\n    padding: 32px 24px;\n    background: #171717;\n    color: #f5f5f5;\n    min-height: 100vh;\n}\n\n\n/* =========================\n   BRAND\n   ========================= */\n\n.brand {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 45px;\n    color: rgb(255, 255, 255);\n}\n\n.logo {\n    width: 34px;\n    height: 34px;\n    object-fit: contain;\n}\n\n.title {\n    font-size: 25px;\n    font-weight: 200;\n    letter-spacing: 1px;\n}\n\n\n/* =========================\n   NAVIGATION\n   ========================= */\n\n.task-navigation {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin-bottom: 38px;\n}\n\n.all-tasks,\n.upcoming-tasks,\n.completed-tasks {\n    padding: 11px 14px;\n    border-radius: 7px;\n\n    color: #d4d4d4;\n    background: transparent;\n\n    font-size: 15px;\n    text-align: left;\n    cursor: pointer;\n\n    transition:\n        transform 0.15s ease,\n        background 0.15s ease,\n        color 0.15s ease;\n}\n\n.all-tasks:hover,\n.upcoming-tasks:hover,\n.completed-tasks:hover {\n    transform: translateY(-2px);\n    background: #262626;\n    color: white;\n}\n\n\n/* =========================\n   PROJECT LIST\n   ========================= */\n\n.project-list h1 {\n    margin-bottom: 16px;\n    color: #737373;\n    font-size: 12px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\n.add-project {\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    margin-bottom: 18px;\n    padding: 10px 14px;\n\n    border: 1px solid #404040;\n    border-radius: 7px;\n\n    background: #262626;\n    color: #f5f5f5;\n\n    font-size: 14px;\n    font-weight: 600;\n\n    cursor: pointer;\n\n    transition:\n        transform 0.15s ease,\n        background 0.15s ease,\n        border-color 0.15s ease;\n}\n\n.add-project:hover {\n    transform: translateY(-2px);\n    background: #303030;\n    border-color: #525252;\n}\n\n.add-project:active {\n    transform: translateY(0);\n}\n\n.add-style {\n    margin-right: 7px;\n    font-size: 18px;\n    line-height: 1;\n}\n\n\n/* =========================\n   PROJECT ROW\n   ========================= */\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.projectRow {\n    display: flex;\n    align-items: center;\n\n    width: 100%;\n    min-height: 42px;\n\n    padding: 8px 10px 8px 14px;\n\n    border-radius: 7px;\n\n    background: transparent;\n    color: #d4d4d4;\n\n    cursor: pointer;\n\n    transition:\n        transform 0.15s ease,\n        background 0.15s ease,\n        color 0.15s ease;\n}\n\n.projectRow:hover {\n    transform: translateY(-2px);\n    background: #262626;\n    color: white;\n}\n\n.projectRow span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n\n    font-size: 14px;\n}\n\n\n/* =========================\n   DELETE PROJECT\n   ========================= */\n\n.delete-project {\n    width: 26px;\n    height: 26px;\n\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    margin-left: auto;\n\n    border: none;\n    border-radius: 5px;\n\n    background: transparent;\n    color: #737373;\n\n    font-size: 13px;\n    font-weight: 600;\n\n    cursor: pointer;\n    opacity: 0;\n\n    transition:\n        transform 0.15s ease,\n        background 0.15s ease,\n        color 0.15s ease,\n        opacity 0.15s ease;\n}\n\n.projectRow:hover .delete-project {\n    opacity: 1;\n}\n\n.delete-project:hover {\n    transform: translateY(-1px);\n    background: #3f2020;\n    color: #f87171;\n}\n\n\n/* =========================\n   TASK AREA\n   ========================= */\n\n.task-container {\n    display: none;\n\n    min-width: 0;\n\n    flex-direction: column;\n    gap: 50px;\n\n    margin: 24px 20px;\n\n    background: #f8f9fb;\n}\n\n\n/* =========================\n   TASK HEADER\n   ========================= */\n\n.task-header {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    max-width: 900px;\n}\n\n.task-header h1 {\n    font-size: 30px;\n    font-weight: 700;\n    letter-spacing: -0.7px;\n}\n\n.add-task {\n    display: flex;\n    align-items: center;\n\n    max-width: 200px;\n\n    padding: 10px 16px;\n\n    border: none;\n    border-radius: 7px;\n\n    background: #171717;\n    color: white;\n\n    font-size: 14px;\n    font-weight: 600;\n\n    cursor: pointer;\n\n    transition:\n        transform 0.15s ease,\n        background 0.15s ease;\n}\n\n.add-task:hover {\n    transform: translateY(-2px);\n    background: #303030;\n}\n\n.add-task:active {\n    transform: translateY(0);\n}\n\n\n/* =========================\n   TASK LIST\n   ========================= */\n\n.tasks {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n\n    max-width: 900px;\n}\n\n\n/* =========================\n   TASK ROW\n   ========================= */\n\n.taskRow {\n    display: grid;\n\n    grid-template-columns: 20px 1fr auto auto auto;\n\n    align-items: center;\n\n    gap: 20px;\n\n    min-height: 64px;\n\n    padding: 12px 16px;\n\n    border: 1px solid #e5e7eb;\n    border-radius: 9px;\n\n    background: white;\n\n    transition:\n        transform 0.15s ease,\n        border-color 0.15s ease;\n}\n\n.taskRow:hover {\n\n    border-color: #d1d5db;\n}\n\n.taskRow span:first-child {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n\n    color: #111827;\n\n    font-size: 15px;\n    font-weight: 500;\n}\n\n.taskRow span:nth-child(2) {\n    color: #4e5766;\n    font-size: 19px;\n}\n\n\n/* =========================\n   PRIORITY\n   ========================= */\n\n.statusPriority {\n    width: 15px;\n    height: 15px;\n\n    border-radius: 50%;\n\n    flex-shrink: 0;\n}\n\n.statusPriority.low {\n    background: #4ade80;\n}\n\n.statusPriority.medium {\n    background: #facc15;\n}\n\n.statusPriority.high {\n    background: #ef4444;\n}\n\n\n/* =========================\n   CHECKBOX\n   ========================= */\n\n.done {\n    appearance: none;\n\n    width: 20px;\n    height: 20px;\n\n    border: 2px solid #6b7280;\n    border-radius: 50%;\n\n    outline: none;\n    cursor: pointer;\n\n    transition:\n        background 0.15s ease,\n        border-color 0.25s ease,\n        transform 0.15s ease;\n}\n\n.done:hover {\n    transform: translateY(-1px);\n}\n\n.done:checked {\n    background: #1dfc72;\n    border-color: #636363;\n}\n\n\n/* =========================\n   DELETE TASK\n   ========================= */\n\n.delete-task {\n    width: 28px;\n    height: 28px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    border: none;\n    border-radius: 6px;\n\n    background: transparent;\n    color: #9ca3af;\n\n    font-size: 13px;\n    font-weight: 600;\n\n    cursor: pointer;\n\n    transition:\n        transform 0.15s ease,\n        background 0.15s ease,\n        color 0.15s ease;\n}\n\n.delete-task:hover {\n    transform: translateY(-1px);\n    background: #fee2e2;\n    color: #dc2626;\n}\n\n\n/* =========================\n   FORMS\n   ========================= */\n\n.project-form,\n.task-form {\n    display: none;\n\n    position: fixed;\n\n    top: 50%;\n    left: 50%;\n\n    transform: translate(-50%, -50%);\n\n    width: min(400px, calc(100vw - 40px));\n\n    padding: 28px;\n\n    border: 1px solid #e5e7eb;\n    border-radius: 12px;\n\n    background: white;\n\n    box-shadow:\n        0 20px 50px rgba(0, 0, 0, 0.18);\n\n    z-index: 10;\n}\n\n.project-form form,\n.task-form form {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n}\n\n\n/* =========================\n   FORM INPUTS\n   ========================= */\n\n.project-name,\n.task-form input,\n.task-form textarea,\n.task-form select {\n    width: 100%;\n\n    padding: 12px 13px;\n\n    border: 1px solid #d1d5db;\n    border-radius: 7px;\n\n    background: white;\n    color: #111827;\n\n    outline: none;\n\n    transition:\n        border-color 0.15s ease,\n        box-shadow 0.15s ease;\n}\n\n.project-name:focus,\n.task-form input:focus,\n.task-form textarea:focus,\n.task-form select:focus {\n    border-color: #6366f1;\n\n    box-shadow:\n        0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n\n.task-form textarea {\n    resize: vertical;\n    min-height: 90px;\n}\n\n\n/* =========================\n   FORM BUTTONS\n   ========================= */\n\n.form-buttons {\n    display: flex;\n    justify-content: flex-end;\n\n    gap: 8px;\n\n    margin-top: 5px;\n}\n\n.form-buttons button {\n    padding: 9px 16px;\n\n    border-radius: 7px;\n\n    font-size: 14px;\n    font-weight: 600;\n\n    cursor: pointer;\n\n    transition:\n        transform 0.15s ease,\n        background 0.15s ease;\n}\n\n.form-buttons button:hover {\n    transform: translateY(-2px);\n}\n\n.form-buttons button:active {\n    transform: translateY(0);\n}\n\n.form-buttons button[type="submit"] {\n    border: none;\n\n    background: #171717;\n    color: white;\n}\n\n.form-buttons button[type="submit"]:hover {\n    background: #303030;\n}\n\n.close-project-form,\n.close-task-form {\n    border: 1px solid #d1d5db;\n\n    background: white;\n    color: #4b5563;\n}\n\n.close-project-form:hover,\n.close-task-form:hover {\n    background: #f3f4f6;\n}\n/* =========================\n   TASK DETAILS\n   ========================= */\n\n.task-details {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    z-index: 1000;\n\n    width: min(420px, calc(100vw - 40px));\n    max-height: 85vh;\n\n    padding: 36px;\n\n    box-sizing: border-box;\n\n    background: #fff;\n    border: 1px solid #e8e8e8;\n    border-radius: 24px;\n\n    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n\n    transform: translate(-50%, -46%) scale(0.96);\n    opacity: 0;\n    visibility: hidden;\n\n    overflow: hidden;\n\n    transition:\n        opacity 0.25s ease,\n        transform 0.25s ease,\n        visibility 0.25s ease;\n}\n\n.task-details.show {\n    opacity: 1;\n    visibility: visible;\n    transform: translate(-50%, -50%) scale(1);\n}\n\n\n/* =========================\n   CONTENT\n   ========================= */\n\n.details-content {\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n}\n\n\n/* =========================\n   CLOSE BUTTON\n   ========================= */\n\n.close-task-details {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n\n    width: 34px;\n    height: 34px;\n\n    border: none;\n    border-radius: 50%;\n\n    background: #f4f4f4;\n\n    font-size: 22px;\n    line-height: 1;\n\n    cursor: pointer;\n\n    transition:\n        background 0.2s ease,\n        transform 0.2s ease;\n}\n\n.close-task-details:hover {\n    background: #e9e9e9;\n    transform: translateY(-2px);\n}\n\n\n/* =========================\n   TITLE\n   ========================= */\n\n.details-title {\n    margin: 0 45px 28px 0;\n\n    font-size: 28px;\n    line-height: 1.2;\n    font-weight: 700;\n\n    color: #171717;\n\n    overflow-wrap: anywhere;\n}\n\n\n/* =========================\n   DESCRIPTION\n   ========================= */\n\n.details-description {\n    margin-bottom: 28px;\n}\n\n.details-description h3 {\n    margin: 0 0 8px;\n\n    font-size: 12px;\n    font-weight: 700;\n\n    text-transform: uppercase;\n    letter-spacing: 0.08em;\n\n    color: #999;\n}\n\n.details-description-text {\n    margin: 0;\n\n    font-size: 15px;\n    line-height: 1.65;\n\n    color: #555;\n\n    overflow-wrap: anywhere;\n    word-break: break-word;\n\n    /* Prevent ridiculously long descriptions\n       from making the card enormous */\n    max-height: 180px;\n    overflow-y: auto;\n\n    padding-right: 6px;\n}\n\n\n/* =========================\n   INFORMATION\n   ========================= */\n\n.details-info {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.details-date,\n.details-priority {\n    display: flex;\n    align-items: center;\n\n    min-height: 48px;\n    padding: 0 16px;\n\n    box-sizing: border-box;\n\n    border-radius: 12px;\n\n    background: #f7f7f7;\n\n    font-size: 14px;\n    font-weight: 500;\n\n    color: #444;\n\n    overflow-wrap: anywhere;\n}\n\n\n/* =========================\n   MOBILE\n   ========================= */\n\n@media (max-width: 600px) {\n\n    .task-details {\n        width: calc(100vw - 28px);\n        max-height: 88vh;\n\n        padding: 30px 22px 22px;\n\n        border-radius: 20px;\n    }\n\n    .close-task-details {\n        top: 12px;\n        right: 12px;\n\n        width: 32px;\n        height: 32px;\n    }\n\n    .details-title {\n        margin-right: 38px;\n        margin-bottom: 22px;\n\n        font-size: 23px;\n        line-height: 1.25;\n    }\n\n    .details-description {\n        margin-bottom: 22px;\n    }\n\n    .details-description h3 {\n        font-size: 11px;\n    }\n\n    .details-description-text {\n        font-size: 14px;\n        line-height: 1.6;\n\n        max-height: 30vh;\n\n        overflow-y: auto;\n        overflow-x: hidden;\n\n        /* Important for long words/URLs */\n        overflow-wrap: anywhere;\n        word-break: break-word;\n    }\n\n    .details-info {\n        gap: 8px;\n    }\n\n    .details-date,\n    .details-priority {\n        min-height: 44px;\n        padding: 10px 13px;\n\n        font-size: 13px;\n    }\n}\n\n\n/* Very small phones */\n\n@media (max-width: 380px) {\n\n    .task-details {\n        width: calc(100vw - 20px);\n        padding: 26px 18px 18px;\n    }\n\n    .details-title {\n        font-size: 21px;\n    }\n\n    .details-description-text {\n        max-height: 25vh;\n        font-size: 13px;\n    }\n}\n/* =========================\n   EMPTY MESSAGE\n   ========================= */\n\n.empty-message {\n    color: #9ca3af;\n    font-size: 15px;\n    padding: 20px 0;\n}\n\n\n/* =========================\n   MOBILE\n   ========================= */\n\n@media (max-width: 700px) {\n\n    .taskRow:hover,\n    .projectRow:hover,\n    .task-container:hover,\n    .project-container:hover {\n        transform: none;\n    }\n\n\n    main {\n        grid-template-columns: 1fr;\n    }\n\n    .project-container {\n        min-height: auto;\n        padding: 24px 20px;\n    }\n\n    .brand {\n        margin-bottom: 25px;\n    }\n\n    .task-navigation {\n        margin-bottom: 25px;\n    }\n\n    .project-list h1 {\n        margin-top: 20px;\n    }\n\n    .task-container {\n        padding: 30px 20px;\n        margin: 0;\n        gap: 30px;\n    }\n\n    .task-header {\n        align-items: flex-start;\n        gap: 15px;\n    }\n\n    .task-header h1 {\n        font-size: 25px;\n    }\n\n    .taskRow {\n        grid-template-columns: 20px 1fr auto auto auto;\n        gap: 10px;\n    }\n}\n`,
        "",
      ]);
      const f = u;
      e.d(t, ["A", 0, f]);
    },
    314(n) {
      n.exports = function (n) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var e = "",
                r = void 0 !== t[5];
              return (
                t[4] && (e += "@supports (".concat(t[4], ") {")),
                t[2] && (e += "@media ".concat(t[2], " {")),
                r &&
                  (e += "@layer".concat(
                    t[5].length > 0 ? " ".concat(t[5]) : "",
                    " {",
                  )),
                (e += n(t)),
                r && (e += "}"),
                t[2] && (e += "}"),
                t[4] && (e += "}"),
                e
              );
            }).join("");
          }),
          (t.i = function (n, e, r, o, a) {
            "string" == typeof n && (n = [[null, n, void 0]]);
            var i = {};
            if (r)
              for (var s = 0; s < this.length; s++) {
                var c = this[s][0];
                null != c && (i[c] = !0);
              }
            for (var d = 0; d < n.length; d++) {
              var u = [].concat(n[d]);
              (r && i[u[0]]) ||
                (void 0 !== a &&
                  (void 0 === u[5] ||
                    (u[1] = "@layer"
                      .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                      .concat(u[1], "}")),
                  (u[5] = a)),
                e &&
                  (u[2]
                    ? ((u[1] = "@media ".concat(u[2], " {").concat(u[1], "}")),
                      (u[2] = e))
                    : (u[2] = e)),
                o &&
                  (u[4]
                    ? ((u[1] = "@supports ("
                        .concat(u[4], ") {")
                        .concat(u[1], "}")),
                      (u[4] = o))
                    : (u[4] = "".concat(o))),
                t.push(u));
            }
          }),
          t
        );
      };
    },
    417(n) {
      n.exports = function (n, t) {
        return (
          t || (t = {}),
          n
            ? ((n = String(n.__esModule ? n.default : n)),
              /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
              t.hash && (n += t.hash),
              /["'() \t\n]|(%20)/.test(n) || t.needQuotes
                ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                : n)
            : n
        );
      };
    },
    601(n) {
      n.exports = function (n) {
        return n[1];
      };
    },
    112(n, t, e) {
      n.exports = e.p + "80acced0ba3630ee652b.otf";
    },
    503(n, t, e) {
      var r = e.cjs(function (n, t) {
          var e = [];
          function r(n) {
            for (var t = -1, r = 0; r < e.length; r++)
              if (e[r].identifier === n) {
                t = r;
                break;
              }
            return t;
          }
          function o(n, t) {
            for (var o = {}, i = [], s = 0; s < n.length; s++) {
              var c = n[s],
                d = t.base ? c[0] + t.base : c[0],
                u = o[d] || 0,
                l = "".concat(d, " ").concat(u);
              o[d] = u + 1;
              var f = r(l),
                p = {
                  css: c[1],
                  media: c[2],
                  sourceMap: c[3],
                  supports: c[4],
                  layer: c[5],
                };
              if (-1 !== f) (e[f].references++, e[f].updater(p));
              else {
                var h = a(p, t);
                ((t.byIndex = s),
                  e.splice(s, 0, { identifier: l, updater: h, references: 1 }));
              }
              i.push(l);
            }
            return i;
          }
          function a(n, t) {
            var e = t.domAPI(t);
            return (
              e.update(n),
              function (t) {
                if (t) {
                  if (
                    t.css === n.css &&
                    t.media === n.media &&
                    t.sourceMap === n.sourceMap &&
                    t.supports === n.supports &&
                    t.layer === n.layer
                  )
                    return;
                  e.update((n = t));
                } else e.remove();
              }
            );
          }
          n.exports = function (n, t) {
            var a = o((n = n || []), (t = t || {}));
            return function (n) {
              n = n || [];
              for (var i = 0; i < a.length; i++) {
                var s = r(a[i]);
                e[s].references--;
              }
              for (var c = o(n, t), d = 0; d < a.length; d++) {
                var u = r(a[d]);
                0 === e[u].references && (e[u].updater(), e.splice(u, 1));
              }
              a = c;
            };
          };
        }),
        o = e.n(r),
        a = e.cjs(function (n, t) {
          n.exports = function (n) {
            if ("undefined" == typeof document)
              return { update: function () {}, remove: function () {} };
            var t = n.insertStyleElement(n);
            return {
              update: function (e) {
                !(function (n, t, e) {
                  var r = "";
                  (e.supports && (r += "@supports (".concat(e.supports, ") {")),
                    e.media && (r += "@media ".concat(e.media, " {")));
                  var o = void 0 !== e.layer;
                  (o &&
                    (r += "@layer".concat(
                      e.layer.length > 0 ? " ".concat(e.layer) : "",
                      " {",
                    )),
                    (r += e.css),
                    o && (r += "}"),
                    e.media && (r += "}"),
                    e.supports && (r += "}"));
                  var a = e.sourceMap;
                  (a &&
                    "undefined" != typeof btoa &&
                    (r +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        " */",
                      )),
                    t.styleTagTransform(r, n, t.options));
                })(t, n, e);
              },
              remove: function () {
                !(function (n) {
                  if (null === n.parentNode) return !1;
                  n.parentNode.removeChild(n);
                })(t);
              },
            };
          };
        }),
        i = e.n(a),
        s = e.cjs(function (n, t) {
          var e = {};
          n.exports = function (n, t) {
            var r = (function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (n) {
                    t = null;
                  }
                e[n] = t;
              }
              return e[n];
            })(n);
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              );
            r.appendChild(t);
          };
        }),
        c = e.n(s),
        d = e.cjs(function (n, t) {
          n.exports = function (n) {
            var t = e.nc;
            t && n.setAttribute("nonce", t);
          };
        }),
        u = e.n(d),
        l = e.cjs(function (n, t) {
          n.exports = function (n) {
            var t = document.createElement("style");
            return (
              n.setAttributes(t, n.attributes),
              n.insert(t, n.options),
              t
            );
          };
        }),
        f = e.n(l),
        p = e.cjs(function (n, t) {
          n.exports = function (n, t) {
            if (t.styleSheet) t.styleSheet.cssText = n;
            else {
              for (; t.firstChild;) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(n));
            }
          };
        }),
        h = e.n(p),
        m = e(365),
        g = {};
      ((g.styleTagTransform = h()),
        (g.setAttributes = u()),
        (g.insert = c().bind(null, "head")),
        (g.domAPI = i()),
        (g.insertStyleElement = f()),
        o()(m.A, g),
        m.A && m.A.locals && m.A.locals);
      let x = window.localStorage;
      function b(n) {
        localStorage.setItem("projects", JSON.stringify(n));
      }
      class w {
        constructor(n, t, e, r) {
          ((this.title = n),
            (this.description = t),
            (this.dueDate = e),
            (this.priority = r),
            (this.id = crypto.randomUUID()),
            (this.completed = !1));
        }
      }
      const y = "all",
        v = "upcoming",
        k = "project",
        M = "completed";
      let S = y;
      const E = [];
      function T(n) {
        S = n;
      }
      function P(n, t) {
        const e = t.findIndex((t) => t.id === n);
        -1 !== e && t.splice(e, 1);
        const r = E.findIndex((n) => n.id);
        -1 !== r && E.splice(r, 1);
      }
      class j {
        constructor(n) {
          ((this.id = crypto.randomUUID()), (this.name = n), (this.task = []));
        }
        get projectId() {
          return this.id;
        }
        get tasks() {
          return this.task;
        }
      }
      const C = [];
      (JSON.parse(x.getItem("projects")) || []).forEach((n) => {
        const t = new j(n.name);
        ((t.id = n.id),
          (t.task = n.task),
          C.push(t),
          t.task.forEach((n) => {
            E.push(n);
          }));
      });
      const D = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function L(n) {
        return (t = {}) => {
          const e = t.width ? String(t.width) : n.defaultWidth;
          return n.formats[e] || n.formats[n.defaultWidth];
        };
      }
      const O = {
          date: L({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: L({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: L({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        q = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function z(n) {
        return (t, e) => {
          let r;
          if (
            "formatting" === (e?.context ? String(e.context) : "standalone") &&
            n.formattingValues
          ) {
            const t = n.defaultFormattingWidth || n.defaultWidth,
              o = e?.width ? String(e.width) : t;
            r = n.formattingValues[o] || n.formattingValues[t];
          } else {
            const t = n.defaultWidth,
              o = e?.width ? String(e.width) : n.defaultWidth;
            r = n.values[o] || n.values[t];
          }
          return r[n.argumentCallback ? n.argumentCallback(t) : t];
        };
      }
      const W = {
        ordinalNumber: (n, t) => {
          const e = Number(n),
            r = e % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return e + "st";
              case 2:
                return e + "nd";
              case 3:
                return e + "rd";
            }
          return e + "th";
        },
        era: z({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: z({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: (n) => n - 1,
        }),
        month: z({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: z({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: z({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      function Y(n) {
        return (t, e = {}) => {
          const r = e.width,
            o =
              (r && n.matchPatterns[r]) || n.matchPatterns[n.defaultMatchWidth],
            a = t.match(o);
          if (!a) return null;
          const i = a[0],
            s =
              (r && n.parsePatterns[r]) || n.parsePatterns[n.defaultParseWidth],
            c = Array.isArray(s)
              ? (function (n, t) {
                  for (let e = 0; e < n.length; e++) if (t(n[e])) return e;
                })(s, (n) => n.test(i))
              : (function (n, t) {
                  for (const e in n)
                    if (Object.prototype.hasOwnProperty.call(n, e) && t(n[e]))
                      return e;
                })(s, (n) => n.test(i));
          let d;
          return (
            (d = n.valueCallback ? n.valueCallback(c) : c),
            (d = e.valueCallback ? e.valueCallback(d) : d),
            { value: d, rest: t.slice(i.length) }
          );
        };
      }
      const A = {
        ordinalNumber:
          ((N = {
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: (n) => parseInt(n, 10),
          }),
          (n, t = {}) => {
            const e = n.match(N.matchPattern);
            if (!e) return null;
            const r = e[0],
              o = n.match(N.parsePattern);
            if (!o) return null;
            let a = N.valueCallback ? N.valueCallback(o[0]) : o[0];
            return (
              (a = t.valueCallback ? t.valueCallback(a) : a),
              { value: a, rest: n.slice(r.length) }
            );
          }),
        era: Y({
          matchPatterns: {
            narrow: /^(b|a)/i,
            abbreviated:
              /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            wide: /^(before christ|before common era|anno domini|common era)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: { any: [/^b/i, /^(a|c)/i] },
          defaultParseWidth: "any",
        }),
        quarter: Y({
          matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^q[1234]/i,
            wide: /^[1234](th|st|nd|rd)? quarter/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
          defaultParseWidth: "any",
          valueCallback: (n) => n + 1,
        }),
        month: Y({
          matchPatterns: {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: {
            narrow: [
              /^j/i,
              /^f/i,
              /^m/i,
              /^a/i,
              /^m/i,
              /^j/i,
              /^j/i,
              /^a/i,
              /^s/i,
              /^o/i,
              /^n/i,
              /^d/i,
            ],
            any: [
              /^ja/i,
              /^f/i,
              /^mar/i,
              /^ap/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^au/i,
              /^s/i,
              /^o/i,
              /^n/i,
              /^d/i,
            ],
          },
          defaultParseWidth: "any",
        }),
        day: Y({
          matchPatterns: {
            narrow: /^[smtwf]/i,
            short: /^(su|mo|tu|we|th|fr|sa)/i,
            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: {
            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
          },
          defaultParseWidth: "any",
        }),
        dayPeriod: Y({
          matchPatterns: {
            narrow:
              /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
          },
          defaultMatchWidth: "any",
          parsePatterns: {
            any: {
              am: /^a/i,
              pm: /^p/i,
              midnight: /^mi/i,
              noon: /^no/i,
              morning: /morning/i,
              afternoon: /afternoon/i,
              evening: /evening/i,
              night: /night/i,
            },
          },
          defaultParseWidth: "any",
        }),
      };
      var N;
      const R = {
        code: "en-US",
        formatDistance: (n, t, e) => {
          let r;
          const o = D[n];
          return (
            (r =
              "string" == typeof o
                ? o
                : 1 === t
                  ? o.one
                  : o.other.replace("{{count}}", t.toString())),
            e?.addSuffix
              ? e.comparison && e.comparison > 0
                ? "in " + r
                : r + " ago"
              : r
          );
        },
        formatLong: O,
        formatRelative: (n, t, e, r) => q[n],
        localize: W,
        match: A,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      let I = {};
      function F() {
        return I;
      }
      Math.pow(10, 8);
      const H = 6048e5,
        B = Symbol.for("constructDateFrom");
      function Q(n, t) {
        return "function" == typeof n
          ? n(t)
          : n && "object" == typeof n && B in n
            ? n[B](t)
            : n instanceof Date
              ? new n.constructor(t)
              : new Date(t);
      }
      function U(n, t) {
        return Q(t || n, n);
      }
      function X(n) {
        const t = U(n),
          e = new Date(
            Date.UTC(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              t.getHours(),
              t.getMinutes(),
              t.getSeconds(),
              t.getMilliseconds(),
            ),
          );
        return (e.setUTCFullYear(t.getFullYear()), +n - +e);
      }
      function G(n, t) {
        const e = U(n, t?.in);
        return (e.setHours(0, 0, 0, 0), e);
      }
      function J(n, t) {
        const e = U(n, t?.in);
        return (
          (function (n, t, e) {
            const [r, o] = (function (n, ...t) {
                const e = Q.bind(
                  null,
                  n || t.find((n) => "object" == typeof n),
                );
                return t.map(e);
              })(e?.in, n, t),
              a = G(r),
              i = G(o),
              s = +a - X(a),
              c = +i - X(i);
            return Math.round((s - c) / 864e5);
          })(
            e,
            (function (n, t) {
              const e = U(n, t?.in);
              return (
                e.setFullYear(e.getFullYear(), 0, 1),
                e.setHours(0, 0, 0, 0),
                e
              );
            })(e),
          ) + 1
        );
      }
      function $(n, t) {
        const e = F(),
          r =
            t?.weekStartsOn ??
            t?.locale?.options?.weekStartsOn ??
            e.weekStartsOn ??
            e.locale?.options?.weekStartsOn ??
            0,
          o = U(n, t?.in),
          a = o.getDay(),
          i = (a < r ? 7 : 0) + a - r;
        return (o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o);
      }
      function K(n, t) {
        return $(n, { ...t, weekStartsOn: 1 });
      }
      function V(n, t) {
        const e = U(n, t?.in),
          r = e.getFullYear(),
          o = Q(e, 0);
        (o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0));
        const a = K(o),
          i = Q(e, 0);
        (i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0));
        const s = K(i);
        return e.getTime() >= a.getTime()
          ? r + 1
          : e.getTime() >= s.getTime()
            ? r
            : r - 1;
      }
      function _(n, t) {
        const e = U(n, t?.in),
          r =
            +K(e) -
            +(function (n, t) {
              const e = V(n, t),
                r = Q(t?.in || n, 0);
              return (r.setFullYear(e, 0, 4), r.setHours(0, 0, 0, 0), K(r));
            })(e);
        return Math.round(r / H) + 1;
      }
      function Z(n, t) {
        const e = U(n, t?.in),
          r = e.getFullYear(),
          o = F(),
          a =
            t?.firstWeekContainsDate ??
            t?.locale?.options?.firstWeekContainsDate ??
            o.firstWeekContainsDate ??
            o.locale?.options?.firstWeekContainsDate ??
            1,
          i = Q(t?.in || n, 0);
        (i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0));
        const s = $(i, t),
          c = Q(t?.in || n, 0);
        (c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0));
        const d = $(c, t);
        return +e >= +s ? r + 1 : +e >= +d ? r : r - 1;
      }
      function nn(n, t) {
        const e = U(n, t?.in),
          r =
            +$(e, t) -
            +(function (n, t) {
              const e = F(),
                r =
                  t?.firstWeekContainsDate ??
                  t?.locale?.options?.firstWeekContainsDate ??
                  e.firstWeekContainsDate ??
                  e.locale?.options?.firstWeekContainsDate ??
                  1,
                o = Z(n, t),
                a = Q(t?.in || n, 0);
              return (a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), $(a, t));
            })(e, t);
        return Math.round(r / H) + 1;
      }
      function tn(n, t) {
        return (n < 0 ? "-" : "") + Math.abs(n).toString().padStart(t, "0");
      }
      const en = {
          y(n, t) {
            const e = n.getFullYear(),
              r = e > 0 ? e : 1 - e;
            return tn("yy" === t ? r % 100 : r, t.length);
          },
          M(n, t) {
            const e = n.getMonth();
            return "M" === t ? String(e + 1) : tn(e + 1, 2);
          },
          d: (n, t) => tn(n.getDate(), t.length),
          a(n, t) {
            const e = n.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return e.toUpperCase();
              case "aaa":
                return e;
              case "aaaaa":
                return e[0];
              default:
                return "am" === e ? "a.m." : "p.m.";
            }
          },
          h: (n, t) => tn(n.getHours() % 12 || 12, t.length),
          H: (n, t) => tn(n.getHours(), t.length),
          m: (n, t) => tn(n.getMinutes(), t.length),
          s: (n, t) => tn(n.getSeconds(), t.length),
          S(n, t) {
            const e = t.length,
              r = n.getMilliseconds();
            return tn(Math.trunc(r * Math.pow(10, e - 3)), t.length);
          },
        },
        rn = {
          G: function (n, t, e) {
            const r = n.getFullYear() > 0 ? 1 : 0;
            switch (t) {
              case "G":
              case "GG":
              case "GGG":
                return e.era(r, { width: "abbreviated" });
              case "GGGGG":
                return e.era(r, { width: "narrow" });
              default:
                return e.era(r, { width: "wide" });
            }
          },
          y: function (n, t, e) {
            if ("yo" === t) {
              const t = n.getFullYear(),
                r = t > 0 ? t : 1 - t;
              return e.ordinalNumber(r, { unit: "year" });
            }
            return en.y(n, t);
          },
          Y: function (n, t, e, r) {
            const o = Z(n, r),
              a = o > 0 ? o : 1 - o;
            return "YY" === t
              ? tn(a % 100, 2)
              : "Yo" === t
                ? e.ordinalNumber(a, { unit: "year" })
                : tn(a, t.length);
          },
          R: function (n, t) {
            return tn(V(n), t.length);
          },
          u: function (n, t) {
            return tn(n.getFullYear(), t.length);
          },
          Q: function (n, t, e) {
            const r = Math.ceil((n.getMonth() + 1) / 3);
            switch (t) {
              case "Q":
                return String(r);
              case "QQ":
                return tn(r, 2);
              case "Qo":
                return e.ordinalNumber(r, { unit: "quarter" });
              case "QQQ":
                return e.quarter(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return e.quarter(r, { width: "narrow", context: "formatting" });
              default:
                return e.quarter(r, { width: "wide", context: "formatting" });
            }
          },
          q: function (n, t, e) {
            const r = Math.ceil((n.getMonth() + 1) / 3);
            switch (t) {
              case "q":
                return String(r);
              case "qq":
                return tn(r, 2);
              case "qo":
                return e.ordinalNumber(r, { unit: "quarter" });
              case "qqq":
                return e.quarter(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return e.quarter(r, { width: "narrow", context: "standalone" });
              default:
                return e.quarter(r, { width: "wide", context: "standalone" });
            }
          },
          M: function (n, t, e) {
            const r = n.getMonth();
            switch (t) {
              case "M":
              case "MM":
                return en.M(n, t);
              case "Mo":
                return e.ordinalNumber(r + 1, { unit: "month" });
              case "MMM":
                return e.month(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return e.month(r, { width: "narrow", context: "formatting" });
              default:
                return e.month(r, { width: "wide", context: "formatting" });
            }
          },
          L: function (n, t, e) {
            const r = n.getMonth();
            switch (t) {
              case "L":
                return String(r + 1);
              case "LL":
                return tn(r + 1, 2);
              case "Lo":
                return e.ordinalNumber(r + 1, { unit: "month" });
              case "LLL":
                return e.month(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return e.month(r, { width: "narrow", context: "standalone" });
              default:
                return e.month(r, { width: "wide", context: "standalone" });
            }
          },
          w: function (n, t, e, r) {
            const o = nn(n, r);
            return "wo" === t
              ? e.ordinalNumber(o, { unit: "week" })
              : tn(o, t.length);
          },
          I: function (n, t, e) {
            const r = _(n);
            return "Io" === t
              ? e.ordinalNumber(r, { unit: "week" })
              : tn(r, t.length);
          },
          d: function (n, t, e) {
            return "do" === t
              ? e.ordinalNumber(n.getDate(), { unit: "date" })
              : en.d(n, t);
          },
          D: function (n, t, e) {
            const r = J(n);
            return "Do" === t
              ? e.ordinalNumber(r, { unit: "dayOfYear" })
              : tn(r, t.length);
          },
          E: function (n, t, e) {
            const r = n.getDay();
            switch (t) {
              case "E":
              case "EE":
              case "EEE":
                return e.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return e.day(r, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return e.day(r, { width: "short", context: "formatting" });
              default:
                return e.day(r, { width: "wide", context: "formatting" });
            }
          },
          e: function (n, t, e, r) {
            const o = n.getDay(),
              a = (o - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "e":
                return String(a);
              case "ee":
                return tn(a, 2);
              case "eo":
                return e.ordinalNumber(a, { unit: "day" });
              case "eee":
                return e.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return e.day(o, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return e.day(o, { width: "short", context: "formatting" });
              default:
                return e.day(o, { width: "wide", context: "formatting" });
            }
          },
          c: function (n, t, e, r) {
            const o = n.getDay(),
              a = (o - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "c":
                return String(a);
              case "cc":
                return tn(a, t.length);
              case "co":
                return e.ordinalNumber(a, { unit: "day" });
              case "ccc":
                return e.day(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return e.day(o, { width: "narrow", context: "standalone" });
              case "cccccc":
                return e.day(o, { width: "short", context: "standalone" });
              default:
                return e.day(o, { width: "wide", context: "standalone" });
            }
          },
          i: function (n, t, e) {
            const r = n.getDay(),
              o = 0 === r ? 7 : r;
            switch (t) {
              case "i":
                return String(o);
              case "ii":
                return tn(o, t.length);
              case "io":
                return e.ordinalNumber(o, { unit: "day" });
              case "iii":
                return e.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return e.day(r, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return e.day(r, { width: "short", context: "formatting" });
              default:
                return e.day(r, { width: "wide", context: "formatting" });
            }
          },
          a: function (n, t, e) {
            const r = n.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return e.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return e
                  .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "aaaaa":
                return e.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return e.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          b: function (n, t, e) {
            const r = n.getHours();
            let o;
            switch (
              ((o =
                12 === r
                  ? "noon"
                  : 0 === r
                    ? "midnight"
                    : r / 12 >= 1
                      ? "pm"
                      : "am"),
              t)
            ) {
              case "b":
              case "bb":
                return e.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return e
                  .dayPeriod(o, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "bbbbb":
                return e.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return e.dayPeriod(o, { width: "wide", context: "formatting" });
            }
          },
          B: function (n, t, e) {
            const r = n.getHours();
            let o;
            switch (
              ((o =
                r >= 17
                  ? "evening"
                  : r >= 12
                    ? "afternoon"
                    : r >= 4
                      ? "morning"
                      : "night"),
              t)
            ) {
              case "B":
              case "BB":
              case "BBB":
                return e.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return e.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return e.dayPeriod(o, { width: "wide", context: "formatting" });
            }
          },
          h: function (n, t, e) {
            if ("ho" === t) {
              let t = n.getHours() % 12;
              return (
                0 === t && (t = 12),
                e.ordinalNumber(t, { unit: "hour" })
              );
            }
            return en.h(n, t);
          },
          H: function (n, t, e) {
            return "Ho" === t
              ? e.ordinalNumber(n.getHours(), { unit: "hour" })
              : en.H(n, t);
          },
          K: function (n, t, e) {
            const r = n.getHours() % 12;
            return "Ko" === t
              ? e.ordinalNumber(r, { unit: "hour" })
              : tn(r, t.length);
          },
          k: function (n, t, e) {
            let r = n.getHours();
            return (
              0 === r && (r = 24),
              "ko" === t
                ? e.ordinalNumber(r, { unit: "hour" })
                : tn(r, t.length)
            );
          },
          m: function (n, t, e) {
            return "mo" === t
              ? e.ordinalNumber(n.getMinutes(), { unit: "minute" })
              : en.m(n, t);
          },
          s: function (n, t, e) {
            return "so" === t
              ? e.ordinalNumber(n.getSeconds(), { unit: "second" })
              : en.s(n, t);
          },
          S: function (n, t) {
            return en.S(n, t);
          },
          X: function (n, t, e) {
            const r = n.getTimezoneOffset();
            if (0 === r) return "Z";
            switch (t) {
              case "X":
                return an(r);
              case "XXXX":
              case "XX":
                return sn(r);
              default:
                return sn(r, ":");
            }
          },
          x: function (n, t, e) {
            const r = n.getTimezoneOffset();
            switch (t) {
              case "x":
                return an(r);
              case "xxxx":
              case "xx":
                return sn(r);
              default:
                return sn(r, ":");
            }
          },
          O: function (n, t, e) {
            const r = n.getTimezoneOffset();
            switch (t) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + on(r, ":");
              default:
                return "GMT" + sn(r, ":");
            }
          },
          z: function (n, t, e) {
            const r = n.getTimezoneOffset();
            switch (t) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + on(r, ":");
              default:
                return "GMT" + sn(r, ":");
            }
          },
          t: function (n, t, e) {
            return tn(Math.trunc(+n / 1e3), t.length);
          },
          T: function (n, t, e) {
            return tn(+n, t.length);
          },
        };
      function on(n, t = "") {
        const e = n > 0 ? "-" : "+",
          r = Math.abs(n),
          o = Math.trunc(r / 60),
          a = r % 60;
        return 0 === a ? e + String(o) : e + String(o) + t + tn(a, 2);
      }
      function an(n, t) {
        return n % 60 == 0
          ? (n > 0 ? "-" : "+") + tn(Math.abs(n) / 60, 2)
          : sn(n, t);
      }
      function sn(n, t = "") {
        const e = n > 0 ? "-" : "+",
          r = Math.abs(n);
        return e + tn(Math.trunc(r / 60), 2) + t + tn(r % 60, 2);
      }
      const cn = (n, t) => {
          switch (n) {
            case "P":
              return t.date({ width: "short" });
            case "PP":
              return t.date({ width: "medium" });
            case "PPP":
              return t.date({ width: "long" });
            default:
              return t.date({ width: "full" });
          }
        },
        dn = (n, t) => {
          switch (n) {
            case "p":
              return t.time({ width: "short" });
            case "pp":
              return t.time({ width: "medium" });
            case "ppp":
              return t.time({ width: "long" });
            default:
              return t.time({ width: "full" });
          }
        },
        un = {
          p: dn,
          P: (n, t) => {
            const e = n.match(/(P+)(p+)?/) || [],
              r = e[1],
              o = e[2];
            if (!o) return cn(n, t);
            let a;
            switch (r) {
              case "P":
                a = t.dateTime({ width: "short" });
                break;
              case "PP":
                a = t.dateTime({ width: "medium" });
                break;
              case "PPP":
                a = t.dateTime({ width: "long" });
                break;
              default:
                a = t.dateTime({ width: "full" });
            }
            return a
              .replace("{{date}}", cn(r, t))
              .replace("{{time}}", dn(o, t));
          },
        },
        ln = /^D+$/,
        fn = /^Y+$/,
        pn = ["D", "DD", "YY", "YYYY"];
      function hn(n) {
        return !(
          (!(
            (t = n) instanceof Date ||
            ("object" == typeof t &&
              "[object Date]" === Object.prototype.toString.call(t))
          ) &&
            "number" != typeof n) ||
          isNaN(+U(n))
        );
        var t;
      }
      const mn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        gn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        xn = /^'([^]*?)'?$/,
        bn = /''/g,
        wn = /[a-zA-Z]/;
      function yn(n, t, e) {
        const r = F(),
          o = e?.locale ?? r.locale ?? R,
          a =
            e?.firstWeekContainsDate ??
            e?.locale?.options?.firstWeekContainsDate ??
            r.firstWeekContainsDate ??
            r.locale?.options?.firstWeekContainsDate ??
            1,
          i =
            e?.weekStartsOn ??
            e?.locale?.options?.weekStartsOn ??
            r.weekStartsOn ??
            r.locale?.options?.weekStartsOn ??
            0,
          s = U(n, e?.in);
        if (!hn(s)) throw new RangeError("Invalid time value");
        let c = t
          .match(gn)
          .map((n) => {
            const t = n[0];
            return "p" === t || "P" === t ? (0, un[t])(n, o.formatLong) : n;
          })
          .join("")
          .match(mn)
          .map((n) => {
            if ("''" === n) return { isToken: !1, value: "'" };
            const t = n[0];
            if ("'" === t) return { isToken: !1, value: vn(n) };
            if (rn[t]) return { isToken: !0, value: n };
            if (t.match(wn))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  t +
                  "`",
              );
            return { isToken: !1, value: n };
          });
        o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
        const d = { firstWeekContainsDate: a, weekStartsOn: i, locale: o };
        return c
          .map((r) => {
            if (!r.isToken) return r.value;
            const a = r.value;
            return (
              ((!e?.useAdditionalWeekYearTokens &&
                (function (n) {
                  return fn.test(n);
                })(a)) ||
                (!e?.useAdditionalDayOfYearTokens &&
                  (function (n) {
                    return ln.test(n);
                  })(a))) &&
                (function (n, t, e) {
                  const r = (function (n, t, e) {
                    const r = "Y" === n[0] ? "years" : "days of the month";
                    return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
                  })(n, t, e);
                  if ((console.warn(r), pn.includes(n)))
                    throw new RangeError(r);
                })(a, t, String(n)),
              (0, rn[a[0]])(s, a, o.localize, d)
            );
          })
          .join("");
      }
      function vn(n) {
        const t = n.match(xn);
        return t ? t[1].replace(bn, "'") : n;
      }
      const kn = document.querySelector(".task-heading"),
        Mn = document.querySelector(".task-container"),
        Sn = document.querySelector(".add-task"),
        En = document.querySelector(".task-form"),
        Tn = En.querySelector("form"),
        Pn = Tn.querySelector(".close-task-form"),
        jn = document.querySelector(".tasks"),
        Cn = document.querySelector(".all-tasks"),
        Dn = document.querySelector(".upcoming-tasks"),
        Ln = document.querySelector(".completed-tasks"),
        On = document.querySelector(".task-details"),
        qn = document.querySelector(".details-title"),
        zn = document.querySelector(".details-description"),
        Wn = document.querySelector(".details-date"),
        Yn = document.querySelector(".details-priority"),
        An = document.querySelector(".close-task-details");
      function Nn() {
        if (null === Rn && S === k) return void (Mn.style.display = "none");
        ((Mn.style.display = "flex"), (jn.innerHTML = ""));
        let n = [];
        if (
          (S === y
            ? ((Sn.style.display = "none"),
              (kn.textContent = "All Tasks"),
              (n = E))
            : S === v
              ? ((Sn.style.display = "none"),
                (kn.textContent = "Upcoming Tasks"),
                (n = E.filter((n) => {
                  const t = new Date(),
                    e = new Date();
                  e.setDate(t.getDate() + 30);
                  const r = new Date(n.dueDate);
                  return r >= t && r <= e;
                })))
              : S == M
                ? ((Sn.style.display = "none"),
                  (kn.textContent = "Completed Tasks"),
                  (n = E.filter((n) => n.completed)))
                : S === k &&
                  ((Sn.style.display = "flex"),
                  (n = Rn.tasks),
                  (kn.textContent = Rn.name)),
          0 === n.length)
        ) {
          const n = document.createElement("p");
          return (
            (n.textContent = "No tasks yet. Create one to get started."),
            n.classList.add("empty-message"),
            void jn.appendChild(n)
          );
        }
        n.forEach((n) => {
          const t = document.createElement("div");
          ((t.dataset.id = n.id), t.classList.add("taskRow"));
          const e = document.createElement("input");
          (e.classList.add("done"),
            (e.type = "checkbox"),
            (e.checked = n.completed));
          const r = document.createElement("span");
          r.textContent = n.title;
          const o = document.createElement("span");
          o.textContent = yn(new Date(n.dueDate), "MMM d");
          const a = document.createElement("div");
          (a.classList.add("statusPriority", n.priority),
            (a.title = `${n.priority} priority`));
          const i = document.createElement("button");
          ((i.textContent = "X"),
            i.classList.add("delete-task"),
            t.append(e, r, o, a, i),
            jn.appendChild(t));
        });
      }
      (Cn.addEventListener("click", () => {
        (T(y), Nn());
      }),
        Dn.addEventListener("click", () => {
          (T(v), Nn());
        }),
        Ln.addEventListener("click", () => {
          (T(M), Nn());
        }),
        Sn.addEventListener("click", () => {
          Rn
            ? (En.style.display = "block")
            : (function () {
                const n = document.createElement("div");
                (n.classList.add("toast"),
                  (n.textContent = "Create a project first"),
                  document.body.appendChild(n),
                  requestAnimationFrame(() => {
                    n.classList.add("show");
                  }),
                  setTimeout(() => {
                    (n.classList.remove("show"),
                      n.addEventListener("transitionend", () => {
                        n.remove();
                      }));
                  }, 2500));
              })();
        }),
        Pn.addEventListener("click", () => {
          En.style.display = "none";
        }),
        Tn.addEventListener("submit", (n) => {
          var t, e, r, o;
          (n.preventDefault(),
            (t = Tn.querySelector(".task-title").value),
            (e = Tn.querySelector(".task-description").value),
            (r = Tn.querySelector(".task-due-date").value),
            (o = Tn.querySelector(".task-priority").value),
            (function (n, t) {
              n && (n.tasks.push(t), E.push(t));
            })(Rn, new w(t, e, r, o)),
            b(C),
            Tn.reset(),
            (En.style.display = "none"),
            Nn());
        }),
        jn.addEventListener("click", (n) => {
          if (n.target.classList.contains("delete-task"))
            (P(n.target.closest(".taskRow").dataset.id, Rn.tasks), Nn());
          else if (n.target.classList.contains("done")) {
            const t = n.target.closest(".taskRow").dataset.id;
            ((E.find((n) => n.id === t).completed = n.target.checked), b(C));
          }
        }),
        jn.addEventListener("click", (n) => {
          if (n.target.classList.contains("done")) {
            const t = n.target.closest(".taskRow").dataset.id,
              e = E.find((n) => n.id === t);
            if (!e) return;
            return ((e.completed = n.target.checked), void b(C));
          }
          if (n.target.classList.contains("delete-task"))
            return (
              P(n.target.closest(".taskRow").dataset.id, Rn.tasks),
              void Nn()
            );
          const t = n.target.closest(".taskRow");
          if (!t) return;
          const e = t.dataset.id,
            r = E.find((n) => n.id === e);
          r &&
            (function (n) {
              ((qn.textContent = n.title),
                (zn.textContent = n.description || "No description."),
                (Wn.textContent = `Due: ${yn(new Date(n.dueDate), "MMMM d, yyyy")}`),
                (Yn.textContent = `Priority: ${n.priority}`),
                On.classList.add("show"));
            })(r);
        }),
        An.addEventListener("click", () => {
          On.classList.remove("show");
        }));
      let Rn = null;
      const In = document.querySelector(".add-project"),
        Fn = document.querySelector(".projects"),
        Hn = document.querySelector(".project-form"),
        Bn = Hn.querySelector("form"),
        Qn = document.querySelector(".close-project-form");
      function Un(n) {
        ((Fn.innerHTML = ""),
          n.forEach((n) => {
            const t = document.createElement("div");
            ((t.dataset.id = n.id), t.classList.add("projectRow"));
            const e = document.createElement("span");
            e.textContent = n.name;
            const r = document.createElement("button");
            ((r.textContent = "X"),
              r.classList.add("delete-project"),
              t.appendChild(e),
              t.appendChild(r),
              Fn.appendChild(t));
          }));
      }
      (In.addEventListener("click", () => {
        Hn.style.display = "block";
      }),
        Qn.addEventListener("click", () => {
          Hn.style.display = "none";
        }),
        Bn.addEventListener("submit", (n) => {
          ((Hn.style.display = "none"),
            n.preventDefault(),
            (function (n) {
              const t = new j(n);
              (C.push(t), b(C));
            })(Bn.querySelector(".project-name").value),
            Un(C));
        }),
        Un(C),
        Fn.addEventListener("click", (n) => {
          const t = n.target.closest(".projectRow");
          if (t) {
            if (n.target.classList.contains("delete-project"))
              return (
                (function (n) {
                  const t = C.findIndex((t) => t.id === n);
                  (-1 !== t && C.splice(t, 1), b(C));
                })(t.dataset.id),
                0 === C.length && ((Rn = null), T(k), Nn()),
                void Un(C)
              );
            (T(k), (Rn = C.find((n) => n.id === t.dataset.id)), Nn());
          }
        }));
      const Xn = e.p + "5970744b90c0eaff3f0e.png";
      ((document.querySelector(".logo").src = Xn), Nn());
    },
  };
  const t = {};
  function e(r) {
    const o = t[r];
    if (void 0 !== o) return o.exports;
    const a = (t[r] = { id: r, exports: {} });
    return (n[r](a, a.exports, e), a.exports);
  }
  ((e.m = n),
    (e.n = (n) => {
      const t = n && n.__esModule ? () => n.default : () => n;
      return (e.d(t, { a: t }), t);
    }),
    (e.d = (n, t) => {
      if (Array.isArray(t))
        for (var r = 0; r < t.length;) {
          var o = t[r++],
            a = t[r++];
          e.o(n, o)
            ? 0 === a && r++
            : 0 === a
              ? Object.defineProperty(n, o, { enumerable: !0, value: t[r++] })
              : Object.defineProperty(n, o, { enumerable: !0, get: a });
        }
      else
        for (var o in t)
          e.o(t, o) &&
            !e.o(n, o) &&
            Object.defineProperty(n, o, { enumerable: !0, get: t[o] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.cjs = (n) => {
      const t = { exports: {} };
      return (n.call(t.exports, t, t.exports), t.exports);
    }),
    (e.p = "./"),
    (e.b =
      ("undefined" != typeof document && document.baseURI) ||
      self.location.href),
    (e.nc = void 0),
    e(503));
})();
