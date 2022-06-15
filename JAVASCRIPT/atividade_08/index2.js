const textInput = document.getElementById("box__text");
const result = document.getElementById("result");
const btn = document.getElementById("convert");
btn.addEventListener("click", function convert(e){
    e.preventDefault();

    try {
        const inputConvert = JSON.parse(textInput.value);
        result.textContent = "Parsable JSON string!";
        console.log(inputConvert);
    } catch (error) {
        alert(error);
    }
});