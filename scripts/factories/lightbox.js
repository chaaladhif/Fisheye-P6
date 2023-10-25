const openLightbox = (media) => {
    const { id, photographerId, title, image, video,  likes, date, price } = media;
    const modal = document.getElementById("lightbox_modal");
    modal.innerHTML = `<div id="modal">
    <button aria-label="fermer la modale" id="close"><i class="fa-solid fa-xmark"></i>
</button>
  <div class="column">
            <img src="assets/images/${photographerId}/${image}" class="imageLightbox">
        
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>;
        </div>
        </div>`
   /* 
        <div class="modal-content">
            <div class="mySlides">
                <img src="" style="width:100%">
            </div>
            <div class="mySlides">
                <img src="" style="width:100%">
            </div>
            <div class="mySlides">
                <img src="" style="width:100%">
            </div>
            <div class="mySlides">
                <img src="" style="width:100%">
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            <div class="caption-container">
                <p id="caption"></p>
            </div>
        </div>;*/

    // Global vars
   /* photographerMedia.forEach((mediaItem, index) => {
        if (mediaItem.image) {
            const imageUrl = `assets/images/${photographerId}/${mediaItem.image}`;

            // Create a new slide for each image
            const slide = document.createElement('div');
            slide.classList.add('mySlides');
            slide.innerHTML = `
                <img src="${imageUrl}" style="width:100%">
            `;

            modal.querySelector(".modal-content").appendChild(slide);
        }
    });*/
const close=document.getElementById('close')

    function openModal() {
        modal.style.display = "block";
    }
    
    function closeModal() {
        modal.style.display = "none";
    }
    close.addEventListener('click', closeModal())
   
   /* let slideIndex = 1;
    showSlides(slideIndex);
    showSlides(1);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const slides = document.querySelectorAll(".mySlides");
        const captionText = document.getElementById("caption");
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }*/
    openModal()
};