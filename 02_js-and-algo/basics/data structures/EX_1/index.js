class UniqueArray {
  constructor() {
    this.arr = [];
  }

  add(item) {
    if (!this.exists(item)) {
      this.arr.push(item);
    }
  }
  showAll() {
    console.log(this.arr);
  }
  exists(item) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === item) {
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
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.exists("toy"); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
