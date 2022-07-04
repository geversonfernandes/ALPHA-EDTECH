const boxes = document.querySelectorAll(".element");
let array = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const result = document.getElementById("result");
const SCOREX = 3;
const SCOREO = 30;
const btn = document.getElementById("reset");
btn.addEventListener("click", reset);

let cont = 0;
for (i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", teste);
};

function verify(cell, pointer) {
  switch (cell) {
    case "1A":
      array[0].splice(0, 1, pointer);
      break;
    case "1B":
      array[0].splice(1, 1, pointer);
      break;
    case "1C":
      array[0].splice(2, 1, pointer);
      break;
    case "2A":
      array[1].splice(0, 1, pointer);
      break;
    case "2B":
      array[1].splice(1, 1, pointer);
      break;
    case "2C":
      array[1].splice(2, 1, pointer);
      break;
    case "3A":
      array[2].splice(0, 1, pointer);
      break;
    case "3B":
      array[2].splice(1, 1, pointer);
      break;
    case "3C":
      array[2].splice(2, 1, pointer);
      break;
  };
};

let winX = false;
function teste(e) {
  if (!winX) {
    if (e.target.innerHTML === "") {
      if (verifyPair(cont)) {
        e.target.innerHTML = "x";
        verify(e.target.dataset.mark, 1);
      } else {
        e.target.innerHTML = "o";
        verify(e.target.dataset.mark, 10);
      }
      cont++;
    };
    checkWin();
  };
};

function verifyPair(p){
  return p % 2 === 0;
};

function checkWin() {
  if (verifyWinner(SCOREX)) {
    result.innerHTML = "Jogador 'X' venceu!";
    winX = true;
  };

  if (verifyWinner(SCOREO)) {
    result.innerHTML = "Jogador 'o' venceu!";
    winX = true;
  };

  if (cont === 9 && winX === false) {
    result.innerHTML = "Deu velha!";
  };
};

function reset() {
  array = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  cont = 0;
  winX = false;
  for (i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
  }
  result.innerHTML = "";
};

function verifyWinner(o) {
  let sumLine1 = array[0][0] + array[0][1] + array[0][2];
  let sumLine2 = array[1][0] + array[1][1] + array[1][2];
  let sumLine3 = array[2][0] + array[2][1] + array[2][2];
  let sumCol1 = array[0][0] + array[1][0] + array[2][0];
  let sumCol2 = array[0][1] + array[1][1] + array[2][1];
  let sumCol3 = array[0][2] + array[1][2] + array[2][2];
  let sumDiag1 = array[0][0] + array[1][1] + array[2][2];
  let sumDiag2 = array[0][2] + array[1][1] + array[2][0];

  if (
    sumLine1 === o ||
    sumLine2 === o ||
    sumLine3 === o ||
    sumCol1 === o ||
    sumCol2 === o ||
    sumCol3 === o ||
    sumDiag1 === o ||
    sumDiag2 === o
  ) {
    return true;
  }
  return false;
};