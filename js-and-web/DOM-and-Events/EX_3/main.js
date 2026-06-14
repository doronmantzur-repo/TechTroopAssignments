
let maxBoxes = 9;

const getRandomColor = function() {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
  
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
}

const myContainer = document.getElementById("container");
for (let i = 0; i< maxBoxes; i++){
  const newBox = document.createElement("div")
  newBox.setAttribute("class", "box");
 
  
  newBox.addEventListener("mouseenter", () => {
    newBox.style.backgroundColor = getRandomColor();
  });

  newBox.addEventListener("mouseleave", () => {
    newBox.style.backgroundColor = "";
  });
  myContainer.appendChild(newBox)
}
a