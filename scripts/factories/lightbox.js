
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
    listMedia.forEach(element => {
        //console.log(element);
        const mySlide = document.createElement("div");
        mySlide.setAttribute("class","mySlides"); 
        // Créez un élément img
    if (element.url.endsWith(".mp4")){
        const videoElement = document.createElement('video');
        videoElement.src = element.url;
        videoElement.classList.add('imageLightbox');
        mySlide.appendChild(videoElement);
    }
    else 
    {
        const imageElement = document.createElement('img');
        imageElement.src = element.url;
        imageElement.classList.add('imageLightbox');
        mySlide.appendChild(imageElement);
    } 
     // Create the title element
     const titleElement = document.createElement("span");
     titleElement.setAttribute("class", "caption-container red");
     titleElement.setAttribute("aria-label", "le titre de media ouverte");
     titleElement.textContent= element.title;
     mySlide.appendChild(titleElement);
    divModal.appendChild(mySlide);
    });
    // Create the previous and next buttons
    const prevButton = document.createElement("a");
    prevButton.classList.add("prev");
    prevButton.setAttribute("aria-label", "le bouton precedent");
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
    
    // Append elements to the modal container
    divModal.appendChild(prevButton);
    divModal.appendChild(nextButton);
    return divModal;
}
function closeLightBox() {
     document.getElementById("lightbox_modal").style.display = "none";
}
/*function openLightBox() {
    document.getElementById("lightbox_modal").style.display = "block";
}*/

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

     //fermer en cliquant sur echap (clavier)
    document.addEventListener('keydown', function (e) {
        const keyCode = e.keyCode ? e.keyCode : e.which;
        if ( document.getElementById("lightbox_modal").style.display === "block" && keyCode === 27) {
            closeLightBox();
        } else if ( document.getElementById("lightbox_modal").style.display === "block") {
        if (keyCode === 39) {
            plusSlides(1);
        } else if (keyCode === 37) {
            plusSlides(-1);
            }
        }
        });
       /*|| keyCode === 9)*/ 