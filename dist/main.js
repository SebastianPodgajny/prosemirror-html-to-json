/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9661:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: stringToJson

// EXTERNAL MODULE: ./node_modules/jsdom/lib/api.js
var api = __webpack_require__(38868);
// EXTERNAL MODULE: ./node_modules/prosemirror-model/dist/index.es.js + 1 modules
var index_es = __webpack_require__(38638);
;// CONCATENATED MODULE: ./out-tsc/schema/nodes.js
var NodeName;
(function (NodeName) {
    NodeName["Doc"] = "doc";
    NodeName["Paragraph"] = "paragraph";
    NodeName["Text"] = "text";
    NodeName["HardBreak"] = "hard_break";
    NodeName["OrderedList"] = "ordered_list";
    NodeName["BulletList"] = "bullet_list";
    NodeName["ListItem"] = "list_item";
    NodeName["Mention"] = "mention";
})(NodeName || (NodeName = {}));
const SCHEMA_NODE = {
    [NodeName.Doc]: { content: 'block+' },
    [NodeName.Text]: { group: 'inline' },
    [NodeName.Paragraph]: { content: 'inline*', group: 'block', parseDOM: [{ tag: 'p' }] },
    [NodeName.HardBreak]: {
        inline: true,
        group: 'inline',
        selectable: false,
        parseDOM: [{ tag: 'br' }],
    },
    [NodeName.OrderedList]: {
        content: 'list_item+',
        group: 'block',
        attrs: { order: { default: 1 } },
        parseDOM: [{ tag: 'ol' }],
    },
    [NodeName.BulletList]: {
        content: 'list_item+',
        group: 'block',
        parseDOM: [{ tag: 'ul' }],
    },
    [NodeName.ListItem]: {
        defining: true,
        content: 'paragraph block*',
        parseDOM: [{ tag: 'li' }],
    },
    [NodeName.Mention]: {
        attrs: { 'data-id': {}, 'data-type': {} },
        inline: true,
        atom: true,
        content: 'inline+',
        group: 'inline',
        selectable: false,
        parseDOM: [{ tag: 'pm-mention' }],
    },
};
//# sourceMappingURL=nodes.js.map
;// CONCATENATED MODULE: ./out-tsc/schema/marks.js
var MarkName;
(function (MarkName) {
    MarkName["Strong"] = "strong";
    MarkName["Em"] = "em";
    MarkName["Strikethrough"] = "strikethrough";
    MarkName["Underline"] = "underline";
    MarkName["Link"] = "link";
})(MarkName || (MarkName = {}));
const SCHEMA_MARK = {
    [MarkName.Strong]: {
        parseDOM: [{ tag: 'strong' }, { tag: 'b' }, { style: 'font-weight' }],
    },
    [MarkName.Em]: {
        parseDOM: [{ tag: 'i' }, { tag: 'em' }, { style: 'font-style=italic' }],
    },
    [MarkName.Strikethrough]: {
        parseDOM: [{ tag: 's' }, { tag: 'strikethrough' }, { style: 'text-decoration=line-through' }],
    },
    [MarkName.Underline]: {
        parseDOM: [{ tag: 'u' }, { tag: 'underline' }, { style: 'text-decoration=underline' }],
    },
    [MarkName.Link]: {
        attrs: {
            href: {},
            title: { default: null },
            target: { default: null },
        },
        inclusive: false,
        parseDOM: [{ tag: 'a[href]' }],
    },
};
//# sourceMappingURL=marks.js.map
;// CONCATENATED MODULE: ./out-tsc/schema/schemas.js



const buildSchema = (nodes, marks) => {
    const config = {
        nodes: Object.fromEntries(nodes.map(name => [name, SCHEMA_NODE[name]])),
        marks: Object.fromEntries(marks.map(name => [name, SCHEMA_MARK[name]])),
    };
    return new index_es/* Schema */.V_(config);
};
const DEFAULT_SCHEMA = buildSchema([
    NodeName.Doc,
    NodeName.Paragraph,
    NodeName.Text,
    NodeName.HardBreak,
    NodeName.OrderedList,
    NodeName.BulletList,
    NodeName.ListItem,
    NodeName.Mention,
], [MarkName.Strong, MarkName.Em, MarkName.Strikethrough, MarkName.Underline, MarkName.Link]);
var RtSchema;
(function (RtSchema) {
    RtSchema[RtSchema["Default"] = 0] = "Default";
})(RtSchema || (RtSchema = {}));
const SchemasMap = {
    [RtSchema.Default]: DEFAULT_SCHEMA,
};
//# sourceMappingURL=schemas.js.map
;// CONCATENATED MODULE: ./out-tsc/main.js
/* module decorator */ module = __webpack_require__.hmd(module);



const stringToJson = (html, rtSchema) => {
    const dom = api.JSDOM.fragment(html);
    const schema = SchemasMap[rtSchema];
    const pmDoc = index_es/* DOMParser.fromSchema */.aw.fromSchema(schema).parse(dom.firstChild);
    return pmDoc.toJSON();
};
module.exports = {
    stringToJson,
};
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 42357:
/***/ ((module) => {

module.exports = require("assert");;

/***/ }),

/***/ 64293:
/***/ ((module) => {

module.exports = require("buffer");;

/***/ }),

/***/ 63129:
/***/ ((module) => {

module.exports = require("child_process");;

/***/ }),

/***/ 76417:
/***/ ((module) => {

module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ ((module) => {

module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ ((module) => {

module.exports = require("https");;

/***/ }),

/***/ 11631:
/***/ ((module) => {

module.exports = require("net");;

/***/ }),

/***/ 12087:
/***/ ((module) => {

module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ 94213:
/***/ ((module) => {

module.exports = require("punycode");;

/***/ }),

/***/ 71191:
/***/ ((module) => {

module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ ((module) => {

module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ ((module) => {

module.exports = require("string_decoder");;

/***/ }),

/***/ 4016:
/***/ ((module) => {

module.exports = require("tls");;

/***/ }),

/***/ 78835:
/***/ ((module) => {

module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ ((module) => {

module.exports = require("util");;

/***/ }),

/***/ 92184:
/***/ ((module) => {

module.exports = require("vm");;

/***/ }),

/***/ 78761:
/***/ ((module) => {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [216], () => (__webpack_require__(9661)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "vendors" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(216);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;