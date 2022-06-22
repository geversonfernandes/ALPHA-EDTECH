let result = 0;
let cont = 0;
const btn = document.getElementById("calc");
btn.addEventListener("click", calc);

function sumNumbers(a,b){
    return parseInt(a + b);
};

function subNumbers(a,b){
    if(a > b){
        cont = sumNumbers(b, 1);
        result = sumNumbers(1, result);
        subNumbers(a,cont);
        return result;
    }
};

function multiplyNumbers(a,b){
    if(cont < b){
        cont = sumNumbers(cont, 1);
        result = sumNumbers(result,a); 
        multiplyNumbers(a,b);
        return result;
    };
    return result;
};

// falta usar a recursividade
let x = 0;
function exponential(a, b) {
    if (x === 0) {
        x = a;
        exponential(a, b)
    }
    else if(b > 1) {
        x = multiplyNumbers(a, x);
        b--;
        exponential(a, b);
    };
};

// falta usar a recursividade
let y = 0;
function division(a,b){ 
    if(y > (a-b)){
        return cont;
    } else{
        cont++;
        y = y + b;
        division(a,b)
    }
}

function calc(){
    const resultCalc = document.getElementById("resultCalc");
    const input1 = parseFloat(document.getElementById("number1").value);
    const input2 = parseFloat(document.getElementById("number2").value);

    switch (document.getElementById("operations").value){
        case "1":
            if(Number.isInteger(input1) && Number.isInteger(input2) && input1 >= 0 && input2 >= 0){
                resultCalc.textContent = (`Resultado: ${sumNumbers(input1,input2)}`);
            } else {
                throw resultCalc.textContent = Error(`[sum] Impossible to sum ${input1} + ${input2}`);
            };
            break;
        
        case "2":
            if(Number.isInteger(input1) && Number.isInteger(input2) && input1 >= 0 && input2 >= 0){
                subNumbers(input1,input2);
                resultCalc.textContent = `Resultado: ${result} `;
                cont = 0;
                result = 0;
            } else{
                throw resultCalc.textContent = Error(`[subtract] Impossible to subtract ${input1} e ${input2}`);
            };
            break;
        case "3":
            if(Number.isInteger(input1) && Number.isInteger(input2) && input1 >= 0 && input2 >= 0){
                multiplyNumbers(input1,input2);
                resultCalc.textContent = `Resultado: ${result} `;
                cont = 0;
                result = 0;
            } else{
                throw Error(`[multiply] Impossible to multiply ${input1} * ${input2}`);
            }
            break;
        case "4":
            if(Number.isInteger(input1) && Number.isInteger(input2) && input1 >= 0 && input2 >= 0){
                exponential(parseInt(input1),parseInt(input2));
                resultCalc.textContent = `Resultado: ${x} `;
                cont = 0;
                result = 0;
            } else{
                throw Error(`opa`);
            }
            break;
        case "5":
            if(Number.isInteger(input1) && Number.isInteger(input2) && input1 >= 0 && input2 >= 0){
                division(parseInt(input1),parseInt(input2));
                resultCalc.textContent = `Resultado: ${cont} `;
                cont = 0;
                result = 0;
            } else{
                throw Error(`opa`);
            }
            break;
        default:
            break;
    }
};