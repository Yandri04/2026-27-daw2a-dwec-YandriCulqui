const labels = document.querySelectorAll(".lbs");
const checkboxes = document.querySelectorAll(".checkes");
const checkboxesSistemas = document.querySelectorAll(".sistemas");
const btnEnviar = document.getElementById("enviar");
const resultado = document.getElementById("resultado");

function actualizarSistemas() {
  const seleccionados = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      seleccionados.push(labels[i].textContent.toLowerCase());
    }
  }

  checkboxesSistemas.forEach((sis) => {
    const so = sis.value.toLowerCase();
    let tieneProducto = false;
    seleccionados.forEach((texto) => {
      if (texto.includes(so)) {
        tieneProducto = true;
      }
    });

    sis.checked = tieneProducto;
  });
}

checkboxes.forEach((check) => {
  check.addEventListener("change", actualizarSistemas);
});

btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  const seleccionados = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      seleccionados.push(labels[i].textContent);
    }
  }
  resultado.textContent = seleccionados.join(", ");
});
