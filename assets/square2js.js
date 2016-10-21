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

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var html = $("section").html();
	function display() {
	  $("section").html(html);
	  console.log(html);
	  set();
	}
	
	function set() {
	  var width = window.innerWidth,
	      s = $("section>div");
	
	  if (width > 768) {
	    for (var i = 0; i < s.length; i = i + 3) {
	      s.slice(i, i + 3).wrapAll("<div class='row'></div>");
	    }
	  }
	  if (width < 768 && width > 360) {
	    for (var i = 0; i < s.length; i = i + 2) {
	      s.slice(i, i + 2).wrapAll("<div class='row'></div>");
	    }
	  }
	  if (width < 360) {
	    for (var i = 0; i < s.length; i = i + 1) {
	      s.slice(i, i + 1).wrapAll("<div class='row'></div>");
	    }
	  }
	}
	
	display();
	$(window).resize(display);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
/******/ ]);
//# sourceMappingURL=square2js.js.map