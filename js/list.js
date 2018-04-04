function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.length = length;
	this.find = find;
	// this.contains = contains;
	this.clear = clear;
	this.toString = toString;
	// this.getElement = getElement;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	// this.front = front;
	// this.end = end;
	// this.prev = prev;
	// this.next = next;
	// this.currPos = currPos;
	// this.moveTo = moveTo;
}

function append(ele) {
	this.dataStore[this.listSize++] = ele;
}

function find(ele) {
	for (let i = 0; i < this.dataStore.length - 1; i++) {
		if (this.dataStore[i] === ele) {
			return i;
		}
	}
	return -1;
}

function remove(ele) {
	var foundAt = this.find(ele);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

function length() {
	return this.listSize;
}

function toString() {
	return this.dataStore;
}

function insert(ele, after) {
	var foundAt = this.find(after);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt + 1, 0, ele);
		++this.listSize;
		return true;
	}
	return false;
}

function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

function contains(ele) {
	for (let i = 0; i < this.dataStore.length; i++) {
		if(this.dataStore[i] === ele) {
			return true;
		}
	}
	return false;
}

var lst = new List();

lst.append("ele1");
lst.append("ele2");
lst.append("ele3");

console.log(lst.toString());
console.log(lst.find("ele2"));
lst.remove("ele2");
console.log(lst.toString());
console.log(lst.length());
