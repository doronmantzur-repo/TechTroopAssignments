let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]


  for (employee of employeesArr) {
    data = (employee.id ?? employee.name);
    if (typeof data === "string") {
      console.log(` ${data} is missing an ID`);
    }
    data = (employee.age ?? employee.name);
    if (typeof data === "string") {
      console.log(` ${data} is missing an age`);
    }
  }