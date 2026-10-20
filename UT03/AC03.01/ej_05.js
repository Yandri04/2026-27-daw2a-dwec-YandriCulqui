// SE HA MODIFICADO LS NOMBRES DE LAS VARIABLES  PARA QUE NO DE ERROR

// crea una fecha sumando 0 milisegundos al tiempo unix. resultado: 1 de enero de 1970
let fecha1 = new Date(0);

// suma 10 billones de milisegundos a la fecha base. resultado: 20 de noviembre del año 2286
let fecha2 = new Date(10000000000000);

// crea una fecha fija. en javascript los meses van de 0 a 11 (5 es junio). resultado: 1 de junio de 2009
let fecha3 = new Date(2009, 5, 1);

// crea una fecha fija con hora, minutos y segundos exactos. resultado: 1 de junio de 2009 a las 19:29:39
let fecha4 = new Date(2009, 5, 1, 19, 29, 39);

let numero1 = 0;
let numero2 = 0;

// dividir 0 entre 0 genera un valor nan . muestra una alerta con "nan".
alert(numero1 / numero2);

// isnan() evalua si el resultado no es un numero valido. como entra en el if, muestra la alerta.
if (isNaN(numero1 / numero2)) {
  alert("la división no está definida para los números indicados");
} else {
  alert("la división es igual a => " + numero1 / numero2);
}

let numero3 = 10;
let numero4 = 0;
// dividir un numero positivo entre 0 da infinity . muestra una alerta con "infinity".
alert(numero3 / numero4);

let numerobase = 4564.34567;

// .tofixed(x) define cuantos digitos decimales queremos. redondea y devuelve un string:
numerobase.toFixed(2); 
// resultado: "4564.35"
numerobase.toFixed(6); 
// resultado: "4564.345670"
numerobase.toFixed(); 
// resultado: "4564"

// .toprecision(x) define la cantidad total de digitos significativos (enteros + decimales):
numerobase.toPrecision(2); 
// resultado: "4.6e+3"
numerobase.toPrecision(6); 
// resultado: "4564.35"
numerobase.toPrecision(); 
// resultado: "4564.34567"

let mensaje = "hola mundo";
// .length cuenta los caracteres totales del texto, incluyendo espacios. resultado: 10
let numeroletras = mensaje.length;

let mensaje1 = "hola";
// .concat() une un texto con otro. resultado: "hola mundo"
let mensaje2 = mensaje1.concat(" mundo");

let variable1 = "hola ";
let variable2 = 3;
// al sumar (+) texto con un numero, javascript junta ambos como texto. resultado: "hola 3"
let mensajecombinado = variable1 + variable2;

let mensajeoriginal = "hola";
// .touppercase() transforma el texto a mayusculas. resultado: "hola"
let mensajemayusculas = mensajeoriginal.toUpperCase();

let mensajeletras = "hola";
// .charat obtiene el caracter en ese indice .
let letra1 = mensajeletras.charAt(0); 
// resultado: "h"
let letra2 = mensajeletras.charAt(2); 
// resultado: "l"

let mensajebusqueda = "hola";
// .indexof() busca la primera posicion de un caracter. la 'a' esta en la posicion 3.
let posiciona = mensajebusqueda.indexOf("a"); 
// resultado: 3
// .lastindexof() busca la ultima posicion. si no existe el caracter, devuelve -1.
let posicionb = mensajebusqueda.lastIndexOf("b"); 
// resultado: -1

let mensajecorte = "hola mundo";
// .substring extrae un pedazo del texto.
let porcion1 = mensajecorte.substring(2); 
// resultado: "la mundo"
let porcion2 = mensajecorte.substring(-2); 
// resultado: "hola mundo" (el negativo se convierte en 0)
let porcion3 = mensajecorte.substring(1, 8); 
// resultado: "ola mun"

let mensajecompleto = "hola mundo, soy una cadena de texto!";
// .split(' ') divide el texto en una lista cada vez que encuentra un espacio.
let palabras = mensajecompleto.split(" ");



// Ambas variables apuntan exactamente al mismo objeto en memoria
console.log(config1 === config2); // true
