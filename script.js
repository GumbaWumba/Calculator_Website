
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

let input = document.querySelector("h1");

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();

        if (input.textContent === "0") {
            input.textContent = value;
        } else {
            input.textContent += value;
        }
    });
});

operatorButton.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();

        input.textContent += value;
    });
});

equalButton.addEventListener("click", () => {
    const teile = input.textContent.match(/^(\d+)([+\-*/])(\d+)$/);

    if (teile === null) {
        return;   // keine gültige Rechnung, nichts tun
    }

    const zahl1 = Number(teile[1]);
    const operator = teile[2];
    const zahl2 = Number(teile[3]);
    let ergebnis;

    switch (operator) {
        case "+":
            ergebnis = zahl1 + zahl2;
            break;
        case "-":
            ergebnis = zahl1 - zahl2;
            break;
        case "*":
            ergebnis = zahl1 * zahl2;
            break;
        case "/":
            ergebnis = zahl2 === 0 ? "Fehler" : zahl1 / zahl2;
            break;
    }

    input.textContent = ergebnis;
});