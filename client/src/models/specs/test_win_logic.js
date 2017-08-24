var assert = require("assert");
var gameLogic = require("../gameLogic.js");

describe("Game logic", function() {

  it("should test a row wins with X", function() {
    const testArray = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
    assert.equal(gameLogic(testArray), "X Wins");
  }),

  it("should test a row wins with O", function() {
    const testArray = [[" ", " ", " "], ["O", "O", "O"], [" ", " ", " "]];
    assert.equal(gameLogic(testArray), "O Wins");
  }),

  it("should test a column wins with X", function() {
    const testArray = [["X", " ", " "], ["X", " ", " "], ["X", " ", " "]];
    assert.equal(gameLogic(testArray), "X Wins");
  }),

  it("should test a column wins with O", function() {
    const testArray = [[" ", " ", "O"], [" ", " ", "O"], [" ", " ", "O"]];
    assert.equal(gameLogic(testArray), "O Wins");
  }), 

  it("should test a diagonal win with O", function() {
    const testArray = [["O", " ", " "], [" ", "O", " "], [" ", " ", "O"]];
    assert.equal(gameLogic(testArray), "O Wins");
  }), 

  it("should test a diagonal win with X", function() {
    const testArray = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
    assert.equal(gameLogic(testArray), "X Wins");
  }), 

  it("should test a reverse diagonal win with X", function() {
    const testArray = [[" ", " ", "X"], [" ", "X", " "], ["X", " ", " "]];
    assert.equal(gameLogic(testArray), "X Wins");
  }),

  it("should test a reverse diagonal win with O", function() {
    const testArray = [[" ", " ", "O"], [" ", "O", " "], ["O", " ", " "]];
    assert.equal(gameLogic(testArray), "O Wins");
  }),

  it("should test a draw", function() {
    const testArray = [["X", "X", "O"], 
                      ["O", "O", "X"], 
                      ["X", "O", "X"]];
    assert.equal(gameLogic(testArray), "Draw");
  })

})