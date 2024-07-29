
// 2.Soumettez votre formulaire

const form = document.querySelector('form');

//Quand on submit

form.addEventListener("submit", (event) => {
    //On empeche le comportement par defaut
    event.preventDefault();
    console.log("Il n'a pas de rechargement de la page");

    //On recupere les deux champs et on affiche leur valeur
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    console.log(nom, email)

});


