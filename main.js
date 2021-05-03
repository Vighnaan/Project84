canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2D");
car1_width=120;
car1_height=70;
background_image="cartoon-racing-track-quarter-mile-260nw-1223372944";
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car1_image="car2.png";
car1_x=10;
car1_y=100;
function add()
{
backgroundimageTag=new Image();
backgroundimageTag.onload=uploadBackground;
backgroundimageTag.src=background_image;
car1imageTag=new Image();
car1imageTag.onload=uploadcar1;
car1imageTag.src=car1_image;
car2imageTag=new Image();
car22imageTag.onload=uploadcar2;
car2imageTag.src=car2_image;
}
function uploadBackground()
{
    ctx.drawImage(backgroundimageTag, 0,0,canvas.width,canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1imageTag, car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2()
{
    ctx.drawImage(car2imageTag, car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        car1up();
        console.log("car1up")
    }
    if(keyPressed=="40")
    {
        car1down();
        console.log("car1down")
    }
    if(keyPressed=='37')
    {
        car1left();
        console.log("car1left")
    }
    if(keyPressed=='39')
    {
        car1right();
        console.log("car1right")
    }
    if(keyPressed=='87')
    {
        car2up();
        console.log("car2up")
    }
    if(keyPressed=="83")
    {
        car2down();
        console.log("car2down")
    }
    if(keyPressed=='65')
    {
        car2left();
        console.log("car2left")
    }
    if(keyPressed=='68')
    {
        car2right();
        console.log("car2right")
    }
}
function up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed",x="+rover+"y="+rovery";
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed",x="+rover-"y="-rovery";
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("when left arrow is pressed",y="+rover+"x="+rovery";
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("when right arrow is pressed",y="+rover+"x="+rovery";
        uploadBackground();
        uploadrover();
    }
}