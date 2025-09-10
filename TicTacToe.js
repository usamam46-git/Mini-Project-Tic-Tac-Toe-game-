let boxes = document.querySelectorAll(".btn");
let resetButton = document.getElementsByClassName("reset");
let winner = document.getElementById("winner");
let reset = document.querySelector(".reset");
let btnCount = "";


let turn0 = true;

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked!");
        btnCount++;
        console.log(btnCount);
        if (turn0) {
            box.innerText = "O";
            turn0 = false
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    }
    )
}
)

function disabled() {
    for (const box of boxes) {
        box.disabled = true;

    }
}
function enabled() {
    for (const box of boxes) {
        box.disabled = false;

    }
}



let newGame = document.createElement("button");
newGame.style.backgroundColor = "#FD970D"
newGame.style.color = "white";
newGame.style.padding = "8px";
newGame.innerText = "New Game"
newGame.style.borderRadius = "15px";
newGame.style.border = "none";

function checkWinner() {
    let hasWinner=false;
    for (const pattern of winningPattern) {
        let postVal1 = boxes[pattern[0]].innerText;
        let postVal2 = boxes[pattern[1]].innerText;
        let postVal3 = boxes[pattern[2]].innerText;

        if (postVal1 !== "" && postVal2 !== "" && postVal3 !== "") {
            if (postVal1 == postVal2 && postVal2 == postVal3) {
                winner.innerText = `Winner🎉 ${postVal1}`;
                disabled();
                document.querySelector(".new-game").appendChild(newGame);
                hasWinner=true;
                break;
            }
        }
       if (!hasWinner&&btnCount === 9) {
            winner.innerText = "No Winner😐 Try again!";
             document.querySelector(".new-game").appendChild(newGame);
        }

    }
}

reset.addEventListener("click", () => {
    winner.innerText = "";
    boxes.forEach((box) => {
        box.innerText = "";
        enabled();
    }
    )
    newGame.remove();
    btnCount = "";
}
)

newGame.addEventListener("click", () => {
    winner.innerText = "";
    boxes.forEach((box) => {
        box.innerText = "";
        enabled();
    }
    )
    newGame.remove();
    btnCount="";
}
)
