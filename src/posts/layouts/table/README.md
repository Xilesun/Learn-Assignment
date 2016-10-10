# table布局总结

### 优点：
- 垂直居中
- 等高
- 等分布局

### 缺点：
- width, margin等属性不能影响设置了table-cell的元素
- 设置了table-cell的元素自适应父级元素，使响应式的实现不能单纯依赖于CSS，而要借助JS实现
- 设置border-spacing属性会使元素四周都出现间距，使第一个元素左端和最后一个元素右端出现间距，打破原来的布局

### 应用场景
- 需要以表格呈现的内容
- 图片、文字区块展示
- 及其他需要等高等分布局的地方

### 属性说明
- table: 使元素以表格方式呈现
- table-cell: 使元素以单元格方式呈现，不能应用width, margin等属性