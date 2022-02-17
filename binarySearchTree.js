function Node(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
}

function binarySearchTree() {
        this.root = null;
}

binarySearchTree.prototype.add = function(data) {
    const node = this.root
    if (node === null) {
        this.root = new Node(data);
        return;
    } else {
        const searchTree = function(node) {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                } else if (node.left !== null) {
                    return searchTree(node.left);
                }
            } else if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data);
                    return
                } else if (node.right !== null) {
                    return searchTree(node.right);
                }
            } else {
                return null;
            }
        }
        return searchTree(node);
    }
}

binarySearchTree.prototype.findMin = function() {
    let current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
}

binarySearchTree.prototype.findMax = function() {
    let current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
}

binarySearchTree.prototype.find = function(data) {
    let current = this.root;
    while (current.data !== data) {
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
        if (current === null) {
            return null;
        }
    }
    return current;
}

binarySearchTree.prototype.isPresent = function(data) {
    let current = this.root;
    while (current) {
        if (data === current.data) {
            return true;
        }
        data < current.data ? current = current.left : current = current.right;
    }
    return false;
}

binarySearchTree.prototype.remove = function(data) {
    const removeNode = function(node, data) {
        if (node === null) return null;
        if (data === node.data) {
            if (node.left === null && node.right === null) return null;
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;
            let tempNode = node.right;
            while (tempNode.left !== null) {
                tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = removeNode(node.right, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }
    this.root = removeNode(this.root, data);
}
