
const comparePremetives = function(a, b) {
  return a === b;
};

const compareObjects = function(objA, objB){
  for (let key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
};

const getCompareFunction = function(item) {
  if (typeof item === "object" && item !== null) {
    return compareObjects;
  }
  return comparePremetives;
};


class UniqueArray {
  constructor() {
    this.arr = [];
  }

  add(item) {
    const compareFn = getCompareFunction(item);
    if (!this.exists(item, compareFn)) {
      this.arr.push(item);
    }
  }
  showAll() {
    console.log(this.arr);
  }
  exists(item, compareFn) {
    for (let i = 0; i < this.arr.length; i++) {
      if (compareFn(this.arr[i], item)) {
        return true;
      }
    }
    return false;
  }
  get(index) {
    if (0 <= index && index < this.arr.length) {
      return this.arr[index];
    }
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add({ toy: "toy" });
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.exists("toy", getCompareFunction("toy")); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
