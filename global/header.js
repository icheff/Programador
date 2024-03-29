fetch('./header')
.then(response => response.ok ? response.text() : Promise.reject('Not found'))
.then(headerData => document.getElementById('header').innerHTML = headerData)
.catch(error => console.error(error.message));