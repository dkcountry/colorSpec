let generateRandomColors = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


let randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


let pickColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}


let changeColors = (color) => {
    for (let i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

let numSquares = 6;
let colors = generateRandomColors(numSquares);

const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;

let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", () => {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i =0; i < squares.length; i ++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", () => {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i =0; i < squares.length; i ++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", () => {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
})

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323"; 
            messageDisplay.textContent = "Try Again"
        }
    })
}

