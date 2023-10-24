function photographerTemplate(data) {
    const { name, portrait, id, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    function getUserCardDOM() {
        const article = document.createElement('article');
        article.classList.add('photographer-card');
        article.setAttribute('role', 'article');
        article.setAttribute('aria-label', `${name}, ${city}, ${country}`);
        // Crée un lien <a> et son contenu
        const linkArticle = document.createElement('a');
        linkArticle.classList.add('linkArticle');
        linkArticle.href = `/photographer.html?id=${id}`;
        // Crée l'image
        const img = document.createElement('img');
        img.src = picture;
        img.alt = `Portrait de ${name}, photographe`;
        // Crée le titre <h2>
        const h2 = document.createElement('h2');
        h2.textContent = name;
        // Crée les éléments pour la ville et le pays
        const citySpan = document.createElement('span');
        citySpan.classList.add('red');
        citySpan.textContent = city;
        const countrySpan = document.createElement('span');
        countrySpan.classList.add('red');
        countrySpan.textContent = country;
        // Crée le paragraphe pour le tagline
        const taglinePara = document.createElement('p');
        taglinePara.textContent = tagline;
        // Crée le paragraphe pour le prix
        const pricePara = document.createElement('p');
        pricePara.textContent = `${price}€/jour`;
        // Structure les éléments
        linkArticle.appendChild(img);
        linkArticle.appendChild(h2);
        article.appendChild(linkArticle);
        article.appendChild(citySpan);
        article.appendChild(document.createTextNode(', '));
        article.appendChild(countrySpan);
        article.appendChild(taglinePara);
        article.appendChild(pricePara);
        return article;
    }
    function getHeaderPhotographer(){
        // coder la structure du header 
    const divDetails = document.createElement('div');
    divDetails.classList.add('photograph-headerData');
    divDetails.setAttribute('role', 'article');
    divDetails.setAttribute('aria-label', `${name}, ${city}, ${country}`);
     
    // Crée un titre h1
    const h1 = document.createElement('h1');
    h1.textContent = name;
    // Crée les éléments pour la ville et le pays
    const citySpan = document.createElement('span');
    citySpan.classList.add('red');
    citySpan.textContent = city;
    const countrySpan = document.createElement('span');
    countrySpan.classList.add('red');
    countrySpan.textContent = country;
    // Créer le paragraphe pour le tagline
    const taglinePara = document.createElement('p');
    taglinePara.classList.add('tagline')
    taglinePara.textContent = tagline;
    // Structure les éléments
    divDetails.appendChild(h1);
    divDetails.appendChild(citySpan);
    divDetails.appendChild(document.createTextNode(', ')); 
    divDetails.appendChild(countrySpan);
    divDetails.appendChild(taglinePara);
    
    const photographerImage = document.createElement('img');
    photographerImage.src = picture;
    photographerImage.alt = `Portrait de ${name}, photographe`;
    photographerImage.classList.add('imageMiniature');
     
    const photographHeader = document.querySelector(".photograph-header");
    photographHeader.appendChild(divDetails);
    const mainContact = document.getElementById("main_contact");
    // Insérez divDetails avant le bouton de contact
    mainContact.insertBefore(divDetails, mainContact.querySelector(".contact_button"));
    photographHeader.appendChild(photographerImage);

    return photographHeader;
    }
    return { name, picture,  city, country, tagline, price, getUserCardDOM,getHeaderPhotographer }
}


