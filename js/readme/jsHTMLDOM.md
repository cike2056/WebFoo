[jsHTMLDOM](http://www.runoob.com/js/js-htmldom.html)

#### JavaScript HTML DOM
    通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。
    HTML DOM 模型被构造为对象的树：
    ![DOM模型](http://www.runoob.com/images/pic_htmltree.gif)
- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应

#### 查找 HTML 元素
- 通过<font color='red'> id</font> 找到 HTML 元素
- 通过<font color='red'>标签名</font>找到 HTML 元素
- 通过<font color='red'>类名</font>找到 HTML 元素

```
    var x=document.getElementById("intro");
    var y=x.getElementsByTagName("p");
    var x=document.getElementsByClassName("intro");
```

#### JavaScript HTML DOM - 改变 HTML
    HTML DOM 允许 JavaScript 改变 HTML 元素的内容。
1. 改变 HTML 输出流
```
    <script>
    document.write(Date());
    </script>
```

2. 改变 HTML 内容
```
    document.getElementById(id).innerHTML=新的 HTML
```

3. 改变 HTML 属性
```
    document.getElementById(id).attribute=新属性值
    如
    document.getElementById("image").src="landscape.jpg";
```
#### JavaScript HTML DOM - 改变CSS
```
    <button type="button" 
    onclick="document.getElementById('id1').style.color='red'">

    <input type="button" value="隐藏文本" onclick="document.getElementById('p1').style.visibility='hidden'" />

    <input type="button" value="显示文本" onclick="document.getElementById('p1').style.visibility='visible'" />
```
#### JavaScript HTML DOM 事件
1. 对事件做出反应
   HTML 事件的例子：
    - 当用户点击鼠标时
    - 当网页已加载时
    - 当图像已加载时
    - 当鼠标移动到元素上时
    - 当输入字段被改变时
    - 当提交 HTML 表单时
    - 当用户触发按键时 

2. HTML 事件属性
```
    <button onclick="displayDate()">点这里</button>
```

3. 使用 HTML DOM 来分配事件
    <script>
        document.getElementById("myBtn").onclick=function(){displayDate()};
    </script>

4. onload 和 onunload 事件
    onload 和 onunload 事件会在用户进入或离开页面时被触发。
    onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。

5. onchange 事件
    onchange 事件常结合对输入字段的验证来使用。
```
    function myFunction(){
        var x=document.getElementById("fname");
        x.value=x.value.toUpperCase();
    }
    输入你的名字: <input type="text" id="fname" onchange="myFunction()">
```

6. onmouseover 和 onmouseout 事件 
    onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。

7. onmousedown、onmouseup 以及 onclick 事件  
    onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。
    首先当点击鼠标按钮时，会触发 onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，
    最后，当完成鼠标点击时，会触发 onclick 事件。

8. onfocus 获得焦点

#### JavaScript HTML DOM EventListener [DOM 事件](http://www.runoob.com/jsref/dom-obj-event.html)
1.    addEventListener() 方法
> addEventListener() 方法用于向指定元素添加事件句柄。
addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。
你可以向一个元素添加多个事件句柄,且不会覆盖已存在的事件。
你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件,不会覆盖。
你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。
addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。
```
    document.getElementById("myBtn").addEventListener("click", displayDate);
```

2. 语法
```
    element.addEventListener(event, function, useCapture);
```
- 第一个参数是事件的类型 (如 "click" 或 "mousedown").
- 第二个参数是事件触发后调用的函数。
- 第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。

3. 事件冒泡或事件捕获[捕获与冒泡](http://harttle.com/2015/07/31/javascript-event.html)  
    事件传递定义了元素事件触发的顺序。 如果你将 p 元素插入到 div 元素中，用户点击 p 元素, 哪个元素的 "click" 事件先被触发呢？

    -   在 <font color='red'>冒泡</font> 中，内部元素的事件会先被触发，然后再触发外部元素，即： <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。
    -   在 <font color='red'>捕获</font> 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。

```
    addEventListener() 方法可以指定 "useCapture" 参数来设置传递类型：
    addEventListener(event, function, useCapture);
    默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递
```

4. removeEventListener() 方法
```
    removeEventListener() 方法移除由 addEventListener() 方法添加的事件句柄:
    element.removeEventListener("mousemove", myFunction);
```

#### DOM元素
1. 创建新的 HTML 元素
```
    <script>
        var para=document.createElement("p");
        var node=document.createTextNode("这是一个新段落。");
        para.appendChild(node);
        var element=document.getElementById("div1");
        element.appendChild(para);
    </script>
```
2. 删除已有的 HTML 元素
```
    <script>
        var parent=document.getElementById("div1");
        var child=document.getElementById("p1");
        parent.removeChild(child);
    </script>
```

```
    找到您希望删除的子元素，然后使用其 parentNode 属性来找到父元素：
    var child=document.getElementById("p1");
    child.parentNode.removeChild(child);
```




