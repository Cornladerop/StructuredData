class Stack {
    constructor() {
        this.last = null;
    }

    push(item) {
        let prev = this.last;
        this.last = {prev, item};
    }

    pop() {
        let el = this.last;
        if (!el) return null;
        this.last = el.prev;
        return el.item
    }
}
