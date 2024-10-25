let currentTemp = 69;

function increaseTemp() {
    if (currentTemp < 694) {
       currentTemp++;
    }
    document.getElementsByClassName("temp")[0].innerHTML = currentTemp;
}

function decreaseTemp() {
    if (currentTemp > 69) {
        currentTemp--;
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
