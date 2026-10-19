let fechaActual = new Date();
let fechaActualFormateada = fechaActual.toLocaleDateString();
let horas = String(fechaActual.getHours()).padStart(2, "0");
let minutos = String(fechaActual.getMinutes()).padStart(2, "0");
let segundos = String(fechaActual.getSeconds()).padStart(2, "0");

console.log(
    "Fecha: " + fechaActualFormateada + " " +
    "Hora: " + horas + ":" + minutos + ":" + segundos);
    alert( "Fecha: " + fechaActualFormateada + " " +
    "Hora: " + horas + ":" + minutos + ":" + segundos);


