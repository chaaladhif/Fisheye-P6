function tri(listMedia) {
    //console.log(listMedia);
    const ptri = document.createElement('label');
    ptri.classList.add('ptri');
    ptri.textContent = 'Trier par';
    ptri.setAttribute('for', 'select1');

    const selectContainer = document.createElement('div');
    selectContainer.classList.add('select-container');
    selectContainer.setAttribute('tabindex', '0');
    const x = document.createElement('div');
    x.setAttribute('class', 'custom-select');
    x.style.width = '120px';
    const select1 = document.createElement('select');
    select1.setAttribute('id', 'select1');
    const option1 = document.createElement('option');
    option1.value = '0';
    option1.textContent = 'Popularité';

    const option2 = document.createElement('option');
    option2.value = '1';
    option2.textContent = 'Date';

    const option3 = document.createElement('option');
    option3.value = '2';
    option3.textContent = 'Titre';

    // Ajoutez les options à l'élément select
    select1.appendChild(option1);
    select1.appendChild(option2);
    select1.appendChild(option3);
    x.appendChild(select1);

    // Code pour la personnalisation du select
    var a, b, c;

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = select1.options[select1.selectedIndex].innerHTML;
    x.appendChild(a);

    b = document.createElement("DIV");
b.setAttribute("class", "select-items select-hide");

for (let j = 0; j < select1.options.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = select1.options[j].innerHTML;
    c.setAttribute("tabindex", "0"); // Add tabindex
    c.addEventListener("click", function (e) {
        // Update the original select box and the selected item
        select1.selectedIndex = j;
        a.innerHTML = this.innerHTML;

        // Remove the "same-as-selected" class from other items
        var y = this.parentNode.getElementsByClassName("same-as-selected");
        for (let k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
        }

        this.setAttribute("class", "same-as-selected");

        // Close the list
        b.classList.add('select-hide');
        a.classList.remove("select-arrow-active");

        // Trigger change event on the select element
        select1.dispatchEvent(new Event('change'));
    });

    // Add keydown event listener for keyboard navigation
    c.addEventListener("keydown", function (e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default Enter key behavior
            // Update the original select box and the selected item
            select1.selectedIndex = j;
            a.innerHTML = this.innerHTML;

            // Remove the "same-as-selected" class from other items
            var y = this.parentNode.getElementsByClassName("same-as-selected");
            for (let k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
            }

            this.setAttribute("class", "same-as-selected");

            // Close the list
            b.classList.add('select-hide');
            a.classList.remove("select-arrow-active");

            // Trigger change event on the select element
            select1.dispatchEvent(new Event('change'));
        } else if (e.key === 'Tab') {
            // Handle Tab key for navigation
            e.preventDefault();
            const nextIndex = (j + 1) % select1.options.length;
            const nextOption = b.querySelector(`div:nth-child(${nextIndex + 1})`);
            if (nextOption) {
                nextOption.focus();
            }
        }
    });

    b.appendChild(c);
}

x.appendChild(b);

    // Écoutez l'événement click sur l'élément select-selected
    a.addEventListener('click', function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });

    document.addEventListener('click', function () {
        closeAllSelect();
        a.classList.remove("select-arrow-active");
    });
    
    function closeAllSelect() {
        var x, y;
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (let i = 0; i < y.length; i++) {
            y[i].classList.remove("select-arrow-active");
            x[i].classList.add('select-hide');
        }
        
    }
    selectContainer.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default Enter key behavior
            // Open the select and highlight the first option
            a.classList.add("select-arrow-active");
            b.classList.remove('select-hide');

}});

    // Écoutez l'événement change sur l'élément select
    select1.addEventListener('change', () => {
        const selectedValue = select1.value;
        //console.log(listMedia);
        // la logique de tri en fonction de la valeur sélectionnée
        if (selectedValue === '0') {
        sortedList= listMedia.sort((a, b) => b.likes - a.likes);
        }
        else if (selectedValue === '1') {
            sortedList= listMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (selectedValue === '2') {
            sortedList= listMedia.sort((a, b) => a.title.localeCompare(b.title));
            
        }
       // console.log(listMedia);
          // Mettre à jour la galerie après le tri
          updateGallery(listMedia);
        });
        selectContainer.appendChild(x);
        return { ptri, selectContainer };

    }