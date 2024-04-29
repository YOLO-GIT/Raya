let bg = document.getElementById('bg');
let ayat = document.getElementById('ayat');
let ketupat = document.getElementById('ketupat');
let moon = document.getElementById('moon');
let mosque = document.getElementById('mosque');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Adjust the parallax effect for each image
    // bg.style.bottom = value * 0.5 + 'px'; // Adjust the multiplier as needed
    ayat.style.marginTop = value * -0.3 + 'px'; // Adjust the multiplier as needed
    ketupat.style.marginTop = value * -0.1 + 'px'; // Adjust the multiplier as needed
    moon.style.marginTop = value * -0.3 + 'px'; // Adjust the multiplier as needed
    mosque.style.marginTop = value * 0.1 + 'px'; // Adjust the multiplier as needed
});