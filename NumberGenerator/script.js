// July 1st, 2024
var started = false;
var count = 0;
var timeLimitSeconds = 60;


function generateNumber(){
  count++;
  var numDisplay = document.getElementById("numDisplay");
  var randomNum = getRandomInt(0, 100);
  numDisplay.innerText = randomNum;
  var countDisplay = document.getElementById("countDisplay");
  countDisplay.innerText = count;
  
  if(!started) startTimer();
}

function getRandomInt(min, max) {
/* Code borrowed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max) + 1;
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function startTimer(){
  started = true;
  var now = new Date().getTime();
  var countDownTime = new Date(now);
  countDownTime.setSeconds(countDownTime.getSeconds() + timeLimitSeconds + 1);
  
  var x = setInterval(function() {
    now = new Date().getTime();
          
    var distance = countDownTime - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var timeDisplay = document.getElementById("time");
    timeDisplay.innerText = seconds;
          
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById("generateButton").disabled = true;
      alert("You translated " + count + " numbers in " + timeLimitSeconds +" seconds!");
    }        
  }, 1000);
}