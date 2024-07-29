
// 1.Récupérez un élément d’une page web

let image = document.getElementById("premiereImage");

image.setAttribute("alt", "Ceci est une nouvelle valeur de alt");
image.alt = "encore une autre plus simple";
image.src = "newScr";

image.classList.add("newClass");
image.classList.remove("photo");

console.log(image)


