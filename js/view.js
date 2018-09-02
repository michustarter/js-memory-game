'use strict'

var view = function () {
    var correctClick = 0,
        infoElement = document.getElementById("info"),
        addedIndex = game.getInitialNumberOfPieces(),


        displayPieces = function () {
            var i,
                numberOfPieces = game.getCurrentNumberOfPieces(),
                initialPiece,
                elements;

            elements = document.getElementById("pieces");
            elements.innerHTML = "";

            for (i = 0; i < numberOfPieces; i++) {
                initialPiece = document.createElement("div");
                initialPiece.setAttribute("class", "piece");
                initialPiece.setAttribute("id", i.toString());
                initialPiece.setAttribute("onclick", "view.checkGuessResult(" + i + ")");
                elements.appendChild(initialPiece);
            }
        },

        checkGuessResult = function (i) {
            var pieces = game.getCurrentPiecesState(),
                currentNumberToGuess = game.getCurrentNumberOfPiecesToGuess(),
                //jak błędy będą - to dać i.toString()...
                element = document.getElementById(i.toString());

            if (pieces[i].toGuess === true) {
                element.style.backgroundColor = "forestgreen";
                correctClick++;
                if (currentNumberToGuess === correctClick) {
                    setTimeout(setAllPiecesToGray(), 1000);
                    setTimeout(startNextLevel(), 1500);
                }
            } else {
                correctClick = 0;
                element.style.backgroundColor = "red";
                setTimeout(setPieceToGray(i), 1000);
                setTimeout(gameLost(), 1500);
            }
        },

        startNextLevel = function () {
            game.addPiece(); //zwiększam level tutaj wewnątrz
            game.getPieces();
            displayPieces();
            highlight();
        },

        gameLost = function () {
            //  var element = document.getElementById("info");
            var information = document.createElement("center");
            infoElement.innerHTML = "";
            information.setAttribute("class", "information");
            information.innerHTML = "Game lost ! :-(";
            infoElement.appendChild(information);
            game.setInitialNumberOfPieces();
            displayPieces();
            // chyba tu nie daje displayPieces bo u mnie nie ma onload jak u N, tylko startGame musze nacisnąć..
        },

        addPiece = function () {
            var piece,
                element = document.getElementById("pieces");
            //  alert("ffff");
            piece = document.createElement("div");
            piece.setAttribute("id", "piece");
            piece.setAttribute("onclick", "controller.highlightPieces()");
            piece.setAttribute("number", addedIndex.toString());
            element.appendChild(piece);
            addedIndex++;
        },

        highlight = function () {
            //lub dać (pieces) a w controllerze game.getCurrentPiecesState...?
            var i,
                element,
                pieces = game.getCurrentPiecesState();

            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    element = document.getElementById(i.toString());
                    element.style.backgroundColor = "blue";
                }
            }
            setTimeout(setAllPiecesToGray(), 2000);
        },

        setAllPiecesToGray = function () {
            var i,
                element,
                pieces = game.getCurrentPiecesState();

            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    element = document.getElementById(i.toString());
                    element.style.backgroundColor = "grey";
                }
            }
        },

        setPieceToGray = function (id) {
            var element = document.getElementById(id.toString());
            element.style.backgroundColor = "grey";
        },

        getInitialNumberOfPieces=function () {
            return 4;
        }


    return {
        'displayPieces': displayPieces,
        'addPiece': addPiece,
        'checkGuessResult': checkGuessResult,
        'gameLost': gameLost,
        'startNextLevel': startNextLevel,
        'highlight': highlight,
        'setAllPiecesToGray': setAllPiecesToGray,
        'setPieceToGray': setPieceToGray,
        'getInitialNumberOfPieces': getInitialNumberOfPieces
    };
}();


