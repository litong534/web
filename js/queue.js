function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(ele) {
  this.dataStore.push(ele);
}

function dequeue () {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length-1];
}

function toString() {
  return this.dataStore.join(',');
}

function empty() {
  return this.dataStore.length === 0 ? true : false;
}