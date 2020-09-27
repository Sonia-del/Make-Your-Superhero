var canvas = new fabric.Canvas('myCanvas');

block_img_width = 30;
block_img_height = 30;

player_x = 10;
player_y = 10;

player_img = "";
block_img = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_img = Img;
    
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_img);
    
        });
    
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_img= Img;
    
        block_img.scaleToWidth(block_img_width);
        block_img.scaleToHeight(block_img_height);
        block_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img);
        
        });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed =="80")
    {
        console.log("Shift Key and P");
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width +10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }
    if(e.shiftKey == true && keyPressed == "77")
    {
        console.log("Shift Key and M");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }

    if(keyPressed == "70")
    {
        new_image("spiderman_face.png")
        console.log("F Key");
        
    }

    if(keyPressed == "66")
    {
        new_image("ironman_body.png")
        console.log("B Key");
        
    }

    if(keyPressed == "76")
    {
        new_image("hulk_legs.png")
        console.log("L Key");
        
    }

    if(keyPressed == "82")
    {
        new_image("thor_right_hand.png")
        console.log("R Key");
        
    }

    if(keyPressed == "72")
    {
        new_image("captain_america_left_hand.png")
        console.log("H Key");
        
    }

    if(keyPressed == "38")
    {
        up();
        console.log("up");
        
    }
    if(keyPressed == "37")
    {
        left();
        console.log("left");

    }
    if(keyPressed == "40")
    {
        down();
        console.log("down");

    }
    if(keyPressed == "39")
    {
        right();
        console.log("right");

    }
}