// 1. Definimos la función que crea las tarjetas (reutilizable)
function renderizarEjercicios(categoriaData, contenedorId) {
  const container = document.getElementById(contenedorId);

  // Si el contenedor no existe en el HTML actual, salimos de la función
  if (!container || !categoriaData) return;

  categoriaData.forEach(e => {
    // Crear el contenedor principal
    let card = document.createElement("div");
    card.classList.add("ejercicio", "grisClaro");

    // Crear la imagen
    let img = document.createElement("img");
    img.src = e.foto;
    img.classList.add("iconoImgC");
    img.alt = e.titulo;
    card.appendChild(img);

    // Crear el texto
    let span = document.createElement("span");
    span.classList.add("texto2");
    span.textContent = e.titulo;
    card.appendChild(span);

    // Inyectar al contenedor padre
    container.appendChild(card);
  });
}

// 2. Un solo Fetch para todos los datos
fetch("ejercicios.txt")
  .then(response => response.json())
  .then(data => {
    // Mapeamos: "Clave en JSON": "ID en HTML"
    const secciones = {
      "pechoSuperior": "pechSup",
      "pechoMedio": "pechmed",
      "pechoInferior": "pechInf",
      "dorsales": "dorsales",
      "espaldaMedia": "espMed",
      "espaldaAlta": "espAlt",
      "lumbar": "lumbar",
      "hombroFrontal": "hombrFront",
      "hombroLateral": "hombLat",
      "hombroPosterior": "hombPost",
      "bicepCorta": "bicepCorta",
      "braquial": "braquial",
      "tricepLarga": "tricepLarga",
      "tricepLateral": "tricepLat",
      "tricepMedial": "tricepMedial",
      "antebrazoFlexores": "antflex",
      "antebrazoExtensores": "antext",
      "agarre": "agarre",
      "abdomenSuperior": "abdsup",
      "oblicuos": "oblicuos",
      "coreProfundo": "corepro",
       "cuadriceps": "cuadri",
       "femorales": "femorales",
       "gluteoMayor": "gluteoMayor",
       "gluteoMedio": "gluteoMedio",
        "Abductores": "Abductores",
        "pantorrillaGastrocnemio": "pantogastro",
        "pantorrillaSoleo": "pantosoleo",
        "trapecioSuperior": "trapsup",
        "trapecioMedio": "trapmed",
        "cuello": "cuello"
    };

    // Ejecutamos la función para cada sección
    Object.keys(secciones).forEach(key => {
      renderizarEjercicios(data[key], secciones[key]);
    });
  })
  .catch(error => console.error("Error al cargar los datos:", error));





/*rutina completa*/

fetch("ejercicios.txt")
  .then(response => response.json())
  .then(data => {
    let body = document.getElementById("rutcompl");

    // Recorremos cada categoría del JSON (pechoSuperior, triceps, espalda, etc.)
    for (let categoria in data) {
      const listaEjercicios = data[categoria];

      // Verificamos que la categoría tenga elementos
      if (listaEjercicios.length > 0) {

        // Elegimos un elemento al azar de este "corchete" específico
        const indiceAleatorio = Math.floor(Math.random() * listaEjercicios.length);
        const e = listaEjercicios[indiceAleatorio];

        // --- TU ESTRUCTURA DE INSERCIÓN ---
        let card = document.createElement("div");
        card.classList.add("ejercicio", "grisClaro");

        // 2. Crear la imagen
        let img = document.createElement("img");
        img.src = e.foto;
        img.classList.add("iconoImgC");
        img.alt = "";
        card.appendChild(img);

        // 3. Crear el texto
        let span = document.createElement("span");
        span.classList.add("texto2");
        span.textContent = e.titulo;
        card.appendChild(span);

        // 4. Inyectar al contenedor padre
        body.appendChild(card);
      }
    }
  })
  .catch(error => console.error("Error al cargar los datos:", error));

