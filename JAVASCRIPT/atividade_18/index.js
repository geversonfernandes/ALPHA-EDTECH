const container = document.querySelector('#container');

async function showRandomCards(){
    const responseDeck = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    const responseJson = await responseDeck.json();
    const id = responseJson.deck_id;

    if(responseDeck.status === 200){
        requestFetchAndShowCards(id);
    } else{
        console.log('Ocorreu um erro na requisição');
    };
};

async function requestFetchAndShowCards(id){
    const promiseCards = [];
    for(i = 0; i < 5; i++){
        promiseCards.push(searchCard(id));
        await pause(100);
    };

    Promise.all(promiseCards).then((values) =>{
        console.log(values);
        for(i = 0; i < 5; i++){
            const cardJson = values[i];
            const srcImage = cardJson.cards[0].image;
            const newImage = document.createElement('img');
            newImage.setAttribute('src', srcImage);
            container.appendChild(newImage);        
        };
    });
};

async function searchCard(id){
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    const data = await response.json(); 
    return data;
};

// CÓDIGO QUESTÃO 1.

// async function requestFetchAndShowCards(id){
//     for(i = 0; i < 5; i++){
//         const responseCard = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
//         const cardJson = await responseCard.json();
//         const srcImage = cardJson.cards[0].image;
//         const newImage = document.createElement('img');
//         newImage.setAttribute('src', srcImage);
//         container.appendChild(newImage);
//         await pause(1000);
//     };
// };

showRandomCards();

function pause(time){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{resolve(0)}, time)
    });
};