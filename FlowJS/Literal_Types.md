## Literal Types (字面类型)

Flow有基本类型来控制字面值，但是我们也可以使用字面值来当做类型约束

举个栗子，不使用number 类型，我们可以只接受字面值2来约束参数值

```javascript
// @flow
function acceptsTwo(value: 2) {
  // ...
}

acceptsTwo(2);   // Works!
// $ExpectError
acceptsTwo(3);   // Error!
// $ExpectError
acceptsTwo("2"); // Error!
```

你可以给以下类型声明一个确定的值

* Booleans: like true or false
* Numbers: like 42 or 3.14
* Strings: like "foo" or "bar"

配合`集合类型`可以非常强大

```javascript
// @flow
function getColor(name: "success" | "warning" | "danger") {
  switch (name) {
    case "success" : return "green";
    case "warning" : return "yellow";
    case "danger"  : return "red";
  }
}

getColor("success"); // Works!
getColor("danger");  // Works!
// $ExpectError
getColor("error");   // Error!
```