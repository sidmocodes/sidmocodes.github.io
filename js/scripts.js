document.addEventListener('DOMContentLoaded', function() {
    // Get all the anchor links in the navigation
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default anchor link behavior
            event.preventDefault();

            // Get the target section's top offset
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const targetPosition = targetSection.offsetTop;

            // Scroll to the target section with animation
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});
