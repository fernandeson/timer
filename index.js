// -------/ READ ME /-------
// This is a Stopwatch / Countdown app made with plain HTML, CSS, JS.
// It's not responsive yet.
// contact-me at twitter: @arrobanatalia

// -------/ GLOBAL VARIABLES /-------
var time = 0;
var clockType = "Stopwatch";
var running = 0; // 0 = False (timer not running) ; 1 = True (timer running);

// -------/ HTML ELEMENTS /-------
var clockNumbers = document.getElementsByClassName("clock-numbers");
var title = document.getElementById("title");
var buttonStartPause = document.getElementById("start-pause-btn");
var buttonStop = document.getElementById("stop-btn");
var buttonSettings = document.getElementById("settings-btn");
var settingsContainer = document.getElementById("settings-container");
var dropdownSelect = document.getElementById("dropdown-select");
var buttonNumbers = document.getElementsByClassName("btn-number");
var buttonClear = document.getElementById("clear-btn");
var buttonSave = document.getElementById("save-btn");

// -------/ EVENT LISTENERS /-------
// Start-Pause Button
buttonStartPause.addEventListener("click", function(){
  startPause();
});

// Stop Button - restarts clock
buttonStop.addEventListener("click", function(){
  reset();
});

// Settings Button - shows settings container
buttonSettings.addEventListener("click", function() {
  if (settingsContainer.class = "settings-container-off") {
    settingsContainer.classList.toggle("settings-container-on");
  } else if (settingsContainer.class = "settings-container-on") {
    settingsContainer.classList.toggle("settings-container-off");
  }
});

// Dropdown Select - changes title according to type of clock and sets clockType
dropdownSelect.addEventListener("change", function() {
  title.innerHTML = dropdownSelect.value.toUpperCase();
  setClockType();
});

// Numbers Buttons - when each pressed, sets time that user wants for Countdown
for (i=0; i<buttonNumbers.length; i++){
  buttonNumbers[i].addEventListener("click", function(){
    var x = this.innerHTML;
    var one = clockNumbers[1].innerHTML;
    var two = clockNumbers[2].innerHTML;
    var three = clockNumbers[3].innerHTML;
    var four = clockNumbers[4].innerHTML;
    var five = clockNumbers[5].innerHTML;
    clockNumbers[0].textContent = one;
    clockNumbers[1].textContent = two;
    clockNumbers[2].textContent = three;
    clockNumbers[3].textContent = four;
    clockNumbers[4].textContent = five;
    clockNumbers[5].textContent = x;
  });
};

// Clear Button - clears time that user wants for countDown
buttonClear.addEventListener("click", function(){
  for (i=0; i<clockNumbers.length; i++) {
    clockNumbers[i].textContent = "0";
  }
});

// Save Button
buttonSave.addEventListener("click", function(){
  if (settingsContainer.class = "settings-container-off") {
    settingsContainer.classList.toggle("settings-container-on");
  } else if (settingsContainer.class = "settings-container-on") {
    settingsContainer.classList.toggle("settings-container-off");
  }
});

// -------/ FUNCTIONS /-------
// Set type of clock user wants
function setClockType() {
  clockType = dropdownSelect.value;
};

// Set time after user's changes
function setTime() {
  var hours = parseInt(clockNumbers[0].textContent + clockNumbers[1].textContent);
  var minutes = parseInt(clockNumbers[2].textContent + clockNumbers[3].textContent);
  var seconds = parseInt(clockNumbers[4].textContent + clockNumbers[5].textContent);
  time = hours * 3600 + minutes * 60 + seconds;
};

// Start or Pause clock
function startPause() {
  if (running === 0) {
    running = 1;
    setClockType();
    setTime();
    buttonStartPause.style.backgroundImage = "url('///C:/Users/Natália/repos/WebDev/stopwatch/images/pause.png')";
    if (clockType === "Countdown") {
      countDown();
    } else if (clockType === "Stopwatch") {
      stopWatch();
    }
  } else {
    running = 0;
    buttonStartPause.style.backgroundImage = "url('///C:/Users/Natália/repos/WebDev/stopwatch/images/start.png')";
  }
};

// Reset clock
function reset() {
  running = 0;
  buttonStartPause.style.backgroundImage = "url('///C:/Users/Natália/repos/WebDev/stopwatch/images/start.png')";
  time = 0;
  for (i=0; i<=clockNumbers.length; i++) {
    clockNumbers[i].textContent = "0";
  }
};

// Countdown function
function countDown() {
  if (running === 1) {
    setTimeout(function() {
      time--;
      if (time <= 0) {
        running = 0;
        return;
      };
      var h = Math.floor(time / 3600);
      var m = Math.floor((time % 3600) / 60);
      var s = (time % 3600) % 60;
      clockNumbers[0].textContent = Math.floor((h / 10) % 10);
      clockNumbers[1].textContent = Math.floor((h / 1) % 10);
      clockNumbers[2].textContent = Math.floor((m / 10) % 10);
      clockNumbers[3].textContent = Math.floor((m / 1) % 10);
      clockNumbers[4].textContent = Math.floor((s / 10) % 10);
      clockNumbers[5].textContent = Math.floor((s / 1) % 10);
      countDown();
    }, 1000);
  }
};

// Stopwatch function
function stopWatch() {
  if (running === 1){
    setTimeout(function(){
      time ++;
      var h = Math.floor(time/3600);
      var m = Math.floor((time % 3600)/60);
      var s = (time % 3600) % 60;
      clockNumbers[0].textContent = Math.floor((h / 10) % 10);
      clockNumbers[1].textContent = Math.floor((h / 1) % 10);
      clockNumbers[2].textContent = Math.floor((m / 10) % 10);
      clockNumbers[3].textContent = Math.floor((m / 1) % 10);
      clockNumbers[4].textContent = Math.floor((s / 10) % 10);
      clockNumbers[5].textContent = Math.floor((s / 1) % 10);
      stopWatch();
    }, 1000);
  }
};
