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

	"use strict";
	
	var _classdata = __webpack_require__(2);
	
	var _classdata2 = _interopRequireDefault(_classdata);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addEventHandler(target, type, func) {
		if (target.addEventListener) {
			target.addEventListener(type, func, false);
		} else if (target.attachEvent) {
			target.attachEvent("on" + type, func);
		} else {
			target["on" + type] = func;
		}
	}
	
	var days = document.querySelectorAll('.table > div'),
	    table = document.querySelector('.table'),
	    slt = document.querySelector('select'),
	    row = document.getElementsByName('row')[0],
	    col = document.getElementsByName('col')[0];
	
	//循环输出选择框
	var html = "";
	for (var i = 1; i < 17; i++) {
		html += "<option value='" + i + "'>第" + i + "周</option>";
		slt.innerHTML = html;
	}
	
	//初始化课程表
	function display() {
		for (var i = 0; i < days.length; i++) {
			var classes = days[i].querySelectorAll('div');
			//转化星期数字为英文
			switch (i) {
				case 0:
					classes[0].textContent = "Mon";
					break;
				case 1:
					classes[0].textContent = "Tue";
					break;
				case 2:
					classes[0].textContent = "Wed";
					break;
				case 3:
					classes[0].textContent = "Thur";
					break;
				case 4:
					classes[0].textContent = "Fri";
			}
			//显示课程表信息
			for (var j = 1; j < classes.length; j++) {
				var day = classes[0].textContent,
				    classinfo = _classdata2.default.classtable[day][j - 1];
				if (classinfo.subject == "free") {
					classes[j].textContent = "";
				} else {
					var info = "<span>" + classinfo.subject + "</span><br /><span>" + classinfo.teacher + "</span><br /><span>" + classinfo.room + "</span>";
					classes[j].innerHTML = info;
				}
			}
		}
	}
	
	//设置日期
	function setdate(m) {
		var index = slt.options[slt.selectedIndex].value;
	
		for (var i = 0; i < days.length; i++) {
			var classes = days[i].querySelectorAll('div'),
			    times = classes[0],
			    date = new Date(),
			    start = date.setFullYear(2016, 8, 19),
			    //设置初始日期
			end = date.setDate(date.getDate(start) + i + (index - 1) * 7),
			    //每周叠加日期
			time = new Date(end),
			    mon = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1,
			    day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate(); //格式化日期
			times.innerHTML += "<br> ";
			times.childNodes[2].textContent = mon + "." + day;
		}
	}
	
	//节假日处理
	function festival() {
		var time = days[0].querySelectorAll('div')[0].childNodes[2].textContent * 100,
		    //乘100解决浮点数加减问题
		festival = _classdata2.default.alter.festival;
		for (var i = 0; i < festival.length; i++) {
			var date = festival[i].time.start * 100,
			    name = festival[i].name,
			    period = festival[i].time.period;
	
			//处理假日出现在某一周开头或者，中间的情况
			if (date >= time && date <= parseFloat(time) + 5) {
				for (var j = date - time; j <= period; j++) {
					var classday = days[j].querySelectorAll('div');
					for (var k = 1; k < classday.length; k++) {
						classday[k].textContent = name;
					}
				}
				break;
			} else {
				display();
				setdate();
			}
	
			//处理假日跨过两周的情况
			if (date < time && date + period >= time) {
				period = date + period - time - 1;
				for (var j = 0; j <= period; j++) {
					var classday = days[j].querySelectorAll('div');
					for (var k = 1; k < classday.length; k++) {
						classday[k].textContent = name;
					}
				}
				break;
			} else {
				display();
				setdate();
			}
		}
	}
	
	//代课，教室更改等情况处理
	function alterClass() {
		var alterclasses = _classdata2.default.alter.classes ? _classdata2.default.alter.classes : "false";
		if (alterclasses) {
			//判断更改是否存在
			for (var i = 0; i < alterclasses.length; i++) {
				//循环读取更改数据
				var alterclass = alterclasses[i],
				    date = alterclass.time,
				    subject = alterclass.subject;
				for (var j = 0; j < 5; j++) {
					//循环读取一周的每一天
					var time = days[j].querySelectorAll('div')[0].childNodes[2].textContent;
					if (time == date) {
						for (var k = 1; k < 4; k++) {
							//循环获取每一天的课程
							var classes = days[j].querySelectorAll('div')[k];
							if (classes.childNodes[0].textContent == subject) {
								for (var item in alterclass) {
									if (item == "teacher") classes.childNodes[2].textContent = alterclass.teacher;
									if (item == "room") classes.childNodes[4].textContent = alterclass.room;
								}
							}
						}
					}
				}
			}
		}
	}
	
	//处理显示方式横排或者竖排
	function displayWay() {
		if (table.className == "table") {
			table.className += " row";
			row.checked = "checked";
			col.checked = "";
		} else {
			table.className = "table";
			row.checked = "";
			col.checked = "checked";
		}
	}
	
	addEventHandler(window, "load", display);
	addEventHandler(window, "load", setdate);
	addEventHandler(slt, "change", setdate);
	addEventHandler(slt, "change", festival);
	addEventHandler(slt, "change", alterClass);
	addEventHandler(row, "change", displayWay);
	addEventHandler(col, "change", displayWay);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  "classtable": {
	    "Mon": [{ "subject": "free" }, { "subject": "free" }, { "subject": "Chemistry", "teacher": "Quan", "room": "Searching building 1" }, { "subject": "free" }],
	    "Tue": [{ "subject": "Physics", "teacher": "Liu", "room": "Teachering building 1 110" }, { "subject": "Calculus review", "teacher": "Qian", "room": "Teachering building 1 401" }, { "subject": "Linear algebra", "teacher": "Yao", "room": "Teachering building 1 111" }, { "subject": "Calculus", "teacher": "Wang", "room": "No.1 102" }],
	    "Wed": [{ "subject": "English", "teacher": "Nicolette", "room": "Teachering building 1 510" }, { "subject": "free" }, { "subject": "free" }, { "subject": "LA review", "teacher": "Guo", "room": "Teachering building 1 401" }],
	    "Thur": [{ "subject": "CS", "teacher": "Yang", "room": "Searching building 1" }, { "subject": "Chemistry", "teacher": "Quan", "room": "Library 110" }, { "subject": "Calculus", "teacher": "Wang", "room": "No.1 102" }, { "subject": "Physics", "teacher": "Liu", "room": "Teachering building 1 107" }],
	    "Fri": [{ "subject": "Linear algebra", "teacher": "Yao", "room": "Teachering building 1 110" }, { "subject": "P.E.", "teacher": "Sun", "room": "sport center" }, { "subject": "English", "teacher": "Nicolette", "room": "Teachering building 1" }, { "subject": "free" }]
	  },
	  "alter": {
	    "festival": [{ "name": "nationalday", "time": { "start": "10.01", "period": 7 } }, { "name": "newyearsday", "time": { "start": "01.01", "period": 3 } }],
	    "classes": [{ "time": "11.10", "subject": "Chemistry", "teacher": "Zhang" }, { "time": "10.18", "subject": "Physics", "room": "Teachering building 1 107" }]
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=classtablejs.js.map