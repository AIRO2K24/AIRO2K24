const scriptURL =
  "https://script.google.com/macros/s/AKfycbzcNB3itRCEja1KuHxJZqlQb7-Xo5JMRSYRc9qIOgjV1KBIoY57GrvgoYKfFrziKtwghg/exec";

  const form = document.forms["contact-form"];
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            window.location.href = 'thank6.html'; // Redirect to the thank you page
        })
        .catch((error) => console.error('Error!', error.message));
  });
  