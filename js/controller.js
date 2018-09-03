'use strict'

var controller = function () {

    var startGame = function (numberOfPieces) {
            var initialNumberOfPieces = view.getInitialNumberOfPieces();
            if (numberOfPieces) {
                game.startGame({
                    numberOfPieces: numberOfPieces
                })
            } else {
                game.startGame({
                    numberOfPieces: initialNumberOfPieces
                })
            }
            view.displayPieces(checkGuessResult, game.getCurrentNumberOfPiecesToGuess());
            view.highlight(game.getCurrentPiecesState());
        },

        addPiece = function () {
            game.addPiece();
            view.displayPieces(checkGuessResult, game.getCurrentNumberOfPiecesToGuess());
            view.highlight(game.getCurrentPiecesState());
        },

        checkGuessResult = function (event) {
            var pieces = game.getCurrentPiecesState(),
                currentNumberToGuess = game.getCurrentNumberOfPiecesToGuess(),
                guessResult = view.checkGuessResult(event.target.id, pieces, currentNumberToGuess);

            if (guessResult === "all guessed correctly") {
                setTimeout(startNextLevel, 1500);
            } else if (guessResult === "incorrect guess") {
                view.gameLost(checkGuessResult);
                setTimeout(view.clearInfo, 1000);
                game.setInitialNumberOfPieces();
                setTimeout(startGame, 1500);
            }
        },

        startNextLevel = function () {
            game.addPiece();
            game.getPieces();
            view.displayPieces(checkGuessResult, game.getCurrentNumberOfPiecesToGuess());
            view.highlight(game.getCurrentPiecesState());
        },

        highlight = function () {
            game.getPieces();
            view.highlight(game.getCurrentPiecesState());
        };

    return {
        'addPiece': addPiece,
        'highlight': highlight,
        'startGame': startGame,
        'startNextLevel': startNextLevel,
        'checkGuessResult': checkGuessResult
    };
}();