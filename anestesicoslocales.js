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
            RES.innerHTML= `${result1} mg`
            RES2.innerHTML= `${dosis1} ml`
        });
        lidoe1.addEventListener("click",()=>{
            let result1= input2*7;
            let dosis1= result1/20;
            RES.innerHTML= `${result1} mg` 
            RES2.innerHTML= `${dosis1} ml`
        });
        bupi1.addEventListener("click",()=>{
            let result1= input2*2;
            let dosis1= result1/5;
            RES.innerHTML= `${result1} mg` 
            RES2.innerHTML= `${dosis1} ml`
        });
    }
})
const lista= document.getElementById("lista")
const Traerper= async() =>{
    const response= await fetch("data.json");
    const data= await response.json();
   const li= document.createElement("li")
   
   data.forEach(nombre => {
    const li= document.createElement("li");
    li.innerHTML =`
    <h4>${nombre.nombre}}</h4>
    <h4>${nombre.dosis} mg/kg</h4>`
    ;
    lista.append(li)

}
)}
        
    

Traerper()
   
