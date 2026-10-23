// Clase base que define las características generales de cualquier vehículo
class vehiculo {
  // Inicializa las propiedades comunes del vehículo al crear una instancia
  constructor(
    unaMarca,
    unModelo,
    unColor,
    unaMatricula,
    unaFechaMatriculacion,
  ) {
    this.unaMarca = unaMarca;
    this.unModelo = unModelo;
    this.unColor = unColor;
    this.unaMatricula = unaMatricula;
    this.unaFechaMatriculacion = unaFechaMatriculacion; // Objeto de tipo Date
  }

  // Calcula la antigüedad restando únicamente el año actual menos el año de matriculación
  calcularAntiguedad() {
    let fActual = new Date();
    let anioActual = fActual.getFullYear();
    let anioMatriculacion = this.unaFechaMatriculacion.getFullYear();
    return anioActual - anioMatriculacion;
  }

  // Muestra por consola una cadena de texto con todas las propiedades del vehículo
  verComoEs() {
    let cadena =
      "Marca: " +
      this.unaMarca +
      " " +
      "Modelo: " +
      this.unModelo +
      " " +
      "color: " +
      this.unColor +
      " " +
      "matricula: " +
      this.unaMatricula +
      " " +
      "fechaMatriculacion: " +
      this.unaFechaMatriculacion.toLocaleDateString(); // Formato legible de fecha
    console.log(cadena);
  }
}

// Clase  de turismos que hereda de la clase vehiculo
class turismo extends vehiculo {
  // Recibe los datos base para el padre y añade combustible y potencia
  constructor(
    unaMarca,
    unModelo,
    unColor,
    unaMatricula,
    unaFechaMatriculacion,
    unCombustible,
    unaPotencia,
  ) {
    super(unaMarca, unModelo, unColor, unaMatricula, unaFechaMatriculacion); // Llama al constructor padre
    this.unCombustible = unCombustible;
    this.unaPotencia = unaPotencia;
  }

  // Extiende el método original para mostrar también los datos propios del turismo
  verComoEs() {
    super.verComoEs(); // Ejecuta el verComoEs de la clase vehiculo
    console.log(
      "Combustible: " + this.unCombustible + " Potencia: " + this.unaPotencia,
    );
  }
}

// Clase de camiones que hereda de la clase vehiculo
class camion extends vehiculo {
  // Recibe los datos base para el padre y añade los pesos numéricos
  constructor(
    unaMarca,
    unModelo,
    unColor,
    unaMatricula,
    unaFechaMatriculacion,
    unPesoVacio,
    unPesoMaximoAutorizado,
  ) {
    super(unaMarca, unModelo, unColor, unaMatricula, unaFechaMatriculacion); // Llama al constructor padre
    this.unPesoVacio = unPesoVacio;
    this.unPesoMaximoAutorizado = unPesoMaximoAutorizado;
  }

  // Calcula los KG de carga permitidos restando el peso vacío al peso máximo
  calcularCargaMaxima() {
    return this.unPesoMaximoAutorizado - this.unPesoVacio;
  }

  // Extiende el método original para mostrar también los datos de peso del camión
  verComoEs() {
    super.verComoEs(); // Ejecuta el verComoEs de la clase vehiculo
    console.log(
      "Peso Vacío: " +
        this.unPesoVacio +
        " kg PVACIO: " +
        this.unPesoMaximoAutorizado +
        " kg",
    );
  }
}

// Creación de una instancia de la clase base vehiculo y ejecución de sus métodos
const v1 = new vehiculo(
  "Toyota",
  "Yaris",
  "Rojo",
  "9876-AAA",
  new Date("2024-01-10"),
);
v1.verComoEs();
console.log(v1.calcularAntiguedad());

// Creación de una instancia de turismo, ejecución de métodos heredados
const t1 = new turismo(
  "Seat",
  "Ibiza",
  "Blanco",
  "1234-BBB",
  new Date("2021-03-15"),
  "gasolina",
  "90CV",
);
t1.verComoEs();
console.log(t1.calcularAntiguedad());

// Creación de una instancia de camion y ejecución de todos sus métodos propios y heredados
const c1 = new camion(
  "Volvo",
  "FH",
  "Azul",
  "5678-CCC",
  new Date("2018-06-20"),
  3500,
  7500,
);
c1.verComoEs();
console.log(c1.calcularAntiguedad());
console.log(c1.calcularCargaMaxima());
