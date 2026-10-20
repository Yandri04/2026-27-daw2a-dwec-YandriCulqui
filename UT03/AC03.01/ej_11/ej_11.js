let cPesetas = parseFloat(prompt("Ingrese la cantidad de pesetas a convertir"));

if (
  cPesetas <= 0 ||
  cPesetas === null ||
  isNaN(cPesetas) ||
  !isFinite(cPesetas)
) {
  alert("0 PESETAS INGRESADAS, NULL O NO ES NUMERO");
} else {
  let cEuros = cPesetas / 166.386;
  alert(
    `Conversion de pesetas a euros\nPesetas: ${cPesetas}\nCambio a euro: 166.386\nTotal cambio: ${cEuros.toFixed(2)}€`,
  );
}
