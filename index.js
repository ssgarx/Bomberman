var started;
var gameongoing = true;
function getScoreBoard() {
  document.getElementById("box3").style.display = "block";
  started = true;
  getPoints();
  disableStart();
  generateBombs();
}
function disableStart() {
  document.getElementById("startx").disabled = true;
}

var sum = 0;
function getPoints() {
  //UPDATE POUINTS
  document.getElementById("points").innerHTML = sum++;
  if(sum == 81){
      document.getElementById("points").innerHTML = "YOU WON!"
  }
}

var bomb_locations = [];
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
      document.getElementById("points").innerHTML = "GAME OVER"
      gameongoing = false;
    } else {
      //USER GOT A POINT
      getPoints();
      //ADD GREEN COLOR
      element1.classList.add("green");
      element1.removeAttribute("onclick");
      console.log("nope");
    }
  }
}
function reload() {
  location.reload();
}
