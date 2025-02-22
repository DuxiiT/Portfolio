// Add event listener to monitor the scroll position
window.addEventListener("scroll", function () {
    const goToTopBtn = document.getElementById("goToTopBtn");
    const aboutSection = document.getElementById("slide4"); // Assuming your "About" section has the ID "slide2"

    // Check the position of the "About" section
    const aboutTop = aboutSection.getBoundingClientRect().top;

    // If the "About" section is within view, show the button
    if (aboutTop <= window.innerHeight && window.scrollY > 0) {
        goToTopBtn.classList.add("show");
    } else {
        goToTopBtn.classList.remove("show");
    }
});

// Scroll to top when the button is clicked
document.getElementById("goToTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});