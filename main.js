canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
width_of_line = 3; 
color = "blue";
var mouseEvent = "empty";
var last_position_of_X , last_position_of_y;


canvas.addEventListener("mouseDown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseUp", my_mouseUp);

function my_mouseUp(e)
{
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
    

    console.log("Last_position_of_X_and_Y_coordinates =");
    console.log("x=" + last_position_of_X + "y= " + last_position_of_y);
    ctx.moveTo(last_position_of_X, last_position_of_y);

    console.log("Current_position_of_X_and_Y_coordinates =");
    console.log("x=" + current_position_of_mouse_X + "y= " + current_position_of_mouse_Y);
    ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
    ctx.stroke();
    }

    last_position_of_X = current_position_of_mouse_X;
    last_position_of_y = current_position_of_mouse_Y;

}
