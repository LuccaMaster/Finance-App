let saldo = document.getElementById("mostrarSaldo");
let saldoInicial = 0.00;
let saldoSomado = 0;

let historico = document.getElementById("divHistorico");

window.onload = function() {
    saldo.textContent = saldoInicial;
}

let retirou = false;
let depositou = false;

function Adicionar() {
    let descricao = document.getElementById("descricao").value;
    let finalidade = document.getElementById("finalidade").value;
    let valor = document.getElementById("valor").value;

    let msgFinalidade;

    if (finalidade == 1) {
        msgFinalidade = "Retirou";
        retirou = true;
    }
    else if (finalidade == 2) {
        msgFinalidade = "Depositou";
        depositou = true;
    }

    let irParaHistorico = document.createElement("div");
    irParaHistorico.innerHTML = `
    <h3>Descrição: ${descricao}</h3>
    <h4>${msgFinalidade} $${valor}</h4>
    `;
    historico.appendChild(irParaHistorico);
    
    if (retirou == true) {
        Retirar(parseFloat(valor));
        retirou = false;
    } else if (depositou == true) {
        Depositar(parseFloat(valor));
        depositou = false;
    }

    document.getElementById("descricao").value = '';
    document.getElementById("finalidade").value = '';
    document.getElementById("valor").value = '';

    return false;
}

function Retirar(valor) {
    saldoSomado -= valor;
    saldo.textContent = saldoSomado.toFixed(2);
    //localStorage.setItem('saldoSomado', saldoSomado);
}

function Depositar(valor) {
    saldoSomado += valor;
    saldo.textContent = saldoSomado.toFixed(2);
    //localStorage.setItem('saldoSomado', saldoSomado);
}