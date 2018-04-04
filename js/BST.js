function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
function show() {
  return this.data;
}

function BST(){
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

function insert (item){
  var n = new Node(item,null,null);
  if(this.root == null) {
    this.root = n;
  }else {
    var cursor = this.root;
    var parent;
    while (true) {
      parent = cursor;
      if(item < cursor.data) {
        cursor = cursor.left;
        if(cursor == null) {
          parent.left = n;
          break;
        }
      }else {
        cursor = cursor.right;
        if (cursor == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if(this.root!==null) {
    inOrder(node.left);
    console.log(node.show(),"");
    inOrder(node.right);
  }
}

var bst = new BST();
var root = new Node(0,null,null);
bst.root = root;
bst.insert(2);
bst.insert(3);
bst.insert(-1);
bst.insert(-2);
bst.insert(-3);

console.log(bst);