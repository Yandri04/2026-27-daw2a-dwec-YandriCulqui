let entrada = new Date(2012, 1, 30);
let salida = new Date(2012, 2, 1);
// se especifican si se ha pasado un dia apartir de un tiempo y otro  en este y como nno existe 30 de enero pasa al siguiente y se resta 1-mar - 1-mar
let noches = (salida.getTime() - entrada.getTime()) / 86400000;
alert(noches);
alert(entrada.toLocaleString());
alert(entrada);
// si es bsiesto lo divides entre 4 y si % es cero es bisiesto
