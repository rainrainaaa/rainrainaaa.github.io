// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    lastScrollY = window.scrollY;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe menu items and other elements
document.querySelectorAll('.luxury-item, .value-card, .grid-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Form submission
const reservationForm = document.querySelector('.reservation-form');
if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(reservationForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        alert('Terima kasih! Reservasi Anda telah diterima. Kami akan menghubungi Anda segera.');
        
        // Reset form
        reservationForm.reset();
    });
}

// Add hover effect to menu items
const menuItems = document.querySelectorAll('.luxury-item');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Mobile menu toggle (for future implementation)
let mobileMenuOpen = false;

// Add scroll reveal effect
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection && window.scrollY < window.innerHeight) {
        const scrolled = window.scrollY;
        const heroTitle = heroSection.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// Add subtle animation to customer cards
const customerCards = document.querySelectorAll('.cust-card');
customerCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        // Mobile menu close logic here
    });
});

// Prevent body scroll when adjusting form inputs
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        document.body.style.overflow = 'auto';
    });
});

// Ready state
document.addEventListener('DOMContentLoaded', function()
 {
    console.log('Tomorrow Coffee website loaded successfully!');
    
    // Remove loading state
    document.body.style.opacity = '1';
});
