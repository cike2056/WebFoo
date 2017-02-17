

[js语句+注释+变量+数据类型+对象+函数+作用域](http://www.runoob.com/js/js-statements.html)

#### JavaScript 语句
    JavaScript 语句是发给浏览器的命令。

1. 分号 
分号用于分隔 JavaScript 语句。
通常我们在每条可执行的语句结尾添加分号。
使用分号的另一用处是在一行中编写多条语句。

2. JavaScript 代码
JavaScript 代码是 JavaScript 语句的序列。
浏览器按照编写顺序依次执行每条语句。

3. JavaScript 代码块
JavaScript 可以分批地组合起来。
代码块以左花括号开始，以右花括号结束。
代码块的作用是一并地执行语句序列。

4. JavaScript 语句标识符
JavaScript 语句通常以一个 语句标识符 为开始，并执行该语句。
语句标识符是保留关键字不能作为变量名使用。

5. JavaScript 对大小写敏感。
JavaScript 对<font color="red">大小写</font>是敏感的。
当编写 JavaScript 语句时，请留意是否关闭大小写切换键。

6. 空格
JavaScript 会忽略多余的空格。您可以向脚本添加空格，来提高其可读性。

7. 对代码行进行折行
您可以在文本字符串中使用<font color="red">反斜杠</font>对代码行进行换行。

#### JavaScript 注释
    JavaScript 注释可用于提高代码的可读性。

1. <font color="red">单行注释</font>以 // 开头。或者<!-- -->
2. JavaScript <font color="red">多行注释</font> 多行注释以 /* 开始，以 */ 结尾。
3. 使用注释来阻止执行
4. 在行末使用注释

#### JavaScript 变量
    JavaScript 语句和 JavaScript 变量都对大小写敏感。

1. 变量必须<font color='red'>以字母开头. 变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）. 变量名称对大小写敏感（y 和 Y 是不同的变量）</font>
2. JavaScript 数据类型
3. 声明（创建） JavaScript 变量
4. 一条语句，多个变量
    您可以<font color='red'>在一条语句中声明很多变量。该语句以 var 开头，并使用逗号分隔变量即可</font>：
    var lastname="Doe", age=30, job="carpenter";
    声明也可横跨多行：
    var lastname="Doe",
    age=30,
    job="carpenter";
5. Value = undefined
    未使用值来声明的变量，其值实际上是 undefined。
6. 重新声明 JavaScript 变量
    <font color="red">如果重新声明 JavaScript 变量，该变量的值不会丢失.</font>
7. JavaScript 算数

#### JavaScript 数据类型 [參考](http://www.cnblogs.com/dailc/p/5971244.html)

<font color='red'>字符串（String）、数字(Number)、布尔(Boolean)、数组(Array)、对象(Object)、空（Null）、未定义（Undefined）。</font>

1. JavaScript 拥有动态类型
    <font color='red'>JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型</font>
2. JavaScript 字符串
    <font color='red'>字符串可以是引号中的任意文本。您可以使用单引号或双引号</font>
    您可以在字符串中使用引号，只要不匹配包围字符串的引号即可
    可以使用转义字符'\'
    可以使用length来计算字符串的长度
    字符串可以是对象,可以使用 new 关键字将字符串定义为一个对象： var firstName = new String("John"),不建议使用
    var answer="It's alright";
    var answer="He is called 'Johnny'";
    var answer='He is called "Johnny"';
3. JavaScript 数字
    JavaScript 只有一种数字类型。数字可以带小数点，也可以不带
    <font color='red'>极大或极小的数字可以通过科学（指数）计数法来书写</font>
    var y=123e5;      // 12300000
    var z=123e-5;     // 0.00123
4. JavaScript 布尔
    布尔（逻辑）只能有两个值：true 或 false
5. JavaScript 数组
- 下面的代码创建名为 cars 的数组：
    ```
    一种：
    var cars=new Array();
    cars[0]="Saab";
    cars[1]="Volvo";
    cars[2]="BMW";
    二种：
    var cars=new Array("Saab","Volvo","BMW");
    三种：
    var cars=["Saab","Volvo","BMW"];
    ```

- 数组的方法：
    ```
    concat() 连接两个数组并返回一个新的数组。
    join(deliminator = ',') 将数组的所有元素连接成一个字符串。
    push() 在数组末尾添加一个或多个元素，并返回数组操作后的长度。
    pop() 从数组移出最后一个元素，并返回该元素。
    shift() 从数组移出第一个元素，并返回该元素。
    unshift() 在数组开头添加一个或多个元素，并返回数组的新长度。
    slice(start_index, upto_index) 从数组提取一个片段，并作为一个新数组返回。
    splice(index, count_to_remove, addElement1, addElement2, ...)从数组移出一些元素，（可选）并替换它们。 
    reverse() 颠倒数组元素的顺序：第一个变成最后一个，最后一个变成第一个。
    sort() 给数组元素排序。
    indexOf(searchElement[, fromIndex]) 在数组中搜索searchElement 并返回第一个匹配的索引。
    lastIndexOf(searchElement[, fromIndex]) 和 indexOf差不多，但是是从结尾开始，并且是反向搜索。
    forEach(callback[, thisObject]) 在数组每个元素项上执行callback。
    forEach(callback[, thisObject]) 在数组每个元素项上执行callback。
    map(callback[, thisObject]) 在数组的每个单元项上执行callback函数，并把返回包含回调函数返回值的新数组。》译者注：也就是遍历数组，并通过callback对数组元素进行操作，并将所有操作结果放入数组中并返回该数组。
    filter(callback[, thisObject]) 返回一个包含所有在回调函数上返回为true的元素的新数组。》译者注：callback在这里担任的是过滤器的角色，当元素符合条件，过滤器就返回true，而filter则会返回所有符合过滤条件的元素。
    every(callback[, thisObject]) 当数组中每一个元素在callback上被返回true时就返回true。》译者注：同上，every其实类似filter，只不过它的功能是判断是不是数组中的所有元素都符合条件，并且返回的是bool值。
    some(callback[, thisObject]) 只要数组中有一项在callback上被返回true，就返回true。》译者注：同上，类似every，不过前者要求都符合筛选条件才返回true，后者只要有符合条件的就返回true。
    reduce(callback[, initialValue]) 使用回调函数 callback(firstValue, secondValue) 把数组列表计算成一个单一值（译者注：他数组元素两两递归处理的方式把数组计算成一个值）
    reduceRight(callback[, initalvalue]) 和 reduce()相似，但是是从最后一个元素开始的。
    ```

- 数组推导式
    ```
    var numbers = [1, 2, 3, 4];
    var doubled = [i * 2 for (i of numbers)];
    console.log(doubled); // logs 2,4,6,8
    //等价于
    var doubled = numbers.map(function(i){return i * 2;});
    ```
    ```
    var numbers = [1, 2, 3, 21, 22, 30];
    var evens = [i for (i of numbers) if (i % 2 === 0)];
    console.log(evens); // logs 2,22,30
    //等价于
    var evens = numbers.filter(function(i){return i % 2 === 0;});
    ```
    ```
    //map() 和filter() 类型的操作可以被组合（等效）为单个数组推导式。这里就有一个过滤出偶数，创建一个它的倍数数组的例子：
    var numbers = [1, 2, 3, 21, 22, 30];
    var doubledEvens = [i * 2 for (i of numbers) if (i % 2 === 0)];
    console.log(doubledEvens); // logs 4,44,60
    ```

6. JavaScript 对象
    对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：
    ```
    var person = {
        firstName:"Jhon",
        lastName:"Doe",
        id:5566};
    对象属性有两种寻址方式：
    name=person.lastName;
    name=person["lastName"];
    ```
7. Undefined 和 Null
    Undefined 这个值表示变量不含有值。
    <font color='red'>可以通过将变量的值设置为 null 来清空变量。</font>
8. 声明变量类型
    ```
    var carname=new String;
    var x=      new Number;
    var y=      new Boolean;
    var cars=   new Array;
    var person= new Object;
    ```

#### JavaScript 对象
    在 JavaScript中，几乎所有的事物都是对象

1. 对象属性
    键值对通常写法为 name : value (键与值以冒号分割)。
    我们通常认为 "JavaScript 对象是键值对的容器"。
    person.name;
    person['name'];

2. 对象方法
    对象的方法定义了一个函数，并<font color="red">作为对象的属性存储</font>。
    对象方法通过添加 () 调用 (作为一个函数)。
    ```
    var person = {
        firstName: "John",
        lastName : "Doe",
        id : 5566,
        fullName : function() 
        {
            return this.firstName + " " + this.lastName;
        }
    };
    ```
3. 访问对象方法
    <font color="red">通常 fullName() 是作为 person 对象的一个方法， fullName 是作为一个属性。</font>
    有多种方式可以创建，使用和修改 JavaScript 对象。
    同样也有多种方式用来创建，使用和修改属性和方法。

#### JavaScript 函数
    函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。
    JavaScript 对大小写敏感。关键词 function 必须是小写的，并且必须以与函数名称相同的大小写来调用函数。
    创建一个函数的方法有两种，一种是通过函数声明function foo(){}
    另一种是通过定义一个变量var foo = function(){}

1. 调用带参数的函数
    在调用函数时，您可以向其传递值，这些值被称为参数。这些参数可以在函数中使用。您可以发送任意多的参数，由逗号 (,) 分隔.
2. 带有返回值的函数
    通过使用 return 语句就可以实现。
3. 局部 JavaScript 变量
    在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。
    您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。
    只要函数运行完毕，本地变量就会被删除。
4. 全局 JavaScript 变量
    在函数外声明的变量是全局变量，网页上的所有脚本和函数都能访问它。
5. JavaScript 变量的生存期
    <font color='red'>
    JavaScript 变量的生命期从它们被声明的时间开始。
    局部变量会在函数运行以后被删除。
    全局变量会在页面关闭后被删除。
    </font>
6. <font color="red">向未声明的 JavaScript 变量分配值</font>
    如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明。
    carname="Volvo";
    将声明一个全局变量 carname，即使它在函数内执行。

#### JavaScript 作用域

- 在 JavaScript 中, 作用域为可访问变量，对象，函数的集合。
- C,C++,C#和Java都是块级作用域语言,JavaScript是一种函数级作用域.
- var 函数级作用域,let 块级作用域

1. JavaScript 局部作用域
    变量在函数内声明，变量为局部作用域。
    局部变量：只能在函数内部访问。
2. JavaScript 全局变量
    变量在函数外定义，即为全局变量。
    全局变量有 全局作用域: 网页中所有脚本和函数均可使用。 
    <font color='red'>如果变量在函数内没有声明（没有使用 var 关键字），该变量为全局变量（前提是此方法被调用）。</font>
    实例中 carName 在函数内，但是为全局变量。

3. JavaScript 变量生命周期
    JavaScript 变量生命周期在它声明时初始化。
    局部变量在函数执行完毕后销毁。
    全局变量在页面关闭后销毁。

4. 函数参数只在函数内起作用，是局部变量。

