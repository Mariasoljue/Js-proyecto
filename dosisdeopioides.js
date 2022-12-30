let boton = document.getElementById("boton")
function dosisoralmetadona() {
    let dosis = prompt("inserte la dosis de metadona que desea calcular en base a morfina endovenosa")
    metadona= ((((dosis*3/4)/4)*0.3)/3)/2
    alert (`para una dosis de ${dosis}mg de morfina debera administrar ${metadona}ml de jarabe 0,2% cada 8hs`)
}

boton.addEventListener("click", dosisoralmetadona)
boton.addEventListener("mouseover",() => {TT.innerHTML="calculadora de metadona"} )

let botonmorfina = document.getElementById("botonmorfina")
function dosisoralmorfina() {
    let dosismor = prompt("inserte la dosis de morfina oral que desea calcular en base a morfina endovenosa")
    morfina= (((dosismor*3)/20)/6)
    gotasdemorf= (morfina*20)

    alert (`para una dosis de ${dosismor}mg de morfina debera administrar ${morfina}ml de gotas al 2% o ${gotasdemorf} gotas cada 4hs`)
}

botonmorfina.addEventListener("click", dosisoralmorfina)
botonmorfina.addEventListener("mouseover",() => {TT.innerHTML="calculadora de morfina"} )

let titulo= document.getElementById("TT");
titulo.addEventListener("mouseover",()=>{titulo.className="amarillo"})
 