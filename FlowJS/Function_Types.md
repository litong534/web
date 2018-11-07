## Function Types (函数类型)

函数有两个地方类型声明可以使用：参数与返回值

分别对应了函数的输入和输出

```javascript
// @flow
function concat(a: string, b: string): string {
  return a + b;
}

concat("foo", "bar"); // Works!
// $ExpectError
concat(true, false);  // Error!
```

flow有自动推断功能，这些类型通常是可选的

```javascript
// @flow
function concat(a, b) {
  return a + b;
}

concat("foo", "bar"); // Works!
// $ExpectError
concat(true, false);  // Error!
```

有时flow的推断会比较宽松

```javascript
// @flow
function concat(a, b) {
  return a + b;
}

concat("foo", "bar"); // Works!
concat(1, 2);         // Works!
```

所以，为重要的函数声明类型是很有必要的

### 函数的语法

这里有三种形式的函数，各自拥有稍有不同的语法

#### 函数声明

```javascript
function method(str, bool, ...nums) {
  // ...
}

function method(str: string, bool?: boolean, ...nums: Array<number>): void {
  // ...
}
```

#### 箭头函数

这里你能看到有与没有类型声明添加的箭头函数语法

```javascript
let method = (str, bool, ...nums) => {
  // ...
};

let method = (str: string, bool?: boolean, ...nums: Array<number>): void => {
  // ...
};
```

#### 函数类型

这里你可以看到编写函数类型的语法

```javascript
(str: string, bool?: boolean, ...nums: Array<number>) => void
```

你也可以选择性的不声明参数名

```javascript
(string, boolean | void, Array<number>) => void
```

你可以使用这些函数类型来声明回调

```javascript
function method(callback: (error: Error | null, value: string | null) => void) {
  // ...
}
```

### 函数参数

函数参数可以使用:来声明，紧跟在参数名称后面输入类型

```javascript
function method(param1: string, param2: boolean) {
  // ...
}
```

#### 可选参数

你也可以声明有选择性的参数，通过增加?在参数名之后，在:之前

```javascript
function method(optionalValue?: string) {
  // ...
}
```

可选参数可以接受不传，undefined，或者匹配的类型，但是不接受null

```javascript
// @flow
function method(optionalValue?: string) {
  // ...
}

method();          // Works.
method(undefined); // Works.
method("string");  // Works.
// $ExpectError
method(null);      // Error!
```

#### 剩余参数

javascript也支持剩余参数

你也可以为剩余参数增加类型，只不过你需要使用Array来声明

```javascript
function method(...args: Array<number>) {
  // ...
}
```

你可以传递尽可能多的参数到剩余参数中

```javascript
// @flow
function method(...args: Array<number>) {
  // ...
}

method();        // Works.
method(1);       // Works.
method(1, 2);    // Works.
method(1, 2, 3); // Works.
```

#### 函数返回值

函数返回值也可以使用:来声明，跟在参数列表后面

```javascript
function method(): number {
  // ...
}
```

返回值类型确保你的函数每个分支都返回相同类型，防止你在某个条件下忘记返回

```javascript
// @flow
// $ExpectError
function method(): boolean {
  if (Math.random() > 0.5) {
    return true;
  }
}
```

#### 函数的this

每个函数在javascript里都可以被一个特殊的上下文this调用，你可以在你希望的任何上下文中调用该函数

在flow中你不用声明this，flow会去检测你当前调用的上下文是什么

```javascript
function method() {
  return this;
}

var num: number = method.call(42);
// $ExpectError
var str: string = method.call(42);
```

#### 断言函数

有时你希望使用一个断言函数的返回值来代表if语句中的判断逻辑

```javascript
function concat(a: ?string, b: ?string): string {
  if (a && b) {
    return a + b;
  }
  return '';
}
```

但是flow会报告一个错误

```javascript
function truthy(a, b): boolean {
  return a && b;
}

function concat(a: ?string, b: ?string): string {
  if (truthy(a, b)) {
    // $ExpectError
    return a + b;
  }
  return '';
}
```

你可以修复这个问题，通过使用%checks注解来把truthy函数转变成一个断言函数

```javascript
function truthy(a, b): boolean %checks {
  return !!a && !!b;
}

function concat(a: ?string, b: ?string): string {
  if (truthy(a, b)) {
    return a + b;
  }
  return '';
}
```

断言函数的函数体需要是一个表达式，本地变量声明是不被支持的，另外你也可以嵌套断言函数

```javascript
function isString(y): %checks {
  return typeof y === "string";
}

function isNumber(y): %checks {
  return typeof y === "number";
}

function isNumberOrString(y): %checks {
  return isString(y) || isNumber(y);
}

function foo(x): string | number {
  if (isNumberOrString(x)) {
    return x + x;
  } else {
    return x.length; // no error, because Flow infers that x can only be an array
  }
}

foo('a');
foo(5);
foo([]);
```

#### 可调用对象

可调用对象可以被声明类型，举个栗子

```javascript
type CallableObj = {
  (number, number): number,
  bar: string
};

function add(x, y) {
  return x + y; 
}

// $ExpectError
(add: CallableObj);

add.bar = "hello world";

(add: CallableObj);
```

#### 函数类型

有时你希望可以接受任意的函数，这时你可以写() => mixed，举个栗子

```javascript
function method(func: () => mixed) {
  // ...
}
```

但是，如果你希望不使用类型检查，并且不像使用any这种方式，你可以使用Function来代替，但是Function是不安全并且是应该避免的写法

举个栗子，下面的代码不会报告任何错误

```javascript
function method(func: Function) {
  func(1, 2);     // Works.
  func("1", "2"); // Works.
  func({}, []);   // Works.
}

method(function(a: number, b: number) {
  // ...
});
```