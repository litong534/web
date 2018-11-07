## Any Types (any类型)

如果你想要一种方法来逃避类型检查，any是你想要的答案，**但是使用any是完全不安全的，在任何情况下建议都不要使用它**

依然举个栗子，下面的代码不会报告任何异常

```javascript
// @flow
function add(one: any, two: any): number {
  return one + two;
}

add(1, 2);     // Works.
add("1", "2"); // Works.
add({}, []);   // Works.
```

甚至是会报告运行时异常的错误Flow都不会报告

```javascript
// @flow
function getNestedProperty(obj: any) {
  return obj.foo.bar.baz;
}

getNestedProperty({});
```

只用这几种场景你可以考虑使用any:

1. 当你想要在已经存在的代码上增加Flow来进行类型检查，并且你在增加类型检查时被阻碍了（也许你的代码需要首先被重写一下）

2. 当你确定你的代码运行良好，由于某些原因Flow不能正常进行类型检查，比如javascript新增加的一些语法，Flow暂时无法正确运行

### 避免any溢出

当你对一个参数使用了any，会使代码链上所有的值都变成any类型

举个栗子，如果你得到了一个属性被声明为any，结果同样会声明为any类型

```javascript
// @flow
function fn(obj: any) {
  let foo /* (:any) */ = obj.foo;
}
```

你可能在后续操作中又用到foo，这样你后续操作得到的值也会变成any类型

```javascript
// @flow
function fn(obj: any) {
  let foo /* (:any) */ = obj.foo;
  let bar /* (:any) */ = foo * 2;
}
```

当你继续操作之后，any会占领你的整个代码链

```javascript
// @flow
function fn(obj: any) /* (:any) */ {
  let foo /* (:any) */ = obj.foo;
  let bar /* (:any) */ = foo * 2;
  return bar;
}

let bar /* (:any) */ = fn({ foo: 2 });
let baz /* (:any) */ = "baz:" + bar;
```

想避免这种情况发生，你需要在整个代码链中尽快斩断any的传播，将中间量声明为其他类型

```javascipt
// @flow
function fn(obj: any) {
  let foo: number = obj.foo;
}
```

现在你的代码不会再被any污染了✅

```javascript
// @flow
function fn(obj: any) /* (:number) */ {
  let foo: number = obj.foo;
  let bar /* (:number) */ = foo * 2;
  return bar;
}

let bar /* (:number) */ = fn({ foo: 2 });
let baz /* (:string) */ = "baz:" + bar;

```

