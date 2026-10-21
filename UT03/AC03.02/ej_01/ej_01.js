let a = [];
let palabra = prompt("Ingrese 5 palabras");
palabra = palabra.trim();
while (true) {
  if (!isNaN(palabra) || palabra === null || palabra.trim() === "") {
    alert("ERROR AL INGRESAR UNA PALABRA INTENTELO NUEVAMENTE ");
    break;
  }
  a.push(palabra);
  palabra = prompt(`Ingrese la palabra ${a.length}`);
  if (a.length === 5) {
    console.log(`${a.length + 1} palabras agregadas con exito al array`);
    break;
  }
}
a.sort();
let liPalabras = "";
for (let index = 0; index < a.length; index++) {
  liPalabras += index + 1 + ": " + a[index] + "\n";
}
alert(
  `Primera palabra ingresada: ${a[0]}\nUltima palabra ingresada: ${a[a.length - 1]}\nNº palabras en el array: ${a.length}\nListado palabras: \n${liPalabras}`,
);
// si
