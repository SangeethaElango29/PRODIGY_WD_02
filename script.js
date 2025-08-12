let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let lapList = document.getElementById("laps");

function updateDisplay() {
  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  display.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (interval) return;
  interval = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  clearInterval(interval);
  interval = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  lapList.innerHTML = "";
}

function lap() {
  const li = document.createElement("li");
  li.innerText = display.innerText;
  lapList.appendChild(li);
}
