let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX,playerY
let x;
let y;
let z;
// 2D array
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
      box.style.color = "#b0413e";
    } else {
      box.innerHTML = "X";
      turnO = true;
      box.style.color = "#1c7ed6";
    }
    box.disabled = true;

    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    x = boxes[pattern[0]];
    let pos2Val = boxes[pattern[1]].innerText;
    y = boxes[pattern[1]];
    let pos3Val = boxes[pattern[2]].innerText;
    z = boxes[pattern[2]];

    if ((pos1Val != "" && pos2Val != "", pos3Val != "")) {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("winner");
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", function () {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
});
resetBtn.addEventListener("click", resetGame);

