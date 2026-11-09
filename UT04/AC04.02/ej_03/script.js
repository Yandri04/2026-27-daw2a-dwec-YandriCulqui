const botonPagina1 = document.getElementById("enviar");

// --- LÓGICA PARA PAGINA 1 ---
if (botonPagina1) {
    botonPagina1.addEventListener("click", () => {
        // Guardamos el valor de las pesetas en localStorage para que la pag2 pueda leerlo
        const cPesetas = document.getElementById("cPesetas").value;
        localStorage.setItem("pesetasAConvertir", cPesetas);
        
        // Abrimos la segunda ventana
        window.open("pag2.html", "ventana");
    });
}

// --- LÓGICA PARA PAGINA 2 ---
// Si venimos de otra ventana (opener) y estamos en la página 2
if (window.opener && document.getElementById("cambio")) {
    // Recuperamos el valor guardado
    const cPesetas = localStorage.getItem("pesetasAConvertir");
    
    if (cPesetas) {
        // Corregido el tipo de cambio oficial: 166.386
        let euros = parseFloat(cPesetas) / 166.386; 
        
        // Mostramos el resultado con dos decimales
        document.getElementById("cambio").textContent = euros.toFixed(2) + " €";
    }
}
