function tamanoVentanaNavegador() {
  let dimensiones = [];

  if (typeof window.innerWidth == "number") {
    // No es IE
    dimensiones = [window.innerWidth, window.innerHeight];
  } else if (
    document.documentElement &&
    (document.documentElement.clientWidth ||
      document.documentElement.clientHeight)
  ) {
    //IE 6 en modo estandar (no quirks)
    dimensiones = [
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ];
  } else if (
    document.body &&
    (document.body.clientWidth || document.body.clientHeight)
  ) {
    //IE en modo quirks
    dimensiones = [document.body.clientWidth, document.body.clientHeight];
  }

  return dimensiones;
}

let resultado = document.getElementById("resultado");
document.addEventListener("click", (evento) => {
  let dimensiones = tamanoVentanaNavegador();
  let ancho = dimensiones[0];
  let alto = dimensiones[1];
  let mitadAncho = ancho / 2;
  let mitadAlto = alto / 2;

  let clicX = evento.clientX;
  let clicY = evento.clientY;

  let horizontal = clicX < mitadAncho ? "Izquierda" : "Derecha";
  let vertical = clicY < mitadAlto ? "Arriba" : "Abajo";
  resultado.textContent = ` [ ${horizontal} : ${vertical} ]`;
});
