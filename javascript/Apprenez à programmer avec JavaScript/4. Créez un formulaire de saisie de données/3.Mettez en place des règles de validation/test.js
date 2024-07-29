
// 3.Mettez en place des règles de validation

const form = document.querySelector('form');
const baliseNom = document.getElementById("nom");
const baliseEmail = document.getElementById("email");

//Ajout d'un ecouteur d'evenement sur le formulaire pour ecouter le submit

function verifierChamp(balise){
    if(balise.value === ''){
        balise.classList.add('error');
        console.log('Le champ nom est vide');
    }else{
        balise.classList.remove('error');
        console.log('Le champ nom est rempli par : ' + balise.value);
    }
}

function verifierEmail(balise){
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if(emailRegExp.test(balise.value)){
        balise.classList.remove('error');
        console.log('L\'email entree est valide! : ' + balise.value);
    }else{
        balise.classList.add('error');
        console.log('L\'email entree est invalide!');
    }
}

form.addEventListener("submit", (event) => {
    //On empeche le comportement par defaut
    event.preventDefault();
    console.log("Il n'a pas de rechargement de la page");

    //On fait la verification.

    verifierChamp(baliseNom);

});

baliseNom.addEventListener('change', () => {
    verifierChamp(baliseNom);
})

baliseEmail.addEventListener('change', () => {
    verifierEmail(baliseEmail);
})













let chaine = "cachalot" //Testez avec les chiffres pour voir la difference

let regex = new RegExp("^[a-z]+$");
let resultat = regex.test(chaine);
console.log(resultat);//Affiche true.

// Regular expression d'une addresse email valide : 
// [a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+




