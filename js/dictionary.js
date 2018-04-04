function Dictionary() {
  this.datastore = new Array();
}

function add(key,value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  for (var key in Object.keys(this.datastore)) {
    print(key + " -> " + this.datastore[key]);
  }
}