/* Automatic Scrolling. */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
}); 

const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const subjectInput = document.querySelector('#subject-input');
const messageInput = document.querySelector('#message-input');

/* Contact */
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
    alert('Please fill out all fields.');
    return;
  }
  
  const url = `https://example.com/sendMessage?name=${nameInput.value}&email=${emailInput.value}&subject=${subjectInput.value}&message=${messageInput.value}`;
  fetch(url)
    .then(() => {
      alert('Message sent!');
      form.reset();
    })
    .catch(() => {
      alert('There was an error sending your message. Please try again later.');
    });
});