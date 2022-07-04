const btn = document.getElementById("play");
btn.addEventListener("click", startTheGame)
function startTheGame(){
// CRIANDO BARALHO COM TODAS AS COMBINAÇÕES
    let deck = [];
    let deck2 = [];
    function buildDeck(){
        let values = ['A','2','3','4','5','6','7','8','9','T','J','Q','K'];
        let types = ['C','D','H','S'];

        for(let i = 0; i < values.length; i++) {
            for(j = 0; j < types.length; j++){
                deck.push(values[i] + types[j])
            };
        };
    };
    buildDeck();

// EMBARALHANDO A SEQUÊNCIA DE CARTAS TRANSFERINDO PARA OUTRO DECK
    function shuffleDeck(){
        for(i = 0; i < 52; i++){
            j = parseInt(Math.random() * deck.length);
            remove = deck.splice(j,1);
            deck2.push(remove[0]);
        };
    };
    shuffleDeck();

// EXIBINDO AS CARTAS ALEATORIAMENTE
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    const img4 = document.getElementById("img4");
    const img5 = document.getElementById("img5");

    img1.setAttribute("src", `imgs-2/${deck2[0]}.svg`); //imgs-2/3H.svg
    img2.setAttribute("src", `imgs-2/${deck2[1]}.svg`);
    img3.setAttribute("src", `imgs-2/${deck2[2]}.svg`);
    img4.setAttribute("src", `imgs-2/${deck2[3]}.svg`);
    img5.setAttribute("src", `imgs-2/${deck2[4]}.svg`);

// GUARDAR VALOR ATUAL DA MESA E SEPARA
    let num = ['','','','',''];
    let letter = ['','','','',''];
    function dividingElements(){
        for(i = 0; i < 5; i++){
            num[i] += deck2[i].slice(0,1);
            letter[i] += deck2[i].slice(1,2); //3H
        };
    };

    dividingElements();

//TROCAR CARTAS COM SIMBOLOS POR TEXTO
    function changeSymbols(){
        const indexA = num.indexOf("A");
        const indexT = num.indexOf("T");
        const indexJ = num.indexOf("J");
        const indexQ = num.indexOf("Q");
        const indexK = num.indexOf("K");
            if(indexA !== -1){
                num[indexA] = "1";
            };
            if(indexT !== -1){
                num[indexT] = "10";
            };
            if(indexJ !== -1 ){
                num[indexJ] = "11";
            };
            if(indexQ !== -1){
                num[indexQ] = "12";
            };
            if(indexK !== -1){
                num[indexK] = "13";
            };
    };
    num.forEach(() => {
        changeSymbols();
    });

// ORDENAR ARRAY EM ORDEM CRESCENTE
    function orderArray(a,b){
        return a-b;
    };
    num.sort(orderArray);

// VARIAVEL COM PRIORIDADES
    let priority;

//CHECAR QUANTIDADE DE NUMEROS REPETIDOS
    let cont = 0;
    // ESCREVER O QUE A FUNÇÃO FAZ
    function checkRepeated(){
        for(i = 0; i <5; i++){
            for(j = i + 1; j < 5; j++){
                if(num[i] === num[j]){
                    cont += 1;
                };
            };
        };
        if(cont == 0){
            priority = 0;
        } else if(cont == 1){
            priority = 1;
        } else if(cont == 2){
            priority = 2;
        } else if(cont == 3){
            priority = 3;
        } else if(cont == 4){
            priority = 5;
        } else if(cont == 6){
            priority = 6;
        }
    };
    checkRepeated();

// CHECAR SE EXISTE SEQUENCIA DE 5 NUMEROS
    function checkSequence(){
        if(num[0] === num[1]-1 && num[0] === num[2]-2 && num[0] === num[3]-3 && num[0] === num[4]-4 && priority < 4){
            priority = 4;
        };
        if(num[0] === 10 && num[1] === 11 && num[2] === 12 && num[3] === 13 && num[4] === 1){
            priority = 4;
        };
    };
    checkSequence();

// CHECAR SE OS NAIPES SÃO IGUAIS -> CASO DO STRAITGH FLUSH
    function checkSymbols(){
        if(letter[0] === letter[1] && letter[1] === letter[2] && letter[2] === letter[3] && letter[3] === letter[4] && priority == 5){
            priority = 7;
        };
    };
    checkSymbols();

// VARIÁVEL PARA EXIBIR RESULTADOS
const result = document.getElementById("result");
// RESULTADO DE ACORDO COM A PRIORIDADE
    switch (priority) {
        case 0:
            result.innerHTML = "Nada =(";
        break;
        case 1:
            result.innerHTML = "1 par";
        break;
        case 2:
            result.innerHTML = "2 pares";
        break;
        case 3:
            result.innerHTML = "1 trinca";
        break;
        case 4:
            result.innerHTML = "sequencia";
        break;
        case 5:
            result.innerHTML = "full house";
        break;
        case 6:
            result.innerHTML = "1 quadra";
        break;
        case 7:
            result.innerHTML = "streight flush";
        break;
        default:
            break;
    };
};