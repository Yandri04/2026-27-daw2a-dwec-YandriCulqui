// Se solicita una palabra al usuario
let palabra = prompt("Ingrese una palabra para saber si es palindromo");
// Se le quita los espacios por delante y por detras gracas a .trim()
palabra = palabra.trim();
// se realizan las validaciones necesarias para sabier si es null o es un numero si ese es el caso se mostrara un alert mostrando un errr
if (palabra === null || !isNaN(palabra)) {
  alert("ERROR EN LA PALABRA , VACIO , NULL O NUMERO");
}
// Se realizan tres pasos principlaes en este apartad
/**
 * Palabra.split(""): Dividimos toda la palabra en un array en base a todas sus palabras contenidas en la cadena.
 * palabra.split("").reverse(): Ese array recibido se lo invierte mediante el metodo reverse() para tener la cadena al revez y pder comparar si es palindromo
 * palabraAlReves = palabra.split("").reverse().join(""): Y como ultimo para comparar un string con un string se realiza un join para unir este array en una sola cadena
 */
let palabraAlReves = palabra.split("").reverse().join("");
// Parte del ejercisio realizada por el profesorado
// Se realiza un alert en el dependiente si la palabra una vez invertida  es o no es igual a la palabra sin invertirse se mostar si o no al mensaje para determinar
// si es palindromo o no
alert(
  `TU PALABRA ${palabra === palabraAlReves ? "Sí" : "No"}  ES PALINDROMO \n PALABRA INGRESADA =   ${palabra}\n PALABRA INGRESADA ALREVES =  ${palabraAlReves}\n`,
);
