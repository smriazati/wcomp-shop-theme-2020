console.log('barba init');

// home, corporate, story, giveadamn, contact us, pages (like shipping, faq, other?)
// collections, product

// set the NAMESPACES

const container = document.getElementById('PageContainer');

const corporate = container.querySelector('.corporate-template')
const story = container.querySelector('.story-template')
const giveadamn = container.querySelector('.giveadamn-template')
const index = container.querySelector('.index-template')

const isShop = false;


function initializeQuoteSlider() {
    // check for slider 
    const slider = document.querySelector('.quotes-slider');
    if (slider) {
      $('.quotes-slider').slick({
        centerMode: false,
        infinite: true,
        fade: true,
        centerPadding: '60px',
        slidesToShow: 1,
        adaptiveHeight: true
      });

      // get arrows
      const prev = document.querySelector('.slick-prev');
      const next = document.querySelector('.slick-next');

      prev.innerHTML = '←';
      next.innerHTML = '→';
    }
}
function animateFrom(elem) {
  console.log('gsap set animation')
  gsap.set(elem, 
      {
          backgroundColor: '#FFF', 
          color: '#ADABAB', 
          opacity: 1
      });
}
function animateTo(elem) {
  // console.log('gsap to animation')
  gsap.to(elem, 
      {
          backgroundColor: '#ADABAB', 
          color: '#FFF',
          opacity: 1
      })
}

function animateTo2(elem) {
  // console.log('gsap to animation')
  gsap.to(elem, 
      {
          backgroundColor: '#FFF', 
          color: '#ADABAB', 
          opacity: 1
      })
}

function colorChange(previousdivheight) {
  // console.log('hi gsap color change')
  const ref = document.querySelector('.gsap-bg-color-change');
  const endOffset = 150;
  // console.log('ref', ref);

  if (ref && gsap && ScrollTrigger) {
      console.log('everything exists, starting up animation conditions');
      const elem = ref;
      // console.log('element offset top', elem.offsetTop);
      // console.log('previous div height?', previousdivheight);
      const startPt = elem.offsetTop - previousdivheight;
      const endPt = (startPt + elem.offsetHeight) - endOffset;
      // console.log(startPt, endPt);
      animateFrom(elem);
      
      ScrollTrigger.create({
          trigger: elem,
          markers: true,
          start: startPt,
          end: endPt,
          onEnter: function() { animateTo(elem) }, 
          onEnterBack: function() { animateTo(elem) },
          onLeave: function() { animateTo2(elem) }, 
          onLeaveBack: function() { animateTo2(elem) }
      });
  }
}

// initialize barba

barba.init({
    views: [{
        namespace: 'index',
        beforeEnter(data) {
          colorChange(data.current.container.offsetHeight);
        }
      }, {
        namespace: 'corporate',
        beforeEnter(data) {
          initializeQuoteSlider();
        }
     }, {
        namespace: 'story',
        beforeEnter(data) {

        }
    }, {
        namespace: 'giveadamn',
        beforeEnter(data) {

        }
    }, {
        namespace: 'page',
        beforeEnter(data) {

        }
    }, {
        namespace: 'contact',
        beforeEnter(data) {

        }
    }],
    transitions: [{
      name: 'default-transition',
      leave(data) {
        gsap.to(data.current.container, {
          opacity: 0,
          ease: "power1.out",
          duration: 0.5
        });
      },
      enter(data) {
        // console.log(data.next.container);
        gsap.set(data.next.container, {
          opacity: 0,
          y: '-5vh'
        });
        gsap.to(data.next.container, {
          opacity: 1,
          duration: 1.1,
          y: 0
        });
      }
    }],
    // define a custom function that will prevent Barba
    // from working on links that contains a `prevent` CSS class
    // prevent: ({ el }) => el.classList && el.classList.contains('prevent')
  });

  barba.hooks.enter((data) => {
    // console.log(data.current.container.offsetHeight);
    console.log(data.next.namespace);
  });