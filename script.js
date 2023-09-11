// Agrega un event listener al botón "Buscar imágenes"
const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', buscar);

function buscar() {
    // Obtener el texto ingresado por el usuario
    const userInput = document.getElementById('inputBuscar').value; 
    const apiUrl = `  https://rickandmortyapi.com/api/episode/${userInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Procesa los datos y muestra resultados
            mostrarResultados(data);
        })
        .catch(error => {
            console.error('Error al obtener datos de la API', error);
        });
}
function mostrarResultados(data) {
    const contenedor = document.getElementById('contenedor');

    // Limpia el contenedor antes de agregar nuevas tarjetas
    contenedor.innerHTML = '';

    // Verifica si hay resultados en la respuesta de la API
    if (data) {
        const titulo = data.name;
        const fecha = data.air_date;

        // Crea una tarjeta (div) para mostrar la información
        const card = document.createElement('div');
        card.classList.add('card');

        const tituloElement = document.createElement('h2');
        tituloElement.textContent = "Nombre del episodio: " + titulo;
  
   

        const fechaElement = document.createElement('p');
        fechaElement.classList.add('fecha');
        fechaElement.textContent = `Fecha: ${fecha}`;

        // Agrega estos elementos a la tarjeta
        card.appendChild(tituloElement);

        card.appendChild(fechaElement);

        // Agrega la tarjeta al contenedor
        contenedor.appendChild(card);
    } else {
        // Si no hay resultados, muestra un mensaje de error o maneja la situación según tus necesidades.
        const errorElement = document.createElement('p');
        errorElement.textContent = 'No se encontraron resultados.';
        contenedor.appendChild(errorElement);
    }
}



    


