[HTML DOM 教程](http://www.runoob.com/htmldom/htmldom-tutorial.html)

#### DOM 教程
1. 树形结构  
    ![树形结构](http://www.runoob.com/images/htmltree.gif)

2. 什么是 DOM  
    W3C DOM 标准被分为 3 个不同的部分：
    * 核心 DOM - 针对任何结构化文档的标准模型
    - XML DOM - 针对 XML 文档的标准模型<br>
        XML DOM 定义了所有 XML 元素的对象和属性，以及访问它们的方法。
    - HTML DOM - 针对 HTML 文档的标准模型<br>
        HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。
        - HTML 的标准对象模型
        - HTML 的标准编程接口
        - W3C 标准
  
3. DOM 节点
    - 整个文档是一个文档节点
    - 每个 HTML 元素是元素节点
    - HTML 元素内的文本是文本节点
    - 每个 HTML 属性是属性节点
    - 注释是注释节点

4. 节点父、子和同胞
    - 在节点树中，顶端节点被称为根（root）
    - 每个节点都有父节点、除了根（它没有父节点）
    - 一个节点可拥有任意数量的子
    - 同胞是拥有相同父节点的节点

```
    HTML 中：
    <html> 节点没有父节点；它是根节点
    <head> 和 <body> 的父节点是 <html> 节点
    文本节点 "Hello world!" 的父节点是 <p> 节点
    并且：
    <html> 节点拥有两个子节点：<head> 和 <body>
    <head> 节点拥有两个子节点：<meta> 与 <title> 节点
    <title> 节点也拥有一个子节点：文本节点 "DOM 教程"
    <h1> 和 <p> 节点是同胞节点，同时也是 <body> 的子节点
    并且：
    <head> 元素是 <html> 元素的首个子节点
    <body> 元素是 <html> 元素的最后一个子节点
    <h1> 元素是 <body> 元素的首个子节点
    <p> 元素是 <body> 元素的最后一个子节点
```
        
5. DOM 方法<br>
    HTML DOM 方法是我们可以在节点（HTML 元素）上执行的动作。方法是您能够执行的动作（比如添加或修改元素）。<br>
    HTML DOM 属性是我们可以在节点（HTML 元素）设置和修改的值。属性是您能够获取或设置的值（比如节点的名称或内容）。

一些常用的 HTML DOM 方法：
|方法	                            |描述                                                    |
|:--------------------------------|:------------------------------------------------------|
|getElementById()	            | 返回带有指定 ID 的元素。                                |
|getElementsByTagName()	        |返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。|
|getElementsByClassName()	    |返回包含带有指定类名的所有元素的节点列表。|
|appendChild()	                |把新的子节点添加到指定节点。|
|removeChild()	                |删除子节点。|
|replaceChild()	                |替换子节点。|
|insertBefore()	                |在指定的子节点前面插入新的子节点。|
|createAttribute()	            |创建属性节点。|
|createElement()	            |创建元素节点。|
|createTextNode()	            |创建文本节点。|
|getAttribute()	                |返回指定的属性值。|
|setAttribute()	                |把指定属性设置或修改为指定的值。|

一些常用的 HTML DOM 属性：
|方法             |描述             |
|:---------------|:---------------|
|innerHTML      |节点（元素）的文本值 |
|parentNode     |节点（元素）的父节点 |
|childNodes     |节点（元素）的子节点 |
|attributes     |节点（元素）的属性节点 |

6. DOM 属性<br>
    属性是节点（HTML 元素）的值，您能够获取或设置。
    - nodeName  属性规定节点的名称。
        * nodeName 是只读的
        * 元素节点的 nodeName 与标签名相同
        * 属性节点的 nodeName 与属性名相同
        * 文本节点的 nodeName 始终是 #text
        * 文档节点的 nodeName 始终是 #document
    - nodeValue 属性规定节点的值。
        * 元素节点的 nodeValue 是 undefined 或 null
        * 文本节点的 nodeValue 是文本本身
        * 属性节点的 nodeValue 是属性值
    - nodeType 属性返回节点的类型。nodeType 是只读的。
>      元素	1   属性 2    文本	3   注释	8   文档	9

7. DOM 访问
    - 通过使用 getElementById() 方法
    - 通过使用 getElementsByTagName() 方法
    - 通过使用 getElementsByClassName() 方法

8. DOM 修改
    - 改变 HTML 内容
    - 改变 CSS 样式
    - 改变 HTML 属性
    - 创建新的 HTML 元素
    - 删除已有的 HTML 元素
    - 改变事件（处理程序）

9. DOM 总结<br>
    [HTML DOM 实例](http://www.runoob.com/htmldom/htmldom-examples.html)和 [HTML DOM 参考手册](http://www.runoob.com/jsref/dom-obj-anchor.html)。