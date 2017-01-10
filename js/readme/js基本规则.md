[js基本规则](http://www.runoob.com/js/js-statements.html)

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
JavaScript 对大小写是敏感的。
当编写 JavaScript 语句时，请留意是否关闭大小写切换键。

6. 空格
JavaScript 会忽略多余的空格。您可以向脚本添加空格，来提高其可读性。

7. 对代码行进行折行
您可以在文本字符串中使用反斜杠对代码行进行换行。

#### JavaScript 注释
JavaScript 注释可用于提高代码的可读性。

1. 单行注释以 // 开头。或者<!-- -->
2. JavaScript 多行注释 多行注释以 /* 开始，以 */ 结尾。
3. 使用注释来阻止执行
4. 在行末使用注释

#### JavaScript 变量
JavaScript 语句和 JavaScript 变量都对大小写敏感。

1. 变量必须以字母开头. 变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）. 变量名称对大小写敏感（y 和 Y 是不同的变量）
2. JavaScript 数据类型
3. 声明（创建） JavaScript 变量
4. 一条语句，多个变量
    您可以在一条语句中声明很多变量。该语句以 var 开头，并使用逗号分隔变量即可：
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

#### JavaScript 数据类型
字符串（String）、数字(Number)、布尔(Boolean)、数组(Array)、对象(Object)、空（Null）、未定义（Undefined）。

1. JavaScript 拥有动态类型
    JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型
2. JavaScript 字符串
    字符串可以是引号中的任意文本。您可以使用单引号或双引号
    您可以在字符串中使用引号，只要不匹配包围字符串的引号即可
    可以使用转义字符'\'
    var answer="It's alright";
    var answer="He is called 'Johnny'";
    var answer='He is called "Johnny"';
3. JavaScript 数字
    JavaScript 只有一种数字类型。数字可以带小数点，也可以不带
    极大或极小的数字可以通过科学（指数）计数法来书写
    var y=123e5;      // 12300000
    var z=123e-5;     // 0.00123
4. JavaScript 布尔
    布尔（逻辑）只能有两个值：true 或 false
5. JavaScript 数组
    下面的代码创建名为 cars 的数组：
    一种：
    var cars=new Array();
    cars[0]="Saab";
    cars[1]="Volvo";
    cars[2]="BMW";
    二种：
    var cars=new Array("Saab","Volvo","BMW");
    三种：
    var cars=["Saab","Volvo","BMW"];
6. JavaScript 对象
    对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：
    var person = {
        firstName:"Jhon",
        lastName:"Doe",
        id:5566};
    对象属性有两种寻址方式：
    name=person.lastName;
    name=person["lastName"];
7. Undefined 和 Null
    Undefined 这个值表示变量不含有值。
    可以通过将变量的值设置为 null 来清空变量。
8. 声明变量类型
    var carname=new String;
    var x=      new Number;
    var y=      new Boolean;
    var cars=   new Array;
    var person= new Object;

#### JavaScript 对象
    
