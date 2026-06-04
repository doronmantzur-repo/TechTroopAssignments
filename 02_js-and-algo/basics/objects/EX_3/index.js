
//3
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

let name = 'TED'; 
name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
if (reservations[name]) {
  if (!reservations[name].claimed) {
    console.log(`Welcome, ${name}`);
    reservations[name].claimed = true; 
  } else {
    console.log("Someone already claimed this reservation");
  }
} else {
  reservations[name] = { claimed: true };
  console.log(reservations);
}



