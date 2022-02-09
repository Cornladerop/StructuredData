class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    put(data) {
        let last = this.last;
        let el = {next: null, data};
        if (last) {
            last.next = el;
            this.last = el;
        } else {
            this.first = el;
            this.last = el;
        }
    }

    pick() {
        let el = this.first;
        if (!el) return null;
        if (this.last === el) {
            this.first = null;
            this.last = null;
        } else this.first = el.next;
        return el.data
    }
}
