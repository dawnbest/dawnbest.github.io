//GSAP stuff

gsap.to(".monster", {duration: 2, xPercent: -25, ease: 'Elastic.easeInOut'});
gsap.from(".monban", {duration: 2, x:-100, ease: 'Bounce.out'});
gsap.from("main", {opacity: 0, duration: 1, yPercent:-50});

//TweenLite.set("div.green", {perspective:1000});
//TweenLite.set("div.green", {transformStyle:"preserve-3d", scaleX:0.8});
//TweenLite.set("div.green", {rotationY:-180});
//TweenLite.set("div.green", {backfaceVisibility:"hidden"});

var tl = new TimelineMax({
  paused:true
});

tl.to("div.green", 0.6, {
  scaleX:1, 
  transformOrigin:"50% 50%", 
  ease:Cubic.easeOut
});

$(document).on("mouseenter", "div.green", function() {
    tl.play();
}).on("mouseleave", "div.green", function(){
    tl.reverse();
});
