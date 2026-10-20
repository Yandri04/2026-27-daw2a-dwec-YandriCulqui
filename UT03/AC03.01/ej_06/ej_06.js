//  Obtener la fecha actual
let hoy = new Date();

//  Restar un día
let ayer = new Date(hoy.getTime() - 24 * 60 * 60 * 1000);

//  Formatear la fecha según la configuración local del sistema
let ayerFormateada = ayer.toLocaleDateString();
let hoyFormateada = hoy.toLocaleDateString();

//. Mostrar el resultado por consola y en un alert
console.log("La fecha de ayer fue: ", ayerFormateada);
alert(
  "Fecha actual " +
    hoyFormateada +
    "\n" +
    "La fecha de ayer fue:" +
    ayerFormateada,
);
