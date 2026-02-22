let boxes = document.querySelectorAll(".cell");
let restartBtn = document.querySelector(".restart-btn");
let msg= document.querySelector(".msgcontainer");
let turnX = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((cell) => {
    cell.addEventListener("click", () => {
        if(turnX) {
            cell.textContent = "X";
            turnX = false;
        } else {
            cell.textContent = "O";
            turnX = true;
        }
        cell.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let condition of winningConditions) {
        const [a, b, c] = condition;
        if(boxes[a].textContent != "" && boxes[b].textContent != "" && boxes[c].textContent != "" ) {
          if(boxes[b].textContent===boxes[c].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
            boxes[a].style.backgroundColor = "lightgreen";
            boxes[b].style.backgroundColor = "lightgreen";
            boxes[c].style.backgroundColor = "lightgreen";
            msg.textContent = `${boxes[a].textContent} wins!`;
            boxes.forEach((cell) => cell.disabled = true);
            
            }
        }
    }
}

const resetGame = () => {
    boxes.forEach((cell) => {
        cell.textContent = "";
        cell.style.backgroundColor = "";
        cell.disabled = false;
    });
    msg.textContent = "";
    turnX = true;
}

restartBtn.addEventListener("click", resetGame);