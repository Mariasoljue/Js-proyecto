let input1= document.getElementById("peso1")
let morfi= document.getElementById("morfina")
let meta= document.getElementById("metadona")


input1.addEventListener("input",(e)=>{
    let input2= input1.value;
    if (input2>0) {
        meta.addEventListener("click",()=>{
            let result1= ((((input2*3/4)/4)*0.3)/3)/2;
            let dosis1= result1*20;
            RES.innerHTML= `${result1} ml de jarabe al 2% cada 4hs`;
            RES2.innerHTML= `${dosis1} mg`;
            RES3.innerHTML=".";
        });
        morfi.addEventListener("click",()=>{
            let result2= (((input2*3)/20)/6);
            let dosis2= result2*20;
            RES.innerHTML= `${result2} mg` ;
            RES3.innerHTML=`${dosis2} gotas`;
            RES2.innerHTML="."
        });
       
    }
})
setTimeout(() => {
    RES.innerHTML=`Realice un calculo para continuar`
}, 100);