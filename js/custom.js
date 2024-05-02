const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
    const element = document.getElementById(id),
        text = element.innerText.split("");

    element.innerText = "";

    text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const letter = document.createElement("span");

        letter.className = "letter";

        letter.innerText = value;

        letter.style.animationDelay = `${index * 1000 }ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
    });
}

enhance("channel-link");

document.getElementById("toggleButton").addEventListener("click", function () {
    document.getElementById("secretTwo").classList.toggle("hidden");

    if (!secretTwo.classList.contains('hidden')) {
        // secretTwo.classList.add('animate-fadeInDown');
    }
});



















































































































































































































var audio = document.getElementById("myAudio");
var audioButton = document.getElementById("audioButton");
var clickCount = 0;

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioButton.textContent = "Pause";
        clickCount++;
        console.log('What are u searching for bruh?');
        if (clickCount === 15) {
            console.log('You clicked the button 15 times!');
            console.log('%c https://youtu.be/K1WTmHniE78', 'font-weight:bold; background-color:black; color:white; padding:15px');
        }
    } else {
        audio.pause();
        audioButton.textContent = "Play";
        console.log('If u see this, it means u hit the button twice :D');
    }
}