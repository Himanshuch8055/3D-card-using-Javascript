const o = document.querySelectorAll(".card");
const topElement = document.getElementById("top");

topElement.addEventListener("mousemove", function (event) {
    const e = -(window.innerWidth / 2 - event.pageX) / 30;
    const n = (window.innerHeight / 2 - event.pageY) / 10;

    o.forEach(function (element) {
        element.style.transform = `rotateY(${e}deg) rotateX(${n}deg)`;
        element.style.webkitTransform = `rotateY(${e}deg) rotateX(${n}deg)`;
        element.style.mozTransform = `rotateY(${e}deg) rotateX(${n}deg)`;
    });
});