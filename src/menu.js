function createMenu() {
    // get content
    const content = document.getElementById("content");

    // create menu table
    const menuTable = document.createElement("table");
    menuTable.id = "menu-table";
    menuTable.innerHTML = `
        <tr>
            <th>food</th>
            <th>price</th>
        </tr>
        <tr>
            <td>bloxy cola</td>
            <td>5 R$</td>
        </tr>
        <tr>
            <td>nettspend nugget</td>
            <td>priceless</td>
        </tr>
        <tr>
            <td>Big Mac</td>
            <td>$8</td>
        </tr>
    `;

    // append
    content.appendChild(menuTable);
    
}

export default createMenu;