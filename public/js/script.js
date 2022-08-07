// Canvas Setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



let hue = 0;

let score = 0;

// AUDIO-------

var audio = new Audio('./images/sillychicken.mp3');
var audio1 = new Audio('./images/throw.mp3');
var audio2 = new Audio('./images/hit.mp3');

// AUDIO VOLUME CONTROL
audio.volume = 0.2;
audio1.volume = 0.2;
audio2.volume = 0.4;



const particlesArray = [];
const enemyArray = [];

const keys = [];

const player = {
    x: 200,
    y: 200,
    width: 28,
    height: 29,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
}

class Enemy {
    constructor() {
        this.x = canvas.width - 72,
            this.y = Math.random() * 500,
            this.width = 28,
            this.height = 29,
            this.frameX = 0,
            this.frameY = 1,
            this.speed = Math.random() * 9 + 2,
            this.moving = false
    }
    update() {
        drawSprite(enemySprite, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
        this.x = this.x - this.speed;
        // console.log(this.x)

    }

}


class Powerup {
    constructor() {
        this.x = canvas.width / 2 - player.width;
        this.y = canvas.height / 2;

        this.radius = 10;
    }
    draw() {
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        // ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
    update() {

        this.draw();
    }

}
let powerupStatus = true;
let powerup = [];
powerup.push(new Powerup());


// const enemy = new Enemy();

const projectiles = [];
class Projectile {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;

        this.radius = 3;
    }

    draw() {
        // ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    update() {
        // console.log(this.position);
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

    }
}

class Particle {
    constructor() {
        this.x = player.x + player.width / 2;
        this.y = player.y + 35;
        this.size = Math.random() * 9 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) {
            this.size -= 0.1;
        }
    }

}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
    // console.log(particlesArray);
}

const playerSprite = new Image();
playerSprite.src = "images/goat.png";

const enemySprite = new Image();
enemySprite.src = "images/goat.png";

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const background = new Image();
background.src = "images/background.png"

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
};

window.addEventListener('keydown', function (e) {
    keys[e.key] = true;
    // player.moving = true;
    if (keys[" "]) {

        // PLAY GAME MUSIC ON FIRST BUTTON PRESS AND WHOOSH SOUND ON ALL PRESSES

        audio1.play();


        audio.play();
        audio.loop = true;

        for (let i = 0; i < 10; i++) {
            particlesArray.push(new Particle());
        }
        projectiles.push(new Projectile({
            position: {
                x: player.x + player.height / 2,
                y: player.y + player.height / 2,
            },
            velocity: {
                x: 10,
                y: 0,
            }
        })
        )

    }
});

window.addEventListener('keyup', function (e) {
    delete keys[e.key];
    player.moving = false;
});

function movePlayer() {
    if (keys["ArrowUp"] && player.y > 0) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys["ArrowLeft"] && player.x > 0) {
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
    }
    if (keys["ArrowDown"] && player.y < canvas.height - player.height) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (keys["ArrowRight"] && player.x < canvas.width / 2 - player.width) {
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
    }

}

function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving) {
        player.frameX++;
    }
    else {
        player.frameX = 0;
    }
}

function moveEnemyFrame() {

    for (let i = 0; i < enemyArray.length; i++) {
        if (enemyArray[i].frameX < 0) {
            enemyArray[i].frameX++;
            // console.log("Frame: " + enemy.frameX)
        }
        else if (enemyArray[i].frameX < 1) {
            enemyArray[i].frameX++;
            // console.log("Frame: " + enemy.frameX)
        }
        else if (enemyArray[i].frameX < 2) {
            enemyArray[i].frameX++;
            // console.log("Frame: " + enemy.frameX)
        }
        else if (enemyArray[i].frameX <= 3) {
            enemyArray[i].frameX = 0;
            // console.log("Frame: " + enemy.frameX)
        }
    }


}

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}


let enemyTimer = 0;



