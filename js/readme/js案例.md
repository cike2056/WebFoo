```
var charsInBody = (function counter(elm) {
        if (elm.nodeType == 3) { // 文本节点
            return elm.nodeValue.length;
        }
        var count = 0;
        for (var i = 0, child; child = elm.childNodes[i]; i++) {
            count += counter(child);
        }
        return count;
    })(document.body);
    alert(charsInBody)
```

```
    var person = {
     first: first,
            last: last,
            fullName: function() {
                return this.first + ' ' + this.last;
            },
            fullNameReversed: function() {
                return this.last + ', ' + this.first;
            }
        }       
    关键字 this。当使用在函数中时，this 指代当前的对象，也就是调用了函数的对象。如果在一个对象上使用点或者方括号来访问属性或方法，这个对象就成了 this。
    如果并没有使用“点”运算符调用某个对象，那么 this 将指向全局对象（global object）。这是一个经常出错的地方。
    var fullName = person.fullName
    fullName() //undefined undefined
```

```
    function Person(first, last) {
        this.first = first;
        this.last = last;
    }
    Person.prototype.fullName = function() {
        return this.first + ' ' + this.last;
    }
    Person.prototype.fullNameReversed = function() {
        return this.last + ', ' + this.first;
    }
```

```
    var s = "Simon";
    String.prototype.reversed = function() {
        var r = "";
        for (var i = this.length - 1; i >= 0; i--) {
            r += this[i];
        }
        return r;
    }
    s.reversed(); // nomiS
```

```
    function inside (a){
         return function(b){return a+b}
    }
    var c = inside(5)(3)
```

```
    // 两个参数:
    (x, y) => x * x + y * y

    // 无参数:
    () => 3.14

    // 可变参数:
    (x, y, ...rest) => {
        var i, sum = x + y;
        for (i=0; i<rest.length; i++) {
            sum += rest[i];
        }
        return sum;
    }

    var fn = ()=>new Date().getFullYear() - this.birth
```

```
    //类方法，对象方法，原型方法
    <script>
        //对象构造函数  
        function Atest(name){  
        //私有属性，只能在对象构造函数内部使用  
        var className = "Atest";  
        //公有属性,在对象实例化后调用  
        this.name = name;  
        //对象方法  
        this.hello = function(){  
            alert(this.name);  
            alert(this.msg());//使用原型方法扩充的方法可以在类内部使用  
            alert(this.sex);//使用原型方法扩充的属性可以在类内部使用  
            alert(Atest.age);//静态属性调用时格式为[对象.静态属性]  
        }  
        }  
        //类方法 (实际是静态方法直接调用) 位置：Person类的外部 语法格式：类名称.方法名称 = function([参数...]){ 语句行; }  
        Atest.Run = function(){  
        alert("我是类方法 Run");  
        }  

        //原型方法  
        Atest.prototype.msg = function(){  
        alert("我的名字是："+this.name);//如果原型方法当作静态方法直接调用时，this.name无法被调用  
        }  

        //公有静态属性 在类的外部  
        Atest.age = 20;//公有静态属性不能使用 【this.属性】，只能使用 【对象.属性】 调用  

        //原型属性，当作是类内部的属性使用【this.原型属性】，也可以当成公有静态属性使用【对象.prototype.原型属性】  
        Atest.prototype.sex = "男";  

        Atest.Run(); //类方法也是静态方法，可以直接使用 【对象.静态方法()】  
        Atest.prototype.msg();//原型方法当成静态方法使用时【对象.prototype.方法()】   
        alert(Atest.prototype.sex);//原型属性当作静态属性使用时【对象.prototype.方法()】  
        var a = new Atest("zhangsan");//对象方法和原型方法需要实例化对象后才可以使用  
        a.hello();//对象方法必须实例化对象  
        a.msg();//原型方法必须实例化对象  
        alert(a.age)://错误，公有静态属性只能使用 【对象.属性】调用  

        //ps:尽量将方法定义为原型方法，原型方法避免了每次调用构造函数时对属性或方法的构造，节省空间,创建对象快.  
  </script>    
```

```
    console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
    value as
    console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
```

```
    var arr = [42];      // 创建一个只有唯一元素的数组:
                     // the number 42.
    var arr = Array(42); // 创建一个没有元素的数组, 
                        // 但是数组的长度被设置成42.
```

```
    //这样避免了检测数组长度的开销，额外的好处是确保了div变量当前在每次循环中都被重新赋值为当前项。
    var divs = document.getElementsByTagName('div');
    for (var i = 0, div; div = divs[i]; i++) {
    /* Process div in some way */
    }
```

```
    var colors = ['red', 'green', 'blue'];
     colors.forEach(function(color) {
          alert(color);
        });   
```

```
    //concat() 连接两个数组并返回一个新的数组。
    var myArray = new Array("1", "2", "3");
    myArray = myArray.concat("a", "b", "c"); 
```

```
    var a1 = ['a', 'b', 'c'];
    var a2 = a1.map(function(item) { return item.toUpperCase(); });
    console.log(a2); // logs A,B,C
```

```
    function isNumber(value){
        return typeof value == 'number';
    }
    var a1 = [1, 2, 3];
    console.log(a1.every(isNumber)); // logs true
    var a2 = [1, '2', 3];
    console.log(a2.every(isNumber)); // logs false
```

```
    var maps = new Map()
    maps.set('dog','woof')
    maps.set('cat','meow')
    for(var [key,value] of maps){
          alert(key + ' of ' + value)
    }            
```

```
    var myObj = {
    myMethod: function(params) {
        // ...do something
    }
    
    // 或者 这样写也可以
    
    myOtherMethod(params) {
        // ...do something else
    }
    };
```

```
    var d = Date.prototype
    Object.defineProperty(d,'year',{
          get:function(){
            return this.getFullYear()
          },
          set:function(y){
            this.setFullYear(y)
          }
        })    
```

```
    var d = Date.prototype
        Object.defineProperties(d,{
          'year':{
            get :function(){
              return this.getFullYear()
            },
            set :function(y){
              this.setFullYear(y)
            }
          },
          'mills':{
            get:function(){
              return this.getTime()
            },
            set:function(t){
              this.setTime(t)
            }
          }
        })
```

```
    //指定父类
    function Manager () {
        this.reports = [];
    }
    Manager.prototype = new Employee;

    function WorkerBee () {
        this.projects = [];
    }
    WorkerBee.prototype = new Employee;
```

```
    function Employee (name){
        this.name = name||''
        this.dept = 'general'
    }    
    function Manager(reports){
        this.base = Employee
        // this.base(name) //修改属性
        this.reports = reports||[]
    }         
    Manager.prototype = new Employee("jjjjj")
    alert(new Manager([1,3]).name)    
```

```
    //用闭包模拟私有方法
    var Counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
        changeBy(1);
        },
        decrement: function() {
        changeBy(-1);
        },
        value: function() {
        return privateCounter;
        }
    }   
    })();
```

```
    "use strict";

    class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    }

    class Square extends Polygon {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    get area() {
        return this.height * this.width;
    }
    set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
    }
    }

    var square = new Square(2);
```

```
    var o = new Foo();
    JavaScript 实际上执行的是：
    var o = new Object();
    o.[[Prototype]] = Foo.prototype;
    Foo.call(o);
```

