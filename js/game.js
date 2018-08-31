'use strict'
var game = (function () {

    var initialNumberOfPieces = 4,
        currentLevel = 0,
        pieces = [],
        currentNumberOfPieces,

        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
            resetPiecesState();
            currentLevel = 0;
        },

        resetPiecesState = function () {
            var i;

            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
                pieces[i].toGuess = false;
            }
            return pieces;
        },

        getPieces = function () {
            resetPiecesState();
            var i,
                index,
                indexesToGuess = [];
            resetPiecesState(); // czy to nie bd nadmiarowe?
            while (indexesToGuess.length <= getNumberOfPiecesToHighLight()) {
                index = Math.floor((Math.random() * currentNumberOfPieces));
                if (!indexesToGuess.includes(index)) {
                    indexesToGuess.push(index);
                }
            }

            for (i = 0; i < currentNumberOfPieces; i++) {
                if (indexesToGuess.includes(i)) {
                    pieces[i].toGuess = true;
                } //bez else i toGuess=false Bo wcześniej ustawiłem już na false
            }
            return pieces;
        },


        getCurrentNumberOfPieces = function () {
            return currentNumberOfPieces;
        },

        getNumberOfPiecesToHighLight = function () {
            var number = getCurrentNumberOfPieces() - (3 + currentLevel);
            return number;
        },

        addPiece = function () {
            currentNumberOfPieces++;
        }

    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'resetPiecesState': resetPiecesState,
        'getNumberOfPiecesToHighLight': getNumberOfPiecesToHighLight,
        'addPiece': addPiece
    }
})();





