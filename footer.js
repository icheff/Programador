// footer.js
fetch('footer/')
  .then(response => response.ok ? response.text() : Promise.reject('Not found'))
  .then(footerData => document.getElementById('footerContainer').innerHTML = footerData)
  .catch(error => console.error(error.message));