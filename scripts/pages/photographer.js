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
            //mediaPhotographer = getMediaSorted(mediaPhotographer,document.getElementById('select1')[idx].innerText)
            PhotographerPage(selectedPhotographer, mediaPhotographer);
        }
    } catch (error) {
        console.error(error);
    }
}
const galery=document.querySelector('.galery');

pageId();
 async function PhotographerPage(data, photographerMedia) {
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
     let totalLikes=0;
     photographerMedia.forEach(mediaItem => {
     const mediaModel = mediaTemplate(mediaItem);
     totalLikes += mediaModel.likes;
     const mediaCardDOM = mediaModel.getMediaCardDOM();    // Pass the index of the current media card in the list
    //listMedia.push({photographerId: mediaModel.photographerId,title:mediaModel.title, image: mediaModel.image, video: mediaModel.video, url:mediaModel.mediaPath, date:mediaModel.date, likes:mediaModel.likes});
    listMedia.push(mediaModel);
    divMediaContainer.appendChild(mediaCardDOM);
     });
     galery.appendChild(divMediaContainer);

     const TriModel=tri(listMedia);
     const triContainer = document.querySelector('.triContainer');
     // Ajoutez les éléments tri au triContainer
     triContainer.appendChild(TriModel.ptri);
     triContainer.appendChild(TriModel.selectContainer);
     
     // creation de la modale dans le dom
    const lightboxModel = createLightboxModal(listMedia);
    const modalContainer = document.getElementById("modal");
    // Ajoutez le conteneur de la lightbox au DOM
    modalContainer.appendChild(lightboxModel);
    //price et total likes en bas de page
    const footer = document.querySelector('footer');
     // Créez un élément p pour afficher la somme
     const somme = document.createElement('p');
     somme.classList.add("somme");
     const heart = document.createElement('i');
     heart.classList.add("fa-solid","fa-heart");
     const heartDiv=document.querySelector('.heartDiv')
     heartDiv.appendChild(somme);
     heartDiv.appendChild(heart);
     updateTotal(totalLikes);
     const footerModel = photographerModel.getFooterPrice(); // Récupérez l'élément contenant le prix
    footer.appendChild(footerModel); // Ajoutez l'élément du prix au footer
    }
    function updateGallery(sortedList) {
        const divMediaContainer=document.querySelector('.media-container');
         divMediaContainer.innerHTML = '';
        //console.log(sortedList); // Iterate through the sorted list and create media cards
         sortedList.forEach(mediaItem => {
        
             const mediaModel = mediaTemplate(mediaItem);
             const mediaCardDOM = mediaModel.getMediaCardDOM();
             divMediaContainer.appendChild(mediaCardDOM);
         });
     }
    function updateTotal(total){
    document.querySelector(".somme").textContent = total;
    }
    function likesAndDislikes(value,likesSpan){
    let sommeElement = document.querySelector('.somme');
    let currentTotal = parseInt(sommeElement.textContent);
    let newTotal = currentTotal + value;
    updateTotal(newTotal);
    return newTotal;
    }
    