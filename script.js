// Example: Form validation for contact page
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const name = document.querySelector('#name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const message = document.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
      } else if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
      }
    });
  }
});

function validateEmail(email) {
  const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return re.test(email);
}
