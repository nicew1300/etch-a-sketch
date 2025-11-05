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

function myProgressive() {
    let square = document.querySelectorAll(".square")
    square.forEach(square => {
        // opacity is only set if it’s missing
        if (!square.style.opacity) {
            square.style.opacity = 0;
            square.style.backgroundColor = "black";
        }

        square.onmouseover = (event) => {
        currentOpacity = parseFloat(event.target.style.opacity) || 0
        let newOpacity = currentOpacity + 0.1
        event.target.style.opacity = newOpacity
    }});
}


// function progressive() {
//     let squares = document.querySelectorAll(".square");

//     squares.forEach(square => {
//         // reset stored opacity if missing
//         if (!square.dataset.opacity) square.dataset.opacity = 0;

//         // remove any previous event listener by replacing with a fresh one
//         square.onmouseover = (event) => {
//             let currentOpacity = parseFloat(event.target.dataset.opacity);
//             let newOpacity = Math.min(currentOpacity + 0.1, 1);
//             event.target.dataset.opacity = newOpacity;
//             event.target.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
//         };
//     });
// }

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
    square.style.backgroundColor = "white";
    square.style.opacity = 1;
    })
}

// assign class on buttons
let buttons = Array.from(document.querySelectorAll("button"))
buttons.forEach(btn => btn.classList.add("button"))