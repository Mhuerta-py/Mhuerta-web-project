document.addEventListener("DOMContentLoaded", function () {
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
contactForm.addEventListener("submit", function (event) {
event.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

if (name === "" || email === "" || message === "") {
formMessage.textContent = "Please fill out all required fields.";
formMessage.style.color = "red";
} else {
formMessage.textContent =
"Thank you! Your message has been submitted successfully.";
formMessage.style.color = "green";
contactForm.reset();
}
});
}

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {
newsletterForm.addEventListener("submit", function (event) {
event.preventDefault();

const email = document.getElementById("newsletterEmail").value.trim();

if (email === "") {
newsletterMessage.textContent = "Please enter your email address.";
newsletterMessage.style.color = "red";
} else {
newsletterMessage.textContent =
"Thanks for signing up for our newsletter!";
newsletterMessage.style.color = "green";
newsletterForm.reset();
}
});
}

const cards = document.querySelectorAll(".card, .resource-card, .team-card");

cards.forEach(function (card) {
card.addEventListener("mouseenter", function () {
card.style.transform = "scale(1.03)";
card.style.transition = "0.3s";
});

card.addEventListener("mouseleave", function () {
card.style.transform = "scale(1)";
});
});
});