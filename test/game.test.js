describe('Game', function () {
    it('should have 4 pieces after game start', function () {
        var pieces;
        game.startGame();

        pieces = game.resetPiecesState()

        expect(pieces.length).toBe(4);
    });

    it('one pieces should be to guess after game start', function () {
        var piecesToGuess;
        game.startGame();

        piecesToGuess = findPiecesToGuess(game.getPieces());

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

    it('0 pieces should be to guess after reset pieces state', function () {
        var piecesToGuess;
        game.startGame();

        piecesToGuess = findPiecesToGuess(game.resetPiecesState());

        expect(piecesToGuess.length).toBe(0);
    });

    it('3 pieces should be to guess if game start with 8 pieces', function () {
        var piecesToGuess,
            config = {
                numberOfPieces: 8
            };
        game.startGame(config);

        piecesToGuess = findPiecesToGuess(game.getPieces());

        expect(piecesToGuess.length).toBe(3);
    });

    it('5 pieces should be return by function getCurrentNumberOfPieces', function () {
        var numberOfPieces,
            config = {
                numberOfPieces: 5
            };
        game.startGame(config);

        numberOfPieces = game.getCurrentNumberOfPieces();

        expect(numberOfPieces).toBe(5);
    });

    it('4 pieces to guess should be returned if current number of pieces is 10', function () {
        var piecesToGuess,
            config = {
                numberOfPieces: 10
            };
        game.startGame(config);

        piecesToGuess = game.getCurrentNumberOfPiecesToGuess();

        expect(piecesToGuess).toBe(4);
    });

    it('should be 5 pieces after added 1 piece', function () {
        var pieces,
            config = {
                numberOfPieces: 4
            };
        game.startGame(config);

        game.addPiece();
        pieces = game.getCurrentNumberOfPieces();

        expect(pieces).toBe(5);
    });

    it('should level equals 1 after added 1 piece to initial state', function () {
        var level,
            config = {
                numberOfPieces: 4
            };
        game.startGame(config);

        game.addPiece();
        level = game.getCurrentLevel();

        expect(level).toBe(1);

    });

    it('should return current pieces state with 7 pieces when number of pieces equals 7', function () {
        var pieces,
            config = {
                numberOfPieces: 7
            };
        game.startGame(config);

        pieces = game.getCurrentPiecesState();

        expect(pieces.length).toBe(7);

    });

    it('should return 4 as initial number of pieces after game start', function () {
        var config,
            initialNumberOfPieces;
        game.startGame(config);

        initialNumberOfPieces = game.getInitialNumberOfPieces();

        expect(initialNumberOfPieces).toBe(4);

    });
    it('should set current number of pieces from 7 to 4 as an initial number of pieces', function () {
        var initialNumber,
            config = {
                numberOfPieces: 7
            };
        game.startGame(config);

        initialNumber = game.setInitialNumberOfPieces();

        expect(initialNumber).toBe(4);
    });

    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;
        });
    };
});