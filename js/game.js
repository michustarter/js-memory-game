'use strict';
var game = (function () {

    var pieces = [],
        currentLevel = 0,
        indexesToGuess = [],
        currentNumberToGuess,
        currentNumberOfPieces = 4,
        initialNumberOfPieces = 4,

        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
            currentLevel = 0;
            getPieces();
        },

        resetPiecesState = function () {
            var i;
            pieces = [];

            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
                pieces[i].toGuess = false;
            }
            return pieces;
        },

        getPieces = function () {
            var i,
                index;
            indexesToGuess = [];
            currentNumberToGuess = getCurrentNumberOfPiecesToGuess();

            resetPiecesState();

            while (indexesToGuess.length < currentNumberToGuess) {
                index = Math.floor((Math.random() * currentNumberOfPieces));
                if (!indexesToGuess.includes(index)) {
                    indexesToGuess.push(index);
                }
            }

            for (i = 0; i < currentNumberOfPieces; i++) {
                if (indexesToGuess.includes(i)) {
                    pieces[i].toGuess = true;
                }
            }
            return pieces;
        },

        getCurrentNumberOfPieces = function () {
            return currentNumberOfPieces;
        },

        getCurrentNumberOfPiecesToGuess = function () {
            currentNumberToGuess = Math.floor(currentNumberOfPieces / 2) - 1;
            return currentNumberToGuess;
        },

        addPiece = function () {
            currentNumberOfPieces++;
            currentLevel++;
            resetPiecesState();
        },

        getCurrentLevel = function () {
            return currentLevel;
        },

        getCurrentPiecesState = function () {
            return pieces;
        },

        getInitialNumberOfPieces = function () {
            return initialNumberOfPieces;
        },

        setInitialNumberOfPieces = function () {
            currentNumberOfPieces = initialNumberOfPieces;
            return currentNumberOfPieces;
        };

    return {
        'addPiece': addPiece,
        'getPieces': getPieces,
        'startGame': startGame,
        'getCurrentLevel': getCurrentLevel,
        'resetPiecesState': resetPiecesState,
        'getCurrentPiecesState': getCurrentPiecesState,
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'getCurrentNumberOfPieces': getCurrentNumberOfPieces,
        'setInitialNumberOfPieces': setInitialNumberOfPieces,
        'getCurrentNumberOfPiecesToGuess': getCurrentNumberOfPiecesToGuess
    }
})();





