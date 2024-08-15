const scriptURL =
  "https://script.google.com/macros/s/AKfycbzcNB3itRCEja1KuHxJZqlQb7-Xo5JMRSYRc9qIOgjV1KBIoY57GrvgoYKfFrziKtwghg/exec";

const form = document.forms["contact-form"];


form.addEventListener('submit', (e) => {
  e.preventDefault();
<<<<<<< HEAD
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      window.location.href('thank6.html')
    )

    .catch((error) => console.error("Error!", error.message));
=======
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
          window.location.href = 'thank6.html'; // Redirect to the thank you page
      })
      .catch((error) => console.error('Error!', error.message));
>>>>>>> 756a0e0e1ccdbae33e517d9b975b20d612724fe7
});
