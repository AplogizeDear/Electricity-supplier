# 标签的分类

```

#### 块标签：div   宽高可以设置     div独占一行不可并排； ul li   p  pre    ol   h标题标签    

#### 行内标签：a   span    不可以设置宽高    可以在一行显示。 

#### 行内块标签： img   可以一行显示    可以设置宽高。 
```

# 标签间的转换

把一个标签转换成块标签通过display：block；

转换成行内标签用display：inline；（他的高宽由内容撑开 ）

转换成行内块标签：display：inline-block；

display：none；让一个元素隐藏。不再占据空间 。

display：设置元素在页面中的显示形式。

# HTML5中的语义化标签   都当做div来处理

header头部标签 

nav导航标签

main主题标签                                               写法： <header></header>

aside侧导航

section 每一部分都可以当做section

footer底部



# 背景图片

页面中 经常需要更新的用img标签引入。

但是不需要更新的用背景图片引入。

background-color;

background-image:url('');

background-repeat:no-repeat;去重复

background-position：50%  50%；通过百分比

​		还可以通过单词，分为水平和垂直。水平 left   center right

​										垂直 top   center   bottom

​			比如说左上：background-position：left  top;

也可以简写：background：颜色   路径   禁止重复   位置；

background-size：6px  6px；



怎样引入图片

1.设置盒子的大小

2.引入背景图片

3.设置背景图片大小。



a标签字体颜色不能继承，需要单独设置。

a标签默认的下划线，text-decoration：none;去掉下划线。

ul嵌套li，子元只能是li  去掉默认样式，list-style：none;

# 浮动(经验，遇到问题的解决方案)

0.改变排列方式，比如说希望它行排的时候。

1.浮动的元素脱离文档流，不符合从上到下，从左到右。正常的元素是她而不见。

2.浮动卡顿的问题

​	找到父元素边框的时候。浮动就会停止。

​	高度比其他元素大时，会出现卡顿。

浮动的bug问题

父元素不设置高度，所有的子元素都浮动，浮动的子元素的内容撑不开父元素高度。

​	解决办法：	给父元素一个overflow：hidden;

​				或者给父元素加最后一个子元素，

​					这个子元素添加为clear：both；清除浮动。



3.浮动引发的bug解决方案

​	1，能设置高度的都设置高度

​	2.给父元素添加overflow：hidden；

​	3.ul:after{

​					content:"";

​					display:block;

​			}

4.a标签包图片要给a标签设置宽高

a{

​	display:block;

​	width:;

​	height:;

}

a标签内不能再设置a标签

需要浮动的话直接添加浮动就可以设置宽高

不需要的话，要设置display：block；

# 表单标签

``` 
	<!-- 表单标签  提交到哪里   提交方式-->
	<!-- action：提交地址  form：表单标签
	<form action="a.php" methed="get"></form>快速 但是不安全 可以看见
	<form action="a.php" methed="post"></form>慢些，但是安全啊 -->
	<!-- 表单控件 input：行内块标签  type：属性  
	placeholder:写默认提示值，仅仅只是默认值   
	class；设置类名，可以设置宽高   
	disabled="disabled"禁用  
	name 和后台进行交互的标识  
	readonly="readonly" 只读   
	maxlength="10" 最多只能输入十个字符 
    value="用户名"js里面用来获取用户输入的内容
	-->
	用户名<input type="text" placeholder="请输入用户名" class="text"><br>
	
	密码<input type="password" name="" value="请输入密码">
	
	上传文件<input type="file" name=""><br>
	
	请选择你喜欢的音乐（多选按钮）：<input type="checkbox">摇滚乐
								<input type="checkbox">摇滚乐
								<input type="checkbox">摇滚乐<br>
						
	请选择你居住的城市（单选按钮）：   <input type="radio" name="city">北京
									<input type="radio" name="city">山西
									<input type="radio" name="city">运城<br>
									
	请选择你的最高学历(下拉框  select嵌套option来写，select="select"默认选中的 multiple="multiple"按住cotrol可以多选)：
		<select name="" id="" size="2"> 表示显示俩个值。
		<option value="">学士</option>
		<option value="">研究生</option>
		<option value="">硕士</option>
		<option value="">博士</option>
		</select><br>
```


​		
		留言板（）：<textarea name="" id="" cols="30" rows="10"></textarea><br>
		按钮
		<input type="submit">
		<input type="reset">
		<input type="button" value="搜索">
		
		在csss中不能拖动的设置textarea{resize:none}
							textarea{resize：horizontal}水平
							textarea{resize：vertical}竖直
							textarea{resize：both}俩个方向都可以
							resize：是否允许用户进行控件大小的改变。


## h5中的日期控件

<input type=“date”><br>显示年月日

<input type="month"><br>只显示年月

<inout type="week"<br>.只显示年和周

<input tyep="time"><br>显示时和分

<input type="datetime-local"><br>年月日时分

<input type="number" min="0" max="100" step="20" value="0">一步走二十

​			range

正则验证

email地址<input type="email">

url验证                               url

电话                                    tel

# 字体标签

字体效果的标签

<b>b标签加粗</b>

<strong>strong标签</strong>

<i>i标签斜体</i>

<em>em标签<em>

删除线标签《》<s>s标签</s>

下划线标签：<u> 下划线 </u>

水平线：<hr width="300" size="30" color="red"> 默认水平居中

​			宽                  高                      颜色

# 标题标签（块级标签）

h1 h2 h3 h4 h5 h6      一共有六级标签从大到小

# 段落标签（块标签）

段落文字<p></p>可以嵌套字体效果标签em i strong

pre标签<pre></pre>   是按照编辑器预先设置的格式进行排版  比如说写多少空格就有多少空格。

# 列表标签（块标签）

1无序列表    前面的的点的控制（）  <ul type="circle/square/disc"  >嵌套li

2.有序列表   也有type的值 <ol type="1/i/I/a/A">嵌套li

3.自定义列表dl嵌套dt  定义条目

​				dd 定义内容

# 语义化标签

<article></artile>独立文章，定义文档独立格式

<hgroup>

<h2>

<h2>

<hgroup>对标题进行分组

<figure>图片的内容

<figcaption>图片的标题<figcaption>

</figure>



# h5中的新增标签

1进度条

<progress min="0" max="0" value= "3" ></progress>

范围程度

<meter min="0" max="0" value= "3" ></meter>

音频标签

<audio src="" controls="controls" loop="loop"  autoplay="autoplay"></audio>

​				控件向用户显示      重复播放       加载完成后自动播放

<video src="" controls="controls" loop="loop"  autoplay="autoplay"></video>

画布标签

<canvas style ="width:400px;

>​			height:400px;
>
>​			background:red;"></canvas>



设置时没有显示色块。原因：类名不对:比如说你写的box写成了big

​						路径错误

​						没设置背景色

​						css没关联 

