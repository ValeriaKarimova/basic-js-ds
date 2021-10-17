const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class NodeItem {

  constructor(value) {
    this.data = value;
    this.left_child = null;
    this.right_child = null;
  }

  addValue(newValue) {
    if (newValue <= this.data && this.left_child != null) {
      this.left_child.addValue(newValue);
    } else if (newValue <= this.data) {
      this.left_child = new NodeItem(newValue);
    } else if (newValue > this.data && this.right_child != null) {
      this.right_child.addValue(newValue);
    } else {
      this.right_child = new NodeItem(newValue);
    }
  }

  findValue(searchValue) {
    if (searchValue == this.data){
      return this;
    }
    else if (searchValue < this.data && this.left_child != null) {
      return this.left_child.findValue(searchValue);
    }
    else if (searchValue < this.data) {
      return null;
    }
    else if (searchValue > this.data && this.right_child != null){
      return this.right_child.findValue(searchValue);
    }
    else {
      return null;
    }
  }

}

module.exports = class BinarySearchTree {
  
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(newInt) {
    if (this.rootNode == null) {
      this.rootNode = new NodeItem(newInt)
    } else {
      this.rootNode.addValue(newInt);
    }
  }

  has(value1) {
    return this.rootNode.findValue(value1) != null
   }

  find(value2) {
    return this.rootNode.findValue(value2)
  }

  remove(data) {
    function removeNode (node, data) {
      if (node == null) {
        return null;
      } 
      if (data == node.data) {
        if (node.left_child == null && node.right_child == null) {
          return null;
        } else if (node.left_child == null) {
          return node.right_child;
        } else if (node.right_child == null) {
          return node.left_child;
        } 
         let currentNode = node.right_child;
          while (currentNode != null) {
            currentNode = currentNode.left_child;
          }
          node.data = currentNode.data;
          node.left_child = removeNode (node.right_child, currentNode.data);
          return node;
      } else if (data < node.data) {
        node.left_child = removeNode(node.right_child, data);
        return node;
      } else {
        node.right_child = removeNode(node.right_child, data)
        return node;
      }
  }
  this.rootNode = removeNode (this.rootNode, data)
}


  min() {
   let currentNode = this.rootNode;
   while (currentNode.left_child !== null) {
      currentNode = currentNode.left_child;
   }
    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode.right_child !== null) {
      currentNode = currentNode.right_child;
    }
    return currentNode.data;
  }

}