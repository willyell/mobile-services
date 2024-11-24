document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const originalHeaderHeight = header.offsetHeight; // Store the original height of the header

    window.addEventListener("scroll", () => {
        if (window.scrollY > originalHeaderHeight) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });
});

