function BinarySearchTree (value) {
  this.count = 1;
  this.left = null;
  this.right = null;
  this.value = value;
}

BinarySearchTree.prototype.insert = function(value) {
  var tree = new BinarySearchTree(value);
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value)
    } else {
      this.left = tree;
    }
  } else {
      if (this.right) {
        this.right.insert(value)
      } else {
        this.right = tree;
      }
  }
  this.count++
}

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    if (this.left) {
      return this.left.contains(value)
    } else return false
  } else if (value > this.value) {
    if (this.right) {
      return this.right.contains(value)
    } else return false
  }
  return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(func, order) {
  if (order === 'pre-order') {
    func(this.value);
    if (this.left) {
      this.left.depthFirstForEach(func, order);
    }
    if (this.right) {
        this.right.depthFirstForEach(func, order);
    }
  } else if (order === 'post-order') {
      if (this.left) {
        this.left.depthFirstForEach(func, order);
      }
      if (this.right) {
          this.right.depthFirstForEach(func, order);
      }
      func(this.value);
  } else {
      if (this.left) {
        this.left.depthFirstForEach(func);
      }
      func(this.value);
      if (this.right) {
          this.right.depthFirstForEach(func);
      }
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(func) {
  var buffer = [this];
  
  while (buffer.length > 0){
    // record values in buffer
    buffer.forEach( (e)=>{
      func(e.value);
    });

    // populate next batch of nodes
    buffer = buffer.reduce( (sum,e)=>{
      return sum.concat(e.left,e.right);
      },[]);

    // filter out 'null' elements
    buffer = buffer.filter( (e)=>{
      return e ? true : false;
    });
  }
}


BinarySearchTree.prototype.size = function() {
  return this.count
}


















