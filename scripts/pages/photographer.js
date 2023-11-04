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
    const footer=document.querySelector('footer');
    let listMedia =[];
    // Création du conteneur pour les médias
    const divMediaContainer = document.createElement('div');
    divMediaContainer.classList.add('media-container');
    const photographerModel = photographerTemplate(data);
    const header =  photographerModel.getHeaderPhotographer();
    document.getElementById("main").appendChild(header);
    document.getElementById("main").insertBefore(document.querySelector(".photograph-header"), document.querySelector(".galery"));
    // Récupérez les médias spécifiques au photographe actuel
     // Créez la structure pour les médias
     photographerMedia.forEach(mediaItem => {
     const mediaModel = mediaTemplate(mediaItem);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    listMedia.push({title:mediaModel.title , url:mediaModel.mediaPath});
    divMediaContainer.appendChild(mediaCardDOM);
    galery.appendChild(divMediaContainer);
    // Ajoutez un gestionnaire d'événements pour chaque image/vidéo
    mediaCardDOM.addEventListener('click', () => { 
    
    })
    return {listMedia}
     });
     
     // creation de la modale dans le dom
    const lightboxModel = createLightboxModal(listMedia);
    const modalContainer = document.getElementById("modal");
    // Ajoutez le conteneur de la lightbox au DOM
    modalContainer.appendChild(lightboxModel);
    console.log(slideIndex);
    showSlides(slideIndex);

    //footer
    const photographerprice = data.price;
    // Crée un élément p pour afficher la somme
    let totalLikes = 0;
    // Parcourez tous les médias pour calculer la somme des likes
    for (let i = 0; i < photographerMedia.length; i++) {
     totalLikes += photographerMedia[i].likes;
   }
     // Créez un élément p pour afficher la somme
     const somme = document.createElement('p');
     somme.classList.add("somme");
     somme.innerHTML = `${totalLikes} <i class="fa-solid fa-heart size"></i>`;
     footer.appendChild(somme);
     // Crée un élément p pour afficher le prix
     const price = document.createElement('p');
     price.classList.add('price');
     price.innerHTML = photographerprice + '€ / jour';
     footer.appendChild(price);
     
}
