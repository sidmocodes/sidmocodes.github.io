/**
 * function includeHTML(targetSelector, file) {
  var elmnt, xhttp;
  
  // Select the target element by its selector
  elmnt = document.querySelector(targetSelector);
  
  if (elmnt && file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {elmnt.innerHTML = this.responseText;}
        if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
  }
}
**/



document.addEventListener("DOMContentLoaded", function() {

    
    // Inner HTML Include call in about
    includeHTML("#about-content", "assets/content/about.html");
    
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    

    // Project card hover effect
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Icon pop-out effect on hover
    document.querySelectorAll('.fab').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Smooth Fade In effect as user scrolls
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        document.querySelectorAll('.fade-in').forEach(element => {
            let elementPosition = element.getBoundingClientRect().top + window.innerHeight * 0.25;
            if (scrollPosition > elementPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });

    // Scroll to Top Button
    const scrollToTopButton = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Inner HTML Include call in about
    //includeHTML("#about div div", "assets/content/about.html");

});


// Optional: Add additional JS logic as per your requirements
