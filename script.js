window.addEventListener("scroll", function () {
    const goToTopBtn = document.getElementById("goToTopBtn");
    const aboutSection = document.getElementById("slide4");

    const aboutTop = aboutSection.getBoundingClientRect().top;

    if (aboutTop <= window.innerHeight && window.scrollY > 0) {
        goToTopBtn.classList.add("show");
    } else {
        goToTopBtn.classList.remove("show");
    }
});

document.getElementById("goToTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
