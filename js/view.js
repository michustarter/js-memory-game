'use strict'
var view = function () {

    var correctClick = 0,
        initialNumberOfPieces=4,
        guessFurther="guess further",
        incorrectGuess="incorrect guess",
        allGuessedCorrectly="all guessed correctly",
        infoElement = document.getElementById("info"),

        displayPieces = function (checkGuessResultCbk) {
            var i,
                elements,
                initialPiece,
                numberOfPieces = game.getCurrentNumberOfPieces(),
            elements = document.getElementById("pieces");

            elements.innerHTML = "";

            for (i = 0; i < numberOfPieces; i++) {
                initialPiece = document.createElement("div");
                initialPiece.setAttribute("class", "piece");
                initialPiece.setAttribute("id", i.toString());
                initialPiece.addEventListener("click", checkGuessResultCbk);
                elements.appendChild(initialPiece);
            }
        },

        checkGuessResult = function (i, pieces, currentNumberToGuess) {
            var element = document.getElementById(i.toString());

            if (pieces[i].toGuess === true) {
                element.style.backgroundColor = "lawngreen";
                correctClick++;
                if (currentNumberToGuess === correctClick) {
                    correctClick = 0;
                    setTimeout(setAllPiecesToGrey, 1000, pieces);
                    return allGuessedCorrectly;
                }
            } else {
                correctClick = 0;
                element.style.backgroundColor = "red";
                setTimeout(setPieceToGrey, 1000,i.toString());
                return incorrectGuess;
            }
            return guessFurther;
        },



        gameLost = function (checkCbk) {
            var information = document.createElement("center");
            infoElement.innerHTML = "";
            information.setAttribute("class", "information");
            information.innerHTML = "Game lost ! :-(";
            infoElement.appendChild(information);
             displayPieces(checkCbk);
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

        getInitialNumberOfPieces=function () {
            return initialNumberOfPieces;
        };

    return {
        'gameLost': gameLost,
        'highlight': highlight,
        'displayPieces': displayPieces,
        'setPieceToGrey': setPieceToGrey,
        'checkGuessResult': checkGuessResult,
        'setAllPiecesToGrey': setAllPiecesToGrey,
        'getInitialNumberOfPieces': getInitialNumberOfPieces
    };
}();


