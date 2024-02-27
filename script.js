const ingresoTexto = document.getElementById("ingresoTexto");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const mensajeFinal = document.getElementById("mensajeFinal");
const btnCopiar = document.getElementById("btnCopiar");
const muneco = document.getElementById("muneco");
const mensaje1 = document.getElementById("mensaje1");
const info1 = document.getElementById("info1");
const alerta = document.getElementsByClassName("alerta");

let reemplazar = [
    ["e","enter"],
    ["o","ober"],
    ["i","imes"],
    ["a","ai"],
    ["u","ufat"],
]

const inicio = (nuevoValor)=>{
    mensajeFinal.innerHTML = nuevoValor;
    ingresoTexto.value = "";
    mensajeFinal.style.display = "block";
    mensaje1.style.display = "none";
    muneco.style.display = "none";
    info1.style.display = "none";
    btnCopiar.style.display = "block"
}

const reset = ()=>{
    mensajeFinal.innerHTML = "";
    mensaje1.style.display = "block";
    muneco.style.display = "block";
    info1.style.display = "block";
    btnCopiar.style.display = "none";
    mensajeFinal.style.display = "none";
    ingresoTexto.focus();
}

btnEncriptar.addEventListener("click",() => {
   const texto = ingresoTexto.value.toLowerCase();
    if(texto !=""){
        function encriptar(newText){
            for(let i=0; i<reemplazar.length;i++){
                if(newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0],reemplazar[i][1]);
                };
            };
            return newText
        }
    }else{
        alert("Ingrese texto a encriptar");
        reset();
    }
    inicio(encriptar(texto));
})

btnDesencriptar.addEventListener("click",() => {
    const texto = ingresoTexto.value.toLowerCase()
    if(texto !=""){
        function desencriptar(newText){
            for(let i=0; i<reemplazar.length;i++){
                if(newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1],reemplazar[i][0]);
                };
            };
            return newText
        }
    }else{
        alert("Ingrese texto a desencriptar");
        reset();
    }
    inicio(desencriptar(texto));
 })

 btnCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    // navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand(`copy`);
    alert("Texto copiado");
    reset();
 })