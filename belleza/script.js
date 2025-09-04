document.addEventListener('DOMContentLoaded', function() {
    // Navegación móvil
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Cargar servicios dinámicamente
    const servicesContainer = document.getElementById('services-container');
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-img">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <p class="service-price">${service.price}</p>
            </div>
        `;
        servicesContainer.appendChild(serviceCard);
    });
    
    // Cargar equipo dinámicamente
    const teamContainer = document.getElementById('team-container');
    
    team.forEach(member => {
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member';
        teamMember.innerHTML = `
            <div class="team-img">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="team-info">
                <h3>${member.name}</h3>
                <p>${member.position}</p>
                <p>${member.bio}</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        `;
        teamContainer.appendChild(teamMember);
    });
    
    // Cargar testimonios dinámicamente
   // Reemplazar la parte de testimonios en el script.js con este código:

// Cargar testimonios dinámicamente con slider funcional
const testimonialsContainer = document.getElementById('testimonials-container');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;

// Crear tarjetas de testimonios
testimonials.forEach((testimonial, index) => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
        <div class="testimonial-text">
            <p>${testimonial.text}</p>
        </div>
        <div class="testimonial-author">
            <div class="author-img">
                <img src="${testimonial.image}" alt="${testimonial.author}">
            </div>
            <div class="author-info">
                <h4>${testimonial.author}</h4>
                <p>${testimonial.role}</p>
            </div>
        </div>
    `;
    testimonialsContainer.appendChild(testimonialCard);
    
    // Crear puntos de navegación
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

// Navegación del slider
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.slider-dot');

function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 20; // Incluye el gap
    testimonialsContainer.scrollTo({
        left: slideWidth * currentSlide,
        behavior: 'smooth'
    });
    
    // Actualizar puntos activos
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlider();
});

// Auto-avance opcional (descomentar si se desea)
/*
setInterval(() => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlider();
}, 5000);
*/

// Ajustar slider en redimensionamiento
window.addEventListener('resize', updateSlider);
    
    // Cargar opciones de servicios en el formulario
    const serviceSelect = document.getElementById('service');
    
    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.id;
        option.textContent = service.title;
        serviceSelect.appendChild(option);
    });
    
    // Manejo del formulario de contacto
    const appointmentForm = document.getElementById('appointment-form');
    
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        
        // Validar campos
        if (!name || !email || !phone || !service || !date) {
            alert('Por favor complete todos los campos');
            return;
        }
        
        // Simular envío del formulario
        const selectedService = services.find(s => s.id == service);
        
        // Mostrar mensaje de confirmación
        alert(`¡Gracias ${name}! Tu cita para ${selectedService.title} el ${date} ha sido reservada. Te enviaremos un correo de confirmación a ${email}.`);
        
        // Resetear formulario
        appointmentForm.reset();
    });
    
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animación de elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .team-member, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Establecer propiedades iniciales para la animación
    document.querySelectorAll('.service-card, .team-member, .testimonial-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar la página
});