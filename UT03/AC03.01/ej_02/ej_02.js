// Se obtiene la la fecha del dia actual
let fechaActual = new Date();
// Se crea una variable que almacena la fecha del dia a comaprar
let fechaAComparar = new Date(2000, 0, 1);
// Como se solicita el ejercisio le designamos la hora solicitada
fechaAComparar.setHours(12, 0, 0, 0);
// Hacemos la comparacion de ambos valores en base a milisegundos transcurridos desde la fecha base de js y para calcularla la diferencia de la misma realizamos una resta
let milisigundos = fechaActual.getTime() - fechaAComparar.getTime();
// mostramos el resultado de nuestra operacion mediante un alert
alert("milisegundos entre ambos valores = " + milisigundos);
