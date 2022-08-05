// Canvas Setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0;

const particlesArray = [];

const keys = [];

const player = {
    x: 200,
    y: 200,
    width: 40,
    height: 72,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
}

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
    console.log(particlesArray);
}

const playerSprite = new Image();
playerSprite.src = "images/chewie.png";

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

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

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
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)
        movePlayer();
        handleParticles();
        handlePlayerFrame();
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
    }
};

startAnimating(30);