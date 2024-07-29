
// 1.Récupérez la valeur d’un champ de formulaire

let baliseNom = document.querySelector("#nom")
let baliseAccepter = document.querySelector("#accepter")

let nom = baliseNom.value;
let accepter = baliseAccepter.checked;

console.log(nom);//Affiche le contenue de la balise name
console.log(accepter);//Affiche le contenue de la balise accepter

// Savoir quel champ est coche

let baliseCouleur = document.querySelectorAll('input[name ="couleur"]');

let couleur = "";

for (let i = 0; i < baliseCouleur.length; i++){
    if(baliseCouleur[i].checked){
        couleur = baliseCouleur[i].value;
        break
    }
}

console.log(couleur) // afficher la couleur de la case a cocher
