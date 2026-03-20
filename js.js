/*function redirectByDevice() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const screenWidth = window.innerWidth;

  // Si es computadora o laptop (Pantalla mayor a 1024px)
  if (!isMobile && screenWidth > 1024) {
    window.location.replace("notnow.html");
  } 
  // Si es un dispositivo móvil o tablet (Pantalla menor o igual a 1024px)
  else {
    window.location.replace("index.html");
  }
}

// Ejecutar inmediatamente
redirectByDevice();
*/
                                    /*menu*/
const menuIcon = document.getElementById('menu');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-menu');
const overlay = document.getElementById('overlay');

// Función para abrir el menú
menuIcon.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
});

// Función para cerrar el menú
const closeMenu = () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu); // Cerrar si haces clic fuera

/*switchers*/ 
function switchTab(tabName) {
    // 1. Seleccionar todos los botones y contenidos
    const buttons = document.querySelectorAll('.switcher');
    const contents = document.querySelectorAll('.pane');

    // 2. Resetear todos los botones a estado inactivo
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('inactive');
    });

    // 3. Ocultar todos los contenidos
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 4. Activar el botón y contenido seleccionado
    if (tabName === 'home') {
        document.getElementById('btn-home').classList.add('active');
        document.getElementById('btn-home').classList.remove('inactive');
        document.getElementById('content-home').classList.add('active');
    } else {
        document.getElementById('btn-profile').classList.add('active');
        document.getElementById('btn-profile').classList.remove('inactive');
        document.getElementById('content-profile').classList.add('active');
    }
}

/*cambiar clases de ejercicios*/
const lunes =document.getElementById('lunes')

// 1. Seleccionamos TODOS los elementos que tienen las clases iniciales
const ejercicios = document.querySelectorAll(".ejercicio.grisClaro");

ejercicios.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        
        // Verificamos si ya tiene la clase de "Completado"
        if (elemento.classList.contains("ejercicioComp")) {
            
            // Si la tiene, se la quitamos y regresamos a las originales
            elemento.classList.remove("ejercicioComp");
            elemento.classList.add("ejercicio", "grisClaro");
            
        } else {
            
            // Si no la tiene, quitamos las originales y ponemos la de completado
            elemento.classList.remove("ejercicio", "grisClaro");
            elemento.classList.add("ejercicioComp");
            
        }
    });
});