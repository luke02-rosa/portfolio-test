const texts = document.querySelectorAll(".text");
const texts1 = document.querySelectorAll(".text1");
const btnL = document.querySelector(".btnL");
const btnR = document.querySelector(".btnR");

let indice = 1;

function aggTasti (){

    texts.forEach(el=> el.classList.remove("attivo","sinistra","destra"))

    //div centrale
    texts[indice].classList.add("attivo");
    texts1[indice].classList.add("attivo");


    //calcolo dei div 
    let len = texts.length
    let sinistro = (indice - 1 + texts.length) % len;
    let destro = (indice + 1) % len;
    
    texts[sinistro].classList.add("sinistra");
    texts[destro].classList.add("destra");
    

    
}
aggTasti();

btnL.addEventListener("click", ()=>{
    indice--
    if(indice<0){
        indice = texts.length-1;
    }
    aggTasti()
})
btnR.addEventListener("click", ()=>{
    indice++
    if(indice>texts.length -1){
        indice = 0;
    }
    aggTasti()
})