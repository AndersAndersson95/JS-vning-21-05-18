const area1 = document.getElementById("input-area");
const area2 = document.getElementById("output-area");

function reverseText(text) {
    const letters = text.split("");
    const reversedLetters = letters.reverse();
    const finalText = reversedLetters.join("");
    return finalText;
}

function whenKeyUp(event) {
    const textValue = event.target.value;
    const textValueBackwards = reverseText(textValue);
    
    area2.value = textValueBackwards;
}

area1.addEventListener("keyup", whenKeyUp);

function createSquare() {
    const square = document.createElement("div");
    square.innerText = "you are typing something";
    return square;
}

function insertSquare(square, parent) {
    parent.appendChild(square);
}



function whenKeyDown(event) {
    const mySquare = createSquare();
    insertSquare(mySquare, document.body);    
}

area1.addEventListener("keydown", whenKeyDown);