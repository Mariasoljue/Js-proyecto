const tiposdeopioides = ["morfina","tramadol","metadona"]
alert (`esta calculadora de opioides orales tiene ${tiposdeopioides.length} tipos de opioides`)


function dosisoralmetadona() {
    let dosis = prompt("inserte la dosis de metadona que desea calcular en base a morfina endovenosa")
    metadona= ((((dosis*3/4)/4)*0.3)/3)/2
    alert (`para una dosis de ${dosis}mg de morfina debera administrar ${metadona}ml de jarabe 0,2% cada 8hs`)
}
dosisoralmetadona()