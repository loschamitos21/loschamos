// Código para leer usuarios.json y verificar el inicio de sesión (ejemplo)
fetch('usuarios.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío del formulario

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const user = data.find(user => user.username === username && user.password === password);

      if (user) {
        // Inicio de sesión exitoso
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'inicio.html';
      } else {
        // Credenciales inválidas
        const errorMessage = document.getElementById('error-msg');
        errorMessage.innerText = 'Nombre de usuario o contraseña incorrectos';
      }
    });
  })
  .catch(error => {
    console.error('Error al cargar usuarios.json', error);
  });
