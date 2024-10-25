
document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll('.progress-bar');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class
    function animateProgressBars() {
        if (isInViewport(skillsSection)) {
            progressBars.forEach(bar => {
                bar.classList.add('animate');
            });
            // Remove the event listener once the animation has occurred
            window.removeEventListener('scroll', animateProgressBars);
        }
    }

    // Attach scroll event listener
    window.addEventListener('scroll', animateProgressBars);
});
