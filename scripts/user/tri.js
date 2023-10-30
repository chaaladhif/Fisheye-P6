const tri = () => {
    const triContainer = document.querySelector('.triContainer');
 const ptri=document.createElement('p')
 ptri.classList.add('ptri')
 ptri.textContent='trier par'
 triContainer.appendChild(ptri)
 // Création du premier select
 const selectContainer = document.createElement('div');
 selectContainer.classList.add('select-container');
 const select1 = document.createElement('select');
 select1.id = 'select1'
 const option1 = document.createElement('option');
 option1.value = 'option1';
 option1.textContent = 'Popularité ';
 select1.appendChild(option1)
 //option 2
 const option2 = document.createElement('option');
 option2.value = 'option2';
 option2.textContent = 'Date ';
 select1.appendChild(option2);
 // option3
 const option3 = document.createElement('option');
 option3.value = 'option3';
 option3.textContent = 'Titre ';
 select1.appendChild(option3)
/*const option= document.createElement('option')
option.classList.add('option')
option.innerHTML = '────────';
select1.appendChild(option)*/
 const hrElement = document.createElement('hr');
 select1.appendChild(hrElement)
 selectContainer.appendChild(select1);
 // Ajout des conteneurs de selects dans le div de tri
 triContainer.appendChild(selectContainer);
  };
  
  tri();
