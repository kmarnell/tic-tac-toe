
var Board = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
};

var winCombos = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7] ]; 

function printBoard() {
  console.log('\n' +
      ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
      ' ---------\n' +
      ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
      ' ---------\n' +
      ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}

function markBoard(position, play) {
  board[position] = play;
};

function checkWin(player) {
  //check to see if the player has one of the win combos

};

function announceTurn(player) {
  console.log("It's your turn player " + player);
}