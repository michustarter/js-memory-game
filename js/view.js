'use strict'

var view = function () {
    var piecesDiv,
        currentPiecesNumber = 0,
        piecesList,

        initPieces = function () {
            piecesDiv = document.getElementById("pieces");
        },

        renderPieces = function () {
            var i,
                initialPiece,
                elements;

            elements = document.getElementById("pieces");
            if (currentPiecesNumber == 0) {
                for (i = 0; i < getInitialNumberOfPieces(); i++) {
                    var j = 0;
                    initialPiece = document.createElement("div");
                    initialPiece.setAttribute("id", "piece");
                    initialPiece.setAttribute("number", j);
                    elements.appendChild(initialPiece);
                    j++;
                }
                currentPiecesNumber = getInitialNumberOfPieces();
            }
        },

        addPiece = function () {
            var i = getInitialNumberOfPieces(),
                piece,
                element = document.getElementById("pieces");
            //  alert("ffff");
            piece = document.createElement("div");

            piece.setAttribute("id", "piece");
            piece.setAttribute("onclick", "controller.highlightPieces()");
            piece.setAttribute("number", i);
            element.appendChild(piece);
            i=i+1;
        },
        getInitialNumberOfPieces = function () {
            //dom
            return 4;
        },
        changeColor = function (pieceId) {
            var element = document.getElementById(pieceId);
            element.style.backgroundColor = "yellow";
            setTimeout(function () {
                element.style.backgroundColor = "black"
            }, 3000);
            // element.style.backgroundColor="yellow";

        }


    return {
        'initPieces': initPieces,
        'renderPieces': renderPieces,
        'addPiece': addPiece,
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'changeColor': changeColor
    };
}();


