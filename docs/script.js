const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".copiar");
botonCopiar.style.display = "none"


function botonEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""
    botonCopiar.style.display = "block"
}

function encriptar(string) {
    var matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]
    let stringEncriptado = string.toLowerCase();
    //"let" es similar a "var" pero su alcance se limita solo a este bloque

    for (var i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }   
    }

    return stringEncriptado;   

}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""  
}

function desencriptar(string) {
    var matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]
    let stringDesencriptada = string.toLowerCase();
    //"let" es similar a "var" pero su alcance se limita solo a este bloque

    for (var i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

function copiar() {

    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Su texto fue vCopiado")
}
// Con "navigator.clipboard.writeText" capturamos al portapapeles el evento "mensaje.value = textoEncriptado"