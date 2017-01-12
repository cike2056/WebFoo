[js错误+变量提升+严格模式+使用误区+保留关键字+JSON](http://www.runoob.com/js/js-errors.html)

#### JavaScript 错误 - throw、try 和 catch 
- try 语句测试代码块的错误。
- catch 语句处理错误。
- throw 语句创建自定义错误。

1. JavaScript 错误
    当 JavaScript 引擎执行 JavaScript 代码时，会发生各种错误。
    可能是语法错误，通常是程序员造成的编码错误或错别字。
    可能是拼写错误或语言中缺少的功能（可能由于浏览器差异）。
    可能是由于来自服务器或用户的错误输出而导致的错误。
    当然，也可能是由于许多其他不可预知的因素。
    ```
        语法:
        try {
        //在这里运行代码
        } catch(err) {
        //在这里处理错误
        }
    ```

2. JavaScript 抛出（throw）错误
    当错误发生时，当事情出问题时，JavaScript 引擎通常会停止，并生成一个错误消息。
    描述这种情况的技术术语是：JavaScript 将抛出一个错误。

3. JavaScript try 和 catch
    try 语句允许我们定义在执行时进行错误测试的代码块。
    catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。
    JavaScript 语句 try 和 catch 是成对出现的。

4. Throw 语句
    throw 语句允许我们创建自定义错误。
    正确的技术术语是：创建或抛出异常（exception）。
    如果把 throw 与 try 和 catch 一起使用，那么您能够控制程序流，并生成自定义的错误消息。
    ```
        语法:
        throw exception
    ```
    ```
        function myFunction()
        {
            try
            { 
                var x=document.getElementById("demo").value;
                if(x=="")    throw "值为空";
                if(isNaN(x)) throw "不是数字";
                if(x > 10) throw "太大";
                if(x < 5) throw "太小";
            }
            catch(err)
            {
                var y=document.getElementById("mess");
                y.innerHTML="错误：" + err + "。";
            }
        }
    ```
#### JavaScript 变量提升 (参考: [Javascript作用域和变量提升](https://segmentfault.com/a/1190000003114255)) 
-    在代码运行前，函数声明和变量定义通常会被解释器移动到其所在作用域的最顶部.
-    提升的部分只是变量声明，赋值语句和可执行的代码逻辑还保持在原地不动
-    提升只是将变量声明提升到变量所在的变量范围的顶端，并不是提升到全局范围
-    变量 var foo = function(){} ,也会上升到函数体顶部.
-    对于代码var a =2;来说，编译器看到的是两行代码var a; a = 2;第一个语句是声明语句，在编译阶段处理。第二个语句是赋值语句，在运行阶段处理。
-    变量声明和函数声明都会得到变量提升，但函数声明会最先得到提升，然后是变量声明。
-    对于函数声明来说，如果定义了相同的函数变量声明，后定义的声明会覆盖掉先前的声明
-    JavaScript中是没有块级作用域的概念（ps：ES6中有改进了）

```
        function foo() {
            bar();
            var x = 1;
        }

        等价于:
        function foo() {
            var x;
            bar();
            x = 1;
        }
```
```
        function foo() {
            if (false) {
                var x = 1;
            }
            return;
            var y = 1;
        }

        等价于:
        function foo() {
            var x, y;
            if (false) {
                x = 1;
            }
            return;
            y = 1;
        }
```
```
        var a = 1;
        function b() {
            a = 10;
            return;
            function a() {}
        }
        b();
        alert(a);
        等价于:
        var a = 1;
        function b() {
            function a() {}
            a = 10;
            return;
        }
        b();
        alert(a);
```
```
        foo();
        var foo = function bar(){    //这是一个函数表达式，不再是函数声明。
            console.log("bar");
        }
        等价于:
        var foo;    
        foo();    //TypeError，因为还没有赋值
        bar();    //bar不可以在全局范围内引用
        foo = function bar(){            
            console.log("bar");
        }   
```

```
        foo();    //输出的结果为1,会先运行函数声明
        var foo;
        function foo(){
            console.log(1);
        }
        foo = function(){
            console.log(2);
        }   
        等价于：
        function foo(){
            console.log(1);
        } 
        foo();
        foo = function(){
            console.log(2);
        }  
        注意：var foo;由于是重复声明变量，所以被编译优化去掉。
```

```
        //这段代码输出结果为2，if语句没有块级作用域的功能，所以函数声明都被提升到全局作用域中，又因为定义了两个foo，后来的定义覆盖了前边的定义，所以输出结果为2。
        foo();    //输出结果为2
        var a = true;
        if(a){
            function foo(){
                console.log(1);
            }
        }else{
            function foo(){
                console.log(2);
            }
        }
```

#### JavaScript 严格模式(use strict)[Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)
    JavaScript 严格模式（strict mode）即在严格的条件下运行。
    "use strict" 的目的是指定代码在严格条件下执行。
    严格模式下你不能使用未声明的变量。
    严格模式通过在脚本或函数的头部添加 "use strict"; 表达式来声明。
- 针对整个脚本文件 
    将"use strict"放在脚本文件的第一行，则整个脚本都将以"严格模式"运行。
- 针对单个函数 
    将"use strict"放在函数体的第一行，则整个函数以"严格模式"运行。

#### JavaScript 使用误区[使用误区](http://www.runoob.com/js/js-mistakes.html)
- 数组中使用名字来索引 
    JavaScript 不支持使用名字来索引数组，只允许使用数字索引。
    在 JavaScript 中, 对象 使用 名字作为索引。
    如果你使用名字作为索引，当访问数组时，JavaScript 会把数组重新定义为标准对象。
    执行这样操作后，数组的方法及属性将不能再使用，否则会产生错误:
```
    var person = [];
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 46;
    var x = person.length;         // person.length 返回 0
    var y = person[0];             // person[0] 返回 undefined
```

#### JavaScript 表单(略)

#### JavaScript 表单验证(略)

#### JavaScript 验证 API

#### JavaScript 保留关键字
- JavaScript 保留关键字
- JavaScript 对象、属性和方法
- Java 保留关键字
- Windows 保留关键字
- HTML 事件句柄
- 非标准 JavaScript

#### JavaScript JSON[JSON 教程](http://www.runoob.com/json/json-tutorial.html)
- JSON 字符串转换为 JavaScript 对象
```
    <script>
    var text = '{"employees":[' +
        '{"firstName":"John","lastName":"Doe" },' +
        '{"firstName":"Anna","lastName":"Smith" },' +
        '{"firstName":"Peter","lastName":"Jones" }]}';
    obj = JSON.parse(text);
    document.getElementById("demo").innerHTML =
        obj.employees[1].firstName + " " + obj.employees[1].lastName;
    </script>
```
- JavaScript JSON.parse() [parse方法](http://www.runoob.com/js/javascript-json-parse.html)
- JavaScript JSON.stringify() [stringify](http://www.runoob.com/js/javascript-json-stringify.html)

#### javascript:void(0) 含义
    void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。
```
        语法格式如下：
        <head>
        <script type="text/javascript">
        <!--
        void func()
        javascript:void func()

        或者

        void(func())
        javascript:void(func())
        //-->
        </script>
        </head>
```

```
        <body>
        <a href="javascript:void(0)">单此处什么也不会发生</a>
        <a href="javascript:void(alert('Warning!!!'))">警告!</a>
        </body>
```
    href="#"与href="javascript:void(0)"的区别
    # 包含了一个位置信息，默认的锚是#top 也就是网页的上端。
    而javascript:void(0), 仅仅表示一个死链接。
    在页面很长的时候会使用 # 来定位页面的具体位置，格式为：# + id。
    如果你要定义一个死链接请使用 javascript:void(0) 。