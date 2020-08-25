let p1Score = document.querySelector("#p1score");
let p2Score = document.querySelector("#p2score");

const p1Button = document.querySelector("#p1btn");
const p2Button = document.querySelector("#p2btn");

//let GameInput = document.querySelector('#inputId')


let scoreP1 = 0;
let scoreP2 = 0;
//let winScore = 5;

let gameover = false;

//let winScore =  parseInt(GameInput.value) 
//console.log(winScore)
let winScore = 5;

p1Button.addEventListener("click", () => {
  if (!gameover) {
    scoreP1 += 1;
    p1Score.textContent = scoreP1;
    p1Button.disabled = true;
    p2Button.disabled = false;

    if (winScore === scoreP1) {
      gameover = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
  }
});

p2Button.addEventListener("click", () => {
  if (!gameover) {
    scoreP2 += 1;
    p2Score.textContent = scoreP2;
    p1Button.disabled = false;
    p2Button.disabled = true;

    if (winScore === scoreP2) {
      gameover = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
  }
});
