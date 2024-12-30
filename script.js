let currentValue = ''; // Valor atual exibido no visor
let previousValue = null; // Valor armazenado para cálculo
let operator = null; // Operador selecionado

// Função para adicionar números ou operadores ao visor
function adicionar(valor) {
    if (!isNaN(valor) || valor === '.') {
        // Adiciona números e ponto
        currentValue += valor;
    } else {
        definirOperador(valor); // Define o operador se não for número
    }
    atualizarVisor();
}

// Função para definir o operador
function definirOperador(op) {
    if (currentValue === '' && previousValue === null) return; // Ignora operadores se nenhum número foi inserido

    if (previousValue === null) {
        previousValue = parseFloat(currentValue); // Armazena o valor atual
    } else if (operator) {
        calcular(); // Calcula se já houver um operador selecionado
    }

    operator = op;
    currentValue = ''; // Limpa o valor atual para o próximo número
}

// Função para calcular o resultado
function calcular() {
    if (previousValue !== null && operator && currentValue !== '') {
        const currentNum = parseFloat(currentValue); // Converte o número atual para cálculo
        let result;

        switch (operator) {
            case '+':
                result = previousValue + currentNum;
                break;
            case '-':
                result = previousValue - currentNum;
                break;
            case '*':
                result = previousValue * currentNum;
                break;
            case '/':
                result = currentNum === 0 ? 'Erro' : previousValue / currentNum; // Evita divisão por zero
                break;
            default:
                return;
        }

        // Atualiza os valores após o cálculo
        currentValue = result.toString();
        previousValue = null;
        operator = null;
    }
    atualizarVisor();
}

// Função para limpar o visor
function limpar() {
    currentValue = '';
    previousValue = null;
    operator = null;
    atualizarVisor();
}

// Função para apagar o último número digitado
function apagar() {
    currentValue = currentValue.slice(0, -1);
    atualizarVisor();
}

// Função para calcular porcentagem
function porcentagem() {
    if (currentValue !== '') {
        currentValue = (parseFloat(currentValue) / 100).toString();
        atualizarVisor();
    }
}

// Função para atualizar o visor
function atualizarVisor() {
    const visor = document.getElementById('resultado');
    visor.textContent = currentValue || '0'; // Mostra 0 se o visor estiver vazio
}
