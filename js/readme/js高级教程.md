[js高级教程](http://www.runoob.com/js/js-objects.html)

[js高级教程](http://www.runoob.com/js/js-htmldom-elements.html)

#### JavaScript 对象
    JavaScript 中的所有事物都是对象,JavaScript 允许自定义对象。
1. 访问对象的属性
```
    访问对象属性的语法是：
    objectName.propertyName
```

2. 访问对象的方法
```
    您可以通过以下语法来调用方法：
    objectName.methodName()
```

3. 创建 JavaScript 对象
    - 定义并创建对象的实例
        ```
            person=new Object();
            person.firstname="John";
            person.lastname="Doe";
            person.age=50;
            person.eyecolor="blue";
        ```

        ```
            替代语法（使用对象 literals）：
            person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};
        ```
    - 使用函数来定义对象，然后创建新的对象实例
        ```
            function person(firstname,lastname,age,eyecolor)
            {
                this.firstname=firstname;
                this.lastname=lastname;
                this.age=age;
                this.eyecolor=eyecolor;
            }
        ```
4. 把属性添加到 JavaScript 对象
    通过为对象赋值，向<font color='red'>已有对象添加新属性</font>

5. 把方法添加到 JavaScript 对象
    ```
        function person(firstname,lastname,age,eyecolor)
        {
            this.firstname=firstname;
            this.lastname=lastname;
            this.age=age;
            this.eyecolor=eyecolor;

            this.changeName=changeName;
            function changeName(name)
            {
                this.lastname=name;
            }
        }
    ```

6. JavaScript 不创建类,也不会通过类来创建对象  
    JavaScript 基于 prototype，而不是基于类的。

7. JavaScript for...in 语句循环遍历对象的属性

#### JavaScript Number 对象(略) [Number对象](http://www.runoob.com/js/js-obj-number.html)

#### JavaScript 字符串（String） 对象

#### JavaScript Date（日期） 对象

#### JavaScript Array（数组） 对象

#### JavaScript Boolean（布尔） 对象

#### JavaScript RegExp 对象 [RegExp 对象](http://www.runoob.com/jsref/jsref-obj-regexp.html)



