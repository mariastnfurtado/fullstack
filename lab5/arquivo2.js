let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 50, 50);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(250, 0, 50, 50);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(100, 150, 50, 50);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(0, 250, 25, 50);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(25, 275, 25, 25);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(275, 250, 25, 50);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(250, 275, 25, 25);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aquamarine';
ctx.fillRect(0, 125, 25, 50);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aquamarine';
ctx.fillRect(275, 137, 25, 25);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(50, 153, 36, 1)';
ctx.moveTo(0, 150);
ctx.lineTo(300, 150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aquamarine';
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(50, 153, 36, 1)';
ctx.arc(150, 300, 50, 0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.moveTo(150, 150);
ctx.lineTo(150, 250);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(50, 153, 36, 1)';
ctx.arc(75, 225, 13, 0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(50, 153, 36, 1)';
ctx.arc(225, 225, 13, 0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aquamarine';
ctx.lineWidth = 1;
ctx.strokeStyle = 'blue';
ctx.arc(150, 123, 13, 0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'red';
ctx.moveTo(300, 0);
ctx.lineTo(150, 150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'blue';
ctx.moveTo(0, 0);
ctx.lineTo(150, 150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(50, 153, 36, 1)';
ctx.arc(150, 300, 65, 1.5 * Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(50, 153, 36, 1)';
ctx.arc(150, 300, 75, 1* Math.PI, 1.5* Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(50, 153, 36, 1)';
ctx.arc(150, 150, 50, 1 * Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(50, 153, 36, 1)';
ctx.arc(150, 150, 65, 1* Math.PI, 1.25* Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(50, 153, 36, 1)';
ctx.arc(150, 150, 65, 1.75* Math.PI, 0* Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.font = "20px Arial";
ctx.fillText("Canvas",115,50);
ctx.fill();
ctx.closePath();