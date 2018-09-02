'use strict'
var controller = function () {
    var startGame = function () {
            var initialNumberOfPieces = game.getInitialNumberOfPieces();

            game.startGame({
                numberOfPieces: initialNumberOfPieces
            });

            view.displayPieces();
            view.highlight();

        },

        addPiece = function () {
            game.addPiece();
            view.displayPieces();
            /*  game.getPieces(); - to wewnątrz view.highlight jest robione, - ale
             gdzie będzie losowe ustawianie do zgadywania?*/
            view.highlight();
        },

        highlight = function () {
        game.getPieces();
        view.highlight();
        };

    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'highlight': highlight
    }
}();

