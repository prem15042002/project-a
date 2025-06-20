! function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function (a) {
    ! function (a) {
        "use strict";

        function b(b) {
            var c = [{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }];
            return a.each(c, function () {
                b = b ? b.replace(this.re, this.ch) : ""
            }), b
        }

        function c(b) {
            var c = arguments,
                d = b;
            [].shift.apply(c);
            var e, f = this.each(function () {
                var b = a(this);
                if (b.is("select")) {
                    var f = b.data("selectpicker"),
                        g = "object" == typeof d && d;
                    if (f) {
                        if (g)
                            for (var h in g) g.hasOwnProperty(h) && (f.options[h] = g[h])
                    } else {
                        var i = a.extend({}, l.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), g);
                        i.template = a.extend({}, l.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, g.template), b.data("selectpicker", f = new l(this, i))
                    }
                    "string" == typeof d && (e = f[d] instanceof Function ? f[d].apply(f, c) : f.options[d])
                }
            });
            return void 0 !== e ? e : f
        }
        String.prototype.includes || function () {
            var a = {}.toString,
                b = function () {
                    try {
                        var a = {},
                            b = Object.defineProperty,
                            c = b(a, a, a) && b
                    } catch (a) {}
                    return c
                }(),
                c = "".indexOf,
                d = function (b) {
                    if (null == this) throw new TypeError;
                    var d = String(this);
                    if (b && "[object RegExp]" == a.call(b)) throw new TypeError;
                    var e = d.length,
                        f = String(b),
                        g = f.length,
                        h = arguments.length > 1 ? arguments[1] : void 0,
                        i = h ? Number(h) : 0;
                    return i != i && (i = 0), !(g + Math.min(Math.max(i, 0), e) > e) && -1 != c.call(d, f, i)
                };
            b ? b(String.prototype, "includes", {
                value: d,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = d
        }(), String.prototype.startsWith || function () {
            var a = function () {
                    try {
                        var a = {},
                            b = Object.defineProperty,
                            c = b(a, a, a) && b
                    } catch (a) {}
                    return c
                }(),
                b = {}.toString,
                c = function (a) {
                    if (null == this) throw new TypeError;
                    var c = String(this);
                    if (a && "[object RegExp]" == b.call(a)) throw new TypeError;
                    var d = c.length,
                        e = String(a),
                        f = e.length,
                        g = arguments.length > 1 ? arguments[1] : void 0,
                        h = g ? Number(g) : 0;
                    h != h && (h = 0);
                    var i = Math.min(Math.max(h, 0), d);
                    if (f + i > d) return !1;
                    for (var j = -1; ++j < f;)
                        if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
                    return !0
                };
            a ? a(String.prototype, "startsWith", {
                value: c,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = c
        }(), Object.keys || (Object.keys = function (a, b, c) {
            c = [];
            for (b in a) c.hasOwnProperty.call(a, b) && c.push(b);
            return c
        });
        var d = {
            useDefault: !1,
            _set: a.valHooks.select.set
        };
        a.valHooks.select.set = function (b, c) {
            return c && !d.useDefault && a(b).data("selected", !0), d._set.apply(this, arguments)
        };
        var e = null,
            f = function () {
                try {
                    return new Event("change"), !0
                } catch (a) {
                    return !1
                }
            }();
        a.fn.triggerNative = function (a) {
            var b, c = this[0];
            c.dispatchEvent ? (f ? b = new Event(a, {
                bubbles: !0
            }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : c.fireEvent ? (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)) : this.trigger(a)
        }, a.expr.pseudos.icontains = function (b, c, d) {
            var e = a(b).find("a");
            return (e.data("tokens") || e.text()).toString().toUpperCase().includes(d[3].toUpperCase())
        }, a.expr.pseudos.ibegins = function (b, c, d) {
            var e = a(b).find("a");
            return (e.data("tokens") || e.text()).toString().toUpperCase().startsWith(d[3].toUpperCase())
        }, a.expr.pseudos.aicontains = function (b, c, d) {
            var e = a(b).find("a");
            return (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase().includes(d[3].toUpperCase())
        }, a.expr.pseudos.aibegins = function (b, c, d) {
            var e = a(b).find("a");
            return (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase().startsWith(d[3].toUpperCase())
        };
        var g = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            h = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#x27;": "'",
                "&#x60;": "`"
            },
            i = function (a) {
                var b = function (b) {
                        return a[b]
                    },
                    c = "(?:" + Object.keys(a).join("|") + ")",
                    d = RegExp(c),
                    e = RegExp(c, "g");
                return function (a) {
                    return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
                }
            },
            j = i(g),
            k = i(h),
            l = function (b, c) {
                d.useDefault || (a.valHooks.select.set = d._set, d.useDefault = !0), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title"));
                var e = this.options.windowPadding;
                "number" == typeof e && (this.options.windowPadding = [e, e, e, e]), this.val = l.prototype.val, this.render = l.prototype.render, this.refresh = l.prototype.refresh, this.setStyle = l.prototype.setStyle, this.selectAll = l.prototype.selectAll, this.deselectAll = l.prototype.deselectAll, this.destroy = l.prototype.destroy, this.remove = l.prototype.remove, this.show = l.prototype.show, this.hide = l.prototype.hide, this.init()
            };
        l.VERSION = "1.12.4", l.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function (a, b) {
                return 1 == a ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function (a, b) {
                return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-round btn-simple",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0
        }, l.prototype = {
            constructor: l,
            init: function () {
                var b = this,
                    c = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function (a) {
                    a.preventDefault(), b.$button.focus()
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function (a) {
                        b.$menuInner.attr("aria-expanded", !1), b.$element.trigger("hide.bs.select", a)
                    },
                    "hidden.bs.dropdown": function (a) {
                        b.$element.trigger("hidden.bs.select", a)
                    },
                    "show.bs.dropdown": function (a) {
                        b.$menuInner.attr("aria-expanded", !0), b.$element.trigger("show.bs.select", a)
                    },
                    "shown.bs.dropdown": function (a) {
                        b.$element.trigger("shown.bs.select", a)
                    }
                }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
                    b.$button.addClass("bs-invalid"), b.$element.on({
                        "focus.bs.select": function () {
                            b.$button.focus(), b.$element.off("focus.bs.select")
                        },
                        "shown.bs.select": function () {
                            b.$element.val(b.$element.val()).off("shown.bs.select")
                        },
                        "rendered.bs.select": function () {
                            this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select")
                        }
                    }), b.$button.on("blur.bs.select", function () {
                        b.$element.focus().blur(), b.$button.off("blur.bs.select")
                    })
                }), setTimeout(function () {
                    b.$element.trigger("loaded.bs.select")
                })
            },
            createDropdown: function () {
                var b = this.multiple || this.options.showTick ? " show-tick" : "",
                    c = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    d = this.autofocus ? " autofocus" : "",
                    e = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    f = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + j(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
                    g = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                    h = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                    i = '<div class="btn-group bootstrap-select' + b + c + '"><div class="dropdown-menu" role="combobox">' + e + f + g + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + h + "</div></div>";
                return a(i)
            },
            createView: function () {
                var a = this.createDropdown(),
                    b = this.createLi();
                return a.find("ul")[0].innerHTML = b, a
            },
            reloadLi: function () {
                var a = this.createLi();
                this.$menuInner[0].innerHTML = a
            },
            createLi: function () {
                var c = this,
                    d = [],
                    e = 0,
                    f = document.createElement("option"),
                    g = -1,
                    h = function (a, b, c, d) {
                        return "<li" + (void 0 !== c && "" !== c ? ' class="' + c + '"' : "") + (void 0 !== b && null !== b ? ' data-original-index="' + b + '"' : "") + (void 0 !== d && null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>"
                    },
                    i = function (d, e, f, g) {
                        return '<a tabindex="0"' + (void 0 !== e ? ' class="' + e + '"' : "") + (f ? ' style="' + f + '"' : "") + (c.options.liveSearchNormalize ? ' data-normalized-text="' + b(j(a(d).html())) + '"' : "") + (void 0 !== g || null !== g ? ' data-tokens="' + g + '"' : "") + ' role="option">' + d + '<span class="' + c.options.iconBase + " " + c.options.tickIcon + ' check-mark"></span></a>'
                    };
                if (this.options.title && !this.multiple && (g--, !this.$element.find(".bs-title-option").length)) {
                    var k = this.$element[0];
                    f.className = "bs-title-option", f.innerHTML = this.options.title, f.value = "", k.insertBefore(f, k.firstChild);
                    void 0 === a(k.options[k.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected") && (f.selected = !0)
                }
                var l = this.$element.find("option");
                return l.each(function (b) {
                    var f = a(this);
                    if (g++, !f.hasClass("bs-title-option")) {
                        var k, m = this.className || "",
                            n = j(this.style.cssText),
                            o = f.data("content") ? f.data("content") : f.html(),
                            p = f.data("tokens") ? f.data("tokens") : null,
                            q = void 0 !== f.data("subtext") ? '<small class="text-muted">' + f.data("subtext") + "</small>" : "",
                            r = void 0 !== f.data("icon") ? '<span class="' + c.options.iconBase + " " + f.data("icon") + '"></span> ' : "",
                            s = f.parent(),
                            t = "OPTGROUP" === s[0].tagName,
                            u = t && s[0].disabled,
                            v = this.disabled || u;
                        if ("" !== r && v && (r = "<span>" + r + "</span>"), c.options.hideDisabled && (v && !t || u)) return k = f.data("prevHiddenIndex"), f.next().data("prevHiddenIndex", void 0 !== k ? k : b), void g--;
                        if (f.data("content") || (o = r + '<span class="text">' + o + q + "</span>"), t && !0 !== f.data("divider")) {
                            if (c.options.hideDisabled && v) {
                                if (void 0 === s.data("allOptionsDisabled")) {
                                    var w = s.children();
                                    s.data("allOptionsDisabled", w.filter(":disabled").length === w.length)
                                }
                                if (s.data("allOptionsDisabled")) return void g--
                            }
                            var x = " " + s[0].className || "";
                            if (0 === f.index()) {
                                e += 1;
                                var y = s[0].label,
                                    z = void 0 !== s.data("subtext") ? '<small class="text-muted">' + s.data("subtext") + "</small>" : "";
                                y = (s.data("icon") ? '<span class="' + c.options.iconBase + " " + s.data("icon") + '"></span> ' : "") + '<span class="text">' + j(y) + z + "</span>", 0 !== b && d.length > 0 && (g++, d.push(h("", null, "divider", e + "div"))), g++, d.push(h(y, null, "dropdown-header" + x, e))
                            }
                            if (c.options.hideDisabled && v) return void g--;
                            d.push(h(i(o, "opt " + m + x, n, p), b, "", e))
                        } else if (!0 === f.data("divider")) d.push(h("", b, "divider"));
                        else if (!0 === f.data("hidden")) k = f.data("prevHiddenIndex"), f.next().data("prevHiddenIndex", void 0 !== k ? k : b), d.push(h(i(o, m, n, p), b, "hidden is-hidden"));
                        else {
                            var A = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
                            if (!A && c.options.hideDisabled && void 0 !== (k = f.data("prevHiddenIndex"))) {
                                var B = l.eq(k)[0].previousElementSibling;
                                B && "OPTGROUP" === B.tagName && !B.disabled && (A = !0)
                            }
                            A && (g++, d.push(h("", null, "divider", e + "div"))), d.push(h(i(o, m, n, p), b))
                        }
                        c.liObj[b] = g
                    }
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), d.join("")
            },
            findLis: function () {
                return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
            },
            render: function (b) {
                var c, d = this,
                    e = this.$element.find("option");
                !1 !== b && e.each(function (a) {
                    var b = d.findLis().eq(d.liObj[a]);
                    d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b)
                }), this.togglePlaceholder(), this.tabIndex();
                var f = e.map(function () {
                        if (this.selected) {
                            if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                            var b, c = a(this),
                                e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
                            return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", void 0 !== c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content").toString() : e + c.html() + b
                        }
                    }).toArray(),
                    g = this.multiple ? f.join(this.options.multipleSeparator) : f[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var h = this.options.selectedTextFormat.split(">");
                    if (h.length > 1 && f.length > h[1] || 1 == h.length && f.length >= 2) {
                        c = this.options.hideDisabled ? ", [disabled]" : "";
                        var i = e.not('[data-divider="true"], [data-hidden="true"]' + c).length;
                        g = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(f.length, i) : this.options.countSelectedText).replace("{0}", f.length.toString()).replace("{1}", i.toString())
                    }
                }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (g = this.options.title), g || (g = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", k(a.trim(g.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(g), this.$element.trigger("rendered.bs.select")
            },
            setStyle: function (a, b) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var c = a || this.options.style;
                "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c))
            },
            liHeight: function (b) {
                if (b || !1 !== this.options.size && !this.sizeInfo) {
                    var c = document.createElement("div"),
                        d = document.createElement("div"),
                        e = document.createElement("ul"),
                        f = document.createElement("li"),
                        g = document.createElement("li"),
                        h = document.createElement("a"),
                        i = document.createElement("span"),
                        j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        k = this.options.liveSearch ? document.createElement("div") : null,
                        l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
                        var n = document.createElement("input");
                        k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k)
                    }
                    l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);
                    var o = h.offsetHeight,
                        p = j ? j.offsetHeight : 0,
                        q = k ? k.offsetHeight : 0,
                        r = l ? l.offsetHeight : 0,
                        s = m ? m.offsetHeight : 0,
                        t = a(f).outerHeight(!0),
                        u = "function" == typeof getComputedStyle && getComputedStyle(d),
                        v = u ? null : a(d),
                        w = {
                            vert: parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
                            horiz: parseInt(u ? u.paddingLeft : v.css("paddingLeft")) + parseInt(u ? u.paddingRight : v.css("paddingRight")) + parseInt(u ? u.borderLeftWidth : v.css("borderLeftWidth")) + parseInt(u ? u.borderRightWidth : v.css("borderRightWidth"))
                        },
                        x = {
                            vert: w.vert + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2,
                            horiz: w.horiz + parseInt(u ? u.marginLeft : v.css("marginLeft")) + parseInt(u ? u.marginRight : v.css("marginRight")) + 2
                        };
                    document.body.removeChild(c), this.sizeInfo = {
                        liHeight: o,
                        headerHeight: p,
                        searchHeight: q,
                        actionsHeight: r,
                        doneButtonHeight: s,
                        dividerHeight: t,
                        menuPadding: w,
                        menuExtras: x
                    }
                }
            },
            setSize: function () {
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                    var b, c, d, e, f, g, h, i, j = this,
                        k = this.$menu,
                        l = this.$menuInner,
                        m = a(window),
                        n = this.$newElement[0].offsetHeight,
                        o = this.$newElement[0].offsetWidth,
                        p = this.sizeInfo.liHeight,
                        q = this.sizeInfo.headerHeight,
                        r = this.sizeInfo.searchHeight,
                        s = this.sizeInfo.actionsHeight,
                        t = this.sizeInfo.doneButtonHeight,
                        u = this.sizeInfo.dividerHeight,
                        v = this.sizeInfo.menuPadding,
                        w = this.sizeInfo.menuExtras,
                        x = this.options.hideDisabled ? ".disabled" : "",
                        y = function () {
                            var b, c = j.$newElement.offset(),
                                d = a(j.options.container);
                            j.options.container && !d.is("body") ? (b = d.offset(), b.top += parseInt(d.css("borderTopWidth")), b.left += parseInt(d.css("borderLeftWidth"))) : b = {
                                top: 0,
                                left: 0
                            };
                            var e = j.options.windowPadding;
                            f = c.top - b.top - m.scrollTop(), g = m.height() - f - n - b.top - e[2], h = c.left - b.left - m.scrollLeft(), i = m.width() - h - o - b.left - e[1], f -= e[0], h -= e[3]
                        };
                    if (y(), "auto" === this.options.size) {
                        var z = function () {
                            var m, n = function (b, c) {
                                    return function (d) {
                                        return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b))
                                    }
                                },
                                u = j.$menuInner[0].getElementsByTagName("li"),
                                x = Array.prototype.filter ? Array.prototype.filter.call(u, n("hidden", !1)) : j.$lis.not(".hidden"),
                                z = Array.prototype.filter ? Array.prototype.filter.call(x, n("dropdown-header", !0)) : x.filter(".dropdown-header");
                            y(), b = g - w.vert, c = i - w.horiz, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height"), k.data("width") || k.data("width", k.width()), e = k.data("width")) : (d = k.height(), e = k.width()), j.options.dropupAuto && j.$newElement.toggleClass("dropup", f > g && b - w.vert < d), j.$newElement.hasClass("dropup") && (b = f - w.vert), "auto" === j.options.dropdownAlignRight && k.toggleClass("dropdown-menu-right", h > i && c - w.horiz < e - o), m = x.length + z.length > 3 ? 3 * p + w.vert - 2 : 0, k.css({
                                "max-height": b + "px",
                                overflow: "hidden",
                                "min-height": m + q + r + s + t + "px"
                            }), l.css({
                                "max-height": b - q - r - s - t - v.vert + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(m - v.vert, 0) + "px"
                            })
                        };
                        z(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", z), m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", z)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(x).length > this.options.size) {
                        var A = this.$lis.not(".divider").not(x).children().slice(0, this.options.size).last().parent().index(),
                            B = this.$lis.slice(0, A + 1).filter(".divider").length;
                        b = p * this.options.size + B * u + v.vert, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height")) : d = k.height(), j.options.dropupAuto && this.$newElement.toggleClass("dropup", f > g && b - w.vert < d), k.css({
                            "max-height": b + q + r + s + t + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }), l.css({
                            "max-height": b - v.vert + "px",
                            "overflow-y": "auto",
                            "min-height": ""
                        })
                    }
                }
            },
            setWidth: function () {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var a = this.$menu.parent().clone().appendTo("body"),
                        b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
                        c = a.children(".dropdown-menu").outerWidth(),
                        d = b.css("width", "auto").children("button").outerWidth();
                    a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px")
                } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function () {
                this.$bsContainer = a('<div class="bs-container" />');
                var b, c, d, e = this,
                    f = a(this.options.container),
                    g = function (a) {
                        e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), f.is("body") ? c = {
                            top: 0,
                            left: 0
                        } : (c = f.offset(), c.top += parseInt(f.css("borderTopWidth")) - f.scrollTop(), c.left += parseInt(f.css("borderLeftWidth")) - f.scrollLeft()), d = a.hasClass("dropup") ? 0 : a[0].offsetHeight, e.$bsContainer.css({
                            top: b.top - c.top + d,
                            left: b.left - c.left,
                            width: a[0].offsetWidth
                        })
                    };
                this.$button.on("click", function () {
                    var b = a(this);
                    e.isDisabled() || (g(e.$newElement), e.$bsContainer.appendTo(e.options.container).toggleClass("open", !b.hasClass("open")).append(e.$menu))
                }), a(window).on("resize scroll", function () {
                    g(e.$newElement)
                }), this.$element.on("hide.bs.select", function () {
                    e.$menu.data("height", e.$menu.height()), e.$bsContainer.detach()
                })
            },
            setSelected: function (a, b, c) {
                c || (this.togglePlaceholder(), c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b).find("a").attr("aria-selected", b)
            },
            setDisabled: function (a, b, c) {
                c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1)
            },
            isDisabled: function () {
                return this.$element[0].disabled
            },
            checkDisabled: function () {
                var a = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
                    return !a.isDisabled()
                })
            },
            togglePlaceholder: function () {
                var a = this.$element.val();
                this.$button.toggleClass("bs-placeholder", null === a || "" === a || a.constructor === Array && 0 === a.length)
            },
            tabIndex: function () {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            },
            clickListener: function () {
                var b = this,
                    c = a(document);
                c.data("spaceSelect", !1), this.$button.on("keyup", function (a) {
                    /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1))
                }), this.$button.on("click", function () {
                    b.setSize()
                }), this.$element.on("shown.bs.select", function () {
                    if (b.options.liveSearch || b.multiple) {
                        if (!b.multiple) {
                            var a = b.liObj[b.$element[0].selectedIndex];
                            if ("number" != typeof a || !1 === b.options.size) return;
                            var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
                            c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c
                        }
                    } else b.$menuInner.find(".selected a").focus()
                }), this.$menuInner.on("click", "li a", function (c) {
                    var d = a(this),
                        f = d.parent().data("originalIndex"),
                        g = b.$element.val(),
                        h = b.$element.prop("selectedIndex"),
                        i = !0;
                    if (b.multiple && 1 !== b.options.maxOptions && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
                        var j = b.$element.find("option"),
                            k = j.eq(f),
                            l = k.prop("selected"),
                            m = k.parent("optgroup"),
                            n = b.options.maxOptions,
                            o = m.data("maxOptions") || !1;
                        if (b.multiple) {
                            if (k.prop("selected", !l), b.setSelected(f, !l), d.blur(), !1 !== n || !1 !== o) {
                                var p = n < j.filter(":selected").length,
                                    q = o < m.find("option:selected").length;
                                if (n && p || o && q)
                                    if (n && 1 == n) j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(f, !0);
                                    else if (o && 1 == o) {
                                    m.find("option:selected").prop("selected", !1), k.prop("selected", !0);
                                    var r = d.parent().data("optgroup");
                                    b.$menuInner.find('[data-optgroup="' + r + '"]').removeClass("selected"), b.setSelected(f, !0)
                                } else {
                                    var s = "string" == typeof b.options.maxOptionsText ? [b.options.maxOptionsText, b.options.maxOptionsText] : b.options.maxOptionsText,
                                        t = "function" == typeof s ? s(n, o) : s,
                                        u = t[0].replace("{n}", n),
                                        v = t[1].replace("{n}", o),
                                        w = a('<div class="notify"></div>');
                                    t[2] && (u = u.replace("{var}", t[2][n > 1 ? 0 : 1]), v = v.replace("{var}", t[2][o > 1 ? 0 : 1])), k.prop("selected", !1), b.$menu.append(w), n && p && (w.append(a("<div>" + u + "</div>")), i = !1, b.$element.trigger("maxReached.bs.select")), o && q && (w.append(a("<div>" + v + "</div>")), i = !1, b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                                        b.setSelected(f, !1)
                                    }, 10), w.delay(750).fadeOut(300, function () {
                                        a(this).remove()
                                    })   
                                }
                            }
                        } else j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), b.setSelected(f, !0);
                        !b.multiple || b.multiple && 1 === b.options.maxOptions ? b.$button.focus() : b.options.liveSearch && b.$searchbox.focus(), i && (g != b.$element.val() && b.multiple || h != b.$element.prop("selectedIndex") && !b.multiple) && (e = [f, k.prop("selected"), l], b.$element.triggerNative("change"))
                    }
                }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (c) {
                    c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus())
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function (a) {
                    a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus()
                }), this.$menu.on("click", ".popover-title .close", function () {
                    b.$button.click()
                }), this.$searchbox.on("click", function (a) {
                    a.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function (c) {
                    b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll()
                }), this.$element.change(function () {
                    b.render(!1), b.$element.trigger("changed.bs.select", e), e = null
                })
            },
            liveSearchListener: function () {
                var c = this,
                    d = a('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api", function () {
                    c.$menuInner.find(".active").removeClass("active"), c.$searchbox.val() && (c.$searchbox.val(""), c.$lis.not(".is-hidden").removeClass("hidden"), d.parent().length && d.remove()), c.multiple || c.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
                        c.$searchbox.focus()
                    }, 10)
                }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (a) {
                    a.stopPropagation()
                }), this.$searchbox.on("input propertychange", function () {
                    if (c.$lis.not(".is-hidden").removeClass("hidden"), c.$lis.filter(".active").removeClass("active"), d.remove(), c.$searchbox.val()) {
                        var e, f = c.$lis.not(".is-hidden, .divider, .dropdown-header");
                        if (e = c.options.liveSearchNormalize ? f.not(":a" + c._searchStyle() + '("' + b(c.$searchbox.val()) + '")') : f.not(":" + c._searchStyle() + '("' + c.$searchbox.val() + '")'), e.length === f.length) d.html(c.options.noneResultsText.replace("{0}", '"' + j(c.$searchbox.val()) + '"')), c.$menuInner.append(d), c.$lis.addClass("hidden");
                        else {
                            e.addClass("hidden");
                            var g, h = c.$lis.not(".hidden");
                            h.each(function (b) {
                                var c = a(this);
                                c.hasClass("divider") ? void 0 === g ? c.addClass("hidden") : (g && g.addClass("hidden"), g = c) : c.hasClass("dropdown-header") && h.eq(b + 1).data("optgroup") !== c.data("optgroup") ? c.addClass("hidden") : g = null
                            }), g && g.addClass("hidden"), f.not(".hidden").first().addClass("active"), c.$menuInner.scrollTop(0)
                        }
                    }
                })
            },
            _searchStyle: function () {
                return {
                    begins: "ibegins",
                    startsWith: "ibegins"
                } [this.options.liveSearchStyle] || "icontains"
            },
            val: function (a) {
                return void 0 !== a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val()
            },
            changeAll: function (b) {
                if (this.multiple) {
                    void 0 === b && (b = !0), this.findLis();
                    var c = this.$element.find("option"),
                        d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
                        e = d.length,
                        f = [];
                    if (b) {
                        if (d.filter(".selected").length === d.length) return
                    } else if (0 === d.filter(".selected").length) return;
                    d.toggleClass("selected", b);
                    for (var g = 0; g < e; g++) {
                        var h = d[g].getAttribute("data-original-index");
                        f[f.length] = c.eq(h)[0]
                    }
                    a(f).prop("selected", b), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change")
                }
            },
            selectAll: function () {
                return this.changeAll(!0)
            },
            deselectAll: function () {
                return this.changeAll(!1)
            },
            toggle: function (a) {
                a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click")
            },
            keydown: function (b) {
                var c, d, e, f, g = a(this),
                    h = g.is("input") ? g.parent().parent() : g.parent(),
                    i = h.data("this"),
                    j = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                    k = {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9"
                    };
                if (!(f = i.$newElement.hasClass("open")) && (b.keyCode >= 48 && b.keyCode <= 57 || b.keyCode >= 96 && b.keyCode <= 105 || b.keyCode >= 65 && b.keyCode <= 90)) return i.options.container ? i.$button.trigger("click") : (i.setSize(), i.$menu.parent().addClass("open"), f = !0), void i.$searchbox.focus();
                if (i.options.liveSearch && /(^9$|27)/.test(b.keyCode.toString(10)) && f && (b.preventDefault(), b.stopPropagation(), i.$menuInner.click(), i.$button.focus()), /(38|40)/.test(b.keyCode.toString(10))) {
                    if (c = i.$lis.filter(j), !c.length) return;
                    d = i.options.liveSearch ? c.index(c.filter(".active")) : c.index(c.find("a").filter(":focus").parent()), e = i.$menuInner.data("prevIndex"), 38 == b.keyCode ? (!i.options.liveSearch && d != e || -1 == d || d--, d < 0 && (d += c.length)) : 40 == b.keyCode && ((i.options.liveSearch || d == e) && d++, d %= c.length), i.$menuInner.data("prevIndex", d), i.options.liveSearch ? (b.preventDefault(), g.hasClass("dropdown-toggle") || (c.removeClass("active").eq(d).addClass("active").children("a").focus(), g.focus())) : c.eq(d).children("a").focus()
                } else if (!g.is("input")) {
                    var l, m, n = [];
                    c = i.$lis.filter(j), c.each(function (c) {
                        a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == k[b.keyCode] && n.push(c)
                    }), l = a(document).data("keycount"), l++, a(document).data("keycount", l), m = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), m != k[b.keyCode] ? (l = 1, a(document).data("keycount", l)) : l >= n.length && (a(document).data("keycount", 0), l > n.length && (l = 1)), c.eq(n[l - 1]).children("a").focus()
                }
                if ((/(13|32)/.test(b.keyCode.toString(10)) || /(^9$)/.test(b.keyCode.toString(10)) && i.options.selectOnTab) && f) {
                    if (/(32)/.test(b.keyCode.toString(10)) || b.preventDefault(), i.options.liveSearch) /(32)/.test(b.keyCode.toString(10)) || (i.$menuInner.find(".active a").click(), g.focus());
                    else {
                        var o = a(":focus");
                        o.click(), o.focus(), b.preventDefault(), a(document).data("spaceSelect", !0)
                    }
                    a(document).data("keycount", 0)
                }(/(^9$|27)/.test(b.keyCode.toString(10)) && f && (i.multiple || i.options.liveSearch) || /(27)/.test(b.keyCode.toString(10)) && !f) && (i.$menu.parent().removeClass("open"), i.options.container && i.$newElement.removeClass("open"), i.$button.focus())
            },
            mobile: function () {
                this.$element.addClass("mobile-device")
            },
            refresh: function () {
                this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
            },
            hide: function () {
                this.$newElement.hide()
            },
            show: function () {
                this.$newElement.show()
            },
            remove: function () {
                this.$newElement.remove(), this.$element.remove()
            },
            destroy: function () {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var m = a.fn.selectpicker;
        a.fn.selectpicker = c, a.fn.selectpicker.Constructor = l, a.fn.selectpicker.noConflict = function () {
            return a.fn.selectpicker = m, this
        }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', l.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (a) {
            a.stopPropagation()
        }), a(window).on("load.bs.select.data-api", function () {
            a(".selectpicker").each(function () {
                var b = a(this);
                c.call(b, b.data())
            })
        })
    }(a)
}),
function (a) {
    a.fn.extend({
        slimScroll: function (b) {
            var c = {
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "0",
                    railBorderRadius: "0"
                },
                d = a.extend(c, b);
            return this.each(function () {
                function c(b) {
                    if (i) {
                        var b = b || window.event,
                            c = 0;
                        b.wheelDelta && (c = -b.wheelDelta / 120), b.detail && (c = b.detail / 3);
                        var f = b.target || b.srcTarget || b.srcElement;
                        a(f).closest("." + d.wrapperClass).is(u.parent()) && e(c, !0), b.preventDefault && !s && b.preventDefault(), s || (b.returnValue = !1)
                    }
                }

                function e(a, b, c) {
                    s = !1;
                    var e = a,
                        f = u.outerHeight() - z.outerHeight();
                    if (b && (e = parseInt(z.css("top")) + a * parseInt(d.wheelStep) / 100 * z.outerHeight(), e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), z.css({
                            top: e + "px"
                        })), o = parseInt(z.css("top")) / (u.outerHeight() - z.outerHeight()), e = o * (u[0].scrollHeight - u.outerHeight()), c) {
                        e = a;
                        var i = e / u[0].scrollHeight * u.outerHeight();
                        i = Math.min(Math.max(i, 0), f), z.css({
                            top: i + "px"
                        })
                    }
                    u.scrollTop(e), u.trigger("slimscrolling", ~~e), g(), h()
                }

                function f() {
                    n = Math.max(u.outerHeight() / u[0].scrollHeight * u.outerHeight(), r), z.css({
                        height: n + "px"
                    });
                    var a = n == u.outerHeight() ? "none" : "block";
                    z.css({
                        display: a
                    })
                }

                function g() {
                    if (f(), clearTimeout(l), o == ~~o) {
                        if (s = d.allowPageScroll, p != o) {
                            var a = 0 == ~~o ? "top" : "bottom";
                            u.trigger("slimscroll", a)
                        }
                    } else s = !1;
                    if (p = o, n >= u.outerHeight()) return void(s = !0);
                    z.stop(!0, !0).fadeIn("fast"), d.railVisible && y.stop(!0, !0).fadeIn("fast")
                }

                function h() {
                    d.alwaysVisible || (l = setTimeout(function () {
                        d.disableFadeOut && i || j || k || (z.fadeOut("slow"), y.fadeOut("slow"))
                    }, 1e3))
                }
                var i, j, k, l, m, n, o, p, q = "<div></div>",
                    r = 30,
                    s = !1,
                    u = a(this);
                if (u.parent().hasClass(d.wrapperClass)) {
                    var v = u.scrollTop();
                    if (z = u.closest("." + d.barClass), y = u.closest("." + d.railClass), f(), a.isPlainObject(b)) {
                        if ("height" in b && "auto" == b.height) {
                            u.parent().css("height", "auto"), u.css("height", "auto");
                            var w = u.parent().parent().height();
                            u.parent().css("height", w), u.css("height", w)
                        }
                        if ("scrollTo" in b) v = parseInt(d.scrollTo);
                        else if ("scrollBy" in b) v += parseInt(d.scrollBy);
                        else if ("destroy" in b) return z.remove(), y.remove(), void u.unwrap();
                        e(v, !1, !0)
                    }
                } else if (!(a.isPlainObject(b) && "destroy" in b)) {
                    d.height = "auto" == d.height ? u.parent().height() : d.height;
                    var x = a(q).addClass(d.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: d.width,
                        height: d.height
                    });
                    u.css({
                        overflow: "hidden",
                        width: d.width,
                        height: d.height
                    });
                    var y = a(q).addClass(d.railClass).css({
                            width: d.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: d.alwaysVisible && d.railVisible ? "block" : "none",
                            "border-radius": d.railBorderRadius,
                            background: d.railColor,
                            opacity: d.railOpacity,
                            zIndex: 90
                        }),
                        z = a(q).addClass(d.barClass).css({
                            background: d.color,
                            width: d.size,
                            position: "absolute",
                            top: 0,
                            opacity: d.opacity,
                            display: d.alwaysVisible ? "block" : "none",
                            "border-radius": d.borderRadius,
                            BorderRadius: d.borderRadius,
                            MozBorderRadius: d.borderRadius,
                            WebkitBorderRadius: d.borderRadius,
                            zIndex: 99
                        }),
                        A = "right" == d.position ? {
                            right: d.distance
                        } : {
                            left: d.distance
                        };
                    y.css(A), z.css(A), u.wrap(x), u.parent().append(z), u.parent().append(y), d.railDraggable && z.bind("mousedown", function (b) {
                            var c = a(document);
                            return k = !0, t = parseFloat(z.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function (a) {
                                currTop = t + a.pageY - pageY, z.css("top", currTop), e(0, z.position().top, !1)
                            }), c.bind("mouseup.slimscroll", function (a) {
                                k = !1, h(), c.unbind(".slimscroll")
                            }), !1
                        }).bind("selectstart.slimscroll", function (a) {
                            return a.stopPropagation(), a.preventDefault(), !1
                        }), y.hover(function () {
                            g()
                        }, function () {
                            h()
                        }), z.hover(function () {
                            j = !0
                        }, function () {
                            j = !1
                        }), u.hover(function () {
                            i = !0, g(), h()
                        }, function () {
                            i = !1, h()
                        }), u.bind("touchstart", function (a, b) {
                            a.originalEvent.touches.length && (m = a.originalEvent.touches[0].pageY)
                        }), u.bind("touchmove", function (a) {
                            if (s || a.originalEvent.preventDefault(), a.originalEvent.touches.length) {
                                e((m - a.originalEvent.touches[0].pageY) / d.touchScrollStep, !0), m = a.originalEvent.touches[0].pageY
                            }
                        }), f(), "bottom" === d.start ? (z.css({
                            top: u.outerHeight() - z.outerHeight()
                        }), e(0, !0)) : "top" !== d.start && (e(a(d.start).position().top, null, !0), d.alwaysVisible || z.hide()),
                        function (a) {
                            window.addEventListener ? (a.addEventListener("DOMMouseScroll", c, !1), a.addEventListener("mousewheel", c, !1)) : document.attachEvent("onmousewheel", c)
                        }(this)
                }
            }), this
        }
    }), a.fn.extend({
        slimscroll: a.fn.slimScroll
    })
}(jQuery),
function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function () {
        return b.apply(a)
    }) : "object" == typeof exports ? module.exports = b.call(a) : a.Waves = b.call(a)
}("object" == typeof global ? global : this, function () {
    "use strict";

    function a(a) {
        return null !== a && a === a.window
    }

    function b(b) {
        return a(b) ? b : 9 === b.nodeType && b.defaultView
    }

    function c(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }

    function d(a) {
        return c(a) && a.nodeType > 0
    }

    function e(a) {
        var b = m.call(a);
        return "[object String]" === b ? l(a) : c(a) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(b) && a.hasOwnProperty("length") ? a : d(a) ? [a] : []
    }

    function f(a) {
        var c, d, e = {
                top: 0,
                left: 0
            },
            f = a && a.ownerDocument;
        return c = f.documentElement, void 0 !== a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = b(f), {
            top: e.top + d.pageYOffset - c.clientTop,
            left: e.left + d.pageXOffset - c.clientLeft
        }
    }

    function g(a) {
        var b = "";
        for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
        return b
    }

    function h(a, b, c) {
        if (c) {
            c.classList.remove("waves-rippling");
            var d = c.getAttribute("data-x"),
                e = c.getAttribute("data-y"),
                f = c.getAttribute("data-scale"),
                h = c.getAttribute("data-translate"),
                i = Date.now() - Number(c.getAttribute("data-hold")),
                j = 350 - i;
            j < 0 && (j = 0), "mousemove" === a.type && (j = 150);
            var k = "mousemove" === a.type ? 2500 : o.duration;
            setTimeout(function () {
                var a = {
                    top: e + "px",
                    left: d + "px",
                    opacity: "0",
                    "-webkit-transition-duration": k + "ms",
                    "-moz-transition-duration": k + "ms",
                    "-o-transition-duration": k + "ms",
                    "transition-duration": k + "ms",
                    "-webkit-transform": f + " " + h,
                    "-moz-transform": f + " " + h,
                    "-ms-transform": f + " " + h,
                    "-o-transform": f + " " + h,
                    transform: f + " " + h
                };
                c.setAttribute("style", g(a)), setTimeout(function () {
                    try {
                        b.removeChild(c)
                    } catch (a) {
                        return !1
                    }
                }, k)
            }, j)
        }
    }

    function i(a) {
        if (!1 === q.allowEvent(a)) return null;
        for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
            if (c.classList.contains("waves-effect") && !(c instanceof SVGElement)) {
                b = c;
                break
            }
            c = c.parentElement
        }
        return b
    }

    function j(a) {
        var b = i(a);
        if (null !== b) {
            if (b.disabled || b.getAttribute("disabled") || b.classList.contains("disabled")) return;
            if (q.registerEvent(a), "touchstart" === a.type && o.delay) {
                var c = !1,
                    d = setTimeout(function () {
                        d = null, o.show(a, b)
                    }, o.delay),
                    e = function (e) {
                        d && (clearTimeout(d), d = null, o.show(a, b)), c || (c = !0, o.hide(e, b))
                    },
                    f = function (a) {
                        d && (clearTimeout(d), d = null), e(a)
                    };
                b.addEventListener("touchmove", f, !1), b.addEventListener("touchend", e, !1), b.addEventListener("touchcancel", e, !1)
            } else o.show(a, b), n && (b.addEventListener("touchend", o.hide, !1), b.addEventListener("touchcancel", o.hide, !1)), b.addEventListener("mouseup", o.hide, !1), b.addEventListener("mouseleave", o.hide, !1)
        }
    }
    var k = k || {},
        l = document.querySelectorAll.bind(document),
        m = Object.prototype.toString,
        n = "ontouchstart" in window,
        o = {
            duration: 750,
            delay: 200,
            show: function (a, b, c) {
                if (2 === a.button) return !1;
                b = b || this;
                var d = document.createElement("div");
                d.className = "waves-ripple waves-rippling", b.appendChild(d);
                var e = f(b),
                    h = 0,
                    i = 0;
                "touches" in a && a.touches.length ? (h = a.touches[0].pageY - e.top, i = a.touches[0].pageX - e.left) : (h = a.pageY - e.top, i = a.pageX - e.left), i = i >= 0 ? i : 0, h = h >= 0 ? h : 0;
                var j = "scale(" + b.clientWidth / 100 * 3 + ")",
                    k = "translate(0,0)";
                c && (k = "translate(" + c.x + "px, " + c.y + "px)"), d.setAttribute("data-hold", Date.now()), d.setAttribute("data-x", i), d.setAttribute("data-y", h), d.setAttribute("data-scale", j), d.setAttribute("data-translate", k);
                var l = {
                    top: h + "px",
                    left: i + "px"
                };
                d.classList.add("waves-notransition"), d.setAttribute("style", g(l)), d.classList.remove("waves-notransition"), l["-webkit-transform"] = j + " " + k, l["-moz-transform"] = j + " " + k, l["-ms-transform"] = j + " " + k, l["-o-transform"] = j + " " + k, l.transform = j + " " + k, l.opacity = "1";
                var m = "mousemove" === a.type ? 2500 : o.duration;
                l["-webkit-transition-duration"] = m + "ms", l["-moz-transition-duration"] = m + "ms", l["-o-transition-duration"] = m + "ms", l["transition-duration"] = m + "ms", d.setAttribute("style", g(l))
            },
            hide: function (a, b) {
                b = b || this;
                for (var c = b.getElementsByClassName("waves-rippling"), d = 0, e = c.length; d < e; d++) h(a, b, c[d])
            }
        },
        p = {
            input: function (a) {
                var b = a.parentNode;
                if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
                    var c = document.createElement("i");
                    c.className = a.className + " waves-input-wrapper", a.className = "waves-button-input", b.replaceChild(c, a), c.appendChild(a);
                    var d = window.getComputedStyle(a, null),
                        e = d.color,
                        f = d.backgroundColor;
                    c.setAttribute("style", "color:" + e + ";background:" + f), a.setAttribute("style", "background-color:rgba(0,0,0,0);")
                }
            },
            img: function (a) {
                var b = a.parentNode;
                if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
                    var c = document.createElement("i");
                    b.replaceChild(c, a), c.appendChild(a)
                }
            }
        },
        q = {
            touches: 0,
            allowEvent: function (a) {
                var b = !0;
                return /^(mousedown|mousemove)$/.test(a.type) && q.touches && (b = !1), b
            },
            registerEvent: function (a) {
                var b = a.type;
                "touchstart" === b ? q.touches += 1 : /^(touchend|touchcancel)$/.test(b) && setTimeout(function () {
                    q.touches && (q.touches -= 1)
                }, 500)
            }
        };
    return k.init = function (a) {
        var b = document.body;
        a = a || {}, "duration" in a && (o.duration = a.duration), "delay" in a && (o.delay = a.delay), n && (b.addEventListener("touchstart", j, !1), b.addEventListener("touchcancel", q.registerEvent, !1), b.addEventListener("touchend", q.registerEvent, !1)), b.addEventListener("mousedown", j, !1)
    }, k.attach = function (a, b) {
        a = e(a), "[object Array]" === m.call(b) && (b = b.join(" ")), b = b ? " " + b : "";
        for (var c, d, f = 0, g = a.length; f < g; f++) c = a[f], d = c.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(d) && (p[d](c), c = c.parentElement), -1 === c.className.indexOf("waves-effect") && (c.className += " waves-effect" + b)
    }, k.ripple = function (a, b) {
        a = e(a);
        var c = a.length;
        if (b = b || {}, b.wait = b.wait || 0, b.position = b.position || null, c)
            for (var d, g, h, i = {}, j = 0, k = {
                    type: "mousedown",
                    button: 1
                }; j < c; j++)
                if (d = a[j], g = b.position || {
                        x: d.clientWidth / 2,
                        y: d.clientHeight / 2
                    }, h = f(d), i.x = h.left + g.x, i.y = h.top + g.y, k.pageX = i.x, k.pageY = i.y, o.show(k, d), b.wait >= 0 && null !== b.wait) {
                    var l = {
                        type: "mouseup",
                        button: 1
                    };
                    setTimeout(function (a, b) {
                        return function () {
                            o.hide(a, b)
                        }
                    }(l, d), b.wait)
                }
    }, k.calm = function (a) {
        a = e(a);
        for (var b = {
                type: "mouseup",
                button: 1
            }, c = 0, d = a.length; c < d; c++) o.hide(b, a[c])
    }, k.displayEffect = function (a) {
        console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), k.init(a)
    }, k
}),
function () {
    "use strict";
    var a = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
        b = "undefined" != typeof module && module.exports,
        c = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        d = function () {
            for (var b, c = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], d = 0, e = c.length, f = {}; d < e; d++)
                if ((b = c[d]) && b[1] in a) {
                    for (d = 0; d < b.length; d++) f[c[0][d]] = b[d];
                    return f
                } return !1
        }(),
        e = {
            change: d.fullscreenchange,
            error: d.fullscreenerror
        },
        f = {
            request: function (b) {
                return new Promise(function (e) {
                    var f = d.requestFullscreen,
                        g = function () {
                            this.off("change", g), e()
                        }.bind(this);
                    b = b || a.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? b[f]() : b[f](c ? Element.ALLOW_KEYBOARD_INPUT : {}), this.on("change", g)
                }.bind(this))
            },
            exit: function () {
                return new Promise(function (b) {
                    if (!this.isFullscreen) return void b();
                    var c = function () {
                        this.off("change", c), b()
                    }.bind(this);
                    a[d.exitFullscreen](), this.on("change", c)
                }.bind(this))
            },
            toggle: function (a) {
                return this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function (a) {
                this.on("change", a)
            },
            onerror: function (a) {
                this.on("error", a)
            },
            on: function (b, c) {
                var d = e[b];
                d && a.addEventListener(d, c, !1)
            },
            off: function (b, c) {
                var d = e[b];
                d && a.removeEventListener(d, c, !1)
            },
            raw: d
        };
    if (!d) return void(b ? module.exports = !1 : window.screenfull = !1);
    Object.defineProperties(f, {
        isFullscreen: {
            get: function () {
                return Boolean(a[d.fullscreenElement])
            }
        },
        element: {
            enumerable: !0,
            get: function () {
                return a[d.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function () {
                return Boolean(a[d.fullscreenEnabled])
            }
        }
    }), b ? module.exports = f : window.screenfull = f
}(),
function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    function b(a, b) {
        return a.toFixed(b.decimals)
    }
    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, this.dataOptions(), d), this.init()
    };
    c.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: b,
        onUpdate: null,
        onComplete: null
    }, c.prototype.init = function () {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, c.prototype.dataOptions = function () {
        var a = {
                from: this.$element.data("from"),
                to: this.$element.data("to"),
                speed: this.$element.data("speed"),
                refreshInterval: this.$element.data("refresh-interval"),
                decimals: this.$element.data("decimals")
            },
            b = Object.keys(a);
        for (var c in b) {
            var d = b[c];
            void 0 === a[d] && delete a[d]
        }
        return a
    }, c.prototype.update = function () {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, c.prototype.render = function () {
        var a = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(a)
    }, c.prototype.restart = function () {
        this.stop(), this.init(), this.start()
    }, c.prototype.start = function () {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, c.prototype.stop = function () {
        this.interval && clearInterval(this.interval)
    }, c.prototype.toggle = function () {
        this.interval ? this.stop() : this.start()
    }, a.fn.countTo = function (b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("countTo"),
                f = !e || "object" == typeof b,
                g = "object" == typeof b ? b : {},
                h = "string" == typeof b ? b : "start";
            f && (e && e.stop(), d.data("countTo", e = new c(this, g))), e[h].call(e)
        })
    }
});