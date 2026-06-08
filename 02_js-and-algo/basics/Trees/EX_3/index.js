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

  getParentOfMaxNode() {
    if((this.rightChild.rightChild===null)) {
      return this;
    }
    else{
      return this.rightChild.getParentOfMaxNode();
    }
  }

  disconnectTwoChildsNode(node) {
    //get the maximum node in the left branch
    let parentOfMaxNode = node;
    if (!(node.leftChild.rightChild===null)) {
      parentOfMaxNode = node.leftChild.getParentOfMaxNode();
    }
    //get the right leave node (there is no right leave node)
    let disconnectedLeave = parentOfMaxNode.rightChild.leftChild;
    //connect the max node to the childs of the discoonected node
    parentOfMaxNode.rightChild.leftChild = node.leftChild;
    parentOfMaxNode.rightChild.rightChild = node.rightChild;
    //Replace the root node with the maximum node
    node = parentOfMaxNode.rightChild;
    //connect the parent of the max node to the disconnected leave
    parentOfMaxNode.rightChild = disconnectedLeave;
  }

  removeNode(node, value) {
    //the root is to be removed
    if (node.value === value) {
      this.disconnectTwoChildsNode(node);
    } else {
      const parentNode = this.getParentNode(this, value);
      //right child is the removed target
      if (parentNode.rightChild && parentNode.rightChild.value === value) {
        // Handle root node removal
        let removedNode = parentNode.rightChild;
        //The removed node has no childs
        if (!removedNode.leftChild && !removedNode.rightChild) {
          parentNode.rightChild = null;
        }
        //The removed node has just left child
        else if (removedNode.leftChild && !removedNode.rightChild) {
          parentNode.rightChild = removedNode.leftChild;
        }
        //The removed node has just right child
        else if (!removedNode.leftChild && removedNode.rightChild) {
          parentNode.rightChild = removedNode.rightChild;
        }
        //The removed node has 2 childs
        else {
          removedNode.disconnectTwoChildsNode(removedNode);
        }
      }
      //left child is the removed target
      else {
        let removedNode = parentNode.leftChild;
        //The removed node has no childs
        if (!removedNode.leftChild && !removedNode.rightChild) {
          parentNode.leftChild = null;
        }
        //The removed node has just left child
        else if (removedNode.leftChild && !removedNode.rightChild) {
          parentNode.leftChild = removedNode.leftChild;
        }
        //The removed node has just right child
        else if (!removedNode.leftChild && removedNode.rightChild) {
          parentNode.rightChild = removedNode.rightChild;
        }
        //The removed node has 2 childs
        else {
          removedNode.disconnectTwoChildsNode(removedNode);
        }
      }
    }
  }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 3)); // will return tree like the first image (the 9 will be deletied)

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)
