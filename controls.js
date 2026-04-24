//controls
// var a = false;
// var d = false;
var w = false;
var s = false;

var up = false;
var down = false;
// var left = false;
// var right = false;

document.addEventListener("keydown", press);
document.addEventListener("keyup", release);


function press(e)
{
    // WASD Movement
    // if(e.keyCode == 65)
    // {
    //     a = true;
    // }
    // if(e.keyCode == 68)
    // {
    //     d = true;
    // }
    if(e.keyCode == 87)
    {
        w = true;
    }
    if(e.keyCode == 83)
    {
        s = true;
    }

    // ARROWS Movement
    if(e.keyCode == 37)
    {
        left = true;
    }
    if(e.keyCode == 39)
    {
        right = true;
    }
    if(e.keyCode == 38)
    {
        up = true;
    }
    if(e.keyCode == 40)
    {
        down = true;
    }
}

function release(e)
{
    // WASD Movement
    // if(e.keyCode == 65)
    // {
    //     a = false;
    // }
    // if(e.keyCode == 68)
    // {
    //     d = false;
    // }
    if(e.keyCode == 87)
    {
        w = false;
    }
    if(e.keyCode == 83)
    {
        s = false;
    }

      // ARROWS Movement
    // if(e.keyCode == 37)
    // {
    //     left = false;
    // }
    // if(e.keyCode == 39)
    // {
    //     right = false;
    // }
    if(e.keyCode == 38)
    {
        up = false;
    }
    if(e.keyCode == 40)
    {
        down = false;
    }
}