const container = document.querySelector(".container");

for (let i = 0; i < 16; i++)
{
    const column = document.createElement("div");
    column.classList = "colourable"

    column.addEventListener("onmouseover", () =>
    {
        column.style = "background-color: black;"
    })


    for (let j = 0; j < 16; j++)
    {
        const row = document.createElement("div");
        row.classList = "colourable";
        row.addEventListener("onmouseover", () =>
        {
            row.style = "background-color: black;"
        })
        column.appendChild(row);
    }

    container.appendChild(column);
}

//need to add event listener to the divs to change colour on hover.
//the row divs aren't contained in the container element so they arent flex, needs fix.