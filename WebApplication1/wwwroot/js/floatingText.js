function floatingText(msg) {
    const t = document.createElement("div");
    t.className = "floating-text";
    t.innerText = msg;
    t.style.left = Math.random() * 80 + "vw";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

setInterval(() => {
    const words = ["Happy Birthday!", "Love u", "✨", "🎂", "💖"];
    floatingText(words[Math.floor(Math.random() * words.length)]);
}, 1200);