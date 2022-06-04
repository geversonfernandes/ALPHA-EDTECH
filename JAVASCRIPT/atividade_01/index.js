// function showText(){
// console.log("Olá Console!");
// }

// const e = document.getElementById("click-me");
// e.addEventListener("click", showText)

document.getElementById("click-me").onclick = function(){
    console.log("Olá Console!");
}