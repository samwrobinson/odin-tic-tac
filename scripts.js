// Function to create a 3 x 3 grid

const board = (function createBoard() {
    let rows = 3;
    let cols = 3;
    let grid = Array.from({ length: rows }, () => Array(cols).fill(null));

    return grid;
})();

// Create Player Object Constructor
let playerCounter = 0;

function createPlayer(name, marker) {
    playerCounter += 1;

    if (playerCounter === 1) {
        marker = 'X';
    } else {
        marker = 'O';
    }

    return {
        id: playerCounter,
        name: name,
        marker: marker,
        isPlayerOne: playerCounter === 1
    };
}

// Define Player 1 and Player 2
const playerOne = createPlayer("Alice");
const playerTwo = createPlayer("Bob");


