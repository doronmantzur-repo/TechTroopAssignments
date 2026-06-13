class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
      this.leftChild = null;
      this.rightChild = null;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }
  findNode(value) {
    if (this.value === value) {
      return true;
    } else if (this.value > value) {
      if (this.leftChild) {
        return this.leftChild.findNode(value);
      } else {
        return false;
      }
    } else {
      if (this.rightChild) {
        return this.rightChild.findNode(value);
      } else {
        return false;
      }
    }
  }
  findCommonParent(value1, value2) {
    if (this.leftChild && this.leftChild.findNode(value1)) {
      if (this.rightChild && this.rightChild.findNode(value2)) {
        return this.value;
      } else if (
        this.leftChild.value === value1 ||
        this.leftChild.value === value2
      ) {
        return this.value;
      } else {
        return this.leftChild.findCommonParent(value1, value2);
      }
    } else {
      if (this.leftChild && this.leftChild.findNode(value2)) {
        return this.value;
      } else if (
        this.rightChild.value === value2 ||
        this.rightChild.value === value1
      ) {
        return this.value;
      } else {
        return this.rightChild.findCommonParent(value1, value2);
      }
    }
  }

  getParentNode(node, value) {
    if (value === node.value) {
      return node;
    } else if (value > node.value) {
      if (node.rightChild.value === value) {
        return node;
      } else {
        let retNode = this.getParentNode(node.rightChild, value);
        return retNode;
      }
    } else {
      if (node.leftChild.value === value) {
        return node;
      } else {
        let retNode = this.getParentNode(node.leftChild, value);
        return retNode;
      }
    }
  }

  getParentMaxLeaveNode() {
    if (this.leftChild === null) {
      return this;
    } else {
      return this;
    }
  }

  disconnectNode(parentNode) {
    //if the node has no childs
    if (this.leftChild === null && this.rightChild === null) {
      {
        if (parentNode) {
          if (parentNode.leftChild === this) {
            parentNode.leftChild = null;
          } else {
            parentNode.rightChild = null;
          }
        }
      }
    } else if (this.leftChild === null && this.rightChild !== null) {
      if (parentNode) {
        if (parentNode.leftChild === this) {
          parentNode.leftChild = this.rightChild;
        } else {
          parentNode.rightChild = this.rightChild;
        }
      }
    } else if (this.leftChild !== null && this.rightChild === null) {
      if (parentNode) {
        if (parentNode.leftChild === this) {
          parentNode.leftChild = this.leftChild;
        } else {
          parentNode.rightChild = this.leftChild;
        }
      }
    } else if (this.leftChild !== null && this.rightChild !== null) {
      //get the maximum node in the left branch
      let maxParentLeaveNode = this.getParentMaxLeaveNode();
      //get the left leave node (there is no right leave node)
      let leftLeave = maxParentLeaveNode.rightChild.leftChild;
      //the root node to be disconnected
      if (parentNode == null) {
        this.rightChild = maxParentLeaveNode.rightChild;
        this.leftChild = maxParentLeaveNode.leftChild;
        maxParentLeaveNode.rightChild = leftLeave;
        this.rightChild = null;
        this.leftChild = null;
      } else {
        this.rightChild = parentNode.rightChild;
        this.leftChild = parentNode.leftChild;
        maxParentLeaveNode.rightChild = leftLeave;
        parentNode.leftChild = this;
        parentNode.rightChild = null;
        parentNode.leftChild = null;
      }
    }
  }

  removeNode(node, value) {
    let parentNode = null;

    if (this.value === value) {
      if (node.value === value) {
        parentNode = null;
      } else {
        parentNode = node;
      }
      this.disconnectNode(parentNode);
    } else if (value > node.value) {
      this.rightChild.removeNode(this, value);
    } else {
      this.leftChild.removeNode(this, value);
    }
    return node;
  }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 3)); // will return tree like the first image (the 9 will be deletied)

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)
