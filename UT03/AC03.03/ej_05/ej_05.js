class pais {
  // Se crea el constructor con los atributos
  constructor(
    nombre,
    capital,
    continente,
    codigo,
    zonaHoraria,
    extension,
    habitantes,
    rentas,
  ) {
    this.nombre = nombre;
    this.capital = capital;
    this.continente = continente;
    this.codigo = codigo;
    this.zonaHoraria = zonaHoraria;
    this.extension = extension;
    this.habitantes = habitantes;
    this.rentas = rentas;
  }
  // Se obtiene la fecha actual, se crean las opciones para la creación del filtro a devolver el formato horario en base a la zonaHoraria especificada como debe ser ingresada
  // La zona horaria se expresará como un valor: UTC+X UTC-X,
  obtenerHoraLocal() {
    let ahora = new Date();

    let opciones = {
      timeZone: this.zonaHoraria,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    // Retornando la hora local en base al filtro junto a su fecha
    return ahora.toLocaleTimeString("es-ES", opciones) + " " + ahora.getDate();
  }
  // Retorna la capital
  obtenerCapital() {
    return this.capital;
  }
  // Valida si ambos valores no están en cero, sino retorna el valor
  calcularDensidadPoblacion() {
    if (this.extension === 0 || this.habitantes === 0) {
      return 0;
    } else {
      return (this.habitantes / this.extension).toFixed(2);
    }
  }
  // Retorna el continente
  obtenerContinente() {
    return this.continente;
  }
  // Getter creados para acceder a los valores necesarios en la práctica, no se solicitan en la práctica, pero para ser más prácticos
  // y para que se me haga más práctico acceder se han agregado
  getNombre() {
    return this.nombre;
  }

  getCapital() {
    return this.capital;
  }

  getCodigo() {
    return this.codigo;
  }

  getZonaHoraria() {
    return this.zonaHoraria;
  }

  getExtension() {
    return this.extension;
  }

  getHabitantes() {
    return this.habitantes;
  }

  getRentas() {
    return this.rentas;
  }
}

class gestorPais {
  // Constructor que recibe un array como lista
  constructor(listaPaises) {
    this.listaPaises = listaPaises;
  }
  // Se verifica si lo que se ingresa es de tipo país, si no es lanzará un error, sino agregará el país a la lista
  agregarPais(paisA) {
    if (!(paisA instanceof pais)) {
      alert("Tiene que ser de tipo PAISSS");
    } else {
      this.listaPaises.push(paisA);
    }
  }
  // Se realizan las validaciones mediante el tipo de datos ingresado y el tamaño del mismo para saber que no está vacío, en caso contrario
  // debido a que solo recibimos el nombre del país mediante un this.listaPaises.find
  // buscamos por países individuales y realizamos una condicional para que en el caso de encontrar ese país nos devuelva el método correspondiente
  // si no, no devuelve nada

  A_obtenerHoraDePais(nombrePais) {
    if (typeof nombrePais !== "string" || nombrePais.trim().length === 0) {
      alert("El campo no puede estar vacío o no ser string");
    } else {
      return this.listaPaises
        .find((p) => p.getNombre() === nombrePais)
        .obtenerHoraLocal();
    }
  }
  // Se realizan las validaciones mediante el tipo de datos ingresado y el tamaño del mismo para saber que no está vacío, en caso contrario
  // se guarda el país que devuelva el método find y se devuelve mediante el método esperado
  B_obtenerCapitalDePais(nombrePais) {
    if (typeof nombrePais !== "string" || nombrePais.trim().length === 0) {
      alert("El campo no puede estar vacío o no ser string");
    } else {
      let paisEn = this.listaPaises.find((p) => p.getNombre() === nombrePais);
      return paisEn.obtenerCapital();
    }
  }
  // Se realiza una copia del array, ordena de manera asc en base al nombre
  // y con un foreach se muestran los valores por consola

  C_obtenerListaAlfabetica() {
    let aOrdenado = [...this.listaPaises].sort((a, b) =>
      a.getNombre().localeCompare(b.getNombre()),
    );

    aOrdenado.forEach((pais) => {
      console.log(pais);
    });
  }
  // Se realiza una copia del array, ordena de manera descendente en base al valor de su extensión
  // y con un foreach se muestran los valores por consola

  D_obtenerListaPorExtencionDesc() {
    let eDes = [...this.listaPaises].sort(
      (a, b) => b.getExtension() - a.getExtension(),
    );
    eDes.forEach((pais) => {
      console.log(pais);
    });
  }
  // Se realiza una copia del array, ordena de manera ascendente en base al valor de sus rentasPerCapitas
  // y con un foreach se muestran los valores por consola
  E_obtenerListaPorRentasAcs() {
    let rAsc = [...this.listaPaises].sort(
      (a, b) => a.getRentas() - b.getRentas(),
    );
    rAsc.forEach((pais) => {
      console.log(pais);
    });
  }
  // Se realizan las validaciones mediante el tipo de datos ingresado y el tamaño del mismo para saber que no está vacío, en caso contrario
  // se guarda el país que devuelva el método find y se devuelve mediante el método esperado
  F_obtenerDensidadDePais(nombrePais) {
    if (typeof nombrePais !== "string" || nombrePais.trim().length === 0) {
      alert("El campo no puede estar vacío o no ser string");
    } else {
      let paisEn = this.listaPaises.find((p) => p.getNombre() === nombrePais);
      return paisEn.calcularDensidadPoblacion();
    }
  }
  // Se realizan las validaciones mediante el tipo de datos ingresado y el tamaño del mismo para saber que no está vacío, en caso contrario
  // se guarda el país que devuelva el método find y se devuelve mediante el método esperado
  G_obtenerContinenteDePais(nombrePais) {
    if (typeof nombrePais !== "string" || nombrePais.trim().length === 0) {
      alert("El campo no puede estar vacío o no ser string");
    } else {
      let paisEn = this.listaPaises.find((p) => p.getNombre() === nombrePais);
      return paisEn.obtenerContinente();
    }
  }
  // Se realizan las validaciones mediante el tipo de datos ingresado y el tamaño del mismo para saber que no está vacío, en caso contrario
  // se almacenan los países coincidentes en continente recorriendo el array con un foreach en un array auxiliar que después mediante un foreach se lo muestra
  // por consola
  H_obtenerPaisesPorContinente(continente) {
    if (typeof continente !== "string" || continente.trim().length === 0) {
      alert("El campo no puede estar vacío o no ser string");
    } else {
      let aPorContinente = [];
      this.listaPaises.forEach((pais) => {
        if (pais.obtenerContinente() === continente) {
          aPorContinente.push(pais);
        }
      });
      aPorContinente.forEach((pais) => {
        console.log(pais);
      });
    }
  }
}

// ejemplo
// ARRAY CON DATOS DE LOS PAISES
const datosPaises = [
  new pais(
    "Emiratos Árabes",
    "Abu Dabi",
    "Asia",
    "UAE",
    "UTC+4",
    83600,
    9300000,
    43000,
  ),
  new pais(
    "Australia",
    "Canberra",
    "Oceanía",
    "AUS",
    "UTC+10",
    7692024,
    26000000,
    55000,
  ),
  new pais(
    "Argentina",
    "Buenos Aires",
    "América",
    "ARG",
    "UTC-3",
    2780400,
    46000000,
    10000,
  ),
  new pais(
    "Rusia",
    "Moscú",
    "Europa",
    "RUS",
    "UTC+3",
    17098246,
    144000000,
    12000,
  ),
  new pais(
    "Holanda",
    "Ámsterdam",
    "Europa",
    "NED",
    "UTC+1",
    41543,
    17800000,
    57000,
  ),
  new pais(
    "Grecia",
    "Atenas",
    "Europa",
    "GRE",
    "UTC+2",
    131957,
    10400000,
    20000,
  ),
  new pais(
    "Brasil",
    "Brasilia",
    "América",
    "BRA",
    "UTC-3",
    8515767,
    214000000,
    9000,
  ),
  new pais(
    "China",
    "Pekín",
    "Asia",
    "CHN",
    "UTC+8",
    9596961,
    1412000000,
    12500,
  ),
  new pais(
    "Egipto",
    "El Cairo",
    "África",
    "EGY",
    "UTC+2",
    1010408,
    110000000,
    3500,
  ),
  new pais(
    "Camerún",
    "Yaundé",
    "África",
    "CMR",
    "UTC+1",
    475442,
    27000000,
    1600,
  ),
  new pais("Japón", "Tokio", "Asia", "JPN", "UTC+9", 377975, 125000000, 34000),
  new pais(
    "Madagascar",
    "Antananarivo",
    "África",
    "MDG",
    "UTC+3",
    587041,
    29000000,
    500,
  ),
  new pais(
    "España",
    "Madrid",
    "Europa",
    "ESP",
    "UTC+1",
    505992,
    47400000,
    30000,
  ),
  new pais(
    "Turquía",
    "Ankara",
    "Europa",
    "TUR",
    "UTC+3",
    783562,
    85000000,
    10000,
  ),
];

const miGestor = new gestorPais(datosPaises);

//EJEMPLOS

//  Hora y fecha
console.log(miGestor.A_obtenerHoraDePais("Japón"));

//  Capital
console.log(miGestor.B_obtenerCapitalDePais("España"));

//  Lista alfabética
miGestor.C_obtenerListaAlfabetica();

//  Lista extensión (mayor a menor)
miGestor.D_obtenerListaPorExtencionDesc();

//  Lista renta (menor a mayor)
miGestor.E_obtenerListaPorRentasAcs();

// Densidad de población
console.log(miGestor.F_obtenerDensidadDePais("China"));

//  Continente
console.log(miGestor.G_obtenerContinenteDePais("Argentina"));

// Países por continente
miGestor.H_obtenerPaisesPorContinente("Europa");
