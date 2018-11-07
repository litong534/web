(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{155:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("数组在javascript中可以理解为是一种特殊的类列表对象结构，你可以用很多种方式创建数组")]),t._v(" "),t._m(2),s("p",[t._v("你也可以创建数组，然后在晚些时候增加数组成员")]),t._v(" "),t._m(3),t._m(4),t._v(" "),s("p",[t._v("创建数组类型声明你可以使用"),s("code",[t._v("Array<Type>")]),t._v("作为类型声明，来指定数组中的元素类型，举个栗子，使用Array"),s("number",[t._v("来创建一组数字类型的数组")])],1),t._v(" "),t._m(5),s("p",[t._v("你可以在Array"),s("Type",[t._v("类型的数组中放置任意Type类型的元素")])],1),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),s("p",[t._v("如果你想声明Array<?T>，你可以这样写: (?Type)[]")]),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("当从数组中检索元素时，总是有可能是未定义的。您可能已经访问了超出数组边界的索引，或者元素由于是“稀疏数组”而不存在")]),t._v(" "),s("p",[t._v("举个栗子，你有可能访问超出数组边界的元素")]),t._v(" "),t._m(12),s("p",[t._v("或者你有可能访问一个稀疏数组，对应下标的元素并不存在")]),t._v(" "),t._m(13),t._m(14),t._v(" "),s("p",[t._v("flow没有这么做是因为这样使用极其不便，你有可能会被强制在访问数组元素时重新定义每一个取到的值")]),t._v(" "),t._m(15),s("p",[t._v("当flow变得足以")]),t._v(" "),s("h3",{attrs:{id:"readonlyarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#readonlyarray","aria-hidden":"true"}},[t._v("#")]),t._v(" $ReadOnlyArray"),s("T")],1),t._v(" "),s("p",[t._v("和 $ReadOnly"),s("T",[t._v("类似，它是所有数组和所有元组的超类型，并表示只读，它不包含任何允许这种类型的对象被变更的方法（比如pop(), push()等等）")])],1),t._v(" "),t._m(16),s("p",[t._v("注意被声明了 $ReadOnlyArray"),s("T",[t._v("的数组仍然可以拥有可变元素")])],1),t._v(" "),t._m(17),s("p",[t._v("使用$ReadOnlyArray代替Array的主要优点是$ReadOnlyArray的类型参数是协变的，而Array的类型参数是不变的。这意味着$ReadOnlyArray"),s("number",[t._v("是$ReadOnlyArray<number|string>的子类型，而Array"),s("number",[t._v("不是Array<number|string>的子类型。因此，在各种类型的数组的类型注释中使用$ReadOnlyArray通常是有用的。参考以下场景")])],1)],1),t._v(" "),t._m(18),s("p",[t._v("当参数arr被声明为可变数组时，在函数someOperation作用域中为arr插入string类型的元素是有可能的，会破坏当前声明的数组类型规则，但是当你使用$ReadOnlyArray声明数组时，flow可以确保这件事情不会发生，也不会触发任何错误")]),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"array-types-数组类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array-types-数组类型","aria-hidden":"true"}},[this._v("#")]),this._v(" Array Types (数组类型)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("数组有时候在javascript中会用元组(tuple)替代使用，在flow中会分别注解，需要元组相关资料请查阅元组的文档")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// [1, 2, 3];")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),s("span",{attrs:{class:"token comment"}},[t._v("// [undefined, undefined, undefined]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),s("span",{attrs:{class:"token comment"}},[t._v("// [1, 2, 3];")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// []")]),t._v("\narr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("// [1]")]),t._v("\narr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("// [1, 2]")]),t._v("\narr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("// [1, 2, 3]")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"array类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array类型","aria-hidden":"true"}},[this._v("#")]),this._v(" \bArray类型")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"array类型简写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array类型简写","aria-hidden":"true"}},[this._v("#")]),this._v(" Array类型简写")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("你可以使用简写方式来声明数组类型："),a("code",[this._v("Type[]")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("注意?Type[]对应的类型声明是?Array<T>而不是Array<?T>")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// @flow")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr1"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("number"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("// Works!")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr2"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("number"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Works!")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr3"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("number"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Error!")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// @flow")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr1"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("number"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("// Error!")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr2"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("number"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Works!")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr3"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("number"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Works!")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"array类型是不安全的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array类型是不安全的","aria-hidden":"true"}},[this._v("#")]),this._v(" Array类型是不安全的")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// @flow")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" array"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" value"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Works.")]),t._v("\n                       "),s("span",{attrs:{class:"token comment"}},[t._v("// ^ undefined")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// @flow")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" array"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\narray"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narray"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" value"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Works.")]),t._v("\n                       "),s("span",{attrs:{class:"token comment"}},[t._v("// ^ undefined")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("为了使之安全，flow会标记每一个数组访问都是"),a("code",[this._v("\b有undefined可能")]),this._v("的")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" array"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" value"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" undefined"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// number")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// @flow")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" readonlyArray"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $ReadOnlyArray"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" first "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" readonlyArray"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// OK to read")]),t._v("\nreadonlyArray"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20")]),t._v("          "),s("span",{attrs:{class:"token comment"}},[t._v("// Error!")]),t._v("\nreadonlyArray"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),s("span",{attrs:{class:"token comment"}},[t._v("// Error!")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// @flow")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" readonlyArray"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $ReadOnlyArray"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nreadonlyArray"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("42")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Error!")]),t._v("\nreadonlyArray"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("42")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// OK")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// @flow")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("someOperation")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("number "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" string"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// Here we could do `arr.push('a string')`")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("someOperation")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Error!")]),t._v("\n\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// @flow")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("someOperation")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $ReadOnlyArray"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("number "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" string"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// Nothing can be added to `arr`")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("someOperation")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Works!")]),t._v("\n")])])])}],!1,null,null,null);r.options.__file="Array_Types.md";a.default=r.exports}}]);