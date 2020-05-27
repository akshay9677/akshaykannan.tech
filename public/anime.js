// const anime = require("animejs");

// var roundLogEl = document.querySelector('.downArrow');

// anime({
//   targets: roundLogEl,
// 	rotate: 360,
// 	loop: true,
// 	direction: 'alternate',
// 	easing: 'easeInCubic'
// 	scaleX: {
// 		value: 1.05,
// 		duration: 150,
// 		delay: 268
// 	}
  
// });

var loca1 = document.querySelector('.loc1');
var loca2 = document.querySelector('.loc2');
var loca3 = document.querySelector('.loc3');

anime({
    targets: [loca1,loca2,loca3],
    translateY: '0.5rem',
      duration: 300,
      loop: true,
      direction: 'alternate',
      easing: 'easeInCubic',
      scaleX: {
          value: 1.05,
          duration: 150,
          delay: 268
      }
    
  });