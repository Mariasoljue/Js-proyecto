const anestesicoslocales = [
    {id:1, nombre:"lidocaina sin epinefrina", dosis:5},
    {id:2, nombre:"lidocaina con epinefrina", dosis:7},
    {id:3, nombre:"bupivacaina", dosis:3},
]

let nombre = prompt("inserte el nombre del anestesico local")
let aldosismasbaja = anestesicoslocales.find(item=>item.nombre===nombre)
let mensaje= 
`id:${aldosismasbaja.id}, 
anestesico local: ${aldosismasbaja.nombre}
anestesico dosis toxica: ${aldosismasbaja.dosis} `

alert (mensaje)


let peso= parseInt(prompt("¿diga cual es el peso del paciente en kilogramos?"))
let tipodedroga= parseInt (prompt("si desea calcular dosis toxica de la bupivacaina escriba 1 y para calcular el de la lidocaina escriba 2"))
if (tipodedroga===1){
let concentraciondedrogabupi= parseInt(prompt("Escriba cual es la concentracion de la Bupivacaina en mg/ml"))
let Resultadodosistoxicabupi = (peso*2)
let Resultadosmlaadministratbupi=(Resultadodosistoxicabupi/concentraciondedrogabupi)
alert (`para un peso de ${peso}kg la  dosis toxica de bupivacaina es de ${Resultadodosistoxicabupi}mg y deberas administrar ${Resultadosmlaadministratbupi}ml`)

}
else {
let concentraciondedrogalido= parseInt(prompt("Escriba cual es la concentracion de la lidocaina en mg/ml"))
let Resultadodosistoxicalido = (peso*4)
let Resultadosmlaadministrarlido=(Resultadodosistoxicalido/concentraciondedrogalido)
alert (`para un peso de ${peso}kg la  dosis toxica de Lidocaina es de ${Resultadodosistoxicalido}mg y deberas administrar ${Resultadosmlaadministrarlido}ml`)
}
