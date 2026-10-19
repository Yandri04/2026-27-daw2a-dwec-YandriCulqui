let palabra = prompt("Ingrese una palabra para saber si es palindromo");

palabra = palabra.trim();

if (palabra === null || !isNaN(palabra)) {
  alert("ERROR EN LA PALABRA , VACIO , NULL O NUMERO");
}

let palabraAlReves = palabra.split("").reverse().join("");

alert(
  `TU PALABRA ${palabra === palabraAlReves ? "Sí" : "No"}  ES PALINDROMO \n PALABRA INGRESADA =   ${palabra}\n PALABRA INGRESADA ALREVES =  ${palabraAlReves}\n`,
);
