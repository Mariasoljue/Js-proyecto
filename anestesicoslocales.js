let input1= document.getElementById("peso1")
let lido1= document.getElementById("lido")
let bupi1= document.getElementById("bupi")
let lidoe1= document.getElementById("lidoe")

input1.addEventListener("input",(e)=>{
    let input2= input1.value;
    if (input2>0) {
        lido1.addEventListener("click",()=>{
            let result1= input2*5;
            let dosis1= result1/20;
            RES.innerHTML= result1 
            RES2.innerHTML= dosis1
        });
        lidoe1.addEventListener("click",()=>{
            let result1= input2*7;
            let dosis1= result1/20;
            RES.innerHTML= result1 
            RES2.innerHTML= dosis1
        });
        bupi1.addEventListener("click",()=>{
            let result1= input2*2;
            let dosis1= result1/5;
            RES.innerHTML= result1 
            RES2.innerHTML= dosis1
        });
    }
})


const anestesicoslocales = [
    {id:1, nombre:"lidocaina sin epinefrina", dosis:5},
    {id:2, nombre:"lidocaina con epinefrina", dosis:7},
    {id:3, nombre:"bupivacaina", dosis:3},
]
 localStorage.setItem ("caracteristicas",JSON.stringify(anestesicoslocales))
localStorage.setItem("pesos",input2)
console.log(localStorage)



