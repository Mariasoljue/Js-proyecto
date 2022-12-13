const tiposdeopioides = ["morfina","tramadol","metadona"]

let nombres= prompt("inserte nombre del opioide oral");
if (nombres==tiposdeopioides ) {
    alert ("ese opioide esta en la base de datos")
}
else{
    alert("ese opioide no se encuentra en la base de datos")
}

    
function calculardosisoralmetadona() {
    let dosis = parseint(prompt("inserte la dosis de metadona que desea calcular en base a morfina endovenosa"))
    metadona= ((((dosis*3/4)/4)*0.3)/3)/2
    alert (`para una dosis de ${dosis}mg de morfina debera administrar ${metadona}ml de jarabe 0,2% cada 8hs`)
}
calculardosisoralmetadona()


