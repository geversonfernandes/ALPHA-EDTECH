class Avatar{
    constructor(x,y,coins){
        this._x = x;
        this._y = y;
        this._coins = coins;
    };

    get positionX(){
        return this._x;
    };

    get positionY(){
        return this._y;
    };

    get coins(){
        return this._coins;
    };

    forward(){ //subir
        if(this._y < 0) return this._y += 1;
        return 'Impossível mover para cima neste ponto';
    };

    back(){ //descer
        this._y -= 1;
    };

    right(){
        this._x += 1;
    };

    left(){
        if(this._x > 0) return this._x -= 1;
        return 'Impossível mover para esquerda neste ponto';
    };

    addCoins(){
        this._coins += 1 
    };

};

const a1 = new Avatar(3,-2,1);


function createAvatar(_x,_y,_coins){
    let x = _x;
    let y = _y
    let coins = _coins;

    function getX(){
        return x;
    };

    function getY(){
        return y;
    };

    function getCoins(){
        return coins;
    };

    function forward(){ //subir
        if(y < 0) return y+= 1;
        return 'Impossível mover para cima neste ponto';
    };

    function back(){ //descer
       return  y-= 1;
    };

    function right(){
        return x+= 1;
    };

    function left(){
        if(x > 0) return x-= 1;
        return 'Impossível mover para esquerda neste ponto';
    };

    function addCoins(){
        return coins += 1 
    };

    return{getX, getY, getCoins, forward, back, right, left, addCoins}
};

const a2 = createAvatar(2,-2,2);