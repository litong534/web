## Object Types (对象类型)

对象在javascript中有很多不同的使用方式，所以也会有很多不同的方式来给他们加上类型声明，以覆盖所有不同的使用场景

### 对象类型语法

对象类型尝试尽可能多的匹配对象语法，使用大括号以及键值对，使用","分隔的方式，写在变量声明以及":"后

```javascript
// @flow
var obj1: { foo: boolean } = { foo: true };
var obj2: {
  foo: number,
  bar: boolean,
  baz: string,
} = {
  foo: 1,
  bar: true,
  baz: 'three',
};
```

### 可选对象类型属性

在javascript中，访问不存在的属性会返回undefined，这其实是个很经典的错误，所以flow把这种访问方式定义为错误

```javascript
// @flow
var obj = { foo: "bar" };
// $ExpectError
obj.bar; // Error!
```

如果你有一个对象，他的属性并不一定存在，你可以在他的类型声明的属性名后增加一个?符号，将他声明为可选对象属性

```javascript
// @flow
var obj: { foo?: boolean } = {};

obj.foo = true;    // Works!
// $ExpectError
obj.foo = 'hello'; // Error!
```

除了它们的设置值类型之外，这些可选属性也可以是空的或省略的。但是，它们不能为空

```javascript
// @flow
function acceptsObject(value: { foo?: string }) {
  // ...
}

acceptsObject({ foo: "bar" });     // Works!
acceptsObject({ foo: undefined }); // Works!
// $ExpectError
acceptsObject({ foo: null });      // Error!
acceptsObject({});                 // Works!

```

## 对象类型推断

flow可以根据对象字面量是如何使用的，来以两种不同的方式推断对象字面量的类型

### 被封装对象

当你创建了一个具有属性的对象时，你也创建了一个被封装对象，该对象可以探知到你为他们赋值时的值类型

```javascript
// @flow
var obj = {
  foo: 1,
  bar: true,
  baz: 'three'
};

var foo: number  = obj.foo; // Works!
var bar: boolean = obj.bar; // Works!
// $ExpectError
var baz: null    = obj.baz; // Error!
var bat: string  = obj.bat; // Error!
```

但是当对象被封装后，flow不允许你为他增加新的属性

```javascript
// @flow
var obj = {
  foo: 1
};

// $ExpectError
obj.bar = true;    // Error!
// $ExpectError
obj.baz = 'three'; // Error!
```

### 未封装对象

当你创建了一个空对象，你创建了一个未封装对象，未封装对象是无法感知自己拥有的属性的类型的，你可以为他扩展其他属性

```javascript
// @flow
var obj = {};

obj.foo = 1;       // Works!
obj.bar = true;    // Works!
obj.baz = 'three'; // Works!
```

类型推断会以你为他赋值的类型为准

```javascript
// @flow
var obj = {};
obj.foo = 42;
var num: number = obj.foo;
```

#### 重新声明未封装对象属性

类似于var和let变量，如果重新分配未密封对象的属性，默认情况下，Flow将给出所有可能分配的类型

```javascript
// @flow
var obj = {};

if (Math.random()) obj.prop = true;
else obj.prop = "hello";

// $ExpectError
var val1: boolean = obj.prop; // Error!
// $ExpectError
var val2: string  = obj.prop; // Error!
var val3: boolean | string = obj.prop; // Works!
```

有时flow有能力指出属性类型，当你重新声明属性之后，在这种情况下，flow会给出确定的类型

```javascript
// @flow
var obj = {};

obj.prop = true;
obj.prop = "hello";

// $ExpectError
var val1: boolean = obj.prop; // Error!
var val2: string  = obj.prop; // Works!
```

#### 在未封装对象上查找未知属性是不安全的

未封装对象允许任何时机写入新属性，flow确保属性的读写是一致的，但是无法确保写行为是在读行为之前发生的

意味着，在属性被写入到未封装对象之前去访问它这个行为是不可被检查的，这个不安全的场景flow在将来可能会改善

```javascript
var obj = {};

obj.foo = 1;
obj.bar = true;

var foo: number  = obj.foo; // Works!
var bar: boolean = obj.bar; // Works!
var baz: string  = obj.baz; // Works?
```

### 绝对对象类型

在flow中，传递对象时伴随着额外的属性被认为是安全的

```javascript
// @flow
function method(obj: { foo: string }) {
  // ...
}

method({
  foo: "test", // Works!
  bar: 42      // Works!
});
```

有时我们需要将属性确定在一定的范围中，flow提供了绝对对象类型

```javascript
{| foo: string, bar: number |}
```

和普通的对象类型不同，传递带有额外属性的对象是非法的

```javascript
// @flow
var foo: {| foo: string |} = { foo: "Hello", bar: "World!" }; // Error!
```

绝对对象类型交叉使用有可能与你的期待结果不一致，如果你需要合并绝对对象类型，请使用扩展运算符

```javascript
// @flow

type FooT = {| foo: string |};
type BarT = {| bar: number |};

type FooBarFailT = FooT & BarT;
type FooBarT = {| ...FooT, ...BarT |};

const fooBarFail: FooBarFailT = { foo: '123', bar: 12 }; // Error!
const fooBar: FooBarT = { foo: '123', bar: 12 }; // Works!
```

### 可映射的对象

javascript es6中提供了新的Map类，不过目前使用对象来替代map依然是常见的，这种情况下，对象属性的创建和检索会存在于对象整个生命周期，此外，属性不是保持静态不变的，所以写出确定的类型声明是不可能的

为了满足以上需求，flow提供了一种叫做索引对象的类型，索引器属性允许使用与索引器键类型匹配的任何键进行读写

```javascript
// @flow
var o: { [string]: number } = {};
o["foo"] = 0;
o["bar"] = 1;
var foo: number = o["foo"];
```

索引器可以被显示命名

```javascript
// @flow
var obj: { [user_id: number]: string } = {};
obj[1] = "Julia";
obj[2] = "Camille";
obj[3] = "Justin";
obj[4] = "Mark";
```

当对象类型具有索引器属性时，通过索引器访问属性值不会报告任何错误，这时开发者需要保证访问是正确的

```javascript
var obj: { [number]: string } = {};
obj[42].length; // No type error, but will throw at runtime
```

索引器属性可以和具名属性混合使用

```javascript
// @flow
var obj: {
  size: number,
  [id: number]: string
} = {
  size: 0
};

function add(id: number, name: string) {
  obj[id] = name;
  obj.size++;
}
```

### object 类型

有时你需要接受任何结构的对象，你可以这样写

```javascript
function method(obj: {}) {
  // ...
}
```

这样写虽然可以满足要求，但是这样写是不安全的，应该尽量避免

举个栗子，以下代码不会报告任何错误

```javascript
function method(obj: Object) {
  obj.foo = 42;               // Works.
  let bar: boolean = obj.bar; // Works.
  obj.baz.bat.bam.bop;        // Works.
}

method({ baz: 3.14, bar: "hello" });
```

