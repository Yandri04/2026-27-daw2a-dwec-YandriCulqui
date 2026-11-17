let contenedorRaton = document.getElementById("eventosRaton");
let contenedorTeclado = document.getElementById("eventosTeclado");
let navegador = document.getElementById("cliX-Y");
let Pagina = document.getElementById("pageX-Y");
let Caracter = document.getElementById("caracter");
let Código = document.getElementById("codigo");

document.addEventListener("click", (event) => {
  navegador.textContent = "[" + event.clientX + " : " + event.clientY + "]";
  Pagina.textContent = "[" + event.pageX + " : " + event.pageY + "]";
  contenedorRaton.style.backgroundColor = "#FFFFCC";
  contenedorTeclado.style.backgroundColor = "#ffffff";
});

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  Caracter.textContent = "[" + event.key + "]";
  Código.textContent = "[" + event.keyCode + "]";
  contenedorTeclado.style.backgroundColor = "#CCE6FF";
  contenedorRaton.style.backgroundColor = "#ffffff";
});
