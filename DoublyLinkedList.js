function Node(list, data) {
    this.list = list;
    this.data = data;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList() {
    this.first = null;
    this.last = null;
    this.length = 0;
}

DoublyLinkedList.prototype.push = function(data) {
    let node = new Node(this, data);
    node.prev = this.last;
    this.length ? this.last.next = node : this.first = node;
    this.last = node;
    this.length++;
    return node;
}

DoublyLinkedList.prototype.pop = function() {
    if (this.length === 0) return null;
    let node = this.last;
    let data = node.data;
    this.last = node.prev;
    node.prev.next = null;
    node = null;
    this.length--;
    return data;
}

DoublyLinkedList.prototype.size = function() {
    return this.length;
}
