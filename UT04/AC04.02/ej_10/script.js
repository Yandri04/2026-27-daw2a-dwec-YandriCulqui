let aImagenes = [
  "primera.png",
  "segunda.png",
  "tercera.png",
  "cuarta.png",
  "quinta.png",
  "ultima.png",
];
let iActual = 0;
const imgVisor = document.getElementById("visor");
imgVisor.src = aImagenes[0];

const bSiguiente = document.getElementById("siguiente");
const bAnterior = document.getElementById("anterior");

bSiguiente.addEventListener("click", siguiente);
bAnterior.addEventListener("click", anterior);

function primera() {
  iActual = 0;
  imgVisor.src = aImagenes[iActual];
}
function siguiente() {
  iActual = (iActual + 1) % aImagenes.length;
  imgVisor.src = aImagenes[iActual];
}
function anterior() {
  iActual = (iActual - 1 + aImagenes.length) % aImagenes.length;
  imgVisor.src = aImagenes[iActual];
}
function ultima() {
  iActual = aImagenes.length - 1;
  imgVisor.src = aImagenes[iActual];
}

let intervalo = null;

function derecho() {
  clearInterval(intervalo);
  intervalo = setInterval(siguiente, 500);
}

function izquierdo() {
  clearInterval(intervalo);
  intervalo = setInterval(anterior, 500);
}

function detener() {
  clearInterval(intervalo);
}

bSiguiente.addEventListener("mouseover", derecho);
bSiguiente.addEventListener("mouseout", detener);

bAnterior.addEventListener("mouseover", izquierdo);
bAnterior.addEventListener("mouseout", detener);
