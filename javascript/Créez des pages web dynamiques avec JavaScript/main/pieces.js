/* Recuperation des pieces depuis le fichier json */

import { ajoutListenerAvis, ajoutListenerEnvoyerAvis, afficherAvis, afficherGraphiqueAvis } from "./avis.js";

// const reponse = await fetch("pieces-autos.json");
// const pieces = await reponse.json();

//  const pieces = await fetch('pieces-autos.json').then(pieces => pieces.json());


//Stokage des informations dans le local Storage
window.localStorage.setItem('nom', 'Les Bonnes Pieces !');
const nomEntreprise = window.localStorage.getItem('nom');
//Recuperatin des pieces eventuele;ent stoquees dans le localstorage
let pieces = window.localStorage.getItem('pieces');

if(pieces === null){
    //Recuperation des pieces depuis l'api
    const reponse = await fetch(`http://localhost:8081/pieces`);
    const pieces = await reponse.json();
    // Transformation des pieces an JSON
    const valuerPieces = JSON.stringify(pieces);
    //Stokage des informations dans le local Storage
    window.localStorage.setItem('pieces', valuerPieces);
}else{
    pieces = JSON.parse(pieces);
}


ajoutListenerEnvoyerAvis();



function genererPieces(pieces){
for (let i = 0; i < pieces.length; i++){
    const article = pieces[i];
    // Recupeartion de l'element du DOM qui acceuillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Creation d'une balise dediee a une piece automobile
    const pieceElement = document.createElement("article");
    // On cree l'element img
    const imageElement = document.createElement("img");
    // On accede a l'indice i de la liste des pieces pour configiurer la source de l'image.
    imageElement.src = pieces[i].image;
    // Idem pour le nom, le prix et la cathegorie...
    const nomElement = document.createElement("p");
    const prixElement = document.createElement("p");
    const categorieElement = document.createElement("p");
    const descriptionElement = document.createElement("p");
    const disponibilite = document.createElement("p");
    // On accede a l'indice i de la liste des pieces pour configiurer la source de chacun.
    nomElement.innerText = pieces[i].nom;
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    categorieElement.innerText = article.categorie ?? "(aucune categorie)";
    descriptionElement.innerHTML = article.description ?? "(Pas de description pour le moment)";
    disponibilite.innerHTML = `Disponibilite: (${article.disponibilite ? "En stock" : "Rupture de stock"})`;

    //avis utilisateur
    const avisBouton = document.createElement('button');
    avisBouton.dataset.id = article.id;
    avisBouton.textContent = "Afficher les avis";
    //On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);

    //On rattache l'image a piecesElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(disponibilite);
    
    pieceElement.appendChild(avisBouton);
}

//Ajout de la fonction ajoutListeAvis
ajoutListenerAvis();

}

// Premier afficahge de la page
genererPieces(pieces);

for(let i = 0; i < pieces.length; i++){
    const id = pieces[i].id;
    const avisJSON = window.localStorage.getItem(`avis-piece-${id}`);
    const avis = JSON.parse(avisJSON);
    if(avis !== null){
        const pieceElement = document.querySelector(`article[data-id='${id}']`);
        afficherAvis(pieceElement, avis);
    }
}
//Ajout d'un listener pour trier les pieces par ordre croissant
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function(){
    const piecesOrdonnees = Array.from(pieces)
    piecesOrdonnees.sort(function(a, b){
        return a.prix - b.prix;
    });
    console.log(piecesOrdonnees);
    // Effaccement a l'ecran et regeneration de la page
    document.querySelector('.fiches').innerHTML = '';
    genererPieces(piecesOrdonnees);
});

//Ajout d'un listener pour trier les pieces non abordables
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function(){
    const piecesFiltrees = pieces.filter(function(piece){
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
    // Effaccement a l'ecran et regeneration de la page
    document.querySelector('.fiches').innerHTML = '';
    genererPieces(piecesFiltrees);
});

const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function(){
    pieces.sort(function(a, b){
        return b.prix - a.prix;
    });
    console.log(pieces);
});

const filtrerDescription = document.querySelector(".btn-filtrer-description");

filtrerDescription.addEventListener("click", function(){
    const descriptionsFiltrees = pieces.filter(function(piece){
        return piece.description;
    });
    console.log(descriptionsFiltrees);
});

// Afficher la liste des pieces abordables
const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1; i >= 0; i--){
    if(pieces[i].prix > 35){
        noms.splice(i,1)
    }
}
console.log(noms)
// Creation de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom a la liste

for(let i = 0; i < noms.length; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement)
}
//Ajout de l'en-tete puis de la liste au bloc resultats filtres
document.querySelector('.abordables').appendChild(abordablesElements);


//Afficher la liste des pieces disponibles
const liste = pieces.map(piece => `${piece.nom} – ${piece.prix}€`)
for(let i = pieces.length -1; i >= 0; i--){
    if(!pieces[i].disponibilite){
        liste.splice(i,1)
    }
}
console.log(liste)

const disponibleElements = document.createElement('ul');
//Ajout de chaque nom a la liste

for(let i = 0; i < liste.length; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = liste[i];
    disponibleElements.appendChild(nomElement);
}
//Ajout de l'en-tete puis de la liste au bloc resultats filtres
document.querySelector('.disponibles').appendChild(disponibleElements);

const inputPrixMax = document.querySelector('#prix-max');
inputPrixMax.addEventListener('input', function(){
    const piecesFiltrees = pieces.filter(function(piece){
        return piece.prix <= inputPrixMax.value;
    });
    // Effaccement a l'ecran et regeneration de la page
    document.querySelector('.fiches').innerHTML = '';
    genererPieces(piecesFiltrees);
})


//Ajout d'un listener pour mettre a jour des donnees du localstorage
const boutonMettreAJour = document.querySelector('.btn-maj');
boutonMettreAJour.addEventListener('click', function(){
    window.localStorage.removeItem('pieces');
});

await afficherGraphiqueAvis();