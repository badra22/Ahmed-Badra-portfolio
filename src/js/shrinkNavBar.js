// Function to check the scroll position
function checkScroll() {
    // Get the header element
    const navbar = document.getElementById('navbar');

    // Check if the page is scrolled down
    if (window.scrollY > 0) {
        navbar.classList.add("shrink-navbar");
        navbar.classList.remove("expand-navbar");
    } else {
        navbar.classList.add("expand-navbar");
        navbar.classList.remove("shrink-navbar");
    }
}

// Attach the checkScroll function to the scroll event
window.addEventListener('scroll', checkScroll);

// Initial check in case the page is already scrolled down
checkScroll();
