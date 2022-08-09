var audioLanding = new Audio('./images/iwasjoking.mp3');

let landingPageVolume = document.getElementById('formControlRange');

setInterval(function () {
    if(landingPageVolume.value > 0) {
        audioLanding.volume = landingPageVolume.value;
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

const howtoplay = document.getElementById('howtoplay');
const howtoplaySite = 'http://localhost:3001/howtoplay'
howtoplay.addEventListener('click', function() {
    window.location = howtoplaySite;
})

const viewHighscore = document.getElementById('viewHighscore');
const viewHighscoreSite = 'http://localhost:3001/api/userscorepage'
viewHighscore.addEventListener('click', function() {
    window.location = viewHighscoreSite;
})

const title = document.getElementById('title');
const titleSite = 'http://localhost:3001/#'
title.addEventListener('click', function() {
    window.location = titleSite;
})