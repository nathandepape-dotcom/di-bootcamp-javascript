// Mini-Project : Tic Tac Toe (against the computer, easy & hard levels)
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [6, 4, 2],
];

const cells = [...document.querySelectorAll(".cell")];
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");
const levelSelect = document.getElementById("level");
const symbolButtons = document.querySelectorAll(".symbol-btn");

let board = Array(9).fill(null); // what is in each box
let humanSymbol = null;
let computerSymbol = null;
let gameOver = true;

// Choose X or O -> the computer gets the opposite symbol
symbolButtons.forEach(button => {
  button.addEventListener("click", () => {
    humanSymbol = button.dataset.symbol;
    computerSymbol = humanSymbol === "X" ? "O" : "X";
    symbolButtons.forEach(b => b.classList.toggle("selected", b === button));
    startGame();
  });
});

function startGame() {
  board = Array(9).fill(null);
  gameOver = false;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("win");
  });
  restartBtn.hidden = true;
  message.textContent = `You play ${humanSymbol}. Your turn!`;
}

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const index = Number(cell.id);
    if (gameOver || board[index] !== null) return;

    play(index, humanSymbol);
    if (!gameOver) {
      play(computerMove(), computerSymbol);
    }
  });
});

function play(index, symbol) {
  board[index] = symbol;
  cells[index].textContent = symbol;
  checkOutcome(symbol);
}

// Indexes of all the boxes played by a symbol (using reduce)
const boxesOf = (symbol, b = board) =>
  b.reduce((acc, value, index) => (value === symbol ? [...acc, index] : acc), []);

const emptyBoxes = (b = board) => boxesOf(null, b);

function winningCombo(symbol, b = board) {
  const played = boxesOf(symbol, b);
  return winCombos.find(combo => combo.every(index => played.includes(index)));
}

function checkOutcome(symbol) {
  const combo = winningCombo(symbol);
  if (combo) {
    combo.forEach(index => cells[index].classList.add("win"));
    endGame(symbol === humanSymbol ? "You win! 🎉" : "The computer wins! 🤖");
  } else if (emptyBoxes().length === 0) {
    endGame("Tie game");
  }
}

function endGame(text) {
  gameOver = true;
  message.textContent = text;
  restartBtn.hidden = false;
}

restartBtn.addEventListener("click", startGame);

// ---------- Computer ----------
function computerMove() {
  const free = emptyBoxes();
  if (levelSelect.value === "easy") {
    return free[Math.floor(Math.random() * free.length)];
  }
  return minimax(board, computerSymbol).index; // hard: unbeatable
}

// Minimax: tries every possible move and picks the best one for the computer
function minimax(b, player) {
  if (winningCombo(humanSymbol, b)) return { score: -10 };
  if (winningCombo(computerSymbol, b)) return { score: 10 };
  const free = emptyBoxes(b);
  if (free.length === 0) return { score: 0 };

  const moves = free.map(index => {
    const next = [...b];
    next[index] = player;
    const nextPlayer = player === computerSymbol ? humanSymbol : computerSymbol;
    return { index, score: minimax(next, nextPlayer).score };
  });

  return moves.reduce((best, move) => {
    if (player === computerSymbol) return move.score > best.score ? move : best;
    return move.score < best.score ? move : best;
  });
}
