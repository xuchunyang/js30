const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

const mouse = { x: 0, y: 0 },
      last_mouse = { ...mouse };

let hue = 0,
    increaseLineWidth = true;

function quickDraw() {
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(last_mouse.x, last_mouse.y);
  ctx.lineTo(mouse.x, mouse.y);
  ctx.closePath();
  ctx.stroke();

  hue >= 360 ? 0 : hue++;

  increaseLineWidth ? ctx.lineWidth++ : ctx.lineWidth--;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    increaseLineWidth = !increaseLineWidth;
  }
}

function setMouseLocation(e) {
  [last_mouse.x, last_mouse.y, mouse.x, mouse.y] = [mouse.x, mouse.y, e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', setMouseLocation);
canvas.addEventListener('mousedown', () => canvas.addEventListener('mousemove', quickDraw));
canvas.addEventListener('mouseup', () => canvas.removeEventListener('mousemove', quickDraw));
canvas.addEventListener('mouseout', () => canvas.removeEventListener('mousemove', quickDraw));
