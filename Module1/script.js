// JS logic sẽ được đặt ở đây (theo file script đầy đủ đã gửi bạn)
// Thêm render board, shuffle, move, timer...
const board = document.querySelector(".board");
const tiles = Array.from(board.children);
const startBtn = document.querySelector(".btn-start");
const timerEl = document.querySelector(".clock span");
const tableBody = document.querySelector("table tbody");

let time = 0;
let timer;
let isPlaying = false;
let steps = 0;
let history = [];
const size = 4;
let emptyIndex = 11; // Vị trí ô đen ban đầu
let tileOrder = [...Array(11).keys()].map((x) => x + 1).concat([""]); // Mảng 1 -> 11 và ô đen

// Bắt đầu / Kết thúc game
startBtn.addEventListener("click", () => {
  if (!isPlaying) {
    startGame();
  } else {
    stopGame();
  }
});

function startGame() {
  steps = 0;
  isPlaying = true;
  startBtn.textContent = "Kết thúc";
  shuffle();
  renderBoard();
  resetTimer();
  timer = setInterval(updateTimer, 1000);
}

function stopGame() {
  isPlaying = false;
  startBtn.textContent = "Bắt đầu";
  clearInterval(timer);
  resetTimer();
}

function resetTimer() {
  time = 0;
  timerEl.textContent = "00:00";
}

function updateTimer() {
  time++;
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  timerEl.textContent = `${minutes}:${seconds}`;
}

function shuffle() {
  // Fisher-Yates shuffle 100 lần
  for (let i = 0; i < 100; i++) {
    const possibleMoves = getMovableIndexes();
    const randIdx = Math.floor(Math.random() * possibleMoves.length);
    swap(emptyIndex, possibleMoves[randIdx]);
  }
}

function renderBoard() {
  board.innerHTML = "";
  tileOrder.forEach((val, index) => {
    const div = document.createElement("div");
    div.classList.add("tile");
    if (val === "") {
      div.classList.add("empty", "bg-black");
      emptyIndex = index;
    } else {
      div.textContent = val;
      applyColor(div, val);
    }
    board.appendChild(div);
  });
}

function applyColor(div, val) {
  const colors = [
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
  div.className += " " + colors[val - 1];
}

document.addEventListener("keydown", (e) => {
  if (!isPlaying) return;
  const key = e.key.toLowerCase();
  let moved = false;
  switch (key) {
    case "w":
    case "arrowup":
      moved = move(-size);
      break;
    case "s":
    case "arrowdown":
      moved = move(size);
      break;
    case "a":
    case "arrowleft":
      if (emptyIndex % size !== size - 1) moved = move(1);
      break;
    case "d":
    case "arrowright":
      if (emptyIndex % size !== 0) moved = move(-1);
      break;
  }
  if (moved) {
    steps++;
    renderBoard();
    checkWin();
  }
});

function getMovableIndexes() {
  const moves = [];
  if (emptyIndex - size >= 0) moves.push(emptyIndex - size);
  if (emptyIndex + size < size * size) moves.push(emptyIndex + size);
  if (emptyIndex % size !== 0) moves.push(emptyIndex - 1);
  if (emptyIndex % size !== size - 1) moves.push(emptyIndex + 1);
  return moves;
}

function move(offset) {
  const targetIndex = emptyIndex + offset;
  if (targetIndex < 0 || targetIndex >= size * size) return false;
  if (
    Math.abs(offset) === 1 &&
    Math.floor(emptyIndex / size) !== Math.floor(targetIndex / size)
  )
    return false;
  swap(emptyIndex, targetIndex);
  emptyIndex = targetIndex;
  return true;
}

function swap(i, j) {
  [tileOrder[i], tileOrder[j]] = [tileOrder[j], tileOrder[i]];
}

function checkWin() {
  const correct = [...Array(11).keys()].map((x) => x + 1).concat([""]);
  const isWin = tileOrder.every((val, idx) => val === correct[idx]);
  if (isWin) {
    clearInterval(timer);
    isPlaying = false;
    alert("YOU WIN!");
    saveHistory();
    startBtn.textContent = "Chơi lại";
  }
}

function saveHistory() {
  const playTime = timerEl.textContent;
  const row = document.createElement("tr");
  row.innerHTML = `<td>${
    history.length + 1
  }</td><td>${steps}</td><td>${playTime}</td>`;
  tableBody.appendChild(row);
  history.push({ steps, time: playTime });
}
