generateGrid(100);

function changeColor(item)
{
    console.log("here")
    item.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`
}

//returns a value between 0 and 255
function getRandomRGB()
{

    return Math.floor(Math.random() * 256);
}

function generateGrid(size = 16)
{
    const container = document.querySelector(".container");

    for (let i = 0; i < size * size; i++)
    {
        const item = document.createElement("div");
        item.classList = "container-item";
        item.style.flex = `1 0 ${100 / size}%`;
        item.addEventListener("mouseenter", function () { changeColor(item) });

        container.appendChild(item);
    }

}