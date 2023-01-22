let input1= document.getElementById("peso1")
let lido1= document.getElementById("lido")
let bupi1= document.getElementById("bupi")


input1.addEventListener("input",(e)=>{
    let input2= input1.value;
    if (input2>0) {
        lido1.addEventListener("click",()=>{
            let result1= (input2*10)/2;
            let dosis1= 10-result1;
            RES.innerHTML= `${result1} ml a colocar de la solucion concentrada`
            RES2.innerHTML= `${dosis1} ml colocar de solucion fisiologica`
        });
       
        bupi1.addEventListener("click",()=>{
            let result2= ((input2*10)/0.5);
            let dosis2= 10-result2;
            RES.innerHTML= `${result2} ml a colocar de la solucion concentrada`
            RES2.innerHTML= `${dosis2}ml colocar de solucion fisiologica`
        });
    }
})