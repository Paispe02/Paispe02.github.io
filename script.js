

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
  

//###########Language selector#####################
document.addEventListener('DOMContentLoaded', () => {
  const idioma = localStorage.getItem('idioma') || 'en';
  document.getElementById('selector-idioma').value = idioma;
  loadLanguage(idioma);
});


document.getElementById('selector-idioma').addEventListener('change', function() {
  const idioma = this.value;
  loadLanguage(idioma);
  localStorage.setItem('idioma', idioma);
});
let path = window.location.pathname;
let page = path.split("/").pop().split(".").shift();

function loadLanguage(language) {
  fetch(`/locales/${language}/${page}.json`)
    .then(response => response.json())
    .then(translations => {
      document.querySelectorAll('[data-textos]').forEach(element => {
        const key = element.getAttribute('data-textos');
        element.textContent = translations[key];
      });
    })
    .catch(error => {
      console.error('Error loading the language file:', error);
    });
}

  