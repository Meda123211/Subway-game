const char = document.getElementById("char");
const block = document.getElementById("block");
const game = document.getElementById("game");
var counter = 0;

function moveLeft() {
  let left = parseInt(window.getComputedStyle(char).getPropertyValue("left"));
  left -= 100;
  if (left >= 0) {
    char.style.left = left + "px";
  }
}
function moveRight() {
  let left = parseInt(window.getComputedStyle(char).getPropertyValue("left"));
  left += 100;
  if (left < 250) {
    char.style.left = left + "px";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowRight") {
    moveRight();
  }
});

block.addEventListener("animationiteration", () => {
  var random = Math.floor(Math.random() * 3);
  console.log(random);
  left = random * 100;
  block.style.left = left + "px";
  counter++;
});
setInterval(() => {
  var charachetLeft = parseInt(
    window.getComputedStyle(char).getPropertyValue("left")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var blockToop = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );

  if (charachetLeft == blockLeft && blockToop < 500 && blockToop > 300) {
    alert(`Game Over ,Score:${counter}.`);
    block.style.animation = "none";
  }
}, 100);
