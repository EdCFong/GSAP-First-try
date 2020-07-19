var tween = gsap.to(".green", {
  duration: 4, 
  x: 750, 
  rotation: 360, 
  ease: "none", 
  paused: true
});

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();