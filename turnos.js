document.getElementById('whatsapp').addEventListener('submit', function(event) {
    event.preventDefault();  
    
    var nombre = document.getElementById('nombre').value;   
    var DNI = document.getElementById('DNI').value; 
    var hora = document.getElementById('hora').value;

    var nombreval = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;    
    var dnival = /^\d{7,9}$/;

    if (nombre === "" || !nombreval.test(nombre)) {
        alert("Por favor, ingresa un nombre válido (sin números ni caracteres especiales).");
        return;
    }
    
    if (!dnival.test(DNI)) {
        alert("Por favor, ingresa un DNI válido (entre 7 y 9 dígitos numéricos).");
        return;
    }

    
    if (hora === "") {
        alert("Por favor, selecciona una hora.");
        return;
    }

    
    var horaNum = parseInt(hora.split(":")[0]);

    
    if (horaNum < 17 || horaNum > 23) {
        alert("El horario disponible es de 17:00 a 23:00. Selecciona una hora dentro de ese rango.");
        return;
    }

    
    var whatsappMessage = encodeURIComponent(`Nombre: ${nombre}\nDNI: ${DNI}\nHora: ${hora}`);

    
    var phoneNumber = '542645848447'; 
    
    var whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    console.log(whatsappLink);

    
    window.open(whatsappLink, '_blank');
});
