var base_url = window.location.origin;

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
const gameSite = '/game'
startGame.addEventListener('click', function() {
    window.location = base_url + gameSite;
})

const howtoplay = document.getElementById('howtoplay');
const howtoplaySite = '/howtoplay'
howtoplay.addEventListener('click', function() {
    window.location = base_url + howtoplaySite;
})

const viewHighscore = document.getElementById('viewHighscore');
const viewHighscoreSite = '/api/userscorepage'
viewHighscore.addEventListener('click', function() {
    window.location = base_url + viewHighscoreSite;
})

const title = document.getElementById('title');
const titleSite = base_url;
title.addEventListener('click', function() {
    window.location = base_url + titleSite;
})