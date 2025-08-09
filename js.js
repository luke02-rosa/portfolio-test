const texts = document.querySelectorAll(".text");
const texts1 = document.querySelectorAll(".text1");
const btnL = document.querySelector(".btnL");
const btnR = document.querySelector(".btnR");
const A = document.querySelector(".pulsanteA");
const B = document.querySelector(".pulsanteB");
const projects = document.querySelector("#projects");
const titoloProj = document.querySelector(".titoloProj");
const proj1stPage = document.querySelector(".proj1stPage");


let primaParte = true;
let indice = 1;

nascostoAvvio();
aggTasti();


function nascostoAvvio(){
    proj1stPage.classList.add("nascosto");
}
function aggTasti (){
    
    texts.forEach(el=> el.classList.remove("attivo","sinistra","destra"))
    texts1.forEach(el=> el.classList.remove("attivo","sinistra","destra"))

    //div centrale
    texts[indice].classList.add("attivo");
    
    
    


    //calcolo dei div 
    let len = texts.length
    let sinistro = (indice - 1 + texts.length) % len;
    let destro = (indice + 1) % len;
    
    texts[sinistro].classList.add("sinistra");
    texts[destro].classList.add("destra");
    
     if(texts[1].classList.contains("attivo")){
        texts1[1].classList.add("attivo");
        texts1[0].classList.add("sinistra");
        texts1[2].classList.add("destra");
    } else if(texts[0].classList.contains("attivo")){
        texts1[0].classList.add("attivo");
        texts1[2].classList.add("sinistra");
        texts1[1].classList.add("destra");
    } else if(texts[2].classList.contains("attivo")){
        texts1[2].classList.add("attivo");
        texts1[1].classList.add("sinistra");
        texts1[0].classList.add("destra");
    }
   
}
function prj(){
    if(projects.classList.contains("active1st")){
        titoloProj.classList.add("nascosto");
        proj1stPage.classList.remove("nascosto");

    }
}
function prjR(){
    titoloProj.classList.remove("nascosto");
    proj1stPage.classList.add("nascosto");
}


btnL.addEventListener("click", ()=>{
    btnL.style.cssText = "transform:translatey(2%) rotate(-1deg)" ;
    setTimeout(()=>{
        btnL.style.cssText =  `  
        
        position: absolute;
        background-color:grey; 
        right: 53%;
        top: 34%;
        width: 25%;
        height: 20%;
        clip-path: polygon(
            0% 0%,
            70% 0%,
            100% 50%,
            70% 100%,
            0% 100%
        );
        border: none;
        cursor: pointer;
        transform: rotate(2deg);`    
    },150);
    if(primaParte===false){
    }else{
        indice--
    if(indice<0){
        indice = texts.length-1;
    }
    aggTasti()
    }
    
    
    
    
})
btnR.addEventListener("click", ()=>{
    btnR.style.transform= "translateY(5%) rotate(5deg)";
    setTimeout(()=>{
        btnR.style.cssText =  `
        position: absolute;
        background-color: grey;
        left: 55%;
        top: 34%;
        width: 25%;
        height: 20%;
        clip-path: polygon(
            30% 0%,
            100% 0%,
            100% 100%,
            30% 100%,
            0% 50%
        );
        border: none;
        cursor: pointer;
        transform: rotate(1.5deg);
`
    },150);if(primaParte===false){
    }else{
    indice++
    if(indice>texts.length -1){
        indice = 0;
    }
    aggTasti()}
    
})

A.addEventListener("click",()=>{
    primaParte = false;
    const target = document.querySelector(".text1.attivo");
    const targetS = document.querySelector(".text1.sinistra");
    const targetD = document.querySelector(".text1.destra");

    

    target.classList.add("active1st");
    targetS.classList.add("hidden");
    targetD.classList.add("hidden");

    prj();
    
})
B.addEventListener("click", ()=>{
    if(primaParte===false){
        const target = document.querySelector(".text1.attivo");
        const targetS = document.querySelector(".text1.sinistra");
        const targetD = document.querySelector(".text1.destra");

        

        target.classList.remove("active1st");
        targetS.classList.remove("hidden");
        targetD.classList.remove("hidden");

      primaParte=true;

      prjR();
      
    }
        
})

