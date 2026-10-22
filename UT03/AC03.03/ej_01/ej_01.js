class productoAlimenticio {
  // se setean las propiedades
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  // metodos  para mostrar los dats
  imprimeDatos() {
    alert(
      `Codigo: ${this.codigo}\nNombre: ${this.nombre}\nPrecio: ${this.precio}`,
    );
  }
}
// se crean las tres instancias de clase
let p1 = new productoAlimenticio(1, "Donino", 12);
let p2 = new productoAlimenticio(2, "Patata", 15);
let p3 = new productoAlimenticio(3, "Doritos", 20);
// se crea un array y se las guarda ahi
let a1 = [p1, p2, p3];
// por consola mostramos el array y con imrime datos mostramos la informacion mediante un alert;
console.log(a1);
for (const ps of a1) {
  ps.imprimeDatos();
}
