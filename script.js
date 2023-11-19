let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x - 11 + "px"
  crsr.style.top = dets.y - 11 + "px"
  blur.style.left = dets.x - 150 + "px"
  blur.style.top = dets.y - 150 + "px"
})


let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 4;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.color = "#95C11E";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.color = "#95C11E";
  });
});



gsap.to("#nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "120px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:"true",
    start: " top -10%",
    end: "top -16%",
    scrub: 1,
  }

})

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: " top -27%",
    end: "top -80%",
    scrub: 2,
  }
})

gsap.from("#about-img1", {
  x: 300,
  opacity: 0,
  duration: 50,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#about-img1",
    scroller: "body",
    start: "top 88%",
    end: "top 80%",
    scrub: 3,
    //  markers:true,
  }
})

gsap.from("#about-img2", {
  x: -300,
  opacity: 0,
  duration: 50,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#about-img2",
    scroller: "body",
    start: "top 88%",
    end: "top 80%",
    scrub: 3,
    //  markers:true,
  }
})

gsap.from(".aboutUs", {
  y: 50,
  opacity: 0,
  duration: 2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".aboutUs",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 1,
    // markers:true,
  }
})

gsap.to("#colon1", {
  y: 80,
  x: 100,
  scrollTrigger: {
    trigger: "#colon1",
    scroll: "body",
    start: "top 35%",
    end: "top 25%",
    scrub: 4,
    // markers: true,
  }
})
gsap.to("#colon2", {
  y: -30,
  x: -50,
  scrollTrigger: {
    trigger: "#colon2",
    scroll: "body",
    start: "top 95%",
    end: "top 90%",
    scrub: 4,
    // markers: true,
  }
})

gsap.from("#page4 h1", {
  y: 80,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroll: "body",
    start: "top 85%",
    end: "top 80%",
    scrub: 4,
    // markers: true,
  }
})