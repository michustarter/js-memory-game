describe('Game', function () {
    it('should have 4 pieces after game start', function () {
        var pieces;
        //zwracam 4
        game.startGame();

        pieces= game.resetPiecesState()

        expect(pieces.length).toBe(4);
    });

    it('one pieces should be to guess after game start', function () {
        var piecesToGuess;
        game.startGame();

        piecesToGuess = findPiecesToGuess(game.resetPiecesState());
        //getPieces());
        /*moze to byc 1 lub kafelków
               wiecej do zgadniecia */

        expect(piecesToGuess.length).toBe(1);
    });

    it('should start game with configured number of pieces', function () {
        var pieces,
            config = {
                numberOfPieces: 6
            };
        game.startGame(config);

        pieces = game.getPieces();

        expect(pieces.length).toBe(6);
    });

    //ogolna dekl funkcji, spr w tescie jak to jest
    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) { /* jak for each w javie, patrzec
        na to jak nawiasy sie zamykają */
            return piece.toGuess;
        });
    }
});
