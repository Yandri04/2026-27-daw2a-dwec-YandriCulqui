// Se obtiene la fecha actual
let fechaActual = new Date();
// se obtiene las horas minutos y segundos de la hora actual, casteandolo a string, pero si mediante padstart
// hasta que alcanza una longitud de dos cifras se rellenara de la izquirda hasta la derecha con cero
// aplicandose esto a los tres paramentros recibidos.
let horas = String(fechaActual.getHours()).padStart(2, "0");
let minutos = String(fechaActual.getMinutes()).padStart(2, "0");
let segundos = String(fechaActual.getSeconds()).padStart(2, "0");
// se muestra el resultado por consola y con un alert
console.log(horas + ":" + minutos + ":" + segundos);
alert(horas + ":" + minutos + ":" + segundos);
