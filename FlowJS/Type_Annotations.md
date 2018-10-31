## Type Annotations (类型注释)

Flow有十分牛批的能力可以在你的项目里声明类型，以下是你为你的代码增加类型注释的方式

这里有一个例子，concat函数将两个字符串拼接并返回

```javascript
function concat(a, b) {
  return a + b
}
```

当你调用这个函数时，Flow完全知道会发生什么

```javascript
concat('A', 'B') // Works!
```

但是，你也可以使用+操作符在字符串或者数字类型上，所以这样也是阔以的

```javascript
concat(1, 2) // Works!
```

但是假设你只希望字符串类型参数被传进来，你可以增加类型

```javascript
function concat(a: string, b: string) {
  return a + b
}
```
现在你传入数字类型时Flow会给你个警告
```javascript
// @flow
function concat(a: string, b: string) {
  return a + b;
}

concat("A", "B"); // Works!
concat(1, 2); // Error!
```

`接下来的教程里会告诉你你可以在Flow中使用的所有不同类型`