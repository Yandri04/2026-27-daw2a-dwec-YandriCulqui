function enviarColorAlPrincipal() {
  let colorSeleccionado = document.getElementById("colores").value;
  window.opener.document.getElementById("resultado").value = colorSeleccionado;
}
