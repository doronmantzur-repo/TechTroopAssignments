const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

for (const prop in dictionary) {
  console.log(`Words that begin with ${prop}:`);
  for (let i = 0; i < dictionary[prop].length; i++) {
    console.log(`  ${dictionary[prop][i]}`);
  }
}
