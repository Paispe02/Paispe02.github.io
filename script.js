

let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');

  if (lastScrollY < window.scrollY) {
    // Desplazamiento hacia abajo
    header.style.top = "-100px"; // Ajusta este valor según la altura de tu encabezado
  } else {
    // Desplazamiento hacia arriba
    header.style.top = "0";
  }

  lastScrollY = window.scrollY;
});


// Para cambiar el padding del header al tamaño de header de cada navegador
document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    var content = document.querySelector("main");
    var headerHeight = header.offsetHeight;
    
    content.style.paddingTop = headerHeight + 'px';
  });
  

  