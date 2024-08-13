document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    var objectiveImage = document.querySelector('.objective-image');

    // Mostrar el modal cuando se carga la página
    modal.style.display = "block";

    // Cerrar el modal cuando el usuario hace clic en la "X"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar el modal cuando el usuario hace clic fuera del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Mostrar el modal al hacer clic en la imagen dentro del div objective
    objectiveImage.onclick = function() {
        modal.style.display = "block";
    }
});
