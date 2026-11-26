const email = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const dni = document.getElementById("dni");
const cp = document.getElementById("cp");
const fecha = document.getElementById("fecha");
const tyc = document.getElementById("terminoYCondiciones");
const form = document.getElementById("miFormulario");
const valores = [email, telefono, dni, cp, fecha];
let error = "";

function validarEmail() {
  const valor = email.value.trim();

  if (!valor) {
    error = "El correo es obligatorio";
    return false;
  } else if (!email.checkValidity()) {
    error = "El formato del correo no es válido";
    return false;
  }

  error = "";
  return email.checkValidity();
}

function validarDni() {
  let valor = dni.value.trim();
  const xRegularValidar = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

  if (!valor) {
    error = "El dni es obligatorio";
    return false;
  } else if (!xRegularValidar.test(valor)) {
    error = "El dni no cumple con el formato";
    return false;
  }

  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const numero = Number(valor.substring(0, 8));
  const letraIntroducida = valor.substring(8);
  const letraCorrecta = letras[numero % 23];

  if (letraIntroducida !== letraCorrecta) {
    error = "La letra del DNI no es correcta";
    return false;
  }

  error = "";
  return true;
}

function validarTelefono() {
  const valor = telefono.value.trim();
  const exRegularValidar = /^[69][0-9]{8}$/;
  if (!valor) {
    error = "EL TELEFONO ES OBLIGATORIO";
    return false;
  } else if (!exRegularValidar.test(valor)) {
    error = "El teléfono debe de tener 9 dígitos y comenzar por 6 ó 9";
    return false;
  }
  error = "";
  return telefono.checkValidity();
}

function validarCodigoPostal() {
  const valor = cp.value.trim();
  const exRegularValidar = /^[0-9]{5}$/;
  if (!valor) {
    error = "EL codigo postal ES OBLIGATORIO";
    return false;
  } else if (!exRegularValidar.test(valor)) {
    error = "El codigo postal tiene que se de 5 numeros";
    return false;
  }
  error = "";
  return cp.checkValidity();
}

function validarFecha() {
  if (!fecha.checkValidity()) {
    error = "La fecha es obligatoria o no es válida";
    return false;
  }
  error = "";
  return fecha.checkValidity();
}

function validarTyc() {
  if (!tyc.checked) {
    error = "Debes aceptar los Términos y Condiciones";
    return false;
  }

  error = "";
  return tyc.checkValidity();
}

function comprobarCamposRellenos() {
  let todosRellenos = true;

  valores.forEach((campo) => {
    if (campo.value.trim() === "") {
      todosRellenos = false;
    }
  });

  if (todosRellenos) {
    tyc.disabled = false;
  } else {
    tyc.disabled = true;
    tyc.checked = false;
  }
}

function mostrarError(idMensaje, esValido) {
  const contenedorError = document.getElementById(idMensaje);

  if (esValido) {
    contenedorError.textContent = "";
  } else {
    contenedorError.textContent = error;
  }

  return esValido;
}


valores.forEach((campo) => {
  campo.addEventListener("input", comprobarCamposRellenos);
});

form.addEventListener("submit", (event) => {
  const emailOk = mostrarError("error-email", validarEmail());
  const telefonoOk = mostrarError("error-tlf", validarTelefono());
  const dniOk = mostrarError("error-dni", validarDni());
  const cpOk = mostrarError("error-cp", validarCodigoPostal());
  const fechaOk = mostrarError("error-fecha", validarFecha());
  const tycOk = mostrarError("error-tyc", validarTyc());
  const resultado = document.getElementById("resultado");

  if (!emailOk || !telefonoOk || !dniOk || !cpOk || !fechaOk || !tycOk) {
    event.preventDefault();
    resultado.textContent = "ERROR EN ALGUN CAMPO DEL FORMULARIO";
  } else {
    event.preventDefault();
    resultado.textContent = "FORMULARO ENVIADO CON EXITO";
  }
});
