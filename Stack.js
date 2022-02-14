function Stack() {
    this.last = null;
    this.length = 0;
}

Stack.prototype.push = function(data) {
    let prev = this.last;
    this.last = {prev, data};
    this.length++;
    return this.last = {prev, data};
}

Stack.prototype.pop = function() {
    let el = this.last;
    if (!el) return null;
    this.last = el.prev;
    this.length--;
    return el.data
}

Stack.prototype.peek = function() {
    return this.last;
}

Stack.prototype.size = function() {
    return this.length;
}
