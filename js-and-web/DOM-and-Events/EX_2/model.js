const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

export function getReservationList() {
  return reservations;
}