let input = parseFloat( prompt("Intrudice un valor numerico"));

if (isNaN(input)) {
    alert("El dato ingresado no es numerico")
}else{
    alert("El dato ingresado es numerico")
}
if (isNaN(Number.POSITIVE_INFINITY)) {
    alert("Positivo infinito no es un numerico")
}else{
    alert("Positivo infinito es un numerico")
}
if (isFinite(Number.POSITIVE_INFINITY)) {
    alert("Positivo infinito  es un numerico")
}else{
    alert("Positivo infinito no es un numerico")
}


