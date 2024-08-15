const scriptURL =
  "https://script.google.com/macros/s/AKfycbxmsT_Lcm9kvQd3Rhvrnk9PU_IxeL6Ixs6cCjkiTqb6WPu5SMwqwugQ-cL3ZVU5r4Ep/exec";

const form = document.forms["contact-form"];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
          window.location.href = 'thank7.html'; // Redirect to the thank you page
      })
      .catch((error) => console.error('Error!', error.message));
});
