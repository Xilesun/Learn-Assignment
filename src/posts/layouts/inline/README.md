# float布局总结

### 优点：
- 使块级元素成行排列
- 响应式易于实现
- 有多个解决现存bugs的方法

### 缺点：
- 脱离文档流，破坏原来布局，难以控制定位
- 父级元素不能自适应高度，可以用overflow属性解决
- 需要清除浮动，实现响应式过程中，需要多次对元素清除浮动

### 应用场景
- 瀑布流布局
- 横排列表
- 流式布局

### 属性说明
- float：left/right 实现一个元素向左或者向右浮动
- clear：left/right/both 用于清除元素浮动