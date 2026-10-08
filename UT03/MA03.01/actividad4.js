let input = prompt("Introduce un valr :");
if(isFinite(input)){
    let inputParsed = parseInt(input);
    alert("parseInt(" + input+ "): " + inputParsed);
}else{
    alert("Error, no ha introducido un dato numerico");
}