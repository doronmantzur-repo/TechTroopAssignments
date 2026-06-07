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
}

const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
const bSTree = new BSNode(letters[0]);
for (let i = 1; i < letters.length; i++) {
  bSTree.insertNode(letters[i]);
}

console.log(bSTree.findCommonParent("B", "I")); //should return "H"
console.log(bSTree.findCommonParent("B", "G")); //should return "E"
console.log(bSTree.findCommonParent("B", "L")); //should return "J"
console.log(bSTree.findCommonParent("L", "Y")); //should return "R"
console.log(bSTree.findCommonParent("E", "H")); //should return "J"
