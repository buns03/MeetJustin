/* ==========================================================
   PAGE LOADED
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initScrollReveal();
    initParallax();
    initFloatingParticles();
    initTraitRipple();
    animateGradient();

});

/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initScrollReveal() {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll(".trait, .bottom-text").forEach(element => {

        observer.observe(element);

    });

}

/* ==========================================================
   IMAGE PARALLAX
========================================================== */

function initParallax() {

    const image = document.querySelector(".justin-image");

    if (!image) return;

    document.addEventListener("mousemove", e => {

        const x = (e.clientX / window.innerWidth - .5) * 12;
        const y = (e.clientY / window.innerHeight - .5) * 12;

        image.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}

/* ==========================================================
   FLOATING PARTICLES
========================================================== */

function initFloatingParticles() {

    const hero = document.querySelector(".hero");

    for (let i = 0; i < 18; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDuration =
            5 + Math.random() * 8 + "s";

        particle.style.animationDelay =
            Math.random() * 4 + "s";

        particle.style.opacity =
            .15 + Math.random() * .3;

        particle.style.width =
            5 + Math.random() * 10 + "px";

        particle.style.height =
            particle.style.width;

        hero.appendChild(particle);

    }

}

/* ==========================================================
   TRAIT RIPPLE
========================================================== */

function initTraitRipple() {

    document.querySelectorAll(".trait").forEach(card => {

        card.addEventListener("mousemove", e => {

            const ripple = document.createElement("span");

            ripple.classList.add("ripple");

            const rect = card.getBoundingClientRect();

            ripple.style.left = e.clientX - rect.left + "px";
            ripple.style.top = e.clientY - rect.top + "px";

            card.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

}

/* ==========================================================
   BACKGROUND GRADIENT
========================================================== */

function animateGradient() {

    let angle = 0;

    setInterval(() => {

        angle += .25;

        document.querySelector(".hero").style.background =
            `linear-gradient(${angle}deg,
            rgb(214,145,214),
            rgb(167,180,224))`;

    }, 80);

}