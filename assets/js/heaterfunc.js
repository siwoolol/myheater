let currentTemp = 30;

function increaseTemp() {
    var plusButton = document.getElementById(".plus");
    var minusButton = document.getElementById(".minus");

    if (currentTemp < 30) {
        currentTemp++;
    } else {
        plusButton.style.opacity = "20%";
        minusButton.style.opacity = "100%";
    }

    if (currentTemp < 29) {
        plusButton.style.opacity = "20%";
    } else if (currentTemp > 29) {
        plusButton.style.opacity = "100%";
    }
    document.getElementsByClassName("temp")[0].innerHTML = currentTemp;
}

function decreaseTemp() {
    var plusButton = document.getElementById(".plus");
    var minusButton = document.getElementById(".minus");

    if (currentTemp > 21) {
        currentTemp--;
        minusButton.style.opacity = "100%";
    } else {
        plusButton.style.opacity = "100%";
    }

    if (currentTemp > 22) {
        minusButton.style.opacity = "20%";
    } else if (current < 22) {
        minusButton.style.opacity = "100";
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
