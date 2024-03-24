class Tile{
    id;
    symbol = "";
    domNode; //? idk
    /*
    constructor(id) {
        this.id = id;
    }
    */
    toggleCurrentSymbol() {
        this.symbol = this.symbol == "X" ? "O" : "X";
        // similary to toggle boolean logic
    }
}

class Board {
}

const tiles = [[], [], []];
document.querySelectorAll("#board tr").forEach((row, rNum) => {
    row.querySelectorAll("td").forEach((col, cNum) => {
        // NOTE: could use data attribute w/ "dataset" DOM property for row & col number as well
        
        tiles[rNum][cNum] = new Tile();
        col.onclick = () => {
            tiles[rNum][cNum].toggleCurrentSymbol(); 
            col.innerText = tiles[rNum][cNum].symbol;

            // TODO: check game over condition
        }
    })
})
/*
document.querySelectorAll("#board td").forEach((x, i) => {
    x.onclick = () => {
        tiles[i].toggleCurrentSymbol();
        x.innerText = tiles[i].symbol;

    }
});
*/
