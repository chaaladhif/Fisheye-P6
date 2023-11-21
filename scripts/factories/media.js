function mediaTemplate(media) {
    let isLiked=false;
    const { id, photographerId, title, image, video, likes, date } = media;
   const mediaPath= image ? `./assets/images/${photographerId}/${image}` : `./assets/images/${photographerId}/${video}`; 

    function getMediaCardDOM() {
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
    a.addEventListener('click', () => {
       findIndexMedia(img.src);

    });
    a.appendChild(img);
    const divRow = document.createElement('a');
    divRow.classList.add('rowfigure');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes');
    likesContainer.classList.add('primary');
    const likesSpan = document.createElement('span');
    likesSpan.textContent = likes;
    likesSpan.setAttribute('class', 'likeNumber');
    const heartIcon = document.createElement('a');
     heartIcon.setAttribute('tabIndex', '0');
    heartIcon.setAttribute('class', 'heart');
    heartIcon.innerHTML = '<i class="fa-solid fa-heart size"></i>';
    heartIcon.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default Enter key behavior
            // Toggle the liked status and update likes accordingly
            if (!isLiked) {
                likesSpan.textContent = likes + 1;
                likesAndDislikes(1, likesSpan);
                likesContainer.classList.remove('primary');
                likesContainer.classList.add('secondary');
            } else {
                likesSpan.textContent = likes;
                likesAndDislikes(-1, likesSpan);
                likesContainer.classList.remove('secondary');
                likesContainer.classList.add('primary');
            }
            // Toggle the liked status
            isLiked = !isLiked;
        }
    });
    heartIcon.addEventListener('click', () => {
        if (!isLiked) {
            likesSpan.textContent=likes+1;
            likesAndDislikes(1, likesSpan);
            likesContainer.classList.remove('primary');
            likesContainer.classList.add('secondary');

        } else {
            likesSpan.textContent=likes;
            likesAndDislikes(-1, likesSpan);
            likesContainer.classList.remove('secondary');
            likesContainer.classList.add('primary');
        }
        
        // Toggle the liked status
        isLiked = !isLiked;
        });
    likesContainer.appendChild(likesSpan);
    likesContainer.appendChild(heartIcon);
    divRow.appendChild(h2);
    divRow.appendChild(likesContainer);
    figure.appendChild(a);
    //figure.appendChild(img);
    figure.appendChild(divRow);
        }
        if(video)
        {
            const a = document.createElement('a');
            a.href =  `./assets/images/${photographerId}/${video}`;
            a.setAttribute('aria-label', `Voir ${title}`);
            const videoElement = document.createElement('video');
            videoElement.classList.add('videoGalery');
            videoElement.controls = true;
            const sourceElement = document.createElement('source');
            sourceElement.src = `./assets/images/${photographerId}/${video}`;
            sourceElement.type = 'video/mp4';
            a.addEventListener('click', (e) => {
                e.preventDefault();
            findIndexMedia(sourceElement.src);

        });
        a.appendChild(videoElement)
            videoElement.appendChild(sourceElement);
            const track=document.createElement('track');
            track.kind="subtitles";
            track.src="video.en.vtt"
            track.srclang="en";
            track.label=`Portrait de ${title}, photographe`;
            videoElement.appendChild(track);
            const divRow = document.createElement('div');
            divRow.classList.add('rowfigure');
            const h2 = document.createElement('h2');
            h2.textContent = title;
            const likesContainer = document.createElement('div');
            likesContainer.classList.add('likes');
            likesContainer.classList.add('primary');
            const likesSpan = document.createElement('span');
            likesSpan.textContent = likes;
            likesSpan.setAttribute('class', 'likeNumber');
            const heartIcon = document.createElement('a');
            heartIcon.setAttribute('tabIndex', '0');
            heartIcon.setAttribute('class', 'heart');
            heartIcon.innerHTML = '<i class="fa-solid fa-heart size"></i>';
            heartIcon.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault(); // Prevent the default Enter key behavior
                    // Toggle the liked status and update likes accordingly
                    if (!isLiked) {
                        likesSpan.textContent = likes + 1;
                        likesAndDislikes(1, likesSpan);
                        likesContainer.classList.remove('primary');
                        likesContainer.classList.add('secondary');
                    } else {
                        likesSpan.textContent = likes;
                        likesAndDislikes(-1, likesSpan);
                        likesContainer.classList.remove('secondary');
                        likesContainer.classList.add('primary');
                    }
                    // Toggle the liked status
                    isLiked = !isLiked;
                }
            });
            heartIcon.addEventListener('click', () => {
                if (!isLiked) {
                    likesSpan.textContent=likes+1;
                    likesAndDislikes(1, likesSpan);
                    likesContainer.classList.remove('primary');
                    likesContainer.classList.add('secondary');
        
                } else {
                    likesSpan.textContent=likes;
                    likesAndDislikes(-1, likesSpan);
                    likesContainer.classList.remove('secondary');
                    likesContainer.classList.add('primary');
                }
                // Toggle the liked status
                isLiked = !isLiked;
                });
            likesContainer.appendChild(likesSpan);
            likesContainer.appendChild(heartIcon);
            divRow.appendChild(h2);
            divRow.appendChild(likesContainer);
            figure.appendChild(a);
            figure.appendChild(divRow);
}
    return figure;
}
    return { id, photographerId, title, image, video, mediaPath, likes, date, getMediaCardDOM }
    
}