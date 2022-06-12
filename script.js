let body = document.querySelector("#body");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let displayCode = document.querySelector(".display-css");


displayCode.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value});`;

color1.addEventListener('input', function (e) {
    body.style.background = `linear-gradient(to right, ${e.target.value}, ${color2.value})`;
    displayCode.textContent = body.style.background + ";";
});

color2.addEventListener('input', function (e) {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${e.target.value})`;
    displayCode.textContent = body.style.background + ";";
});