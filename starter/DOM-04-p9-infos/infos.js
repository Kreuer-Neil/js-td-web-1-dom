// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/


const re = document.getElementById("contenu");
const elements = [re.scrollWidth, re.scrollHeight];


const info = document.getElementById('infos');

info.insertAdjacentHTML('beforeend',`<h3>${elements}</h3>`);