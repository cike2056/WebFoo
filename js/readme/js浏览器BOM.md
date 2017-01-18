[js浏览器BOM](http://www.runoob.com/js/js-window.html)

#### JavaScript Window - 浏览器对象模型
    浏览器对象模型 (BOM) 使 JavaScript 有能力与浏览器"对话"。

1. Window 对象
    - 所有浏览器都支持 window 对象。它表示浏览器窗口。  
    <font color ='red'>所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。</font>
    - Window 尺寸
        ```
            实用的 JavaScript 方案（涵盖所有浏览器）：
            var w=window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

            var h=window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        ```
    - 其他 Window 方法
        ```
            window.open() - 打开新窗口
            window.close() - 关闭当前窗口
            window.moveTo() - 移动当前窗口
            window.resizeTo() - 调整当前窗口的尺寸
        ```
2. Window Screen
    window.screen 对象包含有关用户屏幕的信息。
```
    screen.availWidth - 可用的屏幕宽度
    screen.availHeight - 可用的屏幕高度
```    

3. Window Location
    window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。
```
    location.hostname 返回 web 主机的域名
    location.pathname 返回当前页面的路径和文件名
    location.port 返回 web 主机的端口 （80 或 443）
    location.protocol 返回所使用的 web 协议（http:// 或 https://）
    location.assign() 方法加载新的文档
```

4. Window History
    window.history 对象包含浏览器的历史。
```
    history.back() - 与在浏览器点击后退按钮相同
    history.forward() - 与在浏览器中点击按钮向前相同
```   

5. Window Navigator
    window.navigator 对象包含有关访问者浏览器的信息。来自 navigator 对象的信息具有误导性.
```
    <script> 
        txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>"; 
        txt+= "<p>浏览器名称: " + navigator.appName + "</p>"; 
        txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>"; 
        txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>"; 
        txt+= "<p>硬件平台: " + navigator.platform + "</p>"; 
        txt+= "<p>用户代理: " + navigator.userAgent + "</p>"; 
        txt+= "<p>用户代理语言: " + navigator.systemLanguage + "</p>"; 
        document.getElementById("example").innerHTML=txt; 
    </script> 
```

6. JavaScript 弹窗
    可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。
    - 警告框 alert()
    - 确认框
    ```
        var r=confirm("按下按钮");
        if (r==true){
            x="你按下了\"确定\"按钮!";
        }
        else{
            x="你按下了\"取消\"按钮!";
        }
    ```
    - 提示框
    ```
        <script>
        function myFunction(){
            var x;
            var person=prompt("请输入你的名字","Harry Potter");
            if (person!=null && person!=""){
                x="你好 " + person + "! 今天感觉如何?";
                document.getElementById("demo").innerHTML=x;
            }
        }
</script>
    ```

7. JavaScript 计时事件
    通过使用 JavaScript，我们有能力作到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件。
```
    window.setInterval("javascript function",milliseconds);
     - 间隔指定的毫秒数不停地执行指定的代码。
    clearInterval() 
     -停止 setInterval() 方法执行的函数代码。
    window.setTimeout("javascript 函数",毫秒数);
    - 等待指定的毫秒数后执行指定的代码
    clearTimeout() 
    -停止执行setTimeout()方法的函数代码。
```

```
    <script>
        var myVar=setInterval(function(){myTimer()},1000);
        function myTimer(){
            var d=new Date();
            var t=d.toLocaleTimeString();
            document.getElementById("demo").innerHTML=t;
        }
        function myStopFunction(){
            clearInterval(myVar);
        }
    </script>
```

```
    <script>
    var myVar;
    function myFunction(){
        myVar=setTimeout(function(){alert("Hello")},3000);
    }
    function myStopFunction(){
        clearTimeout(myVar);
    }
    </script>
```

8. JavaScript Cookie
    Cookie 用于存储 web 页面的用户信息。
    document.cookie = "userName=zhangsan; age=12" 
    分号和空格隔开cookie=value
1. 使用 JavaScript 创建Cookie
```
    JavaScript 可以使用 document.cookie 属性来创建 、读取、及删除 cookie。
    JavaScript 中，创建 cookie 如下所示：
    document.cookie="username=John Doe";
    您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：
    document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT";
    您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。
    document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";
```

2. 使用 JavaScript 读取 Cookie  
    var x = document.cookie;
3. 使用 JavaScript 修改 Cookie  
    document.cookie="username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";
4. 使用 JavaScript 删除 Cookie  
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
5. Cookie 字符串
    document.cookie 属性看起来像一个普通的文本字符串，其实它不是。即使您在 document.cookie 中写入一个完整的 cookie 字符串, 当您重新读取该 cookie 信息时，cookie 信息是以名/值对的形式展示的。
    如果您设置了新的 cookie，旧的 cookie 不会被覆盖。
6. Cookie 实例
```
    <script>
    function setCookie(cname,cvalue,exdays){
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname+"="+cvalue+"; "+expires;
    }
    function getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) return c.substring(name.length,c.length);
        }
        return "";
    }
    function checkCookie(){
        var user=getCookie("username");
        if (user!=""){
            alert("Welcome again " + user);
        }
        else {
            user = prompt("Please enter your name:","");
            if (user!="" && user!=null){
                setCookie("username",user,30);
            }
        }
    }
    </script>
```    

