let usuario;
let usuariostorage= sessionStorage.getItem("usuario")
if (usuariostorage){
    usuario=usuariostorage;
    let mensaje= "bienvenido";
    alert(mensaje)
}
else{
    anestestesiologo()
}


function anestestesiologo() {
let usuario= prompt("¿Eres anestesiologo o residente de Anestesiologia?")
if (usuario=="si"){
    sessionStorage.setItem("usuario", usuario)
    let mensaje= "ya puedes entrar esta pagina es para anestesiologos"
    alert(mensaje)
}
else{
    while (usuario=="no")
    alert ("error vuelva a recargar la pagina")
}

}





