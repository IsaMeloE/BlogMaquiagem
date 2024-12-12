const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkForm();

})


function checkInputUsername(){
    const usernameValue = username.value;
    
    if(usernameValue === "") {
        errorInput(username, "Preencha com seu nome!");
        
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    
    textMessage.innerText = message;
    
    formItem.className = "form-content error";
}


function checkInputEmail(){
    const emailValue = email.value;
    
    if(emailValue === "") {
        errorInput(email, "Preencha com seu email!");
        
    }
}

function checkForm(){
    
    checkInputUsername();
    checkInputEmail();
    
    const formItens = form.querySelectorAll(".form-content")
    
    const isValid = [...formItens].every( (item) => {
        return item.className === "form-content"
    });
    
    if(isValid) {
         alert ("Email cadastrado com sucesso!!")
         form.reset()
         formItens.forEach((item) => item.className = "form-content");
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content error";
}

