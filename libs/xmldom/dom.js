(function() {
    function a(a, b) {
        for (var c in a) b[c] = a[c];
    }
    function b(a, b) {
        var c = a.prototype;
        if (!(c instanceof b)) {
            function e() {}
            for (var d in e.prototype = b.prototype, e = new e(), c) e[d] = c[d];
            a.prototype = c = e;
        }
        c.constructor != a && ("function" != typeof a && console.error("unknow Class:" + a), 
        c.constructor = a);
    }
    function c(a, b) {
        if (b instanceof Error) var d = b; else d = this, Error.call(this, ba[a]), this.message = ba[a], 
        Error.captureStackTrace && Error.captureStackTrace(this, c);
        return d.code = a, b && (this.message = this.message + ": " + b), d;
    }
    function d() {}
    function e(a, b) {
        this._node = a, this._refresh = b, f(this);
    }
    function f(a) {
        var b = a._node._inc || a._node.ownerDocument._inc;
        if (a._inc != b) {
            var c = a._refresh(a._node);
            for (var d in N(a, "length", c.length), c) a[d] = c[d];
            a._inc = b;
        }
    }
    function g() {}
    function h(a, b) {
        for (var c = a.length; c--; ) if (a[c] === b) return c;
    }
    function i(a, b, c, d) {
        if (d ? b[h(b, d)] = c : b[b.length++] = c, a) {
            c.ownerElement = a;
            var e = a.ownerDocument;
            e && (d && q(e, a, d), p(e, a, c));
        }
    }
    function j(a, b, d) {
        var e = h(b, d);
        if (0 <= e) {
            for (var f = b.length - 1; e < f; ) b[e] = b[++e];
            if (b.length = f, a) {
                var g = a.ownerDocument;
                g && (q(g, a, d), d.ownerElement = null);
            }
        } else throw c(ja, new Error(a.tagName + "@" + d));
    }
    function k(a) {
        if (this._features = {}, a) for (var b in a) this._features = a[b];
    }
    function l() {}
    function m(a) {
        return "<" == a && "&lt;" || ">" == a && "&gt;" || "&" == a && "&amp;" || '"' == a && "&quot;" || "&#" + a.charCodeAt() + ";";
    }
    function n(a, b) {
        if (b(a)) return !0;
        if (a = a.firstChild) do {
            if (n(a, b)) return !0;
        } while (a = a.nextSibling);
    }
    function o() {}
    function p(a, b, c) {
        a && a._inc++;
        var d = c.namespaceURI;
        "http://www.w3.org/2000/xmlns/" == d && (b._nsMap[c.prefix ? c.localName : ""] = c.value);
    }
    function q(a, b, c) {
        a && a._inc++;
        var d = c.namespaceURI;
        "http://www.w3.org/2000/xmlns/" == d && delete b._nsMap[c.prefix ? c.localName : ""];
    }
    function r(a, b, c) {
        if (a && a._inc) {
            a._inc++;
            var d = b.childNodes;
            if (c) d[d.length++] = c; else {
                for (var e = b.firstChild, f = 0; e; ) d[f++] = e, e = e.nextSibling;
                d.length = f;
            }
        }
    }
    function s(a, b) {
        var c = b.previousSibling, d = b.nextSibling;
        return c ? c.nextSibling = d : a.firstChild = d, d ? d.previousSibling = c : a.lastChild = c, 
        r(a.ownerDocument, a), b;
    }
    function t(a, b, c) {
        var d = b.parentNode;
        if (d && d.removeChild(b), b.nodeType === $) {
            var e = b.firstChild;
            if (null == e) return b;
            var f = b.lastChild;
        } else e = f = b;
        var g = c ? c.previousSibling : a.lastChild;
        e.previousSibling = g, f.nextSibling = c, g ? g.nextSibling = e : a.firstChild = e, 
        null == c ? a.lastChild = f : c.previousSibling = f;
        do {
            e.parentNode = a;
        } while (e !== f && (e = e.nextSibling));
        return r(a.ownerDocument || a, a), b.nodeType == $ && (b.firstChild = b.lastChild = null), 
        b;
    }
    function u(a, b) {
        var c = b.parentNode;
        if (c) {
            var d = a.lastChild;
            c.removeChild(b);
            var d = a.lastChild;
        }
        var d = a.lastChild;
        return b.parentNode = a, b.previousSibling = d, b.nextSibling = null, d ? d.nextSibling = b : a.firstChild = b, 
        a.lastChild = b, r(a.ownerDocument, a, b), b;
    }
    function v() {
        this._nsMap = {};
    }
    function w() {}
    function x() {}
    function y() {}
    function z() {}
    function A() {}
    function B() {}
    function C() {}
    function D() {}
    function E() {}
    function F() {}
    function G() {}
    function H() {}
    function I(a, b) {
        var c = [], d = 9 == this.nodeType && this.documentElement || this, e = d.prefix, f = d.namespaceURI;
        if (f && null == e) {
            var e = d.lookupPrefix(f);
            if (null == e) var g = [ {
                namespace: f,
                prefix: null
            } ];
        }
        return K(this, c, a, b, g), c.join("");
    }
    function J(a, b, c) {
        var d = a.prefix || "", e = a.namespaceURI;
        if (!d && !e) return !1;
        if ("xml" === d && "http://www.w3.org/XML/1998/namespace" === e || "http://www.w3.org/2000/xmlns/" == e) return !1;
        for (var f = c.length; f--; ) {
            var g = c[f];
            if (g.prefix == d) return g.namespace != e;
        }
        return !0;
    }
    function K(a, b, c, d, e) {
        if (d) {
            if (a = d(a), !a) return;
            if ("string" == typeof a) return void b.push(a);
        }
        switch (a.nodeType) {
          case Q:
            e || (e = []);
            var f = e.length, g = a.attributes, h = g.length, j = a.firstChild, k = a.tagName;
            c = O === a.namespaceURI || c, b.push("<", k);
            for (var l, n = 0; n < h; n++) l = g.item(n), "xmlns" == l.prefix ? e.push({
                prefix: l.localName,
                namespace: l.value
            }) : "xmlns" == l.nodeName && e.push({
                prefix: "",
                namespace: l.value
            });
            for (var l, n = 0; n < h; n++) {
                if (l = g.item(n), J(l, c, e)) {
                    var i = l.prefix || "", o = l.namespaceURI, p = i ? " xmlns:" + i : " xmlns";
                    b.push(p, '="', o, '"'), e.push({
                        prefix: i,
                        namespace: o
                    });
                }
                K(l, b, c, d, e);
            }
            if (J(a, c, e)) {
                var i = a.prefix || "", o = a.namespaceURI, p = i ? " xmlns:" + i : " xmlns";
                b.push(p, '="', o, '"'), e.push({
                    prefix: i,
                    namespace: o
                });
            }
            if (j || c && !/^(?:meta|link|img|br|hr|input)$/i.test(k)) {
                if (b.push(">"), c && /^script$/i.test(k)) for (;j; ) j.data ? b.push(j.data) : K(j, b, c, d, e), 
                j = j.nextSibling; else for (;j; ) K(j, b, c, d, e), j = j.nextSibling;
                b.push("</", k, ">");
            } else b.push("/>");
            return;

          case Y:
          case $:
            for (var j = a.firstChild; j; ) K(j, b, c, d, e), j = j.nextSibling;
            return;

          case R:
            return b.push(" ", a.name, '="', a.value.replace(/[<&"]/g, m), '"');

          case S:
            return b.push(a.data.replace(/[<&]/g, m));

          case T:
            return b.push("<![CDATA[", a.data, "]]>");

          case X:
            return b.push("\x3c!--", a.data, "--\x3e");

          case Z:
            var q = a.publicId, r = a.systemId;
            if (b.push("<!DOCTYPE ", a.name), q) b.push(' PUBLIC "', q), r && "." != r && b.push('" "', r), 
            b.push('">'); else if (r && "." != r) b.push(' SYSTEM "', r, '">'); else {
                var s = a.internalSubset;
                s && b.push(" [", s, "]"), b.push(">");
            }
            return;

          case W:
            return b.push("<?", a.target, " ", a.data, "?>");

          case U:
            return b.push("&", a.nodeName, ";");

          default:
            b.push("??", a.nodeName);
        }
    }
    function L(a, b, c) {
        var d;
        switch (b.nodeType) {
          case Q:
            d = b.cloneNode(!1), d.ownerDocument = a;

          case $:
            break;

          case R:
            c = !0;
        }
        if (d || (d = b.cloneNode(!1)), d.ownerDocument = a, d.parentNode = null, c) for (var e = b.firstChild; e; ) d.appendChild(L(a, e, c)), 
        e = e.nextSibling;
        return d;
    }
    function M(a, b, c) {
        var e = new b.constructor();
        for (var f in b) {
            var h = b[f];
            "object" != typeof h && h != e[f] && (e[f] = h);
        }
        switch (b.childNodes && (e.childNodes = new d()), e.ownerDocument = a, e.nodeType) {
          case Q:
            var j = b.attributes, k = e.attributes = new g(), l = j.length;
            k._ownerElement = e;
            for (var m = 0; m < l; m++) e.setAttributeNode(M(a, j.item(m), !0));
            break;
            ;

          case R:
            c = !0;
        }
        if (c) for (var i = b.firstChild; i; ) e.appendChild(M(a, i, c)), i = i.nextSibling;
        return e;
    }
    function N(a, b, c) {
        a[b] = c;
    }
    var O = "http://www.w3.org/1999/xhtml", P = {}, Q = P.ELEMENT_NODE = 1, R = P.ATTRIBUTE_NODE = 2, S = P.TEXT_NODE = 3, T = P.CDATA_SECTION_NODE = 4, U = P.ENTITY_REFERENCE_NODE = 5, V = P.ENTITY_NODE = 6, W = P.PROCESSING_INSTRUCTION_NODE = 7, X = P.COMMENT_NODE = 8, Y = P.DOCUMENT_NODE = 9, Z = P.DOCUMENT_TYPE_NODE = 10, $ = P.DOCUMENT_FRAGMENT_NODE = 11, _ = P.NOTATION_NODE = 12, aa = {}, ba = {}, ca = aa.INDEX_SIZE_ERR = (ba[1] = "Index size error", 
    1), da = aa.DOMSTRING_SIZE_ERR = (ba[2] = "DOMString size error", 2), ea = aa.HIERARCHY_REQUEST_ERR = (ba[3] = "Hierarchy request error", 
    3), fa = aa.WRONG_DOCUMENT_ERR = (ba[4] = "Wrong document", 4), ga = aa.INVALID_CHARACTER_ERR = (ba[5] = "Invalid character", 
    5), ha = aa.NO_DATA_ALLOWED_ERR = (ba[6] = "No data allowed", 6), ia = aa.NO_MODIFICATION_ALLOWED_ERR = (ba[7] = "No modification allowed", 
    7), ja = aa.NOT_FOUND_ERR = (ba[8] = "Not found", 8), ka = aa.NOT_SUPPORTED_ERR = (ba[9] = "Not supported", 
    9), la = aa.INUSE_ATTRIBUTE_ERR = (ba[10] = "Attribute in use", 10), ma = aa.INVALID_STATE_ERR = (ba[11] = "Invalid state", 
    11), na = aa.SYNTAX_ERR = (ba[12] = "Syntax error", 12), oa = aa.INVALID_MODIFICATION_ERR = (ba[13] = "Invalid modification", 
    13), pa = aa.NAMESPACE_ERR = (ba[14] = "Invalid namespace", 14), qa = aa.INVALID_ACCESS_ERR = (ba[15] = "Invalid access", 
    15);
    c.prototype = Error.prototype, a(aa, c);
    d.prototype = {
        length: 0,
        item: function(a) {
            return this[a] || null;
        },
        toString: function(a, b) {
            for (var c = [], d = 0; d < this.length; d++) K(this[d], c, a, b);
            return c.join("");
        }
    }, e.prototype.item = function(a) {
        return f(this), this[a];
    }, b(e, d);
    g.prototype = {
        length: 0,
        item: d.prototype.item,
        getNamedItem: function(a) {
            for (var b = this.length; b--; ) {
                var c = this[b];
                if (c.nodeName == a) return c;
            }
        },
        setNamedItem: function(a) {
            var b = a.ownerElement;
            if (b && b != this._ownerElement) throw new c(la);
            var d = this.getNamedItem(a.nodeName);
            return i(this._ownerElement, this, a, d), d;
        },
        setNamedItemNS: function(a) {
            var b, d = a.ownerElement;
            if (d && d != this._ownerElement) throw new c(la);
            return b = this.getNamedItemNS(a.namespaceURI, a.localName), i(this._ownerElement, this, a, b), 
            b;
        },
        removeNamedItem: function(a) {
            var b = this.getNamedItem(a);
            return j(this._ownerElement, this, b), b;
        },
        removeNamedItemNS: function(a, b) {
            var c = this.getNamedItemNS(a, b);
            return j(this._ownerElement, this, c), c;
        },
        getNamedItemNS: function(a, b) {
            for (var c = this.length; c--; ) {
                var d = this[c];
                if (d.localName == b && d.namespaceURI == a) return d;
            }
            return null;
        }
    };
    k.prototype = {
        hasFeature: function(a, b) {
            var c = this._features[a.toLowerCase()];
            return c && (!b || b in c);
        },
        createDocument: function(a, b, c) {
            var e = new o();
            if (e.implementation = this, e.childNodes = new d(), e.doctype = c, c && e.appendChild(c), 
            b) {
                var f = e.createElementNS(a, b);
                e.appendChild(f);
            }
            return e;
        },
        createDocumentType: function(a, b, c) {
            var d = new B();
            return d.name = a, d.nodeName = a, d.publicId = b, d.systemId = c, d;
        }
    };
    l.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        insertBefore: function(a, b) {
            return t(this, a, b);
        },
        replaceChild: function(a, b) {
            this.insertBefore(a, b), b && this.removeChild(b);
        },
        removeChild: function(a) {
            return s(this, a);
        },
        appendChild: function(a) {
            return this.insertBefore(a, null);
        },
        hasChildNodes: function() {
            return null != this.firstChild;
        },
        cloneNode: function(a) {
            return M(this.ownerDocument || this, this, a);
        },
        normalize: function() {
            for (var a = this.firstChild; a; ) {
                var b = a.nextSibling;
                b && b.nodeType == S && a.nodeType == S ? (this.removeChild(b), a.appendData(b.data)) : (a.normalize(), 
                a = b);
            }
        },
        isSupported: function(a, b) {
            return this.ownerDocument.implementation.hasFeature(a, b);
        },
        hasAttributes: function() {
            return 0 < this.attributes.length;
        },
        lookupPrefix: function(a) {
            for (var b = this; b; ) {
                var c = b._nsMap;
                if (c) for (var d in c) if (c[d] == a) return d;
                b = b.nodeType == R ? b.ownerDocument : b.parentNode;
            }
            return null;
        },
        lookupNamespaceURI: function(a) {
            for (var b = this; b; ) {
                var c = b._nsMap;
                if (c && a in c) return c[a];
                b = b.nodeType == R ? b.ownerDocument : b.parentNode;
            }
            return null;
        },
        isDefaultNamespace: function(a) {
            var b = this.lookupPrefix(a);
            return null == b;
        }
    }, a(P, l), a(P, l.prototype), o.prototype = {
        nodeName: "#document",
        nodeType: Y,
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function(a, b) {
            if (a.nodeType == $) {
                for (var c, d = a.firstChild; d; ) c = d.nextSibling, this.insertBefore(d, b), d = c;
                return a;
            }
            return null == this.documentElement && a.nodeType == Q && (this.documentElement = a), 
            t(this, a, b), a.ownerDocument = this, a;
        },
        removeChild: function(a) {
            return this.documentElement == a && (this.documentElement = null), s(this, a);
        },
        importNode: function(a, b) {
            return L(this, a, b);
        },
        getElementById: function(a) {
            var b = null;
            return n(this.documentElement, function(c) {
                if (c.nodeType == Q && c.getAttribute("id") == a) return b = c, !0;
            }), b;
        },
        createElement: function(a) {
            var b = new v();
            b.ownerDocument = this, b.nodeName = a, b.tagName = a, b.childNodes = new d();
            var c = b.attributes = new g();
            return c._ownerElement = b, b;
        },
        createDocumentFragment: function() {
            var a = new F();
            return a.ownerDocument = this, a.childNodes = new d(), a;
        },
        createTextNode: function(a) {
            var b = new y();
            return b.ownerDocument = this, b.appendData(a), b;
        },
        createComment: function(a) {
            var b = new z();
            return b.ownerDocument = this, b.appendData(a), b;
        },
        createCDATASection: function(a) {
            var b = new A();
            return b.ownerDocument = this, b.appendData(a), b;
        },
        createProcessingInstruction: function(a, b) {
            var c = new G();
            return c.ownerDocument = this, c.tagName = c.target = a, c.nodeValue = c.data = b, 
            c;
        },
        createAttribute: function(a) {
            var b = new w();
            return b.ownerDocument = this, b.name = a, b.nodeName = a, b.localName = a, b.specified = !0, 
            b;
        },
        createEntityReference: function(a) {
            var b = new E();
            return b.ownerDocument = this, b.nodeName = a, b;
        },
        createElementNS: function(a, b) {
            var c = new v(), e = b.split(":"), f = c.attributes = new g();
            return c.childNodes = new d(), c.ownerDocument = this, c.nodeName = b, c.tagName = b, 
            c.namespaceURI = a, 2 == e.length ? (c.prefix = e[0], c.localName = e[1]) : c.localName = b, 
            f._ownerElement = c, c;
        },
        createAttributeNS: function(a, b) {
            var c = new w(), d = b.split(":");
            return c.ownerDocument = this, c.nodeName = b, c.name = b, c.namespaceURI = a, c.specified = !0, 
            2 == d.length ? (c.prefix = d[0], c.localName = d[1]) : c.localName = b, c;
        }
    }, b(o, l);
    v.prototype = {
        nodeType: Q,
        hasAttribute: function(a) {
            return null != this.getAttributeNode(a);
        },
        getAttribute: function(a) {
            var b = this.getAttributeNode(a);
            return b && b.value || "";
        },
        getAttributeNode: function(a) {
            return this.attributes.getNamedItem(a);
        },
        setAttribute: function(a, b) {
            var c = this.ownerDocument.createAttribute(a);
            c.value = c.nodeValue = "" + b, this.setAttributeNode(c);
        },
        removeAttribute: function(a) {
            var b = this.getAttributeNode(a);
            b && this.removeAttributeNode(b);
        },
        appendChild: function(a) {
            return a.nodeType === $ ? this.insertBefore(a, null) : u(this, a);
        },
        setAttributeNode: function(a) {
            return this.attributes.setNamedItem(a);
        },
        setAttributeNodeNS: function(a) {
            return this.attributes.setNamedItemNS(a);
        },
        removeAttributeNode: function(a) {
            return this.attributes.removeNamedItem(a.nodeName);
        },
        removeAttributeNS: function(a, b) {
            var c = this.getAttributeNodeNS(a, b);
            c && this.removeAttributeNode(c);
        },
        hasAttributeNS: function(a, b) {
            return null != this.getAttributeNodeNS(a, b);
        },
        getAttributeNS: function(a, b) {
            var c = this.getAttributeNodeNS(a, b);
            return c && c.value || "";
        },
        setAttributeNS: function(a, b, c) {
            var d = this.ownerDocument.createAttributeNS(a, b);
            d.value = d.nodeValue = "" + c, this.setAttributeNode(d);
        },
        getAttributeNodeNS: function(a, b) {
            return this.attributes.getNamedItemNS(a, b);
        },
        getElementsByTagName: function(a) {
            return new e(this, function(b) {
                var c = [];
                return n(b, function(d) {
                    d !== b && d.nodeType == Q && ("*" === a || d.tagName == a) && c.push(d);
                }), c;
            });
        },
        getElementsByTagNameNS: function(a, b) {
            return new e(this, function(c) {
                var d = [];
                return n(c, function(e) {
                    e !== c && e.nodeType === Q && ("*" === a || e.namespaceURI === a) && ("*" === b || e.localName == b) && d.push(e);
                }), d;
            });
        }
    }, o.prototype.getElementsByTagName = v.prototype.getElementsByTagName, o.prototype.getElementsByTagNameNS = v.prototype.getElementsByTagNameNS, 
    b(v, l);
    w.prototype.nodeType = R, b(w, l);
    x.prototype = {
        data: "",
        substringData: function(a, b) {
            return this.data.substring(a, a + b);
        },
        appendData: function(a) {
            a = this.data + a, this.nodeValue = this.data = a, this.length = a.length;
        },
        insertData: function(a, b) {
            this.replaceData(a, 0, b);
        },
        appendChild: function() {
            throw new Error(ba[ea]);
        },
        deleteData: function(a, b) {
            this.replaceData(a, b, "");
        },
        replaceData: function(a, b, c) {
            var d = this.data.substring(0, a), e = this.data.substring(a + b);
            c = d + c + e, this.nodeValue = this.data = c, this.length = c.length;
        }
    }, b(x, l);
    y.prototype = {
        nodeName: "#text",
        nodeType: S,
        splitText: function(a) {
            var b = this.data, c = b.substring(a);
            b = b.substring(0, a), this.data = this.nodeValue = b, this.length = b.length;
            var d = this.ownerDocument.createTextNode(c);
            return this.parentNode && this.parentNode.insertBefore(d, this.nextSibling), d;
        }
    }, b(y, x);
    z.prototype = {
        nodeName: "#comment",
        nodeType: X
    }, b(z, x);
    A.prototype = {
        nodeName: "#cdata-section",
        nodeType: T
    }, b(A, x);
    B.prototype.nodeType = Z, b(B, l);
    C.prototype.nodeType = _, b(C, l);
    D.prototype.nodeType = V, b(D, l);
    E.prototype.nodeType = U, b(E, l);
    F.prototype.nodeName = "#document-fragment", F.prototype.nodeType = $, b(F, l), 
    G.prototype.nodeType = W, b(G, l), H.prototype.serializeToString = function(a, b, c) {
        return I.call(a, b, c);
    }, l.prototype.toString = I;
    try {
        if (Object.defineProperty) {
            function a(b) {
                switch (b.nodeType) {
                  case Q:
                  case $:
                    var c = [];
                    for (b = b.firstChild; b; ) 7 !== b.nodeType && 8 !== b.nodeType && c.push(a(b)), 
                    b = b.nextSibling;
                    return c.join("");

                  default:
                    return b.nodeValue;
                }
            }
            Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return f(this), this.$$length;
                }
            }), Object.defineProperty(l.prototype, "textContent", {
                get: function() {
                    return a(this);
                },
                set: function(a) {
                    switch (this.nodeType) {
                      case Q:
                      case $:
                        for (;this.firstChild; ) this.removeChild(this.firstChild);
                        (a || a + "") && this.appendChild(this.ownerDocument.createTextNode(a));
                        break;

                      default:
                        this.data = a, this.value = a, this.nodeValue = a;
                    }
                }
            }), N = function(a, b, c) {
                a["$$" + b] = c;
            };
        }
    } catch (a) {}
    exports.DOMImplementation = k, exports.XMLSerializer = H;
})();