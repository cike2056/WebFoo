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



### HTML DOM
- 从html中获取的值，基本都是字符串类型，数字也不例外
- 获取的颜色值，不同浏览器返回的值可能是不同的（关键字‘red’，rgb(),或#111），所以最好不要用来作判断
- 空格也是文本节点，受空格影响，我们最好不要用innerHTML来作判断
-  removeChild()只是移除htmldom树，但是，在内存中依然存在. appendChild()如果是原有的元素则执行的是<font color='red'>剪切</font>的操作
- children 、nextElementSubling 、parentNode、、获取元素都是只读的，不可写
- 通过TagName、ClassName获取的元素是一个类数组的结构，但不是数组，数组的一些属性和方法对它不适用
- 通过setAttribute设置的表单value，会影响原型property的value，所以对于表单的value最好使用DOM的property来读写

