//import {openLightbox} from './lightbox'
function mediaTemplate(media) {
    const { id, photographerId, title, image, video,  likes, date, price } = media;

    function getMediaCardDOM() {
        const galery = document.querySelector('.galery');
        const figure = document.createElement('figure');
        figure.classList.add('photographer-card');
        figure.setAttribute('role', 'figure');
        figure.setAttribute('aria-label', title);
        //figure.addEventListener('click', openLightbox());
        if(image)
        {
    const a = document.createElement('a');
    a.href = '#';
    const img = document.createElement('img');
    img.classList.add('imageGalery');
    img.src = `assets/images/${photographerId}/${image}`;
    img.alt = `Portrait de ${title}, photographe`;
    a.appendChild(img);
    const divRow = document.createElement('div');
    divRow.classList.add('rowfigure');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes');
    const likesSpan = document.createElement('span');
    likesSpan.textContent = likes;
    const heartIcon = document.createElement('span');
    heartIcon.innerHTML = '<i class="fa-solid fa-heart size"></i>';
    likesContainer.appendChild(likesSpan);
    likesContainer.appendChild(heartIcon);
    divRow.appendChild(h2);
    divRow.appendChild(likesContainer);
    figure.appendChild(a);
    figure.appendChild(divRow);
        }
        if(video)
        {
            const videoElement = document.createElement('video');
            videoElement.classList.add('videoGalery');
            videoElement.controls = true;
            const sourceElement = document.createElement('source');
            sourceElement.src = `assets/images/${photographerId}/${video}`;
            sourceElement.type = 'video/mp4';
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
            const heartIcon = document.createElement('span');
            heartIcon.innerHTML = '<i class="fa-solid fa-heart size"></i>';
            likesContainer.appendChild(likesSpan);
            likesContainer.appendChild(heartIcon);
            divRow.appendChild(h2);
            divRow.appendChild(likesContainer);
            figure.appendChild(videoElement);
            figure.appendChild(divRow);
    }
    galery.appendChild(figure);
    return figure;
        }
        
    return { id, photographerId, title, image, video,  likes, date, price, getMediaCardDOM }
    
}
