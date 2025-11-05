let containerDiv = document.querySelector("#cont")

function black() {
    let square = document.querySelectorAll(".square")
    square.forEach(square => {
        square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    });
    })
}

function getRandomRGB() {
    let threeRGB = `rgb(${Math.floor(Math.random() * (255 - 0 + 1)) + 0}, ${Math.floor(Math.random() * (255 - 0 + 1)) + 0}, ${Math.floor(Math.random() * (255 - 0 + 1)) + 0})`
    return threeRGB
}

function rainbow() {
    let square = document.querySelectorAll(".square")
    square.forEach(square => {
        square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = getRandomRGB();
    });
    })
}

function progressive() {
    let square = document.querySelectorAll(".square")
    square.forEach(square => {
        square.style.opacity = 0;
        square.addEventListener("mouseover", (event) => {
        let currentOpacity = parseFloat(event.target.style.opacity)
        let newOpacity = currentOpacity + 0.1
        event.target.style.opacity = newOpacity;
    });
    })
}

function getGridSize() {
    let size = parseFloat(prompt("Number of squares per side for the grid? (number between 0 and 100)"))
    while(size === 100 || size === 0 || size < 0 || size > 100 || isNaN(size) == true){
        alert("Enter a valid number between 0 and 100! No more, no less.")
        size = parseFloat(prompt("Number of squares per side for the grid? (number between 0 and 100)"))
    }
    return size
}

function makeGrid() {
    containerDiv.innerHTML = ""
    let size = getGridSize()
    for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div")
    square.classList.add("square")
    containerDiv.appendChild(square)
}
}

function reset() {
    let square = document.querySelectorAll(".square")
    square.forEach(square => {
    square.style.backgroundColor = "white";})
}

// assign class on buttons
let buttons = Array.from(document.querySelectorAll("button"))
buttons.forEach(btn => btn.classList.add("button"))