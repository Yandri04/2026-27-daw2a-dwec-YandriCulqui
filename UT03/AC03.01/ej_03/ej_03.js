/**
 * Description cadenaResultante
 * Se reciben dos cadenas de string y un indice sobre la primera cadena para poder proporcionarla y concadenarla a la segunda cadena retornando un string
 * @param {*} ca1 cadena de string recibida como primer parametro
 * @param {*} ca2 cadena de string recibida como segundo parametro
 * @param {*} pPrimeraCadena  indice sobre la primera cadena a proporcionar
 * @returns {string} A partir de unir la parte recortada de la ca1 a la segunda cadena se retornara el resultado de esta misma mediante un string
 */
function cadenaResultante(ca1, ca2, pPrimeraCadena) {
  let ca1Pro = ca1.substr(pPrimeraCadena);
  let txt = "";
  return (txt = `Cadena 1: ${ca1}\nCadena 2: ${ca2}\nCadena 1 proporcionada a indice ${pPrimeraCadena}: ${ca1Pro}\nresultado = ${ca1Pro}${ca2}`);
}
// se reciben los paramentros necesarios para hacer uso de la funcion
let cadena1 = prompt("Inserta una cadena");
let cadena2 = prompt("Inserta una segunda cadena");
let posicion = prompt("Inserta una posicion de la cadena 1 a proporcionar");
// se validan estos valores  en casos de ser incorrectos se envia el alert sino  si no se realiza un alert el cual devolvera el el txt con el mensaje de los nombres unids
if (
  !isNaN(cadena1) ||
  !isNaN(cadena2) ||
  cadena1.length < 0 ||
  cadena2.length < 0
) {
  alert("Error en las cadenas o en la posicion, ingreselas nuevamente");
} else {
  alert(cadenaResultante(cadena1, cadena2, posicion));
}
