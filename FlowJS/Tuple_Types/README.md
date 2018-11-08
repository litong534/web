## Tuple Types(元组类型)

元组是一种列表，但是拥有有限数量元素的集合，在javascript中，元组是使用数组创建的

在flow中你可以使用`[type, type, type]`语法创建

```javascript
let tuple1: [number] = [1];
let tuple2: [number, boolean] = [1, true];
let tuple3: [number, boolean, string] = [1, true, "three"];
```

当你从tuple中一个特定的索引取值时，会返回当前索引的类型

```javascript
// @flow
let tuple: [number, boolean, string] = [1, true, "three"];

let num  : number  = tuple[0]; // Works!
let bool : boolean = tuple[1]; // Works!
let str  : string  = tuple[2]; // Works!
```

如果你从tuple中尝试获取一个不存在的索引对应值时，会返回void类型

```javascript
// @flow
let tuple: [number, boolean, string] = [1, true, "three"];

let none: void = tuple[3];
```

如果flow不明确你想要访问的索引是哪个，他会返回所有可能的类型

```javascript
// @flow
let tuple: [number, boolean, string] = [1, true, "three"];

function getItem(n: number) {
  let val: number | boolean | string = tuple[n];
  // ...
}
```

当你需要在tuple中设置一个新的值时，新值的类型必须匹配他将要覆盖的对应索引的类型

```javascript
// @flow
let tuple: [number, boolean, string] = [1, true, "three"];

tuple[0] = 2;     // Works!
tuple[1] = false; // Works!
tuple[2] = "foo"; // Works!

// $ExpectError
tuple[0] = "bar"; // Error!
// $ExpectError
tuple[1] = 42;    // Error!
// $ExpectError
tuple[2] = false; // Error!
```

### 严格限制的tuple数组长度

tuple的数组长度在flow中是被严格限制的

#### tuple只能与长度相同的另一个tuple相匹配

这意味着长短不一致的tuple无法被替换

```javascript
// @flow
let tuple1: [number, boolean]       = [1, true];
// $ExpectError
let tuple2: [number, boolean, void] = tuple1; // Error!
```

```javascript
// @flow
let tuple1: [number, boolean, void] = [1, true];
// $ExpectError
let tuple2: [number, boolean]       = tuple1; // Error!
```

#### tuple无法与array匹配

因为flow无法得知array的长度，`Array<T>`类型不能被传递到tuple中

```javascript
// @flow
let array: Array<number>    = [1, 2];
// $ExpectError
let tuple: [number, number] = array; // Error!
```

`译者：本着严谨的态度，本人尝试了$ReadOnlyArray<T>，结果如下。从现象可以得知，无论如何tuple与array都是不兼容的，互相引用就不要考虑了。。。(虽然不可变数组长度是固定的)`

```javascript
// @flow
const arr: $ReadOnlyArray<number> = [1, 2, 3]

let tup: [number, number, number] = [4, 5, 6]

tup = arr // Error! 
```

#### 不能在tuple上使用可变数组方法

你无法使用任何Array.prototype上的方法，但是有一个除外

```javascript
// @flow
let tuple: [number, number] = [1, 2];
tuple.join(', '); // Works!
// $ExpectError
tuple.push(3);    // Error!

```