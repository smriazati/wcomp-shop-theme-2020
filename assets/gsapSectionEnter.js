// add class .section-animation to fade in sections 
document.addEventListener("DOMContentLoaded", function() {

    gsap.utils.toArray('.section-animation').forEach((el, i) => {
        gsap.set(el, {
            opacity: 0,
            y: '100px'
        })
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                // markers: true,
                scrub: i * 0.2
            },
            opacity: 1,
            y: 0
        });
    });
     
});