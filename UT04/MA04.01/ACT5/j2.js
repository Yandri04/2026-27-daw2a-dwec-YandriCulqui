window.onload = cogeDatos;

function cogeDatos() {
  let colorSeleccionado =
    window.opener.document.getElementById("colores").value;
  document.getElementById("resultado").value = colorSeleccionado;
}
