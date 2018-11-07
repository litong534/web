## Mixed Types (混合类型)

一般来说项目里会使用到很多类型

**单类型**

这里参数类型只能为number

```javascript
function square(n: number) {
  return n * n;
}
```

**一组不同的类型**

这里参数可以为string或number类型

```javascript
function stringifyBasicValue(value: string | number) {
  return '' + value;
}
```

**类型依赖于传入的参数类型**

这个例子，返回的类型会与传入的参数类型一致

```javascript
function identity<T>(value: T): T {
  return value;
}
```

这三个是最为常见的类型，但是还有第四种类型

**可以是任意类型的类型**

这里传入的参数类型是未知的，可以是任意类型但是函数本身仍然正常运行

```javascript
function getTypeOf(value: mixed): string {
  return typeof value;
}
```

### 只进不出

mixed类型会接受任何类型，string,number,object,function，统统可以正常工作

```javascript
// @flow
function stringify(value: mixed) {
  // ...
}

stringify("foo");
stringify(3.14);
stringify(null);
stringify({});
```

当时尝试使用mixed来代表你的值的时候，你必须首先指出当前使用的到底是什么类型，否则你会收到一个error

```javascript
// @flow
function stringify(value: mixed) {
  // $ExpectError
  return "" + value; // Error!
}

stringify("foo");
```

如果不想error，你就必须确保这个value是确定的某个type

```javascript
// @flow
function stringify(value: mixed) {
  if (typeof value === 'string') {
    return "" + value; // Works!
  } else {
    return "";
  }
}

stringify("foo");
```

因为你使用了typeof去检查类型，Flow知道value在if语句中只会是string类型