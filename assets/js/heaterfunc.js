let currentTemp = 30;

function increaseTemp() {

    var plusButton = document.getElementsbyClassName("plus");

    if (currentTemp < 30) {
        currentTemp++;
        plusButton.style.opacity = "100%";
    } else {
        plusButton.style.opacity = "20%";
    }
    document.getElementsByClassName("temp")[0].innerHTML = currentTemp;
}

function decreaseTemp() {

    var minusButton = document.getElementsbyClassName("minus");

    if (currentTemp > 21) {
        currentTemp--;
        minusButton.style.opacity = "100%";
    } else {
        minusButton.style.opacity = "20%";
    }
    document.getElementsByClassName("temp")[0].innerHTML = currentTemp;
}

function on() {
    var audio = document.getElementById("audio");
    audio.play();

    var onbutton = document.getElementById(".brown-noise2");
    onbutton.style.opacity = "20%";
    var offbutton = document.getElementById(".brown-noise3");
    offbutton.style.opacity = "100%";
}

function off() {
    var audio = document.getElementById("audio");
    audio.pause();

    var offbutton = document.getElementById(".brown-noise3");
    offbutton.style.opacity = "20%";
    var onbutton = document.getElementById(".brown-noise2");
    onbutton.style.opacity = "100%";
}
