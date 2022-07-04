const printFatorial = document.getElementById("result__fatorial");
const printEuler = document.getElementById("result__euler");
const inputFatEuler = document.getElementById("input__fatorial__euler");
const btn = document.getElementById("calc__fatorial");
const btn2 = document.getElementById("calc__euler");

// CLIQUE NO CALCULAR FATORIAL E PASSANDO INPUT COMO PARÂMETRO DA FUNÇÃO
btn.addEventListener("click", facInputCapture);
function facInputCapture(){
    let input = inputFatEuler.value;
    printFatorial.innerHTML = calcFatorial(input);
}

// CALCULO DO FATORIAL
function calcFatorial(a){
    const num = BigInt(a);
    if(num == 0n || num == 1n){
        return 1n
    }
    return num*(calcFatorial(num - 1n));
};

// CLIQUE NO CALCULAR EULER E PASSANDO INPUT COMO PARÂMETRO DA FUNÇÃO
btn2.addEventListener("click", eulerInputCapture);
function eulerInputCapture(){
    let input = inputFatEuler.value;
    printEuler.innerHTML = calcEuler(input);
}

// CALCULO DO EULER
function calcEuler(a){
    let result = 0;
    for(i = 0; i <= a; i++){
        result += 1/calcFatorial(i);
    }
    return result;
};

// NÚMEROS PRIMOS
const resultPrimos = document.getElementById("result__primos");
for(k = 2; k <= 1000; k++){
    checkPrimeNumber(k);
};

function checkPrimeNumber(a){
    let contadorDeZeros = 0;
    for(i = 1; i <= a; i++){
        if(a%i == 0){
            contadorDeZeros++;
        }
    };
    if(contadorDeZeros == 2){
        resultPrimos.innerHTML += (i-1) + ";";
    };
};

// PI USANDO NILAKANTHA
const resultPi = document.getElementById("result__pi");
let pi = 3;
function nilakantha(){
    for(y = 2; y <= 2000; y += 4){
        pi += (4/(y*(y+1)*(y+2))) - (4/((y + 2)*(y + 3)*(y + 4)));
        console.log(pi);
    };
    return resultPi.innerHTML = pi.toFixed(100);
}
nilakantha();

//3.14159 26535 89525 33020 44238 80786 63498 16322 32666 01562 50000 00000 00000 00000 00000 00000 00000 00000 00000 00000

//3.14159 26535 89793 23846 26433 83279 50288 41971 69399 37510 58209 74944 59230 78164 06286 20899 86280 34825 34211 70679