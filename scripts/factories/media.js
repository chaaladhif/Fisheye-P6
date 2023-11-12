//const body = document.body;
// Déclarer une variable pour stocker la position de l'image actuelle
function mediaTemplate(media) {
    
    const { id, photographerId, title, image, video, likes, date } = media;
   const mediaPath= image ? `./assets/images/${photographerId}/${image}` : `./assets/images/${photographerId}/${video}`; 

    function getMediaCardDOM() {
        
        const galery = document.querySelector('.galery');
        const figure = document.createElement('figure');
        figure.classList.add('photographer-card');
        figure.setAttribute('role', 'figure');
        figure.setAttribute('aria-label', title);
        if(image)
        {
    const a = document.createElement('a');
    a.href = '#';
    a.setAttribute('aria-label', `Voir ${title}`);
    const img = document.createElement('img');
    img.classList.add('imageGalery');
    img.src = `./assets/images/${photographerId}/${image}`;
    img.alt = `Portrait de ${title}, photographe`;
    //il manque ici d'appeler showslides avec la position courante
    a.addEventListener('click', () => {
       findIndexMedia(img.src);
    });
    a.appendChild(img);
    const divRow = document.createElement('div');
    divRow.classList.add('rowfigure');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes');
    const likesSpan = document.createElement('span');
    likesSpan.textContent = likes;
    likesSpan.setAttribute('class', 'likeNumber');
    const heartIcon = document.createElement('span');
    heartIcon.setAttribute('class', 'heart');
    heartIcon.innerHTML = '<i class="fa-solid fa-heart size"></i>';
    /*heartIcon.addEventListener('click', () => {
        likesAndDislikes(id, likesSpan);
    });*/
    likesContainer.appendChild(likesSpan);
    likesContainer.appendChild(heartIcon);
    divRow.appendChild(h2);
    divRow.appendChild(likesContainer);
    figure.appendChild(a);
    figure.appendChild(divRow);
        }
        if(video)
        {
            const a = document.createElement('a');
            a.href = '#';
            a.setAttribute('aria-label', `Voir ${title}`);
            const videoElement = document.createElement('video');
            videoElement.classList.add('videoGalery');
            videoElement.controls = true;
            const sourceElement = document.createElement('source');
            sourceElement.src = `./assets/images/${photographerId}/${video}`;
            sourceElement.type = 'video/mp4';
            a.addEventListener('click', () => {
            findIndexMedia(sourceElement.src);
        });
            a.appendChild(videoElement)
            videoElement.appendChild(sourceElement);
            const track=document.createElement('track');
            track.kind="subtitles";
            track.src="video.en.vtt"
            track.srclang="en";
            track.label="Anglais";
            videoElement.appendChild(track)
            const divRow = document.createElement('div');
            divRow.classList.add('rowfigure');
            const h2 = document.createElement('h2');
            h2.textContent = title;
            const likesContainer = document.createElement('div');
            likesContainer.classList.add('likes');
            const likesSpan = document.createElement('span');
            likesSpan.textContent = likes;
            likesSpan.setAttribute('class', 'likeNumber');
            const heartIcon = document.createElement('span');
            heartIcon.setAttribute('class', 'heart');
            heartIcon.innerHTML = '<i class="fa-solid fa-heart size"></i>';
            /*heartIcon.addEventListener('click', () => {
                likesAndDislikes(id, likesSpan);
            });  */
            likesContainer.appendChild(likesSpan);
            likesContainer.appendChild(heartIcon);
            divRow.appendChild(h2);
            figure.appendChild(a);
            divRow.appendChild(likesContainer);
            figure.appendChild(videoElement);
            figure.appendChild(divRow);
}
    galery.appendChild(figure);
    return figure;
}


// creation d'une fonction qui pointe sur la modale par l'id et l'ouvrir 
    return { id, photographerId, title, image, video, mediaPath, likes, date,mediaTemplate, getMediaCardDOM }
   
}
