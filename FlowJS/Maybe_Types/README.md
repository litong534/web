## Maybe Types (待定类型)

在javascript中，你的代码提供一些"可选参数"是再平常不过的一件事，当然你也可以使用缺省值，这时你会传递一个null给函数的参数表

Flow可以在这种场景下使用待定类型，待定类型的声明只需要在类型前面加一个'?'

待定类型接受当前类型，同事也接受null或者undefined，所以`?number`代表了number,null或者undefined这三种

```javascript
// @flow
function acceptsMaybeNumber(value: ?number) {
  // ...
}

acceptsMaybeNumber(42);        // Works!
acceptsMaybeNumber();          // Works!
acceptsMaybeNumber(undefined); // Works!
acceptsMaybeNumber(null);      // Works!
acceptsMaybeNumber("42");      // Error!
```

当使用object类型的时候，需要注意，你不传递参数值和参数值声明为undefined是不一样的，待定类型要求成员变量必须一个不落地被传递，甚至成员变量值是undefined

```javascript
// @flow
function acceptsMaybeProp({ value }: { value: ?number }) {
  // ...
}

acceptsMaybeProp({ value: undefined }); // Works!
acceptsMaybeProp({});                   // Error!

```

### 待定类型遇到类型改进

假设我们已经使用了`?number`，当我们使用该变量值时，我们需要确定这个值不是null或者undefined

```javascript
// @flow
function acceptsMaybeNumber(value: ?number) {
  if (value !== null && value !== undefined) {
    return value * 2;
  }
}
```

你其实可以简单地使用`!=null`来同时进行两个判断

```javascript
// @flow
function acceptsMaybeNumber(value: ?number) {
  if (value != null) {
    return value * 2;
  }
}
```

当然你也可以直观地去检查类型

```javascipt
// @flow
function acceptsMaybeNumber(value: ?number) {
  if (typeof value === 'number') {
    return value * 2;
  }
}
```

然而，类型改进可能会丢失。例如，在细化对象属性的类型之后调用函数将使这种细化无效。有关更多细节，请参阅[细化无效文档](https://flow.org/en/docs/lang/refinements/#toc-refinement-invalidations)，以了解为什么Flow以这种方式工作，以及如何避免这种常见的陷阱。

