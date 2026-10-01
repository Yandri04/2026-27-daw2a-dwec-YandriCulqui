let cantidad = 0;
let vacio = !cantidad;
// js interpretara la cantidad como falso debido a que es el cero, pero al momento de pasar por "!cantidad" , este falso se vuelve vedadero
console.log(vacio)
cantidad = 2;
vacio = !cantidad;
console.log(vacio)
// En este cao, cualquier numero que sea >= 1 se interpreta como verdadero, lo cual en este caso vacio seria verdadero, pero como tiene el "!cantidad" se vovlera falso


let mensaje = "";
let mensajeVacio = !mensaje;
// en temas de string si literalmente no hay ninguna caracter en el texto se interpreta como vacio es decir  y como esta usandose "!" este pasa a true
console.log(mensajeVacio)

mensaje = "Bienvenido";
mensajeVacio = !mensaje;
console.log(mensajeVacio)
// y aqui si hay cualquier tipkde carqacter incluso un string este mismo se vera en true por la interpretacion de js, pero como se usa el "!" pasa a false 