function animate() {

    // ctx.clearRect(0,0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    hue++;
    // console.log(hue);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


        // DRAW PLAYER CHARACTER AT GAME START AND REFRESH AT EACH FRAME
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
        function RectCircleColliding(projectile, enemy) {
            var distX = Math.abs(projectile.position.x - enemy.x - enemy.width / 2);
            var distY = Math.abs(projectile.position.y - enemy.y - enemy.height / 2);

            if (distX > (enemy.width / 2 + projectile.radius)) { return false; }
            if (distY > (enemy.height / 2 + projectile.radius)) { return false; }

            if (distX <= (enemy.width / 2)) { return true; }
            if (distY <= (enemy.height / 2)) { return true; }

            var dx = distX - enemy.w / 2;
            var dy = distY - enemy.h / 2;
            return (dx * dx + dy * dy <= (projectile.radius * projectile.radius));
        }
        // PROJECTILE AND ENEMY COLLISION DETECTION
        enemyArray.forEach((enemy, i) => {
            enemy.update();
            projectiles.forEach((projectile, j) => {
                // console.log(projectile.y)
                if (
                    // projectile.position.y - projectile.radius <= enemy.y + enemy.height &&
                    // projectile.position.x + projectile.radius >= enemy.x &&
                    // projectile.position.x - projectile.radius <= enemy.x
                    RectCircleColliding(projectile, enemy)


                ) {
                    setTimeout(() => {
                        score++;
                        // console.log(score)
                        enemyArray.splice(i, 1);
                        i--;
                        projectiles.splice(j, 1)
                        j--;
                        audio2.play();
                    }, 0);
                }

            });
        });

        if (powerup.length) {
            powerup[0].update();
        }





        function PlayerPowerupColliding(powerup, player) {
            var distX = Math.abs(powerup.x - player.x - player.width / 2);
            var distY = Math.abs(powerup.y - player.y - player.height / 2);

            if (distX > (player.width / 2 + powerup.radius)) { return false; }
            if (distY > (player.height / 2 + powerup.radius)) { return false; }

            if (distX <= (player.width / 2)) { return true; }
            if (distY <= (player.height / 2)) { return true; }

            var dx = distX - player.w / 2;
            var dy = distY - player.h / 2;
            return (dx * dx + dy * dy <= (powerup.radius * powerup.radius));
        }
        // PLAYER AND POWERUP COLLISION DETECTION
        if (powerup) {
            powerup.forEach(powerups => {
                if (PlayerPowerupColliding(powerups, player)) {
                    setTimeout(() => {
                        powerup.splice(0, 1);
                        powerupStatus = false;
                        console.log('IFFINBB');
                        console.log(powerup);
                        console.log(powerupStatus)
                        function stateChange(powerupStatus) {
                            setTimeout(function () {
                                if (!powerupStatus) {
                                    console.log("can engage new powerup now");
                                    powerup.push(new Powerup());
                                    powerup[0].update();
                                }
                            }, 30000);
                        }
                        stateChange();




                    }, 0);
                }
            });

        }



        // console.log(player.y)


        // MOVE PLAYER
        movePlayer();
        // DRAW/HANDLE PARTICLES
        handleParticles();
        // HANDLE WHICH FRAME THE USER CHARACTER SHOWS
        handlePlayerFrame();
        // HANDLE WHICH FRAME THE ENEMY CHARACTERS SHOW
        moveEnemyFrame();
        // DELETE SHOTS THAT GO PAST THE CAVAS EDGE
        projectiles.forEach((projectile, index) => {
            if (projectile.position.y + projectile.radius <= 0) {
                setTimeout(() => {
                    projectiles.splice(index, 1)
                }, 0);
            }
            else {
                projectile.update();
            }

        })
        enemyArray.forEach((enemy, index) => {
            if (enemy.x + enemy.width <= 0) {
                // console.log(enemyArray);
                setTimeout(() => {
                    enemyArray.splice(index, 1)
                }, 0);
            }
            else {
                // enemy.update();
            }

        })
    }
    // ENEMY SPAWN TIMER
    if (enemyTimer % 10 === 0) {
        enemyArray.push(new Enemy);
    }
    enemyTimer++;
};
// GAME FPS SETTING
startAnimating(30);