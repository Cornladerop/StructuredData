class SinglyLinkedList {
    constructor() {
        this.last = null;
        this.length = 0;
    }

    push(data) {
        let prev = this.last;
        let el = {prev, data};
        this.last = el;
        this.length++;
        return el;
    }

    pop() {
        if (this.length === 0) return null;
        let node = this.last;
        let data = node.data;
        this.last = node.prev;
        node = null;
        this.length--;
        return data;
    }

    size() {
        return this.length
    }
}
