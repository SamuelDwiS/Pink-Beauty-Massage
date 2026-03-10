// ===== TESTIMONIALS CAROUSEL =====
document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('testimoni-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentIndex = 0;
    let visibleCards = 3;
    let cardWidth = 0;
    let gap = 32; // 2rem in pixels
    
    function updateVisibleCards() {
        if (window.innerWidth <= 480) {
            visibleCards = 1;
        } else if (window.innerWidth <= 768) {
            visibleCards = 2;
        } else {
            visibleCards = 3;
        }
    }
    
    function updateCarouselPosition() {
        if (cards.length > 0) {
            cardWidth = cards[0].offsetWidth;
            const offset = currentIndex * (cardWidth + gap);
            track.style.transform = `translateX(-${offset}px)`;
        }
    }
    
    function updateButtonStates() {
        // Disable prev button if at start
        prevBtn.disabled = currentIndex === 0;
        // Disable next button if at end
        nextBtn.disabled = currentIndex >= cards.length - visibleCards;
    }
    
    function showPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
            updateButtonStates();
        }
    }
    
    function showNext() {
        if (currentIndex < cards.length - visibleCards) {
            currentIndex++;
            updateCarouselPosition();
            updateButtonStates();
        }
    }
    
    // Initialize
    updateVisibleCards();
    updateCarouselPosition();
    updateButtonStates();
    
    // Event listeners
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        updateVisibleCards();
        if (currentIndex > cards.length - visibleCards) {
            currentIndex = Math.max(0, cards.length - visibleCards);
        }
        updateCarouselPosition();
        updateButtonStates();
    });
});

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.navbar__link');

// Toggle menu on hamburger click
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar__container')) {
        navMenu.classList.remove('active');
    }
});

