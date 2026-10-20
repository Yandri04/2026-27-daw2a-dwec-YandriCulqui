// Se solicita al usuario la cantidad de conversiona euros de las pesetas, se las castea float en el caso de tener decimal
let cPesetas = parseFloat(prompt("Ingrese la cantidad de pesetas a convertir"));
// se realizan las validaciones correspondientes exectuando que en este ejercisio se solicita explictamente que el valor ingresado se un valo positivo no infinito
// en caso contrario se mostrara un mensajhe de error
if (
  cPesetas <= 0 ||
  cPesetas === null ||
  isNaN(cPesetas) ||
  !isFinite(cPesetas)
) {
  alert("0 PESETAS INGRESADAS, NULL O NO ES NUMERO");
} else {
  // se realiza el calculo de conversion actual y permanente de las pesetas a euros
  let cEuros = cPesetas / 166.386;
  // se muestra el mensaje por un alert
  alert(
    `Conversion de pesetas a euros\nPesetas: ${cPesetas}\nCambio a euro: 166.386\nTotal cambio: ${cEuros.toFixed(2)}€`,
  );
}
