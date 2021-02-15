var css = document.querySelector("h3");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("gradient");

console.log(body);

var changeBackground = function() {
    console.log("linear-gradient(to right, " + color1.value + ", " + color2.value + ");")
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
    css.textContent = body.style.background + ';';
}


color1.addEventListener("input", changeBackground)

color2.addEventListener("input", changeBackground)