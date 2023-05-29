const reglaEncriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];//matriz, continene las reglas para el encriptado
const inputText = document.querySelector(".inputText");
const outputText = document.querySelector(".outPutText");
let btnEncriptar= document.querySelector("#encripta");
let btnDesencriptar=document.querySelector("#desencripta")
let btnCopiar=document.querySelector("#copiar"); /*variables necesarias para enlazar al html*/
function iniciaEncriptado(){
        let resultadoEncriptacion = encriptar(inputText.value);
        outputText.value = resultadoEncriptacion;
}
function iniciaDesencriptado(){
    let desencriptado = desencriptar(inputText.value);
    outputText.value = desencriptado;
}
function encriptar(texto){
    for(let i = 0; i<reglaEncriptado.length;i++){
        if(texto.includes(reglaEncriptado[i][0])){
            texto = texto.replaceAll(reglaEncriptado[i][0],reglaEncriptado[i][1]);
        }
    }
    return texto;
}
function desencriptar(textoEncriptado){
    for(let i = 0; i<reglaEncriptado.length; i++){
        if(textoEncriptado.includes(reglaEncriptado[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(reglaEncriptado[i][1],reglaEncriptado[i][0]);
        }
    }
    return textoEncriptado;
}
function copiar(){

    outputText.select();
    outputText.setSelectionRange(0, 99999)
    textocopiado = document.execCommand('copy');
    window.getSelection().removeAllRanges();
}