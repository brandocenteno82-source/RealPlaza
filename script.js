// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any interactive elements here
    console.log('Real Plaza website loaded');
    
    // Example of adding interactivity to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default action for demo
            e.preventDefault();
            console.log('Button clicked:', this.textContent);
            
            // Add visual feedback
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 200);
        });
    });
    
    // Handle form submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            alert('Gracias por tu consulta. Nos pondremos en contacto contigo pronto.');
        });
    });
    
    // Handle carousel navigation
    const carousel = document.getElementById('reviewCarousel');
    if (carousel) {
        carousel.addEventListener('slide.bs.carousel', function(e) {
            console.log('Carousel sliding to:', e.to);
        });
    }
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});