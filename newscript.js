// Función para guardar una transferencia en localStorage
function guardarTransferencia(transferencia) {
    let registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.push(transferencia);
    localStorage.setItem('registros', JSON.stringify(registros));
  }
  
  // Función para manejar el envío del formulario
  document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    // Obtener valores del formulario
    const nombreTitular = document.getElementById('titular').value;
    const pagoMovil = document.getElementById('pagoMovil').value;
    const cedula = document.getElementById('cedula').value;
    const monto = document.getElementById('monto').value;
    const banco = document.getElementById('banco').value;
    const contacto = document.getElementById('contacto').value;
    const asesor = document.getElementById('asesor').value;
  
    // Crear objeto con los datos de la transferencia
    const transferencia = {
      nombreTitular: nombreTitular,
      pagoMovil: pagoMovil,
      cedula: cedula,
      monto: monto,
      banco: banco,
      contacto: contacto,
      asesor: asesor
    };
  
    // Guardar la transferencia en localStorage
    guardarTransferencia(transferencia);
  
    alert('Transferencia registrada correctamente');
    // Puedes realizar otras acciones aquí después de guardar la transferencia
  });