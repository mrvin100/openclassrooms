
// 4.Affichez un message d’erreur

// try{
//     let maVariable = document.getElementById("idInexistant")
//     maVariable.createElement("div")
//     // Suite de traitement
// }catch{
//     console.log("y'a une erreur dans le block try");
// }

function verifierChamp(champ){
    // Si le champ est vide on lance l'exception
    if(champ.value === ''){
        throw new Error(`Le champ ${champ.id} est vide`);
    }
}

let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    try {
        event.preventDefault();

        let baliseNom = document.getElementById("nom")
        verifierChamp(baliseNom)

        let balisePrenom = document.getElementById("prenom")
        verifierChamp(balisePrenom)

        let baliseSurnom = document.getElementById("surnom")
        verifierChamp(baliseSurnom)

        //Traitement du formulaire
        //...
    }catch(error){
        console.log("une erreur est survenue : "+ error.message)
    }

})



