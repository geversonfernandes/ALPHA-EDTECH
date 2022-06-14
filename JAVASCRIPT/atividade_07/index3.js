const btn = document.getElementById("send");
const btn2 = document.getElementById("clear");
const selectText = document.getElementById("textUser");
const selectTextArea = document.getElementById("boxText");

btn.addEventListener("click", addTextByClick);
btn2.addEventListener("click", clearHistory);
selectText.addEventListener("keypress", addTextByEnter);

function addTextByClick(){
    selectTextArea.value += "\n" + selectText.value;
    //scrollTop
    if (selectText.value != "") {
        selectTextArea.scrollTop += selectTextArea.scrollHeight;
    }
};

function addTextByEnter(e){
    if(e.key === "Enter"){
        btn.click();
    };
};

function clearHistory(){
    selectTextArea.value = "";
};