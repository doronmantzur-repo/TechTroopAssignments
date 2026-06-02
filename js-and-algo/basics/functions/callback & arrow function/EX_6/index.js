const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}


const commentOnWeather = (temperature) => {return `It's ${determineWeather(temperature)}`;};

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"
