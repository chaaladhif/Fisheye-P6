
async function  openLightbox (media) {
    const data = await fetchData();
    const mediaa = data.media
    const { id, photographerId, title, image, video } = media;
    const modal = document.getElementById("lightbox_modal");
    //const photographerModel = mediaTemplate(media);
    //const photographerId = data.id;
    const photographerMedia = mediaa.filter(item => item.photographerId === photographerId); 
    const mediaCardDOM = mediaTemplate(media).getMediaCardDOM();
    modal.innerHTML = `<div id="modal">
    <button aria-label="fermer la modale" id="close"><i class="fa-solid fa-xmark"></i>
</button>
  <div class="column">
            <img src="assets/images/${photographerId}/${image}" class="imageLightbox">
       <span class='red'>${title}</span> 
        <a class="prev">&#10094;</a>
        <a class="next">&#10095;</a>
        </div>
        </div>`
         // Vérifier si photographerMedia est défini et n'est pas nul
    if (photographerMedia && photographerMedia.length > 0) {
        const images = photographerMedia.filter(item => item.image); // Filtrer les médias avec des images uniquement
        let currentIndex = images.findIndex(item => item.id === id);

        const imageElement = document.querySelector(".imageLightbox");

        const prevButton=document.querySelector('.prev')
        const nextButton=document.querySelector('.next')
        let i=0;
        const previous=()=>{

 if (i > 0) {
                i--;
                updateImage();
        }}
        const next=()=>{
            if (i < images.length - 1) {
                i++;
                updateImage();
        }}
        const updateImage = () => {
            const currentImage = images[i];
            imageElement.src = `assets/images/${photographerId}/${currentImage.image}`;
        };
        prevButton.addEventListener('click', previous)
        nextButton.addEventListener('click', next)

const close=document.querySelector('#close')

    function openModal() {
        modal.style.display = "block";
    }
    close.addEventListener('click', closeModal)
    function closeModal() {
        modal.style.display = "none";
        onCloseModal()
    }
    const onOpenModal = () => {
        body.setAttribute('aria-hidden', 'true');
        modal.setAttribute('aria-hidden', 'false');
        body.classList.add('no-scroll');
        modal.style.display = 'flex';
        //modal.setAttribute('tabIndex', 2);
        close.focus();
        //body.setAttribute('tabIndex', 1);
        
       }
      
       const onCloseModal = () => {
        body.setAttribute('aria-hidden', 'false');
        modal.setAttribute('aria-hidden', 'true');
        body.classList.remove('no-scroll');
        modal.style.display = 'none';}
        //body.removeAttribute('tabIndex');
       // modal.removeAttribute('tabIndex');
        //contactButton.focus();
      
     //fermer en cliquant sur echap
 document.addEventListener('keydown', function (e) {
    const keyCode = e.keyCode ? e.keyCode : e.which
  
    if (modal.style.display === "block" && keyCode === 27) {
      closeModal()
    }
  });

    openModal()
}};