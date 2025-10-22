var crsr = document.querySelector("#cursor")
var blr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blr.style.left = dets.x+"px"
    blr.style.top = dets.y+"px"

})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.boarder ="1px solid #000000ff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.boarder ="0px solid #000"
        crsr.style.backgroundColor="#000"
    })
})



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:"0.5",
    delay:"100",
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -50%",
        end:"top -100%",
        scrub:3,
        
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:4,

    }
     
})
gsap.from("#info img,#info-in",{
    y:50,
    opacity:0,
    duration:5,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#info",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4,

    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:5,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4,

    }
})
gsap.from("#colon-1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        //markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})
gsap.from("#colon-2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon-2",
        scroller:"body",
        //markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }

})
// About Section Animation
gsap.from("#info img, #info-in", {
  y: 80,
  opacity: 0,
  duration: 1.5,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#info",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.from("#vision img, #vision-content", {
  y: 80,
  opacity: 0,
  duration: 1.5,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#vision",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
  },
});
const menu = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

