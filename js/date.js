// Get the current year and set it in the footer
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
