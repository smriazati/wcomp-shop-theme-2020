function animateFrom(elem) {
    // console.log('gsap set animation')
    gsap.set(elem, 
        {
            backgroundColor: '#FFF', 
            color: '#000', 
            opacity: 1
        });
}
function animateTo(elem) {
    // console.log('gsap to animation')
    gsap.to(elem, 
        {
            backgroundColor: '#000', 
            color: '#FFF',
            opacity: 1
        })
}

document.addEventListener("DOMContentLoaded", function() {
    // console.log('hi gsap color change')
    const ref = document.querySelector('.gsap-bg-color-change');
    const endOffset = 300;
    // console.log('ref', ref);

    if (ref && gsap && ScrollTrigger) {
        // console.log('everything exists, starting up animation conditions');
        const elem = ref;
        animateFrom(elem);
        ScrollTrigger.create({
            trigger: elem,
            // markers: true,
            start: 'top bottom',
            end: `bottom-=${endOffset}px`,
            onEnter: function() { animateTo(elem) }, 
            onEnterBack: function() { animateTo(elem) },
            onLeave: function() { animateFrom(elem) }, 
            onLeaveBack: function() { animateFrom(elem) }
        });
    }
});