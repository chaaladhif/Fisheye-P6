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
        let photographerData = data.photographers;
        let mediaData = data.media; // Récupérez les données des médias
        if (photographerId) {
            const selectedPhotographer = photographerData.find((photographer) => photographer.id == photographerId);
            if (selectedPhotographer) {
                PhotographerPage(selectedPhotographer, mediaData);
            } else {
                console.error('Photographer not found');
            }
        }
    } catch (error) {
        console.error(error);
    }
}

pageId();

 async function PhotographerPage(data, media) {
    const galery=document.querySelector('.galery')
    const footer=document.querySelector('footer')
    const photographerId = data.id;
    const photographerMedia = media.filter(item => item.photographerId === photographerId); 
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
    const mediaCardDOM = mediaTemplate(mediaItem).getMediaCardDOM();
    divMediaContainer.appendChild(mediaCardDOM);
    galery.appendChild(divMediaContainer);
    
     });
     const photographerprice = data.price;
     // Crée un élément p pour afficher la somme
     // Supposons que mediaData contient toutes les données des médias
     let totalLikes = 0;
     
     // Parcourez tous les médias pour calculer la somme des likes
     for (let i = 0; i < photographerMedia.length; i++) {
         totalLikes += photographerMedia[i].likes;
       }
     
     // Créez un élément p pour afficher la somme
     const somme = document.createElement('p');
     somme.classList.add("somme");
     somme.innerHTML = `${totalLikes} <i class="fa-solid fa-heart size"></i>`;
     
     // Ajoutez l'élément au footer
     footer.appendChild(somme);
     
     // Crée un élément p pour afficher le prix
     const price = document.createElement('p');
     price.classList.add('price');
     price.innerHTML = photographerprice + '€ / jour';
     footer.appendChild(price);
}