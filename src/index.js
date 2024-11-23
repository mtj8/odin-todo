import createHome from './home.js'
import createMenu from './menu.js'
import createAbout from './about.js'
import './style.css'

createHome();

// add buttons and event listeners
const homeButton = document.getElementById("home");
homeButton.addEventListener("click", function() {
    document.getElementById("content").textContent = "";
    createHome();
});

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", () => {
    document.getElementById("content").textContent = "";
    createMenu();
});

const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", () => {
    document.getElementById("content").textContent = "";
    createAbout();
});

console.log("hi");