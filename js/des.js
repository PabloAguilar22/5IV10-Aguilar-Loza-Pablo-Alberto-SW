

//Ver archivo en la página

function abrirArchivo(evento){

    let archivo = evento.target.files[0];

    if (archivo){

        let reader = new FileReader();
        
        reader.onload = function(e){
            let contenido = e.target.result;
            document.getElementById('contenido').value = contenido;
        };

        reader.readAsText(archivo);
    } else{

        document.getElementById('mensajes').value= "No se seleccionó un archivo";
    }
}

window.addEventListener('load', ()=>{

    document.getElementById('archivo').addEventListener('change', abrirArchivo);
});

//Cifrar archivo

function cifrar(){

    var contenido = document.getElementById("contenido").value;
    var clave = document.getElementById("clave").value;
    var codificar = CryptoJS.DES.encrypt(contenido,clave);
    document.getElementById('contenido').value = codificar;
}

//Descifrar archivo

function descifrar(){

    var contenido = document.getElementById("contenido").value;
    var clave = document.getElementById("clave").value;
    var decodificar = CryptoJS.DES.decrypt(contenido,clave);
    document.getElementById('contenido').value = decodificar.toString(CryptoJS.enc.Utf8);

    console.log("descifrado" + decodificar);
    console.log("contenido: " + contenido);
    console.log("clave" + clave);
}