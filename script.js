
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const deleteButton = document.querySelector(".del");

let input = document.querySelector("h1");


numberButton.forEach(button => {
    button.addEventListener("click", () => {
        if (input.textContent == "Error"){
            input.textContent = "";
        }

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
        if (input.textContent == "Error"){
            input.textContent = "0";
        }
        
        const value = button.textContent.trim();
        console.log(input.textContent.at(-1));

        if("+*/".includes(input.textContent.at(-1))){
        input.textContent = input.textContent.slice(0, input.textContent.length - 1);
        }if("+-*/".includes(input.textContent)){

        }

        input.textContent += value;
    });
});

deleteButton.addEventListener("click", () => {
    if (input.textContent == "Error"){
        input.textContent = "";
    }

    input.textContent = input.textContent.slice(0, -1);

    if (input.textContent === "") {
        input.textContent = "0";
    }
});

equalButton.addEventListener("click", () => {
    const parts = input.textContent.match(/(?<![\d.])-?\d+\.?\d*|[+\-*/]/g);

    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];

        if (operator === "*" || operator === "/") {
            const left = Number(parts[i - 1]);
            const right = Number(parts[i + 1]);
            const halfResult = operator === "*" ? left * right : left / right;

            parts.splice(i - 1, 3, halfResult);
            i -= 2; 
        }
    }

    let result = Number(parts[0]);

    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const number = Number(parts[i + 1]);

        if (operator === "+") result += number;
        if (operator === "-") result -= number;
    }

    input.textContent = Number.isFinite(result) ? result : "Error";
});