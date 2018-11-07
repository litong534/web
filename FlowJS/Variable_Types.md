## Variable Types (变量类型)

当你正在声明一个新的变量，你可以有选择地声明他的类型

javascript有三种声明本地变量的方式

* var 声明一个变量，可以同时声明一个值
* let 声明一个作用域变量，可以同时声明一个值
* const 声明一个作用域变量，声明一个无法被重新声明的值

在flow中这些声明被分成两类

let和var 变量可以被重新声明

const 变量不能被重新声明

举个栗子

```javascript
var varVariable = 1;
let letVariable = 1;
const constVariable = 1;

varVariable = 2;   // Works!
letVariable = 2;   // Works!
// $ExpectError
constVariable = 2; // Error!
```

### const

因为const变量不能被重新声明，所以很容易理解

flow可以从你声明的值中识别类型或者你也可以主动提供一个类型声明

```javascript
// @flow
const foo /* : number */ = 1;
const bar: number = 2;
```

### var与let

当你提供一个类型时，你可以重新声明值，但是必须是符合当前类型声明的值

```javascript
// @flow
let foo: number = 1;
foo = 2;   // Works!
// $ExpectError
foo = "3"; // Error!
```

### 重新声明变量

当你重新声明一个变量时，flow默认会提供所有可能的值的类型

```javascript
let foo = 42;

if (Math.random()) foo = true;
if (Math.random()) foo = "hello";

let isOneOf: number | boolean | string = foo; // Works!
```

有时flow有能力指出变量重新声明后值的类型，这种情况下，flow会给出确定的类型

```javascript
// @flow
let foo = 42;
let isNumber: number = foo; // Works!

foo = true;
let isBoolean: boolean = foo; // Works!

foo = "hello";
let isString: string = foo; // Works!
```

if语句，函数和其他条件性运行的代码会阻止flow精确指出类型是什么

```javascript
// @flow
let foo = 42;

function mutate() {
  foo = true;
  foo = "hello";
}

mutate();

// $ExpectError
let isString: string = foo; // Error!
```

随着flow越来越智能，这种场景以后会越来越少