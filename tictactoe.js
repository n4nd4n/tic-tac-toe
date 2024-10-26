let btns = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset1");
let move = "X";
let gameOver = false;
let board = Array(9).fill("");

// Function to check for a win
function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

// Function to handle button click
function handleClick(index) {
  if (!gameOver && !board[index]) {
    board[index] = move;
    btns[index].innerText = move;
    let winner = checkWin();
    if (winner) {
      alert(`${winner} wins!`);
      gameOver = true;
    } else if (board.every(cell => cell)) {
      alert("It's a draw!");
      gameOver = true;
    } else {
      move = move === "X" ? "O" : "X"; // Toggle between X and O
    }
  }
}

// Add event listeners to each button
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => handleClick(index));
});

// Reset the game
reset.addEventListener("click", () => {
  board.fill("");
  btns.forEach(btn => (btn.innerText = ""));
  move = "X";
  gameOver = false;
});
