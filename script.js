const noButton = document.getElementById("no-button")
const yesButton = document.getElementById("yes-button")

yesButton.addEventListener("click", function(){
    alert("YAY")
})

noButton.addEventListener("mouseover", () => {

    const min = 100;
    const max = 300;

    const distance = Math.random()* (max-min) + min;
    const angle = Math.random() * Math.PI*2;

    const moveX = Math.cos(angle)*distance;
    const moveY = Math.sin(angle)*distance;

    noButton.style.transition = "transform 0.3s ease";
    // noButton.style.transform = "translate(${moveX}px, ${moveY}px)";
    noButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
});
