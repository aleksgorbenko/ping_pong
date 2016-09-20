$(function() {
    // Removes the game from the page
    $('.latest-games').on('click', '.glyphicon-trash', function removeGame() {
        var input = confirm('Are you sure you want this game removed?"]');
        if (input === true) {
            $(this).parent('.game').remove();
        } else {
            return;
        }
    });

    // Adds a game with random scores.
    // Alerts if the player is not chosen or
    // the same player is chosen on both sides
    $('.add-games .btn').click(function() {
        var playerOne = $('.player-choice-one option:selected').text();
        var playerTwo = $('.player-choice-two option:selected').text();

        var result = game(playerOne, playerTwo);

        if (playerOne === 'Look for player' || playerTwo === 'Look for player') {
            return alert('Please choose a player');
        } else if (playerOne === playerTwo) {
            return alert('A player cannot play against himself. Please choose different players.');
        } else {
            $('.latest-games').append(gameHtml(result));
            if (result.firstPlayer.wins > result.secondPlayer.wins) {
                $('.player-one:last').before('<div class="winner-circle"></div>');
            } else if (result.firstPlayer.wins === result.secondPlayer.wins) {
                return;
            } else {
                $('.player-two:last').after('<div class="winner-circle"></div>');
            }
        }
    });
});

// Creates a string with all games scores
// to be apended for final game HTML
// component
function gameHtml(result) {
    function scores() {
        var scoreList = '';
        var gameScores = result.scores.length - 1;
        for (var i = 0; i <= gameScores; i++) {
            if (i === gameScores) {
                scoreList += result.scores[i];
            } else {
                scoreList += result.scores[i] + ' | ';
            }
        }
        return scoreList;
    }
    return '<div class="game text-center col-xs-12 col-md-10 col-md-offset-1">' +
        '<i class="glyphicon glyphicon-user player-one"></i>' +
        '<span class="player-names">' +
        result.firstPlayer.name + ' ' + result.firstPlayer.wins +
        ' - ' +
        result.secondPlayer.wins + ' ' + result.secondPlayer.name +
        '</span>' +
        '<i class="glyphicon glyphicon-user player-two"></i>' +
        '<i class="glyphicon glyphicon-trash pull-right"></i>' +
        '<br>' +
        '<span class="scores">' +
        scores(); +
    '</span>' +
    '</div>';
}

// Loop for the ping-pong game to generate
// random scores and return as an object
function game(playerOne, playerTwo) {
    var games = {
        p1: {
            points: 0,
            wins: 0,
            name: playerOne
        },
        p2: {
            points: 0,
            wins: 0,
            name: playerTwo
        },
        scores: []
    };

    var numberOfGames = Math.floor(Math.random() * 5 + 2);

    while (games.p1.wins + games.p2.wins < numberOfGames) {
        checkForWinner(games.p1, games.p2, games.scores);
        var playWinner = Math.floor(Math.random() * 2 + 1);

        if (playWinner === 1) {
            games.p1.points++;
        } else {
            games.p2.points++;
        }
    }
    return {
        firstPlayer: games.p1,
        secondPlayer: games.p2,
        scores: games.scores
    };
}

// Checks for winner. Used in game function
// after every loop
function checkForWinner(firstPlayer, secondPlayer, scores) {
    if (firstPlayer.points === 6 && secondPlayer.points === 0) {
        firstPlayer.wins++;
        resetGame(firstPlayer, secondPlayer, scores);
        return;
    } else if (secondPlayer.points === 6 && firstPlayer.points === 0) {
        secondPlayer.wins++;
        resetGame(firstPlayer, secondPlayer, scores);
        return;
    } else if (firstPlayer.points > 10 &&
        firstPlayer.points - secondPlayer.points >= 2) {
        firstPlayer.wins++;
        resetGame(firstPlayer, secondPlayer, scores);
        return;
    } else if (secondPlayer.points > 10 &&
        secondPlayer.points - firstPlayer.points >= 2) {
        secondPlayer.wins++;
        resetGame(firstPlayer, secondPlayer, scores);
        return;
    }
    return;
}

// Resets the game after the winner is
// established and records the last games' results
function resetGame(firstPlayer, secondPlayer, scores) {
    scores.push(firstPlayer.points + '-' + secondPlayer.points);
    firstPlayer.points = 0;
    secondPlayer.points = 0;
}