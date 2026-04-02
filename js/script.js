// ===== Sri Gangamma Temple - JavaScript =====

// ===== Carousel Functions =====
let currentSlideIndex = 0;
const slideDuration = 5000; // 5 seconds per slide
let slideTimer = null;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (!slides.length) return;
  
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }
  
  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Remove active class from all dots
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Show current slide
  if (slides[currentSlideIndex]) {
    slides[currentSlideIndex].classList.add('active');
  }
  
  // Highlight current dot
  if (dots[currentSlideIndex]) {
    dots[currentSlideIndex].classList.add('active');
  }
  
  // Reset timer for auto-play
  resetSlideTimer();
}

function moveSlide(direction) {
  showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
  showSlide(index);
}

function resetSlideTimer() {
  if (slideTimer) {
    clearTimeout(slideTimer);
  }
  slideTimer = setTimeout(() => {
    moveSlide(1);
  }, slideDuration);
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize carousel
  showSlide(0);
  
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      this.setAttribute('aria-expanded', 
        navList.classList.contains('active'));
    });
  }
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });
  
  // Smooth scroll for anchor links (enhanced)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form validation enhancement
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      
      if (!name || !email) {
        e.preventDefault();
        alert('Please fill in all required fields.');
        return false;
      }
      
      // Show thank you message (for demo)
      if (this.action.includes('formspree')) {
        // Let Formspree handle it
        return true;
      }
      
      // Demo fallback
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon. 🙏');
      this.reset();
    });
  }
  
  // Donation button feedback
  document.querySelectorAll('.donate-card .btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // In production, integrate Razorpay/PayPal here
      console.log('Donation button clicked - integrate payment gateway');
    });
  });
  
  // Donation tracker animation
  const progressFill = document.getElementById('progressFill');
  if (progressFill && window.IntersectionObserver) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate progress bar when in view
          const targetWidth = progressFill.style.width;
          progressFill.style.width = '0';
          setTimeout(() => {
            progressFill.style.width = targetWidth;
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(progressFill);
  }
  
  // Animate counter numbers on scroll
  const counters = document.querySelectorAll('[id="donorCount"], [id="daysRemaining"]');
  if (counters.length > 0 && window.IntersectionObserver) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    });
    counters.forEach(counter => counterObserver.observe(counter));
  }
  
  function animateCounters() {
    const donorCountEl = document.getElementById('donorCount');
    const daysRemainingEl = document.getElementById('daysRemaining');
    
    if (donorCountEl) animateValue(donorCountEl, 0, parseInt(donorCountEl.textContent), 1500);
    if (daysRemainingEl) animateValue(daysRemainingEl, 0, parseInt(daysRemainingEl.textContent), 1500);
  }
  
  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
});

// ===== Optional: Add to window for external use =====
window.GangammaTemple = {
  showNotification: function(message, type = 'info') {
    // Simple notification system (expand as needed)
    console.log(`[${type.toUpperCase()}] ${message}`);
  }
};