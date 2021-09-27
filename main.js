var touchEvent = "empty";
var mouseEvent="empty";
var last_position_of_x, last_position_of_y,color,width_of_line;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
var width= screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";

}
    canvas.addEventListener("touchstart", my_touchstart);
    canvas.addEventListener("mousedown",my_mousedown);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }

    function my_mousedown(e){
        color=document.getElementById("colour").value;
        width_of_the_line=document.getElementById("width_of_the_line").value;
    
        mouseEvent="mousedown";
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
console.log("my_touchmove");
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
        
    }
    function my_mousemove(e) {
        current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y=e.clientY - canvas.offsetTop;
        if (mouseEvent=="mousedown") {
            ctx.beginPath();
            ctx.strokestyle=color;
            ctx.lineWidth=width_of_the_line;
        
            console.log("Last position of x and y coordinates = ");
             console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
            
            
             console.log("Current position of x and y coordinates = ");
              console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
              ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
        }
        last_position_of_x=current_position_of_mouse_x;
        last_position_of_y=current_position_of_mouse_y;
        }

    
    function clear_area(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }

