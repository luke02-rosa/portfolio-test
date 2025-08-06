const texts = document.querySelectorAll(".text");
const btnL = document.querySelector(".btnL");
const btnR = document.querySelector(".btnR");

let indice = 1;


/*function aggiornamentoDiv() {
    texts.forEach((el, i) => {
        // Rimuovo tutte le classi prima di aggiornarle
        el.classList.remove("attivo", "sinistra", "destra");

        if (i === indice) {
            // Il div centrale visibile
            el.classList.add("attivo");
        } 
         else if(texts[2].classList.contains("attivo")){
            texts[0].classList.add("destra");
        } else if (i < indice) {
            // I div con indice più piccolo vanno a sinistra
            el.classList.add("sinistra");
        } else if(i>indice){
            // I div con indice più grande vanno a destra
            el.classList.add("destra");
        } 

    });
}*/

function aggiornamentoDiv() {
  texts.forEach(el => el.classList.remove("attivo", "sinistra", "destra"));

  // Div centrale
  texts[indice].classList.add("attivo");

  // Calcola gli indici degli altri due
  const len = texts.length;
  const sinistra = (indice - 1 + len) % len;
  const destra = (indice + 1) % len;

  // Applica classi ai div a sinistra e a destra
  texts[sinistra].classList.add("sinistra");
  texts[destra].classList.add("destra");
}

btnR.addEventListener("click",()=>{
    indice = (indice + 1) % texts.length;
        
        aggiornamentoDiv();
    }

)
btnL.addEventListener("click",()=>{
    indice = (indice - 1 + texts.length) % texts.length;
        
        aggiornamentoDiv();
    }
 )
aggiornamentoDiv();
