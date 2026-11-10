const boton = document.getElementById("enviar");

boton.addEventListener("click", () => {
  let pesetas = document.getElementById("pesetas").value;

  if (pesetas.trim() === "") {
    alert("El campo no puede estar vacío");
    return;
  }

  pesetas = parseFloat(pesetas);

  if (!isNaN(pesetas)) {
    const euro = pesetas / 166.286;

    const nuevaVentana = window.open(
      "pag2.html",
      "ventana",
      "width=400,height=300,popup=yes,resizable=no",
    );

    nuevaVentana.addEventListener("load", () => {
      nuevaVentana.document.getElementById("cambio").textContent =
        euro.toFixed(2) + " €";
    });

    console.log("REDIRIGIDO Y ENVIADO A PAG2");
  } else {
    alert("NO ES UN NUMEROOOOO");
  }
});
