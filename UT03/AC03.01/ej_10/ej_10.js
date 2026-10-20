let cadena = prompt("Ingresa tu nombre porfavor");
cadena.trim();
if (cadena === null || !isNaN(cadena)) {
  alert("ERROR INTENTE INGRESAR SU NOMBRE NUEVAMENTE");
} else {
  let dia = new Date();
  let hora = dia.getHours();
  let txt = "";
  switch (true) {
    case hora >= 1 && hora < 13:
      txt = "Buenos dias";
      break;
    case hora >= 13 && hora < 19:
      txt = "Buenas tardes";
      break;
    case hora >= 19 && hora <= 24:
      txt = "Buenas noches";
      break;
    default:
      break;
  }

  alert(
    `${txt} ${cadena} \nHora actual: ${dia.getHours()}:${dia.getMinutes()}:${dia.getSeconds()}`,
  );
}
