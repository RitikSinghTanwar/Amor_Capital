var locomotiveJS = function(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveJS();

var loderAnimationv = function(){

// Mouse Follower :
Shery.mouseFollower({
});

// Mouse Magnet Effect :
Shery.makeMagnet("#nav_right h3" /* Element to target.*/, {
});


// GSAP Code
var tl = gsap.timeline()

tl.from("#loader_container img , #loader_container h1",{
    y:300,
    rotate:90,
    opacity:0,
    duration:.5,
    delay:1,
    stagger:.1
})

tl.to("#loader_container img , #loader_container h1",{
    y:-300,
    // rotate:90,
    opacity:0,
    duration:.5,
    stagger:.1
})

var loader = document.querySelector("#loader");

var count = 0;
var timer = setInterval(function(){
    if(count === 101){
        clearInterval(timer)
    }
    else{
        gsap.to("#loader",{
            display:"none",
        })
    }
    count++;
},20)

}

loderAnimationv();

// Page 1:

var page1_animation = function(){

var tl = gsap.timeline()

tl.from("#page1_container1 img , #page1_container1 h1",{
    y:300,
    // rotate:-90,
    opacity:0,
    duration:.5,
    delay:3,
    stagger:.1
})

tl.from("#page1_container2 h2",{
    x:100,
    opacity:0,
    duration:.5,
    stagger:.3
})

tl.from("#nav_left img",{
    y:300,
    opacity:0,
    duration:.5,
})

tl.from("#nav_right h3",{
    y:300,
    opacity:0,
    duration:.5,
    stagger:.2
})

// Text backgroung images
document.addEventListener("mousemove",function(dets){
    gsap.to("#hover_img",{
        x:dets.x,
        y:dets.y
    })
})

document.querySelector("#page1_container1").addEventListener("mouseenter",function(){
    gsap.to("#hover_img",{
        opacity:1
    })
})

document.querySelector("#page1_container1").addEventListener("mouseleave",function(){
    gsap.to("#hover_img",{
        opacity:0
    })
})

}

page1_animation();

// Page 3 :

var page3_animtion = function(){

var left1 = document.querySelector("#left1");
var left2 = document.querySelector("#left2");
var left3 = document.querySelector("#left3");

var para1 = document.querySelector("#para1");
var para2 = document.querySelector("#para2");
var para3 = document.querySelector("#para3");

left1.addEventListener("mouseenter",function(){
    para1.style.display = "initial";
    para2.style.display = "none";
    para3.style.display = "none";
    gsap.from("#para1",{
        x:100,
        opacity:0,
        duration:.5
    })
})
left2.addEventListener("mouseenter",function(){
    para1.style.display = "none";
    para2.style.display = "initial";
    para3.style.display = "none";
    gsap.from("#para2",{
        x:50,
        opacity:0,
        duration:.5
    })
})
left3.addEventListener("mouseenter",function(){
    para1.style.display = "none";
    para2.style.display = "none";
    para3.style.display = "initial";
    gsap.from("#para3",{
        x:50,
        opacity:0,
        duration:.5
    })
})
}

page3_animtion();


// Page 4 :

gsap.to("#page4 h1",{
    transform:"translateX(-320%)",
    color:"#f3ff99",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        scrub:5,
        pin:true,
        // markers:true,
        start:"top 100%",
        end:"top -100%",
    }
})


