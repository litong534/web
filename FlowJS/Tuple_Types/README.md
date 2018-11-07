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