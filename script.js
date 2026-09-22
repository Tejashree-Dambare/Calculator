let display = document.getElementById("display");
let previousDisplay = document.getElementById("previous-display");

function appendValue(value) {

    if (display.value === "0" || display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}


function clearDisplay() {

    display.value = "0";

    previousDisplay.textContent = "";
}


function deleteLast() {

    if (display.value.length > 1) {

        display.value = display.value.slice(0, -1);

    } else {

        display.value = "0";
    }
}


function calculate() {

    try {

        let expression = display.value;

        let result = eval(expression);

        previousDisplay.textContent = expression + " =";

        display.value = result;

    } catch (error) {

        display.value = "Error";
    }
}


/* Keyboard support */

document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (!isNaN(key) || key === ".") {

        appendValue(key);

    } else if (["+", "-", "*", "/", "%"].includes(key)) {

        appendValue(key);

    } else if (key === "Enter" || key === "=") {

        calculate();

    } else if (key === "Backspace") {

        deleteLast();

    } else if (key === "Escape") {

        clearDisplay();
    }

});