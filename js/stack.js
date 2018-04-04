function stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
}

function push(ele) {
  this.dataStore[this.top++] = ele;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length () {
  return this.top;
}