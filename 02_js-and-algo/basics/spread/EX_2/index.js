var firstPiece = { id: 101, name: 'Ofri' }
var seoncdPiece = { country: 'Israel'}

var combinedPiece = { ...firstPiece, ...seoncdPiece }
console.log(combinedPiece)