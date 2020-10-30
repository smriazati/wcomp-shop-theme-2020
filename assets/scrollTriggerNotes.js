function animateFrom(elem) {
    console.log('gsap set animation')
    gsap.set(elem, 
        {
            backgroundColor: '#FFF', 
            color: '#000', 
            opacity: 1
        });
}
function animateTo(elem) {
    console.log('gsap to animation')
    gsap.to(elem, 
        {
            backgroundColor: '#000', 
            color: '#FFF',
            opacity: 1
        })
}

document.addEventListener("DOMContentLoaded", function() {
    console.log('hi gsap color change')
    const ref = document.querySelector('.bg-anim-trigger-start');
    // console.log('ref', ref);

    if (ref && gsap && ScrollTrigger) {
        console.log('everything exists, starting up animation conditions');
        const elem = ref;
        animateFrom(elem);
        ScrollTrigger.create({
            trigger: elem,
            markers: true,
            start: 'top bottom',
            end: 'bottom-=300px',
            onEnter: function() { animateTo(elem) }, 
            onEnterBack: function() { animateTo(elem) },
            onLeave: function() { animateFrom(elem) }, 
            onLeaveBack: function() { animateFrom(elem) }
        });
    }
});

// // https://codepen.io/GreenSock/pen/pojzxwZ
// function animateFrom(elem, direction) {
//     direction = direction | 1;
    
//     var x = 0,
//         y = direction * 100;
//     if(elem.classList.contains("gs_reveal_fromWhite")) {
//       x = -100;
//       y = 0;
//     } else if(elem.classList.contains("gs_reveal_fromRight")) {
//       x = 100;
//       y = 0;
//     }
//     gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
//       duration: 1.25, 
//       x: 0,
//       y: 0, 
//       autoAlpha: 1, 
//       ease: "expo", 
//       overwrite: "auto"
//     });
//   }
  
//   function hide(elem) {
//     gsap.set(elem, {autoAlpha: 0});
//   }
  
//   document.addEventListener("DOMContentLoaded", function() {
//     gsap.registerPlugin(ScrollTrigger);
    
//     gsap.utils.toArray(".index-section").forEach(function(elem) {
//       hide(elem); // assure that the element is hidden when scrolled into view
      
//       ScrollTrigger.create({
//         trigger: elem,
//         onEnter: function() { animateFrom(elem) }, 
//         onEnterBack: function() { animateFrom(elem, -1) },
//         onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
//       });
//     });
//   });

// function animateFrom(elem) {
//     console.log('animating from')
//     gsap.fromTo(elem, {
//         backgroundColor: "#fff", 
//         color: "#000"
//     }, 
//     {
//         duration: 1.25, 
//         backgroundColor: "#fff", 
//         color: "#000", 
//         ease: "expo"
//     });
// }     

// function hide(elem) {
//     console.log('hiding')
//     gsap.set(elem, {
//         backgroundColor: "#fff"
//     })
// }

// document.addEventListener("DOMContentLoaded", function() {
//     // gsap.registerPlugin(ScrollTrigger);

//     console.log('hi gsap bg color change');
//     const elem = document.querySelector('.bg-anim-trigger-start');

//     // console.log('elem', elem)
//     // hide(elem); // assure that the element is hidden when scrolled into view

//     // ScrollTrigger.create({
//     //     trigger: elem,
//     //     markers: true,
//     //     start: 'top bottom',
//     //     end: 'top',
//     //     onEnter: function() { animateFrom(elem) }, 
//     //     onEnterBack: function() { animateFrom(elem) },
//     //     onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
//     // });

//     const trigger = elem;
//     if (trigger) {
//         // console.log(trigger);
//         if (gsap) {
//             function animSetup() {
//                 trigger.style.backgroundColor = '#fff';
//                 trigger.style.color = '#000';
//             }

//             animSetup();
//             gsap.to(trigger, {
//                 ease: "none",
//                 opacity: 1,
//                 backgroundColor: '#000',
//                 color: '#fff',
//                 scrollTrigger: {
//                     trigger: trigger,
//                     start: 'top bottom',
//                     end: 'top',
//                     scrub: true,
//                     // markers: true,
//                     toggleActions: "play pause resume reset",
//                     // onEnter: ({progress, direction, isActive}) => console.log('enter', progress, direction, isActive),
//                     // onLeave: function() { animSetup() },
//                     // // onLeave: ({progress, direction, isActive}) => console.log('leave', progress, direction, isActive),
//                     // onEnterBack: ({progress, direction, isActive}) => console.log('enter back', progress, direction, isActive),
//                     // onLeaveBack: ({progress, direction, isActive}) => console.log('leave back', progress, direction, isActive),
//                     // onScrubComplete: ({progress, direction, isActive}) => console.log('onscrubcomplete', progress, direction, isActive)
//                 }
//             });
//         }
//     }


// });


// // gsap.fromTo(
// //     "img",
// //     { webkitFilter: "brightness(0.1)", filter: "brightness(0.1)" },
// //     {
// //       duration: 3,
// //       webkitFilter: "brightness(3)",
// //       filter: "brightness(3)",
// //       yoyo: true,
// //       repeat: -1,
// //       repeatDelay: 0.5,
// //       ease: "none"
// //     }
// //   );

// // gsap.to("#shopify-section-1603141865d9cda69d", {
// //     yPercent: -100,
// //     ease: "none",
// //     scrollTrigger: {
// //       trigger: "#shopify-section-1603141865d9cda69d",
// //       // start: "top bottom", // the default values
// //       // end: "bottom top",
// //       scrub: true,
// //       markers: true
// //     }
// // });

// // https://greensock.com/cheatsheet/
// // https://greensock.com/st-demos/page/2/?d=19
//     // scrollTrigger: {
//     // trigger: ".selector", // selector or element
//     // start: "top center",  // [trigger] [scroller] positions
//     // end: "20px 80%", // [trigger] [scroller] positions
//     // scrub: true, // or time (in seconds) to delay
//     // pin: true, // or selector or element to pin
//     // markers: true, // only during development!
//     // toggleActions: "play pause resume reset",
//     // // other actions: complete reverse none
//     // toggleClass: "active",
//     // id: "my-id",
//     // anticipatePin: 1, // can help avoid flash
//     // snap: 1 / 10, // progress increment
//     // pinReparent: true, // moves to documentElement during pin
//     // once: true,
//     // endTrigger: ".selector", // selector or element
//     // // other callbacks: 
//     // // onLeave, onEnterBack, onLeaveBack, onUpdate,
//     // // onToggle, onRefresh, onRefreshInit, onScrubComplete

  