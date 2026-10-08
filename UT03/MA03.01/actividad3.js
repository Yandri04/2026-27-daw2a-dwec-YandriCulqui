let input = prompt("Introduce un valor: ");
let inputParsed = 0;
if (isFinite(input)) {
    inputParsed = parseInt(input);
    alert("parseInt(" + input + ") : " + inputParsed)
}else{
        alert("Error dato no es numero")

}