const noButton = document.getElementById("no-button")
const yesButton = document.getElementById("yes-button")
const question = document.getElementById("question")
const success = document.getElementById("success")

yesButton.addEventListener("click", function(){
    question.style.display = "none";
    success.style.display = "flex";
    launchConfetti();
})

noButton.addEventListener("mouseover", () => {

    const min = 100;
    const max = 300;

    const distance = Math.random()* (max-min) + min;
    const angle = Math.random() * Math.PI*2;

    const moveX = Math.cos(angle)*distance;
    const moveY = Math.sin(angle)*distance;

    noButton.style.transition = "transform 0.3s ease";
    noButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
});

function launchConfetti() {
    const colors = ["#ff69b4", "#ffd700", "#7cffcb", "#ffffff", "#ff9ff3"];

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        confetti.style.opacity = Math.random();

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}
