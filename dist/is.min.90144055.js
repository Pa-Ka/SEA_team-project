// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"static/vendors/is/is.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * is.js 0.8.0
 * Author: Aras Atasaygin
 */
(function (n, t) {
  if (typeof define === "function" && define.amd) {
    define(function () {
      return n.is = t();
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    module.exports = t();
  } else {
    n.is = t();
  }
})(this, function () {
  var n = {};
  n.VERSION = "0.8.0";
  n.not = {};
  n.all = {};
  n.any = {};
  var t = Object.prototype.toString;
  var e = Array.prototype.slice;
  var r = Object.prototype.hasOwnProperty;

  function a(n) {
    return function () {
      return !n.apply(null, e.call(arguments));
    };
  }

  function u(n) {
    return function () {
      var t = c(arguments);
      var e = t.length;

      for (var r = 0; r < e; r++) {
        if (!n.call(null, t[r])) {
          return false;
        }
      }

      return true;
    };
  }

  function o(n) {
    return function () {
      var t = c(arguments);
      var e = t.length;

      for (var r = 0; r < e; r++) {
        if (n.call(null, t[r])) {
          return true;
        }
      }

      return false;
    };
  }

  var i = {
    "<": function _(n, t) {
      return n < t;
    },
    "<=": function _(n, t) {
      return n <= t;
    },
    ">": function _(n, t) {
      return n > t;
    },
    ">=": function _(n, t) {
      return n >= t;
    }
  };

  function f(n, t) {
    var e = t + "";
    var r = +(e.match(/\d+/) || NaN);
    var a = e.match(/^[<>]=?|/)[0];
    return i[a] ? i[a](n, r) : n == r || r !== r;
  }

  function c(t) {
    var r = e.call(t);
    var a = r.length;

    if (a === 1 && n.array(r[0])) {
      r = r[0];
    }

    return r;
  }

  n.arguments = function (n) {
    return t.call(n) === "[object Arguments]" || n != null && _typeof(n) === "object" && "callee" in n;
  };

  n.array = Array.isArray || function (n) {
    return t.call(n) === "[object Array]";
  };

  n.boolean = function (n) {
    return n === true || n === false || t.call(n) === "[object Boolean]";
  };

  n.char = function (t) {
    return n.string(t) && t.length === 1;
  };

  n.date = function (n) {
    return t.call(n) === "[object Date]";
  };

  n.domNode = function (t) {
    return n.object(t) && t.nodeType > 0;
  };

  n.error = function (n) {
    return t.call(n) === "[object Error]";
  };

  n["function"] = function (n) {
    return t.call(n) === "[object Function]" || typeof n === "function";
  };

  n.json = function (n) {
    return t.call(n) === "[object Object]";
  };

  n.nan = function (n) {
    return n !== n;
  };

  n["null"] = function (n) {
    return n === null;
  };

  n.number = function (e) {
    return n.not.nan(e) && t.call(e) === "[object Number]";
  };

  n.object = function (n) {
    return Object(n) === n;
  };

  n.regexp = function (n) {
    return t.call(n) === "[object RegExp]";
  };

  n.sameType = function (e, r) {
    var a = t.call(e);

    if (a !== t.call(r)) {
      return false;
    }

    if (a === "[object Number]") {
      return !n.any.nan(e, r) || n.all.nan(e, r);
    }

    return true;
  };

  n.sameType.api = ["not"];

  n.string = function (n) {
    return t.call(n) === "[object String]";
  };

  n.undefined = function (n) {
    return n === void 0;
  };

  n.windowObject = function (n) {
    return n != null && _typeof(n) === "object" && "setInterval" in n;
  };

  n.empty = function (t) {
    if (n.object(t)) {
      var e = Object.getOwnPropertyNames(t).length;

      if (e === 0 || e === 1 && n.array(t) || e === 2 && n.arguments(t)) {
        return true;
      }

      return false;
    }

    return t === "";
  };

  n.existy = function (n) {
    return n != null;
  };

  n.falsy = function (n) {
    return !n;
  };

  n.truthy = a(n.falsy);

  n.above = function (t, e) {
    return n.all.number(t, e) && t > e;
  };

  n.above.api = ["not"];

  n.decimal = function (t) {
    return n.number(t) && t % 1 !== 0;
  };

  n.equal = function (t, e) {
    if (n.all.number(t, e)) {
      return t === e && 1 / t === 1 / e;
    }

    if (n.all.string(t, e) || n.all.regexp(t, e)) {
      return "" + t === "" + e;
    }

    if (n.all.boolean(t, e)) {
      return t === e;
    }

    return false;
  };

  n.equal.api = ["not"];

  n.even = function (t) {
    return n.number(t) && t % 2 === 0;
  };

  n.finite = isFinite || function (t) {
    return n.not.infinite(t) && n.not.nan(t);
  };

  n.infinite = function (n) {
    return n === Infinity || n === -Infinity;
  };

  n.integer = function (t) {
    return n.number(t) && t % 1 === 0;
  };

  n.negative = function (t) {
    return n.number(t) && t < 0;
  };

  n.odd = function (t) {
    return n.number(t) && t % 2 === 1;
  };

  n.positive = function (t) {
    return n.number(t) && t > 0;
  };

  n.under = function (t, e) {
    return n.all.number(t, e) && t < e;
  };

  n.under.api = ["not"];

  n.within = function (t, e, r) {
    return n.all.number(t, e, r) && t > e && t < r;
  };

  n.within.api = ["not"];
  var l = {
    affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
    alphaNumeric: /^[A-Za-z0-9]+$/,
    caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
    creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
    dateString: /^(1[0-2]|0?[1-9])([\/-])(3[01]|[12][0-9]|0?[1-9])(?:\2)(?:[0-9]{2})?[0-9]{2}$/,
    email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
    eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
    hexadecimal: /^(?:0x)?[0-9a-fA-F]+$/,
    hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
    ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
    ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
    nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/,
    timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
    ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
    url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
    usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/
  };

  function d(t, e) {
    n[t] = function (n) {
      return e[t].test(n);
    };
  }

  for (var s in l) {
    if (l.hasOwnProperty(s)) {
      d(s, l);
    }
  }

  n.ip = function (t) {
    return n.ipv4(t) || n.ipv6(t);
  };

  n.capitalized = function (t) {
    if (n.not.string(t)) {
      return false;
    }

    var e = t.split(" ");

    for (var r = 0; r < e.length; r++) {
      var a = e[r];

      if (a.length) {
        var u = a.charAt(0);

        if (u !== u.toUpperCase()) {
          return false;
        }
      }
    }

    return true;
  };

  n.endWith = function (t, e) {
    if (n.not.string(t)) {
      return false;
    }

    e += "";
    var r = t.length - e.length;
    return r >= 0 && t.indexOf(e, r) === r;
  };

  n.endWith.api = ["not"];

  n.include = function (n, t) {
    return n.indexOf(t) > -1;
  };

  n.include.api = ["not"];

  n.lowerCase = function (t) {
    return n.string(t) && t === t.toLowerCase();
  };

  n.palindrome = function (t) {
    if (n.not.string(t)) {
      return false;
    }

    t = t.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    var e = t.length - 1;

    for (var r = 0, a = Math.floor(e / 2); r <= a; r++) {
      if (t.charAt(r) !== t.charAt(e - r)) {
        return false;
      }
    }

    return true;
  };

  n.space = function (t) {
    if (n.not.char(t)) {
      return false;
    }

    var e = t.charCodeAt(0);
    return e > 8 && e < 14 || e === 32;
  };

  n.startWith = function (t, e) {
    return n.string(t) && t.indexOf(e) === 0;
  };

  n.startWith.api = ["not"];

  n.upperCase = function (t) {
    return n.string(t) && t === t.toUpperCase();
  };

  var F = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var p = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

  n.day = function (t, e) {
    return n.date(t) && e.toLowerCase() === F[t.getDay()];
  };

  n.day.api = ["not"];

  n.dayLightSavingTime = function (n) {
    var t = new Date(n.getFullYear(), 0, 1);
    var e = new Date(n.getFullYear(), 6, 1);
    var r = Math.max(t.getTimezoneOffset(), e.getTimezoneOffset());
    return n.getTimezoneOffset() < r;
  };

  n.future = function (t) {
    var e = new Date();
    return n.date(t) && t.getTime() > e.getTime();
  };

  n.inDateRange = function (t, e, r) {
    if (n.not.date(t) || n.not.date(e) || n.not.date(r)) {
      return false;
    }

    var a = t.getTime();
    return a > e.getTime() && a < r.getTime();
  };

  n.inDateRange.api = ["not"];

  n.inLastMonth = function (t) {
    return n.inDateRange(t, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
  };

  n.inLastWeek = function (t) {
    return n.inDateRange(t, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
  };

  n.inLastYear = function (t) {
    return n.inDateRange(t, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
  };

  n.inNextMonth = function (t) {
    return n.inDateRange(t, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
  };

  n.inNextWeek = function (t) {
    return n.inDateRange(t, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
  };

  n.inNextYear = function (t) {
    return n.inDateRange(t, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
  };

  n.leapYear = function (t) {
    return n.number(t) && (t % 4 === 0 && t % 100 !== 0 || t % 400 === 0);
  };

  n.month = function (t, e) {
    return n.date(t) && e.toLowerCase() === p[t.getMonth()];
  };

  n.month.api = ["not"];

  n.past = function (t) {
    var e = new Date();
    return n.date(t) && t.getTime() < e.getTime();
  };

  n.quarterOfYear = function (t, e) {
    return n.date(t) && n.number(e) && e === Math.floor((t.getMonth() + 3) / 3);
  };

  n.quarterOfYear.api = ["not"];

  n.today = function (t) {
    var e = new Date();
    var r = e.toDateString();
    return n.date(t) && t.toDateString() === r;
  };

  n.tomorrow = function (t) {
    var e = new Date();
    var r = new Date(e.setDate(e.getDate() + 1)).toDateString();
    return n.date(t) && t.toDateString() === r;
  };

  n.weekend = function (t) {
    return n.date(t) && (t.getDay() === 6 || t.getDay() === 0);
  };

  n.weekday = a(n.weekend);

  n.year = function (t, e) {
    return n.date(t) && n.number(e) && e === t.getFullYear();
  };

  n.year.api = ["not"];

  n.yesterday = function (t) {
    var e = new Date();
    var r = new Date(e.setDate(e.getDate() - 1)).toDateString();
    return n.date(t) && t.toDateString() === r;
  };

  var D = n.windowObject((typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) && global;
  var h = n.windowObject((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) && self;
  var v = n.windowObject(_typeof(this) == "object" && this) && this;
  var b = D || h || v || Function("return this")();
  var g = h && h.document;
  var m = b.is;
  var w = h && h.navigator;
  var y = (w && w.appVersion || "").toLowerCase();
  var x = (w && w.userAgent || "").toLowerCase();
  var A = (w && w.vendor || "").toLowerCase();

  n.android = function () {
    return /android/.test(x);
  };

  n.android.api = ["not"];

  n.androidPhone = function () {
    return /android/.test(x) && /mobile/.test(x);
  };

  n.androidPhone.api = ["not"];

  n.androidTablet = function () {
    return /android/.test(x) && !/mobile/.test(x);
  };

  n.androidTablet.api = ["not"];

  n.blackberry = function () {
    return /blackberry/.test(x) || /bb10/.test(x);
  };

  n.blackberry.api = ["not"];

  n.chrome = function (n) {
    var t = /google inc/.test(A) ? x.match(/(?:chrome|crios)\/(\d+)/) : null;
    return t !== null && f(t[1], n);
  };

  n.chrome.api = ["not"];

  n.desktop = function () {
    return n.not.mobile() && n.not.tablet();
  };

  n.desktop.api = ["not"];

  n.edge = function (n) {
    var t = x.match(/edge\/(\d+)/);
    return t !== null && f(t[1], n);
  };

  n.edge.api = ["not"];

  n.firefox = function (n) {
    var t = x.match(/(?:firefox|fxios)\/(\d+)/);
    return t !== null && f(t[1], n);
  };

  n.firefox.api = ["not"];

  n.ie = function (n) {
    var t = x.match(/(?:msie |trident.+?; rv:)(\d+)/);
    return t !== null && f(t[1], n);
  };

  n.ie.api = ["not"];

  n.ios = function () {
    return n.iphone() || n.ipad() || n.ipod();
  };

  n.ios.api = ["not"];

  n.ipad = function (n) {
    var t = x.match(/ipad.+?os (\d+)/);
    return t !== null && f(t[1], n);
  };

  n.ipad.api = ["not"];

  n.iphone = function (n) {
    var t = x.match(/iphone(?:.+?os (\d+))?/);
    return t !== null && f(t[1] || 1, n);
  };

  n.iphone.api = ["not"];

  n.ipod = function (n) {
    var t = x.match(/ipod.+?os (\d+)/);
    return t !== null && f(t[1], n);
  };

  n.ipod.api = ["not"];

  n.linux = function () {
    return /linux/.test(y);
  };

  n.linux.api = ["not"];

  n.mac = function () {
    return /mac/.test(y);
  };

  n.mac.api = ["not"];

  n.mobile = function () {
    return n.iphone() || n.ipod() || n.androidPhone() || n.blackberry() || n.windowsPhone();
  };

  n.mobile.api = ["not"];
  n.offline = a(n.online);
  n.offline.api = ["not"];

  n.online = function () {
    return !w || w.onLine === true;
  };

  n.online.api = ["not"];

  n.opera = function (n) {
    var t = x.match(/(?:^opera.+?version|opr)\/(\d+)/);
    return t !== null && f(t[1], n);
  };

  n.opera.api = ["not"];

  n.phantom = function (n) {
    var t = x.match(/phantomjs\/(\d+)/);
    return t !== null && f(t[1], n);
  };

  n.phantom.api = ["not"];

  n.safari = function (n) {
    var t = x.match(/version\/(\d+).+?safari/);
    return t !== null && f(t[1], n);
  };

  n.safari.api = ["not"];

  n.tablet = function () {
    return n.ipad() || n.androidTablet() || n.windowsTablet();
  };

  n.tablet.api = ["not"];

  n.touchDevice = function () {
    return !!g && ("ontouchstart" in h || "DocumentTouch" in h && g instanceof DocumentTouch);
  };

  n.touchDevice.api = ["not"];

  n.windows = function () {
    return /win/.test(y);
  };

  n.windows.api = ["not"];

  n.windowsPhone = function () {
    return n.windows() && /phone/.test(x);
  };

  n.windowsPhone.api = ["not"];

  n.windowsTablet = function () {
    return n.windows() && n.not.windowsPhone() && /touch/.test(x);
  };

  n.windowsTablet.api = ["not"];

  n.propertyCount = function (t, e) {
    if (n.not.object(t) || n.not.number(e)) {
      return false;
    }

    var a = 0;

    for (var u in t) {
      if (r.call(t, u) && ++a > e) {
        return false;
      }
    }

    return a === e;
  };

  n.propertyCount.api = ["not"];

  n.propertyDefined = function (t, e) {
    return n.object(t) && n.string(e) && e in t;
  };

  n.propertyDefined.api = ["not"];

  n.inArray = function (t, e) {
    if (n.not.array(e)) {
      return false;
    }

    for (var r = 0; r < e.length; r++) {
      if (e[r] === t) {
        return true;
      }
    }

    return false;
  };

  n.inArray.api = ["not"];

  n.sorted = function (t, e) {
    if (n.not.array(t)) {
      return false;
    }

    var r = i[e] || i[">="];

    for (var a = 1; a < t.length; a++) {
      if (!r(t[a], t[a - 1])) {
        return false;
      }
    }

    return true;
  };

  function j() {
    var t = n;

    for (var e in t) {
      if (r.call(t, e) && n["function"](t[e])) {
        var i = t[e].api || ["not", "all", "any"];

        for (var f = 0; f < i.length; f++) {
          if (i[f] === "not") {
            n.not[e] = a(n[e]);
          }

          if (i[f] === "all") {
            n.all[e] = u(n[e]);
          }

          if (i[f] === "any") {
            n.any[e] = o(n[e]);
          }
        }
      }
    }
  }

  j();

  n.setNamespace = function () {
    b.is = m;
    return this;
  };

  n.setRegexp = function (n, t) {
    for (var e in l) {
      if (r.call(l, e) && t === e) {
        l[e] = n;
      }
    }
  };

  return n;
});
},{}],"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50060" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","static/vendors/is/is.min.js"], null)
//# sourceMappingURL=/is.min.90144055.js.map