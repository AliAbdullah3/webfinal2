const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!emailInput.validity.valid) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  if (!messageInput.validity.valid) {
    alert("Please enter a message.");
    messageInput.focus();
    return;
  }

  alert("Thank you for contacting us!");

  contactForm.reset();
});
