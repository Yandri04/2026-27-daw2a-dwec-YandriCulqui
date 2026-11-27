const cuentaIban = document.getElementById("iban");
const cif = document.getElementById("cif");
const txtTranferencia = document.getElementById("transferencia");
const txtDescripción = document.getElementById("descripción");
const btnEnviar = document.getElementById("enviar");
const form = document.getElementById("miFormulario");
let error = "";
function validarIban() {
  let valor = cuentaIban.value.trim();
  let regex = /^ES\d{2}(?: \d{4}){5}$/;
  if (!valor) {
    error = "Se requiere ingresar un iban";
    return false;
  } else if (!regex.test(valor)) {
    error = "Formato de IBAN incorrecto";
    return false;
  }
  return true;
}
function validarCif() {
  let valor = cif.value.trim();
  let regex = /^[ABCDEFGHJNPQRSUVW]{1}\d{8}$/;
  if (!valor) {
    error = "El CIF NO PUEDE ESTAR VACIO";
    return false;
  } else if (!regex.test(valor)) {
    error = "El CIF  NO CUMPLE CON EL FORMATO";
    return false;
  }
  const letras = "ABCDEFGHJNPQRSUVW";
  let sumaPares;
  let sumaImpares;
  let total;
  let letraObtenida = valor.substring(0);
  let nProvincialObtenido = valor.substring(1, 3);
  let nComprobar = valor.substring(1, 8);
  let numeroControl = valor.substring(8);

  const codigosProvinciales = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
  ];
  codigosProvinciales.forEach((e) => {
    if (e === nProvincialObtenido) {
      const caracteresControl = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
      ];
      let comparador = nComprobar.split("").map(Number);

      for (let index = 0; index < comparador.length; index++) {
        if (index % 2 === 0) {
          sumaPares += comparador[index];
        } else {
          sumaImpares += comparador[index];
        }
      }
      total = sumaPares + sumaImpares;
      let nControl = 10 - (total % 10);
      caracteresControl.forEach((element) => {
        if (element === nControl) {
          return true;
        }
      });
    } else {
      return false;
    }
  });

  // Dígito de control: Se toma la última cifra de C (unidades) y
  // se resta de 10 (10 - (C % 10)). Si la última cifra de C es 0,
  // el dígito de control es 0.
}
function validarTranferencia() {}
function validarDescripción() {}

function mostrarError(idMensaje, esValido) {
  const contenedorError = document.getElementById(idMensaje);

  if (esValido) {
    contenedorError.textContent = "";
  } else {
    contenedorError.textContent = error;
  }

  return esValido;
}

form.addEventListener("submit", (event) => {
  const cuentaIbanOk = mostrarError("error-iban", validarIban());
  const cifOk = mostrarError("error-cif", validarCif());
  const txtTranferenciaOk = mostrarError(
    "error-transferencia",
    validarTranferencia(),
  );
  const txtDescripciónOk = mostrarError(
    "error-descripción",
    validarDescripción(),
  );

  const resultado = document.getElementById("resultado");

  if (!cuentaIbanOk || !cifOk || !txtTranferenciaOk) {
    event.preventDefault();
    resultado.textContent = "ERROR EN ALGUN CAMPO DEL FORMULARIO";
  } else {
    event.preventDefault();
    resultado.textContent = "FORMULARO ENVIADO CON EXITO";
  }
});
