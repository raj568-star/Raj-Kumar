// Smooth Scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple validation checks
    if (nameInput.value.trim() === '') {
        alert('Please enter your name');
        return;
    }
    if (emailInput.value.trim() === '') {
        alert('Please enter your email');
        return;
    }
    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email');
        return;
    }
    if (messageInput.value.trim() === '') {
        alert('Please enter a message');
        return;
    }

    alert('Message Sent Successfully!');
    form.reset();
});

// Email Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Dynamic year in footer
const yearSpan = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
