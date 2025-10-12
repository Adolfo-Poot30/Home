var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu")
function abrirmenu() {
    sidemenu.style.right = "0";
}

function cerrarmenu() {
    sidemenu.style.right = "-200px";
}


// Funcion para animacion
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Activa la animación cuando el 10% del elemento es visible
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});

//obtener la fecha actual
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

function mostrarToast(mensaje, tipo = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = mensaje;
  toast.className = `toast show ${tipo}`;

  // Ocultar después de 4 segundos
  setTimeout(() => {
    toast.className = 'toast';
  }, 4000);
}

//formulario
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
      fecha_hora: new Date().toLocaleString()
    };

    try {
      const response = await fetch('https://contacto-api-un09.onrender.com/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        mostrarToast('✅ Mensaje enviado correctamente. ¡Gracias por contactarme!');
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
