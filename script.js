
//getiting all documents
const menu = document.querySelector("#menuButton");
const colorChanger = document.querySelector("#colorChanger");
const navList = document.querySelector(".navList");
const close = document.querySelector("#closeBtn")
const colorPalette = document.querySelector(".colorPalette");
const navBar = document.querySelector(".navBarHero");
const beautiful = document.querySelector(".beautiful");
const button = document.querySelector("button")
const red = document.querySelector(".red")
const green = document.querySelector(".green")
const orange = document.querySelector(".orange")
const blue = document.querySelector(".defaultBack")


function displayNav() {
    navList.style.display = "block";
}
menu.addEventListener("click", displayNav);

function closeNav() {
    navList.style.display = "none";
}
close.addEventListener("click", closeNav);

function displayPalette() {

    if (colorPalette.style.display === "none") {
    colorPalette.style.display = "block";
    }
    else {
    colorPalette.style.display = "none";
    }
}
colorChanger.addEventListener("click", displayPalette);

function redColor() {
    navBar.style.backgroundColor = "red";
    button.style.backgroundColor = "red";
    beautiful.style.color = "red";
}
red.addEventListener("click", redColor);

function greenColor() {
    navBar.style.backgroundColor = "green";
    button.style.backgroundColor = "green";
    beautiful.style.color = "green";
}
green.addEventListener("click", greenColor);

function orangeColor() {
    navBar.style.backgroundColor = "orange";
    button.style.backgroundColor = "orange";
    beautiful.style.color = "orange";
}
orange.addEventListener("click", orangeColor);

function defaultColor() {
    navBar.style.backgroundColor = "var(--NAVBAR-COLOR)";
    button.style.backgroundColor = "var(--NAVBAR-COLOR)";
    beautiful.style.color = "var(--NAVBAR-COLOR)";
}
blue.addEventListener("click", defaultColor);