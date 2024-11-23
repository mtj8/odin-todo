import foodImage from "./happy.png";

function createHome() {
    // get content and clear
    const content = document.getElementById("content");

    // add text
    // <h1 id="home-header">welcome to good eats</h1>
    // <p>on my soul we have the best eats. you will act like this after eats</p>
    const header = document.createElement("h1");
    header.id = "header";
    header.textContent = "welcome to good eats";
    content.appendChild(header);

    const para = document.createElement("p");
    para.textContent = "on my soul we have the best eats. you will act like this after eats";
    content.appendChild(para);

    // add fine shyt
    const yum = document.createElement("img");
    yum.src = foodImage;
    yum.width = 200;

    // append
    content.appendChild(yum);
    console.log("home created");
}

export default createHome;