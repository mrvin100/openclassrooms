// Ecrivez votre code en dessous de ces commentaires.
// Pensez à ouvrir l'onglet console pour consulter le résultat !

// declarons le morceaux de notre playlist

const playlist = ["morceau1","morceau2","morceau3"];
let totalMorceaux = playlist.length;

// fuction pour voir les resultat dans la console
function resultat() {
  console.log(playlist);
  console.log(totalMorceaux);
}

// Ajoutons les morceaux de nos amis

playlist.push("morceau4","morceau5");
resultat();

// Enlevons le dernier morceau de note playlist

playlist.pop();
resultat();