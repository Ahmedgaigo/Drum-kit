function handleClick() {

    var btn = this.innerHTML;
    makeNoise(btn);
    animate(btn);  
}

var numBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < numBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


// when key is pressed
function keyPressed(event) {
    makeNoise(event.key);
    animate(event.key);
}

document.addEventListener("keydown", keyPressed);


// makes noise
function makeNoise(key) {

    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
            
        default:
            break;
    }
}

// animate
function animate(key) {
    var activeBtn = document.querySelector("." + key);

    activeBtn.classList.add("pressed");

    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100);
}
