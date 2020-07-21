var play = document.querySelector("#restart");
var timeScale = document.querySelector("#timeScale02");
var timeScale = document.querySelector("#timeScale1");
var timeScale = document.querySelector("#timeScale4");
var message = document.querySelector(".message")


var tl = gsap.timeline({repeat: 6, yoyo: true, paused: true});

tl.to(".green", {duration: 1, x: 200})
  .to(".orange", {duration: 1, x: 200, scale: 0.2})
  .to(".grey", {duration: 1, x: 200, scale: 2, y: 20}, "greyAndPink") 
  .to(".pink", {duration: 1, x: 200, rotation: 360}, "greyAndPink"); 

restart.onclick = function() {
  tl.restart();
  showTimeScale();
}

timeScale02.onclick = function() {
  tl.timeScale(0.2); //animation will play at 20% normal speed (slower)
  showTimeScale();
}

timeScale1.onclick = function() {
  tl.timeScale(1); //animation will play at normal speed
  showTimeScale();
}

timeScale4.onclick = function() {
  tl.timeScale(4); //animation will play 4 times normal speed (faster)
  showTimeScale();
}

function showTimeScale() {
  message.innerHTML = "Current timeScale is " +  tl.timeScale(); // get the current timeScale
}

showTimeScale();
  
