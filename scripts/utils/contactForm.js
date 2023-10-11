const modal = document.getElementById("contact_modal");
const contactButton=document.querySelector('.contact_button')
contactButton.addEventListener('click', displayModal)
function displayModal() {
	modal.style.display = "block";
}
const closeButton=document.querySelector('.close')
closeButton.addEventListener('click', closeModal)
function closeModal() {
    modal.style.display = "none";
}

const contactModal=document.getElementById('contact_modal')
const form=document.getElementById('form')
const first=document.querySelector('#firstname')
function formulaire() {
    const resteDeFormulaire=`<div class="formData ">
    <label for="lastname">Nom</label><br>

    <input class="text-control" type="text" id="lastname" aria-labelledby="lastname" aria-describedby="lastname-format" name="lastname" required><br>
  </div>
  <div class="formData">
    <label for="email">E-mail</label><br>
    <input class="text-control" id="email" aria-labelledby="email" aria-describedby="email-format" name="email" required><br>
  </div>
  <div class="formData">
    <label for="message">Message</label><br>
    <input class="text-control" type="text" id="message" name="message"><br>
  </div>`
  first.insertAdjacentHTML("afterend", resteDeFormulaire );
}
formulaire()