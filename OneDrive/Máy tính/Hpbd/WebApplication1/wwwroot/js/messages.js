window.onload = () => {

    // Mảng các câu chúc, dễ chỉnh sửa
    const messages = [
        "Anh chúc cục cưng của anh luôn tươi vui, cười nhiều hơn và luôn hạnh phúc bên anh 💕",
        "Chúc cô gái của anh tuổi mới thật xinh đẹp, rực rỡ và tràn ngập niềm vui ✨",
        "Mong mọi điều tốt đẹp nhất sẽ đến với em 🌸",
        "Happy Birthday! 🎂",
        "Anh iu cục cưng của anh nhìu lắmmm 💖"
    ];

    let msgIndex = 0;    // chỉ số câu hiện tại
    let charIndex = 0;   // chỉ số ký tự hiện tại
    const speed = 60;    // tốc độ gõ (ms)
    const pause = 800;   // thời gian nghỉ sau khi gõ xong 1 câu

    const box = document.getElementById("messages");

    function typeWriter() {
        if (msgIndex >= messages.length) return;

        const currentMessage = messages[msgIndex];

        // Nếu bắt đầu câu mới, tạo dòng mới
        if (charIndex === 0) {
            const newLine = document.createElement("div");
            newLine.className = "typed-line";
            box.appendChild(newLine);
        }

        const lines = document.getElementsByClassName("typed-line");
        const activeLine = lines[lines.length - 1];

        // Hiển thị từng chữ
        activeLine.innerHTML = currentMessage.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex < currentMessage.length) {
            setTimeout(typeWriter, speed);
        } else {
            // Gõ xong 1 câu → reset charIndex, chuyển câu tiếp theo
            charIndex = 0;
            msgIndex++;
            setTimeout(typeWriter, pause);
        }
    }

    typeWriter();
};