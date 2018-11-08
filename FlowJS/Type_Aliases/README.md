## Type Aliases (类型别名)

当你有一种比较复杂的类型需要复用时，你可以给他们起个别名，在flow中被称作`类型别名`

```javascript
// @flow
type MyObject = {
  foo: number,
  bar: boolean,
  baz: string,
};

```

这些类型别名可以在类型可以使用的地方使用

```javascript
// @flow
type MyObject = {
  // ...
};

var val: MyObject = { /* ... */ };
function method(val: MyObject) { /* ... */ }
class Foo { constructor(val: MyObject) { /* ... */ } }
```

### 类型别名语法

类型别名使用`type` 来声明它的名称，此外我们还需要`=`和类型定义

```javascript
type Alias = Type;
```

任何类型都可以出现在类型别名中

```javascript
type NumberAlias = number;
type ObjectAlias = {
  property: string,
  method(): number,
};
type UnionAlias = 1 | 2 | 3;
type AliasAlias = ObjectAlias;
```

#### 类型别名泛型

类型别名也可以拥有自己的泛型

```javascript
type MyObject<A, B, C> = {
  property: A,
  method(val: B): C,
};
```

与类的泛型一样，你需要为每一个泛型传递一个对应的变量

```javascript
// @flow
type MyObject<A, B, C> = {
  foo: A,
  bar: B,
  baz: C,
};

var val: MyObject<number, boolean, string> = {
  foo: 1,
  bar: true,
  baz: 'three',
};
```
