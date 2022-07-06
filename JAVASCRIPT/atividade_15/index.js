const btn = document.querySelector("#check");
const inputDate = document.querySelector("#input__date");
const selectCoin = document.querySelector("#moedas");
const selectTbody = document.querySelector("#info");
const td1 = document.querySelector("#td1");
const td2 = document.querySelector("#td2");
const td3 = document.querySelector("#td3");
const td4 = document.querySelector("#td4");
const td5 = document.querySelector("#td5");
let stringDate;
let stringCoin;

function saveDateInString() {
  stringDate = inputDate.value.replace(/-/g, "");
}

function saveCoinSelected() {
  stringCoin = selectCoin.value;
}

function fetchApi() {
  btn.style.cursor = "wait";
  saveDateInString();
  saveCoinSelected();

  fetch(`https://economia.awesomeapi.com.br/last/${stringCoin}-BRL`)
    .then((response) => response.json())
    .then((data) => lastQuote(data))
    .catch((e) => {
      alert(e.message);
    });

  fetch(
    `https://economia.awesomeapi.com.br/json/daily/${stringCoin}-BRL/?start_date=${stringDate}&end_date=${stringDate}`
  )
    .then((response) => response.json())
    .then((data) => saveCurrentDate(data))

    .catch((e) => {
      alert(e.message);
      btn.style.cursor = "wait";
    });
};

function lastQuote(data) {
  td1.innerHTML = data[stringCoin + "BRL"].bid;
  btn.style.cursor = "default";
};

function saveCurrentDate(data) {
  td2.innerHTML = data[0].create_date;
  td3.innerHTML = data[0].low;
  td4.innerHTML = data[0].high;
  td5.innerHTML = data[0].bid;
  btn.style.cursor = "default";
};

btn.addEventListener("click", fetchApi);