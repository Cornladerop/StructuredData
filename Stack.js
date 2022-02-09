class Stack {
    constructor() {
        this.stack = [];
    }

    add(data) {
        this.stack.unshift(data)
        return this.stack;
    }

    delete() {
        return this.stack.shift();
    }

    peek() {
        return this.stack[0];
    }

    size() {
        return this.stack.length;
    }
}
