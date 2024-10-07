document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Functionality to change active link in navigation
document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            // Add the active class to the clicked link
            this.classList.add('active');
        });
    });
});
