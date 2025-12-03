




// - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), 
// description (featuredProductDescription), image (featuredProductImage)

let featuredproductname= "tiramisu";

let featuredproductpriceht=7;

let featuredproductdescription="tiramisu speculos";

let featuredproductImage="https://liliebakery.fr/wp-content/uploads/2024/02/Recette-tiramisu-speculoos-Lilie-Bakery.jpg";

// - Récupérer la section HTML où afficher le produit
//   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)

let section=document.getElementById("product-list");

// - Définir une fonction (createFeaturedProductCard()) qui :
//     • crée un conteneur pour la carte  
//       (indice : il existe une méthode du DOM pour créer un élément HTML)

function createFeaturedProductCard() {
    let container=document.createElement("article");
    let image=document.createElement("img")
    let titre=document.createElement("h1");
    titre.textContent=featuredproductdescription; 
    
   
}


//     • crée une image :
//         - lui donner la source de l'image
//       (indice : pensez aux propriétés des balises <img>)
//     • crée un titre et lui mettre le nom du produit  
//       (indice : une propriété permet d’écrire du texte dans un élément)
//     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent


function calculTTC(featuredproductpriceht){
    
    featuredproductpriceht = featuredproductpriceht.replace(",",".");
  let prixTTC = prixHT*(1+taux/100);
  return prixTTC;}

//       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
//     • formate ce prix TTC avec la fonction prévue pour ça

prixTTC.toFixed(2);
//     • crée un paragraphe pour afficher le prix TTC
prixTTC=document.createElement("p");


//     • crée un autre paragraphe pour la description
let description=document.createElement("p");


//     • assemble tous les éléments dans le conteneur
//       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
//     • retourne ce conteneur

// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)

// - Appeler la fonction pour créer la carte

// - Ajouter le résultat dans la section prévue
//   (indice : même méthode que pour assembler les éléments dans la carte)
