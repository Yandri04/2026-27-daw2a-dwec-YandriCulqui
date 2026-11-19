const contenidos = document.querySelectorAll(".contenido");
const enlaces = document.querySelectorAll(".enlace");

function ocultarContenidoActualizarEnlace(event, contenido, enlace) {
  event.preventDefault();
  contenido.hidden = !contenido.hidden;

  if (contenido.hidden) {
    enlace.textContent = "Mostrar contenidos";
  } else {
    enlace.textContent = "Ocultar contenidos";
  }
}

enlaces.forEach((enlace, index) => {
  enlace.addEventListener("click", (event) => {
    ocultarContenidoActualizarEnlace(event, contenidos[index], enlace);
  });
});
