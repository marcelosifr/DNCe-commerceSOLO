let credencial = document.querySelectorAll('.login-credential');
let msgAviso = document.querySelectorAll('.errorMsg');

function validacao() {
    if (credencial[0].value === "123.456.789-10" && credencial[1].value === "12345678"){
        msgAviso[2].innerHTML = `Login bem sucedido.`;
        msgAviso[2].style.color = "#0f7b0f";
        setTimeout(()=> {window.location.href = "pag2.html";}, 2000);

    } else {
        msgAviso[2].innerHTML = `Dados incorretos.`;
        msgAviso[2].style.color = "#e73550";
    }

    if (credencial[0].value !== "123.456.789-10"){
        msgAviso[0].innerHTML = `Favor preencher corretamente.`;
        msgAviso[0].style.color = "#e73550";
        credencial[0].style.borderColor = "#e73550";
        credencial[0].value ="";
        
    } else {
        msgAviso[0].innerHTML = "";
        credencial[0].style.borderColor = "";
    }

    if (credencial[1].value !== "12345678"){
        msgAviso[1].innerHTML = `Favor preencher corretamente.`;
        msgAviso[1].style.color = "#e73550";
        credencial[1].style.borderColor = "#e73550";
        credencial[1].value ="";
    } else {
        msgAviso[1].innerHTML = "";
        credencial[1].style.borderColor = "";
    }


return false;
}