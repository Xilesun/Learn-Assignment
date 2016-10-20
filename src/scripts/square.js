function display(){
  var square = $("section>div"),
      w = parseInt(square.css("width").replace("px", "")),//获取方块大小
      gutter = parseInt(square.css("margin").replace("px","")) * 2,//设置间距
      top = $("section>div:eq(0)").offset().top,
      view = window.innerWidth,
      width = 0;

      $("section").css("width", view * 0.9);
      for(var i = 0; i < square.length; i++){
      	var t = $("section>div:eq(" + i + ")").offset().top;
      	if(t !== top) break;
        width = width + w + gutter;        
      }
      $("section").css("width", width);
      console.log(view);
}

display();
$(window).resize(display);
