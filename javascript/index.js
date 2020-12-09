// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

var animation;

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// var def_mobile = 991; // Your mobile breakpoint
// var isDesktop = function(){
//   if(window.innerWidth <= def_mobile || "ontouchstart" in document.documentElement){
//         return false;
//   } else {
//         return true;
//   }
// };

// console.log('What\'s the width?:  ' + window.innerWidth);
// console.log('Is it desktop?:  ' + isDesktop());

var viewWidth = window.innerWidth;

if (viewWidth <= 599) {
  gsap.set("#paperplane", {scale: 0.4, autoAlpha: 1, transformOrigin: "50% 50%"});
} else if (viewWidth <= 768) {
  gsap.set("#paperplane", {scale: 0.6, autoAlpha: 1, transformOrigin: "50% 50%"});
} else if (viewWidth <= 992) {
  gsap.set("#paperplane", {scale: 0.8, autoAlpha: 1, transformOrigin: "50% 50%"});
} else {
  gsap.set("#paperplane", {scale: 1, autoAlpha: 1, transformOrigin: "50% 50%"});
}

// gsap.set("#paperplane", {scale: 1, autoAlpha: 1});
// gsap.set("#paperplane", {transformOrigin: "50% 50%"});

animation = gsap.to("#paperplane", {
  scrollTrigger: {
    trigger: "#planepath",
    start: "top 30%",
    end: "bottom 80%",
    scrub: true,
    markers: true,
  //   onUpdate: self => {
  //     gsap.to("#paperplane", {
  //       rotation: () => self.direction === 1 ? 0 : -180, overwrite: "auto"
  //     });
  //   }
  },
  duration: 40,
  ease: "none",
  immediateRender: true,
  motionPath: {
    path: "#planepath",
    align: "#planepath",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  }
});


// gsap.to("#plane", {
//   duration: 20,
//   // repeat: 12,
//   // repeatDelay: 3,
//   // yoyo: true,
//   ease: "power1.inOut",
//   motionPath:{
//     path: "#planepath",
//     align: "#planepath",
//     autoRotate: true,
//     alignOrigin: [0.5, 0.5]
//   }
// });
