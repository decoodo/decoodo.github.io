document.addEventListener('DOMContentLoaded', () => {
    // Micro-interaction: Cursor Glow
    const glow = document.querySelector('.cursor-glow');
    if (glow) {
        document.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Email Obfuscation Helper
    function setupEmailProtector() {
        const emailLinks = document.querySelectorAll('[data-email-user]');
        emailLinks.forEach(link => {
            const updateLink = () => {
                const user = link.getAttribute('data-email-user');
                const domain = link.getAttribute('data-email-domain');
                if (user && domain) {
                    link.href = `mailto:${user}@${domain}`;
                    if (link.textContent === 'Email Protected') {
                        link.textContent = `${user}@${domain}`;
                    }
                }
            };

            link.addEventListener('mouseenter', updateLink);
            link.addEventListener('click', updateLink);
            link.addEventListener('touchstart', updateLink);
        });
    }

    setupEmailProtector();

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('SW Registered'))
                .catch(err => console.log('SW Registration Failed', err));
        });
    }

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
});
