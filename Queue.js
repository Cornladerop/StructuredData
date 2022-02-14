function Queue() {
    this.first = null;
    this.last = null;
    this.length = 0;
}

Queue.prototype.put = function(data) {
    let last = this.last;
    let el = {next: null, data};
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

Queue.prototype.pick = function() {
    let el = this.first;
    if (!el) return null;
    if (this.last === el) {
        this.first = null;
        this.last = null;
    } else this.first = el.next;
    this.length--;
    return el.data
}

Queue.prototype.size = function() {
    return this.length;
}
