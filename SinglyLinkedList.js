function SinglyLinkedList() {
    this.last = null;
    this.length = 0;
}

SinglyLinkedList.prototype.push = function(data) {
    let prev = this.last;
    let el = {prev, data};
    this.last = el;
    this.length++;
    return el;
}

SinglyLinkedList.prototype.pop = function() {
    if (this.length === 0) return null;
    let node = this.last;
    let data = node.data;
    this.last = node.prev;
    node = null;
    this.length--;
    return data;
}

SinglyLinkedList.prototype.size = function() {
    return this.length;
}
