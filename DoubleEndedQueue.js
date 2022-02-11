class Dequeue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(data) {
        let last = this.last;
        let el = {prev: last, next: null, data};
        if (last) {
            last.next = el;
            this.last = el;
        } else {
            this.first = el;
            this.last = el;
        }
        this.length++;
    }

    pop() {
        let el = this.last;
        if (!el) return null;
        if (this.first === el) {
            this.first = null;
            this.last = null;
        } else {
            this.last = el.prev;
        }
        this.length--;
        return el.data;
    }

    unshift(data) {
        let first = this.first;
        let el = {prev: null, next: first, data}
        if (first) {
            first.prev = el;
            this.first = el;
        } else {
            this.first = el;
            this.last = el;
        }
        this.length++;
    }

    shift() {
        let el = this.first;
        if (!el) return null;
        if (this.last === el) {
            this.first = null;
            this.last = null;
        } else {
            this.first = el.next;
        }
        this.length--;
        return el.data;
    }

    size() {
        return this.length
    }
}
