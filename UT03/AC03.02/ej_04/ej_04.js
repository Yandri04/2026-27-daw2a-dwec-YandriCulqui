let aCiyTemp = [];
let temMedia = 0;
let ciudadActual = "";
// Pedimos la primera ciudad ANTES de entrar al bucle
let ciAnTemp = prompt(
  "Ingrese una ciudad y las temperaturas de su viernes sabado y domingo todo separa por espacios porfavor EJ: [pmaplona 12 13 14]",
);

while (true) {
  // Validar que no sea null  o vacío
  if (ciAnTemp === null || ciAnTemp.trim() === "" || !isNaN(ciAnTemp)) {
    alert("ERROR AL INGRESAR UNA CIUDAD INTENTELO NUEVAMENTE ");
    ciAnTemp = prompt("Ingrese una ciudad y sus 3 temperaturas válidas:");
    continue;
  }

  // Limpiamos espacios
  ciAnTemp = ciAnTemp.trim();
  let datosSeprados = ciAnTemp.split(" ");

  // Validar que tenga el nombre + 3 temperaturas
  if (datosSeprados.length < 4) {
    alert(
      "ERROR: Debe ingresar la ciudad seguida de las 3 temperaturas. Inténtelo nuevamente.",
    );
    ciAnTemp = prompt(
      "Ingrese la ciudad y sus 3 temperaturas (EJ: pamplona 20 25 22):",
    );
    continue;
  }

  //  Guardamos los datos válidos en el array
  aCiyTemp.push(datosSeprados);

  // Comprobar si ya llegamos al límite deseado
  if (aCiyTemp.length === 3) {
    console.log(
      `${aCiyTemp.length} CIUDADES y TEMPERATURAS agregadas con éxito al array`,
    );
    break; // Cerramos el bucle aquí porque ya tenemos las 3 ciudades
  }

  // Si aún no llegamos a 3, pedimos la siguiente ciudad para la próxima vuelta del bucle
  ciAnTemp = prompt(
    `Ingrese la ciudad #${aCiyTemp.length + 1} y sus temperaturas:`,
  );
}
// recorremos el array ciendo que
for (let index = 0; index < aCiyTemp.length; index++) {
  // en ciudad actual guardamos siempre el prumera valor del array el cual se encuentra el nombre d ela ciudad
  ciudadActual = aCiyTemp[index][0];
  for (let findex = 1; findex < aCiyTemp[index].length; findex++) {
    // como siempre ya recogemos el segundo valor se empieza a partir del 0 + 1 para obtener los siguiente valores los cuales serian las temperaturas
    // hacemos un parseInt debido a que entran como string  y se los suma a una variable para el calculo de la media de las temperaturas
    temMedia += parseInt(aCiyTemp[index][findex]);
  }
  // se divide esos valores entre 3
  temMedia /= 3;
  // y mostramos mediante un alert la ciudades y sus media de temperaturas
  alert(`${ciudadActual} y suma media de temperatura es  ${temMedia}`);
  // se deja en 0 las temperaturas medias para volver a sumar los valore sintegros de la siuiente filla del array
  temMedia = 0;
}
