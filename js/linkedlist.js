function Node(ele) {
  this.element = ele;
  this.next = null;
}

function LList() {
  this.head = new Node('head');
  // this.head.next = this.head;  循环链表
  this.find = find;
  this.insert = insert;
  this.display = display;
}

function find(item) {
  var currNode = this.head;
  while (currNode.element !==item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement,item) {
  var newNode = new Node(newElement);
  var curNode = this.find(item);
  newNode.next = curNode.next;
  curNode.next = newNode;
}

function display() {
  
}