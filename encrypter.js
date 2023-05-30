const reglaEncriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];//matriz, continene las reglas para el encriptado
const cajaEncriptado = document.querySelector(".caja2");
const mensaje1 = document.querySelector(".aviso1");
const mensaje2= document.querySelector(".aviso2");
const inputText = document.querySelector(".inputText");
const outputText = document.querySelector(".outPutText");
let btnEncriptar= document.querySelector("#encripta");
let btnDesencriptar=document.querySelector("#desencripta")
let btnCopiar=document.querySelector("#copiar"); /*variables necesarias para enlazar al html*/
const tamanio= document.querySelector("body");
const mensajeCopiado = document.querySelector("#mensajeInvisible");


function iniciaEncriptado(){
        let resultadoEncriptacion = encriptar(inputText.value);
        outputText.value = resultadoEncriptacion;
        if(outputText.value.length>0){
            cajaEncriptado.style.background="#000000a6";
            mensaje1.style.visibility = "hidden";
            mensaje2.style.visibility = "hidden";
            btnCopiar.style.visibility="visible";            
            cajaEncriptado.style.height ="50%"
            inputText.focus();
        }
        else{
            if(tamanio.clientWidth > 980){
                cajaEncriptado.style.background="url(imagenes/Muneco.png) no-repeat center 56px /80% #000000a6";
                mensaje1.style.visibility = "visible";
                mensaje2.style.visibility = "visible";
            }
            if(tamanio.clientWidth < 980){
                mensaje1.style.visibility = "visible";
                mensaje2.style.visibility = "visible";
                cajaEncriptado.style.height ="35%"
            }
        }
}
function iniciaDesencriptado(){
    let desencriptado = desencriptar(inputText.value);
    outputText.value = desencriptado;
    if(outputText.value.length>0){
        cajaEncriptado.style.background="#000000a6";
        mensaje1.style.visibility = "hidden";
        mensaje2.style.visibility = "hidden";
        cajaEncriptado.style.height ="50%"
        btnCopiar.style.visibility="visible";
    }
    else{
        if(tamanio.clientWidth > 980){
        cajaEncriptado.style.background="url(imagenes/Muneco.png) no-repeat center 56px /80% #000000a6";
        mensaje1.style.visibility = "visible";
        mensaje2.style.visibility = "visible";
        
        }
    }
}
function encriptar(texto){
    texto = texto.toLowerCase();
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
    mensajeCopiado.innerText ="¡Texto copiado al portapapeles!";
    mensajeCopiado.style.background="#00ffa1cf";
    setInterval(quitaMensaje,1500);
}
function quitaMensaje(){
    mensajeCopiado.innerText="";
    mensajeCopiado.style.background="none";
}
function leeAreaEncriptado(){//función lee lo que hay en el textarea a encriptar
   if(inputText.value.length <=0){
    if(tamanio.clientWidth > 980){
        cajaEncriptado.style.background="url(imagenes/Muneco.png) no-repeat center 56px /80% #000000a6";
        mensaje1.style.visibility ="visible";
        mensaje2.style.visibility ="visible";
        outputText.value="";
    
    }
    if(tamanio.clientWidth < 980){
        mensaje1.style.visibility ="visible";
        mensaje2.style.visibility ="visible";
        outputText.value="";
        btnCopiar.style.visibility="hidden";
        cajaEncriptado.style.height ="35%";
    }
   }
}