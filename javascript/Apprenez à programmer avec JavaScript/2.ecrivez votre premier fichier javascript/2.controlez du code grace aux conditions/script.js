// console.log("Hello World!");
// Code source de l'appli azertype

function message (message){
    console.log(message);
}


const motApplication = "Bonjour" //Essayons de mettre un mot ici
let motUtilisateur = prompt("Entrez le mot : " + motApplication); // mot entre par l'utilisateur


if(motUtilisateur === motApplication){
    message("Bravo, vous avez corectement tape le mot! " + motUtilisateur);
}else{
    message("Vous avez fait une erreur de frappe.");
}

switch (motUtilisateur){
    case motApplication:
        message("Bravo !");
    break
    case "Gredin":
        message("Restez correct !");
    break
    case "Vilain":
        message("Soyez gentil !");
    break
    default:
        message("Vous avez fait une erreur de frappe.");
}