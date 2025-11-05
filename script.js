let containerDiv = document.querySelector("#cont")
let isDrawing = false
// disable the browser "image" dragging
document.addEventListener("mousedown", (e) => {
    e.preventDefault(); // stops browser drag behavior
    isDrawing = true;
});
document.addEventListener("mouseup", () => isDrawing = false);

function getRandomRGB() {
    let threeRGB = `rgb(${Math.floor(Math.random() * (255 - 0 + 1)) + 0}, ${Math.floor(Math.random() * (255 - 0 + 1)) + 0}, ${Math.floor(Math.random() * (255 - 0 + 1)) + 0})`
    return threeRGB
}

function rainbow() {
    let square = document.querySelectorAll(".square")
    document.addEventListener("mousedown", () => isDrawing = true);
    document.addEventListener("mouseup", () => isDrawing = false);
    square.forEach(square => {
        square.addEventListener("mouseover", (event) => {
        if (!isDrawing) return
        event.target.style.backgroundColor = getRandomRGB();
    });
    })
}

function black() {
    let square = document.querySelectorAll(".square")
    document.addEventListener("mousedown", () => isDrawing = true);
    document.addEventListener("mouseup", () => isDrawing = false);
    square.forEach(square => {
        square.addEventListener("mouseover", (event) => {
        if (!isDrawing) return
        event.target.style.backgroundColor = "black";
    });
    })
}

function progressive() {
    let square = document.querySelectorAll(".square")
    document.addEventListener("mousedown", () => isDrawing = true);
    document.addEventListener("mouseup", () => isDrawing = false);
    square.forEach(square => {
        // opacity is only set if it’s missing
        if (square.style.opacity === "" || square.style.opacity === undefined) {
            square.style.opacity = 0;
            square.style.backgroundColor = "black";
        }

        square.onmouseover = (event) => {
        if (!isDrawing) return;
        let currentOpacity = parseFloat(event.target.style.opacity) || 0
        let newOpacity = currentOpacity + 0.1
        event.target.style.opacity = newOpacity
    }});
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
    let squareSize = 640 / size;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    containerDiv.appendChild(square)
}
}

function reset() {
    let square = document.querySelectorAll(".square")
    square.innerHTML = ""
    square.forEach(square => {
    square.style.backgroundColor = "";
    square.style.opacity = 1;
    })
}

// assign class on buttons
let buttons = Array.from(document.querySelectorAll("button"))
buttons.forEach(btn => btn.classList.add("button"))