let num1 = 1;
let num2 = "1";

let sonIgualEnValor = num1 == num2;
let sonIgualEnValorYTipo = num1 === num2;

let sonDistintosEnValor = num1 != num2;
let sonDistintosEnValorYTipo = num1 !== num2;


console.log(sonIgualEnValor);
// nos sacara true, porque js solamente valora que son identicos en valor, pero no tiene en cuenta si son mismo tipo de datos siendo una comparacion debil
console.log(sonIgualEnValorYTipo);
// A diferencia del canso anterior, el "===" compara tanto valor como tipo de datos y al comparar un number con un string el resultado de este mismo sera false
console.log(sonDistintosEnValor);
// la diferencia aqui es que se esta preguntado, es num1 diferente de num2, en este caso falso, debido a que la comparacion hecha es en vase a un distintos debil, el cual solo compara el valor
console.log(sonDistintosEnValorYTipo);
// Y aqui es donde nos aparecerea true debido a que si son disintos debido a que su tipo es diferentes.