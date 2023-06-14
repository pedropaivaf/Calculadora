let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(character) {
    if (character === '%') {
        handlePercentage();
    } else {
        currentInput += character;
        display.value = currentInput;
    }
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculateResult() {
    let result;
    try {
        result = eval(currentInput);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Operação inválida');
        }
        display.value = result;
        currentInput = String(result);
    } catch (error) {
        display.value = 'Erro';
        console.error(error);
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function handlePercentage() {
    try {
        const value = eval(currentInput);
        if (isNaN(value) || !isFinite(value)) {
            throw new Error('Operação inválida');
        }
        const result = value / 100;
        display.value = result;
        currentInput = String(result);
    } catch (error) {
        display.value = 'Erro';
        console.error(error);
    }
}
