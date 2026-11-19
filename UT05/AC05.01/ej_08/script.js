const ciudades = {
  África: [
    "El Cairo",
    "Lagos",
    "Johannesburgo",
    "Nairobi",
    "Casablanca",
    "Dakar",
    "Ceuta",
    "Melilla",
  ],
  América: [
    "Ciudad de México",
    "Nueva York",
    "São Paulo",
    "Buenos Aires",
    "Toronto",
    "Bogotá",
    "Lima",
    "Caracas",
    "La Habana",
    "Los Ángeles",
  ],
  Asia: [
    "Tokio",
    "Pekín",
    "Nueva Delhi",
    "Seúl",
    "Singapur",
    "Dubái",
    "Bangkok",
    "Kabul",
    "Hong Kong",
    "Yakarta",
  ],
  Europa: [
    "Madrid",
    "París",
    "Londres",
    "Berlín",
    "Roma",
    "Moscú",
    "Ámsterdam",
    "Lisboa",
    "Atenas",
    "Viena",
  ],
  Oceanía: [
    "Sídney",
    "Melbourne",
    "Canberra",
    "Auckland",
    "Wellington",
    "Brisbane",
    "Suva",
  ],
};

const resultado = document.getElementById("resultado");

const continente = document.getElementById("conts");
const selectCiudades = document.getElementById("cities");

function crearCiudades() {
  selectCiudades.innerHTML = "";

  const listaCiudades = ciudades[continente.value];

  listaCiudades.forEach((ciudad) => {
    const opcion = new Option(ciudad, ciudad);
    selectCiudades.add(opcion);
  });

  resultado.textContent = `${listaCiudades.length} ciudades disponibles para ${continente.value}`;
}
crearCiudades();
continente.addEventListener("change", crearCiudades);
