// Email Anti-Spam Protection
// Obfuscate email to prevent harvesting by spam bots
(function () {
    'use strict';

    // Email parts stored separately for obfuscation
    const emailParts = {
        user: 'decoodo',
        domain: 'protonmail',
        tld: 'com'
    };

    // Construct the email
    function getEmail() {
        return emailParts.user + '@' + emailParts.domain + '.' + emailParts.tld;
    }

    // Initialize email reveal functionality
    function initEmailReveal() {
        const revealBtn = document.getElementById('reveal-email-btn');
        const copyBtn = document.getElementById('copy-email-btn');
        const emailDisplay = document.getElementById('email-display');

        if (!revealBtn || !emailDisplay) return;

        // Reveal email button click handler
        revealBtn.addEventListener('click', function () {
            const email = getEmail();

            // Create mailto link
            const mailtoLink = document.createElement('a');
            mailtoLink.href = 'mailto:' + email;
            mailtoLink.textContent = email;
            mailtoLink.style.color = 'var(--primary)';
            mailtoLink.style.fontWeight = '600';

            // Display the email
            emailDisplay.innerHTML = '';
            emailDisplay.appendChild(mailtoLink);

            // Hide reveal button, show copy button
            revealBtn.style.display = 'none';
            if (copyBtn) {
                copyBtn.style.display = 'inline-flex';
            }
        });

        // Copy email button click handler
        if (copyBtn) {
            copyBtn.addEventListener('click', function () {
                const email = getEmail();

                // Copy to clipboard
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(email).then(function () {
                        // Show success feedback
                        const originalText = copyBtn.textContent;
                        copyBtn.textContent = 'Copied!';
                        copyBtn.style.backgroundColor = 'var(--secondary)';
                        copyBtn.style.borderColor = 'var(--secondary)';
                        copyBtn.style.color = 'var(--bg-white)';

                        setTimeout(function () {
                            copyBtn.textContent = originalText;
                            copyBtn.style.backgroundColor = '';
                            copyBtn.style.borderColor = '';
                            copyBtn.style.color = '';
                        }, 2000);
                    }).catch(function (err) {
                        console.error('Failed to copy email:', err);
                        alert('Email: ' + email);
                    });
                } else {
                    // Fallback for older browsers
                    const tempInput = document.createElement('input');
                    tempInput.value = email;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    try {
                        document.execCommand('copy');
                        copyBtn.textContent = 'Copied!';
                        setTimeout(function () {
                            copyBtn.textContent = 'Copy Email';
                        }, 2000);
                    } catch (err) {
                        alert('Email: ' + email);
                    }
                    document.body.removeChild(tempInput);
                }
            });
        }
    }

    // Initialize smooth scrolling for anchor links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(function (link) {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                // Skip if it's just "#"
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update URL without jumping
                    if (history.pushState) {
                        history.pushState(null, null, href);
                    }
                }
            });
        });
    }

    // Initialize mobile menu toggle (if needed in future)
    function initMobileMenu() {
        // Reserved for future mobile hamburger menu functionality
        // Currently, nav menu wraps on mobile
    }

    // Initialize all functionality when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initEmailReveal();
            initSmoothScroll();
            initMobileMenu();
        });
    } else {
        initEmailReveal();
        initSmoothScroll();
        initMobileMenu();
    }
})();
