# Flex布局总结

### 优点：
- 等高
- 等间距，自动适应父级元素宽度
- 可控是否自动换行，换行方式，对齐方式，排列顺序等

### 缺点：
- 不兼容低版本浏览器
- 易被过度使用

### 应用场景
- 不需要兼容低版本浏览器
- 灵活可控的布局
- 类似表格同时需要自动换行
- 需要元素自适应容器大小

### 属性说明(常用)
- display: flex 使元素以flex方式显示
- flex-wrap: nowrap|wrap|wrap-reverse 是否自动换行以及换行方向
- flex-direction: row|row-reverse|column|column-reverse 控制元素排列方向
- order 控制元素排列顺序
- justify-content: flex-start|flex-end|center|space-between|space-around 控制元素横向对齐方式
- align-content: flex-start|flex-end|center|space-between|space-around|stretch 控制多行元素垂直对齐方式
- align-items: flex-start|flex-end|center|baseline|stretch 控制多个元素垂直对齐方式
- align-self: auto|flex-start|flex-end|center|baseline|stretch 控制单个元素垂直对齐方式
- flex-basis 设置元素宽度