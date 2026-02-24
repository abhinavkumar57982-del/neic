// Custom Cursor
var crsr = document.querySelector("#cursor");
var blr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blr.style.left = dets.x - 75 + "px"; // Center the blur on cursor
    blr.style.top = dets.y - 75 + "px";
});

// Navbar link hover effect on cursor (optional, can be removed if not needed)
// This effect is commented out as it might conflict with the navbar's own hover.
// You can enable it if you like.
/*
var navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff"; // Fixed typo: boarder -> border
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #000";
        crsr.style.backgroundColor = "#f3ca8c";
    });
});
*/

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar background change on scroll
gsap.to("#nav", {
    backgroundColor: "#0a0a0a",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -20%",
        scrub: 1,
    },
});

// Home section background color change (if you want the main content to darken as you scroll)
gsap.to("#home", {
    backgroundColor: "#0a0a0a",
    scrollTrigger: {
        trigger: "#home",
        scroller: "body",
        start: "top -80%",
        end: "top -120%",
        scrub: 2,
    },
});

// About section elements animation
gsap.from("#info img, #info-in", {
    y: 80,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#info",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
    },
});

gsap.from("#vision img, #vision-content", {
    y: 80,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#vision",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
    },
});

gsap.from("#message img, #message-id", {
    y: 80,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#message",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
    },
});

// Cards animation
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#card-containers",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
    },
});

// Page4 heading animation
gsap.from("#page4 h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
    },
});

// Page4 elements animation
gsap.from(".elem", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
    },
});

// Smooth scroll for arrow (optional enhancement)
document.querySelector('#arrow').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});


    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
