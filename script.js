const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const choices = document.getElementById("choices");
const noBtn = document.getElementById("noBtn");

let step = 0;

const messages = [
    "I don’t know how to say this easily...",
    "But you matter to me more than you know.",
    "With you, even silence feels warm.",
    "So I just want to ask you something..."
];

nextBtn.addEventListener("click", () => {
    if (step < messages.length) {
        typeText(messages[step]);
        step++;
    } else {
        nextBtn.classList.add("hidden");
        choices.classList.remove("hidden");
    }
});

function typeText(message) {
    text.innerHTML = "";
    let i = 0;
    const typing = setInterval(() => {
        text.innerHTML += message.charAt(i);
        i++;
        if (i === message.length) clearInterval(typing);
    }, 40);
}

function yesClicked() {
    document.querySelector(".container").innerHTML = `
        <h1>❤️</h1>
        <p>
            Thank you for choosing me.<br>
            I promise to choose you,<br>
            again and again.
        </p>
    `;
}

// No button runs away 😏
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});

// Floating hearts
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 250);
