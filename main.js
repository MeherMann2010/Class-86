var canvas = new fabric.Canvas("myCanvas")

block_image_width = 30;
black_image_hight = 30

player_x = 10
player_y = 10


var player_object = ""
var block_image_objet = ""

function player_update() {

    fabric.image.fromURL("player.png", function(img) {
        player_object = img



        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
        top:player_y,
        left:player_x
    })
    canvas.add(player_object);
    })
}


function new_image(get_image) {

    fabric.image.fromURL(get_image, function (img) {
        block_image_objet = Img;

        block_image_object.scaleToWidth(150)
       block_image_object.scaleToHeight(140)
       block_image_object.set({
        top:player_y,
        left:player_x
    })
canvas.add(block_image_object)
})

}