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
})({"node_modules/@popperjs/core/lib/enums.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.write = exports.viewport = exports.variationPlacements = exports.top = exports.start = exports.right = exports.reference = exports.read = exports.popper = exports.placements = exports.modifierPhases = exports.main = exports.left = exports.end = exports.clippingParents = exports.bottom = exports.beforeWrite = exports.beforeRead = exports.beforeMain = exports.basePlacements = exports.auto = exports.afterWrite = exports.afterRead = exports.afterMain = void 0;
var top = 'top';
exports.top = top;
var bottom = 'bottom';
exports.bottom = bottom;
var right = 'right';
exports.right = right;
var left = 'left';
exports.left = left;
var auto = 'auto';
exports.auto = auto;
var basePlacements = [top, bottom, right, left];
exports.basePlacements = basePlacements;
var start = 'start';
exports.start = start;
var end = 'end';
exports.end = end;
var clippingParents = 'clippingParents';
exports.clippingParents = clippingParents;
var viewport = 'viewport';
exports.viewport = viewport;
var popper = 'popper';
exports.popper = popper;
var reference = 'reference';
exports.reference = reference;
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
exports.variationPlacements = variationPlacements;
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

exports.placements = placements;
var beforeRead = 'beforeRead';
exports.beforeRead = beforeRead;
var read = 'read';
exports.read = read;
var afterRead = 'afterRead'; // pure-logic modifiers

exports.afterRead = afterRead;
var beforeMain = 'beforeMain';
exports.beforeMain = beforeMain;
var main = 'main';
exports.main = main;
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

exports.afterMain = afterMain;
var beforeWrite = 'beforeWrite';
exports.beforeWrite = beforeWrite;
var write = 'write';
exports.write = write;
var afterWrite = 'afterWrite';
exports.afterWrite = afterWrite;
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
exports.modifierPhases = modifierPhases;
},{}],"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeName;

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElement = isElement;
exports.isHTMLElement = isHTMLElement;
exports.isShadowRoot = isShadowRoot;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isElement(node) {
  var OwnElement = (0, _getWindow.default)(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0, _getWindow.default)(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0, _getWindow.default)(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/modifiers/applyStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNodeName = _interopRequireDefault(require("../dom-utils/getNodeName.js"));

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};
exports.default = _default;
},{"../dom-utils/getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/utils/getBasePlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBasePlacement;

var _enums = require("../enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = exports.min = exports.max = void 0;
var max = Math.max;
exports.max = max;
var min = Math.min;
exports.min = min;
var round = Math.round;
exports.round = round;
},{}],"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBoundingClientRect;

var _instanceOf = require("./instanceOf.js");

var _math = require("../utils/math.js");

function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if ((0, _instanceOf.isHTMLElement)(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = (0, _math.round)(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = (0, _math.round)(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
},{"./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLayoutRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  var clientRect = (0, _getBoundingClientRect.default)(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js"}],"node_modules/@popperjs/core/lib/dom-utils/contains.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _instanceOf = require("./instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0, _instanceOf.isShadowRoot)(rootNode)) {
    var next = child;

    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false


  return false;
}
},{"./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getComputedStyle;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComputedStyle(element) {
  return (0, _getWindow.default)(element).getComputedStyle(element);
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTableElement;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0, _getNodeName.default)(element)) >= 0;
}
},{"./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js"}],"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentElement;

var _instanceOf = require("./instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0, _instanceOf.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
},{"./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParentNode;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParentNode(element) {
  if ((0, _getNodeName.default)(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0, _instanceOf.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElement.default)(element) // fallback

  );
}
},{"./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOffsetParent;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _isTableElement = _interopRequireDefault(require("./isTableElement.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTrueOffsetParent(element) {
  if (!(0, _instanceOf.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0, _getComputedStyle.default)(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && (0, _instanceOf.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0, _getComputedStyle.default)(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0, _getParentNode.default)(element);

  if ((0, _instanceOf.isShadowRoot)(currentNode)) {
    currentNode = currentNode.host;
  }

  while ((0, _instanceOf.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0, _getNodeName.default)(currentNode)) < 0) {
    var css = (0, _getComputedStyle.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0, _getWindow.default)(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0, _isTableElement.default)(offsetParent) && (0, _getComputedStyle.default)(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0, _getNodeName.default)(offsetParent) === 'html' || (0, _getNodeName.default)(offsetParent) === 'body' && (0, _getComputedStyle.default)(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./isTableElement.js":"node_modules/@popperjs/core/lib/dom-utils/isTableElement.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js"}],"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMainAxisFromPlacement;

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
},{}],"node_modules/@popperjs/core/lib/utils/within.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.within = within;
exports.withinMaxClamp = withinMaxClamp;

var _math = require("./math.js");

function within(min, value, max) {
  return (0, _math.max)(min, (0, _math.min)(value, max));
}

function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
},{"./math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFreshSideObject;

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
},{}],"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergePaddingObject;

var _getFreshSideObject = _interopRequireDefault(require("./getFreshSideObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0, _getFreshSideObject.default)(), paddingObject);
}
},{"./getFreshSideObject.js":"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js"}],"node_modules/@popperjs/core/lib/utils/expandToHashMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expandToHashMap;

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
},{}],"node_modules/@popperjs/core/lib/modifiers/arrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _contains = _interopRequireDefault(require("../dom-utils/contains.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _within = require("../utils/within.js");

