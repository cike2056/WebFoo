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
- 从ECMAScript 6 开始，JavaScript 增加了对 Promise 对象的支持，它允许你对延时和异步操作流进行控制。
- for...in 循环遍历的结果是数组元素的下标不同的是， for...of 遍历的结果是元素的值
- 传值 原始参数（比如一个具体的数字）被作为值传递给函数；值被传递给函数，如果被调用函数改变了这个参数的值，这样的改变不会影响到全局或调用函数。
    如果你传递一个对象（即一个非原始值(non-primitive value)，例如Array或用户自定义的对象）作为参数，而函数改变了这个对象的属性，这样的改变对函数外部是可见的
```
    var a = 0
    var b = 1
    function func(a){
        a = 3
        b = 3
    }
    func(a)
    console.log(a) // a = 0
    console.log(b) // b = 3
```
- 函数可以作为参数传递给另外一个函数
```
    function map(f,a) {
    var result = [], // 创建一个新的数组
        i;

    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
    }
```
- 设置函数参数的默认值 function func(a,b=1)
- 箭头函数表达式（也称胖箭头函数, fat arrow function）相比函数表达式具有较短的语法并以词法的方式绑定 this。箭头函数总是匿名的。有两个因素会影响引入箭头函数：更简洁的函数和 this。
箭头函数内部的this是词法作用域，由上下文确定,也就是外层调用者obj。
-  解构赋值语法是一个能从数组或对象对应的数组结构或对象字面量里提取数据的 Javascript 表达式。[结构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- +一元运算符, 如果操作数在之前不是number，试图将其转换为number console.log(+'3')
- delete操作符, 删除一个对象(an object)或一个对象的属性(an object's property)或者一个数组中某一个键值.不推荐使用.能使用 delete 删除各种各样的隐式声明(implicity declared)， 但是被var声明的除外 .
如果 delete 操作成功, 属性或者元素会变成 undefined. 如果 delete可行会返回true，如果不成功返回false.
- 关系操作符in   in operator, 如果指定的属性(property)在指定的对象(object)中会返回true,语法如下:propNameOrNumber in objectName
- instanceof   instanceof operator, 如果对象是某种指定类型(object type)返回true.
- 十进制可以以0开头，后面接其他十进制数字，但是假如后面接的十进制数字小于8，那么该数字将会被当做八进制处理。
- 二进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母B(0b或者是0B)。
- 十六进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母X(0x或者是0X)。
- 16进制转义序列 '\xA9' \x之后的数值将被认为是一个16进制数.
- 如果给数组操作符的是一个非整形数值，那么将作为一个代表数组的对象的属性(property)创建，而非作为数组的元素。arr[3.4]
- ECMAScript 6引入Map对象.Map对象就是一个简单的键值对映射集合，可以按照数据插入时的顺序遍历所有的元素。
- Object和Map的比较<br>
    一般地，objects会被用于将字符串类型映射到数值。Object允许设置键值对、根据键获取值、删除键、检测某个键是否存在。而Map具有更多的优势。
    Object的键均为Strings类型，在Map里键可以是任意类型
    必须手动计算Object的尺寸，但是可以很容易地获取使用Map的尺寸
    Map的遍历遵循元素的插入顺序
    Object有原型，所以映射中有一些缺省的键。可以理解为（map = Object.create(null)）
    这两条提示可以帮你决定是使用Map还是Object：
    如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用Object
    如果需要对个别元素进行操作，使用Object
- WeakMap对象也是键值对的集合。它的键必须是对象类型，值可以是任意类型。它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被GC回收掉。WeakMap提供的接口与Map相同。
- Set对象是一组值的集合，这些值是不重复的，可以按照添加顺序来遍历。
- 数组（Array）和集合（Set）的对比
    一般情况下，在JavaScript中使用数组来存储一组元素，而新的集合对象有这些优势：
    数组中用于判断元素是否存在的indexOf 函数效率低下
    集合对象允许根据值删除元素，而数组中必须使用基于下标的splice方法
    数组的indexOf方法无法找到NaN值
    集合对象存储不重复的值，所以不需要手动处理包含重复值的情况
- 一个对象的属性名可以是任何有效的 JavaScript 字符串，或者可以被转换为字符串的任何类型，包括空字符串。然而，一个属性的名称如果不是一个有效的 JavaScript 标识符（例如，一个由空格或连字符，或者以数字开头的属性名），就只能通过方括号标记访问。这个标记法在属性名称是动态判定（属性名只有到运行时才能判定）时非常有用。
    方括号中的所有键都将转换为字符串类型，因为JavaScript中的对象只能使用String类型作为键类型。
- 枚举一个对象的所有属性
    - for...in 循环
    该方法依次访问一个对象及其原型链中所有可枚举的属性。
    - Object.keys(o)
    该方法返回一个对象 o 自身包含（不包括原型中）的所有属性的名称的数组。
    - Object.getOwnPropertyNames(o)
    该方法返回一个数组，它包含了对象 o 所有拥有的属性（无论是否可枚举）的名称。
- Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。Object.defineProperty(obj, prop, descriptor)
- Dog.prototype.species = '犬科' 等价于 Dog.prototype = {species:'犬科'}
- 定义自定义迭代器
    - 遍历一个序列对象时应该是一个接着一个。
    - 遍历一棵树时应该使用深度优先或者广度优先方式。
    - 遍历一个数据库查询结果对象时应该是一条一条地遍历，即使整个结果并没有被加载到一个数组中。
    - 一个迭代器在一个无限的数学序列(如斐波那契序列)应该能够一个一个地返回结果而不创建一个无限长度的数据结构。
- 两等号判等会在比较时进行类型转换；三等号判等不会进行类型转换（如果类型不同会直接返回 false ）； Object.is 在三等号判等的基础上特别处理了 NaN 、 -0 和 +0 ，保证 -0 和 +0 不再相同，但 Object.is(NaN, NaN) 会返回 true。[理解相等比较的模型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- 全等操作符比较两个值是否相等，两个被比较的值在比较前都不进行隐式转换。如果两个被比较的值具有不同的类型，这两个值是不全等的。否则，如果两个被比较的值类型相同，值也相同，并且都不是 number 类型时，两个值全等。最后，如果两个值都是 number 类型，当两个都不是 NaN，并且数值相同，或是两个值分别为 +0 和 -0 时，两个值被认为是全等的。
    第一个情况是，浮点数 0 是不分正负的。区分 +0 和 -0 在解决一些特定的数学问题时是必要的，但是大部分境况下我们并不用关心。全等操作符认为这两个值是全等的。第二个情况是，浮点数包含了 NaN 值，用来表示某些定义不明确的数学问题的解，例如：正无穷加负无穷。全等操作符认为 NaN 与其他任何值都不全等，包括它自己。（等式 (x !== x) 成立的唯一情况是 x 的值为 NaN）
- 相等操作符比较两个值是否相等，在比较前将两个被比较的值转换为相同类型。在转换后（等式的一边或两边都可能被转换），最终的比较方式等同于全等操作符 === 的比较方式。 相等操作符满足交换律。
- Object.is() 
    ```
        Object.is() determines whether two values are the same value. Two values are the same if one of the following holds:
            both undefined
            both null
            both true or both false
            both strings of the same length with the same characters
            both the same object
            both numbers and
            both +0
            both -0
            both NaN
            or both non-zero and both not NaN and both have the same value
    ```    
- 通过 Number.isSafeInteger() 方法还有 Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER 来检查值是否在双精度浮点数的取值范围内。 超出这个范围，JavaScript 中的数字不再安全.
- 闭包由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。
- 在没有必要的情况下，在其它函数中创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗。
- JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依此层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。
- JavaScript 并没有其他基于类的语言所定义的“方法”。在 JavaScript 里，任何函数都可以添加到对象上作为对象的属性。
- 当继承的函数被调用时，this 指向的是当前继承的对象，而不是继承的函数所在的原型对象.
- ECMAScript6 引入了一套新的关键字用来实现 class。JavaScript 仍然是基于原型的。这些新的关键字包括 class, constructor, static, extends, 和 super.
- 检测对象的属性是定义在自身上还是在原型链上，有必要使用 hasOwnProperty 方法，所有继承自 Object.proptotype 的对象都包含这个方法。
    hasOwnProperty 是 JavaScript 中唯一一个只涉及对象自身属性而不会遍历原型链的方法。
- 每一个消息执行完成后，其它消息才会被执行。当你分析你的程序时，这点提供了一些优秀的特性，包括当一个函数运行时，它不能被取代且会在其它代码运行前先完成（而且能够修改这个函数控制的数据）。
    这点与C语言不同。例如，C语言中当一个程序在一个线程中运行时，它可以在任何点停止且可以在其它线程中运行其它代码。这个模型的一个缺点在于当一个消息的完成耗时过长，网络应用无法处理用户的交互如点击或者滚动。
    浏览器用“程序需要过长时间运行”的对话框来缓解这个问题。一个比较好的解决方案是使消息处理变短且如果可能的话，将一个消息拆分成几个消息。
- 调用 setTimeout 函数会在一个时间段过去后在队列中添加一个消息。这个时间段作为函数的第二个参数被传入。如果队列中没有其它消息，消息会被马上处理。但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。
    因此第二个参数仅仅表示最少的时间 而非确切的时间。
- 多个运行时互相通信 一个 web worker 或者一个跨域的 iframe 都有它们自己的栈，堆和消息队列。两个不同的运行时只有通过 postMessage 方法进行通信。这个方法会给另一个运行时添加一个消息如果后者监听了 message 事件。
- 标记-清除算法 这个算法把“对象是否不再需要”简化定义为“对象是否可以获得”。
- JavaScript类型数组是一种类似数组的对象，并提供用于访问原始二进制数据的机制。[类型数组](https://itbilu.com/javascript/js/41kiT1PbW.html)

### HTML DOM
- 从html中获取的值，基本都是字符串类型，数字也不例外
- 获取的颜色值，不同浏览器返回的值可能是不同的（关键字‘red’，rgb(),或#111），所以最好不要用来作判断
- 空格也是文本节点，受空格影响，我们最好不要用innerHTML来作判断
-  removeChild()只是移除htmldom树，但是，在内存中依然存在. appendChild()如果是原有的元素则执行的是<font color='red'>剪切</font>的操作
- children 、nextElementSubling 、parentNode、、获取元素都是只读的，不可写
- 通过TagName、ClassName获取的元素是一个类数组的结构，但不是数组，数组的一些属性和方法对它不适用
- 通过setAttribute设置的表单value，会影响原型property的value，所以对于表单的value最好使用DOM的property来读写

