window.onload = cogeDatos;

function cogeDatos() {
  if (window.opener) {
    let colorSeleccionado =
      window.opener.document.getElementById("colores").value;
    document.getElementById("resultado").value = colorSeleccionado;
  }
}
