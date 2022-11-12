// Elementnuudee oruulj ireh
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeElelement = document.getElementById('size');
const colorElement = document.getElementById('color');
const clearElement = document.getElementById('clear');
const toolBox = document.getElementById('toolbox');

console.log(toolBox);

const ctx = canvas.getContext('2d');

let size = 5;
let isPressed = false;
let color = 'black';
let x;
let y;

// mouse daragdah uyd haana daragdsaniig oloh
canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;

  console.log(isPressed, x, y);
});

// mouse daragdaagu baih uyd
canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  x = undefined;

  console.log(isPressed, x, y);
});

// mouse hudluh uyd zurah
canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    console.log(x2, y2);
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

// buurunhii zurah funkts
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// zuraas zurah funkts
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// zurah zuraasiig buduun nariin bolgoh
function updateSizeOnScreen() {
  sizeElelement.innerText = size;
}

increaseBtn.addEventListener('click', () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

// zuraasnii ongo solih
colorElement.addEventListener('change', (e) => (color = e.target.value));

// delgets tseverleh, zursan zurgaa ustgah
clearElement.addEventListener('click', () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);

// responsive canvas

window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();

function resizeCanvas() {
  canvas.width = window.innerWidth - 60;
  canvas.height = window.innerHeight - 250;
}
