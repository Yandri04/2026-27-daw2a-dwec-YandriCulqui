/**
 * Se crean tres varbles representados el red green y blue del rgb
 * obtenems un valor aleatorios desde 0 hasta 255.9999999
 * como necesitamos valor que no sean float, se realiza un redondeo de estos mismos
 */
let x = Math.floor(Math.random() * 256);
let y = Math.floor(Math.random() * 256);
let z = Math.floor(Math.random() * 256);

// y mediante un get elemente byTagName del bdio se modifica su atributos rgb con las variables anteriormente especificadas
document.getElementsByTagName("body")[0].style.backgroundColor =
  "rgb(" + x + "," + y + "," + z + ")";
// se muestra por consola el rgb actual
console.log(`RGB (${x},${y},${z})`);
