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

const bPrimero = document.getElementById("primero");
const bSiguiente = document.getElementById("siguiente");
const bAnterior = document.getElementById("anterior");
const bUltimo = document.getElementById("ultimo");

bPrimero.addEventListener("click", primera);
bSiguiente.addEventListener("click", siguiente);
bAnterior.addEventListener("click", anterior);
bUltimo.addEventListener("click", ultima);

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

imgVisor.addEventListener("click", () => {
  const ventanaSiguiente = window.open("pag2.html", "ventana");

  ventanaSiguiente.addEventListener("load", () => {
    let visor2 = ventanaSiguiente.document.getElementById("visor2");
    visor2.alt = aImagenes[iActual];
    visor2.src = aImagenes[iActual];
  });
});
