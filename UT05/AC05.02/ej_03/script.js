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
  let valor = cif.value.trim().toUpperCase();
  let regex = /^[ABCDEFGHJNPQRSUVW]\d{8}$/;

  if (!valor) {
    error = "El CIF NO PUEDE ESTAR VACÍO";
    return false;
  }
  if (!regex.test(valor)) {
    error = "El CIF NO CUMPLE CON EL FORMATO";
    return false;
  }

  let provincia = Number(valor.substring(1, 3));
  if (provincia < 1 || provincia > 52) {
    error = "CÓDIGO PROVINCIAL INCORRECTO";
    return false;
  }

  let numeros = valor.substring(1, 8);
  let controlRecibido = Number(valor[8]);
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    let n = Number(numeros[i]);

    if (i % 2 === 0) {
      n = n * 2;
      if (n > 9) n = n - 9;
    }

    suma += n;
  }

  let controlCalculado = (10 - (suma % 10)) % 1;
  if (controlRecibido === controlCalculado) {
    return cif.checkValidity();
  } else {
    error = "EL DÍGITO DE CONTROL NO COINCIDE";
    return false;
  }
}

function validarDestionarioTransferencia() {
  let valor = txtTranferencia.value.trim();
  let regex = /^@/;

  if (!valor) {
    error = "EL DESTINATARIO NO PUEDE ESTAR VACÍO";
    return false;
  } else if (!regex.test(valor)) {
    error = "El destinatario debe empezar por @";
    return false;
  } else if (valor.length < 6) {
    error = "El destinatario debe tener al menos 6 caracteres";
    return false;
  }

  return txtTranferencia.checkValidity();
}

function validarDescripción() {
  let valor = txtDescripción.value.trim();
  if (!valor) {
    error = "El DESTIONATARIO NO PUEDE ESTAR VACÍO";
    return false;
  }
  return txtDescripción.checkValidity();
}

function comprobarCamposRellenos() {
  let esValido = validarDestionarioTransferencia();
  const lblDescripción = document.getElementById("label-descripción");
  txtDescripción.hidden = !esValido;
  lblDescripción.hidden = !esValido;

  if (!esValido) {
    document.getElementById("error-descripción").textContent = "";
  }
}

txtTranferencia.addEventListener("input", comprobarCamposRellenos);

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
  event.preventDefault();
  const cuentaIbanOk = mostrarError("error-iban", validarIban());
  const cifOk = mostrarError("error-cif", validarCif());
  const txtTranferenciaOk = mostrarError(
    "error-transferencia",
    validarDestionarioTransferencia(),
  );
  const txtDescripciónOk = mostrarError(
    "error-descripción",
    validarDescripción(),
  );

  const resultado = document.getElementById("resultado");

  if (!cuentaIbanOk || !cifOk || !txtTranferenciaOk || !txtDescripciónOk) {
    resultado.textContent = "ERROR EN ALGUN CAMPO DEL FORMULARIO";
  } else {
    resultado.textContent = "FORMULARO ENVIADO CON EXITO";
  }
});
