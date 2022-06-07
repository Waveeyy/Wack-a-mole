let square = document.querySelectorAll(".square");
let mole = document.querySelectorAll(`.mole`);
let time = document.getElementById(`time-left`);
let score = document.getElementById(`score`);

let hitPosition;
let result = 0;
let currentTime = time.textContent;

// Making the mole random
let randomize = function random() {
  square.forEach((className) => {
    className.classList.remove(`mole`);
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add(`mole`);
  hitPosition = randomPosition.id;
};

square.forEach((id) => {
  id.addEventListener(`click`, () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});
function moveMole() {
  let timerId;
  timerId = setInterval(randomize, 1000);
}
moveMole();

function countDown() {
  currentTime--;
  time.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert(`GAME OVER! Your score is ${result}`);
  }
}
let timerId = setInterval(countDown, 1000);
