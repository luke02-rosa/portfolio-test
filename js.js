const texts = document.querySelectorAll(".text");
const btnL = document.querySelector(".btnL");
const btnR = document.querySelector(".btnR");

let indice = 1;

function aggiornamentoDiv(){
    texts.forEach(texts => texts.classList.remove("attivo"));
    texts[indice].classList.add("attivo");
}

btnR.addEventListener("click",()=>{
    if(indice<texts.length-1){
        indice++;
        aggiornamentoDiv();
    }

})
btnL.addEventListener("click",()=>{
    if(indice>0){
        indice--;
        aggiornamentoDiv();
    }
} )
aggiornamentoDiv();