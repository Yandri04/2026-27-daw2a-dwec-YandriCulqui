function validar() {
  const checkboxes = document.querySelectorAll(".checkes");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      document.getElementById("formulario").action = "pag2.html";
    }
  }
  return true;
}
