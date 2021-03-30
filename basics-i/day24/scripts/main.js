var space = {
    earth: {
        gravity: 1.0,
        image: "earth.png"
    },
    jupiter: {
        gravity: 2.34,
        image: "jupiter.png"
    },
    mars: {
        gravity: 0.38,
        image: "mars.png"
    },
    mercury: {
        gravity: 0.38,
        image: "mercury.png"
    },
    moon: {
        gravity: 0.167,
        image: "moon.png"
    },
    neptune: {
        gravity: 1.12,
        image: "neptune.png"
    },
    pluto: {
        gravity: 0.067,
        image: "pluto.png"
    },
    saturn: {
        gravity: 0.93,
        image: "saturn.png"
    },
    uranus: {
        gravity: 0.93,
        image: "uranus.png"
    },
    venus: {
        gravity: 0.91,
        image: "venus.png"
    }
};
var input = document.querySelector("input");
var select = document.querySelector("select");
var button = document.querySelector("button");
var container = document.querySelector(".flex-container");
var weight;
var containerUI = function (img, text) {
    var image = document.createElement("img");
    image.src = "images/" + img;
    var p = document.createElement("p");
    p.textContent = text + " N";
    p.className = "big";
    container;
    container.appendChild(image);
    container.appendChild(p);
};
button.addEventListener("click", function () {
    var imgSrc;
    console.log("Select: " + select.value + ", Input: " + input.value);
    imgSrc = space[select.value].image;
    weight = Number(input.value) * space[select.value].gravity;
    containerUI(imgSrc, weight);
    console.log(weight);
});
