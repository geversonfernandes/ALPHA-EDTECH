const btn = document.getElementById("send");
const nameInput = document.getElementById("name");
const dateInput = document.getElementById("birthdate");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const genderInput = document.getElementById("gender");
const messageError = document.getElementById("message__error");
let validator;
const currentDate = new Date();
const personalData = {
    name: null,
    birthDate: null,
    weight: null,
    height: null,
    gender: null
};
const labelName = document.getElementById("label__name");
const labelDate = document.getElementById("label__birthdate");
const labelWeight = document.getElementById("label__weight");
const labelHeight = document.getElementById("label__height");
const labelGender = document.getElementById("label__gender");
const resultJson = document.getElementById("result__json");

btn.addEventListener("click", saveInObject)
function saveInObject (e){
    e.preventDefault();
    personalData.name = nameInput.value;
    personalData.birthDate = dateInput.value;
    personalData.weight = parseFloat(weightInput.value);
    personalData.height = parseInt(heightInput.value);
    personalData.gender = genderInput.value;

    try {
        validator = 0;
        if(nameInput.value.length < 5)
        throw "Field 'name' is invalid!";
        if(Date.parse(dateInput.value) > Date.parse(currentDate))
        throw "Field “birthDate” is invalid!";
        if(weightInput.value === "" || isNaN(weightInput.value))
        throw "Field “weight” is invalid!";
        if(heightInput.value ==="" || isNaN(heightInput.value))
        throw "Field “height” is invalid!";
        if(genderInput.value === "0")
        throw "Field “gender” is invalid!";
    } 
    
    catch (error) {
        validator = 1;
        messageError.textContent = error;
    }

    if(validator === 0){
        messageError.textContent = "";
        labelName.textContent = personalData.name;
        labelDate.textContent = personalData.birthDate;
        labelWeight.textContent =  personalData.weight;
        labelHeight.textContent = personalData.height;
        labelGender.textContent = personalData.gender;
        resultJson.textContent = JSON.stringify(personalData);
        console.log(JSON.parse(personalData));
    };
};

dateInput.addEventListener("change", verifyDate);
function verifyDate(){
    if(Date.parse(dateInput.value) > Date.parse(currentDate)){
        alert("Data Inválida");
        dateInput.value = "";
    }else{
        return true;
    };
};

