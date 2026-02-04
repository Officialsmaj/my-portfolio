// GSAP Animations and Interactivity

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Scroll to section function
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 70 },
            ease: "power2.inOut"
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 70 },
            ease: "power2.inOut"
        });
    });
});

// Hero section animations
gsap.from(".portrait", {
    duration: 2,
    scale: 0,
    rotation: 360,
    ease: "back.out(1.7)",
    delay: 0.5
});

gsap.from(".hero-text h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 1
});

gsap.from(".hero-text h2", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 1.2
});

gsap.from(".hero-text p", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 1.4
});

gsap.from(".cta-buttons", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 1.6
});

// Section reveal animations
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section.querySelector('h2'), {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(section.querySelectorAll('.card'), {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });
});

// Card hover animations
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            y: -10,
            boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)",
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            y: 0,
            boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)",
            ease: "power2.out"
        });
    });
});

// Social icon animations
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1.2,
            boxShadow: "0 0 30px rgba(0, 212, 255, 0.8)",
            ease: "power2.out"
        });
    });

    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1,
            boxShadow: "0 0 10px rgba(0, 212, 255, 0.3)",
            ease: "power2.out"
        });
    });

    icon.addEventListener('click', () => {
        gsap.to(icon, {
            duration: 0.1,
            scale: 0.9,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });
    });
});

// Button animations
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            duration: 0.3,
            y: -3,
            boxShadow: "0 8px 25px rgba(0, 212, 255, 0.4)",
            ease: "power2.out"
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            duration: 0.3,
            y: 0,
            boxShadow: "0 5px 15px rgba(0, 212, 255, 0.4)",
            ease: "power2.out"
        });
    });
});

// Floating WhatsApp animation
gsap.to('.whatsapp-float', {
    duration: 2,
    y: -10,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        gsap.to(hamburger.children[0], { duration: 0.3, rotation: 45, y: 8 });
        gsap.to(hamburger.children[1], { duration: 0.3, opacity: 0 });
        gsap.to(hamburger.children[2], { duration: 0.3, rotation: -45, y: -8 });
    } else {
        gsap.to(hamburger.children[0], { duration: 0.3, rotation: 0, y: 0 });
        gsap.to(hamburger.children[1], { duration: 0.3, opacity: 1 });
        gsap.to(hamburger.children[2], { duration: 0.3, rotation: 0, y: 0 });
    }
});

// Navbar background change on scroll
gsap.to('#navbar', {
    scrollTrigger: {
        start: "top -50",
        end: 99999,
        toggleClass: { className: "scrolled", targets: "#navbar" }
    }
});

// Performance optimization: Reduce motion for mobile
if (window.innerWidth < 768) {
    gsap.set('.orbit-ring, .social-orbit', { animationPlayState: 'paused' });
}

// Intersection Observer for lazy loading animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.to(entry.target, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: "power3.out"
            });
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.media-item, .blog-cards .card').forEach(item => {
    gsap.set(item, { opacity: 0, y: 50 });
    observer.observe(item);
});
