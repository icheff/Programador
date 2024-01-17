// footer.js
fetch('./footer/index.html')
  .then(response => response.ok ? response.text() : Promise.reject('Not found'))
  .then(footerData => document.getElementById('footerContainer').innerHTML = footerData)
  .catch(error => console.error(error.message));