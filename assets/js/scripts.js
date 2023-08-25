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
                top: targetPosition-10,
                behavior: 'smooth'
            });
        });
    });
});

fetch('/api/blog')
    .then(response => response.json())
    .then(blogs => {
        const blogList = document.getElementById('blog-list');
        blogs.forEach(blog => {
            const blogItem = document.createElement('li');
            blogItem.textContent = blog.title;
            blogList.appendChild(blogItem);
        });
    });

window.addEventListener('scroll', function() {
    const heading = document.getElementById('projects-heading');
    const top = heading.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight / 2) {
        heading.classList.add('bounce');
    } else {
        heading.classList.remove('bounce');
    }
});
