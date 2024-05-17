document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const options = {
        root: null, // relative to the viewport
        threshold: 0.3 // 30% of the section should be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === entry.target.id) {
                link.classList.add('active');
            }
            });
        }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});