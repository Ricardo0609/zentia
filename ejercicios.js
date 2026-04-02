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

















const rutinaSemana = {
    lunes: {
        btn: "lunbtn",
        categorias: ["pechoSuperior", "pechoMedio", "pechoInferior", "tricepLarga", "tricepLateral", "tricepMedial", "hombroFrontal", "hombroLateral", "hombroPosterior"]
    },
    martes: {
        btn: "martbtn",
        categorias: ["dorsales", "espaldaMedia", "espaldaAlta", "lumbar", "bicepCorta", "braquial", "antebrazoFlexores", "antebrazoExtensores", "agarre"]
    },
    miercoles: {
        btn: "miertbtn",
        categorias: ["hombroFrontal", "hombroLateral", "hombroPosterior", "cuadriceps", "femorales", "gluteoMayor", "gluteoMedio", "Abductores", "pantorrillaGastrocnemio", "pantorrillaSoleo"]
    },
    jueves: {
        btn: "juetbtn",
        categorias: ["pechoSuperior", "pechoMedio", "pechoInferior", "tricepLarga", "tricepLateral", "tricepMedial", "bicepCorta", "braquial", "antebrazoFlexores", "antebrazoExtensores", "agarre"]
    },
    viernes: {
        btn: "viertbtn",
        categorias: ["dorsales", "espaldaMedia", "espaldaAlta", "lumbar", "cuadriceps", "femorales", "gluteoMayor", "gluteoMedio", "Abductores", "pantorrillaGastrocnemio", "pantorrillaSoleo"]
    }
};

async function cargarRutina() {
    try {
        const response = await fetch('ejercicios.txt');
        const data = await response.json();

        Object.keys(rutinaSemana).forEach(dia => {
            const infoDia = rutinaSemana[dia];
            const container = document.getElementById(dia);

            if (!container) {
                console.warn(`Ojo: No se encontró el contenedor con ID: "${dia}" en el HTML.`);
                return; 
            }

            infoDia.categorias.forEach(categoria => {
                const listaEjercicios = data[categoria];
                
                if (listaEjercicios && listaEjercicios.length > 0) {
                    // --- LÓGICA ALEATORIA ---
                    // Generamos un índice al azar entre 0 y el total de ejercicios en esa categoría
                    const indiceAleatorio = Math.floor(Math.random() * listaEjercicios.length);
                    const e = listaEjercicios[indiceAleatorio];
                    
                    crearCard(e, container);
                }
            });
            
            const btn = document.getElementById(infoDia.btn);
            if (btn) {
                btn.onclick = () => container.classList.toggle('oculto');
            } else {
                console.warn(`Ojo: No se encontró el botón con ID: "${infoDia.btn}"`);
            }
        });

    } catch (error) {
        console.error("Error al cargar el archivo:", error);
    }
}

function crearCard(ejercicio, padre) {
    if (!padre) return;

    let card = document.createElement("div");
    card.classList.add("ejercicio", "grisClaro");

    let img = document.createElement("img");
    img.src = ejercicio.foto;
    img.classList.add("iconoImgC");
    img.alt = ejercicio.titulo;

    let span = document.createElement("span");
    span.classList.add("texto2");
    span.textContent = ejercicio.titulo;

    card.appendChild(img);
    card.appendChild(span);
    padre.appendChild(card);
}

cargarRutina();
