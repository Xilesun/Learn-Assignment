# Inline-block布局总结

### 优点：
- 水平、垂直居中
- 同时具有行内样式和块级元素的属性

### 缺点：
- 作为行内元素存在letter-spacing。标准解决方案是父级元素使用font-size: 0。

### 应用场景
- 需要使块级元素并列显示
- 需要对行内元素应用margin等属性

### 属性说明
- display: inline-block 使块级元素以行内样式渲染
- font-size: 0 用于清除letter-spacing
- vertical-align: top/center/bottom 对元素进行垂直定位
- text-align: left/center/right 对元素进行水平定位