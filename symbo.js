const scriptURL =
  "https://script.google.com/macros/s/AKfycbwHKf9CbsBLpHYblkzR45JHMBn_9WT0M8G89DeEfvK3Sz9P7KZ0J5G00n27mC2BFoPr/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      window.location.href ='thank3.html'
    )
    .catch((error) => console.error("Error!", error.message));
});
