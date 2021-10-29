canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;


function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = parkingLot.jpg;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	background_imgTag.src = car2.png
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, canvas.width, canvas.height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
   
    if(rover_y >=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();

    }

   }


   function down(){
   
    if(rover_y <=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();

    }

   }


   function left(){
   
    if(rover_x >=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();

    }

   }


   function right(){
   
    if(rover_x <=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();

    }