const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//cabeça
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