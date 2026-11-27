let formulario = document.getElementById("form_cv");

let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let fecha = document.getElementById("fecha");
let telefono = document.getElementById("telefono");
let cv = document.getElementById("cv");
let titulacion = document.getElementById("titulacion");
let clave = document.getElementById("clave");
let terminos = document.getElementById("terminos");
let envio = document.getElementById("envio");

function validarFecha() {
  let valor = fecha.value;

  let patronFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/;

  if (valor == "") {
    return false;
  } else if (patronFecha.test(valor)) {
    return true;
  } else {
    return fecha.checkValidity();
  }
}

function validarTelefono() {
  let valor = telefono.value;

  let patronTelefono = /^[96][0-9]{8}$/;

  if (valor == "") {
    return false;
  } else if (patronTelefono.test(valor)) {
    return true;
  } else {
    return telefono.checkValidity();
  }
}

function validarClave() {
  let valor = clave.value;

  let patronClave = /^[0-9][a-zA-Z]{3}[^a-zA-Z0-9][0-9]$/;

  if (valor == "") {
    return false;
  } else if (patronClave.test(valor)) {
    return true;
  } else {
    return clave.checkValidity();
  }
}

function camposRellenos() {
  if (
    nombre.value.trim() == "" ||
    apellidos.value.trim() == "" ||
    fecha.value.trim() == "" ||
    telefono.value.trim() == "" ||
    cv.value == "" ||
    titulacion.value == "" ||
    clave.value.trim() == ""
  ) {
    return false;
  } else {
    return true;
  }
}

function activarEnvioYTerminosFormulario() {
  if (comprobarCampos()) {
    terminos.disabled = false;

    if (terminos.checked) {
      envio.disabled = false;
    } else {
      envio.disabled = true;
    }
  } else {
    terminos.disabled = true;
    terminos.checked = false;
    envio.disabled = true;
  }
}
