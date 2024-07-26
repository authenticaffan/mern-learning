var noOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrums; i++){
    
}
document.querySelectorAll(".drum")[0].addEventListener("click",function w(){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
});
document.querySelectorAll(".drum")[1].addEventListener("click",function a(){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
});
document.querySelectorAll(".drum")[2].addEventListener("click",function s(){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
});
document.querySelectorAll(".drum")[3].addEventListener("click",function d(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
});
document.querySelectorAll(".drum")[4].addEventListener("click",function j(){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
});
document.querySelectorAll(".drum")[5].addEventListener("click",function k(){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
});
document.querySelectorAll(".drum")[6].addEventListener("click",function l(){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
});

document.onkeydown = function(event) {
    var keypressed = event.key;
    if (keypressed === "w") {
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    }
    if (keypressed === "a") {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    if (keypressed === "s"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    if (keypressed === "d"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    if (keypressed === "j"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    } 
    if (keypressed === "k"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    } 
    if (keypressed === "l"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }      
}