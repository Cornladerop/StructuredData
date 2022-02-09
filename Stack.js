class Stack {
    constructor() {
        this.last = null;
        this.length = 0;
    }

    push(data) {
        let prev = this.last;
        this.last = {prev, data};
        this.length++;
        return this.last = {prev, data};
    }

    pop() {
        let el = this.last;
        if (!el) return null;
        this.last = el.prev;
        this.length--;
        return el.data
    }

    peek() {
        return this.last;
    }

    size() {
        return this.length;
    }
}
