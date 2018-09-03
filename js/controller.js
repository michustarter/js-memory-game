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
            view.displayPieces(checkGuessResult);
            view.highlight(game.getCurrentPiecesState());
        },

        addPiece = function () {
            game.addPiece();
            view.displayPieces(checkGuessResult);
            view.highlight(game.getCurrentPiecesState());
        },

        checkGuessResult = function (event) {
            var pieces = game.getCurrentPiecesState(),
                currentNumberToGuess = game.getCurrentNumberOfPiecesToGuess(),
                result = view.checkGuessResult(event.target.id, pieces, currentNumberToGuess);
            if (result === "all guessed correctly") {
                setTimeout(startNextLevel, 1500);
            } else if (result === "incorrect guess") {
                setTimeout(view.gameLost, 1500, checkGuessResult);
                game.setInitialNumberOfPieces();

            }
        },

        startNextLevel = function () {
            game.addPiece();
            game.getPieces();
            view.displayPieces(checkGuessResult);
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
    }
}();

