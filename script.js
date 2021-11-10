let startClock;
let seconds;
let totalTime = 0;
let currentTime = 0;
//let seconds2;
let i = 0;
let time = [];
let exercise = [];
let settingsButton = document.getElementById("settings");
let intervalInput = document.getElementById("intervalTime");
let exerciseInput = document.getElementById("exercise");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let currentIntervalCounter = 0;  // used to countdown the current interval 
let currentInterval = 0;  // used to track the interval we are currently on
let currentExercise = 0; //used to track the exercise we are currently on
let countDownTimerVariable;
let idDisplay = document.getElementById("idDisplayTime");
let timeDiv = document.createElement('div');
let exerDiv = document.createElement('div');
let numExer = 1;
settingsButton.onclick = function() {
  
  
  time[i] = Math.floor(intervalInput.value * 1);
  exercise[i] = exerciseInput.value;
  
  exerDiv.innerHTML += numExer + "." + exercise[i] + "-" + time[i] +"seconds" + "<br>";
  exerDiv.setAttribute('id', 'exerList');
  document.getElementById("listOfExer").appendChild(exerDiv);
  numExer++;

  
  timeDiv.innerHTML = time[i] + "<br>";
  timeDiv.setAttribute('id', 'timeList');
  document.body.appendChild(timeDiv);
  timeDiv = document.getElementById("display").insertBefore(timeDiv, idDisplay);
    for(let g = 0; g < time.length; g++){
      totalTime += time[g];
    }
   i++;
  pauseButton.onclick = function(){
    clearInterval(countDownTimerVariable);
    console.log("hi");
  }
  reset();
  }

  startButton.onclick = function () {
	   currentInterval = 0;
     currentExercise = 0
	   currentIntervalCounter = time[currentInterval];
	   countDownTimerVariable = setInterval(countdown, 1000);
	}

function reset() {
    clearInterval(startClock);
    seconds = intervalInput.value;
  }
// runs on 1 s interval
function countdown() {
  currentIntervalCounter--;
   
   // move forward 1 interval
   if (currentIntervalCounter < 0) {
      currentInterval++;
      currentExercise++;
	  if (currentInterval < time.length) {
	     currentIntervalCounter = time[currentInterval]; 
	  } else {
	     currentInterval = -1;
	  }
   }  
   timeDiv.innerHTML = currentIntervalCounter;
    timeDiv.innerHTML += "<br>" + exercise[currentExercise];
   totalTime--;
   
   if (totalTime <=  0 || currentInterval == -1) {
       timeDiv.innerHTML = "Done!";
       clearInterval(countDownTimerVariable);
   }
} // countdown

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}



