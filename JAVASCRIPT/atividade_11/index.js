const btn = document.getElementById("include");
const btn2 = document.getElementById("list");
const btn3 = document.getElementById("title__product");
const btn4 = document.getElementById("title__valor");
const btn5 = document.getElementById("search__icon");
const msg = document.getElementById("msg");
const msgQtdProducts = document.getElementById("qtd__products");
let selectNameProduct = document.getElementById("nameProduct");
let selectDescription = document.getElementById("description");
let selectPrice = document.getElementById("price");
let inputSearch = document.getElementById("search__products");
let arrProducts = [];
let id = 0;
let products;
let validator = null;
let selectDataModal = document.getElementById("data__modal");
let copyArray;
let qtdProducts = 0;
btn.addEventListener("click", createProduct);
btn2.addEventListener("click", listProducts);
btn3.addEventListener("click", orderByName);
btn4.addEventListener("click", orderByValue);
btn5.addEventListener("click", searchProducts);

//VALIDAÇÃO E CRIAÇÃO DE PRODUTOS
function createProduct(){
    nameProduct = selectNameProduct.value;
    description = selectDescription.value;
    price = selectPrice.value.replace(",",".");

    validateData();
    function validateData(){
        if(nameProduct == ""){
            msg.textContent = (`Falha no cadastro do produto! Insira o nome do Produto`);
        }else if(description == ""){
            msg.textContent = (`Falha no cadastro do produto! Insira uma descrição`);
        }else if(price == ""){
            msg.textContent = (`Falha no cadastro do produto! Insira um valor`);
        }else if(isNaN(price)){
            msg.textContent = (`Falha no cadastro do produto! Insira um valor numérico.`);
        }else if(price <= 0){
            msg.textContent = (`Falha no cadastro do produto! Insira um valor maior que zero`);
        }else if(validator == null){
            addProducts();
        }else if(validator !== null){
            return attProducts(validator);
        }
    };

    function addProducts(){
        products = 
        {
            id,
            nome: nameProduct,
            descrição: description,
            valor: price,
            incluidoEm: Date.now()
        };
        id++;
        arrProducts.push(products);
        selectNameProduct.value = "";
        selectDescription.value = "";
        selectPrice.value = "";
        return msg.textContent =  `Produto ${products.nome} incluído
        com sucesso!`;
    };
};

//LISTAR PRODUTOS NA TABELA
function listProducts(){
    listTable();
    function listTable(){
        let tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        for (i = 0; i < arrProducts.length; i++){
            let tr = tbody.insertRow();
            let tdId = tr.insertCell();
            let tdName = tr.insertCell();
            let tdValue = tr.insertCell();
            let tdEdit = tr.insertCell();
            let tdDelete = tr.insertCell();

            tdId.innerHTML = arrProducts[i].id;
            tdName.innerHTML = arrProducts[i].nome;
            tdValue.textContent = parseFloat(arrProducts[i].valor).toFixed(2);
            
            //IMAGEM EDIT
            let imgEdit = document.createElement("span");
            imgEdit.className = "material-icons";
            imgEdit.innerHTML = "edit";
            tdEdit.appendChild(imgEdit);

            //IMAGEM DELET
            let imgDelete = document.createElement("span");
            imgDelete.className = "material-icons";
            imgDelete.innerHTML = "delete";
            tdDelete.appendChild(imgDelete);

            imgEdit.setAttribute("onclick", "editFields("+ JSON.stringify(arrProducts[i]) +")");
            imgDelete.setAttribute("onclick", "deleteProduct("+ arrProducts[i].id +")");
            tdName.setAttribute("onclick","showInfo("+ JSON.stringify(arrProducts[i]) +")");
        }
    };
};


// EDITAR CAMPOS
function editFields(data){
    validator = data.id;
    selectNameProduct.value = data.nome;
    selectDescription.value = data.descrição;
    selectPrice.value = data.valor;
};

// ATUALIZAR PRODUTOS
function attProducts(id){
    for(i = 0; i < arrProducts.length; i++){
        if(arrProducts[i].id == id){
            arrProducts[i].nome = selectNameProduct.value;
            arrProducts[i].valor = selectPrice.value;
            msg.textContent =  `Produto ${arrProducts[i].nome} alterado com sucesso!`;
        }
    }
    validator = null;
    return listProducts();
};

//EXIBIR INFORMAÇÕES
function showInfo(data){
    const date = new Date(data.incluidoEm);
    date.getTime();
    const infoProducts = document.getElementById("info__products");
    selectDataModal.innerHTML = `<br>Id: ${data.id}<br> Nome: ${data.nome}<br> 
    Descrição: ${data.descrição}<br> Preço: ${data.valor}<br> Incluido Em: ${date}`;
    let modal = document.getElementById("modal");
    modal.style.display = "block";
};

//DELETAR PRODUTOS
function deleteProduct(id){
    if(confirm("Deseja deletar o produto Id" + id)){
        for(i = 0; i < arrProducts.length; i++){
            if(arrProducts[i].id == id){
            arrProducts.splice(i,1);
            }
        }
    }
listProducts();
};

//ORDENAR POR NOME
function orderByName(){
    arrProducts.sort(function (a, b) {
        if (a.nome < b.nome) {
          return -1;
        }
        else{
          return true;
        }
    });
    listProducts();
};

// ORDENAR POR VALOR
function orderByValue(){
    arrProducts.sort(function (a, b) {
        if (parseFloat(a.valor) < parseFloat(b.valor)) {
          return -1;
        }
        else{
          return true;
        }
    });
    listProducts();
};

//FECHAR MODAL
function closeModal(){
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

//BUSCAR PRODUTOS
function searchProducts(){
    copyArray = [...arrProducts];
    if (inputSearch.value == "") {
        msgQtdProducts.innerHTML = "";
        arrProducts = copyArray;
        listProducts();
    } else {
        const filterSearch = arrProducts.filter(function(products){
            if (products.nome.includes(inputSearch.value) || products.descrição.includes(inputSearch.value)) {
                qtdProducts++;
                msgQtdProducts.innerHTML = `Foram encontrado(s) ${qtdProducts} produtos`;
                return true;
            }else{
                return false;
            }
        });
            if(qtdProducts == 0){
                msgQtdProducts.innerHTML = `Não foram encontrados produtos conforme chave de pesquisa!`;
            }
            qtdProducts = 0;
            arrProducts = filterSearch;
            listProducts();
            arrProducts = copyArray;         
    };
};