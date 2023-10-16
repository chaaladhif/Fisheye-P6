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
    const photographHeaderData = document.querySelector('.photograph-headerData');
    const photographHeader = document.querySelector('.photograph-header');
    const photographerImage = document.createElement('img');
    const article = document.createElement('article');
    article.classList.add('photographer-card');
    article.setAttribute('role', 'article');
    article.setAttribute('aria-label', `${name}, ${city}, ${country}`);

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
    // Crée le paragraphe pour le tagline
    const taglinePara = document.createElement('p');
    taglinePara.classList.add('tagline')
    taglinePara.textContent = tagline;
    // Structure les éléments
    article.appendChild(h1);
    article.appendChild(citySpan);
    article.appendChild(document.createTextNode(', ')); // Ajoute une virgule
    article.appendChild(countrySpan);
    article.appendChild(taglinePara);
    photographerImage.src = picture;
    photographerImage.alt = `Portrait de ${name}, photographe`;
    photographerImage.classList.add('imageMiniature');
    photographHeader.appendChild(photographerImage);
    photographHeaderData.appendChild(article);
    /*photographHeader.insertAdjacentElement('afterbegin', article)*/
    return article;
    }
    return { name, picture,  city, country, tagline, price, getUserCardDOM,getHeaderPhotographer }
}


