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

let bg = document.getElementById('bg');
let shadow_left = document.getElementById('ayat');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Adjust the parallax effect for each image
    // bg.style.bottom = value * 0.5 + 'px'; // Adjust the multiplier as needed
    ayat.style.marginTop = value * 0.3 + 'px'; // Adjust the multiplier as needed
});