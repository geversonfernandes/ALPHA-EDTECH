import raffler from "./raffler.js";
const resultDrawn = document.querySelector("#result__drawn");
const resWinner = document.querySelector('#result__winner');
const btnStart = document.querySelector("#start");

function createCard(id, numCard) {
  let card = [];
  let objTemp = {};

  while (card.length < 10) {
    objTemp = {
      value: Math.floor(Math.random() * 15 + 1),
      check: false,
    };
    if (
      !card.some((e) => {
        return e.value === objTemp.value;
      })
    ) {
      card.push(objTemp);
    }
  }

  card.sort((a, b) => {
    return a.value - b.value;
  });

  renderCard(card, id, numCard);

  function list() {
    return card;
  }

  function numberDrawn(value, i) {
    const index = card.findIndex((e) => {
      return e.value === value;
    });
    console.log("imprime index:" + index);
    if (index < 0 || index + 1 !== i) {
      return -1;
    }
    card[index].check = true;
    const elements = document.getElementById(`square-${id}-${index + 1}`);
    if (elements) elements.classList.add("color");
    return card[index];
  }

  function verifyWinner() {
    let filtered = card.filter((e) => {
      return e["check"];
    });
    return filtered.length >= 10 ? true : false;
  }

  return { list, numberDrawn, verifyWinner };
}

const c1 = createCard("c1", 1);
const c2 = createCard("c2", 2);
const c3 = createCard("c3", 3);

function renderCard(card, id, numCard) {
  const renderCards = document.querySelector("#result");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerText = "Cartela nº: " + numCard;
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  renderCards.append(div);
  div.append(p);
  div.append(table);
  table.append(tr);

  const td1 = document.createElement("td");
  td1.innerText = card[0].value.toString().padStart(2, "0");
  td1.id = `square-${id}-1`;
  td1.addEventListener("click", () => changeClass(id, 1));

  const td2 = document.createElement("td");
  td2.innerText = card[1].value.toString().padStart(2, "0");
  td2.id = `square-${id}-2`;
  td2.addEventListener("click", () => changeClass(id, 2));

  const td3 = document.createElement("td");
  td3.innerText = card[2].value.toString().padStart(2, "0");
  td3.id = `square-${id}-3`;
  td3.addEventListener("click", () => changeClass(id, 3));

  const td4 = document.createElement("td");
  td4.innerText = card[3].value.toString().padStart(2, "0");
  td4.id = `square-${id}-4`;
  td4.addEventListener("click", () => changeClass(id, 4));

  const td5 = document.createElement("td");
  td5.innerText = card[4].value.toString().padStart(2, "0");
  td5.id = `square-${id}-5`;
  td5.addEventListener("click", () => changeClass(id, 5));

  const td6 = document.createElement("td");
  td6.innerText = card[5].value.toString().padStart(2, "0");
  td6.id = `square-${id}-6`;
  td6.addEventListener("click", () => changeClass(id, 6));

  const td7 = document.createElement("td");
  td7.innerText = card[6].value.toString().padStart(2, "0");
  td7.id = `square-${id}-7`;
  td7.addEventListener("click", () => changeClass(id, 7));

  const td8 = document.createElement("td");
  td8.innerText = card[7].value.toString().padStart(2, "0");
  td8.id = `square-${id}-8`;
  td8.addEventListener("click", () => changeClass(id, 8));

  const td9 = document.createElement("td");
  td9.innerText = card[8].value.toString().padStart(2, "0");
  td9.id = `square-${id}-9`;
  td9.addEventListener("click", () => changeClass(id, 9));

  const td10 = document.createElement("td");
  td10.innerText = card[9].value.toString().padStart(2, "0");
  td10.id = `square-${id}-10`;
  td10.addEventListener("click", () => changeClass(id, 10));

  tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10);
}

function changeClass(id, i) {
  switch (id) {
    case "c1":
      c1.numberDrawn(Number(resultDrawn.innerText), i);
      break;
    case "c2":
      c2.numberDrawn(Number(resultDrawn.innerText), i);
      break;
    case "c3":
      c3.numberDrawn(Number(resultDrawn.innerText), i);
      break;
    default:
      break;
  }
}

const r1 = raffler(1, 15);

function pause(temp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, temp);
  });
}

async function start() {
  while (!r1.verifyDrawnNumber()) {
    let result = r1.drawnNumber().value;
    await pause(5000);
    resultDrawn.innerHTML = result;
    let resultWinner = cardWinner(result);
    switch (resultWinner) {
      case 1:
        resWinner.innerText = "Jogador 1 ganhou";
        return;
      case 2:
        resWinner.innerText = "Jogador 2 ganhou";
        return;
      case 3:
        resWinner.innerText = "Jogador 3 ganhou";
        return;
      default:
        break;
    }
  }
}

function cardWinner() {
  if (c1.verifyWinner()) return 1;
  if (c2.verifyWinner()) return 2;
  if (c3.verifyWinner()) return 3;
  return -1;
}

btnStart.addEventListener("click", start);