// script para abrir y cerrar la ventana emergente

$(document).ready(function () {
  $("#open").on("click", function () {
    $("#popup").fadeIn("fast");
  });

  $("#close").on("click", function () {
    $("#popup").fadeOut("fast");
  });
});

// script para completer el formulario y borrar los datos cuando se pulsa "enviar"

let datos = document.getElementsByClassName("formulario__input");

for (i = 0; i < datos.length; i++) {
  datos[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("desplazar");
    } else {
      this.nextElementSibling.classList.remove("desplazar");
    }
  });
}
