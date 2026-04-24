var canvas, context; 
var player1, player2, ball; 
var timer, interval = 1000/60;
var p1Wins = 0, p2Wins = 0;

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")


player1 = new GameObject(50,canvas.height/2,150,15,"#7a2876")
player2 = new GameObject(974,canvas.height/2,150,15,"#287a2c")

ball = new GameObject(canvas.width/2,canvas.height/2,5,10,"#494a81");
ball.radius = 15;
ball.vx = 5;
ball.vy = 0;

timer = setInterval(animate, interval);

function drawText () 
{
    context.font = "20px Georgia";
    context.fillStyle = "#000000";
    context.fillText("Player 1 | Player 2", 435, 40);

    context.font = "20px Geogia";
    context.fillStyle = "#000000";
    context.fillText(p1Wins +  " | " + p2Wins, 495, 65);
}

function drawNet() 
{
    context.save();
    context.strokeStyle = "#000000";
    context.beginPath();
    context.moveTo(canvas.width/2, 0);
    context.lineTo(canvas.width/2, canvas.height);
    context.closePath();
    context.lineWidth = 5;
    context.stroke();
    context.restore();
}


function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawText();
    drawNet();
    player1.drawRect();
    player2.drawRect();
    ball.drawCircle();
    ball.move();

    


////// OBJECT MOVEMENT //////

    // Player 1 Movement
    if(w)
    {
        player1.y -= 5;
    }

    if(s)
    {
        player1.y += 5;
    }


    // Player 2 Movement
    if (up) 
    {
        player2.y -= 5;
    }

    if (down) 
    {
        player2.y += 5;
    }

  
    if (player1.y < player1.height / 2) {
        player1.y = player1.height / 2;
    }
    if (player1.y > canvas.height - player1.height / 2) {
        player1.y = canvas.height - player1.height / 2;
    }

    if (player2.y < player2.height / 2) {
        player2.y = player2.height / 2;
    }
    if (player2.y > canvas.height - player2.height / 2) {
        player2.y = canvas.height - player2.height / 2;
    }
    

////// COLLISION //////

// Collision With Canvas

    // Right Side
    if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.vx *= -1;
        ball.vy *= 0;
        p1Wins += 1;
        console.log ("Player 1: " + p1Wins);
    }

    // Left Side
    if (ball.x - ball.radius < 0) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.vx *= -1;
        ball.vy *= 0;
        p2Wins += 1;
        console.log ("Player 2: " + p2Wins);
    }

    // Top Side
    if (ball.y + ball.radius > canvas.height) {
        ball.vy *= -1;
    }

    // Bottom Side
    if (ball.y - ball.radius < 0) {
        ball.vy *= -1;
    }


// Collision With Paddles 

    // PADDLE 1
    if(ball.x - ball.radius < player1.x + player1.width / 2)
    {
        // When ball is colliding with paddle
        if(ball.y > player1.y - player1.height/2 &&
            ball.y < player1.y + player1.height/2)
        {
            // If ball hits TOP
            if(ball.y < player1.y - player1.height/6)
            {
                ball.vx = 5;   // positive speed
                ball.vy = -5;  // negative speed
            }

            // If ball hits MIDDLE
            else if(ball.y < player1.y - player1.height/3)
            {
                ball.vx = 5;   // positive speed
                ball.vy = 0;  // negative speed
            }

            // If ball hits BOTTOM
            else
            {
                ball.vx = 5;   // positive speed
                ball.vy = 5;  // negative speed
            }
        }
    }

    // PADDLE 2
    if(ball.x + ball.radius > player2.x - player2.width / 2)
    {
        // When ball is colliding with paddle
        if(ball.y > player2.y - player2.height/2 &&
            ball.y < player2.y + player2.height/2)
        {
            // If ball hits TOP
            if(ball.y > player2.y + player2.height/6)
            {
                ball.vx = -5;   
                ball.vy = -5;  
            }

            // If ball hits MIDDLE
            else if(ball.y > player2.y + player2.height/3)
            {
                ball.vx = -5;   
                ball.vy = 0;  
            }

            // If ball hits BOTTOM
            else
            {
                ball.vx = -5; 
                ball.vy = 5;  
            }
        }
    }

}