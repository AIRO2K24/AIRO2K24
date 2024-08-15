const scriptURL =
  "https://script.google.com/macros/s/AKfycbygp9EfMgneffM9U355jes4j7QJSBOODxC44HNXxBZarQzku6SqoXsGfLFVOeGgIIfkVQ/exec";


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            window.location.href = 'thank5.html'; // Redirect to the thank you page
        })
        .catch((error) => console.error('Error!', error.message));
  });
  
