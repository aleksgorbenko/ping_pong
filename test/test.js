var chai = require('chai');
var $ = require('jquery');
var fs = require('fs');

// 1. 'fs' will be used to load the index.html file and manipualte
// the objects on it
// 2. 'jquery' will be used to call jquery functions within the tests
// 3. 'chai' to use the assertions from this library, e.g chai.expect

describe('add a game button', function() {
  it('should add the game to the "latest-games" div', function() {
    // adds a predefined game fixture and checks the length
    // of the '.game' children of the '.latest-game' div has
    // incremented by 1. If I would be using index.html as a
    // boilerplate, the length should be 4.
  });


  it('should NOT add the game if player1 and player2 are the same', function() {
    // asserts if the alert has "A player cannot play against
    // himself. Please choose different players." message if both
    // selected players are the same.
  });

  it('should NOT add the game if either of players is not choosen', function() {
    // asserts if the alert has "Please choose a player" message
    // if one of the players is not selected.
  });
});

describe('trash icon button', function() {
  it('should remove the selected game', function() {
    // removes one game and and checks the length
    // of the '.game' children of the '.latest-game' div has
    // decremented by 1. If I would be using index.html as a
    // boilerplate, the length should be 2.
  });
});

describe('game function', function() {
  it('should return >= 2 and < 6 scores', function() {
    // runs the 'game' function to generate the scores and checks
    // if the length of the 'scores' array is between 2 and 6.
  });
});
