const menuToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
    navMenu.classList.toggle('open');
}

menuToggle.addEventListener('click', toggleMenu);

// Controlador de eventos para ocultar el menú si la ventana se ensancha a un cierto ancho
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
    }
});