async function getLightboxPhotographer (media, listPicture, mediaPath) {
    const modalightbox = document.getElementById("lightbox_modal");
   const onCloseModal = () => {
    body.setAttribute('aria-hidden', 'false');
    modalightbox.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    modalightbox.style.display = 'none';
    body.removeAttribute('tabIndex');
    modalightbox.removeAttribute('tabIndex');
    //closeButton.focus()
    //prevButton.setAttribute('tabindex', -1);
    //nextButton.setAttribute('tabindex', -1);
   }
    //modal.innerHTML = '';
    const modalContainer = document.getElementById("modal");
    // Creer les elements
    const closeButton = document.createElement("button");
    closeButton.setAttribute("aria-label", "fermer la modale");
    closeButton.id = "close";
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fa-solid", "fa-xmark");
    closeButton.appendChild(closeIcon);
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");
    const mediaElement = document.createElement("div");
    mediaElement.classList.add("mediaLightbox");
    // Créez un élément img
    const imageElement = document.createElement('img');
    // Ajoutez la source et la classe à l'élément img
    imageElement.src = `./assets/images/${photographerId}/${image}`;
    imageElement.classList.add('imageLightbox');
    // Create the title element
    const titleElement = document.createElement("span");
    titleElement.classList.add("red");
    titleElement.setAttribute("aria-label", "le titre de media ouverte");
    titleElement.textContent = media.title;
    // Create the previous and next buttons
    const prevButton = document.createElement("a");
    prevButton.classList.add("prev");
    prevButton.setAttribute("aria-label", "le bouton precedent");
    prevButton.innerHTML = "&#10094;";
    const nextButton = document.createElement("a");
    nextButton.classList.add("next");
    nextButton.setAttribute("aria-label", "le bouton suivant");
    nextButton.innerHTML = "&#10095;";
    // Append elements to the modal container
    columnDiv.appendChild(mediaElement);
    columnDiv.appendChild(imageElement);
    columnDiv.appendChild(titleElement);
    columnDiv.appendChild(prevButton);
    columnDiv.appendChild(nextButton);
    modalContainer.appendChild(closeButton);
    modalContainer.appendChild(columnDiv);



    
   /* if (photographerMedia && photographerMedia.length > 0) {
        let currentIndex = photographerMedia.findIndex(item => item.id === media.id);
        const updateMedia = (index) => {
            const currentMedia = photographerMedia[index];
             // Supprimer le contenu existant de mediaElement
    mediaElement.innerHTML = '';
    if (currentMedia.image) {
        const img = document.createElement('img');
        img.src = `assets/images/${photographerId}/${currentMedia.image}`;
        img.classList.add('mediaLightbox');
        mediaElement.appendChild(img);
    } else {
        const video = document.createElement('video');
        video.setAttribute('controls', '');
        const source = document.createElement('source');
        source.src = `assets/images/${photographerId}/${currentMedia.video}`;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.classList.add('mediaLightbox');
        mediaElement.appendChild(video);
    }
        };*/
        
        /*const previous = () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = photographerMedia.length - 1; // Si on est sur la première, retourne à la dernière
            }
            updateMedia(currentIndex);
        };
        const next = () => {
            if (currentIndex < photographerMedia.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Si on est sur la dernière, retourne à la première; à l'infini
            }
            updateMedia(currentIndex);
        };
        prevButton.addEventListener('click', previous);
        nextButton.addEventListener('click', next);
        updateMedia(currentIndex);  
    }   */
/*function openModal() {
    modal.style.display = "block";
    onOpenModal()
}
function closeModal() {
    modal.style.display = "none";
    onCloseModal()
}*/

     //fermer en cliquant sur echap (clavier)
     document.addEventListener('keydown', function (e) {
        console.log('next');

        const keyCode = e.keyCode ? e.keyCode : e.which;
        if (modalightbox.style.display === "flex" && keyCode === 27) {
            closeModal();
        } else if (modalightbox.style.display === "flex") {
       /* if (keyCode === 39 || keyCode === 9) {
                next();
        console.log('next');    
        } else if (keyCode === 37) {
                previous();
            }*/
        }
        });


    //openModal()
    function closeModal() {
        modalightbox.style.display = "none";
        //onCloseModal()
    }
    closeButton.addEventListener('click', closeModal)
}
