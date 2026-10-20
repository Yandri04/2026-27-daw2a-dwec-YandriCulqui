// Se solicitan al usario la base y altura para el calcul del area, casteandola a float
let base = parseFloat(prompt("Introduce la base del del triangulo"));
let altura = parseFloat(prompt("Introduce la altura del del triangulo"));
//Se realizan las validaciones correspoidnete en base a los valores ingresados si son true saltara error si no pasasra al else
if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
  alert("Altura o base incorrecta porfavor volver a ingresar");
} else {
  // se calcula el area (base * altura) / 2
  let area = (base * altura) / 2;
  // se muestra mediante un alert el calculo de area
  alert(
    "La area de un triangulo con una base de " +
      base +
      " y altura de " +
      altura +
      " es : " +
      area,
  );
}
