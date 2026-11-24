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
  const exRegularValidar = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!valor) {
    error = "El correo es obligatorio";
    return false;
  }

  if (!exRegularValidar.test(valor)) {
    error = "El correo no tiene el formato correcto";
    return false;
  }

  error = "";
  return email.checkValidity();
}

function validarDni() {
  const valor = dni.value.trim();
  const xRegularValidar = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

  if (!valor) {
    error = "El dni es obligatorio";
    return false;
  } else if (!xRegularValidar.test(valor)) {
    error = "El dni no cumple con el formato";
    return false;
  }

  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const numero = Number(valor.slice(0, -1));
  const letraIntroducida = valor.slice(-1);
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
  return true;
}

function validarCodigoPostal() {
  const valor = cp.value.trim();
  const exRegularValidar = /^[0-9]{5}$/;

  if (!valor) {
    error = "EL CODIGO POSTAL ES OBLIGATORIO";
    return false;
  } else if (!exRegularValidar.test(valor)) {
    error = "El CODIGO POSTAL DEBE TENER 5 DIGITOS";
    return false;
  }
  error = "";
  return true;
}

function validarFecha() {
  const valor = fecha.value.trim();
  const exRegularValidar =
    /^([0-9]{4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/;

  if (!valor) {
    error = "LA FECHA ES OBLIGATORIA";
    return false;
  } else if (!exRegularValidar.test(valor)) {
    error = "LA FECHA ES INCORRECTA";
    return false;
  }

  const aValor = valor.split("-");
  let anio = parseInt(aValor[0]);
  let mes = parseInt(aValor[1]) - 1;
  let dia = parseInt(aValor[2]);

  const fechaObj = new Date(anio, mes, dia);

  if (
    fechaObj.getFullYear() !== anio ||
    fechaObj.getMonth() !== mes ||
    fechaObj.getDate() !== dia
  ) {
    error = "LA FECHA NO EXISTE EN EL CALENDARIO";
    return false;
  }

  error = "";
  return true;
}
function validarTyc() {
  if (!tyc.checked) {
    error = "Debes aceptar los Términos y Condiciones";
    return false;
  }
  error = "";
  return true;
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
