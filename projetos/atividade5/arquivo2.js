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
ctx.arc(150, 300, 75, 1 * Math.PI, 1.5 * Math.PI);
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
ctx.arc(150, 150, 65, 1 * Math.PI, 1.25 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgba(50, 153, 36, 1)';
ctx.arc(150, 150, 65, 1.75 * Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.font = "20px Arial";
ctx.fillText("Canvas", 115, 50);
ctx.fill();
ctx.closePath();


let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

ctx2.beginPath();
ctx2.fillStyle = 'yellow';
ctx2.arc(300, 100, 50, 1.5 * Math.PI, 4.5 * Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'rgb(228, 103, 45)';
ctx2.moveTo(150, 200);
ctx2.lineTo(200, 150);
ctx2.lineTo(250, 200);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'brown';
ctx2.fillRect(150, 200, 100, 100);
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'gray';
ctx2.fillRect(0, 300, 400, 100);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'lightblue'
ctx2.fillRect(160, 220, 30, 30);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'lightblue'
ctx2.fillRect(210, 220, 30, 30);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'rgb(110, 32, 8)'
ctx2.fillRect(190, 250, 20, 50);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'brown';
ctx2.fillRect(50, 250, 20, 50);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'rgb(48, 172, 48)';
ctx2.arc(60, 230, 25, 1.5 * Math.PI, 4.5 * Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'brown';
ctx2.fillRect(350, 300, 20, 50);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'rgb(48, 172, 48)';
ctx2.arc(360, 280, 25, 1.5 * Math.PI, 4.5 * Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'rgb(92, 92, 226)';
ctx2.arc(0, 300, 50, 0 * Math.PI, 2 * Math.PI);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'rgb(92, 92, 226)';
ctx2.fillRect(0, 300, 50, 100);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'rgb(92, 92, 226)';
ctx2.fillRect(50, 350, 100, 50);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'rgb(92, 92, 226)';
ctx2.arc(150, 400, 50, 0 * Math.PI, 2 * Math.PI);
ctx2.fill();
ctx2.closePath();