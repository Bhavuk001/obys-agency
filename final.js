function loadigAnimation () {
    var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger: 0.2,
    duration: 0.4,
    delay:0.5,
})
tl.from("#line1-part1",{
 opacity: 0,
 onStart: function(){
     var timer = document.querySelector("#line1-part1 h5");
     var grow = 0;
     setInterval(function(){
    if(grow<100){
        grow++
        timer.innerHTML = grow;
    }else{
        timer.innerHTML = grow;
    }
},30)}
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1,
})
tl.to("#loader",{
    opacity: 0,
    duration: 0.3,
    delay: 3.5,
})
tl.from("#page1",{
    y:1200,
    opacity:1,
    delay:0.2,
    duration:0.4,
    ease:Power3,
})
tl.set("#loader",{    // added own...
    display:"none",
    pointerEvents:"none",
});
tl.from("#nav",{
    opacity:0,
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:100,
    stagger:0.2,
})
}

function cursorAnimation(){
    document.addEventListener("mousemove",function(circle){
        gsap.to("#cursor",{
            left:circle.x,
            top:circle.y
        })
    })
    Shery.makeMagnet("#nav-part2 h4");
}

loadigAnimation();
cursorAnimation();