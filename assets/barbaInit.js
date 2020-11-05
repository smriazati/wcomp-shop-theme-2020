// console.log('barba init');

// barba.init({
//     transitions: [{
//       name: 'default-transition',
//       leave(data) {
//         return gsap.to(data.current.container, {
//           opacity: 0,
//           transform: 'translateX(-20vw)'
//         });
//       },
//       enter(data) {
//         return gsap.from(data.next.container, {
//           opacity: 0,
//           transform: 'translateX(20vw)'
//         });
//       }
//     }],
//     // define a custom function that will prevent Barba
//     // from working on links that contains a `prevent` CSS class
//     prevent: ({ el }) => el.classList && el.classList.contains('prevent')
//   });
