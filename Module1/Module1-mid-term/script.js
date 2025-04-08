const boardElement = document.getElementById("board");
const clock = document.getElementById("clock");
const historyTable = document.getElementById("history");
const startBtn = document.getElementById("startBtn");

let board = [],
  emptyRow = 3,
  emptyCol = 3;
let timer,
  seconds = 0,
  moveCount = 0,
  gameStarted = false;
let history = [];

const colorMap = [
  "bg-green-100 text-green-500",
  "bg-red-100 text-red-500",
  "bg-blue-100 text-blue-500",
  "bg-purple-100 text-purple-500",
  "bg-yellow-100 text-yellow-500",
  "bg-pink-100 text-pink-500",
  "bg-indigo-100 text-indigo-500",
  "bg-gray-100 text-gray-500",
  "bg-emerald-100 text-emerald-500",
  "bg-amber-100 text-amber-500",
  "bg-lime-100 text-lime-500",
];

function initBoard() {
  board = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 0],
  ];
  emptyRow = 2;
  emptyCol = 3;
}

function renderBoard() {
  boardElement.innerHTML = "";
  board.forEach((row, r) => {
    row.forEach((num, c) => {
      let cell = document.createElement("div");
      cell.className =
        "h-20 w-20 flex items-center justify-center font-bold text-2xl rounded shadow";
      if (num === 0) {
        cell.classList.add("bg-black");
      } else {
        let color = colorMap[(num - 1) % colorMap.length];
        cell.classList.add(...color.split(" "));
        cell.textContent = num;
      }
      boardElement.appendChild(cell);
    });
  });
}

function startTimer() {
  clearInterval(timer);
  seconds = 0;
  timer = setInterval(() => {
    seconds++;
    clock.textContent = formatTime(seconds);
  }, 1000);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60)
    .toString()
    .padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function shuffle() {
  for (let i = 0; i < 100; i++) {
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    let validMoves = dirs.filter(([dr, dc]) => {
      const nr = emptyRow + dr;
      const nc = emptyCol + dc;
      return nr >= 0 && nr < 3 && nc >= 0 && nc < 4;
    });
    const [dr, dc] = validMoves[Math.floor(Math.random() * validMoves.length)];
    moveTile(emptyRow + dr, emptyCol + dc, false);
  }
}

function moveTile(r, c, countMove = true) {
  if (r >= 0 && r < 3 && c >= 0 && c < 4) {
    board[emptyRow][emptyCol] = board[r][c];
    board[r][c] = 0;
    emptyRow = r;
    emptyCol = c;
    if (countMove) moveCount++;
    renderBoard();
    if (checkWin()) endGame();
  }
}

function checkWin() {
  let num = 1;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      if (r === 2 && c === 3) return true;
      if (board[r][c] !== num++) return false;
    }
  }
  return true;
}

function endGame() {
  if (gameStarted && checkWin()) {
    alert("YOU WIN!");
    history.push({
      id: history.length + 1,
      move: moveCount,
      time: clock.textContent,
    });
    renderHistory();
  }
  clearInterval(timer);
  gameStarted = false;

  startBtn.textContent = "Bắt đầu";
  clock.textContent = formatTime(0);
}

function renderHistory() {
  historyTable.innerHTML = "";
  history.forEach((item, index) => {
    historyTable.innerHTML += `
      <tr>
        <td class="border px-4 py-2">${index + 1}</td>
        <td class="border px-4 py-2">${item.move}</td>
        <td class="border px-4 py-2">${item.time}</td>
      </tr>
    `;
  });
}

document.addEventListener("keydown", (e) => {
  if (!gameStarted) return;
  if (
    [
      "w",
      "a",
      "s",
      "d",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ].includes(e.key)
  ) {
    switch (e.key) {
      case "w":
      case "ArrowUp":
        if (emptyRow > 0) moveTile(emptyRow - 1, emptyCol);
        break;
      case "s":
      case "ArrowDown":
        if (emptyRow < 3) moveTile(emptyRow + 1, emptyCol);
        break;
      case "a":
      case "ArrowLeft":
        if (emptyCol > 0) moveTile(emptyRow, emptyCol - 1);
        break;
      case "d":
      case "ArrowRight":
        if (emptyCol < 3) moveTile(emptyRow, emptyCol + 1);
        break;
    }
  }
});
startBtn.addEventListener("click", () => {
  if (!gameStarted) {
    moveCount = 0;
    startTimer();
    console.log("start");
    shuffle();
    gameStarted = true;
    startBtn.textContent = "Kết thúc";
  } else {
    endGame();
  }
});

initBoard();
renderBoard();
