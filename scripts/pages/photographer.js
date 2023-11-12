//Mettre le code JavaScript lié à la page photographer.html
const fetchData = async () => {
    try {
        const response = await fetch('/data/photographers.json');
        if (response.ok) {
            const data = await response.json();
            return { photographers: data.photographers,
            media: data.media};
        }
    } catch (error) {
        console.error(error);
    }
};

async function pageId() {
    try {
        const data = await fetchData();
        let photographerId = new URL(window.location.href).searchParams.get('id');
        if (photographerId) {
            let selectedPhotographer = data.photographers.find((photographer) => photographer.id == photographerId);
            let mediaPhotographer = data.media.filter((media => media.photographerId == photographerId)); // Récupérez les données des médias
            PhotographerPage(selectedPhotographer, mediaPhotographer);
        }
    } catch (error) {
        console.error(error);
    }
}
pageId();
 async function PhotographerPage(data, photographerMedia) {
    const galery=document.querySelector('.galery');
    let listMedia =[];
    let listLikes=[];
    // Création du conteneur pour les médias
    const divMediaContainer = document.createElement('div');
    divMediaContainer.classList.add('media-container');
    const photographerModel = photographerTemplate(data);
    const header =  photographerModel.getHeaderPhotographer();
    document.getElementById("main").appendChild(header);
    document.getElementById("main").insertBefore(document.querySelector(".photograph-header"), document.querySelector(".galery"));
    // Récupérez les médias spécifiques au photographe actuel
     // Créez la structure pour les médias

     let totalLikes=0;
     photographerMedia.forEach(mediaItem => {
     const mediaModel = mediaTemplate(mediaItem);
     totalLikes += mediaModel.likes;
     const mediaCardDOM = mediaModel.getMediaCardDOM(listMedia, listLikes);
    // Pass the index of the current media card in the list
    listMedia.push({title:mediaModel.title, url:mediaModel.mediaPath, date:mediaModel.date, likes:mediaModel.likes});
    //listLikes.push(mediaModel.likes);
    divMediaContainer.appendChild(mediaCardDOM);
    galery.appendChild(divMediaContainer);
    return {listMedia, listLikes};
     });
     //showSlides(slideIndex);
     // creation de la modale dans le dom
    const lightboxModel = createLightboxModal(listMedia);
    const modalContainer = document.getElementById("modal");
    modalContainer.appendChild(lightboxModel);
    //price et total likes en bas de page
    const footer = document.querySelector('footer');
     const somme = document.createElement('p');
     somme.classList.add("somme");
     footer.appendChild(somme);
     updateTotal(totalLikes);
     const footerModel = photographerModel.getFooterPrice(); // Récupérez l'élément contenant le prix
    footer.appendChild(footerModel); // Ajoutez l'élément du prix au footer
}
function updateTotal(total){
    document.querySelector(".somme").textContent = total;

    
}
/*    document.querySelector(".somme").innerHTML = total+' <i class="fas fa-heart size"></i>';*/

//value sera +1 ou -1 à passer via media 

function likesAndDislikes(value){
    let sommeElement = document.querySelector('.somme');
    let currentTotal = parseInt(sommeElement.textContent);
    let newTotal = currentTotal + value;
    updateTotal(newTotal);
    console.log(currentTotal);
    const likeNumber=document.querySelector('.likeNumber');
const heart=document.querySelector('.heart');
heart.addEventListener('click', function() {
        console.log('ok');
    });
// recuperer la valeur somme du dom 
// convertir la chaine en entier (parsint)
// ajouter un plus un ou moins un 
//update Total 
}
/* let isLiked = false; // Variable pour suivre l'état du like
            heartIcon.addEventListener('click', function(event) {
                event.stopPropagation(); // Arrête la propagation de l'événement pour éviter les interactions non voulues
                if (isLiked) {
                    likes-1; // Diminue le nombre de likes
                } else {
                    likes+1; // Augmente le nombre de likes
                }
                isLiked = !isLiked; // Inverse l'état du like
                //likesSpan.textContent = likes; // Met à jour l'affichage du nombre de likes
        });
         let isLiked = false; // Variable pour suivre l'état du like
    heartIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Arrête la propagation de l'événement pour éviter les interactions non voulues
        if (isLiked) {
            likesSpan.textContent = likes;
            //updateTotalLikes(-1) // Diminue le nombre de likes
        } else {
            likesSpan.textContent = likes+1;
           // updateTotalLikes(+1) // Augmente le nombre de likes
        }
        isLiked = !isLiked; // Inverse l'état du like
        */