
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
    const parts = input.textContent.match(/\d+|[+\-*/]/g);

    let result = Number(parts[0]);

    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const number = Number(parts[i + 1]);

        if (operator === "+") result += number;
        if (operator === "-") result -= number;
        if (operator === "*") result *= number;
        if (operator === "/") result /= number;
    }

    input.textContent = Number.isFinite(result) ? result : "Error";
});