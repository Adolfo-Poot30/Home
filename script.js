window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); // Espera 500ms para ocultar completamente
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeEls = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });
  
    fadeEls.forEach(el => observer.observe(el));
});
  
function mostrarToast(mensaje, tipo = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = mensaje;
  toast.className = `toast show ${tipo}`;

  // Ocultar después de 4 segundos
  setTimeout(() => {
    toast.className = 'toast';
  }, 4000);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'flex'; // Mostrar animación de carga

    const data = {
      nombre: form.name.value,
      correo: form.email.value,
      telefono: form.phone.value,
      mensaje: form.message.value,
    };

    try {
      const response = await fetch('https://contacto-api-slca.onrender.com/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        mostrarToast('✅ Mensaje enviado correctamente. ¡Gracias por contactarnos!');
        form.reset();
      } else {
        mostrarToast('Error: ' + (result.error || 'No se pudo enviar el mensaje.'), 'error');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      mostrarToast('Error de conexión con el servidor.', 'error');
    } finally {
      spinner.style.display = 'none'; // Ocultar animación de carga
    }
  });
});

