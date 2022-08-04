let idade = +prompt('Qual a sua idade?');
let maioridade

if (idade >= 18) {
    maioridade = "Você é maior de idade."
} else {
    maioridade = "Você é menor de idade."
}

let isConcluiuEnsinoMedio = prompt('Você já concluiu o ensino médio? (Sim/Não)').toUpperCase();


if (isConcluiuEnsinoMedio === 'SIM'){
    isConcluiuEnsinoMedio = true
}else if (isConcluiuEnsinoMedio === 'NÃO') {
    isConcluiuEnsinoMedio = false
}else {
    alert('[ERRO] DADO INVÁLIDO!')
};

let isCursandoOutraFaculdade = prompt('Você está cursando alguma faculdade? (Sim/Não)').toUpperCase();


if (isCursandoOutraFaculdade === 'SIM') {
    isCursandoOutraFaculdade = true
}else if (isCursandoOutraFaculdade === "NÃO") {
    isCursandoOutraFaculdade = false
}else {
    alert('[ERRO] DADO INVÁLIDO!')
};

alert(`Com ${idade} anos ${maioridade};
A afirmação de que você concluiu o ensino médio é: ${isConcluiuEnsinoMedio};
A afirmação de que você está cursando alguma faculdade é: ${isCursandoOutraFaculdade}`);
