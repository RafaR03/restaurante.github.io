let urlParams = new URLSearchParams(window.location.search);

let precio = urlParams.get('price');

const precioInput = document.querySelector('#coste')

precioInput.value = `${precio}€`