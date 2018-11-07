## Primitive Types (基本类型)

JavaScript有以下几种基本类型：

* Boolean
* String
* Number
* null
* undefined (在Flow中为void)
* Symbol

基本类型可以当做字面量来使用

```javascript
true
"hello"
3.14
null
undefined
```
或者以构造函数调用的方式使用

```javascript
new Boolean(false)
new String("world")
new Number(42)
Symbol("foo")
```

在Flow中在字面量上使用时都是小写方式声明

```javascript
// @flow
function method(x: number, y: string, z: boolean) {
  // ...
}

method(3.14, "hello", true);
```

在以构造函数调用得到的对象上使用时第一个字母要大写(和构造函数名一样)
```javascript
// @flow
function method(x: Number, y: String, z: Boolean) {
  // ...
}

method(new Number(42), new String("world"), new Boolean(false));
```

`这种以构造函数方式得到的对象几乎很少用`

### Boolean

布尔值在js中非真既假，在Flow中只接受这些值

```javascript
// @flow
function acceptsBoolean(value: boolean) {
  // ...
}

acceptsBoolean(true);  // Works!
acceptsBoolean(false); // Works!
acceptsBoolean("foo"); // Error!
```

在js中会隐式转换其他类型的值为布尔值

```javascript
if (42) {} // 42 => true
if ("") {} // "" => false
```

boolean类型需要你来手工转换非boolean类型的值，常用方法有 ```Boolean(x)``` 与 ```!!x```

⚠️ ```boolean```与```Boolean```可是不同的哟

### Number

和其他语言不同，js对于数字只有一种类型：number，有可能是42, 3.14, 甚至 Infinity和NaN也被认为是number类型，number类型会捕获所有js认为是number类型的值

```javascript
// @flow
function acceptsNumber(value: number) {
  // ...
}

acceptsNumber(42);       // Works!
acceptsNumber(3.14);     // Works!
acceptsNumber(NaN);      // Works!
acceptsNumber(Infinity); // Works!
acceptsNumber("foo");    // Error!

```

### String

String类型，就是字符串类型啦

```javascript
// @flow
function acceptsString(value: string) {
  // ...
}

acceptsString("foo"); // Works!
acceptsString(false); // Error!
```

js会在某些表达式中隐式转换非字符串类型值为string类型，比如：

```javascript
"foo" + 42; // "foo42"
"foo" + {}; // "foo[object Object]"
```

在Flow中，字符串连接时只允许string类型与number类型参与其中

```javascript
// @flow
"foo" + "foo"; // Works!
"foo" + 42;    // Works!
"foo" + {};    // Error!
"foo" + [];    // Error!

```

你需要自己动手将非字符串类型转换一下，可以使用String()或者其他转化方式

```javascript
// @flow
"foo" + String({});     // Works!
"foo" + [].toString();  // Works!
"" + JSON.stringify({}) // Works!
```

### null and void

在Flow中，null与undefined被定义为null与void(undefined)

`void void void，重要的声明说三遍`

```javascript
// @flow
function acceptsNull(value: null) {
  /* ... */
}

function acceptsUndefined(value: void) {
  /* ... */
}

acceptsNull(null);      // Works!
acceptsNull(undefined); // Error!
acceptsUndefined(null);      // Error!
acceptsUndefined(undefined); // Works!

```

### Maybe type

作者：我给他起名叫待定类型 -v-*

你可以在基本类型前加一个问号来声明待定类型

待定类型除了当前基本类型是允许的之外，也允许为null或者void
```javascript
// @flow
function acceptsMaybeString(value: ?string) {
  // ...
}

acceptsMaybeString("bar");     // Works!
acceptsMaybeString(undefined); // Works!
acceptsMaybeString(null);      // Works!
acceptsMaybeString();          // Works!
```

### Optional object properties

作者：我给他起名叫可选对象类型

对象类型可以在成员名称后加问号来声明可选对象类型

可选对象类型值可以为void，但是不能为null

```javascript
// @flow
function acceptsObject(value: { foo?: string }) {
  // ...
}

acceptsObject({ foo: "bar" });     // Works!
acceptsObject({ foo: undefined }); // Works!
acceptsObject({ foo: null });      // Error!
acceptsObject({});                 // Works!
```

### Optional function parameters

作：可选函数参数

同样，函数在调用时，可选函数参数可以为当前类型与void，但是不能为null

```javascript
// @flow
function acceptsOptionalString(value?: string) {
  // ...
}

acceptsOptionalString("bar");     // Works!
acceptsOptionalString(undefined); // Works!
acceptsOptionalString(null);      // Error!
acceptsOptionalString();          // Works!
```

### Function parameters with defaults

函数参数默认值

可以为void或者当前类型，但是不能为null

```javascript
// @flow
function acceptsOptionalString(value: string = "foo") {
  // ...
}

acceptsOptionalString("bar");     // Works!
acceptsOptionalString(undefined); // Works!
acceptsOptionalString(null);      // Error!
acceptsOptionalString();          // Works!
```

关于null的记法: 遇到问号看位置，后可void前不可，函数参数默认值，千万不要用null


Symbol 留坑中。。。

