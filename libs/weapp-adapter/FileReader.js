function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var b = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), c = function() {
    function c() {
        a(this, c);
    }
    return b(c, [ {
        key: "construct",
        value: function() {}
    } ]), c;
}();

exports.default = c, module.exports = exports["default"];