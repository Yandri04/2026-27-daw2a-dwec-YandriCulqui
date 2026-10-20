// se solicita un nombre para realizar el saludo dependiendo la fehca
let cadena = prompt("Ingresa tu nombre porfavor");
cadena = cadena.trim();
// se le quitan los espacios del inicio y el final de la cadena

// se realizan las validaciones correspondiente sobre la cadena si cae en algun caso dara error sino
if (cadena === null || !isNaN(cadena)) {
  alert("ERROR INTENTE INGRESAR SU NOMBRE NUEVAMENTE");
} else {
  /**
   * Se obtiene la fecha actual
   * Obtenemos su hora
   * meidante un switch true se realiza diversos tipos de comapraciones en base rangos del valor hora para determinar si es buenos dias, tardes o noche
   * este valor se asigna a la variable txt y se romperia con un break
   */
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
  // una vez realizado el switch se muestra el mensaje medante un alert y se eseicifca la fecha actual
  alert(
    `${txt} ${cadena} \nHora actual: ${dia.getHours()}:${dia.getMinutes()}:${dia.getSeconds()}`,
  );
}
