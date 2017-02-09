### JS
- 比较Boolean(expression) 和 new Boolean (expression)
    - The difference can be seen with this:
    // Note I'm using strict-equals
    new Boolean("true") === true; // false
    Boolean("true") === true; // true

    - And also with this (thanks @hobbs):
    typeof new Boolean("true"); // "object"
    typeof Boolean("true"); // "boolean"
- 空数组（[]）和空对象（{}）对应的布尔值，都是true,typeof为object
- for-in一般用于遍历对象的属性，遍历出来的属性的顺序不是固定的
- 变量提升提升的是声明，赋值不提升
- strict模式,在JS代码中的首行写上:'use strict';所有变量名没有前缀var的都会报错。
非严格模式下，没有var前缀下，变量会隐式得申明为全局变量。(虽然是这么说的，但是我的调试结果，有加var和没加var的scope是一样的。)
- Boolean转化中，除了"",NaN,undefined,null,0,false这六个其他一律为ture。
- pareInt和pareFolat的转化规则：
    - 忽略字符串前面的空白字符，找到第一个非空白字符
    - 如果第一个字符不是-或者数字返回NaN
    - 如果是继续解析，直到非数值模式为止
    - 0开头会当做八进制，0x开头会当做十六进制，但是可以指定第二个参数指定基数.
- "+"法操作符
    - 在两个操作数都是数字的时候，会做加法运算
    - 两个参数都是字符串或在有一个参数是字符串的情况下会把另外一个参数转换为字符串做字符串拼接
    - 在参数有对象的情况下会调用其valueOf或toString
    - 在只有一个字符串参数的时候会尝试将其转换为数字
    - 在只有一个数字参数的时候返回其正数值
- String中的trim()方法在IE9以下无法使用，建议自己写一个一样功能的函数绑定到string上。(例如:String.prototype.fun1=function (){ console.log("successful")};)
- 逗号运算符
    当你想要在期望一个表达式的位置包含多个表达式时，可以使用逗号操作符。这个操作符最常用的一种情况是：for 循环中提供多个参数。
- array中存放不同类型
- typeof NaN 返回 number，NaN === NaN或 NaN == NaN返回false,(NaN !==NaN)==true
    NaN is still a numeric type, despite the fact it actually stands for Not-A-Number 
- && 和 || 运算符
    检测对象是否为空 var name = o && o.getName()
    用来设置默认值 var name = otherName || 'default'
- 试图访问一个未声明的变量或者访问一个使用 let 声明的但未初始化的变量会导致一个 ReferenceError 异常被抛出
- undefined 值在布尔类型环境中会被当作 false,数值类型环境中 undefined 值会被转换为 NaN.当你对一个 null 变量求值时，空值 null 在数值类型环境中会被当作0来对待，而布尔类型环境中会被当作 false。
- 在 ECMAScript 2015 中，let（const）将不会提升变量到代码块的顶部。
- 可以通过指定 window 或 frame 的名字，从一个 window 或 frame 访问另一个 window 或 frame 中声明的变量。例如，在文档里声明一个叫 phoneNumber 的变量，那么你就可以在子框架里使用 parent.phoneNumber 来引用它。
- 常量不可以通过赋值改变其值，也不可以在脚本运行时重新声明。它必须被初始化为某个值。在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量。
    <font color='red'>对象属性</font>是不受保护的,所以可以使用如下语句来执行。
```
    const MY_OBJECT = {"key": "value"};
    MY_OBJECT.key = "otherValue";
```
- 字面量是由语法表达式定义的<font color='red'>常量</font>；或，通过由一定字词组成的语词表达式定义的常量
- 若你在同一行中连写两个逗号（,），数组中就会产生一个没有被指定的元素，其初始值是undefined。如果你在元素列表的尾部添加了一个逗号，它将会被忽略。显式地将缺失的元素声明为undefined，将大大提高你的代码的清晰度和可维护性。
- 可以使用数字或字符串字面值作为属性的名字，或者在另一个字面值内嵌套上一个字面值。
    对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的javascript标识符，它必须用""包裹。属性的名字不合法，那么便不能用.访问属性值，而是通过类数组标记("[]")访问和赋值。
```
    var car = { manyCars: {a: "Saab", "b": "Jeep"}, 7: "Mazda" };
    console.log(car.manyCars.b); // Jeep
    console.log(car[7]); // Mazda
    console.log(car['7']);//Mazda
```
- 原始的布尔值true和false 与 布尔对象的值true和false.下例中b属于对象，会被计算为true
```
    var b = new Boolean(false);
    if (b) // this condition evaluates to true
    if (b == true) // this condition evaluates to false
```
- break 和 break label 
    第一种语法形式用于终止在循环体或者switch的封闭内部；第二种语法形式用于在特定的封闭标签语句
```
    //示例 1
    for (i = 0; i < a.length; i++) {
    if (a[i] == theValue)
        break;
    }
```
```
    //示例 2
    var x = 0;
    var z = 0
    labelCancelLoops: while (true) {
        console.log("Outer loops: " + x);
        x += 1;
        z = 1;
        while (true) {
            console.log("Inner loops: " + z);
            z += 1;
            if (z === 10 && x === 10) {
                break labelCancelLoops;
            } else if (z === 10) {
                break;
            }
        }
    }
```
- continue 和 continue label
- for each...in 语句 让对象属性的值递归取得，而不是作用于它们的名字。
- 抛出异常可以抛出任意表达式而不是特定一种类型的表达式。
- addEventListener方法 btn.addEventListener("click", arg); 当参数是func 点击时运行，当参数时func() onload时运行






### HTML DOM
- 从html中获取的值，基本都是字符串类型，数字也不例外
- 获取的颜色值，不同浏览器返回的值可能是不同的（关键字‘red’，rgb(),或#111），所以最好不要用来作判断
- 空格也是文本节点，受空格影响，我们最好不要用innerHTML来作判断
-  removeChild()只是移除htmldom树，但是，在内存中依然存在. appendChild()如果是原有的元素则执行的是<font color='red'>剪切</font>的操作
- children 、nextElementSubling 、parentNode、、获取元素都是只读的，不可写
- 通过TagName、ClassName获取的元素是一个类数组的结构，但不是数组，数组的一些属性和方法对它不适用
- 通过setAttribute设置的表单value，会影响原型property的value，所以对于表单的value最好使用DOM的property来读写

