var audioLanding = new Audio('./images/iwasjoking.mp3');

let landingPageVolume = document.getElementById('formControlRange');

setInterval(function () {
    if(landingPageVolume.value > 1) {
        console.log(landingPageVolume.value);
        audioLanding.play();
} else {
    audioLanding.pause();
}
}, 1000);