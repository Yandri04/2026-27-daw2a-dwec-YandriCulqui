// Se define el array original con 4 elementos
let myFish = ["angel", "clown", "mandarin", "surgeon"];
alert("myFish: " + myFish);

// Se inserta "drum" en la posición 2 sin eliminar ningún elemento (0)
let removed = myFish.splice(2, 0, "drum");
alert("After adding 1: " + myFish);
// Como no se eliminó nada, la variable 'removed' queda vacía
alert("removed is: " + removed);

// Se elimina 1 elemento a partir de la posición 3
removed = myFish.splice(3, 1);
alert("After removing 1: " + myFish);
// Muestra el elemento que fue eliminado del array
alert("removed is: " + removed);

// En la posición 2, se elimina 1 elemento y se añade "trumpet" en su lugar
removed = myFish.splice(2, 1, "trumpet");
alert("After replacing 1: " + myFish);
// Guarda e imprime el elemento que fue reemplazado
alert("removed is: " + removed);

// Desde la posición 0, se borran 2 elementos y se insertan 3 nuevos de golpe
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
alert("After replacing 2: " + myFish);
// Muestra la lista de los 2 elementos que se quitaron al principio
alert("removed is: " + removed);
