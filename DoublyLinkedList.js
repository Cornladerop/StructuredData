function Node(list, data) {
    this.list = list;
    this.data = data;
    this.prev = null;
    this.next = null;
}

class DoublyLinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(data) {
        let node = new Node(this, data);
        node.prev = this.last;
        this.length ? this.last.next = node : this.first = node;
        this.last = node;
        this.length++;
        return node;
    }

    pop() {
        if (this.length === 0) return null;
        let node = this.last;
        node.list = null;
        node.prev = null;
        node.next = null;
        this.length--;
        return node.data;
    }

    size() {
        return this.length
    }
}
