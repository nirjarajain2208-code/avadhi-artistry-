const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,0.9)";
        popup.style.display = "flex";
        popup.style.alignItems = "center";
        popup.style.justifyContent = "center";
        popup.style.zIndex = "1000";

        const image = document.createElement("img");
        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";

        popup.appendChild(image);

        popup.addEventListener("click", () => {
            popup.remove();
        });

        document.body.appendChild(popup);
    });
});
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});