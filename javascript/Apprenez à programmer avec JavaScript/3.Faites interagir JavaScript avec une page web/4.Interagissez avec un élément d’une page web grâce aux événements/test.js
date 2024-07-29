
// 4.Interagissez avec un élément d’une page web grâce aux événements

let monBoutton = document.getElementById("monBouton");

monBoutton.addEventListener("click", () =>{
    console.log("Vous avez clique sur le bouton")
})


document.addEventListener('keypress', (event)  => {
    console.log(event.key);
});


