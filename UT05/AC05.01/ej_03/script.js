let contenido1 = document.getElementById("contenidos_1");
let enlace1 = document.getElementById("enlace_1");
let contenido2 = document.getElementById("contenidos_2");
let enlace2 = document.getElementById("enlace_2");
let contenido3 = document.getElementById("contenidos_3");
let enlace3 = document.getElementById("enlace_3");

function ocularContenidoActualizarEnlace(event, contenido, enlace) {
  event.preventDefault();
  contenido.hidden = !contenido.hidden;

  if (contenido.hidden) {
    enlace.innerHTML = "Mostrar Contenido";
  } else {
    enlace.innerHTML = "Ocultar contenidos";
  }
}

enlace1.addEventListener("click", (event) => {
  ocularContenidoActualizarEnlace(event, contenido1, enlace1);
});
enlace2.addEventListener("click", (event) => {
  ocularContenidoActualizarEnlace(event, contenido2, enlace2);
});
enlace3.addEventListener("click", (event) => {
  ocularContenidoActualizarEnlace(event, contenido3, enlace3);
});
