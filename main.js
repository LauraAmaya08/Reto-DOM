document.getElementById('agregar').addEventListener('click', function() {
    const url = document.getElementById('url-imagen').value;
    const titulo = document.getElementById('titulo-imagen').value;
    if (url && titulo) {
        agregarImagenAGaleria(url, titulo);
    }
});

function agregarImagenAGaleria(url, titulo) {
    const galeria = document.getElementById('galeria');
    const galeriaItem = document.createElement('div');
    galeriaItem.className = 'galeria-item';

    const img = document.createElement('img');
    img.src = url;

    const h3 = document.createElement('h3');
    h3.textContent = titulo;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function() {
        galeriaItem.classList.add('removing');
        setTimeout(() => {
            galeria.removeChild(galeriaItem);
        }, 500);
    });

    const botonDetalles = document.createElement('button');
    botonDetalles.textContent = 'Ampliar';
    botonDetalles.className = 'details';
    botonDetalles.addEventListener('click', function() {
        mostrarImagenAmpliada(url, titulo);
    });

    galeriaItem.appendChild(img);
    galeriaItem.appendChild(h3);
    galeriaItem.appendChild(botonEliminar);
    galeriaItem.appendChild(botonDetalles);
    galeria.appendChild(galeriaItem);
}

function mostrarImagenAmpliada(url, titulo) {
    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const img = document.createElement('img');
    img.src = url;
    img.className = 'modal-img';

    const h3 = document.createElement('h3');
    h3.textContent = titulo;

    const botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Cerrar';
    botonCerrar.addEventListener('click', function() {
        document.body.removeChild(modal);
    });

    modalContent.appendChild(img);
    modalContent.appendChild(h3);
    modalContent.appendChild(botonCerrar);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}
