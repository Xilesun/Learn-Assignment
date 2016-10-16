function display(){
  var square = $("section>div"),
      view = (window.innerWidth) * 0.9, //获取容器大小
      w = parseInt(square.css("width").replace("px", "")),//获取方块大小
      gutter = 10,//设置间距
      col = Math.floor(view / (w + gutter)),//获取列数
      width = (col * w ) + (gutter * (col - 1)) + gutter;//计算section宽度

      $("section").css("width", width)
}

display();
$(window).resize(display);
