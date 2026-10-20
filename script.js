// ===============================
// SARA — PREMIUM INTERACTIONS
// ===============================

// 1. SCROLL PROGRESS
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    progressBar.style.width = `${progress}%`;
});


// 2. NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
    });
}


// 3. SCROLL REVEAL
const revealElements = document.querySelectorAll(
    ".about, .services, .work, .cta, .service-card, .work-item"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${(index % 3) * 0.08}s`;
    revealObserver.observe(element);
});


// 4. MAGNETIC BUTTON EFFECT
const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .nav-btn"
);

buttons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0, 0)";
    });
});


// 5. PROJECT CARD 3D TILT
const projectCards = document.querySelectorAll(".work-item");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 35;
        const rotateY = (centerX - x) / 35;

        card.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
});


// 6. SMOOTH ANCHOR SCROLL
document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// 7. BUTTON ARROW INTERACTION
document.querySelectorAll(".primary-btn, .secondary-btn").forEach((button) => {

    button.addEventListener("mouseenter", () => {
        button.style.letterSpacing = "0.03em";
    });

    button.addEventListener("mouseleave", () => {
        button.style.letterSpacing = "";
    });
});