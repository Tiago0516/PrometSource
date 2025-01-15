// Referencias a los elementos
const backButton = document.getElementById('back-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const contentScreen = document.getElementById('content');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const closeMenu = document.getElementById('close-menu');

// Función para mostrar la pantalla de bienvenida y ocultar el contenido
function showWelcomeScreen() {
    welcomeScreen.style.display = 'block';
    contentScreen.style.display = 'none';
}

// Función para mostrar el contenido y ocultar la pantalla de bienvenida
function showContentScreen() {
    welcomeScreen.style.display = 'none';
    contentScreen.style.display = 'block';
}

// Al hacer clic en el botón "Regresar al inicio", se muestra la pantalla de bienvenida y oculta el contenido
backButton.addEventListener('click', showWelcomeScreen);

// Asegúrate de que la pantalla de bienvenida se muestre al inicio
showWelcomeScreen();

// Función para alternar la visibilidad del menú hamburguesa
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic en el ícono de hamburguesa cierre el menú inmediatamente
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    closeMenu.style.display = 'block'; // Muestra la X cuando el menú está activo
});

// Función para cerrar el menú cuando se haga clic en la X
closeMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic en la X cierre el menú inmediatamente
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
    closeMenu.style.display = 'none'; // Oculta la X cuando el menú se cierra
});

// Función para abrir y cerrar el menú
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
});

// Función para regresar al inicio
document.getElementById("back-btn").addEventListener("click", function() {
    window.location.href = "index.html";
});


// Función para cerrar el menú cuando se haga clic fuera de él
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !nav.contains(e.target) && !closeMenu.contains(e.target)) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        closeMenu.style.display = 'none';
    }
});
