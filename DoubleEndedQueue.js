function Dequeue() {
    this.first = null;
    this.last = null;
    this.length = 0;
}

Dequeue.prototype.push = function(data) {
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
    return el;
}

Dequeue.prototype.pop = function() {
    let el = this.last;
    let res = el.data;
    if (!el) return null;
    if (this.first === el) {
        this.first = null;
        this.last = null;
    } else {
        this.last = el.prev;
        el.prev.next = null;
        el = null;
    }
    this.length--;
    return res;
}

Dequeue.prototype.unshift = function(data) {
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
    return el;
}

Dequeue.prototype.shift = function() {
    let el = this.first;
    let res = el.data;
    if (!el) return null;
    if (this.last === el) {
        this.first = null;
        this.last = null;
    } else {
        this.first = el.next;
        el.next.prev = null;
        el = null;
    }
    this.length--;
    return res;
}

Dequeue.prototype.size = function() {
    return this.length;
}
