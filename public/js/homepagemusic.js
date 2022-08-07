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

const startGame = document.getElementById('startGame');
const gameSite = 'http://localhost:3001/game'
startGame.addEventListener('click', function() {
    window.location = gameSite;
})
