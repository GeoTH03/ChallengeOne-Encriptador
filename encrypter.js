const reglaEncriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];//Matriz, contiene las reglas para el encriptado
const cajaEncriptado = document.querySelector(".caja2");
const mensaje1 = document.querySelector(".aviso1");
const mensaje2= document.querySelector(".aviso2");
const inputText = document.querySelector(".inputText");
const outputText = document.querySelector(".outPutText");
let btnEncriptar= document.querySelector("#encripta");
let btnDesencriptar=document.querySelector("#desencripta")
let btnCopiar=document.querySelector("#copiar"); /*Variables necesarias para enlazar al html*/
const tamanio= document.querySelector("body");
const mensajeCopiado = document.querySelector("#mensajeInvisible");


function iniciaEncriptado(){
        let resultadoEncriptacion = encriptar(inputText.value);
        outputText.value = resultadoEncriptacion;
        if(outputText.value.length>0){
            cajaEncriptado.style.background="#000000a6";
            mensaje1.style.visibility = "hidden";
            mensaje2.style.visibility = "hidden";
            outputText.focus();
            if(tamanio.clientWidth<980){
            cajaEncriptado.style.height ="50%"            
            btnCopiar.style.visibility="visible";
            }
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
        
        if(tamanio.clientWidth<980){
            cajaEncriptado.style.height ="50%"            
            btnCopiar.style.visibility="visible";
            }
        outputText.focus();
    }
    else{
        if(tamanio.clientWidth > 980){
        cajaEncriptado.style.background="url(imagenes/Muneco.png) no-repeat center 56px /80% #000000a6";
        mensaje1.style.visibility = "visible";
        mensaje2.style.visibility = "visible";
        
        }
    }
}/*Función que encripta el texto */
function encriptar(texto){
    texto = texto.toLowerCase();/*convierte en minusculas si el texto esta en mayuscula*/
    for(let i = 0; i<reglaEncriptado.length;i++){
        if(texto.includes(reglaEncriptado[i][0])){//compara el contenido y si incluye la letra se ejecuta
            texto = texto.replaceAll(reglaEncriptado[i][0],reglaEncriptado[i][1]);//reemplaza la letra con el elemento numero 1 de la matriz
        }
    }
    return texto;//regresa el resultado de la función
}/*Función que desencripta el texto */
function desencriptar(textoEncriptado){
    for(let i = 0; i<reglaEncriptado.length; i++){
        if(textoEncriptado.includes(reglaEncriptado[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(reglaEncriptado[i][1],reglaEncriptado[i][0]);
        }
    }
    return textoEncriptado;
}/*Función de copiado */
function copiar(){
    outputText.select();//Selecciona el texto
    outputText.setSelectionRange(0, 99999)//Establece un rango de la selección
    let textocopiado = document.execCommand('copy');//Ejecuta el copiado y lo guarda en la variable
    window.getSelection().removeAllRanges();//Remueve el rango de selección para que no se muestre
    mensajeCopiado.innerText ="¡Texto copiado al portapapeles!";//Manda el mensaje copiado con éxito
    mensajeCopiado.style.background="#00ffa1cf";
    setInterval(quitaMensaje,1500);//Establece el tiempo en el que se muestra el mensaje
}
function quitaMensaje(){/*Elimina el mensaje de copiado */
    mensajeCopiado.innerText="";
    mensajeCopiado.style.background="none";
}
function leeAreaEncriptado(){//Función lee lo que hay en el textarea a encriptar
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