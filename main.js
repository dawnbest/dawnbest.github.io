//GSAP Stuff

gsap.to(".monster", {duration: 2, xPercent: -25, ease: 'Elastic.easeInOut'});
gsap.from(".monban", {duration: 2, x:-100, ease: 'Bounce.out'});
gsap.from("main", {opacity: 0, duration: 1, yPercent:-50});

//JQuery Stuff

var current_h = null;
var current_w = null;

$('.resize').hover(
    function(){
        current_h = $(this, 'img')[0].height;
        current_w = $(this, 'img')[0].width;
        $(this).animate({width: (current_w * 3), height: (current_h * 3)}, 300);
    },
    function(){
        $(this).animate({width: current_w + 'px', height: current_h + 'px'}, 300);
    }
);