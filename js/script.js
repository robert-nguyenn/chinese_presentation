// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
function setActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', setActiveNavLink);

// Run on page load
window.addEventListener('load', () => {
    setActiveNavLink();
    
    // Smooth reveal animations for elements
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.video-container, .audio-player-container, .project-description, .reflection-content').forEach(el => {
        observer.observe(el);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Audio player custom controls enhancement
const audioPlayer = document.querySelector('.audio-player');
if (audioPlayer) {
    audioPlayer.addEventListener('play', () => {
        console.log('Audio playback started');
    });
    
    audioPlayer.addEventListener('ended', () => {
        console.log('Audio playback ended');
    });
}

// Video player enhancement
const videoPlayer = document.querySelector('.main-video');
if (videoPlayer) {
    videoPlayer.addEventListener('play', () => {
        console.log('Video playback started');
    });
    
    videoPlayer.addEventListener('ended', () => {
        console.log('Video playback ended');
    });
}
