// JavaScript for Features Tabs
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and content
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Add 'active' class to the clicked button
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            // Show the corresponding content
            const targetPanelId = button.getAttribute('aria-controls');
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // Set the first tab as active by default on load
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons[0].classList.add('active');
        tabButtons[0].setAttribute('aria-selected', 'true');
        tabContents[0].classList.add('active');
    }

    // JavaScript for FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // The faq-answer div
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Toggle aria-expanded attribute
            question.setAttribute('aria-expanded', !isExpanded);

            // Toggle 'active' class on the answer for CSS transition
            answer.classList.toggle('active');

            // If you want to collapse others when one expands, you'd add more logic here
            // For now, it allows multiple to be open.
        });
    });

    // JavaScript for Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    const header = document.querySelector('.header'); // Get the header
    const navLinks = document.querySelectorAll('.main-nav .nav-link'); // Get all nav links

    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
        body.classList.toggle('no-scroll');
        header.classList.toggle('mobile-nav-active'); // Toggle class on header
    });

    // Close mobile nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            body.classList.remove('no-scroll');
            header.classList.remove('mobile-nav-active'); // Remove class from header
        });
    });
});