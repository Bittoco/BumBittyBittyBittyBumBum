var panel_one = document.getElementById("panel_one");
var panel_two = document.getElementById("panel_two");

var song = document.getElementById("song");

var loop;

var start;
var since;

function getMonths() {
  var months = Math.floor(since / 2592000000);
  since -= months * 2592000000;
  return months;
}

function getDays() {
  var days = Math.floor(since / 86400000);
  since -= days * 86400000;
  return days;
}

function getHours() {
  var hours = Math.floor(since / 3600000);
  since -= hours * 3600000;
  return hours;
}

function getMinutes() {
  var minutes = Math.floor(since / 60000);
  since -= minutes * 60000;
  return minutes;
}

function getSeconds() {
  return since / 1000;
}

function play()
{
  song.play();
  song.volume = 1;

  since = parseInt(Date.now() - start, 10);

  var months  = getMonths();
  var days    = getDays();
  var hours   = getHours();
  var minutes = getMinutes();
  var seconds = getSeconds().toFixed(2);

  document.getElementById('months').innerHTML = 
    (months >= 1 && months < 2)
    ? months + " Month."
    : months + " Months.";
  document.getElementById('days').innerHTML = 
    (days >= 1 && days < 2)
      ? days + " Day, and "
      : days + " Days, and ";
  document.getElementById('hours').innerHTML = 
    (hours >= 1 && hours < 2) 
      ? hours + " Hour, "
      : hours + " Hours, ";
  document.getElementById('minutes').innerHTML = 
    (minutes >= 1 && minutes < 2)
      ? minutes + " Minute, "
      : minutes + " Minutes, ";
  document.getElementById('seconds').innerHTML = 
    (seconds >= 1 && seconds < 2)
      ? seconds + " Second, "
      : seconds + " Seconds, ";
}

document.onclick = function()
{
  if (start === undefined) {
    panel_one.classList.remove("active");
    panel_two.classList.   add("active");

    start = Date.now();

    loop = setInterval(play, 100);
  }
}
