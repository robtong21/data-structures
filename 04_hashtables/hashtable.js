function HashTable() {
  this.arr = [];
  this.numBuckets = 35;
}

HashTable.prototype.set = function(key, val) {
  if(typeof(key) !== 'string') {
    throw new TypeError("Keys must be strings")
  }
  var hashKey = this.hash(key);
  if(this.arr[hashKey] === undefined) {
    this.arr[hashKey] = new LinkedList();
    var objStruct = {key1: key, val1: val};
    this.arr[hashKey].addToTail(objStruct);
  } else {
    var ll = new LinkedList();
  }
}

HashTable.prototype.get = function(key) {
  console.log(this.arr[this.hash(key)])
  var obj = this.arr[this.hash(key)].search(function(node) {
    console.log("node.key1:", node.key1)
    if(node.key1 === key) {
      return true;
    } else {
      return false;
    }
  });
  console.log('obj.val1:', obj.val1)
}

HashTable.prototype.hasKey = function() {

}

HashTable.prototype.hash = function(str) {
  var sum = 0;
  for(var i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum % this.numBuckets;
}
