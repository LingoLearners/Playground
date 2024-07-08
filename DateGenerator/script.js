// July 7th, 2024
var started = false;
var count = 0;
var timeLimitSeconds = 60;


function generateDate(){
  count++;
  var valueDisplay = document.getElementById("valueDisplay");  
  valueDisplay.innerText = getRandomDate();
  var countDisplay = document.getElementById("countDisplay");
  countDisplay.innerText = count;
  
  if(!started) startTimer();
}

function getRandomDate(){
  var currentDate = new Date();
  var date = randomDate(new Date(1880, 1, 1), new Date(currentDate.getFullYear() + 10, 1, 1));

  var month = date.toLocaleString('default', {month: 'long'});
  var day = date.getDate();
  var year = date.getFullYear();
  return month + " "  + day + ", " + year;
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
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