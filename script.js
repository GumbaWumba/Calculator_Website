
const button1 = document.querySelector("#Button1");
let input = document.querySelector("h1");

button1.addEventListener("click", () => {
    let value1 = button1.textContent.trim();

    if (input.textContent === "0"){
        input.textContent = value1;
    }else{
        input.textContent += value1;
    }
});

