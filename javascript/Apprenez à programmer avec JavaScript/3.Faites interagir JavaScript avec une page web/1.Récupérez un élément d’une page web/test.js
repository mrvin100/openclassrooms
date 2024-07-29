
// 1.Récupérez un élément d’une page web

let zoneProposition = document.querySelector("#zoneProposition span");
console.log(zoneProposition.firstChild);

let listeInutRadio = document.querySelectorAll(".zoneChoix input");

for(let i = 0; i < listeInutRadio.length; i++){
    console.log(listeInutRadio[i])
}


