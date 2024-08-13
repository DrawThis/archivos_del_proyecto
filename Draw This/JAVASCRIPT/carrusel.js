// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos de radio del slider
    var radioButtons = document.querySelectorAll('input[name="slider"]');

    // Establece un índice inicial para la diapositiva actual
    var currentSlide = 0;

    // Función para cambiar a la siguiente diapositiva
    function nextSlide() {
      // Desmarca la diapositiva actual
      radioButtons[currentSlide].checked = false;

      // Incrementa el índice de la diapositiva actual
      currentSlide = (currentSlide + 1) % radioButtons.length;

      // Marca la nueva diapositiva
      radioButtons[currentSlide].checked = true;
    }

    // Establece un intervalo para cambiar automáticamente las diapositivas cada 2 segundos
    setInterval(nextSlide, 2000);
  });