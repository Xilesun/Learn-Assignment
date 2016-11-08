import classdata from './classdata'

function addEventHandler(target, type, func){
	if(target.addEventListener){
		target.addEventListener(type, func, false);
	} else if(target.attachEvent) {
		target.attachEvent("on"+type, func);
	} else {
		target["on"+type] = func;
	}
}

var days = document.querySelectorAll('.table > div'),
    table = document.querySelector('.table'),
    slt = document.querySelector('select'),
    row = document.getElementsByName('row')[0],
    col = document.getElementsByName('col')[0];

var html = "";
for(var i = 1; i < 17; i++){
	 html += "<option value='" + i + "'>第" + i + "周</option>";
	 slt.innerHTML = html;
}

function display(){
for(var i = 0; i < days.length; i++){
	var classes = days[i].querySelectorAll('div');
	switch(i){
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
	for(var j = 1; j < classes.length; j++){
		var day = classes[0].textContent,
		    classinfo = classdata[day][j-1];
		if(classinfo.subject == "free"){
			classes[j].textContent = "";
		} else {
			var info = "<span>" + classinfo.subject + "</span><br /><span>" + classinfo.teacher + "</span><br /><span>" + classinfo.room + "</span>";
			classes[j].innerHTML = info;
		}
		
	}
}
}

function setdate(m){
  var index = slt.options[slt.selectedIndex].value;

  for(var i = 0; i < days.length; i++){
	var classes = days[i].querySelectorAll('div'),
		times = classes[0],
		date = new Date(),
  	    start = date.setFullYear(2016,8,19),
        end = date.setDate(date.getDate(start) + i + (index - 1) * 7),
	    time = new Date(end);
	times.innerHTML += "<br> ";
	times.childNodes[2].textContent = time.getMonth()+1 + "." + time.getDate();
  }
}

function festival(mon, day, period){
	var time = days[0].querySelectorAll('div')[0].childNodes[2].textContent,
	    festival = mon + "." + day;
	if(time == festival){
	  for(var j = 0; j < period; j++){
	    var classday = days[j].querySelectorAll('div');
	    for(var k = 1; k < classday.length; k++){
	  	  classday[k].textContent = "";
	    }
	  }
    } else {
    	display();
    	setdate();
    }
}

function displayWay(){
	if(table.className == "table"){
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
addEventHandler(slt, "change", function(){ festival(10,3,5) });
addEventHandler(row, "change", displayWay);
addEventHandler(col, "change", displayWay);
