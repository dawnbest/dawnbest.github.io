//GSAP Stuff

gsap.to(".monster", {duration: 2, xPercent: -25, ease: 'Elastic.easeInOut'});
gsap.from(".monban", {duration: 2, x:-100, ease: 'Bounce.out'});
gsap.to(".awayban", {duration: 2, x:-200, ease: 'Bounce.out'});
gsap.from("main", {opacity: 0, duration: 1, yPercent:-50});

//JQuery Stuff
