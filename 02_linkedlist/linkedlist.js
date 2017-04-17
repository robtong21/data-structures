// class Node {

function LinkedList() {
    this.head = false;
    this.tail = false;


}

function Node(value) {
    this.value = value;
    this.next = null;
    this.previous = null;

}


LinkedList.prototype.addToTail = function(value) {

    if (this.tail) {
        var prev = this.tail;
        this.tail = new Node(value);
        prev.next = this.tail;
        this.tail.previous = prev;

    } else {
        this.tail = new Node(value);
    }
    if (!this.head) {
        this.head = this.tail;
    }

}

LinkedList.prototype.addToHead = function(value) {

    if (this.head) {
        var next = this.head;
        this.head = new Node(value);
        next.previous = this.head.next;
        this.head.next = next.value;

    } else {
        this.head = new Node(value);
    }

    if (!this.tail) {
        this.tail = this.head;

    }


}


LinkedList.prototype.removeHead = function() {
 	var orighead = this.head;
    var nexthead = this.head.next;
    this.head = nexthead;
    nexthead.previous = null;

    return orighead.value;
}

LinkedList.prototype.removeTail = function() {
 	var origtail = this.tail;
    var prevtail = this.tail.previous;
    console.log(origtail);
    console.log(prevtail);
    this.tail = prevtail;

    this.tail.next = null;

    return origtail.value;
}


LinkedList.prototype.search = function() {


}
