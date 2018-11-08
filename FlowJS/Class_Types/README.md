## Class_Types (类的类型)

在javascript中，class声明可以使一个值，也可以是一种类型

你在编写class代码时和以前的写法是一样的，不过在这之后你可以把类名当做类型来使用

```javascript
class MyClass {
  // ...
}

let myInstance: MyClass = new MyClass();

```

因为在flow中，类是一种[具名类型](https://flow.org/en/docs/lang/nominal-structural/)

### 声明类的语法

class在flow中是唯一标识，这和在javascript中是一致的，除了增加了类型的特点

#### 类的方法

与在函数声明中一样，类的方法中参数列表与返回值都可以增加类型注释

```javascript
class MyClass {
  method(value: string): number { /* ... */ }
}
```

#### 类的成员变量

在flow中，当你需要使用类的成员变量时，你必须首先给予他类型注释

```javascript
// @flow
class MyClass {
  method() {
    // $ExpectError
    this.prop = 42; // Error!
  }
}
```

成员变量在类声明体里声明，后跟:以及类型

```javascript
// @flow
class MyClass {
  prop: number;
  method() {
    this.prop = 42;
  }
}
```

当成员变量在类声明体外定义时，需要首先在类声明体中声明一个对应的成员变量

```javascript
// @flow
function func_we_use_everywhere (x: number): number {
  return x + 1;
}
class MyClass {
  static constant: number;
  static helper: (number) => number;
  method: number => number;
}
MyClass.helper = func_we_use_everywhere
MyClass.constant = 42
MyClass.prototype.method = func_we_use_everywhere
```

flow也支持类属性声明语法

```javascript
class MyClass {
  prop = 42;
}
```

当使用这种语法时，你不需要显示声明一个类型注释，你可以自由选择

```javascript
class MyClass {
  prop: number = 42;
}
```

#### 类的泛型

类声明也可以拥有自己的泛型

```javascript
class MyClass<A, B, C> {
  property: A;
  method(val: B): C {
    // ...
  }
}
```

类的泛型是[参数化的](https://flow.org/en/docs/types/generics/#toc-parameterized-generics)，当你把类当做类型使用时，你需要为他的每一个泛型传递对应的参数

```javascript
// @flow
class MyClass<A, B, C> {
  constructor(arg1: A, arg2: B, arg3: C) {
    // ...
  }
}

var val: MyClass<number, boolean, string> = new MyClass(1, true, 'three');
```

