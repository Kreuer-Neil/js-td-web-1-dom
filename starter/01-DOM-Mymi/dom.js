/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */
document.getElementById("nav");

/* 2. Récupérer tous les li */
document.querySelectorAll("li");

/* 3. Cibler le 4e li */
document.getElementById("nav").children[3];
document.querySelector("li:nth-child(4)");

/* 4. Compter le nombre de li dans la page */
document.getElementById("nav").children.length;

/* 5. Cibler le premier li pair */
document.querySelector("li:nth-child(odd)");

/* 6. Récupérer tous les li de classe impair */
const impairs = document.querySelectorAll(".impair");

/* a) afficher ce qu'on obtient */
console.log(impairs);

/* b) afficher le 2e li de classe impair */
console.log(impairs[1]);

/* c) afficher chacun des li impair */
for (const impair of impairs) {
    console.log(impair);
}

/* d) compter le nombre de li de classe impair dans la page */
impairs.length;


/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */
document.querySelector("li:nth-child(3)");

/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */
document.querySelector("li:nth-child(5)");

/* 9. Cibler le parent du 4e li */



/* 10. Récupérer tous les enfants de l'ul */
const mesUL = document.getElementById("nav").children;

/* a) afficher ce qu'on obtient */
console.log(mesUL);

/* b) cibler le 1er enfant de l'ul */
mesUL[0];

/* c) cibler le dernier enfant de l'ul */
mesUL[mesUL.length-1];

/* c) cibler le 4e enfant de l'ul */
mesUL[3];


/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */
//le 1er enfant du 4e li, donc a

/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */
//idk

/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */
//la chaîne de caractères "Photos"


/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */


/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */



/* 13. Changer le texte "Photos" en "Visuals" */
//document.querySelector("li:nth-child(4)").firstChild.textContent = "Visuals";

/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */
//document.querySelector("li:nth-child(4)").firstChild.href = "photos.php";


/* b) Lui ajouter un attribut title avec la valeur "voir mes photos" */
//document.querySelector("li:nth-child(4)").firstChild.title = "voir mes photos";

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cibler l'ul
        et querySelectorAll pour cibler les li)
*//*
console.log(
    document.querySelector("ul")
)


/* 16. Ajouter un li à la fin de la liste */
document.getElementById("nav").insertAdjacentHTML('beforeend','<li id="li7" class="pair"><a href="#">Li supplémentaire</a></li>')


/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */






/* 18. Modifier le lien "Photos" 
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */

document.querySelector("li:nth-child(4)").firstChild.textContent = "Visuals";
document.querySelector("li:nth-child(4)").firstChild.title = "voir ma galerie";
document.querySelector("li:nth-child(4)").firstChild.href = "visuals.html";




/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals"
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie"
	   - qui pointe vers la page "visuals.html " */





/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/
