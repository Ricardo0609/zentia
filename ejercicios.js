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






