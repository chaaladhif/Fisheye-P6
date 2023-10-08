async function getPhotographers() {
    try {
      const response = await fetch('/data/photographers.json');
      if (response.ok) {
        const data = await response.json();
        const photographers = data.photographers; // Déclaration de la variable photographers
      return { photographers }; 
    }
  } catch (error) {
    console.error(error);
  }
}
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }
    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
