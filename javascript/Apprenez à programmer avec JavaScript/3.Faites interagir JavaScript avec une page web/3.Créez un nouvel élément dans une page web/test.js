
// 3.Créez un nouvel élément dans une page web


let nouvelElement = document.createElement("div");

nouvelElement.classList.add("subConteneur");
nouvelElement.title = "new subtitle in bullet notification";
nouvelElement.innerHTML = "new subtitle";

// recuperer un element parent existant
let parentElement = document.getElementById("conteneur");

// Ajouter le nouvel element au parent
parentElement.appendChild(nouvelElement);

console.log(nouvelElement)


let titre = "Azertype";
let paragraphe = "l'application pour apprendre plus vite a ecrire!";

let div = `
    <div>
        <h1>${titre}</h1>
        <p>${paragraphe}</p>
    </div>
`
let body = document.body;
body.innerHTML = div;


