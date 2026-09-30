
const numberButton = document.querySelector(".number");
const operatorButton = document.querySelector(".operator");
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
