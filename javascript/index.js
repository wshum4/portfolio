// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

var animation;

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

var viewWidth = window.innerWidth;
console.log(viewWidth);
// console.log(typeof window);

// compare viewWidth to determine size of paperplane upon loading page
  if (viewWidth <= 599) {
   gsap.set("#paperplane", {scale: 0.4, autoAlpha: 1});
  } else if (viewWidth <= 768) {
   gsap.set("#paperplane", {scale: 0.6, autoAlpha: 1});
  } else if (viewWidth <= 992) {
   gsap.set("#paperplane", {scale: 0.8, autoAlpha: 1});
  } else {
   gsap.set("#paperplane", {scale: 1, autoAlpha: 1});
  }

// adjustScale function determines compares which breakpoint
function adjustScale (windowSize) {
  console.log(windowSize);
  if (windowSize <= 599) {
    return gsap.set("#paperplane", {scale: 0.4, autoAlpha: 1});
  } else if (windowSize <= 768) {
    return gsap.set("#paperplane", {scale: 0.6, autoAlpha: 1});
  } else if (windowSize <= 992) {
    return gsap.set("#paperplane", {scale: 0.8, autoAlpha: 1});
  } else {
    return gsap.set("#paperplane", {scale: 1, autoAlpha: 1});
  }
};

// auto refresh
function refresh() { location.reload(); }

// when window resizes, will call adjustScale function to compare viewWidth
window.onresize = function () {
  adjustScale(viewWidth);
  refresh();
};

// animatino for airplane to link scrolling to flying on the svg path
animation = gsap.to("#paperplane", {
  scrollTrigger: {
    trigger: "#planepath",
    start: "top 30%",
    end: "bottom 80%",
    scrub: true,
    markers: true,
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


