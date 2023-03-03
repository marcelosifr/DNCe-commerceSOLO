let nameProduto1 = document.querySelectorAll('.nome-produto').innerHTML;
let imgProduto1 = document.querySelectorAll('.img-produto');
let h4Produto = document.getElementById('nomeProduto');
let h1Produto = document.querySelector('.nomeProduto');


function caracProduto1() {
    document.getElementById('modal1').style.zIndex = "1";
    document.getElementById('nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[0].innerHTML;
    document.querySelector('.nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[0].innerHTML;
   
    document.getElementById('xboxBig').innerHTML = '<img src="xbox.svg">';
    
}

function caracProduto2() {
    document.getElementById('modal1').style.zIndex = "1";
    document.getElementById('nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[1].innerHTML;
    document.querySelector('.nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[1].innerHTML;

    document.getElementById('xboxBig').innerHTML = '<img src="xboxs.svg">';
}

function caracProduto3() {
    document.getElementById('modal1').style.zIndex = "1";
    document.getElementById('nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[2].innerHTML;
    document.querySelector('.nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[2].innerHTML;

    document.getElementById('xboxBig').innerHTML = '<img src="switch.svg">';
}

function caracProduto4() {
    document.getElementById('modal1').style.zIndex = "1";
    document.getElementById('nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[3].innerHTML;
    document.querySelector('.nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[3].innerHTML;

    document.getElementById('xboxBig').innerHTML = '<img src="gow.svg">';
}

function caracProduto5() {
    document.getElementById('modal1').style.zIndex = "1";
    document.getElementById('nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[4].innerHTML;
    document.querySelector('.nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[4].innerHTML;

    document.getElementById('xboxBig').innerHTML = '<img src="unch.svg">';
}

function caracProduto6() {
    document.getElementById('modal1').style.zIndex = "1";
    document.getElementById('nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[5].innerHTML;
    document.querySelector('.nomeProduto').innerHTML = document.querySelectorAll('.nome-produto')[5].innerHTML;

    document.getElementById('xboxBig').innerHTML = '<img src="gturism.svg">';
}

function voltar() {
    document.getElementById('modal1').style.zIndex = "-1";
}

function modal2(){
    //document.getElementById("modalFundo").style.opacity = "1";
    //document.getElementById("modalFundo").style.display = "block";
    //document.getElementById('modalFundo').style.zIndex = "1";
    //document.getElementById("modal").style.opacity = "1";
    //document.getElementById("modal").style.display = "block";

    //document.getElementById('fundoModal2').style.zIndex = "1";
    //document.getElementById('fundoModal2').style.opacity = "1";
    //document.getElementById('fundoModal2').style.display = "block";
    
    //document.getElementById('modal2').style.display = "block";
    document.getElementById('modal2').style.zIndex = "1";
    
    document.getElementById('modal1').style.zIndex = "-1";

    document.getElementById('xboxBig2').innerHTML = document.getElementById('xboxBig').innerHTML;
    document.getElementById('nomeProduto2').innerHTML = document.getElementById('nomeProduto').innerHTML;
}

function continuaCompra(){
    document.getElementById('modal2').style.zIndex = "-1";
}

function encerraCompra(){
    document.getElementById('modal2').style.zIndex = "-1";
    document.getElementById('formulario').style.zIndex = "1";
}



function fimCompra(){
    let dataForm = document.querySelectorAll('.data-form');
    let selectForm = document.querySelectorAll('.select-form');

    if(dataForm[0].value !== "" && dataForm[1].value !== "" && dataForm[2].value !== "" && dataForm[3].value !== selectForm[0].value){
        dataForm[0].value = "";
        dataForm[1].value = "";
        dataForm[2].value = "";
        dataForm[3].value = "";

        dataForm[0].style.borderColor = "";
        dataForm[1].style.borderColor = "";
        dataForm[2].style.borderColor = "";
        dataForm[3].style.borderColor = "";
       
        setTimeout(() => {document.getElementById('formulario').style.zIndex = "-1";
       alert("Obrigado por comprar conosco! Você será redirecionado para nossa página de produtos.");}, 100);
    
    } else {
        alert("Preencha os dados corretamente.");
    }

    if(dataForm[0].value === ""){
        dataForm[0].style.borderColor = "#e73550";
    } else {
        dataForm[0].style.borderColor = "";
    }

    if(dataForm[1].value === ""){
        dataForm[1].style.borderColor = "#e73550";
    } else {
        dataForm[1].style.borderColor = "";
    }

    if(dataForm[2].value === ""){
        dataForm[2].style.borderColor = "#e73550";
    } else {
        dataForm[2].style.borderColor = "";
    }

    if(dataForm[3].value = selectForm[0]){
        dataForm[3].style.borderColor = "#e73550";
    } else {
        dataForm[3].style.borderColor = "";
    }

    return false;
}


function cancelar(){
    document.getElementById('modal1').style.zIndex = "1";
    document.getElementById('formulario').style.zIndex = "-1";

    let dataForm = document.querySelectorAll('.data-form');

    dataForm[0].value = "";
    dataForm[1].value = "";
    dataForm[2].value = "";
    dataForm[3].value = "";

    dataForm[0].style.borderColor = "";
    dataForm[1].style.borderColor = "";
    dataForm[2].style.borderColor = "";
    dataForm[3].style.borderColor = "";
}