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

