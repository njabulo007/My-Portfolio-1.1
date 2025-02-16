// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', () => {

    // Scroll animation on page load (fade-in effect for the intro text)
    const introText = document.getElementById('introText');
    setTimeout(() => {
        introText.classList.add('fade-in');  // This will trigger the fade-in
    }, 500); // Delay for fade-in effect

    // Navbar background change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navbar links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = e.target.getAttribute('href').slice(1); // Get target section id
            document.getElementById(targetId)?.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
});

