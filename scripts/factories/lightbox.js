const LightModal=document.querySelector('#modal');
const LightboxModal=document.querySelector('#lightbox_modal');
   function createLightboxModal (listMedia) {
    const divModal = document.createElement("div");
    divModal.classList.add("modal-content");
        // Button close
        const closeButton = document.createElement("button");
        closeButton.setAttribute("aria-label", "fermer la modale");
        closeButton.id = "close";
        const closeIcon = document.createElement("i");
        closeIcon.classList.add("fa-solid", "fa-xmark");
        closeButton.appendChild(closeIcon);
        closeButton.addEventListener('click', function(){
            event.preventDefault();
            closeLightBox();
        });
    divModal.appendChild(closeButton);
    listMedia.forEach((element) => {
        const mySlide = document.createElement("div");
        mySlide.setAttribute("class","mySlides"); 
        // Créez un élément video
    if (element.mediaPath.endsWith(".mp4")){
        const videoElement = document.createElement('video');
        videoElement.controls = true;
        const sourceElement = document.createElement('source');
        //sourceElement.type = 'video/mp4';
        sourceElement.src = element.mediaPath;
        videoElement.classList.add('imageLightbox');
        videoElement.alt = `Portrait de ${element.title}, photographe`;
        videoElement.appendChild(sourceElement);
        mySlide.appendChild(videoElement);
    }
    else 
    { // Créez un élément img
        const imageElement = document.createElement('img');
            imageElement.src = element.mediaPath;
            imageElement.alt = `Portrait de ${element.title}, photographe`;
            imageElement.classList.add('imageLightbox');
            mySlide.appendChild(imageElement);
    } 
     //  Créez un élément titre
     const titleElement = document.createElement("span");
     titleElement.setAttribute("class", "caption-container red");
     titleElement.setAttribute("aria-label", "le titre de media ouverte");
     titleElement.textContent= element.title;
     mySlide.appendChild(titleElement);
    divModal.appendChild(mySlide);
    });
    //  Créez previous et next boutons
    const prevButton = document.createElement("a");
    prevButton.classList.add("prev");
    prevButton.setAttribute("aria-label", "le bouton précedent");
    prevButton.innerHTML = "&#10094;";
    prevButton.addEventListener('click', function(){
        event.preventDefault();
        plusSlides(-1);
    });
    const nextButton = document.createElement("a");
    nextButton.classList.add("next");
    nextButton.setAttribute("aria-label", "le bouton suivant");
    nextButton.innerHTML = "&#10095;";
    nextButton.addEventListener('click', function(){
        event.preventDefault();
        plusSlides(1);
    });
    
    // Append elements à divModal
    divModal.appendChild(prevButton);
    divModal.appendChild(nextButton);
    return divModal;
}
let slideIndex=0;
//recherche de la position de media
function findIndexMedia(urlToSearch) {
    const closeButton=document.querySelector('#close');
    let currentIndex=0;
    let listSlides = document.querySelectorAll(".imageLightbox");
    for (let index = 0; index < listSlides.length; index++) {
        const element = listSlides[index];
        if( element.src == urlToSearch ){
            currentIndex=index;
        }    
    }
    openLightBox();
    //closeButton.focus(); 
    showSlides(currentIndex);
}

function closeLightBox() {
     document.getElementById("lightbox_modal").style.display = "none";
     
}
function openLightBox() {
    document.getElementById("lightbox_modal").style.display = "block";
    
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    //console.log("n:", n , " slideIndex:", slideIndex);
   if (n > slides.length-1) 
   {
    slideIndex = 0;
    }
    else{
   if (n < 0) {
    slideIndex = slides.length-1;
    }
   else{
    slideIndex=n;
   }
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }    
    slides[slideIndex].style.display = "block";
  }
     //fermer en cliquant sur echap (clavier)
    document.addEventListener('keydown', function (e) {
        const keyCode = e.keyCode ? e.keyCode : e.which;
        if ( document.getElementById("lightbox_modal").style.display === "block" && keyCode === 27) {
            closeLightBox();
        } else if ( document.getElementById("lightbox_modal").style.display === "block") {
        if (keyCode === 39|| keyCode === 9) {
            plusSlides(1);
        } else if (keyCode === 37 || keyCode === 7) {
            plusSlides(-1);
            }
        }
        });
    