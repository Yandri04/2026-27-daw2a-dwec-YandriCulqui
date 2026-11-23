const email = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const dni = document.getElementById("dni");
const cp = document.getElementById("cp");
const fecha = document.getElementById("fecha");
const tyc = document.getElementById("terminoYCondiciones");
const valores = [email, telefono, dni, cp, fecha];

function validarCampo(input, idMensaje, textoError) {
  const contenedorError = document.getElementById(idMensaje);
  if (input.checkValidity()) {
    input.classList.remove("invalido");
    input.classList.add("valido");
    contenedorError.textContent = "";
  } else {
    input.classList.remove("valido");
    input.classList.add("invalido");
    contenedorError.textContent = textoError;
  }
}

