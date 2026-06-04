
p1 = {name: "Alice", age: 30, city: "New York"}
p2 = {name: "Dan", age: 44, city: "Toronto"}

if (p1.age === p2.age) {
  console.log(`Both ${p1.name} and ${p2.name} are the same age`);
} else {
  console.log(`${p1.name} and ${p2.name} have different ages`);
}

if (p1.city === p2.city) {
  console.log(`Both ${p1.name} wanted to date ${p2.name}`);
} else {
  console.log(`${p1.name} wanted to date ${p2.name} but couldn't`);
}

