const aNum = [1, 5, 2, 5, 2, 4, 1, 2, 3, 2];
let nEliminar = prompt("Ingrese un numero del 1-5 a eliminar");

// Validamos  si es null
if (nEliminar === null) {
  alert("Operación cancelada.");
} else {
  nEliminar = nEliminar.trim();

  // Validamos si está vacío o no es un número válido
  if (nEliminar === "" || isNaN(nEliminar)) {
    alert(`ERROR: "${nEliminar}" no es un número válido.`);
  } else {
    let numero = parseInt(nEliminar);

    // Validamos que esté dentro del rango 1-5
    if (numero < 1 || numero > 5) {
      alert("El número está fuera del rango permitido (1-5).");
    } else {
      // 4. Eliminamos los elementos modificando el array correcto
      for (let index = aNum.length - 1; index >= 0; index--) {
        if (aNum[index] === numero) {
          aNum.splice(index, 1);
        }
      }
      // por consola se muestra el array
      console.log("Array resultante:", aNum);
      // cual nuermo elimino
      alert(`Se eliminaron todos los números ${numero}. Revisa la consola.`);
    }
  }
}
