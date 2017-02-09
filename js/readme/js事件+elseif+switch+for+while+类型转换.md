[js事件+elseif+switch+for+while+类型转换](http://www.runoob.com/js/js-events.html)

#### JavaScript 事件
    HTML 事件是发生在 HTML 元素上的事情。
    当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。

#### HTML 事件
    HTML 事件可以是浏览器行为，也可以是用户行为。
<font color="red">在事件触发时 JavaScript 可以执行一些代码。</font>
```
    HTML 元素中可以添加事件属性，使用 JavaScript 代码来添加 HTML 元素。
    单引号:
    <some-HTML-element some-event='some JavaScript'>
    双引号:
    <some-HTML-element some-event="some JavaScript">
    实例：
    <button onclick='getElementById("demo").innerHTML=Date()'>现在的时间是??</button>
    实例：
    <button onclick="this.innerHTML=Date()">现在的时间是?</button>
    实例：
    <button onclick="displayDate()">现在的时间是?</button>
```

#### 常见的HTML事件

|事件           |描述                        |
|:--------------|:--------------------------|
|onchange	    |HTML 元素改变|
|onclick	    |用户点击 HTML 元素|
|onmouseover	|用户在一个HTML元素上移动鼠标|
|onmouseout	    |用户从一个HTML元素上移开鼠标|
|onkeydown	    |用户按下键盘按键|
|onload	        |浏览器已完成页面的加载|   

#### JavaScript 字符串(略)

#### JavaScript 运算符(略)

#### 逗号运算符
```
    for (var i = 0, j = 9; i <= 9; i++, j--)
     document.writeln("a[" + i + "][" + j + "] = " + a[i][j]);
```

```
    另一个使用逗号操作符的例子是在返回值前处理一些操作。如同下面的代码，只有最后一个表达式被返回，其他的都只是被求值。
    function myFunc () {
        var x = 0;
        return (x += 1, x); // the same of return ++x;
    }
```

#### JavaScript 比较 和 逻辑运算符
    比较和逻辑运算符用于测试 true 或者 false。
1. 比较运算符 (Number == String true)
```        
    ==          值等于                
    !=	        值不等于               
    === 	    绝对等于（值和类型均相等）
    !==         不绝对等于（值或类型均不相等）
```

2. 逻辑运算符
```
    &&	and
    ||	or
    !	not
```

3. 条件运算符
    JavaScript 还包含了基于某些条件对变量进行赋值的条件运算符。
```
    variablename=(condition)?value1:value2 
```

#### JavaScript If...Else 语句
    条件语句用于基于不同的条件来执行不同的动作
条件语句:
```
    if 语句 - 只有当指定条件为 true 时，使用该语句来执行代码
    if...else 语句 - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
    if...else if....else 语句- 使用该语句来选择多个代码块之一来执行
    switch 语句 - 使用该语句来选择多个代码块之一来执行
```

#### JavaScript switch 语句
    switch 语句用于基于不同的条件来执行不同的动作。
switch语句:
```
    switch(n)
    {
        case 1:
            执行代码块 1
            break;
        case 2:
            执行代码块 2
            break;
        default:
            与 case 1 和 case 2 不同时执行的代码
    }
```

#### JavaScript for 循环
    循环可以将代码块执行指定的次数。
不同类型的循环:
```
    for - 循环代码块一定的次数
    for/in - 循环遍历对象的属性
    while - 当指定的条件为 true 时循环指定的代码块
    do/while - 同样当指定的条件为 true 时循环指定的代码块
```

1. For 循环
```
    语句 1 （代码块）开始前执行 starts.通常我们会使用语句 1 初始化循环中所用的变量 (var i=0)。
    语句 2 定义运行循环（代码块）的条件,通常语句 2 用于评估初始变量的条件。
    语句 3 在循环（代码块）已被执行之后执行,通常语句 3 会增加初始变量的值。
    for (语句 1; 语句 2; 语句 3)
    {
        被执行的代码块
    }
```

<font color='red'>
可以省略语句1 语句2 语句3 都是可选的
可以在语句 1 中初始化任意（或者多个）值：
</font>
```
    for (var i=0,len=cars.length; i<len; i++)
    { 
        document.write(cars[i] + "<br>");
    }
```

2. For/In 循环

```
    var x;
	var txt="";
	var person={fname:"Bill",lname:"Gates",age:56}; 
	for (x in person){
		txt=txt + person[x];
	}
```

#### JavaScript while 循环
1. while 循环
    只要指定条件为 true，循环就可以一直执行代码块。
    只要指定条件为 true，循环就可以一直执行代码块。

2. do/while 循环
    do/while 循环是 while 循环的变体。该循环会在检查条件是否为真之前执行一次代码块，然后如果条件为真的话，就会重复这个循环。

#### JavaScript Break 和 Continue 语句
    break 语句用于跳出循环。
    continue 用于跳过循环中的一个迭代。
JavaScript 标签(语句块或者循环语句中)
    需标记 JavaScript 语句，请在语句之前加上冒号：
    label :
    break labelname; 
    continue labelname;
```
    cars=["BMW","Volvo","Saab","Ford"];
    list: 
    {
        document.write(cars[0] + "<br>"); 
        document.write(cars[1] + "<br>"); 
        document.write(cars[2] + "<br>"); 
        break list;
        document.write(cars[3] + "<br>"); 
        document.write(cars[4] + "<br>"); 
        document.write(cars[5] + "<br>"); 
    }
```

#### JavaScript typeof, null, 和 undefined
1. typeof 操作符
    你可以使用 typeof 操作符来检测变量的数据类型。
```
代码:
    <script>
    function newFunction() {
        document.getElementById('demo').innerHTML = typeof "john"+"<br>"+
        typeof 3.14 + "<br>"+
        typeof false + "<br>"+
        typeof [1,3,4] + "<br>"+
        typeof {name:"john",age:34}+"<br>"+
        typeof null + "<br>"+
        typeof undefined + "<br>";
    }
    </script>
返回:
    string
    number
    boolean
    object
    object
    object
    undefined
```

2. null
    在 JavaScript 中 null 表示 "什么都没有"。
    null是一个只有一个值的特殊类型。表示一个<font color='red'>空对象引用</font>。
    用 typeof 检测 null 返回是object。
```
    设置为 null 来清空对象:
    var person = null;           // 值为 null(空), 但类型为对象
    设置为 undefined 来清空对象:
    var person = undefined;     // 值为 undefined, 类型为 undefined
```

3. Undefined
    在 JavaScript 中, undefined 是一个没有设置值的变量。
    typeof 一个<font color='red'>没有值的变量</font>会返回 undefined。

4. Undefined 和 Null 的区别
```
    typeof undefined             // undefined
    typeof null                  // object
    null === undefined           // false
    null == undefined            // true
```

#### JavaScript 类型转换
    Number() 转换为数字， String() 转换为字符串， Boolean() 转化为布尔值。
1. JavaScript 数据类型
```
    在 JavaScript 中有 5 种不同的数据类型：
    string
    number
    boolean
    object
    function
    3 种对象类型：
    Object
    Date
    Array
    2 个不包含任何值的数据类型：
    null
    undefined
```

2. typeof 操作符
```
    typeof "John"                 // 返回 string 
    typeof 3.14                   // 返回 number
    typeof NaN                    // 返回 number
    typeof false                  // 返回 boolean
    typeof [1,2,3,4]              // 返回 object
    typeof {name:'John', age:34}  // 返回 object
    typeof new Date()             // 返回 object
    typeof function () {}         // 返回 function
    typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
    typeof null                   // 返回 object
```

3. constructor 属性
```
    "John".constructor                 // 返回函数 String()  { [native code] }
    (3.14).constructor                 // 返回函数 Number()  { [native code] }
    false.constructor                  // 返回函数 Boolean() { [native code] }
    [1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
    {name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
    new Date().constructor             // 返回函数 Date()    { [native code] }
    function () {}.constructor         // 返回函数 Function(){ [native code] }
```

```
    使用 constructor 属性来查看是对象是否为数组 (包含字符串 "Array"):
    function isArray(myArray) {
        return myArray.constructor.toString().indexOf("Array") > -1;
    }
```

```
    使用 constructor 属性来查看是对象是否为日期 (包含字符串 "Date"):
    function isDate(myDate) {
        return myDate.constructor.toString().indexOf("Date") > -1;
    }
```

4. JavaScript 类型转换
    JavaScript 变量可以转换为新变量或其他数据类型：
    - 通过使用 JavaScript 函数
    - 通过 JavaScript 自身自动转换

    - 将数字转换为字符串  
        全局方法 String() 可以将数字转换为字符串。 
        或者是用toString()方法
    - 将字符串转换为数字 
        全局方法 Number() 可以将字符串转换为数字。空字符串转换为 0。
    - 一元运算符 + 
        Operator + 可用于将变量转换为数字,如果变量不能转换，它仍然会是一个数字，但值为 NaN (不是一个数字):
        ```
            var y = "5";      // y 是一个字符串
            var x = + y;      // x 是一个数字
        ```
    - 将布尔值转换为数字 
        全局方法 Number() 可将布尔值转换为数字。
    - 将日期转换为数字 
        ```
            全局方法 Number() 可将日期转换为数字。
            d = new Date();
            Number(d)          // 返回 1404568027739

            日期方法 getTime() 也有相同的效果。
            d = new Date();
            d.getTime()        // 返回 1404568027739
        ```

    - 自动转换类型 
        当 JavaScript 尝试操作一个 "错误" 的数据类型时，会自动转换为 "正确" 的数据类型。
        ```
            5 + null    // 返回 5         null 转换为 0
            "5" + null  // 返回"5null"   null 转换为 "null"
            "5" + 1     // 返回 "51"      1 转换为 "1"  
            "5" - 1     // 返回 4         "5" 转换为 5
        ```
    - 自动转换为字符串 
        ```
        当你尝试输出一个对象或一个变量时 JavaScript 会自动调用变量的 toString() 方法： 
            document.getElementById("demo").innerHTML = myVar;
            // if myVar = {name:"Fjohn"}  // toString 转换为 "[object Object]"
            // if myVar = [1,2,3,4]       // toString 转换为 "1,2,3,4"
            // if myVar = new Date()      // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"

        数字和布尔值也经常相互转换：
            // if myVar = 123             // toString 转换为 "123"
            // if myVar = true            // toString 转换为 "true"
            // if myVar = false           // toString 转换为 "false"
        ````
