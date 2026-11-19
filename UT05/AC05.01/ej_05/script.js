const boton = document.getElementById("enviar");
const resultado = document.getElementById("resultado");

const btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  const labels = document.querySelectorAll(".lbs");
  const checkboxes = document.querySelectorAll(".checkes");
  const seleccionados = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      seleccionados.push(labels[i].textContent);
    }
  }

  resultado.textContent = seleccionados.join(", ");
});
