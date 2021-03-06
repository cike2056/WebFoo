[js函数](http://www.runoob.com/js/js-function-definition.html)

#### JavaScript 函数定义 [定义JS函数与函数声明、Function构造函数、函数表达式的比较](http://itbilu.com/javascript/js/4yOSqHzrb.html)
    JavaScript 使用关键字 function 定义函数。
1.    函数可以通过声明定义，也可以是一个表达式。
```
    // 方法一：函数声明
    function foo() {}

    // 方法二：函数表达式(匿名函数)
    var foo = function () {};
```

2. Function() 构造函数
```
    function callAnotherFunc(fnFunction, vArgument) {     
        fnFunction(vArgument);     
    }     
    var doAdd = new Function("iNum", "alert(iNum + 10)");     
    callAnotherFunc(doAdd, 10); //输出 "20"  
```

3. <font color='red'>函数提升（Hoisting）</font><br>
    只有函数声明会被提升到顶部，而不包括函数表达式。
```
    /* 函数声明 */
    foo(); // "bar"

    function foo() {
    console.log("bar");
    }


    /* 函数表达式   表达式定义的函数，称为匿名函数。匿名函数没有函数提升。*/

    baz(); // TypeError: baz is not a function
    //此时的"baz"相当于一个声明的变量，类型为undefined。
    由于baz只是相当于一个变量，因此浏览器认为"baz()"不是一个函数。
    var baz = function() {
    console.log("bar2");
    };
```

4. 自调用函数  
    自调用表达式会自动调用。
    如果表达式后面紧跟 () ，则会自动调用。
```
    (function func(){
        alert("自调用函数");
    })()
```

5. 函数可作为一个值使用  

6. 函数是对象  
    在 JavaScript 中使用 typeof 操作符判断函数类型将返回 "function" 。
    但是JavaScript 函数描述为一个<font color='red'>对象</font>更加准确。
    JavaScript 函数有 属性 和 方法。
    arguments.length 属性返回函数调用过程接收到的参数个数
    函数定义作为对象的属性，称之为对象方法。
    函数如果用于创建新的对象，称之为对象的构造函数。

#### JavaScript 函数参数  
    JavaScript 函数对参数的值没有进行任何的检查。
1. 函数显式参数(Parameters)与隐式参数(Arguments)  
    函数显式参数在函数定义时列出。
    函数隐式参数在函数调用时传递给函数真正的值。
2. 参数规则  
```
    JavaScript 函数定义时显示参数没有指定数据类型。
    JavaScript 函数对隐式参数没有进行类型检测。
    JavaScript 函数对隐式参数的个数没有进行检测。
```

3. 默认参数  
    如果函数在调用时未提供隐式参数，参数会默认设置为： undefined
    有时这是可以接受的，但是建议最好为参数设置一个默认值
```
    function myFunction(x, y) {
    if (y === undefined) {
            y = 0;
        } 
    }
    或者，更简单的方式：
    function myFunction(x, y) {
        y = y || 0;
    }
```

4. Arguments 对象  
    JavaScript 函数有个内置的对象 arguments 对象。
    argument 对象包含了函数调用的参数数组。

5. <font color='red'>通过值传递参数</font>  
    在函数中调用的参数是函数的隐式参数。
    JavaScript 隐式参数通过值来传递：函数仅仅只是获取值。
    如果函数修改参数的值，不会修改显式参数的初始值（在函数外定义）。
    隐式参数的改变在函数外是不可见的。

6. <font color='red'>通过对象传递参数</font>  
    在JavaScript中，可以引用对象的值。
    因此我们在函数内部修改对象的属性就会修改其初始的值。
    修改对象属性可作用于函数外部（全局变量）。
    修改对象属性在函数外是可见的。

#### JavaScript 函数调用(略)

#### JavaScript 闭包 [参考](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)
    JavaScript 变量可以是局部变量或全局变量。
    私有变量可以用到闭包。
    它的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。 
1. JavaScript 内嵌函数
```
    function add() {
        var counter = 0;
        function plus() {counter += 1;}
        plus();    
        return counter; 
    }
```

2. JavaScript <font color='red'>闭包</font>
```
    <script>
        var add = (function () {
            var counter = 0;
            return function () { 
                return counter += 1;
                 }
        })();
        function myFunction() {
            document.getElementById("demo").innerHTML = add();
        }
    </script>
```
    等价于：
```
        function a () {
                var counter = 0;
                function b (){
                    counter += 1
                    return counter
                }
                return b
            }
        var add = a()
        function myFunction() {
            document.getElementById("demo").innerHTML = add();
        }
```
3. 使用闭包的注意点
 - 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
 - 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值


