let car = document.getElementById("car");
let misShoot = false;
function mousePos() {
  console.log(`x - ${event.offsetX} || y - ${event.offsetY}`);
}
car.style.left = 420 + "px";
car.style.top = 310 + "px";
// mis.style.left = 310 + "px"
// mis.style.top = 40 + "px"
let keysPressed = {};
// document.addEventListener('keydown', moveCar => event.code = true )
document.addEventListener("keydown", (event) => {
  console.log(keysPressed);
  keysPressed[event.key] = true;
  if (keysPressed["Control"] && event.key == "a") {
    alert(event.key);
  }
});
document.addEventListener("keyup", (event) => {
  console.log(keysPressed);
  delete keysPressed[event.key];
});
document.addEventListener("keydown", moveCar);
function moveCar() {
  let carX = parseInt(car.style.left);
  let carY = parseInt(car.style.top);
  if (
    keysPressed.hasOwnProperty("ArrowRight") ||
    keysPressed.hasOwnProperty("KeyD")
  ) {
    if (carX == 850) {
      return;
    } else {
      car.style.left = carX + 5 + "px";
      carX = parseInt(car.style.left);
    }
  }
  if (
    keysPressed.hasOwnProperty("ArrowLeft") ||
    keysPressed.hasOwnProperty("KeyA")
  ) {
    if (carX == -5) {
      return;
    } else {
      car.style.left = carX - 5 + "px";
      carX = parseInt(car.style.left);
    }
  }
  if (
    keysPressed.hasOwnProperty("ArrowUp") ||
    keysPressed.hasOwnProperty("KeyW")
  ) {
    if (carY == 100) {
      return;
    } else {
      car.style.top = carY - 5 + "px";
      carY = parseInt(car.style.top);
    }
  }
  if (
    keysPressed.hasOwnProperty("ArrowDown") ||
    keysPressed.hasOwnProperty("KeyS")
  ) {
    if (carY == 310) {
      return;
    } else {
      car.style.top = carY + 5 + "px";
      carY = parseInt(car.style.top);
    }
  }
  if (
    keysPressed.hasOwnProperty("Control") ||
    keysPressed.hasOwnProperty(" ")
  ) {
    if (misShoot == true) {
      return;
    } else {
      misShoot = true;
      gameContainer.innerHTML =
        '<img id="missile" src ="images/missile.png" height="150px" width="40px" style="position: absolute;">';
      let mis = document.getElementById('missile')
      mis.style.left = carX + 60 + "px";
      mis.style.top = carY - 50 + "px";
      if (misShoot == true) {
        var misMoveInt = setInterval(misMove, 10)
        function clearMisInt() {
          clearInterval(misMoveInt);
        }
        setTimeout(clearMisInt, 1500)
      }
    }
  }
}
function misMove() {
  let mis = document.getElementById('missile')
  let misY = parseInt(mis.style.top);
  let misX = parseInt(mis.style.left);
  console.log(misY);
  if (parseInt(misY) <= 0) {
    mis.style.top = misY;
    gameContainer.innerHTML = `<img id="missile" src="images/explo.gif" height="150px" width="150px" style="position: absolute; left: ${misX}px; top: ${misY}px">`;
    setTimeout(misStop, 750)
    var misRevInt = setInterval(misRev, 10)
    function clearRevInt() {
      clearInterval(misRevInt);
    }
    setTimeout(clearRevInt, 750)
  }
  else {
    mis.style.top = misY - 2 + "px";
  }
}
function misRev() {
  let mis = document.getElementById('missile')
  let misY = parseInt(mis.style.top);
  let misX = parseInt(mis.style.left);
  mis.style.top = misY + 2 + "px";
}
function misStop() {
  let mis = document.getElementById('missile')
  let misY = parseInt(mis.style.top);
  let misX = parseInt(mis.style.left);
  gameContainer.innerHTML = `<img id="missile" src="" style="position: absolute; left: ${misX}px; top: ${misY}px"> `;
  misShoot = false
  clearMisInt()
}