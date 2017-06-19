//add dependencies 
//const expect = require('chai').expect;


describe('Board', function() {
  it('consists of a 3 x 3 grid', function() { 
    var board = new Board;
    expect(board.board[0].size).to.equal(3);
  })
});
