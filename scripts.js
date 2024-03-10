// Create a Gameboard
const gameboard = (function () {
    const rows = 3;
    const columns = 3;
    let board = [];

    for (let i=0; i<rows; i++) {
        board[i] = [];
        for (let j=0; j<columns; j++) {
            board[i][j] = null;
        }
    }
    
    function getBoard() {
        return board;
    }

    function setCell(row, column, symbol) {
        if (board[row][column] === null) {
            board[row][column] = symbol;
        } else {
            console.log("that space is taken");
        }
        gameboard.checkBoard();
        return gameboard.getBoard();
    }

    function checkBoard() {
        for (let i=0; i<rows; i++) {
            if (board[i][0] !== null && board[i][0]
             === board[i][1] && board[i][1] === board[i][2]) {
            console.log("You win!");}
        }
        for (let j=0; j<columns; j++) {
            if (board[0][j] !== null && board[0][j]
             === board[1][j] && board[1][j] === board[2][j]);
        }
        // Check diagonals
        if (board[0][0] !== null && board[0][0]
            === board[1][1] && board[1][1] === board[2][2]);
    }

    return { getBoard, setCell, checkBoard };
})();

Object.setPrototypeOf(gameboard, createPlayer);

// Create Player factory function

function createPlayer(player, marker) {
    const name = player;
    const symbol = marker;

    return { name, symbol };
}

const game = (function() {
    console.table(gameboard.getBoard())
}());


