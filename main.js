let textI = document.getElementById("textI"); // TEXTO INICIAL
let textF = document.getElementById("textF"); // TEXTO FINAL
let caracter = document.getElementById("caracter") // CARACTERES
let word = document.getElementById("palavras") // PALAVRAS
let upperBtn = document.getElementById("upperCaseBtn") // BOTÃO LETRA GRANDE
let lowerBtn = document.getElementById("lowerCaseBtn") // BOTÃO LETRA PEQUENA
let clearBtn = document.getElementById("clearBtn") // BOTÃO LIMPAR
let copyBtn = document.getElementById("copyBtn")// BOTÃO CPIAR
let firstBtn = document.getElementById("primeiraBtn") // BOTÃO PRIMEIRA LETRA MAIÚSCULA

// LETRA GRANDE
upperBtn.onclick = function() {

    textF.value = textI.value.toUpperCase()



}

// LETRA PEQUENA
lowerBtn.onclick = function() {
    
    textF.value = textI.value.toLowerCase()


}

// BOTÃO LIMPAR
clearBtn.onclick = function() {

    textI.value = ''
    textF.value = ''


}

// BOTÃO COPIAR
copyBtn.onclick =  function() {

    if(!textI.value.trim()){
       return alert("Escreva algo antes de copiar!");
    }
    if(!textF.value.trim()) {

        textI.select();
        navigator.clipboard.writeText(textI.value);
        copyBtn.style.backgroundColor = '#b3e36f'
        copyBtn.innerText = "Copiado!"
        setTimeout(()=> {
            copyBtn.innerText = "Copiar"
            copyBtn.style.backgroundColor = '#007bff'
        },3000)



    }else {
        textF.select();
        navigator.clipboard.writeText(textF.value);
        copyBtn.style.backgroundColor = '#b3e36f'
        copyBtn.innerText = "Copiado!"
        setTimeout(()=> {
            copyBtn.innerText = "Copiar"
            copyBtn.style.backgroundColor = '#007bff'
        },3000)

    }

}

// PRIMEIRA LETRA MAIÚSCULA EM CADA PALAVRA
firstBtn.onclick = function() {

    console.log(textI.value[0].toUpperCase() + textI.value.substr(1).split(" "))
  
    let palavras = textI.value.split(" ");
    

   
    for (let i = 0; i < palavras.length; i++) {
     palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
    }
    textF.value = palavras.join(" ")

}

setInterval(() => {
    caracter.innerText = textI.value.length
    word.innerText = textI.value.trim().split(" ").length
    
}, 50);


