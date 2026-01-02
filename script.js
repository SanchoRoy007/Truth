function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* LOVE GAME */
let score = 0;
let playing = false;

function startGame() {
  score = 0;
  playing = true;
  document.getElementById("score").innerText = "Love Count: 0";
  document.getElementById("gameText").innerText = "Go Nan! 💗";

  setTimeout(() => {
    playing = false;
    document.getElementById("gameText").innerText =
      "Result: Love is infinite, just like us 🤍";
  }, 5000);
}

function increaseLove() {
  if (!playing) return;
  score++;
  document.getElementById("score").innerText = "Love Count: " + score;
}
