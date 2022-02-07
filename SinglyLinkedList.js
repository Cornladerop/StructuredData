class SinglyLinkedList {
    constructor() {
        this.last = null;
    }
    push(data) {
        let prev = this.last;
        let el = {prev, data};
        this.last = el;
        return el;
    }
}
