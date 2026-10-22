// Definición de la clase coche
class coche {
  // Recibe los datos y los asigna a variables internas
  constructor(unaMarca, unModelo, unColor) {
    this._marca = unaMarca;
    this._modelo = unModelo;
    this._color = unColor;
  }

  // Setters: para modificar los valores desde fuera
  set marca(otraMarca) {
    this._marca = otraMarca;
  }
  set modelo(otroModelo) {
    this._modelo = otroModelo;
  }
  set color(otroColor) {
    this._color = otroColor;
  }

  // Getters: para acceder a los valores desde fuera
  get marca() {
    return this._marca;
  }
  get modelo() {
    return this._modelo;
  }
  get color() {
    return this._color;
  }

  // Retorna un texto con toda la información del coche
  verComoEs() {
    let cadena =
      "Marca: " +
      this.marca +
      " " +
      "Modelo: " +
      this.modelo +
      " " +
      "Color: " +
      this.color;
    return cadena;
  }
}

// Array con instancias de la clase coche
const arrayCoches = [
  new coche("Volkswagen", "Golf", "Rojo"),
  new coche("Renault", "Megane", "Azul"),
  new coche("Volvo", "Super", "Azul"),
  new coche("BMW", "GT", "Rojo"),
];

// Bucle para recorrer el array e imprimir cada coche en consola
for (let i = 0; i < arrayCoches.length; i++) {
  console.log(arrayCoches[i].verComoEs());
}
