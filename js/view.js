'use strict'

var view = function () {

    var correctGuess = 0,
        initialNumberOfPieces = 4,
        guessFurther = "guess further",
        incorrectGuess = "incorrect guess",
        allGuessedCorrectly = "all guessed correctly",
        infoBox = document.getElementById("info"),
        message = document.createElement("center"),

        displayPieces = function (checkGuessResultCbk, numberToGuess) {
            var i,
                elements,
                initialPiece,
                numberOfPieces;

            elements = document.getElementById("pieces");
            elements.innerHTML = "";
            numberOfPieces = game.getCurrentNumberOfPieces();

            for (i = 0; i < numberOfPieces; i++) {
                initialPiece = document.createElement("div");
                initialPiece.setAttribute("class", "piece");
                initialPiece.setAttribute("id", i.toString());
                initialPiece.addEventListener("click", checkGuessResultCbk);
                elements.appendChild(initialPiece);
            }
            showNumberToGuess(numberToGuess);
        },

        checkGuessResult = function (i, pieces, currentNumberToGuess) {
            var element = document.getElementById(i.toString());

            if (pieces[i].toGuess === true) {
                element.style.backgroundColor = "lawngreen";
                correctGuess++;
                pieces[i].toGuess = false;
                if (currentNumberToGuess === correctGuess) {
                    correctGuess = 0;
                    setTimeout(setAllPiecesToGrey, 1000, pieces);
                    return allGuessedCorrectly;
                }
            } else {
                correctGuess = 0;
                element.style.backgroundColor = "red";
                setTimeout(setPieceToGrey, 1500, i.toString);
                return incorrectGuess;
            }
            return guessFurther;
        },


        gameLost = function (checkCbk) {
            infoBox.innerHTML = "";
            message.setAttribute("class", "message");
            message.innerHTML = "Game lost ! :-(";
            infoBox.appendChild(message);
            displayPieces(checkCbk);
        },

        clearInfo = function () {
            message.innerHTML = "";
            infoBox.appendChild(message);
        },

        showNumberToGuess = function (numberToGuess) {
            var levelInfo = document.getElementById("numberToGuess");
            levelInfo.innerHTML = numberToGuess;
        },

        highlight = function (piecesState) {
            var i,
                element;

            for (i = 0; i < piecesState.length; i++) {
                if (piecesState[i].toGuess === true) {
                    element = document.getElementById(i.toString());
                    element.style.backgroundColor = "dodgerblue";
                }
            }
            setTimeout(setAllPiecesToGrey, 1000, piecesState);
        },

        setAllPiecesToGrey = function (piecesState) {
            var i,
                element;

            for (i = 0; i < piecesState.length; i++) {
                if (piecesState[i].toGuess === true) {
                    element = document.getElementById(i.toString());
                    element.style.backgroundColor = "darkgrey";
                }
            }
        },

        setPieceToGrey = function (id) {
            var element = document.getElementById(id.toString());
            element.style.backgroundColor = "darkgrey";
        },

        getInitialNumberOfPieces = function () {
            return initialNumberOfPieces;
        };

    return {
        'gameLost': gameLost,
        'highlight': highlight,
        'clearInfo': clearInfo,
        'displayPieces': displayPieces,
        'setPieceToGrey': setPieceToGrey,
        'checkGuessResult': checkGuessResult,
        'showNumberToGuess': showNumberToGuess,
        'setAllPiecesToGrey': setAllPiecesToGrey,
        'getInitialNumberOfPieces': getInitialNumberOfPieces
    };
}();