function myMenuFunction() {
    var menu = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    }
    else {
        menuBth.className = "nav-menu";
    }
}

/*-------Dark mode-------*/

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

});

/*-------Typing effect-------*/

var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "Coder", "Cloud Engineer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,


});

/*-------Scroll animation-------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

/*-------active link-------*/

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section[id]');
    let isClicking = false;
    function removeActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove('active-link');
        });
    }
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            isClicking = true;
            removeActiveClasses();
            this.classList.add('active-link');


            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            setTimeout(() => {
                isClicking = false;
            }, 1000);
        });
    });

    function scrollActive() {
        if (isClicking) return;

        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    removeActiveClasses();
                    navLink.classList.add('active-link');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);
    scrollActive();
});

/*-------completed btn redirect to github-------*/
document.getElementById("completed-projects").addEventListener("click", function () {
    window.open("https://github.com/ankurbaliga8", "_blank");
});

/*-------experience btn redirect to linkedin-------*/
document.getElementById("experience-projects").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/ankurbaliga/", "_blank");
});



/*-------Smooth scroll-------*/

document.addEventListener("DOMContentLoaded", function () {
    const headerHeight = document.getElementById("header").offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
