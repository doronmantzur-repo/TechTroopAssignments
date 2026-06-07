class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }
  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
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
      } else if (this.leftChild.value === value1 || this.leftChild.value === value2) {
        return this.value;
      } else {
        return this.leftChild.findCommonParent(value1, value2);
      }
    } else {
      if (this.leftChild && this.leftChild.findNode(value2)) {
        return this.value;
      } else if (this.rightChild.value === value2 || this.rightChild.value === value1) {
        return this.value;
      }else {
        return this.rightChild.findCommonParent(value1, value2);
      }
    }
  }

  getParentOfMaxNode(node) {
    if (!node.rightChild) {
      return node;
    }else if (node.rightChild.rightChild) {
      return this.getParentOfMaxNode(node.rightChild);
    }else{
      return node;
    }
  }

  removeNode(node, value) {
    
    if (value ===  this.value) {
      maxNode = this.getMaxNode(this.leftChild)
    }
  }







}



const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 
