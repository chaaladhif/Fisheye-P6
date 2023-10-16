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
        let selectedPhotographer = photographerData.find((photographer) => photographer.id == photographerId);

        if (selectedPhotographer) {
            PhotographerPage(selectedPhotographer, mediaData); // Passez les données des médias
        } else {
            console.error('Photographer not found');
        }
    } catch (error) {
        console.error(error);
    }
}

pageId();

 async function PhotographerPage(data, media) {
    const main=document.getElementById('main')
    const photographHeaderData = document.querySelector('.photograph-headerData');
    const photographHeader = document.querySelector('.photograph-header');
    //recuperer fonction header de factory
    const photographerheader = photographerTemplate(data);
    const userCardDOM = photographerheader.getHeaderPhotographer();
    // Récupérez les médias spécifiques au photographe actuel
    const photographerId = data.id;
    const photographerMedia = media.filter(item => item.photographerId === photographerId); 
     // Créez la structure pour les médias
     const galery = document.querySelector('.galery');
     photographerMedia.forEach(mediaItem => {
         const mediaCard = mediaTemplate(mediaItem);
         const mediaCardDOM = mediaCard.getMediaCardDOM();
     });
}