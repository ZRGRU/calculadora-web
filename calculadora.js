function calcular () {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        // Use eval to calculate the expression
        const resultado = eval(expression);
        display.value = resultado;
    } catch (error) {
        display.value = 'Erro';
    }
}

const display = document.getElementById('display');

function limpar () {
    display.value = '';
}

function adicionar (valor) {
    display.value += valor;
}

function apagarUltimo () {
    display.value = display.value.slice(0, -1);
}

function bhaskara () {
    display.value = 'X= (-b ± √(b² - 4ac)) / 2a';
}

function raizQuadrada () {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        // Use eval to calculate the expression
        const resultado = Math.sqrt(eval(expression));
        display.value = resultado;
    } catch (error) {
        display.value = 'Erro';
    }
}