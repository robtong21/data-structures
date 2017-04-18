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
        this.head = this.tail;
    }
}

LinkedList.prototype.addToHead = function(value) {

    if (this.head) {
        var next = this.head;
        this.head = new Node(value);
        next.previous = this.head;
        this.head.next = next;

    } else {
        this.head = new Node(value);
        this.tail = this.head;
    }
}


LinkedList.prototype.removeHead = function() {
    if (this.head && this.head !== this.tail) {
        var origHead = this.head;
        var nextHead = this.head.next;
        this.head = nextHead;
        nextHead.previous = null;
        return origHead.value;
     } else if (this.head && this.head === this.tail) {
            var value = this.head.value
            this.tail = null
            this.head = null
            return value
     } else {
         return null
     }
}

LinkedList.prototype.removeTail = function() {
    if (this.tail && this.tail !== this.head) {
        var origtail = this.tail;
        var prevtail = this.tail.previous;
        this.tail = prevtail;
        prevtail.next = null;
        return origtail.value;
    } else if (this.tail && this.tail === this.head) {
        var val = this.tail.value
        this.tail = null
        this.head = null
        return val
    } else {
        return null;
    }
}


LinkedList.prototype.search = function(search) {
    var curHead = this.head
    if (typeof search === 'function') {
        while(curHead) {
            if (search(curHead.value)) {
                return curHead.value
            }
            curHead = curHead.next
        }
    }
    while(curHead) {
        if (curHead.value === search) {
            return curHead.value
        }
        curHead = curHead.next
    }
    return null
}
