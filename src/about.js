function createAbout() {
    // get content
    const content = document.getElementById("content");

    const header = document.createElement('h1');
    header.textContent = 'we been doing this food stuff for a while now';
    header.id = "header";

    const para = document.createElement('p');
    para.textContent = 'mad boring ngl, but we get bread so we up. we thinking bout opening a blockchain AI restaurant with integrated web 3.0 functionality SaaS';

    // append
    content.appendChild(header);
    content.appendChild(para);
}

export default createAbout;