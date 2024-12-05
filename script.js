// Función para manejar el logout
function manejarLogout() {
    const logoutButton = document.querySelector('.logout-button');

    if (logoutButton) {
        logoutButton.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'login.html'; // Redirigir al login
        });
    }
}
function iniciar() {
    // Inicializar la lógica de generar orden de compra
    manejarLogout();
}

// Llamar a la función para inicializar el script cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', iniciar);