function add(...args) {
  let rest;
  if (args.length === 1) {
    rest = args[0];
    return function (arg) {
      return rest + arg;
    }
  } else if (args.length === 2) {
    return args[0] + args[1];
  }
}

console.log(add(1)(2));
console.log(add(1, 2));

function all(fn) {
  return function (arr) {
    return Array.prototype.every.call(arr, fn);
  }
}

console.log(all(function (item) {
  return item === 3;
})([3, 3, 3, 3]))

function always(eternal) {
  let e = eternal;
  return function () {
    return e;
  }
}

var e = always('tee');
console.log(e());
console.log(e());

function and(a, b) {
  return a && b;
}

function ang(fn) {
  return function (arr) {
    return Array.prototype.some.call(arr, fn);
  }
}