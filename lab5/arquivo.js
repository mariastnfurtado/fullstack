let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.fillStyle = 'yellow';
        ctx.arc(300, 100, 50, 1.5 * Math.PI, 4.5 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='rgb(228, 103, 45)';
        ctx.moveTo(150,200);
        ctx.lineTo(200, 150);
        ctx.lineTo(250, 200);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='brown';
        ctx.fillRect(150,200,100,100);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = 'gray';
        ctx.fillRect(0,300,400,100);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = 'lightblue'
        ctx.fillRect(160,220,30,30);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = 'lightblue'
        ctx.fillRect(210,220,30,30);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='rgb(110, 32, 8)'
        ctx.fillRect(190,250,20,50);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='brown';
        ctx.fillRect(50,250,20,50);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='rgb(48, 172, 48)';
        ctx.arc(60,230,25,1.5*Math.PI,4.5*Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='brown';
        ctx.fillRect(350,300,20,50);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='rgb(48, 172, 48)';
        ctx.arc(360,280,25,1.5*Math.PI,4.5*Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='rgb(92, 92, 226)';
        ctx.arc(0,300,50,0*Math.PI,2*Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='rgb(92, 92, 226)';
        ctx.fillRect(0,300,50,100);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='rgb(92, 92, 226)';
        ctx.fillRect(50,350,100,50);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle='rgb(92, 92, 226)';
        ctx.arc(150,400,50,0*Math.PI,2*Math.PI);
        ctx.fill();
        ctx.closePath();