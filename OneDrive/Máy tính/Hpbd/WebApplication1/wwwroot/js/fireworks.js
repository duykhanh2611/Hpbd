const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Firework {
    constructor(x, y) {
        this.particles = [];

        for (let i = 0; i < 80; i++) {
            this.particles.push({
                x: x,
                y: y,
                angle: Math.random() * 2 * Math.PI,
                speed: Math.random() * 4 + 1,
                alpha: 1
            });
        }
    }

    update() {
        this.particles.forEach(p => {
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            p.alpha -= 0.015;
        });
    }

    draw() {
        this.particles.forEach(p => {
            ctx.fillStyle = `rgba(255, ${100 + Math.random() * 155}, 0, ${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fill();
        });
    }
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.05) {
        fireworks.push(new Firework(
            Math.random() * canvas.width,
            Math.random() * canvas.height / 2
        ));
    }

    fireworks = fireworks.filter(f => f.particles[0].alpha > 0);
    fireworks.forEach(f => { f.update(); f.draw(); });

    requestAnimationFrame(loop);
}

loop();