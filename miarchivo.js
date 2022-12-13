
let Condicion= prompt("¿Eres anestesiologo o residente de Anestesiologia?")
while (Condicion !="si"){
switch (Condicion){
    case "no":
        alert("esta pagina esta hecha para anestesiologos");
        break;
            
    case "nose":
        alert("si es anestesiologo o residente de anestesiologia escribir si de lo contrario escribir no");
        break;
}
Condicion= prompt("¿Eres anestesiologo o residente de Anestesiologia?")
}
alert ("Bienvenido, estas herramientas estan hechas para Anestesiologos")

function saludar(){
    let nombre= prompt("escribe tu nombre") 
    alert (`bienvenido devuelta ${nombre}` ) 
 }
 
 saludar()

