 const ingresoTexto = document.getElementById("ingresoTexto");
const aviso = document.querySelector(".textoAviso");
const botEncriptar = document.querySelector(".btn-encriptar");
const botDesEncriptar = document.querySelector(".btn-desencriptar")
const mensajeFinal = document.getElementById("mensajeFinal");
const tarjetaContenedor = document.querySelector(".contenedormuneco");
const btnCopiar = document.getElementById("btnCopiar");


const matrizRemplazo = [
    ["e", "enter"],
    ["i", "imes" ],
    ["a", "ai" ],
    ["o", "ober"],
    ["u", "ufat"],
];

// Pone el foco en el texto a encriptar
ingresoTexto.focus();

// Actualiza el texto de alerta para el usuario
ingresoTexto.addEventListener("input", updateValue);

function updateValue() {
    // console.log(ingresoTexto.value + " texto a encripar dentro de upadatevalue");
    aviso.style.color = "#495057";
    aviso.textContent = "Solo letras minúsculas y sin acentos";
}

//Función inicio encriptación o desencriptación
function inicio (nuevoValor){
    mensajeFinal.innerHTML = nuevoValor;
    ingresoTexto.value = "";
    tarjetaContenedor.style.visibility = "hidden";
    btnCopiar.style.display = "block";
    mensajeFinal.style.display ="block"; 
    mensajeFinal.focus();
}

//Función reset despues de copiar, devuelve la pagina al estado inicial
function reset (){
    mensajeFinal.innerHTML = "";
    ingresoTexto.value = "";
    tarjetaContenedor.style.visibility = "visible";
    btnCopiar.style.display = "none";
    ingresoTexto.focus();
    mensajeFinal.style.display ="none";
}


// funcion encriptar

botEncriptar.addEventListener("click", encriptando);

function encriptando() {

    let textoAEncriptar = ingresoTexto.value;

    cajatexto = ingresoTexto.value;
    
    // Si no hay texto en el textarea
    if (cajatexto.length <= 0 ) {
        aviso.style.color = "#ff0000";
        aviso.textContent = "Por favor ingrese texto a Encriptar";
        ingresoTexto.focus();
        return cajatexto = "";
    }
    
    // Verifica si hay Mayusculas
    if (encuetraMayusculas(cajatexto) == false){
        return;
    }
        
    // Verifica si hay caracteres especiales
    if (encuetraEspeciales(cajatexto) == false){
        return;
    };
    


    // Inicia la encripcion
    for (let i = 0; i < matrizRemplazo.length; i++){
        if (cajatexto.includes(matrizRemplazo[i][0])) {
            cajatexto = cajatexto.replaceAll(
                matrizRemplazo[i][0],
                matrizRemplazo[i][1]
            );
        }
    };

    mensajeFinal.value = cajatexto;

    inicio();

    return cajatexto;
    
}



// Activa click en el boton copiar
btnCopiar.addEventListener("click", copiarTexto);
function copiarTexto(campoTexto) {

    /* Selecciona el texto */    
    mensajeFinal.select();
    mensajeFinal.setSelectionRange(0, 99999); /* Para dispositivos móviles */
    
    /* Copiar el texto al portapapeles */
    document.execCommand("copy");
    reset();
};




// Funcion desencriptar

botDesEncriptar.addEventListener("click", desEncriptando);

function desEncriptando(cajatexto) {
    cajatexto = ingresoTexto.value;
    
    if (cajatexto.length <= 0 ) {
        aviso.style.color = "#ff0000";
        aviso.textContent = "Por favor ingrese texto a Desencriptar";
        ingresoTexto.focus();
        return cajatexto = "";
    }
    
    if (encuetraMayusculas(cajatexto) == false){
        return;
    }
        
    if (encuetraEspeciales(cajatexto) == false){
        return;
    };

    for (let i = matrizRemplazo.length -1 ; i >= 0; i--){
        if (cajatexto.includes(matrizRemplazo[i][1])) {
            cajatexto = cajatexto.replaceAll(
                matrizRemplazo[i][1],
                matrizRemplazo[i][0]
            );
        }
    };

    mensajeFinal.value = cajatexto;

    inicio();
    
    return cajatexto;
    
}


function encuetraEspeciales(cajatexto) {
 
    // Caracteres Especiales
    let caracteresEspeciales = /[ªº\·$€&Ç+,:;=?¿@#|'<>.^*()%-_{}"¡'`¨áéíóúü]/g;
    let encontroEspeciales = [];

    if (caracteresEspeciales.test(cajatexto)) {
        
        encontroEspeciales = encontroEspeciales.concat(cajatexto.match(caracteresEspeciales));
        
        if (encontroEspeciales.length > 0) {
            aviso.style.color = "#ff0000";
            aviso.textContent = "No se permiten caracteres especiales, por favor borre e intente de nuevo!";
            ingresoTexto.focus();
            cajatexto = "";
            return false;
        }
    } 
    
}


function encuetraMayusculas(cajatexto) {
    
    // Mayusculas
    let caracteresMayusculas = /[A-Z]/g;
    let encontroMayusculas = [];
    
    if(caracteresMayusculas.test(cajatexto)) {
        
        encontroMayusculas = encontroMayusculas.concat(cajatexto.match(caracteresMayusculas));

        if (encontroMayusculas.length > 0) {
            console.log("Tiene Mayusculas");
            aviso.style.color = "#ff0000";
            aviso.textContent = "No se permiten Mayusculas, por favor borre e intende de nuevo!";
            ingresoTexto.focus();
            cajatexto = "";
            return false;
        }
    }


}
