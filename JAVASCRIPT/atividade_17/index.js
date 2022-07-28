const selectDistrict = document.querySelector("#district");
const selectCity = document.querySelector("#city");
const content = document.querySelector("#content_");
let city = "";
let currentDate = "";
let currentDate1 = "";
let currentDate2 = "";
let currentDate3= "";

async function fillSelect(){
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`);
    const data = await response.json();
    displayDistricts(data);
};

fillSelect();

function displayDistricts(data){
    selectDistrict.innerHTML = `<option hidden> Selecione uma UF: </option>`;
    selectDistrict.removeAttribute("disabled");
    data.forEach(element => {
        selectDistrict.innerHTML += `<option value=${element.sigla}>${element.sigla} - ${element.nome}</option>`;
    });
};

async function fetchCities(){
    try{
        let district = selectDistrict.value;
        let x = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${district}/municipios`);
        let y = await x.json();
        return displayCities(y);
    } catch(err){
        console.log(err);
        throw new Error(err)
    }
};

function displayCities(data2){
    selectCity.innerHTML = `<option hidden>Selecione a cidade</option>`
    data2.forEach(element => {
        selectCity.innerHTML += `<option value=${element.id}>${element.nome}</option>`;
    });
};

async function fetchWeather(){
    try{
        city = selectCity.value;
        let x = await fetch(`https://apiprevmet3.inmet.gov.br/previsao/${city}`);
        let y = await x.json();
        return attTable(y);
    } catch(err){
        console.log(err);
        throw new Error(err)
    };
};

function attTable(data3){
    captureDate();
    // DATA DE HOJE
    let imgCanva11 = data3[city][currentDate].manha.icone;
    let imgCanva12 = data3[city][currentDate].tarde.icone;
    let imgCanva13 = data3[city][currentDate].noite.icone;
    content.innerHTML = `
    <h2>Previsão para hoje (${data3[city][currentDate].manha.dia_semana} - ${currentDate})</h2>
    <div id=weather__today class=content>
        <div>
            <h3>Manhã</h3>
            <img src="${imgCanva11}"></img>
            <p>${data3[city][currentDate].manha.resumo}</p>
            <p>Min: ${data3[city][currentDate].manha.temp_min} ~ Max: ${data3[city][currentDate].manha.temp_max}</p>
        </div>
        <div>
            <h3>Tarde</h3>
            <img src="${imgCanva12}"></img>
            <p>${data3[city][currentDate].tarde.resumo}</p>
            <p>Min: ${data3[city][currentDate].tarde.temp_min} ~ Max: ${data3[city][currentDate].tarde.temp_max}</p>
        </div>
        <div>
            <h3>Noite</h3>
            <img src="${imgCanva13}"></img>
            <p>${data3[city][currentDate].noite.resumo}</p>
            <p>Min: ${data3[city][currentDate].noite.temp_min} ~ Max: ${data3[city][currentDate].noite.temp_max}</p>
        </div>
    </div>
    `;

    // DATA DE HOJE + 1
    let imgCanva21 = data3[city][currentDate1].manha.icone;
    let imgCanva22 = data3[city][currentDate1].tarde.icone;
    let imgCanva23 = data3[city][currentDate1].noite.icone;
    content.innerHTML += `
    <h2>Previsão para amanhã (${data3[city][currentDate1].manha.dia_semana} - ${currentDate1})</h2>
    <div id=weather__today class=content1>
        <div>
            <h3>Manhã</h3>
            <img src="${imgCanva21}"></img>
            <p>${data3[city][currentDate1].manha.resumo}</p>
            <p>Min: ${data3[city][currentDate1].manha.temp_min} ~ Max: ${data3[city][currentDate1].manha.temp_max}</p>
        </div>
        <div>
            <h3>Tarde</h3>
            <img src="${imgCanva22}"></img>
            <p>${data3[city][currentDate1].tarde.resumo}</p>
            <p>Min: ${data3[city][currentDate1].tarde.temp_min} ~ Max: ${data3[city][currentDate1].tarde.temp_max}</p>
        </div>
        <div>
            <h3>Noite</h3>
            <img src="${imgCanva23}"></img>
            <p>${data3[city][currentDate1].noite.resumo}</p>
            <p>Min: ${data3[city][currentDate1].noite.temp_min} ~ Max: ${data3[city][currentDate1].noite.temp_max}</p>
        </div>
    </div>
    `;

    // DATA DE HOJE + 2
    let imgCanva31 = data3[city][currentDate2].icone;

    content.innerHTML += `
    <h2>Previsão para: (${data3[city][currentDate2].dia_semana} - ${currentDate2})</h2>
    <div id=weather__today class=content2>
        <div>
            <img src="${imgCanva31}"></img>
            <p>${data3[city][currentDate2].resumo}</p>
            <p>Min: ${data3[city][currentDate2].temp_min} ~ Max: ${data3[city][currentDate2].temp_max}</p>
        </div>
    </div>
    `;

    // DATA DE HOJE + 3
    let imgCanva41 = data3[city][currentDate3].icone;

    content.innerHTML += `
    <h2>Previsão para: (${data3[city][currentDate3].dia_semana} - ${currentDate3})</h2>
    <div id=weather__today class=content3>
        <div>
            <img src="${imgCanva41}"></img>
            <p>${data3[city][currentDate3].resumo}</p>
            <p>Min: ${data3[city][currentDate3].temp_min} ~ Max: ${data3[city][currentDate3].temp_max}</p>
        </div>
    </div>
    `;
};

function captureDate(){
     //DATA DE HOJE
     let date = new Date();
     let day = String(date. getDate()). padStart(2, '0');
     let month = String(date. getMonth() + 1). padStart(2, '0');
     let year = date. getFullYear();
     currentDate = day + '/' + month + '/' + year;
 
     //DATA DE AMANHÃ
     let date1 = Date.parse(date) + 86400000;
     date1 = new Date(date1);
     let day1 = String(date1. getDate()). padStart(2, '0');
     let month1 = String(date1. getMonth() + 1). padStart(2, '0');
     let year1 = date1. getFullYear();
     currentDate1 = day1 + '/' + month1 + '/' + year1;
 
     //DATA 2 DIAS DEPOIS DE AMANHÃ
     let date2 = Date.parse(date1) + 86400000;
     date2 = new Date(date2);
     let day2 = String(date2. getDate()). padStart(2, '0');
     let month2 = String(date2. getMonth() + 1). padStart(2, '0');
     let year2 = date2. getFullYear();
     currentDate2 = day2 + '/' + month2 + '/' + year2;
 
     //DATA 3 DIAS DEPOIS DE HOJE
     let date3 = Date.parse(date2) + 86400000;
     date3 = new Date(date3);
     let day3 = String(date3. getDate()). padStart(2, '0');
     let month3 = String(date3. getMonth() + 1). padStart(2, '0');
     let year3 = date3. getFullYear();
     currentDate3 = day3 + '/' + month3 + '/' + year3;
};

selectDistrict.addEventListener("change", fetchCities);
selectCity.addEventListener("change", fetchWeather);