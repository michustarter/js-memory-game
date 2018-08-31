'use strict'
var controller = function () {
    var startGame = function () {
            var initialNumberOfPieces = view.getInitialNumberOfPieces();

            game.startGame({
                numberOfPieces: initialNumberOfPieces
            });

            view.renderPieces(game.getPieces());

        },

        addPiece = function () {
            return view.addPiece();
        },

        highlightPieces = function () {
            game.determineNumberOfPiecesToLight();

        };

    return {
        'startGame': startGame,
        'addPiece': addPiece

    }
}();

