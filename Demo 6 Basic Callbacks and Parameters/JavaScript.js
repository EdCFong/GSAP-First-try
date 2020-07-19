var output = document.querySelector("#output");

gsap.to(".green", {
  duration: 2,
  x: 300,
  onStart: showMessage, 
  onStartParams: ["the green div has started to move"], 
  onComplete: showMessage, 
  onCompleteParams: ["the green div is done moving"],
  delay: 1
});
gsap.to(".orange", {
  duration: 2,
  x: 300, 
  onStart: showMessage, 
  onStartParams: ["the orange div has started to move"], 
  onComplete: showMessage, 
  onCompleteParams: ["the orange div is done moving"],
  delay: 5
});

function showMessage(message) {
  output.innerHTML += message + "</br>";
}


