const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//cabeca
ctx.beginPath();
ctx.fillStyle="#54EC17";
ctx.strokeStyle="#54EC17";
ctx.arc(125, 180, 15, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

//corpo
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(125, 250);
ctx.lineTo(150, 200);
ctx.lineTo(100, 200);
ctx.strokeStyle="#54EC17";
ctx.fillStyle="#54EC17";
ctx.stroke();
ctx.fill();

//chapeu
ctx.beginPath()
ctx.moveTo(105, 165);
ctx.lineTo(145, 165);
ctx.lineWidth = 4;
ctx.stroke();

ctx.beginPath();
ctx. moveTo(115, 160);
ctx. lineTo(135, 160);
ctx. lineWidth = 10
ctx.stroke();