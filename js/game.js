'use strict'
var game = (function () {

    var initialNumberOfPieces = 4,
        currentLevel = 0,
        pieces = [],
        indexesToGuess = [],
        currentNumberToGuess,
        currentNumberOfPieces, //to jest = pieces.length - wybrać 1 lub 2,
        // żeby potem w currentNOP nie zapomnieć o +- 1 gdzieś


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
            currentNumberOfPieces = getCurrentNumberOfPieces();

            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
                pieces[i].toGuess = false;
            }
            return pieces;
        },

        getPieces = function () {
            var i,
                index;
            indexesToGuess = [],
                currentNumberOfPieces = getCurrentNumberOfPieces(),
                currentNumberToGuess = getCurrentNumberOfPiecesToGuess();

            resetPiecesState(); // czy to nie bd nadmiarowe?

            while (indexesToGuess.length <= currentNumberToGuess) {
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
            //currentNumberOfPieces = currentNumberOfPieces;//pieces.length;
            return currentNumberOfPieces;
        },

        getCurrentNumberOfPiecesToGuess = function () {
            currentNumberToGuess = getCurrentNumberOfPieces() - (3 + getCurrentLevel());
            return currentNumberToGuess;
        },

        addPiece = function () {
            currentNumberOfPieces = getCurrentNumberOfPieces() + 1;
            currentLevel = getCurrentLevel() + 1;
            resetPiecesState();
        },
        getCurrentLevel = function () {
            return currentLevel;
        },
        setCurrentLevel = function (newLevel) { /* spr czy to wykorzystam gdzieś, czy potrzebne */

            currentLevel = newLevel;
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
        'startGame': startGame,
        'getPieces': getPieces,
        'resetPiecesState': resetPiecesState,
        'getCurrentNumberOfPiecesToGuess': getCurrentNumberOfPiecesToGuess,
        'addPiece': addPiece,
        'getCurrentLevel': getCurrentLevel,
        'setCurrentLevel': setCurrentLevel,
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'getCurrentNumberOfPieces': getCurrentNumberOfPieces,
        'setInitialNumberOfPieces': setInitialNumberOfPieces,
        'getCurrentPiecesState': getCurrentPiecesState
    }
})();





