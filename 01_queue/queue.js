function Queue() {
    this.queue = [];

    this.tail = 0;
    this.head = 0;

}

Queue.prototype.enqueue = function(item) {
    this.queue[this.tail] = item;
    this.tail++;



}


Queue.prototype.dequeue = function() {

    if (this.head < this.tail) {
        this.head++;
        return this.queue[this.head - 1];
    } else {
        return undefined;
    }

}


Queue.prototype.size = function() {


    return this.tail - this.head;

}


