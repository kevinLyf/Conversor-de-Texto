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

    caracter.innerText = `Quantidade de caracteres: ${textI.value.length}`
    word.innerText = `Total de palavras: ${textI.value.trim().split(" ").length}`


}

// LETRA PEQUENA
lowerBtn.onclick = function() {
    
    textF.value = textI.value.toLowerCase()

    caracter.innerText = `Quantidade de caracteres: ${textI.value.length}`
    word.innerText = `Total de palavras: ${textI.value.trim().split(" ").length}`

}

// BOTÃO LIMPAR
clearBtn.onclick = function() {

    textI.value = ''
    textF.value = ''

    caracter.innerText = `Quantidade de caracteres: ${textI.value.length}`
    word.innerText = `Total de palavras: ${textI.value.split(" ").length}`

}

// BOTÃO COPIAR
copyBtn.onclick = async function() {

    if(!textI.value.trim()){
        alert("Escreva algo antes de copiar!");

    }
    textF.select();
    await navigator.clipboard.writeText(textF.value);
    console.log(navigator.clipboard.writeText(textF.value))
    alert('COPIADO!')
}

// PRIMEIRA LETRA MAIÚSCULA EM CADA PALAVRA
firstBtn.onclick = function() {

    console.log(textI.value[0].toUpperCase() + textI.value.substr(1).split(" "))
  
    let palavras = textI.valu.split(" ");
    

   
    for (let i = 0; i < palavras.length; i++) {
     palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
    }
    textF.value = palavras.join(" ")

    caracter.innerText = `Quantidade de caracteres: ${textI.value.length}`
    word.innerText = `Total de palavras: ${textI.value.trim().split(" ").length}`
}



