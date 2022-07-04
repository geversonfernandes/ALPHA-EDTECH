import brigadeiros from "./pages/brigadeiros/index.js";
import cupcakes from "./pages/cupcakes/index.js";
import doces from "./pages/doces/index.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash){
            case "#Brigadeiros":
                main.appendChild(brigadeiros());
                break;
            case "#Cupcakes":
                main.appendChild(cupcakes());
                break;
            case "#Doces":
                main.appendChild(doces());
                break;
            default:
                break;
        };
    });
};

window.addEventListener("load", () => {
    init();
});