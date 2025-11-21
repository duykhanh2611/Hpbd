setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    heart.innerText = "❤️";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}, 300);