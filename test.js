const cat = {
  makeNoise: function () {
    console.log(this.noise);
  },
  noise: "Meow!"
};

const dog = {
  makeNoise: cat.makeNoise,
  noise: "Woof!"
};

cat.makeNoise();
dog.makeNoise();
