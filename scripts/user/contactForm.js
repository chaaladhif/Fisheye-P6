const modal = document.getElementById("contact_modal");
const contactButton=document.querySelector('.contact_button')
contactButton.addEventListener('click', displayModal)
function displayModal(e) {
  e.preventDefault()
	modal.style.display = "block";
}
const closeButton=document.querySelector('.close')
closeButton.addEventListener('click', closeModal)
function closeModal() {
    modal.style.display = "none";
}

const contactModal=document.getElementById('contact_modal')
const form=document.getElementById('form')
const firstname=document.querySelector('#firstname')
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
  firstname.insertAdjacentHTML("afterend", resteDeFormulaire );
}
formulaire()
// DOM Elements
const btnSubmit = document.querySelector("#btnSubmit");
const formData=document.querySelectorAll('.formData');
//validate input firstname
  firstname.addEventListener("change", ()=>validateFirstname())
  const validateFirstname=()=> {
    const firstname=document.getElementById('firstname').value;
  if (firstname==="" || firstname.length < 2) {
  formData[0].setAttribute("data-error-visible", true);
  formData[0].setAttribute("data-error", "Veuillez entrer au minimum deux caracteres !");  
  return false; // Empêche l'envoi du formulaire
    }
  else{
  formData[0].setAttribute("data-error-visible", false);
  formData[0].removeAttribute(
  "data-error","Veuillez entrer au minimum deux caracteres !");
 }
  return true; // Permet l'envoi du formulaire si toutes les validations sont passées*/
}
//validate lastname
  lastname.addEventListener("change", ()=>validateLastname())
  const validateLastname=()=>{
  const lastname = document.getElementById('lastname').value;
  if (lastname==="" || lastname.length < 2) {
  formData[1].setAttribute("data-error-visible", true);
  formData[1].setAttribute("data-error", "Veuillez entrer au minimum deux caractere !");
   return false; // Empêche l'envoi du formulaire
  }
else{
  formData[1].setAttribute("data-error-visible", false);
  formData[1].removeAttribute(
  "data-error","Veuillez entrer au minimum deux caractere !");

}
  return true; // Permet l'envoi du formulaire si toutes les validations sont passées*/
}
//validate email
email.addEventListener('change', ()=>validateEmail()) 
const validateEmail=()=>{
  const email = document.getElementById('email').value;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", "Veuillez entrer un email valide !");
    return false; // Empêche l'envoi du formulaire
  } else {
    formData[2].setAttribute("data-error-visible", false);
    formData[2].removeAttribute("data-error", "Veuillez entrer un email valide !");
  }
  return true; // Permet l'envoi du formulaire si toutes les validations sont passées
}
//validate lastname
message.addEventListener("change", ()=>validateMessage())
const validateMessage=()=>{
const message = document.getElementById('message').value;
if (message==="" || message.length < 10) {
formData[3].setAttribute("data-error-visible", true);
formData[3].setAttribute("data-error", "Veuillez entrer au minimum dix caracteres !");
 return false; // Empêche l'envoi du formulaire
}
else{
formData[3].setAttribute("data-error-visible", false);
formData[3].removeAttribute(
"data-error","Veuillez entrer au minimum dix caracteres !");

}
return true; // Permet l'envoi du formulaire si toutes les validations sont passées*/
}
function validate(e) {
  e.preventDefault();
  const isFirstNameValid = validateFirstname();
  const isLastNameValid = validateLastname();
  const isEmailValid = validateEmail();
  const isMessage = validateMessage();

  if ( isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isMessage) {

   console.log(firstname, lastname, email, message)
  }
  else {
    displayModal(e) 
  }
}