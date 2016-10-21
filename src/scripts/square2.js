var html = $("section").html();
function ready(){
  $("section").html(html);
  console.log(html);
  set();
}

function set(){
  var width = window.innerWidth,
      s = $("section>div");

  if(width >= 768) {
    for(var i = 0; i < s.length; i = i + 3){
        s.slice(i, i+3).wrapAll("<div class='row'></div>");
    }
  }
  if(width < 768 && width > 360){
    for(var i = 0; i < s.length; i = i + 2){
        s.slice(i, i + 2).wrapAll("<div class='row'></div>");
    }
  }
  if(width <=360){
    for(var i = 0; i < s.length; i = i + 1){
        s.slice(i, i + 1).wrapAll("<div class='row'></div>");
    }
  }
}

ready();
$(window).resize(ready);
