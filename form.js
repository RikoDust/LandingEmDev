

const form = document.getElementById("contactForm");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_ej67eb9",   // Service ID
    "template_4kc29wd",  // Template ID
    this
  )
  .then(() => {
    modalMessage.textContent = "Message envoyé avec succès ! ✅";
    modal.style.display = "flex";
    form.reset();
  })
  .catch((error) => {
    console.error("Erreur EmailJS :", error);
    modalMessage.textContent = "Erreur lors de l'envoi du message ❌";
    modal.style.display = "flex";
  });
});

// Fermer la modale
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
