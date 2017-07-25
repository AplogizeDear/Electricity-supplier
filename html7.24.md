1.视口  物理视口转换成逻辑视口。  

以百分比布局为主   设计宽度的时候

em 根据元素的字体大小设置的

rem  ：root  根据HTML设置的字体大小决定的

1rem=1html字体的大小  





移动端设计稿修改宽度

1.改变视口大小

2，引入js

3,。根据设计稿宽度改变宽度

设计文字的时候，如果是行内标签，不用再写盒子来装文字，直接转换成displayblock就可以调节间距。

4.margin-top和margin-bottom相对于行内标签不起作用



弹性布局

display:flex;  指定为弹性布局。     父元素为容器      子元素为项目      水平方向为主轴     竖直方向为交叉轴

设置为flex布局时  子元素的float clear

vertical-align都会失效



容器的属性

1.flex-direction  项目的排布方向

row：主轴  从左到右   属性值     row-reverse：从右到左

column  交叉轴    从上到下         column-reverse  从下到上 交叉轴的终点

2.flex-wrap:wrap项目的换行  从左到右      

​	nowrap  不换行

​	wrap-reverse;从右到左。

3.justify-content：flex-end;(项目在主轴的对齐方式)

​				flex-center:

​				flex-start;

​				space-between;沿着最左边没有间隙

​				space-around;是每个项目之间的间隔相同

4.元素不进行换行，在交叉轴的对齐方式。只有一行的时候.

​	align-items:flex-start/end/center;

​				baseline;相对于第一行文本的基线对齐;

​				stretch; 去掉项目的高度的时候，他的高度会拉伸和父元素一样 。

5.换行的时候，用align-content

​	align-content:flex-start;  

​					end;

​					center;

​				space-between;

​				space-around;

6.项目属性  

order:;  默认值为0   数值越小越靠前  调整项目的顺序   默认为0   可以为负值。给子元素添加。

flex-grow:来写项目的放大比例，

​		默认值是0，即使有剩余空间也不放大，

​		放大一表示的是，把剩余的空间全部沾满。

​			如果一个项目的占比是2   其他的是1   那么这个项目占据的空间是其他元素的2倍。

flex-shrink:不支持负值。项目的缩小比例。默认值为1 ， 当空间占满时，可以调节使其缩小，负值无效。

flex-basis:分配剩余空间的时候，可以给他单独设置项目占主轴的空间;