/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(9);
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _demo = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(document).ready(function ($) {
		(0, _demo.display)();
		$(window).resize(_demo.display);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.display = display;
	function display() {
		if ($("body").attr('class') == "table") {
			var width = window.innerWidth;
	
			reDisplay();
	
			if (width > 1100) {
				$("section:eq(0)>div").slice(0, 4).wrapAll("<div></div>");
				$("section:eq(0)>div").slice(1, 3).wrapAll("<div></div>");
				$("section:eq(0)>div:eq(1)").append("<div class='hide'>h</div>");
				$("section:eq(0)>div:eq(1)").append("<div class='hide'>h</div>");
				$("section:eq(4)>div").slice(0, 4).wrapAll("<div></div>");
				$("section:eq(4)>div").slice(1, 3).wrapAll("<div></div>");
				$("section:eq(4)>div:eq(1)").append("<div class='hide'>h</div>");
				$("section:eq(4)>div:eq(1)").append("<div class='hide'>h</div>");
			}
			if (width < 1100 && width > 800) {
				$("section:eq(0)>div").slice(0, 3).wrapAll("<div></div>");
				$("section:eq(0)>div").slice(1, 4).wrapAll("<div></div>");
				$("section:eq(4)>div").slice(0, 3).wrapAll("<div></div>");
				$("section:eq(4)>div").slice(1, 4).wrapAll("<div></div>");
			}
			if (width < 800 && width > 500) {
				$("section:eq(0)>div").slice(0, 2).wrapAll("<div></div>");
				$("section:eq(0)>div").slice(1, 3).wrapAll("<div></div>");
				$("section:eq(0)>div").slice(2, 4).wrapAll("<div></div>");
				$("section:eq(4)>div").slice(0, 2).wrapAll("<div></div>");
				$("section:eq(4)>div").slice(1, 3).wrapAll("<div></div>");
				$("section:eq(4)>div").slice(2, 4).wrapAll("<div></div>");
			}
			if (width < 500) {
				$("section:eq(0)>div").wrap("<div></div>");
				$("section:eq(4)>div").wrap("<div></div>");
			}
		}
	}
	
	function reDisplay() {
		$("section:eq(0)").html("<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>");
		$("section:eq(4)").html("<div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rem nam dolore repellendus provident, voluptas necessitatibus vel cupiditate delectus, doloremque incidunt accusantium quia! Nisi molestiae totam natus, in assumenda accusantium.</div></div><div><div>Lorem ipsum dolor sit amet.</div></div><div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sunt harum ut rerum id quae voluptas velit iusto quasi distinctio.</div></div><div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, sequi?</div></div><div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nisi deserunt, dolorem accusamus sint ipsam dolor quae ab animi assumenda architecto placeat possimus fugit doloribus vel, corporis amet aliquam maiores!</div></div><div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></div>");
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "jquery.min.js";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map