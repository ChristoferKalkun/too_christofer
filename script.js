function init() { var canvas = document.getElementById('canvas');
    if (canvas.getContext) 
    {    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 80, 300, 100);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 180, 300, 100);

    ctx.fillStyle = "black";
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 80, 300, 300);

    var xOffset = 300; // Amount to move the shape to the right

    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(200 + xOffset, 50); // a
    ctx.lineTo(240 + xOffset, 150); // b
    ctx.lineTo(340 + xOffset, 150); // c
    ctx.lineTo(260 + xOffset, 230); // d
    ctx.lineTo(300 + xOffset, 330); // e
    ctx.lineTo(200 + xOffset, 260); // f
    ctx.lineTo(100 + xOffset, 330); // g
    ctx.lineTo(130 + xOffset, 225); // h
    ctx.lineTo(60 + xOffset, 150); // i
    ctx.lineTo(160 + xOffset, 150); //j
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath(); ctx.arc(800, 225, 100, 0, 2 * Math.PI);
    ctx.lineWidth = '5';
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(800, 225, 100, 4, 1.7 * Math.PI);
    ctx.lineTo(800, 225);
    ctx.lineWidth = '5';
    ctx.fill();
}
}

onload = init;