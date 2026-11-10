let miVentana;
const b1 = document.getElementById("b1");
b1.addEventListener("click", () => {
  miVentana = window.open("", "", "width=500, height=500");
});
// El moveTo()El método mueve una ventana a las coordenadas especificadas.
const b2 = document.getElementById("bMoveTo");
b2.addEventListener("click", () => {
  miVentana.moveTo(300, 300);
});
// El moveBy()El método mueve una ventana un número de píxeles en relación con sus coordenadas actuales.
const b3 = document.getElementById("bMoveBy");
b3.addEventListener("click", () => {
  miVentana.moveBy(250, 250);
});
