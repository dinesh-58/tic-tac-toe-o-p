class Tile{
    id;
    row; // index starting from 0
    col; // index starting from 0
    symbol = "";
    domNode; //? idk
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    // TODO: add game over after all tiles filled. disable changing tile after initialized?
    // TODO: game over alert doesn't appear sometimes
    checkGameOver() {
        let isHorizontalSame = false, isVerticalSame = false, isDiagonalSame = false;
        // because value of "this" changes inside functions (that aren't methods)
        const currentTile = this;
        // check horizontal
        isHorizontalSame = tiles[this.row].every(tile => currentTile.symbol == tile.symbol);

        // check vertical
        isVerticalSame = tiles.map(row => row[currentTile.col]).every(tile => currentTile.symbol == tile.symbol);
        // check diagonal
        if (this.col == this.row) {
            isDiagonalSame = tiles.map((row, i) => row[i]).every(tile => currentTile.symbol == tile.symbol);
        }
        return isHorizontalSame || isVerticalSame || isDiagonalSame;
    }
}

class Board {
    // NOTE: must be inside Board class because after entering X, the turn is for 0
    currentSymbol = "X";

    toggleCurrentSymbol() {
        this.currentSymbol = this.currentSymbol == "X" ? "O" : "X";
        // similar to toggle boolean logic
    }
}

const tiles = [[], [], []];
const board = new Board();

// TODO: rewrite to attach onclick only to table instead of all tiles?
    // possible due to event delegation
// NOTE: could use data attribute w/ "dataset" DOM property on event.target
// for row & col number
document.querySelectorAll("#board tr").forEach((row, rNum) => {
    row.querySelectorAll("td").forEach((tile, cNum) => {
        
        tiles[rNum][cNum] = new Tile(rNum, cNum);
        tile.onclick = () => {
            tiles[rNum][cNum].symbol = board.currentSymbol;
            tile.innerText = tiles[rNum][cNum].symbol;
            board.toggleCurrentSymbol(); 

            if(tiles[rNum][cNum].checkGameOver()) alert("Game over");
        }
    })
})
