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
  