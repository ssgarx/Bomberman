var started = false;
var gameongoing = false;
var sum = 0;
var bomb_locations = [];

var background_music = new Audio("Audio/bg.mp3");
var greenbox_music = new Audio("Audio/grn.mp3");
var loosing_music = new Audio("Audio/loose.mp3");
var winning_music = new Audio("Audio/win.mp3");

button_opacity();
function getScoreBoard() {
  document.getElementById("box3").style.display = "block";
  started = true;
  button_opacity();
  gameongoing = true;
  button_opacity();
  getPoints();
  disableStart();
  generateBombs();
}

function disableStart() {
  document.getElementById("startx").disabled = true;
}

function getPoints() {
  //UPDATE POUINTS
  document.getElementById("points").innerHTML = sum++;
  if (sum == 71) {
    document.getElementById("points").innerHTML = "YOU WON!";
    winning_music.play();
  }
}

function generateBombs() {
  for (var i = 0; i < 10; i++) {
    //Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    bomb_locations[i] = parseInt(Math.floor(Math.random() * (81 - 1 + 1)) + 1);
  }
  console.log(bomb_locations);
}

function getCellId(userClickId) {
  if (started && gameongoing) {
    //REMOVE ONCLICKED ID TO AVOID DOUBLE CLICKS
    var element1 = document.getElementById(userClickId);

    var ucid = parseInt(userClickId);

    if (bomb_locations.includes(ucid)) {
      //USER CLICKED ON BOMB
      console.log("yes");
      element1.classList.add("red");
      loosing_music.play();
      setTimeout(function () {
        background_music.play();
      }, 2300);
      document.getElementById("points").innerHTML = "GAME OVER";
      showBombs();
      gameongoing = false;
    } else {
      //USER GOT A POINT
      getPoints();
      //ADD GREEN COLOR
      element1.classList.add("green");
      greenbox_music.play();
      element1.removeAttribute("onclick");
      console.log("nope");
    }
  }
}

function reload() {
  location.reload();
}

function showBombs() {
  for (var i = 0; i < bomb_locations.length; i++) {
    document.getElementById(bomb_locations[i]).classList.add("red");
  }
}
function button_opacity() {
  if (!started) {
    document.getElementById("end").classList.add("opac");
    background_music.play();
  } else {
    document.getElementById("end").classList.remove("opac");
    document.getElementById("txt").style.display = "none";
    background_music.pause();
  }
  if (gameongoing) {
    document.getElementById("startx").classList.add("opac");
  } else {
    document.getElementById("startx").classList.remove("opac");
  }
}

var visited = localStorage.getItem('visited');
if (!visited) {
  alert("This game has sound effects.");
  localStorage.setItem('visited', true);
}