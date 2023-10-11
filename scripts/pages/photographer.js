//Mettre le code JavaScript lié à la page photographer.html
const fetchData = async () => {
    try {
        const response = await fetch('/data/photographers.json');
        if (response.ok) {
            const data = await response.json();
            return { photographers: data.photographers };
        }
    } catch (error) {
        console.error(error);
    }
};

async function main() {
    try {
        const data = await fetchData(); // Attendre que les données soient chargées
        // Ici, vous avez les données des photographes
        // Vous pouvez maintenant extraire l'ID du photographe depuis les paramètres de l'URL
        let photographerId = new URL(window.location.href).searchParams.get('id');
        console.log(photographerId);
        //let photographerId = params.get('id');
        let photographerData = data.photographers;
        console.log();
        let selectedPhotographer = photographerData.find((photographer) => photographer.id == photographerId);
        console.log(selectedPhotographer);
        if (selectedPhotographer) {
            // Utilisez les données du photographe pour afficher les détails
            PhotographerPage(selectedPhotographer);
            //console.log(PhotographerPage(selectedPhotographer));
        } else {
            // Gérez le cas où aucun photographe correspondant n'a été trouvé
            console.error('Photographer not found');
        }
    } catch (error) {
        console.error(error);
    }
}

main();

function PhotographerPage(data) {
    const photographHeaderData=document.querySelector('.photograph-headerData')
    const photographHeader=document.querySelector('.photograph-header')

    const { name, portrait, id, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
     // Créez une div pour l'image du photographe
    // const imageDiv = document.createElement('div');
     const photographerImage = document.createElement('img');
     photographerImage.src = picture;
     photographerImage.alt = `Portrait de ${name}, photographe`;
     photographerImage.classList.add('imageMiniature')
    const article = document.createElement('article');
    article.innerHTML = `
    <h1>${name}</h1>
        <span>${city}, </span>
        <span>${country}</span>
        <p>${tagline}</p>
    `;
    photographHeader.appendChild(photographerImage)
    photographHeaderData.appendChild(article); 
    return article;
}

  
    