var _mergePaddingObject = _interopRequireDefault(require("../utils/mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("../utils/expandToHashMap.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var axis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var isVertical = [_enums.left, _enums.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0, _getLayoutRect.default)(arrowElement);
  var minProp = axis === 'y' ? _enums.top : _enums.left;
  var maxProp = axis === 'y' ? _enums.bottom : _enums.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0, _getOffsetParent.default)(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0, _within.within)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if ("development" !== "production") {
    if (!(0, _instanceOf.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0, _contains.default)(state.elements.popper, arrowElement)) {
    if ("development" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","../dom-utils/contains.js":"node_modules/@popperjs/core/lib/dom-utils/contains.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../utils/getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../utils/within.js":"node_modules/@popperjs/core/lib/utils/within.js","../utils/mergePaddingObject.js":"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js","../utils/expandToHashMap.js":"node_modules/@popperjs/core/lib/utils/expandToHashMap.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/utils/getVariation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVariation;

function getVariation(placement) {
  return placement.split('-')[1];
}
},{}],"node_modules/@popperjs/core/lib/modifiers/computeStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.mapToStyles = mapToStyles;

var _enums = require("../enums.js");

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("../dom-utils/getComputedStyle.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0, _math.round)(x * dpr) / dpr || 0,
    y: (0, _math.round)(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums.left;
  var sideY = _enums.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0, _getOffsetParent.default)(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0, _getWindow.default)(popper)) {
      offsetParent = (0, _getDocumentElement.default)(popper);

      if ((0, _getComputedStyle.default)(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums.top || (placement === _enums.left || placement === _enums.right) && variation === _enums.end) {
      sideY = _enums.bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums.left || (placement === _enums.top || placement === _enums.bottom) && variation === _enums.end) {
      sideX = _enums.right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if ("development" !== "production") {
    var transitionProperty = (0, _getComputedStyle.default)(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0, _getBasePlacement.default)(state.placement),
    variation: (0, _getVariation.default)(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../dom-utils/getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","../dom-utils/getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","../dom-utils/getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/modifiers/eventListeners.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0, _getWindow.default)(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};
exports.default = _default;
},{"../dom-utils/getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositePlacement;
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};

function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
},{}],"node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositeVariationPlacement;
var hash = {
  start: 'end',
  end: 'start'
};

function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScroll;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScroll(node) {
  var win = (0, _getWindow.default)(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScrollBarX;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0, _getBoundingClientRect.default)((0, _getDocumentElement.default)(element)).left + (0, _getWindowScroll.default)(element).scrollLeft;
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js"}],"node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getViewportRect;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getViewportRect(element) {
  var win = (0, _getWindow.default)(element);
  var html = (0, _getDocumentElement.default)(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0, _getWindowScrollBarX.default)(element),
    y: y
  };
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js"}],"node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentRect;

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0, _getDocumentElement.default)(element);
  var winScroll = (0, _getWindowScroll.default)(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0, _math.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0, _math.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0, _getWindowScrollBarX.default)(element);
  var y = -winScroll.scrollTop;

  if ((0, _getComputedStyle.default)(body || html).direction === 'rtl') {
    x += (0, _math.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
},{"./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js","./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScrollParent;

var _getComputedStyle2 = _interopRequireDefault(require("./getComputedStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0, _getComputedStyle2.default)(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
},{"./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js"}],"node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollParent;

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0, _getNodeName.default)(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0, _instanceOf.isHTMLElement)(node) && (0, _isScrollParent.default)(node)) {
    return node;
  }

  return getScrollParent((0, _getParentNode.default)(node));
}
},{"./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listScrollParents;

var _getScrollParent = _interopRequireDefault(require("./getScrollParent.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0, _getScrollParent.default)(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0, _getWindow.default)(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0, _isScrollParent.default)(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0, _getParentNode.default)(target)));
}
},{"./getScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js"}],"node_modules/@popperjs/core/lib/utils/rectToClientRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rectToClientRect;

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClippingRect;

var _enums = require("../enums.js");

var _getViewportRect = _interopRequireDefault(require("./getViewportRect.js"));

var _getDocumentRect = _interopRequireDefault(require("./getDocumentRect.js"));

var _listScrollParents = _interopRequireDefault(require("./listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./getOffsetParent.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _contains = _interopRequireDefault(require("./contains.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _rectToClientRect = _interopRequireDefault(require("../utils/rectToClientRect.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInnerBoundingClientRect(element) {
  var rect = (0, _getBoundingClientRect.default)(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums.viewport ? (0, _rectToClientRect.default)((0, _getViewportRect.default)(element)) : (0, _instanceOf.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0, _rectToClientRect.default)((0, _getDocumentRect.default)((0, _getDocumentElement.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0, _listScrollParents.default)((0, _getParentNode.default)(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0, _getComputedStyle.default)(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0, _instanceOf.isHTMLElement)(element) ? (0, _getOffsetParent.default)(element) : element;

  if (!(0, _instanceOf.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0, _instanceOf.isElement)(clippingParent) && (0, _contains.default)(clippingParent, clipperElement) && (0, _getNodeName.default)(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0, _math.max)(rect.top, accRect.top);
    accRect.right = (0, _math.min)(rect.right, accRect.right);
    accRect.bottom = (0, _math.min)(rect.bottom, accRect.bottom);
    accRect.left = (0, _math.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","./getViewportRect.js":"node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js","./getDocumentRect.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js","./listScrollParents.js":"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js","./getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./contains.js":"node_modules/@popperjs/core/lib/dom-utils/contains.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","../utils/rectToClientRect.js":"node_modules/@popperjs/core/lib/utils/rectToClientRect.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/utils/computeOffsets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeOffsets;

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("./getMainAxisFromPlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0, _getBasePlacement.default)(placement) : null;
  var variation = placement ? (0, _getVariation.default)(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0, _getMainAxisFromPlacement.default)(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
},{"./getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","./getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","./getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/detectOverflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectOverflow;

var _getClippingRect = _interopRequireDefault(require("../dom-utils/getClippingRect.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _getBoundingClientRect = _interopRequireDefault(require("../dom-utils/getBoundingClientRect.js"));

var _computeOffsets = _interopRequireDefault(require("./computeOffsets.js"));

var _rectToClientRect = _interopRequireDefault(require("./rectToClientRect.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

var _mergePaddingObject = _interopRequireDefault(require("./mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("./expandToHashMap.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
  var altContext = elementContext === _enums.popper ? _enums.reference : _enums.popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0, _getClippingRect.default)((0, _instanceOf.isElement)(element) ? element : element.contextElement || (0, _getDocumentElement.default)(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0, _getBoundingClientRect.default)(state.elements.reference);
  var popperOffsets = (0, _computeOffsets.default)({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0, _rectToClientRect.default)(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums.right, _enums.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums.top, _enums.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
},{"../dom-utils/getClippingRect.js":"node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js","../dom-utils/getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","../dom-utils/getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./computeOffsets.js":"node_modules/@popperjs/core/lib/utils/computeOffsets.js","./rectToClientRect.js":"node_modules/@popperjs/core/lib/utils/rectToClientRect.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./mergePaddingObject.js":"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js","./expandToHashMap.js":"node_modules/@popperjs/core/lib/utils/expandToHashMap.js"}],"node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeAutoPlacement;

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("./detectOverflow.js"));

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums.placements : _options$allowedAutoP;
  var variation = (0, _getVariation.default)(placement);
  var placements = variation ? flipVariations ? _enums.variationPlacements : _enums.variationPlacements.filter(function (placement) {
    return (0, _getVariation.default)(placement) === variation;
  }) : _enums.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if ("development" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0, _getBasePlacement.default)(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
},{"./getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","./detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","./getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js"}],"node_modules/@popperjs/core/lib/modifiers/flip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getOppositePlacement = _interopRequireDefault(require("../utils/getOppositePlacement.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getOppositeVariationPlacement = _interopRequireDefault(require("../utils/getOppositeVariationPlacement.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _computeAutoPlacement = _interopRequireDefault(require("../utils/computeAutoPlacement.js"));

var _enums = require("../enums.js");

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function getExpandedFallbackPlacements(placement) {
  if ((0, _getBasePlacement.default)(placement) === _enums.auto) {
    return [];
  }

  var oppositePlacement = (0, _getOppositePlacement.default)(placement);
  return [(0, _getOppositeVariationPlacement.default)(placement), oppositePlacement, (0, _getOppositeVariationPlacement.default)(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0, _getBasePlacement.default)(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0, _getOppositePlacement.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0, _getBasePlacement.default)(placement) === _enums.auto ? (0, _computeAutoPlacement.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0, _getBasePlacement.default)(placement);

    var isStartVariation = (0, _getVariation.default)(placement) === _enums.start;

    var isVertical = [_enums.top, _enums.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums.right : _enums.left : isStartVariation ? _enums.bottom : _enums.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    }

    var altVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};
exports.default = _default;
},{"../utils/getOppositePlacement.js":"node_modules/@popperjs/core/lib/utils/getOppositePlacement.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getOppositeVariationPlacement.js":"node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","../utils/computeAutoPlacement.js":"node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js"}],"node_modules/@popperjs/core/lib/modifiers/hide.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums.top, _enums.right, _enums.bottom, _enums.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0, _detectOverflow.default)(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0, _detectOverflow.default)(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js"}],"node_modules/@popperjs/core/lib/modifiers/offset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.distanceAndSkiddingToXY = distanceAndSkiddingToXY;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0, _getBasePlacement.default)(placement);
  var invertDistance = [_enums.left, _enums.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums.left, _enums.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;

  var data = _enums.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});

  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _computeOffsets = _interopRequireDefault(require("../utils/computeOffsets.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = (0, _computeOffsets.default)({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};
exports.default = _default;
},{"../utils/computeOffsets.js":"node_modules/@popperjs/core/lib/utils/computeOffsets.js"}],"node_modules/@popperjs/core/lib/utils/getAltAxis.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAltAxis;

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
},{}],"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _getAltAxis = _interopRequireDefault(require("../utils/getAltAxis.js"));

var _within = require("../utils/within.js");

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

var _getFreshSideObject = _interopRequireDefault(require("../utils/getFreshSideObject.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0, _detectOverflow.default)(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var variation = (0, _getVariation.default)(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var altAxis = (0, _getAltAxis.default)(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? _enums.top : _enums.left;
    var altSide = mainAxis === 'y' ? _enums.bottom : _enums.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0, _getLayoutRect.default)(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, _getFreshSideObject.default)();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0, _within.within)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParent.default)(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = (0, _within.within)(tether ? (0, _math.min)(min, tetherMin) : min, offset, tether ? (0, _math.max)(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? _enums.top : _enums.left;

    var _altSide = mainAxis === 'x' ? _enums.bottom : _enums.right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [_enums.top, _enums.left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? (0, _within.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _within.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../utils/getAltAxis.js":"node_modules/@popperjs/core/lib/utils/getAltAxis.js","../utils/within.js":"node_modules/@popperjs/core/lib/utils/within.js","../dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","../utils/getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","../utils/getFreshSideObject.js":"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/modifiers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "applyStyles", {
  enumerable: true,
  get: function () {
    return _applyStyles.default;
  }
});
Object.defineProperty(exports, "arrow", {
  enumerable: true,
  get: function () {
    return _arrow.default;
  }
});
Object.defineProperty(exports, "computeStyles", {
  enumerable: true,
  get: function () {
    return _computeStyles.default;
  }
});
Object.defineProperty(exports, "eventListeners", {
  enumerable: true,
  get: function () {
    return _eventListeners.default;
  }
});
Object.defineProperty(exports, "flip", {
  enumerable: true,
  get: function () {
    return _flip.default;
  }
});
Object.defineProperty(exports, "hide", {
  enumerable: true,
  get: function () {
    return _hide.default;
  }
});
Object.defineProperty(exports, "offset", {
  enumerable: true,
  get: function () {
    return _offset.default;
  }
});
Object.defineProperty(exports, "popperOffsets", {
  enumerable: true,
  get: function () {
    return _popperOffsets.default;
  }
});
Object.defineProperty(exports, "preventOverflow", {
  enumerable: true,
  get: function () {
    return _preventOverflow.default;
  }
});

var _applyStyles = _interopRequireDefault(require("./applyStyles.js"));

var _arrow = _interopRequireDefault(require("./arrow.js"));

var _computeStyles = _interopRequireDefault(require("./computeStyles.js"));

var _eventListeners = _interopRequireDefault(require("./eventListeners.js"));

var _flip = _interopRequireDefault(require("./flip.js"));

var _hide = _interopRequireDefault(require("./hide.js"));

var _offset = _interopRequireDefault(require("./offset.js"));

var _popperOffsets = _interopRequireDefault(require("./popperOffsets.js"));

var _preventOverflow = _interopRequireDefault(require("./preventOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js","./arrow.js":"node_modules/@popperjs/core/lib/modifiers/arrow.js","./computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./flip.js":"node_modules/@popperjs/core/lib/modifiers/flip.js","./hide.js":"node_modules/@popperjs/core/lib/modifiers/hide.js","./offset.js":"node_modules/@popperjs/core/lib/modifiers/offset.js","./popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./preventOverflow.js":"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js"}],"node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHTMLElementScroll;

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeScroll;

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _instanceOf = require("./instanceOf.js");

var _getHTMLElementScroll = _interopRequireDefault(require("./getHTMLElementScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNodeScroll(node) {
  if (node === (0, _getWindow.default)(node) || !(0, _instanceOf.isHTMLElement)(node)) {
    return (0, _getWindowScroll.default)(node);
  } else {
    return (0, _getHTMLElementScroll.default)(node);
  }
}
},{"./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js","./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getHTMLElementScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js"}],"node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCompositeRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getNodeScroll = _interopRequireDefault(require("./getNodeScroll.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = (0, _math.round)(rect.width) / element.offsetWidth || 1;
  var scaleY = (0, _math.round)(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = (0, _instanceOf.isHTMLElement)(offsetParent);
  var offsetParentIsScaled = (0, _instanceOf.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
  var documentElement = (0, _getDocumentElement.default)(offsetParent);
  var rect = (0, _getBoundingClientRect.default)(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, _getNodeName.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0, _isScrollParent.default)(documentElement)) {
      scroll = (0, _getNodeScroll.default)(offsetParent);
    }

    if ((0, _instanceOf.isHTMLElement)(offsetParent)) {
      offsets = (0, _getBoundingClientRect.default)(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0, _getWindowScrollBarX.default)(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getNodeScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/utils/orderModifiers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = orderModifiers;

var _enums = require("../enums.js");

// source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
},{}],"node_modules/@popperjs/core/lib/utils/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
},{}],"node_modules/@popperjs/core/lib/utils/validateModifiers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateModifiers;

var _format = _interopRequireDefault(require("./format.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];

function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (_enums.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0, _format.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
},{"./format.js":"node_modules/@popperjs/core/lib/utils/format.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/uniqueBy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueBy;

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
},{}],"node_modules/@popperjs/core/lib/utils/mergeByName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeByName;

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
},{}],"node_modules/@popperjs/core/lib/createPopper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPopper = void 0;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _detectOverflow.default;
  }
});
exports.popperGenerator = popperGenerator;

var _getCompositeRect = _interopRequireDefault(require("./dom-utils/getCompositeRect.js"));

var _getLayoutRect = _interopRequireDefault(require("./dom-utils/getLayoutRect.js"));

var _listScrollParents = _interopRequireDefault(require("./dom-utils/listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./dom-utils/getOffsetParent.js"));

var _getComputedStyle2 = _interopRequireDefault(require("./dom-utils/getComputedStyle.js"));

var _orderModifiers = _interopRequireDefault(require("./utils/orderModifiers.js"));

var _debounce = _interopRequireDefault(require("./utils/debounce.js"));

var _validateModifiers = _interopRequireDefault(require("./utils/validateModifiers.js"));

var _uniqueBy = _interopRequireDefault(require("./utils/uniqueBy.js"));

var _getBasePlacement = _interopRequireDefault(require("./utils/getBasePlacement.js"));

var _mergeByName = _interopRequireDefault(require("./utils/mergeByName.js"));

var _detectOverflow = _interopRequireDefault(require("./utils/detectOverflow.js"));

var _instanceOf = require("./dom-utils/instanceOf.js");

var _enums = require("./enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0, _instanceOf.isElement)(reference) ? (0, _listScrollParents.default)(reference) : reference.contextElement ? (0, _listScrollParents.default)(reference.contextElement) : [],
          popper: (0, _listScrollParents.default)(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0, _orderModifiers.default)((0, _mergeByName.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if ("development" !== "production") {
          var modifiers = (0, _uniqueBy.default)([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0, _validateModifiers.default)(modifiers);

          if ((0, _getBasePlacement.default)(state.options.placement) === _enums.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0, _getComputedStyle2.default)(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if ("development" !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0, _getCompositeRect.default)(reference, (0, _getOffsetParent.default)(popper), state.options.strategy === 'fixed'),
          popper: (0, _getLayoutRect.default)(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("development" !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0, _debounce.default)(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if ("development" !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./dom-utils/getCompositeRect.js":"node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js","./dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","./dom-utils/listScrollParents.js":"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js","./dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","./dom-utils/getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./utils/orderModifiers.js":"node_modules/@popperjs/core/lib/utils/orderModifiers.js","./utils/debounce.js":"node_modules/@popperjs/core/lib/utils/debounce.js","./utils/validateModifiers.js":"node_modules/@popperjs/core/lib/utils/validateModifiers.js","./utils/uniqueBy.js":"node_modules/@popperjs/core/lib/utils/uniqueBy.js","./utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","./utils/mergeByName.js":"node_modules/@popperjs/core/lib/utils/mergeByName.js","./utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","./dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/popper-lite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultModifiers = exports.createPopper = void 0;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./modifiers/eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./modifiers/popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./modifiers/computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./modifiers/applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js"}],"node_modules/@popperjs/core/lib/popper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createPopper: true,
  defaultModifiers: true,
  popperGenerator: true,
  detectOverflow: true,
  createPopperLite: true
};
exports.createPopper = void 0;
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});
exports.defaultModifiers = void 0;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

var _offset = _interopRequireDefault(require("./modifiers/offset.js"));

var _flip = _interopRequireDefault(require("./modifiers/flip.js"));

var _preventOverflow = _interopRequireDefault(require("./modifiers/preventOverflow.js"));

var _arrow = _interopRequireDefault(require("./modifiers/arrow.js"));

var _hide = _interopRequireDefault(require("./modifiers/hide.js"));

var _popperLite = require("./popper-lite.js");

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default, _offset.default, _flip.default, _preventOverflow.default, _arrow.default, _hide.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./modifiers/eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./modifiers/popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./modifiers/computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./modifiers/applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js","./modifiers/offset.js":"node_modules/@popperjs/core/lib/modifiers/offset.js","./modifiers/flip.js":"node_modules/@popperjs/core/lib/modifiers/flip.js","./modifiers/preventOverflow.js":"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js","./modifiers/arrow.js":"node_modules/@popperjs/core/lib/modifiers/arrow.js","./modifiers/hide.js":"node_modules/@popperjs/core/lib/modifiers/hide.js","./popper-lite.js":"node_modules/@popperjs/core/lib/popper-lite.js","./modifiers/index.js":"node_modules/@popperjs/core/lib/modifiers/index.js"}],"node_modules/@popperjs/core/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  popperGenerator: true,
  detectOverflow: true,
  createPopperBase: true,
  createPopper: true,
  createPopperLite: true
};
Object.defineProperty(exports, "createPopper", {
  enumerable: true,
  get: function () {
    return _popper.createPopper;
  }
});
Object.defineProperty(exports, "createPopperBase", {
  enumerable: true,
  get: function () {
    return _createPopper.createPopper;
  }
});
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});

var _enums = require("./enums.js");

Object.keys(_enums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _enums[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enums[key];
    }
  });
});

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

var _createPopper = require("./createPopper.js");

var _popper = require("./popper.js");

var _popperLite = require("./popper-lite.js");
},{"./enums.js":"node_modules/@popperjs/core/lib/enums.js","./modifiers/index.js":"node_modules/@popperjs/core/lib/modifiers/index.js","./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./popper.js":"node_modules/@popperjs/core/lib/popper.js","./popper-lite.js":"node_modules/@popperjs/core/lib/popper-lite.js"}],"static/vendors/bootstrap/bootstrap.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
  * Bootstrap v5.0.0-beta2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(this, function (t) {
  "use strict";

  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (n) {
      if ("default" !== n) {
        var i = Object.getOwnPropertyDescriptor(t, n);
        Object.defineProperty(e, n, i.get ? i : {
          enumerable: !0,
          get: function get() {
            return t[n];
          }
        });
      }
    }), e.default = t, Object.freeze(e);
  }

  var n = e(t);

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function s() {
    return (s = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  function r(t, e) {
    var n, i;
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n = t, i = e, (Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(n, i);
  }

  var a,
      l,
      c = function c(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      u = function u(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var n = t.getAttribute("href");
      if (!n || !n.includes("#") && !n.startsWith(".")) return null;
      n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), e = n && "#" !== n ? n.trim() : null;
    }

    return e;
  },
      h = function h(t) {
    var e = u(t);
    return e && document.querySelector(e) ? e : null;
  },
      d = function d(t) {
    var e = u(t);
    return e ? document.querySelector(e) : null;
  },
      f = function f(t) {
    if (!t) return 0;
    var e = window.getComputedStyle(t),
        n = e.transitionDuration,
        i = e.transitionDelay,
        o = Number.parseFloat(n),
        s = Number.parseFloat(i);
    return o || s ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0;
  },
      p = function p(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      g = function g(t) {
    return (t[0] || t).nodeType;
  },
      m = function m(t, e) {
    var n = !1,
        i = e + 5;
    t.addEventListener("transitionend", function e() {
      n = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(function () {
      n || p(t);
    }, i);
  },
      _ = function _(t, e, n) {
    Object.keys(n).forEach(function (i) {
      var o,
          s = n[i],
          r = e[i],
          a = r && g(r) ? "element" : null == (o = r) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
      if (!new RegExp(s).test(a)) throw new TypeError(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + s + '".');
    });
  },
      v = function v(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var e = getComputedStyle(t),
          n = getComputedStyle(t.parentNode);
      return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility;
    }

    return !1;
  },
      b = function b() {
    return function () {};
  },
      y = function y(t) {
    return t.offsetHeight;
  },
      w = function w() {
    var t = window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      E = "rtl" === document.documentElement.dir,
      T = function T(t, e) {
    var n;
    n = function n() {
      var n = w();

      if (n) {
        var i = n.fn[t];
        n.fn[t] = e.jQueryInterface, n.fn[t].Constructor = e, n.fn[t].noConflict = function () {
          return n.fn[t] = i, e.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : n();
  },
      A = (a = {}, l = 1, {
    set: function set(t, e, n) {
      void 0 === t.bsKey && (t.bsKey = {
        key: e,
        id: l
      }, l++), a[t.bsKey.id] = n;
    },
    get: function get(t, e) {
      if (!t || void 0 === t.bsKey) return null;
      var n = t.bsKey;
      return n.key === e ? a[n.id] : null;
    },
    delete: function _delete(t, e) {
      if (void 0 !== t.bsKey) {
        var n = t.bsKey;
        n.key === e && (delete a[n.id], delete t.bsKey);
      }
    }
  }),
      k = function k(t, e, n) {
    A.set(t, e, n);
  },
      L = function L(t, e) {
    return A.get(t, e);
  },
      C = /[^.]*(?=\..*)\.|.*/,
      D = /\..*/,
      S = /::\d+$/,
      N = {},
      O = 1,
      I = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      j = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function P(t, e) {
    return e && e + "::" + O++ || t.uidEvent || O++;
  }

  function x(t) {
    var e = P(t);
    return t.uidEvent = e, N[e] = N[e] || {}, N[e];
  }

  function H(t, e, n) {
    void 0 === n && (n = null);

    for (var i = Object.keys(t), o = 0, s = i.length; o < s; o++) {
      var r = t[i[o]];
      if (r.originalHandler === e && r.delegationSelector === n) return r;
    }

    return null;
  }

  function B(t, e, n) {
    var i = "string" == typeof e,
        o = i ? n : e,
        s = t.replace(D, ""),
        r = I[s];
    return r && (s = r), j.has(s) || (s = t), [i, o, s];
  }

  function M(t, e, n, i, o) {
    if ("string" == typeof e && t) {
      n || (n = i, i = null);
      var s = B(e, n, i),
          r = s[0],
          a = s[1],
          l = s[2],
          c = x(t),
          u = c[l] || (c[l] = {}),
          h = H(u, a, r ? n : null);
      if (h) h.oneOff = h.oneOff && o;else {
        var d = P(a, e.replace(C, "")),
            f = r ? function (t, e, n) {
          return function i(o) {
            for (var s = t.querySelectorAll(e), r = o.target; r && r !== this; r = r.parentNode) {
              for (var a = s.length; a--;) {
                if (s[a] === r) return o.delegateTarget = r, i.oneOff && K.off(t, o.type, n), n.apply(r, [o]);
              }
            }

            return null;
          };
        }(t, n, i) : function (t, e) {
          return function n(i) {
            return i.delegateTarget = t, n.oneOff && K.off(t, i.type, e), e.apply(t, [i]);
          };
        }(t, n);
        f.delegationSelector = r ? n : null, f.originalHandler = a, f.oneOff = o, f.uidEvent = d, u[d] = f, t.addEventListener(l, f, r);
      }
    }
  }

  function R(t, e, n, i, o) {
    var s = H(e[n], i, o);
    s && (t.removeEventListener(n, s, Boolean(o)), delete e[n][s.uidEvent]);
  }

  var K = {
    on: function on(t, e, n, i) {
      M(t, e, n, i, !1);
    },
    one: function one(t, e, n, i) {
      M(t, e, n, i, !0);
    },
    off: function off(t, e, n, i) {
      if ("string" == typeof e && t) {
        var o = B(e, n, i),
            s = o[0],
            r = o[1],
            a = o[2],
            l = a !== e,
            c = x(t),
            u = e.startsWith(".");

        if (void 0 === r) {
          u && Object.keys(c).forEach(function (n) {
            !function (t, e, n, i) {
              var o = e[n] || {};
              Object.keys(o).forEach(function (s) {
                if (s.includes(i)) {
                  var r = o[s];
                  R(t, e, n, r.originalHandler, r.delegationSelector);
                }
              });
            }(t, c, n, e.slice(1));
          });
          var h = c[a] || {};
          Object.keys(h).forEach(function (n) {
            var i = n.replace(S, "");

            if (!l || e.includes(i)) {
              var o = h[n];
              R(t, c, a, o.originalHandler, o.delegationSelector);
            }
          });
        } else {
          if (!c || !c[a]) return;
          R(t, c, a, r, s ? n : null);
        }
      }
    },
    trigger: function trigger(t, e, n) {
      if ("string" != typeof e || !t) return null;
      var i,
          o = w(),
          s = e.replace(D, ""),
          r = e !== s,
          a = j.has(s),
          l = !0,
          c = !0,
          u = !1,
          h = null;
      return r && o && (i = o.Event(e, n), o(t).trigger(i), l = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), u = i.isDefaultPrevented()), a ? (h = document.createEvent("HTMLEvents")).initEvent(s, l, !0) : h = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== n && Object.keys(n).forEach(function (t) {
        Object.defineProperty(h, t, {
          get: function get() {
            return n[t];
          }
        });
      }), u && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== i && i.preventDefault(), h;
    }
  },
      W = function () {
    function t(t) {
      t && (this._element = t, k(t, this.constructor.DATA_KEY, this));
    }

    return t.prototype.dispose = function () {
      var t, e;
      t = this._element, e = this.constructor.DATA_KEY, A.delete(t, e), this._element = null;
    }, t.getInstance = function (t) {
      return L(t, this.DATA_KEY);
    }, o(t, null, [{
      key: "VERSION",
      get: function get() {
        return "5.0.0-beta2";
      }
    }]), t;
  }(),
      U = function (t) {
    function e() {
      return t.apply(this, arguments) || this;
    }

    r(e, t);
    var n = e.prototype;
    return n.close = function (t) {
      var e = t ? this._getRootElement(t) : this._element,
          n = this._triggerCloseEvent(e);

      null === n || n.defaultPrevented || this._removeElement(e);
    }, n._getRootElement = function (t) {
      return d(t) || t.closest(".alert");
    }, n._triggerCloseEvent = function (t) {
      return K.trigger(t, "close.bs.alert");
    }, n._removeElement = function (t) {
      var e = this;

      if (t.classList.remove("show"), t.classList.contains("fade")) {
        var n = f(t);
        K.one(t, "transitionend", function () {
          return e._destroyElement(t);
        }), m(t, n);
      } else this._destroyElement(t);
    }, n._destroyElement = function (t) {
      t.parentNode && t.parentNode.removeChild(t), K.trigger(t, "closed.bs.alert");
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.alert");
        n || (n = new e(this)), "close" === t && n[t](this);
      });
    }, e.handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, o(e, null, [{
      key: "DATA_KEY",
      get: function get() {
        return "bs.alert";
      }
    }]), e;
  }(W);

  K.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', U.handleDismiss(new U())), T("alert", U);

  var F = function (t) {
    function e() {
      return t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.toggle = function () {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.button");
        n || (n = new e(this)), "toggle" === t && n[t]();
      });
    }, o(e, null, [{
      key: "DATA_KEY",
      get: function get() {
        return "bs.button";
      }
    }]), e;
  }(W);

  function z(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function Y(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  K.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]'),
        n = L(e, "bs.button");
    n || (n = new F(e)), n.toggle();
  }), T("button", F);

  var X = {
    setDataAttribute: function setDataAttribute(t, e, n) {
      t.setAttribute("data-bs-" + Y(e), n);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + Y(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (n) {
        var i = n.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = z(t.dataset[n]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return z(t.getAttribute("data-bs-" + Y(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      q = function q(t, e) {
    var n;
    return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(e, t));
  },
      Q = function Q(t, e) {
    return void 0 === e && (e = document.documentElement), Element.prototype.querySelector.call(e, t);
  },
      V = function V(t, e) {
    var n;
    return (n = []).concat.apply(n, t.children).filter(function (t) {
      return t.matches(e);
    });
  },
      $ = function $(t, e) {
    for (var n = t.previousElementSibling; n;) {
      if (n.matches(e)) return [n];
      n = n.previousElementSibling;
    }

    return [];
  },
      G = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      Z = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      J = function (t) {
    function e(e, n) {
      var i;
      return (i = t.call(this, e) || this)._items = null, i._interval = null, i._activeElement = null, i._isPaused = !1, i._isSliding = !1, i.touchTimeout = null, i.touchStartX = 0, i.touchDeltaX = 0, i._config = i._getConfig(n), i._indicatorsElement = Q(".carousel-indicators", i._element), i._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, i._pointerEvent = Boolean(window.PointerEvent), i._addEventListeners(), i;
    }

    r(e, t);
    var n = e.prototype;
    return n.next = function () {
      this._isSliding || this._slide("next");
    }, n.nextWhenVisible = function () {
      !document.hidden && v(this._element) && this.next();
    }, n.prev = function () {
      this._isSliding || this._slide("prev");
    }, n.pause = function (t) {
      t || (this._isPaused = !0), Q(".carousel-item-next, .carousel-item-prev", this._element) && (p(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, n.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, n.to = function (t) {
      var e = this;
      this._activeElement = Q(".active.carousel-item", this._element);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) K.one(this._element, "slid.bs.carousel", function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = t > n ? "next" : "prev";

        this._slide(i, this._items[t]);
      }
    }, n.dispose = function () {
      t.prototype.dispose.call(this), K.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, n._getConfig = function (t) {
      return t = s({}, G, t), _("carousel", t, Z), t;
    }, n._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e > 0 && (E ? this.next() : this.prev()), e < 0 && (E ? this.prev() : this.next());
      }
    }, n._addEventListeners = function () {
      var t = this;
      this._config.keyboard && K.on(this._element, "keydown.bs.carousel", function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && (K.on(this._element, "mouseenter.bs.carousel", function (e) {
        return t.pause(e);
      }), K.on(this._element, "mouseleave.bs.carousel", function (e) {
        return t.cycle(e);
      })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }, n._addTouchEventListeners = function () {
      var t = this,
          e = function e(_e) {
        !t._pointerEvent || "pen" !== _e.pointerType && "touch" !== _e.pointerType ? t._pointerEvent || (t.touchStartX = _e.touches[0].clientX) : t.touchStartX = _e.clientX;
      },
          n = function n(e) {
        !t._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType || (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
          return t.cycle(e);
        }, 500 + t._config.interval));
      };

      q(".carousel-item img", this._element).forEach(function (t) {
        K.on(t, "dragstart.bs.carousel", function (t) {
          return t.preventDefault();
        });
      }), this._pointerEvent ? (K.on(this._element, "pointerdown.bs.carousel", function (t) {
        return e(t);
      }), K.on(this._element, "pointerup.bs.carousel", function (t) {
        return n(t);
      }), this._element.classList.add("pointer-event")) : (K.on(this._element, "touchstart.bs.carousel", function (t) {
        return e(t);
      }), K.on(this._element, "touchmove.bs.carousel", function (e) {
        return function (e) {
          e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX;
        }(e);
      }), K.on(this._element, "touchend.bs.carousel", function (t) {
        return n(t);
      }));
    }, n._keydown = function (t) {
      /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), E ? this.next() : this.prev()) : "ArrowRight" === t.key && (t.preventDefault(), E ? this.prev() : this.next()));
    }, n._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? q(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
    }, n._getItemByDirection = function (t, e) {
      var n = "next" === t,
          i = "prev" === t,
          o = this._getItemIndex(e),
          s = this._items.length - 1;

      if ((i && 0 === o || n && o === s) && !this._config.wrap) return e;
      var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
      return -1 === r ? this._items[this._items.length - 1] : this._items[r];
    }, n._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(Q(".active.carousel-item", this._element));

      return K.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });
    }, n._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = Q(".active", this._indicatorsElement);
        e.classList.remove("active"), e.removeAttribute("aria-current");

        for (var n = q("[data-bs-target]", this._indicatorsElement), i = 0; i < n.length; i++) {
          if (Number.parseInt(n[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
            n[i].classList.add("active"), n[i].setAttribute("aria-current", "true");
            break;
          }
        }
      }
    }, n._updateInterval = function () {
      var t = this._activeElement || Q(".active.carousel-item", this._element);

      if (t) {
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, n._slide = function (t, e) {
      var n = this,
          i = Q(".active.carousel-item", this._element),
          o = this._getItemIndex(i),
          s = e || i && this._getItemByDirection(t, i),
          r = this._getItemIndex(s),
          a = Boolean(this._interval),
          l = "next" === t ? "carousel-item-start" : "carousel-item-end",
          c = "next" === t ? "carousel-item-next" : "carousel-item-prev",
          u = "next" === t ? "left" : "right";

      if (s && s.classList.contains("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(s, u).defaultPrevented && i && s) {
        if (this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s), this._activeElement = s, this._element.classList.contains("slide")) {
          s.classList.add(c), y(s), i.classList.add(l), s.classList.add(l);
          var h = f(i);
          K.one(i, "transitionend", function () {
            s.classList.remove(l, c), s.classList.add("active"), i.classList.remove("active", c, l), n._isSliding = !1, setTimeout(function () {
              K.trigger(n._element, "slid.bs.carousel", {
                relatedTarget: s,
                direction: u,
                from: o,
                to: r
              });
            }, 0);
          }), m(i, h);
        } else i.classList.remove("active"), s.classList.add("active"), this._isSliding = !1, K.trigger(this._element, "slid.bs.carousel", {
          relatedTarget: s,
          direction: u,
          from: o,
          to: r
        });

        a && this.cycle();
      }
    }, e.carouselInterface = function (t, n) {
      var i = L(t, "bs.carousel"),
          o = s({}, G, X.getDataAttributes(t));
      "object" == _typeof(n) && (o = s({}, o, n));
      var r = "string" == typeof n ? n : o.slide;
      if (i || (i = new e(t, o)), "number" == typeof n) i.to(n);else if ("string" == typeof r) {
        if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
        i[r]();
      } else o.interval && o.ride && (i.pause(), i.cycle());
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        e.carouselInterface(this, t);
      });
    }, e.dataApiClickHandler = function (t) {
      var n = d(this);

      if (n && n.classList.contains("carousel")) {
        var i = s({}, X.getDataAttributes(n), X.getDataAttributes(this)),
            o = this.getAttribute("data-bs-slide-to");
        o && (i.interval = !1), e.carouselInterface(n, i), o && L(n, "bs.carousel").to(o), t.preventDefault();
      }
    }, o(e, null, [{
      key: "Default",
      get: function get() {
        return G;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.carousel";
      }
    }]), e;
  }(W);

  K.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler), K.on(window, "load.bs.carousel.data-api", function () {
    for (var t = q('[data-bs-ride="carousel"]'), e = 0, n = t.length; e < n; e++) {
      J.carouselInterface(t[e], L(t[e], "bs.carousel"));
    }
  }), T("carousel", J);

  var tt = {
    toggle: !0,
    parent: ""
  },
      et = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      nt = function (t) {
    function e(e, n) {
      var i;
      (i = t.call(this, e) || this)._isTransitioning = !1, i._config = i._getConfig(n), i._triggerArray = q('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');

      for (var o = q('[data-bs-toggle="collapse"]'), s = 0, r = o.length; s < r; s++) {
        var a = o[s],
            l = h(a),
            c = q(l).filter(function (t) {
          return t === e;
        });
        null !== l && c.length && (i._selector = l, i._triggerArray.push(a));
      }

      return i._parent = i._config.parent ? i._getParent() : null, i._config.parent || i._addAriaAndCollapsedClass(i._element, i._triggerArray), i._config.toggle && i.toggle(), i;
    }

    r(e, t);
    var n = e.prototype;
    return n.toggle = function () {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }, n.show = function () {
      var t = this;

      if (!this._isTransitioning && !this._element.classList.contains("show")) {
        var n, i;
        this._parent && 0 === (n = q(".show, .collapsing", this._parent).filter(function (e) {
          return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse");
        })).length && (n = null);
        var o = Q(this._selector);

        if (n) {
          var s = n.find(function (t) {
            return o !== t;
          });
          if ((i = s ? L(s, "bs.collapse") : null) && i._isTransitioning) return;
        }

        if (!K.trigger(this._element, "show.bs.collapse").defaultPrevented) {
          n && n.forEach(function (t) {
            o !== t && e.collapseInterface(t, "hide"), i || k(t, "bs.collapse", null);
          });

          var r = this._getDimension();

          this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[r] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
            t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
          }), this.setTransitioning(!0);
          var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              l = f(this._element);
          K.one(this._element, "transitionend", function () {
            t._element.classList.remove("collapsing"), t._element.classList.add("collapse", "show"), t._element.style[r] = "", t.setTransitioning(!1), K.trigger(t._element, "shown.bs.collapse");
          }), m(this._element, l), this._element.style[r] = this._element[a] + "px";
        }
      }
    }, n.hide = function () {
      var t = this;

      if (!this._isTransitioning && this._element.classList.contains("show") && !K.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
        var e = this._getDimension();

        this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", y(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var n = this._triggerArray.length;
        if (n > 0) for (var i = 0; i < n; i++) {
          var o = this._triggerArray[i],
              s = d(o);
          s && !s.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[e] = "";
        var r = f(this._element);
        K.one(this._element, "transitionend", function () {
          t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), K.trigger(t._element, "hidden.bs.collapse");
        }), m(this._element, r);
      }
    }, n.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, n.dispose = function () {
      t.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null;
    }, n._getConfig = function (t) {
      return (t = s({}, tt, t)).toggle = Boolean(t.toggle), _("collapse", t, et), t;
    }, n._getDimension = function () {
      return this._element.classList.contains("width") ? "width" : "height";
    }, n._getParent = function () {
      var t = this,
          e = this._config.parent;
      return g(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = Q(e), q('[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]', e).forEach(function (e) {
        var n = d(e);

        t._addAriaAndCollapsedClass(n, [e]);
      }), e;
    }, n._addAriaAndCollapsedClass = function (t, e) {
      if (t && e.length) {
        var n = t.classList.contains("show");
        e.forEach(function (t) {
          n ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", n);
        });
      }
    }, e.collapseInterface = function (t, n) {
      var i = L(t, "bs.collapse"),
          o = s({}, tt, X.getDataAttributes(t), "object" == _typeof(n) && n ? n : {});

      if (!i && o.toggle && "string" == typeof n && /show|hide/.test(n) && (o.toggle = !1), i || (i = new e(t, o)), "string" == typeof n) {
        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
        i[n]();
      }
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        e.collapseInterface(this, t);
      });
    }, o(e, null, [{
      key: "Default",
      get: function get() {
        return tt;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.collapse";
      }
    }]), e;
  }(W);

  K.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = X.getDataAttributes(this),
        n = h(this);
    q(n).forEach(function (t) {
      var n,
          i = L(t, "bs.collapse");
      i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, nt.collapseInterface(t, n);
    });
  }), T("collapse", nt);

  var it = new RegExp("ArrowUp|ArrowDown|Escape"),
      ot = E ? "top-end" : "top-start",
      st = E ? "top-start" : "top-end",
      rt = E ? "bottom-end" : "bottom-start",
      at = E ? "bottom-start" : "bottom-end",
      lt = E ? "left-start" : "right-start",
      ct = E ? "right-start" : "left-start",
      ut = {
    offset: [0, 2],
    flip: !0,
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      ht = {
    offset: "(array|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)"
  },
      dt = function (e) {
    function i(t, n) {
      var i;
      return (i = e.call(this, t) || this)._popper = null, i._config = i._getConfig(n), i._menu = i._getMenuElement(), i._inNavbar = i._detectNavbar(), i._addEventListeners(), i;
    }

    r(i, e);
    var a = i.prototype;
    return a.toggle = function () {
      if (!this._element.disabled && !this._element.classList.contains("disabled")) {
        var t = this._element.classList.contains("show");

        i.clearMenus(), t || this.show();
      }
    }, a.show = function () {
      if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
        var e = i.getParentFromElement(this._element),
            o = {
          relatedTarget: this._element
        };

        if (!K.trigger(this._element, "show.bs.dropdown", o).defaultPrevented) {
          if (this._inNavbar) X.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var s = this._element;
            "parent" === this._config.reference ? s = e : g(this._config.reference) ? (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])) : "object" == _typeof(this._config.reference) && (s = this._config.reference);

            var r = this._getPopperConfig(),
                a = r.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = t.createPopper(s, this._menu, r), a && X.setDataAttribute(this._menu, "popper", "static");
          }
          var l;
          "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (l = []).concat.apply(l, document.body.children).forEach(function (t) {
            return K.on(t, "mouseover", null, function () {});
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), K.trigger(this._element, "shown.bs.dropdown", o);
        }
      }
    }, a.hide = function () {
      if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
        var t = {
          relatedTarget: this._element
        };
        K.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), X.removeDataAttribute(this._menu, "popper"), K.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, a.dispose = function () {
      e.prototype.dispose.call(this), K.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null);
    }, a.update = function () {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }, a._addEventListeners = function () {
      var t = this;
      K.on(this._element, "click.bs.dropdown", function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, a._getConfig = function (t) {
      if (t = s({}, this.constructor.Default, X.getDataAttributes(this._element), t), _("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !g(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return t;
    }, a._getMenuElement = function () {
      return function (t, e) {
        for (var n = t.nextElementSibling; n;) {
          if (n.matches(e)) return [n];
          n = n.nextElementSibling;
        }

        return [];
      }(this._element, ".dropdown-menu")[0];
    }, a._getPlacement = function () {
      var t = this._element.parentNode;
      if (t.classList.contains("dropend")) return lt;
      if (t.classList.contains("dropstart")) return ct;
      var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? st : ot : e ? at : rt;
    }, a._detectNavbar = function () {
      return null !== this._element.closest(".navbar");
    }, a._getOffset = function () {
      var t = this,
          e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (t) {
        return Number.parseInt(t, 10);
      }) : "function" == typeof e ? function (n) {
        return e(n, t._element);
      } : e;
    }, a._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            altBoundary: this._config.flip,
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return "static" === this._config.display && (t.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), s({}, t, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
    }, i.dropdownInterface = function (t, e) {
      var n = L(t, "bs.dropdown");

      if (n || (n = new i(t, "object" == _typeof(e) ? e : null)), "string" == typeof e) {
        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
        n[e]();
      }
    }, i.jQueryInterface = function (t) {
      return this.each(function () {
        i.dropdownInterface(this, t);
      });
    }, i.clearMenus = function (t) {
      if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key)) for (var e = q('[data-bs-toggle="dropdown"]'), n = 0, i = e.length; n < i; n++) {
        var o = L(e[n], "bs.dropdown"),
            s = {
          relatedTarget: e[n]
        };

        if (t && "click" === t.type && (s.clickEvent = t), o) {
          var r,
              a = o._menu;
          if (e[n].classList.contains("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && a.contains(t.target) || K.trigger(e[n], "hide.bs.dropdown", s).defaultPrevented)) "ontouchstart" in document.documentElement && (r = []).concat.apply(r, document.body.children).forEach(function (t) {
            return K.off(t, "mouseover", null, function () {});
          }), e[n].setAttribute("aria-expanded", "false"), o._popper && o._popper.destroy(), a.classList.remove("show"), e[n].classList.remove("show"), X.removeDataAttribute(a, "popper"), K.trigger(e[n], "hidden.bs.dropdown", s);
        }
      }
    }, i.getParentFromElement = function (t) {
      return d(t) || t.parentNode;
    }, i.dataApiKeydownHandler = function (t) {
      if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !it.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
        var e = i.getParentFromElement(this),
            n = this.classList.contains("show");
        if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : $(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void i.clearMenus();
        if (n || "ArrowUp" !== t.key && "ArrowDown" !== t.key) {
          if (n && "Space" !== t.key) {
            var o = q(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(v);

            if (o.length) {
              var s = o.indexOf(t.target);
              "ArrowUp" === t.key && s > 0 && s--, "ArrowDown" === t.key && s < o.length - 1 && s++, o[s = -1 === s ? 0 : s].focus();
            }
          } else i.clearMenus();
        } else (this.matches('[data-bs-toggle="dropdown"]') ? this : $(this, '[data-bs-toggle="dropdown"]')[0]).click();
      }
    }, o(i, null, [{
      key: "Default",
      get: function get() {
        return ut;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ht;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.dropdown";
      }
    }]), i;
  }(W);

  K.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', dt.dataApiKeydownHandler), K.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", dt.dataApiKeydownHandler), K.on(document, "click.bs.dropdown.data-api", dt.clearMenus), K.on(document, "keyup.bs.dropdown.data-api", dt.clearMenus), K.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), t.stopPropagation(), dt.dropdownInterface(this, "toggle");
  }), K.on(document, "click.bs.dropdown.data-api", ".dropdown form", function (t) {
    return t.stopPropagation();
  }), T("dropdown", dt);

  var ft = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      pt = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  },
      gt = function (t) {
    function e(e, n) {
      var i;
      return (i = t.call(this, e) || this)._config = i._getConfig(n), i._dialog = Q(".modal-dialog", e), i._backdrop = null, i._isShown = !1, i._isBodyOverflowing = !1, i._ignoreBackdropClick = !1, i._isTransitioning = !1, i._scrollbarWidth = 0, i;
    }

    r(e, t);
    var n = e.prototype;
    return n.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, n.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        this._element.classList.contains("fade") && (this._isTransitioning = !0);
        var n = K.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        });
        this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), K.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return e.hide(t);
        }), K.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          K.one(e._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === e._element && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, n.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning && !K.trigger(this._element, "hide.bs.modal").defaultPrevented) {
        this._isShown = !1;

        var n = this._element.classList.contains("fade");

        if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), K.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), K.off(this._element, "click.dismiss.bs.modal"), K.off(this._dialog, "mousedown.dismiss.bs.modal"), n) {
          var i = f(this._element);
          K.one(this._element, "transitionend", function (t) {
            return e._hideModal(t);
          }), m(this._element, i);
        } else this._hideModal();
      }
    }, n.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return K.off(t, ".bs.modal");
      }), t.prototype.dispose.call(this), K.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, n.handleUpdate = function () {
      this._adjustDialog();
    }, n._getConfig = function (t) {
      return t = s({}, ft, t), _("modal", t, pt), t;
    }, n._showElement = function (t) {
      var e = this,
          n = this._element.classList.contains("fade"),
          i = Q(".modal-body", this._dialog);

      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && y(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();

      var o = function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, K.trigger(e._element, "shown.bs.modal", {
          relatedTarget: t
        });
      };

      if (n) {
        var s = f(this._dialog);
        K.one(this._dialog, "transitionend", o), m(this._dialog, s);
      } else o();
    }, n._enforceFocus = function () {
      var t = this;
      K.off(document, "focusin.bs.modal"), K.on(document, "focusin.bs.modal", function (e) {
        document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus();
      });
    }, n._setEscapeEvent = function () {
      var t = this;
      this._isShown ? K.on(this._element, "keydown.dismiss.bs.modal", function (e) {
        t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition();
      }) : K.off(this._element, "keydown.dismiss.bs.modal");
    }, n._setResizeEvent = function () {
      var t = this;
      this._isShown ? K.on(window, "resize.bs.modal", function () {
        return t._adjustDialog();
      }) : K.off(window, "resize.bs.modal");
    }, n._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
        document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), K.trigger(t._element, "hidden.bs.modal");
      });
    }, n._removeBackdrop = function () {
      this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
    }, n._showBackdrop = function (t) {
      var e = this,
          n = this._element.classList.contains("fade") ? "fade" : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), K.on(this._element, "click.dismiss.bs.modal", function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide());
        }), n && y(this._backdrop), this._backdrop.classList.add("show"), !n) return void t();
        var i = f(this._backdrop);
        K.one(this._backdrop, "transitionend", t), m(this._backdrop, i);
      } else if (!this._isShown && this._backdrop) {
        this._backdrop.classList.remove("show");

        var o = function o() {
          e._removeBackdrop(), t();
        };

        if (this._element.classList.contains("fade")) {
          var s = f(this._backdrop);
          K.one(this._backdrop, "transitionend", o), m(this._backdrop, s);
        } else o();
      } else t();
    }, n._triggerBackdropTransition = function () {
      var t = this;

      if (!K.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        var n = f(this._dialog);
        K.off(this._element, "transitionend"), K.one(this._element, "transitionend", function () {
          t._element.classList.remove("modal-static"), e || (K.one(t._element, "transitionend", function () {
            t._element.style.overflowY = "";
          }), m(t._element, n));
        }), m(this._element, n), this._element.focus();
      }
    }, n._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      (!this._isBodyOverflowing && t && !E || this._isBodyOverflowing && !t && E) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !E || !this._isBodyOverflowing && t && E) && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, n._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, n._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, n._setScrollbar = function () {
      var t = this;
      this._isBodyOverflowing && (this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
        return e + t._scrollbarWidth;
      }), this._setElementAttributes(".sticky-top", "marginRight", function (e) {
        return e - t._scrollbarWidth;
      }), this._setElementAttributes("body", "paddingRight", function (e) {
        return e + t._scrollbarWidth;
      })), document.body.classList.add("modal-open");
    }, n._setElementAttributes = function (t, e, n) {
      q(t).forEach(function (t) {
        var i = t.style[e],
            o = window.getComputedStyle(t)[e];
        X.setDataAttribute(t, e, i), t.style[e] = n(Number.parseFloat(o)) + "px";
      });
    }, n._resetScrollbar = function () {
      this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight"), this._resetElementAttributes("body", "paddingRight");
    }, n._resetElementAttributes = function (t, e) {
      q(t).forEach(function (t) {
        var n = X.getDataAttribute(t, e);
        void 0 === n && t === document.body ? t.style[e] = "" : (X.removeDataAttribute(t, e), t.style[e] = n);
      });
    }, n._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = "modal-scrollbar-measure", document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, e.jQueryInterface = function (t, n) {
      return this.each(function () {
        var i = L(this, "bs.modal"),
            o = s({}, ft, X.getDataAttributes(this), "object" == _typeof(t) && t ? t : {});

        if (i || (i = new e(this, o)), "string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
          i[t](n);
        }
      });
    }, o(e, null, [{
      key: "Default",
      get: function get() {
        return ft;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.modal";
      }
    }]), e;
  }(W);

  K.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var e = this,
        n = d(this);
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), K.one(n, "show.bs.modal", function (t) {
      t.defaultPrevented || K.one(n, "hidden.bs.modal", function () {
        v(e) && e.focus();
      });
    });
    var i = L(n, "bs.modal");

    if (!i) {
      var o = s({}, X.getDataAttributes(n), X.getDataAttributes(this));
      i = new gt(n, o);
    }

    i.toggle(this);
  }), T("modal", gt);
  var mt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      _t = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      vt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function bt(t, e, n) {
    var i;
    if (!t.length) return t;
    if (n && "function" == typeof n) return n(t);

    for (var o = new window.DOMParser().parseFromString(t, "text/html"), s = Object.keys(e), r = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function a(t, n) {
      var i,
          o = r[t],
          a = o.nodeName.toLowerCase();
      if (!s.includes(a)) return o.parentNode.removeChild(o), "continue";
      var l = (i = []).concat.apply(i, o.attributes),
          c = [].concat(e["*"] || [], e[a] || []);
      l.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (e.includes(n)) return !mt.has(n) || Boolean(_t.test(t.nodeValue) || vt.test(t.nodeValue));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, s = i.length; o < s; o++) {
            if (i[o].test(n)) return !0;
          }

          return !1;
        })(t, c) || o.removeAttribute(t.nodeName);
      });
    }, l = 0, c = r.length; l < c; l++) {
      a(l);
    }

    return o.body.innerHTML;
  }

  var yt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      wt = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Et = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      Tt = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: E ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: E ? "right" : "left"
  },
      At = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      kt = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  },
      Lt = function (e) {
    function i(t, i) {
      var o;
      if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      return (o = e.call(this, t) || this)._isEnabled = !0, o._timeout = 0, o._hoverState = "", o._activeTrigger = {}, o._popper = null, o.config = o._getConfig(i), o.tip = null, o._setListeners(), o;
    }

    r(i, e);
    var a = i.prototype;
    return a.enable = function () {
      this._isEnabled = !0;
    }, a.disable = function () {
      this._isEnabled = !1;
    }, a.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, a.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this._initializeOnDelegatedTarget(t);

        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
      } else {
        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, a.dispose = function () {
      clearTimeout(this._timeout), K.off(this._element, this.constructor.EVENT_KEY), K.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, e.prototype.dispose.call(this);
    }, a.show = function () {
      var e = this;
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");

      if (this.isWithContent() && this._isEnabled) {
        var n = K.trigger(this._element, this.constructor.Event.SHOW),
            i = function t(e) {
          if (!document.documentElement.attachShadow) return null;

          if ("function" == typeof e.getRootNode) {
            var n = e.getRootNode();
            return n instanceof ShadowRoot ? n : null;
          }

          return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null;
        }(this._element),
            o = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);

        if (!n.defaultPrevented && o) {
          var s = this.getTipElement(),
              r = c(this.constructor.NAME);
          s.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && s.classList.add("fade");

          var a = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this._element) : this.config.placement,
              l = this._getAttachment(a);

          this._addAttachmentClass(l);

          var u = this._getContainer();

          k(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || u.appendChild(s), K.trigger(this._element, this.constructor.Event.INSERTED), this._popper = t.createPopper(this._element, s, this._getPopperConfig(l)), s.classList.add("show");
          var h,
              d,
              p = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
          p && (h = s.classList).add.apply(h, p.split(" ")), "ontouchstart" in document.documentElement && (d = []).concat.apply(d, document.body.children).forEach(function (t) {
            K.on(t, "mouseover", function () {});
          });

          var g = function g() {
            var t = e._hoverState;
            e._hoverState = null, K.trigger(e._element, e.constructor.Event.SHOWN), "out" === t && e._leave(null, e);
          };

          if (this.tip.classList.contains("fade")) {
            var _ = f(this.tip);

            K.one(this.tip, "transitionend", g), m(this.tip, _);
          } else g();
        }
      }
    }, a.hide = function () {
      var t = this;

      if (this._popper) {
        var e = this.getTipElement(),
            n = function n() {
          "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), K.trigger(t._element, t.constructor.Event.HIDDEN), t._popper && (t._popper.destroy(), t._popper = null);
        };

        if (!K.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
          var i;

          if (e.classList.remove("show"), "ontouchstart" in document.documentElement && (i = []).concat.apply(i, document.body.children).forEach(function (t) {
            return K.off(t, "mouseover", b);
          }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
            var o = f(e);
            K.one(e, "transitionend", n), m(e, o);
          } else n();

          this._hoverState = "";
        }
      }
    }, a.update = function () {
      null !== this._popper && this._popper.update();
    }, a.isWithContent = function () {
      return Boolean(this.getTitle());
    }, a.getTipElement = function () {
      if (this.tip) return this.tip;
      var t = document.createElement("div");
      return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip;
    }, a.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(Q(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
    }, a.setElementContent = function (t, e) {
      if (null !== t) return "object" == _typeof(e) && g(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = bt(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
    }, a.getTitle = function () {
      var t = this._element.getAttribute("data-bs-original-title");

      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t;
    }, a.updateAttachment = function (t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }, a._initializeOnDelegatedTarget = function (t, e) {
      var n = this.constructor.DATA_KEY;
      return (e = e || L(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, n, e)), e;
    }, a._getOffset = function () {
      var t = this,
          e = this.config.offset;
      return "string" == typeof e ? e.split(",").map(function (t) {
        return Number.parseInt(t, 10);
      }) : "function" == typeof e ? function (n) {
        return e(n, t._element);
      } : e;
    }, a._getPopperConfig = function (t) {
      var e = this,
          n = {
        placement: t,
        modifiers: [{
          name: "flip",
          options: {
            altBoundary: !0,
            fallbackPlacements: this.config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this.config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: "." + this.constructor.NAME + "-arrow"
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: function fn(t) {
            return e._handlePopperPlacementChange(t);
          }
        }],
        onFirstUpdate: function onFirstUpdate(t) {
          t.options.placement !== t.placement && e._handlePopperPlacementChange(t);
        }
      };
      return s({}, n, "function" == typeof this.config.popperConfig ? this.config.popperConfig(n) : this.config.popperConfig);
    }, a._addAttachmentClass = function (t) {
      this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
    }, a._getContainer = function () {
      return !1 === this.config.container ? document.body : g(this.config.container) ? this.config.container : Q(this.config.container);
    }, a._getAttachment = function (t) {
      return Tt[t.toUpperCase()];
    }, a._setListeners = function () {
      var t = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) K.on(t._element, t.constructor.Event.CLICK, t.config.selector, function (e) {
          return t.toggle(e);
        });else if ("manual" !== e) {
          var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
          K.on(t._element, n, t.config.selector, function (e) {
            return t._enter(e);
          }), K.on(t._element, i, t.config.selector, function (e) {
            return t._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        t._element && t.hide();
      }, K.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, a._fixTitle = function () {
      var t = this._element.getAttribute("title"),
          e = _typeof(this._element.getAttribute("data-bs-original-title"));

      (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
    }, a._enter = function (t, e) {
      e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        "show" === e._hoverState && e.show();
      }, e.config.delay.show) : e.show());
    }, a._leave = function (t, e) {
      e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        "out" === e._hoverState && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, a._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, a._getConfig = function (t) {
      var e = X.getDataAttributes(this._element);
      return Object.keys(e).forEach(function (t) {
        wt.has(t) && delete e[t];
      }), t && "object" == _typeof(t.container) && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = s({}, this.constructor.Default, e, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = bt(t.template, t.allowList, t.sanitizeFn)), t;
    }, a._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, a._cleanTipClass = function () {
      var t = this.getTipElement(),
          e = t.getAttribute("class").match(yt);
      null !== e && e.length > 0 && e.map(function (t) {
        return t.trim();
      }).forEach(function (e) {
        return t.classList.remove(e);
      });
    }, a._handlePopperPlacementChange = function (t) {
      var e = t.state;
      e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
    }, i.jQueryInterface = function (t) {
      return this.each(function () {
        var e = L(this, "bs.tooltip"),
            n = "object" == _typeof(t) && t;

        if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n)), "string" == typeof t)) {
          if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, o(i, null, [{
      key: "Default",
      get: function get() {
        return At;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return kt;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.tooltip";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Et;
      }
    }]), i;
  }(W);

  T("tooltip", Lt);

  var Ct = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Dt = s({}, Lt.Default, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      St = s({}, Lt.DefaultType, {
    content: "(string|element|function)"
  }),
      Nt = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  },
      Ot = function (t) {
    function e() {
      return t.apply(this, arguments) || this;
    }

    r(e, t);
    var n = e.prototype;
    return n.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, n.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(Q(".popover-header", t), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this._element)), this.setElementContent(Q(".popover-body", t), e), t.classList.remove("fade", "show");
    }, n._addAttachmentClass = function (t) {
      this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
    }, n._getContent = function () {
      return this._element.getAttribute("data-bs-content") || this.config.content;
    }, n._cleanTipClass = function () {
      var t = this.getTipElement(),
          e = t.getAttribute("class").match(Ct);
      null !== e && e.length > 0 && e.map(function (t) {
        return t.trim();
      }).forEach(function (e) {
        return t.classList.remove(e);
      });
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.popover"),
            i = "object" == _typeof(t) ? t : null;

        if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i), k(this, "bs.popover", n)), "string" == typeof t)) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t]();
        }
      });
    }, o(e, null, [{
      key: "Default",
      get: function get() {
        return Dt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return Nt;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.popover";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return St;
      }
    }]), e;
  }(Lt);

  T("popover", Ot);

  var It = {
    offset: 10,
    method: "auto",
    target: ""
  },
      jt = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      Pt = function (t) {
    function e(e, n) {
      var i;
      return (i = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, i._config = i._getConfig(n), i._selector = i._config.target + " .nav-link, " + i._config.target + " .list-group-item, " + i._config.target + " .dropdown-item", i._offsets = [], i._targets = [], i._activeTarget = null, i._scrollHeight = 0, K.on(i._scrollElement, "scroll.bs.scrollspy", function () {
        return i._process();
      }), i.refresh(), i._process(), i;
    }

    r(e, t);
    var n = e.prototype;
    return n.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          n = "auto" === this._config.method ? e : this._config.method,
          i = "position" === n ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), q(this._selector).map(function (t) {
        var e = h(t),
            o = e ? Q(e) : null;

        if (o) {
          var s = o.getBoundingClientRect();
          if (s.width || s.height) return [X[n](o).top + i, e];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, n.dispose = function () {
      t.prototype.dispose.call(this), K.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, n._getConfig = function (t) {
      if ("string" != typeof (t = s({}, It, "object" == _typeof(t) && t ? t : {})).target && g(t.target)) {
        var e = t.target.id;
        e || (e = c("scrollspy"), t.target.id = e), t.target = "#" + e;
      }

      return _("scrollspy", t, jt), t;
    }, n._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, n._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, n._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, n._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), t >= n) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, n._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",").map(function (e) {
        return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]';
      }),
          n = Q(e.join(","));

      n.classList.contains("dropdown-item") ? (Q(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), function (t, e) {
        for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) {
          i.matches(e) && n.push(i), i = i.parentNode;
        }

        return n;
      }(n, ".nav, .list-group").forEach(function (t) {
        $(t, ".nav-link, .list-group-item").forEach(function (t) {
          return t.classList.add("active");
        }), $(t, ".nav-item").forEach(function (t) {
          V(t, ".nav-link").forEach(function (t) {
            return t.classList.add("active");
          });
        });
      })), K.trigger(this._scrollElement, "activate.bs.scrollspy", {
        relatedTarget: t
      });
    }, n._clear = function () {
      q(this._selector).filter(function (t) {
        return t.classList.contains("active");
      }).forEach(function (t) {
        return t.classList.remove("active");
      });
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.scrollspy");

        if (n || (n = new e(this, "object" == _typeof(t) && t)), "string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t]();
        }
      });
    }, o(e, null, [{
      key: "Default",
      get: function get() {
        return It;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.scrollspy";
      }
    }]), e;
  }(W);

  K.on(window, "load.bs.scrollspy.data-api", function () {
    q('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Pt(t, X.getDataAttributes(t));
    });
  }), T("scrollspy", Pt);

  var xt = function (t) {
    function e() {
      return t.apply(this, arguments) || this;
    }

    r(e, t);
    var n = e.prototype;
    return n.show = function () {
      var t = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
        var e,
            n = d(this._element),
            i = this._element.closest(".nav, .list-group");

        if (i) {
          var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
          e = (e = q(o, i))[e.length - 1];
        }

        var s = e ? K.trigger(e, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;

        if (!(K.trigger(this._element, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || null !== s && s.defaultPrevented)) {
          this._activate(this._element, i);

          var r = function r() {
            K.trigger(e, "hidden.bs.tab", {
              relatedTarget: t._element
            }), K.trigger(t._element, "shown.bs.tab", {
              relatedTarget: e
            });
          };

          n ? this._activate(n, n.parentNode, r) : r();
        }
      }
    }, n._activate = function (t, e, n) {
      var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V(e, ".active") : q(":scope > li > .active", e))[0],
          s = n && o && o.classList.contains("fade"),
          r = function r() {
        return i._transitionComplete(t, o, n);
      };

      if (o && s) {
        var a = f(o);
        o.classList.remove("show"), K.one(o, "transitionend", r), m(o, a);
      } else r();
    }, n._transitionComplete = function (t, e, n) {
      if (e) {
        e.classList.remove("active");
        var i = Q(":scope > .dropdown-menu .active", e.parentNode);
        i && i.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), y(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && q(".dropdown-toggle").forEach(function (t) {
        return t.classList.add("active");
      }), t.setAttribute("aria-expanded", !0)), n && n();
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.tab") || new e(this);

        if ("string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t]();
        }
      });
    }, o(e, null, [{
      key: "DATA_KEY",
      get: function get() {
        return "bs.tab";
      }
    }]), e;
  }(W);

  K.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    t.preventDefault(), (L(this, "bs.tab") || new xt(this)).show();
  }), T("tab", xt);

  var Ht = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      Bt = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  },
      Mt = function (t) {
    function e(e, n) {
      var i;
      return (i = t.call(this, e) || this)._config = i._getConfig(n), i._timeout = null, i._setListeners(), i;
    }

    r(e, t);
    var n = e.prototype;
    return n.show = function () {
      var t = this;

      if (!K.trigger(this._element, "show.bs.toast").defaultPrevented) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

        var e = function e() {
          t._element.classList.remove("showing"), t._element.classList.add("show"), K.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
            t.hide();
          }, t._config.delay));
        };

        if (this._element.classList.remove("hide"), y(this._element), this._element.classList.add("showing"), this._config.animation) {
          var n = f(this._element);
          K.one(this._element, "transitionend", e), m(this._element, n);
        } else e();
      }
    }, n.hide = function () {
      var t = this;

      if (this._element.classList.contains("show") && !K.trigger(this._element, "hide.bs.toast").defaultPrevented) {
        var e = function e() {
          t._element.classList.add("hide"), K.trigger(t._element, "hidden.bs.toast");
        };

        if (this._element.classList.remove("show"), this._config.animation) {
          var n = f(this._element);
          K.one(this._element, "transitionend", e), m(this._element, n);
        } else e();
      }
    }, n.dispose = function () {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), K.off(this._element, "click.dismiss.bs.toast"), t.prototype.dispose.call(this), this._config = null;
    }, n._getConfig = function (t) {
      return t = s({}, Bt, X.getDataAttributes(this._element), "object" == _typeof(t) && t ? t : {}), _("toast", t, this.constructor.DefaultType), t;
    }, n._setListeners = function () {
      var t = this;
      K.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
        return t.hide();
      });
    }, n._clearTimeout = function () {
      clearTimeout(this._timeout), this._timeout = null;
    }, e.jQueryInterface = function (t) {
      return this.each(function () {
        var n = L(this, "bs.toast");

        if (n || (n = new e(this, "object" == _typeof(t) && t)), "string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
          n[t](this);
        }
      });
    }, o(e, null, [{
      key: "DefaultType",
      get: function get() {
        return Ht;
      }
    }, {
      key: "Default",
      get: function get() {
        return Bt;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.toast";
      }
    }]), e;
  }(W);

  return T("toast", Mt), {
    Alert: U,
    Button: F,
    Carousel: J,
    Collapse: nt,
    Dropdown: dt,
    Modal: gt,
    Popover: Ot,
    ScrollSpy: Pt,
    Tab: xt,
    Toast: Mt,
    Tooltip: Lt
  };
});
},{"@popperjs/core":"node_modules/@popperjs/core/lib/index.js"}],"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","static/vendors/bootstrap/bootstrap.min.js"], null)
//# sourceMappingURL=/bootstrap.min.c408d0e8.js.map