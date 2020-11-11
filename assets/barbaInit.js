// console.log('barba init');

function preventBarbaIntoShop() {
  const els = document.querySelectorAll("a[href^='/collections/']");
  // console.log('preventing barba in shop... ', els);
  els.forEach(el => el.classList.add('prevent'));
  const els2 = document.querySelectorAll("a[href^='/products/']");
  // console.log('preventing barba in shop... ', els);
  els2.forEach(el => el.classList.add('prevent'));

}

function initializeQuoteSlider(newDoc) {
    // check for slider 
    const slider = newDoc.querySelector('.quotes-slider');
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
      const prev = newDoc.querySelector('.slick-prev');
      const next = newDoc.querySelector('.slick-next');

      prev.innerHTML = '←';
      next.innerHTML = '→';
    }
}
function animateFrom(elem) {
  //console.log('gsap set animation')
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
  const startSooner = 0;
  // console.log('ref', ref);

  if (ref && gsap && ScrollTrigger) {
      //console.log('everything exists, starting up animation conditions');
      const elem = ref;
      // console.log('element offset top', elem.offsetTop);
      // console.log('previous div height?', previousdivheight);
      const startPt = (elem.offsetTop - previousdivheight) - startSooner;
      const endPt = (startPt + elem.offsetHeight + startSooner) - endOffset;
      console.log(startPt, endPt);
      animateFrom(elem);
      
      ScrollTrigger.create({
          trigger: elem,
          // markers: true,
          start: startPt,
          end: endPt,
          onEnter: function() { animateTo(elem) }, 
          onEnterBack: function() { animateTo(elem) },
          onLeave: function() { animateTo2(elem) }, 
          onLeaveBack: function() { animateTo2(elem) }
      });
  }
}

function textSwapAnimation() {
  const atRef1 = document.getElementById('at-1');
  const atRef2 = document.getElementById('at-2');
  const atRef3 = document.getElementById('at-3');
  if (atRef1) {
    gsap.set('#at-1', 
    {
        display: 'none',
        opacity: 0
    });

  }
  if (atRef2) {
    gsap.set('#at-2', 
    {
        display: 'none',
        opacity: 0
    });
  }

  if (atRef3) {
    gsap.set('#at-3', 
    {
        display: 'none',
        opacity: 0
    });
  }


  var tl = gsap.timeline({repeat: -1, repeatDelay: 0});
  if (atRef1) {
    tl.to("#at-1", {display: 'inline', opacity: 1, duration: 3});
    tl.to("#at-1", {display: 'none', opacity: 0, duration: 1});
  }
  if (atRef2) {
    tl.to("#at-2", {display: 'inline', opacity: 2, duration: 3});
    tl.to("#at-2", {display: 'none', opacity: 0, duration: 1});
  }
  if (atRef3) {
    tl.to("#at-3", {display: 'inline', opacity: 1, duration: 3});
    tl.to("#at-3", {display: 'none', opacity: 0, duration: 1});
  }

}


// initialize barba

barba.init({
    views: [{
        namespace: 'index',
        beforeEnter(data) {
          colorChange(data.current.container.offsetHeight);
        },
        beforeOnce(data) {
          //console.log('here we go', data)
        }
      }, {
        namespace: 'corporate',
        beforeEnter(data) {
          initializeQuoteSlider(data.next.container);
          textSwapAnimation();
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
        once() {
          document.body.style.backgroundColor = '#D0CEC9'
        },
        beforeEnter(data) {
          document.body.style.backgroundColor = '#D0CEC9'
        },
        beforeLeave() {
          document.body.style.backgroundColor = '#fff'
        }
    }],
    transitions: [{
      name: 'default-transition',
      once(data) {
        console.log(data);
        gsap.set(data.next.container, {
          opacity: 0,
          y: '-5vh'
        });
        preventBarbaIntoShop();
      },
      afterOnce(data) {
        gsap.to(data.next.container, {
          opacity: 1,
          duration: 1.1,
        });
        if (data.next.namespace === 'corporate') {
//          console.log('after once corporate')
          textSwapAnimation();
        }
        if (data.next.namespace === 'index') {
          colorChange(0);
        }
      },
      leave(data) {
        gsap.to(data.current.container, {
          opacity: 0,
          ease: "power1.out",
          duration: 1
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
    prevent: ({ el }) => el.classList && el.classList.contains('prevent')
  });

  barba.hooks.enter((data) => {
    // console.log(data.current.container.offsetHeight);
    console.log(data.next.namespace);
    window.scrollTo(0, 0);
    // sectionAnimation(data.current.container.offsetHeight);
    preventBarbaIntoShop();
  });


