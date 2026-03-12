// Anti-spam email obfuscation
(function () {
    const user = 'decodoinfo';
    const domain = 'gmail' + '.' + 'com';
    const email = user + '@' + domain;

    // Set email in contact sections (targets multiple elements if present)
    const emailSpans = document.querySelectorAll('[id="contact-email"]');
    emailSpans.forEach(span => {
        span.textContent = email;
    });

    // Set email link in contact sections
    const emailLinks = document.querySelectorAll('[id="contact-email-link"]');
    emailLinks.forEach(link => {
        link.href = 'mailto:' + email;
    });

    // Set email link in footer
    const contactLinks = document.querySelectorAll('[id="contact-link"]');
    contactLinks.forEach(link => {
        link.href = 'mailto:' + email;
        link.setAttribute('data-email', email);
    });
})();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // Try logic for valid selectors
            try {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } catch (error) {
                // Ignore if selector is not valid querySelector
            }
        }
    });
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
// Optional: add a slight delay to ensure DOM is ready before initial check
setTimeout(checkReveal, 100);
