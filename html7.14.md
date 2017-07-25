# 阴影

1.设置透明度 

background：rgba(1,2,3,0.3);

或者

background：rgb(1,2,3);

opacity：0.8；  0~1的小数  0表示完全透明 1表示不透明。

## 2.阴影

box-shadow:10px 10px 10px 20px rgba(0,0,0,0);

水平方向 （正值向右，负值向左 0俩边） 

垂直方向  （正值向下，负值向上 0俩边）

模糊距离（值越大越模糊）

 阴影大小 （阴影的颜色）

### 3.阿里巴巴四两图标库的使用

### 4.平移缩放斜切

            斜切
            transform:skewY
            transform:skewX
            transform:skew(30deg,40deg);
    		缩放
            transform:scaleX(2);
            transform:scale(2,2);
            transform:scaleY(2);
            平移
            旋转

### 5,渐变

1.线性渐变 can i use 查看浏览器对属性的支持程度

background-image:

-webkit-linear-gradient(90deg,red,yellow,)

第一个参数：颜色开始的方向（top bottom 左上）

​							角度45deg    0deg=left  逆时针

第二个参数   开始的颜色

第三个参数   结束的颜色

2.-webkit-linear-gradient(90deg,red 50%,yellow50%,)      webkit 是谷歌内核

颜色后面的百分比  从 整个页面的70%开始变为纯色

3.重复的线性渐变

-webkit-repeating-linear-gradient()

4.径向渐变

-webkit-radial-gradient(center,yellow,green,cyan,blue,purple);

## 6.动画

   定义动画

第一步@keyframes定义动画

@keyframes 动画名{

​	0%{}

10%{}

100%

}           

第二步，绑定到选择器上

animation-name:;动画名称

anmition-duration：2s;动画时长

animation-timeing-function：ease；动画方式

animation-delay：1s;动画延迟

animation-itration-count：2; 第一个状态出现一次  infinite出现无数次

animation-direction：alternate；反向

animation-direction:normal    正向

​animation-fill-mode：fowards；最后一个动画的状态

​  animation-play-state：paused;  到那个暂停通常和hover一起使用

animation：bianse  1s ease 1s;





`