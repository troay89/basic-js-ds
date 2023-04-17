const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.head = null;
    }

    root() {
        return this.head;
    }

    add(data) {
        if (this.head === null) {
            this.head = new Node(data)
        } else {
            let current = this.head;
            let need;
            while (current) {
                need = current
                current = current.data > data ? current.left : current.right
            }
            need.data > data? need.left = new Node(data): need.right = new Node(data)
        }
    }

    has(data) {
        let result = false;
        let current = this.head;
        let need = null;
        while (current){
            need = current;
            if (current.data > data) {
                current = need.left
            }else {
                current = need.right
            }
            if (need.data === data){
                result = true;
                break;
            }
        }
        return result;
    }

    find(data) {
        let current = this.head;
        let need = 0;
        while (current){
            need = current;
            if (current.data > data) {
                current = need.left;
            }else {
                current = need.right;
            }
            if (need.data === data){
                break;
            }
            need = null;
        }
        return need;
    }

    remove(data) {

    }

    min() {
        let current = this.head;
        let need = null;
        while (current){
            need = current;
            current = current.left;
        }
        return need.data;
    }

    max() {
        let current = this.head;
        let need = null;
        while (current){
            need = current;
            current = current.right;
        }
        return need.data;
    }
}

module.exports = {
    BinarySearchTree
};