import { getReservationList } from "./model.js";

// UI - presentation logic

function updateResultMsg(message){
  const resultMsg = document.querySelector("#resultMsg");
  const input = document.querySelector("#inputName");
  resultMsg.innerHTML = message;
  input.value = "";
  input.placeholder="Enter item..."

}


// Controller
addEventListener("DOMContentLoaded", () => {

  document.querySelector("#btnCheck").addEventListener("click", () => {
    const input = document.querySelector("#inputName");
    const name = input.value;
    const reservations = getReservationList();
    let message = "";
    if(reservations[name]){
      if(reservations[name].claimed === false){
        message = `Welcome, ${name}`;
      }
      else{
        message = `Hmm, Sorry ${name}, someone already claimed this reservation`
      }
    }
    else
    {
      message = `Sorry ${name}, You have no reservation`;
    }
    updateResultMsg(message);
    
  });
});
