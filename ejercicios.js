fetch("ejercicios.txt")
  .then(response => response.json())
  .then(data => {
    let body = document.getElementById("pechSup");
    
    // Accedemos a la categoría específica del archivo ejercicios.txt
    const categoriaSeleccionada = data.pechoSuperior; 

    categoriaSeleccionada.forEach(e => {
      // 1. Crear el contenedor principal <div class="ejercicio grisClaro">
      let card = document.createElement("div");
      card.classList.add("ejercicio", "grisClaro");

      // 2. Crear la imagen <img class="iconoImgC" src="...">
      let img = document.createElement("img");
      img.src = e.foto;
      img.classList.add("iconoImgC"); // Cambiado de iconoImgG a iconoImgC
      img.alt = ""; 
      card.appendChild(img);

      // 3. Crear el texto <span class="texto2">
      let span = document.createElement("span");
      span.classList.add("texto2"); // Cambiado de texto3 a texto2
      span.textContent = e.titulo;
      card.appendChild(span);

      // 4. Inyectar al contenedor padre
      body.appendChild(card);
    });
  })
  .catch(error => console.error("Error al cargar los datos:", error));









  fetch("ejercicios.txt")
  .then(response => response.json())
  .then(data => {
    let body = document.getElementById("bicepLarga");
    
    // Accedemos a la categoría específica del archivo ejercicios.txt
    const categoriaSeleccionada = data.bicepLarga; 

    categoriaSeleccionada.forEach(e => {
      // 1. Crear el contenedor principal <div class="ejercicio grisClaro">
      let card = document.createElement("div");
      card.classList.add("ejercicio", "grisClaro");

      // 2. Crear la imagen <img class="iconoImgC" src="...">
      let img = document.createElement("img");
      img.src = e.foto;
      img.classList.add("iconoImgC"); // Cambiado de iconoImgG a iconoImgC
      img.alt = ""; 
      card.appendChild(img);

      // 3. Crear el texto <span class="texto2">
      let span = document.createElement("span");
      span.classList.add("texto2"); // Cambiado de texto3 a texto2
      span.textContent = e.titulo;
      card.appendChild(span);

      // 4. Inyectar al contenedor padre
      body.appendChild(card);
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

