// Custom Cursor
var crsr = document.querySelector("#cursor");
var blr = document.querySelector("#cursor-blur");

if (crsr && blr) {
    document.addEventListener("mousemove", function (dets) {
        crsr.style.left = dets.x + "px";
        crsr.style.top = dets.y + "px";
        blr.style.left = dets.x - 75 + "px";
        blr.style.top = dets.y - 75 + "px";
    });
}

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

// Home section video overlay effect
gsap.to("#home", {
    backgroundColor: "rgba(0,0,0,0.7)",
    scrollTrigger: {
        trigger: "#home",
        scroller: "body",
        start: "top -80%",
        end: "top -120%",
        scrub: 2,
    },
});

// Scrolling text animation
gsap.to("#scroller-in", {
    scrollTrigger: {
        trigger: "#scroller",
        scroller: "body",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
    },
    opacity: 1,
    duration: 1
});

// Events section animations
gsap.from("#events .section-header", {
    scrollTrigger: {
        trigger: "#events",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
    },
    y: 30,
    opacity: 0,
    duration: 1
});

gsap.from(".showcase-card", {
    scrollTrigger: {
        trigger: "#events",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1
});

// Page4 section animations
gsap.from("#page4 .header-tag, #page4 .header-title, #page4 .header-description", {
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
    },
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 1
});

gsap.from(".prof-card", {
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1
});

gsap.from(".stats-row", {
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
    },
    y: 30,
    opacity: 0,
    duration: 1
});

// Executive body section animations
gsap.from("#e-body .section-header", {
    scrollTrigger: {
        trigger: "#e-body",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
    },
    y: 30,
    opacity: 0,
    duration: 1
});

gsap.from(".member-card", {
    scrollTrigger: {
        trigger: "#e-body",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
    },
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 1
});

// Smooth scroll for arrow
document.querySelector('#arrow')?.addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// AOS initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
