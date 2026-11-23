const email = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const dni = document.getElementById("dni");
const cp = document.getElementById("cp");
const fecha = document.getElementById("fecha");
const tyc = document.getElementById("terminoYCondiciones");
const valores = [email, telefono, dni, cp, fecha];
function validarEmail(email) {}
function validarTelefono(tlf) {}
function validarDni(dni) {}
function validarCodigoPostal(cp) {}
function validarFecha(fecha) {}
function validarTerminosYcondiciones(tyc) {}

document.addEventListener("load", (event) => {
  valores.forEach((e) => {
    if (e.value.trim() == "") {
      tyc.checked = true;
    } else {
      tyc.checked = false;
    }
  });
});
