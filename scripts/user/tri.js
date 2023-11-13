function tri(listMedia) {
    const ptri = document.createElement('label')
    ptri.classList.add('ptri')
    ptri.textContent = 'Trier par';
    ptri.setAttribute('for', 'select1');

    const selectContainer = document.createElement('div');
    selectContainer.classList.add('select-container');
    const select1 = document.createElement('select');
    select1.id = 'select1';
    const option1 = document.createElement('option');
    option1.value = 'popularite';
    option1.textContent = 'Popularité';
    
    const option2 = document.createElement('option');
    option2.value = 'Date';
    option2.textContent = 'Date';
    
    const option3 = document.createElement('option');
    option3.value = 'Titre';
    option3.textContent = 'Titre';

    // Ajoutez les options à l'élément select
    select1.appendChild(option1);
    select1.appendChild(option2);
    select1.appendChild(option3);

    // Écoutez l'événement change sur l'élément select
    select1.addEventListener('change', () => {
        const selectedValue = select1.value;

        // Ajoutez ici la logique de tri en fonction de la valeur sélectionnée
        if (selectedValue === 'popularite') {
            ///////console.log( listMedia.sort((a, b) => b.likes - a.likes));
            //ordre decroissant de likes
            listMedia.sort((a, b) => b.likes - a.likes);
        } else if (selectedValue === 'Date') {
            //ordre croissant pour la date
            ////////////console.log( listMedia.sort((a, b) => new Date(a.date) - new Date(b.date)));
            listMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (selectedValue === 'Titre') {
            //ordre alphabetique de a à z
           /////////////////// console.log(listMedia.sort((a, b) => a.title.localeCompare(b.title)));
            listMedia.sort((a, b) => a.title.localeCompare(b.title));
        }
       // updateGallery(listMedia);
    });
    selectContainer.appendChild(select1);
    return { ptri, selectContainer };
}
  