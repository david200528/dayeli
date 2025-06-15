document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const birthdayMessage = document.getElementById('birthdayMessage');
    const closeMessageBtn = document.getElementById('closeMessage');

    envelope.addEventListener('click', () => {
        // Agrega la clase 'open' al sobre para activar las animaciones CSS
        envelope.classList.add('open');

        // Después de un pequeño retraso (para que la animación del sobre termine),
        // muestra el mensaje de cumpleaños
        setTimeout(() => {
            birthdayMessage.classList.add('show');
        }, 800); // El tiempo debe coincidir o ser ligeramente mayor que la duración de la transición del sobre
    });

    closeMessageBtn.addEventListener('click', () => {
        // Oculta el mensaje de cumpleaños
        birthdayMessage.classList.remove('show');

        // Después de un pequeño retraso, quita la clase 'open' del sobre
        // para que se "cierre" (si quieres que se pueda volver a abrir)
        // Puedes ajustar o quitar esto si prefieres que el sobre quede abierto.
        setTimeout(() => {
            envelope.classList.remove('open');
        }, 500); // Espera a que la transición del mensaje termine
    });
});
