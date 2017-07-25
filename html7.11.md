# 一、选择器

## id选择器

1.id选择器中类名不能重复

```
在html中id=“box”      css：#box

	div#box+ tab=div  id = “box”；

id>     类名>   标签

  100    10      1
```

​    	

## 2.后代选择器

```
作用：选中子元素
css：选中父元素+space+子元素，作用于子元素.
后代选择器中的优先级排序     如果是#box  .box 那么他的优先级是110。
```

### 3.群组选择器

```
.box,.big   当元素都有相同样式时，用逗号隔开。可以少写一些重复代码。
```

### 4.通用选择器

```

选中页面中的所有标签.

*{

		margin：0；

		padding：0；

}       优先级是最低的。
```
### 5.伪类选择器(根据标签的状态来进行下一步的动作)

``` javascript
1.:hover;写鼠标移入的效果的。
2.<p></p>标签用来写入一段文字
       在css中选中文字   p::first-line{ color:red}选中第一行文本
                        P::first-letter{color:gold}选中第一个文字。

                        
                        
                        
```
## 10.伪元素选择器。

3.p::brfore{
  content:"所要写的内容";
  display:block;
  width:;
  height:;
}
4.:root{
  background:yellow;    选中的是页面中的html；
}   

5..big:hover{
  transform:rorate(30deg);
  			translateX();水平移动
  					 Y();
  transition:all 2s cubic-bezier(1,1,1,1) 2s;   过度属性：动画过程进行控制
  			width 2s;只改变水平方向的宽		 第一个参数：指定属性名称 all
  											第二个参数：控制延迟的时间；
  											第三个参数：贝塞尔曲线  控制动画
  											第四个参数  控制延迟点击上去的时候几秒显示 。
  											必须添加前俩个属性实现过渡。
}
6.input:focus{    获得焦点
  background{}
}
​       


### 6,属性选器(后台用)
```
div[class]{}选择div标签  并且有class属性

div[class="box"]{}选择div标签，有class属性，并且属性值是box。

div[class~="box"]{}  属性值有空格，可以选中本身以及包含自身的元素。

div[class|="box"]{}属性值中间有连字符并且以box单词开头。

div[class*="box"]{}属性中包含box三个字母的都会被选中。

div[class^="box1"]{}以box1开头的，都会被选中。

div[class$="1"]{}  以1结尾的都会被选中。
```
 7.子选择器

```

E>F:选中子元素F,E表示父元素；

E+F(a+div):选中E后面紧挨着的兄弟元素F

E~F；选中E元素后面的所有兄弟元素。

 

        <ul> 
        	<p></p>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
ul li：first-child/last-chlid(){	

​	添加一些样式。选中父元素ul中的 第一个孩子/最后一个孩纸

}

ul li: nth-child（）{括号里面写数字 或者 2n   或者odd单数 /基数    even 双数

​	样式

}

ul li：nth-last-child(2){}  倒数第二个

ul li：first-of-type{}  选中的是这种类型的第一个 略过p标签

ul li:  nth-of-type(2)  这种类型的 第二个

ul li：last-of-type   这种类型的 最后一个

ul li: nth-last-of-type(2){}

first-child{}   选中p标签。
```
### 8.交叉选择器


div.one     必须是div 他的类必须是one这个叫做交叉选择器。
```



# 二、 css中的基石，盒子模型

## 四部分

## 1.内容：相当于是瓶子。

## 2.内填充（padding）填充泡沫


内容到边框之间的距离

padding加上的话整个盒子会变大，通过减小内容的大小来改变

padding：10px  20px；（上下    左右）

padding：10px  20px   30px；（上 左右  下）

padding：10px   20px  30px   40px(上 右 下 左)

padding-top（left/bottom/right）：上填充。。。。。
```

## 3.边框（border）箱子
```

四个方向：border-top：10px   solid   #000；

					粗细          实线（style）       颜色
								 虚线（dashed）
style:dotted 点线  dashed：虚线。double：双线  groove：槽线.
```

## 4.外边距（margin）箱子与箱子 之间的距离。
```
设置盒子与盒子之间的距离时用到外边距

当一片区域被重复设置时，只显示较大值。通常只往上面的盒子设置 margin-bottom：20px；

一个值：四个方向

俩个值：上下

三个值；上  左右 下

四个值：上 右 下 左
margin-top（left/bottom/right）：上填充。。。。。
```

# 三、盒子模型中的常见问题。
```
1、当设置左浮动时，此时设置距离盒子的距离时，应该设置左上，如果是右浮动的话，则设置的是右上。

2、当一片区域被重复设置时，只显示较大值。

         解决办法：给上面的 盒子设置下边距，给左边的盒子设置右边距。

3、图片设置进去时检查一下是否和内容之间有一个默认样式，若果有

         解决办法为：加一个display：block。



4、去掉浏览器的默认样式。

5、padding不能设置负值。

5.margin-top的bug问题（五个条件同时具备）

	父元素的第一个子元素 。

	父元素没有设置边框

	父元素没有内填充

	父元素没有浮动

	第一个子元素没有浮动



解决办法：用padding-top模拟margin-top来解决。    

			子元素加浮动

			给父元素加overflow：hidden；
```
# 四、元素的真实宽高
```
宽：width+padding-left+padding-right+border-left+border-right；    

高：。。。。
```

#感悟
```
1、相对于力所能及做到的就尽量做到完美。

2.不要眼高手低，该做的就做一遍，你会获得新的知识的，跟着老师走，准没错。
```

```

```

```

```

```

```