const btn = document.getElementById("include");
const msg = document.getElementById("msg");
btn.addEventListener("click", createProduct);
let arrProducts = [];
let id = 0;
let products;
let alterData = null;

//VALIDAÇÃO E CRIAÇÃO DE PRODUTOS
function createProduct(){
    let nameProduct = document.getElementById("nameProduct").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value.replace(",",".");

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
        }else if(price < 0){
            msg.textContent = (`Falha no cadastro do produto! Insira um valor maior que zero`);
        }else if(alterData == null){
            addProducts();
        }else if(alterData !== null){
            return attProducts(alterData);
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
        return msg.textContent =  `Produto ${products.nome} incluído
        com sucesso!`;
    };
};


//LISTAR PRODUTOS NA TABELA
const btn2 = document.getElementById("list");
btn2.addEventListener("click", listProducts);
function listProducts(){
    document.getElementById("table__products").style.display = "flex";
    listTable();
    function listTable(){
        let tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        let i = 0;
        while (i < arrProducts.length) {
            let tr = tbody.insertRow();
            let tdIdName = tr.insertCell();
            let tdValue = tr.insertCell();
            let tdEdit = tr.insertCell();
            let tdDelete = tr.insertCell();

            tdIdName.innerHTML = arrProducts[i].id + "-" + arrProducts[i].nome;
            tdValue.textContent = arrProducts[i].valor;
            
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

            console.log(tdIdName);

            imgEdit.setAttribute("onclick", "editFields("+ JSON.stringify(arrProducts[i]) +")");
            imgDelete.setAttribute("onclick", "deleteProduct("+ arrProducts[i].id +")");
            tdIdName.setAttribute("onclick","showInfo("+ JSON.stringify(arrProducts[i]) +")");
            i++;
        }
    };
};


// EDITAR CAMPOS
function editFields(data){
    alterData = data.id;
    document.getElementById("nameProduct").value = data.nome;
    document.getElementById("description").value = data.descrição;
    document.getElementById("price").value = data.valor;
};

// ATUALIZAR PRODUTOS
function attProducts(id){
    let i = 0;
    while(i < arrProducts.length){
        if(arrProducts[i].id == id){
            arrProducts[i].nome = document.getElementById("nameProduct").value;
            arrProducts[i].valor = document.getElementById("price").value;
            msg.textContent =  `Produto ${arrProducts[i].nome} alterado com sucesso!`;
        }
        i++;
    }
    alterData = null;
    return listProducts();
};

//EXIBIR INFORMAÇÕES
function showInfo(data){
    data.incluidoEm = new Date;
    data.incluidoEm.getTime();
    console.log(data.incluidoEm.getTime());
    
    const infoProducts = document.getElementById("info__products");
    infoProducts.textContent = `Id: ${data.id} Nome: ${data.nome} Descrição: ${data.descrição} Preço: ${data.valor} Incluido Em: ${data.incluidoEm}`;
};

//DELETAR PRODUTOS
function deleteProduct(id){
    if(confirm("Deseja deletar o produto Id" + id)){
    let tbody = document.getElementById("tbody");
    let i = 0;
    let newProducts = [];
    while(i < arrProducts.length){
        if(arrProducts[i].id == id){
        tbody.deleteRow(i);
        }
        if(arrProducts[i].id !== id){
            newProducts.push(arrProducts[i]);
        }
    i++;
    }
    arrProducts = newProducts;
}
};