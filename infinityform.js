const scriptURL =
  "https://script.google.com/macros/s/AKfycbxi1ipIhO-yP3kipkvhKuKOsoOpmyyFI0WD6qZdpqROX7ANWjLZxpU9BC6MO_6vflQbQQ/exec";

const form = document.forms["contact-form"];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
          window.location.href = 'thank4.html'; // Redirect to the thank you page
      })
      .catch((error) => console.error('Error!', error.message));
});
