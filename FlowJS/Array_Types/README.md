## Array Types (数组类型)

`数组有时候在javascript中会用元组(tuple)替代使用，在flow中会分别注解，需要元组相关资料请查阅元组的文档`

数组在javascript中可以理解为是一种特殊的类列表对象结构，你可以用很多种方式创建数组

```javascript
new Array(1, 2, 3); // [1, 2, 3];
new Array(3);       // [undefined, undefined, undefined]
[1, 2, 3];          // [1, 2, 3];
```

你也可以创建数组，然后在晚些时候增加数组成员

```javascript
let arr = []; // []
arr[0] = 1;   // [1]
arr[1] = 2;   // [1, 2]
arr[2] = 3;   // [1, 2, 3]
```

### Array类型

创建数组类型声明你可以使用`Array<Type>`作为类型声明，来指定数组中的元素类型，举个栗子，使用Array<number>来创建一组数字类型的数组

```javascript
let arr: Array<number> = [1, 2, 3];
```

你可以在Array<Type>类型的数组中放置任意Type类型的元素

### Array类型简写

你可以使用简写方式来声明数组类型：`Type[]`

`注意?Type[]对应的类型声明是?Array<T>而不是Array<?T>`

```javascript
// @flow
let arr1: ?number[] = null;   // Works!
let arr2: ?number[] = [1, 2]; // Works!
let arr3: ?number[] = [null]; // Error!
```

如果你想声明Array<?T>，你可以这样写: (?Type)[]

```javascript
// @flow
let arr1: (?number)[] = null;   // Error!
let arr2: (?number)[] = [1, 2]; // Works!
let arr3: (?number)[] = [null]; // Works!
```

### Array类型是不安全的

当从数组中检索元素时，总是有可能是未定义的。您可能已经访问了超出数组边界的索引，或者元素由于是“稀疏数组”而不存在

举个栗子，你有可能访问超出数组边界的元素

```javascript
// @flow
let array: Array<number> = [0, 1, 2];
let value: number = array[3]; // Works.
                       // ^ undefined
```
或者你有可能访问一个稀疏数组，对应下标的元素并不存在

```javascript
// @flow
let array: Array<number> = [];

array[0] = 0;
array[2] = 2;

let value: number = array[1]; // Works.
                       // ^ undefined
```

为了使之安全，flow会标记每一个数组访问都是`有undefined可能`的

flow没有这么做是因为这样使用极其不便，你有可能会被强制在访问数组元素时重新定义每一个取到的值

```javascript
let array: Array<number> = [0, 1, 2];
let value: number | void = array[1];

if (value !== undefined) {
  // number
}
```

当flow变得足以

### $ReadOnlyArray<T>

和 $ReadOnly<T>类似，它是所有数组和所有元组的超类型，并表示只读，它不包含任何允许这种类型的对象被变更的方法（比如pop(), push()等等）

```javascript
// @flow
const readonlyArray: $ReadOnlyArray<number> = [1, 2, 3]

const first = readonlyArray[0] // OK to read
readonlyArray[1] = 20          // Error!
readonlyArray.push(4)          // Error!
```

注意被声明了 $ReadOnlyArray<T>的数组仍然可以拥有可变元素

```javascript
// @flow
const readonlyArray: $ReadOnlyArray<{x: number}> = [{x: 1}];
readonlyArray[0] = {x: 42}; // Error!
readonlyArray[0].x = 42; // OK
```

使用$ReadOnlyArray代替Array的主要优点是$ReadOnlyArray的类型参数是协变的，而Array的类型参数是不变的。这意味着$ReadOnlyArray<number>是$ReadOnlyArray<number|string>的子类型，而Array<number>不是Array<number|string>的子类型。因此，在各种类型的数组的类型注释中使用$ReadOnlyArray通常是有用的。参考以下场景

```javascript
// @flow
const someOperation = (arr: Array<number | string>) => {
  // Here we could do `arr.push('a string')`
}

const array: Array<number> = [1]
someOperation(array) // Error!

```

当参数arr被声明为可变数组时，在函数someOperation作用域中为arr插入string类型的元素是有可能的，会破坏当前声明的数组类型规则，但是当你使用$ReadOnlyArray声明数组时，flow可以确保这件事情不会发生，也不会触发任何错误

```javascript
// @flow
const someOperation = (arr: $ReadOnlyArray<number | string>) => {
  // Nothing can be added to `arr`
}

const array: Array<number> = [1]
someOperation(array) // Works!
```
