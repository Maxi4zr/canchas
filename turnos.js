document.getElementById('whatsapp').addEventListener('submit', function(event) {
    event.preventDefault();  // Previene el envío del formulario

    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;   // Captura el valor del campo "Nombre"
    var DNI = document.getElementById('DNI').value; // Captura el valor del campo "Mensaje"
    var hora = document.getElementById('hora').value;

    // Crear el mensaje de WhatsApp (asegúrate de codificar los valores)
    var whatsappMessage = encodeURIComponent(`Nombre: ${nombre}\nDNI: ${DNI}\nHora: ${hora}`);

    // Número de teléfono de WhatsApp (incluyendo el código de país)
    var phoneNumber = '542645848447'; // Reemplaza con el número de WhatsApp deseado
    // Crear el enlace de WhatsApp
    var whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    console.log(whatsappLink);

    // Abrir WhatsApp en una nueva pestaña o ventana
    window.open(whatsappLink, '_blank');
});
