// function animateFrom(elem) {
//     // console.log('gsap set animation')
//     gsap.set(elem, 
//         {
//             backgroundColor: '#FFF', 
//             color: '#ADABAB', 
//             opacity: 1
//         });
// }
// function animateTo(elem) {
//     // console.log('gsap to animation')
//     gsap.to(elem, 
//         {
//             backgroundColor: '#ADABAB', 
//             color: '#FFF',
//             opacity: 1
//         })
// }

// function animateTo2(elem) {
//     // console.log('gsap to animation')
//     gsap.to(elem, 
//         {
//             backgroundColor: '#FFF', 
//             color: '#ADABAB', 
//             opacity: 1
//         })
// }

// document.addEventListener("DOMContentLoaded", function() {
//     console.log('hi gsap color change')
//     const ref = document.querySelector('.gsap-bg-color-change');
//     const endOffset = 150;
//     // console.log('ref', ref);

//     if (ref && gsap && ScrollTrigger) {
//         console.log('everything exists, starting up animation conditions');
//         const elem = ref;
//         console.log(elem);
//         animateFrom(elem);
//         ScrollTrigger.create({
//             trigger: elem,
//             markers: true,
//             start: 'center bottom',
//             end: `bottom+=${endOffset}px`,
//             onEnter: function() { animateTo(elem) }, 
//             onEnterBack: function() { animateTo(elem) },
//             onLeave: function() { animateTo2(elem) }, 
//             onLeaveBack: function() { animateTo2(elem) }
//         });
//     }
// });