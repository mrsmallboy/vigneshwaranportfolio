// script.js

// Function to toggle dark mode
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const skills = document.querySelectorAll('.skill');
const projects = document.querySelectorAll('.project');
const btns = document.querySelectorAll('.btn');
const footer = document.querySelector('footer');

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    navLinks.forEach(link => link.classList.toggle('dark-mode'));
    sections.forEach(section => section.classList.toggle('dark-mode'));
    skills.forEach(skill => skill.classList.toggle('dark-mode'));
    projects.forEach(project => project.classList.toggle('dark-mode'));
    btns.forEach(btn => btn.classList.toggle('dark-mode'));
    footer.classList.toggle('dark-mode');

    // Toggle icon
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '🌞';
    } else {
        themeToggleButton.textContent = '🌙';
    }
});
// JavaScript to highlight the active nav link based on the scroll position
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    // Loop through sections to find the one currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
