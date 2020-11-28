// import { gsap } from "gsap";
// import { MotionPathPlugin } from "node_modules/gsap/MotionPathPlugin.js";

gsap.registerPlugin(MotionPathPlugin);

gsap.set(".plane", {scale: 1, autoAlpha: 1});

gsap.to("#plane", {
  duration: 30,
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "#planepath",
    align: "#planepath",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});
