generateGrid(16); //default grid for initial load


let input = document.querySelector("#grid-size-input")
let generateButton = document.querySelector("#generate-grid-button")

generateButton.addEventListener("click", function () { generateGrid(input.value) })

let currentOpacity = 0.1;


function changeColor(item)
{
    console.log("here")
    item.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`

    item.style.opacity = currentOpacity;
    currentOpacity += 0.1;

    if (currentOpacity > 1) //reset opacity
        currentOpacity = 0.1;
}

//returns a value between 0 and 255
function getRandomRGB()
{
    return Math.floor(Math.random() * 256);
}

function generateGrid(size = 16)
{
    if (size <= 0 || size > 100)
    {
        alert("Invalid :( Please input a number between 1 and 100");
        return;
    }

    const container = document.querySelector(".container");

    container.innerHTML = ""; //remove previous grid before generating new one

    for (let i = 0; i < size * size; i++)
    {
        const item = document.createElement("div");

        item.classList = "container-item";
        item.style.flex = `1 0 ${100 / size}%`;
        item.addEventListener("mouseenter", function () { changeColor(item) });

        container.appendChild(item);
    }

}