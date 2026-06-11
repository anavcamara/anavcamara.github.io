const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {

    if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    }

    document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
    );

});

const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

toggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("http") || href.startsWith("mailto")) return;

    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

const text = "Ana Luiza.";
let i = 0;

function typeEffect() {
    const element = document.getElementById("typed-name");

    if (!element) return;

    if (i < text.length) {
        element.textContent+= text.charAt(i);
        i++;
        setTimeout(typeEffect, 120);
    }
}

window.addEventListener("load", typeEffect);