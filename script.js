let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(character) {
    currentInput += character;
    display.value = currentInput;
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
        currentInput = '';
    } catch (error) {
        display.value = 'Erro';
        console.error(error);
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}
