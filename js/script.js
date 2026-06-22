// Typing Animation

var typed = new Typed("span", {
    strings: [
        "Frontend Developer",
        "Web Designer",
        "UI/UX Enthusiast",
        "B.Tech CSE Student"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        ?.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Navbar Active Link

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

    });

});


// Reveal Animation on Scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

