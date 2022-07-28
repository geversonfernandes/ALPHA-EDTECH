export default function raffler(min, max){
    let arrGlobe = [];
    for(let i = min; i <= max; i++){
        arrGlobe.push({value: i, drawn: false});
    };

    function list(){
        return arrGlobe;
    };

    function drawnNumber(){
        let bolaSorteada = arrGlobe[Math.floor(Math.random()*arrGlobe.length)];
        while (bolaSorteada.drawn){
            bolaSorteada = arrGlobe[Math.floor(Math.random()*arrGlobe.length)];
        }
        bolaSorteada.drawn = true;

        return bolaSorteada;
    };

    function verifyDrawnNumber(){
        const x = arrGlobe.filter((e) => {return e.drawn});
        if(x.length === (max - min + 1)){
            return true;
        } else return false;
    };

    return {list, drawnNumber, verifyDrawnNumber};
};