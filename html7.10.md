# HTML基础教程

### 1.新建HTML文件的方式

​	直接创建一个文档，并且修改后缀，改成HTML成为新文档，css也是一样。

## 2.新建HTML主体的快捷方式

​	！+Tab    html5的新建方式

​	HTML:4s+Tab   html4的新建方式

导入样式表   @import url(base.css );

行内    div style=“width height ”

内嵌样式表          自上而下

外部样式表          自上而下

css优先级	      

## 3.标签

​	<></>   双标签     <>  单标签  都叫做标签符号

​	ctrl + /  注释标签

​	link标签 用来引入css文件（层叠样式表）在head中使用

​	img标签，引入图片

​	<a href="C:\Users\ZhangQiang\Desktop\jisuanqi/新建文件夹/index .html" title="点击">点击生效</a><!--href是属性,a标签是超链接标签，title下标显示属性-->

## 4.选择器

目标：选中页面中的元素

分为类名选择器和标签选择器，并且类名选择器高于标签选择器。

## 5.路径问题

路径：
绝对路径：从盘符开始一级一级往下找。还可以进行网页的跳转
相对路径：有一个参考物（通过文件找到文件所在位置，然后一级一级找）

		1.俩个html文件是同一级
		直接是文件名 
		2.向上反一级../目录下的文件
## 6.关于文字和div块的居中及其属性

	div{
	width: 200px;
	height: 200px;
	background: red;
	 /*上右下左    auto自动的意思*/
	margin:0 auto 0 auto;  
	/*改变圆角  50% 可以变成圆 30px*/
	border-radius: 30px;
	/*文字尺寸*/
	font-size: 50px;
	/*文字颜色*/
	color: white;
	/*文字字体*/
	font-family: "华文新魏";
	/*文字加粗*/
	font-weight: bold;
	/*文字水平居中*/
	text-align: center;
	/*文字垂直居中    值与行高相同*/
	line-height: 200px;
	}