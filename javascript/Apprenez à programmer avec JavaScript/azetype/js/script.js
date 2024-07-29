 // Copyright JeanDoe, All rights reserved!

/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

// Fonction afficher propositions
let zoneProposition = document.querySelector(".zoneProposition");

function afficherProposition (mot){
    zoneProposition.innerText = mot;
}
// fonction pour afficher les resultats

function afficherResultat(score, nbMotsProposes){
    let spanScore = document.querySelector(".zoneScore span");
    affichageScore = `${score} / ${nbMotsProposes}`;
    spanScore.innerHTML = affichageScore;
    console.log("Votre score est de "+ score +" sur "+ nbMotsProposes);
}

//Cette fonction construit et affiche l'email. 

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function validerNom(nom){
    if(nom.length < 2){
        throw new Error("Le nom est trop court.");
    }
}

function validerEmail(email){
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if(!emailRegExp.test(email)){
        throw new Error("L'email n'est pas valide.");
    }
    return true;
}

function afficherMessageErreur(message){
    let poppup = document.querySelector(".popup")
    let spanErreurMessage = document.getElementById('erreurMessage');
    if(!spanErreurMessage){
        let spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage";

        poppup.appendChild(spanErreurMessage)
    }
    spanErreurMessage.innerText = message
}

function gererFormulaire(scoreEmail){
    try{
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        validerNom(nom)
    
        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value
        validerEmail(email)
        afficherMessageErreur('');
        afficherEmail(nom, email, scoreEmail);

    }catch(erreur){
        //Gerrer l'erreur
        afficherMessageErreur(erreur.message);
    }
}

// function pour entrer les donnees et calculer le score

function lancerJeu(){
    //Initialisations
    initAddEventListenerPopup();
    let score = 0;
    let i = 0;
    let listeProposition = listeMots;

    let btnValiderMot = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");


    afficherProposition(listeProposition[i]);

    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value);
        if(inputEcriture.value === listeProposition[i]){
            score++;
        }
        i++
        afficherResultat(score, i);
        inputEcriture.value = '';
        if(listeProposition[i] === undefined){
            afficherProposition("Le jeu est fini");
            btnValiderMot.disabled = true;
        }else{
            afficherProposition(listeProposition[i]);
        }
    })


    let boutonsRadio = document.querySelectorAll(".optionSource input");

    for(let i = 0; i < boutonsRadio.length; i++){
        boutonsRadio[i].addEventListener("change", (event) => {
            monBouton = event.target;
            console.log(`J'ai clique sur le bouton : ${monBouton.id}`);
            if(monBouton.value === '1'){
                listeProposition = listeMots;
            }else{
                listeProposition = listePhrases;
            }
            afficherProposition(listeProposition[i]);
        })
    }

    let form = document.querySelector("form")

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let scoreEmail = `${score} / ${i}`;
        gererFormulaire(scoreEmail);
    })

    afficherResultat(score, i);
}
