// Pide el DNI al usuario
let entrada = prompt("Por favor, introduce tu número de DNI (sin letras):");

// Valida que no sea nulo, ni vacío, ni texto, ni menor a 8 dígitos
while (
  entrada === null ||
  entrada.trim() === "" ||
  !Number.isInteger(Number(entrada)) ||
  entrada.length < 8
) {
  // Pide el DNI de nuevo si no es válido
  entrada = prompt(
    "Dato inválido. Por favor, introduce un número entero válido para el DNI:",
  );
}
// Convierte el texto validado a número
let dniValido = Number(entrada);

// Cadena oficial de letras del DNI
let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

// Calcula la posición de la letra (residuo de dividir entre 23)
let iLetraDni = dniValido % 23;

// Muestra la letra obtenida
alert(`letra DNI ${letrasDNI[iLetraDni]}`);
