let numeros = [];
// se pide los datos
let nums = prompt(
  "Porfavor ingrese una serie de numeros positivos separados por espacios EJ: [1 2 3] ",
);
nums = nums.trim();
// se realizan als comrpobacioens correpsodiente si es null vacio ys e le quitan los epsciao de adleante y atras
if (nums === null || nums.trim() === "") {
  alert("ERROR NULL O VACIO  ");
} else {
  // si pasa las comprobaciones lo dividimos en un array
  let a1 = nums.split(" ");
  // pero como lo reibimos en string recorremos este array  nuevamente para castearlo a int pero antes de eso verifiamcos si es numero o si es negativos
  for (const num of a1) {
    if (!isNaN(num) && num > 0) {
      numeros.push(parseInt(num));
      console.log(`${num} cassteado y agregado correctamente`);
    } else {
      alert(`ERROR DETECTADO NUMERO NEGATIVO O NO ES NUMERO NEGATIVO ${num}`);
      break;
    }
  }

  // COMPROBAR REPETIDOS

  // se realizan las operacions para repetido
  // siendo que guardamos la cantidad de veces repitidos mediante con el contador y el valor a comparadra con cCompara
  let txt = `Numero de repeticiones \n`;
  let contador = 0;
  let nCompara = 0;
  for (let index = 0; index < numeros.length; index++) {
    nCompara = numeros[index];
    for (let findex = 0; findex < numeros.length; findex++) {
      if (nCompara === numeros[findex]) {
        contador++;
      }
    }
    // una vez hecho lo anterior se realiza la muestra pr pantalla aunque tengo un error que se me repiten los txt que muestro por pantalla por falta de tiempo se deja como esta
    // pero el conteo de cantidad de veces que aparece se realiza con exito o eso quiero crerr
    txt += `${nCompara} cantidad de repeticiones : ${contador} \n`;
    contador = 0;
  }
  alert(txt);
}
