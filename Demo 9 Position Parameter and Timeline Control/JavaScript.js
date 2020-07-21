var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var resume = document.querySelector("#resume");
var reverse = document.querySelector("#reverse");
var restart = document.querySelector("#restart");


//create a TimelineMax and make it repeat 3 times with 1 second between iterations
var tl = gsap.timeline({repeat: 3, repeatDelay: 1});

tl.to(".green", {duration: 1, x: 400})
  //start 1 second after previous tween ends (gap)
  .to(".orange", {duration: 1, x: 400, scale: 0.2}, "+=1")
  //add a label at the end
  .addLabel("greyAndPink")
  //start both of these animations at the same time, at the "greyAndPink" label.
  .to(".grey", {duration: 1, x: 400, scale: 2, y: 20}, "greyAndPink") 
  .to(".pink", {duration: 1, x: 400, rotation: 360}, "greyAndPink"); 

  
  
  
  play.onclick = function() {
    tl.play();
  }
  
  pause.onclick = function() {
    tl.pause();
  }
  
  resume.onclick = function() {
    tl.resume();
  }
  
  reverse.onclick = function() {
    tl.reverse();
  }
  
  restart.onclick = function() {
    tl.restart();
  }
  
