const board = document.getElementById("board");
const winnerMessage = document.getElementById("winner");

let currentPlayer = "Sun";
const cells = new Array(9).fill(null);

// إنشاء الخلايا على لوحة اللعب
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => cellClick(i));
    board.appendChild(cell);
}

function cellClick(index) {
    if (!cells[index]) {
        cells[index] = currentPlayer;
        board.children[index].classList.add(currentPlayer);
        currentPlayer = currentPlayer === "Sun" ? "Moon" : "Sun";
        checkWinner();
    }
}

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            winnerMessage.textContent = ` ${cells[a]} Is Win`;
            board.removeEventListener("click", cellClick);
        }
    }
}
